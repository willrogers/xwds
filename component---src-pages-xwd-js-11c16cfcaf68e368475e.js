(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2hvn":function(e){e.exports=JSON.parse('{"data":{"allXwd2019Json":{"edges":[{"node":{"title":"The Advent Crossword 2019","preamble":"Find all the members of a Christmas-related group in the completed grid.","across_size":13,"down_size":13,"black_squares":[[0,0],[0,2],[0,4],[0,6],[0,7],[0,8],[0,10],[0,12],[1,0],[1,7],[1,12],[2,0],[2,2],[2,4],[2,6],[2,8],[2,10],[2,12],[3,0],[4,0],[4,2],[4,4],[4,6],[4,8],[4,10],[4,11],[5,5],[6,0],[6,2],[6,3],[6,4],[6,6],[6,8],[6,9],[6,10],[6,12],[7,7],[8,1],[8,2],[8,4],[8,6],[8,8],[8,10],[8,12],[9,12],[10,0],[10,2],[10,4],[10,6],[10,8],[10,10],[10,12],[11,0],[11,5],[11,12],[12,0],[12,2],[12,4],[12,5],[12,6],[12,8],[12,10],[12,12]],"clues":{"ac":[{"number":"2","clue":"Nut loaf","length":3,"date":4},{"number":"4","clue":"What you might pull while gardening - oops","length":8,"date":2},{"number":"7","clue":"Kid in water feature","length":4,"date":15},{"number":"9","clue":"Political party with energy after propaganda caper","length":6,"date":1},{"number":"10","clue":"Enjoy eating some of squirrel I shot","length":6,"date":3},{"number":"11","clue":"Company came across trailblazer?","length":5,"date":8},{"number":"12","clue":"Words said quietly for the record","length":5,"date":13},{"number":"15","clue":"Huge effort starts to bring latecomer into the zone","length":5,"date":22},{"number":"16","clue":"Access guard decapitated","length":6,"date":20},{"number":"19","clue":"Swot up about a political party","length":6,"date":12},{"number":"20","clue":"Disrupts universal payouts with upfront cut","length":6,"date":23},{"number":"21","clue":"Cut short poet in residence","length":4,"date":14},{"number":"22","clue":"What B is to 12 - the opposite?","length":8,"date":9},{"number":"23","clue":"Catch sight of snooper","length":3,"date":17}],"dn":[{"number":"1","clue":"Fight over unknown name of bad-tempered woman","length":5,"date":21},{"number":"2","clue":"Tree that sounds Mediterranean","length":7,"date":13},{"number":"3","clue":"Unsettled Danes cry warning before entertainment","length":12,"date":3},{"number":"5","clue":"Forgive average teacher","length":6,"date":6},{"number":"6","clue":"Refuelling supervisors for trainees","length":12,"date":18},{"number":"8","clue":"Run a bit","length":4,"date":16},{"number":"13","clue":"Shock sets back European financial year","length":7,"date":5},{"number":"14","clue":"Worn down hero dedicated at heart","length":6,"date":9},{"number":"17","clue":"Emperor from north east gets only half of capital","length":4,"date":10},{"number":"18","clue":"Love in the air when number dropped into heads of Couple-Up Dating","length":5,"date":19}]}}}]}}}')},"PZd/":function(e,t,l){var n=l("P8UN"),r=l("ys0W")(!0);n(n.S,"Object",{entries:function(e){return r(e)}})},cxuS:function(e,t,l){var n=l("P8UN"),r=l("ys0W")(!1);n(n.S,"Object",{values:function(e){return r(e)}})},v0Fs:function(e,t,l){"use strict";l.r(t);var n=l("2hvn"),r=l("q1tI"),o=l.n(r),c=l("Bl7J"),a=l("vrFN"),u=(l("m210"),l("4DPX"),l("YbXK"),l("cFtU"),l("pJf4"),l("q8oJ"),l("cxuS"),l("rzGZ"),l("Dq+y"),l("8npG"),l("PZd/"),l("Ll4R"),"ac"),i="dn",s={ac:"Across",dn:"Down"},d=function(){function e(e,t){this.x=e,this.y=t}var t=e.prototype;return t.equals=function(e){return null!==e&&this.x===e.x&&this.y===e.y},t.nextCell=function(t,l){void 0===l&&(l=!0);var n=l?1:-1;return t===u?new e(this.x+n,this.y):new e(this.x,this.y+n)},e}(),h=function(){function e(e,t,l,n){this.x=e,this.y=t,this.length=l,this.direction=n}return e.prototype.equals=function(e){return null!==e&&this.x===e.x&&this.y===e.y&&this.length===e.length&&this.direction===e.direction},e}(),f=function(){function e(e,t,l,n,r){this.num=e,this.direction=t,this.clue=l,this.letters=n,this.releaseDate=r}return e.prototype.equals=function(e){return null!==e&&this.num===e.num&&this.direction===e.direction},e}();function g(e,t){for(var l=0;l<e.length;l++){var n=e[l],r=n.x,o=n.y;if(r===t.x&&o===t.y)return!0}return!1}function v(e,t){if(e.direction===u)for(var l=e.x;l<e.x+e.length;l++)if(t.x===l&&t.y===e.y)return!0;if(e.direction===i)for(l=e.y;l<e.y+e.length;l++)if(t.x==e.x&&t.y==l)return!0;return!1}function p(e,t){var l;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(l=function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var l=Object.prototype.toString.call(e).slice(8,-1);"Object"===l&&e.constructor&&(l=e.constructor.name);if("Map"===l||"Set"===l)return Array.from(e);if("Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l))return m(e,t)}(e))||t&&e&&"number"==typeof e.length){l&&(e=l);var n=0;return function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}return(l=e[Symbol.iterator]()).next.bind(l)}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var l=0,n=new Array(t);l<t;l++)n[l]=e[l];return n}function b(e){return o.a.createElement("div",{style:{position:"absolute",width:e.h+1+"px",height:e.v+1+"px",top:e.y+"px",left:e.x+"px"},className:"black-cell"})}function y(e){var t=Object(r.useState)(""),l=t[0],n=t[1],c=e.selected?"cyan":e.highlight?"lightblue":"lightgray";return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",{style:{position:"absolute",width:e.h-1+"px",height:e.v-1+"px",top:e.y+"px",left:e.x+"px",backgroundColor:c},ref:function(t){return t&&e.selected&&t.focus()},onClick:e.onClick,className:"white-cell",type:"text",onKeyUp:function(t){console.log("pressed "+t.key),t.key.match(/^[a-z]$/i)?(n(t.key),e.selectNextCell()):"Backspace"===t.key?(n(""),e.selectNextCell(!1)):"Delete"===t.key?n(""):"Tab"===t.key?e.selectNextClue():"ArrowUp"===t.key?e.moveCell("up"):"ArrowDown"===t.key?e.moveCell("down"):"ArrowLeft"===t.key?e.moveCell("left"):"ArrowRight"===t.key&&e.moveCell("right")},value:l}),o.a.createElement("div",{className:"clue-number",style:{position:"absolute",width:e.h-1+"px",height:e.v-1+"px",top:e.y+"px",left:e.x+2+"px"}},e.number))}function C(e){var t="No clue selected.";if(null!==e.clue){var l=e.clue;t=l.num+" "+l.direction+". "+l.clue+" ("+l.letters+")"}return o.a.createElement("div",{style:{padding:"15px"}},o.a.createElement("span",{style:{fontWeight:"bold",padding:"5px",margin:"5px",backgroundColor:"lightblue"}},t))}function x(e){var t=Object(r.useState)(null),l=t[0],n=t[1],c=Object(r.useState)(null),a=c[0],s=c[1],v=Object(r.useState)(null),p=v[0],m=v[1];console.log("selected clue then clueSeq"),console.log(a),console.log(l);var b=function(e,t,l){for(var n=[],r=[],o=0;o<e;o++)for(var c=0;c<t;c++){for(var a=!1,u=0;u<l.length;u++){var i=l[u];i.x===o&&i.y===c&&(a=!0)}a||r.push(new d(o,c)),n.push([o,c,a])}return[r,n]}(e.v,e.h,e.blackCells),y=b[0],x=b[1],E=function(e,t,l){for(var n=[],r=[],o=1,c=0;c<t;c++)for(var a=0;a<e;a++){var s=0,f=0;if(g(l,new d(a,c))){if(0===a||!g(l,new d(a-1,c))){s=1;for(var v=a+1;v<e&&g(l,new d(v,c));v++)s+=1;s>1&&(n[o]=new h(a,c,s,u))}if(0===c||!g(l,new d(a,c-1))){f=1;for(var p=c+1;p<t&&g(l,new d(a,p));p++)f+=1;f>1&&(r[o]=new h(a,c,f,i))}(s>1||f>1)&&(o+=1)}}return{ac:n,dn:r}}(e.h,e.v,y);if(null!=l)for(var S=0,j=Object.entries(E[l.direction]);S<j.length;S++){var O=j[S],q=O[0],N=O[1],A=e.clues[N.direction][q],D=A[0],J=A[1],W=A[2],z=new f(q,N.direction,D,J,W);N.equals(l)&&!z.equals(a)&&s(z)}function F(e,t){console.log("crossword onClick() "+t+" "+e);var l=E[t][e];n(l),m(new d(l.x,l.y))}return o.a.createElement(o.a.Fragment,null,o.a.createElement("h1",null,e.title),o.a.createElement("p",null,e.preamble),o.a.createElement(C,{clue:a}),o.a.createElement("div",{style:{margin:"5px"},id:"xwd-container"},o.a.createElement(w,{blackCells:e.blackCells,whiteCells:y,cells:x,h:e.h,v:e.h,clues:E,selectedClue:l,setSelectedClue:n,selectedCell:p,setSelectedCell:m})),o.a.createElement(k,{direction:u,clues:e.clues.ac,onClick:F,selectedClue:a}),o.a.createElement(k,{direction:i,clues:e.clues.dn,onClick:F,selectedClue:a}))}function w(e){for(var t={},l=0,n=Object.entries(e.clues.ac);l<n.length;l++){var r=n[l],c=r[0],a=r[1];t[c]=new d(a.x,a.y)}for(var s=0,h=Object.entries(e.clues.dn);s<h.length;s++){var f=h[s],g=f[0],m=f[1];t[g]=new d(m.x,m.y)}function C(t){if(console.log("just clicked"),console.log(t),!(t.x<0||t.x>=e.h||t.y<0||t.y>=e.v||function(t){for(var l=0;l<e.blackCells.length;l++){var n=e.blackCells[l];if(t.x===n.x&&t.y===n.y)return!0}return!1}(t))){e.setSelectedCell(t);for(var l,n=!1,r=p(e.whiteCells);!(l=r()).done;){var o=l.value;t.equals(o)&&(n=!0)}if(n){for(var c=null,a=null,u=0,i=Object.values(e.clues.ac);u<i.length;u++){var s=i[u];if(v(s,t)){if(c=s,e.selectedClue&&!e.selectedClue.equals(c))return console.log("setiting selected clue to"),console.log(c),void e.setSelectedClue(c);break}}for(var d=0,h=Object.values(e.clues.dn);d<h.length;d++){var f=h[d];if(v(f,t))return a=f,console.log("setiting selected clue to"),console.log(a),void e.setSelectedClue(a)}}}}function x(t){void 0===t&&(t=!0);var l=e.selectedCell,n=l.x,r=l.y;e.selectedClue.direction===u&&(t&&n!==e.selectedClue.x+e.selectedClue.length-1?e.setSelectedCell(new d(n+1,r)):t||n===e.selectedClue.x||e.setSelectedCell(new d(n-1,r))),e.selectedClue.direction===i&&(t&&r!==e.selectedClue.y+e.selectedClue.length-1?e.setSelectedCell(new d(n,r+1)):t||r===e.selectedClue.y||e.setSelectedCell(new d(n,r-1)))}function w(t){"up"===t?C(e.selectedCell.nextCell(i,!1)):"down"===t?C(e.selectedCell.nextCell(i,!0)):"left"===t?C(e.selectedCell.nextCell(u,!1)):"right"===t&&C(e.selectedCell.nextCell(u,!0))}function k(){console.log("select next clue"),console.log(e.selectedClue.direction);var t=Object.values(e.clues[e.selectedClue.direction]),l=e.selectedClue.direction===u?i:u,n=Object.values(e.clues[l]);console.log(l);for(var r=0;r<t.length;r++)if(console.log("sel"),console.log(e.selectedClue),console.log("iter"),console.log(t[r]),e.selectedClue.equals(t[r])){var o=void 0;r!==t.length-1?(console.log("setting 1"),o=t[r+1]):(console.log("setting 2"),o=n[0]),e.setSelectedClue(o);var c=new d(o.x,o.y);e.setSelectedCell(c);break}}var E=[];if(null!=e.selectedClue){var S=e.selectedClue,j=S.x,O=S.y,q=S.length,N=S.direction;if(console.log(j),console.log(O),console.log(q),console.log(N),N==u)for(var A=j;A<j+q;A++)E.push(new d(A,O));else for(var D=O;D<O+q;D++)E.push(new d(j,D))}console.log(t),console.log("highlights"),console.log(E);for(var J=0;J<e.cells.length;J++){for(var W=e.cells[J],z=W[0],F=W[1],U=null,P=0,_=Object.entries(t);P<_.length;P++){var B=_[P],I=B[0],X=B[1];X.x===z&&X.y===F&&(U=I)}e.cells[J].push(U);for(var K=!1,R=0;R<E.length;R++)z===E[R].x&&F===E[R].y&&(K=!0);e.cells[J].push(K)}return console.log(e.cells),o.a.createElement("div",{style:{position:"relative",width:30*e.h+"px",height:30*e.v+"px"}},e.cells.map((function(t){var l=t[0],n=t[1],r=t[2],c=t[3],a=t[4];return r?o.a.createElement(b,{h:30,v:30,x:30*l,y:30*n,key:l+e.h*n}):o.a.createElement(y,{h:30,v:30,x:30*l,y:30*n,key:l+e.h*n,number:c,highlight:a,selected:null!==e.selectedCell&&l===e.selectedCell.x&&n===e.selectedCell.y,onClick:function(e){return C(new d(l,n))},selectNextCell:x,selectNextClue:k,moveCell:w})})))}function k(e){var t=null,l=null;return null!==e.selectedClue&&(t=e.selectedClue.num,l=e.selectedClue.direction),o.a.createElement("div",{style:{fontWeight:"bold",width:"300px",display:"inline-block",verticalAlign:"top",margin:"5px"}},o.a.createElement("div",{style:{border:"1px solid black",padding:"5px"}},s[e.direction]),Object.entries(e.clues).map((function(n){var r=n[0],c=n[1],a=e.direction===l&&r===t,u=c[0],i=c[1];return o.a.createElement(E,{number:r,clue:u,len:i,onClick:function(){!function(t){e.onClick(t,e.direction)}(r)},selected:a})})))}function E(e){var t="clue";return e.selected&&(t+=" selected"),o.a.createElement("div",{className:t,onClick:e.onClick},e.number,". ",e.clue," (",e.len,")")}t.default=function(){var e=n.data.allXwd2019Json.edges[0].node,t=e.title,l=e.preamble,r=e.across_size,u=e.down_size,i=e.black_squares,s=e.clues,h={ac:{},dn:{}};s.ac.forEach((function(e){h.ac[e.number]=[e.clue,e.length,e.date]})),s.dn.forEach((function(e){h.dn[e.number]=[e.clue,e.length,e.date]}));var f=i.map((function(e){var t=e[0],l=e[1];return new d(t,l)}));return o.a.createElement(c.a,null,o.a.createElement(a.a,{title:"Crosswords",keywords:["gatsby","application","react"]}),o.a.createElement(x,{title:t,preamble:l,blackCells:f,h:r,v:u,clues:h}))}},ys0W:function(e,t,l){var n=l("QPJK"),r=l("2mBY"),o=l("5SQf"),c=l("BnbX").f;e.exports=function(e){return function(t){for(var l,a=o(t),u=r(a),i=u.length,s=0,d=[];i>s;)l=u[s++],n&&!c.call(a,l)||d.push(e?[l,a[l]]:a[l]);return d}}}}]);
//# sourceMappingURL=component---src-pages-xwd-js-11c16cfcaf68e368475e.js.map