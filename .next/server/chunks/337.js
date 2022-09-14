"use strict";
exports.id = 337;
exports.ids = [337];
exports.modules = {

/***/ 9337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Button)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


function Button(props) {
    switch(props.version){
        case "1":
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    disabled: props.disabled,
                    onClick: props.onClick,
                    className: [
                        props.disabled ? "cursor-not-allowed" : "",
                        "text-heading-6 rounded-[10px]  bg-primary py-[10px] px-[30px]", 
                    ].join(" "),
                    children: props.children
                });
            }
        default:
            {
                return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
                    disabled: props.disabled,
                    onClick: props.onClick,
                    className: [
                        props.disabled ? "cursor-not-allowed" : "",
                        "text-heading-6 rounded-[10px] bg-bg-primary py-[10px] px-[30px] text-primary", 
                    ].join(" "),
                    children: props.children
                });
            }
    }
};


/***/ })

};
;