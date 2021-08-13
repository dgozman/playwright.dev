"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[42961],{3905:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return f}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var p=r.createContext({}),u=function(e){var t=r.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=u(a),f=n,d=c["".concat(p,".").concat(f)]||c[f]||s[f]||l;return a?r.createElement(d,o(o({ref:t},m),{},{components:a})):r.createElement(d,o({ref:t},m))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,o[1]=i;for(var u=2;u<l;u++)o[u]=a[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:function(e,t,a){var r=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,n=e.className;return r.createElement("div",{role:"tabpanel",hidden:a,className:n},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return s}});var r=a(67294),n=a(79443);var l=function(){var e=(0,r.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(86010),i="tabItem_1uMI",p="tabItemActive_2DSg";var u=37,m=39;var s=function(e){var t=e.lazy,a=e.block,n=e.defaultValue,s=e.values,c=e.groupId,f=e.className,d=l(),h=d.tabGroupChoices,k=d.setTabGroupChoices,v=(0,r.useState)(n),g=v[0],y=v[1],b=r.Children.toArray(e.children),N=[];if(null!=c){var w=h[c];null!=w&&w!==g&&s.some((function(e){return e.value===w}))&&y(w)}var O=function(e){var t=e.currentTarget,a=N.indexOf(t),r=s[a].value;y(r),null!=c&&(k(c,r),setTimeout((function(){var e,a,r,n,l,o,i,u;(e=t.getBoundingClientRect(),a=e.top,r=e.left,n=e.bottom,l=e.right,o=window,i=o.innerHeight,u=o.innerWidth,a>=0&&l<=u&&n<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},j=function(e){var t,a;switch(e.keyCode){case m:var r=N.indexOf(e.target)+1;a=N[r]||N[0];break;case u:var n=N.indexOf(e.target)-1;a=N[n]||N[N.length-1]}null==(t=a)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},f)},s.map((function(e){var t=e.value,a=e.label;return r.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,o.Z)("tabs__item",i,{"tabs__item--active":g===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:O,onClick:O},a)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,a){var r=(0,a(67294).createContext)(void 0);t.Z=r},9912:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var r=a(22122),n=a(19756),l=(a(67294),a(3905)),o=(a(55064),a(58215),{id:"cheat-sheet",title:"Cheat Sheet"}),i=void 0,p={unversionedId:"cheat-sheet",id:"version-1.13.0/cheat-sheet",isDocsHomePage:!1,title:"Cheat Sheet",description:"- Download & Upload",source:"@site/versioned_docs/version-1.13.0/cheat-sheet.mdx",sourceDirName:".",slug:"/cheat-sheet",permalink:"/docs/1.13.0/cheat-sheet",version:"1.13.0",frontMatter:{id:"cheat-sheet",title:"Cheat Sheet"}},u=[{value:"Download &amp; Upload",id:"download--upload",children:[{value:"Download file",id:"download-file",children:[]},{value:"Upload file",id:"upload-file",children:[]},{value:"Upload multiple files",id:"upload-multiple-files",children:[]},{value:"Upload from memory",id:"upload-from-memory",children:[]},{value:"Remove selected files",id:"remove-selected-files",children:[]},{value:"Handle file picker",id:"handle-file-picker",children:[]}]},{value:"Manage &lt;iframe&gt;s",id:"manage-iframes",children:[{value:"List frames",id:"list-frames",children:[]},{value:"Frame by <code>name</code> attribute",id:"frame-by-name-attribute",children:[]},{value:"Frame by URL",id:"frame-by-url",children:[]},{value:"Frame by selector",id:"frame-by-selector",children:[]}]}],m={toc:u};function s(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#download--upload"},"Download & Upload"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#download-file"},"Download file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#upload-file"},"Upload file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#upload-multiple-files"},"Upload multiple files")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#upload-from-memory"},"Upload from memory")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#remove-selected-files"},"Remove selected files")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#handle-file-picker"},"Handle file picker")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#manage-60iframe62s"},"Manage ","<","iframe",">","s"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#list-frames"},"List frames")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#frame-by-name-attribute"},"Frame by ",(0,l.kt)("inlineCode",{parentName:"a"},"name")," attribute")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#frame-by-url"},"Frame by URL")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#frame-by-selector"},"Frame by selector"))))),(0,l.kt)("h2",{id:"download--upload"},"Download & Upload"),(0,l.kt)("h3",{id:"download-file"},"Download file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const [ download ] = await Promise.all([\n  page.waitForEvent('download'),\n  page.click('button')\n]);\nconst path = await download.path();\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"/docs/1.13.0/downloads"},"Learn more")),(0,l.kt)("h3",{id:"upload-file"},"Upload file"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await page.setInputFiles('input#upload', 'myfile.pdf');\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h3",{id:"upload-multiple-files"},"Upload multiple files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await page.setInputFiles('input#upload', ['file1.txt', 'file2.txt']);\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h3",{id:"upload-from-memory"},"Upload from memory"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await page.setInputFiles('input#upload', {\n  name: 'file.txt',\n  mimeType: 'text/plain',\n  buffer: Buffer.from('this is test')\n});\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h3",{id:"remove-selected-files"},"Remove selected files"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"await page.setInputFiles('input#upload', []);\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h3",{id:"handle-file-picker"},"Handle file picker"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const [fileChooser] = await Promise.all([\n  page.waitForEvent('filechooser'),\n  page.click('upload')\n]);\nawait fileChooser.setFiles('myfile.pdf');\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./input#upload-files"},"Learn more")),(0,l.kt)("h2",{id:"manage-iframes"},"Manage ","<","iframe",">","s"),(0,l.kt)("h3",{id:"list-frames"},"List frames"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const frames = page.frames();\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")),(0,l.kt)("h3",{id:"frame-by-name-attribute"},"Frame by ",(0,l.kt)("inlineCode",{parentName:"h3"},"name")," attribute"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const frame = page.frame('frame-login');\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")),(0,l.kt)("h3",{id:"frame-by-url"},"Frame by URL"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const frame = page.frame({ url: /.*domain.*/ });\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")),(0,l.kt)("h3",{id:"frame-by-selector"},"Frame by selector"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"const frameElementHandle = await page.$('.frame-class');\nconst frame = await frameElementHandle.contentFrame();\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"./core-concepts#pages-and-frames"},"Learn more")))}s.isMDXComponent=!0},86010:function(e,t,a){function r(e){var t,a,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(n&&(n+=" "),n+=a);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,a=0,n="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(n&&(n+=" "),n+=t);return n}a.d(t,{Z:function(){return n}})}}]);