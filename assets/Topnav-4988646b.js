import{g as d,i as u,r as p,o as a,c as n,b as o,a as l,w as c,h as r,e as g,n as m,p as v,f,_ as h}from"./index-c0b4609c.js";const b=e=>(v("data-v-59b828a3"),e=e(),f(),e),V={class:"logo"},k=["src"],x=b(()=>o("svg",{class:"icon"},[o("use",{"xlink:href":"#icon-menu"})],-1)),y=[x],B={class:"menu"},C=d({__name:"Topnav",props:{toggleMenuButtonVisible:{type:Boolean,default:!1}},setup(e){const s=u("asideVisible"),i=()=>{s.value=!s.value};return(_,I)=>{const t=p("router-link");return a(),n("div",{class:m(["topnav",{docNav:e.toggleMenuButtonVisible}])},[o("div",V,[l(t,{to:"/",style:{display:"flex"}},{default:c(()=>[o("img",{src:_.$baseImg+"my-logo2.png",alt:"首页"},null,8,k)]),_:1})]),e.toggleMenuButtonVisible?(a(),n("div",{key:0,class:"toggleAside",onClick:i},y)):r("",!0),o("ul",B,[o("li",null,[l(t,{to:"/doc"},{default:c(()=>[g("开始")]),_:1})])])],2)}}});const T=h(C,[["__scopeId","data-v-59b828a3"]]);export{T};