/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is not neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("var __dirname = \"src\";\n__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! koa */ \"koa\");\n/* harmony import */ var koa__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(koa__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! koa-router */ \"koa-router\");\n/* harmony import */ var koa_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(koa_router__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! koa-helmet */ \"koa-helmet\");\n/* harmony import */ var koa_helmet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(koa_helmet__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! koa-static */ \"koa-static\");\n/* harmony import */ var koa_static__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(koa_static__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! koa-body */ \"koa-body\");\n/* harmony import */ var koa_body__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(koa_body__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @koa/cors */ \"@koa/cors\");\n/* harmony import */ var _koa_cors__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_koa_cors__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! path */ \"path\");\n/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_6__);\n\n\n\n\n\n\n\nconst app = new (koa__WEBPACK_IMPORTED_MODULE_0___default())();\nconst router = new (koa_router__WEBPACK_IMPORTED_MODULE_1___default())(); // 静态资源目录对于相对入口文件index.js的路径\n\nconst staticPath = '.';\nrouter.get('/', async ctx => {\n  console.log(ctx.url);\n  ctx.body = path__WEBPACK_IMPORTED_MODULE_6___default().join(__dirname, staticPath);\n});\napp.use(koa_helmet__WEBPACK_IMPORTED_MODULE_2___default()()); // 做一些安全相关的东西\n\napp.use(koa_static__WEBPACK_IMPORTED_MODULE_3___default()(path__WEBPACK_IMPORTED_MODULE_6___default().join(__dirname, staticPath)));\napp.use(_koa_cors__WEBPACK_IMPORTED_MODULE_5___default()());\napp.use(koa_body__WEBPACK_IMPORTED_MODULE_4___default()());\napp.use(router.routes()).use(router.allowedMethods());\napp.listen(3000);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8yNEtvYS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sIm5hbWVzIjpbImFwcCIsIktvYSIsInJvdXRlciIsIlJvdXRlciIsInN0YXRpY1BhdGgiLCJnZXQiLCJjdHgiLCJjb25zb2xlIiwibG9nIiwidXJsIiwiYm9keSIsInBhdGgiLCJfX2Rpcm5hbWUiLCJ1c2UiLCJoZWxtZXQiLCJrb2FTdGF0aWMiLCJjb3JzIiwia29hQm9keSIsInJvdXRlcyIsImFsbG93ZWRNZXRob2RzIiwibGlzdGVuIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFFQSxNQUFNQSxHQUFHLEdBQUcsSUFBSUMsNENBQUosRUFBWjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxJQUFJQyxtREFBSixFQUFmLEMsQ0FFQTs7QUFDQSxNQUFNQyxVQUFVLEdBQUcsR0FBbkI7QUFDQUYsTUFBTSxDQUFDRyxHQUFQLENBQVcsR0FBWCxFQUFnQixNQUFPQyxHQUFQLElBQWU7QUFDN0JDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFHLENBQUNHLEdBQWhCO0FBQ0FILEtBQUcsQ0FBQ0ksSUFBSixHQUFXQyxnREFBQSxDQUFVQyxTQUFWLEVBQXFCUixVQUFyQixDQUFYO0FBQ0QsQ0FIRDtBQUtBSixHQUFHLENBQUNhLEdBQUosQ0FBUUMsaURBQU0sRUFBZCxFLENBQW1COztBQUNuQmQsR0FBRyxDQUFDYSxHQUFKLENBQVFFLGlEQUFTLENBQUNKLGdEQUFBLENBQVVDLFNBQVYsRUFBcUJSLFVBQXJCLENBQUQsQ0FBakI7QUFDQUosR0FBRyxDQUFDYSxHQUFKLENBQVFHLGdEQUFJLEVBQVo7QUFDQWhCLEdBQUcsQ0FBQ2EsR0FBSixDQUFRSSwrQ0FBTyxFQUFmO0FBQ0FqQixHQUFHLENBQUNhLEdBQUosQ0FBUVgsTUFBTSxDQUFDZ0IsTUFBUCxFQUFSLEVBQXlCTCxHQUF6QixDQUE2QlgsTUFBTSxDQUFDaUIsY0FBUCxFQUE3QjtBQUVBbkIsR0FBRyxDQUFDb0IsTUFBSixDQUFXLElBQVgiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgS29hIGZyb20gJ2tvYSc7XG5pbXBvcnQgUm91dGVyIGZyb20gJ2tvYS1yb3V0ZXInO1xuaW1wb3J0IGhlbG1ldCBmcm9tICdrb2EtaGVsbWV0JztcbmltcG9ydCBrb2FTdGF0aWMgZnJvbSAna29hLXN0YXRpYyc7XG5cbmltcG9ydCBrb2FCb2R5IGZyb20gJ2tvYS1ib2R5JztcblxuaW1wb3J0IGNvcnMgZnJvbSAnQGtvYS9jb3JzJztcblxuaW1wb3J0IHBhdGggZnJvbSAncGF0aCc7XG5cbmNvbnN0IGFwcCA9IG5ldyBLb2EoKTtcbmNvbnN0IHJvdXRlciA9IG5ldyBSb3V0ZXIoKTtcblxuLy8g6Z2Z5oCB6LWE5rqQ55uu5b2V5a+55LqO55u45a+55YWl5Y+j5paH5Lu2aW5kZXguanPnmoTot6/lvoRcbmNvbnN0IHN0YXRpY1BhdGggPSAnLic7XG5yb3V0ZXIuZ2V0KCcvJywgYXN5bmMgKGN0eCkgPT4ge1xuICBjb25zb2xlLmxvZyhjdHgudXJsKTtcbiAgY3R4LmJvZHkgPSBwYXRoLmpvaW4oX19kaXJuYW1lLCBzdGF0aWNQYXRoKTtcbn0pO1xuXG5hcHAudXNlKGhlbG1ldCgpKTsgLy8g5YGa5LiA5Lqb5a6J5YWo55u45YWz55qE5Lic6KW/XG5hcHAudXNlKGtvYVN0YXRpYyhwYXRoLmpvaW4oX19kaXJuYW1lLCBzdGF0aWNQYXRoKSkpO1xuYXBwLnVzZShjb3JzKCkpO1xuYXBwLnVzZShrb2FCb2R5KCkpO1xuYXBwLnVzZShyb3V0ZXIucm91dGVzKCkpLnVzZShyb3V0ZXIuYWxsb3dlZE1ldGhvZHMoKSk7XG5cbmFwcC5saXN0ZW4oMzAwMCk7XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "@koa/cors":
/*!****************************!*\
  !*** external "@koa/cors" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("@koa/cors");;

/***/ }),

/***/ "koa":
/*!**********************!*\
  !*** external "koa" ***!
  \**********************/
/***/ ((module) => {

module.exports = require("koa");;

/***/ }),

/***/ "koa-body":
/*!***************************!*\
  !*** external "koa-body" ***!
  \***************************/
/***/ ((module) => {

module.exports = require("koa-body");;

/***/ }),

/***/ "koa-helmet":
/*!*****************************!*\
  !*** external "koa-helmet" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-helmet");;

/***/ }),

/***/ "koa-router":
/*!*****************************!*\
  !*** external "koa-router" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-router");;

/***/ }),

/***/ "koa-static":
/*!*****************************!*\
  !*** external "koa-static" ***!
  \*****************************/
/***/ ((module) => {

module.exports = require("koa-static");;

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/***/ ((module) => {

module.exports = require("path");;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => module['default'] :
/******/ 				() => module;
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// startup
/******/ 	// Load entry module
/******/ 	__webpack_require__("./src/index.js");
/******/ 	// This entry module used 'exports' so it can't be inlined
/******/ })()
;