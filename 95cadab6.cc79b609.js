(window.webpackJsonp=window.webpackJsonp||[]).push([[464],{536:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return l})),a.d(t,"toc",(function(){return b})),a.d(t,"default",(function(){return c}));var r=a(3),o=a(7),n=(a(0),a(901)),i={id:"class-browsertype",title:"BrowserType"},l={unversionedId:"api/class-browsertype",id:"version-1.0.0/api/class-browsertype",isDocsHomePage:!1,title:"BrowserType",description:"BrowserType provides methods to launch a specific browser instance or connect to an existing one.",source:"@site/versioned_docs/version-1.0.0/api/class-browsertype.mdx",slug:"/api/class-browsertype",permalink:"/docs/1.0.0/api/class-browsertype",version:"1.0.0",sidebar:"version-1.0.0/api",previous:{title:"BrowserServer",permalink:"/docs/1.0.0/api/class-browserserver"},next:{title:"Logger",permalink:"/docs/1.0.0/api/class-logger"}},b=[{value:"browserType.connect(options)",id:"browsertypeconnectoptions",children:[]},{value:"browserType.executablePath()",id:"browsertypeexecutablepath",children:[]},{value:"browserType.launch(options)",id:"browsertypelaunchoptions",children:[]},{value:"browserType.launchPersistentContext(userDataDir, options)",id:"browsertypelaunchpersistentcontextuserdatadir-options",children:[]},{value:"browserType.launchServer(options)",id:"browsertypelaunchserveroptions",children:[]},{value:"browserType.name()",id:"browsertypename",children:[]}],s={toc:b};function c(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"BrowserType provides methods to launch a specific browser instance or connect to an existing one.\nThe following is a typical example of using Playwright to drive automation:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'firefox' or 'webkit'.\n\n(async () => {\n  const browser = await chromium.launch();\n  const page = await browser.newPage();\n  await page.goto('https://example.com');\n  // other actions...\n  await browser.close();\n})();\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browsertype#browsertypeconnectoptions"}),"browserType.connect(options)")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browsertype#browsertypeexecutablepath"}),"browserType.executablePath()")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browsertype#browsertypelaunchoptions"}),"browserType.launch([options])")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browsertype#browsertypelaunchpersistentcontextuserdatadir-options"}),"browserType.launchPersistentContext(userDataDir, [options])")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browsertype#browsertypelaunchserveroptions"}),"browserType.launchServer([options])")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browsertype#browsertypename"}),"browserType.name()"))),Object(n.b)("h2",{id:"browsertypeconnectoptions"},"browserType.connect(options)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"options")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"wsEndpoint")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> A browser websocket endpoint to connect to. ",Object(n.b)("strong",{parentName:"li"},"required")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"slowMo")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Slows down Playwright operations by the specified amount of milliseconds. Useful so that you can see what is going on. Defaults to 0."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"logger")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-logger#class-logger",title:"Logger"}),"Logger"),"> Logger sink for Playwright logging."))),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browser",title:"Browser"}),"Browser"),">>")),Object(n.b)("p",null,"This methods attaches Playwright to an existing browser instance."),Object(n.b)("h2",{id:"browsertypeexecutablepath"},"browserType.executablePath()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> A path where Playwright expects to find a bundled browser executable.")),Object(n.b)("h2",{id:"browsertypelaunchoptions"},"browserType.launch(","[options]",")"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"options")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">  Set of configurable options to set on the browser. Can have the following fields:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"headless")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to run browser in headless mode. More details for ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.google.com/web/updates/2017/04/headless-chrome"}),"Chromium")," and ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Headless_mode"}),"Firefox"),". Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true")," unless the ",Object(n.b)("inlineCode",{parentName:"li"},"devtools")," option is ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"executablePath")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Path to a browser executable to run instead of the bundled one. If ",Object(n.b)("inlineCode",{parentName:"li"},"executablePath")," is a relative path, then it is resolved relative to ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),". Note that Playwright only works with the bundled Chromium, Firefox or WebKit, use at your own risk."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"args")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">> Additional arguments to pass to the browser instance. The list of Chromium flags can be found ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"http://peter.sh/experiments/chromium-command-line-switches/"}),"here"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ignoreDefaultArgs")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">> If ",Object(n.b)("inlineCode",{parentName:"li"},"true"),", Playwright does not pass its own configurations args and only uses the ones from ",Object(n.b)("inlineCode",{parentName:"li"},"args"),". If an array is given, then filters out the given default arguments. Dangerous option; use with care. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"handleSIGINT")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on Ctrl-C. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"handleSIGTERM")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on SIGTERM. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"handleSIGHUP")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on SIGHUP. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"logger")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-logger#class-logger",title:"Logger"}),"Logger"),"> Logger sink for Playwright logging."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Maximum time in milliseconds to wait for the browser instance to start. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(n.b)("inlineCode",{parentName:"li"},"0")," to disable timeout."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"env")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),", ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),">> Specify environment variables that will be visible to the browser. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"process.env"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"devtools")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> ",Object(n.b)("strong",{parentName:"li"},"Chromium-only")," Whether to auto-open a Developer Tools panel for each tab. If this option is ",Object(n.b)("inlineCode",{parentName:"li"},"true"),", the ",Object(n.b)("inlineCode",{parentName:"li"},"headless")," option will be set ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"slowMo")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Slows down Playwright operations by the specified amount of milliseconds. Useful so that you can see what is going on."))),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browser",title:"Browser"}),"Browser"),">> Promise which resolves to browser instance.")),Object(n.b)("p",null,"You can use ",Object(n.b)("inlineCode",{parentName:"p"},"ignoreDefaultArgs")," to filter out ",Object(n.b)("inlineCode",{parentName:"p"},"--mute-audio")," from default arguments:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const browser = await chromium.launch({  // Or 'firefox' or 'webkit'.\n  ignoreDefaultArgs: ['--mute-audio']\n});\n")),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},Object(n.b)("strong",{parentName:"p"},"Chromium-only")," Playwright can also be used to control the Chrome browser, but it works best with the version of Chromium it is bundled with. There is no guarantee it will work with any other version. Use ",Object(n.b)("inlineCode",{parentName:"p"},"executablePath")," option with extreme caution."),Object(n.b)("p",{parentName:"blockquote"},"If Google Chrome (rather than Chromium) is preferred, a ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.google.com/chrome/browser/canary.html"}),"Chrome Canary")," or ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.chromium.org/getting-involved/dev-channel"}),"Dev Channel")," build is suggested."),Object(n.b)("p",{parentName:"blockquote"},"In ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"#browsertypelaunchoptions"}),"browserType.launch([options])")," above, any mention of Chromium also applies to Chrome."),Object(n.b)("p",{parentName:"blockquote"},"See ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://www.howtogeek.com/202825/what%E2%80%99s-the-difference-between-chromium-and-chrome/"}),Object(n.b)("inlineCode",{parentName:"a"},"this article"))," for a description of the differences between Chromium and Chrome. ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"https://chromium.googlesource.com/chromium/src/+/lkgr/docs/chromium_browser_vs_google_chrome.mdx"}),Object(n.b)("inlineCode",{parentName:"a"},"This article"))," describes some differences for Linux users.")),Object(n.b)("h2",{id:"browsertypelaunchpersistentcontextuserdatadir-options"},"browserType.launchPersistentContext(userDataDir, ","[options]",")"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"userDataDir")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Path to a User Data Directory, which stores browser session data like cookies and local storage. More details for ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://chromium.googlesource.com/chromium/src/+/master/docs/user_data_dir.mdx"}),"Chromium")," and ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Command_Line_Options#User_Profile"}),"Firefox"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"options")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">  Set of configurable options to set on the browser. Can have the following fields:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"headless")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to run browser in headless mode. More details for ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.google.com/web/updates/2017/04/headless-chrome"}),"Chromium")," and ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Headless_mode"}),"Firefox"),". Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true")," unless the ",Object(n.b)("inlineCode",{parentName:"li"},"devtools")," option is ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"executablePath")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Path to a browser executable to run instead of the bundled one. If ",Object(n.b)("inlineCode",{parentName:"li"},"executablePath")," is a relative path, then it is resolved relative to ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),". ",Object(n.b)("strong",{parentName:"li"},"BEWARE"),": Playwright is only guaranteed to work with the bundled Chromium, Firefox or WebKit, use at your own risk."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"args")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">> Additional arguments to pass to the browser instance. The list of Chromium flags can be found ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"http://peter.sh/experiments/chromium-command-line-switches/"}),"here"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ignoreDefaultArgs")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">> If ",Object(n.b)("inlineCode",{parentName:"li"},"true"),", then do not use any of the default arguments. If an array is given, then filter out the given default arguments. Dangerous option; use with care. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"handleSIGINT")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on Ctrl-C. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"handleSIGTERM")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on SIGTERM. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"handleSIGHUP")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on SIGHUP. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"logger")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-logger#class-logger",title:"Logger"}),"Logger"),"> Logger sink for Playwright logging."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Maximum time in milliseconds to wait for the browser instance to start. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(n.b)("inlineCode",{parentName:"li"},"0")," to disable timeout."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"env")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),", ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),">> Specify environment variables that will be visible to the browser. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"process.env"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"devtools")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> ",Object(n.b)("strong",{parentName:"li"},"Chromium-only")," Whether to auto-open a Developer Tools panel for each tab. If this option is ",Object(n.b)("inlineCode",{parentName:"li"},"true"),", the ",Object(n.b)("inlineCode",{parentName:"li"},"headless")," option will be set ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"slowMo")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Slows down Playwright operations by the specified amount of milliseconds. Useful so that you can see what is going on. Defaults to 0."))),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browsercontext#class-browsercontext",title:"BrowserContext"}),"BrowserContext"),">> Promise which resolves to the browser app instance.")),Object(n.b)("p",null,"Launches browser instance that uses persistent storage located at ",Object(n.b)("inlineCode",{parentName:"p"},"userDataDir"),"."),Object(n.b)("h2",{id:"browsertypelaunchserveroptions"},"browserType.launchServer(","[options]",")"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"options")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),">  Set of configurable options to set on the browser. Can have the following fields:",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"headless")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Whether to run browser in headless mode. More details for ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developers.google.com/web/updates/2017/04/headless-chrome"}),"Chromium")," and ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Mozilla/Firefox/Headless_mode"}),"Firefox"),". Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true")," unless the ",Object(n.b)("inlineCode",{parentName:"li"},"devtools")," option is ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"port")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Port to use for the web socket. Defaults to 0 that picks any available port."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"executablePath")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"> Path to a browser executable to run instead of the bundled one. If ",Object(n.b)("inlineCode",{parentName:"li"},"executablePath")," is a relative path, then it is resolved relative to ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://nodejs.org/api/process.html#process_process_cwd"}),"current working directory"),". ",Object(n.b)("strong",{parentName:"li"},"BEWARE"),": Playwright is only guaranteed to work with the bundled Chromium, Firefox or WebKit, use at your own risk."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"args")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">> Additional arguments to pass to the browser instance. The list of Chromium flags can be found ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"http://peter.sh/experiments/chromium-command-line-switches/"}),"here"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"ignoreDefaultArgs")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array",title:"Array"}),"Array"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">> If ",Object(n.b)("inlineCode",{parentName:"li"},"true"),", then do not use any of the default arguments. If an array is given, then filter out the given default arguments. Dangerous option; use with care. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"handleSIGINT")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on Ctrl-C. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"handleSIGTERM")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on SIGTERM. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"handleSIGHUP")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> Close the browser process on SIGHUP. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"true"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"logger")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-logger#class-logger",title:"Logger"}),"Logger"),"> Logger sink for Playwright logging."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"timeout")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"> Maximum time in milliseconds to wait for the browser instance to start. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"30000")," (30 seconds). Pass ",Object(n.b)("inlineCode",{parentName:"li"},"0")," to disable timeout."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"env")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object",title:"Object"}),"Object"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),", ",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),"|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Number_type",title:"Number"}),"number"),"|",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),">> Specify environment variables that will be visible to the browser. Defaults to ",Object(n.b)("inlineCode",{parentName:"li"},"process.env"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("inlineCode",{parentName:"li"},"devtools")," <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#Boolean_type",title:"Boolean"}),"boolean"),"> ",Object(n.b)("strong",{parentName:"li"},"Chromium-only")," Whether to auto-open a Developer Tools panel for each tab. If this option is ",Object(n.b)("inlineCode",{parentName:"li"},"true"),", the ",Object(n.b)("inlineCode",{parentName:"li"},"headless")," option will be set ",Object(n.b)("inlineCode",{parentName:"li"},"false"),"."))),Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise",title:"Promise"}),"Promise"),"<",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/1.0.0/api/class-browser#class-browserserver",title:"BrowserServer"}),"BrowserServer"),">> Promise which resolves to the browser app instance.")),Object(n.b)("p",null,"Launches browser server that client can connect to. An example of launching a browser executable and connecting to it later:"),Object(n.b)("pre",null,Object(n.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"const { chromium } = require('playwright');  // Or 'webkit' or 'firefox'.\n\n(async () => {\n  const browserServer = await chromium.launchServer();\n  const wsEndpoint = browserServer.wsEndpoint();\n  // Use web socket endpoint later to establish a connection.\n  const browser = await chromium.connect({ wsEndpoint });\n  // Close browser instance.\n  await browserServer.close();\n})();\n")),Object(n.b)("h2",{id:"browsertypename"},"browserType.name()"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"returns: <",Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structuresapi.mdx#String_type",title:"String"}),"string"),">")),Object(n.b)("p",null,"Returns browser name. For example: ",Object(n.b)("inlineCode",{parentName:"p"},"'chromium'"),", ",Object(n.b)("inlineCode",{parentName:"p"},"'webkit'")," or ",Object(n.b)("inlineCode",{parentName:"p"},"'firefox'"),"."))}c.isMDXComponent=!0},901:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return d}));var r=a(0),o=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=o.a.createContext({}),c=function(e){var t=o.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},u=o.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,i=e.parentName,s=b(e,["components","mdxType","originalType","parentName"]),p=c(a),u=r,d=p["".concat(i,".").concat(u)]||p[u]||m[u]||n;return a?o.a.createElement(d,l(l({ref:t},s),{},{components:a})):o.a.createElement(d,l({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=u;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var s=2;s<n;s++)i[s]=a[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"}}]);