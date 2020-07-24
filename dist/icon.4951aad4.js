// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"icon.js":[function(require,module,exports) {
!function (t) {
  var e,
      c,
      _l,
      i,
      o,
      a,
      _n,
      s = '<svg><symbol id="i-qita" viewBox="0 0 1024 1024"><path d="M104.45175283 69.81022285C81.05595489 69.81022285 62.00937529 89.15674854 62.00937529 112.92747911v316.44317196c0 23.6207584 19.04657959 43.11725713 42.44237754 43.11725713h311.719021c23.39579883 0 42.44237842-19.49649873 42.44237753-43.11725713v-316.44317196c0-23.65825166-19.04657959-43.11725713-42.44237753-43.11725625H104.45175283z m0 1e-8C81.05595489 69.81022285 62.00937529 89.15674854 62.00937529 112.92747911v316.44317196c0 23.6207584 19.04657959 43.11725713 42.44237754 43.11725713h311.719021c23.39579883 0 42.44237842-19.49649873 42.44237753-43.11725713v-316.44317196c0-23.65825166-19.04657959-43.11725713-42.44237753-43.11725625H104.45175283zM529.47542568 257.42652998a43.64216279 43.64216279 0 0 0 0 60.9265582l180.00517413 182.74218223c16.49703779 16.75949062 43.49218974 16.75949062 59.98922665 0l179.96768086-182.74218223c16.53453106-16.75949062 16.53453106-44.16706846 0-60.9265582L769.50731972 74.64685362a42.0674458 42.0674458 0 0 0-59.98922665 0l-179.96768086 182.7421831z m0 0a43.64216279 43.64216279 0 0 0 0 60.9265582l180.00517413 182.74218223c16.49703779 16.75949062 43.49218974 16.75949062 59.98922665 0l179.96768086-182.74218223c16.53453106-16.75949062 16.53453106-44.16706846 0-60.9265582L769.50731972 74.64685362a42.0674458 42.0674458 0 0 0-59.98922665 0l-179.96768086 182.7421831z m60.21418711 301.89578379c-23.35830557 0-42.40488516 19.42151221-42.40488516 43.07976386v316.48066524c0 23.73323818 19.04657959 43.07976386 42.40488516 43.07976387h311.75651338c23.24582578 0 42.40488516-19.34652568 42.40488516-43.07976387V602.36458438c0-23.6207584-19.04657959-43.11725713-42.40488516-43.11725714h-311.75651338z m0 0c-23.35830557 0-42.40488516 19.42151221-42.40488516 43.07976386v316.48066524c0 23.73323818 19.04657959 43.07976386 42.40488516 43.07976387h311.75651338c23.24582578 0 42.40488516-19.34652568 42.40488516-43.07976387V602.36458438c0-23.6207584-19.04657959-43.11725713-42.40488516-43.11725714h-311.75651338z m-485.23785996 0C81.05595489 559.24732724 62.00937529 578.70633359 62.00937529 602.36458438v316.48066523C62.00937529 942.57848779 81.05595489 961.92501348 104.45175283 961.92501348h311.719021c23.39579883 0 42.44237842-19.34652568 42.44237753-43.07976387V602.36458438c0-23.6207584-19.04657959-43.11725713-42.44237753-43.11725714H104.45175283z m0 0C81.05595489 559.24732724 62.00937529 578.70633359 62.00937529 602.36458438v316.48066523C62.00937529 942.57848779 81.05595489 961.92501348 104.45175283 961.92501348h311.719021c23.39579883 0 42.44237842-19.34652568 42.44237753-43.07976387V602.36458438c0-23.6207584-19.04657959-43.11725713-42.44237753-43.11725714H104.45175283z"  ></path></symbol><symbol id="i-lianxifangshi" viewBox="0 0 1024 1024"><path d="M511.3 4.5c-201.7 0-371.7 139.8-426.4 330.7C36 364.7 7.4 421.4 7.4 487.8c0 96.3 58.7 174.4 155.1 174.4 21.4 0 38.8-17.3 38.8-38.8V352.2c0-17.8-12.7-31.8-29.1-36.3 56.6-139 187.2-236.3 339.1-236.3s282.6 97.3 339.2 236.2c-16.4 4.5-29.1 18.5-29.1 36.3v271.3c0 21.4 17.3 38.8 38.8 38.8 9 0 17.1-1.1 25.4-2.4-12.5 72.3-42.9 126.2-73.9 163.5-19.3 23.3-39.1 40.1-54.5 50.9-7.7 5.4-13.7 8.7-18.2 10.9-2.3 1.1-4.1 2.1-4.8 2.4h-72.7c-14-40.5-58.4-70.3-111.4-70.3-64.2 0-116.3 43.4-116.3 96.9s52.1 96.9 116.3 96.9c53.1 0 97.5-29.8 111.4-70.3h76.3c13.1 0 16.4-3.5 24.2-7.3 7.8-3.8 16.9-9 26.6-15.7 19.4-13.6 42.8-33.4 65.4-60.6 40.9-49.2 78.9-122.3 88.4-220.5 45.7-30.3 72.7-85 72.7-149 0-66.4-28.6-123.2-77.5-152.6C883 144.3 713 4.5 511.3 4.5z"  ></path></symbol><symbol id="i-lianxifangshi1" viewBox="0 0 1024 1024"><path d="M812 992C512 992 32 494 32 224 32 128 158 32 212 32s180 222 180 252c0 48-48 78-48 126 0 60 192 252 240 252s84-48 132-48 270 162 270 192C992 908 896 992 812 992z"  ></path></symbol><symbol id="i-dengpao" viewBox="0 0 1024 1024"><path d="M136.17386667 384.8192c0-103.25653333 36.70506667-191.344 109.61173333-265.23626667C318.70506667 45.69386667 407.26826667 8.99306667 511.01866667 8.99306667c103.74613333 0 192.30933333 36.70506667 266.21973333 110.58986666 73.88906667 73.8944 110.58986667 161.97973333 110.58986667 265.23626667 0 14.18773333-0.4896 28.8704-1.968 43.06666667-2.4416 2.4448-1.952 7.33333333-1.952 9.77813333l-5.87306667 35.2416c-2.45013333 0-1.952 3.424-1.952 5.87306667-3.92106667 13.2064-7.8336 24.94933333-11.7472 35.232v1.96053333s-0.4896 0.48426667-1.96053333 1.952c-5.38026667 14.19306667-10.27946667 26.9216-15.664 37.18933333 0 1.47093333-0.4896 1.9648-1.95733334 1.9648-6.36693333 13.2064-13.6992 25.45066667-21.53386666 37.18933334-7.82186667 11.7472-16.14933333 23.4944-25.45066667 35.232 0 0-0.4896 0.4928-0.9664 0.99093333l-0.9824 0.95786667c-7.82613333 9.3056-17.1232 18.11306667-27.3984 27.41973333 0 0-0.97813333 0.48426667-2.93866667 1.952-4.89493333 3.41973333-5.38346667 6.36266667-10.77653333 11.74293333-2.4416 0-5.85706667 1.46346667-5.85706667 3.92106667l-18.60266666 14.66453333-3.91786667 2.9344-2.9344 1.968c-11.73546667 9.29706667-20.0704 19.5808-25.45066667 31.31946667-5.38026667 11.74293333-10.26773333 20.0576-15.6512 25.4464-5.38346667 5.3728-15.16693333 7.82613333-29.36746666 7.82613333H371.05493333c-14.18773333 0-23.97546667-2.4576-29.35466666-7.82613333-5.3888-5.39306667-10.77653333-13.70346667-16.6464-25.4464-5.87306667-11.73866667-14.18773333-22.0224-24.45973334-31.31946667-1.4752 0-2.4448-0.4928-3.92106666-1.968l-2.9344-2.9344-18.5952-14.66453333-5.87306667-3.92106667-7.82186667-7.8176s-1.9648-1.968-5.87306666-5.87733333l-27.4144-27.41973333s-0.48106667-0.47253333-0.97066667-0.95786667l-0.9824-0.99093333c-18.10986667-23.48586667-33.76533333-46.49493333-46.97173333-72.42133334-1.4752 0-1.968-0.4896-1.968-1.9648-5.38026667-10.26773333-10.272-22.99626667-15.6512-37.18933333-1.47093333 0-1.9648-0.4896-1.9648-1.952v-1.96053333c-3.90506667-10.28373333-7.82613333-22.02666667-11.73866667-35.232 0 0-0.4896-0.9824-0.9824-2.9344l-0.9824-2.9344c-2.4448-10.2752-4.39786667-22.0224-5.86986667-35.2416 0-2.4448-1.95733333-7.33333333-1.95733333-9.77813334-1.45493333-14.20053333-1.94453333-28.88213333-1.94453333-43.07093333z m221.1872 438.46506667h313.19466666c18.1056 0 31.312 13.2064 31.312 31.31946666 0 18.10133333-13.2064 31.312-31.312 31.312h-313.19466666c-18.10986667 0-31.32373333-13.21066667-31.32373334-31.312 0-18.11306667 13.21386667-31.31946667 31.32373334-31.31946666z m13.696 125.27573333h283.83146666l-115.49333333 58.7104a71.3888 71.3888 0 0 1-56.76586667 0l-111.5712-58.7104zM545.27253333 196.90666667c37.6864 0 73.4048 15.1712 106.6848 46.00106666 33.2768 30.8224 49.9104 68.9984 49.9104 114.51093334 0 15.65546667 13.21386667 31.31946667 31.31946667 31.31946666 18.10986667 0 31.31946667-15.664 31.31946667-31.31946666 0-68.02453333-22.01813333-121.856-66.56106667-162.464-44.52586667-40.6208-95.41866667-60.6912-152.67413333-60.6912-18.1056 0-31.31946667 13.21066667-31.31946667 31.31946666s13.21386667 31.32373333 31.31946667 31.32373334z"  ></path></symbol><symbol id="i-lianjie" viewBox="0 0 1024 1024"><path d="M262.4 1017.6c-64 0-128-25.6-179.2-76.8-102.4-102.4-102.4-262.4 0-364.8l134.4-134.4 89.6 89.6-134.4 134.4c-51.2 51.2-51.2 128 0 179.2 51.2 51.2 128 51.2 179.2 0l179.2-179.2c25.6-25.6 38.4-57.6 38.4-89.6s-12.8-64-32-89.6l-70.4-64 89.6-89.6 70.4 70.4C672 448 697.6 512 697.6 582.4c0 70.4-25.6 134.4-76.8 179.2L441.6 940.8c-44.8 51.2-115.2 76.8-179.2 76.8z"  ></path><path d="M467.2 691.2l-70.4-64c-102.4-102.4-102.4-262.4 0-364.8L576 83.2c102.4-102.4 262.4-102.4 364.8 0 102.4 102.4 102.4 262.4 0 364.8L806.4 582.4l-89.6-89.6 134.4-134.4c51.2-51.2 51.2-128 0-179.2C800 128 716.8 128 672 179.2L486.4 352c-51.2 51.2-51.2 128 0 179.2l70.4 70.4-89.6 89.6z"  ></path></symbol><symbol id="i-yonghu" viewBox="0 0 1024 1024"><path d="M232.675556 290.702222C232.675556 136.533333 357.831111 11.377778 512 11.377778s279.324444 125.155556 279.324444 279.324444-125.155556 279.324444-279.324444 279.324445-279.324444-125.155556-279.324444-279.324445zM0 1012.053333c6.257778-67.697778 38.684444-307.2 287.857778-435.2 62.008889 48.355556 139.377778 77.937778 224.142222 77.937778 84.764444 0 163.271111-29.582222 225.28-78.506667 250.311111 128 280.462222 365.795556 286.72 436.337778-1.706667 1.137778-1022.293333-0.568889-1024-0.568889z m0 0"  ></path></symbol><symbol id="i-xiangmu1" viewBox="0 0 1025 1024"><path d="M1023.884396 292.652455L512.96256 0 0.001921 292.652455 511.940604 585.182275l511.943792-292.52982z"  ></path><path d="M0.001921 438.93014v73.08008L511.940604 804.580918l511.948902-292.570698V438.884152L511.940604 731.669461 0.001921 438.93014z"  ></path><path d="M0.001921 658.328782v73.131178L511.940604 1024.025549l511.948902-292.570699v-73.131177L511.940604 951.083433 0.001921 658.328782z"  ></path></symbol><symbol id="i-gongzuojingli" viewBox="0 0 1024 1024"><path d="M917.70453333 948.90666667H106.29546667a67.392 67.392 0 0 1-67.61066667-67.21066667V612.816h338.0928c0 37.13706667 30.256 67.21066667 67.61066667 67.21066667h135.22346666a67.42933333 67.42933333 0 0 0 67.61066667-67.21066667h338.0928V881.696c0 37.13706667-30.29226667 67.21066667-67.61066667 67.21066667zM579.61173333 478.39466667H444.38826667a67.42933333 67.42933333 0 0 0-67.61066667 67.21066666H38.6848V276.72533333c0-37.13706667 30.25493333-67.21066667 67.61066667-67.21066666h202.8704v-67.21066667c0-37.13706667 30.256-67.21066667 67.57546666-67.21066667h270.51733334c37.31946667 0 67.57546667 30.0736 67.57546666 67.21066667v67.21066667h202.86933334c37.31946667 0 67.61173333 30.11093333 67.61173333 67.21066666v268.88H647.2224c0-37.13706667-30.256-67.21066667-67.61066667-67.21066666z m0-336.09066667H444.38826667a67.42933333 67.42933333 0 0 0-67.61066667 67.21066667H647.22133333c0-37.13706667-30.256-67.21066667-67.61066666-67.21066667z"  ></path></symbol><symbol id="i-jiaoyu" viewBox="0 0 1255 1024"><path d="M1103.079226 499.348645v-121.55871l-442.500129 190.59613a66.064516 66.064516 0 0 1-52.389162-0.033033L35.410581 320.181677a33.032258 33.032258 0 0 1 0.033032-60.647225L607.331097 13.212903A66.064516 66.064516 0 0 1 659.720258 13.212903l572.779355 248.138323a33.032258 33.032258 0 0 1-0.033032 60.647226l-53.314065 22.990451v154.657032l46.046968 46.046968a33.032258 33.032258 0 0 1 0 46.707613l-60.581161 60.548129a33.032258 33.032258 0 0 1-46.707613 0L1057.032258 592.103226a33.032258 33.032258 0 0 1 0-46.740645l46.046968-46.013936z m-114.126452 14.137807v358.796387C988.985806 935.143226 818.671484 1024 608.586323 1024S228.252903 935.143226 228.252903 872.282839V493.039484h6.342194l360.547097 156.176516a99.096774 99.096774 0 0 0 78.616774 0.099097l315.226838-135.828645z"  ></path></symbol></svg>',
      d = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");

  if (d && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (t) {
      console && console.log(t);
    }
  }

  function h() {
    a || (a = !0, i());
  }

  c = function c() {
    var t,
        e,
        c,
        l,
        i,
        o = document.createElement("div");
    o.innerHTML = s, s = null, (t = o.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", e = t, (c = document.body).firstChild ? (l = e, (i = c.firstChild).parentNode.insertBefore(l, i)) : c.appendChild(e));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(c, 0) : (_l = function l() {
    document.removeEventListener("DOMContentLoaded", _l, !1), c();
  }, document.addEventListener("DOMContentLoaded", _l, !1)) : document.attachEvent && (i = c, o = t.document, a = !1, (_n = function n() {
    try {
      o.documentElement.doScroll("left");
    } catch (t) {
      return void setTimeout(_n, 50);
    }

    h();
  })(), o.onreadystatechange = function () {
    "complete" == o.readyState && (o.onreadystatechange = null, h());
  });
}(window);
},{}],"C:/Users/18348/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "4986" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["C:/Users/18348/AppData/Roaming/npm/node_modules/parcel-bundler/src/builtins/hmr-runtime.js","icon.js"], null)
//# sourceMappingURL=/icon.4951aad4.js.map