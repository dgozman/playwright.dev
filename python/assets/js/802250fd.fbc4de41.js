"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3166],{3905:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return d}});var a=t(7294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=a.createContext({}),p=function(e){var r=a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):l(l({},r),e)),t},u=function(e){var r=p(e.components);return a.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},k=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(t),d=n,h=k["".concat(s,".").concat(d)]||k[d]||c[d]||o;return t?a.createElement(h,l(l({ref:r},u),{},{components:t})):a.createElement(h,l({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,l=new Array(o);l[0]=k;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i.mdxType="string"==typeof e?e:n,l[1]=i;for(var p=2;p<o;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}k.displayName="MDXCreateElement"},8215:function(e,r,t){var a=t(7294);r.Z=function(e){var r=e.children,t=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:n},r)}},5064:function(e,r,t){t.d(r,{Z:function(){return c}});var a=t(7294),n=t(9443);var o=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(6010),i="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var r=e.lazy,t=e.block,n=e.defaultValue,c=e.values,k=e.groupId,d=e.className,h=o(),f=h.tabGroupChoices,m=h.setTabGroupChoices,w=(0,a.useState)(n),v=w[0],b=w[1],y=a.Children.toArray(e.children),g=[];if(null!=k){var N=f[k];null!=N&&N!==v&&c.some((function(e){return e.value===N}))&&b(N)}var x=function(e){var r=e.currentTarget,t=g.indexOf(r),a=c[t].value;b(a),null!=k&&(m(k,a),setTimeout((function(){var e,t,a,n,o,l,i,p;(e=r.getBoundingClientRect(),t=e.top,a=e.left,n=e.bottom,o=e.right,l=window,i=l.innerHeight,p=l.innerWidth,t>=0&&o<=p&&n<=i&&a>=0)||(r.scrollIntoView({block:"center",behavior:"smooth"}),r.classList.add(s),setTimeout((function(){return r.classList.remove(s)}),2e3))}),150))},O=function(e){var r,t;switch(e.keyCode){case u:var a=g.indexOf(e.target)+1;t=g[a]||g[0];break;case p:var n=g.indexOf(e.target)-1;t=g[n]||g[g.length-1]}null==(r=t)||r.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},d)},c.map((function(e){var r=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:v===r?0:-1,"aria-selected":v===r,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":v===r}),key:r,ref:function(e){return g.push(e)},onKeyDown:O,onFocus:x,onClick:x},t)}))),r?(0,a.cloneElement)(y.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,r){return(0,a.cloneElement)(e,{key:r,hidden:e.props.value!==v})}))))}},9443:function(e,r,t){var a=(0,t(7294).createContext)(void 0);r.Z=a},5066:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return p},default:function(){return c}});var a=t(2122),n=t(9756),o=(t(7294),t(3905)),l=(t(5064),t(8215),{id:"class-worker",title:"Worker"}),i=void 0,s={unversionedId:"api/class-worker",id:"version-1.14.0/api/class-worker",isDocsHomePage:!1,title:"Worker",description:"The Worker class represents a WebWorker. worker event is emitted on the page object to signal a worker creation. close event is emitted on the worker object when the worker is gone.",source:"@site/versioned_docs/version-1.14.0/api/class-worker.mdx",sourceDirName:"api",slug:"/api/class-worker",permalink:"/python/docs/api/class-worker",version:"1.14.0",frontMatter:{id:"class-worker",title:"Worker"},sidebar:"version-1.14.0/api",previous:{title:"WebSocket",permalink:"/python/docs/api/class-websocket"}},p=[{value:"worker.on(&quot;close&quot;)",id:"worker-event-close",children:[]},{value:"worker.evaluate(expression, **kwargs)",id:"worker-evaluate",children:[]},{value:"worker.evaluate_handle(expression, **kwargs)",id:"worker-evaluate-handle",children:[]},{value:"worker.url",id:"worker-url",children:[]}],u={toc:p};function c(e){var r=e.components,t=(0,n.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"The Worker class represents a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"worker")," event is emitted on the page object to signal a worker creation. ",(0,o.kt)("inlineCode",{parentName:"p"},"close")," event is emitted on the worker object when the worker is gone."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'def handle_worker(worker):\n    print("worker created: " + worker.url)\n    worker.on("close", lambda: print("worker destroyed: " + worker.url))\n\npage.on(\'worker\', handle_worker)\n\nprint("current workers:")\nfor worker in page.workers:\n    print("    " + worker.url)\n')),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-worker#worker-event-close"},'worker.on("close")')),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-worker#worker-evaluate"},"worker.evaluate(expression, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-worker#worker-evaluate-handle"},"worker.evaluate_handle(expression, **kwargs)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-worker#worker-url"},"worker.url"))),(0,o.kt)("h2",{id:"worker-event-close"},'worker.on("close")'),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"type: ","<",(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-worker",title:"Worker"},"Worker"),">")),(0,o.kt)("p",null,"Emitted when this dedicated ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API"},"WebWorker")," is terminated."),(0,o.kt)("h2",{id:"worker-evaluate"},"worker.evaluate(expression, **kwargs)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expression"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-expression"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,o.kt)("a",{href:"#worker-evaluate-option-expression",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-option-arg"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/python/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,o.kt)("a",{href:"#worker-evaluate-option-arg",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable"),">",(0,o.kt)("a",{href:"#worker-evaluate-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"expression"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-worker#worker-evaluate"},"worker.evaluate(expression, **kwargs)")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-worker#worker-evaluate"},"worker.evaluate(expression, **kwargs)")," would wait for the promise to resolve and return its value."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-worker#worker-evaluate"},"worker.evaluate(expression, **kwargs)")," returns a non-",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify#Description",title:"Serializable"},"Serializable")," value, then ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-worker#worker-evaluate"},"worker.evaluate(expression, **kwargs)")," returns ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined"),". Playwright also supports transferring some additional values that are not serializable by ",(0,o.kt)("inlineCode",{parentName:"p"},"JSON"),": ",(0,o.kt)("inlineCode",{parentName:"p"},"-0"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"NaN"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"Infinity"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"-Infinity"),"."),(0,o.kt)("h2",{id:"worker-evaluate-handle"},"worker.evaluate_handle(expression, **kwargs)"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"expression"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-expression"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">"," JavaScript expression to be evaluated in the browser context. If it looks like a function declaration, it is interpreted as a function. Otherwise, evaluated as an expression.",(0,o.kt)("a",{href:"#worker-evaluate-handle-option-expression",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"arg"),(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-option-arg"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/python/docs/core-concepts#evaluation-argument",title:"EvaluationArgument"},"EvaluationArgument"),">"," Optional argument to pass to ",(0,o.kt)("inlineCode",{parentName:"li"},"expression"),".",(0,o.kt)("a",{href:"#worker-evaluate-handle-option-arg",class:"list-anchor"},"#")),(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-evaluate-handle-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"/python/docs/api/class-jshandle",title:"JSHandle"},"JSHandle"),">",(0,o.kt)("a",{href:"#worker-evaluate-handle-return",class:"list-anchor"},"#"))),(0,o.kt)("p",null,"Returns the return value of ",(0,o.kt)("inlineCode",{parentName:"p"},"expression")," as a ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"The only difference between ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-worker#worker-evaluate"},"worker.evaluate(expression, **kwargs)")," and ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-worker#worker-evaluate-handle"},"worker.evaluate_handle(expression, **kwargs)")," is that ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-worker#worker-evaluate-handle"},"worker.evaluate_handle(expression, **kwargs)")," returns ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-jshandle",title:"JSHandle"},"JSHandle"),"."),(0,o.kt)("p",null,"If the function passed to the ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-worker#worker-evaluate-handle"},"worker.evaluate_handle(expression, **kwargs)")," returns a ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"},"Promise"),", then ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/api/class-worker#worker-evaluate-handle"},"worker.evaluate_handle(expression, **kwargs)")," would wait for the promise to resolve and return its value."),(0,o.kt)("h2",{id:"worker-url"},"worker.url"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"returns:",(0,o.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"worker-url-return"})," ","<",(0,o.kt)("a",{parentName:"li",href:"https://docs.python.org/3/library/stdtypes.html#text-sequence-type-str",title:"str"},"str"),">",(0,o.kt)("a",{href:"#worker-url-return",class:"list-anchor"},"#"))))}c.isMDXComponent=!0},6010:function(e,r,t){function a(e){var r,t,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(r=0;r<e.length;r++)e[r]&&(t=a(e[r]))&&(n&&(n+=" "),n+=t);else for(r in e)e[r]&&(n&&(n+=" "),n+=r);return n}function n(){for(var e,r,t=0,n="";t<arguments.length;)(e=arguments[t++])&&(r=a(e))&&(n&&(n+=" "),n+=r);return n}t.d(r,{Z:function(){return n}})}}]);