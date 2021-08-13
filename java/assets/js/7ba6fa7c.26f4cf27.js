"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6526],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),f=c(n),m=a,d=f["".concat(i,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(d,s(s({ref:t},u),{},{components:n})):r.createElement(d,s({ref:t},u))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=f;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(86010),l="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,p=e.values,f=e.groupId,m=e.className,d=o(),h=d.tabGroupChoices,v=d.setTabGroupChoices,g=(0,r.useState)(a),y=g[0],b=g[1],k=r.Children.toArray(e.children),w=[];if(null!=f){var O=h[f];null!=O&&O!==y&&p.some((function(e){return e.value===O}))&&b(O)}var N=function(e){var t=e.currentTarget,n=w.indexOf(t),r=p[n].value;b(r),null!=f&&(v(f,r),setTimeout((function(){var e,n,r,a,o,s,l,c;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,s=window,l=s.innerHeight,c=s.innerWidth,n>=0&&o<=c&&a<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},j=function(e){var t,n;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;n=w[r]||w[0];break;case c:var a=w.indexOf(e.target)-1;n=w[a]||w[w.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},m)},p.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,s.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:j,onFocus:N,onClick:N},n)}))),t?(0,r.cloneElement)(k.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},64060:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),s=(n(55064),n(58215),{id:"screenshots",title:"Screenshots"}),l=void 0,i={unversionedId:"screenshots",id:"version-1.14.0/screenshots",isDocsHomePage:!1,title:"Screenshots",description:"Here is a quick way to capture a screenshot and save it into a file:",source:"@site/versioned_docs/version-1.14.0/screenshots.mdx",sourceDirName:".",slug:"/screenshots",permalink:"/java/docs/screenshots",version:"1.14.0",frontMatter:{id:"screenshots",title:"Screenshots"},sidebar:"version-1.14.0/docs",previous:{title:"Page Object Models",permalink:"/java/docs/pom"},next:{title:"Trace Viewer",permalink:"/java/docs/trace-viewer"}},c=[{value:"Full page screenshots",id:"full-page-screenshots",children:[]},{value:"Capture into buffer",id:"capture-into-buffer",children:[]},{value:"Element screenshot",id:"element-screenshot",children:[{value:"API reference",id:"api-reference",children:[]}]}],u={toc:c};function p(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Here is a quick way to capture a screenshot and save it into a file:"),(0,o.kt)("p",null,"Screenshots API accepts many parameters for image format, clip area, quality, etc. Make sure to check them out."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#full-page-screenshots"},"Full page screenshots")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#capture-into-buffer"},"Capture into buffer")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#element-screenshot"},"Element screenshot"))),(0,o.kt)("h2",{id:"full-page-screenshots"},"Full page screenshots"),(0,o.kt)("p",null,"Full page screenshot is a screenshot of a full scrollable page, as if you had a very tall screen and the page could fit it entirely."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.screenshot(new Page.ScreenshotOptions()\n  .setPath(Paths.get("screenshot.png"))\n  .setFullPage(true));\n')),(0,o.kt)("h2",{id:"capture-into-buffer"},"Capture into buffer"),(0,o.kt)("p",null,"Rather than writing into a file, you can get a buffer with the image and post-process it or pass it to a third party pixel diff facility."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"byte[] buffer = page.screenshot();\nSystem.out.println(Base64.getEncoder().encode(buffer));\n")),(0,o.kt)("h2",{id:"element-screenshot"},"Element screenshot"),(0,o.kt)("p",null,"Sometimes it is useful to take a screenshot of a single element."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'ElementHandle elementHandle = page.querySelector(".header");\nelementHandle.screenshot(new ElementHandle.ScreenshotOptions().setPath(Paths.get("screenshot.png")));\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-page#page-screenshot"},"Page.screenshot([options])")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/api/class-elementhandle#element-handle-screenshot"},"ElementHandle.screenshot([options])"))))}p.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);