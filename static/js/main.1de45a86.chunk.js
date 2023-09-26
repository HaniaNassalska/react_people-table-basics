(this["webpackJsonpreact_people-table-basics"]=this["webpackJsonpreact_people-table-basics"]||[]).push([[0],{37:function(e,t,c){},39:function(e,t,c){},40:function(e,t,c){"use strict";c.r(t);var n=c(24),a=c(8),r=(c(35),c(36),c(37),c(2)),s=c(13),i=c.n(s),j=c(3),l=function(){return Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"title",children:"Home Page"})})})},o=c(25),b=(c(39),function(){return Object(j.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(j.jsx)("div",{className:"Loader__content"})})}),d=c(4),h=c(6),u=c(5),O=c(0);function x(){return(e=500,new Promise((function(t){return setTimeout(t,e)}))).then((function(){return fetch("https://mate-academy.github.io/react_people-table/api/people.json")})).then((function(e){return e.json()}));var e}var p=function(e){var t=e.person,c=e.getParentSlug,n=Object(r.q)().slug,s=Object(r.o)();return Object(j.jsxs)("tr",{"data-cy":"person",className:i()({"has-background-warning":n===t.slug}),children:[Object(j.jsx)("td",{children:Object(j.jsx)(a.b,{className:"f"===t.sex?"has-text-danger":"",to:"/people/".concat(t.slug),onClick:function(){return e="/people/".concat(t.slug),void s(e,{replace:!0});var e},children:t.name})}),Object(j.jsx)("td",{children:t.sex}),Object(j.jsx)("td",{children:t.born}),Object(j.jsx)("td",{children:t.died}),Object(j.jsx)("td",{children:c(t.motherName)}),Object(j.jsx)("td",{children:c(t.fatherName)})]})},m=function(){var e=function(){var e=Object(O.useState)([]),t=Object(u.a)(e,2),c=t[0],n=t[1],r=Object(O.useState)(!1),s=Object(u.a)(r,2),i=s[0],l=s[1],o=Object(O.useState)(!1),b=Object(u.a)(o,2),p=b[0],m=b[1];return Object(O.useEffect)((function(){var e=function(){var e=Object(h.a)(Object(d.a)().mark((function e(){var t;return Object(d.a)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return l(!0),e.prev=1,e.next=4,x();case 4:t=e.sent,n(t),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),m(!0);case 11:return e.prev=11,l(!1),e.finish(11);case 14:case"end":return e.stop()}}),e,null,[[1,8,11,14]])})));return function(){return e.apply(this,arguments)}}();e()}),[]),{people:c,isLoading:i,error:p,getParentSlug:function(e){var t=c.find((function(t){return t.name===e}));return t?Object(j.jsx)(a.b,{to:"/people/".concat(t.slug),className:"f"===t.sex?"has-text-danger":"",children:t.name}):e||"-"}}}(),t=e.people,c=e.error,n=e.isLoading,r=e.getParentSlug;return Object(j.jsx)("div",{"data-cy":"app",children:Object(j.jsx)("main",{className:"section",children:Object(j.jsxs)("div",{className:"container",children:[Object(j.jsx)("h1",{className:"title",children:"People Page"}),Object(j.jsx)("div",{className:"block",children:Object(j.jsxs)("div",{className:"box table-container",children:[n&&Object(j.jsx)(b,{}),c&&Object(j.jsx)("p",{"data-cy":"peopleLoadingError",className:"has-text-danger",children:"Something went wrong"}),!n&&t.length<1&&Object(j.jsx)("p",{"data-cy":"noPeopleMessage",children:"There are no people on the server"}),t.length>0&&Object(j.jsxs)("table",{"data-cy":"peopleTable",className:"table is-striped is-hoverable is-narrow is-fullwidth",children:[Object(j.jsx)("thead",{children:Object(j.jsxs)("tr",{children:[Object(j.jsx)("th",{children:"Name"}),Object(j.jsx)("th",{children:"Sex"}),Object(j.jsx)("th",{children:"Born"}),Object(j.jsx)("th",{children:"Died"}),Object(j.jsx)("th",{children:"Mother"}),Object(j.jsx)("th",{children:"Father"})]})}),Object(j.jsx)("tbody",{children:t.map((function(e){return Object(j.jsx)(p,{person:e,getParentSlug:r},Object(o.a)())}))})]})]})})]})})})},g=function(){return Object(j.jsx)("main",{className:"section",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)("h1",{className:"title",children:"Page not found"})})})},v=function(){return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("nav",{"data-cy":"nav",className:"navbar is-fixed-top has-shadow",role:"navigation","aria-label":"main navigation",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsxs)("div",{className:"navbar-brand",children:[Object(j.jsx)(a.c,{to:"/",className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:"Home"}),Object(j.jsx)(a.c,{to:"/people",className:function(e){var t=e.isActive;return i()("navbar-item",{"has-background-grey-lighter":t})},children:"People"})]})})}),Object(j.jsxs)(r.d,{children:[Object(j.jsx)(r.b,{path:"/",element:Object(j.jsx)(l,{})}),Object(j.jsx)(r.b,{path:"/people",element:Object(j.jsx)(m,{})}),Object(j.jsx)(r.b,{path:"/people/:slug",element:Object(j.jsx)(m,{})}),Object(j.jsx)(r.b,{path:"/home",element:Object(j.jsx)(r.a,{to:"/"})}),Object(j.jsx)(r.b,{path:"*",element:Object(j.jsx)(g,{})})]})]})},f=function(){return Object(j.jsx)("div",{"data-cy":"app",children:Object(j.jsx)(v,{})})};Object(n.createRoot)(document.getElementById("root")).render(Object(j.jsx)(a.a,{children:Object(j.jsx)(f,{})}))}},[[40,1,2]]]);
//# sourceMappingURL=main.1de45a86.chunk.js.map