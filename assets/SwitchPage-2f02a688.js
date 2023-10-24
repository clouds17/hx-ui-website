import{H as o,D as h}from"./Demo-5d5d6c5d.js";import{g as d,j as i,o as p,c as f,a as t,u as r,F as x,b as _,p as $,f as k,_ as D}from"./index-c0b4609c.js";const b=d({__name:"SwitchDemo01",setup(e){const l=i(!0),m=i(!0);return(a,n)=>(p(),f(x,null,[t(r(o),{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=s=>l.value=s)},null,8,["modelValue"]),t(r(o),{modelValue:m.value,"onUpdate:modelValue":n[1]||(n[1]=s=>m.value=s),class:"ml-2",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"}},null,8,["modelValue"])],64))}}),w=e=>{e.__sourceCode=`<template>\r
    <hx-switch v-model="value1" />\r
    <hx-switch\r
      v-model="value2"\r
      class="ml-2"\r
      style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"\r
    />\r
</template>\r
  \r
<script lang="ts" setup>\r
  import { HxSwitch } from 'hx-gulu-ui';\r
  import { ref } from 'vue'\r
  \r
  const value1 = ref(true)\r
  const value2 = ref(true)\r
<\/script>`,e.__sourceCodeTitle="常规用法"};typeof w=="function"&&w(b);const S=d({__name:"SwitchDemo02",setup(e){const l=i(!0);return(m,a)=>(p(),f(x,null,[t(r(o),{modelValue:l.value,"onUpdate:modelValue":a[0]||(a[0]=n=>l.value=n),size:"large"},null,8,["modelValue"]),t(r(o),{modelValue:l.value,"onUpdate:modelValue":a[1]||(a[1]=n=>l.value=n)},null,8,["modelValue"]),t(r(o),{modelValue:l.value,"onUpdate:modelValue":a[2]||(a[2]=n=>l.value=n),size:"small"},null,8,["modelValue"])],64))}}),V=e=>{e.__sourceCode=`<template>\r
    <hx-switch\r
        v-model="value"\r
        size="large"\r
    />\r
    <hx-switch v-model="value" />\r
    <hx-switch\r
        v-model="value"\r
        size="small"\r
    />\r
</template>\r
  \r
<script lang="ts" setup>\r
  import { HxSwitch } from 'hx-gulu-ui';\r
  import { ref } from 'vue'\r
  \r
  const value = ref(true)\r
<\/script>`,e.__sourceCodeTitle="尺寸大小"};typeof V=="function"&&V(S);const z=_("br",null,null,-1),B=_("br",null,null,-1),U=d({__name:"SwitchDemo03",setup(e){const l=i(!0),m=i(!0),a=i(!0),n=i(!0),s=i(!0),v=i(!0);return(F,u)=>(p(),f(x,null,[t(r(o),{modelValue:l.value,"onUpdate:modelValue":u[0]||(u[0]=c=>l.value=c),"active-text":"Pay by month","inactive-text":"Pay by year"},null,8,["modelValue"]),t(r(o),{modelValue:m.value,"onUpdate:modelValue":u[1]||(u[1]=c=>m.value=c),style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},"active-text":"Pay by month","inactive-text":"Pay by year"},null,8,["modelValue"]),z,B,t(r(o),{modelValue:a.value,"onUpdate:modelValue":u[2]||(u[2]=c=>a.value=c),"inline-prompt":"","active-text":"是","inactive-text":"否"},null,8,["modelValue"]),t(r(o),{modelValue:n.value,"onUpdate:modelValue":u[3]||(u[3]=c=>n.value=c),class:"ml-2","inline-prompt":"",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},"active-text":"Y","inactive-text":"N"},null,8,["modelValue"]),t(r(o),{modelValue:s.value,"onUpdate:modelValue":u[4]||(u[4]=c=>s.value=c),class:"ml-2",width:"60","inline-prompt":"","active-text":"超出省略","inactive-text":"超出省略"},null,8,["modelValue"]),t(r(o),{modelValue:v.value,"onUpdate:modelValue":u[5]||(u[5]=c=>v.value=c),class:"ml-2","inline-prompt":"",style:{"--el-switch-on-color":"#13ce66","--el-switch-off-color":"#ff4949"},"active-text":"完整展示多个内容","inactive-text":"多个内容"},null,8,["modelValue"])],64))}}),y=e=>{e.__sourceCode=`<template>\r
   <hx-switch\r
    v-model="value1"\r
    active-text="Pay by month"\r
    inactive-text="Pay by year"\r
  />\r
  <hx-switch\r
    v-model="value2"\r
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"\r
    active-text="Pay by month"\r
    inactive-text="Pay by year"\r
  />\r
  <br />\r
  <br />\r
  <hx-switch\r
    v-model="value3"\r
    inline-prompt\r
    active-text="是"\r
    inactive-text="否"\r
  />\r
  <hx-switch\r
    v-model="value4"\r
    class="ml-2"\r
    inline-prompt\r
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"\r
    active-text="Y"\r
    inactive-text="N"\r
  />\r
  <hx-switch\r
    v-model="value5"\r
    class="ml-2"\r
    width="60"\r
    inline-prompt\r
    active-text="超出省略"\r
    inactive-text="超出省略"\r
  />\r
  <hx-switch\r
    v-model="value6"\r
    class="ml-2"\r
    inline-prompt\r
    style="--el-switch-on-color: #13ce66; --el-switch-off-color: #ff4949"\r
    active-text="完整展示多个内容"\r
    inactive-text="多个内容"\r
  />\r
</template>\r
  \r
<script lang="ts" setup>\r
    import { HxSwitch } from 'hx-gulu-ui';\r
    import { ref } from 'vue'\r
  \r
    const value1 = ref(true)\r
    const value2 = ref(true)\r
    const value3 = ref(true)\r
    const value4 = ref(true)\r
    const value5 = ref(true)\r
    const value6 = ref(true)\r
<\/script>`,e.__sourceCodeTitle="文字描述"};typeof y=="function"&&y(U);const C=d({__name:"SwitchDemo04",setup(e){const l=i(!0),m=i(!0),a=n=>{console.log("switchChange",n)};return(n,s)=>(p(),f(x,null,[t(r(o),{modelValue:l.value,"onUpdate:modelValue":s[0]||(s[0]=v=>l.value=v),disabled:""},null,8,["modelValue"]),t(r(o),{modelValue:m.value,"onUpdate:modelValue":s[1]||(s[1]=v=>m.value=v),onChange:a},null,8,["modelValue"])],64))}}),g=e=>{e.__sourceCode=`<template>\r
    <hx-switch v-model="value1" disabled />\r
    <hx-switch v-model="value2" @change="switchChange"/>\r
</template>\r
\r
<script lang="ts" setup>\r
    import { HxSwitch } from 'hx-gulu-ui';\r
    import { ref } from 'vue'\r
\r
    const value1 = ref(true)\r
    const value2 = ref(true)\r
\r
    const switchChange = (e) => {\r
        console.log('switchChange', e)\r
    }\r
<\/script>`,e.__sourceCodeTitle="禁用状态"};typeof g=="function"&&g(C);const P=e=>($("data-v-3cb43d8b"),e=e(),k(),e),H={class:"doc-page"},I=P(()=>_("h2",null,"Switch 组件示例 ",-1)),N=P(()=>_("p",{class:"doc-page-desc"},"表示两种相互对立的状态间的切换，多用于触发「开/关」。",-1)),T=d({__name:"SwitchPage",setup(e){return(l,m)=>(p(),f("div",H,[I,N,t(h,{component:b,usage:"绑定 `v-model` 到一个 `Boolean` 类型的变量。 可以使用 `--el-switch-on-color` 属性与 `--el-switch-off-color` 属性来设置开关的背景色"}),t(h,{component:S,usage:"绑定一个 `size` 属性，属性值可以是 'large' | 'default' | 'small'。"}),t(h,{component:U,usage:"使用 `active-text` 属性与 `inactive-text` 属性来设置开关的文字描述。 使用 `inline-prompt` 属性来控制文本是否显示在点内。"}),t(h,{component:C,usage:"设置 `disabled` 属性，接受一个 `Boolean`，设置 `true` 即可禁用。"})]))}});const E=D(T,[["__scopeId","data-v-3cb43d8b"]]);export{E as default};
