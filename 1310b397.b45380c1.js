(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{122:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return s})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var a=n(3),r=n(7),o=(n(0),n(901)),s=(n(905),n(906),{id:"class-consolemessage",title:"ConsoleMessage"}),c={unversionedId:"api/class-consolemessage",id:"api/class-consolemessage",isDocsHomePage:!1,title:"ConsoleMessage",description:"ConsoleMessage] objects are dispatched by page via the [page.on('console') event.",source:"@site/docs/api/class-consolemessage.mdx",slug:"/api/class-consolemessage",permalink:"/docs/next/api/class-consolemessage",version:"current",sidebar:"api",previous:{title:"CDPSession",permalink:"/docs/next/api/class-cdpsession"},next:{title:"Coverage",permalink:"/docs/next/api/class-coverage"}},l=[{value:"consoleMessage.args()",id:"consolemessageargs",children:[]},{value:"consoleMessage.location()",id:"consolemessagelocation",children:[]},{value:"consoleMessage.text()",id:"consolemessagetext",children:[]},{value:"consoleMessage.type()",id:"consolemessagetype",children:[]}],i={toc:l};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/class-consolemessage",title:"ConsoleMessage"}),"ConsoleMessage")," objects are dispatched by page via the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/class-page#pageonconsole"}),"page.on('console')")," event."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-consolemessage#consolemessageargs"}),"consoleMessage.args()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-consolemessage#consolemessagelocation"}),"consoleMessage.location()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-consolemessage#consolemessagetext"}),"consoleMessage.text()")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-consolemessage#consolemessagetype"}),"consoleMessage.type()"))),Object(o.b)("h2",{id:"consolemessageargs"},"consoleMessage.args()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/next/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(o.b)("p",null,"List of arguments passed to a ",Object(o.b)("inlineCode",{parentName:"p"},"console")," function call. See also ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/next/api/class-page#pageonconsole"}),"page.on('console')"),"."),Object(o.b)("h2",{id:"consolemessagelocation"},"consoleMessage.location()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"url")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> URL of the resource."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"lineNumber")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> 0-based line number in the resource."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"columnNumber")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> 0-based column number in the resource.")))),Object(o.b)("h2",{id:"consolemessagetext"},"consoleMessage.text()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(o.b)("p",null,"The text of the console message."),Object(o.b)("h2",{id:"consolemessagetype"},"consoleMessage.type()"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")),Object(o.b)("p",null,"One of the following values: ",Object(o.b)("inlineCode",{parentName:"p"},"'log'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'debug'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'info'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'error'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'warning'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'dir'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'dirxml'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'table'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'trace'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'clear'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'startGroup'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'startGroupCollapsed'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'endGroup'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'assert'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'profile'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'profileEnd'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'count'"),", ",Object(o.b)("inlineCode",{parentName:"p"},"'timeEnd'"),"."))}p.isMDXComponent=!0},901:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),p=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=p(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=a,d=b["".concat(s,".").concat(m)]||b[m]||u[m]||o;return n?r.a.createElement(d,c(c({ref:t},i),{},{components:n})):r.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var i=2;i<o;i++)s[i]=n[i];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},902:function(e,t,n){"use strict";function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}},903:function(e,t,n){"use strict";var a=n(0),r=n(904);t.a=function(){var e=Object(a.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},904:function(e,t,n){"use strict";var a=n(0),r=Object(a.createContext)(void 0);t.a=r},905:function(e,t,n){"use strict";n(0),n(903),n(902),n(55)},906:function(e,t,n){"use strict";n(3),n(0)}}]);