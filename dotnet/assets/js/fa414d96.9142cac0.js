"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2837],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return g}});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),l=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=l(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),d=l(n),g=a,h=d["".concat(s,".").concat(g)]||d[g]||u[g]||i;return n?r.createElement(h,o(o({ref:e},p),{},{components:n})):r.createElement(h,o({ref:e},p))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,o=new Array(i);o[0]=d;var c={};for(var s in e)hasOwnProperty.call(e,s)&&(c[s]=e[s]);c.originalType=t,c.mdxType="string"==typeof t?t:a,o[1]=c;for(var l=2;l<i;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(t,e,n){n(7294)},5064:function(t,e,n){n(7294),n(9443)},9443:function(t,e,n){var r=(0,n(7294).createContext)(void 0);e.Z=r},4112:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return c},metadata:function(){return s},toc:function(){return l},default:function(){return u}});var r=n(2122),a=n(9756),i=(n(7294),n(3905)),o=(n(5064),n(8215),{id:"class-tracing",title:"Tracing"}),c=void 0,s={unversionedId:"api/class-tracing",id:"version-1.14.0/api/class-tracing",isDocsHomePage:!1,title:"Tracing",description:"API for collecting and saving Playwright traces. Playwright traces can be opened using the Playwright CLI after Playwright script runs.",source:"@site/versioned_docs/version-1.14.0/api/class-tracing.mdx",sourceDirName:"api",slug:"/api/class-tracing",permalink:"/dotnet/docs/api/class-tracing",version:"1.14.0",frontMatter:{id:"class-tracing",title:"Tracing"},sidebar:"version-1.14.0/api",previous:{title:"Touchscreen",permalink:"/dotnet/docs/api/class-touchscreen"},next:{title:"Video",permalink:"/dotnet/docs/api/class-video"}},l=[{value:"Tracing.StartAsync(options)",id:"tracing-start",children:[]},{value:"Tracing.StopAsync(options)",id:"tracing-stop",children:[]}],p={toc:l};function u(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"API for collecting and saving Playwright traces. Playwright traces can be opened using the Playwright CLI after Playwright script runs."),(0,i.kt)("p",null,"Start with specifying the folder traces will be stored in:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await using var browser = playwright.Chromium.LaunchAsync();\nawait using var context = await browser.NewContextAsync();\nawait context.Tracing.StartAsync(new TracingStartOptions\n{\n  Screenshots: true,\n  Snapshots: true\n});\nvar page = context.NewPageAsync();\nawait page.GotoAsync("https://playwright.dev");\nawait context.Tracing.StopAsync(new TracingStopOptions\n{\n  Path: "trace.zip"\n});\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-tracing#tracing-start"},"Tracing.StartAsync(options)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-tracing#tracing-stop"},"Tracing.StopAsync(options)"))),(0,i.kt)("h2",{id:"tracing-start"},"Tracing.StartAsync(options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"TracingStartOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-name"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"?",">"," If specified, the trace is going to be saved into the file with the given name inside the ",(0,i.kt)("inlineCode",{parentName:"li"},"tracesDir")," folder specified in ",(0,i.kt)("a",{parentName:"li",href:"/dotnet/docs/api/class-browsertype#browser-type-launch"},"BrowserType.LaunchAsync(options)"),".",(0,i.kt)("a",{href:"#tracing-start-option-name",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Screenshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-screenshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),"?",">"," Whether to capture screenshots during tracing. Screenshots are used to build a timeline preview.",(0,i.kt)("a",{href:"#tracing-start-option-screenshots",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Snapshots"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-option-snapshots"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Boolean_type",title:"Boolean"},"boolean"),"?",">"," Whether to capture DOM snapshot on every action.",(0,i.kt)("a",{href:"#tracing-start-option-snapshots",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-start-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#tracing-start-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Start tracing."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-csharp"},'await using var browser = playwright.Chromium.LaunchAsync();\nawait using var context = await browser.NewContextAsync();\nawait context.Tracing.StartAsync(new TracingStartOptions\n{\n  Screenshots: true,\n  Snapshots: true\n});\nvar page = context.NewPageAsync();\nawait page.GotoAsync("https://playwright.dev");\nawait context.Tracing.StopAsync(new TracingStopOptions\n{\n  Path: "trace.zip"\n});\n')),(0,i.kt)("h2",{id:"tracing-stop"},"Tracing.StopAsync(options)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"TracingStopOptions?"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"Path"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-option-path"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type",title:"string"},"string"),"?",">"," Export trace into the file with the given name.",(0,i.kt)("a",{href:"#tracing-stop-option-path",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"tracing-stop-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/undefined",title:"void"},"void"),">",(0,i.kt)("a",{href:"#tracing-stop-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Stop tracing."))}u.isMDXComponent=!0}}]);