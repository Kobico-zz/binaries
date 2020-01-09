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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/legacy/plugins/gigya.services.accounts.plugins.screenSet_v1.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/legacy/plugins/gigya.services.accounts.plugins.screenSet_v1.js":
/*!****************************************************************************!*\
  !*** ./src/legacy/plugins/gigya.services.accounts.plugins.screenSet_v1.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/// <reference path="gigya.services.socialize.plugins.js" />
(function () {
    if (typeof window.gigya.accounts.plugins == 'undefined') window.gigya.accounts.plugins = {};
    window.gigya.accounts.plugins.screenSet = {
        instances: {},
        showScreenSet: function (p) {
            privateScope.createInstance(p);
        },
        switchScreen: function (p) {
            var containerID = p.isPopup ? '' : p['containerID'];
            var instance = window.gigya.accounts.plugins.screenSet.instances[p['screenSet'] + '_' + containerID];
            if (instance) {
                instance.switchScreen(p.screen);
            }
        },
        hideScreenSet: function (p) {
            var containerID = p.isPopup ? '' : p['containerID'];
            var instance = window.gigya.accounts.plugins.screenSet.instances[p['screenSet'] + '_' + containerID];
            if (instance) {
                instance.hide('canceled', null, true);
            }
        },
        _injectCSS: function (p) {
            if (!p) p = {};
            window.gigya.global.addCSS(privateScope.defaultCss, p.cssPrefix);
            if (window.gigya.localInfo.isIE7 || window.gigya.localInfo.isIE8 || (window.gigya.localInfo.isIE && window.gigya.localInfo.quirksMode)) {
                window.gigya.global.addCSS('.gigya-layout-cell {overflow:hidden;margin-left:-1px!important;}');
            }
            privateScope.addedCSS = true;
        }
    }
    var publicScope = window.gigya.accounts.plugins.screenSet;

    var privateScope = {
        oErrorAttributes: {
            206001: {
                name: 'data-on-pending-registration-screen',
                requiresFinalize: true
            },
            403043: {
                name: 'data-on-existing-login-identifier-screen'
            },
            206002: {
                name: 'data-on-pending-verification-screen',
                resetFinalizeNeededState: true
            },
            206003: {
                name: 'data-on-missing-loginid-screen'
            },
            403100: {
                name: 'data-on-pending-password-change-screen',
                requiresFinalize: true
            },
            403101: {
                name: 'data-on-pending-tfa-verification-screen',
                requiresFinalize: true
            },
            403102: {
                name: 'data-on-pending-tfa-registration-screen',
                requiresFinalize: true
            },
            403110: {
                name: 'data-on-pending-recent-login-screen'
            }
        },
        /*
		"specialFields" are used as params for "submit" function.
		if "dataObjectName" exists it will be used for fields that are not in "specialFields" and starts with the object name.
		if "profileObjectName" exists it will be used for fields that are not in "dataObjectName".
		*/
        oFormsActions: {
            'gigya-login-form': {
                submit: window.gigya.accounts.login,
                defaultSubmitParams: { include: 'profile,data,emails' },
                specialFields: { loginID: 1, password: 1, captchaText: 1, captchaToken: 1 }
            },
            'gigya-reset-password-form': {
                submit: window.gigya.accounts.resetPassword,
                specialFields: { loginID: 1, newPassword: 1, email: 1, secretAnswer: 1, email: 1 },
                profileObjectName: 'securityFields',
                resetFinalizeNeededState: true
            },
            'gigya-register-form': {
                neededData: {
                    initRegistration: {
                        params: {},
                        cache: false
                    },
                    getPolicies: {
                        params: {
                            sections: 'passwordComplexity'
                        }
                    },
                    getSchema: {
                        params: {}
                    }
                },
                prepopulateFrom: ['getAccountInfo', 'getAccountInfo.profile', 'getAccountInfo.loginIDs'],
                submit: window.gigya.accounts.register,
                defaultSubmitParams: { include: 'profile,data,emails,loginIDs' },
                specialFields: { username: 1, email: 1, password: 1, secretQuestion: 1, secretAnswer: 1, captchaText: 1, captchaToken: 1 },
                profileObjectName: 'profile',
                dataObjectName: 'data'
            },
            'gigya-link-accounts-form': {
                submit: window.gigya.accounts.linkAccounts,
                defaultSubmitParams: { include: 'profile,data' },
                specialFields: { loginID: 1, password: 1 }
            },
            'gigya-profile-form': {
                neededData: {
                    getSchema: {
                        params: {}
                    },
                    getAccountInfo: {
                        params: {
                            include: 'loginIDs,emails,profile,data'
                        }
                    }
                },
                prepopulateFrom: ['getAccountInfo', 'getAccountInfo.profile', 'getAccountInfo.loginIDs'],
                specialFields: { username: 1, oldPassword: 1, password: 1, newPassword: 1, passwordRetype: 1, secretQuestion: 1, secretAnswer: 1, addLoginEmails: 1, removeLoginEmails: 1 },
                submit: window.gigya.accounts.setAccountInfo,
                profileObjectName: 'profile',
                dataObjectName: 'data'
            },
            'gigya-resend-verification-code-form': {
                neededData: {
                    getAccountInfo: {
                        params: {
                            include: 'emails'
                        }
                    }
                },
                submit: window.gigya.accounts.resendVerificationCode,
                specialFields: { email: 1 }
            }
        },
        isHidden: function (el) {
            while (el && el.parentNode) {
                if (el.style.visibility == 'hidden' || (el.className.indexOf('gigya-error-display') != -1 && el.className.indexOf('gigya-error-display-active') == -1) || el.style.display == 'none') {
                    return true;
                } else {
                    el = el.parentNode;
                }
            }
            return false;
        },
        // Checks if the field is hidden (inside hidden gigya-container)
        isFieldInHiddenContainer: function (el) {
            var curr = el;

            while (curr) {
                if (window.gigya.utils.DOM.isElementClass(curr, 'gigya-container') && !window.gigya.utils.DOM.isElementClass(curr, 'gigya-container-enabled'))
                    return true;

                curr = curr.parentElement;
            }

            return false;
        },
        // Relevant to gigya-container widget
        // rendering = checked on widget render, validation = checked in each field change
        containerConditions: {
            sets: {
                rendering: {
                    'data-domains': function (value) {
                        var allowedDomains = value.split(',');

                        for (var i = 0; i < allowedDomains.length; i++) {
                            if (window.gigya.pluginUtils.domain.isInDomain(allowedDomains[i]))
                                return true;
                        }

                        return false;
                    },
                    'data-apikeys': function (value) {
                        var apikeys = value.split(',');
                        return (window.gigya.utils.array.indexOf(apikeys, window.gigya.thisScript.APIKey) != -1);
                    },
                    'data-prob': function (value, container) {
                        return (container._screenSet._random <= parseFloat(value));
                    },
                    'data-after-date': function (value) {
                        var timeValue = new Date(value);
                        return ((new Date()).getTime() > timeValue.getTime());
                    },
                    'data-before-date': function (value) {
                        var timeValue = new Date(value);
                        return ((new Date()).getTime() <= timeValue.getTime());
                    },
                    'data-display-cap': function (value, container) {
                        var containerHistory = privateScope.containerConditions.getHistoryFromSettings(container);
                        if (!containerHistory) return false;

                        if (value > containerHistory.displayCount) {
                            if (!containerHistory.wasUpdated) {
                                containerHistory.displayCount++;
                                privateScope.containerConditions.saveHistoryInSettings(containerHistory, container);
                                containerHistory.wasUpdated = true;
                            }

                            return true;
                        }
                        else {
                            return false;
                        }
                    },
                    'data-display-freq': function (value, container) {
                        var containerHistory = privateScope.containerConditions.getHistoryFromSettings(container);
                        if (!containerHistory) return false;

                        var now = (new Date()).getTime();
                        var timePassed = (now - containerHistory.lastDisplay) / 1000; // Miliseconds -> seconds

                        if (containerHistory.lastDisplay == -1 || value < timePassed) {
                            if (!containerHistory.wasUpdated) {
                                containerHistory.lastDisplay = now;
                                privateScope.containerConditions.saveHistoryInSettings(containerHistory, container);
                                containerHistory.wasUpdated = true;
                            }

                            return true;
                        }
                        else {
                            return false;
                        }
                    },
                    'data-empty-fields': function (value, container) {
                        var inputs = container._el.getElementsByTagName('*');
                        var checkEmptyFields;

                        var checkEmptyFields;
                        if (value == '*') {
                            checkEmptyFields = [];

                            for (var i = 0; i < inputs.length; i++) {
                                var name = inputs[i].attributes['data-gigya-name'];
                                if (name)
                                    checkEmptyFields.push(name.value);
                            }
                        }
                        else {
                            checkEmptyFields = value.split(',');
                        }

                        for (var i = 0; i < checkEmptyFields.length; i++) {
                            var elements = window.gigya.utils.DOM.getElementsByAttribute(container._el, '*', 'name', checkEmptyFields[i]);
                            if (elements && elements.length > 0 && !elements[0].value) {
                                return true;
                            }
                        }

                        return false;
                    }
                },
                validation: {
                    'data-condition': function (value, container) {
                        var mergedData = {};
                        if (container._screenSet._apiData.getAccountInfo) {
                            mergedData = window.gigya.utils.object.extractProperties(container._screenSet._apiData.getAccountInfo, {}, 'profile|data');
                        }
                        if (!mergedData.profile) mergedData.profile = {};
                        if (!mergedData.data) mergedData.data = {};

                        if (container._form) {
                            var formData = container._form.getFlatFormData();

                            // Merging the form data into the account data. Because the form data comes "flat" (key can be "profile.firstName")
                            // we have to parse it and go deep into the mergedData object
                            for (var path in formData) {
                                var currObj = mergedData;
                                var pathParts = path.split('.');

                                while (pathParts.length > 1) {
                                    var currKey = pathParts.splice(0, 1);
                                    if (typeof currObj[currKey] == 'undefined')
                                        currObj[currKey] = {};

                                    currObj = currObj[currKey];
                                }

                                currObj[pathParts[0]] = formData[path];
                            }
                        }

                        var fnTest = new Function('value', 'data', 'profile', 'return eval(value);');
                        return fnTest(value, mergedData.data, mergedData.profile);
                    }
                }
            },
            testContainer: function (container, conditionSet) {
                // Testing if there's an empty required field in the container (stronger than all tests)
                var containerElements = container._el.getElementsByTagName('*');
                for (var i = 0; i < containerElements.length; i++) {
                    var fieldName = containerElements[i].attributes['data-gigya-name'];
                    if (fieldName && fieldName.value) {
                        var isRequired = container._screenSet.isRequiredField(fieldName.value);
                        if (isRequired && !containerElements[i].value) {
                            return true;
                        }
                    }
                }

                // Running relevant tests on container
                for (var i = 0; i < container._el.attributes.length; i++) {
                    var attribute = container._el.attributes[i];
                    var fnTester = conditionSet[attribute.name];

                    if (fnTester && attribute.value) {
                        if (!fnTester(attribute.value, container)) {
                            return false;
                        }
                    }
                }

                return true;
            },
            getHistoryNeededContainers: function (form) {
                if (!form) return;
                var result = [];

                var containers = window.gigya.utils.DOM.getElementsByClass(form, 'gigya-container');
                for (var i = 0; i < containers.length; i++) {
                    var container = containers[i];
                    var name = container.getAttribute('name');
                    if (container && name && (container.attributes['data-display-cap'] || container.attributes['data-display-freq'])) {
                        result.push(name);
                    }
                }

                return result;
            },
            getHistoryFromSettings: function (container) {
                if (!container._screenSet._apiData.getUserSettings ||
                    container._screenSet._apiData.getUserSettings.errorCode > 0) return;

                var containerHistories = container._screenSet._apiData.getUserSettings.settings;
                if (!containerHistories) return;

                var containerName = container._el.attributes['name'].value;
                if (!containerName) return;

                var history = {};
                if (containerHistories[containerName]) {
                    history = containerHistories[containerName];
                }

                if (!history.displayCount)
                    history.displayCount = 0;
                if (!history.lastDisplay)
                    history.lastDisplay = -1;

                return history;
            },
            saveHistoryInSettings: function (containerHistory, container) {
                if (!container._screenSet._apiData.getUserSettings ||
                    container._screenSet._apiData.getUserSettings.errorCode > 0) return;
                var containerHistories = container._screenSet._apiData.getUserSettings.settings;
                if (!containerHistories) return;

                var containerName = container._el.attributes['name'].value;
                containerHistories[containerName] = containerHistory;

                var settings = {};
                settings[containerName] = {};
                window.gigya.utils.object.extractProperties(containerHistory, settings[containerName], 'displayCount|lastDisplay');

                window.gigya.socialize.setUserSettings({
                    group: 'gigya_container_history-' + container._screenSet._ID,
                    regToken: (container._screenSet._lastSubmittedFormResponse ? container._screenSet._lastSubmittedFormResponse.regToken : null),
                    settings: settings,
                    disableLocalSettings: true
                });
            }
        },

        errorCodes: {
            'MISSING_REQUIRED': 400027,
            //'INVALID_VALUE': 400006,
            'VALIDATION_ERROR': 400009,
            'UNIQUE_IDENTIFIER_EXISTS': 400003
        },
        alwaysRequiredFields: {
            secretAnswer: 1,
            secretQuestion: 1,
            loginID: 1,
            username: 1,
            password: 1,
            oldPassword: 1,
            newPassword: 1
        },
        _originalElements: {},
        GigyaParam: function (name, autoFillName, paramName) {
            if (autoFillName == null) autoFillName = name.replace('_', '');
            if (paramName == null) paramName = autoFillName;
            return { name: name, autoFillName: autoFillName, paramName: paramName };
        },
        oFieldNameData: {},
        getPasswordStrengthData: function (pass) {
            if (!pass) pass = '';
            var oResult = {
                lower: pass.match(/[a-z]/g),
                upper: pass.match(/[A-Z]/g),
                digits: pass.match(/\d/g),
                specialChars: pass.match(/[^\dA-Za-z]/g)
            }
            for (var p in oResult) {
                if (oResult[p] && oResult[p].length) {
                    oResult[p] = oResult[p].length;
                }
                if (!oResult[p]) oResult[p] = 0;
            }
            oResult.length = pass.length;
            oResult.charGroups = ((oResult.lower > 0) + (oResult.upper > 0) + (oResult.digits > 0) + (oResult.specialChars > 0));
            return oResult;
        },
        isPasswordStrengthValid: function (pass, oPassStrength, oComplexityPolicy) {
            if (!pass || !oPassStrength || !oComplexityPolicy) return;
            if (oComplexityPolicy.regex) {
                var regexFormat = new RegExp(oComplexityPolicy.regex);
                return regexFormat.test(pass);
            } else {
                return !(oPassStrength.lower < oComplexityPolicy.minLowercase || oPassStrength.upper < oComplexityPolicy.minUppercase ||
							oPassStrength.digits < oComplexityPolicy.minDigit || oPassStrength.specialChars < oComplexityPolicy.minSpecialChars ||
							oPassStrength.charGroups < oComplexityPolicy.minCharGroups || oPassStrength.length < oComplexityPolicy.minLength);
            }
        },
        attachFileUpload: function (el, formTarget, formAction) {
            var divUploadForm = el.divUploadForm;
            if (!divUploadForm) {
                var divUploadForm = document.createElement('div');
                el.id = formTarget + '__' + (new Date()).getTime();
                divUploadForm.style.position = 'absolute';
                divUploadForm.style.overflow = 'hidden';
                divUploadForm.style.fontSize = '50px';
                divUploadForm.style.cursor = 'pointer';
                divUploadForm.style.opacity = '0';
                divUploadForm.style.filter = 'alpha(opacity=0)';
            }

            divUploadForm.style.zIndex = window.gigya.utils.DOM.getNextZIndex();
            var pos = window.gigya.global.getPos(el);
            var fnPositionUploadForm = function () {
                divUploadForm.style.left = pos.x;
                divUploadForm.style.top = pos.y;
                divUploadForm.style.height = el.offsetHeight + 'px';
                divUploadForm.style.width = el.offsetWidth + 'px';
            }

            var positionInterval = window.setInterval(function () {
                if (!el || !el.parentNode) {
                    clearInterval(positionInterval);
                } else if (el.offsetHeight != 0) {
                    fnPositionUploadForm();
                    clearInterval(positionInterval);
                }
            }, 500);

            divUploadForm.innerHTML = '<form enctype="multipart/form-data" method="post" class="gigya-photo-upload-form" target="' + formTarget + '" action="' + formAction + '"><input type="file" accept="image/*" name="_profilePhoto" style="font-size:500px;direction:rtl;height:100%;cursor:pointer;' + (window.gigya.localInfo.isIE ? 'width:1000px' : '') + '" /></form>';

            if (!el.divUploadForm) window.gigya.utils.DOM.appendToBody(divUploadForm);

            var frmUpload = divUploadForm.firstChild;
            var fileInput = frmUpload.elements['_profilePhoto'];
            window.gigya.utils.DOM.addEventListener(fileInput, 'change', function () {
                var elPath = document.getElementById(formTarget + '_path');
                if (elPath) elPath.innerHTML = fileInput.value.split('\\').pop();
                fileInput.form.uploading = true;
                document.getElementById(formTarget).setAttribute('uploading', '1');
                fileInput.form.submit();
            });
            el.divUploadForm = divUploadForm;

            var This = this;
            el._fileUploadInterval = window.setInterval(function () { This.onFileUploadInterval(el, divUploadForm) }, 500);
            return divUploadForm.firstChild;
        },
        checkSchema: function (schema, oFields) {

        },
        onFileUploadInterval: function (el, divUploadForm) {
            if (!document.getElementById(el.id)) {
                try {
                    divUploadForm.parentNode.removeChild(divUploadForm);
                } catch (ex) { };
                window.clearInterval(el._fileUploadInterval);
                el._fileUploadInterval = null;
            } else {
                var pos = window.gigya.global.getPos(el);
                if (parseInt(divUploadForm.style.left) != pos.x) divUploadForm.style.left = pos.x + 'px';
                if (parseInt(divUploadForm.style.top) != pos.y) divUploadForm.style.top = pos.y + 'px';
            }
        },
        dimContainer: function (el) {
            if (el.elDim) return;
            var elDim = document.createElement('div');
            elDim.style.width = el.offsetWidth + 'px';
            elDim.style.height = el.offsetHeight + 'px';
            elDim.className = 'gigya-screen-dimmer';
            var pos = window.gigya.global.getPos(el);
            elDim.style.top = pos.y + 'px';
            elDim.style.left = pos.x + 'px';
            elDim.style.zIndex = window.gigya.utils.DOM.getNextZIndex();
            el.elDim = elDim;
            window.gigya.utils.DOM.appendToBody(elDim);

            var elProgress = document.createElement('div');
            elProgress.style.width = el.offsetWidth + 'px';
            elProgress.style.height = el.offsetHeight + 'px';
            elProgress.className = 'gigya-screen-loader';
            elProgress.style.top = pos.y + 'px';
            elProgress.style.left = pos.x + 'px';
            elProgress.style.zIndex = window.gigya.utils.DOM.getNextZIndex();
            el.elProgress = elProgress;
            window.gigya.utils.DOM.appendToBody(elProgress);
        },
        undimContainer: function (el) {
            if (el) {
                if (el.elDim) {
                    el.elDim.parentNode.removeChild(el.elDim);
                    el.elDim = null;
                }
                if (el.elProgress) {
                    el.elProgress.parentNode.removeChild(el.elProgress);
                    el.elProgress = null;
                }
            }
        },
        getFirstGigyaClass: function (el) {
            if (!el) return;
            var arClasses = el.className.split(' ');
            for (var i = 0; i < arClasses.length; i++) {
                if (arClasses[i] && arClasses[i].indexOf('gigya-') == 0) return arClasses[i];
            }
        },
        instances_size: 0,
        screenSet: function (p) {
            this._p = p;
            this._elid = p.containerID
            this.lang = this._p.lang;
        },
        form: function (screenSet, elForm) {
            this._screenSet = screenSet;
            this._elForm = elForm;
            this._gigyaClassName = privateScope.getFirstGigyaClass(this._elForm);
            this._ID = elForm.id || privateScope.getFirstGigyaClass(elForm);
            this._screenSet._formsInstances[this._ID] = this;
            this._elForm.setAttribute('data-gigya-id', this._ID);
            this._actions = privateScope.oFormsActions[this._gigyaClassName] || {};
            this._hasPasswordField = window.gigya.utils.DOM.getElementsByAttribute(this._elForm, '*', 'name', 'password').length > 0;
            if (this._actions.resetFinalizeNeededState) {
                this._screenSet.finalizeRegistration = false;
            }
        },
        widget: function (screenSet, el) {
            this._el = el;
            this._screenSet = screenSet;
            this._elForm = this._screenSet.getElementForm(this._el);

            if (this._el.className == 'gigya-container')
                this._screenSet._containerInstances.push(this);

            if (this._elForm)
                this._form = this._screenSet._formsInstances[this._elForm.className];
        },
        createInstance: function (p) {
            var el = document.getElementById(p.containerID);
            el.innerHTML = '';

            var instance = new privateScope.screenSet(p);
            var containerID = p.isPopup ? '' : p['containerID'];
            publicScope.instances[p['screenSet'] + '_' + containerID] = instance;
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
            templates.set("passwordStrength-strengthMeter",
			[
				'<div class="gigya-passwordStrength-text"><span class="gigya-passwordStrength-text">$TEXT(\'password_strength_colon\')</span><span class="gigya-passwordStrength-text gigya-passwordStrength-scoreText">${scoreText}</span></div>',
				'<div class="gigya-passwordStrength-bar"><div class="${barIndicatorClass}"></div></div>'
			]);
            templates.set("passwordStrength-minimumRequirements",
			[
				'<div class="gigya-passwordStrength-text-requirements">$requirements</div>'
			]);
            templates.set("captcha",
			[
				'<div id="${recaptchaContainerID}"></div>'
			]);
            templates.set("screenSet-dialog",
			[
				'<div class="gigya-screen-dialog-inner">',
					'<div class="gigya-screen-dialog-top">',
						'<div class="gigya-screen-dialog-caption" id="${innerContainerID}_caption"></div>',
						'<div class="gigya-screen-dialog-close" id="${innerContainerID}_close"></div>',
					'</div>',
					'<div id="${innerContainerID}"></div>',
				'</div>'
			]);
            templates.set("screenSet",
			[
				'<h1 class="gigya-screen-caption" id="${innerContainerID}_caption"></h1>',
				'<div id="${innerContainerID}"></div>'
			]);
            templates.set("photoUpload",
			[
				'<div class="gigya-photo-upload-image" id="${photoElementID}"></div>',
				'<div>',
					'<div class="gigya-photo-upload-button">$choose_file</div>',
					'<div class="gigya-photo-upload-path" id="${pathContainerID}">$no_file_chosen</div>',
					'<div class="gigya-photo-upload-text">$tip</div>',
				'</div>'
			]);
            return templates;
        },
        defaultCss: [
			'.gigya-reset *, div.gigya-reset, .gigya-reset span, .gigya-reset a:hover, .gigya-reset a:visited, .gigya-reset a:link, .gigya-reset a:active{',
				'border:none; padding:0px;margin:0px;color:inherit;text-decoration:none;width:auto;float:none;-moz-border-radius:0;border-radius:0;',
				'font-family:arial;font-size:12px;color:#333333;background:none;text-align:left;}',

			'.gigya-screen .gigya-error-msg {color:#DD4B39; font-size:11px;}',
			'.gigya-screen input.gigya-error, .gigya-screen input.gigya-error {border-color:#DD4B39}',

			'div.gigya-password-strength {}',
			'span.gigya-passwordStrength-text {font-weight:bold;}',
			'div.gigya-passwordStrength-text-requirements {width: 100%;margin-top: 8px}',

			'span.gigya-passwordStrength-scoreText {font-weight:normal;margin-left:3px;}',
			'div.gigya-passwordStrength-bar {width: 90%; height: 5px; background-color:#F3F3F3;margin-top: 8px}',
			'div.gigya-passwordStrength-bar-too_weak {width: 5%; height: 5px; background-color:#DE321D;}',
			'div.gigya-passwordStrength-bar-weak {width: 25%; height: 5px; background-color:#DE321D;}',
			'div.gigya-passwordStrength-bar-fair {width: 50%; height: 5px; background-color:#4995E0;}',
			'div.gigya-passwordStrength-bar-strong {width: 75%; height: 5px; background-color:#76C261;}',
			'div.gigya-passwordStrength-bar-very_strong {width: 100%; height: 5px; background-color:#76C261;}',

			'div.gigya-calculate-size div.gigya-captcha {min-width: 318px; min-height: 129px;_width:318px;_height:129px;}',
			'div.gigya-social-login {min-width: 110px; min-height:120px; _width: 110px; _height: 120px;}',
            'div.gigya-tfa {min-width: 325px; min-height:200px; _width: 325px; _height: 200px;}',

            'div.gigya-container { display:none; }',
            'div.gigya-container-enabled { display:block; }',

			'div.gigya-loginID-availability {line-height:18px; background-repeat:no-repeat; background-position: left center}',
			'div.gigya-loginID-availability-available {padding-left:17px; background-image: url(\'' + window.gigya._.getCdnResource() + '/gs/i/accounts/ok.png\'); color: #4FA373}',
			'div.gigya-loginID-availability-not-available {padding-left:16px; background-image: url(\'' + window.gigya._.getCdnResource() + '/gs/i/accounts/error.png\'); color: #DD4B39}',
			'div.gigya-loginID-availability-progress {padding-left: 20px; background-image: url(\'' + window.gigya._.getCdnResource() + '/gs/i/accounts/smallLoader.gif\'); color: #666666}',

			'div.gigya-profile-photo {border-radius: 3px;min-width: 64px; min-height:64px; _width: 64px; _height: 64px;}',

			'div.gigya-screen-dimmer {position:absolute;opacity:0.5; filter: \'alpha(opacity=50)\';background-color:#FFFFFF}',
			'div.gigya-screen-loader {position:absolute; background:transparent url(\'' + window.gigya._.getCdnResource() + '/gs/i/accounts/bigLoader.gif\') no-repeat center center;}',

			'div.gigya-screen-dialog {position:absolute; display:inline-block;top:25px;left:25px;border: 8px solid #CCCCCC; border-radius:8px;background-color:#FFFFFF}',
			'div.gigya-screen-dialog-content {overflow:auto;padding:25px;}',
			'div.gigya-screen-dialog-caption {float:left; font-weight:bold;font-size:16px;font-family:arial;}',
			'div.gigya-screen-dialog-close {line-height:33px;height:33px;width:20px;float:right;background-image: url(\'' + window.gigya._.getCdnResource() + '/gs/i/accounts/close_dialog.png\');cursor:pointer;background-position:right;background-repeat:no-repeat}',
			'div.gigya-screen-dialog-inner {border: 1px solid #AAAAAA}',
			'div.gigya-screen-dialog-top {overflow:hidden;zoom:1;background-color: #F3F3F3;line-height:33px;padding: 0 10px 0 11px;}',

			'div.gigya-screen-dialog-mobile {position:absolute;display:inline-block;top:0;left:0;background-color:#FFFFFF}',
            'div.gigya-screen-dialog-mobile div.gigya-composite-control-captcha-widget { padding:0; }',

			'div.gigya-secret-question {display:none;}',

			'div.gigya-photo-upload {height:63px;width: 300px; *display:inline; zoom:1; }',
			'div.gigya-photo-upload-button {display:inline-block;*display:inline; zoom:1; margin: 0 8px 8px 0;font-weight:normal;	border: 1px solid #CECECE;cursor:pointer;padding: 0 12px;color: #333333;',
				'font-weight:bold;border-radius:4px;line-height:28px;',
				'background: #F2F2F2; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#FFFFFF", endColorstr="#F2F2F2");',
				'background: -webkit-gradient(linear, left top, left bottom, from(#FFFFFF), to(#F2F2F2));',
				'background: -moz-linear-gradient(top,  #FFFFFF,  #F2F2F2);}',

			'div.gigya-photo-upload-button:hover {',
				'background: #FFFFFF; filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="#F2F2F2", endColorstr="#FFFFFF");',
				'background: -webkit-gradient(linear, left top, left bottom, from(#F2F2F2), to(#FFFFFF));',
				'background: -moz-linear-gradient(top,  #F2F2F2,  #FFFFFF)}',
			'}',
			'div.gigya-photo-upload-text {font-size:11px;color:#666666}',
			'div.gigya-photo-upload-image {border-radius: 6px;background-position:center center; background-repeat: no-repeat; width: 64px; height:64px; background-color:#F2F2F2;float:left;margin-right:8px;}',

			'div.gigya-photo-upload-path {white-space:nowrap;width:107px;vertical-align:middle;text-overflow:ellipsis;overflow:hidden;padding-right:10px;background-position: right;background-repeat:no-repeat;display:inline-block;*display:inline; zoom:1; padding-right: 20px;}',
			'h1.gigya-screen-caption {border-bottom: 1px solid #dbdbdb;font-size: 16px;font-weight: bold;color: #333;padding-bottom: 5px;margin-bottom: 45px;}',
			'*.gigya-error-display {display:none}',
			'*.gigya-error-display-active {display:block}'
        ]
    }

    privateScope.oFieldNameData = {
        'loginID': privateScope.GigyaParam('loginID', 'username', 'loginID'),
        'passwordRetype': privateScope.GigyaParam('passwordRetype', null, false)
        //'username': privateScope.GigyaParam('username'),
        //'_email': privateScope.GigyaParam('_email'),
        //'_emails': privateScope.GigyaParam('_emails'),
        //'_password': privateScope.GigyaParam('_password'),
        //'_oldPassword': privateScope.GigyaParam('_oldPassword'),
        //'_gender': privateScope.GigyaParam('_gender'),
        //'_secretQuestion': privateScope.GigyaParam('_secretQuestion'),
        //'_secretAnswer': privateScope.GigyaParam('_secretAnswer'),
        //'captchaText': privateScope.GigyaParam('captchaText'),
        //'captchaToken': privateScope.GigyaParam('captchaToken'),
        //'_remember': privateScope.GigyaParam('_remember', 'rememberMe', false)
    }

    privateScope.warn = function (screensetID, msg) {
        if (console && console.warn) console.warn('Gigya Screenset (' + screensetID + ') - ' + msg);
    }

    privateScope.widget.prototype = {
        _el: null,
        _elForm: null,
        _screenSet: null,
        _form: null,
        getWidgetParams: function () {
            var oParams = {};
            var elParams = this._el.childNodes;
            for (var i = 0; i < elParams.length; i++) {
                if (elParams[i].nodeName.toLowerCase() == 'param') { //getELementsByTagName("param") fails in older IE
                    var param = elParams[i];
                    oParams[param.name] = param.value;
                }
            }
            return oParams;
        },
        parse: function () {
            var This = this;
            if (!this._el) return;
            var apiData = this._screenSet._apiData ? this._screenSet._apiData : {};
            var screensetID = this._screenSet._elid;
            var widgetGigyaClass = privateScope.getFirstGigyaClass(this._el);
            if (!widgetGigyaClass) return;
            var resetCSS = true;
            switch (widgetGigyaClass) {
                case 'gigya-secret-question':
                    resetCSS = false;
                    var els = this._el.getElementsByTagName('*');
                    for (var i = 0; i < els.length; i++) {
                        els[i].setAttribute('data-allow-empty', '1');
                    }
                    break;
                case 'gigya-password-strength':
                    if (window.gigya.localInfo.isMobile) return;
                    var elBoundTo = this._elForm.elements['newPassword'] || this._elForm.elements['password'];
                    if (!elBoundTo) return;
                    if (elBoundTo[0]) elBoundTo = elBoundTo[0];
                    var originalDisplay = this._el.style.display;
                    this._el.style.display = 'none';

                    var fnKeyUp = function () {
                        var item = {
                            TEXT: function (textKey, replaceStr, withStr) { return This._screenSet.getText(textKey, replaceStr, withStr); }
                        };
                        var displayMode = This._el.getAttribute('data-display-mode');
                        var template;
                        var hasMinReq = false;
                        var hasStrengthMeter = false;
                        var oPassStrength = privateScope.getPasswordStrengthData(elBoundTo.value);
                        var oComplexity = This._screenSet._apiData.getPolicies ? This._screenSet._apiData.getPolicies.passwordComplexity : null;
                        if (!oComplexity) oComplexity = {};

                        switch (displayMode) {
                            case 'policy':
                                template = This._screenSet.templates.get('passwordStrength-minimumRequirements');
                                hasMinReq = true;
                                break;
                            case 'meter':
                                template = This._screenSet.templates.get('passwordStrength-strengthMeter');
                                hasStrengthMeter = true;
                                break;
                            case 'combined':
                            default:
                                template = This._screenSet.templates.get('passwordStrength-strengthMeter') + This._screenSet.templates.get('passwordStrength-minimumRequirements');
                                hasMinReq = hasStrengthMeter = true;
                        }

                        if (hasStrengthMeter) {
                            var score = 0;
                            var scoreTextID = 'too_weak';
                            if (privateScope.isPasswordStrengthValid(elBoundTo.value, oPassStrength, oComplexity)) {
                                scoreTextID = 'weak';
                                if (oPassStrength.length > 4) score += 40;
                                if (oPassStrength.length > 5) score += 21;
                                if (oPassStrength.length > 7) score += 18;
                                if (oPassStrength.charGroups > 1) score += 21;
                                if (oPassStrength.charGroups > 2) score += 17;
                                if (oPassStrength.charGroups > 3) score += 23;
                                if (score > 60) scoreTextID = 'fair';
                                if (score > 80) scoreTextID = 'strong';
                                if (score > 100) scoreTextID = 'very_strong';
                            }
                            item.score = score;
                            item.scoreText = This._screenSet.getText(scoreTextID);
                            item.barIndicatorClass = 'gigya-passwordStrength-bar-' + scoreTextID;
                        }

                        if (hasMinReq) {
                            var arRequirements = [];
                            var arGroupsOrder = ['minLength', 'minCharGroups'];
                            for (var i = 0; i < arGroupsOrder.length; i++) {
                                var req = arGroupsOrder[i];
                                if (!oComplexity[req]) continue;
                                var groupTextID = '';
                                switch (req) {
                                    case 'minLength':
                                        groupTextID = 'num_characters_total';
                                        break;
                                    case 'minCharGroups':
                                        groupTextID = 'num_of_the_following_groups';
                                        break;
                                }
                                if (!groupTextID) continue;
                                var requirementText = This._screenSet.getText(groupTextID, '%num', oComplexity[req]);
                                if (requirementText) arRequirements.push(requirementText);
                            }
                            item.requirements = '';
                            if (arRequirements.length > 0) {
                                var lastReq = arRequirements.pop();
                                item.requirements = This._screenSet.getText('password_must_contain_at_least') + ' ' + (arRequirements.length > 0 ? arRequirements.join(', ') + ' ' + This._screenSet.getText('and') + ' ' + lastReq : lastReq);
                            }
                        }
                        var html = window.gigya.utils.templates.fill(template, item);
                        if (This._el.getAttribute('data-on-focus-bubble')) {
                            document.getElementById(bubbleID + '_content').innerHTML = html;
                        } else {
                            This._el.innerHTML = html;
                            This._el.style.display = originalDisplay;
                        }
                    };

                    window.gigya.utils.DOM.addEventListener(elBoundTo, 'keyup', fnKeyUp);

                    if (This._el.getAttribute('data-on-focus-bubble')) {
                        var bubbleID = screensetID + '_bubble';
                        var elBubble = document.getElementById(bubbleID);
                        if (!elBubble) {
                            window.gigya.utils.DOM.addEventListener(elBoundTo, 'focus', function () {
                                This._el.style.display = '';
                                var bubbleW = This._el.offsetWidth || 250;
                                This._el.style.display = 'none';
                                window.gigya.global.putGMBalloonNextTo(elBoundTo, '<div id="' + bubbleID + '_content"></div>', null, bubbleW, null, true, bubbleID, true);
                                document.getElementById(bubbleID + '_content').className = This._el.className;
                                document.getElementById(bubbleID).className = This._el.className;
                                fnKeyUp();
                            });
                            window.gigya.utils.DOM.addEventListener(elBoundTo, 'blur', function () {
                                window.gigya.global.removeGMBalloon();
                            });
                        }
                    }

                    break;
                case 'gigya-captcha':
                    var recaptchaParams = window.gigya.utils.object.merge([{ theme: 'white' }, This.getWidgetParams()]);
                    var w;
                    var h;
                    switch (recaptchaParams.theme) {
                        case 'clean':
                            w = 600; h = 108; break;
                        case 'blackglass':
                        case 'red':
                        case 'white':
                        default:
                            w = 318; h = 129; break;
                    }
                    if (recaptchaParams.theme != 'custom') {
                        this._el.style.width = w + 'px';
                        this._el.style.height = h + 'px';
                    }
                    this._el.name = 'captchaText';
                    this._el.setAttribute('data-gigya-name', 'captchaText');
                    window.gigya.utils.script.load('//www.google.com/recaptcha/api/js/recaptcha_ajax.js', null, function () {
                        if (typeof Recaptcha != 'undefined') {
                            var template = This._screenSet.templates.get('captcha');
                            var recaptchaContainerID = recaptchaParams['custom_theme_widget'];
                            if (!recaptchaContainerID) {
                                recaptchaContainerID = screensetID + '_recaptcha' + (new Date()).getTime();
                                This._el.innerHTML = window.gigya.utils.templates.fill(template, { recaptchaContainerID: recaptchaContainerID });

                                if (window.gigya.localInfo.isMobile)
                                    This._el.style.display = 'none';
                            }
                            delete Recaptcha.theme; // fixes a bug when loading two different themes
                            Recaptcha.create('6LdXT9MSAAAAALFVL3NUYbCEiJfiSTgflJUdrflP', recaptchaContainerID, recaptchaParams);
                        }
                    }, true);
                    break;
                case 'gigya-photo-upload':
                    var iframeID = screensetID + '_uploadIframe' + (new Date()).getTime();
                    var photoElementID = iframeID + '_photo';
                    var template = This._screenSet.templates.get('photoUpload');
                    var pathContainerID = iframeID + '_path';
                    var defaultBGImage = 'url(\'' + window.gigya._.getCdnResource('/gs/i/accounts/avatar_64.png') + '\')';
                    var html = window.gigya.utils.templates.fill(template, {
                        pathContainerID: pathContainerID,
                        photoElementID: photoElementID,
                        choose_file: this._screenSet.getText('choose_file'),
                        no_file_chosen: this._screenSet.getText('no_file_chosen'),
                        tip: this._screenSet.getText('maximum_size_of_3mb.') + ' JPG, GIF, PNG.'
                    });
                    this._el.innerHTML = html + '<iframe id="' + iframeID + '" name="' + iframeID + '" style="display:none" onerror="this.setAttribute(\'uploading\',0)" onload="this.setAttribute(\'uploading\',0)"></iframe>';

                    var params = window.gigya.utils.object.extractProperties(this._screenSet._p, {}, 'APIKey|cid|oauth_token|login_token|source|sourceData|regToken');
                    params.authMode = params['oauth_token'] ? 'token' : 'cookie';
                    if (window.gigya._.apiAdapters.web) {
                        params.login_token = window.gigya._.apiAdapters.web.tokenStore.get(params['APIKey']);
                    }
                    if (!params.APIKey) params.APIKey = window.gigya.thisScript.APIKey;

                    var updateImage = function () {
                        var elPath = document.getElementById(pathContainerID);
                        if (elPath) elPath.style.backgroundImage = '';
                        var getProfilePhotoParams = window.gigya.utils.object.clone(params);
                        getProfilePhotoParams.type = 'thumbnail';
                        getProfilePhotoParams.context = (new Date()).getTime();
                        var img = new Image();
                        img.src = window.gigya.utils.stringUtils.format('{0}://accounts.{1}/accounts.getProfilePhoto?{2}',
                            (getProfilePhotoParams.login_token ? 'https' : window.gigya.localInfo.protocol),
                            This._screenSet._p.apiDomain,
                            window.gigya.utils.keyValue.serialize(getProfilePhotoParams)
                        );
                        img.onload = function () {
                            var elPhoto = document.getElementById(photoElementID);
                            if (elPhoto) elPhoto.style.backgroundImage = 'url(\'' + img.src + '\')';

                            var profilePhotos = window.gigya.utils.DOM.getElementsByClass(This._screenSet._elContainer, 'gigya-profile-photo');
                            for (var i = 0; i < profilePhotos.length; i++) {
                                var elProfilePhotoWidget = profilePhotos[i];
                                var childNodes = elProfilePhotoWidget.childNodes;

                                if (childNodes && childNodes.length > 0 && childNodes[0].nodeName == 'IMG') {
                                    childNodes[0].src = img.src;
                                }
                            }
                        }
                        img.onerror = function () {
                            var elPhoto = document.getElementById(photoElementID);
                            if (elPhoto) elPhoto.style.backgroundImage = defaultBGImage;
                        }
                    }

                    var ifr = document.getElementById(iframeID);
                    if (ifr) {
                        window.gigya.utils.DOM.addEventListener(ifr, 'load', function () { //refersh the image after the upload
                            updateImage();
                        })
                        window.gigya.utils.DOM.addEventListener(ifr, 'error', function () {

                        });
                        var elPhoto = document.getElementById(photoElementID);
                        if (elPhoto) elPhoto.style.backgroundImage = defaultBGImage;
                    }
                    updateImage();
                    var formAction = window.gigya.utils.stringUtils.format('https://accounts.{0}/accounts.uploadProfilePhoto?publish=true&{1}', this._screenSet._p.apiDomain, window.gigya.utils.keyValue.serialize(params));

                    var frmUpload = privateScope.attachFileUpload(this._el, iframeID, formAction);
                    if (frmUpload) {
                        var fileInput = frmUpload.elements['_profilePhoto'];
                        window.gigya.utils.DOM.addEventListener(fileInput, 'change', function () {
                            document.getElementById(pathContainerID).style.backgroundImage = 'url(\'' + window.gigya._.getCdnResource('/gs/i/accounts/smallLoader.gif') + '\')';
                        });
                    }
                    break;
                case 'gigya-loginID-availability':
                    var This = this;
                    var elBoundTo = this._elForm.elements[this._el.getAttribute('data-bound-to')] || this._elForm.elements['username'] || this._elForm.elements['email'];
                    if (!elBoundTo) return;
                    This._el.innerHTML = '';
                    var originalDisplay = this._el.style.display;
                    this._el.style.display = 'none';
                    var fnUpdate = function () {
                        if (elBoundTo.value == This._el.getAttribute('data-lastvalue')) return; //nothing has changed since last check, no need to update
                        This._el.setAttribute('data-lastvalue', elBoundTo.value);
                        if (!elBoundTo || elBoundTo.value.split(' ').join('').length == 0) {
                            This._el.innerHTML = '';
                            return;
                        }
                        This._el.style.display = originalDisplay;
                        This._el.innerHTML = This._screenSet.getText('checking');;
                        window.gigya.utils.DOM.addClassToElement(This._el, 'gigya-loginID-availability-progress');
                        window.gigya.accounts.isAvailableLoginID({
                            loginID: elBoundTo.value,
                            callback: function (res) {
                                var state;
                                var stateText;
                                window.gigya.utils.DOM.removeClassFromElement(This._el, 'gigya-loginID-availability-progress');
                                window.gigya.utils.DOM.removeClassFromElement(This._el, 'gigya-loginID-availability-not-available');
                                window.gigya.utils.DOM.removeClassFromElement(This._el, 'gigya-loginID-availability-available');
                                elBoundTo.removeAttribute('data-taken');

                                if (res.errorCode != 0) {
                                    This._el.innerHTML = '';
                                } else if (res.isAvailable) {
                                    This._el.innerHTML = This._screenSet.getText('available');
                                    window.gigya.utils.DOM.addClassToElement(This._el, 'gigya-loginID-availability-available');
                                    This._screenSet.onInputChange(elBoundTo);
                                } else {
                                    This._el.innerHTML = This._screenSet.getText('not_available');
                                    window.gigya.utils.DOM.addClassToElement(This._el, 'gigya-loginID-availability-not-available');
                                    elBoundTo.setAttribute('data-taken', '1');
                                }
                            }
                        });
                    }
                    window.gigya.utils.DOM.addEventListener(elBoundTo, 'keyup', function () {
                        if (This._el.updateTimeout) window.clearTimeout(This._el.updateTimeout);
                        This._el.updateTimeout = window.setTimeout(fnUpdate, 1000)
                    });
                    window.gigya.utils.DOM.addEventListener(elBoundTo, 'change', fnUpdate);
                    break;
                case 'gigya-social-login':
                    var widgetParams = this.getWidgetParams();
                    var loginContainerID = screensetID + '_' + (new Date()).getTime();
                    this._el.innerHTML = '<div id="' + loginContainerID + '"></div>';
                    var fnOnResponse = function (e) { This._screenSet.onScreenResponse(e.response) };
                    window.gigya.socialize.showLoginUI(this._screenSet._p, widgetParams, {
                        containerID: loginContainerID,
                        accountsSocialLogin: true,
                        onLogin: fnOnResponse,
                        onError: fnOnResponse,
                        finalizeRegistration: true,
                        dontHandleScreenSet: true,
                        include: 'profile,data,emails',
                        regSource: this._screenSet._p.regSource || location.href.split('?')[0].split('#')[0]
                    });
                    break;
                case 'gigya-profile-photo':
                    var template = This._screenSet.templates.get('userPhoto');
                    var thumbnailURL = apiData.getAccountInfo && apiData.getAccountInfo.profile && apiData.getAccountInfo.profile.thumbnailURL ? apiData.getAccountInfo.profile.thumbnailURL : '';
                    this._el.innerHTML = thumbnailURL ? '<img src="' + thumbnailURL + '" />' : '';
                    break;
                case 'gigya-required-display':
                    this._el.style.display = 'none';
                    var boundToName = this._el.getAttribute('data-bound-to');
                    var isRequired = this._screenSet.isRequiredField(boundToName);
                    if (isRequired) this._el.style.display = '';
                    break;
                case 'gigya-tfa':
                    var This = this;
                    var widgetParams = this.getWidgetParams();
                    var tfaContainerId = screensetID + '_' + (new Date()).getTime();
                    this._el.innerHTML = '<div id="' + tfaContainerId + '"></div>';
                    this._screenSet.dimScreen();
                    window.gigya.accounts.showTfaUI(this._screenSet._p, widgetParams, {
                        dontHandleScreenSet: false,
                        regToken: this._screenSet._lastSubmittedFormResponse ? this._screenSet._lastSubmittedFormResponse.regToken : null,
                        containerID: tfaContainerId,
                        cssPrefix: '#' + screensetID,
                        onDone: function (e) {
                            This._screenSet.dimScreen();
                            This._screenSet.onScreenResponse(e.response, This);
                        },
                        onLoad: function () {
                            This._screenSet.undimScreen();
                        }
                    });
                    break;
                case 'gigya-container':
                    resetCSS = false;
                    var shouldDisplay = privateScope.containerConditions.testContainer(this, privateScope.containerConditions.sets.rendering);
                    this.condStatus = shouldDisplay;
                    this.originalCondStatus = shouldDisplay;

                    if (shouldDisplay) {
                        shouldDisplay = privateScope.containerConditions.testContainer(this, privateScope.containerConditions.sets.validation);
                        this.condStatus = this.originalCondStatus && shouldDisplay;

                        if (shouldDisplay) {
                            window.gigya.utils.DOM.addClassToElement(this._el, 'gigya-container-enabled');
                        }

                        var elements = this._screenSet._elContainer.getElementsByTagName('*');
                        for (var i = 0; i < elements.length; i++) {
                            var nodeName = elements[i].nodeName.toLowerCase();
                            if (nodeName == 'select' || nodeName == 'input' || nodeName == 'textarea') {
                                window.gigya.utils.DOM.addEventListener(elements[i], 'change', function (e) {
                                    var shouldDisplay = privateScope.containerConditions.testContainer(This, privateScope.containerConditions.sets.validation);
                                    This.condStatus = This.originalCondStatus && shouldDisplay;

                                    if (This.condStatus) {
                                        window.gigya.utils.DOM.addClassToElement(This._el, 'gigya-container-enabled');
                                    }
                                    else {
                                        window.gigya.utils.DOM.removeClassFromElement(This._el, 'gigya-container-enabled');
                                    }
                                });
                            }
                        }
                    }

                    break;
                default: resetCSS = false;
            }
            if (resetCSS) window.gigya.utils.DOM.addClassToElement(this._el, 'gigya-reset');
        }
    }
    privateScope.form.prototype = {
        _gigyaClassName: null,
        _ID: null,
        _screenSet: null,
        _elForm: null,
        _actions: null,

        init: function () {
            this.parse();
        },
        getFlatFormData: function (ignoreHiddenContainers) {
            var oData = {};
            var els = this._elForm.elements;
            for (var i = 0; i < els.length; i++) {
                var field = els[i];
                var fieldName = field.getAttribute('data-gigya-name');
                var nodeName = field.nodeName.toLowerCase();
                if ((nodeName == 'input' && field.type != 'submit') || nodeName == 'select' || nodeName == 'textarea') {
                    if (fieldName == null) continue; //ignore nameless fields
                    if (ignoreHiddenContainers && privateScope.isFieldInHiddenContainer(field)) continue; // fields inside hidden gigya-container

                    var fieldValue = field.value;
                    if (field.type == 'checkbox') {
                        fieldValue = field.checked;
                    }

                    if (fieldValue == null) continue;

                    if (field.type == 'radio') {
                        if (!field.checked) continue;
                    }
                    oData[fieldName] = fieldValue;
                }
            }
            var elCaptcha = window.gigya.utils.DOM.getElementsByClass(this._elForm, 'gigya-captcha')[0];
            if (elCaptcha && typeof Recaptcha == 'object'/* && !privateScope.isHidden(elCaptcha)*/) { //form contains recaptcha
                elCaptcha.style.display = '';
                var captchaText = Recaptcha.get_response();
                var captchaToken = Recaptcha.get_challenge();
                if (captchaText && captchaToken) {
                    oData.captchaText = captchaText;
                    oData.captchaToken = captchaToken;
                }
            }
            return oData;
        },
        getParamsForFormData: function (formData) {
            var els = this._elForm.elements;
            var oRoot = {};
            var oData = null;
            var oProfile = null;

            for (var fieldName in formData) {
                var paramValue = formData[fieldName];
                if (String(paramValue) == '') paramValue = null;
                var oFieldNameData = privateScope.oFieldNameData[fieldName];
                var paramName = fieldName;
                if (oFieldNameData) paramName = oFieldNameData.paramName;
                if (!paramName) continue;
                var fieldNamespace = fieldName.split('.')[0];

                if (this._actions.specialFields && this._actions.specialFields[paramName]) { //special field - goes to the root of the request
                    oRoot[paramName] = paramValue;
                } else if (this._actions.dataObjectName && fieldNamespace == this._actions.dataObjectName) {
                    window.gigya.utils.object.setPropertyBySerializedName(oRoot, fieldName, paramValue); //field that starts with dataObjectName. should go to root.dataObjectName object
                } else if (this._actions.profileObjectName) {
                    if (fieldNamespace != this._actions.profileObjectName) fieldName = this._actions.profileObjectName + '.' + fieldName; //default namespace is profileObjectName
                    window.gigya.utils.object.setPropertyBySerializedName(oRoot, fieldName, paramValue);
                }
            }
            return oRoot;
        },
        prepopulate: function (oData) {
            if (!oData) return;
            var els = this._elForm.elements;
            for (var i = 0; i < els.length; i++) {
                var field = els[i];
                var fieldName = field.getAttribute('data-gigya-name') || field.name;
                var dataValue = window.gigya.utils.object.getPropertyBySerializedName(oData, fieldName);
                if (!fieldName || !dataValue) continue;

                if (field.type == 'checkbox') {
                    field.checked = (dataValue == true);
                } else if (field.type == 'radio') {
                    field.checked = (dataValue == field.value);
                } else {
                    field.value = dataValue;
                }
            }
        },
        checkAutoSkip: function () {
            if (this._elForm.getAttribute('data-auto-skip') == "true" && this.validate()) {
                var skip = true;

                for (var i = 0; i < this._screenSet._containerInstances.length; i++) {
                    var container = this._screenSet._containerInstances[i];
                    var emptyFieldsAttribute = container._el.getAttribute('data-empty-fields');

                    if (container._elForm == this._elForm && emptyFieldsAttribute) {
                        skip = !(privateScope.containerConditions.sets.rendering['data-empty-fields'])(emptyFieldsAttribute, container);
                    }
                }

                if (skip) {
                    this.onAfterSubmit({ errorCode: 0, autoSkip: true });
                }
            }
        },
        submit: function () {
            if (this.validate()) {
                var flatFormData = this.getFlatFormData(true);
                var flatFormDataForEvent = window.gigya.utils.object.clone(flatFormData);
                if (flatFormDataForEvent.password) delete flatFormDataForEvent.password; //meaningless in terms of security but less shocking for clients :)
                var eventResult = window.gigya.events.dispatchForWidget({
                    eventName: 'beforeSubmit',
                    screen: this._screenSet._currentScreenID,
                    form: this._ID,
                    profile: this._screenSet._apiData.getAccountInfo ? this._screenSet._apiData.getAccountInfo.profile : {},
                    data: this._screenSet._apiData.getAccountInfo ? this._screenSet._apiData.getAccountInfo.data : {},
                    formData: flatFormDataForEvent
                }, this._screenSet._p);

                if (eventResult == false) return;

                var oParams = this.getParamsForFormData(flatFormData);
                if (this._gigyaClassName == 'gigya-register-form') {
                    var successScreen = this._elForm.getAttribute('data-on-success-screen');

                    if (!this._screenSet.doesScreenHaveForms(successScreen)) {
                        oParams.finalizeRegistration = true;
                    } else {
                        this._screenSet._finalizeRegistrationNeeded = true;
                    }
                }

                var This = this;
                if (!This._actions.submit) return;

                if (!this._screenSet._p.regSource)
                    this._screenSet._p.regSource = document.location.href.split('?')[0].split('#')[0];

                var arRememberMeFields = window.gigya.utils.DOM.getElementsByAttribute(this._elForm, '*', 'name', 'remember');
                if (arRememberMeFields && arRememberMeFields.length > 0) this._screenSet._extraEventData.rememberMe = arRememberMeFields[0].checked;

                var remember = this._screenSet._extraEventData.rememberMe;

                var fnSubmit = function () {
                    This._actions.submit(This._screenSet._p, oParams, {
                        dontHandleScreenSet: true,
                        callback: function (response) { return This.onAfterSubmit(response); },
                        remember: remember,
                        sessionExpiration: (remember && This._screenSet._p['rememberSessionExpiration']) ? This._screenSet._p['rememberSessionExpiration'] : This._screenSet._p['sessionExpiration']
                    }, This._actions.defaultSubmitParams);
                }


                this._screenSet.dimScreen();
                var arElPhotoUpload = window.gigya.utils.DOM.getElementsByClass(this._elForm, 'gigya-photo-upload');
                if (arElPhotoUpload.length > 0) { //form contains photo upload
                    var elFormIframe = arElPhotoUpload[0].getElementsByTagName('iframe')[0];
                    if (elFormIframe.getAttribute('uploading') == '1') {
                        window.gigya.utils.DOM.addEventListener(elFormIframe, 'load', fnSubmit);
                        return;
                    }
                }
                fnSubmit();
            }
        },
        validate: function () {
            var This = this;
            var validated = true;
            var arValidationErrors = [];
            var els = window.gigya.utils.array.clone(this._elForm.elements); //clone form elements array

            var arCaptcha = window.gigya.utils.DOM.getElementsByClass(this._elForm, 'gigya-captcha'); //always add captcha to validation
            if (arCaptcha.length > 0) {
                els.push(arCaptcha[0])
            }

            for (var i = 0; i < els.length; i++) {
                var field = els[i];
                var validationError = this._screenSet.getValidationError(field, false);
                var boundValidationError = this._screenSet.getValidationError(field, true);
                if (validationError) {
                    validated = false;
                    arValidationErrors.push({
                        field: field,
                        errorCode: validationError
                    });
                    this._screenSet.showFieldError(field, boundValidationError, true);
                }
            }
            this.showErrors(arValidationErrors, false);
            return validated;
        },
        hasFlag: function (arAllowedFlags, sFlags) {
            if (!arAllowedFlags || !sFlags) return
            var arFlags = sFlags.split(',');
            for (var i = 0; i < arFlags.length; i++) {
                if (window.gigya.utils.array.indexOf(arAllowedFlags, arFlags[i]) != -1) {
                    return true;
                }
            }
            return false;
        },
        showErrors: function (arErrors, isServerError) {
            // will show errors that have data-bound-to set to this form ID
            var arBoundElements = window.gigya.utils.DOM.getElementsByAttribute(this._screenSet._elContainer, '*', 'data-bound-to', this._ID);
            var handledErrorMessage = false;

            for (var i = 0; i < arBoundElements.length; i++) {
                var elBound = arBoundElements[i];
                var scope = elBound.getAttribute('data-scope') || 'bound-object-error';
                scope = scope.toLowerCase();

                if (!isServerError && scope != 'first-error' && scope != 'any-error' && scope != 'all-errors') continue;

                var shouldDisplay = false;

                var arErrorMessages = [];
                for (var errIndex = 0; errIndex < arErrors.length; errIndex++) {
                    var arAllowedErrors = [];
                    var arAllowedFlags = [];

                    if (elBound.getAttribute('data-error-codes')) {
                        arAllowedErrors = elBound.getAttribute('data-error-codes').split(',');
                    }
                    if (elBound.getAttribute('data-error-flags')) {
                        arAllowedFlags = elBound.getAttribute('data-error-flags').split(',');
                    }

                    if (
                        (arAllowedErrors.length === 0 && arAllowedFlags.length === 0)
                        || window.gigya.utils.array.indexOf(arAllowedErrors, arErrors[errIndex].errorCode) != -1
                        || this.hasFlag(arAllowedFlags, arErrors[errIndex].errorFlags)) {
                        shouldDisplay = true;
                        var errorMessage = arErrors[errIndex].errorMessage;

                        if (!errorMessage) {
                            errorMessage = this._screenSet.getErrorMessage(arErrors[errIndex].errorCode, false, arErrors[errIndex].field);
                        }

                        if (errorMessage)
                            arErrorMessages.push(errorMessage);
                    }
                }

                if (shouldDisplay) {
                    if (window.gigya.utils.DOM.isElementClass(elBound, 'gigya-error-display')) {
                        handledErrorMessage = true;
                        window.gigya.utils.DOM.addClassToElement(arBoundElements[i], 'gigya-error-display-active');
                    }

                    if (window.gigya.utils.DOM.isElementClass(elBound, 'gigya-error-msg')) {
                        handledErrorMessage = true;
                        var errorMsg;
                        if (scope == 'first-error' || isServerError) {
                            errorMsg = arErrorMessages[0];
                        } else {
                            errorMsg = '<ul><li>' + arErrorMessages.join('</li><li>') + '</li></ul';
                        }
                        arBoundElements[i].innerHTML = errorMsg;
                    }
                } else {

                    if (window.gigya.utils.DOM.isElementClass(elBound, 'gigya-error-display')) {
                        window.gigya.utils.DOM.removeClassFromElement(arBoundElements[i], 'gigya-error-display-active');
                    }

                    if (window.gigya.utils.DOM.isElementClass(elBound, 'gigya-error-msg')) {
                        arBoundElements[i].innerHTML = '';
                    }
                }
            }
            if (!handledErrorMessage && isServerError && arErrors.length > 0) {
                privateScope.warn(this._screenSet._ID, 'Missing error-msg or error-display for "' + this._ID + '" form error');
            }
        },
        onAfterSubmit: function (response) {
            this._screenSet.undimScreen();
            this._screenSet.onScreenResponse(response, this);
        },
        parse: function () {
            var This = this;
            window.gigya.utils.DOM.addEventListener(this._elForm, 'submit', function (e) {
                This.submit();
                if (e.preventDefault) {
                    e.preventDefault();
                } else if (window.event) {
                    window.event.returnValue = false;
                }
            });
            if (this._actions.prepopulateFrom) {
                for (var i = 0; i < this._actions.prepopulateFrom.length; i++) {
                    this.prepopulate(window.gigya.utils.object.getPropertyBySerializedName(this._screenSet._apiData, this._actions.prepopulateFrom[i]));
                }
            }
            if (this._gigyaClassName == 'gigya-resend-verification-form' && this._screenSet._apiData.getAccountInfo && this._screenSet._apiData.getAccountInfo.emails) { //prepopulate "email" from unverifiedEmails in resendVerification form
                this.prepopulate({ email: this._screenSet._apiData.getAccountInfo.emails.unverified[this._screenSet._apiData.getAccountInfo.emails.unverified.length - 1] });
            }
            if (this._gigyaClassName == 'gigya-link-accounts-form' && this._screenSet._lastSubmittedFormResponse && this._screenSet._lastSubmittedFormResponse.loginID) { //prepopulate "loginID" from the "existing loginID" error's "email" field
                this.prepopulate({ loginID: this._screenSet._lastSubmittedFormResponse.loginID });
            }

            //clear errors
            this.showErrors([], true);
            this.showErrors([], false);
        },
        getInstanceRefString: function () {
            return 'gigya.accounts.plugins.screenSet.instances[\'' + encodeURIComponent(this._screenSet._p['screenSet'] + '_' + this._screenSet._p['containerID']) + '\']' + '._formsInstances[\'' + encodeURIComponent(this._ID) + '\']';
        }
    }
    privateScope.screenSet.prototype = {
        _ID: null,
        _elScreenSet: null,
        _elContainer: null,
        _p: null,
        _currentScreenID: null,
        _apiData: null,
        _oNeededData: null,
        _nextScreenElement: null,
        _lastSubmittedFormResponse: null,
        _finalizeRegistrationNeeded: false,
        _isDialog: false,
        _elCaption: null,
        _formsInstances: null,
        _lastSubmittedFormID: null,
        _extraEventData: null,
        _originalElements: null,
        _isRemote: false,
        _random: null,
        _containerHistory: null,
        _startScreen: null,
        _containerInstances: null,
        _backHandler: null, //for mobile dialog
        init: function () {
            this.templates = privateScope.createDefaultTemplates();
            if (this._p.cssPrefix || !privateScope.addedCSS) {
                publicScope._injectCSS(this._p);
            }
            this._formsInstances = {};
            this._extraEventData = {};
            this._containerInstances = [];
            if (!privateScope._originalElements[this._p['screenSet']]) privateScope._originalElements[this._p['screenSet']] = {};
            this._originalElements = privateScope._originalElements[this._p['screenSet']];
            this._apiData = {};
            var screensetID = (window.gigya.localInfo.isMobile && this._p['mobileScreenSet']) ? this._p['mobileScreenSet'] : this._p['screenSet'];
            this._elScreenSet = document.getElementById(screensetID);
            this._isDialog = this._p.isPopup;
            this._random = Math.random();
            this._ID = screensetID;

            window.gigya.events.dispatchForWidget({ eventName: 'load' }, this._p);

            if (!this._elScreenSet) {
                var This = this;
                var screenSetContainer = document.getElementById('__gigyaScreenSet_' + screensetID);
                var arScreenSets = screenSetContainer ? window.gigya.utils.DOM.getElementsByClass(screenSetContainer, 'gigya-screen-set') : [];
                This._isRemote = true;
                if (screenSetContainer && arScreenSets.length > 0) {
                    this._elScreenSet = arScreenSets[0];
                    This.start();
                } else {
                    screenSetContainer = document.createElement('div');
                    screenSetContainer.id = '__gigyaScreenSet_' + screensetID;
                    screenSetContainer.style.display = 'none';
                    window.gigya.utils.DOM.appendToBody(screenSetContainer);
                    window.gigya.accounts.getScreenSets(this._p, {
                        include: 'html,css', screenSetIDs: screensetID,
                        callback: function (res) {
                            if (res.errorCode == 0 && res.screenSets && res.screenSets.length > 0 && res.screenSets[0].html) {
                                var oScreenSet = res.screenSets[0];
                                screenSetContainer.innerHTML = oScreenSet.html;
                                if (oScreenSet.css) {
                                    window.gigya.global.addCSS(oScreenSet.css);
                                }
                                This._elScreenSet = screenSetContainer.getElementsByTagName('div')[0];
                                This.start();
                            }
                            else {
                                window.gigya.events.dispatchErrorFromResponse(This._p, res);
                            }
                        }
                    });
                }
            } else {
                this.start();
            }
        },
        start: function () {
            var This = this;
            window.gigya.socialize.addEventHandlers({ listenerType: 'component' }, {
                onLogin: function () { This._finalizeRegistrationNeeded = false; }
            });

            this._elContainer = this.getContainer();
            if (!this._elContainer) return;

            this._startScreen = this._p.startScreen || this._elScreenSet.getAttribute('data-start-screen');
            if (!this._startScreen) {
                var els = this._elScreenSet.getElementsByTagName('div');
                if (els.length > 0) {
                    this._startScreen = els[0].getAttribute('data-original-id') || els[0].id;
                }
            }

            this.prepareElements();
            if (window.gigya.localInfo.isMobile) {
                window.scrollTo(0, 0);
            }

            if (this._p.initialResponse) {
                this.onScreenResponse(this._p.initialResponse);
            } else {
                this.switchScreen(this._startScreen);
            }
        },
        hide: function (reason, response, alwaysClearContainer) {
            this.undimScreen();
            var elContainer = document.getElementById(this._p.containerID); //not using this._elContainer because it could be a dialog
            if (elContainer) {
                if (this._p.isPopup) {
                    elContainer.parentNode.removeChild(elContainer);
                } else if (alwaysClearContainer) {
                    elContainer.innerHTML = '';
                }
            }
            var ifrel = document.getElementById('gigya_ifr_' + this._p.containerID);
            if (ifrel != null) ifrel.parentNode.removeChild(ifrel);

            var oEvent = {
                eventName: 'hide',
                reason: reason
            };

            if (response && response.user)
                oEvent.user = response.user;

            window.gigya.events.dispatchForWidget(oEvent, this._p);
        },
        getContainer: function () {
            var This = this;
            var containerID = this._p['containerID'];
            var container = document.getElementById(containerID);
            if (!container) return;
            var templateID;

            if (this._isDialog) {
                if (window.gigya.localInfo.isMobile) { //mobile dialog should be hidden on back
                    var This = this;
                    window.gigya.utils.DOM.addDialogBackListener(function () { This.hide('canceled') });
                    templateID = 'screenSet';
                    container.className = 'gigya-screen-dialog-mobile';
                    if (document.body.scrollHeight > window.gigya.utils.viewport.getInnerSize().h) {
                        container.style.minHeight = document.body.scrollHeight + 'px';
                    }
                } else {
                    templateID = 'screenSet-dialog';
                    container.className = 'gigya-screen-dialog';
                }
            } else {
                templateID = 'screenSet';
            }
            var innerContainerID = containerID + '_content';

            container.innerHTML = window.gigya.utils.templates.fill(this.templates.get(templateID), { innerContainerID: innerContainerID });
            this._elCaption = document.getElementById(innerContainerID + '_caption');

            var elClose = document.getElementById(innerContainerID + '_close');
            if (elClose) {
                window.gigya.utils.DOM.addEventListener(elClose, 'click', function () {
                    This.hide('canceled');
                });
            }
            return document.getElementById(innerContainerID);
        },
        prepareElements: function () {
            var els = this._elScreenSet.getElementsByTagName('*');
            for (var i = 0; i < els.length; i++) {
                var el = els[i];
                if (!el.getAttribute('data-original-id') && !el.getAttribute('dummy') && (el.id || (el.nodeName.toLowerCase() == 'input'))) {
                    el.setAttribute('data-original-id', el.id);
                    if (el.type == 'text' || el.type == 'password') el.setAttribute('data-original-value', el.value);
                    el.id = '__gig_input_' + (el.id ? el.id : ((new Date()).getTime() + '_' + i));
                    el.setAttribute('data-screenset-element-id', el.id);
                }

                if (el.nodeName.toLowerCase() == 'form' && el.getAttribute('data-on-success-screen')) {
                    var attrValue = el.getAttribute('data-on-success-screen');
                    var successScreen = this.chooseNextScreen(attrValue);
                    el.setAttribute('data-original-success-screen', attrValue);
                    el.setAttribute('data-on-success-screen', successScreen);
                }
            }
        },
        getExtraProfileFields: function (elForm, missingOnly) {
            var arFields = elForm.elements;
            var arFieldNames = [];
            var oFieldNames = {};
            for (var i = 0; i < arFields.length; i++) {
                var field = arFields[i];
                if (!field.name || field.name.indexOf('data.') == 0) continue;
                var fieldName = field.name.replace('profile.', '').split('.')[0];
                if (!oFieldNames[fieldName] && !privateScope.oFormsActions['gigya-profile-form'].specialFields[fieldName]) {
                    oFieldNames[fieldName] = 1;
                    if (!missingOnly || !this._apiData.getAccountInfo || !this._apiData.getAccountInfo.profile || !this._apiData.getAccountInfo.profile[fieldName]) {
                        arFieldNames.push(fieldName);
                    }
                }
            }
            return arFieldNames.join(',');
        },
        isRequiredField: function (boundToName) {
            var isRequired = false;
            var fieldNamespace = boundToName.split('.')[0];
            var schemaName = fieldNamespace == 'data' ? 'dataSchema' : 'profileSchema';
            if (fieldNamespace == 'data' || fieldNamespace == 'profile') {
                boundToName = boundToName.replace(fieldNamespace + '.', '');
            }
            var isRequired = false;
            if (privateScope.alwaysRequiredFields[boundToName] || boundToName == 'email') {
                isRequired = true;
            } else if (this._apiData.getSchema && this._apiData.getSchema[schemaName] && this._apiData.getSchema[schemaName].fields) {
                var schema = this._apiData.getSchema[schemaName].fields[boundToName];
                if (schema && schema.required) {
                    isRequired = true;
                }
            }

            return isRequired;
        },
        getText: function (textKey, replaceStr, withStr) {
            return window.gigya.pluginUtils.lang.getLocalizedText('gigya.services.accounts.plugins.screenSet.js', textKey, this._p.lang, replaceStr, withStr);
        },
        getScreenElement: function (screenID) {
            if (!screenID) return null;
            var arScreens = window.gigya.utils.DOM.getElementsByAttribute(this._elScreenSet, '*', 'data-original-id', screenID);
            return arScreens[0];
        },
        getElementForm: function (el) {
            while (el != null) {
                if (el.nodeName.toLowerCase() == 'form') return el;
                el = el.parentNode;
            }
        },
        updateAccountInfo: function (fnCallback) {
            var This = this;
            window.gigya.accounts.getAccountInfo(this._p, {
                include: 'profile,data',
                callback: function (response) {
                    This.onAccountInfo(response);
                    fnCallback(response);
                }
            });
        },
        onAccountInfo: function (response) {
            var accountInfo = response;
            if (response.accountInfo) accountInfo = response.accountInfo;

            if (!this._apiData.getAccountInfo) this._apiData.getAccountInfo = {};
            if (accountInfo.profile) this._apiData.getAccountInfo.profile = accountInfo.profile;
            if (accountInfo.data) this._apiData.getAccountInfo.data = accountInfo.data;
            if (accountInfo.emails) this._apiData.getAccountInfo.emails = accountInfo.emails;
            if (accountInfo.loginIDs) this._apiData.getAccountInfo.loginIDs = accountInfo.loginIDs;
        },
        onApiData: function (response, callback) {
            this._apiData[response.operation.replace('/accounts.', '')] = response;
            if (response.regToken) this._p.regToken = response.regToken;
            var gotAllNeededData = true;
            for (var methodName in this._oNeededData) {
                if (!this._apiData[methodName]) {
                    gotAllNeededData = false;
                    break;
                }
            }
            if (gotAllNeededData) {
                this.onScreenData();
            }
        },
        chooseNextScreen: function (nextScreenValue) {
            if (!nextScreenValue) return;

            var possibleScreens = nextScreenValue.split(',');
            if (possibleScreens.length === 1) {
                return possibleScreens[0].split(':')[0];
            }
                // Weighted screen possibilities
            else if (possibleScreens.length > 1) {
                var weightSum = 0;
                for (var i = 0; i < possibleScreens.length; i++) {
                    var weight = 1;
                    var parts = possibleScreens[i].split(':');

                    if (parts.length > 1)
                        weight = parseInt(parts[1]);

                    weightSum += weight;
                }

                var random = this._random * weightSum;

                weightSum = 0;
                for (var i = 0; i < possibleScreens.length; i++) {
                    var weight = 1;
                    var parts = possibleScreens[i].split(':');

                    if (parts.length > 1)
                        weight = parseInt(parts[1]);

                    weightSum += weight;
                    if (weightSum >= random) {
                        return parts[0];
                    }
                }
            }
        },
        doesScreenHaveForms: function (screenID) {
            var elScreen = this.getScreenElement(screenID);
            if (elScreen) {
                var arForms = elScreen.getElementsByTagName('form');
                var hasTfaWidget = window.gigya.utils.DOM.getElementsByClass(elScreen, 'gigya-tfa').length > 0;
                if (arForms.length > 0 || hasTfaWidget) {
                    return true;
                }
            }
            return false;
        },
        // Returns whether screen was switched
        switchScreen: function (screenID, response, oForm) {
            var This = this;

            if (screenID == '_finish') {
                this.endFlow();
                return true;
            }
            var elScreen = this.getScreenElement(screenID);
            if (!elScreen) {
                privateScope.warn(this._ID, 'Missing screen "' + screenID + '"');
                if (!this._currentScreenID) {
                    this.hide();
                }
                return false;
            }

            if (this._finalizeRegistrationNeeded && !this.doesScreenHaveForms(screenID)) {
                this.endFlow(response, oForm, true);
                return true;
            }

            this._nextScreenElement = elScreen;
            if (!this._currentScreenID) {
                this.setNextScreenSize(); // draw an empty screen with a progress
            }

            var shouldWaitForData = false;

            var arForms = elScreen.getElementsByTagName('form');

            var extraProfileFields = '';

            for (var i = 0; i < arForms.length; i++) {
                extraProfileFields += extraProfileFields ? ',' : '' + this.getExtraProfileFields(arForms[i], true);
            }

            for (var i = 0; i < arForms.length; i++) {
                var formType = privateScope.getFirstGigyaClass(arForms[i]);
                var oFormActions = window.gigya.utils.object.clone(privateScope.oFormsActions[formType]);
                var containers = privateScope.containerConditions.getHistoryNeededContainers(arForms[i]);

                if (containers && containers.length > 0) {
                    if (!oFormActions) oFormActions = {};
                    if (!oFormActions.neededData) oFormActions.neededData = {};
                    oFormActions.neededData['getUserSettings'] = {
                        params: {
                            group: 'gigya_container_history-' + this._ID,
                            regToken: response ? response.regToken : null,
                            disableLocalSettings: true
                        },
                        cache: false
                    };
                }

                if (oFormActions && oFormActions.neededData) {
                    this._oNeededData = oFormActions.neededData;

                    for (var methodName in this._oNeededData) {
                        var params = this._oNeededData[methodName].params;
                        var disableCache = window.gigya.utils.validation.isExplicitFalse(this._oNeededData[methodName].cache);
                        if (disableCache)
                            delete this._apiData[methodName];

                        if (!this._apiData || !this._apiData[methodName] || (methodName == 'getAccountInfo' && extraProfileFields != '')) {
                            if (this._apiData && this._apiData[methodName])
                                delete this._apiData[methodName];

                            this.dimScreen();
                            shouldWaitForData = true;
                            var extraParams = { callback: function (response, callback) { return This.onApiData(response, callback); } };
                            if (methodName == 'getAccountInfo') {
                                if (extraProfileFields) {
                                    extraParams['extraProfileFields'] = extraProfileFields;
                                }
                            }

                            var method = window.gigya.accounts[methodName];
                            if (!method) method = window.gigya.socialize[methodName];

                            method(this._p, params, extraParams);
                        }
                    }
                }
            }
            if (!shouldWaitForData) this.onScreenData();
            return true;
        },
        onScreenData: function () {
            var screenID = this._nextScreenElement.getAttribute('data-original-id');
            var eventResult = window.gigya.events.dispatchForWidget({
                eventName: 'beforeScreenLoad',
                currentScreen: this._currentScreenID,
                form: this._lastSubmittedFormID,
                response: window.gigya.utils.object.clone(this._lastSubmittedFormResponse),
                profile: this._apiData.getAccountInfo ? this._apiData.getAccountInfo.profile : {},
                data: this._apiData.getAccountInfo ? this._apiData.getAccountInfo.data : {},
                nextScreen: screenID
            }, this._p);
            this.undimScreen();
            if (eventResult == false) return;

            if (this._elCaption) {
                var caption = this._nextScreenElement.getAttribute('data-caption');
                if (!caption) caption = this._elScreenSet.getAttribute('data-caption');
                if (!caption) {
                    caption = '&nbsp;';
                    if (!this._isDialog) this._elCaption.style.display = 'none';
                } else {
                    this._elCaption.style.display = '';
                }
                this._elCaption.innerHTML = caption;
            }

            this.setNextScreenSize();

            //this._elContainer.innerHTML = this._nextScreenElement.innerHTML;
            this._elContainer.innerHTML = '';
            this._containerInstances = [];
            this._formsInstances = {};

            var elScreen = document.createElement('div');
            elScreen.className = this._nextScreenElement.className;
            if (this._nextScreenElement.getAttribute('style')) elScreen.setAttribute('style', this._nextScreenElement.getAttribute('style'));
            elScreen.id = this._nextScreenElement.getAttribute('data-original-id') || this._nextScreenElement.id;
            elScreen.innerHTML = this._nextScreenElement.innerHTML;
            this._elContainer.appendChild(elScreen);

            var screenOnExistingLogin = this._nextScreenElement.getAttribute('data-on-existing-login-identifier-screen') || '';
            var screenOnPending = this._nextScreenElement.getAttribute('data-on-pending-registration-screen') || '';
            var screenOnPendingVerification = this._nextScreenElement.getAttribute('data-on-pending-verification-screen') || '';
            var screenOnMissingLoginID = this._nextScreenElement.getAttribute('data-on-missing-loginid-screen') || '';
            var screenOnPendingPassChange = this._nextScreenElement.getAttribute('data-on-pending-password-change') || '';

            this._elContainer.setAttribute('data-on-existing-login-identifier-screen', screenOnExistingLogin);
            this._elContainer.setAttribute('data-on-pending-registration-screen', screenOnPending);
            this._elContainer.setAttribute('data-on-pending-verification-screen', screenOnPendingVerification);
            this._elContainer.setAttribute('data-on-missing-loginid-screen', screenOnMissingLoginID);
            this._elContainer.setAttribute('data-on-pending-password-change', screenOnPendingPassChange);

            this.parseElements();
            this.checkAutoSkip();
            this._currentScreenID = screenID;
            this._elContainer.style.display = '';

            window.gigya.events.dispatchForWidget({
                eventName: 'afterScreenLoad',
                currentScreen: this._currentScreenID,
                form: this._lastSubmittedFormID,
                response: window.gigya.utils.object.clone(this._lastSubmittedFormResponse),
                profile: this._apiData.getAccountInfo ? this._apiData.getAccountInfo.profile : {},
                data: this._apiData.getAccountInfo ? this._apiData.getAccountInfo.data : {}
            }, this._p);
        },
        checkAutoSkip: function () {
            for (var formName in this._formsInstances) {
                this._formsInstances[formName].checkAutoSkip();
            }
        },
        setNextScreenSize: function () {
            this._elContainer.style.display = '';

            var w = this._nextScreenElement.getAttribute('data-width') || this._elScreenSet.getAttribute('data-width') || this._p.width;
            var h = this._nextScreenElement.getAttribute('data-height') || this._elScreenSet.getAttribute('data-height') || this._p.height;

            if (!w || !h) {
                var elTempScreen = document.createElement('div');
                elTempScreen.className = this._nextScreenElement.className + ' gigya-calculate-size';
                elTempScreen.setAttribute('style', this._nextScreenElement.getAttribute('style'));
                elTempScreen.innerHTML = this._nextScreenElement.innerHTML;
                elTempScreen.id = this._nextScreenElement.getAttribute('data-original-id') || this._nextScreenElement.id;
                elTempScreen.style.position = 'absolute';
                elTempScreen.style.zoom = '1';
                elTempScreen.style.left = '10px';
                elTempScreen.style.top = '-1000px';
                
                window.gigya.utils.DOM.setSize(elTempScreen, w, h);

                if (window.gigya.localInfo.isIE && window.gigya.localInfo.quirksMode) {
                    window.gigya.utils.DOM.addClassToElement(elTempScreen, 'gigya-screen-dialog-content');
                }

                window.gigya.utils.DOM.appendToBody(elTempScreen);
                var bnp = window.gigya.global.getBordersAndPaddings(elTempScreen);
                if (!w) w = elTempScreen.offsetWidth + Math.ceil(bnp.w) + 30;
                if (!h) h = elTempScreen.offsetHeight + 1;


                elTempScreen.parentNode.removeChild(elTempScreen);
            }

            if (w) {
                if (this._isDialog || this._elScreenSet.getAttribute('data-responsive') == null) {
                    window.gigya.utils.DOM.setSize(this._elContainer, w);
                } else {
                    this._elContainer.style.maxWidth = '' + ((('' + w).indexOf('%')) > 0 ? w : (w + 'px'));
                    this._elContainer.style['_width'] = this._elContainer.style.maxWidth;
                }
            }

            if (this._isDialog && !window.gigya.localInfo.isMobile) {
                if (h) {
                    this._elContainer.style['_height'] = h + 'px';
                    this._elContainer.style.minHeight = h + 'px';
                }
                window.gigya.utils.DOM.addClassToElement(this._elContainer, 'gigya-screen-dialog-content');
                var elDialog = document.getElementById(this._p.containerID);

                if (window.gigya.localInfo.isIE7 || window.gigya.localInfo.isIE8 || (window.gigya.localInfo.isIE && window.gigya.localInfo.quirksMode)) {
                    window.gigya.utils.DOM.getElementsByClass(elDialog, 'gigya-screen-dialog-top')[0].style.width = (this._elContainer.offsetWidth) + 'px';
                }

                var middleCenter = window.gigya.utils.viewport.getMiddleCenter();
                var dialogWidth = elDialog.offsetWidth;
                this._elContainer.style['height'] = h + 'px';
                var dialogHeight = dialogHeight = elDialog.offsetHeight;
                this._elContainer.style['height'] = 'auto';


                var dialogTop = middleCenter.top - Math.floor(dialogHeight / 2);
                var dialogLeft = middleCenter.left - Math.round(dialogWidth / 2);
                if (dialogTop < 10) dialogTop = 10;
                if (dialogLeft < 10) dialogLeft = 10;

                elDialog.style.top = dialogTop + 'px';
                elDialog.style.left = dialogLeft + 'px';
            }
        },
        parseElements: function () {
            var els = this._elContainer.getElementsByTagName('*');
            for (var i = 0; i < els.length; i++) {
                var el = els[i];
                var originalID = el.getAttribute('data-original-id'); //this is done to prevent IDs clashing.
                if (originalID != null) el.id = originalID;
                switch (el.nodeName.toLowerCase()) {
                    case 'select':
                    case 'input':
                    case 'textarea':
                        this.parseInput(el);
                    default:
                        this.parseSwitchScreen(el); break;
                }
            }
            var forms = this._elContainer.getElementsByTagName('form');
            for (var i = 0; i < forms.length; i++) {
                this.parseForm(forms[i]);
            }

            for (var i = 0; i < els.length; i++) {
                this.parseWidget(els[i]);
            }
        },
        parseForm: function (el) {
            var oForm = new privateScope.form(this, el);
            oForm.init();
        },
        parseWidget: function (el) {
            var widget = new privateScope.widget(this, el);
            widget.parse();
        },
        parseSwitchScreen: function (el) {
            var This = this;
            var attSwitchScreen = el.getAttribute('data-switch-screen');
            if (attSwitchScreen != null) {
                if (el.nodeName.toLowerCase() == 'a') {
                    el.setAttribute('href', 'javascript:void(0)');
                }
                window.gigya.utils.DOM.addEventListener(el, 'click', function (e) {
                    This.switchScreen(attSwitchScreen);
                    if (e.preventDefault) {
                        e.preventDefault();
                    } else if (window.event) {
                        window.event.returnValue = false;
                    }
                });
            }
        },
        parseInput: function (el) {
            if (!el) return;
            var This = this;
            var isDummy = el.getAttribute('dummy');
            var dummyID = el.getAttribute('data-screenset-element-id');
            if (!this._isRemote && (isDummy || el.nodeName.toLowerCase() == 'input')) {
                var originalEl = this._originalElements[dummyID] || this.getOriginalElement(el);
                if (originalEl) {
                    /*if (!this._originalElements[dummyID]) this._originalElements[dummyID] = originalEl;
                    if (!isDummy) {
                        var dummyInput = document.createElement('input');
                        dummyInput.setAttribute('name', el.name);
                        dummyInput.setAttribute('type', el.type);
                        dummyInput.setAttribute('dummy', '1');
                        dummyInput.setAttribute('data-screenset-element-id', dummyID);
                        if (originalEl.parentNode) originalEl.parentNode.insertBefore(dummyInput, originalEl);
                    }
                    if (originalEl.type == 'text' || originalEl.type == 'password') originalEl.value = originalEl.getAttribute('data-original-value') || '';
                    el.parentNode.insertBefore(originalEl, el);
                    el.parentNode.removeChild(el);
                    el = originalEl;*/
                    var originalID = el.getAttribute('data-original-id');
                    if (originalID != null) el.id = originalID;
                }
            }
            if (!isDummy) el.setAttribute('data-gigya-name', el.name); //data-gigya-name is the original name attribute value.
            var oFieldNameData = privateScope.oFieldNameData[el.getAttribute('data-gigya-name')];
            if (oFieldNameData) {
                el.setAttribute('name', oFieldNameData.autoFillName);
            }

            window.gigya.utils.DOM.addEventListener(el, 'change', function () { This.onInputChange(el) });
            this.onInputChange(el, true);
        },
        getOriginalElement: function (el) {
            return document.getElementById(el.getAttribute('data-screenset-element-id'));
        },
        onInputChange: function (el, clear) {
            var This = this;
            var elForm = this.getElementForm(el);
            if (!elForm) return;

            var value = el.value;
            if (el.type == 'checkbox') {
                value = el.checked;
            }

            var validationError;
            if (clear != true) {
                validationError = This.getValidationError(el, true);
                window.gigya.events.dispatchForWidget({
                    eventName: 'fieldChanged',
                    screen: this._currentScreenID,
                    form: elForm.getAttribute('data-gigya-id'),
                    field: el.getAttribute('data-gigya-name'),
                    isValid: (!validationError),
                    errMsg: validationError,
                    value: el.value
                }, this._p);
            }

            if (el.getAttribute('data-gigya-name') == 'password' || el.getAttribute('data-gigya-name') == 'newPassword') {
                var arPasswordRetype = window.gigya.utils.DOM.getElementsByAttribute(elForm, '*', 'name', 'passwordRetype');
                for (var i = 0; i < arPasswordRetype.length; i++) {
                    arPasswordRetype[i].value = '';
                }
            }

            this.showFieldError(el, validationError, true);

        },
        showFieldError: function (elField, errorCode, isBoundToField) {
            var elForm = this.getElementForm(elField);
            var errorMessage = this.getErrorMessage(errorCode, isBoundToField, elField);
            var shouldHandleError = true;

            if (isBoundToField) {
                var arBoundElements = window.gigya.utils.DOM.getElementsByAttribute(elForm, '*', 'data-bound-to', elField.getAttribute('data-gigya-name'));

                for (var i = 0; i < arBoundElements.length; i++) { //dealing with gigya-error-msg and gigya-error-display withing the same form as the input
                    var elBound = arBoundElements[i];

                    var allowedErrorCodes = [];
                    if (elBound.getAttribute('data-error-codes')) {
                        allowedErrorCodes = elBound.getAttribute('data-error-codes').split(',');
                        shouldHandleError = (allowedErrorCodes.length === 0 || window.gigya.utils.array.indexOf(allowedErrorCodes, errorCode) !== -1);
                    }

                    if (errorMessage && shouldHandleError) {
                        if (window.gigya.utils.DOM.isElementClass(elBound, 'gigya-error-display')) {
                            window.gigya.utils.DOM.addClassToElement(elBound, 'gigya-error-display-active');
                        }
                        if (window.gigya.utils.DOM.isElementClass(elBound, 'gigya-error-msg')) {
                            elBound.innerHTML = errorMessage;
                        }
                    } else if (!errorMessage) {
                        if (window.gigya.utils.DOM.isElementClass(elBound, 'gigya-error-display')) {
                            window.gigya.utils.DOM.removeClassFromElement(elBound, 'gigya-error-display-active');
                        }
                        if (window.gigya.utils.DOM.isElementClass(elBound, 'gigya-error-msg')) {
                            elBound.innerHTML = '';
                        }
                    }
                }
            }

            if (errorMessage && shouldHandleError) {
                window.gigya.utils.DOM.addClassToElement(elField, 'gigya-error');
                if (elField.name == 'data.terms') {
                    elField.parentNode.style.border = '1px solid #DD4B39';
                }
            } else if (!errorMessage) {
                window.gigya.utils.DOM.removeClassFromElement(elField, 'gigya-error');
                if (elField.name == 'data.terms') {
                    elField.parentNode.style.border = '';
                }
            }
        },
        getValidationError: function (elField, isBoundToField) {
            if (privateScope.isFieldInHiddenContainer(elField)) return; // no validation for fields in a hidden gigya-container
            if (elField.getAttribute('data-required') && !elField.value) {
                return privateScope.errorCodes.MISSING_REQUIRED;
            }
            if (!elField.name) return;

            var errorCode;
            var elForm = this.getElementForm(elField);
            var fieldValue = elField.value;

            var fieldIsEmpty = (fieldValue == null || fieldValue.split(' ').join('') == '');

            if (elField.name == 'email' && !fieldIsEmpty && !window.gigya.pluginUtils.validation.isEmailValid(elField.value)) {
                errorCode = privateScope.errorCodes.VALIDATION_ERROR;
            }

            if (elField.name == 'passwordRetype') {
                var arPasswordFields = window.gigya.utils.DOM.getElementsByAttribute(elForm, '*', 'name', 'newPassword');
                if (arPasswordFields.length == 0) arPasswordFields = window.gigya.utils.DOM.getElementsByAttribute(elForm, '*', 'name', 'password');
                if (arPasswordFields.length > 0 && arPasswordFields[0].value != '' && arPasswordFields[0].value != fieldValue) {
                    errorCode = privateScope.errorCodes.VALIDATION_ERROR;
                }
            }

            if (elField.getAttribute('data-taken') == '1') {
                errorCode = privateScope.errorCodes.UNIQUE_IDENTIFIER_EXISTS;
            }
            //"integer", "float", "boolean", "string", "text", "date", "long"

            if (window.gigya.utils.DOM.isElementClass(elForm, 'gigya-register-form') || window.gigya.utils.DOM.isElementClass(elForm, 'gigya-profile-form') || window.gigya.utils.DOM.isElementClass(elForm, 'gigya-auth-info-form')) {
                var fieldName = elField.name;
                var fieldNamespace = fieldName.split('.')[0];
                var schemaName = fieldNamespace == 'data' ? 'dataSchema' : 'profileSchema';
                if (fieldNamespace == 'data' || fieldNamespace == 'profile') {
                    fieldName = fieldName.replace(fieldNamespace + '.', '');
                }
                if (this._apiData.getSchema && this._apiData.getSchema[schemaName] && this._apiData.getSchema[schemaName].fields) {
                    var schema = this._apiData.getSchema[schemaName].fields[fieldName];
                    if (schema) {
                        if (fieldName == 'terms' && schema.required && elField.checked == false) {
                            errorCode = privateScope.errorCodes.MISSING_REQUIRED;
                        }

                        if (schema.required && fieldValue.split(' ').join('') == '') {
                            errorCode = privateScope.errorCodes.MISSING_REQUIRED;
                        }
                        if (schema.type && !fieldIsEmpty) {
                            switch (schema.type) {
                                case 'integer': case 'long': if (isNaN(parseInt(fieldValue))) errorCode = privateScope.errorCodes.VALIDATION_ERROR; break;
                                case 'float': if (isNaN(parseFloat(fieldValue))) errorCode = privateScope.errorCodes.VALIDATION_ERROR; break;
                                case 'boolean': if (elField.checked == null) errorCode = privateScope.errorCodes.VALIDATION_ERROR; break;
                                case 'date': if (isNaN(d.getTime())) errorCode = privateScope.errorCodes.VALIDATION_ERROR; break;
                            }
                        }
                        if (schema.format) {
                            var arFormat = schema.format.match(/(.*?)\(\'(.*?)\'\)$/);
                            if (arFormat) {
                                var formatType = arFormat[1];
                                var formatValue = arFormat[2];
                                if (formatType && formatValue) {
                                    if (formatType == 'regex') {
                                        var regexFormat = new RegExp(formatValue);
                                        if (!regexFormat.test(fieldValue)) {
                                            if (isBoundToField) {
                                                errorCode = privateScope.errorCodes.VALIDATION_ERROR;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (this._apiData.getPolicies && this._apiData.getPolicies.passwordComplexity && elField.name == 'password') {
                    var oComplexity = this._apiData.getPolicies.passwordComplexity;
                    if (!oComplexity) oComplexity = {};
                    var oPassStrength = privateScope.getPasswordStrengthData(fieldValue);

                    if (!privateScope.isPasswordStrengthValid(elField.value, oPassStrength, oComplexity)) {
                        errorCode = privateScope.errorCodes.VALIDATION_ERROR;
                    }
                }
            }
            if (fieldIsEmpty && !elField.getAttribute('data-allow-empty')) {
                if (privateScope.alwaysRequiredFields[elField.name]) {
                    errorCode = privateScope.errorCodes.MISSING_REQUIRED;
                }
            }

            if (window.gigya.utils.DOM.isElementClass(elField, 'gigya-captcha') && !privateScope.isHidden(elField) && typeof Recaptcha == 'object' && Recaptcha.get_response().split(' ').join('') == '') {
                errorCode = privateScope.errorCodes.MISSING_REQUIRED;
            }
            return errorCode;
        },
        getErrorMessage: function (errorCode, isBoundToField, elField) {
            if (!errorCode || errorCode == 0) return '';
            var fieldName = elField.getAttribute('data-gigya-name');
            var fieldDisplayName = elField.getAttribute('data-display-name');
            if (!fieldDisplayName) {
                switch (elField.name) {
                    case 'loginID': fieldDisplayName = 'username'; break;
                    case 'secretQuestion': fieldDisplayName = 'secret question'; break;
                    case 'secretAnswer': fieldDisplayName = 'secret answer'; break;
                }
            }
            if (!fieldDisplayName) fieldDisplayName = elField.name.split('.').pop();

            if (window.gigya.utils.DOM.isElementClass(elField, 'gigya-captcha')) {
                if (errorCode != privateScope.errorCodes.MISSING_REQUIRED && typeof Recaptcha == 'object') Recaptcha.reload();
                return this.getText('the_characters_you_entered_didn\'t_match_the_word_verification._please_try_again');
            }

            switch (errorCode) {
                case privateScope.errorCodes.MISSING_REQUIRED:
                    if (isBoundToField) {
                        return this.getText('this_field_is_required');
                    } else {
                        return this.getText('please_enter_fieldname', '%fieldname', fieldDisplayName);
                    }
                    break;
                case privateScope.errorCodes.UNIQUE_IDENTIFIER_EXISTS:
                    if (fieldName == 'username') {
                        return this.getText('username_already_exists');
                    } else if (fieldName == 'email') {
                        return this.getText('email_already_exists');
                    }
                    break;
                case privateScope.errorCodes.VALIDATION_ERROR:
                default:
                    if (fieldName == 'password') {
                        return this.getText('password_does_not_meet_complexity_requirements');
                    } else if (fieldName == 'passwordRetype') {
                        return this.getText('passwords_do_not_match');
                    } else {
                        return this.getText('invalid_fieldname', '%fieldname', fieldDisplayName);
                    }
                    break;
            }
        },
        dimScreen: function () {
            privateScope.dimContainer(this._elContainer);
        },
        undimScreen: function () {
            privateScope.undimContainer(this._elContainer);
        },
        onScreenResponse: function (response, oForm, afterFinalizeRegistration) {
            var This = this;
            if (!oForm) oForm = {};
            this._lastSubmittedFormID = oForm._ID;
            this._lastSubmittedFormResponse = response;

            var successScreen = (oForm._elForm ? oForm._elForm.getAttribute('data-on-success-screen') : null);
            if (response.autoSkip && oForm._elForm && oForm._elForm.getAttribute('data-on-auto-skip-screen')) {
                successScreen = oForm._elForm.getAttribute('data-on-auto-skip-screen');
            }

            if (response.regToken) this._p.regToken = response.regToken;

            this.onAccountInfo(response); //will update the profile/data cache from the response

            if (afterFinalizeRegistration || (this._lastSubmittedFormID && !(!successScreen && this.endFlowIsPending()))) {
                //A form was submitted, we need to invoke afterSubmit.
                //If the flow is ending and finalizeRegistration is needed, the finalizeRegistration response will fire the event

                var fnOnInfoUpdated = function (response) {
                    var eventResult = window.gigya.events.dispatchForWidget({
                        eventName: 'afterSubmit',
                        screen: This._currentScreenID,
                        form: This._lastSubmittedFormID,
                        profile: This._apiData.getAccountInfo && This._apiData.getAccountInfo.profile ? This._apiData.getAccountInfo.profile : {},
                        data: This._apiData.getAccountInfo && This._apiData.getAccountInfo.data ? This._apiData.getAccountInfo.data : {},
                        response: window.gigya.utils.object.clone(This._lastSubmittedFormResponse)
                    }, This._p);
                }
                if (response.operation == '/accounts.setAccountInfo' && (!response.profile || !response.data)) { //we also need to get the updated info since setAccountInfo updated it
                    this.updateAccountInfo(fnOnInfoUpdated);
                } else {
                    fnOnInfoUpdated(response);
                }

            }

            if (response.errorCode == 0) {
                if (response.operation == '/accounts.register' && this._apiData.initRegistration) {
                    // a succeful call to accounts.register revokes the previos initRegistration response so that a new regToken will be generated for other register forms
                    delete this._apiData.initRegistration;
                }

                if (successScreen && successScreen != this._currentScreenID) {
                    this.switchScreen(successScreen, response, oForm);
                } else if (!successScreen) {
                    This._p.remember = This._extraEventData.rememberMe;
                    this.endFlow(response, oForm);
                }
            } else {
                var handled = this.handleErrorAttribute(response, oForm);
                if (handled) return;

                if (response.secretQuestion) {
                    var secretQuestionWidgets = window.gigya.utils.DOM.getElementsByClass(this._elContainer, 'gigya-secret-question');
                    for (var i = 0; i < secretQuestionWidgets.length; i++) {
                        var elQuestion = secretQuestionWidgets[i];
                        var els = window.gigya.utils.DOM.getElementsByAttribute(elQuestion, '*', 'name', 'secretQuestion');
                        for (var u = 0; u < els.length; u++) {
                            els[u].innerHTML = response.secretQuestion;
                        }
                        els = window.gigya.utils.DOM.getElementsByAttribute(elQuestion, '*', 'name', 'secretAnswer');
                        for (var u = 0; u < els.length; u++) {
                            els[u].removeAttribute('data-allow-empty');
                        }
                        elQuestion.style.display = 'inline';
                    }
                } else {
                    switch (response.errorCode) {
                        case 403041: response.errorMessage = this.getText('account_is_disabled'); break;
                        case 403044: response.errorMessage = this.getText('sorry_we_are_not_able_to_process_your_registration'); break; //COPPA
                        case 403042: response.errorMessage = this.getText('invalid_login_or_password'); break;
                        case 403047: response.errorMessage = this.getText('there_is_no_user_with_that_username_or_email'); break;
                        case 400009: // Validation_error
                        case 400006: // invalid parameter value
                            response.errorMessage = this.getText('there_are_errors_in_your_form_please_try_again'); break;
                    }
                    var errorDetails;
                    switch (response.errorDetailsCode) {
                        case 100001: errorDetails = this.getText('old_password_cannot_be_the_same_as_new_password'); break;
                        case 100002: errorDetails = this.getText('wrong_password'); break;
                    }
                    window.gigya.events.dispatchErrorFromResponse(this._p, response, {
                        screen: this._currentScreenID,
                        form: this._lastSubmittedFormID,
                        response: window.gigya.utils.object.clone(this._lastSubmittedFormResponse)
                    });
                    if (!this._currentScreenID) {
                        this.hide();
                        return;
                    }

                    if (response.errorCode != 0) {
                        if (typeof Recaptcha == 'object') Recaptcha.reload();
                    }

                    if (oForm.showErrors) {
                        var serverError = {
                            errorCode: response.errorCode,
                            errorMessage: errorDetails || response.errorMessage,
                            errorFlags: response.errorFlags
                        };

                        var arFormErrors = [];
                        var arValidationErrors = response.validationErrors;
                        if (arValidationErrors && arValidationErrors.length > 0) {
                            for (var i = 0; i < arValidationErrors.length; i++) {
                                var fieldName = arValidationErrors[i].fieldName;
                                var fieldNamespace = fieldName.split('.')[0];
                                var arFields = window.gigya.utils.DOM.getElementsByAttribute(oForm._elForm, '*', 'data-gigya-name', fieldName);
                                if (arFields.length == 0 && fieldNamespace == 'profile') {
                                    arFields = window.gigya.utils.DOM.getElementsByAttribute(oForm._elForm, '*', 'data-gigya-name', fieldName.replace('profile.', ''));
                                }
                                if (arFields.length > 0) {
                                    var elField = arFields[0];
                                    if (arFormErrors.length == 0) elField.focus();
                                    var validationError = window.gigya.utils.object.clone(arValidationErrors[i]);
                                    validationError.field = elField;
                                    arFormErrors.push(validationError);
                                    this.showFieldError(elField, arValidationErrors[i].errorCode, true);
                                } else {
                                    if (arValidationErrors[i].errorCode == privateScope.errorCodes.MISSING_REQUIRED || arValidationErrors[i].errorCode == privateScope.errorCodes.VALIDATION_ERROR) {
                                        if (fieldName == 'captchaaText') {
                                            privateScope.warn(this._ID, 'Captcha is required but captcha widget is missing from the submitted form');
                                        } else {
                                            privateScope.warn(this._ID, fieldName + ' is mandatory/invalid but its field is missing from the submitted form');
                                        }
                                    }
                                }
                            }
                        }

                        arFormErrors.push(serverError);
                        oForm.showErrors([serverError], true);
                        oForm.showErrors(arFormErrors, false);
                    }
                }
            }
        },
        handleErrorAttribute: function (response, oForm) {
            var oAttribute = privateScope.oErrorAttributes[response.errorCode];
            var attributeName = oAttribute ? oAttribute.name : null;
            var attributeValue;
            if (attributeName) {
                attributeValue = this._elContainer.getAttribute(attributeName) || this._elScreenSet.getAttribute(attributeName);
            }

            if (attributeValue) {
                if (oAttribute.requiresFinalize) {
                    this._finalizeRegistrationNeeded = true;
                } else if (oAttribute.resetFinalizeNeededState) {
                    this._finalizeRegistrationNeeded = false;
                }

                return this.switchScreen(attributeValue, response, oForm);
            } else {
                if (attributeName) {
                    privateScope.warn(this._ID, 'Missing attribute ' + attributeName);
                }
                return false;
            }
        },

        endFlowIsPending: function () {
            return (this._finalizeRegistrationNeeded && this._p.regToken);
        },
        endFlow: function (res, oForm, dontHide) {
            var This = this;
            if (this.endFlowIsPending()) {
                window.gigya.accounts.finalizeRegistration(this._p, {
                    include: 'profile,data,emails', dontHandleScreenSet: true,
                    callback: function (response) {
                        if (response.errorCode == 0) {
                            This._p.regToken = null;
                            This._finalizeRegistrationNeeded = false;
                            This._apiData = {};
                        }
                        This.onScreenResponse(response, oForm, true);
                    }
                });
            } else {
                if (!dontHide) this.hide('finished', res);
            }
        },
        getInstanceRefString: function () {
            return 'gigya.accounts.plugins.screenSet.instances[\'' + encodeURIComponent(this._p['screenSet'] + '_' + this._p['containerID']) + '\']'
        }
    }
})();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2xlZ2FjeS9wbHVnaW5zL2dpZ3lhLnNlcnZpY2VzLmFjY291bnRzLnBsdWdpbnMuc2NyZWVuU2V0X3YxLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0EsZUFBZSxZQUFLLGtDQUFrQyxZQUFLO0FBQzNELElBQUksWUFBSztBQUNULHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSwyQkFBMkIsWUFBSztBQUNoQztBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLDJCQUEyQixZQUFLO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsWUFBWSxZQUFLO0FBQ2pCLGdCQUFnQixZQUFLLG9CQUFvQixZQUFLLHFC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QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQywrQkFBK0I7QUFDMUU7QUFDQTtBQUNBLCtDQUErQyxZQUFLO0FBQ3BEO0FBQ0EsK0NBQStDLFlBQUs7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsWUFBSztBQUMvRDtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBO0FBQ0EseUNBQXlDO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7O0FBRUE7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsWUFBSztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsYUFBYTtBQUNiO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLEkiLCJmaWxlIjoiZ2lneWEuc2VydmljZXMuYWNjb3VudHMucGx1Z2lucy5zY3JlZW5TZXRfdjEuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9sZWdhY3kvcGx1Z2lucy9naWd5YS5zZXJ2aWNlcy5hY2NvdW50cy5wbHVnaW5zLnNjcmVlblNldF92MS5qc1wiKTtcbiIsIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJnaWd5YS5zZXJ2aWNlcy5zb2NpYWxpemUucGx1Z2lucy5qc1wiIC8+XHJcbihmdW5jdGlvbiAoKSB7XHJcbiAgICBpZiAodHlwZW9mIGdpZ3lhLmFjY291bnRzLnBsdWdpbnMgPT0gJ3VuZGVmaW5lZCcpIGdpZ3lhLmFjY291bnRzLnBsdWdpbnMgPSB7fTtcclxuICAgIGdpZ3lhLmFjY291bnRzLnBsdWdpbnMuc2NyZWVuU2V0ID0ge1xyXG4gICAgICAgIGluc3RhbmNlczoge30sXHJcbiAgICAgICAgc2hvd1NjcmVlblNldDogZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgcHJpdmF0ZVNjb3BlLmNyZWF0ZUluc3RhbmNlKHApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3dpdGNoU2NyZWVuOiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVySUQgPSBwLmlzUG9wdXAgPyAnJyA6IHBbJ2NvbnRhaW5lcklEJ107XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IGdpZ3lhLmFjY291bnRzLnBsdWdpbnMuc2NyZWVuU2V0Lmluc3RhbmNlc1twWydzY3JlZW5TZXQnXSArICdfJyArIGNvbnRhaW5lcklEXTtcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5zd2l0Y2hTY3JlZW4ocC5zY3JlZW4pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoaWRlU2NyZWVuU2V0OiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICB2YXIgY29udGFpbmVySUQgPSBwLmlzUG9wdXAgPyAnJyA6IHBbJ2NvbnRhaW5lcklEJ107XHJcbiAgICAgICAgICAgIHZhciBpbnN0YW5jZSA9IGdpZ3lhLmFjY291bnRzLnBsdWdpbnMuc2NyZWVuU2V0Lmluc3RhbmNlc1twWydzY3JlZW5TZXQnXSArICdfJyArIGNvbnRhaW5lcklEXTtcclxuICAgICAgICAgICAgaWYgKGluc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZS5oaWRlKCdjYW5jZWxlZCcsIG51bGwsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBfaW5qZWN0Q1NTOiBmdW5jdGlvbiAocCkge1xyXG4gICAgICAgICAgICBpZiAoIXApIHAgPSB7fTtcclxuICAgICAgICAgICAgZ2lneWEuZ2xvYmFsLmFkZENTUyhwcml2YXRlU2NvcGUuZGVmYXVsdENzcywgcC5jc3NQcmVmaXgpO1xyXG4gICAgICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUU3IHx8IGdpZ3lhLmxvY2FsSW5mby5pc0lFOCB8fCAoZ2lneWEubG9jYWxJbmZvLmlzSUUgJiYgZ2lneWEubG9jYWxJbmZvLnF1aXJrc01vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5nbG9iYWwuYWRkQ1NTKCcuZ2lneWEtbGF5b3V0LWNlbGwge292ZXJmbG93OmhpZGRlbjttYXJnaW4tbGVmdDotMXB4IWltcG9ydGFudDt9Jyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcHJpdmF0ZVNjb3BlLmFkZGVkQ1NTID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICB2YXIgcHVibGljU2NvcGUgPSBnaWd5YS5hY2NvdW50cy5wbHVnaW5zLnNjcmVlblNldDtcclxuXHJcbiAgICB2YXIgcHJpdmF0ZVNjb3BlID0ge1xyXG4gICAgICAgIG9FcnJvckF0dHJpYnV0ZXM6IHtcclxuICAgICAgICAgICAgMjA2MDAxOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGF0YS1vbi1wZW5kaW5nLXJlZ2lzdHJhdGlvbi1zY3JlZW4nLFxyXG4gICAgICAgICAgICAgICAgcmVxdWlyZXNGaW5hbGl6ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA0MDMwNDM6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdkYXRhLW9uLWV4aXN0aW5nLWxvZ2luLWlkZW50aWZpZXItc2NyZWVuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAyMDYwMDI6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdkYXRhLW9uLXBlbmRpbmctdmVyaWZpY2F0aW9uLXNjcmVlbicsXHJcbiAgICAgICAgICAgICAgICByZXNldEZpbmFsaXplTmVlZGVkU3RhdGU6IHRydWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgMjA2MDAzOiB7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiAnZGF0YS1vbi1taXNzaW5nLWxvZ2luaWQtc2NyZWVuJ1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICA0MDMxMDA6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6ICdkYXRhLW9uLXBlbmRpbmctcGFzc3dvcmQtY2hhbmdlLXNjcmVlbicsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlc0ZpbmFsaXplOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDQwMzEwMToge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RhdGEtb24tcGVuZGluZy10ZmEtdmVyaWZpY2F0aW9uLXNjcmVlbicsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlc0ZpbmFsaXplOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDQwMzEwMjoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RhdGEtb24tcGVuZGluZy10ZmEtcmVnaXN0cmF0aW9uLXNjcmVlbicsXHJcbiAgICAgICAgICAgICAgICByZXF1aXJlc0ZpbmFsaXplOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIDQwMzExMDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogJ2RhdGEtb24tcGVuZGluZy1yZWNlbnQtbG9naW4tc2NyZWVuJ1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKlxyXG5cdFx0XCJzcGVjaWFsRmllbGRzXCIgYXJlIHVzZWQgYXMgcGFyYW1zIGZvciBcInN1Ym1pdFwiIGZ1bmN0aW9uLlxyXG5cdFx0aWYgXCJkYXRhT2JqZWN0TmFtZVwiIGV4aXN0cyBpdCB3aWxsIGJlIHVzZWQgZm9yIGZpZWxkcyB0aGF0IGFyZSBub3QgaW4gXCJzcGVjaWFsRmllbGRzXCIgYW5kIHN0YXJ0cyB3aXRoIHRoZSBvYmplY3QgbmFtZS5cclxuXHRcdGlmIFwicHJvZmlsZU9iamVjdE5hbWVcIiBleGlzdHMgaXQgd2lsbCBiZSB1c2VkIGZvciBmaWVsZHMgdGhhdCBhcmUgbm90IGluIFwiZGF0YU9iamVjdE5hbWVcIi5cclxuXHRcdCovXHJcbiAgICAgICAgb0Zvcm1zQWN0aW9uczoge1xyXG4gICAgICAgICAgICAnZ2lneWEtbG9naW4tZm9ybSc6IHtcclxuICAgICAgICAgICAgICAgIHN1Ym1pdDogZ2lneWEuYWNjb3VudHMubG9naW4sXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0U3VibWl0UGFyYW1zOiB7IGluY2x1ZGU6ICdwcm9maWxlLGRhdGEsZW1haWxzJyB9LFxyXG4gICAgICAgICAgICAgICAgc3BlY2lhbEZpZWxkczogeyBsb2dpbklEOiAxLCBwYXNzd29yZDogMSwgY2FwdGNoYVRleHQ6IDEsIGNhcHRjaGFUb2tlbjogMSB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdnaWd5YS1yZXNldC1wYXNzd29yZC1mb3JtJzoge1xyXG4gICAgICAgICAgICAgICAgc3VibWl0OiBnaWd5YS5hY2NvdW50cy5yZXNldFBhc3N3b3JkLFxyXG4gICAgICAgICAgICAgICAgc3BlY2lhbEZpZWxkczogeyBsb2dpbklEOiAxLCBuZXdQYXNzd29yZDogMSwgZW1haWw6IDEsIHNlY3JldEFuc3dlcjogMSwgZW1haWw6IDEgfSxcclxuICAgICAgICAgICAgICAgIHByb2ZpbGVPYmplY3ROYW1lOiAnc2VjdXJpdHlGaWVsZHMnLFxyXG4gICAgICAgICAgICAgICAgcmVzZXRGaW5hbGl6ZU5lZWRlZFN0YXRlOiB0cnVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdnaWd5YS1yZWdpc3Rlci1mb3JtJzoge1xyXG4gICAgICAgICAgICAgICAgbmVlZGVkRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGluaXRSZWdpc3RyYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FjaGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBnZXRQb2xpY2llczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNlY3Rpb25zOiAncGFzc3dvcmRDb21wbGV4aXR5J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBnZXRTY2hlbWE6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBwcmVwb3B1bGF0ZUZyb206IFsnZ2V0QWNjb3VudEluZm8nLCAnZ2V0QWNjb3VudEluZm8ucHJvZmlsZScsICdnZXRBY2NvdW50SW5mby5sb2dpbklEcyddLFxyXG4gICAgICAgICAgICAgICAgc3VibWl0OiBnaWd5YS5hY2NvdW50cy5yZWdpc3RlcixcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRTdWJtaXRQYXJhbXM6IHsgaW5jbHVkZTogJ3Byb2ZpbGUsZGF0YSxlbWFpbHMsbG9naW5JRHMnIH0sXHJcbiAgICAgICAgICAgICAgICBzcGVjaWFsRmllbGRzOiB7IHVzZXJuYW1lOiAxLCBlbWFpbDogMSwgcGFzc3dvcmQ6IDEsIHNlY3JldFF1ZXN0aW9uOiAxLCBzZWNyZXRBbnN3ZXI6IDEsIGNhcHRjaGFUZXh0OiAxLCBjYXB0Y2hhVG9rZW46IDEgfSxcclxuICAgICAgICAgICAgICAgIHByb2ZpbGVPYmplY3ROYW1lOiAncHJvZmlsZScsXHJcbiAgICAgICAgICAgICAgICBkYXRhT2JqZWN0TmFtZTogJ2RhdGEnXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICdnaWd5YS1saW5rLWFjY291bnRzLWZvcm0nOiB7XHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGdpZ3lhLmFjY291bnRzLmxpbmtBY2NvdW50cyxcclxuICAgICAgICAgICAgICAgIGRlZmF1bHRTdWJtaXRQYXJhbXM6IHsgaW5jbHVkZTogJ3Byb2ZpbGUsZGF0YScgfSxcclxuICAgICAgICAgICAgICAgIHNwZWNpYWxGaWVsZHM6IHsgbG9naW5JRDogMSwgcGFzc3dvcmQ6IDEgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAnZ2lneWEtcHJvZmlsZS1mb3JtJzoge1xyXG4gICAgICAgICAgICAgICAgbmVlZGVkRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldFNjaGVtYToge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHt9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBnZXRBY2NvdW50SW5mbzoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6ICdsb2dpbklEcyxlbWFpbHMscHJvZmlsZSxkYXRhJ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHByZXBvcHVsYXRlRnJvbTogWydnZXRBY2NvdW50SW5mbycsICdnZXRBY2NvdW50SW5mby5wcm9maWxlJywgJ2dldEFjY291bnRJbmZvLmxvZ2luSURzJ10sXHJcbiAgICAgICAgICAgICAgICBzcGVjaWFsRmllbGRzOiB7IHVzZXJuYW1lOiAxLCBvbGRQYXNzd29yZDogMSwgcGFzc3dvcmQ6IDEsIG5ld1Bhc3N3b3JkOiAxLCBwYXNzd29yZFJldHlwZTogMSwgc2VjcmV0UXVlc3Rpb246IDEsIHNlY3JldEFuc3dlcjogMSwgYWRkTG9naW5FbWFpbHM6IDEsIHJlbW92ZUxvZ2luRW1haWxzOiAxIH0sXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGdpZ3lhLmFjY291bnRzLnNldEFjY291bnRJbmZvLFxyXG4gICAgICAgICAgICAgICAgcHJvZmlsZU9iamVjdE5hbWU6ICdwcm9maWxlJyxcclxuICAgICAgICAgICAgICAgIGRhdGFPYmplY3ROYW1lOiAnZGF0YSdcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgJ2dpZ3lhLXJlc2VuZC12ZXJpZmljYXRpb24tY29kZS1mb3JtJzoge1xyXG4gICAgICAgICAgICAgICAgbmVlZGVkRGF0YToge1xyXG4gICAgICAgICAgICAgICAgICAgIGdldEFjY291bnRJbmZvOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogJ2VtYWlscydcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBzdWJtaXQ6IGdpZ3lhLmFjY291bnRzLnJlc2VuZFZlcmlmaWNhdGlvbkNvZGUsXHJcbiAgICAgICAgICAgICAgICBzcGVjaWFsRmllbGRzOiB7IGVtYWlsOiAxIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNIaWRkZW46IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICB3aGlsZSAoZWwgJiYgZWwucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLnN0eWxlLnZpc2liaWxpdHkgPT0gJ2hpZGRlbicgfHwgKGVsLmNsYXNzTmFtZS5pbmRleE9mKCdnaWd5YS1lcnJvci1kaXNwbGF5JykgIT0gLTEgJiYgZWwuY2xhc3NOYW1lLmluZGV4T2YoJ2dpZ3lhLWVycm9yLWRpc3BsYXktYWN0aXZlJykgPT0gLTEpIHx8IGVsLnN0eWxlLmRpc3BsYXkgPT0gJ25vbmUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvLyBDaGVja3MgaWYgdGhlIGZpZWxkIGlzIGhpZGRlbiAoaW5zaWRlIGhpZGRlbiBnaWd5YS1jb250YWluZXIpXHJcbiAgICAgICAgaXNGaWVsZEluSGlkZGVuQ29udGFpbmVyOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgdmFyIGN1cnIgPSBlbDtcclxuXHJcbiAgICAgICAgICAgIHdoaWxlIChjdXJyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZ2lneWEudXRpbHMuRE9NLmlzRWxlbWVudENsYXNzKGN1cnIsICdnaWd5YS1jb250YWluZXInKSAmJiAhZ2lneWEudXRpbHMuRE9NLmlzRWxlbWVudENsYXNzKGN1cnIsICdnaWd5YS1jb250YWluZXItZW5hYmxlZCcpKVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGN1cnIgPSBjdXJyLnBhcmVudEVsZW1lbnQ7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8vIFJlbGV2YW50IHRvIGdpZ3lhLWNvbnRhaW5lciB3aWRnZXRcclxuICAgICAgICAvLyByZW5kZXJpbmcgPSBjaGVja2VkIG9uIHdpZGdldCByZW5kZXIsIHZhbGlkYXRpb24gPSBjaGVja2VkIGluIGVhY2ggZmllbGQgY2hhbmdlXHJcbiAgICAgICAgY29udGFpbmVyQ29uZGl0aW9uczoge1xyXG4gICAgICAgICAgICBzZXRzOiB7XHJcbiAgICAgICAgICAgICAgICByZW5kZXJpbmc6IHtcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YS1kb21haW5zJzogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhbGxvd2VkRG9tYWlucyA9IHZhbHVlLnNwbGl0KCcsJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFsbG93ZWREb21haW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2lneWEucGx1Z2luVXRpbHMuZG9tYWluLmlzSW5Eb21haW4oYWxsb3dlZERvbWFpbnNbaV0pKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YS1hcGlrZXlzJzogZnVuY3Rpb24gKHZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhcGlrZXlzID0gdmFsdWUuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChnaWd5YS51dGlscy5hcnJheS5pbmRleE9mKGFwaWtleXMsIGdpZ3lhLnRoaXNTY3JpcHQuQVBJS2V5KSAhPSAtMSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YS1wcm9iJzogZnVuY3Rpb24gKHZhbHVlLCBjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChjb250YWluZXIuX3NjcmVlblNldC5fcmFuZG9tIDw9IHBhcnNlRmxvYXQodmFsdWUpKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICdkYXRhLWFmdGVyLWRhdGUnOiBmdW5jdGlvbiAodmFsdWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRpbWVWYWx1ZSA9IG5ldyBEYXRlKHZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuICgobmV3IERhdGUoKSkuZ2V0VGltZSgpID4gdGltZVZhbHVlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YS1iZWZvcmUtZGF0ZSc6IGZ1bmN0aW9uICh2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGltZVZhbHVlID0gbmV3IERhdGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgPD0gdGltZVZhbHVlLmdldFRpbWUoKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YS1kaXNwbGF5LWNhcCc6IGZ1bmN0aW9uICh2YWx1ZSwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXJIaXN0b3J5ID0gcHJpdmF0ZVNjb3BlLmNvbnRhaW5lckNvbmRpdGlvbnMuZ2V0SGlzdG9yeUZyb21TZXR0aW5ncyhjb250YWluZXIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lckhpc3RvcnkpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh2YWx1ZSA+IGNvbnRhaW5lckhpc3RvcnkuZGlzcGxheUNvdW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lckhpc3Rvcnkud2FzVXBkYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckhpc3RvcnkuZGlzcGxheUNvdW50Kys7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZVNjb3BlLmNvbnRhaW5lckNvbmRpdGlvbnMuc2F2ZUhpc3RvcnlJblNldHRpbmdzKGNvbnRhaW5lckhpc3RvcnksIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVySGlzdG9yeS53YXNVcGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtZGlzcGxheS1mcmVxJzogZnVuY3Rpb24gKHZhbHVlLCBjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lckhpc3RvcnkgPSBwcml2YXRlU2NvcGUuY29udGFpbmVyQ29uZGl0aW9ucy5nZXRIaXN0b3J5RnJvbVNldHRpbmdzKGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVySGlzdG9yeSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vdyA9IChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciB0aW1lUGFzc2VkID0gKG5vdyAtIGNvbnRhaW5lckhpc3RvcnkubGFzdERpc3BsYXkpIC8gMTAwMDsgLy8gTWlsaXNlY29uZHMgLT4gc2Vjb25kc1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lckhpc3RvcnkubGFzdERpc3BsYXkgPT0gLTEgfHwgdmFsdWUgPCB0aW1lUGFzc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lckhpc3Rvcnkud2FzVXBkYXRlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lckhpc3RvcnkubGFzdERpc3BsYXkgPSBub3c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZVNjb3BlLmNvbnRhaW5lckNvbmRpdGlvbnMuc2F2ZUhpc3RvcnlJblNldHRpbmdzKGNvbnRhaW5lckhpc3RvcnksIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVySGlzdG9yeS53YXNVcGRhdGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgJ2RhdGEtZW1wdHktZmllbGRzJzogZnVuY3Rpb24gKHZhbHVlLCBjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlucHV0cyA9IGNvbnRhaW5lci5fZWwuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoZWNrRW1wdHlGaWVsZHM7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgY2hlY2tFbXB0eUZpZWxkcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlID09ICcqJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hlY2tFbXB0eUZpZWxkcyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaW5wdXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5hbWUgPSBpbnB1dHNbaV0uYXR0cmlidXRlc1snZGF0YS1naWd5YS1uYW1lJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrRW1wdHlGaWVsZHMucHVzaChuYW1lLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoZWNrRW1wdHlGaWVsZHMgPSB2YWx1ZS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoZWNrRW1wdHlGaWVsZHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5QXR0cmlidXRlKGNvbnRhaW5lci5fZWwsICcqJywgJ25hbWUnLCBjaGVja0VtcHR5RmllbGRzW2ldKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbGVtZW50cyAmJiBlbGVtZW50cy5sZW5ndGggPiAwICYmICFlbGVtZW50c1swXS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb246IHtcclxuICAgICAgICAgICAgICAgICAgICAnZGF0YS1jb25kaXRpb24nOiBmdW5jdGlvbiAodmFsdWUsIGNvbnRhaW5lcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWVyZ2VkRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLl9zY3JlZW5TZXQuX2FwaURhdGEuZ2V0QWNjb3VudEluZm8pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlZERhdGEgPSBnaWd5YS51dGlscy5vYmplY3QuZXh0cmFjdFByb3BlcnRpZXMoY29udGFpbmVyLl9zY3JlZW5TZXQuX2FwaURhdGEuZ2V0QWNjb3VudEluZm8sIHt9LCAncHJvZmlsZXxkYXRhJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFtZXJnZWREYXRhLnByb2ZpbGUpIG1lcmdlZERhdGEucHJvZmlsZSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1lcmdlZERhdGEuZGF0YSkgbWVyZ2VkRGF0YS5kYXRhID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFpbmVyLl9mb3JtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybURhdGEgPSBjb250YWluZXIuX2Zvcm0uZ2V0RmxhdEZvcm1EYXRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gTWVyZ2luZyB0aGUgZm9ybSBkYXRhIGludG8gdGhlIGFjY291bnQgZGF0YS4gQmVjYXVzZSB0aGUgZm9ybSBkYXRhIGNvbWVzIFwiZmxhdFwiIChrZXkgY2FuIGJlIFwicHJvZmlsZS5maXJzdE5hbWVcIilcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHdlIGhhdmUgdG8gcGFyc2UgaXQgYW5kIGdvIGRlZXAgaW50byB0aGUgbWVyZ2VkRGF0YSBvYmplY3RcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHBhdGggaW4gZm9ybURhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgY3Vyck9iaiA9IG1lcmdlZERhdGE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdGhQYXJ0cyA9IHBhdGguc3BsaXQoJy4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2hpbGUgKHBhdGhQYXJ0cy5sZW5ndGggPiAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjdXJyS2V5ID0gcGF0aFBhcnRzLnNwbGljZSgwLCAxKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBjdXJyT2JqW2N1cnJLZXldID09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyck9ialtjdXJyS2V5XSA9IHt9O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3Vyck9iaiA9IGN1cnJPYmpbY3VycktleV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyT2JqW3BhdGhQYXJ0c1swXV0gPSBmb3JtRGF0YVtwYXRoXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZuVGVzdCA9IG5ldyBGdW5jdGlvbigndmFsdWUnLCAnZGF0YScsICdwcm9maWxlJywgJ3JldHVybiBldmFsKHZhbHVlKTsnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuVGVzdCh2YWx1ZSwgbWVyZ2VkRGF0YS5kYXRhLCBtZXJnZWREYXRhLnByb2ZpbGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVzdENvbnRhaW5lcjogZnVuY3Rpb24gKGNvbnRhaW5lciwgY29uZGl0aW9uU2V0KSB7XHJcbiAgICAgICAgICAgICAgICAvLyBUZXN0aW5nIGlmIHRoZXJlJ3MgYW4gZW1wdHkgcmVxdWlyZWQgZmllbGQgaW4gdGhlIGNvbnRhaW5lciAoc3Ryb25nZXIgdGhhbiBhbGwgdGVzdHMpXHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyRWxlbWVudHMgPSBjb250YWluZXIuX2VsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJyk7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbnRhaW5lckVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGNvbnRhaW5lckVsZW1lbnRzW2ldLmF0dHJpYnV0ZXNbJ2RhdGEtZ2lneWEtbmFtZSddO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZE5hbWUgJiYgZmllbGROYW1lLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBpc1JlcXVpcmVkID0gY29udGFpbmVyLl9zY3JlZW5TZXQuaXNSZXF1aXJlZEZpZWxkKGZpZWxkTmFtZS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc1JlcXVpcmVkICYmICFjb250YWluZXJFbGVtZW50c1tpXS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gUnVubmluZyByZWxldmFudCB0ZXN0cyBvbiBjb250YWluZXJcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGFpbmVyLl9lbC5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZSA9IGNvbnRhaW5lci5fZWwuYXR0cmlidXRlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm5UZXN0ZXIgPSBjb25kaXRpb25TZXRbYXR0cmlidXRlLm5hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZm5UZXN0ZXIgJiYgYXR0cmlidXRlLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZm5UZXN0ZXIoYXR0cmlidXRlLnZhbHVlLCBjb250YWluZXIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldEhpc3RvcnlOZWVkZWRDb250YWluZXJzOiBmdW5jdGlvbiAoZm9ybSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFmb3JtKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gW107XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhaW5lcnMgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKGZvcm0sICdnaWd5YS1jb250YWluZXInKTtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29udGFpbmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSBjb250YWluZXJzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBuYW1lID0gY29udGFpbmVyLmdldEF0dHJpYnV0ZSgnbmFtZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWluZXIgJiYgbmFtZSAmJiAoY29udGFpbmVyLmF0dHJpYnV0ZXNbJ2RhdGEtZGlzcGxheS1jYXAnXSB8fCBjb250YWluZXIuYXR0cmlidXRlc1snZGF0YS1kaXNwbGF5LWZyZXEnXSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGdldEhpc3RvcnlGcm9tU2V0dGluZ3M6IGZ1bmN0aW9uIChjb250YWluZXIpIHtcclxuICAgICAgICAgICAgICAgIGlmICghY29udGFpbmVyLl9zY3JlZW5TZXQuX2FwaURhdGEuZ2V0VXNlclNldHRpbmdzIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLl9zY3JlZW5TZXQuX2FwaURhdGEuZ2V0VXNlclNldHRpbmdzLmVycm9yQ29kZSA+IDApIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVySGlzdG9yaWVzID0gY29udGFpbmVyLl9zY3JlZW5TZXQuX2FwaURhdGEuZ2V0VXNlclNldHRpbmdzLnNldHRpbmdzO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb250YWluZXJIaXN0b3JpZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyTmFtZSA9IGNvbnRhaW5lci5fZWwuYXR0cmlidXRlc1snbmFtZSddLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb250YWluZXJOYW1lKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGhpc3RvcnkgPSB7fTtcclxuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXJIaXN0b3JpZXNbY29udGFpbmVyTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBoaXN0b3J5ID0gY29udGFpbmVySGlzdG9yaWVzW2NvbnRhaW5lck5hbWVdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaGlzdG9yeS5kaXNwbGF5Q291bnQpXHJcbiAgICAgICAgICAgICAgICAgICAgaGlzdG9yeS5kaXNwbGF5Q291bnQgPSAwO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoaXN0b3J5Lmxhc3REaXNwbGF5KVxyXG4gICAgICAgICAgICAgICAgICAgIGhpc3RvcnkubGFzdERpc3BsYXkgPSAtMTtcclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaGlzdG9yeTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2F2ZUhpc3RvcnlJblNldHRpbmdzOiBmdW5jdGlvbiAoY29udGFpbmVySGlzdG9yeSwgY29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNvbnRhaW5lci5fc2NyZWVuU2V0Ll9hcGlEYXRhLmdldFVzZXJTZXR0aW5ncyB8fFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5fc2NyZWVuU2V0Ll9hcGlEYXRhLmdldFVzZXJTZXR0aW5ncy5lcnJvckNvZGUgPiAwKSByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVySGlzdG9yaWVzID0gY29udGFpbmVyLl9zY3JlZW5TZXQuX2FwaURhdGEuZ2V0VXNlclNldHRpbmdzLnNldHRpbmdzO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjb250YWluZXJIaXN0b3JpZXMpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVyTmFtZSA9IGNvbnRhaW5lci5fZWwuYXR0cmlidXRlc1snbmFtZSddLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVySGlzdG9yaWVzW2NvbnRhaW5lck5hbWVdID0gY29udGFpbmVySGlzdG9yeTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgc2V0dGluZ3MgPSB7fTtcclxuICAgICAgICAgICAgICAgIHNldHRpbmdzW2NvbnRhaW5lck5hbWVdID0ge307XHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5vYmplY3QuZXh0cmFjdFByb3BlcnRpZXMoY29udGFpbmVySGlzdG9yeSwgc2V0dGluZ3NbY29udGFpbmVyTmFtZV0sICdkaXNwbGF5Q291bnR8bGFzdERpc3BsYXknKTtcclxuXHJcbiAgICAgICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUuc2V0VXNlclNldHRpbmdzKHtcclxuICAgICAgICAgICAgICAgICAgICBncm91cDogJ2dpZ3lhX2NvbnRhaW5lcl9oaXN0b3J5LScgKyBjb250YWluZXIuX3NjcmVlblNldC5fSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVnVG9rZW46IChjb250YWluZXIuX3NjcmVlblNldC5fbGFzdFN1Ym1pdHRlZEZvcm1SZXNwb25zZSA/IGNvbnRhaW5lci5fc2NyZWVuU2V0Ll9sYXN0U3VibWl0dGVkRm9ybVJlc3BvbnNlLnJlZ1Rva2VuIDogbnVsbCksXHJcbiAgICAgICAgICAgICAgICAgICAgc2V0dGluZ3M6IHNldHRpbmdzLFxyXG4gICAgICAgICAgICAgICAgICAgIGRpc2FibGVMb2NhbFNldHRpbmdzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGVycm9yQ29kZXM6IHtcclxuICAgICAgICAgICAgJ01JU1NJTkdfUkVRVUlSRUQnOiA0MDAwMjcsXHJcbiAgICAgICAgICAgIC8vJ0lOVkFMSURfVkFMVUUnOiA0MDAwMDYsXHJcbiAgICAgICAgICAgICdWQUxJREFUSU9OX0VSUk9SJzogNDAwMDA5LFxyXG4gICAgICAgICAgICAnVU5JUVVFX0lERU5USUZJRVJfRVhJU1RTJzogNDAwMDAzXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhbHdheXNSZXF1aXJlZEZpZWxkczoge1xyXG4gICAgICAgICAgICBzZWNyZXRBbnN3ZXI6IDEsXHJcbiAgICAgICAgICAgIHNlY3JldFF1ZXN0aW9uOiAxLFxyXG4gICAgICAgICAgICBsb2dpbklEOiAxLFxyXG4gICAgICAgICAgICB1c2VybmFtZTogMSxcclxuICAgICAgICAgICAgcGFzc3dvcmQ6IDEsXHJcbiAgICAgICAgICAgIG9sZFBhc3N3b3JkOiAxLFxyXG4gICAgICAgICAgICBuZXdQYXNzd29yZDogMVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgX29yaWdpbmFsRWxlbWVudHM6IHt9LFxyXG4gICAgICAgIEdpZ3lhUGFyYW06IGZ1bmN0aW9uIChuYW1lLCBhdXRvRmlsbE5hbWUsIHBhcmFtTmFtZSkge1xyXG4gICAgICAgICAgICBpZiAoYXV0b0ZpbGxOYW1lID09IG51bGwpIGF1dG9GaWxsTmFtZSA9IG5hbWUucmVwbGFjZSgnXycsICcnKTtcclxuICAgICAgICAgICAgaWYgKHBhcmFtTmFtZSA9PSBudWxsKSBwYXJhbU5hbWUgPSBhdXRvRmlsbE5hbWU7XHJcbiAgICAgICAgICAgIHJldHVybiB7IG5hbWU6IG5hbWUsIGF1dG9GaWxsTmFtZTogYXV0b0ZpbGxOYW1lLCBwYXJhbU5hbWU6IHBhcmFtTmFtZSB9O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb0ZpZWxkTmFtZURhdGE6IHt9LFxyXG4gICAgICAgIGdldFBhc3N3b3JkU3RyZW5ndGhEYXRhOiBmdW5jdGlvbiAocGFzcykge1xyXG4gICAgICAgICAgICBpZiAoIXBhc3MpIHBhc3MgPSAnJztcclxuICAgICAgICAgICAgdmFyIG9SZXN1bHQgPSB7XHJcbiAgICAgICAgICAgICAgICBsb3dlcjogcGFzcy5tYXRjaCgvW2Etel0vZyksXHJcbiAgICAgICAgICAgICAgICB1cHBlcjogcGFzcy5tYXRjaCgvW0EtWl0vZyksXHJcbiAgICAgICAgICAgICAgICBkaWdpdHM6IHBhc3MubWF0Y2goL1xcZC9nKSxcclxuICAgICAgICAgICAgICAgIHNwZWNpYWxDaGFyczogcGFzcy5tYXRjaCgvW15cXGRBLVphLXpdL2cpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBvUmVzdWx0KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAob1Jlc3VsdFtwXSAmJiBvUmVzdWx0W3BdLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9SZXN1bHRbcF0gPSBvUmVzdWx0W3BdLmxlbmd0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICghb1Jlc3VsdFtwXSkgb1Jlc3VsdFtwXSA9IDA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb1Jlc3VsdC5sZW5ndGggPSBwYXNzLmxlbmd0aDtcclxuICAgICAgICAgICAgb1Jlc3VsdC5jaGFyR3JvdXBzID0gKChvUmVzdWx0Lmxvd2VyID4gMCkgKyAob1Jlc3VsdC51cHBlciA+IDApICsgKG9SZXN1bHQuZGlnaXRzID4gMCkgKyAob1Jlc3VsdC5zcGVjaWFsQ2hhcnMgPiAwKSk7XHJcbiAgICAgICAgICAgIHJldHVybiBvUmVzdWx0O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaXNQYXNzd29yZFN0cmVuZ3RoVmFsaWQ6IGZ1bmN0aW9uIChwYXNzLCBvUGFzc1N0cmVuZ3RoLCBvQ29tcGxleGl0eVBvbGljeSkge1xyXG4gICAgICAgICAgICBpZiAoIXBhc3MgfHwgIW9QYXNzU3RyZW5ndGggfHwgIW9Db21wbGV4aXR5UG9saWN5KSByZXR1cm47XHJcbiAgICAgICAgICAgIGlmIChvQ29tcGxleGl0eVBvbGljeS5yZWdleCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIHJlZ2V4Rm9ybWF0ID0gbmV3IFJlZ0V4cChvQ29tcGxleGl0eVBvbGljeS5yZWdleCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVnZXhGb3JtYXQudGVzdChwYXNzKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiAhKG9QYXNzU3RyZW5ndGgubG93ZXIgPCBvQ29tcGxleGl0eVBvbGljeS5taW5Mb3dlcmNhc2UgfHwgb1Bhc3NTdHJlbmd0aC51cHBlciA8IG9Db21wbGV4aXR5UG9saWN5Lm1pblVwcGVyY2FzZSB8fFxyXG5cdFx0XHRcdFx0XHRcdG9QYXNzU3RyZW5ndGguZGlnaXRzIDwgb0NvbXBsZXhpdHlQb2xpY3kubWluRGlnaXQgfHwgb1Bhc3NTdHJlbmd0aC5zcGVjaWFsQ2hhcnMgPCBvQ29tcGxleGl0eVBvbGljeS5taW5TcGVjaWFsQ2hhcnMgfHxcclxuXHRcdFx0XHRcdFx0XHRvUGFzc1N0cmVuZ3RoLmNoYXJHcm91cHMgPCBvQ29tcGxleGl0eVBvbGljeS5taW5DaGFyR3JvdXBzIHx8IG9QYXNzU3RyZW5ndGgubGVuZ3RoIDwgb0NvbXBsZXhpdHlQb2xpY3kubWluTGVuZ3RoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXR0YWNoRmlsZVVwbG9hZDogZnVuY3Rpb24gKGVsLCBmb3JtVGFyZ2V0LCBmb3JtQWN0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBkaXZVcGxvYWRGb3JtID0gZWwuZGl2VXBsb2FkRm9ybTtcclxuICAgICAgICAgICAgaWYgKCFkaXZVcGxvYWRGb3JtKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGl2VXBsb2FkRm9ybSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZWwuaWQgPSBmb3JtVGFyZ2V0ICsgJ19fJyArIChuZXcgRGF0ZSgpKS5nZXRUaW1lKCk7XHJcbiAgICAgICAgICAgICAgICBkaXZVcGxvYWRGb3JtLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgICAgIGRpdlVwbG9hZEZvcm0uc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcclxuICAgICAgICAgICAgICAgIGRpdlVwbG9hZEZvcm0uc3R5bGUuZm9udFNpemUgPSAnNTBweCc7XHJcbiAgICAgICAgICAgICAgICBkaXZVcGxvYWRGb3JtLnN0eWxlLmN1cnNvciA9ICdwb2ludGVyJztcclxuICAgICAgICAgICAgICAgIGRpdlVwbG9hZEZvcm0uc3R5bGUub3BhY2l0eSA9ICcwJztcclxuICAgICAgICAgICAgICAgIGRpdlVwbG9hZEZvcm0uc3R5bGUuZmlsdGVyID0gJ2FscGhhKG9wYWNpdHk9MCknO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBkaXZVcGxvYWRGb3JtLnN0eWxlLnpJbmRleCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXROZXh0WkluZGV4KCk7XHJcbiAgICAgICAgICAgIHZhciBwb3MgPSBnaWd5YS5nbG9iYWwuZ2V0UG9zKGVsKTtcclxuICAgICAgICAgICAgdmFyIGZuUG9zaXRpb25VcGxvYWRGb3JtID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgZGl2VXBsb2FkRm9ybS5zdHlsZS5sZWZ0ID0gcG9zLng7XHJcbiAgICAgICAgICAgICAgICBkaXZVcGxvYWRGb3JtLnN0eWxlLnRvcCA9IHBvcy55O1xyXG4gICAgICAgICAgICAgICAgZGl2VXBsb2FkRm9ybS5zdHlsZS5oZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgZGl2VXBsb2FkRm9ybS5zdHlsZS53aWR0aCA9IGVsLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHBvc2l0aW9uSW50ZXJ2YWwgPSB3aW5kb3cuc2V0SW50ZXJ2YWwoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKCFlbCB8fCAhZWwucGFyZW50Tm9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNsZWFySW50ZXJ2YWwocG9zaXRpb25JbnRlcnZhbCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGVsLm9mZnNldEhlaWdodCAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm5Qb3NpdGlvblVwbG9hZEZvcm0oKTtcclxuICAgICAgICAgICAgICAgICAgICBjbGVhckludGVydmFsKHBvc2l0aW9uSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCA1MDApO1xyXG5cclxuICAgICAgICAgICAgZGl2VXBsb2FkRm9ybS5pbm5lckhUTUwgPSAnPGZvcm0gZW5jdHlwZT1cIm11bHRpcGFydC9mb3JtLWRhdGFcIiBtZXRob2Q9XCJwb3N0XCIgY2xhc3M9XCJnaWd5YS1waG90by11cGxvYWQtZm9ybVwiIHRhcmdldD1cIicgKyBmb3JtVGFyZ2V0ICsgJ1wiIGFjdGlvbj1cIicgKyBmb3JtQWN0aW9uICsgJ1wiPjxpbnB1dCB0eXBlPVwiZmlsZVwiIGFjY2VwdD1cImltYWdlLypcIiBuYW1lPVwiX3Byb2ZpbGVQaG90b1wiIHN0eWxlPVwiZm9udC1zaXplOjUwMHB4O2RpcmVjdGlvbjpydGw7aGVpZ2h0OjEwMCU7Y3Vyc29yOnBvaW50ZXI7JyArIChnaWd5YS5sb2NhbEluZm8uaXNJRSA/ICd3aWR0aDoxMDAwcHgnIDogJycpICsgJ1wiIC8+PC9mb3JtPic7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWVsLmRpdlVwbG9hZEZvcm0pIGdpZ3lhLnV0aWxzLkRPTS5hcHBlbmRUb0JvZHkoZGl2VXBsb2FkRm9ybSk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZnJtVXBsb2FkID0gZGl2VXBsb2FkRm9ybS5maXJzdENoaWxkO1xyXG4gICAgICAgICAgICB2YXIgZmlsZUlucHV0ID0gZnJtVXBsb2FkLmVsZW1lbnRzWydfcHJvZmlsZVBob3RvJ107XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGZpbGVJbnB1dCwgJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbFBhdGggPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChmb3JtVGFyZ2V0ICsgJ19wYXRoJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxQYXRoKSBlbFBhdGguaW5uZXJIVE1MID0gZmlsZUlucHV0LnZhbHVlLnNwbGl0KCdcXFxcJykucG9wKCk7XHJcbiAgICAgICAgICAgICAgICBmaWxlSW5wdXQuZm9ybS51cGxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybVRhcmdldCkuc2V0QXR0cmlidXRlKCd1cGxvYWRpbmcnLCAnMScpO1xyXG4gICAgICAgICAgICAgICAgZmlsZUlucHV0LmZvcm0uc3VibWl0KCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBlbC5kaXZVcGxvYWRGb3JtID0gZGl2VXBsb2FkRm9ybTtcclxuXHJcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgZWwuX2ZpbGVVcGxvYWRJbnRlcnZhbCA9IHdpbmRvdy5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7IFRoaXMub25GaWxlVXBsb2FkSW50ZXJ2YWwoZWwsIGRpdlVwbG9hZEZvcm0pIH0sIDUwMCk7XHJcbiAgICAgICAgICAgIHJldHVybiBkaXZVcGxvYWRGb3JtLmZpcnN0Q2hpbGQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja1NjaGVtYTogZnVuY3Rpb24gKHNjaGVtYSwgb0ZpZWxkcykge1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uRmlsZVVwbG9hZEludGVydmFsOiBmdW5jdGlvbiAoZWwsIGRpdlVwbG9hZEZvcm0pIHtcclxuICAgICAgICAgICAgaWYgKCFkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5pZCkpIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGl2VXBsb2FkRm9ybS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGRpdlVwbG9hZEZvcm0pO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXgpIHsgfTtcclxuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKGVsLl9maWxlVXBsb2FkSW50ZXJ2YWwpO1xyXG4gICAgICAgICAgICAgICAgZWwuX2ZpbGVVcGxvYWRJbnRlcnZhbCA9IG51bGw7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcG9zID0gZ2lneWEuZ2xvYmFsLmdldFBvcyhlbCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocGFyc2VJbnQoZGl2VXBsb2FkRm9ybS5zdHlsZS5sZWZ0KSAhPSBwb3MueCkgZGl2VXBsb2FkRm9ybS5zdHlsZS5sZWZ0ID0gcG9zLnggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgaWYgKHBhcnNlSW50KGRpdlVwbG9hZEZvcm0uc3R5bGUudG9wKSAhPSBwb3MueSkgZGl2VXBsb2FkRm9ybS5zdHlsZS50b3AgPSBwb3MueSArICdweCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpbUNvbnRhaW5lcjogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIGlmIChlbC5lbERpbSkgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgZWxEaW0gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZWxEaW0uc3R5bGUud2lkdGggPSBlbC5vZmZzZXRXaWR0aCArICdweCc7XHJcbiAgICAgICAgICAgIGVsRGltLnN0eWxlLmhlaWdodCA9IGVsLm9mZnNldEhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgIGVsRGltLmNsYXNzTmFtZSA9ICdnaWd5YS1zY3JlZW4tZGltbWVyJztcclxuICAgICAgICAgICAgdmFyIHBvcyA9IGdpZ3lhLmdsb2JhbC5nZXRQb3MoZWwpO1xyXG4gICAgICAgICAgICBlbERpbS5zdHlsZS50b3AgPSBwb3MueSArICdweCc7XHJcbiAgICAgICAgICAgIGVsRGltLnN0eWxlLmxlZnQgPSBwb3MueCArICdweCc7XHJcbiAgICAgICAgICAgIGVsRGltLnN0eWxlLnpJbmRleCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXROZXh0WkluZGV4KCk7XHJcbiAgICAgICAgICAgIGVsLmVsRGltID0gZWxEaW07XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hcHBlbmRUb0JvZHkoZWxEaW0pO1xyXG5cclxuICAgICAgICAgICAgdmFyIGVsUHJvZ3Jlc3MgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgICAgICAgICAgZWxQcm9ncmVzcy5zdHlsZS53aWR0aCA9IGVsLm9mZnNldFdpZHRoICsgJ3B4JztcclxuICAgICAgICAgICAgZWxQcm9ncmVzcy5zdHlsZS5oZWlnaHQgPSBlbC5vZmZzZXRIZWlnaHQgKyAncHgnO1xyXG4gICAgICAgICAgICBlbFByb2dyZXNzLmNsYXNzTmFtZSA9ICdnaWd5YS1zY3JlZW4tbG9hZGVyJztcclxuICAgICAgICAgICAgZWxQcm9ncmVzcy5zdHlsZS50b3AgPSBwb3MueSArICdweCc7XHJcbiAgICAgICAgICAgIGVsUHJvZ3Jlc3Muc3R5bGUubGVmdCA9IHBvcy54ICsgJ3B4JztcclxuICAgICAgICAgICAgZWxQcm9ncmVzcy5zdHlsZS56SW5kZXggPSBnaWd5YS51dGlscy5ET00uZ2V0TmV4dFpJbmRleCgpO1xyXG4gICAgICAgICAgICBlbC5lbFByb2dyZXNzID0gZWxQcm9ncmVzcztcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFwcGVuZFRvQm9keShlbFByb2dyZXNzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVuZGltQ29udGFpbmVyOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwuZWxEaW0pIHtcclxuICAgICAgICAgICAgICAgICAgICBlbC5lbERpbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsLmVsRGltKTtcclxuICAgICAgICAgICAgICAgICAgICBlbC5lbERpbSA9IG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwuZWxQcm9ncmVzcykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLmVsUHJvZ3Jlc3MucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbC5lbFByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgICAgICBlbC5lbFByb2dyZXNzID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0Rmlyc3RHaWd5YUNsYXNzOiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgaWYgKCFlbCkgcmV0dXJuO1xyXG4gICAgICAgICAgICB2YXIgYXJDbGFzc2VzID0gZWwuY2xhc3NOYW1lLnNwbGl0KCcgJyk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJDbGFzc2VzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJDbGFzc2VzW2ldICYmIGFyQ2xhc3Nlc1tpXS5pbmRleE9mKCdnaWd5YS0nKSA9PSAwKSByZXR1cm4gYXJDbGFzc2VzW2ldO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBpbnN0YW5jZXNfc2l6ZTogMCxcclxuICAgICAgICBzY3JlZW5TZXQ6IGZ1bmN0aW9uIChwKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3AgPSBwO1xyXG4gICAgICAgICAgICB0aGlzLl9lbGlkID0gcC5jb250YWluZXJJRFxyXG4gICAgICAgICAgICB0aGlzLmxhbmcgPSB0aGlzLl9wLmxhbmc7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb3JtOiBmdW5jdGlvbiAoc2NyZWVuU2V0LCBlbEZvcm0pIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NyZWVuU2V0ID0gc2NyZWVuU2V0O1xyXG4gICAgICAgICAgICB0aGlzLl9lbEZvcm0gPSBlbEZvcm07XHJcbiAgICAgICAgICAgIHRoaXMuX2dpZ3lhQ2xhc3NOYW1lID0gcHJpdmF0ZVNjb3BlLmdldEZpcnN0R2lneWFDbGFzcyh0aGlzLl9lbEZvcm0pO1xyXG4gICAgICAgICAgICB0aGlzLl9JRCA9IGVsRm9ybS5pZCB8fCBwcml2YXRlU2NvcGUuZ2V0Rmlyc3RHaWd5YUNsYXNzKGVsRm9ybSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjcmVlblNldC5fZm9ybXNJbnN0YW5jZXNbdGhpcy5fSURdID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5fZWxGb3JtLnNldEF0dHJpYnV0ZSgnZGF0YS1naWd5YS1pZCcsIHRoaXMuX0lEKTtcclxuICAgICAgICAgICAgdGhpcy5fYWN0aW9ucyA9IHByaXZhdGVTY29wZS5vRm9ybXNBY3Rpb25zW3RoaXMuX2dpZ3lhQ2xhc3NOYW1lXSB8fCB7fTtcclxuICAgICAgICAgICAgdGhpcy5faGFzUGFzc3dvcmRGaWVsZCA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5QXR0cmlidXRlKHRoaXMuX2VsRm9ybSwgJyonLCAnbmFtZScsICdwYXNzd29yZCcpLmxlbmd0aCA+IDA7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9hY3Rpb25zLnJlc2V0RmluYWxpemVOZWVkZWRTdGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2NyZWVuU2V0LmZpbmFsaXplUmVnaXN0cmF0aW9uID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHdpZGdldDogZnVuY3Rpb24gKHNjcmVlblNldCwgZWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fZWwgPSBlbDtcclxuICAgICAgICAgICAgdGhpcy5fc2NyZWVuU2V0ID0gc2NyZWVuU2V0O1xyXG4gICAgICAgICAgICB0aGlzLl9lbEZvcm0gPSB0aGlzLl9zY3JlZW5TZXQuZ2V0RWxlbWVudEZvcm0odGhpcy5fZWwpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VsLmNsYXNzTmFtZSA9PSAnZ2lneWEtY29udGFpbmVyJylcclxuICAgICAgICAgICAgICAgIHRoaXMuX3NjcmVlblNldC5fY29udGFpbmVySW5zdGFuY2VzLnB1c2godGhpcyk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZWxGb3JtKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZm9ybSA9IHRoaXMuX3NjcmVlblNldC5fZm9ybXNJbnN0YW5jZXNbdGhpcy5fZWxGb3JtLmNsYXNzTmFtZV07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVJbnN0YW5jZTogZnVuY3Rpb24gKHApIHtcclxuICAgICAgICAgICAgdmFyIGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocC5jb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgIGVsLmlubmVySFRNTCA9ICcnO1xyXG5cclxuICAgICAgICAgICAgdmFyIGluc3RhbmNlID0gbmV3IHByaXZhdGVTY29wZS5zY3JlZW5TZXQocCk7XHJcbiAgICAgICAgICAgIHZhciBjb250YWluZXJJRCA9IHAuaXNQb3B1cCA/ICcnIDogcFsnY29udGFpbmVySUQnXTtcclxuICAgICAgICAgICAgcHVibGljU2NvcGUuaW5zdGFuY2VzW3BbJ3NjcmVlblNldCddICsgJ18nICsgY29udGFpbmVySURdID0gaW5zdGFuY2U7XHJcbiAgICAgICAgICAgIHByaXZhdGVTY29wZS5pbnN0YW5jZXNfc2l6ZSsrO1xyXG4gICAgICAgICAgICBpbnN0YW5jZS5pbml0KCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjcmVhdGVEZWZhdWx0VGVtcGxhdGVzOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciB0ZW1wbGF0ZXMgPSB7XHJcbiAgICAgICAgICAgICAgICBfbWFwOiB7fSxcclxuICAgICAgICAgICAgICAgIGdldDogZnVuY3Rpb24gKGtleSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXBba2V5XTtcclxuICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgc2V0OiBmdW5jdGlvbiAoa2V5LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX21hcFtrZXldID0gKHZhbHVlIGluc3RhbmNlb2YgQXJyYXkpID8gdmFsdWUuam9pbihcIlwiKSA6IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRlbXBsYXRlcy5zZXQoXCJwYXNzd29yZFN0cmVuZ3RoLXN0cmVuZ3RoTWV0ZXJcIixcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC10ZXh0XCI+PHNwYW4gY2xhc3M9XCJnaWd5YS1wYXNzd29yZFN0cmVuZ3RoLXRleHRcIj4kVEVYVChcXCdwYXNzd29yZF9zdHJlbmd0aF9jb2xvblxcJyk8L3NwYW4+PHNwYW4gY2xhc3M9XCJnaWd5YS1wYXNzd29yZFN0cmVuZ3RoLXRleHQgZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC1zY29yZVRleHRcIj4ke3Njb3JlVGV4dH08L3NwYW4+PC9kaXY+JyxcclxuXHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtYmFyXCI+PGRpdiBjbGFzcz1cIiR7YmFySW5kaWNhdG9yQ2xhc3N9XCI+PC9kaXY+PC9kaXY+J1xyXG5cdFx0XHRdKTtcclxuICAgICAgICAgICAgdGVtcGxhdGVzLnNldChcInBhc3N3b3JkU3RyZW5ndGgtbWluaW11bVJlcXVpcmVtZW50c1wiLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWd5YS1wYXNzd29yZFN0cmVuZ3RoLXRleHQtcmVxdWlyZW1lbnRzXCI+JHJlcXVpcmVtZW50czwvZGl2PidcclxuXHRcdFx0XSk7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlcy5zZXQoXCJjYXB0Y2hhXCIsXHJcblx0XHRcdFtcclxuXHRcdFx0XHQnPGRpdiBpZD1cIiR7cmVjYXB0Y2hhQ29udGFpbmVySUR9XCI+PC9kaXY+J1xyXG5cdFx0XHRdKTtcclxuICAgICAgICAgICAgdGVtcGxhdGVzLnNldChcInNjcmVlblNldC1kaWFsb2dcIixcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lneWEtc2NyZWVuLWRpYWxvZy1pbm5lclwiPicsXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZ3lhLXNjcmVlbi1kaWFsb2ctdG9wXCI+JyxcclxuXHRcdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWd5YS1zY3JlZW4tZGlhbG9nLWNhcHRpb25cIiBpZD1cIiR7aW5uZXJDb250YWluZXJJRH1fY2FwdGlvblwiPjwvZGl2PicsXHJcblx0XHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lneWEtc2NyZWVuLWRpYWxvZy1jbG9zZVwiIGlkPVwiJHtpbm5lckNvbnRhaW5lcklEfV9jbG9zZVwiPjwvZGl2PicsXHJcblx0XHRcdFx0XHQnPC9kaXY+JyxcclxuXHRcdFx0XHRcdCc8ZGl2IGlkPVwiJHtpbm5lckNvbnRhaW5lcklEfVwiPjwvZGl2PicsXHJcblx0XHRcdFx0JzwvZGl2PidcclxuXHRcdFx0XSk7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlcy5zZXQoXCJzY3JlZW5TZXRcIixcclxuXHRcdFx0W1xyXG5cdFx0XHRcdCc8aDEgY2xhc3M9XCJnaWd5YS1zY3JlZW4tY2FwdGlvblwiIGlkPVwiJHtpbm5lckNvbnRhaW5lcklEfV9jYXB0aW9uXCI+PC9oMT4nLFxyXG5cdFx0XHRcdCc8ZGl2IGlkPVwiJHtpbm5lckNvbnRhaW5lcklEfVwiPjwvZGl2PidcclxuXHRcdFx0XSk7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlcy5zZXQoXCJwaG90b1VwbG9hZFwiLFxyXG5cdFx0XHRbXHJcblx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWd5YS1waG90by11cGxvYWQtaW1hZ2VcIiBpZD1cIiR7cGhvdG9FbGVtZW50SUR9XCI+PC9kaXY+JyxcclxuXHRcdFx0XHQnPGRpdj4nLFxyXG5cdFx0XHRcdFx0JzxkaXYgY2xhc3M9XCJnaWd5YS1waG90by11cGxvYWQtYnV0dG9uXCI+JGNob29zZV9maWxlPC9kaXY+JyxcclxuXHRcdFx0XHRcdCc8ZGl2IGNsYXNzPVwiZ2lneWEtcGhvdG8tdXBsb2FkLXBhdGhcIiBpZD1cIiR7cGF0aENvbnRhaW5lcklEfVwiPiRub19maWxlX2Nob3NlbjwvZGl2PicsXHJcblx0XHRcdFx0XHQnPGRpdiBjbGFzcz1cImdpZ3lhLXBob3RvLXVwbG9hZC10ZXh0XCI+JHRpcDwvZGl2PicsXHJcblx0XHRcdFx0JzwvZGl2PidcclxuXHRcdFx0XSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZW1wbGF0ZXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBkZWZhdWx0Q3NzOiBbXHJcblx0XHRcdCcuZ2lneWEtcmVzZXQgKiwgZGl2LmdpZ3lhLXJlc2V0LCAuZ2lneWEtcmVzZXQgc3BhbiwgLmdpZ3lhLXJlc2V0IGE6aG92ZXIsIC5naWd5YS1yZXNldCBhOnZpc2l0ZWQsIC5naWd5YS1yZXNldCBhOmxpbmssIC5naWd5YS1yZXNldCBhOmFjdGl2ZXsnLFxyXG5cdFx0XHRcdCdib3JkZXI6bm9uZTsgcGFkZGluZzowcHg7bWFyZ2luOjBweDtjb2xvcjppbmhlcml0O3RleHQtZGVjb3JhdGlvbjpub25lO3dpZHRoOmF1dG87ZmxvYXQ6bm9uZTstbW96LWJvcmRlci1yYWRpdXM6MDtib3JkZXItcmFkaXVzOjA7JyxcclxuXHRcdFx0XHQnZm9udC1mYW1pbHk6YXJpYWw7Zm9udC1zaXplOjEycHg7Y29sb3I6IzMzMzMzMztiYWNrZ3JvdW5kOm5vbmU7dGV4dC1hbGlnbjpsZWZ0O30nLFxyXG5cclxuXHRcdFx0Jy5naWd5YS1zY3JlZW4gLmdpZ3lhLWVycm9yLW1zZyB7Y29sb3I6I0RENEIzOTsgZm9udC1zaXplOjExcHg7fScsXHJcblx0XHRcdCcuZ2lneWEtc2NyZWVuIGlucHV0LmdpZ3lhLWVycm9yLCAuZ2lneWEtc2NyZWVuIGlucHV0LmdpZ3lhLWVycm9yIHtib3JkZXItY29sb3I6I0RENEIzOX0nLFxyXG5cclxuXHRcdFx0J2Rpdi5naWd5YS1wYXNzd29yZC1zdHJlbmd0aCB7fScsXHJcblx0XHRcdCdzcGFuLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtdGV4dCB7Zm9udC13ZWlnaHQ6Ym9sZDt9JyxcclxuXHRcdFx0J2Rpdi5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLXRleHQtcmVxdWlyZW1lbnRzIHt3aWR0aDogMTAwJTttYXJnaW4tdG9wOiA4cHh9JyxcclxuXHJcblx0XHRcdCdzcGFuLmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtc2NvcmVUZXh0IHtmb250LXdlaWdodDpub3JtYWw7bWFyZ2luLWxlZnQ6M3B4O30nLFxyXG5cdFx0XHQnZGl2LmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtYmFyIHt3aWR0aDogOTAlOyBoZWlnaHQ6IDVweDsgYmFja2dyb3VuZC1jb2xvcjojRjNGM0YzO21hcmdpbi10b3A6IDhweH0nLFxyXG5cdFx0XHQnZGl2LmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtYmFyLXRvb193ZWFrIHt3aWR0aDogNSU7IGhlaWdodDogNXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiNERTMyMUQ7fScsXHJcblx0XHRcdCdkaXYuZ2lneWEtcGFzc3dvcmRTdHJlbmd0aC1iYXItd2VhayB7d2lkdGg6IDI1JTsgaGVpZ2h0OiA1cHg7IGJhY2tncm91bmQtY29sb3I6I0RFMzIxRDt9JyxcclxuXHRcdFx0J2Rpdi5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLWJhci1mYWlyIHt3aWR0aDogNTAlOyBoZWlnaHQ6IDVweDsgYmFja2dyb3VuZC1jb2xvcjojNDk5NUUwO30nLFxyXG5cdFx0XHQnZGl2LmdpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtYmFyLXN0cm9uZyB7d2lkdGg6IDc1JTsgaGVpZ2h0OiA1cHg7IGJhY2tncm91bmQtY29sb3I6Izc2QzI2MTt9JyxcclxuXHRcdFx0J2Rpdi5naWd5YS1wYXNzd29yZFN0cmVuZ3RoLWJhci12ZXJ5X3N0cm9uZyB7d2lkdGg6IDEwMCU7IGhlaWdodDogNXB4OyBiYWNrZ3JvdW5kLWNvbG9yOiM3NkMyNjE7fScsXHJcblxyXG5cdFx0XHQnZGl2LmdpZ3lhLWNhbGN1bGF0ZS1zaXplIGRpdi5naWd5YS1jYXB0Y2hhIHttaW4td2lkdGg6IDMxOHB4OyBtaW4taGVpZ2h0OiAxMjlweDtfd2lkdGg6MzE4cHg7X2hlaWdodDoxMjlweDt9JyxcclxuXHRcdFx0J2Rpdi5naWd5YS1zb2NpYWwtbG9naW4ge21pbi13aWR0aDogMTEwcHg7IG1pbi1oZWlnaHQ6MTIwcHg7IF93aWR0aDogMTEwcHg7IF9oZWlnaHQ6IDEyMHB4O30nLFxyXG4gICAgICAgICAgICAnZGl2LmdpZ3lhLXRmYSB7bWluLXdpZHRoOiAzMjVweDsgbWluLWhlaWdodDoyMDBweDsgX3dpZHRoOiAzMjVweDsgX2hlaWdodDogMjAwcHg7fScsXHJcblxyXG4gICAgICAgICAgICAnZGl2LmdpZ3lhLWNvbnRhaW5lciB7IGRpc3BsYXk6bm9uZTsgfScsXHJcbiAgICAgICAgICAgICdkaXYuZ2lneWEtY29udGFpbmVyLWVuYWJsZWQgeyBkaXNwbGF5OmJsb2NrOyB9JyxcclxuXHJcblx0XHRcdCdkaXYuZ2lneWEtbG9naW5JRC1hdmFpbGFiaWxpdHkge2xpbmUtaGVpZ2h0OjE4cHg7IGJhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDsgYmFja2dyb3VuZC1wb3NpdGlvbjogbGVmdCBjZW50ZXJ9JyxcclxuXHRcdFx0J2Rpdi5naWd5YS1sb2dpbklELWF2YWlsYWJpbGl0eS1hdmFpbGFibGUge3BhZGRpbmctbGVmdDoxN3B4OyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoKSArICcvZ3MvaS9hY2NvdW50cy9vay5wbmdcXCcpOyBjb2xvcjogIzRGQTM3M30nLFxyXG5cdFx0XHQnZGl2LmdpZ3lhLWxvZ2luSUQtYXZhaWxhYmlsaXR5LW5vdC1hdmFpbGFibGUge3BhZGRpbmctbGVmdDoxNnB4OyBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoXFwnJyArIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoKSArICcvZ3MvaS9hY2NvdW50cy9lcnJvci5wbmdcXCcpOyBjb2xvcjogI0RENEIzOX0nLFxyXG5cdFx0XHQnZGl2LmdpZ3lhLWxvZ2luSUQtYXZhaWxhYmlsaXR5LXByb2dyZXNzIHtwYWRkaW5nLWxlZnQ6IDIwcHg7IGJhY2tncm91bmQtaW1hZ2U6IHVybChcXCcnICsgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgpICsgJy9ncy9pL2FjY291bnRzL3NtYWxsTG9hZGVyLmdpZlxcJyk7IGNvbG9yOiAjNjY2NjY2fScsXHJcblxyXG5cdFx0XHQnZGl2LmdpZ3lhLXByb2ZpbGUtcGhvdG8ge2JvcmRlci1yYWRpdXM6IDNweDttaW4td2lkdGg6IDY0cHg7IG1pbi1oZWlnaHQ6NjRweDsgX3dpZHRoOiA2NHB4OyBfaGVpZ2h0OiA2NHB4O30nLFxyXG5cclxuXHRcdFx0J2Rpdi5naWd5YS1zY3JlZW4tZGltbWVyIHtwb3NpdGlvbjphYnNvbHV0ZTtvcGFjaXR5OjAuNTsgZmlsdGVyOiBcXCdhbHBoYShvcGFjaXR5PTUwKVxcJztiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkZ9JyxcclxuXHRcdFx0J2Rpdi5naWd5YS1zY3JlZW4tbG9hZGVyIHtwb3NpdGlvbjphYnNvbHV0ZTsgYmFja2dyb3VuZDp0cmFuc3BhcmVudCB1cmwoXFwnJyArIGdpZ3lhLl8uZ2V0Q2RuUmVzb3VyY2UoKSArICcvZ3MvaS9hY2NvdW50cy9iaWdMb2FkZXIuZ2lmXFwnKSBuby1yZXBlYXQgY2VudGVyIGNlbnRlcjt9JyxcclxuXHJcblx0XHRcdCdkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZyB7cG9zaXRpb246YWJzb2x1dGU7IGRpc3BsYXk6aW5saW5lLWJsb2NrO3RvcDoyNXB4O2xlZnQ6MjVweDtib3JkZXI6IDhweCBzb2xpZCAjQ0NDQ0NDOyBib3JkZXItcmFkaXVzOjhweDtiYWNrZ3JvdW5kLWNvbG9yOiNGRkZGRkZ9JyxcclxuXHRcdFx0J2Rpdi5naWd5YS1zY3JlZW4tZGlhbG9nLWNvbnRlbnQge292ZXJmbG93OmF1dG87cGFkZGluZzoyNXB4O30nLFxyXG5cdFx0XHQnZGl2LmdpZ3lhLXNjcmVlbi1kaWFsb2ctY2FwdGlvbiB7ZmxvYXQ6bGVmdDsgZm9udC13ZWlnaHQ6Ym9sZDtmb250LXNpemU6MTZweDtmb250LWZhbWlseTphcmlhbDt9JyxcclxuXHRcdFx0J2Rpdi5naWd5YS1zY3JlZW4tZGlhbG9nLWNsb3NlIHtsaW5lLWhlaWdodDozM3B4O2hlaWdodDozM3B4O3dpZHRoOjIwcHg7ZmxvYXQ6cmlnaHQ7YmFja2dyb3VuZC1pbWFnZTogdXJsKFxcJycgKyBnaWd5YS5fLmdldENkblJlc291cmNlKCkgKyAnL2dzL2kvYWNjb3VudHMvY2xvc2VfZGlhbG9nLnBuZ1xcJyk7Y3Vyc29yOnBvaW50ZXI7YmFja2dyb3VuZC1wb3NpdGlvbjpyaWdodDtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXR9JyxcclxuXHRcdFx0J2Rpdi5naWd5YS1zY3JlZW4tZGlhbG9nLWlubmVyIHtib3JkZXI6IDFweCBzb2xpZCAjQUFBQUFBfScsXHJcblx0XHRcdCdkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy10b3Age292ZXJmbG93OmhpZGRlbjt6b29tOjE7YmFja2dyb3VuZC1jb2xvcjogI0YzRjNGMztsaW5lLWhlaWdodDozM3B4O3BhZGRpbmc6IDAgMTBweCAwIDExcHg7fScsXHJcblxyXG5cdFx0XHQnZGl2LmdpZ3lhLXNjcmVlbi1kaWFsb2ctbW9iaWxlIHtwb3NpdGlvbjphYnNvbHV0ZTtkaXNwbGF5OmlubGluZS1ibG9jazt0b3A6MDtsZWZ0OjA7YmFja2dyb3VuZC1jb2xvcjojRkZGRkZGfScsXHJcbiAgICAgICAgICAgICdkaXYuZ2lneWEtc2NyZWVuLWRpYWxvZy1tb2JpbGUgZGl2LmdpZ3lhLWNvbXBvc2l0ZS1jb250cm9sLWNhcHRjaGEtd2lkZ2V0IHsgcGFkZGluZzowOyB9JyxcclxuXHJcblx0XHRcdCdkaXYuZ2lneWEtc2VjcmV0LXF1ZXN0aW9uIHtkaXNwbGF5Om5vbmU7fScsXHJcblxyXG5cdFx0XHQnZGl2LmdpZ3lhLXBob3RvLXVwbG9hZCB7aGVpZ2h0OjYzcHg7d2lkdGg6IDMwMHB4OyAqZGlzcGxheTppbmxpbmU7IHpvb206MTsgfScsXHJcblx0XHRcdCdkaXYuZ2lneWEtcGhvdG8tdXBsb2FkLWJ1dHRvbiB7ZGlzcGxheTppbmxpbmUtYmxvY2s7KmRpc3BsYXk6aW5saW5lOyB6b29tOjE7IG1hcmdpbjogMCA4cHggOHB4IDA7Zm9udC13ZWlnaHQ6bm9ybWFsO1x0Ym9yZGVyOiAxcHggc29saWQgI0NFQ0VDRTtjdXJzb3I6cG9pbnRlcjtwYWRkaW5nOiAwIDEycHg7Y29sb3I6ICMzMzMzMzM7JyxcclxuXHRcdFx0XHQnZm9udC13ZWlnaHQ6Ym9sZDtib3JkZXItcmFkaXVzOjRweDtsaW5lLWhlaWdodDoyOHB4OycsXHJcblx0XHRcdFx0J2JhY2tncm91bmQ6ICNGMkYyRjI7IGZpbHRlcjogcHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KHN0YXJ0Q29sb3JzdHI9XCIjRkZGRkZGXCIsIGVuZENvbG9yc3RyPVwiI0YyRjJGMlwiKTsnLFxyXG5cdFx0XHRcdCdiYWNrZ3JvdW5kOiAtd2Via2l0LWdyYWRpZW50KGxpbmVhciwgbGVmdCB0b3AsIGxlZnQgYm90dG9tLCBmcm9tKCNGRkZGRkYpLCB0bygjRjJGMkYyKSk7JyxcclxuXHRcdFx0XHQnYmFja2dyb3VuZDogLW1vei1saW5lYXItZ3JhZGllbnQodG9wLCAgI0ZGRkZGRiwgICNGMkYyRjIpO30nLFxyXG5cclxuXHRcdFx0J2Rpdi5naWd5YS1waG90by11cGxvYWQtYnV0dG9uOmhvdmVyIHsnLFxyXG5cdFx0XHRcdCdiYWNrZ3JvdW5kOiAjRkZGRkZGOyBmaWx0ZXI6IHByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPVwiI0YyRjJGMlwiLCBlbmRDb2xvcnN0cj1cIiNGRkZGRkZcIik7JyxcclxuXHRcdFx0XHQnYmFja2dyb3VuZDogLXdlYmtpdC1ncmFkaWVudChsaW5lYXIsIGxlZnQgdG9wLCBsZWZ0IGJvdHRvbSwgZnJvbSgjRjJGMkYyKSwgdG8oI0ZGRkZGRikpOycsXHJcblx0XHRcdFx0J2JhY2tncm91bmQ6IC1tb3otbGluZWFyLWdyYWRpZW50KHRvcCwgICNGMkYyRjIsICAjRkZGRkZGKX0nLFxyXG5cdFx0XHQnfScsXHJcblx0XHRcdCdkaXYuZ2lneWEtcGhvdG8tdXBsb2FkLXRleHQge2ZvbnQtc2l6ZToxMXB4O2NvbG9yOiM2NjY2NjZ9JyxcclxuXHRcdFx0J2Rpdi5naWd5YS1waG90by11cGxvYWQtaW1hZ2Uge2JvcmRlci1yYWRpdXM6IDZweDtiYWNrZ3JvdW5kLXBvc2l0aW9uOmNlbnRlciBjZW50ZXI7IGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7IHdpZHRoOiA2NHB4OyBoZWlnaHQ6NjRweDsgYmFja2dyb3VuZC1jb2xvcjojRjJGMkYyO2Zsb2F0OmxlZnQ7bWFyZ2luLXJpZ2h0OjhweDt9JyxcclxuXHJcblx0XHRcdCdkaXYuZ2lneWEtcGhvdG8tdXBsb2FkLXBhdGgge3doaXRlLXNwYWNlOm5vd3JhcDt3aWR0aDoxMDdweDt2ZXJ0aWNhbC1hbGlnbjptaWRkbGU7dGV4dC1vdmVyZmxvdzplbGxpcHNpcztvdmVyZmxvdzpoaWRkZW47cGFkZGluZy1yaWdodDoxMHB4O2JhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O2JhY2tncm91bmQtcmVwZWF0Om5vLXJlcGVhdDtkaXNwbGF5OmlubGluZS1ibG9jazsqZGlzcGxheTppbmxpbmU7IHpvb206MTsgcGFkZGluZy1yaWdodDogMjBweDt9JyxcclxuXHRcdFx0J2gxLmdpZ3lhLXNjcmVlbi1jYXB0aW9uIHtib3JkZXItYm90dG9tOiAxcHggc29saWQgI2RiZGJkYjtmb250LXNpemU6IDE2cHg7Zm9udC13ZWlnaHQ6IGJvbGQ7Y29sb3I6ICMzMzM7cGFkZGluZy1ib3R0b206IDVweDttYXJnaW4tYm90dG9tOiA0NXB4O30nLFxyXG5cdFx0XHQnKi5naWd5YS1lcnJvci1kaXNwbGF5IHtkaXNwbGF5Om5vbmV9JyxcclxuXHRcdFx0JyouZ2lneWEtZXJyb3ItZGlzcGxheS1hY3RpdmUge2Rpc3BsYXk6YmxvY2t9J1xyXG4gICAgICAgIF1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlU2NvcGUub0ZpZWxkTmFtZURhdGEgPSB7XHJcbiAgICAgICAgJ2xvZ2luSUQnOiBwcml2YXRlU2NvcGUuR2lneWFQYXJhbSgnbG9naW5JRCcsICd1c2VybmFtZScsICdsb2dpbklEJyksXHJcbiAgICAgICAgJ3Bhc3N3b3JkUmV0eXBlJzogcHJpdmF0ZVNjb3BlLkdpZ3lhUGFyYW0oJ3Bhc3N3b3JkUmV0eXBlJywgbnVsbCwgZmFsc2UpXHJcbiAgICAgICAgLy8ndXNlcm5hbWUnOiBwcml2YXRlU2NvcGUuR2lneWFQYXJhbSgndXNlcm5hbWUnKSxcclxuICAgICAgICAvLydfZW1haWwnOiBwcml2YXRlU2NvcGUuR2lneWFQYXJhbSgnX2VtYWlsJyksXHJcbiAgICAgICAgLy8nX2VtYWlscyc6IHByaXZhdGVTY29wZS5HaWd5YVBhcmFtKCdfZW1haWxzJyksXHJcbiAgICAgICAgLy8nX3Bhc3N3b3JkJzogcHJpdmF0ZVNjb3BlLkdpZ3lhUGFyYW0oJ19wYXNzd29yZCcpLFxyXG4gICAgICAgIC8vJ19vbGRQYXNzd29yZCc6IHByaXZhdGVTY29wZS5HaWd5YVBhcmFtKCdfb2xkUGFzc3dvcmQnKSxcclxuICAgICAgICAvLydfZ2VuZGVyJzogcHJpdmF0ZVNjb3BlLkdpZ3lhUGFyYW0oJ19nZW5kZXInKSxcclxuICAgICAgICAvLydfc2VjcmV0UXVlc3Rpb24nOiBwcml2YXRlU2NvcGUuR2lneWFQYXJhbSgnX3NlY3JldFF1ZXN0aW9uJyksXHJcbiAgICAgICAgLy8nX3NlY3JldEFuc3dlcic6IHByaXZhdGVTY29wZS5HaWd5YVBhcmFtKCdfc2VjcmV0QW5zd2VyJyksXHJcbiAgICAgICAgLy8nY2FwdGNoYVRleHQnOiBwcml2YXRlU2NvcGUuR2lneWFQYXJhbSgnY2FwdGNoYVRleHQnKSxcclxuICAgICAgICAvLydjYXB0Y2hhVG9rZW4nOiBwcml2YXRlU2NvcGUuR2lneWFQYXJhbSgnY2FwdGNoYVRva2VuJyksXHJcbiAgICAgICAgLy8nX3JlbWVtYmVyJzogcHJpdmF0ZVNjb3BlLkdpZ3lhUGFyYW0oJ19yZW1lbWJlcicsICdyZW1lbWJlck1lJywgZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZVNjb3BlLndhcm4gPSBmdW5jdGlvbiAoc2NyZWVuc2V0SUQsIG1zZykge1xyXG4gICAgICAgIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKCdHaWd5YSBTY3JlZW5zZXQgKCcgKyBzY3JlZW5zZXRJRCArICcpIC0gJyArIG1zZyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZVNjb3BlLndpZGdldC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgX2VsOiBudWxsLFxyXG4gICAgICAgIF9lbEZvcm06IG51bGwsXHJcbiAgICAgICAgX3NjcmVlblNldDogbnVsbCxcclxuICAgICAgICBfZm9ybTogbnVsbCxcclxuICAgICAgICBnZXRXaWRnZXRQYXJhbXM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIG9QYXJhbXMgPSB7fTtcclxuICAgICAgICAgICAgdmFyIGVsUGFyYW1zID0gdGhpcy5fZWwuY2hpbGROb2RlcztcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbFBhcmFtcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsUGFyYW1zW2ldLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ3BhcmFtJykgeyAvL2dldEVMZW1lbnRzQnlUYWdOYW1lKFwicGFyYW1cIikgZmFpbHMgaW4gb2xkZXIgSUVcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyYW0gPSBlbFBhcmFtc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICBvUGFyYW1zW3BhcmFtLm5hbWVdID0gcGFyYW0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9QYXJhbXM7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJzZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fZWwpIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIGFwaURhdGEgPSB0aGlzLl9zY3JlZW5TZXQuX2FwaURhdGEgPyB0aGlzLl9zY3JlZW5TZXQuX2FwaURhdGEgOiB7fTtcclxuICAgICAgICAgICAgdmFyIHNjcmVlbnNldElEID0gdGhpcy5fc2NyZWVuU2V0Ll9lbGlkO1xyXG4gICAgICAgICAgICB2YXIgd2lkZ2V0R2lneWFDbGFzcyA9IHByaXZhdGVTY29wZS5nZXRGaXJzdEdpZ3lhQ2xhc3ModGhpcy5fZWwpO1xyXG4gICAgICAgICAgICBpZiAoIXdpZGdldEdpZ3lhQ2xhc3MpIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIHJlc2V0Q1NTID0gdHJ1ZTtcclxuICAgICAgICAgICAgc3dpdGNoICh3aWRnZXRHaWd5YUNsYXNzKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdnaWd5YS1zZWNyZXQtcXVlc3Rpb24nOlxyXG4gICAgICAgICAgICAgICAgICAgIHJlc2V0Q1NTID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVscyA9IHRoaXMuX2VsLmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzW2ldLnNldEF0dHJpYnV0ZSgnZGF0YS1hbGxvdy1lbXB0eScsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2lneWEtcGFzc3dvcmQtc3RyZW5ndGgnOlxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNNb2JpbGUpIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxCb3VuZFRvID0gdGhpcy5fZWxGb3JtLmVsZW1lbnRzWyduZXdQYXNzd29yZCddIHx8IHRoaXMuX2VsRm9ybS5lbGVtZW50c1sncGFzc3dvcmQnXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsQm91bmRUbykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbEJvdW5kVG9bMF0pIGVsQm91bmRUbyA9IGVsQm91bmRUb1swXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb3JpZ2luYWxEaXNwbGF5ID0gdGhpcy5fZWwuc3R5bGUuZGlzcGxheTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZm5LZXlVcCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBURVhUOiBmdW5jdGlvbiAodGV4dEtleSwgcmVwbGFjZVN0ciwgd2l0aFN0cikgeyByZXR1cm4gVGhpcy5fc2NyZWVuU2V0LmdldFRleHQodGV4dEtleSwgcmVwbGFjZVN0ciwgd2l0aFN0cik7IH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpc3BsYXlNb2RlID0gVGhpcy5fZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWRpc3BsYXktbW9kZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBoYXNNaW5SZXEgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGhhc1N0cmVuZ3RoTWV0ZXIgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9QYXNzU3RyZW5ndGggPSBwcml2YXRlU2NvcGUuZ2V0UGFzc3dvcmRTdHJlbmd0aERhdGEoZWxCb3VuZFRvLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9Db21wbGV4aXR5ID0gVGhpcy5fc2NyZWVuU2V0Ll9hcGlEYXRhLmdldFBvbGljaWVzID8gVGhpcy5fc2NyZWVuU2V0Ll9hcGlEYXRhLmdldFBvbGljaWVzLnBhc3N3b3JkQ29tcGxleGl0eSA6IG51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb0NvbXBsZXhpdHkpIG9Db21wbGV4aXR5ID0ge307XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKGRpc3BsYXlNb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdwb2xpY3knOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gVGhpcy5fc2NyZWVuU2V0LnRlbXBsYXRlcy5nZXQoJ3Bhc3N3b3JkU3RyZW5ndGgtbWluaW11bVJlcXVpcmVtZW50cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01pblJlcSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtZXRlcic6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGVtcGxhdGUgPSBUaGlzLl9zY3JlZW5TZXQudGVtcGxhdGVzLmdldCgncGFzc3dvcmRTdHJlbmd0aC1zdHJlbmd0aE1ldGVyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFzU3RyZW5ndGhNZXRlciA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdjb21iaW5lZCc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlID0gVGhpcy5fc2NyZWVuU2V0LnRlbXBsYXRlcy5nZXQoJ3Bhc3N3b3JkU3RyZW5ndGgtc3RyZW5ndGhNZXRlcicpICsgVGhpcy5fc2NyZWVuU2V0LnRlbXBsYXRlcy5nZXQoJ3Bhc3N3b3JkU3RyZW5ndGgtbWluaW11bVJlcXVpcmVtZW50cycpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhc01pblJlcSA9IGhhc1N0cmVuZ3RoTWV0ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaGFzU3RyZW5ndGhNZXRlcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHNjb3JlID0gMDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzY29yZVRleHRJRCA9ICd0b29fd2Vhayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJpdmF0ZVNjb3BlLmlzUGFzc3dvcmRTdHJlbmd0aFZhbGlkKGVsQm91bmRUby52YWx1ZSwgb1Bhc3NTdHJlbmd0aCwgb0NvbXBsZXhpdHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVUZXh0SUQgPSAnd2Vhayc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9QYXNzU3RyZW5ndGgubGVuZ3RoID4gNCkgc2NvcmUgKz0gNDA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9QYXNzU3RyZW5ndGgubGVuZ3RoID4gNSkgc2NvcmUgKz0gMjE7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9QYXNzU3RyZW5ndGgubGVuZ3RoID4gNykgc2NvcmUgKz0gMTg7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9QYXNzU3RyZW5ndGguY2hhckdyb3VwcyA+IDEpIHNjb3JlICs9IDIxO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvUGFzc1N0cmVuZ3RoLmNoYXJHcm91cHMgPiAyKSBzY29yZSArPSAxNztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAob1Bhc3NTdHJlbmd0aC5jaGFyR3JvdXBzID4gMykgc2NvcmUgKz0gMjM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3JlID4gNjApIHNjb3JlVGV4dElEID0gJ2ZhaXInO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY29yZSA+IDgwKSBzY29yZVRleHRJRCA9ICdzdHJvbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY29yZSA+IDEwMCkgc2NvcmVUZXh0SUQgPSAndmVyeV9zdHJvbmcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zY29yZSA9IHNjb3JlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5zY29yZVRleHQgPSBUaGlzLl9zY3JlZW5TZXQuZ2V0VGV4dChzY29yZVRleHRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpdGVtLmJhckluZGljYXRvckNsYXNzID0gJ2dpZ3lhLXBhc3N3b3JkU3RyZW5ndGgtYmFyLScgKyBzY29yZVRleHRJRDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGhhc01pblJlcSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyUmVxdWlyZW1lbnRzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJHcm91cHNPcmRlciA9IFsnbWluTGVuZ3RoJywgJ21pbkNoYXJHcm91cHMnXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJHcm91cHNPcmRlci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZXEgPSBhckdyb3Vwc09yZGVyW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb0NvbXBsZXhpdHlbcmVxXSkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGdyb3VwVGV4dElEID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnbWluTGVuZ3RoJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVGV4dElEID0gJ251bV9jaGFyYWN0ZXJzX3RvdGFsJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdtaW5DaGFyR3JvdXBzJzpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdyb3VwVGV4dElEID0gJ251bV9vZl90aGVfZm9sbG93aW5nX2dyb3Vwcyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFncm91cFRleHRJRCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlcXVpcmVtZW50VGV4dCA9IFRoaXMuX3NjcmVlblNldC5nZXRUZXh0KGdyb3VwVGV4dElELCAnJW51bScsIG9Db21wbGV4aXR5W3JlcV0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXF1aXJlbWVudFRleHQpIGFyUmVxdWlyZW1lbnRzLnB1c2gocmVxdWlyZW1lbnRUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0ucmVxdWlyZW1lbnRzID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJSZXF1aXJlbWVudHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBsYXN0UmVxID0gYXJSZXF1aXJlbWVudHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXRlbS5yZXF1aXJlbWVudHMgPSBUaGlzLl9zY3JlZW5TZXQuZ2V0VGV4dCgncGFzc3dvcmRfbXVzdF9jb250YWluX2F0X2xlYXN0JykgKyAnICcgKyAoYXJSZXF1aXJlbWVudHMubGVuZ3RoID4gMCA/IGFyUmVxdWlyZW1lbnRzLmpvaW4oJywgJykgKyAnICcgKyBUaGlzLl9zY3JlZW5TZXQuZ2V0VGV4dCgnYW5kJykgKyAnICcgKyBsYXN0UmVxIDogbGFzdFJlcSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGh0bWwgPSBnaWd5YS51dGlscy50ZW1wbGF0ZXMuZmlsbCh0ZW1wbGF0ZSwgaXRlbSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUaGlzLl9lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb24tZm9jdXMtYnViYmxlJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGJ1YmJsZUlEICsgJ19jb250ZW50JykuaW5uZXJIVE1MID0gaHRtbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuX2VsLmlubmVySFRNTCA9IGh0bWw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9lbC5zdHlsZS5kaXNwbGF5ID0gb3JpZ2luYWxEaXNwbGF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZWxCb3VuZFRvLCAna2V5dXAnLCBmbktleVVwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFRoaXMuX2VsLmdldEF0dHJpYnV0ZSgnZGF0YS1vbi1mb2N1cy1idWJibGUnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYnViYmxlSUQgPSBzY3JlZW5zZXRJRCArICdfYnViYmxlJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsQnViYmxlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnViYmxlSUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsQnViYmxlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbEJvdW5kVG8sICdmb2N1cycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9lbC5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGJ1YmJsZVcgPSBUaGlzLl9lbC5vZmZzZXRXaWR0aCB8fCAyNTA7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5fZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5nbG9iYWwucHV0R01CYWxsb29uTmV4dFRvKGVsQm91bmRUbywgJzxkaXYgaWQ9XCInICsgYnViYmxlSUQgKyAnX2NvbnRlbnRcIj48L2Rpdj4nLCBudWxsLCBidWJibGVXLCBudWxsLCB0cnVlLCBidWJibGVJRCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnViYmxlSUQgKyAnX2NvbnRlbnQnKS5jbGFzc05hbWUgPSBUaGlzLl9lbC5jbGFzc05hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYnViYmxlSUQpLmNsYXNzTmFtZSA9IFRoaXMuX2VsLmNsYXNzTmFtZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbktleVVwKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGVsQm91bmRUbywgJ2JsdXInLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEuZ2xvYmFsLnJlbW92ZUdNQmFsbG9vbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2lneWEtY2FwdGNoYSc6XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHJlY2FwdGNoYVBhcmFtcyA9IGdpZ3lhLnV0aWxzLm9iamVjdC5tZXJnZShbeyB0aGVtZTogJ3doaXRlJyB9LCBUaGlzLmdldFdpZGdldFBhcmFtcygpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGg7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZWNhcHRjaGFQYXJhbXMudGhlbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnY2xlYW4nOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdyA9IDYwMDsgaCA9IDEwODsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ2JsYWNrZ2xhc3MnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdyZWQnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd3aGl0ZSc6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3ID0gMzE4OyBoID0gMTI5OyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlY2FwdGNoYVBhcmFtcy50aGVtZSAhPSAnY3VzdG9tJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbC5zdHlsZS53aWR0aCA9IHcgKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbC5zdHlsZS5oZWlnaHQgPSBoICsgJ3B4JztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWwubmFtZSA9ICdjYXB0Y2hhVGV4dCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWwuc2V0QXR0cmlidXRlKCdkYXRhLWdpZ3lhLW5hbWUnLCAnY2FwdGNoYVRleHQnKTtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5zY3JpcHQubG9hZCgnLy93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpL2pzL3JlY2FwdGNoYV9hamF4LmpzJywgbnVsbCwgZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIFJlY2FwdGNoYSAhPSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHRlbXBsYXRlID0gVGhpcy5fc2NyZWVuU2V0LnRlbXBsYXRlcy5nZXQoJ2NhcHRjaGEnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWNhcHRjaGFDb250YWluZXJJRCA9IHJlY2FwdGNoYVBhcmFtc1snY3VzdG9tX3RoZW1lX3dpZGdldCddO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZWNhcHRjaGFDb250YWluZXJJRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlY2FwdGNoYUNvbnRhaW5lcklEID0gc2NyZWVuc2V0SUQgKyAnX3JlY2FwdGNoYScgKyAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuX2VsLmlubmVySFRNTCA9IGdpZ3lhLnV0aWxzLnRlbXBsYXRlcy5maWxsKHRlbXBsYXRlLCB7IHJlY2FwdGNoYUNvbnRhaW5lcklEOiByZWNhcHRjaGFDb250YWluZXJJRCB9KTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLmxvY2FsSW5mby5pc01vYmlsZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5fZWwuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBSZWNhcHRjaGEudGhlbWU7IC8vIGZpeGVzIGEgYnVnIHdoZW4gbG9hZGluZyB0d28gZGlmZmVyZW50IHRoZW1lc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgUmVjYXB0Y2hhLmNyZWF0ZSgnNkxkWFQ5TVNBQUFBQUxGVkwzTlVZYkNFaUpmaVNUZ2ZsSlVkcmZsUCcsIHJlY2FwdGNoYUNvbnRhaW5lcklELCByZWNhcHRjaGFQYXJhbXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdnaWd5YS1waG90by11cGxvYWQnOlxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBpZnJhbWVJRCA9IHNjcmVlbnNldElEICsgJ191cGxvYWRJZnJhbWUnICsgKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGhvdG9FbGVtZW50SUQgPSBpZnJhbWVJRCArICdfcGhvdG8nO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB0ZW1wbGF0ZSA9IFRoaXMuX3NjcmVlblNldC50ZW1wbGF0ZXMuZ2V0KCdwaG90b1VwbG9hZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXRoQ29udGFpbmVySUQgPSBpZnJhbWVJRCArICdfcGF0aCc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGRlZmF1bHRCR0ltYWdlID0gJ3VybChcXCcnICsgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvYWNjb3VudHMvYXZhdGFyXzY0LnBuZycpICsgJ1xcJyknO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBodG1sID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGVtcGxhdGUsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF0aENvbnRhaW5lcklEOiBwYXRoQ29udGFpbmVySUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBob3RvRWxlbWVudElEOiBwaG90b0VsZW1lbnRJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2hvb3NlX2ZpbGU6IHRoaXMuX3NjcmVlblNldC5nZXRUZXh0KCdjaG9vc2VfZmlsZScpLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBub19maWxlX2Nob3NlbjogdGhpcy5fc2NyZWVuU2V0LmdldFRleHQoJ25vX2ZpbGVfY2hvc2VuJyksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpcDogdGhpcy5fc2NyZWVuU2V0LmdldFRleHQoJ21heGltdW1fc2l6ZV9vZl8zbWIuJykgKyAnIEpQRywgR0lGLCBQTkcuJ1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsLmlubmVySFRNTCA9IGh0bWwgKyAnPGlmcmFtZSBpZD1cIicgKyBpZnJhbWVJRCArICdcIiBuYW1lPVwiJyArIGlmcmFtZUlEICsgJ1wiIHN0eWxlPVwiZGlzcGxheTpub25lXCIgb25lcnJvcj1cInRoaXMuc2V0QXR0cmlidXRlKFxcJ3VwbG9hZGluZ1xcJywwKVwiIG9ubG9hZD1cInRoaXMuc2V0QXR0cmlidXRlKFxcJ3VwbG9hZGluZ1xcJywwKVwiPjwvaWZyYW1lPic7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJhbXMgPSBnaWd5YS51dGlscy5vYmplY3QuZXh0cmFjdFByb3BlcnRpZXModGhpcy5fc2NyZWVuU2V0Ll9wLCB7fSwgJ0FQSUtleXxjaWR8b2F1dGhfdG9rZW58bG9naW5fdG9rZW58c291cmNlfHNvdXJjZURhdGF8cmVnVG9rZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMuYXV0aE1vZGUgPSBwYXJhbXNbJ29hdXRoX3Rva2VuJ10gPyAndG9rZW4nIDogJ2Nvb2tpZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLl8uYXBpQWRhcHRlcnMud2ViKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmFtcy5sb2dpbl90b2tlbiA9IGdpZ3lhLl8uYXBpQWRhcHRlcnMud2ViLnRva2VuU3RvcmUuZ2V0KHBhcmFtc1snQVBJS2V5J10pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcmFtcy5BUElLZXkpIHBhcmFtcy5BUElLZXkgPSBnaWd5YS50aGlzU2NyaXB0LkFQSUtleTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHVwZGF0ZUltYWdlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxQYXRoID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGF0aENvbnRhaW5lcklEKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsUGF0aCkgZWxQYXRoLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZ2V0UHJvZmlsZVBob3RvUGFyYW1zID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFByb2ZpbGVQaG90b1BhcmFtcy50eXBlID0gJ3RodW1ibmFpbCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdldFByb2ZpbGVQaG90b1BhcmFtcy5jb250ZXh0ID0gKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbWcuc3JjID0gZ2lneWEudXRpbHMuc3RyaW5nVXRpbHMuZm9ybWF0KCd7MH06Ly9hY2NvdW50cy57MX0vYWNjb3VudHMuZ2V0UHJvZmlsZVBob3RvP3syfScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoZ2V0UHJvZmlsZVBob3RvUGFyYW1zLmxvZ2luX3Rva2VuID8gJ2h0dHBzJyA6IGdpZ3lhLmxvY2FsSW5mby5wcm90b2NvbCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9zY3JlZW5TZXQuX3AuYXBpRG9tYWluLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMua2V5VmFsdWUuc2VyaWFsaXplKGdldFByb2ZpbGVQaG90b1BhcmFtcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW1nLm9ubG9hZCA9IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbFBob3RvID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQocGhvdG9FbGVtZW50SUQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsUGhvdG8pIGVsUGhvdG8uc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcXCcnICsgaW1nLnNyYyArICdcXCcpJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZmlsZVBob3RvcyA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5Q2xhc3MoVGhpcy5fc2NyZWVuU2V0Ll9lbENvbnRhaW5lciwgJ2dpZ3lhLXByb2ZpbGUtcGhvdG8nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvZmlsZVBob3Rvcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbFByb2ZpbGVQaG90b1dpZGdldCA9IHByb2ZpbGVQaG90b3NbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNoaWxkTm9kZXMgPSBlbFByb2ZpbGVQaG90b1dpZGdldC5jaGlsZE5vZGVzO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2hpbGROb2RlcyAmJiBjaGlsZE5vZGVzLmxlbmd0aCA+IDAgJiYgY2hpbGROb2Rlc1swXS5ub2RlTmFtZSA9PSAnSU1HJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZE5vZGVzWzBdLnNyYyA9IGltZy5zcmM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGltZy5vbmVycm9yID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsUGhvdG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwaG90b0VsZW1lbnRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxQaG90bykgZWxQaG90by5zdHlsZS5iYWNrZ3JvdW5kSW1hZ2UgPSBkZWZhdWx0QkdJbWFnZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlmciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlmcmFtZUlEKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWZyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGlmciwgJ2xvYWQnLCBmdW5jdGlvbiAoKSB7IC8vcmVmZXJzaCB0aGUgaW1hZ2UgYWZ0ZXIgdGhlIHVwbG9hZFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlSW1hZ2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoaWZyLCAnZXJyb3InLCBmdW5jdGlvbiAoKSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsUGhvdG8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChwaG90b0VsZW1lbnRJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbFBob3RvKSBlbFBob3RvLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGRlZmF1bHRCR0ltYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB1cGRhdGVJbWFnZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBmb3JtQWN0aW9uID0gZ2lneWEudXRpbHMuc3RyaW5nVXRpbHMuZm9ybWF0KCdodHRwczovL2FjY291bnRzLnswfS9hY2NvdW50cy51cGxvYWRQcm9maWxlUGhvdG8/cHVibGlzaD10cnVlJnsxfScsIHRoaXMuX3NjcmVlblNldC5fcC5hcGlEb21haW4sIGdpZ3lhLnV0aWxzLmtleVZhbHVlLnNlcmlhbGl6ZShwYXJhbXMpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZybVVwbG9hZCA9IHByaXZhdGVTY29wZS5hdHRhY2hGaWxlVXBsb2FkKHRoaXMuX2VsLCBpZnJhbWVJRCwgZm9ybUFjdGlvbik7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZybVVwbG9hZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZmlsZUlucHV0ID0gZnJtVXBsb2FkLmVsZW1lbnRzWydfcHJvZmlsZVBob3RvJ107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGZpbGVJbnB1dCwgJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhdGhDb250YWluZXJJRCkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gJ3VybChcXCcnICsgZ2lneWEuXy5nZXRDZG5SZXNvdXJjZSgnL2dzL2kvYWNjb3VudHMvc21hbGxMb2FkZXIuZ2lmJykgKyAnXFwnKSc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2dpZ3lhLWxvZ2luSUQtYXZhaWxhYmlsaXR5JzpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGVsQm91bmRUbyA9IHRoaXMuX2VsRm9ybS5lbGVtZW50c1t0aGlzLl9lbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtYm91bmQtdG8nKV0gfHwgdGhpcy5fZWxGb3JtLmVsZW1lbnRzWyd1c2VybmFtZSddIHx8IHRoaXMuX2VsRm9ybS5lbGVtZW50c1snZW1haWwnXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIWVsQm91bmRUbykgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIFRoaXMuX2VsLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbERpc3BsYXkgPSB0aGlzLl9lbC5zdHlsZS5kaXNwbGF5O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuVXBkYXRlID0gZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWxCb3VuZFRvLnZhbHVlID09IFRoaXMuX2VsLmdldEF0dHJpYnV0ZSgnZGF0YS1sYXN0dmFsdWUnKSkgcmV0dXJuOyAvL25vdGhpbmcgaGFzIGNoYW5nZWQgc2luY2UgbGFzdCBjaGVjaywgbm8gbmVlZCB0byB1cGRhdGVcclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5fZWwuc2V0QXR0cmlidXRlKCdkYXRhLWxhc3R2YWx1ZScsIGVsQm91bmRUby52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWxCb3VuZFRvIHx8IGVsQm91bmRUby52YWx1ZS5zcGxpdCgnICcpLmpvaW4oJycpLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9lbC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9lbC5zdHlsZS5kaXNwbGF5ID0gb3JpZ2luYWxEaXNwbGF5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9lbC5pbm5lckhUTUwgPSBUaGlzLl9zY3JlZW5TZXQuZ2V0VGV4dCgnY2hlY2tpbmcnKTs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChUaGlzLl9lbCwgJ2dpZ3lhLWxvZ2luSUQtYXZhaWxhYmlsaXR5LXByb2dyZXNzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmFjY291bnRzLmlzQXZhaWxhYmxlTG9naW5JRCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsb2dpbklEOiBlbEJvdW5kVG8udmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHJlcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzdGF0ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3RhdGVUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KFRoaXMuX2VsLCAnZ2lneWEtbG9naW5JRC1hdmFpbGFiaWxpdHktcHJvZ3Jlc3MnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChUaGlzLl9lbCwgJ2dpZ3lhLWxvZ2luSUQtYXZhaWxhYmlsaXR5LW5vdC1hdmFpbGFibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChUaGlzLl9lbCwgJ2dpZ3lhLWxvZ2luSUQtYXZhaWxhYmlsaXR5LWF2YWlsYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsQm91bmRUby5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtdGFrZW4nKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcy5lcnJvckNvZGUgIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9lbC5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHJlcy5pc0F2YWlsYWJsZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9lbC5pbm5lckhUTUwgPSBUaGlzLl9zY3JlZW5TZXQuZ2V0VGV4dCgnYXZhaWxhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChUaGlzLl9lbCwgJ2dpZ3lhLWxvZ2luSUQtYXZhaWxhYmlsaXR5LWF2YWlsYWJsZScpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9zY3JlZW5TZXQub25JbnB1dENoYW5nZShlbEJvdW5kVG8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuX2VsLmlubmVySFRNTCA9IFRoaXMuX3NjcmVlblNldC5nZXRUZXh0KCdub3RfYXZhaWxhYmxlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChUaGlzLl9lbCwgJ2dpZ3lhLWxvZ2luSUQtYXZhaWxhYmlsaXR5LW5vdC1hdmFpbGFibGUnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxCb3VuZFRvLnNldEF0dHJpYnV0ZSgnZGF0YS10YWtlbicsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZWxCb3VuZFRvLCAna2V5dXAnLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChUaGlzLl9lbC51cGRhdGVUaW1lb3V0KSB3aW5kb3cuY2xlYXJUaW1lb3V0KFRoaXMuX2VsLnVwZGF0ZVRpbWVvdXQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9lbC51cGRhdGVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoZm5VcGRhdGUsIDEwMDApXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZWxCb3VuZFRvLCAnY2hhbmdlJywgZm5VcGRhdGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2lneWEtc29jaWFsLWxvZ2luJzpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgd2lkZ2V0UGFyYW1zID0gdGhpcy5nZXRXaWRnZXRQYXJhbXMoKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgbG9naW5Db250YWluZXJJRCA9IHNjcmVlbnNldElEICsgJ18nICsgKG5ldyBEYXRlKCkpLmdldFRpbWUoKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbC5pbm5lckhUTUwgPSAnPGRpdiBpZD1cIicgKyBsb2dpbkNvbnRhaW5lcklEICsgJ1wiPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZuT25SZXNwb25zZSA9IGZ1bmN0aW9uIChlKSB7IFRoaXMuX3NjcmVlblNldC5vblNjcmVlblJlc3BvbnNlKGUucmVzcG9uc2UpIH07XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuc29jaWFsaXplLnNob3dMb2dpblVJKHRoaXMuX3NjcmVlblNldC5fcCwgd2lkZ2V0UGFyYW1zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcklEOiBsb2dpbkNvbnRhaW5lcklELFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhY2NvdW50c1NvY2lhbExvZ2luOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvbkxvZ2luOiBmbk9uUmVzcG9uc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uRXJyb3I6IGZuT25SZXNwb25zZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmluYWxpemVSZWdpc3RyYXRpb246IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbnRIYW5kbGVTY3JlZW5TZXQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluY2x1ZGU6ICdwcm9maWxlLGRhdGEsZW1haWxzJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnU291cmNlOiB0aGlzLl9zY3JlZW5TZXQuX3AucmVnU291cmNlIHx8IGxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXS5zcGxpdCgnIycpWzBdXHJcbiAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlICdnaWd5YS1wcm9maWxlLXBob3RvJzpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgdGVtcGxhdGUgPSBUaGlzLl9zY3JlZW5TZXQudGVtcGxhdGVzLmdldCgndXNlclBob3RvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRodW1ibmFpbFVSTCA9IGFwaURhdGEuZ2V0QWNjb3VudEluZm8gJiYgYXBpRGF0YS5nZXRBY2NvdW50SW5mby5wcm9maWxlICYmIGFwaURhdGEuZ2V0QWNjb3VudEluZm8ucHJvZmlsZS50aHVtYm5haWxVUkwgPyBhcGlEYXRhLmdldEFjY291bnRJbmZvLnByb2ZpbGUudGh1bWJuYWlsVVJMIDogJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWwuaW5uZXJIVE1MID0gdGh1bWJuYWlsVVJMID8gJzxpbWcgc3JjPVwiJyArIHRodW1ibmFpbFVSTCArICdcIiAvPicgOiAnJztcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2dpZ3lhLXJlcXVpcmVkLWRpc3BsYXknOlxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGJvdW5kVG9OYW1lID0gdGhpcy5fZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWJvdW5kLXRvJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlzUmVxdWlyZWQgPSB0aGlzLl9zY3JlZW5TZXQuaXNSZXF1aXJlZEZpZWxkKGJvdW5kVG9OYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNSZXF1aXJlZCkgdGhpcy5fZWwuc3R5bGUuZGlzcGxheSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSAnZ2lneWEtdGZhJzpcclxuICAgICAgICAgICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHdpZGdldFBhcmFtcyA9IHRoaXMuZ2V0V2lkZ2V0UGFyYW1zKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHRmYUNvbnRhaW5lcklkID0gc2NyZWVuc2V0SUQgKyAnXycgKyAobmV3IERhdGUoKSkuZ2V0VGltZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsLmlubmVySFRNTCA9ICc8ZGl2IGlkPVwiJyArIHRmYUNvbnRhaW5lcklkICsgJ1wiPjwvZGl2Pic7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NyZWVuU2V0LmRpbVNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLmFjY291bnRzLnNob3dUZmFVSSh0aGlzLl9zY3JlZW5TZXQuX3AsIHdpZGdldFBhcmFtcywge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkb250SGFuZGxlU2NyZWVuU2V0OiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVnVG9rZW46IHRoaXMuX3NjcmVlblNldC5fbGFzdFN1Ym1pdHRlZEZvcm1SZXNwb25zZSA/IHRoaXMuX3NjcmVlblNldC5fbGFzdFN1Ym1pdHRlZEZvcm1SZXNwb25zZS5yZWdUb2tlbiA6IG51bGwsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcklEOiB0ZmFDb250YWluZXJJZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY3NzUHJlZml4OiAnIycgKyBzY3JlZW5zZXRJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgb25Eb25lOiBmdW5jdGlvbiAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5fc2NyZWVuU2V0LmRpbVNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5fc2NyZWVuU2V0Lm9uU2NyZWVuUmVzcG9uc2UoZS5yZXNwb25zZSwgVGhpcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5fc2NyZWVuU2V0LnVuZGltU2NyZWVuKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgJ2dpZ3lhLWNvbnRhaW5lcic6XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzZXRDU1MgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2hvdWxkRGlzcGxheSA9IHByaXZhdGVTY29wZS5jb250YWluZXJDb25kaXRpb25zLnRlc3RDb250YWluZXIodGhpcywgcHJpdmF0ZVNjb3BlLmNvbnRhaW5lckNvbmRpdGlvbnMuc2V0cy5yZW5kZXJpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZFN0YXR1cyA9IHNob3VsZERpc3BsYXk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vcmlnaW5hbENvbmRTdGF0dXMgPSBzaG91bGREaXNwbGF5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoc2hvdWxkRGlzcGxheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGREaXNwbGF5ID0gcHJpdmF0ZVNjb3BlLmNvbnRhaW5lckNvbmRpdGlvbnMudGVzdENvbnRhaW5lcih0aGlzLCBwcml2YXRlU2NvcGUuY29udGFpbmVyQ29uZGl0aW9ucy5zZXRzLnZhbGlkYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmRTdGF0dXMgPSB0aGlzLm9yaWdpbmFsQ29uZFN0YXR1cyAmJiBzaG91bGREaXNwbGF5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNob3VsZERpc3BsYXkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudCh0aGlzLl9lbCwgJ2dpZ3lhLWNvbnRhaW5lci1lbmFibGVkJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbGVtZW50cyA9IHRoaXMuX3NjcmVlblNldC5fZWxDb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG5vZGVOYW1lID0gZWxlbWVudHNbaV0ubm9kZU5hbWUudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChub2RlTmFtZSA9PSAnc2VsZWN0JyB8fCBub2RlTmFtZSA9PSAnaW5wdXQnIHx8IG5vZGVOYW1lID09ICd0ZXh0YXJlYScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbGVtZW50c1tpXSwgJ2NoYW5nZScsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBzaG91bGREaXNwbGF5ID0gcHJpdmF0ZVNjb3BlLmNvbnRhaW5lckNvbmRpdGlvbnMudGVzdENvbnRhaW5lcihUaGlzLCBwcml2YXRlU2NvcGUuY29udGFpbmVyQ29uZGl0aW9ucy5zZXRzLnZhbGlkYXRpb24pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLmNvbmRTdGF0dXMgPSBUaGlzLm9yaWdpbmFsQ29uZFN0YXR1cyAmJiBzaG91bGREaXNwbGF5O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKFRoaXMuY29uZFN0YXR1cykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KFRoaXMuX2VsLCAnZ2lneWEtY29udGFpbmVyLWVuYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVDbGFzc0Zyb21FbGVtZW50KFRoaXMuX2VsLCAnZ2lneWEtY29udGFpbmVyLWVuYWJsZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6IHJlc2V0Q1NTID0gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHJlc2V0Q1NTKSBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQodGhpcy5fZWwsICdnaWd5YS1yZXNldCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHByaXZhdGVTY29wZS5mb3JtLnByb3RvdHlwZSA9IHtcclxuICAgICAgICBfZ2lneWFDbGFzc05hbWU6IG51bGwsXHJcbiAgICAgICAgX0lEOiBudWxsLFxyXG4gICAgICAgIF9zY3JlZW5TZXQ6IG51bGwsXHJcbiAgICAgICAgX2VsRm9ybTogbnVsbCxcclxuICAgICAgICBfYWN0aW9uczogbnVsbCxcclxuXHJcbiAgICAgICAgaW5pdDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLnBhcnNlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRGbGF0Rm9ybURhdGE6IGZ1bmN0aW9uIChpZ25vcmVIaWRkZW5Db250YWluZXJzKSB7XHJcbiAgICAgICAgICAgIHZhciBvRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICB2YXIgZWxzID0gdGhpcy5fZWxGb3JtLmVsZW1lbnRzO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGVscy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkID0gZWxzW2ldO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGZpZWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1naWd5YS1uYW1lJyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgbm9kZU5hbWUgPSBmaWVsZC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKChub2RlTmFtZSA9PSAnaW5wdXQnICYmIGZpZWxkLnR5cGUgIT0gJ3N1Ym1pdCcpIHx8IG5vZGVOYW1lID09ICdzZWxlY3QnIHx8IG5vZGVOYW1lID09ICd0ZXh0YXJlYScpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGROYW1lID09IG51bGwpIGNvbnRpbnVlOyAvL2lnbm9yZSBuYW1lbGVzcyBmaWVsZHNcclxuICAgICAgICAgICAgICAgICAgICBpZiAoaWdub3JlSGlkZGVuQ29udGFpbmVycyAmJiBwcml2YXRlU2NvcGUuaXNGaWVsZEluSGlkZGVuQ29udGFpbmVyKGZpZWxkKSkgY29udGludWU7IC8vIGZpZWxkcyBpbnNpZGUgaGlkZGVuIGdpZ3lhLWNvbnRhaW5lclxyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgZmllbGRWYWx1ZSA9IGZpZWxkLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC50eXBlID09ICdjaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmllbGRWYWx1ZSA9IGZpZWxkLmNoZWNrZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGRWYWx1ZSA9PSBudWxsKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLnR5cGUgPT0gJ3JhZGlvJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZpZWxkLmNoZWNrZWQpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBvRGF0YVtmaWVsZE5hbWVdID0gZmllbGRWYWx1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZWxDYXB0Y2hhID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLl9lbEZvcm0sICdnaWd5YS1jYXB0Y2hhJylbMF07XHJcbiAgICAgICAgICAgIGlmIChlbENhcHRjaGEgJiYgdHlwZW9mIFJlY2FwdGNoYSA9PSAnb2JqZWN0Jy8qICYmICFwcml2YXRlU2NvcGUuaXNIaWRkZW4oZWxDYXB0Y2hhKSovKSB7IC8vZm9ybSBjb250YWlucyByZWNhcHRjaGFcclxuICAgICAgICAgICAgICAgIGVsQ2FwdGNoYS5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FwdGNoYVRleHQgPSBSZWNhcHRjaGEuZ2V0X3Jlc3BvbnNlKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY2FwdGNoYVRva2VuID0gUmVjYXB0Y2hhLmdldF9jaGFsbGVuZ2UoKTtcclxuICAgICAgICAgICAgICAgIGlmIChjYXB0Y2hhVGV4dCAmJiBjYXB0Y2hhVG9rZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBvRGF0YS5jYXB0Y2hhVGV4dCA9IGNhcHRjaGFUZXh0O1xyXG4gICAgICAgICAgICAgICAgICAgIG9EYXRhLmNhcHRjaGFUb2tlbiA9IGNhcHRjaGFUb2tlbjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gb0RhdGE7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQYXJhbXNGb3JGb3JtRGF0YTogZnVuY3Rpb24gKGZvcm1EYXRhKSB7XHJcbiAgICAgICAgICAgIHZhciBlbHMgPSB0aGlzLl9lbEZvcm0uZWxlbWVudHM7XHJcbiAgICAgICAgICAgIHZhciBvUm9vdCA9IHt9O1xyXG4gICAgICAgICAgICB2YXIgb0RhdGEgPSBudWxsO1xyXG4gICAgICAgICAgICB2YXIgb1Byb2ZpbGUgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgZmllbGROYW1lIGluIGZvcm1EYXRhKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgcGFyYW1WYWx1ZSA9IGZvcm1EYXRhW2ZpZWxkTmFtZV07XHJcbiAgICAgICAgICAgICAgICBpZiAoU3RyaW5nKHBhcmFtVmFsdWUpID09ICcnKSBwYXJhbVZhbHVlID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIHZhciBvRmllbGROYW1lRGF0YSA9IHByaXZhdGVTY29wZS5vRmllbGROYW1lRGF0YVtmaWVsZE5hbWVdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHBhcmFtTmFtZSA9IGZpZWxkTmFtZTtcclxuICAgICAgICAgICAgICAgIGlmIChvRmllbGROYW1lRGF0YSkgcGFyYW1OYW1lID0gb0ZpZWxkTmFtZURhdGEucGFyYW1OYW1lO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFwYXJhbU5hbWUpIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkTmFtZXNwYWNlID0gZmllbGROYW1lLnNwbGl0KCcuJylbMF07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FjdGlvbnMuc3BlY2lhbEZpZWxkcyAmJiB0aGlzLl9hY3Rpb25zLnNwZWNpYWxGaWVsZHNbcGFyYW1OYW1lXSkgeyAvL3NwZWNpYWwgZmllbGQgLSBnb2VzIHRvIHRoZSByb290IG9mIHRoZSByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgb1Jvb3RbcGFyYW1OYW1lXSA9IHBhcmFtVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2FjdGlvbnMuZGF0YU9iamVjdE5hbWUgJiYgZmllbGROYW1lc3BhY2UgPT0gdGhpcy5fYWN0aW9ucy5kYXRhT2JqZWN0TmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLm9iamVjdC5zZXRQcm9wZXJ0eUJ5U2VyaWFsaXplZE5hbWUob1Jvb3QsIGZpZWxkTmFtZSwgcGFyYW1WYWx1ZSk7IC8vZmllbGQgdGhhdCBzdGFydHMgd2l0aCBkYXRhT2JqZWN0TmFtZS4gc2hvdWxkIGdvIHRvIHJvb3QuZGF0YU9iamVjdE5hbWUgb2JqZWN0XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHRoaXMuX2FjdGlvbnMucHJvZmlsZU9iamVjdE5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGROYW1lc3BhY2UgIT0gdGhpcy5fYWN0aW9ucy5wcm9maWxlT2JqZWN0TmFtZSkgZmllbGROYW1lID0gdGhpcy5fYWN0aW9ucy5wcm9maWxlT2JqZWN0TmFtZSArICcuJyArIGZpZWxkTmFtZTsgLy9kZWZhdWx0IG5hbWVzcGFjZSBpcyBwcm9maWxlT2JqZWN0TmFtZVxyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLm9iamVjdC5zZXRQcm9wZXJ0eUJ5U2VyaWFsaXplZE5hbWUob1Jvb3QsIGZpZWxkTmFtZSwgcGFyYW1WYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG9Sb290O1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJlcG9wdWxhdGU6IGZ1bmN0aW9uIChvRGF0YSkge1xyXG4gICAgICAgICAgICBpZiAoIW9EYXRhKSByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBlbHMgPSB0aGlzLl9lbEZvcm0uZWxlbWVudHM7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBlbHNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgZmllbGROYW1lID0gZmllbGQuZ2V0QXR0cmlidXRlKCdkYXRhLWdpZ3lhLW5hbWUnKSB8fCBmaWVsZC5uYW1lO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRhdGFWYWx1ZSA9IGdpZ3lhLnV0aWxzLm9iamVjdC5nZXRQcm9wZXJ0eUJ5U2VyaWFsaXplZE5hbWUob0RhdGEsIGZpZWxkTmFtZSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWZpZWxkTmFtZSB8fCAhZGF0YVZhbHVlKSBjb250aW51ZTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQudHlwZSA9PSAnY2hlY2tib3gnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hlY2tlZCA9IChkYXRhVmFsdWUgPT0gdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkLnR5cGUgPT0gJ3JhZGlvJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoZWNrZWQgPSAoZGF0YVZhbHVlID09IGZpZWxkLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQudmFsdWUgPSBkYXRhVmFsdWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNoZWNrQXV0b1NraXA6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2VsRm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtYXV0by1za2lwJykgPT0gXCJ0cnVlXCIgJiYgdGhpcy52YWxpZGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2tpcCA9IHRydWU7XHJcblxyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLl9zY3JlZW5TZXQuX2NvbnRhaW5lckluc3RhbmNlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBjb250YWluZXIgPSB0aGlzLl9zY3JlZW5TZXQuX2NvbnRhaW5lckluc3RhbmNlc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZW1wdHlGaWVsZHNBdHRyaWJ1dGUgPSBjb250YWluZXIuX2VsLmdldEF0dHJpYnV0ZSgnZGF0YS1lbXB0eS1maWVsZHMnKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhaW5lci5fZWxGb3JtID09IHRoaXMuX2VsRm9ybSAmJiBlbXB0eUZpZWxkc0F0dHJpYnV0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBza2lwID0gIShwcml2YXRlU2NvcGUuY29udGFpbmVyQ29uZGl0aW9ucy5zZXRzLnJlbmRlcmluZ1snZGF0YS1lbXB0eS1maWVsZHMnXSkoZW1wdHlGaWVsZHNBdHRyaWJ1dGUsIGNvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChza2lwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbkFmdGVyU3VibWl0KHsgZXJyb3JDb2RlOiAwLCBhdXRvU2tpcDogdHJ1ZSB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3VibWl0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlKCkpIHtcclxuICAgICAgICAgICAgICAgIHZhciBmbGF0Rm9ybURhdGEgPSB0aGlzLmdldEZsYXRGb3JtRGF0YSh0cnVlKTtcclxuICAgICAgICAgICAgICAgIHZhciBmbGF0Rm9ybURhdGFGb3JFdmVudCA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShmbGF0Rm9ybURhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZsYXRGb3JtRGF0YUZvckV2ZW50LnBhc3N3b3JkKSBkZWxldGUgZmxhdEZvcm1EYXRhRm9yRXZlbnQucGFzc3dvcmQ7IC8vbWVhbmluZ2xlc3MgaW4gdGVybXMgb2Ygc2VjdXJpdHkgYnV0IGxlc3Mgc2hvY2tpbmcgZm9yIGNsaWVudHMgOilcclxuICAgICAgICAgICAgICAgIHZhciBldmVudFJlc3VsdCA9IGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lOiAnYmVmb3JlU3VibWl0JyxcclxuICAgICAgICAgICAgICAgICAgICBzY3JlZW46IHRoaXMuX3NjcmVlblNldC5fY3VycmVudFNjcmVlbklELFxyXG4gICAgICAgICAgICAgICAgICAgIGZvcm06IHRoaXMuX0lELFxyXG4gICAgICAgICAgICAgICAgICAgIHByb2ZpbGU6IHRoaXMuX3NjcmVlblNldC5fYXBpRGF0YS5nZXRBY2NvdW50SW5mbyA/IHRoaXMuX3NjcmVlblNldC5fYXBpRGF0YS5nZXRBY2NvdW50SW5mby5wcm9maWxlIDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgZGF0YTogdGhpcy5fc2NyZWVuU2V0Ll9hcGlEYXRhLmdldEFjY291bnRJbmZvID8gdGhpcy5fc2NyZWVuU2V0Ll9hcGlEYXRhLmdldEFjY291bnRJbmZvLmRhdGEgOiB7fSxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YTogZmxhdEZvcm1EYXRhRm9yRXZlbnRcclxuICAgICAgICAgICAgICAgIH0sIHRoaXMuX3NjcmVlblNldC5fcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50UmVzdWx0ID09IGZhbHNlKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIG9QYXJhbXMgPSB0aGlzLmdldFBhcmFtc0ZvckZvcm1EYXRhKGZsYXRGb3JtRGF0YSk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fZ2lneWFDbGFzc05hbWUgPT0gJ2dpZ3lhLXJlZ2lzdGVyLWZvcm0nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHN1Y2Nlc3NTY3JlZW4gPSB0aGlzLl9lbEZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLW9uLXN1Y2Nlc3Mtc2NyZWVuJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy5fc2NyZWVuU2V0LmRvZXNTY3JlZW5IYXZlRm9ybXMoc3VjY2Vzc1NjcmVlbikpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb1BhcmFtcy5maW5hbGl6ZVJlZ2lzdHJhdGlvbiA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NyZWVuU2V0Ll9maW5hbGl6ZVJlZ2lzdHJhdGlvbk5lZWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgIGlmICghVGhpcy5fYWN0aW9ucy5zdWJtaXQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX3NjcmVlblNldC5fcC5yZWdTb3VyY2UpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc2NyZWVuU2V0Ll9wLnJlZ1NvdXJjZSA9IGRvY3VtZW50LmxvY2F0aW9uLmhyZWYuc3BsaXQoJz8nKVswXS5zcGxpdCgnIycpWzBdO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciBhclJlbWVtYmVyTWVGaWVsZHMgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUF0dHJpYnV0ZSh0aGlzLl9lbEZvcm0sICcqJywgJ25hbWUnLCAncmVtZW1iZXInKTtcclxuICAgICAgICAgICAgICAgIGlmIChhclJlbWVtYmVyTWVGaWVsZHMgJiYgYXJSZW1lbWJlck1lRmllbGRzLmxlbmd0aCA+IDApIHRoaXMuX3NjcmVlblNldC5fZXh0cmFFdmVudERhdGEucmVtZW1iZXJNZSA9IGFyUmVtZW1iZXJNZUZpZWxkc1swXS5jaGVja2VkO1xyXG5cclxuICAgICAgICAgICAgICAgIHZhciByZW1lbWJlciA9IHRoaXMuX3NjcmVlblNldC5fZXh0cmFFdmVudERhdGEucmVtZW1iZXJNZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgZm5TdWJtaXQgPSBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGhpcy5fYWN0aW9ucy5zdWJtaXQoVGhpcy5fc2NyZWVuU2V0Ll9wLCBvUGFyYW1zLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRvbnRIYW5kbGVTY3JlZW5TZXQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAocmVzcG9uc2UpIHsgcmV0dXJuIFRoaXMub25BZnRlclN1Ym1pdChyZXNwb25zZSk7IH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbWVtYmVyOiByZW1lbWJlcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2Vzc2lvbkV4cGlyYXRpb246IChyZW1lbWJlciAmJiBUaGlzLl9zY3JlZW5TZXQuX3BbJ3JlbWVtYmVyU2Vzc2lvbkV4cGlyYXRpb24nXSkgPyBUaGlzLl9zY3JlZW5TZXQuX3BbJ3JlbWVtYmVyU2Vzc2lvbkV4cGlyYXRpb24nXSA6IFRoaXMuX3NjcmVlblNldC5fcFsnc2Vzc2lvbkV4cGlyYXRpb24nXVxyXG4gICAgICAgICAgICAgICAgICAgIH0sIFRoaXMuX2FjdGlvbnMuZGVmYXVsdFN1Ym1pdFBhcmFtcyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuX3NjcmVlblNldC5kaW1TY3JlZW4oKTtcclxuICAgICAgICAgICAgICAgIHZhciBhckVsUGhvdG9VcGxvYWQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuX2VsRm9ybSwgJ2dpZ3lhLXBob3RvLXVwbG9hZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyRWxQaG90b1VwbG9hZC5sZW5ndGggPiAwKSB7IC8vZm9ybSBjb250YWlucyBwaG90byB1cGxvYWRcclxuICAgICAgICAgICAgICAgICAgICB2YXIgZWxGb3JtSWZyYW1lID0gYXJFbFBob3RvVXBsb2FkWzBdLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdpZnJhbWUnKVswXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxGb3JtSWZyYW1lLmdldEF0dHJpYnV0ZSgndXBsb2FkaW5nJykgPT0gJzEnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGVsRm9ybUlmcmFtZSwgJ2xvYWQnLCBmblN1Ym1pdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBmblN1Ym1pdCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgIHZhciB2YWxpZGF0ZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICB2YXIgYXJWYWxpZGF0aW9uRXJyb3JzID0gW107XHJcbiAgICAgICAgICAgIHZhciBlbHMgPSBnaWd5YS51dGlscy5hcnJheS5jbG9uZSh0aGlzLl9lbEZvcm0uZWxlbWVudHMpOyAvL2Nsb25lIGZvcm0gZWxlbWVudHMgYXJyYXlcclxuXHJcbiAgICAgICAgICAgIHZhciBhckNhcHRjaGEgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHRoaXMuX2VsRm9ybSwgJ2dpZ3lhLWNhcHRjaGEnKTsgLy9hbHdheXMgYWRkIGNhcHRjaGEgdG8gdmFsaWRhdGlvblxyXG4gICAgICAgICAgICBpZiAoYXJDYXB0Y2hhLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIGVscy5wdXNoKGFyQ2FwdGNoYVswXSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBmaWVsZCA9IGVsc1tpXTtcclxuICAgICAgICAgICAgICAgIHZhciB2YWxpZGF0aW9uRXJyb3IgPSB0aGlzLl9zY3JlZW5TZXQuZ2V0VmFsaWRhdGlvbkVycm9yKGZpZWxkLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm91bmRWYWxpZGF0aW9uRXJyb3IgPSB0aGlzLl9zY3JlZW5TZXQuZ2V0VmFsaWRhdGlvbkVycm9yKGZpZWxkLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0aW9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWxpZGF0ZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBhclZhbGlkYXRpb25FcnJvcnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZpZWxkOiBmaWVsZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JDb2RlOiB2YWxpZGF0aW9uRXJyb3JcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zY3JlZW5TZXQuc2hvd0ZpZWxkRXJyb3IoZmllbGQsIGJvdW5kVmFsaWRhdGlvbkVycm9yLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNob3dFcnJvcnMoYXJWYWxpZGF0aW9uRXJyb3JzLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB2YWxpZGF0ZWQ7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoYXNGbGFnOiBmdW5jdGlvbiAoYXJBbGxvd2VkRmxhZ3MsIHNGbGFncykge1xyXG4gICAgICAgICAgICBpZiAoIWFyQWxsb3dlZEZsYWdzIHx8ICFzRmxhZ3MpIHJldHVyblxyXG4gICAgICAgICAgICB2YXIgYXJGbGFncyA9IHNGbGFncy5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyRmxhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChnaWd5YS51dGlscy5hcnJheS5pbmRleE9mKGFyQWxsb3dlZEZsYWdzLCBhckZsYWdzW2ldKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dFcnJvcnM6IGZ1bmN0aW9uIChhckVycm9ycywgaXNTZXJ2ZXJFcnJvcikge1xyXG4gICAgICAgICAgICAvLyB3aWxsIHNob3cgZXJyb3JzIHRoYXQgaGF2ZSBkYXRhLWJvdW5kLXRvIHNldCB0byB0aGlzIGZvcm0gSURcclxuICAgICAgICAgICAgdmFyIGFyQm91bmRFbGVtZW50cyA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5QXR0cmlidXRlKHRoaXMuX3NjcmVlblNldC5fZWxDb250YWluZXIsICcqJywgJ2RhdGEtYm91bmQtdG8nLCB0aGlzLl9JRCk7XHJcbiAgICAgICAgICAgIHZhciBoYW5kbGVkRXJyb3JNZXNzYWdlID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyQm91bmRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsQm91bmQgPSBhckJvdW5kRWxlbWVudHNbaV07XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NvcGUgPSBlbEJvdW5kLmdldEF0dHJpYnV0ZSgnZGF0YS1zY29wZScpIHx8ICdib3VuZC1vYmplY3QtZXJyb3InO1xyXG4gICAgICAgICAgICAgICAgc2NvcGUgPSBzY29wZS50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmICghaXNTZXJ2ZXJFcnJvciAmJiBzY29wZSAhPSAnZmlyc3QtZXJyb3InICYmIHNjb3BlICE9ICdhbnktZXJyb3InICYmIHNjb3BlICE9ICdhbGwtZXJyb3JzJykgY29udGludWU7XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIHNob3VsZERpc3BsYXkgPSBmYWxzZTtcclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgYXJFcnJvck1lc3NhZ2VzID0gW107XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBlcnJJbmRleCA9IDA7IGVyckluZGV4IDwgYXJFcnJvcnMubGVuZ3RoOyBlcnJJbmRleCsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIGFyQWxsb3dlZEVycm9ycyA9IFtdO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhckFsbG93ZWRGbGFncyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxCb3VuZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXJyb3ItY29kZXMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhckFsbG93ZWRFcnJvcnMgPSBlbEJvdW5kLmdldEF0dHJpYnV0ZSgnZGF0YS1lcnJvci1jb2RlcycpLnNwbGl0KCcsJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlbEJvdW5kLmdldEF0dHJpYnV0ZSgnZGF0YS1lcnJvci1mbGFncycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyQWxsb3dlZEZsYWdzID0gZWxCb3VuZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXJyb3ItZmxhZ3MnKS5zcGxpdCgnLCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAoYXJBbGxvd2VkRXJyb3JzLmxlbmd0aCA9PT0gMCAmJiBhckFsbG93ZWRGbGFncy5sZW5ndGggPT09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHx8IGdpZ3lhLnV0aWxzLmFycmF5LmluZGV4T2YoYXJBbGxvd2VkRXJyb3JzLCBhckVycm9yc1tlcnJJbmRleF0uZXJyb3JDb2RlKSAhPSAtMVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB8fCB0aGlzLmhhc0ZsYWcoYXJBbGxvd2VkRmxhZ3MsIGFyRXJyb3JzW2VyckluZGV4XS5lcnJvckZsYWdzKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaG91bGREaXNwbGF5ID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IGFyRXJyb3JzW2VyckluZGV4XS5lcnJvck1lc3NhZ2U7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlID0gdGhpcy5fc2NyZWVuU2V0LmdldEVycm9yTWVzc2FnZShhckVycm9yc1tlcnJJbmRleF0uZXJyb3JDb2RlLCBmYWxzZSwgYXJFcnJvcnNbZXJySW5kZXhdLmZpZWxkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVycm9yTWVzc2FnZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyRXJyb3JNZXNzYWdlcy5wdXNoKGVycm9yTWVzc2FnZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzaG91bGREaXNwbGF5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLkRPTS5pc0VsZW1lbnRDbGFzcyhlbEJvdW5kLCAnZ2lneWEtZXJyb3ItZGlzcGxheScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZWRFcnJvck1lc3NhZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQoYXJCb3VuZEVsZW1lbnRzW2ldLCAnZ2lneWEtZXJyb3ItZGlzcGxheS1hY3RpdmUnKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnaWd5YS51dGlscy5ET00uaXNFbGVtZW50Q2xhc3MoZWxCb3VuZCwgJ2dpZ3lhLWVycm9yLW1zZycpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZWRFcnJvck1lc3NhZ2UgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXJyb3JNc2c7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY29wZSA9PSAnZmlyc3QtZXJyb3InIHx8IGlzU2VydmVyRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTXNnID0gYXJFcnJvck1lc3NhZ2VzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3JNc2cgPSAnPHVsPjxsaT4nICsgYXJFcnJvck1lc3NhZ2VzLmpvaW4oJzwvbGk+PGxpPicpICsgJzwvbGk+PC91bCc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJCb3VuZEVsZW1lbnRzW2ldLmlubmVySFRNTCA9IGVycm9yTXNnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChnaWd5YS51dGlscy5ET00uaXNFbGVtZW50Q2xhc3MoZWxCb3VuZCwgJ2dpZ3lhLWVycm9yLWRpc3BsYXknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00ucmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChhckJvdW5kRWxlbWVudHNbaV0sICdnaWd5YS1lcnJvci1kaXNwbGF5LWFjdGl2ZScpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLkRPTS5pc0VsZW1lbnRDbGFzcyhlbEJvdW5kLCAnZ2lneWEtZXJyb3ItbXNnJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYXJCb3VuZEVsZW1lbnRzW2ldLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIWhhbmRsZWRFcnJvck1lc3NhZ2UgJiYgaXNTZXJ2ZXJFcnJvciAmJiBhckVycm9ycy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBwcml2YXRlU2NvcGUud2Fybih0aGlzLl9zY3JlZW5TZXQuX0lELCAnTWlzc2luZyBlcnJvci1tc2cgb3IgZXJyb3ItZGlzcGxheSBmb3IgXCInICsgdGhpcy5fSUQgKyAnXCIgZm9ybSBlcnJvcicpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkFmdGVyU3VibWl0OiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdGhpcy5fc2NyZWVuU2V0LnVuZGltU2NyZWVuKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX3NjcmVlblNldC5vblNjcmVlblJlc3BvbnNlKHJlc3BvbnNlLCB0aGlzKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcnNlOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIodGhpcy5fZWxGb3JtLCAnc3VibWl0JywgZnVuY3Rpb24gKGUpIHtcclxuICAgICAgICAgICAgICAgIFRoaXMuc3VibWl0KCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAod2luZG93LmV2ZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fYWN0aW9ucy5wcmVwb3B1bGF0ZUZyb20pIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5fYWN0aW9ucy5wcmVwb3B1bGF0ZUZyb20ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnByZXBvcHVsYXRlKGdpZ3lhLnV0aWxzLm9iamVjdC5nZXRQcm9wZXJ0eUJ5U2VyaWFsaXplZE5hbWUodGhpcy5fc2NyZWVuU2V0Ll9hcGlEYXRhLCB0aGlzLl9hY3Rpb25zLnByZXBvcHVsYXRlRnJvbVtpXSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9naWd5YUNsYXNzTmFtZSA9PSAnZ2lneWEtcmVzZW5kLXZlcmlmaWNhdGlvbi1mb3JtJyAmJiB0aGlzLl9zY3JlZW5TZXQuX2FwaURhdGEuZ2V0QWNjb3VudEluZm8gJiYgdGhpcy5fc2NyZWVuU2V0Ll9hcGlEYXRhLmdldEFjY291bnRJbmZvLmVtYWlscykgeyAvL3ByZXBvcHVsYXRlIFwiZW1haWxcIiBmcm9tIHVudmVyaWZpZWRFbWFpbHMgaW4gcmVzZW5kVmVyaWZpY2F0aW9uIGZvcm1cclxuICAgICAgICAgICAgICAgIHRoaXMucHJlcG9wdWxhdGUoeyBlbWFpbDogdGhpcy5fc2NyZWVuU2V0Ll9hcGlEYXRhLmdldEFjY291bnRJbmZvLmVtYWlscy51bnZlcmlmaWVkW3RoaXMuX3NjcmVlblNldC5fYXBpRGF0YS5nZXRBY2NvdW50SW5mby5lbWFpbHMudW52ZXJpZmllZC5sZW5ndGggLSAxXSB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5fZ2lneWFDbGFzc05hbWUgPT0gJ2dpZ3lhLWxpbmstYWNjb3VudHMtZm9ybScgJiYgdGhpcy5fc2NyZWVuU2V0Ll9sYXN0U3VibWl0dGVkRm9ybVJlc3BvbnNlICYmIHRoaXMuX3NjcmVlblNldC5fbGFzdFN1Ym1pdHRlZEZvcm1SZXNwb25zZS5sb2dpbklEKSB7IC8vcHJlcG9wdWxhdGUgXCJsb2dpbklEXCIgZnJvbSB0aGUgXCJleGlzdGluZyBsb2dpbklEXCIgZXJyb3IncyBcImVtYWlsXCIgZmllbGRcclxuICAgICAgICAgICAgICAgIHRoaXMucHJlcG9wdWxhdGUoeyBsb2dpbklEOiB0aGlzLl9zY3JlZW5TZXQuX2xhc3RTdWJtaXR0ZWRGb3JtUmVzcG9uc2UubG9naW5JRCB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9jbGVhciBlcnJvcnNcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JzKFtdLCB0cnVlKTtcclxuICAgICAgICAgICAgdGhpcy5zaG93RXJyb3JzKFtdLCBmYWxzZSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRJbnN0YW5jZVJlZlN0cmluZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gJ2dpZ3lhLmFjY291bnRzLnBsdWdpbnMuc2NyZWVuU2V0Lmluc3RhbmNlc1tcXCcnICsgZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMuX3NjcmVlblNldC5fcFsnc2NyZWVuU2V0J10gKyAnXycgKyB0aGlzLl9zY3JlZW5TZXQuX3BbJ2NvbnRhaW5lcklEJ10pICsgJ1xcJ10nICsgJy5fZm9ybXNJbnN0YW5jZXNbXFwnJyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9JRCkgKyAnXFwnXSc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcHJpdmF0ZVNjb3BlLnNjcmVlblNldC5wcm90b3R5cGUgPSB7XHJcbiAgICAgICAgX0lEOiBudWxsLFxyXG4gICAgICAgIF9lbFNjcmVlblNldDogbnVsbCxcclxuICAgICAgICBfZWxDb250YWluZXI6IG51bGwsXHJcbiAgICAgICAgX3A6IG51bGwsXHJcbiAgICAgICAgX2N1cnJlbnRTY3JlZW5JRDogbnVsbCxcclxuICAgICAgICBfYXBpRGF0YTogbnVsbCxcclxuICAgICAgICBfb05lZWRlZERhdGE6IG51bGwsXHJcbiAgICAgICAgX25leHRTY3JlZW5FbGVtZW50OiBudWxsLFxyXG4gICAgICAgIF9sYXN0U3VibWl0dGVkRm9ybVJlc3BvbnNlOiBudWxsLFxyXG4gICAgICAgIF9maW5hbGl6ZVJlZ2lzdHJhdGlvbk5lZWRlZDogZmFsc2UsXHJcbiAgICAgICAgX2lzRGlhbG9nOiBmYWxzZSxcclxuICAgICAgICBfZWxDYXB0aW9uOiBudWxsLFxyXG4gICAgICAgIF9mb3Jtc0luc3RhbmNlczogbnVsbCxcclxuICAgICAgICBfbGFzdFN1Ym1pdHRlZEZvcm1JRDogbnVsbCxcclxuICAgICAgICBfZXh0cmFFdmVudERhdGE6IG51bGwsXHJcbiAgICAgICAgX29yaWdpbmFsRWxlbWVudHM6IG51bGwsXHJcbiAgICAgICAgX2lzUmVtb3RlOiBmYWxzZSxcclxuICAgICAgICBfcmFuZG9tOiBudWxsLFxyXG4gICAgICAgIF9jb250YWluZXJIaXN0b3J5OiBudWxsLFxyXG4gICAgICAgIF9zdGFydFNjcmVlbjogbnVsbCxcclxuICAgICAgICBfY29udGFpbmVySW5zdGFuY2VzOiBudWxsLFxyXG4gICAgICAgIF9iYWNrSGFuZGxlcjogbnVsbCwgLy9mb3IgbW9iaWxlIGRpYWxvZ1xyXG4gICAgICAgIGluaXQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdGhpcy50ZW1wbGF0ZXMgPSBwcml2YXRlU2NvcGUuY3JlYXRlRGVmYXVsdFRlbXBsYXRlcygpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcC5jc3NQcmVmaXggfHwgIXByaXZhdGVTY29wZS5hZGRlZENTUykge1xyXG4gICAgICAgICAgICAgICAgcHVibGljU2NvcGUuX2luamVjdENTUyh0aGlzLl9wKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLl9mb3Jtc0luc3RhbmNlcyA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLl9leHRyYUV2ZW50RGF0YSA9IHt9O1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXJJbnN0YW5jZXMgPSBbXTtcclxuICAgICAgICAgICAgaWYgKCFwcml2YXRlU2NvcGUuX29yaWdpbmFsRWxlbWVudHNbdGhpcy5fcFsnc2NyZWVuU2V0J11dKSBwcml2YXRlU2NvcGUuX29yaWdpbmFsRWxlbWVudHNbdGhpcy5fcFsnc2NyZWVuU2V0J11dID0ge307XHJcbiAgICAgICAgICAgIHRoaXMuX29yaWdpbmFsRWxlbWVudHMgPSBwcml2YXRlU2NvcGUuX29yaWdpbmFsRWxlbWVudHNbdGhpcy5fcFsnc2NyZWVuU2V0J11dO1xyXG4gICAgICAgICAgICB0aGlzLl9hcGlEYXRhID0ge307XHJcbiAgICAgICAgICAgIHZhciBzY3JlZW5zZXRJRCA9IChnaWd5YS5sb2NhbEluZm8uaXNNb2JpbGUgJiYgdGhpcy5fcFsnbW9iaWxlU2NyZWVuU2V0J10pID8gdGhpcy5fcFsnbW9iaWxlU2NyZWVuU2V0J10gOiB0aGlzLl9wWydzY3JlZW5TZXQnXTtcclxuICAgICAgICAgICAgdGhpcy5fZWxTY3JlZW5TZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChzY3JlZW5zZXRJRCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzRGlhbG9nID0gdGhpcy5fcC5pc1BvcHVwO1xyXG4gICAgICAgICAgICB0aGlzLl9yYW5kb20gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICB0aGlzLl9JRCA9IHNjcmVlbnNldElEO1xyXG5cclxuICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHsgZXZlbnROYW1lOiAnbG9hZCcgfSwgdGhpcy5fcCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2VsU2NyZWVuU2V0KSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgVGhpcyA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NyZWVuU2V0Q29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ19fZ2lneWFTY3JlZW5TZXRfJyArIHNjcmVlbnNldElEKTtcclxuICAgICAgICAgICAgICAgIHZhciBhclNjcmVlblNldHMgPSBzY3JlZW5TZXRDb250YWluZXIgPyBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKHNjcmVlblNldENvbnRhaW5lciwgJ2dpZ3lhLXNjcmVlbi1zZXQnKSA6IFtdO1xyXG4gICAgICAgICAgICAgICAgVGhpcy5faXNSZW1vdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgaWYgKHNjcmVlblNldENvbnRhaW5lciAmJiBhclNjcmVlblNldHMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsU2NyZWVuU2V0ID0gYXJTY3JlZW5TZXRzWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgIFRoaXMuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuU2V0Q29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgc2NyZWVuU2V0Q29udGFpbmVyLmlkID0gJ19fZ2lneWFTY3JlZW5TZXRfJyArIHNjcmVlbnNldElEO1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcmVlblNldENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hcHBlbmRUb0JvZHkoc2NyZWVuU2V0Q29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5hY2NvdW50cy5nZXRTY3JlZW5TZXRzKHRoaXMuX3AsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogJ2h0bWwsY3NzJywgc2NyZWVuU2V0SURzOiBzY3JlZW5zZXRJRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FsbGJhY2s6IGZ1bmN0aW9uIChyZXMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3JDb2RlID09IDAgJiYgcmVzLnNjcmVlblNldHMgJiYgcmVzLnNjcmVlblNldHMubGVuZ3RoID4gMCAmJiByZXMuc2NyZWVuU2V0c1swXS5odG1sKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG9TY3JlZW5TZXQgPSByZXMuc2NyZWVuU2V0c1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JlZW5TZXRDb250YWluZXIuaW5uZXJIVE1MID0gb1NjcmVlblNldC5odG1sO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvU2NyZWVuU2V0LmNzcykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS5nbG9iYWwuYWRkQ1NTKG9TY3JlZW5TZXQuY3NzKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5fZWxTY3JlZW5TZXQgPSBzY3JlZW5TZXRDb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuc3RhcnQoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEVycm9yRnJvbVJlc3BvbnNlKFRoaXMuX3AsIHJlcyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc3RhcnQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIFRoaXMgPSB0aGlzO1xyXG4gICAgICAgICAgICBnaWd5YS5zb2NpYWxpemUuYWRkRXZlbnRIYW5kbGVycyh7IGxpc3RlbmVyVHlwZTogJ2NvbXBvbmVudCcgfSwge1xyXG4gICAgICAgICAgICAgICAgb25Mb2dpbjogZnVuY3Rpb24gKCkgeyBUaGlzLl9maW5hbGl6ZVJlZ2lzdHJhdGlvbk5lZWRlZCA9IGZhbHNlOyB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZWxDb250YWluZXIgPSB0aGlzLmdldENvbnRhaW5lcigpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2VsQ29udGFpbmVyKSByZXR1cm47XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9zdGFydFNjcmVlbiA9IHRoaXMuX3Auc3RhcnRTY3JlZW4gfHwgdGhpcy5fZWxTY3JlZW5TZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXN0YXJ0LXNjcmVlbicpO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX3N0YXJ0U2NyZWVuKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxzID0gdGhpcy5fZWxTY3JlZW5TZXQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGVscy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fc3RhcnRTY3JlZW4gPSBlbHNbMF0uZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLWlkJykgfHwgZWxzWzBdLmlkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnByZXBhcmVFbGVtZW50cygpO1xyXG4gICAgICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzTW9iaWxlKSB7XHJcbiAgICAgICAgICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9wLmluaXRpYWxSZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5vblNjcmVlblJlc3BvbnNlKHRoaXMuX3AuaW5pdGlhbFJlc3BvbnNlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc3dpdGNoU2NyZWVuKHRoaXMuX3N0YXJ0U2NyZWVuKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGlkZTogZnVuY3Rpb24gKHJlYXNvbiwgcmVzcG9uc2UsIGFsd2F5c0NsZWFyQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgIHRoaXMudW5kaW1TY3JlZW4oKTtcclxuICAgICAgICAgICAgdmFyIGVsQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGhpcy5fcC5jb250YWluZXJJRCk7IC8vbm90IHVzaW5nIHRoaXMuX2VsQ29udGFpbmVyIGJlY2F1c2UgaXQgY291bGQgYmUgYSBkaWFsb2dcclxuICAgICAgICAgICAgaWYgKGVsQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fcC5pc1BvcHVwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxDb250YWluZXIucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbENvbnRhaW5lcik7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFsd2F5c0NsZWFyQ29udGFpbmVyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxDb250YWluZXIuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGlmcmVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dpZ3lhX2lmcl8nICsgdGhpcy5fcC5jb250YWluZXJJRCk7XHJcbiAgICAgICAgICAgIGlmIChpZnJlbCAhPSBudWxsKSBpZnJlbC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGlmcmVsKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBvRXZlbnQgPSB7XHJcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdoaWRlJyxcclxuICAgICAgICAgICAgICAgIHJlYXNvbjogcmVhc29uXHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UgJiYgcmVzcG9uc2UudXNlcilcclxuICAgICAgICAgICAgICAgIG9FdmVudC51c2VyID0gcmVzcG9uc2UudXNlcjtcclxuXHJcbiAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldChvRXZlbnQsIHRoaXMuX3ApO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0Q29udGFpbmVyOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lcklEID0gdGhpcy5fcFsnY29udGFpbmVySUQnXTtcclxuICAgICAgICAgICAgdmFyIGNvbnRhaW5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGNvbnRhaW5lcklEKTtcclxuICAgICAgICAgICAgaWYgKCFjb250YWluZXIpIHJldHVybjtcclxuICAgICAgICAgICAgdmFyIHRlbXBsYXRlSUQ7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5faXNEaWFsb2cpIHtcclxuICAgICAgICAgICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNNb2JpbGUpIHsgLy9tb2JpbGUgZGlhbG9nIHNob3VsZCBiZSBoaWRkZW4gb24gYmFja1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRGlhbG9nQmFja0xpc3RlbmVyKGZ1bmN0aW9uICgpIHsgVGhpcy5oaWRlKCdjYW5jZWxlZCcpIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIHRlbXBsYXRlSUQgPSAnc2NyZWVuU2V0JztcclxuICAgICAgICAgICAgICAgICAgICBjb250YWluZXIuY2xhc3NOYW1lID0gJ2dpZ3lhLXNjcmVlbi1kaWFsb2ctbW9iaWxlJztcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5zY3JvbGxIZWlnaHQgPiBnaWd5YS51dGlscy52aWV3cG9ydC5nZXRJbm5lclNpemUoKS5oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS5taW5IZWlnaHQgPSBkb2N1bWVudC5ib2R5LnNjcm9sbEhlaWdodCArICdweCc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZUlEID0gJ3NjcmVlblNldC1kaWFsb2cnO1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci5jbGFzc05hbWUgPSAnZ2lneWEtc2NyZWVuLWRpYWxvZyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0ZW1wbGF0ZUlEID0gJ3NjcmVlblNldCc7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGlubmVyQ29udGFpbmVySUQgPSBjb250YWluZXJJRCArICdfY29udGVudCc7XHJcblxyXG4gICAgICAgICAgICBjb250YWluZXIuaW5uZXJIVE1MID0gZ2lneWEudXRpbHMudGVtcGxhdGVzLmZpbGwodGhpcy50ZW1wbGF0ZXMuZ2V0KHRlbXBsYXRlSUQpLCB7IGlubmVyQ29udGFpbmVySUQ6IGlubmVyQ29udGFpbmVySUQgfSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsQ2FwdGlvbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlubmVyQ29udGFpbmVySUQgKyAnX2NhcHRpb24nKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbENsb3NlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5uZXJDb250YWluZXJJRCArICdfY2xvc2UnKTtcclxuICAgICAgICAgICAgaWYgKGVsQ2xvc2UpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGVsQ2xvc2UsICdjbGljaycsIGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgICAgICAgICBUaGlzLmhpZGUoJ2NhbmNlbGVkJyk7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaW5uZXJDb250YWluZXJJRCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwcmVwYXJlRWxlbWVudHM6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgdmFyIGVscyA9IHRoaXMuX2VsU2NyZWVuU2V0LmdldEVsZW1lbnRzQnlUYWdOYW1lKCcqJyk7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWwgPSBlbHNbaV07XHJcbiAgICAgICAgICAgICAgICBpZiAoIWVsLmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC1pZCcpICYmICFlbC5nZXRBdHRyaWJ1dGUoJ2R1bW15JykgJiYgKGVsLmlkIHx8IChlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09ICdpbnB1dCcpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC1pZCcsIGVsLmlkKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWwudHlwZSA9PSAndGV4dCcgfHwgZWwudHlwZSA9PSAncGFzc3dvcmQnKSBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdmFsdWUnLCBlbC52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuaWQgPSAnX19naWdfaW5wdXRfJyArIChlbC5pZCA/IGVsLmlkIDogKChuZXcgRGF0ZSgpKS5nZXRUaW1lKCkgKyAnXycgKyBpKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLXNjcmVlbnNldC1lbGVtZW50LWlkJywgZWwuaWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpID09ICdmb3JtJyAmJiBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb24tc3VjY2Vzcy1zY3JlZW4nKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBhdHRyVmFsdWUgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb24tc3VjY2Vzcy1zY3JlZW4nKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc3VjY2Vzc1NjcmVlbiA9IHRoaXMuY2hvb3NlTmV4dFNjcmVlbihhdHRyVmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsLnNldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC1zdWNjZXNzLXNjcmVlbicsIGF0dHJWYWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdkYXRhLW9uLXN1Y2Nlc3Mtc2NyZWVuJywgc3VjY2Vzc1NjcmVlbik7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEV4dHJhUHJvZmlsZUZpZWxkczogZnVuY3Rpb24gKGVsRm9ybSwgbWlzc2luZ09ubHkpIHtcclxuICAgICAgICAgICAgdmFyIGFyRmllbGRzID0gZWxGb3JtLmVsZW1lbnRzO1xyXG4gICAgICAgICAgICB2YXIgYXJGaWVsZE5hbWVzID0gW107XHJcbiAgICAgICAgICAgIHZhciBvRmllbGROYW1lcyA9IHt9O1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyRmllbGRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmllbGQgPSBhckZpZWxkc1tpXTtcclxuICAgICAgICAgICAgICAgIGlmICghZmllbGQubmFtZSB8fCBmaWVsZC5uYW1lLmluZGV4T2YoJ2RhdGEuJykgPT0gMCkgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICB2YXIgZmllbGROYW1lID0gZmllbGQubmFtZS5yZXBsYWNlKCdwcm9maWxlLicsICcnKS5zcGxpdCgnLicpWzBdO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFvRmllbGROYW1lc1tmaWVsZE5hbWVdICYmICFwcml2YXRlU2NvcGUub0Zvcm1zQWN0aW9uc1snZ2lneWEtcHJvZmlsZS1mb3JtJ10uc3BlY2lhbEZpZWxkc1tmaWVsZE5hbWVdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb0ZpZWxkTmFtZXNbZmllbGROYW1lXSA9IDE7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFtaXNzaW5nT25seSB8fCAhdGhpcy5fYXBpRGF0YS5nZXRBY2NvdW50SW5mbyB8fCAhdGhpcy5fYXBpRGF0YS5nZXRBY2NvdW50SW5mby5wcm9maWxlIHx8ICF0aGlzLl9hcGlEYXRhLmdldEFjY291bnRJbmZvLnByb2ZpbGVbZmllbGROYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhckZpZWxkTmFtZXMucHVzaChmaWVsZE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYXJGaWVsZE5hbWVzLmpvaW4oJywnKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGlzUmVxdWlyZWRGaWVsZDogZnVuY3Rpb24gKGJvdW5kVG9OYW1lKSB7XHJcbiAgICAgICAgICAgIHZhciBpc1JlcXVpcmVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgIHZhciBmaWVsZE5hbWVzcGFjZSA9IGJvdW5kVG9OYW1lLnNwbGl0KCcuJylbMF07XHJcbiAgICAgICAgICAgIHZhciBzY2hlbWFOYW1lID0gZmllbGROYW1lc3BhY2UgPT0gJ2RhdGEnID8gJ2RhdGFTY2hlbWEnIDogJ3Byb2ZpbGVTY2hlbWEnO1xyXG4gICAgICAgICAgICBpZiAoZmllbGROYW1lc3BhY2UgPT0gJ2RhdGEnIHx8IGZpZWxkTmFtZXNwYWNlID09ICdwcm9maWxlJykge1xyXG4gICAgICAgICAgICAgICAgYm91bmRUb05hbWUgPSBib3VuZFRvTmFtZS5yZXBsYWNlKGZpZWxkTmFtZXNwYWNlICsgJy4nLCAnJyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGlzUmVxdWlyZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgaWYgKHByaXZhdGVTY29wZS5hbHdheXNSZXF1aXJlZEZpZWxkc1tib3VuZFRvTmFtZV0gfHwgYm91bmRUb05hbWUgPT0gJ2VtYWlsJykge1xyXG4gICAgICAgICAgICAgICAgaXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5fYXBpRGF0YS5nZXRTY2hlbWEgJiYgdGhpcy5fYXBpRGF0YS5nZXRTY2hlbWFbc2NoZW1hTmFtZV0gJiYgdGhpcy5fYXBpRGF0YS5nZXRTY2hlbWFbc2NoZW1hTmFtZV0uZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgc2NoZW1hID0gdGhpcy5fYXBpRGF0YS5nZXRTY2hlbWFbc2NoZW1hTmFtZV0uZmllbGRzW2JvdW5kVG9OYW1lXTtcclxuICAgICAgICAgICAgICAgIGlmIChzY2hlbWEgJiYgc2NoZW1hLnJlcXVpcmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaXNSZXF1aXJlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiBpc1JlcXVpcmVkO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VGV4dDogZnVuY3Rpb24gKHRleHRLZXksIHJlcGxhY2VTdHIsIHdpdGhTdHIpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGdpZ3lhLnBsdWdpblV0aWxzLmxhbmcuZ2V0TG9jYWxpemVkVGV4dCgnZ2lneWEuc2VydmljZXMuYWNjb3VudHMucGx1Z2lucy5zY3JlZW5TZXQuanMnLCB0ZXh0S2V5LCB0aGlzLl9wLmxhbmcsIHJlcGxhY2VTdHIsIHdpdGhTdHIpO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0U2NyZWVuRWxlbWVudDogZnVuY3Rpb24gKHNjcmVlbklEKSB7XHJcbiAgICAgICAgICAgIGlmICghc2NyZWVuSUQpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB2YXIgYXJTY3JlZW5zID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlBdHRyaWJ1dGUodGhpcy5fZWxTY3JlZW5TZXQsICcqJywgJ2RhdGEtb3JpZ2luYWwtaWQnLCBzY3JlZW5JRCk7XHJcbiAgICAgICAgICAgIHJldHVybiBhclNjcmVlbnNbMF07XHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRFbGVtZW50Rm9ybTogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIHdoaWxlIChlbCAhPSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnZm9ybScpIHJldHVybiBlbDtcclxuICAgICAgICAgICAgICAgIGVsID0gZWwucGFyZW50Tm9kZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdXBkYXRlQWNjb3VudEluZm86IGZ1bmN0aW9uIChmbkNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgZ2lneWEuYWNjb3VudHMuZ2V0QWNjb3VudEluZm8odGhpcy5fcCwge1xyXG4gICAgICAgICAgICAgICAgaW5jbHVkZTogJ3Byb2ZpbGUsZGF0YScsXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjazogZnVuY3Rpb24gKHJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGhpcy5vbkFjY291bnRJbmZvKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgICAgICBmbkNhbGxiYWNrKHJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbkFjY291bnRJbmZvOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgdmFyIGFjY291bnRJbmZvID0gcmVzcG9uc2U7XHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5hY2NvdW50SW5mbykgYWNjb3VudEluZm8gPSByZXNwb25zZS5hY2NvdW50SW5mbztcclxuXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5fYXBpRGF0YS5nZXRBY2NvdW50SW5mbykgdGhpcy5fYXBpRGF0YS5nZXRBY2NvdW50SW5mbyA9IHt9O1xyXG4gICAgICAgICAgICBpZiAoYWNjb3VudEluZm8ucHJvZmlsZSkgdGhpcy5fYXBpRGF0YS5nZXRBY2NvdW50SW5mby5wcm9maWxlID0gYWNjb3VudEluZm8ucHJvZmlsZTtcclxuICAgICAgICAgICAgaWYgKGFjY291bnRJbmZvLmRhdGEpIHRoaXMuX2FwaURhdGEuZ2V0QWNjb3VudEluZm8uZGF0YSA9IGFjY291bnRJbmZvLmRhdGE7XHJcbiAgICAgICAgICAgIGlmIChhY2NvdW50SW5mby5lbWFpbHMpIHRoaXMuX2FwaURhdGEuZ2V0QWNjb3VudEluZm8uZW1haWxzID0gYWNjb3VudEluZm8uZW1haWxzO1xyXG4gICAgICAgICAgICBpZiAoYWNjb3VudEluZm8ubG9naW5JRHMpIHRoaXMuX2FwaURhdGEuZ2V0QWNjb3VudEluZm8ubG9naW5JRHMgPSBhY2NvdW50SW5mby5sb2dpbklEcztcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uQXBpRGF0YTogZnVuY3Rpb24gKHJlc3BvbnNlLCBjYWxsYmFjaykge1xyXG4gICAgICAgICAgICB0aGlzLl9hcGlEYXRhW3Jlc3BvbnNlLm9wZXJhdGlvbi5yZXBsYWNlKCcvYWNjb3VudHMuJywgJycpXSA9IHJlc3BvbnNlO1xyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucmVnVG9rZW4pIHRoaXMuX3AucmVnVG9rZW4gPSByZXNwb25zZS5yZWdUb2tlbjtcclxuICAgICAgICAgICAgdmFyIGdvdEFsbE5lZWRlZERhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBtZXRob2ROYW1lIGluIHRoaXMuX29OZWVkZWREYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2FwaURhdGFbbWV0aG9kTmFtZV0pIHtcclxuICAgICAgICAgICAgICAgICAgICBnb3RBbGxOZWVkZWREYXRhID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGdvdEFsbE5lZWRlZERhdGEpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMub25TY3JlZW5EYXRhKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNob29zZU5leHRTY3JlZW46IGZ1bmN0aW9uIChuZXh0U2NyZWVuVmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKCFuZXh0U2NyZWVuVmFsdWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBwb3NzaWJsZVNjcmVlbnMgPSBuZXh0U2NyZWVuVmFsdWUuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgaWYgKHBvc3NpYmxlU2NyZWVucy5sZW5ndGggPT09IDEpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBwb3NzaWJsZVNjcmVlbnNbMF0uc3BsaXQoJzonKVswXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gV2VpZ2h0ZWQgc2NyZWVuIHBvc3NpYmlsaXRpZXNcclxuICAgICAgICAgICAgZWxzZSBpZiAocG9zc2libGVTY3JlZW5zLmxlbmd0aCA+IDEpIHtcclxuICAgICAgICAgICAgICAgIHZhciB3ZWlnaHRTdW0gPSAwO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwb3NzaWJsZVNjcmVlbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgd2VpZ2h0ID0gMTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydHMgPSBwb3NzaWJsZVNjcmVlbnNbaV0uc3BsaXQoJzonKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcnRzLmxlbmd0aCA+IDEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdlaWdodCA9IHBhcnNlSW50KHBhcnRzWzFdKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgd2VpZ2h0U3VtICs9IHdlaWdodDtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgcmFuZG9tID0gdGhpcy5fcmFuZG9tICogd2VpZ2h0U3VtO1xyXG5cclxuICAgICAgICAgICAgICAgIHdlaWdodFN1bSA9IDA7XHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBvc3NpYmxlU2NyZWVucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciB3ZWlnaHQgPSAxO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0cyA9IHBvc3NpYmxlU2NyZWVuc1tpXS5zcGxpdCgnOicpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAocGFydHMubGVuZ3RoID4gMSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2VpZ2h0ID0gcGFyc2VJbnQocGFydHNbMV0pO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB3ZWlnaHRTdW0gKz0gd2VpZ2h0O1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICh3ZWlnaHRTdW0gPj0gcmFuZG9tKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0c1swXTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRvZXNTY3JlZW5IYXZlRm9ybXM6IGZ1bmN0aW9uIChzY3JlZW5JRCkge1xyXG4gICAgICAgICAgICB2YXIgZWxTY3JlZW4gPSB0aGlzLmdldFNjcmVlbkVsZW1lbnQoc2NyZWVuSUQpO1xyXG4gICAgICAgICAgICBpZiAoZWxTY3JlZW4pIHtcclxuICAgICAgICAgICAgICAgIHZhciBhckZvcm1zID0gZWxTY3JlZW4uZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2Zvcm0nKTtcclxuICAgICAgICAgICAgICAgIHZhciBoYXNUZmFXaWRnZXQgPSBnaWd5YS51dGlscy5ET00uZ2V0RWxlbWVudHNCeUNsYXNzKGVsU2NyZWVuLCAnZ2lneWEtdGZhJykubGVuZ3RoID4gMDtcclxuICAgICAgICAgICAgICAgIGlmIChhckZvcm1zLmxlbmd0aCA+IDAgfHwgaGFzVGZhV2lkZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLy8gUmV0dXJucyB3aGV0aGVyIHNjcmVlbiB3YXMgc3dpdGNoZWRcclxuICAgICAgICBzd2l0Y2hTY3JlZW46IGZ1bmN0aW9uIChzY3JlZW5JRCwgcmVzcG9uc2UsIG9Gb3JtKSB7XHJcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuXHJcbiAgICAgICAgICAgIGlmIChzY3JlZW5JRCA9PSAnX2ZpbmlzaCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZW5kRmxvdygpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdmFyIGVsU2NyZWVuID0gdGhpcy5nZXRTY3JlZW5FbGVtZW50KHNjcmVlbklEKTtcclxuICAgICAgICAgICAgaWYgKCFlbFNjcmVlbikge1xyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZVNjb3BlLndhcm4odGhpcy5fSUQsICdNaXNzaW5nIHNjcmVlbiBcIicgKyBzY3JlZW5JRCArICdcIicpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9jdXJyZW50U2NyZWVuSUQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2ZpbmFsaXplUmVnaXN0cmF0aW9uTmVlZGVkICYmICF0aGlzLmRvZXNTY3JlZW5IYXZlRm9ybXMoc2NyZWVuSUQpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEZsb3cocmVzcG9uc2UsIG9Gb3JtLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9uZXh0U2NyZWVuRWxlbWVudCA9IGVsU2NyZWVuO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2N1cnJlbnRTY3JlZW5JRCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zZXROZXh0U2NyZWVuU2l6ZSgpOyAvLyBkcmF3IGFuIGVtcHR5IHNjcmVlbiB3aXRoIGEgcHJvZ3Jlc3NcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHNob3VsZFdhaXRGb3JEYXRhID0gZmFsc2U7XHJcblxyXG4gICAgICAgICAgICB2YXIgYXJGb3JtcyA9IGVsU2NyZWVuLmdldEVsZW1lbnRzQnlUYWdOYW1lKCdmb3JtJyk7XHJcblxyXG4gICAgICAgICAgICB2YXIgZXh0cmFQcm9maWxlRmllbGRzID0gJyc7XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyRm9ybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGV4dHJhUHJvZmlsZUZpZWxkcyArPSBleHRyYVByb2ZpbGVGaWVsZHMgPyAnLCcgOiAnJyArIHRoaXMuZ2V0RXh0cmFQcm9maWxlRmllbGRzKGFyRm9ybXNbaV0sIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyRm9ybXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBmb3JtVHlwZSA9IHByaXZhdGVTY29wZS5nZXRGaXJzdEdpZ3lhQ2xhc3MoYXJGb3Jtc1tpXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgb0Zvcm1BY3Rpb25zID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKHByaXZhdGVTY29wZS5vRm9ybXNBY3Rpb25zW2Zvcm1UeXBlXSk7XHJcbiAgICAgICAgICAgICAgICB2YXIgY29udGFpbmVycyA9IHByaXZhdGVTY29wZS5jb250YWluZXJDb25kaXRpb25zLmdldEhpc3RvcnlOZWVkZWRDb250YWluZXJzKGFyRm9ybXNbaV0pO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChjb250YWluZXJzICYmIGNvbnRhaW5lcnMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghb0Zvcm1BY3Rpb25zKSBvRm9ybUFjdGlvbnMgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIW9Gb3JtQWN0aW9ucy5uZWVkZWREYXRhKSBvRm9ybUFjdGlvbnMubmVlZGVkRGF0YSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgIG9Gb3JtQWN0aW9ucy5uZWVkZWREYXRhWydnZXRVc2VyU2V0dGluZ3MnXSA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFyYW1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBncm91cDogJ2dpZ3lhX2NvbnRhaW5lcl9oaXN0b3J5LScgKyB0aGlzLl9JRCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ1Rva2VuOiByZXNwb25zZSA/IHJlc3BvbnNlLnJlZ1Rva2VuIDogbnVsbCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc2FibGVMb2NhbFNldHRpbmdzOiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhY2hlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKG9Gb3JtQWN0aW9ucyAmJiBvRm9ybUFjdGlvbnMubmVlZGVkRGF0YSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX29OZWVkZWREYXRhID0gb0Zvcm1BY3Rpb25zLm5lZWRlZERhdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIG1ldGhvZE5hbWUgaW4gdGhpcy5fb05lZWRlZERhdGEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhcmFtcyA9IHRoaXMuX29OZWVkZWREYXRhW21ldGhvZE5hbWVdLnBhcmFtcztcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGRpc2FibGVDYWNoZSA9IGdpZ3lhLnV0aWxzLnZhbGlkYXRpb24uaXNFeHBsaWNpdEZhbHNlKHRoaXMuX29OZWVkZWREYXRhW21ldGhvZE5hbWVdLmNhY2hlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGRpc2FibGVDYWNoZSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLl9hcGlEYXRhW21ldGhvZE5hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9hcGlEYXRhIHx8ICF0aGlzLl9hcGlEYXRhW21ldGhvZE5hbWVdIHx8IChtZXRob2ROYW1lID09ICdnZXRBY2NvdW50SW5mbycgJiYgZXh0cmFQcm9maWxlRmllbGRzICE9ICcnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuX2FwaURhdGEgJiYgdGhpcy5fYXBpRGF0YVttZXRob2ROYW1lXSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fYXBpRGF0YVttZXRob2ROYW1lXTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRpbVNjcmVlbigpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkV2FpdEZvckRhdGEgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4dHJhUGFyYW1zID0geyBjYWxsYmFjazogZnVuY3Rpb24gKHJlc3BvbnNlLCBjYWxsYmFjaykgeyByZXR1cm4gVGhpcy5vbkFwaURhdGEocmVzcG9uc2UsIGNhbGxiYWNrKTsgfSB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGhvZE5hbWUgPT0gJ2dldEFjY291bnRJbmZvJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleHRyYVByb2ZpbGVGaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXh0cmFQYXJhbXNbJ2V4dHJhUHJvZmlsZUZpZWxkcyddID0gZXh0cmFQcm9maWxlRmllbGRzO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWV0aG9kID0gZ2lneWEuYWNjb3VudHNbbWV0aG9kTmFtZV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIW1ldGhvZCkgbWV0aG9kID0gZ2lneWEuc29jaWFsaXplW21ldGhvZE5hbWVdO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhvZCh0aGlzLl9wLCBwYXJhbXMsIGV4dHJhUGFyYW1zKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoIXNob3VsZFdhaXRGb3JEYXRhKSB0aGlzLm9uU2NyZWVuRGF0YSgpO1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uU2NyZWVuRGF0YTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgc2NyZWVuSUQgPSB0aGlzLl9uZXh0U2NyZWVuRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtaWQnKTtcclxuICAgICAgICAgICAgdmFyIGV2ZW50UmVzdWx0ID0gZ2lneWEuZXZlbnRzLmRpc3BhdGNoRm9yV2lkZ2V0KHtcclxuICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2JlZm9yZVNjcmVlbkxvYWQnLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNjcmVlbjogdGhpcy5fY3VycmVudFNjcmVlbklELFxyXG4gICAgICAgICAgICAgICAgZm9ybTogdGhpcy5fbGFzdFN1Ym1pdHRlZEZvcm1JRCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUodGhpcy5fbGFzdFN1Ym1pdHRlZEZvcm1SZXNwb25zZSksXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlOiB0aGlzLl9hcGlEYXRhLmdldEFjY291bnRJbmZvID8gdGhpcy5fYXBpRGF0YS5nZXRBY2NvdW50SW5mby5wcm9maWxlIDoge30sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLl9hcGlEYXRhLmdldEFjY291bnRJbmZvID8gdGhpcy5fYXBpRGF0YS5nZXRBY2NvdW50SW5mby5kYXRhIDoge30sXHJcbiAgICAgICAgICAgICAgICBuZXh0U2NyZWVuOiBzY3JlZW5JRFxyXG4gICAgICAgICAgICB9LCB0aGlzLl9wKTtcclxuICAgICAgICAgICAgdGhpcy51bmRpbVNjcmVlbigpO1xyXG4gICAgICAgICAgICBpZiAoZXZlbnRSZXN1bHQgPT0gZmFsc2UpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9lbENhcHRpb24pIHtcclxuICAgICAgICAgICAgICAgIHZhciBjYXB0aW9uID0gdGhpcy5fbmV4dFNjcmVlbkVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWNhcHRpb24nKTtcclxuICAgICAgICAgICAgICAgIGlmICghY2FwdGlvbikgY2FwdGlvbiA9IHRoaXMuX2VsU2NyZWVuU2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1jYXB0aW9uJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWNhcHRpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICBjYXB0aW9uID0gJyZuYnNwOyc7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF0aGlzLl9pc0RpYWxvZykgdGhpcy5fZWxDYXB0aW9uLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsQ2FwdGlvbi5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9lbENhcHRpb24uaW5uZXJIVE1MID0gY2FwdGlvbjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5zZXROZXh0U2NyZWVuU2l6ZSgpO1xyXG5cclxuICAgICAgICAgICAgLy90aGlzLl9lbENvbnRhaW5lci5pbm5lckhUTUwgPSB0aGlzLl9uZXh0U2NyZWVuRWxlbWVudC5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsQ29udGFpbmVyLmlubmVySFRNTCA9ICcnO1xyXG4gICAgICAgICAgICB0aGlzLl9jb250YWluZXJJbnN0YW5jZXMgPSBbXTtcclxuICAgICAgICAgICAgdGhpcy5fZm9ybXNJbnN0YW5jZXMgPSB7fTtcclxuXHJcbiAgICAgICAgICAgIHZhciBlbFNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICBlbFNjcmVlbi5jbGFzc05hbWUgPSB0aGlzLl9uZXh0U2NyZWVuRWxlbWVudC5jbGFzc05hbWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9uZXh0U2NyZWVuRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykpIGVsU2NyZWVuLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCB0aGlzLl9uZXh0U2NyZWVuRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykpO1xyXG4gICAgICAgICAgICBlbFNjcmVlbi5pZCA9IHRoaXMuX25leHRTY3JlZW5FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC1pZCcpIHx8IHRoaXMuX25leHRTY3JlZW5FbGVtZW50LmlkO1xyXG4gICAgICAgICAgICBlbFNjcmVlbi5pbm5lckhUTUwgPSB0aGlzLl9uZXh0U2NyZWVuRWxlbWVudC5pbm5lckhUTUw7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsQ29udGFpbmVyLmFwcGVuZENoaWxkKGVsU2NyZWVuKTtcclxuXHJcbiAgICAgICAgICAgIHZhciBzY3JlZW5PbkV4aXN0aW5nTG9naW4gPSB0aGlzLl9uZXh0U2NyZWVuRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb24tZXhpc3RpbmctbG9naW4taWRlbnRpZmllci1zY3JlZW4nKSB8fCAnJztcclxuICAgICAgICAgICAgdmFyIHNjcmVlbk9uUGVuZGluZyA9IHRoaXMuX25leHRTY3JlZW5FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vbi1wZW5kaW5nLXJlZ2lzdHJhdGlvbi1zY3JlZW4nKSB8fCAnJztcclxuICAgICAgICAgICAgdmFyIHNjcmVlbk9uUGVuZGluZ1ZlcmlmaWNhdGlvbiA9IHRoaXMuX25leHRTY3JlZW5FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vbi1wZW5kaW5nLXZlcmlmaWNhdGlvbi1zY3JlZW4nKSB8fCAnJztcclxuICAgICAgICAgICAgdmFyIHNjcmVlbk9uTWlzc2luZ0xvZ2luSUQgPSB0aGlzLl9uZXh0U2NyZWVuRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb24tbWlzc2luZy1sb2dpbmlkLXNjcmVlbicpIHx8ICcnO1xyXG4gICAgICAgICAgICB2YXIgc2NyZWVuT25QZW5kaW5nUGFzc0NoYW5nZSA9IHRoaXMuX25leHRTY3JlZW5FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vbi1wZW5kaW5nLXBhc3N3b3JkLWNoYW5nZScpIHx8ICcnO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5fZWxDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLW9uLWV4aXN0aW5nLWxvZ2luLWlkZW50aWZpZXItc2NyZWVuJywgc2NyZWVuT25FeGlzdGluZ0xvZ2luKTtcclxuICAgICAgICAgICAgdGhpcy5fZWxDb250YWluZXIuc2V0QXR0cmlidXRlKCdkYXRhLW9uLXBlbmRpbmctcmVnaXN0cmF0aW9uLXNjcmVlbicsIHNjcmVlbk9uUGVuZGluZyk7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsQ29udGFpbmVyLnNldEF0dHJpYnV0ZSgnZGF0YS1vbi1wZW5kaW5nLXZlcmlmaWNhdGlvbi1zY3JlZW4nLCBzY3JlZW5PblBlbmRpbmdWZXJpZmljYXRpb24pO1xyXG4gICAgICAgICAgICB0aGlzLl9lbENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtb24tbWlzc2luZy1sb2dpbmlkLXNjcmVlbicsIHNjcmVlbk9uTWlzc2luZ0xvZ2luSUQpO1xyXG4gICAgICAgICAgICB0aGlzLl9lbENvbnRhaW5lci5zZXRBdHRyaWJ1dGUoJ2RhdGEtb24tcGVuZGluZy1wYXNzd29yZC1jaGFuZ2UnLCBzY3JlZW5PblBlbmRpbmdQYXNzQ2hhbmdlKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFyc2VFbGVtZW50cygpO1xyXG4gICAgICAgICAgICB0aGlzLmNoZWNrQXV0b1NraXAoKTtcclxuICAgICAgICAgICAgdGhpcy5fY3VycmVudFNjcmVlbklEID0gc2NyZWVuSUQ7XHJcbiAgICAgICAgICAgIHRoaXMuX2VsQ29udGFpbmVyLnN0eWxlLmRpc3BsYXkgPSAnJztcclxuXHJcbiAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldCh7XHJcbiAgICAgICAgICAgICAgICBldmVudE5hbWU6ICdhZnRlclNjcmVlbkxvYWQnLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudFNjcmVlbjogdGhpcy5fY3VycmVudFNjcmVlbklELFxyXG4gICAgICAgICAgICAgICAgZm9ybTogdGhpcy5fbGFzdFN1Ym1pdHRlZEZvcm1JRCxcclxuICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUodGhpcy5fbGFzdFN1Ym1pdHRlZEZvcm1SZXNwb25zZSksXHJcbiAgICAgICAgICAgICAgICBwcm9maWxlOiB0aGlzLl9hcGlEYXRhLmdldEFjY291bnRJbmZvID8gdGhpcy5fYXBpRGF0YS5nZXRBY2NvdW50SW5mby5wcm9maWxlIDoge30sXHJcbiAgICAgICAgICAgICAgICBkYXRhOiB0aGlzLl9hcGlEYXRhLmdldEFjY291bnRJbmZvID8gdGhpcy5fYXBpRGF0YS5nZXRBY2NvdW50SW5mby5kYXRhIDoge31cclxuICAgICAgICAgICAgfSwgdGhpcy5fcCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjaGVja0F1dG9Ta2lwOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGZvcm1OYW1lIGluIHRoaXMuX2Zvcm1zSW5zdGFuY2VzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9mb3Jtc0luc3RhbmNlc1tmb3JtTmFtZV0uY2hlY2tBdXRvU2tpcCgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZXROZXh0U2NyZWVuU2l6ZTogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9lbENvbnRhaW5lci5zdHlsZS5kaXNwbGF5ID0gJyc7XHJcblxyXG4gICAgICAgICAgICB2YXIgdyA9IHRoaXMuX25leHRTY3JlZW5FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS13aWR0aCcpIHx8IHRoaXMuX2VsU2NyZWVuU2V0LmdldEF0dHJpYnV0ZSgnZGF0YS13aWR0aCcpIHx8IHRoaXMuX3Aud2lkdGg7XHJcbiAgICAgICAgICAgIHZhciBoID0gdGhpcy5fbmV4dFNjcmVlbkVsZW1lbnQuZ2V0QXR0cmlidXRlKCdkYXRhLWhlaWdodCcpIHx8IHRoaXMuX2VsU2NyZWVuU2V0LmdldEF0dHJpYnV0ZSgnZGF0YS1oZWlnaHQnKSB8fCB0aGlzLl9wLmhlaWdodDtcclxuXHJcbiAgICAgICAgICAgIGlmICghdyB8fCAhaCkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGVsVGVtcFNjcmVlbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICAgICAgICAgICAgICAgZWxUZW1wU2NyZWVuLmNsYXNzTmFtZSA9IHRoaXMuX25leHRTY3JlZW5FbGVtZW50LmNsYXNzTmFtZSArICcgZ2lneWEtY2FsY3VsYXRlLXNpemUnO1xyXG4gICAgICAgICAgICAgICAgZWxUZW1wU2NyZWVuLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCB0aGlzLl9uZXh0U2NyZWVuRWxlbWVudC5nZXRBdHRyaWJ1dGUoJ3N0eWxlJykpO1xyXG4gICAgICAgICAgICAgICAgZWxUZW1wU2NyZWVuLmlubmVySFRNTCA9IHRoaXMuX25leHRTY3JlZW5FbGVtZW50LmlubmVySFRNTDtcclxuICAgICAgICAgICAgICAgIGVsVGVtcFNjcmVlbi5pZCA9IHRoaXMuX25leHRTY3JlZW5FbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1vcmlnaW5hbC1pZCcpIHx8IHRoaXMuX25leHRTY3JlZW5FbGVtZW50LmlkO1xyXG4gICAgICAgICAgICAgICAgZWxUZW1wU2NyZWVuLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgICAgICAgICAgICAgIGVsVGVtcFNjcmVlbi5zdHlsZS56b29tID0gJzEnO1xyXG4gICAgICAgICAgICAgICAgZWxUZW1wU2NyZWVuLnN0eWxlLmxlZnQgPSAnMTBweCc7XHJcbiAgICAgICAgICAgICAgICBlbFRlbXBTY3JlZW4uc3R5bGUudG9wID0gJy0xMDAwcHgnO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uc2V0U2l6ZShlbFRlbXBTY3JlZW4sIHcsIGgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRSAmJiBnaWd5YS5sb2NhbEluZm8ucXVpcmtzTW9kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChlbFRlbXBTY3JlZW4sICdnaWd5YS1zY3JlZW4tZGlhbG9nLWNvbnRlbnQnKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYXBwZW5kVG9Cb2R5KGVsVGVtcFNjcmVlbik7XHJcbiAgICAgICAgICAgICAgICB2YXIgYm5wID0gZ2lneWEuZ2xvYmFsLmdldEJvcmRlcnNBbmRQYWRkaW5ncyhlbFRlbXBTY3JlZW4pO1xyXG4gICAgICAgICAgICAgICAgaWYgKCF3KSB3ID0gZWxUZW1wU2NyZWVuLm9mZnNldFdpZHRoICsgTWF0aC5jZWlsKGJucC53KSArIDMwO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFoKSBoID0gZWxUZW1wU2NyZWVuLm9mZnNldEhlaWdodCArIDE7XHJcblxyXG5cclxuICAgICAgICAgICAgICAgIGVsVGVtcFNjcmVlbi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGVsVGVtcFNjcmVlbik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICh3KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5faXNEaWFsb2cgfHwgdGhpcy5fZWxTY3JlZW5TZXQuZ2V0QXR0cmlidXRlKCdkYXRhLXJlc3BvbnNpdmUnKSA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnNldFNpemUodGhpcy5fZWxDb250YWluZXIsIHcpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbENvbnRhaW5lci5zdHlsZS5tYXhXaWR0aCA9ICcnICsgKCgoJycgKyB3KS5pbmRleE9mKCclJykpID4gMCA/IHcgOiAodyArICdweCcpKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lbENvbnRhaW5lci5zdHlsZVsnX3dpZHRoJ10gPSB0aGlzLl9lbENvbnRhaW5lci5zdHlsZS5tYXhXaWR0aDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX2lzRGlhbG9nICYmICFnaWd5YS5sb2NhbEluZm8uaXNNb2JpbGUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZWxDb250YWluZXIuc3R5bGVbJ19oZWlnaHQnXSA9IGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2VsQ29udGFpbmVyLnN0eWxlLm1pbkhlaWdodCA9IGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZENsYXNzVG9FbGVtZW50KHRoaXMuX2VsQ29udGFpbmVyLCAnZ2lneWEtc2NyZWVuLWRpYWxvZy1jb250ZW50Jyk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZWxEaWFsb2cgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0aGlzLl9wLmNvbnRhaW5lcklEKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZ2lneWEubG9jYWxJbmZvLmlzSUU3IHx8IGdpZ3lhLmxvY2FsSW5mby5pc0lFOCB8fCAoZ2lneWEubG9jYWxJbmZvLmlzSUUgJiYgZ2lneWEubG9jYWxJbmZvLnF1aXJrc01vZGUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyhlbERpYWxvZywgJ2dpZ3lhLXNjcmVlbi1kaWFsb2ctdG9wJylbMF0uc3R5bGUud2lkdGggPSAodGhpcy5fZWxDb250YWluZXIub2Zmc2V0V2lkdGgpICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICB2YXIgbWlkZGxlQ2VudGVyID0gZ2lneWEudXRpbHMudmlld3BvcnQuZ2V0TWlkZGxlQ2VudGVyKCk7XHJcbiAgICAgICAgICAgICAgICB2YXIgZGlhbG9nV2lkdGggPSBlbERpYWxvZy5vZmZzZXRXaWR0aDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsQ29udGFpbmVyLnN0eWxlWydoZWlnaHQnXSA9IGggKyAncHgnO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ0hlaWdodCA9IGRpYWxvZ0hlaWdodCA9IGVsRGlhbG9nLm9mZnNldEhlaWdodDtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2VsQ29udGFpbmVyLnN0eWxlWydoZWlnaHQnXSA9ICdhdXRvJztcclxuXHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ1RvcCA9IG1pZGRsZUNlbnRlci50b3AgLSBNYXRoLmZsb29yKGRpYWxvZ0hlaWdodCAvIDIpO1xyXG4gICAgICAgICAgICAgICAgdmFyIGRpYWxvZ0xlZnQgPSBtaWRkbGVDZW50ZXIubGVmdCAtIE1hdGgucm91bmQoZGlhbG9nV2lkdGggLyAyKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaWFsb2dUb3AgPCAxMCkgZGlhbG9nVG9wID0gMTA7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlhbG9nTGVmdCA8IDEwKSBkaWFsb2dMZWZ0ID0gMTA7XHJcblxyXG4gICAgICAgICAgICAgICAgZWxEaWFsb2cuc3R5bGUudG9wID0gZGlhbG9nVG9wICsgJ3B4JztcclxuICAgICAgICAgICAgICAgIGVsRGlhbG9nLnN0eWxlLmxlZnQgPSBkaWFsb2dMZWZ0ICsgJ3B4JztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcGFyc2VFbGVtZW50czogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICB2YXIgZWxzID0gdGhpcy5fZWxDb250YWluZXIuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJyonKTtcclxuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBlbCA9IGVsc1tpXTtcclxuICAgICAgICAgICAgICAgIHZhciBvcmlnaW5hbElEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLW9yaWdpbmFsLWlkJyk7IC8vdGhpcyBpcyBkb25lIHRvIHByZXZlbnQgSURzIGNsYXNoaW5nLlxyXG4gICAgICAgICAgICAgICAgaWYgKG9yaWdpbmFsSUQgIT0gbnVsbCkgZWwuaWQgPSBvcmlnaW5hbElEO1xyXG4gICAgICAgICAgICAgICAgc3dpdGNoIChlbC5ub2RlTmFtZS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2VsZWN0JzpcclxuICAgICAgICAgICAgICAgICAgICBjYXNlICdpbnB1dCc6XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndGV4dGFyZWEnOlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBhcnNlSW5wdXQoZWwpO1xyXG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGFyc2VTd2l0Y2hTY3JlZW4oZWwpOyBicmVhaztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2YXIgZm9ybXMgPSB0aGlzLl9lbENvbnRhaW5lci5nZXRFbGVtZW50c0J5VGFnTmFtZSgnZm9ybScpO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGZvcm1zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlRm9ybShmb3Jtc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhcnNlV2lkZ2V0KGVsc1tpXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcnNlRm9ybTogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIHZhciBvRm9ybSA9IG5ldyBwcml2YXRlU2NvcGUuZm9ybSh0aGlzLCBlbCk7XHJcbiAgICAgICAgICAgIG9Gb3JtLmluaXQoKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcnNlV2lkZ2V0OiBmdW5jdGlvbiAoZWwpIHtcclxuICAgICAgICAgICAgdmFyIHdpZGdldCA9IG5ldyBwcml2YXRlU2NvcGUud2lkZ2V0KHRoaXMsIGVsKTtcclxuICAgICAgICAgICAgd2lkZ2V0LnBhcnNlKCk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBwYXJzZVN3aXRjaFNjcmVlbjogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGF0dFN3aXRjaFNjcmVlbiA9IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1zd2l0Y2gtc2NyZWVuJyk7XHJcbiAgICAgICAgICAgIGlmIChhdHRTd2l0Y2hTY3JlZW4gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVsLm5vZGVOYW1lLnRvTG93ZXJDYXNlKCkgPT0gJ2EnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwuc2V0QXR0cmlidXRlKCdocmVmJywgJ2phdmFzY3JpcHQ6dm9pZCgwKScpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLmFkZEV2ZW50TGlzdGVuZXIoZWwsICdjbGljaycsIGZ1bmN0aW9uIChlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgVGhpcy5zd2l0Y2hTY3JlZW4oYXR0U3dpdGNoU2NyZWVuKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZS5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cuZXZlbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHBhcnNlSW5wdXQ6IGZ1bmN0aW9uIChlbCkge1xyXG4gICAgICAgICAgICBpZiAoIWVsKSByZXR1cm47XHJcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGlzRHVtbXkgPSBlbC5nZXRBdHRyaWJ1dGUoJ2R1bW15Jyk7XHJcbiAgICAgICAgICAgIHZhciBkdW1teUlEID0gZWwuZ2V0QXR0cmlidXRlKCdkYXRhLXNjcmVlbnNldC1lbGVtZW50LWlkJyk7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5faXNSZW1vdGUgJiYgKGlzRHVtbXkgfHwgZWwubm9kZU5hbWUudG9Mb3dlckNhc2UoKSA9PSAnaW5wdXQnKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsRWwgPSB0aGlzLl9vcmlnaW5hbEVsZW1lbnRzW2R1bW15SURdIHx8IHRoaXMuZ2V0T3JpZ2luYWxFbGVtZW50KGVsKTtcclxuICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbEVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLyppZiAoIXRoaXMuX29yaWdpbmFsRWxlbWVudHNbZHVtbXlJRF0pIHRoaXMuX29yaWdpbmFsRWxlbWVudHNbZHVtbXlJRF0gPSBvcmlnaW5hbEVsO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghaXNEdW1teSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZHVtbXlJbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1bW15SW5wdXQuc2V0QXR0cmlidXRlKCduYW1lJywgZWwubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1bW15SW5wdXQuc2V0QXR0cmlidXRlKCd0eXBlJywgZWwudHlwZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1bW15SW5wdXQuc2V0QXR0cmlidXRlKCdkdW1teScsICcxJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGR1bW15SW5wdXQuc2V0QXR0cmlidXRlKCdkYXRhLXNjcmVlbnNldC1lbGVtZW50LWlkJywgZHVtbXlJRCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbEVsLnBhcmVudE5vZGUpIG9yaWdpbmFsRWwucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZHVtbXlJbnB1dCwgb3JpZ2luYWxFbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcmlnaW5hbEVsLnR5cGUgPT0gJ3RleHQnIHx8IG9yaWdpbmFsRWwudHlwZSA9PSAncGFzc3dvcmQnKSBvcmlnaW5hbEVsLnZhbHVlID0gb3JpZ2luYWxFbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtdmFsdWUnKSB8fCAnJztcclxuICAgICAgICAgICAgICAgICAgICBlbC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShvcmlnaW5hbEVsLCBlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZWwgPSBvcmlnaW5hbEVsOyovXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9yaWdpbmFsSUQgPSBlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtb3JpZ2luYWwtaWQnKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAob3JpZ2luYWxJRCAhPSBudWxsKSBlbC5pZCA9IG9yaWdpbmFsSUQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFpc0R1bW15KSBlbC5zZXRBdHRyaWJ1dGUoJ2RhdGEtZ2lneWEtbmFtZScsIGVsLm5hbWUpOyAvL2RhdGEtZ2lneWEtbmFtZSBpcyB0aGUgb3JpZ2luYWwgbmFtZSBhdHRyaWJ1dGUgdmFsdWUuXHJcbiAgICAgICAgICAgIHZhciBvRmllbGROYW1lRGF0YSA9IHByaXZhdGVTY29wZS5vRmllbGROYW1lRGF0YVtlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2lneWEtbmFtZScpXTtcclxuICAgICAgICAgICAgaWYgKG9GaWVsZE5hbWVEYXRhKSB7XHJcbiAgICAgICAgICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ25hbWUnLCBvRmllbGROYW1lRGF0YS5hdXRvRmlsbE5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkRXZlbnRMaXN0ZW5lcihlbCwgJ2NoYW5nZScsIGZ1bmN0aW9uICgpIHsgVGhpcy5vbklucHV0Q2hhbmdlKGVsKSB9KTtcclxuICAgICAgICAgICAgdGhpcy5vbklucHV0Q2hhbmdlKGVsLCB0cnVlKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldE9yaWdpbmFsRWxlbWVudDogZnVuY3Rpb24gKGVsKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtc2NyZWVuc2V0LWVsZW1lbnQtaWQnKSk7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvbklucHV0Q2hhbmdlOiBmdW5jdGlvbiAoZWwsIGNsZWFyKSB7XHJcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgdmFyIGVsRm9ybSA9IHRoaXMuZ2V0RWxlbWVudEZvcm0oZWwpO1xyXG4gICAgICAgICAgICBpZiAoIWVsRm9ybSkgcmV0dXJuO1xyXG5cclxuICAgICAgICAgICAgdmFyIHZhbHVlID0gZWwudmFsdWU7XHJcbiAgICAgICAgICAgIGlmIChlbC50eXBlID09ICdjaGVja2JveCcpIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlID0gZWwuY2hlY2tlZDtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdmFyIHZhbGlkYXRpb25FcnJvcjtcclxuICAgICAgICAgICAgaWYgKGNsZWFyICE9IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvciA9IFRoaXMuZ2V0VmFsaWRhdGlvbkVycm9yKGVsLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnROYW1lOiAnZmllbGRDaGFuZ2VkJyxcclxuICAgICAgICAgICAgICAgICAgICBzY3JlZW46IHRoaXMuX2N1cnJlbnRTY3JlZW5JRCxcclxuICAgICAgICAgICAgICAgICAgICBmb3JtOiBlbEZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLWdpZ3lhLWlkJyksXHJcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6IGVsLmdldEF0dHJpYnV0ZSgnZGF0YS1naWd5YS1uYW1lJyksXHJcbiAgICAgICAgICAgICAgICAgICAgaXNWYWxpZDogKCF2YWxpZGF0aW9uRXJyb3IpLFxyXG4gICAgICAgICAgICAgICAgICAgIGVyck1zZzogdmFsaWRhdGlvbkVycm9yLFxyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBlbC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSwgdGhpcy5fcCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2lneWEtbmFtZScpID09ICdwYXNzd29yZCcgfHwgZWwuZ2V0QXR0cmlidXRlKCdkYXRhLWdpZ3lhLW5hbWUnKSA9PSAnbmV3UGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJQYXNzd29yZFJldHlwZSA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5QXR0cmlidXRlKGVsRm9ybSwgJyonLCAnbmFtZScsICdwYXNzd29yZFJldHlwZScpO1xyXG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhclBhc3N3b3JkUmV0eXBlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJQYXNzd29yZFJldHlwZVtpXS52YWx1ZSA9ICcnO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNob3dGaWVsZEVycm9yKGVsLCB2YWxpZGF0aW9uRXJyb3IsIHRydWUpO1xyXG5cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNob3dGaWVsZEVycm9yOiBmdW5jdGlvbiAoZWxGaWVsZCwgZXJyb3JDb2RlLCBpc0JvdW5kVG9GaWVsZCkge1xyXG4gICAgICAgICAgICB2YXIgZWxGb3JtID0gdGhpcy5nZXRFbGVtZW50Rm9ybShlbEZpZWxkKTtcclxuICAgICAgICAgICAgdmFyIGVycm9yTWVzc2FnZSA9IHRoaXMuZ2V0RXJyb3JNZXNzYWdlKGVycm9yQ29kZSwgaXNCb3VuZFRvRmllbGQsIGVsRmllbGQpO1xyXG4gICAgICAgICAgICB2YXIgc2hvdWxkSGFuZGxlRXJyb3IgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgaWYgKGlzQm91bmRUb0ZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgYXJCb3VuZEVsZW1lbnRzID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlBdHRyaWJ1dGUoZWxGb3JtLCAnKicsICdkYXRhLWJvdW5kLXRvJywgZWxGaWVsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZ2lneWEtbmFtZScpKTtcclxuXHJcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyQm91bmRFbGVtZW50cy5sZW5ndGg7IGkrKykgeyAvL2RlYWxpbmcgd2l0aCBnaWd5YS1lcnJvci1tc2cgYW5kIGdpZ3lhLWVycm9yLWRpc3BsYXkgd2l0aGluZyB0aGUgc2FtZSBmb3JtIGFzIHRoZSBpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlbEJvdW5kID0gYXJCb3VuZEVsZW1lbnRzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2YXIgYWxsb3dlZEVycm9yQ29kZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZWxCb3VuZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtZXJyb3ItY29kZXMnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbGxvd2VkRXJyb3JDb2RlcyA9IGVsQm91bmQuZ2V0QXR0cmlidXRlKCdkYXRhLWVycm9yLWNvZGVzJykuc3BsaXQoJywnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2hvdWxkSGFuZGxlRXJyb3IgPSAoYWxsb3dlZEVycm9yQ29kZXMubGVuZ3RoID09PSAwIHx8IGdpZ3lhLnV0aWxzLmFycmF5LmluZGV4T2YoYWxsb3dlZEVycm9yQ29kZXMsIGVycm9yQ29kZSkgIT09IC0xKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UgJiYgc2hvdWxkSGFuZGxlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLkRPTS5pc0VsZW1lbnRDbGFzcyhlbEJvdW5kLCAnZ2lneWEtZXJyb3ItZGlzcGxheScpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYWRkQ2xhc3NUb0VsZW1lbnQoZWxCb3VuZCwgJ2dpZ3lhLWVycm9yLWRpc3BsYXktYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLkRPTS5pc0VsZW1lbnRDbGFzcyhlbEJvdW5kLCAnZ2lneWEtZXJyb3ItbXNnJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsQm91bmQuaW5uZXJIVE1MID0gZXJyb3JNZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghZXJyb3JNZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnaWd5YS51dGlscy5ET00uaXNFbGVtZW50Q2xhc3MoZWxCb3VuZCwgJ2dpZ3lhLWVycm9yLWRpc3BsYXknKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoZWxCb3VuZCwgJ2dpZ3lhLWVycm9yLWRpc3BsYXktYWN0aXZlJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLkRPTS5pc0VsZW1lbnRDbGFzcyhlbEJvdW5kLCAnZ2lneWEtZXJyb3ItbXNnJykpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsQm91bmQuaW5uZXJIVE1MID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UgJiYgc2hvdWxkSGFuZGxlRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRDbGFzc1RvRWxlbWVudChlbEZpZWxkLCAnZ2lneWEtZXJyb3InKTtcclxuICAgICAgICAgICAgICAgIGlmIChlbEZpZWxkLm5hbWUgPT0gJ2RhdGEudGVybXMnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxGaWVsZC5wYXJlbnROb2RlLnN0eWxlLmJvcmRlciA9ICcxcHggc29saWQgI0RENEIzOSc7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoIWVycm9yTWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMuRE9NLnJlbW92ZUNsYXNzRnJvbUVsZW1lbnQoZWxGaWVsZCwgJ2dpZ3lhLWVycm9yJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZWxGaWVsZC5uYW1lID09ICdkYXRhLnRlcm1zJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGVsRmllbGQucGFyZW50Tm9kZS5zdHlsZS5ib3JkZXIgPSAnJztcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0VmFsaWRhdGlvbkVycm9yOiBmdW5jdGlvbiAoZWxGaWVsZCwgaXNCb3VuZFRvRmllbGQpIHtcclxuICAgICAgICAgICAgaWYgKHByaXZhdGVTY29wZS5pc0ZpZWxkSW5IaWRkZW5Db250YWluZXIoZWxGaWVsZCkpIHJldHVybjsgLy8gbm8gdmFsaWRhdGlvbiBmb3IgZmllbGRzIGluIGEgaGlkZGVuIGdpZ3lhLWNvbnRhaW5lclxyXG4gICAgICAgICAgICBpZiAoZWxGaWVsZC5nZXRBdHRyaWJ1dGUoJ2RhdGEtcmVxdWlyZWQnKSAmJiAhZWxGaWVsZC52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByaXZhdGVTY29wZS5lcnJvckNvZGVzLk1JU1NJTkdfUkVRVUlSRUQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCFlbEZpZWxkLm5hbWUpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgIHZhciBlcnJvckNvZGU7XHJcbiAgICAgICAgICAgIHZhciBlbEZvcm0gPSB0aGlzLmdldEVsZW1lbnRGb3JtKGVsRmllbGQpO1xyXG4gICAgICAgICAgICB2YXIgZmllbGRWYWx1ZSA9IGVsRmllbGQudmFsdWU7XHJcblxyXG4gICAgICAgICAgICB2YXIgZmllbGRJc0VtcHR5ID0gKGZpZWxkVmFsdWUgPT0gbnVsbCB8fCBmaWVsZFZhbHVlLnNwbGl0KCcgJykuam9pbignJykgPT0gJycpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGVsRmllbGQubmFtZSA9PSAnZW1haWwnICYmICFmaWVsZElzRW1wdHkgJiYgIWdpZ3lhLnBsdWdpblV0aWxzLnZhbGlkYXRpb24uaXNFbWFpbFZhbGlkKGVsRmllbGQudmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICBlcnJvckNvZGUgPSBwcml2YXRlU2NvcGUuZXJyb3JDb2Rlcy5WQUxJREFUSU9OX0VSUk9SO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoZWxGaWVsZC5uYW1lID09ICdwYXNzd29yZFJldHlwZScpIHtcclxuICAgICAgICAgICAgICAgIHZhciBhclBhc3N3b3JkRmllbGRzID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlBdHRyaWJ1dGUoZWxGb3JtLCAnKicsICduYW1lJywgJ25ld1Bhc3N3b3JkJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXJQYXNzd29yZEZpZWxkcy5sZW5ndGggPT0gMCkgYXJQYXNzd29yZEZpZWxkcyA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5QXR0cmlidXRlKGVsRm9ybSwgJyonLCAnbmFtZScsICdwYXNzd29yZCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyUGFzc3dvcmRGaWVsZHMubGVuZ3RoID4gMCAmJiBhclBhc3N3b3JkRmllbGRzWzBdLnZhbHVlICE9ICcnICYmIGFyUGFzc3dvcmRGaWVsZHNbMF0udmFsdWUgIT0gZmllbGRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZSA9IHByaXZhdGVTY29wZS5lcnJvckNvZGVzLlZBTElEQVRJT05fRVJST1I7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChlbEZpZWxkLmdldEF0dHJpYnV0ZSgnZGF0YS10YWtlbicpID09ICcxJykge1xyXG4gICAgICAgICAgICAgICAgZXJyb3JDb2RlID0gcHJpdmF0ZVNjb3BlLmVycm9yQ29kZXMuVU5JUVVFX0lERU5USUZJRVJfRVhJU1RTO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vXCJpbnRlZ2VyXCIsIFwiZmxvYXRcIiwgXCJib29sZWFuXCIsIFwic3RyaW5nXCIsIFwidGV4dFwiLCBcImRhdGVcIiwgXCJsb25nXCJcclxuXHJcbiAgICAgICAgICAgIGlmIChnaWd5YS51dGlscy5ET00uaXNFbGVtZW50Q2xhc3MoZWxGb3JtLCAnZ2lneWEtcmVnaXN0ZXItZm9ybScpIHx8IGdpZ3lhLnV0aWxzLkRPTS5pc0VsZW1lbnRDbGFzcyhlbEZvcm0sICdnaWd5YS1wcm9maWxlLWZvcm0nKSB8fCBnaWd5YS51dGlscy5ET00uaXNFbGVtZW50Q2xhc3MoZWxGb3JtLCAnZ2lneWEtYXV0aC1pbmZvLWZvcm0nKSkge1xyXG4gICAgICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGVsRmllbGQubmFtZTtcclxuICAgICAgICAgICAgICAgIHZhciBmaWVsZE5hbWVzcGFjZSA9IGZpZWxkTmFtZS5zcGxpdCgnLicpWzBdO1xyXG4gICAgICAgICAgICAgICAgdmFyIHNjaGVtYU5hbWUgPSBmaWVsZE5hbWVzcGFjZSA9PSAnZGF0YScgPyAnZGF0YVNjaGVtYScgOiAncHJvZmlsZVNjaGVtYSc7XHJcbiAgICAgICAgICAgICAgICBpZiAoZmllbGROYW1lc3BhY2UgPT0gJ2RhdGEnIHx8IGZpZWxkTmFtZXNwYWNlID09ICdwcm9maWxlJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkTmFtZSA9IGZpZWxkTmFtZS5yZXBsYWNlKGZpZWxkTmFtZXNwYWNlICsgJy4nLCAnJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5fYXBpRGF0YS5nZXRTY2hlbWEgJiYgdGhpcy5fYXBpRGF0YS5nZXRTY2hlbWFbc2NoZW1hTmFtZV0gJiYgdGhpcy5fYXBpRGF0YS5nZXRTY2hlbWFbc2NoZW1hTmFtZV0uZmllbGRzKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNjaGVtYSA9IHRoaXMuX2FwaURhdGEuZ2V0U2NoZW1hW3NjaGVtYU5hbWVdLmZpZWxkc1tmaWVsZE5hbWVdO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChzY2hlbWEpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkTmFtZSA9PSAndGVybXMnICYmIHNjaGVtYS5yZXF1aXJlZCAmJiBlbEZpZWxkLmNoZWNrZWQgPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZSA9IHByaXZhdGVTY29wZS5lcnJvckNvZGVzLk1JU1NJTkdfUkVRVUlSRUQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY2hlbWEucmVxdWlyZWQgJiYgZmllbGRWYWx1ZS5zcGxpdCgnICcpLmpvaW4oJycpID09ICcnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNvZGUgPSBwcml2YXRlU2NvcGUuZXJyb3JDb2Rlcy5NSVNTSU5HX1JFUVVJUkVEO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY2hlbWEudHlwZSAmJiAhZmllbGRJc0VtcHR5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHNjaGVtYS50eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnaW50ZWdlcic6IGNhc2UgJ2xvbmcnOiBpZiAoaXNOYU4ocGFyc2VJbnQoZmllbGRWYWx1ZSkpKSBlcnJvckNvZGUgPSBwcml2YXRlU2NvcGUuZXJyb3JDb2Rlcy5WQUxJREFUSU9OX0VSUk9SOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdmbG9hdCc6IGlmIChpc05hTihwYXJzZUZsb2F0KGZpZWxkVmFsdWUpKSkgZXJyb3JDb2RlID0gcHJpdmF0ZVNjb3BlLmVycm9yQ29kZXMuVkFMSURBVElPTl9FUlJPUjsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYm9vbGVhbic6IGlmIChlbEZpZWxkLmNoZWNrZWQgPT0gbnVsbCkgZXJyb3JDb2RlID0gcHJpdmF0ZVNjb3BlLmVycm9yQ29kZXMuVkFMSURBVElPTl9FUlJPUjsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnZGF0ZSc6IGlmIChpc05hTihkLmdldFRpbWUoKSkpIGVycm9yQ29kZSA9IHByaXZhdGVTY29wZS5lcnJvckNvZGVzLlZBTElEQVRJT05fRVJST1I7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzY2hlbWEuZm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgYXJGb3JtYXQgPSBzY2hlbWEuZm9ybWF0Lm1hdGNoKC8oLio/KVxcKFxcJyguKj8pXFwnXFwpJC8pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyRm9ybWF0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZvcm1hdFR5cGUgPSBhckZvcm1hdFsxXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZm9ybWF0VmFsdWUgPSBhckZvcm1hdFsyXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybWF0VHlwZSAmJiBmb3JtYXRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZm9ybWF0VHlwZSA9PSAncmVnZXgnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVnZXhGb3JtYXQgPSBuZXcgUmVnRXhwKGZvcm1hdFZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcmVnZXhGb3JtYXQudGVzdChmaWVsZFZhbHVlKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpc0JvdW5kVG9GaWVsZCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNvZGUgPSBwcml2YXRlU2NvcGUuZXJyb3JDb2Rlcy5WQUxJREFUSU9OX0VSUk9SO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLl9hcGlEYXRhLmdldFBvbGljaWVzICYmIHRoaXMuX2FwaURhdGEuZ2V0UG9saWNpZXMucGFzc3dvcmRDb21wbGV4aXR5ICYmIGVsRmllbGQubmFtZSA9PSAncGFzc3dvcmQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIG9Db21wbGV4aXR5ID0gdGhpcy5fYXBpRGF0YS5nZXRQb2xpY2llcy5wYXNzd29yZENvbXBsZXhpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvQ29tcGxleGl0eSkgb0NvbXBsZXhpdHkgPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgb1Bhc3NTdHJlbmd0aCA9IHByaXZhdGVTY29wZS5nZXRQYXNzd29yZFN0cmVuZ3RoRGF0YShmaWVsZFZhbHVlKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFwcml2YXRlU2NvcGUuaXNQYXNzd29yZFN0cmVuZ3RoVmFsaWQoZWxGaWVsZC52YWx1ZSwgb1Bhc3NTdHJlbmd0aCwgb0NvbXBsZXhpdHkpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZSA9IHByaXZhdGVTY29wZS5lcnJvckNvZGVzLlZBTElEQVRJT05fRVJST1I7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChmaWVsZElzRW1wdHkgJiYgIWVsRmllbGQuZ2V0QXR0cmlidXRlKCdkYXRhLWFsbG93LWVtcHR5JykpIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcml2YXRlU2NvcGUuYWx3YXlzUmVxdWlyZWRGaWVsZHNbZWxGaWVsZC5uYW1lXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZSA9IHByaXZhdGVTY29wZS5lcnJvckNvZGVzLk1JU1NJTkdfUkVRVUlSRUQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChnaWd5YS51dGlscy5ET00uaXNFbGVtZW50Q2xhc3MoZWxGaWVsZCwgJ2dpZ3lhLWNhcHRjaGEnKSAmJiAhcHJpdmF0ZVNjb3BlLmlzSGlkZGVuKGVsRmllbGQpICYmIHR5cGVvZiBSZWNhcHRjaGEgPT0gJ29iamVjdCcgJiYgUmVjYXB0Y2hhLmdldF9yZXNwb25zZSgpLnNwbGl0KCcgJykuam9pbignJykgPT0gJycpIHtcclxuICAgICAgICAgICAgICAgIGVycm9yQ29kZSA9IHByaXZhdGVTY29wZS5lcnJvckNvZGVzLk1JU1NJTkdfUkVRVUlSRUQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGVycm9yQ29kZTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldEVycm9yTWVzc2FnZTogZnVuY3Rpb24gKGVycm9yQ29kZSwgaXNCb3VuZFRvRmllbGQsIGVsRmllbGQpIHtcclxuICAgICAgICAgICAgaWYgKCFlcnJvckNvZGUgfHwgZXJyb3JDb2RlID09IDApIHJldHVybiAnJztcclxuICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGVsRmllbGQuZ2V0QXR0cmlidXRlKCdkYXRhLWdpZ3lhLW5hbWUnKTtcclxuICAgICAgICAgICAgdmFyIGZpZWxkRGlzcGxheU5hbWUgPSBlbEZpZWxkLmdldEF0dHJpYnV0ZSgnZGF0YS1kaXNwbGF5LW5hbWUnKTtcclxuICAgICAgICAgICAgaWYgKCFmaWVsZERpc3BsYXlOYW1lKSB7XHJcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKGVsRmllbGQubmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2xvZ2luSUQnOiBmaWVsZERpc3BsYXlOYW1lID0gJ3VzZXJuYW1lJzsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnc2VjcmV0UXVlc3Rpb24nOiBmaWVsZERpc3BsYXlOYW1lID0gJ3NlY3JldCBxdWVzdGlvbic7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3NlY3JldEFuc3dlcic6IGZpZWxkRGlzcGxheU5hbWUgPSAnc2VjcmV0IGFuc3dlcic7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghZmllbGREaXNwbGF5TmFtZSkgZmllbGREaXNwbGF5TmFtZSA9IGVsRmllbGQubmFtZS5zcGxpdCgnLicpLnBvcCgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGdpZ3lhLnV0aWxzLkRPTS5pc0VsZW1lbnRDbGFzcyhlbEZpZWxkLCAnZ2lneWEtY2FwdGNoYScpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3JDb2RlICE9IHByaXZhdGVTY29wZS5lcnJvckNvZGVzLk1JU1NJTkdfUkVRVUlSRUQgJiYgdHlwZW9mIFJlY2FwdGNoYSA9PSAnb2JqZWN0JykgUmVjYXB0Y2hhLnJlbG9hZCgpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGV4dCgndGhlX2NoYXJhY3RlcnNfeW91X2VudGVyZWRfZGlkblxcJ3RfbWF0Y2hfdGhlX3dvcmRfdmVyaWZpY2F0aW9uLl9wbGVhc2VfdHJ5X2FnYWluJyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3JDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHByaXZhdGVTY29wZS5lcnJvckNvZGVzLk1JU1NJTkdfUkVRVUlSRUQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQm91bmRUb0ZpZWxkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRleHQoJ3RoaXNfZmllbGRfaXNfcmVxdWlyZWQnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRUZXh0KCdwbGVhc2VfZW50ZXJfZmllbGRuYW1lJywgJyVmaWVsZG5hbWUnLCBmaWVsZERpc3BsYXlOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIHByaXZhdGVTY29wZS5lcnJvckNvZGVzLlVOSVFVRV9JREVOVElGSUVSX0VYSVNUUzpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGROYW1lID09ICd1c2VybmFtZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGV4dCgndXNlcm5hbWVfYWxyZWFkeV9leGlzdHMnKTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGZpZWxkTmFtZSA9PSAnZW1haWwnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRleHQoJ2VtYWlsX2FscmVhZHlfZXhpc3RzJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBwcml2YXRlU2NvcGUuZXJyb3JDb2Rlcy5WQUxJREFUSU9OX0VSUk9SOlxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoZmllbGROYW1lID09ICdwYXNzd29yZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGV4dCgncGFzc3dvcmRfZG9lc19ub3RfbWVldF9jb21wbGV4aXR5X3JlcXVpcmVtZW50cycpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZmllbGROYW1lID09ICdwYXNzd29yZFJldHlwZScpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0VGV4dCgncGFzc3dvcmRzX2RvX25vdF9tYXRjaCcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldFRleHQoJ2ludmFsaWRfZmllbGRuYW1lJywgJyVmaWVsZG5hbWUnLCBmaWVsZERpc3BsYXlOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGRpbVNjcmVlbjogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBwcml2YXRlU2NvcGUuZGltQ29udGFpbmVyKHRoaXMuX2VsQ29udGFpbmVyKTtcclxuICAgICAgICB9LFxyXG4gICAgICAgIHVuZGltU2NyZWVuOiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIHByaXZhdGVTY29wZS51bmRpbUNvbnRhaW5lcih0aGlzLl9lbENvbnRhaW5lcik7XHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblNjcmVlblJlc3BvbnNlOiBmdW5jdGlvbiAocmVzcG9uc2UsIG9Gb3JtLCBhZnRlckZpbmFsaXplUmVnaXN0cmF0aW9uKSB7XHJcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKCFvRm9ybSkgb0Zvcm0gPSB7fTtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdFN1Ym1pdHRlZEZvcm1JRCA9IG9Gb3JtLl9JRDtcclxuICAgICAgICAgICAgdGhpcy5fbGFzdFN1Ym1pdHRlZEZvcm1SZXNwb25zZSA9IHJlc3BvbnNlO1xyXG5cclxuICAgICAgICAgICAgdmFyIHN1Y2Nlc3NTY3JlZW4gPSAob0Zvcm0uX2VsRm9ybSA/IG9Gb3JtLl9lbEZvcm0uZ2V0QXR0cmlidXRlKCdkYXRhLW9uLXN1Y2Nlc3Mtc2NyZWVuJykgOiBudWxsKTtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmF1dG9Ta2lwICYmIG9Gb3JtLl9lbEZvcm0gJiYgb0Zvcm0uX2VsRm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb24tYXV0by1za2lwLXNjcmVlbicpKSB7XHJcbiAgICAgICAgICAgICAgICBzdWNjZXNzU2NyZWVuID0gb0Zvcm0uX2VsRm9ybS5nZXRBdHRyaWJ1dGUoJ2RhdGEtb24tYXV0by1za2lwLXNjcmVlbicpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAocmVzcG9uc2UucmVnVG9rZW4pIHRoaXMuX3AucmVnVG9rZW4gPSByZXNwb25zZS5yZWdUb2tlbjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub25BY2NvdW50SW5mbyhyZXNwb25zZSk7IC8vd2lsbCB1cGRhdGUgdGhlIHByb2ZpbGUvZGF0YSBjYWNoZSBmcm9tIHRoZSByZXNwb25zZVxyXG5cclxuICAgICAgICAgICAgaWYgKGFmdGVyRmluYWxpemVSZWdpc3RyYXRpb24gfHwgKHRoaXMuX2xhc3RTdWJtaXR0ZWRGb3JtSUQgJiYgISghc3VjY2Vzc1NjcmVlbiAmJiB0aGlzLmVuZEZsb3dJc1BlbmRpbmcoKSkpKSB7XHJcbiAgICAgICAgICAgICAgICAvL0EgZm9ybSB3YXMgc3VibWl0dGVkLCB3ZSBuZWVkIHRvIGludm9rZSBhZnRlclN1Ym1pdC5cclxuICAgICAgICAgICAgICAgIC8vSWYgdGhlIGZsb3cgaXMgZW5kaW5nIGFuZCBmaW5hbGl6ZVJlZ2lzdHJhdGlvbiBpcyBuZWVkZWQsIHRoZSBmaW5hbGl6ZVJlZ2lzdHJhdGlvbiByZXNwb25zZSB3aWxsIGZpcmUgdGhlIGV2ZW50XHJcblxyXG4gICAgICAgICAgICAgICAgdmFyIGZuT25JbmZvVXBkYXRlZCA9IGZ1bmN0aW9uIChyZXNwb25zZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBldmVudFJlc3VsdCA9IGdpZ3lhLmV2ZW50cy5kaXNwYXRjaEZvcldpZGdldCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50TmFtZTogJ2FmdGVyU3VibWl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuOiBUaGlzLl9jdXJyZW50U2NyZWVuSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IFRoaXMuX2xhc3RTdWJtaXR0ZWRGb3JtSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2ZpbGU6IFRoaXMuX2FwaURhdGEuZ2V0QWNjb3VudEluZm8gJiYgVGhpcy5fYXBpRGF0YS5nZXRBY2NvdW50SW5mby5wcm9maWxlID8gVGhpcy5fYXBpRGF0YS5nZXRBY2NvdW50SW5mby5wcm9maWxlIDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGE6IFRoaXMuX2FwaURhdGEuZ2V0QWNjb3VudEluZm8gJiYgVGhpcy5fYXBpRGF0YS5nZXRBY2NvdW50SW5mby5kYXRhID8gVGhpcy5fYXBpRGF0YS5nZXRBY2NvdW50SW5mby5kYXRhIDoge30sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUoVGhpcy5fbGFzdFN1Ym1pdHRlZEZvcm1SZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICB9LCBUaGlzLl9wKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZXNwb25zZS5vcGVyYXRpb24gPT0gJy9hY2NvdW50cy5zZXRBY2NvdW50SW5mbycgJiYgKCFyZXNwb25zZS5wcm9maWxlIHx8ICFyZXNwb25zZS5kYXRhKSkgeyAvL3dlIGFsc28gbmVlZCB0byBnZXQgdGhlIHVwZGF0ZWQgaW5mbyBzaW5jZSBzZXRBY2NvdW50SW5mbyB1cGRhdGVkIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVBY2NvdW50SW5mbyhmbk9uSW5mb1VwZGF0ZWQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBmbk9uSW5mb1VwZGF0ZWQocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yQ29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uub3BlcmF0aW9uID09ICcvYWNjb3VudHMucmVnaXN0ZXInICYmIHRoaXMuX2FwaURhdGEuaW5pdFJlZ2lzdHJhdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGEgc3VjY2VmdWwgY2FsbCB0byBhY2NvdW50cy5yZWdpc3RlciByZXZva2VzIHRoZSBwcmV2aW9zIGluaXRSZWdpc3RyYXRpb24gcmVzcG9uc2Ugc28gdGhhdCBhIG5ldyByZWdUb2tlbiB3aWxsIGJlIGdlbmVyYXRlZCBmb3Igb3RoZXIgcmVnaXN0ZXIgZm9ybXNcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5fYXBpRGF0YS5pbml0UmVnaXN0cmF0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChzdWNjZXNzU2NyZWVuICYmIHN1Y2Nlc3NTY3JlZW4gIT0gdGhpcy5fY3VycmVudFNjcmVlbklEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zd2l0Y2hTY3JlZW4oc3VjY2Vzc1NjcmVlbiwgcmVzcG9uc2UsIG9Gb3JtKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoIXN1Y2Nlc3NTY3JlZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICBUaGlzLl9wLnJlbWVtYmVyID0gVGhpcy5fZXh0cmFFdmVudERhdGEucmVtZW1iZXJNZTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVuZEZsb3cocmVzcG9uc2UsIG9Gb3JtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHZhciBoYW5kbGVkID0gdGhpcy5oYW5kbGVFcnJvckF0dHJpYnV0ZShyZXNwb25zZSwgb0Zvcm0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGhhbmRsZWQpIHJldHVybjtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2Uuc2VjcmV0UXVlc3Rpb24pIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgc2VjcmV0UXVlc3Rpb25XaWRnZXRzID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlDbGFzcyh0aGlzLl9lbENvbnRhaW5lciwgJ2dpZ3lhLXNlY3JldC1xdWVzdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VjcmV0UXVlc3Rpb25XaWRnZXRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBlbFF1ZXN0aW9uID0gc2VjcmV0UXVlc3Rpb25XaWRnZXRzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgZWxzID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlBdHRyaWJ1dGUoZWxRdWVzdGlvbiwgJyonLCAnbmFtZScsICdzZWNyZXRRdWVzdGlvbicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IGVscy5sZW5ndGg7IHUrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzW3VdLmlubmVySFRNTCA9IHJlc3BvbnNlLnNlY3JldFF1ZXN0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVscyA9IGdpZ3lhLnV0aWxzLkRPTS5nZXRFbGVtZW50c0J5QXR0cmlidXRlKGVsUXVlc3Rpb24sICcqJywgJ25hbWUnLCAnc2VjcmV0QW5zd2VyJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIHUgPSAwOyB1IDwgZWxzLmxlbmd0aDsgdSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNbdV0ucmVtb3ZlQXR0cmlidXRlKCdkYXRhLWFsbG93LWVtcHR5Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxRdWVzdGlvbi5zdHlsZS5kaXNwbGF5ID0gJ2lubGluZSc7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2ggKHJlc3BvbnNlLmVycm9yQ29kZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQwMzA0MTogcmVzcG9uc2UuZXJyb3JNZXNzYWdlID0gdGhpcy5nZXRUZXh0KCdhY2NvdW50X2lzX2Rpc2FibGVkJyk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQwMzA0NDogcmVzcG9uc2UuZXJyb3JNZXNzYWdlID0gdGhpcy5nZXRUZXh0KCdzb3JyeV93ZV9hcmVfbm90X2FibGVfdG9fcHJvY2Vzc195b3VyX3JlZ2lzdHJhdGlvbicpOyBicmVhazsgLy9DT1BQQVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQwMzA0MjogcmVzcG9uc2UuZXJyb3JNZXNzYWdlID0gdGhpcy5nZXRUZXh0KCdpbnZhbGlkX2xvZ2luX29yX3Bhc3N3b3JkJyk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDQwMzA0NzogcmVzcG9uc2UuZXJyb3JNZXNzYWdlID0gdGhpcy5nZXRUZXh0KCd0aGVyZV9pc19ub191c2VyX3dpdGhfdGhhdF91c2VybmFtZV9vcl9lbWFpbCcpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0MDAwMDk6IC8vIFZhbGlkYXRpb25fZXJyb3JcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSA0MDAwMDY6IC8vIGludmFsaWQgcGFyYW1ldGVyIHZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZS5lcnJvck1lc3NhZ2UgPSB0aGlzLmdldFRleHQoJ3RoZXJlX2FyZV9lcnJvcnNfaW5feW91cl9mb3JtX3BsZWFzZV90cnlfYWdhaW4nKTsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBlcnJvckRldGFpbHM7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChyZXNwb25zZS5lcnJvckRldGFpbHNDb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMTAwMDAxOiBlcnJvckRldGFpbHMgPSB0aGlzLmdldFRleHQoJ29sZF9wYXNzd29yZF9jYW5ub3RfYmVfdGhlX3NhbWVfYXNfbmV3X3Bhc3N3b3JkJyk7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEwMDAwMjogZXJyb3JEZXRhaWxzID0gdGhpcy5nZXRUZXh0KCd3cm9uZ19wYXNzd29yZCcpOyBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgZ2lneWEuZXZlbnRzLmRpc3BhdGNoRXJyb3JGcm9tUmVzcG9uc2UodGhpcy5fcCwgcmVzcG9uc2UsIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2NyZWVuOiB0aGlzLl9jdXJyZW50U2NyZWVuSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IHRoaXMuX2xhc3RTdWJtaXR0ZWRGb3JtSUQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3BvbnNlOiBnaWd5YS51dGlscy5vYmplY3QuY2xvbmUodGhpcy5fbGFzdFN1Ym1pdHRlZEZvcm1SZXNwb25zZSlcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMuX2N1cnJlbnRTY3JlZW5JRCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmhpZGUoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yQ29kZSAhPSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgUmVjYXB0Y2hhID09ICdvYmplY3QnKSBSZWNhcHRjaGEucmVsb2FkKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAob0Zvcm0uc2hvd0Vycm9ycykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VydmVyRXJyb3IgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvckNvZGU6IHJlc3BvbnNlLmVycm9yQ29kZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogZXJyb3JEZXRhaWxzIHx8IHJlc3BvbnNlLmVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yRmxhZ3M6IHJlc3BvbnNlLmVycm9yRmxhZ3NcclxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhckZvcm1FcnJvcnMgPSBbXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyVmFsaWRhdGlvbkVycm9ycyA9IHJlc3BvbnNlLnZhbGlkYXRpb25FcnJvcnM7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChhclZhbGlkYXRpb25FcnJvcnMgJiYgYXJWYWxpZGF0aW9uRXJyb3JzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJWYWxpZGF0aW9uRXJyb3JzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkTmFtZSA9IGFyVmFsaWRhdGlvbkVycm9yc1tpXS5maWVsZE5hbWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGZpZWxkTmFtZXNwYWNlID0gZmllbGROYW1lLnNwbGl0KCcuJylbMF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFyRmllbGRzID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlBdHRyaWJ1dGUob0Zvcm0uX2VsRm9ybSwgJyonLCAnZGF0YS1naWd5YS1uYW1lJywgZmllbGROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoYXJGaWVsZHMubGVuZ3RoID09IDAgJiYgZmllbGROYW1lc3BhY2UgPT0gJ3Byb2ZpbGUnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyRmllbGRzID0gZ2lneWEudXRpbHMuRE9NLmdldEVsZW1lbnRzQnlBdHRyaWJ1dGUob0Zvcm0uX2VsRm9ybSwgJyonLCAnZGF0YS1naWd5YS1uYW1lJywgZmllbGROYW1lLnJlcGxhY2UoJ3Byb2ZpbGUuJywgJycpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyRmllbGRzLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGVsRmllbGQgPSBhckZpZWxkc1swXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyRm9ybUVycm9ycy5sZW5ndGggPT0gMCkgZWxGaWVsZC5mb2N1cygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdmFsaWRhdGlvbkVycm9yID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKGFyVmFsaWRhdGlvbkVycm9yc1tpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbGlkYXRpb25FcnJvci5maWVsZCA9IGVsRmllbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyRm9ybUVycm9ycy5wdXNoKHZhbGlkYXRpb25FcnJvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd0ZpZWxkRXJyb3IoZWxGaWVsZCwgYXJWYWxpZGF0aW9uRXJyb3JzW2ldLmVycm9yQ29kZSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGFyVmFsaWRhdGlvbkVycm9yc1tpXS5lcnJvckNvZGUgPT0gcHJpdmF0ZVNjb3BlLmVycm9yQ29kZXMuTUlTU0lOR19SRVFVSVJFRCB8fCBhclZhbGlkYXRpb25FcnJvcnNbaV0uZXJyb3JDb2RlID09IHByaXZhdGVTY29wZS5lcnJvckNvZGVzLlZBTElEQVRJT05fRVJST1IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZE5hbWUgPT0gJ2NhcHRjaGFhVGV4dCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcml2YXRlU2NvcGUud2Fybih0aGlzLl9JRCwgJ0NhcHRjaGEgaXMgcmVxdWlyZWQgYnV0IGNhcHRjaGEgd2lkZ2V0IGlzIG1pc3NpbmcgZnJvbSB0aGUgc3VibWl0dGVkIGZvcm0nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJpdmF0ZVNjb3BlLndhcm4odGhpcy5fSUQsIGZpZWxkTmFtZSArICcgaXMgbWFuZGF0b3J5L2ludmFsaWQgYnV0IGl0cyBmaWVsZCBpcyBtaXNzaW5nIGZyb20gdGhlIHN1Ym1pdHRlZCBmb3JtJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFyRm9ybUVycm9ycy5wdXNoKHNlcnZlckVycm9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb0Zvcm0uc2hvd0Vycm9ycyhbc2VydmVyRXJyb3JdLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgb0Zvcm0uc2hvd0Vycm9ycyhhckZvcm1FcnJvcnMsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhhbmRsZUVycm9yQXR0cmlidXRlOiBmdW5jdGlvbiAocmVzcG9uc2UsIG9Gb3JtKSB7XHJcbiAgICAgICAgICAgIHZhciBvQXR0cmlidXRlID0gcHJpdmF0ZVNjb3BlLm9FcnJvckF0dHJpYnV0ZXNbcmVzcG9uc2UuZXJyb3JDb2RlXTtcclxuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZU5hbWUgPSBvQXR0cmlidXRlID8gb0F0dHJpYnV0ZS5uYW1lIDogbnVsbDtcclxuICAgICAgICAgICAgdmFyIGF0dHJpYnV0ZVZhbHVlO1xyXG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgYXR0cmlidXRlVmFsdWUgPSB0aGlzLl9lbENvbnRhaW5lci5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkgfHwgdGhpcy5fZWxTY3JlZW5TZXQuZ2V0QXR0cmlidXRlKGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGlmIChvQXR0cmlidXRlLnJlcXVpcmVzRmluYWxpemUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9maW5hbGl6ZVJlZ2lzdHJhdGlvbk5lZWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKG9BdHRyaWJ1dGUucmVzZXRGaW5hbGl6ZU5lZWRlZFN0YXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fZmluYWxpemVSZWdpc3RyYXRpb25OZWVkZWQgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5zd2l0Y2hTY3JlZW4oYXR0cmlidXRlVmFsdWUsIHJlc3BvbnNlLCBvRm9ybSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXR0cmlidXRlTmFtZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHByaXZhdGVTY29wZS53YXJuKHRoaXMuX0lELCAnTWlzc2luZyBhdHRyaWJ1dGUgJyArIGF0dHJpYnV0ZU5hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgZW5kRmxvd0lzUGVuZGluZzogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKHRoaXMuX2ZpbmFsaXplUmVnaXN0cmF0aW9uTmVlZGVkICYmIHRoaXMuX3AucmVnVG9rZW4pO1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZW5kRmxvdzogZnVuY3Rpb24gKHJlcywgb0Zvcm0sIGRvbnRIaWRlKSB7XHJcbiAgICAgICAgICAgIHZhciBUaGlzID0gdGhpcztcclxuICAgICAgICAgICAgaWYgKHRoaXMuZW5kRmxvd0lzUGVuZGluZygpKSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5hY2NvdW50cy5maW5hbGl6ZVJlZ2lzdHJhdGlvbih0aGlzLl9wLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5jbHVkZTogJ3Byb2ZpbGUsZGF0YSxlbWFpbHMnLCBkb250SGFuZGxlU2NyZWVuU2V0OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrOiBmdW5jdGlvbiAocmVzcG9uc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmVycm9yQ29kZSA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9wLnJlZ1Rva2VuID0gbnVsbDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRoaXMuX2ZpbmFsaXplUmVnaXN0cmF0aW9uTmVlZGVkID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUaGlzLl9hcGlEYXRhID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgVGhpcy5vblNjcmVlblJlc3BvbnNlKHJlc3BvbnNlLCBvRm9ybSwgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIWRvbnRIaWRlKSB0aGlzLmhpZGUoJ2ZpbmlzaGVkJywgcmVzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0SW5zdGFuY2VSZWZTdHJpbmc6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgcmV0dXJuICdnaWd5YS5hY2NvdW50cy5wbHVnaW5zLnNjcmVlblNldC5pbnN0YW5jZXNbXFwnJyArIGVuY29kZVVSSUNvbXBvbmVudCh0aGlzLl9wWydzY3JlZW5TZXQnXSArICdfJyArIHRoaXMuX3BbJ2NvbnRhaW5lcklEJ10pICsgJ1xcJ10nXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59KSgpOyJdLCJzb3VyY2VSb290IjoiIn0=