webpackHotUpdate_N_E("pages/index",{

/***/ "./pages/index.jsx":
/*!*************************!*\
  !*** ./pages/index.jsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Home; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ \"./node_modules/next/head.js\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_NavBar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/NavBar */ \"./components/NavBar.jsx\");\n/* harmony import */ var _components_Gallery__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Gallery */ \"./components/Gallery.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Footer */ \"./components/Footer.jsx\");\n/* harmony import */ var _components_AddPhotoModal__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AddPhotoModal */ \"./components/AddPhotoModal.jsx\");\n/* harmony import */ var _components_DeleteModal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/DeleteModal */ \"./components/DeleteModal.jsx\");\n/* harmony import */ var _services_ImageServices__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../services/ImageServices */ \"./services/ImageServices.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-loader-spinner */ \"./node_modules/react-loader-spinner/dist/index.js\");\n/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_9__);\n\n\n\nvar _jsxFileName = \"/mnt/d/vscode/webdev-challenges/Fullstack/my-unsplash/client/pages/index.jsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\n\nfunction Home() {\n  _s();\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      images = _useState[0],\n      setImages = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isAddModalOpen = _useState2[0],\n      setIsAddModalOpen = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(false),\n      isDeleteModalOpen = _useState3[0],\n      setIsDeleteModalOpen = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      toBeDeleted = _useState4[0],\n      setToBeDeleted = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(true),\n      isLoading = _useState5[0],\n      setIsLoading = _useState5[1];\n\n  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(\"\"),\n      error = _useState6[0],\n      setError = _useState6[1];\n\n  var openAddModal = function openAddModal() {\n    setIsAddModalOpen(true);\n  };\n\n  var closeAddModal = function closeAddModal() {\n    setIsAddModalOpen(false);\n  };\n\n  var openDeleteModal = function openDeleteModal() {\n    setIsDeleteModalOpen(true);\n  };\n\n  var closeDeleteModal = function closeDeleteModal() {\n    setIsDeleteModalOpen(false);\n  };\n\n  var filterById = function filterById(id) {\n    setError(\"\");\n    setIsLoading(\"\");\n    setImages(function (images) {\n      return images.filter(function (img) {\n        return img._id !== id;\n      });\n    });\n  };\n\n  var updateImages = function updateImages(image) {\n    setError(\"\");\n    setIsLoading(false);\n    setImages(function (images) {\n      images.unshift(image);\n      return images;\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    Object(_services_ImageServices__WEBPACK_IMPORTED_MODULE_8__[\"getImages\"])(function (err, data) {\n      if (!err && data.images.length !== 0) {\n        setImages(data.images);\n      } else if (!err && data.images.length === 0) {\n        setImages([]);\n        setError(\"No items found\");\n      } else {\n        setImages([]);\n        setError(\"Oops! An Error has occurred. Please check your connection\");\n      }\n\n      setIsLoading(false);\n    });\n  }, []);\n\n  var filterByTerm = function filterByTerm(searchTerm) {\n    setIsLoading(true);\n    setError(\"\");\n    Object(_services_ImageServices__WEBPACK_IMPORTED_MODULE_8__[\"filterImages\"])(searchTerm, function (err, data) {\n      if (!err && data.images.length !== 0) {\n        setImages(data.images);\n      } else if (!err && data.images.length === 0) {\n        setImages([]);\n        setError(\"No items found\");\n      } else {\n        setImages([]);\n        setError(\"Oops! An Error has occurred. Please check your connection\");\n      }\n\n      setIsLoading(false);\n    });\n  };\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"title\", {\n        children: \"My Unsplash\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 85,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"link\", {\n        rel: \"icon\",\n        href: \"/favicon.ico\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 86,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 84,\n      columnNumber: 7\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n      className: \"container mx-auto min-h-screen \".concat(isAddModalOpen ? \"overflow-hidden\" : \"\"),\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_NavBar__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        className: \"mb-7 px-2 sm:px-5\",\n        onBtnClick: openAddModal,\n        filterByTerm: filterByTerm\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 94,\n        columnNumber: 9\n      }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n        className: \"px-2 sm:py-5\",\n        children: [isLoading && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full h-[70vh] flex justify-center items-center\",\n          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_9___default.a, {\n            type: \"Oval\",\n            color: \"#000\",\n            height: 35,\n            width: 35\n          }, void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 102,\n            columnNumber: 15\n          }, this)\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 101,\n          columnNumber: 13\n        }, this), error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"div\", {\n          className: \"w-full h-[70vh] flex justify-center items-center text-gray-800\",\n          children: error\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 106,\n          columnNumber: 13\n        }, this), !isLoading && !error && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Gallery__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n          openModal: openDeleteModal,\n          setId: setToBeDeleted,\n          images: images\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 112,\n          columnNumber: 13\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_AddPhotoModal__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n          isAddModalOpen: isAddModalOpen,\n          closeAddModal: closeAddModal,\n          updateImages: updateImages\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 119,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_DeleteModal__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n          isDeleteModalOpen: isDeleteModalOpen,\n          closeDeleteModal: closeDeleteModal,\n          id: toBeDeleted,\n          setId: setToBeDeleted,\n          filterById: filterById\n        }, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 125,\n          columnNumber: 11\n        }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_Footer__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {}, void 0, false, {\n          fileName: _jsxFileName,\n          lineNumber: 133,\n          columnNumber: 11\n        }, this)]\n      }, void 0, true, {\n        fileName: _jsxFileName,\n        lineNumber: 99,\n        columnNumber: 9\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 89,\n      columnNumber: 7\n    }, this)]\n  }, void 0, true);\n}\n\n_s(Home, \"9Strb/WQoxtxqPny7vLsnU8X3+0=\");\n\n_c = Home;\n\nvar _c;\n\n$RefreshReg$(_c, \"Home\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vcGFnZXMvaW5kZXguanN4PzcwYzUiXSwibmFtZXMiOlsiSG9tZSIsInVzZVN0YXRlIiwiaW1hZ2VzIiwic2V0SW1hZ2VzIiwiaXNBZGRNb2RhbE9wZW4iLCJzZXRJc0FkZE1vZGFsT3BlbiIsImlzRGVsZXRlTW9kYWxPcGVuIiwic2V0SXNEZWxldGVNb2RhbE9wZW4iLCJ0b0JlRGVsZXRlZCIsInNldFRvQmVEZWxldGVkIiwiaXNMb2FkaW5nIiwic2V0SXNMb2FkaW5nIiwiZXJyb3IiLCJzZXRFcnJvciIsIm9wZW5BZGRNb2RhbCIsImNsb3NlQWRkTW9kYWwiLCJvcGVuRGVsZXRlTW9kYWwiLCJjbG9zZURlbGV0ZU1vZGFsIiwiZmlsdGVyQnlJZCIsImlkIiwiZmlsdGVyIiwiaW1nIiwiX2lkIiwidXBkYXRlSW1hZ2VzIiwiaW1hZ2UiLCJ1bnNoaWZ0IiwidXNlRWZmZWN0IiwiZ2V0SW1hZ2VzIiwiZXJyIiwiZGF0YSIsImxlbmd0aCIsImZpbHRlckJ5VGVybSIsInNlYXJjaFRlcm0iLCJmaWx0ZXJJbWFnZXMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFZSxTQUFTQSxJQUFULEdBQWdCO0FBQUE7O0FBQUEsa0JBQ0RDLHNEQUFRLENBQUMsRUFBRCxDQURQO0FBQUEsTUFDdEJDLE1BRHNCO0FBQUEsTUFDZEMsU0FEYzs7QUFBQSxtQkFFZUYsc0RBQVEsQ0FBQyxLQUFELENBRnZCO0FBQUEsTUFFdEJHLGNBRnNCO0FBQUEsTUFFTkMsaUJBRk07O0FBQUEsbUJBR3FCSixzREFBUSxDQUFDLEtBQUQsQ0FIN0I7QUFBQSxNQUd0QkssaUJBSHNCO0FBQUEsTUFHSEMsb0JBSEc7O0FBQUEsbUJBSVNOLHNEQUFRLENBQUMsRUFBRCxDQUpqQjtBQUFBLE1BSXRCTyxXQUpzQjtBQUFBLE1BSVRDLGNBSlM7O0FBQUEsbUJBS0tSLHNE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UCxjQUZUO0FBR0UsZ0JBQU0sRUFBRVA7QUFIVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWJKLGVBb0JFLHFFQUFDLGlFQUFEO0FBQ0Usd0JBQWMsRUFBRUUsY0FEbEI7QUFFRSx1QkFBYSxFQUFFVyxhQUZqQjtBQUdFLHNCQUFZLEVBQUVRO0FBSGhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsZ0JBcEJGLGVBMEJFLHFFQUFDLCtEQUFEO0FBQ0UsMkJBQWlCLEVBQUVqQixpQkFEckI7QUFFRSwwQkFBZ0IsRUFBRVcsZ0JBRnBCO0FBR0UsWUFBRSxFQUFFVCxXQUhOO0FBSUUsZUFBSyxFQUFFQyxjQUpUO0FBS0Usb0JBQVUsRUFBRVM7QUFMZDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQTFCRixlQWtDRSxxRUFBQywwREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGdCQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsWUFORjtBQUFBLGtCQURGO0FBd0REOztHQS9IdUJsQixJOztLQUFBQSxJIiwiZmlsZSI6Ii4vcGFnZXMvaW5kZXguanN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IE5hdkJhciBmcm9tIFwiLi4vY29tcG9uZW50cy9OYXZCYXJcIjtcbmltcG9ydCBHYWxsZXJ5IGZyb20gXCIuLi9jb21wb25lbnRzL0dhbGxlcnlcIjtcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBGb290ZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvRm9vdGVyXCI7XG5pbXBvcnQgQWRkUGhvdG9Nb2RhbCBmcm9tIFwiLi4vY29tcG9uZW50cy9BZGRQaG90b01vZGFsXCI7XG5pbXBvcnQgRGVsZXRlTW9kYWwgZnJvbSBcIi4uL2NvbXBvbmVudHMvRGVsZXRlTW9kYWxcIjtcbmltcG9ydCB7IGZpbHRlckltYWdlcywgZ2V0SW1hZ2VzIH0gZnJvbSBcIi4uL3NlcnZpY2VzL0ltYWdlU2VydmljZXNcIjtcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XG4gIGNvbnN0IFtpbWFnZXMsIHNldEltYWdlc10gPSB1c2VTdGF0ZShbXSk7XG4gIGNvbnN0IFtpc0FkZE1vZGFsT3Blbiwgc2V0SXNBZGRNb2RhbE9wZW5dID0gdXNlU3RhdGUoZmFsc2UpO1xuICBjb25zdCBbaXNEZWxldGVNb2RhbE9wZW4sIHNldElzRGVsZXRlTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcbiAgY29uc3QgW3RvQmVEZWxldGVkLCBzZXRUb0JlRGVsZXRlZF0gPSB1c2VTdGF0ZShcIlwiKTtcbiAgY29uc3QgW2lzTG9hZGluZywgc2V0SXNMb2FkaW5nXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbZXJyb3IsIHNldEVycm9yXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGNvbnN0IG9wZW5BZGRNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc0FkZE1vZGFsT3Blbih0cnVlKTtcbiAgfTtcbiAgY29uc3QgY2xvc2VBZGRNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc0FkZE1vZGFsT3BlbihmYWxzZSk7XG4gIH07XG4gIGNvbnN0IG9wZW5EZWxldGVNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc0RlbGV0ZU1vZGFsT3Blbih0cnVlKTtcbiAgfTtcbiAgY29uc3QgY2xvc2VEZWxldGVNb2RhbCA9ICgpID0+IHtcbiAgICBzZXRJc0RlbGV0ZU1vZGFsT3BlbihmYWxzZSk7XG4gIH07XG5cbiAgY29uc3QgZmlsdGVyQnlJZCA9IChpZCkgPT4ge1xuICAgIHNldEVycm9yKFwiXCIpO1xuICAgIHNldElzTG9hZGluZyhcIlwiKTtcbiAgICBzZXRJbWFnZXMoKGltYWdlcykgPT4ge1xuICAgICAgcmV0dXJuIGltYWdlcy5maWx0ZXIoKGltZykgPT4ge1xuICAgICAgICByZXR1cm4gaW1nLl9pZCAhPT0gaWQ7XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfTtcbiAgY29uc3QgdXBkYXRlSW1hZ2VzID0gKGltYWdlKSA9PiB7XG4gICAgc2V0RXJyb3IoXCJcIik7XG4gICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICBzZXRJbWFnZXMoKGltYWdlcykgPT4ge1xuICAgICAgaW1hZ2VzLnVuc2hpZnQoaW1hZ2UpO1xuICAgICAgcmV0dXJuIGltYWdlcztcbiAgICB9KTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGdldEltYWdlcygoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoIWVyciAmJiBkYXRhLmltYWdlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgc2V0SW1hZ2VzKGRhdGEuaW1hZ2VzKTtcbiAgICAgIH0gZWxzZSBpZiAoIWVyciAmJiBkYXRhLmltYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2V0SW1hZ2VzKFtdKTtcbiAgICAgICAgc2V0RXJyb3IoXCJObyBpdGVtcyBmb3VuZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEltYWdlcyhbXSk7XG4gICAgICAgIHNldEVycm9yKFwiT29wcyEgQW4gRXJyb3IgaGFzIG9jY3VycmVkLiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uXCIpO1xuICAgICAgfVxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGZpbHRlckJ5VGVybSA9IChzZWFyY2hUZXJtKSA9PiB7XG4gICAgc2V0SXNMb2FkaW5nKHRydWUpO1xuICAgIHNldEVycm9yKFwiXCIpO1xuICAgIGZpbHRlckltYWdlcyhzZWFyY2hUZXJtLCAoZXJyLCBkYXRhKSA9PiB7XG4gICAgICBpZiAoIWVyciAmJiBkYXRhLmltYWdlcy5sZW5ndGggIT09IDApIHtcbiAgICAgICAgc2V0SW1hZ2VzKGRhdGEuaW1hZ2VzKTtcbiAgICAgIH0gZWxzZSBpZiAoIWVyciAmJiBkYXRhLmltYWdlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgc2V0SW1hZ2VzKFtdKTtcbiAgICAgICAgc2V0RXJyb3IoXCJObyBpdGVtcyBmb3VuZFwiKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHNldEltYWdlcyhbXSk7XG4gICAgICAgIHNldEVycm9yKFwiT29wcyEgQW4gRXJyb3IgaGFzIG9jY3VycmVkLiBQbGVhc2UgY2hlY2sgeW91ciBjb25uZWN0aW9uXCIpO1xuICAgICAgfVxuICAgICAgc2V0SXNMb2FkaW5nKGZhbHNlKTtcbiAgICB9KTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPk15IFVuc3BsYXNoPC90aXRsZT5cbiAgICAgICAgPGxpbmsgcmVsPVwiaWNvblwiIGhyZWY9XCIvZmF2aWNvbi5pY29cIiAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT17YGNvbnRhaW5lciBteC1hdXRvIG1pbi1oLXNjcmVlbiAke1xuICAgICAgICAgIGlzQWRkTW9kYWxPcGVuID8gXCJvdmVyZmxvdy1oaWRkZW5cIiA6IFwiXCJcbiAgICAgICAgfWB9XG4gICAgICA+XG4gICAgICAgIDxOYXZCYXJcbiAgICAgICAgICBjbGFzc05hbWU9XCJtYi03IHB4LTIgc206cHgtNVwiXG4gICAgICAgICAgb25CdG5DbGljaz17b3BlbkFkZE1vZGFsfVxuICAgICAgICAgIGZpbHRlckJ5VGVybT17ZmlsdGVyQnlUZXJtfVxuICAgICAgICAvPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInB4LTIgc206cHktNVwiPlxuICAgICAgICAgIHtpc0xvYWRpbmcgJiYgKFxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3LWZ1bGwgaC1bNzB2aF0gZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgICAgICAgICAgPExvYWRlciB0eXBlPVwiT3ZhbFwiIGNvbG9yPVwiIzAwMFwiIGhlaWdodD17MzV9IHdpZHRoPXszNX0gLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICl9XG4gICAgICAgICAge2Vycm9yICYmIChcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1mdWxsIGgtWzcwdmhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIHRleHQtZ3JheS04MDBcIj5cbiAgICAgICAgICAgICAge2Vycm9yfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIHshaXNMb2FkaW5nICYmICFlcnJvciAmJiAoXG4gICAgICAgICAgICA8R2FsbGVyeVxuICAgICAgICAgICAgICBvcGVuTW9kYWw9e29wZW5EZWxldGVNb2RhbH1cbiAgICAgICAgICAgICAgc2V0SWQ9e3NldFRvQmVEZWxldGVkfVxuICAgICAgICAgICAgICBpbWFnZXM9e2ltYWdlc31cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKX1cblxuICAgICAgICAgIDxBZGRQaG90b01vZGFsXG4gICAgICAgICAgICBpc0FkZE1vZGFsT3Blbj17aXNBZGRNb2RhbE9wZW59XG4gICAgICAgICAgICBjbG9zZUFkZE1vZGFsPXtjbG9zZUFkZE1vZGFsfVxuICAgICAgICAgICAgdXBkYXRlSW1hZ2VzPXt1cGRhdGVJbWFnZXN9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxEZWxldGVNb2RhbFxuICAgICAgICAgICAgaXNEZWxldGVNb2RhbE9wZW49e2lzRGVsZXRlTW9kYWxPcGVufVxuICAgICAgICAgICAgY2xvc2VEZWxldGVNb2RhbD17Y2xvc2VEZWxldGVNb2RhbH1cbiAgICAgICAgICAgIGlkPXt0b0JlRGVsZXRlZH1cbiAgICAgICAgICAgIHNldElkPXtzZXRUb0JlRGVsZXRlZH1cbiAgICAgICAgICAgIGZpbHRlckJ5SWQ9e2ZpbHRlckJ5SWR9XG4gICAgICAgICAgLz5cblxuICAgICAgICAgIDxGb290ZXIgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/index.jsx\n");

/***/ })

})