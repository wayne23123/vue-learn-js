import{r as d,o as u,c as r,a as t,b as e,w as a,p as v,d as h,e as f,n as g,t as b,F as m}from"./index-2e4f8d1f.js";import{_ as p}from"./_plugin-vue_export-helper-c27b6911.js";const $="/vue-learn-js/assets/title-f6de348c.svg",w={},c=s=>(v("data-v-c41a158b"),s=s(),h(),s),k={class:""},x=c(()=>t("div",{class:"svg imgLayout"},[t("img",{src:$,alt:""})],-1)),S=c(()=>t("input",{type:"checkbox",id:"nav_check",hidden:""},null,-1)),P=c(()=>t("div",{class:"liPad"},"關於",-1)),I=c(()=>t("div",{class:"liPad"},"Web",-1)),y=c(()=>t("div",{class:"liPad"},"Html",-1)),F=c(()=>t("div",{class:"liPad"},"CSS",-1)),L=c(()=>t("div",{class:"liPad"},"JavaScript",-1)),B=c(()=>t("label",{for:"nav_check",class:"hamburger"},[t("div"),t("div"),t("div")],-1));function C(s,l){const n=d("router-link"),o=d("RouterLink");return u(),r("header",null,[t("div",k,[e(n,{to:"/"},{default:a(()=>[x]),_:1})]),S,t("nav",null,[t("ul",null,[t("li",null,[e(n,{to:"/about"},{default:a(()=>[P]),_:1})]),t("li",null,[e(n,{to:"/http"},{default:a(()=>[I]),_:1})]),t("li",null,[e(n,{to:"/html"},{default:a(()=>[y]),_:1})]),t("li",null,[e(n,{to:"/css"},{default:a(()=>[F]),_:1})]),t("li",null,[e(o,{to:"/js"},{default:a(()=>[L]),_:1})])])]),B])}const D=p(w,[["render",C],["__scopeId","data-v-c41a158b"]]),i=s=>(v("data-v-bdf2cdba"),s=s(),h(),s),N={class:""},R=i(()=>t("div",{class:"svg imgLayout"},[t("img",{src:$,alt:""})],-1)),H=i(()=>t("input",{type:"checkbox",id:"nav_check",hidden:""},null,-1)),M=i(()=>t("div",{class:"liPad"},"關於",-1)),V=i(()=>t("div",{class:"liPad"},"Web",-1)),j=i(()=>t("div",{class:"liPad"},"Html",-1)),T=i(()=>t("div",{class:"liPad"},"CSS",-1)),W=i(()=>t("div",{class:"liPad"},"JavaScript",-1)),E=i(()=>t("label",{for:"nav_check",class:"hamburger"},[t("div"),t("div"),t("div")],-1)),J={__name:"NavBarFixed",setup(s){const l=f(!0);return window.addEventListener("scroll",function(){l.value=window.scrollY}),(n,o)=>{const _=d("router-link");return u(),r("header",{class:g({show:l.value>0})},[t("div",N,[e(_,{to:"/"},{default:a(()=>[R]),_:1})]),H,t("nav",null,[t("ul",null,[t("li",null,[e(_,{to:"/about"},{default:a(()=>[M]),_:1})]),t("li",null,[e(_,{to:"/http"},{default:a(()=>[V]),_:1})]),t("li",null,[e(_,{to:"/html"},{default:a(()=>[j]),_:1})]),t("li",null,[e(_,{to:"/css"},{default:a(()=>[T]),_:1})]),t("li",null,[e(_,{to:"/js"},{default:a(()=>[W]),_:1})])])]),E],2)}}},z=p(J,[["__scopeId","data-v-bdf2cdba"]]),Y=s=>(v("data-v-0f9d02e6"),s=s(),h(),s),q={class:"showTimeDiv"},A=Y(()=>t("footer",null," Copyright © 2023 Wayne Lu ",-1)),G={__name:"Footer",setup(s){const l=f("");return setInterval(function(){let o=new Date;l.value=`${o.getMonth()+1} / ${o.getDate()} _ ${o.getHours()} : ${o.getMinutes()}`},2e3),(()=>{let o=new Date;l.value=`${o.getMonth()+1} / ${o.getDate()} _  ${o.getHours()} : ${o.getMinutes()}`})(),(o,_)=>(u(),r(m,null,[t("div",q,[t("div",null,b(l.value),1)]),A],64))}},K=p(G,[["__scopeId","data-v-0f9d02e6"]]),U={__name:"Layout",setup(s){return(l,n)=>{const o=d("RouterView");return u(),r(m,null,[e(z),e(D),e(o),e(K)],64)}}};export{U as default};
