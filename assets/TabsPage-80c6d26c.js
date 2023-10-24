import{A as r,J as m,F as d,D as x}from"./Demo-5d5d6c5d.js";import{j as p,o as _,c as f,a as t,w as e,u as a,e as n,b as h,g as $,p as C,f as H,_ as P}from"./index-c0b4609c.js";const v=o=>{o.__sourceCode=`<template>\r
    <div>\r
        <hx-tabs v-model="activeTab">\r
            <hx-tab title="tab1">内容1</hx-tab>\r
            <hx-tab title="tab2222">内容2</hx-tab>\r
            <hx-tab title="tab3">内容3</hx-tab>\r
            <hx-tab title="tab4">内容4</hx-tab>\r
        </hx-tabs>\r
    </div>\r
</template>\r
\r
<script setup>\r
import { HxTabs, HxTab } from 'hx-gulu-ui';\r
import { ref } from 'vue';\r
\r
const activeTab = ref('tab2222')\r
\r
<\/script>`,o.__sourceCodeTitle="基本用法"},k={__name:"TabsDemo01",setup(o){const b=p("tab2222");return(u,i)=>(_(),f("div",null,[t(a(m),{modelValue:b.value,"onUpdate:modelValue":i[0]||(i[0]=s=>b.value=s)},{default:e(()=>[t(a(r),{title:"tab1"},{default:e(()=>[n("内容1")]),_:1}),t(a(r),{title:"tab2222"},{default:e(()=>[n("内容2")]),_:1}),t(a(r),{title:"tab3"},{default:e(()=>[n("内容3")]),_:1}),t(a(r),{title:"tab4"},{default:e(()=>[n("内容4")]),_:1})]),_:1},8,["modelValue"])]))}};typeof v=="function"&&v(k);const T=o=>{o.__sourceCode=`<template>\r
    <div>\r
        <hx-tabs v-model="activeTab" type="card">\r
            <hx-tab title="tab1">内容1</hx-tab>\r
            <hx-tab title="tab2222">内容2</hx-tab>\r
            <hx-tab title="tab3">内容3</hx-tab>\r
            <hx-tab title="tab4">内容4</hx-tab>\r
        </hx-tabs>\r
    </div>\r
</template>\r
\r
<script setup>\r
import { HxTabs, HxTab } from 'hx-gulu-ui';\r
import { ref } from 'vue';\r
\r
const activeTab = ref('tab1')\r
\r
<\/script>`,o.__sourceCodeTitle="卡片风格的标签"},V={__name:"TabsDemo02",setup(o){const b=p("tab1");return(u,i)=>(_(),f("div",null,[t(a(m),{modelValue:b.value,"onUpdate:modelValue":i[0]||(i[0]=s=>b.value=s),type:"card"},{default:e(()=>[t(a(r),{title:"tab1"},{default:e(()=>[n("内容1")]),_:1}),t(a(r),{title:"tab2222"},{default:e(()=>[n("内容2")]),_:1}),t(a(r),{title:"tab3"},{default:e(()=>[n("内容3")]),_:1}),t(a(r),{title:"tab4"},{default:e(()=>[n("内容4")]),_:1})]),_:1},8,["modelValue"])]))}};typeof T=="function"&&T(V);const g=o=>{o.__sourceCode=`<template>\r
    <div>\r
        <div style="padding-bottom: 30px">\r
            <hx-button @click="changeDirection('top')">top</hx-button>\r
            <hx-button @click="changeDirection('right')">right</hx-button>\r
            <hx-button @click="changeDirection('bottom')">bottom</hx-button>\r
            <hx-button @click="changeDirection('left')">left</hx-button>\r
        </div>\r
        <hx-tabs v-model="activeTab" :tab-position="tabPosition" >\r
            <hx-tab title="tab1">内容1</hx-tab>\r
            <hx-tab title="tab2222">内容2</hx-tab>\r
            <hx-tab title="tab3">内容3</hx-tab>\r
            <hx-tab title="tab4">内容4</hx-tab>\r
        </hx-tabs>\r
    </div>\r
</template>\r
\r
<script setup>\r
import { HxTabs, HxTab, HxButton } from 'hx-gulu-ui';\r
import { ref } from 'vue';\r
\r
const activeTab = ref('tab1')\r
const tabPosition = ref('top')\r
\r
const changeDirection = (direction) => {\r
    tabPosition.value = direction\r
}\r
\r
<\/script>`,o.__sourceCodeTitle="标签位置的设置"},B={style:{"padding-bottom":"30px"}},D={__name:"TabsDemo03",setup(o){const b=p("tab1"),u=p("top"),i=s=>{u.value=s};return(s,l)=>(_(),f("div",null,[h("div",B,[t(a(d),{onClick:l[0]||(l[0]=c=>i("top"))},{default:e(()=>[n("top")]),_:1}),t(a(d),{onClick:l[1]||(l[1]=c=>i("right"))},{default:e(()=>[n("right")]),_:1}),t(a(d),{onClick:l[2]||(l[2]=c=>i("bottom"))},{default:e(()=>[n("bottom")]),_:1}),t(a(d),{onClick:l[3]||(l[3]=c=>i("left"))},{default:e(()=>[n("left")]),_:1})]),t(a(m),{modelValue:b.value,"onUpdate:modelValue":l[4]||(l[4]=c=>b.value=c),"tab-position":u.value},{default:e(()=>[t(a(r),{title:"tab1"},{default:e(()=>[n("内容1")]),_:1}),t(a(r),{title:"tab2222"},{default:e(()=>[n("内容2")]),_:1}),t(a(r),{title:"tab3"},{default:e(()=>[n("内容3")]),_:1}),t(a(r),{title:"tab4"},{default:e(()=>[n("内容4")]),_:1})]),_:1},8,["modelValue","tab-position"])]))}};typeof g=="function"&&g(D);const y=o=>(C("data-v-d3a3cdfd"),o=o(),H(),o),I={class:"doc-page"},w=y(()=>h("h2",null,"Tabs 组件示例 ",-1)),N=y(()=>h("p",{class:"doc-page-desc"},"分隔内容上有关联但属于不同类别的数据集合。",-1)),S=$({__name:"TabsPage",setup(o){return(b,u)=>(_(),f("div",I,[w,N,t(x,{component:k,usage:"基础的、简洁的标签页。Tabs 组件提供了选项卡功能，可以通过 `value` 属性来指定当前选中的标签页。"}),t(x,{component:V,usage:"你可以设置具有卡片风格的标签。只需要设置 `type` 属性为 `card` 就可以使选项卡改变为标签风格。"}),t(x,{component:D,usage:"可以通过 `tab-position` 设置标签的位置。标签一共有四个方向的设置 `tab-position = 'left|right|top|bottom'`。"})]))}});const A=P(S,[["__scopeId","data-v-d3a3cdfd"]]);export{A as default};
