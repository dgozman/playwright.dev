"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2908],{3905:function(e,r,t){t.d(r,{Zo:function(){return f},kt:function(){return u}});var n=t(67294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},p=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,f=c(e,["components","mdxType","originalType","parentName"]),p=s(t),u=a,d=p["".concat(l,".").concat(u)]||p[u]||m[u]||o;return t?n.createElement(d,i(i({ref:r},f),{},{components:t})):n.createElement(d,i({ref:r},f))}));function u(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=p;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},56235:function(e,r,t){t.r(r),t.d(r,{assets:function(){return b},contentTitle:function(){return u},default:function(){return v},frontMatter:function(){return p},metadata:function(){return d},toc:function(){return y}});var n=t(3905),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,f=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,m=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&f(e,t,r[t]);if(c)for(var t of c(r))s.call(r,t)&&f(e,t,r[t]);return e};const p={id:"frames",title:"Frames"},u=void 0,d={unversionedId:"frames",id:"version-1.22/frames",title:"Frames",description:"- Frames",source:"@site/versioned_docs/version-1.22/frames.mdx",sourceDirName:".",slug:"/frames",permalink:"/docs/1.22/frames",tags:[],version:"1.22",frontMatter:{id:"frames",title:"Frames"},sidebar:"docs",previous:{title:"Extensibility",permalink:"/docs/1.22/extensibility"},next:{title:"Handles",permalink:"/docs/1.22/handles"}},b={},y=[{value:"Frames",id:"frames",level:2},{value:"Frame objects",id:"frame-objects",level:2}],g={toc:y};function v(e){var r,t=e,{components:a}=t,f=((e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t})(t,["components"]);return(0,n.kt)("wrapper",(r=m(m({},g),f),o(r,i({components:a,mdxType:"MDXLayout"}))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#frames"}),"Frames")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"#frame-objects"}),"Frame objects"))),(0,n.kt)("h2",m({},{id:"frames"}),"Frames"),(0,n.kt)("p",null,"A ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/1.22/api/class-page",title:"Page"}),"Page")," can have one or more ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/1.22/api/class-frame",title:"Frame"}),"Frame")," objects attached to it. Each page has a main frame and page-level interactions (like ",(0,n.kt)("inlineCode",{parentName:"p"},"click"),") are assumed to operate in the main frame."),(0,n.kt)("p",null,"A page can have additional frames attached with the ",(0,n.kt)("inlineCode",{parentName:"p"},"iframe")," HTML tag. These frames can be accessed for interactions inside the frame."),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// Locate element inside frame\nconst username = await page.frameLocator('.frame-class').locator('#username-input');\nawait username.fill('John');\n")),(0,n.kt)("h2",m({},{id:"frame-objects"}),"Frame objects"),(0,n.kt)("p",null,"One can access frame objects using the ",(0,n.kt)("a",m({parentName:"p"},{href:"/docs/1.22/api/class-page#page-frame"}),"page.frame(frameSelector)")," API:"),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-js"}),"// Get frame using the frame's name attribute\nconst frame = page.frame('frame-login');\n\n// Get frame using frame's URL\nconst frame = page.frame({ url: /.*domain.*/ });\n\n// Interact with the frame\nawait frame.fill('#username-input', 'John');\n")))}v.isMDXComponent=!0}}]);