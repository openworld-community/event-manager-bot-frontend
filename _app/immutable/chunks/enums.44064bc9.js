import{S as g,i as E,s as I,k as h,q as N,a as q,l as d,m as y,r as A,h as b,c as F,n as u,D as S,b as L,N as f,F as P,U,u as k,O as p,V as C}from"./index.e625c2ba.js";const D=()=>{};function O(e){let a,n,o,m,l,i,c,_,v;return{c(){a=h("label"),n=h("span"),o=N(e[0]),m=q(),l=h("input"),this.h()},l(r){a=d(r,"LABEL",{class:!0});var s=y(a);n=d(s,"SPAN",{});var t=y(n);o=A(t,e[0]),t.forEach(b),m=F(s),l=d(s,"INPUT",{type:!0,class:!0,placeholder:!0,autocomplete:!0}),s.forEach(b),this.h()},h(){u(l,"type",e[1]),l.value=i=e[5]?"":e[6],u(l,"class",c=S(`input input--${e[2]}`)+" svelte-5nas2m"),u(l,"placeholder",e[5]),u(l,"autocomplete",e[0]),u(a,"class","input--box svelte-5nas2m")},m(r,s){L(r,a,s),f(a,n),f(n,o),f(a,m),f(a,l),_||(v=P(l,"input",function(){U(e[3])&&e[3].apply(this,arguments)}),_=!0)},p(r,[s]){e=r,s&1&&k(o,e[0]),s&2&&u(l,"type",e[1]),s&96&&i!==(i=e[5]?"":e[6])&&l.value!==i&&(l.value=i),s&4&&c!==(c=S(`input input--${e[2]}`)+" svelte-5nas2m")&&u(l,"class",c),s&32&&u(l,"placeholder",e[5]),s&1&&u(l,"autocomplete",e[0])},i:p,o:p,d(r){r&&b(a),_=!1,v()}}}function R(e,a,n){let o,m=p,l=()=>(m(),m=C(r,t=>n(6,o=t)),r);e.$$.on_destroy.push(()=>m());let{label:i=""}=a,{type:c="text"}=a,{variant:_}=a,{handler:v=D}=a,{valueStore:r=void 0}=a;l();let{placeholder:s=""}=a;return e.$$set=t=>{"label"in t&&n(0,i=t.label),"type"in t&&n(1,c=t.type),"variant"in t&&n(2,_=t.variant),"handler"in t&&n(3,v=t.handler),"valueStore"in t&&l(n(4,r=t.valueStore)),"placeholder"in t&&n(5,s=t.placeholder)},[i,c,_,v,r,s,o]}class H extends g{constructor(a){super(),E(this,a,R,O,I,{label:0,type:1,variant:2,handler:3,valueStore:4,placeholder:5})}}var T=(e=>(e.menu="menu",e.formEvent="form-event",e))(T||{}),j=(e=>(e.primary="primary",e.secondary="secondary",e))(j||{}),w=(e=>(e.primary="primary",e.secondary="secondary",e.none="none",e))(w||{}),z=(e=>(e.smallRadius="small-radius",e.bigRadius="big-radius",e))(z||{});export{w as B,H as I,j as P,z as a,T as b};
