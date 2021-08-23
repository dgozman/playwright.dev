"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[1563],{3905:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(r),m=o,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return r?n.createElement(d,i(i({ref:t},s),{},{components:r})):n.createElement(d,i({ref:t},s))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var u=2;u<a;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},8215:function(e,t,r){var n=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,o=e.className;return n.createElement("div",{role:"tabpanel",hidden:r,className:o},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return p}});var n=r(7294),o=r(9443);var a=function(){var e=(0,n.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(6010),c="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,s=39;var p=function(e){var t=e.lazy,r=e.block,o=e.defaultValue,p=e.values,f=e.groupId,m=e.className,d=a(),v=d.tabGroupChoices,y=d.setTabGroupChoices,b=(0,n.useState)(o),h=b[0],g=b[1],w=n.Children.toArray(e.children),O=[];if(null!=f){var k=v[f];null!=k&&k!==h&&p.some((function(e){return e.value===k}))&&g(k)}var E=function(e){var t=e.currentTarget,r=O.indexOf(t),n=p[r].value;g(n),null!=f&&(y(f,n),setTimeout((function(){var e,r,n,o,a,i,c,u;(e=t.getBoundingClientRect(),r=e.top,n=e.left,o=e.bottom,a=e.right,i=window,c=i.innerHeight,u=i.innerWidth,r>=0&&a<=u&&o<=c&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,r;switch(e.keyCode){case s:var n=O.indexOf(e.target)+1;r=O[n]||O[0];break;case u:var o=O.indexOf(e.target)-1;r=O[o]||O[O.length-1]}null==(t=r)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},m)},p.map((function(e){var t=e.value,r=e.label;return n.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",c,{"tabs__item--active":h===t}),key:t,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:E,onClick:E},r)}))),t?(0,n.cloneElement)(w.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,r){var n=(0,r(7294).createContext)(void 0);t.Z=n},8022:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return c},metadata:function(){return l},toc:function(){return u},default:function(){return p}});var n=r(2122),o=r(9756),a=(r(7294),r(3905)),i=(r(5064),r(8215),{id:"class-timeouterror",title:"TimeoutError"}),c=void 0,l={unversionedId:"api/class-timeouterror",id:"version-1.13.0/api/class-timeouterror",isDocsHomePage:!1,title:"TimeoutError",description:"* extends: [Error]",source:"@site/versioned_docs/version-1.13.0/api/class-timeouterror.mdx",sourceDirName:"api",slug:"/api/class-timeouterror",permalink:"/python/docs/1.13.0/api/class-timeouterror",version:"1.13.0",frontMatter:{id:"class-timeouterror",title:"TimeoutError"},sidebar:"version-1.13.0/api",previous:{title:"Selectors",permalink:"/python/docs/1.13.0/api/class-selectors"},next:{title:"Touchscreen",permalink:"/python/docs/1.13.0/api/class-touchscreen"}},u=[],s={toc:u};function p(e){var t=e.components,r=(0,o.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"extends: ",(0,a.kt)("a",{parentName:"li",href:"/python/docs/1.13.0/api/class-error",title:"Error"},"Error"))),(0,a.kt)("p",null,"TimeoutError is emitted whenever certain operations are terminated due to timeout, e.g. ",(0,a.kt)("a",{parentName:"p",href:"/python/docs/1.13.0/api/class-page#page-wait-for-selector"},"page.wait_for_selector(selector, **kwargs)")," or ",(0,a.kt)("a",{parentName:"p",href:"/python/docs/1.13.0/api/class-browsertype#browser-type-launch"},"browser_type.launch(**kwargs)"),"."))}p.isMDXComponent=!0},6010:function(e,t,r){function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}function o(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}r.d(t,{Z:function(){return o}})}}]);