(function(t){function e(e){for(var r,a,s=e[0],c=e[1],u=e[2],l=0,p=[];l<s.length;l++)a=s[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&p.push(o[a][0]),o[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(p.length)p.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var s=n[a];0!==o[s]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},o={app:0},i=[];function s(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d22d746":"7091fa3d","chunk-45b9468a":"3baffeda"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-45b9468a":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d22d746":"31d6cfe0","chunk-45b9468a":"dc4ba4ce"}[t]+".css",o=c.p+r,i=document.getElementsByTagName("link"),s=0;s<i.length;s++){var u=i[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===r||l===o))return e()}var p=document.getElementsByTagName("style");for(s=0;s<p.length;s++){u=p[s],l=u.getAttribute("data-href");if(l===r||l===o)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||o,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=o;var d=document.getElementsByTagName("head")[0];d.appendChild(f)})).then((function(){a[t]=0})));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=o[t]=[e,n]}));e.push(r[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(t);var p=new Error;u=function(e){l.onerror=l.onload=null,clearTimeout(f);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;p.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",p.name="ChunkLoadError",p.type=r,p.request=a,n[1](p)}o[t]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/EXAMEN_POLYAKOV/",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var p=0;p<u.length;p++)e(u[p]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",[n("v-app-bar",{attrs:{app:""}},[n("v-toolbar-title",{staticClass:"mr-5 display-1"},[t._v("Vue")])],1),n("v-navigation-drawer",{attrs:{app:""}},[n("v-list",t._l(t.items,(function(e,r){return n("v-list-item",{key:r,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-content",[n("v-list-item-title",{staticStyle:{"font-weight":"bold"},domProps:{textContent:t._s(e.title)}})],1)],1)})),1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{attrs:{color:"black--text text--lighten-2"}},[t._v("Добрейших коровок: "),n("b",[t._v(t._s(t.stats.cows))])])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{attrs:{color:"black--text text--lighten-2"}},[t._v("Милейших кроликов: "),n("b",[t._v(t._s(t.stats.rabbits))])])],1)],1),n("v-list-item",[n("v-list-item-content",[n("v-list-item-title",{attrs:{color:"black--text text--lighten-2"}},[t._v("Пушистейших овечек: "),n("b",[t._v(t._s(t.stats.sheeps))])])],1)],1)],1),n("v-main",[n("v-container",{staticClass:"pa-10"},[n("router-view")],1)],1)],1)},o=[],i=n("1da1"),s=(n("96cf"),n("bc3a")),c=n.n(s),u={created:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,c()("https://demo-api.vsdev.space/api/farm/left_widget");case 2:n=e.sent,t.stats=n.data;case 4:case"end":return e.stop()}}),e)})))()},data:function(){return{stats:{},items:[{title:"Главная",to:"/"},{title:"Форма",to:"/baby"},{title:"О нас",to:"/about"}]}}},l=u,p=n("2877"),f=n("6544"),d=n.n(f),m=n("7496"),v=n("40dc"),h=n("a523"),b=n("8860"),g=n("da13"),y=n("5d23"),_=n("f6c4"),w=n("f774"),x=n("2a7f"),k=Object(p["a"])(l,a,o,!1,null,null,null),O=k.exports;d()(k,{VApp:m["a"],VAppBar:v["a"],VContainer:h["a"],VList:b["a"],VListItem:g["a"],VListItemContent:y["a"],VListItemTitle:y["b"],VMain:_["a"],VNavigationDrawer:w["a"],VToolbarTitle:x["a"]});n("d3b7"),n("3ca3"),n("ddb0");var j=n("8c4f"),A=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},E=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",[t._v("Значимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Повседневная практика показывает, что реализация намеченных плановых заданий в значительной степени обуславливает создание модели развития."),n("br"),t._v("\\nЗначимость этих проблем настолько очевидна, что дальнейшее развитие различных форм деятельности обеспечивает широкому кругу (специалистов) участие в формировании новых предложений. Идейные соображения высшего порядка, а также дальнейшее развитие различных форм деятельности позволяет оценить значение новых предложений."),n("br"),t._v("\\nС другой стороны постоянное информационно-пропагандистское обеспечение нашей деятельности обеспечивает широкому кругу (специалистов) участие в формировании позиций, занимаемых участниками в отношении поставленных задач. С другой стороны рамки и место обучения кадров способствует подготовки и реализации модели развития.")]),n("img",{attrs:{width:"700",src:"https://demo-api.vsdev.space/storage/farm/home_page_img.jpg",alt:""}})])}],P={},V=Object(p["a"])(P,A,E,!1,null,null,null),C=V.exports;r["a"].use(j["a"]);var L=[{path:"/",name:"Home",component:C},{path:"/baby",name:"Baby",component:function(){return n.e("chunk-45b9468a").then(n.bind(null,"ac0d"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d22d746").then(n.bind(null,"f820"))}}],S=new j["a"]({mode:"history",base:"/EXAMEN_POLYAKOV/",routes:L}),T=S,N=n("2f62");r["a"].use(N["a"]);var M=new N["a"].Store({state:{animals:[]},mutations:{setAnimals:function(t,e){t.animals=e}},actions:{fetchAnimals:function(t){return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,r,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t.commit,e.next=3,fetch("https://demo-api.vsdev.space/api/farm/baby");case 3:return r=e.sent,e.next=6,r.json();case 6:a=e.sent,n("setAnimals",a);case 8:case"end":return e.stop()}}),e)})))()}},getters:{getAnimals:function(t){return t.animals}},modules:{}}),B=n("f309");r["a"].use(B["a"]);var I=new B["a"]({});r["a"].config.productionTip=!1,new r["a"]({router:T,store:M,vuetify:I,render:function(t){return t(O)}}).$mount("#app")}});
//# sourceMappingURL=app.83bbdfa7.js.map