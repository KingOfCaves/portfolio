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
})({"scripts/index.js":[function(require,module,exports) {
(function () {
  var data = {
    frontend: {
      heading: "Frontend Development",
      projects: [{
        id: "portfolio-project",
        href: "https://github.com/KingOfCaves/wills-portfolio-project",
        link: "http://github//portfolio-project",
        title: "Portfolio Project",
        desc: 'A portfolio based on a design provided by Udacity. By using html and css you recreate the design from the ground up, adding your own touches.'
      }, {
        id: "memory-game",
        href: "https://github.com/KingOfCaves/wills-memory-game",
        link: "http://github//memory-game",
        title: "Memory Game",
        desc: 'A simple memory game that uses nothing but vanilla JavaScript, HTML and CSS. Made to look good on every device!'
      }, {
        id: "arcade-classic",
        href: "https://github.com/KingOfCaves/wills-arcade-classic",
        link: "http://github//arcade-classic",
        title: "Arcade Classic",
        desc: 'Recreation of a popular classic arcade game, Frogger. Uses canvas, ES6 classes, sprite images, and an engine provided by Udacity.'
      }, {
        id: "feedreader-testing",
        href: "https://github.com/KingOfCaves/wills-feedreader-testing",
        link: "http://github//feedreader-testing",
        title: "Feedreader Testing",
        desc: 'A suite built for testing the functionality of another person\'s feedreader application. Built using Jasmine.js.'
      }, {
        id: "restaurant-review",
        href: "https://github.com/KingOfCaves/wills-restaurant-review",
        link: "http://github//restaurant-review",
        title: "Restaurant Review App",
        desc: 'Troubleshooting a restaurant review app by adding aria labeling for accessibility, adding necessary headers to the mapbox api and making the app compatible with all devices.'
      }, {
        id: "the-big-brown",
        href: "https://github.com/KingOfCaves/the-big-brown-frontend",
        link: "http://github//the-big-brown",
        title: "The Big Brown",
        desc: 'Frontend for a fake restaurant website. Uses Parcel for compiling all of the scripts, scss files and html templates. Also uses PostCSS and PostHTML for utilizing autoprefixer and other related plugins.'
      }, {
        id: "jamila-wallace-portfolio",
        href: "https://github.com/KingOfCaves/jamila-wallace-portfolio",
        link: "http://github//j.-wallace-portfolio",
        title: "J. Wallace's Portfolio",
        desc: 'A recreation of my client\'s design. By using my client\'s Adobe XD design as a base, a near 1:1 responsive reconstruction was made in HTML, CSS and JavaScript.'
      }]
    },
    backend: {
      heading: "Backend Development",
      projects: [{
        id: "task-manager-api",
        href: "https://github.com/KingOfCaves/wills-task-manager-api",
        link: "http://github//task-manager-api",
        title: "Task Manager API",
        desc: 'An API developed using Node.js. The API comes with several sophisticated features such as an authentication middleware, CRUD endpoints and image manipulation.'
      }]
    },
    fullstack: {
      heading: "Fullstack Development",
      projects: [{
        id: "chat-app",
        href: "https://github.com/KingOfCaves/wills-chat-app",
        link: "http://github//chat-app",
        title: "Chat App",
        desc: 'A fullstack chat application with a Node.js backend. Uses socket.io to emit and detect events in real time.'
      }, {
        id: "weather-app",
        href: "https://github.com/KingOfCaves/wills-weather-app",
        link: "http://github//weather-app",
        title: "Weather App",
        desc: 'A simple weather fetching web application. Uses Node.js to access the DarkSky API and Mapbox API in the background.'
      }, {
        id: "fountain-of-dreams",
        href: "https://github.com/KingOfCaves/fountain-of-dreams",
        link: "http://github//fountain-of-dreams",
        title: "Fountain of Dreams",
        desc: 'A mallsoft/vaporwave oriented live radio thats currently a work in progress. The basic functionality of completed, but theres definitely still more to be done!'
      }]
    }
  };
  var $projects = document.querySelector('.main');
  var compiledHTML = "";

  for (x in data) {
    var _data$x = data[x],
        heading = _data$x.heading,
        projects = _data$x.projects;
    var projectHTML = "".trim();

    try {
      projects.forEach(function (project) {
        projectHTML += "\n\t\t\t\t<div class=\"project\">\n\t\t\t\t\t<a class=\"project__graphic\" href=\"".concat(project.href, "\" target=\"_blank\" id=\"").concat(project.id, "\">\n\t\t\t\t\t\t<p class=\"project__link\">").concat(project.link, "</p>\n\t\t\t\t\t</a>\n\t\t\t\t\t<p class=\"project__title\">").concat(project.title, "</p>\n\t\t\t\t\t<p class=\"project__desc\">").concat(project.desc, "</p>\n\t\t\t\t</div>\n\t\t\t\t").trim();
      });
    } catch (error) {
      console.log('Something wen\'t wrong.', error);
    }

    var typeHTML = "\n\t\t<div class=\"projects\">\n\t\t\t<h2 class=\"heading-secondary\">".concat(heading, "</h2>\n\t\t\t").concat(projectHTML, "\n\t\t</div>").trim();
    compiledHTML += typeHTML;
  }

  $projects.innerHTML = compiledHTML;
})();
},{}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
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
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "62185" + '/');

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
      } else {
        window.location.reload();
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
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","scripts/index.js"], null)