"use strict";
exports.id = 616;
exports.ids = [616];
exports.modules = {

/***/ 4357:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Footer)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8768);
/* harmony import */ var _heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var fetcher_endpoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4932);
/* harmony import */ var utils_get_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4165);








const BEFORE_TITLE = "before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-[15px] before:rounded-[20px] before:bg-white";
const AFTER_TITLE = "after:absolute after:bottom-0 after:left-[20px] after:h-[4px] after:w-[45px] after:rounded-[20px] after:bg-white";
function Footer({ footer  }) {
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    const { 0: logo , 1: phone , 2: email , 3: address , 4: box  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        return [
            (0,utils_get_data__WEBPACK_IMPORTED_MODULE_7__/* .getDataFromObject */ .l)(footer, "logo.data.attributes.formats.thumbnail.url"),
            (0,utils_get_data__WEBPACK_IMPORTED_MODULE_7__/* .getDataFromObject */ .l)(footer, "phone"),
            (0,utils_get_data__WEBPACK_IMPORTED_MODULE_7__/* .getDataFromObject */ .l)(footer, "email"),
            (0,utils_get_data__WEBPACK_IMPORTED_MODULE_7__/* .getDataFromObject */ .l)(footer, "address"),
            (0,utils_get_data__WEBPACK_IMPORTED_MODULE_7__/* .getDataFromObject */ .l)(footer, "box"), 
        ];
    }, [
        footer
    ]);
    if (!logo || !phone || !email || !address || !box) return null;
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("footer", {
        className: `bg-primary bg-[url('/images/bg10.png')] bg-cover  bg-center bg-no-repeat`,
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "container py-[80px] px-[30px] md:px-0",
                children: [
                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                        className: "text-body-2 mb-[30px] items-center justify-between border-b pb-[30px] text-white md:flex",
                        children: [
                            logo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                    href: "/",
                                    locale: locale,
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_4___default()), {
                                        src: `${fetcher_endpoint__WEBPACK_IMPORTED_MODULE_6__/* ["default"].BASE_URL */ .Z.BASE_URL}${logo}`,
                                        width: 100,
                                        height: 80
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: "flex items-center space-x-[10px]",
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.DeviceMobileIcon, {
                                                width: 50
                                            }),
                                            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: phone
                                                    }),
                                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                        children: email
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_outline__WEBPACK_IMPORTED_MODULE_2__.LocationMarkerIcon, {
                                                width: 50
                                            }),
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                                    children: address
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "text-white",
                        children: box.map((fl, index)=>{
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                className: `inline-block h-full w-1/2 align-top md:w-1/4 ${index !== 0 ? "mb-[30px] md:mb-0 md:pl-[100px]" : ""}`,
                                children: [
                                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                                        className: [
                                            "text-heading-4 relative mb-[30px] pb-[10px]",
                                            BEFORE_TITLE,
                                            AFTER_TITLE, 
                                        ].join(" "),
                                        children: fl.text
                                    }),
                                    fl.description && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                                        children: fl.description
                                    }),
                                    fl.links && fl.links.length > 0 && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        children: fl.links.map((l)=>{
                                            return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: "py-[5px] transition-all hover:pl-[10px]",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_3___default()), {
                                                    href: l.href,
                                                    locale: locale,
                                                    children: l.text
                                                })
                                            }, l.href);
                                        })
                                    })
                                ]
                            }, index);
                        })
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "text-body-1 bg-[#b3a1ff] py-[15px] text-center text-white",
                children: "Copyright \xa9 2021 Webdanhgia. All rights reserved."
            })
        ]
    });
};


/***/ }),

/***/ 8798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Header)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1143);
/* harmony import */ var _heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(1664);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(1853);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var utils_get_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4165);
/* harmony import */ var fetcher_endpoint__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(4932);








function Header({ header  }) {
    const { 0: sticky , 1: setSticky  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);
    const { locale  } = (0,next_router__WEBPACK_IMPORTED_MODULE_5__.useRouter)();
    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{
        function doSomeThing() {
            if (window.scrollY !== 0) {
                setSticky(true);
            } else {
                setSticky(false);
            }
        }
        document.addEventListener("scroll", doSomeThing);
        return ()=>{
            document.removeEventListener("scroll", doSomeThing);
        };
    }, []);
    const stickyCss = (0,react__WEBPACK_IMPORTED_MODULE_1__.useMemo)(()=>{
        if (sticky) {
            return "shadow-1 bg-white fixed";
        }
        return "bg-transparent";
    }, [
        sticky
    ]);
    const logo = (0,utils_get_data__WEBPACK_IMPORTED_MODULE_7__/* .getDataFromObject */ .l)(header, "logo.data.attributes.formats.thumbnail.url");
    const links = (0,utils_get_data__WEBPACK_IMPORTED_MODULE_7__/* .getDataFromObject */ .l)(header, "links");
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("header", {
        className: [
            "top-0 left-0 right-0 z-10 transition-all",
            stickyCss
        ].join(" "),
        children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
            className: "container flex items-center justify-between ",
            children: [
                logo && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    className: "cursor-pointer",
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                        href: "/",
                        locale: locale,
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {
                            src: `${fetcher_endpoint__WEBPACK_IMPORTED_MODULE_6__/* ["default"].BASE_URL */ .Z.BASE_URL}${logo}`,
                            width: 100,
                            height: 80
                        })
                    })
                }),
                /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                        className: "flex cursor-pointer items-center space-x-[30px]",
                        children: links && links.length > 0 && links.map((h)=>{
                            const hasChild = h.child && h.child.length > 0;
                            const hasAnimation = hasChild ? "group" : "";
                            return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("li", {
                                className: [
                                    "relative",
                                    hasAnimation
                                ].join(" "),
                                children: [
                                    /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                                        className: "flex items-center py-[30px]",
                                        children: [
                                            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                href: h.href,
                                                locale: locale,
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                    className: "inline-block font-semibold group-hover:animate-up-to-down",
                                                    children: h.text
                                                })
                                            }),
                                            hasChild && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(_heroicons_react_solid__WEBPACK_IMPORTED_MODULE_3__.ChevronDownIcon, {
                                                width: 20,
                                                height: 20
                                            })
                                        ]
                                    }),
                                    hasChild && /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("ul", {
                                        className: "absolute mt-[20px] h-0 overflow-auto bg-white py-[2px] opacity-0 transition-all group-hover:mt-0 group-hover:h-auto group-hover:overflow-visible group-hover:opacity-100",
                                        children: h.child && h.child.length > 0 && h.child.map((i)=>/*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("li", {
                                                className: " relative whitespace-nowrap shadow-2",
                                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_4___default()), {
                                                    href: i.href,
                                                    locale: locale,
                                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("a", {
                                                        className: [
                                                            "inline-block w-[200px] px-[30px] py-[10px]  duration-300  hover:pl-[50px] hover:text-primary",
                                                            `after:absolute after:top-[22px] after:left-[28px]
                                after:h-[2px] after:w-[0px]  
                                after:bg-primary after:transition-all after:content-[''] hover:after:w-[15px]`, 
                                                        ].join(" "),
                                                        children: i.text
                                                    })
                                                })
                                            }, `${i.text} ${h.text}`))
                                    })
                                ]
                            }, h.text);
                        })
                    })
                })
            ]
        })
    });
};


/***/ }),

/***/ 4165:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "l": () => (/* binding */ getDataFromObject)
/* harmony export */ });
function getDataFromObject(object, key) {
    try {
        const keys = key.split(".");
        let value = object;
        for (const k of keys){
            value = value[k];
        }
        return value || null;
    } catch (err) {
        return null;
    }
}


/***/ })

};
;