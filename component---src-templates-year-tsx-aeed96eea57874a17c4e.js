"use strict";(self.webpackChunkacozy_space=self.webpackChunkacozy_space||[]).push([[354],{3082:function(e,t,r){r.r(t);var n=r(7294),a=r(5444),l=r(5487),c=r(6919),u=r(2619);t.default=function(e){var t=e.data,r=e.pageContext.year,s=t.site.siteMetadata.title,m=t.allFile.group,i=t.allDirectory.edges,o=t.allMarkdownRemark.edges;return n.createElement(l.Z,{title:s},n.createElement(c.Z,{title:"Year:"+r+".",keywords:["journal",r]}),n.createElement("header",null,n.createElement("h1",null,"Year:",r,"."),n.createElement("p",{className:"subtitle"},"Collection of journal entries for ",r,"; entries by month"),n.createElement("p",{className:"pageinfo"},"2021-09-18 ○ last updated: 2021-09-26")),n.createElement("article",null,n.createElement("div",{className:"page-content"},n.createElement("h2",null,"Entries by month"),n.createElement("hr",null),i.map((function(e){var t=e.node,l=(0,u.Z)(t.name),c=m.filter((function(e){return e.fieldValue.slice(-2)===t.name}))[0];if(c)return n.createElement("div",{key:t.name},n.createElement("h3",null,n.createElement(a.Link,{to:"/journal/"+r+"/"+t.name+"/"},l+" "+r)),n.createElement("small",null,c.totalCount," entr",1===c.totalCount?"y":"ies"))})),n.createElement("br",null),n.createElement("h2",null,r," entries"),n.createElement("hr",null),o.map((function(e){var t=e.node,r=t.frontmatter.title||t.fields.slug;return n.createElement("div",{key:t.fields.slug},n.createElement("h3",null,n.createElement(a.Link,{to:t.fields.slug},r)),n.createElement("small",null,t.frontmatter.date),n.createElement("p",{dangerouslySetInnerHTML:{__html:t.excerpt}}))})))))}},2619:function(e,t){t.Z=function(e){switch(+e){case 1:return"January";case 2:return"February";case 3:return"March";case 4:return"April";case 5:return"May";case 6:return"June";case 7:return"July";case 8:return"August";case 9:return"September";case 10:return"October";case 11:return"November";case 12:return"December";default:return""}}}}]);
//# sourceMappingURL=component---src-templates-year-tsx-aeed96eea57874a17c4e.js.map