"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5682],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=p(n),m=o,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||r;return n?a.createElement(f,i(i({ref:t},c),{},{components:n})):a.createElement(f,i({ref:t},c))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<r;p++)i[p]=n[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8215:function(e,t,n){n(7294)},5064:function(e,t,n){n(7294),n(9443)},9443:function(e,t,n){var a=(0,n(7294).createContext)(void 0);t.Z=a},4608:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=n(2122),o=n(9756),r=(n(7294),n(3905)),i=(n(5064),n(8215),{id:"test-configuration",title:"Configuration"}),l=void 0,s={unversionedId:"test-configuration",id:"version-1.13.0/test-configuration",isDocsHomePage:!1,title:"Configuration",description:"Playwright Test provides options to configure the default browser, context and page fixtures. For example there are options for headless, viewport and ignoreHTTPSErrors. You can also record a video or a trace for the test or capture a screenshot at the end.",source:"@site/versioned_docs/version-1.13.0/test-configuration.mdx",sourceDirName:".",slug:"/test-configuration",permalink:"/dotnet/docs/1.13.0/test-configuration",version:"1.13.0",frontMatter:{id:"test-configuration",title:"Configuration"}},p=[{value:"Global configuration",id:"global-configuration",children:[]},{value:"Local configuration",id:"local-configuration",children:[]},{value:"Basic options",id:"basic-options",children:[]},{value:"Emulation",id:"emulation",children:[]},{value:"Network",id:"network",children:[{value:"Network mocking",id:"network-mocking",children:[]}]},{value:"Automatic screenshots",id:"automatic-screenshots",children:[]},{value:"Record video",id:"record-video",children:[]},{value:"Record test trace",id:"record-test-trace",children:[]},{value:"More browser and context options",id:"more-browser-and-context-options",children:[]},{value:"Testing options",id:"testing-options",children:[]},{value:"Different options for each browser",id:"different-options-for-each-browser",children:[]}],c={toc:p};function u(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Playwright Test provides options to configure the default ",(0,r.kt)("inlineCode",{parentName:"p"},"browser"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"context")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"page")," fixtures. For example there are options for ",(0,r.kt)("inlineCode",{parentName:"p"},"headless"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"viewport")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"ignoreHTTPSErrors"),". You can also record a video or a trace for the test or capture a screenshot at the end."),(0,r.kt)("p",null,"Finally, there are plenty of testing options like ",(0,r.kt)("inlineCode",{parentName:"p"},"timeout")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"testDir")," that configure how your tests are collected and executed."),(0,r.kt)("p",null,"You can specify any options globally in the configuration file, and most of them locally in a test file."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#global-configuration"},"Global configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#local-configuration"},"Local configuration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#basic-options"},"Basic options")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#emulation"},"Emulation")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#network"},"Network")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#automatic-screenshots"},"Automatic screenshots")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#record-video"},"Record video")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#record-test-trace"},"Record test trace")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#more-browser-and-context-options"},"More browser and context options")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#testing-options"},"Testing options")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"#different-options-for-each-browser"},"Different options for each browser"))),(0,r.kt)("h2",{id:"global-configuration"},"Global configuration"),(0,r.kt)("p",null,"Create ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright.config.js")," (or ",(0,r.kt)("inlineCode",{parentName:"p"},"playwright.config.ts"),") and specify options in the ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," section."),(0,r.kt)("p",null,"Now run tests as usual, Playwright Test will pick up the configuration file automatically."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --browser=firefox\n")),(0,r.kt)("p",null,"If you put your configuration file in a different place, pass it with ",(0,r.kt)("inlineCode",{parentName:"p"},"--config")," option."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --config=tests/my.config.js\n")),(0,r.kt)("h2",{id:"local-configuration"},"Local configuration"),(0,r.kt)("p",null,"With ",(0,r.kt)("inlineCode",{parentName:"p"},"test.use()")," you can override some options for a file or a ",(0,r.kt)("inlineCode",{parentName:"p"},"test.describe")," block."),(0,r.kt)("p",null,"The same works inside describe."),(0,r.kt)("h2",{id:"basic-options"},"Basic options"),(0,r.kt)("p",null,"These are commonly used options for various scenarios. You usually set them globally in ",(0,r.kt)("a",{parentName:"p",href:"#global-configuration"},"configuration file"),"."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"baseURL")," - Base URL used for all pages in the context. Allows navigating by using just the path, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"page.goto('/settings')"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"browserName")," - Name of the browser that will run the tests, one of ",(0,r.kt)("inlineCode",{parentName:"li"},"chromium"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"firefox"),", or ",(0,r.kt)("inlineCode",{parentName:"li"},"webkit"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"bypassCSP")," - Toggles bypassing Content-Security-Policy. Useful when CSP includes the production origin."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"channel")," - Browser channel to use. ",(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13.0/browsers"},"Learn more")," about different browsers and channels."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"headless")," - Whether to run the browser in headless mode."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"viewport")," - Viewport used for all pages in the context."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"storageState")," - Populates context with given storage state. Useful for easy authentication, ",(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13.0/auth"},"learn more"),".")),(0,r.kt)("h2",{id:"emulation"},"Emulation"),(0,r.kt)("p",null,"Playwright can ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13.0/emulation"},"emulate different environments")," like mobile device, locale or timezone."),(0,r.kt)("p",null,'Here is an example configuration that runs tests in "Pixel 4" and "iPhone 11" emulation modes. Note that it uses the ',(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13.0/test-advanced#projects"},"projects")," feature to run the same set of tests in multiple configurations."),(0,r.kt)("p",null,"You can specify options separately instead of using predefined devices. There are also more options such as locale, geolocation, and timezone which can be configured."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"colorScheme")," - Emulates ",(0,r.kt)("inlineCode",{parentName:"li"},"'prefers-colors-scheme'")," media feature, supported values are ",(0,r.kt)("inlineCode",{parentName:"li"},"'light'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"'dark'"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"'no-preference'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"deviceScaleFactor")," - Specify device scale factor (can be thought of as dpr). Defaults to ",(0,r.kt)("inlineCode",{parentName:"li"},"1"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"geolocation")," - Context geolocation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"hasTouch")," - Specifies if device supports touch events."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"isMobile")," - Whether the ",(0,r.kt)("inlineCode",{parentName:"li"},"meta viewport")," tag is taken into account and touch events are enabled."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"javaScriptEnabled")," - Whether or not to enable JavaScript in the context."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"locale")," - User locale, for example ",(0,r.kt)("inlineCode",{parentName:"li"},"en-GB"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"de-DE"),", etc."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"permissions")," - A list of permissions to grant to all pages in the context."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timezoneId")," - Changes the timezone of the context."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"userAgent")," - Specific user agent to use in the context.")),(0,r.kt)("h2",{id:"network"},"Network"),(0,r.kt)("p",null,"Available options to configure networking:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"acceptDownloads")," - Whether to automatically download all the attachments. ",(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13.0/downloads"},"Learn more")," about working with downloads."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"extraHTTPHeaders")," - An object containing additional HTTP headers to be sent with every request. All header values must be strings."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"httpCredentials")," - Credentials for ",(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13.0/network#http-authentication"},"HTTP authentication"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ignoreHTTPSErrors")," - Whether to ignore HTTPS errors during navigation."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"offline")," - Whether to emulate network being offline."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"proxy")," - ",(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13.0/network#http-proxy"},"Proxy settings")," used for all pages in the test.")),(0,r.kt)("h3",{id:"network-mocking"},"Network mocking"),(0,r.kt)("p",null,"You don't have to configure anything to mock network requests. Just define a custom ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13.0/api/class-route",title:"Route"},"Route")," that mocks network for a browser context."),(0,r.kt)("p",null,"Alternatively, you can use ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13.0/api/class-page#page-route"},"Page.RouteAsync(url, handler)")," to mock network in a single test."),(0,r.kt)("h2",{id:"automatic-screenshots"},"Automatic screenshots"),(0,r.kt)("p",null,"You can make Playwright Test capture screenshots for you - control it with the ",(0,r.kt)("inlineCode",{parentName:"p"},"screenshot")," option. By default screenshots are off."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'off'")," - Do not capture screenshots."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'on'")," - Capture screenshot after each test."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'only-on-failure'")," - Capture screenshot after each test failure.")),(0,r.kt)("p",null,"Screenshots will appear in the test output directory, typically ",(0,r.kt)("inlineCode",{parentName:"p"},"test-results"),"."),(0,r.kt)("h2",{id:"record-video"},"Record video"),(0,r.kt)("p",null,"Playwright Test can record videos for your tests, controlled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"video")," option. By default videos are off."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'off'")," - Do not record video."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'on'")," - Record video for each test."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'retain-on-failure'")," - Record video for each test, but remove all videos from successful test runs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'on-first-retry'")," - Record video only when retrying a test for the first time.")),(0,r.kt)("p",null,"Video files will appear in the test output directory, typically ",(0,r.kt)("inlineCode",{parentName:"p"},"test-results"),"."),(0,r.kt)("h2",{id:"record-test-trace"},"Record test trace"),(0,r.kt)("p",null,"Playwright Test can produce test traces while running the tests. Later on, you can view the trace and get detailed information about Playwright execution by opening ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13.0/trace-viewer"},"Trace Viewer"),". By default tracing is off, controlled by the ",(0,r.kt)("inlineCode",{parentName:"p"},"trace")," option."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'off'")," - Do not record trace."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'on'")," - Record trace for each test."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'retain-on-failure'")," - Record trace for each test, but remove it from successful test runs."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"'on-first-retry'")," - Record trace only when retrying a test for the first time.")),(0,r.kt)("p",null,"Trace files will appear in the test output directory, typically ",(0,r.kt)("inlineCode",{parentName:"p"},"test-results"),"."),(0,r.kt)("h2",{id:"more-browser-and-context-options"},"More browser and context options"),(0,r.kt)("p",null,"Any options accepted by ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13.0/api/class-browsertype#browser-type-launch"},"BrowserType.LaunchAsync(options)")," or ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13.0/api/class-browser#browser-new-context"},"Browser.NewContextAsync(options)")," can be put into ",(0,r.kt)("inlineCode",{parentName:"p"},"launchOptions")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"contextOptions")," respectively in the ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," section."),(0,r.kt)("p",null,"However, most common ones like ",(0,r.kt)("inlineCode",{parentName:"p"},"headless")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"viewport")," are available directly in the ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," section - see ",(0,r.kt)("a",{parentName:"p",href:"#basic-options"},"basic options"),", ",(0,r.kt)("a",{parentName:"p",href:"#emulation"},"emulation")," or ",(0,r.kt)("a",{parentName:"p",href:"#network"},"network"),"."),(0,r.kt)("h2",{id:"testing-options"},"Testing options"),(0,r.kt)("p",null,"In addition to configuring ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13.0/api/class-browser",title:"Browser"},"Browser")," or ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13.0/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", videos or screenshots, Playwright Test has many options to configure how your tests are run. Below are the most common ones, see ",(0,r.kt)("a",{parentName:"p",href:"/dotnet/docs/1.13.0/test-advanced"},"advanced configuration")," for the full list."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"forbidOnly"),": Whether to exit with an error if any tests are marked as ",(0,r.kt)("inlineCode",{parentName:"li"},"test.only"),". Useful on CI."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"globalSetup"),": Path to the global setup file. This file will be required and run before all the tests. It must export a single function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"globalTeardown"),": Path to the global teardown file. This file will be required and run after all the tests. It must export a single function."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"retries"),": The maximum number of retry attempts per test."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"testDir"),": Directory with the test files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"testIgnore"),": Glob patterns or regular expressions that should be ignored when looking for the test files. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"'**/test-assets'"),"."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"testMatch"),": Glob patterns or regular expressions that match test files. For example, ",(0,r.kt)("inlineCode",{parentName:"li"},"'**/todo-tests/*.spec.ts'"),". By default, Playwright Test runs ",(0,r.kt)("inlineCode",{parentName:"li"},".*(test|spec)\\.(js|ts|mjs)")," files."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"timeout"),": Time in milliseconds given to each test."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"workers"),": The maximum number of concurrent worker processes to use for parallelizing tests.")),(0,r.kt)("p",null,"You can specify these options in the configuration file. Note that testing options are ",(0,r.kt)("strong",{parentName:"p"},"top-level"),", do not put them into the ",(0,r.kt)("inlineCode",{parentName:"p"},"use")," section."),(0,r.kt)("h2",{id:"different-options-for-each-browser"},"Different options for each browser"),(0,r.kt)("p",null,"To specify different options per browser, for example command line arguments for Chromium, create multiple projects in your configuration file. Below is an example that runs all tests in three browsers, with different options."),(0,r.kt)("p",null,"Playwright Test will run all projects by default."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx playwright test\n\nRunning 3 tests using 3 workers\n\n  \u2713 example.spec.ts:3:1 \u203a [Chromium] should work (2s)\n  \u2713 example.spec.ts:3:1 \u203a [Firefox] should work (2s)\n  \u2713 example.spec.ts:3:1 \u203a [WebKit] should work (2s)\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("inlineCode",{parentName:"p"},"--project")," command line option to run a single project."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx playwright test --project=webkit\n\nRunning 1 test using 1 worker\n\n  \u2713 example.spec.ts:3:1 \u203a [WebKit] should work (2s)\n")),(0,r.kt)("p",null,"There are many more things you can do with projects:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Run a subset of test by specifying different ",(0,r.kt)("inlineCode",{parentName:"li"},"testDir")," for each project."),(0,r.kt)("li",{parentName:"ul"},"Run tests in multiple configurations, for example with desktop Chromium and emulating Chrome for Android."),(0,r.kt)("li",{parentName:"ul"},'Run "core" tests without retries to ensure stability of the core functionality, and use ',(0,r.kt)("inlineCode",{parentName:"li"},"retries")," for other tests."),(0,r.kt)("li",{parentName:"ul"},"And much more! See ",(0,r.kt)("a",{parentName:"li",href:"/dotnet/docs/1.13.0/test-advanced"},"advanced configuration")," for more details.")),(0,r.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},(0,r.kt)("inlineCode",{parentName:"p"},"--browser")," command line option is not compatible with projects. Specify ",(0,r.kt)("inlineCode",{parentName:"p"},"browserName")," in each project instead."))))}u.isMDXComponent=!0}}]);