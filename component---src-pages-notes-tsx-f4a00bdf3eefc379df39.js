"use strict";(self.webpackChunkacozy_space=self.webpackChunkacozy_space||[]).push([[776],{7501:function(e,t,l){var a=l(7294),n=l(1597);t.Z=function(e){var t=e.title,l=e.subtitle,r=e.slug,s=e.date,c=e.lastUpdated,o=e.topics,i=e.excerpt,u=e.showExcerpt;return s=s.slice(0,10),c=c.slice(0,10),a.createElement("div",null,a.createElement("h3",null,a.createElement(n.Link,{to:r},t||r)),a.createElement("small",null,s," ○ last updated: ",c," ○ topics: ",o.map((function(e,t,l){return a.createElement(n.Link,{to:"/topics/"+e+"/",key:e},t<l.length-1?e+", ":e)}))),u?a.createElement("p",{dangerouslySetInnerHTML:{__html:i}}):a.createElement("p",{dangerouslySetInnerHTML:{__html:l}}))}},1516:function(e,t,l){l.r(t);var a=l(7294),n=l(5283),r=l(8601),s=l(7501);t.default=function(e){var t=e.data,l=t.site.siteMetadata.title,c=t.site.siteMetadata.lastUpdated,o=t.allMarkdownRemark.edges;return a.createElement(n.Z,{title:l},a.createElement(r.Z,{title:"Notes",keywords:["note"]}),a.createElement("header",null,a.createElement("h1",null,"Notes."),a.createElement("p",{className:"subtitle"},"Collection of all notes; recent notes"),a.createElement("p",{className:"pageinfo"},"2021-10-01 ○ last updated: ",c)),a.createElement("article",null,a.createElement("div",{className:"page-content"},a.createElement("h2",null,"Recent notes"),a.createElement("hr",null),o.map((function(e){var t=e.node;return a.createElement(s.Z,{key:t.fields.slug,title:t.frontmatter.title,subtitle:t.frontmatter.subtitle,slug:t.fields.slug,date:t.frontmatter.date,lastUpdated:t.frontmatter.lastupdated,topics:t.frontmatter.topics,excerpt:t.excerpt,showExcerpt:!1})})))))}}}]);
//# sourceMappingURL=component---src-pages-notes-tsx-f4a00bdf3eefc379df39.js.map