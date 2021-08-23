"use strict";(self.webpackChunkplaywright_dev=self.webpackChunkplaywright_dev||[]).push([[3089],{4428:function(e,t,n){n.r(t),n.d(t,{default:function(){return d}});var r=n(7294),a=n(2263),u=n(8258),l=n(3146),i=n(6742),o=n(4973);var s=function(e){var t=e.metadata,n=t.previousPage,a=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,o.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},n&&r.createElement(i.Z,{className:"pagination-nav__link",to:n},r.createElement("div",{className:"pagination-nav__label"},"\xab"," ",r.createElement(o.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")))),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},a&&r.createElement(i.Z,{className:"pagination-nav__link",to:a},r.createElement("div",{className:"pagination-nav__label"},r.createElement(o.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")," ","\xbb"))))},c=n(5601),m=n(9306);var d=function(e){var t=e.metadata,n=e.items,i=e.sidebar,o=(0,a.Z)().siteConfig.title,d=t.blogDescription,p=t.blogTitle,h="/"===t.permalink?o:p;return r.createElement(u.Z,{title:h,description:d,wrapperClassName:m.kM.wrapper.blogPages,pageClassName:m.kM.page.blogListPage,searchMetadatas:{tag:"blog_posts_list"}},r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement("aside",{className:"col col--3"},r.createElement(c.Z,{sidebar:i})),r.createElement("main",{className:"col col--7"},n.map((function(e){var t=e.content;return r.createElement(l.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(s,{metadata:t})))))}},3146:function(e,t,n){n.d(t,{Z:function(){return f}});var r=n(7294),a=n(6010),u=n(3905),l=n(4973),i=n(6742),o=n(9306),s=n(7277),c=n(1217),m=n(6146),d="blogPostTitle_GeHD",p="blogPostData_291c",h="blogPostDetailsFull_3kfx";var f=function(e){var t,n,f,v=(n=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return n(t,(0,l.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),g=e.children,D=e.frontMatter,F=e.metadata,E=e.truncated,_=e.isBlogPostPage,b=void 0!==_&&_,k=F.date,A=F.formattedDate,C=F.permalink,w=F.tags,Z=F.readingTime,N=F.title,x=F.editUrl,y=D.author,I=D.image,L=D.keywords,T=D.author_url||D.authorURL,B=D.author_title||D.authorTitle,z=D.author_image_url||D.authorImageURL;return r.createElement(r.Fragment,null,r.createElement(c.Z,{keywords:L,image:I}),r.createElement("article",{className:b?void 0:"margin-bottom--xl"},(f=b?"h1":"h2",r.createElement("header",null,r.createElement(f,{className:d},b?N:r.createElement(i.Z,{to:C},N)),r.createElement("div",{className:(0,a.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:k},A),Z&&r.createElement(r.Fragment,null," \xb7 ",v(Z))),r.createElement("div",{className:"avatar margin-vert--md"},z&&r.createElement(i.Z,{className:"avatar__photo-link avatar__photo",href:T},r.createElement("img",{src:z,alt:y})),r.createElement("div",{className:"avatar__intro"},y&&r.createElement(r.Fragment,null,r.createElement("div",{className:"avatar__name"},r.createElement(i.Z,{href:T},y)),r.createElement("small",{className:"avatar__subtitle"},B)))))),r.createElement("div",{className:"markdown"},r.createElement(u.Zo,{components:s.Z},g)),(w.length>0||E)&&r.createElement("footer",{className:(0,a.Z)("row docusaurus-mt-lg",(t={},t[h]=b,t))},w.length>0&&r.createElement("div",{className:"col"},r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),w.map((function(e){var t=e.label,n=e.permalink;return r.createElement(i.Z,{key:n,className:"margin-horiz--sm",to:n},t)}))),b&&x&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(m.Z,{editUrl:x})),!b&&E&&r.createElement("div",{className:"col text--right"},r.createElement(i.Z,{to:F.permalink,"aria-label":"Read more about "+N},r.createElement("b",null,r.createElement(l.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More")))))))}},5601:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(7294),a=n(6010),u=n(6742),l="sidebar_2ahu",i="sidebarItemTitle_2hhb",o="sidebarItemList_2xAf",s="sidebarItem_2UVv",c="sidebarItemLink_1RT6",m="sidebarItemLinkActive_12pM",d=n(4973);function p(e){var t=e.sidebar;return 0===t.items.length?null:r.createElement("nav",{className:(0,a.Z)(l,"thin-scrollbar"),"aria-label":(0,d.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,a.Z)(i,"margin-bottom--md")},t.title),r.createElement("ul",{className:o},t.items.map((function(e){return r.createElement("li",{key:e.permalink,className:s},r.createElement(u.Z,{isNavLink:!0,to:e.permalink,className:c,activeClassName:m},e.title))}))))}},6146:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(7294),a=n(4973),u=n(2122),l=n(9756),i=n(6010),o="iconEdit_2_ui",s=function(e){var t=e.className,n=(0,l.Z)(e,["className"]);return r.createElement("svg",(0,u.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(o,t),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};function c(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener"},r.createElement(s,null),r.createElement(a.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},8219:function(e,t,n){var r=n(2122),a=n(9756),u=n(7294),l=n(6010),i=n(6742),o=n(4996),s=n(5977),c=n(9306),m=n(8617),d=n(3919),p="dropdown__link--active";function h(e){var t=e.activeBasePath,n=e.activeBaseRegex,l=e.to,c=e.href,h=e.label,f=e.activeClassName,v=void 0===f?"navbar__link--active":f,g=e.prependBaseUrlToHref,D=e["data-language-prefix"],F=(0,a.Z)(e,["activeBasePath","activeBaseRegex","to","href","label","activeClassName","prependBaseUrlToHref","data-language-prefix"]),E=(0,o.Z)(l),_=(0,o.Z)(t),b=(0,o.Z)(c,{forcePrependBaseUrl:!0}),k=h&&c&&!(0,d.Z)(c),A=v===p,C=(0,s.TH)();if(D){c="pathname://"+D+C.pathname.replace(/^(\/(java|dotnet|python))?\/(.*)/,"$3")+C.hash,F.autoAddBaseUrl=!1,F.target="_self";var w=["java","dotnet","python"].some((function(e){return C.pathname.startsWith("/"+e)}));(C.pathname.startsWith(D)&&w&&D.length>1||1===D.length&&!w)&&(F.className+=" "+v)}return u.createElement(i.Z,(0,r.Z)({},c?{href:g?b:c}:Object.assign({isNavLink:!0,activeClassName:v,to:E},t||n?{isActive:function(e,t){return n?new RegExp(n).test(t.pathname):t.pathname.startsWith(_)}}:null),F),k?u.createElement("span",null,h,u.createElement(m.Z,A&&{width:12,height:12})):h)}function f(e){var t,n=e.items,i=e.position,o=e.className,s=(0,a.Z)(e,["items","position","className"]),c=(0,u.useRef)(null),m=(0,u.useRef)(null),d=(0,u.useState)(!1),f=d[0],v=d[1];(0,u.useEffect)((function(){var e=function(e){c.current&&!c.current.contains(e.target)&&v(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),function(){document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[c]);var g=function(e,t){return void 0===t&&(t=!1),(0,l.Z)({"navbar__item navbar__link":!t,dropdown__link:t},e)};return n?u.createElement("div",{ref:c,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--left":"left"===i,"dropdown--right":"right"===i,"dropdown--show":f})},u.createElement(h,(0,r.Z)({className:g(o)},s,{onClick:s.to?void 0:function(e){return e.preventDefault()},onKeyDown:function(e){"Enter"===e.key&&(e.preventDefault(),v(!f))}}),null!=(t=s.children)?t:s.label),u.createElement("ul",{ref:m,className:"dropdown__menu"},n.map((function(e,t){var l=e.className,i=(0,a.Z)(e,["className"]);return u.createElement("li",{key:t},u.createElement(h,(0,r.Z)({onKeyDown:function(e){if(t===n.length-1&&"Tab"===e.key){e.preventDefault(),v(!1);var r=c.current.nextElementSibling;r&&r.focus()}},activeClassName:p,className:g(l,!0)},i)))})))):u.createElement(h,(0,r.Z)({className:g(o)},s))}function v(e){var t,n,i,o=e.items,m=e.className,d=(e.position,(0,a.Z)(e,["items","className","position"])),p=(0,u.useRef)(null),f=(0,s.TH)().pathname,v=(0,u.useState)((function(){var e;return null==(e=!(null!=o&&o.some((function(e){return(0,c.Mg)(e.to,f)}))))||e})),g=v[0],D=v[1],F=function(e,t){return void 0===t&&(t=!1),(0,l.Z)("menu__link",{"menu__link--sublist":t},e)};if(!o)return u.createElement("li",{className:"menu__list-item"},u.createElement(h,(0,r.Z)({className:F(m)},d)));var E=null!=(t=p.current)&&t.scrollHeight?(null==(n=p.current)?void 0:n.scrollHeight)+"px":void 0;return u.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":g})},u.createElement(h,(0,r.Z)({role:"button",className:F(m,!0)},d,{onClick:function(e){e.preventDefault(),D((function(e){return!e}))}}),null!=(i=d.children)?i:d.label),u.createElement("ul",{className:"menu__list",ref:p,style:{height:g?void 0:E}},o.map((function(e,t){var n=e.className,l=(0,a.Z)(e,["className"]);return u.createElement("li",{className:"menu__list-item",key:t},u.createElement(h,(0,r.Z)({activeClassName:"menu__link--active",className:F(n)},l,{onClick:d.onClick})))}))))}t.Z=function(e){var t=e.mobile,n=void 0!==t&&t,r=(0,a.Z)(e,["mobile"]),l=n?v:f;return u.createElement(l,r)}},4535:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(8695),u="loadingRing_3atr";function l(e){var t=e.className;return r.createElement("div",{className:(0,a.Z)(u,t)},r.createElement("div",null),r.createElement("div",null),r.createElement("div",null),r.createElement("div",null))}},3551:function(e,t,n){n.d(t,{w:function(){return c}});var r=n(8173),a=n(2137),u=n(7757),l=n.n(u),i=n(5850),o=n.n(i),s=n(8141);function c(e){return m.apply(this,arguments)}function m(){return(m=(0,a.Z)(l().mark((function e(t){var n,a,u;return l().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=3,fetch(t+"search-index.json?_="+s.rx);case 3:return e.next=5,e.sent.json();case 5:return n=e.sent,a=n.map((function(e,t){var n=e.documents,r=e.index;return{type:t,documents:n,index:o().Index.load(r)}})),u=n.reduce((function(e,t){for(var n,a=(0,r.Z)(t.index.invertedIndex);!(n=a()).done;){var u=n.value;/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(u[0][0])&&e.add(u[0])}return e}),new Set),e.abrupt("return",{wrappedIndexes:a,zhDictionary:Array.from(u)});case 9:return e.abrupt("return",{wrappedIndexes:[],zhDictionary:[]});case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}},3636:function(e,t,n){n.d(t,{Z:function(){return q}});var r=n(8141),a=n(8173),u=n(2137),l=n(7757),i=n.n(l),o=n(7294),s=n(8695),c=n(2263),m=n(412),d=n(5977),p=n(3551),h=n(8938),f=n(6092),v=n(5401),g=n(5579),D="searchBar_2moK",F="dropdownMenu_17SC",E="suggestion_1kAZ",_="cursor_6rPN",b="hitTree_2sUa",k="hitIcon_3jP2",A="hitPath_3Lax",C="noResultsIcon_1rmk",w="hitFooter_1JML",Z="hitWrapper_4Hzp",N="hitTitle_2AMl",x="hitAction_2kg3",y="noResults_1vI5",I="searchBarContainer_2P1H",L="searchBarLoadingRing_1FtX",T="searchIndexLoading_1eRR",B="input_1tay",z="hint_1WuO",R="suggestions_1cWc",M="dataset_3Xc2",P="empty_2isC";function H(e){var t=e.document,n=e.type,r=e.page,a=e.metadata,u=e.tokens,l=e.isInterOfTree,i=e.isLastOfTree,o=0===n,s=1===n,c=[];l?c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v42M20 27H8.3"></path></g></svg>'):i&&c.push('<svg viewBox="0 0 24 54"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M8 6v21M20 27H8.3"></path></g></svg>');var m=c.map((function(e){return'<span class="'+b+'">'+e+"</span>"})),d='<span class="'+k+'">'+(o?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>':s?'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"></path></svg>':'<svg width="20" height="20" viewBox="0 0 20 20"><path d="M17 5H3h14zm0 5H3h14zm0 5H3h14z" stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linejoin="round"></path></svg>')+"</span>",p=['<span class="'+N+'">'+(0,v.o)(t.t,(0,g.m)(a,"t"),u)+"</span>"];return o||p.push('<span class="'+A+'">'+(0,f.C)(r.t||(t.u.startsWith("/docs/api-reference/")?"API Reference":""),u)+"</span>"),[].concat(m,[d,'<span class="'+Z+'">'],p,["</span>",'<span class="'+x+'"><svg width="20" height="20" viewBox="0 0 20 20"><g stroke="currentColor" fill="none" fill-rule="evenodd" stroke-linecap="round" stroke-linejoin="round"><path d="M18 3v4c0 2-2 4-4 4H2"></path><path d="M8 17l-6-6 6-6"></path></g></svg></span>']).join("")}function S(){return'<span class="'+y+'"><span class="'+C+'"><svg width="40" height="40" viewBox="0 0 20 20" fill="none" fill-rule="evenodd" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path d="M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"></path></svg></span><span>'+r.Iz.no_results+"</span></span>"}var j=n(4535);function U(){return W.apply(this,arguments)}function W(){return(W=(0,u.Z)(i().mark((function e(){var t,r;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([n.e(4485),n.e(213)]).then(n.t.bind(n,4485,23));case 2:return t=e.sent,(r=t.default).noConflict?r.noConflict():t.noConflict&&t.noConflict(),e.abrupt("return",r);case 6:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var O="_highlight";var q=function(e){var t,n=e.handleSearchBarToggle,l=(0,c.Z)().siteConfig.baseUrl,f=(0,d.k6)(),v=(0,d.TH)(),g=(0,o.useRef)(null),b=(0,o.useRef)("empty"),k=(0,o.useRef)(!1),A=(0,o.useState)(!1),C=A[0],Z=A[1],N=(0,o.useState)(!1),x=N[0],y=N[1],W=(0,o.useCallback)((0,u.Z)(i().mark((function e(){var t,n,u,o,s,c,m;return i().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if("empty"===b.current){e.next=2;break}return e.abrupt("return");case 2:return b.current="loading",Z(!0),e.next=6,Promise.all([(0,p.w)(l),U()]);case 6:t=e.sent,n=t[0],u=n.wrappedIndexes,o=n.zhDictionary,s=t[1],c=s(g.current,{hint:!1,autoselect:!0,cssClasses:{root:D,noPrefix:!0,dropdownMenu:F,input:B,hint:z,suggestions:R,suggestion:E,cursor:_,dataset:M,empty:P}},[{source:(0,h.v)(u,o,r.qo),templates:{suggestion:H,empty:S,footer:function(e){var t=e.query;if(!e.isEmpty){var n=document.createElement("a"),a=l+"search?q="+encodeURIComponent(t);n.href=a,n.textContent=r.Iz.see_all_results,n.addEventListener("click",(function(e){e.ctrlKey||e.metaKey||(e.preventDefault(),c.autocomplete.close(),f.push(a))}));var u=document.createElement("div");return u.className=w,u.appendChild(n),u}}}}]).on("autocomplete:selected",(function(e,t){var n=t.document,u=n.u,l=n.h,i=t.tokens,o=u;if(r.vc&&i.length>0){for(var s,c=new URLSearchParams,m=(0,a.Z)(i);!(s=m()).done;){var d=s.value;c.append(O,d)}o+="?"+c.toString()}l&&(o+=l),f.push(o)})),b.current="done",Z(!1),k.current&&((m=g.current).value&&c.autocomplete.open(),m.focus());case 15:case"end":return e.stop()}}),e)}))),[l,f]);(0,o.useEffect)((function(){if(r.vc){var e=m.Z.canUseDOM?new URLSearchParams(v.search).getAll(O):[];0!==e.length&&setTimeout((function(){var t=document.querySelector("article");if(t){var n=new r.vc(t);n.unmark(),n.mark(e)}}))}}),[v.search]);var q=(0,o.useCallback)((function(){k.current=!0,W(),null==n||n(!0)}),[n,W]),K=(0,o.useCallback)((function(){null==n||n(!1)}),[n]),Q=(0,o.useCallback)((function(){W()}),[W]),X=(0,o.useCallback)((function(e){e.target.value&&y(!0)}),[]);return o.createElement("div",{className:(0,s.Z)("navbar__search",I,(t={},t[T]=C&&x,t))},o.createElement("input",{placeholder:r.Iz.search_placeholder,"aria-label":"Search",className:"navbar__search-input",onMouseEnter:Q,onFocus:q,onBlur:K,onChange:X,ref:g}),o.createElement(j.Z,{className:L}))}},8938:function(e,t,n){n.d(t,{v:function(){return c}});var r=n(8173),a=n(5850),u=n.n(a);function l(e,t){var n=[];return function e(a,u){if(0!==a.length){var l=a[0];if(/(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/.test(l))for(var i,o=function(e,t){var n=[];return function e(a,u){for(var l,i=0,o=!1,s=(0,r.Z)(t);!(l=s()).done;){var c=l.value;if(a.substr(0,c.length)===c){var m={missed:u.missed,term:u.term.concat({value:c})};a.length>c.length?e(a.substr(c.length),m):n.push(m),o=!0}else for(var d=c.length-1;d>i;d-=1){var p=c.substr(0,d);if(a.substr(0,d)===p){i=d;var h={missed:u.missed,term:u.term.concat({value:p,trailing:!0})};a.length>d?e(a.substr(d),h):n.push(h),o=!0;break}}}o||(a.length>0?e(a.substr(1),{missed:u.missed+1,term:u.term}):u.term.length>0&&n.push(u))}(e,{missed:0,term:[]}),n.sort((function(e,t){var n=e.missed>0?1:0,r=t.missed>0?1:0;return n!==r?n-r:e.term.length-t.term.length})).map((function(e){return e.term}))}(l,t),s=(0,r.Z)(o);!(i=s()).done;){var c=i.value,m=u.concat.apply(u,c);e(a.slice(1),m)}else{var d=u.concat({value:l});e(a.slice(1),d)}}else n.push(u)}(e,[]),n}var i=n(8141);function o(e){return s(e).concat(s(e.filter((function(e){var t=e[e.length-1];return!t.trailing&&t.maybeTyping})),!0))}function s(e,t){return e.map((function(e){return{tokens:e.map((function(e){return e.value})),term:e.map((function(e){return{value:e.value,presence:u().Query.presence.REQUIRED,wildcard:(t?e.trailing||e.maybeTyping:e.trailing)?u().Query.wildcard.TRAILING:u().Query.wildcard.NONE}}))}}))}function c(e,t,n){return function(a,s){var c=function(e,t){if(1===t.length&&["ja","jp","th"].includes(t[0]))return u()[t[0]].tokenizer(e).map((function(e){return e.toString()}));var n=/[^-\s]+/g;return t.includes("zh")&&(n=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])+/g),e.toLowerCase().match(n)||[]}(a,i.dK);if(0!==c.length){var m=function(e,t){var n=l(e,t);if(0===n.length)return[{tokens:e,term:e.map((function(e){return{value:e,presence:u().Query.presence.REQUIRED,wildcard:u().Query.wildcard.LEADING|u().Query.wildcard.TRAILING}}))}];for(var a,s=(0,r.Z)(n);!(a=s()).done;){var c=a.value;c[c.length-1].maybeTyping=!0}for(var m,d,p=[],h=(0,r.Z)(i.dK);!(m=h()).done;){var f=m.value;if("en"===f)i._k||p.unshift(u().stopWordFilter);else{var v=u()[f];v.stopWordFilter&&p.unshift(v.stopWordFilter)}}if(p.length>0){var g=function(e){return p.reduce((function(e,t){return e.filter((function(e){return t(e.value)}))}),e)};d=[];for(var D,F=[],E=(0,r.Z)(n);!(D=E()).done;){var _=D.value,b=g(_);d.push(b),b.length<_.length&&b.length>0&&F.push(b)}n.push.apply(n,F)}else d=n.slice();for(var k,A=[],C=(0,r.Z)(d);!(k=C()).done;){var w=k.value;if(w.length>2)for(var Z=w.length-1;Z>=0;Z-=1)A.push(w.slice(0,Z).concat(w.slice(Z+1)))}return o(n).concat(o(A))}(c,t),d=[],p=function(){for(var t,a=h.value,u=a.term,l=a.tokens,i=function(){var a=t.value,i=a.documents,o=a.index,s=a.type;if(d.push.apply(d,o.query((function(e){for(var t,n=(0,r.Z)(u);!(t=n()).done;){var a=t.value;e.term(a.value,{wildcard:a.wildcard,presence:a.presence})}})).slice(0,n).filter((function(e){return!d.some((function(t){return t.document.i.toString()===e.ref}))})).slice(0,n-d.length).map((function(t){var n=i.find((function(e){return e.i.toString()===t.ref}));return{document:n,type:s,page:0!==s&&e[0].documents.find((function(e){return e.i===n.p})),metadata:t.matchData.metadata,tokens:l,score:t.score}}))),d.length>=n)return{v:"break|search"}},o=(0,r.Z)(e);!(t=o()).done;){var s=i();if("object"==typeof s)return s.v}};e:for(var h,f=(0,r.Z)(m);!(h=f()).done;){if("break|search"===p())break e}!function(e){e.forEach((function(e,t){e.index=t})),e.sort((function(t,n){var r=t.type>0&&t.page?e.findIndex((function(e){return e.document===t.page})):t.index,a=n.type>0&&n.page?e.findIndex((function(e){return e.document===n.page})):n.index;return-1===r&&(r=t.index),-1===a&&(a=n.index),r===a?0===t.type?-1:0===n.type?1:t.index-n.index:r-a}))}(d),function(e){e.forEach((function(t,n){n>0&&t.page&&e.some((function(e){return e.document===t.page}))&&(n<e.length-1&&e[n+1].page===t.page?t.isInterOfTree=!0:t.isLastOfTree=!0)}))}(d),s(d)}else s([])}}},8740:function(e,t,n){function r(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}n.d(t,{X:function(){return r}})},5579:function(e,t,n){function r(e,t){for(var n=[],r=0,a=Object.values(e);r<a.length;r++){var u=a[r];u[t]&&n.push.apply(n,u[t].position)}return n.sort((function(e,t){return e[0]-t[0]||t[1]-e[1]}))}n.d(t,{m:function(){return r}})},6092:function(e,t,n){n.d(t,{C:function(){return u}});var r=n(8173),a=n(8740);function u(e,t,n){for(var l,i=[],o=(0,r.Z)(t);!(l=o()).done;){var s=l.value,c=e.toLowerCase().indexOf(s);if(c>=0){c>0&&i.push(u(e.substr(0,c),t)),i.push("<mark>"+(0,a.X)(e.substr(c,s.length))+"</mark>");var m=c+s.length;m<e.length&&i.push(u(e.substr(m),t));break}}return 0===i.length?n?"<mark>"+(0,a.X)(e)+"</mark>":(0,a.X)(e):i.join("")}},5401:function(e,t,n){n.d(t,{o:function(){return o}});var r=n(8740),a=n(6092),u=/[0-9A-Z_a-z]+|(?:[\u3400-\u4DBF\u4E00-\u9FFC\uFA0E\uFA0F\uFA11\uFA13\uFA14\uFA1F\uFA21\uFA23\uFA24\uFA27-\uFA29]|[\uD840-\uD868\uD86A-\uD86C\uD86F-\uD872\uD874-\uD879\uD880-\uD883][\uDC00-\uDFFF]|\uD869[\uDC00-\uDEDD\uDF00-\uDFFF]|\uD86D[\uDC00-\uDF34\uDF40-\uDFFF]|\uD86E[\uDC00-\uDC1D\uDC20-\uDFFF]|\uD873[\uDC00-\uDEA1\uDEB0-\uDFFF]|\uD87A[\uDC00-\uDFE0]|\uD884[\uDC00-\uDF4A])/;function l(e){for(var t=[],n=0,r=e;r.length>0;){var a=r.match(u);if(!a){t.push(r);break}a.index>0&&t.push(r.substr(0,a.index)),t.push(a[0]),n+=a.index+a[0].length,r=e.substr(n)}return t}var i=n(8141);function o(e,t,n,r){void 0===r&&(r=i.Hk);for(var a={chunkIndex:-1},u=s(e,t,n,0,0,a),l=u.slice(0,a.chunkIndex),o=u[a.chunkIndex],c=[o.html],m=u.slice(a.chunkIndex+1),d=o.textLength,p=0,h=0,f=!1,v=!1;d<r;)if((p<=h||0===m.length)&&l.length>0){var g=l.pop();d+g.textLength<=r?(c.unshift(g.html),p+=g.textLength,d+=g.textLength):(f=!0,l.length=0)}else{if(!(m.length>0))break;var D=m.shift();d+D.textLength<=r?(c.push(D.html),h+=D.textLength,d+=D.textLength):(v=!0,m.length=0)}return(f||l.length>0)&&c.unshift("\u2026"),(v||m.length>0)&&c.push("\u2026"),c.join("")}function s(e,t,n,u,i,o){var c=[],m=t[u],d=m[0],p=m[1];if(d<i)(u+=1)<t.length&&c.push.apply(c,s(e,t,n,u,i));else{d>i&&c.push.apply(c,l(e.substring(i,d)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}}))),o&&(o.chunkIndex=c.length),c.push({html:(0,a.C)(e.substr(d,p),n,!0),textLength:p});var h=d+p;(u+=1)<t.length?c.push.apply(c,s(e,t,n,u,h)):h<e.length&&c.push.apply(c,l(e.substr(h)).map((function(e){return{html:(0,r.X)(e),textLength:e.length}})))}return c}},8141:function(e,t,n){n.d(t,{vc:function(){return i},rx:function(){return o},dK:function(){return u},_k:function(){return l},Hk:function(){return c},qo:function(){return s},Iz:function(){return m}});var r=n(5850),a=n.n(r);n(8465)(a()),n(4376).w(a()),n(3609)(a());var u=["en","zh"],l=!1,i=null,o="74d37f47",s=10,c=50,m={search_placeholder:"Search",see_all_results:"See all results",no_results:"No results.",search_results_for:'Search results for "{{ keyword }}"',search_the_documentation:"Search the documentation",count_documents_found_plural:"{{ count }} documents found",count_documents_found:"{{ count }} document found",no_documents_were_found:"No documents were found"}},4376:function(e,t,n){function r(e){var t=new RegExp("^[^"+e+"]+","u"),n=new RegExp("[^"+e+"]+$","u");return function(e){return e.update((function(e){return e.replace(t,"").replace(n,"")}))}}function a(e,t){e.trimmerSupport.generateTrimmer=r,e.zh=function(){this.pipeline.reset(),this.pipeline.add(e.zh.trimmer,e.zh.stopWordFilter),t&&(this.tokenizer=t)},t&&(e.zh.tokenizer=t),e.zh.wordCharacters="\\u3400-\\u4DBF\\u4E00-\\u9FFC\\uFA0E\\uFA0F\\uFA11\\uFA13\\uFA14\\uFA1F\\uFA21\\uFA23\\uFA24\\uFA27-\\uFA29\\u{20000}-\\u{2A6DD}\\u{2A700}-\\u{2B734}\\u{2B740}-\\u{2B81D}\\u{2B820}-\\u{2CEA1}\\u{2CEB0}-\\u{2EBE0}\\u{30000}-\\u{3134A}",e.zh.trimmer=e.trimmerSupport.generateTrimmer(e.zh.wordCharacters),e.Pipeline.registerFunction(e.zh.trimmer,"trimmer-zh"),e.zh.stopWordFilter=e.generateStopWordFilter("\u7684 \u4e00 \u4e0d \u5728 \u4eba \u6709 \u662f \u4e3a \u4ee5 \u4e8e \u4e0a \u4ed6 \u800c \u540e \u4e4b \u6765 \u53ca \u4e86 \u56e0 \u4e0b \u53ef \u5230 \u7531 \u8fd9 \u4e0e \u4e5f \u6b64 \u4f46 \u5e76 \u4e2a \u5176 \u5df2 \u65e0 \u5c0f \u6211 \u4eec \u8d77 \u6700 \u518d \u4eca \u53bb \u597d \u53ea \u53c8 \u6216 \u5f88 \u4ea6 \u67d0 \u628a \u90a3 \u4f60 \u4e43 \u5b83 \u5427 \u88ab \u6bd4 \u522b \u8d81 \u5f53 \u4ece \u5230 \u5f97 \u6253 \u51e1 \u513f \u5c14 \u8be5 \u5404 \u7ed9 \u8ddf \u548c \u4f55 \u8fd8 \u5373 \u51e0 \u65e2 \u770b \u636e \u8ddd \u9760 \u5566 \u4e86 \u53e6 \u4e48 \u6bcf \u4eec \u561b \u62ff \u54ea \u90a3 \u60a8 \u51ed \u4e14 \u5374 \u8ba9 \u4ecd \u5565 \u5982 \u82e5 \u4f7f \u8c01 \u867d \u968f \u540c \u6240 \u5979 \u54c7 \u55e1 \u5f80 \u54ea \u4e9b \u5411 \u6cbf \u54df \u7528 \u4e8e \u54b1 \u5219 \u600e \u66fe \u81f3 \u81f4 \u7740 \u8bf8 \u81ea".split(" ")),e.Pipeline.registerFunction(e.zh.stopWordFilter,"stopWordFilter-zh")}n.d(t,{w:function(){return a}})}}]);