System.register(["./index-legacy-6746989d.js","./index-legacy-23b2b58c.js"],(function(t,e){"use strict";var n,r,o,i,a,s,u,l,c,h,f,d,v,g,m,p,E=document.createElement("style");return E.textContent=".box[data-v-42ee45d8]{display:flex;flex-flow:column;padding:0 30px;align-items:center;justify-content:center;position:fixed;margin-top:-50px;background:linear-gradient(324deg,#9c48fb 0%,white 40%,#9c48fb 97%);background-color:#f1e5ff;right:0;left:0;bottom:0;top:0}\n",document.head.appendChild(E),{setters:[function(t){n=t.f,r=t.h,o=t.r,i=t.g,a=t.i,s=t.o,u=t.c,l=t.b,c=t.w,h=t.d,f=t.a,d=t.t,v=t.p,g=t.j,m=t._},function(t){p=t.B}],execute:function(){
/*!
             * qrcode.vue v3.4.0
             * A Vue.js component to generate QRCode.
             * © 2017-2023 @scopewu(https://github.com/scopewu)
             * MIT License.
             */
var e,E=function(){return E=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var o in e=arguments[n])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t},E.apply(this,arguments)};!function(t){var e=function(){function e(t,n,r,i){if(this.version=t,this.errorCorrectionLevel=n,this.modules=[],this.isFunction=[],t<e.MIN_VERSION||t>e.MAX_VERSION)throw new RangeError("Version value out of range");if(i<-1||i>7)throw new RangeError("Mask value out of range");this.size=4*t+17;for(var a=[],s=0;s<this.size;s++)a.push(!1);for(s=0;s<this.size;s++)this.modules.push(a.slice()),this.isFunction.push(a.slice());this.drawFunctionPatterns();var u=this.addEccAndInterleave(r);if(this.drawCodewords(u),-1==i){var l=1e9;for(s=0;s<8;s++){this.applyMask(s),this.drawFormatBits(s);var c=this.getPenaltyScore();c<l&&(i=s,l=c),this.applyMask(s)}}o(0<=i&&i<=7),this.mask=i,this.applyMask(i),this.drawFormatBits(i),this.isFunction=[]}return e.encodeText=function(n,r){var o=t.QrSegment.makeSegments(n);return e.encodeSegments(o,r)},e.encodeBinary=function(n,r){var o=t.QrSegment.makeBytes(n);return e.encodeSegments([o],r)},e.encodeSegments=function(t,r,a,s,u,l){if(void 0===a&&(a=1),void 0===s&&(s=40),void 0===u&&(u=-1),void 0===l&&(l=!0),!(e.MIN_VERSION<=a&&a<=s&&s<=e.MAX_VERSION)||u<-1||u>7)throw new RangeError("Invalid value");var c,h;for(c=a;;c++){var f=8*e.getNumDataCodewords(c,r),d=i.getTotalBits(t,c);if(d<=f){h=d;break}if(c>=s)throw new RangeError("Data too long")}for(var v=0,g=[e.Ecc.MEDIUM,e.Ecc.QUARTILE,e.Ecc.HIGH];v<g.length;v++){var m=g[v];l&&h<=8*e.getNumDataCodewords(c,m)&&(r=m)}for(var p=[],E=0,w=t;E<w.length;E++){var M=w[E];n(M.mode.modeBits,4,p),n(M.numChars,M.mode.numCharCountBits(c),p);for(var C=0,R=M.getData();C<R.length;C++){var y=R[C];p.push(y)}}o(p.length==h);var N=8*e.getNumDataCodewords(c,r);o(p.length<=N),n(0,Math.min(4,N-p.length),p),n(0,(8-p.length%8)%8,p),o(p.length%8==0);for(var A=236;p.length<N;A^=253)n(A,8,p);for(var P=[];8*P.length<p.length;)P.push(0);return p.forEach((function(t,e){return P[e>>>3]|=t<<7-(7&e)})),new e(c,r,P,u)},e.prototype.getModule=function(t,e){return 0<=t&&t<this.size&&0<=e&&e<this.size&&this.modules[e][t]},e.prototype.getModules=function(){return this.modules},e.prototype.drawFunctionPatterns=function(){for(var t=0;t<this.size;t++)this.setFunctionModule(6,t,t%2==0),this.setFunctionModule(t,6,t%2==0);this.drawFinderPattern(3,3),this.drawFinderPattern(this.size-4,3),this.drawFinderPattern(3,this.size-4);var e=this.getAlignmentPatternPositions(),n=e.length;for(t=0;t<n;t++)for(var r=0;r<n;r++)0==t&&0==r||0==t&&r==n-1||t==n-1&&0==r||this.drawAlignmentPattern(e[t],e[r]);this.drawFormatBits(0),this.drawVersion()},e.prototype.drawFormatBits=function(t){for(var e=this.errorCorrectionLevel.formatBits<<3|t,n=e,i=0;i<10;i++)n=n<<1^1335*(n>>>9);var a=21522^(e<<10|n);for(o(a>>>15==0),i=0;i<=5;i++)this.setFunctionModule(8,i,r(a,i));for(this.setFunctionModule(8,7,r(a,6)),this.setFunctionModule(8,8,r(a,7)),this.setFunctionModule(7,8,r(a,8)),i=9;i<15;i++)this.setFunctionModule(14-i,8,r(a,i));for(i=0;i<8;i++)this.setFunctionModule(this.size-1-i,8,r(a,i));for(i=8;i<15;i++)this.setFunctionModule(8,this.size-15+i,r(a,i));this.setFunctionModule(8,this.size-8,!0)},e.prototype.drawVersion=function(){if(!(this.version<7)){for(var t=this.version,e=0;e<12;e++)t=t<<1^7973*(t>>>11);var n=this.version<<12|t;for(o(n>>>18==0),e=0;e<18;e++){var i=r(n,e),a=this.size-11+e%3,s=Math.floor(e/3);this.setFunctionModule(a,s,i),this.setFunctionModule(s,a,i)}}},e.prototype.drawFinderPattern=function(t,e){for(var n=-4;n<=4;n++)for(var r=-4;r<=4;r++){var o=Math.max(Math.abs(r),Math.abs(n)),i=t+r,a=e+n;0<=i&&i<this.size&&0<=a&&a<this.size&&this.setFunctionModule(i,a,2!=o&&4!=o)}},e.prototype.drawAlignmentPattern=function(t,e){for(var n=-2;n<=2;n++)for(var r=-2;r<=2;r++)this.setFunctionModule(t+r,e+n,1!=Math.max(Math.abs(r),Math.abs(n)))},e.prototype.setFunctionModule=function(t,e,n){this.modules[e][t]=n,this.isFunction[e][t]=!0},e.prototype.addEccAndInterleave=function(t){var n=this.version,r=this.errorCorrectionLevel;if(t.length!=e.getNumDataCodewords(n,r))throw new RangeError("Invalid argument");for(var i=e.NUM_ERROR_CORRECTION_BLOCKS[r.ordinal][n],a=e.ECC_CODEWORDS_PER_BLOCK[r.ordinal][n],s=Math.floor(e.getNumRawDataModules(n)/8),u=i-s%i,l=Math.floor(s/i),c=[],h=e.reedSolomonComputeDivisor(a),f=0,d=0;f<i;f++){var v=t.slice(d,d+l-a+(f<u?0:1));d+=v.length;var g=e.reedSolomonComputeRemainder(v,h);f<u&&v.push(0),c.push(v.concat(g))}var m=[],p=function(t){c.forEach((function(e,n){(t!=l-a||n>=u)&&m.push(e[t])}))};for(f=0;f<c[0].length;f++)p(f);return o(m.length==s),m},e.prototype.drawCodewords=function(t){if(t.length!=Math.floor(e.getNumRawDataModules(this.version)/8))throw new RangeError("Invalid argument");for(var n=0,i=this.size-1;i>=1;i-=2){6==i&&(i=5);for(var a=0;a<this.size;a++)for(var s=0;s<2;s++){var u=i-s,l=0==(i+1&2)?this.size-1-a:a;!this.isFunction[l][u]&&n<8*t.length&&(this.modules[l][u]=r(t[n>>>3],7-(7&n)),n++)}}o(n==8*t.length)},e.prototype.applyMask=function(t){if(t<0||t>7)throw new RangeError("Mask value out of range");for(var e=0;e<this.size;e++)for(var n=0;n<this.size;n++){var r=void 0;switch(t){case 0:r=(n+e)%2==0;break;case 1:r=e%2==0;break;case 2:r=n%3==0;break;case 3:r=(n+e)%3==0;break;case 4:r=(Math.floor(n/3)+Math.floor(e/2))%2==0;break;case 5:r=n*e%2+n*e%3==0;break;case 6:r=(n*e%2+n*e%3)%2==0;break;case 7:r=((n+e)%2+n*e%3)%2==0;break;default:throw new Error("Unreachable")}!this.isFunction[e][n]&&r&&(this.modules[e][n]=!this.modules[e][n])}},e.prototype.getPenaltyScore=function(){for(var t=0,n=0;n<this.size;n++){for(var r=!1,i=0,a=[0,0,0,0,0,0,0],s=0;s<this.size;s++)this.modules[n][s]==r?5==++i?t+=e.PENALTY_N1:i>5&&t++:(this.finderPenaltyAddHistory(i,a),r||(t+=this.finderPenaltyCountPatterns(a)*e.PENALTY_N3),r=this.modules[n][s],i=1);t+=this.finderPenaltyTerminateAndCount(r,i,a)*e.PENALTY_N3}for(s=0;s<this.size;s++){r=!1;var u=0;for(a=[0,0,0,0,0,0,0],n=0;n<this.size;n++)this.modules[n][s]==r?5==++u?t+=e.PENALTY_N1:u>5&&t++:(this.finderPenaltyAddHistory(u,a),r||(t+=this.finderPenaltyCountPatterns(a)*e.PENALTY_N3),r=this.modules[n][s],u=1);t+=this.finderPenaltyTerminateAndCount(r,u,a)*e.PENALTY_N3}for(n=0;n<this.size-1;n++)for(s=0;s<this.size-1;s++){var l=this.modules[n][s];l==this.modules[n][s+1]&&l==this.modules[n+1][s]&&l==this.modules[n+1][s+1]&&(t+=e.PENALTY_N2)}for(var c=0,h=0,f=this.modules;h<f.length;h++)c=f[h].reduce((function(t,e){return t+(e?1:0)}),c);var d=this.size*this.size,v=Math.ceil(Math.abs(20*c-10*d)/d)-1;return o(0<=v&&v<=9),o(0<=(t+=v*e.PENALTY_N4)&&t<=2568888),t},e.prototype.getAlignmentPatternPositions=function(){if(1==this.version)return[];for(var t=Math.floor(this.version/7)+2,e=32==this.version?26:2*Math.ceil((4*this.version+4)/(2*t-2)),n=[6],r=this.size-7;n.length<t;r-=e)n.splice(1,0,r);return n},e.getNumRawDataModules=function(t){if(t<e.MIN_VERSION||t>e.MAX_VERSION)throw new RangeError("Version number out of range");var n=(16*t+128)*t+64;if(t>=2){var r=Math.floor(t/7)+2;n-=(25*r-10)*r-55,t>=7&&(n-=36)}return o(208<=n&&n<=29648),n},e.getNumDataCodewords=function(t,n){return Math.floor(e.getNumRawDataModules(t)/8)-e.ECC_CODEWORDS_PER_BLOCK[n.ordinal][t]*e.NUM_ERROR_CORRECTION_BLOCKS[n.ordinal][t]},e.reedSolomonComputeDivisor=function(t){if(t<1||t>255)throw new RangeError("Degree out of range");for(var n=[],r=0;r<t-1;r++)n.push(0);n.push(1);var o=1;for(r=0;r<t;r++){for(var i=0;i<n.length;i++)n[i]=e.reedSolomonMultiply(n[i],o),i+1<n.length&&(n[i]^=n[i+1]);o=e.reedSolomonMultiply(o,2)}return n},e.reedSolomonComputeRemainder=function(t,n){for(var r=n.map((function(t){return 0})),o=function(t){var o=t^r.shift();r.push(0),n.forEach((function(t,n){return r[n]^=e.reedSolomonMultiply(t,o)}))},i=0,a=t;i<a.length;i++)o(a[i]);return r},e.reedSolomonMultiply=function(t,e){if(t>>>8!=0||e>>>8!=0)throw new RangeError("Byte out of range");for(var n=0,r=7;r>=0;r--)n=n<<1^285*(n>>>7),n^=(e>>>r&1)*t;return o(n>>>8==0),n},e.prototype.finderPenaltyCountPatterns=function(t){var e=t[1];o(e<=3*this.size);var n=e>0&&t[2]==e&&t[3]==3*e&&t[4]==e&&t[5]==e;return(n&&t[0]>=4*e&&t[6]>=e?1:0)+(n&&t[6]>=4*e&&t[0]>=e?1:0)},e.prototype.finderPenaltyTerminateAndCount=function(t,e,n){return t&&(this.finderPenaltyAddHistory(e,n),e=0),e+=this.size,this.finderPenaltyAddHistory(e,n),this.finderPenaltyCountPatterns(n)},e.prototype.finderPenaltyAddHistory=function(t,e){0==e[0]&&(t+=this.size),e.pop(),e.unshift(t)},e.MIN_VERSION=1,e.MAX_VERSION=40,e.PENALTY_N1=3,e.PENALTY_N2=3,e.PENALTY_N3=40,e.PENALTY_N4=10,e.ECC_CODEWORDS_PER_BLOCK=[[-1,7,10,15,20,26,18,20,24,30,18,20,24,26,30,22,24,28,30,28,28,28,28,30,30,26,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,10,16,26,18,24,16,18,22,22,26,30,22,22,24,24,28,28,26,26,26,26,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28,28],[-1,13,22,18,26,18,24,18,22,20,24,28,26,24,20,30,24,28,28,26,30,28,30,30,30,30,28,30,30,30,30,30,30,30,30,30,30,30,30,30,30],[-1,17,28,22,16,22,28,26,26,24,28,24,28,22,24,24,30,28,28,26,28,30,24,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30,30]],e.NUM_ERROR_CORRECTION_BLOCKS=[[-1,1,1,1,1,1,2,2,2,2,4,4,4,4,4,6,6,6,6,7,8,8,9,9,10,12,12,12,13,14,15,16,17,18,19,19,20,21,22,24,25],[-1,1,1,1,2,2,4,4,4,5,5,5,8,9,9,10,10,11,13,14,16,17,17,18,20,21,23,25,26,28,29,31,33,35,37,38,40,43,45,47,49],[-1,1,1,2,2,4,4,6,6,8,8,8,10,12,16,12,17,16,18,21,20,23,23,25,27,29,34,34,35,38,40,43,45,48,51,53,56,59,62,65,68],[-1,1,1,2,4,4,4,5,6,8,8,11,11,16,16,18,16,19,21,25,25,25,34,30,32,35,37,40,42,45,48,51,54,57,60,63,66,70,74,77,81]],e}();function n(t,e,n){if(e<0||e>31||t>>>e!=0)throw new RangeError("Value out of range");for(var r=e-1;r>=0;r--)n.push(t>>>r&1)}function r(t,e){return 0!=(t>>>e&1)}function o(t){if(!t)throw new Error("Assertion error")}t.QrCode=e;var i=function(){function t(t,e,n){if(this.mode=t,this.numChars=e,this.bitData=n,e<0)throw new RangeError("Invalid argument");this.bitData=n.slice()}return t.makeBytes=function(e){for(var r=[],o=0,i=e;o<i.length;o++)n(i[o],8,r);return new t(t.Mode.BYTE,e.length,r)},t.makeNumeric=function(e){if(!t.isNumeric(e))throw new RangeError("String contains non-numeric characters");for(var r=[],o=0;o<e.length;){var i=Math.min(e.length-o,3);n(parseInt(e.substring(o,o+i),10),3*i+1,r),o+=i}return new t(t.Mode.NUMERIC,e.length,r)},t.makeAlphanumeric=function(e){if(!t.isAlphanumeric(e))throw new RangeError("String contains unencodable characters in alphanumeric mode");var r,o=[];for(r=0;r+2<=e.length;r+=2){var i=45*t.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r));n(i+=t.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r+1)),11,o)}return r<e.length&&n(t.ALPHANUMERIC_CHARSET.indexOf(e.charAt(r)),6,o),new t(t.Mode.ALPHANUMERIC,e.length,o)},t.makeSegments=function(e){return""==e?[]:t.isNumeric(e)?[t.makeNumeric(e)]:t.isAlphanumeric(e)?[t.makeAlphanumeric(e)]:[t.makeBytes(t.toUtf8ByteArray(e))]},t.makeEci=function(e){var r=[];if(e<0)throw new RangeError("ECI assignment value out of range");if(e<128)n(e,8,r);else if(e<16384)n(2,2,r),n(e,14,r);else{if(!(e<1e6))throw new RangeError("ECI assignment value out of range");n(6,3,r),n(e,21,r)}return new t(t.Mode.ECI,0,r)},t.isNumeric=function(e){return t.NUMERIC_REGEX.test(e)},t.isAlphanumeric=function(e){return t.ALPHANUMERIC_REGEX.test(e)},t.prototype.getData=function(){return this.bitData.slice()},t.getTotalBits=function(t,e){for(var n=0,r=0,o=t;r<o.length;r++){var i=o[r],a=i.mode.numCharCountBits(e);if(i.numChars>=1<<a)return 1/0;n+=4+a+i.bitData.length}return n},t.toUtf8ByteArray=function(t){t=encodeURI(t);for(var e=[],n=0;n<t.length;n++)"%"!=t.charAt(n)?e.push(t.charCodeAt(n)):(e.push(parseInt(t.substring(n+1,n+3),16)),n+=2);return e},t.NUMERIC_REGEX=/^[0-9]*$/,t.ALPHANUMERIC_REGEX=/^[A-Z0-9 $%*+.\/:-]*$/,t.ALPHANUMERIC_CHARSET="0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ $%*+-./:",t}();t.QrSegment=i}(e||(e={})),function(t){var e,n;e=t.QrCode||(t.QrCode={}),n=function(){function t(t,e){this.ordinal=t,this.formatBits=e}return t.LOW=new t(0,1),t.MEDIUM=new t(1,0),t.QUARTILE=new t(2,3),t.HIGH=new t(3,2),t}(),e.Ecc=n}(e||(e={})),function(t){var e,n;e=t.QrSegment||(t.QrSegment={}),n=function(){function t(t,e){this.modeBits=t,this.numBitsCharCount=e}return t.prototype.numCharCountBits=function(t){return this.numBitsCharCount[Math.floor((t+7)/17)]},t.NUMERIC=new t(1,[10,12,14]),t.ALPHANUMERIC=new t(2,[9,11,13]),t.BYTE=new t(4,[8,16,16]),t.KANJI=new t(8,[8,10,12]),t.ECI=new t(7,[0,0,0]),t}(),e.Mode=n}(e||(e={}));var w=e,M={L:w.QrCode.Ecc.LOW,M:w.QrCode.Ecc.MEDIUM,Q:w.QrCode.Ecc.QUARTILE,H:w.QrCode.Ecc.HIGH},C=function(){try{(new Path2D).addPath(new Path2D)}catch(t){return!1}return!0}();function R(t){return t in M}function y(t,e){void 0===e&&(e=0);var n=[];return t.forEach((function(t,r){var o=null;t.forEach((function(i,a){if(!i&&null!==o)return n.push("M".concat(o+e," ").concat(r+e,"h").concat(a-o,"v1H").concat(o+e,"z")),void(o=null);if(a!==t.length-1)i&&null===o&&(o=a);else{if(!i)return;null===o?n.push("M".concat(a+e,",").concat(r+e," h1v1H").concat(a+e,"z")):n.push("M".concat(o+e,",").concat(r+e," h").concat(a+1-o,"v1H").concat(o+e,"z"))}}))})),n.join("")}var N={value:{type:String,required:!0,default:""},size:{type:Number,default:100},level:{type:String,default:"H",validator:function(t){return R(t)}},background:{type:String,default:"#fff"},foreground:{type:String,default:"#000"},margin:{type:Number,required:!1,default:0}},A=E(E({},N),{renderAs:{type:String,required:!1,default:"canvas",validator:function(t){return["canvas","svg"].indexOf(t)>-1}}}),P=n({name:"QRCodeSvg",props:N,setup:function(t){var e=o(0),n=o(""),a=function(){var r=t.value,o=t.level,i=t.margin,a=w.QrCode.encodeText(r,M[o]).getModules();e.value=a.length+2*i,n.value=y(a,i)};return a(),i(a),function(){return r("svg",{width:t.size,height:t.size,"shape-rendering":"crispEdges",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(e.value," ").concat(e.value)},[r("path",{fill:t.background,d:"M0,0 h".concat(e.value,"v").concat(e.value,"H0z")}),r("path",{fill:t.foreground,d:n.value})])}}}),_=n({name:"QRCodeCanvas",props:N,setup:function(t){var e=o(null),n=function(){var n=t.value,r=t.level,o=t.size,i=t.margin,a=t.background,s=t.foreground,u=e.value;if(u){var l=u.getContext("2d");if(l){var c=w.QrCode.encodeText(n,M[r]).getModules(),h=c.length+2*i,f=window.devicePixelRatio||1,d=o/h*f;u.height=u.width=o*f,l.scale(d,d),l.fillStyle=a,l.fillRect(0,0,h,h),l.fillStyle=s,C?l.fill(new Path2D(y(c,i))):c.forEach((function(t,e){t.forEach((function(t,n){t&&l.fillRect(n+i,e+i,1,1)}))}))}}};return a(n),i(n),function(){return r("canvas",{ref:e,style:{width:"".concat(t.size,"px"),height:"".concat(t.size,"px")}})}}}),I=n({name:"Qrcode",render:function(){var t=this.$props,e=t.renderAs,n=t.value,o=t.size,i=t.margin,a=t.level,s=t.background,u=t.foreground,l=o>>>0,c=i>>>0,h=R(a)?a:"H";return r("svg"===e?P:_,{value:n,size:l,margin:c,level:h,background:s,foreground:u})},props:A}),S=function(t){return v("data-v-42ee45d8"),t=t(),g(),t},z={class:"box"},b=S((function(){return f("h3",null,"戏曲字幕应用",-1)})),O=S((function(){return f("div",{class:"van-cell-group__title"},"心灵的孤僻",-1)})),L=S((function(){return f("div",{class:"van-cell-group__title"},"或扫码",-1)})),k="v12.2.0",B="#780af6";t("default",m(n({__name:"index",setup:function(t){var e="https://gitee.com/xlgp/xiquzimu-apk/releases/download/".concat(k,"/xiquzimu_").concat(k,"_release.apk");return function(t,n){var r=p;return s(),u("div",z,[b,O,l(r,{plain:"",url:e,color:B,icon:"down",type:"primary",block:"",round:""},{default:c((function(){return[h("下载"),f("small",null,"("+d(k)+")")]})),_:1}),L,l(I,{value:e,size:200,level:"L",foreground:B})])}}}),[["__scopeId","data-v-42ee45d8"]]))}}}));