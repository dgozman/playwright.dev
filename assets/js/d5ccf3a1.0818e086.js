"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[8875],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=s(r),d=o,m=p["".concat(c,".").concat(d)]||p[d]||f[d]||a;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return f}});var n=r(67294),o=r(79443);var a=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(86010),l="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,u=39;var f=function(e){var t=e.lazy,r=e.block,o=e.defaultValue,f=e.values,p=e.groupId,d=e.className,m=a(),k=m.tabGroupChoices,w=m.setTabGroupChoices,v=(0,n.useState)(o),h=v[0],b=v[1],g=n.Children.toArray(e.children),y=[];if(null!=p){var x=k[p];null!=x&&x!==h&&f.some((function(e){return e.value===x}))&&b(x)}var N=function(e){var t=e.currentTarget,r=y.indexOf(t),n=f[r].value;b(n),null!=p&&(w(p,n),setTimeout((function(){var e,r,n,o,a,i,l,s;(e=t.getBoundingClientRect(),r=e.top,n=e.left,o=e.bottom,a=e.right,i=window,l=i.innerHeight,s=i.innerWidth,r>=0&&a<=s&&o<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},I=function(e){var t,r;switch(e.keyCode){case u:var n=y.indexOf(e.target)+1;r=y[n]||y[0];break;case s:var o=y.indexOf(e.target)-1;r=y[o]||y[y.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},f.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return y.push(e)},onKeyDown:I,onFocus:N,onClick:N},r)}))),t?(0,n.cloneElement)(g.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},56500:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return s},metadata:function(){return u},toc:function(){return f},default:function(){return d}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),i=r(55064),l=r(58215),c={id:"class-workerinfo",title:"WorkerInfo"},s=void 0,u={unversionedId:"api/class-workerinfo",id:"api/class-workerinfo",isDocsHomePage:!1,title:"WorkerInfo",description:"WorkerInfo contains information about the worker that is running tests. It is available to test.beforeAll(hookFunction) and test.afterAll(hookFunction) hooks and worker-scoped fixtures.",source:"@site/docs/api/class-workerinfo.mdx",sourceDirName:"api",slug:"/api/class-workerinfo",permalink:"/docs/next/api/class-workerinfo",version:"current",frontMatter:{id:"class-workerinfo",title:"WorkerInfo"}},f=[{value:"workerInfo.config",id:"worker-info-config",children:[]},{value:"workerInfo.project",id:"worker-info-project",children:[]},{value:"workerInfo.workerIndex",id:"worker-info-worker-index",children:[]}],p={toc:f};function d(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"WorkerInfo")," contains information about the worker that is running tests. It is available to ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-before-all"},"test.beforeAll(hookFunction)")," and ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/api/class-test#test-after-all"},"test.afterAll(hookFunction)")," hooks and worker-scoped fixtures."),(0,a.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,a.kt)(l.Z,{value:"ts",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { test, expect } from '@playwright/test';\n\ntest.beforeAll(async ({ browserName }, workerInfo) => {\n  console.log(`Running ${browserName} in worker #${workerInfo.workerIndex}`);\n});\n"))),(0,a.kt)(l.Z,{value:"js",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const { test, expect } = require('@playwright/test');\n\ntest.beforeAll(async ({ browserName }, workerInfo) => {\n  console.log(`Running ${browserName} in worker #${workerInfo.workerIndex}`);\n});\n")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/class-workerinfo#worker-info-config"},"workerInfo.config")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/class-workerinfo#worker-info-project"},"workerInfo.project")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/class-workerinfo#worker-info-worker-index"},"workerInfo.workerIndex"))),(0,a.kt)("h2",{id:"worker-info-config"},"workerInfo.config"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/class-testconfig",title:"TestConfig"},"TestConfig"),">")),(0,a.kt)("p",null,"Processed configuration from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/test-configuration"},"configuration file"),"."),(0,a.kt)("h2",{id:"worker-info-project"},"workerInfo.project"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"/docs/next/api/class-testproject",title:"TestProject"},"TestProject"),">")),(0,a.kt)("p",null,"Processed project configuration from the ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/test-configuration"},"configuration file"),"."),(0,a.kt)("h2",{id:"worker-info-worker-index"},"workerInfo.workerIndex"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"type: ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,a.kt)("p",null,"The unique index of the worker process that is running the test. Also available as ",(0,a.kt)("inlineCode",{parentName:"p"},"process.env.TEST_WORKER_INDEX"),". Learn more about ",(0,a.kt)("a",{parentName:"p",href:"/docs/next/test-parallel"},"parallelism and sharding")," with Playwright Test."))}d.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);