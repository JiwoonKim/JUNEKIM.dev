(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{159:function(e,a,t){"use strict";t.r(a),t.d(a,"tagQuery",function(){return m});var n=t(0),l=t.n(n),r=t(55),c=(t(207),t(167)),m="3787927420";a.default=function(e){var a=e.data.allMarkdownRemark.group;return l.a.createElement(c.a,{title:"모든 태크",metaDataType:"all"},l.a.createElement("section",null,a.map(function(e,a){var n="tags/"+t(208).kebabCase(e.fieldValue);return l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(r.Link,{key:a,to:n},e.fieldValue," ","( "+e.totalCount+" )")))})))}},163:function(e,a,t){"use strict";var n=t(164),l=t(55),r=t(1),c=t.n(r),m=t(0),i=t.n(m),s=t(162),u=t(161),o=t(170),E=(t(150),function(){return i.a.createElement(l.StaticQuery,{query:"1041092198",render:function(e){return i.a.createElement("footer",null,i.a.createElement("h1",null,i.a.createElement("span",null,"© ",(new Date).getFullYear(),", Built by "," "),i.a.createElement(l.Link,{to:"/"},e.site.siteMetadata.author),i.a.createElement("span",null," "),i.a.createElement("a",{className:"footer-github-link",href:"https://github.com/JiwoonKim"},i.a.createElement(u.a,{icon:["fab","github"]}))))},data:n})});E.propTypes={author:c.a.string},E.defaultProps={author:""},s.b.add(o.a),a.a=E},164:function(e){e.exports={data:{site:{siteMetadata:{author:"김지운"}}}}},165:function(e,a,t){"use strict";var n=t(55),l=t(1),r=t.n(l),c=t(0),m=t.n(c),i=t(162),s=t(161),u=t(168),o=t(8),E=t.n(o),p=t(169),d=(t(148),function(e){function a(){return e.apply(this,arguments)||this}E()(a,e);var t=a.prototype;return t.showSettings=function(e){e.preventDefault()},t.render=function(){return m.a.createElement(p.slide,null,m.a.createElement(n.Link,{to:"/"},"Home"),m.a.createElement(n.Link,{to:"/about"},"About"),m.a.createElement(n.Link,{to:"/tags"},"Category"),m.a.createElement(n.Link,{to:"/postlist"},"All Posts"))},a}(m.a.Component)),f=(t(149),function(e){var a=e.title,t=e.metaDataType,n=e.metaData;return m.a.createElement("header",null,m.a.createElement("nav",null,m.a.createElement(d,null)),m.a.createElement("div",{className:"banner-container"},m.a.createElement(h,{title:a,metaDataType:t}),m.a.createElement(b,{metaDataType:t,metaData:n})))}),h=function(e){var a=e.title,t=e.metaDataType;return m.a.createElement("div",{className:"banner-title-container"},m.a.createElement("h1",{className:"tag-decoration tag-decoration-left"},m.a.createElement("span",null,"<h1>")),m.a.createElement(g,{title:a,metaDataType:t}),m.a.createElement("h1",{className:"tag-decoration tag-decoration-right"},m.a.createElement("span",null,"</h1>")))},g=function(e){var a=e.title,t=e.metaDataType;return"blog-post"===t||"all"===t?m.a.createElement("h1",{className:"banner-title"},a):m.a.createElement("h1",null,m.a.createElement("h1",{className:"banner-title"},a),m.a.createElement("span",{className:"banner-title-include-string"},"에 해당하는 글"))},b=function(e){var a=e.metaDataType,t=e.metaData;return"blog-post"===a?m.a.createElement(y,{metaData:t}):"post-list"===a?m.a.createElement(D,{metaData:t}):m.a.createElement(v,null)},v=function(){return m.a.createElement("div",{className:"header-meta-data"})},y=function(e){var a=e.metaData;return m.a.createElement("div",{className:"header-meta-data"},m.a.createElement("span",null,m.a.createElement(s.a,{className:"meta-data-icon",icon:"calendar-alt"}),m.a.createElement("span",null,a.date)),m.a.createElement("span",null,m.a.createElement(s.a,{className:"meta-data-icon",icon:"tags"}),a.tags.map(function(e){return m.a.createElement(n.Link,{to:"tags/"+e.toLowerCase(),className:"tag"},m.a.createElement("span",null,e),m.a.createElement("span",null,"·"))})))},D=function(e){var a=e.metaData;return m.a.createElement("div",{className:"header-meta-data"},m.a.createElement("span",null,m.a.createElement(s.a,{className:"meta-data-icon",icon:"search"}),m.a.createElement("span",{className:"header-posts-count"},a),m.a.createElement("span",null,"matching articles")))};f.propTypes={title:r.a.string},f.defaultProps={title:""},i.b.add(u.a,u.c,u.b);a.a=f},167:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(1),c=t.n(r),m=(t(55),t(165)),i=t(163),s=(t(151),function(e){var a=e.title,t=e.metaDataType,n=e.metaData,r=e.children;return l.a.createElement(l.a.Fragment,null,l.a.createElement(m.a,{title:a,metaDataType:t,metaData:n}),l.a.createElement("main",null,r),l.a.createElement(i.a,null))});s.propTypes={children:c.a.node.isRequired},a.a=s}}]);
//# sourceMappingURL=component---src-pages-tags-js-95940c5fb800d130cea5.js.map