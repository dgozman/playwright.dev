"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[55],{3905:function(e,a,t){t.d(a,{Zo:function(){return p},kt:function(){return m}});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),c=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},p=function(e){var a=c(e.components);return n.createElement(s.Provider,{value:a},e.children)},d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},u=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(t),m=r,g=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return t?n.createElement(g,l(l({ref:a},p),{},{components:t})):n.createElement(g,l({ref:a},p))}));function m(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=t[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},58215:function(e,a,t){var n=t(67294);a.Z=function(e){var a=e.children,t=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:t,className:r},a)}},55064:function(e,a,t){t.d(a,{Z:function(){return d}});var n=t(67294),r=t(79443);var i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var c=37,p=39;var d=function(e){var a=e.lazy,t=e.block,r=e.defaultValue,d=e.values,u=e.groupId,m=e.className,g=i(),f=g.tabGroupChoices,v=g.setTabGroupChoices,h=(0,n.useState)(r),k=h[0],y=h[1],b=n.Children.toArray(e.children),N=[];if(null!=u){var w=f[u];null!=w&&w!==k&&d.some((function(e){return e.value===w}))&&y(w)}var D=function(e){var a=e.currentTarget,t=N.indexOf(a),n=d[t].value;y(n),null!=u&&(v(u,n),setTimeout((function(){var e,t,n,r,i,l,o,c;(e=a.getBoundingClientRect(),t=e.top,n=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,c=l.innerWidth,t>=0&&i<=c&&r<=o&&n>=0)||(a.scrollIntoView({block:"center",behavior:"smooth"}),a.classList.add(s),setTimeout((function(){return a.classList.remove(s)}),2e3))}),150))},j=function(e){var a,t;switch(e.keyCode){case p:var n=N.indexOf(e.target)+1;t=N[n]||N[0];break;case c:var r=N.indexOf(e.target)-1;t=N[r]||N[N.length-1]}null==(a=t)||a.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},m)},d.map((function(e){var a=e.value,t=e.label;return n.createElement("li",{role:"tab",tabIndex:k===a?0:-1,"aria-selected":k===a,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":k===a}),key:a,ref:function(e){return N.push(e)},onKeyDown:j,onFocus:D,onClick:D},t)}))),a?(0,n.cloneElement)(b.filter((function(e){return e.props.value===k}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},b.map((function(e,a){return(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==k})}))))}},79443:function(e,a,t){var n=(0,t(67294).createContext)(void 0);a.Z=n},72365:function(e,a,t){t.r(a),t.d(a,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var n=t(22122),r=t(19756),i=(t(67294),t(3905)),l=(t(55064),t(58215),{id:"class-dialog",title:"Dialog"}),o=void 0,s={unversionedId:"api/class-dialog",id:"version-1.10.0/api/class-dialog",isDocsHomePage:!1,title:"Dialog",description:"Dialog] objects are dispatched by page via the [Page.onDialog(handler) event.",source:"@site/versioned_docs/version-1.10.0/api/class-dialog.mdx",sourceDirName:"api",slug:"/api/class-dialog",permalink:"/java/docs/1.10.0/api/class-dialog",version:"1.10.0",frontMatter:{id:"class-dialog",title:"Dialog"},sidebar:"version-1.10.0/api",previous:{title:"ConsoleMessage",permalink:"/java/docs/1.10.0/api/class-consolemessage"},next:{title:"Download",permalink:"/java/docs/1.10.0/api/class-download"}},c=[{value:"Dialog.accept(promptText)",id:"dialogacceptprompttext",children:[]},{value:"Dialog.defaultValue()",id:"dialogdefaultvalue",children:[]},{value:"Dialog.dismiss()",id:"dialogdismiss",children:[]},{value:"Dialog.message()",id:"dialogmessage",children:[]},{value:"Dialog.type()",id:"dialogtype",children:[]}],p={toc:c};function d(e){var a=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.10.0/api/class-dialog",title:"Dialog"},"Dialog")," objects are dispatched by page via the ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.10.0/api/class-page#pageondialoghandler"},"Page.onDialog(handler)")," event."),(0,i.kt)("p",null,"An example of using ",(0,i.kt)("inlineCode",{parentName:"p"},"Dialog")," class:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"import com.microsoft.playwright.*;\n\npublic class Example {\n  public static void main(String[] args) {\n    try (Playwright playwright = Playwright.create()) {\n      BrowserType chromium = playwright.chromium();\n      Browser browser = chromium.launch();\n      Page page = browser.newPage();\n      page.onDialog(dialog -> {\n        System.out.println(dialog.message());\n        dialog.dismiss();\n      });\n      page.evaluate(\"alert('1')\");\n      browser.close();\n    }\n  }\n}\n")),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Dialogs are dismissed automatically, unless there is a ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.10.0/api/class-page#pageondialoghandler"},"Page.onDialog(handler)")," listener. When listener is present, it ",(0,i.kt)("strong",{parentName:"p"},"must")," either ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.10.0/api/class-dialog#dialogacceptprompttext"},"Dialog.accept([promptText])")," or ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/1.10.0/api/class-dialog#dialogdismiss"},"Dialog.dismiss()")," the dialog - otherwise the page will ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/EventLoop#never_blocking"},"freeze")," waiting for the dialog, and actions like click will never finish."))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-dialog#dialogacceptprompttext"},"Dialog.accept([promptText])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-dialog#dialogdefaultvalue"},"Dialog.defaultValue()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-dialog#dialogdismiss"},"Dialog.dismiss()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-dialog#dialogmessage"},"Dialog.message()")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-dialog#dialogtype"},"Dialog.type()"))),(0,i.kt)("h2",{id:"dialogacceptprompttext"},"Dialog.accept(","[promptText]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"promptText")," <",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),"> A text to enter in prompt. Does not cause any effects if the dialog's ",(0,i.kt)("inlineCode",{parentName:"li"},"type")," is not prompt. Optional.")),(0,i.kt)("p",null,"Returns when the dialog has been accepted."),(0,i.kt)("h2",{id:"dialogdefaultvalue"},"Dialog.defaultValue()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: <",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,i.kt)("p",null,"If dialog is prompt, returns default prompt value. Otherwise, returns empty string."),(0,i.kt)("h2",{id:"dialogdismiss"},"Dialog.dismiss()"),(0,i.kt)("p",null,"Returns when the dialog has been dismissed."),(0,i.kt)("h2",{id:"dialogmessage"},"Dialog.message()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: <",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,i.kt)("p",null,"A message displayed in the dialog."),(0,i.kt)("h2",{id:"dialogtype"},"Dialog.type()"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"returns: <",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">")),(0,i.kt)("p",null,"Returns dialog's type, can be one of ",(0,i.kt)("inlineCode",{parentName:"p"},"alert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"beforeunload"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"confirm")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"prompt"),"."))}d.isMDXComponent=!0},86010:function(e,a,t){function n(e){var a,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(a=0;a<e.length;a++)e[a]&&(t=n(e[a]))&&(r&&(r+=" "),r+=t);else for(a in e)e[a]&&(r&&(r+=" "),r+=a);return r}function r(){for(var e,a,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(a=n(e))&&(r&&(r+=" "),r+=a);return r}t.d(a,{Z:function(){return r}})}}]);