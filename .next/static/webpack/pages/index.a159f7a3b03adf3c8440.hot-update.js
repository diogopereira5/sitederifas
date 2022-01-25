webpackHotUpdate_N_E("pages/index",{

/***/ "./components/layout/LayoutFront.js":
/*!******************************************!*\
  !*** ./components/layout/LayoutFront.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Bottom__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Bottom */ "./components/layout/Bottom.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Footer */ "./components/layout/Footer.js");
/* harmony import */ var _Header__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Header */ "./components/layout/Header.js");
/* harmony import */ var _HeaderLanding__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./HeaderLanding */ "./components/layout/HeaderLanding.js");
/* harmony import */ var _PageHead__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./PageHead */ "./components/layout/PageHead.js");
/* harmony import */ var _PageTitleLanding__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./PageTitleLanding */ "./components/layout/PageTitleLanding.js");
/* harmony import */ var _sidebar__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./sidebar */ "./components/layout/sidebar.js");



var _jsxFileName = "D:\\projetos\\rifando\\components\\layout\\LayoutFront.js",
    _this = undefined,
    _s = $RefreshSig$();










var LayoutFront = function LayoutFront(_ref) {
  _s();

  var headTitle = _ref.headTitle,
      children = _ref.children,
      pageTitle = _ref.pageTitle,
      pageTitleSub = _ref.pageTitleSub,
      pageClass = _ref.pageClass,
      parent = _ref.parent,
      child = _ref.child;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(),
      height = _useState[0],
      setHeight = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    setHeight(window.screen.height);
  }, []);
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PageHead__WEBPACK_IMPORTED_MODULE_6__["default"], {
      headTitle: headTitle
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 25,
      columnNumber: 13
    }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      id: "main-wrapper",
      className: pageClass,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderLanding__WEBPACK_IMPORTED_MODULE_5__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 27,
        columnNumber: 17
      }, _this), pageTitle && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_PageTitleLanding__WEBPACK_IMPORTED_MODULE_7__["default"], {
        pageTitle: pageTitle,
        pageTitleSub: pageTitleSub,
        parent: parent,
        child: child
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 25
      }, _this), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Bottom__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 42,
        columnNumber: 17
      }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_3__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 43,
        columnNumber: 17
      }, _this)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 26,
      columnNumber: 13
    }, _this)]
  }, void 0, true);
};

_s(LayoutFront, "9C+ooW40lyu3MlrxHEZneQGI5Nc=");

_c = LayoutFront;
/* harmony default export */ __webpack_exports__["default"] = (LayoutFront);

var _c;

$RefreshReg$(_c, "LayoutFront");

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ "./node_modules/next/dist/compiled/webpack/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9sYXlvdXQvTGF5b3V0RnJvbnQuanMiXSwibmFtZXMiOlsiTGF5b3V0RnJvbnQiLCJoZWFkVGl0bGUiLCJjaGlsZHJlbiIsInBhZ2VUaXRsZSIsInBhZ2VUaXRsZVN1YiIsInBhZ2VDbGFzcyIsInBhcmVudCIsImNoaWxkIiwidXNlU3RhdGUiLCJoZWlnaHQiLCJzZXRIZWlnaHQiLCJ1c2VFZmZlY3QiLCJ3aW5kb3ciLCJzY3JlZW4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxJQUFNQSxXQUFXLEdBQUcsU0FBZEEsV0FBYyxPQVFkO0FBQUE7O0FBQUEsTUFQRkMsU0FPRSxRQVBGQSxTQU9FO0FBQUEsTUFORkMsUUFNRSxRQU5GQSxRQU1FO0FBQUEsTUFMRkMsU0FLRSxRQUxGQSxTQUtFO0FBQUEsTUFKRkMsWUFJRSxRQUpGQSxZQUlFO0FBQUEsTUFIRkMsU0FHRSxRQUhGQSxTQUdFO0FBQUEsTUFGRkMsTUFFRSxRQUZGQSxNQUVFO0FBQUEsTUFERkMsS0FDRSxRQURGQSxLQUNFOztBQUFBLGtCQUMwQkMsc0RBQVEsRUFEbEM7QUFBQSxNQUNLQyxNQURMO0FBQUEsTUFDYUMsU0FEYjs7QUFFRkMseURBQVMsQ0FBQyxZQUFNO0FBQ1pELGFBQVMsQ0FBQ0UsTUFBTSxDQUFDQyxNQUFQLENBQWNKLE1BQWYsQ0FBVDtBQUNILEdBRlEsRUFFTixFQUZNLENBQVQ7QUFHQSxzQkFDSTtBQUFBLDRCQUNJLHFFQUFDLGlEQUFEO0FBQVUsZUFBUyxFQUFFUjtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBREosZUFFSTtBQUFLLFFBQUUsRUFBQyxjQUFSO0FBQXVCLGVBQVMsRUFBRUksU0FBbEM7QUFBQSw4QkFDSSxxRUFBQyxzREFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREosRUFHU0YsU0FBUyxpQkFDTixxRUFBQyx5REFBRDtBQUNJLGlCQUFTLEVBQUVBLFNBRGY7QUFFSSxvQkFBWSxFQUFFQyxZQUZsQjtBQUdJLGNBQU0sRUFBRUUsTUFIWjtBQUlJLGFBQUssRUFBRUM7QUFKWDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBSlosRUFhU0wsUUFiVCxlQWdCSSxxRUFBQywrQ0FBRDtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBaEJKLGVBaUJJLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFqQko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGFBRko7QUFBQSxrQkFESjtBQXdCSCxDQXJDRDs7R0FBTUYsVzs7S0FBQUEsVztBQXVDU0EsMEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguYTE1OWY3YTNiMDNhZGYzYzg0NDAuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEJvdHRvbSBmcm9tIFwiLi9Cb3R0b21cIjtcclxuaW1wb3J0IEZvb3RlciBmcm9tIFwiLi9Gb290ZXJcIjtcclxuaW1wb3J0IEhlYWRlciBmcm9tIFwiLi9IZWFkZXJcIjtcclxuaW1wb3J0IEhlYWRlckxhbmRpbmcgZnJvbSBcIi4vSGVhZGVyTGFuZGluZ1wiO1xyXG5pbXBvcnQgUGFnZUhlYWQgZnJvbSBcIi4vUGFnZUhlYWRcIjtcclxuaW1wb3J0IFBhZ2VUaXRsZUxhbmRpbmcgZnJvbSBcIi4vUGFnZVRpdGxlTGFuZGluZ1wiO1xyXG5pbXBvcnQgU2lkZWJhciBmcm9tIFwiLi9zaWRlYmFyXCI7XHJcblxyXG5jb25zdCBMYXlvdXRGcm9udCA9ICh7XHJcbiAgICBoZWFkVGl0bGUsXHJcbiAgICBjaGlsZHJlbixcclxuICAgIHBhZ2VUaXRsZSxcclxuICAgIHBhZ2VUaXRsZVN1YixcclxuICAgIHBhZ2VDbGFzcyxcclxuICAgIHBhcmVudCxcclxuICAgIGNoaWxkLFxyXG59KSA9PiB7XHJcbiAgICBjb25zdCBbaGVpZ2h0LCBzZXRIZWlnaHRdID0gdXNlU3RhdGUoKTtcclxuICAgIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICAgICAgc2V0SGVpZ2h0KHdpbmRvdy5zY3JlZW4uaGVpZ2h0KTtcclxuICAgIH0sIFtdKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAgPFBhZ2VIZWFkIGhlYWRUaXRsZT17aGVhZFRpdGxlfSAvPlxyXG4gICAgICAgICAgICA8ZGl2IGlkPVwibWFpbi13cmFwcGVyXCIgY2xhc3NOYW1lPXtwYWdlQ2xhc3N9PlxyXG4gICAgICAgICAgICAgICAgPEhlYWRlckxhbmRpbmcgLz5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAge3BhZ2VUaXRsZSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxQYWdlVGl0bGVMYW5kaW5nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWdlVGl0bGU9e3BhZ2VUaXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZ2VUaXRsZVN1Yj17cGFnZVRpdGxlU3VifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50PXtwYXJlbnR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZD17Y2hpbGR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgICAgIHtjaGlsZHJlbn1cclxuICAgICAgICAgICAgICBcclxuXHJcbiAgICAgICAgICAgICAgICA8Qm90dG9tIC8+XHJcbiAgICAgICAgICAgICAgICA8Rm9vdGVyIC8+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvPlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IExheW91dEZyb250O1xyXG4iXSwic291cmNlUm9vdCI6IiJ9