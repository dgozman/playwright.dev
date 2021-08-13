"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5103],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},g=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(n),f=r,d=g["".concat(s,".").concat(f)]||g[f]||u[f]||o;return n?a.createElement(d,l(l({ref:t},p),{},{components:n})):a.createElement(d,l({ref:t},p))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}g.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},55064:function(e,t,n){n.d(t,{Z:function(){return u}});var a=n(67294),r=n(79443);var o=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(86010),i="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,p=39;var u=function(e){var t=e.lazy,n=e.block,r=e.defaultValue,u=e.values,g=e.groupId,f=e.className,d=o(),m=d.tabGroupChoices,v=d.setTabGroupChoices,h=(0,a.useState)(r),k=h[0],y=h[1],b=a.Children.toArray(e.children),N=[];if(null!=g){var P=m[g];null!=P&&P!==k&&u.some((function(e){return e.value===P}))&&y(P)}var x=function(e){var t=e.currentTarget,n=N.indexOf(t),a=u[n].value;y(a),null!=g&&(v(g,a),setTimeout((function(){var e,n,a,r,o,l,i,c;(e=t.getBoundingClientRect(),n=e.top,a=e.left,r=e.bottom,o=e.right,l=window,i=l.innerHeight,c=l.innerWidth,n>=0&&o<=c&&r<=i&&a>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(s),setTimeout((function(){return t.classList.remove(s)}),2e3))}),150))},w=function(e){var t,n;switch(e.keyCode){case p:var a=N.indexOf(e.target)+1;n=N[a]||N[0];break;case c:var r=N.indexOf(e.target)-1;n=N[r]||N[N.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},f)},u.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:k===t?0:-1,"aria-selected":k===t,className:(0,l.Z)("tabs__item",i,{"tabs__item--active":k===t}),key:t,ref:function(e){return N.push(e)},onKeyDown:w,onFocus:x,onClick:x},n)}))),t?(0,a.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},b.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==k})}))))}},79443:function(e,t,n){var a=(0,n(67294).createContext)(void 0);t.Z=a},81839:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return u}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l=(n(55064),n(58215),{id:"verification",title:"Verification"}),i=void 0,s={unversionedId:"verification",id:"verification",isDocsHomePage:!1,title:"Verification",description:"- Console logs",source:"@site/docs/verification.mdx",sourceDirName:".",slug:"/verification",permalink:"/java/docs/next/verification",version:"current",frontMatter:{id:"verification",title:"Verification"},sidebar:"docs",previous:{title:"Trace Viewer",permalink:"/java/docs/next/trace-viewer"},next:{title:"Videos",permalink:"/java/docs/next/videos"}},c=[{value:"Console logs",id:"console-logs",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Page errors",id:"page-errors",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Page events",id:"page-events",children:[{value:"API reference",id:"api-reference-2",children:[]}]}],p={toc:c};function u(e){var t=e.components,n=(0,r.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#console-logs"},"Console logs")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#page-errors"},"Page errors")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"#page-events"},"Page events"))),(0,o.kt)("h2",{id:"console-logs"},"Console logs"),(0,o.kt)("p",null,"Console messages logged in the page can be brought into the Playwright context."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Listen for all System.out.printlns\npage.onConsoleMessage(msg -> System.out.println(msg.text()));\n\n// Listen for all console events and handle errors\npage.onConsoleMessage(msg -> {\n  if ("error".equals(msg.type()))\n    System.out.println("Error text: " + msg.text());\n});\n\n// Get the next System.out.println\nConsoleMessage msg = page.waitForConsoleMessage(() -> {\n  // Issue console.log inside the page\n  page.evaluate("console.log(\'hello\', 42, { foo: \'bar\' });");\n});\n\n// Deconstruct console.log arguments\nmsg.args().get(0).jsonValue() // hello\nmsg.args().get(1).jsonValue() // 42\n')),(0,o.kt)("h3",{id:"api-reference"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-consolemessage",title:"ConsoleMessage"},"ConsoleMessage")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-console"},"Page.onConsoleMessage(handler)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"page-errors"},"Page errors"),(0,o.kt)("p",null,"Listen for uncaught exceptions in the page with the ",(0,o.kt)("inlineCode",{parentName:"p"},"pagerror")," event."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'// Log all uncaught errors to the terminal\npage.onPageError(exception -> {\n  System.out.println("Uncaught exception: " + exception);\n});\n\n// Navigate to a page with an exception.\npage.navigate("data:text/html,<script>throw new Error(\'Test\')<\/script>");\n')),(0,o.kt)("h3",{id:"api-reference-1"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-page-error"},"Page.onPageError(handler)"))),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"page-events"},"Page events"),(0,o.kt)("h4",{id:"requestfailed"},(0,o.kt)("inlineCode",{parentName:"h4"},'"requestfailed"')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'page.onRequestFailed(request -> {\n  System.out.println(request.url() + " " + request.failure());\n});\n')),(0,o.kt)("h4",{id:"dialog---handle-alert-confirm-prompt"},(0,o.kt)("inlineCode",{parentName:"h4"},'"dialog"')," - handle alert, confirm, prompt"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"page.onDialog(dialog -> {\n  dialog.accept();\n});\n")),(0,o.kt)("h4",{id:"popup---handle-popup-windows"},(0,o.kt)("inlineCode",{parentName:"h4"},'"popup"')," - handle popup windows"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'Page popup = page.waitForPopup(() -> {\n  page.click("#open");\n});\n')),(0,o.kt)("h3",{id:"api-reference-2"},"API reference"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page",title:"Page"},"Page")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-request-failed"},"Page.onRequestFailed(handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-dialog"},"Page.onDialog(handler)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/java/docs/next/api/class-page#page-event-popup"},"Page.onPopup(handler)"))))}u.isMDXComponent=!0},86010:function(e,t,n){function a(e){var t,n,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=a(e[t]))&&(r&&(r+=" "),r+=n);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,n=0,r="";n<arguments.length;)(e=arguments[n++])&&(t=a(e))&&(r&&(r+=" "),r+=t);return r}n.d(t,{Z:function(){return r}})}}]);