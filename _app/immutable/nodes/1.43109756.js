import{S,i as q,s as x,k as _,q as f,a as k,l as d,m as g,r as h,h as u,c as y,b as m,N as v,u as $,O as E,R as C}from"../chunks/index.e625c2ba.js";import{d as H}from"../chunks/singletons.55a8732f.js";const N=()=>{const s=H;return{page:{subscribe:s.page.subscribe},navigating:{subscribe:s.navigating.subscribe},updated:s.updated}},O={subscribe(s){return N().page.subscribe(s)}};function P(s){var b;let t,r=s[0].status+"",o,n,i,c=((b=s[0].error)==null?void 0:b.message)+"",l;return{c(){t=_("h1"),o=f(r),n=k(),i=_("p"),l=f(c)},l(e){t=d(e,"H1",{});var a=g(t);o=h(a,r),a.forEach(u),n=y(e),i=d(e,"P",{});var p=g(i);l=h(p,c),p.forEach(u)},m(e,a){m(e,t,a),v(t,o),m(e,n,a),m(e,i,a),v(i,l)},p(e,[a]){var p;a&1&&r!==(r=e[0].status+"")&&$(o,r),a&1&&c!==(c=((p=e[0].error)==null?void 0:p.message)+"")&&$(l,c)},i:E,o:E,d(e){e&&u(t),e&&u(n),e&&u(i)}}}function R(s,t,r){let o;return C(s,O,n=>r(0,o=n)),[o]}let z=class extends S{constructor(t){super(),q(this,t,R,P,x,{})}};export{z as component};
