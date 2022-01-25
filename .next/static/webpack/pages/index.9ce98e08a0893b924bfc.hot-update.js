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
  value: "negative",
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
  value: "negative",
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
  value: "negative",
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
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    src: "/images/svg/eth.svg",
                    alt: "",
                    width: 10,
                    className: "me-2"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 91,
                    columnNumber: 41
                  }, _this), item.price]
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9lbGVtZW50cy9Ub3BDb2xsZWN0aW9uLmpzIl0sIm5hbWVzIjpbImRhdGEiLCJpZCIsInRpdGxlIiwiaW1nIiwidmFsdWUiLCJwcmljZSIsInN0YXR1cyIsImZvbGxvdyIsIlRvcENvbGxlY3Rpb24iLCJ1c2VTdGF0ZSIsIm9wZW4iLCJzZXRPcGVuIiwibWFwIiwiaXRlbSIsImkiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBLElBQU1BLElBQUksR0FBRyxDQUNUO0FBQ0lDLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBRFMsRUFTVDtBQUNJTCxJQUFFLEVBQUUsQ0FEUjtBQUVJQyxPQUFLLEVBQUUsWUFGWDtBQUdJSyxRQUFNLEVBQUUsSUFIWjtBQUlJSixLQUFHLEVBQUUsT0FKVDtBQUtJQyxPQUFLLEVBQUUsVUFMWDtBQU1JQyxPQUFLLEVBQUUsSUFOWDtBQU9JQyxRQUFNLEVBQUU7QUFQWixDQVRTLEVBa0JUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBbEJTLEVBMEJUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lDLEtBQUcsRUFBRSxPQUhUO0FBSUlDLE9BQUssRUFBRSxVQUpYO0FBS0lDLE9BQUssRUFBRSxJQUxYO0FBTUlDLFFBQU0sRUFBRTtBQU5aLENBMUJTLEVBa0NUO0FBQ0lMLElBQUUsRUFBRSxDQURSO0FBRUlDLE9BQUssRUFBRSxZQUZYO0FBR0lD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REwsbUJBREo7QUFrQ0g7O0dBcENRRSxhOztLQUFBQSxhO0FBcUNNQSw0RUFBZiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC45Y2U5OGUwOGEwODkzYjkyNGJmYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiXHJcbmNvbnN0IGRhdGEgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDEsXHJcbiAgICAgICAgdGl0bGU6IFwiUmlmYSBUZXN0ZVwiLFxyXG4gICAgICAgIGltZzogXCIxLmpwZ1wiLFxyXG4gICAgICAgIHZhbHVlOiBcInBvc2l0aXZlXCIsXHJcbiAgICAgICAgcHJpY2U6IDEzODQsXHJcbiAgICAgICAgc3RhdHVzOiBcIlIkIDI1LDAwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiAyLFxyXG4gICAgICAgIHRpdGxlOiBcIlJpZmEgVGVzdGVcIixcclxuICAgICAgICBmb2xsb3c6IHRydWUsXHJcbiAgICAgICAgaW1nOiBcIjIuanBnXCIsXHJcbiAgICAgICAgdmFsdWU6IFwicG9zaXRpdmVcIixcclxuICAgICAgICBwcmljZTogMTM4NCxcclxuICAgICAgICBzdGF0dXM6IFwiUiQgMjUsMDBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDMsXHJcbiAgICAgICAgdGl0bGU6IFwiUmlmYSBUZXN0ZVwiLFxyXG4gICAgICAgIGltZzogXCIzLmpwZ1wiLFxyXG4gICAgICAgIHZhbHVlOiBcIm5lZ2F0aXZlXCIsXHJcbiAgICAgICAgcHJpY2U6IDEzODQsXHJcbiAgICAgICAgc3RhdHVzOiBcIlIkIDI1LDAwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIHRpdGxlOiBcIlJpZmEgVGVzdGVcIixcclxuICAgICAgICBpbWc6IFwiNC5qcGdcIixcclxuICAgICAgICB2YWx1ZTogXCJwb3NpdGl2ZVwiLFxyXG4gICAgICAgIHByaWNlOiAxMzg0LFxyXG4gICAgICAgIHN0YXR1czogXCJSJCAyNSwwMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogNSxcclxuICAgICAgICB0aXRsZTogXCJSaWZhIFRlc3RlXCIsXHJcbiAgICAgICAgaW1nOiBcIjUuanBnXCIsXHJcbiAgICAgICAgdmFsdWU6IFwibmVnYXRpdmVcIixcclxuICAgICAgICBwcmljZTogMTM4NCxcclxuICAgICAgICBzdGF0dXM6IFwiUiQgMjUsMDBcIixcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgaWQ6IDYsXHJcbiAgICAgICAgdGl0bGU6IFwiUmlmYSBUZXN0ZVwiLFxyXG4gICAgICAgIGltZzogXCI2LmpwZ1wiLFxyXG4gICAgICAgIHZhbHVlOiBcInBvc2l0aXZlXCIsXHJcbiAgICAgICAgcHJpY2U6IDEzODQsXHJcbiAgICAgICAgc3RhdHVzOiBcIlIkIDI1LDAwXCIsXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIGlkOiA3LFxyXG4gICAgICAgIHRpdGxlOiBcIlJpZmEgVGVzdGVcIixcclxuICAgICAgICBpbWc6IFwiNy5qcGdcIixcclxuICAgICAgICB2YWx1ZTogXCJuZWdhdGl2ZVwiLFxyXG4gICAgICAgIHByaWNlOiAxMzg0LFxyXG4gICAgICAgIHN0YXR1czogXCJSJCAyNSwwMFwiLFxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBpZDogOCxcclxuICAgICAgICB0aXRsZTogXCJSaWZhIFRlc3RlXCIsXHJcbiAgICAgICAgaW1nOiBcIjguanBnXCIsXHJcbiAgICAgICAgdmFsdWU6IFwicG9zaXRpdmVcIixcclxuICAgICAgICBwcmljZTogMTM4NCxcclxuICAgICAgICBzdGF0dXM6IFwiUiQgMjUsMDBcIixcclxuICAgIH0sXHJcbl07XHJcbmZ1bmN0aW9uIFRvcENvbGxlY3Rpb24oKSB7XHJcbiAgICBjb25zdCBbb3Blbiwgc2V0T3Blbl0gPSB1c2VTdGF0ZShcInAxXCIpO1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8PlxyXG4gICAgICAgICAgICB7ZGF0YS5tYXAoKGl0ZW0sIGkpID0+IChcclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLXhsLTQgY29sLWxnLTYgY29sLW1kLTZcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2NvbGxlY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPVwidG9wLWNvbGxlY3Rpb24tY29udGVudCBkLWJsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImQtZmxleCBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9XCJzZXJpYWxcIj57aSArIDF9LiA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmbGV4LXNocmluay0wXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInRvcC1pbWdcIj48aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgL2ltYWdlcy9pdGVtcy8ke2l0ZW0uaW1nfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9XCJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9XCI3MFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleC1ncm93LTEgbXMtM1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDU+e2l0ZW0udGl0bGV9PC9oNT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwidGV4dC1tdXRlZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9XCIvaW1hZ2VzL3N2Zy9ldGguc3ZnXCIgYWx0PVwiXCIgd2lkdGg9ezEwfSBjbGFzc05hbWU9XCJtZS0yXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLnByaWNlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPXtpdGVtLnZhbHVlID09IFwicG9zaXRpdmVcIiA/IFwidGV4dC1zdWNjZXNzXCIgOiBcInRleHQtZGFuZ2VyXCJ9PntpdGVtLnZhbHVlID09IFwicG9zaXRpdmVcIiA/IFwiK1wiIDogXCItXCJ9e2l0ZW0uc3RhdHVzfTwvaDU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApKX1cclxuXHJcblxyXG5cclxuICAgICAgICA8Lz5cclxuICAgICk7XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgVG9wQ29sbGVjdGlvbjtcclxuIl0sInNvdXJjZVJvb3QiOiIifQ==