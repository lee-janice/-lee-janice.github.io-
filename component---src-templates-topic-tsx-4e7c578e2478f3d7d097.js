"use strict";(self.webpackChunkacozy_space=self.webpackChunkacozy_space||[]).push([[55],{3230:function(e,t,a){var l=a(7294),n=a(1597);t.Z=function(e){var t=e.title,a=e.subtitle,r=e.slug,c=e.date,s=e.lastUpdated,i=e.topics,o=e.excerpt,p=e.showExcerpt;return c=c.slice(0,10),s=s.slice(0,10),l.createElement("div",null,l.createElement("h3",null,l.createElement(n.Link,{to:r},t||r)),l.createElement("small",null,c," ○ last updated: ",s," ○ topics: ",i.map((function(e,t,a){return l.createElement(n.Link,{to:"/topics/"+e+"/",key:e},t<a.length-1?e+", ":e)}))),p?l.createElement("p",{dangerouslySetInnerHTML:{__html:o}}):l.createElement("p",{dangerouslySetInnerHTML:{__html:a}}))}},1323:function(e,t,a){a.r(t);var l=a(7294),n=a(2515),r=a(8721),c=a(3230);t.default=function(e){var t=e.data,a=e.pageContext.topic,s=t.site.siteMetadata.title,i=t.site.siteMetadata.lastUpdated,o=t.allMarkdownRemark.edges;return l.createElement(n.Z,{title:s},l.createElement(r.Z,{title:"Topic:"+a+".'",keywords:["blog","gatsby","javascript","react",a]}),l.createElement("header",null,l.createElement("h1",null,"Topic:",a,"."),l.createElement("p",{className:"subtitle"},"Collection of posts on the topic `",a,"`"),l.createElement("p",{className:"pageinfo"},"2021-09-27 ○ last updated: ",i)),l.createElement("article",null,l.createElement("div",{className:"page-content"},o.map((function(e){var t=e.node;return l.createElement(c.Z,{key:t.fields.slug,title:t.frontmatter.title,subtitle:t.frontmatter.subtitle,slug:t.fields.slug,date:t.frontmatter.date,lastUpdated:t.frontmatter.lastupdated,topics:t.frontmatter.topics,excerpt:t.excerpt,showExcerpt:!1})})))))}}}]);
//# sourceMappingURL=component---src-templates-topic-tsx-4e7c578e2478f3d7d097.js.map