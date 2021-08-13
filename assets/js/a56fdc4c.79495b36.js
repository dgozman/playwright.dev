"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[43677],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),p=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),f=p(r),d=a,m=f["".concat(o,".").concat(d)]||f[d]||u[d]||i;return r?n.createElement(m,s(s({ref:t},c),{},{components:r})):n.createElement(m,s({ref:t},c))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=f;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=r[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},58215:function(e,t,r){var n=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,a=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:a},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return u}});var n=r(67294),a=r(79443);var i=function(){var e=(0,n.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var t=e.lazy,r=e.block,a=e.defaultValue,u=e.values,f=e.groupId,d=e.className,m=i(),v=m.tabGroupChoices,y=m.setTabGroupChoices,h=(0,n.useState)(a),k=h[0],g=h[1],b=n.Children.toArray(e.children),N=[];if(null!=f){var S=v[f];null!=S&&S!==k&&u.some((function(e){return e.value===S}))&&g(S)}var O=function(e){var t=e.currentTarget,r=N.indexOf(t),n=u[r].value;g(n),null!=f&&(y(f,n),setTimeout((function(){var e,r,n,a,i,s,l,p;(e=t.getBoundingClientRect(),r=e.top,n=e.left,a=e.bottom,i=e.right,s=window,l=s.innerHeight,p=s.innerWidth,r>=0&&i<=p&&a<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},w=function(e){var t,r;switch(e.keyCode){case c:var n=N.indexOf(e.target)+1;r=N[n]||N[0];break;case p:var a=N.indexOf(e.target)-1;r=N[a]||N[N.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},d)},u.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,s.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:O,onClick:O},r)}))),t?(0,n.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,r){var n=(0,r(67294).createContext)(void 0);t.Z=n},7722:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return p},default:function(){return u}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),s=(r(55064),r(58215),{id:"class-teststep",title:"TestStep"}),l=void 0,o={unversionedId:"api/class-teststep",id:"version-1.14.0/api/class-teststep",isDocsHomePage:!1,title:"TestStep",description:"Represents a step in the [TestRun].",source:"@site/versioned_docs/version-1.14.0/api/class-teststep.mdx",sourceDirName:"api",slug:"/api/class-teststep",permalink:"/docs/api/class-teststep",version:"1.14.0",frontMatter:{id:"class-teststep",title:"TestStep"}},p=[{value:"testStep.category",id:"test-step-category",children:[]},{value:"testStep.duration",id:"test-step-duration",children:[]},{value:"testStep.error",id:"test-step-error",children:[]},{value:"testStep.startTime",id:"test-step-start-time",children:[]},{value:"testStep.title",id:"test-step-title",children:[]}],c={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Represents a step in the ","[TestRun]","."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-teststep#test-step-category"},"testStep.category")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-teststep#test-step-duration"},"testStep.duration")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-teststep#test-step-error"},"testStep.error")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-teststep#test-step-start-time"},"testStep.startTime")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-teststep#test-step-title"},"testStep.title"))),(0,i.kt)("h2",{id:"test-step-category"},"testStep.category"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,i.kt)("p",null,"Step category to differentiate steps with different origin and verbosity. Built-in categories are:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"hook")," for fixtures and hooks initialization and teardown"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"expect")," for expect calls"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"pw:api")," for Playwright API calls.")),(0,i.kt)("h2",{id:"test-step-duration"},"testStep.duration"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">")),(0,i.kt)("p",null,"Running time in milliseconds."),(0,i.kt)("h2",{id:"test-step-error"},"testStep.error"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),"|",(0,i.kt)("a",{parentName:"li",href:"/docs/api/class-testerror",title:"TestError"},"TestError"),">")),(0,i.kt)("p",null,"An error thrown during the step execution, if any."),(0,i.kt)("h2",{id:"test-step-start-time"},"testStep.startTime"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<","[Date]",">")),(0,i.kt)("p",null,"Start time of this particular test step."),(0,i.kt)("h2",{id:"test-step-title"},"testStep.title"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"type: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,i.kt)("p",null,"User-friendly test step title."))}u.isMDXComponent=!0},86010:function(e,t,r){function n(e){var t,r,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(a&&(a+=" "),a+=r);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,r=0,a="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(a&&(a+=" "),a+=t);return a}r.d(t,{Z:function(){return a}})}}]);