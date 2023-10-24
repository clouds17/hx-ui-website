import{F as t,D as h}from"./Demo-5d5d6c5d.js";import{g as i,o as d,c as o,b as u,a as e,w as n,e as l,u as a,F as f,p as w,f as B,_ as $}from"./index-c0b4609c.js";const z={style:{"padding-top":"20px"}},C={style:{"padding-top":"20px"}},D={style:{"padding-top":"20px"}},_=i({__name:"ButtonDemo01",setup(r){return(s,x)=>(d(),o(f,null,[u("div",null,[e(a(t),{size:"large"},{default:n(()=>[l("large")]),_:1}),e(a(t),null,{default:n(()=>[l("normal")]),_:1}),e(a(t),{size:"small"},{default:n(()=>[l("small")]),_:1})]),u("div",z,[e(a(t),{level:"default"},{default:n(()=>[l("default")]),_:1}),e(a(t),{level:"primary"},{default:n(()=>[l("primary")]),_:1}),e(a(t),{level:"success"},{default:n(()=>[l("success")]),_:1}),e(a(t),{level:"info"},{default:n(()=>[l("info")]),_:1}),e(a(t),{level:"warning"},{default:n(()=>[l("warning")]),_:1}),e(a(t),{level:"danger"},{default:n(()=>[l("danger")]),_:1})]),u("div",C,[e(a(t),{plain:"",level:"default"},{default:n(()=>[l("default")]),_:1}),e(a(t),{plain:"",level:"primary"},{default:n(()=>[l("primary")]),_:1}),e(a(t),{plain:"",level:"success"},{default:n(()=>[l("success")]),_:1}),e(a(t),{plain:"",level:"info"},{default:n(()=>[l("info")]),_:1}),e(a(t),{plain:"",level:"warning"},{default:n(()=>[l("warning")]),_:1}),e(a(t),{plain:"",level:"danger"},{default:n(()=>[l("danger")]),_:1})]),u("div",D,[e(a(t),{round:"",plain:"",level:"default"},{default:n(()=>[l("default")]),_:1}),e(a(t),{round:"",plain:"",level:"primary"},{default:n(()=>[l("primary")]),_:1}),e(a(t),{round:"",plain:"",level:"success"},{default:n(()=>[l("success")]),_:1}),e(a(t),{round:"",plain:"",level:"info"},{default:n(()=>[l("info")]),_:1}),e(a(t),{round:"",plain:"",level:"warning"},{default:n(()=>[l("warning")]),_:1}),e(a(t),{round:"",plain:"",level:"danger"},{default:n(()=>[l("danger")]),_:1})])],64))}}),c=r=>{r.__sourceCode=`<template>\r
    <!-- 尺寸 size: large | normal | small -->\r
    <div>\r
        <hx-button size='large' >large</hx-button>\r
        <hx-button>normal</hx-button>\r
        <hx-button size='small'>small</hx-button>\r
    </div>\r
    <!-- 颜色等级  level: 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger' -->\r
    <div style="padding-top: 20px;">\r
		<hx-button level="default" >default</hx-button>\r
        <hx-button level="primary">primary</hx-button>\r
        <hx-button level="success" >success</hx-button>\r
        <hx-button level="info" >info</hx-button>\r
        <hx-button level="warning" >warning</hx-button>\r
        <hx-button level="danger"  >danger</hx-button>\r
	</div>\r
    <!-- 是否空心  plain -->\r
    <div style="padding-top: 20px;">\r
		<hx-button plain level="default" >default</hx-button>\r
        <hx-button plain level="primary">primary</hx-button>\r
        <hx-button plain level="success" >success</hx-button>\r
        <hx-button plain level="info" >info</hx-button>\r
        <hx-button plain level="warning" >warning</hx-button>\r
        <hx-button plain level="danger"  >danger</hx-button>\r
	</div>\r
    <!-- 是否圆角 round -->\r
    <div style="padding-top: 20px;">\r
		<hx-button round plain level="default" >default</hx-button>\r
        <hx-button round plain level="primary">primary</hx-button>\r
        <hx-button round plain level="success" >success</hx-button>\r
        <hx-button round plain level="info" >info</hx-button>\r
        <hx-button round plain level="warning" >warning</hx-button>\r
        <hx-button round plain level="danger"  >danger</hx-button>\r
	</div>\r
</template>\r
  \r
<script lang="ts" setup>\r
    import { HxButton } from 'hx-gulu-ui';\r
<\/script>`,r.__sourceCodeTitle="基本用法"};typeof c=="function"&&c(_);const T={style:{"padding-top":"20px"}},H={style:{"padding-top":"20px"}},m=i({__name:"ButtonDemo02",setup(r){return(s,x)=>(d(),o(f,null,[u("div",null,[e(a(t),{level:"default"},{default:n(()=>[l("default")]),_:1}),e(a(t),{level:"primary"},{default:n(()=>[l("primary")]),_:1}),e(a(t),{level:"success"},{default:n(()=>[l("success")]),_:1}),e(a(t),{level:"info"},{default:n(()=>[l("info")]),_:1}),e(a(t),{level:"warning"},{default:n(()=>[l("warning")]),_:1}),e(a(t),{level:"danger"},{default:n(()=>[l("danger")]),_:1})]),u("div",T,[e(a(t),{theme:"link",level:"default"},{default:n(()=>[l("link default")]),_:1}),e(a(t),{theme:"link",level:"primary"},{default:n(()=>[l("link primary")]),_:1}),e(a(t),{theme:"link ",level:"success"},{default:n(()=>[l("link success")]),_:1}),e(a(t),{theme:"link ",level:"info"},{default:n(()=>[l("link info")]),_:1}),e(a(t),{theme:"link",level:"warning"},{default:n(()=>[l("link warning")]),_:1}),e(a(t),{theme:"link",level:"danger"},{default:n(()=>[l("link danger")]),_:1})]),u("div",H,[e(a(t),{theme:"text",level:"default"},{default:n(()=>[l("text default")]),_:1}),e(a(t),{theme:"text",level:"primary"},{default:n(()=>[l("text primary")]),_:1}),e(a(t),{theme:"text ",level:"success"},{default:n(()=>[l("text success")]),_:1}),e(a(t),{theme:"text ",level:"info"},{default:n(()=>[l("text info")]),_:1}),e(a(t),{theme:"text",level:"warning"},{default:n(()=>[l("text warning")]),_:1}),e(a(t),{theme:"text",level:"danger"},{default:n(()=>[l("text danger")]),_:1})])],64))}}),b=r=>{r.__sourceCode=`<template>\r
    <!-- 类型 theme: button | link | text -->\r
    <div>\r
        <hx-button level="default" >default</hx-button>\r
        <hx-button level="primary">primary</hx-button>\r
        <hx-button level="success" >success</hx-button>\r
        <hx-button level="info" >info</hx-button>\r
        <hx-button level="warning" >warning</hx-button>\r
        <hx-button level="danger"  >danger</hx-button>\r
    </div>\r
    <div style="padding-top: 20px;">\r
        <hx-button theme="link" level="default" >link default</hx-button>\r
        <hx-button theme="link" level="primary">link primary</hx-button>\r
        <hx-button theme="link " level="success" >link success</hx-button>\r
        <hx-button theme="link " level="info" >link info</hx-button>\r
        <hx-button theme="link" level="warning" >link warning</hx-button>\r
        <hx-button theme="link" level="danger" >link danger</hx-button>\r
    </div>\r
    <div style="padding-top: 20px;">\r
        <hx-button theme="text" level="default" >text default</hx-button>\r
        <hx-button theme="text" level="primary">text primary</hx-button>\r
        <hx-button theme="text " level="success" >text success</hx-button>\r
        <hx-button theme="text " level="info" >text info</hx-button>\r
        <hx-button theme="text" level="warning" >text warning</hx-button>\r
        <hx-button theme="text" level="danger" >text danger</hx-button>\r
    </div>\r
</template>\r
  \r
<script lang="ts" setup>\r
    import { HxButton } from 'hx-gulu-ui';\r
<\/script>`,r.__sourceCodeTitle="按钮类型"};typeof b=="function"&&b(m);const I={style:{"padding-top":"20px"}},F={style:{"padding-top":"20px"}},g=i({__name:"ButtonDemo03",setup(r){return(s,x)=>(d(),o(f,null,[u("div",null,[e(a(t),{disabled:"",level:"default"},{default:n(()=>[l("default")]),_:1}),e(a(t),{disabled:"",level:"primary"},{default:n(()=>[l("primary")]),_:1}),e(a(t),{disabled:"",level:"success"},{default:n(()=>[l("success")]),_:1}),e(a(t),{disabled:"",level:"info"},{default:n(()=>[l("info")]),_:1}),e(a(t),{disabled:"",level:"warning"},{default:n(()=>[l("warning")]),_:1}),e(a(t),{disabled:"",level:"danger"},{default:n(()=>[l("danger")]),_:1})]),u("div",I,[e(a(t),{disabled:"",theme:"link",level:"default"},{default:n(()=>[l("link default")]),_:1}),e(a(t),{disabled:"",theme:"link",level:"primary"},{default:n(()=>[l("link primary")]),_:1}),e(a(t),{disabled:"",theme:"link ",level:"success"},{default:n(()=>[l("link success")]),_:1}),e(a(t),{disabled:"",theme:"link ",level:"info"},{default:n(()=>[l("link info")]),_:1}),e(a(t),{disabled:"",theme:"link",level:"warning"},{default:n(()=>[l("link warning")]),_:1}),e(a(t),{disabled:"",theme:"link",level:"danger"},{default:n(()=>[l("link danger")]),_:1})]),u("div",F,[e(a(t),{disabled:"",theme:"text",level:"default"},{default:n(()=>[l("text default")]),_:1}),e(a(t),{disabled:"",theme:"text",level:"primary"},{default:n(()=>[l("text primary")]),_:1}),e(a(t),{disabled:"",theme:"text ",level:"success"},{default:n(()=>[l("text success")]),_:1}),e(a(t),{disabled:"",theme:"text ",level:"info"},{default:n(()=>[l("text info")]),_:1}),e(a(t),{disabled:"",theme:"text",level:"warning"},{default:n(()=>[l("text warning")]),_:1}),e(a(t),{disabled:"",theme:"text",level:"danger"},{default:n(()=>[l("text danger")]),_:1})])],64))}}),p=r=>{r.__sourceCode=`<template>\r
    <!-- disabled -->\r
    <div>\r
        <hx-button disabled level="default" >default</hx-button>\r
        <hx-button disabled level="primary">primary</hx-button>\r
        <hx-button disabled level="success" >success</hx-button>\r
        <hx-button disabled level="info" >info</hx-button>\r
        <hx-button disabled level="warning" >warning</hx-button>\r
        <hx-button disabled level="danger"  >danger</hx-button>\r
    </div>\r
    <div style="padding-top: 20px;">\r
        <hx-button disabled theme="link" level="default" >link default</hx-button>\r
        <hx-button disabled theme="link" level="primary">link primary</hx-button>\r
        <hx-button disabled theme="link " level="success" >link success</hx-button>\r
        <hx-button disabled theme="link " level="info" >link info</hx-button>\r
        <hx-button disabled theme="link" level="warning" >link warning</hx-button>\r
        <hx-button disabled theme="link" level="danger" >link danger</hx-button>\r
    </div>\r
    <div style="padding-top: 20px;">\r
        <hx-button disabled theme="text" level="default" >text default</hx-button>\r
        <hx-button disabled theme="text" level="primary">text primary</hx-button>\r
        <hx-button disabled theme="text " level="success" >text success</hx-button>\r
        <hx-button disabled theme="text " level="info" >text info</hx-button>\r
        <hx-button disabled theme="text" level="warning" >text warning</hx-button>\r
        <hx-button disabled theme="text" level="danger" >text danger</hx-button>\r
    </div>\r
</template>\r
  \r
<script lang="ts" setup>\r
    import { HxButton } from 'hx-gulu-ui';\r
<\/script>`,r.__sourceCodeTitle="禁用按钮"};typeof p=="function"&&p(g);const y=i({__name:"ButtonDemo04",setup(r){return(s,x)=>(d(),o("div",null,[e(a(t),{loading:"",level:"default"},{default:n(()=>[l("default")]),_:1}),e(a(t),{loading:"",level:"primary"},{default:n(()=>[l("primary")]),_:1}),e(a(t),{loading:"",level:"success"},{default:n(()=>[l("success")]),_:1}),e(a(t),{loading:"",level:"info"},{default:n(()=>[l("info")]),_:1}),e(a(t),{loading:"",level:"warning"},{default:n(()=>[l("warning")]),_:1}),e(a(t),{loading:"",level:"danger"},{default:n(()=>[l("danger")]),_:1})]))}}),v=r=>{r.__sourceCode=`<template>\r
    <!-- loading -->\r
    <div>\r
        <hx-button loading level="default" >default</hx-button>\r
        <hx-button loading level="primary">primary</hx-button>\r
        <hx-button loading level="success" >success</hx-button>\r
        <hx-button loading level="info" >info</hx-button>\r
        <hx-button loading level="warning" >warning</hx-button>\r
        <hx-button loading level="danger"  >danger</hx-button>\r
    </div>\r
</template>\r
  \r
<script lang="ts" setup>\r
    import { HxButton } from 'hx-gulu-ui';\r
<\/script>`,r.__sourceCodeTitle="按钮加载中"};typeof v=="function"&&v(y);const k=r=>(w("data-v-4b53c7fe"),r=r(),B(),r),N={class:"doc-page"},P=k(()=>u("h2",null,"Button 组件示例 ",-1)),S=k(()=>u("p",{class:"doc-page-desc"},"常用的操作按钮。",-1)),V=i({__name:"ButtonPage",setup(r){return(s,x)=>(d(),o("div",N,[P,S,e(h,{component:_,usage:"尺寸 `size`: `large | normal | small`。 颜色等级 `level` : 'default' | 'primary' | 'success' | 'info' | 'warning' | 'danger'。 是否空心 `plain`。 是否圆角 `round` 。"}),e(h,{component:m,usage:"类型 `theme`: button | link | text。"}),e(h,{component:g,usage:"disable"}),e(h,{component:y,usage:"loading"})]))}});const q=$(V,[["__scopeId","data-v-4b53c7fe"]]);export{q as default};
