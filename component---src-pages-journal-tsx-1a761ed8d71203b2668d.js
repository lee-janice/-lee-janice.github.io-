"use strict";(self.webpackChunkacozy_space=self.webpackChunkacozy_space||[]).push([[173],{5043:function(e,t,l){l.r(t);var n=l(7294),a=l(5444),r=l(2376),c=l(6919);t.default=function(e){var t=e.data,l=t.site.siteMetadata.title,s=t.site.siteMetadata.lastUpdated,m=t.allMarkdownRemark.edges,i=t.allDirectory.edges;return n.createElement(r.Z,{title:l},n.createElement(c.Z,{title:"Journal.",keywords:["journal"]}),n.createElement("header",null,n.createElement("h1",null,"Journal."),n.createElement("p",{className:"subtitle"},"Collection of all journal entries; entries by year; recent entries"),n.createElement("p",{className:"pageinfo"},"2021-09-26 ○ last updated: ",s)),n.createElement("article",null,n.createElement("div",{className:"page-content"},n.createElement("h2",null,"Entries by year"),n.createElement("hr",null),i.map((function(e){var t=e.node;return n.createElement("div",{key:t.name},n.createElement("h3",null,n.createElement(a.Link,{to:"/journal/"+t.name+"/"},t.name)))})),n.createElement("br",null),n.createElement("h2",null,"Recent entries"),n.createElement("hr",null),m.map((function(e){var t=e.node,l=t.frontmatter.title||t.fields.slug;return n.createElement("div",{key:t.fields.slug},n.createElement("h3",null,n.createElement(a.Link,{to:t.fields.slug},l)),n.createElement("small",null,t.frontmatter.date," ○ topics: ",t.frontmatter.topics.map((function(e,t,l){return n.createElement(a.Link,{to:"/topics/"+e+"/"},t<l.length-1?e+", ":e)}))),n.createElement("p",{dangerouslySetInnerHTML:{__html:t.frontmatter.subtitle}}))})))))}}}]);
//# sourceMappingURL=component---src-pages-journal-tsx-1a761ed8d71203b2668d.js.map