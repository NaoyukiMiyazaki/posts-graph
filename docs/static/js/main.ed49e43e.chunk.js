(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{107:function(e,t,n){},109:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(50),o=n.n(r),u=n(31),s=n.n(u),i=n(51),l=n(52),m=n(53),p=n(56),f=n(54),h=n(57),k=n(55),d=n.n(k),g=function(e){var t=e.year,n=e.minYear,a=e.maxYear,r=e.prevClick,o=e.nextClick;return c.a.createElement("div",{className:"header"},c.a.createElement("button",{className:"header__button ".concat(n<t?"":"header__button--disabled"),onClick:r},"prev"),c.a.createElement("h3",{className:"header__title"},t),c.a.createElement("button",{className:"header__button ".concat(t<a?"":"header__button--disabled"),onClick:o},"next"))},v=function(e){var t=e.onFocus;return c.a.createElement("div",{className:"graph-block graph-block--none",onClick:t})},y=function(e){var t=e.year,n=e.month,a=e.week,r=e.count,o=e.onFocus;return!1===r?c.a.createElement(v,{onFocus:o}):c.a.createElement("div",{className:"graph-block graph-block--".concat(r>=4?4:r),title:"".concat(t,"\u5e74").concat(n+1,"\u6708").concat(a+1,"\u9031\u76ee").concat(r,"\u8a18\u4e8b"),tabIndex:r>0?0:-1,onFocus:o},c.a.createElement("span",{className:"graph-block__label"},"".concat(t,"\u5e74").concat(n+1,"\u6708").concat(a+1,"\u9031\u76ee").concat(r,"\u8a18\u4e8b")))},w=n(8),b=n.n(w);function E(e,t){var n=b()([e,t,1]),a=n.clone().add(1,"month");return(0===a.month()?n.weeksInYear()+1:a.weeks())-n.weeks()}b.a.updateLocale("ja",{week:{dow:1,doy:7}});var _=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],N=[1,2,3,4,5],S=function(e,t){return e[t]?e[t].length:0},F=function(e){var t=e.vertical,n=e.posts,a=e.year,r=e.onFocus;return n?c.a.createElement("div",{className:"graph ".concat(t?"graph--vertical":"")},c.a.createElement("div",{className:"graph__months"},_.map(function(e){return c.a.createElement("div",{key:e,className:"graph__month"},e)})),c.a.createElement("div",{className:"graph__weeks"},N.map(function(e){return c.a.createElement("div",{key:e,className:"graph__week"},e)})),c.a.createElement("div",{className:"graph__posts"},_.map(function(e,t){return c.a.createElement(c.a.Fragment,{key:t},function(){var e={year:a,month:t},o=function(e,t){return["".concat(e,"-").concat(t,"-0"),"".concat(e,"-").concat(t,"-1"),"".concat(e,"-").concat(t,"-2"),"".concat(e,"-").concat(t,"-3"),"".concat(e,"-").concat(t,"-4")]}(a,t);return[c.a.createElement(y,Object.assign({key:o[0]},e,{week:0,count:S(n,o[0]),onFocus:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){r(o[0])})})),c.a.createElement(y,Object.assign({key:o[1]},e,{week:1,count:S(n,o[1]),onFocus:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){r(o[1])})})),c.a.createElement(y,Object.assign({key:o[2]},e,{week:2,count:S(n,o[2]),onFocus:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){r(o[2])})})),c.a.createElement(y,Object.assign({key:o[3]},e,{week:3,count:S(n,o[3]),onFocus:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){r(o[3])})})),c.a.createElement(y,Object.assign({key:o[4]},e,{week:4,count:5===E(a,t)&&S(n,o[4]),onFocus:function(e){function t(){return e.apply(this,arguments)}return t.toString=function(){return e.toString()},t}(function(){r(o[4])})}))]}())}))):null},j=function(e){var t=e.posts,n=void 0===t?[]:t;return 0===n.length?null:c.a.createElement("ul",{className:"focus-posts"},c.a.createElement("li",{className:"focus-posts__label"},"".concat(n[0].year,"\u5e74").concat(n[0].month+1,"\u6708").concat(n[0].week+1,"\u9031 ").concat(n.length,"\u8a18\u4e8b")),n.map(function(e){return c.a.createElement("li",{key:e.guid,className:"focus-posts__item"},c.a.createElement("h4",{className:"focus-posts__title"},c.a.createElement("a",{href:e.link,target:"__blank"},e.title)),c.a.createElement("p",{className:"focus-posts__date"},c.a.createElement("small",null,e.pubDate)))}))};function O(e){var t=b()(e).endOf("week"),n=t.clone().startOf("month");return{year:t.year(),month:t.month(),week:t.diff(n,"weeks")}}b.a.updateLocale("ja",{week:{dow:1,doy:7}});var Y=new Date,x={weekday:"long",year:"numeric",month:"long",day:"numeric"},C=function(e){function t(){var e,n;Object(l.a)(this,t);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(f.a)(t)).call.apply(e,[this].concat(c)))).state={vertical:!1,year:Y.getFullYear(),minYear:Y.getFullYear(),maxYear:Y.getFullYear(),posts:null,focus:""},n}return Object(h.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;Object(i.a)(s.a.mark(function t(){var n,a,c,r;return s.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return n=new d.a,t.next=3,n.parseURL("/rss.xml");case 3:(a=t.sent).items&&(c=[],r=a.items.reduceRight(function(e,t){var n=O(t.pubDate),a=n.year,r=n.month,o=n.week;c.push(a),t.year=a,t.month=r,t.week=o,t.pubDate=new Date(t.pubDate).toLocaleDateString("ja-JP",x);var u="".concat(a,"-").concat(r,"-").concat(o);return e[u]||(e[u]=[]),e[u].push(t),e},{}),e.setState({minYear:Math.min.apply(Math,c),posts:r}));case 5:case"end":return t.stop()}},t,this)}))()}},{key:"render",value:function(){var e=this,t=this.state,n=t.vertical,a=t.year,r=t.minYear,o=t.maxYear,u=t.posts,s=t.focus;return c.a.createElement("div",{className:"app"},c.a.createElement("button",{onClick:function(){return e.setState({vertical:!n})}},"change view"),c.a.createElement(g,{year:a,maxYear:o,minYear:r,prevClick:function(){return e.setState({year:a-1,focus:""})},nextClick:function(){return e.setState({year:a+1,focus:""})}}),c.a.createElement(F,{vertical:n,year:a,posts:u,onFocus:function(t){return e.setState({focus:t})}}),c.a.createElement(j,{posts:s&&u?u[s]:[]}))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(107);o.a.render(c.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},58:function(e,t,n){e.exports=n(109)},71:function(e,t){},73:function(e,t){}},[[58,2,1]]]);
//# sourceMappingURL=main.ed49e43e.chunk.js.map