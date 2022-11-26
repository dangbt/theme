"use strict";
(() => {
var exports = {};
exports.id = 552;
exports.ids = [552];
exports.modules = {

/***/ 5761:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ about_us),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/button/index.tsx
var components_button = __webpack_require__(9337);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/i18n/vn.ts
const vnVN = {
    home: {
        intro: {
            title: "Đổi mới v\xe0 s\xe1ng tạo",
            title1: " X\xe2y dựng",
            title2: "website",
            title3: " tuyệt đẹp với c\xf4ng nghệ ti\xean tiến nhất",
            para: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus.",
            button: "T\xecm hiểu th\xeam"
        },
        aboutUs: {
            button: {
                aboutUs: "About us",
                learnMore: "Learn More"
            },
            title: "How We Can Help You Achieve Your Business Goal",
            title1: "Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur ante eros id urna. Mauris luctus nulla ut pharetra tempor.",
            title2: "Mauris egestas eleifend sapien eu malesuada. Phasellus at metus eget sapien tristique accumsan non sit amet augue."
        },
        feature: {
            button: {
                feature: "Feature"
            },
            title: "Our Working Process To Help Your Boost Your Business",
            title1: "Idea & Analysis Gathering",
            title2: "Designing & Developing",
            title3: "Testing & Lunching",
            para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            para2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            para3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        countion: {
            client: "Kh\xe1ch h\xe0ng",
            project: "Dự \xe1n ho\xe0n th\xe0nh",
            country: "Đất nước",
            years: "Năm hoạt động"
        }
    }
};
/* harmony default export */ const vn = (vnVN);

;// CONCATENATED MODULE: ./src/i18n/en.ts
const enUS = {
    home: {
        intro: {
            title: " We Create Ideas",
            title1: " Build Stunning",
            title2: " Website",
            title3: " With Slack Agency",
            para: "Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus.",
            button: "Learn More"
        },
        aboutUs: {
            button: {
                aboutUs: "About us",
                learnMore: "Learn More"
            },
            title: "How We Can Help You Achieve Your Business Goal",
            title1: "Integer pretium molestie nisl, non blandit lectus suscipit in. Vivamus tellus diam, iaculis eget nulla sit amet, tincidunt consectetur sem. Suspendisse laoreet, quam sed faucibus feugiat, tortor velit suscipit orci, sed consectetur ante eros id urna. Mauris luctus nulla ut pharetra tempor.",
            title2: "Mauris egestas eleifend sapien eu malesuada. Phasellus at metus eget sapien tristique accumsan non sit amet augue."
        },
        feature: {
            button: {
                feature: "Feature"
            },
            title: "Our Working Process To Help Your Boost Your Business",
            title1: "Idea & Analysis Gathering",
            title2: "Designing & Developing",
            title3: "Testing & Lunching",
            para1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            para2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            para3: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        },
        countion: {
            client: "Clients",
            project: "Projects",
            country: "Counties",
            years: "Years"
        }
    }
};
/* harmony default export */ const en = (enUS);

;// CONCATENATED MODULE: ./src/i18n/index.ts


var Language;
(function(Language) {
    Language["vn"] = "vn";
    Language["en"] = "en";
})(Language || (Language = {}));
const i18n = {
    vn: vn,
    en: en
};
/* harmony default export */ const src_i18n = (i18n);

// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/home-page/components/about-us.tsx







function AboutUsSection() {
    const router = (0,router_.useRouter)();
    const t = src_i18n[router.locale || Language.vn];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "pt-[100px] pb-[70px]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " container grid grid-cols-12 gap-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative col-span-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: "animate-move1",
                                src: "/images/pic4.png",
                                width: 450,
                                height: 450,
                                layout: "responsive",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "dz-media move-box wow fadeIn",
                            "data-wow-duration": "1.6s",
                            "data-wow-delay": "0.8s"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-span-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-[32px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                                children: t.home.aboutUs.button.aboutUs
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-heading-2 mb-[20px] text-secondary",
                            children: t.home.aboutUs.title
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mb-[20px] text-victoria",
                            children: t.home.aboutUs.title1
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mb-[20px] text-victoria",
                            children: t.home.aboutUs.title2
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            locale: "vn",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "inline-block",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                                    children: t.home.aboutUs.button.learnMore
                                })
                            })
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/box/index.tsx


var TYPE_ANIMATION;
(function(TYPE_ANIMATION) {
    TYPE_ANIMATION[TYPE_ANIMATION["translate"] = 0] = "translate";
    TYPE_ANIMATION[TYPE_ANIMATION["shadow"] = 1] = "shadow";
    TYPE_ANIMATION[TYPE_ANIMATION["custom"] = 2] = "custom";
})(TYPE_ANIMATION || (TYPE_ANIMATION = {}));
function Box(props) {
    let animationClass = "";
    switch(props.typeAnimation){
        case TYPE_ANIMATION.translate:
            {
                animationClass = "hover:translate-y-[-15px] shadow-1";
                break;
            }
        case TYPE_ANIMATION.shadow:
            {
                animationClass = "hover:shadow-1";
                break;
            }
        case TYPE_ANIMATION.custom:
            {
                animationClass = props.className;
                break;
            }
    }
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: [
            "rounded-[10px] bg-white p-[30px] transition-all duration-500 ease-in",
            animationClass, 
        ].join(" "),
        children: props.children
    });
};

// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
;// CONCATENATED MODULE: ./src/components/home-page/components/countion.tsx






function CountSection() {
    const router = (0,router_.useRouter)();
    const t = src_i18n[router.locale || Language.vn];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        style: {
            backgroundImage: "url(/images/bg3.png)"
        },
        className: "bg-primary py-[150px]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " container grid grid-cols-12 gap-8",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-span-3 text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box, {
                        typeAnimation: TYPE_ANIMATION.translate,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "inline-block rounded-hafl bg-green p-[15px]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.EmojiHappyIcon, {
                                    className: "mx-auto text-white",
                                    width: 40
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[20px] font-medium",
                                children: t.home.countion.client
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-heading-2 text-primary",
                                children: "9875"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-span-3 translate-y-[15px] text-center ",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box, {
                        typeAnimation: TYPE_ANIMATION.translate,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "inline-block rounded-hafl bg-yellow p-[15px]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.DesktopComputerIcon, {
                                    className: "mx-auto text-white",
                                    width: 40
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[20px] font-medium",
                                children: t.home.countion.project
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-heading-2 text-primary",
                                children: "9875"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-span-3 text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box, {
                        typeAnimation: TYPE_ANIMATION.translate,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "inline-block rounded-hafl bg-blue p-[15px]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.PaperAirplaneIcon, {
                                    className: "mx-auto text-white",
                                    width: 40
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[20px] font-medium",
                                children: t.home.countion.country
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-heading-2 text-primary",
                                children: "9875"
                            })
                        ]
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "col-span-3 translate-y-[15px] text-center",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(Box, {
                        typeAnimation: TYPE_ANIMATION.translate,
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "inline-block rounded-hafl bg-red p-[15px]",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.FlagIcon, {
                                    className: "mx-auto text-white",
                                    width: 40
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {}),
                            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                className: "text-[20px] font-medium",
                                children: t.home.countion.years
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                                className: "text-heading-2 text-primary",
                                children: "9875"
                            })
                        ]
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/home-page/components/feature.tsx







function FeatureSection() {
    const router = (0,router_.useRouter)();
    const t = src_i18n[router.locale || Language.vn];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "pt-[100px] pb-[70px]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " container grid grid-cols-12 gap-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-span-6 flex flex-col justify-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "mb-[32px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                                children: t.home.feature.button.feature
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-heading-1 mb-[20px] text-secondary",
                            children: t.home.feature.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            children: [
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "group flex items-center space-x-[20px]",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "relative min-h-[165px] min-w-[165px] ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    className: "group-hover:animate-rotate360",
                                                    src: "/images/feature-red.png",
                                                    alt: "",
                                                    width: 165,
                                                    height: 165,
                                                    layout: "responsive"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(outline_.UserIcon, {
                                                    style: {
                                                        transform: "translate(-50%, -50%)"
                                                    },
                                                    className: "absolute top-[50%] left-[50%] text-white",
                                                    width: 40
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "w-full",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "text-heading-4 text-secondary",
                                                    children: t.home.feature.title1
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: t.home.feature.para1
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "group ml-[100px] flex items-center space-x-[20px]",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "relative min-h-[165px] min-w-[165px] ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    className: "group-hover:animate-rotate360",
                                                    src: "/images/feature-yellow.png",
                                                    alt: "",
                                                    width: 165,
                                                    height: 165,
                                                    layout: "responsive"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(outline_.DesktopComputerIcon, {
                                                    style: {
                                                        transform: "translate(-50%, -50%)"
                                                    },
                                                    className: "absolute top-[50%] left-[50%] text-white",
                                                    width: 40
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "text-heading-4 text-secondary",
                                                    children: t.home.feature.title2
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: t.home.feature.para2
                                                })
                                            ]
                                        })
                                    ]
                                }),
                                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "group flex items-center space-x-[20px]",
                                    children: [
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            className: "relative min-h-[165px] min-w-[165px] ",
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                                    className: "group-hover:animate-rotate360",
                                                    src: "/images/feature-green.png",
                                                    alt: "",
                                                    width: 165,
                                                    height: 165,
                                                    layout: "responsive"
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx(outline_.PaperAirplaneIcon, {
                                                    style: {
                                                        transform: "translate(-50%, -50%)"
                                                    },
                                                    className: "absolute top-[50%] left-[50%] text-white",
                                                    width: 40
                                                })
                                            ]
                                        }),
                                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                            children: [
                                                /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                                                    className: "text-heading-4 text-secondary",
                                                    children: t.home.feature.title3
                                                }),
                                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                                    children: t.home.feature.para3
                                                })
                                            ]
                                        })
                                    ]
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "relative col-span-6",
                    children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            width: 370,
                            height: 370,
                            layout: "responsive",
                            className: "animate-move2",
                            src: "/images/pic5.png",
                            alt: ""
                        })
                    })
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/home-page/components/intro.tsx







function IntroSection() {
    const router = (0,router_.useRouter)();
    const t = src_i18n[router.locale || Language.vn];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "flex min-h-[750px] items-center justify-center bg-no-repeat pt-[100px] pb-[70px]",
        style: {
            backgroundImage: "url(/images/pic2.png)"
        },
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " container grid grid-cols-12 gap-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "col-span-6 flex flex-col justify-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("h6", {
                            className: "text-heading-6 mb-[20px] uppercase tracking-widest text-primary",
                            children: t.home.intro.title
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("h1", {
                            className: "text-heading-1 mb-[20px] text-secondary",
                            children: [
                                t.home.intro.title1,
                                " ",
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "text-primary",
                                    children: t.home.intro.title2
                                }),
                                " ",
                                t.home.intro.title3
                            ]
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("p", {
                            className: "mb-[20px] text-victoria",
                            children: t.home.intro.para
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            locale: "vn",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                                className: "inline-block",
                                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                                    children: t.home.intro.button
                                })
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "relative col-span-6",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "absolute left-0 right-0",
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                className: "animate-move1",
                                src: "/images/pic1.png",
                                width: 450,
                                height: 386,
                                layout: "responsive",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                width: 450,
                                height: 386,
                                layout: "responsive",
                                className: "animate-move2",
                                src: "/images/pic3.png",
                                alt: ""
                            })
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "dz-media move-box wow fadeIn",
                            "data-wow-duration": "1.6s",
                            "data-wow-delay": "0.8s"
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/home-page/components/services.tsx






const hoverCss = "shadow-1 after:scale-110  before:scale-110 before:opacity-1 after:opacity-1 ";
const services_Box = ({ setIndexHover , indexHover , index , color , title , desc  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onMouseEnter: setIndexHover,
        className: [
            "group relative col-span-3 rounded-[15px] p-[40px]",
            `transition-all before:absolute before:left-0 before:right-0 before:bottom-0 before:top-0 before:bg-[image:url('/images/services-bg-2.png')] before:bg-no-repeat before:transition-all before:duration-500 after:absolute  after:left-0 after:right-0 after:bottom-0  after:top-0 after:bg-[image:url('/images/services-bg.png')] after:bg-no-repeat after:transition-all after:duration-500`,
            indexHover === index ? hoverCss : " before:opacity-0 after:opacity-0", 
        ].join(" "),
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-[20px] text-center",
                children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: `inline-block rounded-hafl bg-${color} p-[20px] shadow-${color}`,
                    children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.PaperAirplaneIcon, {
                        width: 40,
                        className: "text-white group-hover:animate-up-to-down"
                    })
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h4", {
                        className: "text-heading-4",
                        children: title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        children: desc
                    })
                ]
            })
        ]
    });
};
function ServicesSection() {
    const router = (0,router_.useRouter)();
    const { 0: indexHover , 1: setIndexHover  } = (0,external_react_.useState)(1);
    const t = src_i18n[router.locale || Language.vn];
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "pt-[100px] pb-[70px]",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: " container",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "mb-[40px] space-y-[20px] text-center",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                            children: "Services"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("h2", {
                            className: "text-heading-2",
                            children: "Provide Awesome Service To You"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: " grid grid-cols-11 gap-8",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-span-1"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(services_Box, {
                            indexHover: indexHover,
                            index: 1,
                            setIndexHover: ()=>setIndexHover(1),
                            color: "yellow",
                            title: "Strategy & Research",
                            desc: " Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(services_Box, {
                            indexHover: indexHover,
                            index: 2,
                            setIndexHover: ()=>setIndexHover(2),
                            color: "red",
                            title: "Web Development",
                            desc: " Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(services_Box, {
                            indexHover: indexHover,
                            index: 3,
                            setIndexHover: ()=>setIndexHover(3),
                            color: "green",
                            title: "Web Solution",
                            desc: "Fusce sit amet dui vitae urna tristique imperdiet. Donec eget sapien euismod, faucibus nibh non, consequat elit. Praesent sed vehicula."
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "col-span-1"
                        })
                    ]
                })
            ]
        })
    });
};

;// CONCATENATED MODULE: ./src/components/home-page/index.tsx







function HomePage() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(IntroSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(CountSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(ServicesSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(AboutUsSection, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(FeatureSection, {})
        ]
    });
};

// EXTERNAL MODULE: ./src/fetcher/fetcher.ts + 2 modules
var fetcher = __webpack_require__(1274);
;// CONCATENATED MODULE: ./src/pages/about-us.tsx





const Home = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: " Web chia sẻ | Về ch\xfang t\xf4i"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "description",
                        content: "Webreview | SEO | Marketing"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(HomePage, {})
        ]
    });
};
const getServerSideProps = async ()=>{
    const layout = await (0,fetcher/* getLayoutData */.rW)();
    return {
        props: {
            layout
        }
    };
};
/* harmony default export */ const about_us = (Home);


/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

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

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 1853:
/***/ ((module) => {

module.exports = require("next/router");

/***/ }),

/***/ 7104:
/***/ ((module) => {

module.exports = require("qs");

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
var __webpack_exports__ = __webpack_require__.X(0, [952,61,932,274,337], () => (__webpack_exec__(5761)));
module.exports = __webpack_exports__;

})();