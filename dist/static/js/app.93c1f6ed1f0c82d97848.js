webpackJsonp([1],{"1fiQ":function(t,e){},"1kYJ":function(t,e){},"9awz":function(t,e){},"A+/m":function(t,e){},Fpr2:function(t,e){},HZOh:function(t,e){},NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i("7+uW"),a=i("NYxO"),n=i("So9E"),o={props:["application"],components:{Window:n.a}},r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("window",{attrs:{application:this.application}},[e("section",{staticClass:"photo"})])},staticRenderFns:[]};var l=i("VU/8")(o,r,!1,function(t){i("ZO4N")},"data-v-4cda5480",null).exports,c=i("rsJS"),m={render:function(){var t=this.$createElement,e=this._self._c||t;return e("window",{attrs:{application:this.application}},[e("section",{ref:"terminal",staticClass:"terminal"})])},staticRenderFns:[]};var d=function(t){i("1kYJ")},h=i("VU/8")(c.a,m,!1,d,null,null).exports,u=i("s6bQ"),p=i.n(u),_=i("7t+N"),f=i.n(_),g=i("oM4L"),w={props:["application"],data:function(){return{skills:g.a}},components:{Window:n.a},mounted:function(){this.diagram()},methods:{random:function(t,e){return Math.floor(Math.random()*(e-t+1)+t)},diagram:function(){var t=this,e=p()("diagram",750,750),i=73;e.circle(400,400,85).attr({stroke:"none",fill:"#193340"});var s=e.text(400,400,"Skills").attr({font:"20px Arial",fill:"#fff"}).toFront();e.customAttributes.arc=function(e,i,s){var a=3.6*e,n=360==a?359.99:a,o=t.random(91,240),r=(o-n)*Math.PI/180,l=o*Math.PI/180;return{path:[["M",400+s*Math.cos(l),400-s*Math.sin(l)],["A",s,s,0,+(n>180),1,400+s*Math.cos(r),400-s*Math.sin(r)]],stroke:i}},f()(".get").find(".arc").each(function(t){var a=f()(this),n=a.find(".color").val(),o=a.find(".percent").val(),r=a.find(".text").text();i+=15,e.path().attr({arc:[o,n,i],"stroke-width":10}).mouseover(function(){this.animate({"stroke-width":25,opacity:.75},1e3,"elastic"),"VML"!=p.a.type&&this.toFront(),s.stop().animate({opacity:0},250,">",function(){this.attr({text:r+"\n"+o+"%"}).animate({opacity:1},250,"<")})}).mouseout(function(){this.stop().animate({"stroke-width":10,opacity:1},1e3,"elastic"),s.stop().animate({opacity:0},250,">",function(){s.attr({text:"Skills"}).animate({opacity:1},250,"<")})})})}}},M={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("window",{attrs:{application:t.application}},[i("section",{staticClass:"get",attrs:{id:"diagram"}},t._l(t.skills,function(e){return i("div",{staticClass:"arc"},[i("span",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"text"},[t._v(t._s(e.name))]),t._v(" "),i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"percent",attrs:{type:"hidden"},domProps:{value:e.percent}}),t._v(" "),i("input",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],staticClass:"color",attrs:{type:"hidden"},domProps:{value:e.color}})])}),0)])},staticRenderFns:[]};var v=i("VU/8")(w,M,!1,function(t){i("1fiQ")},"data-v-76c6cc9b",null).exports,y=i("hT0G"),C={props:["application"],components:{Window:n.a},data:function(){return{educations:y.a}}},P={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("window",{attrs:{application:t.application}},[i("section",{attrs:{id:"timeline"}},t._l(t.educations,function(e){return i("article",[i("div",{staticClass:"inner"},[i("p",{staticClass:"date"},[t._v(t._s(e.dateStart)),i("br"),t._v("-"),i("br"),t._v(t._s(e.dateEnd))]),t._v(" "),i("h2",[t._v(t._s(e.title))]),t._v(" "),i("p",[t._v(t._s(e.name))])])])}),0)])},staticRenderFns:[]};var z={props:["widget"],data:function(){return{showSeparate:!1,hours:"00",minutes:"00",seconds:"00",date:null}},mounted:function(){this.getTime(),setInterval(this.getTime,1e3)},methods:{addZeroBefore:function(t){return("0"+t).slice(-2)},getTime:function(){var t=new Date;this.hours=this.addZeroBefore(t.getHours()),this.minutes=this.addZeroBefore(t.getMinutes()),this.seconds=this.addZeroBefore(t.getSeconds()),this.date=this.addZeroBefore(t.getDate())+" / "+this.addZeroBefore(t.getMonth())+" / "+t.getFullYear(),this.showSeparate=!this.showSeparate}}},E={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("section",{staticClass:"section"},[i("p",[t._v(t._s(t.hours)),i("span",{style:[t.showSeparate?{color:"rgba(69, 29, 36, 0.9)"}:{}]},[t._v(":")]),t._v(t._s(t.minutes)),i("span",{style:[t.showSeparate?{color:"rgba(69, 29, 36, 0.9)"}:{}]},[t._v(":")]),i("span",[t._v(t._s(t.seconds))])]),t._v(" "),i("p",{staticClass:"date"},[t._v(t._s(t.date))])])},staticRenderFns:[]};var x={auth:{isAuth:!0},applications:{list:[{name:"Photo",component:l,title:"My photo",active:!0,show:!0,data:null,style:{minWidth:"600px",minHeight:"450px",width:"600px",height:"450px"}},{name:"Terminal",component:h,title:"Terminal",active:!0,show:!0,data:null,style:{minWidth:"500px",minHeight:"300px",width:"500px",height:"300px"}},{name:"Skills",component:v,title:"My skills",active:!0,show:!0,data:null,style:{minWidth:"800px",minHeight:"850px",width:"800px",height:"850px"}},{name:"Educations",component:i("VU/8")(C,P,!1,function(t){i("RpWZ")},"data-v-69827306",null).exports,title:"My educations",active:!0,show:!0,data:null,style:{minWidth:"500px",minHeight:"400px",width:"500px",height:"400px"}}]},widgets:{list:[{name:"Clock",component:i("VU/8")(z,E,!1,function(t){i("A+/m")},"data-v-08a937d2",null).exports,style:{width:"100px",height:"50px"}}]}},D=i("Dd8w"),L=i.n(D),k=L()({},{isAuth:function(t){return t.auth.isAuth}},{getApplications:function(t){return t.applications.list}},{getWidgets:function(t){return t.widgets.list}}),N=L()({},{login:function(t){t.auth.isAuth=!0},logout:function(t){t.auth.isAuth=!1}});s.a.use(a.a);var b=new a.a.Store({state:x,mutations:N,getters:k}),I={filters:{logoMenuItem:function(t){return t.substr(0,1).toUpperCase()}},data:function(){return{menuItems:this.$store.getters.getApplications}},methods:{activate:function(t){t.show?t.active=!t.active:t.show=!0},logout:function(){b.commit("logout")}}},j={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ul",{staticClass:"side-menu"},[t._l(t.menuItems,function(e){return s("li",{class:{active:e.active&&e.show},on:{click:function(i){return t.activate(e)}}},[t._v("\n    "+t._s(t._f("logoMenuItem")(e.name))+"\n  ")])}),t._v(" "),s("li",{staticClass:"active standby",on:{click:t.logout}},[s("img",{attrs:{src:i("knmD")}})])],2)},staticRenderFns:[]};var S={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"workplace"},[this._l(this.applications,function(t){return e(t.active?t.component:null,{tag:"component",attrs:{application:t}})}),this._v(" "),e("section",{staticClass:"widgets"},this._l(this.widgets,function(t){return e(t.component,{tag:"component",attrs:{widget:t}})}),1)],2)},staticRenderFns:[]};var T={components:{SideBar:i("VU/8")(I,j,!1,function(t){i("hSGh")},"data-v-b246351c",null).exports,Workplace:i("VU/8")({data:function(){return{applications:this.$store.getters.getApplications,widgets:this.$store.getters.getWidgets}}},S,!1,function(t){i("HZOh")},null,null).exports}},O={render:function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"body-section"},[e("side-bar"),this._v(" "),e("workplace")],1)},staticRenderFns:[]};var U={password:"welcome"},W="The password is a required field",A="Invalid password, please try again",Y={data:function(){return{error:null,validPassword:U.password,password:null}},methods:{checkForm:function(t){return t.preventDefault(),this.password?this.password!==this.validPassword?this.error=A:void b.commit("login"):this.error=W}}},B={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("form",{staticClass:"transparent-block",on:{submit:t.checkForm}},[i("p",{staticClass:"notify-msg"},[t._v("Your password: "),i("span",[t._v(t._s(t.validPassword))])]),t._v(" "),i("p",{staticClass:"error-msg",attrs:{if:t.error}},[t._v(t._s(t.error))]),t._v(" "),i("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],class:["input",t.error?"error-input":""],attrs:{type:"password",name:"password",placeholder:"Password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})])},staticRenderFns:[]};var R={data:function(){return{isAuth:this.$store.getters.isAuth}},components:{Dashboard:i("VU/8")(T,O,!1,function(t){i("Z2Iq")},"data-v-2de299d8",null).exports,Login:i("VU/8")(Y,B,!1,function(t){i("pi+q")},"data-v-c2edc464",null).exports},created:function(){var t=this;this.$store.subscribe(function(e,i){"login"!==e.type&&"logout"!==e.type||(t.isAuth=i.auth.isAuth)})}},H={render:function(){var t=this.$createElement;return(this._self._c||t)(this.isAuth?"dashboard":"login",{tag:"component"})},staticRenderFns:[]};var Q=i("VU/8")(R,H,!1,function(t){i("Fpr2")},null,null).exports;s.a.config.productionTip=!1,new s.a({el:"#app",components:{App:Q},template:"<App/>",store:b})},RpWZ:function(t,e){},So9E:function(t,e,i){"use strict";var s=i("BO1k"),a=i.n(s),n=i("woOf"),o=i.n(n),r=i("Dd8w"),l=i.n(r),c={props:["application"],data:function(){return{sizeParams:l()({},this.application.style,{minHeight:parseInt(this.application.style.minHeight),minWidth:parseInt(this.application.style.minWidth),partOfWindow:null,originalWidth:0,originalHeight:0,originalX:0,originalY:0,originalMouseX:0,originalMouseY:0}),fullScreen:null,activeWindow:null}},mounted:function(){o()(this.$refs.window.style,this.application.style);var t=this.$refs.window.parentNode.getBoundingClientRect(),e=this.$refs.window.getBoundingClientRect();this.$refs.window.style.left=Math.random()*(t.width-e.width-t.x)+t.x+"px",this.$refs.window.style.top=Math.random()*(t.height-e.height)+"px"},methods:{toggleWindowSize:function(){this.fullScreen=!this.fullScreen},closeWindow:function(){this.application.data=null,this.application.active=!1},collapseWindow:function(){this.application.show=!1},activateBorder:function(){var t=this.$el.getElementsByClassName("resizer"),e=!0,i=!1,s=void 0;try{for(var n,o=a()(t);!(e=(n=o.next()).done);e=!0){n.value.style.opacity=1}}catch(t){i=!0,s=t}finally{try{!e&&o.return&&o.return()}finally{if(i)throw s}}this.$refs.window.firstChild.style.opacity=.5},deactivateBorder:function(){var t=this.$el.getElementsByClassName("resizer"),e=!0,i=!1,s=void 0;try{for(var n,o=a()(t);!(e=(n=o.next()).done);e=!0){n.value.style.opacity=0}}catch(t){i=!0,s=t}finally{try{!e&&o.return&&o.return()}finally{if(i)throw s}}this.$refs.window&&(this.$refs.window.firstChild.style.opacity=1)},windowStartMove:function(t){window.addEventListener("mousemove",this.move),window.addEventListener("mouseup",this.stopMove.bind(null,this.move))},move:function(t){document.body.style.cursor="move",this.activateBorder(),this.sizeParams.element.style.left=this.sizeParams.originalX+(t.pageX-this.sizeParams.originalMouseX)+"px",this.sizeParams.element.style.top=this.sizeParams.originalY+(t.pageY-this.sizeParams.originalMouseY)+"px"},stopMove:function(t){window.removeEventListener("mousemove",t),document.body.style.cursor="default",this.deactivateBorder()},windowStartResize:function(t){this.sizeParams.element=this.$refs.window;var e=document.querySelectorAll(".window-border"),i=!0,s=!1,n=void 0;try{for(var o,r=a()(e);!(i=(o=r.next()).done);i=!0){o.value.style.zIndex=2}}catch(t){s=!0,n=t}finally{try{!i&&r.return&&r.return()}finally{if(s)throw n}}this.sizeParams.element.style.zIndex=3,this.sizeParams.originalX=this.sizeParams.element.getBoundingClientRect().left,this.sizeParams.originalY=this.sizeParams.element.getBoundingClientRect().top,this.sizeParams.originalMouseX=t.pageX,this.sizeParams.originalMouseY=t.pageY,this.sizeParams.originalWidth=parseFloat(getComputedStyle(this.sizeParams.element,null).getPropertyValue("width").replace("px","")),this.sizeParams.originalHeight=parseFloat(getComputedStyle(this.sizeParams.element,null).getPropertyValue("height").replace("px","")),"string"==typeof t.target.className&&(this.sizeParams.partOfWindow=t.target.className.split(" ")[1]),window.addEventListener("mousemove",this.resize),window.addEventListener("mouseup",this.stopResize.bind(null,this.resize))},resize:function(t){switch(this.activateBorder(),this.sizeParams.partOfWindow){case"bottom-right":var e=this.sizeParams.originalWidth+(t.pageX-this.sizeParams.originalMouseX),i=this.sizeParams.originalHeight+(t.pageY-this.sizeParams.originalMouseY);e>this.sizeParams.minWidth&&(this.sizeParams.element.style.width=e+"px"),i>this.sizeParams.minHeight&&(this.sizeParams.element.style.height=i+"px");break;case"bottom-left":e=this.sizeParams.originalWidth-(t.pageX-this.sizeParams.originalMouseX),i=this.sizeParams.originalHeight+(t.pageY-this.sizeParams.originalMouseY);e>this.sizeParams.minWidth&&(this.sizeParams.element.style.width=e+"px",this.sizeParams.element.style.left=this.sizeParams.originalX+(t.pageX-this.sizeParams.originalMouseX)+"px"),console.log(i,this.sizeParams.minHeight),i<this.sizeParams.minHeight&&(this.sizeParams.element.style.height=i+"px");break;case"top-right":e=this.sizeParams.originalWidth+(t.pageX-this.sizeParams.originalMouseX),i=this.sizeParams.originalHeight-(t.pageY-this.sizeParams.originalMouseY);e>this.sizeParams.minWidth&&(this.sizeParams.element.style.width=e+"px"),i>this.sizeParams.minHeight&&(this.sizeParams.element.style.height=i+"px",this.sizeParams.element.style.top=this.sizeParams.originalY+(t.pageY-this.sizeParams.originalMouseY)+"px");break;case"top-left":e=this.sizeParams.originalWidth-(t.pageX-this.sizeParams.originalMouseX),i=this.sizeParams.originalHeight-(t.pageY-this.sizeParams.originalMouseY);e>this.sizeParams.minWidth&&(this.sizeParams.element.style.width=e+"px",this.sizeParams.element.style.left=this.sizeParams.originalX+(t.pageX-this.sizeParams.originalMouseX)+"px"),i>this.sizeParams.minHeight&&(this.sizeParams.element.style.height=i+"px",this.sizeParams.element.style.top=this.sizeParams.originalY+(t.pageY-this.sizeParams.originalMouseY)+"px");break;case"right":(e=this.sizeParams.originalWidth+(t.pageX-this.sizeParams.originalMouseX))>this.sizeParams.minWidth&&(this.sizeParams.element.style.width=e+"px");break;case"left":(e=this.sizeParams.originalWidth-(t.pageX-this.sizeParams.originalMouseX))>this.sizeParams.minWidth&&(this.sizeParams.element.style.width=e+"px",this.sizeParams.element.style.left=this.sizeParams.originalX+(t.pageX-this.sizeParams.originalMouseX)+"px");break;case"bottom":(i=this.sizeParams.originalHeight+(t.pageY-this.sizeParams.originalMouseY))>this.sizeParams.minHeight&&(this.sizeParams.element.style.height=i+"px");break;case"top":(i=this.sizeParams.originalHeight-(t.pageY-this.sizeParams.originalMouseY))>this.sizeParams.minHeight&&(this.sizeParams.element.style.height=i+"px",this.sizeParams.element.style.top=this.sizeParams.originalY+(t.pageY-this.sizeParams.originalMouseY)+"px")}},stopResize:function(t){window.removeEventListener("mousemove",t),this.deactivateBorder()}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{ref:"window",staticClass:"window-border",class:{"full-screen":t.fullScreen,active:t.application.active},style:{opacity:t.application.show?1:0},on:{mousedown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?null:"button"in e&&0!==e.button?null:(e.preventDefault(),t.windowStartResize(e))}}},[i("div",{staticClass:"window"},[i("ul",{staticClass:"header",on:{mousedown:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"left",37,e.key,["Left","ArrowLeft"])?null:"button"in e&&0!==e.button?null:(e.preventDefault(),t.windowStartMove(e))}}},[i("li",{staticClass:"buttons btn-close",on:{click:t.closeWindow}}),t._v(" "),i("li",{staticClass:"buttons btn-minimize",on:{click:t.collapseWindow}}),t._v(" "),i("li",{staticClass:"buttons btn-zoom",on:{click:t.toggleWindowSize}}),t._v(" "),i("li",{staticClass:"title"},[t._v(t._s(t.application.title))])]),t._v(" "),i("div",{ref:"body",staticClass:"body"},[t._t("default")],2)]),t._v(" "),i("span",{staticClass:"resizer bottom"}),t._v(" "),i("span",{staticClass:"resizer top"}),t._v(" "),i("span",{staticClass:"resizer left"}),t._v(" "),i("span",{staticClass:"resizer right"}),t._v(" "),i("span",{staticClass:"resizer bottom-right"}),t._v(" "),i("span",{staticClass:"resizer bottom-left"}),t._v(" "),i("span",{staticClass:"resizer top-left"}),t._v(" "),i("span",{staticClass:"resizer top-right"})])},staticRenderFns:[]};var d=i("VU/8")(c,m,!1,function(t){i("9awz")},null,null);e.a=d.exports},Z2Iq:function(t,e){},ZO4N:function(t,e){},hSGh:function(t,e){},hT0G:function(t,e,i){"use strict";e.a=[{title:"School",name:"Secondary School of the I-III degrees №3, Ivano-Frankivs'k, Ukraine",dateStart:"2000",dateEnd:"2009"},{title:"Higher School",name:"Higher Vocational School Service maintenance of machinery, Ivano-Frankivs'k, Ukraine. Faculty of accounting",dateStart:"2009",dateEnd:"2013"},{title:"University",name:"Vasyl Stefanyk Precarpathian National University, Ivano-Frankivs'k, Ukraine. Faculty of physics and technology",dateStart:"2013",dateEnd:"2017"}]},knmD:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pg0KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDE2LjAuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPg0KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4NCjxzdmcgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCINCgkgd2lkdGg9IjUwMS42NzJweCIgaGVpZ2h0PSI1MDEuNjcycHgiIHZpZXdCb3g9IjAgMCA1MDEuNjcyIDUwMS42NzIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUwMS42NzIgNTAxLjY3MjsiDQoJIHhtbDpzcGFjZT0icHJlc2VydmUiPg0KPGc+DQoJPGcgaWQ9IkxheWVyXzhfNTlfIj4NCgkJPHBhdGggZD0iTTQ3Ni44MzYsMjc1LjY2N2MwLDEyNC42MDgtMTAxLjM4MSwyMjYuMDA1LTIyNS45OTUsMjI2LjAwNWMtMTI0LjYxNywwLTIyNi4wMDUtMTAxLjM5Ni0yMjYuMDA1LTIyNi4wMDUNCgkJCWMwLTkyLjg0Myw1OC4yNDEtMTc3LjYxNSwxNDQuOTA3LTIxMC45NDJjMTQuNDQ2LTUuNTM4LDMwLjY1NywxLjY0NiwzNi4yMTIsMTYuMDkzYzUuNTUxLDE0LjQ0My0xLjY1NSwzMC42NTMtMTYuMDkzLDM2LjIwOA0KCQkJQzEyNC42NjUsMTQyLjA5NCw4MC44NywyMDUuODUxLDgwLjg3LDI3NS42NzRjMCw5My43MTcsNzYuMjQ1LDE2OS45NTksMTY5Ljk3MSwxNjkuOTU5YzkzLjcyNCwwLDE2OS45NjItNzYuMjQyLDE2OS45NjItMTY5Ljk1OQ0KCQkJYzAtNjguMDg2LTQwLjQ4Mi0xMjkuNDMzLTEwMy4wOTUtMTU2LjI2OGMtMTQuMjI3LTYuMDktMjAuODI0LTIyLjU1OS0xNC43MTgtMzYuNzgxYzYuMDg0LTE0LjIyLDIyLjU0My0yMC44MTQsMzYuNzcxLTE0LjcxOA0KCQkJQzQyMy4wMjQsMTAzLjU3Niw0NzYuODM2LDE4NS4xMjgsNDc2LjgzNiwyNzUuNjY3eiBNMjUzLjQ0NSwyNTQuOTM1YzE1LjQ3NSwwLDI4LjAxNy0xMi41NCwyOC4wMTctMjguMDE3VjI4LjAxNg0KCQkJQzI4MS40NjIsMTIuNTQyLDI2OC45MiwwLDI1My40NDUsMGMtMTUuNDY4LDAtMjguMDE2LDEyLjU0Mi0yOC4wMTYsMjguMDE2djE5OC45MDINCgkJCUMyMjUuNDI5LDI0Mi4zOTYsMjM3Ljk4MiwyNTQuOTM1LDI1My40NDUsMjU0LjkzNXoiLz4NCgk8L2c+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8Zz4NCjwvZz4NCjxnPg0KPC9nPg0KPGc+DQo8L2c+DQo8L3N2Zz4NCg=="},oM4L:function(t,e,i){"use strict";e.a=[{name:"Backend::PHP",percent:"95",time:"4 years",color:"#e3e"},{name:"Backend::Laravel",percent:"95",time:"3.5 years",color:"#3e3"},{name:"Backend::Yii2",percent:"65",time:"6 months",color:"#ffff00"},{name:"Backend::Symfony4",percent:"70",time:"6 months",color:"#ffff00"},{name:"Backend::NodeJS/ExpressJS",percent:"30",time:"3 months",color:"#ffff00"},{name:"Frontend::JS",percent:"75",time:"2 years",color:"#BEDBE9"},{name:"Frontend::JQuery",percent:"60",time:"2.5 years",color:"#D800BF"},{name:"Frontend::ReactJS",percent:"65",time:"7 months",color:"#0000ff"},{name:"Frontend::VueJS",percent:"60",time:"0.5 year",color:"#ff0000"},{name:"Mobile::ReactNative",percent:"65",time:"6 months",color:"#0000ff"},{name:"Frontend::HTML/CSS",percent:"60",time:"1.5 year",color:"#00DAE6"},{name:"DB::MySQL",percent:"90",time:"3.5 year",color:"#88B8E6"},{name:"DB::MongoDB",percent:"50",time:"1.5 year",color:"#BEDBE9"},{name:"DB::MariaDB",percent:"35",time:"6 months",color:"#8887e9"},{name:"DB::SQLite",percent:"75",time:"1.5 year",color:"#9283E9"},{name:"VC::Git",percent:"75",time:"1.5 year",color:"#9283E9"},{name:"Docker",percent:"50",time:"6 months",color:"#9283E9"},{name:"Other::Websocket/SOAP/REST/JSON/AJAX",percent:"80",time:"4 year",color:"#9283E9"}]},"pi+q":function(t,e){},rsJS:function(module,__webpack_exports__,__webpack_require__){"use strict";var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__=__webpack_require__("BO1k"),__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator__),__WEBPACK_IMPORTED_MODULE_1__includes_Window__=__webpack_require__("So9E"),__WEBPACK_IMPORTED_MODULE_2_jquery__=__webpack_require__("7t+N"),__WEBPACK_IMPORTED_MODULE_2_jquery___default=__webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_jquery__),__WEBPACK_IMPORTED_MODULE_3__config_skills__=__webpack_require__("oM4L"),__WEBPACK_IMPORTED_MODULE_4__config_educations__=__webpack_require__("hT0G");__webpack_exports__.a={props:["application"],components:{Window:__WEBPACK_IMPORTED_MODULE_1__includes_Window__.a},data:function(){return{info:{prefix:"$> ",welcomeText:"Hi, I'm your personal CV-assistant.\nCall <span>/info</span> for information.",infoCommandHeader:"All available commands: ",undefinedCommandText:"Undefined command.",startEmulateJSMessage:"Start emulate... Enter <span>exit</span> for exit.",endEmulateJSMessage:"End emulate..."},commands:[{name:"/info",info:"Show all available commands.",call:this.callInfoCommand},{name:"/educations",info:"Show my educations.",call:this.callEducationsCommand},{name:"/skills",info:"Show my skills.",call:this.callSkillsCommand},{name:"/clear",info:"Show my skills.",call:this.callClearCommand},{name:"/js",info:"Emulate JS scripts.",call:this.callEmulateJsCommand}],hiddenCommands:[{name:"exit",call:this.exitEmulateJSCommand}],emulateMode:!1,textCommand:""}},mounted:function(){this.sayHello(),this.init()},methods:{sayHello:function(){this.printResponse(this.info.welcomeText),this.printCommand()},printInfo:function(t){this.appendMessage('<p class="info">'+(t||"")+"</p>")},printCommand:function(t){this.appendMessage('<p class="command">'+(t||"")+"</p>")},printResponse:function(t){this.appendMessage('<p class="response">'+(t||"")+"</p>")},appendMessage:function(t){this.$refs.terminal.insertAdjacentHTML("beforeend",t)},writingText:function(t){__WEBPACK_IMPORTED_MODULE_2_jquery___default()(this.$refs.terminal).find(".command:last-child").html(t||"")},callCommand:function(t){for(var e in this.hiddenCommands)if(this.hiddenCommands[e].name===t)return this.hiddenCommands[e].call(this.hiddenCommands[e]);if(this.emulateMode)return this.emulateJsCommand(t);for(var i in this.commands)if(this.commands[i].name===t)return this.commands[i].call(this.commands[i]);return this.callUndefinedCommand()},callInfoCommand:function(){var t=this.info.infoCommandHeader+"<br><br>";for(var e in this.commands)t+=this.commands[e].name+" - "+this.commands[e].info+"<br>";this.printResponse(t),this.printCommand()},callEducationsCommand:function(){var t="";t+="<br><span>My Educations:</span><br><br>";var e=!0,i=!1,s=void 0;try{for(var a,n=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(__WEBPACK_IMPORTED_MODULE_4__config_educations__.a);!(e=(a=n.next()).done);e=!0){var o=a.value;t+="- "+o.dateStart+"-"+o.dateEnd+":<br> "+o.title+" - "+o.name+"<br>"}}catch(t){i=!0,s=t}finally{try{!e&&n.return&&n.return()}finally{if(i)throw s}}this.printResponse(t),this.printCommand()},callSkillsCommand:function(){var t="";t+="<br><span>My Skills:</span><br><br>";var e=!0,i=!1,s=void 0;try{for(var a,n=__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_get_iterator___default()(__WEBPACK_IMPORTED_MODULE_3__config_skills__.a);!(e=(a=n.next()).done);e=!0){var o=a.value;t+="- "+o.name+": "+o.percent+"% ("+o.time+")<br>"}}catch(t){i=!0,s=t}finally{try{!e&&n.return&&n.return()}finally{if(i)throw s}}this.printResponse(t),this.printCommand()},callClearCommand:function(){__WEBPACK_IMPORTED_MODULE_2_jquery___default()(".terminal").empty(),this.sayHello()},callUndefinedCommand:function(){this.printResponse(this.info.undefinedCommandText),this.printCommand()},callEmulateJsCommand:function(){this.printResponse(this.info.startEmulateJSMessage),this.emulateMode=!0,this.printCommand()},emulateJsCommand:function emulateJsCommand(){try{this.printResponse(eval(this.textCommand))}catch(t){this.printResponse(t)}this.printCommand()},exitEmulateJSCommand:function(){this.printResponse(this.info.endEmulateJSMessage),this.emulateMode=!1,this.printCommand()},init:function(){var t=this;window.addEventListener("keyup",function(e){if(__WEBPACK_IMPORTED_MODULE_2_jquery___default()(t.$refs.terminal).closest(".window-border").hasClass("active"))switch(e.key){case"Backspace":t.textCommand=t.textCommand.slice(0,-1),t.writingText(t.textCommand);break;case"Enter":t.callCommand(t.textCommand),t.textCommand="";break;default:1===e.key.length&&(t.textCommand+=e.key,t.writingText(t.textCommand))}})}}}}},["NHnr"]);
//# sourceMappingURL=app.93c1f6ed1f0c82d97848.js.map