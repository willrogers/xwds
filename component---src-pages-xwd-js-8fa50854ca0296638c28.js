(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{CtJk:function(e,t,n){n("Sc3u")("Uint8",1,(function(e){return function(t,n,r){return e(this,t,n,r)}}))},HXzo:function(e,t,n){"use strict";n("EU/P")("trim",(function(e){return function(){return e(this,3)}}))},Jegl:function(e,t,n){for(var r,o=n("emib"),i=n("8wc8"),s=n("UEZ0"),l=s("typed_array"),u=s("view"),c=!(!o.ArrayBuffer||!o.DataView),a=c,f=0,h="Int8Array,Uint8Array,Uint8ClampedArray,Int16Array,Uint16Array,Int32Array,Uint32Array,Float32Array,Float64Array".split(",");f<9;)(r=o[h[f++]])?(i(r.prototype,l,!0),i(r.prototype,u,!0)):a=!1;e.exports={ABV:c,CONSTR:a,TYPED:l,VIEW:u}},"PZd/":function(e,t,n){var r=n("P8UN"),o=n("ys0W")(!0);r(r.S,"Object",{entries:function(e){return o(e)}})},Sc3u:function(e,t,n){"use strict";if(n("QPJK")){var r=n("939K"),o=n("emib"),i=n("96qb"),s=n("P8UN"),l=n("Jegl"),u=n("voZr"),c=n("ot9L"),a=n("xa9o"),f=n("pSXQ"),h=n("8wc8"),d=n("rj/q"),y=n("1Llc"),p=n("kiRH"),v=n("gx6d"),g=n("dTG6"),b=n("kxs/"),w=n("qDzq"),m=n("aHWV"),x=n("BjK0"),E=n("DFzH"),C=n("BuzY"),A=n("nsRs"),S=n("ltAs"),O=n("chL8").f,_=n("U9/z"),k=n("UEZ0"),B=n("sOol"),T=n("Wadk"),j=n("Ar2q"),D=n("Ioy3"),U=n("Dq+y"),P=n("m+kh"),I=n("vUMq"),R=n("to/b"),F=n("Y++M"),L=n("cRJv"),q=n("rjfK"),N=n("Drra"),H=q.f,M=N.f,W=o.RangeError,J=o.TypeError,V=o.Uint8Array,z=Array.prototype,G=u.ArrayBuffer,K=u.DataView,Y=T(0),X=T(2),Z=T(3),Q=T(4),$=T(5),ee=T(6),te=j(!0),ne=j(!1),re=U.values,oe=U.keys,ie=U.entries,se=z.lastIndexOf,le=z.reduce,ue=z.reduceRight,ce=z.join,ae=z.sort,fe=z.slice,he=z.toString,de=z.toLocaleString,ye=B("iterator"),pe=B("toStringTag"),ve=k("typed_constructor"),ge=k("def_constructor"),be=l.CONSTR,we=l.TYPED,me=l.VIEW,xe=T(1,(function(e,t){return Oe(D(e,e[ge]),t)})),Ee=i((function(){return 1===new V(new Uint16Array([1]).buffer)[0]})),Ce=!!V&&!!V.prototype.set&&i((function(){new V(1).set({})})),Ae=function(e,t){var n=y(e);if(n<0||n%t)throw W("Wrong offset!");return n},Se=function(e){if(x(e)&&we in e)return e;throw J(e+" is not a typed array!")},Oe=function(e,t){if(!x(e)||!(ve in e))throw J("It is not a typed array constructor!");return new e(t)},_e=function(e,t){return ke(D(e,e[ge]),t)},ke=function(e,t){for(var n=0,r=t.length,o=Oe(e,r);r>n;)o[n]=t[n++];return o},Be=function(e,t,n){H(e,t,{get:function(){return this._d[n]}})},Te=function(e){var t,n,r,o,i,s,l=E(e),u=arguments.length,a=u>1?arguments[1]:void 0,f=void 0!==a,h=_(l);if(null!=h&&!C(h)){for(s=h.call(l),r=[],t=0;!(i=s.next()).done;t++)r.push(i.value);l=r}for(f&&u>2&&(a=c(a,arguments[2],2)),t=0,n=p(l.length),o=Oe(this,n);n>t;t++)o[t]=f?a(l[t],t):l[t];return o},je=function(){for(var e=0,t=arguments.length,n=Oe(this,t);t>e;)n[e]=arguments[e++];return n},De=!!V&&i((function(){de.call(new V(1))})),Ue=function(){return de.apply(De?fe.call(Se(this)):Se(this),arguments)},Pe={copyWithin:function(e,t){return L.call(Se(this),e,t,arguments.length>2?arguments[2]:void 0)},every:function(e){return Q(Se(this),e,arguments.length>1?arguments[1]:void 0)},fill:function(e){return F.apply(Se(this),arguments)},filter:function(e){return _e(this,X(Se(this),e,arguments.length>1?arguments[1]:void 0))},find:function(e){return $(Se(this),e,arguments.length>1?arguments[1]:void 0)},findIndex:function(e){return ee(Se(this),e,arguments.length>1?arguments[1]:void 0)},forEach:function(e){Y(Se(this),e,arguments.length>1?arguments[1]:void 0)},indexOf:function(e){return ne(Se(this),e,arguments.length>1?arguments[1]:void 0)},includes:function(e){return te(Se(this),e,arguments.length>1?arguments[1]:void 0)},join:function(e){return ce.apply(Se(this),arguments)},lastIndexOf:function(e){return se.apply(Se(this),arguments)},map:function(e){return xe(Se(this),e,arguments.length>1?arguments[1]:void 0)},reduce:function(e){return le.apply(Se(this),arguments)},reduceRight:function(e){return ue.apply(Se(this),arguments)},reverse:function(){for(var e,t=Se(this).length,n=Math.floor(t/2),r=0;r<n;)e=this[r],this[r++]=this[--t],this[t]=e;return this},some:function(e){return Z(Se(this),e,arguments.length>1?arguments[1]:void 0)},sort:function(e){return ae.call(Se(this),e)},subarray:function(e,t){var n=Se(this),r=n.length,o=g(e,r);return new(D(n,n[ge]))(n.buffer,n.byteOffset+o*n.BYTES_PER_ELEMENT,p((void 0===t?r:g(t,r))-o))}},Ie=function(e,t){return _e(this,fe.call(Se(this),e,t))},Re=function(e){Se(this);var t=Ae(arguments[1],1),n=this.length,r=E(e),o=p(r.length),i=0;if(o+t>n)throw W("Wrong length!");for(;i<o;)this[t+i]=r[i++]},Fe={entries:function(){return ie.call(Se(this))},keys:function(){return oe.call(Se(this))},values:function(){return re.call(Se(this))}},Le=function(e,t){return x(e)&&e[we]&&"symbol"!=typeof t&&t in e&&String(+t)==String(t)},qe=function(e,t){return Le(e,t=b(t,!0))?f(2,e[t]):M(e,t)},Ne=function(e,t,n){return!(Le(e,t=b(t,!0))&&x(n)&&w(n,"value"))||w(n,"get")||w(n,"set")||n.configurable||w(n,"writable")&&!n.writable||w(n,"enumerable")&&!n.enumerable?H(e,t,n):(e[t]=n.value,e)};be||(N.f=qe,q.f=Ne),s(s.S+s.F*!be,"Object",{getOwnPropertyDescriptor:qe,defineProperty:Ne}),i((function(){he.call({})}))&&(he=de=function(){return ce.call(this)});var He=d({},Pe);d(He,Fe),h(He,ye,Fe.values),d(He,{slice:Ie,set:Re,constructor:function(){},toString:he,toLocaleString:Ue}),Be(He,"buffer","b"),Be(He,"byteOffset","o"),Be(He,"byteLength","l"),Be(He,"length","e"),H(He,pe,{get:function(){return this[we]}}),e.exports=function(e,t,n,u){var c=e+((u=!!u)?"Clamped":"")+"Array",f="get"+e,d="set"+e,y=o[c],g=y||{},b=y&&S(y),w=!y||!l.ABV,E={},C=y&&y.prototype,_=function(e,n){H(e,n,{get:function(){return function(e,n){var r=e._d;return r.v[f](n*t+r.o,Ee)}(this,n)},set:function(e){return function(e,n,r){var o=e._d;u&&(r=(r=Math.round(r))<0?0:r>255?255:255&r),o.v[d](n*t+o.o,r,Ee)}(this,n,e)},enumerable:!0})};w?(y=n((function(e,n,r,o){a(e,y,c,"_d");var i,s,l,u,f=0,d=0;if(x(n)){if(!(n instanceof G||"ArrayBuffer"==(u=m(n))||"SharedArrayBuffer"==u))return we in n?ke(y,n):Te.call(y,n);i=n,d=Ae(r,t);var g=n.byteLength;if(void 0===o){if(g%t)throw W("Wrong length!");if((s=g-d)<0)throw W("Wrong length!")}else if((s=p(o)*t)+d>g)throw W("Wrong length!");l=s/t}else l=v(n),i=new G(s=l*t);for(h(e,"_d",{b:i,o:d,l:s,e:l,v:new K(i)});f<l;)_(e,f++)})),C=y.prototype=A(He),h(C,"constructor",y)):i((function(){y(1)}))&&i((function(){new y(-1)}))&&I((function(e){new y,new y(null),new y(1.5),new y(e)}),!0)||(y=n((function(e,n,r,o){var i;return a(e,y,c),x(n)?n instanceof G||"ArrayBuffer"==(i=m(n))||"SharedArrayBuffer"==i?void 0!==o?new g(n,Ae(r,t),o):void 0!==r?new g(n,Ae(r,t)):new g(n):we in n?ke(y,n):Te.call(y,n):new g(v(n))})),Y(b!==Function.prototype?O(g).concat(O(b)):O(g),(function(e){e in y||h(y,e,g[e])})),y.prototype=C,r||(C.constructor=y));var k=C[ye],B=!!k&&("values"==k.name||null==k.name),T=Fe.values;h(y,ve,!0),h(C,we,c),h(C,me,!0),h(C,ge,y),(u?new y(1)[pe]==c:pe in C)||H(C,pe,{get:function(){return c}}),E[c]=y,s(s.G+s.W+s.F*(y!=g),E),s(s.S,c,{BYTES_PER_ELEMENT:t}),s(s.S+s.F*i((function(){g.of.call(y,1)})),c,{from:Te,of:je}),"BYTES_PER_ELEMENT"in C||h(C,"BYTES_PER_ELEMENT",t),s(s.P,c,Pe),R(c),s(s.P+s.F*Ce,c,{set:Re}),s(s.P+s.F*!B,c,Fe),r||C.toString==he||(C.toString=he),s(s.P+s.F*i((function(){new y(1).slice()})),c,{slice:Ie}),s(s.P+s.F*(i((function(){return[1,2].toLocaleString()!=new y([1,2]).toLocaleString()}))||!i((function(){C.toLocaleString.call([1,2])}))),c,{toLocaleString:Ue}),P[c]=B?k:T,r||B||h(C,ye,T)}}else e.exports=function(){}},XWHH:function(e,t,n){n("pS08"),n("pJf4"),n("sC2a"),n("HXzo"),n("HQhv"),n("CtJk"),n("6kNP"),n("rzGZ"),n("Dq+y"),n("MIFh"),n("JHok"),n("AqHK"),n("q8oJ"),n("C9fy"),n("8npG"),n("sc67"),n("t+I+"),n("m210"),n("4DPX");var r=function(e){function t(){this.fetch=!1,this.DOMException=e.DOMException}return t.prototype=e,new t}("undefined"!=typeof self?self:this);!function(e){!function(t){var n="URLSearchParams"in e,r="Symbol"in e&&"iterator"in Symbol,o="FileReader"in e&&"Blob"in e&&function(){try{return new Blob,!0}catch(e){return!1}}(),i="FormData"in e,s="ArrayBuffer"in e;if(s)var l=["[object Int8Array]","[object Uint8Array]","[object Uint8ClampedArray]","[object Int16Array]","[object Uint16Array]","[object Int32Array]","[object Uint32Array]","[object Float32Array]","[object Float64Array]"],u=ArrayBuffer.isView||function(e){return e&&l.indexOf(Object.prototype.toString.call(e))>-1};function c(e){if("string"!=typeof e&&(e=String(e)),/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(e))throw new TypeError("Invalid character in header field name");return e.toLowerCase()}function a(e){return"string"!=typeof e&&(e=String(e)),e}function f(e){var t={next:function(){var t=e.shift();return{done:void 0===t,value:t}}};return r&&(t[Symbol.iterator]=function(){return t}),t}function h(e){this.map={},e instanceof h?e.forEach((function(e,t){this.append(t,e)}),this):Array.isArray(e)?e.forEach((function(e){this.append(e[0],e[1])}),this):e&&Object.getOwnPropertyNames(e).forEach((function(t){this.append(t,e[t])}),this)}function d(e){if(e.bodyUsed)return Promise.reject(new TypeError("Already read"));e.bodyUsed=!0}function y(e){return new Promise((function(t,n){e.onload=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function p(e){var t=new FileReader,n=y(t);return t.readAsArrayBuffer(e),n}function v(e){if(e.slice)return e.slice(0);var t=new Uint8Array(e.byteLength);return t.set(new Uint8Array(e)),t.buffer}function g(){return this.bodyUsed=!1,this._initBody=function(e){var t;this._bodyInit=e,e?"string"==typeof e?this._bodyText=e:o&&Blob.prototype.isPrototypeOf(e)?this._bodyBlob=e:i&&FormData.prototype.isPrototypeOf(e)?this._bodyFormData=e:n&&URLSearchParams.prototype.isPrototypeOf(e)?this._bodyText=e.toString():s&&o&&((t=e)&&DataView.prototype.isPrototypeOf(t))?(this._bodyArrayBuffer=v(e.buffer),this._bodyInit=new Blob([this._bodyArrayBuffer])):s&&(ArrayBuffer.prototype.isPrototypeOf(e)||u(e))?this._bodyArrayBuffer=v(e):this._bodyText=e=Object.prototype.toString.call(e):this._bodyText="",this.headers.get("content-type")||("string"==typeof e?this.headers.set("content-type","text/plain;charset=UTF-8"):this._bodyBlob&&this._bodyBlob.type?this.headers.set("content-type",this._bodyBlob.type):n&&URLSearchParams.prototype.isPrototypeOf(e)&&this.headers.set("content-type","application/x-www-form-urlencoded;charset=UTF-8"))},o&&(this.blob=function(){var e=d(this);if(e)return e;if(this._bodyBlob)return Promise.resolve(this._bodyBlob);if(this._bodyArrayBuffer)return Promise.resolve(new Blob([this._bodyArrayBuffer]));if(this._bodyFormData)throw new Error("could not read FormData body as blob");return Promise.resolve(new Blob([this._bodyText]))},this.arrayBuffer=function(){return this._bodyArrayBuffer?d(this)||Promise.resolve(this._bodyArrayBuffer):this.blob().then(p)}),this.text=function(){var e,t,n,r=d(this);if(r)return r;if(this._bodyBlob)return e=this._bodyBlob,t=new FileReader,n=y(t),t.readAsText(e),n;if(this._bodyArrayBuffer)return Promise.resolve(function(e){for(var t=new Uint8Array(e),n=new Array(t.length),r=0;r<t.length;r++)n[r]=String.fromCharCode(t[r]);return n.join("")}(this._bodyArrayBuffer));if(this._bodyFormData)throw new Error("could not read FormData body as text");return Promise.resolve(this._bodyText)},i&&(this.formData=function(){return this.text().then(m)}),this.json=function(){return this.text().then(JSON.parse)},this}h.prototype.append=function(e,t){e=c(e),t=a(t);var n=this.map[e];this.map[e]=n?n+", "+t:t},h.prototype.delete=function(e){delete this.map[c(e)]},h.prototype.get=function(e){return e=c(e),this.has(e)?this.map[e]:null},h.prototype.has=function(e){return this.map.hasOwnProperty(c(e))},h.prototype.set=function(e,t){this.map[c(e)]=a(t)},h.prototype.forEach=function(e,t){for(var n in this.map)this.map.hasOwnProperty(n)&&e.call(t,this.map[n],n,this)},h.prototype.keys=function(){var e=[];return this.forEach((function(t,n){e.push(n)})),f(e)},h.prototype.values=function(){var e=[];return this.forEach((function(t){e.push(t)})),f(e)},h.prototype.entries=function(){var e=[];return this.forEach((function(t,n){e.push([n,t])})),f(e)},r&&(h.prototype[Symbol.iterator]=h.prototype.entries);var b=["DELETE","GET","HEAD","OPTIONS","POST","PUT"];function w(e,t){var n,r,o=(t=t||{}).body;if(e instanceof w){if(e.bodyUsed)throw new TypeError("Already read");this.url=e.url,this.credentials=e.credentials,t.headers||(this.headers=new h(e.headers)),this.method=e.method,this.mode=e.mode,this.signal=e.signal,o||null==e._bodyInit||(o=e._bodyInit,e.bodyUsed=!0)}else this.url=String(e);if(this.credentials=t.credentials||this.credentials||"same-origin",!t.headers&&this.headers||(this.headers=new h(t.headers)),this.method=(n=t.method||this.method||"GET",r=n.toUpperCase(),b.indexOf(r)>-1?r:n),this.mode=t.mode||this.mode||null,this.signal=t.signal||this.signal,this.referrer=null,("GET"===this.method||"HEAD"===this.method)&&o)throw new TypeError("Body not allowed for GET or HEAD requests");this._initBody(o)}function m(e){var t=new FormData;return e.trim().split("&").forEach((function(e){if(e){var n=e.split("="),r=n.shift().replace(/\+/g," "),o=n.join("=").replace(/\+/g," ");t.append(decodeURIComponent(r),decodeURIComponent(o))}})),t}function x(e,t){t||(t={}),this.type="default",this.status=void 0===t.status?200:t.status,this.ok=this.status>=200&&this.status<300,this.statusText="statusText"in t?t.statusText:"OK",this.headers=new h(t.headers),this.url=t.url||"",this._initBody(e)}w.prototype.clone=function(){return new w(this,{body:this._bodyInit})},g.call(w.prototype),g.call(x.prototype),x.prototype.clone=function(){return new x(this._bodyInit,{status:this.status,statusText:this.statusText,headers:new h(this.headers),url:this.url})},x.error=function(){var e=new x(null,{status:0,statusText:""});return e.type="error",e};var E=[301,302,303,307,308];x.redirect=function(e,t){if(-1===E.indexOf(t))throw new RangeError("Invalid status code");return new x(null,{status:t,headers:{location:e}})},t.DOMException=e.DOMException;try{new t.DOMException}catch(A){t.DOMException=function(e,t){this.message=e,this.name=t;var n=Error(e);this.stack=n.stack},t.DOMException.prototype=Object.create(Error.prototype),t.DOMException.prototype.constructor=t.DOMException}function C(e,n){return new Promise((function(r,i){var s=new w(e,n);if(s.signal&&s.signal.aborted)return i(new t.DOMException("Aborted","AbortError"));var l=new XMLHttpRequest;function u(){l.abort()}l.onload=function(){var e,t,n={status:l.status,statusText:l.statusText,headers:(e=l.getAllResponseHeaders()||"",t=new h,e.replace(/\r?\n[\t ]+/g," ").split(/\r?\n/).forEach((function(e){var n=e.split(":"),r=n.shift().trim();if(r){var o=n.join(":").trim();t.append(r,o)}})),t)};n.url="responseURL"in l?l.responseURL:n.headers.get("X-Request-URL");var o="response"in l?l.response:l.responseText;r(new x(o,n))},l.onerror=function(){i(new TypeError("Network request failed"))},l.ontimeout=function(){i(new TypeError("Network request failed"))},l.onabort=function(){i(new t.DOMException("Aborted","AbortError"))},l.open(s.method,s.url,!0),"include"===s.credentials?l.withCredentials=!0:"omit"===s.credentials&&(l.withCredentials=!1),"responseType"in l&&o&&(l.responseType="blob"),s.headers.forEach((function(e,t){l.setRequestHeader(t,e)})),s.signal&&(s.signal.addEventListener("abort",u),l.onreadystatechange=function(){4===l.readyState&&s.signal.removeEventListener("abort",u)}),l.send(void 0===s._bodyInit?null:s._bodyInit)}))}C.polyfill=!0,e.fetch||(e.fetch=C,e.Headers=h,e.Request=w,e.Response=x),t.Headers=h,t.Request=w,t.Response=x,t.fetch=C}({})}(r),delete r.fetch.polyfill,(t=r.fetch).default=r.fetch,t.fetch=r.fetch,t.Headers=r.Headers,t.Request=r.Request,t.Response=r.Response,e.exports=t},"Y++M":function(e,t,n){"use strict";var r=n("DFzH"),o=n("dTG6"),i=n("kiRH");e.exports=function(e){for(var t=r(this),n=i(t.length),s=arguments.length,l=o(s>1?arguments[1]:void 0,n),u=s>2?arguments[2]:void 0,c=void 0===u?n:o(u,n);c>l;)t[l++]=e;return t}},cRJv:function(e,t,n){"use strict";var r=n("DFzH"),o=n("dTG6"),i=n("kiRH");e.exports=[].copyWithin||function(e,t){var n=r(this),s=i(n.length),l=o(e,s),u=o(t,s),c=arguments.length>2?arguments[2]:void 0,a=Math.min((void 0===c?s:o(c,s))-u,s-l),f=1;for(u<l&&l<u+a&&(f=-1,u+=a-1,l+=a-1);a-- >0;)u in n?n[l]=n[u]:delete n[l],l+=f,u+=f;return n}},cxuS:function(e,t,n){var r=n("P8UN"),o=n("ys0W")(!1);r(r.S,"Object",{values:function(e){return o(e)}})},gx6d:function(e,t,n){var r=n("1Llc"),o=n("kiRH");e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=o(t);if(t!==n)throw RangeError("Wrong length!");return n}},"t+I+":function(e,t,n){var r=n("P8UN");r(r.G+r.W+r.F*!n("Jegl").ABV,{DataView:n("voZr").DataView})},v0Fs:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),i=n("XWHH"),s=n.n(i),l=n("Bl7J"),u=n("vrFN"),c=(n("m210"),n("4DPX"),n("YbXK"),n("cFtU"),n("pJf4"),n("q8oJ"),n("cxuS"),n("rzGZ"),n("Dq+y"),n("8npG"),n("PZd/"),n("Ll4R"),"ac"),a="dn",f={ac:"Across",dn:"Down"},h=function(){function e(e,t){this.x=e,this.y=t}var t=e.prototype;return t.equals=function(e){return null!==e&&this.x===e.x&&this.y===e.y},t.nextCell=function(t,n){void 0===n&&(n=!0);var r=n?1:-1;return t===c?new e(this.x+r,this.y):new e(this.x,this.y+r)},e}(),d=function(){function e(e,t,n,r){this.x=e,this.y=t,this.length=n,this.direction=r}return e.prototype.equals=function(e){return null!==e&&this.x===e.x&&this.y===e.y&&this.length===e.length&&this.direction===e.direction},e}(),y=function(){function e(e,t,n,r,o){this.num=e,this.direction=t,this.clue=n,this.letters=r,this.releaseDate=o}return e.prototype.equals=function(e){return null!==e&&this.num===e.num&&this.direction===e.direction},e}();function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=r.x,i=r.y;if(o===t.x&&i===t.y)return!0}return!1}function v(e,t){if(e.direction===c)for(var n=e.x;n<e.x+e.length;n++)if(t.x===n&&t.y===e.y)return!0;if(e.direction===a)for(n=e.y;n<e.y+e.length;n++)if(t.x==e.x&&t.y==n)return!0;return!1}function g(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=function(e,t){if(!e)return;if("string"==typeof e)return b(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return b(e,t)}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0;return function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(n=e[Symbol.iterator]()).next.bind(n)}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function w(e){return o.a.createElement("div",{style:{position:"absolute",width:e.h+1+"px",height:e.v+1+"px",top:e.y+"px",left:e.x+"px"},className:"black-cell"})}function m(e){var t=Object(r.useState)(""),n=t[0],i=t[1],s=e.selected?"cyan":e.highlight?"lightblue":"lightgray";return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{style:{position:"absolute",width:e.h-1+"px",height:e.v-1+"px",top:e.y+"px",left:e.x+"px",backgroundColor:s},ref:function(t){return t&&e.selected&&t.focus()},onClick:e.onClick,className:"white-cell",type:"text",onKeyUp:function(t){console.log("pressed "+t.key),t.key.match(/^[a-z]$/i)?(i(t.key),e.selectNextCell()):"Backspace"===t.key?(i(""),e.selectNextCell(!1)):"Delete"===t.key?i(""):"Tab"===t.key?e.selectNextClue():"ArrowUp"===t.key?e.moveCell("up"):"ArrowDown"===t.key?e.moveCell("down"):"ArrowLeft"===t.key?e.moveCell("left"):"ArrowRight"===t.key&&e.moveCell("right")},value:n}),o.a.createElement("div",{className:"clue-number",style:{position:"absolute",width:e.h-1+"px",height:e.v-1+"px",top:e.y+"px",left:e.x+2+"px"}},e.number))}function x(e){var t="No clue selected.";if(null!==e.clue){var n=e.clue;t=n.num+" "+n.direction+". "+n.clue}return o.a.createElement(o.a.Fragment,null,t)}function E(e){var t=Object(r.useState)(null),n=t[0],i=t[1],s=Object(r.useState)(null),l=s[0],u=s[1],f=Object(r.useState)(null),v=f[0],g=f[1];console.log("selected clue then clueSeq"),console.log(l),console.log(n);var b=function(e,t,n){for(var r=[],o=[],i=0;i<e;i++)for(var s=0;s<t;s++){for(var l=!1,u=0;u<n.length;u++){var c=n[u];c.x===i&&c.y===s&&(l=!0)}l||o.push(new h(i,s)),r.push([i,s,l])}return[o,r]}(e.v,e.h,e.blackCells),w=b[0],m=b[1],E=function(e,t,n){for(var r=[],o=[],i=1,s=0;s<t;s++)for(var l=0;l<e;l++){var u=0,f=0;if(p(n,new h(l,s))){if(0===l||!p(n,new h(l-1,s))){u=1;for(var y=l+1;y<e&&p(n,new h(y,s));y++)u+=1;u>1&&(r[i]=new d(l,s,u,c))}if(0===s||!p(n,new h(l,s-1))){f=1;for(var v=s+1;v<t&&p(n,new h(l,v));v++)f+=1;f>1&&(o[i]=new d(l,s,f,a))}(u>1||f>1)&&(i+=1)}}return{ac:r,dn:o}}(e.h,e.v,w);if(null!=n)for(var S=0,O=Object.entries(E[n.direction]);S<O.length;S++){var _=O[S],k=_[0],B=_[1],T=e.clues[B.direction][k],j=T[0],D=T[1],U=T[2],P=new y(k,B.direction,j,D,U);B.equals(n)&&!P.equals(l)&&u(P)}function I(e,t){console.log("crossword onClick() "+t+" "+e);var n=E[t][e];i(n),g(new h(n.x,n.y))}return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,"A crossword"),o.a.createElement("p",null,"First crossword."),o.a.createElement(x,{clue:l}),o.a.createElement("div",{id:"xwd-container"},o.a.createElement(C,{blackCells:e.blackCells,whiteCells:w,cells:m,h:e.h,v:e.h,clues:E,selectedClue:n,setSelectedClue:i,selectedCell:v,setSelectedCell:g})),o.a.createElement(A,{direction:c,clues:e.clues.ac,onClick:I,selectedClue:l}),o.a.createElement(A,{direction:a,clues:e.clues.dn,onClick:I,selectedClue:l}))}function C(e){for(var t={},n=0,r=Object.entries(e.clues.ac);n<r.length;n++){var i=r[n],s=i[0],l=i[1];t[s]=new h(l.x,l.y)}for(var u=0,f=Object.entries(e.clues.dn);u<f.length;u++){var d=f[u],y=d[0],p=d[1];t[y]=new h(p.x,p.y)}function b(t){if(console.log("just clicked"),console.log(t),!(t.x<0||t.x>=e.h||t.y<0||t.y>=e.v||function(t){for(var n=0;n<e.blackCells.length;n++){var r=e.blackCells[n];if(t.x===r.x&&t.y===r.y)return!0}return!1}(t))){e.setSelectedCell(t);for(var n,r=!1,o=g(e.whiteCells);!(n=o()).done;){var i=n.value;t.equals(i)&&(r=!0)}if(r){for(var s=null,l=null,u=0,c=Object.values(e.clues.ac);u<c.length;u++){var a=c[u];if(v(a,t)){if(s=a,e.selectedClue&&!e.selectedClue.equals(s))return console.log("setiting selected clue to"),console.log(s),void e.setSelectedClue(s);break}}for(var f=0,h=Object.values(e.clues.dn);f<h.length;f++){var d=h[f];if(v(d,t))return l=d,console.log("setiting selected clue to"),console.log(l),void e.setSelectedClue(l)}}}}function x(t){void 0===t&&(t=!0);var n=e.selectedCell,r=n.x,o=n.y;e.selectedClue.direction===c&&(t&&r!==e.selectedClue.x+e.selectedClue.length-1?e.setSelectedCell(new h(r+1,o)):t||r===e.selectedClue.x||e.setSelectedCell(new h(r-1,o))),e.selectedClue.direction===a&&(t&&o!==e.selectedClue.y+e.selectedClue.length-1?e.setSelectedCell(new h(r,o+1)):t||o===e.selectedClue.y||e.setSelectedCell(new h(r,o-1)))}function E(t){"up"===t?b(e.selectedCell.nextCell(a,!1)):"down"===t?b(e.selectedCell.nextCell(a,!0)):"left"===t?b(e.selectedCell.nextCell(c,!1)):"right"===t&&b(e.selectedCell.nextCell(c,!0))}function C(){console.log("select next clue"),console.log(e.selectedClue.direction);var t=Object.values(e.clues[e.selectedClue.direction]),n=e.selectedClue.direction===c?a:c,r=Object.values(e.clues[n]);console.log(n);for(var o=0;o<t.length;o++)if(console.log("sel"),console.log(e.selectedClue),console.log("iter"),console.log(t[o]),e.selectedClue.equals(t[o])){var i=void 0;o!==t.length-1?(console.log("setting 1"),i=t[o+1]):(console.log("setting 2"),i=r[0]),e.setSelectedClue(i);var s=new h(i.x,i.y);e.setSelectedCell(s);break}}var A=[];if(null!=e.selectedClue){var S=e.selectedClue,O=S.x,_=S.y,k=S.length,B=S.direction;if(console.log(O),console.log(_),console.log(k),console.log(B),B==c)for(var T=O;T<O+k;T++)A.push(new h(T,_));else for(var j=_;j<_+k;j++)A.push(new h(O,j))}console.log(t),console.log("highlights"),console.log(A);for(var D=0;D<e.cells.length;D++){for(var U=e.cells[D],P=U[0],I=U[1],R=null,F=0,L=Object.entries(t);F<L.length;F++){var q=L[F],N=q[0],H=q[1];H.x===P&&H.y===I&&(R=N)}e.cells[D].push(R);for(var M=!1,W=0;W<A.length;W++)P===A[W].x&&I===A[W].y&&(M=!0);e.cells[D].push(M)}return console.log(e.cells),o.a.createElement("div",{style:{position:"relative",width:30*e.h+"px",height:30*e.v+"px"}},e.cells.map((function(t){var n=t[0],r=t[1],i=t[2],s=t[3],l=t[4];return i?o.a.createElement(w,{h:30,v:30,x:30*n,y:30*r,key:n+e.h*r}):o.a.createElement(m,{h:30,v:30,x:30*n,y:30*r,key:n+e.h*r,number:s,highlight:l,selected:null!==e.selectedCell&&n===e.selectedCell.x&&r===e.selectedCell.y,onClick:function(e){return b(new h(n,r))},selectNextCell:x,selectNextClue:C,moveCell:E})})))}function A(e){var t=null,n=null;return null!==e.selectedClue&&(t=e.selectedClue.num,n=e.selectedClue.direction),o.a.createElement("div",{style:{fontWeight:"bold"}},f[e.direction],Object.entries(e.clues).map((function(r){var i=r[0],s=r[1],l=e.direction===n&&i===t,u=s[0],c=s[1];return o.a.createElement(S,{number:i,clue:u,len:c,onClick:function(){!function(t){e.onClick(t,e.direction)}(i)},selected:l})})))}function S(e){var t="clue";return e.selected&&(t+=" selected"),o.a.createElement("div",{className:t,onClick:e.onClick},e.number,". ",e.clue," (",e.len,")")}t.default=function(){var e=Object(r.useState)([]),t=e[0],n=e[1],i=Object(r.useState)(0),c=i[0],a=i[1],f=Object(r.useState)(0),d=f[0],y=f[1],p=Object(r.useState)({ac:[],dn:[]}),v=p[0],g=p[1];0===t.length&&s()("/xwds/xwd2020.json").then((function(e){return console.log(e),e.json()})).then((function(e){n(e["black-squares"]),a(e["across-size"]),y(e["down-size"]),g(e.clues)})),console.log("props"),console.log(v.ac),console.log(t),console.log(c),console.log(d);var b=t.map((function(e){var t=e[0],n=e[1];return new h(t,n)}));return o.a.createElement(l.a,null,o.a.createElement(u.a,{title:"Crosswords",keywords:["gatsby","application","react"]}),o.a.createElement(E,{blackCells:b,h:c,v:d,clues:v}))}},voZr:function(e,t,n){"use strict";var r=n("emib"),o=n("QPJK"),i=n("939K"),s=n("Jegl"),l=n("8wc8"),u=n("rj/q"),c=n("96qb"),a=n("xa9o"),f=n("1Llc"),h=n("kiRH"),d=n("gx6d"),y=n("chL8").f,p=n("rjfK").f,v=n("Y++M"),g=n("dSuk"),b=r.ArrayBuffer,w=r.DataView,m=r.Math,x=r.RangeError,E=r.Infinity,C=b,A=m.abs,S=m.pow,O=m.floor,_=m.log,k=m.LN2,B=o?"_b":"buffer",T=o?"_l":"byteLength",j=o?"_o":"byteOffset";function D(e,t,n){var r,o,i,s=new Array(n),l=8*n-t-1,u=(1<<l)-1,c=u>>1,a=23===t?S(2,-24)-S(2,-77):0,f=0,h=e<0||0===e&&1/e<0?1:0;for((e=A(e))!=e||e===E?(o=e!=e?1:0,r=u):(r=O(_(e)/k),e*(i=S(2,-r))<1&&(r--,i*=2),(e+=r+c>=1?a/i:a*S(2,1-c))*i>=2&&(r++,i/=2),r+c>=u?(o=0,r=u):r+c>=1?(o=(e*i-1)*S(2,t),r+=c):(o=e*S(2,c-1)*S(2,t),r=0));t>=8;s[f++]=255&o,o/=256,t-=8);for(r=r<<t|o,l+=t;l>0;s[f++]=255&r,r/=256,l-=8);return s[--f]|=128*h,s}function U(e,t,n){var r,o=8*n-t-1,i=(1<<o)-1,s=i>>1,l=o-7,u=n-1,c=e[u--],a=127&c;for(c>>=7;l>0;a=256*a+e[u],u--,l-=8);for(r=a&(1<<-l)-1,a>>=-l,l+=t;l>0;r=256*r+e[u],u--,l-=8);if(0===a)a=1-s;else{if(a===i)return r?NaN:c?-E:E;r+=S(2,t),a-=s}return(c?-1:1)*r*S(2,a-t)}function P(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]}function I(e){return[255&e]}function R(e){return[255&e,e>>8&255]}function F(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]}function L(e){return D(e,52,8)}function q(e){return D(e,23,4)}function N(e,t,n){p(e.prototype,t,{get:function(){return this[n]}})}function H(e,t,n,r){var o=d(+n);if(o+t>e[T])throw x("Wrong index!");var i=e[B]._b,s=o+e[j],l=i.slice(s,s+t);return r?l:l.reverse()}function M(e,t,n,r,o,i){var s=d(+n);if(s+t>e[T])throw x("Wrong index!");for(var l=e[B]._b,u=s+e[j],c=r(+o),a=0;a<t;a++)l[u+a]=c[i?a:t-a-1]}if(s.ABV){if(!c((function(){b(1)}))||!c((function(){new b(-1)}))||c((function(){return new b,new b(1.5),new b(NaN),"ArrayBuffer"!=b.name}))){for(var W,J=(b=function(e){return a(this,b),new C(d(e))}).prototype=C.prototype,V=y(C),z=0;V.length>z;)(W=V[z++])in b||l(b,W,C[W]);i||(J.constructor=b)}var G=new w(new b(2)),K=w.prototype.setInt8;G.setInt8(0,2147483648),G.setInt8(1,2147483649),!G.getInt8(0)&&G.getInt8(1)||u(w.prototype,{setInt8:function(e,t){K.call(this,e,t<<24>>24)},setUint8:function(e,t){K.call(this,e,t<<24>>24)}},!0)}else b=function(e){a(this,b,"ArrayBuffer");var t=d(e);this._b=v.call(new Array(t),0),this[T]=t},w=function(e,t,n){a(this,w,"DataView"),a(e,b,"DataView");var r=e[T],o=f(t);if(o<0||o>r)throw x("Wrong offset!");if(o+(n=void 0===n?r-o:h(n))>r)throw x("Wrong length!");this[B]=e,this[j]=o,this[T]=n},o&&(N(b,"byteLength","_l"),N(w,"buffer","_b"),N(w,"byteLength","_l"),N(w,"byteOffset","_o")),u(w.prototype,{getInt8:function(e){return H(this,1,e)[0]<<24>>24},getUint8:function(e){return H(this,1,e)[0]},getInt16:function(e){var t=H(this,2,e,arguments[1]);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=H(this,2,e,arguments[1]);return t[1]<<8|t[0]},getInt32:function(e){return P(H(this,4,e,arguments[1]))},getUint32:function(e){return P(H(this,4,e,arguments[1]))>>>0},getFloat32:function(e){return U(H(this,4,e,arguments[1]),23,4)},getFloat64:function(e){return U(H(this,8,e,arguments[1]),52,8)},setInt8:function(e,t){M(this,1,e,I,t)},setUint8:function(e,t){M(this,1,e,I,t)},setInt16:function(e,t){M(this,2,e,R,t,arguments[2])},setUint16:function(e,t){M(this,2,e,R,t,arguments[2])},setInt32:function(e,t){M(this,4,e,F,t,arguments[2])},setUint32:function(e,t){M(this,4,e,F,t,arguments[2])},setFloat32:function(e,t){M(this,4,e,q,t,arguments[2])},setFloat64:function(e,t){M(this,8,e,L,t,arguments[2])}});g(b,"ArrayBuffer"),g(w,"DataView"),l(w.prototype,s.VIEW,!0),t.ArrayBuffer=b,t.DataView=w},ys0W:function(e,t,n){var r=n("QPJK"),o=n("2mBY"),i=n("5SQf"),s=n("BnbX").f;e.exports=function(e){return function(t){for(var n,l=i(t),u=o(l),c=u.length,a=0,f=[];c>a;)n=u[a++],r&&!s.call(l,n)||f.push(e?[n,l[n]]:l[n]);return f}}}}]);
//# sourceMappingURL=component---src-pages-xwd-js-8fa50854ca0296638c28.js.map