(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{100:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return o})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return p})),t.d(a,"default",(function(){return d}));var n=t(3),r=t(7),l=(t(0),t(404)),c=t(407),s=t(408),o={id:"handles",title:"Handles"},i={unversionedId:"handles",id:"version-1.8.0/handles",isDocsHomePage:!1,title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/versioned_docs/version-1.8.0/handles.mdx",slug:"/handles",permalink:"/python/docs/1.8.0/handles",version:"1.8.0"},p=[{value:"API reference",id:"api-reference",children:[]},{value:"Element Handles",id:"element-handles",children:[]},{value:"Handles as parameters",id:"handles-as-parameters",children:[]},{value:"Handle Lifecycle",id:"handle-lifecycle",children:[{value:"API reference",id:"api-reference-1",children:[]}]}],b={toc:p};function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},b,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-jshandle",title:"JSHandle"}),"JSHandle")," to reference any JavaScript objects in the page"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),Object(l.b)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-jshandle",title:"JSHandle"}),"JSHandle")," as well."),Object(l.b)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-jshandle",title:"JSHandle"}),"JSHandle")," class API for these and methods."),Object(l.b)("h3",{id:"api-reference"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-jshandle",title:"JSHandle"}),"JSHandle")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"))),Object(l.b)("p",null,"Here is the easiest way to obtain a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(l.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"js_handle = page.evaluate_handle('window')\n#  Use jsHandle for evaluations.\n"))),Object(l.b)(s.a,{value:"async",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"js_handle = await page.evaluate_handle('window')\n#  Use jsHandle for evaluations.\n")))),Object(l.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"ul_element_handle = page.wait_for_selector('ul')\n#  Use ul_element_handle for actions and evaluation.\n"))),Object(l.b)(s.a,{value:"async",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"ul_element_handle = await page.wait_for_selector('ul')\n#  Use ul_element_handle for actions and evaluation.\n")))),Object(l.b)("h2",{id:"element-handles"},"Element Handles"),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"It is recommended to use selector-based actions like ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-page#pageclickselector-kwargs"}),"page.click(selector, **kwargs)")," rather than using the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," for input actions, unless your use case specifically requires the use of handles."))),Object(l.b)("p",null,"When ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is required, it is recommended to fetch it with the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-page#pagewait_for_selectorselector-kwargs"}),"page.wait_for_selector(selector, **kwargs)")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-frame#framewait_for_selectorselector-kwargs"}),"frame.wait_for_selector(selector, **kwargs)")," methods. These APIs wait for the element to be attached and visible."),Object(l.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Get the element handle\nelement_handle = page.wait_for_selector('#box')\n\n# Assert bounding box for the element\nbounding_box = element_handle.bounding_box()\nassert bounding_box.width == 100\n\n# Assert attribute for the element\nclass_names = element_handle.get_attribute('class')\nassert 'highlighted' in class_names\n"))),Object(l.b)(s.a,{value:"async",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),"# Get the element handle\nelement_handle = page.wait_for_selector('#box')\n\n# Assert bounding box for the element\nbounding_box = await element_handle.bounding_box()\nassert bounding_box.width == 100\n\n# Assert attribute for the element\nclass_names = await element_handle.get_attribute('class')\nassert 'highlighted' in class_names\n")))),Object(l.b)("h2",{id:"handles-as-parameters"},"Handles as parameters"),Object(l.b)("p",null,"Handles can be passed into the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-page#pageevaluateexpression-kwargs"}),"page.evaluate(expression, **kwargs)")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),Object(l.b)(c.a,{groupId:"python-flavor",defaultValue:"sync",values:[{label:"Sync",value:"sync"},{label:"Async",value:"async"}],mdxType:"Tabs"},Object(l.b)(s.a,{value:"sync",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Create new array in page.\nmy_array_handle = page.evaluate_handle("""() => {\n  window.myArray = [1];\n  return myArray;\n}""")\n\n# Get current length of the array.\nlength = page.evaluate("a => a.length", my_array_handle)\n\n# Add one more element to the array using the handle\npage.evaluate("(arg) => arg.myArray.push(arg.newElement)", {\n  \'myArray\': my_array_handle,\n  \'newElement\': 2\n})\n\n# Release the object when it\'s no longer needed.\nmy_array_handle.dispose()\n'))),Object(l.b)(s.a,{value:"async",mdxType:"TabItem"},Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-py"}),'# Create new array in page.\nmy_array_handle = await page.evaluate_handle("""() => {\n  window.myArray = [1];\n  return myArray;\n}""")\n\n# Get current length of the array.\nlength = await page.evaluate("a => a.length", my_array_handle)\n\n# Add one more element to the array using the handle\nawait page.evaluate("(arg) => arg.myArray.push(arg.newElement)", {\n  \'myArray\': my_array_handle,\n  \'newElement\': 2\n})\n\n# Release the object when it\'s no longer needed.\nawait my_array_handle.dispose()\n')))),Object(l.b)("h2",{id:"handle-lifecycle"},"Handle Lifecycle"),Object(l.b)("p",null,"Handles can be acquired using the page methods such as ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-page#pageevaluate_handleexpression-kwargs"}),"page.evaluate_handle(expression, **kwargs)"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-page#pagequery_selectorselector"}),"page.query_selector(selector)")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-page#pagequery_selector_allselector"}),"page.query_selector_all(selector)")," or their frame counterparts ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-frame#frameevaluate_handleexpression-kwargs"}),"frame.evaluate_handle(expression, **kwargs)"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-frame#framequery_selectorselector"}),"frame.query_selector(selector)")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-frame#framequery_selector_allselector"}),"frame.query_selector_all(selector)"),". Once created, handles will retain object from ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"}),"garbage collection")," unless page navigates or the handle is manually disposed via the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/python/docs/1.8.0/api/class-jshandle#js_handledispose"}),"js_handle.dispose()")," method."),Object(l.b)("h3",{id:"api-reference-1"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-jshandle",title:"JSHandle"}),"JSHandle")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-elementhandle#element_handlebounding_box"}),"element_handle.bounding_box()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-elementhandle#element_handleget_attributename"}),"element_handle.get_attribute(name)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-elementhandle#element_handleinner_text"}),"element_handle.inner_text()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-elementhandle#element_handleinner_html"}),"element_handle.inner_html()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-elementhandle#element_handletext_content"}),"element_handle.text_content()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-jshandle#js_handleevaluateexpression-kwargs"}),"js_handle.evaluate(expression, **kwargs)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-page#pageevaluate_handleexpression-kwargs"}),"page.evaluate_handle(expression, **kwargs)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-page#pagequery_selectorselector"}),"page.query_selector(selector)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/python/docs/1.8.0/api/class-page#pagequery_selector_allselector"}),"page.query_selector_all(selector)"))))}d.isMDXComponent=!0},403:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},404:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return u}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),p=function(e){var a=r.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},b=function(e){var a=p(e.components);return r.a.createElement(i.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},h=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),b=p(t),h=n,u=b["".concat(c,".").concat(h)]||b[h]||d[h]||l;return t?r.a.createElement(u,s(s({ref:a},i),{},{components:t})):r.a.createElement(u,s({ref:a},i))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=h;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<l;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}h.displayName="MDXCreateElement"},405:function(e,a,t){"use strict";var n=t(0),r=t(406);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},406:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},407:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(405),c=t(403),s=t(53),o=t.n(s),i=37,p=39;a.a=function(e){var a=e.lazy,t=e.block,s=e.defaultValue,b=e.values,d=e.groupId,h=e.className,u=Object(l.a)(),m=u.tabGroupChoices,y=u.setTabGroupChoices,j=Object(n.useState)(s),f=j[0],O=j[1],g=n.Children.toArray(e.children);if(null!=d){var v=m[d];null!=v&&v!==f&&b.some((function(e){return e.value===v}))&&O(v)}var _=function(e){O(e),null!=d&&y(d,e)},w=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":t},h)},b.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===a,className:Object(c.a)("tabs__item",o.a.tabItem,{"tabs__item--active":f===a}),key:a,ref:function(e){return w.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case p:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case i:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(w,e.target,e)},onFocus:function(){return _(a)},onClick:function(){_(a)}},t)}))),a?Object(n.cloneElement)(g.filter((function(e){return e.props.value===f}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==f})}))))}},408:function(e,a,t){"use strict";var n=t(3),r=t(0),l=t.n(r);a.a=function(e){var a=e.children,t=e.hidden,r=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:r}),a)}}}]);