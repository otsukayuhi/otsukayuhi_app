!function(n){var e={};function t(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return n[o].call(i.exports,i,i.exports,t),i.l=!0,i.exports}t.m=n,t.c=e,t.d=function(n,e,o){t.o(n,e)||Object.defineProperty(n,e,{configurable:!1,enumerable:!0,get:o})},t.r=function(n){Object.defineProperty(n,"__esModule",{value:!0})},t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,"a",e),e},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},t.p="",t(t.s=6)}([function(n,e){n.exports=function(n){var e=[];return e.toString=function(){return this.map(function(e){var t=function(n,e){var t=n[1]||"",o=n[3];if(!o)return t;if(e&&"function"==typeof btoa){var i=(a=o,"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(a))))+" */"),r=o.sources.map(function(n){return"/*# sourceURL="+o.sourceRoot+n+" */"});return[t].concat(r).concat([i]).join("\n")}var a;return[t].join("\n")}(e,n);return e[2]?"@media "+e[2]+"{"+t+"}":t}).join("")},e.i=function(n,t){"string"==typeof n&&(n=[[null,n,""]]);for(var o={},i=0;i<this.length;i++){var r=this[i][0];"number"==typeof r&&(o[r]=!0)}for(i=0;i<n.length;i++){var a=n[i];"number"==typeof a[0]&&o[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),e.push(a))}},e}},function(n,e){n.exports=function(n){var e="undefined"!=typeof window&&window.location;if(!e)throw new Error("fixUrls requires window.location");if(!n||"string"!=typeof n)return n;var t=e.protocol+"//"+e.host,o=t+e.pathname.replace(/\/[^\/]*$/,"/");return n.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(n,e){var i,r=e.trim().replace(/^"(.*)"$/,function(n,e){return e}).replace(/^'(.*)'$/,function(n,e){return e});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(r)?n:(i=0===r.indexOf("//")?r:0===r.indexOf("/")?t+r:o+r.replace(/^\.\//,""),"url("+JSON.stringify(i)+")")})}},function(n,e,t){var o,i,r={},a=(o=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===i&&(i=o.apply(this,arguments)),i}),s=function(n){var e={};return function(n){if("function"==typeof n)return n();if(void 0===e[n]){var t=function(n){return document.querySelector(n)}.call(this,n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}}(),A=null,l=0,c=[],d=t(1);function p(n,e){for(var t=0;t<n.length;t++){var o=n[t],i=r[o.id];if(i){i.refs++;for(var a=0;a<i.parts.length;a++)i.parts[a](o.parts[a]);for(;a<o.parts.length;a++)i.parts.push(b(o.parts[a],e))}else{var s=[];for(a=0;a<o.parts.length;a++)s.push(b(o.parts[a],e));r[o.id]={id:o.id,refs:1,parts:s}}}}function u(n,e){for(var t=[],o={},i=0;i<n.length;i++){var r=n[i],a=e.base?r[0]+e.base:r[0],s={css:r[1],media:r[2],sourceMap:r[3]};o[a]?o[a].parts.push(s):t.push(o[a]={id:a,parts:[s]})}return t}function f(n,e){var t=s(n.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var o=c[c.length-1];if("top"===n.insertAt)o?o.nextSibling?t.insertBefore(e,o.nextSibling):t.appendChild(e):t.insertBefore(e,t.firstChild),c.push(e);else if("bottom"===n.insertAt)t.appendChild(e);else{if("object"!=typeof n.insertAt||!n.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var i=s(n.insertInto+" "+n.insertAt.before);t.insertBefore(e,i)}}function h(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n);var e=c.indexOf(n);e>=0&&c.splice(e,1)}function m(n){var e=document.createElement("style");return void 0===n.attrs.type&&(n.attrs.type="text/css"),C(e,n.attrs),f(n,e),e}function C(n,e){Object.keys(e).forEach(function(t){n.setAttribute(t,e[t])})}function b(n,e){var t,o,i,r;if(e.transform&&n.css){if(!(r=e.transform(n.css)))return function(){};n.css=r}if(e.singleton){var a=l++;t=A||(A=m(e)),o=y.bind(null,t,a,!1),i=y.bind(null,t,a,!0)}else n.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(n){var e=document.createElement("link");return void 0===n.attrs.type&&(n.attrs.type="text/css"),n.attrs.rel="stylesheet",C(e,n.attrs),f(n,e),e}(e),o=function(n,e,t){var o=t.css,i=t.sourceMap,r=void 0===e.convertToAbsoluteUrls&&i;(e.convertToAbsoluteUrls||r)&&(o=d(o));i&&(o+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */");var a=new Blob([o],{type:"text/css"}),s=n.href;n.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,e),i=function(){h(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(e),o=function(n,e){var t=e.css,o=e.media;o&&n.setAttribute("media",o);if(n.styleSheet)n.styleSheet.cssText=t;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(t))}}.bind(null,t),i=function(){h(t)});return o(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap)return;o(n=e)}else i()}}n.exports=function(n,e){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs="object"==typeof e.attrs?e.attrs:{},e.singleton||"boolean"==typeof e.singleton||(e.singleton=a()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var t=u(n,e);return p(t,e),function(n){for(var o=[],i=0;i<t.length;i++){var a=t[i];(s=r[a.id]).refs--,o.push(s)}n&&p(u(n,e),e);for(i=0;i<o.length;i++){var s;if(0===(s=o[i]).refs){for(var A=0;A<s.parts.length;A++)s.parts[A]();delete r[s.id]}}}};var g,B=(g=[],function(n,e){return g[n]=e,g.filter(Boolean).join("\n")});function y(n,e,t,o){var i=t?"":o.css;if(n.styleSheet)n.styleSheet.cssText=B(e,i);else{var r=document.createTextNode(i),a=n.childNodes;a[e]&&n.removeChild(a[e]),a.length?n.insertBefore(r,a[e]):n.appendChild(r)}}},function(n,e,t){(n.exports=t(0)(!0)).push([n.i,"/*! sanitize.css v5.0.0 | CC0 License | github.com/jonathantneal/sanitize.css */*,:after,:before{background-repeat:no-repeat;box-sizing:inherit}:after,:before{text-decoration:inherit;vertical-align:inherit}html{box-sizing:border-box;cursor:default;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%}article,aside,footer,header,nav,section{display:block}body{margin:0}h1{font-size:2em;margin:.67em 0}figcaption,figure,main{display:block}figure{margin:1em 40px}hr{box-sizing:content-box;height:0;overflow:visible}nav ol,nav ul{list-style:none}pre{font-family:monospace,monospace;font-size:1em}a{background-color:transparent;-webkit-text-decoration-skip:objects}abbr[title]{border-bottom:none;text-decoration:underline;-webkit-text-decoration:underline dotted;text-decoration:underline dotted}b,strong{font-weight:inherit;font-weight:bolder}code,kbd,samp{font-family:monospace,monospace;font-size:1em}dfn{font-style:italic}mark{background-color:#ff0;color:#000}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}::-moz-selection{background-color:#b3d4fc;color:#000;text-shadow:none}::selection{background-color:#b3d4fc;color:#000;text-shadow:none}audio,canvas,iframe,img,svg,video{vertical-align:middle}audio,video{display:inline-block}audio:not([controls]){display:none;height:0}img{border-style:none}svg{fill:currentColor}svg:not(:root){overflow:hidden}table{border-collapse:collapse}button,input,optgroup,select,textarea{margin:0}button,input,select,textarea{background-color:transparent;color:inherit;font-size:inherit;line-height:inherit}button,input{overflow:visible}button,select{text-transform:none}[type=reset],[type=submit],button,html [type=button]{-webkit-appearance:button}[type=button]::-moz-focus-inner,[type=reset]::-moz-focus-inner,[type=submit]::-moz-focus-inner,button::-moz-focus-inner{border-style:none;padding:0}[type=button]:-moz-focusring,[type=reset]:-moz-focusring,[type=submit]:-moz-focusring,button:-moz-focusring{outline:1px dotted ButtonText}legend{box-sizing:border-box;color:inherit;display:table;max-width:100%;padding:0;white-space:normal}progress{display:inline-block;vertical-align:baseline}textarea{overflow:auto;resize:vertical}[type=checkbox],[type=radio]{box-sizing:border-box;padding:0}[type=number]::-webkit-inner-spin-button,[type=number]::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}[type=search]::-webkit-search-cancel-button,[type=search]::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}details,menu{display:block}summary{display:list-item}canvas{display:inline-block}template{display:none}[tabindex],a,area,button,input,label,select,summary,textarea{touch-action:manipulation}[hidden]{display:none}[aria-busy=true]{cursor:progress}[aria-controls]{cursor:pointer}[aria-hidden=false][hidden]:not(:focus){clip:rect(0,0,0,0);display:inherit;position:absolute}[aria-disabled]{cursor:default}","",{version:3,sources:["/Users/otsuka/Desktop/_mydata/otsukayuhi_app/node_modules/sanitize.css/sanitize.css"],names:[],mappings:"AAAA,gFAAgF,AAUhF,iBAGC,4BAA4B,AAC5B,kBAAmB,CACnB,AAOD,eAEC,wBAAwB,AACxB,sBAAuB,CACvB,AAQD,KACC,sBAAsB,AACtB,eAAe,AACf,0BAA0B,AAC1B,6BAA8B,CAC9B,AASD,wCAMC,aAAc,CACd,AAMD,KACC,QAAS,CACT,AAOD,GACC,cAAc,AACd,cAAe,CACf,AAUD,uBAGC,aAAc,CACd,AAMD,OACC,eAAgB,CAChB,AAOD,GACC,uBAAuB,AACvB,SAAS,AACT,gBAAiB,CACjB,AAMD,cAEC,eAAgB,CAChB,AAOD,IACC,gCAAiC,AACjC,aAAc,CACd,AAUD,EACC,6BAA6B,AAC7B,oCAAqC,CACrC,AAOD,YACC,mBAAmB,AACnB,0BAA0B,AAC1B,yCAAiC,AAAjC,gCAAiC,CACjC,AAMD,SAEC,oBAAoB,AASpB,kBAAmB,CARnB,AAgBD,cAGC,gCAAiC,AACjC,aAAc,CACd,AAMD,IACC,iBAAkB,CAClB,AAMD,KACC,sBAAyB,AACzB,UAAc,CACd,AAMD,MACC,aAAc,CACd,AAOD,QAEC,cAAc,AACd,cAAc,AACd,kBAAkB,AAClB,uBAAwB,CACxB,AAED,IACC,aAAc,CACd,AAED,IACC,SAAU,CACV,AAOD,iBACC,yBAAyB,AACzB,WAAc,AACd,gBAAiB,CACjB,AAED,YACC,yBAAyB,AACzB,WAAc,AACd,gBAAiB,CACjB,AASD,kCAMC,qBAAsB,CACtB,AAMD,YAEC,oBAAqB,CACrB,AAMD,sBACC,aAAa,AACb,QAAS,CACT,AAMD,IACC,iBAAkB,CAClB,AAMD,IACC,iBAAkB,CAClB,AAMD,eACC,eAAgB,CAChB,AASD,MACC,wBAAyB,CACzB,AASD,sCAKC,QAAS,CACT,AAMD,6BAIC,6BAA6B,AAC7B,cAAc,AACd,kBAAkB,AAClB,mBAAoB,CACpB,AAOD,aAEC,gBAAiB,CACjB,AAOD,cAEC,mBAAoB,CACpB,AAQD,qDAIC,yBAA0B,CAC1B,AAMD,wHAIC,kBAAkB,AAClB,SAAU,CACV,AAMD,4GAIC,6BAA8B,CAC9B,AASD,OACC,sBAAsB,AACtB,cAAc,AACd,cAAc,AACd,eAAe,AACf,UAAU,AACV,kBAAmB,CACnB,AAOD,SACC,qBAAqB,AACrB,uBAAwB,CACxB,AAOD,SACC,cAAc,AACd,eAAgB,CAChB,AA3CD,6BAoDC,sBAAsB,AACtB,SAAU,CACV,AA5CD,kFAoDC,WAAY,CACZ,AA7CD,cAqDC,6BAA6B,AAC7B,mBAAoB,CACpB,AA9CD,qFAsDC,uBAAwB,CACxB,AAOD,6BACC,0BAA0B,AAC1B,YAAa,CACb,AAUD,aAEC,aAAc,CACd,AAMD,QACC,iBAAkB,CAClB,AASD,OACC,oBAAqB,CACrB,AAMD,SACC,YAAa,CACb,AAUD,6DAUC,yBAA0B,CAC1B,AA5DD,SAmEC,YAAa,CACb,AA5DD,iBAsEC,eAAgB,CAChB,AAjED,gBAwEC,cAAe,CACf,AAnED,wCA0EC,mBAAsB,AACtB,gBAAgB,AAChB,iBAAkB,CAClB,AApED,gBA4EC,cAAe,CACf",file:"sanitize.css",sourcesContent:['/*! sanitize.css v5.0.0 | CC0 License | github.com/jonathantneal/sanitize.css */\n\n/* Document (https://html.spec.whatwg.org/multipage/semantics.html#semantics)\n   ========================================================================== */\n\n/**\n * 1. Remove repeating backgrounds in all browsers (opinionated).\n * 2. Add box sizing inheritence in all browsers (opinionated).\n */\n\n*,\n::before,\n::after {\n\tbackground-repeat: no-repeat; /* 1 */\n\tbox-sizing: inherit; /* 2 */\n}\n\n/**\n * 1. Add text decoration inheritance in all browsers (opinionated).\n * 2. Add vertical alignment inheritence in all browsers (opinionated).\n */\n\n::before,\n::after {\n\ttext-decoration: inherit; /* 1 */\n\tvertical-align: inherit; /* 2 */\n}\n\n/**\n * 1. Add border box sizing in all browsers (opinionated).\n * 2. Add the default cursor in all browsers (opinionated).\n * 3. Prevent font size adjustments after orientation changes in IE and iOS.\n */\n\nhtml {\n\tbox-sizing: border-box; /* 1 */\n\tcursor: default; /* 2 */\n\t-ms-text-size-adjust: 100%; /* 3 */\n\t-webkit-text-size-adjust: 100%; /* 3 */\n}\n\n/* Sections (https://html.spec.whatwg.org/multipage/semantics.html#sections)\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\narticle,\naside,\nfooter,\nheader,\nnav,\nsection {\n\tdisplay: block;\n}\n\n/**\n * Remove the margin in all browsers (opinionated).\n */\n\nbody {\n\tmargin: 0;\n}\n\n/**\n * Correct the font size and margin on `h1` elements within `section` and\n * `article` contexts in Chrome, Firefox, and Safari.\n */\n\nh1 {\n\tfont-size: 2em;\n\tmargin: .67em 0;\n}\n\n/* Grouping content (https://html.spec.whatwg.org/multipage/semantics.html#grouping-content)\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n * 1. Add the correct display in IE.\n */\n\nfigcaption,\nfigure,\nmain { /* 1 */\n\tdisplay: block;\n}\n\n/**\n * Add the correct margin in IE 8.\n */\n\nfigure {\n\tmargin: 1em 40px;\n}\n\n/**\n * 1. Add the correct box sizing in Firefox.\n * 2. Show the overflow in Edge and IE.\n */\n\nhr {\n\tbox-sizing: content-box; /* 1 */\n\theight: 0; /* 1 */\n\toverflow: visible; /* 2 */\n}\n\n/**\n * Remove the list style on navigation lists in all browsers (opinionated).\n */\n\nnav ol,\nnav ul {\n\tlist-style: none;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\npre {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/* Text-level semantics (https://html.spec.whatwg.org/multipage/semantics.html#text-level-semantics)\n   ========================================================================== */\n\n/**\n * 1. Remove the gray background on active links in IE 10.\n * 2. Remove gaps in links underline in iOS 8+ and Safari 8+.\n */\n\na {\n\tbackground-color: transparent; /* 1 */\n\t-webkit-text-decoration-skip: objects; /* 2 */\n}\n\n/**\n * 1. Remove the bottom border in Firefox 39-.\n * 2. Add the correct text decoration in Chrome, Edge, IE, Opera, and Safari.\n */\n\nabbr[title] {\n\tborder-bottom: none; /* 1 */\n\ttext-decoration: underline; /* 2 */\n\ttext-decoration: underline dotted; /* 2 */\n}\n\n/**\n * Prevent the duplicate application of `bolder` by the next rule in Safari 6.\n */\n\nb,\nstrong {\n\tfont-weight: inherit;\n}\n\n/**\n * Add the correct font weight in Chrome, Edge, and Safari.\n */\n\nb,\nstrong {\n\tfont-weight: bolder;\n}\n\n/**\n * 1. Correct the inheritance and scaling of font size in all browsers.\n * 2. Correct the odd `em` font sizing in all browsers.\n */\n\ncode,\nkbd,\nsamp {\n\tfont-family: monospace, monospace; /* 1 */\n\tfont-size: 1em; /* 2 */\n}\n\n/**\n * Add the correct font style in Android 4.3-.\n */\n\ndfn {\n\tfont-style: italic;\n}\n\n/**\n * Add the correct background and color in IE 9-.\n */\n\nmark {\n\tbackground-color: #ffff00;\n\tcolor: #000000;\n}\n\n/**\n * Add the correct font size in all browsers.\n */\n\nsmall {\n\tfont-size: 80%;\n}\n\n/**\n * Prevent `sub` and `sup` elements from affecting the line height in\n * all browsers.\n */\n\nsub,\nsup {\n\tfont-size: 75%;\n\tline-height: 0;\n\tposition: relative;\n\tvertical-align: baseline;\n}\n\nsub {\n\tbottom: -.25em;\n}\n\nsup {\n\ttop: -.5em;\n}\n\n/*\n * Remove the text shadow on text selections (opinionated).\n * 1. Restore the coloring undone by defining the text shadow (opinionated).\n */\n\n::-moz-selection {\n\tbackground-color: #b3d4fc; /* 1 */\n\tcolor: #000000; /* 1 */\n\ttext-shadow: none;\n}\n\n::selection {\n\tbackground-color: #b3d4fc; /* 1 */\n\tcolor: #000000; /* 1 */\n\ttext-shadow: none;\n}\n\n/* Embedded content (https://html.spec.whatwg.org/multipage/embedded-content.html#embedded-content)\n   ========================================================================== */\n\n/*\n * Change the alignment on media elements in all browers (opinionated).\n */\n\naudio,\ncanvas,\niframe,\nimg,\nsvg,\nvideo {\n\tvertical-align: middle;\n}\n\n/**\n * Add the correct display in IE 9-.\n */\n\naudio,\nvideo {\n\tdisplay: inline-block;\n}\n\n/**\n * Add the correct display in iOS 4-7.\n */\n\naudio:not([controls]) {\n\tdisplay: none;\n\theight: 0;\n}\n\n/**\n * Remove the border on images inside links in IE 10-.\n */\n\nimg {\n\tborder-style: none;\n}\n\n/**\n * Change the fill color to match the text color in all browsers (opinionated).\n */\n\nsvg {\n\tfill: currentColor;\n}\n\n/**\n * Hide the overflow in IE.\n */\n\nsvg:not(:root) {\n\toverflow: hidden;\n}\n\n/* Tabular data (https://html.spec.whatwg.org/multipage/tables.html#tables)\n   ========================================================================== */\n\n/**\n * Collapse border spacing\n */\n\ntable {\n\tborder-collapse: collapse;\n}\n\n/* Forms (https://html.spec.whatwg.org/multipage/forms.html#forms)\n   ========================================================================== */\n\n/**\n * Remove the margin in Firefox and Safari.\n */\n\nbutton,\ninput,\noptgroup,\nselect,\ntextarea {\n\tmargin: 0;\n}\n\n/**\n * Inherit styling in all browsers (opinionated).\n */\n\nbutton,\ninput,\nselect,\ntextarea {\n\tbackground-color: transparent;\n\tcolor: inherit;\n\tfont-size: inherit;\n\tline-height: inherit;\n}\n\n/**\n * Show the overflow in IE.\n * 1. Show the overflow in Edge.\n */\n\nbutton,\ninput { /* 1 */\n\toverflow: visible;\n}\n\n/**\n * Remove the inheritance of text transform in Edge, Firefox, and IE.\n * 1. Remove the inheritance of text transform in Firefox.\n */\n\nbutton,\nselect { /* 1 */\n\ttext-transform: none;\n}\n\n/**\n * 1. Prevent a WebKit bug where (2) destroys native `audio` and `video`\n *    controls in Android 4.\n * 2. Correct the inability to style clickable types in iOS and Safari.\n */\n\nbutton,\nhtml [type="button"], /* 1 */\n[type="reset"],\n[type="submit"] {\n\t-webkit-appearance: button; /* 2 */\n}\n\n/**\n * Remove the inner border and padding in Firefox.\n */\n\nbutton::-moz-focus-inner,\n[type="button"]::-moz-focus-inner,\n[type="reset"]::-moz-focus-inner,\n[type="submit"]::-moz-focus-inner {\n\tborder-style: none;\n\tpadding: 0;\n}\n\n/**\n * Restore the focus styles unset by the previous rule.\n */\n\nbutton:-moz-focusring,\n[type="button"]:-moz-focusring,\n[type="reset"]:-moz-focusring,\n[type="submit"]:-moz-focusring {\n\toutline: 1px dotted ButtonText;\n}\n\n/**\n * 1. Correct the text wrapping in Edge and IE.\n * 2. Correct the color inheritance from `fieldset` elements in IE.\n * 3. Remove the padding so developers are not caught out when they zero out\n *    `fieldset` elements in all browsers.\n */\n\nlegend {\n\tbox-sizing: border-box; /* 1 */\n\tcolor: inherit; /* 2 */\n\tdisplay: table; /* 1 */\n\tmax-width: 100%; /* 1 */\n\tpadding: 0; /* 3 */\n\twhite-space: normal; /* 1 */\n}\n\n/**\n * 1. Add the correct display in IE 9-.\n * 2. Add the correct vertical alignment in Chrome, Firefox, and Opera.\n */\n\nprogress {\n\tdisplay: inline-block; /* 1 */\n\tvertical-align: baseline; /* 2 */\n}\n\n/**\n * 1. Remove the default vertical scrollbar in IE.\n * 2. Change the resize direction on textareas in all browsers (opinionated).\n */\n\ntextarea {\n\toverflow: auto; /* 1 */\n\tresize: vertical; /* 2 */\n}\n\n/**\n * 1. Add the correct box sizing in IE 10-.\n * 2. Remove the padding in IE 10-.\n */\n\n[type="checkbox"],\n[type="radio"] {\n\tbox-sizing: border-box; /* 1 */\n\tpadding: 0; /* 2 */\n}\n\n/**\n * Correct the cursor style of increment and decrement buttons in Chrome.\n */\n\n[type="number"]::-webkit-inner-spin-button,\n[type="number"]::-webkit-outer-spin-button {\n\theight: auto;\n}\n\n/**\n * 1. Correct the odd appearance in Chrome and Safari.\n * 2. Correct the outline style in Safari.\n */\n\n[type="search"] {\n\t-webkit-appearance: textfield; /* 1 */\n\toutline-offset: -2px; /* 2 */\n}\n\n/**\n * Remove the inner padding and cancel buttons in Chrome and Safari on macOS.\n */\n\n[type="search"]::-webkit-search-cancel-button,\n[type="search"]::-webkit-search-decoration {\n\t-webkit-appearance: none;\n}\n\n/**\n * 1. Correct the inability to style clickable types in iOS and Safari.\n * 2. Change font properties to `inherit` in Safari.\n */\n\n::-webkit-file-upload-button {\n\t-webkit-appearance: button; /* 1 */\n\tfont: inherit; /* 2 */\n}\n\n/* Interactive elements (https://html.spec.whatwg.org/multipage/forms.html#interactive-elements)\n   ========================================================================== */\n\n/*\n * Add the correct display in IE 9-.\n * 1. Add the correct display in Edge, IE, and Firefox.\n */\n\ndetails, /* 1 */\nmenu {\n\tdisplay: block;\n}\n\n/*\n * Add the correct display in all browsers.\n */\n\nsummary {\n\tdisplay: list-item;\n}\n\n/* Scripting (https://html.spec.whatwg.org/multipage/scripting.html#scripting-3)\n   ========================================================================== */\n\n/**\n * Add the correct display in IE 9-.\n */\n\ncanvas {\n\tdisplay: inline-block;\n}\n\n/**\n * Add the correct display in IE.\n */\n\ntemplate {\n\tdisplay: none;\n}\n\n/* User interaction (https://html.spec.whatwg.org/multipage/interaction.html#editing)\n   ========================================================================== */\n\n/*\n * Remove the tapping delay on clickable elements (opinionated).\n * 1. Remove the tapping delay in IE 10.\n */\n\na,\narea,\nbutton,\ninput,\nlabel,\nselect,\nsummary,\ntextarea,\n[tabindex] {\n\t-ms-touch-action: manipulation; /* 1 */\n\ttouch-action: manipulation;\n}\n\n/**\n * Add the correct display in IE 10-.\n */\n\n[hidden] {\n\tdisplay: none;\n}\n\n/* ARIA (https://w3c.github.io/html-aria/)\n   ========================================================================== */\n\n/**\n * Change the cursor on busy elements (opinionated).\n */\n\n[aria-busy="true"] {\n\tcursor: progress;\n}\n\n/*\n * Change the cursor on control elements (opinionated).\n */\n\n[aria-controls] {\n\tcursor: pointer;\n}\n\n/*\n * Change the display on visually hidden accessible elements (opinionated).\n */\n\n[aria-hidden="false"][hidden]:not(:focus) {\n\tclip: rect(0, 0, 0, 0);\n\tdisplay: inherit;\n\tposition: absolute;\n}\n\n/*\n * Change the cursor on disabled, not-editable, or otherwise\n * inoperable elements (opinionated).\n */\n\n[aria-disabled] {\n\tcursor: default;\n}\n'],sourceRoot:""}])},function(n,e,t){(e=n.exports=t(0)(!0)).i(t(3),""),e.push([n.i,"@import url(https://fonts.googleapis.com/css?family=Prata);",""]),e.push([n.i,"html{font-size:62.5%}body{background-color:#242424;color:#fff;-webkit-font-smoothing:antialiased;font-smoothing:antialiased;font-family:Prata,serif;-webkit-text-size-adjust:100%;line-height:1.4;word-wrap:break-word}.container{position:relative;height:100vh;color:#fff}.title{display:flex;justify-content:center;align-items:center;margin:0;height:100%;font-size:3rem}@media screen and (min-width:737px){.title{font-size:7rem}}@media screen and (min-width:769px){.title{font-size:10rem}}.list{position:absolute;right:0;bottom:.5rem;left:0;display:flex;justify-content:space-between;margin:auto;padding:2rem;width:100%;max-width:375px}@media screen and (min-width:737px){.list{max-width:500px;bottom:20px}}.item{list-style:none;font-size:1.2rem}@media screen and (min-width:737px){.item{font-size:1.6rem}}.item a{color:#fff}.item a:hover{text-decoration:none}","",{version:3,sources:["/Users/otsuka/Desktop/_mydata/otsukayuhi_app/src/_scss/_base.scss","/Users/otsuka/Desktop/_mydata/otsukayuhi_app/src/_scss/_settings.scss","/Users/otsuka/Desktop/_mydata/otsukayuhi_app/src/_scss/_style.scss","/Users/otsuka/Desktop/_mydata/otsukayuhi_app/src/_scss/_mixin.scss"],names:[],mappings:"AAEA,KACE,eCGe,CDFhB,AAED,KACE,yBCNsB,ADOtB,WCNqB,ADOrB,mCCL0B,ADM1B,2BCN0B,ADO1B,wBCN0B,ADO1B,8BAA8B,AAC9B,gBCNe,ADOf,oBAAqB,CACtB,AEfD,WACE,kBAAkB,AAClB,aAAa,AACb,UAAW,CACZ,AAGD,OACE,aAAa,AACb,uBAAuB,AACvB,mBAAmB,AACnB,SAAS,AACT,YAAY,AACZ,cAAe,CAOhB,AChBC,oCDGF,OAQI,cAAe,CAKlB,CAAA,ACXC,oCDFF,OAWI,eAAgB,CAEnB,CAAA,AAGD,MACE,kBAAkB,AAClB,QAAQ,AACR,aAAc,AACd,OAAO,AACP,aAAa,AACb,8BAA8B,AAC9B,YAAY,AACZ,aAAa,AACb,WAAW,AACX,eAAgB,CAKjB,AClCC,oCDmBF,MAYI,gBAAgB,AAChB,WAAY,CAEf,CAAA,AACD,MACE,gBAAgB,AAChB,gBAAiB,CAUlB,AC/CC,oCDmCF,MAII,gBAAiB,CAQpB,CAAA,AAZD,QAOI,UAAW,CAIZ,AAXH,cASM,oBAAqB,CACtB",file:"main.scss",sourcesContent:["@import url('https://fonts.googleapis.com/css?family=Prata');\r\n\r\nhtml {\r\n  font-size: $font-size;\r\n}\r\n\r\nbody {\r\n  background-color: $color-bg-black;\r\n  color: $color-font-white;\r\n  -webkit-font-smoothing: $font-smoothing;\r\n  font-smoothing: $font-smoothing;\r\n  font-family: $font-family;\r\n  -webkit-text-size-adjust: 100%;\r\n  line-height: $line-height;\r\n  word-wrap: break-word;\r\n}\r\n","// settings\r\n$color-bg-black: #242424;\r\n$color-font-white: #fff;\r\n\r\n$font-smoothing: antialiased; //antialiased, subpixel-antialiased, none\r\n$font-family: 'Prata', serif;\r\n$font-size: 62.5%;\r\n$line-height: 1.4;\r\n\r\n$bp-md: 737px;\r\n$bp-lg: 769px;",".container {\n  position: relative;\n  height: 100vh;\n  color: #fff;\n}\n\n// tile\n.title {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  margin: 0;\n  height: 100%;\n  font-size: 3rem;\n  @include min-md {\n    font-size: 7rem;\n  }\n  @include min-lg {\n    font-size: 10rem;\n  }\n}\n\n// links\n.list {\n  position: absolute;\n  right: 0;\n  bottom: 0.5rem;\n  left: 0;\n  display: flex;\n  justify-content: space-between;\n  margin: auto;\n  padding: 2rem;\n  width: 100%;\n  max-width: 375px;\n  @include min-md {\n    max-width: 500px;\n    bottom: 20px;\n  }\n}\n.item {\n  list-style: none;\n  font-size: 1.2rem;\n  @include min-md {\n    font-size: 1.6rem;\n  }\n  a {\n    color: #fff;\n    &:hover {\n      text-decoration: none;\n    }\n  }\n}\n","// mixin\r\n\r\n// media query\r\n@mixin min-md {\r\n  @media screen and (min-width: $bp-md) {\r\n    @content;\r\n  }\r\n}\r\n@mixin min-lg {\r\n  @media screen and (min-width: $bp-lg) {\r\n    @content;\r\n  }\r\n}\r\n"],sourceRoot:""}])},function(n,e,t){var o=t(4);"string"==typeof o&&(o=[[n.i,o,""]]);var i={hmr:!0,transform:void 0,insertInto:void 0};t(2)(o,i);o.locals&&(n.exports=o.locals)},function(n,e,t){"use strict";t.r(e);t(5)}]);
//# sourceMappingURL=main.js.map