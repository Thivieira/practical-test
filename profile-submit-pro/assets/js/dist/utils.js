// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
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

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
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
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"1scUz":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 44943;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "c0bec139ef09e479";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, HMR_USE_SSE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var HMR_USE_SSE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && ![
        "localhost",
        "127.0.0.1",
        "0.0.0.0"
    ].includes(hostname) ? "wss" : "ws";
    var ws;
    if (HMR_USE_SSE) ws = new EventSource("/__parcel_hmr");
    else try {
        ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    } catch (err) {
        if (err.message) console.error(err.message);
        ws = {};
    }
    // Web extension context
    var extCtx = typeof browser === "undefined" ? typeof chrome === "undefined" ? null : chrome : browser;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    if (ws instanceof WebSocket) {
        ws.onerror = function(e) {
            if (e.message) console.error(e.message);
        };
        ws.onclose = function() {
            console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
        };
    }
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] \u2728 Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          \u{1F6A8} ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>\u{1F4DD} <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension fix
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3 && typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                        extCtx.runtime.reload();
                        return;
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"hFIk5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isErrorObjectEmpty", ()=>isErrorObjectEmpty);
parcelHelpers.export(exports, "formatDate", ()=>formatDate);
parcelHelpers.export(exports, "getCountries", ()=>getCountries);
parcelHelpers.export(exports, "getIpAddressCountryCode", ()=>getIpAddressCountryCode);
parcelHelpers.export(exports, "loadIntlTelInput", ()=>loadIntlTelInput);
var _intlTelInput = require("intl-tel-input");
var _intlTelInputDefault = parcelHelpers.interopDefault(_intlTelInput);
var _dayjs = require("./dayjs");
var _dayjsDefault = parcelHelpers.interopDefault(_dayjs);
const isErrorObjectEmpty = (error)=>{
    return typeof error === "object" && Object.values(error).every((e)=>e === "");
};
const formatDate = (date, format = "DD/MM/YYYY")=>{
    if (!date) return "";
    return (0, _dayjsDefault.default)(date).format(format);
};
const getCountries = async ()=>{
    const response = await fetch("/wp-content/plugins/profile-submit-pro/assets/countries.json");
    const data = await response.json();
    return data;
};
const getIpAddressCountryCode = async ()=>{
    const response = await fetch("https://ipapi.co/json");
    const data = await response.json();
    return data.country_code;
};
const loadIntlTelInput = async (successCallback, failureCallback)=>{
    const input = document.querySelector("#phone");
    if (input) (0, _intlTelInputDefault.default)(input, {
        initialCountry: "auto",
        containerClass: "iti w-full",
        geoIpLookup: async (callback)=>{
            try {
                const country_code = await getIpAddressCountryCode();
                callback(country_code);
                successCallback(country_code);
            } catch  {
                callback("us");
                failureCallback();
            }
        },
        loadUtilsOnInit: ()=>require("f43da30d0f119095")
    });
};

},{"./dayjs":"77bWH","@parcel/transformer-js/src/esmodule-helpers.js":"dIQaP","f43da30d0f119095":"iTWP1","intl-tel-input":"lXOeg"}],"77bWH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _dayjs = require("dayjs");
var _dayjsDefault = parcelHelpers.interopDefault(_dayjs);
exports.default = (0, _dayjsDefault.default);

},{"dayjs":"NJZFB","@parcel/transformer-js/src/esmodule-helpers.js":"dIQaP"}],"NJZFB":[function(require,module,exports) {
!function(t, e) {
    module.exports = e();
}(this, function() {
    "use strict";
    var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", c = "month", f = "quarter", h = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = {
        name: "en",
        weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
        months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
        ordinal: function(t) {
            var e = [
                "th",
                "st",
                "nd",
                "rd"
            ], n = t % 100;
            return "[" + t + (e[(n - 20) % 10] || e[n] || e[0]) + "]";
        }
    }, m = function(t, e, n) {
        var r = String(t);
        return !r || r.length >= e ? t : "" + Array(e + 1 - r.length).join(n) + t;
    }, v = {
        s: m,
        z: function(t) {
            var e = -t.utcOffset(), n = Math.abs(e), r = Math.floor(n / 60), i = n % 60;
            return (e <= 0 ? "+" : "-") + m(r, 2, "0") + ":" + m(i, 2, "0");
        },
        m: function t(e, n) {
            if (e.date() < n.date()) return -t(n, e);
            var r = 12 * (n.year() - e.year()) + (n.month() - e.month()), i = e.clone().add(r, c), s = n - i < 0, u = e.clone().add(r + (s ? -1 : 1), c);
            return +(-(r + (n - i) / (s ? i - u : u - i)) || 0);
        },
        a: function(t) {
            return t < 0 ? Math.ceil(t) || 0 : Math.floor(t);
        },
        p: function(t) {
            return ({
                M: c,
                y: h,
                w: o,
                d: a,
                D: d,
                h: u,
                m: s,
                s: i,
                ms: r,
                Q: f
            })[t] || String(t || "").toLowerCase().replace(/s$/, "");
        },
        u: function(t) {
            return void 0 === t;
        }
    }, g = "en", D = {};
    D[g] = M;
    var p = "$isDayjsObject", S = function(t) {
        return t instanceof _ || !(!t || !t[p]);
    }, w = function t(e, n, r) {
        var i;
        if (!e) return g;
        if ("string" == typeof e) {
            var s = e.toLowerCase();
            D[s] && (i = s), n && (D[s] = n, i = s);
            var u = e.split("-");
            if (!i && u.length > 1) return t(u[0]);
        } else {
            var a = e.name;
            D[a] = e, i = a;
        }
        return !r && i && (g = i), i || !r && g;
    }, O = function(t, e) {
        if (S(t)) return t.clone();
        var n = "object" == typeof e ? e : {};
        return n.date = t, n.args = arguments, new _(n);
    }, b = v;
    b.l = w, b.i = S, b.w = function(t, e) {
        return O(t, {
            locale: e.$L,
            utc: e.$u,
            x: e.$x,
            $offset: e.$offset
        });
    };
    var _ = function() {
        function M(t) {
            this.$L = w(t.locale, null, !0), this.parse(t), this.$x = this.$x || t.x || {}, this[p] = !0;
        }
        var m = M.prototype;
        return m.parse = function(t) {
            this.$d = function(t) {
                var e = t.date, n = t.utc;
                if (null === e) return new Date(NaN);
                if (b.u(e)) return new Date;
                if (e instanceof Date) return new Date(e);
                if ("string" == typeof e && !/Z$/i.test(e)) {
                    var r = e.match($);
                    if (r) {
                        var i = r[2] - 1 || 0, s = (r[7] || "0").substring(0, 3);
                        return n ? new Date(Date.UTC(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s)) : new Date(r[1], i, r[3] || 1, r[4] || 0, r[5] || 0, r[6] || 0, s);
                    }
                }
                return new Date(e);
            }(t), this.init();
        }, m.init = function() {
            var t = this.$d;
            this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds();
        }, m.$utils = function() {
            return b;
        }, m.isValid = function() {
            return !(this.$d.toString() === l);
        }, m.isSame = function(t, e) {
            var n = O(t);
            return this.startOf(e) <= n && n <= this.endOf(e);
        }, m.isAfter = function(t, e) {
            return O(t) < this.startOf(e);
        }, m.isBefore = function(t, e) {
            return this.endOf(e) < O(t);
        }, m.$g = function(t, e, n) {
            return b.u(t) ? this[e] : this.set(n, t);
        }, m.unix = function() {
            return Math.floor(this.valueOf() / 1e3);
        }, m.valueOf = function() {
            return this.$d.getTime();
        }, m.startOf = function(t, e) {
            var n = this, r = !!b.u(e) || e, f = b.p(t), l = function(t, e) {
                var i = b.w(n.$u ? Date.UTC(n.$y, e, t) : new Date(n.$y, e, t), n);
                return r ? i : i.endOf(a);
            }, $ = function(t, e) {
                return b.w(n.toDate()[t].apply(n.toDate("s"), (r ? [
                    0,
                    0,
                    0,
                    0
                ] : [
                    23,
                    59,
                    59,
                    999
                ]).slice(e)), n);
            }, y = this.$W, M = this.$M, m = this.$D, v = "set" + (this.$u ? "UTC" : "");
            switch(f){
                case h:
                    return r ? l(1, 0) : l(31, 11);
                case c:
                    return r ? l(1, M) : l(0, M + 1);
                case o:
                    var g = this.$locale().weekStart || 0, D = (y < g ? y + 7 : y) - g;
                    return l(r ? m - D : m + (6 - D), M);
                case a:
                case d:
                    return $(v + "Hours", 0);
                case u:
                    return $(v + "Minutes", 1);
                case s:
                    return $(v + "Seconds", 2);
                case i:
                    return $(v + "Milliseconds", 3);
                default:
                    return this.clone();
            }
        }, m.endOf = function(t) {
            return this.startOf(t, !1);
        }, m.$set = function(t, e) {
            var n, o = b.p(t), f = "set" + (this.$u ? "UTC" : ""), l = (n = {}, n[a] = f + "Date", n[d] = f + "Date", n[c] = f + "Month", n[h] = f + "FullYear", n[u] = f + "Hours", n[s] = f + "Minutes", n[i] = f + "Seconds", n[r] = f + "Milliseconds", n)[o], $ = o === a ? this.$D + (e - this.$W) : e;
            if (o === c || o === h) {
                var y = this.clone().set(d, 1);
                y.$d[l]($), y.init(), this.$d = y.set(d, Math.min(this.$D, y.daysInMonth())).$d;
            } else l && this.$d[l]($);
            return this.init(), this;
        }, m.set = function(t, e) {
            return this.clone().$set(t, e);
        }, m.get = function(t) {
            return this[b.p(t)]();
        }, m.add = function(r, f) {
            var d, l = this;
            r = Number(r);
            var $ = b.p(f), y = function(t) {
                var e = O(l);
                return b.w(e.date(e.date() + Math.round(t * r)), l);
            };
            if ($ === c) return this.set(c, this.$M + r);
            if ($ === h) return this.set(h, this.$y + r);
            if ($ === a) return y(1);
            if ($ === o) return y(7);
            var M = (d = {}, d[s] = e, d[u] = n, d[i] = t, d)[$] || 1, m = this.$d.getTime() + r * M;
            return b.w(m, this);
        }, m.subtract = function(t, e) {
            return this.add(-1 * t, e);
        }, m.format = function(t) {
            var e = this, n = this.$locale();
            if (!this.isValid()) return n.invalidDate || l;
            var r = t || "YYYY-MM-DDTHH:mm:ssZ", i = b.z(this), s = this.$H, u = this.$m, a = this.$M, o = n.weekdays, c = n.months, f = n.meridiem, h = function(t, n, i, s) {
                return t && (t[n] || t(e, r)) || i[n].slice(0, s);
            }, d = function(t) {
                return b.s(s % 12 || 12, t, "0");
            }, $ = f || function(t, e, n) {
                var r = t < 12 ? "AM" : "PM";
                return n ? r.toLowerCase() : r;
            };
            return r.replace(y, function(t, r) {
                return r || function(t) {
                    switch(t){
                        case "YY":
                            return String(e.$y).slice(-2);
                        case "YYYY":
                            return b.s(e.$y, 4, "0");
                        case "M":
                            return a + 1;
                        case "MM":
                            return b.s(a + 1, 2, "0");
                        case "MMM":
                            return h(n.monthsShort, a, c, 3);
                        case "MMMM":
                            return h(c, a);
                        case "D":
                            return e.$D;
                        case "DD":
                            return b.s(e.$D, 2, "0");
                        case "d":
                            return String(e.$W);
                        case "dd":
                            return h(n.weekdaysMin, e.$W, o, 2);
                        case "ddd":
                            return h(n.weekdaysShort, e.$W, o, 3);
                        case "dddd":
                            return o[e.$W];
                        case "H":
                            return String(s);
                        case "HH":
                            return b.s(s, 2, "0");
                        case "h":
                            return d(1);
                        case "hh":
                            return d(2);
                        case "a":
                            return $(s, u, !0);
                        case "A":
                            return $(s, u, !1);
                        case "m":
                            return String(u);
                        case "mm":
                            return b.s(u, 2, "0");
                        case "s":
                            return String(e.$s);
                        case "ss":
                            return b.s(e.$s, 2, "0");
                        case "SSS":
                            return b.s(e.$ms, 3, "0");
                        case "Z":
                            return i;
                    }
                    return null;
                }(t) || i.replace(":", "");
            });
        }, m.utcOffset = function() {
            return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m.diff = function(r, d, l) {
            var $, y = this, M = b.p(d), m = O(r), v = (m.utcOffset() - this.utcOffset()) * e, g = this - m, D = function() {
                return b.m(y, m);
            };
            switch(M){
                case h:
                    $ = D() / 12;
                    break;
                case c:
                    $ = D();
                    break;
                case f:
                    $ = D() / 3;
                    break;
                case o:
                    $ = (g - v) / 6048e5;
                    break;
                case a:
                    $ = (g - v) / 864e5;
                    break;
                case u:
                    $ = g / n;
                    break;
                case s:
                    $ = g / e;
                    break;
                case i:
                    $ = g / t;
                    break;
                default:
                    $ = g;
            }
            return l ? $ : b.a($);
        }, m.daysInMonth = function() {
            return this.endOf(c).$D;
        }, m.$locale = function() {
            return D[this.$L];
        }, m.locale = function(t, e) {
            if (!t) return this.$L;
            var n = this.clone(), r = w(t, e, !0);
            return r && (n.$L = r), n;
        }, m.clone = function() {
            return b.w(this.$d, this);
        }, m.toDate = function() {
            return new Date(this.valueOf());
        }, m.toJSON = function() {
            return this.isValid() ? this.toISOString() : null;
        }, m.toISOString = function() {
            return this.$d.toISOString();
        }, m.toString = function() {
            return this.$d.toUTCString();
        }, M;
    }(), k = _.prototype;
    return O.prototype = k, [
        [
            "$ms",
            r
        ],
        [
            "$s",
            i
        ],
        [
            "$m",
            s
        ],
        [
            "$H",
            u
        ],
        [
            "$W",
            a
        ],
        [
            "$M",
            c
        ],
        [
            "$y",
            h
        ],
        [
            "$D",
            d
        ]
    ].forEach(function(t) {
        k[t[1]] = function(e) {
            return this.$g(e, t[0], t[1]);
        };
    }), O.extend = function(t, e) {
        return t.$i || (t(e, _, O), t.$i = !0), O;
    }, O.locale = w, O.isDayjs = S, O.unix = function(t) {
        return O(1e3 * t);
    }, O.en = D[g], O.Ls = D, O.p = {}, O;
});

},{}],"dIQaP":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || Object.prototype.hasOwnProperty.call(dest, key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"iTWP1":[function(require,module,exports) {
module.exports = require("39b1aca96c13eb0a")(require("980afee9d1963cc2").getBundleURL("gxYCN") + "utils.a307ef1f.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("6T2X9"));

},{"39b1aca96c13eb0a":"efcI5","980afee9d1963cc2":"3w9oH"}],"efcI5":[function(require,module,exports) {
"use strict";
var cacheLoader = require("941c8f40c794934d");
module.exports = cacheLoader(function(bundle) {
    return new Promise(function(resolve, reject) {
        // Don't insert the same script twice (e.g. if it was already in the HTML)
        var existingScripts = document.getElementsByTagName("script");
        if ([].concat(existingScripts).some(function isCurrentBundle(script) {
            return script.src === bundle;
        })) {
            resolve();
            return;
        }
        var preloadLink = document.createElement("link");
        preloadLink.href = bundle;
        preloadLink.rel = "preload";
        preloadLink.as = "script";
        document.head.appendChild(preloadLink);
        var script = document.createElement("script");
        script.async = true;
        script.type = "text/javascript";
        script.src = bundle;
        script.onerror = function(e) {
            var error = new TypeError("Failed to fetch dynamically imported module: ".concat(bundle, ". Error: ").concat(e.message));
            script.onerror = script.onload = null;
            script.remove();
            reject(error);
        };
        script.onload = function() {
            script.onerror = script.onload = null;
            resolve();
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    });
});

},{"941c8f40c794934d":"kyUhl"}],"kyUhl":[function(require,module,exports) {
"use strict";
var cachedBundles = {};
var cachedPreloads = {};
var cachedPrefetches = {};
function getCache(type) {
    switch(type){
        case "preload":
            return cachedPreloads;
        case "prefetch":
            return cachedPrefetches;
        default:
            return cachedBundles;
    }
}
module.exports = function(loader, type) {
    return function(bundle) {
        var cache = getCache(type);
        if (cache[bundle]) return cache[bundle];
        return cache[bundle] = loader.apply(null, arguments).catch(function(e) {
            delete cache[bundle];
            throw e;
        });
    };
};

},{}],"3w9oH":[function(require,module,exports) {
"use strict";
var bundleURL = {};
function getBundleURLCached(id) {
    var value = bundleURL[id];
    if (!value) {
        value = getBundleURL();
        bundleURL[id] = value;
    }
    return value;
}
function getBundleURL() {
    try {
        throw new Error();
    } catch (err) {
        var matches = ("" + err.stack).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^)\n]+/g);
        if (matches) // The first two stack frames will be this function and getBundleURLCached.
        // Use the 3rd one, which will be a runtime in the original bundle.
        return getBaseURL(matches[2]);
    }
    return "/";
}
function getBaseURL(url) {
    return ("" + url).replace(/^((?:https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/.+)\/[^/]+$/, "$1") + "/";
}
// TODO: Replace uses with `new URL(url).origin` when ie11 is no longer supported.
function getOrigin(url) {
    var matches = ("" + url).match(/(https?|file|ftp|(chrome|moz|safari-web)-extension):\/\/[^/]+/);
    if (!matches) throw new Error("Origin not found");
    return matches[0];
}
exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
exports.getOrigin = getOrigin;

},{}],"lXOeg":[function(require,module,exports) {
/*
 * International Telephone Input v24.6.0
 * https://github.com/jackocnr/intl-tel-input.git
 * Licensed under the MIT license
 */ // UMD
(function(factory) {
    if (0, module.exports) module.exports = factory();
    else window.intlTelInput = factory();
})(()=>{
    var factoryOutput = (()=>{
        var __defProp = Object.defineProperty;
        var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
        var __getOwnPropNames = Object.getOwnPropertyNames;
        var __hasOwnProp = Object.prototype.hasOwnProperty;
        var __export = (target, all)=>{
            for(var name in all)__defProp(target, name, {
                get: all[name],
                enumerable: true
            });
        };
        var __copyProps = (to, from, except, desc)=>{
            if (from && typeof from === "object" || typeof from === "function") {
                for (let key of __getOwnPropNames(from))if (!__hasOwnProp.call(to, key) && key !== except) __defProp(to, key, {
                    get: ()=>from[key],
                    enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable
                });
            }
            return to;
        };
        var __toCommonJS = (mod)=>__copyProps(__defProp({}, "__esModule", {
                value: true
            }), mod);
        // src/js/intl-tel-input.ts
        var intl_tel_input_exports = {};
        __export(intl_tel_input_exports, {
            Iti: ()=>Iti,
            default: ()=>intl_tel_input_default
        });
        // src/js/intl-tel-input/data.ts
        var rawCountryData = [
            [
                "af",
                // Afghanistan
                "93"
            ],
            [
                "ax",
                // Åland Islands
                "358",
                1,
                [
                    "18"
                ]
            ],
            [
                "al",
                // Albania
                "355"
            ],
            [
                "dz",
                // Algeria
                "213"
            ],
            [
                "as",
                // American Samoa
                "1",
                5,
                [
                    "684"
                ]
            ],
            [
                "ad",
                // Andorra
                "376"
            ],
            [
                "ao",
                // Angola
                "244"
            ],
            [
                "ai",
                // Anguilla
                "1",
                6,
                [
                    "264"
                ]
            ],
            [
                "ag",
                // Antigua and Barbuda
                "1",
                7,
                [
                    "268"
                ]
            ],
            [
                "ar",
                // Argentina
                "54"
            ],
            [
                "am",
                // Armenia
                "374"
            ],
            [
                "aw",
                // Aruba
                "297"
            ],
            [
                "ac",
                // Ascension Island
                "247"
            ],
            [
                "au",
                // Australia
                "61",
                0
            ],
            [
                "at",
                // Austria
                "43"
            ],
            [
                "az",
                // Azerbaijan
                "994"
            ],
            [
                "bs",
                // Bahamas
                "1",
                8,
                [
                    "242"
                ]
            ],
            [
                "bh",
                // Bahrain
                "973"
            ],
            [
                "bd",
                // Bangladesh
                "880"
            ],
            [
                "bb",
                // Barbados
                "1",
                9,
                [
                    "246"
                ]
            ],
            [
                "by",
                // Belarus
                "375"
            ],
            [
                "be",
                // Belgium
                "32"
            ],
            [
                "bz",
                // Belize
                "501"
            ],
            [
                "bj",
                // Benin
                "229"
            ],
            [
                "bm",
                // Bermuda
                "1",
                10,
                [
                    "441"
                ]
            ],
            [
                "bt",
                // Bhutan
                "975"
            ],
            [
                "bo",
                // Bolivia
                "591"
            ],
            [
                "ba",
                // Bosnia and Herzegovina
                "387"
            ],
            [
                "bw",
                // Botswana
                "267"
            ],
            [
                "br",
                // Brazil
                "55"
            ],
            [
                "io",
                // British Indian Ocean Territory
                "246"
            ],
            [
                "vg",
                // British Virgin Islands
                "1",
                11,
                [
                    "284"
                ]
            ],
            [
                "bn",
                // Brunei
                "673"
            ],
            [
                "bg",
                // Bulgaria
                "359"
            ],
            [
                "bf",
                // Burkina Faso
                "226"
            ],
            [
                "bi",
                // Burundi
                "257"
            ],
            [
                "kh",
                // Cambodia
                "855"
            ],
            [
                "cm",
                // Cameroon
                "237"
            ],
            [
                "ca",
                // Canada
                "1",
                1,
                [
                    "204",
                    "226",
                    "236",
                    "249",
                    "250",
                    "263",
                    "289",
                    "306",
                    "343",
                    "354",
                    "365",
                    "367",
                    "368",
                    "382",
                    "387",
                    "403",
                    "416",
                    "418",
                    "428",
                    "431",
                    "437",
                    "438",
                    "450",
                    "584",
                    "468",
                    "474",
                    "506",
                    "514",
                    "519",
                    "548",
                    "579",
                    "581",
                    "584",
                    "587",
                    "604",
                    "613",
                    "639",
                    "647",
                    "672",
                    "683",
                    "705",
                    "709",
                    "742",
                    "753",
                    "778",
                    "780",
                    "782",
                    "807",
                    "819",
                    "825",
                    "867",
                    "873",
                    "879",
                    "902",
                    "905"
                ]
            ],
            [
                "cv",
                // Cape Verde
                "238"
            ],
            [
                "bq",
                // Caribbean Netherlands
                "599",
                1,
                [
                    "3",
                    "4",
                    "7"
                ]
            ],
            [
                "ky",
                // Cayman Islands
                "1",
                12,
                [
                    "345"
                ]
            ],
            [
                "cf",
                // Central African Republic
                "236"
            ],
            [
                "td",
                // Chad
                "235"
            ],
            [
                "cl",
                // Chile
                "56"
            ],
            [
                "cn",
                // China
                "86"
            ],
            [
                "cx",
                // Christmas Island
                "61",
                2,
                [
                    "89164"
                ]
            ],
            [
                "cc",
                // Cocos (Keeling) Islands
                "61",
                1,
                [
                    "89162"
                ]
            ],
            [
                "co",
                // Colombia
                "57"
            ],
            [
                "km",
                // Comoros
                "269"
            ],
            [
                "cg",
                // Congo (Brazzaville)
                "242"
            ],
            [
                "cd",
                // Congo (Kinshasa)
                "243"
            ],
            [
                "ck",
                // Cook Islands
                "682"
            ],
            [
                "cr",
                // Costa Rica
                "506"
            ],
            [
                "ci",
                // Côte d'Ivoire
                "225"
            ],
            [
                "hr",
                // Croatia
                "385"
            ],
            [
                "cu",
                // Cuba
                "53"
            ],
            [
                "cw",
                // Curaçao
                "599",
                0
            ],
            [
                "cy",
                // Cyprus
                "357"
            ],
            [
                "cz",
                // Czech Republic
                "420"
            ],
            [
                "dk",
                // Denmark
                "45"
            ],
            [
                "dj",
                // Djibouti
                "253"
            ],
            [
                "dm",
                // Dominica
                "1",
                13,
                [
                    "767"
                ]
            ],
            [
                "do",
                // Dominican Republic
                "1",
                2,
                [
                    "809",
                    "829",
                    "849"
                ]
            ],
            [
                "ec",
                // Ecuador
                "593"
            ],
            [
                "eg",
                // Egypt
                "20"
            ],
            [
                "sv",
                // El Salvador
                "503"
            ],
            [
                "gq",
                // Equatorial Guinea
                "240"
            ],
            [
                "er",
                // Eritrea
                "291"
            ],
            [
                "ee",
                // Estonia
                "372"
            ],
            [
                "sz",
                // Eswatini
                "268"
            ],
            [
                "et",
                // Ethiopia
                "251"
            ],
            [
                "fk",
                // Falkland Islands (Malvinas)
                "500"
            ],
            [
                "fo",
                // Faroe Islands
                "298"
            ],
            [
                "fj",
                // Fiji
                "679"
            ],
            [
                "fi",
                // Finland
                "358",
                0
            ],
            [
                "fr",
                // France
                "33"
            ],
            [
                "gf",
                // French Guiana
                "594"
            ],
            [
                "pf",
                // French Polynesia
                "689"
            ],
            [
                "ga",
                // Gabon
                "241"
            ],
            [
                "gm",
                // Gambia
                "220"
            ],
            [
                "ge",
                // Georgia
                "995"
            ],
            [
                "de",
                // Germany
                "49"
            ],
            [
                "gh",
                // Ghana
                "233"
            ],
            [
                "gi",
                // Gibraltar
                "350"
            ],
            [
                "gr",
                // Greece
                "30"
            ],
            [
                "gl",
                // Greenland
                "299"
            ],
            [
                "gd",
                // Grenada
                "1",
                14,
                [
                    "473"
                ]
            ],
            [
                "gp",
                // Guadeloupe
                "590",
                0
            ],
            [
                "gu",
                // Guam
                "1",
                15,
                [
                    "671"
                ]
            ],
            [
                "gt",
                // Guatemala
                "502"
            ],
            [
                "gg",
                // Guernsey
                "44",
                1,
                [
                    "1481",
                    "7781",
                    "7839",
                    "7911"
                ]
            ],
            [
                "gn",
                // Guinea
                "224"
            ],
            [
                "gw",
                // Guinea-Bissau
                "245"
            ],
            [
                "gy",
                // Guyana
                "592"
            ],
            [
                "ht",
                // Haiti
                "509"
            ],
            [
                "hn",
                // Honduras
                "504"
            ],
            [
                "hk",
                // Hong Kong SAR China
                "852"
            ],
            [
                "hu",
                // Hungary
                "36"
            ],
            [
                "is",
                // Iceland
                "354"
            ],
            [
                "in",
                // India
                "91"
            ],
            [
                "id",
                // Indonesia
                "62"
            ],
            [
                "ir",
                // Iran
                "98"
            ],
            [
                "iq",
                // Iraq
                "964"
            ],
            [
                "ie",
                // Ireland
                "353"
            ],
            [
                "im",
                // Isle of Man
                "44",
                2,
                [
                    "1624",
                    "74576",
                    "7524",
                    "7924",
                    "7624"
                ]
            ],
            [
                "il",
                // Israel
                "972"
            ],
            [
                "it",
                // Italy
                "39",
                0
            ],
            [
                "jm",
                // Jamaica
                "1",
                4,
                [
                    "876",
                    "658"
                ]
            ],
            [
                "jp",
                // Japan
                "81"
            ],
            [
                "je",
                // Jersey
                "44",
                3,
                [
                    "1534",
                    "7509",
                    "7700",
                    "7797",
                    "7829",
                    "7937"
                ]
            ],
            [
                "jo",
                // Jordan
                "962"
            ],
            [
                "kz",
                // Kazakhstan
                "7",
                1,
                [
                    "33",
                    "7"
                ]
            ],
            [
                "ke",
                // Kenya
                "254"
            ],
            [
                "ki",
                // Kiribati
                "686"
            ],
            [
                "xk",
                // Kosovo
                "383"
            ],
            [
                "kw",
                // Kuwait
                "965"
            ],
            [
                "kg",
                // Kyrgyzstan
                "996"
            ],
            [
                "la",
                // Laos
                "856"
            ],
            [
                "lv",
                // Latvia
                "371"
            ],
            [
                "lb",
                // Lebanon
                "961"
            ],
            [
                "ls",
                // Lesotho
                "266"
            ],
            [
                "lr",
                // Liberia
                "231"
            ],
            [
                "ly",
                // Libya
                "218"
            ],
            [
                "li",
                // Liechtenstein
                "423"
            ],
            [
                "lt",
                // Lithuania
                "370"
            ],
            [
                "lu",
                // Luxembourg
                "352"
            ],
            [
                "mo",
                // Macao SAR China
                "853"
            ],
            [
                "mg",
                // Madagascar
                "261"
            ],
            [
                "mw",
                // Malawi
                "265"
            ],
            [
                "my",
                // Malaysia
                "60"
            ],
            [
                "mv",
                // Maldives
                "960"
            ],
            [
                "ml",
                // Mali
                "223"
            ],
            [
                "mt",
                // Malta
                "356"
            ],
            [
                "mh",
                // Marshall Islands
                "692"
            ],
            [
                "mq",
                // Martinique
                "596"
            ],
            [
                "mr",
                // Mauritania
                "222"
            ],
            [
                "mu",
                // Mauritius
                "230"
            ],
            [
                "yt",
                // Mayotte
                "262",
                1,
                [
                    "269",
                    "639"
                ]
            ],
            [
                "mx",
                // Mexico
                "52"
            ],
            [
                "fm",
                // Micronesia
                "691"
            ],
            [
                "md",
                // Moldova
                "373"
            ],
            [
                "mc",
                // Monaco
                "377"
            ],
            [
                "mn",
                // Mongolia
                "976"
            ],
            [
                "me",
                // Montenegro
                "382"
            ],
            [
                "ms",
                // Montserrat
                "1",
                16,
                [
                    "664"
                ]
            ],
            [
                "ma",
                // Morocco
                "212",
                0
            ],
            [
                "mz",
                // Mozambique
                "258"
            ],
            [
                "mm",
                // Myanmar (Burma)
                "95"
            ],
            [
                "na",
                // Namibia
                "264"
            ],
            [
                "nr",
                // Nauru
                "674"
            ],
            [
                "np",
                // Nepal
                "977"
            ],
            [
                "nl",
                // Netherlands
                "31"
            ],
            [
                "nc",
                // New Caledonia
                "687"
            ],
            [
                "nz",
                // New Zealand
                "64"
            ],
            [
                "ni",
                // Nicaragua
                "505"
            ],
            [
                "ne",
                // Niger
                "227"
            ],
            [
                "ng",
                // Nigeria
                "234"
            ],
            [
                "nu",
                // Niue
                "683"
            ],
            [
                "nf",
                // Norfolk Island
                "672"
            ],
            [
                "kp",
                // North Korea
                "850"
            ],
            [
                "mk",
                // North Macedonia
                "389"
            ],
            [
                "mp",
                // Northern Mariana Islands
                "1",
                17,
                [
                    "670"
                ]
            ],
            [
                "no",
                // Norway
                "47",
                0
            ],
            [
                "om",
                // Oman
                "968"
            ],
            [
                "pk",
                // Pakistan
                "92"
            ],
            [
                "pw",
                // Palau
                "680"
            ],
            [
                "ps",
                // Palestinian Territories
                "970"
            ],
            [
                "pa",
                // Panama
                "507"
            ],
            [
                "pg",
                // Papua New Guinea
                "675"
            ],
            [
                "py",
                // Paraguay
                "595"
            ],
            [
                "pe",
                // Peru
                "51"
            ],
            [
                "ph",
                // Philippines
                "63"
            ],
            [
                "pl",
                // Poland
                "48"
            ],
            [
                "pt",
                // Portugal
                "351"
            ],
            [
                "pr",
                // Puerto Rico
                "1",
                3,
                [
                    "787",
                    "939"
                ]
            ],
            [
                "qa",
                // Qatar
                "974"
            ],
            [
                "re",
                // Réunion
                "262",
                0
            ],
            [
                "ro",
                // Romania
                "40"
            ],
            [
                "ru",
                // Russia
                "7",
                0
            ],
            [
                "rw",
                // Rwanda
                "250"
            ],
            [
                "ws",
                // Samoa
                "685"
            ],
            [
                "sm",
                // San Marino
                "378"
            ],
            [
                "st",
                // São Tomé & Príncipe
                "239"
            ],
            [
                "sa",
                // Saudi Arabia
                "966"
            ],
            [
                "sn",
                // Senegal
                "221"
            ],
            [
                "rs",
                // Serbia
                "381"
            ],
            [
                "sc",
                // Seychelles
                "248"
            ],
            [
                "sl",
                // Sierra Leone
                "232"
            ],
            [
                "sg",
                // Singapore
                "65"
            ],
            [
                "sx",
                // Sint Maarten
                "1",
                21,
                [
                    "721"
                ]
            ],
            [
                "sk",
                // Slovakia
                "421"
            ],
            [
                "si",
                // Slovenia
                "386"
            ],
            [
                "sb",
                // Solomon Islands
                "677"
            ],
            [
                "so",
                // Somalia
                "252"
            ],
            [
                "za",
                // South Africa
                "27"
            ],
            [
                "kr",
                // South Korea
                "82"
            ],
            [
                "ss",
                // South Sudan
                "211"
            ],
            [
                "es",
                // Spain
                "34"
            ],
            [
                "lk",
                // Sri Lanka
                "94"
            ],
            [
                "bl",
                // St. Barthélemy
                "590",
                1
            ],
            [
                "sh",
                // St. Helena
                "290"
            ],
            [
                "kn",
                // St. Kitts & Nevis
                "1",
                18,
                [
                    "869"
                ]
            ],
            [
                "lc",
                // St. Lucia
                "1",
                19,
                [
                    "758"
                ]
            ],
            [
                "mf",
                // St. Martin
                "590",
                2
            ],
            [
                "pm",
                // St. Pierre & Miquelon
                "508"
            ],
            [
                "vc",
                // St. Vincent & Grenadines
                "1",
                20,
                [
                    "784"
                ]
            ],
            [
                "sd",
                // Sudan
                "249"
            ],
            [
                "sr",
                // Suriname
                "597"
            ],
            [
                "sj",
                // Svalbard & Jan Mayen
                "47",
                1,
                [
                    "79"
                ]
            ],
            [
                "se",
                // Sweden
                "46"
            ],
            [
                "ch",
                // Switzerland
                "41"
            ],
            [
                "sy",
                // Syria
                "963"
            ],
            [
                "tw",
                // Taiwan
                "886"
            ],
            [
                "tj",
                // Tajikistan
                "992"
            ],
            [
                "tz",
                // Tanzania
                "255"
            ],
            [
                "th",
                // Thailand
                "66"
            ],
            [
                "tl",
                // Timor-Leste
                "670"
            ],
            [
                "tg",
                // Togo
                "228"
            ],
            [
                "tk",
                // Tokelau
                "690"
            ],
            [
                "to",
                // Tonga
                "676"
            ],
            [
                "tt",
                // Trinidad & Tobago
                "1",
                22,
                [
                    "868"
                ]
            ],
            [
                "tn",
                // Tunisia
                "216"
            ],
            [
                "tr",
                // Turkey
                "90"
            ],
            [
                "tm",
                // Turkmenistan
                "993"
            ],
            [
                "tc",
                // Turks & Caicos Islands
                "1",
                23,
                [
                    "649"
                ]
            ],
            [
                "tv",
                // Tuvalu
                "688"
            ],
            [
                "ug",
                // Uganda
                "256"
            ],
            [
                "ua",
                // Ukraine
                "380"
            ],
            [
                "ae",
                // United Arab Emirates
                "971"
            ],
            [
                "gb",
                // United Kingdom
                "44",
                0
            ],
            [
                "us",
                // United States
                "1",
                0
            ],
            [
                "uy",
                // Uruguay
                "598"
            ],
            [
                "vi",
                // U.S. Virgin Islands
                "1",
                24,
                [
                    "340"
                ]
            ],
            [
                "uz",
                // Uzbekistan
                "998"
            ],
            [
                "vu",
                // Vanuatu
                "678"
            ],
            [
                "va",
                // Vatican City
                "39",
                1,
                [
                    "06698"
                ]
            ],
            [
                "ve",
                // Venezuela
                "58"
            ],
            [
                "vn",
                // Vietnam
                "84"
            ],
            [
                "wf",
                // Wallis & Futuna
                "681"
            ],
            [
                "eh",
                // Western Sahara
                "212",
                1,
                [
                    "5288",
                    "5289"
                ]
            ],
            [
                "ye",
                // Yemen
                "967"
            ],
            [
                "zm",
                // Zambia
                "260"
            ],
            [
                "zw",
                // Zimbabwe
                "263"
            ]
        ];
        var allCountries = [];
        for(let i = 0; i < rawCountryData.length; i++){
            const c = rawCountryData[i];
            allCountries[i] = {
                name: "",
                // this is now populated in the plugin
                iso2: c[0],
                dialCode: c[1],
                priority: c[2] || 0,
                areaCodes: c[3] || null,
                nodeById: {}
            };
        }
        var data_default = allCountries;
        // src/js/intl-tel-input/i18n/en/countries.ts
        var countryTranslations = {
            ad: "Andorra",
            ae: "United Arab Emirates",
            af: "Afghanistan",
            ag: "Antigua & Barbuda",
            ai: "Anguilla",
            al: "Albania",
            am: "Armenia",
            ao: "Angola",
            ar: "Argentina",
            as: "American Samoa",
            at: "Austria",
            au: "Australia",
            aw: "Aruba",
            ax: "\xc5land Islands",
            az: "Azerbaijan",
            ba: "Bosnia & Herzegovina",
            bb: "Barbados",
            bd: "Bangladesh",
            be: "Belgium",
            bf: "Burkina Faso",
            bg: "Bulgaria",
            bh: "Bahrain",
            bi: "Burundi",
            bj: "Benin",
            bl: "St. Barth\xe9lemy",
            bm: "Bermuda",
            bn: "Brunei",
            bo: "Bolivia",
            bq: "Caribbean Netherlands",
            br: "Brazil",
            bs: "Bahamas",
            bt: "Bhutan",
            bw: "Botswana",
            by: "Belarus",
            bz: "Belize",
            ca: "Canada",
            cc: "Cocos (Keeling) Islands",
            cd: "Congo - Kinshasa",
            cf: "Central African Republic",
            cg: "Congo - Brazzaville",
            ch: "Switzerland",
            ci: "C\xf4te d\u2019Ivoire",
            ck: "Cook Islands",
            cl: "Chile",
            cm: "Cameroon",
            cn: "China",
            co: "Colombia",
            cr: "Costa Rica",
            cu: "Cuba",
            cv: "Cape Verde",
            cw: "Cura\xe7ao",
            cx: "Christmas Island",
            cy: "Cyprus",
            cz: "Czechia",
            de: "Germany",
            dj: "Djibouti",
            dk: "Denmark",
            dm: "Dominica",
            do: "Dominican Republic",
            dz: "Algeria",
            ec: "Ecuador",
            ee: "Estonia",
            eg: "Egypt",
            eh: "Western Sahara",
            er: "Eritrea",
            es: "Spain",
            et: "Ethiopia",
            fi: "Finland",
            fj: "Fiji",
            fk: "Falkland Islands",
            fm: "Micronesia",
            fo: "Faroe Islands",
            fr: "France",
            ga: "Gabon",
            gb: "United Kingdom",
            gd: "Grenada",
            ge: "Georgia",
            gf: "French Guiana",
            gg: "Guernsey",
            gh: "Ghana",
            gi: "Gibraltar",
            gl: "Greenland",
            gm: "Gambia",
            gn: "Guinea",
            gp: "Guadeloupe",
            gq: "Equatorial Guinea",
            gr: "Greece",
            gt: "Guatemala",
            gu: "Guam",
            gw: "Guinea-Bissau",
            gy: "Guyana",
            hk: "Hong Kong SAR China",
            hn: "Honduras",
            hr: "Croatia",
            ht: "Haiti",
            hu: "Hungary",
            id: "Indonesia",
            ie: "Ireland",
            il: "Israel",
            im: "Isle of Man",
            in: "India",
            io: "British Indian Ocean Territory",
            iq: "Iraq",
            ir: "Iran",
            is: "Iceland",
            it: "Italy",
            je: "Jersey",
            jm: "Jamaica",
            jo: "Jordan",
            jp: "Japan",
            ke: "Kenya",
            kg: "Kyrgyzstan",
            kh: "Cambodia",
            ki: "Kiribati",
            km: "Comoros",
            kn: "St. Kitts & Nevis",
            kp: "North Korea",
            kr: "South Korea",
            kw: "Kuwait",
            ky: "Cayman Islands",
            kz: "Kazakhstan",
            la: "Laos",
            lb: "Lebanon",
            lc: "St. Lucia",
            li: "Liechtenstein",
            lk: "Sri Lanka",
            lr: "Liberia",
            ls: "Lesotho",
            lt: "Lithuania",
            lu: "Luxembourg",
            lv: "Latvia",
            ly: "Libya",
            ma: "Morocco",
            mc: "Monaco",
            md: "Moldova",
            me: "Montenegro",
            mf: "St. Martin",
            mg: "Madagascar",
            mh: "Marshall Islands",
            mk: "North Macedonia",
            ml: "Mali",
            mm: "Myanmar (Burma)",
            mn: "Mongolia",
            mo: "Macao SAR China",
            mp: "Northern Mariana Islands",
            mq: "Martinique",
            mr: "Mauritania",
            ms: "Montserrat",
            mt: "Malta",
            mu: "Mauritius",
            mv: "Maldives",
            mw: "Malawi",
            mx: "Mexico",
            my: "Malaysia",
            mz: "Mozambique",
            na: "Namibia",
            nc: "New Caledonia",
            ne: "Niger",
            nf: "Norfolk Island",
            ng: "Nigeria",
            ni: "Nicaragua",
            nl: "Netherlands",
            no: "Norway",
            np: "Nepal",
            nr: "Nauru",
            nu: "Niue",
            nz: "New Zealand",
            om: "Oman",
            pa: "Panama",
            pe: "Peru",
            pf: "French Polynesia",
            pg: "Papua New Guinea",
            ph: "Philippines",
            pk: "Pakistan",
            pl: "Poland",
            pm: "St. Pierre & Miquelon",
            pr: "Puerto Rico",
            ps: "Palestinian Territories",
            pt: "Portugal",
            pw: "Palau",
            py: "Paraguay",
            qa: "Qatar",
            re: "R\xe9union",
            ro: "Romania",
            rs: "Serbia",
            ru: "Russia",
            rw: "Rwanda",
            sa: "Saudi Arabia",
            sb: "Solomon Islands",
            sc: "Seychelles",
            sd: "Sudan",
            se: "Sweden",
            sg: "Singapore",
            sh: "St. Helena",
            si: "Slovenia",
            sj: "Svalbard & Jan Mayen",
            sk: "Slovakia",
            sl: "Sierra Leone",
            sm: "San Marino",
            sn: "Senegal",
            so: "Somalia",
            sr: "Suriname",
            ss: "South Sudan",
            st: "S\xe3o Tom\xe9 & Pr\xedncipe",
            sv: "El Salvador",
            sx: "Sint Maarten",
            sy: "Syria",
            sz: "Eswatini",
            tc: "Turks & Caicos Islands",
            td: "Chad",
            tg: "Togo",
            th: "Thailand",
            tj: "Tajikistan",
            tk: "Tokelau",
            tl: "Timor-Leste",
            tm: "Turkmenistan",
            tn: "Tunisia",
            to: "Tonga",
            tr: "Turkey",
            tt: "Trinidad & Tobago",
            tv: "Tuvalu",
            tw: "Taiwan",
            tz: "Tanzania",
            ua: "Ukraine",
            ug: "Uganda",
            us: "United States",
            uy: "Uruguay",
            uz: "Uzbekistan",
            va: "Vatican City",
            vc: "St. Vincent & Grenadines",
            ve: "Venezuela",
            vg: "British Virgin Islands",
            vi: "U.S. Virgin Islands",
            vn: "Vietnam",
            vu: "Vanuatu",
            wf: "Wallis & Futuna",
            ws: "Samoa",
            ye: "Yemen",
            yt: "Mayotte",
            za: "South Africa",
            zm: "Zambia",
            zw: "Zimbabwe"
        };
        var countries_default = countryTranslations;
        // src/js/intl-tel-input/i18n/en/interface.ts
        var interfaceTranslations = {
            selectedCountryAriaLabel: "Selected country",
            noCountrySelected: "No country selected",
            countryListAriaLabel: "List of countries",
            searchPlaceholder: "Search",
            zeroSearchResults: "No results found",
            oneSearchResult: "1 result found",
            multipleSearchResults: "${count} results found",
            // additional countries (not supported by country-list library)
            ac: "Ascension Island",
            xk: "Kosovo"
        };
        var interface_default = interfaceTranslations;
        // src/js/intl-tel-input/i18n/en/index.ts
        var allTranslations = {
            ...countries_default,
            ...interface_default
        };
        var en_default = allTranslations;
        // src/js/intl-tel-input.ts
        for(let i = 0; i < data_default.length; i++)data_default[i].name = en_default[data_default[i].iso2];
        var id = 0;
        var defaults = {
            //* Whether or not to allow the dropdown.
            allowDropdown: true,
            //* Add a placeholder in the input with an example number for the selected country.
            autoPlaceholder: "polite",
            //* Modify the parentClass.
            containerClass: "",
            //* The order of the countries in the dropdown. Defaults to alphabetical.
            countryOrder: null,
            //* Add a country search input at the top of the dropdown.
            countrySearch: true,
            //* Modify the auto placeholder.
            customPlaceholder: null,
            //* Append menu to specified element.
            dropdownContainer: null,
            //* Don't display these countries.
            excludeCountries: [],
            //* Fix the dropdown width to the input width (rather than being as wide as the longest country name).
            fixDropdownWidth: true,
            //* Format the number as the user types
            formatAsYouType: true,
            //* Format the input value during initialisation and on setNumber.
            formatOnDisplay: true,
            //* geoIp lookup function.
            geoIpLookup: null,
            //* Inject a hidden input with the name returned from this function, and on submit, populate it with the result of getNumber.
            hiddenInput: null,
            //* Internationalise the plugin text e.g. search input placeholder, country names.
            i18n: {},
            //* Initial country.
            initialCountry: "",
            //* Specify the path to the libphonenumber script to enable validation/formatting.
            loadUtilsOnInit: "",
            //* National vs international formatting for numbers e.g. placeholders and displaying existing numbers.
            nationalMode: true,
            //* Display only these countries.
            onlyCountries: [],
            //* Number type to use for placeholders.
            placeholderNumberType: "MOBILE",
            //* Show flags - for both the selected country, and in the country dropdown
            showFlags: true,
            //* Display the international dial code next to the selected flag.
            separateDialCode: false,
            //* Only allow certain chars e.g. a plus followed by numeric digits, and cap at max valid length.
            strictMode: false,
            //* Use full screen popup instead of dropdown for country list.
            useFullscreenPopup: typeof navigator !== "undefined" && typeof window !== "undefined" ? //* We cannot just test screen size as some smartphones/website meta tags will report desktop resolutions.
            //* Note: to target Android Mobiles (and not Tablets), we must find 'Android' and 'Mobile'
            /Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || window.innerWidth <= 500 : false,
            //* Deprecated! Use `loadUtilsOnInit` instead.
            utilsScript: "",
            //* The number type to enforce during validation.
            validationNumberType: "MOBILE"
        };
        var regionlessNanpNumbers = [
            "800",
            "822",
            "833",
            "844",
            "855",
            "866",
            "877",
            "880",
            "881",
            "882",
            "883",
            "884",
            "885",
            "886",
            "887",
            "888",
            "889"
        ];
        var getNumeric = (s)=>s.replace(/\D/g, "");
        var normaliseString = (s = "")=>s.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
        var isRegionlessNanp = (number)=>{
            const numeric = getNumeric(number);
            if (numeric.charAt(0) === "1") {
                const areaCode = numeric.substr(1, 3);
                return regionlessNanpNumbers.indexOf(areaCode) !== -1;
            }
            return false;
        };
        var translateCursorPosition = (relevantChars, formattedValue, prevCaretPos, isDeleteForwards)=>{
            if (prevCaretPos === 0 && !isDeleteForwards) return 0;
            let count = 0;
            for(let i = 0; i < formattedValue.length; i++){
                if (/[+0-9]/.test(formattedValue[i])) count++;
                if (count === relevantChars && !isDeleteForwards) return i + 1;
                if (isDeleteForwards && count === relevantChars + 1) return i;
            }
            return formattedValue.length;
        };
        var createEl = (name, attrs, container)=>{
            const el = document.createElement(name);
            if (attrs) Object.entries(attrs).forEach(([key, value])=>el.setAttribute(key, value));
            if (container) container.appendChild(el);
            return el;
        };
        var forEachInstance = (method, ...args)=>{
            const { instances } = intlTelInput;
            Object.values(instances).forEach((instance)=>instance[method](...args));
        };
        var Iti = class {
            constructor(input, customOptions = {}){
                this.id = id++;
                this.telInput = input;
                this.highlightedItem = null;
                this.options = Object.assign({}, defaults, customOptions);
                this.hadInitialPlaceholder = Boolean(input.getAttribute("placeholder"));
            }
            //* Can't be private as it's called from intlTelInput convenience wrapper.
            _init() {
                if (this.options.useFullscreenPopup) this.options.fixDropdownWidth = false;
                if (this.options.onlyCountries.length === 1) this.options.initialCountry = this.options.onlyCountries[0];
                if (this.options.separateDialCode) this.options.nationalMode = false;
                if (this.options.allowDropdown && !this.options.showFlags && !this.options.separateDialCode) this.options.nationalMode = false;
                if (this.options.useFullscreenPopup && !this.options.dropdownContainer) this.options.dropdownContainer = document.body;
                this.isAndroid = typeof navigator !== "undefined" ? /Android/i.test(navigator.userAgent) : false;
                this.isRTL = !!this.telInput.closest("[dir=rtl]");
                const showOnDefaultSide = this.options.allowDropdown || this.options.separateDialCode;
                this.showSelectedCountryOnLeft = this.isRTL ? !showOnDefaultSide : showOnDefaultSide;
                if (this.options.separateDialCode) {
                    if (this.isRTL) this.originalPaddingRight = this.telInput.style.paddingRight;
                    else this.originalPaddingLeft = this.telInput.style.paddingLeft;
                }
                this.options.i18n = {
                    ...en_default,
                    ...this.options.i18n
                };
                const autoCountryPromise = new Promise((resolve, reject)=>{
                    this.resolveAutoCountryPromise = resolve;
                    this.rejectAutoCountryPromise = reject;
                });
                const utilsScriptPromise = new Promise((resolve, reject)=>{
                    this.resolveUtilsScriptPromise = resolve;
                    this.rejectUtilsScriptPromise = reject;
                });
                this.promise = Promise.all([
                    autoCountryPromise,
                    utilsScriptPromise
                ]);
                this.selectedCountryData = {};
                this._processCountryData();
                this._generateMarkup();
                this._setInitialState();
                this._initListeners();
                this._initRequests();
            }
            //********************
            //*  PRIVATE METHODS
            //********************
            //* Prepare all of the country data, including onlyCountries, excludeCountries, countryOrder options.
            _processCountryData() {
                this._processAllCountries();
                this._processDialCodes();
                this._translateCountryNames();
                this._sortCountries();
            }
            //* Sort countries by countryOrder option (if present), then name.
            _sortCountries() {
                if (this.options.countryOrder) this.options.countryOrder = this.options.countryOrder.map((country)=>country.toLowerCase());
                this.countries.sort((a, b)=>{
                    const { countryOrder } = this.options;
                    if (countryOrder) {
                        const aIndex = countryOrder.indexOf(a.iso2);
                        const bIndex = countryOrder.indexOf(b.iso2);
                        const aIndexExists = aIndex > -1;
                        const bIndexExists = bIndex > -1;
                        if (aIndexExists || bIndexExists) {
                            if (aIndexExists && bIndexExists) return aIndex - bIndex;
                            return aIndexExists ? -1 : 1;
                        }
                    }
                    return a.name.localeCompare(b.name);
                });
            }
            //* Add a dial code to this.dialCodeToIso2Map.
            _addToDialCodeMap(iso2, dialCode, priority) {
                if (dialCode.length > this.dialCodeMaxLen) this.dialCodeMaxLen = dialCode.length;
                if (!this.dialCodeToIso2Map.hasOwnProperty(dialCode)) this.dialCodeToIso2Map[dialCode] = [];
                for(let i = 0; i < this.dialCodeToIso2Map[dialCode].length; i++){
                    if (this.dialCodeToIso2Map[dialCode][i] === iso2) return;
                }
                const index = priority !== void 0 ? priority : this.dialCodeToIso2Map[dialCode].length;
                this.dialCodeToIso2Map[dialCode][index] = iso2;
            }
            //* Process onlyCountries or excludeCountries array if present.
            _processAllCountries() {
                const { onlyCountries, excludeCountries } = this.options;
                if (onlyCountries.length) {
                    const lowerCaseOnlyCountries = onlyCountries.map((country)=>country.toLowerCase());
                    this.countries = data_default.filter((country)=>lowerCaseOnlyCountries.indexOf(country.iso2) > -1);
                } else if (excludeCountries.length) {
                    const lowerCaseExcludeCountries = excludeCountries.map((country)=>country.toLowerCase());
                    this.countries = data_default.filter((country)=>lowerCaseExcludeCountries.indexOf(country.iso2) === -1);
                } else this.countries = data_default;
            }
            //* Translate Countries by object literal provided on config.
            _translateCountryNames() {
                for(let i = 0; i < this.countries.length; i++){
                    const iso2 = this.countries[i].iso2.toLowerCase();
                    if (this.options.i18n.hasOwnProperty(iso2)) this.countries[i].name = this.options.i18n[iso2];
                }
            }
            //* Generate this.dialCodes and this.dialCodeToIso2Map.
            _processDialCodes() {
                this.dialCodes = {};
                this.dialCodeMaxLen = 0;
                this.dialCodeToIso2Map = {};
                for(let i = 0; i < this.countries.length; i++){
                    const c = this.countries[i];
                    if (!this.dialCodes[c.dialCode]) this.dialCodes[c.dialCode] = true;
                    this._addToDialCodeMap(c.iso2, c.dialCode, c.priority);
                }
                for(let i = 0; i < this.countries.length; i++){
                    const c = this.countries[i];
                    if (c.areaCodes) {
                        const rootIso2Code = this.dialCodeToIso2Map[c.dialCode][0];
                        for(let j = 0; j < c.areaCodes.length; j++){
                            const areaCode = c.areaCodes[j];
                            for(let k = 1; k < areaCode.length; k++){
                                const partialDialCode = c.dialCode + areaCode.substr(0, k);
                                this._addToDialCodeMap(rootIso2Code, partialDialCode);
                                this._addToDialCodeMap(c.iso2, partialDialCode);
                            }
                            this._addToDialCodeMap(c.iso2, c.dialCode + areaCode);
                        }
                    }
                }
            }
            //* Generate all of the markup for the plugin: the selected country overlay, and the dropdown.
            _generateMarkup() {
                this.telInput.classList.add("iti__tel-input");
                if (!this.telInput.hasAttribute("autocomplete") && !(this.telInput.form && this.telInput.form.hasAttribute("autocomplete"))) this.telInput.setAttribute("autocomplete", "off");
                const { allowDropdown, separateDialCode, showFlags, containerClass, hiddenInput, dropdownContainer, fixDropdownWidth, useFullscreenPopup, countrySearch, i18n } = this.options;
                let parentClass = "iti";
                if (allowDropdown) parentClass += " iti--allow-dropdown";
                if (showFlags) parentClass += " iti--show-flags";
                if (containerClass) parentClass += ` ${containerClass}`;
                if (!useFullscreenPopup) parentClass += " iti--inline-dropdown";
                const wrapper = createEl("div", {
                    class: parentClass
                });
                this.telInput.parentNode?.insertBefore(wrapper, this.telInput);
                if (allowDropdown || showFlags || separateDialCode) {
                    this.countryContainer = createEl("div", {
                        class: "iti__country-container"
                    }, wrapper);
                    if (this.showSelectedCountryOnLeft) this.countryContainer.style.left = "0px";
                    else this.countryContainer.style.right = "0px";
                    if (allowDropdown) {
                        this.selectedCountry = createEl("button", {
                            type: "button",
                            class: "iti__selected-country",
                            "aria-expanded": "false",
                            "aria-label": this.options.i18n.selectedCountryAriaLabel,
                            "aria-haspopup": "true",
                            "aria-controls": `iti-${this.id}__dropdown-content`,
                            "role": "combobox"
                        }, this.countryContainer);
                        if (this.telInput.disabled) this.selectedCountry.setAttribute("disabled", "true");
                    } else this.selectedCountry = createEl("div", {
                        class: "iti__selected-country"
                    }, this.countryContainer);
                    const selectedCountryPrimary = createEl("div", {
                        class: "iti__selected-country-primary"
                    }, this.selectedCountry);
                    this.selectedCountryInner = createEl("div", {
                        class: "iti__flag"
                    }, selectedCountryPrimary);
                    this.selectedCountryA11yText = createEl("span", {
                        class: "iti__a11y-text"
                    }, this.selectedCountryInner);
                    if (allowDropdown) this.dropdownArrow = createEl("div", {
                        class: "iti__arrow",
                        "aria-hidden": "true"
                    }, selectedCountryPrimary);
                    if (separateDialCode) this.selectedDialCode = createEl("div", {
                        class: "iti__selected-dial-code"
                    }, this.selectedCountry);
                    if (allowDropdown) {
                        const extraClasses = fixDropdownWidth ? "" : "iti--flexible-dropdown-width";
                        this.dropdownContent = createEl("div", {
                            id: `iti-${this.id}__dropdown-content`,
                            class: `iti__dropdown-content iti__hide ${extraClasses}`
                        });
                        if (countrySearch) {
                            this.searchInput = createEl("input", {
                                type: "text",
                                class: "iti__search-input",
                                placeholder: i18n.searchPlaceholder,
                                role: "combobox",
                                "aria-expanded": "true",
                                "aria-label": i18n.searchPlaceholder,
                                "aria-controls": `iti-${this.id}__country-listbox`,
                                "aria-autocomplete": "list",
                                "autocomplete": "off"
                            }, this.dropdownContent);
                            this.searchResultsA11yText = createEl("span", {
                                class: "iti__a11y-text"
                            }, this.dropdownContent);
                        }
                        this.countryList = createEl("ul", {
                            class: "iti__country-list",
                            id: `iti-${this.id}__country-listbox`,
                            role: "listbox",
                            "aria-label": i18n.countryListAriaLabel
                        }, this.dropdownContent);
                        this._appendListItems();
                        if (countrySearch) this._updateSearchResultsText();
                        if (dropdownContainer) {
                            let dropdownClasses = "iti iti--container";
                            if (useFullscreenPopup) dropdownClasses += " iti--fullscreen-popup";
                            else dropdownClasses += " iti--inline-dropdown";
                            this.dropdown = createEl("div", {
                                class: dropdownClasses
                            });
                            this.dropdown.appendChild(this.dropdownContent);
                        } else this.countryContainer.appendChild(this.dropdownContent);
                    }
                }
                wrapper.appendChild(this.telInput);
                this._updateInputPadding();
                if (hiddenInput) {
                    const telInputName = this.telInput.getAttribute("name") || "";
                    const names = hiddenInput(telInputName);
                    if (names.phone) {
                        this.hiddenInput = createEl("input", {
                            type: "hidden",
                            name: names.phone
                        });
                        wrapper.appendChild(this.hiddenInput);
                    }
                    if (names.country) {
                        this.hiddenInputCountry = createEl("input", {
                            type: "hidden",
                            name: names.country
                        });
                        wrapper.appendChild(this.hiddenInputCountry);
                    }
                }
            }
            //* For each country: add a country list item <li> to the countryList <ul> container.
            _appendListItems() {
                for(let i = 0; i < this.countries.length; i++){
                    const c = this.countries[i];
                    const extraClass = i === 0 ? "iti__highlight" : "";
                    const listItem = createEl("li", {
                        id: `iti-${this.id}__item-${c.iso2}`,
                        class: `iti__country ${extraClass}`,
                        tabindex: "-1",
                        role: "option",
                        "data-dial-code": c.dialCode,
                        "data-country-code": c.iso2,
                        "aria-selected": "false"
                    }, this.countryList);
                    c.nodeById[this.id] = listItem;
                    let content = "";
                    if (this.options.showFlags) content += `<div class='iti__flag iti__${c.iso2}'></div>`;
                    content += `<span class='iti__country-name'>${c.name}</span>`;
                    content += `<span class='iti__dial-code'>+${c.dialCode}</span>`;
                    listItem.insertAdjacentHTML("beforeend", content);
                }
            }
            //* Set the initial state of the input value and the selected country by:
            //* 1. Extracting a dial code from the given number
            //* 2. Using explicit initialCountry
            _setInitialState(overrideAutoCountry = false) {
                const attributeValue = this.telInput.getAttribute("value");
                const inputValue = this.telInput.value;
                const useAttribute = attributeValue && attributeValue.charAt(0) === "+" && (!inputValue || inputValue.charAt(0) !== "+");
                const val = useAttribute ? attributeValue : inputValue;
                const dialCode = this._getDialCode(val);
                const isRegionlessNanpNumber = isRegionlessNanp(val);
                const { initialCountry, geoIpLookup } = this.options;
                const isAutoCountry = initialCountry === "auto" && geoIpLookup;
                if (dialCode && !isRegionlessNanpNumber) this._updateCountryFromNumber(val);
                else if (!isAutoCountry || overrideAutoCountry) {
                    const lowerInitialCountry = initialCountry ? initialCountry.toLowerCase() : "";
                    const isValidInitialCountry = lowerInitialCountry && this._getCountryData(lowerInitialCountry, true);
                    if (isValidInitialCountry) this._setCountry(lowerInitialCountry);
                    else if (dialCode && isRegionlessNanpNumber) this._setCountry("us");
                    else this._setCountry();
                }
                if (val) this._updateValFromNumber(val);
            }
            //* Initialise the main event listeners: input keyup, and click selected country.
            _initListeners() {
                this._initTelInputListeners();
                if (this.options.allowDropdown) this._initDropdownListeners();
                if ((this.hiddenInput || this.hiddenInputCountry) && this.telInput.form) this._initHiddenInputListener();
            }
            //* Update hidden input on form submit.
            _initHiddenInputListener() {
                this._handleHiddenInputSubmit = ()=>{
                    if (this.hiddenInput) this.hiddenInput.value = this.getNumber();
                    if (this.hiddenInputCountry) this.hiddenInputCountry.value = this.getSelectedCountryData().iso2 || "";
                };
                this.telInput.form?.addEventListener("submit", this._handleHiddenInputSubmit);
            }
            //* initialise the dropdown listeners.
            _initDropdownListeners() {
                this._handleLabelClick = (e)=>{
                    if (this.dropdownContent.classList.contains("iti__hide")) this.telInput.focus();
                    else e.preventDefault();
                };
                const label = this.telInput.closest("label");
                if (label) label.addEventListener("click", this._handleLabelClick);
                this._handleClickSelectedCountry = ()=>{
                    if (this.dropdownContent.classList.contains("iti__hide") && !this.telInput.disabled && !this.telInput.readOnly) this._openDropdown();
                };
                this.selectedCountry.addEventListener("click", this._handleClickSelectedCountry);
                this._handleCountryContainerKeydown = (e)=>{
                    const isDropdownHidden = this.dropdownContent.classList.contains("iti__hide");
                    if (isDropdownHidden && [
                        "ArrowUp",
                        "ArrowDown",
                        " ",
                        "Enter"
                    ].includes(e.key)) {
                        e.preventDefault();
                        e.stopPropagation();
                        this._openDropdown();
                    }
                    if (e.key === "Tab") this._closeDropdown();
                };
                this.countryContainer.addEventListener("keydown", this._handleCountryContainerKeydown);
            }
            //* Init many requests: utils script / geo ip lookup.
            _initRequests() {
                let { loadUtilsOnInit, utilsScript, initialCountry, geoIpLookup } = this.options;
                if (!loadUtilsOnInit && utilsScript) {
                    console.warn("intl-tel-input: The `utilsScript` option is deprecated and will be removed in a future release! Please use the `loadUtilsOnInit` option instead.");
                    loadUtilsOnInit = utilsScript;
                }
                if (loadUtilsOnInit && !intlTelInput.utils) {
                    this._handlePageLoad = ()=>{
                        window.removeEventListener("load", this._handlePageLoad);
                        intlTelInput.loadUtils(loadUtilsOnInit)?.catch(()=>{});
                    };
                    if (intlTelInput.documentReady()) this._handlePageLoad();
                    else window.addEventListener("load", this._handlePageLoad);
                } else this.resolveUtilsScriptPromise();
                const isAutoCountry = initialCountry === "auto" && geoIpLookup;
                if (isAutoCountry && !this.selectedCountryData.iso2) this._loadAutoCountry();
                else this.resolveAutoCountryPromise();
            }
            //* Perform the geo ip lookup.
            _loadAutoCountry() {
                if (intlTelInput.autoCountry) this.handleAutoCountry();
                else if (!intlTelInput.startedLoadingAutoCountry) {
                    intlTelInput.startedLoadingAutoCountry = true;
                    if (typeof this.options.geoIpLookup === "function") this.options.geoIpLookup((iso2 = "")=>{
                        const iso2Lower = iso2.toLowerCase();
                        const isValidIso2 = iso2Lower && this._getCountryData(iso2Lower, true);
                        if (isValidIso2) {
                            intlTelInput.autoCountry = iso2Lower;
                            setTimeout(()=>forEachInstance("handleAutoCountry"));
                        } else {
                            this._setInitialState(true);
                            forEachInstance("rejectAutoCountryPromise");
                        }
                    }, ()=>{
                        this._setInitialState(true);
                        forEachInstance("rejectAutoCountryPromise");
                    });
                }
            }
            _openDropdownWithPlus() {
                this._openDropdown();
                this.searchInput.value = "+";
                this._filterCountries("", true);
            }
            //* Initialize the tel input listeners.
            _initTelInputListeners() {
                const { strictMode, formatAsYouType, separateDialCode, formatOnDisplay, allowDropdown, countrySearch } = this.options;
                let userOverrideFormatting = false;
                if (/\p{L}/u.test(this.telInput.value)) userOverrideFormatting = true;
                this._handleInputEvent = (e)=>{
                    if (this.isAndroid && e?.data === "+" && separateDialCode && allowDropdown && countrySearch) {
                        const currentCaretPos = this.telInput.selectionStart || 0;
                        const valueBeforeCaret = this.telInput.value.substring(0, currentCaretPos - 1);
                        const valueAfterCaret = this.telInput.value.substring(currentCaretPos);
                        this.telInput.value = valueBeforeCaret + valueAfterCaret;
                        this._openDropdownWithPlus();
                        return;
                    }
                    if (this._updateCountryFromNumber(this.telInput.value)) this._triggerCountryChange();
                    const isFormattingChar = e?.data && /[^+0-9]/.test(e.data);
                    const isPaste = e?.inputType === "insertFromPaste" && this.telInput.value;
                    if (isFormattingChar || isPaste && !strictMode) userOverrideFormatting = true;
                    else if (!/[^+0-9]/.test(this.telInput.value)) userOverrideFormatting = false;
                    const disableFormatOnSetNumber = e?.detail && e.detail["isSetNumber"] && !formatOnDisplay;
                    if (formatAsYouType && !userOverrideFormatting && !disableFormatOnSetNumber) {
                        const currentCaretPos = this.telInput.selectionStart || 0;
                        const valueBeforeCaret = this.telInput.value.substring(0, currentCaretPos);
                        const relevantCharsBeforeCaret = valueBeforeCaret.replace(/[^+0-9]/g, "").length;
                        const isDeleteForwards = e?.inputType === "deleteContentForward";
                        const formattedValue = this._formatNumberAsYouType();
                        const newCaretPos = translateCursorPosition(relevantCharsBeforeCaret, formattedValue, currentCaretPos, isDeleteForwards);
                        this.telInput.value = formattedValue;
                        this.telInput.setSelectionRange(newCaretPos, newCaretPos);
                    }
                };
                this.telInput.addEventListener("input", this._handleInputEvent);
                if (strictMode || separateDialCode) {
                    this._handleKeydownEvent = (e)=>{
                        if (e.key && e.key.length === 1 && !e.altKey && !e.ctrlKey && !e.metaKey) {
                            if (separateDialCode && allowDropdown && countrySearch && e.key === "+") {
                                e.preventDefault();
                                this._openDropdownWithPlus();
                                return;
                            }
                            if (strictMode) {
                                const value = this.telInput.value;
                                const alreadyHasPlus = value.charAt(0) === "+";
                                const isInitialPlus = !alreadyHasPlus && this.telInput.selectionStart === 0 && e.key === "+";
                                const isNumeric = /^[0-9]$/.test(e.key);
                                const isAllowedChar = separateDialCode ? isNumeric : isInitialPlus || isNumeric;
                                const newValue = value.slice(0, this.telInput.selectionStart) + e.key + value.slice(this.telInput.selectionEnd);
                                const newFullNumber = this._getFullNumber(newValue);
                                const coreNumber = intlTelInput.utils.getCoreNumber(newFullNumber, this.selectedCountryData.iso2);
                                const hasExceededMaxLength = this.maxCoreNumberLength && coreNumber.length > this.maxCoreNumberLength;
                                let isChangingDialCode = false;
                                if (alreadyHasPlus) {
                                    const currentCountry = this.selectedCountryData.iso2;
                                    const newCountry = this._getCountryFromNumber(newFullNumber);
                                    isChangingDialCode = newCountry !== currentCountry;
                                }
                                if (!isAllowedChar || hasExceededMaxLength && !isChangingDialCode && !isInitialPlus) e.preventDefault();
                            }
                        }
                    };
                    this.telInput.addEventListener("keydown", this._handleKeydownEvent);
                }
            }
            //* Adhere to the input's maxlength attr.
            _cap(number) {
                const max = parseInt(this.telInput.getAttribute("maxlength") || "", 10);
                return max && number.length > max ? number.substr(0, max) : number;
            }
            //* Trigger a custom event on the input.
            _trigger(name, detailProps = {}) {
                const e = new CustomEvent(name, {
                    bubbles: true,
                    cancelable: true,
                    detail: detailProps
                });
                this.telInput.dispatchEvent(e);
            }
            //* Open the dropdown.
            _openDropdown() {
                const { fixDropdownWidth, countrySearch } = this.options;
                if (fixDropdownWidth) this.dropdownContent.style.width = `${this.telInput.offsetWidth}px`;
                this.dropdownContent.classList.remove("iti__hide");
                this.selectedCountry.setAttribute("aria-expanded", "true");
                this._setDropdownPosition();
                if (countrySearch) {
                    const firstCountryItem = this.countryList.firstElementChild;
                    if (firstCountryItem) {
                        this._highlightListItem(firstCountryItem, false);
                        this.countryList.scrollTop = 0;
                    }
                    this.searchInput.focus();
                }
                this._bindDropdownListeners();
                this.dropdownArrow.classList.add("iti__arrow--up");
                this._trigger("open:countrydropdown");
            }
            //* Set the dropdown position
            _setDropdownPosition() {
                if (this.options.dropdownContainer) this.options.dropdownContainer.appendChild(this.dropdown);
                if (!this.options.useFullscreenPopup) {
                    const inputPosRelativeToVP = this.telInput.getBoundingClientRect();
                    const inputHeight = this.telInput.offsetHeight;
                    if (this.options.dropdownContainer) {
                        this.dropdown.style.top = `${inputPosRelativeToVP.top + inputHeight}px`;
                        this.dropdown.style.left = `${inputPosRelativeToVP.left}px`;
                        this._handleWindowScroll = ()=>this._closeDropdown();
                        window.addEventListener("scroll", this._handleWindowScroll);
                    }
                }
            }
            //* We only bind dropdown listeners when the dropdown is open.
            _bindDropdownListeners() {
                this._handleMouseoverCountryList = (e)=>{
                    const listItem = e.target?.closest(".iti__country");
                    if (listItem) this._highlightListItem(listItem, false);
                };
                this.countryList.addEventListener("mouseover", this._handleMouseoverCountryList);
                this._handleClickCountryList = (e)=>{
                    const listItem = e.target?.closest(".iti__country");
                    if (listItem) this._selectListItem(listItem);
                };
                this.countryList.addEventListener("click", this._handleClickCountryList);
                let isOpening = true;
                this._handleClickOffToClose = ()=>{
                    if (!isOpening) this._closeDropdown();
                    isOpening = false;
                };
                document.documentElement.addEventListener("click", this._handleClickOffToClose);
                let query = "";
                let queryTimer = null;
                this._handleKeydownOnDropdown = (e)=>{
                    if ([
                        "ArrowUp",
                        "ArrowDown",
                        "Enter",
                        "Escape"
                    ].includes(e.key)) {
                        e.preventDefault();
                        e.stopPropagation();
                        if (e.key === "ArrowUp" || e.key === "ArrowDown") this._handleUpDownKey(e.key);
                        else if (e.key === "Enter") this._handleEnterKey();
                        else if (e.key === "Escape") this._closeDropdown();
                    }
                    if (!this.options.countrySearch && /^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(e.key)) {
                        e.stopPropagation();
                        if (queryTimer) clearTimeout(queryTimer);
                        query += e.key.toLowerCase();
                        this._searchForCountry(query);
                        queryTimer = setTimeout(()=>{
                            query = "";
                        }, 1e3);
                    }
                };
                document.addEventListener("keydown", this._handleKeydownOnDropdown);
                if (this.options.countrySearch) {
                    const doFilter = ()=>{
                        const inputQuery = this.searchInput.value.trim();
                        if (inputQuery) this._filterCountries(inputQuery);
                        else this._filterCountries("", true);
                    };
                    let keyupTimer = null;
                    this._handleSearchChange = ()=>{
                        if (keyupTimer) clearTimeout(keyupTimer);
                        keyupTimer = setTimeout(()=>{
                            doFilter();
                            keyupTimer = null;
                        }, 100);
                    };
                    this.searchInput.addEventListener("input", this._handleSearchChange);
                    this.searchInput.addEventListener("click", (e)=>e.stopPropagation());
                }
            }
            //* Hidden search (countrySearch disabled): Find the first list item whose name starts with the query string.
            _searchForCountry(query) {
                for(let i = 0; i < this.countries.length; i++){
                    const c = this.countries[i];
                    const startsWith = c.name.substr(0, query.length).toLowerCase() === query;
                    if (startsWith) {
                        const listItem = c.nodeById[this.id];
                        this._highlightListItem(listItem, false);
                        this._scrollTo(listItem);
                        break;
                    }
                }
            }
            //* Country search enabled: Filter the countries according to the search query.
            _filterCountries(query, isReset = false) {
                let noCountriesAddedYet = true;
                this.countryList.innerHTML = "";
                const normalisedQuery = normaliseString(query);
                for(let i = 0; i < this.countries.length; i++){
                    const c = this.countries[i];
                    const normalisedCountryName = normaliseString(c.name);
                    const countryInitials = c.name.split(/[^a-zA-ZÀ-ÿа-яА-Я]/).map((word)=>word[0]).join("").toLowerCase();
                    const fullDialCode = `+${c.dialCode}`;
                    if (isReset || normalisedCountryName.includes(normalisedQuery) || fullDialCode.includes(normalisedQuery) || c.iso2.includes(normalisedQuery) || countryInitials.includes(normalisedQuery)) {
                        const listItem = c.nodeById[this.id];
                        if (listItem) this.countryList.appendChild(listItem);
                        if (noCountriesAddedYet) {
                            this._highlightListItem(listItem, false);
                            noCountriesAddedYet = false;
                        }
                    }
                }
                if (noCountriesAddedYet) this._highlightListItem(null, false);
                this.countryList.scrollTop = 0;
                this._updateSearchResultsText();
            }
            //* Update search results text (for a11y).
            _updateSearchResultsText() {
                const { i18n } = this.options;
                const count = this.countryList.childElementCount;
                let searchText;
                if (count === 0) searchText = i18n.zeroSearchResults;
                else if (count === 1) searchText = i18n.oneSearchResult;
                else searchText = i18n.multipleSearchResults.replace("${count}", count.toString());
                this.searchResultsA11yText.textContent = searchText;
            }
            //* Highlight the next/prev item in the list (and ensure it is visible).
            _handleUpDownKey(key) {
                let next = key === "ArrowUp" ? this.highlightedItem?.previousElementSibling : this.highlightedItem?.nextElementSibling;
                if (!next && this.countryList.childElementCount > 1) next = key === "ArrowUp" ? this.countryList.lastElementChild : this.countryList.firstElementChild;
                if (next) {
                    this._scrollTo(next);
                    this._highlightListItem(next, false);
                }
            }
            //* Select the currently highlighted item.
            _handleEnterKey() {
                if (this.highlightedItem) this._selectListItem(this.highlightedItem);
            }
            //* Update the input's value to the given val (format first if possible)
            //* NOTE: this is called from _setInitialState, handleUtils and setNumber.
            _updateValFromNumber(fullNumber) {
                let number = fullNumber;
                if (this.options.formatOnDisplay && intlTelInput.utils && this.selectedCountryData) {
                    const useNational = this.options.nationalMode || number.charAt(0) !== "+" && !this.options.separateDialCode;
                    const { NATIONAL, INTERNATIONAL } = intlTelInput.utils.numberFormat;
                    const format = useNational ? NATIONAL : INTERNATIONAL;
                    number = intlTelInput.utils.formatNumber(number, this.selectedCountryData.iso2, format);
                }
                number = this._beforeSetNumber(number);
                this.telInput.value = number;
            }
            //* Check if need to select a new country based on the given number
            //* Note: called from _setInitialState, keyup handler, setNumber.
            _updateCountryFromNumber(fullNumber) {
                const iso2 = this._getCountryFromNumber(fullNumber);
                if (iso2 !== null) return this._setCountry(iso2);
                return false;
            }
            _getCountryFromNumber(fullNumber) {
                const plusIndex = fullNumber.indexOf("+");
                let number = plusIndex ? fullNumber.substring(plusIndex) : fullNumber;
                const selectedDialCode = this.selectedCountryData.dialCode;
                const isNanp = selectedDialCode === "1";
                if (number && isNanp && number.charAt(0) !== "+") {
                    if (number.charAt(0) !== "1") number = `1${number}`;
                    number = `+${number}`;
                }
                if (this.options.separateDialCode && selectedDialCode && number.charAt(0) !== "+") number = `+${selectedDialCode}${number}`;
                const dialCode = this._getDialCode(number, true);
                const numeric = getNumeric(number);
                if (dialCode) {
                    const iso2Codes = this.dialCodeToIso2Map[getNumeric(dialCode)];
                    const alreadySelected = iso2Codes.indexOf(this.selectedCountryData.iso2) !== -1 && numeric.length <= dialCode.length - 1;
                    const isRegionlessNanpNumber = selectedDialCode === "1" && isRegionlessNanp(numeric);
                    if (!isRegionlessNanpNumber && !alreadySelected) for(let j = 0; j < iso2Codes.length; j++){
                        if (iso2Codes[j]) return iso2Codes[j];
                    }
                } else if (number.charAt(0) === "+" && numeric.length) return "";
                else if ((!number || number === "+") && !this.selectedCountryData.iso2) return this.defaultCountry;
                return null;
            }
            //* Remove highlighting from other list items and highlight the given item.
            _highlightListItem(listItem, shouldFocus) {
                const prevItem = this.highlightedItem;
                if (prevItem) {
                    prevItem.classList.remove("iti__highlight");
                    prevItem.setAttribute("aria-selected", "false");
                }
                this.highlightedItem = listItem;
                if (this.highlightedItem) {
                    this.highlightedItem.classList.add("iti__highlight");
                    this.highlightedItem.setAttribute("aria-selected", "true");
                    const activeDescendant = this.highlightedItem.getAttribute("id") || "";
                    this.selectedCountry.setAttribute("aria-activedescendant", activeDescendant);
                    if (this.options.countrySearch) this.searchInput.setAttribute("aria-activedescendant", activeDescendant);
                }
                if (shouldFocus) this.highlightedItem.focus();
            }
            //* Find the country data for the given iso2 code
            //* the ignoreOnlyCountriesOption is only used during init() while parsing the onlyCountries array
            _getCountryData(iso2, allowFail) {
                for(let i = 0; i < this.countries.length; i++){
                    if (this.countries[i].iso2 === iso2) return this.countries[i];
                }
                if (allowFail) return null;
                throw new Error(`No country data for '${iso2}'`);
            }
            //* Update the selected country, dial code (if separateDialCode), placeholder, title, and active list item.
            //* Note: called from _setInitialState, _updateCountryFromNumber, _selectListItem, setCountry.
            _setCountry(iso2) {
                const { separateDialCode, showFlags, i18n } = this.options;
                const prevCountry = this.selectedCountryData.iso2 ? this.selectedCountryData : {};
                this.selectedCountryData = iso2 ? this._getCountryData(iso2, false) || {} : {};
                if (this.selectedCountryData.iso2) this.defaultCountry = this.selectedCountryData.iso2;
                if (this.selectedCountryInner) {
                    let flagClass = "";
                    let a11yText = "";
                    if (iso2 && showFlags) {
                        flagClass = `iti__flag iti__${iso2}`;
                        a11yText = `${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`;
                    } else {
                        flagClass = "iti__flag iti__globe";
                        a11yText = i18n.noCountrySelected;
                    }
                    this.selectedCountryInner.className = flagClass;
                    this.selectedCountryA11yText.textContent = a11yText;
                }
                this._setSelectedCountryTitleAttribute(iso2, separateDialCode);
                if (separateDialCode) {
                    const dialCode = this.selectedCountryData.dialCode ? `+${this.selectedCountryData.dialCode}` : "";
                    this.selectedDialCode.innerHTML = dialCode;
                    this._updateInputPadding();
                }
                this._updatePlaceholder();
                this._updateMaxLength();
                return prevCountry.iso2 !== iso2;
            }
            //* Update the input padding to make space for the selected country/dial code.
            _updateInputPadding() {
                if (this.selectedCountry) {
                    const selectedCountryWidth = this.selectedCountry.offsetWidth || this._getHiddenSelectedCountryWidth();
                    const inputPadding = selectedCountryWidth + 6;
                    if (this.showSelectedCountryOnLeft) this.telInput.style.paddingLeft = `${inputPadding}px`;
                    else this.telInput.style.paddingRight = `${inputPadding}px`;
                }
            }
            //* Update the maximum valid number length for the currently selected country.
            _updateMaxLength() {
                const { strictMode, placeholderNumberType, validationNumberType } = this.options;
                const { iso2 } = this.selectedCountryData;
                if (strictMode && intlTelInput.utils) {
                    if (iso2) {
                        const numberType = intlTelInput.utils.numberType[placeholderNumberType];
                        let exampleNumber = intlTelInput.utils.getExampleNumber(iso2, false, numberType, true);
                        let validNumber = exampleNumber;
                        while(intlTelInput.utils.isPossibleNumber(exampleNumber, iso2, validationNumberType)){
                            validNumber = exampleNumber;
                            exampleNumber += "0";
                        }
                        const coreNumber = intlTelInput.utils.getCoreNumber(validNumber, iso2);
                        this.maxCoreNumberLength = coreNumber.length;
                        if (iso2 === "by") this.maxCoreNumberLength = coreNumber.length + 1;
                    } else this.maxCoreNumberLength = null;
                }
            }
            _setSelectedCountryTitleAttribute(iso2 = null, separateDialCode) {
                if (!this.selectedCountry) return;
                let title;
                if (iso2 && !separateDialCode) title = `${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`;
                else if (iso2) title = this.selectedCountryData.name;
                else title = "Unknown";
                this.selectedCountry.setAttribute("title", title);
            }
            //* When the input is in a hidden container during initialisation, we must inject some markup
            //* into the end of the DOM to calculate the correct offsetWidth.
            //* NOTE: this is only used when separateDialCode is enabled, so countryContainer and selectedCountry
            //* will definitely exist.
            _getHiddenSelectedCountryWidth() {
                if (this.telInput.parentNode) {
                    const containerClone = this.telInput.parentNode.cloneNode(false);
                    containerClone.style.visibility = "hidden";
                    document.body.appendChild(containerClone);
                    const countryContainerClone = this.countryContainer.cloneNode();
                    containerClone.appendChild(countryContainerClone);
                    const selectedCountryClone = this.selectedCountry.cloneNode(true);
                    countryContainerClone.appendChild(selectedCountryClone);
                    const width = selectedCountryClone.offsetWidth;
                    document.body.removeChild(containerClone);
                    return width;
                }
                return 0;
            }
            //* Update the input placeholder to an example number from the currently selected country.
            _updatePlaceholder() {
                const { autoPlaceholder, placeholderNumberType, nationalMode, customPlaceholder } = this.options;
                const shouldSetPlaceholder = autoPlaceholder === "aggressive" || !this.hadInitialPlaceholder && autoPlaceholder === "polite";
                if (intlTelInput.utils && shouldSetPlaceholder) {
                    const numberType = intlTelInput.utils.numberType[placeholderNumberType];
                    let placeholder = this.selectedCountryData.iso2 ? intlTelInput.utils.getExampleNumber(this.selectedCountryData.iso2, nationalMode, numberType) : "";
                    placeholder = this._beforeSetNumber(placeholder);
                    if (typeof customPlaceholder === "function") placeholder = customPlaceholder(placeholder, this.selectedCountryData);
                    this.telInput.setAttribute("placeholder", placeholder);
                }
            }
            //* Called when the user selects a list item from the dropdown.
            _selectListItem(listItem) {
                const countryChanged = this._setCountry(listItem.getAttribute("data-country-code"));
                this._closeDropdown();
                this._updateDialCode(listItem.getAttribute("data-dial-code"));
                this.telInput.focus();
                if (countryChanged) this._triggerCountryChange();
            }
            //* Close the dropdown and unbind any listeners.
            _closeDropdown() {
                this.dropdownContent.classList.add("iti__hide");
                this.selectedCountry.setAttribute("aria-expanded", "false");
                this.selectedCountry.removeAttribute("aria-activedescendant");
                if (this.highlightedItem) this.highlightedItem.setAttribute("aria-selected", "false");
                if (this.options.countrySearch) this.searchInput.removeAttribute("aria-activedescendant");
                this.dropdownArrow.classList.remove("iti__arrow--up");
                document.removeEventListener("keydown", this._handleKeydownOnDropdown);
                if (this.options.countrySearch) this.searchInput.removeEventListener("input", this._handleSearchChange);
                document.documentElement.removeEventListener("click", this._handleClickOffToClose);
                this.countryList.removeEventListener("mouseover", this._handleMouseoverCountryList);
                this.countryList.removeEventListener("click", this._handleClickCountryList);
                if (this.options.dropdownContainer) {
                    if (!this.options.useFullscreenPopup) window.removeEventListener("scroll", this._handleWindowScroll);
                    if (this.dropdown.parentNode) this.dropdown.parentNode.removeChild(this.dropdown);
                }
                if (this._handlePageLoad) window.removeEventListener("load", this._handlePageLoad);
                this._trigger("close:countrydropdown");
            }
            //* Check if an element is visible within it's container, else scroll until it is.
            _scrollTo(element) {
                const container = this.countryList;
                const scrollTop = document.documentElement.scrollTop;
                const containerHeight = container.offsetHeight;
                const containerTop = container.getBoundingClientRect().top + scrollTop;
                const containerBottom = containerTop + containerHeight;
                const elementHeight = element.offsetHeight;
                const elementTop = element.getBoundingClientRect().top + scrollTop;
                const elementBottom = elementTop + elementHeight;
                const newScrollTop = elementTop - containerTop + container.scrollTop;
                if (elementTop < containerTop) container.scrollTop = newScrollTop;
                else if (elementBottom > containerBottom) {
                    const heightDifference = containerHeight - elementHeight;
                    container.scrollTop = newScrollTop - heightDifference;
                }
            }
            //* Replace any existing dial code with the new one
            //* Note: called from _selectListItem and setCountry
            _updateDialCode(newDialCodeBare) {
                const inputVal = this.telInput.value;
                const newDialCode = `+${newDialCodeBare}`;
                let newNumber;
                if (inputVal.charAt(0) === "+") {
                    const prevDialCode = this._getDialCode(inputVal);
                    if (prevDialCode) newNumber = inputVal.replace(prevDialCode, newDialCode);
                    else newNumber = newDialCode;
                    this.telInput.value = newNumber;
                }
            }
            //* Try and extract a valid international dial code from a full telephone number.
            //* Note: returns the raw string inc plus character and any whitespace/dots etc.
            _getDialCode(number, includeAreaCode) {
                let dialCode = "";
                if (number.charAt(0) === "+") {
                    let numericChars = "";
                    for(let i = 0; i < number.length; i++){
                        const c = number.charAt(i);
                        if (!isNaN(parseInt(c, 10))) {
                            numericChars += c;
                            if (includeAreaCode) {
                                if (this.dialCodeToIso2Map[numericChars]) dialCode = number.substr(0, i + 1);
                            } else if (this.dialCodes[numericChars]) {
                                dialCode = number.substr(0, i + 1);
                                break;
                            }
                            if (numericChars.length === this.dialCodeMaxLen) break;
                        }
                    }
                }
                return dialCode;
            }
            //* Get the input val, adding the dial code if separateDialCode is enabled.
            _getFullNumber(overrideVal) {
                const val = overrideVal || this.telInput.value.trim();
                const { dialCode } = this.selectedCountryData;
                let prefix;
                const numericVal = getNumeric(val);
                if (this.options.separateDialCode && val.charAt(0) !== "+" && dialCode && numericVal) prefix = `+${dialCode}`;
                else prefix = "";
                return prefix + val;
            }
            //* Remove the dial code if separateDialCode is enabled also cap the length if the input has a maxlength attribute
            _beforeSetNumber(fullNumber) {
                let number = fullNumber;
                if (this.options.separateDialCode) {
                    let dialCode = this._getDialCode(number);
                    if (dialCode) {
                        dialCode = `+${this.selectedCountryData.dialCode}`;
                        const start = number[dialCode.length] === " " || number[dialCode.length] === "-" ? dialCode.length + 1 : dialCode.length;
                        number = number.substr(start);
                    }
                }
                return this._cap(number);
            }
            //* Trigger the 'countrychange' event.
            _triggerCountryChange() {
                this._trigger("countrychange");
            }
            //* Format the number as the user types.
            _formatNumberAsYouType() {
                const val = this._getFullNumber();
                const result = intlTelInput.utils ? intlTelInput.utils.formatNumberAsYouType(val, this.selectedCountryData.iso2) : val;
                const { dialCode } = this.selectedCountryData;
                if (this.options.separateDialCode && this.telInput.value.charAt(0) !== "+" && result.includes(`+${dialCode}`)) {
                    const afterDialCode = result.split(`+${dialCode}`)[1] || "";
                    return afterDialCode.trim();
                }
                return result;
            }
            //**************************
            //*  SECRET PUBLIC METHODS
            //**************************
            //* This is called when the geoip call returns.
            handleAutoCountry() {
                if (this.options.initialCountry === "auto" && intlTelInput.autoCountry) {
                    this.defaultCountry = intlTelInput.autoCountry;
                    const hasSelectedCountryOrGlobe = this.selectedCountryData.iso2 || this.selectedCountryInner.classList.contains("iti__globe");
                    if (!hasSelectedCountryOrGlobe) this.setCountry(this.defaultCountry);
                    this.resolveAutoCountryPromise();
                }
            }
            //* This is called when the utils request completes.
            handleUtils() {
                if (intlTelInput.utils) {
                    if (this.telInput.value) this._updateValFromNumber(this.telInput.value);
                    if (this.selectedCountryData.iso2) {
                        this._updatePlaceholder();
                        this._updateMaxLength();
                    }
                }
                this.resolveUtilsScriptPromise();
            }
            //********************
            //*  PUBLIC METHODS
            //********************
            //* Remove plugin.
            destroy() {
                const { allowDropdown, separateDialCode } = this.options;
                if (allowDropdown) {
                    this._closeDropdown();
                    this.selectedCountry.removeEventListener("click", this._handleClickSelectedCountry);
                    this.countryContainer.removeEventListener("keydown", this._handleCountryContainerKeydown);
                    const label = this.telInput.closest("label");
                    if (label) label.removeEventListener("click", this._handleLabelClick);
                }
                const { form } = this.telInput;
                if (this._handleHiddenInputSubmit && form) form.removeEventListener("submit", this._handleHiddenInputSubmit);
                this.telInput.removeEventListener("input", this._handleInputEvent);
                if (this._handleKeydownEvent) this.telInput.removeEventListener("keydown", this._handleKeydownEvent);
                this.telInput.removeAttribute("data-intl-tel-input-id");
                if (separateDialCode) {
                    if (this.isRTL) this.telInput.style.paddingRight = this.originalPaddingRight;
                    else this.telInput.style.paddingLeft = this.originalPaddingLeft;
                }
                const wrapper = this.telInput.parentNode;
                wrapper?.parentNode?.insertBefore(this.telInput, wrapper);
                wrapper?.parentNode?.removeChild(wrapper);
                delete intlTelInput.instances[this.id];
            }
            //* Get the extension from the current number.
            getExtension() {
                if (intlTelInput.utils) return intlTelInput.utils.getExtension(this._getFullNumber(), this.selectedCountryData.iso2);
                return "";
            }
            //* Format the number to the given format.
            getNumber(format) {
                if (intlTelInput.utils) {
                    const { iso2 } = this.selectedCountryData;
                    return intlTelInput.utils.formatNumber(this._getFullNumber(), iso2, format);
                }
                return "";
            }
            //* Get the type of the entered number e.g. landline/mobile.
            getNumberType() {
                if (intlTelInput.utils) return intlTelInput.utils.getNumberType(this._getFullNumber(), this.selectedCountryData.iso2);
                return -99;
            }
            //* Get the country data for the currently selected country.
            getSelectedCountryData() {
                return this.selectedCountryData;
            }
            //* Get the validation error.
            getValidationError() {
                if (intlTelInput.utils) {
                    const { iso2 } = this.selectedCountryData;
                    return intlTelInput.utils.getValidationError(this._getFullNumber(), iso2);
                }
                return -99;
            }
            //* Validate the input val
            isValidNumber() {
                if (!this.selectedCountryData.iso2) return false;
                const val = this._getFullNumber();
                const alphaCharPosition = val.search(/\p{L}/u);
                if (alphaCharPosition > -1) {
                    const beforeAlphaChar = val.substring(0, alphaCharPosition);
                    const beforeAlphaIsValid = this._utilsIsPossibleNumber(beforeAlphaChar);
                    const isValid = this._utilsIsPossibleNumber(val);
                    return beforeAlphaIsValid && isValid;
                }
                return this._utilsIsPossibleNumber(val);
            }
            _utilsIsPossibleNumber(val) {
                return intlTelInput.utils ? intlTelInput.utils.isPossibleNumber(val, this.selectedCountryData.iso2, this.options.validationNumberType) : null;
            }
            //* Validate the input val (precise)
            isValidNumberPrecise() {
                if (!this.selectedCountryData.iso2) return false;
                const val = this._getFullNumber();
                const alphaCharPosition = val.search(/\p{L}/u);
                if (alphaCharPosition > -1) {
                    const beforeAlphaChar = val.substring(0, alphaCharPosition);
                    const beforeAlphaIsValid = this._utilsIsValidNumber(beforeAlphaChar);
                    const isValid = this._utilsIsValidNumber(val);
                    return beforeAlphaIsValid && isValid;
                }
                return this._utilsIsValidNumber(val);
            }
            _utilsIsValidNumber(val) {
                return intlTelInput.utils ? intlTelInput.utils.isValidNumber(val, this.selectedCountryData.iso2) : null;
            }
            //* Update the selected country, and update the input val accordingly.
            setCountry(iso2) {
                const iso2Lower = iso2?.toLowerCase();
                const currentCountry = this.selectedCountryData.iso2;
                const isCountryChange = iso2 && iso2Lower !== currentCountry || !iso2 && currentCountry;
                if (isCountryChange) {
                    this._setCountry(iso2Lower);
                    this._updateDialCode(this.selectedCountryData.dialCode);
                    this._triggerCountryChange();
                }
            }
            //* Set the input value and update the country.
            setNumber(number) {
                const countryChanged = this._updateCountryFromNumber(number);
                this._updateValFromNumber(number);
                if (countryChanged) this._triggerCountryChange();
                this._trigger("input", {
                    isSetNumber: true
                });
            }
            //* Set the placeholder number typ
            setPlaceholderNumberType(type) {
                this.options.placeholderNumberType = type;
                this._updatePlaceholder();
            }
            setDisabled(disabled) {
                this.telInput.disabled = disabled;
                if (disabled) this.selectedCountry.setAttribute("disabled", "true");
                else this.selectedCountry.removeAttribute("disabled");
            }
        };
        var loadUtils = (source)=>{
            if (!intlTelInput.utils && !intlTelInput.startedLoadingUtilsScript) {
                let loadCall;
                if (typeof source === "string") loadCall = require(/* webpackIgnore: true */ /* @vite-ignore */ source);
                else if (typeof source === "function") try {
                    loadCall = source();
                    if (!(loadCall instanceof Promise)) throw new TypeError(`The function passed to loadUtils must return a promise for the utilities module, not ${typeof loadCall}`);
                } catch (error) {
                    return Promise.reject(error);
                }
                else return Promise.reject(new TypeError(`The argument passed to loadUtils must be a URL string or a function that returns a promise for the utilities module, not ${typeof source}`));
                intlTelInput.startedLoadingUtilsScript = true;
                return loadCall.then((module1)=>{
                    const utils = module1?.default;
                    if (!utils || typeof utils !== "object") {
                        if (typeof source === "string") throw new TypeError(`The module loaded from ${source} did not set utils as its default export.`);
                        else throw new TypeError("The loader function passed to loadUtils did not resolve to a module object with utils as its default export.");
                    }
                    intlTelInput.utils = utils;
                    forEachInstance("handleUtils");
                    return true;
                }).catch((error)=>{
                    forEachInstance("rejectUtilsScriptPromise", error);
                    throw error;
                });
            }
            return null;
        };
        var intlTelInput = Object.assign((input, options)=>{
            const iti = new Iti(input, options);
            iti._init();
            input.setAttribute("data-intl-tel-input-id", iti.id.toString());
            intlTelInput.instances[iti.id] = iti;
            return iti;
        }, {
            defaults,
            //* Using a static var like this allows us to mock it in the tests.
            documentReady: ()=>document.readyState === "complete",
            //* Get the country data object.
            getCountryData: ()=>data_default,
            //* A getter for the plugin instance.
            getInstance: (input)=>{
                const id2 = input.getAttribute("data-intl-tel-input-id");
                return id2 ? intlTelInput.instances[id2] : null;
            },
            //* A map from instance ID to instance object.
            instances: {},
            loadUtils,
            startedLoadingUtilsScript: false,
            startedLoadingAutoCountry: false,
            version: "24.6.0"
        });
        var intl_tel_input_default = intlTelInput;
        return __toCommonJS(intl_tel_input_exports);
    })();
    // UMD
    return factoryOutput.default;
});

},{}]},["1scUz","hFIk5"], "hFIk5", "parcelRequire4480")

//# sourceMappingURL=utils.js.map
