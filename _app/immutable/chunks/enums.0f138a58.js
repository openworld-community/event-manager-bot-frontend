import{S as g,i as E,s as I,k as f,q as L,a as N,l as d,m as y,r as q,h as b,c as A,n as u,D as S,b as F,N as v,F as P,U,u as k,O as p,V as C}from"./index.e625c2ba.js";const D=()=>{};function O(e){let a,s,o,c,l,i,m,_,h;return{c(){a=f("label"),s=f("span"),o=L(e[0]),c=N(),l=f("input"),this.h()},l(r){a=d(r,"LABEL",{class:!0});var n=y(a);s=d(n,"SPAN",{});var t=y(s);o=q(t,e[0]),t.forEach(b),c=A(n),l=d(n,"INPUT",{type:!0,class:!0,placeholder:!0,autocomplete:!0}),n.forEach(b),this.h()},h(){u(l,"type",e[1]),l.value=i=e[5]?"":e[6],u(l,"class",m=S(`input input--${e[2]}`)+" svelte-5nas2m"),u(l,"placeholder",e[5]),u(l,"autocomplete",e[0]),u(a,"class","input--box svelte-5nas2m")},m(r,n){F(r,a,n),v(a,s),v(s,o),v(a,c),v(a,l),_||(h=P(l,"input",function(){U(e[3])&&e[3].apply(this,arguments)}),_=!0)},p(r,[n]){e=r,n&1&&k(o,e[0]),n&2&&u(l,"type",e[1]),n&96&&i!==(i=e[5]?"":e[6])&&l.value!==i&&(l.value=i),n&4&&m!==(m=S(`input input--${e[2]}`)+" svelte-5nas2m")&&u(l,"class",m),n&32&&u(l,"placeholder",e[5]),n&1&&u(l,"autocomplete",e[0])},i:p,o:p,d(r){r&&b(a),_=!1,h()}}}function T(e,a,s){let o,c=p,l=()=>(c(),c=C(r,t=>s(6,o=t)),r);e.$$.on_destroy.push(()=>c());let{label:i=""}=a,{type:m="text"}=a,{variant:_}=a,{handler:h=D}=a,{valueStore:r=void 0}=a;l();let{placeholder:n=""}=a;return e.$$set=t=>{"label"in t&&s(0,i=t.label),"type"in t&&s(1,m=t.type),"variant"in t&&s(2,_=t.variant),"handler"in t&&s(3,h=t.handler),"valueStore"in t&&l(s(4,r=t.valueStore)),"placeholder"in t&&s(5,n=t.placeholder)},[i,m,_,h,r,n,o]}class H extends g{constructor(a){super(),E(this,a,T,O,I,{label:0,type:1,variant:2,handler:3,valueStore:4,placeholder:5})}}var W=(e=>(e.menu="menu",e.formEvent="form-event",e))(W||{}),j=(e=>(e.primary="primary",e.secondary="secondary",e))(j||{}),w=(e=>(e.primary="primary",e.secondary="secondary",e.none="none",e))(w||{}),z=(e=>(e.aLittle="small-radius",e.aWhile="big-radius",e))(z||{});export{w as B,H as I,j as P,z as a,W as b};