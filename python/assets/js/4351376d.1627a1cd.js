"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4591],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=p(n),d=a,g=m["".concat(l,".").concat(d)]||m[d]||c[d]||o;return n?r.createElement(g,s(s({ref:t},u),{},{components:n})):r.createElement(g,s({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var p=2;p<o;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(67294),a=n(79443);var o=function(){var e=(0,r.useContext)(a.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(86010),i="tabItem_1uMI",l="tabItemActive_2DSg";var p=37,u=39;var c=function(e){var t=e.lazy,n=e.block,a=e.defaultValue,c=e.values,m=e.groupId,d=e.className,g=o(),h=g.tabGroupChoices,f=g.setTabGroupChoices,y=(0,r.useState)(a),k=y[0],w=y[1],b=r.Children.toArray(e.children),v=[];if(null!=m){var N=h[m];null!=N&&N!==k&&c.some((function(e){return e.value===N}))&&w(N)}var _=function(e){var t=e.currentTarget,n=v.indexOf(t),r=c[n].value;w(r),null!=m&&(f(m,r),setTimeout((function(){var e,n,r,a,o,s,i,p;(e=t.getBoundingClientRect(),n=e.top,r=e.left,a=e.bottom,o=e.right,s=window,i=s.innerHeight,p=s.innerWidth,n>=0&&o<=p&&a<=i&&r>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(l),setTimeout((function(){return t.classList.remove(l)}),2e3))}),150))},x=function(e){var t,n;switch(e.keyCode){case u:var r=v.indexOf(e.target)+1;n=v[r]||v[0];break;case p:var a=v.indexOf(e.target)-1;n=v[a]||v[v.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":n},d)},c.map((function(e){var t=e.value,n=e.label;return r.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,s.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return v.push(e)},onKeyDown:x,onFocus:_,onClick:_},n)}))),t?(0,r.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},91879:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return p},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),s=(n(55064),n(58215),{id:"test-runners",title:"Pytest plugin"}),i=void 0,l={unversionedId:"test-runners",id:"version-1.13.0/test-runners",isDocsHomePage:!1,title:"Pytest plugin",description:"Write end-to-end tests for your web apps with Pytest.",source:"@site/versioned_docs/version-1.13.0/test-runners.mdx",sourceDirName:".",slug:"/test-runners",permalink:"/python/docs/1.13.0/test-runners",version:"1.13.0",frontMatter:{id:"test-runners",title:"Pytest plugin"},sidebar:"version-1.13.0/docs",previous:{title:"Release notes",permalink:"/python/docs/1.13.0/release-notes"},next:{title:"Auto-waiting",permalink:"/python/docs/1.13.0/actionability"}},p=[{value:"Usage",id:"usage",children:[]},{value:"Fixtures",id:"fixtures",children:[]},{value:"Examples",id:"examples",children:[{value:"Configure Mypy typings for auto-completion",id:"configure-mypy-typings-for-auto-completion",children:[]},{value:"Configure slow mo",id:"configure-slow-mo",children:[]},{value:"Skip test by browser",id:"skip-test-by-browser",children:[]},{value:"Run on a specific browser",id:"run-on-a-specific-browser",children:[]},{value:"Run with a custom browser channel like Google Chrome or Microsoft Edge",id:"run-with-a-custom-browser-channel-like-google-chrome-or-microsoft-edge",children:[]},{value:"Configure base-url",id:"configure-base-url",children:[]},{value:"Ignore HTTPS errors",id:"ignore-https-errors",children:[]},{value:"Use custom viewport size",id:"use-custom-viewport-size",children:[]},{value:"Device emulation",id:"device-emulation",children:[]},{value:"Persistent context",id:"persistent-context",children:[]},{value:"Using with <code>unittest.TestCase</code>",id:"using-with-unittesttestcase",children:[]}]},{value:"Debugging",id:"debugging",children:[{value:"Use with pdb",id:"use-with-pdb",children:[]},{value:"Screenshot on test failure",id:"screenshot-on-test-failure",children:[]}]},{value:"Deploy to CI",id:"deploy-to-ci",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Write end-to-end tests for your web apps with ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/stable/"},"Pytest"),"."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#usage"},"Usage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#fixtures"},"Fixtures")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#examples"},"Examples")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#debugging"},"Debugging")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#deploy-to-ci"},"Deploy to CI"))),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pip install pytest-playwright\n")),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"page")," fixture to write a basic test. See ",(0,o.kt)("a",{parentName:"p",href:"#examples"},"more examples"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# test_my_application.py\ndef test_example_is_working(page):\n    page.goto(\"https://example.com\")\n    assert page.inner_text('h1') == 'Example Domain'\n    page.click(\"text=More information\")\n")),(0,o.kt)("p",null,"To run your tests, use pytest CLI."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# Run tests (Chromium and headless by default)\npytest\n\n# Run tests in headed mode\npytest --headed\n\n# Run tests in a different browser (chromium, firefox, webkit)\npytest --browser firefox\n\n# Run tests in multiple browsers\npytest --browser chromium --browser webkit\n")),(0,o.kt)("p",null,"If you want to add the CLI arguments automatically without specifying them, you can use the ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/stable/reference.html#ini-options-ref"},"pytest.ini")," file:"),(0,o.kt)("h2",{id:"fixtures"},"Fixtures"),(0,o.kt)("p",null,"This plugin configures Playwright-specific ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/latest/fixture.html"},"fixtures for pytest"),". To use these fixtures, use the fixture name as an argument to the test function."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"def test_my_app_is_working(fixture_name):\n    # Test using fixture_name\n    # ...\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Function scope"),": These fixtures are created when requested in a test function and destroyed when the test ends."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"context"),": New ",(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/core-concepts#browser-contexts"},"browser context")," for a test."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"page"),": New ",(0,o.kt)("a",{parentName:"li",href:"https://playwright.dev/python/docs/core-concepts#pages-and-frames"},"browser page")," for a test.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Session scope"),": These fixtures are created when requested in a test function and destroyed when all tests end."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"browser"),": Browser instance launched by Playwright."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"browser_name"),": Browser name as string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"browser_channel"),": Browser Channel as string."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"is_chromium"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"is_webkit"),", ",(0,o.kt)("inlineCode",{parentName:"li"},"is_firefox"),": Booleans for the respective browser types.")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Customizing fixture options"),": For ",(0,o.kt)("inlineCode",{parentName:"p"},"browser")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"context")," fixtures, use the the following fixtures to define custom launch options."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"browser_type_launch_args"),": Override launch arguments for ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.13.0/api/class-browsertype#browser-type-launch"},"browser_type.launch(**kwargs)"),". It should return a Dict."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"browser_context_args"),": Override the options for ",(0,o.kt)("a",{parentName:"li",href:"/python/docs/1.13.0/api/class-browser#browser-new-context"},"browser.new_context(**kwargs)"),". It should return a Dict.")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)("h3",{id:"configure-mypy-typings-for-auto-completion"},"Configure Mypy typings for auto-completion"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# test_my_application.py\nfrom playwright.sync_api import Page\n\ndef test_visit_admin_dashboard(page: Page):\n    page.goto("/admin")\n    # ...\n')),(0,o.kt)("h3",{id:"configure-slow-mo"},"Configure slow mo"),(0,o.kt)("p",null,"Run tests with slow mo with the ",(0,o.kt)("inlineCode",{parentName:"p"},"--slowmo")," argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pytest --slowmo 100\n")),(0,o.kt)("h3",{id:"skip-test-by-browser"},"Skip test by browser"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# test_my_application.py\nimport pytest\n\n@pytest.mark.skip_browser("firefox")\ndef test_visit_example(page):\n    page.goto("https://example.com")\n    # ...\n')),(0,o.kt)("h3",{id:"run-on-a-specific-browser"},"Run on a specific browser"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# conftest.py\nimport pytest\n\n@pytest.mark.only_browser("chromium")\ndef test_visit_example(page):\n    page.goto("https://example.com")\n    # ...\n')),(0,o.kt)("h3",{id:"run-with-a-custom-browser-channel-like-google-chrome-or-microsoft-edge"},"Run with a custom browser channel like Google Chrome or Microsoft Edge"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pytest --browser-channel chrome\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# test_my_application.py\ndef test_example(page):\n    page.goto("https://example.com")\n')),(0,o.kt)("h3",{id:"configure-base-url"},"Configure base-url"),(0,o.kt)("p",null,"Start Pytest with the ",(0,o.kt)("inlineCode",{parentName:"p"},"base-url")," argument."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"pytest --base-url http://localhost:8080\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# test_my_application.py\ndef test_visit_example(page):\n    page.goto("/admin")\n    # -> Will result in http://localhost:8080/admin\n')),(0,o.kt)("h3",{id:"ignore-https-errors"},"Ignore HTTPS errors"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# conftest.py\nimport pytest\n\n@pytest.fixture(scope="session")\ndef browser_context_args(browser_context_args):\n    return {\n        **browser_context_args,\n        "ignore_https_errors": True\n    }\n')),(0,o.kt)("h3",{id:"use-custom-viewport-size"},"Use custom viewport size"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# conftest.py\nimport pytest\n\n@pytest.fixture(scope="session")\ndef browser_context_args(browser_context_args):\n    return {\n        **browser_context_args,\n        "viewport": {\n            "width": 1920,\n            "height": 1080,\n        }\n    }\n')),(0,o.kt)("h3",{id:"device-emulation"},"Device emulation"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},"# conftest.py\nimport pytest\n\n@pytest.fixture(scope=\"session\")\ndef browser_context_args(browser_context_args, playwright):\n    iphone_11 = playwright.devices['iPhone 11 Pro']\n    return {\n        **browser_context_args,\n        **iphone_11,\n    }\n")),(0,o.kt)("h3",{id:"persistent-context"},"Persistent context"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# conftest.py\nimport pytest\nfrom playwright.sync_api import BrowserType\nfrom typing import Dict\n\n@pytest.fixture(scope="session")\ndef context(\n    browser_type: BrowserType,\n    browser_type_launch_args: Dict,\n    browser_context_args: Dict\n):\n    context = browser_type.launch_persistent_context("./foobar", **{\n        **browser_type_launch_args,\n        **browser_context_args,\n        "locale": "de-DE",\n    })\n    yield context\n    context.close()\n')),(0,o.kt)("p",null,"When using that all pages inside your test are created from the persistent context."),(0,o.kt)("h3",{id:"using-with-unittesttestcase"},"Using with ",(0,o.kt)("inlineCode",{parentName:"h3"},"unittest.TestCase")),(0,o.kt)("p",null,"See the following example for using it with ",(0,o.kt)("inlineCode",{parentName:"p"},"unittest.TestCase"),". This has a limitation, that only a single browser can be specified and no matrix of multiple browsers gets generated when specifying multiple."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'import pytest\nimport unittest\n\nfrom playwright.sync_api import Page\n\n\nclass MyTest(unittest.TestCase):\n    @pytest.fixture(autouse=True)\n    def setup(self, page: Page):\n        self.page = page\n\n    def test_foobar(self):\n        self.page.goto("https://microsoft.com")\n        self.page.click("#foobar")\n        assert self.page.evaluate("1 + 1") == 2\n')),(0,o.kt)("h2",{id:"debugging"},"Debugging"),(0,o.kt)("h3",{id:"use-with-pdb"},"Use with pdb"),(0,o.kt)("p",null,"Use the ",(0,o.kt)("inlineCode",{parentName:"p"},"breakpoint()")," statement in your test code to pause execution and get a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/3/library/pdb.html"},"pdb")," REPL."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'def test_bing_is_working(page):\n    page.goto("https://bing.com")\n    breakpoint()\n    # ...\n')),(0,o.kt)("h3",{id:"screenshot-on-test-failure"},"Screenshot on test failure"),(0,o.kt)("p",null,"You can capture screenshots for failed tests with a ",(0,o.kt)("a",{parentName:"p",href:"https://docs.pytest.org/en/6.1.0/reference.html?highlight=pytest_runtest_makereport#test-running-runtest-hooks"},"pytest runtest hook"),". Add this to your ",(0,o.kt)("inlineCode",{parentName:"p"},"conftest.py")," file."),(0,o.kt)("p",null,"Note that this snippet uses ",(0,o.kt)("inlineCode",{parentName:"p"},"slugify")," to convert test names to file paths, which can be installed with ",(0,o.kt)("inlineCode",{parentName:"p"},"pip install python-slugify"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-py"},'# conftest.py\nfrom slugify import slugify\nfrom pathlib import Path\n\ndef pytest_runtest_makereport(item, call) -> None:\n    if call.when == "call":\n        if call.excinfo is not None and "page" in item.funcargs:\n            page = item.funcargs["page"]\n            screenshot_dir = Path(".playwright-screenshots")\n            screenshot_dir.mkdir(exist_ok=True)\n            page.screenshot(path=str(screenshot_dir / f"{slugify(item.nodeid)}.png"))\n')),(0,o.kt)("h2",{id:"deploy-to-ci"},"Deploy to CI"),(0,o.kt)("p",null,"See the ",(0,o.kt)("a",{parentName:"p",href:"/python/docs/1.13.0/ci"},"guides for CI providers")," to deploy your tests to CI/CD."))}c.isMDXComponent=!0},86010:function(e,t,n){function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}function a(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}n.d(t,{Z:function(){return a}})}}]);