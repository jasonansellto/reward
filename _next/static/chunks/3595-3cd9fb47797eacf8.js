(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3595],{94184:function(n,e){var t;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/!function(){"use strict";var i={}.hasOwnProperty;function r(){for(var n=[],e=0;e<arguments.length;e++){var t=arguments[e];if(t){var s=typeof t;if("string"===s||"number"===s)n.push(t);else if(Array.isArray(t)){if(t.length){var o=r.apply(null,t);o&&n.push(o)}}else if("object"===s){if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]")){n.push(t.toString());continue}for(var u in t)i.call(t,u)&&t[u]&&n.push(u)}}}return n.join(" ")}n.exports?(r.default=r,n.exports=r):void 0!==(t=(function(){return r}).apply(e,[]))&&(n.exports=t)}()},93776:function(n,e,t){var i;!function(r){"use strict";/*!
   *  decimal.js v10.4.3
   *  An arbitrary-precision Decimal type for JavaScript.
   *  https://github.com/MikeMcl/decimal.js
   *  Copyright (c) 2022 Michael Mclaughlin <M8ch88l@gmail.com>
   *  MIT Licence
   */var s,o,u,c="0123456789abcdef",h="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",f="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",a={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-9e15,maxE:9e15,crypto:!1},l=!0,d="[DecimalError] ",p=d+"Invalid argument: ",g=d+"Precision limit exceeded",m=d+"crypto unavailable",w="[object Decimal]",v=Math.floor,N=Math.pow,x=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,b=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,E=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,y=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,M=h.length-1,O=f.length-1,Z={toStringTag:w};function q(n){var e,t,i,r=n.length-1,s="",o=n[0];if(r>0){for(s+=o,e=1;e<r;e++)(t=7-(i=n[e]+"").length)&&(s+=U(t)),s+=i;(t=7-(i=(o=n[e])+"").length)&&(s+=U(t))}else if(0===o)return"0";for(;o%10==0;)o/=10;return s+o}function C(n,e,t){if(n!==~~n||n<e||n>t)throw Error(p+n)}function F(n,e,t,i){var r,s,o,u;for(s=n[0];s>=10;s/=10)--e;return--e<0?(e+=7,r=0):(r=Math.ceil((e+1)/7),e%=7),s=N(10,7-e),u=n[r]%s|0,null==i?e<3?(0==e?u=u/100|0:1==e&&(u=u/10|0),o=t<4&&99999==u||t>3&&49999==u||5e4==u||0==u):o=(t<4&&u+1==s||t>3&&u+1==s/2)&&(n[r+1]/s/100|0)==N(10,e-2)-1||(u==s/2||0==u)&&(n[r+1]/s/100|0)==0:e<4?(0==e?u=u/1e3|0:1==e?u=u/100|0:2==e&&(u=u/10|0),o=(i||t<4)&&9999==u||!i&&t>3&&4999==u):o=((i||t<4)&&u+1==s||!i&&t>3&&u+1==s/2)&&(n[r+1]/s/1e3|0)==N(10,e-3)-1,o}function A(n,e,t){for(var i,r,s=[0],o=0,u=n.length;o<u;){for(r=s.length;r--;)s[r]*=e;for(s[0]+=c.indexOf(n.charAt(o++)),i=0;i<s.length;i++)s[i]>t-1&&(void 0===s[i+1]&&(s[i+1]=0),s[i+1]+=s[i]/t|0,s[i]%=t)}return s.reverse()}Z.absoluteValue=Z.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),k(n)},Z.ceil=function(){return k(new this.constructor(this),this.e+1,2)},Z.clampedTo=Z.clamp=function(n,e){var t=this.constructor;if(n=new t(n),e=new t(e),!n.s||!e.s)return new t(NaN);if(n.gt(e))throw Error(p+e);return 0>this.cmp(n)?n:this.cmp(e)>0?e:new t(this)},Z.comparedTo=Z.cmp=function(n){var e,t,i,r,s=this.d,o=(n=new this.constructor(n)).d,u=this.s,c=n.s;if(!s||!o)return u&&c?u!==c?u:s===o?0:!s^u<0?1:-1:NaN;if(!s[0]||!o[0])return s[0]?u:o[0]?-c:0;if(u!==c)return u;if(this.e!==n.e)return this.e>n.e^u<0?1:-1;for(e=0,t=(i=s.length)<(r=o.length)?i:r;e<t;++e)if(s[e]!==o[e])return s[e]>o[e]^u<0?1:-1;return i===r?0:i>r^u<0?1:-1},Z.cosine=Z.cos=function(){var n,e,t=this,i=t.constructor;return t.d?t.d[0]?(n=i.precision,e=i.rounding,i.precision=n+Math.max(t.e,t.sd())+7,i.rounding=1,t=function(n,e){var t,i,r;if(e.isZero())return e;(i=e.d.length)<32?r=(1/z(4,t=Math.ceil(i/3))).toString():(t=16,r="2.3283064365386962890625e-10"),n.precision+=t,e=W(n,1,e.times(r),new n(1));for(var s=t;s--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return n.precision-=t,e}(i,G(i,t)),i.precision=n,i.rounding=e,k(2==u||3==u?t.neg():t,n,e,!0)):new i(1):new i(NaN)},Z.cubeRoot=Z.cbrt=function(){var n,e,t,i,r,s,o,u,c,h,f=this.constructor;if(!this.isFinite()||this.isZero())return new f(this);for(l=!1,(s=this.s*N(this.s*this,1/3))&&Math.abs(s)!=1/0?i=new f(s.toString()):(t=q(this.d),(s=((n=this.e)-t.length+1)%3)&&(t+=1==s||-2==s?"0":"00"),s=N(t,1/3),n=v((n+1)/3)-(n%3==(n<0?-1:2)),t=s==1/0?"5e"+n:(t=s.toExponential()).slice(0,t.indexOf("e")+1)+n,(i=new f(t)).s=this.s),o=(n=f.precision)+3;;)if(h=(c=(u=i).times(u).times(u)).plus(this),i=R(h.plus(this).times(u),h.plus(c),o+2,1),q(u.d).slice(0,o)===(t=q(i.d)).slice(0,o)){if("9999"!=(t=t.slice(o-3,o+1))&&(r||"4999"!=t)){+t&&(+t.slice(1)||"5"!=t.charAt(0))||(k(i,n+1,1),e=!i.times(i).times(i).eq(this));break}if(!r&&(k(u,n+1,0),u.times(u).times(u).eq(this))){i=u;break}o+=4,r=1}return l=!0,k(i,n,f.rounding,e)},Z.decimalPlaces=Z.dp=function(){var n,e=this.d,t=NaN;if(e){if(t=((n=e.length-1)-v(this.e/7))*7,n=e[n])for(;n%10==0;n/=10)t--;t<0&&(t=0)}return t},Z.dividedBy=Z.div=function(n){return R(this,new this.constructor(n))},Z.dividedToIntegerBy=Z.divToInt=function(n){var e=this.constructor;return k(R(this,new e(n),0,1,1),e.precision,e.rounding)},Z.equals=Z.eq=function(n){return 0===this.cmp(n)},Z.floor=function(){return k(new this.constructor(this),this.e+1,3)},Z.greaterThan=Z.gt=function(n){return this.cmp(n)>0},Z.greaterThanOrEqualTo=Z.gte=function(n){var e=this.cmp(n);return 1==e||0===e},Z.hyperbolicCosine=Z.cosh=function(){var n,e,t,i,r,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;t=o.precision,i=o.rounding,o.precision=t+Math.max(s.e,s.sd())+4,o.rounding=1,(r=s.d.length)<32?e=(1/z(4,n=Math.ceil(r/3))).toString():(n=16,e="2.3283064365386962890625e-10"),s=W(o,1,s.times(e),new o(1),!0);for(var c,h=n,f=new o(8);h--;)c=s.times(s),s=u.minus(c.times(f.minus(c.times(f))));return k(s,o.precision=t,o.rounding=i,!0)},Z.hyperbolicSine=Z.sinh=function(){var n,e,t,i,r=this,s=r.constructor;if(!r.isFinite()||r.isZero())return new s(r);if(e=s.precision,t=s.rounding,s.precision=e+Math.max(r.e,r.sd())+4,s.rounding=1,(i=r.d.length)<3)r=W(s,2,r,r,!0);else{n=(n=1.4*Math.sqrt(i))>16?16:0|n,r=r.times(1/z(5,n)),r=W(s,2,r,r,!0);for(var o,u=new s(5),c=new s(16),h=new s(20);n--;)o=r.times(r),r=r.times(u.plus(o.times(c.times(o).plus(h))))}return s.precision=e,s.rounding=t,k(r,e,t,!0)},Z.hyperbolicTangent=Z.tanh=function(){var n,e,t=this.constructor;return this.isFinite()?this.isZero()?new t(this):(n=t.precision,e=t.rounding,t.precision=n+7,t.rounding=1,R(this.sinh(),this.cosh(),t.precision=n,t.rounding=e)):new t(this.s)},Z.inverseCosine=Z.acos=function(){var n,e=this,t=e.constructor,i=e.abs().cmp(1),r=t.precision,s=t.rounding;return -1!==i?0===i?e.isNeg()?_(t,r,s):new t(0):new t(NaN):e.isZero()?_(t,r+4,s).times(.5):(t.precision=r+6,t.rounding=1,e=e.asin(),n=_(t,r+4,s).times(.5),t.precision=r,t.rounding=s,n.minus(e))},Z.inverseHyperbolicCosine=Z.acosh=function(){var n,e,t=this,i=t.constructor;return t.lte(1)?new i(t.eq(1)?0:NaN):t.isFinite()?(n=i.precision,e=i.rounding,i.precision=n+Math.max(Math.abs(t.e),t.sd())+4,i.rounding=1,l=!1,t=t.times(t).minus(1).sqrt().plus(t),l=!0,i.precision=n,i.rounding=e,t.ln()):new i(t)},Z.inverseHyperbolicSine=Z.asinh=function(){var n,e,t=this,i=t.constructor;return!t.isFinite()||t.isZero()?new i(t):(n=i.precision,e=i.rounding,i.precision=n+2*Math.max(Math.abs(t.e),t.sd())+6,i.rounding=1,l=!1,t=t.times(t).plus(1).sqrt().plus(t),l=!0,i.precision=n,i.rounding=e,t.ln())},Z.inverseHyperbolicTangent=Z.atanh=function(){var n,e,t,i,r=this,s=r.constructor;return r.isFinite()?r.e>=0?new s(r.abs().eq(1)?r.s/0:r.isZero()?r:NaN):(n=s.precision,e=s.rounding,Math.max(i=r.sd(),n)<-(2*r.e)-1)?k(new s(r),n,e,!0):(s.precision=t=i-r.e,r=R(r.plus(1),new s(1).minus(r),t+n,1),s.precision=n+4,s.rounding=1,r=r.ln(),s.precision=n,s.rounding=e,r.times(.5)):new s(NaN)},Z.inverseSine=Z.asin=function(){var n,e,t,i,r=this,s=r.constructor;return r.isZero()?new s(r):(e=r.abs().cmp(1),t=s.precision,i=s.rounding,-1!==e)?0===e?((n=_(s,t+4,i).times(.5)).s=r.s,n):new s(NaN):(s.precision=t+6,s.rounding=1,r=r.div(new s(1).minus(r.times(r)).sqrt().plus(1)).atan(),s.precision=t,s.rounding=i,r.times(2))},Z.inverseTangent=Z.atan=function(){var n,e,t,i,r,s,o,u,c,h=this,f=h.constructor,a=f.precision,d=f.rounding;if(h.isFinite()){if(h.isZero())return new f(h);if(h.abs().eq(1)&&a+4<=O)return(o=_(f,a+4,d).times(.25)).s=h.s,o}else{if(!h.s)return new f(NaN);if(a+4<=O)return(o=_(f,a+4,d).times(.5)).s=h.s,o}for(f.precision=u=a+10,f.rounding=1,n=t=Math.min(28,u/7+2|0);n;--n)h=h.div(h.times(h).plus(1).sqrt().plus(1));for(l=!1,e=Math.ceil(u/7),i=1,c=h.times(h),o=new f(h),r=h;-1!==n;)if(r=r.times(c),s=o.minus(r.div(i+=2)),r=r.times(c),void 0!==(o=s.plus(r.div(i+=2))).d[e])for(n=e;o.d[n]===s.d[n]&&n--;);return t&&(o=o.times(2<<t-1)),l=!0,k(o,f.precision=a,f.rounding=d,!0)},Z.isFinite=function(){return!!this.d},Z.isInteger=Z.isInt=function(){return!!this.d&&v(this.e/7)>this.d.length-2},Z.isNaN=function(){return!this.s},Z.isNegative=Z.isNeg=function(){return this.s<0},Z.isPositive=Z.isPos=function(){return this.s>0},Z.isZero=function(){return!!this.d&&0===this.d[0]},Z.lessThan=Z.lt=function(n){return 0>this.cmp(n)},Z.lessThanOrEqualTo=Z.lte=function(n){return 1>this.cmp(n)},Z.logarithm=Z.log=function(n){var e,t,i,r,s,o,u,c=this.constructor,h=c.precision,f=c.rounding;if(null==n)n=new c(10),e=!0;else{if(t=(n=new c(n)).d,n.s<0||!t||!t[0]||n.eq(1))return new c(NaN);e=n.eq(10)}if(t=this.d,this.s<0||!t||!t[0]||this.eq(1))return new c(t&&!t[0]?-1/0:1!=this.s?NaN:t?0:1/0);if(e){if(t.length>1)r=!0;else{for(i=t[0];i%10==0;)i/=10;r=1!==i}}if(l=!1,F((u=R(B(this,o=h+5),e?P(c,o+10):B(n,o),o,1)).d,i=h,f))do if(o+=10,u=R(B(this,o),e?P(c,o+10):B(n,o),o,1),!r){+q(u.d).slice(i+1,i+15)+1==1e14&&(u=k(u,h+1,0));break}while(F(u.d,i+=10,f));return l=!0,k(u,h,f)},Z.minus=Z.sub=function(n){var e,t,i,r,s,o,u,c,h,f,a,d,p=this.constructor;if(n=new p(n),!this.d||!n.d)return this.s&&n.s?this.d?n.s=-n.s:n=new p(n.d||this.s!==n.s?this:NaN):n=new p(NaN),n;if(this.s!=n.s)return n.s=-n.s,this.plus(n);if(h=this.d,d=n.d,u=p.precision,c=p.rounding,!h[0]||!d[0]){if(d[0])n.s=-n.s;else{if(!h[0])return new p(3===c?-0:0);n=new p(this)}return l?k(n,u,c):n}if(t=v(n.e/7),f=v(this.e/7),h=h.slice(),s=f-t){for((a=s<0)?(e=h,s=-s,o=d.length):(e=d,t=f,o=h.length),i=Math.max(Math.ceil(u/7),o)+2,s>i&&(s=i,e.length=1),e.reverse(),i=s;i--;)e.push(0);e.reverse()}else{for((a=(i=h.length)<(o=d.length))&&(o=i),i=0;i<o;i++)if(h[i]!=d[i]){a=h[i]<d[i];break}s=0}for(a&&(e=h,h=d,d=e,n.s=-n.s),o=h.length,i=d.length-o;i>0;--i)h[o++]=0;for(i=d.length;i>s;){if(h[--i]<d[i]){for(r=i;r&&0===h[--r];)h[r]=1e7-1;--h[r],h[i]+=1e7}h[i]-=d[i]}for(;0===h[--o];)h.pop();for(;0===h[0];h.shift())--t;return h[0]?(n.d=h,n.e=D(h,t),l?k(n,u,c):n):new p(3===c?-0:0)},Z.modulo=Z.mod=function(n){var e,t=this.constructor;return(n=new t(n),this.d&&n.s&&(!n.d||n.d[0]))?n.d&&(!this.d||this.d[0])?(l=!1,9==t.modulo?(e=R(this,n.abs(),0,3,1),e.s*=n.s):e=R(this,n,0,t.modulo,1),e=e.times(n),l=!0,this.minus(e)):k(new t(this),t.precision,t.rounding):new t(NaN)},Z.naturalExponential=Z.exp=function(){return I(this)},Z.naturalLogarithm=Z.ln=function(){return B(this)},Z.negated=Z.neg=function(){var n=new this.constructor(this);return n.s=-n.s,k(n)},Z.plus=Z.add=function(n){var e,t,i,r,s,o,u,c,h,f,a=this.constructor;if(n=new a(n),!this.d||!n.d)return this.s&&n.s?this.d||(n=new a(n.d||this.s===n.s?this:NaN)):n=new a(NaN),n;if(this.s!=n.s)return n.s=-n.s,this.minus(n);if(h=this.d,f=n.d,u=a.precision,c=a.rounding,!h[0]||!f[0])return f[0]||(n=new a(this)),l?k(n,u,c):n;if(s=v(this.e/7),i=v(n.e/7),h=h.slice(),r=s-i){for(r<0?(t=h,r=-r,o=f.length):(t=f,i=s,o=h.length),r>(o=(s=Math.ceil(u/7))>o?s+1:o+1)&&(r=o,t.length=1),t.reverse();r--;)t.push(0);t.reverse()}for((o=h.length)-(r=f.length)<0&&(r=o,t=f,f=h,h=t),e=0;r;)e=(h[--r]=h[r]+f[r]+e)/1e7|0,h[r]%=1e7;for(e&&(h.unshift(e),++i),o=h.length;0==h[--o];)h.pop();return n.d=h,n.e=D(h,i),l?k(n,u,c):n},Z.precision=Z.sd=function(n){var e;if(void 0!==n&&!!n!==n&&1!==n&&0!==n)throw Error(p+n);return this.d?(e=T(this.d),n&&this.e+1>e&&(e=this.e+1)):e=NaN,e},Z.round=function(){var n=this.constructor;return k(new n(this),this.e+1,n.rounding)},Z.sine=Z.sin=function(){var n,e,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(n=i.precision,e=i.rounding,i.precision=n+Math.max(t.e,t.sd())+7,i.rounding=1,t=function(n,e){var t,i=e.d.length;if(i<3)return e.isZero()?e:W(n,2,e,e);t=(t=1.4*Math.sqrt(i))>16?16:0|t,e=e.times(1/z(5,t)),e=W(n,2,e,e);for(var r,s=new n(5),o=new n(16),u=new n(20);t--;)r=e.times(e),e=e.times(s.plus(r.times(o.times(r).minus(u))));return e}(i,G(i,t)),i.precision=n,i.rounding=e,k(u>2?t.neg():t,n,e,!0)):new i(NaN)},Z.squareRoot=Z.sqrt=function(){var n,e,t,i,r,s,o=this.d,u=this.e,c=this.s,h=this.constructor;if(1!==c||!o||!o[0])return new h(!c||c<0&&(!o||o[0])?NaN:o?this:1/0);for(l=!1,0==(c=Math.sqrt(+this))||c==1/0?(((e=q(o)).length+u)%2==0&&(e+="0"),c=Math.sqrt(e),u=v((u+1)/2)-(u<0||u%2),e=c==1/0?"5e"+u:(e=c.toExponential()).slice(0,e.indexOf("e")+1)+u,i=new h(e)):i=new h(c.toString()),t=(u=h.precision)+3;;)if(i=(s=i).plus(R(this,s,t+2,1)).times(.5),q(s.d).slice(0,t)===(e=q(i.d)).slice(0,t)){if("9999"!=(e=e.slice(t-3,t+1))&&(r||"4999"!=e)){+e&&(+e.slice(1)||"5"!=e.charAt(0))||(k(i,u+1,1),n=!i.times(i).eq(this));break}if(!r&&(k(s,u+1,0),s.times(s).eq(this))){i=s;break}t+=4,r=1}return l=!0,k(i,u,h.rounding,n)},Z.tangent=Z.tan=function(){var n,e,t=this,i=t.constructor;return t.isFinite()?t.isZero()?new i(t):(n=i.precision,e=i.rounding,i.precision=n+10,i.rounding=1,(t=t.sin()).s=1,t=R(t,new i(1).minus(t.times(t)).sqrt(),n+10,0),i.precision=n,i.rounding=e,k(2==u||4==u?t.neg():t,n,e,!0)):new i(NaN)},Z.times=Z.mul=function(n){var e,t,i,r,s,o,u,c,h,f=this.constructor,a=this.d,d=(n=new f(n)).d;if(n.s*=this.s,!a||!a[0]||!d||!d[0])return new f(n.s&&(!a||a[0]||d)&&(!d||d[0]||a)?a&&d?0*n.s:n.s/0:NaN);for(t=v(this.e/7)+v(n.e/7),(c=a.length)<(h=d.length)&&(s=a,a=d,d=s,o=c,c=h,h=o),s=[],i=o=c+h;i--;)s.push(0);for(i=h;--i>=0;){for(e=0,r=c+i;r>i;)u=s[r]+d[i]*a[r-i-1]+e,s[r--]=u%1e7|0,e=u/1e7|0;s[r]=(s[r]+e)%1e7|0}for(;!s[--o];)s.pop();return e?++t:s.shift(),n.d=s,n.e=D(s,t),l?k(n,f.precision,f.rounding):n},Z.toBinary=function(n,e){return J(this,2,n,e)},Z.toDecimalPlaces=Z.toDP=function(n,e){var t=this,i=t.constructor;return(t=new i(t),void 0===n)?t:(C(n,0,1e9),void 0===e?e=i.rounding:C(e,0,8),k(t,n+t.e+1,e))},Z.toExponential=function(n,e){var t,i=this,r=i.constructor;return void 0===n?t=S(i,!0):(C(n,0,1e9),void 0===e?e=r.rounding:C(e,0,8),t=S(i=k(new r(i),n+1,e),!0,n+1)),i.isNeg()&&!i.isZero()?"-"+t:t},Z.toFixed=function(n,e){var t,i,r=this.constructor;return void 0===n?t=S(this):(C(n,0,1e9),void 0===e?e=r.rounding:C(e,0,8),t=S(i=k(new r(this),n+this.e+1,e),!1,n+i.e+1)),this.isNeg()&&!this.isZero()?"-"+t:t},Z.toFraction=function(n){var e,t,i,r,s,o,u,c,h,f,a,d,g=this.d,m=this.constructor;if(!g)return new m(this);if(h=t=new m(1),i=c=new m(0),o=(s=(e=new m(i)).e=T(g)-this.e-1)%7,e.d[0]=N(10,o<0?7+o:o),null==n)n=s>0?e:h;else{if(!(u=new m(n)).isInt()||u.lt(h))throw Error(p+u);n=u.gt(e)?s>0?e:h:u}for(l=!1,u=new m(q(g)),f=m.precision,m.precision=s=14*g.length;a=R(u,e,0,1,1),1!=(r=t.plus(a.times(i))).cmp(n);)t=i,i=r,r=h,h=c.plus(a.times(r)),c=r,r=e,e=u.minus(a.times(r)),u=r;return r=R(n.minus(t),i,0,1,1),c=c.plus(r.times(h)),t=t.plus(r.times(i)),c.s=h.s=this.s,d=1>R(h,i,s,1).minus(this).abs().cmp(R(c,t,s,1).minus(this).abs())?[h,i]:[c,t],m.precision=f,l=!0,d},Z.toHexadecimal=Z.toHex=function(n,e){return J(this,16,n,e)},Z.toNearest=function(n,e){var t=this,i=t.constructor;if(t=new i(t),null==n){if(!t.d)return t;n=new i(1),e=i.rounding}else{if(n=new i(n),void 0===e?e=i.rounding:C(e,0,8),!t.d)return n.s?t:n;if(!n.d)return n.s&&(n.s=t.s),n}return n.d[0]?(l=!1,t=R(t,n,0,e,1).times(n),l=!0,k(t)):(n.s=t.s,t=n),t},Z.toNumber=function(){return+this},Z.toOctal=function(n,e){return J(this,8,n,e)},Z.toPower=Z.pow=function(n){var e,t,i,r,s,o,u=this,c=u.constructor,h=+(n=new c(n));if(!u.d||!n.d||!u.d[0]||!n.d[0])return new c(N(+u,h));if((u=new c(u)).eq(1))return u;if(i=c.precision,s=c.rounding,n.eq(1))return k(u,i,s);if((e=v(n.e/7))>=n.d.length-1&&(t=h<0?-h:h)<=9007199254740991)return r=L(c,u,t,i),n.s<0?new c(1).div(r):k(r,i,s);if((o=u.s)<0){if(e<n.d.length-1)return new c(NaN);if((1&n.d[e])==0&&(o=1),0==u.e&&1==u.d[0]&&1==u.d.length)return u.s=o,u}return(e=0!=(t=N(+u,h))&&isFinite(t)?new c(t+"").e:v(h*(Math.log("0."+q(u.d))/Math.LN10+u.e+1)))>c.maxE+1||e<c.minE-1?new c(e>0?o/0:0):(l=!1,c.rounding=u.s=1,t=Math.min(12,(e+"").length),(r=I(n.times(B(u,i+t)),i)).d&&F((r=k(r,i+5,1)).d,i,s)&&(e=i+10,+q((r=k(I(n.times(B(u,e+t)),e),e+5,1)).d).slice(i+1,i+15)+1==1e14&&(r=k(r,i+1,0))),r.s=o,l=!0,c.rounding=s,k(r,i,s))},Z.toPrecision=function(n,e){var t,i=this,r=i.constructor;return void 0===n?t=S(i,i.e<=r.toExpNeg||i.e>=r.toExpPos):(C(n,1,1e9),void 0===e?e=r.rounding:C(e,0,8),t=S(i=k(new r(i),n,e),n<=i.e||i.e<=r.toExpNeg,n)),i.isNeg()&&!i.isZero()?"-"+t:t},Z.toSignificantDigits=Z.toSD=function(n,e){var t=this.constructor;return void 0===n?(n=t.precision,e=t.rounding):(C(n,1,1e9),void 0===e?e=t.rounding:C(e,0,8)),k(new t(this),n,e)},Z.toString=function(){var n=this.constructor,e=S(this,this.e<=n.toExpNeg||this.e>=n.toExpPos);return this.isNeg()&&!this.isZero()?"-"+e:e},Z.truncated=Z.trunc=function(){return k(new this.constructor(this),this.e+1,1)},Z.valueOf=Z.toJSON=function(){var n=this.constructor,e=S(this,this.e<=n.toExpNeg||this.e>=n.toExpPos);return this.isNeg()?"-"+e:e};var R=function(){function n(n,e,t){var i,r=0,s=n.length;for(n=n.slice();s--;)i=n[s]*e+r,n[s]=i%t|0,r=i/t|0;return r&&n.unshift(r),n}function e(n,e,t,i){var r,s;if(t!=i)s=t>i?1:-1;else for(r=s=0;r<t;r++)if(n[r]!=e[r]){s=n[r]>e[r]?1:-1;break}return s}function t(n,e,t,i){for(var r=0;t--;)n[t]-=r,r=n[t]<e[t]?1:0,n[t]=r*i+n[t]-e[t];for(;!n[0]&&n.length>1;)n.shift()}return function(i,r,s,u,c,h){var f,a,l,d,p,g,m,w,N,x,b,E,y,M,O,Z,q,C,F,A,R=i.constructor,S=i.s==r.s?1:-1,D=i.d,P=r.d;if(!D||!D[0]||!P||!P[0])return new R(i.s&&r.s&&(D?!P||D[0]!=P[0]:P)?D&&0==D[0]||!P?0*S:S/0:NaN);for(h?(p=1,a=i.e-r.e):(h=1e7,p=7,a=v(i.e/p)-v(r.e/p)),F=P.length,q=D.length,x=(N=new R(S)).d=[],l=0;P[l]==(D[l]||0);l++);if(P[l]>(D[l]||0)&&a--,null==s?(M=s=R.precision,u=R.rounding):M=c?s+(i.e-r.e)+1:s,M<0)x.push(1),g=!0;else{if(M=M/p+2|0,l=0,1==F){for(d=0,P=P[0],M++;(l<q||d)&&M--;l++)O=d*h+(D[l]||0),x[l]=O/P|0,d=O%P|0;g=d||l<q}else{for((d=h/(P[0]+1)|0)>1&&(P=n(P,d,h),D=n(D,d,h),F=P.length,q=D.length),Z=F,E=(b=D.slice(0,F)).length;E<F;)b[E++]=0;(A=P.slice()).unshift(0),C=P[0],P[1]>=h/2&&++C;do d=0,(f=e(P,b,F,E))<0?(y=b[0],F!=E&&(y=y*h+(b[1]||0)),(d=y/C|0)>1?(d>=h&&(d=h-1),w=(m=n(P,d,h)).length,E=b.length,1==(f=e(m,b,w,E))&&(d--,t(m,F<w?A:P,w,h))):(0==d&&(f=d=1),m=P.slice()),(w=m.length)<E&&m.unshift(0),t(b,m,E,h),-1==f&&(E=b.length,(f=e(P,b,F,E))<1&&(d++,t(b,F<E?A:P,E,h))),E=b.length):0===f&&(d++,b=[0]),x[l++]=d,f&&b[0]?b[E++]=D[Z]||0:(b=[D[Z]],E=1);while((Z++<q||void 0!==b[0])&&M--);g=void 0!==b[0]}x[0]||x.shift()}if(1==p)N.e=a,o=g;else{for(l=1,d=x[0];d>=10;d/=10)l++;N.e=l+a*p-1,k(N,c?s+N.e+1:s,u,g)}return N}}();function k(n,e,t,i){var r,s,o,u,c,h,f,a,d,p=n.constructor;n:if(null!=e){if(!(a=n.d))return n;for(r=1,u=a[0];u>=10;u/=10)r++;if((s=e-r)<0)s+=7,o=e,c=(f=a[d=0])/N(10,r-o-1)%10|0;else if(d=Math.ceil((s+1)/7),u=a.length,d>=u){if(i){for(;u++<=d;)a.push(0);f=c=0,r=1,s%=7,o=s-7+1}else break n}else{for(r=1,f=u=a[d];u>=10;u/=10)r++;s%=7,c=(o=s-7+r)<0?0:f/N(10,r-o-1)%10|0}if(i=i||e<0||void 0!==a[d+1]||(o<0?f:f%N(10,r-o-1)),h=t<4?(c||i)&&(0==t||t==(n.s<0?3:2)):c>5||5==c&&(4==t||i||6==t&&(s>0?o>0?f/N(10,r-o):0:a[d-1])%10&1||t==(n.s<0?8:7)),e<1||!a[0])return a.length=0,h?(e-=n.e+1,a[0]=N(10,(7-e%7)%7),n.e=-e||0):a[0]=n.e=0,n;if(0==s?(a.length=d,u=1,d--):(a.length=d+1,u=N(10,7-s),a[d]=o>0?(f/N(10,r-o)%N(10,o)|0)*u:0),h)for(;;){if(0==d){for(s=1,o=a[0];o>=10;o/=10)s++;for(o=a[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(n.e++,1e7==a[0]&&(a[0]=1));break}if(a[d]+=u,1e7!=a[d])break;a[d--]=0,u=1}for(s=a.length;0===a[--s];)a.pop()}return l&&(n.e>p.maxE?(n.d=null,n.e=NaN):n.e<p.minE&&(n.e=0,n.d=[0])),n}function S(n,e,t){if(!n.isFinite())return $(n);var i,r=n.e,s=q(n.d),o=s.length;return e?(t&&(i=t-o)>0?s=s.charAt(0)+"."+s.slice(1)+U(i):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(n.e<0?"e":"e+")+n.e):r<0?(s="0."+U(-r-1)+s,t&&(i=t-o)>0&&(s+=U(i))):r>=o?(s+=U(r+1-o),t&&(i=t-r-1)>0&&(s=s+"."+U(i))):((i=r+1)<o&&(s=s.slice(0,i)+"."+s.slice(i)),t&&(i=t-o)>0&&(r+1===o&&(s+="."),s+=U(i))),s}function D(n,e){var t=n[0];for(e*=7;t>=10;t/=10)e++;return e}function P(n,e,t){if(e>M)throw l=!0,t&&(n.precision=t),Error(g);return k(new n(h),e,1,!0)}function _(n,e,t){if(e>O)throw Error(g);return k(new n(f),e,t,!0)}function T(n){var e=n.length-1,t=7*e+1;if(e=n[e]){for(;e%10==0;e/=10)t--;for(e=n[0];e>=10;e/=10)t++}return t}function U(n){for(var e="";n--;)e+="0";return e}function L(n,e,t,i){var r,s=new n(1),o=Math.ceil(i/7+4);for(l=!1;;){if(t%2&&K((s=s.times(e)).d,o)&&(r=!0),0===(t=v(t/2))){t=s.d.length-1,r&&0===s.d[t]&&++s.d[t];break}K((e=e.times(e)).d,o)}return l=!0,s}function j(n){return 1&n.d[n.d.length-1]}function H(n,e,t){for(var i,r=new n(e[0]),s=0;++s<e.length;)if((i=new n(e[s])).s)r[t](i)&&(r=i);else{r=i;break}return r}function I(n,e){var t,i,r,s,o,u,c,h=0,f=0,a=0,d=n.constructor,p=d.rounding,g=d.precision;if(!n.d||!n.d[0]||n.e>17)return new d(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:0/0);for(null==e?(l=!1,c=g):c=e,u=new d(.03125);n.e>-2;)n=n.times(u),a+=5;for(c+=i=Math.log(N(2,a))/Math.LN10*2+5|0,t=s=o=new d(1),d.precision=c;;){if(s=k(s.times(n),c,1),t=t.times(++f),q((u=o.plus(R(s,t,c,1))).d).slice(0,c)===q(o.d).slice(0,c)){for(r=a;r--;)o=k(o.times(o),c,1);if(null!=e)return d.precision=g,o;if(!(h<3&&F(o.d,c-i,p,h)))return k(o,d.precision=g,p,l=!0);d.precision=c+=10,t=s=u=new d(1),f=0,h++}o=u}}function B(n,e){var t,i,r,s,o,u,c,h,f,a,d,p=1,g=n,m=g.d,w=g.constructor,v=w.rounding,N=w.precision;if(g.s<0||!m||!m[0]||!g.e&&1==m[0]&&1==m.length)return new w(m&&!m[0]?-1/0:1!=g.s?NaN:m?0:g);if(null==e?(l=!1,f=N):f=e,w.precision=f+=10,i=(t=q(m)).charAt(0),!(15e14>Math.abs(s=g.e)))return h=P(w,f+2,N).times(s+""),g=B(new w(i+"."+t.slice(1)),f-10).plus(h),w.precision=N,null==e?k(g,N,v,l=!0):g;for(;i<7&&1!=i||1==i&&t.charAt(1)>3;)i=(t=q((g=g.times(n)).d)).charAt(0),p++;for(s=g.e,i>1?(g=new w("0."+t),s++):g=new w(i+"."+t.slice(1)),a=g,c=o=g=R(g.minus(1),g.plus(1),f,1),d=k(g.times(g),f,1),r=3;;){if(o=k(o.times(d),f,1),q((h=c.plus(R(o,new w(r),f,1))).d).slice(0,f)===q(c.d).slice(0,f)){if(c=c.times(2),0!==s&&(c=c.plus(P(w,f+2,N).times(s+""))),c=R(c,new w(p),f,1),null!=e)return w.precision=N,c;if(!F(c.d,f-10,v,u))return k(c,w.precision=N,v,l=!0);w.precision=f+=10,h=o=g=R(a.minus(1),a.plus(1),f,1),d=k(g.times(g),f,1),r=u=1}c=h,r+=2}}function $(n){return String(n.s*n.s/0)}function V(n,e){var t,i,r;for((t=e.indexOf("."))>-1&&(e=e.replace(".","")),(i=e.search(/e/i))>0?(t<0&&(t=i),t+=+e.slice(i+1),e=e.substring(0,i)):t<0&&(t=e.length),i=0;48===e.charCodeAt(i);i++);for(r=e.length;48===e.charCodeAt(r-1);--r);if(e=e.slice(i,r)){if(r-=i,n.e=t=t-i-1,n.d=[],i=(t+1)%7,t<0&&(i+=7),i<r){for(i&&n.d.push(+e.slice(0,i)),r-=7;i<r;)n.d.push(+e.slice(i,i+=7));i=7-(e=e.slice(i)).length}else i-=r;for(;i--;)e+="0";n.d.push(+e),l&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function W(n,e,t,i,r){var s,o,u,c,h=n.precision,f=Math.ceil(h/7);for(l=!1,c=t.times(t),u=new n(i);;){if(o=R(u.times(c),new n(e++*e++),h,1),u=r?i.plus(o):i.minus(o),i=R(o.times(c),new n(e++*e++),h,1),void 0!==(o=u.plus(i)).d[f]){for(s=f;o.d[s]===u.d[s]&&s--;);if(-1==s)break}s=u,u=i,i=o,o=s}return l=!0,o.d.length=f+1,o}function z(n,e){for(var t=n;--e;)t*=n;return t}function G(n,e){var t,i=e.s<0,r=_(n,n.precision,1),s=r.times(.5);if((e=e.abs()).lte(s))return u=i?4:1,e;if((t=e.divToInt(r)).isZero())u=i?3:2;else{if((e=e.minus(t.times(r))).lte(s))return u=j(t)?i?2:3:i?4:1,e;u=j(t)?i?1:4:i?3:2}return e.minus(r).abs()}function J(n,e,t,i){var r,s,u,h,f,a,l,d,p,g=n.constructor,m=void 0!==t;if(m?(C(t,1,1e9),void 0===i?i=g.rounding:C(i,0,8)):(t=g.precision,i=g.rounding),n.isFinite()){for(u=(l=S(n)).indexOf("."),m?(r=2,16==e?t=4*t-3:8==e&&(t=3*t-2)):r=e,u>=0&&(l=l.replace(".",""),(p=new g(1)).e=l.length-u,p.d=A(S(p),10,r),p.e=p.d.length),s=f=(d=A(l,10,r)).length;0==d[--f];)d.pop();if(d[0]){if(u<0?s--:((n=new g(n)).d=d,n.e=s,d=(n=R(n,p,t,i,0,r)).d,s=n.e,a=o),u=d[t],h=r/2,a=a||void 0!==d[t+1],a=i<4?(void 0!==u||a)&&(0===i||i===(n.s<0?3:2)):u>h||u===h&&(4===i||a||6===i&&1&d[t-1]||i===(n.s<0?8:7)),d.length=t,a)for(;++d[--t]>r-1;)d[t]=0,t||(++s,d.unshift(1));for(f=d.length;!d[f-1];--f);for(u=0,l="";u<f;u++)l+=c.charAt(d[u]);if(m){if(f>1){if(16==e||8==e){for(u=16==e?4:3,--f;f%u;f++)l+="0";for(f=(d=A(l,r,e)).length;!d[f-1];--f);for(u=1,l="1.";u<f;u++)l+=c.charAt(d[u])}else l=l.charAt(0)+"."+l.slice(1)}l=l+(s<0?"p":"p+")+s}else if(s<0){for(;++s;)l="0"+l;l="0."+l}else if(++s>f)for(s-=f;s--;)l+="0";else s<f&&(l=l.slice(0,s)+"."+l.slice(s))}else l=m?"0p+0":"0";l=(16==e?"0x":2==e?"0b":8==e?"0o":"")+l}else l=$(n);return n.s<0?"-"+l:l}function K(n,e){if(n.length>e)return n.length=e,!0}function Q(n){return new this(n).abs()}function X(n){return new this(n).acos()}function Y(n){return new this(n).acosh()}function nn(n,e){return new this(n).plus(e)}function ne(n){return new this(n).asin()}function nt(n){return new this(n).asinh()}function ni(n){return new this(n).atan()}function nr(n){return new this(n).atanh()}function ns(n,e){n=new this(n),e=new this(e);var t,i=this.precision,r=this.rounding,s=i+4;return n.s&&e.s?n.d||e.d?!e.d||n.isZero()?(t=e.s<0?_(this,i,r):new this(0)).s=n.s:!n.d||e.isZero()?(t=_(this,s,1).times(.5)).s=n.s:e.s<0?(this.precision=s,this.rounding=1,t=this.atan(R(n,e,s,1)),e=_(this,s,1),this.precision=i,this.rounding=r,t=n.s<0?t.minus(e):t.plus(e)):t=this.atan(R(n,e,s,1)):(t=_(this,s,1).times(e.s>0?.25:.75)).s=n.s:t=new this(NaN),t}function no(n){return new this(n).cbrt()}function nu(n){return k(n=new this(n),n.e+1,2)}function nc(n,e,t){return new this(n).clamp(e,t)}function nh(n){if(!n||"object"!=typeof n)throw Error(d+"Object expected");var e,t,i,r=!0===n.defaults,s=["precision",1,1e9,"rounding",0,8,"toExpNeg",-9e15,0,"toExpPos",0,9e15,"maxE",0,9e15,"minE",-9e15,0,"modulo",0,9];for(e=0;e<s.length;e+=3)if(t=s[e],r&&(this[t]=a[t]),void 0!==(i=n[t])){if(v(i)===i&&i>=s[e+1]&&i<=s[e+2])this[t]=i;else throw Error(p+t+": "+i)}if(t="crypto",r&&(this[t]=a[t]),void 0!==(i=n[t])){if(!0===i||!1===i||0===i||1===i){if(i){if("undefined"!=typeof crypto&&crypto&&(crypto.getRandomValues||crypto.randomBytes))this[t]=!0;else throw Error(m)}else this[t]=!1}else throw Error(p+t+": "+i)}return this}function nf(n){return new this(n).cos()}function na(n){return new this(n).cosh()}function nl(n,e){return new this(n).div(e)}function nd(n){return new this(n).exp()}function np(n){return k(n=new this(n),n.e+1,3)}function ng(){var n,e,t=new this(0);for(n=0,l=!1;n<arguments.length;)if(e=new this(arguments[n++]),e.d)t.d&&(t=t.plus(e.times(e)));else{if(e.s)return l=!0,new this(1/0);t=e}return l=!0,t.sqrt()}function nm(n){return n instanceof s||n&&n.toStringTag===w||!1}function nw(n){return new this(n).ln()}function nv(n,e){return new this(n).log(e)}function nN(n){return new this(n).log(2)}function nx(n){return new this(n).log(10)}function nb(){return H(this,arguments,"lt")}function nE(){return H(this,arguments,"gt")}function ny(n,e){return new this(n).mod(e)}function nM(n,e){return new this(n).mul(e)}function nO(n,e){return new this(n).pow(e)}function nZ(n){var e,t,i,r,s=0,o=new this(1),u=[];if(void 0===n?n=this.precision:C(n,1,1e9),i=Math.ceil(n/7),this.crypto){if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(i));s<i;)(r=e[s])>=429e7?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:u[s++]=r%1e7;else if(crypto.randomBytes){for(e=crypto.randomBytes(i*=4);s<i;)(r=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((127&e[s+3])<<24))>=214e7?crypto.randomBytes(4).copy(e,s):(u.push(r%1e7),s+=4);s=i/4}else throw Error(m)}else for(;s<i;)u[s++]=1e7*Math.random()|0;for(i=u[--s],n%=7,i&&n&&(r=N(10,7-n),u[s]=(i/r|0)*r);0===u[s];s--)u.pop();if(s<0)t=0,u=[0];else{for(t=-1;0===u[0];t-=7)u.shift();for(i=1,r=u[0];r>=10;r/=10)i++;i<7&&(t-=7-i)}return o.e=t,o.d=u,o}function nq(n){return k(n=new this(n),n.e+1,this.rounding)}function nC(n){return(n=new this(n)).d?n.d[0]?n.s:0*n.s:n.s||NaN}function nF(n){return new this(n).sin()}function nA(n){return new this(n).sinh()}function nR(n){return new this(n).sqrt()}function nk(n,e){return new this(n).sub(e)}function nS(){var n=0,e=arguments,t=new this(e[n]);for(l=!1;t.s&&++n<e.length;)t=t.plus(e[n]);return l=!0,k(t,this.precision,this.rounding)}function nD(n){return new this(n).tan()}function nP(n){return new this(n).tanh()}function n_(n){return k(n=new this(n),n.e+1,1)}(s=function n(e){var t,i,r;function o(n){var e,t,i;if(!(this instanceof o))return new o(n);if(this.constructor=o,nm(n)){this.s=n.s,l?!n.d||n.e>o.maxE?(this.e=NaN,this.d=null):n.e<o.minE?(this.e=0,this.d=[0]):(this.e=n.e,this.d=n.d.slice()):(this.e=n.e,this.d=n.d?n.d.slice():n.d);return}if("number"==(i=typeof n)){if(0===n){this.s=1/n<0?-1:1,this.e=0,this.d=[0];return}if(n<0?(n=-n,this.s=-1):this.s=1,n===~~n&&n<1e7){for(e=0,t=n;t>=10;t/=10)e++;l?e>o.maxE?(this.e=NaN,this.d=null):e<o.minE?(this.e=0,this.d=[0]):(this.e=e,this.d=[n]):(this.e=e,this.d=[n]);return}if(0*n!=0){n||(this.s=NaN),this.e=NaN,this.d=null;return}return V(this,n.toString())}if("string"!==i)throw Error(p+n);return 45===(t=n.charCodeAt(0))?(n=n.slice(1),this.s=-1):(43===t&&(n=n.slice(1)),this.s=1),y.test(n)?V(this,n):function(n,e){var t,i,r,o,u,c,h,f,a;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),y.test(e))return V(n,e)}else if("Infinity"===e||"NaN"===e)return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(b.test(e))t=16,e=e.toLowerCase();else if(x.test(e))t=2;else if(E.test(e))t=8;else throw Error(p+e);for((o=e.search(/p/i))>0?(h=+e.slice(o+1),e=e.substring(2,o)):e=e.slice(2),u=(o=e.indexOf("."))>=0,i=n.constructor,u&&(o=(c=(e=e.replace(".","")).length)-o,r=L(i,new i(t),o,2*o)),o=a=(f=A(e,t,1e7)).length-1;0===f[o];--o)f.pop();return o<0?new i(0*n.s):(n.e=D(f,a),n.d=f,l=!1,u&&(n=R(n,r,4*c)),h&&(n=n.times(54>Math.abs(h)?N(2,h):s.pow(2,h))),l=!0,n)}(this,n)}if(o.prototype=Z,o.ROUND_UP=0,o.ROUND_DOWN=1,o.ROUND_CEIL=2,o.ROUND_FLOOR=3,o.ROUND_HALF_UP=4,o.ROUND_HALF_DOWN=5,o.ROUND_HALF_EVEN=6,o.ROUND_HALF_CEIL=7,o.ROUND_HALF_FLOOR=8,o.EUCLID=9,o.config=o.set=nh,o.clone=n,o.isDecimal=nm,o.abs=Q,o.acos=X,o.acosh=Y,o.add=nn,o.asin=ne,o.asinh=nt,o.atan=ni,o.atanh=nr,o.atan2=ns,o.cbrt=no,o.ceil=nu,o.clamp=nc,o.cos=nf,o.cosh=na,o.div=nl,o.exp=nd,o.floor=np,o.hypot=ng,o.ln=nw,o.log=nv,o.log10=nx,o.log2=nN,o.max=nb,o.min=nE,o.mod=ny,o.mul=nM,o.pow=nO,o.random=nZ,o.round=nq,o.sign=nC,o.sin=nF,o.sinh=nA,o.sqrt=nR,o.sub=nk,o.sum=nS,o.tan=nD,o.tanh=nP,o.trunc=n_,void 0===e&&(e={}),e&&!0!==e.defaults)for(t=0,r=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"];t<r.length;)e.hasOwnProperty(i=r[t++])||(e[i]=this[i]);return o.config(e),o}(a)).prototype.constructor=s,s.default=s.Decimal=s,h=new s(h),f=new s(f),void 0!==(i=(function(){return s}).call(e,t,e,n))&&(n.exports=i)}(0)},67525:function(n,e,t){"use strict";t.d(e,{Z:function(){return y}});var i=t(94184),r=t.n(i),s=t(67294),o=t(76792),u=t(66611),c=t(39602),h=t(85893);let f=s.forwardRef(({bsPrefix:n,className:e,variant:t,as:i="img",...s},u)=>{let c=(0,o.vE)(n,"card-img");return(0,h.jsx)(i,{ref:u,className:r()(t?`${c}-${t}`:c,e),...s})});f.displayName="CardImg";let a=s.createContext(null);a.displayName="CardHeaderContext";let l=s.forwardRef(({bsPrefix:n,className:e,as:t="div",...i},u)=>{let c=(0,o.vE)(n,"card-header"),f=(0,s.useMemo)(()=>({cardHeaderBsPrefix:c}),[c]);return(0,h.jsx)(a.Provider,{value:f,children:(0,h.jsx)(t,{ref:u,...i,className:r()(e,c)})})});l.displayName="CardHeader";let d=(0,c.Z)("h5"),p=(0,c.Z)("h6"),g=(0,u.Z)("card-body"),m=(0,u.Z)("card-title",{Component:d}),w=(0,u.Z)("card-subtitle",{Component:p}),v=(0,u.Z)("card-link",{Component:"a"}),N=(0,u.Z)("card-text",{Component:"p"}),x=(0,u.Z)("card-footer"),b=(0,u.Z)("card-img-overlay"),E=s.forwardRef(({bsPrefix:n,className:e,bg:t,text:i,border:s,body:u=!1,children:c,as:f="div",...a},l)=>{let d=(0,o.vE)(n,"card");return(0,h.jsx)(f,{ref:l,...a,className:r()(e,d,t&&`bg-${t}`,i&&`text-${i}`,s&&`border-${s}`),children:u?(0,h.jsx)(g,{children:c}):c})});E.displayName="Card";var y=Object.assign(E,{Img:f,Title:m,Subtitle:w,Body:g,Link:v,Text:N,Header:l,Footer:x,ImgOverlay:b})},76792:function(n,e,t){"use strict";t.d(e,{pi:function(){return c},vE:function(){return u},zG:function(){return h}});var i=t(67294);t(85893);let r=i.createContext({prefixes:{},breakpoints:["xxl","xl","lg","md","sm","xs"],minBreakpoint:"xs"}),{Consumer:s,Provider:o}=r;function u(n,e){let{prefixes:t}=(0,i.useContext)(r);return n||t[e]||e}function c(){let{breakpoints:n}=(0,i.useContext)(r);return n}function h(){let{minBreakpoint:n}=(0,i.useContext)(r);return n}},66611:function(n,e,t){"use strict";t.d(e,{Z:function(){return f}});var i=t(94184),r=t.n(i),s=/-(.)/g,o=t(67294),u=t(76792),c=t(85893);let h=n=>n[0].toUpperCase()+n.replace(s,function(n,e){return e.toUpperCase()}).slice(1);function f(n,{displayName:e=h(n),Component:t,defaultProps:i}={}){let s=o.forwardRef(({className:e,bsPrefix:s,as:o=t||"div",...h},f)=>{let a={...i,...h},l=(0,u.vE)(s,n);return(0,c.jsx)(o,{ref:f,className:r()(e,l),...a})});return s.displayName=e,s}},39602:function(n,e,t){"use strict";var i=t(67294),r=t(94184),s=t.n(r),o=t(85893);e.Z=n=>i.forwardRef((e,t)=>(0,o.jsx)("div",{...e,ref:t,className:s()(e.className,n)}))}}]);