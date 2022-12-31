import{j as u,u as g,a as c,r as A}from"./index.3e366169.js";import{H as C}from"./index.9056099a.js";const E=e=>u("li",{className:"target",style:{color:e.color,border:`1px solid ${e.color} `},children:e.text});const B=e=>{const r=g();return c("section",{className:"card",children:[u("div",{className:"imgBox",children:u("img",{src:e.icon,alt:""})}),u("div",{className:"content",children:c("div",{children:[u("h3",{children:e.title}),u("p",{children:e.text}),u("div",{className:"go-to",onClick:()=>{e.route.startsWith("/")?r(e.route):window.location.href=e.route},children:"\u67E5\u770B"})]})})]})};const h=""+new URL("icon.21e912c6.jpg",import.meta.url).href,w="data:image/png;base64,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",m=""+new URL("code.64157b79.png",import.meta.url).href,D=""+new URL("startup.4a9b1782.png",import.meta.url).href,F=""+new URL("github.6a0e54a9.png",import.meta.url).href,N=()=>{const e=A.exports.useRef(null),r=()=>{var t;(t=e.current)==null||t.scrollIntoView({behavior:"smooth"})},[i,a]=A.exports.useState(""),n=A.exports.useRef(0);A.exports.useEffect(()=>{const t=["\u5C71\u6709\u6728\u516E\u6728\u6709\u679D\uFF0C\u5FC3\u60A6\u541B\u516E\u541B\u4E0D\u77E5\u3002","\u4EBA\u751F\u82E5\u53EA\u5982\u521D\u89C1\uFF0C\u4F55\u4E8B\u79CB\u98CE\u60B2\u753B\u6247\u3002","\u5341\u5E74\u751F\u6B7B\u4E24\u832B\u832B\uFF0C\u4E0D\u601D\u91CF\uFF0C\u81EA\u96BE\u5FD8\u3002","\u66FE\u7ECF\u6CA7\u6D77\u96BE\u4E3A\u6C34\uFF0C\u9664\u5374\u5DEB\u5C71\u4E0D\u662F\u4E91\u3002","\u5E73\u751F\u4E0D\u4F1A\u76F8\u601D\uFF0C\u624D\u4F1A\u76F8\u601D\uFF0C\u4FBF\u5BB3\u76F8\u601D\u3002","\u613F\u5F97\u4E00\u5FC3\u4EBA\uFF0C\u767D\u5934\u4E0D\u76F8\u79BB\u3002"],s=setInterval(()=>{const d=n.current%t.length,o=t[d];i.length<o.length?a(o.slice(0,i.length+1)):(a(""),n.current++)},800);return()=>clearInterval(s)},[i]);const l=[{text:"\u524D\u7AEF\u57FA\u5EFA",color:"green"},{text:"\u4EE3\u7801\u72C2",color:"blue"},{text:"\u6E90\u7801mini",color:"orange"},{text:"react\u6E90\u7801",color:"#bfa"},{text:"vue\u6E90\u7801",color:"#80c8f8"},{text:"webpack\u6E90\u7801",color:"#80c8f8"},{text:"vite\u6E90\u7801",color:"#80c8f8"},{text:"babel\u6E90\u7801",color:"#80c8f8"}];return c("div",{className:"home-page",children:[c("div",{className:"home-cover",children:[u(C,{}),c("div",{className:"cover-word",children:[u("div",{className:"word-top",children:"\u{1F34D}Sakura Blog"}),c("div",{className:"word-bottom",children:[i,u("span",{className:"input-split",children:"|"})]})]}),u("div",{className:"arrow-down",onClick:r,children:u("svg",{focusable:"false","data-icon":"down",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"64 64 896 896",children:u("path",{d:"M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"})})})]}),u("main",{className:"home-content",ref:e,children:c("section",{className:"main-content",children:[u("div",{className:"content-left",children:[{icon:w,title:"\u6587\u6863",text:"\u4E30\u5BCC\u7684\u6587\u6863\u96C6\u5408\uFF0C\u5168\u9762\u5177\u4F53",route:"/document"},{icon:m,title:"\u6E90\u7801\u89E3\u6790",text:"\u4ECE0\u52301,\u6784\u5EFA\u5C5E\u4E8E\u81EA\u5DF1\u7684mini\u6E90\u7801",route:"/socureCode"},{icon:D,title:"\u5728\u7EBF\u5DE5\u5177",text:"\u7F51\u9875\u7248\u5728\u7EBF\u5DE5\u5177",route:"/util"},{icon:F,title:"github",text:"\u53D1\u73B0\u66F4\u591A\u4F18\u8D28\u9879\u76EE",route:"https://github.com/sakura1227"}].map(t=>u(B,{...t},t.title))}),c("div",{className:"content-right",children:[c("div",{className:"title-bar",children:[u("div",{className:"title-icon",children:u("img",{src:h,alt:""})}),u("div",{className:"title-name",children:"sakura"}),c("div",{className:"title-text",children:[u("p",{children:"Sakura \u4E2A\u4EBA\u535A\u5BA2"}),u("p",{children:"\u6E90\u7801\u89E3\u6790"}),u("p",{children:"\u6536\u96C6\u591A\u79CD\u7AD9\u5185\u5DE5\u5177"})]})]}),u("hr",{style:{opacity:.5}}),c("div",{className:"des-bar",children:[c("div",{className:"des-target",children:[u("svg",{focusable:"false",className:"target-icon","data-icon":"tags",width:"1em",height:"1em",fill:"currentColor","aria-hidden":"true",viewBox:"64 64 896 896",children:u("path",{d:"M483.2 790.3L861.4 412c1.7-1.7 2.5-4 2.3-6.3l-25.5-301.4c-.7-7.8-6.8-13.9-14.6-14.6L522.2 64.3c-2.3-.2-4.7.6-6.3 2.3L137.7 444.8a8.03 8.03 0 000 11.3l334.2 334.2c3.1 3.2 8.2 3.2 11.3 0zm122.7-533.4c18.7-18.7 49.1-18.7 67.9 0 18.7 18.7 18.7 49.1 0 67.9-18.7 18.7-49.1 18.7-67.9 0-18.7-18.7-18.7-49.1 0-67.9zm283.8 282.9l-39.6-39.5a8.03 8.03 0 00-11.3 0l-362 361.3-237.6-237a8.03 8.03 0 00-11.3 0l-39.6 39.5a8.03 8.03 0 000 11.3l243.2 242.8 39.6 39.5c3.1 3.1 8.2 3.1 11.3 0l407.3-406.6c3.1-3.1 3.1-8.2 0-11.3z"})}),u("span",{children:"\u6807\u7B7E"})]}),u("div",{className:"target-container",children:l.map(t=>u("div",{className:"target",children:u(E,{text:t.text,color:t.color})},t.text))})]})]})]})}),u("footer",{style:{height:"200px"}})]})};export{N as default};
