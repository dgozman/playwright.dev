(window.webpackJsonp=window.webpackJsonp||[]).push([[133],{204:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return b}));var r=a(3),i=a(7),n=(a(0),a(901)),o=(a(905),a(906),{id:"class-filechooser",title:"FileChooser"}),l={unversionedId:"api/class-filechooser",id:"api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [page.on('filechooser') event.",source:"@site/docs/api/class-filechooser.mdx",slug:"/api/class-filechooser",permalink:"/docs/next/api/class-filechooser",version:"current",sidebar:"api",previous:{title:"ElementHandle",permalink:"/docs/next/api/class-elementhandle"},next:{title:"Frame",permalink:"/docs/next/api/class-frame"}},c=[{value:"fileChooser.element()",id:"filechooserelement",children:[]},{value:"fileChooser.isMultiple()",id:"filechooserismultiple",children:[]},{value:"fileChooser.page()",id:"filechooserpage",children:[]},{value:"fileChooser.setFiles(files, options)",id:"filechoosersetfilesfiles-options",children:[]}],s={toc:c};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/class-filechooser",title:"FileChooser"}),"FileChooser")," objects are dispatched by the page in the ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/class-page#pageonfilechooser"}),"page.on('filechooser')")," event."),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const [fileChooser] = await Promise.all([\n  page.waitForEvent('filechooser'),\n  page.click('upload')\n]);\nawait fileChooser.setFiles('myfile.pdf');\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-filechooser#filechooserelement"}),"fileChooser.element()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-filechooser#filechooserismultiple"}),"fileChooser.isMultiple()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-filechooser#filechooserpage"}),"fileChooser.page()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-filechooser#filechoosersetfilesfiles-options"}),"fileChooser.setFiles(files[, options])"))),Object(n.b)("h2",{id:"filechooserelement"},"fileChooser.element()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">")),Object(n.b)("p",null,"Returns input element associated with this file chooser."),Object(n.b)("h2",{id:"filechooserismultiple"},"fileChooser.isMultiple()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">")),Object(n.b)("p",null,"Returns whether this file chooser accepts multiple files."),Object(n.b)("h2",{id:"filechooserpage"},"fileChooser.page()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-page",title:"Page"}),"Page"),">")),Object(n.b)("p",null,"Returns page this file chooser belongs to."),Object(n.b)("h2",{id:"filechoosersetfilesfiles-options"},"fileChooser.setFiles(files","[, options]",")"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"files")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">>",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"name")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> File name"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"mimeType")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> File type"),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"buffer")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),"> File content"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"options")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"noWaitAfter")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),"> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),"> Maximum time in milliseconds, defaults to 30 seconds, pass ",Object(n.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-browsercontext#browsercontextsetdefaulttimeouttimeout"}),"browserContext.setDefaultTimeout(timeout)")," or ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/class-page#pagesetdefaulttimeouttimeout"}),"page.setDefaultTimeout(timeout)")," methods."))),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">>")),Object(n.b)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",Object(n.b)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}b.isMDXComponent=!0},901:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),i=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},f=i.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,o=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),p=b(a),f=r,m=p["".concat(o,".").concat(f)]||p[f]||u[f]||n;return a?i.a.createElement(m,l(l({ref:t},s),{},{components:a})):i.a.createElement(m,l({ref:t},s))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,o=new Array(n);o[0]=f;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<n;s++)o[s]=a[s];return i.a.createElement.apply(null,o)}return i.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},902:function(e,t,a){"use strict";function r(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}},903:function(e,t,a){"use strict";var r=a(0),i=a(904);t.a=function(){var e=Object(r.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},904:function(e,t,a){"use strict";var r=a(0),i=Object(r.createContext)(void 0);t.a=i},905:function(e,t,a){"use strict";a(0),a(903),a(902),a(55)},906:function(e,t,a){"use strict";a(3),a(0)}}]);