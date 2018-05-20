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
exports.push([module.i, "/*! sanitize.css v5.0.0 | CC0 License | github.com/jonathantneal/sanitize.css */*,:after,:before{background-repeat:no-repeat;box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,footer,header,nav,section{display:block}body{margin:0}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}nav ol,nav ul{list-style:none}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,optgroup,select,textarea{margin:0}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[tabindex],a,area,button,input,label,select,summary,textarea{touch-action:manipulation}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-hidden=false][hidden]:not(:focus){clip:rect(0,0,0,0);display:inherit;position:absolute}[aria-disabled]{cursor:default}", "", {"version":3,"sources":["/Users/otsuka/Desktop/_mydata/otsukayuhi_app/node_modules/sanitize.css/sanitize.css"],"names":[],"mappings":"AAAA,gFAAgF,AAUhF,iBAGC,4BAA4B,AAC5B,kBAAmB,CACnB,AAOD,eAEC,wBAAwB,AACxB,sBAAuB,CACvB,AAQD,KACC,sBAAsB,AACtB,eAAe,AACf,0BAA0B,AAC1B,6BAA8B,CAC9B,AASD,wCAMC,aAAc,CACd,AAMD,KACC,QAAS,CACT,AAOD,GACC,cAAc,AACd,cAAe,CACf,AAUD,uBAGC,aAAc,CACd,AAMD,OACC,eAAgB,CAChB,AAOD,GACC,uBAAuB,AACvB,SAAS,AACT,gBAAiB,CACjB,AAMD,cAEC,eAAgB,CAChB,AAOD,IACC,gCAAiC,AACjC,aAAc,CACd,AAUD,EACC,6BAA6B,AAC7B,oCAAqC,CACrC,AAOD,YACC,mBAAmB,AACnB,0BAA0B,AAC1B,yCAAiC,AAAjC,gCAAiC,CACjC,AAMD,SAEC,oBAAoB,AASpB,kBAAmB,CARnB,AAgBD,cAGC,gCAAiC,AACjC,aAAc,CACd,AAMD,IACC,iBAAkB,CAClB,AAMD,KACC,sBAAyB,AACzB,UAAc,CACd,AAMD,MACC,aAAc,CACd,AAOD,QAEC,cAAc,AACd,cAAc,AACd,kBAAkB,AAClB,uBAAwB,CACxB,AAED,IACC,aAAc,CACd,AAED,IACC,SAAU,CACV,AAOD,iBACC,yBAAyB,AACzB,WAAc,AACd,gBAAiB,CACjB,AAED,YACC,yBAAyB,AACzB,WAAc,AACd,gBAAiB,CACjB,AASD,kCAMC,qBAAsB,CACtB,AAMD,YAEC,oBAAqB,CACrB,AAMD,sBACC,aAAa,AACb,QAAS,CACT,AAMD,IACC,iBAAkB,CAClB,AAMD,IACC,iBAAkB,CAClB,AAMD,eACC,eAAgB,CAChB,AASD,MACC,wBAAyB,CACzB,AASD,sCAKC,QAAS,CACT,AAMD,6BAIC,6BAA6B,AAC7B,cAAc,AACd,kBAAkB,AAClB,mBAAoB,CACpB,AAOD,aAEC,gBAAiB,CACjB,AAOD,cAEC,mBAAoB,CACpB,AAQD,qDAIC,yBAA0B,CAC1B,AAMD,wHAIC,kBAAkB,AAClB,SAAU,CACV,AAMD,4GAIC,6BAA8B,CAC9B,AASD,OACC,sBAAsB,AACtB,cAAc,AACd,cAAc,AACd,eAAe,AACf,UAAU,AACV,kBAAmB,CACnB,AAOD,SACC,qBAAqB,AACrB,uBAAwB,CACxB,AAOD,SACC,cAAc,AACd,eAAgB,CAChB,AA3CD,6BAoDC,sBAAsB,AACtB,SAAU,CACV,AA5CD,kFAoDC,WAAY,CACZ,AA7CD,cAqDC,6BAA6B,AAC7B,mBAAoB,CACpB,AA9CD,qFAsDC,uBAAwB,CACxB,AAOD,6BACC,0BAA0B,AAC1B,YAAa,CACb,AAUD,aAEC,aAAc,CACd,AAMD,QACC,iBAAkB,CAClB,AASD,OACC,oBAAqB,CACrB,AAMD,SACC,YAAa,CACb,AAUD,6DAUC,yBAA0B,CAC1B,AA5DD,SAmEC,YAAa,CACb,AA5DD,iBAsEC,eAAgB,CAChB,AAjED,gBAwEC,cAAe,CACf,AAnED,wCA0EC,mBAAsB,AACtB,gBAAgB,AAChB,iBAAkB,CAClB,AApED,gBA4EC,cAAe,CACf","file":"sanitize.css","sourcesContent":["/*! sanitize.css v5.0.0 | CC0 License | github.com/jonathantneal/sanitize.css */\n\n/* Document (https://html.spec.whatwg.org/multipage/semantics.html#semantics)\n   ========================================================================== */\n\n/**\n * 1. Remove repeating backgrounds in all browsers (opinionated).\n * 2. Add box sizing inheritence in all browsers (opinionated).\n */\n\n*,\n::before,\n::after {\n\tbackground-repeat: no-repeat; /* 1 */\n\tbox-sizing: inherit; /* 2 */\n}\n\n/**\n * 1. Add text decoration inheritance in all browsers (opinionated).\n * 2. Add vertical alignment inheritence in all browsers (opinionated).\n */\n\n::before,\n::after {\n\ttext-decoration: inherit; /* 1 */\n\tvertical-align: inherit; /* 2 */\n}\n\n/**\n * 1. Add border box sizing in all browsers (opinionated).\n * 2. Add the default cursor in all browsers (opinionated).\n * 3. Prevent font size adjustments after orientation changes in IE and iOS.\n */\n\nhtml {\n\tbox-sizing: border-box; /* 1 */\n\tcursor: default; /* 2 */\n\t-ms-text-size-adjust: 100%; /* 3 */\n\t-webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections (https://html.spec.whatwg.org/multipage/semantics.html#sections)\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n\tdisplay: block;\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n\tmargin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n\tfont-size: 2em;\n\tmargin: .67em 0;\n}\n\n/* Grouping content (https://html.spec.whatwg.org/multipage/semantics.html#grouping-content)\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n\tdisplay: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n\tmargin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n\tbox-sizing: content-box; /* 1 */\n\theight: 0; /* 1 */\n\toverflow: visible; /* 2 */\n}\n\n/**\n * Remove the list style on navigation lists in all browsers (opinionated).\n */\n\nnav ol,\nnav ul {\n\tlist-style: none;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/* Text-level semantics (https://html.spec.whatwg.org/multipage/semantics.html#text-level-semantics)\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n\tbackground-color: transparent; /* 1 */\n\t-webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n\tborder-bottom: none; /* 1 */\n\ttext-decoration: underline; /* 2 */\n\ttext-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n\tfont-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n\tfont-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n\tbackground-color: #ffff00;\n\tcolor: #000000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -.25em;\n}\n\nsup {\n\ttop: -.5em;\n}\n\n/*\n * Remove the text shadow on text selections (opinionated).\n * 1. Restore the coloring undone by defining the text shadow (opinionated).\n */\n\n::-moz-selection {\n\tbackground-color: #b3d4fc; /* 1 */\n\tcolor: #000000; /* 1 */\n\ttext-shadow: none;\n}\n\n::selection {\n\tbackground-color: #b3d4fc; /* 1 */\n\tcolor: #000000; /* 1 */\n\ttext-shadow: none;\n}\n\n/* Embedded content (https://html.spec.whatwg.org/multipage/embedded-content.html#embedded-content)\n   ========================================================================== */\n\n/*\n * Change the alignment on media elements in all browers (opinionated).\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n\tvertical-align: middle;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n\tdisplay: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n\tdisplay: none;\n\theight: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n\tborder-style: none;\n}\n\n/**\n * Change the fill color to match the text color in all browsers (opinionated).\n */\n\nsvg {\n\tfill: currentColor;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n\toverflow: hidden;\n}\n\n/* Tabular data (https://html.spec.whatwg.org/multipage/tables.html#tables)\n   ========================================================================== */\n\n/**\n * Collapse border spacing\n */\n\ntable {\n\tborder-collapse: collapse;\n}\n\n/* Forms (https://html.spec.whatwg.org/multipage/forms.html#forms)\n   ========================================================================== */\n\n/**\n * Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tmargin: 0;\n}\n\n/**\n * Inherit styling in all browsers (opinionated).\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n\tbackground-color: transparent;\n\tcolor: inherit;\n\tfont-size: inherit;\n\tline-height: inherit;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n\toverflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type=\"button\"], /* 1 */\n[type=\"reset\"],\n[type=\"submit\"] {\n\t-webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type=\"button\"]::-moz-focus-inner,\n[type=\"reset\"]::-moz-focus-inner,\n[type=\"submit\"]::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type=\"button\"]:-moz-focusring,\n[type=\"reset\"]:-moz-focusring,\n[type=\"submit\"]:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n\tbox-sizing: border-box; /* 1 */\n\tcolor: inherit; /* 2 */\n\tdisplay: table; /* 1 */\n\tmax-width: 100%; /* 1 */\n\tpadding: 0; /* 3 */\n\twhite-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n\tdisplay: inline-block; /* 1 */\n\tvertical-align: baseline; /* 2 */\n}\n\n/**\n * 1. Remove the default vertical scrollbar in IE.\n * 2. Change the resize direction on textareas in all browsers (opinionated).\n */\n\ntextarea {\n\toverflow: auto; /* 1 */\n\tresize: vertical; /* 2 */\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type=\"checkbox\"],\n[type=\"radio\"] {\n\tbox-sizing: border-box; /* 1 */\n\tpadding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type=\"number\"]::-webkit-inner-spin-button,\n[type=\"number\"]::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type=\"search\"] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type=\"search\"]::-webkit-search-cancel-button,\n[type=\"search\"]::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/* Interactive elements (https://html.spec.whatwg.org/multipage/forms.html#interactive-elements)\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n\tdisplay: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n\tdisplay: list-item;\n}\n\n/* Scripting (https://html.spec.whatwg.org/multipage/scripting.html#scripting-3)\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n\tdisplay: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n\tdisplay: none;\n}\n\n/* User interaction (https://html.spec.whatwg.org/multipage/interaction.html#editing)\n   ========================================================================== */\n\n/*\n * Remove the tapping delay on clickable elements (opinionated).\n * 1. Remove the tapping delay in IE 10.\n */\n\na,\narea,\nbutton,\ninput,\nlabel,\nselect,\nsummary,\ntextarea,\n[tabindex] {\n\t-ms-touch-action: manipulation; /* 1 */\n\ttouch-action: manipulation;\n}\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n\tdisplay: none;\n}\n\n/* ARIA (https://w3c.github.io/html-aria/)\n   ========================================================================== */\n\n/**\n * Change the cursor on busy elements (opinionated).\n */\n\n[aria-busy=\"true\"] {\n\tcursor: progress;\n}\n\n/*\n * Change the cursor on control elements (opinionated).\n */\n\n[aria-controls] {\n\tcursor: pointer;\n}\n\n/*\n * Change the display on visually hidden accessible elements (opinionated).\n */\n\n[aria-hidden=\"false\"][hidden]:not(:focus) {\n\tclip: rect(0, 0, 0, 0);\n\tdisplay: inherit;\n\tposition: absolute;\n}\n\n/*\n * Change the cursor on disabled, not-editable, or otherwise\n * inoperable elements (opinionated).\n */\n\n[aria-disabled] {\n\tcursor: default;\n}\n"],"sourceRoot":""}]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/_scss/main.scss":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--5-1!./node_modules/postcss-loader/lib??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./src/_scss/main.scss ***!
  \****************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(true);
// imports
exports.i(__webpack_require__(/*! -!../../node_modules/css-loader??ref--5-1!../../node_modules/postcss-loader/lib??ref--5-2!../../node_modules/sass-loader/lib/loader.js??ref--5-3!sanitize.css/sanitize.css */ "./node_modules/css-loader/index.js??ref--5-1!./node_modules/postcss-loader/lib/index.js??ref--5-2!./node_modules/sass-loader/lib/loader.js??ref--5-3!./node_modules/sanitize.css/sanitize.css"), "");
exports.push([module.i, "@import url(https://fonts.googleapis.com/css?family=Source+Code+Pro);", ""]);

// module
exports.push([module.i, "html{font-size:62.5%}body{background-color:#242424;color:#fff;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;font-family:Source Code Pro,serif;-webkit-text-size-adjust:100%;line-height:1.4;word-wrap:break-word}.container{position:relative;height:100vh;color:#fff}.title{display:flex;justify-content:center;align-items:center;margin:0;height:100%;font-size:3rem;font-weight:400}@media screen and (min-width:737px){.title{font-size:7rem}}@media screen and (min-width:769px){.title{font-size:10rem}}.title_text{display:inline-block;position:relative}.title_text:after{content:\"\";position:absolute;top:0;bottom:0;margin:auto;width:3px;height:1em;background-color:#fff;-webkit-animation:titleUnderLine 1s linear infinite;animation:titleUnderLine 1s linear infinite}@-webkit-keyframes titleUnderLine{0%{visibility:hidden}50%{visibility:hidden}to{visibility:visible}}@keyframes titleUnderLine{0%{visibility:hidden}50%{visibility:hidden}to{visibility:visible}}.list{position:absolute;right:0;bottom:.5rem;left:0;display:flex;justify-content:space-between;margin:auto;padding:2rem;width:100%;max-width:375px}@media screen and (min-width:737px){.list{max-width:500px;bottom:20px}}.item{list-style:none;font-size:1.2rem}@media screen and (min-width:737px){.item{font-size:1.6rem}}.item a{color:#fff}.item a:hover{text-decoration:none}", "", {"version":3,"sources":["/Users/otsuka/Desktop/_mydata/otsukayuhi_app/src/_scss/_base.scss","/Users/otsuka/Desktop/_mydata/otsukayuhi_app/src/_scss/_settings.scss","/Users/otsuka/Desktop/_mydata/otsukayuhi_app/src/_scss/_style.scss","/Users/otsuka/Desktop/_mydata/otsukayuhi_app/src/_scss/_mixin.scss"],"names":[],"mappings":"AAEA,KACE,eCGe,CDFhB,AAED,KACE,yBCNsB,ADOtB,WCNqB,ADOrB,mCCL0B,ADM1B,2BCN0B,ADO1B,kCCNoC,ADOpC,8BAA8B,AAC9B,gBCNe,ADOf,oBAAqB,CACtB,AEfD,WACE,kBAAkB,AAClB,aAAa,AACb,UAAW,CACZ,AAGD,OACE,aAAa,AACb,uBAAuB,AACvB,mBAAmB,AACnB,SAAS,AACT,YAAY,AACZ,eAAe,AACf,eAAmB,CAOpB,ACjBC,oCDGF,OASI,cAAe,CAKlB,CAAA,ACZC,oCDFF,OAYI,eAAgB,CAEnB,CAAA,AACD,YACE,qBAAqB,AACrB,iBAAkB,CAYnB,AAdD,kBAII,WAAW,AACX,kBAAkB,AAClB,MAAM,AACN,SAAS,AACT,YAAY,AACZ,UAAU,AACV,WAAW,AACX,sBD/BmB,ACgCnB,oDAA4C,AAA5C,2CAA4C,CAC7C,AAGH,kCACE,GACE,iBAAkB,CAAA,AAEpB,IACE,iBAAkB,CAAA,AAEpB,GACE,kBAAmB,CAAA,CAAA,AARvB,0BACE,GACE,iBAAkB,CAAA,AAEpB,IACE,iBAAkB,CAAA,AAEpB,GACE,kBAAmB,CAAA,CAAA,AAKvB,MACE,kBAAkB,AAClB,QAAQ,AACR,aAAc,AACd,OAAO,AACP,aAAa,AACb,8BAA8B,AAC9B,YAAY,AACZ,aAAa,AACb,WAAW,AACX,eAAgB,CAKjB,AC9DC,oCD+CF,MAYI,gBAAgB,AAChB,WAAY,CAEf,CAAA,AACD,MACE,gBAAgB,AAChB,gBAAiB,CAUlB,AC3EC,oCD+DF,MAII,gBAAiB,CAQpB,CAAA,AAZD,QAOI,UAAW,CAIZ,AAXH,cASM,oBAAqB,CACtB","file":"main.scss","sourcesContent":["@import url('https://fonts.googleapis.com/css?family=Source+Code+Pro');\r\n\r\nhtml {\r\n  font-size: $font-size;\r\n}\r\n\r\nbody {\r\n  background-color: $color-bg-black;\r\n  color: $color-font-white;\r\n  -webkit-font-smoothing: $font-smoothing;\r\n  font-smoothing: $font-smoothing;\r\n  font-family: $font-family;\r\n  -webkit-text-size-adjust: 100%;\r\n  line-height: $line-height;\r\n  word-wrap: break-word;\r\n}\r\n","// settings\r\n$color-bg-black: #242424;\r\n$color-font-white: #fff;\r\n\r\n$font-smoothing: antialiased; //antialiased, subpixel-antialiased, none\r\n$font-family: 'Source Code Pro', serif;\r\n$font-size: 62.5%;\r\n$line-height: 1.4;\r\n\r\n$bp-md: 737px;\r\n$bp-lg: 769px;",".container {\n  position: relative;\n  height: 100vh;\n  color: #fff;\n}\n\n// tile\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  height: 100%;\n  font-size: 3rem;\n  font-weight: normal;\n  @include min-md {\n    font-size: 7rem;\n  }\n  @include min-lg {\n    font-size: 10rem;\n  }\n}\n.title_text {\n  display: inline-block;\n  position: relative;\n  &::after {\n    content: '';\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    margin: auto;\n    width: 3px;\n    height: 1em;\n    background-color: $color-font-white;\n    animation: titleUnderLine 1s linear infinite;\n  }\n}\n\n@keyframes titleUnderLine {\n  0% {\n    visibility: hidden;\n  }\n  50% {\n    visibility: hidden;\n  }\n  100% {\n    visibility: visible;\n  }\n}\n\n// links\n.list {\n  position: absolute;\n  right: 0;\n  bottom: 0.5rem;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  margin: auto;\n  padding: 2rem;\n  width: 100%;\n  max-width: 375px;\n  @include min-md {\n    max-width: 500px;\n    bottom: 20px;\n  }\n}\n.item {\n  list-style: none;\n  font-size: 1.2rem;\n  @include min-md {\n    font-size: 1.6rem;\n  }\n  a {\n    color: #fff;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n}\n","// mixin\r\n\r\n// media query\r\n@mixin min-md {\r\n  @media screen and (min-width: $bp-md) {\r\n    @content;\r\n  }\r\n}\r\n@mixin min-lg {\r\n  @media screen and (min-width: $bp-lg) {\r\n    @content;\r\n  }\r\n}\r\n"],"sourceRoot":""}]);

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
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./_scss/main.scss */ "./src/_scss/main.scss");
/* harmony import */ var _scss_main_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_scss_main_scss__WEBPACK_IMPORTED_MODULE_0__);
// css


// // jQuery
// import jQuery from 'jquery';
// const $ = jQuery;

// // vue
// import Vue from "vue";

// // picture要素ポリフィル
// import Picturefill from "picturefill";

// // その他のJS
// import { foo } from "./_js/_foo";
// foo();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3Nhbml0aXplLmNzcy9zYW5pdGl6ZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zY3NzL21haW4uc2NzcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9saWIvY3NzLWJhc2UuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvbGliL3VybHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL19zY3NzL21haW4uc2Nzcz9jNDBhIiwid2VicGFjazovLy8uL3NyYy9lbnRyeS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQUs7QUFDTDtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5REFBaUQsY0FBYztBQUMvRDs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxtQ0FBMkIsMEJBQTBCLEVBQUU7QUFDdkQseUNBQWlDLGVBQWU7QUFDaEQ7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOERBQXNELCtEQUErRDs7QUFFckg7QUFDQTs7O0FBR0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDbkVBO0FBQ0E7OztBQUdBO0FBQ0EsMEhBQTJILDRCQUE0QixtQkFBbUIsZUFBZSx3QkFBd0IsdUJBQXVCLEtBQUssc0JBQXNCLGVBQWUsMEJBQTBCLDhCQUE4Qix3Q0FBd0MsY0FBYyxLQUFLLFNBQVMsR0FBRyxjQUFjLGVBQWUsdUJBQXVCLGNB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O0FBRUE7QUFDQTtBQUNBLFMiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9lbnRyeS5qc1wiKTtcbiIsImV4cG9ydHMgPSBtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCIuLi9jc3MtbG9hZGVyL2xpYi9jc3MtYmFzZS5qc1wiKSh0cnVlKTtcbi8vIGltcG9ydHNcblxuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qISBzYW5pdGl6ZS5jc3MgdjUuMC4wIHwgQ0MwIExpY2Vuc2UgfCBnaXRodWIuY29tL2pvbmF0aGFudG5lYWwvc2FuaXRpemUuY3NzICovKiw6YWZ0ZXIsOmJlZm9yZXtiYWNrZ3JvdW5kLXJlcGVhdDpuby1yZXBlYXQ7Ym94LXNpemluZzppbmhlcml0fTphZnRlciw6YmVmb3Jle3RleHQtZGVjb3JhdGlvbjppbmhlcml0O3ZlcnRpY2FsLWFsaWduOmluaGVyaXR9aHRtbHtib3gtc2l6aW5nOmJvcmRlci1ib3g7Y3Vyc29yOmRlZmF1bHQ7LW1zLXRleHQtc2l6ZS1hZGp1c3Q6MTAwJTstd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6MTAwJX1hcnRpY2xlLGFzaWRlLGZvb3RlcixoZWFkZXIsbmF2LHNlY3Rpb257ZGlzcGxheTpibG9ja31ib2R5e21hcmdpbjowfWgxe2ZvbnQtc2l6ZToyZW07bWFyZ2luOi42N2VtIDB9ZmlnY2FwdGlvbixmaWd1cmUsbWFpbntkaXNwbGF5OmJsb2NrfWZpZ3VyZXttYXJnaW46MWVtIDQwcHh9aHJ7Ym94LXNpemluZzpjb250ZW50LWJveDtoZWlnaHQ6MDtvdmVyZmxvdzp2aXNpYmxlfW5hdiBvbCxuYXYgdWx7bGlzdC1zdHlsZTpub25lfXByZXtmb250LWZhbWlseTptb25vc3BhY2UsbW9ub3NwYWNlO2ZvbnQtc2l6ZToxZW19YXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50Oy13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6b2JqZWN0c31hYmJyW3RpdGxlXXtib3JkZXItYm90dG9tOm5vbmU7dGV4dC1kZWNvcmF0aW9uOnVuZGVybGluZTstd2Via2l0LXRleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkO3RleHQtZGVjb3JhdGlvbjp1bmRlcmxpbmUgZG90dGVkfWIsc3Ryb25ne2ZvbnQtd2VpZ2h0OmluaGVyaXQ7Zm9udC13ZWlnaHQ6Ym9sZGVyfWNvZGUsa2JkLHNhbXB7Zm9udC1mYW1pbHk6bW9ub3NwYWNlLG1vbm9zcGFjZTtmb250LXNpemU6MWVtfWRmbntmb250LXN0eWxlOml0YWxpY31tYXJre2JhY2tncm91bmQtY29sb3I6I2ZmMDtjb2xvcjojMDAwfXNtYWxse2ZvbnQtc2l6ZTo4MCV9c3ViLHN1cHtmb250LXNpemU6NzUlO2xpbmUtaGVpZ2h0OjA7cG9zaXRpb246cmVsYXRpdmU7dmVydGljYWwtYWxpZ246YmFzZWxpbmV9c3Vie2JvdHRvbTotLjI1ZW19c3Vwe3RvcDotLjVlbX06Oi1tb3otc2VsZWN0aW9ue2JhY2tncm91bmQtY29sb3I6I2IzZDRmYztjb2xvcjojMDAwO3RleHQtc2hhZG93Om5vbmV9OjpzZWxlY3Rpb257YmFja2dyb3VuZC1jb2xvcjojYjNkNGZjO2NvbG9yOiMwMDA7dGV4dC1zaGFkb3c6bm9uZX1hdWRpbyxjYW52YXMsaWZyYW1lLGltZyxzdmcsdmlkZW97dmVydGljYWwtYWxpZ246bWlkZGxlfWF1ZGlvLHZpZGVve2Rpc3BsYXk6aW5saW5lLWJsb2NrfWF1ZGlvOm5vdChbY29udHJvbHNdKXtkaXNwbGF5Om5vbmU7aGVpZ2h0OjB9aW1ne2JvcmRlci1zdHlsZTpub25lfXN2Z3tmaWxsOmN1cnJlbnRDb2xvcn1zdmc6bm90KDpyb290KXtvdmVyZmxvdzpoaWRkZW59dGFibGV7Ym9yZGVyLWNvbGxhcHNlOmNvbGxhcHNlfWJ1dHRvbixpbnB1dCxvcHRncm91cCxzZWxlY3QsdGV4dGFyZWF7bWFyZ2luOjB9YnV0dG9uLGlucHV0LHNlbGVjdCx0ZXh0YXJlYXtiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O2NvbG9yOmluaGVyaXQ7Zm9udC1zaXplOmluaGVyaXQ7bGluZS1oZWlnaHQ6aW5oZXJpdH1idXR0b24saW5wdXR7b3ZlcmZsb3c6dmlzaWJsZX1idXR0b24sc2VsZWN0e3RleHQtdHJhbnNmb3JtOm5vbmV9W3R5cGU9cmVzZXRdLFt0eXBlPXN1Ym1pdF0sYnV0dG9uLGh0bWwgW3R5cGU9YnV0dG9uXXstd2Via2l0LWFwcGVhcmFuY2U6YnV0dG9ufVt0eXBlPWJ1dHRvbl06Oi1tb3otZm9jdXMtaW5uZXIsW3R5cGU9cmVzZXRdOjotbW96LWZvY3VzLWlubmVyLFt0eXBlPXN1Ym1pdF06Oi1tb3otZm9jdXMtaW5uZXIsYnV0dG9uOjotbW96LWZvY3VzLWlubmVye2JvcmRlci1zdHlsZTpub25lO3BhZGRpbmc6MH1bdHlwZT1idXR0b25dOi1tb3otZm9jdXNyaW5nLFt0eXBlPXJlc2V0XTotbW96LWZvY3VzcmluZyxbdHlwZT1zdWJtaXRdOi1tb3otZm9jdXNyaW5nLGJ1dHRvbjotbW96LWZvY3VzcmluZ3tvdXRsaW5lOjFweCBkb3R0ZWQgQnV0dG9uVGV4dH1sZWdlbmR7Ym94LXNpemluZzpib3JkZXItYm94O2NvbG9yOmluaGVyaXQ7ZGlzcGxheTp0YWJsZTttYXgtd2lkdGg6MTAwJTtwYWRkaW5nOjA7d2hpdGUtc3BhY2U6bm9ybWFsfXByb2dyZXNze2Rpc3BsYXk6aW5saW5lLWJsb2NrO3ZlcnRpY2FsLWFsaWduOmJhc2VsaW5lfXRleHRhcmVhe292ZXJmbG93OmF1dG87cmVzaXplOnZlcnRpY2FsfVt0eXBlPWNoZWNrYm94XSxbdHlwZT1yYWRpb117Ym94LXNpemluZzpib3JkZXItYm94O3BhZGRpbmc6MH1bdHlwZT1udW1iZXJdOjotd2Via2l0LWlubmVyLXNwaW4tYnV0dG9uLFt0eXBlPW51bWJlcl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b257aGVpZ2h0OmF1dG99W3R5cGU9c2VhcmNoXXstd2Via2l0LWFwcGVhcmFuY2U6dGV4dGZpZWxkO291dGxpbmUtb2Zmc2V0Oi0ycHh9W3R5cGU9c2VhcmNoXTo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbixbdHlwZT1zZWFyY2hdOjotd2Via2l0LXNlYXJjaC1kZWNvcmF0aW9uey13ZWJraXQtYXBwZWFyYW5jZTpub25lfTo6LXdlYmtpdC1maWxlLXVwbG9hZC1idXR0b257LXdlYmtpdC1hcHBlYXJhbmNlOmJ1dHRvbjtmb250OmluaGVyaXR9ZGV0YWlscyxtZW51e2Rpc3BsYXk6YmxvY2t9c3VtbWFyeXtkaXNwbGF5Omxpc3QtaXRlbX1jYW52YXN7ZGlzcGxheTppbmxpbmUtYmxvY2t9dGVtcGxhdGV7ZGlzcGxheTpub25lfVt0YWJpbmRleF0sYSxhcmVhLGJ1dHRvbixpbnB1dCxsYWJlbCxzZWxlY3Qsc3VtbWFyeSx0ZXh0YXJlYXt0b3VjaC1hY3Rpb246bWFuaXB1bGF0aW9ufVtoaWRkZW5de2Rpc3BsYXk6bm9uZX1bYXJpYS1idXN5PXRydWVde2N1cnNvcjpwcm9ncmVzc31bYXJpYS1jb250cm9sc117Y3Vyc29yOnBvaW50ZXJ9W2FyaWEtaGlkZGVuPWZhbHNlXVtoaWRkZW5dOm5vdCg6Zm9jdXMpe2NsaXA6cmVjdCgwLDAsMCwwKTtkaXNwbGF5OmluaGVyaXQ7cG9zaXRpb246YWJzb2x1dGV9W2FyaWEtZGlzYWJsZWRde2N1cnNvcjpkZWZhdWx0fVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvb3RzdWthL0Rlc2t0b3AvX215ZGF0YS9vdHN1a2F5dWhpX2FwcC9ub2RlX21vZHVsZXMvc2FuaXRpemUuY3NzL3Nhbml0aXplLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnRkFBZ0YsQUFVaEYsaUJBR0MsNEJBQTRCLEFBQzVCLGtCQUFtQixDQUNuQixBQU9ELGVBRUMsd0JBQXdCLEFBQ3hCLHNCQUF1QixDQUN2QixBQVFELEtBQ0Msc0JBQXNCLEFBQ3RCLGVBQWUsQUFDZiwwQkFBMEIsQUFDMUIsNkJBQThCLENBQzlCLEFBU0Qsd0NBTUMsYUFBYyxDQUNkLEFBTUQsS0FDQyxRQUFTLENBQ1QsQUFPRCxHQUNDLGNBQWMsQUFDZCxjQUFlLENBQ2YsQUFVRCx1QkFHQyxhQUFjLENBQ2QsQUFNRCxPQUNDLGVBQWdCLENBQ2hCLEFBT0QsR0FDQyx1QkFBdUIsQUFDdkIsU0FBUyxBQUNULGdCQUFpQixDQUNqQixBQU1ELGNBRUMsZUFBZ0IsQ0FDaEIsQUFPRCxJQUNDLGdDQUFpQyxBQUNqQyxhQUFjLENBQ2QsQUFVRCxFQUNDLDZCQUE2QixBQUM3QixvQ0FBcUMsQ0FDckMsQUFPRCxZQUNDLG1CQUFtQixBQUNuQiwwQkFBMEIsQUFDMUIseUNBQWlDLEFBQWpDLGdDQUFpQyxDQUNqQyxBQU1ELFNBRUMsb0JBQW9CLEFBU3BCLGtCQUFtQixDQVJuQixBQWdCRCxjQUdDLGdDQUFpQyxBQUNqQyxhQUFjLENBQ2QsQUFNRCxJQUNDLGlCQUFrQixDQUNsQixBQU1ELEtBQ0Msc0JBQXlCLEFBQ3pCLFVBQWMsQ0FDZCxBQU1ELE1BQ0MsYUFBYyxDQUNkLEFBT0QsUUFFQyxjQUFjLEFBQ2QsY0FBYyxBQUNkLGtCQUFrQixBQUNsQix1QkFBd0IsQ0FDeEIsQUFFRCxJQUNDLGFBQWMsQ0FDZCxBQUVELElBQ0MsU0FBVSxDQUNWLEFBT0QsaUJBQ0MseUJBQXlCLEFBQ3pCLFdBQWMsQUFDZCxnQkFBaUIsQ0FDakIsQUFFRCxZQUNDLHlCQUF5QixBQUN6QixXQUFjLEFBQ2QsZ0JBQWlCLENBQ2pCLEFBU0Qsa0NBTUMscUJBQXNCLENBQ3RCLEFBTUQsWUFFQyxvQkFBcUIsQ0FDckIsQUFNRCxzQkFDQyxhQUFhLEFBQ2IsUUFBUyxDQUNULEFBTUQsSUFDQyxpQkFBa0IsQ0FDbEIsQUFNRCxJQUNDLGlCQUFrQixDQUNsQixBQU1ELGVBQ0MsZUFBZ0IsQ0FDaEIsQUFTRCxNQUNDLHdCQUF5QixDQUN6QixBQVNELHNDQUtDLFFBQVMsQ0FDVCxBQU1ELDZCQUlDLDZCQUE2QixBQUM3QixjQUFjLEFBQ2Qsa0JBQWtCLEFBQ2xCLG1CQUFvQixDQUNwQixBQU9ELGFBRUMsZ0JBQWlCLENBQ2pCLEFBT0QsY0FFQyxtQkFBb0IsQ0FDcEIsQUFRRCxxREFJQyx5QkFBMEIsQ0FDMUIsQUFNRCx3SEFJQyxrQkFBa0IsQUFDbEIsU0FBVSxDQUNWLEFBTUQsNEdBSUMsNkJBQThCLENBQzlCLEFBU0QsT0FDQyxzQkFBc0IsQUFDdEIsY0FBYyxBQUNkLGNBQWMsQUFDZCxlQUFlLEFBQ2YsVUFBVSxBQUNWLGtCQUFtQixDQUNuQixBQU9ELFNBQ0MscUJBQXFCLEFBQ3JCLHVCQUF3QixDQUN4QixBQU9ELFNBQ0MsY0FBYyxBQUNkLGVBQWdCLENBQ2hCLEFBM0NELDZCQW9EQyxzQkFBc0IsQUFDdEIsU0FBVSxDQUNWLEFBNUNELGtGQW9EQyxXQUFZLENBQ1osQUE3Q0QsY0FxREMsNkJBQTZCLEFBQzdCLG1CQUFvQixDQUNwQixBQTlDRCxxRkFzREMsdUJBQXdCLENBQ3hCLEFBT0QsNkJBQ0MsMEJBQTBCLEFBQzFCLFlBQWEsQ0FDYixBQVVELGFBRUMsYUFBYyxDQUNkLEFBTUQsUUFDQyxpQkFBa0IsQ0FDbEIsQUFTRCxPQUNDLG9CQUFxQixDQUNyQixBQU1ELFNBQ0MsWUFBYSxDQUNiLEFBVUQsNkRBVUMseUJBQTBCLENBQzFCLEFBNURELFNBbUVDLFlBQWEsQ0FDYixBQTVERCxpQkFzRUMsZUFBZ0IsQ0FDaEIsQUFqRUQsZ0JBd0VDLGNBQWUsQ0FDZixBQW5FRCx3Q0EwRUMsbUJBQXNCLEFBQ3RCLGdCQUFnQixBQUNoQixpQkFBa0IsQ0FDbEIsQUFwRUQsZ0JBNEVDLGNBQWUsQ0FDZlwiLFwiZmlsZVwiOlwic2FuaXRpemUuY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi8qISBzYW5pdGl6ZS5jc3MgdjUuMC4wIHwgQ0MwIExpY2Vuc2UgfCBnaXRodWIuY29tL2pvbmF0aGFudG5lYWwvc2FuaXRpemUuY3NzICovXFxuXFxuLyogRG9jdW1lbnQgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI3NlbWFudGljcylcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIDEuIFJlbW92ZSByZXBlYXRpbmcgYmFja2dyb3VuZHMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMi4gQWRkIGJveCBzaXppbmcgaW5oZXJpdGVuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuKixcXG46OmJlZm9yZSxcXG46OmFmdGVyIHtcXG5cXHRiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0OyAvKiAxICovXFxuXFx0Ym94LXNpemluZzogaW5oZXJpdDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGV4dCBkZWNvcmF0aW9uIGluaGVyaXRhbmNlIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIEFkZCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW5oZXJpdGVuY2UgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuOjpiZWZvcmUsXFxuOjphZnRlciB7XFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBpbmhlcml0OyAvKiAxICovXFxuXFx0dmVydGljYWwtYWxpZ246IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gQWRkIGJvcmRlciBib3ggc2l6aW5nIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqIDIuIEFkZCB0aGUgZGVmYXVsdCBjdXJzb3IgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICogMy4gUHJldmVudCBmb250IHNpemUgYWRqdXN0bWVudHMgYWZ0ZXIgb3JpZW50YXRpb24gY2hhbmdlcyBpbiBJRSBhbmQgaU9TLlxcbiAqL1xcblxcbmh0bWwge1xcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7IC8qIDEgKi9cXG5cXHRjdXJzb3I6IGRlZmF1bHQ7IC8qIDIgKi9cXG5cXHQtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMyAqL1xcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTsgLyogMyAqL1xcbn1cXG5cXG4vKiBTZWN0aW9ucyAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2Uvc2VtYW50aWNzLmh0bWwjc2VjdGlvbnMpXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKi9cXG5cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxubmF2LFxcbnNlY3Rpb24ge1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5ib2R5IHtcXG5cXHRtYXJnaW46IDA7XFxufVxcblxcbi8qKlxcbiAqIENvcnJlY3QgdGhlIGZvbnQgc2l6ZSBhbmQgbWFyZ2luIG9uIGBoMWAgZWxlbWVudHMgd2l0aGluIGBzZWN0aW9uYCBhbmRcXG4gKiBgYXJ0aWNsZWAgY29udGV4dHMgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmgxIHtcXG5cXHRmb250LXNpemU6IDJlbTtcXG5cXHRtYXJnaW46IC42N2VtIDA7XFxufVxcblxcbi8qIEdyb3VwaW5nIGNvbnRlbnQgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI2dyb3VwaW5nLWNvbnRlbnQpXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRSA5LS5cXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG5maWdjYXB0aW9uLFxcbmZpZ3VyZSxcXG5tYWluIHsgLyogMSAqL1xcblxcdGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgbWFyZ2luIGluIElFIDguXFxuICovXFxuXFxuZmlndXJlIHtcXG5cXHRtYXJnaW46IDFlbSA0MHB4O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBGaXJlZm94LlxcbiAqIDIuIFNob3cgdGhlIG92ZXJmbG93IGluIEVkZ2UgYW5kIElFLlxcbiAqL1xcblxcbmhyIHtcXG5cXHRib3gtc2l6aW5nOiBjb250ZW50LWJveDsgLyogMSAqL1xcblxcdGhlaWdodDogMDsgLyogMSAqL1xcblxcdG92ZXJmbG93OiB2aXNpYmxlOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgbGlzdCBzdHlsZSBvbiBuYXZpZ2F0aW9uIGxpc3RzIGluIGFsbCBicm93c2VycyAob3BpbmlvbmF0ZWQpLlxcbiAqL1xcblxcbm5hdiBvbCxcXG5uYXYgdWwge1xcblxcdGxpc3Qtc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnByZSB7XFxuXFx0Zm9udC1mYW1pbHk6IG1vbm9zcGFjZSwgbW9ub3NwYWNlOyAvKiAxICovXFxuXFx0Zm9udC1zaXplOiAxZW07IC8qIDIgKi9cXG59XFxuXFxuLyogVGV4dC1sZXZlbCBzZW1hbnRpY3MgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL3NlbWFudGljcy5odG1sI3RleHQtbGV2ZWwtc2VtYW50aWNzKVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBncmF5IGJhY2tncm91bmQgb24gYWN0aXZlIGxpbmtzIGluIElFIDEwLlxcbiAqIDIuIFJlbW92ZSBnYXBzIGluIGxpbmtzIHVuZGVybGluZSBpbiBpT1MgOCsgYW5kIFNhZmFyaSA4Ky5cXG4gKi9cXG5cXG5hIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDsgLyogMSAqL1xcblxcdC13ZWJraXQtdGV4dC1kZWNvcmF0aW9uLXNraXA6IG9iamVjdHM7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogMS4gUmVtb3ZlIHRoZSBib3R0b20gYm9yZGVyIGluIEZpcmVmb3ggMzktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB0ZXh0IGRlY29yYXRpb24gaW4gQ2hyb21lLCBFZGdlLCBJRSwgT3BlcmEsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYWJiclt0aXRsZV0ge1xcblxcdGJvcmRlci1ib3R0b206IG5vbmU7IC8qIDEgKi9cXG5cXHR0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTsgLyogMiAqL1xcblxcdHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lIGRvdHRlZDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiBQcmV2ZW50IHRoZSBkdXBsaWNhdGUgYXBwbGljYXRpb24gb2YgYGJvbGRlcmAgYnkgdGhlIG5leHQgcnVsZSBpbiBTYWZhcmkgNi5cXG4gKi9cXG5cXG5iLFxcbnN0cm9uZyB7XFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHdlaWdodCBpbiBDaHJvbWUsIEVkZ2UsIGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYixcXG5zdHJvbmcge1xcblxcdGZvbnQtd2VpZ2h0OiBib2xkZXI7XFxufVxcblxcbi8qKlxcbiAqIDEuIENvcnJlY3QgdGhlIGluaGVyaXRhbmNlIGFuZCBzY2FsaW5nIG9mIGZvbnQgc2l6ZSBpbiBhbGwgYnJvd3NlcnMuXFxuICogMi4gQ29ycmVjdCB0aGUgb2RkIGBlbWAgZm9udCBzaXppbmcgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbmNvZGUsXFxua2JkLFxcbnNhbXAge1xcblxcdGZvbnQtZmFtaWx5OiBtb25vc3BhY2UsIG1vbm9zcGFjZTsgLyogMSAqL1xcblxcdGZvbnQtc2l6ZTogMWVtOyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHN0eWxlIGluIEFuZHJvaWQgNC4zLS5cXG4gKi9cXG5cXG5kZm4ge1xcblxcdGZvbnQtc3R5bGU6IGl0YWxpYztcXG59XFxuXFxuLyoqXFxuICogQWRkIHRoZSBjb3JyZWN0IGJhY2tncm91bmQgYW5kIGNvbG9yIGluIElFIDktLlxcbiAqL1xcblxcbm1hcmsge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNmZmZmMDA7XFxuXFx0Y29sb3I6ICMwMDAwMDA7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBmb250IHNpemUgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnNtYWxsIHtcXG5cXHRmb250LXNpemU6IDgwJTtcXG59XFxuXFxuLyoqXFxuICogUHJldmVudCBgc3ViYCBhbmQgYHN1cGAgZWxlbWVudHMgZnJvbSBhZmZlY3RpbmcgdGhlIGxpbmUgaGVpZ2h0IGluXFxuICogYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1YixcXG5zdXAge1xcblxcdGZvbnQtc2l6ZTogNzUlO1xcblxcdGxpbmUtaGVpZ2h0OiAwO1xcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcblxcbnN1YiB7XFxuXFx0Ym90dG9tOiAtLjI1ZW07XFxufVxcblxcbnN1cCB7XFxuXFx0dG9wOiAtLjVlbTtcXG59XFxuXFxuLypcXG4gKiBSZW1vdmUgdGhlIHRleHQgc2hhZG93IG9uIHRleHQgc2VsZWN0aW9ucyAob3BpbmlvbmF0ZWQpLlxcbiAqIDEuIFJlc3RvcmUgdGhlIGNvbG9yaW5nIHVuZG9uZSBieSBkZWZpbmluZyB0aGUgdGV4dCBzaGFkb3cgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG46Oi1tb3otc2VsZWN0aW9uIHtcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiAjYjNkNGZjOyAvKiAxICovXFxuXFx0Y29sb3I6ICMwMDAwMDA7IC8qIDEgKi9cXG5cXHR0ZXh0LXNoYWRvdzogbm9uZTtcXG59XFxuXFxuOjpzZWxlY3Rpb24ge1xcblxcdGJhY2tncm91bmQtY29sb3I6ICNiM2Q0ZmM7IC8qIDEgKi9cXG5cXHRjb2xvcjogIzAwMDAwMDsgLyogMSAqL1xcblxcdHRleHQtc2hhZG93OiBub25lO1xcbn1cXG5cXG4vKiBFbWJlZGRlZCBjb250ZW50IChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9lbWJlZGRlZC1jb250ZW50Lmh0bWwjZW1iZWRkZWQtY29udGVudClcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qXFxuICogQ2hhbmdlIHRoZSBhbGlnbm1lbnQgb24gbWVkaWEgZWxlbWVudHMgaW4gYWxsIGJyb3dlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5hdWRpbyxcXG5jYW52YXMsXFxuaWZyYW1lLFxcbmltZyxcXG5zdmcsXFxudmlkZW8ge1xcblxcdHZlcnRpY2FsLWFsaWduOiBtaWRkbGU7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmF1ZGlvLFxcbnZpZGVvIHtcXG5cXHRkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIGlPUyA0LTcuXFxuICovXFxuXFxuYXVkaW86bm90KFtjb250cm9sc10pIHtcXG5cXHRkaXNwbGF5OiBub25lO1xcblxcdGhlaWdodDogMDtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBib3JkZXIgb24gaW1hZ2VzIGluc2lkZSBsaW5rcyBpbiBJRSAxMC0uXFxuICovXFxuXFxuaW1nIHtcXG5cXHRib3JkZXItc3R5bGU6IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIENoYW5nZSB0aGUgZmlsbCBjb2xvciB0byBtYXRjaCB0aGUgdGV4dCBjb2xvciBpbiBhbGwgYnJvd3NlcnMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5zdmcge1xcblxcdGZpbGw6IGN1cnJlbnRDb2xvcjtcXG59XFxuXFxuLyoqXFxuICogSGlkZSB0aGUgb3ZlcmZsb3cgaW4gSUUuXFxuICovXFxuXFxuc3ZnOm5vdCg6cm9vdCkge1xcblxcdG92ZXJmbG93OiBoaWRkZW47XFxufVxcblxcbi8qIFRhYnVsYXIgZGF0YSAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvdGFibGVzLmh0bWwjdGFibGVzKVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLyoqXFxuICogQ29sbGFwc2UgYm9yZGVyIHNwYWNpbmdcXG4gKi9cXG5cXG50YWJsZSB7XFxuXFx0Ym9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG59XFxuXFxuLyogRm9ybXMgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjZm9ybXMpXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBSZW1vdmUgdGhlIG1hcmdpbiBpbiBGaXJlZm94IGFuZCBTYWZhcmkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbm9wdGdyb3VwLFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuXFx0bWFyZ2luOiAwO1xcbn1cXG5cXG4vKipcXG4gKiBJbmhlcml0IHN0eWxpbmcgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuYnV0dG9uLFxcbmlucHV0LFxcbnNlbGVjdCxcXG50ZXh0YXJlYSB7XFxuXFx0YmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcblxcdGxpbmUtaGVpZ2h0OiBpbmhlcml0O1xcbn1cXG5cXG4vKipcXG4gKiBTaG93IHRoZSBvdmVyZmxvdyBpbiBJRS5cXG4gKiAxLiBTaG93IHRoZSBvdmVyZmxvdyBpbiBFZGdlLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5pbnB1dCB7IC8qIDEgKi9cXG5cXHRvdmVyZmxvdzogdmlzaWJsZTtcXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBFZGdlLCBGaXJlZm94LCBhbmQgSUUuXFxuICogMS4gUmVtb3ZlIHRoZSBpbmhlcml0YW5jZSBvZiB0ZXh0IHRyYW5zZm9ybSBpbiBGaXJlZm94LlxcbiAqL1xcblxcbmJ1dHRvbixcXG5zZWxlY3QgeyAvKiAxICovXFxuXFx0dGV4dC10cmFuc2Zvcm06IG5vbmU7XFxufVxcblxcbi8qKlxcbiAqIDEuIFByZXZlbnQgYSBXZWJLaXQgYnVnIHdoZXJlICgyKSBkZXN0cm95cyBuYXRpdmUgYGF1ZGlvYCBhbmQgYHZpZGVvYFxcbiAqICAgIGNvbnRyb2xzIGluIEFuZHJvaWQgNC5cXG4gKiAyLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqL1xcblxcbmJ1dHRvbixcXG5odG1sIFt0eXBlPVxcXCJidXR0b25cXFwiXSwgLyogMSAqL1xcblt0eXBlPVxcXCJyZXNldFxcXCJdLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXSB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBidXR0b247IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogUmVtb3ZlIHRoZSBpbm5lciBib3JkZXIgYW5kIHBhZGRpbmcgaW4gRmlyZWZveC5cXG4gKi9cXG5cXG5idXR0b246Oi1tb3otZm9jdXMtaW5uZXIsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOjotbW96LWZvY3VzLWlubmVyLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTo6LW1vei1mb2N1cy1pbm5lciB7XFxuXFx0Ym9yZGVyLXN0eWxlOiBub25lO1xcblxcdHBhZGRpbmc6IDA7XFxufVxcblxcbi8qKlxcbiAqIFJlc3RvcmUgdGhlIGZvY3VzIHN0eWxlcyB1bnNldCBieSB0aGUgcHJldmlvdXMgcnVsZS5cXG4gKi9cXG5cXG5idXR0b246LW1vei1mb2N1c3JpbmcsXFxuW3R5cGU9XFxcImJ1dHRvblxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJyZXNldFxcXCJdOi1tb3otZm9jdXNyaW5nLFxcblt0eXBlPVxcXCJzdWJtaXRcXFwiXTotbW96LWZvY3VzcmluZyB7XFxuXFx0b3V0bGluZTogMXB4IGRvdHRlZCBCdXR0b25UZXh0O1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSB0ZXh0IHdyYXBwaW5nIGluIEVkZ2UgYW5kIElFLlxcbiAqIDIuIENvcnJlY3QgdGhlIGNvbG9yIGluaGVyaXRhbmNlIGZyb20gYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBJRS5cXG4gKiAzLiBSZW1vdmUgdGhlIHBhZGRpbmcgc28gZGV2ZWxvcGVycyBhcmUgbm90IGNhdWdodCBvdXQgd2hlbiB0aGV5IHplcm8gb3V0XFxuICogICAgYGZpZWxkc2V0YCBlbGVtZW50cyBpbiBhbGwgYnJvd3NlcnMuXFxuICovXFxuXFxubGVnZW5kIHtcXG5cXHRib3gtc2l6aW5nOiBib3JkZXItYm94OyAvKiAxICovXFxuXFx0Y29sb3I6IGluaGVyaXQ7IC8qIDIgKi9cXG5cXHRkaXNwbGF5OiB0YWJsZTsgLyogMSAqL1xcblxcdG1heC13aWR0aDogMTAwJTsgLyogMSAqL1xcblxcdHBhZGRpbmc6IDA7IC8qIDMgKi9cXG5cXHR3aGl0ZS1zcGFjZTogbm9ybWFsOyAvKiAxICovXFxufVxcblxcbi8qKlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDIuIEFkZCB0aGUgY29ycmVjdCB2ZXJ0aWNhbCBhbGlnbm1lbnQgaW4gQ2hyb21lLCBGaXJlZm94LCBhbmQgT3BlcmEuXFxuICovXFxuXFxucHJvZ3Jlc3Mge1xcblxcdGRpc3BsYXk6IGlubGluZS1ibG9jazsgLyogMSAqL1xcblxcdHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBSZW1vdmUgdGhlIGRlZmF1bHQgdmVydGljYWwgc2Nyb2xsYmFyIGluIElFLlxcbiAqIDIuIENoYW5nZSB0aGUgcmVzaXplIGRpcmVjdGlvbiBvbiB0ZXh0YXJlYXMgaW4gYWxsIGJyb3dzZXJzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxudGV4dGFyZWEge1xcblxcdG92ZXJmbG93OiBhdXRvOyAvKiAxICovXFxuXFx0cmVzaXplOiB2ZXJ0aWNhbDsgLyogMiAqL1xcbn1cXG5cXG4vKipcXG4gKiAxLiBBZGQgdGhlIGNvcnJlY3QgYm94IHNpemluZyBpbiBJRSAxMC0uXFxuICogMi4gUmVtb3ZlIHRoZSBwYWRkaW5nIGluIElFIDEwLS5cXG4gKi9cXG5cXG5bdHlwZT1cXFwiY2hlY2tib3hcXFwiXSxcXG5bdHlwZT1cXFwicmFkaW9cXFwiXSB7XFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDsgLyogMSAqL1xcblxcdHBhZGRpbmc6IDA7IC8qIDIgKi9cXG59XFxuXFxuLyoqXFxuICogQ29ycmVjdCB0aGUgY3Vyc29yIHN0eWxlIG9mIGluY3JlbWVudCBhbmQgZGVjcmVtZW50IGJ1dHRvbnMgaW4gQ2hyb21lLlxcbiAqL1xcblxcblt0eXBlPVxcXCJudW1iZXJcXFwiXTo6LXdlYmtpdC1pbm5lci1zcGluLWJ1dHRvbixcXG5bdHlwZT1cXFwibnVtYmVyXFxcIl06Oi13ZWJraXQtb3V0ZXItc3Bpbi1idXR0b24ge1xcblxcdGhlaWdodDogYXV0bztcXG59XFxuXFxuLyoqXFxuICogMS4gQ29ycmVjdCB0aGUgb2RkIGFwcGVhcmFuY2UgaW4gQ2hyb21lIGFuZCBTYWZhcmkuXFxuICogMi4gQ29ycmVjdCB0aGUgb3V0bGluZSBzdHlsZSBpbiBTYWZhcmkuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IHRleHRmaWVsZDsgLyogMSAqL1xcblxcdG91dGxpbmUtb2Zmc2V0OiAtMnB4OyAvKiAyICovXFxufVxcblxcbi8qKlxcbiAqIFJlbW92ZSB0aGUgaW5uZXIgcGFkZGluZyBhbmQgY2FuY2VsIGJ1dHRvbnMgaW4gQ2hyb21lIGFuZCBTYWZhcmkgb24gbWFjT1MuXFxuICovXFxuXFxuW3R5cGU9XFxcInNlYXJjaFxcXCJdOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uLFxcblt0eXBlPVxcXCJzZWFyY2hcXFwiXTo6LXdlYmtpdC1zZWFyY2gtZGVjb3JhdGlvbiB7XFxuXFx0LXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcbn1cXG5cXG4vKipcXG4gKiAxLiBDb3JyZWN0IHRoZSBpbmFiaWxpdHkgdG8gc3R5bGUgY2xpY2thYmxlIHR5cGVzIGluIGlPUyBhbmQgU2FmYXJpLlxcbiAqIDIuIENoYW5nZSBmb250IHByb3BlcnRpZXMgdG8gYGluaGVyaXRgIGluIFNhZmFyaS5cXG4gKi9cXG5cXG46Oi13ZWJraXQtZmlsZS11cGxvYWQtYnV0dG9uIHtcXG5cXHQtd2Via2l0LWFwcGVhcmFuY2U6IGJ1dHRvbjsgLyogMSAqL1xcblxcdGZvbnQ6IGluaGVyaXQ7IC8qIDIgKi9cXG59XFxuXFxuLyogSW50ZXJhY3RpdmUgZWxlbWVudHMgKGh0dHBzOi8vaHRtbC5zcGVjLndoYXR3Zy5vcmcvbXVsdGlwYWdlL2Zvcm1zLmh0bWwjaW50ZXJhY3RpdmUtZWxlbWVudHMpXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqIDEuIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIEVkZ2UsIElFLCBhbmQgRmlyZWZveC5cXG4gKi9cXG5cXG5kZXRhaWxzLCAvKiAxICovXFxubWVudSB7XFxuXFx0ZGlzcGxheTogYmxvY2s7XFxufVxcblxcbi8qXFxuICogQWRkIHRoZSBjb3JyZWN0IGRpc3BsYXkgaW4gYWxsIGJyb3dzZXJzLlxcbiAqL1xcblxcbnN1bW1hcnkge1xcblxcdGRpc3BsYXk6IGxpc3QtaXRlbTtcXG59XFxuXFxuLyogU2NyaXB0aW5nIChodHRwczovL2h0bWwuc3BlYy53aGF0d2cub3JnL211bHRpcGFnZS9zY3JpcHRpbmcuaHRtbCNzY3JpcHRpbmctMylcXG4gICA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSAqL1xcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDktLlxcbiAqL1xcblxcbmNhbnZhcyB7XFxuXFx0ZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbn1cXG5cXG4vKipcXG4gKiBBZGQgdGhlIGNvcnJlY3QgZGlzcGxheSBpbiBJRS5cXG4gKi9cXG5cXG50ZW1wbGF0ZSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogVXNlciBpbnRlcmFjdGlvbiAoaHR0cHM6Ly9odG1sLnNwZWMud2hhdHdnLm9yZy9tdWx0aXBhZ2UvaW50ZXJhY3Rpb24uaHRtbCNlZGl0aW5nKVxcbiAgID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09ICovXFxuXFxuLypcXG4gKiBSZW1vdmUgdGhlIHRhcHBpbmcgZGVsYXkgb24gY2xpY2thYmxlIGVsZW1lbnRzIChvcGluaW9uYXRlZCkuXFxuICogMS4gUmVtb3ZlIHRoZSB0YXBwaW5nIGRlbGF5IGluIElFIDEwLlxcbiAqL1xcblxcbmEsXFxuYXJlYSxcXG5idXR0b24sXFxuaW5wdXQsXFxubGFiZWwsXFxuc2VsZWN0LFxcbnN1bW1hcnksXFxudGV4dGFyZWEsXFxuW3RhYmluZGV4XSB7XFxuXFx0LW1zLXRvdWNoLWFjdGlvbjogbWFuaXB1bGF0aW9uOyAvKiAxICovXFxuXFx0dG91Y2gtYWN0aW9uOiBtYW5pcHVsYXRpb247XFxufVxcblxcbi8qKlxcbiAqIEFkZCB0aGUgY29ycmVjdCBkaXNwbGF5IGluIElFIDEwLS5cXG4gKi9cXG5cXG5baGlkZGVuXSB7XFxuXFx0ZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLyogQVJJQSAoaHR0cHM6Ly93M2MuZ2l0aHViLmlvL2h0bWwtYXJpYS8pXFxuICAgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gKi9cXG5cXG4vKipcXG4gKiBDaGFuZ2UgdGhlIGN1cnNvciBvbiBidXN5IGVsZW1lbnRzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuW2FyaWEtYnVzeT1cXFwidHJ1ZVxcXCJdIHtcXG5cXHRjdXJzb3I6IHByb2dyZXNzO1xcbn1cXG5cXG4vKlxcbiAqIENoYW5nZSB0aGUgY3Vyc29yIG9uIGNvbnRyb2wgZWxlbWVudHMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5bYXJpYS1jb250cm9sc10ge1xcblxcdGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLypcXG4gKiBDaGFuZ2UgdGhlIGRpc3BsYXkgb24gdmlzdWFsbHkgaGlkZGVuIGFjY2Vzc2libGUgZWxlbWVudHMgKG9waW5pb25hdGVkKS5cXG4gKi9cXG5cXG5bYXJpYS1oaWRkZW49XFxcImZhbHNlXFxcIl1baGlkZGVuXTpub3QoOmZvY3VzKSB7XFxuXFx0Y2xpcDogcmVjdCgwLCAwLCAwLCAwKTtcXG5cXHRkaXNwbGF5OiBpbmhlcml0O1xcblxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG59XFxuXFxuLypcXG4gKiBDaGFuZ2UgdGhlIGN1cnNvciBvbiBkaXNhYmxlZCwgbm90LWVkaXRhYmxlLCBvciBvdGhlcndpc2VcXG4gKiBpbm9wZXJhYmxlIGVsZW1lbnRzIChvcGluaW9uYXRlZCkuXFxuICovXFxuXFxuW2FyaWEtZGlzYWJsZWRdIHtcXG5cXHRjdXJzb3I6IGRlZmF1bHQ7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuXG4vLyBleHBvcnRzXG4iLCJleHBvcnRzID0gbW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvbGliL2Nzcy1iYXNlLmpzXCIpKHRydWUpO1xuLy8gaW1wb3J0c1xuZXhwb3J0cy5pKHJlcXVpcmUoXCItIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS01LTMhc2FuaXRpemUuY3NzL3Nhbml0aXplLmNzc1wiKSwgXCJcIik7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK0NvZGUrUHJvKTtcIiwgXCJcIl0pO1xuXG4vLyBtb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcImh0bWx7Zm9udC1zaXplOjYyLjUlfWJvZHl7YmFja2dyb3VuZC1jb2xvcjojMjQyNDI0O2NvbG9yOiNmZmY7LXdlYmtpdC1mb250LXNtb290aGluZzphbnRpYWxpYXNlZDtmb250LXNtb290aGluZzphbnRpYWxpYXNlZDtmb250LWZhbWlseTpTb3VyY2UgQ29kZSBQcm8sc2VyaWY7LXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OjEwMCU7bGluZS1oZWlnaHQ6MS40O3dvcmQtd3JhcDpicmVhay13b3JkfS5jb250YWluZXJ7cG9zaXRpb246cmVsYXRpdmU7aGVpZ2h0OjEwMHZoO2NvbG9yOiNmZmZ9LnRpdGxle2Rpc3BsYXk6ZmxleDtqdXN0aWZ5LWNvbnRlbnQ6Y2VudGVyO2FsaWduLWl0ZW1zOmNlbnRlcjttYXJnaW46MDtoZWlnaHQ6MTAwJTtmb250LXNpemU6M3JlbTtmb250LXdlaWdodDo0MDB9QG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDo3MzdweCl7LnRpdGxle2ZvbnQtc2l6ZTo3cmVtfX1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjc2OXB4KXsudGl0bGV7Zm9udC1zaXplOjEwcmVtfX0udGl0bGVfdGV4dHtkaXNwbGF5OmlubGluZS1ibG9jaztwb3NpdGlvbjpyZWxhdGl2ZX0udGl0bGVfdGV4dDphZnRlcntjb250ZW50OlxcXCJcXFwiO3Bvc2l0aW9uOmFic29sdXRlO3RvcDowO2JvdHRvbTowO21hcmdpbjphdXRvO3dpZHRoOjNweDtoZWlnaHQ6MWVtO2JhY2tncm91bmQtY29sb3I6I2ZmZjstd2Via2l0LWFuaW1hdGlvbjp0aXRsZVVuZGVyTGluZSAxcyBsaW5lYXIgaW5maW5pdGU7YW5pbWF0aW9uOnRpdGxlVW5kZXJMaW5lIDFzIGxpbmVhciBpbmZpbml0ZX1ALXdlYmtpdC1rZXlmcmFtZXMgdGl0bGVVbmRlckxpbmV7MCV7dmlzaWJpbGl0eTpoaWRkZW59NTAle3Zpc2liaWxpdHk6aGlkZGVufXRve3Zpc2liaWxpdHk6dmlzaWJsZX19QGtleWZyYW1lcyB0aXRsZVVuZGVyTGluZXswJXt2aXNpYmlsaXR5OmhpZGRlbn01MCV7dmlzaWJpbGl0eTpoaWRkZW59dG97dmlzaWJpbGl0eTp2aXNpYmxlfX0ubGlzdHtwb3NpdGlvbjphYnNvbHV0ZTtyaWdodDowO2JvdHRvbTouNXJlbTtsZWZ0OjA7ZGlzcGxheTpmbGV4O2p1c3RpZnktY29udGVudDpzcGFjZS1iZXR3ZWVuO21hcmdpbjphdXRvO3BhZGRpbmc6MnJlbTt3aWR0aDoxMDAlO21heC13aWR0aDozNzVweH1AbWVkaWEgc2NyZWVuIGFuZCAobWluLXdpZHRoOjczN3B4KXsubGlzdHttYXgtd2lkdGg6NTAwcHg7Ym90dG9tOjIwcHh9fS5pdGVte2xpc3Qtc3R5bGU6bm9uZTtmb250LXNpemU6MS4ycmVtfUBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6NzM3cHgpey5pdGVte2ZvbnQtc2l6ZToxLjZyZW19fS5pdGVtIGF7Y29sb3I6I2ZmZn0uaXRlbSBhOmhvdmVye3RleHQtZGVjb3JhdGlvbjpub25lfVwiLCBcIlwiLCB7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCIvVXNlcnMvb3RzdWthL0Rlc2t0b3AvX215ZGF0YS9vdHN1a2F5dWhpX2FwcC9zcmMvX3Njc3MvX2Jhc2Uuc2Nzc1wiLFwiL1VzZXJzL290c3VrYS9EZXNrdG9wL19teWRhdGEvb3RzdWtheXVoaV9hcHAvc3JjL19zY3NzL19zZXR0aW5ncy5zY3NzXCIsXCIvVXNlcnMvb3RzdWthL0Rlc2t0b3AvX215ZGF0YS9vdHN1a2F5dWhpX2FwcC9zcmMvX3Njc3MvX3N0eWxlLnNjc3NcIixcIi9Vc2Vycy9vdHN1a2EvRGVza3RvcC9fbXlkYXRhL290c3VrYXl1aGlfYXBwL3NyYy9fc2Nzcy9fbWl4aW4uc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFFQSxLQUNFLGVDR2UsQ0RGaEIsQUFFRCxLQUNFLHlCQ05zQixBRE90QixXQ05xQixBRE9yQixtQ0NMMEIsQURNMUIsMkJDTjBCLEFETzFCLGtDQ05vQyxBRE9wQyw4QkFBOEIsQUFDOUIsZ0JDTmUsQURPZixvQkFBcUIsQ0FDdEIsQUVmRCxXQUNFLGtCQUFrQixBQUNsQixhQUFhLEFBQ2IsVUFBVyxDQUNaLEFBR0QsT0FDRSxhQUFhLEFBQ2IsdUJBQXVCLEFBQ3ZCLG1CQUFtQixBQUNuQixTQUFTLEFBQ1QsWUFBWSxBQUNaLGVBQWUsQUFDZixlQUFtQixDQU9wQixBQ2pCQyxvQ0RHRixPQVNJLGNBQWUsQ0FLbEIsQ0FBQSxBQ1pDLG9DREZGLE9BWUksZUFBZ0IsQ0FFbkIsQ0FBQSxBQUNELFlBQ0UscUJBQXFCLEFBQ3JCLGlCQUFrQixDQVluQixBQWRELGtCQUlJLFdBQVcsQUFDWCxrQkFBa0IsQUFDbEIsTUFBTSxBQUNOLFNBQVMsQUFDVCxZQUFZLEFBQ1osVUFBVSxBQUNWLFdBQVcsQUFDWCxzQkQvQm1CLEFDZ0NuQixvREFBNEMsQUFBNUMsMkNBQTRDLENBQzdDLEFBR0gsa0NBQ0UsR0FDRSxpQkFBa0IsQ0FBQSxBQUVwQixJQUNFLGlCQUFrQixDQUFBLEFBRXBCLEdBQ0Usa0JBQW1CLENBQUEsQ0FBQSxBQVJ2QiwwQkFDRSxHQUNFLGlCQUFrQixDQUFBLEFBRXBCLElBQ0UsaUJBQWtCLENBQUEsQUFFcEIsR0FDRSxrQkFBbUIsQ0FBQSxDQUFBLEFBS3ZCLE1BQ0Usa0JBQWtCLEFBQ2xCLFFBQVEsQUFDUixhQUFjLEFBQ2QsT0FBTyxBQUNQLGFBQWEsQUFDYiw4QkFBOEIsQUFDOUIsWUFBWSxBQUNaLGFBQWEsQUFDYixXQUFXLEFBQ1gsZUFBZ0IsQ0FLakIsQUM5REMsb0NEK0NGLE1BWUksZ0JBQWdCLEFBQ2hCLFdBQVksQ0FFZixDQUFBLEFBQ0QsTUFDRSxnQkFBZ0IsQUFDaEIsZ0JBQWlCLENBVWxCLEFDM0VDLG9DRCtERixNQUlJLGdCQUFpQixDQVFwQixDQUFBLEFBWkQsUUFPSSxVQUFXLENBSVosQUFYSCxjQVNNLG9CQUFxQixDQUN0QlwiLFwiZmlsZVwiOlwibWFpbi5zY3NzXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9U291cmNlK0NvZGUrUHJvJyk7XFxyXFxuXFxyXFxuaHRtbCB7XFxyXFxuICBmb250LXNpemU6ICRmb250LXNpemU7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGNvbG9yLWJnLWJsYWNrO1xcclxcbiAgY29sb3I6ICRjb2xvci1mb250LXdoaXRlO1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogJGZvbnQtc21vb3RoaW5nO1xcclxcbiAgZm9udC1zbW9vdGhpbmc6ICRmb250LXNtb290aGluZztcXHJcXG4gIGZvbnQtZmFtaWx5OiAkZm9udC1mYW1pbHk7XFxyXFxuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuICBsaW5lLWhlaWdodDogJGxpbmUtaGVpZ2h0O1xcclxcbiAgd29yZC13cmFwOiBicmVhay13b3JkO1xcclxcbn1cXHJcXG5cIixcIi8vIHNldHRpbmdzXFxyXFxuJGNvbG9yLWJnLWJsYWNrOiAjMjQyNDI0O1xcclxcbiRjb2xvci1mb250LXdoaXRlOiAjZmZmO1xcclxcblxcclxcbiRmb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7IC8vYW50aWFsaWFzZWQsIHN1YnBpeGVsLWFudGlhbGlhc2VkLCBub25lXFxyXFxuJGZvbnQtZmFtaWx5OiAnU291cmNlIENvZGUgUHJvJywgc2VyaWY7XFxyXFxuJGZvbnQtc2l6ZTogNjIuNSU7XFxyXFxuJGxpbmUtaGVpZ2h0OiAxLjQ7XFxyXFxuXFxyXFxuJGJwLW1kOiA3MzdweDtcXHJcXG4kYnAtbGc6IDc2OXB4O1wiLFwiLmNvbnRhaW5lciB7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgY29sb3I6ICNmZmY7XFxufVxcblxcbi8vIHRpbGVcXG4udGl0bGUge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIG1hcmdpbjogMDtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGZvbnQtc2l6ZTogM3JlbTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxuICBAaW5jbHVkZSBtaW4tbWQge1xcbiAgICBmb250LXNpemU6IDdyZW07XFxuICB9XFxuICBAaW5jbHVkZSBtaW4tbGcge1xcbiAgICBmb250LXNpemU6IDEwcmVtO1xcbiAgfVxcbn1cXG4udGl0bGVfdGV4dCB7XFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAmOjphZnRlciB7XFxuICAgIGNvbnRlbnQ6ICcnO1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICBtYXJnaW46IGF1dG87XFxuICAgIHdpZHRoOiAzcHg7XFxuICAgIGhlaWdodDogMWVtO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkY29sb3ItZm9udC13aGl0ZTtcXG4gICAgYW5pbWF0aW9uOiB0aXRsZVVuZGVyTGluZSAxcyBsaW5lYXIgaW5maW5pdGU7XFxuICB9XFxufVxcblxcbkBrZXlmcmFtZXMgdGl0bGVVbmRlckxpbmUge1xcbiAgMCUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxuICA1MCUge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxuICB9XFxuICAxMDAlIHtcXG4gICAgdmlzaWJpbGl0eTogdmlzaWJsZTtcXG4gIH1cXG59XFxuXFxuLy8gbGlua3NcXG4ubGlzdCB7XFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICByaWdodDogMDtcXG4gIGJvdHRvbTogMC41cmVtO1xcbiAgbGVmdDogMDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICBtYXJnaW46IGF1dG87XFxuICBwYWRkaW5nOiAycmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDM3NXB4O1xcbiAgQGluY2x1ZGUgbWluLW1kIHtcXG4gICAgbWF4LXdpZHRoOiA1MDBweDtcXG4gICAgYm90dG9tOiAyMHB4O1xcbiAgfVxcbn1cXG4uaXRlbSB7XFxuICBsaXN0LXN0eWxlOiBub25lO1xcbiAgZm9udC1zaXplOiAxLjJyZW07XFxuICBAaW5jbHVkZSBtaW4tbWQge1xcbiAgICBmb250LXNpemU6IDEuNnJlbTtcXG4gIH1cXG4gIGEge1xcbiAgICBjb2xvcjogI2ZmZjtcXG4gICAgJjpob3ZlciB7XFxuICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgICB9XFxuICB9XFxufVxcblwiLFwiLy8gbWl4aW5cXHJcXG5cXHJcXG4vLyBtZWRpYSBxdWVyeVxcclxcbkBtaXhpbiBtaW4tbWQge1xcclxcbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1pbi13aWR0aDogJGJwLW1kKSB7XFxyXFxuICAgIEBjb250ZW50O1xcclxcbiAgfVxcclxcbn1cXHJcXG5AbWl4aW4gbWluLWxnIHtcXHJcXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtaW4td2lkdGg6ICRicC1sZykge1xcclxcbiAgICBAY29udGVudDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG5cbi8vIGV4cG9ydHNcbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbih1c2VTb3VyY2VNYXApIHtcblx0dmFyIGxpc3QgPSBbXTtcblxuXHQvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cdGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcblx0XHRyZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcblx0XHRcdHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXHRcdFx0aWYoaXRlbVsyXSkge1xuXHRcdFx0XHRyZXR1cm4gXCJAbWVkaWEgXCIgKyBpdGVtWzJdICsgXCJ7XCIgKyBjb250ZW50ICsgXCJ9XCI7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRyZXR1cm4gY29udGVudDtcblx0XHRcdH1cblx0XHR9KS5qb2luKFwiXCIpO1xuXHR9O1xuXG5cdC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG5cdGxpc3QuaSA9IGZ1bmN0aW9uKG1vZHVsZXMsIG1lZGlhUXVlcnkpIHtcblx0XHRpZih0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIilcblx0XHRcdG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcblx0XHR2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXHRcdFx0aWYodHlwZW9mIGlkID09PSBcIm51bWJlclwiKVxuXHRcdFx0XHRhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG5cdFx0fVxuXHRcdGZvcihpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBpdGVtID0gbW9kdWxlc1tpXTtcblx0XHRcdC8vIHNraXAgYWxyZWFkeSBpbXBvcnRlZCBtb2R1bGVcblx0XHRcdC8vIHRoaXMgaW1wbGVtZW50YXRpb24gaXMgbm90IDEwMCUgcGVyZmVjdCBmb3Igd2VpcmQgbWVkaWEgcXVlcnkgY29tYmluYXRpb25zXG5cdFx0XHQvLyAgd2hlbiBhIG1vZHVsZSBpcyBpbXBvcnRlZCBtdWx0aXBsZSB0aW1lcyB3aXRoIGRpZmZlcmVudCBtZWRpYSBxdWVyaWVzLlxuXHRcdFx0Ly8gIEkgaG9wZSB0aGlzIHdpbGwgbmV2ZXIgb2NjdXIgKEhleSB0aGlzIHdheSB3ZSBoYXZlIHNtYWxsZXIgYnVuZGxlcylcblx0XHRcdGlmKHR5cGVvZiBpdGVtWzBdICE9PSBcIm51bWJlclwiIHx8ICFhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG5cdFx0XHRcdGlmKG1lZGlhUXVlcnkgJiYgIWl0ZW1bMl0pIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gbWVkaWFRdWVyeTtcblx0XHRcdFx0fSBlbHNlIGlmKG1lZGlhUXVlcnkpIHtcblx0XHRcdFx0XHRpdGVtWzJdID0gXCIoXCIgKyBpdGVtWzJdICsgXCIpIGFuZCAoXCIgKyBtZWRpYVF1ZXJ5ICsgXCIpXCI7XG5cdFx0XHRcdH1cblx0XHRcdFx0bGlzdC5wdXNoKGl0ZW0pO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcblx0cmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuXHR2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7XG5cdHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblx0aWYgKCFjc3NNYXBwaW5nKSB7XG5cdFx0cmV0dXJuIGNvbnRlbnQ7XG5cdH1cblxuXHRpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG5cdFx0dmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG5cdFx0dmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcblx0XHRcdHJldHVybiAnLyojIHNvdXJjZVVSTD0nICsgY3NzTWFwcGluZy5zb3VyY2VSb290ICsgc291cmNlICsgJyAqLydcblx0XHR9KTtcblxuXHRcdHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuXHR9XG5cblx0cmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn1cblxuLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuXHQvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcblx0dmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG5cdHZhciBkYXRhID0gJ3NvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LCcgKyBiYXNlNjQ7XG5cblx0cmV0dXJuICcvKiMgJyArIGRhdGEgKyAnICovJztcbn1cbiIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cbnZhciBzdHlsZXNJbkRvbSA9IHt9O1xuXG52YXJcdG1lbW9pemUgPSBmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW87XG5cblx0cmV0dXJuIGZ1bmN0aW9uICgpIHtcblx0XHRpZiAodHlwZW9mIG1lbW8gPT09IFwidW5kZWZpbmVkXCIpIG1lbW8gPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuXHRcdHJldHVybiBtZW1vO1xuXHR9O1xufTtcblxudmFyIGlzT2xkSUUgPSBtZW1vaXplKGZ1bmN0aW9uICgpIHtcblx0Ly8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3Ncblx0Ly8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuXHQvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG5cdC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuXHQvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcblx0cmV0dXJuIHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iO1xufSk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiAodGFyZ2V0KSB7XG4gIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7XG59O1xuXG52YXIgZ2V0RWxlbWVudCA9IChmdW5jdGlvbiAoZm4pIHtcblx0dmFyIG1lbW8gPSB7fTtcblxuXHRyZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFzc2luZyBmdW5jdGlvbiBpbiBvcHRpb25zLCB0aGVuIHVzZSBpdCBmb3IgcmVzb2x2ZSBcImhlYWRcIiBlbGVtZW50LlxuICAgICAgICAgICAgICAgIC8vIFVzZWZ1bCBmb3IgU2hhZG93IFJvb3Qgc3R5bGUgaS5lXG4gICAgICAgICAgICAgICAgLy8ge1xuICAgICAgICAgICAgICAgIC8vICAgaW5zZXJ0SW50bzogZnVuY3Rpb24gKCkgeyByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNmb29cIikuc2hhZG93Um9vdCB9XG4gICAgICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGFyZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHR2YXIgc3R5bGVUYXJnZXQgPSBnZXRUYXJnZXQuY2FsbCh0aGlzLCB0YXJnZXQpO1xuXHRcdFx0Ly8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblx0XHRcdGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcblx0XHRcdFx0dHJ5IHtcblx0XHRcdFx0XHQvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuXHRcdFx0XHRcdC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcblx0XHRcdFx0fSBjYXRjaChlKSB7XG5cdFx0XHRcdFx0c3R5bGVUYXJnZXQgPSBudWxsO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0XHRtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcblx0XHR9XG5cdFx0cmV0dXJuIG1lbW9bdGFyZ2V0XVxuXHR9O1xufSkoKTtcblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXJcdHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xudmFyXHRzdHlsZXNJbnNlcnRlZEF0VG9wID0gW107XG5cbnZhclx0Zml4VXJscyA9IHJlcXVpcmUoXCIuL3VybHNcIik7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24obGlzdCwgb3B0aW9ucykge1xuXHRpZiAodHlwZW9mIERFQlVHICE9PSBcInVuZGVmaW5lZFwiICYmIERFQlVHKSB7XG5cdFx0aWYgKHR5cGVvZiBkb2N1bWVudCAhPT0gXCJvYmplY3RcIikgdGhyb3cgbmV3IEVycm9yKFwiVGhlIHN0eWxlLWxvYWRlciBjYW5ub3QgYmUgdXNlZCBpbiBhIG5vbi1icm93c2VyIGVudmlyb25tZW50XCIpO1xuXHR9XG5cblx0b3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cblx0b3B0aW9ucy5hdHRycyA9IHR5cGVvZiBvcHRpb25zLmF0dHJzID09PSBcIm9iamVjdFwiID8gb3B0aW9ucy5hdHRycyA6IHt9O1xuXG5cdC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuXHQvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cdGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSBcImJvb2xlYW5cIikgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG5cblx0Ly8gQnkgZGVmYXVsdCwgYWRkIDxzdHlsZT4gdGFncyB0byB0aGUgPGhlYWQ+IGVsZW1lbnRcbiAgICAgICAgaWYgKCFvcHRpb25zLmluc2VydEludG8pIG9wdGlvbnMuaW5zZXJ0SW50byA9IFwiaGVhZFwiO1xuXG5cdC8vIEJ5IGRlZmF1bHQsIGFkZCA8c3R5bGU+IHRhZ3MgdG8gdGhlIGJvdHRvbSBvZiB0aGUgdGFyZ2V0XG5cdGlmICghb3B0aW9ucy5pbnNlcnRBdCkgb3B0aW9ucy5pbnNlcnRBdCA9IFwiYm90dG9tXCI7XG5cblx0dmFyIHN0eWxlcyA9IGxpc3RUb1N0eWxlcyhsaXN0LCBvcHRpb25zKTtcblxuXHRhZGRTdHlsZXNUb0RvbShzdHlsZXMsIG9wdGlvbnMpO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGUgKG5ld0xpc3QpIHtcblx0XHR2YXIgbWF5UmVtb3ZlID0gW107XG5cblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlcy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBzdHlsZXNbaV07XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdFx0ZG9tU3R5bGUucmVmcy0tO1xuXHRcdFx0bWF5UmVtb3ZlLnB1c2goZG9tU3R5bGUpO1xuXHRcdH1cblxuXHRcdGlmKG5ld0xpc3QpIHtcblx0XHRcdHZhciBuZXdTdHlsZXMgPSBsaXN0VG9TdHlsZXMobmV3TGlzdCwgb3B0aW9ucyk7XG5cdFx0XHRhZGRTdHlsZXNUb0RvbShuZXdTdHlsZXMsIG9wdGlvbnMpO1xuXHRcdH1cblxuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbWF5UmVtb3ZlLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgZG9tU3R5bGUgPSBtYXlSZW1vdmVbaV07XG5cblx0XHRcdGlmKGRvbVN0eWxlLnJlZnMgPT09IDApIHtcblx0XHRcdFx0Zm9yICh2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykgZG9tU3R5bGUucGFydHNbal0oKTtcblxuXHRcdFx0XHRkZWxldGUgc3R5bGVzSW5Eb21bZG9tU3R5bGUuaWRdO1xuXHRcdFx0fVxuXHRcdH1cblx0fTtcbn07XG5cbmZ1bmN0aW9uIGFkZFN0eWxlc1RvRG9tIChzdHlsZXMsIG9wdGlvbnMpIHtcblx0Zm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXMubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IHN0eWxlc1tpXTtcblx0XHR2YXIgZG9tU3R5bGUgPSBzdHlsZXNJbkRvbVtpdGVtLmlkXTtcblxuXHRcdGlmKGRvbVN0eWxlKSB7XG5cdFx0XHRkb21TdHlsZS5yZWZzKys7XG5cblx0XHRcdGZvcih2YXIgaiA9IDA7IGogPCBkb21TdHlsZS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRkb21TdHlsZS5wYXJ0c1tqXShpdGVtLnBhcnRzW2pdKTtcblx0XHRcdH1cblxuXHRcdFx0Zm9yKDsgaiA8IGl0ZW0ucGFydHMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0ZG9tU3R5bGUucGFydHMucHVzaChhZGRTdHlsZShpdGVtLnBhcnRzW2pdLCBvcHRpb25zKSk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBwYXJ0cyA9IFtdO1xuXG5cdFx0XHRmb3IodmFyIGogPSAwOyBqIDwgaXRlbS5wYXJ0cy5sZW5ndGg7IGorKykge1xuXHRcdFx0XHRwYXJ0cy5wdXNoKGFkZFN0eWxlKGl0ZW0ucGFydHNbal0sIG9wdGlvbnMpKTtcblx0XHRcdH1cblxuXHRcdFx0c3R5bGVzSW5Eb21baXRlbS5pZF0gPSB7aWQ6IGl0ZW0uaWQsIHJlZnM6IDEsIHBhcnRzOiBwYXJ0c307XG5cdFx0fVxuXHR9XG59XG5cbmZ1bmN0aW9uIGxpc3RUb1N0eWxlcyAobGlzdCwgb3B0aW9ucykge1xuXHR2YXIgc3R5bGVzID0gW107XG5cdHZhciBuZXdTdHlsZXMgPSB7fTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgaXRlbSA9IGxpc3RbaV07XG5cdFx0dmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG5cdFx0dmFyIGNzcyA9IGl0ZW1bMV07XG5cdFx0dmFyIG1lZGlhID0gaXRlbVsyXTtcblx0XHR2YXIgc291cmNlTWFwID0gaXRlbVszXTtcblx0XHR2YXIgcGFydCA9IHtjc3M6IGNzcywgbWVkaWE6IG1lZGlhLCBzb3VyY2VNYXA6IHNvdXJjZU1hcH07XG5cblx0XHRpZighbmV3U3R5bGVzW2lkXSkgc3R5bGVzLnB1c2gobmV3U3R5bGVzW2lkXSA9IHtpZDogaWQsIHBhcnRzOiBbcGFydF19KTtcblx0XHRlbHNlIG5ld1N0eWxlc1tpZF0ucGFydHMucHVzaChwYXJ0KTtcblx0fVxuXG5cdHJldHVybiBzdHlsZXM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudCAob3B0aW9ucywgc3R5bGUpIHtcblx0dmFyIHRhcmdldCA9IGdldEVsZW1lbnQob3B0aW9ucy5pbnNlcnRJbnRvKVxuXG5cdGlmICghdGFyZ2V0KSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnRJbnRvJyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG5cdH1cblxuXHR2YXIgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AgPSBzdHlsZXNJbnNlcnRlZEF0VG9wW3N0eWxlc0luc2VydGVkQXRUb3AubGVuZ3RoIC0gMV07XG5cblx0aWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwidG9wXCIpIHtcblx0XHRpZiAoIWxhc3RTdHlsZUVsZW1lbnRJbnNlcnRlZEF0VG9wKSB7XG5cdFx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCB0YXJnZXQuZmlyc3RDaGlsZCk7XG5cdFx0fSBlbHNlIGlmIChsYXN0U3R5bGVFbGVtZW50SW5zZXJ0ZWRBdFRvcC5uZXh0U2libGluZykge1xuXHRcdFx0dGFyZ2V0Lmluc2VydEJlZm9yZShzdHlsZSwgbGFzdFN0eWxlRWxlbWVudEluc2VydGVkQXRUb3AubmV4dFNpYmxpbmcpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHRcdH1cblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnB1c2goc3R5bGUpO1xuXHR9IGVsc2UgaWYgKG9wdGlvbnMuaW5zZXJ0QXQgPT09IFwiYm90dG9tXCIpIHtcblx0XHR0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuXHR9IGVsc2UgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydEF0ID09PSBcIm9iamVjdFwiICYmIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKSB7XG5cdFx0dmFyIG5leHRTaWJsaW5nID0gZ2V0RWxlbWVudChvcHRpb25zLmluc2VydEludG8gKyBcIiBcIiArIG9wdGlvbnMuaW5zZXJ0QXQuYmVmb3JlKTtcblx0XHR0YXJnZXQuaW5zZXJ0QmVmb3JlKHN0eWxlLCBuZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiW1N0eWxlIExvYWRlcl1cXG5cXG4gSW52YWxpZCB2YWx1ZSBmb3IgcGFyYW1ldGVyICdpbnNlcnRBdCcgKCdvcHRpb25zLmluc2VydEF0JykgZm91bmQuXFxuIE11c3QgYmUgJ3RvcCcsICdib3R0b20nLCBvciBPYmplY3QuXFxuIChodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlciNpbnNlcnRhdClcXG5cIik7XG5cdH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50IChzdHlsZSkge1xuXHRpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkgcmV0dXJuIGZhbHNlO1xuXHRzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcblxuXHR2YXIgaWR4ID0gc3R5bGVzSW5zZXJ0ZWRBdFRvcC5pbmRleE9mKHN0eWxlKTtcblx0aWYoaWR4ID49IDApIHtcblx0XHRzdHlsZXNJbnNlcnRlZEF0VG9wLnNwbGljZShpZHgsIDEpO1xuXHR9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZVN0eWxlRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG5cblx0aWYob3B0aW9ucy5hdHRycy50eXBlID09PSB1bmRlZmluZWQpIHtcblx0XHRvcHRpb25zLmF0dHJzLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdH1cblxuXHRhZGRBdHRycyhzdHlsZSwgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBzdHlsZSk7XG5cblx0cmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiBjcmVhdGVMaW5rRWxlbWVudCAob3B0aW9ucykge1xuXHR2YXIgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJsaW5rXCIpO1xuXG5cdGlmKG9wdGlvbnMuYXR0cnMudHlwZSA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0b3B0aW9ucy5hdHRycy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHR9XG5cdG9wdGlvbnMuYXR0cnMucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cblx0YWRkQXR0cnMobGluaywgb3B0aW9ucy5hdHRycyk7XG5cdGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zLCBsaW5rKTtcblxuXHRyZXR1cm4gbGluaztcbn1cblxuZnVuY3Rpb24gYWRkQXR0cnMgKGVsLCBhdHRycykge1xuXHRPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0ZWwuc2V0QXR0cmlidXRlKGtleSwgYXR0cnNba2V5XSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZSAob2JqLCBvcHRpb25zKSB7XG5cdHZhciBzdHlsZSwgdXBkYXRlLCByZW1vdmUsIHJlc3VsdDtcblxuXHQvLyBJZiBhIHRyYW5zZm9ybSBmdW5jdGlvbiB3YXMgZGVmaW5lZCwgcnVuIGl0IG9uIHRoZSBjc3Ncblx0aWYgKG9wdGlvbnMudHJhbnNmb3JtICYmIG9iai5jc3MpIHtcblx0ICAgIHJlc3VsdCA9IG9wdGlvbnMudHJhbnNmb3JtKG9iai5jc3MpO1xuXG5cdCAgICBpZiAocmVzdWx0KSB7XG5cdCAgICBcdC8vIElmIHRyYW5zZm9ybSByZXR1cm5zIGEgdmFsdWUsIHVzZSB0aGF0IGluc3RlYWQgb2YgdGhlIG9yaWdpbmFsIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgcnVubmluZyBydW50aW1lIHRyYW5zZm9ybWF0aW9ucyBvbiB0aGUgY3NzLlxuXHQgICAgXHRvYmouY3NzID0gcmVzdWx0O1xuXHQgICAgfSBlbHNlIHtcblx0ICAgIFx0Ly8gSWYgdGhlIHRyYW5zZm9ybSBmdW5jdGlvbiByZXR1cm5zIGEgZmFsc3kgdmFsdWUsIGRvbid0IGFkZCB0aGlzIGNzcy5cblx0ICAgIFx0Ly8gVGhpcyBhbGxvd3MgY29uZGl0aW9uYWwgbG9hZGluZyBvZiBjc3Ncblx0ICAgIFx0cmV0dXJuIGZ1bmN0aW9uKCkge1xuXHQgICAgXHRcdC8vIG5vb3Bcblx0ICAgIFx0fTtcblx0ICAgIH1cblx0fVxuXG5cdGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuXHRcdHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuXG5cdFx0c3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKSk7XG5cblx0XHR1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcblx0XHRyZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuXG5cdH0gZWxzZSBpZiAoXG5cdFx0b2JqLnNvdXJjZU1hcCAmJlxuXHRcdHR5cGVvZiBVUkwgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBVUkwuY3JlYXRlT2JqZWN0VVJMID09PSBcImZ1bmN0aW9uXCIgJiZcblx0XHR0eXBlb2YgVVJMLnJldm9rZU9iamVjdFVSTCA9PT0gXCJmdW5jdGlvblwiICYmXG5cdFx0dHlwZW9mIEJsb2IgPT09IFwiZnVuY3Rpb25cIiAmJlxuXHRcdHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCJcblx0KSB7XG5cdFx0c3R5bGUgPSBjcmVhdGVMaW5rRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSB1cGRhdGVMaW5rLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cblx0XHRcdGlmKHN0eWxlLmhyZWYpIFVSTC5yZXZva2VPYmplY3RVUkwoc3R5bGUuaHJlZik7XG5cdFx0fTtcblx0fSBlbHNlIHtcblx0XHRzdHlsZSA9IGNyZWF0ZVN0eWxlRWxlbWVudChvcHRpb25zKTtcblx0XHR1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUpO1xuXHRcdHJlbW92ZSA9IGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG5cdFx0fTtcblx0fVxuXG5cdHVwZGF0ZShvYmopO1xuXG5cdHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZSAobmV3T2JqKSB7XG5cdFx0aWYgKG5ld09iaikge1xuXHRcdFx0aWYgKFxuXHRcdFx0XHRuZXdPYmouY3NzID09PSBvYmouY3NzICYmXG5cdFx0XHRcdG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmXG5cdFx0XHRcdG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXBcblx0XHRcdCkge1xuXHRcdFx0XHRyZXR1cm47XG5cdFx0XHR9XG5cblx0XHRcdHVwZGF0ZShvYmogPSBuZXdPYmopO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHRyZW1vdmUoKTtcblx0XHR9XG5cdH07XG59XG5cbnZhciByZXBsYWNlVGV4dCA9IChmdW5jdGlvbiAoKSB7XG5cdHZhciB0ZXh0U3RvcmUgPSBbXTtcblxuXHRyZXR1cm4gZnVuY3Rpb24gKGluZGV4LCByZXBsYWNlbWVudCkge1xuXHRcdHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcblxuXHRcdHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuXHR9O1xufSkoKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyAoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuXHR2YXIgY3NzID0gcmVtb3ZlID8gXCJcIiA6IG9iai5jc3M7XG5cblx0aWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcblx0fSBlbHNlIHtcblx0XHR2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG5cdFx0dmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG5cdFx0aWYgKGNoaWxkTm9kZXNbaW5kZXhdKSBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG5cblx0XHRpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcblx0XHRcdHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuXHRcdH1cblx0fVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnIChzdHlsZSwgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG5cblx0aWYobWVkaWEpIHtcblx0XHRzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSlcblx0fVxuXG5cdGlmKHN0eWxlLnN0eWxlU2hlZXQpIHtcblx0XHRzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG5cdH0gZWxzZSB7XG5cdFx0d2hpbGUoc3R5bGUuZmlyc3RDaGlsZCkge1xuXHRcdFx0c3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG5cdFx0fVxuXG5cdFx0c3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG5cdH1cbn1cblxuZnVuY3Rpb24gdXBkYXRlTGluayAobGluaywgb3B0aW9ucywgb2JqKSB7XG5cdHZhciBjc3MgPSBvYmouY3NzO1xuXHR2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuXHQvKlxuXHRcdElmIGNvbnZlcnRUb0Fic29sdXRlVXJscyBpc24ndCBkZWZpbmVkLCBidXQgc291cmNlbWFwcyBhcmUgZW5hYmxlZFxuXHRcdGFuZCB0aGVyZSBpcyBubyBwdWJsaWNQYXRoIGRlZmluZWQgdGhlbiBsZXRzIHR1cm4gY29udmVydFRvQWJzb2x1dGVVcmxzXG5cdFx0b24gYnkgZGVmYXVsdC4gIE90aGVyd2lzZSBkZWZhdWx0IHRvIHRoZSBjb252ZXJ0VG9BYnNvbHV0ZVVybHMgb3B0aW9uXG5cdFx0ZGlyZWN0bHlcblx0Ki9cblx0dmFyIGF1dG9GaXhVcmxzID0gb3B0aW9ucy5jb252ZXJ0VG9BYnNvbHV0ZVVybHMgPT09IHVuZGVmaW5lZCAmJiBzb3VyY2VNYXA7XG5cblx0aWYgKG9wdGlvbnMuY29udmVydFRvQWJzb2x1dGVVcmxzIHx8IGF1dG9GaXhVcmxzKSB7XG5cdFx0Y3NzID0gZml4VXJscyhjc3MpO1xuXHR9XG5cblx0aWYgKHNvdXJjZU1hcCkge1xuXHRcdC8vIGh0dHA6Ly9zdGFja292ZXJmbG93LmNvbS9hLzI2NjAzODc1XG5cdFx0Y3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIiArIGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSkgKyBcIiAqL1wiO1xuXHR9XG5cblx0dmFyIGJsb2IgPSBuZXcgQmxvYihbY3NzXSwgeyB0eXBlOiBcInRleHQvY3NzXCIgfSk7XG5cblx0dmFyIG9sZFNyYyA9IGxpbmsuaHJlZjtcblxuXHRsaW5rLmhyZWYgPSBVUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xuXG5cdGlmKG9sZFNyYykgVVJMLnJldm9rZU9iamVjdFVSTChvbGRTcmMpO1xufVxuIiwiXG4vKipcbiAqIFdoZW4gc291cmNlIG1hcHMgYXJlIGVuYWJsZWQsIGBzdHlsZS1sb2FkZXJgIHVzZXMgYSBsaW5rIGVsZW1lbnQgd2l0aCBhIGRhdGEtdXJpIHRvXG4gKiBlbWJlZCB0aGUgY3NzIG9uIHRoZSBwYWdlLiBUaGlzIGJyZWFrcyBhbGwgcmVsYXRpdmUgdXJscyBiZWNhdXNlIG5vdyB0aGV5IGFyZSByZWxhdGl2ZSB0byBhXG4gKiBidW5kbGUgaW5zdGVhZCBvZiB0aGUgY3VycmVudCBwYWdlLlxuICpcbiAqIE9uZSBzb2x1dGlvbiBpcyB0byBvbmx5IHVzZSBmdWxsIHVybHMsIGJ1dCB0aGF0IG1heSBiZSBpbXBvc3NpYmxlLlxuICpcbiAqIEluc3RlYWQsIHRoaXMgZnVuY3Rpb24gXCJmaXhlc1wiIHRoZSByZWxhdGl2ZSB1cmxzIHRvIGJlIGFic29sdXRlIGFjY29yZGluZyB0byB0aGUgY3VycmVudCBwYWdlIGxvY2F0aW9uLlxuICpcbiAqIEEgcnVkaW1lbnRhcnkgdGVzdCBzdWl0ZSBpcyBsb2NhdGVkIGF0IGB0ZXN0L2ZpeFVybHMuanNgIGFuZCBjYW4gYmUgcnVuIHZpYSB0aGUgYG5wbSB0ZXN0YCBjb21tYW5kLlxuICpcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3MpIHtcbiAgLy8gZ2V0IGN1cnJlbnQgbG9jYXRpb25cbiAgdmFyIGxvY2F0aW9uID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiAmJiB3aW5kb3cubG9jYXRpb247XG5cbiAgaWYgKCFsb2NhdGlvbikge1xuICAgIHRocm93IG5ldyBFcnJvcihcImZpeFVybHMgcmVxdWlyZXMgd2luZG93LmxvY2F0aW9uXCIpO1xuICB9XG5cblx0Ly8gYmxhbmsgb3IgbnVsbD9cblx0aWYgKCFjc3MgfHwgdHlwZW9mIGNzcyAhPT0gXCJzdHJpbmdcIikge1xuXHQgIHJldHVybiBjc3M7XG4gIH1cblxuICB2YXIgYmFzZVVybCA9IGxvY2F0aW9uLnByb3RvY29sICsgXCIvL1wiICsgbG9jYXRpb24uaG9zdDtcbiAgdmFyIGN1cnJlbnREaXIgPSBiYXNlVXJsICsgbG9jYXRpb24ucGF0aG5hbWUucmVwbGFjZSgvXFwvW15cXC9dKiQvLCBcIi9cIik7XG5cblx0Ly8gY29udmVydCBlYWNoIHVybCguLi4pXG5cdC8qXG5cdFRoaXMgcmVndWxhciBleHByZXNzaW9uIGlzIGp1c3QgYSB3YXkgdG8gcmVjdXJzaXZlbHkgbWF0Y2ggYnJhY2tldHMgd2l0aGluXG5cdGEgc3RyaW5nLlxuXG5cdCAvdXJsXFxzKlxcKCAgPSBNYXRjaCBvbiB0aGUgd29yZCBcInVybFwiIHdpdGggYW55IHdoaXRlc3BhY2UgYWZ0ZXIgaXQgYW5kIHRoZW4gYSBwYXJlbnNcblx0ICAgKCAgPSBTdGFydCBhIGNhcHR1cmluZyBncm91cFxuXHQgICAgICg/OiAgPSBTdGFydCBhIG5vbi1jYXB0dXJpbmcgZ3JvdXBcblx0ICAgICAgICAgW14pKF0gID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgXFwoICA9IE1hdGNoIGEgc3RhcnQgcGFyZW50aGVzZXNcblx0ICAgICAgICAgICAgICg/OiAgPSBTdGFydCBhbm90aGVyIG5vbi1jYXB0dXJpbmcgZ3JvdXBzXG5cdCAgICAgICAgICAgICAgICAgW14pKF0rICA9IE1hdGNoIGFueXRoaW5nIHRoYXQgaXNuJ3QgYSBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgIHwgID0gT1Jcblx0ICAgICAgICAgICAgICAgICBcXCggID0gTWF0Y2ggYSBzdGFydCBwYXJlbnRoZXNlc1xuXHQgICAgICAgICAgICAgICAgICAgICBbXikoXSogID0gTWF0Y2ggYW55dGhpbmcgdGhhdCBpc24ndCBhIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICAgICAgXFwpICA9IE1hdGNoIGEgZW5kIHBhcmVudGhlc2VzXG5cdCAgICAgICAgICAgICApICA9IEVuZCBHcm91cFxuICAgICAgICAgICAgICAqXFwpID0gTWF0Y2ggYW55dGhpbmcgYW5kIHRoZW4gYSBjbG9zZSBwYXJlbnNcbiAgICAgICAgICApICA9IENsb3NlIG5vbi1jYXB0dXJpbmcgZ3JvdXBcbiAgICAgICAgICAqICA9IE1hdGNoIGFueXRoaW5nXG4gICAgICAgKSAgPSBDbG9zZSBjYXB0dXJpbmcgZ3JvdXBcblx0IFxcKSAgPSBNYXRjaCBhIGNsb3NlIHBhcmVuc1xuXG5cdCAvZ2kgID0gR2V0IGFsbCBtYXRjaGVzLCBub3QgdGhlIGZpcnN0LiAgQmUgY2FzZSBpbnNlbnNpdGl2ZS5cblx0ICovXG5cdHZhciBmaXhlZENzcyA9IGNzcy5yZXBsYWNlKC91cmxcXHMqXFwoKCg/OlteKShdfFxcKCg/OlteKShdK3xcXChbXikoXSpcXCkpKlxcKSkqKVxcKS9naSwgZnVuY3Rpb24oZnVsbE1hdGNoLCBvcmlnVXJsKSB7XG5cdFx0Ly8gc3RyaXAgcXVvdGVzIChpZiB0aGV5IGV4aXN0KVxuXHRcdHZhciB1bnF1b3RlZE9yaWdVcmwgPSBvcmlnVXJsXG5cdFx0XHQudHJpbSgpXG5cdFx0XHQucmVwbGFjZSgvXlwiKC4qKVwiJC8sIGZ1bmN0aW9uKG8sICQxKXsgcmV0dXJuICQxOyB9KVxuXHRcdFx0LnJlcGxhY2UoL14nKC4qKSckLywgZnVuY3Rpb24obywgJDEpeyByZXR1cm4gJDE7IH0pO1xuXG5cdFx0Ly8gYWxyZWFkeSBhIGZ1bGwgdXJsPyBubyBjaGFuZ2Vcblx0XHRpZiAoL14oI3xkYXRhOnxodHRwOlxcL1xcL3xodHRwczpcXC9cXC98ZmlsZTpcXC9cXC9cXC98XFxzKiQpL2kudGVzdCh1bnF1b3RlZE9yaWdVcmwpKSB7XG5cdFx0ICByZXR1cm4gZnVsbE1hdGNoO1xuXHRcdH1cblxuXHRcdC8vIGNvbnZlcnQgdGhlIHVybCB0byBhIGZ1bGwgdXJsXG5cdFx0dmFyIG5ld1VybDtcblxuXHRcdGlmICh1bnF1b3RlZE9yaWdVcmwuaW5kZXhPZihcIi8vXCIpID09PSAwKSB7XG5cdFx0ICBcdC8vVE9ETzogc2hvdWxkIHdlIGFkZCBwcm90b2NvbD9cblx0XHRcdG5ld1VybCA9IHVucXVvdGVkT3JpZ1VybDtcblx0XHR9IGVsc2UgaWYgKHVucXVvdGVkT3JpZ1VybC5pbmRleE9mKFwiL1wiKSA9PT0gMCkge1xuXHRcdFx0Ly8gcGF0aCBzaG91bGQgYmUgcmVsYXRpdmUgdG8gdGhlIGJhc2UgdXJsXG5cdFx0XHRuZXdVcmwgPSBiYXNlVXJsICsgdW5xdW90ZWRPcmlnVXJsOyAvLyBhbHJlYWR5IHN0YXJ0cyB3aXRoICcvJ1xuXHRcdH0gZWxzZSB7XG5cdFx0XHQvLyBwYXRoIHNob3VsZCBiZSByZWxhdGl2ZSB0byBjdXJyZW50IGRpcmVjdG9yeVxuXHRcdFx0bmV3VXJsID0gY3VycmVudERpciArIHVucXVvdGVkT3JpZ1VybC5yZXBsYWNlKC9eXFwuXFwvLywgXCJcIik7IC8vIFN0cmlwIGxlYWRpbmcgJy4vJ1xuXHRcdH1cblxuXHRcdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgdXJsKC4uLilcblx0XHRyZXR1cm4gXCJ1cmwoXCIgKyBKU09OLnN0cmluZ2lmeShuZXdVcmwpICsgXCIpXCI7XG5cdH0pO1xuXG5cdC8vIHNlbmQgYmFjayB0aGUgZml4ZWQgY3NzXG5cdHJldHVybiBmaXhlZENzcztcbn07XG4iLCJcbnZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTUtMyEuL21haW4uc2Nzc1wiKTtcblxuaWYodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG5cbnZhciB0cmFuc2Zvcm07XG52YXIgaW5zZXJ0SW50bztcblxuXG5cbnZhciBvcHRpb25zID0ge1wiaG1yXCI6dHJ1ZX1cblxub3B0aW9ucy50cmFuc2Zvcm0gPSB0cmFuc2Zvcm1cbm9wdGlvbnMuaW5zZXJ0SW50byA9IHVuZGVmaW5lZDtcblxudmFyIHVwZGF0ZSA9IHJlcXVpcmUoXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9saWIvYWRkU3R5bGVzLmpzXCIpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5pZihjb250ZW50LmxvY2FscykgbW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscztcblxuaWYobW9kdWxlLmhvdCkge1xuXHRtb2R1bGUuaG90LmFjY2VwdChcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvaW5kZXguanM/P3JlZi0tNS0xIS4uLy4uL25vZGVfbW9kdWxlcy9wb3N0Y3NzLWxvYWRlci9saWIvaW5kZXguanM/P3JlZi0tNS0yIS4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9saWIvbG9hZGVyLmpzPz9yZWYtLTUtMyEuL21haW4uc2Nzc1wiLCBmdW5jdGlvbigpIHtcblx0XHR2YXIgbmV3Q29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2luZGV4LmpzPz9yZWYtLTUtMSEuLi8uLi9ub2RlX21vZHVsZXMvcG9zdGNzcy1sb2FkZXIvbGliL2luZGV4LmpzPz9yZWYtLTUtMiEuLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvbGliL2xvYWRlci5qcz8/cmVmLS01LTMhLi9tYWluLnNjc3NcIik7XG5cblx0XHRpZih0eXBlb2YgbmV3Q29udGVudCA9PT0gJ3N0cmluZycpIG5ld0NvbnRlbnQgPSBbW21vZHVsZS5pZCwgbmV3Q29udGVudCwgJyddXTtcblxuXHRcdHZhciBsb2NhbHMgPSAoZnVuY3Rpb24oYSwgYikge1xuXHRcdFx0dmFyIGtleSwgaWR4ID0gMDtcblxuXHRcdFx0Zm9yKGtleSBpbiBhKSB7XG5cdFx0XHRcdGlmKCFiIHx8IGFba2V5XSAhPT0gYltrZXldKSByZXR1cm4gZmFsc2U7XG5cdFx0XHRcdGlkeCsrO1xuXHRcdFx0fVxuXG5cdFx0XHRmb3Ioa2V5IGluIGIpIGlkeC0tO1xuXG5cdFx0XHRyZXR1cm4gaWR4ID09PSAwO1xuXHRcdH0oY29udGVudC5sb2NhbHMsIG5ld0NvbnRlbnQubG9jYWxzKSk7XG5cblx0XHRpZighbG9jYWxzKSB0aHJvdyBuZXcgRXJyb3IoJ0Fib3J0aW5nIENTUyBITVIgZHVlIHRvIGNoYW5nZWQgY3NzLW1vZHVsZXMgbG9jYWxzLicpO1xuXG5cdFx0dXBkYXRlKG5ld0NvbnRlbnQpO1xuXHR9KTtcblxuXHRtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oKSB7IHVwZGF0ZSgpOyB9KTtcbn0iLCIvLyBjc3NcbmltcG9ydCAnLi9fc2Nzcy9tYWluLnNjc3MnO1xuXG4vLyAvLyBqUXVlcnlcbi8vIGltcG9ydCBqUXVlcnkgZnJvbSAnanF1ZXJ5Jztcbi8vIGNvbnN0ICQgPSBqUXVlcnk7XG5cbi8vIC8vIHZ1ZVxuLy8gaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XG5cbi8vIC8vIHBpY3R1cmXopoHntKDjg53jg6rjg5XjgqPjg6tcbi8vIGltcG9ydCBQaWN0dXJlZmlsbCBmcm9tIFwicGljdHVyZWZpbGxcIjtcblxuLy8gLy8g44Gd44Gu5LuW44GuSlNcbi8vIGltcG9ydCB7IGZvbyB9IGZyb20gXCIuL19qcy9fZm9vXCI7XG4vLyBmb28oKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=