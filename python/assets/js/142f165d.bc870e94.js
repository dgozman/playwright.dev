"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6675],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),c=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,f=m["".concat(i,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(f,s(s({ref:t},p),{},{components:n})):a.createElement(f,s({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,s[1]=l;for(var c=2;c<o;c++)s[c]=n[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(79443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(86010),l="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,m=e.groupId,d=e.className,f=o(),g=f.tabGroupChoices,h=f.setTabGroupChoices,y=(0,a.useState)(r),k=y[0],v=y[1],b=a.Children.toArray(e.children),N=[];if(null!=m){var C=g[m];null!=C&&C!==k&&u.some((function(e){return e.value===C}))&&v(C)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),a=u[n].value;v(a),null!=m&&(h(m,a),setTimeout((function(){var e,n,a,r,o,s,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,s=window,l=s.innerHeight,c=s.innerWidth,n>=0&&o<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},O=function(e){var t,n;switch(e.keyCode){case p:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case c:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,s.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:O,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},71400:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),s=(n(55064),n(58215),{id:"class-consolemessage",title:"ConsoleMessage"}),l=void 0,i={unversionedId:"api/class-consolemessage",id:"version-1.13.0/api/class-consolemessage",isDocsHomePage:!1,title:"ConsoleMessage",description:'ConsoleMessage] objects are dispatched by page via the [page.on("console") event.',source:"@site/versioned_docs/version-1.13.0/api/class-consolemessage.mdx",sourceDirName:"api",slug:"/api/class-consolemessage",permalink:"/python/docs/1.13.0/api/class-consolemessage",version:"1.13.0",frontMatter:{id:"class-consolemessage",title:"ConsoleMessage"},sidebar:"version-1.13.0/api",previous:{title:"CDPSession",permalink:"/python/docs/1.13.0/api/class-cdpsession"},next:{title:"Dialog",permalink:"/python/docs/1.13.0/api/class-dialog"}},c=[{value:"console_message.args",id:"console-message-args",children:[]},{value:"console_message.location",id:"console-message-location",children:[]},{value:"console_message.text",id:"console-message-text",children:[]},{value:"console_message.type",id:"console-message-type",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.13.0/api/class-consolemessage",title:"ConsoleMessage"},"ConsoleMessage")," objects are dispatched by page via the ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.13.0/api/class-page#page-event-console"},'page.on("console")')," event."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.13.0/api/class-consolemessage#console-message-args"},"console_message.args")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.13.0/api/class-consolemessage#console-message-location"},"console_message.location")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.13.0/api/class-consolemessage#console-message-text"},"console_message.text")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.13.0/api/class-consolemessage#console-message-type"},"console_message.type"))),(0,o.kt)("h2",{id:"console-message-args"},"console_message.args"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-args-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.13.0/api/class-jshandle",title:"JSHandle"},"JSHandle"),"]",">",(0,o.kt)("a",{href:"#console-message-args-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"List of arguments passed to a ",(0,o.kt)("inlineCode",{parentName:"p"},"console")," function call. See also ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.13.0/api/class-page#page-event-console"},'page.on("console")'),"."),(0,o.kt)("h2",{id:"console-message-location"},"console_message.location"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-location-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),">",(0,o.kt)("a",{href:"#console-message-location-return",class:"list-anchor"},"#"),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"url")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," URL of the resource."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"lineNumber")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," 0-based line number in the resource."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"columnNumber")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">"," 0-based column number in the resource.")))),(0,o.kt)("h2",{id:"console-message-text"},"console_message.text"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-text-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,o.kt)("a",{href:"#console-message-text-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"The text of the console message."),(0,o.kt)("h2",{id:"console-message-type"},"console_message.type"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"console-message-type-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,o.kt)("a",{href:"#console-message-type-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"One of the following values: ",(0,o.kt)("inlineCode",{parentName:"p"},"'log'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'debug'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'info'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'error'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'warning'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'dir'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'dirxml'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'table'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'trace'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'clear'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'startGroup'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'startGroupCollapsed'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'endGroup'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'assert'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'profile'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'profileEnd'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'count'"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"'timeEnd'"),"."))}u.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);