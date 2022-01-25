webpackHotUpdate_N_E("pages/index",{

/***/ "./components/elements/TopCollection.js":
/*!**********************************************!*\
  !*** ./components/elements/TopCollection.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);



var _jsxFileName = "D:\\projetos\\rifando\\components\\elements\\TopCollection.js",
    _s = $RefreshSig$();



var data = [{
  id: 1,
  title: "Rifa Teste",
  img: "1.jpg",
  value: "positive",
  price: 1384,
  status: "R$ 25,00"
}, {
  id: 2,
  title: "Rifa Teste",
  follow: true,
  img: "2.jpg",
  value: "positive",
  price: 1384,
  status: "R$ 25,00"
}, {
  id: 3,
  title: "Rifa Teste",
  img: "3.jpg",
  value: "positive",
  price: 1384,
  status: "R$ 25,00"
}, {
  id: 4,
  title: "Rifa Teste",
  img: "4.jpg",
  value: "positive",
  price: 1384,
  status: "R$ 25,00"
}, {
  id: 5,
  title: "Rifa Teste",
  img: "5.jpg",
  value: "positive",
  price: 1384,
  status: "R$ 25,00"
}, {
  id: 6,
  title: "Rifa Teste",
  img: "6.jpg",
  value: "positive",
  price: 1384,
  status: "R$ 25,00"
}, {
  id: 7,
  title: "Rifa Teste",
  img: "7.jpg",
  value: "positive",
  price: 1384,
  status: "R$ 25,00"
}, {
  id: 8,
  title: "Rifa Teste",
  img: "8.jpg",
  value: "positive",
  price: 1384,
  status: "R$ 25,00"
}];

function TopCollection() {
  _s();

  var _this = this;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])("p1"),
      open = _useState[0],
      setOpen = _useState[1];

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["Fragment"], {
    children: data.map(function (item, i) {
      return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-xl-4 col-lg-6 col-md-6",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/collection",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            className: "top-collection-content d-block",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "d-flex align-items-center",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                className: "serial",
                children: [i + 1, ". "]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex-shrink-0",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  className: "top-img",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "img-fluid",
                    src: "/images/items/".concat(item.img),
                    alt: "",
                    width: "70"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 81,
                    columnNumber: 63
                  }, _this)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 81,
                  columnNumber: 37
                }, _this)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 80,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "flex-grow-1 ms-3",
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                  children: item.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 89,
                  columnNumber: 37
                }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
                  className: "text-muted",
                  children: item.price
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 90,
                  columnNumber: 37
                }, _this)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 33
              }, _this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h5", {
                "class": item.value == "positive" ? "text-success" : "text-danger",
                children: [item.value == "positive" ? "+" : "-", item.status]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 95,
                columnNumber: 33
              }, _this)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 29
            }, _this)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 77,
            columnNumber: 25
          }, _this)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, _this)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 75,
        columnNumber: 17
      }, _this);
    })
  }, void 0, false);
}

_s(TopCollection, "waSMit5XQQG4sk6z4JmTDzbjmMA=");

_c = TopCollection;
/* harmony default export */ __webpack_exports__["default"] = (TopCollection);

var _c;

$RefreshReg$(_c, "TopCollection");

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbGVtZW50cy9Ub3BDb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiaW1nIiwidmFsdWUiLCJwcmljZSIsInN0YXR1cyIsImZvbGxvdyIsIlRvcENvbGxlY3Rpb24iLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwibWFwIiwiaXRlbSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLElBQUksR0FBRyxDQUNUO0FBQ0lDLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBRFMsRUFTVDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsWUFGWDtBQUdJSyxRQUFNLEVBQUUsSUFIWjtBQUlJSixLQUFHLEVBQUUsT0FKVDtBQUtJQyxPQUFLLEVBQUUsVUFMWDtBQU1JQyxPQUFLLEVBQUUsSUFOWDtBQU9JQyxRQUFNLEVBQUU7QUFQWixDQVRTLEVBa0JUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBbEJTLEVBMEJUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBMUJTLEVBa0NUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBbENTLEVBMENUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBMUNTLEVBa0RUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBbERTLEVBMERUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBMURTLENBQWI7O0FBbUVBLFNBQVNFLGFBQVQsR0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxJQUFELENBRFg7QUFBQSxNQUNkQyxJQURjO0FBQUEsTUFDUkMsT0FEUTs7QUFFckIsc0JBQ0k7QUFBQSxjQUNLWCxJQUFJLENBQUNZLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSwwQkFDTjtBQUFLLGlCQUFTLEVBQUMsNEJBQWY7QUFBQSwrQkFDSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQUEsaUNBQ0k7QUFBRyxxQkFBUyxFQUFDLGdDQUFiO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLDJCQUFmO0FBQUEsc0NBQ0k7QUFBTSx5QkFBUyxFQUFDLFFBQWhCO0FBQUEsMkJBQTBCQSxDQUFDLEdBQUcsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBSyx5QkFBUyxFQUFDLGVBQWY7QUFBQSx1Q0FDSTtBQUFNLDJCQUFTLEVBQUMsU0FBaEI7QUFBQSx5Q0FBMEI7QUFDdEIsNkJBQVMsRUFBQyxXQURZO0FBRXRCLHVCQUFHLDBCQUFtQkQsSUFBSSxDQUFDVixHQUF4QixDQUZtQjtBQUd0Qix1QkFBRyxFQUFDLEVBSGtCO0FBSXRCLHlCQUFLLEVBQUM7QUFKZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQVVJO0FBQUsseUJBQVMsRUFBQyxrQkFBZjtBQUFBLHdDQUNJO0FBQUEsNEJBQUtVLElBQUksQ0FBQ1g7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBRUk7QUFBRywyQkFBUyxFQUFDLFlBQWI7QUFBQSw0QkFFS1csSUFBSSxDQUFDUjtBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZKLGVBaUJJO0FBQUkseUJBQU9RLElBQUksQ0FBQ1QsS0FBTCxJQUFjLFVBQWQsR0FBMkIsY0FBM0IsR0FBNEMsYUFBdkQ7QUFBQSwyQkFBdUVTLElBQUksQ0FBQ1QsS0FBTCxJQUFjLFVBQWQsR0FBMkIsR0FBM0IsR0FBaUMsR0FBeEcsRUFBNkdTLElBQUksQ0FBQ1AsTUFBbEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWpCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFETTtBQUFBLEtBQVQ7QUFETCxtQkFESjtBQWtDSDs7R0FwQ1FFLGE7O0tBQUFBLGE7QUFxQ01BLDRFQUFmIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjNkZWIwMWI2NzhmZDA5ZGI4YzE3LmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCJcclxuY29uc3QgZGF0YSA9IFtcclxuICAgIHtcclxuICAgICAgICBpZDogMSxcclxuICAgICAgICB0aXRsZTogXCJSaWZhIFRlc3RlXCIsXHJcbiAgICAgICAgaW1nOiBcIjEuanBnXCIsXHJcbiAgICAgICAgdmFsdWU6IFwicG9zaXRpdmVcIixcclxuICAgICAgICBwcmljZTogMTM4NCxcclxuICAgICAgICBzdGF0dXM6IFwiUiQgMjUsMDBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDIsXHJcbiAgICAgICAgdGl0bGU6IFwiUmlmYSBUZXN0ZVwiLFxyXG4gICAgICAgIGZvbGxvdzogdHJ1ZSxcclxuICAgICAgICBpbWc6IFwiMi5qcGdcIixcclxuICAgICAgICB2YWx1ZTogXCJwb3NpdGl2ZVwiLFxyXG4gICAgICAgIHByaWNlOiAxMzg0LFxyXG4gICAgICAgIHN0YXR1czogXCJSJCAyNSwwMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICB0aXRsZTogXCJSaWZhIFRlc3RlXCIsXHJcbiAgICAgICAgaW1nOiBcIjMuanBnXCIsXHJcbiAgICAgICAgdmFsdWU6IFwicG9zaXRpdmVcIixcclxuICAgICAgICBwcmljZTogMTM4NCxcclxuICAgICAgICBzdGF0dXM6IFwiUiQgMjUsMDBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDQsXHJcbiAgICAgICAgdGl0bGU6IFwiUmlmYSBUZXN0ZVwiLFxyXG4gICAgICAgIGltZzogXCI0LmpwZ1wiLFxyXG4gICAgICAgIHZhbHVlOiBcInBvc2l0aXZlXCIsXHJcbiAgICAgICAgcHJpY2U6IDEzODQsXHJcbiAgICAgICAgc3RhdHVzOiBcIlIkIDI1LDAwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA1LFxyXG4gICAgICAgIHRpdGxlOiBcIlJpZmEgVGVzdGVcIixcclxuICAgICAgICBpbWc6IFwiNS5qcGdcIixcclxuICAgICAgICB2YWx1ZTogXCJwb3NpdGl2ZVwiLFxyXG4gICAgICAgIHByaWNlOiAxMzg0LFxyXG4gICAgICAgIHN0YXR1czogXCJSJCAyNSwwMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNixcclxuICAgICAgICB0aXRsZTogXCJSaWZhIFRlc3RlXCIsXHJcbiAgICAgICAgaW1nOiBcIjYuanBnXCIsXHJcbiAgICAgICAgdmFsdWU6IFwicG9zaXRpdmVcIixcclxuICAgICAgICBwcmljZTogMTM4NCxcclxuICAgICAgICBzdGF0dXM6IFwiUiQgMjUsMDBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDcsXHJcbiAgICAgICAgdGl0bGU6IFwiUmlmYSBUZXN0ZVwiLFxyXG4gICAgICAgIGltZzogXCI3LmpwZ1wiLFxyXG4gICAgICAgIHZhbHVlOiBcInBvc2l0aXZlXCIsXHJcbiAgICAgICAgcHJpY2U6IDEzODQsXHJcbiAgICAgICAgc3RhdHVzOiBcIlIkIDI1LDAwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA4LFxyXG4gICAgICAgIHRpdGxlOiBcIlJpZmEgVGVzdGVcIixcclxuICAgICAgICBpbWc6IFwiOC5qcGdcIixcclxuICAgICAgICB2YWx1ZTogXCJwb3NpdGl2ZVwiLFxyXG4gICAgICAgIHByaWNlOiAxMzg0LFxyXG4gICAgICAgIHN0YXR1czogXCJSJCAyNSwwMFwiLFxyXG4gICAgfSxcclxuXTtcclxuZnVuY3Rpb24gVG9wQ29sbGVjdGlvbigpIHtcclxuICAgIGNvbnN0IFtvcGVuLCBzZXRPcGVuXSA9IHVzZVN0YXRlKFwicDFcIik7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDw+XHJcbiAgICAgICAgICAgIHtkYXRhLm1hcCgoaXRlbSwgaSkgPT4gKFxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wteGwtNCBjb2wtbGctNiBjb2wtbWQtNlwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29sbGVjdGlvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9XCJ0b3AtY29sbGVjdGlvbi1jb250ZW50IGQtYmxvY2tcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZC1mbGV4IGFsaWduLWl0ZW1zLWNlbnRlclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNlcmlhbFwiPntpICsgMX0uIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtc2hyaW5rLTBcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwidG9wLWltZ1wiPjxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2AvaW1hZ2VzL2l0ZW1zLyR7aXRlbS5pbWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD1cIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aD1cIjcwXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LWdyb3ctMSBtcy0zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNT57aXRlbS50aXRsZX08L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJ0ZXh0LW11dGVkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7LyogPGltZyBzcmM9XCIvaW1hZ2VzL3N2Zy9ldGguc3ZnXCIgYWx0PVwiXCIgd2lkdGg9ezEwfSBjbGFzc05hbWU9XCJtZS0yXCIgLz4gKi99XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aXRlbS5wcmljZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoNSBjbGFzcz17aXRlbS52YWx1ZSA9PSBcInBvc2l0aXZlXCIgPyBcInRleHQtc3VjY2Vzc1wiIDogXCJ0ZXh0LWRhbmdlclwifT57aXRlbS52YWx1ZSA9PSBcInBvc2l0aXZlXCIgPyBcIitcIiA6IFwiLVwifXtpdGVtLnN0YXR1c308L2g1PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgKSl9XHJcblxyXG5cclxuXHJcbiAgICAgICAgPC8+XHJcbiAgICApO1xyXG59XHJcbmV4cG9ydCBkZWZhdWx0IFRvcENvbGxlY3Rpb247XHJcbiJdLCJzb3VyY2VSb290IjoiIn0=