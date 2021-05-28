(window.webpackJsonp=window.webpackJsonp||[]).push([[783],{853:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return c})),a.d(t,"default",(function(){return s}));var r=a(3),n=a(7),i=(a(0),a(901)),o={id:"class-browser",title:"Browser"},l={unversionedId:"api/class-browser",id:"version-1.0.0/api/class-browser",isDocsHomePage:!1,title:"Browser",description:"* extends: EventEmitter",source:"@site/versioned_docs/version-1.0.0/api/class-browser.mdx",slug:"/api/class-browser",permalink:"/docs/1.0.0/api/class-browser",version:"1.0.0",sidebar:"version-1.0.0/api",previous:{title:"Playwright",permalink:"/docs/1.0.0/api/class-playwright"},next:{title:"BrowserContext",permalink:"/docs/1.0.0/api/class-browsercontext"}},c=[{value:"event: &#39;disconnected&#39;",id:"event-disconnected",children:[]},{value:"browser.close()",id:"browserclose",children:[]},{value:"browser.contexts()",id:"browsercontexts",children:[]},{value:"browser.isConnected()",id:"browserisconnected",children:[]},{value:"browser.newContext(options)",id:"browsernewcontextoptions",children:[]},{value:"browser.newPage(options)",id:"browsernewpageoptions",children:[]}],b={toc:c};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},b,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"extends: ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/events.html#events_class_eventemitter"}),"EventEmitter"))),Object(i.b)("p",null,"A Browser is created when Playwright connects to a browser instance, either through ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.0.0/api/class-browsertype#browsertypelaunchoptions"}),Object(i.b)("inlineCode",{parentName:"a"},"browserType.launch"))," or ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.0.0/api/class-browsertype#browsertypeconnectoptions"}),Object(i.b)("inlineCode",{parentName:"a"},"browserType.connect")),"."),Object(i.b)("p",null,"An example of using a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.0.0/api/class-browser",title:"Browser"}),"Browser")," to create a ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.0.0/api/class-page#class-page",title:"Page"}),"Page"),":"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { firefox } = require('playwright');  // Or 'chromium' or 'webkit'.\n\n(async () => {\n  const browser = await firefox.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n")),Object(i.b)("p",null,"See ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.0.0/api/class-chromiumbrowser#class-chromiumbrowser",title:"ChromiumBrowser"}),"ChromiumBrowser"),", ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.0.0/api/class-firefoxbrowser#class-firefoxbrowser",title:"FirefoxBrowser"}),"FirefoxBrowser")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.0.0/api/class-webkitbrowser#class-webkitbrowser",title:"WebKitBrowser"}),"WebKitBrowser")," for browser-specific features. Note that ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#browsertypeconnectoptions"}),"browserType.connect(options)")," and ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#browsertypelaunchoptions"}),"browserType.launch([options])")," always return a specific browser instance, based on the browser being connected to or launched."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browser#event-disconnected"}),"event: 'disconnected'")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browser#browserclose"}),"browser.close()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browser#browsercontexts"}),"browser.contexts()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browser#browserisconnected"}),"browser.isConnected()")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browser#browsernewcontextoptions"}),"browser.newContext([options])")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browser#browsernewpageoptions"}),"browser.newPage([options])"))),Object(i.b)("h2",{id:"event-disconnected"},"event: 'disconnected'"),Object(i.b)("p",null,"Emitted when Browser gets disconnected from the browser application. This might happen because of one of the following:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Browser application is closed or crashed."),Object(i.b)("li",{parentName:"ul"},"The ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#browserclose"}),Object(i.b)("inlineCode",{parentName:"a"},"browser.close"))," method was called.")),Object(i.b)("h2",{id:"browserclose"},"browser.close()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),">")),Object(i.b)("p",null,"In case this browser is obtained using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#browsertypelaunchoptions"}),"browserType.launch"),", closes the browser and all of its pages (if any were opened)."),Object(i.b)("p",null,"In case this browser is obtained using ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#browsertypeconnectoptions"}),"browserType.connect"),", clears all created contexts belonging to this browser and disconnects from the browser server."),Object(i.b)("p",null,"The ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.0.0/api/class-browser",title:"Browser"}),"Browser")," object itself is considered to be disposed and cannot be used anymore."),Object(i.b)("h2",{id:"browsercontexts"},"browser.contexts()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browsercontext#class-browsercontext",title:"BrowserContext"}),"BrowserContext"),">>")),Object(i.b)("p",null,"Returns an array of all open browser contexts. In a newly created browser, this will return zero\nbrowser contexts."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const browser = await pw.webkit.launch();\nconsole.log(browser.contexts().length); // prints `0`\n\nconst context = await browser.newContext();\nconsole.log(browser.contexts().length); // prints `1`\n")),Object(i.b)("h2",{id:"browserisconnected"},"browser.isConnected()"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),">")),Object(i.b)("p",null,"Indicates that the browser is connected."),Object(i.b)("h2",{id:"browsernewcontextoptions"},"browser.newContext(","[options]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"acceptDownloads")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to automatically download all the attachments. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false")," where all the downloads are canceled."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ignoreHTTPSErrors")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to ignore HTTPS errors during navigation. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bypassCSP")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Toggles bypassing page's Content-Security-Policy."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"viewport")," <?",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Sets a consistent viewport for each page. Defaults to an 1280x720 viewport. ",Object(i.b)("inlineCode",{parentName:"li"},"null")," disables the default viewport.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"width")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> page width in pixels."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"height")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> page height in pixels."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"userAgent")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Specific user agent to use in this context."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deviceScaleFactor")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Specify device scale factor (can be thought of as dpr). Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"isMobile")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the ",Object(i.b)("inlineCode",{parentName:"li"},"meta viewport")," tag is taken into account and touch events are enabled. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),". Not supported in Firefox."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hasTouch")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Specifies if viewport supports touch events. Defaults to false."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"javaScriptEnabled")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether or not to enable JavaScript in the context. Defaults to true."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timezoneId")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Changes the timezone of the context. See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1"}),"ICU\u2019s ",Object(i.b)("inlineCode",{parentName:"a"},"metaZones.txt"))," for a list of supported timezone IDs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"geolocation")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"latitude")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Latitude between -90 and 90."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"longitude")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Longitude between -180 and 180."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"accuracy")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Non-negative accuracy value. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"locale")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Specify user locale, for example ",Object(i.b)("inlineCode",{parentName:"li"},"en-GB"),", ",Object(i.b)("inlineCode",{parentName:"li"},"de-DE"),", etc. Locale will affect ",Object(i.b)("inlineCode",{parentName:"li"},"navigator.language")," value, ",Object(i.b)("inlineCode",{parentName:"li"},"Accept-Language")," request header value as well as number and date formatting rules."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"permissions")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">> A list of permissions to grant to all pages in this context. See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browsercontext#browsercontextgrantpermissionspermissions-options"}),"browserContext.grantPermissions")," for more details."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"extraHTTPHeaders")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),", ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">> An object containing additional HTTP headers to be sent with every request. All header values must be strings."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"offline")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to emulate network being offline. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"httpCredentials")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Credentials for ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"username")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"password")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"colorScheme"),' <"dark"|"light"|"no-preference"> Emulates ',Object(i.b)("inlineCode",{parentName:"li"},"'prefers-colors-scheme'")," media feature, supported values are ",Object(i.b)("inlineCode",{parentName:"li"},"'light'"),", ",Object(i.b)("inlineCode",{parentName:"li"},"'dark'"),", ",Object(i.b)("inlineCode",{parentName:"li"},"'no-preference'"),". See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-page#pageemulatemediaoptions"}),"page.emulateMedia(options)")," for more details. Defaults to '",Object(i.b)("inlineCode",{parentName:"li"},"light"),"'."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"logger")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-logger#class-logger",title:"Logger"}),"Logger"),"> Logger sink for Playwright logging."))),Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browsercontext#class-browsercontext",title:"BrowserContext"}),"BrowserContext"),">>")),Object(i.b)("p",null,"Creates a new browser context. It won't share cookies/cache with other browser contexts."),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"(async () => {\n  const browser = await playwright.firefox.launch();  // Or 'chromium' or 'webkit'.\n  // Create a new incognito browser context.\n  const context = await browser.newContext();\n  // Create a new page in a pristine context.\n  const page = await context.newPage();\n  await page.goto('https://example.com');\n})();\n")),Object(i.b)("h2",{id:"browsernewpageoptions"},"browser.newPage(","[options]",")"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"options")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"acceptDownloads")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to automatically download all the attachments. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false")," where all the downloads are canceled."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"ignoreHTTPSErrors")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to ignore HTTPS errors during navigation. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"bypassCSP")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Toggles bypassing page's Content-Security-Policy."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"viewport")," <?",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Sets a consistent viewport for each page. Defaults to an 1280x720 viewport. ",Object(i.b)("inlineCode",{parentName:"li"},"null")," disables the default viewport.",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"width")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> page width in pixels."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"height")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> page height in pixels."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"userAgent")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Specific user agent to use in this context."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"deviceScaleFactor")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Specify device scale factor (can be thought of as dpr). Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"1"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"isMobile")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether the ",Object(i.b)("inlineCode",{parentName:"li"},"meta viewport")," tag is taken into account and touch events are enabled. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),". Not supported in Firefox."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"hasTouch")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Specifies if viewport supports touch events. Defaults to false."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"javaScriptEnabled")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether or not to enable JavaScript in the context. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"true"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"timezoneId")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Changes the timezone of the context. See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://cs.chromium.org/chromium/src/third_party/icu/source/data/misc/metaZones.txt?rcl=faee8bc70570192d82d2978a71e2a615788597d1"}),"ICU\u2019s ",Object(i.b)("inlineCode",{parentName:"a"},"metaZones.txt"))," for a list of supported timezone IDs."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"geolocation")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"latitude")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Latitude between -90 and 90."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"longitude")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Longitude between -180 and 180."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"accuracy")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Non-negative accuracy value. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"0"),"."))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"locale")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Specify user locale, for example ",Object(i.b)("inlineCode",{parentName:"li"},"en-GB"),", ",Object(i.b)("inlineCode",{parentName:"li"},"de-DE"),", etc. Locale will affect ",Object(i.b)("inlineCode",{parentName:"li"},"navigator.language")," value, ",Object(i.b)("inlineCode",{parentName:"li"},"Accept-Language")," request header value as well as number and date formatting rules."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"permissions")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">> A list of permissions to grant to all pages in this context. See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#browsercontextgrantpermissionspermissions-options"}),"browserContext.grantPermissions")," for more details."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"extraHTTPHeaders")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),", ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">> An object containing additional HTTP headers to be sent with every request. All header values must be strings."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"offline")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to emulate network being offline. Defaults to ",Object(i.b)("inlineCode",{parentName:"li"},"false"),"."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"httpCredentials")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"> Credentials for ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Authentication"}),"HTTP authentication"),".",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"username")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"password")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"colorScheme"),' <"dark"|"light"|"no-preference"> Emulates ',Object(i.b)("inlineCode",{parentName:"li"},"'prefers-colors-scheme'")," media feature, supported values are ",Object(i.b)("inlineCode",{parentName:"li"},"'light'"),", ",Object(i.b)("inlineCode",{parentName:"li"},"'dark'"),", ",Object(i.b)("inlineCode",{parentName:"li"},"'no-preference'"),". See ",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"#pageemulatemediaoptions"}),"page.emulateMedia(options)")," for more details. Defaults to '",Object(i.b)("inlineCode",{parentName:"li"},"light"),"'."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("inlineCode",{parentName:"li"},"logger")," <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-logger#class-logger",title:"Logger"}),"Logger"),"> Logger sink for Playwright logging."))),Object(i.b)("li",{parentName:"ul"},"returns: <",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(i.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-page#class-page",title:"Page"}),"Page"),">>")),Object(i.b)("p",null,"Creates a new page in a new browser context. Closing this page will close the context as well."),Object(i.b)("p",null,"This is a convenience API that should only be used for the single-page scenarios and short snippets. Production code and testing frameworks should explicitly create ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"#browsernewcontextoptions"}),"browser.newContext")," followed by the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/1.0.0/api/class-browsercontext#browsercontextnewpage"}),"browserContext.newPage")," to control their exact life times."))}s.isMDXComponent=!0},901:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),d=r,O=p["".concat(o,".").concat(d)]||p[d]||m[d]||i;return a?n.a.createElement(O,l(l({ref:t},b),{},{components:a})):n.a.createElement(O,l({ref:t},b))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var b=2;b<i;b++)o[b]=a[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"}}]);