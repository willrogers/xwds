(self.webpackChunkxwds=self.webpackChunkxwds||[]).push([[223],{8828:function(e){"use strict";e.exports=Object.assign},9914:function(e,t,r){"use strict";r.d(t,{A:function(){return u}});var n=r(6540),o=r(4794),i=r(8154),a=r(7387);let c=function(e){function t(){return e.apply(this,arguments)||this}(0,a.A)(t,e);var r=t.prototype;return r.componentDidMount=function(){const e=document.createElement("script");e.src=this.props.parentUrl+"/js/menu.js",e.async=!0,document.body.appendChild(e)},r.render=function(){return n.createElement("div",{id:"header"},n.createElement("div",{id:"menu"},n.createElement("div",{id:"logo"},n.createElement("div",{id:"logo-img"},n.createElement("img",{src:this.props.parentUrl+"/static/logo.png",alt:"pattern"})),n.createElement("a",{id:"name-logo",href:this.props.parentUrl+"/index.html"},"Will Rogers")),n.createElement("label",{id:"toggle-label"}),n.createElement("input",{type:"checkbox",id:"toggle-menu",name:"toggle-label",defaultChecked:!0}),n.createElement("nav",null,n.createElement("div",{id:"menu-header"},n.createElement("a",{href:this.props.parentUrl+"/index.html"},"WR"),n.createElement("img",{id:"sidebar-logo",src:this.props.parentUrl+"/static/logo.png",alt:"pattern"})),n.createElement("ul",{className:"nav-items"},n.createElement("li",{className:"header-nav-item"},n.createElement("a",{href:this.props.parentUrl+"/index.html"},"Blog")),n.createElement("li",{className:"header-nav-item"},n.createElement("a",{href:this.props.parentUrl+"/about.html"},"About")),n.createElement("li",{className:"header-nav-item"},n.createElement("a",{href:this.props.parentUrl+"/links.html"},"Links")),n.createElement("li",{className:"header-nav-item"},n.createElement("a",{href:this.props.parentUrl+"/xwds"},"Crosswords")),n.createElement("li",{className:"header-nav-item"},n.createElement("a",{href:"https://github.com/willrogers"},n.createElement("img",{className:"header-nav-github",src:this.props.parentUrl+"/static/GitHub-Mark-64px.png",alt:"github"}))),n.createElement("li",{className:"header-nav-item"},n.createElement("a",{href:"https://bsky.app/profile/wrgrs.bsky.social"},n.createElement("img",{className:"header-nav-bluesky",src:this.props.parentUrl+"/static/bluesky.svg",alt:"twitter"})))))))},t}(n.Component);var s=c;var u=e=>{let{children:t}=e;return n.createElement(o.StaticQuery,{query:"2742784427",render:e=>n.createElement(n.Fragment,null,n.createElement(i.m,null,n.createElement("link",{type:"text/css",rel:"stylesheet",href:"https://wllrg.rs/css/style.css"}),n.createElement("link",{href:"https://fonts.googleapis.com/css?family=Mukta+Mahee%7CRaleway",rel:"stylesheet"}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:`${e.site.siteMetadata.parentUrl}/favicon-32x32.png`}),n.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:`${e.site.siteMetadata.parentUrl}/favicon-16x16.png`}),n.createElement("link",{rel:"shortcut icon",href:"favicon.ico?"})),n.createElement(s,{parentUrl:e.site.siteMetadata.parentUrl}),n.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},n.createElement("main",null,t)))})}},7528:function(e,t,r){"use strict";var n=r(6540),o=r(8154),i=r(4794);function a(e){let{description:t,lang:r,meta:a,keywords:s,title:u}=e;return n.createElement(i.StaticQuery,{query:c,render:e=>{const i=t||e.site.siteMetadata.description;return n.createElement(o.A,{htmlAttributes:{lang:r},title:u,titleTemplate:`%s | ${e.site.siteMetadata.title}`,meta:[{name:"description",content:i},{property:"og:title",content:u},{property:"og:description",content:i},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:u},{name:"twitter:description",content:i}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(a)})}})}a.defaultProps={lang:"en",meta:[],keywords:[]},t.A=a;const c="3128451518"},115:function(e){var t="undefined"!=typeof Element,r="function"==typeof Map,n="function"==typeof Set,o="function"==typeof ArrayBuffer&&!!ArrayBuffer.isView;function i(e,a){if(e===a)return!0;if(e&&a&&"object"==typeof e&&"object"==typeof a){if(e.constructor!==a.constructor)return!1;var c,s,u,l;if(Array.isArray(e)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(!i(e[s],a[s]))return!1;return!0}if(r&&e instanceof Map&&a instanceof Map){if(e.size!==a.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;for(l=e.entries();!(s=l.next()).done;)if(!i(s.value[1],a.get(s.value[0])))return!1;return!0}if(n&&e instanceof Set&&a instanceof Set){if(e.size!==a.size)return!1;for(l=e.entries();!(s=l.next()).done;)if(!a.has(s.value[0]))return!1;return!0}if(o&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(a)){if((c=e.length)!=a.length)return!1;for(s=c;0!=s--;)if(e[s]!==a[s])return!1;return!0}if(e.constructor===RegExp)return e.source===a.source&&e.flags===a.flags;if(e.valueOf!==Object.prototype.valueOf&&"function"==typeof e.valueOf&&"function"==typeof a.valueOf)return e.valueOf()===a.valueOf();if(e.toString!==Object.prototype.toString&&"function"==typeof e.toString&&"function"==typeof a.toString)return e.toString()===a.toString();if((c=(u=Object.keys(e)).length)!==Object.keys(a).length)return!1;for(s=c;0!=s--;)if(!Object.prototype.hasOwnProperty.call(a,u[s]))return!1;if(t&&e instanceof Element)return!1;for(s=c;0!=s--;)if(("_owner"!==u[s]&&"__v"!==u[s]&&"__o"!==u[s]||!e.$$typeof)&&!i(e[u[s]],a[u[s]]))return!1;return!0}return e!=e&&a!=a}e.exports=function(e,t){try{return i(e,t)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}}},8154:function(e,t,r){"use strict";r.d(t,{m:function(){return de}});var n,o,i,a,c=r(5556),s=r.n(c),u=r(2098),l=r.n(u),f=r(115),p=r.n(f),d=r(6540),m=r(8828),h=r.n(m),y="bodyAttributes",g="htmlAttributes",b="titleAttributes",v={BASE:"base",BODY:"body",HEAD:"head",HTML:"html",LINK:"link",META:"meta",NOSCRIPT:"noscript",SCRIPT:"script",STYLE:"style",TITLE:"title"},T=(Object.keys(v).map((function(e){return v[e]})),"charset"),w="cssText",E="href",A="http-equiv",C="innerHTML",O="itemprop",S="name",k="property",j="rel",x="src",P="target",L={accesskey:"accessKey",charset:"charSet",class:"className",contenteditable:"contentEditable",contextmenu:"contextMenu","http-equiv":"httpEquiv",itemprop:"itemProp",tabindex:"tabIndex"},M="defaultTitle",I="defer",N="encodeSpecialCharacters",U="onChangeClientState",R="titleTemplate",_=Object.keys(L).reduce((function(e,t){return e[L[t]]=t,e}),{}),q=[v.NOSCRIPT,v.SCRIPT,v.STYLE],B="data-react-helmet",D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},H=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},Y=function(e,t){var r={};for(var n in e)t.indexOf(n)>=0||Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n]);return r},z=function(e){return!1===(!(arguments.length>1&&void 0!==arguments[1])||arguments[1])?String(e):String(e).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")},K=function(e){var t=G(e,v.TITLE),r=G(e,R);if(r&&t)return r.replace(/%s/g,(function(){return Array.isArray(t)?t.join(""):t}));var n=G(e,M);return t||n||void 0},W=function(e){return G(e,U)||function(){}},$=function(e,t){return t.filter((function(t){return void 0!==t[e]})).map((function(t){return t[e]})).reduce((function(e,t){return F({},e,t)}),{})},V=function(e,t){return t.filter((function(e){return void 0!==e[v.BASE]})).map((function(e){return e[v.BASE]})).reverse().reduce((function(t,r){if(!t.length)for(var n=Object.keys(r),o=0;o<n.length;o++){var i=n[o].toLowerCase();if(-1!==e.indexOf(i)&&r[i])return t.concat(r)}return t}),[])},Q=function(e,t,r){var n={};return r.filter((function(t){return!!Array.isArray(t[e])||(void 0!==t[e]&&te("Helmet: "+e+' should be of type "Array". Instead found type "'+D(t[e])+'"'),!1)})).map((function(t){return t[e]})).reverse().reduce((function(e,r){var o={};r.filter((function(e){for(var r=void 0,i=Object.keys(e),a=0;a<i.length;a++){var c=i[a],s=c.toLowerCase();-1===t.indexOf(s)||r===j&&"canonical"===e[r].toLowerCase()||s===j&&"stylesheet"===e[s].toLowerCase()||(r=s),-1===t.indexOf(c)||c!==C&&c!==w&&c!==O||(r=c)}if(!r||!e[r])return!1;var u=e[r].toLowerCase();return n[r]||(n[r]={}),o[r]||(o[r]={}),!n[r][u]&&(o[r][u]=!0,!0)})).reverse().forEach((function(t){return e.push(t)}));for(var i=Object.keys(o),a=0;a<i.length;a++){var c=i[a],s=h()({},n[c],o[c]);n[c]=s}return e}),[]).reverse()},G=function(e,t){for(var r=e.length-1;r>=0;r--){var n=e[r];if(n.hasOwnProperty(t))return n[t]}return null},J=(n=Date.now(),function(e){var t=Date.now();t-n>16?(n=t,e(t)):setTimeout((function(){J(e)}),0)}),X=function(e){return clearTimeout(e)},Z="undefined"!=typeof window?window.requestAnimationFrame&&window.requestAnimationFrame.bind(window)||window.webkitRequestAnimationFrame||window.mozRequestAnimationFrame||J:r.g.requestAnimationFrame||J,ee="undefined"!=typeof window?window.cancelAnimationFrame||window.webkitCancelAnimationFrame||window.mozCancelAnimationFrame||X:r.g.cancelAnimationFrame||X,te=function(e){return console&&"function"==typeof console.warn&&console.warn(e)},re=null,ne=function(e,t){var r=e.baseTag,n=e.bodyAttributes,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.onChangeClientState,u=e.scriptTags,l=e.styleTags,f=e.title,p=e.titleAttributes;ae(v.BODY,n),ae(v.HTML,o),ie(f,p);var d={baseTag:ce(v.BASE,r),linkTags:ce(v.LINK,i),metaTags:ce(v.META,a),noscriptTags:ce(v.NOSCRIPT,c),scriptTags:ce(v.SCRIPT,u),styleTags:ce(v.STYLE,l)},m={},h={};Object.keys(d).forEach((function(e){var t=d[e],r=t.newTags,n=t.oldTags;r.length&&(m[e]=r),n.length&&(h[e]=d[e].oldTags)})),t&&t(),s(e,m,h)},oe=function(e){return Array.isArray(e)?e.join(""):e},ie=function(e,t){void 0!==e&&document.title!==e&&(document.title=oe(e)),ae(v.TITLE,t)},ae=function(e,t){var r=document.getElementsByTagName(e)[0];if(r){for(var n=r.getAttribute(B),o=n?n.split(","):[],i=[].concat(o),a=Object.keys(t),c=0;c<a.length;c++){var s=a[c],u=t[s]||"";r.getAttribute(s)!==u&&r.setAttribute(s,u),-1===o.indexOf(s)&&o.push(s);var l=i.indexOf(s);-1!==l&&i.splice(l,1)}for(var f=i.length-1;f>=0;f--)r.removeAttribute(i[f]);o.length===i.length?r.removeAttribute(B):r.getAttribute(B)!==a.join(",")&&r.setAttribute(B,a.join(","))}},ce=function(e,t){var r=document.head||document.querySelector(v.HEAD),n=r.querySelectorAll(e+"["+B+"]"),o=Array.prototype.slice.call(n),i=[],a=void 0;return t&&t.length&&t.forEach((function(t){var r=document.createElement(e);for(var n in t)if(t.hasOwnProperty(n))if(n===C)r.innerHTML=t.innerHTML;else if(n===w)r.styleSheet?r.styleSheet.cssText=t.cssText:r.appendChild(document.createTextNode(t.cssText));else{var c=void 0===t[n]?"":t[n];r.setAttribute(n,c)}r.setAttribute(B,"true"),o.some((function(e,t){return a=t,r.isEqualNode(e)}))?o.splice(a,1):i.push(r)})),o.forEach((function(e){return e.parentNode.removeChild(e)})),i.forEach((function(e){return r.appendChild(e)})),{oldTags:o,newTags:i}},se=function(e){return Object.keys(e).reduce((function(t,r){var n=void 0!==e[r]?r+'="'+e[r]+'"':""+r;return t?t+" "+n:n}),"")},ue=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[L[r]||r]=e[r],t}),t)},le=function(e,t,r){switch(e){case v.TITLE:return{toComponent:function(){return e=t.title,r=t.titleAttributes,(n={key:e})[B]=!0,o=ue(r,n),[d.createElement(v.TITLE,o,e)];var e,r,n,o},toString:function(){return function(e,t,r,n){var o=se(r),i=oe(t);return o?"<"+e+" "+B+'="true" '+o+">"+z(i,n)+"</"+e+">":"<"+e+" "+B+'="true">'+z(i,n)+"</"+e+">"}(e,t.title,t.titleAttributes,r)}};case y:case g:return{toComponent:function(){return ue(t)},toString:function(){return se(t)}};default:return{toComponent:function(){return function(e,t){return t.map((function(t,r){var n,o=((n={key:r})[B]=!0,n);return Object.keys(t).forEach((function(e){var r=L[e]||e;if(r===C||r===w){var n=t.innerHTML||t.cssText;o.dangerouslySetInnerHTML={__html:n}}else o[r]=t[e]})),d.createElement(e,o)}))}(e,t)},toString:function(){return function(e,t,r){return t.reduce((function(t,n){var o=Object.keys(n).filter((function(e){return!(e===C||e===w)})).reduce((function(e,t){var o=void 0===n[t]?t:t+'="'+z(n[t],r)+'"';return e?e+" "+o:o}),""),i=n.innerHTML||n.cssText||"",a=-1===q.indexOf(e);return t+"<"+e+" "+B+'="true" '+o+(a?"/>":">"+i+"</"+e+">")}),"")}(e,t,r)}}}},fe=function(e){var t=e.baseTag,r=e.bodyAttributes,n=e.encode,o=e.htmlAttributes,i=e.linkTags,a=e.metaTags,c=e.noscriptTags,s=e.scriptTags,u=e.styleTags,l=e.title,f=void 0===l?"":l,p=e.titleAttributes;return{base:le(v.BASE,t,n),bodyAttributes:le(y,r,n),htmlAttributes:le(g,o,n),link:le(v.LINK,i,n),meta:le(v.META,a,n),noscript:le(v.NOSCRIPT,c,n),script:le(v.SCRIPT,s,n),style:le(v.STYLE,u,n),title:le(v.TITLE,{title:f,titleAttributes:p},n)}},pe=l()((function(e){return{baseTag:V([E,P],e),bodyAttributes:$(y,e),defer:G(e,I),encode:G(e,N),htmlAttributes:$(g,e),linkTags:Q(v.LINK,[j,E],e),metaTags:Q(v.META,[S,T,A,k,O],e),noscriptTags:Q(v.NOSCRIPT,[C],e),onChangeClientState:W(e),scriptTags:Q(v.SCRIPT,[x,C],e),styleTags:Q(v.STYLE,[w],e),title:K(e),titleAttributes:$(b,e)}}),(function(e){re&&ee(re),e.defer?re=Z((function(){ne(e,(function(){re=null}))})):(ne(e),re=null)}),fe)((function(){return null})),de=(o=pe,a=i=function(e){function t(){return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}(this,e.apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),t.prototype.shouldComponentUpdate=function(e){return!p()(this.props,e)},t.prototype.mapNestedChildrenToProps=function(e,t){if(!t)return null;switch(e.type){case v.SCRIPT:case v.NOSCRIPT:return{innerHTML:t};case v.STYLE:return{cssText:t}}throw new Error("<"+e.type+" /> elements are self-closing and can not contain children. Refer to our API for more information.")},t.prototype.flattenArrayTypeChildren=function(e){var t,r=e.child,n=e.arrayTypeChildren,o=e.newChildProps,i=e.nestedChildren;return F({},n,((t={})[r.type]=[].concat(n[r.type]||[],[F({},o,this.mapNestedChildrenToProps(r,i))]),t))},t.prototype.mapObjectTypeChildren=function(e){var t,r,n=e.child,o=e.newProps,i=e.newChildProps,a=e.nestedChildren;switch(n.type){case v.TITLE:return F({},o,((t={})[n.type]=a,t.titleAttributes=F({},i),t));case v.BODY:return F({},o,{bodyAttributes:F({},i)});case v.HTML:return F({},o,{htmlAttributes:F({},i)})}return F({},o,((r={})[n.type]=F({},i),r))},t.prototype.mapArrayTypeChildrenToProps=function(e,t){var r=F({},t);return Object.keys(e).forEach((function(t){var n;r=F({},r,((n={})[t]=e[t],n))})),r},t.prototype.warnOnInvalidChildren=function(e,t){return!0},t.prototype.mapChildrenToProps=function(e,t){var r=this,n={};return d.Children.forEach(e,(function(e){if(e&&e.props){var o=e.props,i=o.children,a=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return Object.keys(e).reduce((function(t,r){return t[_[r]||r]=e[r],t}),t)}(Y(o,["children"]));switch(r.warnOnInvalidChildren(e,i),e.type){case v.LINK:case v.META:case v.NOSCRIPT:case v.SCRIPT:case v.STYLE:n=r.flattenArrayTypeChildren({child:e,arrayTypeChildren:n,newChildProps:a,nestedChildren:i});break;default:t=r.mapObjectTypeChildren({child:e,newProps:t,newChildProps:a,nestedChildren:i})}}})),t=this.mapArrayTypeChildrenToProps(n,t)},t.prototype.render=function(){var e=this.props,t=e.children,r=Y(e,["children"]),n=F({},r);return t&&(n=this.mapChildrenToProps(t,n)),d.createElement(o,n)},H(t,null,[{key:"canUseDOM",set:function(e){o.canUseDOM=e}}]),t}(d.Component),i.propTypes={base:s().object,bodyAttributes:s().object,children:s().oneOfType([s().arrayOf(s().node),s().node]),defaultTitle:s().string,defer:s().bool,encodeSpecialCharacters:s().bool,htmlAttributes:s().object,link:s().arrayOf(s().object),meta:s().arrayOf(s().object),noscript:s().arrayOf(s().object),onChangeClientState:s().func,script:s().arrayOf(s().object),style:s().arrayOf(s().object),title:s().string,titleAttributes:s().object,titleTemplate:s().string},i.defaultProps={defer:!0,encodeSpecialCharacters:!0},i.peek=o.peek,i.rewind=function(){var e=o.rewind();return e||(e=fe({baseTag:[],bodyAttributes:{},encodeSpecialCharacters:!0,htmlAttributes:{},linkTags:[],metaTags:[],noscriptTags:[],scriptTags:[],styleTags:[],title:"",titleAttributes:{}})),e},a);de.renderStatic=de.rewind,t.A=de},2098:function(e,t,r){"use strict";var n,o=r(6540),i=(n=o)&&"object"==typeof n&&"default"in n?n.default:n;function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}var c=!("undefined"==typeof window||!window.document||!window.document.createElement);e.exports=function(e,t,r){if("function"!=typeof e)throw new Error("Expected reducePropsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==r&&"function"!=typeof r)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(n){if("function"!=typeof n)throw new Error("Expected WrappedComponent to be a React component.");var s,u=[];function l(){s=e(u.map((function(e){return e.props}))),f.canUseDOM?t(s):r&&(s=r(s))}var f=function(e){var t,r;function o(){return e.apply(this,arguments)||this}r=e,(t=o).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,o.peek=function(){return s},o.rewind=function(){if(o.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=s;return s=void 0,u=[],e};var a=o.prototype;return a.UNSAFE_componentWillMount=function(){u.push(this),l()},a.componentDidUpdate=function(){l()},a.componentWillUnmount=function(){var e=u.indexOf(this);u.splice(e,1),l()},a.render=function(){return i.createElement(n,this.props)},o}(o.PureComponent);return a(f,"displayName","SideEffect("+function(e){return e.displayName||e.name||"Component"}(n)+")"),a(f,"canUseDOM",c),f}}}}]);
//# sourceMappingURL=commons-27f7d7670beb61501709.js.map