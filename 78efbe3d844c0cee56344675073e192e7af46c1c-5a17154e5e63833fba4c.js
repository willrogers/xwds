/*! For license information please see 78efbe3d844c0cee56344675073e192e7af46c1c-5a17154e5e63833fba4c.js.LICENSE.txt */
"use strict";(self.webpackChunkxwds=self.webpackChunkxwds||[]).push([[304],{2729:function(e){const t=/[\p{Lu}]/u,r=/[\p{Ll}]/u,n=/^[\p{Lu}](?![\p{Lu}])/gu,o=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),a=new RegExp(s.source+o.source,"gu"),l=new RegExp("\\d+"+o.source,"gu"),c=(e,o)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(o={pascalCase:!1,preserveConsecutiveUppercase:!1,...o},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===o.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(o.locale),c=!1===o.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(o.locale);if(1===e.length)return o.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,n,o)=>{let s=!1,i=!1,a=!1;for(let l=0;l<e.length;l++){const c=e[l];s&&t.test(c)?(e=e.slice(0,l)+"-"+e.slice(l),s=!1,a=i,i=!0,l++):i&&a&&r.test(c)?(e=e.slice(0,l-1)+"-"+e.slice(l-1),a=i,i=!1,s=!0):(s=n(c)===c&&o(c)!==c,a=i,i=o(c)===c&&n(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=o.preserveConsecutiveUppercase?((e,t)=>(n.lastIndex=0,e.replace(n,(e=>t(e)))))(e,s):s(e),o.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(a.lastIndex=0,l.lastIndex=0,e.replace(a,((e,r)=>t(r))).replace(l,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,r){r.d(t,{L:function(){return y},M:function(){return E},P:function(){return v},S:function(){return F},_:function(){return a},a:function(){return i},b:function(){return d},g:function(){return u},h:function(){return l}});var n=r(6540),o=(r(2729),r(5556)),s=r.n(o);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(this,arguments)}function a(e,t){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)t.indexOf(r=s[n])>=0||(o[r]=e[r]);return o}const l=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,r){const n={};let o="gatsby-image-wrapper";return"fixed"===r?(n.width=e,n.height=t):"constrained"===r&&(o="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:o,"data-gatsby-image-wrapper":"",style:n}}function d(e,t,r,n,o){return void 0===o&&(o={}),i({},r,{loading:n,shouldLoad:e,"data-main-image":"",style:i({},o,{opacity:t?1:0})})}function u(e,t,r,n,o,s,a,l){const c={};s&&(c.backgroundColor=s,"fixed"===r?(c.width=n,c.height=o,c.backgroundColor=s,c.position="relative"):("constrained"===r||"fullWidth"===r)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),a&&(c.objectFit=a),l&&(c.objectPosition=l);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return d}const p=["children"],f=function(e){let{layout:t,width:r,height:o}=e;return"fullWidth"===t?n.createElement("div",{"aria-hidden":!0,style:{paddingTop:o/r*100+"%"}}):"constrained"===t?n.createElement("div",{style:{maxWidth:r,display:"block"}},n.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${o}'%20width='${r}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},y=function(e){let{children:t}=e,r=a(e,p);return n.createElement(n.Fragment,null,n.createElement(f,i({},r)),t,null)},m=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],g=function(e){let{src:t,srcSet:r,loading:o,alt:s="",shouldLoad:l}=e,c=a(e,m);return n.createElement("img",i({},c,{decoding:"async",loading:o,src:l?t:void 0,"data-src":l?void 0:t,srcSet:l?r:void 0,"data-srcset":l?void 0:r,alt:s}))},b=function(e){let{fallback:t,sources:r=[],shouldLoad:o=!0}=e,s=a(e,h);const l=s.sizes||(null==t?void 0:t.sizes),c=n.createElement(g,i({},s,t,{sizes:l,shouldLoad:o}));return r.length?n.createElement("picture",null,r.map((e=>{let{media:t,srcSet:r,type:s}=e;return n.createElement("source",{key:`${t}-${s}-${r}`,type:s,media:t,srcSet:o?r:void 0,"data-srcset":o?void 0:r,sizes:l})})),c):c};var w;g.propTypes={src:o.string.isRequired,alt:o.string.isRequired,sizes:o.string,srcSet:o.string,shouldLoad:o.bool},b.displayName="Picture",b.propTypes={alt:o.string.isRequired,shouldLoad:o.bool,fallback:o.exact({src:o.string.isRequired,srcSet:o.string,sizes:o.string}),sources:o.arrayOf(o.oneOfType([o.exact({media:o.string.isRequired,type:o.string,sizes:o.string,srcSet:o.string.isRequired}),o.exact({media:o.string,type:o.string.isRequired,sizes:o.string,srcSet:o.string.isRequired})]))};const k=["fallback"],v=function(e){let{fallback:t}=e,r=a(e,k);return t?n.createElement(b,i({},r,{fallback:{src:t},"aria-hidden":!0,alt:""})):n.createElement("div",i({},r))};v.displayName="Placeholder",v.propTypes={fallback:o.string,sources:null==(w=b.propTypes)?void 0:w.sources,alt:function(e,t,r){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${r}\`. Validation failed.`):null}};const E=function(e){return n.createElement(n.Fragment,null,n.createElement(b,i({},e)),n.createElement("noscript",null,n.createElement(b,i({},e,{shouldLoad:!0}))))};E.displayName="MainImage",E.propTypes=b.propTypes;const x=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],C=["style","className"],S=e=>e.replace(/\n/g,""),P=function(e,t,r){for(var n=arguments.length,o=new Array(n>3?n-3:0),i=3;i<n;i++)o[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,r].concat(o)):new Error(`The "alt" prop is required in ${r}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},O={image:s().object.isRequired,alt:P},$=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],L=["style","className"],N=new Set;let j,T;const _=function(e){let{as:t="div",image:o,style:s,backgroundColor:d,className:u,class:p,onStartLoad:f,onLoad:y,onError:m}=e,h=a(e,$);const{width:g,height:b,layout:w}=o,k=c(g,b,w),{style:v,className:E}=k,x=a(k,L),C=(0,n.useRef)(),S=(0,n.useMemo)((()=>JSON.stringify(o.images)),[o.images]);p&&(u=p);const P=function(e,t,r){let n="";return"fullWidth"===e&&(n=`<div aria-hidden="true" style="padding-top: ${r/t*100}%;"></div>`),"constrained"===e&&(n=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${r}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),n}(w,g,b);return(0,n.useEffect)((()=>{j||(j=r.e(108).then(r.bind(r,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:r}=e;return T=t,{renderImageToString:t,swapPlaceholderImage:r}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&l())return e.complete?(null==f||f({wasCached:!0}),null==y||y({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==f||f({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==y||y({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void N.add(S);if(T&&N.has(S))return;let t,n;return j.then((e=>{let{renderImageToString:r,swapPlaceholderImage:a}=e;C.current&&(C.current.innerHTML=r(i({isLoading:!0,isLoaded:N.has(S),image:o},h)),N.has(S)||(t=requestAnimationFrame((()=>{C.current&&(n=a(C.current,S,N,s,f,y,m))}))))})),()=>{t&&cancelAnimationFrame(t),n&&n()}}),[o]),(0,n.useLayoutEffect)((()=>{N.has(S)&&T&&(C.current.innerHTML=T(i({isLoading:N.has(S),isLoaded:N.has(S),image:o},h)),null==f||f({wasCached:!0}),null==y||y({wasCached:!0}))}),[o]),(0,n.createElement)(t,i({},x,{style:i({},v,s,{backgroundColor:d}),className:`${E}${u?` ${u}`:""}`,ref:C,dangerouslySetInnerHTML:{__html:P},suppressHydrationWarning:!0}))},A=(0,n.memo)((function(e){return e.image?(0,n.createElement)(_,e):null}));A.propTypes=O,A.displayName="GatsbyImage";const D=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function I(e){return function(t){let{src:r,__imageData:o,__error:s}=t,l=a(t,D);return s&&console.warn(s),o?n.createElement(e,i({image:o},l)):(console.warn("Image not loaded",r),null)}}const z=I((function(e){let{as:t="div",className:r,class:o,style:s,image:l,loading:p="lazy",imgClassName:f,imgStyle:m,backgroundColor:h,objectFit:g,objectPosition:b}=e,w=a(e,x);if(!l)return console.warn("[gatsby-plugin-image] Missing image prop"),null;o&&(r=o),m=i({objectFit:g,objectPosition:b,backgroundColor:h},m);const{width:k,height:P,layout:O,images:$,placeholder:L,backgroundColor:N}=l,j=c(k,P,O),{style:T,className:_}=j,A=a(j,C),D={fallback:void 0,sources:[]};return $.fallback&&(D.fallback=i({},$.fallback,{srcSet:$.fallback.srcSet?S($.fallback.srcSet):void 0})),$.sources&&(D.sources=$.sources.map((e=>i({},e,{srcSet:S(e.srcSet)})))),n.createElement(t,i({},A,{style:i({},T,s,{backgroundColor:h}),className:`${_}${r?` ${r}`:""}`}),n.createElement(y,{layout:O,width:k,height:P},n.createElement(v,i({},u(L,!1,O,k,P,N,g,b))),n.createElement(E,i({"data-gatsby-image-ssr":"",className:f},w,d("eager"===p,!1,D,p,m)))))})),M=function(e,t){for(var r=arguments.length,n=new Array(r>2?r-2:0),o=2;o<r;o++)n[o-2]=arguments[o];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(n)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},q=new Set(["fixed","fullWidth","constrained"]),R={src:s().string.isRequired,alt:P,width:M,height:M,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!q.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};z.displayName="StaticImage",z.propTypes=R;const F=I(A);F.displayName="StaticImage",F.propTypes=R},1910:function(e,t,r){r.d(t,{A:function(){return R}});var n=r(6540),o=r(8257);const s="ac",i="dn",a={[s]:"Across",[i]:"Down"};let l=function(){function e(e,t){this.x=e,this.y=t}var t=e.prototype;return t.equals=function(e){return null!==e&&this.x===e.x&&this.y===e.y},t.nextCell=function(t,r){void 0===r&&(r=!0);const n=r?1:-1;return t===s?new e(this.x+n,this.y):new e(this.x,this.y+n)},t.str=function(){return`${this.x},${this.y}`},e}(),c=function(){function e(e,t,r,n){this.x=e,this.y=t,this.length=r,this.direction=n}return e.prototype.equals=function(e){return null!==e&&this.x===e.x&&this.y===e.y&&this.length===e.length&&this.direction===e.direction},e}(),d=function(){function e(e,t,r,n,o){this.num=e,this.direction=t,this.clue=r,this.letters=n,this.releaseDay=o}return e.prototype.equals=function(e){return null!==e&&this.num===e.num&&this.direction===e.direction},e}();function u(e,t){for(var r=0;r<e.length;r++){const{x:n,y:o}=e[r];if(n===t.x&&o===t.y)return!0}return!1}function p(e,t){if(e.direction===s)for(var r=e.x;r<e.x+e.length;r++)if(t.x===r&&t.y===e.y)return!0;if(e.direction===i)for(r=e.y;r<e.y+e.length;r++)if(t.x==e.x&&t.y==r)return!0;return!1}function f(e){return n.createElement("div",{style:{position:"absolute",width:e.h+1+"px",height:e.v+1+"px",top:e.y+"px",left:e.x+"px"},className:"black-cell"})}function y(e){let t=e.selected?"cyan":e.highlight?"lightblue":"white";return n.createElement(n.Fragment,null,n.createElement("div",{style:{position:"absolute",width:e.h-1+"px",height:e.v-1+"px",top:e.y+"px",left:e.x+"px",backgroundColor:t},onClick:e.onClick,className:"white-cell"},e.contents),n.createElement("div",{className:"clue-number",style:{position:"absolute",width:e.h-1+"px",height:e.v-1+"px",top:e.y+"px",left:e.x+2+"px"}},e.number))}function m(e){let t="",r="No clue selected.";if(null!==e.clue){const{num:n,direction:o,clue:s,letters:i,releaseDay:a}=e.clue;t=`${n} ${o}`;r=`${new Date>new Date(e.year,e.month,a)?s:`Released on December ${a}.`} (${i})`}return n.createElement("div",{style:{display:"flex",flexDirection:"row",margin:"15px",fontWeight:"bold",backgroundColor:"lightblue"}},n.createElement("div",{style:{textWrap:"nowrap",fontWeight:"bold",margin:"5px"}},t),n.createElement("div",{style:{fontWeight:"bold",margin:"5px",backgroundColor:"lightblue"}},r))}function h(e){console.log(e.clues),console.log(e.clues[s]),console.log(e.clues[i]);const t={};for(let[n,o]of Object.entries(e.clues[s]))t[n]=new l(o.x,o.y);for(let[n,o]of Object.entries(e.clues[i]))t[n]=new l(o.x,o.y);let r=[];if(null!=e.selectedClue){const{x:t,y:n,length:o,direction:i}=e.selectedClue;if(i==s)for(let e=t;e<t+o;e++)r.push(new l(e,n));else for(let e=n;e<n+o;e++)r.push(new l(t,e))}for(let n=0;n<e.cells.length;n++){const[o,s]=e.cells[n];let i=null;for(let[e,r]of Object.entries(t))r.x===o&&r.y===s&&(i=e);e.cells[n].push(i);let a=!1;for(let e=0;e<r.length;e++)o===r[e].x&&s===r[e].y&&(a=!0);e.cells[n].push(a)}return n.createElement("div",{style:{position:"relative",width:28*e.h+"px",height:28*e.v+"px"}},e.cells.map((t=>{let[r,o,s,i,a]=t;return s?n.createElement(f,{h:28,v:28,x:28*r,y:28*o,key:r+e.h*o}):n.createElement(y,{h:28,v:28,x:28*r,y:28*o,key:r+e.h*o,number:i,contents:e.filledCells[`${r},${o}`],highlight:a,selected:null!==e.selectedCell&&r===e.selectedCell.x&&o===e.selectedCell.y,onClick:()=>e.doHighlight(new l(r,o),!0)})})))}function g(e){let t=null,r=null;return null!==e.selectedClue&&(t=e.selectedClue.num,r=e.selectedClue.direction),n.createElement("div",{style:{fontWeight:"bold",width:"300px",display:"inline-block",verticalAlign:"top",margin:"5px"}},n.createElement("div",{style:{border:"1px solid black",padding:"5px"}},a[e.direction]),Object.entries(e.clues).map((o=>{const[s,i]=o,a=e.direction===r&&s===t,[l,c,d]=i,u=new Date,p=new Date(e.year,e.month,d),f=u.getDay()===d-1,y=u>p?l:`Released on December ${d}.`;return n.createElement(b,{key:s,number:s,clue:y,len:c,onClick:function(){!function(t){e.onClick(t,e.direction)}(s)},selected:a,today:f})})))}function b(e){let t="clue";return e.today&&(t=`${t} today`),e.selected&&(t=`${t} selected`),n.createElement("div",{className:t,onClick:e.onClick},e.number,". ",e.clue," (",e.len.join(","),")")}var w=r(2532);const k=e=>n.createElement("div",{id:"keyboard-button",onClick:e.keyboardPressed},n.createElement(w.S,{alt:"keyboard",src:"../images/keyboard.png",__imageData:r(1860)})),v=e=>n.createElement("div",{onClick:()=>e.keyPressed(e.letter),className:"keyboard-key"},e.letter),E=e=>n.createElement("div",{onClick:()=>e.keyPressed("Backspace"),className:"keyboard-key backspace"},"⌫"),x=e=>n.createElement("div",{id:"keyboard"},n.createElement("div",{className:"keyboard-row"},n.createElement(v,{letter:"q",keyPressed:e.keyPressed}),n.createElement(v,{letter:"w",keyPressed:e.keyPressed}),n.createElement(v,{letter:"e",keyPressed:e.keyPressed}),n.createElement(v,{letter:"r",keyPressed:e.keyPressed}),n.createElement(v,{letter:"t",keyPressed:e.keyPressed}),n.createElement(v,{letter:"y",keyPressed:e.keyPressed}),n.createElement(v,{letter:"u",keyPressed:e.keyPressed}),n.createElement(v,{letter:"i",keyPressed:e.keyPressed}),n.createElement(v,{letter:"o",keyPressed:e.keyPressed}),n.createElement(v,{letter:"p",keyPressed:e.keyPressed})),n.createElement("div",{className:"keyboard-row"},n.createElement(v,{letter:"a",keyPressed:e.keyPressed}),n.createElement(v,{letter:"s",keyPressed:e.keyPressed}),n.createElement(v,{letter:"d",keyPressed:e.keyPressed}),n.createElement(v,{letter:"f",keyPressed:e.keyPressed}),n.createElement(v,{letter:"g",keyPressed:e.keyPressed}),n.createElement(v,{letter:"h",keyPressed:e.keyPressed}),n.createElement(v,{letter:"j",keyPressed:e.keyPressed}),n.createElement(v,{letter:"k",keyPressed:e.keyPressed}),n.createElement(v,{letter:"l",keyPressed:e.keyPressed})),n.createElement("div",{className:"keyboard-row"},n.createElement("div",{className:"keyboard-spacer"}),n.createElement(v,{letter:"z",keyPressed:e.keyPressed}),n.createElement(v,{letter:"x",keyPressed:e.keyPressed}),n.createElement(v,{letter:"c",keyPressed:e.keyPressed}),n.createElement(v,{letter:"v",keyPressed:e.keyPressed}),n.createElement(v,{letter:"b",keyPressed:e.keyPressed}),n.createElement(v,{letter:"n",keyPressed:e.keyPressed}),n.createElement(v,{letter:"m",keyPressed:e.keyPressed}),n.createElement(E,{keyPressed:e.keyPressed})));var C,S={};var P=function(){if(C)return S;C=1,S.parse=function(e,r){if("string"!=typeof e)throw new TypeError("argument str must be a string");var n={},o=e.length;if(o<2)return n;var s=r&&r.decode||l,d=0,u=0,p=0;do{if(-1===(u=e.indexOf("=",d)))break;if(-1===(p=e.indexOf(";",d)))p=o;else if(u>p){d=e.lastIndexOf(";",u-1)+1;continue}var f=i(e,d,u),y=a(e,u,f),m=e.slice(f,y);if(!t.call(n,m)){var h=i(e,u+1,p),g=a(e,p,h);34===e.charCodeAt(h)&&34===e.charCodeAt(g-1)&&(h++,g--);var b=e.slice(h,g);n[m]=c(b,s)}d=p+1}while(d<o);return n},S.serialize=function(t,i,a){var l=a&&a.encode||encodeURIComponent;if("function"!=typeof l)throw new TypeError("option encode is invalid");if(!r.test(t))throw new TypeError("argument name is invalid");var c=l(i);if(!n.test(c))throw new TypeError("argument val is invalid");var d=t+"="+c;if(!a)return d;if(null!=a.maxAge){var u=Math.floor(a.maxAge);if(!isFinite(u))throw new TypeError("option maxAge is invalid");d+="; Max-Age="+u}if(a.domain){if(!o.test(a.domain))throw new TypeError("option domain is invalid");d+="; Domain="+a.domain}if(a.path){if(!s.test(a.path))throw new TypeError("option path is invalid");d+="; Path="+a.path}if(a.expires){var p=a.expires;if(!function(t){return"[object Date]"===e.call(t)}(p)||isNaN(p.valueOf()))throw new TypeError("option expires is invalid");d+="; Expires="+p.toUTCString()}a.httpOnly&&(d+="; HttpOnly");a.secure&&(d+="; Secure");a.partitioned&&(d+="; Partitioned");if(a.priority){switch("string"==typeof a.priority?a.priority.toLowerCase():a.priority){case"low":d+="; Priority=Low";break;case"medium":d+="; Priority=Medium";break;case"high":d+="; Priority=High";break;default:throw new TypeError("option priority is invalid")}}if(a.sameSite){switch("string"==typeof a.sameSite?a.sameSite.toLowerCase():a.sameSite){case!0:d+="; SameSite=Strict";break;case"lax":d+="; SameSite=Lax";break;case"strict":d+="; SameSite=Strict";break;case"none":d+="; SameSite=None";break;default:throw new TypeError("option sameSite is invalid")}}return d};var e=Object.prototype.toString,t=Object.prototype.hasOwnProperty,r=/^[!#$%&'*+\-.^_`|~0-9A-Za-z]+$/,n=/^("?)[\u0021\u0023-\u002B\u002D-\u003A\u003C-\u005B\u005D-\u007E]*\1$/,o=/^([.]?[a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)([.][a-z0-9]([a-z0-9-]{0,61}[a-z0-9])?)*$/i,s=/^[\u0020-\u003A\u003D-\u007E]*$/;function i(e,t,r){do{var n=e.charCodeAt(t);if(32!==n&&9!==n)return t}while(++t<r);return r}function a(e,t,r){for(;t>r;){var n=e.charCodeAt(--t);if(32!==n&&9!==n)return t+1}return r}function l(e){return-1!==e.indexOf("%")?decodeURIComponent(e):e}function c(e,t){try{return t(e)}catch(r){return e}}return S}();function O(e,t={}){const r=function(e){if(e&&"j"===e[0]&&":"===e[1])return e.substr(2);return e}(e);if(!t.doNotParse)try{return JSON.parse(r)}catch(n){}return e}class ${constructor(e,t={}){this.changeListeners=[],this.HAS_DOCUMENT_COOKIE=!1,this.update=()=>{if(!this.HAS_DOCUMENT_COOKIE)return;const e=this.cookies;this.cookies=P.parse(document.cookie),this._checkChanges(e)};const r="undefined"==typeof document?"":document.cookie;this.cookies=function(e){return"string"==typeof e?P.parse(e):"object"==typeof e&&null!==e?e:{}}(e||r),this.defaultSetOptions=t,this.HAS_DOCUMENT_COOKIE=function(){const e="undefined"==typeof global?void 0:global.TEST_HAS_DOCUMENT_COOKIE;return"boolean"==typeof e?e:"object"==typeof document&&"string"==typeof document.cookie}()}_emitChange(e){for(let t=0;t<this.changeListeners.length;++t)this.changeListeners[t](e)}_checkChanges(e){new Set(Object.keys(e).concat(Object.keys(this.cookies))).forEach((t=>{e[t]!==this.cookies[t]&&this._emitChange({name:t,value:O(this.cookies[t])})}))}_startPolling(){this.pollingInterval=setInterval(this.update,300)}_stopPolling(){this.pollingInterval&&clearInterval(this.pollingInterval)}get(e,t={}){return t.doNotUpdate||this.update(),O(this.cookies[e],t)}getAll(e={}){e.doNotUpdate||this.update();const t={};for(let r in this.cookies)t[r]=O(this.cookies[r],e);return t}set(e,t,r){r=r?Object.assign(Object.assign({},this.defaultSetOptions),r):this.defaultSetOptions;const n="string"==typeof t?t:JSON.stringify(t);this.cookies=Object.assign(Object.assign({},this.cookies),{[e]:n}),this.HAS_DOCUMENT_COOKIE&&(document.cookie=P.serialize(e,n,r)),this._emitChange({name:e,value:t,options:r})}remove(e,t){const r=t=Object.assign(Object.assign(Object.assign({},this.defaultSetOptions),t),{expires:new Date(1970,1,1,0,0,1),maxAge:0});this.cookies=Object.assign({},this.cookies),delete this.cookies[e],this.HAS_DOCUMENT_COOKIE&&(document.cookie=P.serialize(e,"",r)),this._emitChange({name:e,value:void 0,options:t})}addChangeListener(e){this.changeListeners.push(e),this.HAS_DOCUMENT_COOKIE&&1===this.changeListeners.length&&("object"==typeof window&&"cookieStore"in window?window.cookieStore.addEventListener("change",this.update):this._startPolling())}removeChangeListener(e){const t=this.changeListeners.indexOf(e);t>=0&&this.changeListeners.splice(t,1),this.HAS_DOCUMENT_COOKIE&&0===this.changeListeners.length&&("object"==typeof window&&"cookieStore"in window?window.cookieStore.removeEventListener("change",this.update):this._stopPolling())}}const L=n.createContext(new $),{Provider:N,Consumer:j}=L;n.Component;"function"==typeof SuppressedError&&SuppressedError;var T,_={exports:{}},A={};var D,I,z;function M(){return D||(D=1,_.exports=function(){if(T)return A;T=1;var e="function"==typeof Symbol&&Symbol.for,t=e?Symbol.for("react.element"):60103,r=e?Symbol.for("react.portal"):60106,n=e?Symbol.for("react.fragment"):60107,o=e?Symbol.for("react.strict_mode"):60108,s=e?Symbol.for("react.profiler"):60114,i=e?Symbol.for("react.provider"):60109,a=e?Symbol.for("react.context"):60110,l=e?Symbol.for("react.async_mode"):60111,c=e?Symbol.for("react.concurrent_mode"):60111,d=e?Symbol.for("react.forward_ref"):60112,u=e?Symbol.for("react.suspense"):60113,p=e?Symbol.for("react.suspense_list"):60120,f=e?Symbol.for("react.memo"):60115,y=e?Symbol.for("react.lazy"):60116,m=e?Symbol.for("react.block"):60121,h=e?Symbol.for("react.fundamental"):60117,g=e?Symbol.for("react.responder"):60118,b=e?Symbol.for("react.scope"):60119;function w(e){if("object"==typeof e&&null!==e){var p=e.$$typeof;switch(p){case t:switch(e=e.type){case l:case c:case n:case s:case o:case u:return e;default:switch(e=e&&e.$$typeof){case a:case d:case y:case f:case i:return e;default:return p}}case r:return p}}}function k(e){return w(e)===c}return A.AsyncMode=l,A.ConcurrentMode=c,A.ContextConsumer=a,A.ContextProvider=i,A.Element=t,A.ForwardRef=d,A.Fragment=n,A.Lazy=y,A.Memo=f,A.Portal=r,A.Profiler=s,A.StrictMode=o,A.Suspense=u,A.isAsyncMode=function(e){return k(e)||w(e)===l},A.isConcurrentMode=k,A.isContextConsumer=function(e){return w(e)===a},A.isContextProvider=function(e){return w(e)===i},A.isElement=function(e){return"object"==typeof e&&null!==e&&e.$$typeof===t},A.isForwardRef=function(e){return w(e)===d},A.isFragment=function(e){return w(e)===n},A.isLazy=function(e){return w(e)===y},A.isMemo=function(e){return w(e)===f},A.isPortal=function(e){return w(e)===r},A.isProfiler=function(e){return w(e)===s},A.isStrictMode=function(e){return w(e)===o},A.isSuspense=function(e){return w(e)===u},A.isValidElementType=function(e){return"string"==typeof e||"function"==typeof e||e===n||e===c||e===s||e===o||e===u||e===p||"object"==typeof e&&null!==e&&(e.$$typeof===y||e.$$typeof===f||e.$$typeof===i||e.$$typeof===a||e.$$typeof===d||e.$$typeof===h||e.$$typeof===g||e.$$typeof===b||e.$$typeof===m)},A.typeOf=w,A}()),_.exports}!function(){if(z)return I;z=1;var e=M(),t={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},r={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},n={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},o={};function s(r){return e.isMemo(r)?n:o[r.$$typeof]||t}o[e.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},o[e.Memo]=n;var i=Object.defineProperty,a=Object.getOwnPropertyNames,l=Object.getOwnPropertySymbols,c=Object.getOwnPropertyDescriptor,d=Object.getPrototypeOf,u=Object.prototype;I=function e(t,n,o){if("string"!=typeof n){if(u){var p=d(n);p&&p!==u&&e(t,p,o)}var f=a(n);l&&(f=f.concat(l(n)));for(var y=s(t),m=s(n),h=0;h<f.length;++h){var g=f[h];if(!(r[g]||o&&o[g]||m&&m[g]||y&&y[g])){var b=c(n,g);try{i(t,g,b)}catch(w){}}}}return t}}();function q(e,t){const r=(0,n.useContext)(L);if(!r)throw new Error("Missing <CookiesProvider>");const o=Object.assign(Object.assign({},{doNotUpdate:!0}),t),[s,i]=(0,n.useState)((()=>r.getAll(o)));"undefined"!=typeof window&&void 0!==window.document&&void 0!==window.document.createElement&&(0,n.useLayoutEffect)((()=>{function t(){const t=r.getAll(o);(function(e,t,r){if(!e)return!0;for(let n of e)if(t[n]!==r[n])return!0;return!1})(e||null,t,s)&&i(t)}return r.addChangeListener(t),()=>{r.removeChangeListener(t)}}),[r,s]);const a=(0,n.useMemo)((()=>r.set.bind(r)),[r]),l=(0,n.useMemo)((()=>r.remove.bind(r)),[r]),c=(0,n.useMemo)((()=>r.update.bind(r)),[r]);return[s,a,l,c]}var R=e=>{const[t,r,a]=q(),{0:f,1:y}=(0,n.useState)(!1),{0:b,1:w}=(0,n.useState)(null),{0:v,1:E}=(0,n.useState)(null),{0:C,1:S}=(0,n.useState)(null),{0:P,1:O}=(0,n.useState)(t.cells||{}),$={[s]:{},[i]:{}};e.rawClues[s].forEach((e=>{$[s][e.number]=[e.clue,e.length,e.date]})),e.rawClues.dn.forEach((e=>{$[i][e.number]=[e.clue,e.length,e.date]}));const L=e.blackSquares.map((e=>{let[t,r]=e;return new l(t,r)})),[N,j]=function(e,t,r){const n=[],o=[];for(let i=0;i<e;i++)for(let e=0;e<t;e++){let t=!1;for(var s=0;s<r.length;s++){const n=r[s];n.x===i&&n.y===e&&(t=!0)}t||o.push(new l(i,e)),n.push([i,e,t])}return[o,n]}(e.acrossSize,e.downSize,L),T=function(e,t,r){for(var n={},o={},a=1,d=0;d<t;d++)for(var p=0;p<e;p++){var f=0,y=0;if(u(r,new l(p,d))){if(0===p||!u(r,new l(p-1,d))){f=1;for(var m=p+1;m<e&&u(r,new l(m,d));m++)f+=1;f>1&&(n[a]=new c(p,d,f,s))}if(0===d||!u(r,new l(p,d-1))){y=1;for(var h=d+1;h<t&&u(r,new l(p,h));h++)y+=1;y>1&&(o[a]=new c(p,d,y,i))}(f>1||y>1)&&(a+=1)}}return{[s]:n,[i]:o}}(e.acrossSize,e.downSize,N);function _(e){if(void 0===e&&(e=!0),console.log(`selected cell ${b}`),b&&v){const t=b.x,r=b.y;v.direction===s&&(e&&t!==v.x+v.length-1?w(new l(t+1,r)):e||t===v.x||w(new l(t-1,r))),v.direction===i&&(e&&r!==v.y+v.length-1?w(new l(t,r+1)):e||r===v.y||w(new l(t,r-1)))}}function A(t,r){if(t.x<0||t.x>=e.acrossSize||t.y<0||t.y>=e.downSize)return;if(function(e){for(let t=0;t<L.length;t++){const r=L[t];if(e.x===r.x&&e.y===r.y)return!0}return!1}(t))return;w(t);let n=!1;for(const e of N)e.equals(e)&&(n=!0);if(!n)return;if(!r&&v&&p(v,t))return;if(r&&v&&!t.equals(b)&&p(v,t))return;let o=null,a=null;for(let e of Object.values(T[s]))if(p(e,t)){if(o=e,v&&v.equals(o))break;return void E(o)}for(let e of Object.values(T[i]))if(p(e,t))return a=e,void E(a)}const D=e=>{const t="⌫"===e||"Backspace"===e;if(e.match(/^[a-z]$/i)||t){console.log(`selne ${t}`);const n=t?"":e,o=!t,s={...P};b&&(s[b.str()]=n),O(s),r("cells",s,{sameSite:"strict",expires:new Date(2100,1,1)}),_(o)}else"Tab"===e?function(){if(null!==v){console.log("select next clue");const e=Object.values(T[v.direction]),t=v.direction===s?i:s,r=Object.values(T[t]);for(let n=0;n<e.length;n++)if(console.log("sel"),console.log(C),console.log("iter"),console.log(e[n]),v.equals(e[n])){let t;n!==e.length-1?(console.log("setting 1"),t=e[n+1]):(console.log("setting 2"),t=r[0]),E(t);const o=new l(t.x,t.y);w(o);break}}}():b&&("ArrowRight"===e?(null==v?void 0:v.direction)===s?A(b.nextCell(s,!0),!1):A(b,!0):"ArrowLeft"===e?(null==v?void 0:v.direction)===s?A(b.nextCell(s,!1),!1):A(b,!0):"ArrowUp"===e?(null==v?void 0:v.direction)===i?A(b.nextCell(i,!1),!1):A(b,!0):"ArrowDown"===e&&((null==v?void 0:v.direction)===i?A(b.nextCell(i,!0),!1):A(b,!0)))},I=e=>{e.preventDefault(),e.stopPropagation()},z=e=>{D(e.key),e.preventDefault(),e.stopPropagation()};function M(e,t){const r=T[t][e];E(r),w(new l(r.x,r.y))}if((0,n.useEffect)((()=>(document.addEventListener("keydown",I),document.addEventListener("keyup",z),()=>{document.removeEventListener("keydown",I),document.removeEventListener("keyup",z)}))),null!=v)for(const[n,o]of Object.entries(T[v.direction])){const[e,t,r]=$[o.direction][n],s=new d(n,o.direction,e,t,r);o.equals(v)&&!s.equals(C)&&S(s)}return n.createElement(n.Fragment,null,n.createElement(o.A,null,n.createElement("h2",null,e.title),n.createElement("p",null,e.preamble),n.createElement(m,{clue:C,year:e.year,month:e.month}),n.createElement("div",{style:{margin:"5px"},id:"xwd-container"},n.createElement(h,{blackCells:L,whiteCells:N,cells:j,h:e.acrossSize,v:e.downSize,clues:T,selectedClue:v,setSelectedClue:E,selectedCell:b,setSelectedCell:w,filledCells:P,setFilledCells:O,selectNextCell:_,doHighlight:A})),n.createElement(g,{direction:s,clues:$[s],onClick:M,selectedClue:C,year:e.year,month:e.month}),n.createElement(g,{direction:i,clues:$[i],onClick:M,selectedClue:C,year:e.year,month:e.month})),f&&n.createElement(x,{keyPressed:D,hideKeyboardPressed:()=>y(!1)}),n.createElement(k,{keyboardPressed:()=>y(!f)}))}},1860:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/xwds/static/7fcbb40b91b2d2fdca809685c8d147da/bf8e1/keyboard.png","srcSet":"/xwds/static/7fcbb40b91b2d2fdca809685c8d147da/914ee/keyboard.png 32w,\\n/xwds/static/7fcbb40b91b2d2fdca809685c8d147da/1c9ce/keyboard.png 64w,\\n/xwds/static/7fcbb40b91b2d2fdca809685c8d147da/bf8e1/keyboard.png 128w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[{"srcSet":"/xwds/static/7fcbb40b91b2d2fdca809685c8d147da/ef6ff/keyboard.webp 32w,\\n/xwds/static/7fcbb40b91b2d2fdca809685c8d147da/8257c/keyboard.webp 64w,\\n/xwds/static/7fcbb40b91b2d2fdca809685c8d147da/6766a/keyboard.webp 128w","type":"image/webp","sizes":"(min-width: 128px) 128px, 100vw"}]},"width":128,"height":128}')}}]);
//# sourceMappingURL=78efbe3d844c0cee56344675073e192e7af46c1c-5a17154e5e63833fba4c.js.map