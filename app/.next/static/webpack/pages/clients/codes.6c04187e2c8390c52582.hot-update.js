webpackHotUpdate_N_E("pages/clients/codes",{

/***/ "./components/_M-UI/table/table.tsx":
/*!******************************************!*\
  !*** ./components/_M-UI/table/table.tsx ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_kevinpak_Documents_rechcompt_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/defineProperty */ \"./node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-table */ \"./node_modules/react-table/index.js\");\n/* harmony import */ var react_table__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_table__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./MOCK_DATA.json */ \"./components/_M-UI/table/MOCK_DATA.json\");\nvar _MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_3___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./MOCK_DATA.json */ \"./components/_M-UI/table/MOCK_DATA.json\", 1);\n\n\n\n\nvar _jsxFileName = \"/home/kevinpak/Documents/rechcompt/app/components/_M-UI/table/table.tsx\",\n    _this = undefined;\n\nfunction ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }\n\nfunction _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { Object(_home_kevinpak_Documents_rechcompt_app_node_modules_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }\n\n\n\n\nvar TableCpn = function TableCpn() {\n  var _s = $RefreshSig$();\n\n  /*\n  *\n  */\n  var Table = function Table(_ref) {\n    _s();\n\n    var columns = _ref.columns,\n        data = _ref.data;\n\n    // Use the state and functions returned from useTable to build your UI\n    var _useTable = Object(react_table__WEBPACK_IMPORTED_MODULE_2__[\"useTable\"])({\n      columns: columns,\n      data: data\n    }),\n        getTableProps = _useTable.getTableProps,\n        getTableBodyProps = _useTable.getTableBodyProps,\n        headerGroups = _useTable.headerGroups,\n        rows = _useTable.rows,\n        prepareRow = _useTable.prepareRow;\n\n    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"table\", _objectSpread(_objectSpread({}, getTableProps()), {}, {\n      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"thead\", {\n        children: headerGroups.map(function (headerGroup) {\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", _objectSpread(_objectSpread({}, headerGroup.getHeaderGroupProps()), {}, {\n            children: headerGroup.headers.map(function (column) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"th\", _objectSpread(_objectSpread({}, column.getHeaderProps()), {}, {\n                children: column.render('Header')\n              }), void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 31,\n                columnNumber: 17\n              }, _this);\n            })\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 29,\n            columnNumber: 13\n          }, _this);\n        })\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 27,\n        columnNumber: 9\n      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tbody\", _objectSpread(_objectSpread({}, getTableBodyProps()), {}, {\n        children: rows.map(function (row, i) {\n          prepareRow(row);\n          return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"tr\", _objectSpread(_objectSpread({}, row.getRowProps()), {}, {\n            children: row.cells.map(function (cell) {\n              return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"td\", _objectSpread(_objectSpread({}, cell.getCellProps()), {}, {\n                children: cell.render('Cell')\n              }), void 0, false, {\n                fileName: _jsxFileName,\n                lineNumber: 42,\n                columnNumber: 26\n              }, _this);\n            })\n          }), void 0, false, {\n            fileName: _jsxFileName,\n            lineNumber: 40,\n            columnNumber: 15\n          }, _this);\n        })\n      }), void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 36,\n        columnNumber: 9\n      }, _this)]\n    }), void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 7\n    }, _this);\n  };\n  /*\n  *\n  */\n\n\n  _s(Table, \"pmT4Wvyu5l7gpXiMsraUW0N0RNk=\", false, function () {\n    return [react_table__WEBPACK_IMPORTED_MODULE_2__[\"useTable\"]];\n  });\n\n  var columns = [{\n    Header: 'Id',\n    accessor: 'id'\n  }, {\n    Header: 'First Name',\n    accessor: 'first_name'\n  }, {\n    Header: 'Last Name',\n    accessor: 'last_name'\n  }, {\n    Header: 'Email',\n    accessor: 'email'\n  }];\n  var data = _MOCK_DATA_json__WEBPACK_IMPORTED_MODULE_3__;\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"Fragment\"], {\n    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(Table, {\n      columns: columns,\n      data: data\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 81,\n      columnNumber: 7\n    }, _this)\n  }, void 0, false);\n};\n\n_c = TableCpn;\n/* harmony default export */ __webpack_exports__[\"default\"] = (TableCpn);\n\nvar _c;\n\n$RefreshReg$(_c, \"TableCpn\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9fTS1VSS90YWJsZS90YWJsZS50c3g/Mjg5NyJdLCJuYW1lcyI6WyJUYWJsZUNwbiIsIlRhYmxlIiwiY29sdW1ucyIsImRhdGEiLCJ1c2VUYWJsZSIsImdldFRhYmxlUHJvcHMiLCJnZXRUYWJsZUJvZHlQcm9wcyIsImhlYWRlckdyb3VwcyIsInJvd3MiLCJwcmVwYXJlUm93IiwibWFwIiwiaGVhZGVyR3JvdXAiLCJnZXRIZWFkZXJHcm91cFByb3BzIiwiaGVhZGVycyIsImNvbHVtbiIsImdldEhlYWRlclByb3BzIiwicmVuZGVyIiwicm93IiwiaSIsImdldFJvd1Byb3BzIiwiY2VsbHMiLCJjZWxsIiwiZ2V0Q2VsbFByb3BzIiwiSGVhZGVyIiwiYWNjZXNzb3IiLCJtYWtlRGF0YSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUdBO0FBQ0E7O0FBRUEsSUFBTUEsUUFBUSxHQUFHLFNBQVhBLFFBQVcsR0FBTTtBQUFBOztBQUVyQjtBQUNGO0FBQ0E7QUFDRSxNQUFNQyxLQUFLLEdBQUcsU0FBUkEsS0FBUSxPQUF1QjtBQUFBOztBQUFBLFFBQXBCQyxPQUFvQixRQUFwQkEsT0FBb0I7QUFBQSxRQUFYQyxJQUFXLFFBQVhBLElBQVc7O0FBQ25DO0FBRG1DLG9CQVEvQkMsNERBQVEsQ0FBQztBQUNYRixhQUFPLEVBQVBBLE9BRFc7QUFFWEMsVUFBSSxFQUFKQTtBQUZXLEtBQUQsQ0FSdUI7QUFBQSxRQUdqQ0UsYUFIaUMsYUFHakNBLGFBSGlDO0FBQUEsUUFJakNDLGlCQUppQyxhQUlqQ0EsaUJBSmlDO0FBQUEsUUFLakNDLFlBTGlDLGFBS2pDQSxZQUxpQztBQUFBLFFBTWpDQyxJQU5pQyxhQU1qQ0EsSUFOaUM7QUFBQSxRQU9qQ0MsVUFQaUMsYUFPakNBLFVBUGlDOztBQWFuQyx3QkFDRSw4R0FBV0osYUFBYSxFQUF4QjtBQUFBLDhCQUNFO0FBQUEsa0JBQ0dFLFlBQVksQ0FBQ0csR0FBYixDQUFpQixVQUFBQyxXQUFXO0FBQUEsOEJBQzNCLDJHQUFRQSxXQUFXLENBQUNDLG1CQUFaLEVBQVI7QUFBQSxzQkFDR0QsV0FBVyxDQUFDRSxPQUFaLENBQW9CSCxHQUFwQixDQUF3QixVQUFBSSxNQUFNO0FBQUEsa0NBQzdCLDJHQUFRQSxNQUFNLENBQUNDLGNBQVAsRUFBUjtBQUFBLDBCQUFrQ0QsTUFBTSxDQUFDRSxNQUFQLENBQWMsUUFBZDtBQUFsQztBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUQ2QjtBQUFBLGFBQTlCO0FBREg7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFEMkI7QUFBQSxTQUE1QjtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERixlQVVFLDhHQUFXVixpQkFBaUIsRUFBNUI7QUFBQSxrQkFDR0UsSUFBSSxDQUFDRSxHQUFMLENBQVMsVUFBQ08sR0FBRCxFQUFNQyxDQUFOLEVBQVk7QUFDcEJULG9CQUFVLENBQUNRLEdBQUQsQ0FBVjtBQUNBLDhCQUNFLDJHQUFRQSxHQUFHLENBQUNFLFdBQUosRUFBUjtBQUFBLHNCQUNHRixHQUFHLENBQUNHLEtBQUosQ0FBVVYsR0FBVixDQUFjLFVBQUFXLElBQUksRUFBSTtBQUNyQixrQ0FBTywyR0FBUUEsSUFBSSxDQUFDQyxZQUFMLEVBQVI7QUFBQSwwQkFBOEJELElBQUksQ0FBQ0wsTUFBTCxDQUFZLE1BQVo7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFBUDtBQUNELGFBRkE7QUFESDtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURGO0FBT0QsU0FUQTtBQURIO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFWRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsYUFERjtBQXlCRCxHQXRDRDtBQXdDQTtBQUNGO0FBQ0E7OztBQS9DdUIsS0FLZmYsS0FMZTtBQUFBLFlBYWZHLG9EQWJlO0FBQUE7O0FBZ0RyQixNQUFNRixPQUFPLEdBQUksQ0FDZjtBQUNFcUIsVUFBTSxFQUFFLElBRFY7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0FEZSxFQUtmO0FBQ0VELFVBQU0sRUFBRSxZQURWO0FBRUVDLFlBQVEsRUFBRTtBQUZaLEdBTGUsRUFTZjtBQUNFRCxVQUFNLEVBQUUsV0FEVjtBQUVFQyxZQUFRLEVBQUU7QUFGWixHQVRlLEVBYWY7QUFDRUQsVUFBTSxFQUFFLE9BRFY7QUFFRUMsWUFBUSxFQUFFO0FBRlosR0FiZSxDQUFqQjtBQXFCQSxNQUFNckIsSUFBSSxHQUFHc0IsNENBQWI7QUFHQSxzQkFDRTtBQUFBLDJCQUNFLHFFQUFDLEtBQUQ7QUFBTyxhQUFPLEVBQUV2QixPQUFoQjtBQUF5QixVQUFJLEVBQUVDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixtQkFERjtBQUtELENBN0VEOztLQUFNSCxRO0FBK0VTQSx1RUFBZiIsImZpbGUiOiIuL2NvbXBvbmVudHMvX00tVUkvdGFibGUvdGFibGUudHN4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHN0eWxlcyBmcm9tICcuL3RhYmxlLm1vZHVsZS5zY3NzJ1xuaW1wb3J0IGxpbmsgZnJvbSAnbmV4dC9saW5rJ1xuaW1wb3J0IHt1c2VNZW1vfSBmcm9tICdyZWFjdCdcbmltcG9ydCB7IHVzZVRhYmxlIH0gZnJvbSAncmVhY3QtdGFibGUnXG5pbXBvcnQgbWFrZURhdGEgZnJvbSAnLi9NT0NLX0RBVEEuanNvbidcblxuY29uc3QgVGFibGVDcG4gPSAoKSA9PiB7XG5cbiAgLypcbiAgKlxuICAqL1xuICBjb25zdCBUYWJsZSA9ICh7IGNvbHVtbnMsIGRhdGEgfSkgPT4ge1xuICAgIC8vIFVzZSB0aGUgc3RhdGUgYW5kIGZ1bmN0aW9ucyByZXR1cm5lZCBmcm9tIHVzZVRhYmxlIHRvIGJ1aWxkIHlvdXIgVUlcbiAgICBjb25zdCB7XG4gICAgICBnZXRUYWJsZVByb3BzLFxuICAgICAgZ2V0VGFibGVCb2R5UHJvcHMsXG4gICAgICBoZWFkZXJHcm91cHMsXG4gICAgICByb3dzLFxuICAgICAgcHJlcGFyZVJvdyxcbiAgICB9ID0gdXNlVGFibGUoe1xuICAgICAgY29sdW1ucyxcbiAgICAgIGRhdGEsXG4gICAgfSlcblxuICAgIHJldHVybiAoXG4gICAgICA8dGFibGUgey4uLmdldFRhYmxlUHJvcHMoKX0+XG4gICAgICAgIDx0aGVhZD5cbiAgICAgICAgICB7aGVhZGVyR3JvdXBzLm1hcChoZWFkZXJHcm91cCA9PiAoXG4gICAgICAgICAgICA8dHIgey4uLmhlYWRlckdyb3VwLmdldEhlYWRlckdyb3VwUHJvcHMoKX0+XG4gICAgICAgICAgICAgIHtoZWFkZXJHcm91cC5oZWFkZXJzLm1hcChjb2x1bW4gPT4gKFxuICAgICAgICAgICAgICAgIDx0aCB7Li4uY29sdW1uLmdldEhlYWRlclByb3BzKCl9Pntjb2x1bW4ucmVuZGVyKCdIZWFkZXInKX08L3RoPlxuICAgICAgICAgICAgICApKX1cbiAgICAgICAgICAgIDwvdHI+XG4gICAgICAgICAgKSl9XG4gICAgICAgIDwvdGhlYWQ+XG4gICAgICAgIDx0Ym9keSB7Li4uZ2V0VGFibGVCb2R5UHJvcHMoKX0+XG4gICAgICAgICAge3Jvd3MubWFwKChyb3csIGkpID0+IHtcbiAgICAgICAgICAgIHByZXBhcmVSb3cocm93KVxuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPHRyIHsuLi5yb3cuZ2V0Um93UHJvcHMoKX0+XG4gICAgICAgICAgICAgICAge3Jvdy5jZWxscy5tYXAoY2VsbCA9PiB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gPHRkIHsuLi5jZWxsLmdldENlbGxQcm9wcygpfT57Y2VsbC5yZW5kZXIoJ0NlbGwnKX08L3RkPlxuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L3RyPlxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0pfVxuICAgICAgICA8L3Rib2R5PlxuICAgICAgPC90YWJsZT5cbiAgICApXG4gIH1cblxuICAvKlxuICAqXG4gICovXG4gIGNvbnN0IGNvbHVtbnMgPSAgW1xuICAgIHtcbiAgICAgIEhlYWRlcjogJ0lkJyxcbiAgICAgIGFjY2Vzc29yOiAnaWQnLFxuICAgIH0sXG4gICAge1xuICAgICAgSGVhZGVyOiAnRmlyc3QgTmFtZScsXG4gICAgICBhY2Nlc3NvcjogJ2ZpcnN0X25hbWUnLFxuICAgIH0sXG4gICAge1xuICAgICAgSGVhZGVyOiAnTGFzdCBOYW1lJyxcbiAgICAgIGFjY2Vzc29yOiAnbGFzdF9uYW1lJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIEhlYWRlcjogJ0VtYWlsJyxcbiAgICAgIGFjY2Vzc29yOiAnZW1haWwnLFxuICAgIH0sXG4gIF1cbiAgXG5cblxuICBjb25zdCBkYXRhID0gbWFrZURhdGFcblxuIFxuICByZXR1cm4gKFxuICAgIDw+XG4gICAgICA8VGFibGUgY29sdW1ucz17Y29sdW1uc30gZGF0YT17ZGF0YX0gLz5cbiAgICA8Lz5cbiAgKVxufVxuXG5leHBvcnQgZGVmYXVsdCBUYWJsZUNwbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/_M-UI/table/table.tsx\n");

/***/ })

})