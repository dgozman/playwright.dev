"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[137],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var r=a(7294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,i=function(e,t){if(null==e)return{};var a,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=r.createContext({}),c=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var a=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(a),m=i,f=h["".concat(s,".").concat(m)]||h[m]||p[m]||n;return a?r.createElement(f,l(l({ref:t},u),{},{components:a})):r.createElement(f,l({ref:t},u))}));function m(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var n=a.length,l=new Array(n);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=a[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}h.displayName="MDXCreateElement"},8215:function(e,t,a){var r=a(7294);t.Z=function(e){var t=e.children,a=e.hidden,i=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:i},t)}},5064:function(e,t,a){a.d(t,{Z:function(){return p}});var r=a(7294),i=a(9443);var n=function(){var e=(0,r.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=a(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,p=e.values,h=e.groupId,m=e.className,f=n(),d=f.tabGroupChoices,v=f.setTabGroupChoices,k=(0,r.useState)(i),g=k[0],b=k[1],y=r.Children.toArray(e.children),N=[];if(null!=h){var j=d[h];null!=j&&j!==g&&p.some((function(e){return e.value===j}))&&b(j)}var C=function(e){var t=e.currentTarget,a=N.indexOf(t),r=p[a].value;b(r),null!=h&&(v(h,r),setTimeout((function(){var e,a,r,i,n,l,o,c;(e=t.getBoundingClientRect(),a=e.top,r=e.left,i=e.bottom,n=e.right,l=window,o=l.innerHeight,c=l.innerWidth,a>=0&&n<=c&&i<=o&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},F=function(e){var t,a;switch(e.keyCode){case u:var r=N.indexOf(e.target)+1;a=N[r]||N[0];break;case c:var i=N.indexOf(e.target)-1;a=N[i]||N[N.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:F,onFocus:C,onClick:C},a)}))),t?(0,r.cloneElement)(y.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},9443:function(e,t,a){var r=(0,a(7294).createContext)(void 0);t.Z=r},1823:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var r=a(2122),i=a(9756),n=(a(7294),a(3905)),l=(a(5064),a(8215),{id:"class-filechooser",title:"FileChooser"}),o=void 0,s={unversionedId:"api/class-filechooser",id:"version-1.12.0/api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:"FileChooser] objects are dispatched by the page in the [Page.onFileChooser(handler) event.",source:"@site/versioned_docs/version-1.12.0/api/class-filechooser.mdx",sourceDirName:"api",slug:"/api/class-filechooser",permalink:"/java/docs/1.12.0/api/class-filechooser",version:"1.12.0",frontMatter:{id:"class-filechooser",title:"FileChooser"},sidebar:"version-1.12.0/api",previous:{title:"ElementHandle",permalink:"/java/docs/1.12.0/api/class-elementhandle"},next:{title:"Frame",permalink:"/java/docs/1.12.0/api/class-frame"}},c=[{value:"FileChooser.element()",id:"file-chooser-element",children:[]},{value:"FileChooser.isMultiple()",id:"file-chooser-is-multiple",children:[]},{value:"FileChooser.page()",id:"file-chooser-page",children:[]},{value:"FileChooser.setFiles(files, options)",id:"file-chooser-set-files",children:[]}],u={toc:c};function p(e){var t=e.components,a=(0,i.Z)(e,["components"]);return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-filechooser",title:"FileChooser"},"FileChooser")," objects are dispatched by the page in the ",(0,n.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-page#page-event-file-chooser"},"Page.onFileChooser(handler)")," event."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'FileChooser fileChooser = page.waitForFileChooser(() -> page.click("upload"));\nfileChooser.setFiles(Paths.get("myfile.pdf"));\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-filechooser#file-chooser-element"},"FileChooser.element()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-filechooser#file-chooser-is-multiple"},"FileChooser.isMultiple()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-filechooser#file-chooser-page"},"FileChooser.page()")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-filechooser#file-chooser-set-files"},"FileChooser.setFiles(files[, options])"))),(0,n.kt)("h2",{id:"file-chooser-element"},"FileChooser.element()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: ","<",(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-elementhandle",title:"ElementHandle"},"ElementHandle"),">")),(0,n.kt)("p",null,"Returns input element associated with this file chooser."),(0,n.kt)("h2",{id:"file-chooser-is-multiple"},"FileChooser.isMultiple()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">")),(0,n.kt)("p",null,"Returns whether this file chooser accepts multiple files."),(0,n.kt)("h2",{id:"file-chooser-page"},"FileChooser.page()"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"returns: ","<",(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-page",title:"Page"},"Page"),">")),(0,n.kt)("p",null,"Returns page this file chooser belongs to."),(0,n.kt)("h2",{id:"file-chooser-set-files"},"FileChooser.setFiles(files","[, options]",")"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"files")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/List.html",title:"List"},"List"),"<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/nio/file/Path.html",title:"Path"},"Path"),">|",(0,n.kt)("inlineCode",{parentName:"li"},"FilePayload"),"|",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/util/List.html",title:"List"},"List"),"<",(0,n.kt)("inlineCode",{parentName:"li"},"FilePayload"),">",">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setName")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," File name"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setMimeType")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," File type"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setBuffer")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"byte[]"},"byte","[","]"),">"," File content"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,n.kt)("inlineCode",{parentName:"li"},"FileChooser.SetFilesOptions"),">",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setNoWaitAfter")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"boolean"},"boolean"),">"," Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",(0,n.kt)("inlineCode",{parentName:"li"},"false"),"."),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"setTimeout")," ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Maximum time in milliseconds, defaults to 30 seconds, pass ",(0,n.kt)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-browsercontext#browser-context-set-default-timeout"},"BrowserContext.setDefaultTimeout(timeout)")," or ",(0,n.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-page#page-set-default-timeout"},"Page.setDefaultTimeout(timeout)")," methods."))),(0,n.kt)("li",{parentName:"ul"},"returns: ","<",(0,n.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,n.kt)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",(0,n.kt)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}p.isMDXComponent=!0},6010:function(e,t,a){function r(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}function i(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(i&&(i+=" "),i+=t);return i}a.d(t,{Z:function(){return i}})}}]);