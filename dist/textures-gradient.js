!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).texturesGradient=n()}(this,function(){"use strict";function t(){return"".concat(Math.random().toString(36),"00000000000000000").replace(/[^a-z]+/g,"").slice(0,5)}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var r=0,e=new Array(n);r<n;r++)e[r]=t[r];return e}function j(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return i(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(r="Object"===r&&t.constructor?t.constructor.name:r)||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?i(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var e=0,n=function(){};return{s:n,n:function(){return e>=t.length?{done:!0}:{done:!1,value:t[e++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,o=!0,c=!1;return{s:function(){r=r.call(t)},n:function(){var t=r.next();return o=t.done,t},e:function(t){c=!0,a=t},f:function(){try{o||null==r.return||r.return()}finally{if(c)throw a}}}}function e(t,n){return null==t||null==n?NaN:t<n?-1:n<t?1:n<=t?0:NaN}function n(r){let a=r,o=r,c=r;function i(t,n,r=0,e=t.length){if(r<e){if(0!==o(n,n))return e;do{var a=r+e>>>1;c(t[a],n)<0?r=1+a:e=a}while(r<e)}return r}return 1===r.length&&(a=(t,n)=>r(t)-n,o=e,c=(t,n)=>e(r(t),n)),{left:i,center:function(t,n,r=0,e=t.length){return e=i(t,n,r,e-1),r<e&&a(t[e-1],n)>-a(t[e],n)?e-1:e},right:function(t,n,r=0,e=t.length){if(r<e){if(0!==o(n,n))return e;do{var a=r+e>>>1;c(t[a],n)<=0?r=1+a:e=a}while(r<e)}return r}}}const u=n(e).right;n(function(t){return null===t?NaN:+t}).center;var h=Math.sqrt(50),f=Math.sqrt(10),d=Math.sqrt(2);function g(t,n,r){t=(n-t)/Math.max(0,r),r=Math.floor(Math.log(t)/Math.LN10),t/=Math.pow(10,r);return 0<=r?(h<=t?10:f<=t?5:d<=t?2:1)*Math.pow(10,r):-Math.pow(10,-r)/(h<=t?10:f<=t?5:d<=t?2:1)}function r(t,n,r){(t.prototype=n.prototype=r).constructor=t}function a(t,n){var r,e=Object.create(t.prototype);for(r in n)e[r]=n[r];return e}function l(){}var o=1/.7,c="\\s*([+-]?\\d+)\\s*",s="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",p="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",m=/^#([0-9a-f]{3,8})$/,y=new RegExp("^rgb\\("+[c,c,c]+"\\)$"),M=new RegExp("^rgb\\("+[p,p,p]+"\\)$"),v=new RegExp("^rgba\\("+[c,c,c,s]+"\\)$"),w=new RegExp("^rgba\\("+[p,p,p,s]+"\\)$"),b=new RegExp("^hsl\\("+[s,p,p]+"\\)$"),k=new RegExp("^hsla\\("+[s,p,p,s]+"\\)$"),x={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};function N(){return this.rgb().formatHex()}function A(){return this.rgb().formatRgb()}function S(t){var n,r;return t=(t+"").trim().toLowerCase(),(n=m.exec(t))?(r=n[1].length,n=parseInt(n[1],16),6===r?q(n):3===r?new R(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1):8===r?E(n>>24&255,n>>16&255,n>>8&255,(255&n)/255):4===r?E(n>>12&15|n>>8&240,n>>8&15|n>>4&240,n>>4&15|240&n,((15&n)<<4|15&n)/255):null):(n=y.exec(t))?new R(n[1],n[2],n[3],1):(n=M.exec(t))?new R(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=v.exec(t))?E(n[1],n[2],n[3],n[4]):(n=w.exec(t))?E(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=b.exec(t))?B(n[1],n[2]/100,n[3]/100,1):(n=k.exec(t))?B(n[1],n[2]/100,n[3]/100,n[4]):x.hasOwnProperty(t)?q(x[t]):"transparent"===t?new R(NaN,NaN,NaN,0):null}function q(t){return new R(t>>16&255,t>>8&255,255&t,1)}function E(t,n,r,e){return new R(t=e<=0?n=r=NaN:t,n,r,e)}function z(t,n,r,e){return 1===arguments.length?(a=(a=t)instanceof l?a:S(a))?new R((a=a.rgb()).r,a.g,a.b,a.opacity):new R:new R(t,n,r,null==e?1:e);var a}function R(t,n,r,e){this.r=+t,this.g=+n,this.b=+r,this.opacity=+e}function $(){return"#"+O(this.r)+O(this.g)+O(this.b)}function U(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}function O(t){return((t=Math.max(0,Math.min(255,Math.round(t)||0)))<16?"0":"")+t.toString(16)}function B(t,n,r,e){return e<=0?t=n=r=NaN:r<=0||1<=r?t=n=NaN:n<=0&&(t=NaN),new I(t,n,r,e)}function C(t){if(t instanceof I)return new I(t.h,t.s,t.l,t.opacity);if(!(t=!(t instanceof l)?S(t):t))return new I;if(t instanceof I)return t;var n=(t=t.rgb()).r/255,r=t.g/255,e=t.b/255,a=Math.min(n,r,e),o=Math.max(n,r,e),c=NaN,i=o-a,u=(o+a)/2;return i?(c=n===o?(r-e)/i+6*(r<e):r===o?(e-n)/i+2:(n-r)/i+4,i/=u<.5?o+a:2-o-a,c*=60):i=0<u&&u<1?0:c,new I(c,i,u,t.opacity)}function I(t,n,r,e){this.h=+t,this.s=+n,this.l=+r,this.opacity=+e}function H(t,n,r){return 255*(t<60?n+(r-n)*t/60:t<180?r:t<240?n+(r-n)*(240-t)/60:n)}r(l,S,{copy:function(t){return Object.assign(new this.constructor,this,t)},displayable:function(){return this.rgb().displayable()},hex:N,formatHex:N,formatHsl:function(){return C(this).formatHsl()},formatRgb:A,toString:A}),r(R,z,a(l,{brighter:function(t){return t=null==t?o:Math.pow(o,t),new R(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new R(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return-.5<=this.r&&this.r<255.5&&-.5<=this.g&&this.g<255.5&&-.5<=this.b&&this.b<255.5&&0<=this.opacity&&this.opacity<=1},hex:$,formatHex:$,formatRgb:U,toString:U})),r(I,function(t,n,r,e){return 1===arguments.length?C(t):new I(t,n,r,null==e?1:e)},a(l,{brighter:function(t){return t=null==t?o:Math.pow(o,t),new I(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?.7:Math.pow(.7,t),new I(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,r=this.l,n=r+(r<.5?r:1-r)*n,r=2*r-n;return new R(H(240<=t?t-240:120+t,r,n),H(t,r,n),H(t<120?240+t:t-120,r,n),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1},formatHsl:function(){var t=this.opacity;return(1===(t=isNaN(t)?1:Math.max(0,Math.min(1,t)))?"hsl(":"hsla(")+(this.h||0)+", "+100*(this.s||0)+"%, "+100*(this.l||0)+"%"+(1===t?")":", "+t+")")}}));var _=t=>()=>t;function L(o){return 1==(o=+o)?P:function(t,n){return n-t?(r=t,e=n,a=o,r=Math.pow(r,a),e=Math.pow(e,a)-r,a=1/a,function(t){return Math.pow(r+t*e,a)}):_(isNaN(t)?n:t);var r,e,a}}function P(t,n){var r,e,a=n-t;return a?(r=t,e=a,function(t){return r+t*e}):_(isNaN(t)?n:t)}var F=function t(n){var c=L(n);function r(n,t){var r=c((n=z(n)).r,(t=z(t)).r),e=c(n.g,t.g),a=c(n.b,t.b),o=P(n.opacity,t.opacity);return function(t){return n.r=r(t),n.g=e(t),n.b=a(t),n.opacity=o(t),n+""}}return r.gamma=t,r}(1);function D(n,r){return n=+n,r=+r,function(t){return n*(1-t)+r*t}}var G=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,T=new RegExp(G.source,"g");function W(t,n){var r,e=typeof n;return null==n||"boolean"==e?_(n):("number"==e?D:"string"==e?(r=S(n))?(n=r,F):function(t,e){var n,r,a,o,c,i=G.lastIndex=T.lastIndex=0,u=-1,l=[],s=[];for(t+="",e+="";(n=G.exec(t))&&(r=T.exec(e));)(a=r.index)>i&&(a=e.slice(i,a),l[u]?l[u]+=a:l[++u]=a),(n=n[0])===(r=r[0])?l[u]?l[u]+=r:l[++u]=r:(l[++u]=null,s.push({i:u,x:D(n,r)})),i=T.lastIndex;return i<e.length&&(a=e.slice(i),l[u]?l[u]+=a:l[++u]=a),l.length<2?s[0]?(c=s[0].x,function(t){return c(t)+""}):(o=e,function(){return o}):(e=s.length,function(t){for(var n,r=0;r<e;++r)l[(n=s[r]).i]=n.x(t);return l.join("")})}:n instanceof S?F:n instanceof Date?function(n,r){var e=new Date;return n=+n,r=+r,function(t){return e.setTime(n*(1-t)+r*t),e}}:(r=n,!ArrayBuffer.isView(r)||r instanceof DataView?Array.isArray(n)?function(t,n){for(var r=n?n.length:0,e=t?Math.min(r,t.length):0,a=new Array(e),o=new Array(r),c=0;c<e;++c)a[c]=W(t[c],n[c]);for(;c<r;++c)o[c]=n[c];return function(t){for(c=0;c<e;++c)o[c]=a[c](t);return o}}:"function"!=typeof n.valueOf&&"function"!=typeof n.toString||isNaN(n)?function(t,n){var r,e={},a={};for(r in null!==t&&"object"==typeof t||(t={}),n=null===n||"object"!=typeof n?{}:n)r in t?e[r]=W(t[r],n[r]):a[r]=n[r];return function(t){for(r in e)a[r]=e[r](t);return a}}:D:function(n,r){r=r||[];var e,a=n?Math.min(r.length,n.length):0,o=r.slice();return function(t){for(e=0;e<a;++e)o[e]=n[e]*(1-t)+r[e]*t;return o}}))(t,n)}function Z(n,r){return n=+n,r=+r,function(t){return Math.round(n*(1-t)+r*t)}}function V(t){return+t}var X=[0,1];function Y(t){return t}function J(n,r){return(r-=n=+n)?function(t){return(t-n)/r}:(t=isNaN(r)?NaN:.5,function(){return t});var t}function K(t,n,r){var e=t[0],t=t[1],a=n[0],n=n[1],a=t<e?(e=J(t,e),r(n,a)):(e=J(e,t),r(a,n));return function(t){return a(e(t))}}function Q(r,t,n){var e=Math.min(r.length,t.length)-1,a=new Array(e),o=new Array(e),c=-1;for(r[e]<r[0]&&(r=r.slice().reverse(),t=t.slice().reverse());++c<e;)a[c]=J(r[c],r[c+1]),o[c]=n(t[c],t[c+1]);return function(t){var n=u(r,t,1,e)-1;return o[n](a[n](t))}}function tt(){var r,e,n,a,o,c,i=X,u=X,l=W,s=Y;function h(){var n,r,t,e=Math.min(i.length,u.length);return s!==Y&&(n=i[0],(r=i[e-1])<n&&(t=n,n=r,r=t),s=function(t){return Math.max(n,Math.min(r,t))}),a=2<e?Q:K,o=c=null,f}function f(t){return null==t||isNaN(t=+t)?n:(o=o||a(i.map(r),u,l))(r(s(t)))}return f.invert=function(t){return s(e((c=c||a(u,i.map(r),D))(t)))},f.domain=function(t){return arguments.length?(i=Array.from(t,V),h()):i.slice()},f.range=function(t){return arguments.length?(u=Array.from(t),h()):u.slice()},f.rangeRound=function(t){return u=Array.from(t),l=Z,h()},f.clamp=function(t){return arguments.length?(s=!!t||Y,h()):s!==Y},f.interpolate=function(t){return arguments.length?(l=t,h()):l},f.unknown=function(t){return arguments.length?(n=t,f):n},function(t,n){return r=t,e=n,h()}}function nt(t,n){if((r=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var r,n=t.slice(0,r);return[1<n.length?n[0]+n.slice(2):n,+t.slice(r+1)]}function rt(t){return(t=nt(Math.abs(t)))?t[1]:NaN}var et,at=/^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;function ot(t){if(!(n=at.exec(t)))throw new Error("invalid format: "+t);var n;return new ct({fill:n[1],align:n[2],sign:n[3],symbol:n[4],zero:n[5],width:n[6],comma:n[7],precision:n[8]&&n[8].slice(1),trim:n[9],type:n[10]})}function ct(t){this.fill=void 0===t.fill?" ":t.fill+"",this.align=void 0===t.align?">":t.align+"",this.sign=void 0===t.sign?"-":t.sign+"",this.symbol=void 0===t.symbol?"":t.symbol+"",this.zero=!!t.zero,this.width=void 0===t.width?void 0:+t.width,this.comma=!!t.comma,this.precision=void 0===t.precision?void 0:+t.precision,this.trim=!!t.trim,this.type=void 0===t.type?"":t.type+""}function it(t,n){n=nt(t,n);if(!n)return t+"";t=n[0],n=n[1];return n<0?"0."+new Array(-n).join("0")+t:t.length>n+1?t.slice(0,n+1)+"."+t.slice(n+1):t+new Array(n-t.length+2).join("0")}ot.prototype=ct.prototype,ct.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(void 0===this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(void 0===this.precision?"":"."+Math.max(0,0|this.precision))+(this.trim?"~":"")+this.type};var ut={"%":(t,n)=>(100*t).toFixed(n),b:t=>Math.round(t).toString(2),c:t=>t+"",d:function(t){return 1e21<=Math.abs(t=Math.round(t))?t.toLocaleString("en").replace(/,/g,""):t.toString(10)},e:(t,n)=>t.toExponential(n),f:(t,n)=>t.toFixed(n),g:(t,n)=>t.toPrecision(n),o:t=>Math.round(t).toString(8),p:(t,n)=>it(100*t,n),r:it,s:function(t,n){if(!(e=nt(t,n)))return t+"";var r=e[0],e=(a=e[1])-(et=3*Math.max(-8,Math.min(8,Math.floor(a/3))))+1,a=r.length;return e===a?r:a<e?r+new Array(e-a+1).join("0"):0<e?r.slice(0,e)+"."+r.slice(e):"0."+new Array(1-e).join("0")+nt(t,Math.max(0,n+e-1))[0]},X:t=>Math.round(t).toString(16).toUpperCase(),x:t=>Math.round(t).toString(16)};function lt(t){return t}var st=Array.prototype.map,ht=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"];function ft(t){var n,i,u,k=void 0===t.grouping||void 0===t.thousands?lt:(i=st.call(t.grouping,Number),u=t.thousands+"",function(t,n){for(var r=t.length,e=[],a=0,o=i[0],c=0;0<r&&0<o&&(n<c+o+1&&(o=Math.max(1,n-c)),e.push(t.substring(r-=o,r+o)),!((c+=o+1)>n));)o=i[a=(a+1)%i.length];return e.reverse().join(u)}),e=void 0===t.currency?"":t.currency[0]+"",a=void 0===t.currency?"":t.currency[1]+"",x=void 0===t.decimal?".":t.decimal+"",N=void 0===t.numerals?lt:(n=st.call(t.numerals,String),function(t){return t.replace(/[0-9]/g,function(t){return n[+t]})}),o=void 0===t.percent?"%":t.percent+"",A=void 0===t.minus?"−":t.minus+"",S=void 0===t.nan?"NaN":t.nan+"";function c(t){var l=(t=ot(t)).fill,s=t.align,h=t.sign,n=t.symbol,f=t.zero,d=t.width,g=t.comma,p=t.precision,m=t.trim,y=t.type;"n"===y?(g=!0,y="g"):ut[y]||(void 0===p&&(p=12),m=!0,y="g"),(f||"0"===l&&"="===s)&&(f=!0,l="0",s="=");var M="$"===n?e:"#"===n&&/[boxX]/.test(y)?"0"+y.toLowerCase():"",v="$"===n?a:/[%p]/.test(y)?o:"",w=ut[y],b=/[defgprs%]/.test(y);function r(t){var n,r,e,a=M,o=v;if("c"===y)o=w(t)+o,t="";else{var c=(t=+t)<0||1/t<0;if(t=isNaN(t)?S:w(Math.abs(t),p),m&&(t=function(t){t:for(var n,r=t.length,e=1,a=-1;e<r;++e)switch(t[e]){case".":a=n=e;break;case"0":0===a&&(a=e),n=e;break;default:if(!+t[e])break t;0<a&&(a=0)}return 0<a?t.slice(0,a)+t.slice(n+1):t}(t)),a=((c=c&&0==+t&&"+"!==h?!1:c)?"("===h?h:A:"-"===h||"("===h?"":h)+a,o=("s"===y?ht[8+et/3]:"")+o+(c&&"("===h?")":""),b)for(n=-1,r=t.length;++n<r;)if((e=t.charCodeAt(n))<48||57<e){o=(46===e?x+t.slice(n+1):t.slice(n))+o,t=t.slice(0,n);break}}g&&!f&&(t=k(t,1/0));var i=a.length+t.length+o.length,u=i<d?new Array(d-i+1).join(l):"";switch(g&&f&&(t=k(u+t,u.length?d-o.length:1/0),u=""),s){case"<":t=a+t+o+u;break;case"=":t=a+u+t+o;break;case"^":t=u.slice(0,i=u.length>>1)+a+t+o+u.slice(i);break;default:t=u+a+t+o}return N(t)}return p=void 0===p?6:/[gprs]/.test(y)?Math.max(1,Math.min(21,p)):Math.max(0,Math.min(20,p)),r.toString=function(){return t+""},r}return{format:c,formatPrefix:function(t,n){var r=c(((t=ot(t)).type="f",t)),n=3*Math.max(-8,Math.min(8,Math.floor(rt(n)/3))),e=Math.pow(10,-n),a=ht[8+n/3];return function(t){return r(e*t)+a}}}}function dt(t,n,r,e){var a,o,c,i,u,l=(o=t,c=n,i=r,r=Math.abs(c-o)/Math.max(0,i),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),h<=(r=r/i)?i*=10:f<=r?i*=5:d<=r&&(i*=2),c<o?-i:i);switch((e=ot(null==e?",f":e)).type){case"s":var s=Math.max(Math.abs(t),Math.abs(n));return null!=e.precision||isNaN((u=l,a=Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(rt(s)/3)))-rt(Math.abs(u)))))||(e.precision=a),Mt(e,s);case"":case"e":case"g":case"p":case"r":null!=e.precision||isNaN((u=l,s=Math.max(Math.abs(t),Math.abs(n)),u=Math.abs(u),s=Math.abs(s)-u,a=Math.max(0,rt(s)-rt(u))+1))||(e.precision=a-("e"===e.type));break;case"f":case"%":null!=e.precision||isNaN(a=Math.max(0,-rt(Math.abs(l))))||(e.precision=a-2*("%"===e.type))}return yt(e)}function gt(l){var s=l.domain;return l.ticks=function(t){var n=s();return function(r,e,t){var n,a,o,c,i=-1;if(t=+t,(r=+r)===(e=+e)&&0<t)return[r];if((n=e<r)&&(a=r,r=e,e=a),0===(c=g(r,e,t))||!isFinite(c))return[];if(0<c){let t=Math.round(r/c),n=Math.round(e/c);for(t*c<r&&++t,n*c>e&&--n,o=new Array(a=n-t+1);++i<a;)o[i]=(t+i)*c}else{c=-c;let t=Math.round(r*c),n=Math.round(e*c);for(t/c<r&&++t,n/c>e&&--n,o=new Array(a=n-t+1);++i<a;)o[i]=(t+i)/c}return n&&o.reverse(),o}(n[0],n[n.length-1],null==t?10:t)},l.tickFormat=function(t,n){var r=s();return dt(r[0],r[r.length-1],null==t?10:t,n)},l.nice=function(t){null==t&&(t=10);var n,r,e=s(),a=0,o=e.length-1,c=e[a],i=e[o],u=10;for(i<c&&(r=c,c=i,i=r,r=a,a=o,o=r);0<u--;){if((r=g(c,i,t))===n)return e[a]=c,e[o]=i,s(e);if(0<r)c=Math.floor(c/r)*r,i=Math.ceil(i/r)*r;else{if(!(r<0))break;c=Math.ceil(c*r)/r,i=Math.floor(i*r)/r}n=r}return l},l}function pt(){var n=tt()(Y,Y);return n.copy=function(){return t=n,pt().domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp()).unknown(t.unknown());var t},function(t,n){switch(arguments.length){case 0:break;case 1:this.range(t);break;default:this.range(n).domain(t)}return this}.apply(n,arguments),gt(n)}var mt,yt=(mt=ft({thousands:",",grouping:[3],currency:["$",""]})).format,Mt=mt.formatPrefix;return{circles:function(){function n(t){var n=t.append("defs").append("pattern").attr("id",f).attr("patternUnits","userSpaceOnUse").attr("width",o).attr("height",o);if(c&&n.append("rect").attr("width",o).attr("height",o).attr("fill",c),n.append("circle").attr("cx",o/2).attr("cy",o/2).attr("r",i).attr("fill",l).attr("stroke",s).attr("stroke-width",h),u)for(var r=0,e=[[0,0],[0,o],[o,0],[o,o]];r<e.length;r++){var a=e[r];n.append("circle").attr("cx",a[0]).attr("cy",a[1]).attr("r",i).attr("fill",l).attr("stroke",s).attr("stroke-width",h)}}var o=20,c="",i=2,u=!1,l="#343434",s="#343434",h=0,f=t();return n.heavier=function(t){return i*=0===arguments.length?2:2*t,n},n.lighter=function(t){return i/=0===arguments.length?2:2*t,n},n.thinner=function(t){return o*=0===arguments.length?2:2*t,n},n.thicker=function(t){return o/=0===arguments.length?2:2*t,n},n.background=function(t){return c=t,n},n.size=function(t){return o=t,n},n.complement=function(t){return u=0===arguments.length||t,n},n.radius=function(t){return i=t,n},n.fill=function(t){return l=t,n},n.stroke=function(t){return s=t,n},n.strokeWidth=function(t){return h=t,n},n.id=function(t){return 0===arguments.length?f:(f=t,n)},n.url=function(){return"url(#".concat(f,")")},n},lines:function(){function v(t){var n=w;switch(t){case"0/8":case"vertical":return"M ".concat(n/2,", 0 l 0, ").concat(n);case"1/8":return"M ".concat(-n/4,",").concat(n," l ").concat(n/2,",").concat(-n," M ").concat(n/4,",").concat(n," l ").concat(n/2,",").concat(-n," M ").concat(3*n/4,",").concat(n," l ").concat(n/2,",").concat(-n);case"2/8":case"diagonal":return"M 0,".concat(n," l ").concat(n,",").concat(-n," M ").concat(-n/4,",").concat(n/4," l ").concat(n/2,",").concat(-n/2," M ").concat(.75*n,",").concat(5/4*n," l ").concat(n/2,",").concat(-n/2);case"3/8":return"M 0,".concat(.75*n," l ").concat(n,",").concat(-n/2," M 0,").concat(n/4," l ").concat(n,",").concat(-n/2," M 0,").concat(5*n/4," l ").concat(n,",").concat(-n/2);case"4/8":case"horizontal":return"M 0,".concat(n/2," l ").concat(n,",0");case"5/8":return"M 0,".concat(-n/4," l ").concat(n,",").concat(n/2,"M 0,").concat(n/4," l ").concat(n,",").concat(n/2," M 0,").concat(3*n/4," l ").concat(n,",").concat(n/2);case"6/8":return"M 0,0 l ".concat(n,",").concat(n," M ").concat(-n/4,",").concat(.75*n," l ").concat(n/2,",").concat(n/2," M ").concat(3*n/4,",").concat(-n/4," l ").concat(n/2,",").concat(n/2);case"7/8":return"M ".concat(-n/4,",0 l ").concat(n/2,",").concat(n," M ").concat(n/4,",0 l ").concat(n/2,",").concat(n," M ").concat(3*n/4,",0 l ").concat(n/2,",").concat(n);default:return"M ".concat(n/2,", 0 l 0, ").concat(n)}}function e(t){var n=null;t.select("defs[type=texture]").remove();var r=t.node().getBBox();if(Array.isArray(q)&&0<q.length){var e,a=t.append("defs").attr("type","texture"),n=a.append("pattern").attr("id",N).attr("patternUnits","objectBoundingBox").attr("width",1).attr("height",1).attr("x",r.x);for(e in q){for(var o=(q[e].stop-q[e].start)/100,c=Math.floor(q[e].stop-q[e].start),i=[],u=pt().domain([0,c]).range([q[e].startColor,q[e].stopColor]),l=0;l<c;l++)i.push(u(l));var s,h=a.append("pattern").attr("id","chunk_"+e).attr("patternUnits","objectBoundingBox").attr("width",1).attr("height",1);for(s in i){var f,d=a.append("pattern").attr("id","colormap_"+e+"_"+s).attr("patternUnits","userSpaceOnUse").attr("width",w).attr("height",w),g=j(A);try{for(g.s();!(f=g.n()).done;){var p=f.value;d.append("path").attr("d",v(p)).attr("stroke-width",k).attr("shape-rendering",S).attr("stroke",i[s]).attr("stroke-linecap","square")}}catch(t){g.e(t)}finally{g.f()}h.append("rect").attr("width",r.width/100).attr("height",r.height).attr("x",r.width*s/100).style("fill","url(#colormap_".concat(e,"_").concat(s,")"))}n.append("rect").attr("width",r.width*o).attr("height",r.height).attr("x",0<e?r.width*q[e-1].stop/100:"0").style("fill","url(#chunk_".concat(e,")"))}}else{n=t.append("defs").attr("type","texture").append("pattern").attr("id",N).attr("patternUnits","userSpaceOnUse").attr("width",w).attr("height",w),x&&n.append("rect").attr("width",w).attr("height",w).attr("fill",x);var m,y=j(A);try{for(y.s();!(m=y.n()).done;){var M=m.value;n.append("path").attr("d",v(M)).attr("stroke-width",k).attr("shape-rendering",S).attr("stroke",b).attr("stroke-linecap","square")}}catch(t){y.e(t)}finally{y.f()}}}var w=20,b="#343434",k=2,x="",N=t(),A=["diagonal"],S="auto",q=[];return e.heavier=function(t){return k*=0===arguments.length?2:2*t,e},e.lighter=function(t){return k/=0===arguments.length?2:2*t,e},e.thinner=function(t){return w*=0===arguments.length?2:2*t,e},e.thicker=function(t){return w/=0===arguments.length?2:2*t,e},e.background=function(t){return x=t,e},e.size=function(t){return w=t,e},e.orientation=function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];return 0===arguments.length||(A=n),e},e.shapeRendering=function(t){return S=t,e},e.stroke=function(t){return b=t,e},e.strokeWidth=function(t){return k=t,e},e.linearGradient=function(t){return q=t,e},e.id=function(t){return 0===arguments.length?N:(N=t,e)},e.url=function(){return"url(#".concat(N,")")},e},paths:function(){function n(t){var n=function(t){var n=a;switch(t){case"squares":return"M ".concat(n/4," ").concat(n/4," l ").concat(n/2," 0 l 0 ").concat(n/2," l ").concat(-n/2," 0 Z");case"nylon":return"M 0 ".concat(n/4," l ").concat(n/4," 0 l 0 ").concat(-n/4," M ").concat(3*n/4," ").concat(n," l 0 ").concat(-n/4," l ").concat(n/4," 0 M ").concat(n/4," ").concat(n/2," l 0 ").concat(n/4," l ").concat(n/4," 0 M ").concat(n/2," ").concat(n/4," l ").concat(n/4," 0 l 0 ").concat(n/4);case"waves":return"M 0 ".concat(n/2," c ").concat(n/8," ").concat(-n/4," , ").concat(3*n/8," ").concat(-n/4," , ").concat(n/2," 0 c ").concat(n/8," ").concat(n/4," , ").concat(3*n/8," ").concat(n/4," , ").concat(n/2," 0 M ").concat(-n/2," ").concat(n/2," c ").concat(n/8," ").concat(n/4," , ").concat(3*n/8," ").concat(n/4," , ").concat(n/2," 0 M ").concat(n," ").concat(n/2," c ").concat(n/8," ").concat(-n/4," , ").concat(3*n/8," ").concat(-n/4," , ").concat(n/2," 0");case"woven":return"M ".concat(n/4,",").concat(n/4,"l").concat(n/2,",").concat(n/2,"M").concat(3*n/4,",").concat(n/4,"l").concat(n/2,",").concat(-n/2," M").concat(n/4,",").concat(3*n/4,"l").concat(-n/2,",").concat(n/2,"M").concat(3*n/4,",").concat(5*n/4,"l").concat(n/2,",").concat(-n/2," M").concat(-n/4,",").concat(n/4,"l").concat(n/2,",").concat(-n/2);case"crosses":return"M ".concat(n/4,",").concat(n/4,"l").concat(n/2,",").concat(n/2,"M").concat(n/4,",").concat(3*n/4,"l").concat(n/2,",").concat(-n/2);case"caps":return"M ".concat(n/4,",").concat(3*n/4,"l").concat(n/4,",").concat(-n/2,"l").concat(n/4,",").concat(n/2);case"hexagons":return r=3,e=Math.sqrt(3),"M ".concat(n,",0 l ").concat(n,",0 l ").concat(n/2,",").concat(n*Math.sqrt(3)/2," l ").concat(-n/2,",").concat(n*Math.sqrt(3)/2," l ").concat(-n,",0 l ").concat(-n/2,",").concat(-n*Math.sqrt(3)/2," Z M 0,").concat(n*Math.sqrt(3)/2," l ").concat(n/2,",0 M ").concat(3*n,",").concat(n*Math.sqrt(3)/2," l ").concat(-n/2,",0");default:return t(n)}}(u),t=t.append("defs").append("pattern").attr("id",l).attr("patternUnits","userSpaceOnUse").attr("width",a*r).attr("height",a*e);i&&t.append("rect").attr("width",a*r).attr("height",a*e).attr("fill",i),t.append("path").attr("d",n).attr("fill",s).attr("stroke",o).attr("stroke-width",c).attr("stroke-linecap","square").attr("shape-rendering",h)}var r=1,e=1,a=20,o="#343434",c=2,i="",u=function(t){return"M ".concat(t/4,",").concat(3*t/4,"l").concat(t/4,",").concat(-t/2,"l").concat(t/4,",").concat(t/2)},l=t(),s="transparent",h="auto";return n.heavier=function(t){return c*=0===arguments.length?2:2*t,n},n.lighter=function(t){return c/=0===arguments.length?2:2*t,n},n.thinner=function(t){return a*=0===arguments.length?2:2*t,n},n.thicker=function(t){return a/=0===arguments.length?2:2*t,n},n.background=function(t){return i=t,n},n.shapeRendering=function(t){return h=t,n},n.size=function(t){return a=t,n},n.d=function(t){return u=t,n},n.fill=function(t){return s=t,n},n.stroke=function(t){return o=t,n},n.strokeWidth=function(t){return c=t,n},n.id=function(t){return 0===arguments.length?l:(l=t,n)},n.url=function(){return"url(#".concat(l,")")},n}}});
