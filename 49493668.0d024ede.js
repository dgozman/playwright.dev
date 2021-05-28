(window.webpackJsonp=window.webpackJsonp||[]).push([[222],{293:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return s})),r.d(t,"toc",(function(){return c})),r.d(t,"default",(function(){return u}));var n=r(3),i=r(7),o=(r(0),r(901)),a={id:"troubleshooting",title:"Troubleshooting"},s={unversionedId:"troubleshooting",id:"version-1.7.0/troubleshooting",isDocsHomePage:!1,title:"Troubleshooting",description:"- Browser dependencies",source:"@site/versioned_docs/version-1.7.0/troubleshooting.mdx",slug:"/troubleshooting",permalink:"/docs/1.7.0/troubleshooting",version:"1.7.0"},c=[{value:"Browser dependencies",id:"browser-dependencies",children:[]},{value:"Code transpilation issues",id:"code-transpilation-issues",children:[]},{value:"Node.js requirements",id:"nodejs-requirements",children:[{value:"ReferenceError: URL is not defined",id:"referenceerror-url-is-not-defined",children:[]}]}],l={toc:c};function u(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#browser-dependencies"}),"Browser dependencies")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#code-transpilation-issues"}),"Code transpilation issues")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#nodejs-requirements"}),"Node.js requirements"),Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#referenceerror-url-is-not-defined"}),"ReferenceError: URL is not defined"))))),Object(o.b)("h2",{id:"browser-dependencies"},"Browser dependencies"),Object(o.b)("p",null,"Playwright does self-inspection every time it runs to make sure the browsers can be launched successfully. If there are missing\ndependencies, playwright will print instructions to acquire them."),Object(o.b)("p",null,"We also provide ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.bionic"}),"Ubuntu 18.04 dockerfile")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/microsoft/playwright/blob/master/utils/docker/Dockerfile.focal"}),"Ubuntu 20.04 dockerfile")," with the list of Debian dependencies."),Object(o.b)("h2",{id:"code-transpilation-issues"},"Code transpilation issues"),Object(o.b)("p",null,"If you are using a JavaScript transpiler like babel or TypeScript, calling ",Object(o.b)("inlineCode",{parentName:"p"},"evaluate()")," with an async function might not work. This is because while ",Object(o.b)("inlineCode",{parentName:"p"},"playwright")," uses ",Object(o.b)("inlineCode",{parentName:"p"},"Function.prototype.toString()")," to serialize functions while transpilers could be changing the output code in such a way it's incompatible with ",Object(o.b)("inlineCode",{parentName:"p"},"playwright"),"."),Object(o.b)("p",null,"Some workarounds to this problem would be to instruct the transpiler not to mess up with the code, for example, configure TypeScript to use latest ECMAScript version (",Object(o.b)("inlineCode",{parentName:"p"},'"target": "es2018"'),"). Another workaround could be using string templates instead of functions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.evaluate(`(async() => {\n   console.log('1');\n})()`);\n")),Object(o.b)("h2",{id:"nodejs-requirements"},"Node.js requirements"),Object(o.b)("h3",{id:"referenceerror-url-is-not-defined"},"ReferenceError: URL is not defined"),Object(o.b)("p",null,"Playwright requires Node.js 10 or higher. Node.js 8 is not supported, and will cause you to receive this error."),Object(o.b)("h1",{id:"please-file-an-issue"},"Please file an issue"),Object(o.b)("p",null,"Playwright is a new project, and we are watching the issues very closely. As we solve common issues, this document will grow to include the common answers."))}u.isMDXComponent=!0},901:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),u=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},d=i.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),d=n,f=p["".concat(a,".").concat(d)]||p[d]||b[d]||o;return r?i.a.createElement(f,s(s({ref:t},l),{},{components:r})):i.a.createElement(f,s({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);