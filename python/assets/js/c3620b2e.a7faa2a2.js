"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3226],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),d=a,m=p["".concat(l,".").concat(d)]||p[d]||f[d]||o;return n?r.createElement(m,i(i({ref:t},c),{},{components:n})):r.createElement(m,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8215:function(e,t,n){var r=n(7294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},5064:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),a=n(9443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(6010),s="tabItem_1uMI",l="tabItemActive_2DSg";var u=37,c=39;var f=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,f=e.values,p=e.groupId,d=e.className,m=o(),y=m.tabGroupChoices,h=m.setTabGroupChoices,v=(0,r.useState)(a),b=v[0],g=v[1],w=r.Children.toArray(e.children),k=[];if(null!=p){var O=y[p];null!=O&&O!==b&&f.some((function(e){return e.value===O}))&&g(O)}var C=function(e){var t=e.currentTarget,n=k.indexOf(t),r=f[n].value;g(r),null!=p&&(h(p,r),setTimeout((function(){var e,n,r,a,o,i,s,u;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,u=i.innerWidth,n>=0&&o<=u&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},N=function(e){var t,n;switch(e.keyCode){case c:var r=k.indexOf(e.target)+1;n=k[r]||k[0];break;case u:var a=k.indexOf(e.target)-1;n=k[a]||k[k.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},f.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":b===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:C,onClick:C},n)}))),t?(0,r.cloneElement)(w.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,n){var r=(0,n(7294).createContext)(void 0);t.Z=r},6959:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return l},toc:function(){return u},default:function(){return f}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"test-annotations",title:"Annotations"}),s=void 0,l={unversionedId:"test-annotations",id:"version-1.12.0/test-annotations",isDocsHomePage:!1,title:"Annotations",description:"Sadly, tests do not always pass. Luckily, Playwright Test supports test annotations to deal with failures, flakiness and tests that are not yet ready.",source:"@site/versioned_docs/version-1.12.0/test-annotations.mdx",sourceDirName:".",slug:"/test-annotations",permalink:"/python/docs/1.12.0/test-annotations",version:"1.12.0",frontMatter:{id:"test-annotations",title:"Annotations"}},u=[],c={toc:u};function f(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Sadly, tests do not always pass. Luckily, Playwright Test supports test annotations to deal with failures, flakiness and tests that are not yet ready."),(0,o.kt)("p",null,"Annotations apply when the condition is truthy, or always when no condition is passed, and may include a description. Annotations may depend on test fixtures. There could be multiple annotations on the same test, possibly in different configurations."),(0,o.kt)("p",null,"Available annotations:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"skip")," marks the test as irrelevant. Playwright Test does not run such a test. Use this annotation when the test is not applicable in some configuration."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fail")," marks the test as failing. Playwright Test will run this test and ensure it does indeed fail. If the test does not fail, Playwright Test will complain."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"fixme")," marks the test as failing. Playwright Test will not run this test, as opposite to the ",(0,o.kt)("inlineCode",{parentName:"li"},"fail")," annotation. Use ",(0,o.kt)("inlineCode",{parentName:"li"},"fixme")," when running the test is slow or crashy."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"slow")," marks the test as slow and triples the test timeout.")))}f.isMDXComponent=!0},6010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);