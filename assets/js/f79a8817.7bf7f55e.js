"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9662],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(r),d=n,h=m["".concat(o,".").concat(d)]||m[d]||c[d]||i;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var u=2;u<i;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},58215:function(e,t,r){var a=r(67294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},55064:function(e,t,r){r.d(t,{Z:function(){return c}});var a=r(67294),n=r(79443);var i=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=r(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var u=37,p=39;var c=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,c=e.values,m=e.groupId,d=e.className,h=i(),f=h.tabGroupChoices,k=h.setTabGroupChoices,v=(0,a.useState)(n),N=v[0],b=v[1],g=a.Children.toArray(e.children),q=[];if(null!=m){var y=f[m];null!=y&&y!==N&&c.some((function(e){return e.value===y}))&&b(y)}var S=function(e){var t=e.currentTarget,r=q.indexOf(t),a=c[r].value;b(a),null!=m&&(k(m,a),setTimeout((function(){var e,r,a,n,i,s,l,u;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,i=e.right,s=window,l=s.innerHeight,u=s.innerWidth,r>=0&&i<=u&&n<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},w=function(e){var t,r;switch(e.keyCode){case p:var a=q.indexOf(e.target)+1;r=q[a]||q[0];break;case u:var n=q.indexOf(e.target)-1;r=q[n]||q[q.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},d)},c.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,className:(0,s.Z)("tabs__item",l,{"tabs__item--active":N===t}),key:t,ref:function(e){return q.push(e)},onKeyDown:w,onFocus:S,onClick:S},r)}))),t?(0,a.cloneElement)(g.filter((function(e){return e.props.value===N}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})}))))}},79443:function(e,t,r){var a=(0,r(67294).createContext)(void 0);t.Z=a},34628:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return c}});var a=r(22122),n=r(19756),i=(r(67294),r(3905)),s=(r(55064),r(58215),{id:"class-request",title:"Request"}),l=void 0,o={unversionedId:"api/class-request",id:"version-1.12.0/api/class-request",isDocsHomePage:!1,title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/versioned_docs/version-1.12.0/api/class-request.mdx",sourceDirName:"api",slug:"/api/class-request",permalink:"/docs/1.12.0/api/class-request",version:"1.12.0",frontMatter:{id:"class-request",title:"Request"},sidebar:"version-1.12.0/api",previous:{title:"Page",permalink:"/docs/1.12.0/api/class-page"},next:{title:"Response",permalink:"/docs/1.12.0/api/class-response"}},u=[{value:"request.failure()",id:"request-failure",children:[]},{value:"request.frame()",id:"request-frame",children:[]},{value:"request.headers()",id:"request-headers",children:[]},{value:"request.isNavigationRequest()",id:"request-is-navigation-request",children:[]},{value:"request.method()",id:"request-method",children:[]},{value:"request.postData()",id:"request-post-data",children:[]},{value:"request.postDataBuffer()",id:"request-post-data-buffer",children:[]},{value:"request.postDataJSON()",id:"request-post-data-json",children:[]},{value:"request.redirectedFrom()",id:"request-redirected-from",children:[]},{value:"request.redirectedTo()",id:"request-redirected-to",children:[]},{value:"request.resourceType()",id:"request-resource-type",children:[]},{value:"request.response()",id:"request-response",children:[]},{value:"request.timing()",id:"request-timing",children:[]},{value:"request.url()",id:"request-url",children:[]}],p={toc:u};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-page",title:"Page"},"Page"),":"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-page#page-event-request"},"page.on('request')")," emitted when the request is issued by the page."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-page#page-event-response"},"page.on('response')")," emitted when/if the response status and headers are received for the request."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-page#page-event-request-finished"},"page.on('requestfinished')")," emitted when the response body is downloaded and the request is complete.")),(0,i.kt)("p",null,"If request fails at some point, then instead of ",(0,i.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-page#page-event-request-failed"},"page.on('requestfailed')")," event is emitted."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,i.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event."))),(0,i.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request#request-failure"},"request.failure()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request#request-frame"},"request.frame()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request#request-headers"},"request.headers()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request#request-is-navigation-request"},"request.isNavigationRequest()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request#request-method"},"request.method()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request#request-post-data"},"request.postData()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request#request-post-data-buffer"},"request.postDataBuffer()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request#request-post-data-json"},"request.postDataJSON()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request#request-redirected-from"},"request.redirectedFrom()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request#request-redirected-to"},"request.redirectedTo()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request#request-resource-type"},"request.resourceType()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request#request-response"},"request.response()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request#request-timing"},"request.timing()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request#request-url"},"request.url()"))),(0,i.kt)("h2",{id:"request-failure"},"request.failure()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"errorText")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">"," Human-readable error message, e.g. ",(0,i.kt)("inlineCode",{parentName:"li"},"'net::ERR_FAILED'"),".")))),(0,i.kt)("p",null,"The method returns ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",(0,i.kt)("inlineCode",{parentName:"p"},"requestfailed")," event."),(0,i.kt)("p",null,"Example of logging of all the failed requests:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"page.on('requestfailed', request => {\n  console.log(request.url() + ' ' + request.failure().errorText);\n});\n")),(0,i.kt)("h2",{id:"request-frame"},"request.frame()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-frame",title:"Frame"},"Frame"),">")),(0,i.kt)("p",null,"Returns the ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-frame",title:"Frame"},"Frame")," that initiated this request."),(0,i.kt)("h2",{id:"request-headers"},"request.headers()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">")),(0,i.kt)("p",null,"An object with HTTP headers associated with the request. All header names are lower-case."),(0,i.kt)("h2",{id:"request-is-navigation-request"},"request.isNavigationRequest()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">")),(0,i.kt)("p",null,"Whether this request is driving frame's navigation."),(0,i.kt)("h2",{id:"request-method"},"request.method()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,i.kt)("p",null,"Request's method (GET, POST, etc.)"),(0,i.kt)("h2",{id:"request-post-data"},"request.postData()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,i.kt)("p",null,"Request's post body, if any."),(0,i.kt)("h2",{id:"request-post-data-buffer"},"request.postDataBuffer()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,i.kt)("a",{parentName:"li",href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"},"Buffer"),">")),(0,i.kt)("p",null,"Request's post body in a binary form, if any."),(0,i.kt)("h2",{id:"request-post-data-json"},"request.postDataJSON()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">")),(0,i.kt)("p",null,"Returns parsed request's body for ",(0,i.kt)("inlineCode",{parentName:"p"},"form-urlencoded")," and JSON as a fallback if any."),(0,i.kt)("p",null,"When the response is ",(0,i.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),(0,i.kt)("h2",{id:"request-redirected-from"},"request.redirectedFrom()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request",title:"Request"},"Request"),">")),(0,i.kt)("p",null,"Request that was redirected by the server to this one, if any."),(0,i.kt)("p",null,"When the server responds with a redirect, Playwright creates a new ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-request",title:"Request"},"Request")," object. The two requests are connected by ",(0,i.kt)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",(0,i.kt)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),(0,i.kt)("p",null,"For example, if the website ",(0,i.kt)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",(0,i.kt)("inlineCode",{parentName:"p"},"https://example.com"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const response = await page.goto('http://example.com');\nconsole.log(response.request().redirectedFrom().url()); // 'http://example.com'\n")),(0,i.kt)("p",null,"If the website ",(0,i.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const response = await page.goto('https://google.com');\nconsole.log(response.request().redirectedFrom()); // null\n")),(0,i.kt)("h2",{id:"request-redirected-to"},"request.redirectedTo()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-request",title:"Request"},"Request"),">")),(0,i.kt)("p",null,"New request issued by the browser if the server responded with redirect."),(0,i.kt)("p",null,"This method is the opposite of ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-request#request-redirected-from"},"request.redirectedFrom()"),":"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"console.log(request.redirectedFrom().redirectedTo() === request); // true\n")),(0,i.kt)("h2",{id:"request-resource-type"},"request.resourceType()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,i.kt)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: ",(0,i.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"stylesheet"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"media"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"font"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"texttrack"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"xhr"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"eventsource"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"manifest"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"other"),"."),(0,i.kt)("h2",{id:"request-response"},"request.response()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),"<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null",title:"null"},"null"),"|",(0,i.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-response",title:"Response"},"Response"),">",">")),(0,i.kt)("p",null,"Returns the matching ",(0,i.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-response",title:"Response"},"Response")," object, or ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),(0,i.kt)("h2",{id:"request-timing"},"request.timing()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"},"Object"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"startTime")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domainLookupStart")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"domainLookupEnd")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectStart")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"secureConnectionStart")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"connectEnd")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"requestStart")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"responseStart")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"responseEnd")," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"},"number"),">"," Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",(0,i.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),(0,i.kt)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",(0,i.kt)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"},"Resource Timing API"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"const [request] = await Promise.all([\n  page.waitForEvent('requestfinished'),\n  page.goto('http://example.com')\n]);\nconsole.log(request.timing());\n")),(0,i.kt)("h2",{id:"request-url"},"request.url()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">")),(0,i.kt)("p",null,"URL of the request."))}c.isMDXComponent=!0},86010:function(e,t,r){function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);