"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888];
exports.modules = {

/***/ 4932:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const END_POINTS = {
    LAYOUT: "/api/webdanhgia?populate[header][populate][0]=links&&populate[header][populate][1]=logo&&populate[footer][populate][2]=logo&&populate[footer][populate][3]=box.links",
    TAG: "/api/tags",
    CATEGORY: "/api/categories",
    BLOG: "/api/blogs",
    BASE_URL: "http://165.22.253.251:1337"
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (END_POINTS);


/***/ }),

/***/ 619:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
// EXTERNAL MODULE: ./src/fetcher/endpoint.ts
var endpoint = __webpack_require__(4932);
// EXTERNAL MODULE: ./src/utils/get-data.tsx
var get_data = __webpack_require__(4165);
;// CONCATENATED MODULE: ./src/components/layout/footer.tsx








const BEFORE_TITLE = "before:absolute before:bottom-0 before:left-0 before:h-[4px] before:w-[15px] before:rounded-[20px] before:bg-white";
const AFTER_TITLE = "after:absolute after:bottom-0 after:left-[20px] after:h-[4px] after:w-[45px] after:rounded-[20px] after:bg-white";
function Footer({ footer  }) {
    const { locale  } = (0,router_.useRouter)();
    const { 0: logo , 1: phone , 2: email , 3: address , 4: box  } = (0,external_react_.useMemo)(()=>{
        return [
            (0,get_data/* getDataFromObject */.l)(footer, "logo.data.attributes.formats.thumbnail.url"),
            (0,get_data/* getDataFromObject */.l)(footer, "phone"),
            (0,get_data/* getDataFromObject */.l)(footer, "email"),
            (0,get_data/* getDataFromObject */.l)(footer, "address"),
            (0,get_data/* getDataFromObject */.l)(footer, "box"), 
        ];
    }, [
        footer
    ]);
    if (!logo || !phone || !email || !address || !box) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("footer", {
        className: `bg-primary bg-[url('/images/bg10.png')] bg-cover  bg-center bg-no-repeat`,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container py-[80px] px-[30px] md:px-0",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "text-body-2 mb-[30px] items-center justify-between border-b pb-[30px] text-white md:flex",
                        children: [
                            logo && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "/",
                                    locale: locale,
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                        src: `${endpoint/* default.BASE_URL */.Z.BASE_URL}${logo}`,
                                        width: 100,
                                        height: 80
                                    })
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex items-center space-x-[10px]",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(outline_.DeviceMobileIcon, {
                                                width: 50
                                            }),
                                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                                children: [
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: phone
                                                    }),
                                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                        children: email
                                                    })
                                                ]
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(outline_.LocationMarkerIcon, {
                                                width: 50
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: address
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "text-white",
                        children: box.map((fl, index)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: `inline-block h-full w-1/2 align-top md:w-1/4 ${index !== 0 ? "mb-[30px] md:mb-0 md:pl-[100px]" : ""}`,
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                                        className: [
                                            "text-heading-4 relative mb-[30px] pb-[10px]",
                                            BEFORE_TITLE,
                                            AFTER_TITLE, 
                                        ].join(" "),
                                        children: fl.text
                                    }),
                                    fl.description && /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        children: fl.description
                                    }),
                                    fl.links && fl.links.length > 0 && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        children: fl.links.map((l)=>{
                                            return /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: "py-[5px] transition-all hover:pl-[10px]",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
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
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-body-1 bg-[#b3a1ff] py-[15px] text-center text-white",
                children: "Copyright \xa9 2021 Webdanhgia. All rights reserved."
            })
        ]
    });
};

// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
;// CONCATENATED MODULE: ./src/components/layout/header.tsx








function Header({ header  }) {
    const { 0: sticky , 1: setSticky  } = (0,external_react_.useState)(false);
    const { locale  } = (0,router_.useRouter)();
    (0,external_react_.useEffect)(()=>{
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
    const stickyCss = (0,external_react_.useMemo)(()=>{
        if (sticky) {
            return "shadow-1 bg-white";
        }
        return "bg-transparent";
    }, [
        sticky
    ]);
    const logo = (0,get_data/* getDataFromObject */.l)(header, "logo.data.attributes.formats.thumbnail.url");
    const links = (0,get_data/* getDataFromObject */.l)(header, "links");
    return /*#__PURE__*/ jsx_runtime_.jsx("header", {
        className: [
            " fixed top-0 left-0 right-0 z-10 transition-all",
            stickyCss, 
        ].join(" "),
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "container flex items-center justify-between ",
            children: [
                logo && /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        locale: locale,
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            src: `${endpoint/* default.BASE_URL */.Z.BASE_URL}${logo}`,
                            width: 100,
                            height: 80
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                        className: "flex cursor-pointer items-center space-x-[30px]",
                        children: links && links.length > 0 && links.map((h)=>{
                            const hasChild = h.child && h.child.length > 0;
                            const hasAnimation = hasChild ? "group" : "";
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                className: [
                                    "relative",
                                    hasAnimation
                                ].join(" "),
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex items-center py-[30px]",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: h.href,
                                                locale: locale,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                                    className: "inline-block font-semibold group-hover:animate-up-to-down",
                                                    children: h.text
                                                })
                                            }),
                                            hasChild && /*#__PURE__*/ jsx_runtime_.jsx(solid_.ChevronDownIcon, {
                                                width: 20,
                                                height: 20
                                            })
                                        ]
                                    }),
                                    hasChild && /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                                        className: "absolute mt-[20px] h-0 overflow-auto bg-white py-[2px] opacity-0 transition-all group-hover:mt-0 group-hover:h-auto group-hover:overflow-visible group-hover:opacity-100",
                                        children: h.child && h.child.length > 0 && h.child.map((i)=>/*#__PURE__*/ jsx_runtime_.jsx("li", {
                                                className: " relative whitespace-nowrap shadow-2",
                                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                    href: i.href,
                                                    locale: locale,
                                                    children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
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

;// CONCATENATED MODULE: ./src/components/layout/index.tsx




function Layout({ children , header , footer  }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex min-h-screen flex-col",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(Header, {
                header: header
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("main", {
                className: "static z-0 flex-1",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(Footer, {
                footer: footer
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/pages/_app.tsx





function MyApp({ Component , pageProps  }) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Layout, {
        header: (0,get_data/* getDataFromObject */.l)(pageProps, "layout.data.attributes.header"),
        footer: (0,get_data/* getDataFromObject */.l)(pageProps, "layout.data.attributes.footer"),
        children: /*#__PURE__*/ jsx_runtime_.jsx(Component, {
            ...pageProps
        })
    });
}
/* harmony default export */ const _app = (MyApp);


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


/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,61], () => (__webpack_exec__(619)));
module.exports = __webpack_exports__;

})();