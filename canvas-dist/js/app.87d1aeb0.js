(function(t){function e(e){for(var o,r,c=e[0],s=e[1],u=e[2],l=0,h=[];l<c.length;l++)r=c[l],a[r]&&h.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);f&&f(e);while(h.length)h.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],o=!0,r=1;r<n.length;r++){var s=n[r];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var o={},a={app:0},i=[];function r(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"2d2c5e89"}[t]+".js"}function c(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n=a[t];if(0!==n)if(n)e.push(n[2]);else{var o=new Promise(function(e,o){n=a[t]=[e,o]});e.push(n[2]=o);var i,s=document.createElement("script");s.charset="utf-8",s.timeout=120,c.nc&&s.setAttribute("nonce",c.nc),s.src=r(t),i=function(e){s.onerror=s.onload=null,clearTimeout(u);var n=a[t];if(0!==n){if(n){var o=e&&("load"===e.type?"missing":e.type),i=e&&e.target&&e.target.src,r=new Error("Loading chunk "+t+" failed.\n("+o+": "+i+")");r.type=o,r.request=i,n[1](r)}a[t]=void 0}};var u=setTimeout(function(){i({type:"timeout",target:s})},12e4);s.onerror=s.onload=i,document.head.appendChild(s)}return Promise.all(e)},c.m=t,c.c=o,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)c.d(n,o,function(e){return t[e]}.bind(null,o));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"3c32":function(t,e,n){"use strict";var o=n("fea2"),a=n.n(o);a.a},"5c0b":function(t,e,n){"use strict";var o=n("5e27"),a=n.n(o);a.a},"5e27":function(t,e,n){},"6b2e":function(t,e,n){},c174:function(t,e,n){"use strict";var o=n("6b2e"),a=n.n(o);a.a},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var o=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},i=[],r=(n("5c0b"),n("2877")),c={},s=Object(r["a"])(c,a,i,!1,null,null,null),u=s.exports,l=n("8c4f"),f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home-wrap"},[n("canvas-back")],1)},h=[],d=n("d225"),v=n("308d"),p=n("6bb5"),b=n("4e2b"),m=n("9ab4"),w=n("60a3"),y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"lb-canvas-back-wrap"},[n("canvas",{ref:"cas",staticClass:"lb-canvas-box"})])},g=[],x=n("b0b4"),j=function(t){function e(){var t;return Object(d["a"])(this,e),t=Object(v["a"])(this,Object(p["a"])(e).apply(this,arguments)),t.RAF=null,t.canvas=null,t.warea=null,t.ctx=null,t.len=300,t.dots=[],t}return Object(b["a"])(e,t),Object(x["a"])(e,[{key:"init",value:function(){var t=this;this.canvas=this.$refs.cas,this.ctx=this.canvas.getContext("2d"),this.canvasSize(),this.spotLengthFn(),window.requestAnimationFrame=window.requestAnimationFrame||window.webkitRequestAnimationFrame,window.onresize=function(e){t.canvasSize()},this.mouseWarea(),this.addSpotData(),setTimeout(function(){t.spotPosition()},100)}},{key:"spotLengthFn",value:function(){var t=document.body.clientWidth,e=document.body.clientHeight;Math.floor(t*e/6500)<=50?this.len=100:Math.floor(t*e/6500)>=300?this.len=300:this.len=Math.floor(t*e/6500)}},{key:"addSpotData",value:function(){for(var t=0;t<this.len;t++){var e=Math.random()*this.canvas.width,n=Math.random()*this.canvas.height,o=2*Math.random()-1,a=2*Math.random()-1,i={x:e,y:n,xa:o,ya:a,max:15e3};this.dots.push(i)}}},{key:"mouseWarea",value:function(){var t=this;this.warea={x:null,y:null,max:2e4},window.onmousemove=function(e){e=e||window.event,t.warea.x=e.clientX,t.warea.y=e.clientY},window.onmouseout=function(e){t.warea.x=null,t.warea.y=null}}},{key:"spotPosition",value:function(){this.ctx.clearRect(0,0,this.canvas.width,this.canvas.height);for(var t=[this.warea].concat(this.dots),e=0;e<this.dots.length;e++){var n=this.dots[e];n.x+=n.xa,n.y+=n.ya,n.xa*=n.x>this.canvas.width||n.x<0?-1:1,n.ya*=n.y>this.canvas.height||n.y<0?-1:1,this.ctx.fillRect(n.x-.5,n.y-.5,1,1),this.ctx.fillStyle="#ffffff",this.spotLineSize(t,n),t.splice(t.indexOf(n),1)}this.RAF=requestAnimationFrame(this.spotPosition)}},{key:"spotLineSize",value:function(t,e){for(var n=0;n<t.length;n++){var o=t[n];if(o&&e!==o&&null!==o.x&&null!==o.y){var a=e.x-o.x,i=e.y-o.y,r=a*a+i*i,c=void 0;r<o.max&&(o===this.warea&&r>o.max/2&&(e.x-=.03*a,e.y-=.03*i),c=(o.max-r)/o.max,this.ctx.beginPath(),this.ctx.lineWidth=c/2,this.ctx.strokeStyle="rgba(49,90,148,"+(c+.2)+")",this.ctx.moveTo(e.x,e.y),this.ctx.lineTo(o.x,o.y),this.ctx.stroke())}}}},{key:"canvasSize",value:function(){this.canvas.width=window.innerWidth||document.documentElement.clientWidth||document.body.clientWidth,this.canvas.height=window.innerHeight||document.documentElement.clientHeight||document.body.clientHeight}},{key:"mounted",value:function(){this.init()}}]),e}(w["b"]);j=m["a"]([w["a"]],j);var O=j,k=O,S=(n("3c32"),Object(r["a"])(k,y,g,!1,null,"87b39836",null)),P=S.exports,_=function(t){function e(){return Object(d["a"])(this,e),Object(v["a"])(this,Object(p["a"])(e).apply(this,arguments))}return Object(b["a"])(e,t),e}(w["b"]);_=m["a"]([Object(w["a"])({components:{CanvasBack:P}})],_);var M=_,A=M,F=(n("c174"),Object(r["a"])(A,f,h,!1,null,"41415804",null)),E=F.exports;o["a"].use(l["a"]);var T=new l["a"]({mode:"history",base:"",routes:[{path:"/about",name:"about",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"*",name:"home",component:E}]}),C=n("2f62");o["a"].use(C["a"]);var W=new C["a"].Store({state:{},mutations:{},actions:{}}),q=n("9483");Object(q["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}}),o["a"].config.productionTip=!1,new o["a"]({router:T,store:W,render:function(t){return t(u)}}).$mount("#app")},fea2:function(t,e,n){}});