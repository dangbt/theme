"use strict";
(() => {
var exports = {};
exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 4710:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ BlogPage),
  "getServerSideProps": () => (/* binding */ getServerSideProps)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: ./src/components/blog/components/search.tsx
var search = __webpack_require__(1502);
// EXTERNAL MODULE: ./src/components/blog/components/category.tsx
var category = __webpack_require__(6324);
// EXTERNAL MODULE: ./src/components/blog/components/recent-posts.tsx
var recent_posts = __webpack_require__(6050);
// EXTERNAL MODULE: ./src/components/blog/components/archives.tsx
var archives = __webpack_require__(4997);
// EXTERNAL MODULE: ./src/components/blog/components/tags.tsx
var components_tags = __webpack_require__(1559);
// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: ./src/fetcher/endpoint.ts
var endpoint = __webpack_require__(4932);
// EXTERNAL MODULE: ./src/utils/get-data.tsx
var get_data = __webpack_require__(4165);
// EXTERNAL MODULE: ./src/utils/formta-date.tsx
var formta_date = __webpack_require__(4923);
;// CONCATENATED MODULE: ./src/components/blog/components/blog-detail.tsx







function BlogDetailComponent({ blog  }) {
    const { 0: logo , 1: name , 2: description , 3: createdAt , 4: username  } = (0,external_react_.useMemo)(()=>[
            (0,get_data/* getDataFromObject */.l)(blog, "data.attributes.thumnail.data.attributes.formats.large.url"),
            (0,get_data/* getDataFromObject */.l)(blog, "data.attributes.name"),
            (0,get_data/* getDataFromObject */.l)(blog, "data.attributes.description"),
            (0,formta_date/* formatDate */.p)(new Date((0,get_data/* getDataFromObject */.l)(blog, "data.attributes.createdAt"))),
            (0,get_data/* getDataFromObject */.l)(blog, "data.attributes.users_permissions_user.data.attributes.username"), 
        ], [
        blog
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mb-[30px] rounded-[10px] ",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: `${endpoint/* default.BASE_URL */.Z.BASE_URL}${logo}`,
                    alt: "",
                    width: "750px",
                    height: "350px",
                    layout: "responsive",
                    className: "rounded-[10px]"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-[30px flex items-center justify-between",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex space-x-[20px]",
                        children: [
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex space-x-[10px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(outline_.ClockIcon, {
                                        className: "text-primary",
                                        width: 20
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                        children: createdAt
                                    })
                                ]
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex space-x-[10px]",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(outline_.UserIcon, {
                                        className: "text-primary",
                                        width: 20
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                                        children: [
                                            "By ",
                                            username
                                        ]
                                    })
                                ]
                            })
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "flex space-x-[20px]",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "flex space-x-[10px]",
                            children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.ShareIcon, {
                                className: "text-primary",
                                width: 20
                            })
                        })
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-[30px] text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-heading-4 mb-[15px]",
                        children: name
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-body-1",
                        children: description
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/components/blog/components/title.tsx
var title = __webpack_require__(6372);
;// CONCATENATED MODULE: ./src/components/blog/components/single-related-blog.tsx




function SingleRelatedBlog() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: " mb-[30px] cursor-pointer rounded-[10px] shadow-1",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rounded-t-[10px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "https://samartheme1.vercel.app/images/blog/default/thum1.jpg",
                    alt: "",
                    width: "750px",
                    height: "350px",
                    layout: "responsive",
                    className: "rounded-t-[10px] transition-all"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "p-[30px] text-center",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("h1", {
                        className: "text-heading-5 mb-[15px]",
                        children: "Fusce sem ligula, imperdiet sed nisi sit amet, euismod posuere dolor."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-body-1",
                        children: "Sed auctor magna lacus, in placerat nisl sollicitudin ut. Morbi feugiat ante velit, eget convallis arcu iaculis vel."
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "my-[20px] border-t border-[#e1e1f0]"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "flex space-x-[20px]",
                                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                    className: "flex space-x-[10px]",
                                    children: [
                                        /*#__PURE__*/ jsx_runtime_.jsx(outline_.ClockIcon, {
                                            className: "text-primary",
                                            width: 20
                                        }),
                                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                            children: "7 March, 2020"
                                        })
                                    ]
                                })
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "flex space-x-[20px]",
                                children: [
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                        className: "flex space-x-[10px]",
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx(outline_.ChatIcon, {
                                                className: "text-primary",
                                                width: 20
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: "15"
                                            })
                                        ]
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                        className: "flex space-x-[10px]",
                                        children: /*#__PURE__*/ jsx_runtime_.jsx(outline_.ShareIcon, {
                                            className: "text-primary",
                                            width: 20
                                        })
                                    })
                                ]
                            })
                        ]
                    })
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/blog/components/related-blogs.tsx




function RelatedBlogs() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(title/* default */.Z, {
                title: "Related Blogs"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-[20px] flex space-x-[30px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SingleRelatedBlog, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SingleRelatedBlog, {})
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(968);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
;// CONCATENATED MODULE: ./src/components/blog/blog-detail.tsx












function BlogDetail({ tags , categories , blog , metaTag  }) {
    const tagsOfBlog = (0,get_data/* getDataFromObject */.l)(blog, "data.attributes.tags");
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(jsx_runtime_.Fragment, {
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: metaTag.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:type",
                        content: "article"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:image",
                        content: `${endpoint/* default.BASE_URL */.Z.BASE_URL}${metaTag.image}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:site_name",
                        content: metaTag.siteName
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:url",
                        content: `${endpoint/* default.BASE_URL */.Z.BASE_URL}${metaTag.url}`
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:title",
                        content: metaTag.title
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        property: "og:description",
                        content: metaTag.description
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "article:published_time",
                        content: metaTag.publishedTime
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "article:modified_time",
                        content: metaTag.modifiedTime
                    })
                ]
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "container mt-[150px] px-[20px] md:flex md:p-0 md:pb-[30px]",
                children: [
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "mb-[30px] w-full md:mr-[30px] md:mb-0 md:w-2/3",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx(BlogDetailComponent, {
                                blog: blog
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                className: "my-[20px] border-t border-[#e1e1f0]"
                            }),
                            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                                className: "mb-[50px]",
                                children: [
                                    "Tags:",
                                    " ",
                                    tagsOfBlog.data.length > 0 && tagsOfBlog.data.map((t)=>`#${(0,get_data/* getDataFromObject */.l)(t, "attributes.name")} `)
                                ]
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx(RelatedBlogs, {})
                        ]
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: " w-full md:w-1/3",
                        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                            className: "sticky top-[120px]",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-[30px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(search/* default */.Z, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-[30px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(category/* default */.Z, {
                                        categories: categories
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-[30px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(recent_posts/* default */.Z, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-[30px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(archives/* default */.Z, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-[30px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(components_tags/* default */.Z, {
                                        tags: tags
                                    })
                                })
                            ]
                        })
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/fetcher/fetcher.ts + 2 modules
var fetcher = __webpack_require__(1274);
;// CONCATENATED MODULE: ./src/pages/blog/[id].tsx





function BlogPage(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(BlogDetail, {
        ...props
    });
};
// This gets called on every request
const getServerSideProps = async (context)=>{
    // Fetch data from external API
    const { params  } = context;
    const promise = [
        (0,fetcher/* getLayoutData */.rW)(),
        (0,fetcher/* getTags */.NJ)(),
        (0,fetcher/* getCategory */.n3)()
    ];
    if (params && params.id) {
        promise.push((0,fetcher/* getBlogDetail */.lK)(params.id));
    }
    const [layout, tags, categories, blog] = await Promise.all(promise);
    const metaTag = {
        siteName: `${(0,get_data/* getDataFromObject */.l)(blog, "data.attributes.name")}`,
        url: `/blog/${(0,get_data/* getDataFromObject */.l)(blog, "data.id")}`,
        title: `${(0,get_data/* getDataFromObject */.l)(blog, "data.attributes.name")}`,
        description: (0,get_data/* getDataFromObject */.l)(blog, "data.attributes.sort_description"),
        publishedTime: (0,get_data/* getDataFromObject */.l)(blog, "data.attributes.publishedAt"),
        modifiedTime: (0,get_data/* getDataFromObject */.l)(blog, "data.attributes.updatedAt"),
        image: (0,get_data/* getDataFromObject */.l)(blog, "data.attributes.thumnail.data.attributes.formats.small.url")
    };
    // Pass data to the page via props
    return {
        props: {
            layout,
            tags,
            categories,
            blog,
            metaTag
        }
    };
};


/***/ }),

/***/ 8768:
/***/ ((module) => {

module.exports = require("@heroicons/react/outline");

/***/ }),

/***/ 1143:
/***/ ((module) => {

module.exports = require("@heroicons/react/solid");

/***/ }),

/***/ 2167:
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ 4146:
/***/ ((module) => {

module.exports = require("date-fns");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,337,274,823], () => (__webpack_exec__(4710)));
module.exports = __webpack_exports__;

})();