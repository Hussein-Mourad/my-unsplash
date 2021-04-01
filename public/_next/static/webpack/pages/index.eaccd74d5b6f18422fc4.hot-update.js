webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Input.jsx":
/*!******************************!*\
  !*** ./components/Input.jsx ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Input; });\n/* harmony import */ var _mnt_d_vscode_webdev_challenges_Fullstack_my_unsplash_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mnt_d_vscode_webdev_challenges_Fullstack_my_unsplash_client_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\nvar _jsxFileName = \"/mnt/d/vscode/webdev-challenges/Fullstack/my-unsplash/client/components/Input.jsx\";\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_mnt_d_vscode_webdev_challenges_Fullstack_my_unsplash_client_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\nfunction Input(_ref) {\n  var type = _ref.type,\n      className = _ref.className,\n      placeholder = _ref.placeholder,\n      border = _ref.border,\n      onChange = _ref.onChange,\n      value = _ref.value,\n      props = Object(_mnt_d_vscode_webdev_challenges_Fullstack_my_unsplash_client_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_ref, [\"type\", \"className\", \"placeholder\", \"border\", \"onChange\", \"value\"]);\n\n  if (border) {\n    border = \"border\";\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__[\"jsxDEV\"])(\"input\", _objectSpread({\n    type: type,\n    className: border + \" \" + \"px-3 py-2 rounded-lg border-gray-300 text-gray-800 hover:border-gray-00 \" + \" \" + className,\n    placeholder: placeholder,\n    value: value,\n    onChange: onChange\n  }, props), void 0, false, {\n    fileName: _jsxFileName,\n    lineNumber: 15,\n    columnNumber: 9\n  }, this);\n}\n_c = Input;\n\nvar _c;\n\n$RefreshReg$(_c, \"Input\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dC5qc3g/ZTgwMCJdLCJuYW1lcyI6WyJJbnB1dCIsInR5cGUiLCJjbGFzc05hbWUiLCJwbGFjZWhvbGRlciIsImJvcmRlciIsIm9uQ2hhbmdlIiwidmFsdWUiLCJwcm9wcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNlLFNBQVNBLEtBQVQsT0FRWjtBQUFBLE1BUENDLElBT0QsUUFQQ0EsSUFPRDtBQUFBLE1BTkNDLFNBTUQsUUFOQ0EsU0FNRDtBQUFBLE1BTENDLFdBS0QsUUFMQ0EsV0FLRDtBQUFBLE1BSkNDLE1BSUQsUUFKQ0EsTUFJRDtBQUFBLE1BSENDLFFBR0QsUUFIQ0EsUUFHRDtBQUFBLE1BRkNDLEtBRUQsUUFGQ0EsS0FFRDtBQUFBLE1BRElDLEtBQ0o7O0FBQ0MsTUFBSUgsTUFBSixFQUFZO0FBQ1JBLFVBQU0sR0FBRyxRQUFUO0FBQ0g7O0FBQ0Qsc0JBQ0k7QUFDSSxRQUFJLEVBQUVILElBRFY7QUFFSSxhQUFTLEVBQ0xHLE1BQU0sR0FBRSxHQUFSLEdBQ0EsMEVBREEsR0FDNkUsR0FEN0UsR0FFQUYsU0FMUjtBQU9JLGVBQVcsRUFBRUMsV0FQakI7QUFRSSxTQUFLLEVBQUVHLEtBUlg7QUFTSSxZQUFRLEVBQUVEO0FBVGQsS0FVUUUsS0FWUjtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFjSDtLQTFCdUJQLEsiLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0LmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBJbnB1dCh7XG4gICAgdHlwZSxcbiAgICBjbGFzc05hbWUsXG4gICAgcGxhY2Vob2xkZXIsXG4gICAgYm9yZGVyLFxuICAgIG9uQ2hhbmdlLFxuICAgIHZhbHVlLFxuICAgIC4uLnByb3BzXG59KSB7XG4gICAgaWYgKGJvcmRlcikge1xuICAgICAgICBib3JkZXIgPSBcImJvcmRlclwiO1xuICAgIH1cbiAgICByZXR1cm4gKFxuICAgICAgICA8aW5wdXRcbiAgICAgICAgICAgIHR5cGU9e3R5cGV9XG4gICAgICAgICAgICBjbGFzc05hbWU9e1xuICAgICAgICAgICAgICAgIGJvcmRlciArXCIgXCIrXG4gICAgICAgICAgICAgICAgXCJweC0zIHB5LTIgcm91bmRlZC1sZyBib3JkZXItZ3JheS0zMDAgdGV4dC1ncmF5LTgwMCBob3Zlcjpib3JkZXItZ3JheS0wMCBcIiArIFwiIFwiK1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9e3BsYWNlaG9sZGVyfVxuICAgICAgICAgICAgdmFsdWU9e3ZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e29uQ2hhbmdlfVxuICAgICAgICAgICAgey4uLnByb3BzfVxuICAgICAgICAvPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Input.jsx\n");

/***/ })

})