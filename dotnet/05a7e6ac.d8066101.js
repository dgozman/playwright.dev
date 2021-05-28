(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{162:function(e,r,t){"use strict";function a(e){var r,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=a(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}r.a=function(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=a(e))&&(n&&(n+=" "),n+=r);return n}},163:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return O}));var a=t(0),n=t.n(a);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function s(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?s(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var l=n.a.createContext({}),p=function(e){var r=n.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},b=function(e){var r=p(e.components);return n.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.a.createElement(n.a.Fragment,{},r)}},d=n.a.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),b=p(t),d=a,O=b["".concat(s,".").concat(d)]||b[d]||u[d]||o;return t?n.a.createElement(O,i(i({ref:r},l),{},{components:t})):n.a.createElement(O,i({ref:r},l))}));function O(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return n.a.createElement.apply(null,s)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},164:function(e,r,t){"use strict";var a=t(0),n=t(165);r.a=function(){var e=Object(a.useContext)(n.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},165:function(e,r,t){"use strict";var a=t(0),n=Object(a.createContext)(void 0);r.a=n},166:function(e,r,t){"use strict";t(0),t(164),t(162),t(53)},167:function(e,r,t){"use strict";t(3),t(0)},73:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return s})),t.d(r,"metadata",(function(){return i})),t.d(r,"toc",(function(){return c})),t.d(r,"default",(function(){return p}));var a=t(3),n=t(7),o=(t(0),t(163)),s=(t(166),t(167),{id:"class-worker",title:"Worker"}),i={unversionedId:"api/class-worker",id:"api/class-worker",isDocsHomePage:!1,title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/docs/api/class-worker.mdx",slug:"/api/class-worker",permalink:"/dotnet/docs/api/class-worker",version:"current",sidebar:"api",previous:{title:"WebSocketFrame",permalink:"/dotnet/docs/api/class-websocketframe"}},c=[{value:"event Worker.Close",id:"event-workerclose",children:[]},{value:"Worker.EvaluateAsync(expression, arg)",id:"workerevaluateasyncexpression-arg",children:[]},{value:"Worker.EvaluateHandleAsync(expression, arg)",id:"workerevaluatehandleasyncexpression-arg",children:[]},{value:"Worker.Url",id:"workerurl",children:[]}],l={toc:c};function p(e){var r=e.components,t=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The Worker class represents a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker"),". ",Object(o.b)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",Object(o.b)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-csharp"}),'page.Worker += (_, worker) =>\n{\n    Console.WriteLine($"Worker created: {worker.Url}");\n    worker.Close += (_, _) => Console.WriteLine($"Worker closed {worker.Url}");\n};\n\nConsole.WriteLine("Current Workers:");\nforeach(var pageWorker in page.Workers)\n{\n    Console.WriteLine($"\\tWorker: {pageWorker.Url}");\n}\n')),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-worker#eventworkerclose"}),"event Worker.Close")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-worker#workerevaluateasyncexpression-arg"}),"Worker.EvaluateAsync(expression, arg)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-worker#workerevaluatehandleasyncexpression-arg"}),"Worker.EvaluateHandleAsync(expression, arg)")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-worker#workerurl"}),"Worker.Url"))),Object(o.b)("h2",{id:"event-workerclose"},"event Worker.Close"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"type: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-worker",title:"Worker"}),"Worker"),">")),Object(o.b)("p",null,"Emitted when this dedicated ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"}),"WebWorker")," is terminated."),Object(o.b)("h2",{id:"workerevaluateasyncexpression-arg"},"Worker.EvaluateAsync(expression, arg)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"expression")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"arg")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(o.b)("inlineCode",{parentName:"li"},"expression"),"."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"object"),">")),Object(o.b)("p",null,"Returns the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"expression"),"."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-worker#workerevaluateasyncexpression-arg"}),"Worker.EvaluateAsync(expression, arg)")," returns a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-worker#workerevaluateasyncexpression-arg"}),"Worker.EvaluateAsync(expression, arg)")," would wait for the promise to resolve and return its value."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-worker#workerevaluateasyncexpression-arg"}),"Worker.EvaluateAsync(expression, arg)")," returns a non-",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"}),"Serializable")," value, then ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-worker#workerevaluateasyncexpression-arg"}),"Worker.EvaluateAsync(expression, arg)")," returns ",Object(o.b)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",Object(o.b)("inlineCode",{parentName:"p"},"JSON"),": ",Object(o.b)("inlineCode",{parentName:"p"},"-0"),", ",Object(o.b)("inlineCode",{parentName:"p"},"NaN"),", ",Object(o.b)("inlineCode",{parentName:"p"},"Infinity"),", ",Object(o.b)("inlineCode",{parentName:"p"},"-Infinity"),"."),Object(o.b)("h2",{id:"workerevaluatehandleasyncexpression-arg"},"Worker.EvaluateHandleAsync(expression, arg)"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"expression")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),"> JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"arg")," <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"}),"EvaluationArgument"),"> Optional argument to pass to ",Object(o.b)("inlineCode",{parentName:"li"},"expression"),"."),Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),">")),Object(o.b)("p",null,"Returns the return value of ",Object(o.b)("inlineCode",{parentName:"p"},"expression")," as a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(o.b)("p",null,"The only difference between ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-worker#workerevaluateasyncexpression-arg"}),"Worker.EvaluateAsync(expression, arg)")," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-worker#workerevaluatehandleasyncexpression-arg"}),"Worker.EvaluateHandleAsync(expression, arg)")," is that ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-worker#workerevaluatehandleasyncexpression-arg"}),"Worker.EvaluateHandleAsync(expression, arg)")," returns ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-jshandle",title:"JSHandle"}),"JSHandle"),"."),Object(o.b)("p",null,"If the function passed to the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-worker#workerevaluatehandleasyncexpression-arg"}),"Worker.EvaluateHandleAsync(expression, arg)")," returns a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),", then ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/dotnet/docs/api/class-worker#workerevaluatehandleasyncexpression-arg"}),"Worker.EvaluateHandleAsync(expression, arg)")," would wait for the promise to resolve and return its value."),Object(o.b)("h2",{id:"workerurl"},"Worker.Url"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"returns: <",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"}),"string"),">")))}p.isMDXComponent=!0}}]);