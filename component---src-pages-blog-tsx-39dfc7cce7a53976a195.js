(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{152:function(e,t,n){"use strict";n.r(t);var r=n(7),a=n.n(r),c=n(0),i=n(147),l=n.n(i),o=n(153),u=n(159),s=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).renderBlogList=function(){var e=0;return t.props.data.blog.edges.map(function(n){return e++,c.createElement("div",{key:e},Object(u.a)(n.node.frontmatter.cover,t.props.data,"i"+e),c.createElement("div",{className:l.a.inner},c.createElement("p",{className:l.a.blogInfo},c.createElement("b",null,"Created on:")," ",n.node.frontmatter.created," ",c.createElement("br",null),c.createElement("b",null,"Updated on:")," ",n.node.frontmatter.lastUpdated),c.createElement(o.a,{to:n.node.fields.slug},c.createElement("h1",{className:l.a.blogTitle},n.node.frontmatter.title)),c.createElement("div",{dangerouslySetInnerHTML:{__html:n.node.html}})))})},t}return a()(t,e),t.prototype.render=function(){return c.createElement("div",null," ",this.renderBlogList())},t}(c.Component),m=n(157),d=n(160),f=n(155),p=n(158);n.d(t,"default",function(){return h}),n.d(t,"pageQuery",function(){return v});var h=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return c.createElement(d.a,null,c.createElement("div",{className:l.a.blogList},c.createElement(m.a,{data:this.props.data})),c.createElement("div",{className:l.a.header},c.createElement(p.a,null)),c.createElement("div",{className:l.a.sidebar},c.createElement(f.a,{selected:"/blog/"})),c.createElement("div",{className:l.a.content},c.createElement(s,{data:this.props.data})),c.createElement("div",{className:l.a.spacer}))},t}(c.Component),v="2813026908"},153:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(4),i=n.n(c),l=n(33),o=n.n(l);n.d(t,"a",function(){return o.a});n(154),a.a.createContext({});i.a.object,i.a.string.isRequired,i.a.func,i.a.func},154:function(e,t,n){var r;e.exports=(r=n(156))&&r.default||r},155:function(e,t,n){"use strict";n.d(t,"a",function(){return u});n(162);var r=n(7),a=n.n(r),c=n(0),i=n(147),l=n.n(i),o=n(153),u=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).menu=function(e){return c.createElement("div",{className:l.a.menu},t.menuItem("/","About",e),t.menuItem("/blog/","Blog",e))},t.menuItem=function(e,t,n){return c.createElement("div",null,c.createElement(o.a,{to:e},c.createElement("div",{className:l.a.item+" "+l.a.name+(e===n?" "+l.a.selected:"")},t)))},t}return a()(t,e),t.prototype.render=function(){return c.createElement("div",null,this.menu(this.props.selected))},t}(c.Component)},156:function(e,t,n){"use strict";n.r(t);n(34);var r=n(0),a=n.n(r),c=n(4),i=n.n(c),l=n(55),o=n(2),u=function(e){var t=e.location,n=o.default.getResourcesForPathnameSync(t.pathname);return n?a.a.createElement(l.a,Object.assign({location:t,pageResources:n},n.json)):null};u.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},t.default=u},157:function(e,t,n){"use strict";n.d(t,"a",function(){return u});var r=n(7),a=n.n(r),c=n(0),i=n(147),l=n.n(i),o=n(153),u=function(e){function t(){for(var t,n=arguments.length,r=new Array(n),a=0;a<n;a++)r[a]=arguments[a];return(t=e.call.apply(e,[this].concat(r))||this).renderBlogList=function(){var e=0;return t.props.data.blog.edges.map(function(t){return e++,c.createElement("div",{className:l.a.inner,key:e},c.createElement(o.a,{to:t.node.fields.slug},c.createElement("h1",null,t.node.frontmatter.title)),c.createElement("p",null,t.node.frontmatter.excerpt," "))})},t}return a()(t,e),t.prototype.render=function(){return c.createElement("div",null," ",this.renderBlogList())},t}(c.Component)},158:function(e,t,n){"use strict";n.d(t,"a",function(){return o});var r=n(7),a=n.n(r),c=n(0),i=n(147),l=n.n(i),o=function(e){function t(){return e.apply(this,arguments)||this}return a()(t,e),t.prototype.render=function(){return c.createElement("div",{className:l.a.inner},c.createElement("h1",null,"Jonathan McCaffrey"))},t}(c.Component)},159:function(e,t,n){"use strict";n.d(t,"a",function(){return s}),n.d(t,"b",function(){return m}),n.d(t,"c",function(){return d}),n.d(t,"d",function(){return f});var r=n(0),a=n(147),c=n.n(a),i=n(163),l=n.n(i),o=n(165),u=n.n(o),s=function(e,t,n){return t.images.edges.map(function(t){if(t.node.relativePath===e)return r.createElement(l.a,{key:"bi_"+n,Tag:"section",fluid:t.node.childImageSharp.fluid,className:c.a.coverImg})})},m=function(e,t,n){return t.images.edges.map(function(t){if(t.node.relativePath===e)return r.createElement(u.a,{key:"i_"+n,Tag:"section",fluid:t.node.childImageSharp.fluid,className:c.a.coverImg})})},d=function(e,t,n,a){return t.images.edges.map(function(t){if(t.node.relativePath===e)return r.createElement(u.a,{key:"i_"+n,Tag:"section",fluid:t.node.childImageSharp.fluid,className:a})})},f=function(e,t,n){return t.content.edges.map(function(t){if(t.node.frontmatter.title===e)return r.createElement("div",{className:c.a.inner,key:"div_"+n},r.createElement("h1",null," ",t.node.frontmatter.title),r.createElement("div",{dangerouslySetInnerHTML:{__html:t.node.html}}))})}},160:function(e,t,n){"use strict";var r=n(0),a=n(147),c=n.n(a),i=n(161),l=n(7),o=n.n(l),u=function(e){function t(){return e.apply(this,arguments)||this}return o()(t,e),t.prototype.render=function(){return r.createElement("div",{className:c.a.footer},r.createElement("div",{className:c.a.footerText},"Like this website? Check it out on my"," ",r.createElement("a",{href:"https://github.com/JonathanMcCaffrey/website-jonathanmc"},"github"),"."))},t}(r.Component);t.a=function(e){var t=e.children;return r.createElement("div",null,r.createElement(i.Helmet,null,r.createElement("meta",{name:"viewport",content:"width=device-width, initial-scale=1"}),r.createElement("title",null,"Jonathan McCaffrey"),r.createElement("link",{rel:"canonical",href:"https://jonathanmc.dev/"})),r.createElement("div",{className:c.a.contentGrid},t),r.createElement("div",{className:c.a.content},r.createElement(u,null)))}}}]);
//# sourceMappingURL=component---src-pages-blog-tsx-39dfc7cce7a53976a195.js.map