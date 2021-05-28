(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{162:function(e,t,a){"use strict";function r(e){var t,a,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=r(e[t]))&&(o&&(o+=" "),o+=a);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,a=0,o="";a<arguments.length;)(e=arguments[a++])&&(t=r(e))&&(o&&(o+=" "),o+=t);return o}},163:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return m}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),b=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=b(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=b(a),d=r,m=p["".concat(i,".").concat(d)]||p[d]||u[d]||n;return a?o.a.createElement(m,l(l({ref:t},c),{},{components:a})):o.a.createElement(m,l({ref:t},c))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<n;c++)i[c]=a[c];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},164:function(e,t,a){"use strict";var r=a(0),o=a(165);t.a=function(){var e=Object(r.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},165:function(e,t,a){"use strict";var r=a(0),o=Object(r.createContext)(void 0);t.a=o},166:function(e,t,a){"use strict";a(0),a(164),a(162),a(53)},167:function(e,t,a){"use strict";a(3),a(0)},94:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return s})),a.d(t,"default",(function(){return b}));var r=a(3),o=a(7),n=(a(0),a(163)),i=(a(166),a(167),{id:"why-playwright",title:"Why Playwright?"}),l={unversionedId:"why-playwright",id:"why-playwright",isDocsHomePage:!1,title:"Why Playwright?",description:"Playwright enables fast, reliable and capable automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests.",source:"@site/docs/why-playwright.mdx",slug:"/why-playwright",permalink:"/dotnet/docs/why-playwright",version:"current",sidebar:"docs",next:{title:"Getting Started",permalink:"/dotnet/docs/intro"}},s=[{value:"Support for all browsers",id:"support-for-all-browsers",children:[]},{value:"Fast and reliable execution",id:"fast-and-reliable-execution",children:[]},{value:"Powerful automation capabilities",id:"powerful-automation-capabilities",children:[]},{value:"Integrates with your workflow",id:"integrates-with-your-workflow",children:[]},{value:"Limitations",id:"limitations",children:[]}],c={toc:s};function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Playwright enables fast, reliable and capable automation across all modern browsers. This guide covers those key differentiators to help you decide on the right tool for your automated tests."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"#support-for-all-browsers"}),"Support for all browsers")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"#fast-and-reliable-execution"}),"Fast and reliable execution")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"#powerful-automation-capabilities"}),"Powerful automation capabilities")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"#integrates-with-your-workflow"}),"Integrates with your workflow")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"#limitations"}),"Limitations")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/release-notes"}),"Release notes"))),Object(n.b)("h2",{id:"support-for-all-browsers"},"Support for all browsers"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Test on Chromium, Firefox and WebKit"),". Playwright has full API coverage for all modern browsers, including Google Chrome and Microsoft Edge (with ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://www.chromium.org/"}),"Chromium"),"), Apple Safari (with ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://webkit.org/"}),"WebKit"),") and Mozilla Firefox."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Cross-platform WebKit testing"),". With Playwright, test how your app behaves in Apple Safari with WebKit builds for Windows, Linux and macOS. Test locally and on CI."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Test for mobile"),". Use ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/emulation"}),"device emulation")," to test your responsive web apps in mobile web browsers."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Headless and headed"),". Playwright supports headless (without browser UI) and headed (with browser UI) modes for all browsers and all platforms. Headed is great for debugging, and headless is faster and suited for CI/cloud executions.")),Object(n.b)("h2",{id:"fast-and-reliable-execution"},"Fast and reliable execution"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Auto-wait APIs"),". Playwright interactions ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/actionability"}),"auto-wait for elements")," to be ready. This improves reliability and simplifies test authoring."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Timeout-free automation"),". Playwright receives browser signals, like network requests, page navigations and page load events to eliminate the need for sleep timeouts that cause flakiness."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Lean parallelization with browser contexts"),". Reuse a single browser instance for multiple parallelized, isolated execution environments with ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/core-concepts"}),"browser contexts"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Resilient element selectors"),". Playwright can rely on user-facing strings, like text content and accessibility labels to ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/selectors"}),"select elements"),". These strings are more resilient than selectors tightly-coupled to the DOM structure.")),Object(n.b)("h2",{id:"powerful-automation-capabilities"},"Powerful automation capabilities"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Multiple domains, pages and frames"),". Playwright is an out-of-process automation driver that is not limited by the scope of in-page JavaScript execution and can automate scenarios with ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/multi-pages"}),"multiple pages"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Powerful network control"),". Playwright introduces context-wide ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/network"}),"network interception")," to stub and mock network requests."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Modern web features"),". Playwright supports web components through ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/selectors"}),"shadow-piercing selectors"),", ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/emulation"}),"geolocation, permissions"),", web workers and other modern web APIs."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Capabilities to cover all scenarios"),". Support for ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/downloads"}),"file downloads")," and ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/input"}),"uploads"),", out-of-process iframes, native ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/input"}),"input events"),", and even ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/emulation"}),"dark mode"),".")),Object(n.b)("h2",{id:"integrates-with-your-workflow"},"Integrates with your workflow"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"One-line installation"),". Installing Playwright auto-downloads browser dependencies for your team to be onboarded quickly."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"TypeScript support"),". Playwright ships with built-in types for auto-completion and other benefits."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Debugging tools"),". Playwright works with the ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/debug"}),"editor debugger and browser developer tools")," to pause execution and inspect the web page."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Language bindings"),". Playwright is available for ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright"}),"Node.js")," ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-python"}),"Python"),", ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-sharp"}),"C#")," and ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-java"}),"Java"),". Learn more about ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/languages"}),"supported languages"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Deploy tests to CI"),". First-party ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/docker"}),"Docker image")," and ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright-github-action"}),"GitHub Actions")," to deploy tests to ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/dotnet/docs/ci"}),"your preferred CI/CD provider"),".")),Object(n.b)("h2",{id:"limitations"},"Limitations"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Legacy Edge and IE11 support"),". Playwright does not support legacy Microsoft Edge or IE11 (",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://techcommunity.microsoft.com/t5/microsoft-365-blog/microsoft-365-apps-say-farewell-to-internet-explorer-11-and/ba-p/1591666"}),"deprecation notice"),"). The new Microsoft Edge (on Chromium) is supported."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"Test on real mobile devices"),": Playwright uses desktop browsers to emulate mobile devices. If you are interested in running on real mobile devices, please ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://github.com/microsoft/playwright/issues/1122"}),"upvote this issue"),".")))}b.isMDXComponent=!0}}]);