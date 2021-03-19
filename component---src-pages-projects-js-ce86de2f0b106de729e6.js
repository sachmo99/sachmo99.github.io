(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{"16l3":function(n,e,t){"use strict";t.r(e);var r,a,o,i,l,c,p=t("MUpH"),m=t("5D9J"),s=t("q1tI"),u=t.n(s),f=t("Bl7J"),d=t("ckOl"),b=t("Et+L"),h=t("bjXa"),v=t("I/mr"),g=t("sH8X"),x=t("sRKZ"),j=m.a.article(r||(r=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  padding-top: 2.5rem;\n"]))),w=m.a.header(a||(a=Object(p.a)(["\n  display: flex;\n  justify-content: space-between;\n"]))),E=m.a.section(o||(o=Object(p.a)(["\n  ",";\n  margin: 10px 0;\n\n  & > a {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    color: var(--body-color);\n\n    &:hover {\n      color: var(--primary-color);\n    }\n  }\n\n  & svg {\n    fill: currentColor;\n    margin: 0 0.5rem;\n  }\n"])),g.c),k=m.a.section(i||(i=Object(p.a)(["\n  display: flex;\n  flex-direction: column;\n  position: relative;\n"]))),y=Object(m.a)(x.a)(l||(l=Object(p.a)(["\n  > p {\n    display: -webkit-box;\n    -webkit-box-orient: vertical;\n    -webkit-line-clamp: 3;\n    overflow: hidden;\n  }\n"]))),O=function(n){return n.projects.map((function(n){var e=n.frontmatter.title,t=n.frontmatter.demo_link,r=n.frontmatter.repo_link,a="featured project "+e+" demo",o="featured project "+e+" repo";return u.a.createElement(j,{key:e},u.a.createElement(w,null,u.a.createElement(h.a,{href:t||(r||"#"),target:"_blank",rel:"noopener"},u.a.createElement(v.b,null,e)),u.a.createElement(E,null,r&&u.a.createElement("a",{href:r,target:"_blank",rel:"noopener",title:"Repository Link","aria-label":o},u.a.createElement(d.a,{icon:"github",prefix:"fab"})),t&&u.a.createElement("a",{href:t,target:"_blank",rel:"noopener",title:"Demo Link","aria-label":a},u.a.createElement(d.a,{icon:"external-link-alt"})))),u.a.createElement(k,null,u.a.createElement(y,{dangerouslySetInnerHTML:{__html:n.html}}),u.a.createElement(b.a,{techs:n.frontmatter.techs})))}))},H=t("vrFN"),D=t("Q+NF"),J=t("cDEv"),M=t("DHv3"),_=Object(m.a)(v.a)(c||(c=Object(p.a)(["\n  margin-top: 3rem;\n"])));e.default=function(n){var e=n.data.allMarkdownRemark.nodes;return u.a.createElement(f.a,{menuLinks:D.a},u.a.createElement(H.a,{title:"Projects"}),u.a.createElement(J.a,null,u.a.createElement(_,null,"Projects"),u.a.createElement(M.a,null),u.a.createElement(O,{projects:e})))}},DHv3:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r,a=t("MUpH"),o=t("5D9J").a.div(r||(r=Object(a.a)(["\n  height: 1px;\n  width: 100%;\n  margin-top: 3rem;\n  background-color: var(--body-color);\n"])))},"Et+L":function(n,e,t){"use strict";var r,a,o=t("MUpH"),i=t("5D9J"),l=t("q1tI"),c=t.n(l),p=t("ckOl"),m=i.a.section(r||(r=Object(o.a)(["\n  margin-top: 0.8rem;\n  display: flex;\n  flex-wrap: wrap;\n"]))),s=i.a.span(a||(a=Object(o.a)(["\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  font-size: 0.8rem;\n\n  color: var(--body-color);\n  margin: 0 1rem 0.5rem 0;\n\n  & > svg {\n    color: var(--primary-color);\n    height: 0.8rem;\n    margin-right: 0.25rem;\n  }\n"])));e.a=function(n){var e=n.techs;return c.a.createElement(m,null,e.map((function(n){return c.a.createElement(s,{key:n},c.a.createElement(p.a,{icon:"caret-right"}),n)})))}},"I/mr":function(n,e,t){"use strict";t.d(e,"a",(function(){return l})),t.d(e,"b",(function(){return c}));var r,a,o=t("MUpH"),i=t("5D9J"),l=i.a.h1(r||(r=Object(o.a)(["\n  width: 100%;\n  position: relative;\n  font-weight: 800;\n  margin: 20px 0;\n\n  &:first-letter {\n    color: var(--primary-color);\n  }\n\n  &:after {\n    background-color: var(--primary-color);\n    content: '';\n    position: absolute;\n    top: -30px;\n    left: 0;\n    width: 30px;\n    height: 2px;\n  }\n"]))),c=i.a.h2(a||(a=Object(o.a)(["\n  color: var(--title-color);\n  margin: 20px 0;\n  position: relative;\n\n  &:after {\n    background-color: var(--primary-color);\n    content: '';\n    position: absolute;\n    top: -20px;\n    left: 0;\n    width: 30px;\n    height: 2px;\n  }\n"])))},bjXa:function(n,e,t){"use strict";t.d(e,"a",(function(){return o}));var r,a=t("MUpH"),o=t("5D9J").a.a(r||(r=Object(a.a)(["\n  text-decoration: none;\n\n  &:hover > * {\n    cursor: pointer;\n    color: var(--primary-color);\n  }\n"])))},sRKZ:function(n,e,t){"use strict";t.d(e,"a",(function(){return l}));var r,a=t("MUpH"),o=t("5D9J"),i=t("sH8X"),l=o.a.section(r||(r=Object(a.a)(["\n  white-space: pre-line;\n\n  ","\n  max-width: unset;\n  max-height: 180px;\n  position: relative;\n  padding: 10px;\n  margin: 0;\n\n  > p {\n    height: 100%;\n    margin: 0;\n    font-size: 0.8rem;\n    overflow: hidden;\n  }\n"])),i.a)}}]);
//# sourceMappingURL=component---src-pages-projects-js-ce86de2f0b106de729e6.js.map