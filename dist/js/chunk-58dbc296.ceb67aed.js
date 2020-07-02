(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-58dbc296"],{"1ccf":function(t,e,n){},2371:function(t,e,n){"use strict";var i=n("e8d4"),s=n.n(i);s.a},"3cb3":function(t,e,n){"use strict";var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"station-card"},[n("img",{staticClass:"station-card__img",attrs:{src:t.station.image}}),n("span",{staticClass:"station-card__name",domProps:{textContent:t._s(t.station.name)}})])},s=[],o={name:"StationCard",props:{station:{type:Object,required:!0}},data:function(){return{}}},a=o,r=n("2877"),u=Object(r["a"])(a,i,s,!1,null,null,null);e["a"]=u.exports},"4f5e":function(t,e,n){"use strict";var i=n("eef4"),s=n.n(i);s.a},"7c731":function(t,e,n){},ac7f:function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player-page d-flex player-container container flex-column"},[n("div",{staticClass:"player-info pa-5 mb-5 mt-2 mt-sm-5 shadow main-grad"},[n("v-btn",{staticClass:"player-info__btn",attrs:{small:"",color:"orange"},on:{click:function(e){return t.changeStation("prev")}}},[n("v-icon",[t._v("mdi-menu-left")])],1),n("transition",{attrs:{name:"fade",mode:"out-in"}},[n("station-card",{key:t.station.name,staticClass:"mx-5",attrs:{station:t.station}})],1),n("v-btn",{staticClass:"player-info__btn",attrs:{small:"",color:"orange"},on:{click:function(e){return t.changeStation("next")}}},[n("v-icon",[t._v("mdi-menu-right")])],1)],1),n("Player",{attrs:{station:t.station}}),n("keyboard-events")],1)},s=[],o=n("5530"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"player"},[n("control-panel",{attrs:{url:t.station.url}})],1)},r=[],u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"controls shadow main-grad pa-2"},[n("audio",{ref:"currentAudio",attrs:{src:t.url}}),n("v-btn",{staticClass:"controls__btn",attrs:{small:"",color:"orange",loading:t.isBuffering},on:{click:t.toggleStateAudio}},[t.isPlayed?n("v-icon",[t._v("mdi-pause")]):n("v-icon",[t._v("mdi-play")])],1),n("v-btn",{staticClass:"controls__btn",attrs:{small:"",color:"orange"},on:{click:t.runBack}},[n("v-icon",[t._v("mdi-rewind-10")])],1),n("v-btn",{staticClass:"controls__btn",attrs:{small:"",color:"orange"},on:{click:t.restartStream}},[n("v-icon",[t._v("mdi-reload")])],1),n("Timer",{attrs:{time:t.time}}),n("volume-range",{staticClass:" controls__input-range",attrs:{isMuted:t.isMuted,volume:t.volume},on:{muteHandler:t.toggleMute,"update:volume":function(e){t.volume=e}}})],1)},c=[],l=(n("d3b7"),n("ddb0"),n("96cf"),n("1da1")),m=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"volume-control control-wraper"},[n("div",{staticClass:"volume-mute",on:{click:function(e){return t.$emit("muteHandler")}}},[t.isMuted?n("v-icon",{staticClass:"volume-icon mr-2"},[t._v(" mdi-volume-off ")]):n("v-icon",{staticClass:"volume-icon mr-2"},[t._v(" mdi-volume-high ")])],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.currentVolume,expression:"currentVolume"}],ref:"volumeInput",staticClass:"volume-control__input",attrs:{type:"range",id:"volume",name:"volume",min:"0",max:"1",step:"0.01"},domProps:{value:t.currentVolume},on:{__r:function(e){t.currentVolume=e.target.value}}})])},d=[],f={name:"VolumeRange",props:{isMuted:{type:Boolean,required:!0},volume:{type:String,required:!0}},methods:{},computed:{currentVolume:{get:function(){return this.volume},set:function(){this.$emit("update:volume",this.$refs.volumeInput.value)}}}},v=f,p=(n("acc4"),n("2877")),h=n("6544"),y=n.n(h),g=n("132d"),_=Object(p["a"])(v,m,d,!1,null,null,null),b=_.exports;y()(_,{VIcon:g["a"]});var k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"timer control-wraper"},[n("transition",{attrs:{name:"time",mode:"out-in"}},[n("span",{key:t.minutes,staticClass:"timer__minutes",domProps:{textContent:t._s(t.minutes)}})]),n("span",{staticClass:"colon"},[t._v(" : ")]),n("span",{key:t.seconds,staticClass:"timer__seconds",domProps:{textContent:t._s(t.seconds)}})],1)},w=[],C=(n("a9e3"),{name:"Timer",props:{time:Number},computed:{minutes:function(){var t=Math.floor(this.time/60);return t<10?"0"+t:t},seconds:function(){var t=this.time%60;return t<10?"0"+t:t}}}),x=C,S=(n("4f5e"),Object(p["a"])(x,k,w,!1,null,null,null)),P=S.exports;function A(t,e){var n,i=!1;return function(){var s=this;n=arguments,i||(i=!0,setTimeout((function(){t.apply(s,n),i=!1}),e))}}var $,j=n("2f62"),O={name:"ControlPanel",components:{VolumeRange:b,Timer:P},props:{url:{type:String,required:!0}},data:function(){return{isPlayed:!1,isBuffering:!1,isMuted:!1,time:0,volume:"0.5"}},methods:{toggleStateAudio:function(){this.isBuffering||(this.isPlayed?this.stopAudio():this.playAudio())},playAudio:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.isBuffering=!0,e.prev=1,e.next=4,t.$refs.currentAudio.play();case 4:t.isBuffering=!1,t.isPlayed=!0,e.next=13;break;case 8:e.prev=8,e.t0=e["catch"](1),t.isBuffering=!1,t.isPlayed=!1,console.warn("[CE]-[Too ofter play reques]");case 13:case"end":return e.stop()}}),e,null,[[1,8]])})))()},stopAudio:function(){this.isPlayed=!1,this.$refs.currentAudio.pause()},restartStream:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return t.time=0,e.next=3,t.$refs.currentAudio.load();case 3:t.playAudio();case 4:case"end":return e.stop()}}),e)})))()},runBack:function(){this.time<10?this.time=0:this.time-=10,this.$refs.currentAudio.currentTime-=10},mute:function(){this.isMuted=!0,this.$refs.currentAudio.muted=!0},unmute:function(){this.isMuted=!1,this.$refs.currentAudio.muted=!1},toggleMute:function(){!0===this.isMuted?this.unmute():this.mute()},saveVolume:A((function(t){localStorage.setItem("volume",t)}),1e3)},computed:Object(o["a"])({},Object(j["e"])({keys:function(t){return t.keyboardModule.keys}})),watch:{keys:{deep:!0,handler:function(){this.keys["Space"]&&this.toggleStateAudio(),this.keys["Backspace"]&&this.runBack(),this.keys["ArrowUp"]&&(this.volume>.9?this.volume="1":this.volume=+this.volume+.1+""),this.keys["ArrowDown"]&&(this.volume<.1?this.volume="0":this.volume=+this.volume-.1+"")}},volume:function(){this.unmute(),this.$refs.currentAudio.volume=this.volume,this.saveVolume(this.volume)},url:function(){this.time=0,this.isPlayed&&(this.stopAudio(),this.restartStream())}},created:function(){var t=this,e=localStorage.getItem("volume");null!==e&&(this.volume=e),$=setInterval((function(){t.isPlayed&&t.time++}),1e3)},beforeDestroy:function(){clearInterval($)}},B=O,V=(n("2371"),n("8336")),E=Object(p["a"])(B,u,c,!1,null,null,null),M=E.exports;y()(E,{VBtn:V["a"],VIcon:g["a"]});var R={name:"Player",components:{ControlPanel:M},props:{station:{type:Object,required:!0}}},I=R,H=Object(p["a"])(I,a,r,!1,null,null,null),q=H.exports,T=n("3cb3"),L=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div")},N=[],D={methods:Object(o["a"])({},Object(j["d"])(["keyPressed","keyUnpressed"])),created:function(){var t=this;this.keydownHandler=function(e){t.keyPressed(e.code)},this.keyupHandler=function(e){t.keyUnpressed(e.code)},window.addEventListener("keydown",this.keydownHandler),window.addEventListener("keyup",this.keyupHandler)},beforeDestroy:function(){window.removeEventListener("keydown",this.keydownHandler),window.removeEventListener("keyup",this.keyupHandler)}},U=D,J=(n("af88"),Object(p["a"])(U,L,N,!1,null,"06b3c13b",null)),K=J.exports,z={name:"PlayerPage",components:{Player:q,StationCard:T["a"],KeyboardEvents:K},data:function(){return{stationRoute:this.$route.params.stationRoute,station:{}}},methods:{nextStation:function(){this.station=this.getNextStation(this.station)},prevStation:function(){this.station=this.getPrevStation(this.station)},changeStation:function(t){"next"===t?this.nextStation():this.prevStation(),this.$router.push({path:"/player/".concat(this.station.route)})}},beforeMount:function(){this.station=this.getStationByRoute(this.stationRoute)},computed:Object(o["a"])({},Object(j["c"])(["getStationByRoute","getPrevStation","getNextStation"]))},F=z,G=(n("d524"),Object(p["a"])(F,i,s,!1,null,null,null));e["default"]=G.exports;y()(G,{VBtn:V["a"],VIcon:g["a"]})},acc4:function(t,e,n){"use strict";var i=n("1ccf"),s=n.n(i);s.a},af88:function(t,e,n){"use strict";var i=n("b3f9"),s=n.n(i);s.a},b3f9:function(t,e,n){},d524:function(t,e,n){"use strict";var i=n("7c731"),s=n.n(i);s.a},e8d4:function(t,e,n){},eef4:function(t,e,n){}}]);
//# sourceMappingURL=chunk-58dbc296.ceb67aed.js.map