import{S as h,i as L,s as U,y as W,a as $,k as q,q as u,z as w,c as A,l as y,m as C,r as c,h as b,A as F,b as N,C as p,u as d,g as H,d as I,B as P,R as D}from"../chunks/index.d7bc402a.js";import{u as Y,p as T}from"../chunks/effector.29b2d949.js";import{T as k}from"../chunks/TelegramScript.17422599.js";const S=Y(),z=T("123").on(S,()=>{var e;return(e=Telegram.WebApp.initDataUnsafe.user)==null?void 0:e.id.toString()}),B=T("Jane").on(S,()=>{var e;return(e=Telegram.WebApp.initDataUnsafe.user)==null?void 0:e.first_name}),E=T("Doe").on(S,()=>{var e;return(e=Telegram.WebApp.initDataUnsafe.user)==null?void 0:e.last_name});S();function J(e){let r,o,s,l,i,n,f,g,_,m;return r=new k({}),{c(){W(r.$$.fragment),o=$(),s=q("p"),l=u("Hello, "),i=u(e[0]),n=$(),f=u(e[1]),g=u("! Your id is "),_=u(e[2])},l(t){w(r.$$.fragment,t),o=A(t),s=y(t,"P",{});var a=C(s);l=c(a,"Hello, "),i=c(a,e[0]),n=A(a),f=c(a,e[1]),g=c(a,"! Your id is "),_=c(a,e[2]),a.forEach(b)},m(t,a){F(r,t,a),N(t,o,a),N(t,s,a),p(s,l),p(s,i),p(s,n),p(s,f),p(s,g),p(s,_),m=!0},p(t,[a]){(!m||a&1)&&d(i,t[0]),(!m||a&2)&&d(f,t[1]),(!m||a&4)&&d(_,t[2])},i(t){m||(H(r.$$.fragment,t),m=!0)},o(t){I(r.$$.fragment,t),m=!1},d(t){P(r,t),t&&b(o),t&&b(s)}}}function R(e,r,o){let s,l,i;return D(e,B,n=>o(0,s=n)),D(e,E,n=>o(1,l=n)),D(e,z,n=>o(2,i=n)),[s,l,i]}class K extends h{constructor(r){super(),L(this,r,R,J,U,{})}}export{K as component};
