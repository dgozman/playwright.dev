(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{350:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return c})),n.d(t,"default",(function(){return s}));var i=n(3),r=n(7),o=(n(0),n(901)),a=(n(905),n(906),{id:"test-configuration",title:"Configuration"}),l={unversionedId:"test-configuration",id:"test-configuration",isDocsHomePage:!1,title:"Configuration",description:"- Configuration object",source:"@site/docs/test-configuration.mdx",slug:"/test-configuration",permalink:"/docs/next/test-configuration",version:"current",sidebar:"docs",previous:{title:"Command Line",permalink:"/docs/next/test-cli"},next:{title:"Examples",permalink:"/docs/next/test-examples"}},c=[{value:"Configuration object",id:"configuration-object",children:[]},{value:"Global configuration",id:"global-configuration",children:[]},{value:"Local configuration",id:"local-configuration",children:[]},{value:"Test Options",id:"test-options",children:[]},{value:"Test run options",id:"test-run-options",children:[]}],b={toc:c};function s(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(i.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#configuration-object"}),"Configuration object")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#global-configuration"}),"Global configuration")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#local-configuration"}),"Local configuration")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#test-options"}),"Test Options")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#test-run-options"}),"Test run options"))),Object(o.b)("h2",{id:"configuration-object"},"Configuration object"),Object(o.b)("p",null,"Configuration file exports a single configuration object."),Object(o.b)("p",null,"You can modify browser launch options, context creation options and testing options either globally in the configuration file, or locally in the test file."),Object(o.b)("p",null,"See the full list of launch options in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://playwright.dev/docs/api/class-browsertype#browsertypelaunchoptions"}),Object(o.b)("inlineCode",{parentName:"a"},"browserType.launch()"))," documentation."),Object(o.b)("p",null,"See the full list of context options in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://playwright.dev/docs/api/class-browser#browsernewcontextoptions"}),Object(o.b)("inlineCode",{parentName:"a"},"browser.newContext()"))," documentation."),Object(o.b)("h2",{id:"global-configuration"},"Global configuration"),Object(o.b)("p",null,"You can specify different options for each browser using projects in the configuration file. Below is an example that changes some global testing options, and Chromium browser configuration."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"// config.ts\nimport { PlaywrightTestConfig } from \"playwright/test\";\n\nconst config: PlaywrightTestConfig = {\n  // Each test is given 90 seconds.\n  timeout: 90000,\n  // Failing tests will be retried at most two times.\n  retries: 2,\n  projects: [\n    {\n      name: 'chromium',\n      use: {\n        browserName: 'chromium',\n\n        // Launch options\n        headless: false,\n        slowMo: 50,\n\n        // Context options\n        viewport: { width: 800, height: 600 },\n        ignoreHTTPSErrors: true,\n\n        // Testing options\n        video: 'retain-on-failure',\n      },\n    },\n  ],\n};\nexport default config;\n")),Object(o.b)("h2",{id:"local-configuration"},"Local configuration"),Object(o.b)("p",null,"With ",Object(o.b)("inlineCode",{parentName:"p"},"test.use()")," you can override some options for a file, or a ",Object(o.b)("inlineCode",{parentName:"p"},"describe")," block."),Object(o.b)("pre",null,Object(o.b)("code",Object(i.a)({parentName:"pre"},{className:"language-js"}),"// my.spec.ts\nimport { test, expect } from \"playwright/test\";\n\n// Run tests in this file with portrait-like viewport.\ntest.use({ viewport: { width: 600, height: 900 } });\n\ntest('my test', async ({ page }) => {\n  // Test code goes here.\n});\n")),Object(o.b)("h2",{id:"test-options"},"Test Options"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"metadata: any")," - Any JSON-serializable metadata that will be put directly to the test report."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"name: string")," - Project name, useful when defining multiple ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#projects"}),"test projects"),"."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"outputDir: string")," - Output directory for files created during the test run."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"repeatEach: number")," - The number of times to repeat each test, useful for debugging flaky tests. Overridden by ",Object(o.b)("inlineCode",{parentName:"li"},"--repeat-each")," command line option."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"retries: number")," - The maximum number of retry attempts given to failed tests. Overridden by ",Object(o.b)("inlineCode",{parentName:"li"},"--retries")," command line option."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"screenshot: 'off' | 'on' | 'only-on-failure'")," - Whether to capture a screenshot after each test, off by default.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"off")," - Do not capture screenshots."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"on")," - Capture screenshot after each test."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"only-on-failure")," - Capture screenshot after each test failure."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"snapshotDir: string")," - ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#snapshots"}),"Snapshots")," directory. Overridden by ",Object(o.b)("inlineCode",{parentName:"li"},"--snapshot-dir")," command line option."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"testDir: string")," - Directory that will be recursively scanned for test files."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"testIgnore: string | RegExp | (string | RegExp)[]")," - Files matching one of these patterns are not considered test files."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"testMatch: string | RegExp | (string | RegExp)[]")," - Only the files matching one of these patterns are considered test files."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"timeout: number")," - Timeout for each test in milliseconds. Overridden by ",Object(o.b)("inlineCode",{parentName:"li"},"--timeout")," command line option."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"video: 'off' | 'on' | 'retain-on-failure' | 'retry-with-video'")," - Whether to record video for each test, off by default.",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"off")," - Do not record video."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"on")," - Record video for each test."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"retain-on-failure"),"  - Record video for each test, but remove all videos from successful test runs."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"retry-with-video")," - Record video only when retrying a test.")))),Object(o.b)("h2",{id:"test-run-options"},"Test run options"),Object(o.b)("p",null,"These options would be typically different between local development and CI operation:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"forbidOnly: boolean")," - Whether to exit with an error if any tests are marked as ",Object(o.b)("inlineCode",{parentName:"li"},"test.only"),". Useful on CI. Overridden by ",Object(o.b)("inlineCode",{parentName:"li"},"--forbid-only")," command line option."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"globalSetup: string")," - Path to the global setup file. This file will be required and run before all the tests. It must export a single function."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"globalTeardown: string")," - Path to the global teardown file. This file will be required and run after all the tests. It must export a single function."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"globalTimeout: number")," - Total timeout in milliseconds for the whole test run. Overridden by ",Object(o.b)("inlineCode",{parentName:"li"},"--global-timeout")," command line option."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"grep: RegExp | RegExp[]")," - Patterns to filter tests based on their title. Overridden by ",Object(o.b)("inlineCode",{parentName:"li"},"--grep")," command line option."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"maxFailures: number")," - The maximum number of test failures for this test run. After reaching this number, testing will stop and exit with an error. Setting to zero (default) disables this behavior. Overridden by ",Object(o.b)("inlineCode",{parentName:"li"},"--max-failures")," and ",Object(o.b)("inlineCode",{parentName:"li"},"-x")," command line options."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"preserveOutput: 'always' | 'never' | 'failures-only'")," - Whether to preserve test output in the ",Object(o.b)("inlineCode",{parentName:"li"},"outputDir"),":",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'always'")," - preserve output for all tests;"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'never'")," - do not preserve output for any tests;"),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"'failures-only'")," - only preserve output for failed tests."))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"projects: Project[]")," - Multiple ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#projects"}),"projects")," configuration."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"reporter: 'list' | 'line' | 'dot' | 'json' | 'junit'")," - The reporter to use. See ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#reporters"}),"reporters")," for details."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"quiet: boolean")," - Whether to suppress stdout and stderr from the tests. Overridden by ",Object(o.b)("inlineCode",{parentName:"li"},"--quiet")," command line option."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"shard: { total: number, current: number } | null")," - ",Object(o.b)("a",Object(i.a)({parentName:"li"},{href:"#shards"}),"Shard")," information. Overridden by ",Object(o.b)("inlineCode",{parentName:"li"},"--shard")," command line option."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"updateSnapshots: boolean")," - Whether to update expected snapshots with the actual results produced by the test run. Overridden by ",Object(o.b)("inlineCode",{parentName:"li"},"--update-snapshots")," command line option."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("inlineCode",{parentName:"li"},"workers: number")," - The maximum number of concurrent worker processes to use for parallelizing tests. Overridden by ",Object(o.b)("inlineCode",{parentName:"li"},"--workers")," command line option.")))}s.isMDXComponent=!0},901:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var i=n(0),r=n.n(i);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,r=function(e,t){if(null==e)return{};var n,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)n=o[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,a=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,d=p["".concat(a,".").concat(m)]||p[m]||u[m]||o;return n?r.a.createElement(d,l(l({ref:t},b),{},{components:n})):r.a.createElement(d,l({ref:t},b))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var b=2;b<o;b++)a[b]=n[b];return r.a.createElement.apply(null,a)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},902:function(e,t,n){"use strict";function i(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=i(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=i(e))&&(r&&(r+=" "),r+=t);return r}},903:function(e,t,n){"use strict";var i=n(0),r=n(904);t.a=function(){var e=Object(i.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},904:function(e,t,n){"use strict";var i=n(0),r=Object(i.createContext)(void 0);t.a=r},905:function(e,t,n){"use strict";n(0),n(903),n(902),n(55)},906:function(e,t,n){"use strict";n(3),n(0)}}]);