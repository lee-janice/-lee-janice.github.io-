"use strict";(self.webpackChunkacozy_space=self.webpackChunkacozy_space||[]).push([[715],{2824:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}});var l,a=n(1880),r=n(7294),c=n(1597),i=n(6403),m=n(2515),u=n(8721),o=function(e){var t=e.quote,n=e.description,l=void 0===n?null:n,a=e.chapternum,c=e.chaptertitle,i=void 0===c?null:c,m=e.pagenum,u=e.notes,o=void 0===u?null:u,s=e.importance,p=(e.tags,e.children);return r.createElement("div",null,r.createElement("blockquote",null,r.createElement("p",null,p||t),r.createElement("footer",null,l?l+"; ":"",r.createElement("em",null,"chapter ",a,i?" ("+i+")":"",", page ",m),"; importance: ",s)),o?r.createElement("div",null,r.createElement("span",{className:"newthought"},"Note: "),o):"",r.createElement("br",null))},s=(0,i.zo)("ul")(l||(l=(0,a.Z)(["\n  list-style-type: none;\n\n  li::before {\n    content: '' !important;\n    padding-right: 0 !important;\n  }\n"]))),p=function(e){var t=e.data,n=e.pageContext,l=t.markdownRemark,a=t.site.siteMetadata.title,i=n.previous,p=n.next,E=t.books.quotes,d=t.books.wikisummary,h=l.frontmatter.date.slice(0,10),f=l.frontmatter.lastupdated.slice(0,10);return r.createElement(m.Z,{title:a},r.createElement(u.Z,{title:l.frontmatter.title,description:l.excerpt}),r.createElement("header",null,r.createElement("h1",null,l.frontmatter.title),r.createElement("p",{className:"subtitle"},l.frontmatter.subtitle),r.createElement("p",{className:"pageinfo"},h," ○ last updated: ",f," ○ topics: ",l.frontmatter.topics.map((function(e,t,n){return r.createElement(c.Link,{to:"/topics/"+e+"/"},t<n.length-1?e+", ":e)})))),r.createElement("article",null,r.createElement("div",{className:"page-content"},r.createElement("div",{dangerouslySetInnerHTML:{__html:l.html}}),d?r.createElement("section",null,r.createElement("h2",null,"Wikipedia Summary"),r.createElement("hr",null),r.createElement("p",null,d)):"",r.createElement("section",null,r.createElement("h2",null,"Quotes"),r.createElement("hr",null),E.map((function(e){return r.createElement(o,Object.assign({key:e.quote,chapternum:e.chapter_number,chaptertitle:e.chapter_title,pagenum:e.page_number},e))}))),r.createElement(s,null,i&&r.createElement("li",null,r.createElement(c.Link,{to:i.fields.slug,rel:"prev"},"← ",i.frontmatter.title)),p&&r.createElement("li",null,r.createElement(c.Link,{to:p.fields.slug,rel:"next"},p.frontmatter.title," →"))))))}}}]);
//# sourceMappingURL=component---src-templates-booknote-tsx-0918b2a00383d30c1e39.js.map