(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{dvtb:function(e,l,t){"use strict";t.r(l);var n=t("q1tI"),r=t.n(n),c=t("Wbzz"),o=t("Bl7J"),i=t("vrFN"),s="ac",a="dn",u={ac:"Across",dn:"Down"},d=function(){function e(e,l){this.x=e,this.y=l}var l=e.prototype;return l.equals=function(e){return null!==e&&this.x===e.x&&this.y===e.y},l.nextCell=function(l,t){void 0===t&&(t=!0);var n=t?1:-1;return l===s?new e(this.x+n,this.y):new e(this.x,this.y+n)},e}(),h=function(){function e(e,l,t,n){this.x=e,this.y=l,this.length=t,this.direction=n}return e.prototype.equals=function(e){return null!==e&&this.x===e.x&&this.y===e.y&&this.length===e.length&&this.direction===e.direction},e}(),f=function(){function e(e,l,t,n,r){this.num=e,this.direction=l,this.clue=t,this.letters=n,this.releaseDate=r}return e.prototype.equals=function(e){return null!==e&&this.num===e.num&&this.direction===e.direction},e}();function v(e,l){for(var t=0;t<e.length;t++){var n=e[t],r=n.x,c=n.y;if(r===l.x&&c===l.y)return!0}return!1}function g(e,l){if(e.direction===s)for(var t=e.x;t<e.x+e.length;t++)if(l.x===t&&l.y===e.y)return!0;if(e.direction===a)for(t=e.y;t<e.y+e.length;t++)if(l.x==e.x&&l.y==t)return!0;return!1}function y(e,l){var t;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(t=function(e,l){if(!e)return;if("string"==typeof e)return C(e,l);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(e);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return C(e,l)}(e))||l&&e&&"number"==typeof e.length){t&&(e=t);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(t=e[Symbol.iterator]()).next.bind(t)}function C(e,l){(null==l||l>e.length)&&(l=e.length);for(var t=0,n=new Array(l);t<l;t++)n[t]=e[t];return n}function p(e){return r.a.createElement("div",{style:{position:"absolute",width:e.h+1+"px",height:e.v+1+"px",top:e.y+"px",left:e.x+"px"},className:"black-cell"})}function x(e){var l=Object(n.useState)(""),t=l[0],c=l[1],o=e.selected?"cyan":e.highlight?"lightblue":"lightgray";return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{style:{position:"absolute",width:e.h-1+"px",height:e.v-1+"px",top:e.y+"px",left:e.x+"px",backgroundColor:o},ref:function(l){return l&&e.selected&&l.focus()},onClick:e.onClick,className:"white-cell",type:"text",onKeyUp:function(l){console.log("pressed "+l.key),l.key.match(/^[a-z]$/i)?(c(l.key),e.selectNextCell()):"Backspace"===l.key?(c(""),e.selectNextCell(!1)):"Delete"===l.key?c(""):"Tab"===l.key?e.selectNextClue():"ArrowUp"===l.key?e.moveCell("up"):"ArrowDown"===l.key?e.moveCell("down"):"ArrowLeft"===l.key?e.moveCell("left"):"ArrowRight"===l.key&&e.moveCell("right")},value:t}),r.a.createElement("div",{className:"clue-number",style:{position:"absolute",width:e.h-1+"px",height:e.v-1+"px",top:e.y+"px",left:e.x+2+"px"}},e.number))}function m(e){var l="No clue selected.";if(null!==e.clue){var t=e.clue;l=t.num+" "+t.direction+". "+t.clue+" ("+t.letters+")"}return r.a.createElement("div",{style:{padding:"15px"}},r.a.createElement("span",{style:{fontWeight:"bold",padding:"5px",margin:"5px",backgroundColor:"lightblue"}},l))}function b(e){var l=Object(n.useState)(null),t=l[0],c=l[1],o=Object(n.useState)(null),i=o[0],u=o[1],g=Object(n.useState)(null),y=g[0],C=g[1];console.log("selected clue then clueSeq"),console.log(i),console.log(t);var p=function(e,l,t){for(var n=[],r=[],c=0;c<e;c++)for(var o=0;o<l;o++){for(var i=!1,s=0;s<t.length;s++){var a=t[s];a.x===c&&a.y===o&&(i=!0)}i||r.push(new d(c,o)),n.push([c,o,i])}return[r,n]}(e.v,e.h,e.blackCells),x=p[0],b=p[1],E=function(e,l,t){for(var n=[],r=[],c=1,o=0;o<l;o++)for(var i=0;i<e;i++){var u=0,f=0;if(v(t,new d(i,o))){if(0===i||!v(t,new d(i-1,o))){u=1;for(var g=i+1;g<e&&v(t,new d(g,o));g++)u+=1;u>1&&(n[c]=new h(i,o,u,s))}if(0===o||!v(t,new d(i,o-1))){f=1;for(var y=o+1;y<l&&v(t,new d(i,y));y++)f+=1;f>1&&(r[c]=new h(i,o,f,a))}(u>1||f>1)&&(c+=1)}}return{ac:n,dn:r}}(e.h,e.v,x);if(null!=t)for(var S=0,j=Object.entries(E[t.direction]);S<j.length;S++){var O=j[S],A=O[0],q=O[1],N=e.clues[q.direction][A],z=N[0],D=N[1],I=N[2],J=new f(A,q.direction,z,D,I);q.equals(t)&&!J.equals(i)&&u(J)}function F(e,l){console.log("crossword onClick() "+l+" "+e);var t=E[l][e];c(t),C(new d(t.x,t.y))}return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,e.title),r.a.createElement("p",null,e.preamble),r.a.createElement(m,{clue:i}),r.a.createElement("div",{style:{margin:"5px"},id:"xwd-container"},r.a.createElement(w,{blackCells:e.blackCells,whiteCells:x,cells:b,h:e.h,v:e.h,clues:E,selectedClue:t,setSelectedClue:c,selectedCell:y,setSelectedCell:C})),r.a.createElement(k,{direction:s,clues:e.clues.ac,onClick:F,selectedClue:i}),r.a.createElement(k,{direction:a,clues:e.clues.dn,onClick:F,selectedClue:i}))}function w(e){for(var l={},t=0,n=Object.entries(e.clues.ac);t<n.length;t++){var c=n[t],o=c[0],i=c[1];l[o]=new d(i.x,i.y)}for(var u=0,h=Object.entries(e.clues.dn);u<h.length;u++){var f=h[u],v=f[0],C=f[1];l[v]=new d(C.x,C.y)}function m(l){if(console.log("just clicked"),console.log(l),!(l.x<0||l.x>=e.h||l.y<0||l.y>=e.v||function(l){for(var t=0;t<e.blackCells.length;t++){var n=e.blackCells[t];if(l.x===n.x&&l.y===n.y)return!0}return!1}(l))){e.setSelectedCell(l);for(var t,n=!1,r=y(e.whiteCells);!(t=r()).done;){var c=t.value;l.equals(c)&&(n=!0)}if(n){for(var o=null,i=null,s=0,a=Object.values(e.clues.ac);s<a.length;s++){var u=a[s];if(g(u,l)){if(o=u,e.selectedClue&&!e.selectedClue.equals(o))return console.log("setiting selected clue to"),console.log(o),void e.setSelectedClue(o);break}}for(var d=0,h=Object.values(e.clues.dn);d<h.length;d++){var f=h[d];if(g(f,l))return i=f,console.log("setiting selected clue to"),console.log(i),void e.setSelectedClue(i)}}}}function b(l){void 0===l&&(l=!0);var t=e.selectedCell,n=t.x,r=t.y;e.selectedClue.direction===s&&(l&&n!==e.selectedClue.x+e.selectedClue.length-1?e.setSelectedCell(new d(n+1,r)):l||n===e.selectedClue.x||e.setSelectedCell(new d(n-1,r))),e.selectedClue.direction===a&&(l&&r!==e.selectedClue.y+e.selectedClue.length-1?e.setSelectedCell(new d(n,r+1)):l||r===e.selectedClue.y||e.setSelectedCell(new d(n,r-1)))}function w(l){"up"===l?m(e.selectedCell.nextCell(a,!1)):"down"===l?m(e.selectedCell.nextCell(a,!0)):"left"===l?m(e.selectedCell.nextCell(s,!1)):"right"===l&&m(e.selectedCell.nextCell(s,!0))}function k(){console.log("select next clue"),console.log(e.selectedClue.direction);var l=Object.values(e.clues[e.selectedClue.direction]),t=e.selectedClue.direction===s?a:s,n=Object.values(e.clues[t]);console.log(t);for(var r=0;r<l.length;r++)if(console.log("sel"),console.log(e.selectedClue),console.log("iter"),console.log(l[r]),e.selectedClue.equals(l[r])){var c=void 0;r!==l.length-1?(console.log("setting 1"),c=l[r+1]):(console.log("setting 2"),c=n[0]),e.setSelectedClue(c);var o=new d(c.x,c.y);e.setSelectedCell(o);break}}var E=[];if(null!=e.selectedClue){var S=e.selectedClue,j=S.x,O=S.y,A=S.length,q=S.direction;if(console.log(j),console.log(O),console.log(A),console.log(q),q==s)for(var N=j;N<j+A;N++)E.push(new d(N,O));else for(var z=O;z<O+A;z++)E.push(new d(j,z))}console.log(l),console.log("highlights"),console.log(E);for(var D=0;D<e.cells.length;D++){for(var I=e.cells[D],J=I[0],F=I[1],U=null,W=0,_=Object.entries(l);W<_.length;W++){var B=_[W],T=B[0],$=B[1];$.x===J&&$.y===F&&(U=T)}e.cells[D].push(U);for(var K=!1,L=0;L<E.length;L++)J===E[L].x&&F===E[L].y&&(K=!0);e.cells[D].push(K)}return console.log(e.cells),r.a.createElement("div",{style:{position:"relative",width:30*e.h+"px",height:30*e.v+"px"}},e.cells.map((function(l){var t=l[0],n=l[1],c=l[2],o=l[3],i=l[4];return c?r.a.createElement(p,{h:30,v:30,x:30*t,y:30*n,key:t+e.h*n}):r.a.createElement(x,{h:30,v:30,x:30*t,y:30*n,key:t+e.h*n,number:o,highlight:i,selected:null!==e.selectedCell&&t===e.selectedCell.x&&n===e.selectedCell.y,onClick:function(e){return m(new d(t,n))},selectNextCell:b,selectNextClue:k,moveCell:w})})))}function k(e){var l=null,t=null;return null!==e.selectedClue&&(l=e.selectedClue.num,t=e.selectedClue.direction),r.a.createElement("div",{style:{fontWeight:"bold",width:"300px",display:"inline-block",verticalAlign:"top",margin:"5px"}},r.a.createElement("div",{style:{border:"1px solid black",padding:"5px"}},u[e.direction]),Object.entries(e.clues).map((function(n){var c=n[0],o=n[1],i=e.direction===t&&c===l,s=o[0],a=o[1];return r.a.createElement(E,{number:c,clue:s,len:a,onClick:function(){!function(l){e.onClick(l,e.direction)}(c)},selected:i})})))}function E(e){var l="clue";return e.selected&&(l+=" selected"),r.a.createElement("div",{className:l,onClick:e.onClick},e.number,". ",e.clue," (",e.len,")")}l.default=function(){var e=Object(c.useStaticQuery)("2069107878").allXwd2020Json.edges[0].node,l=e.title,t=e.preamble,n=e.across_size,s=e.down_size,a=e.black_squares,u=e.clues,h={ac:{},dn:{}};u.ac.forEach((function(e){h.ac[e.number]=[e.clue,e.length,e.date]})),u.dn.forEach((function(e){h.dn[e.number]=[e.clue,e.length,e.date]}));var f=a.map((function(e){var l=e[0],t=e[1];return new d(l,t)}));return r.a.createElement(o.a,null,r.a.createElement(i.a,{title:"Crosswords",keywords:["gatsby","application","react"]}),r.a.createElement(b,{title:l,preamble:t,blackCells:f,h:n,v:s,clues:h}))}}}]);
//# sourceMappingURL=component---src-pages-xwd-tsx-ff08cc76366bcd0ffe49.js.map