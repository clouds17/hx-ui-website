import{i as m,u,c as s,o as v,p as g,D as p}from"./Demo-5d5d6c5d.js";import{g as r,o as c,c as _,a as e,w as t,u as a,e as o,_ as i,d as b}from"./index-c0b4609c.js";const k={class:"common-layout"},C=r({__name:"ContainerDemo01",setup(n){return(d,l)=>(c(),_("div",k,[e(a(s),null,{default:t(()=>[e(a(m),null,{default:t(()=>[o("我是 footer")]),_:1}),e(a(u),null,{default:t(()=>[o("我是主容器")]),_:1})]),_:1})]))}});const x=n=>{n.__sourceCode=`<template>\r
    <div class="common-layout">\r
        <hx-container>\r
            <hx-header>我是 footer</hx-header>\r
            <hx-main>我是主容器</hx-main>\r
        </hx-container>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { HxContainer, HxHeader, HxMain } from 'hx-gulu-ui';\r
\r
<\/script>\r
\r
<style lang="scss" scoped>\r
@import './style.scss';\r
</style>`,n.__sourceCodeTitle="布局 一"};typeof x=="function"&&x(C);const w=i(C,[["__scopeId","data-v-9bec35ed"]]),I={class:"common-layout"},H=r({__name:"ContainerDemo02",setup(n){return(d,l)=>(c(),_("div",I,[e(a(s),null,{default:t(()=>[e(a(m),null,{default:t(()=>[o("我是 header")]),_:1}),e(a(u),null,{default:t(()=>[o("我是 main")]),_:1}),e(a(v),null,{default:t(()=>[o("我是 footer")]),_:1})]),_:1})]))}});const h=n=>{n.__sourceCode=`<template>\r
    <div class="common-layout">\r
        <hx-container>\r
            <hx-header>我是 header</hx-header>\r
            <hx-main>我是 main</hx-main>\r
            <hx-footer>我是 footer</hx-footer>\r
        </hx-container>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { HxContainer, HxHeader, HxMain, HxFooter } from 'hx-gulu-ui';\r
<\/script>\r
\r
<style lang="scss" scoped>\r
@import './style.scss';\r
</style>`,n.__sourceCodeTitle="布局 二"};typeof h=="function"&&h(H);const T=i(H,[["__scopeId","data-v-8a1c7102"]]),M={class:"common-layout"},D=r({__name:"ContainerDemo03",setup(n){return(d,l)=>(c(),_("div",M,[e(a(s),null,{default:t(()=>[e(a(g),{style:{"--hx-aside-width":"200px"}},{default:t(()=>[o("我是 aside")]),_:1}),e(a(u),null,{default:t(()=>[o("我是 main")]),_:1})]),_:1})]))}});const f=n=>{n.__sourceCode=`<template>\r
    <div class="common-layout">\r
        <hx-container>\r
            <hx-aside style="--hx-aside-width: 200px">我是 aside</hx-aside>\r
            <hx-main>我是 main</hx-main>\r
        </hx-container>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { HxContainer, HxAside, HxMain } from 'hx-gulu-ui';\r
\r
<\/script>\r
\r
<style lang="scss" scoped>\r
@import './style.scss';\r
</style>`,n.__sourceCodeTitle="布局 三"};typeof f=="function"&&f(D);const N=i(D,[["__scopeId","data-v-804863a8"]]),P={class:"common-layout"},$=r({__name:"ContainerDemo04",setup(n){return(d,l)=>(c(),_("div",P,[e(a(s),null,{default:t(()=>[e(a(m),null,{default:t(()=>[o("我是 header")]),_:1}),e(a(s),null,{default:t(()=>[e(a(g),{style:{"--hx-aside-width":"200px"}},{default:t(()=>[o("我是 aside")]),_:1}),e(a(u),null,{default:t(()=>[o("我是 main")]),_:1})]),_:1}),e(a(v),null,{default:t(()=>[o("我是 footer")]),_:1})]),_:1})]))}});const y=n=>{n.__sourceCode=`<template>\r
    <div class="common-layout">\r
        <hx-container>\r
            <hx-header>我是 header</hx-header>\r
            <hx-container>\r
                <hx-aside style="--hx-aside-width: 200px">我是 aside</hx-aside>\r
                <hx-main>我是 main</hx-main>\r
            </hx-container>\r
            <hx-footer>我是 footer</hx-footer>\r
        </hx-container>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { HxContainer, HxHeader, HxFooter, HxAside, HxMain } from 'hx-gulu-ui';\r
<\/script>\r
\r
<style lang="scss" scoped>\r
@import './style.scss';\r
</style>`,n.__sourceCodeTitle="布局 四"};typeof y=="function"&&y($);const V=i($,[["__scopeId","data-v-37a5e5c4"]]),A={class:"doc-page"},B=b('<h2 data-v-6a4456ee>Container 布局容器 </h2><p class="doc-page-desc" data-v-6a4456ee>用于布局的容器组件，方便快速搭建页面的基本结构：</p><p class="doc-page-desc" data-v-6a4456ee>`hx-container`：外层容器。 当子元素中包含 `hx-header` 或 `hx-footer` 时，全部子元素会垂直上下排列， 否则会水平左右排列。</p><p class="doc-page-desc" data-v-6a4456ee>`el-header`：顶栏容器。</p><p class="doc-page-desc" data-v-6a4456ee>`el-aside`：侧边栏容器。</p><p class="doc-page-desc" data-v-6a4456ee>`el-main`：主要区域容器。</p><p class="doc-page-desc" data-v-6a4456ee>`el-footer`：底栏容器。</p>',7),F=r({__name:"ContainerPage",setup(n){return(d,l)=>(c(),_("div",A,[B,e(p,{component:w}),e(p,{component:T}),e(p,{component:N}),e(p,{component:V})]))}});const j=i(F,[["__scopeId","data-v-6a4456ee"]]);export{j as default};
