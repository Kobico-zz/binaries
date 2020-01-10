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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/core/ApiService/app/main.ts");
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

/***/ "./src/core/ApiService/app/ApiService.ts":
/*!***********************************************!*\
  !*** ./src/core/ApiService/app/ApiService.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var GroupApiDomainService_1 = __webpack_require__(/*! src/core/ApiService/app/GroupApiDomainService */ "./src/core/ApiService/app/GroupApiDomainService.ts");
var GSErrors_1 = __webpack_require__(/*! ../../Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var GMID_TICKET_EXPIRATION_INTERVAL = 1;
exports.TokenKeys = {
    GMID: 'gig_gmid',
    UCID: 'gig_ucid',
    GMID_TICKET: 'gmidTicket',
    GMID_TICKET_EXPIRATION_TIME: 'gmidTicketExpiration',
};
var ApiService = /** @class */ (function () {
    function ApiService(_apiKey, _hasGmid, _domainResolver, _groupApiDomainService, _requestClass, _storage) {
        if (_groupApiDomainService === void 0) { _groupApiDomainService = new GroupApiDomainService_1.GroupApiDomainService(); }
        if (_requestClass === void 0) { _requestClass = window.gigya.JsonpRequest; }
        this._apiKey = _apiKey;
        this._hasGmid = _hasGmid;
        this._domainResolver = _domainResolver;
        this._groupApiDomainService = _groupApiDomainService;
        this._requestClass = _requestClass;
        if (_storage) {
            this._storage = _storage;
        }
    }
    ApiService.prototype.getApiDomain = function (methodName) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            return tslib_1.__generator(this, function (_a) {
                return [2 /*return*/, this._domainResolver.getApiDomain(methodName)];
            });
        });
    };
    ApiService.prototype.bootstrap = function (forceBootstrap) {
        if (forceBootstrap === void 0) { forceBootstrap = false; }
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var log, _a, res, ticketInfo;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        log = window.gigya.logger.group("bootstrap api service");
                        if (!!this._storage) return [3 /*break*/, 2];
                        window.gigya.logger.debug("init storage");
                        _a = this;
                        return [4 /*yield*/, new gigya.Promise(function (resolve) {
                                window.gigya.utils.localStorage.waitForService(function (adapter) {
                                    resolve(adapter);
                                });
                            })];
                    case 1:
                        _a._storage = _b.sent();
                        _b.label = 2;
                    case 2:
                        if (!(this._hasGmid && !forceBootstrap)) return [3 /*break*/, 3];
                        window.gigya.logger.info("already has gmid");
                        return [3 /*break*/, 7];
                    case 3:
                        window.gigya.logger.info(!this._hasGmid ? "no gmid set" : "forcing bootstrap");
                        if (!this.canSaveGmidAsCookie()) return [3 /*break*/, 5];
                        window.gigya.logger.info("save gmid as cookie");
                        return [4 /*yield*/, this.sendRequest({
                                methodName: 'accounts.webSdkBootstrap',
                                params: { apiKey: this._apiKey }
                            })];
                    case 4:
                        res = _b.sent();
                        if (res.errorCode != 0) {
                            window.gigya.logger.error("error bootstrapping sdk", { type: 'bootstrap failed', scope: 'ApiService.bootstrap', res: res });
                            throw 'error bootstrapping sdk\n' + JSON.stringify(res, null, 4);
                        }
                        return [3 /*break*/, 7];
                    case 5:
                        window.gigya.logger.info("save gmid in storage");
                        return [4 /*yield*/, this.setupWithStorage()];
                    case 6:
                        _b.sent();
                        this._useStorage = true;
                        _b.label = 7;
                    case 7:
                        if (!this._useStorage) return [3 /*break*/, 9];
                        return [4 /*yield*/, this.getGmidTicket()];
                    case 8:
                        ticketInfo = _b.sent();
                        return [3 /*break*/, 10];
                    case 9:
                        this.cleanStorage();
                        _b.label = 10;
                    case 10:
                        log.end();
                        return [2 /*return*/, {
                                ticketInfo: ticketInfo,
                            }];
                }
            });
        });
    };
    ApiService.prototype.setGroupApiDomain = function (apiDomain) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var baseDomain;
            return tslib_1.__generator(this, function (_a) {
                baseDomain = window.gigya._.getBaseDomain(window.gigya.partnerSettings.baseDomains, this._domainResolver.originDomain, ['gigya.com', 'gigya-api.cn', window.gigya.defaultApiDomain]);
                if (baseDomain === window.gigya.defaultApiDomain) {
                    this._groupApiDomainService.set(apiDomain);
                }
                return [2 /*return*/];
            });
        });
    };
    ApiService.prototype.canSaveGmidAsCookie = function () {
        // api domain will be first party when site has a custom api domain prefix.
        return this._domainResolver.isApiDomainFirstParty || window.gigya.utils.cookie.canSaveCookie();
    };
    ApiService.prototype.sendRequest = function (data) {
        var _this = this;
        return new gigya.Promise(function (resolve, reject) {
            //TODO: handle timeout
            if (!data) {
                var msg = 'ApiService: request data must has methodName and params';
                window.gigya.logger.error(msg);
                return reject(msg);
            }
            var methodName = data.methodName;
            var params = window.gigya.utils.object.clone(data.params, true, true);
            params.pageURL = _this._domainResolver.originDomain;
            if (_this._useStorage) {
                params.gmid = _this._storage.getItem(exports.TokenKeys.GMID);
                params.ucid = _this._storage.getItem(exports.TokenKeys.UCID);
            }
            _this.getApiDomain(methodName).then(function (apiDomain) {
                var request = new _this._requestClass("https://" + apiDomain, methodName, params, function (res) {
                    var json = window.gigya.utils.JSON.serialize(res);
                    if (!window.gigya.utils.JSON.deserialize(json, undefined)) {
                        res = {
                            errorCode: GSErrors_1.GSErrors.INVALID_PARAMETER_FORMAT,
                            errorMessage: "Invalid parameter format." + '\n' + "One of the parameters of this request has been set with a value which is not in the expected format.",
                        };
                    }
                    resolve(res);
                }, data.settings);
                request.send();
            });
        });
    };
    ApiService.prototype.setupWithStorage = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var isGmidExistsInStorage, expirationTime, tokens, ticketRes;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        isGmidExistsInStorage = Boolean(this._storage.getItem(exports.TokenKeys.GMID));
                        expirationTime = parseInt(this._storage.getItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME));
                        if (!!isGmidExistsInStorage) return [3 /*break*/, 2];
                        window.gigya.logger.info("getting gmid by endpoint");
                        return [4 /*yield*/, this.getIds()];
                    case 1:
                        tokens = _a.sent();
                        if (!tokens.gcid || !tokens.ucid) {
                            throw "ApiService getIDs: the request to the endpoint failed";
                        }
                        else {
                            window.gigya.logger.info("setting gmid in storage");
                            this._storage.setItem(exports.TokenKeys.GMID, tokens.gcid);
                            this._storage.setItem(exports.TokenKeys.UCID, tokens.ucid);
                            ticketRes = this.createTicketResponse(tokens.gmidTicket);
                            this.updateGmidTicket(ticketRes);
                        }
                        return [3 /*break*/, 3];
                    case 2:
                        if (!window.gigya.utils.validation.isLaterThanNow(expirationTime)) {
                            this.refreshGmidTicketFromServer();
                        }
                        else {
                            window.gigya.logger.info("already has gmid in storage");
                        }
                        _a.label = 3;
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    /*
        createNew - if no gmidTicket exists, then create a new one instead of returning undefined
         */
    ApiService.prototype.getGmidTicket = function (createNew) {
        if (createNew === void 0) { createNew = false; }
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var gmidTicket, expirationTime;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        gmidTicket = this._storage.getItem(exports.TokenKeys.GMID_TICKET);
                        if (!(!gmidTicket && !createNew)) return [3 /*break*/, 1];
                        return [2 /*return*/, undefined];
                    case 1:
                        expirationTime = parseInt(this._storage.getItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME));
                        if (!(!createNew && gmidTicket && window.gigya.utils.validation.isLaterThanNow(expirationTime))) return [3 /*break*/, 2];
                        return [2 /*return*/, {
                                gmidTicket: gmidTicket,
                                expirationTime: parseInt(this._storage.getItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME)),
                            }];
                    case 2:
                        this.deleteGmidTicket();
                        return [4 /*yield*/, this.refreshGmidTicketFromServer()];
                    case 3: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    ApiService.prototype.refreshGmidTicketFromServer = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        window.gigya.logger.info("refreshing gmid ticket");
                        return [4 /*yield*/, this.createGmidTicket(this._storage.getItem(exports.TokenKeys.GMID))];
                    case 1:
                        res = _a.sent();
                        if (res && res.gmidTicket) {
                            this.updateGmidTicket(res);
                        }
                        return [2 /*return*/, res];
                }
            });
        });
    };
    ApiService.prototype.updateGmidTicket = function (ticket) {
        window.gigya.logger.info("updating gmid ticket", ticket);
        this._storage.setItem(exports.TokenKeys.GMID_TICKET, ticket.gmidTicket);
        this._storage.setItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME, String(ticket.expirationTime));
    };
    ApiService.prototype.deleteGmidTicket = function () {
        this._storage.removeItem(exports.TokenKeys.GMID_TICKET);
        this._storage.removeItem(exports.TokenKeys.GMID_TICKET_EXPIRATION_TIME);
    };
    ApiService.prototype.cleanStorage = function () {
        this._storage.removeItem(exports.TokenKeys.GMID);
        this._storage.removeItem(exports.TokenKeys.UCID);
        this.deleteGmidTicket();
    };
    ApiService.prototype.getIds = function () {
        return this.sendRequest({
            methodName: 'socialize.getIDs',
            params: {
                APIKey: this._apiKey,
                includeTicket: true,
            }
        });
    };
    ApiService.prototype.createGmidTicket = function (gmid, expires) {
        var _this = this;
        if (expires === void 0) { expires = window.gigya.partnerSettings.gmidTicketExpiration || 3600; }
        var params = {
            apiKey: this._apiKey,
            expires: expires,
        };
        if (gmid)
            params.gmid = gmid;
        return this.sendRequest({
            methodName: 'socialize.getGmidTicket',
            params: params
        }).then(function (res) {
            if (res && res.gmidTicket) {
                return _this.createTicketResponse(res.gmidTicket);
            }
            else {
                window.gigya.logger.error('Failed to establish gmidTicket', { response: JSON.stringify(res), method: 'socialize.getGmidTicket' });
                _this.deleteGmidTicket();
            }
        });
    };
    ApiService.prototype.createTicketResponse = function (gmidTicket) {
        var currentGmidTicketDate = new Date();
        currentGmidTicketDate.setHours(currentGmidTicketDate.getHours() + GMID_TICKET_EXPIRATION_INTERVAL);
        var expirationTime = currentGmidTicketDate.getTime();
        return {
            gmidTicket: gmidTicket,
            expirationTime: expirationTime,
        };
    };
    return ApiService;
}());
exports.ApiService = ApiService;


/***/ }),

/***/ "./src/core/ApiService/app/DomainResolver.ts":
/*!***************************************************!*\
  !*** ./src/core/ApiService/app/DomainResolver.ts ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var GroupApiDomainService_1 = __webpack_require__(/*! src/core/ApiService/app/GroupApiDomainService */ "./src/core/ApiService/app/GroupApiDomainService.ts");
exports.LoginTokenPrefix = 'gig_loginToken';
function shouldResetGroupApiDomain(customApiDomainPrefix, cachedApiDomain, ssoKey, storage) {
    // we should reset the cached groupApiDomain if (#!)ALL(!#) of the requirements below are met:
    // 1. we have customAPIDomainPrefix defined for this site
    // 2. the customApiDomainPrefix is not the same as the one stored in cache (the most recent customApiDomainPrefix is not being used)
    // 3. user is not logged-in (loginToken "gig_loginToken_{ssoKey}" doesn't exists)
    if (storage === void 0) { storage = window.gigya.utils.localStorage.initializeAdapter(window.gigya.utils.localStorage.CookieStorageAdapter); }
    if (!customApiDomainPrefix) {
        window.gigya.logger.info("no custom api domain prefix so..");
    }
    else {
        window.gigya.logger.info("has custom api domain prefix: " + customApiDomainPrefix);
        var cachedCustomApiDomainPrefix = cachedApiDomain && cachedApiDomain.split('.')[0];
        var hasCustomPrefixChanged = customApiDomainPrefix !== cachedCustomApiDomainPrefix;
        if (!hasCustomPrefixChanged) {
            window.gigya.logger.info("..and it already matches group api domain's (" + cachedApiDomain + ") so..");
        }
        else {
            window.gigya.logger.info("..and it's different from existing group api domain's (" + cachedApiDomain + ")");
            var hasGroupLoginToken = Boolean(ssoKey && storage.getItem(exports.LoginTokenPrefix + "_" + ssoKey));
            if (hasGroupLoginToken) {
                window.gigya.logger.info("..but a group session exists so..");
            }
            else {
                window.gigya.logger.debug("..and no group session -> resetting group api domain");
                return true;
            }
        }
    }
    // return customApiDomainPrefix && hasCustomPrefixChanged && !hasLoginToken;
    return false;
}
exports.shouldResetGroupApiDomain = shouldResetGroupApiDomain;
function createDomainResolver(dataCenter, trustedDomains, originDomain, defaultDomain, customApiDomainPrefix, groupApiDomainService, ssoKey) {
    if (groupApiDomainService === void 0) { groupApiDomainService = new GroupApiDomainService_1.GroupApiDomainService(); }
    if (ssoKey === void 0) { ssoKey = window.gigya.partnerSettings.ssoKey; }
    var log = window.gigya.logger.group("api domain resolver");
    var groupApiDomain = groupApiDomainService.get();
    var isGroupApiDomain = Boolean(groupApiDomain);
    var shouldResolveApiDomain = !isGroupApiDomain || shouldResetGroupApiDomain(customApiDomainPrefix, groupApiDomain, ssoKey); // no stored api domain for group (first time in group or a non-group site)
    var effectiveApiDomain;
    if (!shouldResolveApiDomain) {
        window.gigya.logger.info("using existing group api domain: " + groupApiDomain);
        effectiveApiDomain = groupApiDomain;
    }
    else {
        window.gigya.logger.info("resolving api domain");
        window.gigya.logger.info("trusted domains", trustedDomains);
        var baseDomain = window.gigya._.getBaseDomain(trustedDomains, originDomain, ['gigya.com', 'gigya-api.cn', defaultDomain]);
        window.gigya.logger.info("base domain: " + baseDomain);
        var resolvedApiDomain = window.gigya._.resolveApiDomain(customApiDomainPrefix, baseDomain, dataCenter, defaultDomain);
        window.gigya.logger.info("resolved api domain: " + resolvedApiDomain);
        if (ssoKey) {
            isGroupApiDomain = true;
        }
        effectiveApiDomain = resolvedApiDomain;
    }
    groupApiDomainService.set(effectiveApiDomain);
    log.end();
    return {
        originDomain: originDomain,
        isGroupApiDomain: isGroupApiDomain,
        getApiDomain: window.gigya._.apiDomainFactory(effectiveApiDomain, defaultDomain),
        isApiDomainFirstParty: Boolean(customApiDomainPrefix),
        hasGroupApiDomainChanged: ssoKey && shouldResolveApiDomain,
    };
}
exports.createDomainResolver = createDomainResolver;


/***/ }),

/***/ "./src/core/ApiService/app/GroupApiDomainService.ts":
/*!**********************************************************!*\
  !*** ./src/core/ApiService/app/GroupApiDomainService.ts ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var LocalInfo_1 = __webpack_require__(/*! ../../Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var GroupApiDomainKey = 'apiDomain';
var GroupApiDomainService = /** @class */ (function () {
    function GroupApiDomainService(_ssoKey, _storage, _pageDomain) {
        if (_ssoKey === void 0) { _ssoKey = window.gigya.partnerSettings.ssoKey; }
        if (_storage === void 0) { _storage = window.gigya.utils.localStorage.initializeAdapter(window.gigya.utils.localStorage.CookieStorageAdapter); }
        if (_pageDomain === void 0) { _pageDomain = LocalInfo_1.localInfo.pageDomain; }
        this._ssoKey = _ssoKey;
        this._storage = _storage;
        this._pageDomain = _pageDomain;
        this._cookieName = GroupApiDomainKey + "_" + this._ssoKey;
    }
    GroupApiDomainService.prototype.get = function () {
        return this._ssoKey ? this._storage.getItem(this._cookieName) : undefined;
    };
    GroupApiDomainService.prototype.set = function (apiDomain) {
        if (this._ssoKey) {
            window.gigya.logger.info("setting as group api domain for " + this._ssoKey);
            this._storage.removeItem(this._cookieName);
            this._storage.setItem(this._cookieName, apiDomain, undefined, this._pageDomain);
        }
    };
    return GroupApiDomainService;
}());
exports.GroupApiDomainService = GroupApiDomainService;


/***/ }),

/***/ "./src/core/ApiService/app/JsonpRequest.ts":
/*!*************************************************!*\
  !*** ./src/core/ApiService/app/JsonpRequest.ts ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var GSErrors_1 = __webpack_require__(/*! ../../Gigya.Js/app/GSErrors */ "./src/core/Gigya.Js/app/GSErrors.ts");
var LocalInfo_1 = __webpack_require__(/*! ../../Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
function callback(response, requestId) {
    if (!requestId && response) {
        requestId = response['context'];
    }
    if (!requestId) {
        return;
    }
    var req = pendingRequests[requestId];
    if (req) {
        req.handleResponse(response);
    }
}
exports.callback = callback;
function getRequestId(method, params, settings) {
    var id = settings.jsSdkRequestId;
    if (id) {
        return id;
    }
    if (settings.disableCache || window.gigya.localInfo.isSafari || (window.gigya.localInfo.isIE10 && method.indexOf('accounts.getAccountInfo') > -1)) {
        return 'R' + new Date().getTime() + '_' + Math.random();
    }
    var paramsCopy = window.gigya.utils.object.clone(params);
    for (var param in paramsCopy) {
        if (paramsCopy.hasOwnProperty(param)) {
            if (param.indexOf('fb_') === 0 || param === 'source' || param === 'sourceData') {
                // remove fb session params for caching key
                delete paramsCopy[param];
            }
        }
    }
    return 'R' + window.gigya.utils.object.getMurmurHash(Math.random().toString() + method + window.gigya.utils.object.getHash(paramsCopy));
}
var pendingRequests = {};
var POSTContainerId = "gigyaRequestForms_" + Date.now();
var JsonpRequest = /** @class */ (function () {
    function JsonpRequest(baseDomain, method, params, callback, settings, id) {
        var _this = this;
        if (settings === void 0) { settings = {}; }
        if (id === void 0) { id = getRequestId(method, params, settings); }
        this.baseDomain = baseDomain;
        this.method = method;
        this.params = params;
        this.callback = callback;
        this.settings = settings;
        this.id = id;
        this.getUrl = function () { return _this.baseDomain + "/" + _this.method; };
        this.ifrName = 'gigyaPostIframe_' + new Date().getTime();
        this.retry = 0;
    }
    JsonpRequest.prototype.send = function (ignoreCacheTimeout) {
        var _this = this;
        if (this.inProgress) {
            return;
        }
        pendingRequests[this.id] = this;
        this.inProgress = true;
        this.addDefaultParams();
        var paramsString = window.gigya.utils.keyValue.serialize(this.params);
        if (!ignoreCacheTimeout && this.settings.cacheTimeout) {
            var cacheKey = this.getCacheKey();
            window.gigya.utils.sessionCache.get(cacheKey, this.settings.cacheTimeout, function (cachedResponse) {
                if (cachedResponse) {
                    delete _this.settings.cacheTimeout; // Avoid caching it again.
                    callback(cachedResponse, _this.id);
                }
                else {
                    _this.inProgress = false;
                    _this.send(true);
                }
            });
            return;
        }
        var extraLength = 0; //8000;
        var maxLength = 4 * 1024;
        if (window.gigya.localInfo.isIE) {
            extraLength = 2 * 1024;
        }
        if (window.gigya._.Uri.parse(this.getUrl()).href.toLowerCase() !== this.getUrl().toLowerCase()) {
            window.gigya.logger.warn("Aborting Request for " + this.method + ". Path manipulation detected.");
            return;
        }
        var reqUrl = this.getUrl() + "?" + paramsString;
        if (!LocalInfo_1.localInfo.isOnLine() || (reqUrl.length + extraLength <= maxLength && !this.settings.forcePost)) {
            // The result of this script load would be to call Request.className
            window.gigya.utils.script.load(reqUrl, function () {
                callback({
                    context: _this.id,
                    errorCode: GSErrors_1.GSErrors.NETWORK_ERROR,
                    errorMessage: 'Network_error',
                });
            });
        }
        else {
            window.gigya.utils.functions.invokeOnPageLoad(function () {
                var formsContainer = document.getElementById(POSTContainerId);
                if (formsContainer == null) {
                    formsContainer = document.createElement('span');
                    formsContainer.id = POSTContainerId;
                    formsContainer.style.display = 'none';
                    window.gigya.utils.DOM.appendToBody(formsContainer);
                }
                var formDiv = _this.getPostContainer();
                formsContainer.appendChild(formDiv);
                // process will continue on the onLoadEvent of the form created by this.getFormElement()
            });
        }
    };
    JsonpRequest.prototype.handleResponse = function (response) {
        var _this = this;
        if (this.settings.cacheTimeout) {
            window.gigya.utils.sessionCache.set(this.getCacheKey(), response['errorCode'] == GSErrors_1.GSErrors.OK ? response : null);
        }
        if (this.retryTimerID != null) {
            window.clearTimeout(this.retryTimerID);
        }
        this.inProgress = false;
        if (response['errorCode'] == GSErrors_1.GSErrors.Data_Pending) {
            var t = this.getDataPendingTimeout(this.retry++);
            if (t > 0) {
                // retry
                window.setTimeout(function () {
                    _this.send();
                }, t);
                return;
            }
        }
        else {
            this.dispose();
            this.callback(response);
        }
    };
    JsonpRequest.prototype.addDefaultParams = function () {
        this.params['format'] = 'jsonp';
        this.params['callback'] = 'gigya.callback'; // for jsonp callbacks
        this.params['context'] = this.id;
    };
    JsonpRequest.prototype.getCacheKey = function () {
        return this.method + "_" + window.gigya.utils.keyValue.serialize(this.params);
    };
    JsonpRequest.prototype.createParamFormElements = function () {
        var docFragment = document.createDocumentFragment();
        for (var p in this.params) {
            var textAreaElem = window.gigya.utils.DOM.createElementWithAttributes('textarea', {
                name: p,
                value: typeof this.params[p] === 'object' ? window.gigya.utils.URL.URLEncode(window.gigya.utils.JSON.serialize(this.params[p])) : this.params[p],
            });
            docFragment.appendChild(textAreaElem);
        }
        return docFragment;
    };
    JsonpRequest.prototype.getPostContainer = function () {
        var _this = this;
        var postContainerElem;
        if (!this.postContainerElem) {
            postContainerElem = document.createElement('span');
            var formId_1 = this.ifrName + 'form';
            var getSavedResponseId_1 = this.id;
            // Form
            var postCommentForm = window.gigya.utils.DOM.createElementWithAttributes('form', {
                acceptCharset: 'UTF-8',
                id: formId_1,
                method: 'post',
                action: this.getUrl() + "?context=" + this.id + "&&saveResponseID=" + this.id,
                target: this.ifrName,
            });
            var hiddenCommentField = window.gigya.utils.DOM.createElementWithAttributes('input', {
                type: 'hidden',
                name: 'utf8',
                value: '&#x2713;',
            });
            var submitCommentBtn = window.gigya.utils.DOM.createElementWithAttributes('input', {
                type: 'submit',
            });
            postCommentForm.appendChild(this.createParamFormElements());
            postCommentForm.appendChild(hiddenCommentField);
            postCommentForm.appendChild(submitCommentBtn);
            postContainerElem.appendChild(postCommentForm);
            // iframe
            var didSubmitForm_1;
            var elIFrame = window.gigya.utils.DOM.createElement('iframe', this.ifrName);
            elIFrame.setAttribute('id', this.ifrName);
            window.gigya.utils.functions.addSrcToIFrameIfNeeded(elIFrame);
            window.gigya.utils.DOM.addEventListener(elIFrame, 'load', function () {
                // 1. iframe was loaded for the first time, submit the form
                if (!didSubmitForm_1) {
                    window.setTimeout(function () {
                        var form = document.getElementById(formId_1);
                        if (form) {
                            form.submit();
                        }
                    }, 10);
                    didSubmitForm_1 = true;
                }
                else {
                    // 2. form was submitted to the iframe, get saved response
                    _this.getSavedFormResponse(getSavedResponseId_1);
                }
            });
            postContainerElem.appendChild(elIFrame);
            this.postContainerElem = postContainerElem;
        }
        return postContainerElem;
    };
    JsonpRequest.prototype.getSavedFormResponse = function (getSavedResponseId) {
        var _this = this;
        new JsonpRequest(this.baseDomain, 'socialize.getSavedResponse', {
            APIKey: this.params['APIKey'],
            saveResponseID: this.id,
            ucid: this.params['ucid'],
            noAuth: true,
            sdk: 'js_' + window.gigya.build.version,
        }, function (response) {
            _this.handleResponse(response);
        }, undefined, getSavedResponseId).send();
    };
    JsonpRequest.prototype.getDataPendingTimeout = function (retry) {
        if (retry <= 4)
            return 500;
        if (retry <= 4 + 4)
            return 1000;
        if (retry <= 4 + 4 + 13)
            return 2000;
        if (retry <= 4 + 4 + 13 + 18)
            return 5000;
        return -1;
    };
    JsonpRequest.prototype.dispose = function () {
        delete pendingRequests[this.id];
        if (this.postContainerElem) {
            window.gigya.utils.DOM.removeElement(this.postContainerElem);
        }
        delete this.postContainerElem;
    };
    return JsonpRequest;
}());
exports.JsonpRequest = JsonpRequest;


/***/ }),

/***/ "./src/core/ApiService/app/gigyaUtils.ts":
/*!***********************************************!*\
  !*** ./src/core/ApiService/app/gigyaUtils.ts ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var GigyaUtilsCookie = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/cookie */ "./src/core/Gigya.Js/app/Utils/cookie.ts");
var GigyaUtilsDOM = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/DOM */ "./src/core/Gigya.Js/app/Utils/DOM.ts");
var GigyaUtilsDomains = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/domains */ "./src/core/Gigya.Js/app/Utils/domains.ts");
var GigyaUtilsFunctions = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/functions */ "./src/core/Gigya.Js/app/Utils/functions.ts");
var GigyaUtilsJSON = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/JSON */ "./src/core/Gigya.Js/app/Utils/JSON.ts");
var GigyaUtilsKeyValue = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/keyValue */ "./src/core/Gigya.Js/app/Utils/keyValue.ts");
var GigyaUtilsLocalStorage = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/localStorage */ "./src/core/Gigya.Js/app/Utils/localStorage.ts");
var GigyaUtilsStringParams = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/stringParams */ "./src/core/Gigya.Js/app/Utils/stringParams.ts");
var GigyaUtilsObject = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/object */ "./src/core/Gigya.Js/app/Utils/object.ts");
var GigyaUtilsScript = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/script */ "./src/core/Gigya.Js/app/Utils/script.ts");
var GigyaUtilsSessionCache = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/sessionCache */ "./src/core/Gigya.Js/app/Utils/sessionCache.ts");
var GigyaUtilsUri = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var GigyaUtilsURL = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/URL */ "./src/core/Gigya.Js/app/Utils/URL.ts");
var GigyaUtilsValidation = __webpack_require__(/*! src/core/Gigya.Js/app/Utils/validation */ "./src/core/Gigya.Js/app/Utils/validation.ts");
if (!window.gigya._) {
    window.gigya._ = {};
}
if (!window.gigya.utils) {
    window.gigya.utils = {};
}
if (!window.gigya.utils.cookie) {
    window.gigya.utils.cookie = {};
}
if (!window.gigya.utils.DOM) {
    window.gigya.utils.DOM = {};
}
if (!window.gigya.utils.functions) {
    window.gigya.utils.functions = {};
}
if (!window.gigya.utils.JSON) {
    window.gigya.utils.JSON = {};
}
if (!window.gigya.utils.keyValue) {
    window.gigya.utils.keyValue = {};
}
if (!window.gigya.utils.localStorage) {
    window.gigya.utils.localStorage = {};
}
if (!window.gigya.utils.object) {
    window.gigya.utils.object = {};
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
if (!window.gigya.utils.URL) {
    window.gigya.utils.URL = {};
}
if (!window.gigya.utils.validation) {
    window.gigya.utils.validation = {};
}
__webpack_provided_Object_dot_assign(window.gigya._, GigyaUtilsUri, GigyaUtilsDomains);
__webpack_provided_Object_dot_assign(window.gigya.utils.cookie, GigyaUtilsCookie);
__webpack_provided_Object_dot_assign(window.gigya.utils.DOM, GigyaUtilsDOM);
__webpack_provided_Object_dot_assign(window.gigya.utils.functions, GigyaUtilsFunctions);
__webpack_provided_Object_dot_assign(window.gigya.utils.JSON, GigyaUtilsJSON);
__webpack_provided_Object_dot_assign(window.gigya.utils.keyValue, GigyaUtilsKeyValue);
__webpack_provided_Object_dot_assign(window.gigya.utils.localStorage, GigyaUtilsLocalStorage);
__webpack_provided_Object_dot_assign(window.gigya.utils.object, GigyaUtilsObject);
__webpack_provided_Object_dot_assign(window.gigya.utils.script, GigyaUtilsScript);
__webpack_provided_Object_dot_assign(window.gigya.utils.sessionCache, GigyaUtilsSessionCache);
__webpack_provided_Object_dot_assign(window.gigya.utils.URL, GigyaUtilsURL);
__webpack_provided_Object_dot_assign(window.gigya.utils.validation, GigyaUtilsValidation);
__webpack_provided_Object_dot_assign(window.gigya.utils, GigyaUtilsStringParams);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

/***/ }),

/***/ "./src/core/ApiService/app/main.ts":
/*!*****************************************!*\
  !*** ./src/core/ApiService/app/main.ts ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(__webpack_provided_Object_dot_assign) {Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
__webpack_require__(/*! src/core/Gigya.Js/app/GigyaGlobals */ "./src/core/Gigya.Js/app/GigyaGlobals.ts");
__webpack_require__(/*! src/core/ApiService/app/gigyaUtils */ "./src/core/ApiService/app/gigyaUtils.ts");
__webpack_require__(/*! src/core/Gigya.Js/app/Logger/main */ "./src/core/Gigya.Js/app/Logger/main.ts");
var LocalInfo = __webpack_require__(/*! src/core/Gigya.Js/app/LocalInfo */ "./src/core/Gigya.Js/app/LocalInfo.ts");
var JsonpRequest = __webpack_require__(/*! ./JsonpRequest */ "./src/core/ApiService/app/JsonpRequest.ts");
var GroupApiDomainService_1 = __webpack_require__(/*! src/core/ApiService/app/GroupApiDomainService */ "./src/core/ApiService/app/GroupApiDomainService.ts");
var DomainResolver_1 = __webpack_require__(/*! src/core/ApiService/app/DomainResolver */ "./src/core/ApiService/app/DomainResolver.ts");
var ApiService_1 = __webpack_require__(/*! src/core/ApiService/app/ApiService */ "./src/core/ApiService/app/ApiService.ts");
var ProxyListener_1 = __webpack_require__(/*! src/core/ServiceProxy/ProxyListener */ "./src/core/ServiceProxy/ProxyListener.ts");
var Uri_1 = __webpack_require__(/*! ../../Gigya.Js/app/Utils/Uri */ "./src/core/Gigya.Js/app/Utils/Uri.ts");
var domains_1 = __webpack_require__(/*! ../../Gigya.Js/app/Utils/domains */ "./src/core/Gigya.Js/app/Utils/domains.ts");
/**
 * this file will be inject into api.aspx
 */
if (!window.gigya.apiKey) // falling back to apiKey from query string in case something went wrong on our back end.
    window.gigya.apiKey = window.gigya.utils.getReqParamValue(location.search, 'apiKey');
var apiKey = window.gigya.apiKey, defaultApiDomain = window.gigya.defaultApiDomain, dataCenter = window.gigya.dataCenter, configHostnameOverride = window.gigya.configHostnameOverride;
(function main() {
    return tslib_1.__awaiter(this, void 0, void 0, function () {
        var webSdkConfig, originDomain, configHostname, groupApiDomainService, domainResolver, hasGmid, apiService, listener, e_1;
        return tslib_1.__generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    originDomain = getOriginDomain();
                    configHostname = configHostnameOverride || "https://cdns." + dataCenter + "." + defaultApiDomain;
                    return [4 /*yield*/, Uri_1.Uri.parse(configHostname + "/sdk.config.getAPI")
                            .addToSearch({ apiKey: apiKey, pageURL: originDomain })
                            .fetch(3)];
                case 1:
                    webSdkConfig = _a.sent();
                    LocalInfo.localInfo.baseDomain = domains_1.getBaseDomain(webSdkConfig.baseDomains);
                    __webpack_provided_Object_dot_assign(window.gigya, LocalInfo, JsonpRequest, { partnerSettings: webSdkConfig });
                    groupApiDomainService = new GroupApiDomainService_1.GroupApiDomainService();
                    domainResolver = DomainResolver_1.createDomainResolver(dataCenter, webSdkConfig.baseDomains, originDomain, defaultApiDomain, webSdkConfig.customAPIDomainPrefix, groupApiDomainService);
                    hasGmid = window.gigya.utils.getParamValue(document.cookie, 'hasGmid', ';') === 'ver2';
                    apiService = new ApiService_1.ApiService(apiKey, hasGmid, domainResolver, groupApiDomainService);
                    listener = new ProxyListener_1.ProxyListener(apiService, originDomain);
                    listener.listen({
                        apiDomain: domainResolver.getApiDomain(),
                        isGroupApiDomain: domainResolver.isGroupApiDomain,
                        hasGroupApiDomainChanged: domainResolver.hasGroupApiDomainChanged,
                    });
                    return [3 /*break*/, 3];
                case 2:
                    e_1 = _a.sent();
                    window.gigya.logger.error("gigya: error loading api frame", { e: e_1, webSdkConfig: webSdkConfig });
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
})();
function getOriginDomain() {
    // in iframe
    if (window.location != window.parent.location) {
        return window.document.referrer || window.gigya.utils.getReqParamValue(location.hash, 'origin');
    }
    else {
        return window.document.location.href;
    }
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js")["__assign"]))

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

/***/ "./src/core/ServiceProxy/ProxyListener.ts":
/*!************************************************!*\
  !*** ./src/core/ServiceProxy/ProxyListener.ts ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
var utils = __webpack_require__(/*! src/core/ServiceProxy/utils */ "./src/core/ServiceProxy/utils.ts");
var interfaces_1 = __webpack_require__(/*! src/core/ServiceProxy/interfaces */ "./src/core/ServiceProxy/interfaces.ts");
var ProxyListener = /** @class */ (function () {
    function ProxyListener(_service, origin, _allowedMethods, _target, _win) {
        var _this = this;
        if (origin === void 0) { origin = utils.getParentUrl(); }
        if (_allowedMethods === void 0) { _allowedMethods = utils.getAllClassMethodsNames(_service); }
        if (_target === void 0) { _target = window.parent; }
        if (_win === void 0) { _win = window; }
        this._service = _service;
        this.origin = origin;
        this._allowedMethods = _allowedMethods;
        this._target = _target;
        this._win = _win;
        this.stopCancellers = [];
        this._listening = false;
        this.onRequest = function (e) { return tslib_1.__awaiter(_this, void 0, gigya.Promise, function () {
            var req, e_1;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!utils.validateOrigin(this.origin, e.origin)) return [3 /*break*/, 7];
                        req = JSON.parse(e.data);
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        if (!interfaces_1.isSignalRequest(req)) return [3 /*break*/, 3];
                        return [4 /*yield*/, this.handleSignalRequest(req)];
                    case 2:
                        _a.sent();
                        return [3 /*break*/, 5];
                    case 3: 
                    // normal request
                    return [4 /*yield*/, this.handleProxyRequest(req)];
                    case 4:
                        // normal request
                        _a.sent();
                        _a.label = 5;
                    case 5: return [3 /*break*/, 7];
                    case 6:
                        e_1 = _a.sent();
                        this.postError({ res: e_1.message || e_1, id: req.id });
                        return [3 /*break*/, 7];
                    case 7: return [2 /*return*/];
                }
            });
        }); };
    }
    Object.defineProperty(ProxyListener.prototype, "isListening", {
        get: function () {
            return this._listening;
        },
        enumerable: true,
        configurable: true
    });
    ProxyListener.prototype.listen = function (payload) {
        var _this = this;
        if (!this.isListening) {
            this._win.setTimeout(function () {
                // setTimeout workaround for IE9. else we'll get JSON is undefined
                _this._win.addEventListener('message', _this.onRequest, true);
                _this.postMessage({
                    id: undefined,
                    signal: 'listening',
                    res: payload,
                });
                _this._listening = true;
            }, 1);
        }
    };
    ProxyListener.prototype.stopListen = function () {
        if (this.isListening) {
            this._win.removeEventListener('message', this.onRequest, true);
            this._listening = false;
        }
    };
    ProxyListener.prototype.handleSignalRequest = function (req) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var _a, cancel, res, payload;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _a = req.signal;
                        switch (_a) {
                            case 'stop': return [3 /*break*/, 1];
                        }
                        return [3 /*break*/, 7];
                    case 1: return [4 /*yield*/, this.getCancelResult()];
                    case 2:
                        cancel = _b.sent();
                        res = void 0;
                        if (!!cancel) return [3 /*break*/, 5];
                        this.stopListen();
                        payload = void 0;
                        if (!this.onStop) return [3 /*break*/, 4];
                        payload = this.onStop();
                        if (!payload.then) return [3 /*break*/, 4];
                        return [4 /*yield*/, payload];
                    case 3:
                        payload = _b.sent();
                        _b.label = 4;
                    case 4:
                        res = {
                            id: req.id,
                            signal: 'stop',
                            res: payload,
                        };
                        return [3 /*break*/, 6];
                    case 5:
                        res = {
                            id: req.id,
                            signal: 'error',
                            res: cancel,
                        };
                        _b.label = 6;
                    case 6:
                        this.postMessage(res);
                        return [3 /*break*/, 8];
                    case 7: 
                    // ignore
                    return [3 /*break*/, 8];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    ProxyListener.prototype.getCancelResult = function () {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var _i, _a, shouldCancelStop, res;
            return tslib_1.__generator(this, function (_b) {
                switch (_b.label) {
                    case 0:
                        _i = 0, _a = this.stopCancellers;
                        _b.label = 1;
                    case 1:
                        if (!(_i < _a.length)) return [3 /*break*/, 5];
                        shouldCancelStop = _a[_i];
                        res = shouldCancelStop();
                        if (!res.then) return [3 /*break*/, 3];
                        return [4 /*yield*/, res];
                    case 2:
                        res = _b.sent();
                        _b.label = 3;
                    case 3:
                        if (res)
                            return [2 /*return*/, res];
                        _b.label = 4;
                    case 4:
                        _i++;
                        return [3 /*break*/, 1];
                    case 5: return [2 /*return*/, undefined];
                }
            });
        });
    };
    ProxyListener.prototype.handleProxyRequest = function (req) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var res;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.validateRequest(req);
                        return [4 /*yield*/, this.forwardToService(req)];
                    case 1:
                        res = _a.sent();
                        this.postMessage({
                            id: req.id,
                            res: res,
                        });
                        return [2 /*return*/];
                }
            });
        });
    };
    ProxyListener.prototype.validateRequest = function (req) {
        if (!req.id || !req.methodName || this._allowedMethods.indexOf(req.methodName) < 0) {
            throw 'proxy request in invalid format';
        }
    };
    ProxyListener.prototype.forwardToService = function (req) {
        return tslib_1.__awaiter(this, void 0, gigya.Promise, function () {
            var method, result;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        method = this._service[req.methodName];
                        result = method.apply(this._service, req.params);
                        if (!(result && result.then)) return [3 /*break*/, 2];
                        return [4 /*yield*/, result];
                    case 1:
                        result = _a.sent();
                        _a.label = 2;
                    case 2: return [2 /*return*/, result];
                }
            });
        });
    };
    ProxyListener.prototype.postMessage = function (msg) {
        var message = typeof msg === 'object' ? JSON.stringify(msg) : msg;
        this._target.postMessage(message, this.origin);
    };
    ProxyListener.prototype.postError = function (err) {
        err.signal = 'error';
        this.postMessage(err);
    };
    return ProxyListener;
}());
exports.ProxyListener = ProxyListener;


/***/ }),

/***/ "./src/core/ServiceProxy/interfaces.ts":
/*!*********************************************!*\
  !*** ./src/core/ServiceProxy/interfaces.ts ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
function isSignalRequest(req) {
    return Boolean(req.signal);
}
exports.isSignalRequest = isSignalRequest;


/***/ }),

/***/ "./src/core/ServiceProxy/utils.ts":
/*!****************************************!*\
  !*** ./src/core/ServiceProxy/utils.ts ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

Object.defineProperty(exports, "__esModule", { value: true });
exports.getParentUrl = function (win, doc) {
    if (win === void 0) { win = window; }
    if (doc === void 0) { doc = document; }
    return (win.location != win.parent.location ? doc.referrer : doc.location.href);
};
exports.getBodyElement = function (doc) {
    if (doc === void 0) { doc = document; }
    return new gigya.Promise(function (resolve) {
        if (doc.body)
            resolve(doc.body);
        else
            doc.addEventListener('DOMContentLoaded', function () { return resolve(doc.body); });
    });
};
exports.validateOrigin = function (origin, checked) { return origin.toLowerCase().indexOf(checked.toLowerCase()) === 0; };
exports.createIframe = function (doc) {
    if (doc === void 0) { doc = document; }
    var iframe = doc.createElement('iframe');
    iframe.style.position = 'absolute';
    iframe.style.height = '0px';
    iframe.style.width = '0px';
    iframe.style.display = 'none';
    return iframe;
};
var _counter = 1;
exports.generateId = function () {
    return String(_counter++);
};
function isClass(type) {
    return !!type.prototype;
}
exports.getAllClassMethodsNames = function (type) {
    var props = [];
    var proto = isClass(type) ? type.prototype : type;
    do {
        try {
            /** initial implementation - using filter **/
            var l = Object.getOwnPropertyNames(proto)
                // .concat(Object.getOwnPropertySymbols(proto).map(s => s.toString()))
                .map(function (s) { return s.toString(); })
                .sort()
                .filter(function (p, i, arr) {
                return typeof proto[p] === 'function' && //only the methods
                    p !== 'constructor' && //not the constructor
                    (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
                    props.indexOf(p) === -1;
            });
            props = props.concat(l);
        }
        catch (e) {
            /** bug fix implementation - using custom our own filter logic
             case of Array.filter polyfill causing "can not read property '0' of undefined" **/
            var arr = Object.getOwnPropertyNames(proto)
                // .concat(Object.getOwnPropertySymbols(proto).map(s => s.toString()))
                .map(function (s) { return s.toString(); })
                .sort();
            var l = [];
            for (var i = 0; i < arr.length; i++) {
                var p = arr[i];
                if (typeof proto[p] === 'function' && //only the methods
                    p !== 'constructor' && //not the constructor
                    (i == 0 || p !== arr[i - 1]) && //not overriding in this prototype
                    props.indexOf(p) === -1) {
                    //not overridden in a child
                    l.push(p);
                }
            }
            props = props.concat(l);
        }
    } while ((proto = Object.getPrototypeOf(proto)) && //walk-up the prototype chain
        Object.getPrototypeOf(proto) //not the the Object prototype methods (hasOwnProperty, etc...)
    );
    return props;
};


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2NvbmZpZy92ZXJzaW9uVGVtcGxhdGUudHh0Iiwid2VicGFjazovLy9saWIvZXM2LXByb21pc2UvdXRpbHMuanMiLCJ3ZWJwYWNrOi8vL2xpYi9lczYtcHJvbWlzZS9hc2FwLmpzIiwid2VicGFjazovLy9saWIvZXM2LXByb21pc2UvdGhlbi5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL3Byb21pc2UvcmVzb2x2ZS5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlLy1pbnRlcm5hbC5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL2VudW1lcmF0b3IuanMiLCJ3ZWJwYWNrOi8vL2xpYi9lczYtcHJvbWlzZS9wcm9taXNlL2FsbC5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL3Byb21pc2UvcmFjZS5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL3Byb21pc2UvcmVqZWN0LmpzIiwid2VicGFjazovLy9saWIvZXM2LXByb21pc2UvcHJvbWlzZS5qcyIsIndlYnBhY2s6Ly8vbGliL2VzNi1wcm9taXNlL3BvbHlmaWxsLmpzIiwid2VicGFjazovLy9saWIvZXM2LXByb21pc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Byb2Nlc3MvYnJvd3Nlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvdHNsaWIvdHNsaWIuZXM2LmpzIiwid2VicGFjazovLy8od2VicGFjaykvYnVpbGRpbi9nbG9iYWwuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQXBpU2VydmljZS9hcHAvQXBpU2VydmljZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9BcGlTZXJ2aWNlL2FwcC9Eb21haW5SZXNvbHZlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9BcGlTZXJ2aWNlL2FwcC9Hcm91cEFwaURvbWFpblNlcnZpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQXBpU2VydmljZS9hcHAvSnNvbnBSZXF1ZXN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0FwaVNlcnZpY2UvYXBwL2dpZ3lhVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvQXBpU2VydmljZS9hcHAvbWFpbi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvR1NFcnJvcnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0dpZ3lhR2xvYmFscy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2dnZXIvYmFzZUxvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9nZ2VyL2lGcmFtZUxvZ2dlci50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9nZ2VyL2ludGVyZmFjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvZ2dlci9sb2dnZXJKc29ucC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9nZ2VyL21haW4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvZ2dlci9wYXJlbnRMb2dnZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL0RPTS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvSlNPTi50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVVJMLnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9VcmkudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2FycmF5LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9jb29raWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2RvbWFpbnMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2Z1bmN0aW9ucy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZ2lneWFTY3JpcHRFbC50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMva2V5VmFsdWUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2xvY2FsU3RvcmFnZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvb2JqZWN0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9xdWV1ZS50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc2NyaXB0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9zZXNzaW9uQ2FjaGUudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3N0cmluZ1BhcmFtcy50cyIsIndlYnBhY2s6Ly8vLi9zcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc3RyaW5nVXRpbHMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3ZpZXdwb3J0LnRzIiwid2VicGFjazovLy8uL3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9jZG4udHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvU2VydmljZVByb3h5L1Byb3h5TGlzdGVuZXIudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvU2VydmljZVByb3h5L2ludGVyZmFjZXMudHMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2NvcmUvU2VydmljZVByb3h5L3V0aWxzLnRzIl0sIm5hbWVzIjpbInJlc29sdmUiLCJfcmVzb2x2ZSIsInRoZW4iLCJvcmlnaW5hbFRoZW4iLCJvcmlnaW5hbFJlc29sdmUiLCJQcm9taXNlIiwicmVqZWN0IiwiX3JlamVjdCIsIlJlc29sdmUiLCJSZWplY3QiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ05PLFNBQVMsZ0JBQWdCLENBQUMsQ0FBQyxFQUFFO0VBQ2xDLElBQUksSUFBSSxHQUFHLE9BQU8sQ0FBQyxDQUFDO0VBQ3BCLE9BQU8sQ0FBQyxLQUFLLElBQUksS0FBSyxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksS0FBSyxVQUFVLENBQUMsQ0FBQztDQUNqRTs7QUFF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QUUsR0FBRyxNQUFNLENBQUMsR0FBRyxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7UUFFL0UsRUFBRSxJQUFJLEVBQUUsQ0FBQztRQUNULEVBQUUsR0FBRyxDQUFDLEVBQUUsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztRQUM5QixHQUFHLEdBQUcsQ0FBQyxDQUFDLEVBQUUsR0FBRyxNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUM7UUFDOUUsRUFBRSxHQUFHLENBQUMsR0FBRyxHQUFHLE1BQU0sQ0FBQyxHQUFHLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsS0FBSyxFQUFFLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztLQUM3RTtJQUVELEVBQUUsR0FBRyxDQUFDLENBQUM7SUFFUCxRQUFRLFNBQVMsRUFBRTtRQUNmLEtBQUssQ0FBQztZQUNGLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQztRQUMvQyxLQUFLLENBQUM7WUFDRixFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUMsS0FBSyxDQUFDO1lBQ0YsRUFBRSxJQUFJLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDO1lBRS9CLEVBQUUs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LENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUNqQyxJQUFNLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBRWpCLElBQ0ksT0FBTyxLQUFLLENBQUMsQ0FBQyxDQUFDLEtBQUssVUFBVSxJQUFJLGtCQUFrQjtvQkFDcEQsQ0FBQyxLQUFLLGFBQWEsSUFBSSxxQkFBcUI7b0JBQzVDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxJQUFJLGtDQUFrQztvQkFDbEUsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsRUFDekI7b0JBQ0UsMkJBQTJCO29CQUUzQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO2lCQUNiO2FBQ0o7WUFDRCxLQUFLLEdBQUcsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQjtLQUNKLFFBQ0csQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLDZCQUE2QjtRQUN2RSxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLCtEQUErRDtNQUM5RjtJQUVGLE9BQU8sS0FBSyxDQUFDO0FBQ2pCLENBQUMsQ0FBQyIsImZpbGUiOiJnaWd5YS5zZXJ2aWNlcy5hcGkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9jb3JlL0FwaVNlcnZpY2UvYXBwL21haW4udHNcIik7XG4iLCIvKiFcbiAqIEBvdmVydmlldyBlczYtcHJvbWlzZSAtIGEgdGlueSBpbXBsZW1lbnRhdGlvbiBvZiBQcm9taXNlcy9BKy5cbiAqIEBjb3B5cmlnaHQgQ29weXJpZ2h0IChjKSAyMDE0IFllaHVkYSBLYXR6LCBUb20gRGFsZSwgU3RlZmFuIFBlbm5lciBhbmQgY29udHJpYnV0b3JzIChDb252ZXJzaW9uIHRvIEVTNiBBUEkgYnkgSmFrZSBBcmNoaWJhbGQpXG4gKiBAbGljZW5zZSAgIExpY2Vuc2VkIHVuZGVyIE1JVCBsaWNlbnNlXG4gKiAgICAgICAgICAgIFNlZSBodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vc3RlZmFucGVubmVyL2VzNi1wcm9taXNlL21hc3Rlci9MSUNFTlNFXG4gKiBAdmVyc2lvbiAgIHY0LjIuOCsxZTY4ZGNlNlxuICovXG4iLCJleHBvcnQgZnVuY3Rpb24gb2JqZWN0T3JGdW5jdGlvbih4KSB7XG4gIHZhciB0eXBlID0gdHlwZW9mIHg7XG4gIHJldHVybiB4ICE9PSBudWxsICYmICh0eXBlID09PSAnb2JqZWN0JyB8fCB0eXBlID09PSAnZnVuY3Rpb24nKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRnVuY3Rpb24oeCkge1xuICByZXR1cm4gdHlwZW9mIHggPT09ICdmdW5jdGlvbic7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc01heWJlVGhlbmFibGUoeCkge1xuICByZXR1cm4geCAhPT0gbnVsbCAmJiB0eXBlb2YgeCA9PT0gJ29iamVjdCc7XG59XG5cbnZhciBfaXNBcnJheSA9IHZvaWQgMDtcbmlmIChBcnJheS5pc0FycmF5KSB7XG4gIF9pc0FycmF5ID0gQXJyYXkuaXNBcnJheTtcbn0gZWxzZSB7XG4gIF9pc0FycmF5ID0gZnVuY3Rpb24gKHgpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBBcnJheV0nO1xuICB9O1xufVxuXG5leHBvcnQgdmFyIGlzQXJyYXkgPSBfaXNBcnJheTsiLCJ2YXIgbGVuID0gMDtcbnZhciB2ZXJ0eE5leHQgPSB2b2lkIDA7XG52YXIgY3VzdG9tU2NoZWR1bGVyRm4gPSB2b2lkIDA7XG5cbmV4cG9ydCB2YXIgYXNhcCA9IGZ1bmN0aW9uIGFzYXAoY2FsbGJhY2ssIGFyZykge1xuICBxdWV1ZVtsZW5dID0gY2FsbGJhY2s7XG4gIHF1ZXVlW2xlbiArIDFdID0gYXJnO1xuICBsZW4gKz0gMjtcbiAgaWYgKGxlbiA9PT0gMikge1xuICAgIC8vIElmIGxlbiBpcyAyLCB0aGF0IG1lYW5zIHRoYXQgd2UgbmVlZCB0byBzY2hlZHVsZSBhbiBhc3luYyBmbHVzaC5cbiAgICAvLyBJZiBhZGRpdGlvbmFsIGNhbGxiYWNrcyBhcmUgcXVldWVkIGJlZm9yZSB0aGUgcXVldWUgaXMgZmx1c2hlZCwgdGhleVxuICAgIC8vIHdpbGwgYmUgcHJvY2Vzc2VkIGJ5IHRoaXMgZmx1c2ggdGhhdCB3ZSBhcmUgc2NoZWR1bGluZy5cbiAgICBpZiAoY3VzdG9tU2NoZWR1bGVyRm4pIHtcbiAgICAgIGN1c3RvbVNjaGVkdWxlckZuKGZsdXNoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc2NoZWR1bGVGbHVzaCgpO1xuICAgIH1cbiAgfVxufTtcblxuZXhwb3J0IGZ1bmN0aW9uIHNldFNjaGVkdWxlcihzY2hlZHVsZUZuKSB7XG4gIGN1c3RvbVNjaGVkdWxlckZuID0gc2NoZWR1bGVGbjtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHNldEFzYXAoYXNhcEZuKSB7XG4gIGFzYXAgPSBhc2FwRm47XG59XG5cbnZhciBicm93c2VyV2luZG93ID0gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cgOiB1bmRlZmluZWQ7XG52YXIgYnJvd3Nlckdsb2JhbCA9IGJyb3dzZXJXaW5kb3cgfHwge307XG52YXIgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIgPSBicm93c2VyR2xvYmFsLk11dGF0aW9uT2JzZXJ2ZXIgfHwgYnJvd3Nlckdsb2JhbC5XZWJLaXRNdXRhdGlvbk9ic2VydmVyO1xudmFyIGlzTm9kZSA9IHR5cGVvZiBzZWxmID09PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYge30udG9TdHJpbmcuY2FsbChwcm9jZXNzKSA9PT0gJ1tvYmplY3QgcHJvY2Vzc10nO1xuXG4vLyB0ZXN0IGZvciB3ZWIgd29ya2VyIGJ1dCBub3QgaW4gSUUxMFxudmFyIGlzV29ya2VyID0gdHlwZW9mIFVpbnQ4Q2xhbXBlZEFycmF5ICE9PSAndW5kZWZpbmVkJyAmJiB0eXBlb2YgaW1wb3J0U2NyaXB0cyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIE1lc3NhZ2VDaGFubmVsICE9PSAndW5kZWZpbmVkJztcblxuLy8gbm9kZVxuZnVuY3Rpb24gdXNlTmV4dFRpY2soKSB7XG4gIC8vIG5vZGUgdmVyc2lvbiAwLjEwLnggZGlzcGxheXMgYSBkZXByZWNhdGlvbiB3YXJuaW5nIHdoZW4gbmV4dFRpY2sgaXMgdXNlZCByZWN1cnNpdmVseVxuICAvLyBzZWUgaHR0cHM6Ly9naXRodWIuY29tL2N1am9qcy93aGVuL2lzc3Vlcy80MTAgZm9yIGRldGFpbHNcbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gcHJvY2Vzcy5uZXh0VGljayhmbHVzaCk7XG4gIH07XG59XG5cbi8vIHZlcnR4XG5mdW5jdGlvbiB1c2VWZXJ0eFRpbWVyKCkge1xuICBpZiAodHlwZW9mIHZlcnR4TmV4dCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgdmVydHhOZXh0KGZsdXNoKTtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIHVzZVNldFRpbWVvdXQoKTtcbn1cblxuZnVuY3Rpb24gdXNlTXV0YXRpb25PYnNlcnZlcigpIHtcbiAgdmFyIGl0ZXJhdGlvbnMgPSAwO1xuICB2YXIgb2JzZXJ2ZXIgPSBuZXcgQnJvd3Nlck11dGF0aW9uT2JzZXJ2ZXIoZmx1c2gpO1xuICB2YXIgbm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKCcnKTtcbiAgb2JzZXJ2ZXIub2JzZXJ2ZShub2RlLCB7IGNoYXJhY3RlckRhdGE6IHRydWUgfSk7XG5cbiAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICBub2RlLmRhdGEgPSBpdGVyYXRpb25zID0gKytpdGVyYXRpb25zICUgMjtcbiAgfTtcbn1cblxuLy8gd2ViIHdvcmtlclxuZnVuY3Rpb24gdXNlTWVzc2FnZUNoYW5uZWwoKSB7XG4gIHZhciBjaGFubmVsID0gbmV3IE1lc3NhZ2VDaGFubmVsKCk7XG4gIGNoYW5uZWwucG9ydDEub25tZXNzYWdlID0gZmx1c2g7XG4gIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgcmV0dXJuIGNoYW5uZWwucG9ydDIucG9zdE1lc3NhZ2UoMCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVzZVNldFRpbWVvdXQoKSB7XG4gIC8vIFN0b3JlIHNldFRpbWVvdXQgcmVmZXJlbmNlIHNvIGVzNi1wcm9taXNlIHdpbGwgYmUgdW5hZmZlY3RlZCBieVxuICAvLyBvdGhlciBjb2RlIG1vZGlmeWluZyBzZXRUaW1lb3V0IChsaWtlIHNpbm9uLnVzZUZha2VUaW1lcnMoKSlcbiAgdmFyIGdsb2JhbFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBnbG9iYWxTZXRUaW1lb3V0KGZsdXNoLCAxKTtcbiAgfTtcbn1cblxudmFyIHF1ZXVlID0gbmV3IEFycmF5KDEwMDApO1xuZnVuY3Rpb24gZmx1c2goKSB7XG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyBpICs9IDIpIHtcbiAgICB2YXIgY2FsbGJhY2sgPSBxdWV1ZVtpXTtcbiAgICB2YXIgYXJnID0gcXVldWVbaSArIDFdO1xuXG4gICAgY2FsbGJhY2soYXJnKTtcblxuICAgIHF1ZXVlW2ldID0gdW5kZWZpbmVkO1xuICAgIHF1ZXVlW2kgKyAxXSA9IHVuZGVmaW5lZDtcbiAgfVxuXG4gIGxlbiA9IDA7XG59XG5cbmZ1bmN0aW9uIGF0dGVtcHRWZXJ0eCgpIHtcbiAgdHJ5IHtcbiAgICB2YXIgdmVydHggPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpLnJlcXVpcmUoJ3ZlcnR4Jyk7XG4gICAgdmVydHhOZXh0ID0gdmVydHgucnVuT25Mb29wIHx8IHZlcnR4LnJ1bk9uQ29udGV4dDtcbiAgICByZXR1cm4gdXNlVmVydHhUaW1lcigpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgcmV0dXJuIHVzZVNldFRpbWVvdXQoKTtcbiAgfVxufVxuXG52YXIgc2NoZWR1bGVGbHVzaCA9IHZvaWQgMDtcbi8vIERlY2lkZSB3aGF0IGFzeW5jIG1ldGhvZCB0byB1c2UgdG8gdHJpZ2dlcmluZyBwcm9jZXNzaW5nIG9mIHF1ZXVlZCBjYWxsYmFja3M6XG5pZiAoaXNOb2RlKSB7XG4gIHNjaGVkdWxlRmx1c2ggPSB1c2VOZXh0VGljaygpO1xufSBlbHNlIGlmIChCcm93c2VyTXV0YXRpb25PYnNlcnZlcikge1xuICBzY2hlZHVsZUZsdXNoID0gdXNlTXV0YXRpb25PYnNlcnZlcigpO1xufSBlbHNlIGlmIChpc1dvcmtlcikge1xuICBzY2hlZHVsZUZsdXNoID0gdXNlTWVzc2FnZUNoYW5uZWwoKTtcbn0gZWxzZSBpZiAoYnJvd3NlcldpbmRvdyA9PT0gdW5kZWZpbmVkICYmIHR5cGVvZiByZXF1aXJlID09PSAnZnVuY3Rpb24nKSB7XG4gIHNjaGVkdWxlRmx1c2ggPSBhdHRlbXB0VmVydHgoKTtcbn0gZWxzZSB7XG4gIHNjaGVkdWxlRmx1c2ggPSB1c2VTZXRUaW1lb3V0KCk7XG59IiwiaW1wb3J0IHsgaW52b2tlQ2FsbGJhY2ssIHN1YnNjcmliZSwgRlVMRklMTEVELCBSRUpFQ1RFRCwgbm9vcCwgbWFrZVByb21pc2UsIFBST01JU0VfSUQgfSBmcm9tICcuLy1pbnRlcm5hbCc7XG5cbmltcG9ydCB7IGFzYXAgfSBmcm9tICcuL2FzYXAnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0aGVuKG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gIHZhciBwYXJlbnQgPSB0aGlzO1xuXG4gIHZhciBjaGlsZCA9IG5ldyB0aGlzLmNvbnN0cnVjdG9yKG5vb3ApO1xuXG4gIGlmIChjaGlsZFtQUk9NSVNFX0lEXSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgbWFrZVByb21pc2UoY2hpbGQpO1xuICB9XG5cbiAgdmFyIF9zdGF0ZSA9IHBhcmVudC5fc3RhdGU7XG5cblxuICBpZiAoX3N0YXRlKSB7XG4gICAgdmFyIGNhbGxiYWNrID0gYXJndW1lbnRzW19zdGF0ZSAtIDFdO1xuICAgIGFzYXAoZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGludm9rZUNhbGxiYWNrKF9zdGF0ZSwgY2hpbGQsIGNhbGxiYWNrLCBwYXJlbnQuX3Jlc3VsdCk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKTtcbiAgfVxuXG4gIHJldHVybiBjaGlsZDtcbn0iLCJpbXBvcnQgeyBub29wLCByZXNvbHZlIGFzIF9yZXNvbHZlIH0gZnJvbSAnLi4vLWludGVybmFsJztcblxuLyoqXG4gIGBQcm9taXNlLnJlc29sdmVgIHJldHVybnMgYSBwcm9taXNlIHRoYXQgd2lsbCBiZWNvbWUgcmVzb2x2ZWQgd2l0aCB0aGVcbiAgcGFzc2VkIGB2YWx1ZWAuIEl0IGlzIHNob3J0aGFuZCBmb3IgdGhlIGZvbGxvd2luZzpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICByZXNvbHZlKDEpO1xuICB9KTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgIC8vIHZhbHVlID09PSAxXG4gIH0pO1xuICBgYGBcblxuICBJbnN0ZWFkIG9mIHdyaXRpbmcgdGhlIGFib3ZlLCB5b3VyIGNvZGUgbm93IHNpbXBseSBiZWNvbWVzIHRoZSBmb2xsb3dpbmc6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZSA9IFByb21pc2UucmVzb2x2ZSgxKTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgIC8vIHZhbHVlID09PSAxXG4gIH0pO1xuICBgYGBcblxuICBAbWV0aG9kIHJlc29sdmVcbiAgQHN0YXRpY1xuICBAcGFyYW0ge0FueX0gdmFsdWUgdmFsdWUgdGhhdCB0aGUgcmV0dXJuZWQgcHJvbWlzZSB3aWxsIGJlIHJlc29sdmVkIHdpdGhcbiAgVXNlZnVsIGZvciB0b29saW5nLlxuICBAcmV0dXJuIHtQcm9taXNlfSBhIHByb21pc2UgdGhhdCB3aWxsIGJlY29tZSBmdWxmaWxsZWQgd2l0aCB0aGUgZ2l2ZW5cbiAgYHZhbHVlYFxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJlc29sdmUob2JqZWN0KSB7XG4gIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG5cbiAgaWYgKG9iamVjdCAmJiB0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyAmJiBvYmplY3QuY29uc3RydWN0b3IgPT09IENvbnN0cnVjdG9yKSB7XG4gICAgcmV0dXJuIG9iamVjdDtcbiAgfVxuXG4gIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKG5vb3ApO1xuICBfcmVzb2x2ZShwcm9taXNlLCBvYmplY3QpO1xuICByZXR1cm4gcHJvbWlzZTtcbn0iLCJpbXBvcnQgeyBvYmplY3RPckZ1bmN0aW9uLCBpc0Z1bmN0aW9uIH0gZnJvbSAnLi91dGlscyc7XG5cbmltcG9ydCB7IGFzYXAgfSBmcm9tICcuL2FzYXAnO1xuXG5pbXBvcnQgb3JpZ2luYWxUaGVuIGZyb20gJy4vdGhlbic7XG5pbXBvcnQgb3JpZ2luYWxSZXNvbHZlIGZyb20gJy4vcHJvbWlzZS9yZXNvbHZlJztcblxuZXhwb3J0IHZhciBQUk9NSVNFX0lEID0gTWF0aC5yYW5kb20oKS50b1N0cmluZygzNikuc3Vic3RyaW5nKDIpO1xuXG5mdW5jdGlvbiBub29wKCkge31cblxudmFyIFBFTkRJTkcgPSB2b2lkIDA7XG52YXIgRlVMRklMTEVEID0gMTtcbnZhciBSRUpFQ1RFRCA9IDI7XG5cbmZ1bmN0aW9uIHNlbGZGdWxmaWxsbWVudCgpIHtcbiAgcmV0dXJuIG5ldyBUeXBlRXJyb3IoXCJZb3UgY2Fubm90IHJlc29sdmUgYSBwcm9taXNlIHdpdGggaXRzZWxmXCIpO1xufVxuXG5mdW5jdGlvbiBjYW5ub3RSZXR1cm5Pd24oKSB7XG4gIHJldHVybiBuZXcgVHlwZUVycm9yKCdBIHByb21pc2VzIGNhbGxiYWNrIGNhbm5vdCByZXR1cm4gdGhhdCBzYW1lIHByb21pc2UuJyk7XG59XG5cbmZ1bmN0aW9uIHRyeVRoZW4odGhlbiwgdmFsdWUsIGZ1bGZpbGxtZW50SGFuZGxlciwgcmVqZWN0aW9uSGFuZGxlcikge1xuICB0cnkge1xuICAgIHRoZW4uY2FsbCh2YWx1ZSwgZnVsZmlsbG1lbnRIYW5kbGVyLCByZWplY3Rpb25IYW5kbGVyKTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIHJldHVybiBlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSwgdGhlbikge1xuICBhc2FwKGZ1bmN0aW9uIChwcm9taXNlKSB7XG4gICAgdmFyIHNlYWxlZCA9IGZhbHNlO1xuICAgIHZhciBlcnJvciA9IHRyeVRoZW4odGhlbiwgdGhlbmFibGUsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgaWYgKHNlYWxlZCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgaWYgKHRoZW5hYmxlICE9PSB2YWx1ZSkge1xuICAgICAgICByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfVxuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIGlmIChzZWFsZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgc2VhbGVkID0gdHJ1ZTtcblxuICAgICAgcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgfSwgJ1NldHRsZTogJyArIChwcm9taXNlLl9sYWJlbCB8fCAnIHVua25vd24gcHJvbWlzZScpKTtcblxuICAgIGlmICghc2VhbGVkICYmIGVycm9yKSB7XG4gICAgICBzZWFsZWQgPSB0cnVlO1xuICAgICAgcmVqZWN0KHByb21pc2UsIGVycm9yKTtcbiAgICB9XG4gIH0sIHByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVPd25UaGVuYWJsZShwcm9taXNlLCB0aGVuYWJsZSkge1xuICBpZiAodGhlbmFibGUuX3N0YXRlID09PSBGVUxGSUxMRUQpIHtcbiAgICBmdWxmaWxsKHByb21pc2UsIHRoZW5hYmxlLl9yZXN1bHQpO1xuICB9IGVsc2UgaWYgKHRoZW5hYmxlLl9zdGF0ZSA9PT0gUkVKRUNURUQpIHtcbiAgICByZWplY3QocHJvbWlzZSwgdGhlbmFibGUuX3Jlc3VsdCk7XG4gIH0gZWxzZSB7XG4gICAgc3Vic2NyaWJlKHRoZW5hYmxlLCB1bmRlZmluZWQsIGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgcmV0dXJuIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHJldHVybiByZWplY3QocHJvbWlzZSwgcmVhc29uKTtcbiAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIG1heWJlVGhlbmFibGUsIHRoZW4pIHtcbiAgaWYgKG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IgPT09IHByb21pc2UuY29uc3RydWN0b3IgJiYgdGhlbiA9PT0gb3JpZ2luYWxUaGVuICYmIG1heWJlVGhlbmFibGUuY29uc3RydWN0b3IucmVzb2x2ZSA9PT0gb3JpZ2luYWxSZXNvbHZlKSB7XG4gICAgaGFuZGxlT3duVGhlbmFibGUocHJvbWlzZSwgbWF5YmVUaGVuYWJsZSk7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHRoZW4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICB9IGVsc2UgaWYgKGlzRnVuY3Rpb24odGhlbikpIHtcbiAgICAgIGhhbmRsZUZvcmVpZ25UaGVuYWJsZShwcm9taXNlLCBtYXliZVRoZW5hYmxlLCB0aGVuKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZnVsZmlsbChwcm9taXNlLCBtYXliZVRoZW5hYmxlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVzb2x2ZShwcm9taXNlLCB2YWx1ZSkge1xuICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICByZWplY3QocHJvbWlzZSwgc2VsZkZ1bGZpbGxtZW50KCkpO1xuICB9IGVsc2UgaWYgKG9iamVjdE9yRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgdmFyIHRoZW4gPSB2b2lkIDA7XG4gICAgdHJ5IHtcbiAgICAgIHRoZW4gPSB2YWx1ZS50aGVuO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICByZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBoYW5kbGVNYXliZVRoZW5hYmxlKHByb21pc2UsIHZhbHVlLCB0aGVuKTtcbiAgfSBlbHNlIHtcbiAgICBmdWxmaWxsKHByb21pc2UsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwdWJsaXNoUmVqZWN0aW9uKHByb21pc2UpIHtcbiAgaWYgKHByb21pc2UuX29uZXJyb3IpIHtcbiAgICBwcm9taXNlLl9vbmVycm9yKHByb21pc2UuX3Jlc3VsdCk7XG4gIH1cblxuICBwdWJsaXNoKHByb21pc2UpO1xufVxuXG5mdW5jdGlvbiBmdWxmaWxsKHByb21pc2UsIHZhbHVlKSB7XG4gIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gUEVORElORykge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIHByb21pc2UuX3Jlc3VsdCA9IHZhbHVlO1xuICBwcm9taXNlLl9zdGF0ZSA9IEZVTEZJTExFRDtcblxuICBpZiAocHJvbWlzZS5fc3Vic2NyaWJlcnMubGVuZ3RoICE9PSAwKSB7XG4gICAgYXNhcChwdWJsaXNoLCBwcm9taXNlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWplY3QocHJvbWlzZSwgcmVhc29uKSB7XG4gIGlmIChwcm9taXNlLl9zdGF0ZSAhPT0gUEVORElORykge1xuICAgIHJldHVybjtcbiAgfVxuICBwcm9taXNlLl9zdGF0ZSA9IFJFSkVDVEVEO1xuICBwcm9taXNlLl9yZXN1bHQgPSByZWFzb247XG5cbiAgYXNhcChwdWJsaXNoUmVqZWN0aW9uLCBwcm9taXNlKTtcbn1cblxuZnVuY3Rpb24gc3Vic2NyaWJlKHBhcmVudCwgY2hpbGQsIG9uRnVsZmlsbG1lbnQsIG9uUmVqZWN0aW9uKSB7XG4gIHZhciBfc3Vic2NyaWJlcnMgPSBwYXJlbnQuX3N1YnNjcmliZXJzO1xuICB2YXIgbGVuZ3RoID0gX3N1YnNjcmliZXJzLmxlbmd0aDtcblxuXG4gIHBhcmVudC5fb25lcnJvciA9IG51bGw7XG5cbiAgX3N1YnNjcmliZXJzW2xlbmd0aF0gPSBjaGlsZDtcbiAgX3N1YnNjcmliZXJzW2xlbmd0aCArIEZVTEZJTExFRF0gPSBvbkZ1bGZpbGxtZW50O1xuICBfc3Vic2NyaWJlcnNbbGVuZ3RoICsgUkVKRUNURURdID0gb25SZWplY3Rpb247XG5cbiAgaWYgKGxlbmd0aCA9PT0gMCAmJiBwYXJlbnQuX3N0YXRlKSB7XG4gICAgYXNhcChwdWJsaXNoLCBwYXJlbnQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHB1Ymxpc2gocHJvbWlzZSkge1xuICB2YXIgc3Vic2NyaWJlcnMgPSBwcm9taXNlLl9zdWJzY3JpYmVycztcbiAgdmFyIHNldHRsZWQgPSBwcm9taXNlLl9zdGF0ZTtcblxuICBpZiAoc3Vic2NyaWJlcnMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgdmFyIGNoaWxkID0gdm9pZCAwLFxuICAgICAgY2FsbGJhY2sgPSB2b2lkIDAsXG4gICAgICBkZXRhaWwgPSBwcm9taXNlLl9yZXN1bHQ7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdWJzY3JpYmVycy5sZW5ndGg7IGkgKz0gMykge1xuICAgIGNoaWxkID0gc3Vic2NyaWJlcnNbaV07XG4gICAgY2FsbGJhY2sgPSBzdWJzY3JpYmVyc1tpICsgc2V0dGxlZF07XG5cbiAgICBpZiAoY2hpbGQpIHtcbiAgICAgIGludm9rZUNhbGxiYWNrKHNldHRsZWQsIGNoaWxkLCBjYWxsYmFjaywgZGV0YWlsKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY2FsbGJhY2soZGV0YWlsKTtcbiAgICB9XG4gIH1cblxuICBwcm9taXNlLl9zdWJzY3JpYmVycy5sZW5ndGggPSAwO1xufVxuXG5mdW5jdGlvbiBpbnZva2VDYWxsYmFjayhzZXR0bGVkLCBwcm9taXNlLCBjYWxsYmFjaywgZGV0YWlsKSB7XG4gIHZhciBoYXNDYWxsYmFjayA9IGlzRnVuY3Rpb24oY2FsbGJhY2spLFxuICAgICAgdmFsdWUgPSB2b2lkIDAsXG4gICAgICBlcnJvciA9IHZvaWQgMCxcbiAgICAgIHN1Y2NlZWRlZCA9IHRydWU7XG5cbiAgaWYgKGhhc0NhbGxiYWNrKSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhbHVlID0gY2FsbGJhY2soZGV0YWlsKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICBzdWNjZWVkZWQgPSBmYWxzZTtcbiAgICAgIGVycm9yID0gZTtcbiAgICB9XG5cbiAgICBpZiAocHJvbWlzZSA9PT0gdmFsdWUpIHtcbiAgICAgIHJlamVjdChwcm9taXNlLCBjYW5ub3RSZXR1cm5Pd24oKSk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHZhbHVlID0gZGV0YWlsO1xuICB9XG5cbiAgaWYgKHByb21pc2UuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgLy8gbm9vcFxuICB9IGVsc2UgaWYgKGhhc0NhbGxiYWNrICYmIHN1Y2NlZWRlZCkge1xuICAgIHJlc29sdmUocHJvbWlzZSwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKHN1Y2NlZWRlZCA9PT0gZmFsc2UpIHtcbiAgICByZWplY3QocHJvbWlzZSwgZXJyb3IpO1xuICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IEZVTEZJTExFRCkge1xuICAgIGZ1bGZpbGwocHJvbWlzZSwgdmFsdWUpO1xuICB9IGVsc2UgaWYgKHNldHRsZWQgPT09IFJFSkVDVEVEKSB7XG4gICAgcmVqZWN0KHByb21pc2UsIHZhbHVlKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplUHJvbWlzZShwcm9taXNlLCByZXNvbHZlcikge1xuICB0cnkge1xuICAgIHJlc29sdmVyKGZ1bmN0aW9uIHJlc29sdmVQcm9taXNlKHZhbHVlKSB7XG4gICAgICByZXNvbHZlKHByb21pc2UsIHZhbHVlKTtcbiAgICB9LCBmdW5jdGlvbiByZWplY3RQcm9taXNlKHJlYXNvbikge1xuICAgICAgcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gICAgfSk7XG4gIH0gY2F0Y2ggKGUpIHtcbiAgICByZWplY3QocHJvbWlzZSwgZSk7XG4gIH1cbn1cblxudmFyIGlkID0gMDtcbmZ1bmN0aW9uIG5leHRJZCgpIHtcbiAgcmV0dXJuIGlkKys7XG59XG5cbmZ1bmN0aW9uIG1ha2VQcm9taXNlKHByb21pc2UpIHtcbiAgcHJvbWlzZVtQUk9NSVNFX0lEXSA9IGlkKys7XG4gIHByb21pc2UuX3N0YXRlID0gdW5kZWZpbmVkO1xuICBwcm9taXNlLl9yZXN1bHQgPSB1bmRlZmluZWQ7XG4gIHByb21pc2UuX3N1YnNjcmliZXJzID0gW107XG59XG5cbmV4cG9ydCB7IG5leHRJZCwgbWFrZVByb21pc2UsIG5vb3AsIHJlc29sdmUsIHJlamVjdCwgZnVsZmlsbCwgc3Vic2NyaWJlLCBwdWJsaXNoLCBwdWJsaXNoUmVqZWN0aW9uLCBpbml0aWFsaXplUHJvbWlzZSwgaW52b2tlQ2FsbGJhY2ssIEZVTEZJTExFRCwgUkVKRUNURUQsIFBFTkRJTkcsIGhhbmRsZU1heWJlVGhlbmFibGUgfTsiLCJmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7IGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH0gfVxuXG5pbXBvcnQgeyBpc0FycmF5LCBpc01heWJlVGhlbmFibGUgfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IG5vb3AsIHJlamVjdCwgZnVsZmlsbCwgc3Vic2NyaWJlLCBGVUxGSUxMRUQsIFJFSkVDVEVELCBQRU5ESU5HLCBoYW5kbGVNYXliZVRoZW5hYmxlIH0gZnJvbSAnLi8taW50ZXJuYWwnO1xuXG5pbXBvcnQgdGhlbiBmcm9tICcuL3RoZW4nO1xuaW1wb3J0IFByb21pc2UgZnJvbSAnLi9wcm9taXNlJztcbmltcG9ydCBvcmlnaW5hbFJlc29sdmUgZnJvbSAnLi9wcm9taXNlL3Jlc29sdmUnO1xuaW1wb3J0IG9yaWdpbmFsVGhlbiBmcm9tICcuL3RoZW4nO1xuaW1wb3J0IHsgbWFrZVByb21pc2UsIFBST01JU0VfSUQgfSBmcm9tICcuLy1pbnRlcm5hbCc7XG5cbmZ1bmN0aW9uIHZhbGlkYXRpb25FcnJvcigpIHtcbiAgcmV0dXJuIG5ldyBFcnJvcignQXJyYXkgTWV0aG9kcyBtdXN0IGJlIHByb3ZpZGVkIGFuIEFycmF5Jyk7XG59O1xuXG52YXIgRW51bWVyYXRvciA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gRW51bWVyYXRvcihDb25zdHJ1Y3RvciwgaW5wdXQpIHtcbiAgICB0aGlzLl9pbnN0YW5jZUNvbnN0cnVjdG9yID0gQ29uc3RydWN0b3I7XG4gICAgdGhpcy5wcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKG5vb3ApO1xuXG4gICAgaWYgKCF0aGlzLnByb21pc2VbUFJPTUlTRV9JRF0pIHtcbiAgICAgIG1ha2VQcm9taXNlKHRoaXMucHJvbWlzZSk7XG4gICAgfVxuXG4gICAgaWYgKGlzQXJyYXkoaW5wdXQpKSB7XG4gICAgICB0aGlzLmxlbmd0aCA9IGlucHV0Lmxlbmd0aDtcbiAgICAgIHRoaXMuX3JlbWFpbmluZyA9IGlucHV0Lmxlbmd0aDtcblxuICAgICAgdGhpcy5fcmVzdWx0ID0gbmV3IEFycmF5KHRoaXMubGVuZ3RoKTtcblxuICAgICAgaWYgKHRoaXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIGZ1bGZpbGwodGhpcy5wcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5sZW5ndGggPSB0aGlzLmxlbmd0aCB8fCAwO1xuICAgICAgICB0aGlzLl9lbnVtZXJhdGUoaW5wdXQpO1xuICAgICAgICBpZiAodGhpcy5fcmVtYWluaW5nID09PSAwKSB7XG4gICAgICAgICAgZnVsZmlsbCh0aGlzLnByb21pc2UsIHRoaXMuX3Jlc3VsdCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmVqZWN0KHRoaXMucHJvbWlzZSwgdmFsaWRhdGlvbkVycm9yKCkpO1xuICAgIH1cbiAgfVxuXG4gIEVudW1lcmF0b3IucHJvdG90eXBlLl9lbnVtZXJhdGUgPSBmdW5jdGlvbiBfZW51bWVyYXRlKGlucHV0KSB7XG4gICAgZm9yICh2YXIgaSA9IDA7IHRoaXMuX3N0YXRlID09PSBQRU5ESU5HICYmIGkgPCBpbnB1dC5sZW5ndGg7IGkrKykge1xuICAgICAgdGhpcy5fZWFjaEVudHJ5KGlucHV0W2ldLCBpKTtcbiAgICB9XG4gIH07XG5cbiAgRW51bWVyYXRvci5wcm90b3R5cGUuX2VhY2hFbnRyeSA9IGZ1bmN0aW9uIF9lYWNoRW50cnkoZW50cnksIGkpIHtcbiAgICB2YXIgYyA9IHRoaXMuX2luc3RhbmNlQ29uc3RydWN0b3I7XG4gICAgdmFyIHJlc29sdmUgPSBjLnJlc29sdmU7XG5cblxuICAgIGlmIChyZXNvbHZlID09PSBvcmlnaW5hbFJlc29sdmUpIHtcbiAgICAgIHZhciBfdGhlbiA9IHZvaWQgMDtcbiAgICAgIHZhciBlcnJvciA9IHZvaWQgMDtcbiAgICAgIHZhciBkaWRFcnJvciA9IGZhbHNlO1xuICAgICAgdHJ5IHtcbiAgICAgICAgX3RoZW4gPSBlbnRyeS50aGVuO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBkaWRFcnJvciA9IHRydWU7XG4gICAgICAgIGVycm9yID0gZTtcbiAgICAgIH1cblxuICAgICAgaWYgKF90aGVuID09PSBvcmlnaW5hbFRoZW4gJiYgZW50cnkuX3N0YXRlICE9PSBQRU5ESU5HKSB7XG4gICAgICAgIHRoaXMuX3NldHRsZWRBdChlbnRyeS5fc3RhdGUsIGksIGVudHJ5Ll9yZXN1bHQpO1xuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgX3RoZW4gIT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5fcmVtYWluaW5nLS07XG4gICAgICAgIHRoaXMuX3Jlc3VsdFtpXSA9IGVudHJ5O1xuICAgICAgfSBlbHNlIGlmIChjID09PSBQcm9taXNlKSB7XG4gICAgICAgIHZhciBwcm9taXNlID0gbmV3IGMobm9vcCk7XG4gICAgICAgIGlmIChkaWRFcnJvcikge1xuICAgICAgICAgIHJlamVjdChwcm9taXNlLCBlcnJvcik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaGFuZGxlTWF5YmVUaGVuYWJsZShwcm9taXNlLCBlbnRyeSwgX3RoZW4pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChwcm9taXNlLCBpKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHRoaXMuX3dpbGxTZXR0bGVBdChuZXcgYyhmdW5jdGlvbiAocmVzb2x2ZSkge1xuICAgICAgICAgIHJldHVybiByZXNvbHZlKGVudHJ5KTtcbiAgICAgICAgfSksIGkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLl93aWxsU2V0dGxlQXQocmVzb2x2ZShlbnRyeSksIGkpO1xuICAgIH1cbiAgfTtcblxuICBFbnVtZXJhdG9yLnByb3RvdHlwZS5fc2V0dGxlZEF0ID0gZnVuY3Rpb24gX3NldHRsZWRBdChzdGF0ZSwgaSwgdmFsdWUpIHtcbiAgICB2YXIgcHJvbWlzZSA9IHRoaXMucHJvbWlzZTtcblxuXG4gICAgaWYgKHByb21pc2UuX3N0YXRlID09PSBQRU5ESU5HKSB7XG4gICAgICB0aGlzLl9yZW1haW5pbmctLTtcblxuICAgICAgaWYgKHN0YXRlID09PSBSRUpFQ1RFRCkge1xuICAgICAgICByZWplY3QocHJvbWlzZSwgdmFsdWUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5fcmVzdWx0W2ldID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX3JlbWFpbmluZyA9PT0gMCkge1xuICAgICAgZnVsZmlsbChwcm9taXNlLCB0aGlzLl9yZXN1bHQpO1xuICAgIH1cbiAgfTtcblxuICBFbnVtZXJhdG9yLnByb3RvdHlwZS5fd2lsbFNldHRsZUF0ID0gZnVuY3Rpb24gX3dpbGxTZXR0bGVBdChwcm9taXNlLCBpKSB7XG4gICAgdmFyIGVudW1lcmF0b3IgPSB0aGlzO1xuXG4gICAgc3Vic2NyaWJlKHByb21pc2UsIHVuZGVmaW5lZCwgZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICByZXR1cm4gZW51bWVyYXRvci5fc2V0dGxlZEF0KEZVTEZJTExFRCwgaSwgdmFsdWUpO1xuICAgIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAgIHJldHVybiBlbnVtZXJhdG9yLl9zZXR0bGVkQXQoUkVKRUNURUQsIGksIHJlYXNvbik7XG4gICAgfSk7XG4gIH07XG5cbiAgcmV0dXJuIEVudW1lcmF0b3I7XG59KCk7XG5cbmV4cG9ydCBkZWZhdWx0IEVudW1lcmF0b3I7XG47IiwiaW1wb3J0IEVudW1lcmF0b3IgZnJvbSAnLi4vZW51bWVyYXRvcic7XG5cbi8qKlxuICBgUHJvbWlzZS5hbGxgIGFjY2VwdHMgYW4gYXJyYXkgb2YgcHJvbWlzZXMsIGFuZCByZXR1cm5zIGEgbmV3IHByb21pc2Ugd2hpY2hcbiAgaXMgZnVsZmlsbGVkIHdpdGggYW4gYXJyYXkgb2YgZnVsZmlsbG1lbnQgdmFsdWVzIGZvciB0aGUgcGFzc2VkIHByb21pc2VzLCBvclxuICByZWplY3RlZCB3aXRoIHRoZSByZWFzb24gb2YgdGhlIGZpcnN0IHBhc3NlZCBwcm9taXNlIHRvIGJlIHJlamVjdGVkLiBJdCBjYXN0cyBhbGxcbiAgZWxlbWVudHMgb2YgdGhlIHBhc3NlZCBpdGVyYWJsZSB0byBwcm9taXNlcyBhcyBpdCBydW5zIHRoaXMgYWxnb3JpdGhtLlxuXG4gIEV4YW1wbGU6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZTEgPSByZXNvbHZlKDEpO1xuICBsZXQgcHJvbWlzZTIgPSByZXNvbHZlKDIpO1xuICBsZXQgcHJvbWlzZTMgPSByZXNvbHZlKDMpO1xuICBsZXQgcHJvbWlzZXMgPSBbIHByb21pc2UxLCBwcm9taXNlMiwgcHJvbWlzZTMgXTtcblxuICBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbihmdW5jdGlvbihhcnJheSl7XG4gICAgLy8gVGhlIGFycmF5IGhlcmUgd291bGQgYmUgWyAxLCAyLCAzIF07XG4gIH0pO1xuICBgYGBcblxuICBJZiBhbnkgb2YgdGhlIGBwcm9taXNlc2AgZ2l2ZW4gdG8gYGFsbGAgYXJlIHJlamVjdGVkLCB0aGUgZmlyc3QgcHJvbWlzZVxuICB0aGF0IGlzIHJlamVjdGVkIHdpbGwgYmUgZ2l2ZW4gYXMgYW4gYXJndW1lbnQgdG8gdGhlIHJldHVybmVkIHByb21pc2VzJ3NcbiAgcmVqZWN0aW9uIGhhbmRsZXIuIEZvciBleGFtcGxlOlxuXG4gIEV4YW1wbGU6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZTEgPSByZXNvbHZlKDEpO1xuICBsZXQgcHJvbWlzZTIgPSByZWplY3QobmV3IEVycm9yKFwiMlwiKSk7XG4gIGxldCBwcm9taXNlMyA9IHJlamVjdChuZXcgRXJyb3IoXCIzXCIpKTtcbiAgbGV0IHByb21pc2VzID0gWyBwcm9taXNlMSwgcHJvbWlzZTIsIHByb21pc2UzIF07XG5cbiAgUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oZnVuY3Rpb24oYXJyYXkpe1xuICAgIC8vIENvZGUgaGVyZSBuZXZlciBydW5zIGJlY2F1c2UgdGhlcmUgYXJlIHJlamVjdGVkIHByb21pc2VzIVxuICB9LCBmdW5jdGlvbihlcnJvcikge1xuICAgIC8vIGVycm9yLm1lc3NhZ2UgPT09IFwiMlwiXG4gIH0pO1xuICBgYGBcblxuICBAbWV0aG9kIGFsbFxuICBAc3RhdGljXG4gIEBwYXJhbSB7QXJyYXl9IGVudHJpZXMgYXJyYXkgb2YgcHJvbWlzZXNcbiAgQHBhcmFtIHtTdHJpbmd9IGxhYmVsIG9wdGlvbmFsIHN0cmluZyBmb3IgbGFiZWxpbmcgdGhlIHByb21pc2UuXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX0gcHJvbWlzZSB0aGF0IGlzIGZ1bGZpbGxlZCB3aGVuIGFsbCBgcHJvbWlzZXNgIGhhdmUgYmVlblxuICBmdWxmaWxsZWQsIG9yIHJlamVjdGVkIGlmIGFueSBvZiB0aGVtIGJlY29tZSByZWplY3RlZC5cbiAgQHN0YXRpY1xuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFsbChlbnRyaWVzKSB7XG4gIHJldHVybiBuZXcgRW51bWVyYXRvcih0aGlzLCBlbnRyaWVzKS5wcm9taXNlO1xufSIsImltcG9ydCB7IGlzQXJyYXkgfSBmcm9tIFwiLi4vdXRpbHNcIjtcblxuLyoqXG4gIGBQcm9taXNlLnJhY2VgIHJldHVybnMgYSBuZXcgcHJvbWlzZSB3aGljaCBpcyBzZXR0bGVkIGluIHRoZSBzYW1lIHdheSBhcyB0aGVcbiAgZmlyc3QgcGFzc2VkIHByb21pc2UgdG8gc2V0dGxlLlxuXG4gIEV4YW1wbGU6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZTEgPSBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcbiAgICAgIHJlc29sdmUoJ3Byb21pc2UgMScpO1xuICAgIH0sIDIwMCk7XG4gIH0pO1xuXG4gIGxldCBwcm9taXNlMiA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmVzb2x2ZSgncHJvbWlzZSAyJyk7XG4gICAgfSwgMTAwKTtcbiAgfSk7XG5cbiAgUHJvbWlzZS5yYWNlKFtwcm9taXNlMSwgcHJvbWlzZTJdKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgLy8gcmVzdWx0ID09PSAncHJvbWlzZSAyJyBiZWNhdXNlIGl0IHdhcyByZXNvbHZlZCBiZWZvcmUgcHJvbWlzZTFcbiAgICAvLyB3YXMgcmVzb2x2ZWQuXG4gIH0pO1xuICBgYGBcblxuICBgUHJvbWlzZS5yYWNlYCBpcyBkZXRlcm1pbmlzdGljIGluIHRoYXQgb25seSB0aGUgc3RhdGUgb2YgdGhlIGZpcnN0XG4gIHNldHRsZWQgcHJvbWlzZSBtYXR0ZXJzLiBGb3IgZXhhbXBsZSwgZXZlbiBpZiBvdGhlciBwcm9taXNlcyBnaXZlbiB0byB0aGVcbiAgYHByb21pc2VzYCBhcnJheSBhcmd1bWVudCBhcmUgcmVzb2x2ZWQsIGJ1dCB0aGUgZmlyc3Qgc2V0dGxlZCBwcm9taXNlIGhhc1xuICBiZWNvbWUgcmVqZWN0ZWQgYmVmb3JlIHRoZSBvdGhlciBwcm9taXNlcyBiZWNhbWUgZnVsZmlsbGVkLCB0aGUgcmV0dXJuZWRcbiAgcHJvbWlzZSB3aWxsIGJlY29tZSByZWplY3RlZDpcblxuICBgYGBqYXZhc2NyaXB0XG4gIGxldCBwcm9taXNlMSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xuICAgICAgcmVzb2x2ZSgncHJvbWlzZSAxJyk7XG4gICAgfSwgMjAwKTtcbiAgfSk7XG5cbiAgbGV0IHByb21pc2UyID0gbmV3IFByb21pc2UoZnVuY3Rpb24ocmVzb2x2ZSwgcmVqZWN0KXtcbiAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCl7XG4gICAgICByZWplY3QobmV3IEVycm9yKCdwcm9taXNlIDInKSk7XG4gICAgfSwgMTAwKTtcbiAgfSk7XG5cbiAgUHJvbWlzZS5yYWNlKFtwcm9taXNlMSwgcHJvbWlzZTJdKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgLy8gQ29kZSBoZXJlIG5ldmVyIHJ1bnNcbiAgfSwgZnVuY3Rpb24ocmVhc29uKXtcbiAgICAvLyByZWFzb24ubWVzc2FnZSA9PT0gJ3Byb21pc2UgMicgYmVjYXVzZSBwcm9taXNlIDIgYmVjYW1lIHJlamVjdGVkIGJlZm9yZVxuICAgIC8vIHByb21pc2UgMSBiZWNhbWUgZnVsZmlsbGVkXG4gIH0pO1xuICBgYGBcblxuICBBbiBleGFtcGxlIHJlYWwtd29ybGQgdXNlIGNhc2UgaXMgaW1wbGVtZW50aW5nIHRpbWVvdXRzOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgUHJvbWlzZS5yYWNlKFthamF4KCdmb28uanNvbicpLCB0aW1lb3V0KDUwMDApXSlcbiAgYGBgXG5cbiAgQG1ldGhvZCByYWNlXG4gIEBzdGF0aWNcbiAgQHBhcmFtIHtBcnJheX0gcHJvbWlzZXMgYXJyYXkgb2YgcHJvbWlzZXMgdG8gb2JzZXJ2ZVxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSB3aGljaCBzZXR0bGVzIGluIHRoZSBzYW1lIHdheSBhcyB0aGUgZmlyc3QgcGFzc2VkXG4gIHByb21pc2UgdG8gc2V0dGxlLlxuKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHJhY2UoZW50cmllcykge1xuICAvKmpzaGludCB2YWxpZHRoaXM6dHJ1ZSAqL1xuICB2YXIgQ29uc3RydWN0b3IgPSB0aGlzO1xuXG4gIGlmICghaXNBcnJheShlbnRyaWVzKSkge1xuICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24gKF8sIHJlamVjdCkge1xuICAgICAgcmV0dXJuIHJlamVjdChuZXcgVHlwZUVycm9yKCdZb3UgbXVzdCBwYXNzIGFuIGFycmF5IHRvIHJhY2UuJykpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuZXcgQ29uc3RydWN0b3IoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgdmFyIGxlbmd0aCA9IGVudHJpZXMubGVuZ3RoO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBDb25zdHJ1Y3Rvci5yZXNvbHZlKGVudHJpZXNbaV0pLnRoZW4ocmVzb2x2ZSwgcmVqZWN0KTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufSIsImltcG9ydCB7IG5vb3AsIHJlamVjdCBhcyBfcmVqZWN0IH0gZnJvbSAnLi4vLWludGVybmFsJztcblxuLyoqXG4gIGBQcm9taXNlLnJlamVjdGAgcmV0dXJucyBhIHByb21pc2UgcmVqZWN0ZWQgd2l0aCB0aGUgcGFzc2VkIGByZWFzb25gLlxuICBJdCBpcyBzaG9ydGhhbmQgZm9yIHRoZSBmb2xsb3dpbmc6XG5cbiAgYGBgamF2YXNjcmlwdFxuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCl7XG4gICAgcmVqZWN0KG5ldyBFcnJvcignV0hPT1BTJykpO1xuICB9KTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgIC8vIENvZGUgaGVyZSBkb2Vzbid0IHJ1biBiZWNhdXNlIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIVxuICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAnV0hPT1BTJ1xuICB9KTtcbiAgYGBgXG5cbiAgSW5zdGVhZCBvZiB3cml0aW5nIHRoZSBhYm92ZSwgeW91ciBjb2RlIG5vdyBzaW1wbHkgYmVjb21lcyB0aGUgZm9sbG93aW5nOlxuXG4gIGBgYGphdmFzY3JpcHRcbiAgbGV0IHByb21pc2UgPSBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoJ1dIT09QUycpKTtcblxuICBwcm9taXNlLnRoZW4oZnVuY3Rpb24odmFsdWUpe1xuICAgIC8vIENvZGUgaGVyZSBkb2Vzbid0IHJ1biBiZWNhdXNlIHRoZSBwcm9taXNlIGlzIHJlamVjdGVkIVxuICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIHJlYXNvbi5tZXNzYWdlID09PSAnV0hPT1BTJ1xuICB9KTtcbiAgYGBgXG5cbiAgQG1ldGhvZCByZWplY3RcbiAgQHN0YXRpY1xuICBAcGFyYW0ge0FueX0gcmVhc29uIHZhbHVlIHRoYXQgdGhlIHJldHVybmVkIHByb21pc2Ugd2lsbCBiZSByZWplY3RlZCB3aXRoLlxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9IGEgcHJvbWlzZSByZWplY3RlZCB3aXRoIHRoZSBnaXZlbiBgcmVhc29uYC5cbiovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZWplY3QocmVhc29uKSB7XG4gIC8qanNoaW50IHZhbGlkdGhpczp0cnVlICovXG4gIHZhciBDb25zdHJ1Y3RvciA9IHRoaXM7XG4gIHZhciBwcm9taXNlID0gbmV3IENvbnN0cnVjdG9yKG5vb3ApO1xuICBfcmVqZWN0KHByb21pc2UsIHJlYXNvbik7XG4gIHJldHVybiBwcm9taXNlO1xufSIsImZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHsgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfSB9XG5cbmltcG9ydCB7IGlzRnVuY3Rpb24gfSBmcm9tICcuL3V0aWxzJztcbmltcG9ydCB7IG5vb3AsIG5leHRJZCwgUFJPTUlTRV9JRCwgaW5pdGlhbGl6ZVByb21pc2UgfSBmcm9tICcuLy1pbnRlcm5hbCc7XG5pbXBvcnQgeyBhc2FwLCBzZXRBc2FwLCBzZXRTY2hlZHVsZXIgfSBmcm9tICcuL2FzYXAnO1xuXG5pbXBvcnQgYWxsIGZyb20gJy4vcHJvbWlzZS9hbGwnO1xuaW1wb3J0IHJhY2UgZnJvbSAnLi9wcm9taXNlL3JhY2UnO1xuaW1wb3J0IFJlc29sdmUgZnJvbSAnLi9wcm9taXNlL3Jlc29sdmUnO1xuaW1wb3J0IFJlamVjdCBmcm9tICcuL3Byb21pc2UvcmVqZWN0JztcbmltcG9ydCB0aGVuIGZyb20gJy4vdGhlbic7XG5cbmZ1bmN0aW9uIG5lZWRzUmVzb2x2ZXIoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoJ1lvdSBtdXN0IHBhc3MgYSByZXNvbHZlciBmdW5jdGlvbiBhcyB0aGUgZmlyc3QgYXJndW1lbnQgdG8gdGhlIHByb21pc2UgY29uc3RydWN0b3InKTtcbn1cblxuZnVuY3Rpb24gbmVlZHNOZXcoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJGYWlsZWQgdG8gY29uc3RydWN0ICdQcm9taXNlJzogUGxlYXNlIHVzZSB0aGUgJ25ldycgb3BlcmF0b3IsIHRoaXMgb2JqZWN0IGNvbnN0cnVjdG9yIGNhbm5vdCBiZSBjYWxsZWQgYXMgYSBmdW5jdGlvbi5cIik7XG59XG5cbi8qKlxuICBQcm9taXNlIG9iamVjdHMgcmVwcmVzZW50IHRoZSBldmVudHVhbCByZXN1bHQgb2YgYW4gYXN5bmNocm9ub3VzIG9wZXJhdGlvbi4gVGhlXG4gIHByaW1hcnkgd2F5IG9mIGludGVyYWN0aW5nIHdpdGggYSBwcm9taXNlIGlzIHRocm91Z2ggaXRzIGB0aGVuYCBtZXRob2QsIHdoaWNoXG4gIHJlZ2lzdGVycyBjYWxsYmFja3MgdG8gcmVjZWl2ZSBlaXRoZXIgYSBwcm9taXNlJ3MgZXZlbnR1YWwgdmFsdWUgb3IgdGhlIHJlYXNvblxuICB3aHkgdGhlIHByb21pc2UgY2Fubm90IGJlIGZ1bGZpbGxlZC5cblxuICBUZXJtaW5vbG9neVxuICAtLS0tLS0tLS0tLVxuXG4gIC0gYHByb21pc2VgIGlzIGFuIG9iamVjdCBvciBmdW5jdGlvbiB3aXRoIGEgYHRoZW5gIG1ldGhvZCB3aG9zZSBiZWhhdmlvciBjb25mb3JtcyB0byB0aGlzIHNwZWNpZmljYXRpb24uXG4gIC0gYHRoZW5hYmxlYCBpcyBhbiBvYmplY3Qgb3IgZnVuY3Rpb24gdGhhdCBkZWZpbmVzIGEgYHRoZW5gIG1ldGhvZC5cbiAgLSBgdmFsdWVgIGlzIGFueSBsZWdhbCBKYXZhU2NyaXB0IHZhbHVlIChpbmNsdWRpbmcgdW5kZWZpbmVkLCBhIHRoZW5hYmxlLCBvciBhIHByb21pc2UpLlxuICAtIGBleGNlcHRpb25gIGlzIGEgdmFsdWUgdGhhdCBpcyB0aHJvd24gdXNpbmcgdGhlIHRocm93IHN0YXRlbWVudC5cbiAgLSBgcmVhc29uYCBpcyBhIHZhbHVlIHRoYXQgaW5kaWNhdGVzIHdoeSBhIHByb21pc2Ugd2FzIHJlamVjdGVkLlxuICAtIGBzZXR0bGVkYCB0aGUgZmluYWwgcmVzdGluZyBzdGF0ZSBvZiBhIHByb21pc2UsIGZ1bGZpbGxlZCBvciByZWplY3RlZC5cblxuICBBIHByb21pc2UgY2FuIGJlIGluIG9uZSBvZiB0aHJlZSBzdGF0ZXM6IHBlbmRpbmcsIGZ1bGZpbGxlZCwgb3IgcmVqZWN0ZWQuXG5cbiAgUHJvbWlzZXMgdGhhdCBhcmUgZnVsZmlsbGVkIGhhdmUgYSBmdWxmaWxsbWVudCB2YWx1ZSBhbmQgYXJlIGluIHRoZSBmdWxmaWxsZWRcbiAgc3RhdGUuICBQcm9taXNlcyB0aGF0IGFyZSByZWplY3RlZCBoYXZlIGEgcmVqZWN0aW9uIHJlYXNvbiBhbmQgYXJlIGluIHRoZVxuICByZWplY3RlZCBzdGF0ZS4gIEEgZnVsZmlsbG1lbnQgdmFsdWUgaXMgbmV2ZXIgYSB0aGVuYWJsZS5cblxuICBQcm9taXNlcyBjYW4gYWxzbyBiZSBzYWlkIHRvICpyZXNvbHZlKiBhIHZhbHVlLiAgSWYgdGhpcyB2YWx1ZSBpcyBhbHNvIGFcbiAgcHJvbWlzZSwgdGhlbiB0aGUgb3JpZ2luYWwgcHJvbWlzZSdzIHNldHRsZWQgc3RhdGUgd2lsbCBtYXRjaCB0aGUgdmFsdWUnc1xuICBzZXR0bGVkIHN0YXRlLiAgU28gYSBwcm9taXNlIHRoYXQgKnJlc29sdmVzKiBhIHByb21pc2UgdGhhdCByZWplY3RzIHdpbGxcbiAgaXRzZWxmIHJlamVjdCwgYW5kIGEgcHJvbWlzZSB0aGF0ICpyZXNvbHZlcyogYSBwcm9taXNlIHRoYXQgZnVsZmlsbHMgd2lsbFxuICBpdHNlbGYgZnVsZmlsbC5cblxuXG4gIEJhc2ljIFVzYWdlOlxuICAtLS0tLS0tLS0tLS1cblxuICBgYGBqc1xuICBsZXQgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuICAgIC8vIG9uIHN1Y2Nlc3NcbiAgICByZXNvbHZlKHZhbHVlKTtcblxuICAgIC8vIG9uIGZhaWx1cmVcbiAgICByZWplY3QocmVhc29uKTtcbiAgfSk7XG5cbiAgcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgLy8gb24gZnVsZmlsbG1lbnRcbiAgfSwgZnVuY3Rpb24ocmVhc29uKSB7XG4gICAgLy8gb24gcmVqZWN0aW9uXG4gIH0pO1xuICBgYGBcblxuICBBZHZhbmNlZCBVc2FnZTpcbiAgLS0tLS0tLS0tLS0tLS0tXG5cbiAgUHJvbWlzZXMgc2hpbmUgd2hlbiBhYnN0cmFjdGluZyBhd2F5IGFzeW5jaHJvbm91cyBpbnRlcmFjdGlvbnMgc3VjaCBhc1xuICBgWE1MSHR0cFJlcXVlc3Rgcy5cblxuICBgYGBqc1xuICBmdW5jdGlvbiBnZXRKU09OKHVybCkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbihyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgbGV0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpO1xuXG4gICAgICB4aHIub3BlbignR0VUJywgdXJsKTtcbiAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBoYW5kbGVyO1xuICAgICAgeGhyLnJlc3BvbnNlVHlwZSA9ICdqc29uJztcbiAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKCdBY2NlcHQnLCAnYXBwbGljYXRpb24vanNvbicpO1xuICAgICAgeGhyLnNlbmQoKTtcblxuICAgICAgZnVuY3Rpb24gaGFuZGxlcigpIHtcbiAgICAgICAgaWYgKHRoaXMucmVhZHlTdGF0ZSA9PT0gdGhpcy5ET05FKSB7XG4gICAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICAgIHJlc29sdmUodGhpcy5yZXNwb25zZSk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ2dldEpTT046IGAnICsgdXJsICsgJ2AgZmFpbGVkIHdpdGggc3RhdHVzOiBbJyArIHRoaXMuc3RhdHVzICsgJ10nKSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgZ2V0SlNPTignL3Bvc3RzLmpzb24nKS50aGVuKGZ1bmN0aW9uKGpzb24pIHtcbiAgICAvLyBvbiBmdWxmaWxsbWVudFxuICB9LCBmdW5jdGlvbihyZWFzb24pIHtcbiAgICAvLyBvbiByZWplY3Rpb25cbiAgfSk7XG4gIGBgYFxuXG4gIFVubGlrZSBjYWxsYmFja3MsIHByb21pc2VzIGFyZSBncmVhdCBjb21wb3NhYmxlIHByaW1pdGl2ZXMuXG5cbiAgYGBganNcbiAgUHJvbWlzZS5hbGwoW1xuICAgIGdldEpTT04oJy9wb3N0cycpLFxuICAgIGdldEpTT04oJy9jb21tZW50cycpXG4gIF0pLnRoZW4oZnVuY3Rpb24odmFsdWVzKXtcbiAgICB2YWx1ZXNbMF0gLy8gPT4gcG9zdHNKU09OXG4gICAgdmFsdWVzWzFdIC8vID0+IGNvbW1lbnRzSlNPTlxuXG4gICAgcmV0dXJuIHZhbHVlcztcbiAgfSk7XG4gIGBgYFxuXG4gIEBjbGFzcyBQcm9taXNlXG4gIEBwYXJhbSB7RnVuY3Rpb259IHJlc29sdmVyXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQGNvbnN0cnVjdG9yXG4qL1xuXG52YXIgUHJvbWlzZSA9IGZ1bmN0aW9uICgpIHtcbiAgZnVuY3Rpb24gUHJvbWlzZShyZXNvbHZlcikge1xuICAgIHRoaXNbUFJPTUlTRV9JRF0gPSBuZXh0SWQoKTtcbiAgICB0aGlzLl9yZXN1bHQgPSB0aGlzLl9zdGF0ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLl9zdWJzY3JpYmVycyA9IFtdO1xuXG4gICAgaWYgKG5vb3AgIT09IHJlc29sdmVyKSB7XG4gICAgICB0eXBlb2YgcmVzb2x2ZXIgIT09ICdmdW5jdGlvbicgJiYgbmVlZHNSZXNvbHZlcigpO1xuICAgICAgdGhpcyBpbnN0YW5jZW9mIFByb21pc2UgPyBpbml0aWFsaXplUHJvbWlzZSh0aGlzLCByZXNvbHZlcikgOiBuZWVkc05ldygpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICBUaGUgcHJpbWFyeSB3YXkgb2YgaW50ZXJhY3Rpbmcgd2l0aCBhIHByb21pc2UgaXMgdGhyb3VnaCBpdHMgYHRoZW5gIG1ldGhvZCxcbiAgd2hpY2ggcmVnaXN0ZXJzIGNhbGxiYWNrcyB0byByZWNlaXZlIGVpdGhlciBhIHByb21pc2UncyBldmVudHVhbCB2YWx1ZSBvciB0aGVcbiAgcmVhc29uIHdoeSB0aGUgcHJvbWlzZSBjYW5ub3QgYmUgZnVsZmlsbGVkLlxuICAgYGBganNcbiAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uKHVzZXIpe1xuICAgIC8vIHVzZXIgaXMgYXZhaWxhYmxlXG4gIH0sIGZ1bmN0aW9uKHJlYXNvbil7XG4gICAgLy8gdXNlciBpcyB1bmF2YWlsYWJsZSwgYW5kIHlvdSBhcmUgZ2l2ZW4gdGhlIHJlYXNvbiB3aHlcbiAgfSk7XG4gIGBgYFxuICAgQ2hhaW5pbmdcbiAgLS0tLS0tLS1cbiAgIFRoZSByZXR1cm4gdmFsdWUgb2YgYHRoZW5gIGlzIGl0c2VsZiBhIHByb21pc2UuICBUaGlzIHNlY29uZCwgJ2Rvd25zdHJlYW0nXG4gIHByb21pc2UgaXMgcmVzb2x2ZWQgd2l0aCB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBmaXJzdCBwcm9taXNlJ3MgZnVsZmlsbG1lbnRcbiAgb3IgcmVqZWN0aW9uIGhhbmRsZXIsIG9yIHJlamVjdGVkIGlmIHRoZSBoYW5kbGVyIHRocm93cyBhbiBleGNlcHRpb24uXG4gICBgYGBqc1xuICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICByZXR1cm4gdXNlci5uYW1lO1xuICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgcmV0dXJuICdkZWZhdWx0IG5hbWUnO1xuICB9KS50aGVuKGZ1bmN0aW9uICh1c2VyTmFtZSkge1xuICAgIC8vIElmIGBmaW5kVXNlcmAgZnVsZmlsbGVkLCBgdXNlck5hbWVgIHdpbGwgYmUgdGhlIHVzZXIncyBuYW1lLCBvdGhlcndpc2UgaXRcbiAgICAvLyB3aWxsIGJlIGAnZGVmYXVsdCBuYW1lJ2BcbiAgfSk7XG4gICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZvdW5kIHVzZXIsIGJ1dCBzdGlsbCB1bmhhcHB5Jyk7XG4gIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknKTtcbiAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyBuZXZlciByZWFjaGVkXG4gIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAvLyBpZiBgZmluZFVzZXJgIGZ1bGZpbGxlZCwgYHJlYXNvbmAgd2lsbCBiZSAnRm91bmQgdXNlciwgYnV0IHN0aWxsIHVuaGFwcHknLlxuICAgIC8vIElmIGBmaW5kVXNlcmAgcmVqZWN0ZWQsIGByZWFzb25gIHdpbGwgYmUgJ2BmaW5kVXNlcmAgcmVqZWN0ZWQgYW5kIHdlJ3JlIHVuaGFwcHknLlxuICB9KTtcbiAgYGBgXG4gIElmIHRoZSBkb3duc3RyZWFtIHByb21pc2UgZG9lcyBub3Qgc3BlY2lmeSBhIHJlamVjdGlvbiBoYW5kbGVyLCByZWplY3Rpb24gcmVhc29ucyB3aWxsIGJlIHByb3BhZ2F0ZWQgZnVydGhlciBkb3duc3RyZWFtLlxuICAgYGBganNcbiAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgdGhyb3cgbmV3IFBlZGFnb2dpY2FsRXhjZXB0aW9uKCdVcHN0cmVhbSBlcnJvcicpO1xuICB9KS50aGVuKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIC8vIG5ldmVyIHJlYWNoZWRcbiAgfSkudGhlbihmdW5jdGlvbiAodmFsdWUpIHtcbiAgICAvLyBuZXZlciByZWFjaGVkXG4gIH0sIGZ1bmN0aW9uIChyZWFzb24pIHtcbiAgICAvLyBUaGUgYFBlZGdhZ29jaWFsRXhjZXB0aW9uYCBpcyBwcm9wYWdhdGVkIGFsbCB0aGUgd2F5IGRvd24gdG8gaGVyZVxuICB9KTtcbiAgYGBgXG4gICBBc3NpbWlsYXRpb25cbiAgLS0tLS0tLS0tLS0tXG4gICBTb21ldGltZXMgdGhlIHZhbHVlIHlvdSB3YW50IHRvIHByb3BhZ2F0ZSB0byBhIGRvd25zdHJlYW0gcHJvbWlzZSBjYW4gb25seSBiZVxuICByZXRyaWV2ZWQgYXN5bmNocm9ub3VzbHkuIFRoaXMgY2FuIGJlIGFjaGlldmVkIGJ5IHJldHVybmluZyBhIHByb21pc2UgaW4gdGhlXG4gIGZ1bGZpbGxtZW50IG9yIHJlamVjdGlvbiBoYW5kbGVyLiBUaGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgdGhlbiBiZSBwZW5kaW5nXG4gIHVudGlsIHRoZSByZXR1cm5lZCBwcm9taXNlIGlzIHNldHRsZWQuIFRoaXMgaXMgY2FsbGVkICphc3NpbWlsYXRpb24qLlxuICAgYGBganNcbiAgZmluZFVzZXIoKS50aGVuKGZ1bmN0aW9uICh1c2VyKSB7XG4gICAgcmV0dXJuIGZpbmRDb21tZW50c0J5QXV0aG9yKHVzZXIpO1xuICB9KS50aGVuKGZ1bmN0aW9uIChjb21tZW50cykge1xuICAgIC8vIFRoZSB1c2VyJ3MgY29tbWVudHMgYXJlIG5vdyBhdmFpbGFibGVcbiAgfSk7XG4gIGBgYFxuICAgSWYgdGhlIGFzc2ltbGlhdGVkIHByb21pc2UgcmVqZWN0cywgdGhlbiB0aGUgZG93bnN0cmVhbSBwcm9taXNlIHdpbGwgYWxzbyByZWplY3QuXG4gICBgYGBqc1xuICBmaW5kVXNlcigpLnRoZW4oZnVuY3Rpb24gKHVzZXIpIHtcbiAgICByZXR1cm4gZmluZENvbW1lbnRzQnlBdXRob3IodXNlcik7XG4gIH0pLnRoZW4oZnVuY3Rpb24gKGNvbW1lbnRzKSB7XG4gICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCBmdWxmaWxscywgd2UnbGwgaGF2ZSB0aGUgdmFsdWUgaGVyZVxuICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgLy8gSWYgYGZpbmRDb21tZW50c0J5QXV0aG9yYCByZWplY3RzLCB3ZSdsbCBoYXZlIHRoZSByZWFzb24gaGVyZVxuICB9KTtcbiAgYGBgXG4gICBTaW1wbGUgRXhhbXBsZVxuICAtLS0tLS0tLS0tLS0tLVxuICAgU3luY2hyb25vdXMgRXhhbXBsZVxuICAgYGBgamF2YXNjcmlwdFxuICBsZXQgcmVzdWx0O1xuICAgdHJ5IHtcbiAgICByZXN1bHQgPSBmaW5kUmVzdWx0KCk7XG4gICAgLy8gc3VjY2Vzc1xuICB9IGNhdGNoKHJlYXNvbikge1xuICAgIC8vIGZhaWx1cmVcbiAgfVxuICBgYGBcbiAgIEVycmJhY2sgRXhhbXBsZVxuICAgYGBganNcbiAgZmluZFJlc3VsdChmdW5jdGlvbihyZXN1bHQsIGVycil7XG4gICAgaWYgKGVycikge1xuICAgICAgLy8gZmFpbHVyZVxuICAgIH0gZWxzZSB7XG4gICAgICAvLyBzdWNjZXNzXG4gICAgfVxuICB9KTtcbiAgYGBgXG4gICBQcm9taXNlIEV4YW1wbGU7XG4gICBgYGBqYXZhc2NyaXB0XG4gIGZpbmRSZXN1bHQoKS50aGVuKGZ1bmN0aW9uKHJlc3VsdCl7XG4gICAgLy8gc3VjY2Vzc1xuICB9LCBmdW5jdGlvbihyZWFzb24pe1xuICAgIC8vIGZhaWx1cmVcbiAgfSk7XG4gIGBgYFxuICAgQWR2YW5jZWQgRXhhbXBsZVxuICAtLS0tLS0tLS0tLS0tLVxuICAgU3luY2hyb25vdXMgRXhhbXBsZVxuICAgYGBgamF2YXNjcmlwdFxuICBsZXQgYXV0aG9yLCBib29rcztcbiAgIHRyeSB7XG4gICAgYXV0aG9yID0gZmluZEF1dGhvcigpO1xuICAgIGJvb2tzICA9IGZpbmRCb29rc0J5QXV0aG9yKGF1dGhvcik7XG4gICAgLy8gc3VjY2Vzc1xuICB9IGNhdGNoKHJlYXNvbikge1xuICAgIC8vIGZhaWx1cmVcbiAgfVxuICBgYGBcbiAgIEVycmJhY2sgRXhhbXBsZVxuICAgYGBganNcbiAgIGZ1bmN0aW9uIGZvdW5kQm9va3MoYm9va3MpIHtcbiAgIH1cbiAgIGZ1bmN0aW9uIGZhaWx1cmUocmVhc29uKSB7XG4gICB9XG4gICBmaW5kQXV0aG9yKGZ1bmN0aW9uKGF1dGhvciwgZXJyKXtcbiAgICBpZiAoZXJyKSB7XG4gICAgICBmYWlsdXJlKGVycik7XG4gICAgICAvLyBmYWlsdXJlXG4gICAgfSBlbHNlIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGZpbmRCb29va3NCeUF1dGhvcihhdXRob3IsIGZ1bmN0aW9uKGJvb2tzLCBlcnIpIHtcbiAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICBmYWlsdXJlKGVycik7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGZvdW5kQm9va3MoYm9va3MpO1xuICAgICAgICAgICAgfSBjYXRjaChyZWFzb24pIHtcbiAgICAgICAgICAgICAgZmFpbHVyZShyZWFzb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9IGNhdGNoKGVycm9yKSB7XG4gICAgICAgIGZhaWx1cmUoZXJyKTtcbiAgICAgIH1cbiAgICAgIC8vIHN1Y2Nlc3NcbiAgICB9XG4gIH0pO1xuICBgYGBcbiAgIFByb21pc2UgRXhhbXBsZTtcbiAgIGBgYGphdmFzY3JpcHRcbiAgZmluZEF1dGhvcigpLlxuICAgIHRoZW4oZmluZEJvb2tzQnlBdXRob3IpLlxuICAgIHRoZW4oZnVuY3Rpb24oYm9va3Mpe1xuICAgICAgLy8gZm91bmQgYm9va3NcbiAgfSkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgICAvLyBzb21ldGhpbmcgd2VudCB3cm9uZ1xuICB9KTtcbiAgYGBgXG4gICBAbWV0aG9kIHRoZW5cbiAgQHBhcmFtIHtGdW5jdGlvbn0gb25GdWxmaWxsZWRcbiAgQHBhcmFtIHtGdW5jdGlvbn0gb25SZWplY3RlZFxuICBVc2VmdWwgZm9yIHRvb2xpbmcuXG4gIEByZXR1cm4ge1Byb21pc2V9XG4gICovXG5cbiAgLyoqXG4gIGBjYXRjaGAgaXMgc2ltcGx5IHN1Z2FyIGZvciBgdGhlbih1bmRlZmluZWQsIG9uUmVqZWN0aW9uKWAgd2hpY2ggbWFrZXMgaXQgdGhlIHNhbWVcbiAgYXMgdGhlIGNhdGNoIGJsb2NrIG9mIGEgdHJ5L2NhdGNoIHN0YXRlbWVudC5cbiAgYGBganNcbiAgZnVuY3Rpb24gZmluZEF1dGhvcigpe1xuICB0aHJvdyBuZXcgRXJyb3IoJ2NvdWxkbid0IGZpbmQgdGhhdCBhdXRob3InKTtcbiAgfVxuICAvLyBzeW5jaHJvbm91c1xuICB0cnkge1xuICBmaW5kQXV0aG9yKCk7XG4gIH0gY2F0Y2gocmVhc29uKSB7XG4gIC8vIHNvbWV0aGluZyB3ZW50IHdyb25nXG4gIH1cbiAgLy8gYXN5bmMgd2l0aCBwcm9taXNlc1xuICBmaW5kQXV0aG9yKCkuY2F0Y2goZnVuY3Rpb24ocmVhc29uKXtcbiAgLy8gc29tZXRoaW5nIHdlbnQgd3JvbmdcbiAgfSk7XG4gIGBgYFxuICBAbWV0aG9kIGNhdGNoXG4gIEBwYXJhbSB7RnVuY3Rpb259IG9uUmVqZWN0aW9uXG4gIFVzZWZ1bCBmb3IgdG9vbGluZy5cbiAgQHJldHVybiB7UHJvbWlzZX1cbiAgKi9cblxuXG4gIFByb21pc2UucHJvdG90eXBlLmNhdGNoID0gZnVuY3Rpb24gX2NhdGNoKG9uUmVqZWN0aW9uKSB7XG4gICAgcmV0dXJuIHRoaXMudGhlbihudWxsLCBvblJlamVjdGlvbik7XG4gIH07XG5cbiAgLyoqXG4gICAgYGZpbmFsbHlgIHdpbGwgYmUgaW52b2tlZCByZWdhcmRsZXNzIG9mIHRoZSBwcm9taXNlJ3MgZmF0ZSBqdXN0IGFzIG5hdGl2ZVxuICAgIHRyeS9jYXRjaC9maW5hbGx5IGJlaGF2ZXNcbiAgXG4gICAgU3luY2hyb25vdXMgZXhhbXBsZTpcbiAgXG4gICAgYGBganNcbiAgICBmaW5kQXV0aG9yKCkge1xuICAgICAgaWYgKE1hdGgucmFuZG9tKCkgPiAwLjUpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCk7XG4gICAgICB9XG4gICAgICByZXR1cm4gbmV3IEF1dGhvcigpO1xuICAgIH1cbiAgXG4gICAgdHJ5IHtcbiAgICAgIHJldHVybiBmaW5kQXV0aG9yKCk7IC8vIHN1Y2NlZWQgb3IgZmFpbFxuICAgIH0gY2F0Y2goZXJyb3IpIHtcbiAgICAgIHJldHVybiBmaW5kT3RoZXJBdXRoZXIoKTtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgLy8gYWx3YXlzIHJ1bnNcbiAgICAgIC8vIGRvZXNuJ3QgYWZmZWN0IHRoZSByZXR1cm4gdmFsdWVcbiAgICB9XG4gICAgYGBgXG4gIFxuICAgIEFzeW5jaHJvbm91cyBleGFtcGxlOlxuICBcbiAgICBgYGBqc1xuICAgIGZpbmRBdXRob3IoKS5jYXRjaChmdW5jdGlvbihyZWFzb24pe1xuICAgICAgcmV0dXJuIGZpbmRPdGhlckF1dGhlcigpO1xuICAgIH0pLmZpbmFsbHkoZnVuY3Rpb24oKXtcbiAgICAgIC8vIGF1dGhvciB3YXMgZWl0aGVyIGZvdW5kLCBvciBub3RcbiAgICB9KTtcbiAgICBgYGBcbiAgXG4gICAgQG1ldGhvZCBmaW5hbGx5XG4gICAgQHBhcmFtIHtGdW5jdGlvbn0gY2FsbGJhY2tcbiAgICBAcmV0dXJuIHtQcm9taXNlfVxuICAqL1xuXG5cbiAgUHJvbWlzZS5wcm90b3R5cGUuZmluYWxseSA9IGZ1bmN0aW9uIF9maW5hbGx5KGNhbGxiYWNrKSB7XG4gICAgdmFyIHByb21pc2UgPSB0aGlzO1xuICAgIHZhciBjb25zdHJ1Y3RvciA9IHByb21pc2UuY29uc3RydWN0b3I7XG5cbiAgICBpZiAoaXNGdW5jdGlvbihjYWxsYmFjaykpIHtcbiAgICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfSk7XG4gICAgICB9LCBmdW5jdGlvbiAocmVhc29uKSB7XG4gICAgICAgIHJldHVybiBjb25zdHJ1Y3Rvci5yZXNvbHZlKGNhbGxiYWNrKCkpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgIHRocm93IHJlYXNvbjtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICB9XG5cbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGNhbGxiYWNrLCBjYWxsYmFjayk7XG4gIH07XG5cbiAgcmV0dXJuIFByb21pc2U7XG59KCk7XG5cblByb21pc2UucHJvdG90eXBlLnRoZW4gPSB0aGVuO1xuZXhwb3J0IGRlZmF1bHQgUHJvbWlzZTtcblByb21pc2UuYWxsID0gYWxsO1xuUHJvbWlzZS5yYWNlID0gcmFjZTtcblByb21pc2UucmVzb2x2ZSA9IFJlc29sdmU7XG5Qcm9taXNlLnJlamVjdCA9IFJlamVjdDtcblByb21pc2UuX3NldFNjaGVkdWxlciA9IHNldFNjaGVkdWxlcjtcblByb21pc2UuX3NldEFzYXAgPSBzZXRBc2FwO1xuUHJvbWlzZS5fYXNhcCA9IGFzYXA7IiwiLypnbG9iYWwgc2VsZiovXG5pbXBvcnQgUHJvbWlzZSBmcm9tICcuL3Byb21pc2UnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBwb2x5ZmlsbCgpIHtcbiAgdmFyIGxvY2FsID0gdm9pZCAwO1xuXG4gIGlmICh0eXBlb2YgZ2xvYmFsICE9PSAndW5kZWZpbmVkJykge1xuICAgIGxvY2FsID0gZ2xvYmFsO1xuICB9IGVsc2UgaWYgKHR5cGVvZiBzZWxmICE9PSAndW5kZWZpbmVkJykge1xuICAgIGxvY2FsID0gc2VsZjtcbiAgfSBlbHNlIHtcbiAgICB0cnkge1xuICAgICAgbG9jYWwgPSBGdW5jdGlvbigncmV0dXJuIHRoaXMnKSgpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcigncG9seWZpbGwgZmFpbGVkIGJlY2F1c2UgZ2xvYmFsIG9iamVjdCBpcyB1bmF2YWlsYWJsZSBpbiB0aGlzIGVudmlyb25tZW50Jyk7XG4gICAgfVxuICB9XG5cbiAgdmFyIFAgPSBsb2NhbC5Qcm9taXNlO1xuXG4gIGlmIChQKSB7XG4gICAgdmFyIHByb21pc2VUb1N0cmluZyA9IG51bGw7XG4gICAgdHJ5IHtcbiAgICAgIHByb21pc2VUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChQLnJlc29sdmUoKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgLy8gc2lsZW50bHkgaWdub3JlZFxuICAgIH1cblxuICAgIGlmIChwcm9taXNlVG9TdHJpbmcgPT09ICdbb2JqZWN0IFByb21pc2VdJyAmJiAhUC5jYXN0KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICB9XG5cbiAgbG9jYWwuUHJvbWlzZSA9IFByb21pc2U7XG59IiwiaW1wb3J0IFByb21pc2UgZnJvbSAnLi9lczYtcHJvbWlzZS9wcm9taXNlJztcbmltcG9ydCBwb2x5ZmlsbCBmcm9tICcuL2VzNi1wcm9taXNlL3BvbHlmaWxsJztcblxuLy8gU3RyYW5nZSBjb21wYXQuLlxuUHJvbWlzZS5wb2x5ZmlsbCA9IHBvbHlmaWxsO1xuUHJvbWlzZS5Qcm9taXNlID0gUHJvbWlzZTtcbmV4cG9ydCBkZWZhdWx0IFByb21pc2U7IiwiLy8gc2hpbSBmb3IgdXNpbmcgcHJvY2VzcyBpbiBicm93c2VyXG52YXIgcHJvY2VzcyA9IG1vZHVsZS5leHBvcnRzID0ge307XG5cbi8vIGNhY2hlZCBmcm9tIHdoYXRldmVyIGdsb2JhbCBpcyBwcmVzZW50IHNvIHRoYXQgdGVzdCBydW5uZXJzIHRoYXQgc3R1YiBpdFxuLy8gZG9uJ3QgYnJlYWsgdGhpbmdzLiAgQnV0IHdlIG5lZWQgdG8gd3JhcCBpdCBpbiBhIHRyeSBjYXRjaCBpbiBjYXNlIGl0IGlzXG4vLyB3cmFwcGVkIGluIHN0cmljdCBtb2RlIGNvZGUgd2hpY2ggZG9lc24ndCBkZWZpbmUgYW55IGdsb2JhbHMuICBJdCdzIGluc2lkZSBhXG4vLyBmdW5jdGlvbiBiZWNhdXNlIHRyeS9jYXRjaGVzIGRlb3B0aW1pemUgaW4gY2VydGFpbiBlbmdpbmVzLlxuXG52YXIgY2FjaGVkU2V0VGltZW91dDtcbnZhciBjYWNoZWRDbGVhclRpbWVvdXQ7XG5cbmZ1bmN0aW9uIGRlZmF1bHRTZXRUaW1vdXQoKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdzZXRUaW1lb3V0IGhhcyBub3QgYmVlbiBkZWZpbmVkJyk7XG59XG5mdW5jdGlvbiBkZWZhdWx0Q2xlYXJUaW1lb3V0ICgpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2NsZWFyVGltZW91dCBoYXMgbm90IGJlZW4gZGVmaW5lZCcpO1xufVxuKGZ1bmN0aW9uICgpIHtcbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIHNldFRpbWVvdXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBzZXRUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IGRlZmF1bHRTZXRUaW1vdXQ7XG4gICAgICAgIH1cbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIGNhY2hlZFNldFRpbWVvdXQgPSBkZWZhdWx0U2V0VGltb3V0O1xuICAgIH1cbiAgICB0cnkge1xuICAgICAgICBpZiAodHlwZW9mIGNsZWFyVGltZW91dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gY2xlYXJUaW1lb3V0O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY2FjaGVkQ2xlYXJUaW1lb3V0ID0gZGVmYXVsdENsZWFyVGltZW91dDtcbiAgICB9XG59ICgpKVxuZnVuY3Rpb24gcnVuVGltZW91dChmdW4pIHtcbiAgICBpZiAoY2FjaGVkU2V0VGltZW91dCA9PT0gc2V0VGltZW91dCkge1xuICAgICAgICAvL25vcm1hbCBlbnZpcm9tZW50cyBpbiBzYW5lIHNpdHVhdGlvbnNcbiAgICAgICAgcmV0dXJuIHNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9XG4gICAgLy8gaWYgc2V0VGltZW91dCB3YXNuJ3QgYXZhaWxhYmxlIGJ1dCB3YXMgbGF0dGVyIGRlZmluZWRcbiAgICBpZiAoKGNhY2hlZFNldFRpbWVvdXQgPT09IGRlZmF1bHRTZXRUaW1vdXQgfHwgIWNhY2hlZFNldFRpbWVvdXQpICYmIHNldFRpbWVvdXQpIHtcbiAgICAgICAgY2FjaGVkU2V0VGltZW91dCA9IHNldFRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBzZXRUaW1lb3V0KGZ1biwgMCk7XG4gICAgfVxuICAgIHRyeSB7XG4gICAgICAgIC8vIHdoZW4gd2hlbiBzb21lYm9keSBoYXMgc2NyZXdlZCB3aXRoIHNldFRpbWVvdXQgYnV0IG5vIEkuRS4gbWFkZG5lc3NcbiAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQoZnVuLCAwKTtcbiAgICB9IGNhdGNoKGUpe1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gV2hlbiB3ZSBhcmUgaW4gSS5FLiBidXQgdGhlIHNjcmlwdCBoYXMgYmVlbiBldmFsZWQgc28gSS5FLiBkb2Vzbid0IHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkU2V0VGltZW91dC5jYWxsKG51bGwsIGZ1biwgMCk7XG4gICAgICAgIH0gY2F0Y2goZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvclxuICAgICAgICAgICAgcmV0dXJuIGNhY2hlZFNldFRpbWVvdXQuY2FsbCh0aGlzLCBmdW4sIDApO1xuICAgICAgICB9XG4gICAgfVxuXG5cbn1cbmZ1bmN0aW9uIHJ1bkNsZWFyVGltZW91dChtYXJrZXIpIHtcbiAgICBpZiAoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBjbGVhclRpbWVvdXQpIHtcbiAgICAgICAgLy9ub3JtYWwgZW52aXJvbWVudHMgaW4gc2FuZSBzaXR1YXRpb25zXG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgLy8gaWYgY2xlYXJUaW1lb3V0IHdhc24ndCBhdmFpbGFibGUgYnV0IHdhcyBsYXR0ZXIgZGVmaW5lZFxuICAgIGlmICgoY2FjaGVkQ2xlYXJUaW1lb3V0ID09PSBkZWZhdWx0Q2xlYXJUaW1lb3V0IHx8ICFjYWNoZWRDbGVhclRpbWVvdXQpICYmIGNsZWFyVGltZW91dCkge1xuICAgICAgICBjYWNoZWRDbGVhclRpbWVvdXQgPSBjbGVhclRpbWVvdXQ7XG4gICAgICAgIHJldHVybiBjbGVhclRpbWVvdXQobWFya2VyKTtcbiAgICB9XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gd2hlbiB3aGVuIHNvbWVib2R5IGhhcyBzY3Jld2VkIHdpdGggc2V0VGltZW91dCBidXQgbm8gSS5FLiBtYWRkbmVzc1xuICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0KG1hcmtlcik7XG4gICAgfSBjYXRjaCAoZSl7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBXaGVuIHdlIGFyZSBpbiBJLkUuIGJ1dCB0aGUgc2NyaXB0IGhhcyBiZWVuIGV2YWxlZCBzbyBJLkUuIGRvZXNuJ3QgIHRydXN0IHRoZSBnbG9iYWwgb2JqZWN0IHdoZW4gY2FsbGVkIG5vcm1hbGx5XG4gICAgICAgICAgICByZXR1cm4gY2FjaGVkQ2xlYXJUaW1lb3V0LmNhbGwobnVsbCwgbWFya2VyKTtcbiAgICAgICAgfSBjYXRjaCAoZSl7XG4gICAgICAgICAgICAvLyBzYW1lIGFzIGFib3ZlIGJ1dCB3aGVuIGl0J3MgYSB2ZXJzaW9uIG9mIEkuRS4gdGhhdCBtdXN0IGhhdmUgdGhlIGdsb2JhbCBvYmplY3QgZm9yICd0aGlzJywgaG9wZnVsbHkgb3VyIGNvbnRleHQgY29ycmVjdCBvdGhlcndpc2UgaXQgd2lsbCB0aHJvdyBhIGdsb2JhbCBlcnJvci5cbiAgICAgICAgICAgIC8vIFNvbWUgdmVyc2lvbnMgb2YgSS5FLiBoYXZlIGRpZmZlcmVudCBydWxlcyBmb3IgY2xlYXJUaW1lb3V0IHZzIHNldFRpbWVvdXRcbiAgICAgICAgICAgIHJldHVybiBjYWNoZWRDbGVhclRpbWVvdXQuY2FsbCh0aGlzLCBtYXJrZXIpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxufVxudmFyIHF1ZXVlID0gW107XG52YXIgZHJhaW5pbmcgPSBmYWxzZTtcbnZhciBjdXJyZW50UXVldWU7XG52YXIgcXVldWVJbmRleCA9IC0xO1xuXG5mdW5jdGlvbiBjbGVhblVwTmV4dFRpY2soKSB7XG4gICAgaWYgKCFkcmFpbmluZyB8fCAhY3VycmVudFF1ZXVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZHJhaW5pbmcgPSBmYWxzZTtcbiAgICBpZiAoY3VycmVudFF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBxdWV1ZSA9IGN1cnJlbnRRdWV1ZS5jb25jYXQocXVldWUpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICB9XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCkge1xuICAgICAgICBkcmFpblF1ZXVlKCk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBkcmFpblF1ZXVlKCkge1xuICAgIGlmIChkcmFpbmluZykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhciB0aW1lb3V0ID0gcnVuVGltZW91dChjbGVhblVwTmV4dFRpY2spO1xuICAgIGRyYWluaW5nID0gdHJ1ZTtcblxuICAgIHZhciBsZW4gPSBxdWV1ZS5sZW5ndGg7XG4gICAgd2hpbGUobGVuKSB7XG4gICAgICAgIGN1cnJlbnRRdWV1ZSA9IHF1ZXVlO1xuICAgICAgICBxdWV1ZSA9IFtdO1xuICAgICAgICB3aGlsZSAoKytxdWV1ZUluZGV4IDwgbGVuKSB7XG4gICAgICAgICAgICBpZiAoY3VycmVudFF1ZXVlKSB7XG4gICAgICAgICAgICAgICAgY3VycmVudFF1ZXVlW3F1ZXVlSW5kZXhdLnJ1bigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHF1ZXVlSW5kZXggPSAtMTtcbiAgICAgICAgbGVuID0gcXVldWUubGVuZ3RoO1xuICAgIH1cbiAgICBjdXJyZW50UXVldWUgPSBudWxsO1xuICAgIGRyYWluaW5nID0gZmFsc2U7XG4gICAgcnVuQ2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xufVxuXG5wcm9jZXNzLm5leHRUaWNrID0gZnVuY3Rpb24gKGZ1bikge1xuICAgIHZhciBhcmdzID0gbmV3IEFycmF5KGFyZ3VtZW50cy5sZW5ndGggLSAxKTtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZ3NbaSAtIDFdID0gYXJndW1lbnRzW2ldO1xuICAgICAgICB9XG4gICAgfVxuICAgIHF1ZXVlLnB1c2gobmV3IEl0ZW0oZnVuLCBhcmdzKSk7XG4gICAgaWYgKHF1ZXVlLmxlbmd0aCA9PT0gMSAmJiAhZHJhaW5pbmcpIHtcbiAgICAgICAgcnVuVGltZW91dChkcmFpblF1ZXVlKTtcbiAgICB9XG59O1xuXG4vLyB2OCBsaWtlcyBwcmVkaWN0aWJsZSBvYmplY3RzXG5mdW5jdGlvbiBJdGVtKGZ1biwgYXJyYXkpIHtcbiAgICB0aGlzLmZ1biA9IGZ1bjtcbiAgICB0aGlzLmFycmF5ID0gYXJyYXk7XG59XG5JdGVtLnByb3RvdHlwZS5ydW4gPSBmdW5jdGlvbiAoKSB7XG4gICAgdGhpcy5mdW4uYXBwbHkobnVsbCwgdGhpcy5hcnJheSk7XG59O1xucHJvY2Vzcy50aXRsZSA9ICdicm93c2VyJztcbnByb2Nlc3MuYnJvd3NlciA9IHRydWU7XG5wcm9jZXNzLmVudiA9IHt9O1xucHJvY2Vzcy5hcmd2ID0gW107XG5wcm9jZXNzLnZlcnNpb24gPSAnJzsgLy8gZW1wdHkgc3RyaW5nIHRvIGF2b2lkIHJlZ2V4cCBpc3N1ZXNcbnByb2Nlc3MudmVyc2lvbnMgPSB7fTtcblxuZnVuY3Rpb24gbm9vcCgpIHt9XG5cbnByb2Nlc3Mub24gPSBub29wO1xucHJvY2Vzcy5hZGRMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLm9uY2UgPSBub29wO1xucHJvY2Vzcy5vZmYgPSBub29wO1xucHJvY2Vzcy5yZW1vdmVMaXN0ZW5lciA9IG5vb3A7XG5wcm9jZXNzLnJlbW92ZUFsbExpc3RlbmVycyA9IG5vb3A7XG5wcm9jZXNzLmVtaXQgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kTGlzdGVuZXIgPSBub29wO1xucHJvY2Vzcy5wcmVwZW5kT25jZUxpc3RlbmVyID0gbm9vcDtcblxucHJvY2Vzcy5saXN0ZW5lcnMgPSBmdW5jdGlvbiAobmFtZSkgeyByZXR1cm4gW10gfVxuXG5wcm9jZXNzLmJpbmRpbmcgPSBmdW5jdGlvbiAobmFtZSkge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5iaW5kaW5nIGlzIG5vdCBzdXBwb3J0ZWQnKTtcbn07XG5cbnByb2Nlc3MuY3dkID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gJy8nIH07XG5wcm9jZXNzLmNoZGlyID0gZnVuY3Rpb24gKGRpcikge1xuICAgIHRocm93IG5ldyBFcnJvcigncHJvY2Vzcy5jaGRpciBpcyBub3Qgc3VwcG9ydGVkJyk7XG59O1xucHJvY2Vzcy51bWFzayA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gMDsgfTtcbiIsIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGlmIChlLmluZGV4T2YocFtpXSkgPCAwICYmIE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGUuY2FsbChzLCBwW2ldKSlcclxuICAgICAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgICAgIH1cclxuICAgIHJldHVybiB0O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYykge1xyXG4gICAgdmFyIGMgPSBhcmd1bWVudHMubGVuZ3RoLCByID0gYyA8IDMgPyB0YXJnZXQgOiBkZXNjID09PSBudWxsID8gZGVzYyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBrZXkpIDogZGVzYywgZDtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XHJcbiAgICBlbHNlIGZvciAodmFyIGkgPSBkZWNvcmF0b3JzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSBpZiAoZCA9IGRlY29yYXRvcnNbaV0pIHIgPSAoYyA8IDMgPyBkKHIpIDogYyA+IDMgPyBkKHRhcmdldCwga2V5LCByKSA6IGQodGFyZ2V0LCBrZXkpKSB8fCByO1xyXG4gICAgcmV0dXJuIGMgPiAzICYmIHIgJiYgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCByKSwgcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcGFyYW0ocGFyYW1JbmRleCwgZGVjb3JhdG9yKSB7XHJcbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwga2V5KSB7IGRlY29yYXRvcih0YXJnZXQsIGtleSwgcGFyYW1JbmRleCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpIHtcclxuICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5tZXRhZGF0YSA9PT0gXCJmdW5jdGlvblwiKSByZXR1cm4gUmVmbGVjdC5tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0ZXIodGhpc0FyZywgX2FyZ3VtZW50cywgUCwgZ2VuZXJhdG9yKSB7XHJcbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcclxuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gcmVqZWN0ZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3JbXCJ0aHJvd1wiXSh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XHJcbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHJlc3VsdC52YWx1ZSk7IH0pLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cclxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XHJcbiAgICB9KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZ2VuZXJhdG9yKHRoaXNBcmcsIGJvZHkpIHtcclxuICAgIHZhciBfID0geyBsYWJlbDogMCwgc2VudDogZnVuY3Rpb24oKSB7IGlmICh0WzBdICYgMSkgdGhyb3cgdFsxXTsgcmV0dXJuIHRbMV07IH0sIHRyeXM6IFtdLCBvcHM6IFtdIH0sIGYsIHksIHQsIGc7XHJcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gc3RlcChvcCkge1xyXG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcclxuICAgICAgICB3aGlsZSAoXykgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xyXG4gICAgICAgICAgICBpZiAoeSA9IDAsIHQpIG9wID0gW29wWzBdICYgMiwgdC52YWx1ZV07XHJcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA0OiBfLmxhYmVsKys7IHJldHVybiB7IHZhbHVlOiBvcFsxXSwgZG9uZTogZmFsc2UgfTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDYgJiYgXy5sYWJlbCA8IHRbMV0pIHsgXy5sYWJlbCA9IHRbMV07IHQgPSBvcDsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgICAgIF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkgeyBvcCA9IFs2LCBlXTsgeSA9IDA7IH0gZmluYWxseSB7IGYgPSB0ID0gMDsgfVxyXG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHBvcnRTdGFyKG0sIGV4cG9ydHMpIHtcclxuICAgIGZvciAodmFyIHAgaW4gbSkgaWYgKCFleHBvcnRzLmhhc093blByb3BlcnR5KHApKSBleHBvcnRzW3BdID0gbVtwXTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fdmFsdWVzKG8pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXSwgaSA9IDA7XHJcbiAgICBpZiAobSkgcmV0dXJuIG0uY2FsbChvKTtcclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3NwcmVhZCgpIHtcclxuICAgIGZvciAodmFyIGFyID0gW10sIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKVxyXG4gICAgICAgIGFyID0gYXIuY29uY2F0KF9fcmVhZChhcmd1bWVudHNbaV0pKTtcclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXlzKCkge1xyXG4gICAgZm9yICh2YXIgcyA9IDAsIGkgPSAwLCBpbCA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBpbDsgaSsrKSBzICs9IGFyZ3VtZW50c1tpXS5sZW5ndGg7XHJcbiAgICBmb3IgKHZhciByID0gQXJyYXkocyksIGsgPSAwLCBpID0gMDsgaSA8IGlsOyBpKyspXHJcbiAgICAgICAgZm9yICh2YXIgYSA9IGFyZ3VtZW50c1tpXSwgaiA9IDAsIGpsID0gYS5sZW5ndGg7IGogPCBqbDsgaisrLCBrKyspXHJcbiAgICAgICAgICAgIHJba10gPSBhW2pdO1xyXG4gICAgcmV0dXJuIHI7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsInZhciBnO1xuXG4vLyBUaGlzIHdvcmtzIGluIG5vbi1zdHJpY3QgbW9kZVxuZyA9IChmdW5jdGlvbigpIHtcblx0cmV0dXJuIHRoaXM7XG59KSgpO1xuXG50cnkge1xuXHQvLyBUaGlzIHdvcmtzIGlmIGV2YWwgaXMgYWxsb3dlZCAoc2VlIENTUClcblx0ZyA9IGcgfHwgbmV3IEZ1bmN0aW9uKFwicmV0dXJuIHRoaXNcIikoKTtcbn0gY2F0Y2ggKGUpIHtcblx0Ly8gVGhpcyB3b3JrcyBpZiB0aGUgd2luZG93IHJlZmVyZW5jZSBpcyBhdmFpbGFibGVcblx0aWYgKHR5cGVvZiB3aW5kb3cgPT09IFwib2JqZWN0XCIpIGcgPSB3aW5kb3c7XG59XG5cbi8vIGcgY2FuIHN0aWxsIGJlIHVuZGVmaW5lZCwgYnV0IG5vdGhpbmcgdG8gZG8gYWJvdXQgaXQuLi5cbi8vIFdlIHJldHVybiB1bmRlZmluZWQsIGluc3RlYWQgb2Ygbm90aGluZyBoZXJlLCBzbyBpdCdzXG4vLyBlYXNpZXIgdG8gaGFuZGxlIHRoaXMgY2FzZS4gaWYoIWdsb2JhbCkgeyAuLi59XG5cbm1vZHVsZS5leHBvcnRzID0gZztcbiIsImltcG9ydCB7IElBcGlTZXJ2aWNlLCBJRG9tYWluUmVzb2x2ZXIsIElBcGlTZXJ2aWNlQm9vdHN0cmFwSW5mbywgSUFwaVNlcnZpY2VSZXF1ZXN0LCBJVG9rZW5JZHMsIElHZXRHbWlkVGlja2V0UmVxdWVzdCB9IGZyb20gJ3NyYy9jb3JlL0FwaVNlcnZpY2UvYXBwL2ludGVyZmFjZXMnO1xyXG5pbXBvcnQgeyBHcm91cEFwaURvbWFpblNlcnZpY2UgfSBmcm9tICdzcmMvY29yZS9BcGlTZXJ2aWNlL2FwcC9Hcm91cEFwaURvbWFpblNlcnZpY2UnO1xyXG5pbXBvcnQgeyBJR21pZFRpY2tldFJlc3BvbnNlIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvaW50ZXJmYWNlcy9JQXBpQWRhcHRlcic7XHJcbmltcG9ydCB7IEdTRXJyb3JzIH0gZnJvbSAnLi4vLi4vR2lneWEuSnMvYXBwL0dTRXJyb3JzJztcclxuXHJcbmNvbnN0IEdNSURfVElDS0VUX0VYUElSQVRJT05fSU5URVJWQUwgPSAxO1xyXG5leHBvcnQgY29uc3QgVG9rZW5LZXlzID0ge1xyXG4gICAgR01JRDogJ2dpZ19nbWlkJyxcclxuICAgIFVDSUQ6ICdnaWdfdWNpZCcsXHJcbiAgICBHTUlEX1RJQ0tFVDogJ2dtaWRUaWNrZXQnLFxyXG4gICAgR01JRF9USUNLRVRfRVhQSVJBVElPTl9USU1FOiAnZ21pZFRpY2tldEV4cGlyYXRpb24nLFxyXG59O1xyXG5leHBvcnQgY2xhc3MgQXBpU2VydmljZSBpbXBsZW1lbnRzIElBcGlTZXJ2aWNlIHtcclxuICAgIHByaXZhdGUgX3VzZVN0b3JhZ2U6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIF9zdG9yYWdlOiBnaWd5YS51dGlscy5sb2NhbFN0b3JhZ2UuQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX2FwaUtleTogc3RyaW5nLFxyXG4gICAgICAgIHByaXZhdGUgX2hhc0dtaWQ6IGJvb2xlYW4sXHJcbiAgICAgICAgcHJpdmF0ZSBfZG9tYWluUmVzb2x2ZXI6IElEb21haW5SZXNvbHZlcixcclxuICAgICAgICBwcml2YXRlIF9ncm91cEFwaURvbWFpblNlcnZpY2UgPSBuZXcgR3JvdXBBcGlEb21haW5TZXJ2aWNlKCksXHJcbiAgICAgICAgcHJpdmF0ZSBfcmVxdWVzdENsYXNzID0gZ2lneWEuSnNvbnBSZXF1ZXN0LFxyXG4gICAgICAgIF9zdG9yYWdlPzogZ2lneWEudXRpbHMubG9jYWxTdG9yYWdlLkFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlcixcclxuICAgICkge1xyXG4gICAgICAgIGlmIChfc3RvcmFnZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlID0gX3N0b3JhZ2U7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhc3luYyBnZXRBcGlEb21haW4obWV0aG9kTmFtZT86IHN0cmluZyk6IFByb21pc2U8c3RyaW5nPiB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbWFpblJlc29sdmVyLmdldEFwaURvbWFpbihtZXRob2ROYW1lKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgYm9vdHN0cmFwKGZvcmNlQm9vdHN0cmFwID0gZmFsc2UpOiBQcm9taXNlPElBcGlTZXJ2aWNlQm9vdHN0cmFwSW5mbz4ge1xyXG4gICAgICAgIGNvbnN0IGxvZyA9IGdpZ3lhLmxvZ2dlci5ncm91cChgYm9vdHN0cmFwIGFwaSBzZXJ2aWNlYCk7XHJcblxyXG4gICAgICAgIC8vIENyZWF0aW5nIHRoZSBzdG9yYWdlIGFkYXB0ZXIgYXN5bmMgYWxsb3dzIGZvciB0aGUgcG9zc2liaWxpdHkgb2YgdXNpbmcgRmxhc2ggc3RvcmFnZS5cclxuICAgICAgICBpZiAoIXRoaXMuX3N0b3JhZ2UpIHtcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmRlYnVnKGBpbml0IHN0b3JhZ2VgKTtcclxuICAgICAgICAgICAgdGhpcy5fc3RvcmFnZSA9IGF3YWl0IG5ldyBQcm9taXNlPGdpZ3lhLnV0aWxzLmxvY2FsU3RvcmFnZS5BYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXI+KHJlc29sdmUgPT4ge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEudXRpbHMubG9jYWxTdG9yYWdlLndhaXRGb3JTZXJ2aWNlKGFkYXB0ZXIgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoYWRhcHRlcik7XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAodGhpcy5faGFzR21pZCAmJiAhZm9yY2VCb290c3RyYXApIHtcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYGFscmVhZHkgaGFzIGdtaWRgKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyghdGhpcy5faGFzR21pZCA/IGBubyBnbWlkIHNldGAgOiBgZm9yY2luZyBib290c3RyYXBgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNhblNhdmVHbWlkQXNDb29raWUoKSkge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYHNhdmUgZ21pZCBhcyBjb29raWVgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCB0aGlzLnNlbmRSZXF1ZXN0PHsgZXJyb3JDb2RlOiBudW1iZXIgfT4oe1xyXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZE5hbWU6ICdhY2NvdW50cy53ZWJTZGtCb290c3RyYXAnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBhcmFtczogeyBhcGlLZXk6IHRoaXMuX2FwaUtleSB9XHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIGlmIChyZXMuZXJyb3JDb2RlICE9IDApIHtcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuZXJyb3IoYGVycm9yIGJvb3RzdHJhcHBpbmcgc2RrYCwgeyB0eXBlOiAnYm9vdHN0cmFwIGZhaWxlZCcsIHNjb3BlOiAnQXBpU2VydmljZS5ib290c3RyYXAnLCByZXMgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgJ2Vycm9yIGJvb3RzdHJhcHBpbmcgc2RrXFxuJyArIEpTT04uc3RyaW5naWZ5KHJlcywgbnVsbCwgNCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgc2F2ZSBnbWlkIGluIHN0b3JhZ2VgKTtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuc2V0dXBXaXRoU3RvcmFnZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fdXNlU3RvcmFnZSA9IHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxldCB0aWNrZXRJbmZvOiBJR21pZFRpY2tldFJlc3BvbnNlO1xyXG5cclxuICAgICAgICBpZiAodGhpcy5fdXNlU3RvcmFnZSkge1xyXG4gICAgICAgICAgICB0aWNrZXRJbmZvID0gYXdhaXQgdGhpcy5nZXRHbWlkVGlja2V0KCk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhblN0b3JhZ2UoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGxvZy5lbmQoKTtcclxuXHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGlja2V0SW5mbyxcclxuICAgICAgICB9IGFzIElBcGlTZXJ2aWNlQm9vdHN0cmFwSW5mbztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYXN5bmMgc2V0R3JvdXBBcGlEb21haW4oYXBpRG9tYWluPzogc3RyaW5nKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgYmFzZURvbWFpbiA9IGdpZ3lhLl8uZ2V0QmFzZURvbWFpbihcclxuICAgICAgICAgICAgZ2lneWEucGFydG5lclNldHRpbmdzLmJhc2VEb21haW5zLFxyXG4gICAgICAgICAgICB0aGlzLl9kb21haW5SZXNvbHZlci5vcmlnaW5Eb21haW4sXHJcbiAgICAgICAgICAgIFsnZ2lneWEuY29tJywgJ2dpZ3lhLWFwaS5jbicsIGdpZ3lhLmRlZmF1bHRBcGlEb21haW5dXHJcbiAgICAgICAgKTtcclxuICAgICAgICBpZihiYXNlRG9tYWluID09PSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2dyb3VwQXBpRG9tYWluU2VydmljZS5zZXQoYXBpRG9tYWluKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGNhblNhdmVHbWlkQXNDb29raWUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgLy8gYXBpIGRvbWFpbiB3aWxsIGJlIGZpcnN0IHBhcnR5IHdoZW4gc2l0ZSBoYXMgYSBjdXN0b20gYXBpIGRvbWFpbiBwcmVmaXguXHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2RvbWFpblJlc29sdmVyLmlzQXBpRG9tYWluRmlyc3RQYXJ0eSB8fCBnaWd5YS51dGlscy5jb29raWUuY2FuU2F2ZUNvb2tpZSgpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZW5kUmVxdWVzdDxUPihkYXRhOiBJQXBpU2VydmljZVJlcXVlc3QpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2U8VD4oKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAvL1RPRE86IGhhbmRsZSB0aW1lb3V0XHJcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbXNnID0gJ0FwaVNlcnZpY2U6IHJlcXVlc3QgZGF0YSBtdXN0IGhhcyBtZXRob2ROYW1lIGFuZCBwYXJhbXMnO1xyXG4gICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmVycm9yKG1zZyk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVqZWN0KG1zZyk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGxldCBtZXRob2ROYW1lID0gZGF0YS5tZXRob2ROYW1lO1xyXG4gICAgICAgICAgICBsZXQgcGFyYW1zID0gZ2lneWEudXRpbHMub2JqZWN0LmNsb25lKGRhdGEucGFyYW1zLCB0cnVlLCB0cnVlKTtcclxuICAgICAgICAgICAgcGFyYW1zLnBhZ2VVUkwgPSB0aGlzLl9kb21haW5SZXNvbHZlci5vcmlnaW5Eb21haW47XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl91c2VTdG9yYWdlKSB7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMuZ21pZCA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShUb2tlbktleXMuR01JRCk7XHJcbiAgICAgICAgICAgICAgICBwYXJhbXMudWNpZCA9IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShUb2tlbktleXMuVUNJRCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZXRBcGlEb21haW4obWV0aG9kTmFtZSkudGhlbihhcGlEb21haW4gPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJlcXVlc3QgPSBuZXcgdGhpcy5fcmVxdWVzdENsYXNzKFxyXG4gICAgICAgICAgICAgICAgICAgIGBodHRwczovLyR7YXBpRG9tYWlufWAsXHJcbiAgICAgICAgICAgICAgICAgICAgbWV0aG9kTmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBwYXJhbXMsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVzID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGpzb24gPSBnaWd5YS51dGlscy5KU09OLnNlcmlhbGl6ZShyZXMpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWdpZ3lhLnV0aWxzLkpTT04uZGVzZXJpYWxpemUoanNvbiwgdW5kZWZpbmVkKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yQ29kZTogR1NFcnJvcnMuSU5WQUxJRF9QQVJBTUVURVJfRk9STUFULFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yTWVzc2FnZTogYEludmFsaWQgcGFyYW1ldGVyIGZvcm1hdC4keydcXG4nfU9uZSBvZiB0aGUgcGFyYW1ldGVycyBvZiB0aGlzIHJlcXVlc3QgaGFzIGJlZW4gc2V0IHdpdGggYSB2YWx1ZSB3aGljaCBpcyBub3QgaW4gdGhlIGV4cGVjdGVkIGZvcm1hdC5gLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHJlcyBhcyBUKTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGRhdGEuc2V0dGluZ3MsXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIHJlcXVlc3Quc2VuZCgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIHNldHVwV2l0aFN0b3JhZ2UoKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgY29uc3QgaXNHbWlkRXhpc3RzSW5TdG9yYWdlID0gQm9vbGVhbih0aGlzLl9zdG9yYWdlLmdldEl0ZW0oVG9rZW5LZXlzLkdNSUQpKTtcclxuICAgICAgICBjb25zdCBleHBpcmF0aW9uVGltZSA9IHBhcnNlSW50KHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShUb2tlbktleXMuR01JRF9USUNLRVRfRVhQSVJBVElPTl9USU1FKSk7XHJcbiAgICAgICAgaWYgKCFpc0dtaWRFeGlzdHNJblN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYGdldHRpbmcgZ21pZCBieSBlbmRwb2ludGApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdG9rZW5zID0gYXdhaXQgdGhpcy5nZXRJZHMoKTtcclxuICAgICAgICAgICAgaWYgKCF0b2tlbnMuZ2NpZCB8fCAhdG9rZW5zLnVjaWQpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IGBBcGlTZXJ2aWNlIGdldElEczogdGhlIHJlcXVlc3QgdG8gdGhlIGVuZHBvaW50IGZhaWxlZGA7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgc2V0dGluZyBnbWlkIGluIHN0b3JhZ2VgKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbShUb2tlbktleXMuR01JRCwgdG9rZW5zLmdjaWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKFRva2VuS2V5cy5VQ0lELCB0b2tlbnMudWNpZCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aWNrZXRSZXMgPSB0aGlzLmNyZWF0ZVRpY2tldFJlc3BvbnNlKHRva2Vucy5nbWlkVGlja2V0KTtcclxuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlR21pZFRpY2tldCh0aWNrZXRSZXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIGlmICghZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0xhdGVyVGhhbk5vdyhleHBpcmF0aW9uVGltZSkpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWZyZXNoR21pZFRpY2tldEZyb21TZXJ2ZXIoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgYWxyZWFkeSBoYXMgZ21pZCBpbiBzdG9yYWdlYCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8qXHJcbiAgICAgICAgY3JlYXRlTmV3IC0gaWYgbm8gZ21pZFRpY2tldCBleGlzdHMsIHRoZW4gY3JlYXRlIGEgbmV3IG9uZSBpbnN0ZWFkIG9mIHJldHVybmluZyB1bmRlZmluZWRcclxuICAgICAgICAgKi9cclxuICAgIHB1YmxpYyBhc3luYyBnZXRHbWlkVGlja2V0KGNyZWF0ZU5ldyA9IGZhbHNlKTogUHJvbWlzZTxJR21pZFRpY2tldFJlc3BvbnNlPiB7XHJcbiAgICAgICAgbGV0IGdtaWRUaWNrZXQgPSB0aGlzLl9zdG9yYWdlLmdldEl0ZW0oVG9rZW5LZXlzLkdNSURfVElDS0VUKTtcclxuXHJcbiAgICAgICAgaWYgKCFnbWlkVGlja2V0ICYmICFjcmVhdGVOZXcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjb25zdCBleHBpcmF0aW9uVGltZSA9IHBhcnNlSW50KHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShUb2tlbktleXMuR01JRF9USUNLRVRfRVhQSVJBVElPTl9USU1FKSk7XHJcbiAgICAgICAgICAgIGlmICghY3JlYXRlTmV3ICYmIGdtaWRUaWNrZXQgJiYgZ2lneWEudXRpbHMudmFsaWRhdGlvbi5pc0xhdGVyVGhhbk5vdyhleHBpcmF0aW9uVGltZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ21pZFRpY2tldDogZ21pZFRpY2tldCxcclxuICAgICAgICAgICAgICAgICAgICBleHBpcmF0aW9uVGltZTogcGFyc2VJbnQodGhpcy5fc3RvcmFnZS5nZXRJdGVtKFRva2VuS2V5cy5HTUlEX1RJQ0tFVF9FWFBJUkFUSU9OX1RJTUUpKSxcclxuICAgICAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUdtaWRUaWNrZXQoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLnJlZnJlc2hHbWlkVGlja2V0RnJvbVNlcnZlcigpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgcmVmcmVzaEdtaWRUaWNrZXRGcm9tU2VydmVyKCk6IFByb21pc2U8SUdtaWRUaWNrZXRSZXNwb25zZT4ge1xyXG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGByZWZyZXNoaW5nIGdtaWQgdGlja2V0YCk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5jcmVhdGVHbWlkVGlja2V0KHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbShUb2tlbktleXMuR01JRCkpO1xyXG4gICAgICAgIGlmKHJlcyAmJiByZXMuZ21pZFRpY2tldCkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUdtaWRUaWNrZXQocmVzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB1cGRhdGVHbWlkVGlja2V0KHRpY2tldDogSUdtaWRUaWNrZXRSZXNwb25zZSk6IHZvaWQge1xyXG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGB1cGRhdGluZyBnbWlkIHRpY2tldGAsIHRpY2tldCk7XHJcbiAgICAgICAgdGhpcy5fc3RvcmFnZS5zZXRJdGVtKFRva2VuS2V5cy5HTUlEX1RJQ0tFVCwgdGlja2V0LmdtaWRUaWNrZXQpO1xyXG4gICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbShUb2tlbktleXMuR01JRF9USUNLRVRfRVhQSVJBVElPTl9USU1FLCBTdHJpbmcodGlja2V0LmV4cGlyYXRpb25UaW1lKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBkZWxldGVHbWlkVGlja2V0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShUb2tlbktleXMuR01JRF9USUNLRVQpO1xyXG4gICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShUb2tlbktleXMuR01JRF9USUNLRVRfRVhQSVJBVElPTl9USU1FKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGNsZWFuU3RvcmFnZSgpIHtcclxuICAgICAgICB0aGlzLl9zdG9yYWdlLnJlbW92ZUl0ZW0oVG9rZW5LZXlzLkdNSUQpO1xyXG4gICAgICAgIHRoaXMuX3N0b3JhZ2UucmVtb3ZlSXRlbShUb2tlbktleXMuVUNJRCk7XHJcbiAgICAgICAgdGhpcy5kZWxldGVHbWlkVGlja2V0KCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRJZHMoKTogUHJvbWlzZTxJVG9rZW5JZHM+IHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kUmVxdWVzdDxJVG9rZW5JZHM+KHtcclxuICAgICAgICAgICAgbWV0aG9kTmFtZTogJ3NvY2lhbGl6ZS5nZXRJRHMnLFxyXG4gICAgICAgICAgICBwYXJhbXM6IHtcclxuICAgICAgICAgICAgICAgIEFQSUtleTogdGhpcy5fYXBpS2V5LFxyXG4gICAgICAgICAgICAgICAgaW5jbHVkZVRpY2tldDogdHJ1ZSxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlR21pZFRpY2tldChnbWlkPzogc3RyaW5nLCBleHBpcmVzID0gZ2lneWEucGFydG5lclNldHRpbmdzLmdtaWRUaWNrZXRFeHBpcmF0aW9uIHx8IDM2MDApOiBQcm9taXNlPElHbWlkVGlja2V0UmVzcG9uc2U+IHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIGFwaUtleTogdGhpcy5fYXBpS2V5LFxyXG4gICAgICAgICAgICBleHBpcmVzLFxyXG4gICAgICAgIH0gYXMgSUdldEdtaWRUaWNrZXRSZXF1ZXN0O1xyXG5cclxuICAgICAgICBpZiAoZ21pZCkgcGFyYW1zLmdtaWQgPSBnbWlkO1xyXG5cclxuICAgICAgICByZXR1cm4gdGhpcy5zZW5kUmVxdWVzdDx7IGdtaWRUaWNrZXQ6IHN0cmluZyB9Pih7XHJcbiAgICAgICAgICAgIG1ldGhvZE5hbWU6ICdzb2NpYWxpemUuZ2V0R21pZFRpY2tldCcsXHJcbiAgICAgICAgICAgIHBhcmFtc1xyXG4gICAgICAgIH0pLnRoZW4ocmVzID0+IHtcclxuICAgICAgICAgICAgaWYocmVzICYmIHJlcy5nbWlkVGlja2V0KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5jcmVhdGVUaWNrZXRSZXNwb25zZShyZXMuZ21pZFRpY2tldCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuZXJyb3IoJ0ZhaWxlZCB0byBlc3RhYmxpc2ggZ21pZFRpY2tldCcsIHtyZXNwb25zZTogSlNPTi5zdHJpbmdpZnkocmVzKSwgbWV0aG9kOiAnc29jaWFsaXplLmdldEdtaWRUaWNrZXQnfSk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUdtaWRUaWNrZXQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlVGlja2V0UmVzcG9uc2UoZ21pZFRpY2tldDogc3RyaW5nKTogSUdtaWRUaWNrZXRSZXNwb25zZSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRHbWlkVGlja2V0RGF0ZSA9IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgY3VycmVudEdtaWRUaWNrZXREYXRlLnNldEhvdXJzKGN1cnJlbnRHbWlkVGlja2V0RGF0ZS5nZXRIb3VycygpICsgR01JRF9USUNLRVRfRVhQSVJBVElPTl9JTlRFUlZBTCk7XHJcbiAgICAgICAgY29uc3QgZXhwaXJhdGlvblRpbWUgPSBjdXJyZW50R21pZFRpY2tldERhdGUuZ2V0VGltZSgpO1xyXG5cclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBnbWlkVGlja2V0LFxyXG4gICAgICAgICAgICBleHBpcmF0aW9uVGltZSxcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7IEdyb3VwQXBpRG9tYWluU2VydmljZSB9IGZyb20gJ3NyYy9jb3JlL0FwaVNlcnZpY2UvYXBwL0dyb3VwQXBpRG9tYWluU2VydmljZSc7XHJcbmltcG9ydCB7IElEb21haW5SZXNvbHZlciB9IGZyb20gJ3NyYy9jb3JlL0FwaVNlcnZpY2UvYXBwL2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IExvZ2luVG9rZW5QcmVmaXggPSAnZ2lnX2xvZ2luVG9rZW4nO1xyXG5leHBvcnQgZnVuY3Rpb24gc2hvdWxkUmVzZXRHcm91cEFwaURvbWFpbihcclxuICAgIGN1c3RvbUFwaURvbWFpblByZWZpeDogc3RyaW5nLFxyXG4gICAgY2FjaGVkQXBpRG9tYWluOiBzdHJpbmcsXHJcbiAgICBzc29LZXksXHJcbiAgICBzdG9yYWdlID0gZ2lneWEudXRpbHMubG9jYWxTdG9yYWdlLmluaXRpYWxpemVBZGFwdGVyKGdpZ3lhLnV0aWxzLmxvY2FsU3RvcmFnZS5Db29raWVTdG9yYWdlQWRhcHRlciksXHJcbikge1xyXG4gICAgLy8gd2Ugc2hvdWxkIHJlc2V0IHRoZSBjYWNoZWQgZ3JvdXBBcGlEb21haW4gaWYgKCMhKUFMTCghIykgb2YgdGhlIHJlcXVpcmVtZW50cyBiZWxvdyBhcmUgbWV0OlxyXG4gICAgLy8gMS4gd2UgaGF2ZSBjdXN0b21BUElEb21haW5QcmVmaXggZGVmaW5lZCBmb3IgdGhpcyBzaXRlXHJcbiAgICAvLyAyLiB0aGUgY3VzdG9tQXBpRG9tYWluUHJlZml4IGlzIG5vdCB0aGUgc2FtZSBhcyB0aGUgb25lIHN0b3JlZCBpbiBjYWNoZSAodGhlIG1vc3QgcmVjZW50IGN1c3RvbUFwaURvbWFpblByZWZpeCBpcyBub3QgYmVpbmcgdXNlZClcclxuICAgIC8vIDMuIHVzZXIgaXMgbm90IGxvZ2dlZC1pbiAobG9naW5Ub2tlbiBcImdpZ19sb2dpblRva2VuX3tzc29LZXl9XCIgZG9lc24ndCBleGlzdHMpXHJcblxyXG4gICAgaWYgKCFjdXN0b21BcGlEb21haW5QcmVmaXgpIHtcclxuICAgICAgICBnaWd5YS5sb2dnZXIuaW5mbyhgbm8gY3VzdG9tIGFwaSBkb21haW4gcHJlZml4IHNvLi5gKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYGhhcyBjdXN0b20gYXBpIGRvbWFpbiBwcmVmaXg6ICR7Y3VzdG9tQXBpRG9tYWluUHJlZml4fWApO1xyXG5cclxuICAgICAgICBjb25zdCBjYWNoZWRDdXN0b21BcGlEb21haW5QcmVmaXggPSBjYWNoZWRBcGlEb21haW4gJiYgY2FjaGVkQXBpRG9tYWluLnNwbGl0KCcuJylbMF07XHJcbiAgICAgICAgY29uc3QgaGFzQ3VzdG9tUHJlZml4Q2hhbmdlZCA9IGN1c3RvbUFwaURvbWFpblByZWZpeCAhPT0gY2FjaGVkQ3VzdG9tQXBpRG9tYWluUHJlZml4O1xyXG5cclxuICAgICAgICBpZiAoIWhhc0N1c3RvbVByZWZpeENoYW5nZWQpIHtcclxuICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYC4uYW5kIGl0IGFscmVhZHkgbWF0Y2hlcyBncm91cCBhcGkgZG9tYWluJ3MgKCR7Y2FjaGVkQXBpRG9tYWlufSkgc28uLmApO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGAuLmFuZCBpdCdzIGRpZmZlcmVudCBmcm9tIGV4aXN0aW5nIGdyb3VwIGFwaSBkb21haW4ncyAoJHtjYWNoZWRBcGlEb21haW59KWApO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgaGFzR3JvdXBMb2dpblRva2VuID0gQm9vbGVhbihzc29LZXkgJiYgc3RvcmFnZS5nZXRJdGVtKGAke0xvZ2luVG9rZW5QcmVmaXh9XyR7c3NvS2V5fWApKTtcclxuICAgICAgICAgICAgaWYgKGhhc0dyb3VwTG9naW5Ub2tlbikge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYC4uYnV0IGEgZ3JvdXAgc2Vzc2lvbiBleGlzdHMgc28uLmApO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmRlYnVnKGAuLmFuZCBubyBncm91cCBzZXNzaW9uIC0+IHJlc2V0dGluZyBncm91cCBhcGkgZG9tYWluYCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvLyByZXR1cm4gY3VzdG9tQXBpRG9tYWluUHJlZml4ICYmIGhhc0N1c3RvbVByZWZpeENoYW5nZWQgJiYgIWhhc0xvZ2luVG9rZW47XHJcbiAgICByZXR1cm4gZmFsc2U7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZURvbWFpblJlc29sdmVyKFxyXG4gICAgZGF0YUNlbnRlcjogc3RyaW5nLFxyXG4gICAgdHJ1c3RlZERvbWFpbnM6IHN0cmluZ1tdLFxyXG4gICAgb3JpZ2luRG9tYWluOiBzdHJpbmcsXHJcbiAgICBkZWZhdWx0RG9tYWluOiBzdHJpbmcsXHJcbiAgICBjdXN0b21BcGlEb21haW5QcmVmaXg6IHN0cmluZyxcclxuICAgIGdyb3VwQXBpRG9tYWluU2VydmljZSA9IG5ldyBHcm91cEFwaURvbWFpblNlcnZpY2UoKSxcclxuICAgIHNzb0tleSA9IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5zc29LZXksXHJcbik6IElEb21haW5SZXNvbHZlciB7XHJcbiAgICBjb25zdCBsb2cgPSBnaWd5YS5sb2dnZXIuZ3JvdXAoYGFwaSBkb21haW4gcmVzb2x2ZXJgKTtcclxuXHJcbiAgICBjb25zdCBncm91cEFwaURvbWFpbiA9IGdyb3VwQXBpRG9tYWluU2VydmljZS5nZXQoKTtcclxuICAgIGxldCBpc0dyb3VwQXBpRG9tYWluID0gQm9vbGVhbihncm91cEFwaURvbWFpbik7XHJcbiAgICBjb25zdCBzaG91bGRSZXNvbHZlQXBpRG9tYWluID0gIWlzR3JvdXBBcGlEb21haW4gfHwgc2hvdWxkUmVzZXRHcm91cEFwaURvbWFpbihjdXN0b21BcGlEb21haW5QcmVmaXgsIGdyb3VwQXBpRG9tYWluLCBzc29LZXkpOyAvLyBubyBzdG9yZWQgYXBpIGRvbWFpbiBmb3IgZ3JvdXAgKGZpcnN0IHRpbWUgaW4gZ3JvdXAgb3IgYSBub24tZ3JvdXAgc2l0ZSlcclxuXHJcbiAgICBsZXQgZWZmZWN0aXZlQXBpRG9tYWluOiBzdHJpbmc7XHJcblxyXG4gICAgaWYgKCFzaG91bGRSZXNvbHZlQXBpRG9tYWluKSB7XHJcbiAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYHVzaW5nIGV4aXN0aW5nIGdyb3VwIGFwaSBkb21haW46ICR7Z3JvdXBBcGlEb21haW59YCk7XHJcbiAgICAgICAgZWZmZWN0aXZlQXBpRG9tYWluID0gZ3JvdXBBcGlEb21haW47XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGByZXNvbHZpbmcgYXBpIGRvbWFpbmApO1xyXG4gICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGB0cnVzdGVkIGRvbWFpbnNgLCB0cnVzdGVkRG9tYWlucyk7XHJcbiAgICAgICAgY29uc3QgYmFzZURvbWFpbiA9IGdpZ3lhLl8uZ2V0QmFzZURvbWFpbih0cnVzdGVkRG9tYWlucywgb3JpZ2luRG9tYWluLCBbJ2dpZ3lhLmNvbScsICdnaWd5YS1hcGkuY24nLCBkZWZhdWx0RG9tYWluXSk7XHJcbiAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYGJhc2UgZG9tYWluOiAke2Jhc2VEb21haW59YCk7XHJcblxyXG4gICAgICAgIGNvbnN0IHJlc29sdmVkQXBpRG9tYWluID0gZ2lneWEuXy5yZXNvbHZlQXBpRG9tYWluKGN1c3RvbUFwaURvbWFpblByZWZpeCwgYmFzZURvbWFpbiwgZGF0YUNlbnRlciwgZGVmYXVsdERvbWFpbik7XHJcbiAgICAgICAgZ2lneWEubG9nZ2VyLmluZm8oYHJlc29sdmVkIGFwaSBkb21haW46ICR7cmVzb2x2ZWRBcGlEb21haW59YCk7XHJcblxyXG4gICAgICAgIGlmIChzc29LZXkpIHtcclxuICAgICAgICAgICAgaXNHcm91cEFwaURvbWFpbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBlZmZlY3RpdmVBcGlEb21haW4gPSByZXNvbHZlZEFwaURvbWFpbjtcclxuICAgIH1cclxuXHJcbiAgICBncm91cEFwaURvbWFpblNlcnZpY2Uuc2V0KGVmZmVjdGl2ZUFwaURvbWFpbik7XHJcblxyXG4gICAgbG9nLmVuZCgpO1xyXG5cclxuICAgIHJldHVybiB7XHJcbiAgICAgICAgb3JpZ2luRG9tYWluLFxyXG4gICAgICAgIGlzR3JvdXBBcGlEb21haW4sIC8vIGlmIHdlIGhhdmUgYSBncm91cEFwaURvbWFpbiBpbiBjYWNoZSA9PiBpc0dyb3VwQXBpRG9tYWluIGlzIHRydWVcclxuICAgICAgICBnZXRBcGlEb21haW46IGdpZ3lhLl8uYXBpRG9tYWluRmFjdG9yeShlZmZlY3RpdmVBcGlEb21haW4sIGRlZmF1bHREb21haW4pLCAvLyB1c2UgdGhlIGVmZmVjdGl2ZSBhcGlEb21haW4gd2hlbiByZXF1ZXN0aW5nIHRoZSBhcGlEb21haW5cclxuICAgICAgICBpc0FwaURvbWFpbkZpcnN0UGFydHk6IEJvb2xlYW4oY3VzdG9tQXBpRG9tYWluUHJlZml4KSwgLy8gbm90IGVudGlyZWx5IHRydWUgLSBncm91cCBhcGkgZG9tYWluIG1heSBub3QgYmUgZmlyc3QgcGFydHlcclxuICAgICAgICBoYXNHcm91cEFwaURvbWFpbkNoYW5nZWQ6IHNzb0tleSAmJiBzaG91bGRSZXNvbHZlQXBpRG9tYWluLFxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQge2xvY2FsSW5mb30gZnJvbSBcIi4uLy4uL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm9cIjtcclxuXHJcbmNvbnN0IEdyb3VwQXBpRG9tYWluS2V5ID0gJ2FwaURvbWFpbic7XHJcbmV4cG9ydCBjbGFzcyBHcm91cEFwaURvbWFpblNlcnZpY2Uge1xyXG4gICAgcHJpdmF0ZSBfY29va2llTmFtZTogc3RyaW5nO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKFxyXG4gICAgICAgIHByaXZhdGUgX3Nzb0tleSA9IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5zc29LZXksXHJcbiAgICAgICAgcHJpdmF0ZSBfc3RvcmFnZSA9IGdpZ3lhLnV0aWxzLmxvY2FsU3RvcmFnZS5pbml0aWFsaXplQWRhcHRlcihnaWd5YS51dGlscy5sb2NhbFN0b3JhZ2UuQ29va2llU3RvcmFnZUFkYXB0ZXIpLFxyXG4gICAgICAgIHByaXZhdGUgX3BhZ2VEb21haW4gPSBsb2NhbEluZm8ucGFnZURvbWFpblxyXG4gICAgKSB7XHJcbiAgICAgICAgdGhpcy5fY29va2llTmFtZSA9IGAke0dyb3VwQXBpRG9tYWluS2V5fV8ke3RoaXMuX3Nzb0tleX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX3Nzb0tleSA/IHRoaXMuX3N0b3JhZ2UuZ2V0SXRlbSh0aGlzLl9jb29raWVOYW1lKSA6IHVuZGVmaW5lZDtcclxuICAgIH1cclxuICAgIHB1YmxpYyBzZXQoYXBpRG9tYWluOiBzdHJpbmcpIHtcclxuICAgICAgICBpZiAodGhpcy5fc3NvS2V5KSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci5pbmZvKGBzZXR0aW5nIGFzIGdyb3VwIGFwaSBkb21haW4gZm9yICR7dGhpcy5fc3NvS2V5fWApO1xyXG4gICAgICAgICAgICB0aGlzLl9zdG9yYWdlLnJlbW92ZUl0ZW0odGhpcy5fY29va2llTmFtZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX3N0b3JhZ2Uuc2V0SXRlbSh0aGlzLl9jb29raWVOYW1lLCBhcGlEb21haW4sIHVuZGVmaW5lZCwgdGhpcy5fcGFnZURvbWFpbik7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImltcG9ydCB7QXBpQWRhcHRlclNldHRpbmdzfSBmcm9tICcuLi8uLi9HaWd5YS5Kcy9pbnRlcmZhY2VzL0lBcGlBZGFwdGVyJztcclxuaW1wb3J0IHtHU0Vycm9yc30gZnJvbSAnLi4vLi4vR2lneWEuSnMvYXBwL0dTRXJyb3JzJztcclxuaW1wb3J0IHtsb2NhbEluZm99IGZyb20gXCIuLi8uLi9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvXCI7XHJcblxyXG5leHBvcnQgaW50ZXJmYWNlIGpzb25wU2V0dGluZ3Mge1xyXG4gICAgZm9yY2VQb3N0PzogYm9vbGVhbjtcclxuICAgIGZvcmNlR2lneWFEb21haW4/OiBib29sZWFuOyAvLyBmb3IgYW5vbnltb3VzIHVzZXJzXHJcbiAgICBkaXNhYmxlQ2FjaGU/OiBib29sZWFuO1xyXG4gICAgcmVxdWlyZXNTZXNzaW9uPzogKCkgPT4gYm9vbGVhbjtcclxuICAgIGNsZWFyU2Vzc2lvbj86IGJvb2xlYW47XHJcbiAgICBjbGVhclNlc3Npb25Db25kaXRpb24/OiAocGFyYW1zOiBhbnkpID0+IGJvb2xlYW47XHJcbiAgICBjYWNoZVRpbWVvdXQ/OiBudW1iZXI7XHJcbiAgICBqc1Nka1JlcXVlc3RJZD86IHN0cmluZztcclxuICAgIHByZXByb2Nlc3Nvcj86IChwYXJhbXMsIGNhbGxiYWNrOiAoKSA9PiB2b2lkKSA9PiB2b2lkO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsbGJhY2socmVzcG9uc2U6IE9iamVjdCwgcmVxdWVzdElkPzogc3RyaW5nKSB7XHJcbiAgICBpZiAoIXJlcXVlc3RJZCAmJiByZXNwb25zZSkge1xyXG4gICAgICAgIHJlcXVlc3RJZCA9IHJlc3BvbnNlWydjb250ZXh0J107XHJcbiAgICB9XHJcbiAgICBpZiAoIXJlcXVlc3RJZCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIGxldCByZXE6IEpzb25wUmVxdWVzdCA9IHBlbmRpbmdSZXF1ZXN0c1tyZXF1ZXN0SWRdO1xyXG4gICAgaWYgKHJlcSkge1xyXG4gICAgICAgIHJlcS5oYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldFJlcXVlc3RJZChtZXRob2Q6IHN0cmluZywgcGFyYW1zOiBPYmplY3QsIHNldHRpbmdzOiBqc29ucFNldHRpbmdzKSB7XHJcbiAgICBsZXQgaWQ6IHN0cmluZyA9IHNldHRpbmdzLmpzU2RrUmVxdWVzdElkO1xyXG5cclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIHJldHVybiBpZDtcclxuICAgIH1cclxuICAgIGlmIChzZXR0aW5ncy5kaXNhYmxlQ2FjaGUgfHwgZ2lneWEubG9jYWxJbmZvLmlzU2FmYXJpIHx8IChnaWd5YS5sb2NhbEluZm8uaXNJRTEwICYmIG1ldGhvZC5pbmRleE9mKCdhY2NvdW50cy5nZXRBY2NvdW50SW5mbycpID4gLTEpKSB7XHJcbiAgICAgICAgcmV0dXJuICdSJyArIG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJ18nICsgTWF0aC5yYW5kb20oKTtcclxuICAgIH1cclxuXHJcbiAgICBsZXQgcGFyYW1zQ29weSA9IGdpZ3lhLnV0aWxzLm9iamVjdC5jbG9uZShwYXJhbXMpO1xyXG4gICAgZm9yIChsZXQgcGFyYW0gaW4gcGFyYW1zQ29weSkge1xyXG4gICAgICAgIGlmIChwYXJhbXNDb3B5Lmhhc093blByb3BlcnR5KHBhcmFtKSkge1xyXG4gICAgICAgICAgICBpZiAocGFyYW0uaW5kZXhPZignZmJfJykgPT09IDAgfHwgcGFyYW0gPT09ICdzb3VyY2UnIHx8IHBhcmFtID09PSAnc291cmNlRGF0YScpIHtcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBmYiBzZXNzaW9uIHBhcmFtcyBmb3IgY2FjaGluZyBrZXlcclxuICAgICAgICAgICAgICAgIGRlbGV0ZSBwYXJhbXNDb3B5W3BhcmFtXTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiAnUicgKyBnaWd5YS51dGlscy5vYmplY3QuZ2V0TXVybXVySGFzaChNYXRoLnJhbmRvbSgpLnRvU3RyaW5nKCkgKyBtZXRob2QgKyBnaWd5YS51dGlscy5vYmplY3QuZ2V0SGFzaChwYXJhbXNDb3B5KSk7XHJcbn1cclxuXHJcbmxldCBwZW5kaW5nUmVxdWVzdHM6IHsgW3JlcXVlc3RJZDogbnVtYmVyXTogSnNvbnBSZXF1ZXN0IH0gPSB7fTtcclxuXHJcbmNvbnN0IFBPU1RDb250YWluZXJJZCA9IGBnaWd5YVJlcXVlc3RGb3Jtc18ke0RhdGUubm93KCl9YDtcclxuXHJcbmV4cG9ydCBjbGFzcyBKc29ucFJlcXVlc3Qge1xyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHVibGljIGJhc2VEb21haW46IHN0cmluZyxcclxuICAgICAgICBwdWJsaWMgbWV0aG9kOiBzdHJpbmcsXHJcbiAgICAgICAgcHVibGljIHBhcmFtczogT2JqZWN0LFxyXG4gICAgICAgIHB1YmxpYyBjYWxsYmFjazogKHJlc3BvbnNlOiBPYmplY3QpID0+IHZvaWQsXHJcbiAgICAgICAgcHVibGljIHNldHRpbmdzOiBBcGlBZGFwdGVyU2V0dGluZ3MgPSB7fSxcclxuICAgICAgICBwdWJsaWMgaWQ6IHN0cmluZyA9IGdldFJlcXVlc3RJZChtZXRob2QsIHBhcmFtcywgc2V0dGluZ3MpLFxyXG4gICAgKSB7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldFVybCA9ICgpID0+IGAke3RoaXMuYmFzZURvbWFpbn0vJHt0aGlzLm1ldGhvZH1gO1xyXG5cclxuICAgIHByaXZhdGUgY29udGV4dDogT2JqZWN0O1xyXG4gICAgcHJpdmF0ZSBpZnJOYW1lOiBzdHJpbmcgPSAnZ2lneWFQb3N0SWZyYW1lXycgKyBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcclxuICAgIHByaXZhdGUgcmV0cnlUaW1lcklEOiBudW1iZXI7XHJcbiAgICBwcml2YXRlIHJldHJ5OiBudW1iZXIgPSAwO1xyXG4gICAgcHJpdmF0ZSBwb3N0Q29udGFpbmVyRWxlbTogSFRNTEVsZW1lbnQ7XHJcbiAgICBwcml2YXRlIGluUHJvZ3Jlc3M6IGJvb2xlYW47XHJcblxyXG4gICAgcHVibGljIHNlbmQoaWdub3JlQ2FjaGVUaW1lb3V0PzogYm9vbGVhbikge1xyXG4gICAgICAgIGlmICh0aGlzLmluUHJvZ3Jlc3MpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwZW5kaW5nUmVxdWVzdHNbdGhpcy5pZF0gPSB0aGlzO1xyXG5cclxuICAgICAgICB0aGlzLmluUHJvZ3Jlc3MgPSB0cnVlO1xyXG4gICAgICAgIHRoaXMuYWRkRGVmYXVsdFBhcmFtcygpO1xyXG4gICAgICAgIGxldCBwYXJhbXNTdHJpbmcgPSBnaWd5YS51dGlscy5rZXlWYWx1ZS5zZXJpYWxpemUodGhpcy5wYXJhbXMpO1xyXG5cclxuICAgICAgICBpZiAoIWlnbm9yZUNhY2hlVGltZW91dCAmJiB0aGlzLnNldHRpbmdzLmNhY2hlVGltZW91dCkge1xyXG4gICAgICAgICAgICBsZXQgY2FjaGVLZXkgPSB0aGlzLmdldENhY2hlS2V5KCk7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnNlc3Npb25DYWNoZS5nZXQoY2FjaGVLZXksIHRoaXMuc2V0dGluZ3MuY2FjaGVUaW1lb3V0LCAoY2FjaGVkUmVzcG9uc2U6IE9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlZFJlc3BvbnNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuc2V0dGluZ3MuY2FjaGVUaW1lb3V0OyAvLyBBdm9pZCBjYWNoaW5nIGl0IGFnYWluLlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbGxiYWNrKGNhY2hlZFJlc3BvbnNlLCB0aGlzLmlkKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5pblByb2dyZXNzID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZW5kKHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgbGV0IGV4dHJhTGVuZ3RoID0gMDsgLy84MDAwO1xyXG4gICAgICAgIGNvbnN0IG1heExlbmd0aCA9IDQgKiAxMDI0O1xyXG4gICAgICAgIGlmIChnaWd5YS5sb2NhbEluZm8uaXNJRSkge1xyXG4gICAgICAgICAgICBleHRyYUxlbmd0aCA9IDIgKiAxMDI0O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKGdpZ3lhLl8uVXJpLnBhcnNlKHRoaXMuZ2V0VXJsKCkpLmhyZWYudG9Mb3dlckNhc2UoKSAhPT0gdGhpcy5nZXRVcmwoKS50b0xvd2VyQ2FzZSgpKSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLmxvZ2dlci53YXJuKGBBYm9ydGluZyBSZXF1ZXN0IGZvciAke3RoaXMubWV0aG9kfS4gUGF0aCBtYW5pcHVsYXRpb24gZGV0ZWN0ZWQuYCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNvbnN0IHJlcVVybCA9IGAke3RoaXMuZ2V0VXJsKCl9PyR7cGFyYW1zU3RyaW5nfWA7XHJcbiAgICAgICAgaWYgKCFsb2NhbEluZm8uaXNPbkxpbmUoKXx8IChyZXFVcmwubGVuZ3RoICsgZXh0cmFMZW5ndGggPD0gbWF4TGVuZ3RoICYmICF0aGlzLnNldHRpbmdzLmZvcmNlUG9zdCkpIHtcclxuICAgICAgICAgICAgLy8gVGhlIHJlc3VsdCBvZiB0aGlzIHNjcmlwdCBsb2FkIHdvdWxkIGJlIHRvIGNhbGwgUmVxdWVzdC5jbGFzc05hbWVcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuc2NyaXB0LmxvYWQocmVxVXJsLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayh7XHJcbiAgICAgICAgICAgICAgICAgICAgY29udGV4dDogdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgICAgICBlcnJvckNvZGU6IEdTRXJyb3JzLk5FVFdPUktfRVJST1IsXHJcbiAgICAgICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiAnTmV0d29ya19lcnJvcicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZ2lneWEudXRpbHMuZnVuY3Rpb25zLmludm9rZU9uUGFnZUxvYWQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbGV0IGZvcm1zQ29udGFpbmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoUE9TVENvbnRhaW5lcklkKTtcclxuICAgICAgICAgICAgICAgIGlmIChmb3Jtc0NvbnRhaW5lciA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNDb250YWluZXIuaWQgPSBQT1NUQ29udGFpbmVySWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9ybXNDb250YWluZXIuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuICAgICAgICAgICAgICAgICAgICBnaWd5YS51dGlscy5ET00uYXBwZW5kVG9Cb2R5KGZvcm1zQ29udGFpbmVyKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBjb25zdCBmb3JtRGl2ID0gdGhpcy5nZXRQb3N0Q29udGFpbmVyKCk7XHJcbiAgICAgICAgICAgICAgICBmb3Jtc0NvbnRhaW5lci5hcHBlbmRDaGlsZChmb3JtRGl2KTtcclxuICAgICAgICAgICAgICAgIC8vIHByb2Nlc3Mgd2lsbCBjb250aW51ZSBvbiB0aGUgb25Mb2FkRXZlbnQgb2YgdGhlIGZvcm0gY3JlYXRlZCBieSB0aGlzLmdldEZvcm1FbGVtZW50KClcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBoYW5kbGVSZXNwb25zZShyZXNwb25zZTogT2JqZWN0KSB7XHJcbiAgICAgICAgaWYgKHRoaXMuc2V0dGluZ3MuY2FjaGVUaW1lb3V0KSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLnNlc3Npb25DYWNoZS5zZXQodGhpcy5nZXRDYWNoZUtleSgpLCByZXNwb25zZVsnZXJyb3JDb2RlJ10gPT0gR1NFcnJvcnMuT0sgPyByZXNwb25zZSA6IG51bGwpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodGhpcy5yZXRyeVRpbWVySUQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMucmV0cnlUaW1lcklEKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgdGhpcy5pblByb2dyZXNzID0gZmFsc2U7XHJcblxyXG4gICAgICAgIGlmIChyZXNwb25zZVsnZXJyb3JDb2RlJ10gPT0gR1NFcnJvcnMuRGF0YV9QZW5kaW5nKSB7XHJcbiAgICAgICAgICAgIGxldCB0ID0gdGhpcy5nZXREYXRhUGVuZGluZ1RpbWVvdXQodGhpcy5yZXRyeSsrKTtcclxuICAgICAgICAgICAgaWYgKHQgPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAvLyByZXRyeVxyXG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VuZCgpO1xyXG4gICAgICAgICAgICAgICAgfSwgdCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICB0aGlzLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5jYWxsYmFjayhyZXNwb25zZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYWRkRGVmYXVsdFBhcmFtcygpIHtcclxuICAgICAgICB0aGlzLnBhcmFtc1snZm9ybWF0J10gPSAnanNvbnAnO1xyXG4gICAgICAgIHRoaXMucGFyYW1zWydjYWxsYmFjayddID0gJ2dpZ3lhLmNhbGxiYWNrJzsgLy8gZm9yIGpzb25wIGNhbGxiYWNrc1xyXG4gICAgICAgIHRoaXMucGFyYW1zWydjb250ZXh0J10gPSB0aGlzLmlkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0Q2FjaGVLZXkoKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gYCR7dGhpcy5tZXRob2R9XyR7Z2lneWEudXRpbHMua2V5VmFsdWUuc2VyaWFsaXplKHRoaXMucGFyYW1zKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgY3JlYXRlUGFyYW1Gb3JtRWxlbWVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgZG9jRnJhZ21lbnQgPSBkb2N1bWVudC5jcmVhdGVEb2N1bWVudEZyYWdtZW50KCk7XHJcblxyXG4gICAgICAgIGZvciAobGV0IHAgaW4gdGhpcy5wYXJhbXMpIHtcclxuICAgICAgICAgICAgbGV0IHRleHRBcmVhRWxlbSA9IGdpZ3lhLnV0aWxzLkRPTS5jcmVhdGVFbGVtZW50V2l0aEF0dHJpYnV0ZXMoJ3RleHRhcmVhJywge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogcCxcclxuICAgICAgICAgICAgICAgIHZhbHVlOiB0eXBlb2YgdGhpcy5wYXJhbXNbcF0gPT09ICdvYmplY3QnID8gZ2lneWEudXRpbHMuVVJMLlVSTEVuY29kZShnaWd5YS51dGlscy5KU09OLnNlcmlhbGl6ZSh0aGlzLnBhcmFtc1twXSkpIDogdGhpcy5wYXJhbXNbcF0sXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgZG9jRnJhZ21lbnQuYXBwZW5kQ2hpbGQodGV4dEFyZWFFbGVtKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBkb2NGcmFnbWVudDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldFBvc3RDb250YWluZXIoKSB7XHJcbiAgICAgICAgbGV0IHBvc3RDb250YWluZXJFbGVtO1xyXG4gICAgICAgIGlmICghdGhpcy5wb3N0Q29udGFpbmVyRWxlbSkge1xyXG4gICAgICAgICAgICBwb3N0Q29udGFpbmVyRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcclxuICAgICAgICAgICAgbGV0IGZvcm1JZCA9IHRoaXMuaWZyTmFtZSArICdmb3JtJztcclxuICAgICAgICAgICAgbGV0IGdldFNhdmVkUmVzcG9uc2VJZCA9IHRoaXMuaWQ7XHJcbiAgICAgICAgICAgIC8vIEZvcm1cclxuICAgICAgICAgICAgY29uc3QgcG9zdENvbW1lbnRGb3JtID0gZ2lneWEudXRpbHMuRE9NLmNyZWF0ZUVsZW1lbnRXaXRoQXR0cmlidXRlcygnZm9ybScsIHtcclxuICAgICAgICAgICAgICAgIGFjY2VwdENoYXJzZXQ6ICdVVEYtOCcsXHJcbiAgICAgICAgICAgICAgICBpZDogZm9ybUlkLFxyXG4gICAgICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXHJcbiAgICAgICAgICAgICAgICBhY3Rpb246IGAke3RoaXMuZ2V0VXJsKCl9P2NvbnRleHQ9JHt0aGlzLmlkfSYmc2F2ZVJlc3BvbnNlSUQ9JHt0aGlzLmlkfWAsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXQ6IHRoaXMuaWZyTmFtZSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBoaWRkZW5Db21tZW50RmllbGQgPSBnaWd5YS51dGlscy5ET00uY3JlYXRlRWxlbWVudFdpdGhBdHRyaWJ1dGVzKCdpbnB1dCcsIHtcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdoaWRkZW4nLFxyXG4gICAgICAgICAgICAgICAgbmFtZTogJ3V0ZjgnLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICcmI3gyNzEzOycsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgc3VibWl0Q29tbWVudEJ0biA9IGdpZ3lhLnV0aWxzLkRPTS5jcmVhdGVFbGVtZW50V2l0aEF0dHJpYnV0ZXMoJ2lucHV0Jywge1xyXG4gICAgICAgICAgICAgICAgdHlwZTogJ3N1Ym1pdCcsXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgcG9zdENvbW1lbnRGb3JtLmFwcGVuZENoaWxkKHRoaXMuY3JlYXRlUGFyYW1Gb3JtRWxlbWVudHMoKSk7XHJcbiAgICAgICAgICAgIHBvc3RDb21tZW50Rm9ybS5hcHBlbmRDaGlsZChoaWRkZW5Db21tZW50RmllbGQpO1xyXG4gICAgICAgICAgICBwb3N0Q29tbWVudEZvcm0uYXBwZW5kQ2hpbGQoc3VibWl0Q29tbWVudEJ0bik7XHJcblxyXG4gICAgICAgICAgICBwb3N0Q29udGFpbmVyRWxlbS5hcHBlbmRDaGlsZChwb3N0Q29tbWVudEZvcm0pO1xyXG5cclxuICAgICAgICAgICAgLy8gaWZyYW1lXHJcbiAgICAgICAgICAgIGxldCBkaWRTdWJtaXRGb3JtOiBib29sZWFuO1xyXG4gICAgICAgICAgICBsZXQgZWxJRnJhbWUgPSBnaWd5YS51dGlscy5ET00uY3JlYXRlRWxlbWVudCgnaWZyYW1lJywgdGhpcy5pZnJOYW1lKSBhcyBIVE1MSUZyYW1lRWxlbWVudDtcclxuICAgICAgICAgICAgZWxJRnJhbWUuc2V0QXR0cmlidXRlKCdpZCcsIHRoaXMuaWZyTmFtZSk7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLmZ1bmN0aW9ucy5hZGRTcmNUb0lGcmFtZUlmTmVlZGVkKGVsSUZyYW1lKTtcclxuXHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5hZGRFdmVudExpc3RlbmVyKGVsSUZyYW1lLCAnbG9hZCcsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIDEuIGlmcmFtZSB3YXMgbG9hZGVkIGZvciB0aGUgZmlyc3QgdGltZSwgc3VibWl0IHRoZSBmb3JtXHJcbiAgICAgICAgICAgICAgICBpZiAoIWRpZFN1Ym1pdEZvcm0pIHtcclxuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoZm9ybUlkKSBhcyBIVE1MRm9ybUVsZW1lbnQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmb3JtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgMTApO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBkaWRTdWJtaXRGb3JtID0gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gMi4gZm9ybSB3YXMgc3VibWl0dGVkIHRvIHRoZSBpZnJhbWUsIGdldCBzYXZlZCByZXNwb25zZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U2F2ZWRGb3JtUmVzcG9uc2UoZ2V0U2F2ZWRSZXNwb25zZUlkKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIHBvc3RDb250YWluZXJFbGVtLmFwcGVuZENoaWxkKGVsSUZyYW1lKTtcclxuICAgICAgICAgICAgdGhpcy5wb3N0Q29udGFpbmVyRWxlbSA9IHBvc3RDb250YWluZXJFbGVtO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcG9zdENvbnRhaW5lckVsZW07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRTYXZlZEZvcm1SZXNwb25zZShnZXRTYXZlZFJlc3BvbnNlSWQ6IHN0cmluZykge1xyXG4gICAgICAgIG5ldyBKc29ucFJlcXVlc3QoXHJcbiAgICAgICAgICAgIHRoaXMuYmFzZURvbWFpbixcclxuICAgICAgICAgICAgJ3NvY2lhbGl6ZS5nZXRTYXZlZFJlc3BvbnNlJyxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQVBJS2V5OiB0aGlzLnBhcmFtc1snQVBJS2V5J10sXHJcbiAgICAgICAgICAgICAgICBzYXZlUmVzcG9uc2VJRDogdGhpcy5pZCxcclxuICAgICAgICAgICAgICAgIHVjaWQ6IHRoaXMucGFyYW1zWyd1Y2lkJ10sXHJcbiAgICAgICAgICAgICAgICBub0F1dGg6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBzZGs6ICdqc18nICsgZ2lneWEuYnVpbGQudmVyc2lvbixcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgcmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcclxuICAgICAgICAgICAgZ2V0U2F2ZWRSZXNwb25zZUlkLFxyXG4gICAgICAgICkuc2VuZCgpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0RGF0YVBlbmRpbmdUaW1lb3V0KHJldHJ5KSB7XHJcbiAgICAgICAgaWYgKHJldHJ5IDw9IDQpIHJldHVybiA1MDA7XHJcbiAgICAgICAgaWYgKHJldHJ5IDw9IDQgKyA0KSByZXR1cm4gMTAwMDtcclxuICAgICAgICBpZiAocmV0cnkgPD0gNCArIDQgKyAxMykgcmV0dXJuIDIwMDA7XHJcbiAgICAgICAgaWYgKHJldHJ5IDw9IDQgKyA0ICsgMTMgKyAxOCkgcmV0dXJuIDUwMDA7XHJcbiAgICAgICAgcmV0dXJuIC0xO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZGlzcG9zZSgpIHtcclxuICAgICAgICBkZWxldGUgcGVuZGluZ1JlcXVlc3RzW3RoaXMuaWRdO1xyXG4gICAgICAgIGlmICh0aGlzLnBvc3RDb250YWluZXJFbGVtKSB7XHJcbiAgICAgICAgICAgIGdpZ3lhLnV0aWxzLkRPTS5yZW1vdmVFbGVtZW50KHRoaXMucG9zdENvbnRhaW5lckVsZW0pO1xyXG4gICAgICAgIH1cclxuICAgICAgICBkZWxldGUgdGhpcy5wb3N0Q29udGFpbmVyRWxlbTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBHaWd5YVV0aWxzQ29va2llIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9jb29raWUnO1xyXG5pbXBvcnQgKiBhcyBHaWd5YVV0aWxzRE9NIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9ET00nO1xyXG5pbXBvcnQgKiBhcyBHaWd5YVV0aWxzRG9tYWlucyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZG9tYWlucyc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhVXRpbHNGdW5jdGlvbnMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhVXRpbHNKU09OIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OJztcclxuaW1wb3J0ICogYXMgR2lneWFVdGlsc0tleVZhbHVlIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9rZXlWYWx1ZSc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhVXRpbHNMb2NhbFN0b3JhZ2UgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2xvY2FsU3RvcmFnZSc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhVXRpbHNTdHJpbmdQYXJhbXMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3N0cmluZ1BhcmFtcyc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhVXRpbHNPYmplY3QgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL29iamVjdCc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhVXRpbHNTY3JpcHQgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3NjcmlwdCc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhVXRpbHNTZXNzaW9uQ2FjaGUgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL3Nlc3Npb25DYWNoZSc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhVXRpbHNVcmkgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL1VyaSc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhVXRpbHNVUkwgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL1VSTCc7XHJcbmltcG9ydCAqIGFzIEdpZ3lhVXRpbHNWYWxpZGF0aW9uIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy92YWxpZGF0aW9uJztcclxuXHJcblxyXG5kZWNsYXJlIGNvbnN0IGdpZ3lhOiBhbnk7XHJcblxyXG5pZiAoIWdpZ3lhLl8pIHtcclxuICAgIGdpZ3lhLl8gPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLnV0aWxzKSB7XHJcbiAgICBnaWd5YS51dGlscyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEudXRpbHMuY29va2llKSB7XHJcbiAgICBnaWd5YS51dGlscy5jb29raWUgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLnV0aWxzLkRPTSkge1xyXG4gICAgZ2lneWEudXRpbHMuRE9NID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS51dGlscy5mdW5jdGlvbnMpIHtcclxuICAgIGdpZ3lhLnV0aWxzLmZ1bmN0aW9ucyA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEudXRpbHMuSlNPTikge1xyXG4gICAgZ2lneWEudXRpbHMuSlNPTiA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEudXRpbHMua2V5VmFsdWUpIHtcclxuICAgIGdpZ3lhLnV0aWxzLmtleVZhbHVlID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS51dGlscy5sb2NhbFN0b3JhZ2UpIHtcclxuICAgIGdpZ3lhLnV0aWxzLmxvY2FsU3RvcmFnZSA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEudXRpbHMub2JqZWN0KSB7XHJcbiAgICBnaWd5YS51dGlscy5vYmplY3QgPSB7fTtcclxufVxyXG5pZiAoIWdpZ3lhLnV0aWxzLnNjcmlwdCkge1xyXG4gICAgZ2lneWEudXRpbHMuc2NyaXB0ID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS51dGlscy5zZXNzaW9uQ2FjaGUpIHtcclxuICAgIGdpZ3lhLnV0aWxzLnNlc3Npb25DYWNoZSA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEudXRpbHMuc3RyaW5nVXRpbHMpIHtcclxuICAgIGdpZ3lhLnV0aWxzLnN0cmluZ1V0aWxzID0ge307XHJcbn1cclxuaWYgKCFnaWd5YS51dGlscy5VUkwpIHtcclxuICAgIGdpZ3lhLnV0aWxzLlVSTCA9IHt9O1xyXG59XHJcbmlmICghZ2lneWEudXRpbHMudmFsaWRhdGlvbikge1xyXG4gICAgZ2lneWEudXRpbHMudmFsaWRhdGlvbiA9IHt9O1xyXG59XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEuXywgR2lneWFVdGlsc1VyaSwgR2lneWFVdGlsc0RvbWFpbnMpO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLnV0aWxzLmNvb2tpZSwgR2lneWFVdGlsc0Nvb2tpZSk7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEudXRpbHMuRE9NLCBHaWd5YVV0aWxzRE9NKTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS51dGlscy5mdW5jdGlvbnMsIEdpZ3lhVXRpbHNGdW5jdGlvbnMpO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLnV0aWxzLkpTT04sIEdpZ3lhVXRpbHNKU09OKTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS51dGlscy5rZXlWYWx1ZSwgR2lneWFVdGlsc0tleVZhbHVlKTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS51dGlscy5sb2NhbFN0b3JhZ2UsIEdpZ3lhVXRpbHNMb2NhbFN0b3JhZ2UpO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLnV0aWxzLm9iamVjdCwgR2lneWFVdGlsc09iamVjdCk7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEudXRpbHMuc2NyaXB0LCBHaWd5YVV0aWxzU2NyaXB0KTtcclxuT2JqZWN0LmFzc2lnbihnaWd5YS51dGlscy5zZXNzaW9uQ2FjaGUsIEdpZ3lhVXRpbHNTZXNzaW9uQ2FjaGUpO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLnV0aWxzLlVSTCwgR2lneWFVdGlsc1VSTCk7XHJcbk9iamVjdC5hc3NpZ24oZ2lneWEudXRpbHMudmFsaWRhdGlvbiwgR2lneWFVdGlsc1ZhbGlkYXRpb24pO1xyXG5PYmplY3QuYXNzaWduKGdpZ3lhLnV0aWxzLCBHaWd5YVV0aWxzU3RyaW5nUGFyYW1zKTtcclxuIiwiaW1wb3J0ICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvR2lneWFHbG9iYWxzJztcclxuaW1wb3J0ICdzcmMvY29yZS9BcGlTZXJ2aWNlL2FwcC9naWd5YVV0aWxzJztcclxuaW1wb3J0ICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9nZ2VyL21haW4nO1xyXG5pbXBvcnQgKiBhcyBMb2NhbEluZm8gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XHJcbmltcG9ydCAqIGFzIEpzb25wUmVxdWVzdCBmcm9tICcuL0pzb25wUmVxdWVzdCc7XHJcbmltcG9ydCB7R3JvdXBBcGlEb21haW5TZXJ2aWNlfSBmcm9tICdzcmMvY29yZS9BcGlTZXJ2aWNlL2FwcC9Hcm91cEFwaURvbWFpblNlcnZpY2UnO1xyXG5pbXBvcnQge2NyZWF0ZURvbWFpblJlc29sdmVyfSBmcm9tICdzcmMvY29yZS9BcGlTZXJ2aWNlL2FwcC9Eb21haW5SZXNvbHZlcic7XHJcbmltcG9ydCB7QXBpU2VydmljZX0gZnJvbSAnc3JjL2NvcmUvQXBpU2VydmljZS9hcHAvQXBpU2VydmljZSc7XHJcbmltcG9ydCB7UHJveHlMaXN0ZW5lcn0gZnJvbSAnc3JjL2NvcmUvU2VydmljZVByb3h5L1Byb3h5TGlzdGVuZXInO1xyXG5pbXBvcnQge0lBcGlTZXJ2aWNlSW5pdEluZm8sIFdlYlNka0NvbmZpZ30gZnJvbSAnc3JjL2NvcmUvQXBpU2VydmljZS9hcHAvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7VXJpfSBmcm9tIFwiLi4vLi4vR2lneWEuSnMvYXBwL1V0aWxzL1VyaVwiO1xyXG5pbXBvcnQgeyBnZXRCYXNlRG9tYWluIH0gZnJvbSBcIi4uLy4uL0dpZ3lhLkpzL2FwcC9VdGlscy9kb21haW5zXCI7XHJcblxyXG4vKipcclxuICogdGhpcyBmaWxlIHdpbGwgYmUgaW5qZWN0IGludG8gYXBpLmFzcHhcclxuICovXHJcblxyXG5pZiAoIWdpZ3lhLmFwaUtleSkgLy8gZmFsbGluZyBiYWNrIHRvIGFwaUtleSBmcm9tIHF1ZXJ5IHN0cmluZyBpbiBjYXNlIHNvbWV0aGluZyB3ZW50IHdyb25nIG9uIG91ciBiYWNrIGVuZC5cclxuICAgIGdpZ3lhLmFwaUtleSA9IGdpZ3lhLnV0aWxzLmdldFJlcVBhcmFtVmFsdWUobG9jYXRpb24uc2VhcmNoLCAnYXBpS2V5Jyk7XHJcblxyXG5jb25zdCB7YXBpS2V5LCBkZWZhdWx0QXBpRG9tYWluLCBkYXRhQ2VudGVyLCBjb25maWdIb3N0bmFtZU92ZXJyaWRlfSA9IGdpZ3lhO1xyXG5cclxuKGFzeW5jIGZ1bmN0aW9uIG1haW4oKSB7XHJcblxyXG4gICAgbGV0IHdlYlNka0NvbmZpZzogV2ViU2RrQ29uZmlnO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3Qgb3JpZ2luRG9tYWluID0gZ2V0T3JpZ2luRG9tYWluKCk7XHJcbiAgICAgICAgY29uc3QgY29uZmlnSG9zdG5hbWUgPSBjb25maWdIb3N0bmFtZU92ZXJyaWRlIHx8IGBodHRwczovL2NkbnMuJHtkYXRhQ2VudGVyfS4ke2RlZmF1bHRBcGlEb21haW59YDtcclxuICAgICAgICB3ZWJTZGtDb25maWcgPSBhd2FpdCBVcmkucGFyc2UoYCR7Y29uZmlnSG9zdG5hbWV9L3Nkay5jb25maWcuZ2V0QVBJYClcclxuICAgICAgICAgICAgLmFkZFRvU2VhcmNoKHthcGlLZXksIHBhZ2VVUkw6IG9yaWdpbkRvbWFpbn0pXHJcbiAgICAgICAgICAgIC5mZXRjaDxXZWJTZGtDb25maWc+KDMpO1xyXG5cclxuICAgICAgICBMb2NhbEluZm8ubG9jYWxJbmZvLmJhc2VEb21haW4gPSBnZXRCYXNlRG9tYWluKHdlYlNka0NvbmZpZy5iYXNlRG9tYWlucyk7XHJcbiAgICAgICAgT2JqZWN0LmFzc2lnbihnaWd5YSwgTG9jYWxJbmZvLCBKc29ucFJlcXVlc3QsIHtwYXJ0bmVyU2V0dGluZ3M6IHdlYlNka0NvbmZpZ30pO1xyXG5cclxuICAgICAgICBjb25zdCBncm91cEFwaURvbWFpblNlcnZpY2UgPSBuZXcgR3JvdXBBcGlEb21haW5TZXJ2aWNlKCk7XHJcblxyXG4gICAgICAgIGNvbnN0IGRvbWFpblJlc29sdmVyID1cclxuICAgICAgICAgICAgY3JlYXRlRG9tYWluUmVzb2x2ZXIoXHJcbiAgICAgICAgICAgICAgICBkYXRhQ2VudGVyLFxyXG4gICAgICAgICAgICAgICAgd2ViU2RrQ29uZmlnLmJhc2VEb21haW5zLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luRG9tYWluLFxyXG4gICAgICAgICAgICAgICAgZGVmYXVsdEFwaURvbWFpbixcclxuICAgICAgICAgICAgICAgIHdlYlNka0NvbmZpZy5jdXN0b21BUElEb21haW5QcmVmaXgsXHJcbiAgICAgICAgICAgICAgICBncm91cEFwaURvbWFpblNlcnZpY2UpO1xyXG5cclxuICAgICAgICBjb25zdCBoYXNHbWlkID0gZ2lneWEudXRpbHMuZ2V0UGFyYW1WYWx1ZShkb2N1bWVudC5jb29raWUsICdoYXNHbWlkJywgJzsnKSA9PT0gJ3ZlcjInO1xyXG4gICAgICAgIGNvbnN0IGFwaVNlcnZpY2UgPSBuZXcgQXBpU2VydmljZShhcGlLZXksIGhhc0dtaWQsIGRvbWFpblJlc29sdmVyLCBncm91cEFwaURvbWFpblNlcnZpY2UpO1xyXG4gICAgICAgIGNvbnN0IGxpc3RlbmVyID0gbmV3IFByb3h5TGlzdGVuZXIoYXBpU2VydmljZSwgb3JpZ2luRG9tYWluKTtcclxuXHJcbiAgICAgICAgbGlzdGVuZXIubGlzdGVuKHtcclxuICAgICAgICAgICAgYXBpRG9tYWluOiBkb21haW5SZXNvbHZlci5nZXRBcGlEb21haW4oKSxcclxuICAgICAgICAgICAgaXNHcm91cEFwaURvbWFpbjogZG9tYWluUmVzb2x2ZXIuaXNHcm91cEFwaURvbWFpbixcclxuICAgICAgICAgICAgaGFzR3JvdXBBcGlEb21haW5DaGFuZ2VkOiBkb21haW5SZXNvbHZlci5oYXNHcm91cEFwaURvbWFpbkNoYW5nZWQsXHJcbiAgICAgICAgfSBhcyBJQXBpU2VydmljZUluaXRJbmZvKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICBnaWd5YS5sb2dnZXIuZXJyb3IoYGdpZ3lhOiBlcnJvciBsb2FkaW5nIGFwaSBmcmFtZWAsIHtlLCB3ZWJTZGtDb25maWd9KTtcclxuICAgIH1cclxufSkoKTtcclxuXHJcbmZ1bmN0aW9uIGdldE9yaWdpbkRvbWFpbigpIHtcclxuICAgIC8vIGluIGlmcmFtZVxyXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbiAhPSB3aW5kb3cucGFyZW50LmxvY2F0aW9uKSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5yZWZlcnJlciB8fCBnaWd5YS51dGlscy5nZXRSZXFQYXJhbVZhbHVlKGxvY2F0aW9uLmhhc2gsICdvcmlnaW4nKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvdy5kb2N1bWVudC5sb2NhdGlvbi5ocmVmO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBjb25zdCBlbnVtIEdTRXJyb3JzIHtcclxuICAgIE9LID0gMCxcclxuICAgIERhdGFfUGVuZGluZyA9IDEwMDAwMSwgLy8gRGF0YSBpcyBzdGlsbCBiZWluZyBwcm9jZXNzZWQsIHF1ZXJ5IGFnYWluIGZvciB0aGUgcmVzcG9uc2VcclxuICAgIE5FVFdPUktfRVJST1IgPSA1MDAwMjYsXHJcbiAgICBEQVRBX1BFTkRJTkcgPSAxMDAwMDEsIC8vIERhdGEgaXMgc3RpbGwgYmVpbmcgcHJvY2Vzc2VkLCBxdWVyeSBhZ2FpbiBmb3IgdGhlIHJlc3BvbnNlXHJcbiAgICBPUEVSQVRJT05fQ0FOQ0VMRUQgPSAyMDAwMDEsIC8vIHVzZXIgY2FuY2VsZWQsIGluIGxvZ2luIHByb2Nlc3NcclxuICAgIFBFUk1JU1NJT05fR1JBTlRFRCA9IDIwMDAwMiwgLy8gSW5uZXIgY29kZVxyXG4gICAgUEVSTUlTU0lPTl9OT1RfR1JBTlRFRCA9IDIwMDAwMywgLy8gSW5uZXIgY29kZVxyXG4gICAgUkVESVJFQ1QgPSAyMDAwMDQsIC8vIElubmVyIGNvZGVcclxuICAgIE5FV19VU0VSID0gMjAwMDA1LCAvLyBJbm5lciBjb2RlXHJcbiAgICBPUEVSQVRJT05fRE9ORSA9IDIwMDAwNiwgLy8gSW5uZXIgY29kZVxyXG4gICAgVVBEQVRFX1VTRVIgPSAyMDAwMDcsIC8vIElubmVyIGNvZGVcclxuICAgIE9LX1dJVEhfRVJST1JTID0gMjAwMDA4LCAvLyBGb3IgcmVwb3J0cyAtIHdoZW4gd2UgcmV0dXJuIG9rIHRvIGNsaWVudCBidXQgaGFkIGFjY2VwdGFibGUgZXJyb3JzICh0aGF0IHdlIHdhbnQgdG8ga25vdyBhYm91dCkgb24gdGhlIHdheVxyXG4gICAgQUNDT1VOVFNfTElOS0VEID0gMjAwMDA5LCAvLyBBZnRlciBsaW5raWduIGFjY291dG5zIHZpYSBsb2dpbiwgcmV0dXJuIHRoaXMgZXJyb3IgY29kZVxyXG4gICAgT0tfV0lUSF9FUlJPUl9MT0dJTl9JREVOVElGSUVSX0VYSVNUUyA9IDIwMDAxMCwgLy8gRm9yIHNldEFjY291bnRJbmZvIHVzaW5nIHRoZSBjb25mbGljdEhhbmRsaW5nIHBhcmFtIC0gcHJvZmlsZSB3YXMgc2F2ZWQsIGJ1dCB0aGUgZW1haWwgY29uZmxpY3RzIHdpdGggYW5vdGhlciB1c2VyXHJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfUkVHSVNUUkFUSU9OID0gMjA2MDAxLCAvLyBGb3IgYWNjb3VudHMgQVBJLFxyXG4gICAgQUNDT1VOVF9QRU5ESU5HX1ZFUklGSUNBVElPTiA9IDIwNjAwMiwgLy8gRm9yIGFjY291bnRzIEFQSTsgY29uc2lkZXIgbW92aW5nIHRvIDQwM3h4eCBzZWN0aW9uIGluIHRoZSBmdXR1cmUuXHJcbiAgICBBQ0NPVU5UX01JU1NJTkdfTE9HSU5JRCA9IDIwNjAwMywgLy8gRm9yIGFjY291bnRzIEFQSVxyXG4gICAgSURFTlRJVFlfQUxSRUFEWV9BU1NJR05FRCA9IDIwNjAwNCwgLy8gRm9yIGltcG9ydCBhY2NvdW50cyBBUElcclxuICAgIEFGVEVSX0VNQUlMX1ZFUklGSUNBVElPTiA9IDIwNjAwNSxcclxuICAgIFBFTkRJTkdfQ09ERV9WRVJJRklDQVRJT04gPSAyMDYwMDYsXHJcbiAgICBDTElFTlRfTE9HID0gMzAwMDAxLCAvLyBpbnRlcm5hbCwgZm9yIHJlcG9ydGluZyBlcm9ycnMgaW4gY2xpZW50IFNES1NcclxuICAgIElOVkFMSURfREFUQV9DRU5URVIgPSAzMDEwMDEsIC8vIFwiSW52YWxpZCBkYXRhLWNlbnRlclwiLiB3aXRoIGVycm9yIGRldGFpbHMgb2Y6IFwiVGhpcyBBUEkga2V5IGlzIHNlcnZlZCBieSBhbm90aGVyIGRhdGEgY2VudGVyXCIuXHJcbiAgICBJTlZBTElEX1JFUVVFU1RfRk9STUFUID0gNDAwMDAxLCAvLyBjb3VsZCBiZSBhbGwga2luZCBvZiBlcnJvcnMgd2l0aCB3cm9uZyByZXF1ZXN0IChub24gc2VjdXJlIHdoZW4gc2hvdWxkIGJlIHNlY3VyZSwgd3JvbmcgYXV0aGVudGljYXRpb24gaGVhZGVyKVxyXG4gICAgTUlTU0lOR19SRVFVSVJFRF9QQVJBTUVURVIgPSA0MDAwMDIsXHJcbiAgICBVTklRVUVfSURFTlRJRklFUl9FWElTVFMgPSA0MDAwMDMsXHJcbiAgICBJTlZBTElEX1BBUkFNRVRFUl9GT1JNQVQgPSA0MDAwMDQsXHJcbiAgICBJTlZBTElEX1BBUkFNRVRFUl9WQUxVRSA9IDQwMDAwNixcclxuICAgIERVUExJQ0FURV9WQUxVRSA9IDQwMDAwNyxcclxuICAgIElOVkFMSURfQVVUSEVOVElDQVRJT05fSEVBREVSID0gNDAwMDA4LCAvLyBPQXV0aDJcclxuICAgIFZBTElEQVRJT05fRVJST1IgPSA0MDAwMDksIC8vIEluIGFjY291bnRzLnJlZ2lzdGVyLCB3aGVuZXZlciB0aGVyZSBpcyBhIHZhbGlkYXRpb24gZXJyb3JcclxuICAgIElOVkFMSURfUkVESVJFQ1RfVVJJID0gNDAwMDExLCAvLyBPQXV0aDJcclxuICAgIElOVkFMSURfUkVTUE9OU0VfVFlQRSA9IDQwMDAxMiwgLy8gT0F1dGgyXHJcbiAgICBVTlNVUFBPUlRFRF9HUkFOVF9UWVBFID0gNDAwMDEzLCAvLyBPQXV0aDJcclxuICAgIElOVkFMSURfR1JBTlQgPSA0MDAwMTQsIC8vIE9BdXRoMlxyXG4gICAgQ09ERV9FWFBJUkVEID0gNDAwMDE1LCAvLyBPQXV0aDJcclxuICAgIFNDSEVNQV9WQUxJREFUSU9OX0ZBSUxFRCA9IDQwMDAyMCxcclxuICAgIENBUFRDSEFfVkVSSUZJQ0FUSU9OX0ZBSUxFRCA9IDQwMDAyMSxcclxuICAgIFVOSVFVRV9JTkRFWF9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDIyLFxyXG4gICAgSU5WQUxJRF9UWVBFX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjMsXHJcbiAgICBEWU5BTUlDX0ZJRUxEU19WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI0LFxyXG4gICAgV1JJVEVfQUNDRVNTX1ZBTElEQVRJT05fRVJST1IgPSA0MDAwMjUsXHJcbiAgICBJTlZBTElEX0ZPUk1BVF9WQUxJREFUSU9OX0VSUk9SID0gNDAwMDI2LFxyXG4gICAgUkVRVUlSRURfVkFMVUVfVkFMSURBVElPTl9FUlJPUiA9IDQwMDAyNyxcclxuICAgIEVNQUlMX05PVF9WRVJJRklFRCA9IDQwMDAyOCxcclxuICAgIFNDSEVNQV9DT05GTElDVF9FUlJPUiA9IDQwMDAyOSwgLy8gVG8gaGFuZGxlIFVzZXIgc3RvcnkgMzQzMzAuIEltcHJvdmUgRWxhc3RpY1NlYXJjaE1hcHBpbmdFeGNlcHRpb24gaGFuZGxpbmcgaW4gRFMuSW5kZXhPYmplY3RcclxuICAgIE9QRVJBVElPTl9OT1RfQUxMT1dFRCA9IDQwMDAzMCwgLy8gVXNlciBzdG9yeSAzNDMxMSAtIElmIGFkZENvbm5lY3Rpb24gaXMgY2FsbGVkIHJldHVybiBhbiBlcnJvciAoXCJvcGVyYXRpb24gbm90IGFsbG93ZWQgZm9yIHRoaXMgYWNjb3VudFwiLCA0MDBYWFggZXJyb3IpLlxyXG4gICAgU0VDVVJJVFlfVkVSSUZJQ0FUSU9OX0ZBSUxFRCA9IDQwMDA1MCxcclxuICAgIElOVkFMSURfQVBJS0VZX1BBUkFNRVRFUiA9IDQwMDA5MyxcclxuICAgIE5PVF9TVVBQT1JURUQgPSA0MDAwOTYsIC8vIHRoZSBmdW5jdGlvbiBpcyBub3Qgc3VwcG9ydGVkIGJ5IGFueSBvZiB0aGUgY3VycmVudGx5IGNvbm5lY3RlZCBwcm92aWRlcnNcclxuICAgIFVOU1VQUE9SVEVEX1VTRVJfQUdFTlQgPSA0MDAwOTcsIC8vXHJcbiAgICBOT19QUk9WSURFUlMgPSA0MDAxMDAsIC8vIGNsaWVudD9cclxuICAgIFBPUFVQX0JMT0NLRUQgPSA0MDAxMDEsIC8vIGNsaWVudFxyXG4gICAgSU5WQUxJRF9FVkVOVF9IQU5ETEVSID0gNDAwMTAyLCAvLyBjbGllbnRcclxuICAgIElOVkFMSURfQ09OVEFJTkVSSUQgPSA0MDAxMDMsIC8vIGNsaWVudFxyXG4gICAgTk9UX0NPTk5FQ1RFRCA9IDQwMDEwNiwgLy8gdXNlciBpcyBub3QgY29ubmVjdGVkIHRvIHRoZSByZXF1aXJlZCBuZXR3b3JrIG9yIHRvIGFueSBuZXR3b3JrXHJcbiAgICBJTlZBTElEX1NJVEVfRE9NQUlOID0gNDAwMTIwLCAvLyB0aGUgY3VycmVudCBkb21haW4gZG9lcyBub3QgbWF0Y2ggdGhlIGRvbWFpbiBjb25maWd1cmVkIGZvciB0aGUgYXBpIGtleVxyXG4gICAgUFJPVklERVJfQ09ORklHVVJBVElPTl9FUlJPUiA9IDQwMDEyMiwgLy8gdGhlIGN1cnJlbnQgZG9tYWluIGRvZXMgbm90IG1hdGNoIHRoZSBkb21haW4gY29uZmlndXJlZCBmb3IgdGhlIGFwaSBrZXlcclxuICAgIExJTUlUX1JFQUNIRUQgPSA0MDAxMjQsIC8vIEdhbWVNZWNoYW5pY3MgLSBDYXAgd2FzIHJlYWNoZWRcclxuICAgIEZSRVFVRU5DWV9MSU1JVF9SRUFDSEVEID0gNDAwMTI1LCAvLyBDb21tZW50cy9GZWVkIC0gU3BhbSBDYXBzIHdhcyByZWFjaGVkXHJcbiAgICBJTlZBTElEX0FDVElPTiA9IDQwMDEyNiwgLy8gR2FtZU1lY2hhbmljcyAtIEludmFsaWQgYWN0aW9uLiBUcmlnZ2VyZWQgYWN0aW9uIGNhbid0IGJlIGluaXRpYXRlZCBleHRlcm5hbGx5XHJcbiAgICBJTlNVRkZJQ0lFTlRfUE9JTlRTX1RPX1JFREVFTSA9IDQwMDEyNywgLy8gR2FtZU1lY2hhbmljcyAtIEluc3VmZmljaWVudF9wb2ludHNfdG9fcmVkZWVtXHJcbiAgICBTSUdOQVRVUkVfVElNRVNUQU1QX0VYUElSRUQgPSA0MDAxMjgsIC8vIHRoZSB0aW1lc3RhbXAgaW5zaWRlIHRoZSBzaWduYXR1cmUgaXMgZXhwaXJlZFxyXG4gICAgSU5WQUxJRF9QT0xJQ1lfQ09ORklHVVJBVElPTiA9IDQwMTAwMCwgLy8gUG9saWN5IGNvbmZpZ3VyYXRpb24gaXMgaW52YWxpZCAoaS5lLiBwcmV2ZW50IHJlZ2l0cmF0aW9uKVxyXG4gICAgU1VTUEVDVEVEX1NQQU0gPSA0MDEwMTAsIC8vIFNvbWVvbmUgaXMgdHJ5aW5nIHRvIHVzZSBHaWd5YSB0byBzZW5kIGEgZW1haWwgd2l0aCBhIFVSTCB0aGF0IGRvZXMgbm90IG1hdGNoIGFueSBvZiB0aGUgY2xpZW50J3MgZG9tYWluczsgc3VzcGVjdGVkIHNwYW0uXHJcbiAgICBMT0dJTl9GQUlMRURfQ0FQVENIQV9SRVFVSVJFRCA9IDQwMTAyMCwgLy8gYWNjb3VudHMubG9naW4gLSBjYXB0Y2hhIHJlcXVpcmVkXHJcbiAgICBMT0dJTl9GQUlMRURfV1JPTkdfQ0FQVENIQSA9IDQwMTAyMSwgLy8gYWNjb3VudHMubG9naW4gLSB3cm9uZyBjYXB0Y2hhIGNvZGVcclxuICAgIE9MRF9QQVNTV09SRF9VU0VEID0gNDAxMDMwLCAvLyBUaGUgdXNlciBwcm92aWRlZCBoaXMgcHJldmlvdXMgcGFzc3dvcmQsIG5vdCB0aGUgY3VycmVudCBvbmVcclxuICAgIEZPUkJJRERFTiA9IDQwMzAwMCxcclxuICAgIElOVkFMSURfU0VTU0lPTl9UT0tFTiA9IDQwMzAwMSwgLy8gaW50ZXJuYWxcclxuICAgIFJFUVVFU1RfSEFTX0VYUElSRUQgPSA0MDMwMDIsIC8vIHRoZSB0aW1lc3RhbXAgb3IgZXhwaXJhdGlvbiBvZiB0aGUgdG9rZW4gdXNlZCBleGNlZWRlZCB0aGUgYWxsb3dlZCB0aW1lIHdpbmRvd1xyXG4gICAgSU5WQUxJRF9SRVFVRVNUX1NJR05BVFVSRSA9IDQwMzAwMyxcclxuICAgIERVUExJQ0FURV9OT05DRSA9IDQwMzAwNCxcclxuICAgIFVOQVVUSE9SSVpFRF9VU0VSID0gNDAzMDA1LCAvLyB0aGUgdXNlciBpZCBwYXNzZWQgaXMgbm90IHZhbGlkIGZvciB0aGlzIHNpdGVcclxuICAgIFNFTlNJVElWRV9EQVRBX1NFTlRfT1ZFUl9IVFRQID0gNDAzMDA2LCAvLyB3aGVuIHNlbmRpbmcgdGhlIHNlY3JldCBrZXkgaW4gUkVTVCBpdCBoYXMgdG8gYmUgb3ZlciBIVFRQU1xyXG4gICAgUEVSTUlTU0lPTl9ERU5JRUQgPSA0MDMwMDcsIC8vIENvbW1lbnRzIHNlcnZlciAtIFBlcm1pc3Npb24gZGVuaWVkIChyZWFkT25seSxtb2RlcmF0aW9uIHNpdGUpLlxyXG4gICAgSU5WQUxJRF9PUEVOSURfVVJMID0gNDAzMDA4LCAvLyBjYW5ub3QgZmluZCBhbiBvcGVuSWQgZW5kcG9pbnQgb24gdGhlIHVybCBvciB1c2VybmFtZSBnaXZlbiBmb3Igb3BlbklkIGxvZ2luXHJcbiAgICBQUk9WSURFUl9TRVNTSU9OX0VYUElSRUQgPSA0MDMwMDksIC8vIHRoZSB1c2VyIHNlc3Npb24gZm9yIHRoaXMgcHJvdmlkZXIgaXMgZXhwaXJlZFxyXG4gICAgSU5WQUxJRF9TRUNSRVQgPSA0MDMwMTAsIC8vIHRoZSByZXF1ZXN0IGhhcyBhbiBpbnZhbGlkIHNlY3JldCBrZXlcclxuICAgIFNFU1NJT05fSEFTX0VYUElSRUQgPSA0MDMwMTEsIC8vIHRoZSBzZXNzaW9uIGZvciB0aGlzIHVzZXIgaGFzIGV4cGlyZWRcclxuICAgIE5PX1ZBTElEX1NFU1NJT04gPSA0MDMwMTIsIC8vIHJlcXVlc3RlZCB1c2VyIGhhcyBubyB2YWxpZCBzZXNzaW9uXHJcbiAgICBVTlZFUklGSUVEX1VTRVIgPSA0MDMwMTMsIC8vIHRoZSB1c2VyIGlzIG5vdCB2ZXJpZmllZCBpbiBTU08gc2Vzc2lvblxyXG4gICAgTUlTU0lOR19SRVFVRVNUX1JFRkVSUkVSID0gNDAzMDE1LCAvLyB3ZSBjYW4ndCB2YWxpZGF0ZSB0aGUgcmVxdWVzdCBiZWNhdXNlIHRoZSByZWZlcnJlciBoZWFkZXIgaXMgbWlzc2luZ1xyXG4gICAgVU5FWFBFQ1RFRF9QUk9WSURFUl9VU0VSID0gNDAzMDE3LCAvLyB0aGUgbG9nZ2VkIGluIHVzZXIgaXMgZGlmZmVyZW50IGZyb20gdGhlIG9uZSBleHBlY3RlZFxyXG4gICAgUEVSTUlTU0lPTl9OT1RfUkVRVUVTVEVEID0gNDAzMDIyLCAvLyB0aGUgYWN0aW9uIG5lZWRzIGEgdXNlciBwZXJtaXNzaW9uIGFuZCBpdCB3YXMgbm90IHJlcXVlc3RlZFxyXG4gICAgTk9fVVNFUl9QRVJNSVNTSU9OID0gNDAzMDIzLCAvLyB0aGUgYWN0aW9uIG5lZWRzIGEgdXNlciBwZXJtaXNzaW9uIGFuZCB3ZSBkb24ndCBoYXZlIG9uZVxyXG4gICAgUFJPVklERVJfTElNSVRfUkVBQ0hFRCA9IDQwMzAyNCwgLy8gdGhlIHByb3ZpZGVyIGxpbWl0IGZvciB0aGlzIGFjdGlvbiB3YXMgZXhjZWVkZWRcclxuICAgIElOVkFMSURfVE9LRU4gPSA0MDMwMjUsIC8vIE9BdXRoMlxyXG4gICAgVU5BVVRIT1JJWkVEX0FDQ0VTU19FUlJPUiA9IDQwMzAyNiwgLy8gQ2FsbHMgdG8gYWNjb3VudHMuaXNBdmFpbGFibGVMb2dpbklEIFdoZW4gcHJldmVudExvZ2luSURIYXJ2ZXN0aW5nID0gdHJ1ZSBzaG91bGQgcmV0dXJuIGFuIGFwcHJvcHJpYXRlIDQwM3h4eCB1bmF1dGhvcml6ZWQgYWNjZXNzIGVycm9yLlxyXG4gICAgRElGRkVSRU5UX1VTRVJfRk9SX1JFQVVUSCA9IDQwMzAyNywgLy8gRGlmZmVyZW50IHVzZXIgdHJpZWQgdG8gcmUtYXV0aG9yaXplLlxyXG4gICAgU0VTU0lPTl9FWFBJUkVEX1JFVFJZID0gNDAzMDMwLCAvLyBJbm5lciBjb2RlIC0gd2hlbiB0aGUgZmFjZWJvb2sgc2Vzc2lvbiBpcyBleHBpcmVkIGFuZCB0aGUgY2xpZW50IHdhaXRzIGZvciBGQiBvbiBwYWdlIHRvIGxvYWRcclxuICAgIEFQUFJPVkVEX0JZX01PREVSQVRPUiA9IDQwMzAzMSwgLy8gY29tbWVudHMgLSBjYW50IGZsYWcgY29tbWVudCwgaXQgd2FzIGFwcHJvdmVkIGJ5IHRoZSBtb2RlcmF0b3IgYWxyZWFkeS5cclxuICAgIFRPS0VOX0hBU19SRU5FV0VEID0gNDAzMDMyLCAvLyB0aGUgdG9rZW4gaXMgbm8gbG9uZ2VyIHZhbGlkLCBidXQgd2UgaGF2ZSBuZXcgdG9rZW4gdG8gcHJvdmlkZVxyXG4gICAgTk9fVVNFUl9DT09LSUUgPSA0MDMwMzUsIC8vIG5vIHVzZXIgY29va2llXHJcbiAgICBVTkFVVEhPUklaRURfUEFSVE5FUiA9IDQwMzAzNiwgLy8gcGFydG5lciBpcyBkaXNhYmxlZFxyXG4gICAgUE9TVF9ERU5JRUQgPSA0MDMwMzcsIC8vIENvbW1lbnRzIHNlcnZlciAtIFBvc3QgZGVuaWVkIHdoZW4gdGhlIHVzZXIgdHJpZWQgdG8gcmV2aWV3IHR3aWNlLlxyXG4gICAgTk9fTE9HSU5fVElDS0VUID0gNDAzMDQwLCAvLyBubyBsb2dpbiB0aWNrZXQgaW4gY2FsbGJhY2sgdXJsXHJcbiAgICBBQ0NPVU5UX0RJU0FCTEVEID0gNDAzMDQxLCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIGdzLmFjY291bnRzLklzQWN0aXZlPWZhbHNlXHJcbiAgICBJTlZBTElEX0xPR0lOSUQgPSA0MDMwNDIsIC8vIEZvciBhY2NvdW50cyAtIHdoZW4gdHJ5aW5nIHRvIGxvZ2luIHdpdGggYSBsb2dpbklEIHRoYXQgZG8gbm90IGV4aXN0c1xyXG4gICAgTE9HSU5fSURFTlRJRklFUl9FWElTVFMgPSA0MDMwNDMsIC8vIEZvciBhY2NvdW50OiBJZiBwcm92aWRlckVtYWlsIGlzIGRlZmluZWQgYXMgYSBsb2dpbklkZW50aWZpZXIgaW4gdGhlIHBvbGljeSwgYW5kIHRoZSBlbWFpbCBhZGRyZXNzIHJlY2VpdmVkIGZyb20gdGhlIHByb3ZpZGVyIGV4aXN0cyBpbiB0aGUgZ3MubG9naW5JZGVudGlmaWVycyBjb2xsZWN0aW9uIGJ1dCBhc3NvY2lhdGVkIHdpdGggYSBkaWZmZXJlbnQgVVVJRCB0aGFuIHRoZSBjdXJyZW50IHVzZXIsIHRoZW4gcmV0dXJuIFwiTG9naW4gaWRlbnRpZmllciBleGlzdHNcIiBlcnJvciBjb2RlICg0MDN4eHgpLlxyXG4gICAgVU5ERVJBR0VfVVNFUiA9IDQwMzA0NCwgLy8gRm9yIENPUFBBIGNvbXBsaWFuY2UgKENoaWxkcmVuJ3MgT25saW5lIFByaXZhY3kgUHJvdGVjdGlvbiBBY3QpXHJcbiAgICBJTlZBTElEX1NJVEVfQ09ORklHVVJBVElPTl9FUlJPUiA9IDQwMzA0NSwgLy8gRm9yIGFjY291bnRzIC0gc2l0ZSBEUyBpcyBlbmFibGVkIHRob3VnaCBubyBEU1NpemUgd2FzIGNvbmZpZ3VyZWQuXHJcbiAgICBMT0dJTklEX0RPRVNfTk9UX0VYSVNUID0gNDAzMDQ3LCAvLyBGb3IgYWNjb3VudHMgLSB3aGVuIHRyeWluZyB0byByZXNldCBwYXNzd29yZCB3aXRoIGEgbG9naW5JRCB0aGF0IGRvIG5vdCBleGlzdHNcclxuICAgIEFQSV9SQVRFX0xJTUlUX0VYQ0VFREVEID0gNDAzMDQ4LFxyXG4gICAgUEVORElOR19QQVNTV09SRF9DSEFOR0UgPSA0MDMxMDAsIC8vIFRoZSB1c2VyJ3MgcGFzc3dvcmQgbmVlZHMgdG8gYmUgY2hhbmdlZFxyXG4gICAgQUNDT1VOVF9QRU5ESU5HX1RGQV9WRVJJRklDQVRJT04gPSA0MDMxMDEsXHJcbiAgICBBQ0NPVU5UX1BFTkRJTkdfVEZBX1JFR0lTVFJBVElPTiA9IDQwMzEwMixcclxuICAgIEFDQ09VTlRfUEVORElOR19SRUNFTlRfTE9HSU4gPSA0MDMxMTAsXHJcbiAgICBBQ0NPVU5UX1RFTVBPUkFSSUxZX0xPQ0tFRF9PVVQgPSA0MDMxMjAsIC8vIFRvbyBtYW55IGxvZ2luIGF0dGVtcHRzOyBhY2NvdW50IGxvY2tlZC1vdXRcclxuICAgIFJFRFVOREFOVF9PUEVSQVRJT04gPSA0MDMyMDAsIC8vIFRoZSBjbGllbnQgcGVyZm9ybWVkIGFuIG9wZXJhdGlvbiB0aGF0IGlzIHJlZHVuZGFudFxyXG4gICAgSU5WQUxJRF9BUFBMSUNBVElPTl9JRCA9IDQwMzIwMSwgLy8gVGhlIGFwcCBpZCBwcm92aWRlZCBpcyBkaWZmZXJlbnQgdGhhbiB0aGUgb25lIGNvbmZpZ3VyZWQgZm9yIHRoZSBzaXRlXHJcbiAgICBOT1RfRk9VTkQgPSA0MDQwMDAsIC8vIENvbW1lbnRzIHNlcnZlciAtIENhdGVnb3J5IG5vdCBmb3VuZC4gQWNjb3VudHMgLSBlbWFpbCB2ZXJpZmljYXRpb24gZmFpbGVkLCB1dWlkIG5vdCBmb3VuZC5cclxuICAgIEZSSUVORF9OT1RfRk9VTkQgPSA0MDQwMDEsIC8vIHRoZSB1c2VyIGlkIHByb3ZpZGVkIGFzIGEgdGFyZ2V0IGlzIG5vdCBhIGZyaWVuZCBmb3IgdGhlIGN1cnJlbnQgdXNlclxyXG4gICAgQ0FURUdPUllfTk9UX0ZPVU5EID0gNDA0MDAyLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBDYXRlZ29yeSBub3QgZm91bmQuXHJcbiAgICBVSURfTk9UX0ZPVU5EID0gNDA0MDAzLFxyXG4gICAgUkVTT1VSQ0VfTk9UX0ZPVU5EID0gNDA0MDA0LCAvLyBDbGllbnQgc2lkZSAtIGltYWdlIG5vdCBmb3VuZCBhZnRlciB1cGxvYWRcclxuICAgIElOVkFMSURfQVBJX01FVEhPRCA9IDQwNTAwMSwgLy8gaW50ZXJuYWwgZm9yIG91ciBKUyBBUElcclxuICAgIElERU5USVRZX0VYSVNUUyA9IDQwOTAwMSwgLy8gd2hlbiB0cnlpbmcgdG8gY29ubmVjdCB0byBhIHByb3ZpZGVyIHRoYXQgaXMgYWxyZWFkeSBjb25uZWN0ZWQgb3IgbGluayB0byBhbiBhbHJlYWR5IGxpbmtlZCBhY2NvdW50XHJcbiAgICBHT05FID0gNDEwMDAwLCAvLyBSZXNvdXJjZSBubyBsb25nZXIgYXZhaWxhYmxlLiBEYXRhIEtleSBTZXJ2ZXIgLSBrZXkgcmV2b2tlZC9leHBpcmVkLlxyXG4gICAgUkVRVUVTVF9FTlRJVFlfVE9PX0xBUkdFID0gNDEzMDAxLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBSZXF1ZXN0IHRvIGxhcmdlXHJcbiAgICBDT01NRU5UX1RFWFRfVE9PX0xBUkdFID0gNDEzMDAyLCAvLyBDb21tZW50cyBzZXJ2ZXIgLSBDb21tZW50IFRleHQgdG8gbGFyZ2UuXHJcbiAgICBPQkpFQ1RfVE9PX0xBUkdFID0gNDEzMDAzLCAvLyBEYXRhU3RvcmUgb2JqZWN0IGlzIHRvbyBsYXJnZVxyXG4gICAgUFJPRklMRV9QSE9UT19UT09fTEFSR0UgPSA0MTMwMDQsIC8vIFByb2ZpbGUgcGhvdG8gaXMgdG9vIGxhcmdlLCBleGNlZWRzIG1heGltdW0gYWxsb3dlZCBjb250ZW50IGxlbmd0aFxyXG4gICAgUkVRVUVTVF9VUklfVE9PX0xPTkcgPSA0MTQwMDAsIC8vVGhlIFVSSSBwcm92aWRlZCB3YXMgdG9vIGxvbmcgZm9yIHRoZSBzZXJ2ZXIgdG8gcHJvY2Vzcy5cclxuICAgIE1JU1NJTkdfVVNFUl9QSE9UTyA9IDQwOTAxMCwgLy8gRXJyb3IgLSBtaXNzaW5nIHVzZXIgcGhvdG9cclxuICAgIENPVU5URVJfTk9UX1JFR0lTVEVSRUQgPSA0MDkwMTEsIC8vIENvdW50ZXIgbm90IHJlZ2lzdGVyZWRcclxuICAgIElOVkFMSURfR01JRF9USUNLRVQgPSA0MDkwMTIsIC8vIGdtaWQgdGlja2V0IGlzIG5vdCB2YWxpZFxyXG4gICAgU0FNTF9NQVBQRURfQVRUUklCVVRFX05PVF9GT1VORCA9IDQwOTAxMywgLy8gVXNlZCB3aGVuIG1hcHBlZCBhdHRyaWJ1dGUgdmFsdWUgZm9yIHByb3ZpZGVyVUlEIGNhbm5vdCBiZSByZXRyZWl2ZWRcclxuICAgIFNBTUxfQ0VSVElGSUNBVEVfTk9UX0ZPVU5EID0gNDA5MDE0LCAvLyBVc2VkIHdoZW4gU0FNTCBjZXJ0aWZpY2F0ZSBjb3VsZCBub3QgYmUgcmV0cmVpdmVkLlxyXG4gICAgU0FNTF9NRVNTQUdFX05PVF9GT1VORCA9IDQwOTAxNSwgLy8gVXNlZCB3aGVuIGNhY2hlZCBTQU1MIG1lc3NhZ2UgY291bGQgbm90IGJlIHJldHJlaXZlZC5cclxuICAgIEdFTkVSQUxfU0VSVkVSX0VSUk9SID0gNTAwMDAxLFxyXG4gICAgU0VSVkVSX0xPR0lOX0VSUk9SID0gNTAwMDAyLCAvLyBnZW5lcmFsIGVycm9yIGR1cmluZyB0aGUgbG9naW4gcHJvY2Vzc1xyXG4gICAgREVGQVVMVF9BUFBMSUNBVElPTl9DT05GSUdVUkFUSU9OX0VSUk9SID0gNTAwMDAzLCAvLyBGb3IgbXVsdGlwbGUgREMgLSB3aGVuIG5vIGRlZmF1bHQgYXBwbGljYXRpb24gY2FuIGJlIGZvdW5kIGluIERlZmF1bHRBcHBsaWNhdGlvbnMuY29uZmlnLiBXaXRoIGVycm9yIGRldGFpbHMgb2Y6IFwiRGVmYXVsdCBhcHBsaWNhdGlvbiBpc24ndCBjb25maWd1cmVkIGZvciBkYXRhQ2VudGVyXCJcclxuICAgIFNFU1NJT05fTUlHUkFUSU9OX0VSUk9SID0gNTAwMDE0LCAvLyBlcnJvciBpbiBtaWdyYXRpbmcgb2xkIHRvIG5ldyBmYWNlYm9vayBzZXNzaW9uXHJcbiAgICBQUk9WSURFUl9FUlJPUiA9IDUwMDAyMywgLy8gZ2VuZXJhbCBlcnJvciBmcm9tIHRoZSBwcm92aWRlclxyXG4gICAgREFUQUJBU0VfRVJST1IgPSA1MDAwMjgsXHJcbiAgICBVU0VSTkFNRV9SRVFVSVJFRCA9IDUwMDAyOSwgLy8gSW5uZXIgY29kZVxyXG4gICAgTk9fUFJPVklERVJfQVBQTElDQVRJT04gPSA1MDAwMzEsIC8vIHRoZSBhcHBsaWNhdGlvbiBmb3IgdGhpcyBwcm92aWRlciBpcyBub3QgZGVmaW5lZCBmb3IgdGhpcyBzaXRlXHJcbiAgICBMT0FEX0ZBSUxFRCA9IDUwMDAzMiwgLy8gY2xpZW50IGVycm9yXHJcbiAgICBJTlZBTElEX0VOVklST05NRU5UX0NPTkZJRyA9IDUwMDAzMywgLy8gSW4gY2FzZSB0aGVyZSBpcyBubyB0YXJnZXQgZW52aXJvbm1lbnQgaW4gdGhlIGNvbmZpZyBmaWxlIHdlJ2QgcmV0dXJuIHdpdGggIGludmFsaWRfZW52aXJvbm1lbnRfY29uZmlnIGVycm9yLlxyXG4gICAgRVJST1JfRFVSSU5HX0JBQ0tFTkRfT1BFUkFUSU9OID0gNTAwMDM0LFxyXG4gICAgVElNRU9VVCA9IDUwNDAwMSwgLy8gb3V0Z29pbmcgcmVxdWVzdCBoYWQgdGltZWQgb3V0XHJcbiAgICBDTElFTlRUSU1FT1VUID0gNTA0MDAyLCAvLyBGb3Igc2VydmVyIFNES3MgLSBhIGNsaWVudCBzaWRlIHRpbWVvdXRcclxuICAgIElOVkFMSURfVVJMID0gNDA0MDA0LCAvLyBlbWJlZC5seSA0MDQgZXJyb3IgbWVzc2FnZSAtIHVybCBpcyBub3QgdmFsaWRcclxuICAgIE1FRElBX0lURU1TX05PVF9TVVBQT1JURUQgPSA0MDEwMDEsIC8vIE1lZGlhIGl0ZW1zIGEgbm90IGFsbG93ZWQgZm9yIHRoaXMgY2F0ZWdvcnlcclxuICAgIE1JU1NJTkdfRVJST1JfQ09ERSA9IDU5OTk5OSxcclxufVxyXG5leHBvcnQgY29uc3QgZW51bSBHU0Vycm9yRGV0YWlscyB7XHJcbiAgICBOb25lID0gMCxcclxuICAgIFNhbWVfcGFzc3dvcmQgPSAxMDAwMDEsIC8vIFJlc2V0IFBhc3N3b3JkIC0gXCInb2xkUGFzc3dvcmQnIGNhbm5vdCBiZSB0aGUgc2FtZSBhcyAnbmV3UGFzc3dvcmQnXCJcclxuICAgIEludmFsaWRfcGFzc3dvcmQgPSAxMDAwMDIsIC8vIFJlc2V0IFBhc3N3b3JkIC0gY3VycmVudCBwYXNzd29yZCBpcyB3cm9uZy9pbnZhbGlkXHJcbiAgICBJbnZhbGlkX2NvdW50ZXJzX3F1ZXJ5X3dpdGhfY3Vyc29yID0gMTAwMDAzLFxyXG59XHJcbiIsImltcG9ydCAqIGFzIEVTNlByb21pc2UgZnJvbSAnZXM2LXByb21pc2UnXHJcblxyXG5PYmplY3QuYXNzaWduKGdpZ3lhLCB7IFByb21pc2U6IEVTNlByb21pc2UgfSk7XHJcbiIsImltcG9ydCB7IGdldEJhc2VEb21haW4gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZG9tYWlucyc7XHJcbi8vIExvY2FsIGVudmlyb25tZW50IGluZm8gKGJyb3dzZXIsIGNhcGFiaWxpdGllcywgaG9zdGluZyBkb21haW4pXHJcblxyXG5kZWNsYXJlIGNvbnN0IEFjdGl2ZVhPYmplY3Q6IGFueTtcclxuXHJcbnZhciB1c2VyQWdlbnQgPSBuYXZpZ2F0b3IudXNlckFnZW50LnRvTG93ZXJDYXNlKCk7XHJcbmV4cG9ydCB2YXIgbG9jYWxJbmZvID0ge1xyXG4gICAgYmFzZURvbWFpbjogJycsIC8vIGNhbGN1bGF0ZWQgbGF0ZXIgb25cclxuICAgIGlzQnJvd3NlclN1cHBvcnRzRmlsZXNBUEk6ICgoKSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBGaWxlUmVhZGVyID09PSAnZnVuY3Rpb24nIHx8IHR5cGVvZiBGaWxlUmVhZGVyID09PSAnb2JqZWN0JztcclxuICAgIH0pKCksXHJcbiAgICBpbml0VGltZTogbmV3IERhdGUoKSxcclxuICAgIHZlcnNpb246IDAsIC8vVE9ET1xyXG4gICAgcGFnZURvbWFpbjogZG9jdW1lbnQubG9jYXRpb24uaG9zdG5hbWUsXHJcbiAgICBwcm90b2NvbDogZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHA6JyA/ICdodHRwJyA6ICdodHRwcycsXHJcbiAgICB1c2VyQWdlbnQ6IHVzZXJBZ2VudCxcclxuICAgIGlzV2luOiB1c2VyQWdlbnQuaW5kZXhPZignd2luJykgIT0gLTEsXHJcbiAgICBpc0lFOiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZScpICE9IC0xIHx8ICh1c2VyQWdlbnQuaW5kZXhPZignbW96aWxsYScpICE9IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKCd0cmlkZW50JykgIT0gLTEpLFxyXG4gICAgaXNJRTY6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDYuJykgIT0gLTEsXHJcbiAgICBpc0lFNzogdXNlckFnZW50LmluZGV4T2YoJ21zaWUgNy4nKSAhPSAtMSxcclxuICAgIGlzSUU4OiB1c2VyQWdlbnQuaW5kZXhPZignbXNpZSA4LicpICE9IC0xLFxyXG4gICAgaXNJRTk6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDkuJykgIT0gLTEsXHJcbiAgICBpc0lFMTA6IHVzZXJBZ2VudC5pbmRleE9mKCdtc2llIDEwLicpICE9IC0xLFxyXG4gICAgaXNJRTExOiB1c2VyQWdlbnQuaW5kZXhPZignbW96aWxsYScpICE9IC0xICYmIHVzZXJBZ2VudC5pbmRleE9mKCd0cmlkZW50LzcuMCcpICE9IC0xLFxyXG4gICAgaXNFZGdlOiB1c2VyQWdlbnQuaW5kZXhPZignZWRnZScpICE9IC0xLFxyXG4gICAgaXNJT1M6IHVzZXJBZ2VudC5pbmRleE9mKCdpcGhvbmUnKSAhPSAtMSB8fCB1c2VyQWdlbnQuaW5kZXhPZignaXBhZCcpICE9IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdpcG9kJykgIT0gLTEsXHJcbiAgICBpc1NhZmFyaTUzNDogdXNlckFnZW50LmluZGV4T2YoJ3NhZmFyaS81MzQnKSAhPSAtMSxcclxuICAgIGlzV2VDaGF0OiB1c2VyQWdlbnQuaW5kZXhPZignbWljcm9tZXNzZW5nZXInKSAhPSAtMSxcclxuICAgIGlvc1ZlcnNpb246IChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FwcGxld2Via2l0JykgIT0gLTEgJiYgdXNlckFnZW50LmluZGV4T2YoJ3ZlcnNpb24vJykgIT0gLTEpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHVzZXJBZ2VudC5zcGxpdCgndmVyc2lvbi8nKVsxXS5zcGxpdCgnICcpWzBdKTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIDA7XHJcbiAgICB9KSgpLFxyXG4gICAgaXNBbmRyb2lkOiB1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpICE9IC0xLFxyXG4gICAgaXNBbmRyb2lkQnJvd3NlcjogKHVzZXJBZ2VudCA9PiB7XHJcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdtb3ppbGxhLzUuMCcpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCA0JykgPT09IC0xKSByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgaWYgKHVzZXJBZ2VudC5pbmRleE9mKCdhcHBsZXdlYmtpdCcpID09PSAtMSkgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ3dpbmRvd3MgcGhvbmUnKSAhPT0gLTEpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICAgICAgLy8gU3BlY2lhbCB1c2VyIGFnZW50cyBmb3VuZCBzbyBmYXIgdGhhdCB2aW9sYXRlIHRoZSBleGlzdGFuY2Ugb2YgY2hyb21lIHJ1bGVcclxuICAgICAgICAvLyBCdWcgMzgzNjcgQW5kcm9pZCBCcm93c2VyOiBNb3ppbGxhLzUuMCAoTGludXg7IEFuZHJvaWQgNC4yLjI7IGVuLXVzOyBTQU1TVU5HIEdULUk5NTAwIEJ1aWxkL0pEUTM5KSBBcHBsZVdlYktpdC81MzUuMTkgKEtIVE1MLCBsaWtlIEdlY2tvKSBWZXJzaW9uLzEuMCBDaHJvbWUvMTguMC4xMDI1LjMwOCBNb2JpbGUgU2FmYXJpLzUzNS4xOVxyXG4gICAgICAgIC8vIEJ1ZyA0MDIwOSBDaHJvbWUgQnJvd3NlcjogTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDQuMi4yOyBTQU1TVU5HIFNHVC1JNzQ3IEJ1aWxkL0tPVDQ5SCkgQXBwbGVXZWJLaXQvNTM3LjM2IChLSFRNTCwgbGlrZSBHZWNrbykgQ2hyb21lLzM5LjAuMjE3MS45MyBNb2JpbGUgU2FmYXJpLzUzNy4zNlxyXG4gICAgICAgIC8vIFdpbmRvd3MgUGhvbmUgQnJvd3NlcjogTW96aWxsYS81LjAgKE1vYmlsZTsgV2luZG93cyBQaG9uZSA4LjE7IEFuZHJvaWQgNC4wOyBBUk07IFRyaWRlbnQvNy4wOyBUb3VjaDsgcnY6MTEuMDsgSUVNb2JpbGUvMTEuMDsgTk9LSUE7IEx1bWlhIDkyMCkgbGlrZSBpUGhvbmUgT1MgN18wXzMgTWFjIE9TIFggQXBwbGVXZWJLaXQvNTM3IChLSFRNTCwgbGlrZSBHZWNrbykgTW9iaWxlIFNhZmFyaS81MzdcclxuICAgICAgICAvLyBDaHJvbWUgQnJvd3NlcjogTW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDQuMi4yOyBlbi1nYjsgU0FNU1VORyBHVC1JOTUwMCBCdWlsZC9LT1Q0OUgpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIFZlcnNpb24vMS41IENocm9tZS8yOC4wLjE1MDAuOTQgTW9iaWxlIFNhZmFyaS81MzcuMzZcclxuXHJcbiAgICAgICAgdmFyIGNocm9tZUluZm8gPSAvY2hyb21lXFwvKFxcZCspLy5leGVjKHVzZXJBZ2VudCk7XHJcblxyXG4gICAgICAgIGlmICghY2hyb21lSW5mbykgcmV0dXJuIHRydWU7XHJcblxyXG4gICAgICAgIHZhciBjaHJvbWVWZXJzaW9uID0gcGFyc2VJbnQoY2hyb21lSW5mb1sxXSk7XHJcblxyXG4gICAgICAgIHJldHVybiBjaHJvbWVWZXJzaW9uIDwgMjA7XHJcbiAgICB9KSh1c2VyQWdlbnQpLFxyXG4gICAgY3VycmVudEJyb3dzZXI6ICcnLFxyXG4gICAgYW5kcm9pZFZlcnNpb246IChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSAhPSAtMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFyc2VGbG9hdCh1c2VyQWdlbnQuc2xpY2UodXNlckFnZW50LmluZGV4T2YoJ2FuZHJvaWQnKSArIDgpKTtcclxuICAgICAgICB9IGVsc2UgcmV0dXJuIDA7XHJcbiAgICB9KSgpLFxyXG4gICAgaXNDaHJvbWU6IHVzZXJBZ2VudC5pbmRleE9mKCdjaHJvbWUnKSAhPSAtMSAmJiB1c2VyQWdlbnQuaW5kZXhPZignZWRnZScpID09IC0xLCAvLyBlZGdlIGJyb3dzZXIgYWxzbyB1c2VzIENocm9tZSBpbiBpdHMgVUEgc3RyaW5nLlxyXG4gICAgaXNHb29nbGVCb3Q6IHVzZXJBZ2VudC5pbmRleE9mKCdnb29nbGVib3QnKSAhPSAtMSxcclxuICAgIGlzRkY6IHVzZXJBZ2VudC5pbmRleE9mKCdmaXJlZm94JykgIT0gLTEsXHJcbiAgICBpc09wZXJhOiB1c2VyQWdlbnQuaW5kZXhPZignb3BlcmEnKSAhPSAtMSxcclxuICAgIGlzU2FmYXJpOlxyXG4gICAgICAgIG5hdmlnYXRvci5hcHBWZXJzaW9uICYmXHJcbiAgICAgICAgbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdzYWZhcmknKSAhPSAtMSAmJlxyXG4gICAgICAgIG5hdmlnYXRvci5hcHBWZXJzaW9uLnRvTG93ZXJDYXNlKCkuaW5kZXhPZignY2hyb21lJykgPT0gLTEgJiZcclxuICAgICAgICB1c2VyQWdlbnQuaW5kZXhPZignYW5kcm9pZCcpID09IC0xLFxyXG4gICAgaXNJT1NXZWJWaWV3OiAvKGlQaG9uZXxpUG9kfGlQYWQpLipBcHBsZVdlYktpdCg/IS4qU2FmYXJpKS9pLnRlc3QobmF2aWdhdG9yLnVzZXJBZ2VudCksXHJcbiAgICBpc0lPU0Nocm9tZTogdXNlckFnZW50LmluZGV4T2YoJ2NyaW9zJykgIT0gLTEsXHJcbiAgICBpc01BQzogbmF2aWdhdG9yLmFwcFZlcnNpb24gJiYgbmF2aWdhdG9yLmFwcFZlcnNpb24udG9Mb3dlckNhc2UoKS5pbmRleE9mKCdtYWMnKSAhPSAtMSxcclxuICAgIGlzV2luZG93c1Bob25lOiB1c2VyQWdlbnQuaW5kZXhPZignd2luZG93cyBwaG9uZScpICE9IC0xLFxyXG4gICAgaXNGYWNlYm9va0Jyb3dzZXI6IHVzZXJBZ2VudC5pbmRleE9mKCdmYmFuJykgIT0gLTEgfHwgdXNlckFnZW50LmluZGV4T2YoJ2ZiYXYnKSAhPSAtMSxcclxuICAgIHN1cHBvcnRzUG9zdE1lc3NhZ2U6IHdpbmRvdy5wb3N0TWVzc2FnZSAhPSBudWxsICYmICh1c2VyQWdlbnQuaW5kZXhPZignbXNpZScpID09IC0xIHx8IHVzZXJBZ2VudC5pbmRleE9mKCdpZW1vYmlsZScpICE9IC0xKSxcclxuICAgIHN1cHBvcnRzTG9jYWxTdG9yYWdlOiBmYWxzZSxcclxuICAgIHN1cHBvcnRzU2Vzc2lvblN0b3JhZ2U6IGZhbHNlLFxyXG4gICAgc3VwcG9ydHNGbGFzaDogKCgpID0+IHtcclxuICAgICAgICAvLyBodHRwOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzk5ODI0NS9ob3ctY2FuLWktZGV0ZWN0LWlmLWZsYXNoLWlzLWluc3RhbGxlZC1hbmQtaWYtbm90LWRpc3BsYXktYS1oaWRkZW4tZGl2LXRoYXQtaW5mXHJcbiAgICAgICAgbGV0IHN1cHBvcnRzRmxhc2ggPSBmYWxzZTtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWltZVR5cGVzICYmXHJcbiAgICAgICAgICAgICAgICBuYXZpZ2F0b3IubWltZVR5cGVzWydhcHBsaWNhdGlvbi94LXNob2Nrd2F2ZS1mbGFzaCddICE9IHVuZGVmaW5lZCAmJlxyXG4gICAgICAgICAgICAgICAgbmF2aWdhdG9yLm1pbWVUeXBlc1snYXBwbGljYXRpb24veC1zaG9ja3dhdmUtZmxhc2gnXS5lbmFibGVkUGx1Z2luXHJcbiAgICAgICAgICAgICkge1xyXG4gICAgICAgICAgICAgICAgc3VwcG9ydHNGbGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBmbyA9IG5ldyBBY3RpdmVYT2JqZWN0KCdTaG9ja3dhdmVGbGFzaC5TaG9ja3dhdmVGbGFzaCcpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZvKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3VwcG9ydHNGbGFzaCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGNhdGNoIChlKSB7fVxyXG4gICAgICAgIHJldHVybiBzdXBwb3J0c0ZsYXNoO1xyXG4gICAgfSkoKSxcclxuICAgIHF1aXJrc01vZGU6IGRvY3VtZW50LmNvbXBhdE1vZGUgPT0gJ0JhY2tDb21wYXQnICYmIHVzZXJBZ2VudC5pbmRleE9mKCdtc2llJykgIT0gLTEsXHJcbiAgICBiYWNrQ29tcGF0OiBkb2N1bWVudC5jb21wYXRNb2RlID09ICdCYWNrQ29tcGF0JyxcclxuICAgIC8vIFRPRE86IEFkZCBpc1RhYmxldCBmdW5jdGlvbiBmb3IgZGV2aWNlcyBub24tTW9iaWxlXHJcbiAgICBpc01vYmlsZTogKGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIHZhciBtb2JpbGVDbGllbnRzID0gW1xyXG4gICAgICAgICAgICAnaXBob25lJyxcclxuICAgICAgICAgICAgJ2lwb2QnLFxyXG4gICAgICAgICAgICAnYW5kcm9pZCcsXHJcbiAgICAgICAgICAgICdtaWRwJyxcclxuICAgICAgICAgICAgJzI0MHgzMjAnLFxyXG4gICAgICAgICAgICAnYmxhY2tiZXJyeScsXHJcbiAgICAgICAgICAgICduZXRmcm9udCcsXHJcbiAgICAgICAgICAgICdub2tpYScsXHJcbiAgICAgICAgICAgICdwYW5hc29uaWMnLFxyXG4gICAgICAgICAgICAncG9ydGFsbW1tJyxcclxuICAgICAgICAgICAgJ3NoYXJwJyxcclxuICAgICAgICAgICAgJ3NpZS0nLFxyXG4gICAgICAgICAgICAnc29ueWVyaWNzc29uJyxcclxuICAgICAgICAgICAgJ3N5bWJpYW4nLFxyXG4gICAgICAgICAgICAnd2luZG93cyBjZScsXHJcbiAgICAgICAgICAgICdiZW5xJyxcclxuICAgICAgICAgICAgJ21kYScsXHJcbiAgICAgICAgICAgICdtb3QtJyxcclxuICAgICAgICAgICAgJ29wZXJhIG1pbmknLFxyXG4gICAgICAgICAgICAncGhpbGlwcycsXHJcbiAgICAgICAgICAgICdwb2NrZXQgcGMnLFxyXG4gICAgICAgICAgICAnc2FnZW0nLFxyXG4gICAgICAgICAgICAnc2Ftc3VuZycsXHJcbiAgICAgICAgICAgICdodGMnLFxyXG4gICAgICAgIF07XHJcbiAgICAgICAgZm9yICh2YXIgaSBpbiBtb2JpbGVDbGllbnRzKSB7XHJcbiAgICAgICAgICAgIGlmICh1c2VyQWdlbnQuaW5kZXhPZihtb2JpbGVDbGllbnRzW2ldKSAhPSAtMSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSkoKSxcclxuICAgIGlzTW9iaWxlQXBwOiAoKCkgPT4ge1xyXG4gICAgICAgIGlmICghZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUpXHJcbiAgICAgICAgICAgIC8vIGZvciBvbGQgSUVcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG5cclxuICAgICAgICB2YXIgbWV0YVRhZ3M6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ21ldGEnKSBhcyBhbnk7XHJcblxyXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWV0YVRhZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgaWYgKG1ldGFUYWdzW2ldLmdldEF0dHJpYnV0ZSgnbmFtZScpID09ICd2aWV3cG9ydCcpIHtcclxuICAgICAgICAgICAgICAgIHZhciBjb250ZW50ID0gbWV0YVRhZ3NbaV0uZ2V0QXR0cmlidXRlKCdjb250ZW50Jyk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGNvbnRlbnQgJiYgY29udGVudC5pbmRleE9mKCd3aWR0aD1kZXZpY2Utd2lkdGgnKSAhPT0gLTEpIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9KSgpLFxyXG4gICAgaXNOYXRpdmVNb2JpbGVBcHA6IGZhbHNlLCAvLyB3aWxsIGNoYW5nZSBpZiBtb2JpbGUgYWRhcHRlciB3aWxsIGxvYWQgW2luIGl0cyAnaW5pdCcgbWV0aG9kXS5cclxuICAgIGlzVG91Y2g6IChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAoJ29udG91Y2hzdGFydCcgaW4gd2luZG93KVxyXG4gICAgICAgICAgICAvLyB3b3JrcyBvbiBtb3N0IGJyb3dzZXJzXHJcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG5cclxuICAgICAgICBpZiAoJ29ubXNnZXN0dXJlY2hhbmdlJyBpbiB3aW5kb3cpIHtcclxuICAgICAgICAgICAgLy8gd29ya3Mgb24gaWUxMFxyXG4gICAgICAgICAgICAvLyBUcnkgdG8gZGV0ZXJtaW5lIGlmIElFIGlzIG9wZW4gaW4gbWV0cm8gbW9kZS4gTWV0cm8gZG9lc24ndCBhbGxvdyBhY3RpdmVYLCB0aGF0J3MgdGhlIGJlc3QgdGVzdCBhdmFpbGFibGUgYXMgb2YgSUUxMS5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIG5ldyBBY3RpdmVYT2JqZWN0KCdodG1sZmlsZScpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfSkoKSxcclxuICAgIGlzT25MaW5lOiAoKSA9PiBuYXZpZ2F0b3Iub25MaW5lLFxyXG4gICAgbWVzc2FnaW5nTWV0aG9kOiAwXHJcbn07XHJcbmNvbnN0IGlzU3RvcmFnZUVuYWJsZWQgPSAoc3RvcmFnZU5hbWU6IHN0cmluZyk6IGJvb2xlYW4gPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBzdG9yYWdlID0gd2luZG93W3N0b3JhZ2VOYW1lXTtcclxuICAgICAgICBpZiAoIXN0b3JhZ2UpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY29uc3QgdGVzdE5hbWUgPSAnX2dpZ19sb2NhbFN0b3JhZ2VfdGVzdCc7XHJcbiAgICAgICAgY29uc3QgdGVzdFZhbHVlID0gJ2p1c3QgY2hlY2tpbmcgZm9yIGxvY2FsU3RvcmFnZSc7XHJcbiAgICAgICAgc3RvcmFnZS5zZXRJdGVtKHRlc3ROYW1lLCB0ZXN0VmFsdWUpO1xyXG4gICAgICAgIGNvbnN0IHJlc3VsdCA9IHN0b3JhZ2UuZ2V0SXRlbSh0ZXN0TmFtZSkgPT09IHRlc3RWYWx1ZTtcclxuICAgICAgICBzdG9yYWdlLnJlbW92ZUl0ZW0odGVzdE5hbWUpO1xyXG4gICAgICAgIHJldHVybiByZXN1bHQ7XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgIC8vIFJlYXNvbnM6XHJcbiAgICAgICAgLy8gLSBJbnNpZGUgM3JkIHBhcnR5IEFQSSBwcm94eSBpRnJhbWUuXHJcbiAgICAgICAgLy8gLSBTYWZhcmkgaW4gaW5jb2duaXRvIG1vZGUgd2lsbCBlcnJvciB3aXRoIFwicXVvdGEgZXhjZWVkZWRcIi5cclxuICAgICAgICAvLyAtIENocm9tZSB3aXRoIDNyZCBwYXJ0eSBjb29raWVzIGRpc2FibGVkIHdpbGwgdGhyb3cgYW4gZXJyb3IgaWYgeW91IGFjY2VzcyB0aGUgd2luZG93LmxvY2FsU3RvcmFnZSBvYmplY3QgaW4gQU5ZIHdheS5cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcbn07XHJcbmxvY2FsSW5mby5zdXBwb3J0c0xvY2FsU3RvcmFnZSA9IGlzU3RvcmFnZUVuYWJsZWQoJ2xvY2FsU3RvcmFnZScpO1xyXG5sb2NhbEluZm8uc3VwcG9ydHNTZXNzaW9uU3RvcmFnZSA9IGlzU3RvcmFnZUVuYWJsZWQoJ3Nlc3Npb25TdG9yYWdlJyk7XHJcbmlmIChsb2NhbEluZm8uaXNJRTExICYmICF3aW5kb3cuaW5kZXhlZERCKVxyXG4gICAgLy8gSUUxMC0xMSBzdXBwb3J0IHBvc3RNZXNzYWdlIGJldHdlZW4gaWZyYW1lcyBidXQgbm90IGluUHJpdmF0ZSBtb2RlXHJcbiAgICBsb2NhbEluZm8uc3VwcG9ydHNQb3N0TWVzc2FnZSA9IGZhbHNlO1xyXG5sb2NhbEluZm8uaXNNQUMgPSBsb2NhbEluZm8uaXNNQUMgJiYgIWxvY2FsSW5mby5pc0lPUztcclxudmFyIG9zID0gbG9jYWxJbmZvLmlzV2luXHJcbiAgICA/ICd3aW5kb3dzJ1xyXG4gICAgOiBsb2NhbEluZm8uaXNXaW5kb3dzUGhvbmVcclxuICAgICAgICA/ICd3aW5waG9uZSdcclxuICAgICAgICA6IGxvY2FsSW5mby5pc0lPU1xyXG4gICAgICAgICAgICA/ICdpb3MtdicgKyBsb2NhbEluZm8uaW9zVmVyc2lvblxyXG4gICAgICAgICAgICA6IGxvY2FsSW5mby5pc01BQ1xyXG4gICAgICAgICAgICAgICAgPyAnbWFjJ1xyXG4gICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNBbmRyb2lkXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnYW5kcm9pZCdcclxuICAgICAgICAgICAgICAgICAgICA6ICcnO1xyXG5pZiAob3MpIG9zICs9ICcgJztcclxudmFyIGJyb3dzZXIgPSBsb2NhbEluZm8uaXNDaHJvbWVcclxuICAgID8gJ2Nocm9tZSdcclxuICAgIDogbG9jYWxJbmZvLmlzRkZcclxuICAgICAgICA/ICdmaXJlZm94J1xyXG4gICAgICAgIDogbG9jYWxJbmZvLmlzU2FmYXJpXHJcbiAgICAgICAgICAgID8gJ3NhZmFyaSdcclxuICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNFZGdlXHJcbiAgICAgICAgICAgICAgICA/ICdlZGdlJ1xyXG4gICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRTExXHJcbiAgICAgICAgICAgICAgICAgICAgPyAnaWUxMSdcclxuICAgICAgICAgICAgICAgICAgICA6IGxvY2FsSW5mby5pc0lFMTBcclxuICAgICAgICAgICAgICAgICAgICAgICAgPyAnaWUxMCdcclxuICAgICAgICAgICAgICAgICAgICAgICAgOiBsb2NhbEluZm8uaXNJRTlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gJ2llOSdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogbG9jYWxJbmZvLmlzSUU4XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyAnaWU4J1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogJyc7XHJcbmxvY2FsSW5mby5jdXJyZW50QnJvd3NlciA9IG9zICsgYnJvd3NlcjtcclxubGV0IGJhc2VEb21haW5zOiBzdHJpbmdbXXxzdHJpbmc7XHJcbmlmIChnaWd5YS5wYXJ0bmVyU2V0dGluZ3M/LmJhc2VEb21haW5zPy5sZW5ndGgpIHtcclxuICAgIGJhc2VEb21haW5zID0gZ2lneWEucGFydG5lclNldHRpbmdzLmJhc2VEb21haW5zIGFzIHN0cmluZ1tdfHN0cmluZztcclxufSBlbHNlIHtcclxuICAgIGlmICh3aW5kb3cuc2VsZiA9PT0gd2luZG93LnRvcCkge1xyXG4gICAgICAgIC8vIG9ubHkgaW4gdGhlIHRvcCBmcmFtZVxyXG4gICAgICAgIGdpZ3lhLmxvZ2dlci53YXJuKCdnaWd5YTogbWlzc2luZyBiYXNlIGRvbWFpbnMgZm9yIHNpdGUnKTtcclxuICAgIH1cclxuICAgIGJhc2VEb21haW5zID0gW2RvY3VtZW50LmxvY2F0aW9uLmhvc3RuYW1lXTtcclxufVxyXG5sb2NhbEluZm8uYmFzZURvbWFpbiA9IGdldEJhc2VEb21haW4oYmFzZURvbWFpbnMpO1xyXG4iLCJpbXBvcnQge1xyXG4gICAgSUxvZ2dlckNvbmZpZyxcclxuICAgIExvZ0xldmVsLFxyXG4gICAgQ2xpZW50TXV0ZUxldmVsLFxyXG4gICAgTG9nVGhlbWUsXHJcbiAgICBHcm91cEJlaGF2aW9yLFxyXG4gICAgSUxvZ2dlcixcclxuICAgIElMb2dHcm91cCxcclxuICAgIEdpZ0dsb2JhbCxcclxuICAgIElGb3JtYXR0ZWRMb2dBcmdzLFxyXG4gICAgSUdyb3VwQ2xvc2VyLFxyXG4gICAgSUxvZ0Z1bmMsXHJcbn0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvZ2dlci9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgZ2V0UmVxUGFyYW1WYWx1ZSwgZ2V0UGFyYW1WYWx1ZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9zdHJpbmdQYXJhbXMnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGdpZ0Vycm9yUmVwb3J0ID0gJ2dpZ0Vycm9yUmVwb3J0JztcclxuY29uc3QgZGVmYXVsdExvZ2dlckNvbmZpZzogSUxvZ2dlckNvbmZpZyA9IHtcclxuICAgIGxvZ0xldmVsOiBMb2dMZXZlbC5kaXNhYmxlZCxcclxuICAgIGNsaWVudE11dGVMZXZlbDogQ2xpZW50TXV0ZUxldmVsLm5vbmUsXHJcbiAgICBsb2dUaGVtZTogTG9nVGhlbWUuZGFyayxcclxufTtcclxuY29uc3QgdGhlbWVzOiB7IFtrZXk6IHN0cmluZ106IHN0cmluZ1tdIH0gPSB7XHJcbiAgICBbTG9nVGhlbWUubm9uZV06IFsnJ10sXHJcbiAgICBbTG9nVGhlbWUuZGFya106IFtcclxuICAgICAgICAnMzhmNjg5JyxcclxuICAgICAgICAnMDA5RkQ0JyxcclxuICAgICAgICAnYjM4MWIzJyxcclxuICAgICAgICAnNzFiNmVmJyxcclxuICAgICAgICAnNjRjMTYyJyxcclxuICAgICAgICAnOTc3YmQ4JyxcclxuICAgICAgICAnZDE2OGE0JyxcclxuICAgICAgICAnNGM3MWQyJyxcclxuICAgICAgICAnODRiNDY2JyxcclxuICAgICAgICAnN2Q2MzhhJyxcclxuICAgICAgICAnNzk5ZmI3JyxcclxuICAgICAgICAnOGZkZjk4JyxcclxuICAgICAgICAnZGM3NzY3JyxcclxuICAgICAgICAnMGE3MGY1JyxcclxuICAgICAgICAnMzhiMTU5JyxcclxuICAgICAgICAnYWY3MjFiJyxcclxuICAgICAgICAnYmZhZjZmJyxcclxuICAgIF0sXHJcbiAgICBbTG9nVGhlbWUubGlnaHRdOiBbXHJcbiAgICAgICAgJzQwODA2QScsXHJcbiAgICAgICAgJzAwMzYzNicsXHJcbiAgICAgICAgJzlCNTlCNicsXHJcbiAgICAgICAgJ0RCMEE1QicsXHJcbiAgICAgICAgJzc5MjhBMScsXHJcbiAgICAgICAgJzUyMjAzMicsXHJcbiAgICAgICAgJzAwMDBFMCcsXHJcbiAgICAgICAgJzAwMjAyQScsXHJcbiAgICAgICAgJzAwMDAzNicsXHJcbiAgICAgICAgJzAwNTU1NScsXHJcbiAgICAgICAgJzFENzgxRCcsXHJcbiAgICAgICAgJzRGNUE2NScsXHJcbiAgICAgICAgJzc2NUFCMCcsXHJcbiAgICAgICAgJzAwMDAwMCcsXHJcbiAgICAgICAgJzNDMTM2MicsXHJcbiAgICAgICAgJzAwMDA2MCcsXHJcbiAgICAgICAgJzU5MUQ3NycsXHJcbiAgICBdLFxyXG59O1xyXG5jb25zdCBzZWxmTG9nc0Nzczogc3RyaW5nID0gJ2NvbG9yOiAjYjBiMGIwYjA7JztcclxuY29uc3Qgbm9Dc3MgPSAnJztcclxuY29uc3Qgc2V2ZXJpdHlUaHJlc2hvbGQ6IExvZ0xldmVsID0gTG9nTGV2ZWwud2FybjtcclxuY29uc3QgZGVmYXVsdEdyb3VwQmVoYXZpb3I6IEdyb3VwQmVoYXZpb3IgPSBHcm91cEJlaGF2aW9yLmNvbGxhcHNlZDtcclxuY29uc3Qgbm9vcExvZ2dlckZuID0gKG1lc3NhZ2U6IGFueSwgLi4ub3B0aW9uYWxQYXJhbXM6IGFueVtdKSA9PiB7fTtcclxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIEJhc2VMb2dnZXIgaW1wbGVtZW50cyBJTG9nZ2VyIHtcclxuICAgIHByaXZhdGUgX2NvbmZpZzogSUxvZ2dlckNvbmZpZztcclxuICAgIHByaXZhdGUgX2dyb3Vwc1N0YWNrOiBJTG9nR3JvdXBbXSA9IFtdO1xyXG4gICAgcHJpdmF0ZSBfY3VyckNvbG9ySWR4OiBudW1iZXIgPSAwO1xyXG5cclxuICAgIHByaXZhdGUgcmVhZG9ubHkgX2NvbnNvbGU6IENvbnNvbGU7XHJcbiAgICBwdWJsaWMgcmVhZG9ubHkgY29uZmlnS2V5OiBzdHJpbmcgPSAnZ2lnX2xvZ2dlckNvbmZpZyc7XHJcblxyXG4gICAgcHJvdGVjdGVkIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZ2xvYmFsOiBHaWdHbG9iYWwpIHtcclxuICAgICAgICB0aGlzLl9jb25zb2xlID0gdGhpcy5fZ2xvYmFsLmNvbnNvbGU7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIHRoaXMub3ZlcnJpZGVDbGllbnRMb2dzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhYnN0cmFjdCByZXBvcnQobWVzc2FnZTogc3RyaW5nLCBkZXRhaWxzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgaW5jbHVkZVN0YWNrPzogYm9vbGVhbik7XHJcblxyXG4gICAgcHVibGljIGdldENvbmZpZygpOiBJTG9nZ2VyQ29uZmlnIHtcclxuICAgICAgICBpZiAoIXRoaXMuX2NvbmZpZykge1xyXG4gICAgICAgICAgICB0aGlzLl9jb25maWcgPVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkTG9nZ2VyQ29uZmlnRnJvbUhhc2goKSB8fCAvLyBpbm5lciBmcmFtZXMgcmVhZHMgY29uZmlnIGZyb20gaGFzaFxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWFkTG9nZ2VyQ29uZmlnRnJvbUNvb2tpZSgpIHx8IC8vIHRvcCBmcmFtZXMgcmVhZHMgY29uZmlnIGZyb20gY29va2llXHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0TG9nZ2VyQ29uZmlnO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdGhpcy5fY29uZmlnO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNFbmFibGVkKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbmZpZygpLmxvZ0xldmVsID4gTG9nTGV2ZWwuZGlzYWJsZWQ7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXQgbG9nTGV2ZWwoKTogTG9nTGV2ZWwge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmdldENvbmZpZygpLmxvZ0xldmVsO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZ2V0IHBhbGV0dGUoKTogc3RyaW5nW10ge1xyXG4gICAgICAgIHJldHVybiB0aGVtZXNbdGhpcy5nZXRDb25maWcoKS5sb2dUaGVtZV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXROZXh0Q29sb3IoKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAodGhpcy5nZXRDb25maWcoKS5sb2dUaGVtZSA9PT0gTG9nVGhlbWUubm9uZSkge1xyXG4gICAgICAgICAgICByZXR1cm4gJyc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICh0aGlzLl9jdXJyQ29sb3JJZHggPj0gdGhpcy5wYWxldHRlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jdXJyQ29sb3JJZHggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gYCMke3RoaXMucGFsZXR0ZVt0aGlzLl9jdXJyQ29sb3JJZHgrK119YDtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdldCBjdXJyZW50R3JvdXAoKTogSUxvZ0dyb3VwIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fZ3JvdXBzU3RhY2tbdGhpcy5fZ3JvdXBzU3RhY2subGVuZ3RoIC0gMV07XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkTG9nZ2VyQ29uZmlnRnJvbUhhc2goKTogSUxvZ2dlckNvbmZpZyB7XHJcbiAgICAgICAgbGV0IHJlczogSUxvZ2dlckNvbmZpZyA9IG51bGw7XHJcbiAgICAgICAgY29uc3QgbG9nZ2VyQ29uZmlnU3RyID0gZ2V0UmVxUGFyYW1WYWx1ZShsb2NhdGlvbi5oYXNoLCB0aGlzLmNvbmZpZ0tleSk7XHJcbiAgICAgICAgaWYgKGxvZ2dlckNvbmZpZ1N0cikge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcmVzID0gSlNPTi5wYXJzZShkZWNvZGVVUklDb21wb25lbnQobG9nZ2VyQ29uZmlnU3RyKSkgYXMgSUxvZ2dlckNvbmZpZztcclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihgW0dpZ3lhXTogZXhjZXB0aW9uIHdoaWxlIHRyeWluZyB0byBwYXJzZSBsb2dnZXIgY29uZmlnIGZyb20gaGFzaGAsIGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHJldHVybiByZXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSByZWFkTG9nZ2VyQ29uZmlnRnJvbUNvb2tpZSgpOiBJTG9nZ2VyQ29uZmlnIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBsZXQgcmVzOiBJTG9nZ2VyQ29uZmlnID0gbnVsbDtcclxuICAgICAgICAgICAgY29uc3QgY29va2llID0gZ2V0UGFyYW1WYWx1ZShkb2N1bWVudC5jb29raWUsIHRoaXMuY29uZmlnS2V5LCAnOycpO1xyXG4gICAgICAgICAgICBpZiAoY29va2llKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IEpTT04ucGFyc2UoY29va2llKSBhcyBJTG9nZ2VyQ29uZmlnO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtHaWd5YV06IGV4Y2VwdGlvbiB3aGlsZSB0cnlpbmcgdG8gcGFyc2UgbG9nZ2VyIGNvbmZpZyBmcm9tIGNvb2tpZWAsIGUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiByZXM7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAvLyBpT1MgMTAgd2VidmlldyB0aHJvd3MgaW4gc29tZSBzY2VuYXJpb3NcclxuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRMb2dnZXJDb25maWdDb29raWUobG9nZ2VyQ29uZmlnOiBJTG9nZ2VyQ29uZmlnKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gYCR7dGhpcy5jb25maWdLZXl9PSR7SlNPTi5zdHJpbmdpZnkobG9nZ2VyQ29uZmlnKX1gO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgb3ZlcnJpZGVDbGllbnRMb2dzKCkge1xyXG4gICAgICAgIGxldCBQcm94eSA9IHRoaXMuX2dsb2JhbFsnUHJveHknXTtcclxuXHJcbiAgICAgICAgaWYgKCFQcm94eSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzd2l0Y2ggKHRoaXMuZ2V0Q29uZmlnKCkuY2xpZW50TXV0ZUxldmVsKSB7XHJcbiAgICAgICAgICAgIC8vIGRvIG5vdGhpbmdcclxuICAgICAgICAgICAgY2FzZSBDbGllbnRNdXRlTGV2ZWwubm9uZTpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgLy8gcmVwbGFjZSBuYXRpdmUgY29uc29sZSB3aXRoIGEgZHVtbXlcclxuICAgICAgICAgICAgY2FzZSBDbGllbnRNdXRlTGV2ZWwuYWxsOlxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZ2xvYmFsLmNvbnNvbGUgPSBuZXcgUHJveHkodGhpcy5fZ2xvYmFsLmNvbnNvbGUsIHtcclxuICAgICAgICAgICAgICAgICAgICBnZXQ6ICgpID0+IG5vb3BMb2dnZXJGbixcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICAvLyBvdmVycmlkZSB0aGUgZ3JvdXAgYXBpIGFuZCBvdXRwdXQgYSBwcmVmaXhlZCBjbGllbnQgbG9nXHJcbiAgICAgICAgICAgIGNhc2UgQ2xpZW50TXV0ZUxldmVsLm5vcm1hbDpcclxuICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgIHRoaXMuX2dsb2JhbC5jb25zb2xlID0gbmV3IFByb3h5KHRoaXMuX2dsb2JhbC5jb25zb2xlLCB7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2V0OiAodGFyZ2V0OiBhbnksIHByb3BlcnR5OiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsnZ3JvdXAnLCAnZ3JvdXBDb2xsYXBzZWQnLCAnZ3JvdXBFbmQnXS5pbmRleE9mKHByb3BlcnR5KSAhPT0gLTFcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gKC4uLmFyZ3MpID0+IHRoaXMuX2NvbnNvbGUubG9nKGBjbGllbnQgaGFzIGNhbGxlZCBjb25zb2xlLiR7cHJvcGVydHl9YCwgLi4uYXJncylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDogdGFyZ2V0W3Byb3BlcnR5XTtcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRGb3JtYXR0ZWRMb2dBcmdzKHRleHQ6IHN0cmluZyA9ICcnLCBsb2dHcm91cDogSUxvZ0dyb3VwID0gdGhpcy5jdXJyZW50R3JvdXApOiBJRm9ybWF0dGVkTG9nQXJncyB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgdGV4dDogbG9nR3JvdXAgPyBgJWPilogke3RleHR9YCA6IGAlYyR7dGV4dH1gLFxyXG4gICAgICAgICAgICBjc3M6IGxvZ0dyb3VwID8gYGNvbG9yOiAke2xvZ0dyb3VwLmNvbG9yfTtgIDogJycsXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHJlc3RvcmVIYW5naW5nR3JvdXBzKGhhbmdpbmdHcm91cHM6IElMb2dHcm91cFtdKSB7XHJcbiAgICAgICAgLy8gcmVzdG9yZSBncm91cHMgc3RhY2sgYWZ0ZXIgYSBwYXJlbnQgZ3JvdXAgaGFzIGVuZGVkXHJcbiAgICAgICAgd2hpbGUgKGhhbmdpbmdHcm91cHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIC8vIHJlc3RvcmUgdGhlIGdyb3VwcyBzdGFja1xyXG4gICAgICAgICAgICBjb25zdCBncm91cCA9IGhhbmdpbmdHcm91cHMuc2hpZnQoKTtcclxuICAgICAgICAgICAgdGhpcy5fZ3JvdXBzU3RhY2sucHVzaChncm91cCk7XHJcblxyXG4gICAgICAgICAgICAvLyBpbmRpY2F0ZSBncm91cCBoYXMgYmVlbiByZXN0b3JlZFxyXG4gICAgICAgICAgICBjb25zdCBsb2dBcmdzID0gdGhpcy5nZXRGb3JtYXR0ZWRMb2dBcmdzKGAgJWNbUkVTVE9SRUQgLSAke2dyb3VwLmdyb3VwVGl0bGV9XWApO1xyXG4gICAgICAgICAgICB0aGlzLl9jb25zb2xlLmdyb3VwQ29sbGFwc2VkKGxvZ0FyZ3MudGV4dCwgbG9nQXJncy5jc3MsIHNlbGZMb2dzQ3NzKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBlbmRHcm91cChncm91cDogSUxvZ0dyb3VwKSB7XHJcbiAgICAgICAgY29uc3QgbG9nQXJncyA9IHRoaXMuZ2V0Rm9ybWF0dGVkTG9nQXJncyhgIFtFTkQgLSAke2dyb3VwLmdyb3VwVGl0bGV9XWAsIGdyb3VwKTtcclxuICAgICAgICB0aGlzLl9jb25zb2xlLmxvZyhsb2dBcmdzLnRleHQsIGxvZ0FyZ3MuY3NzKTtcclxuICAgICAgICB0aGlzLl9jb25zb2xlLmdyb3VwRW5kKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBsb2coc2V2ZXJpdHk6IExvZ0xldmVsKTogSUxvZ0Z1bmMge1xyXG4gICAgICAgIC8vIGxvZyBpZiBvbmUgb2YgdGhlIGZvbGxvd2luZ1xyXG4gICAgICAgIC8vIFsxXSBsb2dnaW5nIGlzIGVuYWJsZWQgYW5kIHRoZSBsb2cncyBzZXZlcml0eSBpcyBncmVhdGVyIG9yIGVxdWFsIHRvIHRoZSBjb25maWd1cmVkIGxvZ0xldmVsXHJcbiAgICAgICAgLy8gWzJdIHNldmVyaXR5IGlzIGdyZWF0ZXIgdGhhbiB0aGUgdGhyZXNob2xkIGJ1dCB0aGUgY29uZmlndXJlZCBsb2dMZXZlbCBpcyBub3QgZ3JlYXRlciB0aGFuIHRoZSB0aHJlc2hvbGRcclxuICAgICAgICBpZiAoXHJcbiAgICAgICAgICAgICh0aGlzLmlzRW5hYmxlZCAmJiBzZXZlcml0eSA+PSB0aGlzLmxvZ0xldmVsKSB8fCAvLyBsb2dcclxuICAgICAgICAgICAgKHNldmVyaXR5ID49IHNldmVyaXR5VGhyZXNob2xkICYmIHRoaXMubG9nTGV2ZWwgPCBzZXZlcml0eVRocmVzaG9sZClcclxuICAgICAgICApIHtcclxuICAgICAgICAgICAgLy8gbm9ybWFsaXplIGxvZyBsZXZlbFxyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW5hbExvZ0xldmVsID0gTG9nTGV2ZWxbc2V2ZXJpdHldO1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxpemVkTG9nTGV2ZWwgPVxyXG4gICAgICAgICAgICAgICAgc2V2ZXJpdHkgPT09IExvZ0xldmVsLmRlYnVnXHJcbiAgICAgICAgICAgICAgICAgICAgPyBMb2dMZXZlbFtMb2dMZXZlbC5pbmZvXSAvLyB1c2luZyBjb25zb2xlLmluZm8gZm9yIGRlYnVnIGxldmVsXHJcbiAgICAgICAgICAgICAgICAgICAgOiBvcmlnaW5hbExvZ0xldmVsO1xyXG5cclxuICAgICAgICAgICAgLy8gZ2V0IGZvcm1hdHRlZCBhcmdzIGFuZCByZXR1cm4gdGhlIGJvdW5kIGxvZyBmdW5jdGlvblxyXG4gICAgICAgICAgICBjb25zdCBsb2dBcmdzID0gdGhpcy5nZXRGb3JtYXR0ZWRMb2dBcmdzKGAgJWNbJHtvcmlnaW5hbExvZ0xldmVsfV1gKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NvbnNvbGVbbm9ybWFsaXplZExvZ0xldmVsXS5iaW5kKHRoaXMuX2NvbnNvbGUsIGxvZ0FyZ3MudGV4dCwgbG9nQXJncy5jc3MsIHNldmVyaXR5IDw9IExvZ0xldmVsLmluZm8gPyBzZWxmTG9nc0NzcyA6IG5vQ3NzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBub29wTG9nZ2VyRm47XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRKc29uRnJvbUVycm9yKGVycjogRXJyb3IpIHtcclxuICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICBuYW1lOiBlcnIubmFtZSxcclxuICAgICAgICAgICAgbWVzc2FnZTogZXJyLm1lc3NhZ2UsXHJcbiAgICAgICAgICAgIHN0YWNrOiBlcnIuc3RhY2ssXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGVycm9yUGFyc2VyKGRldGFpbHM6IHtba2V5OiBzdHJpbmddOiBhbnl9KSB7XHJcbiAgICAgICAgY29uc3QgZm9ybWF0dGVyID0gKGssIHYpID0+IHYgaW5zdGFuY2VvZiBFcnJvciA/IHRoaXMuZ2V0SnNvbkZyb21FcnJvcih2KSA6IHY7XHJcbiAgICAgICAgcmV0dXJuIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoZGV0YWlscywgZm9ybWF0dGVyKSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkZWJ1ZygpOiBJTG9nRnVuYyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMubG9nKExvZ0xldmVsLmRlYnVnKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGluZm8oKTogSUxvZ0Z1bmMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhMb2dMZXZlbC5pbmZvKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHdhcm4oKTogSUxvZ0Z1bmMge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmxvZyhMb2dMZXZlbC53YXJuKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGVycm9yKCk6IElMb2dGdW5jIHtcclxuICAgICAgICByZXR1cm4gKG1lc3NhZ2U6IGFueSwgZGV0YWlscz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiB2b2lkID0+IHtcclxuICAgICAgICAgICAgaWYgKGRldGFpbHMgJiYgdHlwZW9mIGRldGFpbHMgPT09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgICAgICAgICBkZXRhaWxzID0gdGhpcy5lcnJvclBhcnNlcihkZXRhaWxzKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2coTG9nTGV2ZWwuZXJyb3IpLmFwcGx5KHRoaXMsIFttZXNzYWdlXS5jb25jYXQoW2RldGFpbHNdKSk7XHJcbiAgICAgICAgICAgIHRoaXMucmVwb3J0KG1lc3NhZ2UsIGRldGFpbHMpO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdyb3VwKGdyb3VwVGl0bGU6IHN0cmluZywgY29sbGFwc2VkOiBib29sZWFuID0gZGVmYXVsdEdyb3VwQmVoYXZpb3IgPT09IEdyb3VwQmVoYXZpb3IuY29sbGFwc2VkKTogSUdyb3VwQ2xvc2VyIHtcclxuICAgICAgICBpZiAodGhpcy5pc0VuYWJsZWQpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSB0aGlzLmdldE5leHRDb2xvcigpO1xyXG4gICAgICAgICAgICBjb25zdCBncm91cExvZyA9ICguLi5hcmdzKSA9PiAoY29sbGFwc2VkID8gdGhpcy5fY29uc29sZS5ncm91cENvbGxhcHNlZCguLi5hcmdzKSA6IHRoaXMuX2NvbnNvbGUuZ3JvdXAoLi4uYXJncykpO1xyXG4gICAgICAgICAgICB0aGlzLl9ncm91cHNTdGFjay5wdXNoKHsgZ3JvdXBUaXRsZSwgY29sb3IgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxvZ0FyZ3MgPSB0aGlzLmdldEZvcm1hdHRlZExvZ0FyZ3MoYCBbU1RBUlQgLSAke2dyb3VwVGl0bGV9XWApO1xyXG4gICAgICAgICAgICBncm91cExvZyhsb2dBcmdzLnRleHQsIGxvZ0FyZ3MuY3NzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgZW5kOiAoKSA9PiB0aGlzLmdyb3VwRW5kKGdyb3VwVGl0bGUpLFxyXG4gICAgICAgICAgICBlbmRXaGVuOiAoZG9uZTogUHJvbWlzZTxhbnk+IHwgKCgpID0+IHZvaWQgfCBQcm9taXNlPGFueT4pKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGRvbmUgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUgPSBkb25lKCkgYXMgUHJvbWlzZTxhbnk+IHwgdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkb25lICYmIGRvbmUudGhlbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGRvbmUudGhlbigoKSA9PiB0aGlzLmdyb3VwRW5kKGdyb3VwVGl0bGUpKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gc3luY1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ3JvdXBFbmQoZ3JvdXBUaXRsZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ3JvdXBFbmQoZ3JvdXBUaXRsZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNFbmFibGVkKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGhhbmdpbmdHcm91cHM6IElMb2dHcm91cFtdID0gW107XHJcbiAgICAgICAgICAgIGxldCBjdXJyR3JvdXAgPSB0aGlzLl9ncm91cHNTdGFjay5wb3AoKTsgLy8gZ2V0IHRoZSBjdXJyZW50IGFjdGl2ZSBncm91cFxyXG5cclxuICAgICAgICAgICAgLy8gd2hpbGUgdGhlIGN1cnJlbnQgZ3JvdXAgaXMgbm90IHRoZSBzYW1lIGFzIHRoZSBvbmUgdGhhdCB3ZSB3YW50IHRvIGVuZCBhbmQgd2UgaGF2ZSBvdGhlciBncm91cHMgaW4gdGhlIHN0YWNrXHJcbiAgICAgICAgICAgIHdoaWxlIChjdXJyR3JvdXAuZ3JvdXBUaXRsZSAhPT0gZ3JvdXBUaXRsZSAmJiB0aGlzLl9ncm91cHNTdGFjay5sZW5ndGgpIHtcclxuICAgICAgICAgICAgICAgIGhhbmdpbmdHcm91cHMudW5zaGlmdChjdXJyR3JvdXApOyAvLyBbMV0gcHVzaCBpdCB0aGUgY3VycmVudCBncm91cCBpbnRvIHRoZSB0ZW1wICdoYW5naW5nIGdyb3Vwcycgc3RhY2tcclxuICAgICAgICAgICAgICAgIGN1cnJHcm91cCA9IHRoaXMuX2dyb3Vwc1N0YWNrLnBvcCgpOyAvLyBbMl0gZ2V0IHRoZSBuZXh0IGdyb3VwIGluIHN0YWNrXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9jb25zb2xlLmdyb3VwRW5kKCk7IC8vIFszXSBncm91cEVuZCBmb3IgZWFjaCBncm91cCB0aGF0IGlzIG5vdCB0aGUgY3VycmVudCBncm91cFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyBlbmQgdGhlIGdyb3VwXHJcbiAgICAgICAgICAgIHRoaXMuZW5kR3JvdXAoY3Vyckdyb3VwKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHJlc3VtZSBjaGlsZCBncm91cHNcclxuICAgICAgICAgICAgaWYgKGhhbmdpbmdHcm91cHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc3RvcmVIYW5naW5nR3JvdXBzKGhhbmdpbmdHcm91cHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBlbmFibGUobG9nTGV2ZWwgPSBMb2dMZXZlbC5pbmZvLCBjbGllbnRNdXRlTGV2ZWwgPSBDbGllbnRNdXRlTGV2ZWwubm9ybWFsLCBsb2dUaGVtZSA9IExvZ1RoZW1lLmRhcmspIHtcclxuICAgICAgICB0aGlzLnNldExvZ2dlckNvbmZpZ0Nvb2tpZSh7IGxvZ0xldmVsLCBjbGllbnRNdXRlTGV2ZWwsIGxvZ1RoZW1lIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBkaXNhYmxlKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0TG9nZ2VyQ29uZmlnQ29va2llKHtcclxuICAgICAgICAgICAgbG9nTGV2ZWw6IExvZ0xldmVsLmRpc2FibGVkLFxyXG4gICAgICAgICAgICBjbGllbnRNdXRlTGV2ZWw6IGRlZmF1bHRMb2dnZXJDb25maWcuY2xpZW50TXV0ZUxldmVsLFxyXG4gICAgICAgICAgICBsb2dUaGVtZTogZGVmYXVsdExvZ2dlckNvbmZpZy5sb2dUaGVtZSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBCYXNlTG9nZ2VyLCBnaWdFcnJvclJlcG9ydCB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2dnZXIvYmFzZUxvZ2dlcic7XHJcbmltcG9ydCB7IEdpZ0dsb2JhbCB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2dnZXIvaW50ZXJmYWNlcyc7XHJcbmltcG9ydCB7IGdldFJlcVBhcmFtVmFsdWUgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc3RyaW5nUGFyYW1zJztcclxuXHJcbmV4cG9ydCBjbGFzcyBJRnJhbWVMb2dnZXIgZXh0ZW5kcyBCYXNlTG9nZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKHByb3RlY3RlZCBfZ2xvYmFsOiBHaWdHbG9iYWwgPSB3aW5kb3cpIHtcclxuICAgICAgICBzdXBlcihfZ2xvYmFsKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVwb3J0KG1lc3NhZ2U6IHN0cmluZywgZGV0YWlsczogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgaW5jbHVkZVN0YWNrOiBib29sZWFuID0gdHJ1ZSkge1xyXG4gICAgICAgIC8vIHNlbmQgdGhlIHJlcG9ydCBmcm9tIHRoZSB0b3AgZnJhbWVcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAvLyBjYWxjdWxhdGUgdGhlIHRvcCBmcmFtZSBvcmlnaW5cclxuICAgICAgICAgICAgY29uc3QgYSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICAgICAgYS5ocmVmID0gZ2V0UmVxUGFyYW1WYWx1ZShsb2NhdGlvbi5oYXNoLCAnb3JpZ2luJykgfHwgZ2V0UmVxUGFyYW1WYWx1ZShsb2NhdGlvbi5oYXNoLCAnZCcpO1xyXG4gICAgICAgICAgICBjb25zdCB0YXJnZXRPcmlnaW4gPSBgJHthLnByb3RvY29sfS8vJHthLmhvc3RuYW1lfSR7YS5wb3J0ID8gYDoke2EucG9ydH1gIDogJyd9YDtcclxuXHJcbiAgICAgICAgICAgIC8vIHBvc3QgbWVzc2FnZVxyXG4gICAgICAgICAgICB0aGlzLl9nbG9iYWwudG9wLnBvc3RNZXNzYWdlKEpTT04uc3RyaW5naWZ5KHsgdHlwZTogZ2lnRXJyb3JSZXBvcnQsIG1lc3NhZ2UsIGRldGFpbHMsIGluY2x1ZGVTdGFjayB9KSwgdGFyZ2V0T3JpZ2luKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgR2lnR2xvYmFsIHtcclxuICAgIGNvbnNvbGU6IENvbnNvbGU7XHJcbiAgICBQcm94eT86IGFueTtcclxuICAgIGFkZEV2ZW50TGlzdGVuZXI/OiBhbnk7XHJcbiAgICB0b3A/OiBhbnk7XHJcbn1cclxuZXhwb3J0IGVudW0gTG9nTGV2ZWwge1xyXG4gICAgZGlzYWJsZWQgPSAwLFxyXG4gICAgZGVidWcsXHJcbiAgICBpbmZvLFxyXG4gICAgd2FybixcclxuICAgIGVycm9yLFxyXG59XHJcbmV4cG9ydCBjb25zdCBlbnVtIENsaWVudE11dGVMZXZlbCB7XHJcbiAgICBub25lID0gMCxcclxuICAgIG5vcm1hbCxcclxuICAgIGFsbCxcclxufVxyXG5leHBvcnQgY29uc3QgZW51bSBMb2dUaGVtZSB7XHJcbiAgICBub25lID0gMCxcclxuICAgIGRhcmssXHJcbiAgICBsaWdodCxcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElMb2dnZXJDb25maWcge1xyXG4gICAgbG9nTGV2ZWw6IExvZ0xldmVsO1xyXG4gICAgY2xpZW50TXV0ZUxldmVsOiBDbGllbnRNdXRlTGV2ZWw7XHJcbiAgICBsb2dUaGVtZTogTG9nVGhlbWU7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJTG9nR3JvdXAge1xyXG4gICAgZ3JvdXBUaXRsZTogc3RyaW5nO1xyXG4gICAgY29sb3I6IHN0cmluZztcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElGb3JtYXR0ZWRMb2dBcmdzIHtcclxuICAgIHRleHQ6IHN0cmluZztcclxuICAgIGNzczogc3RyaW5nO1xyXG59XHJcbmV4cG9ydCBjb25zdCBlbnVtIEdyb3VwQmVoYXZpb3Ige1xyXG4gICAgZXhwYW5kZWQgPSAwLFxyXG4gICAgY29sbGFwc2VkLFxyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSUdyb3VwQ2xvc2VyIHtcclxuICAgIGVuZCgpOiB2b2lkO1xyXG4gICAgZW5kV2hlbihkb25lV2hlbjogUHJvbWlzZTxhbnk+IHwgKCgpID0+IHZvaWQgfCBQcm9taXNlPGFueT4pKTogdm9pZDtcclxufVxyXG5leHBvcnQgdHlwZSBJTG9nRnVuYyA9IChtZXNzYWdlOiBzdHJpbmcsIGRldGFpbHM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSA9PiB2b2lkO1xyXG5leHBvcnQgaW50ZXJmYWNlIElMb2dnZXIge1xyXG4gICAgZGlzYWJsZSgpOiB2b2lkO1xyXG4gICAgZW5hYmxlKGxvZ0xldmVsPzogTG9nTGV2ZWwsIGNsaWVudE11dGVMZXZlbD86IENsaWVudE11dGVMZXZlbCwgbG9nVGhlbWU/OiBMb2dUaGVtZSk6IHZvaWQ7XHJcbiAgICBncm91cChncm91cFRpdGxlOiBzdHJpbmcsIGNvbGxhcHNlZD86IGJvb2xlYW4pOiBJR3JvdXBDbG9zZXI7XHJcbiAgICBncm91cEVuZChncm91cFRpdGxlOiBzdHJpbmcpOiB2b2lkO1xyXG4gICAgZGVidWcobWVzc2FnZTogc3RyaW5nLCBkZXRhaWxzPzogeyBba2V5OiBzdHJpbmddOiBhbnkgfSk6IHZvaWQ7XHJcbiAgICBpbmZvKG1lc3NhZ2U6IHN0cmluZywgZGV0YWlscz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiB2b2lkO1xyXG4gICAgd2FybihtZXNzYWdlOiBzdHJpbmcsIGRldGFpbHM/OiB7IFtrZXk6IHN0cmluZ106IGFueSB9KTogdm9pZDtcclxuICAgIGVycm9yKG1lc3NhZ2U6IHN0cmluZywgZGV0YWlscz86IHsgW2tleTogc3RyaW5nXTogYW55IH0pOiB2b2lkO1xyXG4gICAgcmVwb3J0KG1lc3NhZ2U6IHN0cmluZywgZGV0YWlscz86IHsgW2tleTogc3RyaW5nXTogYW55IH0sIGluY2x1ZGVTdGFjaz86IGJvb2xlYW4pOiB2b2lkO1xyXG4gICAgZ2V0Q29uZmlnKCk6IElMb2dnZXJDb25maWc7XHJcbiAgICBpc0VuYWJsZWQ6IGJvb2xlYW47XHJcbiAgICBjb25maWdLZXk6IHN0cmluZztcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gbG9nZ2VySnNvbnAoZW5kcG9pbnQ6IHN0cmluZywgcGFyYW1zOiBzdHJpbmcpIHtcclxuICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xyXG4gICAgc2NyaXB0LnNyYyA9IGAke2VuZHBvaW50fT8ke3BhcmFtc31gO1xyXG4gICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcclxuXHJcbiAgICBzY3JpcHQub25sb2FkID0gKCkgPT4ge1xyXG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF0ucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcclxuICAgIH07XHJcblxyXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXS5hcHBlbmRDaGlsZChzY3JpcHQpO1xyXG59XHJcbiIsImltcG9ydCB7IFBhcmVudExvZ2dlciB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2dnZXIvcGFyZW50TG9nZ2VyJztcclxuaW1wb3J0IHsgSUZyYW1lTG9nZ2VyIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvZ2dlci9pRnJhbWVMb2dnZXInO1xyXG5cclxuaWYoIWdpZ3lhLmxvZ2dlcikge1xyXG4gICAgT2JqZWN0LmFzc2lnbihnaWd5YSwge2xvZ2dlcjogIHdpbmRvdyA9PT0gd2luZG93LnRvcCA/IG5ldyBQYXJlbnRMb2dnZXIoKSA6IG5ldyBJRnJhbWVMb2dnZXIoKX0pO1xyXG59XHJcbiIsImltcG9ydCB7IEJhc2VMb2dnZXIsIGdpZ0Vycm9yUmVwb3J0IH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvZ2dlci9iYXNlTG9nZ2VyJztcclxuaW1wb3J0IHsgR2lnR2xvYmFsIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvZ2dlci9pbnRlcmZhY2VzJztcclxuaW1wb3J0IHsgbG9nZ2VySnNvbnAgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9nZ2VyL2xvZ2dlckpzb25wJztcclxuaW1wb3J0IHsgZ2V0R2lneWFTY3JpcHRFbGVtZW50IH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2dpZ3lhU2NyaXB0RWwnO1xyXG5pbXBvcnQgKiBhcyBVUkxVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVVJMJztcclxuaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XHJcblxyXG5leHBvcnQgY2xhc3MgUGFyZW50TG9nZ2VyIGV4dGVuZHMgQmFzZUxvZ2dlciB7XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9pc0Vycm9yUmVwb3J0ZXI6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIHJlYWRvbmx5IF9ndWlkOiBzdHJpbmc7XHJcblxyXG4gICAgY29uc3RydWN0b3IoXHJcbiAgICAgICAgcHJvdGVjdGVkIF9nbG9iYWw6IEdpZ0dsb2JhbCA9IHdpbmRvdyxcclxuICAgICAgICBwcml2YXRlIF9lcnJvclJlcG9ydENvbmZpZzogeyBlbmFibGVkOiBib29sZWFuOyBwcm9iYWJpbGl0eTogbnVtYmVyIH0gPSBnaWd5YS5lcnJvclJlcG9ydCxcclxuICAgICAgICBwcml2YXRlIF9jYW5hcnlDb25maWc6IHsgaXNBY3RpdmU6IGJvb2xlYW4gfSA9IGdpZ3lhLmNhbmFyeSxcclxuICAgICAgICBwcml2YXRlIF9yYW5kb20gPSAoKSA9PiBNYXRoLnJhbmRvbSgpICogMTAwLFxyXG4gICAgICAgIHByaXZhdGUgX2pzb25wID0gbG9nZ2VySnNvbnAsXHJcbiAgICApIHtcclxuICAgICAgICBzdXBlcihfZ2xvYmFsKTtcclxuXHJcbiAgICAgICAgY29uc3QgZXJyb3JSZXBvcnRFbmFibGVkID0gdGhpcy5fZXJyb3JSZXBvcnRDb25maWcgJiYgdGhpcy5fZXJyb3JSZXBvcnRDb25maWcuZW5hYmxlZDtcclxuICAgICAgICBjb25zdCBydW5uaW5nQXNDYW5hcnkgPSB0aGlzLl9jYW5hcnlDb25maWcgJiYgdGhpcy5fY2FuYXJ5Q29uZmlnLmlzQWN0aXZlO1xyXG4gICAgICAgIGNvbnN0IGVucm9sbGVkVG9SZXBvcnRFcnJvcnMgPSB0aGlzLmVucm9sbEVycm9yUmVwb3J0aW5nKCk7XHJcblxyXG4gICAgICAgIGlmIChlcnJvclJlcG9ydEVuYWJsZWQgJiYgKHJ1bm5pbmdBc0NhbmFyeSB8fCBlbnJvbGxlZFRvUmVwb3J0RXJyb3JzKSkge1xyXG4gICAgICAgICAgICB0aGlzLl9pc0Vycm9yUmVwb3J0ZXIgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLnNldHVwTWVzc2FnZUxpc3RlbmVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuX2d1aWQgPSB0aGlzLmdlbmVyYXRlR1VJRCgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgZW5yb2xsRXJyb3JSZXBvcnRpbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuICh0aGlzLl9lcnJvclJlcG9ydENvbmZpZyAmJiB0aGlzLl9lcnJvclJlcG9ydENvbmZpZy5wcm9iYWJpbGl0eSkgPj0gdGhpcy5fcmFuZG9tKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXR1cE1lc3NhZ2VMaXN0ZW5lcigpIHtcclxuICAgICAgICBjb25zdCBlcnJvclJlcG9ydE1lc3NhZ2VMaXN0ZW5lciA9IGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgZGMgPSBnaWd5YS5kYXRhQ2VudGVyO1xyXG4gICAgICAgICAgICBjb25zdCBnaWd5YURvbWFpbiA9IGdpZ3lhLmRlZmF1bHRBcGlEb21haW4ucmVwbGFjZSgvXFwuL2csICcuJyk7IC8vIHJlcGxhY2UgYWxsICcuJyB3aXRoICdcXC4nXHJcbiAgICAgICAgICAgIGNvbnN0IGFsbG93ZWRPcmlnaW5SZWdleCA9IG5ldyBSZWdFeHAoYGNkbnM/XFwuJHtkY31cXC4ke2dpZ3lhRG9tYWlufSRgKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghZXZlbnQub3JpZ2luLm1hdGNoKGFsbG93ZWRPcmlnaW5SZWdleCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LmRhdGEpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEudHlwZSA9PT0gZ2lnRXJyb3JSZXBvcnQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlcG9ydChkYXRhLm1lc3NhZ2UsIGRhdGEuZGV0YWlscywgZGF0YS5pbmNsdWRlU3RhY2spO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7fSAvLyB1bmV4cGVjdGVkIGV2ZW50LmRhdGFcclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICB0aGlzLl9nbG9iYWwuYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIGVycm9yUmVwb3J0TWVzc2FnZUxpc3RlbmVyLCBmYWxzZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBnZXRBcGlLZXkoKSB7XHJcbiAgICAgICAgbGV0IGFwaUtleSA9IGdpZ3lhWyd0aGlzU2NyaXB0J10gJiYgZ2lneWFbJ3RoaXNTY3JpcHQnXS5BUElLZXk7XHJcblxyXG4gICAgICAgIGlmICghYXBpS2V5KSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdEVsZW1lbnQgPSBnZXRHaWd5YVNjcmlwdEVsZW1lbnQoKTtcclxuICAgICAgICAgICAgY29uc3QgVVJMUGFyYW1zID0gVVJMVXRpbHMuZ2V0UGFyYW1zRnJvbVVSTChzY3JpcHRFbGVtZW50ICYmIHNjcmlwdEVsZW1lbnQuc3JjLCB0cnVlKSB8fCB7fTtcclxuICAgICAgICAgICAgYXBpS2V5ID0gVVJMUGFyYW1zWydhcGlrZXknXTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBhcGlLZXk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBjcmVhdGVSZXBvcnRQYXJhbXMobWVzc2FnZTogc3RyaW5nLCBkZXRhaWxzOiBzdHJpbmcgfCB7IFtrZXk6IHN0cmluZ106IGFueSB9ID0ge30sIGluY2x1ZGVTdGFjazogYm9vbGVhbiA9IHRydWUpIHtcclxuICAgICAgICBjb25zdCBwYXJhbXMgPSB7XHJcbiAgICAgICAgICAgIG1lc3NhZ2UsXHJcbiAgICAgICAgICAgIGFwaUtleTogdGhpcy5nZXRBcGlLZXkoKSxcclxuICAgICAgICAgICAgc3RhY2s6IGluY2x1ZGVTdGFjayA/IG5ldyBFcnJvcigpLnN0YWNrIDogJycsXHJcbiAgICAgICAgICAgIHBhZ2U6IGxvY2FsSW5mbyAmJiBsb2NhbEluZm8ucGFnZURvbWFpbixcclxuICAgICAgICAgICAgYnJvd3NlcjogbG9jYWxJbmZvICYmIGxvY2FsSW5mby5jdXJyZW50QnJvd3NlcixcclxuICAgICAgICAgICAgYnVpbGRWZXJzaW9uOiBnaWd5YS5idWlsZC52ZXJzaW9uLFxyXG4gICAgICAgICAgICBidWlsZE51bWJlcjogZ2lneWEuYnVpbGQubnVtYmVyLFxyXG4gICAgICAgICAgICBjYWxsYmFjazogJ2dpZ3lhLmNhbGxiYWNrJyxcclxuICAgICAgICAgICAgZm9ybWF0OiAnanNvbnAnLFxyXG4gICAgICAgICAgICBzZGs6ICd3ZWInLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2YgZGV0YWlscyA9PSAnc3RyaW5nJykge1xyXG4gICAgICAgICAgICBkZXRhaWxzID0ge21lc3NhZ2U6IGRldGFpbHN9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGV0YWlsc1snZ3VpZCddID0gdGhpcy5fZ3VpZDtcclxuICAgICAgICBwYXJhbXNbJ2RldGFpbHMnXSA9IEpTT04uc3RyaW5naWZ5KGRldGFpbHMpO1xyXG5cclxuICAgICAgICByZXR1cm4gT2JqZWN0LmtleXMocGFyYW1zKVxyXG4gICAgICAgICAgICAubWFwKGsgPT4gYCR7a309JHtlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tdKX1gKVxyXG4gICAgICAgICAgICAuam9pbignJicpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZXBvcnQobWVzc2FnZTogc3RyaW5nLCBkZXRhaWxzOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LCBpbmNsdWRlU3RhY2s6IGJvb2xlYW4gPSB0cnVlKSB7XHJcbiAgICAgICAgaWYgKCF0aGlzLl9pc0Vycm9yUmVwb3J0ZXIpIHtcclxuICAgICAgICAgICAgLy8gZG9uJ3QgY29udGludWUgaWYgd2UgZG9uJ3QgbmVlZCB0byByZXBvcnRcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgY29uc3QgcmVwb3J0UGFyYW1zID0gdGhpcy5jcmVhdGVSZXBvcnRQYXJhbXMobWVzc2FnZSwgZGV0YWlscywgaW5jbHVkZVN0YWNrKTtcclxuICAgICAgICAgICAgY29uc3Qgc2RrRXJyb3JSZXBvcnRFbmRwb2ludCA9IGAke2xvY2F0aW9uLnByb3RvY29sfS8vYWNjb3VudHMuJHtnaWd5YS5kYXRhQ2VudGVyfS4ke2dpZ3lhLmRlZmF1bHRBcGlEb21haW59L3Nkay5lcnJvclJlcG9ydGA7XHJcbiAgICAgICAgICAgIHRoaXMuX2pzb25wKHNka0Vycm9yUmVwb3J0RW5kcG9pbnQsIHJlcG9ydFBhcmFtcyk7XHJcbiAgICAgICAgfSBjYXRjaCAoZSkge31cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIGdlbmVyYXRlR1VJRCgpOiBzdHJpbmcge1xyXG4gICAgICAgIHRyeSB7IC8vIGh0dHBzOi8vc3RhY2tvdmVyZmxvdy5jb20vcXVlc3Rpb25zLzEwNTAzNC9jcmVhdGUtZ3VpZC11dWlkLWluLWphdmFzY3JpcHRcclxuICAgICAgICAgICAgcmV0dXJuICd4eHh4eHh4eC14eHh4LTR4eHgteXh4eC14eHh4eHh4eHh4eHgnLnJlcGxhY2UoL1t4eV0vZywgZnVuY3Rpb24oYykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgciA9IE1hdGgucmFuZG9tKCkgKiAxNiB8IDAsIHYgPSBjID09ICd4JyA/IHIgOiAociAmIDB4MyB8IDB4OCk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdi50b1N0cmluZygxNik7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuICcnO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcclxuaW1wb3J0ICogYXMgdmlld3BvcnRVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvdmlld3BvcnQnO1xyXG5pbXBvcnQgKiBhcyBmdW5jdGlvbnNVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvZnVuY3Rpb25zJztcclxuXHJcbmV4cG9ydCB2YXIgX3BvcHVwQ29udGFpbmVycyA9IFtdO1xyXG5leHBvcnQgdmFyIF9wc2V1ZG9Db250YWluZXJzID0gW107XHJcbmxldCBfbmV4dFpJbmRleCA9IDk5OTk5OTk5OTtcclxudmFyIGJhY2tMaXN0ZW5lciA9IG51bGw7XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXROZXh0WkluZGV4KCkge1xyXG4gICAgX25leHRaSW5kZXgrKztcclxuICAgIHJldHVybiBfbmV4dFpJbmRleDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0R2lneWFTY3JpcHRFbGVtZW50KGZpbGVOYW1lczogc3RyaW5nW10pOiBIVE1MU2NyaXB0RWxlbWVudCB7XHJcbiAgICB2YXIgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcclxuICAgIHZhciBzY3JpcHRFbGVtZW50OiBIVE1MU2NyaXB0RWxlbWVudDtcclxuICAgIHZhciBnaWd5YUNkblJlZ2V4ID0gL1xcL1xcL2NkbihzKT9cXC4ocnUxXFwuKT9naWd5YS5jb20vO1xyXG4gICAgZm9yICh2YXIgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICB2YXIgc2NyaXB0ID0gc2NyaXB0c1tpXTtcclxuICAgICAgICB2YXIgc3JjID0gc2NyaXB0LnNyYy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChzcmMgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGlmIChnaWd5YUNkblJlZ2V4LnRlc3Qoc3JjKSB8fCBzcmMuaW5kZXhPZignP2FwaWtleT0nKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICB2YXIgaXNGaWxlTmFtZUV4aXN0SW5TcmMgPSBmaWxlTmFtZXMubGVuZ3RoID09PSAwIHx8IGZpbGVOYW1lcy5zb21lKGZpbGVOYW1lID0+IHNyYy5pbmRleE9mKGZpbGVOYW1lKSA+IC0xKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0ZpbGVOYW1lRXhpc3RJblNyYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdEVsZW1lbnQgPSBzY3JpcHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2NyaXB0RWxlbWVudDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGlzcGF0Y2goZWw6IEhUTUxFbGVtZW50LCBldmVudE5hbWU6IHN0cmluZykge1xyXG4gICAgdmFyIGV2ZW50O1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgZXZlbnQgPSBuZXcgRXZlbnQoZXZlbnROYW1lKTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAvLyBJRTEwIGFuZCBiZWxvdyBzdXBwb3J0XHJcbiAgICAgICAgZXZlbnQgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcclxuICAgICAgICBldmVudC5pbml0Q3VzdG9tRXZlbnQoZXZlbnROYW1lLCB0cnVlLCB0cnVlLCB7fSk7XHJcbiAgICB9XHJcblxyXG4gICAgZWwuZGlzcGF0Y2hFdmVudChldmVudCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJ1dHRvblN1Ym1pdExpc3RlbmVyKGVsOiBIVE1MRWxlbWVudCwgaGFuZGxlcjogRnVuY3Rpb24sIGV2ZW50OiAnY2xpY2snIHwgJ3RvdWNoZW5kJyA9ICdjbGljaycsIGRlYnVnTmFtZT86IHN0cmluZykge1xyXG4gICAgLy8gSnVzdCBpbiBjYXNlIHRoZSBlbGVtZW50IGRvZXMgbm90IGV4aXN0LlxyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBlbC5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnYnV0dG9uJyk7XHJcbiAgICBpZiAoZWwuZ2V0QXR0cmlidXRlKCd0YWJpbmRleCcpICE9ICctMScpIHtcclxuICAgICAgICBlbC5zZXRBdHRyaWJ1dGUoJ3RhYmluZGV4JywgJzAnKTtcclxuICAgIH1cclxuICAgIGFkZEV2ZW50TGlzdGVuZXIoZWwsIGV2ZW50LCAoZTogTW91c2VFdmVudCkgPT4gaGFuZGxlcihlKSk7XHJcbiAgICBhZGRFdmVudExpc3RlbmVyKGVsLCAna2V5ZG93bicsIChlOiBLZXlib2FyZEV2ZW50KSA9PiB7XHJcbiAgICAgICAgaWYgKChlLndoaWNoIHx8IGUua2V5Q29kZSkgPT0gMTMpIHtcclxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICBoYW5kbGVyKGUpO1xyXG4gICAgICAgIH1cclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRFdmVudExpc3RlbmVyKGVsOiBhbnksIGV2ZW50TmFtZTogc3RyaW5nLCBoYW5kbGVyOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgaWYgKCFlbCB8fCAhaGFuZGxlcikgcmV0dXJuO1xyXG5cclxuICAgIGlmIChlbC5hZGRFdmVudExpc3RlbmVyKSB7XHJcbiAgICAgICAgZWwuYWRkRXZlbnRMaXN0ZW5lcihldmVudE5hbWUsIGhhbmRsZXIsIHRydWUpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBlbC5hdHRhY2hFdmVudCgnb24nICsgZXZlbnROYW1lLCBoYW5kbGVyKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXZlbnRMaXN0ZW5lcihlbDogYW55LCBldmVudE5hbWU6IHN0cmluZywgaGFuZGxlcjogRnVuY3Rpb24pOiB2b2lkIHtcclxuICAgIGlmICghaGFuZGxlcikgcmV0dXJuO1xyXG4gICAgaWYgKGVsLnJlbW92ZUV2ZW50TGlzdGVuZXIpIHtcclxuICAgICAgICBlbC5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50TmFtZSwgaGFuZGxlciwgdHJ1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGVsLmRldGFjaEV2ZW50KCdvbicgKyBldmVudE5hbWUsIGhhbmRsZXIpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlRGVmYXVsdEV2ZW50SGFuZGxpbmcoZXZlbnQpIHtcclxuICAgIGlmIChldmVudC5wcmV2ZW50RGVmYXVsdCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5ldmVudCkge1xyXG4gICAgICAgIHdpbmRvdy5ldmVudC5yZXR1cm5WYWx1ZSA9IGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGREaWFsb2dCYWNrTGlzdGVuZXIoaGFuZGxlcjogKGU6IEV2ZW50KSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICBfcmVtb3ZlRGlhbG9nQmFja0xpc3RlbmVyKCk7XHJcblxyXG4gICAgLy8gVGhpcyBzaG91bGQgZmlyZSB3aGVuIGJhY2sgaXMgY2xpY2tlZFxyXG4gICAgYmFja0xpc3RlbmVyID0gZnVuY3Rpb24oZSkge1xyXG4gICAgICAgIGlmIChlICYmIGUubmV3VVJMICYmIGUubmV3VVJMLmluZGV4T2YoJ3xnaWd5YU1vYmlsZURpYWxvZycpID09IC0xKSB7XHJcbiAgICAgICAgICAgIGhhbmRsZXIoZSk7XHJcbiAgICAgICAgICAgIF9yZW1vdmVEaWFsb2dCYWNrTGlzdGVuZXIoKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIC8vIGhhc2ggY291bGQgY2hhbmdlIHJpZ2h0IGFmdGVyIHRoZSBjYWxsIGlmIGl0IHdhcyBpbml0aWF0ZWQgZnJvbSBhIGxpbmsgdGhhdCBkaWRuJ3QgcmV0dXJuIGZhbHNlXHJcbiAgICB3aW5kb3cuc2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuICAgICAgICBpZiAod2luZG93LmxvY2F0aW9uLmhhc2guaW5kZXhPZignfGdpZ3lhTW9iaWxlRGlhbG9nJykgPT0gLTEpIHtcclxuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhhc2ggPSB3aW5kb3cubG9jYXRpb24uaGFzaCArICd8Z2lneWFNb2JpbGVEaWFsb2cnO1xyXG4gICAgICAgIH1cclxuICAgICAgICBhZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2hhc2hjaGFuZ2UnLCBiYWNrTGlzdGVuZXIpO1xyXG4gICAgfSwgNTApO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBfcmVtb3ZlRGlhbG9nQmFja0xpc3RlbmVyKCkge1xyXG4gICAgaWYgKCFiYWNrTGlzdGVuZXIpIHJldHVybjtcclxuICAgIHJlbW92ZUV2ZW50TGlzdGVuZXIod2luZG93LCAnaGFzaGNoYW5nZScsIGJhY2tMaXN0ZW5lcik7XHJcbiAgICBiYWNrTGlzdGVuZXIgPSBudWxsO1xyXG4gICAgLy9yZXN0b3JlIHByZXZpb3VzIGhhc2hcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gd2luZG93LmxvY2F0aW9uLmhhc2gucmVwbGFjZSgnfGdpZ3lhTW9iaWxlRGlhbG9nJywgJycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhcHBlbmRUb0JvZHkoZWw6IEhUTUxFbGVtZW50LCBkb2N1bWVudCA9IHdpbmRvdy5kb2N1bWVudCk6IHZvaWQge1xyXG4gICAgaWYgKCFkb2N1bWVudC5ib2R5KSByZXR1cm47XHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUgJiYgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUoZWwsIGRvY3VtZW50LmJvZHkuZmlyc3RDaGlsZCk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWwpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFbGVtZW50KGVsOiBIVE1MRWxlbWVudCk6IHZvaWQge1xyXG4gICAgaWYgKGVsICYmIGVsLnBhcmVudEVsZW1lbnQpIHtcclxuICAgICAgICBlbC5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGVsKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNDaGlsZE9mKGNoaWxkOiBOb2RlLCBwYXJlbnQ6IE5vZGUpIHtcclxuICAgIHZhciBkaXJlY3RQYXJlbnQgPSBjaGlsZC5wYXJlbnROb2RlO1xyXG5cclxuICAgIHdoaWxlIChkaXJlY3RQYXJlbnQpIHtcclxuICAgICAgICBpZiAocGFyZW50ID09IGRpcmVjdFBhcmVudCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpcmVjdFBhcmVudCA9IGRpcmVjdFBhcmVudC5wYXJlbnROb2RlO1xyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNWaXNpYmxlKGVsOiBIVE1MRWxlbWVudCk6IGJvb2xlYW4ge1xyXG4gICAgd2hpbGUgKGVsKSB7XHJcbiAgICAgICAgdmFyIGNvbXB1dGVkU3R5bGUgPSBnZXRDb21wdXRlZFN0eWxlKGVsKTtcclxuICAgICAgICBpZiAoY29tcHV0ZWRTdHlsZS5kaXNwbGF5ID09PSAnbm9uZScgfHwgY29tcHV0ZWRTdHlsZS52aXNpYmlsaXR5ID09PSAnaGlkZGVuJykge1xyXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIHJldHVybiB0cnVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZW50ZXJlZERpdklEKG5hbWU6IHN0cmluZykge1xyXG4gICAgcmV0dXJuICdnaWdfJyArIGxvY2FsSW5mby5pbml0VGltZS5nZXRUaW1lKCkudG9TdHJpbmcoKSArICdfJyArIG5hbWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnRXaXRoQXR0cmlidXRlcyhkb21FbGVtTmFtZTogc3RyaW5nLCBkb21FbGVtQXR0cnM/OiB7IFtrZXk6IHN0cmluZ106IHN0cmluZyB9KTogSFRNTEVsZW1lbnQge1xyXG4gICAgY29uc3QgbmV3RG9tRWxlbSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoZG9tRWxlbU5hbWUpO1xyXG5cclxuICAgIGlmIChkb21FbGVtQXR0cnMpIHtcclxuICAgICAgICBmb3IgKGxldCBlbGVtQXR0ciBpbiBkb21FbGVtQXR0cnMpIHtcclxuICAgICAgICAgICAgbmV3RG9tRWxlbVtlbGVtQXR0cl0gPSBkb21FbGVtQXR0cnNbZWxlbUF0dHJdO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gbmV3RG9tRWxlbTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlVG9wTGV2ZWxEaXYoaWQ/OiBzdHJpbmcpOiBIVE1MRGl2RWxlbWVudCB7XHJcbiAgICB2YXIgZWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuXHJcbiAgICBpZiAoZWwuc3R5bGUuekluZGV4ICE9IG51bGwpIHtcclxuICAgICAgICBlbC5zdHlsZS56SW5kZXggPSAnJyArIGdldE5leHRaSW5kZXgoKTtcclxuICAgIH1cclxuXHJcbiAgICBlbC5pbm5lckhUTUwgPSAnJztcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIGVsLmlkID0gaWQ7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGRvY3VtZW50LmJvZHkpIHtcclxuICAgICAgICBpZiAoZG9jdW1lbnQuYm9keS5pbnNlcnRCZWZvcmUgJiYgZG9jdW1lbnQuYm9keS5maXJzdENoaWxkKSB7XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuaW5zZXJ0QmVmb3JlKGVsLCBkb2N1bWVudC5ib2R5LmZpcnN0Q2hpbGQpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZCkge1xyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWw7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGhpZGVCeUlEKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNob3dCeUlEKGlkOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHZhciBlbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcclxuICAgIGlmIChlbCkge1xyXG4gICAgICAgIGVsLnN0eWxlLmRpc3BsYXkgPSBsb2NhbEluZm8uaXNJRTYgPyAoZWwudGFnTmFtZSA9PSAnVEQnID8gJ3RhYmxlLWNlbGwnIDogZWwudGFnTmFtZSA9PSAnVFInID8gJycgOiBlbC50YWdOYW1lID09ICdUQUJMRScgPyAnJyA6ICdibG9jaycpIDogJyc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNsZWFyQnlJRChpZDogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHZhciBjID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpO1xyXG4gICAgICAgIGlmIChjICE9IG51bGwpIHtcclxuICAgICAgICAgICAgYy5pbm5lckhUTUwgPSAnJztcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRIVE1MU2l6ZShodG1sOiBzdHJpbmcsIGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB7IHc6IG51bWJlcjsgaDogbnVtYmVyIH0ge1xyXG4gICAgdmFyIGRpdk1lYXN1cmUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIGRpdk1lYXN1cmUuc3R5bGUucG9zaXRpb24gPSAnYWJzb2x1dGUnO1xyXG4gICAgZGl2TWVhc3VyZS5zdHlsZS5sZWZ0ID0gJy0xMDAwcHgnO1xyXG4gICAgZGl2TWVhc3VyZS5pbm5lckhUTUwgPSBodG1sO1xyXG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKGRpdk1lYXN1cmUpO1xyXG4gICAgdmFyIHcgPSBkaXZNZWFzdXJlLm9mZnNldFdpZHRoO1xyXG4gICAgdmFyIGggPSBkaXZNZWFzdXJlLm9mZnNldEhlaWdodDtcclxuICAgIGRpdk1lYXN1cmUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChkaXZNZWFzdXJlKTtcclxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RWxlbWVudHNCeUNsYXNzKHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LCBjbGFzc05hbWU6IHN0cmluZywgaW5jbHVkZVBhcmVudD86IGJvb2xlYW4pOiBIVE1MRWxlbWVudFtdIHtcclxuICAgIGlmICghcGFyZW50RWxlbWVudCkge1xyXG4gICAgICAgIHJldHVybiBbXTtcclxuICAgIH1cclxuICAgIHZhciBhckVscyA9IFtdO1xyXG5cclxuICAgIGlmIChpbmNsdWRlUGFyZW50ICYmIGlzRWxlbWVudENsYXNzKHBhcmVudEVsZW1lbnQsIGNsYXNzTmFtZSkpIHtcclxuICAgICAgICBhckVscy5wdXNoKHBhcmVudEVsZW1lbnQpO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBlbHM6IE5vZGVMaXN0T2Y8SFRNTEVsZW1lbnQ+ID0gcGFyZW50RWxlbWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpIGFzIGFueTtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGlzRWxlbWVudENsYXNzKGVsc1tpXSwgY2xhc3NOYW1lKSkge1xyXG4gICAgICAgICAgICBhckVscy5wdXNoKGVsc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyRWxzIHx8IFtdO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50c0J5QXR0cmlidXRlKHBhcmVudEVsZW1lbnQ6IEhUTUxFbGVtZW50LCB0YWdOYW1lOiBzdHJpbmcsIGF0dHJpYnV0ZU5hbWU6IHN0cmluZywgYXR0cmlidXRlVmFsdWU6IHN0cmluZyk6IEhUTUxFbGVtZW50W10ge1xyXG4gICAgdmFyIGFyRWxzID0gW107XHJcbiAgICB2YXIgZWxzOiBOb2RlTGlzdE9mPEhUTUxFbGVtZW50PiA9IHBhcmVudEVsZW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUodGFnTmFtZSkgYXMgYW55O1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBlbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoZWxzW2ldLmdldEF0dHJpYnV0ZShhdHRyaWJ1dGVOYW1lKSA9PSBhdHRyaWJ1dGVWYWx1ZSkge1xyXG4gICAgICAgICAgICBhckVscy5wdXNoKGVsc1tpXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyRWxzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRFbGVtZW50UG9zaXRpb24oZWw6IEhUTUxFbGVtZW50KTogeyBsZWZ0OiBudW1iZXI7IHRvcDogbnVtYmVyOyByaWdodDogbnVtYmVyOyBib3R0b206IG51bWJlciB9IHtcclxuICAgIGlmICghZWwpIHtcclxuICAgICAgICByZXR1cm4geyBsZWZ0OiAwLCB0b3A6IDAsIGJvdHRvbTogMCwgcmlnaHQ6IDAgfTtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgcmVjdCA9IGVsLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG4gICAgdmFyIHNjcm9sbCA9IHZpZXdwb3J0VXRpbHMuZ2V0U2Nyb2xsKCk7XHJcbiAgICB2YXIgbGVmdCA9IHJlY3QubGVmdCArIHNjcm9sbC5sZWZ0O1xyXG4gICAgdmFyIHRvcCA9IHJlY3QudG9wICsgc2Nyb2xsLnRvcDtcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGxlZnQ6IGxlZnQsXHJcbiAgICAgICAgdG9wOiB0b3AsXHJcbiAgICAgICAgcmlnaHQ6IGxlZnQgKyByZWN0LndpZHRoLFxyXG4gICAgICAgIGJvdHRvbTogdG9wICsgcmVjdC5oZWlnaHQsXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRDbGFzc1RvRWxlbWVudChlbDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG4gICAgdmFyIGV4aXN0aW5nQ2xhc3NlcyA9IGVsLmNsYXNzTmFtZSA/IGdldENsYXNzTmFtZXMoZWwpIDogW107XHJcbiAgICB2YXIgZXhpc3RpbmdPcmlnaW5hbExlbmd0aCA9IGV4aXN0aW5nQ2xhc3Nlcy5sZW5ndGg7XHJcbiAgICB2YXIgbmV3Q2xhc3NlcyA9IGNsYXNzTmFtZS5zcGxpdCgnICcpO1xyXG5cclxuICAgIGZvciAodmFyIGogaW4gbmV3Q2xhc3Nlcykge1xyXG4gICAgICAgIHZhciBleGlzdHMgPSBmYWxzZTtcclxuICAgICAgICBpZiAoIW5ld0NsYXNzZXNbal0pIHtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBmb3IgKGNvbnN0IGkgaW4gZXhpc3RpbmdDbGFzc2VzKSB7XHJcbiAgICAgICAgICAgIGlmIChleGlzdGluZ0NsYXNzZXNbaV0gPT09IG5ld0NsYXNzZXNbal0pIHtcclxuICAgICAgICAgICAgICAgIGV4aXN0cyA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCFleGlzdHMpIHtcclxuICAgICAgICAgICAgZXhpc3RpbmdDbGFzc2VzLnB1c2gobmV3Q2xhc3Nlc1tqXSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChleGlzdGluZ0NsYXNzZXMubGVuZ3RoICE9PSBleGlzdGluZ09yaWdpbmFsTGVuZ3RoKSB7XHJcbiAgICAgICAgZWwuY2xhc3NOYW1lID0gZXhpc3RpbmdDbGFzc2VzLmpvaW4oJyAnKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ2xhc3NGcm9tRWxlbWVudChlbDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nLCBzdWJzdHJpbmc6IGJvb2xlYW4gPSBmYWxzZSk6IHZvaWQge1xyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciBhckNsYXNzID0gZ2V0Q2xhc3NOYW1lcyhlbCk7XHJcbiAgICBmb3IgKHZhciBpID0gYXJDbGFzcy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGlmIChhckNsYXNzW2ldID09PSBjbGFzc05hbWUgfHwgKHN1YnN0cmluZyAmJiBhckNsYXNzW2ldLmluZGV4T2YoY2xhc3NOYW1lKSAhPT0gLTEpKSB7XHJcbiAgICAgICAgICAgIGFyQ2xhc3Muc3BsaWNlKGksIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGVsLmNsYXNzTmFtZSA9IGFyQ2xhc3Muam9pbignICcpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDbGFzc05hbWVzKGVsOiBIVE1MRWxlbWVudCk6IEFycmF5PHN0cmluZz4ge1xyXG4gICAgdmFyIGNsYXNzZXM6IEFycmF5PHN0cmluZz4gPSBbXTtcclxuICAgIGlmICh0eXBlb2YgZWwuY2xhc3NOYW1lID09PSAnc3RyaW5nJykge1xyXG4gICAgICAgIGNsYXNzZXMgPSBlbC5jbGFzc05hbWUuc3BsaXQoJyAnKTtcclxuICAgIH1cclxuICAgIHJldHVybiBjbGFzc2VzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0VsZW1lbnRDbGFzcyhlbDogSFRNTEVsZW1lbnQsIGNsYXNzTmFtZTogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICBpZiAoIWVsKSByZXR1cm4gZmFsc2U7XHJcbiAgICBlbHNlIGlmICghY2xhc3NOYW1lKSByZXR1cm4gdHJ1ZTtcclxuICAgIGVsc2UgaWYgKCFlbC5jbGFzc05hbWUpIHJldHVybiBmYWxzZTtcclxuXHJcbiAgICB2YXIgZXhpc3RzID0gZmFsc2U7XHJcbiAgICB2YXIgYXJDbGFzcyA9IGdldENsYXNzTmFtZXMoZWwpO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhckNsYXNzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyQ2xhc3NbaV0gPT09IGNsYXNzTmFtZSkge1xyXG4gICAgICAgICAgICBleGlzdHMgPSB0cnVlO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZXhpc3RzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBjYW5jZWxFdmVudChldmVudDogYW55KTogdm9pZCB7XHJcbiAgICBpZiAoIWV2ZW50KSByZXR1cm47XHJcbiAgICBpZiAoJ2NhbmNlbGFibGUnIGluIGV2ZW50KVxyXG4gICAgICAgIC8vIEFsbCBicm93c2VycyBleGNlcHQgPElFOVxyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBlbHNlIGV2ZW50LnJldHVyblZhbHVlID0gZmFsc2U7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQodHlwZTogc3RyaW5nLCBuYW1lOiBzdHJpbmcpIHtcclxuICAgIHZhciBkaXZDb250YWluZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAgIG5hbWUgPSBuYW1lIHx8ICcnO1xyXG4gICAgZGl2Q29udGFpbmVyLmlubmVySFRNTCA9ICc8JyArIHR5cGUgKyAnIG5hbWU9XCInICsgbmFtZSArICdcIiBpZD1cIicgKyBuYW1lICsgJ1wiPjwvJyArIHR5cGUgKyAnPic7XHJcbiAgICByZXR1cm4gZGl2Q29udGFpbmVyLmZpcnN0Q2hpbGQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFNpemUoY29udGFpbmVyOiBIVE1MRWxlbWVudCwgdzogYW55LCBoOiBhbnksIGNlbnRlcj86IGJvb2xlYW4pIHtcclxuICAgIGlmIChjb250YWluZXIgPT0gbnVsbCB8fCBjb250YWluZXIuc3R5bGUgPT0gbnVsbCkge1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodykge1xyXG4gICAgICAgIHcgPSAnJyArIHc7XHJcbiAgICAgICAgdmFyIGlzV2lkdGhQcmVjZW50YWdlID0gdy5pbmRleE9mKCclJykgPiAwO1xyXG5cclxuICAgICAgICBpZiAoIWlzTmFOKHcpIHx8IGlzV2lkdGhQcmVjZW50YWdlKSB7XHJcbiAgICAgICAgICAgIHZhciB3aWR0aFZhbHVlOiBzdHJpbmcgPSAnJyArIChpc1dpZHRoUHJlY2VudGFnZSA/IHcgOiB3ICsgJ3B4Jyk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29udGFpbmVyLnN0eWxlLndpZHRoICE9IHdpZHRoVmFsdWUpIHtcclxuICAgICAgICAgICAgICAgIGNvbnRhaW5lci5zdHlsZS53aWR0aCA9IHdpZHRoVmFsdWU7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGgpIHtcclxuICAgICAgICBoID0gJycgKyBoO1xyXG4gICAgICAgIHZhciBpc0hlaWdodFByZWNlbnRhZ2UgPSBoLmluZGV4T2YoJyUnKSA+IDA7XHJcblxyXG4gICAgICAgIGlmICghaXNOYU4odykgfHwgaXNIZWlnaHRQcmVjZW50YWdlKSB7XHJcbiAgICAgICAgICAgIHZhciBoZWlnaHRWYWx1ZTogc3RyaW5nID0gJycgKyAoaXNIZWlnaHRQcmVjZW50YWdlID8gaCA6IGggKyAncHgnKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChjb250YWluZXIuc3R5bGUuaGVpZ2h0ICE9PSBoZWlnaHRWYWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLmhlaWdodCA9IGhlaWdodFZhbHVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGlmIChjZW50ZXIgJiYgdyAmJiBoKSB7XHJcbiAgICAgICAgaWYgKGNvbnRhaW5lci5zdHlsZS56SW5kZXggPT0gbnVsbCB8fCBjZW50ZXIpIHtcclxuICAgICAgICAgICAgY29udGFpbmVyLnN0eWxlLnpJbmRleCA9ICcnICsgZ2V0TmV4dFpJbmRleCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdmFyIHZwID0gdmlld3BvcnRVdGlscy5nZXRJbm5lclNpemUoKTtcclxuICAgICAgICB2YXIgc2NybCA9IHZpZXdwb3J0VXRpbHMuZ2V0U2Nyb2xsKCk7XHJcblxyXG4gICAgICAgIHZhciB2cHQgPSBzY3JsLnRvcDtcclxuICAgICAgICB2YXIgdnBsID0gc2NybC5sZWZ0O1xyXG5cclxuICAgICAgICBjb250YWluZXIuc3R5bGUudG9wID0gJycgKyBNYXRoLm1heCgwLCB2cHQgKyBNYXRoLmZsb29yKCh2cC5oIC0gaCkgLyAyKSkgKyAncHgnO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS5sZWZ0ID0gJycgKyBNYXRoLm1heCgwLCB2cGwgKyBNYXRoLmZsb29yKCh2cC53IC0gdykgLyAyKSkgKyAncHgnO1xyXG4gICAgICAgIGNvbnRhaW5lci5zdHlsZS52aXNpYmlsaXR5ID0gJyc7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUhpZGRlbklmcmFtZShzcmM6IHN0cmluZyk6IEhUTUxJRnJhbWVFbGVtZW50IHtcclxuICAgIHZhciBpZnIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpZnJhbWUnKTtcclxuICAgIGlmci5zcmMgPSBzcmM7XHJcbiAgICBpZnIuc3R5bGUud2lkdGggPSAnMzBweCc7XHJcbiAgICBpZnIuc3R5bGUuaGVpZ2h0ID0gJzEwcHgnO1xyXG4gICAgaWZyLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGlmci5zdHlsZS50b3AgPSAnLTEwMDBweCc7XHJcbiAgICBpZnIuc3R5bGUubGVmdCA9ICctMTAwMHB4JztcclxuXHJcbiAgICBpZiAoZG9jdW1lbnQuYm9keSkge1xyXG4gICAgICAgIGFwcGVuZFRvQm9keShpZnIpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBmdW5jdGlvbnNVdGlscy5pbnZva2VPblBhZ2VMb2FkKCgpID0+IHtcclxuICAgICAgICAgICAgYXBwZW5kVG9Cb2R5KGlmcik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGlmcjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYXR0cmlidXRlRW5jb2RlKHZhbHVlOiBzdHJpbmcpIHtcclxuICAgIHJldHVybiB2YWx1ZVxyXG4gICAgICAgIC5yZXBsYWNlKC88L2csICcmbHQ7JylcclxuICAgICAgICAucmVwbGFjZSgvPi9nLCAnJmd0OycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcXCIvZywgJyZxdW90OycpXHJcbiAgICAgICAgLnJlcGxhY2UoL1xcJy9nLCAnJiMzOTsnKTsgLy8gSUU4IGRvZXNuJ3Qgc3VwcG9ydCAmYXBvcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbWFuaXB1bGF0ZUF0dHJpYnV0ZXMoXHJcbiAgICBlbGVtZW50czogRWxlbWVudFtdLFxyXG4gICAgbWF0Y2hlcjogUmVnRXhwLFxyXG4gICAgcmVwbGFjZVByZWRpY2F0ZTogKG1hdGNoOiBzdHJpbmcpID0+IHZvaWQsXHJcbiAgICBjcml0ZXJpYTogKGF0dHI/OiBBdHRyKSA9PiBib29sZWFuID0gKCkgPT4gdHJ1ZSxcclxuKTogdm9pZCB7XHJcbiAgICBlbGVtZW50cy5mb3JFYWNoKGVsID0+IHtcclxuICAgICAgICBpZiAoIWVsLmF0dHJpYnV0ZXMpIHJldHVybjtcclxuICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChlbC5hdHRyaWJ1dGVzKS5mb3JFYWNoKGF0dHIgPT4ge1xyXG4gICAgICAgICAgICBpZiAoY3JpdGVyaWEoYXR0cikpIHtcclxuICAgICAgICAgICAgICAgIGF0dHIudmFsdWUgPSBhdHRyLnZhbHVlLnJlcGxhY2UobWF0Y2hlciwgcmVwbGFjZVByZWRpY2F0ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuICAgIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiB0ZXh0Tm9kZXNVbmRlcihlbDogSFRNTEVsZW1lbnQpIHtcclxuICAgIGxldCBuO1xyXG4gICAgY29uc3QgdGV4dE5vZGVzOiBUZXh0W10gPSBbXTtcclxuICAgIGNvbnN0IHRyZWVXYWxrZXIgPSBkb2N1bWVudC5jcmVhdGVUcmVlV2Fsa2VyKGVsLCBOb2RlRmlsdGVyLlNIT1dfVEVYVCwgbnVsbCwgZmFsc2UpO1xyXG4gICAgd2hpbGUgKChuID0gdHJlZVdhbGtlci5uZXh0Tm9kZSgpIGFzIFRleHQpKSB7XHJcbiAgICAgICAgdGV4dE5vZGVzLnB1c2gobik7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGV4dE5vZGVzO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0hUTUxCb29sZWFuQXR0cmlidXRlKGF0dHJOYW1lOiBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgIHJldHVybiBbJ2F1dG9jb21wbGV0ZScsICdhdXRvZm9jdXMnLCAnY2hlY2tlZCcsICdkaXNhYmxlZCcsICdoaWRkZW4nLCAncmVhZG9ubHknLCAncmVxdWlyZWQnLCAnc2VsZWN0ZWQnXS5pbmRleE9mKGF0dHJOYW1lKSA+IC0xO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gaXNCZWxvbmdUb0dpZ3lhRmllbGRzZXQoZWw6IEVsZW1lbnQpOiBib29sZWFuIHtcclxuXHJcbiAgICBpZiAoIWVsIHx8IGVsIGluc3RhbmNlb2YgSFRNTEZvcm1FbGVtZW50KSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBlbmQgb2YgcmVjdXJzaW9uIC0gZWxlbWVudCBpcyBub3QgYSBjaGlsZCBvZiBhIGZpZWxkc2V0XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGlzRWxlbWVudENsYXNzKGVsLnBhcmVudEVsZW1lbnQsICdnaWd5YS1maWVsZHNldCcpKXtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gaXNCZWxvbmdUb0dpZ3lhRmllbGRzZXQoZWwucGFyZW50RWxlbWVudCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKG9iajogYW55LCBpbmNsdWRlRnVuY3Rpb25zID0gZmFsc2UsIHByZXR0eVByaW50ID0gZmFsc2UsIGwgPSAwLCBtYXhMZXZlbCA9IDIwKTogc3RyaW5nIHtcclxuICAgIGlmICghbG9jYWxJbmZvLmlzSUU4KSB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvd1snSlNPTiddLnN0cmluZ2lmeShvYmopO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBpZiAoIWwpIGwgPSAwO1xyXG5cclxuICAgICAgICBpZiAobCA+IG1heExldmVsKSByZXR1cm4gJ1tUb28gZGVlcF0nO1xyXG5cclxuICAgICAgICB2YXIgcHJlZml4ID0gJyc7XHJcbiAgICAgICAgdmFyIG5ld2xpbmUgPSAnJztcclxuICAgICAgICB2YXIgdGFiID0gJyc7XHJcbiAgICAgICAgaWYgKHByZXR0eVByaW50KSB7XHJcbiAgICAgICAgICAgIHRhYiA9ICdcXHQnO1xyXG4gICAgICAgICAgICBuZXdsaW5lID0gJ1xcbic7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbCArIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgcHJlZml4ICs9IHRhYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICB2YXIgdCA9IHR5cGVvZiBvYmo7XHJcbiAgICAgICAgaWYgKHQgPT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICByZXR1cm4gdC50b1N0cmluZygpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodCAhPSAnb2JqZWN0JyB8fCBvYmogPT09IG51bGwpIHtcclxuICAgICAgICAgICAgLy8gc2ltcGxlIGRhdGEgdHlwZVxyXG5cclxuICAgICAgICAgICAgaWYgKHQgPT0gJ3N0cmluZycpIG9iaiA9ICdcIicgKyBvYmoucmVwbGFjZSgvKFxcXCJ8XFxcXCkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL1xcclxcbnxcXHJ8XFxuL2csICdcXFxcbicpICsgJ1wiJztcclxuICAgICAgICAgICAgcmV0dXJuIFN0cmluZyhvYmopO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHZhciBuLFxyXG4gICAgICAgICAgICAgICAgdixcclxuICAgICAgICAgICAgICAgIGpzb24gPSBbXSxcclxuICAgICAgICAgICAgICAgIGFyciA9IG9iaiAmJiBvYmouY29uc3RydWN0b3IgPT0gQXJyYXk7XHJcbiAgICAgICAgICAgIGlmIChhcnIpIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdiA9IG9ialtpXTtcclxuICAgICAgICAgICAgICAgICAgICB0ID0gdHlwZW9mIHY7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHYgPT0gbnVsbCB8fCB0ID09ICd1bmRlZmluZWQnKSB2ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnc3RyaW5nJykgdiA9ICdcIicgKyB2LnJlcGxhY2UoLyhcXFwifFxcXFwpL2csICdcXFxcJDEnKS5yZXBsYWNlKC9cXHJcXG58XFxyfFxcbi9nLCAnXFxcXG4nKSArICdcIic7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlRnVuY3Rpb25zKSB2ID0gJ0Z1bmN0aW9uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB2ID0gJyc7XHJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICh2LnBhcmVudE5vZGUgJiYgdi5pbm5lckhUTUwpIHYgPSAnSFRNTEVsZW1lbnQnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHYuY29uc3RydWN0b3IgPT0gRGF0ZSkgdiA9ICcnO1xyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHQgPT0gJ29iamVjdCcgJiYgdiAhPT0gbnVsbCkgdiA9IHNlcmlhbGl6ZSh2LCBpbmNsdWRlRnVuY3Rpb25zLCBwcmV0dHlQcmludCwgbCArIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBpZiAoU3RyaW5nKHYpICE9ICcnKSBqc29uLnB1c2gocHJlZml4ICsgdGFiICsgU3RyaW5nKHYpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGZvciAobiBpbiBvYmopIHtcclxuICAgICAgICAgICAgICAgICAgICB2ID0gb2JqW25dO1xyXG4gICAgICAgICAgICAgICAgICAgIHQgPSB0eXBlb2YgdjtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodiA9PSBudWxsIHx8IHQgPT0gJ3VuZGVmaW5lZCcpIHYgPSBTdHJpbmcodik7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnc3RyaW5nJykgdiA9ICdcIicgKyB2LnJlcGxhY2UoLyhcXFwifFxcXFwpL2csICdcXFxcJDEnKS5yZXBsYWNlKC9cXHJcXG58XFxyfFxcbi9nLCAnXFxcXG4nKSArICdcIic7XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodCA9PSAnZnVuY3Rpb24nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpbmNsdWRlRnVuY3Rpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ID0gJ0Z1bmN0aW9uJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodi5wYXJlbnROb2RlICYmIHYuaW5uZXJIVE1MKSB2ID0gJ0hUTUxFbGVtZW50JztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh2LmNvbnN0cnVjdG9yID09IERhdGUpIHYgPSAnJztcclxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmICh0ID09ICdvYmplY3QnICYmIHYgIT09IG51bGwpIHYgPSBuZXdsaW5lICsgc2VyaWFsaXplKHYsIGluY2x1ZGVGdW5jdGlvbnMsIHByZXR0eVByaW50LCBsICsgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChTdHJpbmcodikgIT0gJycpIGpzb24ucHVzaChwcmVmaXggKyB0YWIgKyAnXCInICsgbi5yZXBsYWNlKC8oXFxcInxcXFxcKS9nLCAnXFxcXCQxJykucmVwbGFjZSgvXFxyXFxufFxccnxcXG4vZywgJ1xcXFxuJykgKyAnXCI6JyArIFN0cmluZyh2KSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIG5ld2xpbmUgKyBwcmVmaXggKyAoYXJyID8gJ1snIDogJ3snKSArIG5ld2xpbmUgKyBqc29uLmpvaW4oJywnICsgbmV3bGluZSkgKyBuZXdsaW5lICsgcHJlZml4ICsgKGFyciA/ICddJyA6ICd9Jyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBkZXNlcmlhbGl6ZTxUPihqc29uOiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IFQsIHNjb3BlPzogYW55KTogVCB7XHJcbiAgICAvLyBSZXR1cm4gZGVmYXVsdCB2YWx1ZSBpZiBpcyBlbXB0eSBzdHJpbmcgKG9yIHNpbWlsYXIpLlxyXG4gICAgaWYgKCFqc29uIHx8ICFqc29uLnJlcGxhY2UoL15cXHMrfFxccyskL2csICcnKSkge1xyXG4gICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUgfHwgKHt9IGFzIFQpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIEF0dGVtcHQgdG8gcGFyc2UuIE9uIGVycm9yLCB3YXJuIGluIGNvbnNvbGUgYW5kIHJldHVybiBkZWZhdWx0IHZhbHVlLlxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBrZXlzID0gW107XHJcbiAgICAgICAgY29uc3QgdmFsdWVzID0gW107XHJcbiAgICAgICAgaWYgKHNjb3BlKSB7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IGluIHNjb3BlKSB7XHJcbiAgICAgICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcclxuICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKHNjb3BlW2tleV0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBmbjogRnVuY3Rpb24gPSBldmFsKGAoZnVuY3Rpb24oJHtrZXlzLmpvaW4oJywnKX0pIHsgcmV0dXJuICR7anNvbi50cmltKCl9OyB9KWApO1xyXG4gICAgICAgIHJldHVybiBmbi5hcHBseSh1bmRlZmluZWQsIHZhbHVlcyk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKCdFcnJvciBkZXNlcmlhbGl6aW5nIEphdmFTY3JpcHQnLCBlKTtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlIHx8ICh7fSBhcyBUKTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcGFyc2U8VD4oanNvbjogc3RyaW5nLCBkZWZhdWx0VmFsdWU/OiBUKTogVCB7XHJcbiAgICBpZiAobG9jYWxJbmZvLmlzSUU4KSB7XHJcbiAgICAgICAgcmV0dXJuIGRlc2VyaWFsaXplPFQ+KGpzb24sIGRlZmF1bHRWYWx1ZSk7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIHJldHVybiB3aW5kb3dbJ0pTT04nXS5wYXJzZShqc29uKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWUgfHwgKHt9IGFzIFQpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBrZXlWYWx1ZVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9rZXlWYWx1ZSc7XHJcbmltcG9ydCAqIGFzIG9iamVjdFV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9vYmplY3QnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFVSTEVuY29kZSh2YWx1ZTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQodmFsdWUpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBVUkxEZWNvZGUodmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICByZXR1cm4gZGVjb2RlVVJJQ29tcG9uZW50KHZhbHVlLnJlcGxhY2UoL1xcKy9nLCAnICcpKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gVVJMRGVjb2RlUmVjdXJzaXZlKHZhbHVlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbGV0IHByZXZEZWNvZGluZ1JlcyA9ICcnO1xyXG4gICAgbGV0IGN1cnJEZWNvZGluZ1JlcyA9IHZhbHVlO1xyXG5cclxuICAgIC8vIGtlZXAgZGVjb2RpbmcgdW50aWwgd2UgY2FuJ3QgZGVjb2RlIGFueW1vcmVcclxuICAgIHdoaWxlIChjdXJyRGVjb2RpbmdSZXMgIT0gcHJldkRlY29kaW5nUmVzKSB7XHJcbiAgICAgICAgLy8gc3RvcmUgdGhlIGxhc3QgZGVjb2RpbmcgcmVzdWx0XHJcbiAgICAgICAgcHJldkRlY29kaW5nUmVzID0gY3VyckRlY29kaW5nUmVzO1xyXG5cclxuICAgICAgICAvLyBkZWNvZGUgdGhlIHN0cmluZyBvbmNlIGFnYWluXHJcbiAgICAgICAgY3VyckRlY29kaW5nUmVzID0gVVJMRGVjb2RlKHByZXZEZWNvZGluZ1Jlcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGN1cnJEZWNvZGluZ1JlcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UGFyYW1zRnJvbVVSTCh1cmw6IHN0cmluZywga2V5c1RvTG93ZXI/OiBib29sZWFuKTogT2JqZWN0IHtcclxuICAgIGlmICghdXJsIHx8IHVybC5pbmRleE9mKCc/JykgPT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIHt9O1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGtleVZhbHVlVXRpbHMuZGVzZXJpYWxpemUodXJsLnNwbGl0KCcjJylbMF0uc3BsaXQoJz8nKVsxXSwgJyYnLCBrZXlzVG9Mb3dlcik7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFBhcmFtVmFsdWVGcm9tVVJMKHBhcmFtOiBzdHJpbmcsIHVybDogc3RyaW5nLCBkZWZhdWx0VmFsdWU6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICBpZiAobnVsbCA9PSB1cmwgfHwgJycgPT0gdXJsKSB7XHJcbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBpcW0gPSB1cmwuaW5kZXhPZignPycpO1xyXG4gICAgaWYgKGlxbSA9PT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHFzID0gJyYnICsgdXJsLnN1YnN0cihpcW0gKyAxKTtcclxuXHJcbiAgICBsZXQgaWR4ID0gcXMudG9Mb3dlckNhc2UoKS5pbmRleE9mKCcmJyArIHBhcmFtLnRvTG93ZXJDYXNlKCkgKyAnPScpO1xyXG4gICAgaWYgKGlkeCA9PT0gLTEpIHtcclxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHZhbEFuZE1vcmUgPSBxcy5zdWJzdHIoaWR4ICsgKDEgKyBwYXJhbS5sZW5ndGggKyAxKSkgKyAnJic7XHJcbiAgICBpZHggPSB2YWxBbmRNb3JlLmluZGV4T2YoJyYnKTtcclxuXHJcbiAgICByZXR1cm4gdmFsQW5kTW9yZS5zdWJzdHIoMCwgaWR4KTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gYWRkUGFyYW1zVG9VUkwodXJsOiBzdHJpbmcsIG9QYXJhbXM6IE9iamVjdCk6IHN0cmluZyB7XHJcbiAgICBjb25zdCBwYXJhbXMgPSBnZXRQYXJhbXNGcm9tVVJMKHVybCk7XHJcbiAgICBvYmplY3RVdGlscy5hZGQocGFyYW1zLCBvUGFyYW1zKTtcclxuICAgIGNvbnN0IHVybEhhc2hTcGxpdCA9IHVybC5zcGxpdCgnIycpO1xyXG4gICAgbGV0IGZpbmFsVXJsID0gdXJsSGFzaFNwbGl0WzBdLnNwbGl0KCc/JylbMF0gKyAnPycgKyBrZXlWYWx1ZVV0aWxzLnNlcmlhbGl6ZShwYXJhbXMsICcmJyk7XHJcbiAgICBpZiAodXJsSGFzaFNwbGl0Lmxlbmd0aCA+IDEpIHtcclxuICAgICAgICBmaW5hbFVybCArPSAnIycgKyB1cmxIYXNoU3BsaXRbMV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gZmluYWxVcmw7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgc3RyaW5nVXRpbHNVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc3RyaW5nVXRpbHMnO1xyXG5cclxuZXhwb3J0IGNsYXNzIFVyaSB7XHJcbiAgICBwcml2YXRlIF9hbmNob3I6IEhUTUxBbmNob3JFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKHVybDogc3RyaW5nLCBpc0Fic29sdXRlID0gdHJ1ZSkge1xyXG4gICAgICAgIGNvbnN0IHByb3RvY29sID0gZG9jdW1lbnQubG9jYXRpb24ucHJvdG9jb2wgPT0gJ2h0dHA6JyA/ICdodHRwJyA6ICdodHRwcyc7XHJcbiAgICAgICAgaWYgKGlzQWJzb2x1dGUgJiYgdXJsLmluZGV4T2YoJzovLycpID09PSAtMSAmJiB1cmwuY2hhckF0KDApICE9PSAnLycpIHVybCA9IGAke3Byb3RvY29sfTovLyR7dXJsfWA7XHJcbiAgICAgICAgdGhpcy5fYW5jaG9yLmhyZWYgPSB1cmw7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldCBkb21haW4oKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5ob3N0bmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IHBhdGgoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5wYXRobmFtZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0IGhyZWYoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5ocmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXQgc2VhcmNoKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLl9hbmNob3Iuc2VhcmNoLnNsaWNlKDEpO1xyXG4gICAgfSAvLyBkcm9wcGluZyAnPydcclxuICAgIHB1YmxpYyBnZXQgaGFzaCgpIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5fYW5jaG9yLmhhc2guc2xpY2UoMSk7XHJcbiAgICB9IC8vIGRyb3BwaW5nICcjJ1xyXG4gICAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2FuY2hvci5ocmVmO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBhZGRUb1NlYXJjaChwYXJhbXM6IE9iamVjdCkge1xyXG4gICAgICAgIGZvciAodmFyIG5hbWUgaW4gcGFyYW1zKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZhbCA9IHBhcmFtc1tuYW1lXTtcclxuICAgICAgICAgICAgaWYgKCh0eXBlb2YgdmFsID09ICdib29sZWFuJyB8fCB0eXBlb2YgdmFsID09ICdudW1iZXInIHx8IHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpICYmIG5hbWUgIT0gJ2V2ZW50TmFtZScpIHtcclxuICAgICAgICAgICAgICAgIGxldCBhZGRpdGlvbiA9IHRoaXMuX2FuY2hvci5zZWFyY2ggPyAnJicgOiAnJztcclxuICAgICAgICAgICAgICAgIHRoaXMuX2FuY2hvci5zZWFyY2ggKz0gYCR7YWRkaXRpb259JHtuYW1lfT0ke2VuY29kZVVSSUNvbXBvbmVudChwYXJhbXNbbmFtZV0pfWA7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGFzeW5jIGZldGNoPFQ+KHJldHJpZXMgPSAwKTogUHJvbWlzZTxUPiB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5mZXRjaCA/IGF3YWl0IHRoaXMuYnJvd3NlckZldGNoPFQ+KCkgOiBhd2FpdCB0aGlzLnhocjxUPigpO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgICAgICAgaWYgKHJldHJpZXMgPD0gMClcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmV0Y2ggZmFpbGVkOiAke2V9YCk7XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuZGVsYXkoMSk7XHJcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCB0aGlzLmZldGNoKHJldHJpZXMgLSAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzQmFzZU9mKHVybDogc3RyaW5nKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIFVyaS5wYXJzZSh1cmwpLmlzSW4odGhpcyk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzSW4oYmFzZTogc3RyaW5nKTogYm9vbGVhbjtcclxuICAgIHB1YmxpYyBpc0luKGJhc2U6IFVyaSk6IGJvb2xlYW47XHJcbiAgICBwdWJsaWMgaXNJbihiYXNlOiBVcmkgfCBzdHJpbmcpOiBib29sZWFuIHtcclxuICAgICAgICBpZiAodHlwZW9mIGJhc2UgPT09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgICAgIGJhc2UgPSBVcmkucGFyc2UoYmFzZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICAodGhpcy5kb21haW4gPT0gYmFzZS5kb21haW4gfHwgLy8gcGFnZSBpcyB0aGUgYmFzZSBkb21haW5cclxuICAgICAgICAgICAgICAgIHRoaXMuaXNTdWJEb21haW5PZihiYXNlKSkgJiYgLy8gb3Igc3ViLWRvbWFpbiBvZiBpdFxyXG4gICAgICAgICAgICAoIWJhc2UucGF0aCB8fCB0aGlzLnBhdGguaW5kZXhPZihiYXNlLnBhdGgpID09IDApXHJcbiAgICAgICAgKTsgLy8gcGFnZSBpcyBhbHNvIGluIGJhc2UncyBkZWZpbmVkIHBhdGg7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzRm9yU3ViRG9tYWlucygpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5kb21haW4uaW5kZXhPZignLicpID09IDA7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGlzU3ViRG9tYWluT2YoYmFzZTogVXJpKTogYm9vbGVhbiB7XHJcbiAgICAgICAgdmFyIGRvbWFpbiA9ICcnO1xyXG5cclxuICAgICAgICBpZiAoIWJhc2UuaXNGb3JTdWJEb21haW5zKCkpIGRvbWFpbiA9ICcuJztcclxuXHJcbiAgICAgICAgZG9tYWluICs9IGJhc2UuZG9tYWluO1xyXG5cclxuICAgICAgICByZXR1cm4gc3RyaW5nVXRpbHNVdGlscy5lbmRzV2l0aCh0aGlzLmRvbWFpbiwgZG9tYWluKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIHBhcnNlKHVybDogc3RyaW5nLCBpc0Fic29sdXRlID0gdHJ1ZSkge1xyXG4gICAgICAgIGlmICghdXJsKSByZXR1cm4gdW5kZWZpbmVkO1xyXG5cclxuICAgICAgICByZXR1cm4gbmV3IFVyaSh1cmwsIGlzQWJzb2x1dGUpO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgYnJvd3NlckZldGNoPFQ+KCk6IFByb21pc2U8VD4ge1xyXG4gICAgICAgIGNvbnN0IHVybCA9IHRoaXMudG9TdHJpbmcoKTtcclxuICAgICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IHdpbmRvdy5mZXRjaCh1cmwpO1xyXG4gICAgICAgIGlmICghcmVzcG9uc2Uub2spXHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgZmV0Y2ggZmFpbGVkYCk7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHhocjxUPigpOiBQcm9taXNlPFQ+IHtcclxuICAgICAgICBjb25zdCB1cmwgPSB0aGlzLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlPFQ+KChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KCk7XHJcbiAgICAgICAgICAgIHhoci5vcGVuKCdHRVQnLCB1cmwpO1xyXG4gICAgICAgICAgICB4aHIuc2VuZCgpO1xyXG4gICAgICAgICAgICB4aHIub25lcnJvciA9IHJlamVjdDtcclxuICAgICAgICAgICAgeGhyLm9ubG9hZCA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSAhPT0gNCB8fCB4aHIuc3RhdHVzICE9PSAyMDApe1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoYHhociBmYWlsZWQgLSAke3hoci5zdGF0dXN9IC0gJHt4aHIuc3RhdHVzVGV4dH1gKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvblJlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2VUZXh0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzb2x2ZShqc29uUmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZWplY3QoZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBkZWxheShtczogbnVtYmVyKTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKHIgPT4gc2V0VGltZW91dChyLCBtcykpO1xyXG4gICAgfVxyXG59XHJcbiIsImV4cG9ydCBpbnRlcmZhY2UgSU51bWVyaWNNYXA8VD4ge1xyXG4gICAgW2tleTogbnVtYmVyXTogVDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElNYXA8VD4ge1xyXG4gICAgW2tleTogc3RyaW5nXTogVDtcclxufVxyXG5leHBvcnQgaW50ZXJmYWNlIElFbnVtZXJhYmxlPFQ+IHtcclxuICAgIGxlbmd0aDogbnVtYmVyO1xyXG4gICAgW2k6IG51bWJlcl06IFQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGluZGV4T2YoYXI6IGFueVtdLCBvOiBhbnkpOiBudW1iZXIge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhci5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGlmIChhcltpXSA9PSBvKSByZXR1cm4gaTtcclxuICAgIH1cclxuICAgIHJldHVybiAtMTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUoYXI6IGFueVtdKSB7XHJcbiAgICB2YXIgYXIyID0gW107XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgYXIyW2ldID0gYXJbaV07XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXIyO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCeVZhbHVlKGFyOiBhbnlbXSwgdmFsdWU6IE9iamVjdCkge1xyXG4gICAgaWYgKCFhcikgcmV0dXJuO1xyXG4gICAgZm9yICh2YXIgaSA9IGFyLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgaWYgKGFyW2ldID09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGFyLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJ5UHJvcGVydHkoYXI6IGFueVtdLCBwcm9wZXJ0eTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIWFyKSByZXR1cm47XHJcbiAgICBmb3IgKHZhciBpID0gYXIubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBpZiAoYXJbaV1bcHJvcGVydHldID09IHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGFyLnNwbGljZShpLCAxKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFycmF5RnJvbVN0cmluZyhzdHI6IHN0cmluZywgZGVsaW1pdGVyOiBzdHJpbmcsIGxvd2VyQ2FzZT86IGJvb2xlYW4pIHtcclxuICAgIC8vIGNoZWNrIGZvciBzdHJpbmcgdHlwZSBpbiB0aGUgaW5wdXQgYW5kIG5vdCBlbXB0eS5cclxuICAgIGlmICghc3RyIHx8IHR5cGVvZiBzdHIgIT0gJ3N0cmluZycpIHJldHVybiBbXTtcclxuXHJcbiAgICAvLyBsb3dlcmNhc2UgaWYgZGVtZW5kZWRcclxuICAgIGlmIChsb3dlckNhc2UpIHN0ciA9IHN0ci50b0xvd2VyQ2FzZSgpO1xyXG5cclxuICAgIC8vIGNsZWFuIHRoZSBzdHJpbmc6XHJcbiAgICBzdHIgPSBzdHIucmVwbGFjZSgvWyBdL2csICcnKS5yZXBsYWNlKC8sLC9nLCAnLCcpO1xyXG5cclxuICAgIC8vIGlmIHN0cmluZyBlbXB0eVxyXG4gICAgaWYgKCFzdHIpIHJldHVybiBbXTtcclxuXHJcbiAgICAvLyByZXR1cm4gYXJyYXkgZnJvbSBzdHJpbmdcclxuICAgIHJldHVybiBzdHIuc3BsaXQoZGVsaW1pdGVyKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaW50ZXJzZWN0KGFycmF5OiBhbnlbXSwgLi4uYXJnczogYW55W10pOiBhbnlbXSB7XHJcbiAgICBpZiAoYXJyYXkgPT0gbnVsbCkgcmV0dXJuIFtdO1xyXG4gICAgdmFyIHJlc3VsdDogYW55W10gPSBbXTtcclxuICAgIHZhciBhcmdzTGVuZ3RoOiBudW1iZXIgPSBhcmd1bWVudHMubGVuZ3RoO1xyXG4gICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IGFycmF5Lmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdmFyIGl0ZW06IGFueSA9IGFycmF5W2ldO1xyXG4gICAgICAgIGlmICh0aGlzLmluZGV4T2YocmVzdWx0LCBpdGVtKSAhPSAtMSkgY29udGludWU7XHJcbiAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBhcmdzTGVuZ3RoOyBqKyspIHtcclxuICAgICAgICAgICAgdmFyIGFycjogYW55W10gPSBhcmd1bWVudHNbal07XHJcbiAgICAgICAgICAgIGlmIChhcnIgPT0gbnVsbCB8fCB0aGlzLmluZGV4T2YoYXJyLCBpdGVtKSA9PSAtMSkgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChqID09PSBhcmdzTGVuZ3RoKSByZXN1bHQucHVzaChpdGVtKTtcclxuICAgIH1cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGxhc3RJbmRleE9mPFQ+KGFycjogSUVudW1lcmFibGU8VD4sIHZhbDogVCwgZnJvbUluZGV4ID0gMCk6IG51bWJlciB7XHJcbiAgICBmb3IgKHZhciBpID0gYXJyLmxlbmd0aDsgLS1pID49IGZyb21JbmRleDsgKSB7XHJcbiAgICAgICAgaWYgKGFycltpXSA9PT0gdmFsKSByZXR1cm4gaTtcclxuICAgIH1cclxuXHJcbiAgICByZXR1cm4gLTE7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZvckVhY2g8VD4oYXJyOiBJRW51bWVyYWJsZTxUPiwgYWN0aW9uOiAoZWxlbWVudDogVCwgaW5kZXg/OiBudW1iZXIsIGFycj86IElFbnVtZXJhYmxlPFQ+KSA9PiB2b2lkKSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkgYWN0aW9uKGFycltpXSwgaSwgYXJyKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaFByb3A8VD4ob2JqOiBJTWFwPFQ+LCBhY3Rpb246IChwcm9wOiBULCBuYW1lOiBzdHJpbmcsIG9iajogSU1hcDxUPikgPT4gdm9pZCk7XHJcbmV4cG9ydCBmdW5jdGlvbiBmb3JFYWNoUHJvcDxUIGV4dGVuZHMgT2JqZWN0PihvYmo6IFQsIGFjdGlvbjogKHByb3A6IGFueSwgbmFtZTogc3RyaW5nLCBvYmo6IFQpID0+IHZvaWQpO1xyXG5leHBvcnQgZnVuY3Rpb24gZm9yRWFjaFByb3Aob2JqOiBPYmplY3QsIGFjdGlvbjogKHByb3A6IGFueSwgbmFtZTogc3RyaW5nLCBvYmo6IE9iamVjdCkgPT4gdm9pZCkge1xyXG4gICAgZm9yICh2YXIgbmFtZSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG5hbWUpKSBhY3Rpb24ob2JqW25hbWVdLCBuYW1lLCBvYmopO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzb21lPFQ+KGFycjogSUVudW1lcmFibGU8VD4sIGNvbmRpdGlvbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyLCBhcnI/OiBJRW51bWVyYWJsZTxUPikgPT4gYm9vbGVhbikge1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyArK2kpIHtcclxuICAgICAgICBpZiAoY29uZGl0aW9uKGFycltpXSwgaSwgYXJyKSkgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIGZhbHNlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBldmVyeTxUPihhcnI6IElFbnVtZXJhYmxlPFQ+LCBjb25kaXRpb246IChlbGVtZW50OiBULCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8VD4pID0+IGJvb2xlYW4pIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJyLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgaWYgKCFjb25kaXRpb24oYXJyW2ldLCBpLCBhcnIpKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5UHJvcDxUPihvYmo6IElNYXA8VD4sIGNvbmRpdGlvbjogKHByb3A6IFQsIG5hbWU6IHN0cmluZywgb2JqOiBJTWFwPFQ+KSA9PiBib29sZWFuKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5UHJvcDxUPihvYmo6IFQsIGNvbmRpdGlvbjogKHByb3AsIG5hbWU6IHN0cmluZywgb2JqOiBUKSA9PiBib29sZWFuKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGV2ZXJ5UHJvcChvYmo6IE9iamVjdCwgY29uZGl0aW9uOiAocHJvcCwgbmFtZTogc3RyaW5nLCBvYmo6IE9iamVjdCkgPT4gYm9vbGVhbikge1xyXG4gICAgZm9yICh2YXIgbmFtZSBpbiBvYmopIHtcclxuICAgICAgICBpZiAob2JqLmhhc093blByb3BlcnR5KG5hbWUpICYmICFjb25kaXRpb24ob2JqW25hbWVdLCBuYW1lLCBvYmopKSByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHRydWU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1hcDxTLCBUPihhcnI6IElFbnVtZXJhYmxlPFM+LCBhY3Rpb246IChlbGVtZW50OiBTLCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8Uz4pID0+IFQpIHtcclxuICAgIHZhciByZXN1bHQgPSBuZXcgQXJyYXk8VD4oKTtcclxuXHJcbiAgICBmb3JFYWNoKGFyciwgKGl0ZW0sIGlkeCwgYXJyKSA9PiByZXN1bHQucHVzaChhY3Rpb24oaXRlbSwgaWR4LCBhcnIpKSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZmlyc3RJbmRleDxUPihhcnI6IElFbnVtZXJhYmxlPFQ+LCBjb25kaXRpb246IChlbGVtZW50OiBULCBpbmRleD86IG51bWJlciwgYXJyPzogSUVudW1lcmFibGU8VD4pID0+IGJvb2xlYW4pOiBudW1iZXIge1xyXG4gICAgdmFyIHJlc3VsdDogbnVtYmVyID0gLTE7XHJcbiAgICBzb21lKGFyciwgKGl0ZW0sIGluZGV4LCBhcnIpID0+IHtcclxuICAgICAgICBpZiAoY29uZGl0aW9uKGl0ZW0sIGluZGV4LCBhcnIpKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdCA9IGluZGV4O1xyXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH0pO1xyXG5cclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZpcnN0PFQ+KGFycjogSUVudW1lcmFibGU8VD4sIGNvbmRpdGlvbjogKGVsZW1lbnQ6IFQsIGluZGV4PzogbnVtYmVyLCBhcnI/OiBJRW51bWVyYWJsZTxUPikgPT4gYm9vbGVhbik6IFQge1xyXG4gICAgcmV0dXJuIGFycltmaXJzdEluZGV4KGFyciwgY29uZGl0aW9uKV07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEFsbEVudW1WYWx1ZXM8VD4oZW51bVR5cGUpOiBUW10ge1xyXG4gICAgdmFyIHJlc3VsdHM6IFRbXSA9IFtdO1xyXG5cclxuICAgIGZvciAodmFyIGkgaW4gZW51bVR5cGUpIGlmICh0eXBlb2YgZW51bVR5cGVbaV0gPT0gJ251bWJlcicpIHJlc3VsdHMucHVzaChlbnVtVHlwZVtpXSk7XHJcblxyXG4gICAgcmV0dXJuIHJlc3VsdHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFVuaXF1ZVZhbHVlczxUPihhcnI6IFRbXSk6IFRbXSB7XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyci5sZW5ndGg7ICsraSkge1xyXG4gICAgICAgIGZvciAodmFyIGogPSBpICsgMTsgaiA8IGFyci5sZW5ndGg7IGorKylcclxuICAgICAgICAgICAgaWYgKGFycltpXSA9PT0gYXJyW2pdKSB7XHJcbiAgICAgICAgICAgICAgICBhcnIuc3BsaWNlKGosIDEpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXJyO1xyXG59XHJcbiIsImltcG9ydCB7IGxvY2FsSW5mbyB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9Mb2NhbEluZm8nO1xyXG5cclxuZGVjbGFyZSBmdW5jdGlvbiB1bmVzY2FwZShlc2NhcGVkU3RyOiBzdHJpbmcpOiBzdHJpbmc7XHJcbmRlY2xhcmUgZnVuY3Rpb24gZXNjYXBlKHVuZXNjYXBlZFN0cjogc3RyaW5nKTogc3RyaW5nO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9nZXRCYXNlRG9tYWluKCkge1xyXG4gICAgcmV0dXJuIGxvY2FsSW5mby5iYXNlRG9tYWluIHx8ICcnO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXREZWZhdWx0RG9tYWluKHBhZ2VEb21haW4gPSBsb2NhbEluZm8ucGFnZURvbWFpbiwgYmFzZURvbWFpbiA9IF9nZXRCYXNlRG9tYWluKCkpOiBzdHJpbmcge1xyXG4gICAgbGV0IGNvb2tpZURvbWFpbjtcclxuICAgIGNvb2tpZURvbWFpbiA9XHJcbiAgICAgICAgYmFzZURvbWFpbi5sZW5ndGggPiAwICYmIHBhZ2VEb21haW4ubGVuZ3RoID49IGJhc2VEb21haW4ubGVuZ3RoICYmIHBhZ2VEb21haW4ubGFzdEluZGV4T2YoYmFzZURvbWFpbikgPT09IHBhZ2VEb21haW4ubGVuZ3RoIC0gYmFzZURvbWFpbi5sZW5ndGhcclxuICAgICAgICAgICAgPyBiYXNlRG9tYWluXHJcbiAgICAgICAgICAgIDogcGFnZURvbWFpbjtcclxuICAgIHJldHVybiBjb29raWVEb21haW47XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldChuYW1lOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgbmFtZSA9IG5hbWUucmVwbGFjZSgvKFsuKis/Xj0hOiR7fSgpfFtcXF1cXC9cXFxcXSkvZywgJ1xcXFwkMScpLnJlcGxhY2UoL15bIFxcdF0rfFsgXFx0XSskL2csICcnKTtcclxuICAgIHZhciByZWdleCA9IG5ldyBSZWdFeHAoJyg/Ol58OylcXFxccz8nICsgbmFtZSArICc9KC4qPykoPzo7fCQpJyk7XHJcbiAgICB2YXIgbWF0Y2ggPSBkb2N1bWVudC5jb29raWUubWF0Y2gocmVnZXgpO1xyXG4gICAgcmV0dXJuIG1hdGNoICYmIHVuZXNjYXBlKG1hdGNoWzFdKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0KG5hbWU6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc19pbj86IGFueSwgY29va2llRG9tYWluPzogc3RyaW5nLCBkb250VXNlUm9vdFBhdGg/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBjb25zdCBwYWdlRG9tYWluID0gbG9jYWxJbmZvLnBhZ2VEb21haW47XHJcbiAgICBpZiAoY29va2llRG9tYWluID09IG51bGwpIHtcclxuICAgICAgICBjb29raWVEb21haW4gPSBnZXREZWZhdWx0RG9tYWluKCk7XHJcbiAgICB9XHJcbiAgICBsZXQgZXhwaXJlTXM6IG51bWJlcjtcclxuICAgIGlmIChleHBpcmVzX2luID09IG51bGwgfHwgZXhwaXJlc19pbiA9PT0gJycgfHwgaXNOYU4oZXhwaXJlc19pbikpIHtcclxuICAgICAgICBleHBpcmVNcyA9IDEwMDAgKiBnZXRJbmZpbml0ZUV4cGlyYXRpb25UaW1lSW5TZWNvbmRzKCk7XHJcbiAgICB9IGVsc2UgaWYgKGV4cGlyZXNfaW4gPT0gMCkge1xyXG4gICAgICAgIC8vIDAgbWVhbnMgU2Vzc2lvblxyXG4gICAgICAgIGV4cGlyZU1zID0gbnVsbDtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgLy8gQW55IG90aGVyIHZhbHVlIGlzIG51bWJlciBvZiBzZWNvbmRzIChBIG5lZ2F0aXZlIHZhbHVlIHdvdWxkIG1lYW4gZXhwaXJlIG5vdyEpXHJcbiAgICAgICAgZXhwaXJlTXMgPSBleHBpcmVzX2luICogMTAwMDtcclxuICAgIH1cclxuXHJcbiAgICB2YXIgZXhkYXRlID0gbmV3IERhdGUoKTtcclxuICAgIGV4ZGF0ZS5zZXRUaW1lKGV4ZGF0ZS5nZXRUaW1lKCkgKyBleHBpcmVNcyk7XHJcblxyXG4gICAgdmFyIGNvb2tpZVN0cmluZyA9XHJcbiAgICAgICAgbmFtZSArXHJcbiAgICAgICAgJz0nICtcclxuICAgICAgICBlc2NhcGUodmFsdWUpICtcclxuICAgICAgICAoZG9udFVzZVJvb3RQYXRoID8gJycgOiAnOyBwYXRoPS8nKSArXHJcbiAgICAgICAgKGV4cGlyZU1zID09IG51bGwgPyAnJyA6ICc7IGV4cGlyZXM9JyArIGV4ZGF0ZS50b1VUQ1N0cmluZygpKSArXHJcbiAgICAgICAgKGNvb2tpZURvbWFpbiAmJiBjb29raWVEb21haW4gIT0gJycgJiYgY29va2llRG9tYWluLmluZGV4T2YoJy4nKSAhPSAtMSA/ICc7IGRvbWFpbj0nICsgY29va2llRG9tYWluIDogJycpO1xyXG4gICAgZG9jdW1lbnQuY29va2llID0gY29va2llU3RyaW5nO1xyXG5cclxuICAgIC8vIFNvbWUgYnJvd3NlcnMgbGlrZSBJRTggZG9uJ3QgbGlrZSBzb21lIGRvbWFpbnMgKGUuZy4gZG9tYWlucyBvZiB0aGUgZm9ybSB4eC55eSlcclxuICAgIC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9xdWVzdGlvbnMvMTE4OTYzOC9pbnRlcm5ldC1leHBsb3Jlci14eC15eS13ZWJzaXRlLWlzc3VlXHJcbiAgICBpZiAoKCFleHBpcmVNcyB8fCBleHBpcmVNcyA+IDApICYmICFnZXQobmFtZSkpIHtcclxuICAgICAgICBjb29raWVTdHJpbmcgPVxyXG4gICAgICAgICAgICBuYW1lICtcclxuICAgICAgICAgICAgJz0nICtcclxuICAgICAgICAgICAgZXNjYXBlKHZhbHVlKSArXHJcbiAgICAgICAgICAgIChkb250VXNlUm9vdFBhdGggPyAnJyA6ICc7IHBhdGg9LycpICtcclxuICAgICAgICAgICAgKGV4cGlyZU1zID09IG51bGwgPyAnJyA6ICc7IGV4cGlyZXM9JyArIGV4ZGF0ZS50b1VUQ1N0cmluZygpKSArXHJcbiAgICAgICAgICAgIChwYWdlRG9tYWluICYmIHBhZ2VEb21haW4gIT0gJycgJiYgcGFnZURvbWFpbi5pbmRleE9mKCcuJykgIT0gLTEgPyAnOyBkb21haW49JyArIHBhZ2VEb21haW4gOiAnJyk7XHJcbiAgICAgICAgZG9jdW1lbnQuY29va2llID0gY29va2llU3RyaW5nO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUobmFtZTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICB2YXIgcGFnZURvbWFpbiA9IGxvY2FsSW5mby5wYWdlRG9tYWluO1xyXG4gICAgdmFyIGJhc2VEb21haW4gPSBfZ2V0QmFzZURvbWFpbigpO1xyXG5cclxuICAgIGlmIChiYXNlRG9tYWluLmxlbmd0aCA+IDAgJiYgcGFnZURvbWFpbi5sZW5ndGggPj0gYmFzZURvbWFpbi5sZW5ndGggJiYgcGFnZURvbWFpbi5sYXN0SW5kZXhPZihiYXNlRG9tYWluKSA9PT0gcGFnZURvbWFpbi5sZW5ndGggLSBiYXNlRG9tYWluLmxlbmd0aCkge1xyXG4gICAgICAgIHNldChuYW1lLCAnJywgLTEsIGJhc2VEb21haW4pOyAvLyByZW1vdmUgYWxzbyBmcm9tIHRoZSBzdWJEb21haW4uXHJcbiAgICAgICAgc2V0KG5hbWUsICcnLCAtMSwgYmFzZURvbWFpbiwgdHJ1ZSk7XHJcbiAgICB9XHJcbiAgICBzZXQobmFtZSwgJycsIC0xLCBsb2NhbEluZm8ucGFnZURvbWFpbik7XHJcbiAgICBzZXQobmFtZSwgJycsIC0xLCBsb2NhbEluZm8ucGFnZURvbWFpbiwgdHJ1ZSk7XHJcbiAgICBzZXQobmFtZSwgJycsIC0xLCAnJyk7XHJcbiAgICBzZXQobmFtZSwgJycsIC0xLCAnJywgdHJ1ZSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEluZmluaXRlRXhwaXJhdGlvblRpbWVJblNlY29uZHMoKSB7XHJcbiAgICAvLyBTZXQgZXhwaXJhdGlvbiB0aW1lIHRvIDEgeWVhcnNcclxuICAgIHJldHVybiA2MCAqIDYwICogMjQgKiAzNjU7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNhblNhdmVDb29raWUoZG9jID0gZG9jdW1lbnQpIHtcclxuICAgIHZhciBkID0gbmV3IERhdGUobmV3IERhdGUoKS5nZXRUaW1lKCkgKyAxMDAwKTsgLy8gMSBzZWNvbmQgZXhwaXJhdGlvbi5cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGRvYy5jb29raWUgPSAnZ2lnM3BjdGVzdD10cnVlO2V4cGlyZXM9JyArIGRbJ3RvR01UU3RyaW5nJ10oKTtcclxuICAgICAgICByZXR1cm4gZG9jLmNvb2tpZS5pbmRleE9mKCdnaWczcGN0ZXN0JykgIT09IC0xO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgIC8vIGlPUyAxMCB3ZWJ2aWV3IHRocm93cyBpbiBzb21lIHNjZW5hcmlvc1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBVcmkgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVXJpJztcclxuaW1wb3J0ICogYXMgc3RyaW5nVXRpbHNVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvc3RyaW5nVXRpbHMnO1xyXG5pbXBvcnQgeyBsb2NhbEluZm8gfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvTG9jYWxJbmZvJztcclxuXHJcbmV4cG9ydCBkZWNsYXJlIHZhciBnZXRBcGlEb21haW46IChuYW1lc3BhY2U/OiBzdHJpbmcpID0+IHN0cmluZztcclxuY29uc3QgZ2lneWFEb21haW5OYW1lc3BhY2VzID0gWydzb2NpYWxpemUnLCAnYWNjb3VudHMnLCAnZmlkbScsICdnbScsICdjb21tZW50cycsICdnY3MnLCAnaWRzJywgJ2RzJywgJ2dzY291bnRlcnMnXTtcclxuZXhwb3J0IGZ1bmN0aW9uIGFwaURvbWFpbkZhY3RvcnkoYXBpRG9tYWluID0gcmVzb2x2ZUFwaURvbWFpbigpLCBkZWZhdWx0QXBpRG9tYWluID0gZ2lneWEuZGVmYXVsdEFwaURvbWFpbik6IChuYW1lc3BhY2U/OiBzdHJpbmcpID0+IHN0cmluZyB7XHJcbiAgICBjb25zdCBzaG91bGRBZGROYW1lc3BhY2UgPSBVcmkucGFyc2UoYXBpRG9tYWluKS5pc0luKFVyaS5wYXJzZShkZWZhdWx0QXBpRG9tYWluKSk7XHJcblxyXG4gICAgcmV0dXJuIChuYW1lc3BhY2U/OiBzdHJpbmcpID0+IHtcclxuICAgICAgICBpZiAobmFtZXNwYWNlICYmIHNob3VsZEFkZE5hbWVzcGFjZSkge1xyXG4gICAgICAgICAgICBsZXQgc3ViRG9tYWluID0gbmFtZXNwYWNlLnNwbGl0KCcuJylbMF07XHJcbiAgICAgICAgICAgIGlmIChnaWd5YURvbWFpbk5hbWVzcGFjZXMuaW5kZXhPZihzdWJEb21haW4pID09IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBnaWd5YS5sb2dnZXIuZXJyb3IoYHRyeWluZyB0byBzZW5kIHJlcXVlc3QgdG8gYW4gaW52YWxpZCBkb21haW5gKTtcclxuICAgICAgICAgICAgICAgIHN1YkRvbWFpbiA9IGdpZ3lhRG9tYWluTmFtZXNwYWNlc1swXTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIGAke3N1YkRvbWFpbn0uJHthcGlEb21haW59YDtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gYXBpRG9tYWluO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdpZ3lhRG9tYWluKG5hbWVzcGFjZT86IHN0cmluZywgZGF0YUNlbnRlciA9IGdpZ3lhLmRhdGFDZW50ZXIsIGRlZmF1bHREb21haW4gPSBnaWd5YS5kZWZhdWx0QXBpRG9tYWluKSB7XHJcbiAgICBjb25zdCBkb21haW4gPSBgJHtkYXRhQ2VudGVyfS4ke2RlZmF1bHREb21haW59YDtcclxuXHJcbiAgICBpZiAobmFtZXNwYWNlKSByZXR1cm4gYCR7bmFtZXNwYWNlfS4ke2RvbWFpbn1gO1xyXG4gICAgZWxzZSByZXR1cm4gZG9tYWluO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRCYXNlRG9tYWluKFxyXG4gICAgYmFzZURvbWFpbnM6IHN0cmluZ1tdfHN0cmluZyA9IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncy5iYXNlRG9tYWlucyxcclxuICAgIGN1cnJlbnREb21haW4gPSBsb2NhdGlvbi5ob3N0bmFtZSxcclxuICAgIGRlZmF1bHREb21haW5zID0gWydnaWd5YS5jb20nLCAnZ2lneWEtYXBpLmNuJywgZ2lneWEuZGVmYXVsdEFwaURvbWFpbl0sXHJcbik6IHN0cmluZyB7XHJcbiAgICAvLyAjNDk3ODYgLSBTdXBwb3J0IHdlYnZpZXcgd2l0aG91dCBob3N0bmFtZS5cclxuICAgIGlmICghY3VycmVudERvbWFpbikge1xyXG4gICAgICAgIHJldHVybiAnJztcclxuICAgIH1cclxuXHJcbiAgICBpZiAodHlwZW9mIGJhc2VEb21haW5zID09ICdzdHJpbmcnKSB7XHJcbiAgICAgICAgYmFzZURvbWFpbnMgPSBiYXNlRG9tYWlucy5zcGxpdCgnLCcpO1xyXG4gICAgfVxyXG5cclxuICAgIGxldCBvcmlnaW5VUkkgPSBVcmkucGFyc2UoY3VycmVudERvbWFpbik7XHJcblxyXG4gICAgaWYgKGRlZmF1bHREb21haW5zKSB7XHJcbiAgICAgICAgYmFzZURvbWFpbnMgPSBiYXNlRG9tYWlucy5jb25jYXQoZGVmYXVsdERvbWFpbnMpO1xyXG4gICAgfVxyXG4gICAgZm9yIChjb25zdCByYXdEb21haW4gb2YgYmFzZURvbWFpbnMpIHtcclxuICAgICAgICAvLyBUaGlzIGRvZXMgbm90IHRha2UgY2FyZSBvZiB3aWxkY2FyZHMgaW4gdGhlIG1pZGRsZSBvZiBzdHJpbmcuXHJcbiAgICAgICAgY29uc3QgYmFzZURvbWFpbiA9IHN0cmluZ1V0aWxzVXRpbHMucmVwbGFjZUFsbChyYXdEb21haW4sICcqJywgJycpO1xyXG4gICAgICAgIGNvbnN0IGJhc2VVcmkgPSBVcmkucGFyc2UoYmFzZURvbWFpbik7XHJcbiAgICAgICAgaWYgKGJhc2VVcmkgJiYgb3JpZ2luVVJJLmlzSW4oYmFzZVVyaSkpIHtcclxuICAgICAgICAgICAgaWYgKGJhc2VVcmkuaXNGb3JTdWJEb21haW5zKCkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBvcmlnaW5VUkkuZG9tYWluO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGJhc2VVcmkuZG9tYWluO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC8vIGZhbGxiYWNrIHRvIHRoZSBwYXJlbnQncyB3aW5kb3cgZG9tYWluIChmb3IgYmFja3dhcmQgY29tcGF0aWJpbGl0eSkuXHJcbiAgICByZXR1cm4gb3JpZ2luVVJJLmRvbWFpbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVzb2x2ZUFwaURvbWFpbihcclxuICAgIGN1c3RvbUFwaURvbWFpblByZWZpeCA9IGdpZ3lhLnBhcnRuZXJTZXR0aW5ncyAmJiBnaWd5YS5wYXJ0bmVyU2V0dGluZ3MuY3VzdG9tQVBJRG9tYWluUHJlZml4LFxyXG4gICAgYmFzZURvbWFpbiA9IGxvY2FsSW5mby5iYXNlRG9tYWluLFxyXG4gICAgZGF0YUNlbnRlciA9IGdpZ3lhLmRhdGFDZW50ZXIsXHJcbiAgICBkZWZhdWx0QXBpRG9tYWluID0gZ2lneWEuZGVmYXVsdEFwaURvbWFpbixcclxuKSB7XHJcbiAgICBpZiAoY3VzdG9tQXBpRG9tYWluUHJlZml4ICYmIGJhc2VEb21haW4gJiYgYmFzZURvbWFpbiAhPT0gZGVmYXVsdEFwaURvbWFpbikge1xyXG4gICAgICAgIHJldHVybiBgJHtjdXN0b21BcGlEb21haW5QcmVmaXh9LiR7YmFzZURvbWFpbn1gO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZ2V0R2lneWFEb21haW4odW5kZWZpbmVkLCBkYXRhQ2VudGVyLCBkZWZhdWx0QXBpRG9tYWluKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgKiBhcyBET01VdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvRE9NJztcclxuaW1wb3J0IHsgZ2V0Q2RuUmVzb3VyY2UgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvY2RuJztcclxuaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gY2FsbEZ1bmN0aW9uKG5hbWU6IHN0cmluZywgYXJQYXJhbXM6IGFueVtdKTogdm9pZCB7XHJcbiAgICB2YXIgZm4gPSBldmFsKG5hbWUpO1xyXG4gICAgdmFyIGFyUGFydHMgPSBuYW1lLnNwbGl0KCcuJyk7XHJcbiAgICBhclBhcnRzLnNwbGljZShhclBhcnRzLmxlbmd0aCAtIDEsIDEpO1xyXG4gICAgdmFyIHNjb3BlID0gZXZhbChhclBhcnRzLmpvaW4oJy4nKSk7XHJcbiAgICBmbi5hcHBseShzY29wZSwgYXJQYXJhbXMpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpbnZva2VPblBhZ2VMb2FkKGZ1bmM6IEZ1bmN0aW9uLCBjb21wbGV0ZU9ubHk/OiBib29sZWFuKTogdm9pZCB7XHJcbiAgICBpZiAoXHJcbiAgICAgICAgKCFkb2N1bWVudC5yZWFkeVN0YXRlICYmIGRvY3VtZW50LmJvZHkpIHx8XHJcbiAgICAgICAgZG9jdW1lbnQucmVhZHlTdGF0ZSA9PT0gJ2NvbXBsZXRlJyB8fFxyXG4gICAgICAgICghY29tcGxldGVPbmx5ICYmIGRvY3VtZW50LnJlYWR5U3RhdGUgPT09ICdpbnRlcmFjdGl2ZScgJiYgZG9jdW1lbnQuYm9keSlcclxuICAgICkge1xyXG4gICAgICAgIGZ1bmMoKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgbGV0IGNhbGxlZCA9IGZhbHNlO1xyXG4gICAgICAgIGNvbnN0IGZuT25Mb2FkID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGlmICghY2FsbGVkKSB7XHJcbiAgICAgICAgICAgICAgICBjYWxsZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgZnVuYygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoZm5PbkxvYWQsIDIwMDAwKTsgLy8gZmFsbGJhY2sgLSBzb21ldGltZXMgcmVhZHlzdGF0ZSBzdGF5cyBzdHVjayBvbiBpbnRlcmFjdGl2ZVxyXG5cclxuICAgICAgICBET01VdGlscy5hZGRFdmVudExpc3RlbmVyKHdpbmRvdywgJ2xvYWQnLCBmbk9uTG9hZCk7XHJcbiAgICAgICAgRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcihkb2N1bWVudCwgJ0RPTUNvbnRlbnRMb2FkZWQnLCBmbk9uTG9hZCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZUFsaWFzKHB1YmxpY05hbWU6IHN0cmluZywgZm5jOiBGdW5jdGlvbik6IHZvaWQge1xyXG4gICAgY29uc3QgYXJOYW1lU2VnbWVudHMgPSBwdWJsaWNOYW1lLnNwbGl0KCcuJyk7XHJcbiAgICBsZXQgb0N1cnJlbnRTZWdtZW50ID0gd2luZG93O1xyXG4gICAgZm9yIChsZXQgaVNlZ21lbnQgPSAwOyBpU2VnbWVudCA8IGFyTmFtZVNlZ21lbnRzLmxlbmd0aCAtIDE7IGlTZWdtZW50KyspIHtcclxuICAgICAgICBjb25zdCBzU2VnbWVudCA9IGFyTmFtZVNlZ21lbnRzW2lTZWdtZW50XTtcclxuICAgICAgICBpZiAoIW9DdXJyZW50U2VnbWVudFtzU2VnbWVudF0pIHtcclxuICAgICAgICAgICAgb0N1cnJlbnRTZWdtZW50W3NTZWdtZW50XSA9IHt9O1xyXG4gICAgICAgIH1cclxuICAgICAgICBvQ3VycmVudFNlZ21lbnQgPSBvQ3VycmVudFNlZ21lbnRbc1NlZ21lbnRdO1xyXG4gICAgfVxyXG4gICAgb0N1cnJlbnRTZWdtZW50W2FyTmFtZVNlZ21lbnRzW2FyTmFtZVNlZ21lbnRzLmxlbmd0aCAtIDFdXSA9IGZuYztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZGVib3VuY2UoZm46ICgpID0+IHZvaWQsIGRlbGF5TWlsbGlzZWNvbmRzOiBudW1iZXIpOiAoKSA9PiB2b2lkIHtcclxuICAgIGxldCB0aW1lcjogbnVtYmVyIHwgdW5kZWZpbmVkID0gdW5kZWZpbmVkO1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICh0aW1lciAhPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIHRpbWVyID0gdW5kZWZpbmVkO1xyXG4gICAgICAgICAgICBmbigpO1xyXG4gICAgICAgIH0sIGRlbGF5TWlsbGlzZWNvbmRzKSBhcyBhbnk7XHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGRTcmNUb0lGcmFtZUlmTmVlZGVkKGlmcmFtZTogSFRNTElGcmFtZUVsZW1lbnQsIHNyYzogc3RyaW5nID0gZ2V0Q2RuUmVzb3VyY2UoJy8nKSkge1xyXG4gICAgaWYgKGxvY2FsSW5mby5pc0lPU1dlYlZpZXcgfHwgKGxvY2FsSW5mby5pc0lPUyAmJiBsb2NhbEluZm8uaXNXZUNoYXQpKSB7XHJcbiAgICAgICAgaWZyYW1lLnNldEF0dHJpYnV0ZSgnc3JjJywgc3JjKTtcclxuICAgIH1cclxufVxyXG4iLCJjb25zdCBnaWd5YUNkblJlZ2V4ID0gL1xcL1xcL2NkbihzKT9cXC4ocnUxXFwuKT9naWd5YS5jb20vO1xyXG5jb25zdCBmaWxlTmFtZXMgPSBbJ2dpZ3lhLmpzJywgJ3NvY2lhbGl6ZS5qcycsICdzb2NpYWxpemUyLmpzJywgJ2dzanNzZGsuanMnXTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEdpZ3lhU2NyaXB0RWxlbWVudCgpOiBIVE1MU2NyaXB0RWxlbWVudCB7XHJcbiAgICBsZXQgc2NyaXB0RWxlbWVudDogSFRNTFNjcmlwdEVsZW1lbnQ7XHJcbiAgICBjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xyXG4gICAgZm9yIChsZXQgaSA9IHNjcmlwdHMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBsZXQgc2NyaXB0ID0gc2NyaXB0c1tpXTtcclxuICAgICAgICBsZXQgc3JjID0gc2NyaXB0LnNyYy50b0xvd2VyQ2FzZSgpO1xyXG4gICAgICAgIGlmIChzcmMgIT09ICcnKSB7XHJcbiAgICAgICAgICAgIGlmIChnaWd5YUNkblJlZ2V4LnRlc3Qoc3JjKSB8fCBzcmMuaW5kZXhPZignP2FwaWtleT0nKSA+IC0xKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgaXNGaWxlTmFtZUV4aXN0SW5TcmMgPSBmaWxlTmFtZXMubGVuZ3RoID09PSAwIHx8IGZpbGVOYW1lcy5zb21lKGZpbGVOYW1lID0+IHNyYy5pbmRleE9mKGZpbGVOYW1lKSA+IC0xKTtcclxuICAgICAgICAgICAgICAgIGlmIChpc0ZpbGVOYW1lRXhpc3RJblNyYykge1xyXG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdEVsZW1lbnQgPSBzY3JpcHQ7XHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc2NyaXB0RWxlbWVudDtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyBVUkxVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVVJMJztcclxuaW1wb3J0ICogYXMgSlNPTlV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OJztcclxuZGVjbGFyZSBmdW5jdGlvbiB1bmVzY2FwZShlc2NhcGVkU3RyOiBzdHJpbmcpOiBzdHJpbmc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gc2VyaWFsaXplKG9LZXlWYWx1ZTogT2JqZWN0LCBkZWxpbWl0ZXI/OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgY29uc3QgYSA9IFtdO1xyXG4gICAgaWYgKCFkZWxpbWl0ZXIpIHtcclxuICAgICAgICBkZWxpbWl0ZXIgPSAnJic7XHJcbiAgICB9XHJcbiAgICBmb3IgKGNvbnN0IHAgaW4gb0tleVZhbHVlKSB7XHJcbiAgICAgICAgc3dpdGNoICh0eXBlb2Ygb0tleVZhbHVlW3BdKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG5cclxuICAgICAgICAgICAgY2FzZSAnb2JqZWN0JzpcclxuICAgICAgICAgICAgICAgIGlmIChvS2V5VmFsdWVbcF0gIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGEucHVzaChwICsgJz0nICsgVVJMVXRpbHMuVVJMRW5jb2RlKEpTT05VdGlscy5zZXJpYWxpemUob0tleVZhbHVlW3BdKSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBjYXNlICd1bmRlZmluZWQnOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcblxyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgYS5wdXNoKHAgKyAnPScgKyBVUkxVdGlscy5VUkxFbmNvZGUob0tleVZhbHVlW3BdKSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcyA9IGEuam9pbihkZWxpbWl0ZXIpO1xyXG4gICAgcmV0dXJuIHM7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGRlc2VyaWFsaXplKHVybEVuY29kZWRTdHJpbmc6IHN0cmluZywgZGVsaW1pdGVyPzogc3RyaW5nLCBrZXlzVG9Mb3dlcj86IGJvb2xlYW4sIHVzZVVuZXNjYXBlPzogYm9vbGVhbik6IGFueSB7XHJcbiAgICBjb25zdCBvID0ge307XHJcbiAgICBpZiAoIXVybEVuY29kZWRTdHJpbmcpIHtcclxuICAgICAgICByZXR1cm4gbztcclxuICAgIH1cclxuICAgIGlmICghZGVsaW1pdGVyKSB7XHJcbiAgICAgICAgZGVsaW1pdGVyID0gJyYnO1xyXG4gICAgfVxyXG4gICAgY29uc3QgcGFpcnMgPSB1cmxFbmNvZGVkU3RyaW5nLnNwbGl0KGRlbGltaXRlcik7XHJcbiAgICBmb3IgKGxldCBpUGFpciA9IDA7IGlQYWlyIDwgcGFpcnMubGVuZ3RoOyBpUGFpcisrKSB7XHJcbiAgICAgICAgY29uc3QgcGFpciA9IHBhaXJzW2lQYWlyXTtcclxuICAgICAgICBjb25zdCBlcVBvcyA9IHBhaXIuaW5kZXhPZignPScpO1xyXG4gICAgICAgIGlmIChlcVBvcyA9PT0gLTEpIHtcclxuICAgICAgICAgICAgY29uc3Qga2V5ID0ga2V5c1RvTG93ZXIgPyBwYWlyLnRvTG93ZXJDYXNlKCkgOiBwYWlyO1xyXG4gICAgICAgICAgICBvW2tleV0gPSAnMSc7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgbGV0IGtleSA9IHBhaXIuc3Vic3RyKDAsIGVxUG9zKTtcclxuICAgICAgICAgICAgaWYgKGtleXNUb0xvd2VyKSB7XHJcbiAgICAgICAgICAgICAgICBrZXkgPSBrZXkudG9Mb3dlckNhc2UoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zdCBzZXJpYWxpemVkVmFsdWUgPSBwYWlyLnN1YnN0cihlcVBvcyArIDEpLnJlcGxhY2UoL1xcKy9nLCAnICcpO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgb1trZXldID0gdXNlVW5lc2NhcGUgPyB1bmVzY2FwZShzZXJpYWxpemVkVmFsdWUpIDogVVJMVXRpbHMuVVJMRGVjb2RlKHNlcmlhbGl6ZWRWYWx1ZSk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICBvW2tleV0gPSB1bmVzY2FwZShzZXJpYWxpemVkVmFsdWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG87XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgSlNPTlV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OJztcclxuaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XHJcbmltcG9ydCAqIGFzIHNjcmlwdFV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9zY3JpcHQnO1xyXG5pbXBvcnQgKiBhcyBjb29raWVVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvY29va2llJztcclxuXHJcbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiAnQWJzdHJhY3RBZGFwdGVyJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZztcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgZ2V0SXRlbShrZXk6IHN0cmluZywgY2FsbGJhY2s6ICgpID0+IHN0cmluZyk6IHZvaWQ7XHJcblxyXG4gICAgcHVibGljIGFic3RyYWN0IHNldEl0ZW0oa2V5OiBzdHJpbmcsIHZhbHVlOiBzdHJpbmcsIGV4cGlyZXNJbj86IG51bWJlciwgZG9tYWluPzogc3RyaW5nKTogdm9pZDtcclxuXHJcbiAgICBwdWJsaWMgYWJzdHJhY3QgcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk7XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBTZXQgb2JqZWN0IHRvIHN0b3JhZ2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBzZXRPYmplY3Qoa2V5OiBzdHJpbmcsIG86IE9iamVjdCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc2V0SXRlbShrZXksIEpTT05VdGlscy5zZXJpYWxpemUobykpO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogR2V0IG9iamVjdCBmcm9tIGxvY2FsIHN0b3JhZ2UuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBnZXRPYmplY3Qoa2V5OiBzdHJpbmcsIGRlZmF1bHRWYWx1ZT86IGFueSk6IE9iamVjdCB7XHJcbiAgICAgICAgcmV0dXJuIEpTT05VdGlscy5kZXNlcmlhbGl6ZSh0aGlzLmdldEl0ZW0oa2V5KSwgZGVmYXVsdFZhbHVlKTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqIElzIHBlcnNpc3RlbnQgc3RvcmFnZS4gUmV0dXJucyBmYWxzZSB3aGVuIGRhdGEgaXMgbm90IHBlcnNpc3RlZC5cclxuICAgICAqL1xyXG4gICAgcHVibGljIGlzUGVyc2lzdGVudCgpIHtcclxuICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgQWJzdHJhY3RBc3luY0xvY2FsU3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgcHJvdGVjdGVkIGlzTG9hZGVkOiBib29sZWFuO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5pc0xvYWRlZCA9IGZhbHNlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBpc1JlYWR5KCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLmlzTG9hZGVkO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogVXNlZCB3aGVuIHRoZXJlIGlzIGluaXRpYWxpemF0aW9uIHRpbWUgb24gdGhlIGxvY2FsIHN0b3JhZ2UgYWRhcHRlci5cclxuICAgICAqL1xyXG4gICAgcHVibGljIHdhaXRGb3JTZXJ2aWNlKGNhbGxiYWNrOiAoKSA9PiB2b2lkKTogdm9pZCB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNSZWFkeSgpKSB7XHJcbiAgICAgICAgICAgIGNhbGxiYWNrKCk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMud2FpdEZvclNlcnZpY2UoY2FsbGJhY2spLCA1MCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbmFic3RyYWN0IGNsYXNzIFN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcclxuICAgIHByb3RlY3RlZCBzdG9yYWdlOiBhbnk7XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnN0b3JhZ2Vba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc0luPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgdGhpcy5zdG9yYWdlW2tleV0gPSB2YWx1ZTtcclxuICAgICAgICB9IGNhdGNoIChleCkge31cclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgcmVtb3ZlSXRlbShrZXk6IHN0cmluZykge1xyXG4gICAgICAgIHRoaXMuc3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgTG9jYWxTdG9yYWdlQWRhcHRlciBleHRlbmRzIFN0b3JhZ2VBZGFwdGVyIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zdG9yYWdlID0gd2luZG93LmxvY2FsU3RvcmFnZTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdMb2NhbFN0b3JhZ2VBZGFwdGVyJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBsb2NhbEluZm8uc3VwcG9ydHNMb2NhbFN0b3JhZ2U7XHJcbiAgICB9XHJcbn1cclxuY2xhc3MgU2Vzc2lvblN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnN0b3JhZ2UgPSB3aW5kb3cuc2Vzc2lvblN0b3JhZ2U7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiAnU2Vzc2lvblN0b3JhZ2VBZGFwdGVyJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGlzQXZhaWxhYmxlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgIHJldHVybiBsb2NhbEluZm8uc3VwcG9ydHNTZXNzaW9uU3RvcmFnZTtcclxuICAgIH1cclxufVxyXG5jbGFzcyBGaXJlZm94U3RvcmFnZUFkYXB0ZXIgZXh0ZW5kcyBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICByZXR1cm4gbG9jYWxJbmZvLmlzRkYgJiYgd2luZG93WydnbG9iYWxTdG9yYWdlJ107XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiAnRmlyZWZveFN0b3JhZ2VBZGFwdGVyJztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgZ2V0SXRlbShrZXk6IHN0cmluZyk6IHN0cmluZyB7XHJcbiAgICAgICAgcmV0dXJuIHdpbmRvd1snZ2xvYmFsU3RvcmFnZSddW2xvY2F0aW9uLmhvc3RuYW1lXVtrZXldO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICB3aW5kb3dbJ2dsb2JhbFN0b3JhZ2UnXVtsb2NhdGlvbi5ob3N0bmFtZV1ba2V5XSA9IHZhbHVlO1xyXG4gICAgICAgIH0gY2F0Y2ggKGV4KSB7fVxyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgZGVsZXRlIHdpbmRvd1snZ2xvYmFsU3RvcmFnZSddW2xvY2F0aW9uLmhvc3RuYW1lXVtrZXldO1xyXG4gICAgfVxyXG59XHJcbmRlY2xhcmUgY2xhc3MgU3dmU3RvcmUge1xyXG4gICAgY29uc3RydWN0b3IocHJvcGVydGllczogYW55KTtcclxuICAgIHB1YmxpYyBnZXQoa2V5OiBzdHJpbmcpOiBzdHJpbmc7XHJcbiAgICBwdWJsaWMgc2V0KGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nKTogdm9pZDtcclxuICAgIHB1YmxpYyBjbGVhcihrZXk6IHN0cmluZyk6IHZvaWQ7XHJcbn1cclxuY2xhc3MgRmxhc2hBc3luY1N0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RBc3luY0xvY2FsU3RvcmFnZUFkYXB0ZXIge1xyXG4gICAgcHVibGljIHN0YXRpYyBpc0F2YWlsYWJsZSgpOiBib29sZWFuIHtcclxuICAgICAgICAvLyBUaGVyZSBpcyBubyBjdXJyZW50IHNjZW5hcmlvIHdoZXJlIHVzaW5nIEZsYXNoIFN0b3JhZ2UgaXMgaGVscGZ1bCBvdXRzaWRlIG9mIElFLlxyXG4gICAgICAgIHJldHVybiBsb2NhbEluZm8uc3VwcG9ydHNGbGFzaCAmJiAobG9jYWxJbmZvLmlzSUUgfHwgbG9jYWxJbmZvLmlzRWRnZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIHN3ZlN0b3JlOiBTd2ZTdG9yZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAvLyBMb2FkIFNXRiBzdG9yZSBsaWJyYXJ5LlxyXG4gICAgICAgIHRoaXMubG9hZFN3ZlN0b3JlKGlzU3VjY2VzcyA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuaXNMb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGF0aWMgZ2V0TmFtZSgpIHtcclxuICAgICAgICByZXR1cm4gJ0ZsYXNoQXN5bmNTdG9yYWdlQWRhcHRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBGaXJzdCwgbG9hZCB0aGUgSmF2YVNjcmlwdCBzd2ZzdG9yZSBTREsuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBsb2FkU3dmU3RvcmUoY2FsbGJhY2s6IChpc1N1Y2Nlc3M6IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICAvLyBMb2FkIFN3ZlN0b3JlIGlmIG5lY2Vzc2FyeS5cclxuICAgICAgICBpZiAod2luZG93WydTd2ZTdG9yZSddKSB7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVN3ZlN0b3JlKCgpID0+IHRoaXMubG9hZFN3ZlN0b3JlKGNhbGxiYWNrKSk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNjcmlwdFV0aWxzLmxvYWQoXHJcbiAgICAgICAgICAgICdodHRwczovL2NkbnMuZ2lneWEuY29tL2dzL2pzL3N3ZnN0b3JlLm1pbi5qcycsXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIEVycm9yIGhhbmRsZXIuXHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnRmFpbGVkIHRvIGxvYWQgR2lneWEgU3dmU3RvcmUuJyk7XHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhmYWxzZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIFN1Y2Nlc3MgaGFuZGxlci5cclxuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVN3ZlN0b3JlKGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdHJ1ZSwgLy8gTG9hZCBvbmx5IG9uY2VcclxuICAgICAgICApO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICogSW5paXRhbGl6ZSB0aGUgU3dmU3RvcmUgY2xhc3MuXHJcbiAgICAgKi9cclxuICAgIHByb3RlY3RlZCBpbml0aWFsaXplU3dmU3RvcmUoY2FsbGJhY2s6IChpc1N1Y2Nlc3M6IGJvb2xlYW4pID0+IHZvaWQpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN3ZlN0b3JlID0gbmV3IFN3ZlN0b3JlKHtcclxuICAgICAgICAgICAgbmFtZXNwYWNlOiAnZ2lnU1NPJyxcclxuICAgICAgICAgICAgc3dmX3VybDogJ2h0dHBzOi8vY2Rucy5naWd5YS5jb20vZ3Mvc3dmL3N3ZnN0b3JlLnN3ZicsXHJcbiAgICAgICAgICAgIG9ucmVhZHk6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2sodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIG9uZXJyb3I6IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ0ZhaWxlZCB0byBpbml0aWFsaXplIEdpZ3lhIFN3ZlN0b3JlLicpO1xyXG4gICAgICAgICAgICAgICAgY2FsbGJhY2soZmFsc2UpO1xyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5zd2ZTdG9yZS5nZXQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc0luPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zd2ZTdG9yZS5zZXQoa2V5LCB2YWx1ZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHJlbW92ZUl0ZW0oa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN3ZlN0b3JlLmNsZWFyKGtleSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIENvb2tpZVN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZVV0aWxzLmNhblNhdmVDb29raWUoKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhdGljIGdldE5hbWUoKSB7XHJcbiAgICAgICAgcmV0dXJuICdDb29raWVTdG9yYWdlQWRhcHRlcic7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgICAgIHJldHVybiBjb29raWVVdGlscy5nZXQoa2V5KTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc0luPzogbnVtYmVyLCBkb21haW4/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBjb29raWVVdGlscy5zZXQoa2V5LCB2YWx1ZSwgZXhwaXJlc0luLCBkb21haW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKSB7XHJcbiAgICAgICAgY29va2llVXRpbHMucmVtb3ZlKGtleSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIE1lbW9yeVN0b3JhZ2VBZGFwdGVyIGV4dGVuZHMgQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcclxuICAgIHB1YmxpYyBzdGF0aWMgaXNBdmFpbGFibGUoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICB9XHJcblxyXG4gICAgcHJvdGVjdGVkIG1lbW9yeTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMubWVtb3J5ID0ge307XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXRpYyBnZXROYW1lKCkge1xyXG4gICAgICAgIHJldHVybiAnTWVtb3J5U3RvcmFnZUFkYXB0ZXInO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBnZXRJdGVtKGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgICAgICByZXR1cm4gdGhpcy5tZW1vcnlba2V5XTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc2V0SXRlbShrZXk6IHN0cmluZywgdmFsdWU6IHN0cmluZywgZXhwaXJlc0luPzogbnVtYmVyKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5tZW1vcnlba2V5XSA9IHZhbHVlO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyByZW1vdmVJdGVtKGtleTogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgZGVsZXRlIHRoaXMubWVtb3J5W2tleV07XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJcyBwZXJzaXN0ZW50IHN0b3JhZ2UuIFJldHVybnMgZmFsc2Ugd2hlbiBkYXRhIGlzIG5vdCBwZXJzaXN0ZWQuXHJcbiAgICAgKi9cclxuICAgIHB1YmxpYyBpc1BlcnNpc3RlbnQoKSB7XHJcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjb25zdCBhZGFwdGVyczogQXJyYXk8YW55PiA9IFtcclxuICAgIExvY2FsU3RvcmFnZUFkYXB0ZXIsXHJcbiAgICBTZXNzaW9uU3RvcmFnZUFkYXB0ZXIsXHJcbiAgICBGaXJlZm94U3RvcmFnZUFkYXB0ZXIsXHJcbiAgICBGbGFzaEFzeW5jU3RvcmFnZUFkYXB0ZXIsXHJcbiAgICBDb29raWVTdG9yYWdlQWRhcHRlcixcclxuICAgIE1lbW9yeVN0b3JhZ2VBZGFwdGVyLFxyXG5dO1xyXG5leHBvcnQgY29uc3QgaW5zdGFuY2VzOiB7IFtrZXk6IHN0cmluZ106IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlciB9ID0ge307XHJcbmV4cG9ydCBmdW5jdGlvbiBpbml0aWFsaXplQWRhcHRlcihhZGFwdGVyOiB7IG5hbWU/OiBzdHJpbmc7IGdldE5hbWU6ICgpID0+IHN0cmluZyB9ICYgKG5ldyAoKSA9PiBBYnN0cmFjdExvY2FsU3RvcmFnZUFkYXB0ZXIpKSB7XHJcbiAgICBjb25zdCBhZGFwdGVyTmFtZSA9IGFkYXB0ZXIuZ2V0TmFtZSgpIHx8IGFkYXB0ZXIubmFtZTtcclxuICAgIGlmICghaW5zdGFuY2VzW2FkYXB0ZXJOYW1lXSkge1xyXG4gICAgICAgIGluc3RhbmNlc1thZGFwdGVyTmFtZV0gPSBuZXcgYWRhcHRlcigpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGluc3RhbmNlc1thZGFwdGVyTmFtZV07XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHdhaXRGb3JTZXJ2aWNlKCk6IEFic3RyYWN0TG9jYWxTdG9yYWdlQWRhcHRlcjtcclxuZXhwb3J0IGZ1bmN0aW9uIHdhaXRGb3JTZXJ2aWNlKGNhbGxiYWNrOiAoc3RvcmFnZTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyKSA9PiB2b2lkKTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyO1xyXG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvclNlcnZpY2UoY2FsbGJhY2s/OiAoc3RvcmFnZTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyKSA9PiB2b2lkKTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyIHtcclxuICAgIC8vIFNlbGVjdCBjb21wYXRpYmxlIGFkYXB0ZXIuXHJcbiAgICBsZXQgc3RvcmFnZTogQWJzdHJhY3RMb2NhbFN0b3JhZ2VBZGFwdGVyO1xyXG4gICAgZm9yIChjb25zdCBhZGFwdGVyIG9mIGFkYXB0ZXJzKSB7XHJcbiAgICAgICAgaWYgKGFkYXB0ZXIuaXNBdmFpbGFibGUoKSkge1xyXG4gICAgICAgICAgICAvLyBEb24ndCBzZWxlY3QgYWRhcHRlciBpZiBpdCdzIGFzeW5jIGFuZCBhIGNhbGxiYWNrIHdhc24ndCBwcm92aWRlZC5cclxuICAgICAgICAgICAgaWYgKGFkYXB0ZXIucHJvdG90eXBlIGluc3RhbmNlb2YgQWJzdHJhY3RBc3luY0xvY2FsU3RvcmFnZUFkYXB0ZXIgJiYgIWNhbGxiYWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgc3RvcmFnZSA9IGluaXRpYWxpemVBZGFwdGVyKGFkYXB0ZXIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLy8gRmFsbGJhY2sgdG8gbWVtb3J5LWJhc2VkIG5vbi1wZXJzaXN0ZW50IHN0b3JhZ2UuXHJcbiAgICBpZiAoIXN0b3JhZ2UpIHtcclxuICAgICAgICBzdG9yYWdlID0gaW5pdGlhbGl6ZUFkYXB0ZXIoTWVtb3J5U3RvcmFnZUFkYXB0ZXIpO1xyXG4gICAgfVxyXG5cclxuICAgIC8vIFRyaWdnZXIgY2FsbGJhY2sgd2hlbiBhZGFwdGVyIGZpbmlzaGVzIGxvYWRpbmcgKG9yIGluc3RhbnRseSwgaWYgbm90IHJlcXVpcmVkIHRvIHdhaXQpLlxyXG4gICAgaWYgKGNhbGxiYWNrKSB7XHJcbiAgICAgICAgaWYgKHN0b3JhZ2UgaW5zdGFuY2VvZiBBYnN0cmFjdEFzeW5jTG9jYWxTdG9yYWdlQWRhcHRlcikge1xyXG4gICAgICAgICAgICBzdG9yYWdlLndhaXRGb3JTZXJ2aWNlKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIGNhbGxiYWNrKHN0b3JhZ2UpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBjYWxsYmFjayhzdG9yYWdlKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gc3RvcmFnZTtcclxufVxyXG5jb25zdCBhZGFwdGVyID0gd2FpdEZvclNlcnZpY2UoKTtcclxuZXhwb3J0IGZ1bmN0aW9uIGdldEl0ZW0oa2V5OiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGFkYXB0ZXIuZ2V0SXRlbShrZXkpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRJdGVtKGtleTogc3RyaW5nLCB2YWx1ZTogc3RyaW5nLCBleHBpcmVzSW4/OiBudW1iZXIpOiB2b2lkIHtcclxuICAgIHJldHVybiBhZGFwdGVyLnNldEl0ZW0oa2V5LCB2YWx1ZSwgZXhwaXJlc0luKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlSXRlbShrZXk6IHN0cmluZyk6IHZvaWQge1xyXG4gICAgcmV0dXJuIGFkYXB0ZXIucmVtb3ZlSXRlbShrZXkpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzZXRPYmplY3Qoa2V5OiBzdHJpbmcsIG86IE9iamVjdCk6IHZvaWQge1xyXG4gICAgcmV0dXJuIGFkYXB0ZXIuc2V0T2JqZWN0KGtleSwgbyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE9iamVjdChrZXk6IHN0cmluZywgZGVmYXVsdFZhbHVlPzogYW55KTogT2JqZWN0IHtcclxuICAgIHJldHVybiBhZGFwdGVyLmdldE9iamVjdChrZXksIGRlZmF1bHRWYWx1ZSk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgSlNPTlV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OJztcclxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZVVuZGVmaW5lZChvOiBPYmplY3QpOiBPYmplY3Qge1xyXG4gICAgdmFyIG8yID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIG8pIHtcclxuICAgICAgICBpZiAob1twXSAhPSBudWxsICYmIG9bcF0gIT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgIG8yW3BdID0gb1twXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbzI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGV4cHJlc3Npb25IZWxwZXIoY29udGV4dCkge1xyXG4gICAgY29udGV4dCA9IGNvbnRleHQgfHwge307XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIGdldEZpZWxkOiBmdW5jdGlvbihwYXRoKSB7XHJcbiAgICAgICAgICAgIGlmICghcGF0aCkgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgdmFyIHBhdGhzID0gcGF0aC5zcGxpdCgnLicpLFxyXG4gICAgICAgICAgICAgICAgY3VycmVudCA9IGNvbnRleHQsXHJcbiAgICAgICAgICAgICAgICBpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgKytpKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudFtwYXRoc1tpXV0gPT0gdW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbcGF0aHNbaV1dO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBjdXJyZW50O1xyXG4gICAgICAgIH0sXHJcbiAgICB9O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRQcm9wZXJ0eUJ5U2VyaWFsaXplZE5hbWUobzogT2JqZWN0LCBuYW1lOiBzdHJpbmcsIGNyZWF0ZU1pc3NpbmdPYmplY3RzOiBib29sZWFuKTogYW55IHtcclxuICAgIGlmICghbmFtZSkgcmV0dXJuIG87XHJcbiAgICB2YXIgb1Jlc3VsdCA9IG87XHJcbiAgICB2YXIgYXJOYW1lU2VnbWVudHMgPSBuYW1lLnNwbGl0KCcuJyk7XHJcbiAgICBmb3IgKHZhciBpU2VnbWVudCA9IDA7IGlTZWdtZW50IDwgYXJOYW1lU2VnbWVudHMubGVuZ3RoOyBpU2VnbWVudCsrKSB7XHJcbiAgICAgICAgdmFyIHNTZWdtZW50ID0gYXJOYW1lU2VnbWVudHNbaVNlZ21lbnRdO1xyXG4gICAgICAgIHZhciBzSW5kZXggPSBudWxsO1xyXG4gICAgICAgIC8vU3VwcG9ydCBmb3IgYXJyYXkgYWNjZXNzLiBpLmUuIFwib2JqLnByb3AxWzBdLnByb3AyXCJcclxuICAgICAgICBpZiAoc1NlZ21lbnQubWF0Y2goL1xcW1swLTldXS8pKSB7XHJcbiAgICAgICAgICAgIHNJbmRleCA9IE51bWJlcihzU2VnbWVudC5tYXRjaCgvXFxbWzAtOV1dLylbMF0ucmVwbGFjZSgvW1xcW1xcXV0vZywgJycpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgc1NlZ21lbnQgPSBzU2VnbWVudC5zcGxpdCgvXFxbWzAtOV1dLykuam9pbignJyk7XHJcbiAgICAgICAgdmFyIHJlcyA9IChzSW5kZXggfHwgc0luZGV4ID09PSAwKSAmJiBvUmVzdWx0W3NTZWdtZW50XSA/IG9SZXN1bHRbc1NlZ21lbnRdW3NJbmRleF0gOiBvUmVzdWx0W3NTZWdtZW50XTtcclxuICAgICAgICBpZiAoY3JlYXRlTWlzc2luZ09iamVjdHMgJiYgIW9SZXN1bHRbc1NlZ21lbnRdKSB7XHJcbiAgICAgICAgICAgIG9SZXN1bHRbc1NlZ21lbnRdID0ge307XHJcbiAgICAgICAgfSBlbHNlIGlmIChjcmVhdGVNaXNzaW5nT2JqZWN0cyAmJiAhcmVzICYmIHJlcyAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgb1Jlc3VsdFtzU2VnbWVudF0gPSBbXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKHJlcyB8fCByZXMgPT09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIG9SZXN1bHQgPSByZXM7XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIG9SZXN1bHQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIHNldFByb3BlcnR5QnlTZXJpYWxpemVkTmFtZShvOiBPYmplY3QsIG5hbWU6IHN0cmluZywgdmFsdWU6IGFueSk6IHZvaWQge1xyXG4gICAgdmFyIGFyTmFtZVNlZ21lbnRzID0gbmFtZS5zcGxpdCgnLicpO1xyXG4gICAgdmFyIHByb3BlcnR5TmFtZSA9IGFyTmFtZVNlZ21lbnRzLnBvcCgpO1xyXG4gICAgZ2V0UHJvcGVydHlCeVNlcmlhbGl6ZWROYW1lKG8sIGFyTmFtZVNlZ21lbnRzLmpvaW4oJy4nKSwgdHJ1ZSlbcHJvcGVydHlOYW1lXSA9IHZhbHVlO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBhZGQob1RhcmdldDogT2JqZWN0LCBvOiBPYmplY3QsIGRvbnRPdmVycmlkZT86IGJvb2xlYW4pOiB2b2lkIHtcclxuICAgIGZvciAodmFyIHAgaW4gbykge1xyXG4gICAgICAgIGlmICghZG9udE92ZXJyaWRlIHx8IHR5cGVvZiBvVGFyZ2V0W3BdID09PSAndW5kZWZpbmVkJykge1xyXG4gICAgICAgICAgICBvVGFyZ2V0W3BdID0gb1twXTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldEhhc2gobzogYW55KTogc3RyaW5nIHtcclxuICAgIHZhciBhciA9IFtdO1xyXG4gICAgZm9yICh2YXIgcCBpbiBvKSB7XHJcbiAgICAgICAgdmFyIHM7XHJcblxyXG4gICAgICAgIGlmICh0eXBlb2Ygb1twXSA9PSAnb2JqZWN0JykgcyA9IEpTT05VdGlscy5zZXJpYWxpemUob1twXSwgZmFsc2UpO1xyXG4gICAgICAgIGVsc2UgaWYgKG9bcF0pIHMgPSBvW3BdLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIGFyLnB1c2gocCArICc9JyArIHMpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyLnNvcnQoKS5qb2luKCcmJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldE11cm11ckhhc2goa2V5OiBzdHJpbmcsIHNlZWQ/OiBudW1iZXIpIHtcclxuICAgIGlmICghc2VlZCkgc2VlZCA9IDA7XHJcbiAgICB2YXIgcmVtYWluZGVyLCBieXRlcywgaDEsIGgxYiwgYzEsIGMxYiwgYzIsIGMyYiwgazEsIGk7XHJcblxyXG4gICAgcmVtYWluZGVyID0ga2V5Lmxlbmd0aCAmIDM7IC8vIGtleS5sZW5ndGggJSA0XHJcbiAgICBieXRlcyA9IGtleS5sZW5ndGggLSByZW1haW5kZXI7XHJcbiAgICBoMSA9IHNlZWQ7XHJcbiAgICBjMSA9IDB4Y2M5ZTJkNTE7XHJcbiAgICBjMiA9IDB4MWI4NzM1OTM7XHJcbiAgICBpID0gMDtcclxuXHJcbiAgICB3aGlsZSAoaSA8IGJ5dGVzKSB7XHJcbiAgICAgICAgazEgPSAoa2V5LmNoYXJDb2RlQXQoaSkgJiAweGZmKSB8ICgoa2V5LmNoYXJDb2RlQXQoKytpKSAmIDB4ZmYpIDw8IDgpIHwgKChrZXkuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMTYpIHwgKChrZXkuY2hhckNvZGVBdCgrK2kpICYgMHhmZikgPDwgMjQpO1xyXG4gICAgICAgICsraTtcclxuXHJcbiAgICAgICAgazEgPSAoKGsxICYgMHhmZmZmKSAqIGMxICsgKCgoKGsxID4+PiAxNikgKiBjMSkgJiAweGZmZmYpIDw8IDE2KSkgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgIGsxID0gKGsxIDw8IDE1KSB8IChrMSA+Pj4gMTcpO1xyXG4gICAgICAgIGsxID0gKChrMSAmIDB4ZmZmZikgKiBjMiArICgoKChrMSA+Pj4gMTYpICogYzIpICYgMHhmZmZmKSA8PCAxNikpICYgMHhmZmZmZmZmZjtcclxuXHJcbiAgICAgICAgaDEgXj0gazE7XHJcbiAgICAgICAgaDEgPSAoaDEgPDwgMTMpIHwgKGgxID4+PiAxOSk7XHJcbiAgICAgICAgaDFiID0gKChoMSAmIDB4ZmZmZikgKiA1ICsgKCgoKGgxID4+PiAxNikgKiA1KSAmIDB4ZmZmZikgPDwgMTYpKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICAgICAgaDEgPSAoaDFiICYgMHhmZmZmKSArIDB4NmI2NCArICgoKChoMWIgPj4+IDE2KSArIDB4ZTY1NCkgJiAweGZmZmYpIDw8IDE2KTtcclxuICAgIH1cclxuXHJcbiAgICBrMSA9IDA7XHJcblxyXG4gICAgc3dpdGNoIChyZW1haW5kZXIpIHtcclxuICAgICAgICBjYXNlIDM6XHJcbiAgICAgICAgICAgIGsxIF49IChrZXkuY2hhckNvZGVBdChpICsgMikgJiAweGZmKSA8PCAxNjtcclxuICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgIGsxIF49IChrZXkuY2hhckNvZGVBdChpICsgMSkgJiAweGZmKSA8PCA4O1xyXG4gICAgICAgIGNhc2UgMTpcclxuICAgICAgICAgICAgazEgXj0ga2V5LmNoYXJDb2RlQXQoaSkgJiAweGZmO1xyXG5cclxuICAgICAgICAgICAgazEgPSAoKGsxICYgMHhmZmZmKSAqIGMxICsgKCgoKGsxID4+PiAxNikgKiBjMSkgJiAweGZmZmYpIDw8IDE2KSkgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgICAgICBrMSA9IChrMSA8PCAxNSkgfCAoazEgPj4+IDE3KTtcclxuICAgICAgICAgICAgazEgPSAoKGsxICYgMHhmZmZmKSAqIGMyICsgKCgoKGsxID4+PiAxNikgKiBjMikgJiAweGZmZmYpIDw8IDE2KSkgJiAweGZmZmZmZmZmO1xyXG4gICAgICAgICAgICBoMSBePSBrMTtcclxuICAgIH1cclxuXHJcbiAgICBoMSBePSBrZXkubGVuZ3RoO1xyXG5cclxuICAgIGgxIF49IGgxID4+PiAxNjtcclxuICAgIGgxID0gKChoMSAmIDB4ZmZmZikgKiAweDg1ZWJjYTZiICsgKCgoKGgxID4+PiAxNikgKiAweDg1ZWJjYTZiKSAmIDB4ZmZmZikgPDwgMTYpKSAmIDB4ZmZmZmZmZmY7XHJcbiAgICBoMSBePSBoMSA+Pj4gMTM7XHJcbiAgICBoMSA9ICgoaDEgJiAweGZmZmYpICogMHhjMmIyYWUzNSArICgoKChoMSA+Pj4gMTYpICogMHhjMmIyYWUzNSkgJiAweGZmZmYpIDw8IDE2KSkgJiAweGZmZmZmZmZmO1xyXG4gICAgaDEgXj0gaDEgPj4+IDE2O1xyXG5cclxuICAgIHJldHVybiBoMSA+Pj4gMDtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2xvbmUob2JqOiBhbnksIGRlZXBDb3B5PzogYm9vbGVhbiwgaWdub3JlRnVuY3Rpb25zPzogYm9vbGVhbiwgbWF4TGV2ZWw6IG51bWJlciA9IDIwLCBsZXZlbDogbnVtYmVyID0gMCwgaWdub3JlQ29udGV4dD86IGJvb2xlYW4pOiBhbnkge1xyXG4gICAgaWYgKGxldmVsID4gbWF4TGV2ZWwpIHJldHVybiBudWxsOyAvLyBUb28gZGVlcFxyXG4gICAgaWYgKHR5cGVvZiBvYmogPT0gJ3VuZGVmaW5lZCcgfHwgb2JqID09IG51bGwpIHtcclxuICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgIH0gZWxzZSBpZiAodHlwZW9mIG9iaiA9PSAnZnVuY3Rpb24nICYmIGlnbm9yZUZ1bmN0aW9ucykge1xyXG4gICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgfSBlbHNlIGlmIChvYmouY29uc3RydWN0b3IgPT0gQXJyYXkpIHtcclxuICAgICAgICB2YXIgYXIgPSBbXTtcclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iai5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoIWlnbm9yZUZ1bmN0aW9ucyB8fCB0eXBlb2Ygb2JqW2ldICE9ICdmdW5jdGlvbicpIHtcclxuICAgICAgICAgICAgICAgIGlmIChkZWVwQ29weSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFyW2ldID0gY2xvbmUob2JqW2ldLCBkZWVwQ29weSwgaWdub3JlRnVuY3Rpb25zLCBtYXhMZXZlbCwgbGV2ZWwgKyAxLCBpZ25vcmVDb250ZXh0KTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXJbaV0gPSBvYmpbaV07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIGFyO1xyXG4gICAgfSBlbHNlIGlmICh0eXBlb2Ygb2JqID09ICdvYmplY3QnKSB7XHJcbiAgICAgICAgdmFyIG8gPSB7fTtcclxuICAgICAgICBmb3IgKHZhciBwIGluIG9iaikge1xyXG4gICAgICAgICAgICBpZiAoaWdub3JlQ29udGV4dCAmJiBwID09ICdjb250ZXh0JykgY29udGludWU7XHJcbiAgICAgICAgICAgIGlmICghaWdub3JlRnVuY3Rpb25zIHx8IHR5cGVvZiBvYmpbcF0gIT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgaWYgKGRlZXBDb3B5KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgb1twXSA9IGNsb25lKG9ialtwXSwgZGVlcENvcHksIGlnbm9yZUZ1bmN0aW9ucywgbWF4TGV2ZWwsIGxldmVsICsgMSwgaWdub3JlQ29udGV4dCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIG9bcF0gPSBvYmpbcF07XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIG87XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBvYmo7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlKGFyZ3M6IE9iamVjdFtdLCBpc0RlZXBNZXJnZT86IGJvb2xlYW4pOiBPYmplY3Q7XHJcbmV4cG9ydCBmdW5jdGlvbiBtZXJnZShhcmdzOiBhbnlbXSwgaXNEZWVwTWVyZ2U/OiBib29sZWFuKTogT2JqZWN0IHtcclxuICAgIHZhciBvID0ge307XHJcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyZ3MubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBpZiAoYXJnc1tpXSAmJiBhcmdzW2ldLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBmb3IgKHZhciB1ID0gMDsgdSA8IGFyZ3NbaV0ubGVuZ3RoOyB1KyspIHtcclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gYXJnc1tpXVt1XSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9bcF0gPSBhcmdzW2ldW3VdW3BdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgLy8gTWVyZ2Ugb2JqZWN0cy5cclxuICAgICAgICAgICAgaWYgKCFpc0RlZXBNZXJnZSkge1xyXG4gICAgICAgICAgICAgICAgLy8gRmxhdCBtZXJnZS5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gYXJnc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIG9bcF0gPSBhcmdzW2ldW3BdO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy8gRGVlcCBtZXJnZS5cclxuICAgICAgICAgICAgICAgIGZvciAodmFyIHAgaW4gYXJnc1tpXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vd2Ugb3ZlcnJpZGUgcHJpbWl0aXZlIC8gYXJyYXlcclxuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9bcF0gIT09ICdvYmplY3QnIHx8IG9bcF0gaW5zdGFuY2VvZiBBcnJheSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvW3BdID0gYXJnc1tpXVtwXTtcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvW3BdID0gbWVyZ2UoW29bcF0sIGFyZ3NbaV1bcF1dLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gbztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdW5mbGF0dGVuKGRhdGE6IHsgW2tleTogc3RyaW5nXTogc3RyaW5nIH0pOiBPYmplY3Qge1xyXG4gICAgaWYgKE9iamVjdChkYXRhKSAhPT0gZGF0YSB8fCBBcnJheS5pc0FycmF5KGRhdGEpKSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuICAgIGZvciAobGV0IHAgaW4gZGF0YSkge1xyXG4gICAgICAgIGxldCBjdXIgPSByZXN1bHQ7XHJcbiAgICAgICAgbGV0IHByb3AgPSAnJztcclxuICAgICAgICBjb25zdCBwYXJ0cyA9IHAuc3BsaXQoJy4nKTtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGlkeCA9ICFpc05hTihOdW1iZXIocGFydHNbaV0pKTtcclxuICAgICAgICAgICAgY3VyID0gY3VyW3Byb3BdIHx8IChjdXJbcHJvcF0gPSBpZHggPyBbXSA6IHt9KTtcclxuICAgICAgICAgICAgcHJvcCA9IHBhcnRzW2ldO1xyXG4gICAgICAgIH1cclxuICAgICAgICBjdXJbcHJvcF0gPSBkYXRhW3BdO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIHJlc3VsdFsnJ10gfHwge307XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZsYXR0ZW4oZGF0YTogYW55LCB3aXRoQnJhY2tldCA9IGZhbHNlKTogeyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSB7fTtcclxuICAgIGZ1bmN0aW9uIHJlY3Vyc2UoY3VyOiBhbnksIHByb3A6IHN0cmluZykge1xyXG4gICAgICAgIGlmIChPYmplY3QoY3VyKSAhPT0gY3VyKSB7XHJcbiAgICAgICAgICAgIHJlc3VsdFtwcm9wXSA9IGN1cjtcclxuICAgICAgICB9IGVsc2UgaWYgKEFycmF5LmlzQXJyYXkoY3VyKSkge1xyXG4gICAgICAgICAgICBjb25zdCBsID0gY3VyLmxlbmd0aDtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHZhciBuZXN0ZWRQcm9wZXJ0eSA9IHdpdGhCcmFja2V0ID8gYCR7cHJvcH1bJHtpfV1gIDogYCR7cHJvcH0uJHtpfWA7XHJcbiAgICAgICAgICAgICAgICByZWN1cnNlKGN1cltpXSwgcHJvcCA/IG5lc3RlZFByb3BlcnR5IDogU3RyaW5nKGkpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAobCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0gW107XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBsZXQgaXNFbXB0eSA9IHRydWU7XHJcbiAgICAgICAgICAgIGZvciAoY29uc3QgcCBpbiBjdXIpIHtcclxuICAgICAgICAgICAgICAgIGlzRW1wdHkgPSBmYWxzZTtcclxuICAgICAgICAgICAgICAgIHJlY3Vyc2UoY3VyW3BdLCBwcm9wID8gYCR7cHJvcH0uJHtwfWAgOiBwKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoaXNFbXB0eSAmJiBwcm9wICE9PSAnJykge1xyXG4gICAgICAgICAgICAgICAgcmVzdWx0W3Byb3BdID0ge307XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZWN1cnNlKGRhdGEsICcnKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RQcm9wZXJ0aWVzKHNyYzogYW55LCBkZXN0PzogYW55LCBzY2hlbWE/OiBTdHJpbmcpOiBPYmplY3Qge1xyXG4gICAgaWYgKHNyYyA9PSBudWxsKSByZXR1cm47XHJcbiAgICBpZiAoZGVzdCA9PSBudWxsKSBkZXN0ID0ge307XHJcbiAgICBpZiAoc3JjLmNvbnN0cnVjdG9yID09IEFycmF5KSB7XHJcbiAgICAgICAgZm9yICh2YXIgaVNyYyA9IDA7IGlTcmMgPCBzcmMubGVuZ3RoOyBpU3JjKyspIHtcclxuICAgICAgICAgICAgZXh0cmFjdFByb3BlcnRpZXMoc3JjW2lTcmNdLCBkZXN0LCBzY2hlbWEpO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSBpZiAoc2NoZW1hKSB7XHJcbiAgICAgICAgdmFyIGFyU2NoZW1hID0gc2NoZW1hLnNwbGl0KCd8Jyk7XHJcbiAgICAgICAgdmFyIHNyY0xDYXNlID0ge307XHJcbiAgICAgICAgZm9yICh2YXIgZmllbGROYW1lIGluIHNyYykge1xyXG4gICAgICAgICAgICBzcmNMQ2FzZVtmaWVsZE5hbWUudG9Mb3dlckNhc2UoKV0gPSAxO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGFyU2NoZW1hLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIHZhciBmaWVsZE5hbWUyID0gYXJTY2hlbWFbaV07XHJcbiAgICAgICAgICAgIGlmIChzcmNMQ2FzZVtmaWVsZE5hbWUyLnRvTG93ZXJDYXNlKCldKSBkZXN0W2ZpZWxkTmFtZTJdID0gc3JjW2ZpZWxkTmFtZTJdO1xyXG4gICAgICAgIH1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZGVzdCA9IGNsb25lKHNyYywgZmFsc2UpO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIGRlc3Q7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RQcm9wZXJ0eShzcmM6IGFueSwgcGFyYW1OYW1lOiBzdHJpbmcpOiBhbnkge1xyXG4gICAgdmFyIHBhcmFtcztcclxuICAgIHJldHVybiBleHRyYWN0UHJvcGVydGllcyhzcmMsIHBhcmFtcywgcGFyYW1OYW1lKVtwYXJhbU5hbWVdO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBwYXJzZVRvT2JqZWN0KHN0cjogc3RyaW5nKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IHBhcnNlZFZhbCA9IHdpbmRvd1snSlNPTiddLnBhcnNlKHN0cik7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBwYXJzZWRWYWwgPT0gJ29iamVjdCcpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZFZhbDtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChlKSB7fVxyXG5cclxuICAgIHJldHVybiB1bmRlZmluZWQ7XHJcbn1cclxuIiwiXHJcbnZhciBfcSA9IHt9O1xyXG5leHBvcnQgZnVuY3Rpb24gX3NlcnZpY2VzU3RhdHVzKCkge1xyXG4gICAgdmFyIHNlcnZpY2VzID0ge307XHJcblxyXG4gICAgZm9yICh2YXIgc2VydmljZSBpbiBfcSkge1xyXG4gICAgICAgIHZhciBhY3RpdmUgPSBpc0FjdGl2ZShzZXJ2aWNlKTtcclxuXHJcbiAgICAgICAgaWYgKGFjdGl2ZSkge1xyXG4gICAgICAgICAgICBzZXJ2aWNlc1tzZXJ2aWNlXSA9IHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHdhaXRpbmdGb3I6IF9xW3NlcnZpY2VdLmlkcyxcclxuICAgICAgICAgICAgICAgIHF1ZXVlZENvdW50OiBfcVtzZXJ2aWNlXS5xLmxlbmd0aCxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXJ2aWNlc1tzZXJ2aWNlXSA9IHtcclxuICAgICAgICAgICAgICAgIGFjdGl2ZTogZmFsc2UsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHJldHVybiBzZXJ2aWNlcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNBY3RpdmUoc2VydmljZTogc3RyaW5nKSB7XHJcbiAgICBpZiAoIV9xW3NlcnZpY2VdKSByZXR1cm4gZmFsc2U7XHJcblxyXG4gICAgZm9yICh2YXIgaWQgaW4gX3Fbc2VydmljZV0uaWRzKSByZXR1cm4gdHJ1ZTtcclxuICAgIHJldHVybiBmYWxzZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVsZWFzZShpZDogc3RyaW5nLCBzZXJ2aWNlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGdpZ3lhLmxvZ2dlci5kZWJ1ZyhgcmVsZWFzaW5nICR7c2VydmljZX0gcXVldWUgYnkgJHtpZH1gKTtcclxuICAgIGlmICghX3Fbc2VydmljZV0pIHJldHVybjtcclxuICAgIGRlbGV0ZSBfcVtzZXJ2aWNlXS5pZHNbaWRdO1xyXG4gICAgaWYgKCFpc0FjdGl2ZShzZXJ2aWNlKSkge1xyXG4gICAgICAgIHZhciBxID0gX3Fbc2VydmljZV0ucTtcclxuICAgICAgICBfcVtzZXJ2aWNlXS5xID0gW107XHJcbiAgICAgICAgd2hpbGUgKHEubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICB2YXIgbyA9IHEuc3BsaWNlKDAsIDEpWzBdO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgby5mdW5jLmFwcGx5KHRoaXMsIG8uYXJncyk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT0gJ29iamVjdCcgJiYgY29uc29sZS5sb2cpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnR2lneWE6IEV4Y2VwdGlvbiB3aGlsZSBpbnZva2luZyBxdWV1ZWQgbWV0aG9kICgnICsgc2VydmljZSArICc6ICcgKyBpZCArICcpJyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGlzQWN0aXZlKHNlcnZpY2UpKSB7XHJcbiAgICAgICAgICAgICAgICAvL3F1ZXVlIGJlY2FtZSBpbmFjdGl2ZVxyXG4gICAgICAgICAgICAgICAgX3Fbc2VydmljZV0ucSA9IHE7XHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaG9sZChpZDogc3RyaW5nLCBzZXJ2aWNlOiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIGdpZ3lhLmxvZ2dlci5kZWJ1ZyhgbG9ja2luZyBxdWV1ZSAke3NlcnZpY2V9IGJ5ICR7aWR9YCk7XHJcblxyXG4gICAgaWYgKCFfcVtzZXJ2aWNlXSkgX3Fbc2VydmljZV0gPSB7IHE6IFtdLCBpZHM6IHt9IH07XHJcbiAgICBfcVtzZXJ2aWNlXS5pZHNbaWRdID0gdHJ1ZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gd2FpdEZvcihzZXJ2aWNlOiBzdHJpbmcsIGZuYzogRnVuY3Rpb24sIGFyZ3M6IGFueVtdKTogdm9pZDtcclxuZXhwb3J0IGZ1bmN0aW9uIHdhaXRGb3Ioc2VydmljZTogc3RyaW5nLCBmbmM6IEZ1bmN0aW9uLCBhcmdzOiBJQXJndW1lbnRzKTogdm9pZDtcclxuZXhwb3J0IGZ1bmN0aW9uIHdhaXRGb3Ioc2VydmljZTogc3RyaW5nLCBmbmM6IEZ1bmN0aW9uLCBhcmdzOiBhbnkpOiB2b2lkIHtcclxuICAgIGlmICghX3Fbc2VydmljZV0pIF9xW3NlcnZpY2VdID0geyBxOiBbXSwgaWRzOiB7fSB9O1xyXG4gICAgX3Fbc2VydmljZV0ucS5wdXNoKHsgZnVuYzogZm5jLCBhcmdzOiBhcmdzIH0pO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBxdWV1ZUZvckV4ZWN1dGlvbihzZXJ2aWNlOiBzdHJpbmcsIGZ1bmM6IEZ1bmN0aW9uLCBhcmdzPzogYW55W10pIHtcclxuICAgIGFyZ3MgPSBhcmdzIHx8IFtdO1xyXG4gICAgaWYgKGlzQWN0aXZlKHNlcnZpY2UpKSB7XHJcbiAgICAgICAgd2FpdEZvcihzZXJ2aWNlLCBmdW5jLCBhcmdzKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgZnVuYy5hcHBseSh0aGlzLCBhcmdzKTtcclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQgeyBVcmkgfSBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvVXJpJztcclxuaW1wb3J0IHsgbG9jYWxJbmZvIH0gZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL0xvY2FsSW5mbyc7XHJcbmltcG9ydCAqIGFzIGFycmF5VXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2FycmF5JztcclxuaW1wb3J0ICogYXMgZnVuY3Rpb25zVXRpbHMgZnJvbSAnc3JjL2NvcmUvR2lneWEuSnMvYXBwL1V0aWxzL2Z1bmN0aW9ucyc7XHJcbmltcG9ydCAqIGFzIERPTVV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9ET00nO1xyXG5pbXBvcnQgeyBnZXRDZG5SZXNvdXJjZSB9IGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9jZG4nO1xyXG5cclxuaW50ZXJmYWNlIElTY3JpcHRQZW5kaW5nIHtcclxuICAgIGxvYWRlZDogYm9vbGVhbjtcclxuICAgIG9uTG9hZDogRnVuY3Rpb25bXTtcclxuICAgIG9uRXJyb3I6IEZ1bmN0aW9uW107XHJcbn1cclxudmFyIHBlbmRpbmc6IHsgW3NyYzogc3RyaW5nXTogSVNjcmlwdFBlbmRpbmcgfSA9IHt9O1xyXG5mdW5jdGlvbiBhZGRTZGtWZXJzaW9uKHVybDogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGxldCBzY3JpcHRVcmwgPSBVcmkucGFyc2UodXJsKTtcclxuICAgIHNjcmlwdFVybC5hZGRUb1NlYXJjaCh7IHZlcnNpb246IGdpZ3lhLmJ1aWxkLnZlcnNpb24gfSk7XHJcbiAgICByZXR1cm4gc2NyaXB0VXJsLnRvU3RyaW5nKCk7XHJcbn1cclxuZnVuY3Rpb24gZm9ybWF0U3JjVXJsKHNyYzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIHJlbW92ZSBjZG4gZG9tYWluIG51bWJlclxyXG4gICAgcmV0dXJuIHNyYy5yZXBsYWNlKC9eaHR0cChzPyk6XFwvXFwvY2RuKHM/KVswLTldKi5naWd5YS5jb21cXC8vLCAnaHR0cCQxOi8vY2RuJDIuZ2lneWEuY29tLycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0xvYWRlZChzcmM6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgdmFyIHBlbmRpbmdTcmMgPSBmb3JtYXRTcmNVcmwoc3JjKTtcclxuXHJcbiAgICByZXR1cm4gQm9vbGVhbihwZW5kaW5nW3BlbmRpbmdTcmNdICYmIHBlbmRpbmdbcGVuZGluZ1NyY10ubG9hZGVkKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gbG9hZChcclxuICAgIHNyYzogc3RyaW5nLFxyXG4gICAgZm5PbkVycm9yPzogKCkgPT4gdm9pZCxcclxuICAgIGZuT25Mb2FkPzogKCkgPT4gdm9pZCxcclxuICAgIGxvYWRPbmNlPzogYm9vbGVhbixcclxuICAgIHJlbW92ZUFmdGVyOiBudW1iZXIgfCBib29sZWFuID0gNTAwMCxcclxuICAgIHRyZWF0VG9nZXRoZXI/OiBzdHJpbmdbXSxcclxuKTogdm9pZCB7XHJcbiAgICB2YXIgb1NjcmlwdDogSVNjcmlwdFBlbmRpbmc7XHJcblxyXG4gICAgaWYgKHNyYy5pbmRleE9mKCcvLycpID09PSAwKSB7XHJcbiAgICAgICAgc3JjID0gbG9jYWxJbmZvLnByb3RvY29sICsgJzonICsgc3JjO1xyXG4gICAgfVxyXG5cclxuICAgIGlmIChsb2FkT25jZSkge1xyXG4gICAgICAgIHZhciBwZW5kaW5nU3JjID0gZm9ybWF0U3JjVXJsKHNyYyk7XHJcblxyXG4gICAgICAgIGlmIChwZW5kaW5nW3BlbmRpbmdTcmNdKSB7XHJcbiAgICAgICAgICAgIGlmIChwZW5kaW5nW3BlbmRpbmdTcmNdLmxvYWRlZCkge1xyXG4gICAgICAgICAgICAgICAgZ2lneWEubG9nZ2VyLmRlYnVnKGBzY3JpcHQgd2FzIGFscmVhZHkgbG9hZGVkOmAsIHsgc3JjIH0pO1xyXG4gICAgICAgICAgICAgICAgaWYgKGZuT25Mb2FkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm5PbkxvYWQoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHBlbmRpbmdbcGVuZGluZ1NyY10ub25Mb2FkLnB1c2goZm5PbkxvYWQpO1xyXG4gICAgICAgICAgICAgICAgcGVuZGluZ1twZW5kaW5nU3JjXS5vbkVycm9yLnB1c2goZm5PbkVycm9yKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBvU2NyaXB0ID0gcGVuZGluZ1twZW5kaW5nU3JjXSA9IHsgbG9hZGVkOiBmYWxzZSwgb25Mb2FkOiBbZm5PbkxvYWRdLCBvbkVycm9yOiBbZm5PbkVycm9yXSB9O1xyXG5cclxuICAgICAgICBpZiAodHJlYXRUb2dldGhlciAmJiB0cmVhdFRvZ2V0aGVyLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgYXJyYXlVdGlscy5mb3JFYWNoKHRyZWF0VG9nZXRoZXIsIHVybCA9PiB7XHJcbiAgICAgICAgICAgICAgICBwZW5kaW5nW3VybF0gPSBvU2NyaXB0O1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIC8vIG11bHRpcGxlIGxvYWRzXHJcbiAgICAgICAgb1NjcmlwdCA9IHsgbG9hZGVkOiBmYWxzZSwgb25Mb2FkOiBbZm5PbkxvYWRdLCBvbkVycm9yOiBbZm5PbkVycm9yXSB9O1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBzY3JpcHRMb2FkZXIgPSBmdW5jdGlvbigpIHtcclxuICAgICAgICB2YXIgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XHJcbiAgICAgICAgc2NyaXB0LmFzeW5jID0gdHJ1ZTtcclxuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xyXG4gICAgICAgIHNjcmlwdC5jaGFyc2V0ID0gJ1VURi04JztcclxuXHJcbiAgICAgICAgdmFyIGRvbmUgPSBmYWxzZTtcclxuICAgICAgICB2YXIgZm5PblNjcmlwdExvYWQgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZG9uZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKG9TY3JpcHQub25Mb2FkICYmIG9TY3JpcHQub25Mb2FkLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb1NjcmlwdC5vbkxvYWQubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBvU2NyaXB0Lm9uTG9hZFtpXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb1NjcmlwdC5vbkxvYWRbaV0oKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBvU2NyaXB0LmxvYWRlZCA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICBvU2NyaXB0Lm9uRXJyb3IgPSBvU2NyaXB0Lm9uTG9hZCA9IG51bGw7IC8vIHJlbW92ZSBtZW1vcnkgbGVha1xyXG5cclxuICAgICAgICAgICAgICAgIGRvbmUgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVBZnRlciA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlbW92ZUFmdGVyID0gMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVBZnRlciAhPT0gZmFsc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcmlwdC5wYXJlbnROb2RlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSwgcmVtb3ZlQWZ0ZXIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuICAgICAgICBzY3JpcHQub25sb2FkID0gZm5PblNjcmlwdExvYWQ7XHJcbiAgICAgICAgc2NyaXB0WydvbnJlYWR5c3RhdGVjaGFuZ2UnXSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5yZWFkeVN0YXRlID09PSAnbG9hZGVkJykge1xyXG4gICAgICAgICAgICAgICAgZm5PblNjcmlwdExvYWQoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHNjcmlwdC5vbmVycm9yID0gZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb1NjcmlwdC5vbkVycm9yLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG9TY3JpcHQub25FcnJvcltpXSA9PT0gJ2Z1bmN0aW9uJykge1xyXG4gICAgICAgICAgICAgICAgICAgIG9TY3JpcHQub25FcnJvcltpXSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGRlbGV0ZSBwZW5kaW5nW3NyY107XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdmFyIGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpO1xyXG4gICAgICAgIGlmIChoZWFkICYmIGhlYWQubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICBoZWFkWzBdLmFwcGVuZENoaWxkKHNjcmlwdCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHZhciBmblNldFNjcmlwdFNyYyA9ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgd2ViU2RrUmVzb3VyY2VzRG9tYWluID0gbmV3IFJlZ0V4cChgXmh0dHBzPzpcXC9cXC9jZG5zPy4qJHtnaWd5YS5kZWZhdWx0QXBpRG9tYWlufWApO1xyXG4gICAgICAgICAgICBjb25zdCBzY3JpcHRTcmMgPSB3ZWJTZGtSZXNvdXJjZXNEb21haW4udGVzdChzcmMpID8gYWRkU2RrVmVyc2lvbihzcmMpIDogc3JjO1xyXG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gc2NyaXB0U3JjO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgaWYgKGxvY2FsSW5mby5pb3NWZXJzaW9uID49IDYpIHtcclxuICAgICAgICAgICAgLy8gaU9TIDYgYnJlYWtzIHNldFRpbWVvdXQgd2hlbiBhbmltYXRpb24gaXMgYWN0aXZlIChzd2l0Y2hpbmcgdGFicyBiYWNrIGZyb20gYSBsb2dpbiBzZXF1ZW5jZSlcclxuICAgICAgICAgICAgZm5TZXRTY3JpcHRTcmMoKTtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KGZuU2V0U2NyaXB0U3JjLCAxKTsgLy8gRG9pbmcgdGhpcyBhc3luYyBnaXZlcyBiZXR0ZXIgcGVyZm9ybWFuY2UgaW4gb2xkZXIgYnJvd3NlcnNcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGlmIChsb2NhbEluZm8uaXNJRSkge1xyXG4gICAgICAgIGZ1bmN0aW9uc1V0aWxzLmludm9rZU9uUGFnZUxvYWQoc2NyaXB0TG9hZGVyKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgc2NyaXB0TG9hZGVyKCk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGVudW0gUmVzb3VyY2VUeXBlcyB7XHJcbiAgICBzY3JpcHQsXHJcbiAgICBpbWFnZSxcclxuICAgIGlmcmFtZSxcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gdHJpZ2dlclJlc291cmNlKHVybDogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQsIHJlc291cmNlVHlwZSA9IFJlc291cmNlVHlwZXMuaW1hZ2UsIHJlbW92ZUFmdGVyOiBudW1iZXIgfCBib29sZWFuID0gNTAwMCkge1xyXG4gICAgc3dpdGNoIChyZXNvdXJjZVR5cGUpIHtcclxuICAgICAgICBjYXNlIFJlc291cmNlVHlwZXMuc2NyaXB0OlxyXG4gICAgICAgICAgICBsb2FkKHVybCwgY2FsbGJhY2ssIGNhbGxiYWNrLCBmYWxzZSwgcmVtb3ZlQWZ0ZXIpO1xyXG4gICAgICAgICAgICBicmVhaztcclxuICAgICAgICBjYXNlIFJlc291cmNlVHlwZXMuaW1hZ2U6XHJcbiAgICAgICAgICAgIGxvYWRJbWFnZSh1cmwsIGNhbGxiYWNrKTtcclxuICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgY2FzZSBSZXNvdXJjZVR5cGVzLmlmcmFtZTpcclxuICAgICAgICAgICAgbG9hZElmcmFtZSh1cmwsIGNhbGxiYWNrLCByZW1vdmVBZnRlcik7XHJcbiAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgIGRlZmF1bHQ6XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVW5zdXBwb3J0ZWQgcmVzb3VyY2UgdHlwZScpO1xyXG4gICAgfVxyXG59XHJcbmZ1bmN0aW9uIGxvYWRJbWFnZSh1cmw6IHN0cmluZywgY2FsbGJhY2s/OiBGdW5jdGlvbikge1xyXG4gICAgdmFyIGltZyA9IG5ldyBJbWFnZSgpO1xyXG4gICAgdmFyIGxvYWRlZCA9IGZhbHNlO1xyXG5cclxuICAgIHZhciBmbk9uTG9hZCA9ICgpID0+IHtcclxuICAgICAgICBpZiAoIWxvYWRlZCkge1xyXG4gICAgICAgICAgICBsb2FkZWQgPSB0cnVlO1xyXG4gICAgICAgICAgICBjYWxsYmFjaygpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgaW1nLm9ubG9hZCA9IGltZy5vbmVycm9yID0gZm5PbkxvYWQ7XHJcblxyXG4gICAgaW1nLnNyYyA9IHVybDtcclxufVxyXG5mdW5jdGlvbiBsb2FkSWZyYW1lKHVybDogc3RyaW5nLCBjYWxsYmFjaz86ICgpID0+IHZvaWQsIHJlbW92ZUFmdGVyOiBudW1iZXIgfCBib29sZWFuID0gNTAwMCkge1xyXG4gICAgdmFyIGlmciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgaWZyLnN0eWxlLndpZHRoID0gJzMwcHgnO1xyXG4gICAgaWZyLnN0eWxlLmhlaWdodCA9ICcxMHB4JztcclxuICAgIGlmci5zdHlsZS5wb3NpdGlvbiA9ICdhYnNvbHV0ZSc7XHJcbiAgICBpZnIuc3R5bGUudG9wID0gJy0xMDAwcHgnO1xyXG4gICAgaWZyLnN0eWxlLmxlZnQgPSAnLTEwMDBweCc7XHJcblxyXG4gICAgaWYgKHJlbW92ZUFmdGVyID09PSB0cnVlKSB7XHJcbiAgICAgICAgcmVtb3ZlQWZ0ZXIgPSAwO1xyXG4gICAgfVxyXG5cclxuICAgIHZhciBmbk9uTG9hZCA9IGZ1bmN0aW9uKGUpIHtcclxuICAgICAgICB2YXIgZWw7XHJcbiAgICAgICAgaWYgKGUgJiYgZS5zcmNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGVsID0gZS5zcmNFbGVtZW50O1xyXG4gICAgICAgIH0gZWxzZSBpZiAoZSAmJiBlLnRhcmdldCkge1xyXG4gICAgICAgICAgICBlbCA9IGUudGFyZ2V0O1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVsID0gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICghZWwubG9hZGVkICYmIGVsLnBhcmVudE5vZGUpIHtcclxuICAgICAgICAgICAgZWwubG9hZGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgY2FsbGJhY2soKTtcclxuICAgICAgICAgICAgaWYgKHJlbW92ZUFmdGVyICE9PSBmYWxzZSkge1xyXG4gICAgICAgICAgICAgICAgd2luZG93LnNldFRpbWVvdXQoXHJcbiAgICAgICAgICAgICAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChlbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGV4KSB7fVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQWZ0ZXIgYXMgYW55LFxyXG4gICAgICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcihpZnIsICdsb2FkJywgZm5PbkxvYWQpO1xyXG4gICAgRE9NVXRpbHMuYWRkRXZlbnRMaXN0ZW5lcihpZnIsICdlcnJvcicsIGZuT25Mb2FkKTtcclxuICAgIGlmci5vbmxvYWQgPSBlID0+IHtcclxuICAgICAgICBmbk9uTG9hZChlKTtcclxuICAgIH07XHJcbiAgICBpZnIub25lcnJvciA9IGZuT25Mb2FkO1xyXG5cclxuICAgIGlmci5zcmMgPSB1cmw7XHJcbiAgICBET01VdGlscy5hcHBlbmRUb0JvZHkoaWZyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIGxvYWRTZXJ2aWNlKHNlcnZpY2VOYW1lOiBzdHJpbmcsIGZuT25FcnJvcj86ICgpID0+IHZvaWQsIGZuT25Mb2FkPzogKCkgPT4gdm9pZCkge1xyXG4gICAgdmFyIHVybCA9IGdldENkblJlc291cmNlKCkgKyAnL2pzL2dpZ3lhLnNlcnZpY2VzLicgKyBzZXJ2aWNlTmFtZSArICcuanMnO1xyXG4gICAgbG9hZChcclxuICAgICAgICB1cmwsXHJcbiAgICAgICAgKCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUgPT09ICdvYmplY3QnICYmIGNvbnNvbGUuZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ2Vycm9yIGxvYWRpbmcgZ2lneWEgc2VydmljZSAnICsgc2VydmljZU5hbWUgKyAnIGZyb20gdXJsOiAnICsgdXJsKTtcclxuICAgICAgICAgICAgICAgIGlmIChmbk9uRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBmbk9uRXJyb3IoKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm5PbkxvYWQsXHJcbiAgICAgICAgdHJ1ZSxcclxuICAgICk7XHJcbn1cclxuIiwiaW1wb3J0ICogYXMgSlNPTlV0aWxzIGZyb20gJ3NyYy9jb3JlL0dpZ3lhLkpzL2FwcC9VdGlscy9KU09OJztcclxuaW1wb3J0ICogYXMgcXVldWVVdGlscyBmcm9tICdzcmMvY29yZS9HaWd5YS5Kcy9hcHAvVXRpbHMvcXVldWUnO1xyXG52YXIgc2Vzc2lvblN0b3JhZ2VFbmFibGVkO1xyXG50cnkge1xyXG4gICAgc2Vzc2lvblN0b3JhZ2VFbmFibGVkID0gQm9vbGVhbih3aW5kb3cuc2Vzc2lvblN0b3JhZ2UpOyAvLyB3aGVuIDNwYyBibG9ja2VkLCBjaHJvbWUgdGhyb3dzIHdoZW4gdHJ5aW5nIHRvIGFjY2VzcyBzZXNzaW9uIHN0b3JhZ2UuXHJcbn0gY2F0Y2ggKGV4KSB7XHJcbiAgICBzZXNzaW9uU3RvcmFnZUVuYWJsZWQgPSBmYWxzZTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gc2V0KGtleTogc3RyaW5nLCByZXNwb25zZTogT2JqZWN0KSB7XHJcbiAgICBpZiAoIXNlc3Npb25TdG9yYWdlRW5hYmxlZCkgcmV0dXJuO1xyXG4gICAgdmFyIG9HaWd5YTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgb0dpZ3lhID0gSlNPTlV0aWxzLmRlc2VyaWFsaXplKHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5nZXRJdGVtKCdnaWd5YUNhY2hlJykpO1xyXG5cclxuICAgICAgICBpZiAocmVzcG9uc2UgPT0gbnVsbCAmJiBvR2lneWFba2V5XSkge1xyXG4gICAgICAgICAgICBkZWxldGUgb0dpZ3lhW2tleV07XHJcbiAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgb0dpZ3lhW2tleV0gPSB7IHJlc3BvbnNlOiByZXNwb25zZSwgdGltZTogbmV3IERhdGUoKS5nZXRUaW1lKCkgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHdpbmRvdy5zZXNzaW9uU3RvcmFnZS5zZXRJdGVtKCdnaWd5YUNhY2hlJywgSlNPTlV0aWxzLnNlcmlhbGl6ZShvR2lneWEpKTtcclxuICAgIH0gY2F0Y2ggKGV4KSB7fVxyXG5cclxuICAgIHF1ZXVlVXRpbHMucmVsZWFzZSgnY2FjaGUnLCAnY2FjaGVfJyArIGtleSk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldChrZXk6IHN0cmluZywgY2FjaGVUaW1lb3V0OiBudW1iZXIsIGNhbGxiYWNrOiAocmVzcG9uc2U6IE9iamVjdCkgPT4gdm9pZCk6IHZvaWQge1xyXG4gICAgaWYgKCFzZXNzaW9uU3RvcmFnZUVuYWJsZWQpIHtcclxuICAgICAgICBpZiAodHlwZW9mIGNhbGxiYWNrID09ICdmdW5jdGlvbicpIGNhbGxiYWNrKG51bGwpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuICAgIHZhciByZXQ7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGlmICghcXVldWVVdGlscy5pc0FjdGl2ZSgnY2FjaGVfJyArIGtleSkpIHtcclxuICAgICAgICAgICAgdmFyIHNHaWd5YUNhY2hlID0gd2luZG93LnNlc3Npb25TdG9yYWdlLmdldEl0ZW0oJ2dpZ3lhQ2FjaGUnKTtcclxuICAgICAgICAgICAgdmFyIG9HaWd5YSA9IEpTT05VdGlscy5kZXNlcmlhbGl6ZShzR2lneWFDYWNoZSk7XHJcbiAgICAgICAgICAgIHZhciBjYWNoZWQgPSBvR2lneWFba2V5XTtcclxuICAgICAgICAgICAgaWYgKGNhY2hlZCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNhY2hlVGltZW91dCAmJiBjYWNoZVRpbWVvdXQgKyBjYWNoZWQudGltZSA+IG5ldyBEYXRlKCkuZ2V0VGltZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9jYWNoZWRcclxuICAgICAgICAgICAgICAgICAgICBjYWxsYmFjayhjYWNoZWQucmVzcG9uc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy9leHBpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlKGtleSk7XHJcbiAgICAgICAgICAgICAgICAgICAgY2FjaGVkID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKCFjYWNoZWQpIHtcclxuICAgICAgICAgICAgICAgIC8vbm90IGNhY2hlZCAoZmlyc3QgdGltZSlcclxuICAgICAgICAgICAgICAgIHF1ZXVlVXRpbHMuaG9sZCgnY2FjaGUnLCAnY2FjaGVfJyArIGtleSk7IC8vc28gdGhhdCBmdXR1cmUgcmVxdWVzdHMgd2lsbCB3YWl0IGZvciB0aGUgZmlyc3Qgb25lJ3MgcmVzcG9uc2UuXHJcbiAgICAgICAgICAgICAgICBjYWxsYmFjayhudWxsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHF1ZXVlVXRpbHMuaXNBY3RpdmUoJ2NhY2hlXycgKyBrZXkpKSB7XHJcbiAgICAgICAgICAgIC8vd2FpdCBmb3IgZmlyc3QgcmVzcG9uc2VcclxuICAgICAgICAgICAgcXVldWVVdGlscy53YWl0Rm9yKCdjYWNoZV8nICsga2V5LCBnZXQsIGFyZ3VtZW50cyk7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICB9XHJcbiAgICB9IGNhdGNoIChleCkge1xyXG4gICAgICAgIGNhbGxiYWNrKG51bGwpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiByZW1vdmUoa2V5OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgIHNldChrZXksIG51bGwpO1xyXG59XHJcbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRQYXJhbVZhbHVlKHN0cjogc3RyaW5nLCBrZXk6IHN0cmluZywgZGVsOiBzdHJpbmcgPSAnJicpOiBzdHJpbmcge1xyXG4gICAgLy8gaHR0cDovL3N0YWNrb3ZlcmZsb3cuY29tL3F1ZXN0aW9ucy8xMTkyMDY5Ny9ob3ctdG8tZ2V0LWhhc2gtdmFsdWUtaW4tYS11cmwtaW4tanNcclxuICAgIGNvbnN0IG1hdGNoZXMgPSBzdHIubWF0Y2gobmV3IFJlZ0V4cChgJHtrZXl9PShbXiR7ZGVsfV0qKWApKTtcclxuICAgIHJldHVybiBtYXRjaGVzID8gbWF0Y2hlc1sxXSA6IG51bGw7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlcVBhcmFtVmFsdWUoc3RyOiBzdHJpbmcsIGtleTogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IHZhbCA9IGdldFBhcmFtVmFsdWUoc3RyLCBrZXkpO1xyXG4gICAgcmV0dXJuIHZhbCA/IGRlY29kZVVSSUNvbXBvbmVudCh2YWwpIDogbnVsbDtcclxufVxyXG4iLCJleHBvcnQgZnVuY3Rpb24gdHJpbShzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHMucmVwbGFjZSgvXlxccyooXFxTKiguKlxcUyk/KVxccyokLywgJyQxJyk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdChzOiBzdHJpbmcsIC4uLnJlc3Q6IHN0cmluZ1tdKTogc3RyaW5nIHtcclxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgIGlmIChhcmd1bWVudHNbaSArIDFdICE9IG51bGwpIHtcclxuICAgICAgICAgICAgcyA9IHMuc3BsaXQoJ3snICsgaSArICd9Jykuam9pbihhcmd1bWVudHNbaSArIDFdKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gY2FwaXRhbGl6ZShzOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHMuc3Vic3RyaW5nKDAsIDEpLnRvVXBwZXJDYXNlKCkgKyBzLnN1YnN0cmluZygxKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZW5kc1dpdGgoczogc3RyaW5nLCBzdWZmaXg6IHN0cmluZyk6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIHMuaW5kZXhPZihzdWZmaXgsIHMubGVuZ3RoIC0gc3VmZml4Lmxlbmd0aCkgIT09IC0xO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBlc2NhcGVSZWdFeHAoc3RyOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4qKz9ePSE6JHt9KCl8XFxbXFxdXFwvXFxcXF0pL2csICdcXFxcJDEnKTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUFsbChzdHI6IHN0cmluZywgZmluZDogc3RyaW5nLCByZXBsYWNlOiBzdHJpbmcpOiBzdHJpbmcge1xyXG4gICAgaWYgKCFmaW5kKSByZXR1cm4gc3RyO1xyXG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKG5ldyBSZWdFeHAoZXNjYXBlUmVnRXhwKGZpbmQpLCAnZycpLCByZXBsYWNlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIG1lcmdlQ29tbWFTZXBhcmF0ZWRWYWx1ZXMoc3RyMTogc3RyaW5nID0gJycsIHN0cjI6IHN0cmluZyA9ICcnKTogc3RyaW5nIHtcclxuICAgIGNvbnN0IGFyciA9IHN0cjEuY29uY2F0KCcsJywgc3RyMikuc3BsaXQoJywnKTtcclxuICAgIHJldHVybiBnaWd5YS51dGlscy5hcnJheS5nZXRVbmlxdWVWYWx1ZXMoYXJyKS5maWx0ZXIoeCA9PiB4KS5qb2luKCcsJyk7XHJcbn0iLCJleHBvcnQgZnVuY3Rpb24gaXNFeHBsaWNpdFRydWUodmFsOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHZhciBsYyA9ICgnJyArIHZhbCkudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiBsYyA9PSAndHJ1ZScgfHwgbGMgPT0gJzEnO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc0V4cGxpY2l0RmFsc2UodmFsOiBhbnkpOiBib29sZWFuIHtcclxuICAgIHZhciBsYyA9ICgnJyArIHZhbCkudG9Mb3dlckNhc2UoKTtcclxuICAgIHJldHVybiBsYyA9PSAnZmFsc2UnIHx8IGxjID09ICcwJztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNMYXRlclRoYW5Ob3coZXhwaXJhdGlvblRpbWU6IG51bWJlcik6IGJvb2xlYW4ge1xyXG4gICAgcmV0dXJuIGV4cGlyYXRpb25UaW1lID4gbmV3IERhdGUoKS5nZXRUaW1lKCk7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGFsbERlZmluZWRPckFsbFVuZGVmaW5lZCguLi5hcmdzKSB7XHJcbiAgICBjb25zdCBhbnlVbmRlZmluZWQgPSBhcmdzLnNvbWUoeCA9PiB0eXBlb2YgeCA9PT0gJ3VuZGVmaW5lZCcpO1xyXG4gICAgY29uc3QgYW55RGVmaW5lZCA9IGFyZ3Muc29tZSh4ID0+IHR5cGVvZiB4ICE9PSAndW5kZWZpbmVkJyk7XHJcbiAgICByZXR1cm4gKGFueURlZmluZWQgJiYgIWFueVVuZGVmaW5lZCkgfHwgKCFhbnlEZWZpbmVkICYmIGFueVVuZGVmaW5lZCk7XHJcbn1cclxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldFNjcm9sbCgpOiB7IHRvcDogbnVtYmVyOyBsZWZ0OiBudW1iZXIgfSB7XHJcbiAgICB2YXIgc2NyT2ZYID0gMCxcclxuICAgICAgICBzY3JPZlkgPSAwO1xyXG4gICAgaWYgKHR5cGVvZiB3aW5kb3cucGFnZVlPZmZzZXQgPT0gJ251bWJlcicpIHtcclxuICAgICAgICBzY3JPZlkgPSB3aW5kb3cucGFnZVlPZmZzZXQ7XHJcbiAgICAgICAgc2NyT2ZYID0gd2luZG93LnBhZ2VYT2Zmc2V0O1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5ib2R5ICYmIChkb2N1bWVudC5ib2R5LnNjcm9sbExlZnQgfHwgZG9jdW1lbnQuYm9keS5zY3JvbGxUb3ApKSB7XHJcbiAgICAgICAgc2NyT2ZZID0gZG9jdW1lbnQuYm9keS5zY3JvbGxUb3A7XHJcbiAgICAgICAgc2NyT2ZYID0gZG9jdW1lbnQuYm9keS5zY3JvbGxMZWZ0O1xyXG4gICAgfSBlbHNlIGlmIChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQgJiYgKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxMZWZ0IHx8IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zY3JvbGxUb3ApKSB7XHJcbiAgICAgICAgc2NyT2ZZID0gZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnNjcm9sbFRvcDtcclxuICAgICAgICBzY3JPZlggPSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsTGVmdDtcclxuICAgIH1cclxuICAgIHJldHVybiB7IGxlZnQ6IHNjck9mWCwgdG9wOiBzY3JPZlkgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVsbFNpemUoKTogeyB3OiBudW1iZXI7IGg6IG51bWJlciB9IHtcclxuICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIHZhciBkYiA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgdmFyIGggPSBkZS5jbGllbnRIZWlnaHQ7XHJcbiAgICBpZiAoaCA9PSAwKSBoID0gZGIuY2xpZW50SGVpZ2h0O1xyXG4gICAgdmFyIHcgPSBkZS5jbGllbnRXaWR0aDtcclxuICAgIGlmICh3ID09IDApIHcgPSBkYi5jbGllbnRXaWR0aDtcclxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZW50YXRpb24oKTogbnVtYmVyIHtcclxuICAgIHZhciBvcmllbnRhdGlvbiA9IHBhcnNlSW50KCh3aW5kb3dbJ29yaWVudGF0aW9uJ10gYXMgc3RyaW5nKSB8fCAnMCcpO1xyXG4gICAgaWYgKG9yaWVudGF0aW9uIDwgMCkgb3JpZW50YXRpb24gKz0gMzYwO1xyXG5cclxuICAgIHJldHVybiBvcmllbnRhdGlvbjtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0SW5uZXJTaXplKCk6IHsgdzogbnVtYmVyOyBoOiBudW1iZXIgfSB7XHJcbiAgICB2YXIgaDtcclxuICAgIHZhciB3O1xyXG5cclxuICAgIHZhciBkZSA9IGRvY3VtZW50LmRvY3VtZW50RWxlbWVudDtcclxuICAgIHZhciBkYiA9IGRvY3VtZW50LmJvZHk7XHJcblxyXG4gICAgaWYgKHdpbmRvdy5pbm5lckhlaWdodCkge1xyXG4gICAgICAgIGggPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XHJcbiAgICAgICAgdyA9IHdpbmRvdy5pbm5lcldpZHRoO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBoID0gZGUuY2xpZW50SGVpZ2h0O1xyXG4gICAgICAgIGlmIChoID09IDApIGggPSBkYi5jbGllbnRIZWlnaHQ7XHJcbiAgICAgICAgdyA9IGRlLmNsaWVudFdpZHRoO1xyXG4gICAgICAgIGlmICh3ID09IDApIHcgPSBkYi5jbGllbnRXaWR0aDtcclxuICAgIH1cclxuICAgIHJldHVybiB7IHc6IHcsIGg6IGggfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWlkZGxlQ2VudGVyKCk6IHsgdG9wOiBudW1iZXI7IGxlZnQ6IG51bWJlciB9IHtcclxuICAgIHZhciBzY3JvbGwgPSBnZXRTY3JvbGwoKTtcclxuICAgIHZhciBzaXplID0gZ2V0SW5uZXJTaXplKCk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIHRvcDogc2Nyb2xsLnRvcCArIE1hdGguZmxvb3Ioc2l6ZS5oIC8gMiksXHJcbiAgICAgICAgbGVmdDogc2Nyb2xsLmxlZnQgKyBNYXRoLmZsb29yKHNpemUudyAvIDIpLFxyXG4gICAgfTtcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNSZWN0SG9yaXpvbnRhbGx5VmlzaWJsZShyZWN0OiB7IHRvcDogbnVtYmVyOyBib3R0b206IG51bWJlcjsgbGVmdDogbnVtYmVyOyByaWdodDogbnVtYmVyIH0pIHtcclxuICAgIHZhciBzY3JvbGwgPSBnZXRTY3JvbGwoKTtcclxuICAgIHZhciBzaXplID0gZ2V0SW5uZXJTaXplKCk7XHJcbiAgICByZXR1cm4gcmVjdC5sZWZ0ID49IHNjcm9sbC5sZWZ0ICYmIHJlY3QucmlnaHQgPD0gc2Nyb2xsLmxlZnQgKyBzaXplLnc7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzUmVjdEZ1bGx5VmlzaWJsZShyZWN0OiB7IHRvcDogbnVtYmVyOyBib3R0b206IG51bWJlcjsgbGVmdDogbnVtYmVyOyByaWdodDogbnVtYmVyIH0pIHtcclxuICAgIHZhciBzY3JvbGwgPSBnZXRTY3JvbGwoKTtcclxuICAgIHZhciBzaXplID0gZ2V0SW5uZXJTaXplKCk7XHJcbiAgICByZXR1cm4gcmVjdC50b3AgPj0gc2Nyb2xsLnRvcCAmJiByZWN0LmJvdHRvbSA8PSBzY3JvbGwudG9wICsgc2l6ZS5oICYmIHJlY3QubGVmdCA+PSBzY3JvbGwubGVmdCAmJiByZWN0LnJpZ2h0IDw9IHNjcm9sbC5sZWZ0ICsgc2l6ZS53O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBzY3JvbGxJbnRvVmlldyhlbGVtZW50OiBIVE1MRWxlbWVudCkge1xyXG4gICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudC5zY3JvbGxJbnRvVmlldykge1xyXG4gICAgICAgIGVsZW1lbnQuc2Nyb2xsSW50b1ZpZXcoKTtcclxuICAgIH1cclxufVxyXG4iLCJcclxubGV0IHNlbGVjdGVkQ2RuSG9zdHNJbmRleCA9IDA7XHJcbmV4cG9ydCBjb25zdCBDRE5fSE9TVFMgPSB7XHJcbiAgICBodHRwOiBbJ2Nkbi5naWd5YS5jb20nLCAnY2RuMS5naWd5YS5jb20nLCAnY2RuMi5naWd5YS5jb20nLCAnY2RuMy5naWd5YS5jb20nXSxcclxuICAgIGh0dHBzOiBbJ2NkbnMuZ2lneWEuY29tJywgJ2NkbnMxLmdpZ3lhLmNvbScsICdjZG5zMi5naWd5YS5jb20nLCAnY2RuczMuZ2lneWEuY29tJ10sXHJcbn07XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRDZG5SZXNvdXJjZShwYXRoPzogc3RyaW5nKTogc3RyaW5nIHtcclxuICAgIC8vIGdpZ3lhLnRoaXNTY3JpcHQgbWF5IG5vdCBleGlzdCBpZiBsb2FkZWQgZm9yIHNzb09yaWcuXHJcbiAgICBsZXQgYmFzZURvbWFpbiA9IGdpZ3lhLnRoaXNTY3JpcHQ/LmJhc2VEb21haW4gPz8gJyc7XHJcbiAgICBjb25zdCBwcm90b2NvbCA9IGdpZ3lhLnRoaXNTY3JpcHQ/LnByb3RvY29sID8/ICdodHRwcyc7XHJcblxyXG4gICAgLy8gSWYgbm8gYmFzZSBkb21haW4gb3IgaWYgYmFzZSBkb21haW4gZW5kcyB3aXRoIC5naWd5YS5jb20sIHVzZSBHaWd5YSBDRE4uXHJcbiAgICAvLyBPdGhlcndpc2UgdXNlIHRoZSBiYXNlIGRvbWFpbi5cclxuICAgIGlmICghYmFzZURvbWFpbiB8fCAvY2Rucz9cXC5naWd5YVxcLmNvbSQvLnRlc3QoYmFzZURvbWFpbikpIHtcclxuICAgICAgICBjb25zdCBzZWxlY3RlZFNjaGVtYVJlcG9zaXRvcnkgPSBDRE5fSE9TVFNbcHJvdG9jb2xdO1xyXG4gICAgICAgIGlmIChzZWxlY3RlZFNjaGVtYVJlcG9zaXRvcnkubGVuZ3RoIDw9IHNlbGVjdGVkQ2RuSG9zdHNJbmRleCkge1xyXG4gICAgICAgICAgICBzZWxlY3RlZENkbkhvc3RzSW5kZXggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiYXNlRG9tYWluID0gc2VsZWN0ZWRTY2hlbWFSZXBvc2l0b3J5W3NlbGVjdGVkQ2RuSG9zdHNJbmRleCsrXTtcclxuICAgIH1cclxuXHJcbiAgICAvLyBFbnN1cmUgdGhlIHBhdGggc3RhcnRzIHdpdGggXCIvXCIuXHJcbiAgICBpZiAocGF0aCkge1xyXG4gICAgICAgIGlmIChwYXRoLmluZGV4T2YoJy8nKSAhPT0gMCkge1xyXG4gICAgICAgICAgICBwYXRoID0gJy8nICsgcGF0aDtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIHByb3RvY29sICsgJzovLycgKyBiYXNlRG9tYWluICsgKHBhdGggfHwgJycpO1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRJbWdDZG5SZXNvdXJjZSgpOiBzdHJpbmcge1xyXG4gICAgcmV0dXJuIGdldENkblJlc291cmNlKCcvZ3MvaS8nKTtcclxufVxyXG4iLCJpbXBvcnQgKiBhcyB1dGlscyBmcm9tICdzcmMvY29yZS9TZXJ2aWNlUHJveHkvdXRpbHMnO1xyXG5pbXBvcnQgeyBJUHJveHlSZXNwb25zZSwgSVByb3h5UmVxdWVzdCwgaXNTaWduYWxSZXF1ZXN0LCBJUHJveHlTaWduYWxSZXF1ZXN0IH0gZnJvbSAnc3JjL2NvcmUvU2VydmljZVByb3h5L2ludGVyZmFjZXMnO1xyXG5cclxuZXhwb3J0IHR5cGUgTWF5YmVQcm9taXNlQW55ID0gYW55IHwgUHJvbWlzZTxhbnk+O1xyXG5leHBvcnQgdHlwZSBTdG9wQ2FuY2VsbGVycyA9ICgpID0+IE1heWJlUHJvbWlzZUFueTtcclxuZXhwb3J0IGNsYXNzIFByb3h5TGlzdGVuZXIge1xyXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfc2VydmljZTogT2JqZWN0LFxyXG4gICAgICAgICAgICAgICAgcHVibGljIG9yaWdpbiA9IHV0aWxzLmdldFBhcmVudFVybCgpLFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfYWxsb3dlZE1ldGhvZHMgPSB1dGlscy5nZXRBbGxDbGFzc01ldGhvZHNOYW1lcyhfc2VydmljZSksXHJcbiAgICAgICAgICAgICAgICBwcml2YXRlIF90YXJnZXQgPSB3aW5kb3cucGFyZW50LFxyXG4gICAgICAgICAgICAgICAgcHJpdmF0ZSBfd2luID0gd2luZG93KSB7fVxyXG5cclxuICAgIHB1YmxpYyBzdG9wQ2FuY2VsbGVyczogU3RvcENhbmNlbGxlcnNbXSA9IFtdO1xyXG4gICAgcHVibGljIG9uU3RvcDogKCkgPT4gTWF5YmVQcm9taXNlQW55O1xyXG5cclxuICAgIHByaXZhdGUgX2xpc3RlbmluZyA9IGZhbHNlO1xyXG5cclxuICAgIHB1YmxpYyBnZXQgaXNMaXN0ZW5pbmcoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuX2xpc3RlbmluZztcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgbGlzdGVuKHBheWxvYWQ/OiBhbnkpIHtcclxuICAgICAgICBpZiAoIXRoaXMuaXNMaXN0ZW5pbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2luLnNldFRpbWVvdXQoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy8gc2V0VGltZW91dCB3b3JrYXJvdW5kIGZvciBJRTkuIGVsc2Ugd2UnbGwgZ2V0IEpTT04gaXMgdW5kZWZpbmVkXHJcbiAgICAgICAgICAgICAgICB0aGlzLl93aW4uYWRkRXZlbnRMaXN0ZW5lcignbWVzc2FnZScsIHRoaXMub25SZXF1ZXN0LCB0cnVlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIGlkOiB1bmRlZmluZWQsXHJcbiAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiAnbGlzdGVuaW5nJyxcclxuICAgICAgICAgICAgICAgICAgICByZXM6IHBheWxvYWQsXHJcbiAgICAgICAgICAgICAgICB9IGFzIElQcm94eVJlc3BvbnNlKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xpc3RlbmluZyA9IHRydWU7XHJcbiAgICAgICAgICAgIH0sIDEpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIHN0b3BMaXN0ZW4oKSB7XHJcbiAgICAgICAgaWYgKHRoaXMuaXNMaXN0ZW5pbmcpIHtcclxuICAgICAgICAgICAgdGhpcy5fd2luLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21lc3NhZ2UnLCB0aGlzLm9uUmVxdWVzdCwgdHJ1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmluZyA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBwcml2YXRlIG9uUmVxdWVzdCA9IGFzeW5jIChlOiBNZXNzYWdlRXZlbnQpOiBQcm9taXNlPHZvaWQ+ID0+IHtcclxuICAgICAgICAvLyB0byBwcmVzZXJ2ZSBjb250ZXh0XHJcbiAgICAgICAgaWYgKHV0aWxzLnZhbGlkYXRlT3JpZ2luKHRoaXMub3JpZ2luLCBlLm9yaWdpbikpIHtcclxuICAgICAgICAgICAgY29uc3QgcmVxID0gSlNPTi5wYXJzZShlLmRhdGEpIGFzIElQcm94eVJlcXVlc3Q7XHJcblxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlzU2lnbmFsUmVxdWVzdChyZXEpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVTaWduYWxSZXF1ZXN0KHJlcSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vcm1hbCByZXF1ZXN0XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy5oYW5kbGVQcm94eVJlcXVlc3QocmVxKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3N0RXJyb3IoeyByZXM6IGUubWVzc2FnZSB8fCBlLCBpZDogcmVxLmlkIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBwcml2YXRlIGFzeW5jIGhhbmRsZVNpZ25hbFJlcXVlc3QocmVxOiBJUHJveHlTaWduYWxSZXF1ZXN0KTogUHJvbWlzZTx2b2lkPiB7XHJcbiAgICAgICAgc3dpdGNoIChyZXEuc2lnbmFsKSB7XHJcbiAgICAgICAgICAgIGNhc2UgJ3N0b3AnOlxyXG4gICAgICAgICAgICAgICAgY29uc3QgY2FuY2VsID0gYXdhaXQgdGhpcy5nZXRDYW5jZWxSZXN1bHQoKTtcclxuICAgICAgICAgICAgICAgIGxldCByZXM6IElQcm94eVJlc3BvbnNlO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFjYW5jZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnN0b3BMaXN0ZW4oKTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgcGF5bG9hZDtcclxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5vblN0b3ApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGF5bG9hZCA9IHRoaXMub25TdG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXlsb2FkLnRoZW4pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBheWxvYWQgPSBhd2FpdCBwYXlsb2FkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IHJlcS5pZCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiAnc3RvcCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlczogcGF5bG9hZCxcclxuICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICByZXMgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiByZXEuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNpZ25hbDogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzOiBjYW5jZWwsXHJcbiAgICAgICAgICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMucG9zdE1lc3NhZ2UocmVzKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgLy8gaWdub3JlXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBhc3luYyBnZXRDYW5jZWxSZXN1bHQoKTogUHJvbWlzZTxhbnk+IHtcclxuICAgICAgICBmb3IgKGNvbnN0IHNob3VsZENhbmNlbFN0b3Agb2YgdGhpcy5zdG9wQ2FuY2VsbGVycykge1xyXG4gICAgICAgICAgICBsZXQgcmVzID0gc2hvdWxkQ2FuY2VsU3RvcCgpIGFzIE1heWJlUHJvbWlzZUFueTtcclxuICAgICAgICAgICAgaWYgKHJlcy50aGVuKSB7XHJcbiAgICAgICAgICAgICAgICByZXMgPSBhd2FpdCByZXM7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChyZXMpIHJldHVybiByZXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgaGFuZGxlUHJveHlSZXF1ZXN0KHJlcTogSVByb3h5UmVxdWVzdCk6IFByb21pc2U8dm9pZD4ge1xyXG4gICAgICAgIHRoaXMudmFsaWRhdGVSZXF1ZXN0KHJlcSk7XHJcbiAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgdGhpcy5mb3J3YXJkVG9TZXJ2aWNlKHJlcSk7XHJcblxyXG4gICAgICAgIHRoaXMucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICBpZDogcmVxLmlkLFxyXG4gICAgICAgICAgICByZXMsXHJcbiAgICAgICAgfSBhcyBJUHJveHlSZXNwb25zZSk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSB2YWxpZGF0ZVJlcXVlc3QocmVxOiBJUHJveHlSZXF1ZXN0KSB7XHJcbiAgICAgICAgaWYgKCFyZXEuaWQgfHwgIXJlcS5tZXRob2ROYW1lIHx8IHRoaXMuX2FsbG93ZWRNZXRob2RzLmluZGV4T2YocmVxLm1ldGhvZE5hbWUpIDwgMCkge1xyXG4gICAgICAgICAgICB0aHJvdyAncHJveHkgcmVxdWVzdCBpbiBpbnZhbGlkIGZvcm1hdCc7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgYXN5bmMgZm9yd2FyZFRvU2VydmljZShyZXE6IElQcm94eVJlcXVlc3QpOiBQcm9taXNlPGFueT4ge1xyXG4gICAgICAgIGNvbnN0IG1ldGhvZCA9IHRoaXMuX3NlcnZpY2VbcmVxLm1ldGhvZE5hbWVdIGFzIEZ1bmN0aW9uO1xyXG4gICAgICAgIGxldCByZXN1bHQgPSBtZXRob2QuYXBwbHkodGhpcy5fc2VydmljZSwgcmVxLnBhcmFtcykgYXMgTWF5YmVQcm9taXNlQW55O1xyXG4gICAgICAgIGlmIChyZXN1bHQgJiYgcmVzdWx0LnRoZW4pIHtcclxuICAgICAgICAgICAgcmVzdWx0ID0gYXdhaXQgcmVzdWx0O1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gcmVzdWx0O1xyXG4gICAgfVxyXG5cclxuICAgIHByb3RlY3RlZCBwb3N0TWVzc2FnZShtc2c6IGFueSkge1xyXG4gICAgICAgIGNvbnN0IG1lc3NhZ2U6IHN0cmluZyA9IHR5cGVvZiBtc2cgPT09ICdvYmplY3QnID8gSlNPTi5zdHJpbmdpZnkobXNnKSA6IG1zZztcclxuICAgICAgICB0aGlzLl90YXJnZXQucG9zdE1lc3NhZ2UobWVzc2FnZSwgdGhpcy5vcmlnaW4pO1xyXG4gICAgfVxyXG5cclxuICAgIHByaXZhdGUgcG9zdEVycm9yKGVycjogSVByb3h5UmVzcG9uc2UpIHtcclxuICAgICAgICBlcnIuc2lnbmFsID0gJ2Vycm9yJztcclxuICAgICAgICB0aGlzLnBvc3RNZXNzYWdlKGVycik7XHJcbiAgICB9XHJcbn1cclxuIiwiZXhwb3J0IGludGVyZmFjZSBJUHJveHlNZXNzYWdlIHtcclxuICAgIGlkOiBzdHJpbmc7XHJcbn1cclxuZXhwb3J0IGludGVyZmFjZSBJUHJveHlSZXF1ZXN0IGV4dGVuZHMgSVByb3h5TWVzc2FnZSB7XHJcbiAgICBtZXRob2ROYW1lOiBzdHJpbmc7XHJcbiAgICBwYXJhbXM/OiBhbnlbXTtcclxufVxyXG5leHBvcnQgdHlwZSBQcm94eVNpZ25hbCA9ICdsaXN0ZW5pbmcnIHwgJ3N0b3AnIHwgJ2Vycm9yJztcclxuZXhwb3J0IGludGVyZmFjZSBJUHJveHlTaWduYWxSZXF1ZXN0IGV4dGVuZHMgSVByb3h5TWVzc2FnZSB7XHJcbiAgICBzaWduYWw6IFByb3h5U2lnbmFsO1xyXG59XHJcbmV4cG9ydCBpbnRlcmZhY2UgSVByb3h5UmVzcG9uc2UgZXh0ZW5kcyBJUHJveHlNZXNzYWdlIHtcclxuICAgIHJlczogYW55O1xyXG4gICAgc2lnbmFsPzogUHJveHlTaWduYWw7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlzU2lnbmFsUmVxdWVzdChyZXE6IElQcm94eU1lc3NhZ2UpOiByZXEgaXMgSVByb3h5U2lnbmFsUmVxdWVzdCB7XHJcbiAgICByZXR1cm4gQm9vbGVhbigocmVxIGFzIElQcm94eVNpZ25hbFJlcXVlc3QpLnNpZ25hbCk7XHJcbn1cclxuIiwiZXhwb3J0IGNvbnN0IGdldFBhcmVudFVybCA9ICh3aW4gPSB3aW5kb3csIGRvYyA9IGRvY3VtZW50KSA9PiAod2luLmxvY2F0aW9uICE9IHdpbi5wYXJlbnQubG9jYXRpb24gPyBkb2MucmVmZXJyZXIgOiBkb2MubG9jYXRpb24uaHJlZik7XHJcbmV4cG9ydCBjb25zdCBnZXRCb2R5RWxlbWVudCA9IChkb2MgPSBkb2N1bWVudCkgPT5cclxuICAgIG5ldyBQcm9taXNlPEhUTUxFbGVtZW50PihyZXNvbHZlID0+IHtcclxuICAgICAgICBpZiAoZG9jLmJvZHkpIHJlc29sdmUoZG9jLmJvZHkpO1xyXG4gICAgICAgIGVsc2UgZG9jLmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiByZXNvbHZlKGRvYy5ib2R5KSk7XHJcbiAgICB9KTtcclxuZXhwb3J0IGNvbnN0IHZhbGlkYXRlT3JpZ2luID0gKG9yaWdpbjogc3RyaW5nLCBjaGVja2VkOiBzdHJpbmcpID0+IG9yaWdpbi50b0xvd2VyQ2FzZSgpLmluZGV4T2YoY2hlY2tlZC50b0xvd2VyQ2FzZSgpKSA9PT0gMDtcclxuZXhwb3J0IGNvbnN0IGNyZWF0ZUlmcmFtZSA9IChkb2MgPSBkb2N1bWVudCkgPT4ge1xyXG4gICAgY29uc3QgaWZyYW1lID0gZG9jLmNyZWF0ZUVsZW1lbnQoJ2lmcmFtZScpO1xyXG4gICAgaWZyYW1lLnN0eWxlLnBvc2l0aW9uID0gJ2Fic29sdXRlJztcclxuICAgIGlmcmFtZS5zdHlsZS5oZWlnaHQgPSAnMHB4JztcclxuICAgIGlmcmFtZS5zdHlsZS53aWR0aCA9ICcwcHgnO1xyXG4gICAgaWZyYW1lLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcbiAgICByZXR1cm4gaWZyYW1lO1xyXG59O1xyXG5sZXQgX2NvdW50ZXIgPSAxO1xyXG5leHBvcnQgY29uc3QgZ2VuZXJhdGVJZCA9ICgpID0+IHtcclxuICAgIHJldHVybiBTdHJpbmcoX2NvdW50ZXIrKyk7XHJcbn07XHJcbmZ1bmN0aW9uIGlzQ2xhc3ModHlwZTogYW55fChuZXcgKCkgPT4gYW55KSk6IHR5cGUgaXMgbmV3ICgpID0+IGFueSB7XHJcbiAgICByZXR1cm4gISF0eXBlLnByb3RvdHlwZTtcclxufVxyXG5leHBvcnQgY29uc3QgZ2V0QWxsQ2xhc3NNZXRob2RzTmFtZXMgPSAodHlwZTogT2JqZWN0fChuZXcgKCkgPT4gYW55KSk6IHN0cmluZ1tdID0+IHtcclxuICAgIGxldCBwcm9wczogc3RyaW5nW10gPSBbXTtcclxuXHJcbiAgICBsZXQgcHJvdG8gPSBpc0NsYXNzKHR5cGUpID8gdHlwZS5wcm90b3R5cGUgOiB0eXBlO1xyXG4gICAgZG8ge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIC8qKiBpbml0aWFsIGltcGxlbWVudGF0aW9uIC0gdXNpbmcgZmlsdGVyICoqL1xyXG4gICAgICAgICAgICBjb25zdCBsID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG8pXHJcbiAgICAgICAgICAgICAgICAvLyAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvdG8pLm1hcChzID0+IHMudG9TdHJpbmcoKSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKHMgPT4gcy50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgLnNvcnQoKVxyXG4gICAgICAgICAgICAgICAgLmZpbHRlcihcclxuICAgICAgICAgICAgICAgICAgICAocCwgaSwgYXJyKSA9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0eXBlb2YgcHJvdG9bcF0gPT09ICdmdW5jdGlvbicgJiYgLy9vbmx5IHRoZSBtZXRob2RzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHAgIT09ICdjb25zdHJ1Y3RvcicgJiYgLy9ub3QgdGhlIGNvbnN0cnVjdG9yXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIChpID09IDAgfHwgcCAhPT0gYXJyW2kgLSAxXSkgJiYgLy9ub3Qgb3ZlcnJpZGluZyBpbiB0aGlzIHByb3RvdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5pbmRleE9mKHApID09PSAtMSwgLy9ub3Qgb3ZlcnJpZGRlbiBpbiBhIGNoaWxkXHJcbiAgICAgICAgICAgICAgICApO1xyXG4gICAgICAgICAgICBwcm9wcyA9IHByb3BzLmNvbmNhdChsKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgIC8qKiBidWcgZml4IGltcGxlbWVudGF0aW9uIC0gdXNpbmcgY3VzdG9tIG91ciBvd24gZmlsdGVyIGxvZ2ljXHJcbiAgICAgICAgICAgICBjYXNlIG9mIEFycmF5LmZpbHRlciBwb2x5ZmlsbCBjYXVzaW5nIFwiY2FuIG5vdCByZWFkIHByb3BlcnR5ICcwJyBvZiB1bmRlZmluZWRcIiAqKi9cclxuICAgICAgICAgICAgY29uc3QgYXJyID0gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXMocHJvdG8pXHJcbiAgICAgICAgICAgICAgICAvLyAuY29uY2F0KE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocHJvdG8pLm1hcChzID0+IHMudG9TdHJpbmcoKSkpXHJcbiAgICAgICAgICAgICAgICAubWFwKHMgPT4gcy50b1N0cmluZygpKVxyXG4gICAgICAgICAgICAgICAgLnNvcnQoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGwgPSBbXTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBhcnJbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGVvZiBwcm90b1twXSA9PT0gJ2Z1bmN0aW9uJyAmJiAvL29ubHkgdGhlIG1ldGhvZHNcclxuICAgICAgICAgICAgICAgICAgICBwICE9PSAnY29uc3RydWN0b3InICYmIC8vbm90IHRoZSBjb25zdHJ1Y3RvclxyXG4gICAgICAgICAgICAgICAgICAgIChpID09IDAgfHwgcCAhPT0gYXJyW2kgLSAxXSkgJiYgLy9ub3Qgb3ZlcnJpZGluZyBpbiB0aGlzIHByb3RvdHlwZVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmluZGV4T2YocCkgPT09IC0xXHJcbiAgICAgICAgICAgICAgICApIHtcclxuICAgICAgICAgICAgICAgICAgICAvL25vdCBvdmVycmlkZGVuIGluIGEgY2hpbGRcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgbC5wdXNoKHApO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHByb3BzID0gcHJvcHMuY29uY2F0KGwpO1xyXG4gICAgICAgIH1cclxuICAgIH0gd2hpbGUgKFxyXG4gICAgICAgIChwcm90byA9IE9iamVjdC5nZXRQcm90b3R5cGVPZihwcm90bykpICYmIC8vd2Fsay11cCB0aGUgcHJvdG90eXBlIGNoYWluXHJcbiAgICAgICAgT2JqZWN0LmdldFByb3RvdHlwZU9mKHByb3RvKSAvL25vdCB0aGUgdGhlIE9iamVjdCBwcm90b3R5cGUgbWV0aG9kcyAoaGFzT3duUHJvcGVydHksIGV0Yy4uLilcclxuICAgICk7XHJcblxyXG4gICAgcmV0dXJuIHByb3BzO1xyXG59O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9