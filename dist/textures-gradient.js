!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).texturesGradient=n()}(this,function(){"use strict";function t(){return"".concat(Math.random().toString(36),"00000000000000000").replace(/[^a-z]+/g,"").slice(0,5)}function i(t,n){(null==n||n>t.length)&&(n=t.length);for(var c=0,a=new Array(n);c<n;c++)a[c]=t[c];return a}function j(t,n){var c="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!c){if(Array.isArray(t)||(c=function(t,n){if(t){if("string"==typeof t)return i(t,n);var c=Object.prototype.toString.call(t).slice(8,-1);return"Map"===(c="Object"===c&&t.constructor?t.constructor.name:c)||"Set"===c?Array.from(t):"Arguments"===c||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?i(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){c&&(t=c);var a=0,n=function(){};return{s:n,n:function(){return a>=t.length?{done:!0}:{done:!1,value:t[a++]}},e:function(t){throw t},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,e=!0,o=!1;return{s:function(){c=c.call(t)},n:function(){var t=c.next();return e=t.done,t},e:function(t){o=!0,r=t},f:function(){try{e||null==c.return||c.return()}finally{if(o)throw r}}}}return{circles:function(){function n(t){var n=t.append("defs").append("pattern").attr("id",f).attr("patternUnits","userSpaceOnUse").attr("width",e).attr("height",e);if(o&&n.append("rect").attr("width",e).attr("height",e).attr("fill",o),n.append("circle").attr("cx",e/2).attr("cy",e/2).attr("r",i).attr("fill",l).attr("stroke",s).attr("stroke-width",h),u)for(var c=0,a=[[0,0],[0,e],[e,0],[e,e]];c<a.length;c++){var r=a[c];n.append("circle").attr("cx",r[0]).attr("cy",r[1]).attr("r",i).attr("fill",l).attr("stroke",s).attr("stroke-width",h)}}var e=20,o="",i=2,u=!1,l="#343434",s="#343434",h=0,f=t();return n.heavier=function(t){return i*=0===arguments.length?2:2*t,n},n.lighter=function(t){return i/=0===arguments.length?2:2*t,n},n.thinner=function(t){return e*=0===arguments.length?2:2*t,n},n.thicker=function(t){return e/=0===arguments.length?2:2*t,n},n.background=function(t){return o=t,n},n.size=function(t){return e=t,n},n.complement=function(t){return u=0===arguments.length||t,n},n.radius=function(t){return i=t,n},n.fill=function(t){return l=t,n},n.stroke=function(t){return s=t,n},n.strokeWidth=function(t){return h=t,n},n.id=function(t){return 0===arguments.length?f:(f=t,n)},n.url=function(){return"url(#".concat(f,")")},n},lines:function(){function w(t){var n=k;switch(t){case"0/8":case"vertical":return"M ".concat(n/2,", 0 l 0, ").concat(n);case"1/8":return"M ".concat(-n/4,",").concat(n," l ").concat(n/2,",").concat(-n," M ").concat(n/4,",").concat(n," l ").concat(n/2,",").concat(-n," M ").concat(3*n/4,",").concat(n," l ").concat(n/2,",").concat(-n);case"2/8":case"diagonal":return"M 0,".concat(n," l ").concat(n,",").concat(-n," M ").concat(-n/4,",").concat(n/4," l ").concat(n/2,",").concat(-n/2," M ").concat(.75*n,",").concat(5/4*n," l ").concat(n/2,",").concat(-n/2);case"3/8":return"M 0,".concat(.75*n," l ").concat(n,",").concat(-n/2," M 0,").concat(n/4," l ").concat(n,",").concat(-n/2," M 0,").concat(5*n/4," l ").concat(n,",").concat(-n/2);case"4/8":case"horizontal":return"M 0,".concat(n/2," l ").concat(n,",0");case"5/8":return"M 0,".concat(-n/4," l ").concat(n,",").concat(n/2,"M 0,").concat(n/4," l ").concat(n,",").concat(n/2," M 0,").concat(3*n/4," l ").concat(n,",").concat(n/2);case"6/8":return"M 0,0 l ".concat(n,",").concat(n," M ").concat(-n/4,",").concat(.75*n," l ").concat(n/2,",").concat(n/2," M ").concat(3*n/4,",").concat(-n/4," l ").concat(n/2,",").concat(n/2);case"7/8":return"M ".concat(-n/4,",0 l ").concat(n/2,",").concat(n," M ").concat(n/4,",0 l ").concat(n/2,",").concat(n," M ").concat(3*n/4,",0 l ").concat(n/2,",").concat(n);default:return"M ".concat(n/2,", 0 l 0, ").concat(n)}}function a(t){var n=null;t.select("defs[type=texture]").remove();var c=t.node().getBBox();if(Array.isArray(A)&&0<A.length){var a,r=t.append("defs").attr("type","texture"),n=r.append("pattern").attr("id",U).attr("patternUnits","objectBoundingBox").attr("width",1).attr("height",1).attr("x",c.x);for(a in A){for(var e=(A[a].stop-A[a].start)/100,o=Math.floor(A[a].stop-A[a].start),i=[],u=d3.scaleLinear().domain([0,o]).range([A[a].startColor,A[a].stopColor]),l=0;l<o;l++)i.push(u(l));var s,h=r.append("pattern").attr("id","chunk_"+a).attr("patternUnits","objectBoundingBox").attr("width",1).attr("height",1);for(s in i){var f,d=r.append("pattern").attr("id","colormap_"+a+"_"+s).attr("patternUnits","userSpaceOnUse").attr("width",k).attr("height",k),p=j(q);try{for(p.s();!(f=p.n()).done;){var g=f.value;d.append("path").attr("d",w(g)).attr("stroke-width",x).attr("shape-rendering",S).attr("stroke",i[s]).attr("stroke-linecap","square")}}catch(t){p.e(t)}finally{p.f()}h.append("rect").attr("width",c.width/100).attr("height",c.height).attr("x",c.width*s/100).style("fill","url(#colormap_".concat(a,"_").concat(s,")"))}n.append("rect").attr("width",c.width*e).attr("height",c.height).attr("x",0<a?c.width*A[a-1].stop/100:"0").style("fill","url(#chunk_".concat(a,")"))}}else{n=t.append("defs").attr("type","texture").append("pattern").attr("id",U).attr("patternUnits","userSpaceOnUse").attr("width",k).attr("height",k),b&&n.append("rect").attr("width",k).attr("height",k).attr("fill",b);var M,v=j(q);try{for(v.s();!(M=v.n()).done;){var y=M.value;n.append("path").attr("d",w(y)).attr("stroke-width",x).attr("shape-rendering",S).attr("stroke",m).attr("stroke-linecap","square")}}catch(t){v.e(t)}finally{v.f()}}}var k=20,m="#343434",x=2,b="",U=t(),q=["diagonal"],S="auto",A=[];return a.heavier=function(t){return x*=0===arguments.length?2:2*t,a},a.lighter=function(t){return x/=0===arguments.length?2:2*t,a},a.thinner=function(t){return k*=0===arguments.length?2:2*t,a},a.thicker=function(t){return k/=0===arguments.length?2:2*t,a},a.background=function(t){return b=t,a},a.size=function(t){return k=t,a},a.orientation=function(){for(var t=arguments.length,n=new Array(t),c=0;c<t;c++)n[c]=arguments[c];return 0===arguments.length||(q=n),a},a.shapeRendering=function(t){return S=t,a},a.stroke=function(t){return m=t,a},a.strokeWidth=function(t){return x=t,a},a.linearGradient=function(t){return A=t,a},a.id=function(t){return 0===arguments.length?U:(U=t,a)},a.url=function(){return"url(#".concat(U,")")},a},paths:function(){function n(t){var n=function(t){var n=r;switch(t){case"squares":return"M ".concat(n/4," ").concat(n/4," l ").concat(n/2," 0 l 0 ").concat(n/2," l ").concat(-n/2," 0 Z");case"nylon":return"M 0 ".concat(n/4," l ").concat(n/4," 0 l 0 ").concat(-n/4," M ").concat(3*n/4," ").concat(n," l 0 ").concat(-n/4," l ").concat(n/4," 0 M ").concat(n/4," ").concat(n/2," l 0 ").concat(n/4," l ").concat(n/4," 0 M ").concat(n/2," ").concat(n/4," l ").concat(n/4," 0 l 0 ").concat(n/4);case"waves":return"M 0 ".concat(n/2," c ").concat(n/8," ").concat(-n/4," , ").concat(3*n/8," ").concat(-n/4," , ").concat(n/2," 0 c ").concat(n/8," ").concat(n/4," , ").concat(3*n/8," ").concat(n/4," , ").concat(n/2," 0 M ").concat(-n/2," ").concat(n/2," c ").concat(n/8," ").concat(n/4," , ").concat(3*n/8," ").concat(n/4," , ").concat(n/2," 0 M ").concat(n," ").concat(n/2," c ").concat(n/8," ").concat(-n/4," , ").concat(3*n/8," ").concat(-n/4," , ").concat(n/2," 0");case"woven":return"M ".concat(n/4,",").concat(n/4,"l").concat(n/2,",").concat(n/2,"M").concat(3*n/4,",").concat(n/4,"l").concat(n/2,",").concat(-n/2," M").concat(n/4,",").concat(3*n/4,"l").concat(-n/2,",").concat(n/2,"M").concat(3*n/4,",").concat(5*n/4,"l").concat(n/2,",").concat(-n/2," M").concat(-n/4,",").concat(n/4,"l").concat(n/2,",").concat(-n/2);case"crosses":return"M ".concat(n/4,",").concat(n/4,"l").concat(n/2,",").concat(n/2,"M").concat(n/4,",").concat(3*n/4,"l").concat(n/2,",").concat(-n/2);case"caps":return"M ".concat(n/4,",").concat(3*n/4,"l").concat(n/4,",").concat(-n/2,"l").concat(n/4,",").concat(n/2);case"hexagons":return c=3,a=Math.sqrt(3),"M ".concat(n,",0 l ").concat(n,",0 l ").concat(n/2,",").concat(n*Math.sqrt(3)/2," l ").concat(-n/2,",").concat(n*Math.sqrt(3)/2," l ").concat(-n,",0 l ").concat(-n/2,",").concat(-n*Math.sqrt(3)/2," Z M 0,").concat(n*Math.sqrt(3)/2," l ").concat(n/2,",0 M ").concat(3*n,",").concat(n*Math.sqrt(3)/2," l ").concat(-n/2,",0");default:return t(n)}}(u),t=t.append("defs").append("pattern").attr("id",l).attr("patternUnits","userSpaceOnUse").attr("width",r*c).attr("height",r*a);i&&t.append("rect").attr("width",r*c).attr("height",r*a).attr("fill",i),t.append("path").attr("d",n).attr("fill",s).attr("stroke",e).attr("stroke-width",o).attr("stroke-linecap","square").attr("shape-rendering",h)}var c=1,a=1,r=20,e="#343434",o=2,i="",u=function(t){return"M ".concat(t/4,",").concat(3*t/4,"l").concat(t/4,",").concat(-t/2,"l").concat(t/4,",").concat(t/2)},l=t(),s="transparent",h="auto";return n.heavier=function(t){return o*=0===arguments.length?2:2*t,n},n.lighter=function(t){return o/=0===arguments.length?2:2*t,n},n.thinner=function(t){return r*=0===arguments.length?2:2*t,n},n.thicker=function(t){return r/=0===arguments.length?2:2*t,n},n.background=function(t){return i=t,n},n.shapeRendering=function(t){return h=t,n},n.size=function(t){return r=t,n},n.d=function(t){return u=t,n},n.fill=function(t){return s=t,n},n.stroke=function(t){return e=t,n},n.strokeWidth=function(t){return o=t,n},n.id=function(t){return 0===arguments.length?l:(l=t,n)},n.url=function(){return"url(#".concat(l,")")},n}}});
