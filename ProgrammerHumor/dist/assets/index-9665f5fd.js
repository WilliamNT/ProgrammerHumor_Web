(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Hr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function Wr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=ne(r)?Jo(r):Wr(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(ne(e))return e;if(V(e))return e}}const qo=/;(?![^(]*\))/g,Qo=/:([^]+)/,Vo=/\/\*.*?\*\//gs;function Jo(e){const t={};return e.replace(Vo,"").split(qo).forEach(n=>{if(n){const r=n.split(Qo);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Kr(e){let t="";if(ne(e))t=e;else if(F(e))for(let n=0;n<e.length;n++){const r=Kr(e[n]);r&&(t+=r+" ")}else if(V(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const Go="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",es=Hr(Go);function Ii(e){return!!e||e===""}const Z={},bt=[],Pe=()=>{},ts=()=>!1,ns=/^on[^a-z]/,Hn=e=>ns.test(e),Yr=e=>e.startsWith("onUpdate:"),le=Object.assign,$r=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},rs=Object.prototype.hasOwnProperty,z=(e,t)=>rs.call(e,t),F=Array.isArray,Ft=e=>Wn(e)==="[object Map]",as=e=>Wn(e)==="[object Set]",L=e=>typeof e=="function",ne=e=>typeof e=="string",Xr=e=>typeof e=="symbol",V=e=>e!==null&&typeof e=="object",Ti=e=>V(e)&&L(e.then)&&L(e.catch),is=Object.prototype.toString,Wn=e=>is.call(e),os=e=>Wn(e).slice(8,-1),ss=e=>Wn(e)==="[object Object]",Zr=e=>ne(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Pn=Hr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Kn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},ls=/-(\w)/g,_t=Kn(e=>e.replace(ls,(t,n)=>n?n.toUpperCase():"")),fs=/\B([A-Z])/g,Ot=Kn(e=>e.replace(fs,"-$1").toLowerCase()),Si=Kn(e=>e.charAt(0).toUpperCase()+e.slice(1)),ar=Kn(e=>e?`on${Si(e)}`:""),Nn=(e,t)=>!Object.is(e,t),ir=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Rn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},cs=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ta;const us=()=>Ta||(Ta=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let xe;class ds{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=xe,!t&&xe&&(this.index=(xe.scopes||(xe.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=xe;try{return xe=this,t()}finally{xe=n}}}on(){xe=this}off(){xe=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function ms(e,t=xe){t&&t.active&&t.effects.push(e)}function ps(){return xe}const qr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Mi=e=>(e.w&qe)>0,Ni=e=>(e.n&qe)>0,hs=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=qe},vs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Mi(a)&&!Ni(a)?a.delete(e):t[n++]=a,a.w&=~qe,a.n&=~qe}t.length=n}},vr=new WeakMap;let Nt=0,qe=1;const gr=30;let we;const lt=Symbol(""),br=Symbol("");class Qr{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,ms(this,r)}run(){if(!this.active)return this.fn();let t=we,n=Xe;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=we,we=this,Xe=!0,qe=1<<++Nt,Nt<=gr?hs(this):Sa(this),this.fn()}finally{Nt<=gr&&vs(this),qe=1<<--Nt,we=this.parent,Xe=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){we===this?this.deferStop=!0:this.active&&(Sa(this),this.onStop&&this.onStop(),this.active=!1)}}function Sa(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Xe=!0;const Ri=[];function Et(){Ri.push(Xe),Xe=!1}function Ct(){const e=Ri.pop();Xe=e===void 0?!0:e}function me(e,t,n){if(Xe&&we){let r=vr.get(e);r||vr.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=qr()),Fi(a)}}function Fi(e,t){let n=!1;Nt<=gr?Ni(e)||(e.n|=qe,n=!Mi(e)):n=!e.has(we),n&&(e.add(we),we.deps.push(e))}function De(e,t,n,r,a,i){const o=vr.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&F(e)){const l=Number(r);o.forEach((u,d)=>{(d==="length"||d>=l)&&s.push(u)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":F(e)?Zr(n)&&s.push(o.get("length")):(s.push(o.get(lt)),Ft(e)&&s.push(o.get(br)));break;case"delete":F(e)||(s.push(o.get(lt)),Ft(e)&&s.push(o.get(br)));break;case"set":Ft(e)&&s.push(o.get(lt));break}if(s.length===1)s[0]&&yr(s[0]);else{const l=[];for(const u of s)u&&l.push(...u);yr(qr(l))}}function yr(e,t){const n=F(e)?e:[...e];for(const r of n)r.computed&&Ma(r);for(const r of n)r.computed||Ma(r)}function Ma(e,t){(e!==we||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const gs=Hr("__proto__,__v_isRef,__isVue"),ji=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Xr)),bs=Vr(),ys=Vr(!1,!0),xs=Vr(!0),Na=ws();function ws(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)me(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Et();const r=B(this)[t].apply(this,n);return Ct(),r}}),e}function _s(e){const t=B(this);return me(t,"has",e),t.hasOwnProperty(e)}function Vr(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?Ds:Bi:t?Ui:zi).get(r))return r;const o=F(r);if(!e){if(o&&z(Na,a))return Reflect.get(Na,a,i);if(a==="hasOwnProperty")return _s}const s=Reflect.get(r,a,i);return(Xr(a)?ji.has(a):gs(a))||(e||me(r,"get",a),t)?s:se(s)?o&&Zr(a)?s:s.value:V(s)?e?Hi(s):ea(s):s}}const As=Li(),ks=Li(!0);function Li(e=!1){return function(n,r,a,i){let o=n[r];if(Wt(o)&&se(o)&&!se(a))return!1;if(!e&&(!xr(a)&&!Wt(a)&&(o=B(o),a=B(a)),!F(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=F(n)&&Zr(r)?Number(r)<n.length:z(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?Nn(a,o)&&De(n,"set",r,a):De(n,"add",r,a)),l}}function Ps(e,t){const n=z(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&De(e,"delete",t,void 0),r}function Os(e,t){const n=Reflect.has(e,t);return(!Xr(t)||!ji.has(t))&&me(e,"has",t),n}function Es(e){return me(e,"iterate",F(e)?"length":lt),Reflect.ownKeys(e)}const Di={get:bs,set:As,deleteProperty:Ps,has:Os,ownKeys:Es},Cs={get:xs,set(e,t){return!0},deleteProperty(e,t){return!0}},Is=le({},Di,{get:ys,set:ks}),Jr=e=>e,Yn=e=>Reflect.getPrototypeOf(e);function cn(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&me(a,"get",t),me(a,"get",i));const{has:o}=Yn(a),s=r?Jr:n?ra:na;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function un(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&me(r,"has",e),me(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function dn(e,t=!1){return e=e.__v_raw,!t&&me(B(e),"iterate",lt),Reflect.get(e,"size",e)}function Ra(e){e=B(e);const t=B(this);return Yn(t).has.call(t,e)||(t.add(e),De(t,"add",e,e)),this}function Fa(e,t){t=B(t);const n=B(this),{has:r,get:a}=Yn(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Nn(t,o)&&De(n,"set",e,t):De(n,"add",e,t),this}function ja(e){const t=B(this),{has:n,get:r}=Yn(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&De(t,"delete",e,void 0),i}function La(){const e=B(this),t=e.size!==0,n=e.clear();return t&&De(e,"clear",void 0,void 0),n}function mn(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?Jr:e?ra:na;return!e&&me(s,"iterate",lt),o.forEach((u,d)=>r.call(a,l(u),l(d),i))}}function pn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=Ft(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,u=a[e](...r),d=n?Jr:t?ra:na;return!t&&me(i,"iterate",l?br:lt),{next(){const{value:m,done:g}=u.next();return g?{value:m,done:g}:{value:s?[d(m[0]),d(m[1])]:d(m),done:g}},[Symbol.iterator](){return this}}}}function Ke(e){return function(...t){return e==="delete"?!1:this}}function Ts(){const e={get(i){return cn(this,i)},get size(){return dn(this)},has:un,add:Ra,set:Fa,delete:ja,clear:La,forEach:mn(!1,!1)},t={get(i){return cn(this,i,!1,!0)},get size(){return dn(this)},has:un,add:Ra,set:Fa,delete:ja,clear:La,forEach:mn(!1,!0)},n={get(i){return cn(this,i,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:mn(!0,!1)},r={get(i){return cn(this,i,!0,!0)},get size(){return dn(this,!0)},has(i){return un.call(this,i,!0)},add:Ke("add"),set:Ke("set"),delete:Ke("delete"),clear:Ke("clear"),forEach:mn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=pn(i,!1,!1),n[i]=pn(i,!0,!1),t[i]=pn(i,!1,!0),r[i]=pn(i,!0,!0)}),[e,n,t,r]}const[Ss,Ms,Ns,Rs]=Ts();function Gr(e,t){const n=t?e?Rs:Ns:e?Ms:Ss;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(z(n,a)&&a in r?n:r,a,i)}const Fs={get:Gr(!1,!1)},js={get:Gr(!1,!0)},Ls={get:Gr(!0,!1)},zi=new WeakMap,Ui=new WeakMap,Bi=new WeakMap,Ds=new WeakMap;function zs(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Us(e){return e.__v_skip||!Object.isExtensible(e)?0:zs(os(e))}function ea(e){return Wt(e)?e:ta(e,!1,Di,Fs,zi)}function Bs(e){return ta(e,!1,Is,js,Ui)}function Hi(e){return ta(e,!0,Cs,Ls,Bi)}function ta(e,t,n,r,a){if(!V(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=Us(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function yt(e){return Wt(e)?yt(e.__v_raw):!!(e&&e.__v_isReactive)}function Wt(e){return!!(e&&e.__v_isReadonly)}function xr(e){return!!(e&&e.__v_isShallow)}function Wi(e){return yt(e)||Wt(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function Ki(e){return Rn(e,"__v_skip",!0),e}const na=e=>V(e)?ea(e):e,ra=e=>V(e)?Hi(e):e;function Hs(e){Xe&&we&&(e=B(e),Fi(e.dep||(e.dep=qr())))}function Ws(e,t){e=B(e);const n=e.dep;n&&yr(n)}function se(e){return!!(e&&e.__v_isRef===!0)}function jt(e){return se(e)?e.value:e}const Ks={get:(e,t,n)=>jt(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function Yi(e){return yt(e)?e:new Proxy(e,Ks)}var $i;class Ys{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[$i]=!1,this._dirty=!0,this.effect=new Qr(t,()=>{this._dirty||(this._dirty=!0,Ws(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return Hs(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}$i="__v_isReadonly";function $s(e,t,n=!1){let r,a;const i=L(e);return i?(r=e,a=Pe):(r=e.get,a=e.set),new Ys(r,a,i||!a,n)}function Ze(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){$n(i,t,n)}return a}function Oe(e,t,n,r){if(L(e)){const i=Ze(e,t,n,r);return i&&Ti(i)&&i.catch(o=>{$n(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Oe(e[i],t,n,r));return a}function $n(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const u=i.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ze(l,null,10,[e,o,s]);return}}Xs(e,n,a,r)}function Xs(e,t,n,r=!0){console.error(e)}let Kt=!1,wr=!1;const ae=[];let Me=0;const xt=[];let Le=null,at=0;const Xi=Promise.resolve();let aa=null;function Zs(e){const t=aa||Xi;return e?t.then(this?e.bind(this):e):t}function qs(e){let t=Me+1,n=ae.length;for(;t<n;){const r=t+n>>>1;Yt(ae[r])<e?t=r+1:n=r}return t}function ia(e){(!ae.length||!ae.includes(e,Kt&&e.allowRecurse?Me+1:Me))&&(e.id==null?ae.push(e):ae.splice(qs(e.id),0,e),Zi())}function Zi(){!Kt&&!wr&&(wr=!0,aa=Xi.then(Qi))}function Qs(e){const t=ae.indexOf(e);t>Me&&ae.splice(t,1)}function Vs(e){F(e)?xt.push(...e):(!Le||!Le.includes(e,e.allowRecurse?at+1:at))&&xt.push(e),Zi()}function Da(e,t=Kt?Me+1:0){for(;t<ae.length;t++){const n=ae[t];n&&n.pre&&(ae.splice(t,1),t--,n())}}function qi(e){if(xt.length){const t=[...new Set(xt)];if(xt.length=0,Le){Le.push(...t);return}for(Le=t,Le.sort((n,r)=>Yt(n)-Yt(r)),at=0;at<Le.length;at++)Le[at]();Le=null,at=0}}const Yt=e=>e.id==null?1/0:e.id,Js=(e,t)=>{const n=Yt(e)-Yt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function Qi(e){wr=!1,Kt=!0,ae.sort(Js);const t=Pe;try{for(Me=0;Me<ae.length;Me++){const n=ae[Me];n&&n.active!==!1&&Ze(n,null,14)}}finally{Me=0,ae.length=0,qi(),Kt=!1,aa=null,(ae.length||xt.length)&&Qi()}}function Gs(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Z;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:g}=r[d]||Z;g&&(a=n.map(A=>ne(A)?A.trim():A)),m&&(a=n.map(cs))}let s,l=r[s=ar(t)]||r[s=ar(_t(t))];!l&&i&&(l=r[s=ar(Ot(t))]),l&&Oe(l,e,6,a);const u=r[s+"Once"];if(u){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Oe(u,e,6,a)}}function Vi(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!L(e)){const l=u=>{const d=Vi(u,t,!0);d&&(s=!0,le(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(V(e)&&r.set(e,null),null):(F(i)?i.forEach(l=>o[l]=null):le(o,i),V(e)&&r.set(e,o),o)}function Xn(e,t){return!e||!Hn(t)?!1:(t=t.slice(2).replace(/Once$/,""),z(e,t[0].toLowerCase()+t.slice(1))||z(e,Ot(t))||z(e,t))}let Ne=null,Ji=null;function Fn(e){const t=Ne;return Ne=e,Ji=e&&e.type.__scopeId||null,t}function el(e,t=Ne,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&$a(-1);const i=Fn(t);let o;try{o=e(...a)}finally{Fn(i),r._d&&$a(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function or(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:u,render:d,renderCache:m,data:g,setupState:A,ctx:R,inheritAttrs:M}=e;let U,w;const E=Fn(e);try{if(n.shapeFlag&4){const j=a||r;U=Se(d.call(j,j,m,i,A,g,R)),w=l}else{const j=t;U=Se(j.length>1?j(i,{attrs:l,slots:s,emit:u}):j(i,null)),w=t.props?l:tl(l)}}catch(j){Dt.length=0,$n(j,e,1),U=ee($t)}let O=U;if(w&&M!==!1){const j=Object.keys(w),{shapeFlag:H}=O;j.length&&H&7&&(o&&j.some(Yr)&&(w=nl(w,o)),O=At(O,w))}return n.dirs&&(O=At(O),O.dirs=O.dirs?O.dirs.concat(n.dirs):n.dirs),n.transition&&(O.transition=n.transition),U=O,Fn(E),U}const tl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Hn(n))&&((t||(t={}))[n]=e[n]);return t},nl=(e,t)=>{const n={};for(const r in e)(!Yr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function rl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,u=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?za(r,o,u):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const g=d[m];if(o[g]!==r[g]&&!Xn(u,g))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?za(r,o,u):!0:!!o;return!1}function za(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!Xn(n,i))return!0}return!1}function al({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const il=e=>e.__isSuspense;function ol(e,t){t&&t.pendingBranch?F(e)?t.effects.push(...e):t.effects.push(e):Vs(e)}function sl(e,t){if(G){let n=G.provides;const r=G.parent&&G.parent.provides;r===n&&(n=G.provides=Object.create(r)),n[e]=t}}function On(e,t,n=!1){const r=G||Ne;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&L(t)?t.call(r.proxy):t}}const hn={};function En(e,t,n){return Gi(e,t,n)}function Gi(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Z){const s=ps()===(G==null?void 0:G.scope)?G:null;let l,u=!1,d=!1;if(se(e)?(l=()=>e.value,u=xr(e)):yt(e)?(l=()=>e,r=!0):F(e)?(d=!0,u=e.some(O=>yt(O)||xr(O)),l=()=>e.map(O=>{if(se(O))return O.value;if(yt(O))return ht(O);if(L(O))return Ze(O,s,2)})):L(e)?t?l=()=>Ze(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Oe(e,s,3,[g])}:l=Pe,t&&r){const O=l;l=()=>ht(O())}let m,g=O=>{m=w.onStop=()=>{Ze(O,s,4)}},A;if(Zt)if(g=Pe,t?n&&Oe(t,s,3,[l(),d?[]:void 0,g]):l(),a==="sync"){const O=ef();A=O.__watcherHandles||(O.__watcherHandles=[])}else return Pe;let R=d?new Array(e.length).fill(hn):hn;const M=()=>{if(w.active)if(t){const O=w.run();(r||u||(d?O.some((j,H)=>Nn(j,R[H])):Nn(O,R)))&&(m&&m(),Oe(t,s,3,[O,R===hn?void 0:d&&R[0]===hn?[]:R,g]),R=O)}else w.run()};M.allowRecurse=!!t;let U;a==="sync"?U=M:a==="post"?U=()=>ue(M,s&&s.suspense):(M.pre=!0,s&&(M.id=s.uid),U=()=>ia(M));const w=new Qr(l,U);t?n?M():R=w.run():a==="post"?ue(w.run.bind(w),s&&s.suspense):w.run();const E=()=>{w.stop(),s&&s.scope&&$r(s.scope.effects,w)};return A&&A.push(E),E}function ll(e,t,n){const r=this.proxy,a=ne(e)?e.includes(".")?eo(r,e):()=>r[e]:e.bind(r,r);let i;L(t)?i=t:(i=t.handler,n=t);const o=G;kt(this);const s=Gi(a,i.bind(r),n);return o?kt(o):ft(),s}function eo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function ht(e,t){if(!V(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))ht(e.value,t);else if(F(e))for(let n=0;n<e.length;n++)ht(e[n],t);else if(as(e)||Ft(e))e.forEach(n=>{ht(n,t)});else if(ss(e))for(const n in e)ht(e[n],t);return e}function dt(e){return L(e)?{setup:e,name:e.name}:e}const Cn=e=>!!e.type.__asyncLoader,to=e=>e.type.__isKeepAlive;function fl(e,t){no(e,"a",t)}function cl(e,t){no(e,"da",t)}function no(e,t,n=G){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(Zn(t,r,n),n){let a=n.parent;for(;a&&a.parent;)to(a.parent.vnode)&&ul(r,t,n,a),a=a.parent}}function ul(e,t,n,r){const a=Zn(t,e,r,!0);ro(()=>{$r(r[t],a)},n)}function Zn(e,t,n=G,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Et(),kt(n);const s=Oe(t,n,e,o);return ft(),Ct(),s});return r?a.unshift(i):a.push(i),i}}const He=e=>(t,n=G)=>(!Zt||e==="sp")&&Zn(e,(...r)=>t(...r),n),dl=He("bm"),ml=He("m"),pl=He("bu"),hl=He("u"),vl=He("bum"),ro=He("um"),gl=He("sp"),bl=He("rtg"),yl=He("rtc");function xl(e,t=G){Zn("ec",e,t)}function tt(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Et(),Oe(l,n,8,[e.el,s,e,t]),Ct())}}const wl=Symbol(),_r=e=>e?po(e)?fa(e)||e.proxy:_r(e.parent):null,Lt=le(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>_r(e.parent),$root:e=>_r(e.root),$emit:e=>e.emit,$options:e=>oa(e),$forceUpdate:e=>e.f||(e.f=()=>ia(e.update)),$nextTick:e=>e.n||(e.n=Zs.bind(e.proxy)),$watch:e=>ll.bind(e)}),sr=(e,t)=>e!==Z&&!e.__isScriptSetup&&z(e,t),_l={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let u;if(t[0]!=="$"){const A=o[t];if(A!==void 0)switch(A){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(sr(r,t))return o[t]=1,r[t];if(a!==Z&&z(a,t))return o[t]=2,a[t];if((u=e.propsOptions[0])&&z(u,t))return o[t]=3,i[t];if(n!==Z&&z(n,t))return o[t]=4,n[t];Ar&&(o[t]=0)}}const d=Lt[t];let m,g;if(d)return t==="$attrs"&&me(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Z&&z(n,t))return o[t]=4,n[t];if(g=l.config.globalProperties,z(g,t))return g[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return sr(a,t)?(a[t]=n,!0):r!==Z&&z(r,t)?(r[t]=n,!0):z(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Z&&z(e,o)||sr(t,o)||(s=i[0])&&z(s,o)||z(r,o)||z(Lt,o)||z(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:z(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ar=!0;function Al(e){const t=oa(e),n=e.proxy,r=e.ctx;Ar=!1,t.beforeCreate&&Ua(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:u,created:d,beforeMount:m,mounted:g,beforeUpdate:A,updated:R,activated:M,deactivated:U,beforeDestroy:w,beforeUnmount:E,destroyed:O,unmounted:j,render:H,renderTracked:fe,renderTriggered:re,errorCaptured:be,serverPrefetch:ve,expose:Fe,inheritAttrs:Tt,components:on,directives:sn,filters:tr}=t;if(u&&kl(u,r,null,e.appContext.config.unwrapInjectedRef),o)for(const q in o){const K=o[q];L(K)&&(r[q]=K.bind(n))}if(a){const q=a.call(n,n);V(q)&&(e.data=ea(q))}if(Ar=!0,i)for(const q in i){const K=i[q],Ge=L(K)?K.bind(n,n):L(K.get)?K.get.bind(n,n):Pe,ln=!L(K)&&L(K.set)?K.set.bind(n):Pe,et=ge({get:Ge,set:ln});Object.defineProperty(r,q,{enumerable:!0,configurable:!0,get:()=>et.value,set:Ee=>et.value=Ee})}if(s)for(const q in s)ao(s[q],r,n,q);if(l){const q=L(l)?l.call(n):l;Reflect.ownKeys(q).forEach(K=>{sl(K,q[K])})}d&&Ua(d,e,"c");function ie(q,K){F(K)?K.forEach(Ge=>q(Ge.bind(n))):K&&q(K.bind(n))}if(ie(dl,m),ie(ml,g),ie(pl,A),ie(hl,R),ie(fl,M),ie(cl,U),ie(xl,be),ie(yl,fe),ie(bl,re),ie(vl,E),ie(ro,j),ie(gl,ve),F(Fe))if(Fe.length){const q=e.exposed||(e.exposed={});Fe.forEach(K=>{Object.defineProperty(q,K,{get:()=>n[K],set:Ge=>n[K]=Ge})})}else e.exposed||(e.exposed={});H&&e.render===Pe&&(e.render=H),Tt!=null&&(e.inheritAttrs=Tt),on&&(e.components=on),sn&&(e.directives=sn)}function kl(e,t,n=Pe,r=!1){F(e)&&(e=kr(e));for(const a in e){const i=e[a];let o;V(i)?"default"in i?o=On(i.from||a,i.default,!0):o=On(i.from||a):o=On(i),se(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Ua(e,t,n){Oe(F(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function ao(e,t,n,r){const a=r.includes(".")?eo(n,r):()=>n[r];if(ne(e)){const i=t[e];L(i)&&En(a,i)}else if(L(e))En(a,e.bind(n));else if(V(e))if(F(e))e.forEach(i=>ao(i,t,n,r));else{const i=L(e.handler)?e.handler.bind(n):t[e.handler];L(i)&&En(a,i,e)}}function oa(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(u=>jn(l,u,o,!0)),jn(l,t,o)),V(t)&&i.set(t,l),l}function jn(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&jn(e,i,n,!0),a&&a.forEach(o=>jn(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Pl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Pl={data:Ba,props:rt,emits:rt,methods:rt,computed:rt,beforeCreate:oe,created:oe,beforeMount:oe,mounted:oe,beforeUpdate:oe,updated:oe,beforeDestroy:oe,beforeUnmount:oe,destroyed:oe,unmounted:oe,activated:oe,deactivated:oe,errorCaptured:oe,serverPrefetch:oe,components:rt,directives:rt,watch:El,provide:Ba,inject:Ol};function Ba(e,t){return t?e?function(){return le(L(e)?e.call(this,this):e,L(t)?t.call(this,this):t)}:t:e}function Ol(e,t){return rt(kr(e),kr(t))}function kr(e){if(F(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function oe(e,t){return e?[...new Set([].concat(e,t))]:t}function rt(e,t){return e?le(le(Object.create(null),e),t):t}function El(e,t){if(!e)return t;if(!t)return e;const n=le(Object.create(null),e);for(const r in t)n[r]=oe(e[r],t[r]);return n}function Cl(e,t,n,r=!1){const a={},i={};Rn(i,Qn,1),e.propsDefaults=Object.create(null),io(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:Bs(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Il(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let u=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let g=d[m];if(Xn(e.emitsOptions,g))continue;const A=t[g];if(l)if(z(i,g))A!==i[g]&&(i[g]=A,u=!0);else{const R=_t(g);a[R]=Pr(l,s,R,A,e,!1)}else A!==i[g]&&(i[g]=A,u=!0)}}}else{io(e,t,a,i)&&(u=!0);let d;for(const m in s)(!t||!z(t,m)&&((d=Ot(m))===m||!z(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Pr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!z(t,m))&&(delete i[m],u=!0)}u&&De(e,"set","$attrs")}function io(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Pn(l))continue;const u=t[l];let d;a&&z(a,d=_t(l))?!i||!i.includes(d)?n[d]=u:(s||(s={}))[d]=u:Xn(e.emitsOptions,l)||(!(l in r)||u!==r[l])&&(r[l]=u,o=!0)}if(i){const l=B(n),u=s||Z;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Pr(a,l,m,u[m],e,!z(u,m))}}return o}function Pr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=z(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&L(l)){const{propsDefaults:u}=a;n in u?r=u[n]:(kt(a),r=u[n]=l.call(null,t),ft())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===Ot(n))&&(r=!0))}return r}function oo(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!L(e)){const d=m=>{l=!0;const[g,A]=oo(m,t,!0);le(o,g),A&&s.push(...A)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return V(e)&&r.set(e,bt),bt;if(F(i))for(let d=0;d<i.length;d++){const m=_t(i[d]);Ha(m)&&(o[m]=Z)}else if(i)for(const d in i){const m=_t(d);if(Ha(m)){const g=i[d],A=o[m]=F(g)||L(g)?{type:g}:Object.assign({},g);if(A){const R=Ya(Boolean,A.type),M=Ya(String,A.type);A[0]=R>-1,A[1]=M<0||R<M,(R>-1||z(A,"default"))&&s.push(m)}}}const u=[o,s];return V(e)&&r.set(e,u),u}function Ha(e){return e[0]!=="$"}function Wa(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ka(e,t){return Wa(e)===Wa(t)}function Ya(e,t){return F(t)?t.findIndex(n=>Ka(n,e)):L(t)&&Ka(t,e)?0:-1}const so=e=>e[0]==="_"||e==="$stable",sa=e=>F(e)?e.map(Se):[Se(e)],Tl=(e,t,n)=>{if(t._n)return t;const r=el((...a)=>sa(t(...a)),n);return r._c=!1,r},lo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(so(a))continue;const i=e[a];if(L(i))t[a]=Tl(a,i,r);else if(i!=null){const o=sa(i);t[a]=()=>o}}},fo=(e,t)=>{const n=sa(t);e.slots.default=()=>n},Sl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),Rn(t,"_",n)):lo(t,e.slots={})}else e.slots={},t&&fo(e,t);Rn(e.slots,Qn,1)},Ml=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Z;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(le(a,t),!n&&s===1&&delete a._):(i=!t.$stable,lo(t,a)),o=t}else t&&(fo(e,t),o={default:1});if(i)for(const s in a)!so(s)&&!(s in o)&&delete a[s]};function co(){return{app:null,config:{isNativeTag:ts,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let Nl=0;function Rl(e,t){return function(r,a=null){L(r)||(r=Object.assign({},r)),a!=null&&!V(a)&&(a=null);const i=co(),o=new Set;let s=!1;const l=i.app={_uid:Nl++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:tf,get config(){return i.config},set config(u){},use(u,...d){return o.has(u)||(u&&L(u.install)?(o.add(u),u.install(l,...d)):L(u)&&(o.add(u),u(l,...d))),l},mixin(u){return i.mixins.includes(u)||i.mixins.push(u),l},component(u,d){return d?(i.components[u]=d,l):i.components[u]},directive(u,d){return d?(i.directives[u]=d,l):i.directives[u]},mount(u,d,m){if(!s){const g=ee(r,a);return g.appContext=i,d&&t?t(g,u):e(g,u,m),s=!0,l._container=u,u.__vue_app__=l,fa(g.component)||g.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(u,d){return i.provides[u]=d,l}};return l}}function Or(e,t,n,r,a=!1){if(F(e)){e.forEach((g,A)=>Or(g,t&&(F(t)?t[A]:t),n,r,a));return}if(Cn(r)&&!a)return;const i=r.shapeFlag&4?fa(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,u=t&&t.r,d=s.refs===Z?s.refs={}:s.refs,m=s.setupState;if(u!=null&&u!==l&&(ne(u)?(d[u]=null,z(m,u)&&(m[u]=null)):se(u)&&(u.value=null)),L(l))Ze(l,s,12,[o,d]);else{const g=ne(l),A=se(l);if(g||A){const R=()=>{if(e.f){const M=g?z(m,l)?m[l]:d[l]:l.value;a?F(M)&&$r(M,i):F(M)?M.includes(i)||M.push(i):g?(d[l]=[i],z(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else g?(d[l]=o,z(m,l)&&(m[l]=o)):A&&(l.value=o,e.k&&(d[e.k]=o))};o?(R.id=-1,ue(R,n)):R()}}}const ue=ol;function Fl(e){return jl(e)}function jl(e,t){const n=us();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:u,setElementText:d,parentNode:m,nextSibling:g,setScopeId:A=Pe,insertStaticContent:R}=e,M=(f,c,p,v=null,h=null,x=null,k=!1,y=null,_=!!c.dynamicChildren)=>{if(f===c)return;f&&!Mt(f,c)&&(v=fn(f),Ee(f,h,x,!0),f=null),c.patchFlag===-2&&(_=!1,c.dynamicChildren=null);const{type:b,ref:T,shapeFlag:C}=c;switch(b){case qn:U(f,c,p,v);break;case $t:w(f,c,p,v);break;case In:f==null&&E(c,p,v,k);break;case Te:on(f,c,p,v,h,x,k,y,_);break;default:C&1?H(f,c,p,v,h,x,k,y,_):C&6?sn(f,c,p,v,h,x,k,y,_):(C&64||C&128)&&b.process(f,c,p,v,h,x,k,y,_,mt)}T!=null&&h&&Or(T,f&&f.ref,x,c||f,!c)},U=(f,c,p,v)=>{if(f==null)r(c.el=s(c.children),p,v);else{const h=c.el=f.el;c.children!==f.children&&u(h,c.children)}},w=(f,c,p,v)=>{f==null?r(c.el=l(c.children||""),p,v):c.el=f.el},E=(f,c,p,v)=>{[f.el,f.anchor]=R(f.children,c,p,v,f.el,f.anchor)},O=({el:f,anchor:c},p,v)=>{let h;for(;f&&f!==c;)h=g(f),r(f,p,v),f=h;r(c,p,v)},j=({el:f,anchor:c})=>{let p;for(;f&&f!==c;)p=g(f),a(f),f=p;a(c)},H=(f,c,p,v,h,x,k,y,_)=>{k=k||c.type==="svg",f==null?fe(c,p,v,h,x,k,y,_):ve(f,c,h,x,k,y,_)},fe=(f,c,p,v,h,x,k,y)=>{let _,b;const{type:T,props:C,shapeFlag:S,transition:N,dirs:D}=f;if(_=f.el=o(f.type,x,C&&C.is,C),S&8?d(_,f.children):S&16&&be(f.children,_,null,v,h,x&&T!=="foreignObject",k,y),D&&tt(f,null,v,"created"),re(_,f,f.scopeId,k,v),C){for(const W in C)W!=="value"&&!Pn(W)&&i(_,W,null,C[W],x,f.children,v,h,je);"value"in C&&i(_,"value",null,C.value),(b=C.onVnodeBeforeMount)&&Ie(b,v,f)}D&&tt(f,null,v,"beforeMount");const Y=(!h||h&&!h.pendingBranch)&&N&&!N.persisted;Y&&N.beforeEnter(_),r(_,c,p),((b=C&&C.onVnodeMounted)||Y||D)&&ue(()=>{b&&Ie(b,v,f),Y&&N.enter(_),D&&tt(f,null,v,"mounted")},h)},re=(f,c,p,v,h)=>{if(p&&A(f,p),v)for(let x=0;x<v.length;x++)A(f,v[x]);if(h){let x=h.subTree;if(c===x){const k=h.vnode;re(f,k,k.scopeId,k.slotScopeIds,h.parent)}}},be=(f,c,p,v,h,x,k,y,_=0)=>{for(let b=_;b<f.length;b++){const T=f[b]=y?$e(f[b]):Se(f[b]);M(null,T,c,p,v,h,x,k,y)}},ve=(f,c,p,v,h,x,k)=>{const y=c.el=f.el;let{patchFlag:_,dynamicChildren:b,dirs:T}=c;_|=f.patchFlag&16;const C=f.props||Z,S=c.props||Z;let N;p&&nt(p,!1),(N=S.onVnodeBeforeUpdate)&&Ie(N,p,c,f),T&&tt(c,f,p,"beforeUpdate"),p&&nt(p,!0);const D=h&&c.type!=="foreignObject";if(b?Fe(f.dynamicChildren,b,y,p,v,D,x):k||K(f,c,y,null,p,v,D,x,!1),_>0){if(_&16)Tt(y,c,C,S,p,v,h);else if(_&2&&C.class!==S.class&&i(y,"class",null,S.class,h),_&4&&i(y,"style",C.style,S.style,h),_&8){const Y=c.dynamicProps;for(let W=0;W<Y.length;W++){const J=Y[W],ye=C[J],pt=S[J];(pt!==ye||J==="value")&&i(y,J,ye,pt,h,f.children,p,v,je)}}_&1&&f.children!==c.children&&d(y,c.children)}else!k&&b==null&&Tt(y,c,C,S,p,v,h);((N=S.onVnodeUpdated)||T)&&ue(()=>{N&&Ie(N,p,c,f),T&&tt(c,f,p,"updated")},v)},Fe=(f,c,p,v,h,x,k)=>{for(let y=0;y<c.length;y++){const _=f[y],b=c[y],T=_.el&&(_.type===Te||!Mt(_,b)||_.shapeFlag&70)?m(_.el):p;M(_,b,T,null,v,h,x,k,!0)}},Tt=(f,c,p,v,h,x,k)=>{if(p!==v){if(p!==Z)for(const y in p)!Pn(y)&&!(y in v)&&i(f,y,p[y],null,k,c.children,h,x,je);for(const y in v){if(Pn(y))continue;const _=v[y],b=p[y];_!==b&&y!=="value"&&i(f,y,b,_,k,c.children,h,x,je)}"value"in v&&i(f,"value",p.value,v.value)}},on=(f,c,p,v,h,x,k,y,_)=>{const b=c.el=f?f.el:s(""),T=c.anchor=f?f.anchor:s("");let{patchFlag:C,dynamicChildren:S,slotScopeIds:N}=c;N&&(y=y?y.concat(N):N),f==null?(r(b,p,v),r(T,p,v),be(c.children,p,T,h,x,k,y,_)):C>0&&C&64&&S&&f.dynamicChildren?(Fe(f.dynamicChildren,S,p,h,x,k,y),(c.key!=null||h&&c===h.subTree)&&uo(f,c,!0)):K(f,c,p,T,h,x,k,y,_)},sn=(f,c,p,v,h,x,k,y,_)=>{c.slotScopeIds=y,f==null?c.shapeFlag&512?h.ctx.activate(c,p,v,k,_):tr(c,p,v,h,x,k,_):ka(f,c,_)},tr=(f,c,p,v,h,x,k)=>{const y=f.component=Xl(f,v,h);if(to(f)&&(y.ctx.renderer=mt),Zl(y),y.asyncDep){if(h&&h.registerDep(y,ie),!f.el){const _=y.subTree=ee($t);w(null,_,c,p)}return}ie(y,f,c,p,h,x,k)},ka=(f,c,p)=>{const v=c.component=f.component;if(rl(f,c,p))if(v.asyncDep&&!v.asyncResolved){q(v,c,p);return}else v.next=c,Qs(v.update),v.update();else c.el=f.el,v.vnode=c},ie=(f,c,p,v,h,x,k)=>{const y=()=>{if(f.isMounted){let{next:T,bu:C,u:S,parent:N,vnode:D}=f,Y=T,W;nt(f,!1),T?(T.el=D.el,q(f,T,k)):T=D,C&&ir(C),(W=T.props&&T.props.onVnodeBeforeUpdate)&&Ie(W,N,T,D),nt(f,!0);const J=or(f),ye=f.subTree;f.subTree=J,M(ye,J,m(ye.el),fn(ye),f,h,x),T.el=J.el,Y===null&&al(f,J.el),S&&ue(S,h),(W=T.props&&T.props.onVnodeUpdated)&&ue(()=>Ie(W,N,T,D),h)}else{let T;const{el:C,props:S}=c,{bm:N,m:D,parent:Y}=f,W=Cn(c);if(nt(f,!1),N&&ir(N),!W&&(T=S&&S.onVnodeBeforeMount)&&Ie(T,Y,c),nt(f,!0),C&&rr){const J=()=>{f.subTree=or(f),rr(C,f.subTree,f,h,null)};W?c.type.__asyncLoader().then(()=>!f.isUnmounted&&J()):J()}else{const J=f.subTree=or(f);M(null,J,p,v,f,h,x),c.el=J.el}if(D&&ue(D,h),!W&&(T=S&&S.onVnodeMounted)){const J=c;ue(()=>Ie(T,Y,J),h)}(c.shapeFlag&256||Y&&Cn(Y.vnode)&&Y.vnode.shapeFlag&256)&&f.a&&ue(f.a,h),f.isMounted=!0,c=p=v=null}},_=f.effect=new Qr(y,()=>ia(b),f.scope),b=f.update=()=>_.run();b.id=f.uid,nt(f,!0),b()},q=(f,c,p)=>{c.component=f;const v=f.vnode.props;f.vnode=c,f.next=null,Il(f,c.props,v,p),Ml(f,c.children,p),Et(),Da(),Ct()},K=(f,c,p,v,h,x,k,y,_=!1)=>{const b=f&&f.children,T=f?f.shapeFlag:0,C=c.children,{patchFlag:S,shapeFlag:N}=c;if(S>0){if(S&128){ln(b,C,p,v,h,x,k,y,_);return}else if(S&256){Ge(b,C,p,v,h,x,k,y,_);return}}N&8?(T&16&&je(b,h,x),C!==b&&d(p,C)):T&16?N&16?ln(b,C,p,v,h,x,k,y,_):je(b,h,x,!0):(T&8&&d(p,""),N&16&&be(C,p,v,h,x,k,y,_))},Ge=(f,c,p,v,h,x,k,y,_)=>{f=f||bt,c=c||bt;const b=f.length,T=c.length,C=Math.min(b,T);let S;for(S=0;S<C;S++){const N=c[S]=_?$e(c[S]):Se(c[S]);M(f[S],N,p,null,h,x,k,y,_)}b>T?je(f,h,x,!0,!1,C):be(c,p,v,h,x,k,y,_,C)},ln=(f,c,p,v,h,x,k,y,_)=>{let b=0;const T=c.length;let C=f.length-1,S=T-1;for(;b<=C&&b<=S;){const N=f[b],D=c[b]=_?$e(c[b]):Se(c[b]);if(Mt(N,D))M(N,D,p,null,h,x,k,y,_);else break;b++}for(;b<=C&&b<=S;){const N=f[C],D=c[S]=_?$e(c[S]):Se(c[S]);if(Mt(N,D))M(N,D,p,null,h,x,k,y,_);else break;C--,S--}if(b>C){if(b<=S){const N=S+1,D=N<T?c[N].el:v;for(;b<=S;)M(null,c[b]=_?$e(c[b]):Se(c[b]),p,D,h,x,k,y,_),b++}}else if(b>S)for(;b<=C;)Ee(f[b],h,x,!0),b++;else{const N=b,D=b,Y=new Map;for(b=D;b<=S;b++){const pe=c[b]=_?$e(c[b]):Se(c[b]);pe.key!=null&&Y.set(pe.key,b)}let W,J=0;const ye=S-D+1;let pt=!1,Ea=0;const St=new Array(ye);for(b=0;b<ye;b++)St[b]=0;for(b=N;b<=C;b++){const pe=f[b];if(J>=ye){Ee(pe,h,x,!0);continue}let Ce;if(pe.key!=null)Ce=Y.get(pe.key);else for(W=D;W<=S;W++)if(St[W-D]===0&&Mt(pe,c[W])){Ce=W;break}Ce===void 0?Ee(pe,h,x,!0):(St[Ce-D]=b+1,Ce>=Ea?Ea=Ce:pt=!0,M(pe,c[Ce],p,null,h,x,k,y,_),J++)}const Ca=pt?Ll(St):bt;for(W=Ca.length-1,b=ye-1;b>=0;b--){const pe=D+b,Ce=c[pe],Ia=pe+1<T?c[pe+1].el:v;St[b]===0?M(null,Ce,p,Ia,h,x,k,y,_):pt&&(W<0||b!==Ca[W]?et(Ce,p,Ia,2):W--)}}},et=(f,c,p,v,h=null)=>{const{el:x,type:k,transition:y,children:_,shapeFlag:b}=f;if(b&6){et(f.component.subTree,c,p,v);return}if(b&128){f.suspense.move(c,p,v);return}if(b&64){k.move(f,c,p,mt);return}if(k===Te){r(x,c,p);for(let C=0;C<_.length;C++)et(_[C],c,p,v);r(f.anchor,c,p);return}if(k===In){O(f,c,p);return}if(v!==2&&b&1&&y)if(v===0)y.beforeEnter(x),r(x,c,p),ue(()=>y.enter(x),h);else{const{leave:C,delayLeave:S,afterLeave:N}=y,D=()=>r(x,c,p),Y=()=>{C(x,()=>{D(),N&&N()})};S?S(x,D,Y):Y()}else r(x,c,p)},Ee=(f,c,p,v=!1,h=!1)=>{const{type:x,props:k,ref:y,children:_,dynamicChildren:b,shapeFlag:T,patchFlag:C,dirs:S}=f;if(y!=null&&Or(y,null,p,f,!0),T&256){c.ctx.deactivate(f);return}const N=T&1&&S,D=!Cn(f);let Y;if(D&&(Y=k&&k.onVnodeBeforeUnmount)&&Ie(Y,c,f),T&6)Zo(f.component,p,v);else{if(T&128){f.suspense.unmount(p,v);return}N&&tt(f,null,c,"beforeUnmount"),T&64?f.type.remove(f,c,p,h,mt,v):b&&(x!==Te||C>0&&C&64)?je(b,c,p,!1,!0):(x===Te&&C&384||!h&&T&16)&&je(_,c,p),v&&Pa(f)}(D&&(Y=k&&k.onVnodeUnmounted)||N)&&ue(()=>{Y&&Ie(Y,c,f),N&&tt(f,null,c,"unmounted")},p)},Pa=f=>{const{type:c,el:p,anchor:v,transition:h}=f;if(c===Te){Xo(p,v);return}if(c===In){j(f);return}const x=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:k,delayLeave:y}=h,_=()=>k(p,x);y?y(f.el,x,_):_()}else x()},Xo=(f,c)=>{let p;for(;f!==c;)p=g(f),a(f),f=p;a(c)},Zo=(f,c,p)=>{const{bum:v,scope:h,update:x,subTree:k,um:y}=f;v&&ir(v),h.stop(),x&&(x.active=!1,Ee(k,f,c,p)),y&&ue(y,c),ue(()=>{f.isUnmounted=!0},c),c&&c.pendingBranch&&!c.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===c.pendingId&&(c.deps--,c.deps===0&&c.resolve())},je=(f,c,p,v=!1,h=!1,x=0)=>{for(let k=x;k<f.length;k++)Ee(f[k],c,p,v,h)},fn=f=>f.shapeFlag&6?fn(f.component.subTree):f.shapeFlag&128?f.suspense.next():g(f.anchor||f.el),Oa=(f,c,p)=>{f==null?c._vnode&&Ee(c._vnode,null,null,!0):M(c._vnode||null,f,c,null,null,null,p),Da(),qi(),c._vnode=f},mt={p:M,um:Ee,m:et,r:Pa,mt:tr,mc:be,pc:K,pbc:Fe,n:fn,o:e};let nr,rr;return t&&([nr,rr]=t(mt)),{render:Oa,hydrate:nr,createApp:Rl(Oa,nr)}}function nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function uo(e,t,n=!1){const r=e.children,a=t.children;if(F(r)&&F(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=$e(a[i]),s.el=o.el),n||uo(o,s)),s.type===qn&&(s.el=o.el)}}function Ll(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const u=e[r];if(u!==0){if(a=n[n.length-1],e[a]<u){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<u?i=s+1:o=s;u<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const Dl=e=>e.__isTeleport,Te=Symbol(void 0),qn=Symbol(void 0),$t=Symbol(void 0),In=Symbol(void 0),Dt=[];let Ae=null;function en(e=!1){Dt.push(Ae=e?null:[])}function zl(){Dt.pop(),Ae=Dt[Dt.length-1]||null}let Xt=1;function $a(e){Xt+=e}function Ul(e){return e.dynamicChildren=Xt>0?Ae||bt:null,zl(),Xt>0&&Ae&&Ae.push(e),e}function tn(e,t,n,r,a,i){return Ul(de(e,t,n,r,a,i,!0))}function Er(e){return e?e.__v_isVNode===!0:!1}function Mt(e,t){return e.type===t.type&&e.key===t.key}const Qn="__vInternal",mo=({key:e})=>e??null,Tn=({ref:e,ref_key:t,ref_for:n})=>e!=null?ne(e)||se(e)||L(e)?{i:Ne,r:e,k:t,f:!!n}:e:null;function de(e,t=null,n=null,r=0,a=null,i=e===Te?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&mo(t),ref:t&&Tn(t),scopeId:Ji,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:Ne};return s?(la(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=ne(n)?8:16),Xt>0&&!o&&Ae&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ae.push(l),l}const ee=Bl;function Bl(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===wl)&&(e=$t),Er(e)){const s=At(e,t,!0);return n&&la(s,n),Xt>0&&!i&&Ae&&(s.shapeFlag&6?Ae[Ae.indexOf(e)]=s:Ae.push(s)),s.patchFlag|=-2,s}if(Jl(e)&&(e=e.__vccOpts),t){t=Hl(t);let{class:s,style:l}=t;s&&!ne(s)&&(t.class=Kr(s)),V(l)&&(Wi(l)&&!F(l)&&(l=le({},l)),t.style=Wr(l))}const o=ne(e)?1:il(e)?128:Dl(e)?64:V(e)?4:L(e)?2:0;return de(e,t,n,r,a,o,i,!0)}function Hl(e){return e?Wi(e)||Qn in e?le({},e):e:null}function At(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?Kl(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&mo(s),ref:t&&t.ref?n&&a?F(a)?a.concat(Tn(t)):[a,Tn(t)]:Tn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Te?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&At(e.ssContent),ssFallback:e.ssFallback&&At(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function zt(e=" ",t=0){return ee(qn,null,e,t)}function Wl(e,t){const n=ee(In,null,e);return n.staticCount=t,n}function Se(e){return e==null||typeof e=="boolean"?ee($t):F(e)?ee(Te,null,e.slice()):typeof e=="object"?$e(e):ee(qn,null,String(e))}function $e(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:At(e)}function la(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(F(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),la(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(Qn in t)?t._ctx=Ne:a===3&&Ne&&(Ne.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L(t)?(t={default:t,_ctx:Ne},n=32):(t=String(t),r&64?(n=16,t=[zt(t)]):n=8);e.children=t,e.shapeFlag|=n}function Kl(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Kr([t.class,r.class]));else if(a==="style")t.style=Wr([t.style,r.style]);else if(Hn(a)){const i=t[a],o=r[a];o&&i!==o&&!(F(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Ie(e,t,n,r=null){Oe(e,t,7,[n,r])}const Yl=co();let $l=0;function Xl(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||Yl,i={uid:$l++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new ds(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:oo(r,a),emitsOptions:Vi(r,a),emit:null,emitted:null,propsDefaults:Z,inheritAttrs:r.inheritAttrs,ctx:Z,data:Z,props:Z,attrs:Z,slots:Z,refs:Z,setupState:Z,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=Gs.bind(null,i),e.ce&&e.ce(i),i}let G=null;const kt=e=>{G=e,e.scope.on()},ft=()=>{G&&G.scope.off(),G=null};function po(e){return e.vnode.shapeFlag&4}let Zt=!1;function Zl(e,t=!1){Zt=t;const{props:n,children:r}=e.vnode,a=po(e);Cl(e,n,a,t),Sl(e,r);const i=a?ql(e,t):void 0;return Zt=!1,i}function ql(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Ki(new Proxy(e.ctx,_l));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?Vl(e):null;kt(e),Et();const i=Ze(r,e,0,[e.props,a]);if(Ct(),ft(),Ti(i)){if(i.then(ft,ft),t)return i.then(o=>{Xa(e,o,t)}).catch(o=>{$n(o,e,0)});e.asyncDep=i}else Xa(e,i,t)}else ho(e,t)}function Xa(e,t,n){L(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:V(t)&&(e.setupState=Yi(t)),ho(e,n)}let Za;function ho(e,t,n){const r=e.type;if(!e.render){if(!t&&Za&&!r.render){const a=r.template||oa(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,u=le(le({isCustomElement:i,delimiters:s},o),l);r.render=Za(a,u)}}e.render=r.render||Pe}kt(e),Et(),Al(e),Ct(),ft()}function Ql(e){return new Proxy(e.attrs,{get(t,n){return me(e,"get","$attrs"),t[n]}})}function Vl(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=Ql(e))},slots:e.slots,emit:e.emit,expose:t}}function fa(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yi(Ki(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Lt)return Lt[n](e)},has(t,n){return n in t||n in Lt}}))}function Jl(e){return L(e)&&"__vccOpts"in e}const ge=(e,t)=>$s(e,t,Zt);function vo(e,t,n){const r=arguments.length;return r===2?V(t)&&!F(t)?Er(t)?ee(e,null,[t]):ee(e,t):ee(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Er(n)&&(n=[n]),ee(e,t,n))}const Gl=Symbol(""),ef=()=>On(Gl),tf="3.2.47",nf="http://www.w3.org/2000/svg",it=typeof document<"u"?document:null,qa=it&&it.createElement("template"),rf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?it.createElementNS(nf,e):it.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>it.createTextNode(e),createComment:e=>it.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>it.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{qa.innerHTML=r?`<svg>${e}</svg>`:e;const s=qa.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function af(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function of(e,t,n){const r=e.style,a=ne(n);if(n&&!a){if(t&&!ne(t))for(const i in t)n[i]==null&&Cr(r,i,"");for(const i in n)Cr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const Qa=/\s*!important$/;function Cr(e,t,n){if(F(n))n.forEach(r=>Cr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=sf(e,t);Qa.test(n)?e.setProperty(Ot(r),n.replace(Qa,""),"important"):e[r]=n}}const Va=["Webkit","Moz","ms"],lr={};function sf(e,t){const n=lr[t];if(n)return n;let r=_t(t);if(r!=="filter"&&r in e)return lr[t]=r;r=Si(r);for(let a=0;a<Va.length;a++){const i=Va[a]+r;if(i in e)return lr[t]=i}return t}const Ja="http://www.w3.org/1999/xlink";function lf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(Ja,t.slice(6,t.length)):e.setAttributeNS(Ja,t,n);else{const i=es(t);n==null||i&&!Ii(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function ff(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=Ii(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function cf(e,t,n,r){e.addEventListener(t,n,r)}function uf(e,t,n,r){e.removeEventListener(t,n,r)}function df(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=mf(t);if(r){const u=i[t]=vf(r,a);cf(e,s,u,l)}else o&&(uf(e,s,o,l),i[t]=void 0)}}const Ga=/(?:Once|Passive|Capture)$/;function mf(e){let t;if(Ga.test(e)){t={};let r;for(;r=e.match(Ga);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Ot(e.slice(2)),t]}let fr=0;const pf=Promise.resolve(),hf=()=>fr||(pf.then(()=>fr=0),fr=Date.now());function vf(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Oe(gf(r,n.value),t,5,[r])};return n.value=e,n.attached=hf(),n}function gf(e,t){if(F(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const ei=/^on[a-z]/,bf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?af(e,r,a):t==="style"?of(e,n,r):Hn(t)?Yr(t)||df(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):yf(e,t,r,a))?ff(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),lf(e,t,r,a))};function yf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&ei.test(t)&&L(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||ei.test(t)&&ne(n)?!1:t in e}const xf=le({patchProp:bf},rf);let ti;function wf(){return ti||(ti=Fl(xf))}const _f=(...e)=>{const t=wf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Af(r);if(!a)return;const i=t._component;!L(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Af(e){return ne(e)?document.querySelector(e):e}const kf="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPIAAAD0CAMAAACW74uLAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAL6UExURf9EAP9FAP9FAf9GAf9GAv9HA/9IBP9JBf9JBv9KB/9LB/9LCP9MCf9MCv9NC/9ODP9ODf9PDv9QD/9REP9REf9SEv9TE/9UFP9UFf9VFv9VF/9WF/9XGP9XGf9YGv9ZG/9ZHP9aHf9bHv9cH/9cIP9dIf9eIv9fI/9fJP9gJf9hJv9hJ/9iKP9jKf9kKv9kK/9lLP9mLf9nLv9nL/9oMP9pMf9pMv9qM/9rNP9sNf9sNv9tN/9uOP9vOf9vOv9wO/9xPP9xPf9yPv9zP/90QP90Qf91Qv92Q/93RP93Rf94Rv95R/96SP96Sf97Sv98TP99Tf9+Tv9/T/9/UP+AUf+BUv+CU/+CVP+DVf+EVv+EV/+FWP+GWf+HWv+HW/+IXP+JXf+KXv+KX/+LYP+MYf+MYv+NY/+OZP+PZf+PZv+QZ/+RaP+Saf+Sav+Ta/+UbP+Vbf+XcP+Xcf+Ycv+Zc/+adP+adf+bdv+cd/+ceP+deP+def+eev+ffP+gff+hfv+hf/+if/+igP+jgf+kgv+lg/+lhP+mhf+nh/+oiP+pif+qiv+qi/+rjP+sjf+tjv+tj/+ukP+vkf+vkv+wk/+xlP+ylf+ylv+zl/+0mP+1mf+1mv+2m/+3nP+4nf+4nv+5n/+7ov+8o/+9pP++pv+/p//AqP/Aqf/Bqv/Cq//CrP/Drf/Erv/Fr//FsP/Gsf/Hsv/Is//ItP/Jtf/Ktv/Kt//LuP/Muf/Nuv/Nu//OvP/Pvf/Qvv/Qv//RwP/Swf/Twv/Tw//UxP/Vxf/Vxv/Wx//XyP/Yyf/Yyv/Zy//azP/bzf/bzv/cz//d0P/d0f/e0v/f0//g1P/g1f/h1v/i1//j2P/j2f/k2v/l2//l3P/m3f/n3v/o3//o4P/p4f/q4v/r4//r5P/s5f/t5v/t5//u6P/v6f/w6v/w6//x7P/y7f/z7v/z7//08P/18f/28v/28//39P/49f/49v/59//6+P/7+f/7+v/8+//9/P/+/f/+/v///1yJ6rwAAAp4SURBVHja7dx7XBTHHQBwt3dwUJCHvKRgVAQFgjx8gIlR1BIFjjRNJE0skQLRgKaWBjWmiULEqDGCmFYSoRijNkZSFdBo6qsRfCCGl5FQBBVqQKOQ8n7J7edTcjvLze7tIXBwd3P+5sM/Nzvs7fdmbx6/mb1R1GOXRgEZyEAGMpCBDGQgAxnIQAYykIEMZCADGchABjKQgQxkIAMZyEAGMpCBDGQgAxnIQAYykIEMZCADGchABjKQdY48CmoZyEAmkSym7O0mTnVwcrYWGT4GZBPxrKCtaTnFpbVV5TcLvshYNWeKfpOt/N86XN7TQytSW2NpUpSjgb6SLX+fWtNEK6fufyf7jdHBRkPtK7Gd/3UlrSJ1lWz3MtG7Wg7c1kX3k5pvLJ+sX2SjDefpR6R7x6frE9l+/w/0I5OsNtRBb8ieF1vogaT/vj1JT8hzC7vogaXajx30ghx4oYMeaKpLN9cD8pyjAxfT9N1dIuLJ43d0C8g6677KSD5RLFM+Uv0W8eQ3heryf1+E2ohFxnOTq5SPFbxMLJn5h5fuC4n3TmPKSDJalfuqf3gTXctPHhS6rQuR2HJBnsDRlpXmZJKZ8isEvq10x5+YmZNN6H8Em7AbTgTXsl++EKkhUH7Qcdk9Fc32HnLJRmubhUS3Zvx8cNKaNlU9VfEiYsku14THWO4UJXL/gHOvFz3EX641JpUc1iBIboylDKfvwXMezF/IacjKJhNKNspWceOmjpmdhb+u6m3B36zG74PXxWSS3a6p+rJuzsVf5Y/7ufk+iGelmZBJXqF6aoy/yJbzJIG12PEiL+YUi0KGkoIDZo4XaYWcxB1y3TiffalVeRqZhko/kY61YPX+TOY5ekjpp9x4DwMtkMeewuv1m3fdHEV2L6TyplWy+L7yMXj+BiZv59DIdFdTyetaILvUYJdw/LdMpt07nEtrX6Yo71SMHdjB5C2mh5wKVmqePA2bUVS/iOYRnns5nZMUKz/6X9iRc7bqkuk8NwNNk1/BvpspTAts+sxRfueEpfXYoSt28ixnNch337HRNPkN7O0j5TkWi/KUOicsxWGfUYmHPMtKDXL7WWdNk6M7+979Rz/5zGlxuXLnhKXfYas3de5MnhpkutZD0+Q4bAocKJ853RXqnBRJitVyjbP65E4vDZNFWxVv/jCSP3PCOqe+9AIW7a6dqT5Z5q3pWo5RBERkX5o5cWZO7csF/uHVTqyW3dQn92icHIm9e8WHu/GLqZcK/cMafMpsq3aLrQXyi/V4JITTOQkvuKViRS6PIZHs+aOKS7kyTrD8hKtYmRxTeV4AWeQpV4WvJFvFxNC3Fp9eMnmvkUWmMgUvJE1FaeOP8ClltHrTCi2Rjba0C1xHvKriDhexUpUzmMwjhNVygPJeGMHOSZ4MEvFKPmvG5N4ijOz5Nf8i6kNUip85g09345k9cDNocshM6SReDKRK9W4Qh085H83TTO57NGG1TM25w7mECjuVJQ034isXDw/ZqxUH0iJ5XDqnmo8uUNnSvf095xvPzDXVvK+1QqaWcBuwf6r4KlsnXOdMB750HY77WjtkgwPcIFxuhJVAKfdd3JX1DhS1shpyey3THlk8jxu9726Kn8efYzq8cvIBb+ERbeicEDaktOSlYi3WMmW9ibcsJfsufoFEsQtbZPdy+n1enLf4eXXD7tnaJFPep5WC9RWZ6/3dx5kb2U7wjlpXpHzzJqodgD6hVTL1fIXyRoKOhpq8c6dPlVV1Cmwy+Lsh6WQqtmFQLc8hX7Gab6h9MrX1/iCa2rOhw7BkqHUylXJnoOLuS69SekGWbPt+gMH2guGoY10gU5bRhQMRN5z4dX9neXbX+fPbfQkhU+a+Fx69I7tyt3s/pzCcvb939Ho/1VdEBrl3cph87RHiYzG2/Z3AIqNRPq38iBgyZRlwsJ8hc8u9dz2NFONUsVgJ5ngTRXv7Ns6IhIrpEpkytHjt81rhnklWuM1PUfCXf8m9nrNSwmsC56PuvYAlS97IuZ6bMEGXyb1ok8XvF/zE38faWrsvdrKFopTVuureT+FKBPc2t1/FbBTsOIzIthEFvS9vJ7jqNFke3A5IPF7Y2CpffeqgW24XpW2YPREv8IvVzAawC9y22SODCZfe3ozuZV8mIFq9WqTr5N4bUuL4rDQ8Ycu6rXHhoS5OvBG1eA4b9gvi5M/NZ+6OS0sQMQgVOzNHrPNk1ib/U0qjj7BLssHc2QmKiR/2RBnB7HOiR0aTQlbRrsfUoYhf/ixOM7AKCT9ht7zMykcL8HUxlkST/QsQpD7WntMEpKBQ0no2Z2wsiqU8LJhPJpk5vcsWNkp2jhsADkKBjtLwviybU+wK/DZXnSaP6jczjl2Szg/i9ssrypj8TEVc2DDgErtVci0BtWzmLI90Wv2Ke17paXanyEbeSOQD1Jtvxh6KNNxYx7baUt0ne6Nn809wcm0OsM8l7JnG69jY4HAEvmFvWgbKbTpgRybZcikaj8pu/YbXoU1Hex2bubNLaSWKndVFjSGSPLMCtdZtMbzFK0lEEbORK28G97aIQp14T5UfiWSPvyJxy1H+c1JGSUwoqTnVhXtgYhaahvf8zYM88ug4dpp1MYQ/LDM5yfRH9dG8KbVYyj6xULvajDjy1M/ZxbNPlYrb32AO/fCUhH/oE7ZzPuRDHNn1M3b2vI/vMlmIeqMypUU8g8/YfZ/7p5L3XV5ayj4k9Uee2WE1Ex5ozuRvn5KsKmM3My8lsPlyWINWr7ov+3BLu+1jGqmbCUa883hdRkOU7rUOJHZSU86gJciezdy9436lDCx/MW9y7ZSAbuvOb9yJ7JdNFqBne2Utf+CUDkRVeWwKrylf2oiGIhWBpmQOOE12sIPmY3hIxIx9YmEv7yzBx9geKtmU0DE25cU+BNj2sTU2RkG7Ghs38sIJqezuwUNepE4rKCqc3SZTHq1oqYK/YvKuRnBb6yi2tS6PpMgl2/yZXWP/TvFjb9Fo88xB7jYTlxK2I48bSzCZ8slBrXbjh30z4/cRbcsTeMlJ2xvRloQcH4pksnEQWoeRVc1FWRbsw93LuFGyW+iGuBlkTDSZMtzJ7mxEkQ7R08eZz+ABN8obwv5M2E7lvSVkkUWuaON620KUsZxZm+468xSn4ELUXGe6iggnU1TEt/IRZBbqeEQpTGfdmsL99UqvLPkA5dsIgVOQRrYOv0LT7Vn+aHQhPsl8Z5sirTnFTOdl97Z0+eFWekCmrMOS0xP7NriK0UMp9TP5N3BIYnpSmJCYPDIv8IEifSWDeDKXcLJojXyycWeT2WNDpuzjrtF05abx4seHTE0KS9gU9eRgTk88efAJyEAGMpCBPOzknJEh5+gwuSZ1d9qwp92pNbpLltEjlGS6W8sjm4AMZCCPOJnWSNIlso9myD46RDaXPhcy4uk5qbnukDX2c/Yi3allMhKQgQxkIAMZyEAGMpCBDGQgAxnIQAYykIEMZCADGchABjKQgQxkIAMZyEAGMpCBDGQgAxnIQAYykIEMZCADGchABjKQgQxkIAMZyEAGMpCBDGQgAxnIQAYykIEMZCADGchABjKQtZX+DwuAfrCa4dMRAAAAAElFTkSuQmCC",Pf={class:"navbar"},Of={class:"navbar-brand"},Ef=["src"],Cf=de("span",{class:"navbar-brand-name"},"r/ProgrammerHumor",-1),If=Wl('<ul class="navbar-items"><li class="navbar-item"><a href="https://www.reddit.com/r/ProgrammerHumor/" target="_blank"> Subreddit </a></li><li class="navbar-item"><a href="https://www.reddit.com/r/ProgrammerHumor/wiki/index/" target="_blank"> Wiki </a></li><li class="navbar-item"><a href="https://www.reddit.com/message/compose?to=/r/ProgrammerHumor" target="_blank"> Modmail </a></li></ul>',1),Tf=dt({__name:"AppNav",setup(e){return(t,n)=>(en(),tn("nav",Pf,[de("div",Of,[de("img",{src:jt(kf),alt:"ProgrammerHumor logo",class:"navbar-brand-logo"},null,8,Ef),Cf]),If]))}});function ni(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function P(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ni(Object(n),!0).forEach(function(r){te(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ni(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Ln(e){return Ln=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Ln(e)}function Sf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ri(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Mf(e,t,n){return t&&ri(e.prototype,t),n&&ri(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function te(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ca(e,t){return Rf(e)||jf(e,t)||go(e,t)||Df()}function nn(e){return Nf(e)||Ff(e)||go(e)||Lf()}function Nf(e){if(Array.isArray(e))return Ir(e)}function Rf(e){if(Array.isArray(e))return e}function Ff(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function jf(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function go(e,t){if(e){if(typeof e=="string")return Ir(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Ir(e,t)}}function Ir(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Lf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Df(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var ai=function(){},ua={},bo={},yo=null,xo={mark:ai,measure:ai};try{typeof window<"u"&&(ua=window),typeof document<"u"&&(bo=document),typeof MutationObserver<"u"&&(yo=MutationObserver),typeof performance<"u"&&(xo=performance)}catch{}var zf=ua.navigator||{},ii=zf.userAgent,oi=ii===void 0?"":ii,Qe=ua,X=bo,si=yo,vn=xo;Qe.document;var We=!!X.documentElement&&!!X.head&&typeof X.addEventListener=="function"&&typeof X.createElement=="function",wo=~oi.indexOf("MSIE")||~oi.indexOf("Trident/"),gn,bn,yn,xn,wn,ze="___FONT_AWESOME___",Tr=16,_o="fa",Ao="svg-inline--fa",ct="data-fa-i2svg",Sr="data-fa-pseudo-element",Uf="data-fa-pseudo-element-pending",da="data-prefix",ma="data-icon",li="fontawesome-i2svg",Bf="async",Hf=["HTML","HEAD","STYLE","SCRIPT"],ko=function(){try{return!0}catch{return!1}}(),$="classic",Q="sharp",pa=[$,Q];function rn(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[$]}})}var qt=rn((gn={},te(gn,$,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),te(gn,Q,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),gn)),Qt=rn((bn={},te(bn,$,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),te(bn,Q,{solid:"fass",regular:"fasr",light:"fasl"}),bn)),Vt=rn((yn={},te(yn,$,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),te(yn,Q,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),yn)),Wf=rn((xn={},te(xn,$,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),te(xn,Q,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),xn)),Kf=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,Po="fa-layers-text",Yf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,$f=rn((wn={},te(wn,$,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),te(wn,Q,{900:"fass",400:"fasr",300:"fasl"}),wn)),Oo=[1,2,3,4,5,6,7,8,9,10],Xf=Oo.concat([11,12,13,14,15,16,17,18,19,20]),Zf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],ot={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},Jt=new Set;Object.keys(Qt[$]).map(Jt.add.bind(Jt));Object.keys(Qt[Q]).map(Jt.add.bind(Jt));var qf=[].concat(pa,nn(Jt),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",ot.GROUP,ot.SWAP_OPACITY,ot.PRIMARY,ot.SECONDARY]).concat(Oo.map(function(e){return"".concat(e,"x")})).concat(Xf.map(function(e){return"w-".concat(e)})),Ut=Qe.FontAwesomeConfig||{};function Qf(e){var t=X.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Vf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(X&&typeof X.querySelector=="function"){var Jf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Jf.forEach(function(e){var t=ca(e,2),n=t[0],r=t[1],a=Vf(Qf(n));a!=null&&(Ut[r]=a)})}var Eo={styleDefault:"solid",familyDefault:"classic",cssPrefix:_o,replacementClass:Ao,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Ut.familyPrefix&&(Ut.cssPrefix=Ut.familyPrefix);var Pt=P(P({},Eo),Ut);Pt.autoReplaceSvg||(Pt.observeMutations=!1);var I={};Object.keys(Eo).forEach(function(e){Object.defineProperty(I,e,{enumerable:!0,set:function(n){Pt[e]=n,Bt.forEach(function(r){return r(I)})},get:function(){return Pt[e]}})});Object.defineProperty(I,"familyPrefix",{enumerable:!0,set:function(t){Pt.cssPrefix=t,Bt.forEach(function(n){return n(I)})},get:function(){return Pt.cssPrefix}});Qe.FontAwesomeConfig=I;var Bt=[];function Gf(e){return Bt.push(e),function(){Bt.splice(Bt.indexOf(e),1)}}var Ye=Tr,Re={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function ec(e){if(!(!e||!We)){var t=X.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=X.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return X.head.insertBefore(t,r),e}}var tc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function Gt(){for(var e=12,t="";e-- >0;)t+=tc[Math.random()*62|0];return t}function It(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function ha(e){return e.classList?It(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Co(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function nc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Co(e[n]),'" ')},"").trim()}function Vn(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function va(e){return e.size!==Re.size||e.x!==Re.x||e.y!==Re.y||e.rotate!==Re.rotate||e.flipX||e.flipY}function rc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},u={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:u}}function ac(e){var t=e.transform,n=e.width,r=n===void 0?Tr:n,a=e.height,i=a===void 0?Tr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&wo?l+="translate(".concat(t.x/Ye-r/2,"em, ").concat(t.y/Ye-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Ye,"em), calc(-50% + ").concat(t.y/Ye,"em)) "):l+="translate(".concat(t.x/Ye,"em, ").concat(t.y/Ye,"em) "),l+="scale(".concat(t.size/Ye*(t.flipX?-1:1),", ").concat(t.size/Ye*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var ic=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Io(){var e=_o,t=Ao,n=I.cssPrefix,r=I.replacementClass,a=ic;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var fi=!1;function cr(){I.autoAddCss&&!fi&&(ec(Io()),fi=!0)}var oc={mixout:function(){return{dom:{css:Io,insertCss:cr}}},hooks:function(){return{beforeDOMElementCreation:function(){cr()},beforeI2svg:function(){cr()}}}},Ue=Qe||{};Ue[ze]||(Ue[ze]={});Ue[ze].styles||(Ue[ze].styles={});Ue[ze].hooks||(Ue[ze].hooks={});Ue[ze].shims||(Ue[ze].shims=[]);var ke=Ue[ze],To=[],sc=function e(){X.removeEventListener("DOMContentLoaded",e),Dn=1,To.map(function(t){return t()})},Dn=!1;We&&(Dn=(X.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(X.readyState),Dn||X.addEventListener("DOMContentLoaded",sc));function lc(e){We&&(Dn?setTimeout(e,0):To.push(e))}function an(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Co(e):"<".concat(t," ").concat(nc(r),">").concat(i.map(an).join(""),"</").concat(t,">")}function ci(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var fc=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},ur=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?fc(n,a):n,l,u,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)u=i[l],d=s(d,t[u],u,t);return d};function cc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Mr(e){var t=cc(e);return t.length===1?t[0].toString(16):null}function uc(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function ui(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function Nr(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=ui(t);typeof ke.hooks.addPack=="function"&&!a?ke.hooks.addPack(e,ui(t)):ke.styles[e]=P(P({},ke.styles[e]||{}),i),e==="fas"&&Nr("fa",t)}var _n,An,kn,vt=ke.styles,dc=ke.shims,mc=(_n={},te(_n,$,Object.values(Vt[$])),te(_n,Q,Object.values(Vt[Q])),_n),ga=null,So={},Mo={},No={},Ro={},Fo={},pc=(An={},te(An,$,Object.keys(qt[$])),te(An,Q,Object.keys(qt[Q])),An);function hc(e){return~qf.indexOf(e)}function vc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!hc(a)?a:null}var jo=function(){var t=function(i){return ur(vt,function(o,s,l){return o[l]=ur(s,i,{}),o},{})};So=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),Mo=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),Fo=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in vt||I.autoFetchSvg,r=ur(dc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});No=r.names,Ro=r.unicodes,ga=Jn(I.styleDefault,{family:I.familyDefault})};Gf(function(e){ga=Jn(e.styleDefault,{family:I.familyDefault})});jo();function ba(e,t){return(So[e]||{})[t]}function gc(e,t){return(Mo[e]||{})[t]}function st(e,t){return(Fo[e]||{})[t]}function Lo(e){return No[e]||{prefix:null,iconName:null}}function bc(e){var t=Ro[e],n=ba("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Ve(){return ga}var ya=function(){return{prefix:null,iconName:null,rest:[]}};function Jn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?$:n,a=qt[r][e],i=Qt[r][e]||Qt[r][a],o=e in ke.styles?e:null;return i||o||null}var di=(kn={},te(kn,$,Object.keys(Vt[$])),te(kn,Q,Object.keys(Vt[Q])),kn);function Gn(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},te(t,$,"".concat(I.cssPrefix,"-").concat($)),te(t,Q,"".concat(I.cssPrefix,"-").concat(Q)),t),o=null,s=$;(e.includes(i[$])||e.some(function(u){return di[$].includes(u)}))&&(s=$),(e.includes(i[Q])||e.some(function(u){return di[Q].includes(u)}))&&(s=Q);var l=e.reduce(function(u,d){var m=vc(I.cssPrefix,d);if(vt[d]?(d=mc[s].includes(d)?Wf[s][d]:d,o=d,u.prefix=d):pc[s].indexOf(d)>-1?(o=d,u.prefix=Jn(d,{family:s})):m?u.iconName=m:d!==I.replacementClass&&d!==i[$]&&d!==i[Q]&&u.rest.push(d),!a&&u.prefix&&u.iconName){var g=o==="fa"?Lo(u.iconName):{},A=st(u.prefix,u.iconName);g.prefix&&(o=null),u.iconName=g.iconName||A||u.iconName,u.prefix=g.prefix||u.prefix,u.prefix==="far"&&!vt.far&&vt.fas&&!I.autoFetchSvg&&(u.prefix="fas")}return u},ya());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Q&&(vt.fass||I.autoFetchSvg)&&(l.prefix="fass",l.iconName=st(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=Ve()||"fas"),l}var yc=function(){function e(){Sf(this,e),this.definitions={}}return Mf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=P(P({},n.definitions[s]||{}),o[s]),Nr(s,o[s]);var l=Vt[$][s];l&&Nr(l,o[s]),jo()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,u=o.icon,d=u[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=u)}),n[s][l]=u}),n}}]),e}(),mi=[],gt={},wt={},xc=Object.keys(wt);function wc(e,t){var n=t.mixoutsTo;return mi=e,gt={},Object.keys(wt).forEach(function(r){xc.indexOf(r)===-1&&delete wt[r]}),mi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Ln(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){gt[o]||(gt[o]=[]),gt[o].push(i[o])})}r.provides&&r.provides(wt)}),n}function Rr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=gt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function ut(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=gt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Be(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return wt[e]?wt[e].apply(null,t):void 0}function Fr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Ve();if(t)return t=st(n,t)||t,ci(Do.definitions,n,t)||ci(ke.styles,n,t)}var Do=new yc,_c=function(){I.autoReplaceSvg=!1,I.observeMutations=!1,ut("noAuto")},Ac={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return We?(ut("beforeI2svg",t),Be("pseudoElements2svg",t),Be("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;I.autoReplaceSvg===!1&&(I.autoReplaceSvg=!0),I.observeMutations=!0,lc(function(){Pc({autoReplaceSvgRoot:n}),ut("watch",t)})}},kc={icon:function(t){if(t===null)return null;if(Ln(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:st(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=Jn(t[0]);return{prefix:r,iconName:st(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(I.cssPrefix,"-"))>-1||t.match(Kf))){var a=Gn(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||Ve(),iconName:st(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=Ve();return{prefix:i,iconName:st(i,t)||t}}}},he={noAuto:_c,config:I,dom:Ac,parse:kc,library:Do,findIconDefinition:Fr,toHtml:an},Pc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?X:n;(Object.keys(ke.styles).length>0||I.autoFetchSvg)&&We&&I.autoReplaceSvg&&he.dom.i2svg({node:r})};function er(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return an(r)})}}),Object.defineProperty(e,"node",{get:function(){if(We){var r=X.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Oc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(va(o)&&n.found&&!r.found){var s=n.width,l=n.height,u={x:s/l/2,y:.5};a.style=Vn(P(P({},i),{},{"transform-origin":"".concat(u.x+o.x/16,"em ").concat(u.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Ec(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(I.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:P(P({},a),{},{id:o}),children:r}]}]}function xa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,u=e.maskId,d=e.titleId,m=e.extra,g=e.watchable,A=g===void 0?!1:g,R=r.found?r:n,M=R.width,U=R.height,w=a==="fak",E=[I.replacementClass,i?"".concat(I.cssPrefix,"-").concat(i):""].filter(function(ve){return m.classes.indexOf(ve)===-1}).filter(function(ve){return ve!==""||!!ve}).concat(m.classes).join(" "),O={children:[],attributes:P(P({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:E,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(M," ").concat(U)})},j=w&&!~m.classes.indexOf("fa-fw")?{width:"".concat(M/U*16*.0625,"em")}:{};A&&(O.attributes[ct]=""),l&&(O.children.push({tag:"title",attributes:{id:O.attributes["aria-labelledby"]||"title-".concat(d||Gt())},children:[l]}),delete O.attributes.title);var H=P(P({},O),{},{prefix:a,iconName:i,main:n,mask:r,maskId:u,transform:o,symbol:s,styles:P(P({},j),m.styles)}),fe=r.found&&n.found?Be("generateAbstractMask",H)||{children:[],attributes:{}}:Be("generateAbstractIcon",H)||{children:[],attributes:{}},re=fe.children,be=fe.attributes;return H.children=re,H.attributes=be,s?Ec(H):Oc(H)}function pi(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,u=P(P(P({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(u[ct]="");var d=P({},o.styles);va(a)&&(d.transform=ac({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=Vn(d);m.length>0&&(u.style=m);var g=[];return g.push({tag:"span",attributes:u,children:[t]}),i&&g.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),g}function Cc(e){var t=e.content,n=e.title,r=e.extra,a=P(P(P({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=Vn(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var dr=ke.styles;function jr(e){var t=e[0],n=e[1],r=e.slice(4),a=ca(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(I.cssPrefix,"-").concat(ot.GROUP)},children:[{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ot.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(I.cssPrefix,"-").concat(ot.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var Ic={found:!1,width:512,height:512};function Tc(e,t){!ko&&!I.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Lr(e,t){var n=t;return t==="fa"&&I.styleDefault!==null&&(t=Ve()),new Promise(function(r,a){if(Be("missingIconAbstract"),n==="fa"){var i=Lo(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&dr[t]&&dr[t][e]){var o=dr[t][e];return r(jr(o))}Tc(e,t),r(P(P({},Ic),{},{icon:I.showMissingIcons&&e?Be("missingIconAbstract")||{}:{}}))})}var hi=function(){},Dr=I.measurePerformance&&vn&&vn.mark&&vn.measure?vn:{mark:hi,measure:hi},Rt='FA "6.4.0"',Sc=function(t){return Dr.mark("".concat(Rt," ").concat(t," begins")),function(){return zo(t)}},zo=function(t){Dr.mark("".concat(Rt," ").concat(t," ends")),Dr.measure("".concat(Rt," ").concat(t),"".concat(Rt," ").concat(t," begins"),"".concat(Rt," ").concat(t," ends"))},wa={begin:Sc,end:zo},Sn=function(){};function vi(e){var t=e.getAttribute?e.getAttribute(ct):null;return typeof t=="string"}function Mc(e){var t=e.getAttribute?e.getAttribute(da):null,n=e.getAttribute?e.getAttribute(ma):null;return t&&n}function Nc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(I.replacementClass)}function Rc(){if(I.autoReplaceSvg===!0)return Mn.replace;var e=Mn[I.autoReplaceSvg];return e||Mn.replace}function Fc(e){return X.createElementNS("http://www.w3.org/2000/svg",e)}function jc(e){return X.createElement(e)}function Uo(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?Fc:jc:n;if(typeof e=="string")return X.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(Uo(o,{ceFn:r}))}),a}function Lc(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Mn={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(Uo(a),n)}),n.getAttribute(ct)===null&&I.keepOriginalSource){var r=X.createComment(Lc(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~ha(n).indexOf(I.replacementClass))return Mn.replace(t);var a=new RegExp("".concat(I.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===I.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return an(s)}).join(`
`);n.setAttribute(ct,""),n.innerHTML=o}};function gi(e){e()}function Bo(e,t){var n=typeof t=="function"?t:Sn;if(e.length===0)n();else{var r=gi;I.mutateApproach===Bf&&(r=Qe.requestAnimationFrame||gi),r(function(){var a=Rc(),i=wa.begin("mutate");e.map(a),i(),n()})}}var _a=!1;function Ho(){_a=!0}function zr(){_a=!1}var zn=null;function bi(e){if(si&&I.observeMutations){var t=e.treeCallback,n=t===void 0?Sn:t,r=e.nodeCallback,a=r===void 0?Sn:r,i=e.pseudoElementsCallback,o=i===void 0?Sn:i,s=e.observeMutationsRoot,l=s===void 0?X:s;zn=new si(function(u){if(!_a){var d=Ve();It(u).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!vi(m.addedNodes[0])&&(I.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&I.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&vi(m.target)&&~Zf.indexOf(m.attributeName))if(m.attributeName==="class"&&Mc(m.target)){var g=Gn(ha(m.target)),A=g.prefix,R=g.iconName;m.target.setAttribute(da,A||d),R&&m.target.setAttribute(ma,R)}else Nc(m.target)&&a(m.target)})}}),We&&zn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Dc(){zn&&zn.disconnect()}function zc(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function Uc(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=Gn(ha(e));return a.prefix||(a.prefix=Ve()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=gc(a.prefix,e.innerText)||ba(a.prefix,Mr(e.innerText))),!a.iconName&&I.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function Bc(e){var t=It(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return I.autoA11y&&(n?t["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(r||Gt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Hc(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Re,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Uc(e),r=n.iconName,a=n.prefix,i=n.rest,o=Bc(e),s=Rr("parseNodeAttributes",{},e),l=t.styleParser?zc(e):[];return P({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Re,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var Wc=ke.styles;function Wo(e){var t=I.autoReplaceSvg==="nest"?yi(e,{styleParser:!1}):yi(e);return~t.extra.classes.indexOf(Po)?Be("generateLayersText",e,t):Be("generateSvgReplacementMutation",e,t)}var Je=new Set;pa.map(function(e){Je.add("fa-".concat(e))});Object.keys(qt[$]).map(Je.add.bind(Je));Object.keys(qt[Q]).map(Je.add.bind(Je));Je=nn(Je);function xi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!We)return Promise.resolve();var n=X.documentElement.classList,r=function(m){return n.add("".concat(li,"-").concat(m))},a=function(m){return n.remove("".concat(li,"-").concat(m))},i=I.autoFetchSvg?Je:pa.map(function(d){return"fa-".concat(d)}).concat(Object.keys(Wc));i.includes("fa")||i.push("fa");var o=[".".concat(Po,":not([").concat(ct,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(ct,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=It(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=wa.begin("onTree"),u=s.reduce(function(d,m){try{var g=Wo(m);g&&d.push(g)}catch(A){ko||A.name==="MissingIcon"&&console.error(A)}return d},[]);return new Promise(function(d,m){Promise.all(u).then(function(g){Bo(g,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(g){l(),m(g)})})}function Kc(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;Wo(e).then(function(n){n&&Bo([n],t)})}function Yc(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Fr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Fr(a||{})),e(r,P(P({},n),{},{mask:a}))}}var $c=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Re:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,u=n.maskId,d=u===void 0?null:u,m=n.title,g=m===void 0?null:m,A=n.titleId,R=A===void 0?null:A,M=n.classes,U=M===void 0?[]:M,w=n.attributes,E=w===void 0?{}:w,O=n.styles,j=O===void 0?{}:O;if(t){var H=t.prefix,fe=t.iconName,re=t.icon;return er(P({type:"icon"},t),function(){return ut("beforeDOMElementCreation",{iconDefinition:t,params:n}),I.autoA11y&&(g?E["aria-labelledby"]="".concat(I.replacementClass,"-title-").concat(R||Gt()):(E["aria-hidden"]="true",E.focusable="false")),xa({icons:{main:jr(re),mask:l?jr(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:H,iconName:fe,transform:P(P({},Re),a),symbol:o,title:g,maskId:d,titleId:R,extra:{attributes:E,styles:j,classes:U}})})}},Xc={mixout:function(){return{icon:Yc($c)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=xi,n.nodeCallback=Kc,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?X:r,i=n.callback,o=i===void 0?function(){}:i;return xi(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,u=r.symbol,d=r.mask,m=r.maskId,g=r.extra;return new Promise(function(A,R){Promise.all([Lr(a,s),d.iconName?Lr(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(M){var U=ca(M,2),w=U[0],E=U[1];A([n,xa({icons:{main:w,mask:E},prefix:s,iconName:a,transform:l,symbol:u,maskId:m,title:i,titleId:o,extra:g,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=Vn(s);l.length>0&&(a.style=l);var u;return va(o)&&(u=Be("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(u||i.icon),{children:r,attributes:a}}}},Zc={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return er({type:"layer"},function(){ut("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(I.cssPrefix,"-layers")].concat(nn(i)).join(" ")},children:o}]})}}}},qc={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,u=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return er({type:"counter",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),Cc({content:n.toString(),title:i,extra:{attributes:u,styles:m,classes:["".concat(I.cssPrefix,"-layers-counter")].concat(nn(s))}})})}}}},Qc={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Re:a,o=r.title,s=o===void 0?null:o,l=r.classes,u=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,g=r.styles,A=g===void 0?{}:g;return er({type:"text",content:n},function(){return ut("beforeDOMElementCreation",{content:n,params:r}),pi({content:n,transform:P(P({},Re),i),title:s,extra:{attributes:m,styles:A,classes:["".concat(I.cssPrefix,"-layers-text")].concat(nn(u))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(wo){var u=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/u,l=d.height/u}return I.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,pi({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},Vc=new RegExp('"',"ug"),wi=[1105920,1112319];function Jc(e){var t=e.replace(Vc,""),n=uc(t,0),r=n>=wi[0]&&n<=wi[1],a=t.length===2?t[0]===t[1]:!1;return{value:Mr(a?t[0]:t),isSecondary:r||a}}function _i(e,t){var n="".concat(Uf).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=It(e.children),o=i.filter(function(re){return re.getAttribute(Sr)===t})[0],s=Qe.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(Yf),u=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),g=~["Sharp"].indexOf(l[2])?Q:$,A=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?Qt[g][l[2].toLowerCase()]:$f[g][u],R=Jc(m),M=R.value,U=R.isSecondary,w=l[0].startsWith("FontAwesome"),E=ba(A,M),O=E;if(w){var j=bc(M);j.iconName&&j.prefix&&(E=j.iconName,A=j.prefix)}if(E&&!U&&(!o||o.getAttribute(da)!==A||o.getAttribute(ma)!==O)){e.setAttribute(n,O),o&&e.removeChild(o);var H=Hc(),fe=H.extra;fe.attributes[Sr]=t,Lr(E,A).then(function(re){var be=xa(P(P({},H),{},{icons:{main:re,mask:ya()},prefix:A,iconName:O,extra:fe,watchable:!0})),ve=X.createElement("svg");t==="::before"?e.insertBefore(ve,e.firstChild):e.appendChild(ve),ve.outerHTML=be.map(function(Fe){return an(Fe)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function Gc(e){return Promise.all([_i(e,"::before"),_i(e,"::after")])}function eu(e){return e.parentNode!==document.head&&!~Hf.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Sr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ai(e){if(We)return new Promise(function(t,n){var r=It(e.querySelectorAll("*")).filter(eu).map(Gc),a=wa.begin("searchPseudoElements");Ho(),Promise.all(r).then(function(){a(),zr(),t()}).catch(function(){a(),zr(),n()})})}var tu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ai,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?X:r;I.searchPseudoElements&&Ai(a)}}},ki=!1,nu={mixout:function(){return{dom:{unwatch:function(){Ho(),ki=!0}}}},hooks:function(){return{bootstrap:function(){bi(Rr("mutationObserverCallbacks",{}))},noAuto:function(){Dc()},watch:function(n){var r=n.observeMutationsRoot;ki?zr():bi(Rr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Pi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},ru={mixout:function(){return{parse:{transform:function(n){return Pi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Pi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),u="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(u," ").concat(d)},g={transform:"translate(".concat(o/2*-1," -256)")},A={outer:s,inner:m,path:g};return{tag:"g",attributes:P({},A.outer),children:[{tag:"g",attributes:P({},A.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:P(P({},r.icon.attributes),A.path)}]}]}}}},mr={x:0,y:0,width:"100%",height:"100%"};function Oi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function au(e){return e.tag==="g"?e.children:[e]}var iu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?Gn(a.split(" ").map(function(o){return o.trim()})):ya();return i.prefix||(i.prefix=Ve()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,u=i.width,d=i.icon,m=o.width,g=o.icon,A=rc({transform:l,containerWidth:m,iconWidth:u}),R={tag:"rect",attributes:P(P({},mr),{},{fill:"white"})},M=d.children?{children:d.children.map(Oi)}:{},U={tag:"g",attributes:P({},A.inner),children:[Oi(P({tag:d.tag,attributes:P(P({},d.attributes),A.path)},M))]},w={tag:"g",attributes:P({},A.outer),children:[U]},E="mask-".concat(s||Gt()),O="clip-".concat(s||Gt()),j={tag:"mask",attributes:P(P({},mr),{},{id:E,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,w]},H={tag:"defs",children:[{tag:"clipPath",attributes:{id:O},children:au(g)},j]};return r.push(H,{tag:"rect",attributes:P({fill:"currentColor","clip-path":"url(#".concat(O,")"),mask:"url(#".concat(E,")")},mr)}),{children:r,attributes:a}}}},ou={provides:function(t){var n=!1;Qe.matchMedia&&(n=Qe.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:P(P({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=P(P({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:P(P({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:P(P({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:P(P({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:P(P({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:P(P({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:P(P({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:P(P({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},su={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},lu=[oc,Xc,Zc,qc,Qc,tu,nu,ru,iu,ou,su];wc(lu,{mixoutsTo:he});he.noAuto;var Ko=he.config,pr=he.library;he.dom;var Un=he.parse;he.findIconDefinition;he.toHtml;var fu=he.icon;he.layer;var cu=he.text;he.counter;var uu={prefix:"fab",iconName:"reddit",icon:[512,512,[],"f1a1","M201.5 305.5c-13.8 0-24.9-11.1-24.9-24.6 0-13.8 11.1-24.9 24.9-24.9 13.6 0 24.6 11.1 24.6 24.9 0 13.6-11.1 24.6-24.6 24.6zM504 256c0 137-111 248-248 248S8 393 8 256 119 8 256 8s248 111 248 248zm-132.3-41.2c-9.4 0-17.7 3.9-23.8 10-22.4-15.5-52.6-25.5-86.1-26.6l17.4-78.3 55.4 12.5c0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.3 24.9-24.9s-11.1-24.9-24.9-24.9c-9.7 0-18 5.8-22.1 13.8l-61.2-13.6c-3-.8-6.1 1.4-6.9 4.4l-19.1 86.4c-33.2 1.4-63.1 11.3-85.5 26.8-6.1-6.4-14.7-10.2-24.1-10.2-34.9 0-46.3 46.9-14.4 62.8-1.1 5-1.7 10.2-1.7 15.5 0 52.6 59.2 95.2 132 95.2 73.1 0 132.3-42.6 132.3-95.2 0-5.3-.6-10.8-1.9-15.8 31.3-16 19.8-62.5-14.9-62.5zM302.8 331c-18.2 18.2-76.1 17.9-93.6 0-2.2-2.2-6.1-2.2-8.3 0-2.5 2.5-2.5 6.4 0 8.6 22.8 22.8 87.3 22.8 110.2 0 2.5-2.2 2.5-6.1 0-8.6-2.2-2.2-6.1-2.2-8.3 0zm7.7-75c-13.6 0-24.6 11.1-24.6 24.9 0 13.6 11.1 24.6 24.6 24.6 13.8 0 24.9-11.1 24.9-24.6 0-13.8-11-24.9-24.9-24.9z"]},du={prefix:"fab",iconName:"discord",icon:[640,512,[],"f392","M524.531,69.836a1.5,1.5,0,0,0-.764-.7A485.065,485.065,0,0,0,404.081,32.03a1.816,1.816,0,0,0-1.923.91,337.461,337.461,0,0,0-14.9,30.6,447.848,447.848,0,0,0-134.426,0,309.541,309.541,0,0,0-15.135-30.6,1.89,1.89,0,0,0-1.924-.91A483.689,483.689,0,0,0,116.085,69.137a1.712,1.712,0,0,0-.788.676C39.068,183.651,18.186,294.69,28.43,404.354a2.016,2.016,0,0,0,.765,1.375A487.666,487.666,0,0,0,176.02,479.918a1.9,1.9,0,0,0,2.063-.676A348.2,348.2,0,0,0,208.12,430.4a1.86,1.86,0,0,0-1.019-2.588,321.173,321.173,0,0,1-45.868-21.853,1.885,1.885,0,0,1-.185-3.126c3.082-2.309,6.166-4.711,9.109-7.137a1.819,1.819,0,0,1,1.9-.256c96.229,43.917,200.41,43.917,295.5,0a1.812,1.812,0,0,1,1.924.233c2.944,2.426,6.027,4.851,9.132,7.16a1.884,1.884,0,0,1-.162,3.126,301.407,301.407,0,0,1-45.89,21.83,1.875,1.875,0,0,0-1,2.611,391.055,391.055,0,0,0,30.014,48.815,1.864,1.864,0,0,0,2.063.7A486.048,486.048,0,0,0,610.7,405.729a1.882,1.882,0,0,0,.765-1.352C623.729,277.594,590.933,167.465,524.531,69.836ZM222.491,337.58c-28.972,0-52.844-26.587-52.844-59.239S193.056,219.1,222.491,219.1c29.665,0,53.306,26.82,52.843,59.239C275.334,310.993,251.924,337.58,222.491,337.58Zm195.38,0c-28.971,0-52.843-26.587-52.843-59.239S388.437,219.1,417.871,219.1c29.667,0,53.307,26.82,52.844,59.239C470.715,310.993,447.538,337.58,417.871,337.58Z"]},mu={prefix:"fab",iconName:"twitch",icon:[512,512,[],"f1e8","M391.17,103.47H352.54v109.7h38.63ZM285,103H246.37V212.75H285ZM120.83,0,24.31,91.42V420.58H140.14V512l96.53-91.42h77.25L487.69,256V0ZM449.07,237.75l-77.22,73.12H294.61l-67.6,64v-64H140.14V36.58H449.07Z"]};function Ei(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function _e(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ei(Object(n),!0).forEach(function(r){ce(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ei(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Bn(e){return Bn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bn(e)}function ce(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function pu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function hu(e,t){if(e==null)return{};var n=pu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Ur(e){return vu(e)||gu(e)||bu(e)||yu()}function vu(e){if(Array.isArray(e))return Br(e)}function gu(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function bu(e,t){if(e){if(typeof e=="string")return Br(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Br(e,t)}}function Br(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function yu(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var xu=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},Yo={exports:{}};(function(e){(function(t){var n=function(w,E,O){if(!u(E)||m(E)||g(E)||A(E)||l(E))return E;var j,H=0,fe=0;if(d(E))for(j=[],fe=E.length;H<fe;H++)j.push(n(w,E[H],O));else{j={};for(var re in E)Object.prototype.hasOwnProperty.call(E,re)&&(j[w(re,O)]=n(w,E[re],O))}return j},r=function(w,E){E=E||{};var O=E.separator||"_",j=E.split||/(?=[A-Z])/;return w.split(j).join(O)},a=function(w){return R(w)?w:(w=w.replace(/[\-_\s]+(.)?/g,function(E,O){return O?O.toUpperCase():""}),w.substr(0,1).toLowerCase()+w.substr(1))},i=function(w){var E=a(w);return E.substr(0,1).toUpperCase()+E.substr(1)},o=function(w,E){return r(w,E).toLowerCase()},s=Object.prototype.toString,l=function(w){return typeof w=="function"},u=function(w){return w===Object(w)},d=function(w){return s.call(w)=="[object Array]"},m=function(w){return s.call(w)=="[object Date]"},g=function(w){return s.call(w)=="[object RegExp]"},A=function(w){return s.call(w)=="[object Boolean]"},R=function(w){return w=w-0,w===w},M=function(w,E){var O=E&&"process"in E?E.process:E;return typeof O!="function"?w:function(j,H){return O(j,w,H)}},U={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(w,E){return n(M(a,E),w)},decamelizeKeys:function(w,E){return n(M(o,E),w,E)},pascalizeKeys:function(w,E){return n(M(i,E),w)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=U:t.humps=U})(xu)})(Yo);var wu=Yo.exports,_u=["class","style"];function Au(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=wu.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function ku(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Aa(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Aa(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,u){var d=e.attributes[u];switch(u){case"class":l.class=ku(d);break;case"style":l.style=Au(d);break;default:l.attrs[u]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=hu(n,_u);return vo(e.tag,_e(_e(_e({},t),{},{class:a.class,style:_e(_e({},a.style),o)},a.attrs),s),r)}var $o=!1;try{$o=!0}catch{}function Pu(){if(!$o&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function Ht(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?ce({},e,t):{}}function Ou(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},ce(t,"fa-".concat(e.size),e.size!==null),ce(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),ce(t,"fa-pull-".concat(e.pull),e.pull!==null),ce(t,"fa-swap-opacity",e.swapOpacity),ce(t,"fa-bounce",e.bounce),ce(t,"fa-shake",e.shake),ce(t,"fa-beat",e.beat),ce(t,"fa-fade",e.fade),ce(t,"fa-beat-fade",e.beatFade),ce(t,"fa-flash",e.flash),ce(t,"fa-spin-pulse",e.spinPulse),ce(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Ci(e){if(e&&Bn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Un.icon)return Un.icon(e);if(e===null)return null;if(Bn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var hr=dt({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=ge(function(){return Ci(t.icon)}),i=ge(function(){return Ht("classes",Ou(t))}),o=ge(function(){return Ht("transform",typeof t.transform=="string"?Un.transform(t.transform):t.transform)}),s=ge(function(){return Ht("mask",Ci(t.mask))}),l=ge(function(){return fu(a.value,_e(_e(_e(_e({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});En(l,function(d){if(!d)return Pu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var u=ge(function(){return l.value?Aa(l.value.abstract[0],{},r):null});return function(){return u.value}}});dt({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=Ko.familyPrefix,i=ge(function(){return["".concat(a,"-layers")].concat(Ur(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return vo("div",{class:i.value},r.default?r.default():[])}}});dt({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=Ko.familyPrefix,i=ge(function(){return Ht("classes",[].concat(Ur(t.counter?["".concat(a,"-layers-counter")]:[]),Ur(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=ge(function(){return Ht("transform",typeof t.transform=="string"?Un.transform(t.transform):t.transform)}),s=ge(function(){var u=cu(t.value.toString(),_e(_e({},o.value),i.value)),d=u.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=ge(function(){return Aa(s.value,{},r)});return function(){return l.value}}});const Eu={class:"community-bar"},Cu={href:"https://www.reddit.com/r/ProgrammerHumor/",target:"_blank",class:"community-bar-item"},Iu={href:"https://discord.com/invite/rph",target:"_blank",class:"community-bar-item"},Tu={href:"https://www.twitch.tv/programmerhumor",target:"_blank",class:"community-bar-item"},Su=dt({__name:"CommunityBar",setup(e){return pr.add(du),pr.add(uu),pr.add(mu),(t,n)=>(en(),tn("ul",Eu,[de("a",Cu,[ee(jt(hr),{icon:["fab","reddit"],class:"icon"}),zt(" Subreddit ")]),de("a",Iu,[ee(jt(hr),{icon:["fab","discord"],class:"icon"}),zt(" Discord server ")]),de("a",Tu,[ee(jt(hr),{icon:["fab","twitch"],class:"icon"}),zt(" Twitch channel ")])]))}}),Mu={class:"home-hero"},Nu={class:"hero-content"},Ru=de("h1",{class:"hero-title"},"r/ProgrammerHumor",-1),Fu=dt({__name:"Home",setup(e){return(t,n)=>(en(),tn("section",Mu,[de("div",Nu,[Ru,ee(Su)])]))}}),ju=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Lu={},Du=de("p",{class:"website-credit"},[zt("Website built by "),de("a",{href:"https://github.com/WilliamNT",target:"_blank"},"WilliamNT")],-1),zu=[Du];function Uu(e,t){return en(),tn("footer",null,zu)}const Bu=ju(Lu,[["render",Uu]]),Hu=dt({__name:"App",setup(e){return(t,n)=>(en(),tn(Te,null,[de("header",null,[ee(Tf)]),de("main",null,[ee(Fu)]),ee(Bu)],64))}});_f(Hu).mount("#app");
