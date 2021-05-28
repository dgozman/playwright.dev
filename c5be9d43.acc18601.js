(window.webpackJsonp=window.webpackJsonp||[]).push([[640],{711:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return d})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var o=a(3),n=a(7),l=(a(0),a(901)),r={id:"class-download",title:"Download"},d={unversionedId:"api/class-download",id:"version-1.5.0/api/class-download",isDocsHomePage:!1,title:"Download",description:"Download] objects are dispatched by page via the ['download' event.",source:"@site/versioned_docs/version-1.5.0/api/class-download.mdx",slug:"/api/class-download",permalink:"/docs/1.5.0/api/class-download",version:"1.5.0",sidebar:"version-1.5.0/api",previous:{title:"Dialog",permalink:"/docs/1.5.0/api/class-dialog"},next:{title:"FileChooser",permalink:"/docs/1.5.0/api/class-filechooser"}},c=[{value:"download.createReadStream()",id:"downloadcreatereadstream",children:[]},{value:"download.delete()",id:"downloaddelete",children:[]},{value:"download.failure()",id:"downloadfailure",children:[]},{value:"download.path()",id:"downloadpath",children:[]},{value:"download.saveAs(path)",id:"downloadsaveaspath",children:[]},{value:"download.suggestedFilename()",id:"downloadsuggestedfilename",children:[]},{value:"download.url()",id:"downloadurl",children:[]}],i={toc:c};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/1.5.0/api/class-download#class-download",title:"Download"}),"Download")," objects are dispatched by page via the ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"/docs/1.5.0/api/class-page#event-download"}),"'download'")," event."),Object(l.b)("p",null,"All the downloaded files belonging to the browser context are deleted when the browser context is closed. All downloaded files are deleted when the browser closes."),Object(l.b)("p",null,"Download event is emitted once the download starts. Download path becomes available\nonce download completes:"),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{className:"language-js"}),"const [ download ] = await Promise.all([\n  page.waitForEvent('download'), // wait for download to start\n  page.click('a')\n]);\n// wait for download to complete\nconst path = await download.path();\n...\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},Object(l.b)("strong",{parentName:"p"},"NOTE")," Browser context ",Object(l.b)("strong",{parentName:"p"},"must")," be created with the ",Object(l.b)("inlineCode",{parentName:"p"},"acceptDownloads")," set to ",Object(l.b)("inlineCode",{parentName:"p"},"true")," when user needs access to the downloaded content. If ",Object(l.b)("inlineCode",{parentName:"p"},"acceptDownloads")," is not set or set to ",Object(l.b)("inlineCode",{parentName:"p"},"false"),", download events are emitted, but the actual download is not performed and user has no access to the downloaded files.")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-download#downloadcreatereadstream"}),"download.createReadStream()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-download#downloaddelete"}),"download.delete()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-download#downloadfailure"}),"download.failure()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-download#downloadpath"}),"download.path()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-download#downloadsaveaspath"}),"download.saveAs(path)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-download#downloadsuggestedfilename"}),"download.suggestedFilename()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"/docs/1.5.0/api/class-download#downloadurl"}),"download.url()"))),Object(l.b)("h2",{id:"downloadcreatereadstream"},"download.createReadStream()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://nodejs.org/api/stream.htmlapi.mdx#stream_class_stream_readable",title:"Readable"}),"Readable"),">>")),Object(l.b)("p",null,"Returns readable stream for current download or ",Object(l.b)("inlineCode",{parentName:"p"},"null")," if download failed."),Object(l.b)("h2",{id:"downloaddelete"},"download.delete()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(l.b)("p",null,"Deletes the downloaded file."),Object(l.b)("h2",{id:"downloadfailure"},"download.failure()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">>")),Object(l.b)("p",null,"Returns download error if any."),Object(l.b)("h2",{id:"downloadpath"},"download.path()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/null"}),"null"),"|",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">>")),Object(l.b)("p",null,"Returns path to the downloaded file in case of successful download."),Object(l.b)("h2",{id:"downloadsaveaspath"},"download.saveAs(path)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"path")," <",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Path where the download should be saved."),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(l.b)("p",null,"Saves the download to a user-specified path."),Object(l.b)("h2",{id:"downloadsuggestedfilename"},"download.suggestedFilename()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">")),Object(l.b)("p",null,"Returns suggested filename for this download. It is typically computed by the browser from the ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Content-Disposition"}),Object(l.b)("inlineCode",{parentName:"a"},"Content-Disposition"))," response header or the ",Object(l.b)("inlineCode",{parentName:"p"},"download")," attribute. See the spec on ",Object(l.b)("a",Object(o.a)({parentName:"p"},{href:"https://html.spec.whatwg.org/#downloading-resources"}),"whatwg"),". Different browsers can use different logic for computing it."),Object(l.b)("h2",{id:"downloadurl"},"download.url()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(o.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">")),Object(l.b)("p",null,"Returns downloaded url."))}s.isMDXComponent=!0},901:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return m}));var o=a(0),n=a.n(o);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,o)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,o,n=function(e,t){if(null==e)return{};var a,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)a=l[o],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=n.a.createContext({}),s=function(e){var t=n.a.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):d(d({},t),e)),a},b=function(e){var t=s(e.components);return n.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,o=e.mdxType,l=e.originalType,r=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),b=s(a),u=o,m=b["".concat(r,".").concat(u)]||b[u]||p[u]||l;return a?n.a.createElement(m,d(d({ref:t},i),{},{components:a})):n.a.createElement(m,d({ref:t},i))}));function m(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=a.length,r=new Array(l);r[0]=u;var d={};for(var c in t)hasOwnProperty.call(t,c)&&(d[c]=t[c]);d.originalType=e,d.mdxType="string"==typeof e?e:o,r[1]=d;for(var i=2;i<l;i++)r[i]=a[i];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);