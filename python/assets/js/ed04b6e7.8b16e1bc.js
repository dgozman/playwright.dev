"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[5293],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return h}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=a.createContext({}),p=function(e){var n=a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},c=function(e){var n=p(e.components);return a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=p(t),h=r,w=d["".concat(s,".").concat(h)]||d[h]||u[h]||i;return t?a.createElement(w,l(l({ref:n},c),{},{components:t})):a.createElement(w,l({ref:n},c))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var i=t.length,l=new Array(i);l[0]=d;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var p=2;p<i;p++)l[p]=t[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){var a=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},55064:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(67294),r=t(79443);var i=function(){var e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=t(86010),o="tabItem_1uMI",s="tabItemActive_2DSg";var p=37,c=39;var u=function(e){var n=e.lazy,t=e.block,r=e.defaultValue,u=e.values,d=e.groupId,h=e.className,w=i(),m=w.tabGroupChoices,g=w.setTabGroupChoices,f=(0,a.useState)(r),y=f[0],b=f[1],v=a.Children.toArray(e.children),k=[];if(null!=d){var O=m[d];null!=O&&O!==y&&u.some((function(e){return e.value===O}))&&b(O)}var P=function(e){var n=e.currentTarget,t=k.indexOf(n),a=u[t].value;b(a),null!=d&&(g(d,a),setTimeout((function(){var e,t,a,r,i,l,o,p;(e=n.getBoundingClientRect(),t=e.top,a=e.left,r=e.bottom,i=e.right,l=window,o=l.innerHeight,p=l.innerWidth,t>=0&&i<=p&&r<=o&&a>=0)||(n.scrollIntoView({block:"center",behavior:"smooth"}),n.classList.add(s),setTimeout((function(){return n.classList.remove(s)}),2e3))}),150))},N=function(e){var n,t;switch(e.keyCode){case c:var a=k.indexOf(e.target)+1;t=k[a]||k[0];break;case p:var r=k.indexOf(e.target)-1;t=k[r]||k[k.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":t},h)},u.map((function(e){var n=e.value,t=e.label;return a.createElement("li",{role:"tab",tabIndex:y===n?0:-1,"aria-selected":y===n,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":y===n}),key:n,ref:function(e){return k.push(e)},onKeyDown:N,onFocus:P,onClick:P},t)}))),n?(0,a.cloneElement)(v.filter((function(e){return e.props.value===y}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},v.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==y})}))))}},79443:function(e,n,t){var a=(0,t(67294).createContext)(void 0);n.Z=a},74864:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return o},metadata:function(){return s},toc:function(){return p},default:function(){return u}});var a=t(22122),r=t(19756),i=(t(67294),t(3905)),l=(t(55064),t(58215),{id:"installation",title:"Installation"}),o=void 0,s={unversionedId:"installation",id:"version-1.13.0/installation",isDocsHomePage:!1,title:"Installation",description:"This is a browser installation guide for Playwright Library. If you are using Playwright Test, please refer to installing browsers test guide.",source:"@site/versioned_docs/version-1.13.0/installation.mdx",sourceDirName:".",slug:"/installation",permalink:"/python/docs/1.13.0/installation",version:"1.13.0",frontMatter:{id:"installation",title:"Installation"},sidebar:"version-1.13.0/docs",previous:{title:"Inspector",permalink:"/python/docs/1.13.0/inspector"},next:{title:"Multi-page scenarios",permalink:"/python/docs/1.13.0/multi-pages"}},p=[{value:"Managing browser binaries",id:"managing-browser-binaries",children:[]},{value:"Install behind a firewall or a proxy",id:"install-behind-a-firewall-or-a-proxy",children:[]},{value:"Download from artifact repository",id:"download-from-artifact-repository",children:[]},{value:"Skip browser downloads",id:"skip-browser-downloads",children:[]},{value:"Download single browser binary",id:"download-single-browser-binary",children:[]},{value:"Stale browser removal",id:"stale-browser-removal",children:[]}],c={toc:p};function u(e){var n=e.components,t=(0,r.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"This is a browser installation guide for Playwright Library. If you are using Playwright Test, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/python/docs/1.13.0/test-install"},"installing browsers")," test guide."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#managing-browser-binaries"},"Managing browser binaries")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#install-behind-a-firewall-or-a-proxy"},"Install behind a firewall or a proxy")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#download-from-artifact-repository"},"Download from artifact repository")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#skip-browser-downloads"},"Skip browser downloads")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#download-single-browser-binary"},"Download single browser binary")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"#stale-browser-removal"},"Stale browser removal"))),(0,i.kt)("h2",{id:"managing-browser-binaries"},"Managing browser binaries"),(0,i.kt)("p",null,"Each version of Playwright needs specific versions of browser binaries to operate. By default, Playwright downloads Chromium, WebKit and Firefox browsers into the OS-specific cache folders:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"%USERPROFILE%\\AppData\\Local\\ms-playwright")," on Windows"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/Library/Caches/ms-playwright")," on MacOS"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"~/.cache/ms-playwright")," on Linux")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install playwright\nplaywright install\n")),(0,i.kt)("p",null,"These browsers will take a few hundred megabytes of disk space when installed:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"du -hs ~/Library/Caches/ms-playwright/*\n281M  chromium-XXXXXX\n187M  firefox-XXXX\n180M  webkit-XXXX\n")),(0,i.kt)("p",null,"You can override default behavior using environment variables. When installing Playwright, ask it to download browsers into a specific location:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\npip install playwright\nPLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers python -m playwright install\n\n# Windows with cmd.exe\nset PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\npip install playwright\nplaywright install\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\npip install playwright\nplaywright install\n')),(0,i.kt)("p",null,"When running Playwright scripts, ask it to search for browsers in a shared location."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\nPLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers python playwright_script.js\n\n# Windows with cmd.exe\nset PLAYWRIGHT_BROWSERS_PATH=%USERPROFILE%\\pw-browsers\npython playwright_script.py\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_BROWSERS_PATH="$env:USERPROFILE\\pw-browsers"\npython playwright_script.py\n')),(0,i.kt)("p",null,"Or you can opt into the hermetic install and place binaries in the local folder:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Linux/macOS\npip install playwright\nPLAYWRIGHT_BROWSERS_PATH=0 playwright install\n\n# Windows with cmd.exe\nset PLAYWRIGHT_BROWSERS_PATH=0\npip install playwright\nplaywright install\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_BROWSERS_PATH=0\npip install playwright\nplaywright install\n")),(0,i.kt)("p",null,"Playwright keeps track of packages that need those browsers and will garbage collect them as you update Playwright to the newer versions."),(0,i.kt)("div",{className:"admonition admonition-note alert alert--secondary"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.3 5.69a.942.942 0 0 1-.28-.7c0-.28.09-.52.28-.7.19-.18.42-.28.7-.28.28 0 .52.09.7.28.18.19.28.42.28.7 0 .28-.09.52-.28.7a1 1 0 0 1-.7.3c-.28 0-.52-.11-.7-.3zM8 7.99c-.02-.25-.11-.48-.31-.69-.2-.19-.42-.3-.69-.31H6c-.27.02-.48.13-.69.31-.2.2-.3.44-.31.69h1v3c.02.27.11.5.31.69.2.2.42.31.69.31h1c.27 0 .48-.11.69-.31.2-.19.3-.42.31-.69H8V7.98v.01zM7 2.3c-3.14 0-5.7 2.54-5.7 5.68 0 3.14 2.56 5.7 5.7 5.7s5.7-2.55 5.7-5.7c0-3.15-2.56-5.69-5.7-5.69v.01zM7 .98c3.86 0 7 3.14 7 7s-3.14 7-7 7-7-3.12-7-7 3.14-7 7-7z"}))),"note")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"Developers can opt-in in this mode via exporting ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_BROWSERS_PATH=$HOME/pw-browsers")," in their ",(0,i.kt)("inlineCode",{parentName:"p"},".bashrc"),"."))),(0,i.kt)("h2",{id:"install-behind-a-firewall-or-a-proxy"},"Install behind a firewall or a proxy"),(0,i.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,i.kt)("p",null,"Sometimes companies maintain an internal proxy that blocks direct access to the public resources. In this case, Playwright can be configured to download browsers via a proxy server."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\npip install playwright\nHTTPS_PROXY=https://192.0.2.1 playwright install\n\n# Windows with cmd.exe\nset HTTPS_PROXY=https://192.0.2.1\npip install playwright\nplaywright install\n\n# Windows with PowerShell\n$env:HTTPS_PROXY="https://192.0.2.1"\npip install playwright\nplaywright install\n')),(0,i.kt)("h2",{id:"download-from-artifact-repository"},"Download from artifact repository"),(0,i.kt)("p",null,"By default, Playwright downloads browsers from Microsoft CDN."),(0,i.kt)("p",null,"Sometimes companies maintain an internal artifact repository to host browser binaries. In this case, Playwright can be configured to download from a custom location using the ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST")," env variable."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'# Linux/macOS\npip install playwright\nPLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 playwright install\n\n# Windows with cmd.exe\nset PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1\npip install playwright\nplaywright install\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_DOWNLOAD_HOST="192.0.2.1"\npip install playwright\nplaywright install\n')),(0,i.kt)("p",null,"It is also possible to use a per-browser download hosts using ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_CHROMIUM_DOWNLOAD_HOST"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_FIREFOX_DOWNLOAD_HOST")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_WEBKIT_DOWNLOAD_HOST")," env variables that take precedence over ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_DOWNLOAD_HOST"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Linux/macOS\npip install playwright\nPLAYWRIGHT_FIREFOX_DOWNLOAD_HOST=203.0.113.3 PLAYWRIGHT_DOWNLOAD_HOST=192.0.2.1 python -m playwright install\n")),(0,i.kt)("h2",{id:"skip-browser-downloads"},"Skip browser downloads"),(0,i.kt)("p",null,"In certain cases, it is desired to avoid browser downloads altogether because browser binaries are managed separately."),(0,i.kt)("p",null,"This can be done by setting ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD")," variable before installation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"# Linux/macOS\npip install playwright\nPLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1 python -m playwright install\n\n# Windows with cmd.exe\nset PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\npip install playwright\nplaywright install\n\n# Windows with PowerShell\n$env:PLAYWRIGHT_SKIP_BROWSER_DOWNLOAD=1\npip install playwright\nplaywright install\n")),(0,i.kt)("h2",{id:"download-single-browser-binary"},"Download single browser binary"),(0,i.kt)("p",null,"Playwright downloads Chromium, Firefox and WebKit browsers by default. To install a specific browser, pass it as an argument during installation."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"pip install playwright\nplaywright install firefox\n")),(0,i.kt)("h2",{id:"stale-browser-removal"},"Stale browser removal"),(0,i.kt)("p",null,"Playwright keeps track of the clients that use its browsers. When there are no more clients that require particular version of the browser, that version is deleted from the system. That way you can safely use Playwright instances of different versions and at the same time, you don't waste disk space for the browsers that are no longer in use."),(0,i.kt)("p",null,"To opt-out from the unused browser removal, you can set the ",(0,i.kt)("inlineCode",{parentName:"p"},"PLAYWRIGHT_SKIP_BROWSER_GC=1")," environment variable."))}u.isMDXComponent=!0},86010:function(e,n,t){function a(e){var n,t,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(n=0;n<e.length;n++)e[n]&&(t=a(e[n]))&&(r&&(r+=" "),r+=t);else for(n in e)e[n]&&(r&&(r+=" "),r+=n);return r}function r(){for(var e,n,t=0,r="";t<arguments.length;)(e=arguments[t++])&&(n=a(e))&&(r&&(r+=" "),r+=n);return r}t.d(n,{Z:function(){return r}})}}]);