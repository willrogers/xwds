(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{139:function(e,t,a){"use strict";a.r(t);var n=a(7),r=a.n(n),i=a(0),l=a.n(i),s=a(151),o=a(149),c=function(e){function t(t){var a;return(a=e.call(this,t)||this).handleKeyPress=function(e){console.log("pressed "+e.key),a.setState({value:e.key})},a.state={value:""},a}return r()(t,e),t.prototype.render=function(){return l.a.createElement("input",{class:"cell",type:"text",onKeyPress:this.handleKeyPress,value:this.state.value})},t}(l.a.Component);t.default=function(){return l.a.createElement(s.a,null,l.a.createElement(o.a,{title:"Crosswords",keywords:["gatsby","application","react"]}),l.a.createElement("h1",null,"A crossword"),l.a.createElement("p",null,"First crossword."),l.a.createElement("div",{id:"xwd-container"},l.a.createElement(c,null),l.a.createElement(c,null),l.a.createElement(c,null),l.a.createElement(c,null)))}},143:function(e,t,a){"use strict";a.r(t),a.d(t,"graphql",function(){return h}),a.d(t,"StaticQueryContext",function(){return p}),a.d(t,"StaticQuery",function(){return d});var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(142),o=a.n(s);a.d(t,"Link",function(){return o.a}),a.d(t,"withPrefix",function(){return s.withPrefix}),a.d(t,"navigate",function(){return s.navigate}),a.d(t,"push",function(){return s.push}),a.d(t,"replace",function(){return s.replace}),a.d(t,"navigateTo",function(){return s.navigateTo});var c=a(144),u=a.n(c);a.d(t,"PageRenderer",function(){return u.a});var m=a(32);a.d(t,"parsePath",function(){return m.a});var p=r.a.createContext({}),d=function(e){return r.a.createElement(p.Consumer,null,function(t){return e.data||t[e.query]&&t[e.query].data?(e.render||e.children)(e.data?e.data.data:t[e.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function h(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}d.propTypes={data:l.a.object,query:l.a.string.isRequired,render:l.a.func,children:l.a.func}},144:function(e,t,a){var n;e.exports=(n=a(147))&&n.default||n},146:function(e){e.exports={data:{site:{siteMetadata:{title:"Crosswords",parentUrl:"https://wllrg.rs"}}}}},147:function(e,t,a){"use strict";a.r(t);a(33);var n=a(0),r=a.n(n),i=a(4),l=a.n(i),s=a(51),o=a(2),c=function(e){var t=e.location,a=o.default.getResourcesForPathnameSync(t.pathname);return r.a.createElement(s.a,Object.assign({location:t,pageResources:a},a.json))};c.propTypes={location:l.a.shape({pathname:l.a.string.isRequired}).isRequired},t.default=c},148:function(e,t,a){},149:function(e,t,a){"use strict";var n=a(150),r=a(0),i=a.n(r),l=a(4),s=a.n(l),o=a(145),c=a.n(o),u=a(143);function m(e){var t=e.description,a=e.lang,r=e.meta,l=e.keywords,s=e.title;return i.a.createElement(u.StaticQuery,{query:p,render:function(e){var n=t||e.site.siteMetadata.description;return i.a.createElement(c.a,{htmlAttributes:{lang:a},title:s,titleTemplate:"%s | "+e.site.siteMetadata.title,meta:[{name:"description",content:n},{property:"og:title",content:s},{property:"og:description",content:n},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:e.site.siteMetadata.author},{name:"twitter:title",content:s},{name:"twitter:description",content:n}].concat(l.length>0?{name:"keywords",content:l.join(", ")}:[]).concat(r)})},data:n})}m.defaultProps={lang:"en",meta:[],keywords:[]},m.propTypes={description:s.a.string,lang:s.a.string,meta:s.a.array,keywords:s.a.arrayOf(s.a.string),title:s.a.string.isRequired},t.a=m;var p="1025518380"},150:function(e){e.exports={data:{site:{siteMetadata:{title:"Crosswords",description:"A subsite for rendering crosswords using Gatsby.",author:"@willrogers"}}}}},151:function(e,t,a){"use strict";var n=a(146),r=a(0),i=a.n(r),l=a(4),s=a.n(l),o=a(143),c=a(145),u=a(7),m=a.n(u),p=function(e){function t(){return e.apply(this,arguments)||this}m()(t,e);var a=t.prototype;return a.componentDidMount=function(){var e=document.createElement("script");e.src=this.props.parentUrl+"/js/menu.js",e.async=!0,document.body.appendChild(e)},a.render=function(){return i.a.createElement("div",{id:"header"},i.a.createElement("div",{id:"menu"},i.a.createElement("div",{id:"logo"},i.a.createElement("div",{id:"monkey"},i.a.createElement("img",{src:this.props.parentUrl+"/static/monkey.png",alt:"monkey"})),i.a.createElement("a",{id:"name-logo",href:this.props.parentUrl+"/index.html"},"Will Rogers")),i.a.createElement("label",{id:"toggle-label"}),i.a.createElement("input",{type:"checkbox",id:"toggle-menu",name:"toggle-label",defaultChecked:!0}),i.a.createElement("nav",null,i.a.createElement("div",{id:"menu-header"},i.a.createElement("a",{href:this.props.parentUrl+"/index.html"},"WR"),i.a.createElement("img",{id:"sidebar-monkey",src:this.props.parentUrl+"/static/monkey.png",alt:"monkey"})),i.a.createElement("ul",{className:"nav-items"},i.a.createElement("li",{className:"header-nav-item"},i.a.createElement("a",{href:this.props.parentUrl+"/index.html"},"Blog")),i.a.createElement("li",{className:"header-nav-item"},i.a.createElement("a",{href:this.props.parentUrl+"/about.html"},"About")),i.a.createElement("li",{className:"header-nav-item"},i.a.createElement("a",{href:this.props.parentUrl+"/links.html"},"Links")),i.a.createElement("li",{className:"header-nav-item"},i.a.createElement("a",{href:"/"},"Crosswords")),i.a.createElement("li",{className:"header-nav-item"},i.a.createElement("a",{href:"https://github.com/willrogers"},i.a.createElement("img",{className:"header-nav-github",src:this.props.parentUrl+"/static/GitHub-Mark-64px.png",alt:"github"}))),i.a.createElement("li",{className:"header-nav-item"},i.a.createElement("a",{href:"https://twitter.com/wrgrs"},i.a.createElement("img",{className:"header-nav-twitter",src:this.props.parentUrl+"/static/Twitter_Logo_Blue.png",alt:"twitter"})))))))},t}(i.a.Component);p.propTypes={siteTitle:s.a.string},p.defaultProps={siteTitle:""};var d=p,h=(a(148),function(e){var t=e.children;return i.a.createElement(o.StaticQuery,{query:"496903280",render:function(e){return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.Helmet,null,i.a.createElement("link",{type:"text/css",rel:"stylesheet",href:"https://wllrg.rs/css/style.css"}),i.a.createElement("link",{href:"https://fonts.googleapis.com/css?family=Mukta+Mahee%7CRaleway",rel:"stylesheet"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"32x32",href:e.site.siteMetadata.parentUrl+"/favicon-32x32.png"}),i.a.createElement("link",{rel:"icon",type:"image/png",sizes:"16x16",href:e.site.siteMetadata.parentUrl+"/favicon-16x16.png"}),i.a.createElement("link",{rel:"shortcut icon",href:"favicon.ico?"})),i.a.createElement(d,{parentUrl:e.site.siteMetadata.parentUrl}),i.a.createElement("div",{style:{margin:"0 auto",maxWidth:960,padding:"0px 1.0875rem 1.45rem",paddingTop:0}},i.a.createElement("main",null,t),i.a.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",i.a.createElement("a",{href:"https://www.gatsbyjs.org"},"Gatsby"))))},data:n})});h.propTypes={children:s.a.node.isRequired};t.a=h}}]);
//# sourceMappingURL=component---src-pages-xwd-js-a4aa6ffdf2cfe63eade2.js.map