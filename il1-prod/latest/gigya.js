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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core/Gigya.Js/app/main.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/es6-promise/dist/es6-promise.js":
/*!******************************************************!*\
  !*** ./node_modules/es6-promise/dist/es6-promise.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process, global) {/*!
 * @overview es6-promise - a tiny implementation of Promises/A+.
 * @copyright Copyright (c) 2014 Yehuda Katz, Tom Dale, Stefan Penner and contributors (Conversion to ES6 API by Jake Archibald)
 * @license   Licensed under MIT license
 *            See https://raw.githubusercontent.com/stefanpenner/es6-promise/master/LICENSE
 * @version   v4.2.8+1e68dce6
 */

(function (global, factory) {
	 true ? module.exports = factory() :
	undefined;
}(this, (function () { 'use strict';

function objectOrFunction(x) {
  var type = typeof x;
  return x !== null && (type === 'object' || type === 'function');
}

function isFunction(x) {
  return typeof x === 'function';
}



var _isArray = void 0;
if (Array.isArray) {
  _isArray = Array.isArray;
} else {
  _isArray = function (x) {
    return Object.prototype.toString.call(x) === '[object Array]';
  };
}

var isArray = _isArray;

var len = 0;
var vertxNext = void 0;
var customSchedulerFn = void 0;

var asap = function asap(callback, arg) {
  queue[len] = callback;
  queue[len + 1] = arg;
  len += 2;
  if (len === 2) {
    // If len is 2, that means that we need to schedule an async flush.
    // If additional callbacks are queued before the queue is flushed, they
    // will be processed by this flush that we are scheduling.
    if (customSchedulerFn) {
      customSchedulerFn(flush);
    } else {
      scheduleFlush();
    }
  }
};

function setScheduler(scheduleFn) {
  customSchedulerFn = scheduleFn;
}

function setAsap(asapFn) {
  asap = asapFn;
}

var browserWindow = typeof window !== 'undefined' ? window : undefined;
var browserGlobal = browserWindow || {};
var BrowserMutationObserver = browserGlobal.MutationObserver || browserGlobal.WebKitMutationObserver;
var isNode = typeof self === 'undefined' && typeof process !== 'undefined' && {}.toString.call(process) === '[object process]';

// test for web worker but not in IE10
var isWorker = typeof Uint8ClampedArray !== 'undefined' && typeof importScripts !== 'undefined' && typeof MessageChannel !== 'undefined';

// node
function useNextTick() {
  // node version 0.10.x displays a deprecation warning when nextTick is used recursively
  // see https://github.com/cujojs/when/issues/410 for details
  return function () {
    return process.nextTick(flush);
  };
}

// vertx
function useVertxTimer() {
  if (typeof vertxNext !== 'undefined') {
    return function () {
      vertxNext(flush);
    };
  }

  return useSetTimeout();
}

function useMutationObserver() {
  var iterations = 0;
  var observer = new BrowserMutationObserver(flush);
  var node = document.createTextNode('');
  observer.observe(node, { characterData: true });

  return function () {
    node.data = iterations = ++iterations % 2;
  };
}

// web worker
function useMessageChannel() {
  var channel = new MessageChannel();
  channel.port1.onmessage = flush;
  return function () {
    return channel.port2.postMessage(0);
  };
}

function useSetTimeout() {
  // Store setTimeout reference so es6-promise will be unaffected by
  // other code modifying setTimeout (like sinon.useFakeTimers())
  var globalSetTimeout = setTimeout;
  return function () {
    return globalSetTimeout(flush, 1);
  };
}

var queue = new Array(1000);
function flush() {
  for (var i = 0; i < len; i += 2) {
    var callback = queue[i];
    var arg = queue[i + 1];

    callback(arg);

    queue[i] = undefined;
    queue[i + 1] = undefined;
  }

  len = 0;
}

function attemptVertx() {
  try {
    var vertx = Function('return this')().require('vertx');
    vertxNext = vertx.runOnLoop || vertx.runOnContext;
    return useVertxTimer();
  } catch (e) {
    return useSetTimeout();
  }
}

var scheduleFlush = void 0;
// Decide what async method to use to triggering processing of queued callbacks:
if (isNode) {
  scheduleFlush = useNextTick();
} else if (BrowserMutationObserver) {
  scheduleFlush = useMutationObserver();
} else if (isWorker) {
  scheduleFlush = useMessageChannel();
} else if (browserWindow === undefined && "function" === 'function') {
  scheduleFlush = attemptVertx();
} else {
  scheduleFlush = useSetTimeout();
}

function then(onFulfillment, onRejection) {
  var parent = this;

  var child = new this.constructor(noop);

  if (child[PROMISE_ID] === undefined) {
    makePromise(child);
  }

  var _state = parent._state;


  if (_state) {
    var callback = arguments[_state - 1];
    asap(function () {
      return invokeCallback(_state, child, callback, parent._result);
    });
  } else {
    subscribe(parent, child, onFulfillment, onRejection);
  }

  return child;
}

/**
  `Promise.resolve` returns a promise that will become resolved with the
  passed `value`. It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    resolve(1);
  });

  promise.then(function(value){
    // value === 1
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.resolve(1);

  promise.then(function(value){
    // value === 1
  });
  ```

  @method resolve
  @static
  @param {Any} value value that the returned promise will be resolved with
  Useful for tooling.
  @return {Promise} a promise that will become fulfilled with the given
  `value`
*/
function resolve$1(object) {
  /*jshint validthis:true */
  var Constructor = this;

  if (object && typeof object === 'object' && object.constructor === Constructor) {
    return object;
  }

  var promise = new Constructor(noop);
  resolve(promise, object);
  return promise;
}

var PROMISE_ID = Math.random().toString(36).substring(2);

function noop() {}

var PENDING = void 0;
var FULFILLED = 1;
var REJECTED = 2;

function selfFulfillment() {
  return new TypeError("You cannot resolve a promise with itself");
}

function cannotReturnOwn() {
  return new TypeError('A promises callback cannot return that same promise.');
}

function tryThen(then$$1, value, fulfillmentHandler, rejectionHandler) {
  try {
    then$$1.call(value, fulfillmentHandler, rejectionHandler);
  } catch (e) {
    return e;
  }
}

function handleForeignThenable(promise, thenable, then$$1) {
  asap(function (promise) {
    var sealed = false;
    var error = tryThen(then$$1, thenable, function (value) {
      if (sealed) {
        return;
      }
      sealed = true;
      if (thenable !== value) {
        resolve(promise, value);
      } else {
        fulfill(promise, value);
      }
    }, function (reason) {
      if (sealed) {
        return;
      }
      sealed = true;

      reject(promise, reason);
    }, 'Settle: ' + (promise._label || ' unknown promise'));

    if (!sealed && error) {
      sealed = true;
      reject(promise, error);
    }
  }, promise);
}

function handleOwnThenable(promise, thenable) {
  if (thenable._state === FULFILLED) {
    fulfill(promise, thenable._result);
  } else if (thenable._state === REJECTED) {
    reject(promise, thenable._result);
  } else {
    subscribe(thenable, undefined, function (value) {
      return resolve(promise, value);
    }, function (reason) {
      return reject(promise, reason);
    });
  }
}

function handleMaybeThenable(promise, maybeThenable, then$$1) {
  if (maybeThenable.constructor === promise.constructor && then$$1 === then && maybeThenable.constructor.resolve === resolve$1) {
    handleOwnThenable(promise, maybeThenable);
  } else {
    if (then$$1 === undefined) {
      fulfill(promise, maybeThenable);
    } else if (isFunction(then$$1)) {
      handleForeignThenable(promise, maybeThenable, then$$1);
    } else {
      fulfill(promise, maybeThenable);
    }
  }
}

function resolve(promise, value) {
  if (promise === value) {
    reject(promise, selfFulfillment());
  } else if (objectOrFunction(value)) {
    var then$$1 = void 0;
    try {
      then$$1 = value.then;
    } catch (error) {
      reject(promise, error);
      return;
    }
    handleMaybeThenable(promise, value, then$$1);
  } else {
    fulfill(promise, value);
  }
}

function publishRejection(promise) {
  if (promise._onerror) {
    promise._onerror(promise._result);
  }

  publish(promise);
}

function fulfill(promise, value) {
  if (promise._state !== PENDING) {
    return;
  }

  promise._result = value;
  promise._state = FULFILLED;

  if (promise._subscribers.length !== 0) {
    asap(publish, promise);
  }
}

function reject(promise, reason) {
  if (promise._state !== PENDING) {
    return;
  }
  promise._state = REJECTED;
  promise._result = reason;

  asap(publishRejection, promise);
}

function subscribe(parent, child, onFulfillment, onRejection) {
  var _subscribers = parent._subscribers;
  var length = _subscribers.length;


  parent._onerror = null;

  _subscribers[length] = child;
  _subscribers[length + FULFILLED] = onFulfillment;
  _subscribers[length + REJECTED] = onRejection;

  if (length === 0 && parent._state) {
    asap(publish, parent);
  }
}

function publish(promise) {
  var subscribers = promise._subscribers;
  var settled = promise._state;

  if (subscribers.length === 0) {
    return;
  }

  var child = void 0,
      callback = void 0,
      detail = promise._result;

  for (var i = 0; i < subscribers.length; i += 3) {
    child = subscribers[i];
    callback = subscribers[i + settled];

    if (child) {
      invokeCallback(settled, child, callback, detail);
    } else {
      callback(detail);
    }
  }

  promise._subscribers.length = 0;
}

function invokeCallback(settled, promise, callback, detail) {
  var hasCallback = isFunction(callback),
      value = void 0,
      error = void 0,
      succeeded = true;

  if (hasCallback) {
    try {
      value = callback(detail);
    } catch (e) {
      succeeded = false;
      error = e;
    }

    if (promise === value) {
      reject(promise, cannotReturnOwn());
      return;
    }
  } else {
    value = detail;
  }

  if (promise._state !== PENDING) {
    // noop
  } else if (hasCallback && succeeded) {
    resolve(promise, value);
  } else if (succeeded === false) {
    reject(promise, error);
  } else if (settled === FULFILLED) {
    fulfill(promise, value);
  } else if (settled === REJECTED) {
    reject(promise, value);
  }
}

function initializePromise(promise, resolver) {
  try {
    resolver(function resolvePromise(value) {
      resolve(promise, value);
    }, function rejectPromise(reason) {
      reject(promise, reason);
    });
  } catch (e) {
    reject(promise, e);
  }
}

var id = 0;
function nextId() {
  return id++;
}

function makePromise(promise) {
  promise[PROMISE_ID] = id++;
  promise._state = undefined;
  promise._result = undefined;
  promise._subscribers = [];
}

function validationError() {
  return new Error('Array Methods must be provided an Array');
}

var Enumerator = function () {
  function Enumerator(Constructor, input) {
    this._instanceConstructor = Constructor;
    this.promise = new Constructor(noop);

    if (!this.promise[PROMISE_ID]) {
      makePromise(this.promise);
    }

    if (isArray(input)) {
      this.length = input.length;
      this._remaining = input.length;

      this._result = new Array(this.length);

      if (this.length === 0) {
        fulfill(this.promise, this._result);
      } else {
        this.length = this.length || 0;
        this._enumerate(input);
        if (this._remaining === 0) {
          fulfill(this.promise, this._result);
        }
      }
    } else {
      reject(this.promise, validationError());
    }
  }

  Enumerator.prototype._enumerate = function _enumerate(input) {
    for (var i = 0; this._state === PENDING && i < input.length; i++) {
      this._eachEntry(input[i], i);
    }
  };

  Enumerator.prototype._eachEntry = function _eachEntry(entry, i) {
    var c = this._instanceConstructor;
    var resolve$$1 = c.resolve;


    if (resolve$$1 === resolve$1) {
      var _then = void 0;
      var error = void 0;
      var didError = false;
      try {
        _then = entry.then;
      } catch (e) {
        didError = true;
        error = e;
      }

      if (_then === then && entry._state !== PENDING) {
        this._settledAt(entry._state, i, entry._result);
      } else if (typeof _then !== 'function') {
        this._remaining--;
        this._result[i] = entry;
      } else if (c === Promise$1) {
        var promise = new c(noop);
        if (didError) {
          reject(promise, error);
        } else {
          handleMaybeThenable(promise, entry, _then);
        }
        this._willSettleAt(promise, i);
      } else {
        this._willSettleAt(new c(function (resolve$$1) {
          return resolve$$1(entry);
        }), i);
      }
    } else {
      this._willSettleAt(resolve$$1(entry), i);
    }
  };

  Enumerator.prototype._settledAt = function _settledAt(state, i, value) {
    var promise = this.promise;


    if (promise._state === PENDING) {
      this._remaining--;

      if (state === REJECTED) {
        reject(promise, value);
      } else {
        this._result[i] = value;
      }
    }

    if (this._remaining === 0) {
      fulfill(promise, this._result);
    }
  };

  Enumerator.prototype._willSettleAt = function _willSettleAt(promise, i) {
    var enumerator = this;

    subscribe(promise, undefined, function (value) {
      return enumerator._settledAt(FULFILLED, i, value);
    }, function (reason) {
      return enumerator._settledAt(REJECTED, i, reason);
    });
  };

  return Enumerator;
}();

/**
  `Promise.all` accepts an array of promises, and returns a new promise which
  is fulfilled with an array of fulfillment values for the passed promises, or
  rejected with the reason of the first passed promise to be rejected. It casts all
  elements of the passed iterable to promises as it runs this algorithm.

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = resolve(2);
  let promise3 = resolve(3);
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // The array here would be [ 1, 2, 3 ];
  });
  ```

  If any of the `promises` given to `all` are rejected, the first promise
  that is rejected will be given as an argument to the returned promises's
  rejection handler. For example:

  Example:

  ```javascript
  let promise1 = resolve(1);
  let promise2 = reject(new Error("2"));
  let promise3 = reject(new Error("3"));
  let promises = [ promise1, promise2, promise3 ];

  Promise.all(promises).then(function(array){
    // Code here never runs because there are rejected promises!
  }, function(error) {
    // error.message === "2"
  });
  ```

  @method all
  @static
  @param {Array} entries array of promises
  @param {String} label optional string for labeling the promise.
  Useful for tooling.
  @return {Promise} promise that is fulfilled when all `promises` have been
  fulfilled, or rejected if any of them become rejected.
  @static
*/
function all(entries) {
  return new Enumerator(this, entries).promise;
}

/**
  `Promise.race` returns a new promise which is settled in the same way as the
  first passed promise to settle.

  Example:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 2');
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // result === 'promise 2' because it was resolved before promise1
    // was resolved.
  });
  ```

  `Promise.race` is deterministic in that only the state of the first
  settled promise matters. For example, even if other promises given to the
  `promises` array argument are resolved, but the first settled promise has
  become rejected before the other promises became fulfilled, the returned
  promise will become rejected:

  ```javascript
  let promise1 = new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve('promise 1');
    }, 200);
  });

  let promise2 = new Promise(function(resolve, reject){
    setTimeout(function(){
      reject(new Error('promise 2'));
    }, 100);
  });

  Promise.race([promise1, promise2]).then(function(result){
    // Code here never runs
  }, function(reason){
    // reason.message === 'promise 2' because promise 2 became rejected before
    // promise 1 became fulfilled
  });
  ```

  An example real-world use case is implementing timeouts:

  ```javascript
  Promise.race([ajax('foo.json'), timeout(5000)])
  ```

  @method race
  @static
  @param {Array} promises array of promises to observe
  Useful for tooling.
  @return {Promise} a promise which settles in the same way as the first passed
  promise to settle.
*/
function race(entries) {
  /*jshint validthis:true */
  var Constructor = this;

  if (!isArray(entries)) {
    return new Constructor(function (_, reject) {
      return reject(new TypeError('You must pass an array to race.'));
    });
  } else {
    return new Constructor(function (resolve, reject) {
      var length = entries.length;
      for (var i = 0; i < length; i++) {
        Constructor.resolve(entries[i]).then(resolve, reject);
      }
    });
  }
}

/**
  `Promise.reject` returns a promise rejected with the passed `reason`.
  It is shorthand for the following:

  ```javascript
  let promise = new Promise(function(resolve, reject){
    reject(new Error('WHOOPS'));
  });

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  Instead of writing the above, your code now simply becomes the following:

  ```javascript
  let promise = Promise.reject(new Error('WHOOPS'));

  promise.then(function(value){
    // Code here doesn't run because the promise is rejected!
  }, function(reason){
    // reason.message === 'WHOOPS'
  });
  ```

  @method reject
  @static
  @param {Any} reason value that the returned promise will be rejected with.
  Useful for tooling.
  @return {Promise} a promise rejected with the given `reason`.
*/
function reject$1(reason) {
  /*jshint validthis:true */
  var Constructor = this;
  var promise = new Constructor(noop);
  reject(promise, reason);
  return promise;
}

function needsResolver() {
  throw new TypeError('You must pass a resolver function as the first argument to the promise constructor');
}

function needsNew() {
  throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.");
}

/**
  Promise objects represent the eventual result of an asynchronous operation. The
  primary way of interacting with a promise is through its `then` method, which
  registers callbacks to receive either a promise's eventual value or the reason
  why the promise cannot be fulfilled.

  Terminology
  -----------

  - `promise` is an object or function with a `then` method whose behavior conforms to this specification.
  - `thenable` is an object or function that defines a `then` method.
  - `value` is any legal JavaScript value (including undefined, a thenable, or a promise).
  - `exception` is a value that is thrown using the throw statement.
  - `reason` is a value that indicates why a promise was rejected.
  - `settled` the final resting state of a promise, fulfilled or rejected.

  A promise can be in one of three states: pending, fulfilled, or rejected.

  Promises that are fulfilled have a fulfillment value and are in the fulfilled
  state.  Promises that are rejected have a rejection reason and are in the
  rejected state.  A fulfillment value is never a thenable.

  Promises can also be said to *resolve* a value.  If this value is also a
  promise, then the original promise's settled state will match the value's
  settled state.  So a promise that *resolves* a promise that rejects will
  itself reject, and a promise that *resolves* a promise that fulfills will
  itself fulfill.


  Basic Usage:
  ------------

  ```js
  let promise = new Promise(function(resolve, reject) {
    // on success
    resolve(value);

    // on failure
    reject(reason);
  });

  promise.then(function(value) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Advanced Usage:
  ---------------

  Promises shine when abstracting away asynchronous interactions such as
  `XMLHttpRequest`s.

  ```js
  function getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.send();

      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      };
    });
  }

  getJSON('/posts.json').then(function(json) {
    // on fulfillment
  }, function(reason) {
    // on rejection
  });
  ```

  Unlike callbacks, promises are great composable primitives.

  ```js
  Promise.all([
    getJSON('/posts'),
    getJSON('/comments')
  ]).then(function(values){
    values[0] // => postsJSON
    values[1] // => commentsJSON

    return values;
  });
  ```

  @class Promise
  @param {Function} resolver
  Useful for tooling.
  @constructor
*/

var Promise$1 = function () {
  function Promise(resolver) {
    this[PROMISE_ID] = nextId();
    this._result = this._state = undefined;
    this._subscribers = [];

    if (noop !== resolver) {
      typeof resolver !== 'function' && needsResolver();
      this instanceof Promise ? initializePromise(this, resolver) : needsNew();
    }
  }

  /**
  The primary way of interacting with a promise is through its `then` method,
  which registers callbacks to receive either a promise's eventual value or the
  reason why the promise cannot be fulfilled.
   ```js
  findUser().then(function(user){
    // user is available
  }, function(reason){
    // user is unavailable, and you are given the reason why
  });
  ```
   Chaining
  --------
   The return value of `then` is itself a promise.  This second, 'downstream'
  promise is resolved with the return value of the first promise's fulfillment
  or rejection handler, or rejected if the handler throws an exception.
   ```js
  findUser().then(function (user) {
    return user.name;
  }, function (reason) {
    return 'default name';
  }).then(function (userName) {
    // If `findUser` fulfilled, `userName` will be the user's name, otherwise it
    // will be `'default name'`
  });
   findUser().then(function (user) {
    throw new Error('Found user, but still unhappy');
  }, function (reason) {
    throw new Error('`findUser` rejected and we're unhappy');
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // if `findUser` fulfilled, `reason` will be 'Found user, but still unhappy'.
    // If `findUser` rejected, `reason` will be '`findUser` rejected and we're unhappy'.
  });
  ```
  If the downstream promise does not specify a rejection handler, rejection reasons will be propagated further downstream.
   ```js
  findUser().then(function (user) {
    throw new PedagogicalException('Upstream error');
  }).then(function (value) {
    // never reached
  }).then(function (value) {
    // never reached
  }, function (reason) {
    // The `PedgagocialException` is propagated all the way down to here
  });
  ```
   Assimilation
  ------------
   Sometimes the value you want to propagate to a downstream promise can only be
  retrieved asynchronously. This can be achieved by returning a promise in the
  fulfillment or rejection handler. The downstream promise will then be pending
  until the returned promise is settled. This is called *assimilation*.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // The user's comments are now available
  });
  ```
   If the assimliated promise rejects, then the downstream promise will also reject.
   ```js
  findUser().then(function (user) {
    return findCommentsByAuthor(user);
  }).then(function (comments) {
    // If `findCommentsByAuthor` fulfills, we'll have the value here
  }, function (reason) {
    // If `findCommentsByAuthor` rejects, we'll have the reason here
  });
  ```
   Simple Example
  --------------
   Synchronous Example
   ```javascript
  let result;
   try {
    result = findResult();
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
  findResult(function(result, err){
    if (err) {
      // failure
    } else {
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findResult().then(function(result){
    // success
  }, function(reason){
    // failure
  });
  ```
   Advanced Example
  --------------
   Synchronous Example
   ```javascript
  let author, books;
   try {
    author = findAuthor();
    books  = findBooksByAuthor(author);
    // success
  } catch(reason) {
    // failure
  }
  ```
   Errback Example
   ```js
   function foundBooks(books) {
   }
   function failure(reason) {
   }
   findAuthor(function(author, err){
    if (err) {
      failure(err);
      // failure
    } else {
      try {
        findBoooksByAuthor(author, function(books, err) {
          if (err) {
            failure(err);
          } else {
            try {
              foundBooks(books);
            } catch(reason) {
              failure(reason);
            }
          }
        });
      } catch(error) {
        failure(err);
      }
      // success
    }
  });
  ```
   Promise Example;
   ```javascript
  findAuthor().
    then(findBooksByAuthor).
    then(function(books){
      // found books
  }).catch(function(reason){
    // something went wrong
  });
  ```
   @method then
  @param {Function} onFulfilled
  @param {Function} onRejected
  Useful for tooling.
  @return {Promise}
  */

  /**
  `catch` is simply sugar for `then(undefined, onRejection)` which makes it the same
  as the catch block of a try/catch statement.
  ```js
  function findAuthor(){
  throw new Error('couldn't find that author');
  }
  // synchronous
  try {
  findAuthor();
  } catch(reason) {
  // something went wrong
  }
  // async with promises
  findAuthor().catch(function(reason){
  // something went wrong
  });
  ```
  @method catch
  @param {Function} onRejection
  Useful for tooling.
  @return {Promise}
  */


  Promise.prototype.catch = function _catch(onRejection) {
    return this.then(null, onRejection);
  };

  /**
    `finally` will be invoked regardless of the promise's fate just as native
    try/catch/finally behaves
  
    Synchronous example:
  
    ```js
    findAuthor() {
      if (Math.random() > 0.5) {
        throw new Error();
      }
      return new Author();
    }
  
    try {
      return findAuthor(); // succeed or fail
    } catch(error) {
      return findOtherAuther();
    } finally {
      // always runs
      // doesn't affect the return value
    }
    ```
  
    Asynchronous example:
  
    ```js
    findAuthor().catch(function(reason){
      return findOtherAuther();
    }).finally(function(){
      // author was either found, or not
    });
    ```
  
    @method finally
    @param {Function} callback
    @return {Promise}
  */


  Promise.prototype.finally = function _finally(callback) {
    var promise = this;
    var constructor = promise.constructor;

    if (isFunction(callback)) {
      return promise.then(function (value) {
        return constructor.resolve(callback()).then(function () {
          return value;
        });
      }, function (reason) {
        return constructor.resolve(callback()).then(function () {
          throw reason;
        });
      });
    }

    return promise.then(callback, callback);
  };

  return Promise;
}();

Promise$1.prototype.then = then;
Promise$1.all = all;
Promise$1.race = race;
Promise$1.resolve = resolve$1;
Promise$1.reject = reject$1;
Promise$1._setScheduler = setScheduler;
Promise$1._setAsap = setAsap;
Promise$1._asap = asap;

/*global self*/
function polyfill() {
  var local = void 0;

  if (typeof global !== 'undefined') {
    local = global;
  } else if (typeof self !== 'undefined') {
    local = self;
  } else {
    try {
      local = Function('return this')();
    } catch (e) {
      throw new Error('polyfill failed because global object is unavailable in this environment');
    }
  }

  var P = local.Promise;

  if (P) {
    var promiseToString = null;
    try {
      promiseToString = Object.prototype.toString.call(P.resolve());
    } catch (e) {
      // silently ignored
    }

    if (promiseToString === '[object Promise]' && !P.cast) {
      return;
    }
  }

  local.Promise = Promise$1;
}

// Strange compat..
Promise$1.polyfill = polyfill;
Promise$1.Promise = Promise$1;

return Promise$1;

})));




/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../process/browser.js */ "./node_modules/process/browser.js"), __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/process/browser.js":
/*!*****************************************!*\
  !*** ./node_modules/process/browser.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = __webpack_provided_Object_dot_assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = gigya.Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new gigya.Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? gigya.Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new gigya.Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { gigya.Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/core/Gigya.Js/app/API/ApisList.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/API/ApisList.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var ServerApi_1 = __webpack_require__(/*! src/core/Gigya.Js/app/API/ServerApi */ "./src/core/Gigya.Js/app/API/ServerApi.ts");
var UiApi_1 = __webpack_require__(/*! src/core/Gigya.Js/app/API/UiApi */ "./src/core/Gigya.Js/app/API/UiApi.ts");
var browser_1 = __webpack_require__(/*! ../Utils/browser */ "./src/core/Gigya.Js/app/Utils/browser.ts");
var localStorage_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/localStorage */ "./src/core/Gigya.Js/app/Utils/localStorage.ts");
var DOM_1 = __webpack_require__(/*! ../Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var functions_1 = __webpack_require__(/*! ../Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
// Server and widget public APIs -- TODO: build process
exports.defaultApiSchema = 'ctag|APIKey|cid|oauth_token|source|sourceData|usePost|refUID|fb_UID|fb_at|fb_exp|environment|noAuth';
exports.defaultOauthSchema = 'ctag|temporary_account|authFlow|connectWithoutLogin|provider|redirectMethod|redirect_uri|pendingRegistration|lang|regSource|extraPermissions|sessionExpiration|forceAuthentication|includeiRank|includeAllIdentities|extraFields|enabledProviders|disabledProviders|signIDs|openIDUsername|openIDURL|openIDProviderLogo|openIDProviderName|finalizeRegistration|include|actionAttributes|profileAttributes|googlePlayAppID|bp_channel_url|loginIfExists|includeUserInfo|redirectURL|authCodeOnly|enablePopupLocation|invite|regToken|loginMode|apiDomain|conflictHandling|forcePermissions|signKeys|dataCenter';
exports.postBookmarkSchema = 'provider|URL|url|title|description|target|cid|APIKey|shortURLs|source|sourceData|providerKey|thumbnailURL|tags|userAction|[providerCapability=actions]UserAction|actionAttributes|facebookDialogType';
exports.loginMethods = {
    'socialize.login': 1,
    'socialize.addConnection': 1,
    'socialize.notifyLogin': 1,
    'socialize.linkAccounts': 1,
    'accounts.login': 1,
    'accounts.otp.login': 1,
    'accounts.auth.login': 1,
    'accounts.socialLogin': 1,
    'accounts.linkAccounts': 1,
    'accounts.register': 1,
    'accounts.finalizeRegistration': 1,
};
var loginClearSessionCondition = function (params) { return params['loginMode'] !== 'link' && params['loginMode'] !== 'reAuth'; };
var noAuthPreProcessor = function (params, callback) {
    params['noAuth'] = true; // so login token won't be attached to request
    callback();
};
var globalAccountRegistrationPreProcessor = function (params, callback) {
    if (window.gigya.globalAccount.dataCenter) // hint for "accounts.initRegistration" to be forwarded to the correct dc
        params['dataCenter'] = window.gigya.globalAccount.dataCenter;
    callback();
};
exports.logoutBehaviour = {
    logoutBeforeServerResponse: true,
    alwaysSendLogoutToServer: false,
};
exports.logoutMethods = {
    'socialize.logout': 1,
    'accounts.logout': 1,
    'socialize.deleteAccount': 1,
    'socialize.unlinkAccounts': 1,
};
var logoutPreProcessor = function (params, callback) {
    if (window.gigya.partnerSettings.ssoKey)
        params.signIDs = true;
    callback();
};
var logoutRequireSession = function () { return !exports.logoutBehaviour.alwaysSendLogoutToServer; };
exports.arApiList = [
    new ServerApi_1.ServerApi('socialize.login', exports.defaultOauthSchema, false, {
        oauth: true,
        preprocessor: globalAccountRegistrationPreProcessor
    }, {
        clearSessionCondition: loginClearSessionCondition
    }),
    new ServerApi_1.ServerApi('socialize.addConnection', exports.defaultOauthSchema, false, {
        oauth: true,
    }, {}),
    new ServerApi_1.ServerApi('socialize.requestPermissions', exports.defaultOauthSchema, true, {
        oauth: true,
        defaultParams: { forcePermissions: true },
    }),
    /*new ServerApi('socialize.postBookmark',
            defaultOauthSchema,
            false, {
                oauth: true
            }),*/
    new ServerApi_1.ServerApi('accounts.socialLogin', exports.defaultOauthSchema, false, {
        oauth: true,
        preprocessor: globalAccountRegistrationPreProcessor
    }, {
        clearSessionCondition: loginClearSessionCondition
    }),
    new UiApi_1.UiApi('showDebugUI', 'socialize.plugins.debug', {}, {}, '', {
        allowPopup: true,
    }),
    UiApi_1.UiApi.createApi('showMyPhotoUI', 'accounts', 'profilePhoto.MyPhotoPlugin', 'accounts.plugins.profilePhoto'),
    // Uses BasePlugin
    UiApi_1.UiApi.createApi('showRatingUI', 'comments', 'rating.RatingPlugin', 'comments.plugins.rating'),
    UiApi_1.UiApi.createApi('runJsUnitTests', '_', 'JsUtRunner.Jasmine.JasmineUtRunnerPlugin', '_.plugins.jsUtRunner'),
    UiApi_1.UiApi.createApi('loadBasePlugin', '_', 'Mock.MockPlugin', '_.plugins.mock'),
    new UiApi_1.UiApi('showCommentsUI', 'comments.plugins.comments', { width: 500 }, {}, '', {
        apiName: 'comments.showCommentsUI1',
    }),
    new UiApi_1.UiApi('showCommentsUI', 'comments.plugins.comments2', { width: 500 }, {}, '', {
        apiName: 'comments.showCommentsUI2',
    }),
    UiApi_1.UiApi.versionSelector('showCommentsUI', 'comments', '2', [
        {
            versionName: '1',
            method: window.gigya.comments.showCommentsUI1,
            additionalParams: { ctag: 'comments_v1' },
        },
        {
            versionName: '2',
            method: window.gigya.comments.showCommentsUI2,
            additionalParams: { ctag: 'comments_v2' },
            isSupported: function () { return browser_1.isModern(); },
        },
    ]),
    new UiApi_1.UiApi('showShareUI', 'socialize.plugins.share', { width: 520, height: 320 }, {
        width: 595,
        height: 324
    }, 'userAction', {
        allowPopup: true,
        preprocessor: function (params, callback) {
            var operationMode = params['operationMode'];
            if (operationMode)
                operationMode = operationMode.toLowerCase().replace(/ /g, '');
            if (!params['containerID']) {
                delete params['width'];
                delete params['height'];
            }
            window.gigya._.apiAdapter.isSessionValid(params, function (isValid) {
                if (operationMode == 'simpleshare' || (operationMode == 'autodetect' && !isValid)) {
                    window.gigya.socialize.showSimpleShareUI(params);
                }
                else {
                    callback();
                }
            });
        },
    }),
    UiApi_1.UiApi.createApi('showMessageUI', '_', 'messages.MessagesPlugin', '_.plugins.messages'),
    new UiApi_1.UiApi('showLoginUI_v1', 'socialize.plugins.login', { width: 120, height: 110 }, {
        width: 280,
        height: 220
    }, '', { allowPopup: true }),
    UiApi_1.UiApi.createApi('showLoginUI_v2', 'socialize', 'login_v2.LoginPlugin', 'socialize.plugins.login_v2'),
    UiApi_1.UiApi.versionSelector('showLoginUI', 'socialize', '1', [
        {
            versionName: '1',
            method: window.gigya.socialize.showLoginUI_v1,
        },
        {
            versionName: '2',
            method: window.gigya.socialize.showLoginUI_v2,
        },
    ]),
    new UiApi_1.UiApi('showAddConnectionsUI_v1', 'socialize.plugins.login', { width: 110, height: 65 }, {
        width: 250,
        height: 200
    }, '', { allowPopup: true }),
    UiApi_1.UiApi.createApi('showAddConnectionsUI_v2', 'socialize', 'login_v2.LoginPlugin', 'socialize.plugins.login_v2'),
    UiApi_1.UiApi.versionSelector('showAddConnectionsUI', 'socialize', '1', [
        {
            versionName: '1',
            method: window.gigya.socialize.showAddConnectionsUI_v1,
        },
        {
            versionName: '2',
            method: window.gigya.socialize.showAddConnectionsUI_v2,
        },
    ]),
    UiApi_1.UiApi.createApi('showEditConnectionsUI', 'socialize', 'editConnections.EditConnectionPlugin', 'socialize.plugins.edit'),
    new UiApi_1.UiApi('showShareBarUI', 'socialize.plugins.reactions', { shareCountCacheTimeout: 30 }, {}, 'userAction|shareButtons'),
    new UiApi_1.UiApi('showReactionsBarUI', 'socialize.plugins.reactions', {}, {}, 'userAction|barID|reactions', {
        preprocessor: function (params, callback) {
            if (!params['barID'])
                params['barID'] = params['itemID'];
            callback();
        },
    }),
    new UiApi_1.UiApi('showMiniShareUI', 'socialize.plugins.minishare', { width: 320, height: 153 }, {}, '', { allowPopup: true }),
    new UiApi_1.UiApi('showBookmarkUI', 'socialize.plugins.bookmark', { width: 310, height: 250 }, { width: 310, height: 310 }),
    new UiApi_1.UiApi('showSimpleShareUI', 'socialize.plugins.simpleShare', { width: 280, height: 175 }, {}, 'userAction', {
        allowPopup: true,
        dontLoadPluginsCore: true,
        waitForAPIQueue: true,
    }),
    new UiApi_1.UiApi('showShareMobileUI', 'socialize.plugins.shareMobile', {}, {}, 'userAction', { allowPopup: true }),
    new UiApi_1.UiApi('showUserStatusUI', 'gm.plugins.userStatus', {
        width: 300,
        hidePoints: false,
        hideActions: false
    }, {}, '', {
        requireSession: true,
    }),
    new UiApi_1.UiApi('showAchievementsUI', 'gm.plugins.achievements', {
        width: 300,
        height: 100,
        excludeChallenges: '_default'
    }),
    new UiApi_1.UiApi('showChallengeStatusUI', 'gm.plugins.achievements', { width: 300, height: 100, challenge: '_default' }),
    new UiApi_1.UiApi('showLeaderboardUI', 'gm.plugins.leaderboard', { width: 300 }, {}, '', {
        preprocessor: function (params, callback) {
            if (params && params.height)
                params.height = null;
            callback();
        },
    }),
    new UiApi_1.UiApi('showNotifications', 'gm.plugins.notifications', {}, {}, '', {
        preprocessor: function (params, callback) {
            var localSettings = localStorage_1.getObject('gmSettings');
            if (!(localSettings && localSettings['disableNotifications'])) {
                params.containerID = 'gigNotifications';
                if (!document.getElementById(params.containerID)) {
                    var container = document.createElement('div');
                    container.id = params.containerID;
                    container.style.position = 'absolute';
                    container.style.left = '-1000px';
                    // Read the alert to the user when using screen reader.
                    container.setAttribute('role', 'alert');
                    container.setAttribute('aria-live', 'polite');
                    container.setAttribute('aria-atomic', 'true');
                    DOM_1.appendToBody(container);
                }
                callback();
            }
        },
    }),
    new UiApi_1.UiApi('showTfaUI', 'accounts.plugins.tfa', { width: 325 }),
    UiApi_1.UiApi.createApi('showScreenSet', 'accounts', 'ScreenSet.ScreenSetPlugin', 'accounts.plugins.screenSet', undefined, ['hideScreenSet', 'switchScreen']),
    new ServerApi_1.ServerApi('socialize.getAvailableProviders', 'enabledProviders|disabledProviders|requiredCapabilities'),
    new ServerApi_1.ServerApi('socialize.notifyLogin', 'siteUID|UIDTimestamp|UIDSig|UIDNonce|provider|authToken|tokenSecret|regSource|tokenExpiration|sessionHandle|sessionHandleExpiration|userInfo|providerSessions|sessionExpiration|authCode|includeAllIdentitiesincludeiRank|group|settings|extraFields|signIDs|newUser|actionAttributes|profileAttributes|bp_channel_url|signKeys', false, undefined, { clearSession: true }),
    new ServerApi_1.ServerApi('socialize.shortenURL', 'URL'),
    new ServerApi_1.ServerApi('socialize.convertAction', 'userAction|[providerCapability=actions]UserAction|provider'),
    new ServerApi_1.ServerApi('socialize.getReactionsCount', 'barID|buttonIDs|reportLoad'),
    new ServerApi_1.ServerApi('socialize.incrementReactionsCount', 'barID|buttonID|count|actionAttributes|profileAttributes'),
    new ServerApi_1.ServerApi('socialize.deleteAccount', undefined, true),
    new ServerApi_1.ServerApi('socialize.delUserSettings', 'group|settings', true),
    new ServerApi_1.ServerApi('socialize.getContacts', 'enabledProviders|disabledProviders', true),
    new ServerApi_1.ServerApi('socialize.getFriendsInfo', 'enabledProviders|disabledProviders|detailLevel|UIDs|siteUsersOnly|requiredCapabilities|signIDs', true),
    new ServerApi_1.ServerApi('socialize.getRawData', 'provider|UID|fields|dataFormat|path', true),
    new ServerApi_1.ServerApi('socialize.getSessionInfo', 'provider|paddingMode|encrypt|signIDs|encryptAll', true),
    new ServerApi_1.ServerApi('socialize.getUserInfo', 'enabledProviders|disabledProviders|signIDs|includeiRank|includeAllIdentities|extraFields|group|settings|includeOpenidUID|include', true),
    new ServerApi_1.ServerApi('socialize.getUserSettings', 'group|settings|regToken', true, undefined, {}, 'regToken'),
    new ServerApi_1.ServerApi('socialize.checkin', 'enabledProviders|disabledProviders|placeID|comment|latitude|longitude|actionAttributes|profileAttributes', true),
    new ServerApi_1.ServerApi('socialize.logout', 'signIDs|samlContext|sustainLogoutURLs', true, { preprocessor: logoutPreProcessor, disableCache: true }, { requiresSession: logoutRequireSession }),
    new ServerApi_1.ServerApi('socialize.notifyRegistration', 'siteUID|UIDTimestamp|UIDSig', true),
    new ServerApi_1.ServerApi('socialize.publishUserAction', 'userAction|[providerCapability=actions]UserAction|enabledProviders|disabledProviders|target|shortURLs|userLocation|tags|actionAttributes|profileAttributes', true),
    new ServerApi_1.ServerApi('socialize.removeConnection', 'provider|lastIdentityHandling|removeLoginID', true),
    new ServerApi_1.ServerApi('socialize.setStatus', 'shortURLs|status|[providerCapability=status]Status|enabledProviders|disabledProviders|userLocation|actionAttributes|profileAttributes', true),
    new ServerApi_1.ServerApi('socialize.setUID', 'siteUID|UIDTimestamp|UIDSig', true),
    new ServerApi_1.ServerApi('socialize.setUserSettings', 'group|settings|regToken', true, undefined, {}, 'regToken'),
    new ServerApi_1.ServerApi('socialize.unlinkAccounts', undefined, true),
    new ServerApi_1.ServerApi('socialize.sendEmail', 'dontSendEmail|companyName|lang|emails|emailSubject|emailBody|linkBack|senderEmail|senderName|userMsg|shortURLs|userAction|[providerCapability=actions]UserAction|actionAttributes|profileAttributes|captchaTicket|lang', false, undefined, {}),
    new ServerApi_1.ServerApi('socialize.facebookGraphOperation', 'graphPath|graphParams|authRequired|method|authType'),
    new ServerApi_1.ServerApi('socialize.getTopShares', 'age|tag|limit'),
    new ServerApi_1.ServerApi('socialize.notifySSOLogin', 'bp_channel_url'),
    new ServerApi_1.ServerApi('gm.getChallengeStatus', 'UID|includeChallenges|excludeChallenges|details|lang|actionAttributes|profileAttributes'),
    new ServerApi_1.ServerApi('gm.resetLevelStatus', 'challenges|actionAttributes|profileAttributes', true),
    new ServerApi_1.ServerApi('gm.getTopUsers', 'challenge|totalCount|friendsCount|includeSelf|period|lang|actionAttributes|profileAttributes'),
    new ServerApi_1.ServerApi('gm.getChallengeConfig', 'UID|includeChallenges|excludeChallenges|lang|actionAttributes|profileAttributes|expandActions'),
    new ServerApi_1.ServerApi('gm.notifyAction', 'action|operation|challengeIDs|actionAttributes|profileAttributes', true),
    new ServerApi_1.ServerApi('comments.updateComment', 'categoryID|streamID|commentID|commentText|commentTitle|ratings|mediaItems|taggedUsers'),
    new ServerApi_1.ServerApi('comments.postComment', 'categoryID|streamID|parentID|guestName|guestEmail|commentText|anonymous|mediaItems|privacy|feedID|userAction|[providerCapability=actions]UserAction|scope|enabledProviders|disabledProviders|shortURLs|commentTitle|ratings|tags|taggedUsers|streamTags|actionAttributes|profileAttributes'),
    new ServerApi_1.ServerApi('comments.getComments', 'categoryID|streamID|includeSettings|start|startTS|threadLimit|sort|threaded|threadDepth|includeStreamInfo|includeOpenidUID|includeUID|includeReplies|tags|dataFormat|markupType|includeUserOptions|includeUserComments|includeRatingsDims|includeUserHighlighting|pinnedCommentID|lang'),
    new ServerApi_1.ServerApi('comments.setStreamInfo', 'categoryID|streamID|streamTitle|streamURL|streamInfoSig|streamTags'),
    new ServerApi_1.ServerApi('comments.getTopStreams', 'categoryID|limit|maxStreamAge|includeLastComment|streamTag|minRatingsCount'),
    new ServerApi_1.ServerApi('comments.getTopRatedStreams', 'categoryID|limit|maxStreamAge|ratingClass|minRatingsCount|streamTag'),
    new ServerApi_1.ServerApi('comments.getStreamInfo', 'categoryID|streamID|streamIDs|includeLastComment|includeRatingsDims|includeRatingDetails'),
    new ServerApi_1.ServerApi('comments.flagComment', 'categoryID|streamID|commentID|actionAttributes|profileAttributes'),
    new ServerApi_1.ServerApi('comments.vote', 'categoryID|streamID|commentID|vote|actionAttributes|profileAttributes', true),
    new ServerApi_1.ServerApi('comments.getUserVotes', 'categoryID|streamID', true),
    new ServerApi_1.ServerApi('comments.getUserComments', 'categoryID|streamID|tag|senderUID|start|limit|sort|includeReplies|includeStreamInfo|includeUserHighlighting', true),
    new ServerApi_1.ServerApi('comments.getFriendsComments', 'categoryID|streamID|start|limit|includeUID|sort|includeReplies|includeStreamInfo', true),
    new ServerApi_1.ServerApi('comments.getThread', 'categoryID|streamID|commentID|start|includeUID|limit|threadDepth|sort'),
    new ServerApi_1.ServerApi('comments.deleteComment', 'categoryID|streamID|commentID', true),
    new ServerApi_1.ServerApi('comments.getRelatedUsers', 'categoryID|streamID|parentCommentID|usernamePrefix|limit'),
    new ServerApi_1.ServerApi('comments.analyzeMediaItem', 'categoryID|urls'),
    new ServerApi_1.ServerApi('comments.subscribe', 'categoryID|streamID|email|lang'),
    new ServerApi_1.ServerApi('comments.unsubscribe', 'categoryID|streamID|unsubscribeToken'),
    new ServerApi_1.ServerApi('comments.setUserOptions', 'replyNotifications|notificationsEmail|notificationsLanguage', true),
    new ServerApi_1.ServerApi('comments.getUserOptions', 'ServerApiKey', true),
    new ServerApi_1.ServerApi('gcs.getUserData', 'type|fields', true),
    new ServerApi_1.ServerApi('gcs.setUserData', 'data|type|updateBehavior', true),
    new ServerApi_1.ServerApi('gcs.search', 'expTime|querySig|query'),
    new ServerApi_1.ServerApi('gcs.getSchema', 'schemaType'),
    new ServerApi_1.ServerApi('accounts.b2b.registerOrganization', 'organization|requester', false, undefined, { forcePost: true }),
    new ServerApi_1.ServerApi('accounts.b2b.getOrganizationSchema', '', false, { preprocessor: noAuthPreProcessor }),
    new ServerApi_1.ServerApi('accounts.login', 'loginID|password|sessionExpiration|targetEnv|regToken|include|actionAttributes|profileAttributes|includeUserInfo|includeDynamicSchema|bp_channel_url|captchaToken|captchaText|loginMode|signKeys|lang', false, undefined, {
        clearSessionCondition: loginClearSessionCondition,
        forcePost: true
    }),
    new ServerApi_1.ServerApi('accounts.linkAccounts', 'loginID|password|sessionExpiration|targetEnv|include|regToken|includeUserInfo|bp_channel_url|signKeys', false, undefined, { forcePost: true }),
    new ServerApi_1.ServerApi('accounts.initRegistration', 'sdk|isLite|dataCenter', false, {
        preprocessor: globalAccountRegistrationPreProcessor,
    }, { clearSession: true }),
    new ServerApi_1.ServerApi('accounts.register', 'username|email|password|UID|regToken|siteUID|secretQuestion|secretAnswer|regSource|profile|preferences|displayedPreferences|data|captchaText|captchaToken|lang|hashedPassword|pwHashAlgorithm|skipVerification|finalizeRegistration|targetEnv|sessionExpiration|include|actionAttributes|profileAttributes|includeUserInfo|bp_channel_url|signKeys|subscriptions', false, undefined, { forcePost: true }),
    new ServerApi_1.ServerApi('accounts.finalizeRegistration', 'regToken|targetEnv|include|includeUserInfo|bp_channel_url|allowAccountsLinking|signKeys|subscriptions'),
    new ServerApi_1.ServerApi('accounts.captchaImage', 'regToken'),
    new ServerApi_1.ServerApi('accounts.importProfilePhoto', 'regToken|URL|publish'),
    new ServerApi_1.ServerApi('accounts.setProfilePhoto', 'regToken|publish|photoBytes'),
    new ServerApi_1.ServerApi('accounts.resetPassword', 'lang|loginID|passwordResetToken|secretAnswer|securityFields|newPassword|email', false, undefined, {
        forcePost: true,
    }),
    new ServerApi_1.ServerApi('accounts.isAvailableLoginID', 'loginID'),
    new ServerApi_1.ServerApi('accounts.resendVerificationCode', 'regToken|email'),
    new ServerApi_1.ServerApi('accounts.getCaptcha', ''),
    new ServerApi_1.ServerApi('accounts.getPolicies', 'sections'),
    new ServerApi_1.ServerApi('accounts.getSchema', 'sections|schemaType', false, {
        preprocessor: noAuthPreProcessor,
    }),
    new ServerApi_1.ServerApi('accounts.verifyLogin', 'include|extraProfileFields|targetEnv', true),
    new ServerApi_1.ServerApi('accounts.getAccountInfo', 'include|extraProfileFields|regToken', true, {}, {}, 'regToken'),
    new ServerApi_1.ServerApi('accounts.setAccountInfo', 'profile|preferences|displayedPreferences|data|regToken|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|conflictHandling|tfaStatus|rba|subscriptions|preferences|lang', true, undefined, { forcePost: true }, 'regToken'),
    new ServerApi_1.ServerApi('accounts.logout', 'signIDs|samlContext|sustainLogoutURLs', true, { preprocessor: logoutPreProcessor, disableCache: true }, { requiresSession: logoutRequireSession }),
    new ServerApi_1.ServerApi('accounts.search', 'expTime|querySig|query'),
    new ServerApi_1.ServerApi('accounts.getScreenSets', 'screenSetIDs|include|lang|screenSetVersion', false, {
        preprocessor: noAuthPreProcessor,
    }, {}),
    new ServerApi_1.ServerApi('accounts.getConflictingAccount', 'regToken|loginID'),
    new ServerApi_1.ServerApi('accounts.incrementCounters', 'counters', true, {
        preprocessor: function (params, callback) {
            var defaultPath = params['actionCounterPath'];
            var counters = params['counters'];
            if (defaultPath && counters) {
                for (var i = 0; i < counters.length; i++) {
                    var counter = counters[i];
                    if (typeof counter == 'object' && !counter['path']) {
                        counter['path'] = defaultPath;
                    }
                }
            }
            callback();
        },
    }),
    new ServerApi_1.ServerApi('accounts.getCounters', 'counters', true),
    new ServerApi_1.ServerApi('accounts.getJWT', 'fields|expiration', true),
    new ServerApi_1.ServerApi('accounts.tfa.getProviders', 'regToken', true, {}, {}, 'regToken'),
    new ServerApi_1.ServerApi('accounts.tfa.initTFA', 'provider|mode|regToken', false, {}, {}),
    new ServerApi_1.ServerApi('accounts.tfa.finalizeTFA', 'gigyaAssertion|providerAssertion|tempDevice|regToken', true, {}, {}, 'regToken'),
    new ServerApi_1.ServerApi('accounts.tfa.deactivateProvider', 'provider', true),
    new ServerApi_1.ServerApi('accounts.tfa.unregisterDevice', 'allDevices', true),
    new ServerApi_1.ServerApi('accounts.tfa.backupcodes.get', 'gigyaAssertion', true),
    new ServerApi_1.ServerApi('accounts.tfa.backupcodes.create', 'gigyaAssertion', true),
    new ServerApi_1.ServerApi('accounts.tfa.backupcodes.verify', 'gigyaAssertion|code|regToken', false),
    new ServerApi_1.ServerApi('accounts.tfa.phone.getRegisteredPhoneNumbers', 'gigyaAssertion', false, {
        preprocessor: noAuthPreProcessor,
    }, {}),
    new ServerApi_1.ServerApi('accounts.tfa.phone.removePhone', 'gigyaAssertion|phoneId', false, {}, {}),
    new ServerApi_1.ServerApi('accounts.tfa.phone.sendVerificationCode', 'gigyaAssertion|lang|phoneID|phone|method|regToken', false, {}, {}),
    new ServerApi_1.ServerApi('accounts.tfa.phone.completeVerification', 'gigyaAssertion|phvToken|code|regToken', false, {}, {}),
    new ServerApi_1.ServerApi('accounts.tfa.email.getEmails', 'gigyaAssertion', false, {
        preprocessor: noAuthPreProcessor,
    }, {}),
    new ServerApi_1.ServerApi('accounts.tfa.email.sendVerificationCode', 'emailID|gigyaAssertion|lang|regToken', false, {}, {}),
    new ServerApi_1.ServerApi('accounts.tfa.email.completeVerification', 'gigyaAssertion|phvToken|code|regToken', false, {}, {}),
    new ServerApi_1.ServerApi('accounts.tfa.totp.register', 'gigyaAssertion', false, {}, {}),
    new ServerApi_1.ServerApi('accounts.tfa.totp.verify', 'gigyaAssertion|sctToken|code|regToken', false, {}, {}),
    new ServerApi_1.ServerApi('accounts.tfa.push.isVerified', 'gigyaAssertion|regToken', false, {}, {}),
    new ServerApi_1.ServerApi('accounts.tfa.push.sendVerification', 'gigyaAssertion|regToken', false, {}, {}),
    new ServerApi_1.ServerApi('accounts.b2b.delegatedAdminLogin', 'orgId', true, {}, {}),
    new ServerApi_1.ServerApi('accounts.b2b.setOrganizationContext', 'bpid', true, {}, {}),
    new ServerApi_1.ServerApi('accounts.b2b.getOrganizationContext', '', true, {}, {}),
    new ServerApi_1.ServerApi('accounts.otp.sendCode', 'regToken|phoneNumber|email|lang', false, {}, { forcePost: true }),
    new ServerApi_1.ServerApi('accounts.otp.login', 'vToken|code|targetEnv|includeUserInfo|include|regSource|sessionExpiration', false, {}, { forcePost: true }),
    new ServerApi_1.ServerApi('accounts.otp.update', 'vToken|code|regToken', false, {}, {}),
    new ServerApi_1.ServerApi('accounts.auth.getMethods', 'identifier', false, {}, {}),
    new ServerApi_1.ServerApi('accounts.auth.push.sendVerification', 'identifier', false, {}, {}),
    new ServerApi_1.ServerApi('accounts.auth.push.isVerified', 'vToken', false, {}, {}),
    new ServerApi_1.ServerApi('accounts.auth.login', 'accessToken|sessionExpiration|targetEnv|include|includeUserInfo|loginMode|lang', false, undefined, {
        clearSessionCondition: loginClearSessionCondition,
        forcePost: true,
    }),
    new ServerApi_1.ServerApi('ds.store', 'type|data|oid|updateBehavior'),
    new ServerApi_1.ServerApi('ds.get', 'type|data|oid|fields'),
    new ServerApi_1.ServerApi('ds.search', 'expTime|querySig|query'),
    new ServerApi_1.ServerApi('ds.getSchema', ''),
    new ServerApi_1.ServerApi('ds.delete', 'type|oid|fields'),
    new ServerApi_1.ServerApi('ids.getAccountInfo', 'include|extraProfileFields', true),
    new ServerApi_1.ServerApi('ids.setAccountInfo', 'profile|preferences|data|oldPassword|password|newPassword|addLoginEmails|removeLoginEmails|username|secretQuestion|secretAnswer|requirePasswordChange|lang', false, undefined, { forcePost: true }),
    new ServerApi_1.ServerApi('ids.search', 'expTime|querySig|query'),
    new ServerApi_1.ServerApi('gscounters.sendReport', 'reports', false, undefined, { forceGigyaDomain: true }),
];
functions_1.createAlias('gigya.socialize.showCommentsUI', window.gigya.comments.showCommentsUI);
functions_1.createAlias('gigya.socialize.showRatingUI', window.gigya.comments.showRatingUI);
functions_1.createAlias('gigya.services.socialize', window.gigya.socialize);
functions_1.createAlias('gigya.services.gcs', window.gigya.gcs);
functions_1.createAlias('gigya.services.gm', window.gigya.gm);
functions_1.createAlias('gigya.services.comments', window.gigya.comments);
functions_1.createAlias('gigya.services.accounts', window.gigya.accounts);
functions_1.createAlias('gigya.socialize.connect', window.gigya.socialize.addConnection);
functions_1.createAlias('gigya.socialize.disconnect', window.gigya.socialize.removeConnection);
functions_1.createAlias('gigya.socialize.linkAccounts', window.gigya.socialize.setUID);
functions_1.createAlias('gigya.socialize.showConnectUI', window.gigya.socialize.showAddConnectionsUI);
functions_1.createAlias('gigya.showDebugUI', window.gigya.socialize.showDebugUI);


/***/ }),

/***/ "./src/core/Gigya.Js/app/API/BaseApi.ts":
/*!**********************************************!*\
  !*** ./src/core/Gigya.Js/app/API/BaseApi.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var queueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/queue */ "./src/core/Gigya.Js/app/Utils/queue.ts");
if (!window.gigya.socialize) {
    window.gigya.socialize = {};
}
if (!window.gigya.gcs) {
    window.gigya.gcs = {};
}
if (!window.gigya.gm) {
    window.gigya.gm = {};
}
if (!window.gigya.comments) {
    window.gigya.comments = {};
}
if (!window.gigya.accounts) {
    window.gigya.accounts = {};
}
if (!window.gigya.gscounters) {
    window.gigya.gscounters = {};
}
var apis = {};
function getApi(name) {
    return apis[name];
}
exports.getApi = getApi;
var BaseApi = /** @class */ (function () {
    function BaseApi(methodName, settings) {
        this.methodName = methodName;
        this.settings = settings;
        this.addAlias();
        apis[methodName] = this;
    }
    BaseApi.prototype.preprocessRequest = function (params, callback) {
        if (this.settings.preprocessor) {
            this.settings.preprocessor(params, callback);
        }
        else {
            callback();
        }
    };
    BaseApi.prototype.addAlias = function () {
        var _this = this;
        functionsUtils.createAlias('gigya.' + this.methodName, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var argParams = objectUtils.merge([args]);
            var fnRun = function () {
                if (argParams.lang) {
                    argParams._explicitLang = true;
                }
                var params = objectUtils.merge([window.gigya.thisScript.globalConf, argParams]);
                _this.run(params, argParams);
            };
            if (!window.gigya.thisScript || !window.gigya.thisScript.globalConf) {
                queueUtils.queueForExecution('API', fnRun);
            }
            else {
                fnRun();
            }
        });
    };
    return BaseApi;
}());
exports.BaseApi = BaseApi;


/***/ }),

/***/ "./src/core/Gigya.Js/app/API/ServerApi.ts":
/*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/API/ServerApi.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseApi_1 = __webpack_require__(/*! src/core/Gigya.Js/app/API/BaseApi */ "./src/core/Gigya.Js/app/API/BaseApi.ts");
var ServerApiRequest_1 = __webpack_require__(/*! src/core/Gigya.Js/app/API/ServerApiRequest */ "./src/core/Gigya.Js/app/API/ServerApiRequest.ts");
var queueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/queue */ "./src/core/Gigya.Js/app/Utils/queue.ts");
var ServerApi = /** @class */ (function (_super) {
    tslib_1.__extends(ServerApi, _super);
    function ServerApi(apiMethod, schema, requiresSession, settings, adapterSettings, altSessionParams) {
        if (settings === void 0) { settings = {}; }
        if (adapterSettings === void 0) { adapterSettings = {}; }
        var _this = _super.call(this, apiMethod, settings) || this;
        _this.schema = schema;
        _this.requiresSession = requiresSession;
        _this.settings = settings;
        _this.adapterSettings = adapterSettings;
        _this.altSessionParams = altSessionParams;
        adapterSettings.forceHttps = true;
        if (typeof adapterSettings.requiresSession === 'undefined') {
            adapterSettings.requiresSession = function () { return requiresSession; };
        }
        return _this;
    }
    ServerApi.prototype.run = function (params, explicitParams) {
        var _this = this;
        var fnRun = function () {
            new ServerApiRequest_1.ServerApiRequest(_this, params).start();
        };
        if (params['ignoreApiQueue']) {
            fnRun();
        }
        else {
            queueUtils.queueForExecution('API', function () {
                fnRun();
            });
        }
    };
    return ServerApi;
}(BaseApi_1.BaseApi));
exports.ServerApi = ServerApi;


/***/ }),

/***/ "./src/core/Gigya.Js/app/API/ServerApiRequest.ts":
/*!*******************************************************!*\
  !*** ./src/core/Gigya.Js/app/API/ServerApiRequest.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var globalEvents = __webpack_require__(/*! src/core/Gigya.Js/app/GlobalEvents */ "./src/core/Gigya.Js/app/GlobalEvents.ts");
var ApisList_1 = __webpack_require__(/*! src/core/Gigya.Js/app/API/ApisList */ "./src/core/Gigya.Js/app/API/ApisList.ts");
var LegacyLogger_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LegacyLogger */ "./src/core/Gigya.Js/app/LegacyLogger.ts");
var facebookExternal = __webpack_require__(/*! src/core/Gigya.Js/app/ExternalIntegrations/Facebook */ "./src/core/Gigya.Js/app/ExternalIntegrations/Facebook.ts");
var BaseApi_1 = __webpack_require__(/*! src/core/Gigya.Js/app/API/BaseApi */ "./src/core/Gigya.Js/app/API/BaseApi.ts");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var InternalFlows_1 = __webpack_require__(/*! src/core/Gigya.Js/app/InternalFlows */ "./src/core/Gigya.Js/app/InternalFlows.ts");
var validationUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/validation */ "./src/core/Gigya.Js/app/Utils/validation.ts");
var URLUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var scriptUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/script */ "./src/core/Gigya.Js/app/Utils/script.ts");
var HTTPUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/HTTP */ "./src/core/Gigya.Js/app/Utils/HTTP.ts");
// Raw server API
function getUnauthorizedUserResponse() {
    return objectUtils.clone({
        status: 'FAIL',
        errorMessage: 'Unauthorized user',
        statusMessage: 'Unauthorized user',
        errorCode: GSErrors_1.GSErrors.UNAUTHORIZED_USER,
    });
}
function getDefaultOKResponse(originalResponse) {
    return {
        status: 'OK',
        statusMessage: '',
        errorCode: 0,
        statusCode: 0,
        errorMessage: '',
        errorDetails: '',
        statusReason: '',
        originalResponse: originalResponse,
    };
}
var _sentFbSessionParams;
globalEvents.add('onFBCRefreshed', function () {
    _sentFbSessionParams = false;
}, 'component');
var ProviderType;
(function (ProviderType) {
    ProviderType[ProviderType["_unknown"] = 0] = "_unknown";
    ProviderType[ProviderType["facebook"] = 1] = "facebook";
    ProviderType[ProviderType["linkedin"] = 2] = "linkedin";
    ProviderType[ProviderType["samlProvider"] = 3] = "samlProvider";
    ProviderType[ProviderType["samlSession"] = 4] = "samlSession";
})(ProviderType || (ProviderType = {}));
var ServerApiRequest = /** @class */ (function () {
    function ServerApiRequest(api, params) {
        this.api = api;
        this.params = objectUtils.merge([objectUtils.clone(params), api.settings.defaultParams]);
        this.originalParams = objectUtils.clone(params);
        this.callback = params['callback'];
    }
    ServerApiRequest.prototype.start = function () {
        var _this = this;
        window.gigya._.apiAdapter.isSessionValid(this.params, function (validSession) { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
            var hasSessionExtended, _a, res;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        if (!(this.api.adapterSettings.requiresSession() && (!validSession && !this.doesHaveAltSessionParam()))) return [3 /*break*/, 1];
                        window.gigya.logger.debug(this.api.methodName + ": missing required session");
                        this.afterServerApiResponse(getUnauthorizedUserResponse(), false);
                        return [3 /*break*/, 6];
                    case 1:
                        window.gigya.logger.debug("server request: " + this.api.methodName, this.params);
                        if (!this.api.adapterSettings.requiresSession()) return [3 /*break*/, 3];
                        return [4 /*yield*/, window.gigya._.apiAdapter.setGltexpFromSSO(this.params['APIKey'])];
                    case 2:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 3:
                        _a = false;
                        _b.label = 4;
                    case 4:
                        hasSessionExtended = _a;
                        return [4 /*yield*/, this.sendRequest(validSession)];
                    case 5:
                        res = _b.sent();
                        if (hasSessionExtended && res['errorCode'] !== GSErrors_1.GSErrors.UNAUTHORIZED_USER) {
                            this.dispatchAccountsLoginEvent(res);
                        }
                        _b.label = 6;
                    case 6: return [2 /*return*/];
                }
            });
        }); });
    };
    ServerApiRequest.prototype.sendRequest = function (validSession) {
        var _this = this;
        var requestAdapterSettings = objectUtils.merge([
            this.api.adapterSettings,
            {
                cacheTimeout: this.params['cacheTimeout'],
                forceGigyaDomain: !validSession && this.api.adapterSettings.forceGigyaDomain,
            },
        ]);
        return new gigya.Promise(function (resolve) {
            _this.beforeRequest(validSession, function (presetResponse) {
                if (presetResponse) {
                    _this.afterServerApiResponse(presetResponse, validSession, resolve);
                }
                else {
                    globalEvents.dispatch({ eventName: 'beforeRequest', methodName: _this.api.methodName, rawParams: _this.originalParams, params: _this.params }, _this.originalParams);
                    if (_this.api.settings.oauth) {
                        window.gigya._.apiAdapter.sendOauthRequest(_this.api.methodName, _this.params, function (response) {
                            _this.afterServerApiResponse(response, validSession, resolve);
                        }, requestAdapterSettings);
                    }
                    else {
                        window.gigya._.apiAdapter.sendRequest(_this.api.methodName, _this.params, function (response) {
                            _this.afterServerApiResponse(response, validSession, resolve);
                        }, requestAdapterSettings);
                    }
                }
            });
        });
    };
    ServerApiRequest.prototype.beforeRequest = function (validSession, callback) {
        var _this = this;
        if (ApisList_1.logoutMethods[this.api.methodName]) {
            // No need to invoke an actual logout call to the server if session is not valid or if it's the ssoLogoutUrl since user is logged out or about to be
            if ((!validSession && !this.params['regToken']) ||
                (window.gigya.partnerSettings.ssoLogoutUrl && document.location.href == window.gigya.partnerSettings.ssoLogoutUrl)) {
                callback(getDefaultOKResponse(null));
            }
        }
        this.handleDeprecatedParams();
        this.handleCollections();
        this.handleConnectWithoutLoginBehavior(validSession);
        var providerPermissions = this.params[this.params['provider'] + 'ExtraPermissions'];
        this.params['extraPermissions'] = providerPermissions || this.params['permissions'];
        this.api.preprocessRequest(this.params, function () {
            _this.setOverridableParams(function () {
                _this.setNonOverridableParams(validSession, function () {
                    _this.filterParams(_this.params);
                    LegacyLogger_1.logCall(_this.api.methodName, _this.originalParams, _this.originalParams['lastSource']);
                    callback();
                });
            });
        });
    };
    ServerApiRequest.prototype.setOverridableParams = function (callback) {
        var overridable = {};
        objectUtils.merge([overridable, this.params]);
        callback();
    };
    ServerApiRequest.prototype.doesHaveAltSessionParam = function () {
        if (!this.api.altSessionParams)
            return;
        var altParams = this.api.altSessionParams.split('|');
        for (var i = 0; i < altParams.length; i++) {
            if (this.params[altParams[i]])
                return true;
        }
        return false;
    };
    ServerApiRequest.prototype.setNonOverridableParams = function (validSession, callback) {
        if (this.params['APIKey'] != null) {
            var loginTokenExp = window.gigya._.apiAdapter.getStorage().getItem('gltexp_' + this.params['APIKey']);
            if (loginTokenExp != null) {
                this.params['loginTokenExp'] = loginTokenExp;
            }
        }
        var refUID = window.gigya._.apiAdapter.getStorage().getItem('_gigRefUid_' + this.params['APIKey']);
        if (refUID && (validSession || ApisList_1.loginMethods[this.api.methodName]))
            this.params['refUID'] = refUID;
        // For FB auto session renewal, we pass FB JS SDK session token so that it'll update the server side FB token
        if (window.gigya.providersConfig.facebook && !_sentFbSessionParams) {
            var oFbParams = facebookExternal.getParams();
            for (var fbParam in oFbParams) {
                this.params[fbParam] = oFbParams[fbParam];
            }
            _sentFbSessionParams = true;
        }
        if (this.api.methodName.indexOf('accounts.') === 0) {
            // we want to include userInfo for socialize.login event
            if (globalEvents._activeNamespaces['socialize'] && this.params['includeUserInfo'] == null) {
                this.params['includeUserInfo'] = true;
            }
            // if a pendingRegistration will occur, we'll need the user's data for complete registration screen
            this.params['include'] = this.params['include'] ? this.params['include'] + ',' : '' + 'profile,data';
        }
        if (this.api.methodName === 'accounts.getSchema') {
            this.params['includeDynamicSchema'] = 'clientOnly';
        }
        this.params['targetEnv'] = 'jssdk';
        callback();
    };
    ServerApiRequest.prototype.handleDeprecatedParams = function () {
        if (this.params['pendingRegistration']) {
            this.params['pending_registration'] = this.params['pendingRegistration'];
        }
        else if (this.params['newUsersPendingRegistration']) {
            this.params['pending_registration'] = this.params['newUsersPendingRegistration'];
        }
        if (this.params['alwaysForceAuthentication']) {
            this.params['forceAuthentication'] = true;
        }
        if (this.params['timestamp']) {
            this.params['UIDTimestamp'] = this.params['timestamp'];
            delete this.params['timestamp'];
        }
        if (this.params['signature'] && this.api.methodName.indexOf('socialize.') === 0) {
            this.params['UIDSig'] = this.params['signature'];
            delete this.params['signature'];
        }
        if (this.params['nonce']) {
            this.params['UIDNonce'] = this.params['nonce'];
            delete this.params['nonce'];
        }
        if (this.params['format'] && !this.params['dataFormat']) {
            this.params['dataFormat'] = this.params['format'];
            delete this.params['format'];
        }
    };
    ServerApiRequest.prototype.handleCollections = function () {
        if (this.params['recipients']) {
            this.params['recipients'] = this.extractListOfGIGUIDs(this.params['recipients']);
        }
        if (this.params['friends']) {
            var friendUIDs = this.extractListOfGIGUIDs(this.params['friends']);
            if (this.params['UIDs'].length > 0) {
                this.params['UIDs'] += ',';
            }
            this.params['UIDs'] += friendUIDs;
        }
    };
    ServerApiRequest.prototype.extractListOfGIGUIDs = function (source) {
        var _this = this;
        switch (typeof source) {
            case 'string':
                return source;
            case 'object':
                if (typeof source.UID !== 'undefined') {
                    return source.UID;
                }
                if (source instanceof window.gigya.socialize.Collection) {
                    var a = [];
                    source.each(function (o, i) {
                        var UID = _this.extractListOfGIGUIDs(o);
                        if (UID != null && UID != '') {
                            a.push(UID);
                        }
                    });
                    return a.join(',');
                }
        }
    };
    ServerApiRequest.prototype.handleConnectWithoutLoginBehavior = function (validSession) {
        if (this.api.methodName === 'socialize.addConnection') {
            var connectBehavior = this.params['connectWithoutLoginBehavior'];
            if (typeof connectBehavior === 'string') {
                connectBehavior = connectBehavior.toLowerCase();
            }
            if (connectBehavior === 'loginexistinguser') {
                this.params['loginIfExists'] = true;
            }
            // if the user was logged out we should call socialize.login with temporary_account=true
            if (!validSession) {
                this.api = BaseApi_1.getApi('socialize.login');
                if (connectBehavior !== 'alwayslogin') {
                    this.params['temporary_account'] = true;
                }
            }
        }
    };
    ServerApiRequest.prototype.filterParams = function (params) {
        this.params = objectUtils.extractProperties(params, {}, this.getFullSchema());
    };
    ServerApiRequest.prototype.getFullSchema = function () {
        if (this.api.schema == null)
            return '';
        var arSchema = (this.api.schema + '|' + ApisList_1.defaultApiSchema).split('|');
        for (var i = 0; i < arSchema.length; i++) {
            var fieldName = arSchema[i];
            if (fieldName.toLowerCase().indexOf('[providercapability=') !== -1) {
                var capability = fieldName
                    .toLowerCase()
                    .split('=')[1]
                    .split(']')[0];
                var subFieldName = fieldName.split(']')[1];
                var providers = window.gigya.socialize.getProvidersForRequiredCapabilities(window.gigya.socialize.getProvidersByName('*'), [capability]);
                var arParams = [];
                for (var iProvider = 0; iProvider < providers.length; iProvider++) {
                    arParams.push(providers[iProvider].name + subFieldName);
                }
                arSchema[i] = arParams.join('|');
            }
        }
        return arSchema.join('|');
    };
    ServerApiRequest.prototype.preprocessServerResponse = function (response) {
        if (response['userInfo'] && this.api.methodName.indexOf('accounts.') !== 0) {
            if (typeof response['userInfo'] === 'string') {
                response['userInfo'] = JSONUtils.parse(response['userInfo'], undefined);
            }
            if (response['userInfo']) {
                response = objectUtils.merge([response['userInfo'], response]);
                response['errorCode'] = response['userInfo']['errorCode'];
                delete response['userInfo'];
            }
        }
        if (response['accountInfo'] && typeof response['accountInfo'] === 'string') {
            response['accountInfo'] = JSONUtils.parse(response['accountInfo'], undefined);
            if (response['accountInfo']) {
                response = objectUtils.merge([response['accountInfo'], response]);
                delete response['accountInfo'];
            }
        }
        try {
            if (response['settings'] && typeof response['settings'] == 'string') {
                response['settings'] = JSONUtils.parse(response['settings']);
            }
        }
        catch (e) { }
        return response;
    };
    ServerApiRequest.prototype.getExpiredSessionResponse = function (response) {
        switch (this.api.methodName) {
            case 'socialize.setUserSettings':
                if (!this.originalParams['disableLocalSettings']) {
                    InternalFlows_1.setGigyaSettings(this.params['group'], this.params['settings']);
                    response = getDefaultOKResponse(response);
                }
                break;
            case 'socialize.delUserSettings':
                if (!this.originalParams['disableLocalSettings']) {
                    InternalFlows_1.delGigyaSettings(this.params['group']);
                    response = getDefaultOKResponse(response);
                }
                break;
            case 'socialize.getUserSettings':
                if (!this.originalParams['disableLocalSettings']) {
                    var settings = InternalFlows_1.getGigyaSettings(this.params['group']);
                    response = getDefaultOKResponse(response);
                    response['settings'] = settings;
                }
                break;
            case 'socialize.getUserInfo':
                response['status'] = 'OK';
                response['statusMessage'] = '';
                response['errorCode'] = 0;
                response['statusCode'] = 0;
                response['errorMessage'] = '';
                response['errorDetails'] = '';
                response['statusReason'] = '';
                break;
            case 'accounts.logout':
            case 'socialize.logout':
                response = getDefaultOKResponse(response);
                break;
        }
        return response;
    };
    ServerApiRequest.prototype.afterServerApiResponse = function (response, sentWithValidSession, callback) {
        var _this = this;
        if (!isNaN(Number(window.gigya.thisScript.globalConf['verifyLoginInterval'])) &&
            this.api.methodName === 'accounts.verifyLogin' &&
            response['errorCode'] !== GSErrors_1.GSErrors.OK) {
            window.gigya._.apiAdapter.clearSession({ APIKey: window.gigya.thisScript.APIKey });
        }
        InternalFlows_1.checkCompleteRegistration(response, this.originalParams, this.api.methodName, function (completeResponse, suppressEvents, retry) {
            response = completeResponse;
            response = _this.preprocessServerResponse(response);
            if (response['errorCode'] == GSErrors_1.GSErrors.UNAUTHORIZED_USER) {
                response = _this.getExpiredSessionResponse(response);
            }
            if (response['errorCode'] == GSErrors_1.GSErrors.OK && (sentWithValidSession || ApisList_1.loginMethods[_this.api.methodName])) {
                window.gigya._.apiAdapter.getStorage().removeItem('_gigRefUid_' + _this.originalParams['APIKey']);
            }
            _this.handleMethodResponse(response, function (newResponse) {
                response = newResponse;
                _this.addDefaultResponseProperties(response);
                InternalFlows_1.handleSpecialFields(response);
                _this.logoutFromProvidersIfNeeded(response, function (retryFromResponse) {
                    if (retryFromResponse) {
                        _this.sendRequest(sentWithValidSession).then(callback);
                        return;
                    }
                    if (!suppressEvents) {
                        _this.generateEventsFromResponse(response, sentWithValidSession);
                    }
                    if (retry) {
                        window.gigya.logger.info("retrying request");
                        _this.sendRequest(sentWithValidSession).then(callback);
                        return;
                    }
                    globalEvents.dispatch({ eventName: 'afterResponse', methodName: _this.api.methodName, filteredParams: _this.params, response: response }, _this.originalParams);
                    if (typeof _this.callback === 'function') {
                        LegacyLogger_1.addLog('Calling callback for ' + _this.api.methodName + ' with this response object', response);
                        try {
                            _this.callback(response);
                        }
                        catch (e) {
                            console.error(e);
                        }
                    }
                    if (_this.api.settings.postprocessor)
                        _this.api.settings.postprocessor(_this.originalParams, response);
                    if (callback)
                        callback(response);
                });
            });
        });
    };
    ServerApiRequest.prototype.addDefaultResponseProperties = function (response) {
        delete response['statusCode'];
        delete response['statusReason'];
        response['errorCode'] = response['errorCode'] || 0;
        response['status'] = response['status'] || (response['errorCode'] == 0 ? 'OK' : 'FAIL');
        response['errorMessage'] = response['errorMessage'] || '';
        response['statusMessage'] = response['statusMessage'] || response['errorMessage'];
        response['requestParams'] = this.originalParams;
        if (response['requestParams']['password'])
            delete response['requestParams']['password']; //we don't want passwords to return as cleartext to the callback
        response['context'] = this.originalParams['context'];
        var operationNamespace = this.api.methodName.split('.')[0];
        response['operation'] = operationNamespace == 'socialize' ? this.api.methodName.split('.')[1] : '/' + this.api.methodName; //for backwards compatibility
    };
    ServerApiRequest.prototype.handleMethodResponse = function (response, callback) {
        if (response['errorCode'] == GSErrors_1.GSErrors.OK) {
            switch (this.api.methodName) {
                case 'accounts.socialLogin':
                case 'socialize.login':
                    response['newUser'] = String(response['x_newUser']) == 'true';
                    delete response['x_newUser'];
                case 'socialize.notifyLogin':
                case 'socialize.addConnection':
                case 'accounts.linkAccounts':
                case 'accounts.finalizeRegistration':
                case 'accounts.login':
                case 'accounts.otp.login':
                case 'accounts.auth.login':
                case 'accounts.register':
                case 'socialize.getUserInfo':
                    delete response['login_token'];
                    delete response['expires_in'];
                    delete response['id'];
                    if (response['code']) {
                        response['authCode'] = response['code'];
                        delete response['code'];
                    }
                    if (!response['authCode'] && !(this.api.methodName == 'socialize.notifyLogin' && this.params['authCode'])) {
                        var user = response; // push the response down into the user field
                        if (response['userInfo']) {
                            user = response['userInfo'];
                            delete response['userInfo'];
                        }
                        if (this.api.methodName.indexOf('accounts.') == -1) {
                            response = { user: user };
                            objectUtils.extractProperties(user, response, 'status|statusMessage|callId|errorCode|errorMessage|errorDetails|settings|context|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|newUser|signKeysUIDSignature|dataCenter|id_token');
                            if (response['user'].hasOwnProperty('UIDSig')) {
                                response['signature'] = response['user'].UIDSig;
                            } // support for Deprecated 'signature' property
                            if (user.profile)
                                delete user.profile;
                            if (user.data)
                                delete user.data;
                            delete user.status;
                            delete user.statusMessage;
                            delete user.callId;
                            delete user.errorCode;
                            delete user.errorMessage;
                            delete user.errorDetails;
                            delete user.settings;
                            delete user.context;
                        }
                        else {
                            if (response != user)
                                response['user'] = user;
                        }
                        if (user.age != '' && !isNaN(parseInt(user.age))) {
                            user.age = parseInt(user.age); //for backwards compatibility
                        }
                        if (user.suppressEvents)
                            response['suppressEvents'] = true;
                        if (typeof user.capabilities == 'string') {
                            var capabilitiesString = user.capabilities;
                            if (!capabilitiesString)
                                capabilitiesString = '';
                            if (typeof user.capabilities != 'object') {
                                user.capabilities = {};
                            }
                            capabilitiesString = capabilitiesString.toLowerCase();
                            user.capabilities = {
                                actions: capabilitiesString.indexOf('actions') > -1,
                                friends: capabilitiesString.indexOf('friends') > -1,
                                login: capabilitiesString.indexOf('login') > -1,
                                status: capabilitiesString.indexOf('status') > -1,
                                notifications: capabilitiesString.indexOf('notifications') > -1,
                                contacts: capabilitiesString.indexOf('contacts') > -1,
                                photos: capabilitiesString.indexOf('photos') > -1,
                            };
                        }
                        InternalFlows_1.convertIdentitiesArrayToObject(user);
                        if (typeof user.providers == 'string') {
                            user.providers = user.providers.split(',');
                        }
                        if (this.params['group'] && !response['settings']) {
                            var settings = InternalFlows_1.getGigyaSettings(this.params['group']);
                            response['settings'] = settings;
                        }
                    }
                    break;
                case 'socialize.getAvailableProviders':
                    var oAvailableProviders = {};
                    for (var i = 0; i < response['availableProviders'].length; i++) {
                        oAvailableProviders[response['availableProviders'][i].name] = response['availableProviders'][i];
                    }
                    response['availableProviders'] = oAvailableProviders;
                    break;
            }
        }
        if (this.api.methodName === 'socialize.removeConnection' && response['errorCode'] == GSErrors_1.GSErrors.OK) {
            window.gigya.socialize.getUserInfo(this.originalParams, {
                callback: function (userInfoResponse) {
                    callback(userInfoResponse);
                },
            });
        }
        else {
            callback(response);
        }
    };
    ServerApiRequest.prototype.logoutFromProvidersIfNeeded = function (response, callback) {
        var simpleProviderTimeout = 5000; // 5s
        var samlProviderTimeout = 10000; // 10s
        var errorCode = response['errorCode'];
        if (ApisList_1.logoutMethods[this.api.methodName] && errorCode == GSErrors_1.GSErrors.OK) {
            // logout active session if necesary
            if (response['logoutActiveSession']) {
                window.gigya._.apiAdapter.clearSession(this.params['APIKey']);
            }
            var arProviders = new Array();
            var providersTimeout = simpleProviderTimeout; // 5s to finish logout from all providers
            var waitAfterProviders = 0; // wait after all providers complete
            // list social providers that needs to be disconected
            var providers;
            if (response['connectedProviders']) {
                providers = response['connectedProviders'].toLowerCase();
            }
            else if (response['provider']) {
                providers = response['provider'].toLowerCase();
            }
            if (providers && !validationUtils.isExplicitFalse(this.originalParams['forceProvidersLogout'])) {
                var socialProviders = providers.split(',');
                for (var i = 0; i < socialProviders.length; ++i) {
                    var provider = socialProviders[i];
                    var providerType = ProviderType[provider];
                    var providerData = null;
                    var removeProviderAfter = simpleProviderTimeout;
                    if (provider.indexOf('saml-') === 0) {
                        providerType = ProviderType.samlProvider;
                        providerData = provider.substring('saml-'.length); // samlIDP
                        removeProviderAfter = false;
                        // for SAML logout increase the timeout to 15s
                        providersTimeout = samlProviderTimeout;
                        waitAfterProviders = simpleProviderTimeout;
                    }
                    arProviders.push({
                        type: providerType,
                        data: providerData,
                        removeAfter: removeProviderAfter,
                    });
                }
            }
            // list all saml sessions to disconnect
            if (response['samlContext'] && response['connectedSamlSessions']) {
                var samlContext = response['samlContext'];
                var connectedSessions = response['connectedSamlSessions'].split(',');
                for (var i = 0; i < connectedSessions.length; ++i) {
                    arProviders.push({
                        type: ProviderType.samlSession,
                        data: {
                            samlContext: samlContext,
                            samlSession: connectedSessions[i],
                        },
                        removeAfter: false,
                    });
                    // for SAML logout increase the timeout to 15s
                    providersTimeout = samlProviderTimeout;
                    waitAfterProviders = simpleProviderTimeout;
                }
            }
            // disconnect all found providers
            if (arProviders.length) {
                var loggedOutCount = 0;
                var callbackCalled = false;
                var onDone = function () {
                    if (!callbackCalled) {
                        callbackCalled = true;
                        callback(false);
                    }
                };
                window.setTimeout(onDone, providersTimeout); // 5s timeout
                var onProviderResourceComplete = function () {
                    loggedOutCount++;
                    if (loggedOutCount === arProviders.length) {
                        window.setTimeout(onDone, waitAfterProviders);
                    }
                };
                for (var i = 0; i < arProviders.length; i++) {
                    this.logoutFromProvider(arProviders[i], onProviderResourceComplete);
                }
            }
            else {
                // no providers in the array
                callback(false);
            }
        }
        else if (response['errorCode'] == GSErrors_1.GSErrors.UNVERIFIED_USER && this.api.methodName !== 'accounts.verifyLogin') {
            window.gigya.accounts.verifyLogin({
                callback: function (verifyResponse) {
                    if (verifyResponse.errorCode == GSErrors_1.GSErrors.OK) {
                        callback(true);
                    }
                    else {
                        callback(false);
                    }
                },
            });
        }
        else {
            // not a logout method
            callback(false);
        }
    };
    ServerApiRequest.prototype.logoutFromProvider = function (provider, callback) {
        var logoutURL = '';
        var useIframe = false;
        var useCacheBuster = true;
        var samlDomain = "" + window.gigya._.getApiDomain('fidm');
        switch (provider.type) {
            case ProviderType.facebook:
                if (window.gigya.providersConfig.facebook) {
                    window.gigya.socialize.waitForService({
                        service: 'facebook',
                        callback: function () {
                            if (facebookExternal.isLoggedIn && FB.logout) {
                                FB.logout(function () {
                                    facebookExternal.refreshSession();
                                    // The following code line is because of a Facebook bug which
                                    // prevents logging in after you have logged-out.
                                    //http://stackoverflow.com/questions/34725123/getloginstatus-returns-status-unknown-when-trying-to-logout-from-facebook-using
                                    window.gigya._.apiAdapter.getStorage().removeItem('fblo_' + window.gigya.providersConfig.facebook.appID);
                                    callback();
                                });
                            }
                            else {
                                callback();
                            }
                        },
                    });
                    return;
                }
                break;
            case ProviderType.samlProvider:
                logoutURL = URLUtils.addParamsToURL('https://' + samlDomain + '/saml/v2.0/' + this.params['APIKey'] + '/sp/jsslo', { name: provider.data });
                useIframe = true;
                useCacheBuster = false;
                break;
            case ProviderType.samlSession:
                logoutURL = URLUtils.addParamsToURL('https://' + samlDomain + '/saml/v2.0/' + this.params['APIKey'] + '/idp/slo/continue/', provider.data);
                useIframe = true;
                useCacheBuster = false;
                break;
        }
        if (logoutURL) {
            if (useCacheBuster)
                logoutURL += new Date().getTime();
            var resourceType = useIframe ? scriptUtils.ResourceTypes.iframe : scriptUtils.ResourceTypes.image;
            var removeAfter;
            //if (this.originalParams['sustainLogoutURLs'] !== undefined)
            //    removeAfter = !this.originalParams['sustainLogoutURLs']
            //else
            removeAfter = provider.removeAfter;
            scriptUtils.triggerResource(logoutURL, callback, resourceType, removeAfter);
        }
        else {
            callback();
        }
    };
    ServerApiRequest.prototype.generateEventsFromResponse = function (response, sentWithValidSession) {
        var _this = this;
        var oEvent;
        if (response['errorCode'] == 0) {
            switch (this.api.methodName) {
                case 'accounts.logout':
                case 'socialize.logout':
                case 'socialize.unlinkAccounts':
                case 'socialize.deleteAccount':
                    oEvent = { eventName: 'logout,accounts.logout' };
                    break;
                case 'socialize.linkAccounts':
                case 'socialize.setUID':
                    InternalFlows_1.addUserInfoToEvent(response, oEvent, true);
                    break;
                case 'socialize.removeConnection':
                    oEvent = {
                        eventName: 'connectionRemoved,disconnect',
                        provider: this.params['provider'] || '',
                    };
                    InternalFlows_1.addUserInfoToEvent(response, oEvent);
                    break;
                case 'socialize.addConnection':
                    if (!sentWithValidSession && response['user'].isLoggedIn) {
                        oEvent = {
                            eventName: 'login',
                            provider: this.params['provider'],
                        };
                        InternalFlows_1.addUserInfoToEvent(response, oEvent, true);
                    }
                    else {
                        oEvent = { eventName: 'connectionAdded,connect', provider: this.params['provider'] };
                        InternalFlows_1.addUserInfoToEvent(response, oEvent);
                    }
                    break;
                case 'accounts.linkAccounts':
                case 'accounts.finalizeRegistration':
                case 'accounts.login':
                case 'accounts.otp.login':
                case 'accounts.auth.login':
                case 'accounts.register':
                case 'accounts.socialLogin':
                    if (!this.originalParams['suppressLoginEvent']) {
                        this.dispatchAccountsLoginEvent(response);
                    }
                case 'socialize.finalizeRegistration':
                case 'socialize.register':
                case 'socialize.login':
                    if (!response['user'] && !response['authCode'])
                        break;
                    oEvent = { eventName: 'login' };
                    var provider = this.params['provider'];
                    if (!provider && response['providerSessions']) {
                        for (var p in response['providerSessions']) {
                            provider = p;
                            break;
                        }
                    }
                    oEvent['provider'] = provider || 'site';
                    oEvent['loginMode'] = this.originalParams['loginMode'] || 'standard';
                    oEvent['newUser'] = response['newUser'] || false;
                    if (response['authCode'])
                        oEvent['authCode'] = response['authCode'];
                    InternalFlows_1.addUserInfoToEvent(response, oEvent, true);
                    if (response['user'] && provider) {
                        provider = provider.toLowerCase();
                        window.gigya._.apiAdapter.getStorage().setItem('_gig_llp', provider);
                        window.gigya._.apiAdapter.getStorage().setItem('_gig_llu', response['user']['firstName'] || '');
                    }
                    break;
                case 'socialize.notifyLogin':
                    if (!this.params['authCode']) {
                        // authCode means it's GAC
                        if (!oEvent)
                            oEvent = { eventName: 'login' };
                        oEvent['provider'] = 'site';
                        InternalFlows_1.addUserInfoToEvent(response, oEvent, true);
                    }
                    break;
                case 'gm.notifyAction':
                    globalEvents.dispatch({ eventName: 'actionNotified', isInternal: true });
                    break;
            }
        }
        if (ApisList_1.loginMethods[this.api.methodName] && this.originalParams['redirectURL'] && oEvent && oEvent['user'] && response['errorCode'] == 0) {
            HTTPUtils.redirect(this.originalParams['redirectURL'], [oEvent, oEvent['user']], this.originalParams['redirectMethod']);
        }
        // login should be fired but we have no accounts fields. We need to call getAccountInfo for the accounts event.
        if (response['errorCode'] == GSErrors_1.GSErrors.OK &&
            oEvent &&
            oEvent['eventName'] === 'login' &&
            !response['profile'] &&
            globalEvents._activeNamespaces['accounts'] &&
            this.api.methodName.indexOf('accounts') === -1) {
            window.gigya.accounts.getAccountInfo(this.originalParams, {
                include: 'profile,data',
                includeUserInfo: false,
                callback: function (accountsResponse) {
                    if (!_this.originalParams['suppressLoginEvent']) {
                        _this.dispatchAccountsLoginEvent(accountsResponse);
                    }
                },
            });
        }
        if (oEvent && (oEvent['eventName'] !== 'login' || !this.originalParams['suppressLoginEvent'])) {
            oEvent['context'] = this.originalParams['context'];
            globalEvents.dispatch(oEvent, this.originalParams);
        }
    };
    ServerApiRequest.prototype.dispatchAccountsLoginEvent = function (response) {
        var oAccountsEvent = {
            eventName: 'accounts.login',
            remember: validationUtils.isExplicitTrue(this.originalParams['remember']),
            provider: this.originalParams['provider'] ? this.originalParams['provider'].toLowerCase() : '',
            loginMode: this.originalParams['loginMode'] || 'standard',
        };
        objectUtils.extractProperties(response, oAccountsEvent, 'newUser|signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|profile|data|signKeysUIDSignature|dataCenter|id_token');
        globalEvents.dispatch(oAccountsEvent, this.originalParams);
    };
    return ServerApiRequest;
}());
exports.ServerApiRequest = ServerApiRequest;


/***/ }),

/***/ "./src/core/Gigya.Js/app/API/UiApi.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/API/UiApi.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var BaseApi_1 = __webpack_require__(/*! src/core/Gigya.Js/app/API/BaseApi */ "./src/core/Gigya.Js/app/API/BaseApi.ts");
var VersionSelector_1 = __webpack_require__(/*! src/core/Gigya.Js/app/API/VersionSelector */ "./src/core/Gigya.Js/app/API/VersionSelector.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var LegacyLogger_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LegacyLogger */ "./src/core/Gigya.Js/app/LegacyLogger.ts");
var UiApiHelpers_1 = __webpack_require__(/*! src/core/Gigya.Js/app/API/UiApiHelpers */ "./src/core/Gigya.Js/app/API/UiApiHelpers.ts");
var arrayUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/array */ "./src/core/Gigya.Js/app/Utils/array.ts");
var queueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/queue */ "./src/core/Gigya.Js/app/Utils/queue.ts");
var globalEvents = __webpack_require__(/*! src/core/Gigya.Js/app/GlobalEvents */ "./src/core/Gigya.Js/app/GlobalEvents.ts");
var reports = __webpack_require__(/*! src/core/Gigya.Js/app/Reports */ "./src/core/Gigya.Js/app/Reports.ts");
var cdn_1 = __webpack_require__(/*! src/core/Gigya.Js/app/cdn */ "./src/core/Gigya.Js/app/cdn.ts");
var scriptUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/script */ "./src/core/Gigya.Js/app/Utils/script.ts");
var events = __webpack_require__(/*! src/core/Gigya.Js/app/Events */ "./src/core/Gigya.Js/app/Events.ts");
var Providers_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Providers */ "./src/core/Gigya.Js/app/Providers.ts");
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
exports.__pluginsCoreLoaded = false;
var sourceDataParams = {
    showReactionsBarUI: ['barID'],
    showCommentsUI: ['categoryID', 'streamID'],
};
var UiApi = /** @class */ (function (_super) {
    tslib_1.__extends(UiApi, _super);
    function UiApi(methodName, jsName, defaultParams, defaultPopupParams, requiredParams, settings) {
        if (defaultParams === void 0) { defaultParams = {}; }
        if (defaultPopupParams === void 0) { defaultPopupParams = {}; }
        if (requiredParams === void 0) { requiredParams = ''; }
        if (settings === void 0) { settings = {}; }
        var _this = _super.call(this, UiApi.getApiName(jsName, methodName, settings), settings) || this;
        _this.methodName = methodName;
        _this.jsName = jsName;
        _this.settings = settings;
        settings.defaultParams = defaultParams || {};
        settings.defaultPopupParams = defaultPopupParams || {};
        settings.requiredParams = requiredParams || '';
        return _this;
    }
    UiApi.getApiName = function (jsName, methodName, settings) {
        if (settings === void 0) { settings = {}; }
        return settings.apiName || jsName.split('.')[0] + '.' + methodName;
    };
    UiApi.versionSelector = function (methodName, namespace, defaultVersion, versions, versionField) {
        if (versionField === void 0) { versionField = 'version'; }
        var selector = new VersionSelector_1.VersionSelector(methodName, versions, defaultVersion);
        functionsUtils.createAlias('gigya.' + namespace + '.' + methodName, function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var config = args[0];
            var params = args[1];
            if (!params) {
                params = config;
                config = null;
            }
            if (!params) {
                params = {};
                args.push(params);
            }
            var callConfig = objectUtils.merge([{}, config, params]);
            selector.callVersion('' + callConfig[versionField], params, args);
        });
        return selector;
    };
    // For new plugins using BasePlugin
    UiApi.createApi = function (methodName, namespace, className, jsName, settings, instanceMethods) {
        if (settings === void 0) { settings = {}; }
        settings.useBasePlugin = true;
        var api = new UiApi(methodName, jsName, null, null, null, settings);
        api.namespace = namespace;
        api.className = className;
        api.instanceMethods = instanceMethods || [];
        api.addInstanceMethodsAliases();
        return api;
    };
    UiApi.prototype.addInstanceMethodsAliases = function () {
        // Add the instance methods aliases
        for (var i = 0; i < this.instanceMethods.length; i++) {
            this.createInstanceMethodAlias(this.instanceMethods[i]);
        }
    };
    UiApi.prototype.createInstanceMethodAlias = function (methodName) {
        var _this = this;
        functionsUtils.createAlias('gigya.' + this.namespace + '.' + methodName, function (params) {
            /// Note that this method should only be called after the plugin js was loaded.
            if (!_this.injectionInfo) {
                LegacyLogger_1.addLog('invalid injection info', _this, false);
                return;
            }
            var publicMethod = _this.getPublicMethod(methodName);
            var instance = UiApiHelpers_1.getPluginInstance(params, _this.injectionInfo);
            if (!instance) {
                LegacyLogger_1.addLog("couldn't find instance", _this, false);
                /// for future implementation.
                //if (params.onError)
                //    params.onError();
            }
            else {
                // prepare arguments from params object.
                var args = [];
                arrayUtils.forEach(publicMethod.argNames, function (argName) {
                    if (argName && params[argName] !== undefined)
                        args.push(params[argName]);
                });
                instance[publicMethod.instanceMethod].apply(instance, args);
            }
        });
    };
    UiApi.prototype.getPublicMethod = function (methodName) {
        var publicMethod;
        if (this.injectionInfo.publicMethods) {
            publicMethod = this.injectionInfo.publicMethods[methodName];
        }
        if (!publicMethod) {
            throw new Error('public method ' + methodName + ' is not configured for ' + this.injectionInfo.name);
        }
        return publicMethod;
    };
    // Override
    UiApi.prototype.preprocessRequest = function (params, callback) {
        var _this = this;
        _super.prototype.preprocessRequest.call(this, params, function () {
            if (!params['source'])
                _this.setSourceData(params);
            if (callback)
                callback();
        });
    };
    UiApi.prototype.run = function (params, explicitParams) {
        var _this = this;
        if (!this.settings.waitForAPIQueue || params['ignoreApiQueue']) {
            this.startUI(params, explicitParams);
        }
        else {
            queueUtils.queueForExecution('API', function () {
                _this.startUI(params, explicitParams);
            });
        }
    };
    UiApi.prototype.startUI = function (params, explicitParams) {
        var _this = this;
        params = objectUtils.clone(params);
        this.prepareParameters(params);
        this.preprocessRequest(params, function () {
            // Legacy
            if (!_this.settings.useBasePlugin) {
                window.gigya.logger.info("loading legacy plugin");
                _this.legacyStartUI(params, explicitParams);
                // BasePlugin
            }
            else {
                window.gigya.logger.info("loading modern plugin");
                _this.loadPluginJS(params, explicitParams, function (loadedFromServer) {
                    queueUtils.queueForExecution('UI', function () {
                        if (loadedFromServer && _this.className) {
                            _this.pluginType = _this.getPluginType();
                            _this.injectionInfo = _this.pluginType.injectionInfo(_this);
                        }
                        var fnStart = function () {
                            _this.startPlugin(params, explicitParams);
                        };
                        if (params['waitForDebug'] == false) {
                            fnStart();
                        }
                        else {
                            queueUtils.queueForExecution('debug', fnStart);
                        }
                    });
                });
            }
        });
    };
    UiApi.prototype.startPlugin = function (params, explicitParams) {
        var _this = this;
        globalEvents.dispatch({
            eventName: 'beforePluginRequest',
            methodName: this.methodName,
            params: params,
            explicitParams: explicitParams,
        }, params);
        var methodName = params['originalMethodName'] || this.methodName;
        LegacyLogger_1.logCall(methodName, params);
        reports.reportLoad(methodName, params);
        // BasePlugin
        if (this.pluginType) {
            if (params) {
                var previous = UiApiHelpers_1.getPluginInstance(params, this.injectionInfo);
                if (previous && previous.dispose && !params['_allowMultipleInstances'] && !params['newModal']) {
                    previous.dispose();
                }
            }
            var instance = new this.pluginType(params, explicitParams, this.injectionInfo);
            /// TODO: condition this to a global attribute.
            UiApiHelpers_1.setPluginInstance(params, this.injectionInfo, instance);
            instance.onDisposedEvent().add(function () { return UiApiHelpers_1.removePluginInstance(params, _this.injectionInfo); });
            window.gigya.logger.info("starting plugin " + this.injectionInfo.name + " with params", instance.params);
            instance.start();
            if (instance.containerID) {
                var container = document.getElementById(instance.containerID);
                if (container) {
                    container['gigyaPluginInstance'] = instance;
                }
            }
            if (params['getInstance']) {
                params['getInstance'](instance);
            }
            // Legacy
        }
        else {
            functionsUtils.callFunction('gigya.' + this.jsName + '.' + this.methodName, [params, params, params]);
        }
    };
    UiApi.prototype.loadPluginJS = function (params, explicitParams, callback) {
        if (this.wasPluginJSLoaded(params)) {
            window.gigya.logger.info("plugin was already loaded");
            if (callback)
                callback(false);
        }
        else {
            var pluginBase = false;
            var cdnPrefix = cdn_1.getCdnResource('/js/');
            var jsServiceName = 'gigya.services.' + this.jsName;
            var pluginUrl = cdnPrefix + jsServiceName + '.min.js' + (params['lang'] ? '?lang=' + params['lang'] : '');
            var pluginWithBaseUrl = cdnPrefix + 'gigya.services.plugins.base.min.js?services=' + jsServiceName + (params['lang'] ? '&lang=' + params['lang'] : '');
            var loadUrl;
            if (!exports.__pluginsCoreLoaded) {
                window.gigya.logger.debug("locking queue to fetch basePlugin");
                loadUrl = pluginWithBaseUrl;
                exports.__pluginsCoreLoaded = true;
                pluginBase = true;
                queueUtils.hold('pluginsJS', 'UI');
            }
            else {
                loadUrl = pluginUrl;
            }
            window.gigya.logger.info("loading " + jsServiceName);
            globalEvents.dispatch({
                eventName: 'beforePluginLoad',
                methodName: this.methodName,
                explicitParams: explicitParams,
                params: params,
            }, params);
            scriptUtils.load(loadUrl, null, function () {
                if (pluginBase)
                    queueUtils.release('pluginsJS', 'UI');
                if (callback)
                    callback(true);
            }, true, undefined, [pluginUrl, pluginWithBaseUrl]);
        }
    };
    UiApi.prototype.wasPluginJSLoaded = function (params) {
        var funcName = 'gigya.' + this.jsName + '.' + this.methodName;
        var fullJSName = 'gigya.services.' + this.jsName + '.js';
        try {
            var func = this.getPluginType();
            var langObj = window.gigya['i18n'][fullJSName][params['lang']];
        }
        catch (ex) {
            return false;
        }
        return typeof func !== 'undefined' && typeof langObj !== 'undefined';
    };
    UiApi.prototype.getPluginType = function () {
        var pathAccessor = objectUtils.expressionHelper(window.gigya);
        var paths = [
            "_.plugins." + this.className,
            this.jsName + "." + this.methodName,
        ];
        for (var _i = 0, paths_1 = paths; _i < paths_1.length; _i++) {
            var path = paths_1[_i];
            var type = pathAccessor.getField(path);
            if (type)
                return type;
        }
        return undefined;
    };
    UiApi.prototype.setSourceData = function (params) {
        if (this.methodName == 'socialize.showSimpleShareUI') {
            params['source'] = 'socialize.showShareUI';
        }
        else {
            params['source'] = params['originalMethodName'] || this.methodName;
        }
        if (!params['sourceData'] && sourceDataParams[this.methodName]) {
            var sourceData = {};
            var addedSourceData;
            for (var i = 0; i < sourceDataParams[this.methodName].length; i++) {
                var paramName = sourceDataParams[this.methodName][i];
                if (params[paramName] != null) {
                    addedSourceData = true;
                    sourceData[paramName] = params[paramName];
                }
            }
            if (addedSourceData)
                params['sourceData'] = sourceData;
        }
        if (!params['pluginsStack'])
            params['pluginsStack'] = [];
        params['pluginsStack'].push({ source: this.methodName }); //for debugging
        params['lastSource'] = this.methodName;
    };
    UiApi.prototype.validateRequiredParams = function (params) {
        var arRequiredParams = this.settings.requiredParams.split('|');
        for (var i = 0; i < arRequiredParams.length; i++) {
            var requiredParam = arRequiredParams[i];
            if (requiredParam != '' && (params[requiredParam] == null || params[requiredParam] == '')) {
                events.dispatchInvalidParamError(params, requiredParam);
                return false;
            }
        }
        return true;
    };
    UiApi.prototype.setDefaultParams = function (params) {
        var isPopup = !params['containerID'] || params['isPopup'];
        for (var paramName in this.settings.defaultParams) {
            if (params[paramName] == null) {
                if (isPopup && this.settings.defaultPopupParams[paramName]) {
                    params[paramName] = this.settings.defaultPopupParams[paramName];
                }
                else {
                    params[paramName] = this.settings.defaultParams[paramName];
                }
            }
        }
        if (isPopup) {
            for (var paramName in this.settings.defaultPopupParams) {
                if (!params[paramName])
                    params[paramName] = this.settings.defaultParams[paramName];
            }
        }
    };
    UiApi.prototype.prepareParameters = function (params) {
        for (var key in params) {
            // Replace provider aliases with provider names
            if (key.toLowerCase().indexOf('provider') != -1 && typeof params[key] == 'string') {
                params[key] = Providers_1.replaceProviderAliases(params[key]);
            }
        }
        // Set english as default language
        if (!params['lang']) {
            params['lang'] = window.gigya.thisScript.lang.langCode;
        }
        if (!params['source']) {
            this.setSourceData(params);
        }
        else {
            params['isPopup'] = false; //to avoid params.isPopup being passed from UI widgets
        }
    };
    // For plugins that do not support BasePlugin
    UiApi.prototype.legacyStartUI = function (params, explicitParams) {
        var _this = this;
        var containerID = params['containerID'];
        if (this.settings.ignoreContainerId) {
            params['containerID'] = '';
            containerID = '';
        }
        else if ((params['containerID'] == null && !this.settings.allowPopup) || (params['containerID'] && !document.getElementById(params['containerID']))) {
            events.dispatchInvalidParamError(params, 'containerID');
            return;
        }
        var isPopup = this.settings.allowPopup && (!containerID || params['isPopup']);
        if (isPopup && this.settings.useNewModal)
            params['useNewModal'] = true;
        this.setDefaultParams(params);
        if (!this.settings.allowPopup && !isPopup) {
            DOMUtils.clearByID(containerID);
        }
        if (!this.validateRequiredParams(params)) {
            return;
        }
        this.loadPluginJS(params, explicitParams, function () {
            var fnStart = function () {
                _this.prepareContainer(params, isPopup, function () {
                    _this.startPlugin(params, explicitParams);
                });
            };
            queueUtils.queueForExecution('UI', function () {
                if (params['waitForDebug'] == false) {
                    fnStart();
                }
                else {
                    queueUtils.queueForExecution('debug', fnStart);
                }
            });
        });
    };
    UiApi.prototype.prepareContainer = function (params, isPopup, callback) {
        var _this = this;
        if (!document.body) {
            window.setTimeout(function () {
                _this.prepareContainer(params, isPopup, callback);
            }, 200);
        }
        else {
            var containerID = params['containerID'];
            var container;
            if (isPopup) {
                containerID = DOMUtils.getCenteredDivID(this.methodName);
                if (params['newModal'])
                    containerID += new Date().getTime();
                params['containerID'] = containerID;
                params['isPopup'] = true;
                if (!document.getElementById(containerID)) {
                    container = DOMUtils.createTopLevelDiv(containerID);
                    container.style.position = 'absolute';
                }
            }
            container = container || document.getElementById(containerID);
            if (!container) {
                events.dispatchInvalidParamError(params, 'containerID');
                callback();
                return;
            }
            //  var jsUrl = this.getPluginJsUrl(params);
            var Reqs = container['Reqs'] ? container['Reqs'] : (container['Reqs'] = []);
            var rid = Reqs.length + '@' + 0 + '@' + containerID;
            params['rid'] = rid;
            var req = (Reqs[Reqs.length] = {
                rid: rid,
                container: container,
                method: this.methodName,
                context: params['context'],
                c: params,
                p: params,
                i: params,
                operation: this.methodName,
                isHTML: true,
            });
            if (container && container.style) {
                container.style.display = '';
                container.style.visibility = '';
                var ifrel = document.getElementById('gigya_ifr_' + containerID);
                if (ifrel) {
                    ifrel.style.display = '';
                    ifrel.style.visibility = '';
                }
                var fncFixPosition = function () {
                    if (ifrel != null) {
                        // if is new modal, measure the new modal dialog size and sen it to the mask options.
                        DOMUtils.setSize(ifrel, params['width'], params['height'], isPopup);
                        /*if (gigya.localInfo.isIE) {*/ ifrel.style.visibility = 'visible'; /*}*/
                    }
                    DOMUtils.setSize(container, params['width'], params['height'], isPopup);
                };
                fncFixPosition();
            }
            var localMethodName = this.methodName.split('.').pop();
            if (container.setAttribute) {
                container.setAttribute('gigid', (params['source'] && params['source'] != localMethodName ? params['source'] + '_' : '') + localMethodName);
            }
            callback();
        }
    };
    return UiApi;
}(BaseApi_1.BaseApi));
exports.UiApi = UiApi;


/***/ }),

/***/ "./src/core/Gigya.Js/app/API/UiApiHelpers.ts":
/*!***************************************************!*\
  !*** ./src/core/Gigya.Js/app/API/UiApiHelpers.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.instances = {};
function getInstanceId(params, injectionInfo) {
    if (params['instanceID'])
        return params['instanceID'];
    else if (params['isPopup'])
        return 'gigya-modal-plugin-container-' + injectionInfo.methodName;
    else if (params['containerID'])
        return params['containerID'];
    else
        return injectionInfo.name;
}
function getPluginInstance(params, injectionInfo) {
    var pluginID = getInstanceId(params, injectionInfo);
    return exports.instances[pluginID];
}
exports.getPluginInstance = getPluginInstance;
function setPluginInstance(params, injectionInfo, instance, override) {
    if (override === void 0) { override = false; }
    var pluginID = getInstanceId(params, injectionInfo);
    if (!override) {
        var originID = pluginID;
        for (var numSuffix = 2; exports.instances[pluginID]; numSuffix++) {
            pluginID = originID + numSuffix.toString();
        }
    }
    params['instanceID'] = pluginID;
    exports.instances[pluginID] = instance;
}
exports.setPluginInstance = setPluginInstance;
function removePluginInstance(params, injectionInfo) {
    delete exports.instances[getInstanceId(params, injectionInfo)];
    delete params['instanceID'];
}
exports.removePluginInstance = removePluginInstance;


/***/ }),

/***/ "./src/core/Gigya.Js/app/API/UiApiRegistry.ts":
/*!****************************************************!*\
  !*** ./src/core/Gigya.Js/app/API/UiApiRegistry.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var queueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/queue */ "./src/core/Gigya.Js/app/Utils/queue.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
function registerPlugin(pluginInit) {
    queueUtils.queueForExecution('UI', pluginInit);
}
exports.registerPlugin = registerPlugin;
function attachPlugin(pluginClass, namespace, pluginName, publicMethodName) {
    if (!namespace)
        namespace = 'socialize';
    if (!window.gigya[namespace])
        window.gigya[namespace] = {};
    if (!window.gigya[namespace].plugins)
        window.gigya[namespace].plugins = {};
    if (!window.gigya[namespace].plugins[pluginName])
        window.gigya[namespace].plugins[pluginName] = { instances: [] };
    var ns = window.gigya[namespace].plugins[pluginName];
    if (!ns[publicMethodName]) {
        ns[publicMethodName] = function (params) {
            var refString = 'gigya.' + namespace + '.plugins.' + pluginName + '.instances[' + ns.instances.length + ']';
            var plugin = new pluginClass(params, refString);
            ns.instances.push(plugin);
        };
    }
    if (pluginClass.StaticApi) {
        for (var name in pluginClass.StaticApi) {
            var funcName = pluginClass.StaticApi[name];
            var func = pluginClass[funcName];
            functionsUtils.createAlias('gigya.' + namespace + '.plugins.' + pluginName + '.' + name, func);
        }
    }
}
exports.attachPlugin = attachPlugin;


/***/ }),

/***/ "./src/core/Gigya.Js/app/API/VersionSelector.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js/app/API/VersionSelector.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var arrayUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/array */ "./src/core/Gigya.Js/app/Utils/array.ts");
var VersionSelector = /** @class */ (function () {
    function VersionSelector(methodName, _versions, defaultVersionName) {
        this.methodName = methodName;
        this._versions = _versions;
        if (!this._versions || this._versions.length < 1)
            throw new Error(this.methodName + ': required at least one valid version');
        if (!defaultVersionName) {
            this._defaultVersionIndex = 0;
        }
        else {
            this._defaultVersionIndex = this.findVersionIndexOrDefault(defaultVersionName);
            if (this._defaultVersionIndex == -1)
                throw new Error(this.methodName + ': default version is not defined as a version');
        }
    }
    VersionSelector.prototype.callVersion = function (versionName, params, args) {
        if (params === void 0) { params = {}; }
        if (args === void 0) { args = [params]; }
        var wantedVersionIndex = this.findVersionIndexOrDefault(versionName);
        if (wantedVersionIndex == -1)
            throw Error("gigya plugin version doesn't exist");
        var supportedVersion = this.findSupportedVersion(wantedVersionIndex);
        if (!supportedVersion)
            throw new Error(versionName + ': could not find supported version for this browser');
        else {
            this.invokeVersionMethod(supportedVersion, params, args);
        }
    };
    VersionSelector.prototype.findSupportedVersion = function (startIndex) {
        var versionsNum = this._versions.length;
        for (var i = 0; i < versionsNum; ++i) {
            // go cyclicly through versions from start index
            var version = this._versions[(startIndex - i + versionsNum) % versionsNum];
            if (!version.isSupported || version.isSupported({ directCall: i == 0 })) {
                return version;
            }
        }
        return undefined;
    };
    VersionSelector.prototype.findVersionIndexOrDefault = function (versionName) {
        var result = -1;
        if (versionName) {
            result = arrayUtils.firstIndex(this._versions, function (version) { return version.versionName == versionName; });
        }
        // If version name isn't given or doesn't exist
        if (result == -1) {
            result = this._defaultVersionIndex !== undefined ? this._defaultVersionIndex : -1;
        }
        return result;
    };
    VersionSelector.prototype.invokeVersionMethod = function (version, params, args) {
        if (params === void 0) { params = {}; }
        if (args === void 0) { args = [params]; }
        var versionMethod;
        switch (typeof version.method) {
            case 'function':
                versionMethod = version.method;
                break;
            case 'string':
                versionMethod = eval(version.method);
                params['selectedMethodName'] = version.method; // debug legacy
                break;
            default:
                throw Error(this.methodName + ' ' + version.versionName + ': unsupported gigya-version method');
        }
        // Copy additional params.
        for (var field in version.additionalParams)
            params[field] = version.additionalParams[field];
        // Legacy.
        params['originalMethodName'] = this.methodName;
        // Go
        versionMethod.apply(this, args);
    };
    return VersionSelector;
}());
exports.VersionSelector = VersionSelector;


/***/ }),

/***/ "./src/core/Gigya.Js/app/BaseObject/BaseObject.ts":
/*!********************************************************!*\
  !*** ./src/core/Gigya.Js/app/BaseObject/BaseObject.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var events = __webpack_require__(/*! src/core/Gigya.Js/app/Events */ "./src/core/Gigya.Js/app/Events.ts");
var arrayUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/array */ "./src/core/Gigya.Js/app/Utils/array.ts");
var EventWrapper_1 = __webpack_require__(/*! src/core/Gigya.Js/app/BaseObject/EventWrapper */ "./src/core/Gigya.Js/app/BaseObject/EventWrapper.ts");
var globalEvents = __webpack_require__(/*! src/core/Gigya.Js/app/GlobalEvents */ "./src/core/Gigya.Js/app/GlobalEvents.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var BaseObject = /** @class */ (function () {
    /// Methods
    function BaseObject(params, explicitParams, validateParams) {
        if (validateParams === void 0) { validateParams = true; }
        this.params = params;
        this.explicitParams = explicitParams;
        /// Providers
        this._logger = window.gigya.logger;
        this._eventDispatcher = function (args, widget) { return events.dispatchForWidget(args, widget); };
        this._errorDispatcher = window.gigya.events;
        this._globalEventsManager = window.gigya.events.global;
        this._isDisposed = false;
        /// Members
        this._eventWrappers = {};
        this._globalEventHandlers = {};
        this._id = ++BaseObject.instanceCounter;
        // Clone params to avoid modifying originals.
        this.params = params ? objectUtils.clone(params) : {};
        this.explicitParams = explicitParams ? objectUtils.clone(explicitParams) : {};
        // Validate required params.
        if (validateParams) {
            this.validateParams();
        }
        // Copy properties to object itself.
        for (var name in params) {
            if (BaseObject[name]) {
                BaseObject[name] = params[name];
            }
        }
    }
    /// Events
    BaseObject.prototype.onErrorEvent = function () {
        return this.getEvent('onError');
    };
    BaseObject.prototype.onDisposedEvent = function () {
        return this.getEvent('onDisposed');
    };
    BaseObject.prototype.getType = function () {
        return this.constructor['name'] || this.getFunctionName(this.constructor);
    };
    BaseObject.prototype.getFunctionName = function (fun) {
        var ret = fun.toString();
        ret = ret.substr('function '.length);
        ret = ret.substr(0, ret.indexOf('('));
        return ret;
    };
    /// Abstract methods
    BaseObject.prototype.getConfig = function () {
        this.error(BaseObject.NOT_IMPLEMENTED_ERROR, GSErrors_1.GSErrors.NOT_SUPPORTED);
        return {};
    };
    /// Virtual methods
    BaseObject.prototype.toString = function () {
        return this.getType() + ' ' + this.id();
    };
    BaseObject.prototype.id = function () {
        return this._id;
    };
    BaseObject.prototype.warn = function (msg, e) {
        var warnMsg = this.id() + ' ' + this.getType() + ' - ' + msg;
        this._logger.info(warnMsg, e); // add message to gigya debug log
    };
    BaseObject.prototype.error = function (msg, errorCode, e) {
        if (errorCode === void 0) { errorCode = GSErrors_1.GSErrors.CLIENT_LOG; }
        var errorInfo = {
            errorMessage: msg,
            errorCode: errorCode,
            errorDetails: this.id(),
            info: e,
        };
        this.warn(msg, errorInfo);
        this.dispatchEvent('error', errorInfo);
    };
    BaseObject.prototype.validateParams = function (reqParams) {
        if (!reqParams)
            reqParams = this.getConfig().requiredParams || [];
        // Complete params with default.
        if (this.getConfig().defaultParams) {
            this.params = objectUtils.merge([this.getConfig().defaultParams, this.params]);
        }
        var missingParams = [];
        // Check existence of required params
        if (reqParams.length > 0) {
            for (var i in reqParams) {
                if (reqParams.hasOwnProperty(i)) {
                    var param = reqParams[i];
                    if (!this.params[param])
                        missingParams.push(param);
                }
            }
        }
        if (missingParams.length > 0) {
            this.dispatchInvalidParamError(missingParams[0]);
            return false;
        }
        else
            return true;
    };
    /// Events methods
    BaseObject.prototype.dispatchEvent = function (eventName, args) {
        if (args === void 0) { args = {}; }
        args.eventName = eventName;
        //args.sender = this; // TODO memory leak due to sender containing refrences to dom
        return this._eventDispatcher(args, this.params);
    };
    BaseObject.prototype.dispatchErrorFromResponse = function (response) {
        events.dispatchErrorFromResponse(this.params, response);
    };
    BaseObject.prototype.dispatchInvalidParamError = function (paramName) {
        events.dispatchInvalidParamError(this.params, paramName);
    };
    BaseObject.prototype.getEvent = function (eventName) {
        if (!this._eventWrappers[eventName]) {
            if (!this.params[eventName]) {
                this.params[eventName] = [];
            }
            else if (!(this.params[eventName] instanceof Array)) {
                this.params[eventName] = [this.params[eventName]];
            }
            this._eventWrappers[eventName] = new EventWrapper_1.EventWrapper(this.params[eventName]);
        }
        return this._eventWrappers[eventName];
    };
    BaseObject.prototype.addGlobalEventHandlers = function (handlers) {
        for (var name in handlers) {
            if (handlers.hasOwnProperty(name))
                this.addGlobalEventHandler(name, handlers[name]);
        }
    };
    BaseObject.prototype.addGlobalEventHandler = function (name, handler, context, namespace) {
        if (context === void 0) { context = null; }
        if (namespace === void 0) { namespace = 'socialize'; }
        if (!this._globalEventHandlers[name])
            this._globalEventHandlers[name] = [];
        var registeredHandler = globalEvents.add(name, handler, 'component', context, namespace, this.params);
        this._globalEventHandlers[name].push(registeredHandler);
    };
    BaseObject.prototype.removeGlobalEventHandlers = function (handlers) {
        for (var name in handlers) {
            if (handlers.hasOwnProperty(name))
                this.removeGlobalEventHandler(name, handlers[name]);
        }
    };
    /// Except 'name', all arguments are for base plugin support... really needed?
    BaseObject.prototype.removeGlobalEventHandler = function (name, handler, context, namespace) {
        if (context === void 0) { context = null; }
        if (namespace === void 0) { namespace = 'socialize'; }
        var arr = this._globalEventHandlers[name];
        if (arr) {
            var handlerInfoIndex = arrayUtils.firstIndex(arr, function (i) { return i.handler == handler; });
            if (handlerInfoIndex > -1) {
                var handlerInfo = arr[handlerInfoIndex];
                globalEvents.remove(handlerInfo.fullEventName, handlerInfo);
                arr.splice(handlerInfoIndex, 1);
            }
        }
    };
    BaseObject.prototype.prepareCallback = function (callback) {
        var instance = this;
        return function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            if (!instance._isDisposed)
                return callback.apply(this, args);
        };
    };
    /// IDisposable implementation
    BaseObject.prototype.dispose = function () {
        for (var name in this._globalEventHandlers) {
            if (this._globalEventHandlers.hasOwnProperty(name)) {
                for (var i in this._globalEventHandlers[name]) {
                    var eventHandlerInfo = this._globalEventHandlers[name][i];
                    globalEvents.remove(eventHandlerInfo.fullEventName, eventHandlerInfo);
                }
            }
        }
        this._globalEventHandlers = {};
        this._eventWrappers = {};
        this.params = {};
        this._isDisposed = true;
        // this.dispatchEvent("onDisposed"); // TODO fix memory leak from it
    };
    /// Static
    BaseObject.instanceCounter = 0;
    BaseObject.NOT_IMPLEMENTED_ERROR = 'Abstract method not implemented';
    return BaseObject;
}());
exports.BaseObject = BaseObject;


/***/ }),

/***/ "./src/core/Gigya.Js/app/BaseObject/EventWrapper.ts":
/*!**********************************************************!*\
  !*** ./src/core/Gigya.Js/app/BaseObject/EventWrapper.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var EventWrapper = /** @class */ (function () {
    function EventWrapper(_handlers) {
        if (_handlers === void 0) { _handlers = []; }
        this._handlers = _handlers;
    }
    EventWrapper.prototype.add = function (handler) {
        this._handlers.push(handler);
    };
    EventWrapper.prototype.remove = function (handler) {
        var index = this._handlers.indexOf(handler);
        if (index > -1) {
            this._handlers.splice(index, 1);
        }
    };
    return EventWrapper;
}());
exports.EventWrapper = EventWrapper;


/***/ }),

/***/ "./src/core/Gigya.Js/app/BaseObject/IBaseObjectConfig.ts":
/*!***************************************************************!*\
  !*** ./src/core/Gigya.Js/app/BaseObject/IBaseObjectConfig.ts ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var DeviceTypes;
(function (DeviceTypes) {
    DeviceTypes[DeviceTypes["_undefined"] = 0] = "_undefined";
    DeviceTypes[DeviceTypes["desktop"] = 1] = "desktop";
    DeviceTypes[DeviceTypes["mobile"] = 2] = "mobile";
    DeviceTypes[DeviceTypes["auto"] = 3] = "auto";
})(DeviceTypes = exports.DeviceTypes || (exports.DeviceTypes = {}));


/***/ }),

/***/ "./src/core/Gigya.Js/app/Bootstrap.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Bootstrap.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var queueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/queue */ "./src/core/Gigya.Js/app/Utils/queue.ts");
var reports = __webpack_require__(/*! src/core/Gigya.Js/app/Reports */ "./src/core/Gigya.Js/app/Reports.ts");
var events = __webpack_require__(/*! src/core/Gigya.Js/app/Events */ "./src/core/Gigya.Js/app/Events.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
var scriptUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/script */ "./src/core/Gigya.Js/app/Utils/script.ts");
var cdn_1 = __webpack_require__(/*! src/core/Gigya.Js/app/cdn */ "./src/core/Gigya.Js/app/cdn.ts");
var gigyaScriptEl_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/gigyaScriptEl */ "./src/core/Gigya.Js/app/Utils/gigyaScriptEl.ts");
var URLUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var facebookExternal = __webpack_require__(/*! src/core/Gigya.Js/app/ExternalIntegrations/Facebook */ "./src/core/Gigya.Js/app/ExternalIntegrations/Facebook.ts");
var googlePlusExternal = __webpack_require__(/*! src/core/Gigya.Js/app/ExternalIntegrations/GooglePlus */ "./src/core/Gigya.Js/app/ExternalIntegrations/GooglePlus.ts");
var InternalFlows_1 = __webpack_require__(/*! src/core/Gigya.Js/app/InternalFlows */ "./src/core/Gigya.Js/app/InternalFlows.ts");
var LocalInfo_1 = __webpack_require__(/*! ./LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
exports.parseScriptRetries = 0;
function init() {
    window.gigya.logger.group('websdk root');
    window.gigya.logger.info("partner settings:", window.gigya.partnerSettings);
    window.gigya.logger.info("local info:", LocalInfo_1.localInfo);
    var bootstrapLog = window.gigya.logger.group('bootstrap websdk');
    queueUtils.hold('bootstrap', 'API');
    // detecting unsupported browsers
    if ((LocalInfo_1.localInfo.isIE6 || LocalInfo_1.localInfo.isIE7 || LocalInfo_1.localInfo.isIE8 || LocalInfo_1.localInfo.isIE9 || LocalInfo_1.localInfo.isIE10) &&
        typeof console != 'undefined' &&
        typeof console.log != 'undefined')
        console.log("Gigya: It looks like you're using an old version of Internet Explorer. This browser is not supported. Please upgrade to a newer version of IE.");
    // gigya.gigya.logger.warn with force param?
    reports.init();
    parseScriptElement(function () {
        setMessagingMethod();
        var customEventMap = window.gigya.thisScript.globalConf['customEventMap'];
        if (customEventMap) {
            window.gigya.logger.info("adding custom event map"); //, customEventMap);
            events.addMap(customEventMap);
        }
        window.gigya.logger.group('init api adapter');
        initApiAdapter(function () {
            window.gigya.logger.groupEnd('init api adapter');
            window.gigya.isReady = true; // indicate bootstrap process has finish - gigya is ready
            // Trigger onGigyaServiceReady bound to window scope.
            if (typeof onGigyaServiceReady === 'function') {
                window.gigya.logger.info('invoke local onGigyaServiceReady event');
                try {
                    onGigyaServiceReady('socialize');
                }
                catch (e) {
                    window.gigya.logger.warn("gigya: error while invoking onGigyaServiceReady", e);
                }
            }
            // Trigger onGigyaServiceReady bound to global configuration.
            // This is commonly used when clients want to execute code from within the server-side global conf.
            if (typeof window.gigya.thisScript.globalConf['onGigyaServiceReady'] === 'function') {
                window.gigya.logger.info("invoke globalconf's onGigyaServiceReady event");
                try {
                    window.gigya.thisScript.globalConf['onGigyaServiceReady']('socialize');
                }
                catch (e) {
                    window.gigya.logger.warn("gigya: error while invoking onGigyaServiceReady injected from server", e);
                }
            }
            checkReturnFromRedirect(function () {
                queueUtils.release('bootstrap', 'API');
                if (!LocalInfo_1.localInfo.isNativeMobileApp) {
                    injectExternalSdks();
                    autoLogin();
                    reports.trackAddressBarShares();
                    functionsUtils.invokeOnPageLoad(function () {
                        return window.setTimeout(window.gigya.socialize.trackReferrals, 1000);
                    });
                }
                bootstrapLog.end();
            });
        });
        warnOnUnsupportedBrowser();
        loadOmniture();
        loadABTesting();
        var reportData = { sref: document.referrer };
        if (window.gigya.thisScript.globalConf['actionCounterPath'])
            reportData['actionCounterPath'] = window.gigya.thisScript.globalConf['actionCounterPath'];
        reports.report('loadc', window.gigya.thisScript.APIKey, null, null, null, reportData);
    });
}
exports.init = init;
function warnOnUnsupportedBrowser() {
    /*if (localInfo.isAndroidBrowser) {
                gigya._.showMessageUI({
                    captionText: 'Unsupported Browser',
                    message: 'The android browser contains a security vulnerability and is not supported, Switch to google chrom or firefox to get the full version of the site.'
                });
            }*/
}
exports.warnOnUnsupportedBrowser = warnOnUnsupportedBrowser;
function loadABTesting() {
    if (window.gigya.abTesting) {
        for (var abTestServiceKey in window.gigya.abTesting) {
            if (abTestServiceKey === 'optimizely') {
                var abTestItem = window.gigya.abTesting[abTestServiceKey];
                if (abTestItem.serviceParams && abTestItem.serviceParams.hasOwnProperty('apiKey')) {
                    // check for the path
                    var curPath = window.location.pathname;
                    var isEnabled = false;
                    var isDisabled = false;
                    // Checking if the path is disabled.
                    if (abTestItem.disabledPaths) {
                        for (var i = 0; i < abTestItem.disabledPaths.length; i++) {
                            if (abTestItem.disabledPaths[i].indexOf(curPath) > -1) {
                                isDisabled = true;
                                break;
                            }
                        }
                    }
                    // check if we have a match on the path to load the service.
                    if (!isDisabled) {
                        for (var i = 0; i < abTestItem.enabledPaths.length; i++) {
                            if (curPath.indexOf(abTestItem.enabledPaths[i]) > -1) {
                                scriptUtils.load('//cdn.optimizely.com/js/' + abTestItem.serviceParams['apiKey'] + '.js');
                            }
                        }
                    }
                }
            }
        }
    }
}
exports.loadABTesting = loadABTesting;
function startDebugIfNeeded(callback) {
    if (!LocalInfo_1.localInfo.isNativeMobileApp && window.gigya._.apiAdapter.getStorage().getItem('gig_debug') == '1') {
        window.gigya.socialize.showDebugUI({
            ignoreApiQueue: true,
            waitForDebug: false,
            onLoad: callback,
        });
    }
    else {
        callback();
    }
}
exports.startDebugIfNeeded = startDebugIfNeeded;
function loadOmniture() {
    functionsUtils.invokeOnPageLoad(function () {
        if (typeof window['gigya_omniture_conf'] != 'undefined')
            scriptUtils.load(cdn_1.getCdnResource('/js/GenesisExchange_Gigya.min.js'));
    });
}
exports.loadOmniture = loadOmniture;
var defaultLang = 'en-US';
function parseLang(lang) {
    if (lang === void 0) { lang = defaultLang; }
    var originalLang = lang.replace('en-US', 'en');
    lang = lang.replace('_', '-').toLowerCase();
    var segments = lang.split('-');
    var langCode = segments[0];
    var countryCode;
    if (segments.length > 1) {
        countryCode = segments[1];
    }
    else {
        countryCode = langCode;
    }
    countryCode = countryCode.toUpperCase();
    var shortLang;
    switch (lang) {
        case 'es-mx':
            shortLang = lang;
            countryCode = 'ES'; // FB doesn't support es-mx but we do
            break;
        case 'pt-br':
        case 'zh-cn':
        case 'zh-hk':
        case 'zh-tw':
        case 'te-st':
        case 'fr-inf':
        case 'de-inf':
        case 'es-inf':
        case 'nl-inf':
        case 'lt-lt':
        case 'lv-lv':
        case 'et-ee':
            shortLang = lang;
            break;
        default:
            shortLang = langCode;
    }
    return {
        full: langCode + '-' + countryCode,
        langCode: shortLang,
        countryCode: countryCode,
        originalLang: originalLang
    };
}
exports.parseLang = parseLang;
function parseScriptElement(callback) {
    var scriptElement = gigyaScriptEl_1.getGigyaScriptElement();
    if (scriptElement && !window['__gig_hidescript']) {
        window.gigya.logger.info("parsing gigya script");
        var URLParams = URLUtils.getParamsFromURL(scriptElement.src, true) || {};
        // Look for site group configuration, injected into partnerSettings.
        var siteGroupGlobalConf = JSONUtils.deserialize(window.gigya.partnerSettings.siteGroupGlobalConf) || {};
        // Look for site configuration, injected into partnerSettings.
        var siteGlobalConf = JSONUtils.deserialize(window.gigya.partnerSettings.globalConf, {}, { siteGroupGlobalConf: siteGroupGlobalConf }) || {};
        // Parse script configuration from JSON object inside the Gigya SDK script tag.
        // JSON.deserialize will never throw an exception and can parse JavaScript objects,
        // including unquoted keys, functions, and variable references.
        var scriptConf = JSONUtils.deserialize(scriptElement.innerHTML) || {};
        // Look for __gigyaConf, a global object that can set before gigya.js is loaded.
        var __gigyaConf = window['__gigyaConf'] || {};
        window.gigya.thisScript = {
            scriptElement: scriptElement,
            protocol: scriptElement.src.indexOf('https:') === 0 ? 'https' : 'http',
            baseDomain: scriptElement.src.split('/')[2],
            APIKey: URLParams['apikey'],
            lang: parseLang(URLParams['lang'] || __gigyaConf['lang'] || scriptConf['lang'] || siteGlobalConf['lang'] || siteGroupGlobalConf['lang']),
            globalConf: objectUtils.merge([window.gigya.partnerSettings.plugins || {}, siteGroupGlobalConf, siteGlobalConf, scriptConf, __gigyaConf], false),
            URLParams: URLParams,
        };
        window.gigya.thisScript.globalConf['lang'] = window.gigya.thisScript.lang.langCode;
        // Warn if API key wasn't passed in URL params.
        // IE9 support - check for console.warn.
        if (!window.gigya.thisScript.APIKey && typeof console === 'object' && console.warn) {
            console.warn('**** WARNING - Loading socialize.js without an APIKey parameter is unsupported and may result in an unexpected behavior.  ****');
        }
        else {
            window.gigya.thisScript.globalConf['APIKey'] = window.gigya.thisScript.APIKey;
        }
        callback();
    }
    else if (exports.parseScriptRetries < 10) {
        // In some rare cases, IE fails to find the script element. Retry script parsing every 200ms.
        // No script element will cause us to not know what the apikey is and retrieve the login token.
        exports.parseScriptRetries++;
        window.setTimeout(function () {
            parseScriptElement(callback);
        }, 200);
    }
    else {
        window.gigya.thisScript = {
            scriptElement: null,
            protocol: LocalInfo_1.localInfo.protocol,
            baseDomain: 'https://cdns.gigya.com',
            APIKey: '',
            lang: parseLang(''),
            globalConf: {},
            URLParams: {},
        };
        callback();
    }
}
exports.parseScriptElement = parseScriptElement;
function initApiAdapter(callback) {
    var adapterSettings = window['__gigAPIAdapterSettings'];
    var adapterName = getAdapterType(adapterSettings);
    LocalInfo_1.localInfo.isNativeMobileApp = adapterName === 'mobile';
    window.gigya.logger.info("selecting api adapter: " + adapterName);
    window.gigya._.apiAdapter = window.gigya._.apiAdapters[adapterName].newApiAdapter(adapterSettings);
    functionsUtils.createAlias('gigya.auth.loginToken.getTokenParam', window.gigya._.apiAdapter.getTokenParam);
    startDebugIfNeeded(function () {
        window.gigya._.apiAdapter.init(callback, 3);
    });
}
exports.initApiAdapter = initApiAdapter;
function getAdapterType(adapterSettings) {
    if (adapterSettings === void 0) { adapterSettings = window['__gigAPIAdapterSettings']; }
    var adapterName;
    if (adapterSettings
        && adapterSettings.getAPIKey() === window.gigya.thisScript.APIKey) {
        adapterName = adapterSettings.getAdapterName();
    }
    return adapterName || 'web';
}
function autoLogin() {
    if (window.gigya.thisScript.globalConf['autoLogin']) {
        window.gigya.logger.info('triggering auto-login');
        facebookExternal.autoLogin();
        googlePlusExternal.autoLogin();
    }
}
exports.autoLogin = autoLogin;
function checkReturnFromRedirect(callback) {
    // Check if coming back from authflow redirect with pending error
    var oURLParams = URLUtils.getParamsFromURL(document.location.href);
    if (oURLParams['errorCode'] && oURLParams['regToken']) {
        window.gigya.logger.info("returned from redirect with regToken (errorCode: " + oURLParams['errorCode'] + ")");
        InternalFlows_1.checkCompleteRegistration(oURLParams, window.gigya.thisScript.globalConf, '', function () { return callback(); });
    }
    else {
        callback();
    }
}
exports.checkReturnFromRedirect = checkReturnFromRedirect;
function setMessagingMethod() {
    /// IMPORTANT: changing the messaging method should also affect the one in
    /// bootstrap.ts/setMessagingMethod
    /// LocalInfo.ts
    var browser = LocalInfo_1.localInfo;
    var method;
    if (browser.isIE11 && !window.indexedDB) {
        //IE11 inprivate browsing
        method = InternalFlows_1.MessagingMethod.Flash;
        window.gigya.thisScript.globalConf['legacyCrossSiteMethod'] = 'localConnection';
    }
    else if (browser.supportsPostMessage)
        method = InternalFlows_1.MessagingMethod.PostMessage;
    else
        method = InternalFlows_1.MessagingMethod.Flash;
    browser.messagingMethod = method;
    window.gigya.logger.info("selected messaging method is: " + InternalFlows_1.MessagingMethod[method]);
}
exports.setMessagingMethod = setMessagingMethod;
function injectExternalSdks() {
    queueUtils.queueForExecution('API', function () {
        functionsUtils.invokeOnPageLoad(function () {
            if (window.gigya.providersConfig.facebook) {
                window.gigya.logger.info('loading facebook sdk');
                facebookExternal.load(false);
            }
            if (window.gigya.providersConfig.googlePlus) {
                window.gigya.logger.info('loading google plus sdk');
                googlePlusExternal.load();
            }
        });
    });
}
exports.injectExternalSdks = injectExternalSdks;


/***/ }),

/***/ "./src/core/Gigya.Js/app/ClientAPI/CustomApis.ts":
/*!*******************************************************!*\
  !*** ./src/core/Gigya.Js/app/ClientAPI/CustomApis.ts ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var globalEvents = __webpack_require__(/*! src/core/Gigya.Js/app/GlobalEvents */ "./src/core/Gigya.Js/app/GlobalEvents.ts");
var validationUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/validation */ "./src/core/Gigya.Js/app/Utils/validation.ts");
var facebookExternal = __webpack_require__(/*! src/core/Gigya.Js/app/ExternalIntegrations/Facebook */ "./src/core/Gigya.Js/app/ExternalIntegrations/Facebook.ts");
var googlePlusExternal = __webpack_require__(/*! src/core/Gigya.Js/app/ExternalIntegrations/GooglePlus */ "./src/core/Gigya.Js/app/ExternalIntegrations/GooglePlus.ts");
var ApisList_1 = __webpack_require__(/*! src/core/Gigya.Js/app/API/ApisList */ "./src/core/Gigya.Js/app/API/ApisList.ts");
var Opengraph = __webpack_require__(/*! src/core/Gigya.Js/app/ExternalIntegrations/Opengraph */ "./src/core/Gigya.Js/app/ExternalIntegrations/Opengraph.ts");
var winUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/win */ "./src/core/Gigya.Js/app/Utils/win.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var stringUtilsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringUtils */ "./src/core/Gigya.Js/app/Utils/stringUtils.ts");
var keyValueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/keyValue */ "./src/core/Gigya.Js/app/Utils/keyValue.ts");
var reports = __webpack_require__(/*! src/core/Gigya.Js/app/Reports */ "./src/core/Gigya.Js/app/Reports.ts");
var LegacyLogger_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LegacyLogger */ "./src/core/Gigya.Js/app/LegacyLogger.ts");
var InternalFlows_1 = __webpack_require__(/*! src/core/Gigya.Js/app/InternalFlows */ "./src/core/Gigya.Js/app/InternalFlows.ts");
var cookieUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/cookie */ "./src/core/Gigya.Js/app/Utils/cookie.ts");
var scriptUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/script */ "./src/core/Gigya.Js/app/Utils/script.ts");
var cdn_1 = __webpack_require__(/*! src/core/Gigya.Js/app/cdn */ "./src/core/Gigya.Js/app/cdn.ts");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var HTTPUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/HTTP */ "./src/core/Gigya.Js/app/Utils/HTTP.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
// client side only APIs
exports.bookmarkSize = {
    facebook: { w: 640, h: 370 },
    twitter: { w: 880, h: 530 + 55 },
    messenger: { w: 710, h: 850 + 55 },
    linkedin: { w: 560, h: 500 },
    yahoobookmarks: { w: 840, h: 920 + 55 },
    digg: { w: 1010, h: 990 + 55 },
    googlebookmarks: { w: 710, h: 850 + 55 },
    mixi: { w: 640, h: 470 },
    googleplus: { w: 496, h: 420 },
};
function socializeAddEventHandlers() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var params = objectUtils.merge([window.gigya.thisScript.globalConf, rest]);
    var namespace = params['namespace'] ? params['namespace'] : 'socialize';
    for (var eventName in params) {
        if (eventName.indexOf('on') == 0)
            globalEvents.add(eventName, params[eventName], params['listenerType'], params['context'], namespace, params);
    }
    if (typeof params['callback'] == 'function') {
        params['callback']({
            status: 'OK',
            statusMessage: '',
            errorCode: 0,
            errorMessage: '',
            operation: 'addEventHandlers',
            context: params['context'],
        });
    }
}
exports.socializeAddEventHandlers = socializeAddEventHandlers;
function accountsAddEventHandlers() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    socializeAddEventHandlers(objectUtils.merge([rest, { namespace: 'accounts' }]));
}
exports.accountsAddEventHandlers = accountsAddEventHandlers;
function isLoggedIn() {
    var params = objectUtils.merge([window.gigya.thisScript.globalConf, arguments]);
    window.gigya.socialize.getUserInfo(params, {
        callback: function (userInfoResponse) {
            var user = userInfoResponse['user'];
            var response = { loggedIn: user ? validationUtils.isExplicitTrue(user['isLoggedIn']) : false };
            objectUtils.extractProperties(userInfoResponse, response, 'status|statusMessage|callId|errorCode|errorMessage|errorDetails|context');
            if (params['callback'])
                params['callback'](response);
        },
    });
}
exports.isLoggedIn = isLoggedIn;
function waitForService() {
    var params = objectUtils.merge([window.gigya.thisScript.globalConf, arguments]);
    var service = params['service'];
    if (!service)
        return;
    service = service.toLowerCase();
    var callback = params['callback'];
    if (service == 'fbconnect' || service == 'facebook') {
        if (!facebookExternal.isLoaded()) {
            window.gigya.socialize.addEventHandlers({ listenerType: 'component' }, {
                onFacebookLoaded: callback,
                context: params['context'],
            });
        }
        else {
            callback({ context: params['context'] });
        }
    }
    if (service == 'googleplus') {
        if (!googlePlusExternal.isLoaded()) {
            window.gigya.socialize.addEventHandlers({ listenerType: 'component' }, {
                onGooglePlusLoaded: callback,
                context: params['context'],
            });
        }
        else {
            callback({ context: params['context'] });
        }
    }
}
exports.waitForService = waitForService;
function postBookmark() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    // Merge params with global params.
    var params = objectUtils.merge([window.gigya.thisScript.globalConf, rest]);
    if (!params['APIKey']) {
        params['APIKey'] = window.gigya.thisScript.APIKey;
    }
    // Extract whitelisted params.
    var requestParams = {};
    objectUtils.extractProperties([params], requestParams, ApisList_1.postBookmarkSchema);
    // Accept URL or url as parameter, but standardize to "url" as documented.
    if (!requestParams['url'] && requestParams['URL']) {
        requestParams['url'] = requestParams['URL'];
        delete requestParams['URL'];
    }
    // Pass JS SDK version as param.
    requestParams['sdk'] = 'js_' + window.gigya.build.version;
    // Default url to og:url if not passed as param and userAction passed.
    if (!requestParams['url'] && requestParams['userAction'] && !requestParams['userAction']['linkBack']) {
        var metas = document.getElementsByTagName('meta');
        for (var i = 0; i < metas.length; i++) {
            if (metas[i].getAttribute('property') === 'og:url' && metas[i].getAttribute('content')) {
                requestParams['url'] = metas[i].getAttribute('content');
                break;
            }
        }
    }
    // Default url to current page if userAction passed.
    if (!requestParams['url'] && (requestParams['userAction'] && !requestParams['userAction']['linkBack'])) {
        requestParams['url'] = document.location.href;
    }
    // Provider name always lowercase.
    requestParams['provider'] = requestParams['provider'] ? (requestParams['provider'] + '').toLowerCase() : '';
    // Default providerKey to fb:app_id meta tag.
    if (requestParams['provider'] === 'facebook') {
        requestParams['providerKey'] = Opengraph.getMetaTag('fb:app_id');
    }
    var gmidTicket = window.gigya._.apiAdapter.getGmidTicket();
    // gmidTicket is needed if 3rd party cookies are blocked.
    if (gmidTicket) {
        requestParams['gmidTicket'] = gmidTicket;
    }
    // Find provider-specific window size (does not always exist).
    var defaultSize = window.gigya._.bookmarkSize[requestParams['provider']] || {};
    // Look for user-provided popup dimensions and position.
    var windowOptions = {
        width: params['popupWidth'] || defaultSize.w,
        height: params['popupHeight'] || defaultSize.h,
        top: params['popupPositionY'],
        left: params['popupPositionX'],
        menubar: 0,
        resizable: 1,
        scrollbars: 1,
    };
    // Allow location/toolbar to be toggled on.
    if (params['enablePopupLocation']) {
        windowOptions.location = 1;
        windowOptions.toolbar = 1;
    }
    else {
        windowOptions.toolbar = 0;
    }
    //Add login_token to request
    var tokenStore = window.gigya._.apiAdapters['web'] ? window.gigya._.apiAdapters['web'].tokenStore : undefined;
    if (tokenStore) {
        requestParams['login_token'] = window.gigya._.apiAdapters.web.tokenStore.get();
    }
    // Respect custom API domain prefix.
    var finalURL;
    if (requestParams['provider'] === 'twitter' && LocalInfo_1.localInfo.isIOS) {
        var userAction = requestParams['userAction'] || {};
        // Direct link to Twitter to prevent blank page on Safari iOS - see #42020.
        var qs = {
            url: userAction['linkBack'] || requestParams['url'],
            text: userAction['title'] || requestParams['title'],
        };
        var urlTemplate = 'https://twitter.com/intent/tweet?{0}';
        finalURL = stringUtilsUtils.format(urlTemplate, keyValueUtils.serialize(qs));
        var sourceData = params['sourceData'] ? objectUtils.clone(params['sourceData']) : {};
        sourceData.provider = requestParams['provider'];
        sourceData.url = qs.url;
        reports.report('share', params['APIKey'], params['cid'], params['source'], sourceData, { tags: params['tags'] });
    }
    else {
        var qs = keyValueUtils.serialize(requestParams);
        var urlTemplate = "https://" + window.gigya._.getApiDomain('socialize') + "/gs/bookmark.aspx?{0}";
        finalURL = stringUtilsUtils.format(urlTemplate, qs);
    }
    // Dispatch and log event.
    LegacyLogger_1.logCall('postBookmark', requestParams);
    globalEvents.dispatch({
        eventName: 'beforeRequest',
        methodName: 'socialize.postBookmark',
        rawParams: params,
        params: requestParams,
    });
    var windowName = requestParams['provider'] === 'whatsapp' ? '_self' : 'gs_bookmark_' + requestParams['provider'];
    // Open window.
    winUtils.open(finalURL, windowName, windowOptions);
}
exports.postBookmark = postBookmark;
function refreshUI() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var params = objectUtils.merge([window.gigya.thisScript.globalConf, rest]);
    var originalCallback = params['callback'];
    window.gigya.socialize.getUserInfo(params, {
        callback: function (res) {
            var oEvent = {
                eventName: 'login',
                isInternal: true,
            };
            if (params['provider'])
                oEvent['provider'] = params['provider'];
            InternalFlows_1.addUserInfoToEvent(res, oEvent, true);
            if (params['context'])
                oEvent['context'] = params['context'];
            globalEvents.dispatch(oEvent);
            if (typeof originalCallback == 'function')
                originalCallback(res);
        },
    });
}
exports.refreshUI = refreshUI;
function trackReferrals() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var oReferrers = {
        //domain:provider
        'digg.com': 'digg',
        'stumbleupon.com': 'stumbleupon',
        'technorati.com': 'technorati',
        't.co': 'twitter',
        'plus.url.google.com': 'googlePlus',
        'facebook.com': 'facebook',
        'linkedin.com': 'linkedIn',
        'pinterest.com': 'pinterest',
        'mixi.jp': 'mixi',
        'b.hatena.ne.jp': 'hatena',
        'line.me': 'line',
    };
    var reportedReferrals;
    var params = objectUtils.merge([window.gigya.thisScript.globalConf, rest]);
    var linkBackEvent = {
        eventName: 'linkback',
        CID: params['cid'],
    };
    var URLParams = {};
    var fargmentParams = {};
    if (document.location.href.indexOf('#') != -1) {
        fargmentParams = keyValueUtils.deserialize(document.location.href.split('#')[1]);
    }
    if (document.location.href.indexOf('?') != -1) {
        URLParams = keyValueUtils.deserialize(document.location.href.split('?')[1].split('#')[0]);
    }
    window.gigya.socialize.updateRefUID(params['APIKey'], fargmentParams, URLParams);
    var gus = fargmentParams['_gus'] != null || URLParams['_gus'] != null; // _gus means it's reported by soc.li (Gigya Url Shortner) so we don't need to report it again
    if (gus) {
        linkBackEvent.CID = fargmentParams['_gucid'] || URLParams['_gucid'];
        linkBackEvent.shortCode = fargmentParams['_gsc'] || URLParams['_gsc'];
        linkBackEvent.provider = fargmentParams['_gup'] || URLParams['_gup'];
    }
    if (!reportedReferrals) {
        var source;
        var reportParams = {
            url: document.location.href,
            ref: document.referrer,
        };
        if (URLParams['fb_ref']) {
            // from sharebarUI facebook-like and facebook-send buttons
            var fbParams = keyValueUtils.deserialize(URLParams['fb_ref'], ':');
            reportParams['uuid'] = fbParams['uu'];
            reportParams['sn'] = fbParams['p'];
            source = fbParams['s'];
        }
        else if (document.referrer && document.referrer.indexOf('://') != -1) {
            var referringDomain = document.referrer.split('://')[1].split('/')[0];
            if (referringDomain.indexOf('www.') == 0) {
                referringDomain = referringDomain.split('www.')[1];
            }
            if (oReferrers[referringDomain]) {
                linkBackEvent.provider = reportParams['sn'] = oReferrers[referringDomain];
            }
        }
        // AddressBarShares (with hash parameters)
        if (!reportParams['sn'] &&
            (!document.referrer || (document.referrer.indexOf('http://soc.li') == -1 && document.referrer.indexOf('https://shr.gs') == -1))) {
            var arHashSegs = document.location.href.split('#guid=');
            if (arHashSegs.length > 1) {
                var hashUUID = arHashSegs[1].split('#')[0].split('&')[0];
                if (hashUUID != window.gigya._.apiAdapter.getTokenParam(params['APIKey'], 'UUID')) {
                    reportParams['sn'] = 'AddressBarShares';
                    reportParams['uuid'] = hashUUID;
                    if (hashUUID == '_')
                        delete reportParams['uuid'];
                    document.location.replace('#');
                    reports.trackAddressBarShares();
                    reportParams.url = document.location.href.split('#')[0];
                }
            }
        }
        // _gigRefUid_<APIKey> cookie is used to report the referring uuid when the next request of a logged in user will go out (for gm points)
        if (reportParams['uuid'])
            cookieUtils.set('_gigRefUid_' + params['APIKey'], reportParams['uuid']);
        if (reportParams['sn'] && !gus)
            reports.report('linkback', params['APIKey'], params['cid'], source, null, reportParams);
        if (reportParams['sn'] || gus)
            globalEvents.dispatch(objectUtils.removeUndefined(linkBackEvent));
        reportedReferrals = true;
    }
    if (typeof params['callback'] == 'function')
        params['callback']({
            status: 'OK',
            statusMessage: '',
            operation: 'trackReferrals',
            context: params['context'],
            errorMessage: '',
            errorCode: 0,
        });
}
exports.trackReferrals = trackReferrals;
function updateRefUID(apiKey, fragmentParams, URLParams) {
    if (!apiKey)
        apiKey = window.gigya.thisScript.globalConf['APIKey'];
    if (!fragmentParams) {
        fragmentParams = {};
        if (document.location.href.indexOf('#') != -1) {
            fragmentParams = keyValueUtils.deserialize(document.location.href.split('#')[1]);
        }
    }
    if (!URLParams) {
        URLParams = {};
        if (document.location.href.indexOf('?') != -1) {
            URLParams = keyValueUtils.deserialize(document.location.href.split('?')[1].split('#')[0]);
        }
    }
    if (fragmentParams['guid'] && fragmentParams['guid'] != '_')
        cookieUtils.set('_gigRefUid_' + apiKey, fragmentParams['guid']);
    var refUuid = fragmentParams['_giguuid'] || URLParams['_giguuid'];
    if (refUuid) {
        cookieUtils.set('_gigRefUid_' + apiKey, refUuid);
    }
}
exports.updateRefUID = updateRefUID;
function hideUI() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var params = objectUtils.merge([window.gigya.thisScript.globalConf, rest]);
    if (typeof params['callback'] == 'function') {
        var oResponse = {
            status: 'OK',
            statusMessage: '',
            operation: 'hideUI',
            context: params['context'],
            errorMessage: '',
            errorCode: 0,
        };
        params['callback'](oResponse);
    }
}
exports.hideUI = hideUI;
function submitUserForm() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var oUserData = {};
    var params = objectUtils.merge([window.gigya.thisScript.globalConf, rest]);
    var form = document.getElementById(params['form']);
    if (!form) {
        var arForms = document.getElementsByName(params['form']);
        if (arForms && arForms.length > 0)
            params['form'] = arForms[0];
    }
    for (var i = 0; i < form['elements'].length; i++) {
        var el = form['elements'][i];
        if (el.name) {
            var arNameSegments = el.name.split('.');
            var oCurrentSegment = oUserData;
            for (var iSegment = 0; iSegment < arNameSegments.length - 1; iSegment++) {
                var sSegment = arNameSegments[iSegment];
                if (!oCurrentSegment[sSegment])
                    oCurrentSegment[sSegment] = {};
                oCurrentSegment = oCurrentSegment[sSegment];
            }
            oCurrentSegment[arNameSegments[arNameSegments.length - 1]] = el.value;
        }
    }
    params['data'] = oUserData;
    window.gigya.gcs.setUserData(params);
}
exports.submitUserForm = submitUserForm;
function getProviderShareCounts() {
    var rest = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        rest[_i] = arguments[_i];
    }
    var params = objectUtils.merge([window.gigya.thisScript.globalConf, rest]);
    scriptUtils.load(cdn_1.getCdnResource('/js/gigya.services.socialize.plugins.shareCounts.min.js'), null, function () {
        window.gigya.socialize.plugins.shareCounts.getProviderShareCounts(params);
    }, true);
}
exports.getProviderShareCounts = getProviderShareCounts;
function openDelegateAdminHandler(params) {
    if (!params || !params.orgId) {
        window.gigya.logger.warn("gigya.accounts.b2b.openDelegatedAdminLogin - missing orgId parameter.");
    }
    else {
        var myWindow_1 = window.open('', '_blank');
        window.gigya.accounts.b2b.delegatedAdminLogin({
            orgId: params.orgId,
            callback: function (res) {
                if (res.errorCode !== GSErrors_1.GSErrors.OK) {
                    myWindow_1.close();
                    if (typeof params.onError === 'function') {
                        params.onError(res);
                    }
                }
                else if (!res.targetUrl || !res.id_token) {
                    myWindow_1.close();
                    window.gigya.logger.error("accounts.b2b.delegatedAdminLogin - missing required params", { targetURL: res.targetUrl, id_token: res.id_token });
                }
                else {
                    HTTPUtils.redirect(res.targetUrl, [{ id_token: res.id_token }], 'POST', undefined, myWindow_1.document);
                }
            },
        });
    }
}
exports.openDelegateAdminHandler = openDelegateAdminHandler;
window.gigya.socialize.updateRefUID = updateRefUID;
window.gigya.socialize.hideUI = hideUI;
window.gigya.gcs.submitUserForm = submitUserForm;
window.gigya.socialize.getProviderShareCounts = getProviderShareCounts;
window.gigya.socialize.addEventHandlers = socializeAddEventHandlers;
window.gigya.accounts.addEventHandlers = accountsAddEventHandlers;
window.gigya.socialize.isLoggedIn = isLoggedIn;
window.gigya.socialize.waitForService = waitForService;
window.gigya.socialize.postBookmark = postBookmark;
window.gigya.socialize.refreshUI = refreshUI;
window.gigya.socialize.trackReferrals = trackReferrals;
functionsUtils.createAlias('gigya.accounts.b2b.openDelegatedAdminLogin', openDelegateAdminHandler);
functionsUtils.createAlias('gigya.accounts.setSSOToken', window.gigya.setSSOToken);


/***/ }),

/***/ "./src/core/Gigya.Js/app/ClientAPI/ISamlConfig.ts":
/*!********************************************************!*\
  !*** ./src/core/Gigya.Js/app/ClientAPI/ISamlConfig.ts ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core/Gigya.Js/app/ClientAPI/SamlApi.ts":
/*!****************************************************!*\
  !*** ./src/core/Gigya.Js/app/ClientAPI/SamlApi.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var URLUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
function getProxyUrl() {
    var url = window.gigya.samlConfig && window.gigya.samlConfig.proxyPageURL;
    if (!url) {
        window.gigya.logger.warn('missing proxy page url');
    }
    return url;
}
function initSSO(params) {
    var proxyPage = getProxyUrl();
    var url = URLUtils.addParamsToURL(proxyPage, objectUtils.merge([
        {
            mode: 'initSSO',
        },
        params,
    ]));
    window.location.href = url;
}
exports.initSSO = initSSO;
function continueSSO() {
    var proxyPage = getProxyUrl();
    var args = URLUtils.getParamsFromURL(location.href);
    var url = URLUtils.addParamsToURL(proxyPage, {
        mode: 'afterLogin',
        samlContext: args['samlContext'],
    });
    window.location.href = url;
}
exports.continueSSO = continueSSO;


/***/ }),

/***/ "./src/core/Gigya.Js/app/DefaultEventsMap.ts":
/*!***************************************************!*\
  !*** ./src/core/Gigya.Js/app/DefaultEventsMap.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Global and widget events handling
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultEventMaps = window.gigya.defaultEventMaps || [];


/***/ }),

/***/ "./src/core/Gigya.Js/app/Events.ts":
/*!*****************************************!*\
  !*** ./src/core/Gigya.Js/app/Events.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var LegacyLogger_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LegacyLogger */ "./src/core/Gigya.Js/app/LegacyLogger.ts");
var InternalFlows_1 = __webpack_require__(/*! src/core/Gigya.Js/app/InternalFlows */ "./src/core/Gigya.Js/app/InternalFlows.ts");
var arrayUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/array */ "./src/core/Gigya.Js/app/Utils/array.ts");
var templatesUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/templates */ "./src/core/Gigya.Js/app/Utils/templates.ts");
function getEventHandlerName(eventName) {
    if (eventName.substring(0, 2) === 'on') {
        return eventName;
    }
    else {
        return 'on' + eventName.substring(0, 1).toUpperCase() + eventName.substring(1);
    }
}
function addMap(map) {
    window.gigya.defaultEventMaps.splice(0, 0, map);
}
exports.addMap = addMap;
function dispatchErrorFromResponse(widgetParams, response, additionalProperties) {
    if (!response) {
        response = {};
    }
    var r = response;
    if (r.response) {
        r = r.response;
    }
    var eventObj = {
        eventName: 'error',
        status: r.status ? r.status : 'FAIL',
        statusMessage: r.statusMessage ? r.statusMessage : 'General Server Error',
        errorMessage: r.errorMessage ? r.errorMessage : 'General Server Error',
        errorDetails: r.errorDetails ? r.errorDetails : '',
        errorCode: r.errorCode ? r.errorCode : 500001,
        response: response,
    };
    objectUtils.add(eventObj, additionalProperties);
    dispatchForWidget(eventObj, widgetParams);
}
exports.dispatchErrorFromResponse = dispatchErrorFromResponse;
function dispatchInvalidParamError(widgetParams, paramName) {
    var evt = { eventName: 'error' };
    if (typeof widgetParams[paramName] == 'undefined' || widgetParams[paramName] == null) {
        evt.errorCode = GSErrors_1.GSErrors.MISSING_REQUIRED_PARAMETER;
        evt.errorMessage = 'Missing_required_parameter (' + paramName + ')';
    }
    else {
        evt.errorCode = GSErrors_1.GSErrors.INVALID_PARAMETER_VALUE;
        evt.errorMessage = 'Invalid_parameter_value (' + paramName + ')';
    }
    evt.status = evt.errorCode;
    evt.statusMessage = evt.errorMessage;
    dispatchForWidget(evt, widgetParams);
}
exports.dispatchInvalidParamError = dispatchInvalidParamError;
function dispatchForWidget(e, widgetParams) {
    if (!e || !e.eventName)
        return;
    var eventName = e.eventName;
    LegacyLogger_1.addLog('Dispatching widget event "' + eventName + '" for ' + widgetParams.lastSource + ' with this event object', e);
    //gigya.socialize._AdjustResponseStatus(eventObj);
    InternalFlows_1.handleSpecialFields(e);
    var arEvents = eventName.split(',');
    var result;
    for (var i = 0; i < arEvents.length; i++) {
        var eventName_1 = arEvents[i];
        var eventHandlerName = getEventHandlerName(eventName_1);
        if (widgetParams) {
            if (widgetParams.context) {
                e.context = widgetParams.context;
            }
            if (widgetParams.source) {
                e.source = widgetParams.source;
            }
            if (widgetParams.sourceData) {
                e.sourceData = widgetParams.sourceData;
            }
            if (widgetParams.containerID) {
                e.sourceContainerID = widgetParams.containerID;
            }
            if (widgetParams.instanceID) {
                e.instanceID = widgetParams.instanceID;
            }
        }
        if (widgetParams[eventHandlerName]) {
            result = dispatchEventObject(widgetParams[eventHandlerName], e);
        }
        if (typeof result === 'undefined') {
            result = true;
        }
        if (eventName_1.indexOf('login') == -1 && eventName_1.indexOf('logout') == -1 && eventName_1 != 'connectionRemoved' && eventName_1 != 'connectionAdded') {
            _dispatchFromMaps(e);
            var GenesisExchange_Gigya = window['GenesisExchange_Gigya'];
            var gigya_omniture_conf = window['gigya_omniture_conf'];
            var myOmnitureIntegrationFunc = window['myOmnitureIntegrationFunc'];
            if (typeof GenesisExchange_Gigya != 'undefined' && typeof gigya_omniture_conf != 'undefined') {
                var ge = new GenesisExchange_Gigya(gigya_omniture_conf);
                ge.processAction(e);
                if (typeof myOmnitureIntegrationFunc != 'undefined') {
                    myOmnitureIntegrationFunc(gigya_omniture_conf, e);
                }
            }
        }
    }
    return result;
}
exports.dispatchForWidget = dispatchForWidget;
function dispatchEventObject(handlers, e) {
    var result;
    try {
        if (typeof handlers == 'function') {
            result = handlers(e);
        }
        else if (!(handlers instanceof Array)) {
            LegacyLogger_1.addLog('Not a function or function array registered to event', handlers);
        }
        else {
            arrayUtils.forEach(handlers, function (handler) {
                if (typeof handler == 'function') {
                    handler(e);
                }
                else {
                    LegacyLogger_1.addLog('Not a function registered to event: ' + handler, handler);
                }
            });
            /// TODO: not collecting results.. should it?
        }
    }
    catch (ex) {
        LegacyLogger_1.addLog('Error invoking function registered to event', handlers);
    }
    return result;
}
exports.dispatchEventObject = dispatchEventObject;
function _dispatchFromMaps(evt, isGlobal) {
    if (isGlobal === void 0) { isGlobal = false; }
    var arDispatch = [];
    var stop = false;
    for (var i = 0; i < window.gigya.defaultEventMaps.length; i++) {
        var map = window.gigya.defaultEventMaps[i].eventMap;
        var defaultMethod = window.gigya.defaultEventMaps[i].defaultMethod;
        for (var u = 0; u < map.length; u++) {
            var oField = map[u];
            var processedArgs = [];
            if (!oField.args)
                oField.args = [];
            for (var iArg = 0; iArg < oField.args.length; iArg++) {
                if (oField.args[iArg] == '$event') {
                    processedArgs.push(evt);
                }
                else {
                    processedArgs.push(templatesUtils.fill(oField.args[iArg], evt));
                }
            }
            var sEvents = ',' + oField.events.toLowerCase() + ',';
            if (sEvents.indexOf(',*,') != -1 ||
                ((sEvents.indexOf(',' + 'on' + evt.eventName.toLowerCase() + ',') != -1 || sEvents.indexOf(',' + evt.eventName.toLowerCase() + ',') != -1) &&
                    ((!evt.source && !oField.sources) || !oField.sources || oField.sources.indexOf(evt.source) != -1))) {
                arDispatch.push(oField);
                var method = oField.method ? oField.method : defaultMethod;
                try {
                    method.apply(this, processedArgs);
                }
                catch (e) {
                    LegacyLogger_1.addLog("Error invoking function registered to events map's method", method);
                }
                if (oField.override) {
                    stop = true;
                }
            }
        }
        if (stop)
            break;
    }
}
exports._dispatchFromMaps = _dispatchFromMaps;


/***/ }),

/***/ "./src/core/Gigya.Js/app/ExternalIntegrations/Facebook.ts":
/*!****************************************************************!*\
  !*** ./src/core/Gigya.Js/app/ExternalIntegrations/Facebook.ts ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var globalEvents = __webpack_require__(/*! src/core/Gigya.Js/app/GlobalEvents */ "./src/core/Gigya.Js/app/GlobalEvents.ts");
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var scriptUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/script */ "./src/core/Gigya.Js/app/Utils/script.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var _waitingForService = [];
exports.isLoggedIn = false;
exports.isConnected = false;
function isLoaded() {
    return exports.initializedTime != null;
}
exports.isLoaded = isLoaded;
function load(noAppID) {
    if (exports.initializedTime)
        return;
    exports.initializedTime = null;
    window.setInterval(function () {
        refreshSession();
    }, 45 * 60 * 1000);
    window['fbAsyncInit'] = function () {
        var oInit = objectUtils.clone(window.gigya.thisScript.globalConf['facebookInitParams']);
        if (!oInit)
            oInit = {};
        if (window.gigya.providersConfig.facebook) {
            oInit.appId = window.gigya.providersConfig.facebook.appID;
            oInit.version = window.gigya.providersConfig.facebook.version;
        }
        else {
            oInit.version = 'v1.0'; // only v1.0 allows init without an appId
        }
        oInit.status = false; // It's better to get login status manually so that we could dispatch the facebookLoaded event only after we have the FB session params.
        oInit.cookie = true;
        oInit.xfbml = true;
        oInit.oauth = true;
        FB.init(oInit);
        if (noAppID != true) {
            FB.getLoginStatus(function (response) {
                exports.initializedTime = new Date();
                exports.isConnected = response.status == 'connected';
                exports.isLoggedIn = response.status != 'unknown';
                globalEvents.dispatch({
                    eventName: 'facebookLoaded',
                    isLoggedIn: exports.isLoggedIn,
                    isConnected: exports.isConnected,
                });
                window.gigya.socialize.addEventHandlers({ listenerType: 'component' }, {
                    listenerDescription: 'listener for updating Facebook Connect session',
                    onLogin: function () {
                        refreshSession();
                    },
                    onConnect: function () {
                        refreshSession();
                    },
                    onLogout: function () {
                        refreshSession();
                    },
                });
            }, true);
        }
        else {
            exports.initializedTime = new Date();
            globalEvents.dispatch({
                eventName: 'facebookLoaded',
                isLoggedIn: exports.isLoggedIn,
                isConnected: exports.isConnected,
            });
        }
    };
    var divFbRoot = document.createElement('div');
    divFbRoot.id = 'fb-root';
    DOMUtils.appendToBody(divFbRoot);
    scriptUtils.load(LocalInfo_1.localInfo.protocol + '://connect.facebook.net/' + window.gigya.thisScript.lang.full.replace('-', '_') + '/sdk.js', null, function () {
        if (document.documentElement.style.display == 'none') {
            // facebook bug (when theres a fb_xd_fragment in the page URL) - Facebook will not load in this scenario.
            document.documentElement.style.display = '';
        }
    }, true);
}
exports.load = load;
function refreshSession() {
    if (typeof FB == 'undefined')
        return;
    var fncCallback = function (response) {
        exports.initializedTime = new Date();
        exports.isConnected = response.status == 'connected';
        exports.isLoggedIn = response.status != 'unknown';
        globalEvents.dispatch({ eventName: 'FBCRefreshed' });
    };
    if (window.gigya.providersConfig.facebook && window.gigya.providersConfig.facebook.appID && FB && FB.getLoginStatus) {
        FB.getLoginStatus(fncCallback, true);
    }
}
exports.refreshSession = refreshSession;
function retryPending() {
    var callbacks = _waitingForService;
    for (var i = 0; i < callbacks.length; i++) {
        callbacks[i]();
    }
    _waitingForService = [];
}
exports.retryPending = retryPending;
function runWhenLoaded(callback) {
    _waitingForService.push(callback);
}
exports.runWhenLoaded = runWhenLoaded;
function getParams() {
    var oTarget = {};
    if (typeof FB != 'undefined' && FB.getAuthResponse) {
        try {
            //FB poor oauth implementation fails sometimes
            var authResponse = FB.getAuthResponse();
            if (authResponse) {
                if (authResponse.userID != null)
                    oTarget['fb_UID'] = authResponse.userID;
                if (authResponse.accessToken != null)
                    oTarget['fb_at'] = authResponse.accessToken;
                if (authResponse.expiresIn != null)
                    oTarget['fb_exp'] = authResponse.expiresIn;
            }
        }
        catch (ex) { }
    }
    return oTarget;
}
exports.getParams = getParams;
function autoLogin() {
    window.gigya.socialize.waitForService({
        service: 'facebook',
        callback: function () {
            window.gigya._.apiAdapter.isSessionValid(window.gigya.thisScript.globalConf, function (isValid) {
                var fbSession = getParams();
                if (!isValid && fbSession && fbSession['fb_at'] && !window.gigya._.autoLoginInProgress) {
                    window.gigya._.autoLoginInProgress = true;
                    window.gigya.socialize.notifyLogin({
                        providerSessions: {
                            facebook: {
                                authToken: fbSession['fb_at'],
                                tokenExpiresIn: fbSession['fb_exp'],
                            },
                        },
                    });
                }
            });
        },
    });
}
exports.autoLogin = autoLogin;


/***/ }),

/***/ "./src/core/Gigya.Js/app/ExternalIntegrations/GooglePlus.ts":
/*!******************************************************************!*\
  !*** ./src/core/Gigya.Js/app/ExternalIntegrations/GooglePlus.ts ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var globalEvents = __webpack_require__(/*! src/core/Gigya.Js/app/GlobalEvents */ "./src/core/Gigya.Js/app/GlobalEvents.ts");
function isLoaded() {
    return exports.initializedTime != null;
}
exports.isLoaded = isLoaded;
function load() {
    var _this = this;
    if (exports.initializedTime)
        return;
    if (!window.gigya.providersConfig.googlePlus)
        return;
    exports.initializedTime = null;
    var po = document.createElement('script');
    po.type = 'text/javascript';
    po.async = true;
    window['__gigya_handleClientLoad'] = function () { return _this.handleClientLoad(); };
    po.src = 'https://apis.google.com/js/client.js?onload=__gigya_handleClientLoad';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(po, s);
}
exports.load = load;
function handleClientLoad() {
    try {
        delete window['__gigya_handleClientLoad'];
    }
    catch (e) {
        window['__gigya_handleClientLoad'] = undefined;
    }
    exports.initializedTime = new Date();
    globalEvents.dispatch({
        eventName: 'googlePlusLoaded',
    });
}
exports.handleClientLoad = handleClientLoad;
function refreshSession() {
    if (typeof gapi == 'undefined')
        return;
}
exports.refreshSession = refreshSession;
function autoLogin() {
    window.gigya.socialize.waitForService({
        service: 'googlePlus',
        callback: function () {
            window.gigya._.apiAdapter.isSessionValid(window.gigya.thisScript.globalConf, function (isValid) {
                if (!isValid) {
                    gapi.auth.authorize({
                        client_id: window.gigya.providersConfig.googlePlus.clientId,
                        scope: window.gigya.providersConfig.googlePlus.scopes,
                        immediate: true,
                        response_type: 'token',
                    }, function (authResult) {
                        if (authResult && authResult.access_token && !window.gigya._.autoLoginInProgress) {
                            window.gigya._.autoLoginInProgress = true;
                            window.gigya.socialize.notifyLogin({
                                providerSessions: {
                                    googlePlus: {
                                        authToken: authResult.access_token,
                                    },
                                },
                            });
                        }
                    });
                }
            });
        },
    });
}
exports.autoLogin = autoLogin;


/***/ }),

/***/ "./src/core/Gigya.Js/app/ExternalIntegrations/Opengraph.ts":
/*!*****************************************************************!*\
  !*** ./src/core/Gigya.Js/app/ExternalIntegrations/Opengraph.ts ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Opengraph utils
Object.defineProperty(exports, "__esModule", { value: true });
function getMetaTag(ogTagName) {
    var metas = document.getElementsByTagName('meta');
    for (var i = 0; i < metas.length; i++) {
        if (metas[i].getAttribute('property') == ogTagName && metas[i].getAttribute('content')) {
            return metas[i].getAttribute('content');
        }
    }
}
exports.getMetaTag = getMetaTag;


/***/ }),

/***/ "./src/core/Gigya.Js/app/GSErrors.ts":
/*!*******************************************!*\
  !*** ./src/core/Gigya.Js/app/GSErrors.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var GSErrors;
(function (GSErrors) {
    GSErrors[GSErrors["OK"] = 0] = "OK";
    GSErrors[GSErrors["Data_Pending"] = 100001] = "Data_Pending";
    GSErrors[GSErrors["NETWORK_ERROR"] = 500026] = "NETWORK_ERROR";
    GSErrors[GSErrors["DATA_PENDING"] = 100001] = "DATA_PENDING";
    GSErrors[GSErrors["OPERATION_CANCELED"] = 200001] = "OPERATION_CANCELED";
    GSErrors[GSErrors["PERMISSION_GRANTED"] = 200002] = "PERMISSION_GRANTED";
    GSErrors[GSErrors["PERMISSION_NOT_GRANTED"] = 200003] = "PERMISSION_NOT_GRANTED";
    GSErrors[GSErrors["REDIRECT"] = 200004] = "REDIRECT";
    GSErrors[GSErrors["NEW_USER"] = 200005] = "NEW_USER";
    GSErrors[GSErrors["OPERATION_DONE"] = 200006] = "OPERATION_DONE";
    GSErrors[GSErrors["UPDATE_USER"] = 200007] = "UPDATE_USER";
    GSErrors[GSErrors["OK_WITH_ERRORS"] = 200008] = "OK_WITH_ERRORS";
    GSErrors[GSErrors["ACCOUNTS_LINKED"] = 200009] = "ACCOUNTS_LINKED";
    GSErrors[GSErrors["OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS"] = 200010] = "OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS";
    GSErrors[GSErrors["ACCOUNT_PENDING_REGISTRATION"] = 206001] = "ACCOUNT_PENDING_REGISTRATION";
    GSErrors[GSErrors["ACCOUNT_PENDING_VERIFICATION"] = 206002] = "ACCOUNT_PENDING_VERIFICATION";
    GSErrors[GSErrors["ACCOUNT_MISSING_LOGINID"] = 206003] = "ACCOUNT_MISSING_LOGINID";
    GSErrors[GSErrors["IDENTITY_ALREADY_ASSIGNED"] = 206004] = "IDENTITY_ALREADY_ASSIGNED";
    GSErrors[GSErrors["AFTER_EMAIL_VERIFICATION"] = 206005] = "AFTER_EMAIL_VERIFICATION";
    GSErrors[GSErrors["PENDING_CODE_VERIFICATION"] = 206006] = "PENDING_CODE_VERIFICATION";
    GSErrors[GSErrors["CLIENT_LOG"] = 300001] = "CLIENT_LOG";
    GSErrors[GSErrors["INVALID_DATA_CENTER"] = 301001] = "INVALID_DATA_CENTER";
    GSErrors[GSErrors["INVALID_REQUEST_FORMAT"] = 400001] = "INVALID_REQUEST_FORMAT";
    GSErrors[GSErrors["MISSING_REQUIRED_PARAMETER"] = 400002] = "MISSING_REQUIRED_PARAMETER";
    GSErrors[GSErrors["UNIQUE_IDENTIFIER_EXISTS"] = 400003] = "UNIQUE_IDENTIFIER_EXISTS";
    GSErrors[GSErrors["INVALID_PARAMETER_FORMAT"] = 400004] = "INVALID_PARAMETER_FORMAT";
    GSErrors[GSErrors["INVALID_PARAMETER_VALUE"] = 400006] = "INVALID_PARAMETER_VALUE";
    GSErrors[GSErrors["DUPLICATE_VALUE"] = 400007] = "DUPLICATE_VALUE";
    GSErrors[GSErrors["INVALID_AUTHENTICATION_HEADER"] = 400008] = "INVALID_AUTHENTICATION_HEADER";
    GSErrors[GSErrors["VALIDATION_ERROR"] = 400009] = "VALIDATION_ERROR";
    GSErrors[GSErrors["INVALID_REDIRECT_URI"] = 400011] = "INVALID_REDIRECT_URI";
    GSErrors[GSErrors["INVALID_RESPONSE_TYPE"] = 400012] = "INVALID_RESPONSE_TYPE";
    GSErrors[GSErrors["UNSUPPORTED_GRANT_TYPE"] = 400013] = "UNSUPPORTED_GRANT_TYPE";
    GSErrors[GSErrors["INVALID_GRANT"] = 400014] = "INVALID_GRANT";
    GSErrors[GSErrors["CODE_EXPIRED"] = 400015] = "CODE_EXPIRED";
    GSErrors[GSErrors["SCHEMA_VALIDATION_FAILED"] = 400020] = "SCHEMA_VALIDATION_FAILED";
    GSErrors[GSErrors["CAPTCHA_VERIFICATION_FAILED"] = 400021] = "CAPTCHA_VERIFICATION_FAILED";
    GSErrors[GSErrors["UNIQUE_INDEX_VALIDATION_ERROR"] = 400022] = "UNIQUE_INDEX_VALIDATION_ERROR";
    GSErrors[GSErrors["INVALID_TYPE_VALIDATION_ERROR"] = 400023] = "INVALID_TYPE_VALIDATION_ERROR";
    GSErrors[GSErrors["DYNAMIC_FIELDS_VALIDATION_ERROR"] = 400024] = "DYNAMIC_FIELDS_VALIDATION_ERROR";
    GSErrors[GSErrors["WRITE_ACCESS_VALIDATION_ERROR"] = 400025] = "WRITE_ACCESS_VALIDATION_ERROR";
    GSErrors[GSErrors["INVALID_FORMAT_VALIDATION_ERROR"] = 400026] = "INVALID_FORMAT_VALIDATION_ERROR";
    GSErrors[GSErrors["REQUIRED_VALUE_VALIDATION_ERROR"] = 400027] = "REQUIRED_VALUE_VALIDATION_ERROR";
    GSErrors[GSErrors["EMAIL_NOT_VERIFIED"] = 400028] = "EMAIL_NOT_VERIFIED";
    GSErrors[GSErrors["SCHEMA_CONFLICT_ERROR"] = 400029] = "SCHEMA_CONFLICT_ERROR";
    GSErrors[GSErrors["OPERATION_NOT_ALLOWED"] = 400030] = "OPERATION_NOT_ALLOWED";
    GSErrors[GSErrors["SECURITY_VERIFICATION_FAILED"] = 400050] = "SECURITY_VERIFICATION_FAILED";
    GSErrors[GSErrors["INVALID_APIKEY_PARAMETER"] = 400093] = "INVALID_APIKEY_PARAMETER";
    GSErrors[GSErrors["NOT_SUPPORTED"] = 400096] = "NOT_SUPPORTED";
    GSErrors[GSErrors["UNSUPPORTED_USER_AGENT"] = 400097] = "UNSUPPORTED_USER_AGENT";
    GSErrors[GSErrors["NO_PROVIDERS"] = 400100] = "NO_PROVIDERS";
    GSErrors[GSErrors["POPUP_BLOCKED"] = 400101] = "POPUP_BLOCKED";
    GSErrors[GSErrors["INVALID_EVENT_HANDLER"] = 400102] = "INVALID_EVENT_HANDLER";
    GSErrors[GSErrors["INVALID_CONTAINERID"] = 400103] = "INVALID_CONTAINERID";
    GSErrors[GSErrors["NOT_CONNECTED"] = 400106] = "NOT_CONNECTED";
    GSErrors[GSErrors["INVALID_SITE_DOMAIN"] = 400120] = "INVALID_SITE_DOMAIN";
    GSErrors[GSErrors["PROVIDER_CONFIGURATION_ERROR"] = 400122] = "PROVIDER_CONFIGURATION_ERROR";
    GSErrors[GSErrors["LIMIT_REACHED"] = 400124] = "LIMIT_REACHED";
    GSErrors[GSErrors["FREQUENCY_LIMIT_REACHED"] = 400125] = "FREQUENCY_LIMIT_REACHED";
    GSErrors[GSErrors["INVALID_ACTION"] = 400126] = "INVALID_ACTION";
    GSErrors[GSErrors["INSUFFICIENT_POINTS_TO_REDEEM"] = 400127] = "INSUFFICIENT_POINTS_TO_REDEEM";
    GSErrors[GSErrors["SIGNATURE_TIMESTAMP_EXPIRED"] = 400128] = "SIGNATURE_TIMESTAMP_EXPIRED";
    GSErrors[GSErrors["INVALID_POLICY_CONFIGURATION"] = 401000] = "INVALID_POLICY_CONFIGURATION";
    GSErrors[GSErrors["SUSPECTED_SPAM"] = 401010] = "SUSPECTED_SPAM";
    GSErrors[GSErrors["LOGIN_FAILED_CAPTCHA_REQUIRED"] = 401020] = "LOGIN_FAILED_CAPTCHA_REQUIRED";
    GSErrors[GSErrors["LOGIN_FAILED_WRONG_CAPTCHA"] = 401021] = "LOGIN_FAILED_WRONG_CAPTCHA";
    GSErrors[GSErrors["OLD_PASSWORD_USED"] = 401030] = "OLD_PASSWORD_USED";
    GSErrors[GSErrors["FORBIDDEN"] = 403000] = "FORBIDDEN";
    GSErrors[GSErrors["INVALID_SESSION_TOKEN"] = 403001] = "INVALID_SESSION_TOKEN";
    GSErrors[GSErrors["REQUEST_HAS_EXPIRED"] = 403002] = "REQUEST_HAS_EXPIRED";
    GSErrors[GSErrors["INVALID_REQUEST_SIGNATURE"] = 403003] = "INVALID_REQUEST_SIGNATURE";
    GSErrors[GSErrors["DUPLICATE_NONCE"] = 403004] = "DUPLICATE_NONCE";
    GSErrors[GSErrors["UNAUTHORIZED_USER"] = 403005] = "UNAUTHORIZED_USER";
    GSErrors[GSErrors["SENSITIVE_DATA_SENT_OVER_HTTP"] = 403006] = "SENSITIVE_DATA_SENT_OVER_HTTP";
    GSErrors[GSErrors["PERMISSION_DENIED"] = 403007] = "PERMISSION_DENIED";
    GSErrors[GSErrors["INVALID_OPENID_URL"] = 403008] = "INVALID_OPENID_URL";
    GSErrors[GSErrors["PROVIDER_SESSION_EXPIRED"] = 403009] = "PROVIDER_SESSION_EXPIRED";
    GSErrors[GSErrors["INVALID_SECRET"] = 403010] = "INVALID_SECRET";
    GSErrors[GSErrors["SESSION_HAS_EXPIRED"] = 403011] = "SESSION_HAS_EXPIRED";
    GSErrors[GSErrors["NO_VALID_SESSION"] = 403012] = "NO_VALID_SESSION";
    GSErrors[GSErrors["UNVERIFIED_USER"] = 403013] = "UNVERIFIED_USER";
    GSErrors[GSErrors["MISSING_REQUEST_REFERRER"] = 403015] = "MISSING_REQUEST_REFERRER";
    GSErrors[GSErrors["UNEXPECTED_PROVIDER_USER"] = 403017] = "UNEXPECTED_PROVIDER_USER";
    GSErrors[GSErrors["PERMISSION_NOT_REQUESTED"] = 403022] = "PERMISSION_NOT_REQUESTED";
    GSErrors[GSErrors["NO_USER_PERMISSION"] = 403023] = "NO_USER_PERMISSION";
    GSErrors[GSErrors["PROVIDER_LIMIT_REACHED"] = 403024] = "PROVIDER_LIMIT_REACHED";
    GSErrors[GSErrors["INVALID_TOKEN"] = 403025] = "INVALID_TOKEN";
    GSErrors[GSErrors["UNAUTHORIZED_ACCESS_ERROR"] = 403026] = "UNAUTHORIZED_ACCESS_ERROR";
    GSErrors[GSErrors["DIFFERENT_USER_FOR_REAUTH"] = 403027] = "DIFFERENT_USER_FOR_REAUTH";
    GSErrors[GSErrors["SESSION_EXPIRED_RETRY"] = 403030] = "SESSION_EXPIRED_RETRY";
    GSErrors[GSErrors["APPROVED_BY_MODERATOR"] = 403031] = "APPROVED_BY_MODERATOR";
    GSErrors[GSErrors["TOKEN_HAS_RENEWED"] = 403032] = "TOKEN_HAS_RENEWED";
    GSErrors[GSErrors["NO_USER_COOKIE"] = 403035] = "NO_USER_COOKIE";
    GSErrors[GSErrors["UNAUTHORIZED_PARTNER"] = 403036] = "UNAUTHORIZED_PARTNER";
    GSErrors[GSErrors["POST_DENIED"] = 403037] = "POST_DENIED";
    GSErrors[GSErrors["NO_LOGIN_TICKET"] = 403040] = "NO_LOGIN_TICKET";
    GSErrors[GSErrors["ACCOUNT_DISABLED"] = 403041] = "ACCOUNT_DISABLED";
    GSErrors[GSErrors["INVALID_LOGINID"] = 403042] = "INVALID_LOGINID";
    GSErrors[GSErrors["LOGIN_IDENTIFIER_EXISTS"] = 403043] = "LOGIN_IDENTIFIER_EXISTS";
    GSErrors[GSErrors["UNDERAGE_USER"] = 403044] = "UNDERAGE_USER";
    GSErrors[GSErrors["INVALID_SITE_CONFIGURATION_ERROR"] = 403045] = "INVALID_SITE_CONFIGURATION_ERROR";
    GSErrors[GSErrors["LOGINID_DOES_NOT_EXIST"] = 403047] = "LOGINID_DOES_NOT_EXIST";
    GSErrors[GSErrors["API_RATE_LIMIT_EXCEEDED"] = 403048] = "API_RATE_LIMIT_EXCEEDED";
    GSErrors[GSErrors["PENDING_PASSWORD_CHANGE"] = 403100] = "PENDING_PASSWORD_CHANGE";
    GSErrors[GSErrors["ACCOUNT_PENDING_TFA_VERIFICATION"] = 403101] = "ACCOUNT_PENDING_TFA_VERIFICATION";
    GSErrors[GSErrors["ACCOUNT_PENDING_TFA_REGISTRATION"] = 403102] = "ACCOUNT_PENDING_TFA_REGISTRATION";
    GSErrors[GSErrors["ACCOUNT_PENDING_RECENT_LOGIN"] = 403110] = "ACCOUNT_PENDING_RECENT_LOGIN";
    GSErrors[GSErrors["ACCOUNT_TEMPORARILY_LOCKED_OUT"] = 403120] = "ACCOUNT_TEMPORARILY_LOCKED_OUT";
    GSErrors[GSErrors["REDUNDANT_OPERATION"] = 403200] = "REDUNDANT_OPERATION";
    GSErrors[GSErrors["INVALID_APPLICATION_ID"] = 403201] = "INVALID_APPLICATION_ID";
    GSErrors[GSErrors["NOT_FOUND"] = 404000] = "NOT_FOUND";
    GSErrors[GSErrors["FRIEND_NOT_FOUND"] = 404001] = "FRIEND_NOT_FOUND";
    GSErrors[GSErrors["CATEGORY_NOT_FOUND"] = 404002] = "CATEGORY_NOT_FOUND";
    GSErrors[GSErrors["UID_NOT_FOUND"] = 404003] = "UID_NOT_FOUND";
    GSErrors[GSErrors["RESOURCE_NOT_FOUND"] = 404004] = "RESOURCE_NOT_FOUND";
    GSErrors[GSErrors["INVALID_API_METHOD"] = 405001] = "INVALID_API_METHOD";
    GSErrors[GSErrors["IDENTITY_EXISTS"] = 409001] = "IDENTITY_EXISTS";
    GSErrors[GSErrors["GONE"] = 410000] = "GONE";
    GSErrors[GSErrors["REQUEST_ENTITY_TOO_LARGE"] = 413001] = "REQUEST_ENTITY_TOO_LARGE";
    GSErrors[GSErrors["COMMENT_TEXT_TOO_LARGE"] = 413002] = "COMMENT_TEXT_TOO_LARGE";
    GSErrors[GSErrors["OBJECT_TOO_LARGE"] = 413003] = "OBJECT_TOO_LARGE";
    GSErrors[GSErrors["PROFILE_PHOTO_TOO_LARGE"] = 413004] = "PROFILE_PHOTO_TOO_LARGE";
    GSErrors[GSErrors["REQUEST_URI_TOO_LONG"] = 414000] = "REQUEST_URI_TOO_LONG";
    GSErrors[GSErrors["MISSING_USER_PHOTO"] = 409010] = "MISSING_USER_PHOTO";
    GSErrors[GSErrors["COUNTER_NOT_REGISTERED"] = 409011] = "COUNTER_NOT_REGISTERED";
    GSErrors[GSErrors["INVALID_GMID_TICKET"] = 409012] = "INVALID_GMID_TICKET";
    GSErrors[GSErrors["SAML_MAPPED_ATTRIBUTE_NOT_FOUND"] = 409013] = "SAML_MAPPED_ATTRIBUTE_NOT_FOUND";
    GSErrors[GSErrors["SAML_CERTIFICATE_NOT_FOUND"] = 409014] = "SAML_CERTIFICATE_NOT_FOUND";
    GSErrors[GSErrors["SAML_MESSAGE_NOT_FOUND"] = 409015] = "SAML_MESSAGE_NOT_FOUND";
    GSErrors[GSErrors["GENERAL_SERVER_ERROR"] = 500001] = "GENERAL_SERVER_ERROR";
    GSErrors[GSErrors["SERVER_LOGIN_ERROR"] = 500002] = "SERVER_LOGIN_ERROR";
    GSErrors[GSErrors["DEFAULT_APPLICATION_CONFIGURATION_ERROR"] = 500003] = "DEFAULT_APPLICATION_CONFIGURATION_ERROR";
    GSErrors[GSErrors["SESSION_MIGRATION_ERROR"] = 500014] = "SESSION_MIGRATION_ERROR";
    GSErrors[GSErrors["PROVIDER_ERROR"] = 500023] = "PROVIDER_ERROR";
    GSErrors[GSErrors["DATABASE_ERROR"] = 500028] = "DATABASE_ERROR";
    GSErrors[GSErrors["USERNAME_REQUIRED"] = 500029] = "USERNAME_REQUIRED";
    GSErrors[GSErrors["NO_PROVIDER_APPLICATION"] = 500031] = "NO_PROVIDER_APPLICATION";
    GSErrors[GSErrors["LOAD_FAILED"] = 500032] = "LOAD_FAILED";
    GSErrors[GSErrors["INVALID_ENVIRONMENT_CONFIG"] = 500033] = "INVALID_ENVIRONMENT_CONFIG";
    GSErrors[GSErrors["ERROR_DURING_BACKEND_OPERATION"] = 500034] = "ERROR_DURING_BACKEND_OPERATION";
    GSErrors[GSErrors["TIMEOUT"] = 504001] = "TIMEOUT";
    GSErrors[GSErrors["CLIENTTIMEOUT"] = 504002] = "CLIENTTIMEOUT";
    GSErrors[GSErrors["INVALID_URL"] = 404004] = "INVALID_URL";
    GSErrors[GSErrors["MEDIA_ITEMS_NOT_SUPPORTED"] = 401001] = "MEDIA_ITEMS_NOT_SUPPORTED";
    GSErrors[GSErrors["MISSING_ERROR_CODE"] = 599999] = "MISSING_ERROR_CODE";
})(GSErrors = exports.GSErrors || (exports.GSErrors = {}));
var GSErrorDetails;
(function (GSErrorDetails) {
    GSErrorDetails[GSErrorDetails["None"] = 0] = "None";
    GSErrorDetails[GSErrorDetails["Same_password"] = 100001] = "Same_password";
    GSErrorDetails[GSErrorDetails["Invalid_password"] = 100002] = "Invalid_password";
    GSErrorDetails[GSErrorDetails["Invalid_counters_query_with_cursor"] = 100003] = "Invalid_counters_query_with_cursor";
})(GSErrorDetails = exports.GSErrorDetails || (exports.GSErrorDetails = {}));


/***/ }),

/***/ "./src/core/Gigya.Js/app/GigyaGlobals.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/GigyaGlobals.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var ES6Promise = __webpack_require__(/*! es6-promise */ "./node_modules/es6-promise/dist/es6-promise.js");
__webpack_provided_Object_dot_assign(window.gigya, { Promise: ES6Promise });

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/core/Gigya.Js/app/GlobalEvents.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/GlobalEvents.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var arrayUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/array */ "./src/core/Gigya.Js/app/Utils/array.ts");
var LegacyLogger_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LegacyLogger */ "./src/core/Gigya.Js/app/LegacyLogger.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var InternalFlows_1 = __webpack_require__(/*! src/core/Gigya.Js/app/InternalFlows */ "./src/core/Gigya.Js/app/InternalFlows.ts");
var events = __webpack_require__(/*! src/core/Gigya.Js/app/Events */ "./src/core/Gigya.Js/app/Events.ts");
function getEventHandlerName(eventName) {
    if (eventName.substring(0, 2) === 'on') {
        return eventName;
    }
    else {
        return 'on' + eventName.substring(0, 1).toUpperCase() + eventName.substring(1);
    }
}
var _eventHandlers = {};
var _pendingEvents = {};
exports._activeNamespaces = {};
function add(eventName, eventHandler, type, context, namespace, params) {
    if (type === void 0) { type = 'other'; }
    if (namespace === void 0) { namespace = 'socialize'; }
    var fullEventName = namespace + '_' + getEventHandlerName(eventName);
    if (!_eventHandlers[fullEventName]) {
        _eventHandlers[fullEventName] = [];
    }
    var registeredHandler = {
        handler: eventHandler,
        type: type,
        context: context,
        params: params,
        fullEventName: fullEventName,
    };
    _eventHandlers[fullEventName].push(registeredHandler);
    if (!this._activeNamespaces[namespace] && window.gigya._.apiAdapter) {
        window.gigya._.apiAdapter.registerForNamespaceEvents(namespace);
    }
    this._activeNamespaces[namespace] = 1;
    var pendingEvents = _pendingEvents[fullEventName];
    if (pendingEvents && type == 'other') {
        _pendingEvents[fullEventName] = [];
        for (var i = 0; i < pendingEvents.length; i++) {
            var e = pendingEvents[i];
            dispatchRegisteredHandlers(e.eventObj, e.params, e.preProcess);
        }
    }
    return registeredHandler;
}
exports.add = add;
function remove(fullEventName, registeredHandler) {
    if (_eventHandlers[fullEventName]) {
        arrayUtils.removeByValue(_eventHandlers[fullEventName], registeredHandler);
    }
}
exports.remove = remove;
function dispatch(eventObj, params) {
    var dispatched = 0;
    var isInternal = eventObj.isInternal; //internal event should be dispatched to widgets/components only.
    var eventNameArr = eventObj['eventName'].split(',');
    LegacyLogger_1.addLog('Dispatching global event "' + eventObj['eventName'] + '" with this event object', eventObj);
    for (var i = 0; i < eventNameArr.length; i++) {
        var eventNameSegs = eventNameArr[i].split('.');
        var namespace = eventNameSegs.length > 1 ? eventNameSegs.shift() : 'socialize';
        var eventName = eventNameSegs[0];
        var eventHandlerName = getEventHandlerName(eventName);
        var fullEventName = namespace + '_' + eventHandlerName;
        var eventHandlers = objectUtils.clone(_eventHandlers[fullEventName]) || [];
        var baseEventObj = objectUtils.clone(eventObj);
        baseEventObj['isGlobal'] = true;
        baseEventObj.eventName = eventName;
        baseEventObj.fullEventName = eventNameArr[i];
        if (params) {
            if (params.source)
                baseEventObj.source = params.source;
            if (params.sourceData)
                baseEventObj.sourceData = params.sourceData;
            if (params.context)
                baseEventObj.context = params.context;
        }
        var ListenerTypes = ['component'];
        if (!isInternal)
            ListenerTypes.push('other');
        for (var iListenerType = 0; iListenerType < ListenerTypes.length; iListenerType++) {
            var listenerType = ListenerTypes[iListenerType];
            for (var iHandler = 0; iHandler < eventHandlers.length; iHandler++) {
                var oHandler = eventHandlers[iHandler]; //{type: 'other', handler:function, context: object}
                if (oHandler.type == listenerType) {
                    var eventObjCopy = objectUtils.clone(baseEventObj);
                    if (!eventObjCopy['context'] && oHandler.context) {
                        eventObjCopy['context'] = oHandler['context'];
                    }
                    if (!eventObjCopy['context']) {
                        delete eventObjCopy['context'];
                    }
                    //context is now taken from the call that dispatched the event
                    if (listenerType !== 'component') {
                        dispatched++;
                        InternalFlows_1.handleSpecialFields(eventObjCopy); // Make sure returned fields such as friends are returned as collections.
                    }
                    // Feature #34522
                    if (oHandler.params && oHandler.params['signKey']) {
                        eventObjCopy['UIDSignature'] = eventObj['signKeysUIDSignature'][oHandler.params['signKey']];
                        delete eventObjCopy['signKeysUIDSignature'];
                    }
                    try {
                        oHandler.handler(eventObjCopy);
                    }
                    catch (ex) {
                        LegacyLogger_1.addLog('Error while trying to invoke "' + eventObj['eventName'] + '" global event handler', ex);
                    }
                }
            }
        }
        if (!isInternal) {
            events._dispatchFromMaps(baseEventObj, true);
        }
        var GenesisExchange_Gigya = window['GenesisExchange_Gigya'];
        var gigya_omniture_conf = window['gigya_omniture_conf'];
        var myOmnitureIntegrationFunc = window['myOmnitureIntegrationFunc'];
        if (!isInternal && typeof GenesisExchange_Gigya != 'undefined' && typeof gigya_omniture_conf != 'undefined' && namespace == 'socialize') {
            var ge = new GenesisExchange_Gigya(gigya_omniture_conf);
            ge.processAction(baseEventObj);
            if (typeof myOmnitureIntegrationFunc != 'undefined') {
                myOmnitureIntegrationFunc(gigya_omniture_conf, baseEventObj);
            }
        }
    }
    return dispatched;
}
exports.dispatch = dispatch;
function dispatchWhenHandlerAdded(eventObj, params, preProcess) {
    if (params === void 0) { params = {}; }
    var eventNameSegs = eventObj['eventName'].split('.');
    var namespace = eventNameSegs.length > 1 ? eventNameSegs.shift() : 'socialize';
    var eventName = eventNameSegs[0];
    dispatchRegisteredHandlers(eventObj, params, preProcess, function (dispatched) {
        // If no handlers were dispatched, we need to wait for the handler to be added
        if (dispatched == 0) {
            var eventHandlerName = 'on' + eventName.substring(0, 1).toUpperCase() + eventName.substring(1);
            var fullEventName = namespace + '_' + eventHandlerName;
            if (!_pendingEvents[fullEventName])
                _pendingEvents[fullEventName] = [];
            _pendingEvents[fullEventName].push({ eventObj: eventObj, params: params, preProcess: preProcess });
        }
    });
}
exports.dispatchWhenHandlerAdded = dispatchWhenHandlerAdded;
function dispatchRegisteredHandlers(eventObj, params, preProcess, callback) {
    var fnDispatch = function (e) {
        var dispatched = 0;
        if (!e['cancel']) {
            dispatched = dispatch(e, params);
        }
        if (callback) {
            callback(dispatched);
        }
    };
    if (preProcess) {
        preProcess(eventObj, fnDispatch);
    }
    else {
        fnDispatch(eventObj);
    }
}
function getEventsForOperation(operation) {
    var activeLoginEvents = [];
    if (operation.toLowerCase().indexOf('login') != -1) {
        if (this._activeNamespaces.socialize)
            activeLoginEvents.push('socialize.login');
        if (this._activeNamespaces.accounts)
            activeLoginEvents.push('accounts.login');
    }
    else if (operation.toLowerCase().indexOf('addconnection') != -1) {
        if (this._activeNamespaces.socialize)
            activeLoginEvents.push('socialize.connectionAdded');
    }
    return activeLoginEvents.join(',');
}
exports.getEventsForOperation = getEventsForOperation;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Interfaces.ts":
/*!*********************************************!*\
  !*** ./src/core/Gigya.Js/app/Interfaces.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });


/***/ }),

/***/ "./src/core/Gigya.Js/app/InternalFlows.ts":
/*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/InternalFlows.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var localStorageUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/localStorage */ "./src/core/Gigya.Js/app/Utils/localStorage.ts");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var URLUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var MessagingMethod;
(function (MessagingMethod) {
    MessagingMethod[MessagingMethod["LocalStorageListener"] = 0] = "LocalStorageListener";
    MessagingMethod[MessagingMethod["PostMessage"] = 1] = "PostMessage";
    MessagingMethod[MessagingMethod["Flash"] = 2] = "Flash";
})(MessagingMethod = exports.MessagingMethod || (exports.MessagingMethod = {}));
function checkCompleteRegistration(res, params, methodName, callback) {
    var screenSet;
    var retry;
    var pending = false;
    if (res['errorCode'] == GSErrors_1.GSErrors.AFTER_EMAIL_VERIFICATION) {
        // Handle autoLogin from registration link
        window.gigya.logger.info('finalizing registration after email verification');
        pending = true;
        window.gigya.accounts.finalizeRegistration({
            regToken: res['regToken'],
            ignoreApiQueue: true,
            callback: callback,
        });
    }
    else if (!params['ignoreInterruptions'] &&
        !params['dontHandleScreenSet'] &&
        (((res['regToken'] || params['regToken']) && // has regToken
            (res['errorCode'] == GSErrors_1.GSErrors.OK_WITH_ERROR_LOGIN_IDENTIFIER_EXISTS || // socialLogin/setAccountInfo saved with loginID exist error
                res['errorCode'] == GSErrors_1.GSErrors.LOGIN_IDENTIFIER_EXISTS)) || // loginID exists
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_REGISTRATION || // pending registration
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_VERIFICATION || // pending email verification
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_MISSING_LOGINID || // pending LoginID
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_TFA_VERIFICATION || // pending TFA verification
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_TFA_REGISTRATION || // pending TFA registration
            res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_RECENT_LOGIN || // pending recent login
            res['errorCode'] == GSErrors_1.GSErrors.PENDING_PASSWORD_CHANGE) // pending password change
    ) {
        var newModal;
        if (res['errorCode'] == GSErrors_1.GSErrors.ACCOUNT_PENDING_RECENT_LOGIN) {
            retry = true;
            newModal = true;
        }
        if (params['defaultMobileRegScreenSet'] && LocalInfo_1.localInfo.isMobile) {
            screenSet = params['defaultMobileRegScreenSet'];
        }
        else if (params['defaultRegScreenSet']) {
            screenSet = params['defaultRegScreenSet'];
        }
    }
    if (screenSet) {
        window.gigya.logger.info("showing screenset '" + screenSet + "' for errorCode " + res['errorCode']);
        window.gigya.logger.group(screenSet);
        window.gigya.accounts.showScreenSet({
            ignoreApiQueue: true,
            newModal: newModal,
            screenSet: screenSet,
            initialMethod: methodName,
            initialResponse: res,
            suppressLoginEvent: params['suppressLoginEvent'],
            onError: function (e) {
                callback(res);
            },
            onHide: function (e) {
                window.gigya.logger.groupEnd(screenSet);
                if (e.reason === 'finished' && e.user) {
                    var successResponse = {
                        errorCode: 0,
                        userInfo: e.user,
                        source: e.source
                    };
                    callback(successResponse, true, retry);
                }
                else {
                    callback(res);
                }
            },
        });
    }
    else if (!pending) {
        callback(res);
    }
}
exports.checkCompleteRegistration = checkCompleteRegistration;
function getGigyaSettings(group) {
    var gigyaSettings = localStorageUtils.getObject('gigyaSettings');
    return JSONUtils.serialize(gigyaSettings[group]);
}
exports.getGigyaSettings = getGigyaSettings;
function setGigyaSettings(group, settings) {
    var _a;
    var gigyaSettings = localStorageUtils.getObject('gigyaSettings', (_a = {}, _a[group] = {}, _a));
    for (var p in settings) {
        gigyaSettings[group][p] = settings[p];
    }
    localStorageUtils.setItem('gigyaSettings', JSONUtils.serialize(gigyaSettings));
}
exports.setGigyaSettings = setGigyaSettings;
function delGigyaSettings(group) {
    if (!group) {
        localStorageUtils.removeItem('gigyaSettings');
    }
    else {
        var gigyaSettings = localStorageUtils.getObject('gigyaSettings');
        if (gigyaSettings) {
            delete gigyaSettings[group];
            localStorageUtils.setItem('gigyaSettings', JSONUtils.serialize(gigyaSettings));
        }
    }
}
exports.delGigyaSettings = delGigyaSettings;
function handleSpecialFields(o) {
    var collection = window.gigya.socialize.Collection;
    var toTyped = function (arr, ctor) {
        var oarr = [];
        var i = 0;
        var el = arr[i];
        while (el) {
            oarr.push(new ctor(el));
            if (oarr[i].identities) {
                convertIdentitiesArrayToObject(oarr[i]);
            }
            el = arr[++i];
        }
        return oarr;
    };
    if (o.photos)
        o.photos = new collection(o.photos, 'photoID');
    if (o.albums)
        o.albums = new collection(o.albums, 'albumID');
    if (o.contacts)
        o.contacts = new collection(toTyped(o.contacts, window.gigya.socialize.Contact), 'email');
    if (o.friend)
        o.friend = new collection(toTyped(o.friend, window.gigya.socialize.Friend), 'UID');
    if (o.user)
        o.user = new window.gigya.socialize.User(o.user);
    if (o.friends && o.friends instanceof Array) {
        var arUIDs = [];
        for (var i = 0; i < o.friends.length; i++) {
            arUIDs.push(o.friends[i].UID);
        }
        o.UIDs = arUIDs.join(',');
        o.friends = new collection(toTyped(o.friends, window.gigya.socialize.Friend), 'UID');
    }
}
exports.handleSpecialFields = handleSpecialFields;
function convertIdentitiesArrayToObject(o) {
    if (o.identities == null) {
        o.identities = {};
        return;
    }
    if (o.identities.constructor != Array) {
        return;
    }
    var identitiesArray = o.identities;
    o.identities = {};
    for (var i = 0; i < identitiesArray.length; i++) {
        o.identities[identitiesArray[i].provider] = new window.gigya.socialize.Identity(identitiesArray[i]);
    }
}
exports.convertIdentitiesArrayToObject = convertIdentitiesArrayToObject;
function addUserInfoToEvent(response, targetObject, addLoginProperties, useBasePhotoURL) {
    var oUser = response['user'] || response['userInfo'];
    if (targetObject == null)
        targetObject = {};
    if (oUser != null) {
        targetObject['user'] = objectUtils.clone(oUser);
        if (response['isLoggedIn'] != null)
            targetObject['user']['isLoggedIn'] = response['isLoggedIn'];
        if (response['isSiteUID'] != null)
            targetObject['user']['isSiteUID'] = response['isSiteUID'];
        if (response['iRank'] != null)
            targetObject['user']['iRank'] = response['iRank'];
    }
    if (addLoginProperties) {
        objectUtils.extractProperties(response, targetObject, 'signature|UIDSig|timestamp|UIDSignature|signatureTimestamp|UID|signKeysUIDSignature|dataCenter|id_token');
        if (targetObject['user'] != null) {
            targetObject['UID'] = oUser.UID;
            targetObject['isSiteUID'] = oUser.isSiteUID;
            // isSiteUID is temporary for https://gigya.my.salesforce.com/5004000000T3qcZ
        }
    }
    return targetObject;
}
exports.addUserInfoToEvent = addUserInfoToEvent;
function sendEmailNative(params) {
    var userAction = params['userAction'] || {};
    var subject = userAction['title'] || '';
    var body = userAction['linkBack'] || '';
    document.location.href = 'mailto:?to=&subject=' + URLUtils.URLEncode(subject) + '&body=' + URLUtils.URLEncode(body);
    window.gigya.socialize.sendEmail(params, { dontSendEmail: true }); // To report that send without sending it
}
exports.sendEmailNative = sendEmailNative;


/***/ }),

/***/ "./src/core/Gigya.Js/app/LegacyLogger.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/LegacyLogger.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var cookieUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/cookie */ "./src/core/Gigya.Js/app/Utils/cookie.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var arrayUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/array */ "./src/core/Gigya.Js/app/Utils/array.ts");
var scriptUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/script */ "./src/core/Gigya.Js/app/Utils/script.ts");
var cdn_1 = __webpack_require__(/*! src/core/Gigya.Js/app/cdn */ "./src/core/Gigya.Js/app/cdn.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
var LocalInfo_1 = __webpack_require__(/*! ./LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
exports.CONSOLE_LOG_LEVELS = ['debug', 'info', 'log', 'warn', 'error'];
exports.selectedConsoleLogLevels = [];
exports._log = [];
function enable() {
    cookieUtils.set('_gig_dbgConsole_log', '1', null);
}
exports.enable = enable;
function disable() {
    cookieUtils.set('_gig_dbgConsole_log', '0', null);
}
exports.disable = disable;
function _isEnabled() {
    var isManuallyEnabled = !LocalInfo_1.localInfo.isNativeMobileApp && cookieUtils.get('_gig_dbgConsole_log');
    if (typeof isManuallyEnabled !== 'undefined' && isManuallyEnabled != null) {
        return isManuallyEnabled === '1';
    }
    return exports.selectedConsoleLogLevels.length > 0;
}
exports._isEnabled = _isEnabled;
function addLog(title, obj, writeToConsole) {
    if (writeToConsole === void 0) { writeToConsole = false; }
    if (_isEnabled() || writeToConsole) {
        var sLog = title;
        obj = objectUtils.clone(obj, true, false, 4, null, true);
        if (obj != null)
            sLog += ':' + (typeof obj == 'object' ? '\n' : '') + JSONUtils.serialize(obj, true, true);
        if (writeToConsole && (typeof console == 'object' && console.log))
            console.log(sLog);
        if (_isEnabled()) {
            exports._log.push(sLog);
            if (document.getElementById('gigya_log') != null && show)
                show();
            var logType;
            if (arrayUtils.indexOf(exports.CONSOLE_LOG_LEVELS, title) != -1)
                logType = title;
            else
                logType = 'log';
            window.gigya._.apiAdapter.onJSLog(logType, sLog);
        }
    }
}
exports.addLog = addLog;
function logCall(name, params, lastSource) {
    if (!lastSource)
        lastSource = params.lastSource;
    addLog('Calling ' +
        name +
        (lastSource && lastSource != name ? ' for ' + lastSource : '') +
        (params.source && lastSource != params.source ? ' initiated from ' + params.source : '') +
        ' with these params', params);
}
exports.logCall = logCall;
function debug() {
    scriptUtils.load(cdn_1.getCdnResource('/js/gigya.services.socialize.plugins.log.min.js'), null, function () {
        showConfig();
    }, true);
}
exports.debug = debug;
function showLog() {
    scriptUtils.load(cdn_1.getCdnResource('/js/gigya.services.socialize.plugins.log.min.js'), null, function () {
        show();
    }, true);
}
exports.showLog = showLog;
function show() { }
exports.show = show;
function showConfig() { }
exports.showConfig = showConfig;
functionsUtils.createAlias('gigya.debug', debug);


/***/ }),

/***/ "./src/core/Gigya.Js/app/LocalInfo.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/LocalInfo.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
var domains_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/domains */ "./src/core/Gigya.Js/app/Utils/domains.ts");
var userAgent = navigator.userAgent.toLowerCase();
exports.localInfo = {
    baseDomain: '',
    isBrowserSupportsFilesAPI: (function () {
        return typeof FileReader === 'function' || typeof FileReader === 'object';
    })(),
    initTime: new Date(),
    version: 0,
    pageDomain: document.location.hostname,
    protocol: document.location.protocol == 'http:' ? 'http' : 'https',
    userAgent: userAgent,
    isWin: userAgent.indexOf('win') != -1,
    isIE: userAgent.indexOf('msie') != -1 || (userAgent.indexOf('mozilla') != -1 && userAgent.indexOf('trident') != -1),
    isIE6: userAgent.indexOf('msie 6.') != -1,
    isIE7: userAgent.indexOf('msie 7.') != -1,
    isIE8: userAgent.indexOf('msie 8.') != -1,
    isIE9: userAgent.indexOf('msie 9.') != -1,
    isIE10: userAgent.indexOf('msie 10.') != -1,
    isIE11: userAgent.indexOf('mozilla') != -1 && userAgent.indexOf('trident/7.0') != -1,
    isEdge: userAgent.indexOf('edge') != -1,
    isIOS: userAgent.indexOf('iphone') != -1 || userAgent.indexOf('ipad') != -1 || userAgent.indexOf('ipod') != -1,
    isSafari534: userAgent.indexOf('safari/534') != -1,
    isWeChat: userAgent.indexOf('micromessenger') != -1,
    iosVersion: (function () {
        if (userAgent.indexOf('applewebkit') != -1 && userAgent.indexOf('version/') != -1) {
            return parseInt(userAgent.split('version/')[1].split(' ')[0]);
        }
        else
            return 0;
    })(),
    isAndroid: userAgent.indexOf('android') != -1,
    isAndroidBrowser: (function (userAgent) {
        if (userAgent.indexOf('mozilla/5.0') === -1)
            return false;
        if (userAgent.indexOf('android 4') === -1)
            return false;
        if (userAgent.indexOf('applewebkit') === -1)
            return false;
        if (userAgent.indexOf('windows phone') !== -1)
            return false;
        // Special user agents found so far that violate the existance of chrome rule
        // Bug 38367 Android Browser: Mozilla/5.0 (Linux; Android 4.2.2; en-us; SAMSUNG GT-I9500 Build/JDQ39) AppleWebKit/535.19 (KHTML, like Gecko) Version/1.0 Chrome/18.0.1025.308 Mobile Safari/535.19
        // Bug 40209 Chrome Browser: Mozilla/5.0 (Linux; Android 4.2.2; SAMSUNG SGT-I747 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/39.0.2171.93 Mobile Safari/537.36
        // Windows Phone Browser: Mozilla/5.0 (Mobile; Windows Phone 8.1; Android 4.0; ARM; Trident/7.0; Touch; rv:11.0; IEMobile/11.0; NOKIA; Lumia 920) like iPhone OS 7_0_3 Mac OS X AppleWebKit/537 (KHTML, like Gecko) Mobile Safari/537
        // Chrome Browser: Mozilla/5.0 (Linux; Android 4.2.2; en-gb; SAMSUNG GT-I9500 Build/KOT49H) AppleWebKit/537.36 (KHTML, like Gecko) Version/1.5 Chrome/28.0.1500.94 Mobile Safari/537.36
        var chromeInfo = /chrome\/(\d+)/.exec(userAgent);
        if (!chromeInfo)
            return true;
        var chromeVersion = parseInt(chromeInfo[1]);
        return chromeVersion < 20;
    })(userAgent),
    currentBrowser: '',
    androidVersion: (function () {
        if (userAgent.indexOf('android') != -1) {
            return parseFloat(userAgent.slice(userAgent.indexOf('android') + 8));
        }
        else
            return 0;
    })(),
    isChrome: userAgent.indexOf('chrome') != -1 && userAgent.indexOf('edge') == -1,
    isGoogleBot: userAgent.indexOf('googlebot') != -1,
    isFF: userAgent.indexOf('firefox') != -1,
    isOpera: userAgent.indexOf('opera') != -1,
    isSafari: navigator.appVersion &&
        navigator.appVersion.toLowerCase().indexOf('safari') != -1 &&
        navigator.appVersion.toLowerCase().indexOf('chrome') == -1 &&
        userAgent.indexOf('android') == -1,
    isIOSWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent),
    isIOSChrome: userAgent.indexOf('crios') != -1,
    isMAC: navigator.appVersion && navigator.appVersion.toLowerCase().indexOf('mac') != -1,
    isWindowsPhone: userAgent.indexOf('windows phone') != -1,
    isFacebookBrowser: userAgent.indexOf('fban') != -1 || userAgent.indexOf('fbav') != -1,
    supportsPostMessage: window.postMessage != null && (userAgent.indexOf('msie') == -1 || userAgent.indexOf('iemobile') != -1),
    supportsLocalStorage: false,
    supportsSessionStorage: false,
    supportsFlash: (function () {
        // http://stackoverflow.com/questions/998245/how-can-i-detect-if-flash-is-installed-and-if-not-display-a-hidden-div-that-inf
        var supportsFlash = false;
        try {
            if (navigator.mimeTypes &&
                navigator.mimeTypes['application/x-shockwave-flash'] != undefined &&
                navigator.mimeTypes['application/x-shockwave-flash'].enabledPlugin) {
                supportsFlash = true;
            }
            else {
                var fo = new ActiveXObject('ShockwaveFlash.ShockwaveFlash');
                if (fo) {
                    supportsFlash = true;
                }
            }
        }
        catch (e) { }
        return supportsFlash;
    })(),
    quirksMode: document.compatMode == 'BackCompat' && userAgent.indexOf('msie') != -1,
    backCompat: document.compatMode == 'BackCompat',
    // TODO: Add isTablet function for devices non-Mobile
    isMobile: (function () {
        var mobileClients = [
            'iphone',
            'ipod',
            'android',
            'midp',
            '240x320',
            'blackberry',
            'netfront',
            'nokia',
            'panasonic',
            'portalmmm',
            'sharp',
            'sie-',
            'sonyericsson',
            'symbian',
            'windows ce',
            'benq',
            'mda',
            'mot-',
            'opera mini',
            'philips',
            'pocket pc',
            'sagem',
            'samsung',
            'htc',
        ];
        for (var i in mobileClients) {
            if (userAgent.indexOf(mobileClients[i]) != -1) {
                return true;
            }
        }
        return false;
    })(),
    isMobileApp: (function () {
        if (!document.getElementsByTagName)
            // for old IE
            return false;
        var metaTags = document.getElementsByTagName('meta');
        for (var i = 0; i < metaTags.length; i++) {
            if (metaTags[i].getAttribute('name') == 'viewport') {
                var content = metaTags[i].getAttribute('content');
                if (content && content.indexOf('width=device-width') !== -1)
                    return true;
            }
        }
        return false;
    })(),
    isNativeMobileApp: false,
    isTouch: (function () {
        if ('ontouchstart' in window)
            // works on most browsers
            return true;
        if ('onmsgesturechange' in window) {
            // works on ie10
            // Try to determine if IE is open in metro mode. Metro doesn't allow activeX, that's the best test available as of IE11.
            try {
                new ActiveXObject('htmlfile');
                return false;
            }
            catch (e) {
                return true;
            }
        }
        return false;
    })(),
    isOnLine: function () { return navigator.onLine; },
    messagingMethod: 0
};
var isStorageEnabled = function (storageName) {
    try {
        var storage = window[storageName];
        if (!storage) {
            return false;
        }
        var testName = '_gig_localStorage_test';
        var testValue = 'just checking for localStorage';
        storage.setItem(testName, testValue);
        var result = storage.getItem(testName) === testValue;
        storage.removeItem(testName);
        return result;
    }
    catch (ex) {
        // Reasons:
        // - Inside 3rd party API proxy iFrame.
        // - Safari in incognito mode will error with "quota exceeded".
        // - Chrome with 3rd party cookies disabled will throw an error if you access the window.localStorage object in ANY way.
        return false;
    }
};
exports.localInfo.supportsLocalStorage = isStorageEnabled('localStorage');
exports.localInfo.supportsSessionStorage = isStorageEnabled('sessionStorage');
if (exports.localInfo.isIE11 && !window.indexedDB)
    // IE10-11 support postMessage between iframes but not inPrivate mode
    exports.localInfo.supportsPostMessage = false;
exports.localInfo.isMAC = exports.localInfo.isMAC && !exports.localInfo.isIOS;
var os = exports.localInfo.isWin
    ? 'windows'
    : exports.localInfo.isWindowsPhone
        ? 'winphone'
        : exports.localInfo.isIOS
            ? 'ios-v' + exports.localInfo.iosVersion
            : exports.localInfo.isMAC
                ? 'mac'
                : exports.localInfo.isAndroid
                    ? 'android'
                    : '';
if (os)
    os += ' ';
var browser = exports.localInfo.isChrome
    ? 'chrome'
    : exports.localInfo.isFF
        ? 'firefox'
        : exports.localInfo.isSafari
            ? 'safari'
            : exports.localInfo.isEdge
                ? 'edge'
                : exports.localInfo.isIE11
                    ? 'ie11'
                    : exports.localInfo.isIE10
                        ? 'ie10'
                        : exports.localInfo.isIE9
                            ? 'ie9'
                            : exports.localInfo.isIE8
                                ? 'ie8'
                                : '';
exports.localInfo.currentBrowser = os + browser;
var baseDomains;
if ((_b = (_a = window.gigya.partnerSettings) === null || _a === void 0 ? void 0 : _a.baseDomains) === null || _b === void 0 ? void 0 : _b.length) {
    baseDomains = window.gigya.partnerSettings.baseDomains;
}
else {
    if (window.self === window.top) {
        // only in the top frame
        window.gigya.logger.warn('gigya: missing base domains for site');
    }
    baseDomains = [document.location.hostname];
}
exports.localInfo.baseDomain = domains_1.getBaseDomain(baseDomains);


/***/ }),

/***/ "./src/core/Gigya.Js/app/Logger/baseLogger.ts":
/*!****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Logger/baseLogger.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _a;
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var interfaces_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Logger/interfaces */ "./src/core/Gigya.Js/app/Logger/interfaces.ts");
var stringParams_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringParams */ "./src/core/Gigya.Js/app/Utils/stringParams.ts");
exports.gigErrorReport = 'gigErrorReport';
var defaultLoggerConfig = {
    logLevel: interfaces_1.LogLevel.disabled,
    clientMuteLevel: interfaces_1.ClientMuteLevel.none,
    logTheme: interfaces_1.LogTheme.dark,
};
var themes = (_a = {},
    _a[interfaces_1.LogTheme.none] = [''],
    _a[interfaces_1.LogTheme.dark] = [
        '38f689',
        '009FD4',
        'b381b3',
        '71b6ef',
        '64c162',
        '977bd8',
        'd168a4',
        '4c71d2',
        '84b466',
        '7d638a',
        '799fb7',
        '8fdf98',
        'dc7767',
        '0a70f5',
        '38b159',
        'af721b',
        'bfaf6f',
    ],
    _a[interfaces_1.LogTheme.light] = [
        '40806A',
        '003636',
        '9B59B6',
        'DB0A5B',
        '7928A1',
        '522032',
        '0000E0',
        '00202A',
        '000036',
        '005555',
        '1D781D',
        '4F5A65',
        '765AB0',
        '000000',
        '3C1362',
        '000060',
        '591D77',
    ],
    _a);
var selfLogsCss = 'color: #b0b0b0b0;';
var noCss = '';
var severityThreshold = interfaces_1.LogLevel.warn;
var defaultGroupBehavior = interfaces_1.GroupBehavior.collapsed;
var noopLoggerFn = function (message) {
    var optionalParams = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        optionalParams[_i - 1] = arguments[_i];
    }
};
var BaseLogger = /** @class */ (function () {
    function BaseLogger(_global) {
        this._global = _global;
        this._groupsStack = [];
        this._currColorIdx = 0;
        this.configKey = 'gig_loggerConfig';
        this._console = this._global.console;
        if (this.isEnabled) {
            this.overrideClientLogs();
        }
    }
    BaseLogger.prototype.getConfig = function () {
        if (!this._config) {
            this._config =
                this.readLoggerConfigFromHash() || // inner frames reads config from hash
                    this.readLoggerConfigFromCookie() || // top frames reads config from cookie
                    defaultLoggerConfig;
        }
        return this._config;
    };
    Object.defineProperty(BaseLogger.prototype, "isEnabled", {
        get: function () {
            return this.getConfig().logLevel > interfaces_1.LogLevel.disabled;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLogger.prototype, "logLevel", {
        get: function () {
            return this.getConfig().logLevel;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLogger.prototype, "palette", {
        get: function () {
            return themes[this.getConfig().logTheme];
        },
        enumerable: true,
        configurable: true
    });
    BaseLogger.prototype.getNextColor = function () {
        if (this.getConfig().logTheme === interfaces_1.LogTheme.none) {
            return '';
        }
        if (this._currColorIdx >= this.palette.length) {
            this._currColorIdx = 0;
        }
        return "#" + this.palette[this._currColorIdx++];
    };
    Object.defineProperty(BaseLogger.prototype, "currentGroup", {
        get: function () {
            return this._groupsStack[this._groupsStack.length - 1];
        },
        enumerable: true,
        configurable: true
    });
    BaseLogger.prototype.readLoggerConfigFromHash = function () {
        var res = null;
        var loggerConfigStr = stringParams_1.getReqParamValue(location.hash, this.configKey);
        if (loggerConfigStr) {
            try {
                res = JSON.parse(decodeURIComponent(loggerConfigStr));
            }
            catch (e) {
                console.error("[Gigya]: exception while trying to parse logger config from hash", e);
            }
        }
        return res;
    };
    BaseLogger.prototype.readLoggerConfigFromCookie = function () {
        try {
            var res = null;
            var cookie = stringParams_1.getParamValue(document.cookie, this.configKey, ';');
            if (cookie) {
                try {
                    res = JSON.parse(cookie);
                }
                catch (e) {
                    console.error("[Gigya]: exception while trying to parse logger config from cookie", e);
                }
            }
            return res;
        }
        catch (e) {
            // iOS 10 webview throws in some scenarios
            return undefined;
        }
    };
    BaseLogger.prototype.setLoggerConfigCookie = function (loggerConfig) {
        document.cookie = this.configKey + "=" + JSON.stringify(loggerConfig);
    };
    BaseLogger.prototype.overrideClientLogs = function () {
        var _this = this;
        var Proxy = this._global['Proxy'];
        if (!Proxy) {
            return;
        }
        switch (this.getConfig().clientMuteLevel) {
            // do nothing
            case interfaces_1.ClientMuteLevel.none:
                break;
            // replace native console with a dummy
            case interfaces_1.ClientMuteLevel.all:
                this._global.console = new Proxy(this._global.console, {
                    get: function () { return noopLoggerFn; },
                });
                break;
            // override the group api and output a prefixed client log
            case interfaces_1.ClientMuteLevel.normal:
            default:
                this._global.console = new Proxy(this._global.console, {
                    get: function (target, property) {
                        return ['group', 'groupCollapsed', 'groupEnd'].indexOf(property) !== -1
                            ? function () {
                                var _a;
                                var args = [];
                                for (var _i = 0; _i < arguments.length; _i++) {
                                    args[_i] = arguments[_i];
                                }
                                return (_a = _this._console).log.apply(_a, tslib_1.__spreadArrays(["client has called console." + property], args));
                            }
                            : target[property];
                    },
                });
                break;
        }
    };
    BaseLogger.prototype.getFormattedLogArgs = function (text, logGroup) {
        if (text === void 0) { text = ''; }
        if (logGroup === void 0) { logGroup = this.currentGroup; }
        return {
            text: logGroup ? "%c\u2588" + text : "%c" + text,
            css: logGroup ? "color: " + logGroup.color + ";" : '',
        };
    };
    BaseLogger.prototype.restoreHangingGroups = function (hangingGroups) {
        // restore groups stack after a parent group has ended
        while (hangingGroups.length) {
            // restore the groups stack
            var group = hangingGroups.shift();
            this._groupsStack.push(group);
            // indicate group has been restored
            var logArgs = this.getFormattedLogArgs(" %c[RESTORED - " + group.groupTitle + "]");
            this._console.groupCollapsed(logArgs.text, logArgs.css, selfLogsCss);
        }
    };
    BaseLogger.prototype.endGroup = function (group) {
        var logArgs = this.getFormattedLogArgs(" [END - " + group.groupTitle + "]", group);
        this._console.log(logArgs.text, logArgs.css);
        this._console.groupEnd();
    };
    BaseLogger.prototype.log = function (severity) {
        // log if one of the following
        // [1] logging is enabled and the log's severity is greater or equal to the configured logLevel
        // [2] severity is greater than the threshold but the configured logLevel is not greater than the threshold
        if ((this.isEnabled && severity >= this.logLevel) || // log
            (severity >= severityThreshold && this.logLevel < severityThreshold)) {
            // normalize log level
            var originalLogLevel = interfaces_1.LogLevel[severity];
            var normalizedLogLevel = severity === interfaces_1.LogLevel.debug
                ? interfaces_1.LogLevel[interfaces_1.LogLevel.info] // using console.info for debug level
                : originalLogLevel;
            // get formatted args and return the bound log function
            var logArgs = this.getFormattedLogArgs(" %c[" + originalLogLevel + "]");
            return this._console[normalizedLogLevel].bind(this._console, logArgs.text, logArgs.css, severity <= interfaces_1.LogLevel.info ? selfLogsCss : noCss);
        }
        return noopLoggerFn;
    };
    BaseLogger.prototype.getJsonFromError = function (err) {
        return {
            name: err.name,
            message: err.message,
            stack: err.stack,
        };
    };
    BaseLogger.prototype.errorParser = function (details) {
        var _this = this;
        var formatter = function (k, v) { return v instanceof Error ? _this.getJsonFromError(v) : v; };
        return JSON.parse(JSON.stringify(details, formatter));
    };
    Object.defineProperty(BaseLogger.prototype, "debug", {
        get: function () {
            return this.log(interfaces_1.LogLevel.debug);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLogger.prototype, "info", {
        get: function () {
            return this.log(interfaces_1.LogLevel.info);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLogger.prototype, "warn", {
        get: function () {
            return this.log(interfaces_1.LogLevel.warn);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(BaseLogger.prototype, "error", {
        get: function () {
            var _this = this;
            return function (message, details) {
                if (details && typeof details === 'object') {
                    details = _this.errorParser(details);
                }
                _this.log(interfaces_1.LogLevel.error).apply(_this, [message].concat([details]));
                _this.report(message, details);
            };
        },
        enumerable: true,
        configurable: true
    });
    BaseLogger.prototype.group = function (groupTitle, collapsed) {
        var _this = this;
        if (collapsed === void 0) { collapsed = defaultGroupBehavior === interfaces_1.GroupBehavior.collapsed; }
        if (this.isEnabled) {
            var color = this.getNextColor();
            var groupLog = function () {
                var _a, _b;
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                return (collapsed ? (_a = _this._console).groupCollapsed.apply(_a, args) : (_b = _this._console).group.apply(_b, args));
            };
            this._groupsStack.push({ groupTitle: groupTitle, color: color });
            var logArgs = this.getFormattedLogArgs(" [START - " + groupTitle + "]");
            groupLog(logArgs.text, logArgs.css);
        }
        return {
            end: function () { return _this.groupEnd(groupTitle); },
            endWhen: function (done) {
                if (typeof done == 'function') {
                    done = done();
                }
                if (done && done.then) {
                    done.then(function () { return _this.groupEnd(groupTitle); });
                }
                else {
                    // sync
                    _this.groupEnd(groupTitle);
                }
            },
        };
    };
    BaseLogger.prototype.groupEnd = function (groupTitle) {
        if (this.isEnabled) {
            var hangingGroups = [];
            var currGroup = this._groupsStack.pop(); // get the current active group
            // while the current group is not the same as the one that we want to end and we have other groups in the stack
            while (currGroup.groupTitle !== groupTitle && this._groupsStack.length) {
                hangingGroups.unshift(currGroup); // [1] push it the current group into the temp 'hanging groups' stack
                currGroup = this._groupsStack.pop(); // [2] get the next group in stack
                this._console.groupEnd(); // [3] groupEnd for each group that is not the current group
            }
            // end the group
            this.endGroup(currGroup);
            // resume child groups
            if (hangingGroups.length) {
                this.restoreHangingGroups(hangingGroups);
            }
        }
    };
    BaseLogger.prototype.enable = function (logLevel, clientMuteLevel, logTheme) {
        if (logLevel === void 0) { logLevel = interfaces_1.LogLevel.info; }
        if (clientMuteLevel === void 0) { clientMuteLevel = interfaces_1.ClientMuteLevel.normal; }
        if (logTheme === void 0) { logTheme = interfaces_1.LogTheme.dark; }
        this.setLoggerConfigCookie({ logLevel: logLevel, clientMuteLevel: clientMuteLevel, logTheme: logTheme });
    };
    BaseLogger.prototype.disable = function () {
        this.setLoggerConfigCookie({
            logLevel: interfaces_1.LogLevel.disabled,
            clientMuteLevel: defaultLoggerConfig.clientMuteLevel,
            logTheme: defaultLoggerConfig.logTheme,
        });
    };
    return BaseLogger;
}());
exports.BaseLogger = BaseLogger;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Logger/iFrameLogger.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js/app/Logger/iFrameLogger.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var baseLogger_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Logger/baseLogger */ "./src/core/Gigya.Js/app/Logger/baseLogger.ts");
var stringParams_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringParams */ "./src/core/Gigya.Js/app/Utils/stringParams.ts");
var IFrameLogger = /** @class */ (function (_super) {
    tslib_1.__extends(IFrameLogger, _super);
    function IFrameLogger(_global) {
        if (_global === void 0) { _global = window; }
        var _this = _super.call(this, _global) || this;
        _this._global = _global;
        return _this;
    }
    IFrameLogger.prototype.report = function (message, details, includeStack) {
        if (includeStack === void 0) { includeStack = true; }
        // send the report from the top frame
        try {
            // calculate the top frame origin
            var a = document.createElement('a');
            a.href = stringParams_1.getReqParamValue(location.hash, 'origin') || stringParams_1.getReqParamValue(location.hash, 'd');
            var targetOrigin = a.protocol + "//" + a.hostname + (a.port ? ":" + a.port : '');
            // post message
            this._global.top.postMessage(JSON.stringify({ type: baseLogger_1.gigErrorReport, message: message, details: details, includeStack: includeStack }), targetOrigin);
        }
        catch (e) {
            console.error(e);
        }
    };
    return IFrameLogger;
}(baseLogger_1.BaseLogger));
exports.IFrameLogger = IFrameLogger;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Logger/interfaces.ts":
/*!****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Logger/interfaces.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["disabled"] = 0] = "disabled";
    LogLevel[LogLevel["debug"] = 1] = "debug";
    LogLevel[LogLevel["info"] = 2] = "info";
    LogLevel[LogLevel["warn"] = 3] = "warn";
    LogLevel[LogLevel["error"] = 4] = "error";
})(LogLevel = exports.LogLevel || (exports.LogLevel = {}));
var ClientMuteLevel;
(function (ClientMuteLevel) {
    ClientMuteLevel[ClientMuteLevel["none"] = 0] = "none";
    ClientMuteLevel[ClientMuteLevel["normal"] = 1] = "normal";
    ClientMuteLevel[ClientMuteLevel["all"] = 2] = "all";
})(ClientMuteLevel = exports.ClientMuteLevel || (exports.ClientMuteLevel = {}));
var LogTheme;
(function (LogTheme) {
    LogTheme[LogTheme["none"] = 0] = "none";
    LogTheme[LogTheme["dark"] = 1] = "dark";
    LogTheme[LogTheme["light"] = 2] = "light";
})(LogTheme = exports.LogTheme || (exports.LogTheme = {}));
var GroupBehavior;
(function (GroupBehavior) {
    GroupBehavior[GroupBehavior["expanded"] = 0] = "expanded";
    GroupBehavior[GroupBehavior["collapsed"] = 1] = "collapsed";
})(GroupBehavior = exports.GroupBehavior || (exports.GroupBehavior = {}));


/***/ }),

/***/ "./src/core/Gigya.Js/app/Logger/loggerJsonp.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Logger/loggerJsonp.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function loggerJsonp(endpoint, params) {
    var script = document.createElement('script');
    script.src = endpoint + "?" + params;
    script.type = 'text/javascript';
    script.onload = function () {
        document.getElementsByTagName('head')[0].removeChild(script);
    };
    document.getElementsByTagName('head')[0].appendChild(script);
}
exports.loggerJsonp = loggerJsonp;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Logger/main.ts":
/*!**********************************************!*\
  !*** ./src/core/Gigya.Js/app/Logger/main.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var parentLogger_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Logger/parentLogger */ "./src/core/Gigya.Js/app/Logger/parentLogger.ts");
var iFrameLogger_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Logger/iFrameLogger */ "./src/core/Gigya.Js/app/Logger/iFrameLogger.ts");
if (!window.gigya.logger) {
    __webpack_provided_Object_dot_assign(window.gigya, { logger: window === window.top ? new parentLogger_1.ParentLogger() : new iFrameLogger_1.IFrameLogger() });
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/core/Gigya.Js/app/Logger/parentLogger.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js/app/Logger/parentLogger.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var baseLogger_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Logger/baseLogger */ "./src/core/Gigya.Js/app/Logger/baseLogger.ts");
var loggerJsonp_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Logger/loggerJsonp */ "./src/core/Gigya.Js/app/Logger/loggerJsonp.ts");
var gigyaScriptEl_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/gigyaScriptEl */ "./src/core/Gigya.Js/app/Utils/gigyaScriptEl.ts");
var URLUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var ParentLogger = /** @class */ (function (_super) {
    tslib_1.__extends(ParentLogger, _super);
    function ParentLogger(_global, _errorReportConfig, _canaryConfig, _random, _jsonp) {
        if (_global === void 0) { _global = window; }
        if (_errorReportConfig === void 0) { _errorReportConfig = window.gigya.errorReport; }
        if (_canaryConfig === void 0) { _canaryConfig = window.gigya.canary; }
        if (_random === void 0) { _random = function () { return Math.random() * 100; }; }
        if (_jsonp === void 0) { _jsonp = loggerJsonp_1.loggerJsonp; }
        var _this = _super.call(this, _global) || this;
        _this._global = _global;
        _this._errorReportConfig = _errorReportConfig;
        _this._canaryConfig = _canaryConfig;
        _this._random = _random;
        _this._jsonp = _jsonp;
        var errorReportEnabled = _this._errorReportConfig && _this._errorReportConfig.enabled;
        var runningAsCanary = _this._canaryConfig && _this._canaryConfig.isActive;
        var enrolledToReportErrors = _this.enrollErrorReporting();
        if (errorReportEnabled && (runningAsCanary || enrolledToReportErrors)) {
            _this._isErrorReporter = true;
            _this.setupMessageListener();
            _this._guid = _this.generateGUID();
        }
        return _this;
    }
    ParentLogger.prototype.enrollErrorReporting = function () {
        return (this._errorReportConfig && this._errorReportConfig.probability) >= this._random();
    };
    ParentLogger.prototype.setupMessageListener = function () {
        var _this = this;
        var errorReportMessageListener = function (event) {
            var dc = window.gigya.dataCenter;
            var gigyaDomain = window.gigya.defaultApiDomain.replace(/\./g, '.'); // replace all '.' with '\.'
            var allowedOriginRegex = new RegExp("cdns?." + dc + "." + gigyaDomain + "$");
            if (!event.origin.match(allowedOriginRegex)) {
                return;
            }
            try {
                var data = JSON.parse(event.data);
                if (data.type === baseLogger_1.gigErrorReport) {
                    _this.report(data.message, data.details, data.includeStack);
                }
            }
            catch (e) { } // unexpected event.data
        };
        this._global.addEventListener('message', errorReportMessageListener, false);
    };
    ParentLogger.prototype.getApiKey = function () {
        var apiKey = window.gigya['thisScript'] && window.gigya['thisScript'].APIKey;
        if (!apiKey) {
            var scriptElement = gigyaScriptEl_1.getGigyaScriptElement();
            var URLParams = URLUtils.getParamsFromURL(scriptElement && scriptElement.src, true) || {};
            apiKey = URLParams['apikey'];
        }
        return apiKey;
    };
    ParentLogger.prototype.createReportParams = function (message, details, includeStack) {
        if (details === void 0) { details = {}; }
        if (includeStack === void 0) { includeStack = true; }
        var params = {
            message: message,
            apiKey: this.getApiKey(),
            stack: includeStack ? new Error().stack : '',
            page: LocalInfo_1.localInfo && LocalInfo_1.localInfo.pageDomain,
            browser: LocalInfo_1.localInfo && LocalInfo_1.localInfo.currentBrowser,
            buildVersion: window.gigya.build.version,
            buildNumber: window.gigya.build.number,
            callback: 'gigya.callback',
            format: 'jsonp',
            sdk: 'web',
        };
        if (typeof details == 'string') {
            details = { message: details };
        }
        details['guid'] = this._guid;
        params['details'] = JSON.stringify(details);
        return Object.keys(params)
            .map(function (k) { return k + "=" + encodeURIComponent(params[k]); })
            .join('&');
    };
    ParentLogger.prototype.report = function (message, details, includeStack) {
        if (includeStack === void 0) { includeStack = true; }
        if (!this._isErrorReporter) {
            // don't continue if we don't need to report
            return;
        }
        try {
            var reportParams = this.createReportParams(message, details, includeStack);
            var sdkErrorReportEndpoint = location.protocol + "//accounts." + window.gigya.dataCenter + "." + window.gigya.defaultApiDomain + "/sdk.errorReport";
            this._jsonp(sdkErrorReportEndpoint, reportParams);
        }
        catch (e) { }
    };
    ParentLogger.prototype.generateGUID = function () {
        try { // https://stackoverflow.com/questions/105034/create-guid-uuid-in-javascript
            return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
                var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
                return v.toString(16);
            });
        }
        catch (e) {
            return '';
        }
    };
    return ParentLogger;
}(baseLogger_1.BaseLogger));
exports.ParentLogger = ParentLogger;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Prototypes.ts":
/*!*********************************************!*\
  !*** ./src/core/Gigya.Js/app/Prototypes.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
// Custom public prototypes (Friends, UserAction, etc)
var defaultObjects = {};
var defaultObjectsDef = {
    //name|defaultValue. if default not specified use empty string
    User: 'personwithuid+isLoggedIn|false,isConnected|false,isSiteUser|false,identities|{},providers|[],timestamp,UIDSig,UIDSignature,signatureTimestamp,loginProvider,loginProviderUID,capabilities|{}',
    Friend: 'personwithuid+timestamp,friendshipSig,friendshipSignature,signatureTimestamp,timestamp,isSiteUser|false,identities|{}',
    Identity: 'person+isExpiredSession|false,allowsLogin|false,providerUID,provider,isLoginIdentity|false,missingPermissions',
    Contact: 'provider,firstName,lastName,nickname,email,photoURL',
    person: 'nickname,photoURL,thumbnailURL,birthDay|0,birthMonth|0,birthYear|0,gender,email,proxiedEmail,country,state,city,zip,firstName,lastName,profileURL,age|0',
    personwithuid: 'person+UID,isSiteUID|false',
    UserAction: 'actorUID,actorNickname,actionName,date|new Date(),targets|[],images|[],actionData1,actionData2,iconURL,title,linkBack,userMessage,description,actionLinks|[],mediaItems|[],subtitle',
};
var createDefaultObject = function (type) {
    var o = {};
    var objectDef = defaultObjectsDef[type];
    if (objectDef.indexOf('+') != -1) {
        o = createDefaultObject(objectDef.split('+')[0]);
        objectDef = objectDef.split('+')[1];
    }
    var arFields = objectDef.split(',');
    for (var i = 0; i < arFields.length; i++) {
        var defaultValue = '';
        var arField = arFields[i].split('|');
        if (arField.length > 1) {
            try {
                defaultValue = JSONUtils.deserialize(arField[1], '');
            }
            catch (ex) { }
        }
        o[arField[0]] = defaultValue || '';
    }
    return o;
};
var _createConstructor = function (name) {
    return function (o) {
        var defaultObject = defaultObjects[name];
        for (var p in defaultObject) {
            this[p] = objectUtils.clone(defaultObject[p]);
        }
        if (typeof o == 'object') {
            for (var p in o) {
                if (typeof o[p] != 'function') {
                    this[p] = objectUtils.clone(o[p]);
                }
            }
        }
    };
};
for (var def in defaultObjectsDef) {
    defaultObjects[def] = createDefaultObject(def);
    window.gigya.socialize[def] = _createConstructor(def);
}
window.gigya.socialize.Collection = function (arr, k) {
    this.arr = arr;
    this._key = k ? k : '';
};
window.gigya.socialize.Collection.prototype = {
    asArray: function () {
        return this.arr;
    },
    each: function (f) {
        var i = 0;
        var el = this.arr[i];
        while (el) {
            f(el, i);
            i++;
            el = this.arr[i];
        }
    },
    getById: function (id) {
        if (typeof this._hash == 'undefined') {
            this._buildHash();
        }
        return (this._hash ? this._hash : this.arr)[id];
    },
    getSize: function () {
        return this.arr.length;
    },
    _buildHash: function () {
        var h = (this._hash = {});
        var k = this._key;
        this.each(function (o, i) {
            h[typeof o[k] == 'function' ? o[k]() : o[k]] = o;
        });
    },
};
window.gigya.socialize.UserAction.prototype = {
    clone: function () {
        return new window.gigya.socialize.UserAction(window.gigya.utils.object.clone(this, true, true));
    },
    getTemplate: function () {
        return this.titleTemplate;
    },
    setTemplate: function (a) {
        this.titleTemplate = a;
    },
    getActor: function (a) {
        return { UID: this.actorUID, nickname: this.actorNickname };
    },
    setActionName: function (a) {
        this.actionName = a;
        return this;
    },
    getActionName: function (a) {
        return this.actionName;
    },
    getTemplateFields: function () {
        var fieldsArray = [];
        for (var fn in this.templateFields) {
            fieldsArray.push(this.templateFields[fn]);
        }
        return new window.gigya.socialize.Collection(fieldsArray, 'fieldName');
    },
    setTemplateField: function (n, t, h) {
        this.templateFields[n] = { fieldName: n, text: t, href: h };
        return this;
    },
    getTemplateField: function (n) {
        return this.templateFields[n] ? this.templateFields[n] : null;
    },
    addTarget: function (t) {
        if (typeof t == 'object') {
            this.targets.push({ UID: t.UID, nickname: t.nickname ? t.nickname : '' });
            return this;
        }
        else if (typeof t == 'string') {
            this.targets.push({ UID: t, nickname: '' });
            return this;
        }
    },
    addActionLink: function (title, href) {
        this.actionLinks.push({ text: title, href: href ? href : '' });
        return this;
    },
    addMediaItem: function (obj) {
        this.mediaItems.push(obj);
        return this;
    },
    setTitle: function (text) {
        if (text)
            this.title = text;
        return this;
    },
    setLinkBack: function (href) {
        if (href && href.toString)
            href = href.toString();
        if (href)
            this.linkBack = href;
        return this;
    },
    setUserMessage: function (text) {
        this.userMessage = text ? text : '';
        return this;
    },
    setDescription: function (text) {
        this.description = text ? text : '';
        return this;
    },
    addImage: function (s, h) {
        this.addMediaItem({ type: 'image', src: s, href: h });
    },
    getImages: function () {
        return new window.gigya.socialize.Collection(this.images, '');
    },
    getTargets: function () {
        return new window.gigya.socialize.Collection(this.targets, 'UID');
    },
    setIconURL: function (url) {
        this.iconURL = url;
        return this;
    },
    getIconURL: function () {
        return this.iconURL;
    },
    getDate: function () {
        return this.date;
    },
    setActionData1: function (ad) {
        this.actionData1 = ad;
        return this;
    },
    getActionData1: function (ad) {
        return this.actionData1;
    },
    setActionData2: function (ad) {
        this.actionData2 = ad;
        return this;
    },
    getActionData2: function (ad) {
        return this.actionData2;
    },
    setSubtitle: function (s) {
        this.subtitle = s;
        return this;
    },
    getSubtitle: function () {
        return this.subtitle;
    },
};


/***/ }),

/***/ "./src/core/Gigya.Js/app/Providers.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Providers.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var arrayUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/array */ "./src/core/Gigya.Js/app/Utils/array.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
// Providers enum
exports._aliases = {};
var Provider = /** @class */ (function () {
    function Provider(ID, displayName, width, height, defaultCapabilities, explicitOnly, aliases) {
        this.ID = ID;
        this.displayName = displayName;
        this.width = width;
        this.height = height;
        this.explicitOnly = explicitOnly;
        this.aliases = aliases;
        this.arDefaultCapabilities = defaultCapabilities.split(',');
        this.name = displayName
            .toLowerCase()
            .split(' ')
            .join('')
            .split('!')
            .join('')
            .split('.')
            .join('')
            .split('+')
            .join('plus');
        if (aliases) {
            // Creating the aliases map
            if (!exports._aliases) {
                exports._aliases = {};
            }
            // Mapping the aliases: Alias -> Real name (in order to make the search for aliases more effective)
            var arAliases = aliases.split('|');
            for (var i = 0; i < arAliases.length; i++) {
                exports._aliases[arAliases[i]] = this.name;
            }
        }
        switch (this.name) {
            case 'messenger':
                // Rebranding - issue #22411.
                this.displayName = 'Microsoft';
                break;
            case 'googleplus':
                this.displayName = 'Google';
                break;
            case 'customopenid':
                // Custom Open ID is a different network on the server but should behave the same in most of our plugins.
                this.displayName = 'OpenID';
                break;
            case 'paypaloauth':
                this.displayName = 'PayPal';
                break;
            default:
            // No override.
        }
    }
    Provider.prototype.toString = function () {
        return this.name;
    };
    return Provider;
}());
exports.Provider = Provider;
exports.arProviders = [
    new Provider(64, 'Facebook', 650, 400, 'login,friends,places,status,actions,photos'),
    new Provider(9012, 'Twitter', 800, 440, 'login,friends,notifications,actions,status,places,checkins'),
    new Provider(72, 'Google+', 560, 600, 'login,contacts', false, 'google|googleplus'),
    new Provider(9042, 'LinkedIn', 865, 450, 'login,friends,status,actions,notifications,contacts'),
    new Provider(9058, 'Amazon', 785, 510, 'login'),
    new Provider(9803, 'Yahoo', 500, 567, 'login,friends,contacts,notifications'),
    new Provider(1047, 'Messenger', 380, 540, 'login, friends', false, 'messenger|microsoft'),
    new Provider(9832, 'Instagram', 440, 420, 'login,photos'),
    new Provider(9222, 'Odnoklassniki', 888, 425, 'login'),
    new Provider(9007, 'FourSquare', 1000, 650, 'login,friends,places,checkins'),
    new Provider(8191, 'Renren', 450, 350, 'login,friends,status,actions'),
    new Provider(8203, 'QQ', 570, 460, 'login,actions'),
    new Provider(9821, 'Sina', 640, 380, 'login,status,actions'),
    new Provider(4228, 'Mixi', 1000, 720, 'login,friends,actions,photos', true),
    new Provider(9830, 'Yahoo! JAPAN', 980, 700, 'login', true),
    new Provider(8205, 'Spiceworks', 640, 380, 'login', true),
    new Provider(9041, 'VKontakte', 610, 510, 'login,friends,photos,status,actions'),
    new Provider(9800, 'AOL', 530, 720, 'login'),
    new Provider(4096, 'WordPress', 700, 540, 'login'),
    new Provider(256, 'Blogger', 760, 400, 'login'),
    new Provider(4218, 'Netlog', 730, 590, 'login', true),
    new Provider(4224, 'Orange France', 730, 590, 'login', true),
    new Provider(5002, 'Livedoor', 970, 700, 'login', true),
    new Provider(5004, 'Fox News', 730, 590, 'login', true),
    new Provider(1051, 'PayPal', 400, 550, 'login', true),
    new Provider(9219, 'Xing', 785, 510, 'login,friends', true),
    new Provider(8206, 'WeChat', 730, 590, 'login', false, 'wechat|weixin'),
    new Provider(4121, 'Custom OpenID', 730, 590, 'login', true),
    new Provider(4122, 'Custom SAML', 730, 590, 'login', true),
    new Provider(10001, 'OpenID Connect', 730, 590, 'login', true),
    new Provider(6002, 'Site', 730, 590, '', true),
    new Provider(1052, 'PayPalOAuth', 730, 590, 'login', true),
    new Provider(8207, 'Line', 730, 590, 'login'),
    new Provider(20001, 'Kakao', 500, 600, 'login', true),
    new Provider(20002, 'Naver', 780, 555, 'login', true),
    new Provider(20003, 'DocCheck', 874, 844, 'login', true),
    new Provider(20004, 'Apple', 874, 844, 'login', true)
];
function getProviderByName(provider, providersEnum) {
    if (providersEnum === void 0) { providersEnum = exports.arProviders; }
    for (var i = 0; i < providersEnum.length; i++) {
        if (providersEnum[i].name.toLowerCase() === provider.toLowerCase()) {
            return providersEnum[i];
        }
    }
}
exports.getProviderByName = getProviderByName;
function replaceProviderAliases(providers) {
    if (providers == null) {
        return;
    }
    var arrProviders = providers.split(',');
    for (var i = 0; i < arrProviders.length; i++) {
        var currProvider = arrProviders[i].replace(/^\s+|\s+$/g, '');
        if (exports._aliases[currProvider]) {
            arrProviders[i] = exports._aliases[currProvider];
        }
    }
    return arrProviders.join(',');
}
exports.replaceProviderAliases = replaceProviderAliases;
function getProviderById(providerID, providersEnum) {
    if (providersEnum === void 0) { providersEnum = exports.arProviders; }
    for (var i = 0; i < providersEnum.length; i++) {
        if (providersEnum[i].ID === providerID) {
            return providersEnum[i];
        }
    }
}
exports.getProviderById = getProviderById;
function hideProvidersByName(providers, providersToHide, providersEnum) {
    if (providersToHide === void 0) { providersToHide = ''; }
    if (providersEnum === void 0) { providersEnum = exports.arProviders; }
    providersToHide = providersToHide.toLowerCase();
    var arProvidersToHide = providersToHide
        .split(' ')
        .join('')
        .split('.')
        .join('')
        .toLowerCase()
        .split(',');
    arProvidersToHide = replaceWildcard(arProvidersToHide, providersEnum);
    for (var i = 0; i < arProvidersToHide.length; i++) {
        for (var u = 0; u < providers.length; u++) {
            var provider = providers[u];
            var sProvider = provider.name || provider.toString();
            if (sProvider) {
                sProvider = sProvider.toLowerCase();
            }
            if (sProvider === arProvidersToHide[i]) {
                providers.splice(u, 1);
            }
        }
    }
    return providers;
}
exports.hideProvidersByName = hideProvidersByName;
function getProvidersForRequiredCapabilities(providers, capabilities) {
    if (capabilities == null) {
        capabilities = [];
    }
    var arProvidersResult = [];
    for (var i = 0; i < providers.length; i++) {
        var provider = providers[i];
        var validNet = true;
        for (var u = 0; u < capabilities.length; u++) {
            var found = false;
            for (var a = 0; a < provider.arDefaultCapabilities.length; a++) {
                if (provider.arDefaultCapabilities[a].toLowerCase() == capabilities[u].toLowerCase()) {
                    found = true;
                    break;
                }
            }
            if (!found) {
                validNet = false;
                break;
            }
        }
        if (validNet) {
            arProvidersResult.push(provider);
        }
    }
    return arProvidersResult;
}
exports.getProvidersForRequiredCapabilities = getProvidersForRequiredCapabilities;
function getAllProviders() {
    return exports.arProviders.concat();
}
exports.getAllProviders = getAllProviders;
function getProvidersByName(providers, providersEnum) {
    if (providersEnum === void 0) { providersEnum = exports.arProviders; }
    // Casting providers to string to overcome bug #10392.
    providers = ('' + providers)
        .split(' ')
        .join('')
        .split('.')
        .join('')
        .toLowerCase();
    providers = replaceProviderAliases(providers);
    var arAllProviders = ('' + providers).split(',');
    arAllProviders = replaceWildcard(arAllProviders, providersEnum);
    var arProvidersResult = [];
    for (var i = 0; i < arAllProviders.length; i++) {
        var providerObject = getProviderByName(arAllProviders[i], providersEnum);
        if (providerObject != null && arrayUtils.indexOf(arProvidersResult, providerObject) == -1) {
            arProvidersResult.push(providerObject);
        }
    }
    return arProvidersResult;
}
exports.getProvidersByName = getProvidersByName;
function replaceWildcard(providersToReplace, providersEnum) {
    if (!providersEnum) {
        providersEnum = exports.arProviders;
    }
    var arProvidersNew = [];
    for (var i = 0; i < providersToReplace.length; i++) {
        if (providersToReplace[i] == '*') {
            for (var iProvider = 0; iProvider < providersEnum.length; iProvider++) {
                var found = false;
                for (var u = 0; u < providersToReplace.length; u++) {
                    if (providersToReplace[u].toLowerCase() === providersEnum[iProvider].name.toLowerCase()) {
                        found = true;
                    }
                }
                if (!found && !providersEnum[iProvider].explicitOnly) {
                    arProvidersNew.push(providersEnum[iProvider].name);
                }
            }
        }
        else {
            arProvidersNew.push(providersToReplace[i]);
        }
    }
    return arProvidersNew;
}
exports.replaceWildcard = replaceWildcard;
functionsUtils.createAlias('gigya.socialize.getAllProviders', getAllProviders);
functionsUtils.createAlias('gigya.socialize.replaceProviderAliases', replaceProviderAliases);
functionsUtils.createAlias('gigya.socialize.getProvidersByName', getProvidersByName);
functionsUtils.createAlias('gigya.socialize._getProviderByName', getProviderByName);
functionsUtils.createAlias('gigya.socialize.hideProvidersByName', hideProvidersByName);
functionsUtils.createAlias('gigya.socialize._getProviderByID', getProviderById);
functionsUtils.createAlias('gigya.socialize.getProvidersForRequiredCapabilities', getProvidersForRequiredCapabilities);


/***/ }),

/***/ "./src/core/Gigya.Js/app/Reports.ts":
/*!******************************************!*\
  !*** ./src/core/Gigya.Js/app/Reports.ts ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
function trackAddressBarShares() {
    if (window.gigya.thisScript.globalConf['trackAddressBarShares']) {
        var uuid = window.gigya._.apiAdapter.getTokenParam(window.gigya.thisScript.APIKey, 'UUID');
        var arFragment = document.location.href.split('#');
        if (arFragment.length == 1 || arFragment[1] == '' || arFragment[1] == 'guid=_') {
            document.location.replace('#guid=' + (uuid ? uuid : '_'));
        }
    }
}
exports.trackAddressBarShares = trackAddressBarShares;
function report(event, APIKey, cid, source, sourceData, params, ignoreQueue) {
    if (params === void 0) { params = {}; }
    if (ignoreQueue === void 0) { ignoreQueue = false; }
    var report = objectUtils.removeUndefined({
        name: event,
        time: new Date().getTime().toString(),
        source: source,
        sourceData: sourceData,
        reportData: params,
        cid: cid,
    });
    if (!ignoreQueue) {
        if (!exports.queue)
            exports.queue = [];
        exports.queue.push(report);
    }
    else {
        var array = [report];
        window.gigya.gscounters.sendReport({
            reports: array,
            noAuth: !isAuthDataRequired(array),
        });
    }
}
exports.report = report;
function init() {
    setInterval(sendReports, 5000);
}
exports.init = init;
function sendReports() {
    while (exports.queue && exports.queue.length > 0) {
        var batch = objectUtils.clone(exports.queue.splice(0, 5), true, true);
        window.gigya.gscounters.sendReport({
            reports: batch,
            noAuth: !isAuthDataRequired(batch),
        });
    }
}
function isAuthDataRequired(reports) {
    for (var i = 0; i < reports.length; i++) {
        var report = reports[i];
        if ((report.name !== 'loadc' && report.name !== 'load') || (report.name === 'loadc' && report.reportData && report.reportData['actionCounterPath'])) {
            return true;
        }
    }
    return false;
}
function reportLoad(methodName, params) {
    if (!params._reportedLoad) {
        params._reportedLoad = true;
        var event = 'load';
        if (methodName == 'gigya.socialize.plugins.reactions.showReactionsBarUI')
            return; //reactionsBarUI reports load with getReactionsCount
        if (methodName == 'gigya.socialize.plugins.simpleshare.showSimpleShareUI') {
            event = 'loadSimple';
        }
        report(event, params.APIKey, params.cid, params.source, params.sourceData);
    }
}
exports.reportLoad = reportLoad;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Services/AccountService.ts":
/*!**********************************************************!*\
  !*** ./src/core/Gigya.Js/app/Services/AccountService.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var dateUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/date */ "./src/core/Gigya.Js/app/Utils/date.ts");
var GSErrors_1 = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var cookieUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/cookie */ "./src/core/Gigya.Js/app/Utils/cookie.ts");
var AccountService = /** @class */ (function () {
    function AccountService() {
    }
    AccountService.prototype.verifyLogin = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var verifyLoginIntervalConf, verifyLoginIntervalInMillis;
            return tslib_1.__generator(this, function (_a) {
                verifyLoginIntervalConf = Number(window.gigya.thisScript.globalConf['verifyLoginInterval']);
                if (isNaN(verifyLoginIntervalConf))
                    return [2 /*return*/, true];
                if (verifyLoginIntervalConf <= 0)
                    verifyLoginIntervalConf = 1; // Avoid setting zero interval to minimize requests
                verifyLoginIntervalInMillis = Math.ceil(verifyLoginIntervalConf) * 3600 * 1000;
                if (dateUtils.now() < this.lastVerification + verifyLoginIntervalInMillis)
                    return [2 /*return*/, true];
                this.lastVerification = dateUtils.now();
                return [2 /*return*/, new gigya.Promise(function (resolve) {
                        window.gigya.accounts.verifyLogin({
                            ignoreApiQueue: true,
                            callback: function (res) {
                                resolve(res['errorCode'] === GSErrors_1.GSErrors.OK);
                            },
                        });
                    })];
            });
        });
    };
    Object.defineProperty(AccountService.prototype, "lastVerification", {
        get: function () {
            return Number(cookieUtils.get('gig_last_ver_' + window.gigya.thisScript.APIKey));
        },
        set: function (timestamp) {
            cookieUtils.set('gig_last_ver_' + window.gigya.thisScript.APIKey, String(timestamp));
        },
        enumerable: true,
        configurable: true
    });
    return AccountService;
}());
exports.AccountService = AccountService;
exports.accountService = new AccountService();


/***/ }),

/***/ "./src/core/Gigya.Js/app/ThisScript.ts":
/*!*********************************************!*\
  !*** ./src/core/Gigya.Js/app/ThisScript.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.isReady = false;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/DOM.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/DOM.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var viewportUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/viewport */ "./src/core/Gigya.Js/app/Utils/viewport.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
exports._popupContainers = [];
exports._pseudoContainers = [];
var _nextZIndex = 999999999;
var backListener = null;
function getNextZIndex() {
    _nextZIndex++;
    return _nextZIndex;
}
exports.getNextZIndex = getNextZIndex;
function getGigyaScriptElement(fileNames) {
    var scripts = document.getElementsByTagName('script');
    var scriptElement;
    var gigyaCdnRegex = /\/\/cdn(s)?\.(ru1\.)?gigya.com/;
    for (var i = scripts.length - 1; i >= 0; i--) {
        var script = scripts[i];
        var src = script.src.toLowerCase();
        if (src !== '') {
            if (gigyaCdnRegex.test(src) || src.indexOf('?apikey=') > -1) {
                var isFileNameExistInSrc = fileNames.length === 0 || fileNames.some(function (fileName) { return src.indexOf(fileName) > -1; });
                if (isFileNameExistInSrc) {
                    scriptElement = script;
                    break;
                }
            }
        }
    }
    return scriptElement;
}
exports.getGigyaScriptElement = getGigyaScriptElement;
function dispatch(el, eventName) {
    var event;
    try {
        event = new Event(eventName);
    }
    catch (e) {
        // IE10 and below support
        event = document.createEvent('CustomEvent');
        event.initCustomEvent(eventName, true, true, {});
    }
    el.dispatchEvent(event);
}
exports.dispatch = dispatch;
function addButtonSubmitListener(el, handler, event, debugName) {
    if (event === void 0) { event = 'click'; }
    // Just in case the element does not exist.
    if (!el) {
        return;
    }
    el.setAttribute('role', 'button');
    if (el.getAttribute('tabindex') != '-1') {
        el.setAttribute('tabindex', '0');
    }
    addEventListener(el, event, function (e) { return handler(e); });
    addEventListener(el, 'keydown', function (e) {
        if ((e.which || e.keyCode) == 13) {
            e.preventDefault();
            handler(e);
        }
    });
}
exports.addButtonSubmitListener = addButtonSubmitListener;
function addEventListener(el, eventName, handler) {
    if (!el || !handler)
        return;
    if (el.addEventListener) {
        el.addEventListener(eventName, handler, true);
    }
    else {
        el.attachEvent('on' + eventName, handler);
    }
}
exports.addEventListener = addEventListener;
function removeEventListener(el, eventName, handler) {
    if (!handler)
        return;
    if (el.removeEventListener) {
        el.removeEventListener(eventName, handler, true);
    }
    else {
        el.detachEvent('on' + eventName, handler);
    }
}
exports.removeEventListener = removeEventListener;
function disableDefaultEventHandling(event) {
    if (event.preventDefault) {
        event.preventDefault();
    }
    else if (window.event) {
        window.event.returnValue = false;
    }
}
exports.disableDefaultEventHandling = disableDefaultEventHandling;
function addDialogBackListener(handler) {
    _removeDialogBackListener();
    // This should fire when back is clicked
    backListener = function (e) {
        if (e && e.newURL && e.newURL.indexOf('|gigyaMobileDialog') == -1) {
            handler(e);
            _removeDialogBackListener();
        }
    };
    // hash could change right after the call if it was initiated from a link that didn't return false
    window.setTimeout(function () {
        if (window.location.hash.indexOf('|gigyaMobileDialog') == -1) {
            window.location.hash = window.location.hash + '|gigyaMobileDialog';
        }
        addEventListener(window, 'hashchange', backListener);
    }, 50);
}
exports.addDialogBackListener = addDialogBackListener;
function _removeDialogBackListener() {
    if (!backListener)
        return;
    removeEventListener(window, 'hashchange', backListener);
    backListener = null;
    //restore previous hash
    window.location.hash = window.location.hash.replace('|gigyaMobileDialog', '');
}
exports._removeDialogBackListener = _removeDialogBackListener;
function appendToBody(el, document) {
    if (document === void 0) { document = window.document; }
    if (!document.body)
        return;
    if (document.body.insertBefore && document.body.firstChild) {
        document.body.insertBefore(el, document.body.firstChild);
    }
    else {
        document.body.appendChild(el);
    }
}
exports.appendToBody = appendToBody;
function removeElement(el) {
    if (el && el.parentElement) {
        el.parentElement.removeChild(el);
    }
}
exports.removeElement = removeElement;
function isChildOf(child, parent) {
    var directParent = child.parentNode;
    while (directParent) {
        if (parent == directParent) {
            return true;
        }
        directParent = directParent.parentNode;
    }
    return false;
}
exports.isChildOf = isChildOf;
function isVisible(el) {
    while (el) {
        var computedStyle = getComputedStyle(el);
        if (computedStyle.display === 'none' || computedStyle.visibility === 'hidden') {
            return false;
        }
        else {
            el = el.parentElement;
        }
    }
    return true;
}
exports.isVisible = isVisible;
function getCenteredDivID(name) {
    return 'gig_' + LocalInfo_1.localInfo.initTime.getTime().toString() + '_' + name;
}
exports.getCenteredDivID = getCenteredDivID;
function createElementWithAttributes(domElemName, domElemAttrs) {
    var newDomElem = document.createElement(domElemName);
    if (domElemAttrs) {
        for (var elemAttr in domElemAttrs) {
            newDomElem[elemAttr] = domElemAttrs[elemAttr];
        }
    }
    return newDomElem;
}
exports.createElementWithAttributes = createElementWithAttributes;
function createTopLevelDiv(id) {
    var el = document.createElement('div');
    if (el.style.zIndex != null) {
        el.style.zIndex = '' + getNextZIndex();
    }
    el.innerHTML = '';
    if (id) {
        el.id = id;
    }
    if (document.body) {
        if (document.body.insertBefore && document.body.firstChild) {
            document.body.insertBefore(el, document.body.firstChild);
        }
        else if (document.body.appendChild) {
            document.body.appendChild(el);
        }
    }
    return el;
}
exports.createTopLevelDiv = createTopLevelDiv;
function hideByID(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = 'none';
    }
}
exports.hideByID = hideByID;
function showByID(id) {
    var el = document.getElementById(id);
    if (el) {
        el.style.display = LocalInfo_1.localInfo.isIE6 ? (el.tagName == 'TD' ? 'table-cell' : el.tagName == 'TR' ? '' : el.tagName == 'TABLE' ? '' : 'block') : '';
    }
}
exports.showByID = showByID;
function clearByID(id) {
    try {
        var c = document.getElementById(id);
        if (c != null) {
            c.innerHTML = '';
        }
    }
    catch (e) { }
}
exports.clearByID = clearByID;
function getHTMLSize(html, container) {
    var divMeasure = document.createElement('div');
    divMeasure.style.position = 'absolute';
    divMeasure.style.left = '-1000px';
    divMeasure.innerHTML = html;
    container.appendChild(divMeasure);
    var w = divMeasure.offsetWidth;
    var h = divMeasure.offsetHeight;
    divMeasure.parentNode.removeChild(divMeasure);
    return { w: w, h: h };
}
exports.getHTMLSize = getHTMLSize;
function getElementsByClass(parentElement, className, includeParent) {
    if (!parentElement) {
        return [];
    }
    var arEls = [];
    if (includeParent && isElementClass(parentElement, className)) {
        arEls.push(parentElement);
    }
    var els = parentElement.getElementsByTagName('*');
    for (var i = 0; i < els.length; i++) {
        if (isElementClass(els[i], className)) {
            arEls.push(els[i]);
        }
    }
    return arEls || [];
}
exports.getElementsByClass = getElementsByClass;
function getElementsByAttribute(parentElement, tagName, attributeName, attributeValue) {
    var arEls = [];
    var els = parentElement.getElementsByTagName(tagName);
    for (var i = 0; i < els.length; i++) {
        if (els[i].getAttribute(attributeName) == attributeValue) {
            arEls.push(els[i]);
        }
    }
    return arEls;
}
exports.getElementsByAttribute = getElementsByAttribute;
function getElementPosition(el) {
    if (!el) {
        return { left: 0, top: 0, bottom: 0, right: 0 };
    }
    var rect = el.getBoundingClientRect();
    var scroll = viewportUtils.getScroll();
    var left = rect.left + scroll.left;
    var top = rect.top + scroll.top;
    return {
        left: left,
        top: top,
        right: left + rect.width,
        bottom: top + rect.height,
    };
}
exports.getElementPosition = getElementPosition;
function addClassToElement(el, className) {
    if (!el) {
        return;
    }
    var existingClasses = el.className ? getClassNames(el) : [];
    var existingOriginalLength = existingClasses.length;
    var newClasses = className.split(' ');
    for (var j in newClasses) {
        var exists = false;
        if (!newClasses[j]) {
            break;
        }
        for (var i in existingClasses) {
            if (existingClasses[i] === newClasses[j]) {
                exists = true;
                break;
            }
        }
        if (!exists) {
            existingClasses.push(newClasses[j]);
        }
    }
    if (existingClasses.length !== existingOriginalLength) {
        el.className = existingClasses.join(' ');
    }
}
exports.addClassToElement = addClassToElement;
function removeClassFromElement(el, className, substring) {
    if (substring === void 0) { substring = false; }
    if (!el) {
        return;
    }
    var arClass = getClassNames(el);
    for (var i = arClass.length - 1; i >= 0; i--) {
        if (arClass[i] === className || (substring && arClass[i].indexOf(className) !== -1)) {
            arClass.splice(i, 1);
        }
    }
    el.className = arClass.join(' ');
}
exports.removeClassFromElement = removeClassFromElement;
function getClassNames(el) {
    var classes = [];
    if (typeof el.className === 'string') {
        classes = el.className.split(' ');
    }
    return classes;
}
exports.getClassNames = getClassNames;
function isElementClass(el, className) {
    if (!el)
        return false;
    else if (!className)
        return true;
    else if (!el.className)
        return false;
    var exists = false;
    var arClass = getClassNames(el);
    for (var i = 0; i < arClass.length; i++) {
        if (arClass[i] === className) {
            exists = true;
            break;
        }
    }
    return exists;
}
exports.isElementClass = isElementClass;
function cancelEvent(event) {
    if (!event)
        return;
    if ('cancelable' in event)
        // All browsers except <IE9
        event.preventDefault();
    else
        event.returnValue = false;
}
exports.cancelEvent = cancelEvent;
function createElement(type, name) {
    var divContainer = document.createElement('div');
    name = name || '';
    divContainer.innerHTML = '<' + type + ' name="' + name + '" id="' + name + '"></' + type + '>';
    return divContainer.firstChild;
}
exports.createElement = createElement;
function setSize(container, w, h, center) {
    if (container == null || container.style == null) {
        return;
    }
    if (w) {
        w = '' + w;
        var isWidthPrecentage = w.indexOf('%') > 0;
        if (!isNaN(w) || isWidthPrecentage) {
            var widthValue = '' + (isWidthPrecentage ? w : w + 'px');
            if (container.style.width != widthValue) {
                container.style.width = widthValue;
            }
        }
    }
    if (h) {
        h = '' + h;
        var isHeightPrecentage = h.indexOf('%') > 0;
        if (!isNaN(w) || isHeightPrecentage) {
            var heightValue = '' + (isHeightPrecentage ? h : h + 'px');
            if (container.style.height !== heightValue) {
                container.style.height = heightValue;
            }
        }
    }
    if (center && w && h) {
        if (container.style.zIndex == null || center) {
            container.style.zIndex = '' + getNextZIndex();
        }
        var vp = viewportUtils.getInnerSize();
        var scrl = viewportUtils.getScroll();
        var vpt = scrl.top;
        var vpl = scrl.left;
        container.style.top = '' + Math.max(0, vpt + Math.floor((vp.h - h) / 2)) + 'px';
        container.style.left = '' + Math.max(0, vpl + Math.floor((vp.w - w) / 2)) + 'px';
        container.style.visibility = '';
    }
}
exports.setSize = setSize;
function createHiddenIframe(src) {
    var ifr = document.createElement('iframe');
    ifr.src = src;
    ifr.style.width = '30px';
    ifr.style.height = '10px';
    ifr.style.position = 'absolute';
    ifr.style.top = '-1000px';
    ifr.style.left = '-1000px';
    if (document.body) {
        appendToBody(ifr);
    }
    else {
        functionsUtils.invokeOnPageLoad(function () {
            appendToBody(ifr);
        });
    }
    return ifr;
}
exports.createHiddenIframe = createHiddenIframe;
function attributeEncode(value) {
    return value
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/\"/g, '&quot;')
        .replace(/\'/g, '&#39;'); // IE8 doesn't support &apos;
}
exports.attributeEncode = attributeEncode;
function manipulateAttributes(elements, matcher, replacePredicate, criteria) {
    if (criteria === void 0) { criteria = function () { return true; }; }
    elements.forEach(function (el) {
        if (!el.attributes)
            return;
        Array.prototype.slice.call(el.attributes).forEach(function (attr) {
            if (criteria(attr)) {
                attr.value = attr.value.replace(matcher, replacePredicate);
            }
        });
    });
}
exports.manipulateAttributes = manipulateAttributes;
function textNodesUnder(el) {
    var n;
    var textNodes = [];
    var treeWalker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT, null, false);
    while ((n = treeWalker.nextNode())) {
        textNodes.push(n);
    }
    return textNodes;
}
exports.textNodesUnder = textNodesUnder;
function isHTMLBooleanAttribute(attrName) {
    return ['autocomplete', 'autofocus', 'checked', 'disabled', 'hidden', 'readonly', 'required', 'selected'].indexOf(attrName) > -1;
}
exports.isHTMLBooleanAttribute = isHTMLBooleanAttribute;
function isBelongToGigyaFieldset(el) {
    if (!el || el instanceof HTMLFormElement) {
        return false; // end of recursion - element is not a child of a fieldset
    }
    if (isElementClass(el.parentElement, 'gigya-fieldset')) {
        return true;
    }
    return isBelongToGigyaFieldset(el.parentElement);
}
exports.isBelongToGigyaFieldset = isBelongToGigyaFieldset;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/HTTP.ts":
/*!*********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/HTTP.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var Uri_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
function redirect(url, arParams, method, target, workDocument) {
    if (workDocument === void 0) { workDocument = window.document; }
    if (method && method.toLowerCase() == 'post') {
        var form = workDocument.createElement('form');
        var arFieldsHTML = [];
        form.setAttribute('accept-charset', 'UTF-8');
        form.setAttribute('method', 'POST');
        form.setAttribute('action', url);
        if (target)
            form.setAttribute('target', target);
        var params = objectUtils.merge(arParams);
        for (var p in params) {
            if ((typeof params[p] == 'number' || typeof params[p] == 'boolean' || typeof params[p] == 'string') && p != 'eventName') {
                arFieldsHTML.push('<textarea name="' + encodeURIComponent(p) + '">' + params[p].toString().replace(/\&/g, '&amp;') + '</textarea>');
            }
        }
        form.innerHTML = arFieldsHTML.join('');
        form.style.display = 'none';
        DOMUtils.appendToBody(form, workDocument);
        form.submit();
    }
    else {
        var uri = new Uri_1.Uri(url);
        var query = {};
        for (var i = 0; i < arParams.length; i++) {
            var params_1 = arParams[i];
            for (var name in params_1) {
                if (params_1.hasOwnProperty(name)) {
                    var val = params_1[name];
                    query[name] = val;
                }
            }
        }
        uri.addToSearch(query);
        workDocument.location.href = uri.toString();
    }
}
exports.redirect = redirect;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/JSON.ts":
/*!*********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/JSON.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
function serialize(obj, includeFunctions, prettyPrint, l, maxLevel) {
    if (includeFunctions === void 0) { includeFunctions = false; }
    if (prettyPrint === void 0) { prettyPrint = false; }
    if (l === void 0) { l = 0; }
    if (maxLevel === void 0) { maxLevel = 20; }
    if (!LocalInfo_1.localInfo.isIE8) {
        return window['JSON'].stringify(obj);
    }
    else {
        if (!l)
            l = 0;
        if (l > maxLevel)
            return '[Too deep]';
        var prefix = '';
        var newline = '';
        var tab = '';
        if (prettyPrint) {
            tab = '\t';
            newline = '\n';
            for (var i = 0; i < l + 1; i++) {
                prefix += tab;
            }
        }
        var t = typeof obj;
        if (t == 'function') {
            return t.toString();
        }
        if (t != 'object' || obj === null) {
            // simple data type
            if (t == 'string')
                obj = '"' + obj.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
            return String(obj);
        }
        else {
            var n, v, json = [], arr = obj && obj.constructor == Array;
            if (arr) {
                for (var i = 0; i < obj.length; i++) {
                    v = obj[i];
                    t = typeof v;
                    if (v == null || t == 'undefined')
                        v = '';
                    else if (t == 'string')
                        v = '"' + v.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
                    else if (t == 'function') {
                        if (includeFunctions)
                            v = 'Function';
                        else
                            v = '';
                    }
                    else if (v.parentNode && v.innerHTML)
                        v = 'HTMLElement';
                    else if (v.constructor == Date)
                        v = '';
                    else if (t == 'object' && v !== null)
                        v = serialize(v, includeFunctions, prettyPrint, l + 1);
                    if (String(v) != '')
                        json.push(prefix + tab + String(v));
                }
            }
            else {
                for (n in obj) {
                    v = obj[n];
                    t = typeof v;
                    if (v == null || t == 'undefined')
                        v = String(v);
                    else if (t == 'string')
                        v = '"' + v.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '"';
                    else if (t == 'function') {
                        if (includeFunctions) {
                            v = 'Function';
                        }
                        else {
                            v = '';
                        }
                    }
                    else if (v.parentNode && v.innerHTML)
                        v = 'HTMLElement';
                    else if (v.constructor == Date)
                        v = '';
                    else if (t == 'object' && v !== null)
                        v = newline + serialize(v, includeFunctions, prettyPrint, l + 1);
                    if (String(v) != '')
                        json.push(prefix + tab + '"' + n.replace(/(\"|\\)/g, '\\$1').replace(/\r\n|\r|\n/g, '\\n') + '":' + String(v));
                }
            }
            return newline + prefix + (arr ? '[' : '{') + newline + json.join(',' + newline) + newline + prefix + (arr ? ']' : '}');
        }
    }
}
exports.serialize = serialize;
function deserialize(json, defaultValue, scope) {
    // Return default value if is empty string (or similar).
    if (!json || !json.replace(/^\s+|\s+$/g, '')) {
        return defaultValue || {};
    }
    // Attempt to parse. On error, warn in console and return default value.
    try {
        var keys = [];
        var values = [];
        if (scope) {
            for (var key in scope) {
                keys.push(key);
                values.push(scope[key]);
            }
        }
        var fn = eval("(function(" + keys.join(',') + ") { return " + json.trim() + "; })");
        return fn.apply(undefined, values);
    }
    catch (e) {
        console.warn('Error deserializing JavaScript', e);
        return defaultValue || {};
    }
}
exports.deserialize = deserialize;
function parse(json, defaultValue) {
    if (LocalInfo_1.localInfo.isIE8) {
        return deserialize(json, defaultValue);
    }
    else {
        try {
            return window['JSON'].parse(json);
        }
        catch (e) {
            return defaultValue || {};
        }
    }
}
exports.parse = parse;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/URL.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/URL.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var keyValueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/keyValue */ "./src/core/Gigya.Js/app/Utils/keyValue.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
function URLEncode(value) {
    return encodeURIComponent(value);
}
exports.URLEncode = URLEncode;
function URLDecode(value) {
    return decodeURIComponent(value.replace(/\+/g, ' '));
}
exports.URLDecode = URLDecode;
function URLDecodeRecursive(value) {
    var prevDecodingRes = '';
    var currDecodingRes = value;
    // keep decoding until we can't decode anymore
    while (currDecodingRes != prevDecodingRes) {
        // store the last decoding result
        prevDecodingRes = currDecodingRes;
        // decode the string once again
        currDecodingRes = URLDecode(prevDecodingRes);
    }
    return currDecodingRes;
}
exports.URLDecodeRecursive = URLDecodeRecursive;
function getParamsFromURL(url, keysToLower) {
    if (!url || url.indexOf('?') === -1) {
        return {};
    }
    return keyValueUtils.deserialize(url.split('#')[0].split('?')[1], '&', keysToLower);
}
exports.getParamsFromURL = getParamsFromURL;
function getParamValueFromURL(param, url, defaultValue) {
    if (null == url || '' == url) {
        return defaultValue;
    }
    var iqm = url.indexOf('?');
    if (iqm === -1) {
        return defaultValue;
    }
    var qs = '&' + url.substr(iqm + 1);
    var idx = qs.toLowerCase().indexOf('&' + param.toLowerCase() + '=');
    if (idx === -1) {
        return defaultValue;
    }
    var valAndMore = qs.substr(idx + (1 + param.length + 1)) + '&';
    idx = valAndMore.indexOf('&');
    return valAndMore.substr(0, idx);
}
exports.getParamValueFromURL = getParamValueFromURL;
function addParamsToURL(url, oParams) {
    var params = getParamsFromURL(url);
    objectUtils.add(params, oParams);
    var urlHashSplit = url.split('#');
    var finalUrl = urlHashSplit[0].split('?')[0] + '?' + keyValueUtils.serialize(params, '&');
    if (urlHashSplit.length > 1) {
        finalUrl += '#' + urlHashSplit[1];
    }
    return finalUrl;
}
exports.addParamsToURL = addParamsToURL;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/Uri.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/Uri.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var stringUtilsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringUtils */ "./src/core/Gigya.Js/app/Utils/stringUtils.ts");
var Uri = /** @class */ (function () {
    function Uri(url, isAbsolute) {
        if (isAbsolute === void 0) { isAbsolute = true; }
        this._anchor = document.createElement('a');
        var protocol = document.location.protocol == 'http:' ? 'http' : 'https';
        if (isAbsolute && url.indexOf('://') === -1 && url.charAt(0) !== '/')
            url = protocol + "://" + url;
        this._anchor.href = url;
    }
    Object.defineProperty(Uri.prototype, "domain", {
        get: function () {
            return this._anchor.hostname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "path", {
        get: function () {
            return this._anchor.pathname;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "href", {
        get: function () {
            return this._anchor.href;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "search", {
        get: function () {
            return this._anchor.search.slice(1);
        } // dropping '?'
        ,
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Uri.prototype, "hash", {
        get: function () {
            return this._anchor.hash.slice(1);
        } // dropping '#'
        ,
        enumerable: true,
        configurable: true
    });
    Uri.prototype.toString = function () {
        return this._anchor.href;
    };
    Uri.prototype.addToSearch = function (params) {
        for (var name in params) {
            var val = params[name];
            if ((typeof val == 'boolean' || typeof val == 'number' || typeof val == 'string') && name != 'eventName') {
                var addition = this._anchor.search ? '&' : '';
                this._anchor.search += "" + addition + name + "=" + encodeURIComponent(params[name]);
            }
        }
        return this;
    };
    Uri.prototype.fetch = function (retries) {
        if (retries === void 0) { retries = 0; }
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var _a, e_1;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _b.trys.push([0, 5, , 8]);
                        if (!window.fetch) return [3 /*break*/, 2];
                        return [4 /*yield*/, this.browserFetch()];
                    case 1:
                        _a = _b.sent();
                        return [3 /*break*/, 4];
                    case 2: return [4 /*yield*/, this.xhr()];
                    case 3:
                        _a = _b.sent();
                        _b.label = 4;
                    case 4: return [2 /*return*/, _a];
                    case 5:
                        e_1 = _b.sent();
                        if (retries <= 0)
                            throw new Error("fetch failed: " + e_1);
                        return [4 /*yield*/, this.delay(1)];
                    case 6:
                        _b.sent();
                        return [4 /*yield*/, this.fetch(retries - 1)];
                    case 7: return [2 /*return*/, _b.sent()];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    Uri.prototype.isBaseOf = function (url) {
        return Uri.parse(url).isIn(this);
    };
    Uri.prototype.isIn = function (base) {
        if (typeof base === 'string') {
            base = Uri.parse(base);
        }
        return ((this.domain == base.domain || // page is the base domain
            this.isSubDomainOf(base)) && // or sub-domain of it
            (!base.path || this.path.indexOf(base.path) == 0)); // page is also in base's defined path;
    };
    Uri.prototype.isForSubDomains = function () {
        return this.domain.indexOf('.') == 0;
    };
    Uri.prototype.isSubDomainOf = function (base) {
        var domain = '';
        if (!base.isForSubDomains())
            domain = '.';
        domain += base.domain;
        return stringUtilsUtils.endsWith(this.domain, domain);
    };
    Uri.parse = function (url, isAbsolute) {
        if (isAbsolute === void 0) { isAbsolute = true; }
        if (!url)
            return undefined;
        return new Uri(url, isAbsolute);
    };
    Uri.prototype.browserFetch = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var url, response;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        url = this.toString();
                        return [4 /*yield*/, window.fetch(url)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok)
                            throw new Error("fetch failed");
                        return [2 /*return*/, response.json()];
                }
            });
        });
    };
    Uri.prototype.xhr = function () {
        var url = this.toString();
        return new gigya.Promise(function (resolve, reject) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', url);
            xhr.send();
            xhr.onerror = reject;
            xhr.onload = function () {
                if (xhr.readyState !== 4 || xhr.status !== 200) {
                    return reject("xhr failed - " + xhr.status + " - " + xhr.statusText);
                }
                try {
                    var jsonResponse = JSON.parse(xhr.responseText);
                    return resolve(jsonResponse);
                }
                catch (e) {
                    return reject(e);
                }
            };
        });
    };
    Uri.prototype.delay = function (ms) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, new gigya.Promise(function (r) { return setTimeout(r, ms); })];
            });
        });
    };
    return Uri;
}());
exports.Uri = Uri;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/array.ts":
/*!**********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/array.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function indexOf(ar, o) {
    for (var i = 0; i < ar.length; i++) {
        if (ar[i] == o)
            return i;
    }
    return -1;
}
exports.indexOf = indexOf;
function clone(ar) {
    var ar2 = [];
    for (var i = 0; i < ar.length; i++) {
        ar2[i] = ar[i];
    }
    return ar2;
}
exports.clone = clone;
function removeByValue(ar, value) {
    if (!ar)
        return;
    for (var i = ar.length - 1; i >= 0; i--) {
        if (ar[i] == value) {
            ar.splice(i, 1);
        }
    }
}
exports.removeByValue = removeByValue;
function removeByProperty(ar, property, value) {
    if (!ar)
        return;
    for (var i = ar.length - 1; i >= 0; i--) {
        if (ar[i][property] == value) {
            ar.splice(i, 1);
        }
    }
}
exports.removeByProperty = removeByProperty;
function getArrayFromString(str, delimiter, lowerCase) {
    // check for string type in the input and not empty.
    if (!str || typeof str != 'string')
        return [];
    // lowercase if demended
    if (lowerCase)
        str = str.toLowerCase();
    // clean the string:
    str = str.replace(/[ ]/g, '').replace(/,,/g, ',');
    // if string empty
    if (!str)
        return [];
    // return array from string
    return str.split(delimiter);
}
exports.getArrayFromString = getArrayFromString;
function intersect(array) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    if (array == null)
        return [];
    var result = [];
    var argsLength = arguments.length;
    for (var i = 0, length = array.length; i < length; i++) {
        var item = array[i];
        if (this.indexOf(result, item) != -1)
            continue;
        for (var j = 1; j < argsLength; j++) {
            var arr = arguments[j];
            if (arr == null || this.indexOf(arr, item) == -1)
                break;
        }
        if (j === argsLength)
            result.push(item);
    }
    return result;
}
exports.intersect = intersect;
function lastIndexOf(arr, val, fromIndex) {
    if (fromIndex === void 0) { fromIndex = 0; }
    for (var i = arr.length; --i >= fromIndex;) {
        if (arr[i] === val)
            return i;
    }
    return -1;
}
exports.lastIndexOf = lastIndexOf;
function forEach(arr, action) {
    for (var i = 0; i < arr.length; ++i)
        action(arr[i], i, arr);
}
exports.forEach = forEach;
function forEachProp(obj, action) {
    for (var name in obj) {
        if (obj.hasOwnProperty(name))
            action(obj[name], name, obj);
    }
}
exports.forEachProp = forEachProp;
function some(arr, condition) {
    for (var i = 0; i < arr.length; ++i) {
        if (condition(arr[i], i, arr))
            return true;
    }
    return false;
}
exports.some = some;
function every(arr, condition) {
    for (var i = 0; i < arr.length; ++i) {
        if (!condition(arr[i], i, arr))
            return false;
    }
    return true;
}
exports.every = every;
function everyProp(obj, condition) {
    for (var name in obj) {
        if (obj.hasOwnProperty(name) && !condition(obj[name], name, obj))
            return false;
    }
    return true;
}
exports.everyProp = everyProp;
function map(arr, action) {
    var result = new Array();
    forEach(arr, function (item, idx, arr) { return result.push(action(item, idx, arr)); });
    return result;
}
exports.map = map;
function firstIndex(arr, condition) {
    var result = -1;
    some(arr, function (item, index, arr) {
        if (condition(item, index, arr)) {
            result = index;
            return true;
        }
        return false;
    });
    return result;
}
exports.firstIndex = firstIndex;
function first(arr, condition) {
    return arr[firstIndex(arr, condition)];
}
exports.first = first;
function getAllEnumValues(enumType) {
    var results = [];
    for (var i in enumType)
        if (typeof enumType[i] == 'number')
            results.push(enumType[i]);
    return results;
}
exports.getAllEnumValues = getAllEnumValues;
function getUniqueValues(arr) {
    for (var i = 0; i < arr.length; ++i) {
        for (var j = i + 1; j < arr.length; j++)
            if (arr[i] === arr[j]) {
                arr.splice(j, 1);
            }
    }
    return arr;
}
exports.getUniqueValues = getUniqueValues;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/browser.ts":
/*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/browser.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var userAgent = navigator.userAgent.toLowerCase();
var _cache = {
    version: null,
};
function isModern() {
    return (LocalInfo_1.localInfo.isChrome ||
        LocalInfo_1.localInfo.isFF ||
        LocalInfo_1.localInfo.isOpera ||
        LocalInfo_1.localInfo.isIOSWebView ||
        (LocalInfo_1.localInfo.isIE && getVersion() >= 9) ||
        LocalInfo_1.localInfo.isEdge ||
        (LocalInfo_1.localInfo.isSafari && getVersion() >= 4) ||
        LocalInfo_1.localInfo.isGoogleBot);
}
exports.isModern = isModern;
function getVersion() {
    if (_cache.version)
        return _cache.version;
    try {
        var versionArray = userAgent.match(/(opera|chrome|safari|firefox|msie|trident.*rv:)\/?\s*(\.?\d+(\.\d+)*)/i);
        if (versionArray[2]) {
            var majorVer = versionArray[2].split('.')[0];
            if (!isNaN(parseInt(majorVer))) {
                return (_cache.version = parseInt(majorVer));
            }
        }
    }
    catch (err) { }
    return 0;
}
exports.getVersion = getVersion;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/cookie.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/cookie.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
function _getBaseDomain() {
    return LocalInfo_1.localInfo.baseDomain || '';
}
exports._getBaseDomain = _getBaseDomain;
function getDefaultDomain(pageDomain, baseDomain) {
    if (pageDomain === void 0) { pageDomain = LocalInfo_1.localInfo.pageDomain; }
    if (baseDomain === void 0) { baseDomain = _getBaseDomain(); }
    var cookieDomain;
    cookieDomain =
        baseDomain.length > 0 && pageDomain.length >= baseDomain.length && pageDomain.lastIndexOf(baseDomain) === pageDomain.length - baseDomain.length
            ? baseDomain
            : pageDomain;
    return cookieDomain;
}
exports.getDefaultDomain = getDefaultDomain;
function get(name) {
    name = name.replace(/([.*+?^=!:${}()|[\]\/\\])/g, '\\$1').replace(/^[ \t]+|[ \t]+$/g, '');
    var regex = new RegExp('(?:^|;)\\s?' + name + '=(.*?)(?:;|$)');
    var match = document.cookie.match(regex);
    return match && unescape(match[1]);
}
exports.get = get;
function set(name, value, expires_in, cookieDomain, dontUseRootPath) {
    var pageDomain = LocalInfo_1.localInfo.pageDomain;
    if (cookieDomain == null) {
        cookieDomain = getDefaultDomain();
    }
    var expireMs;
    if (expires_in == null || expires_in === '' || isNaN(expires_in)) {
        expireMs = 1000 * getInfiniteExpirationTimeInSeconds();
    }
    else if (expires_in == 0) {
        // 0 means Session
        expireMs = null;
    }
    else {
        // Any other value is number of seconds (A negative value would mean expire now!)
        expireMs = expires_in * 1000;
    }
    var exdate = new Date();
    exdate.setTime(exdate.getTime() + expireMs);
    var cookieString = name +
        '=' +
        escape(value) +
        (dontUseRootPath ? '' : '; path=/') +
        (expireMs == null ? '' : '; expires=' + exdate.toUTCString()) +
        (cookieDomain && cookieDomain != '' && cookieDomain.indexOf('.') != -1 ? '; domain=' + cookieDomain : '');
    document.cookie = cookieString;
    // Some browsers like IE8 don't like some domains (e.g. domains of the form xx.yy)
    // http://stackoverflow.com/questions/1189638/internet-explorer-xx-yy-website-issue
    if ((!expireMs || expireMs > 0) && !get(name)) {
        cookieString =
            name +
                '=' +
                escape(value) +
                (dontUseRootPath ? '' : '; path=/') +
                (expireMs == null ? '' : '; expires=' + exdate.toUTCString()) +
                (pageDomain && pageDomain != '' && pageDomain.indexOf('.') != -1 ? '; domain=' + pageDomain : '');
        document.cookie = cookieString;
    }
}
exports.set = set;
function remove(name) {
    var pageDomain = LocalInfo_1.localInfo.pageDomain;
    var baseDomain = _getBaseDomain();
    if (baseDomain.length > 0 && pageDomain.length >= baseDomain.length && pageDomain.lastIndexOf(baseDomain) === pageDomain.length - baseDomain.length) {
        set(name, '', -1, baseDomain); // remove also from the subDomain.
        set(name, '', -1, baseDomain, true);
    }
    set(name, '', -1, LocalInfo_1.localInfo.pageDomain);
    set(name, '', -1, LocalInfo_1.localInfo.pageDomain, true);
    set(name, '', -1, '');
    set(name, '', -1, '', true);
}
exports.remove = remove;
function getInfiniteExpirationTimeInSeconds() {
    // Set expiration time to 1 years
    return 60 * 60 * 24 * 365;
}
exports.getInfiniteExpirationTimeInSeconds = getInfiniteExpirationTimeInSeconds;
function canSaveCookie(doc) {
    if (doc === void 0) { doc = document; }
    var d = new Date(new Date().getTime() + 1000); // 1 second expiration.
    try {
        doc.cookie = 'gig3pctest=true;expires=' + d['toGMTString']();
        return doc.cookie.indexOf('gig3pctest') !== -1;
    }
    catch (e) {
        // iOS 10 webview throws in some scenarios
        return false;
    }
}
exports.canSaveCookie = canSaveCookie;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/date.ts":
/*!*********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/date.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function now() {
    return Date.now();
}
exports.now = now;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/delegate.ts":
/*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/delegate.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function create(scope, method) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return method.apply(scope, args);
    };
}
exports.create = create;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/domains.ts":
/*!************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/domains.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Uri_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var stringUtilsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringUtils */ "./src/core/Gigya.Js/app/Utils/stringUtils.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var gigyaDomainNamespaces = ['socialize', 'accounts', 'fidm', 'gm', 'comments', 'gcs', 'ids', 'ds', 'gscounters'];
function apiDomainFactory(apiDomain, defaultApiDomain) {
    if (apiDomain === void 0) { apiDomain = resolveApiDomain(); }
    if (defaultApiDomain === void 0) { defaultApiDomain = window.gigya.defaultApiDomain; }
    var shouldAddNamespace = Uri_1.Uri.parse(apiDomain).isIn(Uri_1.Uri.parse(defaultApiDomain));
    return function (namespace) {
        if (namespace && shouldAddNamespace) {
            var subDomain = namespace.split('.')[0];
            if (gigyaDomainNamespaces.indexOf(subDomain) == -1) {
                window.gigya.logger.error("trying to send request to an invalid domain");
                subDomain = gigyaDomainNamespaces[0];
            }
            return subDomain + "." + apiDomain;
        }
        else {
            return apiDomain;
        }
    };
}
exports.apiDomainFactory = apiDomainFactory;
function getGigyaDomain(namespace, dataCenter, defaultDomain) {
    if (dataCenter === void 0) { dataCenter = window.gigya.dataCenter; }
    if (defaultDomain === void 0) { defaultDomain = window.gigya.defaultApiDomain; }
    var domain = dataCenter + "." + defaultDomain;
    if (namespace)
        return namespace + "." + domain;
    else
        return domain;
}
exports.getGigyaDomain = getGigyaDomain;
function getBaseDomain(baseDomains, currentDomain, defaultDomains) {
    if (baseDomains === void 0) { baseDomains = window.gigya.partnerSettings.baseDomains; }
    if (currentDomain === void 0) { currentDomain = location.hostname; }
    if (defaultDomains === void 0) { defaultDomains = ['gigya.com', 'gigya-api.cn', window.gigya.defaultApiDomain]; }
    // #49786 - Support webview without hostname.
    if (!currentDomain) {
        return '';
    }
    if (typeof baseDomains == 'string') {
        baseDomains = baseDomains.split(',');
    }
    var originURI = Uri_1.Uri.parse(currentDomain);
    if (defaultDomains) {
        baseDomains = baseDomains.concat(defaultDomains);
    }
    for (var _i = 0, baseDomains_1 = baseDomains; _i < baseDomains_1.length; _i++) {
        var rawDomain = baseDomains_1[_i];
        // This does not take care of wildcards in the middle of string.
        var baseDomain = stringUtilsUtils.replaceAll(rawDomain, '*', '');
        var baseUri = Uri_1.Uri.parse(baseDomain);
        if (baseUri && originURI.isIn(baseUri)) {
            if (baseUri.isForSubDomains()) {
                return originURI.domain;
            }
            else {
                return baseUri.domain;
            }
        }
    }
    // fallback to the parent's window domain (for backward compatibility).
    return originURI.domain;
}
exports.getBaseDomain = getBaseDomain;
function resolveApiDomain(customApiDomainPrefix, baseDomain, dataCenter, defaultApiDomain) {
    if (customApiDomainPrefix === void 0) { customApiDomainPrefix = window.gigya.partnerSettings && window.gigya.partnerSettings.customAPIDomainPrefix; }
    if (baseDomain === void 0) { baseDomain = LocalInfo_1.localInfo.baseDomain; }
    if (dataCenter === void 0) { dataCenter = window.gigya.dataCenter; }
    if (defaultApiDomain === void 0) { defaultApiDomain = window.gigya.defaultApiDomain; }
    if (customApiDomainPrefix && baseDomain && baseDomain !== defaultApiDomain) {
        return customApiDomainPrefix + "." + baseDomain;
    }
    else {
        return getGigyaDomain(undefined, dataCenter, defaultApiDomain);
    }
}
exports.resolveApiDomain = resolveApiDomain;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/functions.ts":
/*!**************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/functions.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var cdn_1 = __webpack_require__(/*! src/core/Gigya.Js/app/cdn */ "./src/core/Gigya.Js/app/cdn.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
function callFunction(name, arParams) {
    var fn = eval(name);
    var arParts = name.split('.');
    arParts.splice(arParts.length - 1, 1);
    var scope = eval(arParts.join('.'));
    fn.apply(scope, arParams);
}
exports.callFunction = callFunction;
function invokeOnPageLoad(func, completeOnly) {
    if ((!document.readyState && document.body) ||
        document.readyState === 'complete' ||
        (!completeOnly && document.readyState === 'interactive' && document.body)) {
        func();
    }
    else {
        var called_1 = false;
        var fnOnLoad = function () {
            if (!called_1) {
                called_1 = true;
                func();
            }
        };
        window.setTimeout(fnOnLoad, 20000); // fallback - sometimes readystate stays stuck on interactive
        DOMUtils.addEventListener(window, 'load', fnOnLoad);
        DOMUtils.addEventListener(document, 'DOMContentLoaded', fnOnLoad);
    }
}
exports.invokeOnPageLoad = invokeOnPageLoad;
function createAlias(publicName, fnc) {
    var arNameSegments = publicName.split('.');
    var oCurrentSegment = window;
    for (var iSegment = 0; iSegment < arNameSegments.length - 1; iSegment++) {
        var sSegment = arNameSegments[iSegment];
        if (!oCurrentSegment[sSegment]) {
            oCurrentSegment[sSegment] = {};
        }
        oCurrentSegment = oCurrentSegment[sSegment];
    }
    oCurrentSegment[arNameSegments[arNameSegments.length - 1]] = fnc;
}
exports.createAlias = createAlias;
function debounce(fn, delayMilliseconds) {
    var timer = undefined;
    return function () {
        if (timer !== undefined) {
            clearTimeout(timer);
        }
        timer = setTimeout(function () {
            timer = undefined;
            fn();
        }, delayMilliseconds);
    };
}
exports.debounce = debounce;
function addSrcToIFrameIfNeeded(iframe, src) {
    if (src === void 0) { src = cdn_1.getCdnResource('/'); }
    if (LocalInfo_1.localInfo.isIOSWebView || (LocalInfo_1.localInfo.isIOS && LocalInfo_1.localInfo.isWeChat)) {
        iframe.setAttribute('src', src);
    }
}
exports.addSrcToIFrameIfNeeded = addSrcToIFrameIfNeeded;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/gigyaScriptEl.ts":
/*!******************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/gigyaScriptEl.ts ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var gigyaCdnRegex = /\/\/cdn(s)?\.(ru1\.)?gigya.com/;
var fileNames = ['gigya.js', 'socialize.js', 'socialize2.js', 'gsjssdk.js'];
function getGigyaScriptElement() {
    var scriptElement;
    var scripts = document.getElementsByTagName('script');
    var _loop_1 = function (i) {
        var script = scripts[i];
        var src = script.src.toLowerCase();
        if (src !== '') {
            if (gigyaCdnRegex.test(src) || src.indexOf('?apikey=') > -1) {
                var isFileNameExistInSrc = fileNames.length === 0 || fileNames.some(function (fileName) { return src.indexOf(fileName) > -1; });
                if (isFileNameExistInSrc) {
                    scriptElement = script;
                    return "break";
                }
            }
        }
    };
    for (var i = scripts.length - 1; i >= 0; i--) {
        var state_1 = _loop_1(i);
        if (state_1 === "break")
            break;
    }
    return scriptElement;
}
exports.getGigyaScriptElement = getGigyaScriptElement;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/gltexp.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/gltexp.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function isValid(gltexp) {
    return getMillis(gltexp) > Date.now();
}
exports.isValid = isValid;
function getMax() {
    var gltexps = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        gltexps[_i] = arguments[_i];
    }
    if (!gltexps || !gltexps.length)
        return undefined;
    return gltexps.sort(function (gltexpA, gltexpB) { return getMillis(gltexpB) - getMillis(gltexpA); })[0];
}
exports.getMax = getMax;
function getMillis(gltExp) {
    return !gltExp ? 0 : Number(gltExp.substr(0, gltExp.indexOf('_'))) * 1000;
}
exports.getMillis = getMillis;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/index.ts":
/*!**********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/index.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var GigyaUtilsArray = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/array */ "./src/core/Gigya.Js/app/Utils/array.ts");
var GigyaUtilsBrowser = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/browser */ "./src/core/Gigya.Js/app/Utils/browser.ts");
var GigyaUtilsCookie = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/cookie */ "./src/core/Gigya.Js/app/Utils/cookie.ts");
var GigyaUtilsDate = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/date */ "./src/core/Gigya.Js/app/Utils/date.ts");
var GigyaUtilsDelegate = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/delegate */ "./src/core/Gigya.Js/app/Utils/delegate.ts");
var GigyaUtilsDOM = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var GigyaUtilsDomains = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/domains */ "./src/core/Gigya.Js/app/Utils/domains.ts");
var GigyaUtilsFunctions = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
var GigyaUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/gigyaScriptEl */ "./src/core/Gigya.Js/app/Utils/gigyaScriptEl.ts");
var GigyaUtilsGltexp = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/gltexp */ "./src/core/Gigya.Js/app/Utils/gltexp.ts");
var GigyaUtilsHTTP = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/HTTP */ "./src/core/Gigya.Js/app/Utils/HTTP.ts");
var GigyaUtilsJSON = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var GigyaUtilsKeyboard = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/keyboard */ "./src/core/Gigya.Js/app/Utils/keyboard.ts");
var GigyaUtilsKeyValue = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/keyValue */ "./src/core/Gigya.Js/app/Utils/keyValue.ts");
var GigyaUtilsLocalStorage = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/localStorage */ "./src/core/Gigya.Js/app/Utils/localStorage.ts");
var GigyaUtilsMouse = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/mouse */ "./src/core/Gigya.Js/app/Utils/mouse.ts");
var GigyaUtilsObject = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var GigyaUtilsQueue = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/queue */ "./src/core/Gigya.Js/app/Utils/queue.ts");
var GigyaUtilsSanitize = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/sanitize */ "./src/core/Gigya.Js/app/Utils/sanitize.ts");
var GigyaUtilsScript = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/script */ "./src/core/Gigya.Js/app/Utils/script.ts");
var GigyaUtilsSessionCache = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/sessionCache */ "./src/core/Gigya.Js/app/Utils/sessionCache.ts");
var GigyaUtils_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringParams */ "./src/core/Gigya.Js/app/Utils/stringParams.ts");
var GigyaUtilsStringUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringUtils */ "./src/core/Gigya.Js/app/Utils/stringUtils.ts");
var GigyaUtils_2 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/tabbable */ "./src/core/Gigya.Js/app/Utils/tabbable.ts");
var GigyaUtilsTemplates = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/templates */ "./src/core/Gigya.Js/app/Utils/templates.ts");
var GigyaUtilsUri = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var GigyaUtilsURL = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var GigyaUtilsValidation = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/validation */ "./src/core/Gigya.Js/app/Utils/validation.ts");
var GigyaUtilsViewport = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/viewport */ "./src/core/Gigya.Js/app/Utils/viewport.ts");
var GigyaUtilsWin = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/win */ "./src/core/Gigya.Js/app/Utils/win.ts");
var GigyaUtilsXd = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/xd */ "./src/core/Gigya.Js/app/Utils/xd.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya.utils) {
    window.gigya.utils = {};
}
if (!window.gigya.utils.array) {
    window.gigya.utils.array = {};
}
if (!window.gigya.utils.browser) {
    window.gigya.utils.browser = {};
}
if (!window.gigya.utils.cookie) {
    window.gigya.utils.cookie = {};
}
if (!window.gigya.utils.date) {
    window.gigya.utils.date = {};
}
if (!window.gigya.utils.delegate) {
    window.gigya.utils.delegate = {};
}
if (!window.gigya.utils.DOM) {
    window.gigya.utils.DOM = {};
}
if (!window.gigya.utils.functions) {
    window.gigya.utils.functions = {};
}
if (!window.gigya.utils.gltexp) {
    window.gigya.utils.gltexp = {};
}
if (!window.gigya.utils.HTTP) {
    window.gigya.utils.HTTP = {};
}
if (!window.gigya.utils.JSON) {
    window.gigya.utils.JSON = {};
}
if (!window.gigya.utils.keyboard) {
    window.gigya.utils.keyboard = {};
}
if (!window.gigya.utils.keyValue) {
    window.gigya.utils.keyValue = {};
}
if (!window.gigya.utils.localStorage) {
    window.gigya.utils.localStorage = {};
}
if (!window.gigya.utils.mouse) {
    window.gigya.utils.mouse = {};
}
if (!window.gigya.utils.object) {
    window.gigya.utils.object = {};
}
if (!window.gigya.utils.queue) {
    window.gigya.utils.queue = {};
}
if (!window.gigya.utils.sanitize) {
    window.gigya.utils.sanitize = {};
}
if (!window.gigya.utils.script) {
    window.gigya.utils.script = {};
}
if (!window.gigya.utils.sessionCache) {
    window.gigya.utils.sessionCache = {};
}
if (!window.gigya.utils.stringUtils) {
    window.gigya.utils.stringUtils = {};
}
if (!window.gigya.utils.templates) {
    window.gigya.utils.templates = {};
}
if (!window.gigya.utils.URL) {
    window.gigya.utils.URL = {};
}
if (!window.gigya.utils.validation) {
    window.gigya.utils.validation = {};
}
if (!window.gigya.utils.viewport) {
    window.gigya.utils.viewport = {};
}
if (!window.gigya.utils.win) {
    window.gigya.utils.win = {};
}
if (!window.gigya.utils.xd) {
    window.gigya.utils.xd = {};
}
__webpack_provided_Object_dot_assign(window.gigya._, GigyaUtilsUri, GigyaUtilsDomains);
__webpack_provided_Object_dot_assign(window.gigya.utils.array, GigyaUtilsArray);
__webpack_provided_Object_dot_assign(window.gigya.utils.browser, GigyaUtilsBrowser);
__webpack_provided_Object_dot_assign(window.gigya.utils.cookie, GigyaUtilsCookie);
__webpack_provided_Object_dot_assign(window.gigya.utils.date, GigyaUtilsDate);
__webpack_provided_Object_dot_assign(window.gigya.utils.delegate, GigyaUtilsDelegate);
__webpack_provided_Object_dot_assign(window.gigya.utils.DOM, GigyaUtilsDOM);
__webpack_provided_Object_dot_assign(window.gigya.utils.functions, GigyaUtilsFunctions);
__webpack_provided_Object_dot_assign(window.gigya.utils, GigyaUtils, GigyaUtils_1, GigyaUtils_2);
__webpack_provided_Object_dot_assign(window.gigya.utils.gltexp, GigyaUtilsGltexp);
__webpack_provided_Object_dot_assign(window.gigya.utils.HTTP, GigyaUtilsHTTP);
__webpack_provided_Object_dot_assign(window.gigya.utils.JSON, GigyaUtilsJSON);
__webpack_provided_Object_dot_assign(window.gigya.utils.keyboard, GigyaUtilsKeyboard);
__webpack_provided_Object_dot_assign(window.gigya.utils.keyValue, GigyaUtilsKeyValue);
__webpack_provided_Object_dot_assign(window.gigya.utils.localStorage, GigyaUtilsLocalStorage);
__webpack_provided_Object_dot_assign(window.gigya.utils.mouse, GigyaUtilsMouse);
__webpack_provided_Object_dot_assign(window.gigya.utils.object, GigyaUtilsObject);
__webpack_provided_Object_dot_assign(window.gigya.utils.queue, GigyaUtilsQueue);
__webpack_provided_Object_dot_assign(window.gigya.utils.sanitize, GigyaUtilsSanitize);
__webpack_provided_Object_dot_assign(window.gigya.utils.script, GigyaUtilsScript);
__webpack_provided_Object_dot_assign(window.gigya.utils.sessionCache, GigyaUtilsSessionCache);
__webpack_provided_Object_dot_assign(window.gigya.utils.stringUtils, GigyaUtilsStringUtils);
__webpack_provided_Object_dot_assign(window.gigya.utils.templates, GigyaUtilsTemplates);
__webpack_provided_Object_dot_assign(window.gigya.utils.URL, GigyaUtilsURL);
__webpack_provided_Object_dot_assign(window.gigya.utils.validation, GigyaUtilsValidation);
__webpack_provided_Object_dot_assign(window.gigya.utils.viewport, GigyaUtilsViewport);
__webpack_provided_Object_dot_assign(window.gigya.utils.win, GigyaUtilsWin);
__webpack_provided_Object_dot_assign(window.gigya.utils.xd, GigyaUtilsXd);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/keyValue.ts":
/*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/keyValue.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var URLUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
function serialize(oKeyValue, delimiter) {
    var a = [];
    if (!delimiter) {
        delimiter = '&';
    }
    for (var p in oKeyValue) {
        switch (typeof oKeyValue[p]) {
            case 'function':
                break;
            case 'object':
                if (oKeyValue[p] != null) {
                    a.push(p + '=' + URLUtils.URLEncode(JSONUtils.serialize(oKeyValue[p])));
                }
                break;
            case 'undefined':
                break;
            default:
                a.push(p + '=' + URLUtils.URLEncode(oKeyValue[p]));
        }
    }
    var s = a.join(delimiter);
    return s;
}
exports.serialize = serialize;
function deserialize(urlEncodedString, delimiter, keysToLower, useUnescape) {
    var o = {};
    if (!urlEncodedString) {
        return o;
    }
    if (!delimiter) {
        delimiter = '&';
    }
    var pairs = urlEncodedString.split(delimiter);
    for (var iPair = 0; iPair < pairs.length; iPair++) {
        var pair = pairs[iPair];
        var eqPos = pair.indexOf('=');
        if (eqPos === -1) {
            var key = keysToLower ? pair.toLowerCase() : pair;
            o[key] = '1';
        }
        else {
            var key = pair.substr(0, eqPos);
            if (keysToLower) {
                key = key.toLowerCase();
            }
            var serializedValue = pair.substr(eqPos + 1).replace(/\+/g, ' ');
            try {
                o[key] = useUnescape ? unescape(serializedValue) : URLUtils.URLDecode(serializedValue);
            }
            catch (ex) {
                o[key] = unescape(serializedValue);
            }
        }
    }
    return o;
}
exports.deserialize = deserialize;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/keyboard.ts":
/*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/keyboard.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var Keys;
(function (Keys) {
    Keys[Keys["escape"] = 27] = "escape";
    Keys[Keys["backspace"] = 8] = "backspace";
    Keys[Keys["enter"] = 13] = "enter";
})(Keys = exports.Keys || (exports.Keys = {}));
function onHotKeyClicked(hotKeyData, handler) {
    var htmlContext = hotKeyData.elementContext ? hotKeyData.elementContext : document.body;
    DOMUtils.addEventListener(htmlContext, 'keyup', function (event) {
        if (event.which == hotKeyData.key) {
            handler();
        }
    });
}
exports.onHotKeyClicked = onHotKeyClicked;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/localStorage.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/localStorage.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var scriptUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/script */ "./src/core/Gigya.Js/app/Utils/script.ts");
var cookieUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/cookie */ "./src/core/Gigya.Js/app/Utils/cookie.ts");
var AbstractLocalStorageAdapter = /** @class */ (function () {
    function AbstractLocalStorageAdapter() {
    }
    AbstractLocalStorageAdapter.getName = function () {
        return 'AbstractAdapter';
    };
    /**
     * Set object to storage.
     */
    AbstractLocalStorageAdapter.prototype.setObject = function (key, o) {
        this.setItem(key, JSONUtils.serialize(o));
    };
    /**
     * Get object from local storage.
     */
    AbstractLocalStorageAdapter.prototype.getObject = function (key, defaultValue) {
        return JSONUtils.deserialize(this.getItem(key), defaultValue);
    };
    /**
     * Is persistent storage. Returns false when data is not persisted.
     */
    AbstractLocalStorageAdapter.prototype.isPersistent = function () {
        return true;
    };
    return AbstractLocalStorageAdapter;
}());
exports.AbstractLocalStorageAdapter = AbstractLocalStorageAdapter;
var AbstractAsyncLocalStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(AbstractAsyncLocalStorageAdapter, _super);
    function AbstractAsyncLocalStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.isLoaded = false;
        return _this;
    }
    AbstractAsyncLocalStorageAdapter.prototype.isReady = function () {
        return this.isLoaded;
    };
    /**
     * Used when there is initialization time on the local storage adapter.
     */
    AbstractAsyncLocalStorageAdapter.prototype.waitForService = function (callback) {
        var _this = this;
        if (this.isReady()) {
            callback();
            return;
        }
        else {
            setTimeout(function () { return _this.waitForService(callback); }, 50);
        }
    };
    return AbstractAsyncLocalStorageAdapter;
}(AbstractLocalStorageAdapter));
exports.AbstractAsyncLocalStorageAdapter = AbstractAsyncLocalStorageAdapter;
var StorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(StorageAdapter, _super);
    function StorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    StorageAdapter.prototype.getItem = function (key) {
        return this.storage[key];
    };
    StorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        try {
            this.storage[key] = value;
        }
        catch (ex) { }
    };
    StorageAdapter.prototype.removeItem = function (key) {
        this.storage.removeItem(key);
    };
    return StorageAdapter;
}(AbstractLocalStorageAdapter));
var LocalStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(LocalStorageAdapter, _super);
    function LocalStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.storage = window.localStorage;
        return _this;
    }
    LocalStorageAdapter.getName = function () {
        return 'LocalStorageAdapter';
    };
    LocalStorageAdapter.isAvailable = function () {
        return LocalInfo_1.localInfo.supportsLocalStorage;
    };
    return LocalStorageAdapter;
}(StorageAdapter));
var SessionStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(SessionStorageAdapter, _super);
    function SessionStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.storage = window.sessionStorage;
        return _this;
    }
    SessionStorageAdapter.getName = function () {
        return 'SessionStorageAdapter';
    };
    SessionStorageAdapter.isAvailable = function () {
        return LocalInfo_1.localInfo.supportsSessionStorage;
    };
    return SessionStorageAdapter;
}(StorageAdapter));
var FirefoxStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(FirefoxStorageAdapter, _super);
    function FirefoxStorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirefoxStorageAdapter.isAvailable = function () {
        return LocalInfo_1.localInfo.isFF && window['globalStorage'];
    };
    FirefoxStorageAdapter.getName = function () {
        return 'FirefoxStorageAdapter';
    };
    FirefoxStorageAdapter.prototype.getItem = function (key) {
        return window['globalStorage'][location.hostname][key];
    };
    FirefoxStorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        try {
            window['globalStorage'][location.hostname][key] = value;
        }
        catch (ex) { }
    };
    FirefoxStorageAdapter.prototype.removeItem = function (key) {
        delete window['globalStorage'][location.hostname][key];
    };
    return FirefoxStorageAdapter;
}(AbstractLocalStorageAdapter));
var FlashAsyncStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(FlashAsyncStorageAdapter, _super);
    function FlashAsyncStorageAdapter() {
        var _this = _super.call(this) || this;
        // Load SWF store library.
        _this.loadSwfStore(function (isSuccess) {
            _this.isLoaded = true;
        });
        return _this;
    }
    FlashAsyncStorageAdapter.isAvailable = function () {
        // There is no current scenario where using Flash Storage is helpful outside of IE.
        return LocalInfo_1.localInfo.supportsFlash && (LocalInfo_1.localInfo.isIE || LocalInfo_1.localInfo.isEdge);
    };
    FlashAsyncStorageAdapter.getName = function () {
        return 'FlashAsyncStorageAdapter';
    };
    /**
     * First, load the JavaScript swfstore SDK.
     */
    FlashAsyncStorageAdapter.prototype.loadSwfStore = function (callback) {
        var _this = this;
        // Load SwfStore if necessary.
        if (window['SwfStore']) {
            this.initializeSwfStore(function () { return _this.loadSwfStore(callback); });
            return;
        }
        scriptUtils.load('https://cdns.gigya.com/gs/js/swfstore.min.js', function () {
            // Error handler.
            console.log('Failed to load Gigya SwfStore.');
            callback(false);
        }, function () {
            // Success handler.
            _this.initializeSwfStore(callback);
        }, true);
    };
    /**
     * Iniitalize the SwfStore class.
     */
    FlashAsyncStorageAdapter.prototype.initializeSwfStore = function (callback) {
        this.swfStore = new SwfStore({
            namespace: 'gigSSO',
            swf_url: 'https://cdns.gigya.com/gs/swf/swfstore.swf',
            onready: function () {
                callback(true);
            },
            onerror: function () {
                console.log('Failed to initialize Gigya SwfStore.');
                callback(false);
            },
        });
    };
    FlashAsyncStorageAdapter.prototype.getItem = function (key) {
        return this.swfStore.get(key);
    };
    FlashAsyncStorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        this.swfStore.set(key, value);
    };
    FlashAsyncStorageAdapter.prototype.removeItem = function (key) {
        this.swfStore.clear(key);
    };
    return FlashAsyncStorageAdapter;
}(AbstractAsyncLocalStorageAdapter));
var CookieStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(CookieStorageAdapter, _super);
    function CookieStorageAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CookieStorageAdapter.isAvailable = function () {
        return cookieUtils.canSaveCookie();
    };
    CookieStorageAdapter.getName = function () {
        return 'CookieStorageAdapter';
    };
    CookieStorageAdapter.prototype.getItem = function (key) {
        return cookieUtils.get(key);
    };
    CookieStorageAdapter.prototype.setItem = function (key, value, expiresIn, domain) {
        cookieUtils.set(key, value, expiresIn, domain);
    };
    CookieStorageAdapter.prototype.removeItem = function (key) {
        cookieUtils.remove(key);
    };
    return CookieStorageAdapter;
}(AbstractLocalStorageAdapter));
exports.CookieStorageAdapter = CookieStorageAdapter;
var MemoryStorageAdapter = /** @class */ (function (_super) {
    tslib_1.__extends(MemoryStorageAdapter, _super);
    function MemoryStorageAdapter() {
        var _this = _super.call(this) || this;
        _this.memory = {};
        return _this;
    }
    MemoryStorageAdapter.isAvailable = function () {
        return true;
    };
    MemoryStorageAdapter.getName = function () {
        return 'MemoryStorageAdapter';
    };
    MemoryStorageAdapter.prototype.getItem = function (key) {
        return this.memory[key];
    };
    MemoryStorageAdapter.prototype.setItem = function (key, value, expiresIn) {
        this.memory[key] = value;
    };
    MemoryStorageAdapter.prototype.removeItem = function (key) {
        delete this.memory[key];
    };
    /**
     * Is persistent storage. Returns false when data is not persisted.
     */
    MemoryStorageAdapter.prototype.isPersistent = function () {
        return false;
    };
    return MemoryStorageAdapter;
}(AbstractLocalStorageAdapter));
exports.MemoryStorageAdapter = MemoryStorageAdapter;
exports.adapters = [
    LocalStorageAdapter,
    SessionStorageAdapter,
    FirefoxStorageAdapter,
    FlashAsyncStorageAdapter,
    CookieStorageAdapter,
    MemoryStorageAdapter,
];
exports.instances = {};
function initializeAdapter(adapter) {
    var adapterName = adapter.getName() || adapter.name;
    if (!exports.instances[adapterName]) {
        exports.instances[adapterName] = new adapter();
    }
    return exports.instances[adapterName];
}
exports.initializeAdapter = initializeAdapter;
function waitForService(callback) {
    // Select compatible adapter.
    var storage;
    for (var _i = 0, adapters_1 = exports.adapters; _i < adapters_1.length; _i++) {
        var adapter_1 = adapters_1[_i];
        if (adapter_1.isAvailable()) {
            // Don't select adapter if it's async and a callback wasn't provided.
            if (adapter_1.prototype instanceof AbstractAsyncLocalStorageAdapter && !callback) {
                continue;
            }
            storage = initializeAdapter(adapter_1);
            break;
        }
    }
    // Fallback to memory-based non-persistent storage.
    if (!storage) {
        storage = initializeAdapter(MemoryStorageAdapter);
    }
    // Trigger callback when adapter finishes loading (or instantly, if not required to wait).
    if (callback) {
        if (storage instanceof AbstractAsyncLocalStorageAdapter) {
            storage.waitForService(function () {
                callback(storage);
            });
        }
        else {
            callback(storage);
        }
    }
    return storage;
}
exports.waitForService = waitForService;
var adapter = waitForService();
function getItem(key) {
    return adapter.getItem(key);
}
exports.getItem = getItem;
function setItem(key, value, expiresIn) {
    return adapter.setItem(key, value, expiresIn);
}
exports.setItem = setItem;
function removeItem(key) {
    return adapter.removeItem(key);
}
exports.removeItem = removeItem;
function setObject(key, o) {
    return adapter.setObject(key, o);
}
exports.setObject = setObject;
function getObject(key, defaultValue) {
    return adapter.getObject(key, defaultValue);
}
exports.getObject = getObject;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/mouse.ts":
/*!**********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/mouse.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var mouseEventObject = null;
function getPosition() {
    var posx = 0;
    var posy = 0;
    if (document.body) {
        var e = mouseEventObject;
        if (!e)
            e = { clientX: 0, clientY: 0 };
        if (e.pageX || e.pageY) {
            posx = e.pageX;
            posy = e.pageY;
        }
        else if (e.clientX || e.clientY) {
            posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
            posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        return { x: posx, y: posy };
    }
}
exports.getPosition = getPosition;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/object.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/object.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
function removeUndefined(o) {
    var o2 = {};
    for (var p in o) {
        if (o[p] != null && o[p] != undefined) {
            o2[p] = o[p];
        }
    }
    return o2;
}
exports.removeUndefined = removeUndefined;
function expressionHelper(context) {
    context = context || {};
    return {
        getField: function (path) {
            if (!path)
                return undefined;
            var paths = path.split('.'), current = context, i;
            for (i = 0; i < paths.length; ++i) {
                if (current[paths[i]] == undefined) {
                    return undefined;
                }
                else {
                    current = current[paths[i]];
                }
            }
            return current;
        },
    };
}
exports.expressionHelper = expressionHelper;
function getPropertyBySerializedName(o, name, createMissingObjects) {
    if (!name)
        return o;
    var oResult = o;
    var arNameSegments = name.split('.');
    for (var iSegment = 0; iSegment < arNameSegments.length; iSegment++) {
        var sSegment = arNameSegments[iSegment];
        var sIndex = null;
        //Support for array access. i.e. "obj.prop1[0].prop2"
        if (sSegment.match(/\[[0-9]]/)) {
            sIndex = Number(sSegment.match(/\[[0-9]]/)[0].replace(/[\[\]]/g, ''));
        }
        sSegment = sSegment.split(/\[[0-9]]/).join('');
        var res = (sIndex || sIndex === 0) && oResult[sSegment] ? oResult[sSegment][sIndex] : oResult[sSegment];
        if (createMissingObjects && !oResult[sSegment]) {
            oResult[sSegment] = {};
        }
        else if (createMissingObjects && !res && res !== false) {
            oResult[sSegment] = [];
        }
        if (res || res === false) {
            oResult = res;
        }
        else {
            return null;
        }
    }
    return oResult;
}
exports.getPropertyBySerializedName = getPropertyBySerializedName;
function setPropertyBySerializedName(o, name, value) {
    var arNameSegments = name.split('.');
    var propertyName = arNameSegments.pop();
    getPropertyBySerializedName(o, arNameSegments.join('.'), true)[propertyName] = value;
}
exports.setPropertyBySerializedName = setPropertyBySerializedName;
function add(oTarget, o, dontOverride) {
    for (var p in o) {
        if (!dontOverride || typeof oTarget[p] === 'undefined') {
            oTarget[p] = o[p];
        }
    }
}
exports.add = add;
function getHash(o) {
    var ar = [];
    for (var p in o) {
        var s;
        if (typeof o[p] == 'object')
            s = JSONUtils.serialize(o[p], false);
        else if (o[p])
            s = o[p].toString();
        ar.push(p + '=' + s);
    }
    return ar.sort().join('&');
}
exports.getHash = getHash;
function getMurmurHash(key, seed) {
    if (!seed)
        seed = 0;
    var remainder, bytes, h1, h1b, c1, c1b, c2, c2b, k1, i;
    remainder = key.length & 3; // key.length % 4
    bytes = key.length - remainder;
    h1 = seed;
    c1 = 0xcc9e2d51;
    c2 = 0x1b873593;
    i = 0;
    while (i < bytes) {
        k1 = (key.charCodeAt(i) & 0xff) | ((key.charCodeAt(++i) & 0xff) << 8) | ((key.charCodeAt(++i) & 0xff) << 16) | ((key.charCodeAt(++i) & 0xff) << 24);
        ++i;
        k1 = ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
        k1 = (k1 << 15) | (k1 >>> 17);
        k1 = ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
        h1 ^= k1;
        h1 = (h1 << 13) | (h1 >>> 19);
        h1b = ((h1 & 0xffff) * 5 + ((((h1 >>> 16) * 5) & 0xffff) << 16)) & 0xffffffff;
        h1 = (h1b & 0xffff) + 0x6b64 + ((((h1b >>> 16) + 0xe654) & 0xffff) << 16);
    }
    k1 = 0;
    switch (remainder) {
        case 3:
            k1 ^= (key.charCodeAt(i + 2) & 0xff) << 16;
        case 2:
            k1 ^= (key.charCodeAt(i + 1) & 0xff) << 8;
        case 1:
            k1 ^= key.charCodeAt(i) & 0xff;
            k1 = ((k1 & 0xffff) * c1 + ((((k1 >>> 16) * c1) & 0xffff) << 16)) & 0xffffffff;
            k1 = (k1 << 15) | (k1 >>> 17);
            k1 = ((k1 & 0xffff) * c2 + ((((k1 >>> 16) * c2) & 0xffff) << 16)) & 0xffffffff;
            h1 ^= k1;
    }
    h1 ^= key.length;
    h1 ^= h1 >>> 16;
    h1 = ((h1 & 0xffff) * 0x85ebca6b + ((((h1 >>> 16) * 0x85ebca6b) & 0xffff) << 16)) & 0xffffffff;
    h1 ^= h1 >>> 13;
    h1 = ((h1 & 0xffff) * 0xc2b2ae35 + ((((h1 >>> 16) * 0xc2b2ae35) & 0xffff) << 16)) & 0xffffffff;
    h1 ^= h1 >>> 16;
    return h1 >>> 0;
}
exports.getMurmurHash = getMurmurHash;
function clone(obj, deepCopy, ignoreFunctions, maxLevel, level, ignoreContext) {
    if (maxLevel === void 0) { maxLevel = 20; }
    if (level === void 0) { level = 0; }
    if (level > maxLevel)
        return null; // Too deep
    if (typeof obj == 'undefined' || obj == null) {
        return null;
    }
    else if (typeof obj == 'function' && ignoreFunctions) {
        return null;
    }
    else if (obj.constructor == Array) {
        var ar = [];
        for (var i = 0; i < obj.length; i++) {
            if (!ignoreFunctions || typeof obj[i] != 'function') {
                if (deepCopy) {
                    ar[i] = clone(obj[i], deepCopy, ignoreFunctions, maxLevel, level + 1, ignoreContext);
                }
                else {
                    ar[i] = obj[i];
                }
            }
        }
        return ar;
    }
    else if (typeof obj == 'object') {
        var o = {};
        for (var p in obj) {
            if (ignoreContext && p == 'context')
                continue;
            if (!ignoreFunctions || typeof obj[p] != 'function') {
                if (deepCopy) {
                    o[p] = clone(obj[p], deepCopy, ignoreFunctions, maxLevel, level + 1, ignoreContext);
                }
                else {
                    o[p] = obj[p];
                }
            }
        }
        return o;
    }
    else {
        return obj;
    }
}
exports.clone = clone;
function merge(args, isDeepMerge) {
    var o = {};
    for (var i = 0; i < args.length; i++) {
        if (args[i] && args[i].length) {
            for (var u = 0; u < args[i].length; u++) {
                for (var p in args[i][u]) {
                    o[p] = args[i][u][p];
                }
            }
        }
        else {
            // Merge objects.
            if (!isDeepMerge) {
                // Flat merge.
                for (var p in args[i]) {
                    o[p] = args[i][p];
                }
            }
            else {
                // Deep merge.
                for (var p in args[i]) {
                    //we override primitive / array
                    if (typeof o[p] !== 'object' || o[p] instanceof Array) {
                        o[p] = args[i][p];
                    }
                    else {
                        o[p] = merge([o[p], args[i][p]], true);
                    }
                }
            }
        }
    }
    return o;
}
exports.merge = merge;
function unflatten(data) {
    if (Object(data) !== data || Array.isArray(data)) {
        return data;
    }
    var result = {};
    for (var p in data) {
        var cur = result;
        var prop = '';
        var parts = p.split('.');
        for (var i = 0; i < parts.length; i++) {
            var idx = !isNaN(Number(parts[i]));
            cur = cur[prop] || (cur[prop] = idx ? [] : {});
            prop = parts[i];
        }
        cur[prop] = data[p];
    }
    return result[''] || {};
}
exports.unflatten = unflatten;
function flatten(data, withBracket) {
    if (withBracket === void 0) { withBracket = false; }
    var result = {};
    function recurse(cur, prop) {
        if (Object(cur) !== cur) {
            result[prop] = cur;
        }
        else if (Array.isArray(cur)) {
            var l = cur.length;
            for (var i = 0; i < l; i++) {
                var nestedProperty = withBracket ? prop + "[" + i + "]" : prop + "." + i;
                recurse(cur[i], prop ? nestedProperty : String(i));
            }
            if (l === 0) {
                result[prop] = [];
            }
        }
        else {
            var isEmpty = true;
            for (var p in cur) {
                isEmpty = false;
                recurse(cur[p], prop ? prop + "." + p : p);
            }
            if (isEmpty && prop !== '') {
                result[prop] = {};
            }
        }
    }
    recurse(data, '');
    return result;
}
exports.flatten = flatten;
function extractProperties(src, dest, schema) {
    if (src == null)
        return;
    if (dest == null)
        dest = {};
    if (src.constructor == Array) {
        for (var iSrc = 0; iSrc < src.length; iSrc++) {
            extractProperties(src[iSrc], dest, schema);
        }
    }
    else if (schema) {
        var arSchema = schema.split('|');
        var srcLCase = {};
        for (var fieldName in src) {
            srcLCase[fieldName.toLowerCase()] = 1;
        }
        for (var i = 0; i < arSchema.length; i++) {
            var fieldName2 = arSchema[i];
            if (srcLCase[fieldName2.toLowerCase()])
                dest[fieldName2] = src[fieldName2];
        }
    }
    else {
        dest = clone(src, false);
    }
    return dest;
}
exports.extractProperties = extractProperties;
function extractProperty(src, paramName) {
    var params;
    return extractProperties(src, params, paramName)[paramName];
}
exports.extractProperty = extractProperty;
function parseToObject(str) {
    try {
        var parsedVal = window['JSON'].parse(str);
        if (typeof parsedVal == 'object') {
            return parsedVal;
        }
    }
    catch (e) { }
    return undefined;
}
exports.parseToObject = parseToObject;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/queue.ts":
/*!**********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/queue.ts ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var _q = {};
function _servicesStatus() {
    var services = {};
    for (var service in _q) {
        var active = isActive(service);
        if (active) {
            services[service] = {
                active: true,
                waitingFor: _q[service].ids,
                queuedCount: _q[service].q.length,
            };
        }
        else {
            services[service] = {
                active: false,
            };
        }
    }
    return services;
}
exports._servicesStatus = _servicesStatus;
function isActive(service) {
    if (!_q[service])
        return false;
    for (var id in _q[service].ids)
        return true;
    return false;
}
exports.isActive = isActive;
function release(id, service) {
    window.gigya.logger.debug("releasing " + service + " queue by " + id);
    if (!_q[service])
        return;
    delete _q[service].ids[id];
    if (!isActive(service)) {
        var q = _q[service].q;
        _q[service].q = [];
        while (q.length > 0) {
            var o = q.splice(0, 1)[0];
            try {
                o.func.apply(this, o.args);
            }
            catch (ex) {
                if (typeof console == 'object' && console.log) {
                    console.log('Gigya: Exception while invoking queued method (' + service + ': ' + id + ')');
                }
            }
            if (isActive(service)) {
                //queue became inactive
                _q[service].q = q;
                break;
            }
        }
    }
}
exports.release = release;
function hold(id, service) {
    window.gigya.logger.debug("locking queue " + service + " by " + id);
    if (!_q[service])
        _q[service] = { q: [], ids: {} };
    _q[service].ids[id] = true;
}
exports.hold = hold;
function waitFor(service, fnc, args) {
    if (!_q[service])
        _q[service] = { q: [], ids: {} };
    _q[service].q.push({ func: fnc, args: args });
}
exports.waitFor = waitFor;
function queueForExecution(service, func, args) {
    args = args || [];
    if (isActive(service)) {
        waitFor(service, func, args);
    }
    else {
        func.apply(this, args);
    }
}
exports.queueForExecution = queueForExecution;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/sanitize.ts":
/*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/sanitize.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function sanitizeHTML(html) {
    if (html == null || typeof html == 'undefined')
        return html;
    return html
        .replace(/&/g, '&#38;')
        .replace(/</g, '&#60;')
        .replace(/>/g, '&#62;')
        .replace(/\"/g, '&#34;')
        .replace(/'/g, '&#39;')
        .replace(/&#38;#173;/g, '&#173;');
}
exports.sanitizeHTML = sanitizeHTML;
function sanitizeAttribute(attributeValue) {
    if (attributeValue == null || typeof attributeValue == 'undefined')
        return attributeValue;
    return attributeValue
        .replace(/&/g, '&#38;')
        .replace(/</g, '&#60;')
        .replace(/>/g, '&#62;')
        .replace(/\"/g, '&#34;')
        .replace(/\=/g, '&#61;');
}
exports.sanitizeAttribute = sanitizeAttribute;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/script.ts":
/*!***********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/script.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var Uri_1 = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var arrayUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/array */ "./src/core/Gigya.Js/app/Utils/array.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var cdn_1 = __webpack_require__(/*! src/core/Gigya.Js/app/cdn */ "./src/core/Gigya.Js/app/cdn.ts");
var pending = {};
function addSdkVersion(url) {
    var scriptUrl = Uri_1.Uri.parse(url);
    scriptUrl.addToSearch({ version: window.gigya.build.version });
    return scriptUrl.toString();
}
function formatSrcUrl(src) {
    // remove cdn domain number
    return src.replace(/^http(s?):\/\/cdn(s?)[0-9]*.gigya.com\//, 'http$1://cdn$2.gigya.com/');
}
function isLoaded(src) {
    var pendingSrc = formatSrcUrl(src);
    return Boolean(pending[pendingSrc] && pending[pendingSrc].loaded);
}
exports.isLoaded = isLoaded;
function load(src, fnOnError, fnOnLoad, loadOnce, removeAfter, treatTogether) {
    if (removeAfter === void 0) { removeAfter = 5000; }
    var oScript;
    if (src.indexOf('//') === 0) {
        src = LocalInfo_1.localInfo.protocol + ':' + src;
    }
    if (loadOnce) {
        var pendingSrc = formatSrcUrl(src);
        if (pending[pendingSrc]) {
            if (pending[pendingSrc].loaded) {
                window.gigya.logger.debug("script was already loaded:", { src: src });
                if (fnOnLoad) {
                    fnOnLoad();
                }
            }
            else {
                pending[pendingSrc].onLoad.push(fnOnLoad);
                pending[pendingSrc].onError.push(fnOnError);
            }
            return;
        }
        oScript = pending[pendingSrc] = { loaded: false, onLoad: [fnOnLoad], onError: [fnOnError] };
        if (treatTogether && treatTogether.length > 0) {
            arrayUtils.forEach(treatTogether, function (url) {
                pending[url] = oScript;
            });
        }
    }
    else {
        // multiple loads
        oScript = { loaded: false, onLoad: [fnOnLoad], onError: [fnOnError] };
    }
    var scriptLoader = function () {
        var script = document.createElement('script');
        script.async = true;
        script.type = 'text/javascript';
        script.charset = 'UTF-8';
        var done = false;
        var fnOnScriptLoad = function () {
            if (!done) {
                if (oScript.onLoad && oScript.onLoad.length) {
                    for (var i = 0; i < oScript.onLoad.length; i++) {
                        if (typeof oScript.onLoad[i] === 'function') {
                            oScript.onLoad[i]();
                        }
                    }
                }
                oScript.loaded = true;
                oScript.onError = oScript.onLoad = null; // remove memory leak
                done = true;
                if (removeAfter === true) {
                    removeAfter = 0;
                }
                if (removeAfter !== false) {
                    setTimeout(function () {
                        if (script.parentNode) {
                            script.parentNode.removeChild(script);
                        }
                    }, removeAfter);
                }
            }
        };
        script.onload = fnOnScriptLoad;
        script['onreadystatechange'] = function () {
            if (this.readyState === 'loaded') {
                fnOnScriptLoad();
            }
        };
        script.onerror = function () {
            for (var i = 0; i < oScript.onError.length; i++) {
                if (typeof oScript.onError[i] === 'function') {
                    oScript.onError[i]();
                }
            }
            delete pending[src];
        };
        var head = document.getElementsByTagName('head');
        if (head && head.length > 0) {
            head[0].appendChild(script);
        }
        var fnSetScriptSrc = function () {
            var webSdkResourcesDomain = new RegExp("^https?://cdns?.*" + window.gigya.defaultApiDomain);
            var scriptSrc = webSdkResourcesDomain.test(src) ? addSdkVersion(src) : src;
            script.src = scriptSrc;
        };
        if (LocalInfo_1.localInfo.iosVersion >= 6) {
            // iOS 6 breaks setTimeout when animation is active (switching tabs back from a login sequence)
            fnSetScriptSrc();
        }
        else {
            setTimeout(fnSetScriptSrc, 1); // Doing this async gives better performance in older browsers
        }
    };
    if (LocalInfo_1.localInfo.isIE) {
        functionsUtils.invokeOnPageLoad(scriptLoader);
    }
    else {
        scriptLoader();
    }
}
exports.load = load;
var ResourceTypes;
(function (ResourceTypes) {
    ResourceTypes[ResourceTypes["script"] = 0] = "script";
    ResourceTypes[ResourceTypes["image"] = 1] = "image";
    ResourceTypes[ResourceTypes["iframe"] = 2] = "iframe";
})(ResourceTypes = exports.ResourceTypes || (exports.ResourceTypes = {}));
function triggerResource(url, callback, resourceType, removeAfter) {
    if (resourceType === void 0) { resourceType = ResourceTypes.image; }
    if (removeAfter === void 0) { removeAfter = 5000; }
    switch (resourceType) {
        case ResourceTypes.script:
            load(url, callback, callback, false, removeAfter);
            break;
        case ResourceTypes.image:
            loadImage(url, callback);
            break;
        case ResourceTypes.iframe:
            loadIframe(url, callback, removeAfter);
            break;
        default:
            throw new Error('Unsupported resource type');
    }
}
exports.triggerResource = triggerResource;
function loadImage(url, callback) {
    var img = new Image();
    var loaded = false;
    var fnOnLoad = function () {
        if (!loaded) {
            loaded = true;
            callback();
        }
    };
    img.onload = img.onerror = fnOnLoad;
    img.src = url;
}
function loadIframe(url, callback, removeAfter) {
    if (removeAfter === void 0) { removeAfter = 5000; }
    var ifr = document.createElement('iframe');
    ifr.style.width = '30px';
    ifr.style.height = '10px';
    ifr.style.position = 'absolute';
    ifr.style.top = '-1000px';
    ifr.style.left = '-1000px';
    if (removeAfter === true) {
        removeAfter = 0;
    }
    var fnOnLoad = function (e) {
        var el;
        if (e && e.srcElement) {
            el = e.srcElement;
        }
        else if (e && e.target) {
            el = e.target;
        }
        else {
            el = this;
        }
        if (!el.loaded && el.parentNode) {
            el.loaded = true;
            callback();
            if (removeAfter !== false) {
                window.setTimeout(function () {
                    try {
                        document.body.removeChild(el);
                    }
                    catch (ex) { }
                }, removeAfter);
            }
        }
    };
    DOMUtils.addEventListener(ifr, 'load', fnOnLoad);
    DOMUtils.addEventListener(ifr, 'error', fnOnLoad);
    ifr.onload = function (e) {
        fnOnLoad(e);
    };
    ifr.onerror = fnOnLoad;
    ifr.src = url;
    DOMUtils.appendToBody(ifr);
}
function loadService(serviceName, fnOnError, fnOnLoad) {
    var url = cdn_1.getCdnResource() + '/js/gigya.services.' + serviceName + '.js';
    load(url, function () {
        if (typeof console === 'object' && console.error) {
            console.error('error loading gigya service ' + serviceName + ' from url: ' + url);
            if (fnOnError) {
                fnOnError();
            }
        }
    }, fnOnLoad, true);
}
exports.loadService = loadService;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/sessionCache.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/sessionCache.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var JSONUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var queueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/queue */ "./src/core/Gigya.Js/app/Utils/queue.ts");
var sessionStorageEnabled;
try {
    sessionStorageEnabled = Boolean(window.sessionStorage); // when 3pc blocked, chrome throws when trying to access session storage.
}
catch (ex) {
    sessionStorageEnabled = false;
}
function set(key, response) {
    if (!sessionStorageEnabled)
        return;
    var oGigya;
    try {
        oGigya = JSONUtils.deserialize(window.sessionStorage.getItem('gigyaCache'));
        if (response == null && oGigya[key]) {
            delete oGigya[key];
        }
        else {
            oGigya[key] = { response: response, time: new Date().getTime() };
        }
        window.sessionStorage.setItem('gigyaCache', JSONUtils.serialize(oGigya));
    }
    catch (ex) { }
    queueUtils.release('cache', 'cache_' + key);
}
exports.set = set;
function get(key, cacheTimeout, callback) {
    if (!sessionStorageEnabled) {
        if (typeof callback == 'function')
            callback(null);
        return;
    }
    var ret;
    try {
        if (!queueUtils.isActive('cache_' + key)) {
            var sGigyaCache = window.sessionStorage.getItem('gigyaCache');
            var oGigya = JSONUtils.deserialize(sGigyaCache);
            var cached = oGigya[key];
            if (cached) {
                if (cacheTimeout && cacheTimeout + cached.time > new Date().getTime()) {
                    //cached
                    callback(cached.response);
                    return;
                }
                else {
                    //expired
                    remove(key);
                    cached = null;
                }
            }
            if (!cached) {
                //not cached (first time)
                queueUtils.hold('cache', 'cache_' + key); //so that future requests will wait for the first one's response.
                callback(null);
                return;
            }
        }
        if (queueUtils.isActive('cache_' + key)) {
            //wait for first response
            queueUtils.waitFor('cache_' + key, get, arguments);
            return;
        }
    }
    catch (ex) {
        callback(null);
    }
}
exports.get = get;
function remove(key) {
    set(key, null);
}
exports.remove = remove;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/stringParams.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/stringParams.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function getParamValue(str, key, del) {
    if (del === void 0) { del = '&'; }
    // http://stackoverflow.com/questions/11920697/how-to-get-hash-value-in-a-url-in-js
    var matches = str.match(new RegExp(key + "=([^" + del + "]*)"));
    return matches ? matches[1] : null;
}
exports.getParamValue = getParamValue;
function getReqParamValue(str, key) {
    var val = getParamValue(str, key);
    return val ? decodeURIComponent(val) : null;
}
exports.getReqParamValue = getReqParamValue;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/stringUtils.ts":
/*!****************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/stringUtils.ts ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function trim(s) {
    return s.replace(/^\s*(\S*(.*\S)?)\s*$/, '$1');
}
exports.trim = trim;
function format(s) {
    var rest = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        rest[_i - 1] = arguments[_i];
    }
    for (var i = 0; i < arguments.length - 1; i++) {
        if (arguments[i + 1] != null) {
            s = s.split('{' + i + '}').join(arguments[i + 1]);
        }
    }
    return s;
}
exports.format = format;
function capitalize(s) {
    return s.substring(0, 1).toUpperCase() + s.substring(1);
}
exports.capitalize = capitalize;
function endsWith(s, suffix) {
    return s.indexOf(suffix, s.length - suffix.length) !== -1;
}
exports.endsWith = endsWith;
function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, '\\$1');
}
exports.escapeRegExp = escapeRegExp;
function replaceAll(str, find, replace) {
    if (!find)
        return str;
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}
exports.replaceAll = replaceAll;
function mergeCommaSeparatedValues(str1, str2) {
    if (str1 === void 0) { str1 = ''; }
    if (str2 === void 0) { str2 = ''; }
    var arr = str1.concat(',', str2).split(',');
    return window.gigya.utils.array.getUniqueValues(arr).filter(function (x) { return x; }).join(',');
}
exports.mergeCommaSeparatedValues = mergeCommaSeparatedValues;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/tabbable.ts":
/*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/tabbable.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var Tabbable = /** @class */ (function () {
    /**
     * Do not use - access via `gigya.utils.tabbable`.
     */
    function Tabbable() {
        this.bindings = [];
    }
    /**
     * Do not use - access via `gigya.utils.tabbable`.
     */
    Tabbable.getInstance = function () {
        if (!Tabbable.self) {
            Tabbable.self = new Tabbable();
        }
        return Tabbable.self;
    };
    /**
     * When bound, the user will have their tab focused locked into the container while their focus is on an element in the container.
     *
     * - Hitting tab while focused on the last tabbable element will set focus to the first tabbable element.
     * - Hitting shift+tab while focused on the first element will set focus to the last tabbable element.
     */
    Tabbable.prototype.bindTabLooping = function (container, filterSelector) {
        // Don't bind twice when screen-sets move between screens.
        if (this.getListenerByContainer(container)) {
            return;
        }
        var listener = this.createListener(container, filterSelector);
        window.addEventListener('keydown', listener, true);
    };
    /**
     * Restore natural tabbing behavior.
     */
    Tabbable.prototype.unbindTabLooping = function (container) {
        var listener = this.getListenerByContainer(container);
        if (listener) {
            window.removeEventListener('keydown', listener, true);
        }
    };
    /**
     * Get sorted list of tabbable elements.
     */
    Tabbable.prototype.getSortedTabbableElements = function (container, filterSelector) {
        var _this = this;
        var tabIndex = 0;
        var els = container.querySelectorAll(Tabbable.selector);
        var tabbable = [];
        for (var i = 0; i < els.length; ++i) {
            var element = els[i];
            if (this.isTabbable(element, filterSelector)) {
                // Necessary to track natural sort order for stable sort implementation.
                element.setAttribute(Tabbable.naturalTabOrder, String(tabIndex));
                tabIndex++;
                tabbable.push(element);
            }
        }
        tabbable.sort(function (a, b) { return _this.sort(a, b); });
        return tabbable;
    };
    /**
     * Create and track listener function.
     */
    Tabbable.prototype.createListener = function (container, filterSelector) {
        var _this = this;
        var listener = function (e) {
            // Tab key hit and the currently focused element is in the container we care about.
            var activeElement = document.activeElement;
            if (e.keyCode === 9 && container.contains(activeElement)) {
                // Attempt to key the next element. Shift key reverses tab order.
                var el = !e.shiftKey
                    ? _this.getNextTabbableElement(container, activeElement, filterSelector)
                    : _this.getPreviousTabbableElement(container, activeElement, filterSelector);
                if (el) {
                    el.focus();
                    // Cancel default submit event only if next element in line could be found.
                    // If focus is set on an untabbable elements, the tab keypress will always be handled natively.
                    DOMUtils.cancelEvent(e);
                }
            }
        };
        this.bindings.push({ container: container, listener: listener });
        return listener;
    };
    /**
     * Filter out elements that aren't tabbable.
     */
    Tabbable.prototype.isTabbable = function (element, filterSelector) {
        var matches = element.matches || element['msMatchesSelector'];
        return (element.tabIndex !== -1 && // Excluded from tab order.
            (element.offsetWidth > 0 || element.offsetHeight > 0) && // Is visible.
            (!filterSelector || matches.call(element, filterSelector))); // Is in filtered set of elements.
    };
    /**
     * Get next tabbable element, looping if necessary. Returns undefined if the current element isn't in the list of tabbable elements.
     */
    Tabbable.prototype.getNextTabbableElement = function (container, currentElement, filterSelector) {
        var els = this.getSortedTabbableElements(container, filterSelector);
        var currentIndex = els.indexOf(currentElement);
        if (currentIndex === -1) {
            // The current element wasn't found in the list of tabbable elements.
            return undefined;
        }
        else if (currentIndex !== els.length - 1) {
            // Next element in list.
            return els[currentIndex + 1];
        }
        else {
            // Last element reached, loop back to first.
            return els[0];
        }
    };
    /**
     * Get previous tabbable element, looping if necessary. Returns undefined if the current element isn't in the list of tabbable elements.
     */
    Tabbable.prototype.getPreviousTabbableElement = function (container, currentElement, filterSelector) {
        var els = this.getSortedTabbableElements(container, filterSelector);
        var currentIndex = els.indexOf(currentElement);
        if (currentIndex === -1) {
            // The current element wasn't found in the list of tabbable elements.
            return undefined;
        }
        else if (currentIndex !== 0) {
            // Previous element in list.
            return els[currentIndex - 1];
        }
        else {
            // First element reached, loop back to last.
            return els[els.length - 1];
        }
    };
    /**
     * Sort algorithm that takes into account the tab index and natural sort order for each element.
     *
     * NOTE:
     * Not all browsers implement stable sorting. Specifically Chrome's sort is NOT stable.
     * A sorting algorithm is "stable" when two objects with equal keys appear in the same order after being sorted.
     */
    Tabbable.prototype.sort = function (a, b) {
        var tabIndexDiff = this.getTabIndex(a) - this.getTabIndex(b);
        if (tabIndexDiff !== 0) {
            return tabIndexDiff;
        }
        return Number(a.getAttribute(Tabbable.naturalTabOrder)) - Number(b.getAttribute(Tabbable.naturalTabOrder));
    };
    /**
     * Elements with a tab index of 0 should appear after all elements with a tab index.
     */
    Tabbable.prototype.getTabIndex = function (el) {
        return el.tabIndex === 0 ? 99999999 : el.tabIndex;
    };
    /**
     * Find event listener function by container element.
     */
    Tabbable.prototype.getListenerByContainer = function (container) {
        for (var _i = 0, _a = this.bindings; _i < _a.length; _i++) {
            var binding = _a[_i];
            if (binding.container === container) {
                return binding.listener;
            }
        }
    };
    Tabbable.naturalTabOrder = 'data-natural-tab-order';
    Tabbable.selector = ['a:not([disabled])', 'button:not([disabled])', 'input:not([disabled])', '[tabindex]:not([disabled])'].join(',');
    return Tabbable;
}());
exports.Tabbable = Tabbable;
exports.tabbable = Tabbable.getInstance();


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/templates.ts":
/*!**************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/templates.ts ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function fill(template, o) {
    if (typeof template == 'function') {
        template = template(o);
    }
    if (template instanceof Array) {
        template = template.join('');
    }
    var p = /(\$)(!?)([a-z_][a-z_.\d]*)([(][^()]*[)])?|(\$)(!?)\{([a-z_][a-z_.\d]*)([(][^()]*[)])?\}/gi;
    p.lastIndex = 0;
    var res = template;
    var matches = p.exec(res);
    var offset;
    while (matches != null) {
        if (matches[1] == '$') {
            offset = 0;
        }
        else {
            offset = 4;
        }
        var blnDontInject = matches[2 + offset] == '!';
        var identifier = matches[3 + offset]; // 0 is the entire expr and 1/5=$ 2/6=! 3/7=identifier 4/8=()'s
        var para = matches[4 + offset];
        if (para == null)
            para = '';
        var dbg = 0;
        if (identifier.substring(0, 1) == '.') {
            identifier = identifier.substring(1);
        }
        if (identifier.substring(0, 3) == 'DBG') {
            identifier = identifier.substring(3);
            dbg = 1;
        }
        var preTemp = '';
        var postTemp = identifier + para;
        while (postTemp != preTemp) {
            preTemp = postTemp;
            var lastIndex = p.lastIndex;
            postTemp = fill(preTemp, o);
            p.lastIndex = lastIndex;
        }
        var v = '';
        var skipChars = 0;
        if (o[identifier.split('.')[0]] != null) {
            try {
                v = new Function('o', 'p', 'return eval("o." + p)')(o, postTemp);
            }
            catch (e) { }
        }
        else {
            v = '$' + (blnDontInject ? '!' : '') + postTemp;
            skipChars = 1;
        }
        if (blnDontInject) {
            res = res.replace(matches[0], '');
        }
        else {
            res = res.substr(0, matches.index) + v + res.substr(matches.index + matches[0].length);
            //res=res.split(matches[0]).join(v);
        }
        p.lastIndex = matches.index + skipChars; // to allow recursive changes in templates that contain templates.
        matches = p.exec(res);
    }
    return res;
}
exports.fill = fill;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/validation.ts":
/*!***************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/validation.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function isExplicitTrue(val) {
    var lc = ('' + val).toLowerCase();
    return lc == 'true' || lc == '1';
}
exports.isExplicitTrue = isExplicitTrue;
function isExplicitFalse(val) {
    var lc = ('' + val).toLowerCase();
    return lc == 'false' || lc == '0';
}
exports.isExplicitFalse = isExplicitFalse;
function isLaterThanNow(expirationTime) {
    return expirationTime > new Date().getTime();
}
exports.isLaterThanNow = isLaterThanNow;
function allDefinedOrAllUndefined() {
    var args = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        args[_i] = arguments[_i];
    }
    var anyUndefined = args.some(function (x) { return typeof x === 'undefined'; });
    var anyDefined = args.some(function (x) { return typeof x !== 'undefined'; });
    return (anyDefined && !anyUndefined) || (!anyDefined && anyUndefined);
}
exports.allDefinedOrAllUndefined = allDefinedOrAllUndefined;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/viewport.ts":
/*!*************************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/viewport.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function getScroll() {
    var scrOfX = 0, scrOfY = 0;
    if (typeof window.pageYOffset == 'number') {
        scrOfY = window.pageYOffset;
        scrOfX = window.pageXOffset;
    }
    else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        scrOfY = document.body.scrollTop;
        scrOfX = document.body.scrollLeft;
    }
    else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
        scrOfY = document.documentElement.scrollTop;
        scrOfX = document.documentElement.scrollLeft;
    }
    return { left: scrOfX, top: scrOfY };
}
exports.getScroll = getScroll;
function getFullSize() {
    var de = document.documentElement;
    var db = document.body;
    var h = de.clientHeight;
    if (h == 0)
        h = db.clientHeight;
    var w = de.clientWidth;
    if (w == 0)
        w = db.clientWidth;
    return { w: w, h: h };
}
exports.getFullSize = getFullSize;
function getOrientation() {
    var orientation = parseInt(window['orientation'] || '0');
    if (orientation < 0)
        orientation += 360;
    return orientation;
}
exports.getOrientation = getOrientation;
function getInnerSize() {
    var h;
    var w;
    var de = document.documentElement;
    var db = document.body;
    if (window.innerHeight) {
        h = window.innerHeight;
        w = window.innerWidth;
    }
    else {
        h = de.clientHeight;
        if (h == 0)
            h = db.clientHeight;
        w = de.clientWidth;
        if (w == 0)
            w = db.clientWidth;
    }
    return { w: w, h: h };
}
exports.getInnerSize = getInnerSize;
function getMiddleCenter() {
    var scroll = getScroll();
    var size = getInnerSize();
    return {
        top: scroll.top + Math.floor(size.h / 2),
        left: scroll.left + Math.floor(size.w / 2),
    };
}
exports.getMiddleCenter = getMiddleCenter;
function isRectHorizontallyVisible(rect) {
    var scroll = getScroll();
    var size = getInnerSize();
    return rect.left >= scroll.left && rect.right <= scroll.left + size.w;
}
exports.isRectHorizontallyVisible = isRectHorizontallyVisible;
function isRectFullyVisible(rect) {
    var scroll = getScroll();
    var size = getInnerSize();
    return rect.top >= scroll.top && rect.bottom <= scroll.top + size.h && rect.left >= scroll.left && rect.right <= scroll.left + size.w;
}
exports.isRectFullyVisible = isRectFullyVisible;
function scrollIntoView(element) {
    if (element && element.scrollIntoView) {
        element.scrollIntoView();
    }
}
exports.scrollIntoView = scrollIntoView;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/win.ts":
/*!********************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/win.ts ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var URLUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var HTTPUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/HTTP */ "./src/core/Gigya.Js/app/Utils/HTTP.ts");
var globalEvents = __webpack_require__(/*! src/core/Gigya.Js/app/GlobalEvents */ "./src/core/Gigya.Js/app/GlobalEvents.ts");
exports._openedWindows = {};
exports._uniqueWindowCounter = 0;
function _calcPixels(value, max, def, positionAdjustment) {
    var pixels;
    // Handle string as argument.
    if (typeof value === 'string') {
        // Typecast string to number. May be percentage.
        pixels = parseInt(value);
        // Convert percentage width and height to number.
        if (value.indexOf('%') !== -1) {
            pixels = parseInt(value) * 0.01 * max;
            // When positioning (as opposed to dimension), need to place window in center.
            if (positionAdjustment) {
                pixels -= positionAdjustment / 2;
            }
        }
    }
    else {
        pixels = value;
    }
    // Round to whole value.
    pixels = Math.round(pixels);
    // Typecast to number and fallback to default if necessary.
    if (isNaN(pixels) && def !== undefined) {
        pixels = _calcPixels(def, max, undefined, positionAdjustment);
    }
    return pixels;
}
exports._calcPixels = _calcPixels;
function open(url, windowName, windowOptions) {
    if (!windowOptions) {
        windowOptions = {
            menubar: 0,
            toolbar: 0,
            resizable: 1,
            scrollbars: 1,
        };
    }
    // Calculate dimensions and positioning, including defaults.
    windowOptions.width = _calcPixels(windowOptions.width, screen.width, 960);
    windowOptions.height = _calcPixels(windowOptions.height, screen.height, 680);
    windowOptions.left = _calcPixels(windowOptions.left, screen.width, '50%', windowOptions.width);
    windowOptions.top = _calcPixels(windowOptions.top, screen.height, '50%', windowOptions.height);
    // Convert window options object to string.
    // Example: menubar=0,toolbar=0,...
    var windowOptionsString = '';
    for (var key in windowOptions) {
        windowOptionsString += ',' + key + '=' + windowOptions[key];
    }
    windowOptionsString = windowOptionsString.substr(1);
    // 4k is our qs length limit. Anything more will trigger POST.
    var postToWindow = (LocalInfo_1.localInfo.isIE && url.length > 2048) || url.length > 4096;
    var windowUrl = url;
    if (postToWindow) {
        windowUrl = '';
        if (LocalInfo_1.localInfo.isIE) {
            windowUrl = 'about:blank';
        }
    }
    // Dynamically assign window name if necessary.
    if (!windowName) {
        windowName = '_gigWindow_' + new Date().getTime() + '_' + ++exports._uniqueWindowCounter;
    }
    // Open and focus window.
    var newWin = window.open(windowUrl, windowName, windowOptionsString);
    if (newWin && newWin.focus) {
        newWin.focus();
    }
    exports._openedWindows[windowName] = newWin;
    // Post to window if necessary.
    var params = URLUtils.getParamsFromURL(url);
    if (postToWindow) {
        HTTPUtils.redirect(url.split('?')[0], [params], 'POST', windowName);
    }
    // Dispatch windowOpened event.
    globalEvents.dispatch({
        eventName: 'windowOpened',
        url: url,
        params: params,
    });
    return exports._openedWindows[windowName] != null;
}
exports.open = open;
function close(windowName) {
    if (exports._openedWindows[windowName] != null) {
        var fnClose = function () {
            try {
                if (exports._openedWindows[windowName] != null)
                    exports._openedWindows[windowName].close();
                delete exports._openedWindows[windowName];
            }
            catch (e) { }
        };
        if (LocalInfo_1.localInfo.iosVersion >= 6) {
            fnClose();
        }
        else {
            window.setTimeout(fnClose, 10); //timeout because of iPad bug (crashes sometimes)
        }
    }
}
exports.close = close;


/***/ }),

/***/ "./src/core/Gigya.Js/app/Utils/xd.ts":
/*!*******************************************!*\
  !*** ./src/core/Gigya.Js/app/Utils/xd.ts ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var keyValueUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/keyValue */ "./src/core/Gigya.Js/app/Utils/keyValue.ts");
var objectUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var DOMUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var InternalFlows_1 = __webpack_require__(/*! src/core/Gigya.Js/app/InternalFlows */ "./src/core/Gigya.Js/app/InternalFlows.ts");
var functionsUtils = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
var _listeners = {};
exports._flashListenerID = 'flid' + new Date().getTime();
var _added = false;
var _addedLegacyMethods = {};
function _onFlashMessage(serializedEvent) {
    var oEvent = keyValueUtils.deserialize(serializedEvent, null, null, true);
    var eventKey = oEvent['id'];
    var handler = _listeners[eventKey];
    if (handler != null) {
        if (typeof handler.callback == 'function') {
            var context = handler.context;
            handler.callback(oEvent, context);
        }
        removeMessageListener(eventKey);
    }
}
exports._onFlashMessage = _onFlashMessage;
function _onMessage(evt) {
    evt = objectUtils.clone(evt);
    var __fnOnMessage = function () {
        var keyVal = evt.data.split('=');
        var handler = _listeners[keyVal[0]];
        if (handler != null) {
            if (typeof handler.callback == 'function') {
                var encodedEventObj = unescape(keyVal[1]);
                var eventObj = keyValueUtils.deserialize(encodedEventObj, null, null, true);
                var context = handler.context;
                handler.callback(eventObj, context);
            }
            removeMessageListener(keyVal[0]);
            var iframe = document.getElementById(keyVal[0]); // If messagingMethod == local storage listener
            if (iframe && iframe.parentElement) {
                iframe.parentElement.removeChild(iframe);
            }
        }
    };
    if (evt && evt.data && evt.data.split) {
        if (window.gigya.localInfo.iosVersion >= 6) {
            __fnOnMessage();
        }
        else {
            window.setTimeout(__fnOnMessage, 100);
        }
    }
}
function _createLocalStorageListenerIFrame(messageName) {
    var iframe = document.createElement('iframe');
    iframe.style.width = '30px';
    iframe.style.height = '10px';
    iframe.style.position = 'absolute';
    iframe.style.top = '-1000px';
    iframe.style.left = '-1000px';
    iframe.id = messageName;
    iframe.src = 'https://cdns.gigya.com/gs/LocalStorageListener.htm?mode=receive&id=' + encodeURIComponent(messageName);
    DOMUtils.appendToBody(iframe);
    return iframe;
}
function addMessageListener(messageName, params, isPopup, callback, messagingMethod) {
    _listeners[messageName] = { callback: callback, context: params, t: new Date().getTime() };
    if (!messagingMethod) {
        messagingMethod = window.gigya.localInfo.messagingMethod;
        if (window.gigya.localInfo.isIE11 && isPopup && window.indexedDB)
            messagingMethod = InternalFlows_1.MessagingMethod.LocalStorageListener;
        // [#67641] - https://gigya.tpondemand.com/entity/67641-loccitane-social-login-to-line-hangs
        // if provider is Line, use LocalStorageListener because if Line's native app is installed on the device
        // it may "hijack" (deep-link) the OAuth request and prevent the PostMessage mechanism from working.
        if (window.gigya.localInfo.isAndroid && params && params['provider'] && params['provider'].toLowerCase() == 'line') {
            messagingMethod = InternalFlows_1.MessagingMethod.LocalStorageListener;
        }
    }
    if (messagingMethod == InternalFlows_1.MessagingMethod.LocalStorageListener || messagingMethod == InternalFlows_1.MessagingMethod.PostMessage) {
        if (messagingMethod == InternalFlows_1.MessagingMethod.LocalStorageListener && isPopup) {
            var iframe = _createLocalStorageListenerIFrame(messageName);
        }
        if (!_added) {
            var fnOnMessage = function (e) {
                if (e && e.data && typeof e.data === 'string') {
                    var id = e.data.split('=')[0];
                    if (_listeners[id]) {
                        _onMessage(e);
                    }
                }
            };
            if (window.addEventListener) {
                window.addEventListener('message', fnOnMessage, false);
            }
            else if (window['attachEvent']) {
                window['attachEvent']('onmessage', fnOnMessage);
            }
            _added = true;
        }
    }
    else {
        //legacy
        var legacyCrossSiteMethod = 'localstorage';
        if (window.gigya.thisScript.globalConf['legacyCrossSiteMethod'] && window.gigya.thisScript.globalConf['legacyCrossSiteMethod'].toLowerCase() != 'localstorage') {
            legacyCrossSiteMethod = window.gigya.thisScript.globalConf['legacyCrossSiteMethod'];
        }
        if (!_addedLegacyMethods[legacyCrossSiteMethod]) {
            window.setTimeout(function () {
                var div = document.createElement('div');
                div.style.width = '1px';
                div.style.height = '1px';
                div.style.overflow = 'hidden';
                div.style.position = 'absolute';
                div.style.left = '-1000px';
                //div.style.display='none';
                var id = exports._flashListenerID;
                if (legacyCrossSiteMethod != 'localstorage') {
                    id = legacyCrossSiteMethod + ':' + exports._flashListenerID;
                }
                var domain = window.gigya.localInfo.protocol +
                    '://' +
                    document.location.href
                        .split('?')[0]
                        .split('#')[0]
                        .split('/')[2];
                var now = new Date().getTime();
                var swf = document.createElement('object');
                var src = 'https://cdns.gigya.com/GS/swf/eventsBroadcaster2.swf';
                swf.setAttribute('id', 'eventsBroadcaster' + now);
                //swf.setAttribute('name', 'eventsBroadcaster_' + now);
                swf.setAttribute('codebase', 'https://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0');
                swf.setAttribute('width', '50');
                swf.setAttribute('height', '50');
                swf.setAttribute('src', src);
                swf.setAttribute('data', src);
                swf.setAttribute('style', 'display:inline');
                var param;
                param = document.createElement('param');
                param.name = 'movie';
                param.setAttribute('value', src);
                swf.appendChild(param);
                param = document.createElement('param');
                param.setAttribute('name', 'allowScriptAccess');
                param.setAttribute('value', 'always');
                swf.appendChild(param);
                param = document.createElement('param');
                param.setAttribute('name', 'FlashVars');
                param.setAttribute('value', 'action=listen&id=' + id + '&eventName=loginComplete&callback=gigya.utils.xd._onFlashMessage&domain=' + domain);
                swf.appendChild(param);
                div.appendChild(swf);
                functionsUtils.invokeOnPageLoad(function () {
                    DOMUtils.appendToBody(div);
                    swf.setAttribute('type', 'application/x-shockwave-flash');
                    swf.setAttribute('classid', 'clsid:d27cdb6e-ae6d-11cf-96b8-444553540000');
                });
                _addedLegacyMethods[legacyCrossSiteMethod] = true;
            }, 500);
        }
    }
}
exports.addMessageListener = addMessageListener;
function removeMessageListener(messageName) {
    delete _listeners[messageName];
}
exports.removeMessageListener = removeMessageListener;


/***/ }),

/***/ "./src/core/Gigya.Js/app/cdn.ts":
/*!**************************************!*\
  !*** ./src/core/Gigya.Js/app/cdn.ts ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
var selectedCdnHostsIndex = 0;
exports.CDN_HOSTS = {
    http: ['cdn.gigya.com', 'cdn1.gigya.com', 'cdn2.gigya.com', 'cdn3.gigya.com'],
    https: ['cdns.gigya.com', 'cdns1.gigya.com', 'cdns2.gigya.com', 'cdns3.gigya.com'],
};
function getCdnResource(path) {
    var _a, _b, _c, _d;
    // gigya.thisScript may not exist if loaded for ssoOrig.
    var baseDomain = (_b = (_a = window.gigya.thisScript) === null || _a === void 0 ? void 0 : _a.baseDomain, (_b !== null && _b !== void 0 ? _b : ''));
    var protocol = (_d = (_c = window.gigya.thisScript) === null || _c === void 0 ? void 0 : _c.protocol, (_d !== null && _d !== void 0 ? _d : 'https'));
    // If no base domain or if base domain ends with .gigya.com, use Gigya CDN.
    // Otherwise use the base domain.
    if (!baseDomain || /cdns?\.gigya\.com$/.test(baseDomain)) {
        var selectedSchemaRepository = exports.CDN_HOSTS[protocol];
        if (selectedSchemaRepository.length <= selectedCdnHostsIndex) {
            selectedCdnHostsIndex = 0;
        }
        baseDomain = selectedSchemaRepository[selectedCdnHostsIndex++];
    }
    // Ensure the path starts with "/".
    if (path) {
        if (path.indexOf('/') !== 0) {
            path = '/' + path;
        }
    }
    return protocol + '://' + baseDomain + (path || '');
}
exports.getCdnResource = getCdnResource;
function getImgCdnResource() {
    return getCdnResource('/gs/i/');
}
exports.getImgCdnResource = getImgCdnResource;


/***/ }),

/***/ "./src/core/Gigya.Js/app/index.ts":
/*!****************************************!*\
  !*** ./src/core/Gigya.Js/app/index.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! src/core/Gigya.Js/app/GigyaGlobals */ "./src/core/Gigya.Js/app/GigyaGlobals.ts");
var ThisScript = __webpack_require__(/*! src/core/Gigya.Js/app/ThisScript */ "./src/core/Gigya.Js/app/ThisScript.ts");
var CDN = __webpack_require__(/*! src/core/Gigya.Js/app/cdn */ "./src/core/Gigya.Js/app/cdn.ts");
var DefaultEventsMap = __webpack_require__(/*! src/core/Gigya.Js/app/DefaultEventsMap */ "./src/core/Gigya.Js/app/DefaultEventsMap.ts");
var Events = __webpack_require__(/*! src/core/Gigya.Js/app/Events */ "./src/core/Gigya.Js/app/Events.ts");
var GlobalEvents = __webpack_require__(/*! src/core/Gigya.Js/app/GlobalEvents */ "./src/core/Gigya.Js/app/GlobalEvents.ts");
var GSErrors = __webpack_require__(/*! src/core/Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var Interfaces = __webpack_require__(/*! src/core/Gigya.Js/app/Interfaces */ "./src/core/Gigya.Js/app/Interfaces.ts");
var InternalFlows = __webpack_require__(/*! src/core/Gigya.Js/app/InternalFlows */ "./src/core/Gigya.Js/app/InternalFlows.ts");
var GigyaLog = __webpack_require__(/*! src/core/Gigya.Js/app/LegacyLogger */ "./src/core/Gigya.Js/app/LegacyLogger.ts");
var LocalInfo = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var Gigya_Providers = __webpack_require__(/*! src/core/Gigya.Js/app/Providers */ "./src/core/Gigya.Js/app/Providers.ts");
var GigyaReports = __webpack_require__(/*! src/core/Gigya.Js/app/Reports */ "./src/core/Gigya.Js/app/Reports.ts");
var Gigya_ApiAdapters = __webpack_require__(/*! src/core/Gigya.Js/interfaces/IApiAdapter */ "./src/core/Gigya.Js/interfaces/IApiAdapter.ts");
var IDisposable = __webpack_require__(/*! src/core/Gigya.Js/interfaces/IDisposable */ "./src/core/Gigya.Js/interfaces/IDisposable.ts");
var BaseApi = __webpack_require__(/*! src/core/Gigya.Js/app/API/BaseApi */ "./src/core/Gigya.Js/app/API/BaseApi.ts");
var UiApi = __webpack_require__(/*! src/core/Gigya.Js/app/API/UiApi */ "./src/core/Gigya.Js/app/API/UiApi.ts");
var Gigya_Plugins = __webpack_require__(/*! src/core/Gigya.Js/app/API/UiApiHelpers */ "./src/core/Gigya.Js/app/API/UiApiHelpers.ts");
var Gigya_UI = __webpack_require__(/*! src/core/Gigya.Js/app/API/UiApiRegistry */ "./src/core/Gigya.Js/app/API/UiApiRegistry.ts");
var Gigya_Api = __webpack_require__(/*! src/core/Gigya.Js/app/API/VersionSelector */ "./src/core/Gigya.Js/app/API/VersionSelector.ts");
var BaseObject = __webpack_require__(/*! src/core/Gigya.Js/app/BaseObject/BaseObject */ "./src/core/Gigya.Js/app/BaseObject/BaseObject.ts");
var EventWrapper = __webpack_require__(/*! src/core/Gigya.Js/app/BaseObject/EventWrapper */ "./src/core/Gigya.Js/app/BaseObject/EventWrapper.ts");
var BaseObjectInterfaces = __webpack_require__(/*! src/core/Gigya.Js/app/BaseObject/IBaseObjectConfig */ "./src/core/Gigya.Js/app/BaseObject/IBaseObjectConfig.ts");
var CustomApis = __webpack_require__(/*! src/core/Gigya.Js/app/ClientAPI/CustomApis */ "./src/core/Gigya.Js/app/ClientAPI/CustomApis.ts");
var ISamlConfig = __webpack_require__(/*! src/core/Gigya.Js/app/ClientAPI/ISamlConfig */ "./src/core/Gigya.Js/app/ClientAPI/ISamlConfig.ts");
var SamlApi = __webpack_require__(/*! src/core/Gigya.Js/app/ClientAPI/SamlApi */ "./src/core/Gigya.Js/app/ClientAPI/SamlApi.ts");
var AccountService = __webpack_require__(/*! src/core/Gigya.Js/app/Services/AccountService */ "./src/core/Gigya.Js/app/Services/AccountService.ts");
__webpack_require__(/*! src/core/Gigya.Js/app/Utils */ "./src/core/Gigya.Js/app/Utils/index.ts");
__webpack_require__(/*! src/core/Gigya.Js/app/Bootstrap */ "./src/core/Gigya.Js/app/Bootstrap.ts");
__webpack_require__(/*! src/core/Gigya.Js/app/Prototypes */ "./src/core/Gigya.Js/app/Prototypes.ts");
__webpack_require__(/*! src/core/Gigya.Js/app/Logger/main */ "./src/core/Gigya.Js/app/Logger/main.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya.events) {
    window.gigya.events = {};
}
if (!window.gigya.events.global) {
    window.gigya.events.global = {};
}
if (!window.gigya.log) {
    window.gigya.log = {};
}
if (!window.gigya._.providers) {
    window.gigya._.providers = {};
}
if (!window.gigya.reports) {
    window.gigya.reports = {};
}
if (!window.gigya._.apiAdapters) {
    window.gigya._.apiAdapters = {};
}
if (!window.gigya._.plugins) {
    window.gigya._.plugins = Gigya_Plugins;
}
if (!window.gigya._.UI) {
    window.gigya._.UI = {};
}
if (!window.gigya._.api) {
    window.gigya._.api = {};
}
if (!window.gigya._.saml) {
    window.gigya._.saml = {};
}
if (!window.gigya.fidm) {
    window.gigya.fidm = {};
}
if (!window.gigya.fidm.saml) {
    window.gigya.fidm.saml = {};
}
if (!window.gigya.services) {
    window.gigya.services = {};
}
if (!window.gigya.globalAccount) {
    window.gigya.globalAccount = {};
}
__webpack_provided_Object_dot_assign(window.gigya, ThisScript, GSErrors, Interfaces, LocalInfo, IDisposable, DefaultEventsMap, { Promise: gigya.Promise });
__webpack_provided_Object_dot_assign(window.gigya._, CDN, InternalFlows, BaseApi, UiApi, BaseObject, EventWrapper, BaseObjectInterfaces, CustomApis);
__webpack_provided_Object_dot_assign(window.gigya.events, Events);
__webpack_provided_Object_dot_assign(window.gigya.events.global, GlobalEvents);
__webpack_provided_Object_dot_assign(window.gigya.log, GigyaLog);
__webpack_provided_Object_dot_assign(window.gigya._.providers, Gigya_Providers);
__webpack_provided_Object_dot_assign(window.gigya.reports, GigyaReports);
__webpack_provided_Object_dot_assign(window.gigya._.apiAdapters, Gigya_ApiAdapters);
__webpack_provided_Object_dot_assign(window.gigya._.UI, Gigya_UI);
__webpack_provided_Object_dot_assign(window.gigya._.api, Gigya_Api);
__webpack_provided_Object_dot_assign(window.gigya._.saml, ISamlConfig);
__webpack_provided_Object_dot_assign(window.gigya.fidm.saml, SamlApi);
__webpack_provided_Object_dot_assign(window.gigya.services, AccountService);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/core/Gigya.Js/app/main.ts":
/*!***************************************!*\
  !*** ./src/core/Gigya.Js/app/main.ts ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
__webpack_require__(/*! src/core/Gigya.Js/app/index */ "./src/core/Gigya.Js/app/index.ts");
var GigyaExternalFacebook = __webpack_require__(/*! src/core/Gigya.Js/app/ExternalIntegrations/Facebook */ "./src/core/Gigya.Js/app/ExternalIntegrations/Facebook.ts");
var GigyaExternalGooglePlus = __webpack_require__(/*! src/core/Gigya.Js/app/ExternalIntegrations/GooglePlus */ "./src/core/Gigya.Js/app/ExternalIntegrations/GooglePlus.ts");
var GigyaExternalOpengraph = __webpack_require__(/*! src/core/Gigya.Js/app/ExternalIntegrations/Opengraph */ "./src/core/Gigya.Js/app/ExternalIntegrations/Opengraph.ts");
var Bootstrap = __webpack_require__(/*! ./Bootstrap */ "./src/core/Gigya.Js/app/Bootstrap.ts");
var ApisList = __webpack_require__(/*! src/core/Gigya.Js/app/API/ApisList */ "./src/core/Gigya.Js/app/API/ApisList.ts");
var ServerApi = __webpack_require__(/*! src/core/Gigya.Js/app/API/ServerApi */ "./src/core/Gigya.Js/app/API/ServerApi.ts");
var ServerApiRequest = __webpack_require__(/*! src/core/Gigya.Js/app/API/ServerApiRequest */ "./src/core/Gigya.Js/app/API/ServerApiRequest.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya._.bootstrap) {
    window.gigya._.bootstrap = {};
}
if (!window.gigya.external) {
    window.gigya.external = {};
}
if (!window.gigya.external.facebook) {
    window.gigya.external.facebook = {};
}
if (!window.gigya.external.googlePlus) {
    window.gigya.external.googlePlus = {};
}
if (!window.gigya.external.opengraph) {
    window.gigya.external.opengraph = {};
}
__webpack_provided_Object_dot_assign(window.gigya._, ApisList, ServerApi, ServerApiRequest);
__webpack_provided_Object_dot_assign(window.gigya._.bootstrap, Bootstrap);
__webpack_provided_Object_dot_assign(window.gigya.external.facebook, GigyaExternalFacebook);
__webpack_provided_Object_dot_assign(window.gigya.external.googlePlus, GigyaExternalGooglePlus);
__webpack_provided_Object_dot_assign(window.gigya.external.opengraph, GigyaExternalOpengraph);
if (!window.gigya.build)
    window.gigya.build = { version: '', number: 0 };
if (!window.gigya.providersConfig)
    window.gigya.providersConfig = {};
if (!window.gigya.isGigya)
    window.gigya.isGigya = true;
if (!window.gigya.partnerSettings) {
    window.gigya.partnerSettings = {
        authMode: 'cookie',
        baseDomains: '',
        captchaProvider: 'Google',
        plugins: { apiDomain: 'us1.gigya-api.com' },
        invisibleRecaptcha: {
            siteKey: '',
        },
        recaptchaV2: {
            siteKey: '',
        },
        funCaptcha: {
            siteKey: '',
        },
    };
}
Bootstrap.init();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/core/Gigya.Js/interfaces/IApiAdapter.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/interfaces/IApiAdapter.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.isSessionFromSso = false;


/***/ }),

/***/ "./src/core/Gigya.Js/interfaces/IDisposable.ts":
/*!*****************************************************!*\
  !*** ./src/core/Gigya.Js/interfaces/IDisposable.ts ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });


/***/ })

/******/ });