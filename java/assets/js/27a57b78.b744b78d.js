"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[6165],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return w}});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),c=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),h=c(r),w=n,m=h["".concat(s,".").concat(w)]||h[w]||p[w]||i;return r?a.createElement(m,l(l({ref:t},u),{},{components:r})):a.createElement(m,l({ref:t},u))}));function w(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=h;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},8215:function(e,t,r){var a=r(7294);t.Z=function(e){var t=e.children,r=e.hidden,n=e.className;return a.createElement("div",{role:"tabpanel",hidden:r,className:n},t)}},5064:function(e,t,r){r.d(t,{Z:function(){return p}});var a=r(7294),n=r(9443);var i=function(){var e=(0,a.useContext)(n.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=r(6010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,r=e.block,n=e.defaultValue,p=e.values,h=e.groupId,w=e.className,m=i(),g=m.tabGroupChoices,f=m.setTabGroupChoices,y=(0,a.useState)(n),d=y[0],v=y[1],b=a.Children.toArray(e.children),k=[];if(null!=h){var P=g[h];null!=P&&P!==d&&p.some((function(e){return e.value===P}))&&v(P)}var N=function(e){var t=e.currentTarget,r=k.indexOf(t),a=p[r].value;v(a),null!=h&&(f(h,a),setTimeout((function(){var e,r,a,n,i,l,o,c;(e=t.getBoundingClientRect(),r=e.top,a=e.left,n=e.bottom,i=e.right,l=window,o=l.innerHeight,c=l.innerWidth,r>=0&&i<=c&&n<=o&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},j=function(e){var t,r;switch(e.keyCode){case u:var a=k.indexOf(e.target)+1;r=k[a]||k[0];break;case c:var n=k.indexOf(e.target)-1;r=k[n]||k[k.length-1]}null==(t=r)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":r},w)},p.map((function(e){var t=e.value,r=e.label;return a.createElement("li",{role:"tab",tabIndex:d===t?0:-1,"aria-selected":d===t,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":d===t}),key:t,ref:function(e){return k.push(e)},onKeyDown:j,onFocus:N,onClick:N},r)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===d}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==d})}))))}},9443:function(e,t,r){var a=(0,r(7294).createContext)(void 0);t.Z=a},4957:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=r(2122),n=r(9756),i=(r(7294),r(3905)),l=(r(5064),r(8215),{id:"class-playwright",title:"Playwright"}),o=void 0,s={unversionedId:"api/class-playwright",id:"version-1.12.0/api/class-playwright",isDocsHomePage:!1,title:"Playwright",description:"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:",source:"@site/versioned_docs/version-1.12.0/api/class-playwright.mdx",sourceDirName:"api",slug:"/api/class-playwright",permalink:"/java/docs/1.12.0/api/class-playwright",version:"1.12.0",frontMatter:{id:"class-playwright",title:"Playwright"},sidebar:"version-1.12.0/api",next:{title:"Browser",permalink:"/java/docs/1.12.0/api/class-browser"}},c=[{value:"Playwright.close()",id:"playwright-close",children:[]},{value:"Playwright.create()",id:"playwright-create",children:[]},{value:"Playwright.chromium()",id:"playwright-chromium",children:[]},{value:"Playwright.firefox()",id:"playwright-firefox",children:[]},{value:"Playwright.selectors()",id:"playwright-selectors",children:[]},{value:"Playwright.webkit()",id:"playwright-webkit",children:[]}],u={toc:c};function p(e){var t=e.components,r=(0,n.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Playwright module provides a method to launch a browser instance. The following is a typical example of using Playwright to drive automation:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.navigate("http://example.com");\n      // other actions...\n      browser.close();\n    }\n  }\n}\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-playwright#playwright-close"},"Playwright.close()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-playwright#playwright-create"},"Playwright.create()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-playwright#playwright-chromium"},"Playwright.chromium()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-playwright#playwright-firefox"},"Playwright.firefox()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-playwright#playwright-selectors"},"Playwright.selectors()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-playwright#playwright-webkit"},"Playwright.webkit()"))),(0,i.kt)("h2",{id:"playwright-close"},"Playwright.close()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">")),(0,i.kt)("p",null,"Terminates this instance of Playwright, will also close all created browsers if they are still running."),(0,i.kt)("h2",{id:"playwright-create"},"Playwright.create()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-playwright",title:"Playwright"},"Playwright"),">")),(0,i.kt)("p",null,"Launches new Playwright driver process and connects to it. ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-playwright#playwright-close"},"Playwright.close()")," should be called when the instance is no longer needed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Playwright playwright = Playwright.create()) {\nBrowser browser = playwright.webkit().launch();\nPage page = browser.newPage();\npage.navigate("https://www.w3.org/");\nplaywright.close();\n')),(0,i.kt)("h2",{id:"playwright-chromium"},"Playwright.chromium()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to Chromium, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-browser",title:"Browser"},"Browser"),"."),(0,i.kt)("h2",{id:"playwright-firefox"},"Playwright.firefox()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to Firefox, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-browser",title:"Browser"},"Browser"),"."),(0,i.kt)("h2",{id:"playwright-selectors"},"Playwright.selectors()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-selectors",title:"Selectors"},"Selectors"),">")),(0,i.kt)("p",null,"Selectors can be used to install custom selector engines. See ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/selectors"},"Working with selectors")," for more information."),(0,i.kt)("h2",{id:"playwright-webkit"},"Playwright.webkit()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: ","<",(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.12.0/api/class-browsertype",title:"BrowserType"},"BrowserType"),">")),(0,i.kt)("p",null,"This object can be used to launch or connect to WebKit, returning instances of ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.12.0/api/class-browser",title:"Browser"},"Browser"),"."))}p.isMDXComponent=!0},6010:function(e,t,r){function a(e){var t,r,n="";if("string"==typeof e||"number"==typeof e)n+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(r=a(e[t]))&&(n&&(n+=" "),n+=r);else for(t in e)e[t]&&(n&&(n+=" "),n+=t);return n}function n(){for(var e,t,r=0,n="";r<arguments.length;)(e=arguments[r++])&&(t=a(e))&&(n&&(n+=" "),n+=t);return n}r.d(t,{Z:function(){return n}})}}]);