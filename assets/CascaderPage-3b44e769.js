import{a as s,D as v}from"./Demo-5d5d6c5d.js";import{g as o,j as d,o as u,k as p,u as m,c as g,a as h,p as _,f,b as t,_ as k}from"./index-c0b4609c.js";const i=o({__name:"CascaderDemo01",setup(e){const l=d([]),a=[{value:"guide",label:"Guide",children:[{value:"disciplines",label:"Disciplines",children:[{value:"consistency",label:"Consistency"},{value:"feedback",label:"Feedback"},{value:"efficiency",label:"Efficiency"},{value:"controllability",label:"Controllability"}]},{value:"navigation",label:"Navigation",children:[{value:"side nav",label:"Side Navigation"},{value:"top nav",label:"Top Navigation"}]}]},{value:"component",label:"Component",children:[{value:"basic",label:"Basic",children:[{value:"layout",label:"Layout"},{value:"color",label:"Color"},{value:"typography",label:"Typography"},{value:"icon",label:"Icon"},{value:"button",label:"Button"}]},{value:"form",label:"Form",children:[{value:"radio",label:"Radio"},{value:"checkbox",label:"Checkbox"},{value:"input",label:"Input"},{value:"input-number",label:"InputNumber"},{value:"select",label:"Select"},{value:"cascader",label:"Cascader"},{value:"switch",label:"Switch"},{value:"slider",label:"Slider"},{value:"time-picker",label:"TimePicker"},{value:"date-picker",label:"DatePicker"},{value:"datetime-picker",label:"DateTimePicker"},{value:"upload",label:"Upload"},{value:"rate",label:"Rate"},{value:"form",label:"Form"}]},{value:"data",label:"Data",children:[{value:"table",label:"Table"},{value:"tag",label:"Tag"},{value:"progress",label:"Progress"},{value:"tree",label:"Tree"},{value:"pagination",label:"Pagination"},{value:"badge",label:"Badge"}]},{value:"notice",label:"Notice",children:[{value:"alert",label:"Alert"},{value:"loading",label:"Loading"},{value:"message",label:"Message"},{value:"message-box",label:"MessageBox"},{value:"notification",label:"Notification"}]},{value:"navigation",label:"Navigation",children:[{value:"menu",label:"Menu"},{value:"tabs",label:"Tabs"},{value:"breadcrumb",label:"Breadcrumb"},{value:"dropdown",label:"Dropdown"},{value:"steps",label:"Steps"}]},{value:"others",label:"Others",children:[{value:"dialog",label:"Dialog"},{value:"tooltip",label:"Tooltip"},{value:"popover",label:"Popover"},{value:"card",label:"Card"},{value:"carousel",label:"Carousel"},{value:"collapse",label:"Collapse"}]}]},{value:"resource",label:"Resource",children:[{value:"axure",label:"Axure Components"},{value:"sketch",label:"Sketch Templates"},{value:"docs",label:"Design Documentation"}]}];return(D,n)=>(u(),p(m(s),{modelValue:l.value,"onUpdate:modelValue":n[0]||(n[0]=b=>l.value=b),options:a},null,8,["modelValue"]))}}),r=e=>{e.__sourceCode=`<template>\r
    <hx-cascader \r
        v-model="value"\r
        :options="options"\r
    ></hx-cascader>\r
</template>\r
  \r
<script lang="ts" setup>\r
  import { HxCascader } from 'hx-gulu-ui';\r
  import { ref } from 'vue'\r
  \r
  const value = ref([])\r
\r
  const options = [\r
    {\r
      value: 'guide',\r
      label: 'Guide',\r
      children: [\r
        {\r
          value: 'disciplines',\r
          label: 'Disciplines',\r
          children: [\r
            {\r
              value: 'consistency',\r
              label: 'Consistency',\r
            },\r
            {\r
              value: 'feedback',\r
              label: 'Feedback',\r
            },\r
            {\r
              value: 'efficiency',\r
              label: 'Efficiency',\r
            },\r
            {\r
              value: 'controllability',\r
              label: 'Controllability',\r
            },\r
          ],\r
        },\r
        {\r
          value: 'navigation',\r
          label: 'Navigation',\r
          children: [\r
            {\r
              value: 'side nav',\r
              label: 'Side Navigation',\r
            },\r
            {\r
              value: 'top nav',\r
              label: 'Top Navigation',\r
            },\r
          ],\r
        },\r
      ],\r
    },\r
    {\r
      value: 'component',\r
      label: 'Component',\r
      children: [\r
        {\r
          value: 'basic',\r
          label: 'Basic',\r
          children: [\r
            {\r
              value: 'layout',\r
              label: 'Layout',\r
            },\r
            {\r
              value: 'color',\r
              label: 'Color',\r
            },\r
            {\r
              value: 'typography',\r
              label: 'Typography',\r
            },\r
            {\r
              value: 'icon',\r
              label: 'Icon',\r
            },\r
            {\r
              value: 'button',\r
              label: 'Button',\r
            },\r
          ],\r
        },\r
        {\r
          value: 'form',\r
          label: 'Form',\r
          children: [\r
            {\r
              value: 'radio',\r
              label: 'Radio',\r
            },\r
            {\r
              value: 'checkbox',\r
              label: 'Checkbox',\r
            },\r
            {\r
              value: 'input',\r
              label: 'Input',\r
            },\r
            {\r
              value: 'input-number',\r
              label: 'InputNumber',\r
            },\r
            {\r
              value: 'select',\r
              label: 'Select',\r
            },\r
            {\r
              value: 'cascader',\r
              label: 'Cascader',\r
            },\r
            {\r
              value: 'switch',\r
              label: 'Switch',\r
            },\r
            {\r
              value: 'slider',\r
              label: 'Slider',\r
            },\r
            {\r
              value: 'time-picker',\r
              label: 'TimePicker',\r
            },\r
            {\r
              value: 'date-picker',\r
              label: 'DatePicker',\r
            },\r
            {\r
              value: 'datetime-picker',\r
              label: 'DateTimePicker',\r
            },\r
            {\r
              value: 'upload',\r
              label: 'Upload',\r
            },\r
            {\r
              value: 'rate',\r
              label: 'Rate',\r
            },\r
            {\r
              value: 'form',\r
              label: 'Form',\r
            },\r
          ],\r
        },\r
        {\r
          value: 'data',\r
          label: 'Data',\r
          children: [\r
            {\r
              value: 'table',\r
              label: 'Table',\r
            },\r
            {\r
              value: 'tag',\r
              label: 'Tag',\r
            },\r
            {\r
              value: 'progress',\r
              label: 'Progress',\r
            },\r
            {\r
              value: 'tree',\r
              label: 'Tree',\r
            },\r
            {\r
              value: 'pagination',\r
              label: 'Pagination',\r
            },\r
            {\r
              value: 'badge',\r
              label: 'Badge',\r
            },\r
          ],\r
        },\r
        {\r
          value: 'notice',\r
          label: 'Notice',\r
          children: [\r
            {\r
              value: 'alert',\r
              label: 'Alert',\r
            },\r
            {\r
              value: 'loading',\r
              label: 'Loading',\r
            },\r
            {\r
              value: 'message',\r
              label: 'Message',\r
            },\r
            {\r
              value: 'message-box',\r
              label: 'MessageBox',\r
            },\r
            {\r
              value: 'notification',\r
              label: 'Notification',\r
            },\r
          ],\r
        },\r
        {\r
          value: 'navigation',\r
          label: 'Navigation',\r
          children: [\r
            {\r
              value: 'menu',\r
              label: 'Menu',\r
            },\r
            {\r
              value: 'tabs',\r
              label: 'Tabs',\r
            },\r
            {\r
              value: 'breadcrumb',\r
              label: 'Breadcrumb',\r
            },\r
            {\r
              value: 'dropdown',\r
              label: 'Dropdown',\r
            },\r
            {\r
              value: 'steps',\r
              label: 'Steps',\r
            },\r
          ],\r
        },\r
        {\r
          value: 'others',\r
          label: 'Others',\r
          children: [\r
            {\r
              value: 'dialog',\r
              label: 'Dialog',\r
            },\r
            {\r
              value: 'tooltip',\r
              label: 'Tooltip',\r
            },\r
            {\r
              value: 'popover',\r
              label: 'Popover',\r
            },\r
            {\r
              value: 'card',\r
              label: 'Card',\r
            },\r
            {\r
              value: 'carousel',\r
              label: 'Carousel',\r
            },\r
            {\r
              value: 'collapse',\r
              label: 'Collapse',\r
            },\r
          ],\r
        },\r
      ],\r
    },\r
    {\r
      value: 'resource',\r
      label: 'Resource',\r
      children: [\r
        {\r
          value: 'axure',\r
          label: 'Axure Components',\r
        },\r
        {\r
          value: 'sketch',\r
          label: 'Sketch Templates',\r
        },\r
        {\r
          value: 'docs',\r
          label: 'Design Documentation',\r
        },\r
      ],\r
    },\r
  ]\r
  <\/script>`,e.__sourceCodeTitle="基本用法"};typeof r=="function"&&r(i);const c=e=>(_("data-v-96dea2ee"),e=e(),f(),e),C={class:"doc-page"},y=c(()=>t("h2",null,"Cascader 级联选择器 ",-1)),x=c(()=>t("p",{class:"doc-page-desc"},"当一个数据集合有清晰的层级结构时，可通过级联选择器逐级查看并选择",-1)),T=o({__name:"CascaderPage",setup(e){return(l,a)=>(u(),g("div",C,[y,x,h(v,{component:i})]))}});const S=k(T,[["__scopeId","data-v-96dea2ee"]]);export{S as default};
