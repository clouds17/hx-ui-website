import{F as c,z as g,O as w,D as f}from"./Demo-5d5d6c5d.js";import{g as _,j as x,o as m,c as d,a as o,w as l,e as u,u as r,b as s,p as O,f as I,_ as U}from"./index-c0b4609c.js";const N=s("p",null,"内容一",-1),P=s("p",null,"内容二",-1),y=_({__name:"DialogDemo01",setup(e){const n=x(!1),i=()=>n.value=!0,p=()=>{console.log("submit")},t=()=>{console.log("cancel")};return(a,v)=>(m(),d("div",null,[o(r(c),{level:"primary",onClick:i},{default:l(()=>[u("基本用法")]),_:1}),o(r(g),{modelValue:n.value,"onUpdate:modelValue":v[0]||(v[0]=S=>n.value=S),title:"小黄的title",width:"600px","submit-text":"确定","cancel-text":"取消",onOnSubmit:p,onOnCancel:t},{default:l(()=>[N,P]),_:1},8,["modelValue"])]))}}),b=e=>{e.__sourceCode=`<template>\r
    <div>\r
        <hx-button level="primary" @click="open">基本用法</hx-button>\r
        <hx-dialog\r
            v-model="visible" \r
            title="小黄的title"\r
            width="600px"\r
            submit-text="确定"\r
            cancel-text="取消"\r
            @onSubmit="onSubmit"\r
            @onCancel="onCancel"\r
        >\r
                <p>内容一</p>\r
                <p>内容二</p>\r
                \r
        </hx-dialog>\r
    </div>\r
    \r
</template>\r
  \r
<script lang="ts" setup>\r
  import { HxButton, HxDialog } from 'hx-gulu-ui';\r
  import { ref } from 'vue'\r
  \r
  const visible = ref(false)\r
  const open = () => visible.value = true\r
  const onSubmit = () => {\r
    console.log('submit')\r
  }\r
  const onCancel = () => {\r
    console.log('cancel')\r
  }\r
<\/script>`,e.__sourceCodeTitle="基本用法"};typeof b=="function"&&b(y);const E=s("h1",null,"我加的标题",-1),j=s("p",null,"内容一",-1),z=s("p",null,"内容二",-1),$=_({__name:"DialogDemo02",setup(e){const n=x(!1),i=()=>n.value=!0;return(p,t)=>(m(),d("div",null,[o(r(c),{level:"primary",onClick:i},{default:l(()=>[u("自定义头部和底部")]),_:1}),o(r(g),{modelValue:n.value,"onUpdate:modelValue":t[2]||(t[2]=a=>n.value=a)},{title:l(()=>[E]),footer:l(()=>[o(r(c),{level:"primary",onClick:t[0]||(t[0]=()=>{})},{default:l(()=>[u("我点确定")]),_:1}),o(r(c),{plain:"",onClick:t[1]||(t[1]=()=>{})},{default:l(()=>[u("我点取消")]),_:1})]),default:l(()=>[j,z]),_:1},8,["modelValue"])]))}}),h=e=>{e.__sourceCode=`<template>\r
    <div>\r
        <hx-button level="primary" @click="open">自定义头部和底部</hx-button>\r
        <hx-dialog\r
            v-model="visible" \r
        >\r
            <template #title>\r
                <h1>我加的标题</h1>\r
            </template>\r
            <p>内容一</p>\r
            <p>内容二</p>\r
            <template #footer>\r
                <hx-button level="primary" @click="">我点确定</hx-button>\r
                <hx-button plain @click="">我点取消</hx-button>\r
            </template>\r
        </hx-dialog>\r
    </div>\r
    \r
</template>\r
  \r
<script lang="ts" setup>\r
  import { HxButton, HxDialog } from 'hx-gulu-ui';\r
  import { ref } from 'vue'\r
  \r
  const visible = ref(false)\r
  const open = () => visible.value = true\r
 \r
<\/script>`,e.__sourceCodeTitle="自定义头部和底部"};typeof h=="function"&&h($);const F=s("p",null,"内容一",-1),M=s("p",null,"内容二",-1),V=_({__name:"DialogDemo03",setup(e){const n=x(!1),i=()=>n.value=!0;return(p,t)=>(m(),d("div",null,[o(r(c),{level:"primary",onClick:i},{default:l(()=>[u("close-on-click-overlay")]),_:1}),o(r(g),{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=a=>n.value=a),"close-on-click-overlay":!1},{default:l(()=>[F,M]),_:1},8,["modelValue"])]))}}),C=e=>{e.__sourceCode=`<template>\r
    <div>\r
        <hx-button level="primary" @click="open">close-on-click-overlay</hx-button>\r
        <hx-dialog\r
            v-model="visible" \r
            :close-on-click-overlay = "false"\r
        >\r
            <p>内容一</p>\r
            <p>内容二</p>\r
        </hx-dialog>\r
    </div>\r
    \r
</template>\r
  \r
<script lang="ts" setup>\r
  import { HxButton, HxDialog } from 'hx-gulu-ui';\r
  import { ref } from 'vue'\r
  \r
  const visible = ref(false)\r
  const open = () => visible.value = true\r
 \r
<\/script>`,e.__sourceCodeTitle="点击空白部分是否关闭弹框"};typeof C=="function"&&C(V);const q=s("p",null,"内容一",-1),A=s("p",null,"内容二",-1),B=_({__name:"DialogDemo04",setup(e){const n=x(!1),i=()=>n.value=!0,p=()=>{console.log("执行 beforeClose")};return(t,a)=>(m(),d("div",null,[o(r(c),{level:"primary",onClick:i},{default:l(()=>[u("beforeClose 函数")]),_:1}),o(r(g),{modelValue:n.value,"onUpdate:modelValue":a[0]||(a[0]=v=>n.value=v),"close-on-click-overlay":!1,beforeClose:p},{default:l(()=>[q,A]),_:1},8,["modelValue"])]))}}),k=e=>{e.__sourceCode=`<!-- 属性 \`beforeClose\` 是一个函数, return false 时 不会关闭弹框 -->\r
<template>\r
    <div>\r
        <hx-button level="primary" @click="open">beforeClose 函数</hx-button>\r
        <hx-dialog\r
            v-model="visible" \r
            :close-on-click-overlay = "false"\r
            :beforeClose = "onBeforeClose"\r
        >\r
            <p>内容一</p>\r
            <p>内容二</p>\r
        </hx-dialog>\r
    </div>\r
    \r
</template>\r
  \r
<script lang="ts" setup>\r
  import { HxButton, HxDialog } from 'hx-gulu-ui';\r
  import { ref } from 'vue'\r
  \r
  const visible = ref(false)\r
  const open = () => visible.value = true\r
 \r
  const onBeforeClose = () => {\r
        // 可以进行验证啥的，返回值不是false时， 函数执行完关闭弹框\r
        // 返回值 是 false时，不关闭弹框\r
        console.log('执行 beforeClose')\r
    }\r
<\/script>`,e.__sourceCodeTitle="关闭之前的函数"};typeof k=="function"&&k(B);const T=_({__name:"DialogDemo05",setup(e){const n=()=>{w({title:"我定义的标题",mainText:"一句代码打开 Dialog",width:"40%",submitText:"同意",cancelText:"拒绝",closeOnClickOverlay:!1,submit:()=>{console.log("submit")},cancel:()=>{console.log("cancel")}})};return(i,p)=>(m(),d("div",null,[o(r(c),{level:"primary",onClick:n},{default:l(()=>[u("一句代码打开 Dialog")]),_:1})]))}}),D=e=>{e.__sourceCode=`<template>\r
    <div>\r
        <hx-button level="primary" @click="open">一句代码打开 Dialog</hx-button>\r
    </div>\r
</template>\r
  \r
<script lang="ts" setup>\r
  import { HxButton, openDialog } from 'hx-gulu-ui';\r
  \r
    const open = () => {\r
        openDialog({\r
            title: '我定义的标题',\r
            mainText: '一句代码打开 Dialog',\r
            width: '40%',\r
            submitText: '同意',\r
            cancelText: '拒绝',\r
            closeOnClickOverlay: false,\r
            submit: () => {\r
                console.log('submit')\r
            },\r
            cancel: () => {\r
                console.log('cancel')\r
            }\r
        })\r
    }\r
<\/script>`,e.__sourceCodeTitle="一句代码打开 Dialog"};typeof D=="function"&&D(T);const H=e=>(O("data-v-cd1cf40a"),e=e(),I(),e),G={class:"doc-page"},J=H(()=>s("h2",null,"Dialog弹框 组件示例 ",-1)),K=H(()=>s("p",{class:"doc-page-desc"},"Dialog 弹出一个对话框，适合需要定制性更大的场景。",-1)),L=_({__name:"DialogPage",setup(e){return(n,i)=>(m(),d("div",G,[J,K,o(f,{component:y,usage:"需要设置 `model-value / v-model` 属性，它接收 `Boolean`，当为 `true` 时显示 Dialog。\r\n                `title` 属性设置弹框标题。\r\n                `width` 属性设置弹框大小。\r\n                `submit-text` 属性设置确认按钮的文字。\r\n                `cancel-text` 属性设置取消按钮的文字。\r\n                `@onSubmit`事件是点击确认事件。\r\n                `@onCancel` 事件是点击取消事件。"}),o(f,{component:$,usage:"设置了`title`具名插槽 和 `footer` 具名插槽，可以自定义头部和底部"}),o(f,{component:V,usage:"属性 `close-on-click-overlay` 默认 `true`"}),o(f,{component:B,usage:"属性 `beforeClose` 是一个函数, return false 时 不会关闭弹框"}),o(f,{component:T,usage:"类似 ElMessageBox 消息弹框"})]))}});const W=U(L,[["__scopeId","data-v-cd1cf40a"]]);export{W as default};
