!function(){function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(t,n,a){return(n=function(t){var n=function(t,n){if("object"!==e(t)||null===t)return t;var a=t[Symbol.toPrimitive];if(void 0!==a){var r=a.call(t,n||"default");if("object"!==e(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===n?String:Number)(t)}(t,"string");return"symbol"===e(n)?n:String(n)}(n))in t?Object.defineProperty(t,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[n]=a,t}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var a,r,l,o,i=[],u=!0,c=!1;try{if(l=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1}else for(;!(u=(a=l.call(n)).done)&&(i.push(a.value),i.length!==t);u=!0);}catch(d){c=!0,r=d}finally{try{if(!u&&null!=n.return&&(o=n.return(),Object(o)!==o))return}finally{if(c)throw r}}return i}}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return a(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return a(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}System.register(["./index-legacy-e3f13d30.js","./useClipboard-legacy-44a63ddc.js","./index-legacy-53e7436f.js"],(function(e,a){"use strict";var r,l,o,i,u,c,d,s,v,f,p,m,b,g,y,h,x,_,k,S,w,z,j,C,A,V,B,E,O,q,I,N,H,P,R=document.createElement("style");return R.textContent=':root{--van-collapse-item-duration: var(--van-duration-base);--van-collapse-item-content-padding: var(--van-padding-sm) var(--van-padding-md);--van-collapse-item-content-font-size: var(--van-font-size-md);--van-collapse-item-content-line-height: 1.5;--van-collapse-item-content-text-color: var(--van-text-color-2);--van-collapse-item-content-background: var(--van-background-2);--van-collapse-item-title-disabled-color: var(--van-text-color-3)}.van-collapse-item{position:relative}.van-collapse-item--border:after{position:absolute;box-sizing:border-box;content:" ";pointer-events:none;top:0;right:var(--van-padding-md);left:var(--van-padding-md);border-top:1px solid var(--van-border-color);transform:scaleY(.5)}.van-collapse-item__title .van-cell__right-icon:before{transform:rotate(90deg) translateZ(0);transition:transform var(--van-collapse-item-duration)}.van-collapse-item__title:after{right:var(--van-padding-md);display:none}.van-collapse-item__title--expanded .van-cell__right-icon:before{transform:rotate(-90deg)}.van-collapse-item__title--expanded:after{display:block}.van-collapse-item__title--borderless:after{display:none}.van-collapse-item__title--disabled{cursor:not-allowed}.van-collapse-item__title--disabled,.van-collapse-item__title--disabled .van-cell__right-icon{color:var(--van-collapse-item-title-disabled-color)}.van-collapse-item__wrapper{overflow:hidden;transition:height var(--van-collapse-item-duration) ease-in-out;will-change:height}.van-collapse-item__content{padding:var(--van-collapse-item-content-padding);color:var(--van-collapse-item-content-text-color);font-size:var(--van-collapse-item-content-font-size);line-height:var(--van-collapse-item-content-line-height);background:var(--van-collapse-item-content-background)}\n',document.head.appendChild(R),{setters:[function(e){r=e.j,l=e.f,o=e.k,i=e.l,u=e.b,c=e.B,d=e.m,s=e.n,v=e.q,f=e.s,p=e.v,m=e.r,b=e.x,g=e.y,y=e.z,h=e.A,x=e.C,_=e.D,k=e.E,S=e.F,w=e.G,z=e.H,j=e.J,C=e.o,A=e.g,V=e.w,B=e.d,E=e.a,O=e.t,q=e.u},function(e){I=e.a,N=e.u,H=e.B},function(e){P=e.I}],execute:function(){var a=n(r("collapse"),2),R=a[0],T=a[1],D=Symbol(R),L={border:d,accordion:Boolean,modelValue:{type:[String,Number,Array],default:""}},U=l({name:R,props:L,emits:["change","update:modelValue"],setup:function(e,n){var a=n.emit,r=n.slots,l=o(D),d=l.linkChildren,s=l.children,v=function(e){a("change",e),a("update:modelValue",e)};return i({toggleAll:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e.accordion){"boolean"==typeof t&&(t={expanded:t});var n=t,a=n.expanded,r=n.skipDisabled,l=s.filter((function(e){return e.disabled&&r?e.expanded.value:null!=a?a:!e.expanded.value})).map((function(e){return e.itemName.value}));v(l)}}}),d({toggle:function(t,n){var a=e.accordion,r=e.modelValue;v(a?t===r?"":t:n?r.concat(t):r.filter((function(e){return e!==t})))},isExpanded:function(t){var n=e.accordion,a=e.modelValue;return n?a===t:a.includes(t)}}),function(){var n;return u("div",{class:[T(),t({},c,e.border)]},[null==(n=r.default)?void 0:n.call(r)])}}}),F=s(U),G=n(r("collapse-item"),2),J=G[0],M=G[1],Y=["icon","title","value","label","right-icon"],Z=v({},f,{name:p,isLink:d,disabled:Boolean,readonly:Boolean,lazyRender:d}),$=l({name:J,props:Z,setup:function(e,t){var n=t.slots,a=m(),r=m(),l=b(D),o=l.parent,c=l.index;if(o){var d=g((function(){var t;return null!=(t=e.name)?t:c.value})),s=g((function(){return o.isExpanded(d.value)})),v=m(s.value),p=I((function(){return v.value||!e.lazyRender})),C=function(){s.value?a.value&&(a.value.style.height=""):v.value=!1};y(s,(function(e,t){null!==t&&(e&&(v.value=!0),(e?z:j)((function(){if(r.value&&a.value){var t=r.value.offsetHeight;if(t){var n="".concat(t,"px");a.value.style.height=e?"0":n,h((function(){a.value&&(a.value.style.height=e?n:"0")}))}else C()}})))}));var A=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:!s.value;o.toggle(d.value,e)},V=function(){e.disabled||e.readonly||A()},B=p((function(){var e;return S(u("div",{ref:a,class:M("wrapper"),onTransitionend:C},[u("div",{ref:r,class:M("content")},[null==(e=n.default)?void 0:e.call(n)])]),[[w,v.value]])}));return i({toggle:A,expanded:s,itemName:d}),function(){return u("div",{class:[M({border:c.value&&e.border})]},[(t=e.border,a=e.disabled,r=e.readonly,l=x(e,Object.keys(f)),r&&(l.isLink=!1),(a||r)&&(l.clickable=!1),u(k,_({role:"button",class:M("title",{disabled:a,expanded:s.value,borderless:!t}),"aria-expanded":String(s.value),onClick:V},l),x(n,Y))),B()]);var t,a,r,l}}}}),K=s($),Q=E("a",{href:"https://gitee.com/xlgp/opera-lyrics/blob/master/黄梅戏/五女拜寿-奉汤（男独唱）.lrc"},"格式",-1),W=E("p",null,"复制链接后，请在浏览器中打开链接，并下载最新的xiquzimu_vx.y.z_release.apk",-1);e("default",l({__name:"index",setup:function(e){var t=["1","2","3"],n=m([t[0]]),a=m("https://xlgp.gitee.io/xiquzimu-doc/#/download"),r=m(),l=N(a,r),o=l.copyHandler,i=l.createClipboard,c=function(e){e.includes(t[2])&&i()};return function(e,l){var i=P,d=K,s=H,v=F;return C(),A(v,{modelValue:n.value,"onUpdate:modelValue":l[0]||(l[0]=function(e){return n.value=e}),onChange:c},{default:V((function(){return[u(d,{title:"点赞",name:t[0]},{default:V((function(){return[B(" 双击悬浮窗头部时间可以点赞 "),u(i,{src:"https://xlgp.gitee.io/static/xiquzimu/dianzan-1.png",fit:"scale-down"})]})),_:1},8,["name"]),u(d,{title:"添加唱段",name:t[1]},{default:V((function(){return[B(" 点击唱段页面左上角图标，可添加唱段。 "),u(i,{src:"https://xlgp.gitee.io/static/xiquzimu/add-changduan-btn.jpg",fit:"scale-down"}),B(" 戏曲字幕允许用户按照"),Q,B("添加唱段。 ")]})),_:1},8,["name"]),u(d,{title:"下载戏曲字幕App",name:t[2]},{default:V((function(){return[E("p",null,O(a.value),1),W,u(s,{"data-clipboard-text":a.value,ref_key:"copyBtnRef",ref:r,type:"primary",size:"small",onClick:q(o),block:""},{default:V((function(){return[B("复制下载链接")]})),_:1},8,["data-clipboard-text","onClick"])]})),_:1},8,["name"])]})),_:1},8,["modelValue"])}}}))}}}))}();