(this.webpackJsonpmovinfo=this.webpackJsonpmovinfo||[]).push([[0],{18:function(e,t,c){},27:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c.n(n),s=c(20),r=c.n(s),i=(c(27),c(8)),o=c(2),l=c(22),d=c(7),j=c.p+"static/media/image404.2c7c28d0.jpg",b=(c(18),c(12)),h=c.n(b),u=c.p+"static/media/bookmark-1.c85c9d9c.svg",m=c(1);var v=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],a=t[1],s=Object(n.useState)([]),r=Object(d.a)(s,2),o=r[0],b=r[1],v=Object(n.useState)(null),f=Object(d.a)(v,2),O=(f[0],f[1]),g=Object(n.useRef)(),p=Object(n.useState)([]),x=Object(d.a)(p,2),N=x[0],_=x[1],k="e0e9872a83bd28fe24d2a0e74ec4ad49";function w(e){e.preventDefault(),fetch("https://api.themoviedb.org/3/search/movie?api_key="+k+"&query="+g.current.value).then((function(e){if(e.ok)return e.json();O(e)})).then((function(e){_(e)}))}return Object(n.useEffect)((function(){fetch("https://api.themoviedb.org/3/genre/movie/list?api_key=e0e9872a83bd28fe24d2a0e74ec4ad49").then((function(e){if(e.ok)return e.json()})).then((function(e){a(e.genres)}))}),[]),Object(n.useEffect)((function(){!function(){var e=[];c.forEach((function(t){var n=t.name;e[t]=[];var a="https://api.themoviedb.org/3/discover/movie?api_key=e0e9872a83bd28fe24d2a0e74ec4ad49&with_genres="+t.id;fetch(a).then((function(e){if(e.ok)return e.json();O(e)})).then((function(e){o.length<c.length&&b((function(t){return[].concat(Object(l.a)(t),[{genre:n,data:[e]}])}))}))})),b(e)}()}),[c]),Object(m.jsxs)("div",{className:"landing-page",children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{className:"Banner",children:"Movinfo"}),Object(m.jsxs)("form",{onSubmit:w,className:"search-bar",children:[Object(m.jsx)("input",{type:"text",className:"search-input",placeholder:"Enter movie name to search...",ref:g}),Object(m.jsx)("button",{type:"submit",className:"search-btn",onClick:w,children:"Search"})]})]}),Object(m.jsxs)("div",{className:"genre-map",children:[N&&N.results&&N.results.length>0&&Object(m.jsxs)("div",{className:"genre-block",children:[Object(m.jsx)("div",{className:"genre-header",children:"Search Results ..."}),Object(m.jsx)("div",{className:"genre-movies",children:N.results&&N.results.map((function(e){var t=h()(e.original_title,"-");return Object(m.jsxs)("div",{className:"movie",children:[Object(m.jsx)(i.b,{to:"/".concat(e.id,"/").concat(t,"/"),children:Object(m.jsx)("img",{src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+e.poster_path,className:"movie-poster",onError:function(e){e.target.onerror=null,e.target.src=j}})}),e.original_title,e.release_date&&" (".concat(e.release_date.slice(0,4),")")]})}))})]}),o&&o.length>0&&o.map((function(e,t){return Object(m.jsxs)("div",{className:"genre-block",children:[Object(m.jsx)("div",{className:"genre-header",children:e.genre}),Object(m.jsx)("div",{className:"genre-movies",children:e.data[0].results&&e.data[0].results.map((function(e){var t=h()(e.original_title,"-");return Object(m.jsxs)("div",{className:"movie",children:[Object(m.jsx)(i.b,{to:"/".concat(e.id,"/").concat(t,"/"),children:Object(m.jsx)("img",{src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+e.poster_path,alt:"image",className:"movie-poster",onError:function(e){e.target.onerror=null,e.target.src=j}})}),e.original_title,e.release_date&&" (".concat(e.release_date.slice(0,4),")")]})}))})]},t)}))]}),Object(m.jsx)(i.b,{to:"/bookmarks",children:Object(m.jsx)("div",{className:"bookmarks",children:Object(m.jsx)("img",{src:u,alt:"image"})})})]})};var f=function(){var e=Object(o.f)(),t=e.id,c=(e.slugPath,Object(n.useState)(!1)),a=Object(d.a)(c,2),s=a[0],r=a[1],i=Object(n.useState)([]),l=Object(d.a)(i,2),b=l[0],u=l[1],v=Object(n.useState)([]),f=Object(d.a)(v,2),O=f[0],g=f[1],p=Object(n.useState)([]),x=Object(d.a)(p,2),N=x[0],_=x[1],k=Object(n.useState)(null),w=Object(d.a)(k,2),S=w[0],E=w[1],y="e0e9872a83bd28fe24d2a0e74ec4ad49",C="https://api.themoviedb.org/3/movie/".concat(t,"?api_key=")+y,B="https://api.themoviedb.org/3/movie/".concat(t,"/credits?api_key=")+y;return Object(n.useEffect)((function(){fetch(C).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){u(e),localStorage.getItem(e.id)?r(!0):r(!1);var t=parseFloat(e.vote_average);t=t/10*100,document.querySelector(".stars-inner").style.width=t+"%"}))}),[]),Object(n.useEffect)((function(){fetch(B).then((function(e){if(e.ok)return e.json();throw e})).then((function(e){g(e);var t,c,n=e.cast,a=(t="order",c="123",n.sort((function(e,n){var a=e[t],s=n[t];return"123"===c?a<s?-1:a>s?1:0:"321"===c?a>s?-1:a<s?1:0:void 0})));_(a),console.log(a)}))}),[]),Object(n.useEffect)((function(){if(O&&O.crew){var e=O.crew.find((function(e){return"Director"===e.job}));e&&E(e)}}),[O]),Object(n.useEffect)((function(){}),[localStorage]),Object(m.jsx)("div",{className:"landing-page",children:b&&Object(m.jsxs)(m.Fragment,{children:[Object(m.jsxs)("div",{className:"header",children:[Object(m.jsx)("div",{className:"Banner",children:"Movinfo"}),s?Object(m.jsx)("div",{className:"button-parent",children:Object(m.jsx)("button",{className:"btn",onClick:function(){return localStorage.removeItem(b.id),void r(!1)},children:"Remove Bookmark"})}):Object(m.jsx)("div",{className:"button-parent",children:Object(m.jsx)("button",{className:"btn",onClick:function(){return function(){var e=h()(b.original_title,"-");localStorage.setItem(b.id,e),r(!0)}()},children:"Bookmark"})})]}),Object(m.jsx)("div",{className:"movieBox",children:Object(m.jsxs)("div",{className:"movieContainer",children:[Object(m.jsx)("div",{className:"imageContainer",children:Object(m.jsx)("img",{src:"https://www.themoviedb.org/t/p/w600_and_h900_bestv2/"+b.poster_path,className:"image",onError:function(e){e.target.onerror=null,e.target.src=j}})}),Object(m.jsx)("div",{className:"detailsContainer",children:Object(m.jsxs)("div",{className:"secondLevelContainer",children:[Object(m.jsxs)("div",{className:"movie-heading",children:[Object(m.jsxs)("div",{className:"movie-title",children:[b.original_title," ( ",0==b.vote_average?"Unrated":parseFloat(b.vote_average)/2," )"]}),Object(m.jsx)("div",{class:"stars-outer",children:Object(m.jsx)("div",{class:"stars-inner"})})]}),Object(m.jsxs)("div",{id:"row2",children:[b.release_date&&"".concat(b.release_date.slice(0,4)," | "),b.runtime&&"".concat(b.runtime," mins")+" | ",S&&S.name]}),Object(m.jsxs)("div",{id:"row3",children:[Object(m.jsx)("span",{className:"row3-head",children:"Cast:"}),N&&N.length>0&&N.slice(0,4).map((function(e,t){return Object(m.jsx)("span",{children:t<3?"".concat(e.name)+", ":"".concat(e.name)},t)}))]}),Object(m.jsxs)("div",{id:"row4",children:["Plot: ",b.overview]})]})})]})})]})})};c(34);var O=function(){return Object(m.jsx)(i.a,{children:Object(m.jsxs)(o.c,{children:[Object(m.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(m.jsx)(o.a,{exact:!0,path:"/browse",component:v}),Object(m.jsx)(o.a,{exact:!0,path:"/:id/:slugPath/",component:f})]})})},g=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,36)).then((function(t){var c=t.getCLS,n=t.getFID,a=t.getFCP,s=t.getLCP,r=t.getTTFB;c(e),n(e),a(e),s(e),r(e)}))};r.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(O,{})}),document.getElementById("root")),g()}},[[35,1,2]]]);
//# sourceMappingURL=main.e45515a8.chunk.js.map