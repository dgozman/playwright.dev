(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{302:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return p})),a.d(t,"default",(function(){return u}));var n=a(3),r=a(7),i=(a(0),a(404)),l=a(407),o=a(408),c={id:"class-filechooser",title:"FileChooser"},s={unversionedId:"api/class-filechooser",id:"version-1.8.0/api/class-filechooser",isDocsHomePage:!1,title:"FileChooser",description:'FileChooser] objects are dispatched by the page in the [page.on("filechooser") event.',source:"@site/versioned_docs/version-1.8.0/api/class-filechooser.mdx",slug:"/api/class-filechooser",permalink:"/python/docs/1.8.0/api/class-filechooser",version:"1.8.0",sidebar:"version-1.8.0/api",previous:{title:"ElementHandle",permalink:"/python/docs/1.8.0/api/class-elementhandle"},next:{title:"Frame",permalink:"/python/docs/1.8.0/api/class-frame"}},p=[{value:"file_chooser.element",id:"file_chooserelement",children:[]},{value:"file_chooser.is_multiple()",id:"file_chooseris_multiple",children:[]},{value:"file_chooser.page",id:"file_chooserpage",children:[]},{value:"file_chooser.set_files(files, **kwargs)",id:"file_chooserset_filesfiles-kwargs",children:[]}],b={toc:p};function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-filechooser",title:"FileChooser"}),"FileChooser")," objects are dispatched by the page in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-page#pageonfilechooser"}),'page.on("filechooser")')," event."),Object(i.b)(l.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(i.b)(o.a,{value:"sync",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'with page.expect_file_chooser() as fc_info:\n    page.click("upload")\nfile_chooser = fc_info.value\nfile_chooser.set_files("myfile.pdf")\n'))),Object(i.b)(o.a,{value:"async",mdxType:"TabItem"},Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'async with page.expect_file_chooser() as fc_info:\n    await page.click("upload")\nfile_chooser = await fc_info.value\nawait file_chooser.set_files("myfile.pdf")\n')))),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-filechooser#file_chooserelement"}),"file_chooser.element")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-filechooser#file_chooseris_multiple"}),"file_chooser.is_multiple()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-filechooser#file_chooserpage"}),"file_chooser.page")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-filechooser#file_chooserset_filesfiles-kwargs"}),"file_chooser.set_files(files, **kwargs)"))),Object(i.b)("h2",{id:"file_chooserelement"},"file_chooser.element"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">")),Object(i.b)("p",null,"Returns input element associated with this file chooser."),Object(i.b)("h2",{id:"file_chooseris_multiple"},"file_chooser.is_multiple()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),">")),Object(i.b)("p",null,"Returns whether this file chooser accepts multiple files."),Object(i.b)("h2",{id:"file_chooserpage"},"file_chooser.page"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-page",title:"Page"}),"Page"),">")),Object(i.b)("p",null,"Returns page this file chooser belongs to."),Object(i.b)("h2",{id:"file_chooserset_filesfiles-kwargs"},"file_chooser.set_files(files, **kwargs)"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"files")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]","|",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"}),"List"),"[",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Union",title:"Union"}),"Union"),"[",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),", ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://realpython.com/python-pathlib/",title:"pathlib.Path"}),"pathlib.Path"),"]","]","|",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"|",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.List",title:"List"}),"List"),"[",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/typing.html#typing.Dict",title:"Dict"}),"Dict"),"]",">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"name")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> ","[File]"," name"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"mimeType")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"}),"str"),"> ","[File]"," type"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"buffer")," <","[Buffer]","> File content"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"no_wait_after")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html",title:"bool"}),"bool"),"> Actions that initiate navigations are waiting for these navigations to happen and for pages to start loading. You can opt out of waiting via setting this flag. You would only need this option in the exceptional cases such as navigating to inaccessible pages. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.python.org/3/library/stdtypes.html#numeric-types-int-float-complex",title:"float"}),"float"),"> Maximum time in milliseconds, defaults to 30 seconds, pass ",Object(i.b)("inlineCode",{parentName:"li"},"0")," to disable timeout. The default value can be changed by using the ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-browsercontext#browser_contextset_default_timeouttimeout"}),"browser_context.set_default_timeout(timeout)")," or ",Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-page#pageset_default_timeouttimeout"}),"page.set_default_timeout(timeout)")," methods.")),Object(i.b)("p",null,"Sets the value of the file input this chooser is associated with. If some of the ",Object(i.b)("inlineCode",{parentName:"p"},"filePaths")," are relative paths, then they are resolved relative to the the current working directory. For empty array, clears the selected files."))}u.isMDXComponent=!0},403:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},404:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return h}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},f=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(a),f=n,h=b["".concat(l,".").concat(f)]||b[f]||u[f]||i;return a?r.a.createElement(h,o(o({ref:t},s),{},{components:a})):r.a.createElement(h,o({ref:t},s))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},405:function(e,t,a){"use strict";var n=a(0),r=a(406);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},406:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},407:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(405),l=a(403),o=a(53),c=a.n(o),s=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,o=e.defaultValue,b=e.values,u=e.groupId,f=e.className,h=Object(i.a)(),m=h.tabGroupChoices,d=h.setTabGroupChoices,y=Object(n.useState)(o),O=y[0],j=y[1],g=n.Children.toArray(e.children);if(null!=u){var v=m[u];null!=v&&v!==O&&b.some((function(e){return e.value===v}))&&j(v)}var _=function(e){j(e),null!=u&&d(u,e)},N=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":a},f)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(l.a)("tabs__item",c.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return _(t)},onClick:function(){_(t)}},a)}))),t?Object(n.cloneElement)(g.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},408:function(e,t,a){"use strict";var n=a(3),r=a(0),i=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}}}]);