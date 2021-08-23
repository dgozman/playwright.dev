"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5145],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return p}});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),s=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=s(a),p=n,d=m["".concat(c,".").concat(p)]||m[p]||k[p]||o;return a?r.createElement(d,i(i({ref:t},u),{},{components:a})):r.createElement(d,i({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var s=2;s<o;s++)i[s]=a[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return k}});var r=a(7294),n=a(9443);var o=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(6010),l="tabItem_1uMI",c="tabItemActive_2DSg";var s=37,u=39;var k=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,k=e.values,m=e.groupId,p=e.className,d=o(),b=d.tabGroupChoices,f=d.setTabGroupChoices,v=(0,r.useState)(n),h=v[0],w=v[1],N=r.Children.toArray(e.children),S=[];if(null!=m){var g=b[m];null!=g&&g!==h&&k.some((function(e){return e.value===g}))&&w(g)}var y=function(e){var t=e.currentTarget,a=S.indexOf(t),r=k[a].value;w(r),null!=m&&(f(m,r),setTimeout((function(){var e,a,r,n,o,i,l,s;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,o=e.right,i=window,l=i.innerHeight,s=i.innerWidth,a>=0&&o<=s&&n<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(c),setTimeout((function(){return t.classList.remove(c)}),2e3))}),150))},W=function(e){var t,a;switch(e.keyCode){case u:var r=S.indexOf(e.target)+1;a=S[r]||S[0];break;case s:var n=S.indexOf(e.target)-1;a=S[n]||S[S.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},p)},k.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:h===t?0:-1,"aria-selected":h===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":h===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:W,onFocus:y,onClick:y},a)}))),t?(0,r.cloneElement)(N.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},9443:function(e,t,a){var r=(0,a(7294).createContext)(void 0);t.Z=r},74:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return s},default:function(){return k}});var r=a(2122),n=a(9756),o=(a(7294),a(3905)),i=(a(5064),a(8215),{id:"class-websocket",title:"WebSocket"}),l=void 0,c={unversionedId:"api/class-websocket",id:"version-1.12.0/api/class-websocket",isDocsHomePage:!1,title:"WebSocket",description:"The [WebSocket] class represents websocket connections in the page.",source:"@site/versioned_docs/version-1.12.0/api/class-websocket.mdx",sourceDirName:"api",slug:"/api/class-websocket",permalink:"/java/docs/1.12.0/api/class-websocket",version:"1.12.0",frontMatter:{id:"class-websocket",title:"WebSocket"},sidebar:"version-1.12.0/api",previous:{title:"Video",permalink:"/java/docs/1.12.0/api/class-video"},next:{title:"WebSocketFrame",permalink:"/java/docs/1.12.0/api/class-websocketframe"}},s=[{value:"WebSocket.onClose(handler)",id:"web-socket-event-close",children:[]},{value:"WebSocket.onFrameReceived(handler)",id:"web-socket-event-frame-received",children:[]},{value:"WebSocket.onFrameSent(handler)",id:"web-socket-event-frame-sent",children:[]},{value:"WebSocket.onSocketError(handler)",id:"web-socket-event-socket-error",children:[]},{value:"WebSocket.isClosed()",id:"web-socket-is-closed",children:[]},{value:"WebSocket.url()",id:"web-socket-url",children:[]},{value:"WebSocket.waitForFrameReceived(options, callback)",id:"web-socket-wait-for-frame-received",children:[]},{value:"WebSocket.waitForFrameSent(options, callback)",id:"web-socket-wait-for-frame-sent",children:[]}],u={toc:s};function k(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-websocket",title:"WebSocket"},"WebSocket")," class represents websocket connections in the page."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocket#web-socket-event-close"},"WebSocket.onClose(handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocket#web-socket-event-frame-received"},"WebSocket.onFrameReceived(handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocket#web-socket-event-frame-sent"},"WebSocket.onFrameSent(handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocket#web-socket-event-socket-error"},"WebSocket.onSocketError(handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocket#web-socket-is-closed"},"WebSocket.isClosed()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocket#web-socket-url"},"WebSocket.url()")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocket#web-socket-wait-for-frame-received"},"WebSocket.waitForFrameReceived([options], callback)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocket#web-socket-wait-for-frame-sent"},"WebSocket.waitForFrameSent([options], callback)"))),(0,o.kt)("h2",{id:"web-socket-event-close"},"WebSocket.onClose(handler)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocket",title:"WebSocket"},"WebSocket"),">")),(0,o.kt)("p",null,"Fired when the websocket closes."),(0,o.kt)("h2",{id:"web-socket-event-frame-received"},"WebSocket.onFrameReceived(handler)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame"),">")),(0,o.kt)("p",null,"Fired when the websocket receives a frame."),(0,o.kt)("h2",{id:"web-socket-event-frame-sent"},"WebSocket.onFrameSent(handler)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame"),">")),(0,o.kt)("p",null,"Fired when the websocket sends a frame."),(0,o.kt)("h2",{id:"web-socket-event-socket-error"},"WebSocket.onSocketError(handler)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,o.kt)("p",null,"Fired when the websocket has an error."),(0,o.kt)("h2",{id:"web-socket-is-closed"},"WebSocket.isClosed()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">")),(0,o.kt)("p",null,"Indicates that the web socket has been closed."),(0,o.kt)("h2",{id:"web-socket-url"},"WebSocket.url()"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,o.kt)("p",null,"Contains the URL of the WebSocket."),(0,o.kt)("h2",{id:"web-socket-wait-for-frame-received"},"WebSocket.waitForFrameReceived(","[options]",", callback)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"WebSocket.WaitForFrameReceivedOptions"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setPredicate")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html",title:"Predicate"},"Predicate"),"<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame"),">",">"," Receives the ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame")," object and resolves to truthy value when the waiting should resolve."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setTimeout")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Maximum time to wait for in milliseconds. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-browsercontext#browser-context-set-default-timeout"},"BrowserContext.setDefaultTimeout(timeout)"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"callback")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html",title:"Runnable"},"Runnable"),">"," Callback that performs the action triggering the event."),(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame"),">")),(0,o.kt)("p",null,"Performs action and waits for a frame to be sent. If predicate is provided, it passes ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame")," value into the ",(0,o.kt)("inlineCode",{parentName:"p"},"predicate")," function and waits for ",(0,o.kt)("inlineCode",{parentName:"p"},"predicate(webSocketFrame)")," to return a truthy value. Will throw an error if the WebSocket or Page is closed before the frame is received."),(0,o.kt)("h2",{id:"web-socket-wait-for-frame-sent"},"WebSocket.waitForFrameSent(","[options]",", callback)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,o.kt)("inlineCode",{parentName:"li"},"WebSocket.WaitForFrameSentOptions"),">",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setPredicate")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/function/Predicate.html",title:"Predicate"},"Predicate"),"<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame"),">",">"," Receives the ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame")," object and resolves to truthy value when the waiting should resolve."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"setTimeout")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Maximum time to wait for in milliseconds. Defaults to ",(0,o.kt)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",(0,o.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-browsercontext#browser-context-set-default-timeout"},"BrowserContext.setDefaultTimeout(timeout)"),"."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"callback")," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Runnable.html",title:"Runnable"},"Runnable"),">"," Callback that performs the action triggering the event."),(0,o.kt)("li",{parentName:"ul"},"returns: ","<",(0,o.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame"),">")),(0,o.kt)("p",null,"Performs action and waits for a frame to be sent. If predicate is provided, it passes ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-websocketframe",title:"WebSocketFrame"},"WebSocketFrame")," value into the ",(0,o.kt)("inlineCode",{parentName:"p"},"predicate")," function and waits for ",(0,o.kt)("inlineCode",{parentName:"p"},"predicate(webSocketFrame)")," to return a truthy value. Will throw an error if the WebSocket or Page is closed before the frame is sent."))}k.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);