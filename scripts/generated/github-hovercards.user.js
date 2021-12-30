// ==UserScript==
// @name         GitHub Hovercards
// @version      18
// @description  Enable native hovercards for more GitHub links
// @author       kidonng
// @namespace    https://github.com/kidonng/cherry
// @match        https://github.com/*
// @example      https://github.com/npm/npm
// ==/UserScript==
(()=>{var Pt=Object.create;var G=Object.defineProperty;var Ct=Object.getOwnPropertyDescriptor;var Mt=Object.getOwnPropertyNames;var Ot=Object.getPrototypeOf,Et=Object.prototype.hasOwnProperty;var Lt=e=>G(e,"__esModule",{value:!0});var K=(e,n)=>()=>(n||e((n={exports:{}}).exports,n),n.exports);var xt=(e,n,b)=>{if(n&&typeof n=="object"||typeof n=="function")for(let _ of Mt(n))!Et.call(e,_)&&_!=="default"&&G(e,_,{get:()=>n[_],enumerable:!(b=Ct(n,_))||b.enumerable});return e},At=e=>xt(Lt(G(e!=null?Pt(Ot(e)):{},"default",e&&e.__esModule&&"default"in e?{get:()=>e.default,enumerable:!0}:{value:e,enumerable:!0})),e);var Z=K((z,X)=>{(function(e,n){typeof define=="function"&&define.amd?define([],n):typeof z=="object"?X.exports=n():e.SelectorSet=n()})(z,function(){"use strict";function e(){if(!(this instanceof e))return new e;this.size=0,this.uid=0,this.selectors=[],this.selectorObjects={},this.indexes=Object.create(this.indexes),this.activeIndexes=[]}var n=window.document.documentElement,b=n.matches||n.webkitMatchesSelector||n.mozMatchesSelector||n.oMatchesSelector||n.msMatchesSelector;e.prototype.matchesSelector=function(r,c){return b.call(r,c)},e.prototype.querySelectorAll=function(r,c){return c.querySelectorAll(r)},e.prototype.indexes=[];var _=/^#((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;e.prototype.indexes.push({name:"ID",selector:function(c){var l;if(l=c.match(_))return l[0].slice(1)},element:function(c){if(c.id)return[c.id]}});var M=/^\.((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;e.prototype.indexes.push({name:"CLASS",selector:function(c){var l;if(l=c.match(M))return l[0].slice(1)},element:function(c){var l=c.className;if(l){if(typeof l=="string")return l.split(/\s/);if(typeof l=="object"&&"baseVal"in l)return l.baseVal.split(/\s/)}}});var E=/^((?:[\w\u00c0-\uFFFF\-]|\\.)+)/g;e.prototype.indexes.push({name:"TAG",selector:function(c){var l;if(l=c.match(E))return l[0].toUpperCase()},element:function(c){return[c.nodeName.toUpperCase()]}}),e.prototype.indexes.default={name:"UNIVERSAL",selector:function(){return!0},element:function(){return[!0]}};var L;typeof window.Map=="function"?L=window.Map:L=function(){function r(){this.map={}}return r.prototype.get=function(c){return this.map[c+" "]},r.prototype.set=function(c,l){this.map[c+" "]=l},r}();var N=/((?:\((?:\([^()]+\)|[^()]+)+\)|\[(?:\[[^\[\]]*\]|['"][^'"]*['"]|[^\[\]'"]+)+\]|\\.|[^ >+~,(\[\\]+)+|[>+~])(\s*,\s*)?((?:.|\r|\n)*)/g;function j(r,c){r=r.slice(0).concat(r.default);var l=r.length,p,h,w,v,y=c,m,f,g=[];do if(N.exec(""),(w=N.exec(y))&&(y=w[3],w[2]||!y)){for(p=0;p<l;p++)if(f=r[p],m=f.selector(w[1])){for(h=g.length,v=!1;h--;)if(g[h].index===f&&g[h].key===m){v=!0;break}v||g.push({index:f,key:m});break}}while(w);return g}function x(r,c){var l,p,h;for(l=0,p=r.length;l<p;l++)if(h=r[l],c.isPrototypeOf(h))return h}e.prototype.logDefaultIndexUsed=function(){},e.prototype.add=function(r,c){var l,p,h,w,v,y,m,f,g=this.activeIndexes,R=this.selectors,P=this.selectorObjects;if(typeof r=="string"){for(l={id:this.uid++,selector:r,data:c},P[l.id]=l,m=j(this.indexes,r),p=0;p<m.length;p++)f=m[p],w=f.key,h=f.index,v=x(g,h),v||(v=Object.create(h),v.map=new L,g.push(v)),h===this.indexes.default&&this.logDefaultIndexUsed(l),y=v.map.get(w),y||(y=[],v.map.set(w,y)),y.push(l);this.size++,R.push(r)}},e.prototype.remove=function(r,c){if(typeof r=="string"){var l,p,h,w,v,y,m,f,g=this.activeIndexes,R=this.selectors=[],P=this.selectorObjects,O={},W=arguments.length===1;for(l=j(this.indexes,r),h=0;h<l.length;h++)for(p=l[h],w=g.length;w--;)if(y=g[w],p.index.isPrototypeOf(y)){if(m=y.map.get(p.key),m)for(v=m.length;v--;)f=m[v],f.selector===r&&(W||f.data===c)&&(m.splice(v,1),O[f.id]=!0);break}for(h in O)delete P[h],this.size--;for(h in P)R.push(P[h].selector)}};function A(r,c){return r.id-c.id}return e.prototype.queryAll=function(r){if(!this.selectors.length)return[];var c={},l=[],p=this.querySelectorAll(this.selectors.join(", "),r),h,w,v,y,m,f,g,R;for(h=0,v=p.length;h<v;h++)for(m=p[h],f=this.matches(m),w=0,y=f.length;w<y;w++)R=f[w],c[R.id]?g=c[R.id]:(g={id:R.id,selector:R.selector,data:R.data,elements:[]},c[R.id]=g,l.push(g)),g.elements.push(m);return l.sort(A)},e.prototype.matches=function(r){if(!r)return[];var c,l,p,h,w,v,y,m,f,g,R,P=this.activeIndexes,O={},W=[];for(c=0,h=P.length;c<h;c++)if(y=P[c],m=y.element(r),m){for(l=0,w=m.length;l<w;l++)if(f=y.map.get(m[l]))for(p=0,v=f.length;p<v;p++)g=f[p],R=g.id,!O[R]&&this.matchesSelector(r,g.selector)&&(O[R]=!0,W.push(g))}return W.sort(A)},e})});var et=K((F,tt)=>{(function(e,n){typeof F=="object"&&typeof tt!="undefined"?n(F,Z()):typeof define=="function"&&define.amd?define(["exports","selector-set"],n):n(e.SelectorObserver={},e.SelectorSet)})(F,function(e,n){"use strict";n=n&&n.hasOwnProperty("default")?n.default:n;var b=null,_=null,M=[];function E(t,o){var i=[];function a(){var d=i;i=[],o(d)}function s(){for(var d=arguments.length,u=Array(d),S=0;S<d;S++)u[S]=arguments[S];i.push(u),i.length===1&&L(t,a)}return s}function L(t,o){_||(_=new MutationObserver(N)),b||(b=t.createElement("div"),_.observe(b,{attributes:!0})),M.push(o),b.setAttribute("data-twiddle",""+Date.now())}function N(){var t=M;M=[];for(var o=0;o<t.length;o++)try{t[o]()}catch(i){setTimeout(function(){throw i},0)}}var j=new WeakMap,x=new WeakMap,A=new WeakMap,r=new WeakMap;function c(t,o){for(var i=0;i<o.length;i++){var a=o[i],s=a[0],d=a[1],u=a[2];s===f?(l(u,d),p(u,d)):s===g?h(u,d):s===R&&w(t.observers,d)}}function l(t,o){if(o instanceof t.elementConstructor){var i=j.get(o);if(i||(i=[],j.set(o,i)),i.indexOf(t.id)===-1){var a=void 0;if(t.initialize&&(a=t.initialize.call(void 0,o)),a){var s=x.get(o);s||(s={},x.set(o,s)),s[""+t.id]=a}i.push(t.id)}}}function p(t,o){if(o instanceof t.elementConstructor){var i=r.get(o);if(i||(i=[],r.set(o,i)),i.indexOf(t.id)===-1){t.elements.push(o);var a=x.get(o),s=a?a[""+t.id]:null;if(s&&s.add&&s.add.call(void 0,o),t.subscribe){var d=t.subscribe.call(void 0,o);if(d){var u=A.get(o);u||(u={},A.set(o,u)),u[""+t.id]=d}}t.add&&t.add.call(void 0,o),i.push(t.id)}}}function h(t,o){if(o instanceof t.elementConstructor){var i=r.get(o);if(!!i){var a=t.elements.indexOf(o);if(a!==-1&&t.elements.splice(a,1),a=i.indexOf(t.id),a!==-1){var s=x.get(o),d=s?s[""+t.id]:null;if(d&&d.remove&&d.remove.call(void 0,o),t.subscribe){var u=A.get(o),S=u?u[""+t.id]:null;S&&S.unsubscribe&&S.unsubscribe()}t.remove&&t.remove.call(void 0,o),i.splice(a,1)}i.length===0&&r.delete(o)}}}function w(t,o){var i=r.get(o);if(!!i){for(var a=i.slice(0),s=0;s<a.length;s++){var d=t[a[s]];if(!!d){var u=d.elements.indexOf(o);u!==-1&&d.elements.splice(u,1);var S=x.get(o),C=S?S[""+d.id]:null;C&&C.remove&&C.remove.call(void 0,o);var k=A.get(o),U=k?k[""+d.id]:null;U&&U.unsubscribe&&U.unsubscribe(),d.remove&&d.remove.call(void 0,o)}}r.delete(o)}}var v=null;function y(t){if(v===null){var o=t.createElement("div"),i=t.createElement("div"),a=t.createElement("div");o.appendChild(i),i.appendChild(a),o.innerHTML="",v=a.parentNode!==i}return v}function m(t){return"matches"in t||"webkitMatchesSelector"in t||"mozMatchesSelector"in t||"oMatchesSelector"in t||"msMatchesSelector"in t}var f=1,g=2,R=3;function P(t,o,i){for(var a=0;a<i.length;a++){var s=i[a];s.type==="childList"?(O(t,o,s.addedNodes),W(t,o,s.removedNodes)):s.type==="attributes"&&B(t,o,s.target)}y(t.ownerDocument)&&ht(t,o)}function O(t,o,i){for(var a=0;a<i.length;a++){var s=i[a];if(m(s))for(var d=t.selectorSet.matches(s),u=0;u<d.length;u++){var S=d[u].data;o.push([f,s,S])}if("querySelectorAll"in s)for(var C=t.selectorSet.queryAll(s),k=0;k<C.length;k++)for(var U=C[k],_t=U.data,J=U.elements,H=0;H<J.length;H++)o.push([f,J[H],_t])}}function W(t,o,i){for(var a=0;a<i.length;a++){var s=i[a];if("querySelectorAll"in s){o.push([R,s]);for(var d=s.querySelectorAll("*"),u=0;u<d.length;u++)o.push([R,d[u]])}}}function B(t,o,i){if(m(i))for(var a=t.selectorSet.matches(i),s=0;s<a.length;s++){var d=a[s].data;o.push([f,i,d])}if("querySelectorAll"in i){var u=r.get(i);if(u)for(var S=0;S<u.length;S++){var C=t.observers[u[S]];C&&(t.selectorSet.matchesSelector(i,C.selector)||o.push([g,i,C]))}}}function dt(t,o,i){if("querySelectorAll"in i){B(t,o,i);for(var a=i.querySelectorAll("*"),s=0;s<a.length;s++)B(t,o,a[s])}}function ut(t,o,i){for(var a=0;a<i.length;a++)for(var s=i[a],d=s.form?s.form.elements:t.rootNode.querySelectorAll("input"),u=0;u<d.length;u++)B(t,o,d[u])}function ht(t,o){for(var i=0;i<t.observers.length;i++){var a=t.observers[i];if(a)for(var s=a.elements,d=0;d<s.length;d++){var u=s[d];u.parentNode||o.push([R,u])}}}function pt(t,o){var i=t.readyState;i==="interactive"||i==="complete"?L(t,o):t.addEventListener("DOMContentLoaded",L(t,o))}var vt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},ft=0;function T(t){this.rootNode=t.nodeType===9?t.documentElement:t,this.ownerDocument=t.nodeType===9?t:t.ownerDocument,this.observers=[],this.selectorSet=new n,this.mutationObserver=new MutationObserver(wt.bind(this,this)),this._scheduleAddRootNodes=E(this.ownerDocument,gt.bind(this,this)),this._handleThrottledChangedTargets=E(this.ownerDocument,bt.bind(this,this)),this.rootNode.addEventListener("change",yt.bind(this,this),!1),pt(this.ownerDocument,mt.bind(this,this))}T.prototype.disconnect=function(){this.mutationObserver.disconnect()},T.prototype.observe=function(t,o){var i=void 0;typeof o=="function"?i={selector:t,initialize:o}:(typeof o=="undefined"?"undefined":vt(o))==="object"?(i=o,i.selector=t):i=t;var a=this,s={id:ft++,selector:i.selector,initialize:i.initialize,add:i.add,remove:i.remove,subscribe:i.subscribe,elements:[],elementConstructor:i.hasOwnProperty("constructor")?i.constructor:this.ownerDocument.defaultView.Element,abort:function(){a._abortObserving(s)}};return this.selectorSet.add(s.selector,s),this.observers[s.id]=s,this._scheduleAddRootNodes(),s},T.prototype._abortObserving=function(t){for(var o=t.elements,i=0;i<o.length;i++)h(t,o[i]);this.selectorSet.remove(t.selector,t),delete this.observers[t.id]},T.prototype.triggerObservers=function(t){var o=[];dt(this,o,t),c(this,o)};function mt(t){t.mutationObserver.observe(t.rootNode,{childList:!0,attributes:!0,subtree:!0}),t._scheduleAddRootNodes()}function gt(t){var o=[];O(t,o,[t.rootNode]),c(t,o)}function wt(t,o){var i=[];P(t,i,o),c(t,i)}function yt(t,o){t._handleThrottledChangedTargets(o.target)}function bt(t,o){var i=[];ut(t,i,o),c(t,i)}var q=void 0;function $(){return q||(q=new T(window.document)),q}function Rt(){var t;return(t=$()).observe.apply(t,arguments)}function St(){var t;return(t=$()).triggerObservers.apply(t,arguments)}e.getDocumentObserver=$,e.observe=Rt,e.triggerObservers=St,e.default=T,Object.defineProperty(e,"__esModule",{value:!0})})});var ct=At(et());var ot=["400","401","402","403","404","405","406","407","408","409","410","411","412","413","414","415","416","417","418","419","420","421","422","423","424","425","426","427","428","429","430","431","500","501","502","503","504","505","506","507","508","509","510","511","about","access","account","admin","advisories","anonymous","any","api","apps","attributes","auth","billing","blob","blog","bounty","branches","business","businesses","c","cache","case-studies","categories","central","certification","changelog","cla","cloud","codereview","collection","collections","comments","commit","commits","community","companies","compare","contact","contributing","cookbook","coupons","customer-stories","customer","customers","dashboard","dashboards","design","develop","developer","diff","discover","discussions","docs","downloads","downtime","editor","editors","edu","enterprise","events","explore","featured","features","files","fixtures","forked","garage","ghost","gist","gists","graphs","guide","guides","help","help-wanted","home","hooks","hosting","hovercards","identity","images","inbox","individual","info","integration","interfaces","introduction","invalid-email-address","investors","issues","jobs","join","journal","journals","lab","labs","languages","launch","layouts","learn","legal","library","linux","listings","lists","login","logos","logout","mac","maintenance","malware","man","marketplace","mention","mentioned","mentioning","mentions","migrating","milestones","mine","mirrors","mobile","navigation","network","new","news","none","nonprofit","nonprofits","notices","notifications","oauth","offer","open-source","organisations","organizations","orgs","pages","partners","payments","personal","plans","plugins","popular","popularity","posts","press","pricing","professional","projects","pulls","raw","readme","recommendations","redeem","releases","render","reply","repositories","resources","restore","revert","save-net-neutrality","saved","scraping","search","security","services","sessions","settings","shareholders","shop","showcases","signin","signup","site","spam","sponsors","ssh","staff","starred","stars","static","status","statuses","storage","store","stories","styleguide","subscriptions","suggest","suggestion","suggestions","support","suspended","talks","teach","teacher","teachers","teaching","team","teams","ten","terms","timeline","topic","topics","tos","tour","train","training","translations","tree","trending","updates","username","users","visualization","w","watching","wiki","windows","works-with","www0","www1","www2","www3","www4","www5","www6","www7","www8","www9"];var nt=(e=location)=>Dt(e)||Y(e);var Wt=(e=location)=>!it(e)&&/^$|^(orgs\/[^/]+\/)?dashboard(\/|$)/.test(D(e));var it=(e=location)=>e.hostname.startsWith("gist.")||e.pathname.split("/",2)[1]==="gist";var V=(e=location)=>{var n;return/^issues\/\d+/.test((n=I(e))===null||n===void 0?void 0:n.path)&&document.title!=="GitHub \xB7 Where software is built"};var Q=(e=location)=>V(e)||Tt(e);var st=(e=location)=>{var n;return/^discussions\/\d+/.test((n=I(e))===null||n===void 0?void 0:n.path)};var Y=(e=location)=>{var n;return/^pull\/\d+\/commits\/[\da-f]{5,40}/.test((n=I(e))===null||n===void 0?void 0:n.path)};var Tt=(e=location)=>{var n;return/^pull\/\d+$/.test((n=I(e))===null||n===void 0?void 0:n.path)};var kt=(e=location)=>/^[^/]+\/[^/]+/.test(D(e))&&!ot.includes(e.pathname.split("/",2)[1])&&!Wt(e)&&!it(e)&&!Ut(e)&&!It(e);var at=(e=location)=>{var n;return((n=I(e))===null||n===void 0?void 0:n.path)===""};var Ut=(e=location)=>e.pathname.split("/")[3]==="search";var Dt=(e=location)=>{var n;return/^commit\/[\da-f]{5,40}/.test((n=I(e))===null||n===void 0?void 0:n.path)};var rt=(e=location)=>{let n=D(e);return n.length>0&&!n.includes("/")&&!ot.includes(n)};var It=(e=location)=>Boolean(e.pathname.split("/")[3]==="generate");var D=(e=location)=>e.pathname.replace(/\/+/g,"/").slice(1,e.pathname.endsWith("/")?-1:void 0),I=e=>{if(!e){let M=document.querySelector('[property="og:url"]');if(M){let E=new URL(M.content,location.origin);D(E).toLowerCase()===D(location).toLowerCase()&&(e=E)}}if(typeof e=="string"&&(e=new URL(e,location.origin)),!kt(e))return;let[n,b,..._]=D(e).split("/");return{owner:n,name:b,nameWithOwner:n+"/"+b,path:_.join("/")}};var lt=e=>rt(e)&&!e.pathname.includes("."),jt=new MutationObserver(([e])=>{let n=e.target;n.getAttribute("aria-label")==="Hovercard is unavailable"&&(n.removeAttribute("aria-label"),n.classList.remove("tooltipped"),n.dataset.hovercardUrl=n.dataset.hovercardUrl.replace("/users","/orgs"),n.dispatchEvent(new MouseEvent("mouseleave",{relatedTarget:n.parentElement})),setTimeout(()=>n.dispatchEvent(new MouseEvent("mouseover")),100))}),Nt=new MutationObserver(([e])=>{let n=e.target;n.getAttribute("aria-label")==="Hovercard is unavailable"&&(n.setAttribute("aria-label","Loading..."),n.dispatchEvent(new MouseEvent("mouseleave",{relatedTarget:n.parentElement})),fetch(n.pathname,{method:"HEAD"}).then(({url:b})=>{n.href=b,n.dataset.hovercardUrl=`${b}/hovercard`,n.removeAttribute("aria-label"),n.classList.remove("tooltipped"),setTimeout(()=>n.dispatchEvent(new MouseEvent("mouseover")),100)}))});(0,ct.observe)(`a:is([href^="/"], [href^="${location.origin}"]):not(${["[data-hovercard-url]","[data-pjax]",".js-pjax-history-navigate",".js-navigation-open",`[data-hydro-click*='"target":"PINNED_REPO"']`,`[data-hydro-click*='"click_context":"REPOSITORY_CARD","click_target":"REPOSITORY"']`,`[data-hydro-click*='"event_type":"search_result.click"'][data-hydro-click*='"model_name":"Repository"']`,'[itemprop="name codeRepository"]'].join()})`,{constructor:HTMLAnchorElement,add(e){let{pathname:n}=e;if(!(![at,Q,st,nt,lt].some(b=>b(e))||n===location.pathname||e.closest([".Popover-message",".js-feature-preview-indicator-container"].join()))){if(lt(e)&&(n=`/users${n}`,jt.observe(e,{attributes:!0})),Y(e)&&(n=n.replace(/pull\/\d+\/commits/,"commit")),Q(e)){if(n.endsWith("/linked_closing_reference"))return fetch(n,{method:"HEAD"}).then(({url:b})=>{e.href=b,e.dataset.hovercardUrl=`${b}/hovercard`,e.parentElement.classList.remove("tooltipped")});V(e)&&Nt.observe(e,{attributes:!0})}e.dataset.hovercardUrl=`${n}/hovercard`}}});})();
