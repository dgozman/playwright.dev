(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{283:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},284:function(e,t,a){"use strict";a.d(t,"a",(function(){return b})),a.d(t,"b",(function(){return d}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),p=function(e){var t=r.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},b=function(e){var t=p(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(a),m=n,d=b["".concat(c,".").concat(m)]||b[m]||u[m]||o;return a?r.a.createElement(d,i(i({ref:t},s),{},{components:a})):r.a.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},285:function(e,t,a){"use strict";var n=a(0),r=a(286);t.a=function(){var e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},286:function(e,t,a){"use strict";var n=a(0),r=Object(n.createContext)(void 0);t.a=r},287:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(285),c=a(283),i=a(53),l=a.n(i),s=37,p=39;t.a=function(e){var t=e.lazy,a=e.block,i=e.defaultValue,b=e.values,u=e.groupId,m=e.className,d=Object(o.a)(),g=d.tabGroupChoices,h=d.setTabGroupChoices,j=Object(n.useState)(i),O=j[0],f=j[1],v=n.Children.toArray(e.children);if(null!=u){var w=g[u];null!=w&&w!==O&&b.some((function(e){return e.value===w}))&&f(w)}var y=function(e){f(e),null!=u&&h(u,e)},x=[];return r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(c.a)("tabs",{"tabs--block":a},m)},b.map((function(e){var t=e.value,a=e.label;return r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":O===t,className:Object(c.a)("tabs__item",l.a.tabItem,{"tabs__item--active":O===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:function(e){!function(e,t,a){switch(a.keyCode){case p:!function(e,t){var a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()}(e,t);break;case s:!function(e,t){var a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()}(e,t)}}(x,e.target,e)},onFocus:function(){return y(t)},onClick:function(){y(t)}},a)}))),t?Object(n.cloneElement)(v.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.a.createElement("div",{className:"margin-vert--md"},v.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==O})}))))}},288:function(e,t,a){"use strict";var n=a(3),r=a(0),o=a.n(r);t.a=function(e){var t=e.children,a=e.hidden,r=e.className;return o.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:a,className:r}),t)}},91:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return i})),a.d(t,"toc",(function(){return l})),a.d(t,"default",(function(){return p}));var n=a(3),r=a(7),o=(a(0),a(284)),c=(a(287),a(288),{id:"cli",title:"Command Line Interface"}),i={unversionedId:"cli",id:"version-1.10.0/cli",isDocsHomePage:!1,title:"Command Line Interface",description:"Playwright comes with the command line tools that run via npx or as a part of the npm scripts.",source:"@site/versioned_docs/version-1.10.0/cli.mdx",slug:"/cli",permalink:"/java/docs/1.10.0/cli",version:"1.10.0",sidebar:"version-1.10.0/docs",previous:{title:"Continuous Integration",permalink:"/java/docs/1.10.0/ci"}},l=[{value:"Usage",id:"usage",children:[]},{value:"Generate code",id:"generate-code",children:[{value:"Preserve authenticated state",id:"preserve-authenticated-state",children:[]},{value:"Codegen with custom setup",id:"codegen-with-custom-setup",children:[]}]},{value:"Open pages",id:"open-pages",children:[{value:"Emulate devices",id:"emulate-devices",children:[]},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",children:[]},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",children:[]}]},{value:"Inspect selectors",id:"inspect-selectors",children:[]},{value:"Take screenshot",id:"take-screenshot",children:[]},{value:"Generate PDF",id:"generate-pdf",children:[]},{value:"Known limitations",id:"known-limitations",children:[]}],s={toc:l};function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Playwright comes with the command line tools that run via ",Object(o.b)("inlineCode",{parentName:"p"},"npx")," or as a part of the ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," scripts."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#usage"}),"Usage")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#generate-code"}),"Generate code")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#open-pages"}),"Open pages")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#inspect-selectors"}),"Inspect selectors")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#take-screenshot"}),"Take screenshot")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#generate-pdf"}),"Generate PDF")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"#known-limitations"}),"Known limitations"))),Object(o.b)("h2",{id:"usage"},"Usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI\n")),Object(o.b)("h2",{id:"generate-code"},"Generate code"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen wikipedia.org"\n')),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright CLI will generate JavaScript code for the user interactions. ",Object(o.b)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),Object(o.b)("img",{src:"https://user-images.githubusercontent.com/284612/92536033-7e7ebe00-f1ed-11ea-9e1a-7cbd912e3391.gif"}),Object(o.b)("h3",{id:"preserve-authenticated-state"},"Preserve authenticated state"),Object(o.b)("p",null,"Run ",Object(o.b)("inlineCode",{parentName:"p"},"codegen")," with ",Object(o.b)("inlineCode",{parentName:"p"},"--save-storage")," to save ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," at the end. This is useful to separately record authentication step and reuse it later."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen  --save-storage=auth.json"\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n')),Object(o.b)("p",null,"Run with ",Object(o.b)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"}),"cookies")," and ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"}),"localStorage")," will be restored, bringing most web apps to the authenticated state."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open --load-storage=auth.json my.web.app"\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen --load-storage=auth.json my.web.app"\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n')),Object(o.b)("h3",{id:"codegen-with-custom-setup"},"Codegen with custom setup"),Object(o.b)("p",null,"If you would like to use codegen in some non-standard setup (for example, use ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/1.10.0/api/class-browsercontext#browsercontextrouteurl-handler"}),"BrowserContext.route(url, handler)"),"), it is possible to call ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/1.10.0/api/class-page#pagepause"}),"Page.pause()")," that will open a separate window with codegen controls."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-java"}),'// FIXME\nimport com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      // Make sure to run headed.\n      Browser browser = chromium.launch(new BrowserType.LaunchOptions().setHeadless(false));\n      // Setup context however you like.\n      BrowserContext context = browser.newContext(/* pass any options */);\n      context.route("**/*", route -> route.resume());\n      // Pause the page, and start recording manually.\n      Page page = context.newPage();\n      page.pause();\n    }\n  }\n}\n')),Object(o.b)("h2",{id:"open-pages"},"Open pages"),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"open"),", you can use Playwright bundled browsers to browse web pages. Playwright provides cross-platform WebKit builds that can be used to reproduce Safari rendering across Windows, Linux and macOS."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'# Open page in Chromium\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open example.com"\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'# Open page in WebKit\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="wk example.com"\n')),Object(o.b)("h3",{id:"emulate-devices"},"Emulate devices"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"open")," can emulate mobile and tablet devices from the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://playwright.dev/docs/api/class-playwright#playwrightdevices"}),Object(o.b)("inlineCode",{parentName:"a"},"playwright.devices"))," list."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Emulate iPhone 11.\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='open --device=\"iPhone 11\" wikipedia.org'\n")),Object(o.b)("h3",{id:"emulate-color-scheme-and-viewport-size"},"Emulate color scheme and viewport size"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'# Emulate screen size and color scheme.\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open --viewport-size=800,600 --color-scheme=dark twitter.com"\n')),Object(o.b)("h3",{id:"emulate-geolocation-language-and-timezone"},"Emulate geolocation, language and timezone"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args=\'open --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com\'\n')),Object(o.b)("h2",{id:"inspect-selectors"},"Inspect selectors"),Object(o.b)("p",null,"During ",Object(o.b)("inlineCode",{parentName:"p"},"open")," or ",Object(o.b)("inlineCode",{parentName:"p"},"codegen"),", you can use following API inside the developer tools console of any browser."),Object(o.b)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),Object(o.b)("h4",{id:"playwrightselector"},"playwright.$(selector)"),Object(o.b)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),Object(o.b)("h4",{id:"playwrightselector-1"},"playwright.$$(selector)"),Object(o.b)("p",null,"Same as ",Object(o.b)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),Object(o.b)("h4",{id:"playwrightinspectselector"},"playwright.inspect(selector)"),Object(o.b)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),Object(o.b)("h4",{id:"playwrightselectorelement"},"playwright.selector(element)"),Object(o.b)("p",null,"Generates selector for the given element."),Object(o.b)("h2",{id:"take-screenshot"},"Take screenshot"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'# See command help\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="screenshot --help"\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Wait 3 seconds before capturing a screenshot after page loads ('load' event fires)\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='screenshot --device=\"iPhone 11\" --color-scheme=dark --wait-for-timeout=3000 twitter.com twitter-iphone.png'\n")),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"# Capture a full page screenshot\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='screenshot --full-page en.wikipedia.org wiki-full.png'\n")),Object(o.b)("h2",{id:"generate-pdf"},"Generate PDF"),Object(o.b)("p",null,"PDF generation only works in Headless Chromium."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),'# See command help\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="pdf https://en.wikipedia.org/wiki/PDF wiki.pdf"\n')),Object(o.b)("h2",{id:"known-limitations"},"Known limitations"),Object(o.b)("p",null,"Opening WebKit Web Inspector will disconnect Playwright from the browser. In such cases, code generation will stop."))}p.isMDXComponent=!0}}]);