"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[4488],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return m}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),d=c(a),m=r,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||l;return a?n.createElement(f,i(i({ref:t},u),{},{components:a})):n.createElement(f,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=d;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},58215:function(e,t,a){var n=a(67294);t.Z=function(e){var t=e.children,a=e.hidden,r=e.className;return n.createElement("div",{role:"tabpanel",hidden:a,className:r},t)}},55064:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(67294),r=a(79443);var l=function(){var e=(0,n.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},i=a(86010),s="tabItem_1uMI",o="tabItemActive_2DSg";var c=37,u=39;var p=function(e){var t=e.lazy,a=e.block,r=e.defaultValue,p=e.values,d=e.groupId,m=e.className,f=l(),v=f.tabGroupChoices,h=f.setTabGroupChoices,k=(0,n.useState)(r),g=k[0],b=k[1],N=n.Children.toArray(e.children),x=[];if(null!=d){var y=v[d];null!=y&&y!==g&&p.some((function(e){return e.value===y}))&&b(y)}var j=function(e){var t=e.currentTarget,a=x.indexOf(t),n=p[a].value;b(n),null!=d&&(h(d,n),setTimeout((function(){var e,a,n,r,l,i,s,c;(e=t.getBoundingClientRect(),a=e.top,n=e.left,r=e.bottom,l=e.right,i=window,s=i.innerHeight,c=i.innerWidth,a>=0&&l<=c&&r<=s&&n>=0)||(t.scrollIntoView({block:"center",behavior:"smooth"}),t.classList.add(o),setTimeout((function(){return t.classList.remove(o)}),2e3))}),150))},P=function(e){var t,a;switch(e.keyCode){case u:var n=x.indexOf(e.target)+1;a=x[n]||x[0];break;case c:var r=x.indexOf(e.target)-1;a=x[r]||x[x.length-1]}null==(t=a)||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":a},m)},p.map((function(e){var t=e.value,a=e.label;return n.createElement("li",{role:"tab",tabIndex:g===t?0:-1,"aria-selected":g===t,className:(0,i.Z)("tabs__item",s,{"tabs__item--active":g===t}),key:t,ref:function(e){return x.push(e)},onKeyDown:P,onFocus:j,onClick:j},a)}))),t?(0,n.cloneElement)(N.filter((function(e){return e.props.value===g}))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},N.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==g})}))))}},79443:function(e,t,a){var n=(0,a(67294).createContext)(void 0);t.Z=n},17870:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return i},contentTitle:function(){return s},metadata:function(){return o},toc:function(){return c},default:function(){return p}});var n=a(22122),r=a(19756),l=(a(67294),a(3905)),i=(a(55064),a(58215),{id:"assertions",title:"Assertions"}),s=void 0,o={unversionedId:"assertions",id:"version-1.10.0/assertions",isDocsHomePage:!1,title:"Assertions",description:"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions.",source:"@site/versioned_docs/version-1.10.0/assertions.mdx",sourceDirName:".",slug:"/assertions",permalink:"/java/docs/1.10.0/assertions",version:"1.10.0",frontMatter:{id:"assertions",title:"Assertions"},sidebar:"version-1.10.0/docs",previous:{title:"Auto-waiting",permalink:"/java/docs/1.10.0/actionability"},next:{title:"Authentication",permalink:"/java/docs/1.10.0/auth"}},c=[{value:"Text content",id:"text-content",children:[{value:"API reference",id:"api-reference",children:[]}]},{value:"Inner text",id:"inner-text",children:[{value:"API reference",id:"api-reference-1",children:[]}]},{value:"Attribute value",id:"attribute-value",children:[]},{value:"Checkbox state",id:"checkbox-state",children:[{value:"API reference",id:"api-reference-2",children:[]}]},{value:"JS expression",id:"js-expression",children:[{value:"API reference",id:"api-reference-3",children:[]}]},{value:"Inner HTML",id:"inner-html",children:[{value:"API reference",id:"api-reference-4",children:[]}]},{value:"Visibility",id:"visibility",children:[{value:"API reference",id:"api-reference-5",children:[]}]},{value:"Enabled state",id:"enabled-state",children:[{value:"API reference",id:"api-reference-6",children:[]}]},{value:"Custom assertions",id:"custom-assertions",children:[{value:"API reference",id:"api-reference-7",children:[]}]}],u={toc:c};function p(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Playwright provides convenience APIs for common tasks, like reading the text content of an element. These APIs can be used in your test assertions."),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#text-content"},"Text content")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inner-text"},"Inner text")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#attribute-value"},"Attribute value")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#checkbox-state"},"Checkbox state")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#js-expression"},"JS expression")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#inner-html"},"Inner HTML")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#visibility"},"Visibility")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#enabled-state"},"Enabled state")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"#custom-assertions"},"Custom assertions"))),(0,l.kt)("h2",{id:"text-content"},"Text content"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'String content = page.textContent("nav:first-child");\nassertEquals("home", content);\n')),(0,l.kt)("h3",{id:"api-reference"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-page#pagetextcontentselector-options"},"Page.textContent(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-elementhandle#elementhandletextcontent"},"ElementHandle.textContent()"))),(0,l.kt)("h2",{id:"inner-text"},"Inner text"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'String text = page.innerText(".selected");\nassertEquals("value", text);\n')),(0,l.kt)("h3",{id:"api-reference-1"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-page#pageinnertextselector-options"},"Page.innerText(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-elementhandle#elementhandleinnertext"},"ElementHandle.innerText()"))),(0,l.kt)("h2",{id:"attribute-value"},"Attribute value"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'String alt = page.getAttribute("input", "alt");\nassertEquals("Text", alt);\n')),(0,l.kt)("h2",{id:"checkbox-state"},"Checkbox state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'boolean checked = page.isChecked("input");\nassertTrue(checked);\n')),(0,l.kt)("h3",{id:"api-reference-2"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-page#pageischeckedselector-options"},"Page.isChecked(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-elementhandle#elementhandleischecked"},"ElementHandle.isChecked()"))),(0,l.kt)("h2",{id:"js-expression"},"JS expression"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'Object content = page.evalOnSelector("nav:first-child", "e => e.textContent");\nassertEquals("home", content);\n')),(0,l.kt)("h3",{id:"api-reference-3"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-page#pageevalonselectorselector-expression-arg"},"Page.evalOnSelector(selector, expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-jshandle#jshandleevaluateexpression-arg"},"JsHandle.evaluate(expression[, arg])"))),(0,l.kt)("h2",{id:"inner-html"},"Inner HTML"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'String html = page.innerHTML("div.result");\nassertEquals("<p>Result</p>", html);\n')),(0,l.kt)("h3",{id:"api-reference-4"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-page#pageinnerhtmlselector-options"},"Page.innerHTML(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-elementhandle#elementhandleinnerhtml"},"ElementHandle.innerHTML()"))),(0,l.kt)("h2",{id:"visibility"},"Visibility"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'boolean visible = page.isVisible("input");\nassertTrue(visible);\n')),(0,l.kt)("h3",{id:"api-reference-5"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-page#pageisvisibleselector-options"},"Page.isVisible(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-elementhandle#elementhandleisvisible"},"ElementHandle.isVisible()"))),(0,l.kt)("h2",{id:"enabled-state"},"Enabled state"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'boolean enabled = page.isEnabled("input");\nassertTrue(enabled);\n')),(0,l.kt)("h3",{id:"api-reference-6"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-page#pageisenabledselector-options"},"Page.isEnabled(selector[, options])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-elementhandle#elementhandleisenabled"},"ElementHandle.isEnabled()"))),(0,l.kt)("h2",{id:"custom-assertions"},"Custom assertions"),(0,l.kt)("p",null,"With Playwright, you can also write custom JavaScript to run in the context of the browser. This is useful in situations where you want to assert for values that are not covered by the convenience APIs above."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-java"},'// Assert local storage value\nObject userId = page.evaluate("() => window.localStorage.getItem(\'userId\')");\nassertNotNull(userId);\n\n// Assert value for input element\npage.waitForSelector("#search");\nObject value = page.evalOnSelector("#search", "el => el.value");\nassertEquals("query", value);\n\n// Assert computed style\nObject fontSize = page.evalOnSelector("div", "el => window.getComputedStyle(el).fontSize");\nassertEquals("16px", fontSize);\n\n// Assert list length\nObject length = page.evalOnSelectorAll("li.selected",  "items => items.length");\nassertEquals(3, length);\n')),(0,l.kt)("h3",{id:"api-reference-7"},"API reference"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-page#pageevaluateexpression-arg"},"Page.evaluate(expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-page#pageevalonselectorselector-expression-arg"},"Page.evalOnSelector(selector, expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-page#pageevalonselectorallselector-expression-arg"},"Page.evalOnSelectorAll(selector, expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-frame#frameevaluateexpression-arg"},"Frame.evaluate(expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-frame#frameevalonselectorselector-expression-arg"},"Frame.evalOnSelector(selector, expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-frame#frameevalonselectorallselector-expression-arg"},"Frame.evalOnSelectorAll(selector, expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-elementhandle#elementhandleevalonselectorselector-expression-arg"},"ElementHandle.evalOnSelector(selector, expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"/java/docs/1.10.0/api/class-elementhandle#elementhandleevalonselectorallselector-expression-arg"},"ElementHandle.evalOnSelectorAll(selector, expression[, arg])")),(0,l.kt)("li",{parentName:"ul"},"[EvaluationArgument]")))}p.isMDXComponent=!0},86010:function(e,t,a){function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}function r(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}a.d(t,{Z:function(){return r}})}}]);