import{e as B,f as $,r as u,H as j,C,J as f,i as D,w as N,K as _,L as M,M as O,G as P,b as n,A as d,x as b,N as z,h as R,O as U,E as x,I as A,j as F}from"./index-3f01bbd7.js";const[G,t]=B("image"),H={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:b,errorIcon:z("photo-fail"),iconPrefix:String,showLoading:b,loadingIcon:z("photo")};var J=$({name:G,props:H,emits:["load","error"],setup(a,{emit:v,slots:s}){const i=u(!1),o=u(!0),r=u(),{$Lazyload:l}=j().proxy,E=C(()=>{const e={width:f(a.width),height:f(a.height)};return D(a.radius)&&(e.overflow="hidden",e.borderRadius=f(a.radius)),e});N(()=>a.src,()=>{i.value=!1,o.value=!0});const g=e=>{o.value&&(o.value=!1,v("load",e))},h=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:r.value,enumerable:!0}),g(e)},m=e=>{i.value=!0,o.value=!1,v("error",e)},w=(e,c,I)=>I?I():n(A,{name:e,size:a.iconSize,class:c,classPrefix:a.iconPrefix},null),S=()=>{if(o.value&&a.showLoading)return n("div",{class:t("loading")},[w(a.loadingIcon,t("loading-icon"),s.loading)]);if(i.value&&a.showError)return n("div",{class:t("error")},[w(a.errorIcon,t("error-icon"),s.error)])},k=()=>{if(i.value||!a.src)return;const e={alt:a.alt,class:t("img"),style:{objectFit:a.fit,objectPosition:a.position}};return a.lazyLoad?R(n("img",x({ref:r},e),null),[[U("lazy"),a.src]]):n("img",x({ref:r,src:a.src,onLoad:g,onError:m},e),null)},L=({el:e})=>{const c=()=>{e===r.value&&o.value&&h()};r.value?c():P(c)},y=({el:e})=>{e===r.value&&!i.value&&m()};return l&&_&&(l.$on("loaded",L),l.$on("error",y),M(()=>{l.$off("loaded",L),l.$off("error",y)})),O(()=>{P(()=>{var e;(e=r.value)!=null&&e.complete&&!a.lazyLoad&&h()})}),()=>{var e;return n("div",{class:t({round:a.round,block:a.block}),style:E.value},[k(),S(),(e=s.default)==null?void 0:e.call(s)])}}});const T=F(J);export{T as I};
