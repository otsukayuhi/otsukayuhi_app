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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/entry.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./node_modules/sanitize.css/sanitize.css":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./node_modules/sanitize.css/sanitize.css ***!
  \***********************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports


// module
exports.push([module.i, "/*! sanitize.css v5.0.0 | CC0 License | github.com/jonathantneal/sanitize.css */*,:after,:before{background-repeat:no-repeat;box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,footer,header,nav,section{display:block}body{margin:0}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}nav ol,nav ul{list-style:none}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,optgroup,select,textarea{margin:0}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[tabindex],a,area,button,input,label,select,summary,textarea{touch-action:manipulation}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-hidden=false][hidden]:not(:focus){clip:rect(0,0,0,0);display:inherit;position:absolute}[aria-disabled]{cursor:default}", "", {"version":3,"sources":["/Users/otsuka/Desktop/_mydata/webpack_for_singlepage_boilerplate/node_modules/sanitize.css/sanitize.css"],"names":[],"mappings":"AAAA,gFAAgF,AAUhF,iBAGC,4BAA4B,AAC5B,kBAAmB,CACnB,AAOD,eAEC,wBAAwB,AACxB,sBAAuB,CACvB,AAQD,KACC,sBAAsB,AACtB,eAAe,AACf,0BAA0B,AAC1B,6BAA8B,CAC9B,AASD,wCAMC,aAAc,CACd,AAMD,KACC,QAAS,CACT,AAOD,GACC,cAAc,AACd,cAAe,CACf,AAUD,uBAGC,aAAc,CACd,AAMD,OACC,eAAgB,CAChB,AAOD,GACC,uBAAuB,AACvB,SAAS,AACT,gBAAiB,CACjB,AAMD,cAEC,eAAgB,CAChB,AAOD,IACC,gCAAiC,AACjC,aAAc,CACd,AAUD,EACC,6BAA6B,AAC7B,oCAAqC,CACrC,AAOD,YACC,mBAAmB,AACnB,0BAA0B,AAC1B,yCAAiC,AAAjC,gCAAiC,CACjC,AAMD,SAEC,oBAAoB,AASpB,kBAAmB,CARnB,AAgBD,cAGC,gCAAiC,AACjC,aAAc,CACd,AAMD,IACC,iBAAkB,CAClB,AAMD,KACC,sBAAyB,AACzB,UAAc,CACd,AAMD,MACC,aAAc,CACd,AAOD,QAEC,cAAc,AACd,cAAc,AACd,kBAAkB,AAClB,uBAAwB,CACxB,AAED,IACC,aAAc,CACd,AAED,IACC,SAAU,CACV,AAOD,iBACC,yBAAyB,AACzB,WAAc,AACd,gBAAiB,CACjB,AAED,YACC,yBAAyB,AACzB,WAAc,AACd,gBAAiB,CACjB,AASD,kCAMC,qBAAsB,CACtB,AAMD,YAEC,oBAAqB,CACrB,AAMD,sBACC,aAAa,AACb,QAAS,CACT,AAMD,IACC,iBAAkB,CAClB,AAMD,IACC,iBAAkB,CAClB,AAMD,eACC,eAAgB,CAChB,AASD,MACC,wBAAyB,CACzB,AASD,sCAKC,QAAS,CACT,AAMD,6BAIC,6BAA6B,AAC7B,cAAc,AACd,kBAAkB,AAClB,mBAAoB,CACpB,AAOD,aAEC,gBAAiB,CACjB,AAOD,cAEC,mBAAoB,CACpB,AAQD,qDAIC,yBAA0B,CAC1B,AAMD,wHAIC,kBAAkB,AAClB,SAAU,CACV,AAMD,4GAIC,6BAA8B,CAC9B,AASD,OACC,sBAAsB,AACtB,cAAc,AACd,cAAc,AACd,eAAe,AACf,UAAU,AACV,kBAAmB,CACnB,AAOD,SACC,qBAAqB,AACrB,uBAAwB,CACxB,AAOD,SACC,cAAc,AACd,eAAgB,CAChB,AA3CD,6BAoDC,sBAAsB,AACtB,SAAU,CACV,AA5CD,kFAoDC,WAAY,CACZ,AA7CD,cAqDC,6BAA6B,AAC7B,mBAAoB,CACpB,AA9CD,qFAsDC,uBAAwB,CACxB,AAOD,6BACC,0BAA0B,AAC1B,YAAa,CACb,AAUD,aAEC,aAAc,CACd,AAMD,QACC,iBAAkB,CAClB,AASD,OACC,oBAAqB,CACrB,AAMD,SACC,YAAa,CACb,AAUD,6DAUC,yBAA0B,CAC1B,AA5DD,SAmEC,YAAa,CACb,AA5DD,iBAsEC,eAAgB,CAChB,AAjED,gBAwEC,cAAe,CACf,AAnED,wCA0EC,mBAAsB,AACtB,gBAAgB,AAChB,iBAAkB,CAClB,AApED,gBA4EC,cAAe,CACf","file":"sanitize.css","sourcesContent":["/*! sanitize.css v5.0.0 | CC0 License | github.com/jonathantneal/sanitize.css */\n\n/* Document (https://html.spec.whatwg.org/multipage/semantics.html#semantics)\n   ========================================================================== */\n\n/**\n * 1. Remove repeating backgrounds in all browsers (opinionated).\n * 2. Add box sizing inheritence in all browsers (opinionated).\n */\n\n*,\n::before,\n::after {\n\tbackground-repeat: no-repeat; /* 1 */\n\tbox-sizing: inherit; /* 2 */\n}\n\n/**\n * 1. Add text decoration inheritance in all browsers (opinionated).\n * 2. Add vertical alignment inheritence in all browsers (opinionated).\n */\n\n::before,\n::after {\n\ttext-decoration: inherit; /* 1 */\n\tvertical-align: inherit; /* 2 */\n}\n\n/**\n * 1. Add border box sizing in all browsers (opinionated).\n * 2. Add the default cursor in all browsers (opinionated).\n * 3. Prevent font size adjustments after orientation changes in IE and iOS.\n */\n\nhtml {\n\tbox-sizing: border-box; /* 1 */\n\tcursor: default; /* 2 */\n\t-ms-text-size-adjust: 100%; /* 3 */\n\t-webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections (https://html.spec.whatwg.org/multipage/semantics.html#sections)\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n\tdisplay: block;\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n\tmargin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n\tfont-size: 2em;\n\tmargin: .67em 0;\n}\n\n/* Grouping content (https://html.spec.whatwg.org/multipage/semantics.html#grouping-content)\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n\tdisplay: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n\tmargin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n\tbox-sizing: content-box; /* 1 */\n\theight: 0; /* 1 */\n\toverflow: visible; /* 2 */\n}\n\n/**\n * Remove the list style on navigation lists in all browsers (opinionated).\n */\n\nnav ol,\nnav ul {\n\tlist-style: none;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/* Text-level semantics (https://html.spec.whatwg.org/multipage/semantics.html#text-level-semantics)\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n\tbackground-color: transparent; /* 1 */\n\t-webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n\tborder-bottom: none; /* 1 */\n\ttext-decoration: underline; /* 2 */\n\ttext-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n\tfont-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n\tfont-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n\tbackground-color: #ffff00;\n\tcolor: #000000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -.25em;\n}\n\nsup {\n\ttop: -.5em;\n}\n\n/*\n * Remove the text shadow on text selections (opinionated).\n * 1. Restore the coloring undone by defining the text shadow (opinionated).\n */\n\n::-moz-selection {\n\tbackground-color: #b3d4fc; /* 1 */\n\tcolor: #000000; /* 1 */\n\ttext-shadow: none;\n}\n\n::selection {\n\tbackground-color: #b3d4fc; /* 1 */\n\tcolor: #000000; /* 1 */\n\ttext-shadow: none;\n}\n\n/* Embedded content (https://html.spec.whatwg.org/multipage/embedded-content.html#embedded-content)\n   ========================================================================== */\n\n/*\n * Change the alignment on media elements in all browers (opinionated).\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n\tvertical-align: middle;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n\tdisplay: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n\tdisplay: none;\n\theight: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n\tborder-style: none;\n}\n\n/**\n * Change the fill color to match the text color in all browsers (opinionated).\n */\n\nsvg {\n\tfill: currentColor;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n\toverflow: hidden;\n}\n\n/* Tabular data (https://html.spec.whatwg.org/multipage/tables.html#tables)\n   ========================================================================== */\n\n/**\n * Collapse border spacing\n */\n\ntable {\n\tborder-collapse: collapse;\n}\n\n/* Forms (https://html.spec.whatwg.org/multipage/forms.html#forms)\n   ========================================================================== */\n\n/**\n * Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tmargin: 0;\n}\n\n/**\n * Inherit styling in all browsers (opinionated).\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n\tbackground-color: transparent;\n\tcolor: inherit;\n\tfont-size: inherit;\n\tline-height: inherit;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n\toverflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n\t-webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n\tbox-sizing: border-box; /* 1 */\n\tcolor: inherit; /* 2 */\n\tdisplay: table; /* 1 */\n\tmax-width: 100%; /* 1 */\n\tpadding: 0; /* 3 */\n\twhite-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n\tdisplay: inline-block; /* 1 */\n\tvertical-align: baseline; /* 2 */\n}\n\n/**\n * 1. Remove the default vertical scrollbar in IE.\n * 2. Change the resize direction on textareas in all browsers (opinionated).\n */\n\ntextarea {\n\toverflow: auto; /* 1 */\n\tresize: vertical; /* 2 */\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n\tbox-sizing: border-box; /* 1 */\n\tpadding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/* Interactive elements (https://html.spec.whatwg.org/multipage/forms.html#interactive-elements)\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n\tdisplay: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n\tdisplay: list-item;\n}\n\n/* Scripting (https://html.spec.whatwg.org/multipage/scripting.html#scripting-3)\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n\tdisplay: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n\tdisplay: none;\n}\n\n/* User interaction (https://html.spec.whatwg.org/multipage/interaction.html#editing)\n   ========================================================================== */\n\n/*\n * Remove the tapping delay on clickable elements (opinionated).\n * 1. Remove the tapping delay in IE 10.\n */\n\na,\narea,\nbutton,\ninput,\nlabel,\nselect,\nsummary,\ntextarea,\n[tabindex] {\n\t-ms-touch-action: manipulation; /* 1 */\n\ttouch-action: manipulation;\n}\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n\tdisplay: none;\n}\n\n/* ARIA (https://w3c.github.io/html-aria/)\n   ========================================================================== */\n\n/**\n * Change the cursor on busy elements (opinionated).\n */\n\n[aria-busy=\"true\"] {\n\tcursor: progress;\n}\n\n/*\n * Change the cursor on control elements (opinionated).\n */\n\n[aria-controls] {\n\tcursor: pointer;\n}\n\n/*\n * Change the display on visually hidden accessible elements (opinionated).\n */\n\n[aria-hidden=\"false\"][hidden]:not(:focus) {\n\tclip: rect(0, 0, 0, 0);\n\tdisplay: inherit;\n\tposition: absolute;\n}\n\n/*\n * Change the cursor on disabled, not-editable, or otherwise\n * inoperable elements (opinionated).\n */\n\n[aria-disabled] {\n\tcursor: default;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/_scss/main.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/_scss/main.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var escape = __webpack_require__(/*! ../../node_modules/css-loader/lib/url/escape.js */ "./node_modules/css-loader/lib/url/escape.js");
exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/lib??ref--5-2!../../node_modules/sass-loader/lib/loader.js??ref--5-3!sanitize.css/sanitize.css */ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./node_modules/sanitize.css/sanitize.css"), "");

// module
exports.push([module.i, "body{background:url(" + escape(__webpack_require__(/*! ./images/dummy.png */ "./src/_scss/images/dummy.png")) + ") no-repeat;background-size:cover;color:#fff}", "", {"version":3,"sources":["/Users/otsuka/Desktop/_mydata/webpack_for_singlepage_boilerplate/src/_scss/_style.scss"],"names":[],"mappings":"AAAA,KACE,mDAA2C,AAC3C,sBAAsB,AACtB,UAAW,CACZ","file":"main.scss","sourcesContent":["body {\n  background: url(images/dummy.png) no-repeat;\n  background-size: cover;\n  color: #fff;\n}"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/lib/css-base.js":
/*!*************************************************!*\
  !*** ./node_modules/css-loader/lib/css-base.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
module.exports = function(useSourceMap) {
	var list = [];

	// return the list of modules as css string
	list.toString = function toString() {
		return this.map(function (item) {
			var content = cssWithMappingToString(item, useSourceMap);
			if(item[2]) {
				return "@media " + item[2] + "{" + content + "}";
			} else {
				return content;
			}
		}).join("");
	};

	// import a list of modules into the list
	list.i = function(modules, mediaQuery) {
		if(typeof modules === "string")
			modules = [[null, modules, ""]];
		var alreadyImportedModules = {};
		for(var i = 0; i < this.length; i++) {
			var id = this[i][0];
			if(typeof id === "number")
				alreadyImportedModules[id] = true;
		}
		for(i = 0; i < modules.length; i++) {
			var item = modules[i];
			// skip already imported module
			// this implementation is not 100% perfect for weird media query combinations
			//  when a module is imported multiple times with different media queries.
			//  I hope this will never occur (Hey this way we have smaller bundles)
			if(typeof item[0] !== "number" || !alreadyImportedModules[item[0]]) {
				if(mediaQuery && !item[2]) {
					item[2] = mediaQuery;
				} else if(mediaQuery) {
					item[2] = "(" + item[2] + ") and (" + mediaQuery + ")";
				}
				list.push(item);
			}
		}
	};
	return list;
};

function cssWithMappingToString(item, useSourceMap) {
	var content = item[1] || '';
	var cssMapping = item[3];
	if (!cssMapping) {
		return content;
	}

	if (useSourceMap && typeof btoa === 'function') {
		var sourceMapping = toComment(cssMapping);
		var sourceURLs = cssMapping.sources.map(function (source) {
			return '/*# sourceURL=' + cssMapping.sourceRoot + source + ' */'
		});

		return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
	}

	return [content].join('\n');
}

// Adapted from convert-source-map (MIT)
function toComment(sourceMap) {
	// eslint-disable-next-line no-undef
	var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
	var data = 'sourceMappingURL=data:application/json;charset=utf-8;base64,' + base64;

	return '/*# ' + data + ' */';
}


/***/ }),

/***/ "./node_modules/css-loader/lib/url/escape.js":
/*!***************************************************!*\
  !*** ./node_modules/css-loader/lib/url/escape.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = function escape(url) {
    if (typeof url !== 'string') {
        return url
    }
    // If url is already wrapped in quotes, remove them
    if (/^['"].*['"]$/.test(url)) {
        url = url.slice(1, -1);
    }
    // Should url be wrapped?
    // See https://drafts.csswg.org/css-values-3/#urls
    if (/["'() \t\n]/.test(url)) {
        return '"' + url.replace(/"/g, '\\"').replace(/\n/g, '\\n') + '"'
    }

    return url
}


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v3.3.1
 * https://jquery.com/
 *
 * Includes Sizzle.js
 * https://sizzlejs.com/
 *
 * Copyright JS Foundation and other contributors
 * Released under the MIT license
 * https://jquery.org/license
 *
 * Date: 2018-01-20T17:24Z
 */
( function( global, factory ) {

	"use strict";

	if ( typeof module === "object" && typeof module.exports === "object" ) {

		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
} )( typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Edge <= 12 - 13+, Firefox <=18 - 45+, IE 10 - 11, Safari 5.1 - 9+, iOS 6 - 9.1
// throw exceptions when non-strict code (e.g., ASP.NET 4.5) accesses strict mode
// arguments.callee.caller (trac-13335). But as of jQuery 3.0 (2016), strict mode should be common
// enough that all such attempts are guarded in a try block.
"use strict";

var arr = [];

var document = window.document;

var getProto = Object.getPrototypeOf;

var slice = arr.slice;

var concat = arr.concat;

var push = arr.push;

var indexOf = arr.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var fnToString = hasOwn.toString;

var ObjectFunctionString = fnToString.call( Object );

var support = {};

var isFunction = function isFunction( obj ) {

      // Support: Chrome <=57, Firefox <=52
      // In some browsers, typeof returns "function" for HTML <object> elements
      // (i.e., `typeof document.createElement( "object" ) === "function"`).
      // We don't want to classify *any* DOM node as a function.
      return typeof obj === "function" && typeof obj.nodeType !== "number";
  };


var isWindow = function isWindow( obj ) {
		return obj != null && obj === obj.window;
	};




	var preservedScriptAttributes = {
		type: true,
		src: true,
		noModule: true
	};

	function DOMEval( code, doc, node ) {
		doc = doc || document;

		var i,
			script = doc.createElement( "script" );

		script.text = code;
		if ( node ) {
			for ( i in preservedScriptAttributes ) {
				if ( node[ i ] ) {
					script[ i ] = node[ i ];
				}
			}
		}
		doc.head.appendChild( script ).parentNode.removeChild( script );
	}


function toType( obj ) {
	if ( obj == null ) {
		return obj + "";
	}

	// Support: Android <=2.3 only (functionish RegExp)
	return typeof obj === "object" || typeof obj === "function" ?
		class2type[ toString.call( obj ) ] || "object" :
		typeof obj;
}
/* global Symbol */
// Defining this global in .eslintrc.json would create a danger of using the global
// unguarded in another place, it seems safer to define global only for this module



var
	version = "3.3.1",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android <=4.0 only
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {

		// Return all the elements in a clean array
		if ( num == null ) {
			return slice.call( this );
		}

		// Return just the one element from the set
		return num < 0 ? this[ num + this.length ] : this[ num ];
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: arr.sort,
	splice: arr.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var options, name, src, copy, copyIsArray, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// Skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !isFunction( target ) ) {
		target = {};
	}

	// Extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = Array.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && Array.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	isPlainObject: function( obj ) {
		var proto, Ctor;

		// Detect obvious negatives
		// Use toString instead of jQuery.type to catch host objects
		if ( !obj || toString.call( obj ) !== "[object Object]" ) {
			return false;
		}

		proto = getProto( obj );

		// Objects with no prototype (e.g., `Object.create( null )`) are plain
		if ( !proto ) {
			return true;
		}

		// Objects with prototype are plain iff they were constructed by a global Object function
		Ctor = hasOwn.call( proto, "constructor" ) && proto.constructor;
		return typeof Ctor === "function" && fnToString.call( Ctor ) === ObjectFunctionString;
	},

	isEmptyObject: function( obj ) {

		/* eslint-disable no-unused-vars */
		// See https://github.com/eslint/eslint/issues/6125
		var name;

		for ( name in obj ) {
			return false;
		}
		return true;
	},

	// Evaluates a script in a global context
	globalEval: function( code ) {
		DOMEval( code );
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android <=4.0 only
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		return arr == null ? -1 : indexOf.call( arr, elem, i );
	},

	// Support: Android <=4.0 only, PhantomJS 1 only
	// push.apply(_, arraylike) throws on ancient WebKit
	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		for ( ; j < len; j++ ) {
			first[ i++ ] = second[ j ];
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = arr[ Symbol.iterator ];
}

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: real iOS 8.2 only (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = toType( obj );

	if ( isFunction( obj ) || isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.3.3
 * https://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-08-08
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// https://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\0-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,

	// CSS escapes
	// http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// CSS string/identifier serialization
	// https://drafts.csswg.org/cssom/#common-serializing-idioms
	rcssescape = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,
	fcssescape = function( ch, asCodePoint ) {
		if ( asCodePoint ) {

			// U+0000 NULL becomes U+FFFD REPLACEMENT CHARACTER
			if ( ch === "\0" ) {
				return "\uFFFD";
			}

			// Control characters and (dependent upon position) numbers get escaped as code points
			return ch.slice( 0, -1 ) + "\\" + ch.charCodeAt( ch.length - 1 ).toString( 16 ) + " ";
		}

		// Other potentially-special ASCII characters get backslash-escaped
		return "\\" + ch;
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	},

	disabledAncestor = addCombinator(
		function( elem ) {
			return elem.disabled === true && ("form" in elem || "label" in elem);
		},
		{ dir: "parentNode", next: "legend" }
	);

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rcssescape, fcssescape );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					while ( i-- ) {
						groups[i] = "#" + nid + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created element and returns a boolean result
 */
function assert( fn ) {
	var el = document.createElement("fieldset");

	try {
		return !!fn( el );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( el.parentNode ) {
			el.parentNode.removeChild( el );
		}
		// release memory in IE
		el = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			a.sourceIndex - b.sourceIndex;

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for :enabled/:disabled
 * @param {Boolean} disabled true for :disabled; false for :enabled
 */
function createDisabledPseudo( disabled ) {

	// Known :disabled false positives: fieldset[disabled] > legend:nth-of-type(n+2) :can-disable
	return function( elem ) {

		// Only certain elements can match :enabled or :disabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-enabled
		// https://html.spec.whatwg.org/multipage/scripting.html#selector-disabled
		if ( "form" in elem ) {

			// Check for inherited disabledness on relevant non-disabled elements:
			// * listed form-associated elements in a disabled fieldset
			//   https://html.spec.whatwg.org/multipage/forms.html#category-listed
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-fe-disabled
			// * option elements in a disabled optgroup
			//   https://html.spec.whatwg.org/multipage/forms.html#concept-option-disabled
			// All such elements have a "form" property.
			if ( elem.parentNode && elem.disabled === false ) {

				// Option elements defer to a parent optgroup if present
				if ( "label" in elem ) {
					if ( "label" in elem.parentNode ) {
						return elem.parentNode.disabled === disabled;
					} else {
						return elem.disabled === disabled;
					}
				}

				// Support: IE 6 - 11
				// Use the isDisabled shortcut property to check for disabled fieldset ancestors
				return elem.isDisabled === disabled ||

					// Where there is no isDisabled, check manually
					/* jshint -W018 */
					elem.isDisabled !== !disabled &&
						disabledAncestor( elem ) === disabled;
			}

			return elem.disabled === disabled;

		// Try to winnow out elements that can't be disabled before trusting the disabled property.
		// Some victims get caught in our net (label, legend, menu, track), but it shouldn't
		// even exist on them, let alone have a boolean value.
		} else if ( "label" in elem ) {
			return elem.disabled === disabled;
		}

		// Remaining elements are neither :enabled nor :disabled
		return false;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, subWindow,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( preferredDoc !== document &&
		(subWindow = document.defaultView) && subWindow.top !== subWindow ) {

		// Support: IE 11, Edge
		if ( subWindow.addEventListener ) {
			subWindow.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( subWindow.attachEvent ) {
			subWindow.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( el ) {
		el.className = "i";
		return !el.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( el ) {
		el.appendChild( document.createComment("") );
		return !el.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programmatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( el ) {
		docElem.appendChild( el ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID filter and find
	if ( support.getById ) {
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var elem = context.getElementById( id );
				return elem ? [ elem ] : [];
			}
		};
	} else {
		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};

		// Support: IE 6 - 7 only
		// getElementById is not reliable as a find shortcut
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var node, i, elems,
					elem = context.getElementById( id );

				if ( elem ) {

					// Verify the id attribute
					node = elem.getAttributeNode("id");
					if ( node && node.value === id ) {
						return [ elem ];
					}

					// Fall back on getElementsByName
					elems = context.getElementsByName( id );
					i = 0;
					while ( (elem = elems[i++]) ) {
						node = elem.getAttributeNode("id");
						if ( node && node.value === id ) {
							return [ elem ];
						}
					}
				}

				return [];
			}
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See https://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( el ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// https://bugs.jquery.com/ticket/12359
			docElem.appendChild( el ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// https://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( el.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !el.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !el.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !el.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibling-combinator selector` fails
			if ( !el.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( el ) {
			el.innerHTML = "<a href='' disabled='disabled'></a>" +
				"<select disabled='disabled'><option/></select>";

			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			el.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( el.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( el.querySelectorAll(":enabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Support: IE9-11+
			// IE's :disabled selector does not pick up the children of disabled fieldsets
			docElem.appendChild( el ).disabled = true;
			if ( el.querySelectorAll(":disabled").length !== 2 ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			el.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( el ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( el, "*" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( el, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.escape = function( sel ) {
	return (sel + "").replace( rcssescape, fcssescape );
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": createDisabledPseudo( false ),
		"disabled": createDisabledPseudo( true ),

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		skip = combinator.next,
		key = skip || dir,
		checkNonElements = base && key === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
			return false;
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( skip && skip === elem.nodeName.toLowerCase() ) {
							elem = elem[ dir ] || elem;
						} else if ( (oldCache = uniqueCache[ key ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ key ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
			return false;
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				context.nodeType === 9 && documentIsHTML && Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( el ) {
	// Should return 1, but returns 4 (following)
	return el.compareDocumentPosition( document.createElement("fieldset") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// https://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( el ) {
	el.innerHTML = "<a href='#'></a>";
	return el.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( el ) {
	el.innerHTML = "<input/>";
	el.firstChild.setAttribute( "value", "" );
	return el.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( el ) {
	return el.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;

// Deprecated
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;
jQuery.escapeSelector = Sizzle.escape;




var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;



function nodeName( elem, name ) {

  return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();

};
var rsingleTag = ( /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i );



// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			return !!qualifier.call( elem, i, elem ) !== not;
		} );
	}

	// Single element
	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );
	}

	// Arraylike of elements (jQuery, arguments, Array)
	if ( typeof qualifier !== "string" ) {
		return jQuery.grep( elements, function( elem ) {
			return ( indexOf.call( qualifier, elem ) > -1 ) !== not;
		} );
	}

	// Filtered directly for both simple and complex selectors
	return jQuery.filter( qualifier, elements, not );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	if ( elems.length === 1 && elem.nodeType === 1 ) {
		return jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [];
	}

	return jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
		return elem.nodeType === 1;
	} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i, ret,
			len = this.length,
			self = this;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		ret = this.pushStack( [] );

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		return len > 1 ? jQuery.uniqueSort( ret ) : ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	// Shortcut simple #id case for speed
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// Method init() accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector[ 0 ] === "<" &&
				selector[ selector.length - 1 ] === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// Option to run scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					if ( elem ) {

						// Inject the element directly into the jQuery object
						this[ 0 ] = elem;
						this.length = 1;
					}
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( isFunction( selector ) ) {
			return root.ready !== undefined ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// Methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var targets = jQuery( target, this ),
			l = targets.length;

		return this.filter( function() {
			var i = 0;
			for ( ; i < l; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			targets = typeof selectors !== "string" && jQuery( selectors );

		// Positional selectors never match, since there's no _selection_ context
		if ( !rneedsContext.test( selectors ) ) {
			for ( ; i < l; i++ ) {
				for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

					// Always skip document fragments
					if ( cur.nodeType < 11 && ( targets ?
						targets.index( cur ) > -1 :

						// Don't pass non-elements to Sizzle
						cur.nodeType === 1 &&
							jQuery.find.matchesSelector( cur, selectors ) ) ) {

						matched.push( cur );
						break;
					}
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within the set
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// Index in selector
		if ( typeof elem === "string" ) {
			return indexOf.call( jQuery( elem ), this[ 0 ] );
		}

		// Locate the position of the desired element
		return indexOf.call( this,

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem
		);
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	while ( ( cur = cur[ dir ] ) && cur.nodeType !== 1 ) {}
	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
        if ( nodeName( elem, "iframe" ) ) {
            return elem.contentDocument;
        }

        // Support: IE 9 - 11 only, iOS 7 only, Android Browser <=4.3 only
        // Treat the template element as a regular one in browsers that
        // don't support it.
        if ( nodeName( elem, "template" ) ) {
            elem = elem.content || elem;
        }

        return jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var matched = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			matched = jQuery.filter( selector, matched );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				jQuery.uniqueSort( matched );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				matched.reverse();
			}
		}

		return this.pushStack( matched );
	};
} );
var rnothtmlwhite = ( /[^\x20\t\r\n\f]+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnothtmlwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = locked || options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && toType( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = queue = [];
				if ( !memory && !firing ) {
					list = memory = "";
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


function Identity( v ) {
	return v;
}
function Thrower( ex ) {
	throw ex;
}

function adoptValue( value, resolve, reject, noValue ) {
	var method;

	try {

		// Check for promise aspect first to privilege synchronous behavior
		if ( value && isFunction( ( method = value.promise ) ) ) {
			method.call( value ).done( resolve ).fail( reject );

		// Other thenables
		} else if ( value && isFunction( ( method = value.then ) ) ) {
			method.call( value, resolve, reject );

		// Other non-thenables
		} else {

			// Control `resolve` arguments by letting Array#slice cast boolean `noValue` to integer:
			// * false: [ value ].slice( 0 ) => resolve( value )
			// * true: [ value ].slice( 1 ) => resolve()
			resolve.apply( undefined, [ value ].slice( noValue ) );
		}

	// For Promises/A+, convert exceptions into rejections
	// Since jQuery.when doesn't unwrap thenables, we can skip the extra checks appearing in
	// Deferred#then to conditionally suppress rejection.
	} catch ( value ) {

		// Support: Android 4.0 only
		// Strict mode functions invoked without .call/.apply get global-object context
		reject.apply( undefined, [ value ] );
	}
}

jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, callbacks,
				// ... .then handlers, argument index, [final state]
				[ "notify", "progress", jQuery.Callbacks( "memory" ),
					jQuery.Callbacks( "memory" ), 2 ],
				[ "resolve", "done", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 0, "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ),
					jQuery.Callbacks( "once memory" ), 1, "rejected" ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				"catch": function( fn ) {
					return promise.then( null, fn );
				},

				// Keep pipe for back-compat
				pipe: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;

					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {

							// Map tuples (progress, done, fail) to arguments (done, fail, progress)
							var fn = isFunction( fns[ tuple[ 4 ] ] ) && fns[ tuple[ 4 ] ];

							// deferred.progress(function() { bind to newDefer or newDefer.notify })
							// deferred.done(function() { bind to newDefer or newDefer.resolve })
							// deferred.fail(function() { bind to newDefer or newDefer.reject })
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},
				then: function( onFulfilled, onRejected, onProgress ) {
					var maxDepth = 0;
					function resolve( depth, deferred, handler, special ) {
						return function() {
							var that = this,
								args = arguments,
								mightThrow = function() {
									var returned, then;

									// Support: Promises/A+ section 2.3.3.3.3
									// https://promisesaplus.com/#point-59
									// Ignore double-resolution attempts
									if ( depth < maxDepth ) {
										return;
									}

									returned = handler.apply( that, args );

									// Support: Promises/A+ section 2.3.1
									// https://promisesaplus.com/#point-48
									if ( returned === deferred.promise() ) {
										throw new TypeError( "Thenable self-resolution" );
									}

									// Support: Promises/A+ sections 2.3.3.1, 3.5
									// https://promisesaplus.com/#point-54
									// https://promisesaplus.com/#point-75
									// Retrieve `then` only once
									then = returned &&

										// Support: Promises/A+ section 2.3.4
										// https://promisesaplus.com/#point-64
										// Only check objects and functions for thenability
										( typeof returned === "object" ||
											typeof returned === "function" ) &&
										returned.then;

									// Handle a returned thenable
									if ( isFunction( then ) ) {

										// Special processors (notify) just wait for resolution
										if ( special ) {
											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special )
											);

										// Normal processors (resolve) also hook into progress
										} else {

											// ...and disregard older resolution values
											maxDepth++;

											then.call(
												returned,
												resolve( maxDepth, deferred, Identity, special ),
												resolve( maxDepth, deferred, Thrower, special ),
												resolve( maxDepth, deferred, Identity,
													deferred.notifyWith )
											);
										}

									// Handle all other returned values
									} else {

										// Only substitute handlers pass on context
										// and multiple values (non-spec behavior)
										if ( handler !== Identity ) {
											that = undefined;
											args = [ returned ];
										}

										// Process the value(s)
										// Default process is resolve
										( special || deferred.resolveWith )( that, args );
									}
								},

								// Only normal processors (resolve) catch and reject exceptions
								process = special ?
									mightThrow :
									function() {
										try {
											mightThrow();
										} catch ( e ) {

											if ( jQuery.Deferred.exceptionHook ) {
												jQuery.Deferred.exceptionHook( e,
													process.stackTrace );
											}

											// Support: Promises/A+ section 2.3.3.3.4.1
											// https://promisesaplus.com/#point-61
											// Ignore post-resolution exceptions
											if ( depth + 1 >= maxDepth ) {

												// Only substitute handlers pass on context
												// and multiple values (non-spec behavior)
												if ( handler !== Thrower ) {
													that = undefined;
													args = [ e ];
												}

												deferred.rejectWith( that, args );
											}
										}
									};

							// Support: Promises/A+ section 2.3.3.3.1
							// https://promisesaplus.com/#point-57
							// Re-resolve promises immediately to dodge false rejection from
							// subsequent errors
							if ( depth ) {
								process();
							} else {

								// Call an optional hook to record the stack, in case of exception
								// since it's otherwise lost when execution goes async
								if ( jQuery.Deferred.getStackHook ) {
									process.stackTrace = jQuery.Deferred.getStackHook();
								}
								window.setTimeout( process );
							}
						};
					}

					return jQuery.Deferred( function( newDefer ) {

						// progress_handlers.add( ... )
						tuples[ 0 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onProgress ) ?
									onProgress :
									Identity,
								newDefer.notifyWith
							)
						);

						// fulfilled_handlers.add( ... )
						tuples[ 1 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onFulfilled ) ?
									onFulfilled :
									Identity
							)
						);

						// rejected_handlers.add( ... )
						tuples[ 2 ][ 3 ].add(
							resolve(
								0,
								newDefer,
								isFunction( onRejected ) ?
									onRejected :
									Thrower
							)
						);
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 5 ];

			// promise.progress = list.add
			// promise.done = list.add
			// promise.fail = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add(
					function() {

						// state = "resolved" (i.e., fulfilled)
						// state = "rejected"
						state = stateString;
					},

					// rejected_callbacks.disable
					// fulfilled_callbacks.disable
					tuples[ 3 - i ][ 2 ].disable,

					// rejected_handlers.disable
					// fulfilled_handlers.disable
					tuples[ 3 - i ][ 3 ].disable,

					// progress_callbacks.lock
					tuples[ 0 ][ 2 ].lock,

					// progress_handlers.lock
					tuples[ 0 ][ 3 ].lock
				);
			}

			// progress_handlers.fire
			// fulfilled_handlers.fire
			// rejected_handlers.fire
			list.add( tuple[ 3 ].fire );

			// deferred.notify = function() { deferred.notifyWith(...) }
			// deferred.resolve = function() { deferred.resolveWith(...) }
			// deferred.reject = function() { deferred.rejectWith(...) }
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? undefined : this, arguments );
				return this;
			};

			// deferred.notifyWith = list.fireWith
			// deferred.resolveWith = list.fireWith
			// deferred.rejectWith = list.fireWith
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( singleValue ) {
		var

			// count of uncompleted subordinates
			remaining = arguments.length,

			// count of unprocessed arguments
			i = remaining,

			// subordinate fulfillment data
			resolveContexts = Array( i ),
			resolveValues = slice.call( arguments ),

			// the master Deferred
			master = jQuery.Deferred(),

			// subordinate callback factory
			updateFunc = function( i ) {
				return function( value ) {
					resolveContexts[ i ] = this;
					resolveValues[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( !( --remaining ) ) {
						master.resolveWith( resolveContexts, resolveValues );
					}
				};
			};

		// Single- and empty arguments are adopted like Promise.resolve
		if ( remaining <= 1 ) {
			adoptValue( singleValue, master.done( updateFunc( i ) ).resolve, master.reject,
				!remaining );

			// Use .then() to unwrap secondary thenables (cf. gh-3000)
			if ( master.state() === "pending" ||
				isFunction( resolveValues[ i ] && resolveValues[ i ].then ) ) {

				return master.then();
			}
		}

		// Multiple arguments are aggregated like Promise.all array elements
		while ( i-- ) {
			adoptValue( resolveValues[ i ], updateFunc( i ), master.reject );
		}

		return master.promise();
	}
} );


// These usually indicate a programmer mistake during development,
// warn about them ASAP rather than swallowing them by default.
var rerrorNames = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;

jQuery.Deferred.exceptionHook = function( error, stack ) {

	// Support: IE 8 - 9 only
	// Console exists when dev tools are open, which can happen at any time
	if ( window.console && window.console.warn && error && rerrorNames.test( error.name ) ) {
		window.console.warn( "jQuery.Deferred exception: " + error.message, error.stack, stack );
	}
};




jQuery.readyException = function( error ) {
	window.setTimeout( function() {
		throw error;
	} );
};




// The deferred used on DOM ready
var readyList = jQuery.Deferred();

jQuery.fn.ready = function( fn ) {

	readyList
		.then( fn )

		// Wrap jQuery.readyException in a function so that the lookup
		// happens at the time of error handling instead of callback
		// registration.
		.catch( function( error ) {
			jQuery.readyException( error );
		} );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );
	}
} );

jQuery.ready.then = readyList.then;

// The ready event handler and self cleanup method
function completed() {
	document.removeEventListener( "DOMContentLoaded", completed );
	window.removeEventListener( "load", completed );
	jQuery.ready();
}

// Catch cases where $(document).ready() is called
// after the browser event has already occurred.
// Support: IE <=9 - 10 only
// Older IE sometimes signals "interactive" too soon
if ( document.readyState === "complete" ||
	( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

	// Handle it asynchronously to allow scripts the opportunity to delay ready
	window.setTimeout( jQuery.ready );

} else {

	// Use the handy event callback
	document.addEventListener( "DOMContentLoaded", completed );

	// A fallback to window.onload, that will always work
	window.addEventListener( "load", completed );
}




// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		len = elems.length,
		bulk = key == null;

	// Sets many values
	if ( toType( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < len; i++ ) {
				fn(
					elems[ i ], key, raw ?
					value :
					value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	if ( chainable ) {
		return elems;
	}

	// Gets
	if ( bulk ) {
		return fn.call( elems );
	}

	return len ? fn( elems[ 0 ], key ) : emptyGet;
};


// Matches dashed string for camelizing
var rmsPrefix = /^-ms-/,
	rdashAlpha = /-([a-z])/g;

// Used by camelCase as callback to replace()
function fcamelCase( all, letter ) {
	return letter.toUpperCase();
}

// Convert dashed to camelCase; used by the css and data modules
// Support: IE <=9 - 11, Edge 12 - 15
// Microsoft forgot to hump their vendor prefix (#9572)
function camelCase( string ) {
	return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
}
var acceptData = function( owner ) {

	// Accepts only:
	//  - Node
	//    - Node.ELEMENT_NODE
	//    - Node.DOCUMENT_NODE
	//  - Object
	//    - Any
	return owner.nodeType === 1 || owner.nodeType === 9 || !( +owner.nodeType );
};




function Data() {
	this.expando = jQuery.expando + Data.uid++;
}

Data.uid = 1;

Data.prototype = {

	cache: function( owner ) {

		// Check if the owner object already has a cache
		var value = owner[ this.expando ];

		// If not, create one
		if ( !value ) {
			value = {};

			// We can accept data for non-element nodes in modern browsers,
			// but we should not, see #8335.
			// Always return an empty object.
			if ( acceptData( owner ) ) {

				// If it is a node unlikely to be stringify-ed or looped over
				// use plain assignment
				if ( owner.nodeType ) {
					owner[ this.expando ] = value;

				// Otherwise secure it in a non-enumerable property
				// configurable must be true to allow the property to be
				// deleted when data is removed
				} else {
					Object.defineProperty( owner, this.expando, {
						value: value,
						configurable: true
					} );
				}
			}
		}

		return value;
	},
	set: function( owner, data, value ) {
		var prop,
			cache = this.cache( owner );

		// Handle: [ owner, key, value ] args
		// Always use camelCase key (gh-2257)
		if ( typeof data === "string" ) {
			cache[ camelCase( data ) ] = value;

		// Handle: [ owner, { properties } ] args
		} else {

			// Copy the properties one-by-one to the cache object
			for ( prop in data ) {
				cache[ camelCase( prop ) ] = data[ prop ];
			}
		}
		return cache;
	},
	get: function( owner, key ) {
		return key === undefined ?
			this.cache( owner ) :

			// Always use camelCase key (gh-2257)
			owner[ this.expando ] && owner[ this.expando ][ camelCase( key ) ];
	},
	access: function( owner, key, value ) {

		// In cases where either:
		//
		//   1. No key was specified
		//   2. A string key was specified, but no value provided
		//
		// Take the "read" path and allow the get method to determine
		// which value to return, respectively either:
		//
		//   1. The entire cache object
		//   2. The data stored at the key
		//
		if ( key === undefined ||
				( ( key && typeof key === "string" ) && value === undefined ) ) {

			return this.get( owner, key );
		}

		// When the key is not a string, or both a key and value
		// are specified, set or extend (existing objects) with either:
		//
		//   1. An object of properties
		//   2. A key and value
		//
		this.set( owner, key, value );

		// Since the "set" path can have two possible entry points
		// return the expected data based on which path was taken[*]
		return value !== undefined ? value : key;
	},
	remove: function( owner, key ) {
		var i,
			cache = owner[ this.expando ];

		if ( cache === undefined ) {
			return;
		}

		if ( key !== undefined ) {

			// Support array or space separated string of keys
			if ( Array.isArray( key ) ) {

				// If key is an array of keys...
				// We always set camelCase keys, so remove that.
				key = key.map( camelCase );
			} else {
				key = camelCase( key );

				// If a key with the spaces exists, use it.
				// Otherwise, create an array by matching non-whitespace
				key = key in cache ?
					[ key ] :
					( key.match( rnothtmlwhite ) || [] );
			}

			i = key.length;

			while ( i-- ) {
				delete cache[ key[ i ] ];
			}
		}

		// Remove the expando if there's no more data
		if ( key === undefined || jQuery.isEmptyObject( cache ) ) {

			// Support: Chrome <=35 - 45
			// Webkit & Blink performance suffers when deleting properties
			// from DOM nodes, so set to undefined instead
			// https://bugs.chromium.org/p/chromium/issues/detail?id=378607 (bug restricted)
			if ( owner.nodeType ) {
				owner[ this.expando ] = undefined;
			} else {
				delete owner[ this.expando ];
			}
		}
	},
	hasData: function( owner ) {
		var cache = owner[ this.expando ];
		return cache !== undefined && !jQuery.isEmptyObject( cache );
	}
};
var dataPriv = new Data();

var dataUser = new Data();



//	Implementation Summary
//
//	1. Enforce API surface and semantic compatibility with 1.9.x branch
//	2. Improve the module's maintainability by reducing the storage
//		paths to a single mechanism.
//	3. Use the same single mechanism to support "private" and "user" data.
//	4. _Never_ expose "private" data to user code (TODO: Drop _data, _removeData)
//	5. Avoid exposing implementation details on user objects (eg. expando properties)
//	6. Provide a clear path for implementation upgrade to WeakMap in 2014

var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /[A-Z]/g;

function getData( data ) {
	if ( data === "true" ) {
		return true;
	}

	if ( data === "false" ) {
		return false;
	}

	if ( data === "null" ) {
		return null;
	}

	// Only convert to a number if it doesn't change the string
	if ( data === +data + "" ) {
		return +data;
	}

	if ( rbrace.test( data ) ) {
		return JSON.parse( data );
	}

	return data;
}

function dataAttr( elem, key, data ) {
	var name;

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {
		name = "data-" + key.replace( rmultiDash, "-$&" ).toLowerCase();
		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = getData( data );
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			dataUser.set( elem, key, data );
		} else {
			data = undefined;
		}
	}
	return data;
}

jQuery.extend( {
	hasData: function( elem ) {
		return dataUser.hasData( elem ) || dataPriv.hasData( elem );
	},

	data: function( elem, name, data ) {
		return dataUser.access( elem, name, data );
	},

	removeData: function( elem, name ) {
		dataUser.remove( elem, name );
	},

	// TODO: Now that all calls to _data and _removeData have been replaced
	// with direct calls to dataPriv methods, these can be deprecated.
	_data: function( elem, name, data ) {
		return dataPriv.access( elem, name, data );
	},

	_removeData: function( elem, name ) {
		dataPriv.remove( elem, name );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = dataUser.get( elem );

				if ( elem.nodeType === 1 && !dataPriv.get( elem, "hasDataAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE 11 only
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					dataPriv.set( elem, "hasDataAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				dataUser.set( this, key );
			} );
		}

		return access( this, function( value ) {
			var data;

			// The calling jQuery object (element matches) is not empty
			// (and therefore has an element appears at this[ 0 ]) and the
			// `value` parameter was not undefined. An empty jQuery object
			// will result in `undefined` for elem = this[ 0 ] which will
			// throw an exception if an attempt to read a data cache is made.
			if ( elem && value === undefined ) {

				// Attempt to get data from the cache
				// The key will always be camelCased in Data
				data = dataUser.get( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// Attempt to "discover" the data in
				// HTML5 custom data-* attrs
				data = dataAttr( elem, key );
				if ( data !== undefined ) {
					return data;
				}

				// We tried really hard, but the data doesn't exist.
				return;
			}

			// Set the data...
			this.each( function() {

				// We always store the camelCased key
				dataUser.set( this, key, value );
			} );
		}, null, value, arguments.length > 1, null, true );
	},

	removeData: function( key ) {
		return this.each( function() {
			dataUser.remove( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = dataPriv.get( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || Array.isArray( data ) ) {
					queue = dataPriv.access( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// Clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// Not public - generate a queueHooks object, or return the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return dataPriv.get( elem, key ) || dataPriv.access( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				dataPriv.remove( elem, [ type + "queue", key ] );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// Ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = dataPriv.get( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHiddenWithinTree = function( elem, el ) {

		// isHiddenWithinTree might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;

		// Inline style trumps all
		return elem.style.display === "none" ||
			elem.style.display === "" &&

			// Otherwise, check computed style
			// Support: Firefox <=43 - 45
			// Disconnected elements can have computed display: none, so first confirm that elem is
			// in the document.
			jQuery.contains( elem.ownerDocument, elem ) &&

			jQuery.css( elem, "display" ) === "none";
	};

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};




function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted, scale,
		maxIterations = 20,
		currentValue = tween ?
			function() {
				return tween.cur();
			} :
			function() {
				return jQuery.css( elem, prop, "" );
			},
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Support: Firefox <=54
		// Halve the iteration target value to prevent interference from CSS upper bounds (gh-2144)
		initial = initial / 2;

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		while ( maxIterations-- ) {

			// Evaluate and update our best guess (doubling guesses that zero out).
			// Finish if the scale equals or crosses 1 (making the old*new product non-positive).
			jQuery.style( elem, prop, initialInUnit + unit );
			if ( ( 1 - scale ) * ( 1 - ( scale = currentValue() / initial || 0.5 ) ) <= 0 ) {
				maxIterations = 0;
			}
			initialInUnit = initialInUnit / scale;

		}

		initialInUnit = initialInUnit * 2;
		jQuery.style( elem, prop, initialInUnit + unit );

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


var defaultDisplayMap = {};

function getDefaultDisplay( elem ) {
	var temp,
		doc = elem.ownerDocument,
		nodeName = elem.nodeName,
		display = defaultDisplayMap[ nodeName ];

	if ( display ) {
		return display;
	}

	temp = doc.body.appendChild( doc.createElement( nodeName ) );
	display = jQuery.css( temp, "display" );

	temp.parentNode.removeChild( temp );

	if ( display === "none" ) {
		display = "block";
	}
	defaultDisplayMap[ nodeName ] = display;

	return display;
}

function showHide( elements, show ) {
	var display, elem,
		values = [],
		index = 0,
		length = elements.length;

	// Determine new display value for elements that need to change
	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		display = elem.style.display;
		if ( show ) {

			// Since we force visibility upon cascade-hidden elements, an immediate (and slow)
			// check is required in this first loop unless we have a nonempty display value (either
			// inline or about-to-be-restored)
			if ( display === "none" ) {
				values[ index ] = dataPriv.get( elem, "display" ) || null;
				if ( !values[ index ] ) {
					elem.style.display = "";
				}
			}
			if ( elem.style.display === "" && isHiddenWithinTree( elem ) ) {
				values[ index ] = getDefaultDisplay( elem );
			}
		} else {
			if ( display !== "none" ) {
				values[ index ] = "none";

				// Remember what we're overwriting
				dataPriv.set( elem, "display", display );
			}
		}
	}

	// Set the display of the elements in a second loop to avoid constant reflow
	for ( index = 0; index < length; index++ ) {
		if ( values[ index ] != null ) {
			elements[ index ].style.display = values[ index ];
		}
	}

	return elements;
}

jQuery.fn.extend( {
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHiddenWithinTree( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([a-z][^\/\0>\x20\t\r\n\f]+)/i );

var rscriptType = ( /^$|^module$|\/(?:java|ecma)script/i );



// We have to close these tags to support XHTML (#13200)
var wrapMap = {

	// Support: IE <=9 only
	option: [ 1, "<select multiple='multiple'>", "</select>" ],

	// XHTML parsers do not magically insert elements in the
	// same way that tag soup parsers do. So we cannot shorten
	// this by omitting <tbody> or other required elements.
	thead: [ 1, "<table>", "</table>" ],
	col: [ 2, "<table><colgroup>", "</colgroup></table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	_default: [ 0, "", "" ]
};

// Support: IE <=9 only
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {

	// Support: IE <=9 - 11 only
	// Use typeof to avoid zero-argument method invocation on host objects (#15151)
	var ret;

	if ( typeof context.getElementsByTagName !== "undefined" ) {
		ret = context.getElementsByTagName( tag || "*" );

	} else if ( typeof context.querySelectorAll !== "undefined" ) {
		ret = context.querySelectorAll( tag || "*" );

	} else {
		ret = [];
	}

	if ( tag === undefined || tag && nodeName( context, tag ) ) {
		return jQuery.merge( [ context ], ret );
	}

	return ret;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		dataPriv.set(
			elems[ i ],
			"globalEval",
			!refElements || dataPriv.get( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/;

function buildFragment( elems, context, scripts, selection, ignored ) {
	var elem, tmp, tag, wrap, contains, j,
		fragment = context.createDocumentFragment(),
		nodes = [],
		i = 0,
		l = elems.length;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( toType( elem ) === "object" ) {

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || fragment.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;
				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Support: Android <=4.0 only, PhantomJS 1 only
				// push.apply(_, arraylike) throws on ancient WebKit
				jQuery.merge( nodes, tmp.childNodes );

				// Remember the top-level container
				tmp = fragment.firstChild;

				// Ensure the created nodes are orphaned (#12392)
				tmp.textContent = "";
			}
		}
	}

	// Remove wrapper from fragment
	fragment.textContent = "";

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}
			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( fragment.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	return fragment;
}


( function() {
	var fragment = document.createDocumentFragment(),
		div = fragment.appendChild( document.createElement( "div" ) ),
		input = document.createElement( "input" );

	// Support: Android 4.0 - 4.3 only
	// Check state lost if the name is set (#11217)
	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Android <=4.1 only
	// Older WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE <=11 only
	// Make sure textarea (and checkbox) defaultValue is properly cloned
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;
} )();
var documentElement = document.documentElement;



var
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE <=9 only
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {

		var handleObjIn, eventHandle, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.get( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Ensure that invalid selectors throw exceptions at attach time
		// Evaluate against documentElement in case elem is a non-element node (e.g., document)
		if ( selector ) {
			jQuery.find.matchesSelector( documentElement, selector );
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" && jQuery.event.triggered !== e.type ?
					jQuery.event.dispatch.apply( elem, arguments ) : undefined;
			};
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {

		var j, origCount, tmp,
			events, t, handleObj,
			special, handlers, type, namespaces, origType,
			elemData = dataPriv.hasData( elem ) && dataPriv.get( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnothtmlwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove data and the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			dataPriv.remove( elem, "handle events" );
		}
	},

	dispatch: function( nativeEvent ) {

		// Make a writable jQuery.Event from the native event object
		var event = jQuery.event.fix( nativeEvent );

		var i, j, ret, matched, handleObj, handlerQueue,
			args = new Array( arguments.length ),
			handlers = ( dataPriv.get( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;

		for ( i = 1; i < arguments.length; i++ ) {
			args[ i ] = arguments[ i ];
		}

		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, handleObj, sel, matchedHandlers, matchedSelectors,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Find delegate handlers
		if ( delegateCount &&

			// Support: IE <=9
			// Black-hole SVG <use> instance trees (trac-13180)
			cur.nodeType &&

			// Support: Firefox <=42
			// Suppress spec-violating clicks indicating a non-primary pointer button (trac-3861)
			// https://www.w3.org/TR/DOM-Level-3-Events/#event-type-click
			// Support: IE 11 only
			// ...but not arrow key "clicks" of radio inputs, which can have `button` -1 (gh-2343)
			!( event.type === "click" && event.button >= 1 ) ) {

			for ( ; cur !== this; cur = cur.parentNode || this ) {

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && !( event.type === "click" && cur.disabled === true ) ) {
					matchedHandlers = [];
					matchedSelectors = {};
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matchedSelectors[ sel ] === undefined ) {
							matchedSelectors[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matchedSelectors[ sel ] ) {
							matchedHandlers.push( handleObj );
						}
					}
					if ( matchedHandlers.length ) {
						handlerQueue.push( { elem: cur, handlers: matchedHandlers } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		cur = this;
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: cur, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	addProp: function( name, hook ) {
		Object.defineProperty( jQuery.Event.prototype, name, {
			enumerable: true,
			configurable: true,

			get: isFunction( hook ) ?
				function() {
					if ( this.originalEvent ) {
							return hook( this.originalEvent );
					}
				} :
				function() {
					if ( this.originalEvent ) {
							return this.originalEvent[ name ];
					}
				},

			set: function( value ) {
				Object.defineProperty( this, name, {
					enumerable: true,
					configurable: true,
					writable: true,
					value: value
				} );
			}
		} );
	},

	fix: function( originalEvent ) {
		return originalEvent[ jQuery.expando ] ?
			originalEvent :
			new jQuery.Event( originalEvent );
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					this.focus();
					return false;
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( this.type === "checkbox" && this.click && nodeName( this, "input" ) ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	}
};

jQuery.removeEvent = function( elem, type, handle ) {

	// This "if" is needed for plain objects
	if ( elem.removeEventListener ) {
		elem.removeEventListener( type, handle );
	}
};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: Android <=2.3 only
				src.returnValue === false ?
			returnTrue :
			returnFalse;

		// Create target properties
		// Support: Safari <=6 - 7 only
		// Target should not be a text node (#504, #13143)
		this.target = ( src.target && src.target.nodeType === 3 ) ?
			src.target.parentNode :
			src.target;

		this.currentTarget = src.currentTarget;
		this.relatedTarget = src.relatedTarget;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || Date.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// https://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,
	isSimulated: false,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;

		if ( e && !this.isSimulated ) {
			e.preventDefault();
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopPropagation();
		}
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && !this.isSimulated ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Includes all common event props including KeyEvent and MouseEvent specific props
jQuery.each( {
	altKey: true,
	bubbles: true,
	cancelable: true,
	changedTouches: true,
	ctrlKey: true,
	detail: true,
	eventPhase: true,
	metaKey: true,
	pageX: true,
	pageY: true,
	shiftKey: true,
	view: true,
	"char": true,
	charCode: true,
	key: true,
	keyCode: true,
	button: true,
	buttons: true,
	clientX: true,
	clientY: true,
	offsetX: true,
	offsetY: true,
	pointerId: true,
	pointerType: true,
	screenX: true,
	screenY: true,
	targetTouches: true,
	toElement: true,
	touches: true,

	which: function( event ) {
		var button = event.button;

		// Add which for key events
		if ( event.which == null && rkeyEvent.test( event.type ) ) {
			return event.charCode != null ? event.charCode : event.keyCode;
		}

		// Add which for click: 1 === left; 2 === middle; 3 === right
		if ( !event.which && button !== undefined && rmouseEvent.test( event.type ) ) {
			if ( button & 1 ) {
				return 1;
			}

			if ( button & 2 ) {
				return 3;
			}

			if ( button & 4 ) {
				return 2;
			}

			return 0;
		}

		return event.which;
	}
}, jQuery.event.addProp );

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://bugs.chromium.org/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	}
} );


var

	/* eslint-disable max-len */

	// See https://github.com/eslint/eslint/issues/3229
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,

	/* eslint-enable */

	// Support: IE <=10 - 11, Edge 12 - 13 only
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;

// Prefer a tbody over its parent table for containing new rows
function manipulationTarget( elem, content ) {
	if ( nodeName( elem, "table" ) &&
		nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ) {

		return jQuery( elem ).children( "tbody" )[ 0 ] || elem;
	}

	return elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( elem.getAttribute( "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	if ( ( elem.type || "" ).slice( 0, 5 ) === "true/" ) {
		elem.type = elem.type.slice( 5 );
	} else {
		elem.removeAttribute( "type" );
	}

	return elem;
}

function cloneCopyEvent( src, dest ) {
	var i, l, type, pdataOld, pdataCur, udataOld, udataCur, events;

	if ( dest.nodeType !== 1 ) {
		return;
	}

	// 1. Copy private data: events, handlers, etc.
	if ( dataPriv.hasData( src ) ) {
		pdataOld = dataPriv.access( src );
		pdataCur = dataPriv.set( dest, pdataOld );
		events = pdataOld.events;

		if ( events ) {
			delete pdataCur.handle;
			pdataCur.events = {};

			for ( type in events ) {
				for ( i = 0, l = events[ type ].length; i < l; i++ ) {
					jQuery.event.add( dest, type, events[ type ][ i ] );
				}
			}
		}
	}

	// 2. Copy user data
	if ( dataUser.hasData( src ) ) {
		udataOld = dataUser.access( src );
		udataCur = jQuery.extend( {}, udataOld );

		dataUser.set( dest, udataCur );
	}
}

// Fix IE bugs, see support tests
function fixInput( src, dest ) {
	var nodeName = dest.nodeName.toLowerCase();

	// Fails to persist the checked state of a cloned checkbox or radio button.
	if ( nodeName === "input" && rcheckableType.test( src.type ) ) {
		dest.checked = src.checked;

	// Fails to return the selected option to the default selected state when cloning options
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var fragment, first, scripts, hasScripts, node, doc,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		valueIsFunction = isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( valueIsFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( valueIsFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android <=4.0 only, PhantomJS 1 only
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!dataPriv.access( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src && ( node.type || "" ).toLowerCase()  !== "module" ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							DOMEval( node.textContent.replace( rcleanScript, "" ), doc, node );
						}
					}
				}
			}
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		nodes = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = nodes[ i ] ) != null; i++ ) {
		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var i, l, srcElements, destElements,
			clone = elem.cloneNode( true ),
			inPage = jQuery.contains( elem.ownerDocument, elem );

		// Fix IE cloning issues
		if ( !support.noCloneChecked && ( elem.nodeType === 1 || elem.nodeType === 11 ) &&
				!jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: https://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			for ( i = 0, l = srcElements.length; i < l; i++ ) {
				fixInput( srcElements[ i ], destElements[ i ] );
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0, l = srcElements.length; i < l; i++ ) {
					cloneCopyEvent( srcElements[ i ], destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems ) {
		var data, elem, type,
			special = jQuery.event.special,
			i = 0;

		for ( ; ( elem = elems[ i ] ) !== undefined; i++ ) {
			if ( acceptData( elem ) ) {
				if ( ( data = elem[ dataPriv.expando ] ) ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataPriv.expando ] = undefined;
				}
				if ( elem[ dataUser.expando ] ) {

					// Support: Chrome <=35 - 45+
					// Assign undefined instead of using delete, see Data#remove
					elem[ dataUser.expando ] = undefined;
				}
			}
		}
	}
} );

jQuery.fn.extend( {
	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().each( function() {
					if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
						this.textContent = value;
					}
				} );
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {
			if ( elem.nodeType === 1 ) {

				// Prevent memory leaks
				jQuery.cleanData( getAll( elem, false ) );

				// Remove any remaining nodes
				elem.textContent = "";
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined && elem.nodeType === 1 ) {
				return elem.innerHTML;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {
						elem = this[ i ] || {};

						// Remove element nodes and prevent memory leaks
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1,
			i = 0;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Support: Android <=4.0 only, PhantomJS 1 only
			// .get() because push.apply(_, arraylike) throws on ancient WebKit
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );
var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var getStyles = function( elem ) {

		// Support: IE <=11 only, Firefox <=30 (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

var rboxStyle = new RegExp( cssExpand.join( "|" ), "i" );



( function() {

	// Executing both pixelPosition & boxSizingReliable tests require only one layout
	// so they're executed at the same time to save the second computation.
	function computeStyleTests() {

		// This is a singleton, we need to execute it only once
		if ( !div ) {
			return;
		}

		container.style.cssText = "position:absolute;left:-11111px;width:60px;" +
			"margin-top:1px;padding:0;border:0";
		div.style.cssText =
			"position:relative;display:block;box-sizing:border-box;overflow:scroll;" +
			"margin:auto;border:1px;padding:1px;" +
			"width:60%;top:1%";
		documentElement.appendChild( container ).appendChild( div );

		var divStyle = window.getComputedStyle( div );
		pixelPositionVal = divStyle.top !== "1%";

		// Support: Android 4.0 - 4.3 only, Firefox <=3 - 44
		reliableMarginLeftVal = roundPixelMeasures( divStyle.marginLeft ) === 12;

		// Support: Android 4.0 - 4.3 only, Safari <=9.1 - 10.1, iOS <=7.0 - 9.3
		// Some styles come back with percentage values, even though they shouldn't
		div.style.right = "60%";
		pixelBoxStylesVal = roundPixelMeasures( divStyle.right ) === 36;

		// Support: IE 9 - 11 only
		// Detect misreporting of content dimensions for box-sizing:border-box elements
		boxSizingReliableVal = roundPixelMeasures( divStyle.width ) === 36;

		// Support: IE 9 only
		// Detect overflow:scroll screwiness (gh-3699)
		div.style.position = "absolute";
		scrollboxSizeVal = div.offsetWidth === 36 || "absolute";

		documentElement.removeChild( container );

		// Nullify the div so it wouldn't be stored in the memory and
		// it will also be a sign that checks already performed
		div = null;
	}

	function roundPixelMeasures( measure ) {
		return Math.round( parseFloat( measure ) );
	}

	var pixelPositionVal, boxSizingReliableVal, scrollboxSizeVal, pixelBoxStylesVal,
		reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	// Support: IE <=9 - 11 only
	// Style of cloned element affects source element cloned (#8908)
	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	jQuery.extend( support, {
		boxSizingReliable: function() {
			computeStyleTests();
			return boxSizingReliableVal;
		},
		pixelBoxStyles: function() {
			computeStyleTests();
			return pixelBoxStylesVal;
		},
		pixelPosition: function() {
			computeStyleTests();
			return pixelPositionVal;
		},
		reliableMarginLeft: function() {
			computeStyleTests();
			return reliableMarginLeftVal;
		},
		scrollboxSize: function() {
			computeStyleTests();
			return scrollboxSizeVal;
		}
	} );
} )();


function curCSS( elem, name, computed ) {
	var width, minWidth, maxWidth, ret,

		// Support: Firefox 51+
		// Retrieving style before computed somehow
		// fixes an issue with getting wrong values
		// on detached elements
		style = elem.style;

	computed = computed || getStyles( elem );

	// getPropertyValue is needed for:
	//   .css('filter') (IE 9 only, #12537)
	//   .css('--customProperty) (#3144)
	if ( computed ) {
		ret = computed.getPropertyValue( name ) || computed[ name ];

		if ( ret === "" && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		// A tribute to the "awesome hack by Dean Edwards"
		// Android Browser returns percentage for some values,
		// but width seems to be reliably pixels.
		// This is against the CSSOM draft spec:
		// https://drafts.csswg.org/cssom/#resolved-values
		if ( !support.pixelBoxStyles() && rnumnonpx.test( ret ) && rboxStyle.test( name ) ) {

			// Remember the original values
			width = style.width;
			minWidth = style.minWidth;
			maxWidth = style.maxWidth;

			// Put in the new values to get a computed value out
			style.minWidth = style.maxWidth = style.width = ret;
			ret = computed.width;

			// Revert the changed values
			style.width = width;
			style.minWidth = minWidth;
			style.maxWidth = maxWidth;
		}
	}

	return ret !== undefined ?

		// Support: IE <=9 - 11 only
		// IE returns zIndex value as an integer.
		ret + "" :
		ret;
}


function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

	// Swappable if display is none or starts with table
	// except "table", "table-cell", or "table-caption"
	// See here for display values: https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rcustomProp = /^--/,
	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;

// Return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// Shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// Check for vendor prefixed names
	var capName = name[ 0 ].toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

// Return a property mapped along what jQuery.cssProps suggests or to
// a vendor prefixed property.
function finalPropName( name ) {
	var ret = jQuery.cssProps[ name ];
	if ( !ret ) {
		ret = jQuery.cssProps[ name ] = vendorPropName( name ) || name;
	}
	return ret;
}

function setPositiveNumber( elem, value, subtract ) {

	// Any relative (+/-) values have already been
	// normalized at this point
	var matches = rcssNum.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 2 ] - ( subtract || 0 ) ) + ( matches[ 3 ] || "px" ) :
		value;
}

function boxModelAdjustment( elem, dimension, box, isBorderBox, styles, computedVal ) {
	var i = dimension === "width" ? 1 : 0,
		extra = 0,
		delta = 0;

	// Adjustment may not be necessary
	if ( box === ( isBorderBox ? "border" : "content" ) ) {
		return 0;
	}

	for ( ; i < 4; i += 2 ) {

		// Both box models exclude margin
		if ( box === "margin" ) {
			delta += jQuery.css( elem, box + cssExpand[ i ], true, styles );
		}

		// If we get here with a content-box, we're seeking "padding" or "border" or "margin"
		if ( !isBorderBox ) {

			// Add padding
			delta += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// For "border" or "margin", add border
			if ( box !== "padding" ) {
				delta += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );

			// But still keep track of it otherwise
			} else {
				extra += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}

		// If we get here with a border-box (content + padding + border), we're seeking "content" or
		// "padding" or "margin"
		} else {

			// For "content", subtract padding
			if ( box === "content" ) {
				delta -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// For "content" or "padding", subtract border
			if ( box !== "margin" ) {
				delta -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	// Account for positive content-box scroll gutter when requested by providing computedVal
	if ( !isBorderBox && computedVal >= 0 ) {

		// offsetWidth/offsetHeight is a rounded sum of content, padding, scroll gutter, and border
		// Assuming integer scroll gutter, subtract the rest and round down
		delta += Math.max( 0, Math.ceil(
			elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
			computedVal -
			delta -
			extra -
			0.5
		) );
	}

	return delta;
}

function getWidthOrHeight( elem, dimension, extra ) {

	// Start with computed style
	var styles = getStyles( elem ),
		val = curCSS( elem, dimension, styles ),
		isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
		valueIsBorderBox = isBorderBox;

	// Support: Firefox <=54
	// Return a confounding non-pixel value or feign ignorance, as appropriate.
	if ( rnumnonpx.test( val ) ) {
		if ( !extra ) {
			return val;
		}
		val = "auto";
	}

	// Check for style in case a browser which returns unreliable values
	// for getComputedStyle silently falls back to the reliable elem.style
	valueIsBorderBox = valueIsBorderBox &&
		( support.boxSizingReliable() || val === elem.style[ dimension ] );

	// Fall back to offsetWidth/offsetHeight when value is "auto"
	// This happens for inline elements with no explicit setting (gh-3571)
	// Support: Android <=4.1 - 4.3 only
	// Also use offsetWidth/offsetHeight for misreported inline dimensions (gh-3602)
	if ( val === "auto" ||
		!parseFloat( val ) && jQuery.css( elem, "display", false, styles ) === "inline" ) {

		val = elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ];

		// offsetWidth/offsetHeight provide border-box values
		valueIsBorderBox = true;
	}

	// Normalize "" and auto
	val = parseFloat( val ) || 0;

	// Adjust for the element's box model
	return ( val +
		boxModelAdjustment(
			elem,
			dimension,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles,

			// Provide the current computed size to request scroll gutter calculation (gh-3589)
			val
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name ),
			style = elem.style;

		// Make sure that we're working with the right name. We don't
		// want to query the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Gets hook for the prefixed version, then unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set (#7116)
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// background-* props affect original clone's values
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				if ( isCustomProp ) {
					style.setProperty( name, value );
				} else {
					style[ name ] = value;
				}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var val, num, hooks,
			origName = camelCase( name ),
			isCustomProp = rcustomProp.test( name );

		// Make sure that we're working with the right name. We don't
		// want to modify the value if it is a CSS custom property
		// since they are user-defined.
		if ( !isCustomProp ) {
			name = finalPropName( origName );
		}

		// Try prefixed name followed by the unprefixed name
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		// Convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Make numeric if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}

		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, dimension ) {
	jQuery.cssHooks[ dimension ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// Certain elements can have dimension info if we invisibly show them
				// but it must have a current display style that would benefit
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&

					// Support: Safari 8+
					// Table columns in Safari have non-zero offsetWidth & zero
					// getBoundingClientRect().width unless display is changed.
					// Support: IE <=11 only
					// Running getBoundingClientRect on a disconnected node
					// in IE throws an error.
					( !elem.getClientRects().length || !elem.getBoundingClientRect().width ) ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, dimension, extra );
						} ) :
						getWidthOrHeight( elem, dimension, extra );
			}
		},

		set: function( elem, value, extra ) {
			var matches,
				styles = getStyles( elem ),
				isBorderBox = jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
				subtract = extra && boxModelAdjustment(
					elem,
					dimension,
					extra,
					isBorderBox,
					styles
				);

			// Account for unreliable border-box dimensions by comparing offset* to computed and
			// faking a content-box to get border and padding (gh-3699)
			if ( isBorderBox && support.scrollboxSize() === styles.position ) {
				subtract -= Math.ceil(
					elem[ "offset" + dimension[ 0 ].toUpperCase() + dimension.slice( 1 ) ] -
					parseFloat( styles[ dimension ] ) -
					boxModelAdjustment( elem, dimension, "border", false, styles ) -
					0.5
				);
			}

			// Convert to pixels if value adjustment is needed
			if ( subtract && ( matches = rcssNum.exec( value ) ) &&
				( matches[ 3 ] || "px" ) !== "px" ) {

				elem.style[ dimension ] = value;
				value = jQuery.css( elem, dimension );
			}

			return setPositiveNumber( elem, value, subtract );
		}
	};
} );

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return ( parseFloat( curCSS( elem, "marginLeft" ) ) ||
				elem.getBoundingClientRect().left -
					swap( elem, { marginLeft: 0 }, function() {
						return elem.getBoundingClientRect().left;
					} )
				) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// Assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( prefix !== "margin" ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( Array.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// Passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails.
			// Simple values such as "10px" are parsed to Float;
			// complex values such as "rotate(1rad)" are returned as-is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// Use step hook for back compat.
			// Use cssHook if its there.
			// Use .style if available and use plain properties where available.
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9 only
// Panic based approach to setting things on disconnected nodes
Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, inProgress,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

function schedule() {
	if ( inProgress ) {
		if ( document.hidden === false && window.requestAnimationFrame ) {
			window.requestAnimationFrame( schedule );
		} else {
			window.setTimeout( schedule, jQuery.fx.interval );
		}

		jQuery.fx.tick();
	}
}

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = Date.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		i = 0,
		attrs = { height: type };

	// If we include width, step value is 1 to do all cssExpand values,
	// otherwise step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// We're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	var prop, value, toggle, hooks, oldfire, propTween, restoreDisplay, display,
		isBox = "width" in props || "height" in props,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHiddenWithinTree( elem ),
		dataShow = dataPriv.get( elem, "fxshow" );

	// Queue-skipping animations hijack the fx hooks
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// Ensure the complete handler is called before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// Detect show/hide animations
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.test( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// Pretend to be hidden if this is a "show" and
				// there is still data from a stopped show/hide
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;

				// Ignore all other no-op show/hide data
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );
		}
	}

	// Bail out if this is a no-op like .hide().hide()
	propTween = !jQuery.isEmptyObject( props );
	if ( !propTween && jQuery.isEmptyObject( orig ) ) {
		return;
	}

	// Restrict "overflow" and "display" styles during box animations
	if ( isBox && elem.nodeType === 1 ) {

		// Support: IE <=9 - 11, Edge 12 - 15
		// Record all 3 overflow attributes because IE does not infer the shorthand
		// from identically-valued overflowX and overflowY and Edge just mirrors
		// the overflowX value there.
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Identify a display type, preferring old show/hide data over the CSS cascade
		restoreDisplay = dataShow && dataShow.display;
		if ( restoreDisplay == null ) {
			restoreDisplay = dataPriv.get( elem, "display" );
		}
		display = jQuery.css( elem, "display" );
		if ( display === "none" ) {
			if ( restoreDisplay ) {
				display = restoreDisplay;
			} else {

				// Get nonempty value(s) by temporarily forcing visibility
				showHide( [ elem ], true );
				restoreDisplay = elem.style.display || restoreDisplay;
				display = jQuery.css( elem, "display" );
				showHide( [ elem ] );
			}
		}

		// Animate inline elements as inline-block
		if ( display === "inline" || display === "inline-block" && restoreDisplay != null ) {
			if ( jQuery.css( elem, "float" ) === "none" ) {

				// Restore the original display value at the end of pure show/hide animations
				if ( !propTween ) {
					anim.done( function() {
						style.display = restoreDisplay;
					} );
					if ( restoreDisplay == null ) {
						display = style.display;
						restoreDisplay = display === "none" ? "" : display;
					}
				}
				style.display = "inline-block";
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		anim.always( function() {
			style.overflow = opts.overflow[ 0 ];
			style.overflowX = opts.overflow[ 1 ];
			style.overflowY = opts.overflow[ 2 ];
		} );
	}

	// Implement show/hide animations
	propTween = false;
	for ( prop in orig ) {

		// General show/hide setup for this element animation
		if ( !propTween ) {
			if ( dataShow ) {
				if ( "hidden" in dataShow ) {
					hidden = dataShow.hidden;
				}
			} else {
				dataShow = dataPriv.access( elem, "fxshow", { display: restoreDisplay } );
			}

			// Store hidden/visible for toggle so `.stop().toggle()` "reverses"
			if ( toggle ) {
				dataShow.hidden = !hidden;
			}

			// Show elements before animating them
			if ( hidden ) {
				showHide( [ elem ], true );
			}

			/* eslint-disable no-loop-func */

			anim.done( function() {

			/* eslint-enable no-loop-func */

				// The final step of a "hide" animation is actually hiding the element
				if ( !hidden ) {
					showHide( [ elem ] );
				}
				dataPriv.remove( elem, "fxshow" );
				for ( prop in orig ) {
					jQuery.style( elem, prop, orig[ prop ] );
				}
			} );
		}

		// Per-property setup
		propTween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );
		if ( !( prop in dataShow ) ) {
			dataShow[ prop ] = propTween.start;
			if ( hidden ) {
				propTween.end = propTween.start;
				propTween.start = 0;
			}
		}
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( Array.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// Not quite $.extend, this won't overwrite existing keys.
			// Reusing 'index' because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// Don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3 only
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			// If there's more to do, yield
			if ( percent < 1 && length ) {
				return remaining;
			}

			// If this was an empty animation, synthesize a final progress notification
			if ( !length ) {
				deferred.notifyWith( elem, [ animation, 1, 0 ] );
			}

			// Resolve the animation and report its conclusion
			deferred.resolveWith( elem, [ animation ] );
			return false;
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// If we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// Resolve when we played the last frame; otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					result.stop.bind( result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	// Attach callbacks from options
	animation
		.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	return animation;
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnothtmlwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !isFunction( easing ) && easing
	};

	// Go to the end state if fx are off
	if ( jQuery.fx.off ) {
		opt.duration = 0;

	} else {
		if ( typeof opt.duration !== "number" ) {
			if ( opt.duration in jQuery.fx.speeds ) {
				opt.duration = jQuery.fx.speeds[ opt.duration ];

			} else {
				opt.duration = jQuery.fx.speeds._default;
			}
		}
	}

	// Normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// Show any hidden elements after setting opacity to 0
		return this.filter( isHiddenWithinTree ).css( "opacity", 0 ).show()

			// Animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || dataPriv.get( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = dataPriv.get( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// Start the next in the queue if the last step wasn't forced.
			// Timers currently will call their complete callbacks, which
			// will dequeue but only if they were gotoEnd.
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = dataPriv.get( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// Enable finishing flag on private data
			data.finish = true;

			// Empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// Look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// Look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// Turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		i = 0,
		timers = jQuery.timers;

	fxNow = Date.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Run the timer and safely remove it when done (allowing for external removal)
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	jQuery.fx.start();
};

jQuery.fx.interval = 13;
jQuery.fx.start = function() {
	if ( inProgress ) {
		return;
	}

	inProgress = true;
	schedule();
};

jQuery.fx.stop = function() {
	inProgress = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// https://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var input = document.createElement( "input" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	input.type = "checkbox";

	// Support: Android <=4.3 only
	// Default value for a checkbox should be "on"
	support.checkOn = input.value !== "";

	// Support: IE <=11 only
	// Must access selectedIndex to make default options select
	support.optSelected = opt.selected;

	// Support: IE <=11 only
	// An input loses its value after becoming a radio
	input = document.createElement( "input" );
	input.value = "t";
	input.type = "radio";
	support.radioValue = input.value === "t";
} )();


var boolHook,
	attrHandle = jQuery.expr.attrHandle;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// Attribute hooks are determined by the lowercase version
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			hooks = jQuery.attrHooks[ name.toLowerCase() ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : undefined );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					nodeName( elem, "input" ) ) {
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name,
			i = 0,

			// Attribute names can contain non-HTML whitespace characters
			// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
			attrNames = value && value.match( rnothtmlwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				elem.removeAttribute( name );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else {
			elem.setAttribute( name, name );
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	attrHandle[ name ] = function( elem, name, isXML ) {
		var ret, handle,
			lowercaseName = name.toLowerCase();

		if ( !isXML ) {

			// Avoid an infinite loop by temporarily removing this function from the getter
			handle = attrHandle[ lowercaseName ];
			attrHandle[ lowercaseName ] = ret;
			ret = getter( elem, name, isXML ) != null ?
				lowercaseName :
				null;
			attrHandle[ lowercaseName ] = handle;
		}
		return ret;
	};
} );




var rfocusable = /^(?:input|select|textarea|button)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		return this.each( function() {
			delete this[ jQuery.propFix[ name ] || name ];
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// Support: IE <=9 - 11 only
				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// https://web.archive.org/web/20141116233347/http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				if ( tabindex ) {
					return parseInt( tabindex, 10 );
				}

				if (
					rfocusable.test( elem.nodeName ) ||
					rclickable.test( elem.nodeName ) &&
					elem.href
				) {
					return 0;
				}

				return -1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Support: IE <=11 only
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
// eslint rule "no-unused-expressions" is disabled for this code
// since it considers such accessions noop
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent && parent.parentNode ) {
				parent.parentNode.selectedIndex;
			}
			return null;
		},
		set: function( elem ) {

			/* eslint no-unused-expressions: "off" */

			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );




	// Strip and collapse whitespace according to HTML spec
	// https://infra.spec.whatwg.org/#strip-and-collapse-ascii-whitespace
	function stripAndCollapse( value ) {
		var tokens = value.match( rnothtmlwhite ) || [];
		return tokens.join( " " );
	}


function getClass( elem ) {
	return elem.getAttribute && elem.getAttribute( "class" ) || "";
}

function classesToArray( value ) {
	if ( Array.isArray( value ) ) {
		return value;
	}
	if ( typeof value === "string" ) {
		return value.match( rnothtmlwhite ) || [];
	}
	return [];
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		classes = classesToArray( value );

		if ( classes.length ) {
			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 && ( " " + stripAndCollapse( curValue ) + " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = stripAndCollapse( cur );
					if ( curValue !== finalValue ) {
						elem.setAttribute( "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value,
			isValidValue = type === "string" || Array.isArray( value );

		if ( typeof stateVal === "boolean" && isValidValue ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( isValidValue ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = classesToArray( value );

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// Store className if set
					dataPriv.set( this, "__className__", className );
				}

				// If the element has a class name or if we're passed `false`,
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				if ( this.setAttribute ) {
					this.setAttribute( "class",
						className || value === false ?
						"" :
						dataPriv.get( this, "__className__" ) || ""
					);
				}
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + stripAndCollapse( getClass( elem ) ) + " " ).indexOf( className ) > -1 ) {
					return true;
			}
		}

		return false;
	}
} );




var rreturn = /\r/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, valueIsFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if ( hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				// Handle most common string cases
				if ( typeof ret === "string" ) {
					return ret.replace( rreturn, "" );
				}

				// Handle cases where value is null/undef or number
				return ret == null ? "" : ret;
			}

			return;
		}

		valueIsFunction = isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( valueIsFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";

			} else if ( typeof val === "number" ) {
				val += "";

			} else if ( Array.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {

				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE <=10 - 11 only
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					stripAndCollapse( jQuery.text( elem ) );
			}
		},
		select: {
			get: function( elem ) {
				var value, option, i,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one",
					values = one ? null : [],
					max = one ? index + 1 : options.length;

				if ( index < 0 ) {
					i = max;

				} else {
					i = one ? index : 0;
				}

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// Support: IE <=9 only
					// IE8-9 doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							!option.disabled &&
							( !option.parentNode.disabled ||
								!nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					/* eslint-disable no-cond-assign */

					if ( option.selected =
						jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1
					) {
						optionSet = true;
					}

					/* eslint-enable no-cond-assign */
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}
				return values;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( Array.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




// Return jQuery for attributes-only inclusion


support.focusin = "onfocusin" in window;


var rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	stopPropagationCallback = function( e ) {
		e.stopPropagation();
	};

jQuery.extend( jQuery.event, {

	trigger: function( event, data, elem, onlyHandlers ) {

		var i, cur, tmp, bubbleType, ontype, handle, special, lastElement,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = lastElement = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {
			lastElement = cur;
			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( dataPriv.get( cur, "events" ) || {} )[ event.type ] &&
				dataPriv.get( cur, "handle" );
			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if ( ( !special._default ||
				special._default.apply( eventPath.pop(), data ) === false ) &&
				acceptData( elem ) ) {

				// Call a native DOM method on the target with the same name as the event.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && isFunction( elem[ type ] ) && !isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;

					if ( event.isPropagationStopped() ) {
						lastElement.addEventListener( type, stopPropagationCallback );
					}

					elem[ type ]();

					if ( event.isPropagationStopped() ) {
						lastElement.removeEventListener( type, stopPropagationCallback );
					}

					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	// Piggyback on a donor event to simulate a different one
	// Used only for `focus(in | out)` events
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true
			}
		);

		jQuery.event.trigger( e, null, elem );
	}

} );

jQuery.fn.extend( {

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


// Support: Firefox <=44
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome <=48 - 49, Safari <=9.0 - 9.1
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://bugs.chromium.org/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				dataPriv.access( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = dataPriv.access( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					dataPriv.remove( doc, fix );

				} else {
					dataPriv.access( doc, fix, attaches );
				}
			}
		};
	} );
}
var location = window.location;

var nonce = Date.now();

var rquery = ( /\?/ );



// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml;
	if ( !data || typeof data !== "string" ) {
		return null;
	}

	// Support: IE 9 - 11 only
	// IE throws on parseFromString with invalid input.
	try {
		xml = ( new window.DOMParser() ).parseFromString( data, "text/xml" );
	} catch ( e ) {
		xml = undefined;
	}

	if ( !xml || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( Array.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && toType( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, valueOrFunction ) {

			// If value is a function, invoke it and use its return value
			var value = isFunction( valueOrFunction ) ?
				valueOrFunction() :
				valueOrFunction;

			s[ s.length ] = encodeURIComponent( key ) + "=" +
				encodeURIComponent( value == null ? "" : value );
		};

	// If an array was passed in, assume that it is an array of form elements.
	if ( Array.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is( ":disabled" ) so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			if ( val == null ) {
				return null;
			}

			if ( Array.isArray( val ) ) {
				return jQuery.map( val, function( val ) {
					return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
				} );
			}

			return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


var
	r20 = /%20/g,
	rhash = /#.*$/,
	rantiCache = /([?&])_=[^&]*/,
	rheaders = /^(.*?):[ \t]*([^\r\n]*)$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Anchor tag for parsing the document origin
	originAnchor = document.createElement( "a" );
	originAnchor.href = location.href;

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnothtmlwhite ) || [];

		if ( isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType[ 0 ] === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var key, deep,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {

	var ct, type, finalDataType, firstDataType,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s.throws ) {
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: location.href,
		type: "GET",
		isLocal: rlocalProtocol.test( location.protocol ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",

		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": JSON.parse,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var transport,

			// URL without anti-cache param
			cacheURL,

			// Response headers
			responseHeadersString,
			responseHeaders,

			// timeout handle
			timeoutTimer,

			// Url cleanup var
			urlAnchor,

			// Request state (becomes false upon send and true upon completion)
			completed,

			// To know if global events are to be dispatched
			fireGlobals,

			// Loop variable
			i,

			// uncached part of the url
			uncached,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( completed ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return completed ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					if ( completed == null ) {
						name = requestHeadersNames[ name.toLowerCase() ] =
							requestHeadersNames[ name.toLowerCase() ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( completed == null ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( completed ) {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						} else {

							// Lazy-add the new callbacks in a way that preserves old ones
							for ( code in map ) {
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR );

		// Add protocol if not provided (prefilters might expect it)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || location.href ) + "" )
			.replace( rprotocol, location.protocol + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = ( s.dataType || "*" ).toLowerCase().match( rnothtmlwhite ) || [ "" ];

		// A cross-domain request is in order when the origin doesn't match the current origin.
		if ( s.crossDomain == null ) {
			urlAnchor = document.createElement( "a" );

			// Support: IE <=8 - 11, Edge 12 - 15
			// IE throws exception on accessing the href property if url is malformed,
			// e.g. http://example.com:80x/
			try {
				urlAnchor.href = s.url;

				// Support: IE <=8 - 11 only
				// Anchor's host property isn't correctly set when s.url is relative
				urlAnchor.href = urlAnchor.href;
				s.crossDomain = originAnchor.protocol + "//" + originAnchor.host !==
					urlAnchor.protocol + "//" + urlAnchor.host;
			} catch ( e ) {

				// If there is an error parsing the URL, assume it is crossDomain,
				// it can be rejected by the transport if it is invalid
				s.crossDomain = true;
			}
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( completed ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		// Remove hash to simplify url manipulation
		cacheURL = s.url.replace( rhash, "" );

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// Remember the hash so we can put it back
			uncached = s.url.slice( cacheURL.length );

			// If data is available and should be processed, append data to url
			if ( s.data && ( s.processData || typeof s.data === "string" ) ) {
				cacheURL += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data;

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add or update anti-cache param if needed
			if ( s.cache === false ) {
				cacheURL = cacheURL.replace( rantiCache, "$1" );
				uncached = ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + ( nonce++ ) + uncached;
			}

			// Put hash and anti-cache on the URL that will be requested (gh-1732)
			s.url = cacheURL + uncached;

		// Change '%20' to '+' if this is encoded form body content (gh-2658)
		} else if ( s.data && s.processData &&
			( s.contentType || "" ).indexOf( "application/x-www-form-urlencoded" ) === 0 ) {
			s.data = s.data.replace( r20, "+" );
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || completed ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// Aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		completeDeferred.add( s.complete );
		jqXHR.done( s.success );
		jqXHR.fail( s.error );

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( completed ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				completed = false;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Rethrow post-completion exceptions
				if ( completed ) {
					throw e;
				}

				// Propagate others as results
				done( -1, e );
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Ignore repeat invocations
			if ( completed ) {
				return;
			}

			completed = true;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// Extract error from statusText and normalize for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// Shift arguments if data argument was omitted
		if ( isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		var wrap;

		if ( this[ 0 ] ) {
			if ( isFunction( html ) ) {
				html = html.call( this[ 0 ] );
			}

			// The elements to wrap the target around
			wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstElementChild ) {
					elem = elem.firstElementChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var htmlIsFunction = isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( htmlIsFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function( selector ) {
		this.parent( selector ).not( "body" ).each( function() {
			jQuery( this ).replaceWith( this.childNodes );
		} );
		return this;
	}
} );


jQuery.expr.pseudos.hidden = function( elem ) {
	return !jQuery.expr.pseudos.visible( elem );
};
jQuery.expr.pseudos.visible = function( elem ) {
	return !!( elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length );
};




jQuery.ajaxSettings.xhr = function() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
};

var xhrSuccessStatus = {

		// File protocol always yields status code 0, assume 200
		0: 200,

		// Support: IE <=9 only
		// #1450: sometimes IE returns 1223 when it should be 204
		1223: 204
	},
	xhrSupported = jQuery.ajaxSettings.xhr();

support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
support.ajax = xhrSupported = !!xhrSupported;

jQuery.ajaxTransport( function( options ) {
	var callback, errorCallback;

	// Cross domain only allowed if supported through XMLHttpRequest
	if ( support.cors || xhrSupported && !options.crossDomain ) {
		return {
			send: function( headers, complete ) {
				var i,
					xhr = options.xhr();

				xhr.open(
					options.type,
					options.url,
					options.async,
					options.username,
					options.password
				);

				// Apply custom fields if provided
				if ( options.xhrFields ) {
					for ( i in options.xhrFields ) {
						xhr[ i ] = options.xhrFields[ i ];
					}
				}

				// Override mime type if needed
				if ( options.mimeType && xhr.overrideMimeType ) {
					xhr.overrideMimeType( options.mimeType );
				}

				// X-Requested-With header
				// For cross-domain requests, seeing as conditions for a preflight are
				// akin to a jigsaw puzzle, we simply never set it to be sure.
				// (it can always be set on a per-request basis or even using ajaxSetup)
				// For same-domain requests, won't change header if already provided.
				if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
					headers[ "X-Requested-With" ] = "XMLHttpRequest";
				}

				// Set headers
				for ( i in headers ) {
					xhr.setRequestHeader( i, headers[ i ] );
				}

				// Callback
				callback = function( type ) {
					return function() {
						if ( callback ) {
							callback = errorCallback = xhr.onload =
								xhr.onerror = xhr.onabort = xhr.ontimeout =
									xhr.onreadystatechange = null;

							if ( type === "abort" ) {
								xhr.abort();
							} else if ( type === "error" ) {

								// Support: IE <=9 only
								// On a manual native abort, IE9 throws
								// errors on any property access that is not readyState
								if ( typeof xhr.status !== "number" ) {
									complete( 0, "error" );
								} else {
									complete(

										// File: protocol always yields status 0; see #8605, #14207
										xhr.status,
										xhr.statusText
									);
								}
							} else {
								complete(
									xhrSuccessStatus[ xhr.status ] || xhr.status,
									xhr.statusText,

									// Support: IE <=9 only
									// IE9 has no XHR2 but throws on binary (trac-11426)
									// For XHR2 non-text, let the caller handle it (gh-2498)
									( xhr.responseType || "text" ) !== "text"  ||
									typeof xhr.responseText !== "string" ?
										{ binary: xhr.response } :
										{ text: xhr.responseText },
									xhr.getAllResponseHeaders()
								);
							}
						}
					};
				};

				// Listen to events
				xhr.onload = callback();
				errorCallback = xhr.onerror = xhr.ontimeout = callback( "error" );

				// Support: IE 9 only
				// Use onreadystatechange to replace onabort
				// to handle uncaught aborts
				if ( xhr.onabort !== undefined ) {
					xhr.onabort = errorCallback;
				} else {
					xhr.onreadystatechange = function() {

						// Check readyState before timeout as it changes
						if ( xhr.readyState === 4 ) {

							// Allow onerror to be called first,
							// but that will not handle a native abort
							// Also, save errorCallback to a variable
							// as xhr.onerror cannot be accessed
							window.setTimeout( function() {
								if ( callback ) {
									errorCallback();
								}
							} );
						}
					};
				}

				// Create the abort callback
				callback = callback( "abort" );

				try {

					// Do send the request (this may raise an exception)
					xhr.send( options.hasContent && options.data || null );
				} catch ( e ) {

					// #14683: Only rethrow if this hasn't been notified as an error yet
					if ( callback ) {
						throw e;
					}
				}
			},

			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




// Prevent auto-execution of scripts when no explicit dataType was provided (See gh-2432)
jQuery.ajaxPrefilter( function( s ) {
	if ( s.crossDomain ) {
		s.contents.script = false;
	}
} );

// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and crossDomain
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {
		var script, callback;
		return {
			send: function( _, complete ) {
				script = jQuery( "<script>" ).prop( {
					charset: s.scriptCharset,
					src: s.url
				} ).on(
					"load error",
					callback = function( evt ) {
						script.remove();
						callback = null;
						if ( evt ) {
							complete( evt.type === "error" ? 404 : 200, evt.type );
						}
					}
				);

				// Use native DOM manipulation to avoid our domManip AJAX trickery
				document.head.appendChild( script[ 0 ] );
			},
			abort: function() {
				if ( callback ) {
					callback();
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// Force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// Make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// Save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// Support: Safari 8 only
// In Safari 8 documents created via document.implementation.createHTMLDocument
// collapse sibling forms: the second one becomes a child of the first one.
// Because of that, this security measure has to be disabled in Safari 8.
// https://bugs.webkit.org/show_bug.cgi?id=137337
support.createHTMLDocument = ( function() {
	var body = document.implementation.createHTMLDocument( "" ).body;
	body.innerHTML = "<form></form><form></form>";
	return body.childNodes.length === 2;
} )();


// Argument "data" should be string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( typeof data !== "string" ) {
		return [];
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}

	var base, parsed, scripts;

	if ( !context ) {

		// Stop scripts or inline event handlers from being executed immediately
		// by using document.implementation
		if ( support.createHTMLDocument ) {
			context = document.implementation.createHTMLDocument( "" );

			// Set the base href for the created document
			// so any parsed elements with URLs
			// are based on the document's URL (gh-2965)
			base = context.createElement( "base" );
			base.href = document.location.href;
			context.head.appendChild( base );
		} else {
			context = document;
		}
	}

	parsed = rsingleTag.exec( data );
	scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = stripAndCollapse( url.slice( off ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.pseudos.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};




jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// Set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			( curCSSTop + curCSSLeft ).indexOf( "auto" ) > -1;

		// Need to be able to calculate position if either
		// top or left is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;

		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );

		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {

	// offset() relates an element's border box to the document origin
	offset: function( options ) {

		// Preserve chaining for setter
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var rect, win,
			elem = this[ 0 ];

		if ( !elem ) {
			return;
		}

		// Return zeros for disconnected and hidden (display: none) elements (gh-2310)
		// Support: IE <=11 only
		// Running getBoundingClientRect on a
		// disconnected node in IE throws an error
		if ( !elem.getClientRects().length ) {
			return { top: 0, left: 0 };
		}

		// Get document-relative position by adding viewport scroll to viewport-relative gBCR
		rect = elem.getBoundingClientRect();
		win = elem.ownerDocument.defaultView;
		return {
			top: rect.top + win.pageYOffset,
			left: rect.left + win.pageXOffset
		};
	},

	// position() relates an element's margin box to its offset parent's padding box
	// This corresponds to the behavior of CSS absolute positioning
	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset, doc,
			elem = this[ 0 ],
			parentOffset = { top: 0, left: 0 };

		// position:fixed elements are offset from the viewport, which itself always has zero offset
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// Assume position:fixed implies availability of getBoundingClientRect
			offset = elem.getBoundingClientRect();

		} else {
			offset = this.offset();

			// Account for the *real* offset parent, which can be the document or its root element
			// when a statically positioned element is identified
			doc = elem.ownerDocument;
			offsetParent = elem.offsetParent || doc.documentElement;
			while ( offsetParent &&
				( offsetParent === doc.body || offsetParent === doc.documentElement ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) {

				offsetParent = offsetParent.parentNode;
			}
			if ( offsetParent && offsetParent !== elem && offsetParent.nodeType === 1 ) {

				// Incorporate borders into its offset, since they are outside its content origin
				parentOffset = jQuery( offsetParent ).offset();
				parentOffset.top += jQuery.css( offsetParent, "borderTopWidth", true );
				parentOffset.left += jQuery.css( offsetParent, "borderLeftWidth", true );
			}
		}

		// Subtract parent offsets and element margins
		return {
			top: offset.top - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	// This method will return documentElement in the following cases:
	// 1) For the element inside the iframe without offsetParent, this method will return
	//    documentElement of the parent window
	// 2) For the hidden or detached element
	// 3) For body or html element, i.e. in case of the html node - it will return itself
	//
	// but those exceptions were never presented as a real life use-cases
	// and might be considered as more preferable results.
	//
	// This logic, however, is not guaranteed and can change at any point in the future
	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && jQuery.css( offsetParent, "position" ) === "static" ) {
				offsetParent = offsetParent.offsetParent;
			}

			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = "pageYOffset" === prop;

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {

			// Coalesce documents and windows
			var win;
			if ( isWindow( elem ) ) {
				win = elem;
			} else if ( elem.nodeType === 9 ) {
				win = elem.defaultView;
			}

			if ( val === undefined ) {
				return win ? win[ prop ] : elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : win.pageXOffset,
					top ? val : win.pageYOffset
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length );
	};
} );

// Support: Safari <=7 - 9.1, Chrome <=37 - 49
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// Blink bug: https://bugs.chromium.org/p/chromium/issues/detail?id=589347
// getComputedStyle returns percent when specified for top/left/bottom/right;
// rather than make the css module depend on the offset module, just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// If curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
		function( defaultExtra, funcName ) {

		// Margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( isWindow( elem ) ) {

					// $( window ).outerWidth/Height return w/h including scrollbars (gh-1729)
					return funcName.indexOf( "outer" ) === 0 ?
						elem[ "inner" + name ] :
						elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable );
		};
	} );
} );


jQuery.each( ( "blur focus focusin focusout resize scroll click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );




jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// Bind a function to a context, optionally partially applying any
// arguments.
// jQuery.proxy is deprecated to promote standards (specifically Function#bind)
// However, it is not slated for removal any time soon
jQuery.proxy = function( fn, context ) {
	var tmp, args, proxy;

	if ( typeof context === "string" ) {
		tmp = fn[ context ];
		context = fn;
		fn = tmp;
	}

	// Quick check to determine if target is callable, in the spec
	// this throws a TypeError, but we will just return undefined.
	if ( !isFunction( fn ) ) {
		return undefined;
	}

	// Simulated bind
	args = slice.call( arguments, 2 );
	proxy = function() {
		return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
	};

	// Set the guid of unique handler to the same of original handler, so it can be removed
	proxy.guid = fn.guid = fn.guid || jQuery.guid++;

	return proxy;
};

jQuery.holdReady = function( hold ) {
	if ( hold ) {
		jQuery.readyWait++;
	} else {
		jQuery.ready( true );
	}
};
jQuery.isArray = Array.isArray;
jQuery.parseJSON = JSON.parse;
jQuery.nodeName = nodeName;
jQuery.isFunction = isFunction;
jQuery.isWindow = isWindow;
jQuery.camelCase = camelCase;
jQuery.type = toType;

jQuery.now = Date.now;

jQuery.isNumeric = function( obj ) {

	// As of jQuery 3.0, isNumeric is limited to
	// strings and numbers (primitives or objects)
	// that can be coerced to finite numbers (gh-2662)
	var type = jQuery.type( obj );
	return ( type === "number" || type === "string" ) &&

		// parseFloat NaNs numeric-cast false positives ("")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		!isNaN( obj - parseFloat( obj ) );
};




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}




var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in AMD
// (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}




return jQuery;
} );


/***/ }),

/***/ "./node_modules/picturefill/dist/picturefill.js":
/*!******************************************************!*\
  !*** ./node_modules/picturefill/dist/picturefill.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_RESULT__;/*! picturefill - v3.0.2 - 2016-02-12
 * https://scottjehl.github.io/picturefill/
 * Copyright (c) 2016 https://github.com/scottjehl/picturefill/blob/master/Authors.txt; Licensed MIT
 */
/*! Gecko-Picture - v1.0
 * https://github.com/scottjehl/picturefill/tree/3.0/src/plugins/gecko-picture
 * Firefox's early picture implementation (prior to FF41) is static and does
 * not react to viewport changes. This tiny module fixes this.
 */
(function(window) {
	/*jshint eqnull:true */
	var ua = navigator.userAgent;

	if ( window.HTMLPictureElement && ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 < 45) ) {
		addEventListener("resize", (function() {
			var timer;

			var dummySrc = document.createElement("source");

			var fixRespimg = function(img) {
				var source, sizes;
				var picture = img.parentNode;

				if (picture.nodeName.toUpperCase() === "PICTURE") {
					source = dummySrc.cloneNode();

					picture.insertBefore(source, picture.firstElementChild);
					setTimeout(function() {
						picture.removeChild(source);
					});
				} else if (!img._pfLastSize || img.offsetWidth > img._pfLastSize) {
					img._pfLastSize = img.offsetWidth;
					sizes = img.sizes;
					img.sizes += ",100vw";
					setTimeout(function() {
						img.sizes = sizes;
					});
				}
			};

			var findPictureImgs = function() {
				var i;
				var imgs = document.querySelectorAll("picture > img, img[srcset][sizes]");
				for (i = 0; i < imgs.length; i++) {
					fixRespimg(imgs[i]);
				}
			};
			var onResize = function() {
				clearTimeout(timer);
				timer = setTimeout(findPictureImgs, 99);
			};
			var mq = window.matchMedia && matchMedia("(orientation: landscape)");
			var init = function() {
				onResize();

				if (mq && mq.addListener) {
					mq.addListener(onResize);
				}
			};

			dummySrc.srcset = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";

			if (/^[c|i]|d$/.test(document.readyState || "")) {
				init();
			} else {
				document.addEventListener("DOMContentLoaded", init);
			}

			return onResize;
		})());
	}
})(window);

/*! Picturefill - v3.0.2
 * http://scottjehl.github.io/picturefill
 * Copyright (c) 2015 https://github.com/scottjehl/picturefill/blob/master/Authors.txt;
 *  License: MIT
 */

(function( window, document, undefined ) {
	// Enable strict mode
	"use strict";

	// HTML shim|v it for old IE (IE9 will still need the HTML video tag workaround)
	document.createElement( "picture" );

	var warn, eminpx, alwaysCheckWDescriptor, evalId;
	// local object for method references and testing exposure
	var pf = {};
	var isSupportTestReady = false;
	var noop = function() {};
	var image = document.createElement( "img" );
	var getImgAttr = image.getAttribute;
	var setImgAttr = image.setAttribute;
	var removeImgAttr = image.removeAttribute;
	var docElem = document.documentElement;
	var types = {};
	var cfg = {
		//resource selection:
		algorithm: ""
	};
	var srcAttr = "data-pfsrc";
	var srcsetAttr = srcAttr + "set";
	// ua sniffing is done for undetectable img loading features,
	// to do some non crucial perf optimizations
	var ua = navigator.userAgent;
	var supportAbort = (/rident/).test(ua) || ((/ecko/).test(ua) && ua.match(/rv\:(\d+)/) && RegExp.$1 > 35 );
	var curSrcProp = "currentSrc";
	var regWDesc = /\s+\+?\d+(e\d+)?w/;
	var regSize = /(\([^)]+\))?\s*(.+)/;
	var setOptions = window.picturefillCFG;
	/**
	 * Shortcut property for https://w3c.github.io/webappsec/specs/mixedcontent/#restricts-mixed-content ( for easy overriding in tests )
	 */
	// baseStyle also used by getEmValue (i.e.: width: 1em is important)
	var baseStyle = "position:absolute;left:0;visibility:hidden;display:block;padding:0;border:none;font-size:1em;width:1em;overflow:hidden;clip:rect(0px, 0px, 0px, 0px)";
	var fsCss = "font-size:100%!important;";
	var isVwDirty = true;

	var cssCache = {};
	var sizeLengthCache = {};
	var DPR = window.devicePixelRatio;
	var units = {
		px: 1,
		"in": 96
	};
	var anchor = document.createElement( "a" );
	/**
	 * alreadyRun flag used for setOptions. is it true setOptions will reevaluate
	 * @type {boolean}
	 */
	var alreadyRun = false;

	// Reusable, non-"g" Regexes

	// (Don't use \s, to avoid matching non-breaking space.)
	var regexLeadingSpaces = /^[ \t\n\r\u000c]+/,
	    regexLeadingCommasOrSpaces = /^[, \t\n\r\u000c]+/,
	    regexLeadingNotSpaces = /^[^ \t\n\r\u000c]+/,
	    regexTrailingCommas = /[,]+$/,
	    regexNonNegativeInteger = /^\d+$/,

	    // ( Positive or negative or unsigned integers or decimals, without or without exponents.
	    // Must include at least one digit.
	    // According to spec tests any decimal point must be followed by a digit.
	    // No leading plus sign is allowed.)
	    // https://html.spec.whatwg.org/multipage/infrastructure.html#valid-floating-point-number
	    regexFloatingPoint = /^-?(?:[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/;

	var on = function(obj, evt, fn, capture) {
		if ( obj.addEventListener ) {
			obj.addEventListener(evt, fn, capture || false);
		} else if ( obj.attachEvent ) {
			obj.attachEvent( "on" + evt, fn);
		}
	};

	/**
	 * simple memoize function:
	 */

	var memoize = function(fn) {
		var cache = {};
		return function(input) {
			if ( !(input in cache) ) {
				cache[ input ] = fn(input);
			}
			return cache[ input ];
		};
	};

	// UTILITY FUNCTIONS

	// Manual is faster than RegEx
	// http://jsperf.com/whitespace-character/5
	function isSpace(c) {
		return (c === "\u0020" || // space
		        c === "\u0009" || // horizontal tab
		        c === "\u000A" || // new line
		        c === "\u000C" || // form feed
		        c === "\u000D");  // carriage return
	}

	/**
	 * gets a mediaquery and returns a boolean or gets a css length and returns a number
	 * @param css mediaqueries or css length
	 * @returns {boolean|number}
	 *
	 * based on: https://gist.github.com/jonathantneal/db4f77009b155f083738
	 */
	var evalCSS = (function() {

		var regLength = /^([\d\.]+)(em|vw|px)$/;
		var replace = function() {
			var args = arguments, index = 0, string = args[0];
			while (++index in args) {
				string = string.replace(args[index], args[++index]);
			}
			return string;
		};

		var buildStr = memoize(function(css) {

			return "return " + replace((css || "").toLowerCase(),
				// interpret `and`
				/\band\b/g, "&&",

				// interpret `,`
				/,/g, "||",

				// interpret `min-` as >=
				/min-([a-z-\s]+):/g, "e.$1>=",

				// interpret `max-` as <=
				/max-([a-z-\s]+):/g, "e.$1<=",

				//calc value
				/calc([^)]+)/g, "($1)",

				// interpret css values
				/(\d+[\.]*[\d]*)([a-z]+)/g, "($1 * e.$2)",
				//make eval less evil
				/^(?!(e.[a-z]|[0-9\.&=|><\+\-\*\(\)\/])).*/ig, ""
			) + ";";
		});

		return function(css, length) {
			var parsedLength;
			if (!(css in cssCache)) {
				cssCache[css] = false;
				if (length && (parsedLength = css.match( regLength ))) {
					cssCache[css] = parsedLength[ 1 ] * units[parsedLength[ 2 ]];
				} else {
					/*jshint evil:true */
					try{
						cssCache[css] = new Function("e", buildStr(css))(units);
					} catch(e) {}
					/*jshint evil:false */
				}
			}
			return cssCache[css];
		};
	})();

	var setResolution = function( candidate, sizesattr ) {
		if ( candidate.w ) { // h = means height: || descriptor.type === 'h' do not handle yet...
			candidate.cWidth = pf.calcListLength( sizesattr || "100vw" );
			candidate.res = candidate.w / candidate.cWidth ;
		} else {
			candidate.res = candidate.d;
		}
		return candidate;
	};

	/**
	 *
	 * @param opt
	 */
	var picturefill = function( opt ) {

		if (!isSupportTestReady) {return;}

		var elements, i, plen;

		var options = opt || {};

		if ( options.elements && options.elements.nodeType === 1 ) {
			if ( options.elements.nodeName.toUpperCase() === "IMG" ) {
				options.elements =  [ options.elements ];
			} else {
				options.context = options.elements;
				options.elements =  null;
			}
		}

		elements = options.elements || pf.qsa( (options.context || document), ( options.reevaluate || options.reselect ) ? pf.sel : pf.selShort );

		if ( (plen = elements.length) ) {

			pf.setupRun( options );
			alreadyRun = true;

			// Loop through all elements
			for ( i = 0; i < plen; i++ ) {
				pf.fillImg(elements[ i ], options);
			}

			pf.teardownRun( options );
		}
	};

	/**
	 * outputs a warning for the developer
	 * @param {message}
	 * @type {Function}
	 */
	warn = ( window.console && console.warn ) ?
		function( message ) {
			console.warn( message );
		} :
		noop
	;

	if ( !(curSrcProp in image) ) {
		curSrcProp = "src";
	}

	// Add support for standard mime types.
	types[ "image/jpeg" ] = true;
	types[ "image/gif" ] = true;
	types[ "image/png" ] = true;

	function detectTypeSupport( type, typeUri ) {
		// based on Modernizr's lossless img-webp test
		// note: asynchronous
		var image = new window.Image();
		image.onerror = function() {
			types[ type ] = false;
			picturefill();
		};
		image.onload = function() {
			types[ type ] = image.width === 1;
			picturefill();
		};
		image.src = typeUri;
		return "pending";
	}

	// test svg support
	types[ "image/svg+xml" ] = document.implementation.hasFeature( "http://www.w3.org/TR/SVG11/feature#Image", "1.1" );

	/**
	 * updates the internal vW property with the current viewport width in px
	 */
	function updateMetrics() {

		isVwDirty = false;
		DPR = window.devicePixelRatio;
		cssCache = {};
		sizeLengthCache = {};

		pf.DPR = DPR || 1;

		units.width = Math.max(window.innerWidth || 0, docElem.clientWidth);
		units.height = Math.max(window.innerHeight || 0, docElem.clientHeight);

		units.vw = units.width / 100;
		units.vh = units.height / 100;

		evalId = [ units.height, units.width, DPR ].join("-");

		units.em = pf.getEmValue();
		units.rem = units.em;
	}

	function chooseLowRes( lowerValue, higherValue, dprValue, isCached ) {
		var bonusFactor, tooMuch, bonus, meanDensity;

		//experimental
		if (cfg.algorithm === "saveData" ){
			if ( lowerValue > 2.7 ) {
				meanDensity = dprValue + 1;
			} else {
				tooMuch = higherValue - dprValue;
				bonusFactor = Math.pow(lowerValue - 0.6, 1.5);

				bonus = tooMuch * bonusFactor;

				if (isCached) {
					bonus += 0.1 * bonusFactor;
				}

				meanDensity = lowerValue + bonus;
			}
		} else {
			meanDensity = (dprValue > 1) ?
				Math.sqrt(lowerValue * higherValue) :
				lowerValue;
		}

		return meanDensity > dprValue;
	}

	function applyBestCandidate( img ) {
		var srcSetCandidates;
		var matchingSet = pf.getSet( img );
		var evaluated = false;
		if ( matchingSet !== "pending" ) {
			evaluated = evalId;
			if ( matchingSet ) {
				srcSetCandidates = pf.setRes( matchingSet );
				pf.applySetCandidate( srcSetCandidates, img );
			}
		}
		img[ pf.ns ].evaled = evaluated;
	}

	function ascendingSort( a, b ) {
		return a.res - b.res;
	}

	function setSrcToCur( img, src, set ) {
		var candidate;
		if ( !set && src ) {
			set = img[ pf.ns ].sets;
			set = set && set[set.length - 1];
		}

		candidate = getCandidateForSrc(src, set);

		if ( candidate ) {
			src = pf.makeUrl(src);
			img[ pf.ns ].curSrc = src;
			img[ pf.ns ].curCan = candidate;

			if ( !candidate.res ) {
				setResolution( candidate, candidate.set.sizes );
			}
		}
		return candidate;
	}

	function getCandidateForSrc( src, set ) {
		var i, candidate, candidates;
		if ( src && set ) {
			candidates = pf.parseSet( set );
			src = pf.makeUrl(src);
			for ( i = 0; i < candidates.length; i++ ) {
				if ( src === pf.makeUrl(candidates[ i ].url) ) {
					candidate = candidates[ i ];
					break;
				}
			}
		}
		return candidate;
	}

	function getAllSourceElements( picture, candidates ) {
		var i, len, source, srcset;

		// SPEC mismatch intended for size and perf:
		// actually only source elements preceding the img should be used
		// also note: don't use qsa here, because IE8 sometimes doesn't like source as the key part in a selector
		var sources = picture.getElementsByTagName( "source" );

		for ( i = 0, len = sources.length; i < len; i++ ) {
			source = sources[ i ];
			source[ pf.ns ] = true;
			srcset = source.getAttribute( "srcset" );

			// if source does not have a srcset attribute, skip
			if ( srcset ) {
				candidates.push( {
					srcset: srcset,
					media: source.getAttribute( "media" ),
					type: source.getAttribute( "type" ),
					sizes: source.getAttribute( "sizes" )
				} );
			}
		}
	}

	/**
	 * Srcset Parser
	 * By Alex Bell |  MIT License
	 *
	 * @returns Array [{url: _, d: _, w: _, h:_, set:_(????)}, ...]
	 *
	 * Based super duper closely on the reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-srcset-attribute
	 */

	// 1. Let input be the value passed to this algorithm.
	// (TO-DO : Explain what "set" argument is here. Maybe choose a more
	// descriptive & more searchable name.  Since passing the "set" in really has
	// nothing to do with parsing proper, I would prefer this assignment eventually
	// go in an external fn.)
	function parseSrcset(input, set) {

		function collectCharacters(regEx) {
			var chars,
			    match = regEx.exec(input.substring(pos));
			if (match) {
				chars = match[ 0 ];
				pos += chars.length;
				return chars;
			}
		}

		var inputLength = input.length,
		    url,
		    descriptors,
		    currentDescriptor,
		    state,
		    c,

		    // 2. Let position be a pointer into input, initially pointing at the start
		    //    of the string.
		    pos = 0,

		    // 3. Let candidates be an initially empty source set.
		    candidates = [];

		/**
		* Adds descriptor properties to a candidate, pushes to the candidates array
		* @return undefined
		*/
		// (Declared outside of the while loop so that it's only created once.
		// (This fn is defined before it is used, in order to pass JSHINT.
		// Unfortunately this breaks the sequencing of the spec comments. :/ )
		function parseDescriptors() {

			// 9. Descriptor parser: Let error be no.
			var pError = false,

			// 10. Let width be absent.
			// 11. Let density be absent.
			// 12. Let future-compat-h be absent. (We're implementing it now as h)
			    w, d, h, i,
			    candidate = {},
			    desc, lastChar, value, intVal, floatVal;

			// 13. For each descriptor in descriptors, run the appropriate set of steps
			// from the following list:
			for (i = 0 ; i < descriptors.length; i++) {
				desc = descriptors[ i ];

				lastChar = desc[ desc.length - 1 ];
				value = desc.substring(0, desc.length - 1);
				intVal = parseInt(value, 10);
				floatVal = parseFloat(value);

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0077 LATIN SMALL LETTER W character
				if (regexNonNegativeInteger.test(value) && (lastChar === "w")) {

					// If width and density are not both absent, then let error be yes.
					if (w || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes.
					// Otherwise, let width be the result.
					if (intVal === 0) {pError = true;} else {w = intVal;}

				// If the descriptor consists of a valid floating-point number followed by
				// a U+0078 LATIN SMALL LETTER X character
				} else if (regexFloatingPoint.test(value) && (lastChar === "x")) {

					// If width, density and future-compat-h are not all absent, then let error
					// be yes.
					if (w || d || h) {pError = true;}

					// Apply the rules for parsing floating-point number values to the descriptor.
					// If the result is less than zero, let error be yes. Otherwise, let density
					// be the result.
					if (floatVal < 0) {pError = true;} else {d = floatVal;}

				// If the descriptor consists of a valid non-negative integer followed by
				// a U+0068 LATIN SMALL LETTER H character
				} else if (regexNonNegativeInteger.test(value) && (lastChar === "h")) {

					// If height and density are not both absent, then let error be yes.
					if (h || d) {pError = true;}

					// Apply the rules for parsing non-negative integers to the descriptor.
					// If the result is zero, let error be yes. Otherwise, let future-compat-h
					// be the result.
					if (intVal === 0) {pError = true;} else {h = intVal;}

				// Anything else, Let error be yes.
				} else {pError = true;}
			} // (close step 13 for loop)

			// 15. If error is still no, then append a new image source to candidates whose
			// URL is url, associated with a width width if not absent and a pixel
			// density density if not absent. Otherwise, there is a parse error.
			if (!pError) {
				candidate.url = url;

				if (w) { candidate.w = w;}
				if (d) { candidate.d = d;}
				if (h) { candidate.h = h;}
				if (!h && !d && !w) {candidate.d = 1;}
				if (candidate.d === 1) {set.has1x = true;}
				candidate.set = set;

				candidates.push(candidate);
			}
		} // (close parseDescriptors fn)

		/**
		* Tokenizes descriptor properties prior to parsing
		* Returns undefined.
		* (Again, this fn is defined before it is used, in order to pass JSHINT.
		* Unfortunately this breaks the logical sequencing of the spec comments. :/ )
		*/
		function tokenize() {

			// 8.1. Descriptor tokeniser: Skip whitespace
			collectCharacters(regexLeadingSpaces);

			// 8.2. Let current descriptor be the empty string.
			currentDescriptor = "";

			// 8.3. Let state be in descriptor.
			state = "in descriptor";

			while (true) {

				// 8.4. Let c be the character at position.
				c = input.charAt(pos);

				//  Do the following depending on the value of state.
				//  For the purpose of this step, "EOF" is a special character representing
				//  that position is past the end of input.

				// In descriptor
				if (state === "in descriptor") {
					// Do the following, depending on the value of c:

				  // Space character
				  // If current descriptor is not empty, append current descriptor to
				  // descriptors and let current descriptor be the empty string.
				  // Set state to after descriptor.
					if (isSpace(c)) {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
							currentDescriptor = "";
							state = "after descriptor";
						}

					// U+002C COMMA (,)
					// Advance position to the next character in input. If current descriptor
					// is not empty, append current descriptor to descriptors. Jump to the step
					// labeled descriptor parser.
					} else if (c === ",") {
						pos += 1;
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// U+0028 LEFT PARENTHESIS (()
					// Append c to current descriptor. Set state to in parens.
					} else if (c === "\u0028") {
						currentDescriptor = currentDescriptor + c;
						state = "in parens";

					// EOF
					// If current descriptor is not empty, append current descriptor to
					// descriptors. Jump to the step labeled descriptor parser.
					} else if (c === "") {
						if (currentDescriptor) {
							descriptors.push(currentDescriptor);
						}
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}
				// (end "in descriptor"

				// In parens
				} else if (state === "in parens") {

					// U+0029 RIGHT PARENTHESIS ())
					// Append c to current descriptor. Set state to in descriptor.
					if (c === ")") {
						currentDescriptor = currentDescriptor + c;
						state = "in descriptor";

					// EOF
					// Append current descriptor to descriptors. Jump to the step labeled
					// descriptor parser.
					} else if (c === "") {
						descriptors.push(currentDescriptor);
						parseDescriptors();
						return;

					// Anything else
					// Append c to current descriptor.
					} else {
						currentDescriptor = currentDescriptor + c;
					}

				// After descriptor
				} else if (state === "after descriptor") {

					// Do the following, depending on the value of c:
					// Space character: Stay in this state.
					if (isSpace(c)) {

					// EOF: Jump to the step labeled descriptor parser.
					} else if (c === "") {
						parseDescriptors();
						return;

					// Anything else
					// Set state to in descriptor. Set position to the previous character in input.
					} else {
						state = "in descriptor";
						pos -= 1;

					}
				}

				// Advance position to the next character in input.
				pos += 1;

			// Repeat this step.
			} // (close while true loop)
		}

		// 4. Splitting loop: Collect a sequence of characters that are space
		//    characters or U+002C COMMA characters. If any U+002C COMMA characters
		//    were collected, that is a parse error.
		while (true) {
			collectCharacters(regexLeadingCommasOrSpaces);

			// 5. If position is past the end of input, return candidates and abort these steps.
			if (pos >= inputLength) {
				return candidates; // (we're done, this is the sole return path)
			}

			// 6. Collect a sequence of characters that are not space characters,
			//    and let that be url.
			url = collectCharacters(regexLeadingNotSpaces);

			// 7. Let descriptors be a new empty list.
			descriptors = [];

			// 8. If url ends with a U+002C COMMA character (,), follow these substeps:
			//		(1). Remove all trailing U+002C COMMA characters from url. If this removed
			//         more than one character, that is a parse error.
			if (url.slice(-1) === ",") {
				url = url.replace(regexTrailingCommas, "");
				// (Jump ahead to step 9 to skip tokenization and just push the candidate).
				parseDescriptors();

			//	Otherwise, follow these substeps:
			} else {
				tokenize();
			} // (close else of step 8)

		// 16. Return to the step labeled splitting loop.
		} // (Close of big while loop.)
	}

	/*
	 * Sizes Parser
	 *
	 * By Alex Bell |  MIT License
	 *
	 * Non-strict but accurate and lightweight JS Parser for the string value <img sizes="here">
	 *
	 * Reference algorithm at:
	 * https://html.spec.whatwg.org/multipage/embedded-content.html#parse-a-sizes-attribute
	 *
	 * Most comments are copied in directly from the spec
	 * (except for comments in parens).
	 *
	 * Grammar is:
	 * <source-size-list> = <source-size># [ , <source-size-value> ]? | <source-size-value>
	 * <source-size> = <media-condition> <source-size-value>
	 * <source-size-value> = <length>
	 * http://www.w3.org/html/wg/drafts/html/master/embedded-content.html#attr-img-sizes
	 *
	 * E.g. "(max-width: 30em) 100vw, (max-width: 50em) 70vw, 100vw"
	 * or "(min-width: 30em), calc(30vw - 15px)" or just "30vw"
	 *
	 * Returns the first valid <css-length> with a media condition that evaluates to true,
	 * or "100vw" if all valid media conditions evaluate to false.
	 *
	 */

	function parseSizes(strValue) {

		// (Percentage CSS lengths are not allowed in this case, to avoid confusion:
		// https://html.spec.whatwg.org/multipage/embedded-content.html#valid-source-size-list
		// CSS allows a single optional plus or minus sign:
		// http://www.w3.org/TR/CSS2/syndata.html#numbers
		// CSS is ASCII case-insensitive:
		// http://www.w3.org/TR/CSS2/syndata.html#characters )
		// Spec allows exponential notation for <number> type:
		// http://dev.w3.org/csswg/css-values/#numbers
		var regexCssLengthWithUnits = /^(?:[+-]?[0-9]+|[0-9]*\.[0-9]+)(?:[eE][+-]?[0-9]+)?(?:ch|cm|em|ex|in|mm|pc|pt|px|rem|vh|vmin|vmax|vw)$/i;

		// (This is a quick and lenient test. Because of optional unlimited-depth internal
		// grouping parens and strict spacing rules, this could get very complicated.)
		var regexCssCalc = /^calc\((?:[0-9a-z \.\+\-\*\/\(\)]+)\)$/i;

		var i;
		var unparsedSizesList;
		var unparsedSizesListLength;
		var unparsedSize;
		var lastComponentValue;
		var size;

		// UTILITY FUNCTIONS

		//  (Toy CSS parser. The goals here are:
		//  1) expansive test coverage without the weight of a full CSS parser.
		//  2) Avoiding regex wherever convenient.
		//  Quick tests: http://jsfiddle.net/gtntL4gr/3/
		//  Returns an array of arrays.)
		function parseComponentValues(str) {
			var chrctr;
			var component = "";
			var componentArray = [];
			var listArray = [];
			var parenDepth = 0;
			var pos = 0;
			var inComment = false;

			function pushComponent() {
				if (component) {
					componentArray.push(component);
					component = "";
				}
			}

			function pushComponentArray() {
				if (componentArray[0]) {
					listArray.push(componentArray);
					componentArray = [];
				}
			}

			// (Loop forwards from the beginning of the string.)
			while (true) {
				chrctr = str.charAt(pos);

				if (chrctr === "") { // ( End of string reached.)
					pushComponent();
					pushComponentArray();
					return listArray;
				} else if (inComment) {
					if ((chrctr === "*") && (str[pos + 1] === "/")) { // (At end of a comment.)
						inComment = false;
						pos += 2;
						pushComponent();
						continue;
					} else {
						pos += 1; // (Skip all characters inside comments.)
						continue;
					}
				} else if (isSpace(chrctr)) {
					// (If previous character in loop was also a space, or if
					// at the beginning of the string, do not add space char to
					// component.)
					if ( (str.charAt(pos - 1) && isSpace( str.charAt(pos - 1) ) ) || !component ) {
						pos += 1;
						continue;
					} else if (parenDepth === 0) {
						pushComponent();
						pos +=1;
						continue;
					} else {
						// (Replace any space character with a plain space for legibility.)
						chrctr = " ";
					}
				} else if (chrctr === "(") {
					parenDepth += 1;
				} else if (chrctr === ")") {
					parenDepth -= 1;
				} else if (chrctr === ",") {
					pushComponent();
					pushComponentArray();
					pos += 1;
					continue;
				} else if ( (chrctr === "/") && (str.charAt(pos + 1) === "*") ) {
					inComment = true;
					pos += 2;
					continue;
				}

				component = component + chrctr;
				pos += 1;
			}
		}

		function isValidNonNegativeSourceSizeValue(s) {
			if (regexCssLengthWithUnits.test(s) && (parseFloat(s) >= 0)) {return true;}
			if (regexCssCalc.test(s)) {return true;}
			// ( http://www.w3.org/TR/CSS2/syndata.html#numbers says:
			// "-0 is equivalent to 0 and is not a negative number." which means that
			// unitless zero and unitless negative zero must be accepted as special cases.)
			if ((s === "0") || (s === "-0") || (s === "+0")) {return true;}
			return false;
		}

		// When asked to parse a sizes attribute from an element, parse a
		// comma-separated list of component values from the value of the element's
		// sizes attribute (or the empty string, if the attribute is absent), and let
		// unparsed sizes list be the result.
		// http://dev.w3.org/csswg/css-syntax/#parse-comma-separated-list-of-component-values

		unparsedSizesList = parseComponentValues(strValue);
		unparsedSizesListLength = unparsedSizesList.length;

		// For each unparsed size in unparsed sizes list:
		for (i = 0; i < unparsedSizesListLength; i++) {
			unparsedSize = unparsedSizesList[i];

			// 1. Remove all consecutive <whitespace-token>s from the end of unparsed size.
			// ( parseComponentValues() already omits spaces outside of parens. )

			// If unparsed size is now empty, that is a parse error; continue to the next
			// iteration of this algorithm.
			// ( parseComponentValues() won't push an empty array. )

			// 2. If the last component value in unparsed size is a valid non-negative
			// <source-size-value>, let size be its value and remove the component value
			// from unparsed size. Any CSS function other than the calc() function is
			// invalid. Otherwise, there is a parse error; continue to the next iteration
			// of this algorithm.
			// http://dev.w3.org/csswg/css-syntax/#parse-component-value
			lastComponentValue = unparsedSize[unparsedSize.length - 1];

			if (isValidNonNegativeSourceSizeValue(lastComponentValue)) {
				size = lastComponentValue;
				unparsedSize.pop();
			} else {
				continue;
			}

			// 3. Remove all consecutive <whitespace-token>s from the end of unparsed
			// size. If unparsed size is now empty, return size and exit this algorithm.
			// If this was not the last item in unparsed sizes list, that is a parse error.
			if (unparsedSize.length === 0) {
				return size;
			}

			// 4. Parse the remaining component values in unparsed size as a
			// <media-condition>. If it does not parse correctly, or it does parse
			// correctly but the <media-condition> evaluates to false, continue to the
			// next iteration of this algorithm.
			// (Parsing all possible compound media conditions in JS is heavy, complicated,
			// and the payoff is unclear. Is there ever an situation where the
			// media condition parses incorrectly but still somehow evaluates to true?
			// Can we just rely on the browser/polyfill to do it?)
			unparsedSize = unparsedSize.join(" ");
			if (!(pf.matchesMedia( unparsedSize ) ) ) {
				continue;
			}

			// 5. Return size and exit this algorithm.
			return size;
		}

		// If the above algorithm exhausts unparsed sizes list without returning a
		// size value, return 100vw.
		return "100vw";
	}

	// namespace
	pf.ns = ("pf" + new Date().getTime()).substr(0, 9);

	// srcset support test
	pf.supSrcset = "srcset" in image;
	pf.supSizes = "sizes" in image;
	pf.supPicture = !!window.HTMLPictureElement;

	// UC browser does claim to support srcset and picture, but not sizes,
	// this extended test reveals the browser does support nothing
	if (pf.supSrcset && pf.supPicture && !pf.supSizes) {
		(function(image2) {
			image.srcset = "data:,a";
			image2.src = "data:,a";
			pf.supSrcset = image.complete === image2.complete;
			pf.supPicture = pf.supSrcset && pf.supPicture;
		})(document.createElement("img"));
	}

	// Safari9 has basic support for sizes, but does't expose the `sizes` idl attribute
	if (pf.supSrcset && !pf.supSizes) {

		(function() {
			var width2 = "data:image/gif;base64,R0lGODlhAgABAPAAAP///wAAACH5BAAAAAAALAAAAAACAAEAAAICBAoAOw==";
			var width1 = "data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==";
			var img = document.createElement("img");
			var test = function() {
				var width = img.width;

				if (width === 2) {
					pf.supSizes = true;
				}

				alwaysCheckWDescriptor = pf.supSrcset && !pf.supSizes;

				isSupportTestReady = true;
				// force async
				setTimeout(picturefill);
			};

			img.onload = test;
			img.onerror = test;
			img.setAttribute("sizes", "9px");

			img.srcset = width1 + " 1w," + width2 + " 9w";
			img.src = width1;
		})();

	} else {
		isSupportTestReady = true;
	}

	// using pf.qsa instead of dom traversing does scale much better,
	// especially on sites mixing responsive and non-responsive images
	pf.selShort = "picture>img,img[srcset]";
	pf.sel = pf.selShort;
	pf.cfg = cfg;

	/**
	 * Shortcut property for `devicePixelRatio` ( for easy overriding in tests )
	 */
	pf.DPR = (DPR  || 1 );
	pf.u = units;

	// container of supported mime types that one might need to qualify before using
	pf.types =  types;

	pf.setSize = noop;

	/**
	 * Gets a string and returns the absolute URL
	 * @param src
	 * @returns {String} absolute URL
	 */

	pf.makeUrl = memoize(function(src) {
		anchor.href = src;
		return anchor.href;
	});

	/**
	 * Gets a DOM element or document and a selctor and returns the found matches
	 * Can be extended with jQuery/Sizzle for IE7 support
	 * @param context
	 * @param sel
	 * @returns {NodeList|Array}
	 */
	pf.qsa = function(context, sel) {
		return ( "querySelector" in context ) ? context.querySelectorAll(sel) : [];
	};

	/**
	 * Shortcut method for matchMedia ( for easy overriding in tests )
	 * wether native or pf.mMQ is used will be decided lazy on first call
	 * @returns {boolean}
	 */
	pf.matchesMedia = function() {
		if ( window.matchMedia && (matchMedia( "(min-width: 0.1em)" ) || {}).matches ) {
			pf.matchesMedia = function( media ) {
				return !media || ( matchMedia( media ).matches );
			};
		} else {
			pf.matchesMedia = pf.mMQ;
		}

		return pf.matchesMedia.apply( this, arguments );
	};

	/**
	 * A simplified matchMedia implementation for IE8 and IE9
	 * handles only min-width/max-width with px or em values
	 * @param media
	 * @returns {boolean}
	 */
	pf.mMQ = function( media ) {
		return media ? evalCSS(media) : true;
	};

	/**
	 * Returns the calculated length in css pixel from the given sourceSizeValue
	 * http://dev.w3.org/csswg/css-values-3/#length-value
	 * intended Spec mismatches:
	 * * Does not check for invalid use of CSS functions
	 * * Does handle a computed length of 0 the same as a negative and therefore invalid value
	 * @param sourceSizeValue
	 * @returns {Number}
	 */
	pf.calcLength = function( sourceSizeValue ) {

		var value = evalCSS(sourceSizeValue, true) || false;
		if (value < 0) {
			value = false;
		}

		return value;
	};

	/**
	 * Takes a type string and checks if its supported
	 */

	pf.supportsType = function( type ) {
		return ( type ) ? types[ type ] : true;
	};

	/**
	 * Parses a sourceSize into mediaCondition (media) and sourceSizeValue (length)
	 * @param sourceSizeStr
	 * @returns {*}
	 */
	pf.parseSize = memoize(function( sourceSizeStr ) {
		var match = ( sourceSizeStr || "" ).match(regSize);
		return {
			media: match && match[1],
			length: match && match[2]
		};
	});

	pf.parseSet = function( set ) {
		if ( !set.cands ) {
			set.cands = parseSrcset(set.srcset, set);
		}
		return set.cands;
	};

	/**
	 * returns 1em in css px for html/body default size
	 * function taken from respondjs
	 * @returns {*|number}
	 */
	pf.getEmValue = function() {
		var body;
		if ( !eminpx && (body = document.body) ) {
			var div = document.createElement( "div" ),
				originalHTMLCSS = docElem.style.cssText,
				originalBodyCSS = body.style.cssText;

			div.style.cssText = baseStyle;

			// 1em in a media query is the value of the default font size of the browser
			// reset docElem and body to ensure the correct value is returned
			docElem.style.cssText = fsCss;
			body.style.cssText = fsCss;

			body.appendChild( div );
			eminpx = div.offsetWidth;
			body.removeChild( div );

			//also update eminpx before returning
			eminpx = parseFloat( eminpx, 10 );

			// restore the original values
			docElem.style.cssText = originalHTMLCSS;
			body.style.cssText = originalBodyCSS;

		}
		return eminpx || 16;
	};

	/**
	 * Takes a string of sizes and returns the width in pixels as a number
	 */
	pf.calcListLength = function( sourceSizeListStr ) {
		// Split up source size list, ie ( max-width: 30em ) 100%, ( max-width: 50em ) 50%, 33%
		//
		//                           or (min-width:30em) calc(30% - 15px)
		if ( !(sourceSizeListStr in sizeLengthCache) || cfg.uT ) {
			var winningLength = pf.calcLength( parseSizes( sourceSizeListStr ) );

			sizeLengthCache[ sourceSizeListStr ] = !winningLength ? units.width : winningLength;
		}

		return sizeLengthCache[ sourceSizeListStr ];
	};

	/**
	 * Takes a candidate object with a srcset property in the form of url/
	 * ex. "images/pic-medium.png 1x, images/pic-medium-2x.png 2x" or
	 *     "images/pic-medium.png 400w, images/pic-medium-2x.png 800w" or
	 *     "images/pic-small.png"
	 * Get an array of image candidates in the form of
	 *      {url: "/foo/bar.png", resolution: 1}
	 * where resolution is http://dev.w3.org/csswg/css-values-3/#resolution-value
	 * If sizes is specified, res is calculated
	 */
	pf.setRes = function( set ) {
		var candidates;
		if ( set ) {

			candidates = pf.parseSet( set );

			for ( var i = 0, len = candidates.length; i < len; i++ ) {
				setResolution( candidates[ i ], set.sizes );
			}
		}
		return candidates;
	};

	pf.setRes.res = setResolution;

	pf.applySetCandidate = function( candidates, img ) {
		if ( !candidates.length ) {return;}
		var candidate,
			i,
			j,
			length,
			bestCandidate,
			curSrc,
			curCan,
			candidateSrc,
			abortCurSrc;

		var imageData = img[ pf.ns ];
		var dpr = pf.DPR;

		curSrc = imageData.curSrc || img[curSrcProp];

		curCan = imageData.curCan || setSrcToCur(img, curSrc, candidates[0].set);

		// if we have a current source, we might either become lazy or give this source some advantage
		if ( curCan && curCan.set === candidates[ 0 ].set ) {

			// if browser can abort image request and the image has a higher pixel density than needed
			// and this image isn't downloaded yet, we skip next part and try to save bandwidth
			abortCurSrc = (supportAbort && !img.complete && curCan.res - 0.1 > dpr);

			if ( !abortCurSrc ) {
				curCan.cached = true;

				// if current candidate is "best", "better" or "okay",
				// set it to bestCandidate
				if ( curCan.res >= dpr ) {
					bestCandidate = curCan;
				}
			}
		}

		if ( !bestCandidate ) {

			candidates.sort( ascendingSort );

			length = candidates.length;
			bestCandidate = candidates[ length - 1 ];

			for ( i = 0; i < length; i++ ) {
				candidate = candidates[ i ];
				if ( candidate.res >= dpr ) {
					j = i - 1;

					// we have found the perfect candidate,
					// but let's improve this a little bit with some assumptions ;-)
					if (candidates[ j ] &&
						(abortCurSrc || curSrc !== pf.makeUrl( candidate.url )) &&
						chooseLowRes(candidates[ j ].res, candidate.res, dpr, candidates[ j ].cached)) {

						bestCandidate = candidates[ j ];

					} else {
						bestCandidate = candidate;
					}
					break;
				}
			}
		}

		if ( bestCandidate ) {

			candidateSrc = pf.makeUrl( bestCandidate.url );

			imageData.curSrc = candidateSrc;
			imageData.curCan = bestCandidate;

			if ( candidateSrc !== curSrc ) {
				pf.setSrc( img, bestCandidate );
			}
			pf.setSize( img );
		}
	};

	pf.setSrc = function( img, bestCandidate ) {
		var origWidth;
		img.src = bestCandidate.url;

		// although this is a specific Safari issue, we don't want to take too much different code paths
		if ( bestCandidate.set.type === "image/svg+xml" ) {
			origWidth = img.style.width;
			img.style.width = (img.offsetWidth + 1) + "px";

			// next line only should trigger a repaint
			// if... is only done to trick dead code removal
			if ( img.offsetWidth + 1 ) {
				img.style.width = origWidth;
			}
		}
	};

	pf.getSet = function( img ) {
		var i, set, supportsType;
		var match = false;
		var sets = img [ pf.ns ].sets;

		for ( i = 0; i < sets.length && !match; i++ ) {
			set = sets[i];

			if ( !set.srcset || !pf.matchesMedia( set.media ) || !(supportsType = pf.supportsType( set.type )) ) {
				continue;
			}

			if ( supportsType === "pending" ) {
				set = supportsType;
			}

			match = set;
			break;
		}

		return match;
	};

	pf.parseSets = function( element, parent, options ) {
		var srcsetAttribute, imageSet, isWDescripor, srcsetParsed;

		var hasPicture = parent && parent.nodeName.toUpperCase() === "PICTURE";
		var imageData = element[ pf.ns ];

		if ( imageData.src === undefined || options.src ) {
			imageData.src = getImgAttr.call( element, "src" );
			if ( imageData.src ) {
				setImgAttr.call( element, srcAttr, imageData.src );
			} else {
				removeImgAttr.call( element, srcAttr );
			}
		}

		if ( imageData.srcset === undefined || options.srcset || !pf.supSrcset || element.srcset ) {
			srcsetAttribute = getImgAttr.call( element, "srcset" );
			imageData.srcset = srcsetAttribute;
			srcsetParsed = true;
		}

		imageData.sets = [];

		if ( hasPicture ) {
			imageData.pic = true;
			getAllSourceElements( parent, imageData.sets );
		}

		if ( imageData.srcset ) {
			imageSet = {
				srcset: imageData.srcset,
				sizes: getImgAttr.call( element, "sizes" )
			};

			imageData.sets.push( imageSet );

			isWDescripor = (alwaysCheckWDescriptor || imageData.src) && regWDesc.test(imageData.srcset || "");

			// add normal src as candidate, if source has no w descriptor
			if ( !isWDescripor && imageData.src && !getCandidateForSrc(imageData.src, imageSet) && !imageSet.has1x ) {
				imageSet.srcset += ", " + imageData.src;
				imageSet.cands.push({
					url: imageData.src,
					d: 1,
					set: imageSet
				});
			}

		} else if ( imageData.src ) {
			imageData.sets.push( {
				srcset: imageData.src,
				sizes: null
			} );
		}

		imageData.curCan = null;
		imageData.curSrc = undefined;

		// if img has picture or the srcset was removed or has a srcset and does not support srcset at all
		// or has a w descriptor (and does not support sizes) set support to false to evaluate
		imageData.supported = !( hasPicture || ( imageSet && !pf.supSrcset ) || (isWDescripor && !pf.supSizes) );

		if ( srcsetParsed && pf.supSrcset && !imageData.supported ) {
			if ( srcsetAttribute ) {
				setImgAttr.call( element, srcsetAttr, srcsetAttribute );
				element.srcset = "";
			} else {
				removeImgAttr.call( element, srcsetAttr );
			}
		}

		if (imageData.supported && !imageData.srcset && ((!imageData.src && element.src) ||  element.src !== pf.makeUrl(imageData.src))) {
			if (imageData.src === null) {
				element.removeAttribute("src");
			} else {
				element.src = imageData.src;
			}
		}

		imageData.parsed = true;
	};

	pf.fillImg = function(element, options) {
		var imageData;
		var extreme = options.reselect || options.reevaluate;

		// expando for caching data on the img
		if ( !element[ pf.ns ] ) {
			element[ pf.ns ] = {};
		}

		imageData = element[ pf.ns ];

		// if the element has already been evaluated, skip it
		// unless `options.reevaluate` is set to true ( this, for example,
		// is set to true when running `picturefill` on `resize` ).
		if ( !extreme && imageData.evaled === evalId ) {
			return;
		}

		if ( !imageData.parsed || options.reevaluate ) {
			pf.parseSets( element, element.parentNode, options );
		}

		if ( !imageData.supported ) {
			applyBestCandidate( element );
		} else {
			imageData.evaled = evalId;
		}
	};

	pf.setupRun = function() {
		if ( !alreadyRun || isVwDirty || (DPR !== window.devicePixelRatio) ) {
			updateMetrics();
		}
	};

	// If picture is supported, well, that's awesome.
	if ( pf.supPicture ) {
		picturefill = noop;
		pf.fillImg = noop;
	} else {

		 // Set up picture polyfill by polling the document
		(function() {
			var isDomReady;
			var regReady = window.attachEvent ? /d$|^c/ : /d$|^c|^i/;

			var run = function() {
				var readyState = document.readyState || "";

				timerId = setTimeout(run, readyState === "loading" ? 200 :  999);
				if ( document.body ) {
					pf.fillImgs();
					isDomReady = isDomReady || regReady.test(readyState);
					if ( isDomReady ) {
						clearTimeout( timerId );
					}

				}
			};

			var timerId = setTimeout(run, document.body ? 9 : 99);

			// Also attach picturefill on resize and readystatechange
			// http://modernjavascript.blogspot.com/2013/08/building-better-debounce.html
			var debounce = function(func, wait) {
				var timeout, timestamp;
				var later = function() {
					var last = (new Date()) - timestamp;

					if (last < wait) {
						timeout = setTimeout(later, wait - last);
					} else {
						timeout = null;
						func();
					}
				};

				return function() {
					timestamp = new Date();

					if (!timeout) {
						timeout = setTimeout(later, wait);
					}
				};
			};
			var lastClientWidth = docElem.clientHeight;
			var onResize = function() {
				isVwDirty = Math.max(window.innerWidth || 0, docElem.clientWidth) !== units.width || docElem.clientHeight !== lastClientWidth;
				lastClientWidth = docElem.clientHeight;
				if ( isVwDirty ) {
					pf.fillImgs();
				}
			};

			on( window, "resize", debounce(onResize, 99 ) );
			on( document, "readystatechange", run );
		})();
	}

	pf.picturefill = picturefill;
	//use this internally for easy monkey patching/performance testing
	pf.fillImgs = picturefill;
	pf.teardownRun = noop;

	/* expose methods for testing */
	picturefill._ = pf;

	window.picturefillCFG = {
		pf: pf,
		push: function(args) {
			var name = args.shift();
			if (typeof pf[name] === "function") {
				pf[name].apply(pf, args);
			} else {
				cfg[name] = args[0];
				if (alreadyRun) {
					pf.fillImgs( { reselect: true } );
				}
			}
		}
	};

	while (setOptions && setOptions.length) {
		window.picturefillCFG.push(setOptions.shift());
	}

	/* expose picturefill */
	window.picturefill = picturefill;

	/* expose picturefill */
	if ( typeof module === "object" && typeof module.exports === "object" ) {
		// CommonJS, just export
		module.exports = picturefill;
	} else if ( true ) {
		// AMD support
		!(__WEBPACK_AMD_DEFINE_RESULT__ = (function() { return picturefill; }).call(exports, __webpack_require__, exports, module),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}

	// IE8 evals this sync, so it must be the last thing we do
	if ( !pf.supPicture ) {
		types[ "image/webp" ] = detectTypeSupport("image/webp", "data:image/webp;base64,UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAABBxAR/Q9ERP8DAABWUDggGAAAADABAJ0BKgEAAQADADQlpAADcAD++/1QAA==" );
	}

} )( window, document );


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

/***/ "./node_modules/setimmediate/setImmediate.js":
/*!***************************************************!*\
  !*** ./node_modules/setimmediate/setImmediate.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global, process) {(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var registerImmediate;

    function setImmediate(callback) {
      // Callback can either be a function or a string
      if (typeof callback !== "function") {
        callback = new Function("" + callback);
      }
      // Copy function arguments
      var args = new Array(arguments.length - 1);
      for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i + 1];
      }
      // Store and register the task
      var task = { callback: callback, args: args };
      tasksByHandle[nextHandle] = task;
      registerImmediate(nextHandle);
      return nextHandle++;
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function run(task) {
        var callback = task.callback;
        var args = task.args;
        switch (args.length) {
        case 0:
            callback();
            break;
        case 1:
            callback(args[0]);
            break;
        case 2:
            callback(args[0], args[1]);
            break;
        case 3:
            callback(args[0], args[1], args[2]);
            break;
        default:
            callback.apply(undefined, args);
            break;
        }
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(runIfPresent, 0, handle);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    run(task);
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function installNextTickImplementation() {
        registerImmediate = function(handle) {
            process.nextTick(function () { runIfPresent(handle); });
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        registerImmediate = function(handle) {
            global.postMessage(messagePrefix + handle, "*");
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        registerImmediate = function(handle) {
            channel.port2.postMessage(handle);
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        registerImmediate = function(handle) {
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
        };
    }

    function installSetTimeoutImplementation() {
        registerImmediate = function(handle) {
            setTimeout(runIfPresent, 0, handle);
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(typeof self === "undefined" ? typeof global === "undefined" ? this : global : self));

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/style-loader/lib/addStyles.js":
/*!****************************************************!*\
  !*** ./node_modules/style-loader/lib/addStyles.js ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

var stylesInDom = {};

var	memoize = function (fn) {
	var memo;

	return function () {
		if (typeof memo === "undefined") memo = fn.apply(this, arguments);
		return memo;
	};
};

var isOldIE = memoize(function () {
	// Test for IE <= 9 as proposed by Browserhacks
	// @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
	// Tests for existence of standard globals is to allow style-loader
	// to operate correctly into non-standard environments
	// @see https://github.com/webpack-contrib/style-loader/issues/177
	return window && document && document.all && !window.atob;
});

var getTarget = function (target) {
  return document.querySelector(target);
};

var getElement = (function (fn) {
	var memo = {};

	return function(target) {
                // If passing function in options, then use it for resolve "head" element.
                // Useful for Shadow Root style i.e
                // {
                //   insertInto: function () { return document.querySelector("#foo").shadowRoot }
                // }
                if (typeof target === 'function') {
                        return target();
                }
                if (typeof memo[target] === "undefined") {
			var styleTarget = getTarget.call(this, target);
			// Special case to return head of iframe instead of iframe itself
			if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
				try {
					// This will throw an exception if access to iframe is blocked
					// due to cross-origin restrictions
					styleTarget = styleTarget.contentDocument.head;
				} catch(e) {
					styleTarget = null;
				}
			}
			memo[target] = styleTarget;
		}
		return memo[target]
	};
})();

var singleton = null;
var	singletonCounter = 0;
var	stylesInsertedAtTop = [];

var	fixUrls = __webpack_require__(/*! ./urls */ "./node_modules/style-loader/lib/urls.js");

module.exports = function(list, options) {
	if (typeof DEBUG !== "undefined" && DEBUG) {
		if (typeof document !== "object") throw new Error("The style-loader cannot be used in a non-browser environment");
	}

	options = options || {};

	options.attrs = typeof options.attrs === "object" ? options.attrs : {};

	// Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
	// tags it will allow on a page
	if (!options.singleton && typeof options.singleton !== "boolean") options.singleton = isOldIE();

	// By default, add <style> tags to the <head> element
        if (!options.insertInto) options.insertInto = "head";

	// By default, add <style> tags to the bottom of the target
	if (!options.insertAt) options.insertAt = "bottom";

	var styles = listToStyles(list, options);

	addStylesToDom(styles, options);

	return function update (newList) {
		var mayRemove = [];

		for (var i = 0; i < styles.length; i++) {
			var item = styles[i];
			var domStyle = stylesInDom[item.id];

			domStyle.refs--;
			mayRemove.push(domStyle);
		}

		if(newList) {
			var newStyles = listToStyles(newList, options);
			addStylesToDom(newStyles, options);
		}

		for (var i = 0; i < mayRemove.length; i++) {
			var domStyle = mayRemove[i];

			if(domStyle.refs === 0) {
				for (var j = 0; j < domStyle.parts.length; j++) domStyle.parts[j]();

				delete stylesInDom[domStyle.id];
			}
		}
	};
};

function addStylesToDom (styles, options) {
	for (var i = 0; i < styles.length; i++) {
		var item = styles[i];
		var domStyle = stylesInDom[item.id];

		if(domStyle) {
			domStyle.refs++;

			for(var j = 0; j < domStyle.parts.length; j++) {
				domStyle.parts[j](item.parts[j]);
			}

			for(; j < item.parts.length; j++) {
				domStyle.parts.push(addStyle(item.parts[j], options));
			}
		} else {
			var parts = [];

			for(var j = 0; j < item.parts.length; j++) {
				parts.push(addStyle(item.parts[j], options));
			}

			stylesInDom[item.id] = {id: item.id, refs: 1, parts: parts};
		}
	}
}

function listToStyles (list, options) {
	var styles = [];
	var newStyles = {};

	for (var i = 0; i < list.length; i++) {
		var item = list[i];
		var id = options.base ? item[0] + options.base : item[0];
		var css = item[1];
		var media = item[2];
		var sourceMap = item[3];
		var part = {css: css, media: media, sourceMap: sourceMap};

		if(!newStyles[id]) styles.push(newStyles[id] = {id: id, parts: [part]});
		else newStyles[id].parts.push(part);
	}

	return styles;
}

function insertStyleElement (options, style) {
	var target = getElement(options.insertInto)

	if (!target) {
		throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");
	}

	var lastStyleElementInsertedAtTop = stylesInsertedAtTop[stylesInsertedAtTop.length - 1];

	if (options.insertAt === "top") {
		if (!lastStyleElementInsertedAtTop) {
			target.insertBefore(style, target.firstChild);
		} else if (lastStyleElementInsertedAtTop.nextSibling) {
			target.insertBefore(style, lastStyleElementInsertedAtTop.nextSibling);
		} else {
			target.appendChild(style);
		}
		stylesInsertedAtTop.push(style);
	} else if (options.insertAt === "bottom") {
		target.appendChild(style);
	} else if (typeof options.insertAt === "object" && options.insertAt.before) {
		var nextSibling = getElement(options.insertInto + " " + options.insertAt.before);
		target.insertBefore(style, nextSibling);
	} else {
		throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");
	}
}

function removeStyleElement (style) {
	if (style.parentNode === null) return false;
	style.parentNode.removeChild(style);

	var idx = stylesInsertedAtTop.indexOf(style);
	if(idx >= 0) {
		stylesInsertedAtTop.splice(idx, 1);
	}
}

function createStyleElement (options) {
	var style = document.createElement("style");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}

	addAttrs(style, options.attrs);
	insertStyleElement(options, style);

	return style;
}

function createLinkElement (options) {
	var link = document.createElement("link");

	if(options.attrs.type === undefined) {
		options.attrs.type = "text/css";
	}
	options.attrs.rel = "stylesheet";

	addAttrs(link, options.attrs);
	insertStyleElement(options, link);

	return link;
}

function addAttrs (el, attrs) {
	Object.keys(attrs).forEach(function (key) {
		el.setAttribute(key, attrs[key]);
	});
}

function addStyle (obj, options) {
	var style, update, remove, result;

	// If a transform function was defined, run it on the css
	if (options.transform && obj.css) {
	    result = options.transform(obj.css);

	    if (result) {
	    	// If transform returns a value, use that instead of the original css.
	    	// This allows running runtime transformations on the css.
	    	obj.css = result;
	    } else {
	    	// If the transform function returns a falsy value, don't add this css.
	    	// This allows conditional loading of css
	    	return function() {
	    		// noop
	    	};
	    }
	}

	if (options.singleton) {
		var styleIndex = singletonCounter++;

		style = singleton || (singleton = createStyleElement(options));

		update = applyToSingletonTag.bind(null, style, styleIndex, false);
		remove = applyToSingletonTag.bind(null, style, styleIndex, true);

	} else if (
		obj.sourceMap &&
		typeof URL === "function" &&
		typeof URL.createObjectURL === "function" &&
		typeof URL.revokeObjectURL === "function" &&
		typeof Blob === "function" &&
		typeof btoa === "function"
	) {
		style = createLinkElement(options);
		update = updateLink.bind(null, style, options);
		remove = function () {
			removeStyleElement(style);

			if(style.href) URL.revokeObjectURL(style.href);
		};
	} else {
		style = createStyleElement(options);
		update = applyToTag.bind(null, style);
		remove = function () {
			removeStyleElement(style);
		};
	}

	update(obj);

	return function updateStyle (newObj) {
		if (newObj) {
			if (
				newObj.css === obj.css &&
				newObj.media === obj.media &&
				newObj.sourceMap === obj.sourceMap
			) {
				return;
			}

			update(obj = newObj);
		} else {
			remove();
		}
	};
}

var replaceText = (function () {
	var textStore = [];

	return function (index, replacement) {
		textStore[index] = replacement;

		return textStore.filter(Boolean).join('\n');
	};
})();

function applyToSingletonTag (style, index, remove, obj) {
	var css = remove ? "" : obj.css;

	if (style.styleSheet) {
		style.styleSheet.cssText = replaceText(index, css);
	} else {
		var cssNode = document.createTextNode(css);
		var childNodes = style.childNodes;

		if (childNodes[index]) style.removeChild(childNodes[index]);

		if (childNodes.length) {
			style.insertBefore(cssNode, childNodes[index]);
		} else {
			style.appendChild(cssNode);
		}
	}
}

function applyToTag (style, obj) {
	var css = obj.css;
	var media = obj.media;

	if(media) {
		style.setAttribute("media", media)
	}

	if(style.styleSheet) {
		style.styleSheet.cssText = css;
	} else {
		while(style.firstChild) {
			style.removeChild(style.firstChild);
		}

		style.appendChild(document.createTextNode(css));
	}
}

function updateLink (link, options, obj) {
	var css = obj.css;
	var sourceMap = obj.sourceMap;

	/*
		If convertToAbsoluteUrls isn't defined, but sourcemaps are enabled
		and there is no publicPath defined then lets turn convertToAbsoluteUrls
		on by default.  Otherwise default to the convertToAbsoluteUrls option
		directly
	*/
	var autoFixUrls = options.convertToAbsoluteUrls === undefined && sourceMap;

	if (options.convertToAbsoluteUrls || autoFixUrls) {
		css = fixUrls(css);
	}

	if (sourceMap) {
		// http://stackoverflow.com/a/26603875
		css += "\n/*# sourceMappingURL=data:application/json;base64," + btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))) + " */";
	}

	var blob = new Blob([css], { type: "text/css" });

	var oldSrc = link.href;

	link.href = URL.createObjectURL(blob);

	if(oldSrc) URL.revokeObjectURL(oldSrc);
}


/***/ }),

/***/ "./node_modules/style-loader/lib/urls.js":
/*!***********************************************!*\
  !*** ./node_modules/style-loader/lib/urls.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {


/**
 * When source maps are enabled, `style-loader` uses a link element with a data-uri to
 * embed the css on the page. This breaks all relative urls because now they are relative to a
 * bundle instead of the current page.
 *
 * One solution is to only use full urls, but that may be impossible.
 *
 * Instead, this function "fixes" the relative urls to be absolute according to the current page location.
 *
 * A rudimentary test suite is located at `test/fixUrls.js` and can be run via the `npm test` command.
 *
 */

module.exports = function (css) {
  // get current location
  var location = typeof window !== "undefined" && window.location;

  if (!location) {
    throw new Error("fixUrls requires window.location");
  }

	// blank or null?
	if (!css || typeof css !== "string") {
	  return css;
  }

  var baseUrl = location.protocol + "//" + location.host;
  var currentDir = baseUrl + location.pathname.replace(/\/[^\/]*$/, "/");

	// convert each url(...)
	/*
	This regular expression is just a way to recursively match brackets within
	a string.

	 /url\s*\(  = Match on the word "url" with any whitespace after it and then a parens
	   (  = Start a capturing group
	     (?:  = Start a non-capturing group
	         [^)(]  = Match anything that isn't a parentheses
	         |  = OR
	         \(  = Match a start parentheses
	             (?:  = Start another non-capturing groups
	                 [^)(]+  = Match anything that isn't a parentheses
	                 |  = OR
	                 \(  = Match a start parentheses
	                     [^)(]*  = Match anything that isn't a parentheses
	                 \)  = Match a end parentheses
	             )  = End Group
              *\) = Match anything and then a close parens
          )  = Close non-capturing group
          *  = Match anything
       )  = Close capturing group
	 \)  = Match a close parens

	 /gi  = Get all matches, not the first.  Be case insensitive.
	 */
	var fixedCss = css.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function(fullMatch, origUrl) {
		// strip quotes (if they exist)
		var unquotedOrigUrl = origUrl
			.trim()
			.replace(/^"(.*)"$/, function(o, $1){ return $1; })
			.replace(/^'(.*)'$/, function(o, $1){ return $1; });

		// already a full url? no change
		if (/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(unquotedOrigUrl)) {
		  return fullMatch;
		}

		// convert the url to a full url
		var newUrl;

		if (unquotedOrigUrl.indexOf("//") === 0) {
		  	//TODO: should we add protocol?
			newUrl = unquotedOrigUrl;
		} else if (unquotedOrigUrl.indexOf("/") === 0) {
			// path should be relative to the base url
			newUrl = baseUrl + unquotedOrigUrl; // already starts with '/'
		} else {
			// path should be relative to current directory
			newUrl = currentDir + unquotedOrigUrl.replace(/^\.\//, ""); // Strip leading './'
		}

		// send back the fixed url(...)
		return "url(" + JSON.stringify(newUrl) + ")";
	});

	// send back the fixed css
	return fixedCss;
};


/***/ }),

/***/ "./node_modules/timers-browserify/main.js":
/*!************************************************!*\
  !*** ./node_modules/timers-browserify/main.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var scope = (typeof global !== "undefined" && global) ||
            (typeof self !== "undefined" && self) ||
            window;
var apply = Function.prototype.apply;

// DOM APIs, for completeness

exports.setTimeout = function() {
  return new Timeout(apply.call(setTimeout, scope, arguments), clearTimeout);
};
exports.setInterval = function() {
  return new Timeout(apply.call(setInterval, scope, arguments), clearInterval);
};
exports.clearTimeout =
exports.clearInterval = function(timeout) {
  if (timeout) {
    timeout.close();
  }
};

function Timeout(id, clearFn) {
  this._id = id;
  this._clearFn = clearFn;
}
Timeout.prototype.unref = Timeout.prototype.ref = function() {};
Timeout.prototype.close = function() {
  this._clearFn.call(scope, this._id);
};

// Does not start the time, just sets up the members needed.
exports.enroll = function(item, msecs) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = msecs;
};

exports.unenroll = function(item) {
  clearTimeout(item._idleTimeoutId);
  item._idleTimeout = -1;
};

exports._unrefActive = exports.active = function(item) {
  clearTimeout(item._idleTimeoutId);

  var msecs = item._idleTimeout;
  if (msecs >= 0) {
    item._idleTimeoutId = setTimeout(function onTimeout() {
      if (item._onTimeout)
        item._onTimeout();
    }, msecs);
  }
};

// setimmediate attaches itself to the global object
__webpack_require__(/*! setimmediate */ "./node_modules/setimmediate/setImmediate.js");
// On some exotic environments, it's not clear which object `setimmediate` was
// able to install onto.  Search each possibility in the same order as the
// `setimmediate` library.
exports.setImmediate = (typeof self !== "undefined" && self.setImmediate) ||
                       (typeof global !== "undefined" && global.setImmediate) ||
                       (this && this.setImmediate);
exports.clearImmediate = (typeof self !== "undefined" && self.clearImmediate) ||
                         (typeof global !== "undefined" && global.clearImmediate) ||
                         (this && this.clearImmediate);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/vue/dist/vue.runtime.esm.js":
/*!**************************************************!*\
  !*** ./node_modules/vue/dist/vue.runtime.esm.js ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(global, setImmediate) {/*!
 * Vue.js v2.5.16
 * (c) 2014-2018 Evan You
 * Released under the MIT License.
 */
/*  */

var emptyObject = Object.freeze({});

// these helpers produces better vm code in JS engines due to their
// explicitness and function inlining
function isUndef (v) {
  return v === undefined || v === null
}

function isDef (v) {
  return v !== undefined && v !== null
}

function isTrue (v) {
  return v === true
}

function isFalse (v) {
  return v === false
}

/**
 * Check if value is primitive
 */
function isPrimitive (value) {
  return (
    typeof value === 'string' ||
    typeof value === 'number' ||
    // $flow-disable-line
    typeof value === 'symbol' ||
    typeof value === 'boolean'
  )
}

/**
 * Quick object check - this is primarily used to tell
 * Objects from primitive values when we know the value
 * is a JSON-compliant type.
 */
function isObject (obj) {
  return obj !== null && typeof obj === 'object'
}

/**
 * Get the raw type string of a value e.g. [object Object]
 */
var _toString = Object.prototype.toString;

function toRawType (value) {
  return _toString.call(value).slice(8, -1)
}

/**
 * Strict object type check. Only returns true
 * for plain JavaScript objects.
 */
function isPlainObject (obj) {
  return _toString.call(obj) === '[object Object]'
}

function isRegExp (v) {
  return _toString.call(v) === '[object RegExp]'
}

/**
 * Check if val is a valid array index.
 */
function isValidArrayIndex (val) {
  var n = parseFloat(String(val));
  return n >= 0 && Math.floor(n) === n && isFinite(val)
}

/**
 * Convert a value to a string that is actually rendered.
 */
function toString (val) {
  return val == null
    ? ''
    : typeof val === 'object'
      ? JSON.stringify(val, null, 2)
      : String(val)
}

/**
 * Convert a input value to a number for persistence.
 * If the conversion fails, return original string.
 */
function toNumber (val) {
  var n = parseFloat(val);
  return isNaN(n) ? val : n
}

/**
 * Make a map and return a function for checking if a key
 * is in that map.
 */
function makeMap (
  str,
  expectsLowerCase
) {
  var map = Object.create(null);
  var list = str.split(',');
  for (var i = 0; i < list.length; i++) {
    map[list[i]] = true;
  }
  return expectsLowerCase
    ? function (val) { return map[val.toLowerCase()]; }
    : function (val) { return map[val]; }
}

/**
 * Check if a tag is a built-in tag.
 */
var isBuiltInTag = makeMap('slot,component', true);

/**
 * Check if a attribute is a reserved attribute.
 */
var isReservedAttribute = makeMap('key,ref,slot,slot-scope,is');

/**
 * Remove an item from an array
 */
function remove (arr, item) {
  if (arr.length) {
    var index = arr.indexOf(item);
    if (index > -1) {
      return arr.splice(index, 1)
    }
  }
}

/**
 * Check whether the object has the property.
 */
var hasOwnProperty = Object.prototype.hasOwnProperty;
function hasOwn (obj, key) {
  return hasOwnProperty.call(obj, key)
}

/**
 * Create a cached version of a pure function.
 */
function cached (fn) {
  var cache = Object.create(null);
  return (function cachedFn (str) {
    var hit = cache[str];
    return hit || (cache[str] = fn(str))
  })
}

/**
 * Camelize a hyphen-delimited string.
 */
var camelizeRE = /-(\w)/g;
var camelize = cached(function (str) {
  return str.replace(camelizeRE, function (_, c) { return c ? c.toUpperCase() : ''; })
});

/**
 * Capitalize a string.
 */
var capitalize = cached(function (str) {
  return str.charAt(0).toUpperCase() + str.slice(1)
});

/**
 * Hyphenate a camelCase string.
 */
var hyphenateRE = /\B([A-Z])/g;
var hyphenate = cached(function (str) {
  return str.replace(hyphenateRE, '-$1').toLowerCase()
});

/**
 * Simple bind polyfill for environments that do not support it... e.g.
 * PhantomJS 1.x. Technically we don't need this anymore since native bind is
 * now more performant in most browsers, but removing it would be breaking for
 * code that was able to run in PhantomJS 1.x, so this must be kept for
 * backwards compatibility.
 */

/* istanbul ignore next */
function polyfillBind (fn, ctx) {
  function boundFn (a) {
    var l = arguments.length;
    return l
      ? l > 1
        ? fn.apply(ctx, arguments)
        : fn.call(ctx, a)
      : fn.call(ctx)
  }

  boundFn._length = fn.length;
  return boundFn
}

function nativeBind (fn, ctx) {
  return fn.bind(ctx)
}

var bind = Function.prototype.bind
  ? nativeBind
  : polyfillBind;

/**
 * Convert an Array-like object to a real Array.
 */
function toArray (list, start) {
  start = start || 0;
  var i = list.length - start;
  var ret = new Array(i);
  while (i--) {
    ret[i] = list[i + start];
  }
  return ret
}

/**
 * Mix properties into target object.
 */
function extend (to, _from) {
  for (var key in _from) {
    to[key] = _from[key];
  }
  return to
}

/**
 * Merge an Array of Objects into a single Object.
 */
function toObject (arr) {
  var res = {};
  for (var i = 0; i < arr.length; i++) {
    if (arr[i]) {
      extend(res, arr[i]);
    }
  }
  return res
}

/**
 * Perform no operation.
 * Stubbing args to make Flow happy without leaving useless transpiled code
 * with ...rest (https://flow.org/blog/2017/05/07/Strict-Function-Call-Arity/)
 */
function noop (a, b, c) {}

/**
 * Always return false.
 */
var no = function (a, b, c) { return false; };

/**
 * Return same value
 */
var identity = function (_) { return _; };

/**
 * Generate a static keys string from compiler modules.
 */


/**
 * Check if two values are loosely equal - that is,
 * if they are plain objects, do they have the same shape?
 */
function looseEqual (a, b) {
  if (a === b) { return true }
  var isObjectA = isObject(a);
  var isObjectB = isObject(b);
  if (isObjectA && isObjectB) {
    try {
      var isArrayA = Array.isArray(a);
      var isArrayB = Array.isArray(b);
      if (isArrayA && isArrayB) {
        return a.length === b.length && a.every(function (e, i) {
          return looseEqual(e, b[i])
        })
      } else if (!isArrayA && !isArrayB) {
        var keysA = Object.keys(a);
        var keysB = Object.keys(b);
        return keysA.length === keysB.length && keysA.every(function (key) {
          return looseEqual(a[key], b[key])
        })
      } else {
        /* istanbul ignore next */
        return false
      }
    } catch (e) {
      /* istanbul ignore next */
      return false
    }
  } else if (!isObjectA && !isObjectB) {
    return String(a) === String(b)
  } else {
    return false
  }
}

function looseIndexOf (arr, val) {
  for (var i = 0; i < arr.length; i++) {
    if (looseEqual(arr[i], val)) { return i }
  }
  return -1
}

/**
 * Ensure a function is called only once.
 */
function once (fn) {
  var called = false;
  return function () {
    if (!called) {
      called = true;
      fn.apply(this, arguments);
    }
  }
}

var SSR_ATTR = 'data-server-rendered';

var ASSET_TYPES = [
  'component',
  'directive',
  'filter'
];

var LIFECYCLE_HOOKS = [
  'beforeCreate',
  'created',
  'beforeMount',
  'mounted',
  'beforeUpdate',
  'updated',
  'beforeDestroy',
  'destroyed',
  'activated',
  'deactivated',
  'errorCaptured'
];

/*  */

var config = ({
  /**
   * Option merge strategies (used in core/util/options)
   */
  // $flow-disable-line
  optionMergeStrategies: Object.create(null),

  /**
   * Whether to suppress warnings.
   */
  silent: false,

  /**
   * Show production mode tip message on boot?
   */
  productionTip: "development" !== 'production',

  /**
   * Whether to enable devtools
   */
  devtools: "development" !== 'production',

  /**
   * Whether to record perf
   */
  performance: false,

  /**
   * Error handler for watcher errors
   */
  errorHandler: null,

  /**
   * Warn handler for watcher warns
   */
  warnHandler: null,

  /**
   * Ignore certain custom elements
   */
  ignoredElements: [],

  /**
   * Custom user key aliases for v-on
   */
  // $flow-disable-line
  keyCodes: Object.create(null),

  /**
   * Check if a tag is reserved so that it cannot be registered as a
   * component. This is platform-dependent and may be overwritten.
   */
  isReservedTag: no,

  /**
   * Check if an attribute is reserved so that it cannot be used as a component
   * prop. This is platform-dependent and may be overwritten.
   */
  isReservedAttr: no,

  /**
   * Check if a tag is an unknown element.
   * Platform-dependent.
   */
  isUnknownElement: no,

  /**
   * Get the namespace of an element
   */
  getTagNamespace: noop,

  /**
   * Parse the real tag name for the specific platform.
   */
  parsePlatformTagName: identity,

  /**
   * Check if an attribute must be bound using property, e.g. value
   * Platform-dependent.
   */
  mustUseProp: no,

  /**
   * Exposed for legacy reasons
   */
  _lifecycleHooks: LIFECYCLE_HOOKS
})

/*  */

/**
 * Check if a string starts with $ or _
 */
function isReserved (str) {
  var c = (str + '').charCodeAt(0);
  return c === 0x24 || c === 0x5F
}

/**
 * Define a property.
 */
function def (obj, key, val, enumerable) {
  Object.defineProperty(obj, key, {
    value: val,
    enumerable: !!enumerable,
    writable: true,
    configurable: true
  });
}

/**
 * Parse simple path.
 */
var bailRE = /[^\w.$]/;
function parsePath (path) {
  if (bailRE.test(path)) {
    return
  }
  var segments = path.split('.');
  return function (obj) {
    for (var i = 0; i < segments.length; i++) {
      if (!obj) { return }
      obj = obj[segments[i]];
    }
    return obj
  }
}

/*  */

// can we use __proto__?
var hasProto = '__proto__' in {};

// Browser environment sniffing
var inBrowser = typeof window !== 'undefined';
var inWeex = typeof WXEnvironment !== 'undefined' && !!WXEnvironment.platform;
var weexPlatform = inWeex && WXEnvironment.platform.toLowerCase();
var UA = inBrowser && window.navigator.userAgent.toLowerCase();
var isIE = UA && /msie|trident/.test(UA);
var isIE9 = UA && UA.indexOf('msie 9.0') > 0;
var isEdge = UA && UA.indexOf('edge/') > 0;
var isAndroid = (UA && UA.indexOf('android') > 0) || (weexPlatform === 'android');
var isIOS = (UA && /iphone|ipad|ipod|ios/.test(UA)) || (weexPlatform === 'ios');
var isChrome = UA && /chrome\/\d+/.test(UA) && !isEdge;

// Firefox has a "watch" function on Object.prototype...
var nativeWatch = ({}).watch;

var supportsPassive = false;
if (inBrowser) {
  try {
    var opts = {};
    Object.defineProperty(opts, 'passive', ({
      get: function get () {
        /* istanbul ignore next */
        supportsPassive = true;
      }
    })); // https://github.com/facebook/flow/issues/285
    window.addEventListener('test-passive', null, opts);
  } catch (e) {}
}

// this needs to be lazy-evaled because vue may be required before
// vue-server-renderer can set VUE_ENV
var _isServer;
var isServerRendering = function () {
  if (_isServer === undefined) {
    /* istanbul ignore if */
    if (!inBrowser && !inWeex && typeof global !== 'undefined') {
      // detect presence of vue-server-renderer and avoid
      // Webpack shimming the process
      _isServer = global['process'].env.VUE_ENV === 'server';
    } else {
      _isServer = false;
    }
  }
  return _isServer
};

// detect devtools
var devtools = inBrowser && window.__VUE_DEVTOOLS_GLOBAL_HOOK__;

/* istanbul ignore next */
function isNative (Ctor) {
  return typeof Ctor === 'function' && /native code/.test(Ctor.toString())
}

var hasSymbol =
  typeof Symbol !== 'undefined' && isNative(Symbol) &&
  typeof Reflect !== 'undefined' && isNative(Reflect.ownKeys);

var _Set;
/* istanbul ignore if */ // $flow-disable-line
if (typeof Set !== 'undefined' && isNative(Set)) {
  // use native Set when available.
  _Set = Set;
} else {
  // a non-standard Set polyfill that only works with primitive keys.
  _Set = (function () {
    function Set () {
      this.set = Object.create(null);
    }
    Set.prototype.has = function has (key) {
      return this.set[key] === true
    };
    Set.prototype.add = function add (key) {
      this.set[key] = true;
    };
    Set.prototype.clear = function clear () {
      this.set = Object.create(null);
    };

    return Set;
  }());
}

/*  */

var warn = noop;
var tip = noop;
var generateComponentTrace = (noop); // work around flow check
var formatComponentName = (noop);

if (true) {
  var hasConsole = typeof console !== 'undefined';
  var classifyRE = /(?:^|[-_])(\w)/g;
  var classify = function (str) { return str
    .replace(classifyRE, function (c) { return c.toUpperCase(); })
    .replace(/[-_]/g, ''); };

  warn = function (msg, vm) {
    var trace = vm ? generateComponentTrace(vm) : '';

    if (config.warnHandler) {
      config.warnHandler.call(null, msg, vm, trace);
    } else if (hasConsole && (!config.silent)) {
      console.error(("[Vue warn]: " + msg + trace));
    }
  };

  tip = function (msg, vm) {
    if (hasConsole && (!config.silent)) {
      console.warn("[Vue tip]: " + msg + (
        vm ? generateComponentTrace(vm) : ''
      ));
    }
  };

  formatComponentName = function (vm, includeFile) {
    if (vm.$root === vm) {
      return '<Root>'
    }
    var options = typeof vm === 'function' && vm.cid != null
      ? vm.options
      : vm._isVue
        ? vm.$options || vm.constructor.options
        : vm || {};
    var name = options.name || options._componentTag;
    var file = options.__file;
    if (!name && file) {
      var match = file.match(/([^/\\]+)\.vue$/);
      name = match && match[1];
    }

    return (
      (name ? ("<" + (classify(name)) + ">") : "<Anonymous>") +
      (file && includeFile !== false ? (" at " + file) : '')
    )
  };

  var repeat = function (str, n) {
    var res = '';
    while (n) {
      if (n % 2 === 1) { res += str; }
      if (n > 1) { str += str; }
      n >>= 1;
    }
    return res
  };

  generateComponentTrace = function (vm) {
    if (vm._isVue && vm.$parent) {
      var tree = [];
      var currentRecursiveSequence = 0;
      while (vm) {
        if (tree.length > 0) {
          var last = tree[tree.length - 1];
          if (last.constructor === vm.constructor) {
            currentRecursiveSequence++;
            vm = vm.$parent;
            continue
          } else if (currentRecursiveSequence > 0) {
            tree[tree.length - 1] = [last, currentRecursiveSequence];
            currentRecursiveSequence = 0;
          }
        }
        tree.push(vm);
        vm = vm.$parent;
      }
      return '\n\nfound in\n\n' + tree
        .map(function (vm, i) { return ("" + (i === 0 ? '---> ' : repeat(' ', 5 + i * 2)) + (Array.isArray(vm)
            ? ((formatComponentName(vm[0])) + "... (" + (vm[1]) + " recursive calls)")
            : formatComponentName(vm))); })
        .join('\n')
    } else {
      return ("\n\n(found in " + (formatComponentName(vm)) + ")")
    }
  };
}

/*  */


var uid = 0;

/**
 * A dep is an observable that can have multiple
 * directives subscribing to it.
 */
var Dep = function Dep () {
  this.id = uid++;
  this.subs = [];
};

Dep.prototype.addSub = function addSub (sub) {
  this.subs.push(sub);
};

Dep.prototype.removeSub = function removeSub (sub) {
  remove(this.subs, sub);
};

Dep.prototype.depend = function depend () {
  if (Dep.target) {
    Dep.target.addDep(this);
  }
};

Dep.prototype.notify = function notify () {
  // stabilize the subscriber list first
  var subs = this.subs.slice();
  for (var i = 0, l = subs.length; i < l; i++) {
    subs[i].update();
  }
};

// the current target watcher being evaluated.
// this is globally unique because there could be only one
// watcher being evaluated at any time.
Dep.target = null;
var targetStack = [];

function pushTarget (_target) {
  if (Dep.target) { targetStack.push(Dep.target); }
  Dep.target = _target;
}

function popTarget () {
  Dep.target = targetStack.pop();
}

/*  */

var VNode = function VNode (
  tag,
  data,
  children,
  text,
  elm,
  context,
  componentOptions,
  asyncFactory
) {
  this.tag = tag;
  this.data = data;
  this.children = children;
  this.text = text;
  this.elm = elm;
  this.ns = undefined;
  this.context = context;
  this.fnContext = undefined;
  this.fnOptions = undefined;
  this.fnScopeId = undefined;
  this.key = data && data.key;
  this.componentOptions = componentOptions;
  this.componentInstance = undefined;
  this.parent = undefined;
  this.raw = false;
  this.isStatic = false;
  this.isRootInsert = true;
  this.isComment = false;
  this.isCloned = false;
  this.isOnce = false;
  this.asyncFactory = asyncFactory;
  this.asyncMeta = undefined;
  this.isAsyncPlaceholder = false;
};

var prototypeAccessors = { child: { configurable: true } };

// DEPRECATED: alias for componentInstance for backwards compat.
/* istanbul ignore next */
prototypeAccessors.child.get = function () {
  return this.componentInstance
};

Object.defineProperties( VNode.prototype, prototypeAccessors );

var createEmptyVNode = function (text) {
  if ( text === void 0 ) text = '';

  var node = new VNode();
  node.text = text;
  node.isComment = true;
  return node
};

function createTextVNode (val) {
  return new VNode(undefined, undefined, undefined, String(val))
}

// optimized shallow clone
// used for static nodes and slot nodes because they may be reused across
// multiple renders, cloning them avoids errors when DOM manipulations rely
// on their elm reference.
function cloneVNode (vnode) {
  var cloned = new VNode(
    vnode.tag,
    vnode.data,
    vnode.children,
    vnode.text,
    vnode.elm,
    vnode.context,
    vnode.componentOptions,
    vnode.asyncFactory
  );
  cloned.ns = vnode.ns;
  cloned.isStatic = vnode.isStatic;
  cloned.key = vnode.key;
  cloned.isComment = vnode.isComment;
  cloned.fnContext = vnode.fnContext;
  cloned.fnOptions = vnode.fnOptions;
  cloned.fnScopeId = vnode.fnScopeId;
  cloned.isCloned = true;
  return cloned
}

/*
 * not type checking this file because flow doesn't play well with
 * dynamically accessing methods on Array prototype
 */

var arrayProto = Array.prototype;
var arrayMethods = Object.create(arrayProto);

var methodsToPatch = [
  'push',
  'pop',
  'shift',
  'unshift',
  'splice',
  'sort',
  'reverse'
];

/**
 * Intercept mutating methods and emit events
 */
methodsToPatch.forEach(function (method) {
  // cache original method
  var original = arrayProto[method];
  def(arrayMethods, method, function mutator () {
    var args = [], len = arguments.length;
    while ( len-- ) args[ len ] = arguments[ len ];

    var result = original.apply(this, args);
    var ob = this.__ob__;
    var inserted;
    switch (method) {
      case 'push':
      case 'unshift':
        inserted = args;
        break
      case 'splice':
        inserted = args.slice(2);
        break
    }
    if (inserted) { ob.observeArray(inserted); }
    // notify change
    ob.dep.notify();
    return result
  });
});

/*  */

var arrayKeys = Object.getOwnPropertyNames(arrayMethods);

/**
 * In some cases we may want to disable observation inside a component's
 * update computation.
 */
var shouldObserve = true;

function toggleObserving (value) {
  shouldObserve = value;
}

/**
 * Observer class that is attached to each observed
 * object. Once attached, the observer converts the target
 * object's property keys into getter/setters that
 * collect dependencies and dispatch updates.
 */
var Observer = function Observer (value) {
  this.value = value;
  this.dep = new Dep();
  this.vmCount = 0;
  def(value, '__ob__', this);
  if (Array.isArray(value)) {
    var augment = hasProto
      ? protoAugment
      : copyAugment;
    augment(value, arrayMethods, arrayKeys);
    this.observeArray(value);
  } else {
    this.walk(value);
  }
};

/**
 * Walk through each property and convert them into
 * getter/setters. This method should only be called when
 * value type is Object.
 */
Observer.prototype.walk = function walk (obj) {
  var keys = Object.keys(obj);
  for (var i = 0; i < keys.length; i++) {
    defineReactive(obj, keys[i]);
  }
};

/**
 * Observe a list of Array items.
 */
Observer.prototype.observeArray = function observeArray (items) {
  for (var i = 0, l = items.length; i < l; i++) {
    observe(items[i]);
  }
};

// helpers

/**
 * Augment an target Object or Array by intercepting
 * the prototype chain using __proto__
 */
function protoAugment (target, src, keys) {
  /* eslint-disable no-proto */
  target.__proto__ = src;
  /* eslint-enable no-proto */
}

/**
 * Augment an target Object or Array by defining
 * hidden properties.
 */
/* istanbul ignore next */
function copyAugment (target, src, keys) {
  for (var i = 0, l = keys.length; i < l; i++) {
    var key = keys[i];
    def(target, key, src[key]);
  }
}

/**
 * Attempt to create an observer instance for a value,
 * returns the new observer if successfully observed,
 * or the existing observer if the value already has one.
 */
function observe (value, asRootData) {
  if (!isObject(value) || value instanceof VNode) {
    return
  }
  var ob;
  if (hasOwn(value, '__ob__') && value.__ob__ instanceof Observer) {
    ob = value.__ob__;
  } else if (
    shouldObserve &&
    !isServerRendering() &&
    (Array.isArray(value) || isPlainObject(value)) &&
    Object.isExtensible(value) &&
    !value._isVue
  ) {
    ob = new Observer(value);
  }
  if (asRootData && ob) {
    ob.vmCount++;
  }
  return ob
}

/**
 * Define a reactive property on an Object.
 */
function defineReactive (
  obj,
  key,
  val,
  customSetter,
  shallow
) {
  var dep = new Dep();

  var property = Object.getOwnPropertyDescriptor(obj, key);
  if (property && property.configurable === false) {
    return
  }

  // cater for pre-defined getter/setters
  var getter = property && property.get;
  if (!getter && arguments.length === 2) {
    val = obj[key];
  }
  var setter = property && property.set;

  var childOb = !shallow && observe(val);
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function reactiveGetter () {
      var value = getter ? getter.call(obj) : val;
      if (Dep.target) {
        dep.depend();
        if (childOb) {
          childOb.dep.depend();
          if (Array.isArray(value)) {
            dependArray(value);
          }
        }
      }
      return value
    },
    set: function reactiveSetter (newVal) {
      var value = getter ? getter.call(obj) : val;
      /* eslint-disable no-self-compare */
      if (newVal === value || (newVal !== newVal && value !== value)) {
        return
      }
      /* eslint-enable no-self-compare */
      if ("development" !== 'production' && customSetter) {
        customSetter();
      }
      if (setter) {
        setter.call(obj, newVal);
      } else {
        val = newVal;
      }
      childOb = !shallow && observe(newVal);
      dep.notify();
    }
  });
}

/**
 * Set a property on an object. Adds the new property and
 * triggers change notification if the property doesn't
 * already exist.
 */
function set (target, key, val) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot set reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.length = Math.max(target.length, key);
    target.splice(key, 1, val);
    return val
  }
  if (key in target && !(key in Object.prototype)) {
    target[key] = val;
    return val
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid adding reactive properties to a Vue instance or its root $data ' +
      'at runtime - declare it upfront in the data option.'
    );
    return val
  }
  if (!ob) {
    target[key] = val;
    return val
  }
  defineReactive(ob.value, key, val);
  ob.dep.notify();
  return val
}

/**
 * Delete a property and trigger change if necessary.
 */
function del (target, key) {
  if ("development" !== 'production' &&
    (isUndef(target) || isPrimitive(target))
  ) {
    warn(("Cannot delete reactive property on undefined, null, or primitive value: " + ((target))));
  }
  if (Array.isArray(target) && isValidArrayIndex(key)) {
    target.splice(key, 1);
    return
  }
  var ob = (target).__ob__;
  if (target._isVue || (ob && ob.vmCount)) {
    "development" !== 'production' && warn(
      'Avoid deleting properties on a Vue instance or its root $data ' +
      '- just set it to null.'
    );
    return
  }
  if (!hasOwn(target, key)) {
    return
  }
  delete target[key];
  if (!ob) {
    return
  }
  ob.dep.notify();
}

/**
 * Collect dependencies on array elements when the array is touched, since
 * we cannot intercept array element access like property getters.
 */
function dependArray (value) {
  for (var e = (void 0), i = 0, l = value.length; i < l; i++) {
    e = value[i];
    e && e.__ob__ && e.__ob__.dep.depend();
    if (Array.isArray(e)) {
      dependArray(e);
    }
  }
}

/*  */

/**
 * Option overwriting strategies are functions that handle
 * how to merge a parent option value and a child option
 * value into the final value.
 */
var strats = config.optionMergeStrategies;

/**
 * Options with restrictions
 */
if (true) {
  strats.el = strats.propsData = function (parent, child, vm, key) {
    if (!vm) {
      warn(
        "option \"" + key + "\" can only be used during instance " +
        'creation with the `new` keyword.'
      );
    }
    return defaultStrat(parent, child)
  };
}

/**
 * Helper that recursively merges two data objects together.
 */
function mergeData (to, from) {
  if (!from) { return to }
  var key, toVal, fromVal;
  var keys = Object.keys(from);
  for (var i = 0; i < keys.length; i++) {
    key = keys[i];
    toVal = to[key];
    fromVal = from[key];
    if (!hasOwn(to, key)) {
      set(to, key, fromVal);
    } else if (isPlainObject(toVal) && isPlainObject(fromVal)) {
      mergeData(toVal, fromVal);
    }
  }
  return to
}

/**
 * Data
 */
function mergeDataOrFn (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    // in a Vue.extend merge, both should be functions
    if (!childVal) {
      return parentVal
    }
    if (!parentVal) {
      return childVal
    }
    // when parentVal & childVal are both present,
    // we need to return a function that returns the
    // merged result of both functions... no need to
    // check if parentVal is a function here because
    // it has to be a function to pass previous merges.
    return function mergedDataFn () {
      return mergeData(
        typeof childVal === 'function' ? childVal.call(this, this) : childVal,
        typeof parentVal === 'function' ? parentVal.call(this, this) : parentVal
      )
    }
  } else {
    return function mergedInstanceDataFn () {
      // instance merge
      var instanceData = typeof childVal === 'function'
        ? childVal.call(vm, vm)
        : childVal;
      var defaultData = typeof parentVal === 'function'
        ? parentVal.call(vm, vm)
        : parentVal;
      if (instanceData) {
        return mergeData(instanceData, defaultData)
      } else {
        return defaultData
      }
    }
  }
}

strats.data = function (
  parentVal,
  childVal,
  vm
) {
  if (!vm) {
    if (childVal && typeof childVal !== 'function') {
      "development" !== 'production' && warn(
        'The "data" option should be a function ' +
        'that returns a per-instance value in component ' +
        'definitions.',
        vm
      );

      return parentVal
    }
    return mergeDataOrFn(parentVal, childVal)
  }

  return mergeDataOrFn(parentVal, childVal, vm)
};

/**
 * Hooks and props are merged as arrays.
 */
function mergeHook (
  parentVal,
  childVal
) {
  return childVal
    ? parentVal
      ? parentVal.concat(childVal)
      : Array.isArray(childVal)
        ? childVal
        : [childVal]
    : parentVal
}

LIFECYCLE_HOOKS.forEach(function (hook) {
  strats[hook] = mergeHook;
});

/**
 * Assets
 *
 * When a vm is present (instance creation), we need to do
 * a three-way merge between constructor options, instance
 * options and parent options.
 */
function mergeAssets (
  parentVal,
  childVal,
  vm,
  key
) {
  var res = Object.create(parentVal || null);
  if (childVal) {
    "development" !== 'production' && assertObjectType(key, childVal, vm);
    return extend(res, childVal)
  } else {
    return res
  }
}

ASSET_TYPES.forEach(function (type) {
  strats[type + 's'] = mergeAssets;
});

/**
 * Watchers.
 *
 * Watchers hashes should not overwrite one
 * another, so we merge them as arrays.
 */
strats.watch = function (
  parentVal,
  childVal,
  vm,
  key
) {
  // work around Firefox's Object.prototype.watch...
  if (parentVal === nativeWatch) { parentVal = undefined; }
  if (childVal === nativeWatch) { childVal = undefined; }
  /* istanbul ignore if */
  if (!childVal) { return Object.create(parentVal || null) }
  if (true) {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = {};
  extend(ret, parentVal);
  for (var key$1 in childVal) {
    var parent = ret[key$1];
    var child = childVal[key$1];
    if (parent && !Array.isArray(parent)) {
      parent = [parent];
    }
    ret[key$1] = parent
      ? parent.concat(child)
      : Array.isArray(child) ? child : [child];
  }
  return ret
};

/**
 * Other object hashes.
 */
strats.props =
strats.methods =
strats.inject =
strats.computed = function (
  parentVal,
  childVal,
  vm,
  key
) {
  if (childVal && "development" !== 'production') {
    assertObjectType(key, childVal, vm);
  }
  if (!parentVal) { return childVal }
  var ret = Object.create(null);
  extend(ret, parentVal);
  if (childVal) { extend(ret, childVal); }
  return ret
};
strats.provide = mergeDataOrFn;

/**
 * Default strategy.
 */
var defaultStrat = function (parentVal, childVal) {
  return childVal === undefined
    ? parentVal
    : childVal
};

/**
 * Validate component names
 */
function checkComponents (options) {
  for (var key in options.components) {
    validateComponentName(key);
  }
}

function validateComponentName (name) {
  if (!/^[a-zA-Z][\w-]*$/.test(name)) {
    warn(
      'Invalid component name: "' + name + '". Component names ' +
      'can only contain alphanumeric characters and the hyphen, ' +
      'and must start with a letter.'
    );
  }
  if (isBuiltInTag(name) || config.isReservedTag(name)) {
    warn(
      'Do not use built-in or reserved HTML elements as component ' +
      'id: ' + name
    );
  }
}

/**
 * Ensure all props option syntax are normalized into the
 * Object-based format.
 */
function normalizeProps (options, vm) {
  var props = options.props;
  if (!props) { return }
  var res = {};
  var i, val, name;
  if (Array.isArray(props)) {
    i = props.length;
    while (i--) {
      val = props[i];
      if (typeof val === 'string') {
        name = camelize(val);
        res[name] = { type: null };
      } else if (true) {
        warn('props must be strings when using array syntax.');
      }
    }
  } else if (isPlainObject(props)) {
    for (var key in props) {
      val = props[key];
      name = camelize(key);
      res[name] = isPlainObject(val)
        ? val
        : { type: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"props\": expected an Array or an Object, " +
      "but got " + (toRawType(props)) + ".",
      vm
    );
  }
  options.props = res;
}

/**
 * Normalize all injections into Object-based format
 */
function normalizeInject (options, vm) {
  var inject = options.inject;
  if (!inject) { return }
  var normalized = options.inject = {};
  if (Array.isArray(inject)) {
    for (var i = 0; i < inject.length; i++) {
      normalized[inject[i]] = { from: inject[i] };
    }
  } else if (isPlainObject(inject)) {
    for (var key in inject) {
      var val = inject[key];
      normalized[key] = isPlainObject(val)
        ? extend({ from: key }, val)
        : { from: val };
    }
  } else if (true) {
    warn(
      "Invalid value for option \"inject\": expected an Array or an Object, " +
      "but got " + (toRawType(inject)) + ".",
      vm
    );
  }
}

/**
 * Normalize raw function directives into object format.
 */
function normalizeDirectives (options) {
  var dirs = options.directives;
  if (dirs) {
    for (var key in dirs) {
      var def = dirs[key];
      if (typeof def === 'function') {
        dirs[key] = { bind: def, update: def };
      }
    }
  }
}

function assertObjectType (name, value, vm) {
  if (!isPlainObject(value)) {
    warn(
      "Invalid value for option \"" + name + "\": expected an Object, " +
      "but got " + (toRawType(value)) + ".",
      vm
    );
  }
}

/**
 * Merge two option objects into a new one.
 * Core utility used in both instantiation and inheritance.
 */
function mergeOptions (
  parent,
  child,
  vm
) {
  if (true) {
    checkComponents(child);
  }

  if (typeof child === 'function') {
    child = child.options;
  }

  normalizeProps(child, vm);
  normalizeInject(child, vm);
  normalizeDirectives(child);
  var extendsFrom = child.extends;
  if (extendsFrom) {
    parent = mergeOptions(parent, extendsFrom, vm);
  }
  if (child.mixins) {
    for (var i = 0, l = child.mixins.length; i < l; i++) {
      parent = mergeOptions(parent, child.mixins[i], vm);
    }
  }
  var options = {};
  var key;
  for (key in parent) {
    mergeField(key);
  }
  for (key in child) {
    if (!hasOwn(parent, key)) {
      mergeField(key);
    }
  }
  function mergeField (key) {
    var strat = strats[key] || defaultStrat;
    options[key] = strat(parent[key], child[key], vm, key);
  }
  return options
}

/**
 * Resolve an asset.
 * This function is used because child instances need access
 * to assets defined in its ancestor chain.
 */
function resolveAsset (
  options,
  type,
  id,
  warnMissing
) {
  /* istanbul ignore if */
  if (typeof id !== 'string') {
    return
  }
  var assets = options[type];
  // check local registration variations first
  if (hasOwn(assets, id)) { return assets[id] }
  var camelizedId = camelize(id);
  if (hasOwn(assets, camelizedId)) { return assets[camelizedId] }
  var PascalCaseId = capitalize(camelizedId);
  if (hasOwn(assets, PascalCaseId)) { return assets[PascalCaseId] }
  // fallback to prototype chain
  var res = assets[id] || assets[camelizedId] || assets[PascalCaseId];
  if ("development" !== 'production' && warnMissing && !res) {
    warn(
      'Failed to resolve ' + type.slice(0, -1) + ': ' + id,
      options
    );
  }
  return res
}

/*  */

function validateProp (
  key,
  propOptions,
  propsData,
  vm
) {
  var prop = propOptions[key];
  var absent = !hasOwn(propsData, key);
  var value = propsData[key];
  // boolean casting
  var booleanIndex = getTypeIndex(Boolean, prop.type);
  if (booleanIndex > -1) {
    if (absent && !hasOwn(prop, 'default')) {
      value = false;
    } else if (value === '' || value === hyphenate(key)) {
      // only cast empty string / same name to boolean if
      // boolean has higher priority
      var stringIndex = getTypeIndex(String, prop.type);
      if (stringIndex < 0 || booleanIndex < stringIndex) {
        value = true;
      }
    }
  }
  // check default value
  if (value === undefined) {
    value = getPropDefaultValue(vm, prop, key);
    // since the default value is a fresh copy,
    // make sure to observe it.
    var prevShouldObserve = shouldObserve;
    toggleObserving(true);
    observe(value);
    toggleObserving(prevShouldObserve);
  }
  if (
    true
  ) {
    assertProp(prop, key, value, vm, absent);
  }
  return value
}

/**
 * Get the default value of a prop.
 */
function getPropDefaultValue (vm, prop, key) {
  // no default, return undefined
  if (!hasOwn(prop, 'default')) {
    return undefined
  }
  var def = prop.default;
  // warn against non-factory defaults for Object & Array
  if ("development" !== 'production' && isObject(def)) {
    warn(
      'Invalid default value for prop "' + key + '": ' +
      'Props with type Object/Array must use a factory function ' +
      'to return the default value.',
      vm
    );
  }
  // the raw prop value was also undefined from previous render,
  // return previous default value to avoid unnecessary watcher trigger
  if (vm && vm.$options.propsData &&
    vm.$options.propsData[key] === undefined &&
    vm._props[key] !== undefined
  ) {
    return vm._props[key]
  }
  // call factory function for non-Function types
  // a value is Function if its prototype is function even across different execution context
  return typeof def === 'function' && getType(prop.type) !== 'Function'
    ? def.call(vm)
    : def
}

/**
 * Assert whether a prop is valid.
 */
function assertProp (
  prop,
  name,
  value,
  vm,
  absent
) {
  if (prop.required && absent) {
    warn(
      'Missing required prop: "' + name + '"',
      vm
    );
    return
  }
  if (value == null && !prop.required) {
    return
  }
  var type = prop.type;
  var valid = !type || type === true;
  var expectedTypes = [];
  if (type) {
    if (!Array.isArray(type)) {
      type = [type];
    }
    for (var i = 0; i < type.length && !valid; i++) {
      var assertedType = assertType(value, type[i]);
      expectedTypes.push(assertedType.expectedType || '');
      valid = assertedType.valid;
    }
  }
  if (!valid) {
    warn(
      "Invalid prop: type check failed for prop \"" + name + "\"." +
      " Expected " + (expectedTypes.map(capitalize).join(', ')) +
      ", got " + (toRawType(value)) + ".",
      vm
    );
    return
  }
  var validator = prop.validator;
  if (validator) {
    if (!validator(value)) {
      warn(
        'Invalid prop: custom validator check failed for prop "' + name + '".',
        vm
      );
    }
  }
}

var simpleCheckRE = /^(String|Number|Boolean|Function|Symbol)$/;

function assertType (value, type) {
  var valid;
  var expectedType = getType(type);
  if (simpleCheckRE.test(expectedType)) {
    var t = typeof value;
    valid = t === expectedType.toLowerCase();
    // for primitive wrapper objects
    if (!valid && t === 'object') {
      valid = value instanceof type;
    }
  } else if (expectedType === 'Object') {
    valid = isPlainObject(value);
  } else if (expectedType === 'Array') {
    valid = Array.isArray(value);
  } else {
    valid = value instanceof type;
  }
  return {
    valid: valid,
    expectedType: expectedType
  }
}

/**
 * Use function string name to check built-in types,
 * because a simple equality check will fail when running
 * across different vms / iframes.
 */
function getType (fn) {
  var match = fn && fn.toString().match(/^\s*function (\w+)/);
  return match ? match[1] : ''
}

function isSameType (a, b) {
  return getType(a) === getType(b)
}

function getTypeIndex (type, expectedTypes) {
  if (!Array.isArray(expectedTypes)) {
    return isSameType(expectedTypes, type) ? 0 : -1
  }
  for (var i = 0, len = expectedTypes.length; i < len; i++) {
    if (isSameType(expectedTypes[i], type)) {
      return i
    }
  }
  return -1
}

/*  */

function handleError (err, vm, info) {
  if (vm) {
    var cur = vm;
    while ((cur = cur.$parent)) {
      var hooks = cur.$options.errorCaptured;
      if (hooks) {
        for (var i = 0; i < hooks.length; i++) {
          try {
            var capture = hooks[i].call(cur, err, vm, info) === false;
            if (capture) { return }
          } catch (e) {
            globalHandleError(e, cur, 'errorCaptured hook');
          }
        }
      }
    }
  }
  globalHandleError(err, vm, info);
}

function globalHandleError (err, vm, info) {
  if (config.errorHandler) {
    try {
      return config.errorHandler.call(null, err, vm, info)
    } catch (e) {
      logError(e, null, 'config.errorHandler');
    }
  }
  logError(err, vm, info);
}

function logError (err, vm, info) {
  if (true) {
    warn(("Error in " + info + ": \"" + (err.toString()) + "\""), vm);
  }
  /* istanbul ignore else */
  if ((inBrowser || inWeex) && typeof console !== 'undefined') {
    console.error(err);
  } else {
    throw err
  }
}

/*  */
/* globals MessageChannel */

var callbacks = [];
var pending = false;

function flushCallbacks () {
  pending = false;
  var copies = callbacks.slice(0);
  callbacks.length = 0;
  for (var i = 0; i < copies.length; i++) {
    copies[i]();
  }
}

// Here we have async deferring wrappers using both microtasks and (macro) tasks.
// In < 2.4 we used microtasks everywhere, but there are some scenarios where
// microtasks have too high a priority and fire in between supposedly
// sequential events (e.g. #4521, #6690) or even between bubbling of the same
// event (#6566). However, using (macro) tasks everywhere also has subtle problems
// when state is changed right before repaint (e.g. #6813, out-in transitions).
// Here we use microtask by default, but expose a way to force (macro) task when
// needed (e.g. in event handlers attached by v-on).
var microTimerFunc;
var macroTimerFunc;
var useMacroTask = false;

// Determine (macro) task defer implementation.
// Technically setImmediate should be the ideal choice, but it's only available
// in IE. The only polyfill that consistently queues the callback after all DOM
// events triggered in the same loop is by using MessageChannel.
/* istanbul ignore if */
if (typeof setImmediate !== 'undefined' && isNative(setImmediate)) {
  macroTimerFunc = function () {
    setImmediate(flushCallbacks);
  };
} else if (typeof MessageChannel !== 'undefined' && (
  isNative(MessageChannel) ||
  // PhantomJS
  MessageChannel.toString() === '[object MessageChannelConstructor]'
)) {
  var channel = new MessageChannel();
  var port = channel.port2;
  channel.port1.onmessage = flushCallbacks;
  macroTimerFunc = function () {
    port.postMessage(1);
  };
} else {
  /* istanbul ignore next */
  macroTimerFunc = function () {
    setTimeout(flushCallbacks, 0);
  };
}

// Determine microtask defer implementation.
/* istanbul ignore next, $flow-disable-line */
if (typeof Promise !== 'undefined' && isNative(Promise)) {
  var p = Promise.resolve();
  microTimerFunc = function () {
    p.then(flushCallbacks);
    // in problematic UIWebViews, Promise.then doesn't completely break, but
    // it can get stuck in a weird state where callbacks are pushed into the
    // microtask queue but the queue isn't being flushed, until the browser
    // needs to do some other work, e.g. handle a timer. Therefore we can
    // "force" the microtask queue to be flushed by adding an empty timer.
    if (isIOS) { setTimeout(noop); }
  };
} else {
  // fallback to macro
  microTimerFunc = macroTimerFunc;
}

/**
 * Wrap a function so that if any code inside triggers state change,
 * the changes are queued using a (macro) task instead of a microtask.
 */
function withMacroTask (fn) {
  return fn._withTask || (fn._withTask = function () {
    useMacroTask = true;
    var res = fn.apply(null, arguments);
    useMacroTask = false;
    return res
  })
}

function nextTick (cb, ctx) {
  var _resolve;
  callbacks.push(function () {
    if (cb) {
      try {
        cb.call(ctx);
      } catch (e) {
        handleError(e, ctx, 'nextTick');
      }
    } else if (_resolve) {
      _resolve(ctx);
    }
  });
  if (!pending) {
    pending = true;
    if (useMacroTask) {
      macroTimerFunc();
    } else {
      microTimerFunc();
    }
  }
  // $flow-disable-line
  if (!cb && typeof Promise !== 'undefined') {
    return new Promise(function (resolve) {
      _resolve = resolve;
    })
  }
}

/*  */

/* not type checking this file because flow doesn't play well with Proxy */

var initProxy;

if (true) {
  var allowedGlobals = makeMap(
    'Infinity,undefined,NaN,isFinite,isNaN,' +
    'parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,' +
    'Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,' +
    'require' // for Webpack/Browserify
  );

  var warnNonPresent = function (target, key) {
    warn(
      "Property or method \"" + key + "\" is not defined on the instance but " +
      'referenced during render. Make sure that this property is reactive, ' +
      'either in the data option, or for class-based components, by ' +
      'initializing the property. ' +
      'See: https://vuejs.org/v2/guide/reactivity.html#Declaring-Reactive-Properties.',
      target
    );
  };

  var hasProxy =
    typeof Proxy !== 'undefined' && isNative(Proxy);

  if (hasProxy) {
    var isBuiltInModifier = makeMap('stop,prevent,self,ctrl,shift,alt,meta,exact');
    config.keyCodes = new Proxy(config.keyCodes, {
      set: function set (target, key, value) {
        if (isBuiltInModifier(key)) {
          warn(("Avoid overwriting built-in modifier in config.keyCodes: ." + key));
          return false
        } else {
          target[key] = value;
          return true
        }
      }
    });
  }

  var hasHandler = {
    has: function has (target, key) {
      var has = key in target;
      var isAllowed = allowedGlobals(key) || key.charAt(0) === '_';
      if (!has && !isAllowed) {
        warnNonPresent(target, key);
      }
      return has || !isAllowed
    }
  };

  var getHandler = {
    get: function get (target, key) {
      if (typeof key === 'string' && !(key in target)) {
        warnNonPresent(target, key);
      }
      return target[key]
    }
  };

  initProxy = function initProxy (vm) {
    if (hasProxy) {
      // determine which proxy handler to use
      var options = vm.$options;
      var handlers = options.render && options.render._withStripped
        ? getHandler
        : hasHandler;
      vm._renderProxy = new Proxy(vm, handlers);
    } else {
      vm._renderProxy = vm;
    }
  };
}

/*  */

var seenObjects = new _Set();

/**
 * Recursively traverse an object to evoke all converted
 * getters, so that every nested property inside the object
 * is collected as a "deep" dependency.
 */
function traverse (val) {
  _traverse(val, seenObjects);
  seenObjects.clear();
}

function _traverse (val, seen) {
  var i, keys;
  var isA = Array.isArray(val);
  if ((!isA && !isObject(val)) || Object.isFrozen(val) || val instanceof VNode) {
    return
  }
  if (val.__ob__) {
    var depId = val.__ob__.dep.id;
    if (seen.has(depId)) {
      return
    }
    seen.add(depId);
  }
  if (isA) {
    i = val.length;
    while (i--) { _traverse(val[i], seen); }
  } else {
    keys = Object.keys(val);
    i = keys.length;
    while (i--) { _traverse(val[keys[i]], seen); }
  }
}

var mark;
var measure;

if (true) {
  var perf = inBrowser && window.performance;
  /* istanbul ignore if */
  if (
    perf &&
    perf.mark &&
    perf.measure &&
    perf.clearMarks &&
    perf.clearMeasures
  ) {
    mark = function (tag) { return perf.mark(tag); };
    measure = function (name, startTag, endTag) {
      perf.measure(name, startTag, endTag);
      perf.clearMarks(startTag);
      perf.clearMarks(endTag);
      perf.clearMeasures(name);
    };
  }
}

/*  */

var normalizeEvent = cached(function (name) {
  var passive = name.charAt(0) === '&';
  name = passive ? name.slice(1) : name;
  var once$$1 = name.charAt(0) === '~'; // Prefixed last, checked first
  name = once$$1 ? name.slice(1) : name;
  var capture = name.charAt(0) === '!';
  name = capture ? name.slice(1) : name;
  return {
    name: name,
    once: once$$1,
    capture: capture,
    passive: passive
  }
});

function createFnInvoker (fns) {
  function invoker () {
    var arguments$1 = arguments;

    var fns = invoker.fns;
    if (Array.isArray(fns)) {
      var cloned = fns.slice();
      for (var i = 0; i < cloned.length; i++) {
        cloned[i].apply(null, arguments$1);
      }
    } else {
      // return handler return value for single handlers
      return fns.apply(null, arguments)
    }
  }
  invoker.fns = fns;
  return invoker
}

function updateListeners (
  on,
  oldOn,
  add,
  remove$$1,
  vm
) {
  var name, def, cur, old, event;
  for (name in on) {
    def = cur = on[name];
    old = oldOn[name];
    event = normalizeEvent(name);
    /* istanbul ignore if */
    if (isUndef(cur)) {
      "development" !== 'production' && warn(
        "Invalid handler for event \"" + (event.name) + "\": got " + String(cur),
        vm
      );
    } else if (isUndef(old)) {
      if (isUndef(cur.fns)) {
        cur = on[name] = createFnInvoker(cur);
      }
      add(event.name, cur, event.once, event.capture, event.passive, event.params);
    } else if (cur !== old) {
      old.fns = cur;
      on[name] = old;
    }
  }
  for (name in oldOn) {
    if (isUndef(on[name])) {
      event = normalizeEvent(name);
      remove$$1(event.name, oldOn[name], event.capture);
    }
  }
}

/*  */

function mergeVNodeHook (def, hookKey, hook) {
  if (def instanceof VNode) {
    def = def.data.hook || (def.data.hook = {});
  }
  var invoker;
  var oldHook = def[hookKey];

  function wrappedHook () {
    hook.apply(this, arguments);
    // important: remove merged hook to ensure it's called only once
    // and prevent memory leak
    remove(invoker.fns, wrappedHook);
  }

  if (isUndef(oldHook)) {
    // no existing hook
    invoker = createFnInvoker([wrappedHook]);
  } else {
    /* istanbul ignore if */
    if (isDef(oldHook.fns) && isTrue(oldHook.merged)) {
      // already a merged invoker
      invoker = oldHook;
      invoker.fns.push(wrappedHook);
    } else {
      // existing plain hook
      invoker = createFnInvoker([oldHook, wrappedHook]);
    }
  }

  invoker.merged = true;
  def[hookKey] = invoker;
}

/*  */

function extractPropsFromVNodeData (
  data,
  Ctor,
  tag
) {
  // we are only extracting raw values here.
  // validation and default values are handled in the child
  // component itself.
  var propOptions = Ctor.options.props;
  if (isUndef(propOptions)) {
    return
  }
  var res = {};
  var attrs = data.attrs;
  var props = data.props;
  if (isDef(attrs) || isDef(props)) {
    for (var key in propOptions) {
      var altKey = hyphenate(key);
      if (true) {
        var keyInLowerCase = key.toLowerCase();
        if (
          key !== keyInLowerCase &&
          attrs && hasOwn(attrs, keyInLowerCase)
        ) {
          tip(
            "Prop \"" + keyInLowerCase + "\" is passed to component " +
            (formatComponentName(tag || Ctor)) + ", but the declared prop name is" +
            " \"" + key + "\". " +
            "Note that HTML attributes are case-insensitive and camelCased " +
            "props need to use their kebab-case equivalents when using in-DOM " +
            "templates. You should probably use \"" + altKey + "\" instead of \"" + key + "\"."
          );
        }
      }
      checkProp(res, props, key, altKey, true) ||
      checkProp(res, attrs, key, altKey, false);
    }
  }
  return res
}

function checkProp (
  res,
  hash,
  key,
  altKey,
  preserve
) {
  if (isDef(hash)) {
    if (hasOwn(hash, key)) {
      res[key] = hash[key];
      if (!preserve) {
        delete hash[key];
      }
      return true
    } else if (hasOwn(hash, altKey)) {
      res[key] = hash[altKey];
      if (!preserve) {
        delete hash[altKey];
      }
      return true
    }
  }
  return false
}

/*  */

// The template compiler attempts to minimize the need for normalization by
// statically analyzing the template at compile time.
//
// For plain HTML markup, normalization can be completely skipped because the
// generated render function is guaranteed to return Array<VNode>. There are
// two cases where extra normalization is needed:

// 1. When the children contains components - because a functional component
// may return an Array instead of a single root. In this case, just a simple
// normalization is needed - if any child is an Array, we flatten the whole
// thing with Array.prototype.concat. It is guaranteed to be only 1-level deep
// because functional components already normalize their own children.
function simpleNormalizeChildren (children) {
  for (var i = 0; i < children.length; i++) {
    if (Array.isArray(children[i])) {
      return Array.prototype.concat.apply([], children)
    }
  }
  return children
}

// 2. When the children contains constructs that always generated nested Arrays,
// e.g. <template>, <slot>, v-for, or when the children is provided by user
// with hand-written render functions / JSX. In such cases a full normalization
// is needed to cater to all possible types of children values.
function normalizeChildren (children) {
  return isPrimitive(children)
    ? [createTextVNode(children)]
    : Array.isArray(children)
      ? normalizeArrayChildren(children)
      : undefined
}

function isTextNode (node) {
  return isDef(node) && isDef(node.text) && isFalse(node.isComment)
}

function normalizeArrayChildren (children, nestedIndex) {
  var res = [];
  var i, c, lastIndex, last;
  for (i = 0; i < children.length; i++) {
    c = children[i];
    if (isUndef(c) || typeof c === 'boolean') { continue }
    lastIndex = res.length - 1;
    last = res[lastIndex];
    //  nested
    if (Array.isArray(c)) {
      if (c.length > 0) {
        c = normalizeArrayChildren(c, ((nestedIndex || '') + "_" + i));
        // merge adjacent text nodes
        if (isTextNode(c[0]) && isTextNode(last)) {
          res[lastIndex] = createTextVNode(last.text + (c[0]).text);
          c.shift();
        }
        res.push.apply(res, c);
      }
    } else if (isPrimitive(c)) {
      if (isTextNode(last)) {
        // merge adjacent text nodes
        // this is necessary for SSR hydration because text nodes are
        // essentially merged when rendered to HTML strings
        res[lastIndex] = createTextVNode(last.text + c);
      } else if (c !== '') {
        // convert primitive to vnode
        res.push(createTextVNode(c));
      }
    } else {
      if (isTextNode(c) && isTextNode(last)) {
        // merge adjacent text nodes
        res[lastIndex] = createTextVNode(last.text + c.text);
      } else {
        // default key for nested array children (likely generated by v-for)
        if (isTrue(children._isVList) &&
          isDef(c.tag) &&
          isUndef(c.key) &&
          isDef(nestedIndex)) {
          c.key = "__vlist" + nestedIndex + "_" + i + "__";
        }
        res.push(c);
      }
    }
  }
  return res
}

/*  */

function ensureCtor (comp, base) {
  if (
    comp.__esModule ||
    (hasSymbol && comp[Symbol.toStringTag] === 'Module')
  ) {
    comp = comp.default;
  }
  return isObject(comp)
    ? base.extend(comp)
    : comp
}

function createAsyncPlaceholder (
  factory,
  data,
  context,
  children,
  tag
) {
  var node = createEmptyVNode();
  node.asyncFactory = factory;
  node.asyncMeta = { data: data, context: context, children: children, tag: tag };
  return node
}

function resolveAsyncComponent (
  factory,
  baseCtor,
  context
) {
  if (isTrue(factory.error) && isDef(factory.errorComp)) {
    return factory.errorComp
  }

  if (isDef(factory.resolved)) {
    return factory.resolved
  }

  if (isTrue(factory.loading) && isDef(factory.loadingComp)) {
    return factory.loadingComp
  }

  if (isDef(factory.contexts)) {
    // already pending
    factory.contexts.push(context);
  } else {
    var contexts = factory.contexts = [context];
    var sync = true;

    var forceRender = function () {
      for (var i = 0, l = contexts.length; i < l; i++) {
        contexts[i].$forceUpdate();
      }
    };

    var resolve = once(function (res) {
      // cache resolved
      factory.resolved = ensureCtor(res, baseCtor);
      // invoke callbacks only if this is not a synchronous resolve
      // (async resolves are shimmed as synchronous during SSR)
      if (!sync) {
        forceRender();
      }
    });

    var reject = once(function (reason) {
      "development" !== 'production' && warn(
        "Failed to resolve async component: " + (String(factory)) +
        (reason ? ("\nReason: " + reason) : '')
      );
      if (isDef(factory.errorComp)) {
        factory.error = true;
        forceRender();
      }
    });

    var res = factory(resolve, reject);

    if (isObject(res)) {
      if (typeof res.then === 'function') {
        // () => Promise
        if (isUndef(factory.resolved)) {
          res.then(resolve, reject);
        }
      } else if (isDef(res.component) && typeof res.component.then === 'function') {
        res.component.then(resolve, reject);

        if (isDef(res.error)) {
          factory.errorComp = ensureCtor(res.error, baseCtor);
        }

        if (isDef(res.loading)) {
          factory.loadingComp = ensureCtor(res.loading, baseCtor);
          if (res.delay === 0) {
            factory.loading = true;
          } else {
            setTimeout(function () {
              if (isUndef(factory.resolved) && isUndef(factory.error)) {
                factory.loading = true;
                forceRender();
              }
            }, res.delay || 200);
          }
        }

        if (isDef(res.timeout)) {
          setTimeout(function () {
            if (isUndef(factory.resolved)) {
              reject(
                 true
                  ? ("timeout (" + (res.timeout) + "ms)")
                  : undefined
              );
            }
          }, res.timeout);
        }
      }
    }

    sync = false;
    // return in case resolved synchronously
    return factory.loading
      ? factory.loadingComp
      : factory.resolved
  }
}

/*  */

function isAsyncPlaceholder (node) {
  return node.isComment && node.asyncFactory
}

/*  */

function getFirstComponentChild (children) {
  if (Array.isArray(children)) {
    for (var i = 0; i < children.length; i++) {
      var c = children[i];
      if (isDef(c) && (isDef(c.componentOptions) || isAsyncPlaceholder(c))) {
        return c
      }
    }
  }
}

/*  */

/*  */

function initEvents (vm) {
  vm._events = Object.create(null);
  vm._hasHookEvent = false;
  // init parent attached events
  var listeners = vm.$options._parentListeners;
  if (listeners) {
    updateComponentListeners(vm, listeners);
  }
}

var target;

function add (event, fn, once) {
  if (once) {
    target.$once(event, fn);
  } else {
    target.$on(event, fn);
  }
}

function remove$1 (event, fn) {
  target.$off(event, fn);
}

function updateComponentListeners (
  vm,
  listeners,
  oldListeners
) {
  target = vm;
  updateListeners(listeners, oldListeners || {}, add, remove$1, vm);
  target = undefined;
}

function eventsMixin (Vue) {
  var hookRE = /^hook:/;
  Vue.prototype.$on = function (event, fn) {
    var this$1 = this;

    var vm = this;
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$on(event[i], fn);
      }
    } else {
      (vm._events[event] || (vm._events[event] = [])).push(fn);
      // optimize hook:event cost by using a boolean flag marked at registration
      // instead of a hash lookup
      if (hookRE.test(event)) {
        vm._hasHookEvent = true;
      }
    }
    return vm
  };

  Vue.prototype.$once = function (event, fn) {
    var vm = this;
    function on () {
      vm.$off(event, on);
      fn.apply(vm, arguments);
    }
    on.fn = fn;
    vm.$on(event, on);
    return vm
  };

  Vue.prototype.$off = function (event, fn) {
    var this$1 = this;

    var vm = this;
    // all
    if (!arguments.length) {
      vm._events = Object.create(null);
      return vm
    }
    // array of events
    if (Array.isArray(event)) {
      for (var i = 0, l = event.length; i < l; i++) {
        this$1.$off(event[i], fn);
      }
      return vm
    }
    // specific event
    var cbs = vm._events[event];
    if (!cbs) {
      return vm
    }
    if (!fn) {
      vm._events[event] = null;
      return vm
    }
    if (fn) {
      // specific handler
      var cb;
      var i$1 = cbs.length;
      while (i$1--) {
        cb = cbs[i$1];
        if (cb === fn || cb.fn === fn) {
          cbs.splice(i$1, 1);
          break
        }
      }
    }
    return vm
  };

  Vue.prototype.$emit = function (event) {
    var vm = this;
    if (true) {
      var lowerCaseEvent = event.toLowerCase();
      if (lowerCaseEvent !== event && vm._events[lowerCaseEvent]) {
        tip(
          "Event \"" + lowerCaseEvent + "\" is emitted in component " +
          (formatComponentName(vm)) + " but the handler is registered for \"" + event + "\". " +
          "Note that HTML attributes are case-insensitive and you cannot use " +
          "v-on to listen to camelCase events when using in-DOM templates. " +
          "You should probably use \"" + (hyphenate(event)) + "\" instead of \"" + event + "\"."
        );
      }
    }
    var cbs = vm._events[event];
    if (cbs) {
      cbs = cbs.length > 1 ? toArray(cbs) : cbs;
      var args = toArray(arguments, 1);
      for (var i = 0, l = cbs.length; i < l; i++) {
        try {
          cbs[i].apply(vm, args);
        } catch (e) {
          handleError(e, vm, ("event handler for \"" + event + "\""));
        }
      }
    }
    return vm
  };
}

/*  */



/**
 * Runtime helper for resolving raw children VNodes into a slot object.
 */
function resolveSlots (
  children,
  context
) {
  var slots = {};
  if (!children) {
    return slots
  }
  for (var i = 0, l = children.length; i < l; i++) {
    var child = children[i];
    var data = child.data;
    // remove slot attribute if the node is resolved as a Vue slot node
    if (data && data.attrs && data.attrs.slot) {
      delete data.attrs.slot;
    }
    // named slots should only be respected if the vnode was rendered in the
    // same context.
    if ((child.context === context || child.fnContext === context) &&
      data && data.slot != null
    ) {
      var name = data.slot;
      var slot = (slots[name] || (slots[name] = []));
      if (child.tag === 'template') {
        slot.push.apply(slot, child.children || []);
      } else {
        slot.push(child);
      }
    } else {
      (slots.default || (slots.default = [])).push(child);
    }
  }
  // ignore slots that contains only whitespace
  for (var name$1 in slots) {
    if (slots[name$1].every(isWhitespace)) {
      delete slots[name$1];
    }
  }
  return slots
}

function isWhitespace (node) {
  return (node.isComment && !node.asyncFactory) || node.text === ' '
}

function resolveScopedSlots (
  fns, // see flow/vnode
  res
) {
  res = res || {};
  for (var i = 0; i < fns.length; i++) {
    if (Array.isArray(fns[i])) {
      resolveScopedSlots(fns[i], res);
    } else {
      res[fns[i].key] = fns[i].fn;
    }
  }
  return res
}

/*  */

var activeInstance = null;
var isUpdatingChildComponent = false;

function initLifecycle (vm) {
  var options = vm.$options;

  // locate first non-abstract parent
  var parent = options.parent;
  if (parent && !options.abstract) {
    while (parent.$options.abstract && parent.$parent) {
      parent = parent.$parent;
    }
    parent.$children.push(vm);
  }

  vm.$parent = parent;
  vm.$root = parent ? parent.$root : vm;

  vm.$children = [];
  vm.$refs = {};

  vm._watcher = null;
  vm._inactive = null;
  vm._directInactive = false;
  vm._isMounted = false;
  vm._isDestroyed = false;
  vm._isBeingDestroyed = false;
}

function lifecycleMixin (Vue) {
  Vue.prototype._update = function (vnode, hydrating) {
    var vm = this;
    if (vm._isMounted) {
      callHook(vm, 'beforeUpdate');
    }
    var prevEl = vm.$el;
    var prevVnode = vm._vnode;
    var prevActiveInstance = activeInstance;
    activeInstance = vm;
    vm._vnode = vnode;
    // Vue.prototype.__patch__ is injected in entry points
    // based on the rendering backend used.
    if (!prevVnode) {
      // initial render
      vm.$el = vm.__patch__(
        vm.$el, vnode, hydrating, false /* removeOnly */,
        vm.$options._parentElm,
        vm.$options._refElm
      );
      // no need for the ref nodes after initial patch
      // this prevents keeping a detached DOM tree in memory (#5851)
      vm.$options._parentElm = vm.$options._refElm = null;
    } else {
      // updates
      vm.$el = vm.__patch__(prevVnode, vnode);
    }
    activeInstance = prevActiveInstance;
    // update __vue__ reference
    if (prevEl) {
      prevEl.__vue__ = null;
    }
    if (vm.$el) {
      vm.$el.__vue__ = vm;
    }
    // if parent is an HOC, update its $el as well
    if (vm.$vnode && vm.$parent && vm.$vnode === vm.$parent._vnode) {
      vm.$parent.$el = vm.$el;
    }
    // updated hook is called by the scheduler to ensure that children are
    // updated in a parent's updated hook.
  };

  Vue.prototype.$forceUpdate = function () {
    var vm = this;
    if (vm._watcher) {
      vm._watcher.update();
    }
  };

  Vue.prototype.$destroy = function () {
    var vm = this;
    if (vm._isBeingDestroyed) {
      return
    }
    callHook(vm, 'beforeDestroy');
    vm._isBeingDestroyed = true;
    // remove self from parent
    var parent = vm.$parent;
    if (parent && !parent._isBeingDestroyed && !vm.$options.abstract) {
      remove(parent.$children, vm);
    }
    // teardown watchers
    if (vm._watcher) {
      vm._watcher.teardown();
    }
    var i = vm._watchers.length;
    while (i--) {
      vm._watchers[i].teardown();
    }
    // remove reference from data ob
    // frozen object may not have observer.
    if (vm._data.__ob__) {
      vm._data.__ob__.vmCount--;
    }
    // call the last hook...
    vm._isDestroyed = true;
    // invoke destroy hooks on current rendered tree
    vm.__patch__(vm._vnode, null);
    // fire destroyed hook
    callHook(vm, 'destroyed');
    // turn off all instance listeners.
    vm.$off();
    // remove __vue__ reference
    if (vm.$el) {
      vm.$el.__vue__ = null;
    }
    // release circular reference (#6759)
    if (vm.$vnode) {
      vm.$vnode.parent = null;
    }
  };
}

function mountComponent (
  vm,
  el,
  hydrating
) {
  vm.$el = el;
  if (!vm.$options.render) {
    vm.$options.render = createEmptyVNode;
    if (true) {
      /* istanbul ignore if */
      if ((vm.$options.template && vm.$options.template.charAt(0) !== '#') ||
        vm.$options.el || el) {
        warn(
          'You are using the runtime-only build of Vue where the template ' +
          'compiler is not available. Either pre-compile the templates into ' +
          'render functions, or use the compiler-included build.',
          vm
        );
      } else {
        warn(
          'Failed to mount component: template or render function not defined.',
          vm
        );
      }
    }
  }
  callHook(vm, 'beforeMount');

  var updateComponent;
  /* istanbul ignore if */
  if ("development" !== 'production' && config.performance && mark) {
    updateComponent = function () {
      var name = vm._name;
      var id = vm._uid;
      var startTag = "vue-perf-start:" + id;
      var endTag = "vue-perf-end:" + id;

      mark(startTag);
      var vnode = vm._render();
      mark(endTag);
      measure(("vue " + name + " render"), startTag, endTag);

      mark(startTag);
      vm._update(vnode, hydrating);
      mark(endTag);
      measure(("vue " + name + " patch"), startTag, endTag);
    };
  } else {
    updateComponent = function () {
      vm._update(vm._render(), hydrating);
    };
  }

  // we set this to vm._watcher inside the watcher's constructor
  // since the watcher's initial patch may call $forceUpdate (e.g. inside child
  // component's mounted hook), which relies on vm._watcher being already defined
  new Watcher(vm, updateComponent, noop, null, true /* isRenderWatcher */);
  hydrating = false;

  // manually mounted instance, call mounted on self
  // mounted is called for render-created child components in its inserted hook
  if (vm.$vnode == null) {
    vm._isMounted = true;
    callHook(vm, 'mounted');
  }
  return vm
}

function updateChildComponent (
  vm,
  propsData,
  listeners,
  parentVnode,
  renderChildren
) {
  if (true) {
    isUpdatingChildComponent = true;
  }

  // determine whether component has slot children
  // we need to do this before overwriting $options._renderChildren
  var hasChildren = !!(
    renderChildren ||               // has new static slots
    vm.$options._renderChildren ||  // has old static slots
    parentVnode.data.scopedSlots || // has new scoped slots
    vm.$scopedSlots !== emptyObject // has old scoped slots
  );

  vm.$options._parentVnode = parentVnode;
  vm.$vnode = parentVnode; // update vm's placeholder node without re-render

  if (vm._vnode) { // update child tree's parent
    vm._vnode.parent = parentVnode;
  }
  vm.$options._renderChildren = renderChildren;

  // update $attrs and $listeners hash
  // these are also reactive so they may trigger child update if the child
  // used them during render
  vm.$attrs = parentVnode.data.attrs || emptyObject;
  vm.$listeners = listeners || emptyObject;

  // update props
  if (propsData && vm.$options.props) {
    toggleObserving(false);
    var props = vm._props;
    var propKeys = vm.$options._propKeys || [];
    for (var i = 0; i < propKeys.length; i++) {
      var key = propKeys[i];
      var propOptions = vm.$options.props; // wtf flow?
      props[key] = validateProp(key, propOptions, propsData, vm);
    }
    toggleObserving(true);
    // keep a copy of raw propsData
    vm.$options.propsData = propsData;
  }

  // update listeners
  listeners = listeners || emptyObject;
  var oldListeners = vm.$options._parentListeners;
  vm.$options._parentListeners = listeners;
  updateComponentListeners(vm, listeners, oldListeners);

  // resolve slots + force update if has children
  if (hasChildren) {
    vm.$slots = resolveSlots(renderChildren, parentVnode.context);
    vm.$forceUpdate();
  }

  if (true) {
    isUpdatingChildComponent = false;
  }
}

function isInInactiveTree (vm) {
  while (vm && (vm = vm.$parent)) {
    if (vm._inactive) { return true }
  }
  return false
}

function activateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = false;
    if (isInInactiveTree(vm)) {
      return
    }
  } else if (vm._directInactive) {
    return
  }
  if (vm._inactive || vm._inactive === null) {
    vm._inactive = false;
    for (var i = 0; i < vm.$children.length; i++) {
      activateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'activated');
  }
}

function deactivateChildComponent (vm, direct) {
  if (direct) {
    vm._directInactive = true;
    if (isInInactiveTree(vm)) {
      return
    }
  }
  if (!vm._inactive) {
    vm._inactive = true;
    for (var i = 0; i < vm.$children.length; i++) {
      deactivateChildComponent(vm.$children[i]);
    }
    callHook(vm, 'deactivated');
  }
}

function callHook (vm, hook) {
  // #7573 disable dep collection when invoking lifecycle hooks
  pushTarget();
  var handlers = vm.$options[hook];
  if (handlers) {
    for (var i = 0, j = handlers.length; i < j; i++) {
      try {
        handlers[i].call(vm);
      } catch (e) {
        handleError(e, vm, (hook + " hook"));
      }
    }
  }
  if (vm._hasHookEvent) {
    vm.$emit('hook:' + hook);
  }
  popTarget();
}

/*  */


var MAX_UPDATE_COUNT = 100;

var queue = [];
var activatedChildren = [];
var has = {};
var circular = {};
var waiting = false;
var flushing = false;
var index = 0;

/**
 * Reset the scheduler's state.
 */
function resetSchedulerState () {
  index = queue.length = activatedChildren.length = 0;
  has = {};
  if (true) {
    circular = {};
  }
  waiting = flushing = false;
}

/**
 * Flush both queues and run the watchers.
 */
function flushSchedulerQueue () {
  flushing = true;
  var watcher, id;

  // Sort queue before flush.
  // This ensures that:
  // 1. Components are updated from parent to child. (because parent is always
  //    created before the child)
  // 2. A component's user watchers are run before its render watcher (because
  //    user watchers are created before the render watcher)
  // 3. If a component is destroyed during a parent component's watcher run,
  //    its watchers can be skipped.
  queue.sort(function (a, b) { return a.id - b.id; });

  // do not cache length because more watchers might be pushed
  // as we run existing watchers
  for (index = 0; index < queue.length; index++) {
    watcher = queue[index];
    id = watcher.id;
    has[id] = null;
    watcher.run();
    // in dev build, check and stop circular updates.
    if ("development" !== 'production' && has[id] != null) {
      circular[id] = (circular[id] || 0) + 1;
      if (circular[id] > MAX_UPDATE_COUNT) {
        warn(
          'You may have an infinite update loop ' + (
            watcher.user
              ? ("in watcher with expression \"" + (watcher.expression) + "\"")
              : "in a component render function."
          ),
          watcher.vm
        );
        break
      }
    }
  }

  // keep copies of post queues before resetting state
  var activatedQueue = activatedChildren.slice();
  var updatedQueue = queue.slice();

  resetSchedulerState();

  // call component updated and activated hooks
  callActivatedHooks(activatedQueue);
  callUpdatedHooks(updatedQueue);

  // devtool hook
  /* istanbul ignore if */
  if (devtools && config.devtools) {
    devtools.emit('flush');
  }
}

function callUpdatedHooks (queue) {
  var i = queue.length;
  while (i--) {
    var watcher = queue[i];
    var vm = watcher.vm;
    if (vm._watcher === watcher && vm._isMounted) {
      callHook(vm, 'updated');
    }
  }
}

/**
 * Queue a kept-alive component that was activated during patch.
 * The queue will be processed after the entire tree has been patched.
 */
function queueActivatedComponent (vm) {
  // setting _inactive to false here so that a render function can
  // rely on checking whether it's in an inactive tree (e.g. router-view)
  vm._inactive = false;
  activatedChildren.push(vm);
}

function callActivatedHooks (queue) {
  for (var i = 0; i < queue.length; i++) {
    queue[i]._inactive = true;
    activateChildComponent(queue[i], true /* true */);
  }
}

/**
 * Push a watcher into the watcher queue.
 * Jobs with duplicate IDs will be skipped unless it's
 * pushed when the queue is being flushed.
 */
function queueWatcher (watcher) {
  var id = watcher.id;
  if (has[id] == null) {
    has[id] = true;
    if (!flushing) {
      queue.push(watcher);
    } else {
      // if already flushing, splice the watcher based on its id
      // if already past its id, it will be run next immediately.
      var i = queue.length - 1;
      while (i > index && queue[i].id > watcher.id) {
        i--;
      }
      queue.splice(i + 1, 0, watcher);
    }
    // queue the flush
    if (!waiting) {
      waiting = true;
      nextTick(flushSchedulerQueue);
    }
  }
}

/*  */

var uid$1 = 0;

/**
 * A watcher parses an expression, collects dependencies,
 * and fires callback when the expression value changes.
 * This is used for both the $watch() api and directives.
 */
var Watcher = function Watcher (
  vm,
  expOrFn,
  cb,
  options,
  isRenderWatcher
) {
  this.vm = vm;
  if (isRenderWatcher) {
    vm._watcher = this;
  }
  vm._watchers.push(this);
  // options
  if (options) {
    this.deep = !!options.deep;
    this.user = !!options.user;
    this.lazy = !!options.lazy;
    this.sync = !!options.sync;
  } else {
    this.deep = this.user = this.lazy = this.sync = false;
  }
  this.cb = cb;
  this.id = ++uid$1; // uid for batching
  this.active = true;
  this.dirty = this.lazy; // for lazy watchers
  this.deps = [];
  this.newDeps = [];
  this.depIds = new _Set();
  this.newDepIds = new _Set();
  this.expression =  true
    ? expOrFn.toString()
    : undefined;
  // parse expression for getter
  if (typeof expOrFn === 'function') {
    this.getter = expOrFn;
  } else {
    this.getter = parsePath(expOrFn);
    if (!this.getter) {
      this.getter = function () {};
      "development" !== 'production' && warn(
        "Failed watching path: \"" + expOrFn + "\" " +
        'Watcher only accepts simple dot-delimited paths. ' +
        'For full control, use a function instead.',
        vm
      );
    }
  }
  this.value = this.lazy
    ? undefined
    : this.get();
};

/**
 * Evaluate the getter, and re-collect dependencies.
 */
Watcher.prototype.get = function get () {
  pushTarget(this);
  var value;
  var vm = this.vm;
  try {
    value = this.getter.call(vm, vm);
  } catch (e) {
    if (this.user) {
      handleError(e, vm, ("getter for watcher \"" + (this.expression) + "\""));
    } else {
      throw e
    }
  } finally {
    // "touch" every property so they are all tracked as
    // dependencies for deep watching
    if (this.deep) {
      traverse(value);
    }
    popTarget();
    this.cleanupDeps();
  }
  return value
};

/**
 * Add a dependency to this directive.
 */
Watcher.prototype.addDep = function addDep (dep) {
  var id = dep.id;
  if (!this.newDepIds.has(id)) {
    this.newDepIds.add(id);
    this.newDeps.push(dep);
    if (!this.depIds.has(id)) {
      dep.addSub(this);
    }
  }
};

/**
 * Clean up for dependency collection.
 */
Watcher.prototype.cleanupDeps = function cleanupDeps () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    var dep = this$1.deps[i];
    if (!this$1.newDepIds.has(dep.id)) {
      dep.removeSub(this$1);
    }
  }
  var tmp = this.depIds;
  this.depIds = this.newDepIds;
  this.newDepIds = tmp;
  this.newDepIds.clear();
  tmp = this.deps;
  this.deps = this.newDeps;
  this.newDeps = tmp;
  this.newDeps.length = 0;
};

/**
 * Subscriber interface.
 * Will be called when a dependency changes.
 */
Watcher.prototype.update = function update () {
  /* istanbul ignore else */
  if (this.lazy) {
    this.dirty = true;
  } else if (this.sync) {
    this.run();
  } else {
    queueWatcher(this);
  }
};

/**
 * Scheduler job interface.
 * Will be called by the scheduler.
 */
Watcher.prototype.run = function run () {
  if (this.active) {
    var value = this.get();
    if (
      value !== this.value ||
      // Deep watchers and watchers on Object/Arrays should fire even
      // when the value is the same, because the value may
      // have mutated.
      isObject(value) ||
      this.deep
    ) {
      // set new value
      var oldValue = this.value;
      this.value = value;
      if (this.user) {
        try {
          this.cb.call(this.vm, value, oldValue);
        } catch (e) {
          handleError(e, this.vm, ("callback for watcher \"" + (this.expression) + "\""));
        }
      } else {
        this.cb.call(this.vm, value, oldValue);
      }
    }
  }
};

/**
 * Evaluate the value of the watcher.
 * This only gets called for lazy watchers.
 */
Watcher.prototype.evaluate = function evaluate () {
  this.value = this.get();
  this.dirty = false;
};

/**
 * Depend on all deps collected by this watcher.
 */
Watcher.prototype.depend = function depend () {
    var this$1 = this;

  var i = this.deps.length;
  while (i--) {
    this$1.deps[i].depend();
  }
};

/**
 * Remove self from all dependencies' subscriber list.
 */
Watcher.prototype.teardown = function teardown () {
    var this$1 = this;

  if (this.active) {
    // remove self from vm's watcher list
    // this is a somewhat expensive operation so we skip it
    // if the vm is being destroyed.
    if (!this.vm._isBeingDestroyed) {
      remove(this.vm._watchers, this);
    }
    var i = this.deps.length;
    while (i--) {
      this$1.deps[i].removeSub(this$1);
    }
    this.active = false;
  }
};

/*  */

var sharedPropertyDefinition = {
  enumerable: true,
  configurable: true,
  get: noop,
  set: noop
};

function proxy (target, sourceKey, key) {
  sharedPropertyDefinition.get = function proxyGetter () {
    return this[sourceKey][key]
  };
  sharedPropertyDefinition.set = function proxySetter (val) {
    this[sourceKey][key] = val;
  };
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function initState (vm) {
  vm._watchers = [];
  var opts = vm.$options;
  if (opts.props) { initProps(vm, opts.props); }
  if (opts.methods) { initMethods(vm, opts.methods); }
  if (opts.data) {
    initData(vm);
  } else {
    observe(vm._data = {}, true /* asRootData */);
  }
  if (opts.computed) { initComputed(vm, opts.computed); }
  if (opts.watch && opts.watch !== nativeWatch) {
    initWatch(vm, opts.watch);
  }
}

function initProps (vm, propsOptions) {
  var propsData = vm.$options.propsData || {};
  var props = vm._props = {};
  // cache prop keys so that future props updates can iterate using Array
  // instead of dynamic object key enumeration.
  var keys = vm.$options._propKeys = [];
  var isRoot = !vm.$parent;
  // root instance props should be converted
  if (!isRoot) {
    toggleObserving(false);
  }
  var loop = function ( key ) {
    keys.push(key);
    var value = validateProp(key, propsOptions, propsData, vm);
    /* istanbul ignore else */
    if (true) {
      var hyphenatedKey = hyphenate(key);
      if (isReservedAttribute(hyphenatedKey) ||
          config.isReservedAttr(hyphenatedKey)) {
        warn(
          ("\"" + hyphenatedKey + "\" is a reserved attribute and cannot be used as component prop."),
          vm
        );
      }
      defineReactive(props, key, value, function () {
        if (vm.$parent && !isUpdatingChildComponent) {
          warn(
            "Avoid mutating a prop directly since the value will be " +
            "overwritten whenever the parent component re-renders. " +
            "Instead, use a data or computed property based on the prop's " +
            "value. Prop being mutated: \"" + key + "\"",
            vm
          );
        }
      });
    } else {}
    // static props are already proxied on the component's prototype
    // during Vue.extend(). We only need to proxy props defined at
    // instantiation here.
    if (!(key in vm)) {
      proxy(vm, "_props", key);
    }
  };

  for (var key in propsOptions) loop( key );
  toggleObserving(true);
}

function initData (vm) {
  var data = vm.$options.data;
  data = vm._data = typeof data === 'function'
    ? getData(data, vm)
    : data || {};
  if (!isPlainObject(data)) {
    data = {};
    "development" !== 'production' && warn(
      'data functions should return an object:\n' +
      'https://vuejs.org/v2/guide/components.html#data-Must-Be-a-Function',
      vm
    );
  }
  // proxy data on instance
  var keys = Object.keys(data);
  var props = vm.$options.props;
  var methods = vm.$options.methods;
  var i = keys.length;
  while (i--) {
    var key = keys[i];
    if (true) {
      if (methods && hasOwn(methods, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a data property."),
          vm
        );
      }
    }
    if (props && hasOwn(props, key)) {
      "development" !== 'production' && warn(
        "The data property \"" + key + "\" is already declared as a prop. " +
        "Use prop default value instead.",
        vm
      );
    } else if (!isReserved(key)) {
      proxy(vm, "_data", key);
    }
  }
  // observe data
  observe(data, true /* asRootData */);
}

function getData (data, vm) {
  // #7573 disable dep collection when invoking data getters
  pushTarget();
  try {
    return data.call(vm, vm)
  } catch (e) {
    handleError(e, vm, "data()");
    return {}
  } finally {
    popTarget();
  }
}

var computedWatcherOptions = { lazy: true };

function initComputed (vm, computed) {
  // $flow-disable-line
  var watchers = vm._computedWatchers = Object.create(null);
  // computed properties are just getters during SSR
  var isSSR = isServerRendering();

  for (var key in computed) {
    var userDef = computed[key];
    var getter = typeof userDef === 'function' ? userDef : userDef.get;
    if ("development" !== 'production' && getter == null) {
      warn(
        ("Getter is missing for computed property \"" + key + "\"."),
        vm
      );
    }

    if (!isSSR) {
      // create internal watcher for the computed property.
      watchers[key] = new Watcher(
        vm,
        getter || noop,
        noop,
        computedWatcherOptions
      );
    }

    // component-defined computed properties are already defined on the
    // component prototype. We only need to define computed properties defined
    // at instantiation here.
    if (!(key in vm)) {
      defineComputed(vm, key, userDef);
    } else if (true) {
      if (key in vm.$data) {
        warn(("The computed property \"" + key + "\" is already defined in data."), vm);
      } else if (vm.$options.props && key in vm.$options.props) {
        warn(("The computed property \"" + key + "\" is already defined as a prop."), vm);
      }
    }
  }
}

function defineComputed (
  target,
  key,
  userDef
) {
  var shouldCache = !isServerRendering();
  if (typeof userDef === 'function') {
    sharedPropertyDefinition.get = shouldCache
      ? createComputedGetter(key)
      : userDef;
    sharedPropertyDefinition.set = noop;
  } else {
    sharedPropertyDefinition.get = userDef.get
      ? shouldCache && userDef.cache !== false
        ? createComputedGetter(key)
        : userDef.get
      : noop;
    sharedPropertyDefinition.set = userDef.set
      ? userDef.set
      : noop;
  }
  if ("development" !== 'production' &&
      sharedPropertyDefinition.set === noop) {
    sharedPropertyDefinition.set = function () {
      warn(
        ("Computed property \"" + key + "\" was assigned to but it has no setter."),
        this
      );
    };
  }
  Object.defineProperty(target, key, sharedPropertyDefinition);
}

function createComputedGetter (key) {
  return function computedGetter () {
    var watcher = this._computedWatchers && this._computedWatchers[key];
    if (watcher) {
      if (watcher.dirty) {
        watcher.evaluate();
      }
      if (Dep.target) {
        watcher.depend();
      }
      return watcher.value
    }
  }
}

function initMethods (vm, methods) {
  var props = vm.$options.props;
  for (var key in methods) {
    if (true) {
      if (methods[key] == null) {
        warn(
          "Method \"" + key + "\" has an undefined value in the component definition. " +
          "Did you reference the function correctly?",
          vm
        );
      }
      if (props && hasOwn(props, key)) {
        warn(
          ("Method \"" + key + "\" has already been defined as a prop."),
          vm
        );
      }
      if ((key in vm) && isReserved(key)) {
        warn(
          "Method \"" + key + "\" conflicts with an existing Vue instance method. " +
          "Avoid defining component methods that start with _ or $."
        );
      }
    }
    vm[key] = methods[key] == null ? noop : bind(methods[key], vm);
  }
}

function initWatch (vm, watch) {
  for (var key in watch) {
    var handler = watch[key];
    if (Array.isArray(handler)) {
      for (var i = 0; i < handler.length; i++) {
        createWatcher(vm, key, handler[i]);
      }
    } else {
      createWatcher(vm, key, handler);
    }
  }
}

function createWatcher (
  vm,
  expOrFn,
  handler,
  options
) {
  if (isPlainObject(handler)) {
    options = handler;
    handler = handler.handler;
  }
  if (typeof handler === 'string') {
    handler = vm[handler];
  }
  return vm.$watch(expOrFn, handler, options)
}

function stateMixin (Vue) {
  // flow somehow has problems with directly declared definition object
  // when using Object.defineProperty, so we have to procedurally build up
  // the object here.
  var dataDef = {};
  dataDef.get = function () { return this._data };
  var propsDef = {};
  propsDef.get = function () { return this._props };
  if (true) {
    dataDef.set = function (newData) {
      warn(
        'Avoid replacing instance root $data. ' +
        'Use nested data properties instead.',
        this
      );
    };
    propsDef.set = function () {
      warn("$props is readonly.", this);
    };
  }
  Object.defineProperty(Vue.prototype, '$data', dataDef);
  Object.defineProperty(Vue.prototype, '$props', propsDef);

  Vue.prototype.$set = set;
  Vue.prototype.$delete = del;

  Vue.prototype.$watch = function (
    expOrFn,
    cb,
    options
  ) {
    var vm = this;
    if (isPlainObject(cb)) {
      return createWatcher(vm, expOrFn, cb, options)
    }
    options = options || {};
    options.user = true;
    var watcher = new Watcher(vm, expOrFn, cb, options);
    if (options.immediate) {
      cb.call(vm, watcher.value);
    }
    return function unwatchFn () {
      watcher.teardown();
    }
  };
}

/*  */

function initProvide (vm) {
  var provide = vm.$options.provide;
  if (provide) {
    vm._provided = typeof provide === 'function'
      ? provide.call(vm)
      : provide;
  }
}

function initInjections (vm) {
  var result = resolveInject(vm.$options.inject, vm);
  if (result) {
    toggleObserving(false);
    Object.keys(result).forEach(function (key) {
      /* istanbul ignore else */
      if (true) {
        defineReactive(vm, key, result[key], function () {
          warn(
            "Avoid mutating an injected value directly since the changes will be " +
            "overwritten whenever the provided component re-renders. " +
            "injection being mutated: \"" + key + "\"",
            vm
          );
        });
      } else {}
    });
    toggleObserving(true);
  }
}

function resolveInject (inject, vm) {
  if (inject) {
    // inject is :any because flow is not smart enough to figure out cached
    var result = Object.create(null);
    var keys = hasSymbol
      ? Reflect.ownKeys(inject).filter(function (key) {
        /* istanbul ignore next */
        return Object.getOwnPropertyDescriptor(inject, key).enumerable
      })
      : Object.keys(inject);

    for (var i = 0; i < keys.length; i++) {
      var key = keys[i];
      var provideKey = inject[key].from;
      var source = vm;
      while (source) {
        if (source._provided && hasOwn(source._provided, provideKey)) {
          result[key] = source._provided[provideKey];
          break
        }
        source = source.$parent;
      }
      if (!source) {
        if ('default' in inject[key]) {
          var provideDefault = inject[key].default;
          result[key] = typeof provideDefault === 'function'
            ? provideDefault.call(vm)
            : provideDefault;
        } else if (true) {
          warn(("Injection \"" + key + "\" not found"), vm);
        }
      }
    }
    return result
  }
}

/*  */

/**
 * Runtime helper for rendering v-for lists.
 */
function renderList (
  val,
  render
) {
  var ret, i, l, keys, key;
  if (Array.isArray(val) || typeof val === 'string') {
    ret = new Array(val.length);
    for (i = 0, l = val.length; i < l; i++) {
      ret[i] = render(val[i], i);
    }
  } else if (typeof val === 'number') {
    ret = new Array(val);
    for (i = 0; i < val; i++) {
      ret[i] = render(i + 1, i);
    }
  } else if (isObject(val)) {
    keys = Object.keys(val);
    ret = new Array(keys.length);
    for (i = 0, l = keys.length; i < l; i++) {
      key = keys[i];
      ret[i] = render(val[key], key, i);
    }
  }
  if (isDef(ret)) {
    (ret)._isVList = true;
  }
  return ret
}

/*  */

/**
 * Runtime helper for rendering <slot>
 */
function renderSlot (
  name,
  fallback,
  props,
  bindObject
) {
  var scopedSlotFn = this.$scopedSlots[name];
  var nodes;
  if (scopedSlotFn) { // scoped slot
    props = props || {};
    if (bindObject) {
      if ("development" !== 'production' && !isObject(bindObject)) {
        warn(
          'slot v-bind without argument expects an Object',
          this
        );
      }
      props = extend(extend({}, bindObject), props);
    }
    nodes = scopedSlotFn(props) || fallback;
  } else {
    var slotNodes = this.$slots[name];
    // warn duplicate slot usage
    if (slotNodes) {
      if ("development" !== 'production' && slotNodes._rendered) {
        warn(
          "Duplicate presence of slot \"" + name + "\" found in the same render tree " +
          "- this will likely cause render errors.",
          this
        );
      }
      slotNodes._rendered = true;
    }
    nodes = slotNodes || fallback;
  }

  var target = props && props.slot;
  if (target) {
    return this.$createElement('template', { slot: target }, nodes)
  } else {
    return nodes
  }
}

/*  */

/**
 * Runtime helper for resolving filters
 */
function resolveFilter (id) {
  return resolveAsset(this.$options, 'filters', id, true) || identity
}

/*  */

function isKeyNotMatch (expect, actual) {
  if (Array.isArray(expect)) {
    return expect.indexOf(actual) === -1
  } else {
    return expect !== actual
  }
}

/**
 * Runtime helper for checking keyCodes from config.
 * exposed as Vue.prototype._k
 * passing in eventKeyName as last argument separately for backwards compat
 */
function checkKeyCodes (
  eventKeyCode,
  key,
  builtInKeyCode,
  eventKeyName,
  builtInKeyName
) {
  var mappedKeyCode = config.keyCodes[key] || builtInKeyCode;
  if (builtInKeyName && eventKeyName && !config.keyCodes[key]) {
    return isKeyNotMatch(builtInKeyName, eventKeyName)
  } else if (mappedKeyCode) {
    return isKeyNotMatch(mappedKeyCode, eventKeyCode)
  } else if (eventKeyName) {
    return hyphenate(eventKeyName) !== key
  }
}

/*  */

/**
 * Runtime helper for merging v-bind="object" into a VNode's data.
 */
function bindObjectProps (
  data,
  tag,
  value,
  asProp,
  isSync
) {
  if (value) {
    if (!isObject(value)) {
      "development" !== 'production' && warn(
        'v-bind without argument expects an Object or Array value',
        this
      );
    } else {
      if (Array.isArray(value)) {
        value = toObject(value);
      }
      var hash;
      var loop = function ( key ) {
        if (
          key === 'class' ||
          key === 'style' ||
          isReservedAttribute(key)
        ) {
          hash = data;
        } else {
          var type = data.attrs && data.attrs.type;
          hash = asProp || config.mustUseProp(tag, type, key)
            ? data.domProps || (data.domProps = {})
            : data.attrs || (data.attrs = {});
        }
        if (!(key in hash)) {
          hash[key] = value[key];

          if (isSync) {
            var on = data.on || (data.on = {});
            on[("update:" + key)] = function ($event) {
              value[key] = $event;
            };
          }
        }
      };

      for (var key in value) loop( key );
    }
  }
  return data
}

/*  */

/**
 * Runtime helper for rendering static trees.
 */
function renderStatic (
  index,
  isInFor
) {
  var cached = this._staticTrees || (this._staticTrees = []);
  var tree = cached[index];
  // if has already-rendered static tree and not inside v-for,
  // we can reuse the same tree.
  if (tree && !isInFor) {
    return tree
  }
  // otherwise, render a fresh tree.
  tree = cached[index] = this.$options.staticRenderFns[index].call(
    this._renderProxy,
    null,
    this // for render fns generated for functional component templates
  );
  markStatic(tree, ("__static__" + index), false);
  return tree
}

/**
 * Runtime helper for v-once.
 * Effectively it means marking the node as static with a unique key.
 */
function markOnce (
  tree,
  index,
  key
) {
  markStatic(tree, ("__once__" + index + (key ? ("_" + key) : "")), true);
  return tree
}

function markStatic (
  tree,
  key,
  isOnce
) {
  if (Array.isArray(tree)) {
    for (var i = 0; i < tree.length; i++) {
      if (tree[i] && typeof tree[i] !== 'string') {
        markStaticNode(tree[i], (key + "_" + i), isOnce);
      }
    }
  } else {
    markStaticNode(tree, key, isOnce);
  }
}

function markStaticNode (node, key, isOnce) {
  node.isStatic = true;
  node.key = key;
  node.isOnce = isOnce;
}

/*  */

function bindObjectListeners (data, value) {
  if (value) {
    if (!isPlainObject(value)) {
      "development" !== 'production' && warn(
        'v-on without argument expects an Object value',
        this
      );
    } else {
      var on = data.on = data.on ? extend({}, data.on) : {};
      for (var key in value) {
        var existing = on[key];
        var ours = value[key];
        on[key] = existing ? [].concat(existing, ours) : ours;
      }
    }
  }
  return data
}

/*  */

function installRenderHelpers (target) {
  target._o = markOnce;
  target._n = toNumber;
  target._s = toString;
  target._l = renderList;
  target._t = renderSlot;
  target._q = looseEqual;
  target._i = looseIndexOf;
  target._m = renderStatic;
  target._f = resolveFilter;
  target._k = checkKeyCodes;
  target._b = bindObjectProps;
  target._v = createTextVNode;
  target._e = createEmptyVNode;
  target._u = resolveScopedSlots;
  target._g = bindObjectListeners;
}

/*  */

function FunctionalRenderContext (
  data,
  props,
  children,
  parent,
  Ctor
) {
  var options = Ctor.options;
  // ensure the createElement function in functional components
  // gets a unique context - this is necessary for correct named slot check
  var contextVm;
  if (hasOwn(parent, '_uid')) {
    contextVm = Object.create(parent);
    // $flow-disable-line
    contextVm._original = parent;
  } else {
    // the context vm passed in is a functional context as well.
    // in this case we want to make sure we are able to get a hold to the
    // real context instance.
    contextVm = parent;
    // $flow-disable-line
    parent = parent._original;
  }
  var isCompiled = isTrue(options._compiled);
  var needNormalization = !isCompiled;

  this.data = data;
  this.props = props;
  this.children = children;
  this.parent = parent;
  this.listeners = data.on || emptyObject;
  this.injections = resolveInject(options.inject, parent);
  this.slots = function () { return resolveSlots(children, parent); };

  // support for compiled functional template
  if (isCompiled) {
    // exposing $options for renderStatic()
    this.$options = options;
    // pre-resolve slots for renderSlot()
    this.$slots = this.slots();
    this.$scopedSlots = data.scopedSlots || emptyObject;
  }

  if (options._scopeId) {
    this._c = function (a, b, c, d) {
      var vnode = createElement(contextVm, a, b, c, d, needNormalization);
      if (vnode && !Array.isArray(vnode)) {
        vnode.fnScopeId = options._scopeId;
        vnode.fnContext = parent;
      }
      return vnode
    };
  } else {
    this._c = function (a, b, c, d) { return createElement(contextVm, a, b, c, d, needNormalization); };
  }
}

installRenderHelpers(FunctionalRenderContext.prototype);

function createFunctionalComponent (
  Ctor,
  propsData,
  data,
  contextVm,
  children
) {
  var options = Ctor.options;
  var props = {};
  var propOptions = options.props;
  if (isDef(propOptions)) {
    for (var key in propOptions) {
      props[key] = validateProp(key, propOptions, propsData || emptyObject);
    }
  } else {
    if (isDef(data.attrs)) { mergeProps(props, data.attrs); }
    if (isDef(data.props)) { mergeProps(props, data.props); }
  }

  var renderContext = new FunctionalRenderContext(
    data,
    props,
    children,
    contextVm,
    Ctor
  );

  var vnode = options.render.call(null, renderContext._c, renderContext);

  if (vnode instanceof VNode) {
    return cloneAndMarkFunctionalResult(vnode, data, renderContext.parent, options)
  } else if (Array.isArray(vnode)) {
    var vnodes = normalizeChildren(vnode) || [];
    var res = new Array(vnodes.length);
    for (var i = 0; i < vnodes.length; i++) {
      res[i] = cloneAndMarkFunctionalResult(vnodes[i], data, renderContext.parent, options);
    }
    return res
  }
}

function cloneAndMarkFunctionalResult (vnode, data, contextVm, options) {
  // #7817 clone node before setting fnContext, otherwise if the node is reused
  // (e.g. it was from a cached normal slot) the fnContext causes named slots
  // that should not be matched to match.
  var clone = cloneVNode(vnode);
  clone.fnContext = contextVm;
  clone.fnOptions = options;
  if (data.slot) {
    (clone.data || (clone.data = {})).slot = data.slot;
  }
  return clone
}

function mergeProps (to, from) {
  for (var key in from) {
    to[camelize(key)] = from[key];
  }
}

/*  */




// Register the component hook to weex native render engine.
// The hook will be triggered by native, not javascript.


// Updates the state of the component to weex native render engine.

/*  */

// https://github.com/Hanks10100/weex-native-directive/tree/master/component

// listening on native callback

/*  */

/*  */

// inline hooks to be invoked on component VNodes during patch
var componentVNodeHooks = {
  init: function init (
    vnode,
    hydrating,
    parentElm,
    refElm
  ) {
    if (
      vnode.componentInstance &&
      !vnode.componentInstance._isDestroyed &&
      vnode.data.keepAlive
    ) {
      // kept-alive components, treat as a patch
      var mountedNode = vnode; // work around flow
      componentVNodeHooks.prepatch(mountedNode, mountedNode);
    } else {
      var child = vnode.componentInstance = createComponentInstanceForVnode(
        vnode,
        activeInstance,
        parentElm,
        refElm
      );
      child.$mount(hydrating ? vnode.elm : undefined, hydrating);
    }
  },

  prepatch: function prepatch (oldVnode, vnode) {
    var options = vnode.componentOptions;
    var child = vnode.componentInstance = oldVnode.componentInstance;
    updateChildComponent(
      child,
      options.propsData, // updated props
      options.listeners, // updated listeners
      vnode, // new parent vnode
      options.children // new children
    );
  },

  insert: function insert (vnode) {
    var context = vnode.context;
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isMounted) {
      componentInstance._isMounted = true;
      callHook(componentInstance, 'mounted');
    }
    if (vnode.data.keepAlive) {
      if (context._isMounted) {
        // vue-router#1212
        // During updates, a kept-alive component's child components may
        // change, so directly walking the tree here may call activated hooks
        // on incorrect children. Instead we push them into a queue which will
        // be processed after the whole patch process ended.
        queueActivatedComponent(componentInstance);
      } else {
        activateChildComponent(componentInstance, true /* direct */);
      }
    }
  },

  destroy: function destroy (vnode) {
    var componentInstance = vnode.componentInstance;
    if (!componentInstance._isDestroyed) {
      if (!vnode.data.keepAlive) {
        componentInstance.$destroy();
      } else {
        deactivateChildComponent(componentInstance, true /* direct */);
      }
    }
  }
};

var hooksToMerge = Object.keys(componentVNodeHooks);

function createComponent (
  Ctor,
  data,
  context,
  children,
  tag
) {
  if (isUndef(Ctor)) {
    return
  }

  var baseCtor = context.$options._base;

  // plain options object: turn it into a constructor
  if (isObject(Ctor)) {
    Ctor = baseCtor.extend(Ctor);
  }

  // if at this stage it's not a constructor or an async component factory,
  // reject.
  if (typeof Ctor !== 'function') {
    if (true) {
      warn(("Invalid Component definition: " + (String(Ctor))), context);
    }
    return
  }

  // async component
  var asyncFactory;
  if (isUndef(Ctor.cid)) {
    asyncFactory = Ctor;
    Ctor = resolveAsyncComponent(asyncFactory, baseCtor, context);
    if (Ctor === undefined) {
      // return a placeholder node for async component, which is rendered
      // as a comment node but preserves all the raw information for the node.
      // the information will be used for async server-rendering and hydration.
      return createAsyncPlaceholder(
        asyncFactory,
        data,
        context,
        children,
        tag
      )
    }
  }

  data = data || {};

  // resolve constructor options in case global mixins are applied after
  // component constructor creation
  resolveConstructorOptions(Ctor);

  // transform component v-model data into props & events
  if (isDef(data.model)) {
    transformModel(Ctor.options, data);
  }

  // extract props
  var propsData = extractPropsFromVNodeData(data, Ctor, tag);

  // functional component
  if (isTrue(Ctor.options.functional)) {
    return createFunctionalComponent(Ctor, propsData, data, context, children)
  }

  // extract listeners, since these needs to be treated as
  // child component listeners instead of DOM listeners
  var listeners = data.on;
  // replace with listeners with .native modifier
  // so it gets processed during parent component patch.
  data.on = data.nativeOn;

  if (isTrue(Ctor.options.abstract)) {
    // abstract components do not keep anything
    // other than props & listeners & slot

    // work around flow
    var slot = data.slot;
    data = {};
    if (slot) {
      data.slot = slot;
    }
  }

  // install component management hooks onto the placeholder node
  installComponentHooks(data);

  // return a placeholder vnode
  var name = Ctor.options.name || tag;
  var vnode = new VNode(
    ("vue-component-" + (Ctor.cid) + (name ? ("-" + name) : '')),
    data, undefined, undefined, undefined, context,
    { Ctor: Ctor, propsData: propsData, listeners: listeners, tag: tag, children: children },
    asyncFactory
  );

  // Weex specific: invoke recycle-list optimized @render function for
  // extracting cell-slot template.
  // https://github.com/Hanks10100/weex-native-directive/tree/master/component
  /* istanbul ignore if */
  return vnode
}

function createComponentInstanceForVnode (
  vnode, // we know it's MountedComponentVNode but flow doesn't
  parent, // activeInstance in lifecycle state
  parentElm,
  refElm
) {
  var options = {
    _isComponent: true,
    parent: parent,
    _parentVnode: vnode,
    _parentElm: parentElm || null,
    _refElm: refElm || null
  };
  // check inline-template render functions
  var inlineTemplate = vnode.data.inlineTemplate;
  if (isDef(inlineTemplate)) {
    options.render = inlineTemplate.render;
    options.staticRenderFns = inlineTemplate.staticRenderFns;
  }
  return new vnode.componentOptions.Ctor(options)
}

function installComponentHooks (data) {
  var hooks = data.hook || (data.hook = {});
  for (var i = 0; i < hooksToMerge.length; i++) {
    var key = hooksToMerge[i];
    hooks[key] = componentVNodeHooks[key];
  }
}

// transform component v-model info (value and callback) into
// prop and event handler respectively.
function transformModel (options, data) {
  var prop = (options.model && options.model.prop) || 'value';
  var event = (options.model && options.model.event) || 'input';(data.props || (data.props = {}))[prop] = data.model.value;
  var on = data.on || (data.on = {});
  if (isDef(on[event])) {
    on[event] = [data.model.callback].concat(on[event]);
  } else {
    on[event] = data.model.callback;
  }
}

/*  */

var SIMPLE_NORMALIZE = 1;
var ALWAYS_NORMALIZE = 2;

// wrapper function for providing a more flexible interface
// without getting yelled at by flow
function createElement (
  context,
  tag,
  data,
  children,
  normalizationType,
  alwaysNormalize
) {
  if (Array.isArray(data) || isPrimitive(data)) {
    normalizationType = children;
    children = data;
    data = undefined;
  }
  if (isTrue(alwaysNormalize)) {
    normalizationType = ALWAYS_NORMALIZE;
  }
  return _createElement(context, tag, data, children, normalizationType)
}

function _createElement (
  context,
  tag,
  data,
  children,
  normalizationType
) {
  if (isDef(data) && isDef((data).__ob__)) {
    "development" !== 'production' && warn(
      "Avoid using observed data object as vnode data: " + (JSON.stringify(data)) + "\n" +
      'Always create fresh vnode data objects in each render!',
      context
    );
    return createEmptyVNode()
  }
  // object syntax in v-bind
  if (isDef(data) && isDef(data.is)) {
    tag = data.is;
  }
  if (!tag) {
    // in case of component :is set to falsy value
    return createEmptyVNode()
  }
  // warn against non-primitive key
  if ("development" !== 'production' &&
    isDef(data) && isDef(data.key) && !isPrimitive(data.key)
  ) {
    {
      warn(
        'Avoid using non-primitive value as key, ' +
        'use string/number value instead.',
        context
      );
    }
  }
  // support single function children as default scoped slot
  if (Array.isArray(children) &&
    typeof children[0] === 'function'
  ) {
    data = data || {};
    data.scopedSlots = { default: children[0] };
    children.length = 0;
  }
  if (normalizationType === ALWAYS_NORMALIZE) {
    children = normalizeChildren(children);
  } else if (normalizationType === SIMPLE_NORMALIZE) {
    children = simpleNormalizeChildren(children);
  }
  var vnode, ns;
  if (typeof tag === 'string') {
    var Ctor;
    ns = (context.$vnode && context.$vnode.ns) || config.getTagNamespace(tag);
    if (config.isReservedTag(tag)) {
      // platform built-in elements
      vnode = new VNode(
        config.parsePlatformTagName(tag), data, children,
        undefined, undefined, context
      );
    } else if (isDef(Ctor = resolveAsset(context.$options, 'components', tag))) {
      // component
      vnode = createComponent(Ctor, data, context, children, tag);
    } else {
      // unknown or unlisted namespaced elements
      // check at runtime because it may get assigned a namespace when its
      // parent normalizes children
      vnode = new VNode(
        tag, data, children,
        undefined, undefined, context
      );
    }
  } else {
    // direct component options / constructor
    vnode = createComponent(tag, data, context, children);
  }
  if (Array.isArray(vnode)) {
    return vnode
  } else if (isDef(vnode)) {
    if (isDef(ns)) { applyNS(vnode, ns); }
    if (isDef(data)) { registerDeepBindings(data); }
    return vnode
  } else {
    return createEmptyVNode()
  }
}

function applyNS (vnode, ns, force) {
  vnode.ns = ns;
  if (vnode.tag === 'foreignObject') {
    // use default namespace inside foreignObject
    ns = undefined;
    force = true;
  }
  if (isDef(vnode.children)) {
    for (var i = 0, l = vnode.children.length; i < l; i++) {
      var child = vnode.children[i];
      if (isDef(child.tag) && (
        isUndef(child.ns) || (isTrue(force) && child.tag !== 'svg'))) {
        applyNS(child, ns, force);
      }
    }
  }
}

// ref #5318
// necessary to ensure parent re-render when deep bindings like :style and
// :class are used on slot nodes
function registerDeepBindings (data) {
  if (isObject(data.style)) {
    traverse(data.style);
  }
  if (isObject(data.class)) {
    traverse(data.class);
  }
}

/*  */

function initRender (vm) {
  vm._vnode = null; // the root of the child tree
  vm._staticTrees = null; // v-once cached trees
  var options = vm.$options;
  var parentVnode = vm.$vnode = options._parentVnode; // the placeholder node in parent tree
  var renderContext = parentVnode && parentVnode.context;
  vm.$slots = resolveSlots(options._renderChildren, renderContext);
  vm.$scopedSlots = emptyObject;
  // bind the createElement fn to this instance
  // so that we get proper render context inside it.
  // args order: tag, data, children, normalizationType, alwaysNormalize
  // internal version is used by render functions compiled from templates
  vm._c = function (a, b, c, d) { return createElement(vm, a, b, c, d, false); };
  // normalization is always applied for the public version, used in
  // user-written render functions.
  vm.$createElement = function (a, b, c, d) { return createElement(vm, a, b, c, d, true); };

  // $attrs & $listeners are exposed for easier HOC creation.
  // they need to be reactive so that HOCs using them are always updated
  var parentData = parentVnode && parentVnode.data;

  /* istanbul ignore else */
  if (true) {
    defineReactive(vm, '$attrs', parentData && parentData.attrs || emptyObject, function () {
      !isUpdatingChildComponent && warn("$attrs is readonly.", vm);
    }, true);
    defineReactive(vm, '$listeners', options._parentListeners || emptyObject, function () {
      !isUpdatingChildComponent && warn("$listeners is readonly.", vm);
    }, true);
  } else {}
}

function renderMixin (Vue) {
  // install runtime convenience helpers
  installRenderHelpers(Vue.prototype);

  Vue.prototype.$nextTick = function (fn) {
    return nextTick(fn, this)
  };

  Vue.prototype._render = function () {
    var vm = this;
    var ref = vm.$options;
    var render = ref.render;
    var _parentVnode = ref._parentVnode;

    // reset _rendered flag on slots for duplicate slot check
    if (true) {
      for (var key in vm.$slots) {
        // $flow-disable-line
        vm.$slots[key]._rendered = false;
      }
    }

    if (_parentVnode) {
      vm.$scopedSlots = _parentVnode.data.scopedSlots || emptyObject;
    }

    // set parent vnode. this allows render functions to have access
    // to the data on the placeholder node.
    vm.$vnode = _parentVnode;
    // render self
    var vnode;
    try {
      vnode = render.call(vm._renderProxy, vm.$createElement);
    } catch (e) {
      handleError(e, vm, "render");
      // return error render result,
      // or previous vnode to prevent render error causing blank component
      /* istanbul ignore else */
      if (true) {
        if (vm.$options.renderError) {
          try {
            vnode = vm.$options.renderError.call(vm._renderProxy, vm.$createElement, e);
          } catch (e) {
            handleError(e, vm, "renderError");
            vnode = vm._vnode;
          }
        } else {
          vnode = vm._vnode;
        }
      } else {}
    }
    // return empty vnode in case the render function errored out
    if (!(vnode instanceof VNode)) {
      if ("development" !== 'production' && Array.isArray(vnode)) {
        warn(
          'Multiple root nodes returned from render function. Render function ' +
          'should return a single root node.',
          vm
        );
      }
      vnode = createEmptyVNode();
    }
    // set parent
    vnode.parent = _parentVnode;
    return vnode
  };
}

/*  */

var uid$3 = 0;

function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    var vm = this;
    // a uid
    vm._uid = uid$3++;

    var startTag, endTag;
    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      startTag = "vue-perf-start:" + (vm._uid);
      endTag = "vue-perf-end:" + (vm._uid);
      mark(startTag);
    }

    // a flag to avoid this being observed
    vm._isVue = true;
    // merge options
    if (options && options._isComponent) {
      // optimize internal component instantiation
      // since dynamic options merging is pretty slow, and none of the
      // internal component options needs special treatment.
      initInternalComponent(vm, options);
    } else {
      vm.$options = mergeOptions(
        resolveConstructorOptions(vm.constructor),
        options || {},
        vm
      );
    }
    /* istanbul ignore else */
    if (true) {
      initProxy(vm);
    } else {}
    // expose real self
    vm._self = vm;
    initLifecycle(vm);
    initEvents(vm);
    initRender(vm);
    callHook(vm, 'beforeCreate');
    initInjections(vm); // resolve injections before data/props
    initState(vm);
    initProvide(vm); // resolve provide after data/props
    callHook(vm, 'created');

    /* istanbul ignore if */
    if ("development" !== 'production' && config.performance && mark) {
      vm._name = formatComponentName(vm, false);
      mark(endTag);
      measure(("vue " + (vm._name) + " init"), startTag, endTag);
    }

    if (vm.$options.el) {
      vm.$mount(vm.$options.el);
    }
  };
}

function initInternalComponent (vm, options) {
  var opts = vm.$options = Object.create(vm.constructor.options);
  // doing this because it's faster than dynamic enumeration.
  var parentVnode = options._parentVnode;
  opts.parent = options.parent;
  opts._parentVnode = parentVnode;
  opts._parentElm = options._parentElm;
  opts._refElm = options._refElm;

  var vnodeComponentOptions = parentVnode.componentOptions;
  opts.propsData = vnodeComponentOptions.propsData;
  opts._parentListeners = vnodeComponentOptions.listeners;
  opts._renderChildren = vnodeComponentOptions.children;
  opts._componentTag = vnodeComponentOptions.tag;

  if (options.render) {
    opts.render = options.render;
    opts.staticRenderFns = options.staticRenderFns;
  }
}

function resolveConstructorOptions (Ctor) {
  var options = Ctor.options;
  if (Ctor.super) {
    var superOptions = resolveConstructorOptions(Ctor.super);
    var cachedSuperOptions = Ctor.superOptions;
    if (superOptions !== cachedSuperOptions) {
      // super option changed,
      // need to resolve new options.
      Ctor.superOptions = superOptions;
      // check if there are any late-modified/attached options (#4976)
      var modifiedOptions = resolveModifiedOptions(Ctor);
      // update base extend options
      if (modifiedOptions) {
        extend(Ctor.extendOptions, modifiedOptions);
      }
      options = Ctor.options = mergeOptions(superOptions, Ctor.extendOptions);
      if (options.name) {
        options.components[options.name] = Ctor;
      }
    }
  }
  return options
}

function resolveModifiedOptions (Ctor) {
  var modified;
  var latest = Ctor.options;
  var extended = Ctor.extendOptions;
  var sealed = Ctor.sealedOptions;
  for (var key in latest) {
    if (latest[key] !== sealed[key]) {
      if (!modified) { modified = {}; }
      modified[key] = dedupe(latest[key], extended[key], sealed[key]);
    }
  }
  return modified
}

function dedupe (latest, extended, sealed) {
  // compare latest and sealed to ensure lifecycle hooks won't be duplicated
  // between merges
  if (Array.isArray(latest)) {
    var res = [];
    sealed = Array.isArray(sealed) ? sealed : [sealed];
    extended = Array.isArray(extended) ? extended : [extended];
    for (var i = 0; i < latest.length; i++) {
      // push original options and not sealed options to exclude duplicated options
      if (extended.indexOf(latest[i]) >= 0 || sealed.indexOf(latest[i]) < 0) {
        res.push(latest[i]);
      }
    }
    return res
  } else {
    return latest
  }
}

function Vue (options) {
  if ("development" !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword');
  }
  this._init(options);
}

initMixin(Vue);
stateMixin(Vue);
eventsMixin(Vue);
lifecycleMixin(Vue);
renderMixin(Vue);

/*  */

function initUse (Vue) {
  Vue.use = function (plugin) {
    var installedPlugins = (this._installedPlugins || (this._installedPlugins = []));
    if (installedPlugins.indexOf(plugin) > -1) {
      return this
    }

    // additional parameters
    var args = toArray(arguments, 1);
    args.unshift(this);
    if (typeof plugin.install === 'function') {
      plugin.install.apply(plugin, args);
    } else if (typeof plugin === 'function') {
      plugin.apply(null, args);
    }
    installedPlugins.push(plugin);
    return this
  };
}

/*  */

function initMixin$1 (Vue) {
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin);
    return this
  };
}

/*  */

function initExtend (Vue) {
  /**
   * Each instance constructor, including Vue, has a unique
   * cid. This enables us to create wrapped "child
   * constructors" for prototypal inheritance and cache them.
   */
  Vue.cid = 0;
  var cid = 1;

  /**
   * Class inheritance
   */
  Vue.extend = function (extendOptions) {
    extendOptions = extendOptions || {};
    var Super = this;
    var SuperId = Super.cid;
    var cachedCtors = extendOptions._Ctor || (extendOptions._Ctor = {});
    if (cachedCtors[SuperId]) {
      return cachedCtors[SuperId]
    }

    var name = extendOptions.name || Super.options.name;
    if ("development" !== 'production' && name) {
      validateComponentName(name);
    }

    var Sub = function VueComponent (options) {
      this._init(options);
    };
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.cid = cid++;
    Sub.options = mergeOptions(
      Super.options,
      extendOptions
    );
    Sub['super'] = Super;

    // For props and computed properties, we define the proxy getters on
    // the Vue instances at extension time, on the extended prototype. This
    // avoids Object.defineProperty calls for each instance created.
    if (Sub.options.props) {
      initProps$1(Sub);
    }
    if (Sub.options.computed) {
      initComputed$1(Sub);
    }

    // allow further extension/mixin/plugin usage
    Sub.extend = Super.extend;
    Sub.mixin = Super.mixin;
    Sub.use = Super.use;

    // create asset registers, so extended classes
    // can have their private assets too.
    ASSET_TYPES.forEach(function (type) {
      Sub[type] = Super[type];
    });
    // enable recursive self-lookup
    if (name) {
      Sub.options.components[name] = Sub;
    }

    // keep a reference to the super options at extension time.
    // later at instantiation we can check if Super's options have
    // been updated.
    Sub.superOptions = Super.options;
    Sub.extendOptions = extendOptions;
    Sub.sealedOptions = extend({}, Sub.options);

    // cache constructor
    cachedCtors[SuperId] = Sub;
    return Sub
  };
}

function initProps$1 (Comp) {
  var props = Comp.options.props;
  for (var key in props) {
    proxy(Comp.prototype, "_props", key);
  }
}

function initComputed$1 (Comp) {
  var computed = Comp.options.computed;
  for (var key in computed) {
    defineComputed(Comp.prototype, key, computed[key]);
  }
}

/*  */

function initAssetRegisters (Vue) {
  /**
   * Create asset registration methods.
   */
  ASSET_TYPES.forEach(function (type) {
    Vue[type] = function (
      id,
      definition
    ) {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if ("development" !== 'production' && type === 'component') {
          validateComponentName(id);
        }
        if (type === 'component' && isPlainObject(definition)) {
          definition.name = definition.name || id;
          definition = this.options._base.extend(definition);
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition };
        }
        this.options[type + 's'][id] = definition;
        return definition
      }
    };
  });
}

/*  */

function getComponentName (opts) {
  return opts && (opts.Ctor.options.name || opts.tag)
}

function matches (pattern, name) {
  if (Array.isArray(pattern)) {
    return pattern.indexOf(name) > -1
  } else if (typeof pattern === 'string') {
    return pattern.split(',').indexOf(name) > -1
  } else if (isRegExp(pattern)) {
    return pattern.test(name)
  }
  /* istanbul ignore next */
  return false
}

function pruneCache (keepAliveInstance, filter) {
  var cache = keepAliveInstance.cache;
  var keys = keepAliveInstance.keys;
  var _vnode = keepAliveInstance._vnode;
  for (var key in cache) {
    var cachedNode = cache[key];
    if (cachedNode) {
      var name = getComponentName(cachedNode.componentOptions);
      if (name && !filter(name)) {
        pruneCacheEntry(cache, key, keys, _vnode);
      }
    }
  }
}

function pruneCacheEntry (
  cache,
  key,
  keys,
  current
) {
  var cached$$1 = cache[key];
  if (cached$$1 && (!current || cached$$1.tag !== current.tag)) {
    cached$$1.componentInstance.$destroy();
  }
  cache[key] = null;
  remove(keys, key);
}

var patternTypes = [String, RegExp, Array];

var KeepAlive = {
  name: 'keep-alive',
  abstract: true,

  props: {
    include: patternTypes,
    exclude: patternTypes,
    max: [String, Number]
  },

  created: function created () {
    this.cache = Object.create(null);
    this.keys = [];
  },

  destroyed: function destroyed () {
    var this$1 = this;

    for (var key in this$1.cache) {
      pruneCacheEntry(this$1.cache, key, this$1.keys);
    }
  },

  mounted: function mounted () {
    var this$1 = this;

    this.$watch('include', function (val) {
      pruneCache(this$1, function (name) { return matches(val, name); });
    });
    this.$watch('exclude', function (val) {
      pruneCache(this$1, function (name) { return !matches(val, name); });
    });
  },

  render: function render () {
    var slot = this.$slots.default;
    var vnode = getFirstComponentChild(slot);
    var componentOptions = vnode && vnode.componentOptions;
    if (componentOptions) {
      // check pattern
      var name = getComponentName(componentOptions);
      var ref = this;
      var include = ref.include;
      var exclude = ref.exclude;
      if (
        // not included
        (include && (!name || !matches(include, name))) ||
        // excluded
        (exclude && name && matches(exclude, name))
      ) {
        return vnode
      }

      var ref$1 = this;
      var cache = ref$1.cache;
      var keys = ref$1.keys;
      var key = vnode.key == null
        // same constructor may get registered as different local components
        // so cid alone is not enough (#3269)
        ? componentOptions.Ctor.cid + (componentOptions.tag ? ("::" + (componentOptions.tag)) : '')
        : vnode.key;
      if (cache[key]) {
        vnode.componentInstance = cache[key].componentInstance;
        // make current key freshest
        remove(keys, key);
        keys.push(key);
      } else {
        cache[key] = vnode;
        keys.push(key);
        // prune oldest entry
        if (this.max && keys.length > parseInt(this.max)) {
          pruneCacheEntry(cache, keys[0], keys, this._vnode);
        }
      }

      vnode.data.keepAlive = true;
    }
    return vnode || (slot && slot[0])
  }
}

var builtInComponents = {
  KeepAlive: KeepAlive
}

/*  */

function initGlobalAPI (Vue) {
  // config
  var configDef = {};
  configDef.get = function () { return config; };
  if (true) {
    configDef.set = function () {
      warn(
        'Do not replace the Vue.config object, set individual fields instead.'
      );
    };
  }
  Object.defineProperty(Vue, 'config', configDef);

  // exposed util methods.
  // NOTE: these are not considered part of the public API - avoid relying on
  // them unless you are aware of the risk.
  Vue.util = {
    warn: warn,
    extend: extend,
    mergeOptions: mergeOptions,
    defineReactive: defineReactive
  };

  Vue.set = set;
  Vue.delete = del;
  Vue.nextTick = nextTick;

  Vue.options = Object.create(null);
  ASSET_TYPES.forEach(function (type) {
    Vue.options[type + 's'] = Object.create(null);
  });

  // this is used to identify the "base" constructor to extend all plain-object
  // components with in Weex's multi-instance scenarios.
  Vue.options._base = Vue;

  extend(Vue.options.components, builtInComponents);

  initUse(Vue);
  initMixin$1(Vue);
  initExtend(Vue);
  initAssetRegisters(Vue);
}

initGlobalAPI(Vue);

Object.defineProperty(Vue.prototype, '$isServer', {
  get: isServerRendering
});

Object.defineProperty(Vue.prototype, '$ssrContext', {
  get: function get () {
    /* istanbul ignore next */
    return this.$vnode && this.$vnode.ssrContext
  }
});

// expose FunctionalRenderContext for ssr runtime helper installation
Object.defineProperty(Vue, 'FunctionalRenderContext', {
  value: FunctionalRenderContext
});

Vue.version = '2.5.16';

/*  */

// these are reserved for web because they are directly compiled away
// during template compilation
var isReservedAttr = makeMap('style,class');

// attributes that should be using props for binding
var acceptValue = makeMap('input,textarea,option,select,progress');
var mustUseProp = function (tag, type, attr) {
  return (
    (attr === 'value' && acceptValue(tag)) && type !== 'button' ||
    (attr === 'selected' && tag === 'option') ||
    (attr === 'checked' && tag === 'input') ||
    (attr === 'muted' && tag === 'video')
  )
};

var isEnumeratedAttr = makeMap('contenteditable,draggable,spellcheck');

var isBooleanAttr = makeMap(
  'allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,' +
  'default,defaultchecked,defaultmuted,defaultselected,defer,disabled,' +
  'enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,' +
  'muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,' +
  'required,reversed,scoped,seamless,selected,sortable,translate,' +
  'truespeed,typemustmatch,visible'
);

var xlinkNS = 'http://www.w3.org/1999/xlink';

var isXlink = function (name) {
  return name.charAt(5) === ':' && name.slice(0, 5) === 'xlink'
};

var getXlinkProp = function (name) {
  return isXlink(name) ? name.slice(6, name.length) : ''
};

var isFalsyAttrValue = function (val) {
  return val == null || val === false
};

/*  */

function genClassForVnode (vnode) {
  var data = vnode.data;
  var parentNode = vnode;
  var childNode = vnode;
  while (isDef(childNode.componentInstance)) {
    childNode = childNode.componentInstance._vnode;
    if (childNode && childNode.data) {
      data = mergeClassData(childNode.data, data);
    }
  }
  while (isDef(parentNode = parentNode.parent)) {
    if (parentNode && parentNode.data) {
      data = mergeClassData(data, parentNode.data);
    }
  }
  return renderClass(data.staticClass, data.class)
}

function mergeClassData (child, parent) {
  return {
    staticClass: concat(child.staticClass, parent.staticClass),
    class: isDef(child.class)
      ? [child.class, parent.class]
      : parent.class
  }
}

function renderClass (
  staticClass,
  dynamicClass
) {
  if (isDef(staticClass) || isDef(dynamicClass)) {
    return concat(staticClass, stringifyClass(dynamicClass))
  }
  /* istanbul ignore next */
  return ''
}

function concat (a, b) {
  return a ? b ? (a + ' ' + b) : a : (b || '')
}

function stringifyClass (value) {
  if (Array.isArray(value)) {
    return stringifyArray(value)
  }
  if (isObject(value)) {
    return stringifyObject(value)
  }
  if (typeof value === 'string') {
    return value
  }
  /* istanbul ignore next */
  return ''
}

function stringifyArray (value) {
  var res = '';
  var stringified;
  for (var i = 0, l = value.length; i < l; i++) {
    if (isDef(stringified = stringifyClass(value[i])) && stringified !== '') {
      if (res) { res += ' '; }
      res += stringified;
    }
  }
  return res
}

function stringifyObject (value) {
  var res = '';
  for (var key in value) {
    if (value[key]) {
      if (res) { res += ' '; }
      res += key;
    }
  }
  return res
}

/*  */

var namespaceMap = {
  svg: 'http://www.w3.org/2000/svg',
  math: 'http://www.w3.org/1998/Math/MathML'
};

var isHTMLTag = makeMap(
  'html,body,base,head,link,meta,style,title,' +
  'address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,' +
  'div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,' +
  'a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,' +
  's,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,' +
  'embed,object,param,source,canvas,script,noscript,del,ins,' +
  'caption,col,colgroup,table,thead,tbody,td,th,tr,' +
  'button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,' +
  'output,progress,select,textarea,' +
  'details,dialog,menu,menuitem,summary,' +
  'content,element,shadow,template,blockquote,iframe,tfoot'
);

// this map is intentionally selective, only covering SVG elements that may
// contain child elements.
var isSVG = makeMap(
  'svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,' +
  'foreignObject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,' +
  'polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view',
  true
);



var isReservedTag = function (tag) {
  return isHTMLTag(tag) || isSVG(tag)
};

function getTagNamespace (tag) {
  if (isSVG(tag)) {
    return 'svg'
  }
  // basic support for MathML
  // note it doesn't support other MathML elements being component roots
  if (tag === 'math') {
    return 'math'
  }
}

var unknownElementCache = Object.create(null);
function isUnknownElement (tag) {
  /* istanbul ignore if */
  if (!inBrowser) {
    return true
  }
  if (isReservedTag(tag)) {
    return false
  }
  tag = tag.toLowerCase();
  /* istanbul ignore if */
  if (unknownElementCache[tag] != null) {
    return unknownElementCache[tag]
  }
  var el = document.createElement(tag);
  if (tag.indexOf('-') > -1) {
    // http://stackoverflow.com/a/28210364/1070244
    return (unknownElementCache[tag] = (
      el.constructor === window.HTMLUnknownElement ||
      el.constructor === window.HTMLElement
    ))
  } else {
    return (unknownElementCache[tag] = /HTMLUnknownElement/.test(el.toString()))
  }
}

var isTextInputType = makeMap('text,number,password,search,email,tel,url');

/*  */

/**
 * Query an element selector if it's not an element already.
 */
function query (el) {
  if (typeof el === 'string') {
    var selected = document.querySelector(el);
    if (!selected) {
      "development" !== 'production' && warn(
        'Cannot find element: ' + el
      );
      return document.createElement('div')
    }
    return selected
  } else {
    return el
  }
}

/*  */

function createElement$1 (tagName, vnode) {
  var elm = document.createElement(tagName);
  if (tagName !== 'select') {
    return elm
  }
  // false or null will remove the attribute but undefined will not
  if (vnode.data && vnode.data.attrs && vnode.data.attrs.multiple !== undefined) {
    elm.setAttribute('multiple', 'multiple');
  }
  return elm
}

function createElementNS (namespace, tagName) {
  return document.createElementNS(namespaceMap[namespace], tagName)
}

function createTextNode (text) {
  return document.createTextNode(text)
}

function createComment (text) {
  return document.createComment(text)
}

function insertBefore (parentNode, newNode, referenceNode) {
  parentNode.insertBefore(newNode, referenceNode);
}

function removeChild (node, child) {
  node.removeChild(child);
}

function appendChild (node, child) {
  node.appendChild(child);
}

function parentNode (node) {
  return node.parentNode
}

function nextSibling (node) {
  return node.nextSibling
}

function tagName (node) {
  return node.tagName
}

function setTextContent (node, text) {
  node.textContent = text;
}

function setStyleScope (node, scopeId) {
  node.setAttribute(scopeId, '');
}


var nodeOps = Object.freeze({
	createElement: createElement$1,
	createElementNS: createElementNS,
	createTextNode: createTextNode,
	createComment: createComment,
	insertBefore: insertBefore,
	removeChild: removeChild,
	appendChild: appendChild,
	parentNode: parentNode,
	nextSibling: nextSibling,
	tagName: tagName,
	setTextContent: setTextContent,
	setStyleScope: setStyleScope
});

/*  */

var ref = {
  create: function create (_, vnode) {
    registerRef(vnode);
  },
  update: function update (oldVnode, vnode) {
    if (oldVnode.data.ref !== vnode.data.ref) {
      registerRef(oldVnode, true);
      registerRef(vnode);
    }
  },
  destroy: function destroy (vnode) {
    registerRef(vnode, true);
  }
}

function registerRef (vnode, isRemoval) {
  var key = vnode.data.ref;
  if (!isDef(key)) { return }

  var vm = vnode.context;
  var ref = vnode.componentInstance || vnode.elm;
  var refs = vm.$refs;
  if (isRemoval) {
    if (Array.isArray(refs[key])) {
      remove(refs[key], ref);
    } else if (refs[key] === ref) {
      refs[key] = undefined;
    }
  } else {
    if (vnode.data.refInFor) {
      if (!Array.isArray(refs[key])) {
        refs[key] = [ref];
      } else if (refs[key].indexOf(ref) < 0) {
        // $flow-disable-line
        refs[key].push(ref);
      }
    } else {
      refs[key] = ref;
    }
  }
}

/**
 * Virtual DOM patching algorithm based on Snabbdom by
 * Simon Friis Vindum (@paldepind)
 * Licensed under the MIT License
 * https://github.com/paldepind/snabbdom/blob/master/LICENSE
 *
 * modified by Evan You (@yyx990803)
 *
 * Not type-checking this because this file is perf-critical and the cost
 * of making flow understand it is not worth it.
 */

var emptyNode = new VNode('', {}, []);

var hooks = ['create', 'activate', 'update', 'remove', 'destroy'];

function sameVnode (a, b) {
  return (
    a.key === b.key && (
      (
        a.tag === b.tag &&
        a.isComment === b.isComment &&
        isDef(a.data) === isDef(b.data) &&
        sameInputType(a, b)
      ) || (
        isTrue(a.isAsyncPlaceholder) &&
        a.asyncFactory === b.asyncFactory &&
        isUndef(b.asyncFactory.error)
      )
    )
  )
}

function sameInputType (a, b) {
  if (a.tag !== 'input') { return true }
  var i;
  var typeA = isDef(i = a.data) && isDef(i = i.attrs) && i.type;
  var typeB = isDef(i = b.data) && isDef(i = i.attrs) && i.type;
  return typeA === typeB || isTextInputType(typeA) && isTextInputType(typeB)
}

function createKeyToOldIdx (children, beginIdx, endIdx) {
  var i, key;
  var map = {};
  for (i = beginIdx; i <= endIdx; ++i) {
    key = children[i].key;
    if (isDef(key)) { map[key] = i; }
  }
  return map
}

function createPatchFunction (backend) {
  var i, j;
  var cbs = {};

  var modules = backend.modules;
  var nodeOps = backend.nodeOps;

  for (i = 0; i < hooks.length; ++i) {
    cbs[hooks[i]] = [];
    for (j = 0; j < modules.length; ++j) {
      if (isDef(modules[j][hooks[i]])) {
        cbs[hooks[i]].push(modules[j][hooks[i]]);
      }
    }
  }

  function emptyNodeAt (elm) {
    return new VNode(nodeOps.tagName(elm).toLowerCase(), {}, [], undefined, elm)
  }

  function createRmCb (childElm, listeners) {
    function remove () {
      if (--remove.listeners === 0) {
        removeNode(childElm);
      }
    }
    remove.listeners = listeners;
    return remove
  }

  function removeNode (el) {
    var parent = nodeOps.parentNode(el);
    // element may have already been removed due to v-html / v-text
    if (isDef(parent)) {
      nodeOps.removeChild(parent, el);
    }
  }

  function isUnknownElement$$1 (vnode, inVPre) {
    return (
      !inVPre &&
      !vnode.ns &&
      !(
        config.ignoredElements.length &&
        config.ignoredElements.some(function (ignore) {
          return isRegExp(ignore)
            ? ignore.test(vnode.tag)
            : ignore === vnode.tag
        })
      ) &&
      config.isUnknownElement(vnode.tag)
    )
  }

  var creatingElmInVPre = 0;

  function createElm (
    vnode,
    insertedVnodeQueue,
    parentElm,
    refElm,
    nested,
    ownerArray,
    index
  ) {
    if (isDef(vnode.elm) && isDef(ownerArray)) {
      // This vnode was used in a previous render!
      // now it's used as a new node, overwriting its elm would cause
      // potential patch errors down the road when it's used as an insertion
      // reference node. Instead, we clone the node on-demand before creating
      // associated DOM element for it.
      vnode = ownerArray[index] = cloneVNode(vnode);
    }

    vnode.isRootInsert = !nested; // for transition enter check
    if (createComponent(vnode, insertedVnodeQueue, parentElm, refElm)) {
      return
    }

    var data = vnode.data;
    var children = vnode.children;
    var tag = vnode.tag;
    if (isDef(tag)) {
      if (true) {
        if (data && data.pre) {
          creatingElmInVPre++;
        }
        if (isUnknownElement$$1(vnode, creatingElmInVPre)) {
          warn(
            'Unknown custom element: <' + tag + '> - did you ' +
            'register the component correctly? For recursive components, ' +
            'make sure to provide the "name" option.',
            vnode.context
          );
        }
      }

      vnode.elm = vnode.ns
        ? nodeOps.createElementNS(vnode.ns, tag)
        : nodeOps.createElement(tag, vnode);
      setScope(vnode);

      /* istanbul ignore if */
      {
        createChildren(vnode, children, insertedVnodeQueue);
        if (isDef(data)) {
          invokeCreateHooks(vnode, insertedVnodeQueue);
        }
        insert(parentElm, vnode.elm, refElm);
      }

      if ("development" !== 'production' && data && data.pre) {
        creatingElmInVPre--;
      }
    } else if (isTrue(vnode.isComment)) {
      vnode.elm = nodeOps.createComment(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    } else {
      vnode.elm = nodeOps.createTextNode(vnode.text);
      insert(parentElm, vnode.elm, refElm);
    }
  }

  function createComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i = vnode.data;
    if (isDef(i)) {
      var isReactivated = isDef(vnode.componentInstance) && i.keepAlive;
      if (isDef(i = i.hook) && isDef(i = i.init)) {
        i(vnode, false /* hydrating */, parentElm, refElm);
      }
      // after calling the init hook, if the vnode is a child component
      // it should've created a child instance and mounted it. the child
      // component also has set the placeholder vnode's elm.
      // in that case we can just return the element and be done.
      if (isDef(vnode.componentInstance)) {
        initComponent(vnode, insertedVnodeQueue);
        if (isTrue(isReactivated)) {
          reactivateComponent(vnode, insertedVnodeQueue, parentElm, refElm);
        }
        return true
      }
    }
  }

  function initComponent (vnode, insertedVnodeQueue) {
    if (isDef(vnode.data.pendingInsert)) {
      insertedVnodeQueue.push.apply(insertedVnodeQueue, vnode.data.pendingInsert);
      vnode.data.pendingInsert = null;
    }
    vnode.elm = vnode.componentInstance.$el;
    if (isPatchable(vnode)) {
      invokeCreateHooks(vnode, insertedVnodeQueue);
      setScope(vnode);
    } else {
      // empty component root.
      // skip all element-related modules except for ref (#3455)
      registerRef(vnode);
      // make sure to invoke the insert hook
      insertedVnodeQueue.push(vnode);
    }
  }

  function reactivateComponent (vnode, insertedVnodeQueue, parentElm, refElm) {
    var i;
    // hack for #4339: a reactivated component with inner transition
    // does not trigger because the inner node's created hooks are not called
    // again. It's not ideal to involve module-specific logic in here but
    // there doesn't seem to be a better way to do it.
    var innerNode = vnode;
    while (innerNode.componentInstance) {
      innerNode = innerNode.componentInstance._vnode;
      if (isDef(i = innerNode.data) && isDef(i = i.transition)) {
        for (i = 0; i < cbs.activate.length; ++i) {
          cbs.activate[i](emptyNode, innerNode);
        }
        insertedVnodeQueue.push(innerNode);
        break
      }
    }
    // unlike a newly created component,
    // a reactivated keep-alive component doesn't insert itself
    insert(parentElm, vnode.elm, refElm);
  }

  function insert (parent, elm, ref$$1) {
    if (isDef(parent)) {
      if (isDef(ref$$1)) {
        if (ref$$1.parentNode === parent) {
          nodeOps.insertBefore(parent, elm, ref$$1);
        }
      } else {
        nodeOps.appendChild(parent, elm);
      }
    }
  }

  function createChildren (vnode, children, insertedVnodeQueue) {
    if (Array.isArray(children)) {
      if (true) {
        checkDuplicateKeys(children);
      }
      for (var i = 0; i < children.length; ++i) {
        createElm(children[i], insertedVnodeQueue, vnode.elm, null, true, children, i);
      }
    } else if (isPrimitive(vnode.text)) {
      nodeOps.appendChild(vnode.elm, nodeOps.createTextNode(String(vnode.text)));
    }
  }

  function isPatchable (vnode) {
    while (vnode.componentInstance) {
      vnode = vnode.componentInstance._vnode;
    }
    return isDef(vnode.tag)
  }

  function invokeCreateHooks (vnode, insertedVnodeQueue) {
    for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
      cbs.create[i$1](emptyNode, vnode);
    }
    i = vnode.data.hook; // Reuse variable
    if (isDef(i)) {
      if (isDef(i.create)) { i.create(emptyNode, vnode); }
      if (isDef(i.insert)) { insertedVnodeQueue.push(vnode); }
    }
  }

  // set scope id attribute for scoped CSS.
  // this is implemented as a special case to avoid the overhead
  // of going through the normal attribute patching process.
  function setScope (vnode) {
    var i;
    if (isDef(i = vnode.fnScopeId)) {
      nodeOps.setStyleScope(vnode.elm, i);
    } else {
      var ancestor = vnode;
      while (ancestor) {
        if (isDef(i = ancestor.context) && isDef(i = i.$options._scopeId)) {
          nodeOps.setStyleScope(vnode.elm, i);
        }
        ancestor = ancestor.parent;
      }
    }
    // for slot content they should also get the scopeId from the host instance.
    if (isDef(i = activeInstance) &&
      i !== vnode.context &&
      i !== vnode.fnContext &&
      isDef(i = i.$options._scopeId)
    ) {
      nodeOps.setStyleScope(vnode.elm, i);
    }
  }

  function addVnodes (parentElm, refElm, vnodes, startIdx, endIdx, insertedVnodeQueue) {
    for (; startIdx <= endIdx; ++startIdx) {
      createElm(vnodes[startIdx], insertedVnodeQueue, parentElm, refElm, false, vnodes, startIdx);
    }
  }

  function invokeDestroyHook (vnode) {
    var i, j;
    var data = vnode.data;
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.destroy)) { i(vnode); }
      for (i = 0; i < cbs.destroy.length; ++i) { cbs.destroy[i](vnode); }
    }
    if (isDef(i = vnode.children)) {
      for (j = 0; j < vnode.children.length; ++j) {
        invokeDestroyHook(vnode.children[j]);
      }
    }
  }

  function removeVnodes (parentElm, vnodes, startIdx, endIdx) {
    for (; startIdx <= endIdx; ++startIdx) {
      var ch = vnodes[startIdx];
      if (isDef(ch)) {
        if (isDef(ch.tag)) {
          removeAndInvokeRemoveHook(ch);
          invokeDestroyHook(ch);
        } else { // Text node
          removeNode(ch.elm);
        }
      }
    }
  }

  function removeAndInvokeRemoveHook (vnode, rm) {
    if (isDef(rm) || isDef(vnode.data)) {
      var i;
      var listeners = cbs.remove.length + 1;
      if (isDef(rm)) {
        // we have a recursively passed down rm callback
        // increase the listeners count
        rm.listeners += listeners;
      } else {
        // directly removing
        rm = createRmCb(vnode.elm, listeners);
      }
      // recursively invoke hooks on child component root node
      if (isDef(i = vnode.componentInstance) && isDef(i = i._vnode) && isDef(i.data)) {
        removeAndInvokeRemoveHook(i, rm);
      }
      for (i = 0; i < cbs.remove.length; ++i) {
        cbs.remove[i](vnode, rm);
      }
      if (isDef(i = vnode.data.hook) && isDef(i = i.remove)) {
        i(vnode, rm);
      } else {
        rm();
      }
    } else {
      removeNode(vnode.elm);
    }
  }

  function updateChildren (parentElm, oldCh, newCh, insertedVnodeQueue, removeOnly) {
    var oldStartIdx = 0;
    var newStartIdx = 0;
    var oldEndIdx = oldCh.length - 1;
    var oldStartVnode = oldCh[0];
    var oldEndVnode = oldCh[oldEndIdx];
    var newEndIdx = newCh.length - 1;
    var newStartVnode = newCh[0];
    var newEndVnode = newCh[newEndIdx];
    var oldKeyToIdx, idxInOld, vnodeToMove, refElm;

    // removeOnly is a special flag used only by <transition-group>
    // to ensure removed elements stay in correct relative positions
    // during leaving transitions
    var canMove = !removeOnly;

    if (true) {
      checkDuplicateKeys(newCh);
    }

    while (oldStartIdx <= oldEndIdx && newStartIdx <= newEndIdx) {
      if (isUndef(oldStartVnode)) {
        oldStartVnode = oldCh[++oldStartIdx]; // Vnode has been moved left
      } else if (isUndef(oldEndVnode)) {
        oldEndVnode = oldCh[--oldEndIdx];
      } else if (sameVnode(oldStartVnode, newStartVnode)) {
        patchVnode(oldStartVnode, newStartVnode, insertedVnodeQueue);
        oldStartVnode = oldCh[++oldStartIdx];
        newStartVnode = newCh[++newStartIdx];
      } else if (sameVnode(oldEndVnode, newEndVnode)) {
        patchVnode(oldEndVnode, newEndVnode, insertedVnodeQueue);
        oldEndVnode = oldCh[--oldEndIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldStartVnode, newEndVnode)) { // Vnode moved right
        patchVnode(oldStartVnode, newEndVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldStartVnode.elm, nodeOps.nextSibling(oldEndVnode.elm));
        oldStartVnode = oldCh[++oldStartIdx];
        newEndVnode = newCh[--newEndIdx];
      } else if (sameVnode(oldEndVnode, newStartVnode)) { // Vnode moved left
        patchVnode(oldEndVnode, newStartVnode, insertedVnodeQueue);
        canMove && nodeOps.insertBefore(parentElm, oldEndVnode.elm, oldStartVnode.elm);
        oldEndVnode = oldCh[--oldEndIdx];
        newStartVnode = newCh[++newStartIdx];
      } else {
        if (isUndef(oldKeyToIdx)) { oldKeyToIdx = createKeyToOldIdx(oldCh, oldStartIdx, oldEndIdx); }
        idxInOld = isDef(newStartVnode.key)
          ? oldKeyToIdx[newStartVnode.key]
          : findIdxInOld(newStartVnode, oldCh, oldStartIdx, oldEndIdx);
        if (isUndef(idxInOld)) { // New element
          createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
        } else {
          vnodeToMove = oldCh[idxInOld];
          if (sameVnode(vnodeToMove, newStartVnode)) {
            patchVnode(vnodeToMove, newStartVnode, insertedVnodeQueue);
            oldCh[idxInOld] = undefined;
            canMove && nodeOps.insertBefore(parentElm, vnodeToMove.elm, oldStartVnode.elm);
          } else {
            // same key but different element. treat as new element
            createElm(newStartVnode, insertedVnodeQueue, parentElm, oldStartVnode.elm, false, newCh, newStartIdx);
          }
        }
        newStartVnode = newCh[++newStartIdx];
      }
    }
    if (oldStartIdx > oldEndIdx) {
      refElm = isUndef(newCh[newEndIdx + 1]) ? null : newCh[newEndIdx + 1].elm;
      addVnodes(parentElm, refElm, newCh, newStartIdx, newEndIdx, insertedVnodeQueue);
    } else if (newStartIdx > newEndIdx) {
      removeVnodes(parentElm, oldCh, oldStartIdx, oldEndIdx);
    }
  }

  function checkDuplicateKeys (children) {
    var seenKeys = {};
    for (var i = 0; i < children.length; i++) {
      var vnode = children[i];
      var key = vnode.key;
      if (isDef(key)) {
        if (seenKeys[key]) {
          warn(
            ("Duplicate keys detected: '" + key + "'. This may cause an update error."),
            vnode.context
          );
        } else {
          seenKeys[key] = true;
        }
      }
    }
  }

  function findIdxInOld (node, oldCh, start, end) {
    for (var i = start; i < end; i++) {
      var c = oldCh[i];
      if (isDef(c) && sameVnode(node, c)) { return i }
    }
  }

  function patchVnode (oldVnode, vnode, insertedVnodeQueue, removeOnly) {
    if (oldVnode === vnode) {
      return
    }

    var elm = vnode.elm = oldVnode.elm;

    if (isTrue(oldVnode.isAsyncPlaceholder)) {
      if (isDef(vnode.asyncFactory.resolved)) {
        hydrate(oldVnode.elm, vnode, insertedVnodeQueue);
      } else {
        vnode.isAsyncPlaceholder = true;
      }
      return
    }

    // reuse element for static trees.
    // note we only do this if the vnode is cloned -
    // if the new node is not cloned it means the render functions have been
    // reset by the hot-reload-api and we need to do a proper re-render.
    if (isTrue(vnode.isStatic) &&
      isTrue(oldVnode.isStatic) &&
      vnode.key === oldVnode.key &&
      (isTrue(vnode.isCloned) || isTrue(vnode.isOnce))
    ) {
      vnode.componentInstance = oldVnode.componentInstance;
      return
    }

    var i;
    var data = vnode.data;
    if (isDef(data) && isDef(i = data.hook) && isDef(i = i.prepatch)) {
      i(oldVnode, vnode);
    }

    var oldCh = oldVnode.children;
    var ch = vnode.children;
    if (isDef(data) && isPatchable(vnode)) {
      for (i = 0; i < cbs.update.length; ++i) { cbs.update[i](oldVnode, vnode); }
      if (isDef(i = data.hook) && isDef(i = i.update)) { i(oldVnode, vnode); }
    }
    if (isUndef(vnode.text)) {
      if (isDef(oldCh) && isDef(ch)) {
        if (oldCh !== ch) { updateChildren(elm, oldCh, ch, insertedVnodeQueue, removeOnly); }
      } else if (isDef(ch)) {
        if (isDef(oldVnode.text)) { nodeOps.setTextContent(elm, ''); }
        addVnodes(elm, null, ch, 0, ch.length - 1, insertedVnodeQueue);
      } else if (isDef(oldCh)) {
        removeVnodes(elm, oldCh, 0, oldCh.length - 1);
      } else if (isDef(oldVnode.text)) {
        nodeOps.setTextContent(elm, '');
      }
    } else if (oldVnode.text !== vnode.text) {
      nodeOps.setTextContent(elm, vnode.text);
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.postpatch)) { i(oldVnode, vnode); }
    }
  }

  function invokeInsertHook (vnode, queue, initial) {
    // delay insert hooks for component root nodes, invoke them after the
    // element is really inserted
    if (isTrue(initial) && isDef(vnode.parent)) {
      vnode.parent.data.pendingInsert = queue;
    } else {
      for (var i = 0; i < queue.length; ++i) {
        queue[i].data.hook.insert(queue[i]);
      }
    }
  }

  var hydrationBailed = false;
  // list of modules that can skip create hook during hydration because they
  // are already rendered on the client or has no need for initialization
  // Note: style is excluded because it relies on initial clone for future
  // deep updates (#7063).
  var isRenderedModule = makeMap('attrs,class,staticClass,staticStyle,key');

  // Note: this is a browser-only function so we can assume elms are DOM nodes.
  function hydrate (elm, vnode, insertedVnodeQueue, inVPre) {
    var i;
    var tag = vnode.tag;
    var data = vnode.data;
    var children = vnode.children;
    inVPre = inVPre || (data && data.pre);
    vnode.elm = elm;

    if (isTrue(vnode.isComment) && isDef(vnode.asyncFactory)) {
      vnode.isAsyncPlaceholder = true;
      return true
    }
    // assert node match
    if (true) {
      if (!assertNodeMatch(elm, vnode, inVPre)) {
        return false
      }
    }
    if (isDef(data)) {
      if (isDef(i = data.hook) && isDef(i = i.init)) { i(vnode, true /* hydrating */); }
      if (isDef(i = vnode.componentInstance)) {
        // child component. it should have hydrated its own tree.
        initComponent(vnode, insertedVnodeQueue);
        return true
      }
    }
    if (isDef(tag)) {
      if (isDef(children)) {
        // empty element, allow client to pick up and populate children
        if (!elm.hasChildNodes()) {
          createChildren(vnode, children, insertedVnodeQueue);
        } else {
          // v-html and domProps: innerHTML
          if (isDef(i = data) && isDef(i = i.domProps) && isDef(i = i.innerHTML)) {
            if (i !== elm.innerHTML) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('server innerHTML: ', i);
                console.warn('client innerHTML: ', elm.innerHTML);
              }
              return false
            }
          } else {
            // iterate and compare children lists
            var childrenMatch = true;
            var childNode = elm.firstChild;
            for (var i$1 = 0; i$1 < children.length; i$1++) {
              if (!childNode || !hydrate(childNode, children[i$1], insertedVnodeQueue, inVPre)) {
                childrenMatch = false;
                break
              }
              childNode = childNode.nextSibling;
            }
            // if childNode is not null, it means the actual childNodes list is
            // longer than the virtual children list.
            if (!childrenMatch || childNode) {
              /* istanbul ignore if */
              if ("development" !== 'production' &&
                typeof console !== 'undefined' &&
                !hydrationBailed
              ) {
                hydrationBailed = true;
                console.warn('Parent: ', elm);
                console.warn('Mismatching childNodes vs. VNodes: ', elm.childNodes, children);
              }
              return false
            }
          }
        }
      }
      if (isDef(data)) {
        var fullInvoke = false;
        for (var key in data) {
          if (!isRenderedModule(key)) {
            fullInvoke = true;
            invokeCreateHooks(vnode, insertedVnodeQueue);
            break
          }
        }
        if (!fullInvoke && data['class']) {
          // ensure collecting deps for deep class bindings for future updates
          traverse(data['class']);
        }
      }
    } else if (elm.data !== vnode.text) {
      elm.data = vnode.text;
    }
    return true
  }

  function assertNodeMatch (node, vnode, inVPre) {
    if (isDef(vnode.tag)) {
      return vnode.tag.indexOf('vue-component') === 0 || (
        !isUnknownElement$$1(vnode, inVPre) &&
        vnode.tag.toLowerCase() === (node.tagName && node.tagName.toLowerCase())
      )
    } else {
      return node.nodeType === (vnode.isComment ? 8 : 3)
    }
  }

  return function patch (oldVnode, vnode, hydrating, removeOnly, parentElm, refElm) {
    if (isUndef(vnode)) {
      if (isDef(oldVnode)) { invokeDestroyHook(oldVnode); }
      return
    }

    var isInitialPatch = false;
    var insertedVnodeQueue = [];

    if (isUndef(oldVnode)) {
      // empty mount (likely as component), create new root element
      isInitialPatch = true;
      createElm(vnode, insertedVnodeQueue, parentElm, refElm);
    } else {
      var isRealElement = isDef(oldVnode.nodeType);
      if (!isRealElement && sameVnode(oldVnode, vnode)) {
        // patch existing root node
        patchVnode(oldVnode, vnode, insertedVnodeQueue, removeOnly);
      } else {
        if (isRealElement) {
          // mounting to a real element
          // check if this is server-rendered content and if we can perform
          // a successful hydration.
          if (oldVnode.nodeType === 1 && oldVnode.hasAttribute(SSR_ATTR)) {
            oldVnode.removeAttribute(SSR_ATTR);
            hydrating = true;
          }
          if (isTrue(hydrating)) {
            if (hydrate(oldVnode, vnode, insertedVnodeQueue)) {
              invokeInsertHook(vnode, insertedVnodeQueue, true);
              return oldVnode
            } else if (true) {
              warn(
                'The client-side rendered virtual DOM tree is not matching ' +
                'server-rendered content. This is likely caused by incorrect ' +
                'HTML markup, for example nesting block-level elements inside ' +
                '<p>, or missing <tbody>. Bailing hydration and performing ' +
                'full client-side render.'
              );
            }
          }
          // either not server-rendered, or hydration failed.
          // create an empty node and replace it
          oldVnode = emptyNodeAt(oldVnode);
        }

        // replacing existing element
        var oldElm = oldVnode.elm;
        var parentElm$1 = nodeOps.parentNode(oldElm);

        // create new node
        createElm(
          vnode,
          insertedVnodeQueue,
          // extremely rare edge case: do not insert if old element is in a
          // leaving transition. Only happens when combining transition +
          // keep-alive + HOCs. (#4590)
          oldElm._leaveCb ? null : parentElm$1,
          nodeOps.nextSibling(oldElm)
        );

        // update parent placeholder node element, recursively
        if (isDef(vnode.parent)) {
          var ancestor = vnode.parent;
          var patchable = isPatchable(vnode);
          while (ancestor) {
            for (var i = 0; i < cbs.destroy.length; ++i) {
              cbs.destroy[i](ancestor);
            }
            ancestor.elm = vnode.elm;
            if (patchable) {
              for (var i$1 = 0; i$1 < cbs.create.length; ++i$1) {
                cbs.create[i$1](emptyNode, ancestor);
              }
              // #6513
              // invoke insert hooks that may have been merged by create hooks.
              // e.g. for directives that uses the "inserted" hook.
              var insert = ancestor.data.hook.insert;
              if (insert.merged) {
                // start at index 1 to avoid re-invoking component mounted hook
                for (var i$2 = 1; i$2 < insert.fns.length; i$2++) {
                  insert.fns[i$2]();
                }
              }
            } else {
              registerRef(ancestor);
            }
            ancestor = ancestor.parent;
          }
        }

        // destroy old node
        if (isDef(parentElm$1)) {
          removeVnodes(parentElm$1, [oldVnode], 0, 0);
        } else if (isDef(oldVnode.tag)) {
          invokeDestroyHook(oldVnode);
        }
      }
    }

    invokeInsertHook(vnode, insertedVnodeQueue, isInitialPatch);
    return vnode.elm
  }
}

/*  */

var directives = {
  create: updateDirectives,
  update: updateDirectives,
  destroy: function unbindDirectives (vnode) {
    updateDirectives(vnode, emptyNode);
  }
}

function updateDirectives (oldVnode, vnode) {
  if (oldVnode.data.directives || vnode.data.directives) {
    _update(oldVnode, vnode);
  }
}

function _update (oldVnode, vnode) {
  var isCreate = oldVnode === emptyNode;
  var isDestroy = vnode === emptyNode;
  var oldDirs = normalizeDirectives$1(oldVnode.data.directives, oldVnode.context);
  var newDirs = normalizeDirectives$1(vnode.data.directives, vnode.context);

  var dirsWithInsert = [];
  var dirsWithPostpatch = [];

  var key, oldDir, dir;
  for (key in newDirs) {
    oldDir = oldDirs[key];
    dir = newDirs[key];
    if (!oldDir) {
      // new directive, bind
      callHook$1(dir, 'bind', vnode, oldVnode);
      if (dir.def && dir.def.inserted) {
        dirsWithInsert.push(dir);
      }
    } else {
      // existing directive, update
      dir.oldValue = oldDir.value;
      callHook$1(dir, 'update', vnode, oldVnode);
      if (dir.def && dir.def.componentUpdated) {
        dirsWithPostpatch.push(dir);
      }
    }
  }

  if (dirsWithInsert.length) {
    var callInsert = function () {
      for (var i = 0; i < dirsWithInsert.length; i++) {
        callHook$1(dirsWithInsert[i], 'inserted', vnode, oldVnode);
      }
    };
    if (isCreate) {
      mergeVNodeHook(vnode, 'insert', callInsert);
    } else {
      callInsert();
    }
  }

  if (dirsWithPostpatch.length) {
    mergeVNodeHook(vnode, 'postpatch', function () {
      for (var i = 0; i < dirsWithPostpatch.length; i++) {
        callHook$1(dirsWithPostpatch[i], 'componentUpdated', vnode, oldVnode);
      }
    });
  }

  if (!isCreate) {
    for (key in oldDirs) {
      if (!newDirs[key]) {
        // no longer present, unbind
        callHook$1(oldDirs[key], 'unbind', oldVnode, oldVnode, isDestroy);
      }
    }
  }
}

var emptyModifiers = Object.create(null);

function normalizeDirectives$1 (
  dirs,
  vm
) {
  var res = Object.create(null);
  if (!dirs) {
    // $flow-disable-line
    return res
  }
  var i, dir;
  for (i = 0; i < dirs.length; i++) {
    dir = dirs[i];
    if (!dir.modifiers) {
      // $flow-disable-line
      dir.modifiers = emptyModifiers;
    }
    res[getRawDirName(dir)] = dir;
    dir.def = resolveAsset(vm.$options, 'directives', dir.name, true);
  }
  // $flow-disable-line
  return res
}

function getRawDirName (dir) {
  return dir.rawName || ((dir.name) + "." + (Object.keys(dir.modifiers || {}).join('.')))
}

function callHook$1 (dir, hook, vnode, oldVnode, isDestroy) {
  var fn = dir.def && dir.def[hook];
  if (fn) {
    try {
      fn(vnode.elm, dir, vnode, oldVnode, isDestroy);
    } catch (e) {
      handleError(e, vnode.context, ("directive " + (dir.name) + " " + hook + " hook"));
    }
  }
}

var baseModules = [
  ref,
  directives
]

/*  */

function updateAttrs (oldVnode, vnode) {
  var opts = vnode.componentOptions;
  if (isDef(opts) && opts.Ctor.options.inheritAttrs === false) {
    return
  }
  if (isUndef(oldVnode.data.attrs) && isUndef(vnode.data.attrs)) {
    return
  }
  var key, cur, old;
  var elm = vnode.elm;
  var oldAttrs = oldVnode.data.attrs || {};
  var attrs = vnode.data.attrs || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(attrs.__ob__)) {
    attrs = vnode.data.attrs = extend({}, attrs);
  }

  for (key in attrs) {
    cur = attrs[key];
    old = oldAttrs[key];
    if (old !== cur) {
      setAttr(elm, key, cur);
    }
  }
  // #4391: in IE9, setting type can reset value for input[type=radio]
  // #6666: IE/Edge forces progress value down to 1 before setting a max
  /* istanbul ignore if */
  if ((isIE || isEdge) && attrs.value !== oldAttrs.value) {
    setAttr(elm, 'value', attrs.value);
  }
  for (key in oldAttrs) {
    if (isUndef(attrs[key])) {
      if (isXlink(key)) {
        elm.removeAttributeNS(xlinkNS, getXlinkProp(key));
      } else if (!isEnumeratedAttr(key)) {
        elm.removeAttribute(key);
      }
    }
  }
}

function setAttr (el, key, value) {
  if (el.tagName.indexOf('-') > -1) {
    baseSetAttr(el, key, value);
  } else if (isBooleanAttr(key)) {
    // set attribute for blank value
    // e.g. <option disabled>Select one</option>
    if (isFalsyAttrValue(value)) {
      el.removeAttribute(key);
    } else {
      // technically allowfullscreen is a boolean attribute for <iframe>,
      // but Flash expects a value of "true" when used on <embed> tag
      value = key === 'allowfullscreen' && el.tagName === 'EMBED'
        ? 'true'
        : key;
      el.setAttribute(key, value);
    }
  } else if (isEnumeratedAttr(key)) {
    el.setAttribute(key, isFalsyAttrValue(value) || value === 'false' ? 'false' : 'true');
  } else if (isXlink(key)) {
    if (isFalsyAttrValue(value)) {
      el.removeAttributeNS(xlinkNS, getXlinkProp(key));
    } else {
      el.setAttributeNS(xlinkNS, key, value);
    }
  } else {
    baseSetAttr(el, key, value);
  }
}

function baseSetAttr (el, key, value) {
  if (isFalsyAttrValue(value)) {
    el.removeAttribute(key);
  } else {
    // #7138: IE10 & 11 fires input event when setting placeholder on
    // <textarea>... block the first input event and remove the blocker
    // immediately.
    /* istanbul ignore if */
    if (
      isIE && !isIE9 &&
      el.tagName === 'TEXTAREA' &&
      key === 'placeholder' && !el.__ieph
    ) {
      var blocker = function (e) {
        e.stopImmediatePropagation();
        el.removeEventListener('input', blocker);
      };
      el.addEventListener('input', blocker);
      // $flow-disable-line
      el.__ieph = true; /* IE placeholder patched */
    }
    el.setAttribute(key, value);
  }
}

var attrs = {
  create: updateAttrs,
  update: updateAttrs
}

/*  */

function updateClass (oldVnode, vnode) {
  var el = vnode.elm;
  var data = vnode.data;
  var oldData = oldVnode.data;
  if (
    isUndef(data.staticClass) &&
    isUndef(data.class) && (
      isUndef(oldData) || (
        isUndef(oldData.staticClass) &&
        isUndef(oldData.class)
      )
    )
  ) {
    return
  }

  var cls = genClassForVnode(vnode);

  // handle transition classes
  var transitionClass = el._transitionClasses;
  if (isDef(transitionClass)) {
    cls = concat(cls, stringifyClass(transitionClass));
  }

  // set the class
  if (cls !== el._prevClass) {
    el.setAttribute('class', cls);
    el._prevClass = cls;
  }
}

var klass = {
  create: updateClass,
  update: updateClass
}

/*  */

/*  */









// add a raw attr (use this in preTransforms)








// note: this only removes the attr from the Array (attrsList) so that it
// doesn't get processed by processAttrs.
// By default it does NOT remove it from the map (attrsMap) because the map is
// needed during codegen.

/*  */

/**
 * Cross-platform code generation for component v-model
 */


/**
 * Cross-platform codegen helper for generating v-model value assignment code.
 */

/*  */

// in some cases, the event used has to be determined at runtime
// so we used some reserved tokens during compile.
var RANGE_TOKEN = '__r';
var CHECKBOX_RADIO_TOKEN = '__c';

/*  */

// normalize v-model event tokens that can only be determined at runtime.
// it's important to place the event as the first in the array because
// the whole point is ensuring the v-model callback gets called before
// user-attached handlers.
function normalizeEvents (on) {
  /* istanbul ignore if */
  if (isDef(on[RANGE_TOKEN])) {
    // IE input[type=range] only supports `change` event
    var event = isIE ? 'change' : 'input';
    on[event] = [].concat(on[RANGE_TOKEN], on[event] || []);
    delete on[RANGE_TOKEN];
  }
  // This was originally intended to fix #4521 but no longer necessary
  // after 2.5. Keeping it for backwards compat with generated code from < 2.4
  /* istanbul ignore if */
  if (isDef(on[CHECKBOX_RADIO_TOKEN])) {
    on.change = [].concat(on[CHECKBOX_RADIO_TOKEN], on.change || []);
    delete on[CHECKBOX_RADIO_TOKEN];
  }
}

var target$1;

function createOnceHandler (handler, event, capture) {
  var _target = target$1; // save current target element in closure
  return function onceHandler () {
    var res = handler.apply(null, arguments);
    if (res !== null) {
      remove$2(event, onceHandler, capture, _target);
    }
  }
}

function add$1 (
  event,
  handler,
  once$$1,
  capture,
  passive
) {
  handler = withMacroTask(handler);
  if (once$$1) { handler = createOnceHandler(handler, event, capture); }
  target$1.addEventListener(
    event,
    handler,
    supportsPassive
      ? { capture: capture, passive: passive }
      : capture
  );
}

function remove$2 (
  event,
  handler,
  capture,
  _target
) {
  (_target || target$1).removeEventListener(
    event,
    handler._withTask || handler,
    capture
  );
}

function updateDOMListeners (oldVnode, vnode) {
  if (isUndef(oldVnode.data.on) && isUndef(vnode.data.on)) {
    return
  }
  var on = vnode.data.on || {};
  var oldOn = oldVnode.data.on || {};
  target$1 = vnode.elm;
  normalizeEvents(on);
  updateListeners(on, oldOn, add$1, remove$2, vnode.context);
  target$1 = undefined;
}

var events = {
  create: updateDOMListeners,
  update: updateDOMListeners
}

/*  */

function updateDOMProps (oldVnode, vnode) {
  if (isUndef(oldVnode.data.domProps) && isUndef(vnode.data.domProps)) {
    return
  }
  var key, cur;
  var elm = vnode.elm;
  var oldProps = oldVnode.data.domProps || {};
  var props = vnode.data.domProps || {};
  // clone observed objects, as the user probably wants to mutate it
  if (isDef(props.__ob__)) {
    props = vnode.data.domProps = extend({}, props);
  }

  for (key in oldProps) {
    if (isUndef(props[key])) {
      elm[key] = '';
    }
  }
  for (key in props) {
    cur = props[key];
    // ignore children if the node has textContent or innerHTML,
    // as these will throw away existing DOM nodes and cause removal errors
    // on subsequent patches (#3360)
    if (key === 'textContent' || key === 'innerHTML') {
      if (vnode.children) { vnode.children.length = 0; }
      if (cur === oldProps[key]) { continue }
      // #6601 work around Chrome version <= 55 bug where single textNode
      // replaced by innerHTML/textContent retains its parentNode property
      if (elm.childNodes.length === 1) {
        elm.removeChild(elm.childNodes[0]);
      }
    }

    if (key === 'value') {
      // store value as _value as well since
      // non-string values will be stringified
      elm._value = cur;
      // avoid resetting cursor position when value is the same
      var strCur = isUndef(cur) ? '' : String(cur);
      if (shouldUpdateValue(elm, strCur)) {
        elm.value = strCur;
      }
    } else {
      elm[key] = cur;
    }
  }
}

// check platforms/web/util/attrs.js acceptValue


function shouldUpdateValue (elm, checkVal) {
  return (!elm.composing && (
    elm.tagName === 'OPTION' ||
    isNotInFocusAndDirty(elm, checkVal) ||
    isDirtyWithModifiers(elm, checkVal)
  ))
}

function isNotInFocusAndDirty (elm, checkVal) {
  // return true when textbox (.number and .trim) loses focus and its value is
  // not equal to the updated value
  var notInFocus = true;
  // #6157
  // work around IE bug when accessing document.activeElement in an iframe
  try { notInFocus = document.activeElement !== elm; } catch (e) {}
  return notInFocus && elm.value !== checkVal
}

function isDirtyWithModifiers (elm, newVal) {
  var value = elm.value;
  var modifiers = elm._vModifiers; // injected by v-model runtime
  if (isDef(modifiers)) {
    if (modifiers.lazy) {
      // inputs with lazy should only be updated when not in focus
      return false
    }
    if (modifiers.number) {
      return toNumber(value) !== toNumber(newVal)
    }
    if (modifiers.trim) {
      return value.trim() !== newVal.trim()
    }
  }
  return value !== newVal
}

var domProps = {
  create: updateDOMProps,
  update: updateDOMProps
}

/*  */

var parseStyleText = cached(function (cssText) {
  var res = {};
  var listDelimiter = /;(?![^(]*\))/g;
  var propertyDelimiter = /:(.+)/;
  cssText.split(listDelimiter).forEach(function (item) {
    if (item) {
      var tmp = item.split(propertyDelimiter);
      tmp.length > 1 && (res[tmp[0].trim()] = tmp[1].trim());
    }
  });
  return res
});

// merge static and dynamic style data on the same vnode
function normalizeStyleData (data) {
  var style = normalizeStyleBinding(data.style);
  // static style is pre-processed into an object during compilation
  // and is always a fresh object, so it's safe to merge into it
  return data.staticStyle
    ? extend(data.staticStyle, style)
    : style
}

// normalize possible array / string values into Object
function normalizeStyleBinding (bindingStyle) {
  if (Array.isArray(bindingStyle)) {
    return toObject(bindingStyle)
  }
  if (typeof bindingStyle === 'string') {
    return parseStyleText(bindingStyle)
  }
  return bindingStyle
}

/**
 * parent component style should be after child's
 * so that parent component's style could override it
 */
function getStyle (vnode, checkChild) {
  var res = {};
  var styleData;

  if (checkChild) {
    var childNode = vnode;
    while (childNode.componentInstance) {
      childNode = childNode.componentInstance._vnode;
      if (
        childNode && childNode.data &&
        (styleData = normalizeStyleData(childNode.data))
      ) {
        extend(res, styleData);
      }
    }
  }

  if ((styleData = normalizeStyleData(vnode.data))) {
    extend(res, styleData);
  }

  var parentNode = vnode;
  while ((parentNode = parentNode.parent)) {
    if (parentNode.data && (styleData = normalizeStyleData(parentNode.data))) {
      extend(res, styleData);
    }
  }
  return res
}

/*  */

var cssVarRE = /^--/;
var importantRE = /\s*!important$/;
var setProp = function (el, name, val) {
  /* istanbul ignore if */
  if (cssVarRE.test(name)) {
    el.style.setProperty(name, val);
  } else if (importantRE.test(val)) {
    el.style.setProperty(name, val.replace(importantRE, ''), 'important');
  } else {
    var normalizedName = normalize(name);
    if (Array.isArray(val)) {
      // Support values array created by autoprefixer, e.g.
      // {display: ["-webkit-box", "-ms-flexbox", "flex"]}
      // Set them one by one, and the browser will only set those it can recognize
      for (var i = 0, len = val.length; i < len; i++) {
        el.style[normalizedName] = val[i];
      }
    } else {
      el.style[normalizedName] = val;
    }
  }
};

var vendorNames = ['Webkit', 'Moz', 'ms'];

var emptyStyle;
var normalize = cached(function (prop) {
  emptyStyle = emptyStyle || document.createElement('div').style;
  prop = camelize(prop);
  if (prop !== 'filter' && (prop in emptyStyle)) {
    return prop
  }
  var capName = prop.charAt(0).toUpperCase() + prop.slice(1);
  for (var i = 0; i < vendorNames.length; i++) {
    var name = vendorNames[i] + capName;
    if (name in emptyStyle) {
      return name
    }
  }
});

function updateStyle (oldVnode, vnode) {
  var data = vnode.data;
  var oldData = oldVnode.data;

  if (isUndef(data.staticStyle) && isUndef(data.style) &&
    isUndef(oldData.staticStyle) && isUndef(oldData.style)
  ) {
    return
  }

  var cur, name;
  var el = vnode.elm;
  var oldStaticStyle = oldData.staticStyle;
  var oldStyleBinding = oldData.normalizedStyle || oldData.style || {};

  // if static style exists, stylebinding already merged into it when doing normalizeStyleData
  var oldStyle = oldStaticStyle || oldStyleBinding;

  var style = normalizeStyleBinding(vnode.data.style) || {};

  // store normalized style under a different key for next diff
  // make sure to clone it if it's reactive, since the user likely wants
  // to mutate it.
  vnode.data.normalizedStyle = isDef(style.__ob__)
    ? extend({}, style)
    : style;

  var newStyle = getStyle(vnode, true);

  for (name in oldStyle) {
    if (isUndef(newStyle[name])) {
      setProp(el, name, '');
    }
  }
  for (name in newStyle) {
    cur = newStyle[name];
    if (cur !== oldStyle[name]) {
      // ie9 setting to null has no effect, must use empty string
      setProp(el, name, cur == null ? '' : cur);
    }
  }
}

var style = {
  create: updateStyle,
  update: updateStyle
}

/*  */

/**
 * Add class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function addClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.add(c); });
    } else {
      el.classList.add(cls);
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    if (cur.indexOf(' ' + cls + ' ') < 0) {
      el.setAttribute('class', (cur + cls).trim());
    }
  }
}

/**
 * Remove class with compatibility for SVG since classList is not supported on
 * SVG elements in IE
 */
function removeClass (el, cls) {
  /* istanbul ignore if */
  if (!cls || !(cls = cls.trim())) {
    return
  }

  /* istanbul ignore else */
  if (el.classList) {
    if (cls.indexOf(' ') > -1) {
      cls.split(/\s+/).forEach(function (c) { return el.classList.remove(c); });
    } else {
      el.classList.remove(cls);
    }
    if (!el.classList.length) {
      el.removeAttribute('class');
    }
  } else {
    var cur = " " + (el.getAttribute('class') || '') + " ";
    var tar = ' ' + cls + ' ';
    while (cur.indexOf(tar) >= 0) {
      cur = cur.replace(tar, ' ');
    }
    cur = cur.trim();
    if (cur) {
      el.setAttribute('class', cur);
    } else {
      el.removeAttribute('class');
    }
  }
}

/*  */

function resolveTransition (def) {
  if (!def) {
    return
  }
  /* istanbul ignore else */
  if (typeof def === 'object') {
    var res = {};
    if (def.css !== false) {
      extend(res, autoCssTransition(def.name || 'v'));
    }
    extend(res, def);
    return res
  } else if (typeof def === 'string') {
    return autoCssTransition(def)
  }
}

var autoCssTransition = cached(function (name) {
  return {
    enterClass: (name + "-enter"),
    enterToClass: (name + "-enter-to"),
    enterActiveClass: (name + "-enter-active"),
    leaveClass: (name + "-leave"),
    leaveToClass: (name + "-leave-to"),
    leaveActiveClass: (name + "-leave-active")
  }
});

var hasTransition = inBrowser && !isIE9;
var TRANSITION = 'transition';
var ANIMATION = 'animation';

// Transition property/event sniffing
var transitionProp = 'transition';
var transitionEndEvent = 'transitionend';
var animationProp = 'animation';
var animationEndEvent = 'animationend';
if (hasTransition) {
  /* istanbul ignore if */
  if (window.ontransitionend === undefined &&
    window.onwebkittransitionend !== undefined
  ) {
    transitionProp = 'WebkitTransition';
    transitionEndEvent = 'webkitTransitionEnd';
  }
  if (window.onanimationend === undefined &&
    window.onwebkitanimationend !== undefined
  ) {
    animationProp = 'WebkitAnimation';
    animationEndEvent = 'webkitAnimationEnd';
  }
}

// binding to window is necessary to make hot reload work in IE in strict mode
var raf = inBrowser
  ? window.requestAnimationFrame
    ? window.requestAnimationFrame.bind(window)
    : setTimeout
  : /* istanbul ignore next */ function (fn) { return fn(); };

function nextFrame (fn) {
  raf(function () {
    raf(fn);
  });
}

function addTransitionClass (el, cls) {
  var transitionClasses = el._transitionClasses || (el._transitionClasses = []);
  if (transitionClasses.indexOf(cls) < 0) {
    transitionClasses.push(cls);
    addClass(el, cls);
  }
}

function removeTransitionClass (el, cls) {
  if (el._transitionClasses) {
    remove(el._transitionClasses, cls);
  }
  removeClass(el, cls);
}

function whenTransitionEnds (
  el,
  expectedType,
  cb
) {
  var ref = getTransitionInfo(el, expectedType);
  var type = ref.type;
  var timeout = ref.timeout;
  var propCount = ref.propCount;
  if (!type) { return cb() }
  var event = type === TRANSITION ? transitionEndEvent : animationEndEvent;
  var ended = 0;
  var end = function () {
    el.removeEventListener(event, onEnd);
    cb();
  };
  var onEnd = function (e) {
    if (e.target === el) {
      if (++ended >= propCount) {
        end();
      }
    }
  };
  setTimeout(function () {
    if (ended < propCount) {
      end();
    }
  }, timeout + 1);
  el.addEventListener(event, onEnd);
}

var transformRE = /\b(transform|all)(,|$)/;

function getTransitionInfo (el, expectedType) {
  var styles = window.getComputedStyle(el);
  var transitionDelays = styles[transitionProp + 'Delay'].split(', ');
  var transitionDurations = styles[transitionProp + 'Duration'].split(', ');
  var transitionTimeout = getTimeout(transitionDelays, transitionDurations);
  var animationDelays = styles[animationProp + 'Delay'].split(', ');
  var animationDurations = styles[animationProp + 'Duration'].split(', ');
  var animationTimeout = getTimeout(animationDelays, animationDurations);

  var type;
  var timeout = 0;
  var propCount = 0;
  /* istanbul ignore if */
  if (expectedType === TRANSITION) {
    if (transitionTimeout > 0) {
      type = TRANSITION;
      timeout = transitionTimeout;
      propCount = transitionDurations.length;
    }
  } else if (expectedType === ANIMATION) {
    if (animationTimeout > 0) {
      type = ANIMATION;
      timeout = animationTimeout;
      propCount = animationDurations.length;
    }
  } else {
    timeout = Math.max(transitionTimeout, animationTimeout);
    type = timeout > 0
      ? transitionTimeout > animationTimeout
        ? TRANSITION
        : ANIMATION
      : null;
    propCount = type
      ? type === TRANSITION
        ? transitionDurations.length
        : animationDurations.length
      : 0;
  }
  var hasTransform =
    type === TRANSITION &&
    transformRE.test(styles[transitionProp + 'Property']);
  return {
    type: type,
    timeout: timeout,
    propCount: propCount,
    hasTransform: hasTransform
  }
}

function getTimeout (delays, durations) {
  /* istanbul ignore next */
  while (delays.length < durations.length) {
    delays = delays.concat(delays);
  }

  return Math.max.apply(null, durations.map(function (d, i) {
    return toMs(d) + toMs(delays[i])
  }))
}

function toMs (s) {
  return Number(s.slice(0, -1)) * 1000
}

/*  */

function enter (vnode, toggleDisplay) {
  var el = vnode.elm;

  // call leave callback now
  if (isDef(el._leaveCb)) {
    el._leaveCb.cancelled = true;
    el._leaveCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data)) {
    return
  }

  /* istanbul ignore if */
  if (isDef(el._enterCb) || el.nodeType !== 1) {
    return
  }

  var css = data.css;
  var type = data.type;
  var enterClass = data.enterClass;
  var enterToClass = data.enterToClass;
  var enterActiveClass = data.enterActiveClass;
  var appearClass = data.appearClass;
  var appearToClass = data.appearToClass;
  var appearActiveClass = data.appearActiveClass;
  var beforeEnter = data.beforeEnter;
  var enter = data.enter;
  var afterEnter = data.afterEnter;
  var enterCancelled = data.enterCancelled;
  var beforeAppear = data.beforeAppear;
  var appear = data.appear;
  var afterAppear = data.afterAppear;
  var appearCancelled = data.appearCancelled;
  var duration = data.duration;

  // activeInstance will always be the <transition> component managing this
  // transition. One edge case to check is when the <transition> is placed
  // as the root node of a child component. In that case we need to check
  // <transition>'s parent for appear check.
  var context = activeInstance;
  var transitionNode = activeInstance.$vnode;
  while (transitionNode && transitionNode.parent) {
    transitionNode = transitionNode.parent;
    context = transitionNode.context;
  }

  var isAppear = !context._isMounted || !vnode.isRootInsert;

  if (isAppear && !appear && appear !== '') {
    return
  }

  var startClass = isAppear && appearClass
    ? appearClass
    : enterClass;
  var activeClass = isAppear && appearActiveClass
    ? appearActiveClass
    : enterActiveClass;
  var toClass = isAppear && appearToClass
    ? appearToClass
    : enterToClass;

  var beforeEnterHook = isAppear
    ? (beforeAppear || beforeEnter)
    : beforeEnter;
  var enterHook = isAppear
    ? (typeof appear === 'function' ? appear : enter)
    : enter;
  var afterEnterHook = isAppear
    ? (afterAppear || afterEnter)
    : afterEnter;
  var enterCancelledHook = isAppear
    ? (appearCancelled || enterCancelled)
    : enterCancelled;

  var explicitEnterDuration = toNumber(
    isObject(duration)
      ? duration.enter
      : duration
  );

  if ("development" !== 'production' && explicitEnterDuration != null) {
    checkDuration(explicitEnterDuration, 'enter', vnode);
  }

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(enterHook);

  var cb = el._enterCb = once(function () {
    if (expectsCSS) {
      removeTransitionClass(el, toClass);
      removeTransitionClass(el, activeClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, startClass);
      }
      enterCancelledHook && enterCancelledHook(el);
    } else {
      afterEnterHook && afterEnterHook(el);
    }
    el._enterCb = null;
  });

  if (!vnode.data.show) {
    // remove pending leave element on enter by injecting an insert hook
    mergeVNodeHook(vnode, 'insert', function () {
      var parent = el.parentNode;
      var pendingNode = parent && parent._pending && parent._pending[vnode.key];
      if (pendingNode &&
        pendingNode.tag === vnode.tag &&
        pendingNode.elm._leaveCb
      ) {
        pendingNode.elm._leaveCb();
      }
      enterHook && enterHook(el, cb);
    });
  }

  // start enter transition
  beforeEnterHook && beforeEnterHook(el);
  if (expectsCSS) {
    addTransitionClass(el, startClass);
    addTransitionClass(el, activeClass);
    nextFrame(function () {
      removeTransitionClass(el, startClass);
      if (!cb.cancelled) {
        addTransitionClass(el, toClass);
        if (!userWantsControl) {
          if (isValidDuration(explicitEnterDuration)) {
            setTimeout(cb, explicitEnterDuration);
          } else {
            whenTransitionEnds(el, type, cb);
          }
        }
      }
    });
  }

  if (vnode.data.show) {
    toggleDisplay && toggleDisplay();
    enterHook && enterHook(el, cb);
  }

  if (!expectsCSS && !userWantsControl) {
    cb();
  }
}

function leave (vnode, rm) {
  var el = vnode.elm;

  // call enter callback now
  if (isDef(el._enterCb)) {
    el._enterCb.cancelled = true;
    el._enterCb();
  }

  var data = resolveTransition(vnode.data.transition);
  if (isUndef(data) || el.nodeType !== 1) {
    return rm()
  }

  /* istanbul ignore if */
  if (isDef(el._leaveCb)) {
    return
  }

  var css = data.css;
  var type = data.type;
  var leaveClass = data.leaveClass;
  var leaveToClass = data.leaveToClass;
  var leaveActiveClass = data.leaveActiveClass;
  var beforeLeave = data.beforeLeave;
  var leave = data.leave;
  var afterLeave = data.afterLeave;
  var leaveCancelled = data.leaveCancelled;
  var delayLeave = data.delayLeave;
  var duration = data.duration;

  var expectsCSS = css !== false && !isIE9;
  var userWantsControl = getHookArgumentsLength(leave);

  var explicitLeaveDuration = toNumber(
    isObject(duration)
      ? duration.leave
      : duration
  );

  if ("development" !== 'production' && isDef(explicitLeaveDuration)) {
    checkDuration(explicitLeaveDuration, 'leave', vnode);
  }

  var cb = el._leaveCb = once(function () {
    if (el.parentNode && el.parentNode._pending) {
      el.parentNode._pending[vnode.key] = null;
    }
    if (expectsCSS) {
      removeTransitionClass(el, leaveToClass);
      removeTransitionClass(el, leaveActiveClass);
    }
    if (cb.cancelled) {
      if (expectsCSS) {
        removeTransitionClass(el, leaveClass);
      }
      leaveCancelled && leaveCancelled(el);
    } else {
      rm();
      afterLeave && afterLeave(el);
    }
    el._leaveCb = null;
  });

  if (delayLeave) {
    delayLeave(performLeave);
  } else {
    performLeave();
  }

  function performLeave () {
    // the delayed leave may have already been cancelled
    if (cb.cancelled) {
      return
    }
    // record leaving element
    if (!vnode.data.show) {
      (el.parentNode._pending || (el.parentNode._pending = {}))[(vnode.key)] = vnode;
    }
    beforeLeave && beforeLeave(el);
    if (expectsCSS) {
      addTransitionClass(el, leaveClass);
      addTransitionClass(el, leaveActiveClass);
      nextFrame(function () {
        removeTransitionClass(el, leaveClass);
        if (!cb.cancelled) {
          addTransitionClass(el, leaveToClass);
          if (!userWantsControl) {
            if (isValidDuration(explicitLeaveDuration)) {
              setTimeout(cb, explicitLeaveDuration);
            } else {
              whenTransitionEnds(el, type, cb);
            }
          }
        }
      });
    }
    leave && leave(el, cb);
    if (!expectsCSS && !userWantsControl) {
      cb();
    }
  }
}

// only used in dev mode
function checkDuration (val, name, vnode) {
  if (typeof val !== 'number') {
    warn(
      "<transition> explicit " + name + " duration is not a valid number - " +
      "got " + (JSON.stringify(val)) + ".",
      vnode.context
    );
  } else if (isNaN(val)) {
    warn(
      "<transition> explicit " + name + " duration is NaN - " +
      'the duration expression might be incorrect.',
      vnode.context
    );
  }
}

function isValidDuration (val) {
  return typeof val === 'number' && !isNaN(val)
}

/**
 * Normalize a transition hook's argument length. The hook may be:
 * - a merged hook (invoker) with the original in .fns
 * - a wrapped component method (check ._length)
 * - a plain function (.length)
 */
function getHookArgumentsLength (fn) {
  if (isUndef(fn)) {
    return false
  }
  var invokerFns = fn.fns;
  if (isDef(invokerFns)) {
    // invoker
    return getHookArgumentsLength(
      Array.isArray(invokerFns)
        ? invokerFns[0]
        : invokerFns
    )
  } else {
    return (fn._length || fn.length) > 1
  }
}

function _enter (_, vnode) {
  if (vnode.data.show !== true) {
    enter(vnode);
  }
}

var transition = inBrowser ? {
  create: _enter,
  activate: _enter,
  remove: function remove$$1 (vnode, rm) {
    /* istanbul ignore else */
    if (vnode.data.show !== true) {
      leave(vnode, rm);
    } else {
      rm();
    }
  }
} : {}

var platformModules = [
  attrs,
  klass,
  events,
  domProps,
  style,
  transition
]

/*  */

// the directive module should be applied last, after all
// built-in modules have been applied.
var modules = platformModules.concat(baseModules);

var patch = createPatchFunction({ nodeOps: nodeOps, modules: modules });

/**
 * Not type checking this file because flow doesn't like attaching
 * properties to Elements.
 */

/* istanbul ignore if */
if (isIE9) {
  // http://www.matts411.com/post/internet-explorer-9-oninput/
  document.addEventListener('selectionchange', function () {
    var el = document.activeElement;
    if (el && el.vmodel) {
      trigger(el, 'input');
    }
  });
}

var directive = {
  inserted: function inserted (el, binding, vnode, oldVnode) {
    if (vnode.tag === 'select') {
      // #6903
      if (oldVnode.elm && !oldVnode.elm._vOptions) {
        mergeVNodeHook(vnode, 'postpatch', function () {
          directive.componentUpdated(el, binding, vnode);
        });
      } else {
        setSelected(el, binding, vnode.context);
      }
      el._vOptions = [].map.call(el.options, getValue);
    } else if (vnode.tag === 'textarea' || isTextInputType(el.type)) {
      el._vModifiers = binding.modifiers;
      if (!binding.modifiers.lazy) {
        el.addEventListener('compositionstart', onCompositionStart);
        el.addEventListener('compositionend', onCompositionEnd);
        // Safari < 10.2 & UIWebView doesn't fire compositionend when
        // switching focus before confirming composition choice
        // this also fixes the issue where some browsers e.g. iOS Chrome
        // fires "change" instead of "input" on autocomplete.
        el.addEventListener('change', onCompositionEnd);
        /* istanbul ignore if */
        if (isIE9) {
          el.vmodel = true;
        }
      }
    }
  },

  componentUpdated: function componentUpdated (el, binding, vnode) {
    if (vnode.tag === 'select') {
      setSelected(el, binding, vnode.context);
      // in case the options rendered by v-for have changed,
      // it's possible that the value is out-of-sync with the rendered options.
      // detect such cases and filter out values that no longer has a matching
      // option in the DOM.
      var prevOptions = el._vOptions;
      var curOptions = el._vOptions = [].map.call(el.options, getValue);
      if (curOptions.some(function (o, i) { return !looseEqual(o, prevOptions[i]); })) {
        // trigger change event if
        // no matching option found for at least one value
        var needReset = el.multiple
          ? binding.value.some(function (v) { return hasNoMatchingOption(v, curOptions); })
          : binding.value !== binding.oldValue && hasNoMatchingOption(binding.value, curOptions);
        if (needReset) {
          trigger(el, 'change');
        }
      }
    }
  }
};

function setSelected (el, binding, vm) {
  actuallySetSelected(el, binding, vm);
  /* istanbul ignore if */
  if (isIE || isEdge) {
    setTimeout(function () {
      actuallySetSelected(el, binding, vm);
    }, 0);
  }
}

function actuallySetSelected (el, binding, vm) {
  var value = binding.value;
  var isMultiple = el.multiple;
  if (isMultiple && !Array.isArray(value)) {
    "development" !== 'production' && warn(
      "<select multiple v-model=\"" + (binding.expression) + "\"> " +
      "expects an Array value for its binding, but got " + (Object.prototype.toString.call(value).slice(8, -1)),
      vm
    );
    return
  }
  var selected, option;
  for (var i = 0, l = el.options.length; i < l; i++) {
    option = el.options[i];
    if (isMultiple) {
      selected = looseIndexOf(value, getValue(option)) > -1;
      if (option.selected !== selected) {
        option.selected = selected;
      }
    } else {
      if (looseEqual(getValue(option), value)) {
        if (el.selectedIndex !== i) {
          el.selectedIndex = i;
        }
        return
      }
    }
  }
  if (!isMultiple) {
    el.selectedIndex = -1;
  }
}

function hasNoMatchingOption (value, options) {
  return options.every(function (o) { return !looseEqual(o, value); })
}

function getValue (option) {
  return '_value' in option
    ? option._value
    : option.value
}

function onCompositionStart (e) {
  e.target.composing = true;
}

function onCompositionEnd (e) {
  // prevent triggering an input event for no reason
  if (!e.target.composing) { return }
  e.target.composing = false;
  trigger(e.target, 'input');
}

function trigger (el, type) {
  var e = document.createEvent('HTMLEvents');
  e.initEvent(type, true, true);
  el.dispatchEvent(e);
}

/*  */

// recursively search for possible transition defined inside the component root
function locateNode (vnode) {
  return vnode.componentInstance && (!vnode.data || !vnode.data.transition)
    ? locateNode(vnode.componentInstance._vnode)
    : vnode
}

var show = {
  bind: function bind (el, ref, vnode) {
    var value = ref.value;

    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    var originalDisplay = el.__vOriginalDisplay =
      el.style.display === 'none' ? '' : el.style.display;
    if (value && transition$$1) {
      vnode.data.show = true;
      enter(vnode, function () {
        el.style.display = originalDisplay;
      });
    } else {
      el.style.display = value ? originalDisplay : 'none';
    }
  },

  update: function update (el, ref, vnode) {
    var value = ref.value;
    var oldValue = ref.oldValue;

    /* istanbul ignore if */
    if (!value === !oldValue) { return }
    vnode = locateNode(vnode);
    var transition$$1 = vnode.data && vnode.data.transition;
    if (transition$$1) {
      vnode.data.show = true;
      if (value) {
        enter(vnode, function () {
          el.style.display = el.__vOriginalDisplay;
        });
      } else {
        leave(vnode, function () {
          el.style.display = 'none';
        });
      }
    } else {
      el.style.display = value ? el.__vOriginalDisplay : 'none';
    }
  },

  unbind: function unbind (
    el,
    binding,
    vnode,
    oldVnode,
    isDestroy
  ) {
    if (!isDestroy) {
      el.style.display = el.__vOriginalDisplay;
    }
  }
}

var platformDirectives = {
  model: directive,
  show: show
}

/*  */

// Provides transition support for a single element/component.
// supports transition mode (out-in / in-out)

var transitionProps = {
  name: String,
  appear: Boolean,
  css: Boolean,
  mode: String,
  type: String,
  enterClass: String,
  leaveClass: String,
  enterToClass: String,
  leaveToClass: String,
  enterActiveClass: String,
  leaveActiveClass: String,
  appearClass: String,
  appearActiveClass: String,
  appearToClass: String,
  duration: [Number, String, Object]
};

// in case the child is also an abstract component, e.g. <keep-alive>
// we want to recursively retrieve the real component to be rendered
function getRealChild (vnode) {
  var compOptions = vnode && vnode.componentOptions;
  if (compOptions && compOptions.Ctor.options.abstract) {
    return getRealChild(getFirstComponentChild(compOptions.children))
  } else {
    return vnode
  }
}

function extractTransitionData (comp) {
  var data = {};
  var options = comp.$options;
  // props
  for (var key in options.propsData) {
    data[key] = comp[key];
  }
  // events.
  // extract listeners and pass them directly to the transition methods
  var listeners = options._parentListeners;
  for (var key$1 in listeners) {
    data[camelize(key$1)] = listeners[key$1];
  }
  return data
}

function placeholder (h, rawChild) {
  if (/\d-keep-alive$/.test(rawChild.tag)) {
    return h('keep-alive', {
      props: rawChild.componentOptions.propsData
    })
  }
}

function hasParentTransition (vnode) {
  while ((vnode = vnode.parent)) {
    if (vnode.data.transition) {
      return true
    }
  }
}

function isSameChild (child, oldChild) {
  return oldChild.key === child.key && oldChild.tag === child.tag
}

var Transition = {
  name: 'transition',
  props: transitionProps,
  abstract: true,

  render: function render (h) {
    var this$1 = this;

    var children = this.$slots.default;
    if (!children) {
      return
    }

    // filter out text nodes (possible whitespaces)
    children = children.filter(function (c) { return c.tag || isAsyncPlaceholder(c); });
    /* istanbul ignore if */
    if (!children.length) {
      return
    }

    // warn multiple elements
    if ("development" !== 'production' && children.length > 1) {
      warn(
        '<transition> can only be used on a single element. Use ' +
        '<transition-group> for lists.',
        this.$parent
      );
    }

    var mode = this.mode;

    // warn invalid mode
    if ("development" !== 'production' &&
      mode && mode !== 'in-out' && mode !== 'out-in'
    ) {
      warn(
        'invalid <transition> mode: ' + mode,
        this.$parent
      );
    }

    var rawChild = children[0];

    // if this is a component root node and the component's
    // parent container node also has transition, skip.
    if (hasParentTransition(this.$vnode)) {
      return rawChild
    }

    // apply transition data to child
    // use getRealChild() to ignore abstract components e.g. keep-alive
    var child = getRealChild(rawChild);
    /* istanbul ignore if */
    if (!child) {
      return rawChild
    }

    if (this._leaving) {
      return placeholder(h, rawChild)
    }

    // ensure a key that is unique to the vnode type and to this transition
    // component instance. This key will be used to remove pending leaving nodes
    // during entering.
    var id = "__transition-" + (this._uid) + "-";
    child.key = child.key == null
      ? child.isComment
        ? id + 'comment'
        : id + child.tag
      : isPrimitive(child.key)
        ? (String(child.key).indexOf(id) === 0 ? child.key : id + child.key)
        : child.key;

    var data = (child.data || (child.data = {})).transition = extractTransitionData(this);
    var oldRawChild = this._vnode;
    var oldChild = getRealChild(oldRawChild);

    // mark v-show
    // so that the transition module can hand over the control to the directive
    if (child.data.directives && child.data.directives.some(function (d) { return d.name === 'show'; })) {
      child.data.show = true;
    }

    if (
      oldChild &&
      oldChild.data &&
      !isSameChild(child, oldChild) &&
      !isAsyncPlaceholder(oldChild) &&
      // #6687 component root is a comment node
      !(oldChild.componentInstance && oldChild.componentInstance._vnode.isComment)
    ) {
      // replace old child transition data with fresh one
      // important for dynamic transitions!
      var oldData = oldChild.data.transition = extend({}, data);
      // handle transition mode
      if (mode === 'out-in') {
        // return placeholder node and queue update when leave finishes
        this._leaving = true;
        mergeVNodeHook(oldData, 'afterLeave', function () {
          this$1._leaving = false;
          this$1.$forceUpdate();
        });
        return placeholder(h, rawChild)
      } else if (mode === 'in-out') {
        if (isAsyncPlaceholder(child)) {
          return oldRawChild
        }
        var delayedLeave;
        var performLeave = function () { delayedLeave(); };
        mergeVNodeHook(data, 'afterEnter', performLeave);
        mergeVNodeHook(data, 'enterCancelled', performLeave);
        mergeVNodeHook(oldData, 'delayLeave', function (leave) { delayedLeave = leave; });
      }
    }

    return rawChild
  }
}

/*  */

// Provides transition support for list items.
// supports move transitions using the FLIP technique.

// Because the vdom's children update algorithm is "unstable" - i.e.
// it doesn't guarantee the relative positioning of removed elements,
// we force transition-group to update its children into two passes:
// in the first pass, we remove all nodes that need to be removed,
// triggering their leaving transition; in the second pass, we insert/move
// into the final desired state. This way in the second pass removed
// nodes will remain where they should be.

var props = extend({
  tag: String,
  moveClass: String
}, transitionProps);

delete props.mode;

var TransitionGroup = {
  props: props,

  render: function render (h) {
    var tag = this.tag || this.$vnode.data.tag || 'span';
    var map = Object.create(null);
    var prevChildren = this.prevChildren = this.children;
    var rawChildren = this.$slots.default || [];
    var children = this.children = [];
    var transitionData = extractTransitionData(this);

    for (var i = 0; i < rawChildren.length; i++) {
      var c = rawChildren[i];
      if (c.tag) {
        if (c.key != null && String(c.key).indexOf('__vlist') !== 0) {
          children.push(c);
          map[c.key] = c
          ;(c.data || (c.data = {})).transition = transitionData;
        } else if (true) {
          var opts = c.componentOptions;
          var name = opts ? (opts.Ctor.options.name || opts.tag || '') : c.tag;
          warn(("<transition-group> children must be keyed: <" + name + ">"));
        }
      }
    }

    if (prevChildren) {
      var kept = [];
      var removed = [];
      for (var i$1 = 0; i$1 < prevChildren.length; i$1++) {
        var c$1 = prevChildren[i$1];
        c$1.data.transition = transitionData;
        c$1.data.pos = c$1.elm.getBoundingClientRect();
        if (map[c$1.key]) {
          kept.push(c$1);
        } else {
          removed.push(c$1);
        }
      }
      this.kept = h(tag, null, kept);
      this.removed = removed;
    }

    return h(tag, null, children)
  },

  beforeUpdate: function beforeUpdate () {
    // force removing pass
    this.__patch__(
      this._vnode,
      this.kept,
      false, // hydrating
      true // removeOnly (!important, avoids unnecessary moves)
    );
    this._vnode = this.kept;
  },

  updated: function updated () {
    var children = this.prevChildren;
    var moveClass = this.moveClass || ((this.name || 'v') + '-move');
    if (!children.length || !this.hasMove(children[0].elm, moveClass)) {
      return
    }

    // we divide the work into three loops to avoid mixing DOM reads and writes
    // in each iteration - which helps prevent layout thrashing.
    children.forEach(callPendingCbs);
    children.forEach(recordPosition);
    children.forEach(applyTranslation);

    // force reflow to put everything in position
    // assign to this to avoid being removed in tree-shaking
    // $flow-disable-line
    this._reflow = document.body.offsetHeight;

    children.forEach(function (c) {
      if (c.data.moved) {
        var el = c.elm;
        var s = el.style;
        addTransitionClass(el, moveClass);
        s.transform = s.WebkitTransform = s.transitionDuration = '';
        el.addEventListener(transitionEndEvent, el._moveCb = function cb (e) {
          if (!e || /transform$/.test(e.propertyName)) {
            el.removeEventListener(transitionEndEvent, cb);
            el._moveCb = null;
            removeTransitionClass(el, moveClass);
          }
        });
      }
    });
  },

  methods: {
    hasMove: function hasMove (el, moveClass) {
      /* istanbul ignore if */
      if (!hasTransition) {
        return false
      }
      /* istanbul ignore if */
      if (this._hasMove) {
        return this._hasMove
      }
      // Detect whether an element with the move class applied has
      // CSS transitions. Since the element may be inside an entering
      // transition at this very moment, we make a clone of it and remove
      // all other transition classes applied to ensure only the move class
      // is applied.
      var clone = el.cloneNode();
      if (el._transitionClasses) {
        el._transitionClasses.forEach(function (cls) { removeClass(clone, cls); });
      }
      addClass(clone, moveClass);
      clone.style.display = 'none';
      this.$el.appendChild(clone);
      var info = getTransitionInfo(clone);
      this.$el.removeChild(clone);
      return (this._hasMove = info.hasTransform)
    }
  }
}

function callPendingCbs (c) {
  /* istanbul ignore if */
  if (c.elm._moveCb) {
    c.elm._moveCb();
  }
  /* istanbul ignore if */
  if (c.elm._enterCb) {
    c.elm._enterCb();
  }
}

function recordPosition (c) {
  c.data.newPos = c.elm.getBoundingClientRect();
}

function applyTranslation (c) {
  var oldPos = c.data.pos;
  var newPos = c.data.newPos;
  var dx = oldPos.left - newPos.left;
  var dy = oldPos.top - newPos.top;
  if (dx || dy) {
    c.data.moved = true;
    var s = c.elm.style;
    s.transform = s.WebkitTransform = "translate(" + dx + "px," + dy + "px)";
    s.transitionDuration = '0s';
  }
}

var platformComponents = {
  Transition: Transition,
  TransitionGroup: TransitionGroup
}

/*  */

// install platform specific utils
Vue.config.mustUseProp = mustUseProp;
Vue.config.isReservedTag = isReservedTag;
Vue.config.isReservedAttr = isReservedAttr;
Vue.config.getTagNamespace = getTagNamespace;
Vue.config.isUnknownElement = isUnknownElement;

// install platform runtime directives & components
extend(Vue.options.directives, platformDirectives);
extend(Vue.options.components, platformComponents);

// install platform patch function
Vue.prototype.__patch__ = inBrowser ? patch : noop;

// public mount method
Vue.prototype.$mount = function (
  el,
  hydrating
) {
  el = el && inBrowser ? query(el) : undefined;
  return mountComponent(this, el, hydrating)
};

// devtools global hook
/* istanbul ignore next */
if (inBrowser) {
  setTimeout(function () {
    if (config.devtools) {
      if (devtools) {
        devtools.emit('init', Vue);
      } else if (
        "development" !== 'production' &&
        "development" !== 'test' &&
        isChrome
      ) {
        console[console.info ? 'info' : 'log'](
          'Download the Vue Devtools extension for a better development experience:\n' +
          'https://github.com/vuejs/vue-devtools'
        );
      }
    }
    if ("development" !== 'production' &&
      "development" !== 'test' &&
      config.productionTip !== false &&
      typeof console !== 'undefined'
    ) {
      console[console.info ? 'info' : 'log'](
        "You are running Vue in development mode.\n" +
        "Make sure to turn on production mode when deploying for production.\n" +
        "See more tips at https://vuejs.org/guide/deployment.html"
      );
    }
  }, 0);
}

/*  */

/* harmony default export */ __webpack_exports__["default"] = (Vue);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js"), __webpack_require__(/*! ./../../timers-browserify/main.js */ "./node_modules/timers-browserify/main.js").setImmediate))

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
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),

/***/ "./src/_js/_foo.js":
/*!*************************!*\
  !*** ./src/_js/_foo.js ***!
  \*************************/
/*! exports provided: foo */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "foo", function() { return foo; });
function foo() {
  console.log('_foo.js');
}

/***/ }),

/***/ "./src/_scss/images/dummy.png":
/*!************************************!*\
  !*** ./src/_scss/images/dummy.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABLAAAAJ2CAMAAAB4notuAAAACXBIWXMAAAsTAAALEwEAmpwYAAA5sWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxMzggNzkuMTU5ODI0LCAyMDE2LzA5LzE0LTAxOjA5OjAxICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiCiAgICAgICAgICAgIHhtbG5zOnN0RXZ0PSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VFdmVudCMiCiAgICAgICAgICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgICAgICAgICAgeG1sbnM6ZGM9Imh0dHA6Ly9wdXJsLm9yZy9kYy9lbGVtZW50cy8xLjEvIgogICAgICAgICAgICB4bWxuczpwaG90b3Nob3A9Imh0dHA6Ly9ucy5hZG9iZS5jb20vcGhvdG9zaG9wLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOnRpZmY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vdGlmZi8xLjAvIgogICAgICAgICAgICB4bWxuczpleGlmPSJodHRwOi8vbnMuYWRvYmUuY29tL2V4aWYvMS4wLyI+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpkYTVmNDRkYi00MDAxLTQzNDItYjU5NS1mNTZkMGUxMmRmZGE8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpEMkE3MzlGNDlCMEQxMUU1OTQxQ0VERUJERTg1NDAyNDwveG1wTU06RG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkluc3RhbmNlSUQ+eG1wLmlpZDo2YmZlODY0Ny02NjBiLTQxMzMtYTg2NS0xY2U4MDA5NzYzOWI8L3htcE1NOkluc3RhbmNlSUQ+CiAgICAgICAgIDx4bXBNTTpEZXJpdmVkRnJvbSByZGY6cGFyc2VUeXBlPSJSZXNvdXJjZSI+CiAgICAgICAgICAgIDxzdFJlZjppbnN0YW5jZUlEPnhtcC5paWQ6OTFlOGFjY2QtYTlmOS00NmQxLWFjYWMtMmZhNThjNjZiYWMwPC9zdFJlZjppbnN0YW5jZUlEPgogICAgICAgICAgICA8c3RSZWY6ZG9jdW1lbnRJRD54bXAuZGlkOmRhNWY0NGRiLTQwMDEtNDM0Mi1iNTk1LWY1NmQwZTEyZGZkYTwvc3RSZWY6ZG9jdW1lbnRJRD4KICAgICAgICAgPC94bXBNTTpEZXJpdmVkRnJvbT4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5zYXZlZDwvc3RFdnQ6YWN0aW9uPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6aW5zdGFuY2VJRD54bXAuaWlkOjZiZmU4NjQ3LTY2MGItNDEzMy1hODY1LTFjZTgwMDk3NjM5Yjwvc3RFdnQ6aW5zdGFuY2VJRD4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OndoZW4+MjAxNi0xMS0yNVQxNzoxNzo0OCswOTowMDwvc3RFdnQ6d2hlbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnNvZnR3YXJlQWdlbnQ+QWRvYmUgUGhvdG9zaG9wIENDIDIwMTcgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgMjAxNyAoTWFjaW50b3NoKTwveG1wOkNyZWF0b3JUb29sPgogICAgICAgICA8eG1wOkNyZWF0ZURhdGU+MjAxNi0xMC0yN1QxNDoxNjoxMiswOTowMDwveG1wOkNyZWF0ZURhdGU+CiAgICAgICAgIDx4bXA6TW9kaWZ5RGF0ZT4yMDE2LTExLTI1VDE3OjE3OjQ4KzA5OjAwPC94bXA6TW9kaWZ5RGF0ZT4KICAgICAgICAgPHhtcDpNZXRhZGF0YURhdGU+MjAxNi0xMS0yNVQxNzoxNzo0OCswOTowMDwveG1wOk1ldGFkYXRhRGF0ZT4KICAgICAgICAgPGRjOmZvcm1hdD5pbWFnZS9wbmc8L2RjOmZvcm1hdD4KICAgICAgICAgPHBob3Rvc2hvcDpDb2xvck1vZGU+MjwvcGhvdG9zaG9wOkNvbG9yTW9kZT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+NjU1MzU8L2V4aWY6Q29sb3JTcGFjZT4KICAgICAgICAgPGV4aWY6UGl4ZWxYRGltZW5zaW9uPjEyMDA8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+NjMwPC9leGlmOlBpeGVsWURpbWVuc2lvbj4KICAgICAgPC9yZGY6RGVzY3JpcHRpb24+CiAgIDwvcmRmOlJERj4KPC94OnhtcG1ldGE+CiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4WXy0xAAAAIGNIUk0AAHolAACAgwAA+f8AAIDpAAB1MAAA6mAAADqYAAAXb5JfxUYAAAMAUExURcDU67zZ7Wqp2ZTB41ic0rDR6gBsu6DI5xd8wxx/xAl4wdnp9QR2wOrt9+Lm9FWb0tDd74K33uLr9jOIyfr8/m+s2ff5/Hyv2yyHyEmY0LPT697k8zSKysTe8EmVz+/w+LHL6BJ6wqjN6UGQzJzA44y431qh1F2f00GTzjiNy4+/4gByvn+x2y6IyZfD5CCAxV+k1iuFx9fg8azJ55S84K3P6v7+/0aTzubx+PD2+8jg8Ya03qTF5T2Rzcza7vb5/LnP6Xix22Ck1gBwvejy+VGc0mWk1jiPy2Oi1YOz3AB1v3et2bTN6ff6/SOCxgBuvNri8iSCxsPW7KHD5NXn9NLe8G+p16nH5ou94d7s9+z0+prF5fX2+u/2+8jZ7Y+539zj8ieEx77U63+23r3T6s7c7wBxvtLl89Pe8FKa0XWw27/b7uHm89Dk8+vu+Hqz3LbU7DuQzNjh8ePv+Mna7sHc75/C4/T5/HKu2mao2M7j8v3+/uTo9GGl1/z9/lef1PDy+H613aPK5zeKyuzx9xN7w6fG5dbo9TuOy0WW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"

/***/ }),

/***/ "./src/_scss/main.scss":
/*!*****************************!*\
  !*** ./src/_scss/main.scss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/lib??ref--5-2!../../node_modules/sass-loader/lib/loader.js??ref--5-3!./main.scss */ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/_scss/main.scss");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./src/entry.js":
/*!**********************!*\
  !*** ./src/entry.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js");
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! picturefill */ "./node_modules/picturefill/dist/picturefill.js");
/* harmony import */ var picturefill__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(picturefill__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _js_foo__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./_js/_foo */ "./src/_js/_foo.js");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./_scss/main.scss */ "./src/_scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_4__);
// jQuery

var $ = jquery__WEBPACK_IMPORTED_MODULE_0___default.a;

// vue


// picture要素ポリフィル


// その他のJS

Object(_js_foo__WEBPACK_IMPORTED_MODULE_3__["foo"])();

// css


/***/ })

/******/ });
//# sourceMappingURL=main.js.map