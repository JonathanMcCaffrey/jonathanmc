(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{153:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),c=n(0),o=n(147),l=n.n(o),i=n(154),u=n(160),s=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).renderBlogList=function(){var e=0;return t.props.data.blog.edges.map(function(n){return e++,c.createElement("div",{key:e},Object(u.a)(n.node.frontmatter.cover,t.props.data,"i"+e),c.createElement("div",{className:l.a.inner},c.createElement("p",{className:l.a.blogInfo},c.createElement("b",null,"Created on:")," ",n.node.frontmatter.created," ",c.createElement("br",null),c.createElement("b",null,"Updated on:")," ",n.node.frontmatter.lastUpdated),c.createElement(i.a,{to:n.node.fields.slug},c.createElement("h1",{className:l.a.blogTitle},n.node.frontmatter.title)),c.createElement("div",{dangerouslySetInnerHTML:{__html:n.node.html}})))})},t}return a()(t,e),t.prototype.render=function(){return c.createElement("div",null," ",this.renderBlogList())},t}(c.Component),m=n(158),d=n(161),f=n(156),p=n(159);n.d(t,"default",function(){return h}),n.d(t,"pageQuery",function(){return v});var h=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return c.createElement(d.a,null,c.createElement("div",{className:l.a.blogList},c.createElement(m.a,{data:this.props.data})),c.createElement("div",{className:l.a.header},c.createElement(p.a,null)),c.createElement("div",{className:l.a.sidebar},c.createElement(f.a,{selected:"/blog/"})),c.createElement("div",{className:l.a.content},c.createElement(s,{data:this.props.data})),c.createElement("div",{className:l.a.spacer}))},t}(c.Component),v="2813026908"},154:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(4),o=n.n(c),l=n(33),i=n.n(l);n.d(t,"a",function(){return i.a});n(155),a.a.createContext({});o.a.object,o.a.string.isRequired,o.a.func,o.a.func},155:function(e,t,n){var r;e.exports=(r=n(157))&&r.default||r},156:function(e,t,n){"use strict";n.d(t,"a",function(){return u});n(163);var r=n(7),a=n.n(r),c=n(0),o=n(147),l=n.n(o),i=n(154),u=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).menu=function(e){return"/"===e&&(e="/about/"),c.createElement("div",{className:l.a.menu},t.menuItem("/about/","About",e),t.menuItem("/blog/","Blog",e))},t.menuItem=function(e,t,n){return c.createElement("div",null,c.createElement(i.a,{to:e},c.createElement("div",{className:l.a.item+" "+l.a.name+(e===n?" "+l.a.selected:"")},t)))},t}return a()(t,e),t.prototype.render=function(){return c.createElement("div",null,this.menu(this.props.selected))},t}(c.Component)},157:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),c=n(4),o=n.n(c),l=n(55),i=n(2),u=function(e){var t=e.location,n=i.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:o.a.shape({pathname:o.a.string.isRequired}).isRequired},t.default=u},158:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(7),a=n.n(r),c=n(0),o=n(147),l=n.n(o),i=n(154),u=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).renderBlogList=function(){var e=0;return t.props.data.blog.edges.map(function(t){return e++,c.createElement("div",{className:l.a.inner,key:e},c.createElement(i.a,{to:t.node.fields.slug},c.createElement("h1",null,t.node.frontmatter.title)),c.createElement("p",null,t.node.frontmatter.excerpt," "))})},t}return a()(t,e),t.prototype.render=function(){return c.createElement("div",null," ",this.renderBlogList())},t}(c.Component)},159:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r=n(7),a=n.n(r),c=n(0),o=n(147),l=n.n(o),i=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return c.createElement("div",{className:l.a.inner},c.createElement("h1",null,"Jonathan McCaffrey"))},t}(c.Component)},160:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return d});var r=n(0),a=n(147),c=n.n(a),o=n(164),l=n.n(o),i=n(165),u=n.n(i),s=function(e,t,n){return t.images.edges.map(function(t){if(t.node.relativePath===e)return r.createElement(l.a,{key:"bi_"+n,Tag:"section",fluid:t.node.childImageSharp.fluid,className:c.a.coverImg})})},m=function(e,t,n){return t.images.edges.map(function(t){if(t.node.relativePath===e)return r.createElement(u.a,{key:"i_"+n,Tag:"section",fluid:t.node.childImageSharp.fluid,className:c.a.coverImg})})},d=function(e,t,n){return t.content.edges.map(function(t){if(t.node.frontmatter.title===e)return r.createElement("div",{className:c.a.inner,key:"div_"+n},r.createElement("h1",null," ",t.node.frontmatter.title),r.createElement("div",{dangerouslySetInnerHTML:{__html:t.node.html}}))})}},161:function(e,t,n){"use strict";var r=n(0),a=n(147),c=n.n(a),o=n(162),l=n(7),i=n.n(l),u=function(e){function t(){return e.apply(this,arguments)||this}return i()(t,e),t.prototype.render=function(){return r.createElement("div",{className:c.a.footer},r.createElement("div",{className:c.a.footerText},"Like this website? Check it out on my"," ",r.createElement("a",{href:"https://github.com/JonathanMcCaffrey/website-jonathanmc"},"github"),"."))},t}(r.Component);t.a=function(e){var t=e.children;return r.createElement("div",null,r.createElement(o.Helmet,null,r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.createElement("title",null,"Jonathan McCaffrey"),r.createElement("link",{rel:"canonical",href:"https://jonathanmc.dev/"})),r.createElement("div",{className:c.a.contentGrid},t),r.createElement("div",{className:c.a.content},r.createElement(u,null)))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-919692e2a3b9fcbaa611.js.map