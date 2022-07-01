"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3144],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),g=c(a),d=r,m=g["".concat(s,".").concat(d)]||g[d]||u[d]||o;return a?n.createElement(m,l(l({ref:t},p),{},{components:a})):n.createElement(m,l({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},73811:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),r=Object.defineProperty,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a;function c({children:e,hidden:t,className:a}){return n.createElement("div",((e,t)=>{for(var a in t||(t={}))l.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&s(e,a,t[a]);return e})({role:"tabpanel"},{hidden:t,className:a}),e)}},73824:function(e,t,a){a.d(t,{Z:function(){return v}});var n=a(67294),r=a(54939),o=a(39670),l=a(86010),i="tabItem_LplD",s=Object.defineProperty,c=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,y=(e,t)=>{for(var a in t||(t={}))g.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))d.call(t,a)&&m(e,a,t[a]);return e};function h(e){var t,a,r;const{lazy:s,block:u,defaultValue:g,values:d,groupId:m,className:h}=e,v=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=null!=d?d:v.map((({props:{value:e,label:t,attributes:a}})=>({value:e,label:t,attributes:a}))),b=(0,o.lx)(f,((e,t)=>e.value===t.value));if(b.length>0)throw new Error(`Docusaurus error: Duplicate values "${b.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const w=null===g?g:null!=(r=null!=g?g:null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)?r:null==(a=v[0])?void 0:a.props.value;if(null!==w&&!f.some((e=>e.value===w)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${w}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:O,setTabGroupChoices:P}=(0,o.UB)(),[j,k]=(0,n.useState)(w),x=[],{blockElementScrollPositionUntilNextRender:T}=(0,o.o5)();if(null!=m){const e=O[m];null!=e&&e!==j&&f.some((t=>t.value===e))&&k(e)}const D=e=>{const t=e.currentTarget,a=x.indexOf(t),n=f[a].value;n!==j&&(T(t),k(n),null!=m&&P(m,n))},S=e=>{let t=null;switch(e.key){case"ArrowRight":{const a=x.indexOf(e.currentTarget)+1;t=x[a]||x[0];break}case"ArrowLeft":{const a=x.indexOf(e.currentTarget)-1;t=x[a]||x[x.length-1];break}}null==t||t.focus()};return n.createElement("div",{className:"tabs-container"},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":u},h)},f.map((({value:e,label:t,attributes:a})=>{return n.createElement("li",(r=y({role:"tab",tabIndex:j===e?0:-1,"aria-selected":j===e,key:e,ref:e=>x.push(e),onKeyDown:S,onFocus:D,onClick:D},a),o={className:(0,l.Z)("tabs__item",i,null==a?void 0:a.className,{"tabs__item--active":j===e})},c(r,p(o))),null!=t?t:e);var r,o}))),s?(0,n.cloneElement)(v.filter((e=>e.props.value===j))[0],{className:"margin-vert--md"}):n.createElement("div",{className:"margin-vert--md"},v.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==j})))))}function v(e){const t=(0,r.Z)();return n.createElement(h,y({key:String(t)},e))}},82030:function(e,t,a){a.r(t),a.d(t,{assets:function(){return v},contentTitle:function(){return y},default:function(){return w},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return f}});var n=a(3905),r=a(73824),o=a(73811),l=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&g(e,a,t[a]);if(c)for(var a of c(t))u.call(t,a)&&g(e,a,t[a]);return e};const m={id:"test-pom",title:"Page Object Model"},y=void 0,h={unversionedId:"test-pom",id:"version-1.23/test-pom",title:"Page Object Model",description:"Page Object Model is a common pattern that introduces abstractions over web app pages to simplify interactions with them in multiple tests. It is best explained by an example.",source:"@site/versioned_docs/version-1.23/test-pom.mdx",sourceDirName:".",slug:"/test-pom",permalink:"/docs/test-pom",tags:[],version:"1.23",frontMatter:{id:"test-pom",title:"Page Object Model"},sidebar:"docs",previous:{title:"Configuration",permalink:"/docs/test-configuration"},next:{title:"Parallelism and sharding",permalink:"/docs/test-parallel"}},v={},f=[],b={toc:f};function w(e){var t,a=e,{components:l}=a,g=((e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),g),i(t,s({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("p",null,"Page Object Model is a common pattern that introduces abstractions over web app pages to simplify interactions with them in multiple tests. It is best explained by an example."),(0,n.kt)("p",null,"We will create a ",(0,n.kt)("inlineCode",{parentName:"p"},"PlaywrightDevPage")," helper class to encapsulate common operations on the ",(0,n.kt)("inlineCode",{parentName:"p"},"playwright.dev")," page. Internally, it will use the ",(0,n.kt)("inlineCode",{parentName:"p"},"page")," object."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright-dev-page.ts\nimport { expect, Locator, Page } from '@playwright/test';\n\nexport class PlaywrightDevPage {\n  readonly page: Page;\n  readonly getStartedLink: Locator;\n  readonly gettingStartedHeader: Locator;\n  readonly pomLink: Locator;\n  readonly tocList: Locator;\n\n  constructor(page: Page) {\n    this.page = page;\n    this.getStartedLink = page.locator('a', { hasText: 'Get started' });\n    this.gettingStartedHeader = page.locator('h1', { hasText: 'Getting started' });\n    this.pomLink = page.locator('li', { hasText: 'Playwright Test' }).locator('a', { hasText: 'Page Object Model' });\n    this.tocList = page.locator('article div.markdown ul > li > a');\n  }\n\n  async goto() {\n    await this.page.goto('https://playwright.dev');\n  }\n\n  async getStarted() {\n    await this.getStartedLink.first().click();\n    await expect(this.gettingStartedHeader).toBeVisible();\n  }\n\n  async pageObjectModel() {\n    await this.getStarted();\n    await this.pomLink.click();\n  }\n}\n"))),(0,n.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// playwright-dev-page.js\nconst { expect } = require('@playwright/test');\n\nexports.PlaywrightDevPage = class PlaywrightDevPage {\n\n  /**\n   * @param {import('@playwright/test').Page} page\n   */\n  constructor(page) {\n    this.page = page;\n    this.getStartedLink = page.locator('a', { hasText: 'Get started' });\n    this.gettingStartedHeader = page.locator('h1', { hasText: 'Getting started' });\n    this.pomLink = page.locator('li', { hasText: 'Playwright Test' }).locator('a', { hasText: 'Page Object Model' });\n    this.tocList = page.locator('article div.markdown ul > li > a');\n  }\n\n  async goto() {\n    await this.page.goto('https://playwright.dev');\n  }\n\n  async getStarted() {\n    await this.getStartedLink.first().click();\n    await expect(this.gettingStartedHeader).toBeVisible();\n  }\n\n  async pageObjectModel() {\n    await this.getStarted();\n    await this.pomLink.click();\n  }\n}\n")))),(0,n.kt)("p",null,"Now we can use the ",(0,n.kt)("inlineCode",{parentName:"p"},"PlaywrightDevPage")," class in our tests."),(0,n.kt)(r.Z,{groupId:"js-flavor",defaultValue:"ts",values:[{label:"TypeScript",value:"ts"},{label:"JavaScript",value:"js"}],mdxType:"Tabs"},(0,n.kt)(o.Z,{value:"ts",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// example.spec.ts\nimport { test, expect } from '@playwright/test';\nimport { PlaywrightDevPage } from './playwright-dev-page';\n\ntest('getting started should contain table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.getStarted();\n  await expect(playwrightDev.tocList).toHaveText([\n    'Installation',\n    'First test',\n    'Configuration file',\n    'Writing assertions',\n    'Using test fixtures',\n    'Using test hooks',\n    'VS Code extension',\n    'Command line',\n    'Configure NPM scripts',\n    'Release notes'\n  ]);\n});\n\ntest('should show Page Object Model article', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.pageObjectModel();\n  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');\n});\n"))),(0,n.kt)(o.Z,{value:"js",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-js"}),"// example.spec.js\nconst { test, expect } = require('@playwright/test');\nconst { PlaywrightDevPage } = require('./playwright-dev-page');\n\ntest('getting started should contain table of contents', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.getStarted();\n  await expect(playwrightDev.tocList).toHaveText([\n    'Installation',\n    'First test',\n    'Configuration file',\n    'Writing assertions',\n    'Using test fixtures',\n    'Using test hooks',\n    'VS Code extension',\n    'Command line',\n    'Configure NPM scripts',\n    'Release notes'\n  ]);\n});\n\ntest('should show Page Object Model article', async ({ page }) => {\n  const playwrightDev = new PlaywrightDevPage(page);\n  await playwrightDev.goto();\n  await playwrightDev.pageObjectModel();\n  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');\n});\n")))))}w.isMDXComponent=!0}}]);