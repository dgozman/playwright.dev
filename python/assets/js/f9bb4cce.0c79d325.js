"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3306],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var s=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,s,n=function(e,t){if(null==e)return{};var r,s,n={},a=Object.keys(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(s=0;s<a.length;s++)r=a[s],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=s.createContext({}),l=function(e){var t=s.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return s.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return s.createElement(s.Fragment,{},t)}},h=s.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=l(r),d=n,m=h["".concat(p,".").concat(d)]||h[d]||c[d]||a;return r?s.createElement(m,i(i({ref:t},u),{},{components:r})):s.createElement(m,i({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=h;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return s.createElement.apply(null,i)}return s.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8215:function(e,t,r){var s=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return s.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return c}});var s=r(7294),n=r(9443);var a=function(){var e=(0,s.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=r(6010),o="tabItem_1uMI",p="tabItemActive_2DSg";var l=37,u=39;var c=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,c=e.values,h=e.groupId,d=e.className,m=a(),f=m.tabGroupChoices,y=m.setTabGroupChoices,k=(0,s.useState)(n),b=k[0],v=k[1],N=s.Children.toArray(e.children),x=[];if(null!=h){var g=f[h];null!=g&&g!==b&&c.some((function(e){return e.value===g}))&&v(g)}var _=function(e){var t=e.currentTarget,r=x.indexOf(t),s=c[r].value;v(s),null!=h&&(y(h,s),setTimeout((function(){var e,r,s,n,a,i,o,l;(e=t.getBoundingClientRect(),r=e.top,s=e.left,n=e.bottom,a=e.right,i=window,o=i.innerHeight,l=i.innerWidth,r>=0&&a<=l&&n<=o&&s>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},w=function(e){var t,r;switch(e.keyCode){case u:var s=x.indexOf(e.target)+1;r=x[s]||x[0];break;case l:var n=x.indexOf(e.target)-1;r=x[n]||x[x.length-1]}null==(t=r)||t.focus()};return s.createElement("div",{className:"tabs-container"},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},d)},c.map((function(e){var t=e.value,r=e.label;return s.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,i.Z)("tabs__item",o,{"tabs__item--active":b===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:w,onFocus:_,onClick:_},r)}))),t?(0,s.cloneElement)(N.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):s.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},9443:function(e,t,r){var s=(0,r(7294).createContext)(void 0);t.Z=s},7228:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return l},default:function(){return c}});var s=r(2122),n=r(9756),a=(r(7294),r(3905)),i=(r(5064),r(8215),{id:"class-apiresponse",title:"APIResponse"}),o=void 0,p={unversionedId:"api/class-apiresponse",id:"api/class-apiresponse",isDocsHomePage:!1,title:"APIResponse",description:"APIResponse] class represents responses returned by [apirequestcontext.get(url, **kwargs) and similar methods.",source:"@site/docs/api/class-apiresponse.mdx",sourceDirName:"api",slug:"/api/class-apiresponse",permalink:"/python/docs/next/api/class-apiresponse",version:"current",frontMatter:{id:"class-apiresponse",title:"APIResponse"}},l=[{value:"api_response.body()",id:"api-response-body",children:[]},{value:"api_response.dispose()",id:"api-response-dispose",children:[]},{value:"api_response.headers",id:"api-response-headers",children:[]},{value:"api_response.headers_array",id:"api-response-headers-array",children:[]},{value:"api_response.json()",id:"api-response-json",children:[]},{value:"api_response.ok",id:"api-response-ok",children:[]},{value:"api_response.status",id:"api-response-status",children:[]},{value:"api_response.status_text",id:"api-response-status-text",children:[]},{value:"api_response.text()",id:"api-response-text",children:[]},{value:"api_response.url",id:"api-response-url",children:[]}],u={toc:l};function c(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,a.kt)("wrapper",(0,s.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-apiresponse",title:"APIResponse"},"APIResponse")," class represents responses returned by ",(0,a.kt)("a",{parentName:"p",href:"/python/docs/next/api/class-apirequestcontext#api-request-context-get"},"api_request_context.get(url, **kwargs)")," and similar methods."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apiresponse#api-response-body"},"api_response.body()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apiresponse#api-response-dispose"},"api_response.dispose()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apiresponse#api-response-headers"},"api_response.headers")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apiresponse#api-response-headers-array"},"api_response.headers_array")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apiresponse#api-response-json"},"api_response.json()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apiresponse#api-response-ok"},"api_response.ok")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apiresponse#api-response-status"},"api_response.status")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apiresponse#api-response-status-text"},"api_response.status_text")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apiresponse#api-response-text"},"api_response.text()")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"/python/docs/next/api/class-apiresponse#api-response-url"},"api_response.url"))),(0,a.kt)("h2",{id:"api-response-body"},"api_response.body()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-body-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#bytes",title:"bytes"},"bytes"),">",(0,a.kt)("a",{href:"#api-response-body-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the buffer with response body."),(0,a.kt)("h2",{id:"api-response-dispose"},"api_response.dispose()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-dispose-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/constants.html#None",title:"None"},"NoneType"),">",(0,a.kt)("a",{href:"#api-response-dispose-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Disposes the body of this response. If not called then the body will stay in memory until the context closes."),(0,a.kt)("h2",{id:"api-response-headers"},"api_response.headers"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-headers-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"[",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),", ",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),"]",">",(0,a.kt)("a",{href:"#api-response-headers-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"An object with all the response HTTP headers associated with this response."),(0,a.kt)("h2",{id:"api-response-headers-array"},"api_response.headers_array"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-headers-array-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"},"List"),"[",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"},"Dict"),"]",">",(0,a.kt)("a",{href:"#api-response-headers-array-return",class:"list-anchor"},"#"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Name of the header."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," Value of the header.")))),(0,a.kt)("p",null,"An array with all the request HTTP headers associated with this response. Header names are not lower-cased. Headers with multiple entries, such as ",(0,a.kt)("inlineCode",{parentName:"p"},"Set-Cookie"),", appear in the array multiple times."),(0,a.kt)("h2",{id:"api-response-json"},"api_response.json()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-json-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",(0,a.kt)("a",{href:"#api-response-json-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the JSON representation of response body."),(0,a.kt)("p",null,"This method will throw if the response body is not parsable via ",(0,a.kt)("inlineCode",{parentName:"p"},"JSON.parse"),"."),(0,a.kt)("h2",{id:"api-response-ok"},"api_response.ok"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-ok-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"},"bool"),">",(0,a.kt)("a",{href:"#api-response-ok-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,a.kt)("h2",{id:"api-response-status"},"api_response.status"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-status-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"int"},"int"),">",(0,a.kt)("a",{href:"#api-response-status-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,a.kt)("h2",{id:"api-response-status-text"},"api_response.status_text"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-status-text-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,a.kt)("a",{href:"#api-response-status-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,a.kt)("h2",{id:"api-response-text"},"api_response.text()"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-text-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,a.kt)("a",{href:"#api-response-text-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Returns the text representation of response body."),(0,a.kt)("h2",{id:"api-response-url"},"api_response.url"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"returns:",(0,a.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"api-response-url-return"})," ","<",(0,a.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,a.kt)("a",{href:"#api-response-url-return",class:"list-anchor"},"#"))),(0,a.kt)("p",null,"Contains the URL of the response."))}c.isMDXComponent=!0},6010:function(e,t,r){function s(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=s(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=s(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);