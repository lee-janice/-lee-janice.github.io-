"use strict";(self.webpackChunkacozy_space=self.webpackChunkacozy_space||[]).push([[354],{3082:function(e,t,n){n.r(t);var r=n(7294),a=n(5444),l=n(5487),c=n(6919),u=n(2619);t.default=function(e){var t=e.data,n=e.pageContext.year,s=t.site.siteMetadata.title,i=t.numEntries.group,m=t.allDirectory.edges,o=t.entries.edges;return r.createElement(l.Z,{title:s},r.createElement(c.Z,{title:"Year:"+n+".",keywords:["journal",n]}),r.createElement("header",null,r.createElement("h1",null,"Year:",n,"."),r.createElement("p",{className:"subtitle"},"Collection of journal entries for ",n,"; entries by month"),r.createElement("p",{className:"pageinfo"},"2021-09-18 ○ last updated: 2021-10-14")),r.createElement("article",null,r.createElement("div",{className:"page-content"},r.createElement("h2",null,"Entries by month"),r.createElement("hr",null),m.map((function(e){var t=e.node,l=(0,u.Z)(t.name),c=i.filter((function(e){return e.fieldValue.slice(-2)===t.name}))[0];if(c)return r.createElement("div",{key:t.name},r.createElement("h3",null,r.createElement(a.Link,{to:"/journal/"+n+"/"+t.name+"/"},l+" "+n)),r.createElement("small",null,c.totalCount," entr",1===c.totalCount?"y":"ies"))})),r.createElement("br",null),r.createElement("h2",null,n," entries"),r.createElement("hr",null),o.map((function(e){var t=e.node,n=t.frontmatter.title||t.fields.slug;return r.createElement("div",{key:t.fields.slug},r.createElement("h3",null,r.createElement(a.Link,{to:t.fields.slug},n)),r.createElement("small",null,t.frontmatter.date," ○ topics: ",t.frontmatter.topics.map((function(e,t,n){return r.createElement(a.Link,{to:"/topics/"+e+"/"},t<n.length-1?e+", ":e)}))),r.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))})))))}},2619:function(e,t){t.Z=function(e){switch(+e){case 1:return"January";case 2:return"February";case 3:return"March";case 4:return"April";case 5:return"May";case 6:return"June";case 7:return"July";case 8:return"August";case 9:return"September";case 10:return"October";case 11:return"November";case 12:return"December";default:return""}}}}]);
//# sourceMappingURL=component---src-templates-year-tsx-ca9b33c0a98f8c058cb7.js.map