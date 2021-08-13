"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9550],{3905:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return m}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function s(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?s(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)a=s[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=u(a),m=n,h=d["".concat(o,".").concat(m)]||d[m]||p[m]||s;return a?r.createElement(h,i(i({ref:t},c),{},{components:a})):r.createElement(h,i({ref:t},c))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=a.length,i=new Array(s);i[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<s;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(67294),n=a(79443);var s=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(86010),l="tabItem_1uMI",o="tabItemActive_2DSg";var u=37,c=39;var p=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,p=e.values,d=e.groupId,m=e.className,h=s(),f=h.tabGroupChoices,k=h.setTabGroupChoices,v=(0,r.useState)(n),q=v[0],g=v[1],N=r.Children.toArray(e.children),b=[];if(null!=d){var j=f[d];null!=j&&j!==q&&p.some((function(e){return e.value===j}))&&g(j)}var y=function(e){var t=e.currentTarget,a=b.indexOf(t),r=p[a].value;g(r),null!=d&&(k(d,r),setTimeout((function(){var e,a,r,n,s,i,l,u;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,s=e.right,i=window,l=i.innerHeight,u=i.innerWidth,a>=0&&s<=u&&n<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},R=function(e){var t,a;switch(e.keyCode){case c:var r=b.indexOf(e.target)+1;a=b[r]||b[0];break;case u:var n=b.indexOf(e.target)-1;a=b[n]||b[b.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:q===t?0:-1,"aria-selected":q===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":q===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:R,onFocus:y,onClick:y},a)}))),t?(0,r.cloneElement)(N.filter((function(e){return e.props.value===q}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==q})}))))}},79443:function(e,t,a){var r=(0,a(67294).createContext)(void 0);t.Z=r},79162:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var r=a(22122),n=a(19756),s=(a(67294),a(3905)),i=(a(55064),a(58215),{id:"class-request",title:"Request"}),l=void 0,o={unversionedId:"api/class-request",id:"api/class-request",isDocsHomePage:!1,title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/docs/api/class-request.mdx",sourceDirName:"api",slug:"/api/class-request",permalink:"/java/docs/next/api/class-request",version:"current",frontMatter:{id:"class-request",title:"Request"},sidebar:"api",previous:{title:"PlaywrightException",permalink:"/java/docs/next/api/class-playwrightexception"},next:{title:"Response",permalink:"/java/docs/next/api/class-response"}},u=[{value:"Request.failure()",id:"request-failure",children:[]},{value:"Request.frame()",id:"request-frame",children:[]},{value:"Request.headers()",id:"request-headers",children:[]},{value:"Request.isNavigationRequest()",id:"request-is-navigation-request",children:[]},{value:"Request.method()",id:"request-method",children:[]},{value:"Request.postData()",id:"request-post-data",children:[]},{value:"Request.postDataBuffer()",id:"request-post-data-buffer",children:[]},{value:"Request.redirectedFrom()",id:"request-redirected-from",children:[]},{value:"Request.redirectedTo()",id:"request-redirected-to",children:[]},{value:"Request.resourceType()",id:"request-resource-type",children:[]},{value:"Request.response()",id:"request-response",children:[]},{value:"Request.timing()",id:"request-timing",children:[]},{value:"Request.url()",id:"request-url",children:[]}],c={toc:u};function p(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page",title:"Page"},"Page"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-request"},"Page.onRequest(handler)")," emitted when the request is issued by the page."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-response"},"Page.onResponse(handler)")," emitted when/if the response status and headers are received for the request."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-request-finished"},"Page.onRequestFinished(handler)")," emitted when the response body is downloaded and the request is complete.")),(0,s.kt)("p",null,"If request fails at some point, then instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-page#page-event-request-failed"},"Page.onRequestFailed(handler)")," event is emitted."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,s.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event."))),(0,s.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-failure"},"Request.failure()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-frame"},"Request.frame()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-headers"},"Request.headers()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-is-navigation-request"},"Request.isNavigationRequest()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-method"},"Request.method()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-post-data"},"Request.postData()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-post-data-buffer"},"Request.postDataBuffer()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-redirected-from"},"Request.redirectedFrom()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-redirected-to"},"Request.redirectedTo()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-resource-type"},"Request.resourceType()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-response"},"Request.response()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-timing"},"Request.timing()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request#request-url"},"Request.url()"))),(0,s.kt)("h2",{id:"request-failure"},"Request.failure()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-failure-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,s.kt)("a",{href:"#request-failure-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"The method returns ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",(0,s.kt)("inlineCode",{parentName:"p"},"requestfailed")," event."),(0,s.kt)("p",null,"Example of logging of all the failed requests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'page.onRequestFailed(request -> {\n  System.out.println(request.url() + " " + request.failure());\n});\n')),(0,s.kt)("h2",{id:"request-frame"},"Request.frame()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-frame-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-frame",title:"Frame"},"Frame"),">",(0,s.kt)("a",{href:"#request-frame-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-frame",title:"Frame"},"Frame")," that initiated this request."),(0,s.kt)("h2",{id:"request-headers"},"Request.headers()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",">",(0,s.kt)("a",{href:"#request-headers-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"An object with HTTP headers associated with the request. All header names are lower-case."),(0,s.kt)("h2",{id:"request-is-navigation-request"},"Request.isNavigationRequest()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-is-navigation-request-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">",(0,s.kt)("a",{href:"#request-is-navigation-request-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Whether this request is driving frame's navigation."),(0,s.kt)("h2",{id:"request-method"},"Request.method()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-method-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,s.kt)("a",{href:"#request-method-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request's method (GET, POST, etc.)"),(0,s.kt)("h2",{id:"request-post-data"},"Request.postData()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,s.kt)("a",{href:"#request-post-data-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request's post body, if any."),(0,s.kt)("h2",{id:"request-post-data-buffer"},"Request.postDataBuffer()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-buffer-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">",(0,s.kt)("a",{href:"#request-post-data-buffer-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request's post body in a binary form, if any."),(0,s.kt)("h2",{id:"request-redirected-from"},"Request.redirectedFrom()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-from-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request",title:"Request"},"Request"),">",(0,s.kt)("a",{href:"#request-redirected-from-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request that was redirected by the server to this one, if any."),(0,s.kt)("p",null,"When the server responds with a redirect, Playwright creates a new ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-request",title:"Request"},"Request")," object. The two requests are connected by ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),(0,s.kt)("p",null,"For example, if the website ",(0,s.kt)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",(0,s.kt)("inlineCode",{parentName:"p"},"https://example.com"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'Response response = page.navigate("http://example.com");\nSystem.out.println(response.request().redirectedFrom().url()); // "http://example.com"\n')),(0,s.kt)("p",null,"If the website ",(0,s.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'Response response = page.navigate("https://google.com");\nSystem.out.println(response.request().redirectedFrom()); // null\n')),(0,s.kt)("h2",{id:"request-redirected-to"},"Request.redirectedTo()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-to-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-request",title:"Request"},"Request"),">",(0,s.kt)("a",{href:"#request-redirected-to-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"New request issued by the browser if the server responded with redirect."),(0,s.kt)("p",null,"This method is the opposite of ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-request#request-redirected-from"},"Request.redirectedFrom()"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},"System.out.println(request.redirectedFrom().redirectedTo() == request); // true\n")),(0,s.kt)("h2",{id:"request-resource-type"},"Request.resourceType()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-resource-type-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,s.kt)("a",{href:"#request-resource-type-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: ",(0,s.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"stylesheet"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"media"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"font"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"texttrack"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"xhr"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"eventsource"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"manifest"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"other"),"."),(0,s.kt)("h2",{id:"request-response"},"Request.response()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-response-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,s.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-response",title:"Response"},"Response"),">",(0,s.kt)("a",{href:"#request-response-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the matching ",(0,s.kt)("a",{parentName:"p",href:"/java/docs/next/api/class-response",title:"Response"},"Response")," object, or ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),(0,s.kt)("h2",{id:"request-timing"},"Request.timing()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-timing-return"})," ","<","Timing",">",(0,s.kt)("a",{href:"#request-timing-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"startTime")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"domainLookupStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"domainLookupEnd")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"connectStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"secureConnectionStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"connectEnd")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"requestStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"responseStart")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"responseEnd")," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),(0,s.kt)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",(0,s.kt)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"},"Resource Timing API"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-java"},'page.onRequestFinished(request -> {\n  Timing timing = request.timing();\n  System.out.println(timing.responseEnd - timing.startTime);\n});\npage.navigate("http://example.com");\n')),(0,s.kt)("h2",{id:"request-url"},"Request.url()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-url-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">",(0,s.kt)("a",{href:"#request-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"URL of the request."))}p.isMDXComponent=!0},86010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);