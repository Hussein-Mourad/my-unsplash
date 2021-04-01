webpackHotUpdate_N_E("pages/index",{

/***/ "./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./components/Button.jsx\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar */ \"./components/SearchBar.jsx\");\n\n\nvar _jsxFileName = \"/mnt/d/vscode/webdev-challenges/Fullstack/my-unsplash/client/components/NavBar.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction NavBar(_ref) {\n  _s();\n\n  var className = _ref.className,\n      onBtnClick = _ref.onBtnClick,\n      filterByTerm = _ref.filterByTerm;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isMenuOpen = _useState[0],\n      setIsMenuOpen = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: className,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: \"px-2 sm:px-5 py-4 flex justify-between \",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/my_unsplash_logo.svg\",\n          alt: \"logo\",\n          lazy: \"true\",\n          className: \"cursor-pointer\",\n          onClick: function onClick() {\n            filterByTerm(\"\");\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"hidden sm:block\",\n        color: \"primary\",\n        onClick: onBtnClick,\n        children: \"Add a photo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"sm:hidden\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"w-7 focus:outline-none\",\n          onClick: function onClick() {\n            setIsMenuOpen(function (isMenuOpen) {\n              return !isMenuOpen;\n            });\n          },\n          children: !isMenuOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"w-7 cursor-pointer\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            fill: \"none\",\n            viewBox: \"0 0 24 24\",\n            stroke: \"currentColor\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              strokeWidth: 2,\n              d: \"M4 6h16M4 12h16M4 18h16\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"w-7 cursor-pointer\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            fill: \"none\",\n            viewBox: \"0 0 24 24\",\n            stroke: \"currentColor\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              strokeWidth: 2,\n              d: \"M6 18L18 6M6 6l12 12\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), isMenuOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: \"sm:hidden shadow-md px-2 py-5 w-full\",\n      children: [\"Ser\", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-end\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          className: \"block my-5 \",\n          color: \"primary\",\n          onClick: onBtnClick,\n          children: \"Add a photo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 79,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 78,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n\n_s(NavBar, \"vK10R+uCyHfZ4DZVnxbYkMWJB8g=\");\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanN4PzMzNjYiXSwibmFtZXMiOlsiTmF2QmFyIiwiY2xhc3NOYW1lIiwib25CdG5DbGljayIsImZpbHRlckJ5VGVybSIsInVzZVN0YXRlIiwiaXNNZW51T3BlbiIsInNldElzTWVudU9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQXlEO0FBQUE7O0FBQUEsTUFBdkNDLFNBQXVDLFFBQXZDQSxTQUF1QztBQUFBLE1BQTVCQyxVQUE0QixRQUE1QkEsVUFBNEI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCOztBQUFBLGtCQUNsQ0Msc0RBQVEsQ0FBQyxLQUFELENBRDBCO0FBQUEsTUFDL0RDLFVBRCtEO0FBQUEsTUFDbkRDLGFBRG1EOztBQUd0RSxzQkFDRTtBQUFRLGFBQVMsRUFBRUwsU0FBbkI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyx5Q0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0U7QUFDRSxhQUFHLEVBQUMsdUJBRE47QUFFRSxhQUFHLEVBQUMsTUFGTjtBQUdFLGNBQUksRUFBQyxNQUhQO0FBSUUsbUJBQVMsRUFBQyxnQkFKWjtBQUtFLGlCQUFPLEVBQUUsbUJBQU07QUFDYkUsd0JBQVksQ0FBQyxFQUFELENBQVo7QUFDRDtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFhSSxxRUFBQyxrREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBYkosZUFjRSxxRUFBQywrQ0FBRDtBQUNFLGlCQUFTLEVBQUMsaUJBRFo7QUFFRSxhQUFLLEVBQUMsU0FGUjtBQUdFLGVBQU8sRUFBRUQsVUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWRGLGVBcUJFO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0U7QUFDRSxtQkFBUyxFQUFDLHdCQURaO0FBRUUsaUJBQU8sRUFBRSxtQkFBTTtBQUNiSSx5QkFBYSxDQUFDLFVBQUNELFVBQUQsRUFBZ0I7QUFDNUIscUJBQU8sQ0FBQ0EsVUFBUjtBQUNELGFBRlksQ0FBYjtBQUdELFdBTkg7QUFBQSxvQkFRRyxDQUFDQSxVQUFELGdCQUNDO0FBQ0UscUJBQVMsRUFBQyxvQkFEWjtBQUVFLGlCQUFLLEVBQUMsNEJBRlI7QUFHRSxnQkFBSSxFQUFDLE1BSFA7QUFJRSxtQkFBTyxFQUFDLFdBSlY7QUFLRSxrQkFBTSxFQUFDLGNBTFQ7QUFBQSxtQ0FPRTtBQUNFLDJCQUFhLEVBQUMsT0FEaEI7QUFFRSw0QkFBYyxFQUFDLE9BRmpCO0FBR0UseUJBQVcsRUFBRSxDQUhmO0FBSUUsZUFBQyxFQUFDO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUEsa0JBREQsZ0JBZ0JDO0FBQ0UscUJBQVMsRUFBQyxvQkFEWjtBQUVFLGlCQUFLLEVBQUMsNEJBRlI7QUFHRSxnQkFBSSxFQUFDLE1BSFA7QUFJRSxtQkFBTyxFQUFDLFdBSlY7QUFLRSxrQkFBTSxFQUFDLGNBTFQ7QUFBQSxtQ0FPRTtBQUNFLDJCQUFhLEVBQUMsT0FEaEI7QUFFRSw0QkFBYyxFQUFDLE9BRmpCO0FBR0UseUJBQVcsRUFBRSxDQUhmO0FBSUUsZUFBQyxFQUFDO0FBSko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUF4Qko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREYsRUFpRUdBLFVBQVUsaUJBQ1Q7QUFBSyxlQUFTLEVBQUMsc0NBQWY7QUFBQSxxQ0FHRTtBQUFLLGlCQUFTLEVBQUMsa0JBQWY7QUFBQSwrQkFDRSxxRUFBQywrQ0FBRDtBQUNFLG1CQUFTLEVBQUMsYUFEWjtBQUVFLGVBQUssRUFBQyxTQUZSO0FBR0UsaUJBQU8sRUFBRUgsVUFIWDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FIRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFsRUo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREY7QUFtRkQ7O0dBdEZ1QkYsTTs7S0FBQUEsTSIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2QmFyLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgQnV0dG9uIGZyb20gXCIuL0J1dHRvblwiO1xuaW1wb3J0IFNlYXJjaEJhciBmcm9tIFwiLi9TZWFyY2hCYXJcIlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXZCYXIoeyBjbGFzc05hbWUsIG9uQnRuQ2xpY2ssIGZpbHRlckJ5VGVybSB9KSB7XG4gIGNvbnN0IFtpc01lbnVPcGVuLCBzZXRJc01lbnVPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcblxuICByZXR1cm4gKFxuICAgIDxoZWFkZXIgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlxuICAgICAgPG5hdiBjbGFzc05hbWU9XCJweC0yIHNtOnB4LTUgcHktNCBmbGV4IGp1c3RpZnktYmV0d2VlbiBcIj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4XCI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPVwiL215X3Vuc3BsYXNoX2xvZ28uc3ZnXCJcbiAgICAgICAgICAgIGFsdD1cImxvZ29cIlxuICAgICAgICAgICAgbGF6eT1cInRydWVcIlxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXJcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBmaWx0ZXJCeVRlcm0oXCJcIik7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIFxuICAgICAgICAgIDxTZWFyY2hCYXIvPlxuICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgY2xhc3NOYW1lPVwiaGlkZGVuIHNtOmJsb2NrXCJcbiAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2t9XG4gICAgICAgID5cbiAgICAgICAgICBBZGQgYSBwaG90b1xuICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbTpoaWRkZW5cIj5cbiAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ3LTcgZm9jdXM6b3V0bGluZS1ub25lXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgc2V0SXNNZW51T3BlbigoaXNNZW51T3BlbikgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAhaXNNZW51T3BlbjtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHshaXNNZW51T3BlbiA/IChcbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNyBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICBkPVwiTTQgNmgxNk00IDEyaDE2TTQgMThoMTZcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPHN2Z1xuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNyBjdXJzb3ItcG9pbnRlclwiXG4gICAgICAgICAgICAgICAgeG1sbnM9XCJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2Z1wiXG4gICAgICAgICAgICAgICAgZmlsbD1cIm5vbmVcIlxuICAgICAgICAgICAgICAgIHZpZXdCb3g9XCIwIDAgMjQgMjRcIlxuICAgICAgICAgICAgICAgIHN0cm9rZT1cImN1cnJlbnRDb2xvclwiXG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICA8cGF0aFxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWNhcD1cInJvdW5kXCJcbiAgICAgICAgICAgICAgICAgIHN0cm9rZUxpbmVqb2luPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlV2lkdGg9ezJ9XG4gICAgICAgICAgICAgICAgICBkPVwiTTYgMThMMTggNk02IDZsMTIgMTJcIlxuICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgIDwvc3ZnPlxuICAgICAgICAgICAgKX1cbiAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L25hdj5cbiAgICAgIHtpc01lbnVPcGVuICYmIChcbiAgICAgICAgPG5hdiBjbGFzc05hbWU9XCJzbTpoaWRkZW4gc2hhZG93LW1kIHB4LTIgcHktNSB3LWZ1bGxcIj5cbiAgICAgICAgXG4gICAgICAgIFNlclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBqdXN0aWZ5LWVuZFwiPlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJibG9jayBteS01IFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgICAgIG9uQ2xpY2s9e29uQnRuQ2xpY2t9XG4gICAgICAgICAgICA+XG4gICAgICAgICAgICAgIEFkZCBhIHBob3RvXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9uYXY+XG4gICAgICApfVxuICAgIDwvaGVhZGVyPlxuICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/NavBar.jsx\n");

/***/ })

})