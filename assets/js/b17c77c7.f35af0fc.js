"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[9776],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return h}});var a=r(67294);function s(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){s(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,s=function(e,t){if(null==e)return{};var r,a,s={},n=Object.keys(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||(s[r]=e[r]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)r=n[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(s[r]=e[r])}return s}var o=a.createContext({}),l=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return a.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,s=e.mdxType,n=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=l(r),h=s,f=d["".concat(o,".").concat(h)]||d[h]||c[h]||n;return r?a.createElement(f,i(i({ref:t},u),{},{components:r})):a.createElement(f,i({ref:t},u))}));function h(e,t){var r=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=r.length,i=new Array(n);i[0]=d;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:s,i[1]=p;for(var l=2;l<n;l++)i[l]=r[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},56324:function(e,t,r){r.r(t),r.d(t,{assets:function(){return m},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return k}});var a=r(3905),s=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))o.call(t,r)&&u(e,r,t[r]);if(p)for(var r of p(t))l.call(t,r)&&u(e,r,t[r]);return e};const d={id:"class-apiresponse",title:"APIResponse"},h=void 0,f={unversionedId:"api/class-apiresponse",id:"version-1.23/api/class-apiresponse",title:"APIResponse",description:"APIResponse] class represents responses returned by [apiRequestContext.get(url[, options]) and similar methods.",source:"@site/versioned_docs/version-1.23/api/class-apiresponse.mdx",sourceDirName:"api",slug:"/api/class-apiresponse",permalink:"/docs/api/class-apiresponse",tags:[],version:"1.23",frontMatter:{id:"class-apiresponse",title:"APIResponse"},sidebar:"api",previous:{title:"APIRequestContext",permalink:"/docs/api/class-apirequestcontext"},next:{title:"Browser",permalink:"/docs/api/class-browser"}},m={},k=[{value:"apiResponse.body()",id:"api-response-body",level:2},{value:"apiResponse.dispose()",id:"api-response-dispose",level:2},{value:"apiResponse.headers()",id:"api-response-headers",level:2},{value:"apiResponse.headersArray()",id:"api-response-headers-array",level:2},{value:"apiResponse.json()",id:"api-response-json",level:2},{value:"apiResponse.ok()",id:"api-response-ok",level:2},{value:"apiResponse.status()",id:"api-response-status",level:2},{value:"apiResponse.statusText()",id:"api-response-status-text",level:2},{value:"apiResponse.text()",id:"api-response-text",level:2},{value:"apiResponse.url()",id:"api-response-url",level:2}],b={toc:k};function v(e){var t,r=e,{components:s}=r,u=((e,t)=>{var r={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&l.call(e,a)&&(r[a]=e[a]);return r})(r,["components"]);return(0,a.kt)("wrapper",(t=c(c({},b),u),n(t,i({components:s,mdxType:"MDXLayout"}))),(0,a.kt)("p",null,(0,a.kt)("a",c({parentName:"p"},{href:"/docs/api/class-apiresponse",title:"APIResponse"}),"APIResponse")," class represents responses returned by ",(0,a.kt)("a",c({parentName:"p"},{href:"/docs/api/class-apirequestcontext#api-request-context-get"}),"apiRequestContext.get(url[, options])")," and similar methods."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/api/class-apiresponse#api-response-body"}),"apiResponse.body()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/api/class-apiresponse#api-response-dispose"}),"apiResponse.dispose()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/api/class-apiresponse#api-response-headers"}),"apiResponse.headers()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/api/class-apiresponse#api-response-headers-array"}),"apiResponse.headersArray()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/api/class-apiresponse#api-response-json"}),"apiResponse.json()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/api/class-apiresponse#api-response-ok"}),"apiResponse.ok()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/api/class-apiresponse#api-response-status"}),"apiResponse.status()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/api/class-apiresponse#api-response-status-text"}),"apiResponse.statusText()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/api/class-apiresponse#api-response-text"}),"apiResponse.text()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"/docs/api/class-apiresponse#api-response-url"}),"apiResponse.url()"))),(0,a.kt)("h2",c({},{id:"api-response-body"}),"apiResponse.body()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-body-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,a.kt)("a",c({parentName:"li"},{href:"https://nodejs.org/api/buffer.html#buffer_class_buffer",title:"Buffer"}),"Buffer"),">",">",(0,a.kt)("a",{href:"#api-response-body-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the buffer with response body."),(0,a.kt)("h2",c({},{id:"api-response-dispose"}),"apiResponse.dispose()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-dispose-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"}),"void"),">",">",(0,a.kt)("a",{href:"#api-response-dispose-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Disposes the body of this response. If not called then the body will stay in memory until the context closes."),(0,a.kt)("h2",c({},{id:"api-response-headers"}),"apiResponse.headers()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-headers-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),", ",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",">",(0,a.kt)("a",{href:"#api-response-headers-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"An object with all the response HTTP headers associated with this response."),(0,a.kt)("h2",c({},{id:"api-response-headers-array"}),"apiResponse.headersArray()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-headers-array-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",">",(0,a.kt)("a",{href:"#api-response-headers-array-return",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Name of the header."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">"," Value of the header.")))),(0,a.kt)("p",null,"An array with all the request HTTP headers associated with this response. Header names are not lower-cased. Headers with multiple entries, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,a.kt)("h2",c({},{id:"api-response-json"}),"apiResponse.json()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-json-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable"),">",">",(0,a.kt)("a",{href:"#api-response-json-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the JSON representation of response body."),(0,a.kt)("p",null,"This method will throw if the response body is not parsable via ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.parse"),"."),(0,a.kt)("h2",c({},{id:"api-response-ok"}),"apiResponse.ok()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-ok-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"}),"boolean"),">",(0,a.kt)("a",{href:"#api-response-ok-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,a.kt)("h2",c({},{id:"api-response-status"}),"apiResponse.status()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-status-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Number_type",title:"Number"}),"number"),">",(0,a.kt)("a",{href:"#api-response-status-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,a.kt)("h2",c({},{id:"api-response-status-text"}),"apiResponse.statusText()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-status-text-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,a.kt)("a",{href:"#api-response-status-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,a.kt)("h2",c({},{id:"api-response-text"}),"apiResponse.text()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-text-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",">",(0,a.kt)("a",{href:"#api-response-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the text representation of response body."),(0,a.kt)("h2",c({},{id:"api-response-url"}),"apiResponse.url()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-url-return"})," ","<",(0,a.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">",(0,a.kt)("a",{href:"#api-response-url-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the URL of the response."))}v.isMDXComponent=!0}}]);