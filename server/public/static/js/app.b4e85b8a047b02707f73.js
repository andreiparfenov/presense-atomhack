webpackJsonp([1],{E6HH:function(o,t){},NHnr:function(o,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var e=n("7+uW"),r={render:function(){var o=this.$createElement,t=this._self._c||o;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},staticRenderFns:[]};var s=n("VU/8")({name:"App"},r,!1,function(o){n("gsu9")},null,null).exports,a=n("/ocq"),i={render:function(){var o=this.$createElement,t=this._self._c||o;return t("div",{staticClass:"main"},[t("div",{staticClass:"main-map"},[t("yandex-map",{attrs:{coords:this.coords,zoom:15,options:this.options,controls:this.controls},on:{click:this.onClick}},[t("ymap-marker",{attrs:{coords:this.coords,"marker-id":"123","hint-content":this.coords}})],1)],1)])},staticRenderFns:[]};var c=n("VU/8")({name:"HelloWorld",data:function(){return{coords:[54.817533,58.448946],options:{restrictMapArea:[[54.83381208998252,58.4077226876815],[54.79925718380296,58.4894802010907]]},controls:["zoomControl"]}},methods:{onClick:function(o){this.coords=o.get("coords")}}},i,!1,function(o){n("E6HH")},"data-v-029bc870",null).exports;e.a.use(a.a);var l=new a.a({routes:[{path:"/",name:"HelloWorld",component:c}]}),d=n("Clob");e.a.use(d.a,{apiKey:"78e1e097-c8b2-4e8d-a2c5-d79922dfe53d",lang:"ru_RU",coordorder:"latlong",version:"2.1"}),e.a.config.productionTip=!1,new e.a({el:"#app",router:l,components:{App:s},template:"<App/>"})},gsu9:function(o,t){}},["NHnr"]);
//# sourceMappingURL=app.b4e85b8a047b02707f73.js.map