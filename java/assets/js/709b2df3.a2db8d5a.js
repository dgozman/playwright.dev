"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[2949],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,g=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?a.createElement(g,i(i({ref:t},p),{},{components:n})):a.createElement(g,i({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var c=2;c<o;c++)i[c]=n[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(79443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),l="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,m=e.groupId,d=e.className,g=o(),h=g.tabGroupChoices,f=g.setTabGroupChoices,v=(0,a.useState)(r),k=v[0],w=v[1],y=a.Children.toArray(e.children),b=[];if(null!=m){var x=h[m];null!=x&&x!==k&&u.some((function(e){return e.value===x}))&&w(x)}var N=function(e){var t=e.currentTarget,n=b.indexOf(t),a=u[n].value;w(a),null!=m&&(f(m,a),setTimeout((function(){var e,n,a,r,o,i,l,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,i=window,l=i.innerHeight,c=i.innerWidth,n>=0&&o<=c&&r<=l&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case p:var a=b.indexOf(e.target)+1;n=b[a]||b[0];break;case c:var r=b.indexOf(e.target)-1;n=b[r]||b[b.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,i.Z)("tabs__item",l,{"tabs__item--active":k===t}),key:t,ref:function(e){return b.push(e)},onKeyDown:C,onFocus:N,onClick:N},n)}))),t?(0,a.cloneElement)(y.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},75423:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),i=(n(55064),n(58215),{id:"cli",title:"Command Line Interface"}),l=void 0,s={unversionedId:"cli",id:"version-1.11.0/cli",isDocsHomePage:!1,title:"Command Line Interface",description:"Playwright comes with the command line tools that run via npx or as a part of the npm scripts.",source:"@site/versioned_docs/version-1.11.0/cli.mdx",sourceDirName:".",slug:"/cli",permalink:"/java/docs/1.11.0/cli",version:"1.11.0",frontMatter:{id:"cli",title:"Command Line Interface"},sidebar:"version-1.11.0/docs",previous:{title:"Continuous Integration",permalink:"/java/docs/1.11.0/ci"}},c=[{value:"Usage",id:"usage",children:[]},{value:"Generate code",id:"generate-code",children:[{value:"Preserve authenticated state",id:"preserve-authenticated-state",children:[]},{value:"Codegen with custom setup",id:"codegen-with-custom-setup",children:[]}]},{value:"Open pages",id:"open-pages",children:[{value:"Emulate devices",id:"emulate-devices",children:[]},{value:"Emulate color scheme and viewport size",id:"emulate-color-scheme-and-viewport-size",children:[]},{value:"Emulate geolocation, language and timezone",id:"emulate-geolocation-language-and-timezone",children:[]}]},{value:"Inspect selectors",id:"inspect-selectors",children:[]},{value:"Take screenshot",id:"take-screenshot",children:[]},{value:"Generate PDF",id:"generate-pdf",children:[]},{value:"Install system dependencies",id:"install-system-dependencies",children:[]},{value:"Known limitations",id:"known-limitations",children:[]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Playwright comes with the command line tools that run via ",(0,o.kt)("inlineCode",{parentName:"p"},"npx")," or as a part of the ",(0,o.kt)("inlineCode",{parentName:"p"},"npm")," scripts."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#generate-code"},"Generate code")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#open-pages"},"Open pages")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#inspect-selectors"},"Inspect selectors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#take-screenshot"},"Take screenshot")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#generate-pdf"},"Generate PDF")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#install-system-dependencies"},"Install system dependencies")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#known-limitations"},"Known limitations"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI\n")),(0,o.kt)("h2",{id:"generate-code"},"Generate code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen wikipedia.org"\n')),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen")," and perform actions in the browser. Playwright CLI will generate JavaScript code for the user interactions. ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen")," will attempt to generate resilient text-based selectors."),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536033-7e7ebe00-f1ed-11ea-9e1a-7cbd912e3391.gif"}),(0,o.kt)("h3",{id:"preserve-authenticated-state"},"Preserve authenticated state"),(0,o.kt)("p",null,"Run ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen")," with ",(0,o.kt)("inlineCode",{parentName:"p"},"--save-storage")," to save ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," at the end. This is useful to separately record authentication step and reuse it later."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen  --save-storage=auth.json"\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n')),(0,o.kt)("p",null,"Run with ",(0,o.kt)("inlineCode",{parentName:"p"},"--load-storage")," to consume previously loaded storage. This way, all ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies"},"cookies")," and ",(0,o.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage"},"localStorage")," will be restored, bringing most web apps to the authenticated state."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open --load-storage=auth.json my.web.app"\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="codegen --load-storage=auth.json my.web.app"\n# Perform authentication and exit.\n# auth.json will contain the storage state.\n')),(0,o.kt)("h3",{id:"codegen-with-custom-setup"},"Codegen with custom setup"),(0,o.kt)("p",null,"If you would like to use codegen in some non-standard setup (for example, use ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-browsercontext#browsercontextrouteurl-handler"},"BrowserContext.route(url, handler)"),"), it is possible to call ",(0,o.kt)("a",{parentName:"p",href:"/java/docs/1.11.0/api/class-page#pagepause"},"Page.pause()")," that will open a separate window with codegen controls."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// FIXME\nimport com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      // Make sure to run headed.\n      Browser browser = chromium.launch(new BrowserType.LaunchOptions().setHeadless(false));\n      // Setup context however you like.\n      BrowserContext context = browser.newContext(/* pass any options */);\n      context.route("**/*", route -> route.resume());\n      // Pause the page, and start recording manually.\n      Page page = context.newPage();\n      page.pause();\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"open-pages"},"Open pages"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"open"),", you can use Playwright bundled browsers to browse web pages. Playwright provides cross-platform WebKit builds that can be used to reproduce Safari rendering across Windows, Linux and macOS."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Open page in Chromium\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open example.com"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Open page in WebKit\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="wk example.com"\n')),(0,o.kt)("h3",{id:"emulate-devices"},"Emulate devices"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"open")," can emulate mobile and tablet devices from the ",(0,o.kt)("a",{parentName:"p",href:"https://playwright.dev/docs/api/class-playwright#playwrightdevices"},(0,o.kt)("inlineCode",{parentName:"a"},"playwright.devices"))," list."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Emulate iPhone 11.\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='open --device=\"iPhone 11\" wikipedia.org'\n")),(0,o.kt)("h3",{id:"emulate-color-scheme-and-viewport-size"},"Emulate color scheme and viewport size"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Emulate screen size and color scheme.\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="open --viewport-size=800,600 --color-scheme=dark twitter.com"\n')),(0,o.kt)("h3",{id:"emulate-geolocation-language-and-timezone"},"Emulate geolocation, language and timezone"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# Emulate timezone, language & location\n# Once page opens, click the "my location" button to see geolocation in action\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args=\'open --timezone="Europe/Rome" --geolocation="41.890221,12.492348" --lang="it-IT" maps.google.com\'\n')),(0,o.kt)("h2",{id:"inspect-selectors"},"Inspect selectors"),(0,o.kt)("p",null,"During ",(0,o.kt)("inlineCode",{parentName:"p"},"open")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"codegen"),", you can use following API inside the developer tools console of any browser."),(0,o.kt)("img",{src:"https://user-images.githubusercontent.com/284612/92536317-37dd9380-f1ee-11ea-875d-daf1b206dd56.png"}),(0,o.kt)("h4",{id:"playwrightselector"},"playwright.$(selector)"),(0,o.kt)("p",null,"Query Playwright selector, using the actual Playwright query engine, for example:"),(0,o.kt)("h4",{id:"playwrightselector-1"},"playwright.$$(selector)"),(0,o.kt)("p",null,"Same as ",(0,o.kt)("inlineCode",{parentName:"p"},"playwright.$"),", but returns all matching elements."),(0,o.kt)("h4",{id:"playwrightinspectselector"},"playwright.inspect(selector)"),(0,o.kt)("p",null,"Reveal element in the Elements panel (if DevTools of the respective browser supports it)."),(0,o.kt)("h4",{id:"playwrightselectorelement"},"playwright.selector(element)"),(0,o.kt)("p",null,"Generates selector for the given element."),(0,o.kt)("h2",{id:"take-screenshot"},"Take screenshot"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# See command help\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="screenshot --help"\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Wait 3 seconds before capturing a screenshot after page loads ('load' event fires)\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='screenshot --device=\"iPhone 11\" --color-scheme=dark --wait-for-timeout=3000 twitter.com twitter-iphone.png'\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"# Capture a full page screenshot\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args='screenshot --full-page en.wikipedia.org wiki-full.png'\n")),(0,o.kt)("h2",{id:"generate-pdf"},"Generate PDF"),(0,o.kt)("p",null,"PDF generation only works in Headless Chromium."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# See command help\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="pdf https://en.wikipedia.org/wiki/PDF wiki.pdf"\n')),(0,o.kt)("h2",{id:"install-system-dependencies"},"Install system dependencies"),(0,o.kt)("p",null,"Ubuntu 18.04 and Ubuntu 20.04 system dependencies can get installed automatically. This is useful for CI environments."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'# See command help\n$ mvn exec:java -e -Dexec.mainClass=com.microsoft.playwright.CLI -Dexec.args="install-deps"\n')),(0,o.kt)("h2",{id:"known-limitations"},"Known limitations"),(0,o.kt)("p",null,"Opening WebKit Web Inspector will disconnect Playwright from the browser. In such cases, code generation will stop."))}u.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);