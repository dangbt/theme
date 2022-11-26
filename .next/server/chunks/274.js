"use strict";
exports.id = 274;
exports.ids = [274];
exports.modules = {

/***/ 1274:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "lK": () => (/* binding */ getBlogDetail),
  "_Z": () => (/* binding */ getBlogs),
  "n3": () => (/* binding */ getCategory),
  "rW": () => (/* binding */ getLayoutData),
  "NJ": () => (/* binding */ getTags)
});

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2167);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
;// CONCATENATED MODULE: ./src/fetcher/index.tsx

var Methods;
(function(Methods) {
    Methods["GET"] = "get";
    Methods["POST"] = "post";
})(Methods || (Methods = {}));
const instance = external_axios_default().create({
    baseURL: "https://admin.webchiase.online",
    timeout: 20000
});
const get = ({ url  })=>{
    return instance({
        method: Methods.GET,
        url
    }).then(async (res)=>{
        const data = await res.data;
        return data;
    });
};
const post = ({ url , data  })=>{
    return instance({
        method: Methods.POST,
        url,
        data
    });
};

// EXTERNAL MODULE: external "qs"
var external_qs_ = __webpack_require__(7104);
var external_qs_default = /*#__PURE__*/__webpack_require__.n(external_qs_);
;// CONCATENATED MODULE: ./src/utils/format-query.ts

const formatObjectToString = (object)=>{
    return external_qs_default().stringify(object, {
        encodeValuesOnly: true
    });
};

// EXTERNAL MODULE: ./src/fetcher/endpoint.ts
var endpoint = __webpack_require__(4932);
;// CONCATENATED MODULE: ./src/fetcher/fetcher.ts



const getLayoutData = ()=>{
    return get({
        url: endpoint/* default.LAYOUT */.Z.LAYOUT
    });
};
const getTags = ()=>{
    return get({
        url: endpoint/* default.TAG */.Z.TAG
    });
};
const getCategory = ()=>{
    return get({
        url: endpoint/* default.CATEGORY */.Z.CATEGORY
    });
};
const getBlogs = (objectQuery)=>{
    const url = `${endpoint/* default.BLOG */.Z.BLOG}?populate=*&&${formatObjectToString(objectQuery)}`;
    return get({
        url
    });
};
const getBlogDetail = (slug)=>{
    const filters = {
        filters: {
            slug: {
                $eq: slug
            }
        }
    };
    const url = `${endpoint/* default.BLOG */.Z.BLOG}?populate=*&&${formatObjectToString(filters)}`;
    return get({
        url
    });
};


/***/ })

};
;