import{k as B,f as $,r as u,G as D,v as j,H as f,J as N,x as _,K as C,L as M,i as R,y as P,b as n,s as d,l as b,M as z,D as U,N as A,A as x,I as F,m as G}from"./index-46fd2c64.js";const[H,t]=B("image"),J={src:String,alt:String,fit:String,position:String,round:Boolean,block:Boolean,width:d,height:d,radius:d,lazyLoad:Boolean,iconSize:d,showError:b,errorIcon:z("photo-fail"),iconPrefix:String,showLoading:b,loadingIcon:z("photo")};var K=$({name:H,props:J,emits:["load","error"],setup(a,{emit:v,slots:s}){const i=u(!1),o=u(!0),r=u(),{$Lazyload:l}=D().proxy,S=j(()=>{const e={width:f(a.width),height:f(a.height)};return N(a.radius)&&(e.overflow="hidden",e.borderRadius=f(a.radius)),e});_(()=>a.src,()=>{i.value=!1,o.value=!0});const g=e=>{o.value&&(o.value=!1,v("load",e))},m=()=>{const e=new Event("load");Object.defineProperty(e,"target",{value:r.value,enumerable:!0}),g(e)},h=e=>{i.value=!0,o.value=!1,v("error",e)},y=(e,c,I)=>I?I():n(F,{name:e,size:a.iconSize,class:c,classPrefix:a.iconPrefix},null),k=()=>{if(o.value&&a.showLoading)return n("div",{class:t("loading")},[y(a.loadingIcon,t("loading-icon"),s.loading)]);if(i.value&&a.showError)return n("div",{class:t("error")},[y(a.errorIcon,t("error-icon"),s.error)])},E=()=>{if(i.value||!a.src)return;const e={alt:a.alt,class:t("img"),style:{objectFit:a.fit,objectPosition:a.position}};return a.lazyLoad?U(n("img",x({ref:r},e),null),[[A("lazy"),a.src]]):n("img",x({ref:r,src:a.src,onLoad:g,onError:h},e),null)},L=({el:e})=>{const c=()=>{e===r.value&&o.value&&m()};r.value?c():P(c)},w=({el:e})=>{e===r.value&&!i.value&&h()};return l&&C&&(l.$on("loaded",L),l.$on("error",w),M(()=>{l.$off("loaded",L),l.$off("error",w)})),R(()=>{P(()=>{var e;(e=r.value)!=null&&e.complete&&!a.lazyLoad&&m()})}),()=>{var e;return n("div",{class:t({round:a.round,block:a.block}),style:S.value},[E(),k(),(e=s.default)==null?void 0:e.call(s)])}}});const T=G(K);export{T as I};