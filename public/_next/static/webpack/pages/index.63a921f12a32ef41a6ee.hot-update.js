webpackHotUpdate_N_E("pages/index",{

/***/ "./components/NavBar.jsx":
/*!*******************************!*\
  !*** ./components/NavBar.jsx ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return NavBar; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Button */ \"./components/Button.jsx\");\n/* harmony import */ var _SearchBar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SearchBar */ \"./components/SearchBar.jsx\");\n\n\nvar _jsxFileName = \"/mnt/d/vscode/webdev-challenges/Fullstack/my-unsplash/client/components/NavBar.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\nfunction NavBar(_ref) {\n  _s();\n\n  var className = _ref.className,\n      onBtnClick = _ref.onBtnClick,\n      filterByTerm = _ref.filterByTerm;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__[\"useState\"])(false),\n      isMenuOpen = _useState[0],\n      setIsMenuOpen = _useState[1];\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"header\", {\n    className: className,\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: \"px-2 sm:px-5 py-4 flex justify-between \",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"img\", {\n          src: \"/my_unsplash_logo.svg\",\n          alt: \"logo\",\n          lazy: \"true\",\n          className: \"cursor-pointer\",\n          onClick: function onClick() {\n            filterByTerm(\"\");\n          }\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 12,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 11,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n        className: \"hidden sm:inline-flex \"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 23,\n        columnNumber: 11\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"hidden sm:block\",\n        color: \"primary\",\n        onClick: onBtnClick,\n        children: \"Add a photo\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 24,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"sm:hidden\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"button\", {\n          className: \"w-7 focus:outline-none\",\n          onClick: function onClick() {\n            setIsMenuOpen(function (isMenuOpen) {\n              return !isMenuOpen;\n            });\n          },\n          children: !isMenuOpen ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"w-7 cursor-pointer\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            fill: \"none\",\n            viewBox: \"0 0 24 24\",\n            stroke: \"currentColor\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              strokeWidth: 2,\n              d: \"M4 6h16M4 12h16M4 18h16\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 48,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 41,\n            columnNumber: 15\n          }, this) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"svg\", {\n            className: \"w-7 cursor-pointer\",\n            xmlns: \"http://www.w3.org/2000/svg\",\n            fill: \"none\",\n            viewBox: \"0 0 24 24\",\n            stroke: \"currentColor\",\n            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"path\", {\n              strokeLinecap: \"round\",\n              strokeLinejoin: \"round\",\n              strokeWidth: 2,\n              d: \"M6 18L18 6M6 6l12 12\"\n            }, void 0, false, {\n              fileName: _jsxFileName,\n              lineNumber: 63,\n              columnNumber: 17\n            }, this)\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 56,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 32,\n          columnNumber: 11\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 31,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 10,\n      columnNumber: 7\n    }, this), isMenuOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"nav\", {\n      className: \"sm:hidden shadow-md px-2 py-5 w-full\",\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_SearchBar__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 76,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"flex justify-end\",\n        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_Button__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n          className: \"block my-5 \",\n          color: \"primary\",\n          onClick: onBtnClick,\n          children: \"Add a photo\"\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 78,\n          columnNumber: 13\n        }, this)\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 77,\n        columnNumber: 11\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 75,\n      columnNumber: 9\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 9,\n    columnNumber: 5\n  }, this);\n}\n\n_s(NavBar, \"vK10R+uCyHfZ4DZVnxbYkMWJB8g=\");\n\n_c = NavBar;\n\nvar _c;\n\n$RefreshReg$(_c, \"NavBar\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXZCYXIuanN4PzMzNjYiXSwibmFtZXMiOlsiTmF2QmFyIiwiY2xhc3NOYW1lIiwib25CdG5DbGljayIsImZpbHRlckJ5VGVybSIsInVzZVN0YXRlIiwiaXNNZW51T3BlbiIsInNldElzTWVudU9wZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxNQUFULE9BQXlEO0FBQUE7O0FBQUEsTUFBdkNDLFNBQXVDLFFBQXZDQSxTQUF1QztBQUFBLE1BQTVCQyxVQUE0QixRQUE1QkEsVUFBNEI7QUFBQSxNQUFoQkMsWUFBZ0IsUUFBaEJBLFlBQWdCOztBQUFBLGtCQUNsQ0Msc0RBQVEsQ0FBQyxLQUFELENBRDBCO0FBQUEsTUFDL0RDLFVBRCtEO0FBQUEsTUFDbkRDLGFBRG1EOztBQUd0RSxzQkFDRTtBQUFRLGFBQVMsRUFBRUwsU0FBbkI7QUFBQSw0QkFDRTtBQUFLLGVBQVMsRUFBQyx5Q0FBZjtBQUFBLDhCQUNFO0FBQUssaUJBQVMsRUFBQyxNQUFmO0FBQUEsK0JBQ0U7QUFDRSxhQUFHLEVBQUMsdUJBRE47QUFFRSxhQUFHLEVBQUMsTUFGTjtBQUdFLGNBQUksRUFBQyxNQUhQO0FBSUUsbUJBQVMsRUFBQyxnQkFKWjtBQUtFLGlCQUFPLEVBQUUsbUJBQU07QUFDYkUsd0JBQVksQ0FBQyxFQUFELENBQVo7QUFDRDtBQVBIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBREYsZUFhSSxxRUFBQyxrREFBRDtBQUFXLGlCQUFTLEVBQUM7QUFBckI7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQWJKLGVBY0UscUVBQUMsK0NBQUQ7QUFDRSxpQkFBUyxFQUFDLGlCQURaO0FBRUUsYUFBSyxFQUFDLFNBRlI7QUFHRSxlQUFPLEVBQUVELFVBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FkRixlQXFCRTtBQUFLLGlCQUFTLEVBQUMsV0FBZjtBQUFBLCtCQUNFO0FBQ0UsbUJBQVMsRUFBQyx3QkFEWjtBQUVFLGlCQUFPLEVBQUUsbUJBQU07QUFDYkkseUJBQWEsQ0FBQyxVQUFDRCxVQUFELEVBQWdCO0FBQzVCLHFCQUFPLENBQUNBLFVBQVI7QUFDRCxhQUZZLENBQWI7QUFHRCxXQU5IO0FBQUEsb0JBUUcsQ0FBQ0EsVUFBRCxnQkFDQztBQUNFLHFCQUFTLEVBQUMsb0JBRFo7QUFFRSxpQkFBSyxFQUFDLDRCQUZSO0FBR0UsZ0JBQUksRUFBQyxNQUhQO0FBSUUsbUJBQU8sRUFBQyxXQUpWO0FBS0Usa0JBQU0sRUFBQyxjQUxUO0FBQUEsbUNBT0U7QUFDRSwyQkFBYSxFQUFDLE9BRGhCO0FBRUUsNEJBQWMsRUFBQyxPQUZqQjtBQUdFLHlCQUFXLEVBQUUsQ0FIZjtBQUlFLGVBQUMsRUFBQztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBLGtCQURELGdCQWdCQztBQUNFLHFCQUFTLEVBQUMsb0JBRFo7QUFFRSxpQkFBSyxFQUFDLDRCQUZSO0FBR0UsZ0JBQUksRUFBQyxNQUhQO0FBSUUsbUJBQU8sRUFBQyxXQUpWO0FBS0Usa0JBQU0sRUFBQyxjQUxUO0FBQUEsbUNBT0U7QUFDRSwyQkFBYSxFQUFDLE9BRGhCO0FBRUUsNEJBQWMsRUFBQyxPQUZqQjtBQUdFLHlCQUFXLEVBQUUsQ0FIZjtBQUlFLGVBQUMsRUFBQztBQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFQRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBeEJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQURGLEVBaUVHQSxVQUFVLGlCQUNUO0FBQUssZUFBUyxFQUFDLHNDQUFmO0FBQUEsOEJBQ0EscUVBQUMsa0RBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQURBLGVBRUU7QUFBSyxpQkFBUyxFQUFDLGtCQUFmO0FBQUEsK0JBQ0UscUVBQUMsK0NBQUQ7QUFDRSxtQkFBUyxFQUFDLGFBRFo7QUFFRSxlQUFLLEVBQUMsU0FGUjtBQUdFLGlCQUFPLEVBQUVILFVBSFg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGNBRkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBbEVKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxVQURGO0FBa0ZEOztHQXJGdUJGLE07O0tBQUFBLE0iLCJmaWxlIjoiLi9jb21wb25lbnRzL05hdkJhci5qc3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEJ1dHRvbiBmcm9tIFwiLi9CdXR0b25cIjtcbmltcG9ydCBTZWFyY2hCYXIgZnJvbSBcIi4vU2VhcmNoQmFyXCJcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2QmFyKHsgY2xhc3NOYW1lLCBvbkJ0bkNsaWNrLCBmaWx0ZXJCeVRlcm0gfSkge1xuICBjb25zdCBbaXNNZW51T3Blbiwgc2V0SXNNZW51T3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8aGVhZGVyIGNsYXNzTmFtZT17Y2xhc3NOYW1lfT5cbiAgICAgIDxuYXYgY2xhc3NOYW1lPVwicHgtMiBzbTpweC01IHB5LTQgZmxleCBqdXN0aWZ5LWJldHdlZW4gXCI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleFwiPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz1cIi9teV91bnNwbGFzaF9sb2dvLnN2Z1wiXG4gICAgICAgICAgICBhbHQ9XCJsb2dvXCJcbiAgICAgICAgICAgIGxhenk9XCJ0cnVlXCJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgZmlsdGVyQnlUZXJtKFwiXCIpO1xuICAgICAgICAgICAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICBcbiAgICAgICAgICA8U2VhcmNoQmFyIGNsYXNzTmFtZT1cImhpZGRlbiBzbTppbmxpbmUtZmxleCBcIi8+XG4gICAgICAgIDxCdXR0b25cbiAgICAgICAgICBjbGFzc05hbWU9XCJoaWRkZW4gc206YmxvY2tcIlxuICAgICAgICAgIGNvbG9yPVwicHJpbWFyeVwiXG4gICAgICAgICAgb25DbGljaz17b25CdG5DbGlja31cbiAgICAgICAgPlxuICAgICAgICAgIEFkZCBhIHBob3RvXG4gICAgICAgIDwvQnV0dG9uPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNtOmhpZGRlblwiPlxuICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInctNyBmb2N1czpvdXRsaW5lLW5vbmVcIlxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4ge1xuICAgICAgICAgICAgICBzZXRJc01lbnVPcGVuKChpc01lbnVPcGVuKSA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICFpc01lbnVPcGVuO1xuICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAgeyFpc01lbnVPcGVuID8gKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy03IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgIGQ9XCJNNCA2aDE2TTQgMTJoMTZNNCAxOGgxNlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICA8c3ZnXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwidy03IGN1cnNvci1wb2ludGVyXCJcbiAgICAgICAgICAgICAgICB4bWxucz1cImh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnXCJcbiAgICAgICAgICAgICAgICBmaWxsPVwibm9uZVwiXG4gICAgICAgICAgICAgICAgdmlld0JveD1cIjAgMCAyNCAyNFwiXG4gICAgICAgICAgICAgICAgc3Ryb2tlPVwiY3VycmVudENvbG9yXCJcbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIDxwYXRoXG4gICAgICAgICAgICAgICAgICBzdHJva2VMaW5lY2FwPVwicm91bmRcIlxuICAgICAgICAgICAgICAgICAgc3Ryb2tlTGluZWpvaW49XCJyb3VuZFwiXG4gICAgICAgICAgICAgICAgICBzdHJva2VXaWR0aD17Mn1cbiAgICAgICAgICAgICAgICAgIGQ9XCJNNiAxOEwxOCA2TTYgNmwxMiAxMlwiXG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgPC9zdmc+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvYnV0dG9uPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvbmF2PlxuICAgICAge2lzTWVudU9wZW4gJiYgKFxuICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInNtOmhpZGRlbiBzaGFkb3ctbWQgcHgtMiBweS01IHctZnVsbFwiPlxuICAgICAgICA8U2VhcmNoQmFyLz5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgganVzdGlmeS1lbmRcIj5cbiAgICAgICAgICAgIDxCdXR0b25cbiAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYmxvY2sgbXktNSBcIlxuICAgICAgICAgICAgICBjb2xvcj1cInByaW1hcnlcIlxuICAgICAgICAgICAgICBvbkNsaWNrPXtvbkJ0bkNsaWNrfVxuICAgICAgICAgICAgPlxuICAgICAgICAgICAgICBBZGQgYSBwaG90b1xuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvbmF2PlxuICAgICAgKX1cbiAgICA8L2hlYWRlcj5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/NavBar.jsx\n");

/***/ })

})