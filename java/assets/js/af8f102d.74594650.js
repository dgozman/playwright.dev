"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[10609],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return h}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),u=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=u(a),h=r,m=d["".concat(s,".").concat(h)]||d[h]||c[h]||o;return a?n.createElement(m,i(i({ref:t},p),{},{components:a})):n.createElement(m,i({ref:t},p))}));function h(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},98197:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return N},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return k}});var n=a(3905),r=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&p(e,a,t[a]);if(l)for(var a of l(t))u.call(t,a)&&p(e,a,t[a]);return e};const d={id:"class-route",title:"Route"},h=void 0,m={unversionedId:"api/class-route",id:"api/class-route",title:"Route",description:"Whenever a network route is set up with Page.route(url, handler[, options]) or BrowserContext.route(url, handler[, options]), the Route object allows to handle the route.",source:"@site/docs/api/class-route.mdx",sourceDirName:"api",slug:"/api/class-route",permalink:"/java/docs/next/api/class-route",tags:[],version:"current",frontMatter:{id:"class-route",title:"Route"},sidebar:"api",previous:{title:"Response",permalink:"/java/docs/next/api/class-response"},next:{title:"Selectors",permalink:"/java/docs/next/api/class-selectors"}},f={},k=[{value:"Route.abort(errorCode)",id:"route-abort",level:2},{value:"Route.fulfill(options)",id:"route-fulfill",level:2},{value:"Route.request()",id:"route-request",level:2},{value:"Route.resume(options)",id:"route-continue",level:2}],v={toc:k};function N(e){var t,a=e,{components:r}=a,p=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=c(c({},v),p),o(t,i({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Whenever a network route is set up with ",(0,n.kt)("a",c({parentName:"p"},{href:"/java/docs/next/api/class-page#page-route"}),"Page.route(url, handler[, options])")," or ",(0,n.kt)("a",c({parentName:"p"},{href:"/java/docs/next/api/class-browsercontext#browser-context-route"}),"BrowserContext.route(url, handler[, options])"),", the ",(0,n.kt)("inlineCode",{parentName:"p"},"Route")," object allows to handle the route."),(0,n.kt)("p",null,"Learn more about ",(0,n.kt)("a",c({parentName:"p"},{href:"/java/docs/next/network"}),"networking"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/java/docs/next/api/class-route#route-abort"}),"Route.abort([errorCode])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/java/docs/next/api/class-route#route-fulfill"}),"Route.fulfill([options])")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/java/docs/next/api/class-route#route-request"}),"Route.request()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"/java/docs/next/api/class-route#route-continue"}),"Route.resume([options])"))),(0,n.kt)("h2",c({},{id:"route-abort"}),"Route.abort(","[errorCode]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"errorCode"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-option-error-code"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Optional error code. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"failed"),", could be one of the following:",(0,n.kt)("a",{href:"#route-abort-option-error-code",class:"list-anchor"},"#"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'aborted'")," - An operation was aborted (due to user action)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'accessdenied'")," - Permission to access a resource, other than the network, was denied"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'addressunreachable'")," - The IP address is unreachable. This usually means that there is no route to the specified host or network."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'blockedbyclient'")," - The client chose to block the request."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'blockedbyresponse'")," - The request failed because the response was delivered along with requirements which are not met ('X-Frame-Options' and 'Content-Security-Policy' ancestor checks, for instance)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'connectionaborted'")," - A connection timed out as a result of not receiving an ACK for data sent."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'connectionclosed'")," - A connection was closed (corresponding to a TCP FIN)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'connectionfailed'")," - A connection attempt failed."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'connectionrefused'")," - A connection attempt was refused."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'connectionreset'")," - A connection was reset (corresponding to a TCP RST)."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'internetdisconnected'")," - The Internet connection has been lost."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'namenotresolved'")," - The host name could not be resolved."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'timedout'")," - An operation timed out."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"'failed'")," - A generic failure occurred."))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-abort-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#route-abort-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Aborts the route's request."),(0,n.kt)("h2",c({},{id:"route-fulfill"}),"Route.fulfill(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"Route.FulfillOptions"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setBody"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-body"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," Optional response body as text.",(0,n.kt)("a",{href:"#route-fulfill-option-body",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setBodyBytes"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-body-bytes"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"}),"byte","[","]"),">"," Optional response body as raw bytes.",(0,n.kt)("a",{href:"#route-fulfill-option-body-bytes",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setContentType"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-content-type"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," If set, equals to setting ",(0,n.kt)("inlineCode",{parentName:"li"},"Content-Type")," response header.",(0,n.kt)("a",{href:"#route-fulfill-option-content-type",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setHeaders"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-headers"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"}),"Map"),"<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),", ",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",">"," Response headers. Header values will be converted to a string.",(0,n.kt)("a",{href:"#route-fulfill-option-headers",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setPath"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-path"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"}),"Path"),">"," File path to respond with. The content type will be inferred from file extension. If ",(0,n.kt)("inlineCode",{parentName:"li"},"path")," is a relative path, then it is resolved relative to the current working directory.",(0,n.kt)("a",{href:"#route-fulfill-option-path",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setResponse"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-response"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"/java/docs/next/api/class-apiresponse",title:"APIResponse"}),"APIResponse"),">"," ",(0,n.kt)("a",c({parentName:"li"},{href:"/java/docs/next/api/class-apiresponse",title:"APIResponse"}),"APIResponse")," to fulfill route's request with. Individual fields of the response (such as headers) can be overridden using fulfill options.",(0,n.kt)("a",{href:"#route-fulfill-option-response",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setStatus"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-option-status"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"}),"int"),">"," Response status code, defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"200"),".",(0,n.kt)("a",{href:"#route-fulfill-option-status",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-fulfill-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#route-fulfill-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Fulfills route's request with given response."),(0,n.kt)("p",null,"An example of fulfilling all requests with 404 responses:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-java"}),'page.route("**/*", route -> {\n  route.fulfill(new Route.FulfillOptions()\n    .setStatus(404)\n    .setContentType("text/plain")\n    .setBody("Not Found!"));\n});\n')),(0,n.kt)("p",null,"An example of serving static file:"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-java"}),'page.route("**/xhr_endpoint", route -> route.fulfill(\n  new Route.FulfillOptions().setPath(Paths.get("mock_data.json"))));\n')),(0,n.kt)("h2",c({},{id:"route-request"}),"Route.request()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-request-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"/java/docs/next/api/class-request",title:"Request"}),"Request"),">",(0,n.kt)("a",{href:"#route-request-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"A request to be routed."),(0,n.kt)("h2",c({},{id:"route-continue"}),"Route.resume(","[options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"Route.ResumeOptions"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setHeaders"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-headers"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"}),"Map"),"<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),", ",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">",">"," If set changes the request HTTP headers. Header values will be converted to a string.",(0,n.kt)("a",{href:"#route-continue-option-headers",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setMethod"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-method"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," If set changes the request method (e.g. GET or POST)",(0,n.kt)("a",{href:"#route-continue-option-method",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setPostData"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-post-data"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),"|",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"}),"byte","[","]"),">"," If set changes the post data of request",(0,n.kt)("a",{href:"#route-continue-option-post-data",class:"list-anchor"},"#")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setUrl"),(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-option-url"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),">"," If set changes the request URL. New URL must have same protocol as original one.",(0,n.kt)("a",{href:"#route-continue-option-url",class:"list-anchor"},"#")))),(0,n.kt)("li",{parentName:"ul"},"returns:",(0,n.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"route-continue-return"})," ","<",(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">",(0,n.kt)("a",{href:"#route-continue-return",class:"list-anchor"},"#"))),(0,n.kt)("p",null,"Continues route's request with optional overrides."),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-java"}),'page.route("**/*", route -> {\n  // Override headers\n  Map<String, String> headers = new HashMap<>(route.request().headers());\n  headers.put("foo", "bar"); // set "foo" header\n  headers.remove("origin"); // remove "origin" header\n  route.resume(new Route.ResumeOptions().setHeaders(headers));\n});\n')))}N.isMDXComponent=!0}}]);