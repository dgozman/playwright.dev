(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{105:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return l})),r.d(t,"metadata",(function(){return c})),r.d(t,"toc",(function(){return o})),r.d(t,"default",(function(){return u}));var a=r(3),n=r(7),i=(r(0),r(284)),l=(r(287),r(288),{id:"class-playwright",title:"Playwright"}),c={unversionedId:"api/class-playwright",id:"version-1.10.0/api/class-playwright",isDocsHomePage:!1,title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/versioned_docs/version-1.10.0/api/class-playwright.mdx",slug:"/api/class-playwright",permalink:"/java/docs/1.10.0/api/class-playwright",version:"1.10.0",sidebar:"version-1.10.0/api",next:{title:"Browser",permalink:"/java/docs/1.10.0/api/class-browser"}},o=[{value:"Playwright.close()",id:"playwrightclose",children:[]},{value:"Playwright.create()",id:"playwrightcreate",children:[]},{value:"Playwright.chromium()",id:"playwrightchromium",children:[]},{value:"Playwright.firefox()",id:"playwrightfirefox",children:[]},{value:"Playwright.selectors()",id:"playwrightselectors",children:[]},{value:"Playwright.webkit()",id:"playwrightwebkit",children:[]}],s={toc:o};function u(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.navigate("http://example.com");\n      // other actions...\n      browser.close();\n    }\n  }\n}\n')),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/1.10.0/api/class-playwright#playwrightclose"}),"Playwright.close()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/1.10.0/api/class-playwright#playwrightcreate"}),"Playwright.create()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/1.10.0/api/class-playwright#playwrightchromium"}),"Playwright.chromium()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/1.10.0/api/class-playwright#playwrightfirefox"}),"Playwright.firefox()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/1.10.0/api/class-playwright#playwrightselectors"}),"Playwright.selectors()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/1.10.0/api/class-playwright#playwrightwebkit"}),"Playwright.webkit()"))),Object(i.b)("h2",{id:"playwrightclose"},"Playwright.close()"),Object(i.b)("p",null,"Terminates this instance of Playwright, will also close all created browsers if they are still running."),Object(i.b)("h2",{id:"playwrightcreate"},"Playwright.create()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/1.10.0/api/class-playwright",title:"Playwright"}),"Playwright"),">")),Object(i.b)("p",null,"Launches new Playwright driver process and connects to it. ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/java/docs/1.10.0/api/class-playwright#playwrightclose"}),"Playwright.close()")," should be called when the instance is no longer needed."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-java"}),'Playwright playwright = Playwright.create()) {\nBrowser browser = playwright.webkit().launch();\nPage page = browser.newPage();\npage.navigate("https://www.w3.org/");\nplaywright.close();\n')),Object(i.b)("h2",{id:"playwrightchromium"},"Playwright.chromium()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/1.10.0/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ","[ChromiumBrowser]","."),Object(i.b)("h2",{id:"playwrightfirefox"},"Playwright.firefox()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/1.10.0/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ","[FirefoxBrowser]","."),Object(i.b)("h2",{id:"playwrightselectors"},"Playwright.selectors()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/1.10.0/api/class-selectors",title:"Selectors"}),"Selectors"),">")),Object(i.b)("p",null,"Selectors can be used to install custom selector engines. See ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/java/docs/1.10.0/selectors"}),"Working with selectors")," for more information."),Object(i.b)("h2",{id:"playwrightwebkit"},"Playwright.webkit()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"/java/docs/1.10.0/api/class-browsertype",title:"BrowserType"}),"BrowserType"),">")),Object(i.b)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ","[WebKitBrowser]","."))}u.isMDXComponent=!0},283:function(e,t,r){"use strict";function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}t.a=function(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}},284:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return w}));var a=r(0),n=r.n(a);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=n.a.createContext({}),u=function(e){var t=n.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=u(e.components);return n.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),p=u(r),h=a,w=p["".concat(l,".").concat(h)]||p[h]||b[h]||i;return r?n.a.createElement(w,c(c({ref:t},s),{},{components:r})):n.a.createElement(w,c({ref:t},s))}));function w(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=h;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},285:function(e,t,r){"use strict";var a=r(0),n=r(286);t.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},286:function(e,t,r){"use strict";var a=r(0),n=Object(a.createContext)(void 0);t.a=n},287:function(e,t,r){"use strict";var a=r(0),n=r.n(a),i=r(285),l=r(283),c=r(53),o=r.n(c),s=37,u=39;t.a=function(e){var t=e.lazy,r=e.block,c=e.defaultValue,p=e.values,b=e.groupId,h=e.className,w=Object(i.a)(),f=w.tabGroupChoices,y=w.setTabGroupChoices,m=Object(a.useState)(c),g=m[0],d=m[1],j=a.Children.toArray(e.children);if(null!=b){var O=f[b];null!=O&&O!==g&&p.some((function(e){return e.value===O}))&&d(O)}var v=function(e){d(e),null!=b&&y(b,e)},P=[];return n.a.createElement("div",null,n.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":r},h)},p.map((function(e){var t=e.value,r=e.label;return n.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":g===t,className:Object(l.a)("tabs__item",o.a.tabItem,{"tabs__item--active":g===t}),key:t,ref:function(e){return P.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case u:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(P,e.target,e)},onFocus:function(){return v(t)},onClick:function(){v(t)}},r)}))),t?Object(a.cloneElement)(j.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.a.createElement("div",{className:"margin-vert--md"},j.map((function(e,t){return Object(a.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},288:function(e,t,r){"use strict";var a=r(3),n=r(0),i=r.n(n);t.a=function(e){var t=e.children,r=e.hidden,n=e.className;return i.a.createElement("div",Object(a.a)({role:"tabpanel"},{hidden:r,className:n}),t)}}}]);