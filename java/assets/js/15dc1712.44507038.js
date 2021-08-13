"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6200],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),l=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=l(r),f=n,b=p["".concat(s,".").concat(f)]||p[f]||m[f]||o;return r?a.createElement(b,c(c({ref:t},u),{},{components:r})):a.createElement(b,c({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<o;l++)c[l]=r[l];return a.createElement.apply(null,c)}return a.createElement.apply(null,r)}p.displayName="MDXCreateElement"},58215:function(e,t,r){var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return m}});var a=r(67294),n=r(79443);var o=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},c=r(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var l=37,u=39;var m=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,m=e.values,p=e.groupId,f=e.className,b=o(),d=b.tabGroupChoices,v=b.setTabGroupChoices,k=(0,a.useState)(n),y=k[0],h=k[1],w=a.Children.toArray(e.children),g=[];if(null!=p){var j=d[p];null!=j&&j!==y&&m.some((function(e){return e.value===j}))&&h(j)}var O=function(e){var t=e.currentTarget,r=g.indexOf(t),a=m[r].value;h(a),null!=p&&(v(p,a),setTimeout((function(){var e,r,a,n,o,c,i,l;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,o=e.right,c=window,i=c.innerHeight,l=c.innerWidth,r>=0&&o<=l&&n<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},S=function(e){var t,r;switch(e.keyCode){case u:var a=g.indexOf(e.target)+1;r=g[a]||g[0];break;case l:var n=g.indexOf(e.target)-1;r=g[n]||g[g.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":r},f)},m.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,className:(0,c.Z)("tabs__item",i,{"tabs__item--active":y===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:S,onFocus:O,onClick:O},r)}))),t?(0,a.cloneElement)(w.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},w.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==y})}))))}},79443:function(e,t,r){var a=(0,r(67294).createContext)(void 0);t.Z=a},15862:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return l},default:function(){return m}});var a=r(22122),n=r(19756),o=(r(67294),r(3905)),c=(r(55064),r(58215),{id:"class-websocketframe",title:"WebSocketFrame"}),i=void 0,s={unversionedId:"api/class-websocketframe",id:"version-1.11.0/api/class-websocketframe",isDocsHomePage:!1,title:"WebSocketFrame",description:"The WebSocketFrame] class represents frames sent over [WebSocket] connections in the page. Frame payload is returned by either [WebSocketFrame.text() or WebSocketFrame.binary() method depending on the its type.",source:"@site/versioned_docs/version-1.11.0/api/class-websocketframe.mdx",sourceDirName:"api",slug:"/api/class-websocketframe",permalink:"/java/docs/1.11.0/api/class-websocketframe",version:"1.11.0",frontMatter:{id:"class-websocketframe",title:"WebSocketFrame"},sidebar:"version-1.11.0/api",previous:{title:"WebSocket",permalink:"/java/docs/1.11.0/api/class-websocket"},next:{title:"Worker",permalink:"/java/docs/1.11.0/api/class-worker"}},l=[{value:"WebSocketFrame.binary()",id:"websocketframebinary",children:[]},{value:"WebSocketFrame.text()",id:"websocketframetext",children:[]}],u={toc:l};function m(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame")," class represents frames sent over ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-websocket",title:"WebSocket"},"WebSocket")," connections in the page. Frame payload is returned by either ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-websocketframe#websocketframetext"},"WebSocketFrame.text()")," or ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-websocketframe#websocketframebinary"},"WebSocketFrame.binary()")," method depending on the its type."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-websocketframe#websocketframebinary"},"WebSocketFrame.binary()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-websocketframe#websocketframetext"},"WebSocketFrame.text()"))),(0,o.kt)("h2",{id:"websocketframebinary"},"WebSocketFrame.binary()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">")),(0,o.kt)("p",null,"Returns binary payload."),(0,o.kt)("h2",{id:"websocketframetext"},"WebSocketFrame.text()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: <",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,o.kt)("p",null,"Returns text payload."))}m.isMDXComponent=!0},86010:function(e,t,r){function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);