(window.webpackJsonp=window.webpackJsonp||[]).push([[227],{298:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"toc",(function(){return r})),a.d(t,"default",(function(){return b}));var n=a(3),i=a(7),l=(a(0),a(901)),c=(a(905),a(906),{id:"selectors",title:"Element selectors"}),s={unversionedId:"selectors",id:"version-1.8.0/selectors",isDocsHomePage:!1,title:"Element selectors",description:"Selectors are strings that point to the elements in the page. They are used to perform actions on those elements by means of methods such as page.click(selector[, options]), page.fill(selector, value[, options]) and alike. All those methods accept selector as their first argument.",source:"@site/versioned_docs/version-1.8.0/selectors.mdx",slug:"/selectors",permalink:"/docs/1.8.0/selectors",version:"1.8.0",sidebar:"version-1.8.0/docs",previous:{title:"Downloads",permalink:"/docs/1.8.0/downloads"},next:{title:"Emulation",permalink:"/docs/1.8.0/emulation"}},r=[{value:"Basic text selectors",id:"basic-text-selectors",children:[]},{value:"Basic CSS selectors",id:"basic-css-selectors",children:[]},{value:"Selecting visible elements",id:"selecting-visible-elements",children:[]},{value:"Selecting elements that contain other elements",id:"selecting-elements-that-contain-other-elements",children:[]},{value:"Selecting elements matching one of the conditions",id:"selecting-elements-matching-one-of-the-conditions",children:[]},{value:"Selecting elements by text",id:"selecting-elements-by-text",children:[]},{value:"Selecting elements in Shadow DOM",id:"selecting-elements-in-shadow-dom",children:[]},{value:"Selecting elements based on layout",id:"selecting-elements-based-on-layout",children:[]},{value:"XPath selectors",id:"xpath-selectors",children:[]},{value:"id, data-testid, data-test-id, data-test selectors",id:"id-data-testid-data-test-id-data-test-selectors",children:[]},{value:"Chaining selectors",id:"chaining-selectors",children:[{value:"Intermediate matches",id:"intermediate-matches",children:[]}]},{value:"Best practices",id:"best-practices",children:[{value:"Prioritize user-facing attributes",id:"prioritize-user-facing-attributes",children:[]},{value:"Define explicit contract",id:"define-explicit-contract",children:[]},{value:"Avoid selectors tied to implementation",id:"avoid-selectors-tied-to-implementation",children:[]}]}],o={toc:r};function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Selectors are strings that point to the elements in the page. They are used to perform actions on those elements by means of methods such as ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-page#pageclickselector-options"}),"page.click(selector[, options])"),", ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/api/class-page#pagefillselector-value-options"}),"page.fill(selector, value[, options])")," and alike. All those methods accept ",Object(l.b)("inlineCode",{parentName:"p"},"selector")," as their first argument."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#basic-text-selectors"}),"Basic text selectors")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#basic-css-selectors"}),"Basic CSS selectors")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#selecting-visible-elements"}),"Selecting visible elements")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#selecting-elements-that-contain-other-elements"}),"Selecting elements that contain other elements")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#selecting-elements-matching-one-of-the-conditions"}),"Selecting elements matching one of the conditions")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#selecting-elements-by-text"}),"Selecting elements by text")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#selecting-elements-in-shadow-dom"}),"Selecting elements in Shadow DOM")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#selecting-elements-based-on-layout"}),"Selecting elements based on layout")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#xpath-selectors"}),"XPath selectors")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#id-data-testid-data-test-id-data-test-selectors"}),"id, data-testid, data-test-id, data-test selectors")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#chaining-selectors"}),"Chaining selectors")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"#best-practices"}),"Best practices"))),Object(l.b)("h2",{id:"basic-text-selectors"},"Basic text selectors"),Object(l.b)("p",null,"Text selectors locate elements that contain text nodes with the passed text."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.click('text=Log in');\n")),Object(l.b)("p",null,"Matching is case-insensitive and searches for a substring. This means ",Object(l.b)("inlineCode",{parentName:"p"},"text=Login")," matches ",Object(l.b)("inlineCode",{parentName:"p"},"<button>Button loGIN (click me)</button>"),". Matching also normalizes whitespace, for example it turns multiple spaces into one, turns line breaks into spaces and ignores leading and trailing whitespace."),Object(l.b)("p",null,"Text body can be escaped with single or double quotes for full-string case-sensitive match instead. This means ",Object(l.b)("inlineCode",{parentName:"p"},'text="Login"')," will match ",Object(l.b)("inlineCode",{parentName:"p"},"<button>Login</button>"),", but not ",Object(l.b)("inlineCode",{parentName:"p"},"<button>Login (click me)</button>")," or ",Object(l.b)("inlineCode",{parentName:"p"},"<button>login</button>"),". Quoted text follows the usual escaping rules, e.g. use ",Object(l.b)("inlineCode",{parentName:"p"},'\\"')," to escape double quote in a double-quoted string: ",Object(l.b)("inlineCode",{parentName:"p"},'text="foo\\"bar"'),".  Note that quoted match still normalizes whitespace."),Object(l.b)("p",null,"Text body can also be a JavaScript-like regex wrapped in ",Object(l.b)("inlineCode",{parentName:"p"},"/")," symbols. This means ",Object(l.b)("inlineCode",{parentName:"p"},"text=/^\\\\s*Login$/i")," will match ",Object(l.b)("inlineCode",{parentName:"p"},"<button> loGIN</button>"),' with any number of spaces before "Login" and no spaces after.'),Object(l.b)("p",null,"Input elements of the type ",Object(l.b)("inlineCode",{parentName:"p"},"button")," and ",Object(l.b)("inlineCode",{parentName:"p"},"submit")," are rendered with their value as text, and text engine finds them. For example, ",Object(l.b)("inlineCode",{parentName:"p"},"text=Login")," matches ",Object(l.b)("inlineCode",{parentName:"p"},'<input type=button value="Login">'),"."),Object(l.b)("p",null,"Selector string starting and ending with a quote (either ",Object(l.b)("inlineCode",{parentName:"p"},'"')," or ",Object(l.b)("inlineCode",{parentName:"p"},"'"),") is assumed to be a text selector. For example, Playwright converts ",Object(l.b)("inlineCode",{parentName:"p"},"'\"Login\"'")," to ",Object(l.b)("inlineCode",{parentName:"p"},"'text=\"Login\"'")," internally."),Object(l.b)("h2",{id:"basic-css-selectors"},"Basic CSS selectors"),Object(l.b)("p",null,"Playwright augments standard CSS selectors in two ways:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"css")," engine pierces open shadow DOM by default."),Object(l.b)("li",{parentName:"ul"},"Playwright adds a few custom pseudo-classes like ",Object(l.b)("inlineCode",{parentName:"li"},":visible"),".")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.click('button');\n")),Object(l.b)("h2",{id:"selecting-visible-elements"},"Selecting visible elements"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},":visible")," pseudo-class in CSS selectors matches the elements that are ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/1.8.0/actionability#visible"}),"visible"),". For example, ",Object(l.b)("inlineCode",{parentName:"p"},"input")," matches all the inputs on the page, while ",Object(l.b)("inlineCode",{parentName:"p"},"input:visible")," matches only visible inputs. This is useful to distinguish elements that are very similar but differ in visibility."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"It's usually better to follow the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#best-practices"}),"best practices")," and find a more reliable way to uniquely identify the element."))),Object(l.b)("p",null,"Consider a page with two buttons, first invisible and second visible."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<button style='display: none'>Invisible</button>\n<button>Visible</button>\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"This will find the first button, because it is the first one in DOM order. Then it will wait for the button to become visible before clicking, or timeout while waiting:"),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.click('button');\n"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("p",{parentName:"li"},"This will find a second button, because it is visible, and then click it."),Object(l.b)("pre",{parentName:"li"},Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.click('button:visible');\n")))),Object(l.b)("p",null,"Use ",Object(l.b)("inlineCode",{parentName:"p"},":visible")," with caution, because it has two major drawbacks:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"When elements change their visibility dynamically, ",Object(l.b)("inlineCode",{parentName:"li"},":visible")," will give unpredictable results based on the timing."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":visible")," forces a layout and may lead to querying being slow, especially when used with ",Object(l.b)("inlineCode",{parentName:"li"},"page.waitForSelector(selector[, options])")," method.")),Object(l.b)("h2",{id:"selecting-elements-that-contain-other-elements"},"Selecting elements that contain other elements"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},":has()")," pseudo-class is an ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:has"}),"experimental CSS pseudo-class"),". It returns an element if any of the selectors passed as parameters relative to the :scope of the given element match at least one element."),Object(l.b)("p",null,"Following snippet returns text content of an ",Object(l.b)("inlineCode",{parentName:"p"},"<article>")," element that has a ",Object(l.b)("inlineCode",{parentName:"p"},"<div class=promo>")," inside."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.textContent('article:has(div.promo)');\n")),Object(l.b)("h2",{id:"selecting-elements-matching-one-of-the-conditions"},"Selecting elements matching one of the conditions"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},":is()")," pseudo-class is an ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/:is"}),"experimental CSS pseudo-class"),". It is a function that takes a selector list as its argument, and selects any element that can be selected by one of the selectors in that list. This is useful for writing large selectors in a more compact form."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// Clicks a <button> that has either a "Log in" or "Sign in" text.\nawait page.click(\'button:is(:text("Log in"), :text("Sign in"))\');\n')),Object(l.b)("h2",{id:"selecting-elements-by-text"},"Selecting elements by text"),Object(l.b)("p",null,"The ",Object(l.b)("inlineCode",{parentName:"p"},":text")," pseudo-class matches elements that have a text node child with specific text. It is similar to the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#basic-text-selectors"}),"text")," engine, but can be used in combination with other ",Object(l.b)("inlineCode",{parentName:"p"},"css")," selector extensions. There are a few variations that support different arguments:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},':text("substring")'),' - Matches when element\'s text contains "substring" somewhere. Matching is case-insensitive. Matching also normalizes whitespace, for example it turns multiple spaces into one, turns line breaks into spaces and ignores leading and trailing whitespace.'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},':text-is("string")'),' - Matches when element\'s text equals the "string". Matching is case-insensitive and normalizes whitespace.'),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'button:text("Sign in")')," - Text selector may be combined with regular CSS."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},':text-matches("[+-]?\\\\d+")')," - Matches text against a regular expression. Note that special characters like back-slash ",Object(l.b)("inlineCode",{parentName:"li"},"\\"),", quotes ",Object(l.b)("inlineCode",{parentName:"li"},'"'),", square brackets ",Object(l.b)("inlineCode",{parentName:"li"},"[]")," and more should be escaped. Learn more about ",Object(l.b)("a",Object(n.a)({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp"}),"regular expressions"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},':text-matches("value", "i")')," - Matches text against a regular expression with specified flags.")),Object(l.b)("p",null,'Click a button with text "Sign in":'),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.click('button:text(\"Sign in\")');\n")),Object(l.b)("h2",{id:"selecting-elements-in-shadow-dom"},"Selecting elements in Shadow DOM"),Object(l.b)("p",null,"Our ",Object(l.b)("inlineCode",{parentName:"p"},"css")," and ",Object(l.b)("inlineCode",{parentName:"p"},"text")," engines pierce the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/Web_Components/Using_shadow_DOM"}),"Shadow DOM")," by default:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"First it searches for the elements in the light DOM in the iteration order, and"),Object(l.b)("li",{parentName:"ul"},"Then it searches recursively inside open shadow roots in the iteration order.")),Object(l.b)("p",null,"In particular, in ",Object(l.b)("inlineCode",{parentName:"p"},"css")," engines, any ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Descendant_combinator"}),"Descendant combinator")," or ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/Child_combinator"}),"Child combinator")," pierces an arbitrary number of open shadow roots, including the implicit descendant combinator at the start of the selector. It does not search inside closed shadow roots or iframes."),Object(l.b)("p",null,"If you'd like to opt-out of this behavior, you can use ",Object(l.b)("inlineCode",{parentName:"p"},":light")," CSS extension or ",Object(l.b)("inlineCode",{parentName:"p"},"text:light")," selector engine. They do not pierce shadow roots."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"await page.click(':light(.article > .header)');\n")),Object(l.b)("p",null,"More advanced Shadow DOM use cases:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),"<article>\n  <div>In the light dom</div>\n  <div slot='myslot'>In the light dom, but goes into the shadow slot</div>\n  #shadow-root\n    <div class='in-the-shadow'>\n      <span class='content'>\n        In the shadow dom\n        #shadow-root\n          <li id='target'>Deep in the shadow</li>\n      </span>\n    </div>\n    <slot name='myslot'></slot>\n</article>\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Both ",Object(l.b)("inlineCode",{parentName:"li"},'"article div"')," and ",Object(l.b)("inlineCode",{parentName:"li"},'":light(article div)"')," match the first ",Object(l.b)("inlineCode",{parentName:"li"},"<div>In the light dom</div>"),"."),Object(l.b)("li",{parentName:"ul"},"Both ",Object(l.b)("inlineCode",{parentName:"li"},'"article > div"')," and ",Object(l.b)("inlineCode",{parentName:"li"},'":light(article > div)"')," match two ",Object(l.b)("inlineCode",{parentName:"li"},"div")," elements that are direct children of the ",Object(l.b)("inlineCode",{parentName:"li"},"article"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"article .in-the-shadow"')," matches the ",Object(l.b)("inlineCode",{parentName:"li"},"<div class='in-the-shadow'>"),", piercing the shadow root, while ",Object(l.b)("inlineCode",{parentName:"li"},'":light(article .in-the-shadow)"')," does not match anything."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'":light(article div > span)"')," does not match anything, because both light-dom ",Object(l.b)("inlineCode",{parentName:"li"},"div")," elements do not contain a ",Object(l.b)("inlineCode",{parentName:"li"},"span"),"."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"article div > span"')," matches the ",Object(l.b)("inlineCode",{parentName:"li"},"<span class='content'>"),", piercing the shadow root."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"article > .in-the-shadow"')," does not match anything, because ",Object(l.b)("inlineCode",{parentName:"li"},"<div class='in-the-shadow'>")," is not a direct child of ",Object(l.b)("inlineCode",{parentName:"li"},"article")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'":light(article > .in-the-shadow)"')," does not match anything."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},'"article li#target"')," matches the ",Object(l.b)("inlineCode",{parentName:"li"},"<li id='target'>Deep in the shadow</li>"),", piercing two shadow roots.")),Object(l.b)("h2",{id:"selecting-elements-based-on-layout"},"Selecting elements based on layout"),Object(l.b)("p",null,"Playwright can select elements based on the page layout. These can be combined with regular CSS for better results, for example ",Object(l.b)("inlineCode",{parentName:"p"},'input:right-of(:text("Password"))'),' matches an input field that is to the right of text "Password".'),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},"Layout selectors depend on the page layout and may produce unexpected results. For example, a different element could be matched when layout changes by one pixel."))),Object(l.b)("p",null,"Layout selectors use ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect"}),"bounding client rect")," to compute distance and relative position of the elements."),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":right-of(inner > selector)")," - Matches elements that are to the right of any element matching the inner selector."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":left-of(inner > selector)")," - Matches elements that are to the left of any element matching the inner selector."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":above(inner > selector)")," - Matches elements that are above any of the elements matching the inner selector."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":below(inner > selector)")," - Matches elements that are below any of the elements matching the inner selector."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},":near(inner > selector)")," - Matches elements that are near (within 50 CSS pixels) any of the elements matching the inner selector.")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// Fill an input to the right of \"Username\".\nawait page.fill('input:right-of(:text(\"Username\"))');\n\n// Click a button near the promo card.\nawait page.click('button:near(.promo-card)');\n")),Object(l.b)("h2",{id:"xpath-selectors"},"XPath selectors"),Object(l.b)("p",null,"XPath selectors are equivalent to calling ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.mozilla.org/en/docs/Web/API/Document/evaluate"}),Object(l.b)("inlineCode",{parentName:"a"},"Document.evaluate")),". Example: ",Object(l.b)("inlineCode",{parentName:"p"},"xpath=//html/body"),"."),Object(l.b)("p",null,"Selector starting with ",Object(l.b)("inlineCode",{parentName:"p"},"//")," or ",Object(l.b)("inlineCode",{parentName:"p"},"..")," is assumed to be an xpath selector. For example, Playwright converts ",Object(l.b)("inlineCode",{parentName:"p"},"'//html/body'")," to ",Object(l.b)("inlineCode",{parentName:"p"},"'xpath=//html/body'"),"."),Object(l.b)("div",{className:"admonition admonition-note alert alert--secondary"},Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-heading"}),Object(l.b)("h5",{parentName:"div"},Object(l.b)("span",Object(n.a)({parentName:"h5"},{className:"admonition-icon"}),Object(l.b)("svg",Object(n.a)({parentName:"span"},{xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"}),Object(l.b)("path",Object(n.a)({parentName:"svg"},{fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"})))),"note")),Object(l.b)("div",Object(n.a)({parentName:"div"},{className:"admonition-content"}),Object(l.b)("p",{parentName:"div"},Object(l.b)("inlineCode",{parentName:"p"},"xpath")," does not pierce shadow roots"))),Object(l.b)("h2",{id:"id-data-testid-data-test-id-data-test-selectors"},"id, data-testid, data-test-id, data-test selectors"),Object(l.b)("p",null,"Attribute engines are selecting based on the corresponding attribute value. For example: ",Object(l.b)("inlineCode",{parentName:"p"},"data-test-id=foo")," is equivalent to ",Object(l.b)("inlineCode",{parentName:"p"},'css=[data-test-id="foo"]'),", and ",Object(l.b)("inlineCode",{parentName:"p"},"id:light=foo")," is equivalent to ",Object(l.b)("inlineCode",{parentName:"p"},'css:light=[id="foo"]'),"."),Object(l.b)("h2",{id:"chaining-selectors"},"Chaining selectors"),Object(l.b)("p",null,"Selectors defined as ",Object(l.b)("inlineCode",{parentName:"p"},"engine=body")," or in short-form can be combined with the ",Object(l.b)("inlineCode",{parentName:"p"},">>")," token, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},"selector1 >> selector2 >> selectors3"),". When selectors are chained, next one is queried relative to the previous one's result."),Object(l.b)("p",null,"For example,"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{}),"css=article >> css=.bar > .baz >> css=span[attr=value]\n")),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"document\n  .querySelector('article')\n  .querySelector('.bar > .baz')\n  .querySelector('span[attr=value]')\n")),Object(l.b)("p",null,"If a selector needs to include ",Object(l.b)("inlineCode",{parentName:"p"},">>")," in the body, it should be escaped inside a string to not be confused with chaining separator, e.g. ",Object(l.b)("inlineCode",{parentName:"p"},'text="some >> text"'),"."),Object(l.b)("h3",{id:"intermediate-matches"},"Intermediate matches"),Object(l.b)("p",null,"By default, chained selectors resolve to an element queried by the last selector. A selector can be prefixed with ",Object(l.b)("inlineCode",{parentName:"p"},"*")," to capture elements that are queried by an intermediate selector."),Object(l.b)("p",null,"For example, ",Object(l.b)("inlineCode",{parentName:"p"},"css=article >> text=Hello")," captures the element with the text ",Object(l.b)("inlineCode",{parentName:"p"},"Hello"),", and ",Object(l.b)("inlineCode",{parentName:"p"},"*css=article >> text=Hello")," (note the ",Object(l.b)("inlineCode",{parentName:"p"},"*"),") captures the ",Object(l.b)("inlineCode",{parentName:"p"},"article")," element that contains some element with the text ",Object(l.b)("inlineCode",{parentName:"p"},"Hello"),"."),Object(l.b)("h2",{id:"best-practices"},"Best practices"),Object(l.b)("p",null,"The choice of selectors determines the resiliency of automation scripts. To reduce the maintenance burden, we recommend prioritizing user-facing attributes and explicit contracts."),Object(l.b)("h3",{id:"prioritize-user-facing-attributes"},"Prioritize user-facing attributes"),Object(l.b)("p",null,"Attributes like text content, input placeholder, accessibility roles and labels are user-facing attributes that change rarely. These attributes are not impacted by DOM structure changes."),Object(l.b)("p",null,"The following examples use the built-in ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#basic-text-selectors"}),"text")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#basic-css-selectors"}),"css")," selector engines."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'// queries "Login" text selector\nawait page.click(\'text="Login"\');\nawait page.click(\'"Login"\'); // short-form\n\n// queries "Search GitHub" placeholder attribute\nawait page.fill(\'css=[placeholder="Search GitHub"]\');\nawait page.fill(\'[placeholder="Search GitHub"]\'); // short-form\n\n// queries "Close" accessibility label\nawait page.click(\'css=[aria-label="Close"]\');\nawait page.click(\'[aria-label="Close"]\'); // short-form\n\n// combine role and text queries\nawait page.click(\'css=nav >> text=Login\');\n')),Object(l.b)("h3",{id:"define-explicit-contract"},"Define explicit contract"),Object(l.b)("p",null,"When user-facing attributes change frequently, it is recommended to use explicit test ids, like ",Object(l.b)("inlineCode",{parentName:"p"},"data-test-id"),". These ",Object(l.b)("inlineCode",{parentName:"p"},"data-*")," attributes are supported by the ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#basic-css-selectors"}),"css")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#id-data-testid-data-test-id-data-test-selectors"}),"id selectors"),"."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-html"}),'<button data-test-id="directions">Itin\xe9raire</button>\n')),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// queries data-test-id attribute with css\nawait page.click('css=[data-test-id=directions]');\nawait page.click('[data-test-id=directions]'); // short-form\n\n// queries data-test-id with id\nawait page.click('data-test-id=directions');\n")),Object(l.b)("h3",{id:"avoid-selectors-tied-to-implementation"},"Avoid selectors tied to implementation"),Object(l.b)("p",null,Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#xpath-selectors"}),"xpath")," and ",Object(l.b)("a",Object(n.a)({parentName:"p"},{href:"#basic-css-selectors"}),"css")," can be tied to the DOM structure or implementation. These selectors can break when the DOM structure changes."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"// avoid long css or xpath chains\nawait page.click('#tsf > div:nth-child(2) > div.A8SBwf > div.RNNXgb > div > div.a4bIc > input');\nawait page.click('//*[@id=\"tsf\"]/div[2]/div[1]/div[1]/div/div[2]/input');\n")))}b.isMDXComponent=!0},901:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return h}));var n=a(0),i=a.n(n);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function r(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var o=i.a.createContext({}),b=function(e){var t=i.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,o=r(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,h=p["".concat(c,".").concat(m)]||p[m]||d[m]||l;return a?i.a.createElement(h,s(s({ref:t},o),{},{components:a})):i.a.createElement(h,s({ref:t},o))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,c=new Array(l);c[0]=m;var s={};for(var r in t)hasOwnProperty.call(t,r)&&(s[r]=t[r]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var o=2;o<l;o++)c[o]=a[o];return i.a.createElement.apply(null,c)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},902:function(e,t,a){"use strict";function n(e){var t,a,i="";if("string"==typeof e||"number"==typeof e)i+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(i&&(i+=" "),i+=a);else for(t in e)e[t]&&(i&&(i+=" "),i+=t);return i}t.a=function(){for(var e,t,a=0,i="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(i&&(i+=" "),i+=t);return i}},903:function(e,t,a){"use strict";var n=a(0),i=a(904);t.a=function(){var e=Object(n.useContext)(i.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},904:function(e,t,a){"use strict";var n=a(0),i=Object(n.createContext)(void 0);t.a=i},905:function(e,t,a){"use strict";a(0),a(903),a(902),a(55)},906:function(e,t,a){"use strict";a(3),a(0)}}]);