"use strict";(self.webpackChunkxwds=self.webpackChunkxwds||[]).push([[304],{2729:function(e){const t=/[\p{Lu}]/u,l=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,a=new RegExp("^"+s.source),i=new RegExp(s.source+n.source,"gu"),c=new RegExp("\\d+"+n.source,"gu"),o=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),o=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?o(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,a=!1,i=!1;for(let c=0;c<e.length;c++){const o=e[c];s&&t.test(o)?(e=e.slice(0,c)+"-"+e.slice(c),s=!1,i=a,a=!0,c++):a&&i&&l.test(o)?(e=e.slice(0,c-1)+"-"+e.slice(c-1),i=a,a=!1,s=!0):(s=r(o)===o&&n(o)!==o,i=a,a=n(o)===o&&r(o)!==o)}return e})(e,s,o)),e=e.replace(a,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=o(e.charAt(0))+e.slice(1)),((e,t)=>(i.lastIndex=0,c.lastIndex=0,e.replace(i,((e,l)=>t(l))).replace(c,(e=>t(e)))))(e,o)};e.exports=o,e.exports.default=o},2532:function(e,t,l){l.d(t,{L:function(){return g},M:function(){return x},P:function(){return w},S:function(){return F},_:function(){return i},a:function(){return a},b:function(){return d},g:function(){return u},h:function(){return c}});var r=l(6540),n=(l(2729),l(5556)),s=l.n(n);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var l=arguments[t];for(var r in l)Object.prototype.hasOwnProperty.call(l,r)&&(e[r]=l[r])}return e},a.apply(this,arguments)}function i(e,t){if(null==e)return{};var l,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(l=s[r])>=0||(n[l]=e[l]);return n}const c=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function o(e,t,l){const r={};let n="gatsby-image-wrapper";return"fixed"===l?(r.width=e,r.height=t):"constrained"===l&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,l,r,n){return void 0===n&&(n={}),a({},l,{loading:r,shouldLoad:e,"data-main-image":"",style:a({},n,{opacity:t?1:0})})}function u(e,t,l,r,n,s,i,c){const o={};s&&(o.backgroundColor=s,"fixed"===l?(o.width=r,o.height=n,o.backgroundColor=s,o.position="relative"):("constrained"===l||"fullWidth"===l)&&(o.position="absolute",o.top=0,o.left=0,o.bottom=0,o.right=0)),i&&(o.objectFit=i),c&&(o.objectPosition=c);const d=a({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:a({opacity:t?0:1,transition:"opacity 500ms linear"},o)});return d}const m=["children"],p=function(e){let{layout:t,width:l,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/l*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:l,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:`data:image/svg+xml;charset=utf-8,%3Csvg%20height='${n}'%20width='${l}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E`,style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,l=i(e,m);return r.createElement(r.Fragment,null,r.createElement(p,a({},l)),t,null)},y=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],h=function(e){let{src:t,srcSet:l,loading:n,alt:s="",shouldLoad:c}=e,o=i(e,y);return r.createElement("img",a({},o,{decoding:"async",loading:n,src:c?t:void 0,"data-src":c?void 0:t,srcSet:c?l:void 0,"data-srcset":c?void 0:l,alt:s}))},b=function(e){let{fallback:t,sources:l=[],shouldLoad:n=!0}=e,s=i(e,f);const c=s.sizes||(null==t?void 0:t.sizes),o=r.createElement(h,a({},s,t,{sizes:c,shouldLoad:n}));return l.length?r.createElement("picture",null,l.map((e=>{let{media:t,srcSet:l,type:s}=e;return r.createElement("source",{key:`${t}-${s}-${l}`,type:s,media:t,srcSet:n?l:void 0,"data-srcset":n?void 0:l,sizes:c})})),o):o};var k;h.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},b.displayName="Picture",b.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const C=["fallback"],w=function(e){let{fallback:t}=e,l=i(e,C);return t?r.createElement(b,a({},l,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",a({},l))};w.displayName="Placeholder",w.propTypes={fallback:n.string,sources:null==(k=b.propTypes)?void 0:k.sources,alt:function(e,t,l){return e[t]?new Error(`Invalid prop \`${t}\` supplied to \`${l}\`. Validation failed.`):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(b,a({},e)),r.createElement("noscript",null,r.createElement(b,a({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=b.propTypes;const v=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],E=["style","className"],P=e=>e.replace(/\n/g,""),S=function(e,t,l){for(var r=arguments.length,n=new Array(r>3?r-3:0),a=3;a<r;a++)n[a-3]=arguments[a];return e.alt||""===e.alt?s().string.apply(s(),[e,t,l].concat(n)):new Error(`The "alt" prop is required in ${l}. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html`)},N={image:s().object.isRequired,alt:S},L=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],$=["style","className"],q=new Set;let A,O;const j=function(e){let{as:t="div",image:n,style:s,backgroundColor:d,className:u,class:m,onStartLoad:p,onLoad:g,onError:y}=e,f=i(e,L);const{width:h,height:b,layout:k}=n,C=o(h,b,k),{style:w,className:x}=C,v=i(C,$),E=(0,r.useRef)(),P=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(u=m);const S=function(e,t,l){let r="";return"fullWidth"===e&&(r=`<div aria-hidden="true" style="padding-top: ${l/t*100}%;"></div>`),"constrained"===e&&(r=`<div style="max-width: ${t}px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height='${l}'%20width='${t}'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E" style="max-width: 100%; display: block; position: static;"></div>`),r}(k,h,b);return(0,r.useEffect)((()=>{A||(A=l.e(108).then(l.bind(l,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:l}=e;return O=t,{renderImageToString:t,swapPlaceholderImage:l}})));const e=E.current.querySelector("[data-gatsby-image-ssr]");if(e&&c())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void q.add(P);if(O&&q.has(P))return;let t,r;return A.then((e=>{let{renderImageToString:l,swapPlaceholderImage:i}=e;E.current&&(E.current.innerHTML=l(a({isLoading:!0,isLoaded:q.has(P),image:n},f)),q.has(P)||(t=requestAnimationFrame((()=>{E.current&&(r=i(E.current,P,q,s,p,g,y))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{q.has(P)&&O&&(E.current.innerHTML=O(a({isLoading:q.has(P),isLoaded:q.has(P),image:n},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,a({},v,{style:a({},w,s,{backgroundColor:d}),className:`${x}${u?` ${u}`:""}`,ref:E,dangerouslySetInnerHTML:{__html:S},suppressHydrationWarning:!0}))},T=(0,r.memo)((function(e){return e.image?(0,r.createElement)(j,e):null}));T.propTypes=N,T.displayName="GatsbyImage";const D=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function I(e){return function(t){let{src:l,__imageData:n,__error:s}=t,c=i(t,D);return s&&console.warn(s),n?r.createElement(e,a({image:n},c)):(console.warn("Image not loaded",l),null)}}const R=I((function(e){let{as:t="div",className:l,class:n,style:s,image:c,loading:m="lazy",imgClassName:p,imgStyle:y,backgroundColor:f,objectFit:h,objectPosition:b}=e,k=i(e,v);if(!c)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(l=n),y=a({objectFit:h,objectPosition:b,backgroundColor:f},y);const{width:C,height:S,layout:N,images:L,placeholder:$,backgroundColor:q}=c,A=o(C,S,N),{style:O,className:j}=A,T=i(A,E),D={fallback:void 0,sources:[]};return L.fallback&&(D.fallback=a({},L.fallback,{srcSet:L.fallback.srcSet?P(L.fallback.srcSet):void 0})),L.sources&&(D.sources=L.sources.map((e=>a({},e,{srcSet:P(e.srcSet)})))),r.createElement(t,a({},T,{style:a({},O,s,{backgroundColor:f}),className:`${j}${l?` ${l}`:""}`}),r.createElement(g,{layout:N,width:C,height:S},r.createElement(w,a({},u($,!1,N,C,S,q,h,b))),r.createElement(x,a({"data-gatsby-image-ssr":"",className:p},k,d("eager"===m,!1,D,m,y)))))})),_=function(e,t){for(var l=arguments.length,r=new Array(l>2?l-2:0),n=2;n<l;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error(`"${t}" ${e[t]} may not be passed when layout is fullWidth.`)},U=new Set(["fixed","fullWidth","constrained"]),z={src:s().string.isRequired,alt:S,width:_,height:_,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!U.has(e.layout))return new Error(`Invalid value ${e.layout}" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".`)}};R.displayName="StaticImage",R.propTypes=z;const F=I(T);F.displayName="StaticImage",F.propTypes=z},4210:function(e,t,l){l.d(t,{e6:function(){return s},s3:function(){return i}});var r=l(6540),n=l(2532);const s=e=>r.createElement("div",{id:"keyboard-button",onClick:e.keyboardPressed},r.createElement(n.S,{alt:"keyboard",src:"../images/keyboard.png",__imageData:l(2047)})),a=e=>r.createElement("div",{onClick:()=>e.keyPressed(e.letter),className:"keyboard-key"},e.letter),i=e=>r.createElement("div",{id:"keyboard"},r.createElement("div",{className:"keyboard-row"},r.createElement(a,{letter:"q",keyPressed:e.keyPressed}),r.createElement(a,{letter:"w",keyPressed:e.keyPressed}),r.createElement(a,{letter:"e",keyPressed:e.keyPressed}),r.createElement(a,{letter:"r",keyPressed:e.keyPressed}),r.createElement(a,{letter:"t",keyPressed:e.keyPressed}),r.createElement(a,{letter:"y",keyPressed:e.keyPressed}),r.createElement(a,{letter:"u",keyPressed:e.keyPressed}),r.createElement(a,{letter:"i",keyPressed:e.keyPressed}),r.createElement(a,{letter:"o",keyPressed:e.keyPressed}),r.createElement(a,{letter:"p",keyPressed:e.keyPressed})),r.createElement("div",{className:"keyboard-row"},r.createElement(a,{letter:"a",keyPressed:e.keyPressed}),r.createElement(a,{letter:"s",keyPressed:e.keyPressed}),r.createElement(a,{letter:"d",keyPressed:e.keyPressed}),r.createElement(a,{letter:"f",keyPressed:e.keyPressed}),r.createElement(a,{letter:"g",keyPressed:e.keyPressed}),r.createElement(a,{letter:"h",keyPressed:e.keyPressed}),r.createElement(a,{letter:"j",keyPressed:e.keyPressed}),r.createElement(a,{letter:"k",keyPressed:e.keyPressed}),r.createElement(a,{letter:"l",keyPressed:e.keyPressed})),r.createElement("div",{className:"keyboard-row"},r.createElement("div",{className:"keyboard-spacer"}),r.createElement(a,{letter:"z",keyPressed:e.keyPressed}),r.createElement(a,{letter:"x",keyPressed:e.keyPressed}),r.createElement(a,{letter:"c",keyPressed:e.keyPressed}),r.createElement(a,{letter:"v",keyPressed:e.keyPressed}),r.createElement(a,{letter:"b",keyPressed:e.keyPressed}),r.createElement(a,{letter:"n",keyPressed:e.keyPressed}),r.createElement(a,{letter:"m",keyPressed:e.keyPressed}),r.createElement(a,{letter:"⌫",keyPressed:e.keyPressed})))},4050:function(e,t,l){l.d(t,{ZJ:function(){return c}});var r=l(6540),n=l(2988);function s(e){return r.createElement("div",{style:{position:"absolute",width:e.h+1+"px",height:e.v+1+"px",top:e.y+"px",left:e.x+"px"},className:"black-cell"})}function a(e){let t=e.selected?"cyan":e.highlight?"lightblue":"lightgray";return r.createElement(r.Fragment,null,r.createElement("div",{style:{position:"absolute",width:e.h-1+"px",height:e.v-1+"px",top:e.y+"px",left:e.x+"px",backgroundColor:t},onClick:e.onClick,className:"white-cell"},e.contents),r.createElement("div",{className:"clue-number",style:{position:"absolute",width:e.h-1+"px",height:e.v-1+"px",top:e.y+"px",left:e.x+2+"px"}},e.number))}function i(e){let t="No clue selected.";if(null!==e.clue){const{num:l,direction:r,clue:n,letters:s,releaseDate:a}=e.clue,i=new Date;t=`${l} ${r}. ${11===i.getMonth()&&i.getDate()>a?n:`Released on December ${a}.`} (${s})`}return r.createElement("div",{style:{padding:"15px"}},r.createElement("span",{style:{fontWeight:"bold",padding:"5px",margin:"5px",backgroundColor:"lightblue"}},t))}function c(e){const{0:t,1:l}=(0,r.useState)(null),[s,a]=(0,n.tw)(e.v,e.h,e.blackCells),c=(0,n.Z5)(e.h,e.v,s);if(null!=e.selectedClueSeq)for(const[r,i]of Object.entries(c[e.selectedClueSeq.direction])){const[s,a,c]=e.clues[i.direction][r],o=new n.EA(r,i.direction,s,a,c);i.equals(e.selectedClueSeq)&&!o.equals(t)&&l(o)}function u(t,l){console.log(`crossword onClick() ${l} ${t}`);const r=c[l][t];e.setSelectedClueSeq(r),e.setSelectedCell(new n.Uc(r.x,r.y))}return r.createElement(r.Fragment,null,r.createElement("h2",null,e.title),r.createElement("p",null,e.preamble),r.createElement(i,{clue:t}),r.createElement("div",{style:{margin:"5px"},id:"xwd-container"},r.createElement(o,{blackCells:e.blackCells,whiteCells:s,cells:a,h:e.h,v:e.h,clues:c,selectedClue:e.selectedClueSeq,setSelectedClue:e.setSelectedClueSeq,selectedCell:e.selectedCell,setSelectedCell:e.setSelectedCell,filledCells:e.filledCells,setFilledCells:e.setFilledCells,selectNextCell:e.selectNextCell})),r.createElement(d,{direction:n.AC,clues:e.clues[n.AC],onClick:u,selectedClue:t}),r.createElement(d,{direction:n.DN,clues:e.clues[n.DN],onClick:u,selectedClue:t}))}function o(e){const t={};for(let[r,s]of Object.entries(e.clues[n.AC]))t[r]=new n.Uc(s.x,s.y);for(let[r,s]of Object.entries(e.clues[n.DN]))t[r]=new n.Uc(s.x,s.y);function l(t){if(t.x<0||t.x>=e.h||t.y<0||t.y>=e.v)return;if(function(t){for(let l=0;l<e.blackCells.length;l++){const r=e.blackCells[l];if(t.x===r.x&&t.y===r.y)return!0}return!1}(t))return;e.setSelectedCell(t);let l=!1;for(const n of e.whiteCells)t.equals(n)&&(l=!0);if(!l)return;let r=null,s=null;for(let a of Object.values(e.clues[n.AC]))if((0,n.LY)(a,t)){if(r=a,e.selectedClue&&!e.selectedClue.equals(r))return void e.setSelectedClue(r);break}for(let a of Object.values(e.clues[n.DN]))if((0,n.LY)(a,t))return s=a,void e.setSelectedClue(s)}function i(t){t===n.UP?l(e.selectedCell.nextCell(n.DN,!1)):t===n.PX?l(e.selectedCell.nextCell(n.DN,!0)):t===n.M3?l(e.selectedCell.nextCell(n.AC,!1)):t===n.NS&&l(e.selectedCell.nextCell(n.AC,!0))}function c(){console.log("select next clue"),console.log(e.selectedClue.direction);const t=Object.values(e.clues[e.selectedClue.direction]),l=e.selectedClue.direction===n.AC?n.DN:n.AC,r=Object.values(e.clues[l]);console.log(l);for(let s=0;s<t.length;s++)if(console.log("sel"),console.log(e.selectedClue),console.log("iter"),console.log(t[s]),e.selectedClue.equals(t[s])){let l;s!==t.length-1?(console.log("setting 1"),l=t[s+1]):(console.log("setting 2"),l=r[0]),e.setSelectedClue(l);const a=new n.Uc(l.x,l.y);e.setSelectedCell(a);break}}let o=[];if(null!=e.selectedClue){const{x:t,y:l,length:r,direction:s}=e.selectedClue;if(s==n.AC)for(let e=t;e<t+r;e++)o.push(new n.Uc(e,l));else for(let e=l;e<l+r;e++)o.push(new n.Uc(t,e))}for(let r=0;r<e.cells.length;r++){const[l,n]=e.cells[r];let s=null;for(let[e,r]of Object.entries(t))r.x===l&&r.y===n&&(s=e);e.cells[r].push(s);let a=!1;for(let e=0;e<o.length;e++)l===o[e].x&&n===o[e].y&&(a=!0);e.cells[r].push(a)}return r.createElement("div",{style:{position:"relative",width:28*e.h+"px",height:28*e.v+"px"}},e.cells.map((t=>{let[o,d,u,m,p]=t;return u?r.createElement(s,{h:28,v:28,x:28*o,y:28*d,key:o+e.h*d}):r.createElement(a,{h:28,v:28,x:28*o,y:28*d,key:o+e.h*d,number:m,highlight:p,selected:null!==e.selectedCell&&o===e.selectedCell.x&&d===e.selectedCell.y,onClick:e=>l(new n.Uc(o,d)),selectNextCell:e.selectNextCell,selectNextClue:c,moveCell:i,contents:e.filledCells[`${o},${d}`],setContents:t=>function(t,l,r){const n={...e.filledCells};n[`${t},${l}`]=r,e.setFilledCells(n)}(o,d,t)})})))}function d(e){let t=null,l=null;return null!==e.selectedClue&&(t=e.selectedClue.num,l=e.selectedClue.direction),r.createElement("div",{style:{fontWeight:"bold",width:"300px",display:"inline-block",verticalAlign:"top",margin:"5px"}},r.createElement("div",{style:{border:"1px solid black",padding:"5px"}},n.tN[e.direction]),Object.entries(e.clues).map((n=>{const[s,a]=n,i=e.direction===l&&s===t,[c,o,d]=a,m=new Date,p=10===m.getMonth()&&m.getDate()>d?c:`Released on December ${d}.`;return r.createElement(u,{key:s,number:s,clue:p,len:o,onClick:function(){!function(t){e.onClick(t,e.direction)}(s)},selected:i})})))}function u(e){let t="clue";return e.selected&&(t=`${t} selected`),r.createElement("div",{className:t,onClick:e.onClick},e.number,". ",e.clue," (",e.len,")")}},2988:function(e,t,l){l.d(t,{AC:function(){return r},DN:function(){return n},EA:function(){return m},LY:function(){return g},M3:function(){return i},NS:function(){return c},PX:function(){return a},UP:function(){return s},Uc:function(){return d},Z5:function(){return f},tN:function(){return o},tw:function(){return y}});const r="ac",n="dn",s="up",a="down",i="left",c="right",o={ac:"Across",dn:"Down"};let d=function(){function e(e,t){this.x=e,this.y=t}var t=e.prototype;return t.equals=function(e){return null!==e&&this.x===e.x&&this.y===e.y},t.nextCell=function(t,l){void 0===l&&(l=!0);const n=l?1:-1;return t===r?new e(this.x+n,this.y):new e(this.x,this.y+n)},t.str=function(){return`${this.x},${this.y}`},e}(),u=function(){function e(e,t,l,r){this.x=e,this.y=t,this.length=l,this.direction=r}return e.prototype.equals=function(e){return null!==e&&this.x===e.x&&this.y===e.y&&this.length===e.length&&this.direction===e.direction},e}(),m=function(){function e(e,t,l,r,n){this.num=e,this.direction=t,this.clue=l,this.letters=r,this.releaseDate=n}return e.prototype.equals=function(e){return null!==e&&this.num===e.num&&this.direction===e.direction},e}();function p(e,t){for(var l=0;l<e.length;l++){const{x:r,y:n}=e[l];if(r===t.x&&n===t.y)return!0}return!1}function g(e,t){if(e.direction===r)for(var l=e.x;l<e.x+e.length;l++)if(t.x===l&&t.y===e.y)return!0;if(e.direction===n)for(l=e.y;l<e.y+e.length;l++)if(t.x==e.x&&t.y==l)return!0;return!1}function y(e,t,l){const r=[],n=[];for(let a=0;a<e;a++)for(let e=0;e<t;e++){let t=!1;for(var s=0;s<l.length;s++){const r=l[s];r.x===a&&r.y===e&&(t=!0)}t||n.push(new d(a,e)),r.push([a,e,t])}return[n,r]}function f(e,t,l){for(var s=[],a=[],i=1,c=0;c<t;c++)for(var o=0;o<e;o++){var m=0,g=0;if(p(l,new d(o,c))){if(0===o||!p(l,new d(o-1,c))){m=1;for(var y=o+1;y<e&&p(l,new d(y,c));y++)m+=1;m>1&&(s[i]=new u(o,c,m,r))}if(0===c||!p(l,new d(o,c-1))){g=1;for(var f=c+1;f<t&&p(l,new d(o,f));f++)g+=1;g>1&&(a[i]=new u(o,c,g,n))}(m>1||g>1)&&(i+=1)}}return{ac:s,dn:a}}},2047:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#080808","images":{"fallback":{"src":"/xwds/static/7fcbb40b91b2d2fdca809685c8d147da/bf8e1/keyboard.png","srcSet":"/xwds/static/7fcbb40b91b2d2fdca809685c8d147da/914ee/keyboard.png 32w,\\n/xwds/static/7fcbb40b91b2d2fdca809685c8d147da/1c9ce/keyboard.png 64w,\\n/xwds/static/7fcbb40b91b2d2fdca809685c8d147da/bf8e1/keyboard.png 128w","sizes":"(min-width: 128px) 128px, 100vw"},"sources":[{"srcSet":"/xwds/static/7fcbb40b91b2d2fdca809685c8d147da/ef6ff/keyboard.webp 32w,\\n/xwds/static/7fcbb40b91b2d2fdca809685c8d147da/8257c/keyboard.webp 64w,\\n/xwds/static/7fcbb40b91b2d2fdca809685c8d147da/6766a/keyboard.webp 128w","type":"image/webp","sizes":"(min-width: 128px) 128px, 100vw"}]},"width":128,"height":128}')}}]);
//# sourceMappingURL=78efbe3d844c0cee56344675073e192e7af46c1c-9fe5265ec9a441d2bb95.js.map