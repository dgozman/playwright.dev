(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{146:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return c})),t.d(a,"metadata",(function(){return s})),t.d(a,"toc",(function(){return o})),t.d(a,"default",(function(){return d}));var n=t(3),r=t(7),l=(t(0),t(163)),c=(t(166),t(167),{id:"handles",title:"Handles"}),s={unversionedId:"handles",id:"handles",isDocsHomePage:!1,title:"Handles",description:"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:",source:"@site/docs/handles.mdx",slug:"/handles",permalink:"/dotnet/docs/handles",version:"current"},o=[{value:"API reference",id:"api-reference",children:[]},{value:"Element Handles",id:"element-handles",children:[]},{value:"Handles as parameters",id:"handles-as-parameters",children:[]},{value:"Handle Lifecycle",id:"handle-lifecycle",children:[{value:"API reference",id:"api-reference-1",children:[]}]}],i={toc:o};function d(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},i,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Playwright can create handles to the page DOM elements or any other objects inside the page. These handles live in the Playwright process, whereas the actual objects live in the browser. There are two types of handles:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle")," to reference any JavaScript objects in the page"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," to reference DOM elements in the page, it has extra methods that allow performing actions on the elements and asserting their properties.")),Object(l.b)("p",null,"Since any DOM element in the page is also a JavaScript object, any ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle")," as well."),Object(l.b)("p",null,"Handles are used to perform operations on those actual objects in the page. You can evaluate on a handle, get handle properties, pass handle as an evaluation parameter, serialize page object into JSON etc. See the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle")," class API for these and methods."),Object(l.b)("h3",{id:"api-reference"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"))),Object(l.b)("p",null,"Here is the easiest way to obtain a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var jsHandle = await page.EvaluateHandleAsync("window");\n//  Use jsHandle for evaluations.\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'var ulElementHandle = await page.WaitForSelectorAsync("ul");\n//  Use ulElementHandle for actions and evaluation.\n')),Object(l.b)("h2",{id:"element-handles"},"Element Handles"),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"It is recommended to use selector-based actions like ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pageclickasyncselector-options"}),"Page.ClickAsync(selector, options)")," rather than using the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," for input actions, unless your use case specifically requires the use of handles."))),Object(l.b)("p",null,"When ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")," is required, it is recommended to fetch it with the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pagewaitforselectorasyncselector-options"}),"Page.WaitForSelectorAsync(selector, options)")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-frame#framewaitforselectorasyncselector-options"}),"Frame.WaitForSelectorAsync(selector, options)")," methods. These APIs wait for the element to be attached and visible."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'// Get the element handle\nvar jsHandle = await page.WaitForSelectorAsync("#box");\nvar elementHandle = jsHandle as ElementHandle;\n\n// Assert bounding box for the element\nvar boundingBox = await elementHandle.BoundingBoxAsync();\nAssert.Equal(100, boundingBox.Width);\n\n// Assert attribute for the element\nvar classNames = await elementHandle.GetAttributeAsync("class");\nAssert.True(classNames.Contains("highlighted"));\n')),Object(l.b)("h2",{id:"handles-as-parameters"},"Handles as parameters"),Object(l.b)("p",null,"Handles can be passed into the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pageevaluateasyncexpression-arg"}),"Page.EvaluateAsync(expression, arg)")," and similar methods. The following snippet creates a new array in the page, initializes it with data and returns a handle to this array into Playwright. It then uses the handle in subsequent evaluations:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-csharp"}),'// Create new array in page.\nvar myArrayHandle = await page.EvaluateHandleAsync(@"() => {\n    window.myArray = [1];\n    return myArray;\n}");\n\n// Get the length of the array.\nvar length = await page.EvaluateAsync<int>("a => a.length", myArrayHandle);\n\n// Add one more element to the array using the handle\nawait page.EvaluateAsync("arg => arg.myArray.add(arg.newElement)",\n    new { myArray = myArrayHandle, newElement = 2 });\n\n// Release the object when it is no longer needed.\nawait myArrayHandle.DisposeAsync();\n')),Object(l.b)("h2",{id:"handle-lifecycle"},"Handle Lifecycle"),Object(l.b)("p",null,"Handles can be acquired using the page methods such as ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pageevaluatehandleasyncexpression-arg"}),"Page.EvaluateHandleAsync(expression, arg)"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pagequeryselectorasyncselector"}),"Page.QuerySelectorAsync(selector)")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-page#pagequeryselectorallasyncselector"}),"Page.QuerySelectorAllAsync(selector)")," or their frame counterparts ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-frame#frameevaluatehandleasyncexpression-arg"}),"Frame.EvaluateHandleAsync(expression, arg)"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-frame#framequeryselectorasyncselector"}),"Frame.QuerySelectorAsync(selector)")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-frame#framequeryselectorallasyncselector"}),"Frame.QuerySelectorAllAsync(selector)"),". Once created, handles will retain object from ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Memory_Management"}),"garbage collection")," unless page navigates or the handle is manually disposed via the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/dotnet/docs/api/class-jshandle#jshandledisposeasync"}),"JsHandle.DisposeAsync()")," method."),Object(l.b)("h3",{id:"api-reference-1"},"API reference"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle#elementhandleboundingboxasync"}),"ElementHandle.BoundingBoxAsync()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle#elementhandlegetattributeasyncname"}),"ElementHandle.GetAttributeAsync(name)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle#elementhandleinnertextasync"}),"ElementHandle.InnerTextAsync()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle#elementhandleinnerhtmlasync"}),"ElementHandle.InnerHTMLAsync()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-elementhandle#elementhandletextcontentasync"}),"ElementHandle.TextContentAsync()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle#jshandleevaluateasyncexpression-arg"}),"JsHandle.EvaluateAsync(expression, arg)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pageevaluatehandleasyncexpression-arg"}),"Page.EvaluateHandleAsync(expression, arg)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pagequeryselectorasyncselector"}),"Page.QuerySelectorAsync(selector)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/dotnet/docs/api/class-page#pagequeryselectorallasyncselector"}),"Page.QuerySelectorAllAsync(selector)"))))}d.isMDXComponent=!0},162:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},163:function(e,a,t){"use strict";t.d(a,"a",(function(){return p})),t.d(a,"b",(function(){return h}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var i=r.a.createContext({}),d=function(e){var a=r.a.useContext(i),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=d(e.components);return r.a.createElement(i.Provider,{value:a},e.children)},b={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},m=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),p=d(t),m=n,h=p["".concat(c,".").concat(m)]||p[m]||b[m]||l;return t?r.a.createElement(h,s(s({ref:a},i),{},{components:t})):r.a.createElement(h,s({ref:a},i))}));function h(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,c=new Array(l);c[0]=m;var s={};for(var o in a)hasOwnProperty.call(a,o)&&(s[o]=a[o]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var i=2;i<l;i++)c[i]=t[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},164:function(e,a,t){"use strict";var n=t(0),r=t(165);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},165:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},166:function(e,a,t){"use strict";t(0),t(164),t(162),t(53)},167:function(e,a,t){"use strict";t(3),t(0)}}]);