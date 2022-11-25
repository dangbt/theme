"use strict";
(() => {
var exports = {};
exports.id = 195;
exports.ids = [195];
exports.modules = {

/***/ 6372:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ Title)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);


const BEFORE_TITLE = "before:absolute before:left-0 before:w-[5px] before:h-full before:bg-primary before:rounded-[5px]";
function Title({ title  }) {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
        className: [
            BEFORE_TITLE,
            "text-heading-4 relative pl-[20px]"
        ].join(" "),
        children: title
    });
};


/***/ }),

/***/ 8930:
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
// EXTERNAL MODULE: external "@heroicons/react/solid"
var solid_ = __webpack_require__(1143);
// EXTERNAL MODULE: ./src/components/button/index.tsx
var components_button = __webpack_require__(9337);
;// CONCATENATED MODULE: ./src/components/blog/components/search.tsx




function Search() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "group flex w-full items-center rounded-[20px] shadow-2",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-auto p-[10px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx(solid_.SearchIcon, {
                    className: "rotate-90 text-primary",
                    width: 20
                })
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("input", {
                placeholder: "Search",
                className: "w-full py-[5px] focus:outline-none"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: " w-auto",
                children: /*#__PURE__*/ jsx_runtime_.jsx(components_button/* default */.Z, {
                    version: "1",
                    children: /*#__PURE__*/ jsx_runtime_.jsx(solid_.ArrowRightIcon, {
                        width: 20,
                        className: "text-white"
                    })
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./src/components/blog/components/title.tsx
var title = __webpack_require__(6372);
;// CONCATENATED MODULE: ./src/components/badge.tsx


function Badge(props) {
    return /*#__PURE__*/ jsx_runtime_.jsx("span", {
        className: "cursor-default rounded-hafl bg-bg-primary py-[5px] px-[10px] hover:bg-primary hover:text-white group-hover:bg-primary group-hover:text-white",
        children: props.children
    });
};

// EXTERNAL MODULE: ./src/utils/get-data.tsx
var get_data = __webpack_require__(4165);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(1853);
;// CONCATENATED MODULE: ./src/components/blog/components/category.tsx






function Category({ categories  }) {
    const router = (0,router_.useRouter)();
    const handleClick = (name)=>()=>{
            const query = router.query;
            delete query.slug;
            router.push({
                pathname: "/blog",
                query: {
                    ...query,
                    category: name,
                    page: 1
                }
            });
        };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(title/* default */.Z, {
                title: "Category"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-[20px]",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                    className: "cursor-pointer",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            onClick: handleClick(""),
                            className: "group flex items-center justify-between rounded-[20px] px-[20px] py-[10px] transition-all duration-200 hover:shadow-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "flex-1",
                                    children: "Tất cả"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                    children: "01"
                                })
                            ]
                        }),
                        categories.data && categories.data.length > 0 && categories.data.map((c, i)=>{
                            return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                                onClick: handleClick((0,get_data/* getDataFromObject */.l)(c, "attributes.name")),
                                className: "group flex items-center justify-between rounded-[20px] px-[20px] py-[10px] transition-all duration-200 hover:shadow-1",
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                        className: "flex-1",
                                        children: (0,get_data/* getDataFromObject */.l)(c, "attributes.name")
                                    }),
                                    /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                        children: "01"
                                    })
                                ]
                            }, i);
                        })
                    ]
                })
            })
        ]
    });
};

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./src/components/blog/components/recent-posts.tsx




const SinglePost = ()=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: "group flex cursor-pointer items-center space-x-[10px] rounded-[10px] p-[10px] hover:shadow-1",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "h-[100px] w-[120px] rounded-[10px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                    src: "https://samartheme1.vercel.app/images/blog/recent-blog/pic1.jpg",
                    alt: "",
                    width: 120,
                    height: 100,
                    className: "rounded-[10px]",
                    layout: "responsive"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "flex-1",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-heading-6 mb-[8px] group-hover:text-primary",
                        children: "Fusce mollis felis quis tristique"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("p", {
                        className: "text-body-3",
                        children: "7 March, 2020"
                    })
                ]
            })
        ]
    });
};
function RecentPosts() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(title/* default */.Z, {
                title: "Recent Posts"
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                className: "mt-[20px]",
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(SinglePost, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SinglePost, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SinglePost, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SinglePost, {}),
                    /*#__PURE__*/ jsx_runtime_.jsx(SinglePost, {})
                ]
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/blog/components/archives.tsx




const DESIGN_LIST = [
    {
        text: "Design",
        value: "05"
    },
    {
        text: "Development",
        value: "05"
    },
    {
        text: "SEO",
        value: "05"
    },
    {
        text: "App design",
        value: "05"
    }, 
];
function Archives() {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(title/* default */.Z, {
                title: "Archives"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-[20px]",
                children: /*#__PURE__*/ jsx_runtime_.jsx("ul", {
                    className: "cursor-pointer",
                    children: DESIGN_LIST.map((d)=>/*#__PURE__*/ (0,jsx_runtime_.jsxs)("li", {
                            className: "group flex items-center justify-between rounded-[20px] px-[20px] py-[10px] transition-all duration-200 hover:shadow-1",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("p", {
                                    className: "flex-1",
                                    children: d.text
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx(Badge, {
                                    children: d.value
                                })
                            ]
                        }, d.text))
                })
            })
        ]
    });
};

;// CONCATENATED MODULE: ./src/components/blog/components/tags.tsx





const SingleTag = ({ text , onClick  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: onClick,
        className: "mt-[5px] ml-[10px] inline-flex cursor-pointer items-center rounded-[20px] border border-secondary p-[4px]",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "h-[20px] w-[20px] rounded-hafl bg-secondary"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("p", {
                className: "px-[10px]",
                children: text
            })
        ]
    });
};
function Tags({ tags  }) {
    const router = (0,router_.useRouter)();
    const handleClick = (name)=>()=>{
            router.push({
                pathname: "/blog",
                query: {
                    ...router.query,
                    tag: name,
                    page: 1
                }
            });
        };
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(title/* default */.Z, {
                title: "Tags"
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "mt-[15px] -ml-[10px]",
                children: tags.data && tags.data.length > 0 && tags.data.map((t, i)=>/*#__PURE__*/ jsx_runtime_.jsx(SingleTag, {
                        onClick: handleClick((0,get_data/* getDataFromObject */.l)(t, "attributes.name")),
                        text: (0,get_data/* getDataFromObject */.l)(t, "attributes.name")
                    }, i))
            })
        ]
    });
};

// EXTERNAL MODULE: external "@heroicons/react/outline"
var outline_ = __webpack_require__(8768);
// EXTERNAL MODULE: ./src/utils/formta-date.tsx + 1 modules
var formta_date = __webpack_require__(4269);
// EXTERNAL MODULE: ./src/fetcher/endpoint.ts
var endpoint = __webpack_require__(4932);
;// CONCATENATED MODULE: ./src/components/blog/components/single-blog.tsx








function SingleBlog({ blog  }) {
    const router = (0,router_.useRouter)();
    const { 0: logo , 1: name , 2: sortDescription , 3: createdAt , 4: username , 5: slug  } = (0,external_react_.useMemo)(()=>[
            (0,get_data/* getDataFromObject */.l)(blog, "attributes.thumnail.data.attributes.url"),
            (0,get_data/* getDataFromObject */.l)(blog, "attributes.name"),
            (0,get_data/* getDataFromObject */.l)(blog, "attributes.sort_description"),
            (0,formta_date/* formatDate */.p)(new Date((0,get_data/* getDataFromObject */.l)(blog, "attributes.createdAt"))),
            (0,get_data/* getDataFromObject */.l)(blog, "attributes.users_permissions_user.data.attributes.username"),
            (0,get_data/* getDataFromObject */.l)(blog, "attributes.slug"), 
        ], [
        blog
    ]);
    const handleClick = ()=>{
        router.push(`/blog/${slug}`);
    };
    if (!logo || !name || !sortDescription) return null;
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        onClick: handleClick,
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

// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
;// CONCATENATED MODULE: ./src/components/breadcrumb/index.tsx



function Breadcrumb() {
    return /*#__PURE__*/ jsx_runtime_.jsx("div", {
        className: "",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
            className: "flex items-center space-x-[32px] text-[15px] font-bold text-white",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    className: "relative cursor-pointer after:absolute after:right-[-32px] after:top-[0px] after:h-[24px] after:w-[24px] after:text-[15px] after:content-['>']",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        children: /*#__PURE__*/ jsx_runtime_.jsx("a", {
                            children: "Home"
                        })
                    })
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                    children: "Blog"
                })
            ]
        })
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
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "relative flex h-[400px] items-center bg-[url(https://samartheme1.vercel.app/images/banner/bnr1.jpg)] bg-cover bg-no-repeat opacity-75 after:absolute after:left-0 after:right-0 after:top-0 after:bottom-0 after:bg-primary after:opacity-75",
                children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "container relative z-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("div", {
                            className: "text-[48px] text-white",
                            children: "Blog"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(Breadcrumb, {})
                    ]
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
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
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Search, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-[30px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Category, {
                                        categories: categories
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-[30px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(RecentPosts, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-[30px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Archives, {})
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                                    className: "mb-[30px]",
                                    children: /*#__PURE__*/ jsx_runtime_.jsx(Tags, {
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
        pageSize: "4"
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

/***/ 4269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "p": () => (/* binding */ formatDate)
});

;// CONCATENATED MODULE: external "date-fns"
const external_date_fns_namespaceObject = require("date-fns");
;// CONCATENATED MODULE: ./src/utils/formta-date.tsx

const formatDate = (date, formatString = "PP")=>{
    if (date) {
        return (0,external_date_fns_namespaceObject.format)(date, formatString);
    }
    return (0,external_date_fns_namespaceObject.format)(new Date(), formatString);
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
var __webpack_exports__ = __webpack_require__.X(0, [952,61,274,337], () => (__webpack_exec__(8930)));
module.exports = __webpack_exports__;

})();