webpackJsonp([4],{AyR2:function(e,n){},DxRk:function(e,n){e.exports={login:!1}},MLYr:function(e,n){},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o=t("7+uW"),r={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=t("VU/8")({name:"App"},r,!1,function(e){t("MLYr")},null,null).exports,a=t("/ocq"),c=(t("mtWM"),{render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{staticClass:"home"},[n("router-view")],1)},staticRenderFns:[]});var u=t("VU/8")({name:"Home"},c,!1,function(e){t("AyR2")},"data-v-4b0ebc18",null).exports;o.a.use(a.a);var l=new a.a({routes:[{path:"/Home",component:u,redirect:"/Home/Welcome",children:[{path:"Welcome",name:"Welcome",component:function(){return t.e(2).then(t.bind(null,"FJN/"))},meta:{title:"Ai伊川"}},{path:"Nav",name:"Nav",component:function(){return t.e(1).then(t.bind(null,"uL8o"))},meta:{title:"你想找的，应有尽有"}},{path:"Collections",name:"Collections",component:function(){return t.e(0).then(t.bind(null,"GVw7"))},meta:{title:"随便逛逛"}}]}]}),p=t("DxRk"),s=t.n(p);o.a.config.productionTip=!1,new o.a({el:"#app",router:l,components:{App:i},template:"<App/>"}),l.beforeEach(function(e,n,t){e.matched.some(function(e){return e.meta.requiresAuth})&&s.a.login?t({path:"/login",query:{redirect:e.fullPath}}):t()})}},["NHnr"]);
//# sourceMappingURL=app.07ae69b05ecaf388039c.js.map