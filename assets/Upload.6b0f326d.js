import{_ as g,e as b,h as f,r as c,o as d,f as h,b as p,w as _,F as m,i as S,c as k,a as i,t as v,p as w,j as x,g as y,k as $}from"./index.b37d5500.js";const C={setup(){function t(e){if(e===0)return"0 Bytes";const s=1024,l=["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"],n=Math.floor(Math.log(e)/Math.log(s));return parseFloat((e/Math.pow(s,n)).toFixed(2))+" "+l[n]}const a=b([]);async function r(){const e=await f({url:"http://localhost:5001"}),s=[];for await(const l of e.pin.ls({type:"recursive"}))s.push(l.cid.toString());return console.log("pins:",s),s}r().then(async e=>{await o(e),console.log("files:",a)}).catch(e=>console.error(e));async function o(e){const s=await f({url:"http://localhost:5001"});for(const l of e){const n=await s.files.stat(`/ipfs/${l}`);console.log("file:",n),a.value.push({name:n.name,size:t(n.size),hash:l})}}return{files:a}}},I=t=>(w("data-v-7835be0e"),t=t(),x(),t),M=I(()=>i("strong",{class:"fLtittle"},"\u5DF2\u63D0\u4EA4\u7684\u6587\u4EF6:",-1)),U=y("\uFF1A"),z=y(" \u5927\u5C0F\uFF1A");function j(t,a,r,o,e,s){const l=c("CircleCheckFilled"),n=c("el-icon"),B=c("el-col"),F=c("el-row");return d(),h(m,null,[M,p(F,{class:"filelist"},{default:_(()=>[(d(!0),h(m,null,S(o.files,u=>(d(),k(B,{key:u.hash},{default:_(()=>[p(n,null,{default:_(()=>[p(l)]),_:1}),U,i("span",null,v(u.hash),1),z,i("span",null,"("+v(u.size)+")",1)]),_:2},1024))),128))]),_:1})],64)}var L=g(C,[["render",j],["__scopeId","data-v-7835be0e"]]);const N={components:{Filelist:L},setup(){const t=b(null);return{file:t,handleFileUpload:o=>{t.value=o.target.files[0],console.log(t.value)},onSubmit:async()=>{const o=await f({url:"http://localhost:5001"}),e=new FileReader;e.onloadend=async()=>{await o.add(e.result)},e.readAsArrayBuffer(t.value)}}}},V=t=>(w("data-v-32c55331"),t=t(),x(),t),A=V(()=>i("button",{type:"submit"},"\u63D0\u4EA4",-1));function E(t,a,r,o,e,s){const l=c("Filelist");return d(),h("div",null,[i("form",{onSubmit:a[1]||(a[1]=$((...n)=>o.onSubmit&&o.onSubmit(...n),["prevent"])),class:"uploadform"},[i("input",{type:"file",ref:"file",onChange:a[0]||(a[0]=(...n)=>o.handleFileUpload&&o.handleFileUpload(...n)),accept:"video/mp4"},null,544),A],32),p(l)])}var T=g(N,[["render",E],["__scopeId","data-v-32c55331"]]);export{T as default};
