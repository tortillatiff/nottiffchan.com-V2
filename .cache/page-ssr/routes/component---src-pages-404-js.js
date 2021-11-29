"use strict";
exports.id = "component---src-pages-404-js";
exports.ids = ["component---src-pages-404-js"];
exports.modules = {

/***/ "./src/pages/404.js":
/*!**************************!*\
  !*** ./src/pages/404.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gatsby */ "./.cache/gatsby-browser-entry.js");
/* harmony import */ var _emotion_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @emotion/react */ "./node_modules/@emotion/react/dist/emotion-react.esm.js");

 // styles


const pageStyles = {
  color: "#232129",
  padding: "96px",
  fontFamily: "-apple-system, Roboto, sans-serif, serif"
};
const headingStyles = {
  marginTop: 0,
  marginBottom: 64,
  maxWidth: 320
};
const paragraphStyles = {
  marginBottom: 48
};
const codeStyles = {
  color: "#8A6534",
  padding: 4,
  backgroundColor: "#FFF4DB",
  fontSize: "1.25rem",
  borderRadius: 4
}; // markup

const NotFoundPage = () => {
  return (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("main", {
    style: pageStyles
  }, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("title", null, "Not found"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("h1", {
    style: headingStyles
  }, "Page not found"), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("p", {
    style: paragraphStyles
  }, "Sorry", " ", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("span", {
    role: "img",
    "aria-label": "Pensive emoji"
  }, "\uD83D\uDE14"), " ", "we couldn\u2019t find what you were looking for.", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", null),  true ? (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(react__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", null), "Try creating a page in ", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("code", {
    style: codeStyles
  }, "src/pages/"), ".", (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", null)) : 0, (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)("br", null), (0,_emotion_react__WEBPACK_IMPORTED_MODULE_2__.jsx)(gatsby__WEBPACK_IMPORTED_MODULE_1__.Link, {
    to: "/"
  }, "Go home"), "."));
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NotFoundPage);

/***/ })

};
;
//# sourceMappingURL=component---src-pages-404-js.js.map