(this["webpackJsonpmovie-app"]=this["webpackJsonpmovie-app"]||[]).push([[0],{16:function(e,t,n){},17:function(e,t,n){},21:function(e,t,n){},23:function(e,t,n){"use strict";n.r(t);var s=n(1),i=n.n(s),o=n(4),c=n.n(o),r=n(3),a=n.n(r),l=n(5),u=n(6),v=n(7),p=n(10),j=n(9),m=(n(16),n(17),n(8)),d=n.n(m),h=n(0);function g(e){var t=e.genre;return Object(h.jsxs)("span",{className:"Movie_Genre",children:[t," "]})}function f(e){var t=e.poster,n=e.alt;return Object(h.jsx)("img",{src:t,alt:n,title:n,className:"Movie_Poster"})}var b=function(e){var t=e.title,n=e.poster,s=e.genres,i=e.synopsis;return Object(h.jsxs)("div",{className:"Movie",children:[Object(h.jsx)("div",{className:"Movie_Columm",children:Object(h.jsx)(f,{poster:n,alt:t})}),Object(h.jsxs)("div",{className:"Movie_Columm",children:[Object(h.jsx)("h1",{children:t}),Object(h.jsx)("div",{className:"Movie_Genres",children:s.map((function(e,t){return Object(h.jsx)(g,{genre:e},t)}))}),Object(h.jsx)("p",{className:"Movie_Sysnopsis",children:Object(h.jsx)(d.a,{text:i,maxLine:"3",ellipsis:" ...",trimRight:!0,basedOn:"letters"})})]})]})},O=function(e){Object(p.a)(n,e);var t=Object(j.a)(n);function n(){var e;Object(u.a)(this,n);for(var s=arguments.length,i=new Array(s),o=0;o<s;o++)i[o]=arguments[o];return(e=t.call.apply(t,[this].concat(i))).state={},e._renderMovies=function(){return console.log("_renderMovies"),e.state.movies.map((function(e){return console.log("movie===",e),Object(h.jsx)(b,{title:e.title_english,poster:e.medium_cover_image,genres:e.genres,synopsis:e.synopsis},e.id)}))},e._getMovies=Object(l.a)(a.a.mark((function t(){var n;return a.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return console.log("_getMovies"),t.next=3,e._callApi();case 3:n=t.sent,e.setState({movies:n});case 5:case"end":return t.stop()}}),t)}))),e._callApi=function(){return console.log("_callApi"),fetch("https://yts.mx/api/v2/list_movies.json?sort_by=like_count").then((function(e){return e.json()})).then((function(e){return e.data.movies})).catch((function(e){return console.log(e)}))},e}return Object(v.a)(n,[{key:"componentDidMount",value:function(){console.log("did mount"),this._getMovies()}},{key:"render",value:function(){var e=this.state.movies;return Object(h.jsx)("div",{className:e?"App":"App-loading",children:this.state.movies?this._renderMovies():"Loading"})}}]),n}(i.a.Component),_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,s=t.getFID,i=t.getFCP,o=t.getLCP,c=t.getTTFB;n(e),s(e),i(e),o(e),c(e)}))};n(21),n(22);c.a.render(Object(h.jsx)(i.a.StrictMode,{children:Object(h.jsx)(O,{})}),document.getElementById("root")),_()}},[[23,1,2]]]);
//# sourceMappingURL=main.0bb605e9.chunk.js.map