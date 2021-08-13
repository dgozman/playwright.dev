"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6720],{3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),u=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},d=function(e){var t=u(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,h=c["".concat(o,".").concat(m)]||c[m]||p[m]||s;return r?a.createElement(h,i(i({ref:t},d),{},{components:r})):a.createElement(h,i({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,i=new Array(s);i[0]=c;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var u=2;u<s;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}c.displayName="MDXCreateElement"},8215:function(e,t,r){r(7294)},5064:function(e,t,r){r(7294),r(9443)},9443:function(e,t,r){var a=(0,r(7294).createContext)(void 0);t.Z=a},294:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return o},toc:function(){return u},default:function(){return p}});var a=r(2122),n=r(9756),s=(r(7294),r(3905)),i=(r(5064),r(8215),{id:"class-request",title:"Request"}),l=void 0,o={unversionedId:"api/class-request",id:"version-1.14.0/api/class-request",isDocsHomePage:!1,title:"Request",description:"Whenever the page sends a request for a network resource the following sequence of events are emitted by [Page]:",source:"@site/versioned_docs/version-1.14.0/api/class-request.mdx",sourceDirName:"api",slug:"/api/class-request",permalink:"/dotnet/docs/api/class-request",version:"1.14.0",frontMatter:{id:"class-request",title:"Request"},sidebar:"version-1.14.0/api",previous:{title:"Page",permalink:"/dotnet/docs/api/class-page"},next:{title:"Response",permalink:"/dotnet/docs/api/class-response"}},u=[{value:"Request.Failure",id:"request-failure",children:[]},{value:"Request.Frame",id:"request-frame",children:[]},{value:"Request.Headers",id:"request-headers",children:[]},{value:"Request.IsNavigationRequest",id:"request-is-navigation-request",children:[]},{value:"Request.Method",id:"request-method",children:[]},{value:"Request.PostData",id:"request-post-data",children:[]},{value:"Request.PostDataBuffer",id:"request-post-data-buffer",children:[]},{value:"Request.PostDataJSON",id:"request-post-data-json",children:[]},{value:"Request.RedirectedFrom",id:"request-redirected-from",children:[]},{value:"Request.RedirectedTo",id:"request-redirected-to",children:[]},{value:"Request.ResourceType",id:"request-resource-type",children:[]},{value:"Request.ResponseAsync()",id:"request-response",children:[]},{value:"Request.Timing",id:"request-timing",children:[]},{value:"Request.Url",id:"request-url",children:[]}],d={toc:u};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,a.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Whenever the page sends a request for a network resource the following sequence of events are emitted by ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page",title:"Page"},"Page"),":"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-event-request"},"event Page.Request")," emitted when the request is issued by the page."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-event-response"},"event Page.Response")," emitted when/if the response status and headers are received for the request."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-page#page-event-request-finished"},"event Page.RequestFinished")," emitted when the response body is downloaded and the request is complete.")),(0,s.kt)("p",null,"If request fails at some point, then instead of ",(0,s.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event (and possibly instead of 'response' event), the  ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-page#page-event-request-failed"},"event Page.RequestFailed")," event is emitted."),(0,s.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,s.kt)("div",{parentName:"div",className:"admonition-heading"},(0,s.kt)("h5",{parentName:"div"},(0,s.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,s.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,s.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,s.kt)("div",{parentName:"div",className:"admonition-content"},(0,s.kt)("p",{parentName:"div"},"HTTP Error responses, such as 404 or 503, are still successful responses from HTTP standpoint, so request will complete with ",(0,s.kt)("inlineCode",{parentName:"p"},"'requestfinished'")," event."))),(0,s.kt)("p",null,"If request gets a 'redirect' response, the request is successfully finished with the 'requestfinished' event, and a new request is  issued to a redirected url."),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request#request-failure"},"Request.Failure")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request#request-frame"},"Request.Frame")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request#request-headers"},"Request.Headers")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request#request-is-navigation-request"},"Request.IsNavigationRequest")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request#request-method"},"Request.Method")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request#request-post-data"},"Request.PostData")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request#request-post-data-buffer"},"Request.PostDataBuffer")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request#request-post-data-json"},"Request.PostDataJSON")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request#request-redirected-from"},"Request.RedirectedFrom")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request#request-redirected-to"},"Request.RedirectedTo")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request#request-resource-type"},"Request.ResourceType")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request#request-response"},"Request.ResponseAsync()")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request#request-timing"},"Request.Timing")),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request#request-url"},"Request.Url"))),(0,s.kt)("h2",{id:"request-failure"},"Request.Failure"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-failure-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"?",">",(0,s.kt)("a",{href:"#request-failure-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"The method returns ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," unless this request has failed, as reported by ",(0,s.kt)("inlineCode",{parentName:"p"},"requestfailed")," event."),(0,s.kt)("p",null,"Example of logging of all the failed requests:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"page.RequestFailed += (_, request) =>\n{\n    Console.WriteLine(request.Failure);\n};\n")),(0,s.kt)("h2",{id:"request-frame"},"Request.Frame"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-frame-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-frame",title:"Frame"},"Frame"),">",(0,s.kt)("a",{href:"#request-frame-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-frame",title:"Frame"},"Frame")," that initiated this request."),(0,s.kt)("h2",{id:"request-headers"},"Request.Headers"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-headers-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map",title:"Map"},"Map"),"<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),", ",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",">",(0,s.kt)("a",{href:"#request-headers-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"An object with HTTP headers associated with the request. All header names are lower-case."),(0,s.kt)("h2",{id:"request-is-navigation-request"},"Request.IsNavigationRequest"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-is-navigation-request-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),">",(0,s.kt)("a",{href:"#request-is-navigation-request-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Whether this request is driving frame's navigation."),(0,s.kt)("h2",{id:"request-method"},"Request.Method"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-method-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,s.kt)("a",{href:"#request-method-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request's method (GET, POST, etc.)"),(0,s.kt)("h2",{id:"request-post-data"},"Request.PostData"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"?",">",(0,s.kt)("a",{href:"#request-post-data-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request's post body, if any."),(0,s.kt)("h2",{id:"request-post-data-buffer"},"Request.PostDataBuffer"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-buffer-return"})," ","<","[byte","[","]]","?",">",(0,s.kt)("a",{href:"#request-post-data-buffer-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request's post body in a binary form, if any."),(0,s.kt)("h2",{id:"request-post-data-json"},"Request.PostDataJSON"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-post-data-json-return"})," ","<","[JsonElement?]",">",(0,s.kt)("a",{href:"#request-post-data-json-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns parsed request's body for ",(0,s.kt)("inlineCode",{parentName:"p"},"form-urlencoded")," and JSON as a fallback if any."),(0,s.kt)("p",null,"When the response is ",(0,s.kt)("inlineCode",{parentName:"p"},"application/x-www-form-urlencoded")," then a key/value object of the values will be returned. Otherwise it will be parsed as JSON."),(0,s.kt)("h2",{id:"request-redirected-from"},"Request.RedirectedFrom"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-from-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request",title:"Request"},"Request"),"?",">",(0,s.kt)("a",{href:"#request-redirected-from-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Request that was redirected by the server to this one, if any."),(0,s.kt)("p",null,"When the server responds with a redirect, Playwright creates a new ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-request",title:"Request"},"Request")," object. The two requests are connected by ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedFrom()")," and ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedTo()")," methods. When multiple server redirects has happened, it is possible to construct the whole redirect chain by repeatedly calling ",(0,s.kt)("inlineCode",{parentName:"p"},"redirectedFrom()"),"."),(0,s.kt)("p",null,"For example, if the website ",(0,s.kt)("inlineCode",{parentName:"p"},"http://example.com")," redirects to ",(0,s.kt)("inlineCode",{parentName:"p"},"https://example.com"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'var response = await page.GotoAsync("http://www.microsoft.com");\nConsole.WriteLine(response.Request.RedirectedFrom?.Url); // http://www.microsoft.com\n')),(0,s.kt)("p",null,"If the website ",(0,s.kt)("inlineCode",{parentName:"p"},"https://google.com")," has no redirects:"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'var response = await page.GotoAsync("https://www.google.com");\nConsole.WriteLine(response.Request.RedirectedFrom?.Url); // null\n')),(0,s.kt)("h2",{id:"request-redirected-to"},"Request.RedirectedTo"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-redirected-to-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-request",title:"Request"},"Request"),"?",">",(0,s.kt)("a",{href:"#request-redirected-to-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"New request issued by the browser if the server responded with redirect."),(0,s.kt)("p",null,"This method is the opposite of ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-request#request-redirected-from"},"Request.RedirectedFrom"),":"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},"Console.WriteLine(request.RedirectedFrom?.RedirectedTo == request); // True\n")),(0,s.kt)("h2",{id:"request-resource-type"},"Request.ResourceType"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-resource-type-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,s.kt)("a",{href:"#request-resource-type-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Contains the request's resource type as it was perceived by the rendering engine. ResourceType will be one of the following: ",(0,s.kt)("inlineCode",{parentName:"p"},"document"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"stylesheet"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"image"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"media"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"font"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"script"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"texttrack"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"xhr"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"fetch"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"eventsource"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"websocket"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"manifest"),", ",(0,s.kt)("inlineCode",{parentName:"p"},"other"),"."),(0,s.kt)("h2",{id:"request-response"},"Request.ResponseAsync()"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-response-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-response",title:"Response"},"Response"),"?",">",(0,s.kt)("a",{href:"#request-response-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"Returns the matching ",(0,s.kt)("a",{parentName:"p",href:"/dotnet/docs/api/class-response",title:"Response"},"Response")," object, or ",(0,s.kt)("inlineCode",{parentName:"p"},"null")," if the response was not received due to error."),(0,s.kt)("h2",{id:"request-timing"},"Request.Timing"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-timing-return"})," ","<","Timing",">",(0,s.kt)("a",{href:"#request-timing-return",class:"list-anchor"},"#"),(0,s.kt)("ul",{parentName:"li"},(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"startTime")," ","<","[double]",">"," Request start time in milliseconds elapsed since January 1, 1970 00:00:00 UTC"),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"domainLookupStart")," ","<","[double]",">"," Time immediately before the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"domainLookupEnd")," ","<","[double]",">"," Time immediately after the browser starts the domain name lookup for the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"connectStart")," ","<","[double]",">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"secureConnectionStart")," ","<","[double]",">"," Time immediately before the browser starts the handshake process to secure the current connection. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"connectEnd")," ","<","[double]",">"," Time immediately before the user agent starts establishing the connection to the server to retrieve the resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"requestStart")," ","<","[double]",">"," Time immediately before the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"responseStart")," ","<","[double]",">"," Time immediately after the browser starts requesting the resource from the server, cache, or local resource. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available."),(0,s.kt)("li",{parentName:"ul"},(0,s.kt)("inlineCode",{parentName:"li"},"responseEnd")," ","<","[double]",">"," Time immediately after the browser receives the last byte of the resource or immediately before the transport connection is closed, whichever comes first. The value is given in milliseconds relative to ",(0,s.kt)("inlineCode",{parentName:"li"},"startTime"),", -1 if not available.")))),(0,s.kt)("p",null,"Returns resource timing information for given request. Most of the timing values become available upon the response, ",(0,s.kt)("inlineCode",{parentName:"p"},"responseEnd")," becomes available when request finishes. Find more information at ",(0,s.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/PerformanceResourceTiming"},"Resource Timing API"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-csharp"},'var request = await page.RunAndWaitForRequestFinishedAsync(async () =>\n{\n    await page.GotoAsync("https://www.microsoft.com");\n});\nConsole.WriteLine(request.Timing.ResponseEnd);\n')),(0,s.kt)("h2",{id:"request-url"},"Request.Url"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"returns:",(0,s.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"request-url-return"})," ","<",(0,s.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),">",(0,s.kt)("a",{href:"#request-url-return",class:"list-anchor"},"#"))),(0,s.kt)("p",null,"URL of the request."))}p.isMDXComponent=!0}}]);