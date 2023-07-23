import{f as L,h as S,r as I,g as $,i as Z,o as x,c as j,b as y,w as Y,u as G,d as K,a as z,t as ee,p as te,j as re,_ as ne}from"./index-c6e4a2f2.js";import{u as oe,B as ae}from"./useClipboard-8be4138f.js";/*!
 * qrcode.vue v3.4.0
 * A Vue.js component to generate QRCode.
 * © 2017-2023 @scopewu(https://github.com/scopewu)
 * MIT License.
 */var O=function(){return O=Object.assign||function(f){for(var l,u=1,h=arguments.length;u<h;u++){l=arguments[u];for(var v in l)Object.prototype.hasOwnProperty.call(l,v)&&(f[v]=l[v])}return f},O.apply(this,arguments)},_;(function(s){var f=function(){function n(e,t,r,o){if(this.version=e,this.errorCorrectionLevel=t,this.modules=[],this.isFunction=[],e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version value out of range");if(o<-1||o>7)throw new RangeError("Mask value out of range");this.size=e*4+17;for(var a=[],i=0;i<this.size;i++)a.push(!1);for(var i=0;i<this.size;i++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();var c=this.addEccAndInterleave(r);if(this.drawCodewords(c),o==-1)for(var d=1e9,i=0;i<8;i++){this.applyMask(i),this.drawFormatBits(i);var m=this.getPenaltyScore();m<d&&(o=i,d=m),this.applyMask(i)}h(0<=o&&o<=7),this.mask=o,this.applyMask(o),this.drawFormatBits(o),this.isFunction=[]}return n.encodeText=function(e,t){var r=s.QrSegment.makeSegments(e);return n.encodeSegments(r,t)},n.encodeBinary=function(e,t){var r=s.QrSegment.makeBytes(e);return n.encodeSegments([r],t)},n.encodeSegments=function(e,t,r,o,a,i){if(r===void 0&&(r=1),o===void 0&&(o=40),a===void 0&&(a=-1),i===void 0&&(i=!0),!(n.MIN_VERSION<=r&&r<=o&&o<=n.MAX_VERSION)||a<-1||a>7)throw new RangeError("Invalid value");var c,d;for(c=r;;c++){var m=n.getNumDataCodewords(c,t)*8,E=v.getTotalBits(e,c);if(E<=m){d=E;break}if(c>=o)throw new RangeError("Data too long")}for(var g=0,C=[n.Ecc.MEDIUM,n.Ecc.QUARTILE,n.Ecc.HIGH];g<C.length;g++){var w=C[g];i&&d<=n.getNumDataCodewords(c,w)*8&&(t=w)}for(var p=[],M=0,N=e;M<N.length;M++){var R=N[M];l(R.mode.modeBits,4,p),l(R.numChars,R.mode.numCharCountBits(c),p);for(var P=0,b=R.getData();P<b.length;P++){var q=b[P];p.push(q)}}h(p.length==d);var T=n.getNumDataCodewords(c,t)*8;h(p.length<=T),l(0,Math.min(4,T-p.length),p),l(0,(8-p.length%8)%8,p),h(p.length%8==0);for(var U=236;p.length<T;U^=253)l(U,8,p);for(var B=[];B.length*8<p.length;)B.push(0);return p.forEach(function(J,H){return B[H>>>3]|=J<<7-(H&7)}),new n(c,t,B,a)},n.prototype.getModule=function(e,t){return 0<=e&&e<this.size&&0<=t&&t<this.size&&this.modules[t][e]},n.prototype.getModules=function(){return this.modules},n.prototype.drawFunctionPatterns=function(){for(var e=0;e<this.size;e++)this.setFunctionModule(6,e,e%2==0),this.setFunctionModule(e,6,e%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);for(var t=this.getAlignmentPatternPositions(),r=t.length,e=0;e<r;e++)for(var o=0;o<r;o++)e==0&&o==0||e==0&&o==r-1||e==r-1&&o==0||this.drawAlignmentPattern(t[e],t[o]);this.drawFormatBits(0),this.drawVersion()},n.prototype.drawFormatBits=function(e){for(var t=this.errorCorrectionLevel.formatBits<<3|e,r=t,o=0;o<10;o++)r=r<<1^(r>>>9)*1335;var a=(t<<10|r)^21522;h(a>>>15==0);for(var o=0;o<=5;o++)this.setFunctionModule(8,o,u(a,o));this.setFunctionModule(8,7,u(a,6)),this.setFunctionModule(8,8,u(a,7)),this.setFunctionModule(7,8,u(a,8));for(var o=9;o<15;o++)this.setFunctionModule(14-o,8,u(a,o));for(var o=0;o<8;o++)this.setFunctionModule(this.size-1-o,8,u(a,o));for(var o=8;o<15;o++)this.setFunctionModule(8,this.size-15+o,u(a,o));this.setFunctionModule(8,this.size-8,!0)},n.prototype.drawVersion=function(){if(!(this.version<7)){for(var e=this.version,t=0;t<12;t++)e=e<<1^(e>>>11)*7973;var r=this.version<<12|e;h(r>>>18==0);for(var t=0;t<18;t++){var o=u(r,t),a=this.size-11+t%3,i=Math.floor(t/3);this.setFunctionModule(a,i,o),this.setFunctionModule(i,a,o)}}},n.prototype.drawFinderPattern=function(e,t){for(var r=-4;r<=4;r++)for(var o=-4;o<=4;o++){var a=Math.max(Math.abs(o),Math.abs(r)),i=e+o,c=t+r;0<=i&&i<this.size&&0<=c&&c<this.size&&this.setFunctionModule(i,c,a!=2&&a!=4)}},n.prototype.drawAlignmentPattern=function(e,t){for(var r=-2;r<=2;r++)for(var o=-2;o<=2;o++)this.setFunctionModule(e+o,t+r,Math.max(Math.abs(o),Math.abs(r))!=1)},n.prototype.setFunctionModule=function(e,t,r){this.modules[t][e]=r,this.isFunction[t][e]=!0},n.prototype.addEccAndInterleave=function(e){var t=this.version,r=this.errorCorrectionLevel;if(e.length!=n.getNumDataCodewords(t,r))throw new RangeError("Invalid argument");for(var o=n.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][t],a=n.ECC_CODEWORDS_PER_BLOCK[r.ordinal][t],i=Math.floor(n.getNumRawDataModules(t)/8),c=o-i%o,d=Math.floor(i/o),m=[],E=n.reedSolomonComputeDivisor(a),g=0,C=0;g<o;g++){var w=e.slice(C,C+d-a+(g<c?0:1));C+=w.length;var p=n.reedSolomonComputeRemainder(w,E);g<c&&w.push(0),m.push(w.concat(p))}for(var M=[],N=function(R){m.forEach(function(P,b){(R!=d-a||b>=c)&&M.push(P[R])})},g=0;g<m[0].length;g++)N(g);return h(M.length==i),M},n.prototype.drawCodewords=function(e){if(e.length!=Math.floor(n.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var t=0,r=this.size-1;r>=1;r-=2){r==6&&(r=5);for(var o=0;o<this.size;o++)for(var a=0;a<2;a++){var i=r-a,c=(r+1&2)==0,d=c?this.size-1-o:o;!this.isFunction[d][i]&&t<e.length*8&&(this.modules[d][i]=u(e[t>>>3],7-(t&7)),t++)}}h(t==e.length*8)},n.prototype.applyMask=function(e){if(e<0||e>7)throw new RangeError("Mask value out of range");for(var t=0;t<this.size;t++)for(var r=0;r<this.size;r++){var o=void 0;switch(e){case 0:o=(r+t)%2==0;break;case 1:o=t%2==0;break;case 2:o=r%3==0;break;case 3:o=(r+t)%3==0;break;case 4:o=(Math.floor(r/3)+Math.floor(t/2))%2==0;break;case 5:o=r*t%2+r*t%3==0;break;case 6:o=(r*t%2+r*t%3)%2==0;break;case 7:o=((r+t)%2+r*t%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[t][r]&&o&&(this.modules[t][r]=!this.modules[t][r])}},n.prototype.getPenaltyScore=function(){for(var e=0,t=0;t<this.size;t++){for(var r=!1,o=0,a=[0,0,0,0,0,0,0],i=0;i<this.size;i++)this.modules[t][i]==r?(o++,o==5?e+=n.PENALTY_N1:o>5&&e++):(this.finderPenaltyAddHistory(o,a),r||(e+=this.finderPenaltyCountPatterns(a)*n.PENALTY_N3),r=this.modules[t][i],o=1);e+=this.finderPenaltyTerminateAndCount(r,o,a)*n.PENALTY_N3}for(var i=0;i<this.size;i++){for(var r=!1,c=0,a=[0,0,0,0,0,0,0],t=0;t<this.size;t++)this.modules[t][i]==r?(c++,c==5?e+=n.PENALTY_N1:c>5&&e++):(this.finderPenaltyAddHistory(c,a),r||(e+=this.finderPenaltyCountPatterns(a)*n.PENALTY_N3),r=this.modules[t][i],c=1);e+=this.finderPenaltyTerminateAndCount(r,c,a)*n.PENALTY_N3}for(var t=0;t<this.size-1;t++)for(var i=0;i<this.size-1;i++){var d=this.modules[t][i];d==this.modules[t][i+1]&&d==this.modules[t+1][i]&&d==this.modules[t+1][i+1]&&(e+=n.PENALTY_N2)}for(var m=0,E=0,g=this.modules;E<g.length;E++){var C=g[E];m=C.reduce(function(M,N){return M+(N?1:0)},m)}var w=this.size*this.size,p=Math.ceil(Math.abs(m*20-w*10)/w)-1;return h(0<=p&&p<=9),e+=p*n.PENALTY_N4,h(0<=e&&e<=2568888),e},n.prototype.getAlignmentPatternPositions=function(){if(this.version==1)return[];for(var e=Math.floor(this.version/7)+2,t=this.version==32?26:Math.ceil((this.version*4+4)/(e*2-2))*2,r=[6],o=this.size-7;r.length<e;o-=t)r.splice(1,0,o);return r},n.getNumRawDataModules=function(e){if(e<n.MIN_VERSION||e>n.MAX_VERSION)throw new RangeError("Version number out of range");var t=(16*e+128)*e+64;if(e>=2){var r=Math.floor(e/7)+2;t-=(25*r-10)*r-55,e>=7&&(t-=36)}return h(208<=t&&t<=29648),t},n.getNumDataCodewords=function(e,t){return Math.floor(n.getNumRawDataModules(e)/8)-n.ECC_CODEWORDS_PER_BLOCK[t.ordinal][e]*n.NUM_ERROR_CORRECTION_BLOCKS[t.ordinal][e]},n.reedSolomonComputeDivisor=function(e){if(e<1||e>255)throw new RangeError("Degree out of range");for(var t=[],r=0;r<e-1;r++)t.push(0);t.push(1);for(var o=1,r=0;r<e;r++){for(var a=0;a<t.length;a++)t[a]=n.reedSolomonMultiply(t[a],o),a+1<t.length&&(t[a]^=t[a+1]);o=n.reedSolomonMultiply(o,2)}return t},n.reedSolomonComputeRemainder=function(e,t){for(var r=t.map(function(d){return 0}),o=function(d){var m=d^r.shift();r.push(0),t.forEach(function(E,g){return r[g]^=n.reedSolomonMultiply(E,m)})},a=0,i=e;a<i.length;a++){var c=i[a];o(c)}return r},n.reedSolomonMultiply=function(e,t){if(e>>>8||t>>>8)throw new RangeError("Byte out of range");for(var r=0,o=7;o>=0;o--)r=r<<1^(r>>>7)*285,r^=(t>>>o&1)*e;return h(r>>>8==0),r},n.prototype.finderPenaltyCountPatterns=function(e){var t=e[1];h(t<=this.size*3);var r=t>0&&e[2]==t&&e[3]==t*3&&e[4]==t&&e[5]==t;return(r&&e[0]>=t*4&&e[6]>=t?1:0)+(r&&e[6]>=t*4&&e[0]>=t?1:0)},n.prototype.finderPenaltyTerminateAndCount=function(e,t,r){return e&&(this.finderPenaltyAddHistory(t,r),t=0),t+=this.size,this.finderPenaltyAddHistory(t,r),this.finderPenaltyCountPatterns(r)},n.prototype.finderPenaltyAddHistory=function(e,t){t[0]==0&&(e+=this.size),t.pop(),t.unshift(e)},n.MIN_VERSION=1,n.MAX_VERSION=40,n.PENALTY_N1=3,n.PENALTY_N2=3,n.PENALTY_N3=40,n.PENALTY_N4=10,n.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],n.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],n}();s.QrCode=f;function l(n,e,t){if(e<0||e>31||n>>>e)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)t.push(n>>>r&1)}function u(n,e){return(n>>>e&1)!=0}function h(n){if(!n)throw new Error("Assertion error")}var v=function(){function n(e,t,r){if(this.mode=e,this.numChars=t,this.bitData=r,t<0)throw new RangeError("Invalid argument");this.bitData=r.slice()}return n.makeBytes=function(e){for(var t=[],r=0,o=e;r<o.length;r++){var a=o[r];l(a,8,t)}return new n(n.Mode.BYTE,e.length,t)},n.makeNumeric=function(e){if(!n.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var t=[],r=0;r<e.length;){var o=Math.min(e.length-r,3);l(parseInt(e.substring(r,r+o),10),o*3+1,t),r+=o}return new n(n.Mode.NUMERIC,e.length,t)},n.makeAlphanumeric=function(e){if(!n.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var t=[],r;for(r=0;r+2<=e.length;r+=2){var o=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r))*45;o+=n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),l(o,11,t)}return r<e.length&&l(n.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,t),new n(n.Mode.ALPHANUMERIC,e.length,t)},n.makeSegments=function(e){return e==""?[]:n.isNumeric(e)?[n.makeNumeric(e)]:n.isAlphanumeric(e)?[n.makeAlphanumeric(e)]:[n.makeBytes(n.toUtf8ByteArray(e))]},n.makeEci=function(e){var t=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)l(e,8,t);else if(e<16384)l(2,2,t),l(e,14,t);else if(e<1e6)l(6,3,t),l(e,21,t);else throw new RangeError("ECI assignment value out of range");return new n(n.Mode.ECI,0,t)},n.isNumeric=function(e){return n.NUMERIC_REGEX.test(e)},n.isAlphanumeric=function(e){return n.ALPHANUMERIC_REGEX.test(e)},n.prototype.getData=function(){return this.bitData.slice()},n.getTotalBits=function(e,t){for(var r=0,o=0,a=e;o<a.length;o++){var i=a[o],c=i.mode.numCharCountBits(t);if(i.numChars>=1<<c)return 1/0;r+=4+c+i.bitData.length}return r},n.toUtf8ByteArray=function(e){e=encodeURI(e);for(var t=[],r=0;r<e.length;r++)e.charAt(r)!="%"?t.push(e.charCodeAt(r)):(t.push(parseInt(e.substring(r+1,r+3),16)),r+=2);return t},n.NUMERIC_REGEX=/^[0-9]*$/,n.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,n.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",n}();s.QrSegment=v})(_||(_={}));(function(s){(function(f){var l=function(){function u(h,v){this.ordinal=h,this.formatBits=v}return u.LOW=new u(0,1),u.MEDIUM=new u(1,0),u.QUARTILE=new u(2,3),u.HIGH=new u(3,2),u}();f.Ecc=l})(s.QrCode||(s.QrCode={}))})(_||(_={}));(function(s){(function(f){var l=function(){function u(h,v){this.modeBits=h,this.numBitsCharCount=v}return u.prototype.numCharCountBits=function(h){return this.numBitsCharCount[Math.floor((h+7)/17)]},u.NUMERIC=new u(1,[10,12,14]),u.ALPHANUMERIC=new u(2,[9,11,13]),u.BYTE=new u(4,[8,16,16]),u.KANJI=new u(8,[8,10,12]),u.ECI=new u(7,[0,0,0]),u}();f.Mode=l})(s.QrSegment||(s.QrSegment={}))})(_||(_={}));var A=_,V="H",F={L:A.QrCode.Ecc.LOW,M:A.QrCode.Ecc.MEDIUM,Q:A.QrCode.Ecc.QUARTILE,H:A.QrCode.Ecc.HIGH},ie=function(){try{new Path2D().addPath(new Path2D)}catch(s){return!1}return!0}();function W(s){return s in F}function X(s,f){f===void 0&&(f=0);var l=[];return s.forEach(function(u,h){var v=null;u.forEach(function(n,e){if(!n&&v!==null){l.push("M".concat(v+f," ").concat(h+f,"h").concat(e-v,"v1H").concat(v+f,"z")),v=null;return}if(e===u.length-1){if(!n)return;v===null?l.push("M".concat(e+f,",").concat(h+f," h1v1H").concat(e+f,"z")):l.push("M".concat(v+f,",").concat(h+f," h").concat(e+1-v,"v1H").concat(v+f,"z"));return}n&&v===null&&(v=e)})}),l.join("")}var Q={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:V,validator:function(s){return W(s)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},se=O(O({},Q),{renderAs:{type:String,required:!1,default:"canvas",validator:function(s){return["canvas","svg"].indexOf(s)>-1}}}),ue=L({name:"QRCodeSvg",props:Q,setup:function(s){var f=I(0),l=I(""),u=function(){var h=s.value,v=s.level,n=s.margin,e=A.QrCode.encodeText(h,F[v]).getModules();f.value=e.length+n*2,l.value=X(e,n)};return u(),$(u),function(){return S("svg",{width:s.size,height:s.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(f.value," ").concat(f.value)},[S("path",{fill:s.background,d:"M0,0 h".concat(f.value,"v").concat(f.value,"H0z")}),S("path",{fill:s.foreground,d:l.value})])}}}),le=L({name:"QRCodeCanvas",props:Q,setup:function(s){var f=I(null),l=function(){var u=s.value,h=s.level,v=s.size,n=s.margin,e=s.background,t=s.foreground,r=f.value;if(r){var o=r.getContext("2d");if(o){var a=A.QrCode.encodeText(u,F[h]).getModules(),i=a.length+n*2,c=window.devicePixelRatio||1,d=v/i*c;r.height=r.width=v*c,o.scale(d,d),o.fillStyle=e,o.fillRect(0,0,i,i),o.fillStyle=t,ie?o.fill(new Path2D(X(a,n))):a.forEach(function(m,E){m.forEach(function(g,C){g&&o.fillRect(C+n,E+n,1,1)})})}}};return Z(l),$(l),function(){return S("canvas",{ref:f,style:{width:"".concat(s.size,"px"),height:"".concat(s.size,"px")}})}}}),ce=L({name:"Qrcode",render:function(){var s=this.$props,f=s.renderAs,l=s.value,u=s.size,h=s.margin,v=s.level,n=s.background,e=s.foreground,t=u>>>0,r=h>>>0,o=W(v)?v:V;return S(f==="svg"?ue:le,{value:l,size:t,margin:r,level:o,background:n,foreground:e})},props:se});const D=s=>(te("data-v-6cb50697"),s=s(),re(),s),fe={class:"box"},he=D(()=>z("h3",null,"戏曲字幕应用",-1)),ve=D(()=>z("div",{class:"van-cell-group__title"},"心灵的孤僻",-1)),de=D(()=>z("div",{class:"van-cell-group__title"},"或扫码",-1)),pe=D(()=>z("div",{class:"tip"},"复制链接后，请在浏览器中打开链接，并下载最新的xiquzimu_vx.y.z_release.apk",-1)),k="#780af6",ge=L({__name:"index",setup(s){const f="v13.6.0",l=I("https://xlgp.gitee.io/xiquzimu-doc/#/download"),u=I(),h=`https://gitee.com/xlgp/xiquzimu-apk/releases/download/${f}/xiquzimu_${f}_release.apk`,{copyHandler:v}=oe(l,u);return(n,e)=>{const t=ae;return x(),j("div",fe,[he,ve,y(t,{plain:"",url:h,color:k,icon:"down",type:"primary",block:"",round:""},{default:Y(()=>[K("下载"),z("small",null,"("+ee(G(f))+")",1)]),_:1}),de,y(ce,{value:h,size:200,level:"L",foreground:k}),y(t,{"data-clipboard-text":l.value,ref_key:"copyBtnRef",ref:u,type:"primary",size:"mini",plain:"",color:k,block:"",round:"",onClick:G(v),class:"copybtn"},{default:Y(()=>[K("或者点我复制下载链接")]),_:1},8,["data-clipboard-text","onClick"]),pe])}}});const Ce=ne(ge,[["__scopeId","data-v-6cb50697"]]);export{Ce as default};
