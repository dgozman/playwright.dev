(window.webpackJsonp=window.webpackJsonp||[]).push([[124],{194:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return s})),t.d(a,"metadata",(function(){return i})),t.d(a,"toc",(function(){return c})),t.d(a,"default",(function(){return p}));var n=t(3),r=t(7),l=(t(0),t(284)),s=(t(287),t(288),{id:"class-jshandle",title:"JSHandle"}),i={unversionedId:"api/class-jshandle",id:"version-1.11.0/api/class-jshandle",isDocsHomePage:!1,title:"JSHandle",description:"JSHandle represents an in-page JavaScript object. JSHandles can be created with the Page.evaluateHandle(expression[, arg]) method.",source:"@site/versioned_docs/version-1.11.0/api/class-jshandle.mdx",slug:"/api/class-jshandle",permalink:"/java/docs/api/class-jshandle",version:"1.11.0",sidebar:"version-1.11.0/api",previous:{title:"Frame",permalink:"/java/docs/api/class-frame"},next:{title:"Keyboard",permalink:"/java/docs/api/class-keyboard"}},c=[{value:"JsHandle.asElement()",id:"jshandleaselement",children:[]},{value:"JsHandle.dispose()",id:"jshandledispose",children:[]},{value:"JsHandle.evaluate(expression, arg)",id:"jshandleevaluateexpression-arg",children:[]},{value:"JsHandle.evaluateHandle(expression, arg)",id:"jshandleevaluatehandleexpression-arg",children:[]},{value:"JsHandle.getProperties()",id:"jshandlegetproperties",children:[]},{value:"JsHandle.getProperty(propertyName)",id:"jshandlegetpropertypropertyname",children:[]},{value:"JsHandle.jsonValue()",id:"jshandlejsonvalue",children:[]}],o={toc:c};function p(e){var a=e.components,t=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,t,{components:a,mdxType:"MDXLayout"}),Object(l.b)("p",null,"JSHandle represents an in-page JavaScript object. JSHandles can be created with the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageevaluatehandleexpression-arg"}),"Page.evaluateHandle(expression[, arg])")," method."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'JSHandle windowHandle = page.evaluateHandle("() => window");\n// ...\n')),Object(l.b)("p",null,"JSHandle prevents the referenced JavaScript object being garbage collected unless the handle is exposed with ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-jshandle#jshandledispose"}),"JsHandle.dispose()"),". JSHandles are auto-disposed when their origin frame gets navigated or the parent context gets destroyed."),Object(l.b)("p",null,"JSHandle instances can be used as an argument in ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageevalonselectorselector-expression-arg"}),"Page.evalOnSelector(selector, expression[, arg])"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageevaluateexpression-arg"}),"Page.evaluate(expression[, arg])")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageevaluatehandleexpression-arg"}),"Page.evaluateHandle(expression[, arg])")," methods."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-jshandle#jshandleaselement"}),"JsHandle.asElement()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-jshandle#jshandledispose"}),"JsHandle.dispose()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-jshandle#jshandleevaluateexpression-arg"}),"JsHandle.evaluate(expression[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-jshandle#jshandleevaluatehandleexpression-arg"}),"JsHandle.evaluateHandle(expression[, arg])")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-jshandle#jshandlegetproperties"}),"JsHandle.getProperties()")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-jshandle#jshandlegetpropertypropertyname"}),"JsHandle.getProperty(propertyName)")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-jshandle#jshandlejsonvalue"}),"JsHandle.jsonValue()"))),Object(l.b)("h2",{id:"jshandleaselement"},"JsHandle.asElement()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/specs/jls/se8/html/jls-3.html#jls-3.10.7",title:"null"}),"null"),"|",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),">")),Object(l.b)("p",null,"Returns either ",Object(l.b)("inlineCode",{parentName:"p"},"null")," or the object handle itself, if the object handle is an instance of ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-elementhandle",title:"ElementHandle"}),"ElementHandle"),"."),Object(l.b)("h2",{id:"jshandledispose"},"JsHandle.dispose()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"}),"void"),">")),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.dispose")," method stops referencing the element handle."),Object(l.b)("h2",{id:"jshandleevaluateexpression-arg"},"JsHandle.evaluate(expression","[, arg]",")"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"expression")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"arg")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(l.b)("inlineCode",{parentName:"li"},"expression"),"."),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html",title:"Object"}),"Object"),">")),Object(l.b)("p",null,"Returns the return value of ",Object(l.b)("inlineCode",{parentName:"p"},"expression"),"."),Object(l.b)("p",null,"This method passes this handle as the first argument to ",Object(l.b)("inlineCode",{parentName:"p"},"expression"),"."),Object(l.b)("p",null,"If ",Object(l.b)("inlineCode",{parentName:"p"},"expression")," returns a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(l.b)("inlineCode",{parentName:"p"},"handle.evaluate")," would wait for the promise to resolve and return its value."),Object(l.b)("p",null,"Examples:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'ElementHandle tweetHandle = page.querySelector(".tweet .retweets");\nassertEquals("10 retweets", tweetHandle.evaluate("node => node.innerText"));\n')),Object(l.b)("h2",{id:"jshandleevaluatehandleexpression-arg"},"JsHandle.evaluateHandle(expression","[, arg]",")"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"expression")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"arg")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(l.b)("inlineCode",{parentName:"li"},"expression"),"."),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">")),Object(l.b)("p",null,"Returns the return value of ",Object(l.b)("inlineCode",{parentName:"p"},"expression")," as a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(l.b)("p",null,"This method passes this handle as the first argument to ",Object(l.b)("inlineCode",{parentName:"p"},"expression"),"."),Object(l.b)("p",null,"The only difference between ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluate")," and ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," is that ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(l.b)("p",null,"If the function passed to the ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," returns a ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(l.b)("inlineCode",{parentName:"p"},"jsHandle.evaluateHandle")," would wait for the promise to resolve and return its value."),Object(l.b)("p",null,"See ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/api/class-page#pageevaluatehandleexpression-arg"}),"Page.evaluateHandle(expression[, arg])")," for more details."),Object(l.b)("h2",{id:"jshandlegetproperties"},"JsHandle.getProperties()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/util/Map.html",title:"Map"}),"Map"),"<",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),", ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">>")),Object(l.b)("p",null,"The method returns a map with ",Object(l.b)("strong",{parentName:"p"},"own property names")," as keys and JSHandle instances for the property values."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'JSHandle handle = page.evaluateHandle("() => ({window, document}"););\nMap<String, JSHandle> properties = handle.getProperties();\nJSHandle windowHandle = properties.get("window");\nJSHandle documentHandle = properties.get("document");\nhandle.dispose();\n')),Object(l.b)("h2",{id:"jshandlegetpropertypropertyname"},"JsHandle.getProperty(propertyName)"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"propertyName")," <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"}),"String"),"> property to get"),Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"/java/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">")),Object(l.b)("p",null,"Fetches a single property from the referenced object."),Object(l.b)("h2",{id:"jshandlejsonvalue"},"JsHandle.jsonValue()"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"returns: <",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://docs.oracle.com/javase/8/docs/api/java/lang/Object.html",title:"Object"}),"Object"),">")),Object(l.b)("p",null,"Returns a JSON representation of the object. If the object has a ",Object(l.b)("inlineCode",{parentName:"p"},"toJSON")," function, it ",Object(l.b)("strong",{parentName:"p"},"will not be called"),"."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"The method will return an empty JSON object if the referenced object is not stringifiable. It will throw an error if the object has circular references."))))}p.isMDXComponent=!0},283:function(e,a,t){"use strict";function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}a.a=function(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}},284:function(e,a,t){"use strict";t.d(a,"a",(function(){return b})),t.d(a,"b",(function(){return u}));var n=t(0),r=t.n(n);function l(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function s(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?s(Object(t),!0).forEach((function(a){l(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function c(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),p=function(e){var a=r.a.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},b=function(e){var a=p(e.components);return r.a.createElement(o.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.a.createElement(r.a.Fragment,{},a)}},j=r.a.forwardRef((function(e,a){var t=e.components,n=e.mdxType,l=e.originalType,s=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),b=p(t),j=n,u=b["".concat(s,".").concat(j)]||b[j]||d[j]||l;return t?r.a.createElement(u,i(i({ref:a},o),{},{components:t})):r.a.createElement(u,i({ref:a},o))}));function u(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var l=t.length,s=new Array(l);s[0]=j;var i={};for(var c in a)hasOwnProperty.call(a,c)&&(i[c]=a[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var o=2;o<l;o++)s[o]=t[o];return r.a.createElement.apply(null,s)}return r.a.createElement.apply(null,t)}j.displayName="MDXCreateElement"},285:function(e,a,t){"use strict";var n=t(0),r=t(286);a.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},286:function(e,a,t){"use strict";var n=t(0),r=Object(n.createContext)(void 0);a.a=r},287:function(e,a,t){"use strict";var n=t(0),r=t.n(n),l=t(285),s=t(283),i=t(53),c=t.n(i),o=37,p=39;a.a=function(e){var a=e.lazy,t=e.block,i=e.defaultValue,b=e.values,d=e.groupId,j=e.className,u=Object(l.a)(),m=u.tabGroupChoices,O=u.setTabGroupChoices,h=Object(n.useState)(i),v=h[0],f=h[1],g=n.Children.toArray(e.children);if(null!=d){var N=m[d];null!=N&&N!==v&&b.some((function(e){return e.value===N}))&&f(N)}var H=function(e){f(e),null!=d&&O(d,e)},y=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(s.a)("tabs",{"tabs--block":t},j)},b.map((function(e){var a=e.value,t=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":v===a,className:Object(s.a)("tabs__item",c.a.tabItem,{"tabs__item--active":v===a}),key:a,ref:function(e){return y.push(e)},onKeyDown:function(e){!function(e,a,t){switch(t.keyCode){case p:!function(e,a){var t=e.indexOf(a)+1;e[t]?e[t].focus():e[0].focus()}(e,a);break;case o:!function(e,a){var t=e.indexOf(a)-1;e[t]?e[t].focus():e[e.length-1].focus()}(e,a)}}(y,e.target,e)},onFocus:function(){return H(a)},onClick:function(){H(a)}},t)}))),a?Object(n.cloneElement)(g.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},g.map((function(e,a){return Object(n.cloneElement)(e,{key:a,hidden:e.props.value!==v})}))))}},288:function(e,a,t){"use strict";var n=t(3),r=t(0),l=t.n(r);a.a=function(e){var a=e.children,t=e.hidden,r=e.className;return l.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:t,className:r}),a)}}}]);