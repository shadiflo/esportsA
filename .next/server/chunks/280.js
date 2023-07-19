"use strict";
exports.id = 280;
exports.ids = [280];
exports.modules = {

/***/ 2280:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ context),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utilities__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(3064);

const type = {
    NAV: "NAV",
    COLOR: "COLOR",
    CURSOR: "CURSOR",
    NEWS_POPUP: "NEWS_POPUP",
    PORTFOLIO_POPUP: "PORTFOLIO_POPUP",
    ABOUT_POPUP: "ABOUT_POPUP"
};


const context = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)();
const reducer = (state, action)=>{
    switch(action.type){
        case type.NAV:
            return {
                ...state,
                nav: action.payload
            };
        case type.COLOR:
            return {
                ...state,
                color: action.payload
            };
        case type.CURSOR:
            return {
                ...state,
                magicCursor: action.payload
            };
        case type.NEWS_POPUP:
            return {
                ...state,
                newsPopup: !state.newsPopup,
                newsData: action.payload
            };
        case type.PORTFOLIO_POPUP:
            return {
                ...state,
                portfolioPopup: !state.portfolioPopup
            };
        case type.ABOUT_POPUP:
            return {
                ...state,
                aboutPopup: !state.aboutPopup
            };
        default:
            return state;
    }
};
const state = (props)=>{
    const initialState = {
        nav: "home",
        color: "#eb4a4c",
        magicCursor: "show",
        newsPopup: false,
        newsData: null,
        portfolioPopup: false,
        aboutPopup: false
    };
    const [state, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(reducer, initialState);
    const changeNav = (value)=>{
        dispatch({
            type: type.NAV,
            payload: value
        });
        (0,_utilities__WEBPACK_IMPORTED_MODULE_2__/* .activeSection */ .j1)(value);
    };
    const getMagicCursor = (value)=>{
        let cursor = localStorage.getItem("edreaa-megic-cursor");
        dispatch({
            type: type.CURSOR,
            payload: cursor ? cursor : value
        });
        document.querySelector(".edrea_tm_all_wrap").setAttribute("data-magic-cursor", cursor ? cursor : value);
    };
    const changeCursor = (value)=>{
        document.querySelector(".edrea_tm_all_wrap").setAttribute("data-magic-cursor", value);
        localStorage.setItem("edreaa-megic-cursor", value);
        dispatch({
            type: type.CURSOR,
            payload: value
        });
    };
    const getColor = (value)=>{
        let color = localStorage.getItem("edreaa-color");
        document.documentElement.style.setProperty("--pink-color", color ? color : value);
        dispatch({
            type: type.COLOR,
            payload: color ? color : value
        });
    };
    const colorChange = (value)=>{
        document.documentElement.style.setProperty("--pink-color", value);
        localStorage.setItem("edreaa-color", value);
        dispatch({
            type: type.COLOR,
            payload: value
        });
    };
    const showNewsPopup = (value)=>{
        dispatch({
            type: type.NEWS_POPUP,
            payload: value
        });
    };
    const showPortfolioPopup = ()=>{
        dispatch({
            type: type.PORTFOLIO_POPUP
        });
    };
    const showAboutPopup = ()=>{
        dispatch({
            type: type.ABOUT_POPUP
        });
    };
    const { nav , color , magicCursor , newsPopup , newsData , portfolioPopup , aboutPopup  } = state;
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(context.Provider, {
        value: {
            changeNav,
            nav,
            colorChange,
            getColor,
            color,
            getMagicCursor,
            changeCursor,
            magicCursor,
            showNewsPopup,
            newsPopup,
            newsData,
            showPortfolioPopup,
            portfolioPopup,
            aboutPopup,
            showAboutPopup
        },
        children: props.children
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (state);



/***/ }),

/***/ 3064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CC": () => (/* binding */ dataImage),
/* harmony export */   "j1": () => (/* binding */ activeSection),
/* harmony export */   "xg": () => (/* binding */ preloader),
/* harmony export */   "zW": () => (/* binding */ imgToSVG)
/* harmony export */ });
/* unused harmony exports customCursor, aTagClick, wowJsAnimation, activeSkillProgress */
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6405);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_0__);

const preloader_ = ()=>{
    let isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ? true : false;
    let preloader = document.getElementById("preloader");
    if (preloader) {
        if (!isMobile) {
            setTimeout(function() {
                preloader.classList.add("preloaded");
            }, 800);
            setTimeout(function() {
                preloader.remove();
            }, 2000);
        } else {
            preloader.remove();
        }
    }
};
const customCursor = ()=>{
    var myCursor = document.querySelectorAll(".mouse-cursor"), hamburger = document.querySelector(".hamburger"), kura_tm_topbar = document.querySelector(".kura_tm_topbar "), pointer = document.querySelector(".cursor-pointer"), e = document.querySelector(".cursor-inner"), t = document.querySelector(".cursor-outer");
    function mouseEvent(element) {
        ReactDOM.findDOMNode(element).addEventListener("mouseenter", function() {
            e.classList.add("cursor-hover"), t.classList.add("cursor-hover");
        });
        ReactDOM.findDOMNode(element).addEventListener("mouseleave", function() {
            e.classList.remove("cursor-hover"), t.classList.remove("cursor-hover");
        });
    }
    if (myCursor.length) {
        if (document.body) {
            let n, i = 0, o = !1;
            window.onmousemove = function(s) {
                // console.log(document.querySelector(this));
                o || (t.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)"), e.style.transform = "translate(" + s.clientX + "px, " + s.clientY + "px)", n = s.clientY, i = s.clientX;
            }, document.body.addEventListener("mouseenter", // "a,.kura_tm_topbar .trigger, .cursor-pointer",
            function() {
                let a = document.querySelectorAll("a");
                e.classList.add("cursor-inner"), t.classList.add("cursor-outer");
                for(let i = 0; i < a.length; i++){
                    const element = a[i];
                    mouseEvent(element);
                }
                hamburger && mouseEvent(hamburger);
                kura_tm_topbar && mouseEvent(kura_tm_topbar);
                pointer && mouseEvent(pointer);
            }), e.style.visibility = "visible", t.style.visibility = "visible";
        }
    }
};
const preloader = ()=>{
    preloader_();
    setTimeout(()=>{
        document.querySelector("body").classList.add("opened");
    }, 3000);
};
const aTagClick = ()=>{
    const aTag = document.querySelectorAll("[href='#']");
    for(let i = 0; i < aTag.length; i++){
        const a = aTag[i];
        ReactDOM.findDOMNode(a).addEventListener("click", (e)=>{
            e.preventDefault();
        });
    }
};
// Data image
const dataImage = ()=>{
    let d = document.querySelectorAll("[data-img-url");
    for(let i = 0; i < d.length; i++){
        const element = d[i];
        element.style.backgroundImage = `url(${element.getAttribute("data-img-url")})`;
    }
};
const wowJsAnimation = ()=>{
    setTimeout(()=>{
        if (false) {}
        new WOW.WOW().init();
    }, 500);
};
const imgToSVG = ()=>{
    document.querySelectorAll("img.svg").forEach((el)=>{
        const imgID = el.getAttribute("id");
        const imgClass = el.getAttribute("class");
        const imgURL = el.getAttribute("src");
        fetch(imgURL).then((data)=>data.text()).then((response)=>{
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(response, "text/html");
            let svg = xmlDoc.querySelector("svg");
            if (typeof imgID !== "undefined") {
                svg.setAttribute("id", imgID);
            }
            if (typeof imgClass !== "undefined") {
                svg.setAttribute("class", imgClass + " replaced-svg");
            }
            svg.removeAttribute("xmlns:a");
            if (el.parentNode) {
                el.parentNode.replaceChild(svg, el);
            }
        });
    });
};
const activeSection = (value)=>{
    const sections = document.querySelectorAll(".edrea_tm_section");
    sections.forEach((section)=>{
        let id = section.getAttribute("id");
        if (id == value) {
            section.className = "edrea_tm_section active wow animated fadeInUp";
        } else {
            section.className = "edrea_tm_section hidden animated";
        }
    });
};
const activeSkillProgress = ()=>{
    const progress_inner = document.querySelectorAll(".skillsInner___"), triggerBottom = window.innerHeight / 5 * 5;
    progress_inner.forEach((box)=>{
        const boxTop = box.getBoundingClientRect().top, boxElement = box.getElementsByClassName("bar"), label = box.getElementsByClassName("label"), number = box.getElementsByClassName("number"), boxItem = boxElement[0], pWidth = box.getAttribute("data-value"), pColor = box.getAttribute("data-color");
        console.log(boxElement);
        if (boxTop < triggerBottom) {
            boxItem.classList.add("open");
            label[0].classList.add("opened");
            number[0].style.right = `${100 - pWidth}%`;
            boxItem.getElementsByClassName("bar_in")[0].style.width = `${pWidth}%`;
            boxItem.getElementsByClassName("bar_in")[0].style.backgroundColor = pColor;
        } else {
            boxItem.classList.remove("open");
            label[0].classList.remove("opened");
            number[0].style.right = `${120}%`;
        }
    });
};


/***/ })

};
;