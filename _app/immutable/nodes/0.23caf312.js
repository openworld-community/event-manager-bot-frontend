import{S as y,i as g,s as v,k as h,q as c,l as b,m as F,r as u,h as f,b as m,C as _,u as w,D as p,o as E,E as O,a as S,y as M,c as j,z as k,A as q,F as z,G as A,H as C,g as $,d,B as T}from"../chunks/index.0de6812f.js";const V=!0,L=Object.freeze(Object.defineProperty({__proto__:null,prerender:V},Symbol.toStringTag,{value:"Module"}));function x(l){let t,r,s,o;return{c(){t=h("footer"),r=c("Frontend Version: '"),s=c(l[0]),o=c("'")},l(a){t=b(a,"FOOTER",{});var n=F(t);r=u(n,"Frontend Version: '"),s=u(n,l[0]),o=u(n,"'"),n.forEach(f)},m(a,n){m(a,t,n),_(t,r),_(t,s),_(t,o)},p(a,[n]){n&1&&w(s,a[0])},i:p,o:p,d(a){a&&f(t)}}}function B(l,t,r){let s="Unknown";return E(async()=>{const o=await fetch("/version.txt");r(0,s=await o.text())}),[s]}class D extends y{constructor(t){super(),g(this,t,B,x,v,{})}}function G(l){let t,r,s,o;const a=l[1].default,n=O(a,l,l[0],null);return s=new D({}),{c(){t=h("main"),n&&n.c(),r=S(),M(s.$$.fragment)},l(e){t=b(e,"MAIN",{});var i=F(t);n&&n.l(i),i.forEach(f),r=j(e),k(s.$$.fragment,e)},m(e,i){m(e,t,i),n&&n.m(t,null),m(e,r,i),q(s,e,i),o=!0},p(e,[i]){n&&n.p&&(!o||i&1)&&z(n,a,e,e[0],o?C(a,e[0],i,null):A(e[0]),null)},i(e){o||($(n,e),$(s.$$.fragment,e),o=!0)},o(e){d(n,e),d(s.$$.fragment,e),o=!1},d(e){e&&f(t),n&&n.d(e),e&&f(r),T(s,e)}}}function H(l,t,r){let{$$slots:s={},$$scope:o}=t;return l.$$set=a=>{"$$scope"in a&&r(0,o=a.$$scope)},[o,s]}class N extends y{constructor(t){super(),g(this,t,H,G,v,{})}}export{N as component,L as universal};
