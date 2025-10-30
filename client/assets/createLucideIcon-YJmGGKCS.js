import{p as e,v as j,x as n,a as o}from"./chunk-OIYGIGL5-DLnrNNij.js";const C=()=>e.jsxs("div",{className:"bg-neutral-950 px-30 py-20",children:[e.jsxs("div",{className:"w-full flex flex-row justify-between",children:[e.jsxs("div",{className:"w-50",children:[e.jsx("h1",{className:"text-lg text-neutral-50 font-semibold",children:"INCT - CQA"}),e.jsx("p",{className:"text-md text-neutral-400 mt-5",children:"Promovendo a colaboração entre instituições acadêmicas de excelência"})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg text-neutral-50 font-semibold",children:"Navegação"}),e.jsx("p",{className:"text-md text-neutral-400 mt-5",children:"Home"}),e.jsx("p",{className:"text-md text-neutral-400 mt-2",children:"Sobre"}),e.jsx("p",{className:"text-md text-neutral-400 mt-2",children:"Institutos"}),e.jsx("p",{className:"text-md text-neutral-400 mt-2",children:"Membros"})]}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-lg text-neutral-50 font-semibold",children:"Contato"}),e.jsx("p",{className:"text-md text-neutral-400 mt-5",children:"contato@email.com"})]})]}),e.jsx("div",{className:"w-full border border-neutral-500/50 my-10"}),e.jsx("p",{className:"text-center text-lg text-neutral-400",children:"© 2025 LACIQ - UFPE. Todos os direitos reservados."})]}),y=()=>{const t=j();return e.jsx("div",{className:"w-full px-30 mt-5 fixed top-0 z-10",children:e.jsxs("div",{className:`\r
                    w-full h-20 rounded-2xl bg-neutral-800/25\r
                    relative flex flex-row items-center justify-between`,children:[e.jsx("div",{className:"w-full h-20 rounded-2xl bg-red-800/25 blur-lg absolute top-0 z-1"}),e.jsx("h1",{className:"font-bold text-xl ml-20 z-2",children:"INCT-CQA"}),e.jsxs("div",{className:"flex flex-row gap-x-7 mr-20 z-2",children:[e.jsx(n,{to:"/",children:e.jsx("p",{className:"text-lg",style:t.pathname==="/"?{color:"var(--color-red-500)",fontWeight:"600"}:{},children:"Home"})}),e.jsx(n,{to:"/about",children:e.jsx("p",{className:"text-lg",style:t.pathname==="/about"?{color:"var(--color-red-500)",fontWeight:"600"}:{},children:"Sobre"})}),e.jsx(n,{to:"/institutes",children:e.jsx("p",{className:"text-lg",style:t.pathname==="/institutes"?{color:"var(--color-red-500)",fontWeight:"600"}:{},children:"Institutos"})}),e.jsx(n,{to:"/members",children:e.jsx("p",{className:"text-lg",style:t.pathname==="/members"?{color:"var(--color-red-500)",fontWeight:"600"}:{},children:"Membros"})})]})]})})};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),N=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(s,r,a)=>a?a.toUpperCase():r.toLowerCase()),d=t=>{const s=N(t);return s.charAt(0).toUpperCase()+s.slice(1)},x=(...t)=>t.filter((s,r,a)=>!!s&&s.trim()!==""&&a.indexOf(s)===r).join(" ").trim(),b=t=>{for(const s in t)if(s.startsWith("aria-")||s==="role"||s==="title")return!0};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var g={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v=o.forwardRef(({color:t="currentColor",size:s=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:c="",children:l,iconNode:m,...i},u)=>o.createElement("svg",{ref:u,...g,width:s,height:s,stroke:t,strokeWidth:a?Number(r)*24/Number(s):r,className:x("lucide",c),...!l&&!b(i)&&{"aria-hidden":"true"},...i},[...m.map(([h,p])=>o.createElement(h,p)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.548.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A=(t,s)=>{const r=o.forwardRef(({className:a,...c},l)=>o.createElement(v,{ref:l,iconNode:s,className:x(`lucide-${f(d(t))}`,`lucide-${t}`,a),...c}));return r.displayName=d(t),r};export{C as F,y as H,A as c};
