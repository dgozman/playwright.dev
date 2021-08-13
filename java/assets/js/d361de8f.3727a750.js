"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3982],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(67294);function s(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){s(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,s=function(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(s[a]=e[a])}return s}var i=r.createContext({}),p=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=p(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,s=e.mdxType,n=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(a),m=s,f=d["".concat(i,".").concat(m)]||d[m]||c[m]||n;return a?r.createElement(f,o(o({ref:t},u),{},{components:a})):r.createElement(f,o({ref:t},u))}));function m(e,t){var a=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var n=a.length,o=new Array(n);o[0]=d;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:s,o[1]=l;for(var p=2;p<n;p++)o[p]=a[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,s=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:s},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return c}});var r=a(67294),s=a(79443);var n=function(){var e=(0,r.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(86010),l="tabItem_1uMI",i="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,a=e.block,s=e.defaultValue,c=e.values,d=e.groupId,m=e.className,f=n(),h=f.tabGroupChoices,v=f.setTabGroupChoices,k=(0,r.useState)(s),b=k[0],g=k[1],y=r.Children.toArray(e.children),j=[];if(null!=d){var N=h[d];null!=N&&N!==b&&c.some((function(e){return e.value===N}))&&g(N)}var R=function(e){var t=e.currentTarget,a=j.indexOf(t),r=c[a].value;g(r),null!=d&&(v(d,r),setTimeout((function(){var e,a,r,s,n,o,l,p;(e=t.getBoundingClientRect(),a=e.top,r=e.left,s=e.bottom,n=e.right,o=window,l=o.innerHeight,p=o.innerWidth,a>=0&&n<=p&&s<=l&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(i),setTimeout((function(){return t.classList.remove(i)}),2e3))}),150))},w=function(e){var t,a;switch(e.keyCode){case u:var r=j.indexOf(e.target)+1;a=j[r]||j[0];break;case p:var s=j.indexOf(e.target)-1;a=j[s]||j[j.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},c.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:b===t?0:-1,"aria-selected":b===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":b===t}),key:t,ref:function(e){return j.push(e)},onKeyDown:w,onFocus:R,onClick:R},a)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==b})}))))}},79443:function(e,t,a){var r=(0,a(67294).createContext)(void 0);t.Z=r},67147:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var r=a(22122),s=a(19756),n=(a(67294),a(3905)),o=(a(55064),a(58215),{id:"class-response",title:"Response"}),l=void 0,i={unversionedId:"api/class-response",id:"version-1.11.0/api/class-response",isDocsHomePage:!1,title:"Response",description:"[Response] class represents responses which are received by page.",source:"@site/versioned_docs/version-1.11.0/api/class-response.mdx",sourceDirName:"api",slug:"/api/class-response",permalink:"/java/docs/1.11.0/api/class-response",version:"1.11.0",frontMatter:{id:"class-response",title:"Response"},sidebar:"version-1.11.0/api",previous:{title:"Request",permalink:"/java/docs/1.11.0/api/class-request"},next:{title:"Route",permalink:"/java/docs/1.11.0/api/class-route"}},p=[{value:"Response.body()",id:"responsebody",children:[]},{value:"Response.finished()",id:"responsefinished",children:[]},{value:"Response.frame()",id:"responseframe",children:[]},{value:"Response.headers()",id:"responseheaders",children:[]},{value:"Response.ok()",id:"responseok",children:[]},{value:"Response.request()",id:"responserequest",children:[]},{value:"Response.status()",id:"responsestatus",children:[]},{value:"Response.statusText()",id:"responsestatustext",children:[]},{value:"Response.text()",id:"responsetext",children:[]},{value:"Response.url()",id:"responseurl",children:[]}],u={toc:p};function c(e){var t=e.components,a=(0,s.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-response",title:"Response"},"Response")," class represents responses which are received by page."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responsebody"},"Response.body()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responsefinished"},"Response.finished()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responseframe"},"Response.frame()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responseheaders"},"Response.headers()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responseok"},"Response.ok()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responserequest"},"Response.request()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responsestatus"},"Response.status()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responsestatustext"},"Response.statusText()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responsetext"},"Response.text()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-response#responseurl"},"Response.url()"))),(0,n.kt)("h2",{id:"responsebody"},"Response.body()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">")),(0,n.kt)("p",null,"Returns the buffer with response body."),(0,n.kt)("h2",{id:"responsefinished"},"Response.finished()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"},"null"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,n.kt)("p",null,"Waits for this response to finish, returns failure error if request failed."),(0,n.kt)("h2",{id:"responseframe"},"Response.frame()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-frame",title:"Frame"},"Frame"),">")),(0,n.kt)("p",null,"Returns the ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-frame",title:"Frame"},"Frame")," that initiated this response."),(0,n.kt)("h2",{id:"responseheaders"},"Response.headers()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"},"Map"),"<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),", ",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">>")),(0,n.kt)("p",null,"Returns the object with HTTP headers associated with the response. All header names are lower-case."),(0,n.kt)("h2",{id:"responseok"},"Response.ok()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">")),(0,n.kt)("p",null,"Contains a boolean stating whether the response was successful (status in the range 200-299) or not."),(0,n.kt)("h2",{id:"responserequest"},"Response.request()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.11.0/api/class-request",title:"Request"},"Request"),">")),(0,n.kt)("p",null,"Returns the matching ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-request",title:"Request"},"Request")," object."),(0,n.kt)("h2",{id:"responsestatus"},"Response.status()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"int"},"int"),">")),(0,n.kt)("p",null,"Contains the status code of the response (e.g., 200 for a success)."),(0,n.kt)("h2",{id:"responsestatustext"},"Response.statusText()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,n.kt)("p",null,'Contains the status text of the response (e.g. usually an "OK" for a success).'),(0,n.kt)("h2",{id:"responsetext"},"Response.text()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,n.kt)("p",null,"Returns the text representation of response body."),(0,n.kt)("h2",{id:"responseurl"},"Response.url()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: <",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,n.kt)("p",null,"Contains the URL of the response."))}c.isMDXComponent=!0},86010:function(e,t,a){function r(e){var t,a,s="";if("string"==typeof e||"number"==typeof e)s+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(s&&(s+=" "),s+=a);else for(t in e)e[t]&&(s&&(s+=" "),s+=t);return s}function s(){for(var e,t,a=0,s="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(s&&(s+=" "),s+=t);return s}a.d(t,{Z:function(){return s}})}}]);