import{S as k,i as I,s as N,k as v,a as q,l as b,m as w,c as A,h,n as o,D as p,b as E,M as d,F,U as L,N as y,q as P,r as U,u as C,V as D}from"./index.5e13e6c8.js";const M=()=>{};function g(e){let l,n;return{c(){l=v("span"),n=P(e[0])},l(a){l=b(a,"SPAN",{});var s=w(l);n=U(s,e[0]),s.forEach(h)},m(a,s){E(a,l,s),d(l,n)},p(a,s){s&1&&C(n,a[0])},d(a){a&&h(l)}}}function R(e){let l,n,a,s,f,c,m,t=e[1]&&g(e);return{c(){l=v("label"),t&&t.c(),n=q(),a=v("input"),this.h()},l(r){l=b(r,"LABEL",{class:!0});var i=w(l);t&&t.l(i),n=A(i),a=b(i,"INPUT",{type:!0,class:!0,placeholder:!0,autocomplete:!0}),i.forEach(h),this.h()},h(){o(a,"type",e[2]),a.value=s=e[6]?"":e[7],o(a,"class",f=p(`input input--${e[3]}`)+" svelte-5nas2m"),o(a,"placeholder",e[6]),o(a,"autocomplete",e[0]),o(l,"class","input--box svelte-5nas2m")},m(r,i){E(r,l,i),t&&t.m(l,null),d(l,n),d(l,a),c||(m=F(a,"input",function(){L(e[4])&&e[4].apply(this,arguments)}),c=!0)},p(r,[i]){e=r,e[1]?t?t.p(e,i):(t=g(e),t.c(),t.m(l,n)):t&&(t.d(1),t=null),i&4&&o(a,"type",e[2]),i&192&&s!==(s=e[6]?"":e[7])&&a.value!==s&&(a.value=s),i&8&&f!==(f=p(`input input--${e[3]}`)+" svelte-5nas2m")&&o(a,"class",f),i&64&&o(a,"placeholder",e[6]),i&1&&o(a,"autocomplete",e[0])},i:y,o:y,d(r){r&&h(l),t&&t.d(),c=!1,m()}}}function T(e,l,n){let a,s=y,f=()=>(s(),s=D(_,u=>n(7,a=u)),_);e.$$.on_destroy.push(()=>s());let{label:c=""}=l,{labelShown:m=!0}=l,{type:t="text"}=l,{variant:r}=l,{handler:i=M}=l,{valueStore:_=void 0}=l;f();let{placeholder:S=""}=l;return e.$$set=u=>{"label"in u&&n(0,c=u.label),"labelShown"in u&&n(1,m=u.labelShown),"type"in u&&n(2,t=u.type),"variant"in u&&n(3,r=u.variant),"handler"in u&&n(4,i=u.handler),"valueStore"in u&&f(n(5,_=u.valueStore)),"placeholder"in u&&n(6,S=u.placeholder)},[c,m,t,r,i,_,S,a]}class K extends k{constructor(l){super(),I(this,l,T,R,N,{label:0,labelShown:1,type:2,variant:3,handler:4,valueStore:5,placeholder:6})}}var j=(e=>(e.menu="menu",e.formEvent="form-event",e))(j||{}),z=(e=>(e.primary="primary",e.secondary="secondary",e))(z||{}),G=(e=>(e.primary="primary",e.secondary="secondary",e.none="none",e))(G||{}),H=(e=>(e.smallRadius="small-radius",e.bigRadius="big-radius",e))(H||{});export{G as B,K as I,z as P,H as a,j as b};