"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 8405:
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
// EXTERNAL MODULE: ./src/utils/get-data.tsx
var get_data = __webpack_require__(4165);
// EXTERNAL MODULE: ./src/utils/formta-date.tsx
var formta_date = __webpack_require__(4923);
// EXTERNAL MODULE: ./src/fetcher/endpoint.ts
var endpoint = __webpack_require__(4932);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/blog/components/single-blog.tsx








function SingleBlog({ blog  }) {
    const router = (0,router_.useRouter)();
    const { 0: logo , 1: name , 2: sortDescription , 3: createdAt , 4: username  } = (0,external_react_.useMemo)(()=>[
            (0,get_data/* getDataFromObject */.l)(blog, "attributes.thumnail.data.attributes.url"),
            (0,get_data/* getDataFromObject */.l)(blog, "attributes.name"),
            (0,get_data/* getDataFromObject */.l)(blog, "attributes.sort_description"),
            (0,formta_date/* formatDate */.p)(new Date((0,get_data/* getDataFromObject */.l)(blog, "attributes.createdAt"))),
            (0,get_data/* getDataFromObject */.l)(blog, "attributes.users_permissions_user.data.attributes.username"), 
        ], [
        blog
    ]);
    const handleClick = (blogId)=>{
        router.push(`/blog/${blogId}`);
    };
    if (!logo || !name || !sortDescription) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: ()=>handleClick(blog.id),
        className: "group mb-[30px] cursor-pointer rounded-[10px] shadow-1",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "rounded-t-[10px] group-hover:rounded-t-[10px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: `${endpoint/* default.BASE_URL */.Z.BASE_URL}${logo}`,
                    alt: "",
                    width: "750px",
                    height: "350px",
                    layout: "responsive",
                    className: "rounded-t-[10px] transition-all group-hover:scale-125 group-hover:rounded-t-[10px]"
                })
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
                        children: sortDescription
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        className: "my-[20px] border-t border-[#e1e1f0]"
                    }),
                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                        className: "flex items-center justify-between",
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
                                            /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                                children: username
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
                    })
                ]
            })
        ]
    });
};

// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
// EXTERNAL MODULE: ./src/components/button/index.tsx
var components_button = __webpack_require__(9337);
;// CONCATENATED MODULE: ./src/components/pagination.tsx




const getPages = ({ page , totalPage  })=>{
    switch(page){
        case 1:
            {
                if (totalPage === 1 || totalPage === 0) {
                    return [];
                }
                if (totalPage === 2) {
                    return [
                        page,
                        page + 1
                    ];
                }
                if (totalPage > 2) {
                    return [
                        page,
                        page + 1,
                        page + 2
                    ];
                } else {
                    return [
                        page,
                        page + 1
                    ];
                }
            }
        case totalPage:
            {
                if (totalPage === 1) {
                    return [];
                }
                if (totalPage === 2) {
                    return [
                        1,
                        2
                    ];
                }
                return [
                    totalPage - 2,
                    totalPage - 1,
                    totalPage
                ];
            }
        default:
            {
                if (totalPage === 1) {
                    return [];
                }
                if (totalPage === 2) {
                    return [
                        page,
                        page + 1
                    ];
                }
                return [
                    page - 1,
                    page,
                    page + 1
                ];
            }
    }
};
function Pagination({ totalPage , handleChangePage , handleChangeSize , page , total , size  }) {
    const handleChange = (p)=>{
        if (p === page) {
            return;
        }
        handleChangePage(p);
    };
    const handleSelectSize = (e)=>{
        handleChangeSize(Number(e.target.value));
    };
    const renderButton = ()=>{
        return getPages({
            page,
            totalPage
        }).map((p)=>{
            const actived = page === p;
            if (actived) {
                return /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                    version: "1",
                    onClick: ()=>handleChange(p),
                    children: /*#__PURE__*/ jsx_runtime_.jsx("span", {
                        className: "text-white",
                        children: p
                    })
                }, p);
            }
            return /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                onClick: ()=>handleChange(p),
                children: p
            }, p);
        });
    };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "flex items-center justify-center space-x-[10px]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                disabled: page === 1,
                onClick: ()=>handleChangePage(1),
                children: /*#__PURE__*/ jsx_runtime_.jsx(solid_.ChevronLeftIcon, {
                    width: 20
                })
            }),
            renderButton(),
            /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                disabled: page === totalPage || totalPage === 0,
                onClick: ()=>handleChangePage(totalPage),
                children: /*#__PURE__*/ jsx_runtime_.jsx(solid_.ChevronRightIcon, {
                    width: 20
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/blog/blog.tsx











function Blog({ tags , categories , blogs  }) {
    const router = (0,router_.useRouter)();
    const handleChangePage = (page)=>{
        router.push({
            pathname: "/blog",
            query: {
                ...router.query,
                page: page
            }
        });
    };
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    const handleChangeSize = ()=>{};
    const { 0: page , 1: pageCount , 2: total , 3: pageSize  } = (0,external_react_.useMemo)(()=>[
            (0,get_data/* getDataFromObject */.l)(blogs, "meta.pagination.page"),
            (0,get_data/* getDataFromObject */.l)(blogs, "meta.pagination.pageCount"),
            (0,get_data/* getDataFromObject */.l)(blogs, "meta.pagination.total"),
            (0,get_data/* getDataFromObject */.l)(blogs, "meta.pagination.pageSize"), 
        ], [
        blogs
    ]);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "container mt-[150px] px-[20px] md:flex md:p-0 md:pb-[30px]",
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mb-[30px] w-full md:mr-[30px] md:mb-0 md:w-2/3",
                children: [
                    blogs && blogs.data && blogs.data.length > 0 && blogs.data.map((b, i)=>/*#__PURE__*/ jsx_runtime_.jsx(SingleBlog, {
                            blog: b
                        }, i)),
                    /*#__PURE__*/ jsx_runtime_.jsx("div", {
                        children: pageCount > 1 && /*#__PURE__*/ jsx_runtime_.jsx(Pagination, {
                            page: page,
                            totalPage: pageCount,
                            handleChangePage: handleChangePage,
                            handleChangeSize: handleChangeSize,
                            total: total,
                            size: pageSize || 2
                        })
                    })
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
    });
};

// EXTERNAL MODULE: ./src/fetcher/fetcher.ts + 2 modules
var fetcher = __webpack_require__(1274);
;// CONCATENATED MODULE: ./src/pages/blog/index.tsx




function BlogPage(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx(Blog, {
        ...props
    });
};
// This gets called on every request
const getServerSideProps = async (context)=>{
    // Fetch data from external API
    const { query  } = context;
    const pagination = {
        page: "1",
        pageSize: "2"
    };
    const filters = {
        filters: {},
        pagination: pagination
    };
    let categoriesFilter;
    let tagsFilter;
    if (query && query.category) {
        categoriesFilter = {
            name: {
                $eq: query.category
            }
        };
    }
    if (query && query.tag) {
        tagsFilter = {
            name: {
                $eq: query.tag
            }
        };
    }
    if (query && query.page) {
        pagination.page = query.page;
    }
    if (query && query.pageSize) {
        pagination.pageSize = query.pageSize;
    }
    filters.pagination = pagination;
    filters.filters = {
        categories: categoriesFilter,
        tags: tagsFilter
    };
    const [layout, tags, categories, blogs] = await Promise.all([
        (0,fetcher/* getLayoutData */.rW)(),
        (0,fetcher/* getTags */.NJ)(),
        (0,fetcher/* getCategory */.n3)(),
        (0,fetcher/* getBlogs */._Z)(filters), 
    ]);
    // Pass data to the page via props
    return {
        props: {
            layout,
            tags,
            categories,
            blogs
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
var __webpack_exports__ = __webpack_require__.X(0, [675,337,274,823], () => (__webpack_exec__(8405)));
module.exports = __webpack_exports__;

})();