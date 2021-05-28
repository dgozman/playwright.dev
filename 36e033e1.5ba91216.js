(window.webpackJsonp=window.webpackJsonp||[]).push([[169],{240:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var a=n(3),o=n(7),r=(n(0),n(901)),i=(n(905),n(906),{id:"debug",title:"Debugging tools"}),c={unversionedId:"debug",id:"version-1.11.0/debug",isDocsHomePage:!1,title:"Debugging tools",description:"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation.",source:"@site/versioned_docs/version-1.11.0/debug.mdx",slug:"/debug",permalink:"/docs/debug",version:"1.11.0",sidebar:"version-1.11.0/docs",previous:{title:"Core concepts",permalink:"/docs/core-concepts"},next:{title:"Supported languages",permalink:"/docs/languages"}},l=[{value:"Playwright Inspector",id:"playwright-inspector",children:[]},{value:"Run in headed mode",id:"run-in-headed-mode",children:[]},{value:"Browser Developer Tools",id:"browser-developer-tools",children:[]},{value:"Run in Debug Mode",id:"run-in-debug-mode",children:[]},{value:"Selectors in Developer Tools Console",id:"selectors-in-developer-tools-console",children:[]},{value:"Visual Studio Code debugger (Node.js)",id:"visual-studio-code-debugger-nodejs",children:[{value:"Use launch config",id:"use-launch-config",children:[]},{value:"Use the JavaScript Debug Terminal",id:"use-the-javascript-debug-terminal",children:[]}]},{value:"Verbose API logs",id:"verbose-api-logs",children:[]}],s={toc:l};function b(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"Playwright scripts work with existing debugging tools, like Node.js debuggers and browser developer tools. Playwright also introduces new debugging features for browser automation."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#playwright-inspector"}),"Playwright Inspector")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#run-in-headed-mode"}),"Run in headed mode")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#browser-developer-tools"}),"Browser Developer Tools")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#run-in-debug-mode"}),"Run in Debug Mode")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#selectors-in-developer-tools-console"}),"Selectors in Developer Tools Console")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#visual-studio-code-debugger-nodejs"}),"Visual Studio Code debugger (Node.js)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"#verbose-api-logs"}),"Verbose API logs"))),Object(r.b)("h2",{id:"playwright-inspector"},"Playwright Inspector"),Object(r.b)("p",null,Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/inspector"}),"Playwright Inspector")," is a GUI tool that helps authoring and debugging Playwright scripts. That's our default recommended tool for scripts troubleshooting."),Object(r.b)("img",{width:"712",alt:"Playwright Inspector",src:"https://user-images.githubusercontent.com/883973/108614092-8c478a80-73ac-11eb-9597-67dfce110e00.png"}),Object(r.b)("h2",{id:"run-in-headed-mode"},"Run in headed mode"),Object(r.b)("p",null,"Playwright runs browsers in headless mode by default. To change this behavior, use ",Object(r.b)("inlineCode",{parentName:"p"},"headless: false")," as a launch option. You can also use the ",Object(r.b)("inlineCode",{parentName:"p"},"slowMo")," option to slow down execution and follow along while debugging."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"await chromium.launch({ headless: false, slowMo: 100 }); // or firefox, webkit\n")),Object(r.b)("h2",{id:"browser-developer-tools"},"Browser Developer Tools"),Object(r.b)("p",null,"You can use browser developer tools in Chromium, Firefox and WebKit while running a Playwright script in headed mode. Developer tools help to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Inspect the DOM tree and ",Object(r.b)("strong",{parentName:"li"},"find element selectors")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"See console logs")," during execution (or learn how to ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/verification#console-logs"}),"read logs via API"),")"),Object(r.b)("li",{parentName:"ul"},"Check ",Object(r.b)("strong",{parentName:"li"},"network activity")," and other developer tools features")),Object(r.b)("a",{href:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png"},Object(r.b)("img",{src:"https://user-images.githubusercontent.com/284612/77234134-5f21a500-6b69-11ea-92ec-1c146e1333ec.png",width:"500",alt:"Chromium Developer Tools"})),Object(r.b)("p",null,"Using a ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/api/class-page#pagepause"}),"page.pause()")," method is an easy way to pause the Playwright script execution and inspect the page in Developer tools. It will also open ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/inspector"}),"Playwright Inspector")," to help with debugging."),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"For WebKit"),": launching WebKit Inspector during the execution will   prevent the Playwright script from executing any further."))),Object(r.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-heading"}),Object(r.b)("h5",{parentName:"div"},Object(r.b)("span",Object(a.a)({parentName:"h5"},{className:"admonition-icon"}),Object(r.b)("svg",Object(a.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(r.b)("path",Object(a.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(r.b)("div",Object(a.a)({parentName:"div"},{className:"admonition-content"}),Object(r.b)("p",{parentName:"div"},Object(r.b)("strong",{parentName:"p"},"For Chromium"),": you can also open developer tools through a launch option. ",Object(r.b)("inlineCode",{parentName:"p"},"js await chromium.launch({ devtools: true }); ")," ",Object(r.b)("inlineCode",{parentName:"p"},"java chromium.launch(new BrowserType.LaunchOptions().setDevtools(true)); ")," ",Object(r.b)("inlineCode",{parentName:"p"},"python async await chromium.launch(devtools=True) ")," ",Object(r.b)("inlineCode",{parentName:"p"},"python sync chromium.launch(devtools=True) ")))),Object(r.b)("h2",{id:"run-in-debug-mode"},"Run in Debug Mode"),Object(r.b)("p",null,"Set the ",Object(r.b)("inlineCode",{parentName:"p"},"PWDEBUG")," environment variable to run your scripts in debug mode. Using ",Object(r.b)("inlineCode",{parentName:"p"},"PWDEBUG=1")," will open ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/docs/inspector"}),"Playwright Inspector"),"."),Object(r.b)("p",null,"Using ",Object(r.b)("inlineCode",{parentName:"p"},"PWDEBUG=console")," will configure the browser for debugging in Developer tools console:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Runs headed"),": Browsers always launch in headed mode"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Disables timeout"),": Sets default timeout to 0 (= no timeout)"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Console helper"),": Configures a ",Object(r.b)("inlineCode",{parentName:"li"},"playwright")," object in the browser to generate and highlight ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/selectors"}),"Playwright selectors"),". This can be used to verify text or composite selectors.")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ PWDEBUG=console npm run test\n\n# Windows\n$ set PWDEBUG=console\n$ npm run test\n")),Object(r.b)("h2",{id:"selectors-in-developer-tools-console"},"Selectors in Developer Tools Console"),Object(r.b)("p",null,"When running in Debug Mode with ",Object(r.b)("inlineCode",{parentName:"p"},"PWDEBUG=console"),", a ",Object(r.b)("inlineCode",{parentName:"p"},"playwright")," object is available in Developer tools console."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Run with ",Object(r.b)("inlineCode",{parentName:"li"},"PWDEBUG=console")),Object(r.b)("li",{parentName:"ol"},"Setup a breakpoint to pause the execution"),Object(r.b)("li",{parentName:"ol"},"Open the console panel in browser developer tools"),Object(r.b)("li",{parentName:"ol"},"Use the ",Object(r.b)("inlineCode",{parentName:"li"},"playwright")," API",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"playwright.$(selector)"),": Highlight the first occurrence of the selector. This reflects how ",Object(r.b)("inlineCode",{parentName:"li"},"page.$")," would see the page."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"playwright.$$(selector)"),": Highlight all occurrences of the selector. This reflects how ",Object(r.b)("inlineCode",{parentName:"li"},"page.$$")," would see the page."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"playwright.inspect(selector)"),": Inspect the selector in the Elements panel."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"playwright.clear()"),": Clear existing highlights."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"playwright.selector(element)"),": Generate a selector that points to the element.")))),Object(r.b)("a",{href:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png"},Object(r.b)("img",{src:"https://user-images.githubusercontent.com/284612/86857345-299abc00-c073-11ea-9e31-02923a9f0d4b.png",width:"500",alt:"Highlight selectors"})),Object(r.b)("h2",{id:"visual-studio-code-debugger-nodejs"},"Visual Studio Code debugger (Node.js)"),Object(r.b)("p",null,"The VS Code debugger can be used to pause and resume execution of Playwright scripts with breakpoints. The debugger can be configured in two ways."),Object(r.b)("h3",{id:"use-launch-config"},"Use launch config"),Object(r.b)("p",null,"Setup ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging"}),Object(r.b)("inlineCode",{parentName:"a"},"launch.json")," configuration")," for your Node.js project. Once configured launch the scripts with F5 and use breakpoints."),Object(r.b)("h3",{id:"use-the-javascript-debug-terminal"},"Use the JavaScript Debug Terminal"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Open ",Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://code.visualstudio.com/docs/nodejs/nodejs-debugging#_javascript-debug-terminal"}),"JavaScript Debug Terminal")),Object(r.b)("li",{parentName:"ol"},"Set a breakpoint in VS Code",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Use the ",Object(r.b)("inlineCode",{parentName:"li"},"debugger")," keyword or set a breakpoint in the VS Code UI"))),Object(r.b)("li",{parentName:"ol"},"Run your Node.js script from the terminal")),Object(r.b)("h2",{id:"verbose-api-logs"},"Verbose API logs"),Object(r.b)("p",null,"Playwright supports verbose logging with the ",Object(r.b)("inlineCode",{parentName:"p"},"DEBUG")," environment variable."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-sh"}),"# Linux/macOS\n$ DEBUG=pw:api npm run test\n\n# Windows\n$ set DEBUG=pw:api\n$ npm run test\n")))}b.isMDXComponent=!0},901:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return g}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),b=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(n),d=a,g=p["".concat(i,".").concat(d)]||p[d]||u[d]||r;return n?o.a.createElement(g,c(c({ref:t},s),{},{components:n})):o.a.createElement(g,c({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=n[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},902:function(e,t,n){"use strict";function a(e){var t,n,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(o&&(o+=" "),o+=n);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,n=0,o="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(o&&(o+=" "),o+=t);return o}},903:function(e,t,n){"use strict";var a=n(0),o=n(904);t.a=function(){var e=Object(a.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},904:function(e,t,n){"use strict";var a=n(0),o=Object(a.createContext)(void 0);t.a=o},905:function(e,t,n){"use strict";n(0),n(903),n(902),n(55)},906:function(e,t,n){"use strict";n(3),n(0)}}]);