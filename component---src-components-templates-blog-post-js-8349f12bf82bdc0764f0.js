(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{167:function(e,t,a){"use strict";a.r(t),a.d(t,"postQuery",function(){return s});var n=a(0),r=a.n(n),i=(a(65),a(180)),s=(a(184),"4263669908");t.default=function(e){var t=e.data.markdownRemark;return r.a.createElement(i.a,{title:t.frontmatter.title,metaDataType:"blog-post",metaData:t.frontmatter},r.a.createElement("article",{className:"post"},r.a.createElement("section",{className:"post-content",dangerouslySetInnerHTML:{__html:t.html}})))}},176:function(e,t,a){"use strict";var n=a(177),r=a(65),i=a(1),s=a.n(i),l=a(0),o=a.n(l),c=a(175),d=a(174),u=a(183),f=(a(164),function(){return o.a.createElement(r.StaticQuery,{query:"1041092198",render:function(e){return o.a.createElement("footer",null,o.a.createElement("h1",null,o.a.createElement("span",null,"© ",(new Date).getFullYear(),", Built by "," "),o.a.createElement(r.Link,{to:"/"},e.site.siteMetadata.author),o.a.createElement("span",null," "),o.a.createElement("a",{className:"footer-github-link",href:"https://github.com/JiwoonKim"},o.a.createElement(d.a,{icon:["fab","github"]}))))},data:n})});f.propTypes={author:s.a.string},f.defaultProps={author:""},c.b.add(u.a),t.a=f},177:function(e){e.exports={data:{site:{siteMetadata:{author:"김지운"}}}}},178:function(e,t,a){"use strict";var n=a(65),r=a(1),i=a.n(r),s=a(0),l=a.n(s),o=a(175),c=a(174),d=a(181),u=a(9),f=a.n(u),p=a(182),m=(a(162),function(e){function t(){return e.apply(this,arguments)||this}f()(t,e);var a=t.prototype;return a.showSettings=function(e){e.preventDefault()},a.render=function(){return l.a.createElement(p.slide,null,l.a.createElement(n.Link,{to:"/"},"Home"),l.a.createElement(n.Link,{to:"/about"},"About"),l.a.createElement(n.Link,{to:"/tags"},"Category"),l.a.createElement(n.Link,{to:"/postlist"},"All Posts"))},t}(l.a.Component)),h=(a(163),function(e){var t=e.title,a=e.metaDataType,n=e.metaData;return l.a.createElement("header",null,l.a.createElement("nav",null,l.a.createElement(m,null)),l.a.createElement("div",{className:"banner-container"},l.a.createElement(g,{title:t,metaDataType:a}),l.a.createElement(y,{metaDataType:a,metaData:n})))}),g=function(e){var t=e.title,a=e.metaDataType;return l.a.createElement("div",{className:"banner-title-container"},l.a.createElement("h1",{className:"tag-decoration tag-decoration-left"},l.a.createElement("span",null,"<h1>")),l.a.createElement(b,{title:t,metaDataType:a}),l.a.createElement("h1",{className:"tag-decoration tag-decoration-right"},l.a.createElement("span",null,"</h1>")))},b=function(e){var t=e.title,a=e.metaDataType;return"blog-post"===a||"all"===a?l.a.createElement("h1",{className:"banner-title"},t):l.a.createElement("h1",null,l.a.createElement("h1",{className:"banner-title"},t),l.a.createElement("span",{className:"banner-title-include-string"},"에 해당하는 글"))},y=function(e){var t=e.metaDataType,a=e.metaData;return"blog-post"===t?l.a.createElement(v,{metaData:a}):"post-list"===t?l.a.createElement(S,{metaData:a}):l.a.createElement(E,null)},E=function(){return l.a.createElement("div",{className:"header-meta-data"})},v=function(e){var t=e.metaData;return l.a.createElement("div",{className:"header-meta-data"},l.a.createElement("span",null,l.a.createElement(c.a,{className:"meta-data-icon",icon:"calendar-alt"}),l.a.createElement("span",null,t.date)),l.a.createElement("span",null,l.a.createElement(c.a,{className:"meta-data-icon",icon:"tags"}),t.tags.map(function(e){return l.a.createElement(n.Link,{to:"tags/"+e.toLowerCase(),className:"tag"},l.a.createElement("span",null,e),l.a.createElement("span",null,"·"))})))},S=function(e){var t=e.metaData;return l.a.createElement("div",{className:"header-meta-data"},l.a.createElement("span",null,l.a.createElement(c.a,{className:"meta-data-icon",icon:"search"}),l.a.createElement("span",{className:"header-posts-count"},t),l.a.createElement("span",null,"matching articles")))};h.propTypes={title:i.a.string},h.defaultProps={title:""},o.b.add(d.a,d.c,d.b);t.a=h},180:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(1),s=a.n(i),l=(a(65),a(178)),o=a(176),c=(a(165),function(e){var t=e.title,a=e.metaDataType,n=e.metaData,i=e.children;return r.a.createElement(r.a.Fragment,null,r.a.createElement(l.a,{title:t,metaDataType:a,metaData:n}),r.a.createElement("main",null,i),r.a.createElement(o.a,null))});c.propTypes={children:s.a.node.isRequired},t.a=c},184:function(e,t,a){"use strict";var n=a(185),r=a(0),i=a.n(r),s=a(65),l=a(186),o=a.n(l);t.a=function(){return i.a.createElement(s.StaticQuery,{query:"2011440971",render:function(e){return i.a.createElement(o.a,{fluid:e.placeholderImage.childImageSharp.fluid})},data:n})}},185:function(e){e.exports={data:{placeholderImage:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAIAAAAC64paAAAACXBIWXMAAAsSAAALEgHS3X78AAACYklEQVQ4y42Uy28SQRjA+dM8efDmwYN6qF6qiSY+Y/WgQRMibY00TaWNBSRSCraYQtHl/bR0KyxQWCgWWAqU8izl/Sq7rLNsRHlVJpvJtzPfb77nDIOcZHSoqZSrp4+KtXIziubaLRysMCZiCYqOoVnhjNEi8RcztdxxeTzc6VBfT+5O2Vhpb+vw4wMdZ0ppWvP9xzLeJoDNThf2W+Nz1+XzNxQubSToSKKW+BDc+WOnkshhSVgeCiGpViZMEg1oxc26Knt+ae3bEtJTZwzE1kXLccG0+sOOlrcvZXvsczPkITfsa20vwIKnhsh+BnjUarT74Gb13CY7KBVJMv3z4N1NszQYsMWM62HNrCis/GxXn0iYls23uz5LPBcv0bH8hUH2XRoM85ySXv7JBtO87jMIvWq+H5GoYIHCLA1ZxD6Qap3Ak8IKfW7TJ50lK6uP9E6RgndHaODtCJ6Z5RyHfnE7j6gRbcKlCYNSt+rtETHTpUGgEP8FYmdNqd/Mo7aiVWTfuH2L9xASvfxxlqr01EYkrJszvNkgW9bH0OuFr+99m+y9IOeyU6zIp/Hubp/yMEztlzFPwOhdvq+nIoS1JNn4t2sugCmVsDvPe2KKolnZLCxhOcAKQRDDXTQaVi46lqYhIBwHTrl3oWqhMRDtaJge37lOBMKo4tfbqhVX0J7snTsWps8uZWuoOQY6CcjpSIF55UvmqNgr5wUwtV1IVdnXtnSfPEB2qjDNqnvczRl0m+j6Jn5lXb6nAQJqinmN0ZEBj03YLzghY8PnTRz80o/GRJZpOLCb0PM9BN7pvUEjx28V00WUg9jIVwAAAABJRU5ErkJggg==",aspectRatio:1,src:"/babydragon/static/6d91c86c0fde632ba4cd01062fd9ccfa/fbe2f/gatsby-astronaut.png",srcSet:"/babydragon/static/6d91c86c0fde632ba4cd01062fd9ccfa/e1fed/gatsby-astronaut.png 75w,\n/babydragon/static/6d91c86c0fde632ba4cd01062fd9ccfa/08283/gatsby-astronaut.png 150w,\n/babydragon/static/6d91c86c0fde632ba4cd01062fd9ccfa/fbe2f/gatsby-astronaut.png 300w,\n/babydragon/static/6d91c86c0fde632ba4cd01062fd9ccfa/59257/gatsby-astronaut.png 450w,\n/babydragon/static/6d91c86c0fde632ba4cd01062fd9ccfa/26d9e/gatsby-astronaut.png 600w,\n/babydragon/static/6d91c86c0fde632ba4cd01062fd9ccfa/a3fa0/gatsby-astronaut.png 800w",sizes:"(max-width: 300px) 100vw, 300px"}}}}}},186:function(e,t,a){"use strict";var n=a(10);t.__esModule=!0,t.default=void 0;var r,i=n(a(9)),s=n(a(41)),l=n(a(98)),o=n(a(99)),c=n(a(0)),d=n(a(1)),u=function(e){var t=(0,o.default)({},e);return t.resolutions&&(t.fixed=t.resolutions,delete t.resolutions),t.sizes&&(t.fluid=t.sizes,delete t.sizes),t},f={},p=function(e){var t=u(e),a=t.fluid?t.fluid.src:t.fixed.src;return f[a]||!1},m=[];var h=function(e,t){(void 0===r&&"undefined"!=typeof window&&window.IntersectionObserver&&(r=new window.IntersectionObserver(function(e){e.forEach(function(e){m.forEach(function(t){t[0]===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(r.unobserve(t[0]),t[1]())})})},{rootMargin:"200px"})),r).observe(e),m.push([e,t])},g=function(e){var t=e.src?'src="'+e.src+'" ':'src="" ',a=e.sizes?'sizes="'+e.sizes+'" ':"",n=e.srcSetWebp?"<source type='image/webp' srcSet=\""+e.srcSetWebp+'" '+a+"/>":"",r=e.srcSet?'<source srcSet="'+e.srcSet+'" '+a+"/>":"",i=e.title?'title="'+e.title+'" ':"",s=e.alt?'alt="'+e.alt+'" ':'alt="" ',l=e.width?'width="'+e.width+'" ':"",o=e.height?'height="'+e.height+'" ':"",c=e.opacity?e.opacity:"1";return"<picture>"+n+r+"<img "+l+o+t+s+i+'style="position:absolute;top:0;left:0;transition:opacity 0.5s;transition-delay:'+(e.transitionDelay?e.transitionDelay:"0.5s")+";opacity:"+c+';width:100%;height:100%;object-fit:cover;object-position:center"/></picture>'},b=c.default.forwardRef(function(e,t){var a=e.style,n=e.onLoad,r=e.onError,i=(0,l.default)(e,["style","onLoad","onError"]);return c.default.createElement("img",(0,o.default)({},i,{onLoad:n,onError:r,ref:t,style:(0,o.default)({position:"absolute",top:0,left:0,width:"100%",height:"100%",objectFit:"cover",objectPosition:"center"},a)}))});b.propTypes={style:d.default.object,onError:d.default.func,onLoad:d.default.func};var y=function(e){function t(t){var a;a=e.call(this,t)||this;var n=!0,r=!1,i=t.fadeIn,l=p(t);!l&&"undefined"!=typeof window&&window.IntersectionObserver&&(n=!1,r=!0),"undefined"==typeof window&&(n=!1),t.critical&&(n=!0,r=!1);var o=!(a.props.critical&&!a.props.fadeIn);return a.state={isVisible:n,imgLoaded:!1,IOSupported:r,fadeIn:i,hasNoScript:o,seenBefore:l},a.imageRef=c.default.createRef(),a.handleImageLoaded=a.handleImageLoaded.bind((0,s.default)((0,s.default)(a))),a.handleRef=a.handleRef.bind((0,s.default)((0,s.default)(a))),a}(0,i.default)(t,e);var a=t.prototype;return a.componentDidMount=function(){if(this.state.isVisible&&"function"==typeof this.props.onStartLoad&&this.props.onStartLoad({wasCached:p(this.props)}),this.props.critical){var e=this.imageRef.current;e&&e.complete&&this.handleImageLoaded()}},a.handleRef=function(e){var t=this;this.state.IOSupported&&e&&h(e,function(){t.state.isVisible||"function"!=typeof t.props.onStartLoad||t.props.onStartLoad({wasCached:p(t.props)}),t.setState({isVisible:!0,imgLoaded:!1})})},a.handleImageLoaded=function(){var e,t,a;e=this.props,t=u(e),a=t.fluid?t.fluid.src:t.fixed.src,f[a]=!0,this.setState({imgLoaded:!0}),this.state.seenBefore&&this.setState({fadeIn:!1}),this.props.onLoad&&this.props.onLoad()},a.render=function(){var e=u(this.props),t=e.title,a=e.alt,n=e.className,r=e.style,i=void 0===r?{}:r,s=e.imgStyle,l=void 0===s?{}:s,d=e.placeholderStyle,f=void 0===d?{}:d,p=e.placeholderClassName,m=e.fluid,h=e.fixed,y=e.backgroundColor,E=e.Tag,v="boolean"==typeof y?"lightgray":y,S=(0,o.default)({opacity:this.state.imgLoaded?0:1,transition:"opacity 0.5s",transitionDelay:this.state.imgLoaded?"0.5s":"0.25s"},l,f),w=(0,o.default)({opacity:this.state.imgLoaded||!1===this.state.fadeIn?1:0,transition:!0===this.state.fadeIn?"opacity 0.5s":"none"},l),L={title:t,alt:this.state.isVisible?"":a,style:S,className:p};if(m){var N=m;return c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:(0,o.default)({position:"relative",overflow:"hidden"},i),ref:this.handleRef,key:"fluid-"+JSON.stringify(N.srcSet)},c.default.createElement(E,{style:{width:"100%",paddingBottom:100/N.aspectRatio+"%"}}),N.base64&&c.default.createElement(b,(0,o.default)({src:N.base64},L)),N.tracedSVG&&c.default.createElement(b,(0,o.default)({src:N.tracedSVG},L)),v&&c.default.createElement(E,{title:t,style:{backgroundColor:v,position:"absolute",top:0,bottom:0,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.35s",right:0,left:0}}),this.state.isVisible&&c.default.createElement("picture",null,N.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:N.srcSetWebp,sizes:N.sizes}),c.default.createElement("source",{srcSet:N.srcSet,sizes:N.sizes}),c.default.createElement(b,{alt:a,title:t,src:N.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t},N))}}))}if(h){var I=h,R=(0,o.default)({position:"relative",overflow:"hidden",display:"inline-block",width:I.width,height:I.height},i);return"inherit"===i.display&&delete R.display,c.default.createElement(E,{className:(n||"")+" gatsby-image-wrapper",style:R,ref:this.handleRef,key:"fixed-"+JSON.stringify(I.srcSet)},I.base64&&c.default.createElement(b,(0,o.default)({src:I.base64},L)),I.tracedSVG&&c.default.createElement(b,(0,o.default)({src:I.tracedSVG},L)),v&&c.default.createElement(E,{title:t,style:{backgroundColor:v,width:I.width,opacity:this.state.imgLoaded?0:1,transitionDelay:"0.25s",height:I.height}}),this.state.isVisible&&c.default.createElement("picture",null,I.srcSetWebp&&c.default.createElement("source",{type:"image/webp",srcSet:I.srcSetWebp,sizes:I.sizes}),c.default.createElement("source",{srcSet:I.srcSet,sizes:I.sizes}),c.default.createElement(b,{alt:a,title:t,width:I.width,height:I.height,src:I.src,style:w,ref:this.imageRef,onLoad:this.handleImageLoaded,onError:this.props.onError})),this.state.hasNoScript&&c.default.createElement("noscript",{dangerouslySetInnerHTML:{__html:g((0,o.default)({alt:a,title:t,width:I.width,height:I.height},I))}}))}return null},t}(c.default.Component);y.defaultProps={critical:!1,fadeIn:!0,alt:"",Tag:"div"};var E=d.default.shape({width:d.default.number.isRequired,height:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string}),v=d.default.shape({aspectRatio:d.default.number.isRequired,src:d.default.string.isRequired,srcSet:d.default.string.isRequired,sizes:d.default.string.isRequired,base64:d.default.string,tracedSVG:d.default.string,srcWebp:d.default.string,srcSetWebp:d.default.string});y.propTypes={resolutions:E,sizes:v,fixed:E,fluid:v,fadeIn:d.default.bool,title:d.default.string,alt:d.default.string,className:d.default.oneOfType([d.default.string,d.default.object]),critical:d.default.bool,style:d.default.object,imgStyle:d.default.object,placeholderStyle:d.default.object,placeholderClassName:d.default.string,backgroundColor:d.default.oneOfType([d.default.string,d.default.bool]),onLoad:d.default.func,onError:d.default.func,onStartLoad:d.default.func,Tag:d.default.string};var S=y;t.default=S}}]);
//# sourceMappingURL=component---src-components-templates-blog-post-js-8349f12bf82bdc0764f0.js.map