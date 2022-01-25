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
                  children: [item.price, " n\xFAmeros"]
                }, void 0, true, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbGVtZW50cy9Ub3BDb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiaW1nIiwidmFsdWUiLCJwcmljZSIsInN0YXR1cyIsImZvbGxvdyIsIlRvcENvbGxlY3Rpb24iLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwibWFwIiwiaXRlbSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLElBQUksR0FBRyxDQUNUO0FBQ0lDLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBRFMsRUFTVDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsWUFGWDtBQUdJSyxRQUFNLEVBQUUsSUFIWjtBQUlJSixLQUFHLEVBQUUsT0FKVDtBQUtJQyxPQUFLLEVBQUUsVUFMWDtBQU1JQyxPQUFLLEVBQUUsSUFOWDtBQU9JQyxRQUFNLEVBQUU7QUFQWixDQVRTLEVBa0JUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBbEJTLEVBMEJUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBMUJTLEVBa0NUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBbENTLEVBMENUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBMUNTLEVBa0RUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBbERTLEVBMERUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBMURTLENBQWI7O0FBbUVBLFNBQVNFLGFBQVQsR0FBeUI7QUFBQTs7QUFBQTs7QUFBQSxrQkFDR0Msc0RBQVEsQ0FBQyxJQUFELENBRFg7QUFBQSxNQUNkQyxJQURjO0FBQUEsTUFDUkMsT0FEUTs7QUFFckIsc0JBQ0k7QUFBQSxjQUNLWCxJQUFJLENBQUNZLEdBQUwsQ0FBUyxVQUFDQyxJQUFELEVBQU9DLENBQVA7QUFBQSwwQkFDTjtBQUFLLGlCQUFTLEVBQUMsNEJBQWY7QUFBQSwrQkFDSSxxRUFBQyxnREFBRDtBQUFNLGNBQUksRUFBQyxhQUFYO0FBQUEsaUNBQ0k7QUFBRyxxQkFBUyxFQUFDLGdDQUFiO0FBQUEsbUNBQ0k7QUFBSyx1QkFBUyxFQUFDLDJCQUFmO0FBQUEsc0NBQ0k7QUFBTSx5QkFBUyxFQUFDLFFBQWhCO0FBQUEsMkJBQTBCQSxDQUFDLEdBQUcsQ0FBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBRUk7QUFBSyx5QkFBUyxFQUFDLGVBQWY7QUFBQSx1Q0FDSTtBQUFNLDJCQUFTLEVBQUMsU0FBaEI7QUFBQSx5Q0FBMEI7QUFDdEIsNkJBQVMsRUFBQyxXQURZO0FBRXRCLHVCQUFHLDBCQUFtQkQsSUFBSSxDQUFDVixHQUF4QixDQUZtQjtBQUd0Qix1QkFBRyxFQUFDLEVBSGtCO0FBSXRCLHlCQUFLLEVBQUM7QUFKZ0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUExQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFGSixlQVVJO0FBQUsseUJBQVMsRUFBQyxrQkFBZjtBQUFBLHdDQUNJO0FBQUEsNEJBQUtVLElBQUksQ0FBQ1g7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBRUk7QUFBRywyQkFBUyxFQUFDLFlBQWI7QUFBQSw2QkFFS1csSUFBSSxDQUFDUixLQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVkosZUFpQkk7QUFBSSx5QkFBT1EsSUFBSSxDQUFDVCxLQUFMLElBQWMsVUFBZCxHQUEyQixjQUEzQixHQUE0QyxhQUF2RDtBQUFBLDJCQUF1RVMsSUFBSSxDQUFDVCxLQUFMLElBQWMsVUFBZCxHQUEyQixHQUEzQixHQUFpQyxHQUF4RyxFQUE2R1MsSUFBSSxDQUFDUCxNQUFsSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBakJKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURNO0FBQUEsS0FBVDtBQURMLG1CQURKO0FBa0NIOztHQXBDUUUsYTs7S0FBQUEsYTtBQXFDTUEsNEVBQWYiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvaW5kZXguNTlmNjhhNzg3ZTE5OTMxOGQ1MTEuaG90LXVwZGF0ZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBMaW5rIGZyb20gXCJuZXh0L2xpbmtcIlxyXG5jb25zdCBkYXRhID0gW1xyXG4gICAge1xyXG4gICAgICAgIGlkOiAxLFxyXG4gICAgICAgIHRpdGxlOiBcIlJpZmEgVGVzdGVcIixcclxuICAgICAgICBpbWc6IFwiMS5qcGdcIixcclxuICAgICAgICB2YWx1ZTogXCJwb3NpdGl2ZVwiLFxyXG4gICAgICAgIHByaWNlOiAxMzg0LFxyXG4gICAgICAgIHN0YXR1czogXCJSJCAyNSwwMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogMixcclxuICAgICAgICB0aXRsZTogXCJSaWZhIFRlc3RlXCIsXHJcbiAgICAgICAgZm9sbG93OiB0cnVlLFxyXG4gICAgICAgIGltZzogXCIyLmpwZ1wiLFxyXG4gICAgICAgIHZhbHVlOiBcInBvc2l0aXZlXCIsXHJcbiAgICAgICAgcHJpY2U6IDEzODQsXHJcbiAgICAgICAgc3RhdHVzOiBcIlIkIDI1LDAwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAzLFxyXG4gICAgICAgIHRpdGxlOiBcIlJpZmEgVGVzdGVcIixcclxuICAgICAgICBpbWc6IFwiMy5qcGdcIixcclxuICAgICAgICB2YWx1ZTogXCJwb3NpdGl2ZVwiLFxyXG4gICAgICAgIHByaWNlOiAxMzg0LFxyXG4gICAgICAgIHN0YXR1czogXCJSJCAyNSwwMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNCxcclxuICAgICAgICB0aXRsZTogXCJSaWZhIFRlc3RlXCIsXHJcbiAgICAgICAgaW1nOiBcIjQuanBnXCIsXHJcbiAgICAgICAgdmFsdWU6IFwicG9zaXRpdmVcIixcclxuICAgICAgICBwcmljZTogMTM4NCxcclxuICAgICAgICBzdGF0dXM6IFwiUiQgMjUsMDBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgdGl0bGU6IFwiUmlmYSBUZXN0ZVwiLFxyXG4gICAgICAgIGltZzogXCI1LmpwZ1wiLFxyXG4gICAgICAgIHZhbHVlOiBcInBvc2l0aXZlXCIsXHJcbiAgICAgICAgcHJpY2U6IDEzODQsXHJcbiAgICAgICAgc3RhdHVzOiBcIlIkIDI1LDAwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA2LFxyXG4gICAgICAgIHRpdGxlOiBcIlJpZmEgVGVzdGVcIixcclxuICAgICAgICBpbWc6IFwiNi5qcGdcIixcclxuICAgICAgICB2YWx1ZTogXCJwb3NpdGl2ZVwiLFxyXG4gICAgICAgIHByaWNlOiAxMzg0LFxyXG4gICAgICAgIHN0YXR1czogXCJSJCAyNSwwMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNyxcclxuICAgICAgICB0aXRsZTogXCJSaWZhIFRlc3RlXCIsXHJcbiAgICAgICAgaW1nOiBcIjcuanBnXCIsXHJcbiAgICAgICAgdmFsdWU6IFwicG9zaXRpdmVcIixcclxuICAgICAgICBwcmljZTogMTM4NCxcclxuICAgICAgICBzdGF0dXM6IFwiUiQgMjUsMDBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDgsXHJcbiAgICAgICAgdGl0bGU6IFwiUmlmYSBUZXN0ZVwiLFxyXG4gICAgICAgIGltZzogXCI4LmpwZ1wiLFxyXG4gICAgICAgIHZhbHVlOiBcInBvc2l0aXZlXCIsXHJcbiAgICAgICAgcHJpY2U6IDEzODQsXHJcbiAgICAgICAgc3RhdHVzOiBcIlIkIDI1LDAwXCIsXHJcbiAgICB9LFxyXG5dO1xyXG5mdW5jdGlvbiBUb3BDb2xsZWN0aW9uKCkge1xyXG4gICAgY29uc3QgW29wZW4sIHNldE9wZW5dID0gdXNlU3RhdGUoXCJwMVwiKTtcclxuICAgIHJldHVybiAoXHJcbiAgICAgICAgPD5cclxuICAgICAgICAgICAge2RhdGEubWFwKChpdGVtLCBpKSA9PiAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC14bC00IGNvbC1sZy02IGNvbC1tZC02XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9jb2xsZWN0aW9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT1cInRvcC1jb2xsZWN0aW9uLWNvbnRlbnQgZC1ibG9ja1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJkLWZsZXggYWxpZ24taXRlbXMtY2VudGVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2VyaWFsXCI+e2kgKyAxfS4gPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1zaHJpbmstMFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJ0b3AtaW1nXCI+PGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YC9pbWFnZXMvaXRlbXMvJHtpdGVtLmltZ31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PVwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPVwiNzBcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXgtZ3Jvdy0xIG1zLTNcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1PntpdGVtLnRpdGxlfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cInRleHQtbXV0ZWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHsvKiA8aW1nIHNyYz1cIi9pbWFnZXMvc3ZnL2V0aC5zdmdcIiBhbHQ9XCJcIiB3aWR0aD17MTB9IGNsYXNzTmFtZT1cIm1lLTJcIiAvPiAqL31cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByaWNlfSBuw7ptZXJvc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPXtpdGVtLnZhbHVlID09IFwicG9zaXRpdmVcIiA/IFwidGV4dC1zdWNjZXNzXCIgOiBcInRleHQtZGFuZ2VyXCJ9PntpdGVtLnZhbHVlID09IFwicG9zaXRpdmVcIiA/IFwiK1wiIDogXCItXCJ9e2l0ZW0uc3RhdHVzfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuXHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVG9wQ29sbGVjdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==