import{F as t,T as s,D as p}from"./Demo-5d5d6c5d.js";import{g as u,o as _,c as i,a as n,w as r,e as a,u as l,p as M,f as k,b as h,_ as y}from"./index-c0b4609c.js";const g=u({__name:"MessageBoxDemo01",setup(e){const c=()=>{s.confirm({content:"消息内容",successText:"确定",cancelText:"取消",headerText:"头部标题"}).then(()=>{console.log("success")}).catch(()=>{console.log("cancel")})};return(o,x)=>(_(),i("div",null,[n(l(t),{onClick:c},{default:r(()=>[a("点击")]),_:1})]))}}),f=e=>{e.__sourceCode=`<template>\r
    <div>\r
        <hx-button @click="open">点击</hx-button>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { HxButton, HxMessageBox } from 'hx-gulu-ui';\r
const open = () => {\r
    HxMessageBox.confirm({\r
        content: '消息内容',\r
        successText: '确定',\r
        cancelText: '取消',\r
        headerText: '头部标题',\r
    })\r
    .then(() => {\r
      console.log('success')\r
    })\r
    .catch(() => {\r
      console.log('cancel')\r
    })\r
}\r
<\/script>`,e.__sourceCodeTitle="常规用法"};typeof f=="function"&&f(g);const T=u({__name:"MessageBoxDemo02",setup(e){const c=()=>{s.confirm({content:"default弹框",successText:"确定",cancelText:"取消",headerText:"头部标题",type:"default"}).then(()=>{console.log("success")}).catch(()=>{console.log("cancel")})},o=()=>{s.confirm({content:"confirm 弹框",successText:"确定",headerText:"头部标题",type:"comfirm"}).then(()=>{console.log("success")})};return(x,$)=>(_(),i("div",null,[n(l(t),{onClick:c},{default:r(()=>[a("default")]),_:1}),n(l(t),{onClick:o},{default:r(()=>[a("confirm")]),_:1})]))}}),d=e=>{e.__sourceCode=`<template>\r
    <div>\r
        <hx-button @click="open">default</hx-button>\r
        <hx-button @click="open2">confirm</hx-button>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { HxButton, HxMessageBox } from 'hx-gulu-ui';\r
const open = () => {\r
    HxMessageBox.confirm({\r
        content: 'default弹框',\r
        successText: '确定',\r
        cancelText: '取消',\r
        headerText: '头部标题',\r
        type: 'default'\r
    })\r
    .then(() => {\r
      console.log('success')\r
    })\r
    .catch(() => {\r
      console.log('cancel')\r
    })\r
}\r
const open2 = () => {\r
    HxMessageBox.confirm({\r
        content: 'confirm 弹框',\r
        successText: '确定',\r
        headerText: '头部标题',\r
        type: 'comfirm'\r
    })\r
    .then(() => {\r
      console.log('success')\r
    })\r
}\r
<\/script>`,e.__sourceCodeTitle="弹窗类型"};typeof d=="function"&&d(T);const B=u({__name:"MessageBoxDemo03",setup(e){const c=()=>{s.confirm({content:"点击遮罩层可以关闭",successText:"确定",cancelText:"取消",headerText:"头部标题",closeByOverlay:!0}).then(()=>{console.log("success")}).catch(()=>{console.log("cancel")})};return(o,x)=>(_(),i("div",null,[n(l(t),{onClick:c},{default:r(()=>[a("点击")]),_:1})]))}}),m=e=>{e.__sourceCode=`<template>\r
    <div>\r
        <hx-button @click="open">点击</hx-button>\r
    </div>\r
</template>\r
\r
<script setup lang="ts">\r
import { HxButton, HxMessageBox } from 'hx-gulu-ui';\r
const open = () => {\r
    HxMessageBox.confirm({\r
        content: '点击遮罩层可以关闭',\r
        successText: '确定',\r
        cancelText: '取消',\r
        headerText: '头部标题',\r
        closeByOverlay: true\r
    })\r
    .then(() => {\r
      console.log('success')\r
    })\r
    .catch(() => {\r
      console.log('cancel')\r
    })\r
}\r
<\/script>`,e.__sourceCodeTitle="点击遮罩层关闭"};typeof m=="function"&&m(B);const v=e=>(M("data-v-457efaaf"),e=e(),k(),e),b={class:"doc-page"},H=v(()=>h("h2",null,"MessageBox 消息弹框 ",-1)),C=v(()=>h("p",{class:"doc-page-desc"},"默认会返回一个`Promise`对象便于进行后续操作的处理。",-1)),D=u({__name:"MassageBoxPage",setup(e){return(c,o)=>(_(),i("div",b,[H,C,n(p,{component:g}),n(p,{component:T,usage:"弹窗类型: default 默认显示确认，取消 / confirm 仅显示确认"}),n(p,{component:B})]))}});const w=y(D,[["__scopeId","data-v-457efaaf"]]);export{w as default};
