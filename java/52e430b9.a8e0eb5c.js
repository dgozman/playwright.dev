(window.webpackJsonp=window.webpackJsonp||[]).push([[72],{141:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return l})),r.d(t,"toc",(function(){return s})),r.d(t,"default",(function(){return p}));var n=r(3),o=r(7),i=(r(0),r(284)),a=(r(287),r(288),{id:"test-reporters",title:"Reporters"}),l={unversionedId:"test-reporters",id:"test-reporters",isDocsHomePage:!1,title:"Reporters",description:"- Using reporters",source:"@site/docs/test-reporters.mdx",slug:"/test-reporters",permalink:"/java/docs/next/test-reporters",version:"current"},s=[{value:"Using reporters",id:"using-reporters",children:[]},{value:"Built-in reporters",id:"built-in-reporters",children:[{value:"List reporter",id:"list-reporter",children:[]},{value:"Line reporter",id:"line-reporter",children:[]},{value:"Dot reporter",id:"dot-reporter",children:[]},{value:"JSON reporter",id:"json-reporter",children:[]},{value:"JUnit reporter",id:"junit-reporter",children:[]}]}],c={toc:s};function p(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},c,r,{components:t,mdxType:"MDXLayout"}),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#using-reporters"}),"Using reporters")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(n.a)({parentName:"li"},{href:"#built-in-reporters"}),"Built-in reporters"))),Object(i.b)("h2",{id:"using-reporters"},"Using reporters"),Object(i.b)("p",null,"Playwright Test comes with a few built-in reporters for different needs and ability to provide custom reporters. The easiest way to try out built-in reporters is to pass ",Object(i.b)("inlineCode",{parentName:"p"},"--reporter")," ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"/java/docs/next/cli"}),"command line option"),"."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test --reporter=line\n")),Object(i.b)("p",null,"For more control, you can specify reporters programmatically in the ",Object(i.b)("a",Object(n.a)({parentName:"p"},{href:"#writing-a-configuration-file"}),"configuration file"),"."),Object(i.b)("h2",{id:"built-in-reporters"},"Built-in reporters"),Object(i.b)("p",null,"All built-in reporters show detailed information about failures, and mostly differ in verbosity for successful runs."),Object(i.b)("h3",{id:"list-reporter"},"List reporter"),Object(i.b)("p",null,"List reporter is default. It prints a line for each test being run. Use it with ",Object(i.b)("inlineCode",{parentName:"p"},"--reporter=list")," or ",Object(i.b)("inlineCode",{parentName:"p"},"reporter: 'list'"),"."),Object(i.b)("p",null,"Here is an example output in the middle of a test run. Failures will be listed at the end."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test --reporter=list\nRunning 124 tests using 6 workers\n\n  \u2713 should access error in env (438ms)\n  \u2713 handle long test names (515ms)\n  x 1) render expected (691ms)\n  \u2713 should timeout (932ms)\n    should repeat each:\n  \u2713 should respect enclosing .gitignore (569ms)\n    should teardown env after timeout:\n    should respect excluded tests:\n  \u2713 should handle env beforeEach error (638ms)\n    should respect enclosing .gitignore:\n")),Object(i.b)("h3",{id:"line-reporter"},"Line reporter"),Object(i.b)("p",null,"Line reporter is more concise than the list reporter. It uses a single line to report last finished test, and prints failures when they occur. Line reporter is useful for large test suites where it shows the progress but does not spam the output by listing all the tests. Use it with ",Object(i.b)("inlineCode",{parentName:"p"},"--reporter=line")," or ",Object(i.b)("inlineCode",{parentName:"p"},"reporter: 'line'"),"."),Object(i.b)("p",null,"Here is an example output in the middle of a test run. Failures are reported inline."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test --reporter=line\nRunning 124 tests using 6 workers\n  1) dot-reporter.spec.ts:20:1 \u203a render expected ===================================================\n\n    Error: expect(received).toBe(expected) // Object.is equality\n\n    Expected: 1\n    Received: 0\n\n[23/124] gitignore.spec.ts - should respect nested .gitignore\n")),Object(i.b)("h3",{id:"dot-reporter"},"Dot reporter"),Object(i.b)("p",null,"Dot reporter is very concise - it only produces a single character per successful test run. It is useful on CI where you don't want a lot of output. Use it with ",Object(i.b)("inlineCode",{parentName:"p"},"--reporter=dot")," or ",Object(i.b)("inlineCode",{parentName:"p"},"reporter: 'dot'"),"."),Object(i.b)("p",null,"Here is an example output in the middle of a test run. Failures will be listed at the end."),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"npx playwright test --reporter=dot\nRunning 124 tests using 6 workers\n\xb7\xb7\xb7\xb7\xb7\xb7F\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\xb7\n")),Object(i.b)("h3",{id:"json-reporter"},"JSON reporter"),Object(i.b)("p",null,"JSON reporter produces an object with all information about the test run. It is usually used together with some terminal reporter like ",Object(i.b)("inlineCode",{parentName:"p"},"dot")," or ",Object(i.b)("inlineCode",{parentName:"p"},"line"),"."),Object(i.b)("p",null,"Most likely you want to write the JSON to a file. When running with ",Object(i.b)("inlineCode",{parentName:"p"},"--reporter=json"),", use ",Object(i.b)("inlineCode",{parentName:"p"},"FOLIO_JSON_OUTPUT_NAME")," environment variable:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"FOLIO_JSON_OUTPUT_NAME=results.json npx playwright test --reporter=json,dot\n")),Object(i.b)("p",null,"In configuration file, pass options directly:"),Object(i.b)("h3",{id:"junit-reporter"},"JUnit reporter"),Object(i.b)("p",null,"JUnit reporter produces a JUnit-style xml report. It is usually used together with some terminal reporter like ",Object(i.b)("inlineCode",{parentName:"p"},"dot")," or ",Object(i.b)("inlineCode",{parentName:"p"},"line"),"."),Object(i.b)("p",null,"Most likely you want to write the report to an xml file. When running with ",Object(i.b)("inlineCode",{parentName:"p"},"--reporter=junit"),", use ",Object(i.b)("inlineCode",{parentName:"p"},"FOLIO_JUNIT_OUTPUT_NAME")," environment variable:"),Object(i.b)("pre",null,Object(i.b)("code",Object(n.a)({parentName:"pre"},{className:"language-sh"}),"FOLIO_JUNIT_OUTPUT_NAME=results.xml npx playwright test --reporter=junit,line\n")),Object(i.b)("p",null,"In configuration file, pass options directly:"))}p.isMDXComponent=!0},283:function(e,t,r){"use strict";function n(e){var t,r,o="";if("string"==typeof e||"number"==typeof e)o+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=n(e[t]))&&(o&&(o+=" "),o+=r);else for(t in e)e[t]&&(o&&(o+=" "),o+=t);return o}t.a=function(){for(var e,t,r=0,o="";r<arguments.length;)(e=arguments[r++])&&(t=n(e))&&(o&&(o+=" "),o+=t);return o}},284:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=o.a.createContext({}),p=function(e){var t=o.a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,a=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(r),d=n,f=u["".concat(a,".").concat(d)]||u[d]||b[d]||i;return r?o.a.createElement(f,l(l({ref:t},c),{},{components:r})):o.a.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=r[c];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},285:function(e,t,r){"use strict";var n=r(0),o=r(286);t.a=function(){var e=Object(n.useContext)(o.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},286:function(e,t,r){"use strict";var n=r(0),o=Object(n.createContext)(void 0);t.a=o},287:function(e,t,r){"use strict";var n=r(0),o=r.n(n),i=r(285),a=r(283),l=r(53),s=r.n(l),c=37,p=39;t.a=function(e){var t=e.lazy,r=e.block,l=e.defaultValue,u=e.values,b=e.groupId,d=e.className,f=Object(i.a)(),m=f.tabGroupChoices,O=f.setTabGroupChoices,j=Object(n.useState)(l),h=j[0],g=j[1],y=n.Children.toArray(e.children);if(null!=b){var v=m[b];null!=v&&v!==h&&u.some((function(e){return e.value===v}))&&g(v)}var w=function(e){g(e),null!=b&&O(b,e)},N=[];return o.a.createElement("div",null,o.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(a.a)("tabs",{"tabs--block":r},d)},u.map((function(e){var t=e.value,r=e.label;return o.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":h===t,className:Object(a.a)("tabs__item",s.a.tabItem,{"tabs__item--active":h===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:function(e){!function(e,t,r){switch(r.keyCode){case p:!function(e,t){var r=e.indexOf(t)+1;e[r]?e[r].focus():e[0].focus()}(e,t);break;case c:!function(e,t){var r=e.indexOf(t)-1;e[r]?e[r].focus():e[e.length-1].focus()}(e,t)}}(N,e.target,e)},onFocus:function(){return w(t)},onClick:function(){w(t)}},r)}))),t?Object(n.cloneElement)(y.filter((function(e){return e.props.value===h}))[0],{className:"margin-vert--md"}):o.a.createElement("div",{className:"margin-vert--md"},y.map((function(e,t){return Object(n.cloneElement)(e,{key:t,hidden:e.props.value!==h})}))))}},288:function(e,t,r){"use strict";var n=r(3),o=r(0),i=r.n(o);t.a=function(e){var t=e.children,r=e.hidden,o=e.className;return i.a.createElement("div",Object(n.a)({role:"tabpanel"},{hidden:r,className:o}),t)}}}]);