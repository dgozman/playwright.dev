(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{377:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return l}));var n=r(3),o=r(7),a=(r(0),r(404)),c=(r(407),r(408),{id:"class-timeouterror",title:"TimeoutError"}),i={unversionedId:"api/class-timeouterror",id:"version-1.9.0/api/class-timeouterror",isDocsHomePage:!1,title:"TimeoutError",description:"* extends: [Error]",source:"@site/versioned_docs/version-1.9.0/api/class-timeouterror.mdx",slug:"/api/class-timeouterror",permalink:"/python/docs/1.9.0/api/class-timeouterror",version:"1.9.0",sidebar:"version-1.9.0/api",previous:{title:"Selectors",permalink:"/python/docs/1.9.0/api/class-selectors"},next:{title:"Touchscreen",permalink:"/python/docs/1.9.0/api/class-touchscreen"}},s=[],u={toc:s};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"extends: ","[Error]")),Object(a.b)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-page#pagewait_for_selectorselector-kwargs"}),"page.wait_for_selector(selector, **kwargs)")," or ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.9.0/api/class-browsertype#browser_typelaunchkwargs"}),"browser_type.launch(**kwargs)"),"."))}l.isMDXComponent=!0},403:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},404:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(r),m=n,b=p["".concat(c,".").concat(m)]||p[m]||f[m]||a;return r?o.a.createElement(b,i(i({ref:t},u),{},{components:r})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},405:function(e,t,r){"use strict";var n=r(0),o=r(406);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},406:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)(void 0);t.a=o},407:function(e,t,r){"use strict";var n=r(0),o=r.n(n),a=r(405),c=r(403),i=r(53),s=r.n(i),u=37,l=39;t.a=function(e){var t=e.lazy,r=e.block,i=e.defaultValue,p=e.values,f=e.groupId,m=e.className,b=Object(a.a)(),d=b.tabGroupChoices,v=b.setTabGroupChoices,y=Object(n.useState)(i),O=y[0],h=y[1],g=n.Children.toArray(e.children);if(null!=f){var j=d[f];null!=j&&j!==O&&p.some((function(e){return e.value===j}))&&h(j)}var w=function(e){h(e),null!=f&&v(f,e)},E=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":r},m)},p.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",s.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return E.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case l:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case u:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(E,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},408:function(e,t,r){"use strict";var n=r(3),o=r(0),a=r.n(o);t.a=function(e){var t=e.children,r=e.hidden,o=e.className;return a.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:r,className:o}),t)}}}]);