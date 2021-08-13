"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4594],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return v}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),v=n,h=p["".concat(s,".").concat(v)]||p[v]||d[v]||o;return a?r.createElement(h,i(i({ref:t},u),{},{components:a})):r.createElement(h,i({ref:t},u))}));function v(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var c=2;c<o;c++)i[c]=a[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},58215:function(e,t,a){var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return d}});var r=a(67294),n=a(79443);var o=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var d=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,d=e.values,p=e.groupId,v=e.className,h=o(),f=h.tabGroupChoices,m=h.setTabGroupChoices,b=(0,r.useState)(n),y=b[0],k=b[1],g=r.Children.toArray(e.children),w=[];if(null!=p){var j=f[p];null!=j&&j!==y&&d.some((function(e){return e.value===j}))&&k(j)}var O=function(e){var t=e.currentTarget,a=w.indexOf(t),r=d[a].value;k(r),null!=p&&(m(p,r),setTimeout((function(){var e,a,r,n,o,i,l,c;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,a>=0&&o<=c&&n<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},N=function(e){var t,a;switch(e.keyCode){case u:var r=w.indexOf(e.target)+1;a=w[r]||w[0];break;case c:var n=w.indexOf(e.target)-1;a=w[n]||w[w.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},v)},d.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":y===t}),key:t,ref:function(e){return w.push(e)},onKeyDown:N,onFocus:O,onClick:O},a)}))),t?(0,r.cloneElement)(g.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,a){var r=(0,a(67294).createContext)(void 0);t.Z=r},28149:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var r=a(22122),n=a(19756),o=(a(67294),a(3905)),i=(a(55064),a(58215),{id:"class-video",title:"Video"}),l=void 0,s={unversionedId:"api/class-video",id:"version-1.11.0/api/class-video",isDocsHomePage:!1,title:"Video",description:"When browser context is created with the recordVideo option, each page has a video object associated with it.",source:"@site/versioned_docs/version-1.11.0/api/class-video.mdx",sourceDirName:"api",slug:"/api/class-video",permalink:"/java/docs/1.11.0/api/class-video",version:"1.11.0",frontMatter:{id:"class-video",title:"Video"},sidebar:"version-1.11.0/api",previous:{title:"Touchscreen",permalink:"/java/docs/1.11.0/api/class-touchscreen"},next:{title:"WebSocket",permalink:"/java/docs/1.11.0/api/class-websocket"}},c=[{value:"Video.delete()",id:"videodelete",children:[]},{value:"Video.path()",id:"videopath",children:[]},{value:"Video.saveAs(path)",id:"videosaveaspath",children:[]}],u={toc:c};function d(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"When browser context is created with the ",(0,o.kt)("inlineCode",{parentName:"p"},"recordVideo")," option, each page has a video object associated with it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"System.out.println(page.video().path());\n")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-video#videodelete"},"Video.delete()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-video#videopath"},"Video.path()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-video#videosaveaspath"},"Video.saveAs(path)"))),(0,o.kt)("h2",{id:"videodelete"},"Video.delete()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,o.kt)("p",null,"Deletes the video file. Will wait for the video to finish if necessary."),(0,o.kt)("h2",{id:"videopath"},"Video.path()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),">")),(0,o.kt)("p",null,"Returns the file system path this video will be recorded to. The video is guaranteed to be written to the filesystem upon closing the browser context. This method throws when connected remotely."),(0,o.kt)("h2",{id:"videosaveaspath"},"Video.saveAs(path)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"path")," <",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),"> Path where the video should be saved."),(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,o.kt)("p",null,"Saves the video to a user-specified path. It is safe to call this method while the video is still in progress, or after the page has closed. This method waits until the page is closed and the video is fully saved."))}d.isMDXComponent=!0},86010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);