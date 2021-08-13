"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4749],{3905:function(e,t,a){a.d(t,{Zo:function(){return d},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),m=r,u=c["".concat(p,".").concat(m)]||c[m]||k[m]||i;return a?n.createElement(u,o(o({ref:t},d),{},{components:a})):n.createElement(u,o({ref:t},d))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var s=2;s<i;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return k}});var n=a(67294),r=a(79443);var i=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=a(86010),l="tabItem_1uMI",p="tabItemActive_2DSg";var s=37,d=39;var k=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,k=e.values,c=e.groupId,m=e.className,u=i(),y=u.tabGroupChoices,h=u.setTabGroupChoices,N=(0,n.useState)(r),v=N[0],b=N[1],f=n.Children.toArray(e.children),g=[];if(null!=c){var C=y[c];null!=C&&C!==v&&k.some((function(e){return e.value===C}))&&b(C)}var w=function(e){var t=e.currentTarget,a=g.indexOf(t),n=k[a].value;b(n),null!=c&&(h(c,n),setTimeout((function(){var e,a,n,r,i,o,l,s;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,i=e.right,o=window,l=o.innerHeight,s=o.innerWidth,a>=0&&i<=s&&r<=l&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(p),setTimeout((function(){return t.classList.remove(p)}),2e3))}),150))},x=function(e){var t,a;switch(e.keyCode){case d:var n=g.indexOf(e.target)+1;a=g[n]||g[0];break;case s:var r=g.indexOf(e.target)-1;a=g[r]||g[g.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},m)},k.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:v===t?0:-1,"aria-selected":v===t,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":v===t}),key:t,ref:function(e){return g.push(e)},onKeyDown:x,onFocus:w,onClick:w},a)}))),t?(0,n.cloneElement)(f.filter((function(e){return e.props.value===v}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==v})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},37452:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return o},contentTitle:function(){return l},metadata:function(){return p},toc:function(){return s},default:function(){return k}});var n=a(22122),r=a(19756),i=(a(67294),a(3905)),o=(a(55064),a(58215),{id:"class-keyboard",title:"Keyboard"}),l=void 0,p={unversionedId:"api/class-keyboard",id:"version-1.14.0/api/class-keyboard",isDocsHomePage:!1,title:"Keyboard",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is Keyboard.type(text[, options]), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/versioned_docs/version-1.14.0/api/class-keyboard.mdx",sourceDirName:"api",slug:"/api/class-keyboard",permalink:"/java/docs/api/class-keyboard",version:"1.14.0",frontMatter:{id:"class-keyboard",title:"Keyboard"},sidebar:"version-1.14.0/api",previous:{title:"JSHandle",permalink:"/java/docs/api/class-jshandle"},next:{title:"Locator",permalink:"/java/docs/api/class-locator"}},s=[{value:"Keyboard.down(key)",id:"keyboard-down",children:[]},{value:"Keyboard.insertText(text)",id:"keyboard-insert-text",children:[]},{value:"Keyboard.press(key, options)",id:"keyboard-press",children:[]},{value:"Keyboard.type(text, options)",id:"keyboard-type",children:[]},{value:"Keyboard.up(key)",id:"keyboard-up",children:[]}],d={toc:s};function k(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Keyboard provides an api for managing a virtual keyboard. The high level api is ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-keyboard#keyboard-type"},"Keyboard.type(text[, options])"),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."),(0,i.kt)("p",null,"For finer control, you can use ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-keyboard#keyboard-down"},"Keyboard.down(key)"),", ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-keyboard#keyboard-up"},"Keyboard.up(key)"),", and ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-keyboard#keyboard-insert-text"},"Keyboard.insertText(text)")," to manually fire events as if they were generated from a real keyboard."),(0,i.kt)("p",null,"An example of holding down ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift")," in order to select and delete some text:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'page.keyboard().type("Hello World!");\npage.keyboard().press("ArrowLeft");\npage.keyboard().down("Shift");\nfor (int i = 0; i < " World".length(); i++)\n  page.keyboard().press("ArrowLeft");\npage.keyboard().up("Shift");\npage.keyboard().press("Backspace");\n// Result text will end up saying "Hello!"\n')),(0,i.kt)("p",null,"An example of pressing uppercase ",(0,i.kt)("inlineCode",{parentName:"p"},"A")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'page.keyboard().press("Shift+KeyA");\n// or\npage.keyboard().press("Shift+A");\n')),(0,i.kt)("p",null,"An example to trigger select-all with the keyboard"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// on Windows and Linux\npage.keyboard().press("Control+A");\n// on macOS\npage.keyboard().press("Meta+A");\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-keyboard#keyboard-down"},"Keyboard.down(key)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-keyboard#keyboard-insert-text"},"Keyboard.insertText(text)")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-keyboard#keyboard-press"},"Keyboard.press(key[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-keyboard#keyboard-type"},"Keyboard.type(text[, options])")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/java/docs/api/class-keyboard#keyboard-up"},"Keyboard.up(key)"))),(0,i.kt)("h2",{id:"keyboard-down"},"Keyboard.down(key)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-down-option-key"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Name of the key to press or a character to generate, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"a"),".",(0,i.kt)("a",{href:"#keyboard-down-option-key",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-down-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#keyboard-down-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"keydown")," event."),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"},"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," values can be found ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"},"here"),". Examples of the keys are:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"F1")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"F12"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Digit0"),"- ",(0,i.kt)("inlineCode",{parentName:"p"},"Digit9"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyA"),"- ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyZ"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Backquote"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Minus"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Equal"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Backslash"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Backspace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Tab"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Escape"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PageDown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PageUp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrowRight"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),(0,i.kt)("p",null,"Following modification shortcuts are also supported: ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Control"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Alt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),(0,i.kt)("p",null,"Holding down ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," is a modifier key, ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Control"),", or ",(0,i.kt)("inlineCode",{parentName:"p"},"Alt"),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-keyboard#keyboard-up"},"Keyboard.up(key)"),"."),(0,i.kt)("p",null,"After the key is pressed once, subsequent calls to ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-keyboard#keyboard-down"},"Keyboard.down(key)")," will have ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat"},"repeat")," set to true. To release the key, use ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-keyboard#keyboard-up"},"Keyboard.up(key)"),"."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Modifier keys DO influence ",(0,i.kt)("inlineCode",{parentName:"p"},"keyboard.down"),". Holding down ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text in upper case."))),(0,i.kt)("h2",{id:"keyboard-insert-text"},"Keyboard.insertText(text)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-option-text"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Sets input to the specified text value.",(0,i.kt)("a",{href:"#keyboard-insert-text-option-text",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-insert-text-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#keyboard-insert-text-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches only ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," event, does not emit the ",(0,i.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keyup")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"keypress")," events."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'page.keyboard().insertText("\u55e8");\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Modifier keys DO NOT effect ",(0,i.kt)("inlineCode",{parentName:"p"},"keyboard.insertText"),". Holding down ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),(0,i.kt)("h2",{id:"keyboard-press"},"Keyboard.press(key","[, options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-option-key"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Name of the key to press or a character to generate, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"a"),".",(0,i.kt)("a",{href:"#keyboard-press-option-key",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"Keyboard.PressOptions"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setDelay"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-option-delay"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time to wait between ",(0,i.kt)("inlineCode",{parentName:"li"},"keydown")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"keyup")," in milliseconds. Defaults to 0.",(0,i.kt)("a",{href:"#keyboard-press-option-delay",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-press-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#keyboard-press-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"key")," can specify the intended ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key"},"keyboardEvent.key")," value or a single character to generate the text for. A superset of the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," values can be found ",(0,i.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/key/Key_Values"},"here"),". Examples of the keys are:"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"F1")," - ",(0,i.kt)("inlineCode",{parentName:"p"},"F12"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Digit0"),"- ",(0,i.kt)("inlineCode",{parentName:"p"},"Digit9"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyA"),"- ",(0,i.kt)("inlineCode",{parentName:"p"},"KeyZ"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Backquote"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Minus"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Equal"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Backslash"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Backspace"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Tab"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Delete"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Escape"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"End"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Enter"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Home"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Insert"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PageDown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PageUp"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrowRight"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrowUp"),", etc."),(0,i.kt)("p",null,"Following modification shortcuts are also supported: ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Control"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Alt"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"Meta"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ShiftLeft"),"."),(0,i.kt)("p",null,"Holding down ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift")," will type the text that corresponds to the ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," in the upper case."),(0,i.kt)("p",null,"If ",(0,i.kt)("inlineCode",{parentName:"p"},"key")," is a single character, it is case-sensitive, so the values ",(0,i.kt)("inlineCode",{parentName:"p"},"a")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"A")," will generate different respective texts."),(0,i.kt)("p",null,"Shortcuts such as ",(0,i.kt)("inlineCode",{parentName:"p"},'key: "Control+o"')," or ",(0,i.kt)("inlineCode",{parentName:"p"},'key: "Control+Shift+T"')," are supported as well. When specified with the modifier, modifier is pressed and being held while the subsequent key is being pressed."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'Page page = browser.newPage();\npage.navigate("https://keycode.info");\npage.keyboard().press("A");\npage.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("A.png"));\npage.keyboard().press("ArrowLeft");\npage.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("ArrowLeft.png")));\npage.keyboard().press("Shift+O");\npage.screenshot(new Page.ScreenshotOptions().setPath(Paths.get("O.png")));\nbrowser.close();\n')),(0,i.kt)("p",null,"Shortcut for ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-keyboard#keyboard-down"},"Keyboard.down(key)")," and ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-keyboard#keyboard-up"},"Keyboard.up(key)"),"."),(0,i.kt)("h2",{id:"keyboard-type"},"Keyboard.type(text","[, options]",")"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"text"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-option-text"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," A text to type into a focused element.",(0,i.kt)("a",{href:"#keyboard-type-option-text",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"options")," ","<",(0,i.kt)("inlineCode",{parentName:"li"},"Keyboard.TypeOptions"),">",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"setDelay"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-option-delay"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/nutsandbolts/datatypes.html",title:"double"},"double"),">"," Time to wait between key presses in milliseconds. Defaults to 0.",(0,i.kt)("a",{href:"#keyboard-type-option-delay",class:"list-anchor"},"#")))),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-type-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#keyboard-type-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Sends a ",(0,i.kt)("inlineCode",{parentName:"p"},"keydown"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"keypress"),"/",(0,i.kt)("inlineCode",{parentName:"p"},"input"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"keyup")," event for each character in the text."),(0,i.kt)("p",null,"To press a special key, like ",(0,i.kt)("inlineCode",{parentName:"p"},"Control")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrowDown"),", use ",(0,i.kt)("a",{parentName:"p",href:"/java/docs/api/class-keyboard#keyboard-press"},"Keyboard.press(key[, options])"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'// Types instantly\npage.keyboard().type("Hello");\n// Types slower, like a user\npage.keyboard().type("World", new Keyboard.TypeOptions().setDelay(100));\n')),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Modifier keys DO NOT effect ",(0,i.kt)("inlineCode",{parentName:"p"},"keyboard.type"),". Holding down ",(0,i.kt)("inlineCode",{parentName:"p"},"Shift")," will not type the text in upper case."))),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"For characters that are not on a US keyboard, only an ",(0,i.kt)("inlineCode",{parentName:"p"},"input")," event will be sent."))),(0,i.kt)("h2",{id:"keyboard-up"},"Keyboard.up(key)"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"key"),(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-up-option-key"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/8/docs/api/java/lang/String.html",title:"String"},"String"),">"," Name of the key to press or a character to generate, such as ",(0,i.kt)("inlineCode",{parentName:"li"},"ArrowLeft")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"a"),".",(0,i.kt)("a",{href:"#keyboard-up-option-key",class:"list-anchor"},"#")),(0,i.kt)("li",{parentName:"ul"},"returns:",(0,i.kt)("a",{"aria-hidden":"true",tabindex:"-1",class:"list-anchor-link",id:"keyboard-up-return"})," ","<",(0,i.kt)("a",{parentName:"li",href:"https://docs.oracle.com/javase/tutorial/java/javaOO/methods.html",title:"void"},"void"),">",(0,i.kt)("a",{href:"#keyboard-up-return",class:"list-anchor"},"#"))),(0,i.kt)("p",null,"Dispatches a ",(0,i.kt)("inlineCode",{parentName:"p"},"keyup")," event."))}k.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);