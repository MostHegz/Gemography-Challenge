(this["webpackJsonpgemography-challenge"]=this["webpackJsonpgemography-challenge"]||[]).push([[0],{13:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(1),r=a.n(c),s=a(7),i=a.n(s),o=(a(13),a(2));var j=function(e){var t=e.owner,a=t.avatar_url,c=t.login;return Object(n.jsx)("div",{className:"dtc pa3 v-mid h-mid",children:Object(n.jsx)("img",{alt:c,src:a,className:"br4 h-100 avatar"})})};var l=function(e){var t=e.repoData,a=e.owner,c=t.description,r=t.open_issues_count,s=t.name,i=t.html_url,o=t.stargazers_count,j=t.created_at,l=Math.floor((new Date-new Date(j))/864e5);return Object(n.jsxs)("div",{className:"dtc v-top pl3-ns pa1 w-80-ns w-70 w-90-l",children:[Object(n.jsx)("h1",{className:"lh-copy mv0 v-top f1-ns f4",children:Object(n.jsx)("a",{className:"dark-gray",href:i,children:s})}),Object(n.jsx)("h2",{className:"f4-ns f6 ma2-ns ma2",children:c}),Object(n.jsxs)("div",{className:"dib mt2 mt3-ns",children:[Object(n.jsx)("p",{className:"ba bw1 pa1 mv2-ns ma1 di f5 br2",children:"Stars: ".concat(o)}),Object(n.jsx)("p",{className:"ba bw1 pa1 mv2-ns ma1 di f5 br2",children:"Issues: ".concat(r)})]}),Object(n.jsx)("div",{className:"dib",children:Object(n.jsxs)("p",{className:"pa1 f5-ns f7",children:[Object(n.jsx)("span",{children:"Submitted ".concat(l," days ago by ")}),Object(n.jsx)("a",{href:a.html_url,children:a.login})]})})]})};var b=function(e){var t=e.repoData,a=e.owner;return Object(n.jsxs)("div",{className:"dt pv2 pv2-m pv2-ns w-95 bg-light-gray br4 shadow-3 ma3 grow",children:[Object(n.jsx)(j,{owner:a}),Object(n.jsx)(l,{repoData:t,owner:a})]})},u=a(6);var d=function(){var e=Object(c.useState)(1),t=Object(o.a)(e,2),a=t[0],r=t[1],s=function(e){var t=Object(c.useState)(!0),a=Object(o.a)(t,2),n=a[0],r=a[1],s=Object(c.useState)(!1),i=Object(o.a)(s,2),j=i[0],l=i[1],b=Object(c.useState)([]),d=Object(o.a)(b,2),h=d[0],O=d[1],m=Object(c.useState)(!1),p=Object(o.a)(m,2),f=p[0],v=p[1];Object(c.useEffect)((function(){r(!0);var t=g();fetch("https://api.github.com/search/repositories?q=created:%3E".concat(t,"&sort=stars&order=desc&page=").concat(e)).then((function(e){if(200===e.status)return e.json();403===e.status&&l(!0)})).then((function(e){return O((function(t){return[].concat(Object(u.a)(t),Object(u.a)(e.items))}))})).then((function(){e>33&&v(!0)})).then(r(!1)).catch((function(e){return l(!0)}))}),[e]);var g=function(){var e=new Date;e.setDate(e.getDate()-30);var t=String(e.getDate()).padStart(2,"0"),a=String(e.getMonth()+1).padStart(2,"0");return e.getFullYear()+"-"+a+"-"+t};return{loading:n,error:j,metaData:h,reachedFinalPage:f}}(a),i=s.loading,j=s.error,l=s.metaData,d=s.reachedFinalPage,h=Object(c.useRef)(null),O=Object(c.useCallback)((function(e){i||(h.current&&h.current.disconnect(),h.current=new IntersectionObserver((function(e){e[0].isIntersecting&&!d&&r((function(e){return e+1}))})),e&&h.current.observe(e))}),[i,d]),m=l.map((function(e,t){return l.length===t+1?j?Object(n.jsx)("h1",{children:" ERROR"}):Object(n.jsxs)("div",{children:[Object(n.jsx)(b,{repoData:e,owner:e.owner}),Object(n.jsx)("h1",{className:"f2 gray tc",ref:O,children:"Loading More..."})]},e.id):Object(n.jsx)(b,{repoData:e,owner:e.owner},e.id)}));return Object(n.jsx)("div",{className:"container",children:m})};var h=function(){return Object(n.jsx)("div",{className:"App",children:Object(n.jsx)(d,{})})};a(14);i.a.render(Object(n.jsx)(r.a.StrictMode,{children:Object(n.jsx)(h,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.443dad15.chunk.js.map