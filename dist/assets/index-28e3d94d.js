import{j as B,f as $,r as u,E as j,s as D,F as f,G as _,v as C,H as F,J as M,K as N,x as z,b as n,q as d,k as P,L as b,A as R,M as U,z as x,I as q,l as A}from"./index-f6b453d6.js";const[G,t]=B("image"),H={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:P,errorIcon:b("photo-fail"),iconPrefix:String,showLoading:P,loadingIcon:b("photo")};var J=$({name:G,props:H,emits:["load","error"],setup(a,{emit:v,slots:s}){const i=u(!1),o=u(!0),r=u(),{$Lazyload:l}=j().proxy,E=D(()=>{const e={width:f(a.width),height:f(a.height)};return _(a.radius)&&(e.overflow="hidden",e.borderRadius=f(a.radius)),e});C(()=>a.src,()=>{i.value=!1,o.value=!0});const g=e=>{o.value&&(o.value=!1,v("load",e))},h=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:r.value,enumerable:!0}),g(e)},m=e=>{i.value=!0,o.value=!1,v("error",e)},L=(e,c,I)=>I?I():n(q,{name:e,size:a.iconSize,class:c,classPrefix:a.iconPrefix},null),S=()=>{if(o.value&&a.showLoading)return n("div",{class:t("loading")},[L(a.loadingIcon,t("loading-icon"),s.loading)]);if(i.value&&a.showError)return n("div",{class:t("error")},[L(a.errorIcon,t("error-icon"),s.error)])},k=()=>{if(i.value||!a.src)return;const e={alt:a.alt,class:t("img"),style:{objectFit:a.fit,objectPosition:a.position}};return a.lazyLoad?R(n("img",x({ref:r},e),null),[[U("lazy"),a.src]]):n("img",x({ref:r,src:a.src,onLoad:g,onError:m},e),null)},w=({el:e})=>{const c=()=>{e===r.value&&o.value&&h()};r.value?c():z(c)},y=({el:e})=>{e===r.value&&!i.value&&m()};return l&&F&&(l.$on("loaded",w),l.$on("error",y),M(()=>{l.$off("loaded",w),l.$off("error",y)})),N(()=>{z(()=>{var e;(e=r.value)!=null&&e.complete&&!a.lazyLoad&&h()})}),()=>{var e;return n("div",{class:t({round:a.round,block:a.block}),style:E.value},[k(),S(),(e=s.default)==null?void 0:e.call(s)])}}});const O=A(J);export{O as I};