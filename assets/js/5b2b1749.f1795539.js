"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[7339],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=n(86010),s="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,c=e.values,m=e.groupId,d=e.className,f=o(),h=f.tabGroupChoices,g=f.setTabGroupChoices,k=(0,r.useState)(a),w=k[0],y=k[1],b=r.Children.toArray(e.children),v=[];if(null!=m){var N=h[m];null!=N&&N!==w&&c.some((function(e){return e.value===N}))&&y(N)}var x=function(e){var t=e.currentTarget,n=v.indexOf(t),r=c[n].value;y(r),null!=m&&(g(m,r),setTimeout((function(){var e,n,r,a,o,i,s,p;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,i=window,s=i.innerHeight,p=i.innerWidth,n>=0&&o<=p&&a<=s&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},C=function(e){var t,n;switch(e.keyCode){case u:var r=v.indexOf(e.target)+1;n=v[r]||v[0];break;case p:var a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},d)},c.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":w===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:C,onFocus:x,onClick:x},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},67817:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),i=n(55064),s=n(58215),l={id:"test-configuration",title:"Configuration"},p=void 0,u={unversionedId:"test-configuration",id:"version-1.12.0/test-configuration",isDocsHomePage:!1,title:"Configuration",description:"- Configure browser, context, videos and screenshots",source:"@site/versioned_docs/version-1.12.0/test-configuration.mdx",sourceDirName:".",slug:"/test-configuration",permalink:"/docs/1.12.0/test-configuration",version:"1.12.0",frontMatter:{id:"test-configuration",title:"Configuration"},sidebar:"version-1.12.0/docs",previous:{title:"Annotations",permalink:"/docs/1.12.0/test-annotations"},next:{title:"Parallelism and sharding",permalink:"/docs/1.12.0/test-parallel"}},c=[{value:"Configure browser, context, videos and screenshots",id:"configure-browser-context-videos-and-screenshots",children:[{value:"Global configuration",id:"global-configuration",children:[]},{value:"Local configuration",id:"local-configuration",children:[]}]},{value:"Testing options",id:"testing-options",children:[]},{value:"Different options for each browser",id:"different-options-for-each-browser",children:[]},{value:"Mobile emulation",id:"mobile-emulation",children:[]},{value:"Network mocking",id:"network-mocking",children:[]}],m={toc:c};function d(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#configure-browser-context-videos-and-screenshots"},"Configure browser, context, videos and screenshots")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#testing-options"},"Testing options")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#different-options-for-each-browser"},"Different options for each browser")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#mobile-emulation"},"Mobile emulation")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#network-mocking"},"Network mocking"))),(0,o.kt)("h2",{id:"configure-browser-context-videos-and-screenshots"},"Configure browser, context, videos and screenshots"),(0,o.kt)("p",null,"Playwright Tests supports browser and context options that you typically pass to ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-browsertype#browser-type-launch"},"browserType.launch([options])")," and ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-browser#browser-new-context"},"browser.newContext([options])")," methods, for example ",(0,o.kt)("inlineCode",{parentName:"p"},"headless"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"viewport")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ignoreHTTPSErrors"),". It also provides options to record video for the test or capture screenshot at the end."),(0,o.kt)("p",null,"You can specify any options either locally in a test file, or globally in the configuration file."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Browser options match ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-browsertype#browser-type-launch"},"browserType.launch([options])")," method."),(0,o.kt)("li",{parentName:"ul"},"Context options match ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/api/class-browser#browser-new-context"},"browser.newContext([options])")," method."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"screenshot")," option - whether to capture a screenshot after each test, off by default. Screenshot will appear in the test output directory, typically ",(0,o.kt)("inlineCode",{parentName:"li"},"test-results"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'off'")," - Do not capture screenshots."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'on'")," - Capture screenshot after each test."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'only-on-failure'")," - Capture screenshot after each test failure."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"trace")," option - whether to record trace for each test, off by default. Trace will appear in the test output directory, typically ",(0,o.kt)("inlineCode",{parentName:"li"},"test-results"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'off'")," - Do not record trace."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'on'")," - Record trace for each test."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'retain-on-failure'")," - Record trace for each test, but remove it from successful test runs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'retry-with-trace'")," - Record trace only when retrying a test."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"video")," option - whether to record video for each test, off by default. Video will appear in the test output directory, typically ",(0,o.kt)("inlineCode",{parentName:"li"},"test-results"),".",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'off'")," - Do not record video."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'on'")," - Record video for each test."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'retain-on-failure'")," - Record video for each test, but remove all videos from successful test runs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"'retry-with-video'")," - Record video only when retrying a test.")))),(0,o.kt)("h3",{id:"global-configuration"},"Global configuration"),(0,o.kt)("p",null,"Create ",(0,o.kt)("inlineCode",{parentName:"p"},"playwright.config.js")," (or ",(0,o.kt)("inlineCode",{parentName:"p"},"playwright.config.ts"),") and specify options in the ",(0,o.kt)("inlineCode",{parentName:"p"},"use")," section."),(0,o.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { PlaywrightTestConfig } from '@playwright/test';\nconst config: PlaywrightTestConfig = {\n  use: {\n    // Browser options\n    headless: false,\n    slowMo: 50,\n\n    // Context options\n    viewport: { width: 1280, height: 720 },\n    ignoreHTTPSErrors: true,\n\n    // Artifacts\n    screenshot: 'only-on-failure',\n    video: 'retry-with-video',\n  },\n};\nexport default config;\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"module.exports = {\n  use: {\n    // Browser options\n    headless: false,\n    slowMo: 50,\n\n    // Context options\n    viewport: { width: 1280, height: 720 },\n    ignoreHTTPSErrors: true,\n\n    // Artifacts\n    screenshot: 'only-on-failure',\n    video: 'retry-with-video',\n  },\n};\n")))),(0,o.kt)("p",null,"Now run tests as usual, Playwright Test will pick up the configuration file automatically."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --browser=firefox\n")),(0,o.kt)("p",null,"If you put your configuration file in a different place, pass it with ",(0,o.kt)("inlineCode",{parentName:"p"},"--config")," option."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npx playwright test --config=tests/my.config.js\n")),(0,o.kt)("h3",{id:"local-configuration"},"Local configuration"),(0,o.kt)("p",null,"With ",(0,o.kt)("inlineCode",{parentName:"p"},"test.use()")," you can override some options for a file or a ",(0,o.kt)("inlineCode",{parentName:"p"},"test.describe")," block."),(0,o.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\n// Run tests in this file with portrait-like viewport.\ntest.use({ viewport: { width: 600, height: 900 } });\n\ntest('my portrait test', async ({ page }) => {\n  // ...\n});\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\n// Run tests in this file with portrait-like viewport.\ntest.use({ viewport: { width: 600, height: 900 } });\n\ntest('my portrait test', async ({ page }) => {\n  // ...\n});\n")))),(0,o.kt)("p",null,"The same works inside describe."),(0,o.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest.describe('headed block', () => {\n  // Run tests in this describe block in headed mode.\n  test.use({ headless: false });\n\n  test('my headed test', async ({ page }) => {\n    // ...\n  });\n});\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest.describe('headed block', () => {\n  // Run tests in this describe block in headed mode.\n  test.use({ headless: false });\n\n  test('my headed test', async ({ page }) => {\n    // ...\n  });\n});\n")))),(0,o.kt)("h2",{id:"testing-options"},"Testing options"),(0,o.kt)("p",null,"In addition to configuring ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-browser",title:"Browser"},"Browser")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-browsercontext",title:"BrowserContext"},"BrowserContext"),", videos or screenshots, Playwright Test has many options to configure how your tests are run. Below are the most common ones, see ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/test-advanced"},"advanced configuration")," for the full list."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"forbidOnly"),": Whether to exit with an error if any tests are marked as ",(0,o.kt)("inlineCode",{parentName:"li"},"test.only"),". Useful on CI."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"globalSetup"),": Path to the global setup file. This file will be required and run before all the tests. It must export a single function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"globalTeardown"),": Path to the global teardown file. This file will be required and run after all the tests. It must export a single function."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"retries"),": The maximum number of retry attempts per test."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testDir"),": Directory with the test files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testIgnore"),": Glob patterns or regular expressions that should be ignored when looking for the test files. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"'**/test-assets'"),"."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"testMatch"),": Glob patterns or regular expressions that match test files. For example, ",(0,o.kt)("inlineCode",{parentName:"li"},"'**/todo-tests/*.spec.ts'"),". By default, Playwright Test runs ",(0,o.kt)("inlineCode",{parentName:"li"},".*(test|spec)\\.(js|ts|mjs)")," files."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"timeout"),": Time in milliseconds given to each test."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"workers"),": The maximum number of concurrent worker processes to use for parallelizing tests.")),(0,o.kt)("p",null,"You can specify these options in the configuration file."),(0,o.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Look for test files in the \"tests\" directory, relative to this configuration file\n  testDir: 'tests',\n\n  // Each test is given 30 seconds\n  timeout: 30000,\n\n  // Forbid test.only on CI\n  forbidOnly: !!process.env.CI,\n\n  // Two retries for each test\n  retries: 2,\n\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n\n  use: {\n    // Configure browser and context here\n  },\n};\nexport default config;\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nmodule.exports = {\n  // Look for test files in the \"tests\" directory, relative to this configuration file\n  testDir: 'tests',\n\n  // Each test is given 30 seconds\n  timeout: 30000,\n\n  // Forbid test.only on CI\n  forbidOnly: !!process.env.CI,\n\n  // Two retries for each test\n  retries: 2,\n\n  // Limit the number of workers on CI, use default locally\n  workers: process.env.CI ? 2 : undefined,\n\n  use: {\n    // Configure browser and context here\n  },\n};\n")))),(0,o.kt)("h2",{id:"different-options-for-each-browser"},"Different options for each browser"),(0,o.kt)("p",null,"To specify different options per browser, for example command line arguments for Chromium, create multiple projects in your configuration file. Below is an example that runs all tests in three browsers, with different options."),(0,o.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\n\nconst config: PlaywrightTestConfig = {\n  // Put any shared options on the top level.\n  use: {\n    headless: true,\n  },\n\n  projects: [\n    {\n      name: 'Chromium',\n      use: {\n        // Configure the browser to use.\n        browserName: 'chromium',\n\n        // Any Chromium-specific options.\n        viewport: { width: 600, height: 800 },\n      },\n    },\n\n    {\n      name: 'Firefox',\n      use: { browserName: 'firefox' },\n    },\n\n    {\n      name: 'WebKit',\n      use: { browserName: 'webkit' },\n    },\n  ],\n};\nexport default config;\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nmodule.exports = {\n  // Put any shared options on the top level.\n  use: {\n    headless: true,\n  },\n\n  projects: [\n    {\n      name: 'Chromium',\n      use: {\n        // Configure the browser to use.\n        browserName: 'chromium',\n\n        // Any Chromium-specific options.\n        viewport: { width: 600, height: 800 },\n      },\n    },\n\n    {\n      name: 'Firefox',\n      use: { browserName: 'firefox' },\n    },\n\n    {\n      name: 'WebKit',\n      use: { browserName: 'webkit' },\n    },\n  ],\n};\n")))),(0,o.kt)("p",null,"Playwright Test will run all projects by default."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx playwright test\n\nRunning 3 tests using 3 workers\n\n  \u2713 example.spec.ts:3:1 \u203a [Chromium] should work (2s)\n  \u2713 example.spec.ts:3:1 \u203a [Firefox] should work (2s)\n  \u2713 example.spec.ts:3:1 \u203a [WebKit] should work (2s)\n")),(0,o.kt)("p",null,"Use ",(0,o.kt)("inlineCode",{parentName:"p"},"--project")," command line option to run a single project."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npx playwright test --project=webkit\n\nRunning 1 test using 1 worker\n\n  \u2713 example.spec.ts:3:1 \u203a [WebKit] should work (2s)\n")),(0,o.kt)("p",null,"There are many more things you can do with projects:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Run a subset of test by specifying different ",(0,o.kt)("inlineCode",{parentName:"li"},"testDir")," for each project."),(0,o.kt)("li",{parentName:"ul"},"Run tests in multiple configurations, for example with desktop Chromium and emulating Chrome for Android."),(0,o.kt)("li",{parentName:"ul"},'Run "core" tests without retries to ensure stability of the core functionality, and use ',(0,o.kt)("inlineCode",{parentName:"li"},"retries")," for other tests."),(0,o.kt)("li",{parentName:"ul"},"And much more! See ",(0,o.kt)("a",{parentName:"li",href:"/docs/1.12.0/test-advanced"},"advanced configuration")," for more details.")),(0,o.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},(0,o.kt)("inlineCode",{parentName:"p"},"--browser")," command line option is not compatible with projects. Specify ",(0,o.kt)("inlineCode",{parentName:"p"},"browserName")," in each project instead."))),(0,o.kt)("h2",{id:"mobile-emulation"},"Mobile emulation"),(0,o.kt)("p",null,"You can use configuration file to make default ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," emulate a mobile device."),(0,o.kt)("p",null,'Here is an example configuration that runs tests in "Pixel 4" and "iPhone 11" emulation modes. Note that it uses the ',(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/test-advanced#projects"},"projects")," feature to run the same set of tests in multiple configurations."),(0,o.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.ts\nimport { PlaywrightTestConfig } from '@playwright/test';\nimport { devices } from 'playwright';\n\nconst config: PlaywrightTestConfig = {\n  projects: [\n    // \"Pixel 4\" tests use Chromium browser.\n    {\n      name: 'Pixel 4',\n      use: {\n        browserName: 'chromium',\n        ...devices['Pixel 4'],\n      },\n    },\n\n    // \"iPhone 11\" tests use WebKit browser.\n    {\n      name: 'iPhone 11',\n      use: {\n        browserName: 'webkit',\n        ...devices['iPhone 11'],\n      },\n    },\n  ],\n};\nexport default config;\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// playwright.config.js\nconst { devices } = require('playwright');\n\nmodule.exports = {\n  projects: [\n    // \"Pixel 4\" tests use Chromium browser.\n    {\n      name: 'Pixel 4',\n      use: {\n        browserName: 'chromium',\n        ...devices['Pixel 4'],\n      },\n    },\n\n    // \"iPhone 11\" tests use WebKit browser.\n    {\n      name: 'iPhone 11',\n      use: {\n        browserName: 'webkit',\n        ...devices['iPhone 11'],\n      },\n    },\n  ],\n};\n")))),(0,o.kt)("h2",{id:"network-mocking"},"Network mocking"),(0,o.kt)("p",null,"You don't have to configure anything to mock network requests. Just define a custom ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-route",title:"Route"},"Route")," that mocks network for a browser context."),(0,o.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest.beforeEach(async ({ context }) => {\n  // Block any css requests for each test in this file.\n  await context.route(/.css/, route => route.abort());\n});\n\ntest('loads page without css', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  // ... test goes here\n});\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest.beforeEach(async ({ context }) => {\n  // Block any css requests for each test in this file.\n  await context.route(/.css/, route => route.abort());\n});\n\ntest('loads page without css', async ({ page }) => {\n  await page.goto('https://playwright.dev');\n  // ... test goes here\n});\n")))),(0,o.kt)("p",null,"Alternatively, you can use ",(0,o.kt)("a",{parentName:"p",href:"/docs/1.12.0/api/class-page#page-route"},"page.route(url, handler)")," to mock network in a single test."),(0,o.kt)(i.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"ts",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.ts\nimport { test, expect } from '@playwright/test';\n\ntest('loads page without images', async ({ page }) => {\n  // Block png and jpeg images.\n  await page.route(/(png|jpeg)$/, route => route.abort());\n\n  await page.goto('https://playwright.dev');\n  // ... test goes here\n});\n"))),(0,o.kt)(s.Z,{value:"js",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// example.spec.js\nconst { test, expect } = require('@playwright/test');\n\ntest('loads page without images', async ({ page }) => {\n  // Block png and jpeg images.\n  await page.route(/(png|jpeg)$/, route => route.abort());\n\n  await page.goto('https://playwright.dev');\n  // ... test goes here\n});\n")))))}d.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);