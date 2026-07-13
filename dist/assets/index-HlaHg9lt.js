(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const z of document.querySelectorAll('link[rel="modulepreload"]'))n(z);new MutationObserver(z=>{for(const O of z)if(O.type==="childList")for(const M of O.addedNodes)M.tagName==="LINK"&&M.rel==="modulepreload"&&n(M)}).observe(document,{childList:!0,subtree:!0});function y(z){const O={};return z.integrity&&(O.integrity=z.integrity),z.referrerPolicy&&(O.referrerPolicy=z.referrerPolicy),z.crossOrigin==="use-credentials"?O.credentials="include":z.crossOrigin==="anonymous"?O.credentials="omit":O.credentials="same-origin",O}function n(z){if(z.ep)return;z.ep=!0;const O=y(z);fetch(z.href,O)}})();var vi={exports:{}},Ht={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ua;function A6(){if(Ua)return Ht;Ua=1;var c=Symbol.for("react.transitional.element"),p=Symbol.for("react.fragment");function y(n,z,O){var M=null;if(O!==void 0&&(M=""+O),z.key!==void 0&&(M=""+z.key),"key"in z){O={};for(var B in z)B!=="key"&&(O[B]=z[B])}else O=z;return z=O.ref,{$$typeof:c,type:n,key:M,ref:z!==void 0?z:null,props:O}}return Ht.Fragment=p,Ht.jsx=y,Ht.jsxs=y,Ht}var Ra;function O6(){return Ra||(Ra=1,vi.exports=A6()),vi.exports}var R=O6(),gi={exports:{}},F={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja;function x6(){if(ja)return F;ja=1;var c=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),y=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),z=Symbol.for("react.profiler"),O=Symbol.for("react.consumer"),M=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),S=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),Q=Symbol.iterator;function f0(m){return m===null||typeof m!="object"?null:(m=Q&&m[Q]||m["@@iterator"],typeof m=="function"?m:null)}var x0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,b0={};function n0(m,D,v){this.props=m,this.context=D,this.refs=b0,this.updater=v||x0}n0.prototype.isReactComponent={},n0.prototype.setState=function(m,D){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,D,"setState")},n0.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function c0(){}c0.prototype=n0.prototype;function _0(m,D,v){this.props=m,this.context=D,this.refs=b0,this.updater=v||x0}var t0=_0.prototype=new c0;t0.constructor=_0,s0(t0,n0.prototype),t0.isPureReactComponent=!0;var Y0=Array.isArray;function G0(){}var W={H:null,A:null,T:null,S:null},H0=Object.prototype.hasOwnProperty;function C0(m,D,v){var x=v.ref;return{$$typeof:c,type:m,key:D,ref:x!==void 0?x:null,props:v}}function J0(m,D){return C0(m.type,D,m.props)}function o0(m){return typeof m=="object"&&m!==null&&m.$$typeof===c}function T0(m){var D={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(v){return D[v]})}var K=/\/+/g;function F0(m,D){return typeof m=="object"&&m!==null&&m.key!=null?T0(""+m.key):D.toString(36)}function s2(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(G0,G0):(m.status="pending",m.then(function(D){m.status==="pending"&&(m.status="fulfilled",m.value=D)},function(D){m.status==="pending"&&(m.status="rejected",m.reason=D)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function E(m,D,v,x,H){var j=typeof m;(j==="undefined"||j==="boolean")&&(m=null);var b=!1;if(m===null)b=!0;else switch(j){case"bigint":case"string":case"number":b=!0;break;case"object":switch(m.$$typeof){case c:case p:b=!0;break;case Y:return b=m._init,E(b(m._payload),D,v,x,H)}}if(b)return H=H(m),b=x===""?"."+F0(m,0):x,Y0(H)?(v="",b!=null&&(v=b.replace(K,"$&/")+"/"),E(H,D,v,"",function(k){return k})):H!=null&&(o0(H)&&(H=J0(H,v+(H.key==null||m&&m.key===H.key?"":(""+H.key).replace(K,"$&/")+"/")+b)),D.push(H)),1;b=0;var L=x===""?".":x+":";if(Y0(m))for(var Z=0;Z<m.length;Z++)x=m[Z],j=L+F0(x,Z),b+=E(x,D,v,j,H);else if(Z=f0(m),typeof Z=="function")for(m=Z.call(m),Z=0;!(x=m.next()).done;)x=x.value,j=L+F0(x,Z++),b+=E(x,D,v,j,H);else if(j==="object"){if(typeof m.then=="function")return E(s2(m),D,v,x,H);throw D=String(m),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return b}function G(m,D,v){if(m==null)return m;var x=[],H=0;return E(m,x,"","",function(j){return D.call(v,j,H++)}),x}function w(m){if(m._status===-1){var D=m._result;D=D(),D.then(function(v){(m._status===0||m._status===-1)&&(m._status=1,m._result=v)},function(v){(m._status===0||m._status===-1)&&(m._status=2,m._result=v)}),m._status===-1&&(m._status=0,m._result=D)}if(m._status===1)return m._result.default;throw m._result}var h0=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},g0={map:G,forEach:function(m,D,v){G(m,function(){D.apply(this,arguments)},v)},count:function(m){var D=0;return G(m,function(){D++}),D},toArray:function(m){return G(m,function(D){return D})||[]},only:function(m){if(!o0(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return F.Activity=q,F.Children=g0,F.Component=n0,F.Fragment=y,F.Profiler=z,F.PureComponent=_0,F.StrictMode=n,F.Suspense=U,F.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=W,F.__COMPILER_RUNTIME={__proto__:null,c:function(m){return W.H.useMemoCache(m)}},F.cache=function(m){return function(){return m.apply(null,arguments)}},F.cacheSignal=function(){return null},F.cloneElement=function(m,D,v){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var x=s0({},m.props),H=m.key;if(D!=null)for(j in D.key!==void 0&&(H=""+D.key),D)!H0.call(D,j)||j==="key"||j==="__self"||j==="__source"||j==="ref"&&D.ref===void 0||(x[j]=D[j]);var j=arguments.length-2;if(j===1)x.children=v;else if(1<j){for(var b=Array(j),L=0;L<j;L++)b[L]=arguments[L+2];x.children=b}return C0(m.type,H,x)},F.createContext=function(m){return m={$$typeof:M,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:O,_context:m},m},F.createElement=function(m,D,v){var x,H={},j=null;if(D!=null)for(x in D.key!==void 0&&(j=""+D.key),D)H0.call(D,x)&&x!=="key"&&x!=="__self"&&x!=="__source"&&(H[x]=D[x]);var b=arguments.length-2;if(b===1)H.children=v;else if(1<b){for(var L=Array(b),Z=0;Z<b;Z++)L[Z]=arguments[Z+2];H.children=L}if(m&&m.defaultProps)for(x in b=m.defaultProps,b)H[x]===void 0&&(H[x]=b[x]);return C0(m,j,H)},F.createRef=function(){return{current:null}},F.forwardRef=function(m){return{$$typeof:B,render:m}},F.isValidElement=o0,F.lazy=function(m){return{$$typeof:Y,_payload:{_status:-1,_result:m},_init:w}},F.memo=function(m,D){return{$$typeof:S,type:m,compare:D===void 0?null:D}},F.startTransition=function(m){var D=W.T,v={};W.T=v;try{var x=m(),H=W.S;H!==null&&H(v,x),typeof x=="object"&&x!==null&&typeof x.then=="function"&&x.then(G0,h0)}catch(j){h0(j)}finally{D!==null&&v.types!==null&&(D.types=v.types),W.T=D}},F.unstable_useCacheRefresh=function(){return W.H.useCacheRefresh()},F.use=function(m){return W.H.use(m)},F.useActionState=function(m,D,v){return W.H.useActionState(m,D,v)},F.useCallback=function(m,D){return W.H.useCallback(m,D)},F.useContext=function(m){return W.H.useContext(m)},F.useDebugValue=function(){},F.useDeferredValue=function(m,D){return W.H.useDeferredValue(m,D)},F.useEffect=function(m,D){return W.H.useEffect(m,D)},F.useEffectEvent=function(m){return W.H.useEffectEvent(m)},F.useId=function(){return W.H.useId()},F.useImperativeHandle=function(m,D,v){return W.H.useImperativeHandle(m,D,v)},F.useInsertionEffect=function(m,D){return W.H.useInsertionEffect(m,D)},F.useLayoutEffect=function(m,D){return W.H.useLayoutEffect(m,D)},F.useMemo=function(m,D){return W.H.useMemo(m,D)},F.useOptimistic=function(m,D){return W.H.useOptimistic(m,D)},F.useReducer=function(m,D,v){return W.H.useReducer(m,D,v)},F.useRef=function(m){return W.H.useRef(m)},F.useState=function(m){return W.H.useState(m)},F.useSyncExternalStore=function(m,D,v){return W.H.useSyncExternalStore(m,D,v)},F.useTransition=function(){return W.H.useTransition()},F.version="19.2.7",F}var Ha;function Ni(){return Ha||(Ha=1,gi.exports=x6()),gi.exports}var P=Ni(),Si={exports:{}},qt={},Ti={exports:{}},bi={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var qa;function N6(){return qa||(qa=1,(function(c){function p(E,G){var w=E.length;E.push(G);e:for(;0<w;){var h0=w-1>>>1,g0=E[h0];if(0<z(g0,G))E[h0]=G,E[w]=g0,w=h0;else break e}}function y(E){return E.length===0?null:E[0]}function n(E){if(E.length===0)return null;var G=E[0],w=E.pop();if(w!==G){E[0]=w;e:for(var h0=0,g0=E.length,m=g0>>>1;h0<m;){var D=2*(h0+1)-1,v=E[D],x=D+1,H=E[x];if(0>z(v,w))x<g0&&0>z(H,v)?(E[h0]=H,E[x]=w,h0=x):(E[h0]=v,E[D]=w,h0=D);else if(x<g0&&0>z(H,w))E[h0]=H,E[x]=w,h0=x;else break e}}return G}function z(E,G){var w=E.sortIndex-G.sortIndex;return w!==0?w:E.id-G.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var O=performance;c.unstable_now=function(){return O.now()}}else{var M=Date,B=M.now();c.unstable_now=function(){return M.now()-B}}var U=[],S=[],Y=1,q=null,Q=3,f0=!1,x0=!1,s0=!1,b0=!1,n0=typeof setTimeout=="function"?setTimeout:null,c0=typeof clearTimeout=="function"?clearTimeout:null,_0=typeof setImmediate<"u"?setImmediate:null;function t0(E){for(var G=y(S);G!==null;){if(G.callback===null)n(S);else if(G.startTime<=E)n(S),G.sortIndex=G.expirationTime,p(U,G);else break;G=y(S)}}function Y0(E){if(s0=!1,t0(E),!x0)if(y(U)!==null)x0=!0,G0||(G0=!0,T0());else{var G=y(S);G!==null&&s2(Y0,G.startTime-E)}}var G0=!1,W=-1,H0=5,C0=-1;function J0(){return b0?!0:!(c.unstable_now()-C0<H0)}function o0(){if(b0=!1,G0){var E=c.unstable_now();C0=E;var G=!0;try{e:{x0=!1,s0&&(s0=!1,c0(W),W=-1),f0=!0;var w=Q;try{t:{for(t0(E),q=y(U);q!==null&&!(q.expirationTime>E&&J0());){var h0=q.callback;if(typeof h0=="function"){q.callback=null,Q=q.priorityLevel;var g0=h0(q.expirationTime<=E);if(E=c.unstable_now(),typeof g0=="function"){q.callback=g0,t0(E),G=!0;break t}q===y(U)&&n(U),t0(E)}else n(U);q=y(U)}if(q!==null)G=!0;else{var m=y(S);m!==null&&s2(Y0,m.startTime-E),G=!1}}break e}finally{q=null,Q=w,f0=!1}G=void 0}}finally{G?T0():G0=!1}}}var T0;if(typeof _0=="function")T0=function(){_0(o0)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,F0=K.port2;K.port1.onmessage=o0,T0=function(){F0.postMessage(null)}}else T0=function(){n0(o0,0)};function s2(E,G){W=n0(function(){E(c.unstable_now())},G)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(E){E.callback=null},c.unstable_forceFrameRate=function(E){0>E||125<E?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H0=0<E?Math.floor(1e3/E):5},c.unstable_getCurrentPriorityLevel=function(){return Q},c.unstable_next=function(E){switch(Q){case 1:case 2:case 3:var G=3;break;default:G=Q}var w=Q;Q=G;try{return E()}finally{Q=w}},c.unstable_requestPaint=function(){b0=!0},c.unstable_runWithPriority=function(E,G){switch(E){case 1:case 2:case 3:case 4:case 5:break;default:E=3}var w=Q;Q=E;try{return G()}finally{Q=w}},c.unstable_scheduleCallback=function(E,G,w){var h0=c.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?h0+w:h0):w=h0,E){case 1:var g0=-1;break;case 2:g0=250;break;case 5:g0=1073741823;break;case 4:g0=1e4;break;default:g0=5e3}return g0=w+g0,E={id:Y++,callback:G,priorityLevel:E,startTime:w,expirationTime:g0,sortIndex:-1},w>h0?(E.sortIndex=w,p(S,E),y(U)===null&&E===y(S)&&(s0?(c0(W),W=-1):s0=!0,s2(Y0,w-h0))):(E.sortIndex=g0,p(U,E),x0||f0||(x0=!0,G0||(G0=!0,T0()))),E},c.unstable_shouldYield=J0,c.unstable_wrapCallback=function(E){var G=Q;return function(){var w=Q;Q=G;try{return E.apply(this,arguments)}finally{Q=w}}}})(bi)),bi}var Ba;function D6(){return Ba||(Ba=1,Ti.exports=N6()),Ti.exports}var zi={exports:{}},l2={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ya;function C6(){if(Ya)return l2;Ya=1;var c=Ni();function p(U){var S="https://react.dev/errors/"+U;if(1<arguments.length){S+="?args[]="+encodeURIComponent(arguments[1]);for(var Y=2;Y<arguments.length;Y++)S+="&args[]="+encodeURIComponent(arguments[Y])}return"Minified React error #"+U+"; visit "+S+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function y(){}var n={d:{f:y,r:function(){throw Error(p(522))},D:y,C:y,L:y,m:y,X:y,S:y,M:y},p:0,findDOMNode:null},z=Symbol.for("react.portal");function O(U,S,Y){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:z,key:q==null?null:""+q,children:U,containerInfo:S,implementation:Y}}var M=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function B(U,S){if(U==="font")return"";if(typeof S=="string")return S==="use-credentials"?S:""}return l2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,l2.createPortal=function(U,S){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!S||S.nodeType!==1&&S.nodeType!==9&&S.nodeType!==11)throw Error(p(299));return O(U,S,null,Y)},l2.flushSync=function(U){var S=M.T,Y=n.p;try{if(M.T=null,n.p=2,U)return U()}finally{M.T=S,n.p=Y,n.d.f()}},l2.preconnect=function(U,S){typeof U=="string"&&(S?(S=S.crossOrigin,S=typeof S=="string"?S==="use-credentials"?S:"":void 0):S=null,n.d.C(U,S))},l2.prefetchDNS=function(U){typeof U=="string"&&n.d.D(U)},l2.preinit=function(U,S){if(typeof U=="string"&&S&&typeof S.as=="string"){var Y=S.as,q=B(Y,S.crossOrigin),Q=typeof S.integrity=="string"?S.integrity:void 0,f0=typeof S.fetchPriority=="string"?S.fetchPriority:void 0;Y==="style"?n.d.S(U,typeof S.precedence=="string"?S.precedence:void 0,{crossOrigin:q,integrity:Q,fetchPriority:f0}):Y==="script"&&n.d.X(U,{crossOrigin:q,integrity:Q,fetchPriority:f0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}},l2.preinitModule=function(U,S){if(typeof U=="string")if(typeof S=="object"&&S!==null){if(S.as==null||S.as==="script"){var Y=B(S.as,S.crossOrigin);n.d.M(U,{crossOrigin:Y,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0})}}else S==null&&n.d.M(U)},l2.preload=function(U,S){if(typeof U=="string"&&typeof S=="object"&&S!==null&&typeof S.as=="string"){var Y=S.as,q=B(Y,S.crossOrigin);n.d.L(U,Y,{crossOrigin:q,integrity:typeof S.integrity=="string"?S.integrity:void 0,nonce:typeof S.nonce=="string"?S.nonce:void 0,type:typeof S.type=="string"?S.type:void 0,fetchPriority:typeof S.fetchPriority=="string"?S.fetchPriority:void 0,referrerPolicy:typeof S.referrerPolicy=="string"?S.referrerPolicy:void 0,imageSrcSet:typeof S.imageSrcSet=="string"?S.imageSrcSet:void 0,imageSizes:typeof S.imageSizes=="string"?S.imageSizes:void 0,media:typeof S.media=="string"?S.media:void 0})}},l2.preloadModule=function(U,S){if(typeof U=="string")if(S){var Y=B(S.as,S.crossOrigin);n.d.m(U,{as:typeof S.as=="string"&&S.as!=="script"?S.as:void 0,crossOrigin:Y,integrity:typeof S.integrity=="string"?S.integrity:void 0})}else n.d.m(U)},l2.requestFormReset=function(U){n.d.r(U)},l2.unstable_batchedUpdates=function(U,S){return U(S)},l2.useFormState=function(U,S,Y){return M.H.useFormState(U,S,Y)},l2.useFormStatus=function(){return M.H.useHostTransitionStatus()},l2.version="19.2.7",l2}var Ga;function U6(){if(Ga)return zi.exports;Ga=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(p){console.error(p)}}return c(),zi.exports=C6(),zi.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var La;function R6(){if(La)return qt;La=1;var c=D6(),p=Ni(),y=U6();function n(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function z(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function O(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function M(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function B(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function U(e){if(O(e)!==e)throw Error(n(188))}function S(e){var t=e.alternate;if(!t){if(t=O(e),t===null)throw Error(n(188));return t!==e?null:e}for(var s=e,i=t;;){var l=s.return;if(l===null)break;var r=l.alternate;if(r===null){if(i=l.return,i!==null){s=i;continue}break}if(l.child===r.child){for(r=l.child;r;){if(r===s)return U(l),e;if(r===i)return U(l),t;r=r.sibling}throw Error(n(188))}if(s.return!==i.return)s=l,i=r;else{for(var a=!1,u=l.child;u;){if(u===s){a=!0,s=l,i=r;break}if(u===i){a=!0,i=l,s=r;break}u=u.sibling}if(!a){for(u=r.child;u;){if(u===s){a=!0,s=r,i=l;break}if(u===i){a=!0,i=r,s=l;break}u=u.sibling}if(!a)throw Error(n(189))}}if(s.alternate!==i)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?e:t}function Y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Y(e),t!==null)return t;e=e.sibling}return null}var q=Object.assign,Q=Symbol.for("react.element"),f0=Symbol.for("react.transitional.element"),x0=Symbol.for("react.portal"),s0=Symbol.for("react.fragment"),b0=Symbol.for("react.strict_mode"),n0=Symbol.for("react.profiler"),c0=Symbol.for("react.consumer"),_0=Symbol.for("react.context"),t0=Symbol.for("react.forward_ref"),Y0=Symbol.for("react.suspense"),G0=Symbol.for("react.suspense_list"),W=Symbol.for("react.memo"),H0=Symbol.for("react.lazy"),C0=Symbol.for("react.activity"),J0=Symbol.for("react.memo_cache_sentinel"),o0=Symbol.iterator;function T0(e){return e===null||typeof e!="object"?null:(e=o0&&e[o0]||e["@@iterator"],typeof e=="function"?e:null)}var K=Symbol.for("react.client.reference");function F0(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===K?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case s0:return"Fragment";case n0:return"Profiler";case b0:return"StrictMode";case Y0:return"Suspense";case G0:return"SuspenseList";case C0:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case x0:return"Portal";case _0:return e.displayName||"Context";case c0:return(e._context.displayName||"Context")+".Consumer";case t0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case W:return t=e.displayName||null,t!==null?t:F0(e.type)||"Memo";case H0:t=e._payload,e=e._init;try{return F0(e(t))}catch{}}return null}var s2=Array.isArray,E=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,G=y.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},h0=[],g0=-1;function m(e){return{current:e}}function D(e){0>g0||(e.current=h0[g0],h0[g0]=null,g0--)}function v(e,t){g0++,h0[g0]=e.current,e.current=t}var x=m(null),H=m(null),j=m(null),b=m(null);function L(e,t){switch(v(j,t),v(H,e),v(x,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?ta(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=ta(t),e=sa(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(x),v(x,e)}function Z(){D(x),D(H),D(j)}function k(e){e.memoizedState!==null&&v(b,e);var t=x.current,s=sa(t,e.type);t!==s&&(v(H,e),v(x,s))}function m0(e){H.current===e&&(D(x),D(H)),b.current===e&&(D(b),Ct._currentValue=w)}var N0,i0;function p0(e){if(N0===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);N0=t&&t[1]||"",i0=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+N0+e+i0}var i2=!1;function q2(e,t){if(!e||i2)return"";i2=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(T){var g=T}Reflect.construct(e,[],C)}else{try{C.call()}catch(T){g=T}e.call(C.prototype)}}else{try{throw Error()}catch(T){g=T}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(T){if(T&&g&&typeof T.stack=="string")return[T.stack,g.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var l=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");l&&l.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var r=i.DetermineComponentFrameRoot(),a=r[0],u=r[1];if(a&&u){var d=a.split(`
`),h=u.split(`
`);for(l=i=0;i<d.length&&!d[i].includes("DetermineComponentFrameRoot");)i++;for(;l<h.length&&!h[l].includes("DetermineComponentFrameRoot");)l++;if(i===d.length||l===h.length)for(i=d.length-1,l=h.length-1;1<=i&&0<=l&&d[i]!==h[l];)l--;for(;1<=i&&0<=l;i--,l--)if(d[i]!==h[l]){if(i!==1||l!==1)do if(i--,l--,0>l||d[i]!==h[l]){var A=`
`+d[i].replace(" at new "," at ");return e.displayName&&A.includes("<anonymous>")&&(A=A.replace("<anonymous>",e.displayName)),A}while(1<=i&&0<=l);break}}}finally{i2=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?p0(s):""}function n2(e,t){switch(e.tag){case 26:case 27:case 5:return p0(e.type);case 16:return p0("Lazy");case 13:return e.child!==t&&t!==null?p0("Suspense Fallback"):p0("Suspense");case 19:return p0("SuspenseList");case 0:case 15:return q2(e.type,!1);case 11:return q2(e.type.render,!1);case 1:return q2(e.type,!0);case 31:return p0("Activity");default:return""}}function J2(e){try{var t="",s=null;do t+=n2(e,s),s=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var L2=Object.prototype.hasOwnProperty,X2=c.unstable_scheduleCallback,se=c.unstable_cancelCallback,Ui=c.unstable_shouldYield,lu=c.unstable_requestPaint,h2=c.unstable_now,ru=c.unstable_getCurrentPriorityLevel,Ri=c.unstable_ImmediatePriority,ji=c.unstable_UserBlockingPriority,Gt=c.unstable_NormalPriority,au=c.unstable_LowPriority,Hi=c.unstable_IdlePriority,uu=c.log,nu=c.unstable_setDisableYieldValue,Ze=null,y2=null;function m1(e){if(typeof uu=="function"&&nu(e),y2&&typeof y2.setStrictMode=="function")try{y2.setStrictMode(Ze,e)}catch{}}var v2=Math.clz32?Math.clz32:ou,du=Math.log,cu=Math.LN2;function ou(e){return e>>>=0,e===0?32:31-(du(e)/cu|0)|0}var Lt=256,Xt=262144,Qt=4194304;function B1(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zt(e,t,s){var i=e.pendingLanes;if(i===0)return 0;var l=0,r=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var u=i&134217727;return u!==0?(i=u&~r,i!==0?l=B1(i):(a&=u,a!==0?l=B1(a):s||(s=u&~e,s!==0&&(l=B1(s))))):(u=i&~r,u!==0?l=B1(u):a!==0?l=B1(a):s||(s=i&~e,s!==0&&(l=B1(s)))),l===0?0:t!==0&&t!==l&&(t&r)===0&&(r=l&-l,s=t&-t,r>=s||r===32&&(s&4194048)!==0)?t:l}function Ve(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function mu(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function qi(){var e=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),e}function a4(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function Ke(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function pu(e,t,s,i,l,r){var a=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var u=e.entanglements,d=e.expirationTimes,h=e.hiddenUpdates;for(s=a&~s;0<s;){var A=31-v2(s),C=1<<A;u[A]=0,d[A]=-1;var g=h[A];if(g!==null)for(h[A]=null,A=0;A<g.length;A++){var T=g[A];T!==null&&(T.lane&=-536870913)}s&=~C}i!==0&&Bi(e,i,0),r!==0&&l===0&&e.tag!==0&&(e.suspendedLanes|=r&~(a&~t))}function Bi(e,t,s){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-v2(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|s&261930}function Yi(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var i=31-v2(s),l=1<<i;l&t|e[i]&t&&(e[i]|=t),s&=~l}}function Gi(e,t){var s=t&-t;return s=(s&42)!==0?1:u4(s),(s&(e.suspendedLanes|t))!==0?0:s}function u4(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function n4(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function Li(){var e=G.p;return e!==0?e:(e=window.event,e===void 0?32:Ma(e.type))}function Xi(e,t){var s=G.p;try{return G.p=e,t()}finally{G.p=s}}var p1=Math.random().toString(36).slice(2),W0="__reactFiber$"+p1,d2="__reactProps$"+p1,ie="__reactContainer$"+p1,d4="__reactEvents$"+p1,fu="__reactListeners$"+p1,_u="__reactHandles$"+p1,Qi="__reactResources$"+p1,Je="__reactMarker$"+p1;function c4(e){delete e[W0],delete e[d2],delete e[d4],delete e[fu],delete e[_u]}function le(e){var t=e[W0];if(t)return t;for(var s=e.parentNode;s;){if(t=s[ie]||s[W0]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=da(e);e!==null;){if(s=e[W0])return s;e=da(e)}return t}e=s,s=e.parentNode}return null}function re(e){if(e=e[W0]||e[ie]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function we(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(n(33))}function ae(e){var t=e[Qi];return t||(t=e[Qi]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $0(e){e[Je]=!0}var Zi=new Set,Vi={};function Y1(e,t){ue(e,t),ue(e+"Capture",t)}function ue(e,t){for(Vi[e]=t,e=0;e<t.length;e++)Zi.add(t[e])}var hu=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),Ki={},Ji={};function yu(e){return L2.call(Ji,e)?!0:L2.call(Ki,e)?!1:hu.test(e)?Ji[e]=!0:(Ki[e]=!0,!1)}function Vt(e,t,s){if(yu(t))if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+s)}}function Kt(e,t,s){if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+s)}}function w2(e,t,s,i){if(i===null)e.removeAttribute(s);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(t,s,""+i)}}function A2(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function wi(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function vu(e,t,s){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var l=i.get,r=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return l.call(this)},set:function(a){s=""+a,r.call(this,a)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function o4(e){if(!e._valueTracker){var t=wi(e)?"checked":"value";e._valueTracker=vu(e,t,""+e[t])}}function $i(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),i="";return e&&(i=wi(e)?e.checked?"true":"false":e.value),e=i,e!==s?(t.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var gu=/[\n"\\]/g;function O2(e){return e.replace(gu,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function m4(e,t,s,i,l,r,a,u){e.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.type=a:e.removeAttribute("type"),t!=null?a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+A2(t)):e.value!==""+A2(t)&&(e.value=""+A2(t)):a!=="submit"&&a!=="reset"||e.removeAttribute("value"),t!=null?p4(e,a,A2(t)):s!=null?p4(e,a,A2(s)):i!=null&&e.removeAttribute("value"),l==null&&r!=null&&(e.defaultChecked=!!r),l!=null&&(e.checked=l&&typeof l!="function"&&typeof l!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+A2(u):e.removeAttribute("name")}function ki(e,t,s,i,l,r,a,u){if(r!=null&&typeof r!="function"&&typeof r!="symbol"&&typeof r!="boolean"&&(e.type=r),t!=null||s!=null){if(!(r!=="submit"&&r!=="reset"||t!=null)){o4(e);return}s=s!=null?""+A2(s):"",t=t!=null?""+A2(t):s,u||t===e.value||(e.value=t),e.defaultValue=t}i=i??l,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=u?e.checked:!!i,e.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.name=a),o4(e)}function p4(e,t,s){t==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function ne(e,t,s,i){if(e=e.options,t){t={};for(var l=0;l<s.length;l++)t["$"+s[l]]=!0;for(s=0;s<e.length;s++)l=t.hasOwnProperty("$"+e[s].value),e[s].selected!==l&&(e[s].selected=l),l&&i&&(e[s].defaultSelected=!0)}else{for(s=""+A2(s),t=null,l=0;l<e.length;l++){if(e[l].value===s){e[l].selected=!0,i&&(e[l].defaultSelected=!0);return}t!==null||e[l].disabled||(t=e[l])}t!==null&&(t.selected=!0)}}function Fi(e,t,s){if(t!=null&&(t=""+A2(t),t!==e.value&&(e.value=t),s==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=s!=null?""+A2(s):""}function Wi(e,t,s,i){if(t==null){if(i!=null){if(s!=null)throw Error(n(92));if(s2(i)){if(1<i.length)throw Error(n(93));i=i[0]}s=i}s==null&&(s=""),t=s}s=A2(t),e.defaultValue=s,i=e.textContent,i===s&&i!==""&&i!==null&&(e.value=i),o4(e)}function de(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var Su=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function Ii(e,t,s){var i=t.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,s):typeof s!="number"||s===0||Su.has(t)?t==="float"?e.cssFloat=s:e[t]=(""+s).trim():e[t]=s+"px"}function Pi(e,t,s){if(t!=null&&typeof t!="object")throw Error(n(62));if(e=e.style,s!=null){for(var i in s)!s.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var l in t)i=t[l],t.hasOwnProperty(l)&&s[l]!==i&&Ii(e,l,i)}else for(var r in t)t.hasOwnProperty(r)&&Ii(e,r,t[r])}function f4(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Tu=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),bu=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wt(e){return bu.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $2(){}var _4=null;function h4(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ce=null,oe=null;function el(e){var t=re(e);if(t&&(e=t.stateNode)){var s=e[d2]||null;e:switch(e=t.stateNode,t.type){case"input":if(m4(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+O2(""+t)+'"][type="radio"]'),t=0;t<s.length;t++){var i=s[t];if(i!==e&&i.form===e.form){var l=i[d2]||null;if(!l)throw Error(n(90));m4(i,l.value,l.defaultValue,l.defaultValue,l.checked,l.defaultChecked,l.type,l.name)}}for(t=0;t<s.length;t++)i=s[t],i.form===e.form&&$i(i)}break e;case"textarea":Fi(e,s.value,s.defaultValue);break e;case"select":t=s.value,t!=null&&ne(e,!!s.multiple,t,!1)}}}var y4=!1;function tl(e,t,s){if(y4)return e(t,s);y4=!0;try{var i=e(t);return i}finally{if(y4=!1,(ce!==null||oe!==null)&&(j3(),ce&&(t=ce,e=oe,oe=ce=null,el(t),e)))for(t=0;t<e.length;t++)el(e[t])}}function $e(e,t){var s=e.stateNode;if(s===null)return null;var i=s[d2]||null;if(i===null)return null;s=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(n(231,t,typeof s));return s}var k2=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),v4=!1;if(k2)try{var ke={};Object.defineProperty(ke,"passive",{get:function(){v4=!0}}),window.addEventListener("test",ke,ke),window.removeEventListener("test",ke,ke)}catch{v4=!1}var f1=null,g4=null,$t=null;function sl(){if($t)return $t;var e,t=g4,s=t.length,i,l="value"in f1?f1.value:f1.textContent,r=l.length;for(e=0;e<s&&t[e]===l[e];e++);var a=s-e;for(i=1;i<=a&&t[s-i]===l[r-i];i++);return $t=l.slice(e,1<i?1-i:void 0)}function kt(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ft(){return!0}function il(){return!1}function c2(e){function t(s,i,l,r,a){this._reactName=s,this._targetInst=l,this.type=i,this.nativeEvent=r,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(s=e[u],this[u]=s?s(r):r[u]);return this.isDefaultPrevented=(r.defaultPrevented!=null?r.defaultPrevented:r.returnValue===!1)?Ft:il,this.isPropagationStopped=il,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ft)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ft)},persist:function(){},isPersistent:Ft}),t}var G1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wt=c2(G1),Fe=q({},G1,{view:0,detail:0}),zu=c2(Fe),S4,T4,We,It=q({},Fe,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:z4,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==We&&(We&&e.type==="mousemove"?(S4=e.screenX-We.screenX,T4=e.screenY-We.screenY):T4=S4=0,We=e),S4)},movementY:function(e){return"movementY"in e?e.movementY:T4}}),ll=c2(It),Eu=q({},It,{dataTransfer:0}),Mu=c2(Eu),Au=q({},Fe,{relatedTarget:0}),b4=c2(Au),Ou=q({},G1,{animationName:0,elapsedTime:0,pseudoElement:0}),xu=c2(Ou),Nu=q({},G1,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Du=c2(Nu),Cu=q({},G1,{data:0}),rl=c2(Cu),Uu={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ru={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ju={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Hu(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=ju[e])?!!t[e]:!1}function z4(){return Hu}var qu=q({},Fe,{key:function(e){if(e.key){var t=Uu[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Ru[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:z4,charCode:function(e){return e.type==="keypress"?kt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Bu=c2(qu),Yu=q({},It,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),al=c2(Yu),Gu=q({},Fe,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:z4}),Lu=c2(Gu),Xu=q({},G1,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qu=c2(Xu),Zu=q({},It,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Vu=c2(Zu),Ku=q({},G1,{newState:0,oldState:0}),Ju=c2(Ku),wu=[9,13,27,32],E4=k2&&"CompositionEvent"in window,Ie=null;k2&&"documentMode"in document&&(Ie=document.documentMode);var $u=k2&&"TextEvent"in window&&!Ie,ul=k2&&(!E4||Ie&&8<Ie&&11>=Ie),nl=" ",dl=!1;function cl(e,t){switch(e){case"keyup":return wu.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ol(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var me=!1;function ku(e,t){switch(e){case"compositionend":return ol(t);case"keypress":return t.which!==32?null:(dl=!0,nl);case"textInput":return e=t.data,e===nl&&dl?null:e;default:return null}}function Fu(e,t){if(me)return e==="compositionend"||!E4&&cl(e,t)?(e=sl(),$t=g4=f1=null,me=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ul&&t.locale!=="ko"?null:t.data;default:return null}}var Wu={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ml(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wu[e.type]:t==="textarea"}function pl(e,t,s,i){ce?oe?oe.push(i):oe=[i]:ce=i,t=X3(t,"onChange"),0<t.length&&(s=new Wt("onChange","change",null,s,i),e.push({event:s,listeners:t}))}var Pe=null,et=null;function Iu(e){kr(e,0)}function Pt(e){var t=we(e);if($i(t))return e}function fl(e,t){if(e==="change")return t}var _l=!1;if(k2){var M4;if(k2){var A4="oninput"in document;if(!A4){var hl=document.createElement("div");hl.setAttribute("oninput","return;"),A4=typeof hl.oninput=="function"}M4=A4}else M4=!1;_l=M4&&(!document.documentMode||9<document.documentMode)}function yl(){Pe&&(Pe.detachEvent("onpropertychange",vl),et=Pe=null)}function vl(e){if(e.propertyName==="value"&&Pt(et)){var t=[];pl(t,et,e,h4(e)),tl(Iu,t)}}function Pu(e,t,s){e==="focusin"?(yl(),Pe=t,et=s,Pe.attachEvent("onpropertychange",vl)):e==="focusout"&&yl()}function en(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pt(et)}function tn(e,t){if(e==="click")return Pt(t)}function sn(e,t){if(e==="input"||e==="change")return Pt(t)}function ln(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var g2=typeof Object.is=="function"?Object.is:ln;function tt(e,t){if(g2(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),i=Object.keys(t);if(s.length!==i.length)return!1;for(i=0;i<s.length;i++){var l=s[i];if(!L2.call(t,l)||!g2(e[l],t[l]))return!1}return!0}function gl(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Sl(e,t){var s=gl(e);e=0;for(var i;s;){if(s.nodeType===3){if(i=e+s.textContent.length,e<=t&&i>=t)return{node:s,offset:t-e};e=i}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=gl(s)}}function Tl(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Tl(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function bl(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Jt(e.document);t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=Jt(e.document)}return t}function O4(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var rn=k2&&"documentMode"in document&&11>=document.documentMode,pe=null,x4=null,st=null,N4=!1;function zl(e,t,s){var i=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;N4||pe==null||pe!==Jt(i)||(i=pe,"selectionStart"in i&&O4(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),st&&tt(st,i)||(st=i,i=X3(x4,"onSelect"),0<i.length&&(t=new Wt("onSelect","select",null,t,s),e.push({event:t,listeners:i}),t.target=pe)))}function L1(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var fe={animationend:L1("Animation","AnimationEnd"),animationiteration:L1("Animation","AnimationIteration"),animationstart:L1("Animation","AnimationStart"),transitionrun:L1("Transition","TransitionRun"),transitionstart:L1("Transition","TransitionStart"),transitioncancel:L1("Transition","TransitionCancel"),transitionend:L1("Transition","TransitionEnd")},D4={},El={};k2&&(El=document.createElement("div").style,"AnimationEvent"in window||(delete fe.animationend.animation,delete fe.animationiteration.animation,delete fe.animationstart.animation),"TransitionEvent"in window||delete fe.transitionend.transition);function X1(e){if(D4[e])return D4[e];if(!fe[e])return e;var t=fe[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in El)return D4[e]=t[s];return e}var Ml=X1("animationend"),Al=X1("animationiteration"),Ol=X1("animationstart"),an=X1("transitionrun"),un=X1("transitionstart"),nn=X1("transitioncancel"),xl=X1("transitionend"),Nl=new Map,C4="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");C4.push("scrollEnd");function B2(e,t){Nl.set(e,t),Y1(t,[e])}var e3=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},x2=[],_e=0,U4=0;function t3(){for(var e=_e,t=U4=_e=0;t<e;){var s=x2[t];x2[t++]=null;var i=x2[t];x2[t++]=null;var l=x2[t];x2[t++]=null;var r=x2[t];if(x2[t++]=null,i!==null&&l!==null){var a=i.pending;a===null?l.next=l:(l.next=a.next,a.next=l),i.pending=l}r!==0&&Dl(s,l,r)}}function s3(e,t,s,i){x2[_e++]=e,x2[_e++]=t,x2[_e++]=s,x2[_e++]=i,U4|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function R4(e,t,s,i){return s3(e,t,s,i),i3(e)}function Q1(e,t){return s3(e,null,null,t),i3(e)}function Dl(e,t,s){e.lanes|=s;var i=e.alternate;i!==null&&(i.lanes|=s);for(var l=!1,r=e.return;r!==null;)r.childLanes|=s,i=r.alternate,i!==null&&(i.childLanes|=s),r.tag===22&&(e=r.stateNode,e===null||e._visibility&1||(l=!0)),e=r,r=r.return;return e.tag===3?(r=e.stateNode,l&&t!==null&&(l=31-v2(s),e=r.hiddenUpdates,i=e[l],i===null?e[l]=[t]:i.push(t),t.lane=s|536870912),r):null}function i3(e){if(50<Et)throw Et=0,Qs=null,Error(n(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var he={};function dn(e,t,s,i){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function S2(e,t,s,i){return new dn(e,t,s,i)}function j4(e){return e=e.prototype,!(!e||!e.isReactComponent)}function F2(e,t){var s=e.alternate;return s===null?(s=S2(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Cl(e,t){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,t=s.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function l3(e,t,s,i,l,r){var a=0;if(i=e,typeof e=="function")j4(e)&&(a=1);else if(typeof e=="string")a=f6(e,s,x.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case C0:return e=S2(31,s,t,l),e.elementType=C0,e.lanes=r,e;case s0:return Z1(s.children,l,r,t);case b0:a=8,l|=24;break;case n0:return e=S2(12,s,t,l|2),e.elementType=n0,e.lanes=r,e;case Y0:return e=S2(13,s,t,l),e.elementType=Y0,e.lanes=r,e;case G0:return e=S2(19,s,t,l),e.elementType=G0,e.lanes=r,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case _0:a=10;break e;case c0:a=9;break e;case t0:a=11;break e;case W:a=14;break e;case H0:a=16,i=null;break e}a=29,s=Error(n(130,e===null?"null":typeof e,"")),i=null}return t=S2(a,s,t,l),t.elementType=e,t.type=i,t.lanes=r,t}function Z1(e,t,s,i){return e=S2(7,e,i,t),e.lanes=s,e}function H4(e,t,s){return e=S2(6,e,null,t),e.lanes=s,e}function Ul(e){var t=S2(18,null,null,0);return t.stateNode=e,t}function q4(e,t,s){return t=S2(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var Rl=new WeakMap;function N2(e,t){if(typeof e=="object"&&e!==null){var s=Rl.get(e);return s!==void 0?s:(t={value:e,source:t,stack:J2(t)},Rl.set(e,t),t)}return{value:e,source:t,stack:J2(t)}}var ye=[],ve=0,r3=null,it=0,D2=[],C2=0,_1=null,Q2=1,Z2="";function W2(e,t){ye[ve++]=it,ye[ve++]=r3,r3=e,it=t}function jl(e,t,s){D2[C2++]=Q2,D2[C2++]=Z2,D2[C2++]=_1,_1=e;var i=Q2;e=Z2;var l=32-v2(i)-1;i&=~(1<<l),s+=1;var r=32-v2(t)+l;if(30<r){var a=l-l%5;r=(i&(1<<a)-1).toString(32),i>>=a,l-=a,Q2=1<<32-v2(t)+l|s<<l|i,Z2=r+e}else Q2=1<<r|s<<l|i,Z2=e}function B4(e){e.return!==null&&(W2(e,1),jl(e,1,0))}function Y4(e){for(;e===r3;)r3=ye[--ve],ye[ve]=null,it=ye[--ve],ye[ve]=null;for(;e===_1;)_1=D2[--C2],D2[C2]=null,Z2=D2[--C2],D2[C2]=null,Q2=D2[--C2],D2[C2]=null}function Hl(e,t){D2[C2++]=Q2,D2[C2++]=Z2,D2[C2++]=_1,Q2=t.id,Z2=t.overflow,_1=e}var I0=null,U0=null,d0=!1,h1=null,U2=!1,G4=Error(n(519));function y1(e){var t=Error(n(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw lt(N2(t,e)),G4}function ql(e){var t=e.stateNode,s=e.type,i=e.memoizedProps;switch(t[W0]=e,t[d2]=i,s){case"dialog":r0("cancel",t),r0("close",t);break;case"iframe":case"object":case"embed":r0("load",t);break;case"video":case"audio":for(s=0;s<At.length;s++)r0(At[s],t);break;case"source":r0("error",t);break;case"img":case"image":case"link":r0("error",t),r0("load",t);break;case"details":r0("toggle",t);break;case"input":r0("invalid",t),ki(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":r0("invalid",t);break;case"textarea":r0("invalid",t),Wi(t,i.value,i.defaultValue,i.children)}s=i.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||t.textContent===""+s||i.suppressHydrationWarning===!0||Pr(t.textContent,s)?(i.popover!=null&&(r0("beforetoggle",t),r0("toggle",t)),i.onScroll!=null&&r0("scroll",t),i.onScrollEnd!=null&&r0("scrollend",t),i.onClick!=null&&(t.onclick=$2),t=!0):t=!1,t||y1(e,!0)}function Bl(e){for(I0=e.return;I0;)switch(I0.tag){case 5:case 31:case 13:U2=!1;return;case 27:case 3:U2=!0;return;default:I0=I0.return}}function ge(e){if(e!==I0)return!1;if(!d0)return Bl(e),d0=!0,!1;var t=e.tag,s;if((s=t!==3&&t!==27)&&((s=t===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||ii(e.type,e.memoizedProps)),s=!s),s&&U0&&y1(e),Bl(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));U0=na(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));U0=na(e)}else t===27?(t=U0,C1(e.type)?(e=ni,ni=null,U0=e):U0=t):U0=I0?j2(e.stateNode.nextSibling):null;return!0}function V1(){U0=I0=null,d0=!1}function L4(){var e=h1;return e!==null&&(f2===null?f2=e:f2.push.apply(f2,e),h1=null),e}function lt(e){h1===null?h1=[e]:h1.push(e)}var X4=m(null),K1=null,I2=null;function v1(e,t,s){v(X4,t._currentValue),t._currentValue=s}function P2(e){e._currentValue=X4.current,D(X4)}function Q4(e,t,s){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===s)break;e=e.return}}function Z4(e,t,s,i){var l=e.child;for(l!==null&&(l.return=e);l!==null;){var r=l.dependencies;if(r!==null){var a=l.child;r=r.firstContext;e:for(;r!==null;){var u=r;r=l;for(var d=0;d<t.length;d++)if(u.context===t[d]){r.lanes|=s,u=r.alternate,u!==null&&(u.lanes|=s),Q4(r.return,s,e),i||(a=null);break e}r=u.next}}else if(l.tag===18){if(a=l.return,a===null)throw Error(n(341));a.lanes|=s,r=a.alternate,r!==null&&(r.lanes|=s),Q4(a,s,e),a=null}else a=l.child;if(a!==null)a.return=l;else for(a=l;a!==null;){if(a===e){a=null;break}if(l=a.sibling,l!==null){l.return=a.return,a=l;break}a=a.return}l=a}}function Se(e,t,s,i){e=null;for(var l=t,r=!1;l!==null;){if(!r){if((l.flags&524288)!==0)r=!0;else if((l.flags&262144)!==0)break}if(l.tag===10){var a=l.alternate;if(a===null)throw Error(n(387));if(a=a.memoizedProps,a!==null){var u=l.type;g2(l.pendingProps.value,a.value)||(e!==null?e.push(u):e=[u])}}else if(l===b.current){if(a=l.alternate,a===null)throw Error(n(387));a.memoizedState.memoizedState!==l.memoizedState.memoizedState&&(e!==null?e.push(Ct):e=[Ct])}l=l.return}e!==null&&Z4(t,e,s,i),t.flags|=262144}function a3(e){for(e=e.firstContext;e!==null;){if(!g2(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function J1(e){K1=e,I2=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function P0(e){return Yl(K1,e)}function u3(e,t){return K1===null&&J1(e),Yl(e,t)}function Yl(e,t){var s=t._currentValue;if(t={context:t,memoizedValue:s,next:null},I2===null){if(e===null)throw Error(n(308));I2=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else I2=I2.next=t;return s}var cn=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(s,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(s){return s()})}},on=c.unstable_scheduleCallback,mn=c.unstable_NormalPriority,Q0={$$typeof:_0,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function V4(){return{controller:new cn,data:new Map,refCount:0}}function rt(e){e.refCount--,e.refCount===0&&on(mn,function(){e.controller.abort()})}var at=null,K4=0,Te=0,be=null;function pn(e,t){if(at===null){var s=at=[];K4=0,Te=$s(),be={status:"pending",value:void 0,then:function(i){s.push(i)}}}return K4++,t.then(Gl,Gl),t}function Gl(){if(--K4===0&&at!==null){be!==null&&(be.status="fulfilled");var e=at;at=null,Te=0,be=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function fn(e,t){var s=[],i={status:"pending",value:null,reason:null,then:function(l){s.push(l)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var l=0;l<s.length;l++)(0,s[l])(t)},function(l){for(i.status="rejected",i.reason=l,l=0;l<s.length;l++)(0,s[l])(void 0)}),i}var Ll=E.S;E.S=function(e,t){zr=h2(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&pn(e,t),Ll!==null&&Ll(e,t)};var w1=m(null);function J4(){var e=w1.current;return e!==null?e:D0.pooledCache}function n3(e,t){t===null?v(w1,w1.current):v(w1,t.pool)}function Xl(){var e=J4();return e===null?null:{parent:Q0._currentValue,pool:e}}var ze=Error(n(460)),w4=Error(n(474)),d3=Error(n(542)),c3={then:function(){}};function Ql(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Zl(e,t,s){switch(s=e[s],s===void 0?e.push(t):s!==t&&(t.then($2,$2),t=s),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Kl(e),e;default:if(typeof t.status=="string")t.then($2,$2);else{if(e=D0,e!==null&&100<e.shellSuspendCounter)throw Error(n(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var l=t;l.status="fulfilled",l.value=i}},function(i){if(t.status==="pending"){var l=t;l.status="rejected",l.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Kl(e),e}throw k1=t,ze}}function $1(e){try{var t=e._init;return t(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(k1=s,ze):s}}var k1=null;function Vl(){if(k1===null)throw Error(n(459));var e=k1;return k1=null,e}function Kl(e){if(e===ze||e===d3)throw Error(n(483))}var Ee=null,ut=0;function o3(e){var t=ut;return ut+=1,Ee===null&&(Ee=[]),Zl(Ee,e,t)}function nt(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function m3(e,t){throw t.$$typeof===Q?Error(n(525)):(e=Object.prototype.toString.call(t),Error(n(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function Jl(e){function t(f,o){if(e){var _=f.deletions;_===null?(f.deletions=[o],f.flags|=16):_.push(o)}}function s(f,o){if(!e)return null;for(;o!==null;)t(f,o),o=o.sibling;return null}function i(f){for(var o=new Map;f!==null;)f.key!==null?o.set(f.key,f):o.set(f.index,f),f=f.sibling;return o}function l(f,o){return f=F2(f,o),f.index=0,f.sibling=null,f}function r(f,o,_){return f.index=_,e?(_=f.alternate,_!==null?(_=_.index,_<o?(f.flags|=67108866,o):_):(f.flags|=67108866,o)):(f.flags|=1048576,o)}function a(f){return e&&f.alternate===null&&(f.flags|=67108866),f}function u(f,o,_,N){return o===null||o.tag!==6?(o=H4(_,f.mode,N),o.return=f,o):(o=l(o,_),o.return=f,o)}function d(f,o,_,N){var J=_.type;return J===s0?A(f,o,_.props.children,N,_.key):o!==null&&(o.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===H0&&$1(J)===o.type)?(o=l(o,_.props),nt(o,_),o.return=f,o):(o=l3(_.type,_.key,_.props,null,f.mode,N),nt(o,_),o.return=f,o)}function h(f,o,_,N){return o===null||o.tag!==4||o.stateNode.containerInfo!==_.containerInfo||o.stateNode.implementation!==_.implementation?(o=q4(_,f.mode,N),o.return=f,o):(o=l(o,_.children||[]),o.return=f,o)}function A(f,o,_,N,J){return o===null||o.tag!==7?(o=Z1(_,f.mode,N,J),o.return=f,o):(o=l(o,_),o.return=f,o)}function C(f,o,_){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=H4(""+o,f.mode,_),o.return=f,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case f0:return _=l3(o.type,o.key,o.props,null,f.mode,_),nt(_,o),_.return=f,_;case x0:return o=q4(o,f.mode,_),o.return=f,o;case H0:return o=$1(o),C(f,o,_)}if(s2(o)||T0(o))return o=Z1(o,f.mode,_,null),o.return=f,o;if(typeof o.then=="function")return C(f,o3(o),_);if(o.$$typeof===_0)return C(f,u3(f,o),_);m3(f,o)}return null}function g(f,o,_,N){var J=o!==null?o.key:null;if(typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint")return J!==null?null:u(f,o,""+_,N);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case f0:return _.key===J?d(f,o,_,N):null;case x0:return _.key===J?h(f,o,_,N):null;case H0:return _=$1(_),g(f,o,_,N)}if(s2(_)||T0(_))return J!==null?null:A(f,o,_,N,null);if(typeof _.then=="function")return g(f,o,o3(_),N);if(_.$$typeof===_0)return g(f,o,u3(f,_),N);m3(f,_)}return null}function T(f,o,_,N,J){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return f=f.get(_)||null,u(o,f,""+N,J);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case f0:return f=f.get(N.key===null?_:N.key)||null,d(o,f,N,J);case x0:return f=f.get(N.key===null?_:N.key)||null,h(o,f,N,J);case H0:return N=$1(N),T(f,o,_,N,J)}if(s2(N)||T0(N))return f=f.get(_)||null,A(o,f,N,J,null);if(typeof N.then=="function")return T(f,o,_,o3(N),J);if(N.$$typeof===_0)return T(f,o,_,u3(o,N),J);m3(o,N)}return null}function X(f,o,_,N){for(var J=null,y0=null,V=o,e0=o=0,u0=null;V!==null&&e0<_.length;e0++){V.index>e0?(u0=V,V=null):u0=V.sibling;var v0=g(f,V,_[e0],N);if(v0===null){V===null&&(V=u0);break}e&&V&&v0.alternate===null&&t(f,V),o=r(v0,o,e0),y0===null?J=v0:y0.sibling=v0,y0=v0,V=u0}if(e0===_.length)return s(f,V),d0&&W2(f,e0),J;if(V===null){for(;e0<_.length;e0++)V=C(f,_[e0],N),V!==null&&(o=r(V,o,e0),y0===null?J=V:y0.sibling=V,y0=V);return d0&&W2(f,e0),J}for(V=i(V);e0<_.length;e0++)u0=T(V,f,e0,_[e0],N),u0!==null&&(e&&u0.alternate!==null&&V.delete(u0.key===null?e0:u0.key),o=r(u0,o,e0),y0===null?J=u0:y0.sibling=u0,y0=u0);return e&&V.forEach(function(q1){return t(f,q1)}),d0&&W2(f,e0),J}function $(f,o,_,N){if(_==null)throw Error(n(151));for(var J=null,y0=null,V=o,e0=o=0,u0=null,v0=_.next();V!==null&&!v0.done;e0++,v0=_.next()){V.index>e0?(u0=V,V=null):u0=V.sibling;var q1=g(f,V,v0.value,N);if(q1===null){V===null&&(V=u0);break}e&&V&&q1.alternate===null&&t(f,V),o=r(q1,o,e0),y0===null?J=q1:y0.sibling=q1,y0=q1,V=u0}if(v0.done)return s(f,V),d0&&W2(f,e0),J;if(V===null){for(;!v0.done;e0++,v0=_.next())v0=C(f,v0.value,N),v0!==null&&(o=r(v0,o,e0),y0===null?J=v0:y0.sibling=v0,y0=v0);return d0&&W2(f,e0),J}for(V=i(V);!v0.done;e0++,v0=_.next())v0=T(V,f,e0,v0.value,N),v0!==null&&(e&&v0.alternate!==null&&V.delete(v0.key===null?e0:v0.key),o=r(v0,o,e0),y0===null?J=v0:y0.sibling=v0,y0=v0);return e&&V.forEach(function(M6){return t(f,M6)}),d0&&W2(f,e0),J}function O0(f,o,_,N){if(typeof _=="object"&&_!==null&&_.type===s0&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case f0:e:{for(var J=_.key;o!==null;){if(o.key===J){if(J=_.type,J===s0){if(o.tag===7){s(f,o.sibling),N=l(o,_.props.children),N.return=f,f=N;break e}}else if(o.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===H0&&$1(J)===o.type){s(f,o.sibling),N=l(o,_.props),nt(N,_),N.return=f,f=N;break e}s(f,o);break}else t(f,o);o=o.sibling}_.type===s0?(N=Z1(_.props.children,f.mode,N,_.key),N.return=f,f=N):(N=l3(_.type,_.key,_.props,null,f.mode,N),nt(N,_),N.return=f,f=N)}return a(f);case x0:e:{for(J=_.key;o!==null;){if(o.key===J)if(o.tag===4&&o.stateNode.containerInfo===_.containerInfo&&o.stateNode.implementation===_.implementation){s(f,o.sibling),N=l(o,_.children||[]),N.return=f,f=N;break e}else{s(f,o);break}else t(f,o);o=o.sibling}N=q4(_,f.mode,N),N.return=f,f=N}return a(f);case H0:return _=$1(_),O0(f,o,_,N)}if(s2(_))return X(f,o,_,N);if(T0(_)){if(J=T0(_),typeof J!="function")throw Error(n(150));return _=J.call(_),$(f,o,_,N)}if(typeof _.then=="function")return O0(f,o,o3(_),N);if(_.$$typeof===_0)return O0(f,o,u3(f,_),N);m3(f,_)}return typeof _=="string"&&_!==""||typeof _=="number"||typeof _=="bigint"?(_=""+_,o!==null&&o.tag===6?(s(f,o.sibling),N=l(o,_),N.return=f,f=N):(s(f,o),N=H4(_,f.mode,N),N.return=f,f=N),a(f)):s(f,o)}return function(f,o,_,N){try{ut=0;var J=O0(f,o,_,N);return Ee=null,J}catch(V){if(V===ze||V===d3)throw V;var y0=S2(29,V,null,f.mode);return y0.lanes=N,y0.return=f,y0}finally{}}}var F1=Jl(!0),wl=Jl(!1),g1=!1;function $4(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function k4(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function S1(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function T1(e,t,s){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(S0&2)!==0){var l=i.pending;return l===null?t.next=t:(t.next=l.next,l.next=t),i.pending=t,t=i3(e),Dl(e,null,s),t}return s3(e,i,t,s),i3(e)}function dt(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,s|=i,t.lanes=s,Yi(e,s)}}function F4(e,t){var s=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,s===i)){var l=null,r=null;if(s=s.firstBaseUpdate,s!==null){do{var a={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};r===null?l=r=a:r=r.next=a,s=s.next}while(s!==null);r===null?l=r=t:r=r.next=t}else l=r=t;s={baseState:i.baseState,firstBaseUpdate:l,lastBaseUpdate:r,shared:i.shared,callbacks:i.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}var W4=!1;function ct(){if(W4){var e=be;if(e!==null)throw e}}function ot(e,t,s,i){W4=!1;var l=e.updateQueue;g1=!1;var r=l.firstBaseUpdate,a=l.lastBaseUpdate,u=l.shared.pending;if(u!==null){l.shared.pending=null;var d=u,h=d.next;d.next=null,a===null?r=h:a.next=h,a=d;var A=e.alternate;A!==null&&(A=A.updateQueue,u=A.lastBaseUpdate,u!==a&&(u===null?A.firstBaseUpdate=h:u.next=h,A.lastBaseUpdate=d))}if(r!==null){var C=l.baseState;a=0,A=h=d=null,u=r;do{var g=u.lane&-536870913,T=g!==u.lane;if(T?(a0&g)===g:(i&g)===g){g!==0&&g===Te&&(W4=!0),A!==null&&(A=A.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var X=e,$=u;g=t;var O0=s;switch($.tag){case 1:if(X=$.payload,typeof X=="function"){C=X.call(O0,C,g);break e}C=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=$.payload,g=typeof X=="function"?X.call(O0,C,g):X,g==null)break e;C=q({},C,g);break e;case 2:g1=!0}}g=u.callback,g!==null&&(e.flags|=64,T&&(e.flags|=8192),T=l.callbacks,T===null?l.callbacks=[g]:T.push(g))}else T={lane:g,tag:u.tag,payload:u.payload,callback:u.callback,next:null},A===null?(h=A=T,d=C):A=A.next=T,a|=g;if(u=u.next,u===null){if(u=l.shared.pending,u===null)break;T=u,u=T.next,T.next=null,l.lastBaseUpdate=T,l.shared.pending=null}}while(!0);A===null&&(d=C),l.baseState=d,l.firstBaseUpdate=h,l.lastBaseUpdate=A,r===null&&(l.shared.lanes=0),A1|=a,e.lanes=a,e.memoizedState=C}}function $l(e,t){if(typeof e!="function")throw Error(n(191,e));e.call(t)}function kl(e,t){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)$l(s[e],t)}var Me=m(null),p3=m(0);function Fl(e,t){e=n1,v(p3,e),v(Me,t),n1=e|t.baseLanes}function I4(){v(p3,n1),v(Me,Me.current)}function P4(){n1=p3.current,D(Me),D(p3)}var T2=m(null),R2=null;function b1(e){var t=e.alternate;v(L0,L0.current&1),v(T2,e),R2===null&&(t===null||Me.current!==null||t.memoizedState!==null)&&(R2=e)}function es(e){v(L0,L0.current),v(T2,e),R2===null&&(R2=e)}function Wl(e){e.tag===22?(v(L0,L0.current),v(T2,e),R2===null&&(R2=e)):z1()}function z1(){v(L0,L0.current),v(T2,T2.current)}function b2(e){D(T2),R2===e&&(R2=null),D(L0)}var L0=m(0);function f3(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||ai(s)||ui(s)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var e1=0,I=null,M0=null,Z0=null,_3=!1,Ae=!1,W1=!1,h3=0,mt=0,Oe=null,_n=0;function q0(){throw Error(n(321))}function ts(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!g2(e[s],t[s]))return!1;return!0}function ss(e,t,s,i,l,r){return e1=r,I=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,E.H=e===null||e.memoizedState===null?j5:ys,W1=!1,r=s(i,l),W1=!1,Ae&&(r=Pl(t,s,i,l)),Il(e),r}function Il(e){E.H=_t;var t=M0!==null&&M0.next!==null;if(e1=0,Z0=M0=I=null,_3=!1,mt=0,Oe=null,t)throw Error(n(300));e===null||V0||(e=e.dependencies,e!==null&&a3(e)&&(V0=!0))}function Pl(e,t,s,i){I=e;var l=0;do{if(Ae&&(Oe=null),mt=0,Ae=!1,25<=l)throw Error(n(301));if(l+=1,Z0=M0=null,e.updateQueue!=null){var r=e.updateQueue;r.lastEffect=null,r.events=null,r.stores=null,r.memoCache!=null&&(r.memoCache.index=0)}E.H=H5,r=t(s,i)}while(Ae);return r}function hn(){var e=E.H,t=e.useState()[0];return t=typeof t.then=="function"?pt(t):t,e=e.useState()[0],(M0!==null?M0.memoizedState:null)!==e&&(I.flags|=1024),t}function is(){var e=h3!==0;return h3=0,e}function ls(e,t,s){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s}function rs(e){if(_3){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}_3=!1}e1=0,Z0=M0=I=null,Ae=!1,mt=h3=0,Oe=null}function a2(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z0===null?I.memoizedState=Z0=e:Z0=Z0.next=e,Z0}function X0(){if(M0===null){var e=I.alternate;e=e!==null?e.memoizedState:null}else e=M0.next;var t=Z0===null?I.memoizedState:Z0.next;if(t!==null)Z0=t,M0=e;else{if(e===null)throw I.alternate===null?Error(n(467)):Error(n(310));M0=e,e={memoizedState:M0.memoizedState,baseState:M0.baseState,baseQueue:M0.baseQueue,queue:M0.queue,next:null},Z0===null?I.memoizedState=Z0=e:Z0=Z0.next=e}return Z0}function y3(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pt(e){var t=mt;return mt+=1,Oe===null&&(Oe=[]),e=Zl(Oe,e,t),t=I,(Z0===null?t.memoizedState:Z0.next)===null&&(t=t.alternate,E.H=t===null||t.memoizedState===null?j5:ys),e}function v3(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pt(e);if(e.$$typeof===_0)return P0(e)}throw Error(n(438,String(e)))}function as(e){var t=null,s=I.updateQueue;if(s!==null&&(t=s.memoCache),t==null){var i=I.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(l){return l.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),s===null&&(s=y3(),I.updateQueue=s),s.memoCache=t,s=t.data[t.index],s===void 0)for(s=t.data[t.index]=Array(e),i=0;i<e;i++)s[i]=J0;return t.index++,s}function t1(e,t){return typeof t=="function"?t(e):t}function g3(e){var t=X0();return us(t,M0,e)}function us(e,t,s){var i=e.queue;if(i===null)throw Error(n(311));i.lastRenderedReducer=s;var l=e.baseQueue,r=i.pending;if(r!==null){if(l!==null){var a=l.next;l.next=r.next,r.next=a}t.baseQueue=l=r,i.pending=null}if(r=e.baseState,l===null)e.memoizedState=r;else{t=l.next;var u=a=null,d=null,h=t,A=!1;do{var C=h.lane&-536870913;if(C!==h.lane?(a0&C)===C:(e1&C)===C){var g=h.revertLane;if(g===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),C===Te&&(A=!0);else if((e1&g)===g){h=h.next,g===Te&&(A=!0);continue}else C={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},d===null?(u=d=C,a=r):d=d.next=C,I.lanes|=g,A1|=g;C=h.action,W1&&s(r,C),r=h.hasEagerState?h.eagerState:s(r,C)}else g={lane:C,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},d===null?(u=d=g,a=r):d=d.next=g,I.lanes|=C,A1|=C;h=h.next}while(h!==null&&h!==t);if(d===null?a=r:d.next=u,!g2(r,e.memoizedState)&&(V0=!0,A&&(s=be,s!==null)))throw s;e.memoizedState=r,e.baseState=a,e.baseQueue=d,i.lastRenderedState=r}return l===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ns(e){var t=X0(),s=t.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=e;var i=s.dispatch,l=s.pending,r=t.memoizedState;if(l!==null){s.pending=null;var a=l=l.next;do r=e(r,a.action),a=a.next;while(a!==l);g2(r,t.memoizedState)||(V0=!0),t.memoizedState=r,t.baseQueue===null&&(t.baseState=r),s.lastRenderedState=r}return[r,i]}function e5(e,t,s){var i=I,l=X0(),r=d0;if(r){if(s===void 0)throw Error(n(407));s=s()}else s=t();var a=!g2((M0||l).memoizedState,s);if(a&&(l.memoizedState=s,V0=!0),l=l.queue,os(i5.bind(null,i,l,e),[e]),l.getSnapshot!==t||a||Z0!==null&&Z0.memoizedState.tag&1){if(i.flags|=2048,xe(9,{destroy:void 0},s5.bind(null,i,l,s,t),null),D0===null)throw Error(n(349));r||(e1&127)!==0||t5(i,t,s)}return s}function t5(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=I.updateQueue,t===null?(t=y3(),I.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function s5(e,t,s,i){t.value=s,t.getSnapshot=i,l5(t)&&r5(e)}function i5(e,t,s){return s(function(){l5(t)&&r5(e)})}function l5(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!g2(e,s)}catch{return!0}}function r5(e){var t=Q1(e,2);t!==null&&_2(t,e,2)}function ds(e){var t=a2();if(typeof e=="function"){var s=e;if(e=s(),W1){m1(!0);try{s()}finally{m1(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t1,lastRenderedState:e},t}function a5(e,t,s,i){return e.baseState=s,us(e,M0,typeof i=="function"?i:t1)}function yn(e,t,s,i,l){if(b3(e))throw Error(n(485));if(e=t.action,e!==null){var r={payload:l,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){r.listeners.push(a)}};E.T!==null?s(!0):r.isTransition=!1,i(r),s=t.pending,s===null?(r.next=t.pending=r,u5(t,r)):(r.next=s.next,t.pending=s.next=r)}}function u5(e,t){var s=t.action,i=t.payload,l=e.state;if(t.isTransition){var r=E.T,a={};E.T=a;try{var u=s(l,i),d=E.S;d!==null&&d(a,u),n5(e,t,u)}catch(h){cs(e,t,h)}finally{r!==null&&a.types!==null&&(r.types=a.types),E.T=r}}else try{r=s(l,i),n5(e,t,r)}catch(h){cs(e,t,h)}}function n5(e,t,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(i){d5(e,t,i)},function(i){return cs(e,t,i)}):d5(e,t,s)}function d5(e,t,s){t.status="fulfilled",t.value=s,c5(t),e.state=s,t=e.pending,t!==null&&(s=t.next,s===t?e.pending=null:(s=s.next,t.next=s,u5(e,s)))}function cs(e,t,s){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=s,c5(t),t=t.next;while(t!==i)}e.action=null}function c5(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function o5(e,t){return t}function m5(e,t){if(d0){var s=D0.formState;if(s!==null){e:{var i=I;if(d0){if(U0){t:{for(var l=U0,r=U2;l.nodeType!==8;){if(!r){l=null;break t}if(l=j2(l.nextSibling),l===null){l=null;break t}}r=l.data,l=r==="F!"||r==="F"?l:null}if(l){U0=j2(l.nextSibling),i=l.data==="F!";break e}}y1(i)}i=!1}i&&(t=s[0])}}return s=a2(),s.memoizedState=s.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:o5,lastRenderedState:t},s.queue=i,s=C5.bind(null,I,i),i.dispatch=s,i=ds(!1),r=hs.bind(null,I,!1,i.queue),i=a2(),l={state:t,dispatch:null,action:e,pending:null},i.queue=l,s=yn.bind(null,I,l,r,s),l.dispatch=s,i.memoizedState=e,[t,s,!1]}function p5(e){var t=X0();return f5(t,M0,e)}function f5(e,t,s){if(t=us(e,t,o5)[0],e=g3(t1)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=pt(t)}catch(a){throw a===ze?d3:a}else i=t;t=X0();var l=t.queue,r=l.dispatch;return s!==t.memoizedState&&(I.flags|=2048,xe(9,{destroy:void 0},vn.bind(null,l,s),null)),[i,r,e]}function vn(e,t){e.action=t}function _5(e){var t=X0(),s=M0;if(s!==null)return f5(t,s,e);X0(),t=t.memoizedState,s=X0();var i=s.queue.dispatch;return s.memoizedState=e,[t,i,!1]}function xe(e,t,s,i){return e={tag:e,create:s,deps:i,inst:t,next:null},t=I.updateQueue,t===null&&(t=y3(),I.updateQueue=t),s=t.lastEffect,s===null?t.lastEffect=e.next=e:(i=s.next,s.next=e,e.next=i,t.lastEffect=e),e}function h5(){return X0().memoizedState}function S3(e,t,s,i){var l=a2();I.flags|=e,l.memoizedState=xe(1|t,{destroy:void 0},s,i===void 0?null:i)}function T3(e,t,s,i){var l=X0();i=i===void 0?null:i;var r=l.memoizedState.inst;M0!==null&&i!==null&&ts(i,M0.memoizedState.deps)?l.memoizedState=xe(t,r,s,i):(I.flags|=e,l.memoizedState=xe(1|t,r,s,i))}function y5(e,t){S3(8390656,8,e,t)}function os(e,t){T3(2048,8,e,t)}function gn(e){I.flags|=4;var t=I.updateQueue;if(t===null)t=y3(),I.updateQueue=t,t.events=[e];else{var s=t.events;s===null?t.events=[e]:s.push(e)}}function v5(e){var t=X0().memoizedState;return gn({ref:t,nextImpl:e}),function(){if((S0&2)!==0)throw Error(n(440));return t.impl.apply(void 0,arguments)}}function g5(e,t){return T3(4,2,e,t)}function S5(e,t){return T3(4,4,e,t)}function T5(e,t){if(typeof t=="function"){e=e();var s=t(e);return function(){typeof s=="function"?s():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function b5(e,t,s){s=s!=null?s.concat([e]):null,T3(4,4,T5.bind(null,t,e),s)}function ms(){}function z5(e,t){var s=X0();t=t===void 0?null:t;var i=s.memoizedState;return t!==null&&ts(t,i[1])?i[0]:(s.memoizedState=[e,t],e)}function E5(e,t){var s=X0();t=t===void 0?null:t;var i=s.memoizedState;if(t!==null&&ts(t,i[1]))return i[0];if(i=e(),W1){m1(!0);try{e()}finally{m1(!1)}}return s.memoizedState=[i,t],i}function ps(e,t,s){return s===void 0||(e1&1073741824)!==0&&(a0&261930)===0?e.memoizedState=t:(e.memoizedState=s,e=Mr(),I.lanes|=e,A1|=e,s)}function M5(e,t,s,i){return g2(s,t)?s:Me.current!==null?(e=ps(e,s,i),g2(e,t)||(V0=!0),e):(e1&42)===0||(e1&1073741824)!==0&&(a0&261930)===0?(V0=!0,e.memoizedState=s):(e=Mr(),I.lanes|=e,A1|=e,t)}function A5(e,t,s,i,l){var r=G.p;G.p=r!==0&&8>r?r:8;var a=E.T,u={};E.T=u,hs(e,!1,t,s);try{var d=l(),h=E.S;if(h!==null&&h(u,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var A=fn(d,i);ft(e,t,A,M2(e))}else ft(e,t,i,M2(e))}catch(C){ft(e,t,{then:function(){},status:"rejected",reason:C},M2())}finally{G.p=r,a!==null&&u.types!==null&&(a.types=u.types),E.T=a}}function Sn(){}function fs(e,t,s,i){if(e.tag!==5)throw Error(n(476));var l=O5(e).queue;A5(e,l,t,w,s===null?Sn:function(){return x5(e),s(i)})}function O5(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:t1,lastRenderedState:w},next:null};var s={};return t.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:t1,lastRenderedState:s},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function x5(e){var t=O5(e);t.next===null&&(t=e.alternate.memoizedState),ft(e,t.next.queue,{},M2())}function _s(){return P0(Ct)}function N5(){return X0().memoizedState}function D5(){return X0().memoizedState}function Tn(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var s=M2();e=S1(s);var i=T1(t,e,s);i!==null&&(_2(i,t,s),dt(i,t,s)),t={cache:V4()},e.payload=t;return}t=t.return}}function bn(e,t,s){var i=M2();s={lane:i,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},b3(e)?U5(t,s):(s=R4(e,t,s,i),s!==null&&(_2(s,e,i),R5(s,t,i)))}function C5(e,t,s){var i=M2();ft(e,t,s,i)}function ft(e,t,s,i){var l={lane:i,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(b3(e))U5(t,l);else{var r=e.alternate;if(e.lanes===0&&(r===null||r.lanes===0)&&(r=t.lastRenderedReducer,r!==null))try{var a=t.lastRenderedState,u=r(a,s);if(l.hasEagerState=!0,l.eagerState=u,g2(u,a))return s3(e,t,l,0),D0===null&&t3(),!1}catch{}finally{}if(s=R4(e,t,l,i),s!==null)return _2(s,e,i),R5(s,t,i),!0}return!1}function hs(e,t,s,i){if(i={lane:2,revertLane:$s(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},b3(e)){if(t)throw Error(n(479))}else t=R4(e,s,i,2),t!==null&&_2(t,e,2)}function b3(e){var t=e.alternate;return e===I||t!==null&&t===I}function U5(e,t){Ae=_3=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function R5(e,t,s){if((s&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,s|=i,t.lanes=s,Yi(e,s)}}var _t={readContext:P0,use:v3,useCallback:q0,useContext:q0,useEffect:q0,useImperativeHandle:q0,useLayoutEffect:q0,useInsertionEffect:q0,useMemo:q0,useReducer:q0,useRef:q0,useState:q0,useDebugValue:q0,useDeferredValue:q0,useTransition:q0,useSyncExternalStore:q0,useId:q0,useHostTransitionStatus:q0,useFormState:q0,useActionState:q0,useOptimistic:q0,useMemoCache:q0,useCacheRefresh:q0};_t.useEffectEvent=q0;var j5={readContext:P0,use:v3,useCallback:function(e,t){return a2().memoizedState=[e,t===void 0?null:t],e},useContext:P0,useEffect:y5,useImperativeHandle:function(e,t,s){s=s!=null?s.concat([e]):null,S3(4194308,4,T5.bind(null,t,e),s)},useLayoutEffect:function(e,t){return S3(4194308,4,e,t)},useInsertionEffect:function(e,t){S3(4,2,e,t)},useMemo:function(e,t){var s=a2();t=t===void 0?null:t;var i=e();if(W1){m1(!0);try{e()}finally{m1(!1)}}return s.memoizedState=[i,t],i},useReducer:function(e,t,s){var i=a2();if(s!==void 0){var l=s(t);if(W1){m1(!0);try{s(t)}finally{m1(!1)}}}else l=t;return i.memoizedState=i.baseState=l,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:l},i.queue=e,e=e.dispatch=bn.bind(null,I,e),[i.memoizedState,e]},useRef:function(e){var t=a2();return e={current:e},t.memoizedState=e},useState:function(e){e=ds(e);var t=e.queue,s=C5.bind(null,I,t);return t.dispatch=s,[e.memoizedState,s]},useDebugValue:ms,useDeferredValue:function(e,t){var s=a2();return ps(s,e,t)},useTransition:function(){var e=ds(!1);return e=A5.bind(null,I,e.queue,!0,!1),a2().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,s){var i=I,l=a2();if(d0){if(s===void 0)throw Error(n(407));s=s()}else{if(s=t(),D0===null)throw Error(n(349));(a0&127)!==0||t5(i,t,s)}l.memoizedState=s;var r={value:s,getSnapshot:t};return l.queue=r,y5(i5.bind(null,i,r,e),[e]),i.flags|=2048,xe(9,{destroy:void 0},s5.bind(null,i,r,s,t),null),s},useId:function(){var e=a2(),t=D0.identifierPrefix;if(d0){var s=Z2,i=Q2;s=(i&~(1<<32-v2(i)-1)).toString(32)+s,t="_"+t+"R_"+s,s=h3++,0<s&&(t+="H"+s.toString(32)),t+="_"}else s=_n++,t="_"+t+"r_"+s.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:_s,useFormState:m5,useActionState:m5,useOptimistic:function(e){var t=a2();t.memoizedState=t.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=s,t=hs.bind(null,I,!0,s),s.dispatch=t,[e,t]},useMemoCache:as,useCacheRefresh:function(){return a2().memoizedState=Tn.bind(null,I)},useEffectEvent:function(e){var t=a2(),s={impl:e};return t.memoizedState=s,function(){if((S0&2)!==0)throw Error(n(440));return s.impl.apply(void 0,arguments)}}},ys={readContext:P0,use:v3,useCallback:z5,useContext:P0,useEffect:os,useImperativeHandle:b5,useInsertionEffect:g5,useLayoutEffect:S5,useMemo:E5,useReducer:g3,useRef:h5,useState:function(){return g3(t1)},useDebugValue:ms,useDeferredValue:function(e,t){var s=X0();return M5(s,M0.memoizedState,e,t)},useTransition:function(){var e=g3(t1)[0],t=X0().memoizedState;return[typeof e=="boolean"?e:pt(e),t]},useSyncExternalStore:e5,useId:N5,useHostTransitionStatus:_s,useFormState:p5,useActionState:p5,useOptimistic:function(e,t){var s=X0();return a5(s,M0,e,t)},useMemoCache:as,useCacheRefresh:D5};ys.useEffectEvent=v5;var H5={readContext:P0,use:v3,useCallback:z5,useContext:P0,useEffect:os,useImperativeHandle:b5,useInsertionEffect:g5,useLayoutEffect:S5,useMemo:E5,useReducer:ns,useRef:h5,useState:function(){return ns(t1)},useDebugValue:ms,useDeferredValue:function(e,t){var s=X0();return M0===null?ps(s,e,t):M5(s,M0.memoizedState,e,t)},useTransition:function(){var e=ns(t1)[0],t=X0().memoizedState;return[typeof e=="boolean"?e:pt(e),t]},useSyncExternalStore:e5,useId:N5,useHostTransitionStatus:_s,useFormState:_5,useActionState:_5,useOptimistic:function(e,t){var s=X0();return M0!==null?a5(s,M0,e,t):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:as,useCacheRefresh:D5};H5.useEffectEvent=v5;function vs(e,t,s,i){t=e.memoizedState,s=s(i,t),s=s==null?t:q({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var gs={enqueueSetState:function(e,t,s){e=e._reactInternals;var i=M2(),l=S1(i);l.payload=t,s!=null&&(l.callback=s),t=T1(e,l,i),t!==null&&(_2(t,e,i),dt(t,e,i))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var i=M2(),l=S1(i);l.tag=1,l.payload=t,s!=null&&(l.callback=s),t=T1(e,l,i),t!==null&&(_2(t,e,i),dt(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=M2(),i=S1(s);i.tag=2,t!=null&&(i.callback=t),t=T1(e,i,s),t!==null&&(_2(t,e,s),dt(t,e,s))}};function q5(e,t,s,i,l,r,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,r,a):t.prototype&&t.prototype.isPureReactComponent?!tt(s,i)||!tt(l,r):!0}function B5(e,t,s,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,i),t.state!==e&&gs.enqueueReplaceState(t,t.state,null)}function I1(e,t){var s=t;if("ref"in t){s={};for(var i in t)i!=="ref"&&(s[i]=t[i])}if(e=e.defaultProps){s===t&&(s=q({},s));for(var l in e)s[l]===void 0&&(s[l]=e[l])}return s}function Y5(e){e3(e)}function G5(e){console.error(e)}function L5(e){e3(e)}function z3(e,t){try{var s=e.onUncaughtError;s(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function X5(e,t,s){try{var i=e.onCaughtError;i(s.value,{componentStack:s.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(l){setTimeout(function(){throw l})}}function Ss(e,t,s){return s=S1(s),s.tag=3,s.payload={element:null},s.callback=function(){z3(e,t)},s}function Q5(e){return e=S1(e),e.tag=3,e}function Z5(e,t,s,i){var l=s.type.getDerivedStateFromError;if(typeof l=="function"){var r=i.value;e.payload=function(){return l(r)},e.callback=function(){X5(t,s,i)}}var a=s.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){X5(t,s,i),typeof l!="function"&&(O1===null?O1=new Set([this]):O1.add(this));var u=i.stack;this.componentDidCatch(i.value,{componentStack:u!==null?u:""})})}function zn(e,t,s,i,l){if(s.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=s.alternate,t!==null&&Se(t,s,l,!0),s=T2.current,s!==null){switch(s.tag){case 31:case 13:return R2===null?H3():s.alternate===null&&B0===0&&(B0=3),s.flags&=-257,s.flags|=65536,s.lanes=l,i===c3?s.flags|=16384:(t=s.updateQueue,t===null?s.updateQueue=new Set([i]):t.add(i),Ks(e,i,l)),!1;case 22:return s.flags|=65536,i===c3?s.flags|=16384:(t=s.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},s.updateQueue=t):(s=t.retryQueue,s===null?t.retryQueue=new Set([i]):s.add(i)),Ks(e,i,l)),!1}throw Error(n(435,s.tag))}return Ks(e,i,l),H3(),!1}if(d0)return t=T2.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=l,i!==G4&&(e=Error(n(422),{cause:i}),lt(N2(e,s)))):(i!==G4&&(t=Error(n(423),{cause:i}),lt(N2(t,s))),e=e.current.alternate,e.flags|=65536,l&=-l,e.lanes|=l,i=N2(i,s),l=Ss(e.stateNode,i,l),F4(e,l),B0!==4&&(B0=2)),!1;var r=Error(n(520),{cause:i});if(r=N2(r,s),zt===null?zt=[r]:zt.push(r),B0!==4&&(B0=2),t===null)return!0;i=N2(i,s),s=t;do{switch(s.tag){case 3:return s.flags|=65536,e=l&-l,s.lanes|=e,e=Ss(s.stateNode,i,e),F4(s,e),!1;case 1:if(t=s.type,r=s.stateNode,(s.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||r!==null&&typeof r.componentDidCatch=="function"&&(O1===null||!O1.has(r))))return s.flags|=65536,l&=-l,s.lanes|=l,l=Q5(l),Z5(l,e,s,i),F4(s,l),!1}s=s.return}while(s!==null);return!1}var Ts=Error(n(461)),V0=!1;function e2(e,t,s,i){t.child=e===null?wl(t,null,s,i):F1(t,e.child,s,i)}function V5(e,t,s,i,l){s=s.render;var r=t.ref;if("ref"in i){var a={};for(var u in i)u!=="ref"&&(a[u]=i[u])}else a=i;return J1(t),i=ss(e,t,s,a,r,l),u=is(),e!==null&&!V0?(ls(e,t,l),s1(e,t,l)):(d0&&u&&B4(t),t.flags|=1,e2(e,t,i,l),t.child)}function K5(e,t,s,i,l){if(e===null){var r=s.type;return typeof r=="function"&&!j4(r)&&r.defaultProps===void 0&&s.compare===null?(t.tag=15,t.type=r,J5(e,t,r,i,l)):(e=l3(s.type,null,i,t,t.mode,l),e.ref=t.ref,e.return=t,t.child=e)}if(r=e.child,!Ns(e,l)){var a=r.memoizedProps;if(s=s.compare,s=s!==null?s:tt,s(a,i)&&e.ref===t.ref)return s1(e,t,l)}return t.flags|=1,e=F2(r,i),e.ref=t.ref,e.return=t,t.child=e}function J5(e,t,s,i,l){if(e!==null){var r=e.memoizedProps;if(tt(r,i)&&e.ref===t.ref)if(V0=!1,t.pendingProps=i=r,Ns(e,l))(e.flags&131072)!==0&&(V0=!0);else return t.lanes=e.lanes,s1(e,t,l)}return bs(e,t,s,i,l)}function w5(e,t,s,i){var l=i.children,r=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(r=r!==null?r.baseLanes|s:s,e!==null){for(i=t.child=e.child,l=0;i!==null;)l=l|i.lanes|i.childLanes,i=i.sibling;i=l&~r}else i=0,t.child=null;return $5(e,t,r,s,i)}if((s&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&n3(t,r!==null?r.cachePool:null),r!==null?Fl(t,r):I4(),Wl(t);else return i=t.lanes=536870912,$5(e,t,r!==null?r.baseLanes|s:s,s,i)}else r!==null?(n3(t,r.cachePool),Fl(t,r),z1(),t.memoizedState=null):(e!==null&&n3(t,null),I4(),z1());return e2(e,t,l,s),t.child}function ht(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function $5(e,t,s,i,l){var r=J4();return r=r===null?null:{parent:Q0._currentValue,pool:r},t.memoizedState={baseLanes:s,cachePool:r},e!==null&&n3(t,null),I4(),Wl(t),e!==null&&Se(e,t,i,!0),t.childLanes=l,null}function E3(e,t){return t=A3({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function k5(e,t,s){return F1(t,e.child,null,s),e=E3(t,t.pendingProps),e.flags|=2,b2(t),t.memoizedState=null,e}function En(e,t,s){var i=t.pendingProps,l=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(d0){if(i.mode==="hidden")return e=E3(t,i),t.lanes=536870912,ht(null,e);if(es(t),(e=U0)?(e=ua(e,U2),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_1!==null?{id:Q2,overflow:Z2}:null,retryLane:536870912,hydrationErrors:null},s=Ul(e),s.return=t,t.child=s,I0=t,U0=null)):e=null,e===null)throw y1(t);return t.lanes=536870912,null}return E3(t,i)}var r=e.memoizedState;if(r!==null){var a=r.dehydrated;if(es(t),l)if(t.flags&256)t.flags&=-257,t=k5(e,t,s);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(n(558));else if(V0||Se(e,t,s,!1),l=(s&e.childLanes)!==0,V0||l){if(i=D0,i!==null&&(a=Gi(i,s),a!==0&&a!==r.retryLane))throw r.retryLane=a,Q1(e,a),_2(i,e,a),Ts;H3(),t=k5(e,t,s)}else e=r.treeContext,U0=j2(a.nextSibling),I0=t,d0=!0,h1=null,U2=!1,e!==null&&Hl(t,e),t=E3(t,i),t.flags|=4096;return t}return e=F2(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function M3(e,t){var s=t.ref;if(s===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(n(284));(e===null||e.ref!==s)&&(t.flags|=4194816)}}function bs(e,t,s,i,l){return J1(t),s=ss(e,t,s,i,void 0,l),i=is(),e!==null&&!V0?(ls(e,t,l),s1(e,t,l)):(d0&&i&&B4(t),t.flags|=1,e2(e,t,s,l),t.child)}function F5(e,t,s,i,l,r){return J1(t),t.updateQueue=null,s=Pl(t,i,s,l),Il(e),i=is(),e!==null&&!V0?(ls(e,t,r),s1(e,t,r)):(d0&&i&&B4(t),t.flags|=1,e2(e,t,s,r),t.child)}function W5(e,t,s,i,l){if(J1(t),t.stateNode===null){var r=he,a=s.contextType;typeof a=="object"&&a!==null&&(r=P0(a)),r=new s(i,r),t.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=gs,t.stateNode=r,r._reactInternals=t,r=t.stateNode,r.props=i,r.state=t.memoizedState,r.refs={},$4(t),a=s.contextType,r.context=typeof a=="object"&&a!==null?P0(a):he,r.state=t.memoizedState,a=s.getDerivedStateFromProps,typeof a=="function"&&(vs(t,s,a,i),r.state=t.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(a=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),a!==r.state&&gs.enqueueReplaceState(r,r.state,null),ot(t,i,r,l),ct(),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){r=t.stateNode;var u=t.memoizedProps,d=I1(s,u);r.props=d;var h=r.context,A=s.contextType;a=he,typeof A=="object"&&A!==null&&(a=P0(A));var C=s.getDerivedStateFromProps;A=typeof C=="function"||typeof r.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,A||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(u||h!==a)&&B5(t,r,i,a),g1=!1;var g=t.memoizedState;r.state=g,ot(t,i,r,l),ct(),h=t.memoizedState,u||g!==h||g1?(typeof C=="function"&&(vs(t,s,C,i),h=t.memoizedState),(d=g1||q5(t,s,d,i,g,h,a))?(A||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount()),typeof r.componentDidMount=="function"&&(t.flags|=4194308)):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=h),r.props=i,r.state=h,r.context=a,i=d):(typeof r.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{r=t.stateNode,k4(e,t),a=t.memoizedProps,A=I1(s,a),r.props=A,C=t.pendingProps,g=r.context,h=s.contextType,d=he,typeof h=="object"&&h!==null&&(d=P0(h)),u=s.getDerivedStateFromProps,(h=typeof u=="function"||typeof r.getSnapshotBeforeUpdate=="function")||typeof r.UNSAFE_componentWillReceiveProps!="function"&&typeof r.componentWillReceiveProps!="function"||(a!==C||g!==d)&&B5(t,r,i,d),g1=!1,g=t.memoizedState,r.state=g,ot(t,i,r,l),ct();var T=t.memoizedState;a!==C||g!==T||g1||e!==null&&e.dependencies!==null&&a3(e.dependencies)?(typeof u=="function"&&(vs(t,s,u,i),T=t.memoizedState),(A=g1||q5(t,s,A,i,g,T,d)||e!==null&&e.dependencies!==null&&a3(e.dependencies))?(h||typeof r.UNSAFE_componentWillUpdate!="function"&&typeof r.componentWillUpdate!="function"||(typeof r.componentWillUpdate=="function"&&r.componentWillUpdate(i,T,d),typeof r.UNSAFE_componentWillUpdate=="function"&&r.UNSAFE_componentWillUpdate(i,T,d)),typeof r.componentDidUpdate=="function"&&(t.flags|=4),typeof r.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=T),r.props=i,r.state=T,r.context=d,i=A):(typeof r.componentDidUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof r.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),i=!1)}return r=i,M3(e,t),i=(t.flags&128)!==0,r||i?(r=t.stateNode,s=i&&typeof s.getDerivedStateFromError!="function"?null:r.render(),t.flags|=1,e!==null&&i?(t.child=F1(t,e.child,null,l),t.child=F1(t,null,s,l)):e2(e,t,s,l),t.memoizedState=r.state,e=t.child):e=s1(e,t,l),e}function I5(e,t,s,i){return V1(),t.flags|=256,e2(e,t,s,i),t.child}var zs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Es(e){return{baseLanes:e,cachePool:Xl()}}function Ms(e,t,s){return e=e!==null?e.childLanes&~s:0,t&&(e|=E2),e}function P5(e,t,s){var i=t.pendingProps,l=!1,r=(t.flags&128)!==0,a;if((a=r)||(a=e!==null&&e.memoizedState===null?!1:(L0.current&2)!==0),a&&(l=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,e===null){if(d0){if(l?b1(t):z1(),(e=U0)?(e=ua(e,U2),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:_1!==null?{id:Q2,overflow:Z2}:null,retryLane:536870912,hydrationErrors:null},s=Ul(e),s.return=t,t.child=s,I0=t,U0=null)):e=null,e===null)throw y1(t);return ui(e)?t.lanes=32:t.lanes=536870912,null}var u=i.children;return i=i.fallback,l?(z1(),l=t.mode,u=A3({mode:"hidden",children:u},l),i=Z1(i,l,s,null),u.return=t,i.return=t,u.sibling=i,t.child=u,i=t.child,i.memoizedState=Es(s),i.childLanes=Ms(e,a,s),t.memoizedState=zs,ht(null,i)):(b1(t),As(t,u))}var d=e.memoizedState;if(d!==null&&(u=d.dehydrated,u!==null)){if(r)t.flags&256?(b1(t),t.flags&=-257,t=Os(e,t,s)):t.memoizedState!==null?(z1(),t.child=e.child,t.flags|=128,t=null):(z1(),u=i.fallback,l=t.mode,i=A3({mode:"visible",children:i.children},l),u=Z1(u,l,s,null),u.flags|=2,i.return=t,u.return=t,i.sibling=u,t.child=i,F1(t,e.child,null,s),i=t.child,i.memoizedState=Es(s),i.childLanes=Ms(e,a,s),t.memoizedState=zs,t=ht(null,i));else if(b1(t),ui(u)){if(a=u.nextSibling&&u.nextSibling.dataset,a)var h=a.dgst;a=h,i=Error(n(419)),i.stack="",i.digest=a,lt({value:i,source:null,stack:null}),t=Os(e,t,s)}else if(V0||Se(e,t,s,!1),a=(s&e.childLanes)!==0,V0||a){if(a=D0,a!==null&&(i=Gi(a,s),i!==0&&i!==d.retryLane))throw d.retryLane=i,Q1(e,i),_2(a,e,i),Ts;ai(u)||H3(),t=Os(e,t,s)}else ai(u)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,U0=j2(u.nextSibling),I0=t,d0=!0,h1=null,U2=!1,e!==null&&Hl(t,e),t=As(t,i.children),t.flags|=4096);return t}return l?(z1(),u=i.fallback,l=t.mode,d=e.child,h=d.sibling,i=F2(d,{mode:"hidden",children:i.children}),i.subtreeFlags=d.subtreeFlags&65011712,h!==null?u=F2(h,u):(u=Z1(u,l,s,null),u.flags|=2),u.return=t,i.return=t,i.sibling=u,t.child=i,ht(null,i),i=t.child,u=e.child.memoizedState,u===null?u=Es(s):(l=u.cachePool,l!==null?(d=Q0._currentValue,l=l.parent!==d?{parent:d,pool:d}:l):l=Xl(),u={baseLanes:u.baseLanes|s,cachePool:l}),i.memoizedState=u,i.childLanes=Ms(e,a,s),t.memoizedState=zs,ht(e.child,i)):(b1(t),s=e.child,e=s.sibling,s=F2(s,{mode:"visible",children:i.children}),s.return=t,s.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=s,t.memoizedState=null,s)}function As(e,t){return t=A3({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function A3(e,t){return e=S2(22,e,null,t),e.lanes=0,e}function Os(e,t,s){return F1(t,e.child,null,s),e=As(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function er(e,t,s){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Q4(e.return,t,s)}function xs(e,t,s,i,l,r){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:s,tailMode:l,treeForkCount:r}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=s,a.tailMode=l,a.treeForkCount=r)}function tr(e,t,s){var i=t.pendingProps,l=i.revealOrder,r=i.tail;i=i.children;var a=L0.current,u=(a&2)!==0;if(u?(a=a&1|2,t.flags|=128):a&=1,v(L0,a),e2(e,t,i,s),i=d0?it:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&er(e,s,t);else if(e.tag===19)er(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(l){case"forwards":for(s=t.child,l=null;s!==null;)e=s.alternate,e!==null&&f3(e)===null&&(l=s),s=s.sibling;s=l,s===null?(l=t.child,t.child=null):(l=s.sibling,s.sibling=null),xs(t,!1,l,s,r,i);break;case"backwards":case"unstable_legacy-backwards":for(s=null,l=t.child,t.child=null;l!==null;){if(e=l.alternate,e!==null&&f3(e)===null){t.child=l;break}e=l.sibling,l.sibling=s,s=l,l=e}xs(t,!0,s,null,r,i);break;case"together":xs(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function s1(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),A1|=t.lanes,(s&t.childLanes)===0)if(e!==null){if(Se(e,t,s,!1),(s&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(n(153));if(t.child!==null){for(e=t.child,s=F2(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=F2(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function Ns(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&a3(e)))}function Mn(e,t,s){switch(t.tag){case 3:L(t,t.stateNode.containerInfo),v1(t,Q0,e.memoizedState.cache),V1();break;case 27:case 5:k(t);break;case 4:L(t,t.stateNode.containerInfo);break;case 10:v1(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,es(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(b1(t),t.flags|=128,null):(s&t.child.childLanes)!==0?P5(e,t,s):(b1(t),e=s1(e,t,s),e!==null?e.sibling:null);b1(t);break;case 19:var l=(e.flags&128)!==0;if(i=(s&t.childLanes)!==0,i||(Se(e,t,s,!1),i=(s&t.childLanes)!==0),l){if(i)return tr(e,t,s);t.flags|=128}if(l=t.memoizedState,l!==null&&(l.rendering=null,l.tail=null,l.lastEffect=null),v(L0,L0.current),i)break;return null;case 22:return t.lanes=0,w5(e,t,s,t.pendingProps);case 24:v1(t,Q0,e.memoizedState.cache)}return s1(e,t,s)}function sr(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps)V0=!0;else{if(!Ns(e,s)&&(t.flags&128)===0)return V0=!1,Mn(e,t,s);V0=(e.flags&131072)!==0}else V0=!1,d0&&(t.flags&1048576)!==0&&jl(t,it,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=$1(t.elementType),t.type=e,typeof e=="function")j4(e)?(i=I1(e,i),t.tag=1,t=W5(null,t,e,i,s)):(t.tag=0,t=bs(null,t,e,i,s));else{if(e!=null){var l=e.$$typeof;if(l===t0){t.tag=11,t=V5(null,t,e,i,s);break e}else if(l===W){t.tag=14,t=K5(null,t,e,i,s);break e}}throw t=F0(e)||e,Error(n(306,t,""))}}return t;case 0:return bs(e,t,t.type,t.pendingProps,s);case 1:return i=t.type,l=I1(i,t.pendingProps),W5(e,t,i,l,s);case 3:e:{if(L(t,t.stateNode.containerInfo),e===null)throw Error(n(387));i=t.pendingProps;var r=t.memoizedState;l=r.element,k4(e,t),ot(t,i,null,s);var a=t.memoizedState;if(i=a.cache,v1(t,Q0,i),i!==r.cache&&Z4(t,[Q0],s,!0),ct(),i=a.element,r.isDehydrated)if(r={element:i,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=r,t.memoizedState=r,t.flags&256){t=I5(e,t,i,s);break e}else if(i!==l){l=N2(Error(n(424)),t),lt(l),t=I5(e,t,i,s);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(U0=j2(e.firstChild),I0=t,d0=!0,h1=null,U2=!0,s=wl(t,null,i,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(V1(),i===l){t=s1(e,t,s);break e}e2(e,t,i,s)}t=t.child}return t;case 26:return M3(e,t),e===null?(s=pa(t.type,null,t.pendingProps,null))?t.memoizedState=s:d0||(s=t.type,e=t.pendingProps,i=Q3(j.current).createElement(s),i[W0]=t,i[d2]=e,t2(i,s,e),$0(i),t.stateNode=i):t.memoizedState=pa(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return k(t),e===null&&d0&&(i=t.stateNode=ca(t.type,t.pendingProps,j.current),I0=t,U2=!0,l=U0,C1(t.type)?(ni=l,U0=j2(i.firstChild)):U0=l),e2(e,t,t.pendingProps.children,s),M3(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&d0&&((l=i=U0)&&(i=t6(i,t.type,t.pendingProps,U2),i!==null?(t.stateNode=i,I0=t,U0=j2(i.firstChild),U2=!1,l=!0):l=!1),l||y1(t)),k(t),l=t.type,r=t.pendingProps,a=e!==null?e.memoizedProps:null,i=r.children,ii(l,r)?i=null:a!==null&&ii(l,a)&&(t.flags|=32),t.memoizedState!==null&&(l=ss(e,t,hn,null,null,s),Ct._currentValue=l),M3(e,t),e2(e,t,i,s),t.child;case 6:return e===null&&d0&&((e=s=U0)&&(s=s6(s,t.pendingProps,U2),s!==null?(t.stateNode=s,I0=t,U0=null,e=!0):e=!1),e||y1(t)),null;case 13:return P5(e,t,s);case 4:return L(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=F1(t,null,i,s):e2(e,t,i,s),t.child;case 11:return V5(e,t,t.type,t.pendingProps,s);case 7:return e2(e,t,t.pendingProps,s),t.child;case 8:return e2(e,t,t.pendingProps.children,s),t.child;case 12:return e2(e,t,t.pendingProps.children,s),t.child;case 10:return i=t.pendingProps,v1(t,t.type,i.value),e2(e,t,i.children,s),t.child;case 9:return l=t.type._context,i=t.pendingProps.children,J1(t),l=P0(l),i=i(l),t.flags|=1,e2(e,t,i,s),t.child;case 14:return K5(e,t,t.type,t.pendingProps,s);case 15:return J5(e,t,t.type,t.pendingProps,s);case 19:return tr(e,t,s);case 31:return En(e,t,s);case 22:return w5(e,t,s,t.pendingProps);case 24:return J1(t),i=P0(Q0),e===null?(l=J4(),l===null&&(l=D0,r=V4(),l.pooledCache=r,r.refCount++,r!==null&&(l.pooledCacheLanes|=s),l=r),t.memoizedState={parent:i,cache:l},$4(t),v1(t,Q0,l)):((e.lanes&s)!==0&&(k4(e,t),ot(t,null,null,s),ct()),l=e.memoizedState,r=t.memoizedState,l.parent!==i?(l={parent:i,cache:i},t.memoizedState=l,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=l),v1(t,Q0,i)):(i=r.cache,v1(t,Q0,i),i!==l.cache&&Z4(t,[Q0],s,!0))),e2(e,t,t.pendingProps.children,s),t.child;case 29:throw t.pendingProps}throw Error(n(156,t.tag))}function i1(e){e.flags|=4}function Ds(e,t,s,i,l){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(l&335544128)===l)if(e.stateNode.complete)e.flags|=8192;else if(Nr())e.flags|=8192;else throw k1=c3,w4}else e.flags&=-16777217}function ir(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!va(t))if(Nr())e.flags|=8192;else throw k1=c3,w4}function O3(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?qi():536870912,e.lanes|=t,Ue|=t)}function yt(e,t){if(!d0)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var i=null;s!==null;)s.alternate!==null&&(i=s),s=s.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function R0(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,i=0;if(t)for(var l=e.child;l!==null;)s|=l.lanes|l.childLanes,i|=l.subtreeFlags&65011712,i|=l.flags&65011712,l.return=e,l=l.sibling;else for(l=e.child;l!==null;)s|=l.lanes|l.childLanes,i|=l.subtreeFlags,i|=l.flags,l.return=e,l=l.sibling;return e.subtreeFlags|=i,e.childLanes=s,t}function An(e,t,s){var i=t.pendingProps;switch(Y4(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return R0(t),null;case 1:return R0(t),null;case 3:return s=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),P2(Q0),Z(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ge(t)?i1(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,L4())),R0(t),null;case 26:var l=t.type,r=t.memoizedState;return e===null?(i1(t),r!==null?(R0(t),ir(t,r)):(R0(t),Ds(t,l,null,i,s))):r?r!==e.memoizedState?(i1(t),R0(t),ir(t,r)):(R0(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&i1(t),R0(t),Ds(t,l,e,i,s)),null;case 27:if(m0(t),s=j.current,l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&i1(t);else{if(!i){if(t.stateNode===null)throw Error(n(166));return R0(t),null}e=x.current,ge(t)?ql(t):(e=ca(l,i,s),t.stateNode=e,i1(t))}return R0(t),null;case 5:if(m0(t),l=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&i1(t);else{if(!i){if(t.stateNode===null)throw Error(n(166));return R0(t),null}if(r=x.current,ge(t))ql(t);else{var a=Q3(j.current);switch(r){case 1:r=a.createElementNS("http://www.w3.org/2000/svg",l);break;case 2:r=a.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;default:switch(l){case"svg":r=a.createElementNS("http://www.w3.org/2000/svg",l);break;case"math":r=a.createElementNS("http://www.w3.org/1998/Math/MathML",l);break;case"script":r=a.createElement("div"),r.innerHTML="<script><\/script>",r=r.removeChild(r.firstChild);break;case"select":r=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?r.multiple=!0:i.size&&(r.size=i.size);break;default:r=typeof i.is=="string"?a.createElement(l,{is:i.is}):a.createElement(l)}}r[W0]=t,r[d2]=i;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)r.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=r;e:switch(t2(r,l,i),l){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&i1(t)}}return R0(t),Ds(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,s),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&i1(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(n(166));if(e=j.current,ge(t)){if(e=t.stateNode,s=t.memoizedProps,i=null,l=I0,l!==null)switch(l.tag){case 27:case 5:i=l.memoizedProps}e[W0]=t,e=!!(e.nodeValue===s||i!==null&&i.suppressHydrationWarning===!0||Pr(e.nodeValue,s)),e||y1(t,!0)}else e=Q3(e).createTextNode(i),e[W0]=t,t.stateNode=e}return R0(t),null;case 31:if(s=t.memoizedState,e===null||e.memoizedState!==null){if(i=ge(t),s!==null){if(e===null){if(!i)throw Error(n(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(557));e[W0]=t}else V1(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;R0(t),e=!1}else s=L4(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return t.flags&256?(b2(t),t):(b2(t),null);if((t.flags&128)!==0)throw Error(n(558))}return R0(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(l=ge(t),i!==null&&i.dehydrated!==null){if(e===null){if(!l)throw Error(n(318));if(l=t.memoizedState,l=l!==null?l.dehydrated:null,!l)throw Error(n(317));l[W0]=t}else V1(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;R0(t),l=!1}else l=L4(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=l),l=!0;if(!l)return t.flags&256?(b2(t),t):(b2(t),null)}return b2(t),(t.flags&128)!==0?(t.lanes=s,t):(s=i!==null,e=e!==null&&e.memoizedState!==null,s&&(i=t.child,l=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(l=i.alternate.memoizedState.cachePool.pool),r=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(r=i.memoizedState.cachePool.pool),r!==l&&(i.flags|=2048)),s!==e&&s&&(t.child.flags|=8192),O3(t,t.updateQueue),R0(t),null);case 4:return Z(),e===null&&Is(t.stateNode.containerInfo),R0(t),null;case 10:return P2(t.type),R0(t),null;case 19:if(D(L0),i=t.memoizedState,i===null)return R0(t),null;if(l=(t.flags&128)!==0,r=i.rendering,r===null)if(l)yt(i,!1);else{if(B0!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(r=f3(e),r!==null){for(t.flags|=128,yt(i,!1),e=r.updateQueue,t.updateQueue=e,O3(t,e),t.subtreeFlags=0,e=s,s=t.child;s!==null;)Cl(s,e),s=s.sibling;return v(L0,L0.current&1|2),d0&&W2(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&h2()>U3&&(t.flags|=128,l=!0,yt(i,!1),t.lanes=4194304)}else{if(!l)if(e=f3(r),e!==null){if(t.flags|=128,l=!0,e=e.updateQueue,t.updateQueue=e,O3(t,e),yt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!r.alternate&&!d0)return R0(t),null}else 2*h2()-i.renderingStartTime>U3&&s!==536870912&&(t.flags|=128,l=!0,yt(i,!1),t.lanes=4194304);i.isBackwards?(r.sibling=t.child,t.child=r):(e=i.last,e!==null?e.sibling=r:t.child=r,i.last=r)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=h2(),e.sibling=null,s=L0.current,v(L0,l?s&1|2:s&1),d0&&W2(t,i.treeForkCount),e):(R0(t),null);case 22:case 23:return b2(t),P4(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(s&536870912)!==0&&(t.flags&128)===0&&(R0(t),t.subtreeFlags&6&&(t.flags|=8192)):R0(t),s=t.updateQueue,s!==null&&O3(t,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==s&&(t.flags|=2048),e!==null&&D(w1),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),P2(Q0),R0(t),null;case 25:return null;case 30:return null}throw Error(n(156,t.tag))}function On(e,t){switch(Y4(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return P2(Q0),Z(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return m0(t),null;case 31:if(t.memoizedState!==null){if(b2(t),t.alternate===null)throw Error(n(340));V1()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(b2(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(n(340));V1()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(L0),null;case 4:return Z(),null;case 10:return P2(t.type),null;case 22:case 23:return b2(t),P4(),e!==null&&D(w1),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return P2(Q0),null;case 25:return null;default:return null}}function lr(e,t){switch(Y4(t),t.tag){case 3:P2(Q0),Z();break;case 26:case 27:case 5:m0(t);break;case 4:Z();break;case 31:t.memoizedState!==null&&b2(t);break;case 13:b2(t);break;case 19:D(L0);break;case 10:P2(t.type);break;case 22:case 23:b2(t),P4(),e!==null&&D(w1);break;case 24:P2(Q0)}}function vt(e,t){try{var s=t.updateQueue,i=s!==null?s.lastEffect:null;if(i!==null){var l=i.next;s=l;do{if((s.tag&e)===e){i=void 0;var r=s.create,a=s.inst;i=r(),a.destroy=i}s=s.next}while(s!==l)}}catch(u){E0(t,t.return,u)}}function E1(e,t,s){try{var i=t.updateQueue,l=i!==null?i.lastEffect:null;if(l!==null){var r=l.next;i=r;do{if((i.tag&e)===e){var a=i.inst,u=a.destroy;if(u!==void 0){a.destroy=void 0,l=t;var d=s,h=u;try{h()}catch(A){E0(l,d,A)}}}i=i.next}while(i!==r)}}catch(A){E0(t,t.return,A)}}function rr(e){var t=e.updateQueue;if(t!==null){var s=e.stateNode;try{kl(t,s)}catch(i){E0(e,e.return,i)}}}function ar(e,t,s){s.props=I1(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(i){E0(e,t,i)}}function gt(e,t){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof s=="function"?e.refCleanup=s(i):s.current=i}}catch(l){E0(e,t,l)}}function V2(e,t){var s=e.ref,i=e.refCleanup;if(s!==null)if(typeof i=="function")try{i()}catch(l){E0(e,t,l)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(l){E0(e,t,l)}else s.current=null}function ur(e){var t=e.type,s=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":s.autoFocus&&i.focus();break e;case"img":s.src?i.src=s.src:s.srcSet&&(i.srcset=s.srcSet)}}catch(l){E0(e,e.return,l)}}function Cs(e,t,s){try{var i=e.stateNode;kn(i,e.type,s,t),i[d2]=t}catch(l){E0(e,e.return,l)}}function nr(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&C1(e.type)||e.tag===4}function Us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||nr(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&C1(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rs(e,t,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,t):(t=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,t.appendChild(e),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=$2));else if(i!==4&&(i===27&&C1(e.type)&&(s=e.stateNode,t=null),e=e.child,e!==null))for(Rs(e,t,s),e=e.sibling;e!==null;)Rs(e,t,s),e=e.sibling}function x3(e,t,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(i!==4&&(i===27&&C1(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(x3(e,t,s),e=e.sibling;e!==null;)x3(e,t,s),e=e.sibling}function dr(e){var t=e.stateNode,s=e.memoizedProps;try{for(var i=e.type,l=t.attributes;l.length;)t.removeAttributeNode(l[0]);t2(t,i,s),t[W0]=e,t[d2]=s}catch(r){E0(e,e.return,r)}}var l1=!1,K0=!1,js=!1,cr=typeof WeakSet=="function"?WeakSet:Set,k0=null;function xn(e,t){if(e=e.containerInfo,ti=k3,e=bl(e),O4(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var i=s.getSelection&&s.getSelection();if(i&&i.rangeCount!==0){s=i.anchorNode;var l=i.anchorOffset,r=i.focusNode;i=i.focusOffset;try{s.nodeType,r.nodeType}catch{s=null;break e}var a=0,u=-1,d=-1,h=0,A=0,C=e,g=null;t:for(;;){for(var T;C!==s||l!==0&&C.nodeType!==3||(u=a+l),C!==r||i!==0&&C.nodeType!==3||(d=a+i),C.nodeType===3&&(a+=C.nodeValue.length),(T=C.firstChild)!==null;)g=C,C=T;for(;;){if(C===e)break t;if(g===s&&++h===l&&(u=a),g===r&&++A===i&&(d=a),(T=C.nextSibling)!==null)break;C=g,g=C.parentNode}C=T}s=u===-1||d===-1?null:{start:u,end:d}}else s=null}s=s||{start:0,end:0}}else s=null;for(si={focusedElem:e,selectionRange:s},k3=!1,k0=t;k0!==null;)if(t=k0,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k0=e;else for(;k0!==null;){switch(t=k0,r=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)l=e[s],l.ref.impl=l.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&r!==null){e=void 0,s=t,l=r.memoizedProps,r=r.memoizedState,i=s.stateNode;try{var X=I1(s.type,l);e=i.getSnapshotBeforeUpdate(X,r),i.__reactInternalSnapshotBeforeUpdate=e}catch($){E0(s,s.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,s=e.nodeType,s===9)ri(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":ri(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(n(163))}if(e=t.sibling,e!==null){e.return=t.return,k0=e;break}k0=t.return}}function or(e,t,s){var i=s.flags;switch(s.tag){case 0:case 11:case 15:a1(e,s),i&4&&vt(5,s);break;case 1:if(a1(e,s),i&4)if(e=s.stateNode,t===null)try{e.componentDidMount()}catch(a){E0(s,s.return,a)}else{var l=I1(s.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(l,t,e.__reactInternalSnapshotBeforeUpdate)}catch(a){E0(s,s.return,a)}}i&64&&rr(s),i&512&&gt(s,s.return);break;case 3:if(a1(e,s),i&64&&(e=s.updateQueue,e!==null)){if(t=null,s.child!==null)switch(s.child.tag){case 27:case 5:t=s.child.stateNode;break;case 1:t=s.child.stateNode}try{kl(e,t)}catch(a){E0(s,s.return,a)}}break;case 27:t===null&&i&4&&dr(s);case 26:case 5:a1(e,s),t===null&&i&4&&ur(s),i&512&&gt(s,s.return);break;case 12:a1(e,s);break;case 31:a1(e,s),i&4&&fr(e,s);break;case 13:a1(e,s),i&4&&_r(e,s),i&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Bn.bind(null,s),i6(e,s))));break;case 22:if(i=s.memoizedState!==null||l1,!i){t=t!==null&&t.memoizedState!==null||K0,l=l1;var r=K0;l1=i,(K0=t)&&!r?u1(e,s,(s.subtreeFlags&8772)!==0):a1(e,s),l1=l,K0=r}break;case 30:break;default:a1(e,s)}}function mr(e){var t=e.alternate;t!==null&&(e.alternate=null,mr(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&c4(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var j0=null,o2=!1;function r1(e,t,s){for(s=s.child;s!==null;)pr(e,t,s),s=s.sibling}function pr(e,t,s){if(y2&&typeof y2.onCommitFiberUnmount=="function")try{y2.onCommitFiberUnmount(Ze,s)}catch{}switch(s.tag){case 26:K0||V2(s,t),r1(e,t,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:K0||V2(s,t);var i=j0,l=o2;C1(s.type)&&(j0=s.stateNode,o2=!1),r1(e,t,s),xt(s.stateNode),j0=i,o2=l;break;case 5:K0||V2(s,t);case 6:if(i=j0,l=o2,j0=null,r1(e,t,s),j0=i,o2=l,j0!==null)if(o2)try{(j0.nodeType===9?j0.body:j0.nodeName==="HTML"?j0.ownerDocument.body:j0).removeChild(s.stateNode)}catch(r){E0(s,t,r)}else try{j0.removeChild(s.stateNode)}catch(r){E0(s,t,r)}break;case 18:j0!==null&&(o2?(e=j0,ra(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Le(e)):ra(j0,s.stateNode));break;case 4:i=j0,l=o2,j0=s.stateNode.containerInfo,o2=!0,r1(e,t,s),j0=i,o2=l;break;case 0:case 11:case 14:case 15:E1(2,s,t),K0||E1(4,s,t),r1(e,t,s);break;case 1:K0||(V2(s,t),i=s.stateNode,typeof i.componentWillUnmount=="function"&&ar(s,t,i)),r1(e,t,s);break;case 21:r1(e,t,s);break;case 22:K0=(i=K0)||s.memoizedState!==null,r1(e,t,s),K0=i;break;default:r1(e,t,s)}}function fr(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Le(e)}catch(s){E0(t,t.return,s)}}}function _r(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Le(e)}catch(s){E0(t,t.return,s)}}function Nn(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new cr),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new cr),t;default:throw Error(n(435,e.tag))}}function N3(e,t){var s=Nn(e);t.forEach(function(i){if(!s.has(i)){s.add(i);var l=Yn.bind(null,e,i);i.then(l,l)}})}function m2(e,t){var s=t.deletions;if(s!==null)for(var i=0;i<s.length;i++){var l=s[i],r=e,a=t,u=a;e:for(;u!==null;){switch(u.tag){case 27:if(C1(u.type)){j0=u.stateNode,o2=!1;break e}break;case 5:j0=u.stateNode,o2=!1;break e;case 3:case 4:j0=u.stateNode.containerInfo,o2=!0;break e}u=u.return}if(j0===null)throw Error(n(160));pr(r,a,l),j0=null,o2=!1,r=l.alternate,r!==null&&(r.return=null),l.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)hr(t,e),t=t.sibling}var Y2=null;function hr(e,t){var s=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:m2(t,e),p2(e),i&4&&(E1(3,e,e.return),vt(3,e),E1(5,e,e.return));break;case 1:m2(t,e),p2(e),i&512&&(K0||s===null||V2(s,s.return)),i&64&&l1&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?i:s.concat(i))));break;case 26:var l=Y2;if(m2(t,e),p2(e),i&512&&(K0||s===null||V2(s,s.return)),i&4){var r=s!==null?s.memoizedState:null;if(i=e.memoizedState,s===null)if(i===null)if(e.stateNode===null){e:{i=e.type,s=e.memoizedProps,l=l.ownerDocument||l;t:switch(i){case"title":r=l.getElementsByTagName("title")[0],(!r||r[Je]||r[W0]||r.namespaceURI==="http://www.w3.org/2000/svg"||r.hasAttribute("itemprop"))&&(r=l.createElement(i),l.head.insertBefore(r,l.querySelector("head > title"))),t2(r,i,s),r[W0]=e,$0(r),i=r;break e;case"link":var a=ha("link","href",l).get(i+(s.href||""));if(a){for(var u=0;u<a.length;u++)if(r=a[u],r.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&r.getAttribute("rel")===(s.rel==null?null:s.rel)&&r.getAttribute("title")===(s.title==null?null:s.title)&&r.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){a.splice(u,1);break t}}r=l.createElement(i),t2(r,i,s),l.head.appendChild(r);break;case"meta":if(a=ha("meta","content",l).get(i+(s.content||""))){for(u=0;u<a.length;u++)if(r=a[u],r.getAttribute("content")===(s.content==null?null:""+s.content)&&r.getAttribute("name")===(s.name==null?null:s.name)&&r.getAttribute("property")===(s.property==null?null:s.property)&&r.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&r.getAttribute("charset")===(s.charSet==null?null:s.charSet)){a.splice(u,1);break t}}r=l.createElement(i),t2(r,i,s),l.head.appendChild(r);break;default:throw Error(n(468,i))}r[W0]=e,$0(r),i=r}e.stateNode=i}else ya(l,e.type,e.stateNode);else e.stateNode=_a(l,i,e.memoizedProps);else r!==i?(r===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):r.count--,i===null?ya(l,e.type,e.stateNode):_a(l,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Cs(e,e.memoizedProps,s.memoizedProps)}break;case 27:m2(t,e),p2(e),i&512&&(K0||s===null||V2(s,s.return)),s!==null&&i&4&&Cs(e,e.memoizedProps,s.memoizedProps);break;case 5:if(m2(t,e),p2(e),i&512&&(K0||s===null||V2(s,s.return)),e.flags&32){l=e.stateNode;try{de(l,"")}catch(X){E0(e,e.return,X)}}i&4&&e.stateNode!=null&&(l=e.memoizedProps,Cs(e,l,s!==null?s.memoizedProps:l)),i&1024&&(js=!0);break;case 6:if(m2(t,e),p2(e),i&4){if(e.stateNode===null)throw Error(n(162));i=e.memoizedProps,s=e.stateNode;try{s.nodeValue=i}catch(X){E0(e,e.return,X)}}break;case 3:if(K3=null,l=Y2,Y2=Z3(t.containerInfo),m2(t,e),Y2=l,p2(e),i&4&&s!==null&&s.memoizedState.isDehydrated)try{Le(t.containerInfo)}catch(X){E0(e,e.return,X)}js&&(js=!1,yr(e));break;case 4:i=Y2,Y2=Z3(e.stateNode.containerInfo),m2(t,e),p2(e),Y2=i;break;case 12:m2(t,e),p2(e);break;case 31:m2(t,e),p2(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,N3(e,i)));break;case 13:m2(t,e),p2(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(C3=h2()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,N3(e,i)));break;case 22:l=e.memoizedState!==null;var d=s!==null&&s.memoizedState!==null,h=l1,A=K0;if(l1=h||l,K0=A||d,m2(t,e),K0=A,l1=h,p2(e),i&8192)e:for(t=e.stateNode,t._visibility=l?t._visibility&-2:t._visibility|1,l&&(s===null||d||l1||K0||P1(e)),s=null,t=e;;){if(t.tag===5||t.tag===26){if(s===null){d=s=t;try{if(r=d.stateNode,l)a=r.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{u=d.stateNode;var C=d.memoizedProps.style,g=C!=null&&C.hasOwnProperty("display")?C.display:null;u.style.display=g==null||typeof g=="boolean"?"":(""+g).trim()}}catch(X){E0(d,d.return,X)}}}else if(t.tag===6){if(s===null){d=t;try{d.stateNode.nodeValue=l?"":d.memoizedProps}catch(X){E0(d,d.return,X)}}}else if(t.tag===18){if(s===null){d=t;try{var T=d.stateNode;l?aa(T,!0):aa(d.stateNode,!1)}catch(X){E0(d,d.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;s===t&&(s=null),t=t.return}s===t&&(s=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(s=i.retryQueue,s!==null&&(i.retryQueue=null,N3(e,s))));break;case 19:m2(t,e),p2(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,N3(e,i)));break;case 30:break;case 21:break;default:m2(t,e),p2(e)}}function p2(e){var t=e.flags;if(t&2){try{for(var s,i=e.return;i!==null;){if(nr(i)){s=i;break}i=i.return}if(s==null)throw Error(n(160));switch(s.tag){case 27:var l=s.stateNode,r=Us(e);x3(e,r,l);break;case 5:var a=s.stateNode;s.flags&32&&(de(a,""),s.flags&=-33);var u=Us(e);x3(e,u,a);break;case 3:case 4:var d=s.stateNode.containerInfo,h=Us(e);Rs(e,h,d);break;default:throw Error(n(161))}}catch(A){E0(e,e.return,A)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yr(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yr(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function a1(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)or(e,t.alternate,t),t=t.sibling}function P1(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:E1(4,t,t.return),P1(t);break;case 1:V2(t,t.return);var s=t.stateNode;typeof s.componentWillUnmount=="function"&&ar(t,t.return,s),P1(t);break;case 27:xt(t.stateNode);case 26:case 5:V2(t,t.return),P1(t);break;case 22:t.memoizedState===null&&P1(t);break;case 30:P1(t);break;default:P1(t)}e=e.sibling}}function u1(e,t,s){for(s=s&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,l=e,r=t,a=r.flags;switch(r.tag){case 0:case 11:case 15:u1(l,r,s),vt(4,r);break;case 1:if(u1(l,r,s),i=r,l=i.stateNode,typeof l.componentDidMount=="function")try{l.componentDidMount()}catch(h){E0(i,i.return,h)}if(i=r,l=i.updateQueue,l!==null){var u=i.stateNode;try{var d=l.shared.hiddenCallbacks;if(d!==null)for(l.shared.hiddenCallbacks=null,l=0;l<d.length;l++)$l(d[l],u)}catch(h){E0(i,i.return,h)}}s&&a&64&&rr(r),gt(r,r.return);break;case 27:dr(r);case 26:case 5:u1(l,r,s),s&&i===null&&a&4&&ur(r),gt(r,r.return);break;case 12:u1(l,r,s);break;case 31:u1(l,r,s),s&&a&4&&fr(l,r);break;case 13:u1(l,r,s),s&&a&4&&_r(l,r);break;case 22:r.memoizedState===null&&u1(l,r,s),gt(r,r.return);break;case 30:break;default:u1(l,r,s)}t=t.sibling}}function Hs(e,t){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&rt(s))}function qs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rt(e))}function G2(e,t,s,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vr(e,t,s,i),t=t.sibling}function vr(e,t,s,i){var l=t.flags;switch(t.tag){case 0:case 11:case 15:G2(e,t,s,i),l&2048&&vt(9,t);break;case 1:G2(e,t,s,i);break;case 3:G2(e,t,s,i),l&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&rt(e)));break;case 12:if(l&2048){G2(e,t,s,i),e=t.stateNode;try{var r=t.memoizedProps,a=r.id,u=r.onPostCommit;typeof u=="function"&&u(a,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){E0(t,t.return,d)}}else G2(e,t,s,i);break;case 31:G2(e,t,s,i);break;case 13:G2(e,t,s,i);break;case 23:break;case 22:r=t.stateNode,a=t.alternate,t.memoizedState!==null?r._visibility&2?G2(e,t,s,i):St(e,t):r._visibility&2?G2(e,t,s,i):(r._visibility|=2,Ne(e,t,s,i,(t.subtreeFlags&10256)!==0||!1)),l&2048&&Hs(a,t);break;case 24:G2(e,t,s,i),l&2048&&qs(t.alternate,t);break;default:G2(e,t,s,i)}}function Ne(e,t,s,i,l){for(l=l&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var r=e,a=t,u=s,d=i,h=a.flags;switch(a.tag){case 0:case 11:case 15:Ne(r,a,u,d,l),vt(8,a);break;case 23:break;case 22:var A=a.stateNode;a.memoizedState!==null?A._visibility&2?Ne(r,a,u,d,l):St(r,a):(A._visibility|=2,Ne(r,a,u,d,l)),l&&h&2048&&Hs(a.alternate,a);break;case 24:Ne(r,a,u,d,l),l&&h&2048&&qs(a.alternate,a);break;default:Ne(r,a,u,d,l)}t=t.sibling}}function St(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var s=e,i=t,l=i.flags;switch(i.tag){case 22:St(s,i),l&2048&&Hs(i.alternate,i);break;case 24:St(s,i),l&2048&&qs(i.alternate,i);break;default:St(s,i)}t=t.sibling}}var Tt=8192;function De(e,t,s){if(e.subtreeFlags&Tt)for(e=e.child;e!==null;)gr(e,t,s),e=e.sibling}function gr(e,t,s){switch(e.tag){case 26:De(e,t,s),e.flags&Tt&&e.memoizedState!==null&&_6(s,Y2,e.memoizedState,e.memoizedProps);break;case 5:De(e,t,s);break;case 3:case 4:var i=Y2;Y2=Z3(e.stateNode.containerInfo),De(e,t,s),Y2=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=Tt,Tt=16777216,De(e,t,s),Tt=i):De(e,t,s));break;default:De(e,t,s)}}function Sr(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function bt(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var i=t[s];k0=i,br(i,e)}Sr(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)Tr(e),e=e.sibling}function Tr(e){switch(e.tag){case 0:case 11:case 15:bt(e),e.flags&2048&&E1(9,e,e.return);break;case 3:bt(e);break;case 12:bt(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,D3(e)):bt(e);break;default:bt(e)}}function D3(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var i=t[s];k0=i,br(i,e)}Sr(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:E1(8,t,t.return),D3(t);break;case 22:s=t.stateNode,s._visibility&2&&(s._visibility&=-3,D3(t));break;default:D3(t)}e=e.sibling}}function br(e,t){for(;k0!==null;){var s=k0;switch(s.tag){case 0:case 11:case 15:E1(8,s,t);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var i=s.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:rt(s.memoizedState.cache)}if(i=s.child,i!==null)i.return=s,k0=i;else e:for(s=e;k0!==null;){i=k0;var l=i.sibling,r=i.return;if(mr(i),i===s){k0=null;break e}if(l!==null){l.return=r,k0=l;break e}k0=r}}}var Dn={getCacheForType:function(e){var t=P0(Q0),s=t.data.get(e);return s===void 0&&(s=e(),t.data.set(e,s)),s},cacheSignal:function(){return P0(Q0).controller.signal}},Cn=typeof WeakMap=="function"?WeakMap:Map,S0=0,D0=null,l0=null,a0=0,z0=0,z2=null,M1=!1,Ce=!1,Bs=!1,n1=0,B0=0,A1=0,ee=0,Ys=0,E2=0,Ue=0,zt=null,f2=null,Gs=!1,C3=0,zr=0,U3=1/0,R3=null,O1=null,w0=0,x1=null,Re=null,d1=0,Ls=0,Xs=null,Er=null,Et=0,Qs=null;function M2(){return(S0&2)!==0&&a0!==0?a0&-a0:E.T!==null?$s():Li()}function Mr(){if(E2===0)if((a0&536870912)===0||d0){var e=Xt;Xt<<=1,(Xt&3932160)===0&&(Xt=262144),E2=e}else E2=536870912;return e=T2.current,e!==null&&(e.flags|=32),E2}function _2(e,t,s){(e===D0&&(z0===2||z0===9)||e.cancelPendingCommit!==null)&&(je(e,0),N1(e,a0,E2,!1)),Ke(e,s),((S0&2)===0||e!==D0)&&(e===D0&&((S0&2)===0&&(ee|=s),B0===4&&N1(e,a0,E2,!1)),K2(e))}function Ar(e,t,s){if((S0&6)!==0)throw Error(n(327));var i=!s&&(t&127)===0&&(t&e.expiredLanes)===0||Ve(e,t),l=i?jn(e,t):Vs(e,t,!0),r=i;do{if(l===0){Ce&&!i&&N1(e,t,0,!1);break}else{if(s=e.current.alternate,r&&!Un(s)){l=Vs(e,t,!1),r=!1;continue}if(l===2){if(r=t,e.errorRecoveryDisabledLanes&r)var a=0;else a=e.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;e:{var u=e;l=zt;var d=u.current.memoizedState.isDehydrated;if(d&&(je(u,a).flags|=256),a=Vs(u,a,!1),a!==2){if(Bs&&!d){u.errorRecoveryDisabledLanes|=r,ee|=r,l=4;break e}r=f2,f2=l,r!==null&&(f2===null?f2=r:f2.push.apply(f2,r))}l=a}if(r=!1,l!==2)continue}}if(l===1){je(e,0),N1(e,t,0,!0);break}e:{switch(i=e,r=l,r){case 0:case 1:throw Error(n(345));case 4:if((t&4194048)!==t)break;case 6:N1(i,t,E2,!M1);break e;case 2:f2=null;break;case 3:case 5:break;default:throw Error(n(329))}if((t&62914560)===t&&(l=C3+300-h2(),10<l)){if(N1(i,t,E2,!M1),Zt(i,0,!0)!==0)break e;d1=t,i.timeoutHandle=ia(Or.bind(null,i,s,f2,R3,Gs,t,E2,ee,Ue,M1,r,"Throttled",-0,0),l);break e}Or(i,s,f2,R3,Gs,t,E2,ee,Ue,M1,r,null,-0,0)}}break}while(!0);K2(e)}function Or(e,t,s,i,l,r,a,u,d,h,A,C,g,T){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$2},gr(t,r,C);var X=(r&62914560)===r?C3-h2():(r&4194048)===r?zr-h2():0;if(X=h6(C,X),X!==null){d1=r,e.cancelPendingCommit=X(Hr.bind(null,e,t,r,s,i,l,a,u,d,A,C,null,g,T)),N1(e,r,a,!h);return}}Hr(e,t,r,s,i,l,a,u,d)}function Un(e){for(var t=e;;){var s=t.tag;if((s===0||s===11||s===15)&&t.flags&16384&&(s=t.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var i=0;i<s.length;i++){var l=s[i],r=l.getSnapshot;l=l.value;try{if(!g2(r(),l))return!1}catch{return!1}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function N1(e,t,s,i){t&=~Ys,t&=~ee,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var l=t;0<l;){var r=31-v2(l),a=1<<r;i[r]=-1,l&=~a}s!==0&&Bi(e,s,t)}function j3(){return(S0&6)===0?(Mt(0),!1):!0}function Zs(){if(l0!==null){if(z0===0)var e=l0.return;else e=l0,I2=K1=null,rs(e),Ee=null,ut=0,e=l0;for(;e!==null;)lr(e.alternate,e),e=e.return;l0=null}}function je(e,t){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,In(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),d1=0,Zs(),D0=e,l0=s=F2(e.current,null),a0=t,z0=0,z2=null,M1=!1,Ce=Ve(e,t),Bs=!1,Ue=E2=Ys=ee=A1=B0=0,f2=zt=null,Gs=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var l=31-v2(i),r=1<<l;t|=e[l],i&=~r}return n1=t,t3(),s}function xr(e,t){I=null,E.H=_t,t===ze||t===d3?(t=Vl(),z0=3):t===w4?(t=Vl(),z0=4):z0=t===Ts?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,z2=t,l0===null&&(B0=1,z3(e,N2(t,e.current)))}function Nr(){var e=T2.current;return e===null?!0:(a0&4194048)===a0?R2===null:(a0&62914560)===a0||(a0&536870912)!==0?e===R2:!1}function Dr(){var e=E.H;return E.H=_t,e===null?_t:e}function Cr(){var e=E.A;return E.A=Dn,e}function H3(){B0=4,M1||(a0&4194048)!==a0&&T2.current!==null||(Ce=!0),(A1&134217727)===0&&(ee&134217727)===0||D0===null||N1(D0,a0,E2,!1)}function Vs(e,t,s){var i=S0;S0|=2;var l=Dr(),r=Cr();(D0!==e||a0!==t)&&(R3=null,je(e,t)),t=!1;var a=B0;e:do try{if(z0!==0&&l0!==null){var u=l0,d=z2;switch(z0){case 8:Zs(),a=6;break e;case 3:case 2:case 9:case 6:T2.current===null&&(t=!0);var h=z0;if(z0=0,z2=null,He(e,u,d,h),s&&Ce){a=0;break e}break;default:h=z0,z0=0,z2=null,He(e,u,d,h)}}Rn(),a=B0;break}catch(A){xr(e,A)}while(!0);return t&&e.shellSuspendCounter++,I2=K1=null,S0=i,E.H=l,E.A=r,l0===null&&(D0=null,a0=0,t3()),a}function Rn(){for(;l0!==null;)Ur(l0)}function jn(e,t){var s=S0;S0|=2;var i=Dr(),l=Cr();D0!==e||a0!==t?(R3=null,U3=h2()+500,je(e,t)):Ce=Ve(e,t);e:do try{if(z0!==0&&l0!==null){t=l0;var r=z2;t:switch(z0){case 1:z0=0,z2=null,He(e,t,r,1);break;case 2:case 9:if(Ql(r)){z0=0,z2=null,Rr(t);break}t=function(){z0!==2&&z0!==9||D0!==e||(z0=7),K2(e)},r.then(t,t);break e;case 3:z0=7;break e;case 4:z0=5;break e;case 7:Ql(r)?(z0=0,z2=null,Rr(t)):(z0=0,z2=null,He(e,t,r,7));break;case 5:var a=null;switch(l0.tag){case 26:a=l0.memoizedState;case 5:case 27:var u=l0;if(a?va(a):u.stateNode.complete){z0=0,z2=null;var d=u.sibling;if(d!==null)l0=d;else{var h=u.return;h!==null?(l0=h,q3(h)):l0=null}break t}}z0=0,z2=null,He(e,t,r,5);break;case 6:z0=0,z2=null,He(e,t,r,6);break;case 8:Zs(),B0=6;break e;default:throw Error(n(462))}}Hn();break}catch(A){xr(e,A)}while(!0);return I2=K1=null,E.H=i,E.A=l,S0=s,l0!==null?0:(D0=null,a0=0,t3(),B0)}function Hn(){for(;l0!==null&&!Ui();)Ur(l0)}function Ur(e){var t=sr(e.alternate,e,n1);e.memoizedProps=e.pendingProps,t===null?q3(e):l0=t}function Rr(e){var t=e,s=t.alternate;switch(t.tag){case 15:case 0:t=F5(s,t,t.pendingProps,t.type,void 0,a0);break;case 11:t=F5(s,t,t.pendingProps,t.type.render,t.ref,a0);break;case 5:rs(t);default:lr(s,t),t=l0=Cl(t,n1),t=sr(s,t,n1)}e.memoizedProps=e.pendingProps,t===null?q3(e):l0=t}function He(e,t,s,i){I2=K1=null,rs(t),Ee=null,ut=0;var l=t.return;try{if(zn(e,l,t,s,a0)){B0=1,z3(e,N2(s,e.current)),l0=null;return}}catch(r){if(l!==null)throw l0=l,r;B0=1,z3(e,N2(s,e.current)),l0=null;return}t.flags&32768?(d0||i===1?e=!0:Ce||(a0&536870912)!==0?e=!1:(M1=e=!0,(i===2||i===9||i===3||i===6)&&(i=T2.current,i!==null&&i.tag===13&&(i.flags|=16384))),jr(t,e)):q3(t)}function q3(e){var t=e;do{if((t.flags&32768)!==0){jr(t,M1);return}e=t.return;var s=An(t.alternate,t,n1);if(s!==null){l0=s;return}if(t=t.sibling,t!==null){l0=t;return}l0=t=e}while(t!==null);B0===0&&(B0=5)}function jr(e,t){do{var s=On(e.alternate,e);if(s!==null){s.flags&=32767,l0=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!t&&(e=e.sibling,e!==null)){l0=e;return}l0=e=s}while(e!==null);B0=6,l0=null}function Hr(e,t,s,i,l,r,a,u,d){e.cancelPendingCommit=null;do B3();while(w0!==0);if((S0&6)!==0)throw Error(n(327));if(t!==null){if(t===e.current)throw Error(n(177));if(r=t.lanes|t.childLanes,r|=U4,pu(e,s,r,a,u,d),e===D0&&(l0=D0=null,a0=0),Re=t,x1=e,d1=s,Ls=r,Xs=l,Er=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Gn(Gt,function(){return Lr(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=E.T,E.T=null,l=G.p,G.p=2,a=S0,S0|=4;try{xn(e,t,s)}finally{S0=a,G.p=l,E.T=i}}w0=1,qr(),Br(),Yr()}}function qr(){if(w0===1){w0=0;var e=x1,t=Re,s=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||s){s=E.T,E.T=null;var i=G.p;G.p=2;var l=S0;S0|=4;try{hr(t,e);var r=si,a=bl(e.containerInfo),u=r.focusedElem,d=r.selectionRange;if(a!==u&&u&&u.ownerDocument&&Tl(u.ownerDocument.documentElement,u)){if(d!==null&&O4(u)){var h=d.start,A=d.end;if(A===void 0&&(A=h),"selectionStart"in u)u.selectionStart=h,u.selectionEnd=Math.min(A,u.value.length);else{var C=u.ownerDocument||document,g=C&&C.defaultView||window;if(g.getSelection){var T=g.getSelection(),X=u.textContent.length,$=Math.min(d.start,X),O0=d.end===void 0?$:Math.min(d.end,X);!T.extend&&$>O0&&(a=O0,O0=$,$=a);var f=Sl(u,$),o=Sl(u,O0);if(f&&o&&(T.rangeCount!==1||T.anchorNode!==f.node||T.anchorOffset!==f.offset||T.focusNode!==o.node||T.focusOffset!==o.offset)){var _=C.createRange();_.setStart(f.node,f.offset),T.removeAllRanges(),$>O0?(T.addRange(_),T.extend(o.node,o.offset)):(_.setEnd(o.node,o.offset),T.addRange(_))}}}}for(C=[],T=u;T=T.parentNode;)T.nodeType===1&&C.push({element:T,left:T.scrollLeft,top:T.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<C.length;u++){var N=C[u];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}k3=!!ti,si=ti=null}finally{S0=l,G.p=i,E.T=s}}e.current=t,w0=2}}function Br(){if(w0===2){w0=0;var e=x1,t=Re,s=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||s){s=E.T,E.T=null;var i=G.p;G.p=2;var l=S0;S0|=4;try{or(e,t.alternate,t)}finally{S0=l,G.p=i,E.T=s}}w0=3}}function Yr(){if(w0===4||w0===3){w0=0,lu();var e=x1,t=Re,s=d1,i=Er;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?w0=5:(w0=0,Re=x1=null,Gr(e,e.pendingLanes));var l=e.pendingLanes;if(l===0&&(O1=null),n4(s),t=t.stateNode,y2&&typeof y2.onCommitFiberRoot=="function")try{y2.onCommitFiberRoot(Ze,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=E.T,l=G.p,G.p=2,E.T=null;try{for(var r=e.onRecoverableError,a=0;a<i.length;a++){var u=i[a];r(u.value,{componentStack:u.stack})}}finally{E.T=t,G.p=l}}(d1&3)!==0&&B3(),K2(e),l=e.pendingLanes,(s&261930)!==0&&(l&42)!==0?e===Qs?Et++:(Et=0,Qs=e):Et=0,Mt(0)}}function Gr(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,rt(t)))}function B3(){return qr(),Br(),Yr(),Lr()}function Lr(){if(w0!==5)return!1;var e=x1,t=Ls;Ls=0;var s=n4(d1),i=E.T,l=G.p;try{G.p=32>s?32:s,E.T=null,s=Xs,Xs=null;var r=x1,a=d1;if(w0=0,Re=x1=null,d1=0,(S0&6)!==0)throw Error(n(331));var u=S0;if(S0|=4,Tr(r.current),vr(r,r.current,a,s),S0=u,Mt(0,!1),y2&&typeof y2.onPostCommitFiberRoot=="function")try{y2.onPostCommitFiberRoot(Ze,r)}catch{}return!0}finally{G.p=l,E.T=i,Gr(e,t)}}function Xr(e,t,s){t=N2(s,t),t=Ss(e.stateNode,t,2),e=T1(e,t,2),e!==null&&(Ke(e,2),K2(e))}function E0(e,t,s){if(e.tag===3)Xr(e,e,s);else for(;t!==null;){if(t.tag===3){Xr(t,e,s);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(O1===null||!O1.has(i))){e=N2(s,e),s=Q5(2),i=T1(t,s,2),i!==null&&(Z5(s,i,t,e),Ke(i,2),K2(i));break}}t=t.return}}function Ks(e,t,s){var i=e.pingCache;if(i===null){i=e.pingCache=new Cn;var l=new Set;i.set(t,l)}else l=i.get(t),l===void 0&&(l=new Set,i.set(t,l));l.has(s)||(Bs=!0,l.add(s),e=qn.bind(null,e,t,s),t.then(e,e))}function qn(e,t,s){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,D0===e&&(a0&s)===s&&(B0===4||B0===3&&(a0&62914560)===a0&&300>h2()-C3?(S0&2)===0&&je(e,0):Ys|=s,Ue===a0&&(Ue=0)),K2(e)}function Qr(e,t){t===0&&(t=qi()),e=Q1(e,t),e!==null&&(Ke(e,t),K2(e))}function Bn(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),Qr(e,s)}function Yn(e,t){var s=0;switch(e.tag){case 31:case 13:var i=e.stateNode,l=e.memoizedState;l!==null&&(s=l.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(n(314))}i!==null&&i.delete(t),Qr(e,s)}function Gn(e,t){return X2(e,t)}var Y3=null,qe=null,Js=!1,G3=!1,ws=!1,D1=0;function K2(e){e!==qe&&e.next===null&&(qe===null?Y3=qe=e:qe=qe.next=e),G3=!0,Js||(Js=!0,Xn())}function Mt(e,t){if(!ws&&G3){ws=!0;do for(var s=!1,i=Y3;i!==null;){if(e!==0){var l=i.pendingLanes;if(l===0)var r=0;else{var a=i.suspendedLanes,u=i.pingedLanes;r=(1<<31-v2(42|e)+1)-1,r&=l&~(a&~u),r=r&201326741?r&201326741|1:r?r|2:0}r!==0&&(s=!0,Jr(i,r))}else r=a0,r=Zt(i,i===D0?r:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(r&3)===0||Ve(i,r)||(s=!0,Jr(i,r));i=i.next}while(s);ws=!1}}function Ln(){Zr()}function Zr(){G3=Js=!1;var e=0;D1!==0&&Wn()&&(e=D1);for(var t=h2(),s=null,i=Y3;i!==null;){var l=i.next,r=Vr(i,t);r===0?(i.next=null,s===null?Y3=l:s.next=l,l===null&&(qe=s)):(s=i,(e!==0||(r&3)!==0)&&(G3=!0)),i=l}w0!==0&&w0!==5||Mt(e),D1!==0&&(D1=0)}function Vr(e,t){for(var s=e.suspendedLanes,i=e.pingedLanes,l=e.expirationTimes,r=e.pendingLanes&-62914561;0<r;){var a=31-v2(r),u=1<<a,d=l[a];d===-1?((u&s)===0||(u&i)!==0)&&(l[a]=mu(u,t)):d<=t&&(e.expiredLanes|=u),r&=~u}if(t=D0,s=a0,s=Zt(e,e===t?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,s===0||e===t&&(z0===2||z0===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&se(i),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ve(e,s)){if(t=s&-s,t===e.callbackPriority)return t;switch(i!==null&&se(i),n4(s)){case 2:case 8:s=ji;break;case 32:s=Gt;break;case 268435456:s=Hi;break;default:s=Gt}return i=Kr.bind(null,e),s=X2(s,i),e.callbackPriority=t,e.callbackNode=s,t}return i!==null&&i!==null&&se(i),e.callbackPriority=2,e.callbackNode=null,2}function Kr(e,t){if(w0!==0&&w0!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(B3()&&e.callbackNode!==s)return null;var i=a0;return i=Zt(e,e===D0?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(Ar(e,i,t),Vr(e,h2()),e.callbackNode!=null&&e.callbackNode===s?Kr.bind(null,e):null)}function Jr(e,t){if(B3())return null;Ar(e,t,!0)}function Xn(){Pn(function(){(S0&6)!==0?X2(Ri,Ln):Zr()})}function $s(){if(D1===0){var e=Te;e===0&&(e=Lt,Lt<<=1,(Lt&261888)===0&&(Lt=256)),D1=e}return D1}function wr(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wt(""+e)}function $r(e,t){var s=t.ownerDocument.createElement("input");return s.name=t.name,s.value=t.value,e.id&&s.setAttribute("form",e.id),t.parentNode.insertBefore(s,t),e=new FormData(e),s.parentNode.removeChild(s),e}function Qn(e,t,s,i,l){if(t==="submit"&&s&&s.stateNode===l){var r=wr((l[d2]||null).action),a=i.submitter;a&&(t=(t=a[d2]||null)?wr(t.formAction):a.getAttribute("formAction"),t!==null&&(r=t,a=null));var u=new Wt("action","action",null,i,l);e.push({event:u,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(D1!==0){var d=a?$r(l,a):new FormData(l);fs(s,{pending:!0,data:d,method:l.method,action:r},null,d)}}else typeof r=="function"&&(u.preventDefault(),d=a?$r(l,a):new FormData(l),fs(s,{pending:!0,data:d,method:l.method,action:r},r,d))},currentTarget:l}]})}}for(var ks=0;ks<C4.length;ks++){var Fs=C4[ks],Zn=Fs.toLowerCase(),Vn=Fs[0].toUpperCase()+Fs.slice(1);B2(Zn,"on"+Vn)}B2(Ml,"onAnimationEnd"),B2(Al,"onAnimationIteration"),B2(Ol,"onAnimationStart"),B2("dblclick","onDoubleClick"),B2("focusin","onFocus"),B2("focusout","onBlur"),B2(an,"onTransitionRun"),B2(un,"onTransitionStart"),B2(nn,"onTransitionCancel"),B2(xl,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),Y1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y1("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var At="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Kn=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(At));function kr(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var i=e[s],l=i.event;i=i.listeners;e:{var r=void 0;if(t)for(var a=i.length-1;0<=a;a--){var u=i[a],d=u.instance,h=u.currentTarget;if(u=u.listener,d!==r&&l.isPropagationStopped())break e;r=u,l.currentTarget=h;try{r(l)}catch(A){e3(A)}l.currentTarget=null,r=d}else for(a=0;a<i.length;a++){if(u=i[a],d=u.instance,h=u.currentTarget,u=u.listener,d!==r&&l.isPropagationStopped())break e;r=u,l.currentTarget=h;try{r(l)}catch(A){e3(A)}l.currentTarget=null,r=d}}}}function r0(e,t){var s=t[d4];s===void 0&&(s=t[d4]=new Set);var i=e+"__bubble";s.has(i)||(Fr(t,e,2,!1),s.add(i))}function Ws(e,t,s){var i=0;t&&(i|=4),Fr(s,e,i,t)}var L3="_reactListening"+Math.random().toString(36).slice(2);function Is(e){if(!e[L3]){e[L3]=!0,Zi.forEach(function(s){s!=="selectionchange"&&(Kn.has(s)||Ws(s,!1,e),Ws(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[L3]||(t[L3]=!0,Ws("selectionchange",!1,t))}}function Fr(e,t,s,i){switch(Ma(t)){case 2:var l=g6;break;case 8:l=S6;break;default:l=pi}s=l.bind(null,t,s,e),l=void 0,!v4||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(l=!0),i?l!==void 0?e.addEventListener(t,s,{capture:!0,passive:l}):e.addEventListener(t,s,!0):l!==void 0?e.addEventListener(t,s,{passive:l}):e.addEventListener(t,s,!1)}function Ps(e,t,s,i,l){var r=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var u=i.stateNode.containerInfo;if(u===l)break;if(a===4)for(a=i.return;a!==null;){var d=a.tag;if((d===3||d===4)&&a.stateNode.containerInfo===l)return;a=a.return}for(;u!==null;){if(a=le(u),a===null)return;if(d=a.tag,d===5||d===6||d===26||d===27){i=r=a;continue e}u=u.parentNode}}i=i.return}tl(function(){var h=r,A=h4(s),C=[];e:{var g=Nl.get(e);if(g!==void 0){var T=Wt,X=e;switch(e){case"keypress":if(kt(s)===0)break e;case"keydown":case"keyup":T=Bu;break;case"focusin":X="focus",T=b4;break;case"focusout":X="blur",T=b4;break;case"beforeblur":case"afterblur":T=b4;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":T=ll;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":T=Mu;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":T=Lu;break;case Ml:case Al:case Ol:T=xu;break;case xl:T=Qu;break;case"scroll":case"scrollend":T=zu;break;case"wheel":T=Vu;break;case"copy":case"cut":case"paste":T=Du;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":T=al;break;case"toggle":case"beforetoggle":T=Ju}var $=(t&4)!==0,O0=!$&&(e==="scroll"||e==="scrollend"),f=$?g!==null?g+"Capture":null:g;$=[];for(var o=h,_;o!==null;){var N=o;if(_=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||_===null||f===null||(N=$e(o,f),N!=null&&$.push(Ot(o,N,_))),O0)break;o=o.return}0<$.length&&(g=new T(g,X,null,s,A),C.push({event:g,listeners:$}))}}if((t&7)===0){e:{if(g=e==="mouseover"||e==="pointerover",T=e==="mouseout"||e==="pointerout",g&&s!==_4&&(X=s.relatedTarget||s.fromElement)&&(le(X)||X[ie]))break e;if((T||g)&&(g=A.window===A?A:(g=A.ownerDocument)?g.defaultView||g.parentWindow:window,T?(X=s.relatedTarget||s.toElement,T=h,X=X?le(X):null,X!==null&&(O0=O(X),$=X.tag,X!==O0||$!==5&&$!==27&&$!==6)&&(X=null)):(T=null,X=h),T!==X)){if($=ll,N="onMouseLeave",f="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&($=al,N="onPointerLeave",f="onPointerEnter",o="pointer"),O0=T==null?g:we(T),_=X==null?g:we(X),g=new $(N,o+"leave",T,s,A),g.target=O0,g.relatedTarget=_,N=null,le(A)===h&&($=new $(f,o+"enter",X,s,A),$.target=_,$.relatedTarget=O0,N=$),O0=N,T&&X)t:{for($=Jn,f=T,o=X,_=0,N=f;N;N=$(N))_++;N=0;for(var J=o;J;J=$(J))N++;for(;0<_-N;)f=$(f),_--;for(;0<N-_;)o=$(o),N--;for(;_--;){if(f===o||o!==null&&f===o.alternate){$=f;break t}f=$(f),o=$(o)}$=null}else $=null;T!==null&&Wr(C,g,T,$,!1),X!==null&&O0!==null&&Wr(C,O0,X,$,!0)}}e:{if(g=h?we(h):window,T=g.nodeName&&g.nodeName.toLowerCase(),T==="select"||T==="input"&&g.type==="file")var y0=fl;else if(ml(g))if(_l)y0=sn;else{y0=en;var V=Pu}else T=g.nodeName,!T||T.toLowerCase()!=="input"||g.type!=="checkbox"&&g.type!=="radio"?h&&f4(h.elementType)&&(y0=fl):y0=tn;if(y0&&(y0=y0(e,h))){pl(C,y0,s,A);break e}V&&V(e,g,h),e==="focusout"&&h&&g.type==="number"&&h.memoizedProps.value!=null&&p4(g,"number",g.value)}switch(V=h?we(h):window,e){case"focusin":(ml(V)||V.contentEditable==="true")&&(pe=V,x4=h,st=null);break;case"focusout":st=x4=pe=null;break;case"mousedown":N4=!0;break;case"contextmenu":case"mouseup":case"dragend":N4=!1,zl(C,s,A);break;case"selectionchange":if(rn)break;case"keydown":case"keyup":zl(C,s,A)}var e0;if(E4)e:{switch(e){case"compositionstart":var u0="onCompositionStart";break e;case"compositionend":u0="onCompositionEnd";break e;case"compositionupdate":u0="onCompositionUpdate";break e}u0=void 0}else me?cl(e,s)&&(u0="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(u0="onCompositionStart");u0&&(ul&&s.locale!=="ko"&&(me||u0!=="onCompositionStart"?u0==="onCompositionEnd"&&me&&(e0=sl()):(f1=A,g4="value"in f1?f1.value:f1.textContent,me=!0)),V=X3(h,u0),0<V.length&&(u0=new rl(u0,e,null,s,A),C.push({event:u0,listeners:V}),e0?u0.data=e0:(e0=ol(s),e0!==null&&(u0.data=e0)))),(e0=$u?ku(e,s):Fu(e,s))&&(u0=X3(h,"onBeforeInput"),0<u0.length&&(V=new rl("onBeforeInput","beforeinput",null,s,A),C.push({event:V,listeners:u0}),V.data=e0)),Qn(C,e,h,s,A)}kr(C,t)})}function Ot(e,t,s){return{instance:e,listener:t,currentTarget:s}}function X3(e,t){for(var s=t+"Capture",i=[];e!==null;){var l=e,r=l.stateNode;if(l=l.tag,l!==5&&l!==26&&l!==27||r===null||(l=$e(e,s),l!=null&&i.unshift(Ot(e,l,r)),l=$e(e,t),l!=null&&i.push(Ot(e,l,r))),e.tag===3)return i;e=e.return}return[]}function Jn(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Wr(e,t,s,i,l){for(var r=t._reactName,a=[];s!==null&&s!==i;){var u=s,d=u.alternate,h=u.stateNode;if(u=u.tag,d!==null&&d===i)break;u!==5&&u!==26&&u!==27||h===null||(d=h,l?(h=$e(s,r),h!=null&&a.unshift(Ot(s,h,d))):l||(h=$e(s,r),h!=null&&a.push(Ot(s,h,d)))),s=s.return}a.length!==0&&e.push({event:t,listeners:a})}var wn=/\r\n?/g,$n=/\u0000|\uFFFD/g;function Ir(e){return(typeof e=="string"?e:""+e).replace(wn,`
`).replace($n,"")}function Pr(e,t){return t=Ir(t),Ir(e)===t}function A0(e,t,s,i,l,r){switch(s){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||de(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&de(e,""+i);break;case"className":Kt(e,"class",i);break;case"tabIndex":Kt(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Kt(e,s,i);break;case"style":Pi(e,i,r);break;case"data":if(t!=="object"){Kt(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||s!=="href")){e.removeAttribute(s);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(s);break}i=wt(""+i),e.setAttribute(s,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof r=="function"&&(s==="formAction"?(t!=="input"&&A0(e,t,"name",l.name,l,null),A0(e,t,"formEncType",l.formEncType,l,null),A0(e,t,"formMethod",l.formMethod,l,null),A0(e,t,"formTarget",l.formTarget,l,null)):(A0(e,t,"encType",l.encType,l,null),A0(e,t,"method",l.method,l,null),A0(e,t,"target",l.target,l,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(s);break}i=wt(""+i),e.setAttribute(s,i);break;case"onClick":i!=null&&(e.onclick=$2);break;case"onScroll":i!=null&&r0("scroll",e);break;case"onScrollEnd":i!=null&&r0("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(n(61));if(s=i.__html,s!=null){if(l.children!=null)throw Error(n(60));e.innerHTML=s}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}s=wt(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(s,""+i):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":i===!0?e.setAttribute(s,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(s,i):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(s,i):e.removeAttribute(s);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(s):e.setAttribute(s,i);break;case"popover":r0("beforetoggle",e),r0("toggle",e),Vt(e,"popover",i);break;case"xlinkActuate":w2(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":w2(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":w2(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":w2(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":w2(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":w2(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":w2(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":w2(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":w2(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Vt(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=Tu.get(s)||s,Vt(e,s,i))}}function ei(e,t,s,i,l,r){switch(s){case"style":Pi(e,i,r);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(n(61));if(s=i.__html,s!=null){if(l.children!=null)throw Error(n(60));e.innerHTML=s}}break;case"children":typeof i=="string"?de(e,i):(typeof i=="number"||typeof i=="bigint")&&de(e,""+i);break;case"onScroll":i!=null&&r0("scroll",e);break;case"onScrollEnd":i!=null&&r0("scrollend",e);break;case"onClick":i!=null&&(e.onclick=$2);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!Vi.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(l=s.endsWith("Capture"),t=s.slice(2,l?s.length-7:void 0),r=e[d2]||null,r=r!=null?r[s]:null,typeof r=="function"&&e.removeEventListener(t,r,l),typeof i=="function")){typeof r!="function"&&r!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(t,i,l);break e}s in e?e[s]=i:i===!0?e.setAttribute(s,""):Vt(e,s,i)}}}function t2(e,t,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":r0("error",e),r0("load",e);var i=!1,l=!1,r;for(r in s)if(s.hasOwnProperty(r)){var a=s[r];if(a!=null)switch(r){case"src":i=!0;break;case"srcSet":l=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n(137,t));default:A0(e,t,r,a,s,null)}}l&&A0(e,t,"srcSet",s.srcSet,s,null),i&&A0(e,t,"src",s.src,s,null);return;case"input":r0("invalid",e);var u=r=a=l=null,d=null,h=null;for(i in s)if(s.hasOwnProperty(i)){var A=s[i];if(A!=null)switch(i){case"name":l=A;break;case"type":a=A;break;case"checked":d=A;break;case"defaultChecked":h=A;break;case"value":r=A;break;case"defaultValue":u=A;break;case"children":case"dangerouslySetInnerHTML":if(A!=null)throw Error(n(137,t));break;default:A0(e,t,i,A,s,null)}}ki(e,r,u,d,h,a,l,!1);return;case"select":r0("invalid",e),i=a=r=null;for(l in s)if(s.hasOwnProperty(l)&&(u=s[l],u!=null))switch(l){case"value":r=u;break;case"defaultValue":a=u;break;case"multiple":i=u;default:A0(e,t,l,u,s,null)}t=r,s=a,e.multiple=!!i,t!=null?ne(e,!!i,t,!1):s!=null&&ne(e,!!i,s,!0);return;case"textarea":r0("invalid",e),r=l=i=null;for(a in s)if(s.hasOwnProperty(a)&&(u=s[a],u!=null))switch(a){case"value":i=u;break;case"defaultValue":l=u;break;case"children":r=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(n(91));break;default:A0(e,t,a,u,s,null)}Wi(e,i,l,r);return;case"option":for(d in s)if(s.hasOwnProperty(d)&&(i=s[d],i!=null))switch(d){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:A0(e,t,d,i,s,null)}return;case"dialog":r0("beforetoggle",e),r0("toggle",e),r0("cancel",e),r0("close",e);break;case"iframe":case"object":r0("load",e);break;case"video":case"audio":for(i=0;i<At.length;i++)r0(At[i],e);break;case"image":r0("error",e),r0("load",e);break;case"details":r0("toggle",e);break;case"embed":case"source":case"link":r0("error",e),r0("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in s)if(s.hasOwnProperty(h)&&(i=s[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(n(137,t));default:A0(e,t,h,i,s,null)}return;default:if(f4(t)){for(A in s)s.hasOwnProperty(A)&&(i=s[A],i!==void 0&&ei(e,t,A,i,s,void 0));return}}for(u in s)s.hasOwnProperty(u)&&(i=s[u],i!=null&&A0(e,t,u,i,s,null))}function kn(e,t,s,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var l=null,r=null,a=null,u=null,d=null,h=null,A=null;for(T in s){var C=s[T];if(s.hasOwnProperty(T)&&C!=null)switch(T){case"checked":break;case"value":break;case"defaultValue":d=C;default:i.hasOwnProperty(T)||A0(e,t,T,null,i,C)}}for(var g in i){var T=i[g];if(C=s[g],i.hasOwnProperty(g)&&(T!=null||C!=null))switch(g){case"type":r=T;break;case"name":l=T;break;case"checked":h=T;break;case"defaultChecked":A=T;break;case"value":a=T;break;case"defaultValue":u=T;break;case"children":case"dangerouslySetInnerHTML":if(T!=null)throw Error(n(137,t));break;default:T!==C&&A0(e,t,g,T,i,C)}}m4(e,a,u,d,h,A,r,l);return;case"select":T=a=u=g=null;for(r in s)if(d=s[r],s.hasOwnProperty(r)&&d!=null)switch(r){case"value":break;case"multiple":T=d;default:i.hasOwnProperty(r)||A0(e,t,r,null,i,d)}for(l in i)if(r=i[l],d=s[l],i.hasOwnProperty(l)&&(r!=null||d!=null))switch(l){case"value":g=r;break;case"defaultValue":u=r;break;case"multiple":a=r;default:r!==d&&A0(e,t,l,r,i,d)}t=u,s=a,i=T,g!=null?ne(e,!!s,g,!1):!!i!=!!s&&(t!=null?ne(e,!!s,t,!0):ne(e,!!s,s?[]:"",!1));return;case"textarea":T=g=null;for(u in s)if(l=s[u],s.hasOwnProperty(u)&&l!=null&&!i.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:A0(e,t,u,null,i,l)}for(a in i)if(l=i[a],r=s[a],i.hasOwnProperty(a)&&(l!=null||r!=null))switch(a){case"value":g=l;break;case"defaultValue":T=l;break;case"children":break;case"dangerouslySetInnerHTML":if(l!=null)throw Error(n(91));break;default:l!==r&&A0(e,t,a,l,i,r)}Fi(e,g,T);return;case"option":for(var X in s)if(g=s[X],s.hasOwnProperty(X)&&g!=null&&!i.hasOwnProperty(X))switch(X){case"selected":e.selected=!1;break;default:A0(e,t,X,null,i,g)}for(d in i)if(g=i[d],T=s[d],i.hasOwnProperty(d)&&g!==T&&(g!=null||T!=null))switch(d){case"selected":e.selected=g&&typeof g!="function"&&typeof g!="symbol";break;default:A0(e,t,d,g,i,T)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in s)g=s[$],s.hasOwnProperty($)&&g!=null&&!i.hasOwnProperty($)&&A0(e,t,$,null,i,g);for(h in i)if(g=i[h],T=s[h],i.hasOwnProperty(h)&&g!==T&&(g!=null||T!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(g!=null)throw Error(n(137,t));break;default:A0(e,t,h,g,i,T)}return;default:if(f4(t)){for(var O0 in s)g=s[O0],s.hasOwnProperty(O0)&&g!==void 0&&!i.hasOwnProperty(O0)&&ei(e,t,O0,void 0,i,g);for(A in i)g=i[A],T=s[A],!i.hasOwnProperty(A)||g===T||g===void 0&&T===void 0||ei(e,t,A,g,i,T);return}}for(var f in s)g=s[f],s.hasOwnProperty(f)&&g!=null&&!i.hasOwnProperty(f)&&A0(e,t,f,null,i,g);for(C in i)g=i[C],T=s[C],!i.hasOwnProperty(C)||g===T||g==null&&T==null||A0(e,t,C,g,i,T)}function ea(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fn(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,s=performance.getEntriesByType("resource"),i=0;i<s.length;i++){var l=s[i],r=l.transferSize,a=l.initiatorType,u=l.duration;if(r&&u&&ea(a)){for(a=0,u=l.responseEnd,i+=1;i<s.length;i++){var d=s[i],h=d.startTime;if(h>u)break;var A=d.transferSize,C=d.initiatorType;A&&ea(C)&&(d=d.responseEnd,a+=A*(d<u?1:(u-h)/(d-h)))}if(--i,t+=8*(r+a)/(l.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var ti=null,si=null;function Q3(e){return e.nodeType===9?e:e.ownerDocument}function ta(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function sa(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function ii(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var li=null;function Wn(){var e=window.event;return e&&e.type==="popstate"?e===li?!1:(li=e,!0):(li=null,!1)}var ia=typeof setTimeout=="function"?setTimeout:void 0,In=typeof clearTimeout=="function"?clearTimeout:void 0,la=typeof Promise=="function"?Promise:void 0,Pn=typeof queueMicrotask=="function"?queueMicrotask:typeof la<"u"?function(e){return la.resolve(null).then(e).catch(e6)}:ia;function e6(e){setTimeout(function(){throw e})}function C1(e){return e==="head"}function ra(e,t){var s=t,i=0;do{var l=s.nextSibling;if(e.removeChild(s),l&&l.nodeType===8)if(s=l.data,s==="/$"||s==="/&"){if(i===0){e.removeChild(l),Le(t);return}i--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")i++;else if(s==="html")xt(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,xt(s);for(var r=s.firstChild;r;){var a=r.nextSibling,u=r.nodeName;r[Je]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&r.rel.toLowerCase()==="stylesheet"||s.removeChild(r),r=a}}else s==="body"&&xt(e.ownerDocument.body);s=l}while(s);Le(t)}function aa(e,t){var s=e;e=0;do{var i=s.nextSibling;if(s.nodeType===1?t?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(t?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),i&&i.nodeType===8)if(s=i.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=i}while(s)}function ri(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var s=t;switch(t=t.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":ri(s),c4(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function t6(e,t,s,i){for(;e.nodeType===1;){var l=s;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Je])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(r=e.getAttribute("rel"),r==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(r!==l.rel||e.getAttribute("href")!==(l.href==null||l.href===""?null:l.href)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin)||e.getAttribute("title")!==(l.title==null?null:l.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(r=e.getAttribute("src"),(r!==(l.src==null?null:l.src)||e.getAttribute("type")!==(l.type==null?null:l.type)||e.getAttribute("crossorigin")!==(l.crossOrigin==null?null:l.crossOrigin))&&r&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var r=l.name==null?null:""+l.name;if(l.type==="hidden"&&e.getAttribute("name")===r)return e}else return e;if(e=j2(e.nextSibling),e===null)break}return null}function s6(e,t,s){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=j2(e.nextSibling),e===null))return null;return e}function ua(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=j2(e.nextSibling),e===null))return null;return e}function ai(e){return e.data==="$?"||e.data==="$~"}function ui(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function i6(e,t){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||s.readyState!=="loading")t();else{var i=function(){t(),s.removeEventListener("DOMContentLoaded",i)};s.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function j2(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var ni=null;function na(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(t===0)return j2(e.nextSibling);t--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||t++}e=e.nextSibling}return null}function da(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(t===0)return e;t--}else s!=="/$"&&s!=="/&"||t++}e=e.previousSibling}return null}function ca(e,t,s){switch(t=Q3(s),e){case"html":if(e=t.documentElement,!e)throw Error(n(452));return e;case"head":if(e=t.head,!e)throw Error(n(453));return e;case"body":if(e=t.body,!e)throw Error(n(454));return e;default:throw Error(n(451))}}function xt(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);c4(e)}var H2=new Map,oa=new Set;function Z3(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var c1=G.d;G.d={f:l6,r:r6,D:a6,C:u6,L:n6,m:d6,X:o6,S:c6,M:m6};function l6(){var e=c1.f(),t=j3();return e||t}function r6(e){var t=re(e);t!==null&&t.tag===5&&t.type==="form"?x5(t):c1.r(e)}var Be=typeof document>"u"?null:document;function ma(e,t,s){var i=Be;if(i&&typeof t=="string"&&t){var l=O2(t);l='link[rel="'+e+'"][href="'+l+'"]',typeof s=="string"&&(l+='[crossorigin="'+s+'"]'),oa.has(l)||(oa.add(l),e={rel:e,crossOrigin:s,href:t},i.querySelector(l)===null&&(t=i.createElement("link"),t2(t,"link",e),$0(t),i.head.appendChild(t)))}}function a6(e){c1.D(e),ma("dns-prefetch",e,null)}function u6(e,t){c1.C(e,t),ma("preconnect",e,t)}function n6(e,t,s){c1.L(e,t,s);var i=Be;if(i&&e&&t){var l='link[rel="preload"][as="'+O2(t)+'"]';t==="image"&&s&&s.imageSrcSet?(l+='[imagesrcset="'+O2(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(l+='[imagesizes="'+O2(s.imageSizes)+'"]')):l+='[href="'+O2(e)+'"]';var r=l;switch(t){case"style":r=Ye(e);break;case"script":r=Ge(e)}H2.has(r)||(e=q({rel:"preload",href:t==="image"&&s&&s.imageSrcSet?void 0:e,as:t},s),H2.set(r,e),i.querySelector(l)!==null||t==="style"&&i.querySelector(Nt(r))||t==="script"&&i.querySelector(Dt(r))||(t=i.createElement("link"),t2(t,"link",e),$0(t),i.head.appendChild(t)))}}function d6(e,t){c1.m(e,t);var s=Be;if(s&&e){var i=t&&typeof t.as=="string"?t.as:"script",l='link[rel="modulepreload"][as="'+O2(i)+'"][href="'+O2(e)+'"]',r=l;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":r=Ge(e)}if(!H2.has(r)&&(e=q({rel:"modulepreload",href:e},t),H2.set(r,e),s.querySelector(l)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Dt(r)))return}i=s.createElement("link"),t2(i,"link",e),$0(i),s.head.appendChild(i)}}}function c6(e,t,s){c1.S(e,t,s);var i=Be;if(i&&e){var l=ae(i).hoistableStyles,r=Ye(e);t=t||"default";var a=l.get(r);if(!a){var u={loading:0,preload:null};if(a=i.querySelector(Nt(r)))u.loading=5;else{e=q({rel:"stylesheet",href:e,"data-precedence":t},s),(s=H2.get(r))&&di(e,s);var d=a=i.createElement("link");$0(d),t2(d,"link",e),d._p=new Promise(function(h,A){d.onload=h,d.onerror=A}),d.addEventListener("load",function(){u.loading|=1}),d.addEventListener("error",function(){u.loading|=2}),u.loading|=4,V3(a,t,i)}a={type:"stylesheet",instance:a,count:1,state:u},l.set(r,a)}}}function o6(e,t){c1.X(e,t);var s=Be;if(s&&e){var i=ae(s).hoistableScripts,l=Ge(e),r=i.get(l);r||(r=s.querySelector(Dt(l)),r||(e=q({src:e,async:!0},t),(t=H2.get(l))&&ci(e,t),r=s.createElement("script"),$0(r),t2(r,"link",e),s.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function m6(e,t){c1.M(e,t);var s=Be;if(s&&e){var i=ae(s).hoistableScripts,l=Ge(e),r=i.get(l);r||(r=s.querySelector(Dt(l)),r||(e=q({src:e,async:!0,type:"module"},t),(t=H2.get(l))&&ci(e,t),r=s.createElement("script"),$0(r),t2(r,"link",e),s.head.appendChild(r)),r={type:"script",instance:r,count:1,state:null},i.set(l,r))}}function pa(e,t,s,i){var l=(l=j.current)?Z3(l):null;if(!l)throw Error(n(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(t=Ye(s.href),s=ae(l).hoistableStyles,i=s.get(t),i||(i={type:"style",instance:null,count:0,state:null},s.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Ye(s.href);var r=ae(l).hoistableStyles,a=r.get(e);if(a||(l=l.ownerDocument||l,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},r.set(e,a),(r=l.querySelector(Nt(e)))&&!r._p&&(a.instance=r,a.state.loading=5),H2.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},H2.set(e,s),r||p6(l,e,s,a.state))),t&&i===null)throw Error(n(528,""));return a}if(t&&i!==null)throw Error(n(529,""));return null;case"script":return t=s.async,s=s.src,typeof s=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Ge(s),s=ae(l).hoistableScripts,i=s.get(t),i||(i={type:"script",instance:null,count:0,state:null},s.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(n(444,e))}}function Ye(e){return'href="'+O2(e)+'"'}function Nt(e){return'link[rel="stylesheet"]['+e+"]"}function fa(e){return q({},e,{"data-precedence":e.precedence,precedence:null})}function p6(e,t,s,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),t2(t,"link",s),$0(t),e.head.appendChild(t))}function Ge(e){return'[src="'+O2(e)+'"]'}function Dt(e){return"script[async]"+e}function _a(e,t,s){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+O2(s.href)+'"]');if(i)return t.instance=i,$0(i),i;var l=q({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),$0(i),t2(i,"style",l),V3(i,s.precedence,e),t.instance=i;case"stylesheet":l=Ye(s.href);var r=e.querySelector(Nt(l));if(r)return t.state.loading|=4,t.instance=r,$0(r),r;i=fa(s),(l=H2.get(l))&&di(i,l),r=(e.ownerDocument||e).createElement("link"),$0(r);var a=r;return a._p=new Promise(function(u,d){a.onload=u,a.onerror=d}),t2(r,"link",i),t.state.loading|=4,V3(r,s.precedence,e),t.instance=r;case"script":return r=Ge(s.src),(l=e.querySelector(Dt(r)))?(t.instance=l,$0(l),l):(i=s,(l=H2.get(r))&&(i=q({},s),ci(i,l)),e=e.ownerDocument||e,l=e.createElement("script"),$0(l),t2(l,"link",i),e.head.appendChild(l),t.instance=l);case"void":return null;default:throw Error(n(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,V3(i,s.precedence,e));return t.instance}function V3(e,t,s){for(var i=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),l=i.length?i[i.length-1]:null,r=l,a=0;a<i.length;a++){var u=i[a];if(u.dataset.precedence===t)r=u;else if(r!==l)break}r?r.parentNode.insertBefore(e,r.nextSibling):(t=s.nodeType===9?s.head:s,t.insertBefore(e,t.firstChild))}function di(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function ci(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var K3=null;function ha(e,t,s){if(K3===null){var i=new Map,l=K3=new Map;l.set(s,i)}else l=K3,i=l.get(s),i||(i=new Map,l.set(s,i));if(i.has(e))return i;for(i.set(e,null),s=s.getElementsByTagName(e),l=0;l<s.length;l++){var r=s[l];if(!(r[Je]||r[W0]||e==="link"&&r.getAttribute("rel")==="stylesheet")&&r.namespaceURI!=="http://www.w3.org/2000/svg"){var a=r.getAttribute(t)||"";a=e+a;var u=i.get(a);u?u.push(r):i.set(a,[r])}}return i}function ya(e,t,s){e=e.ownerDocument||e,e.head.insertBefore(s,t==="title"?e.querySelector("head > title"):null)}function f6(e,t,s){if(s===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function va(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function _6(e,t,s,i){if(s.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var l=Ye(i.href),r=t.querySelector(Nt(l));if(r){t=r._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=J3.bind(e),t.then(e,e)),s.state.loading|=4,s.instance=r,$0(r);return}r=t.ownerDocument||t,i=fa(i),(l=H2.get(l))&&di(i,l),r=r.createElement("link"),$0(r);var a=r;a._p=new Promise(function(u,d){a.onload=u,a.onerror=d}),t2(r,"link",i),s.instance=r}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,t),(t=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=J3.bind(e),t.addEventListener("load",s),t.addEventListener("error",s))}}var oi=0;function h6(e,t){return e.stylesheets&&e.count===0&&$3(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var i=setTimeout(function(){if(e.stylesheets&&$3(e,e.stylesheets),e.unsuspend){var r=e.unsuspend;e.unsuspend=null,r()}},6e4+t);0<e.imgBytes&&oi===0&&(oi=62500*Fn());var l=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$3(e,e.stylesheets),e.unsuspend)){var r=e.unsuspend;e.unsuspend=null,r()}},(e.imgBytes>oi?50:800)+t);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(l)}}:null}function J3(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$3(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var w3=null;function $3(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,w3=new Map,t.forEach(y6,e),w3=null,J3.call(e))}function y6(e,t){if(!(t.state.loading&4)){var s=w3.get(e);if(s)var i=s.get(null);else{s=new Map,w3.set(e,s);for(var l=e.querySelectorAll("link[data-precedence],style[data-precedence]"),r=0;r<l.length;r++){var a=l[r];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(s.set(a.dataset.precedence,a),i=a)}i&&s.set(null,i)}l=t.instance,a=l.getAttribute("data-precedence"),r=s.get(a)||i,r===i&&s.set(null,l),s.set(a,l),this.count++,i=J3.bind(this),l.addEventListener("load",i),l.addEventListener("error",i),r?r.parentNode.insertBefore(l,r.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(l,e.firstChild)),t.state.loading|=4}}var Ct={$$typeof:_0,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function v6(e,t,s,i,l,r,a,u,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=a4(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=a4(0),this.hiddenUpdates=a4(null),this.identifierPrefix=i,this.onUncaughtError=l,this.onCaughtError=r,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function ga(e,t,s,i,l,r,a,u,d,h,A,C){return e=new v6(e,t,s,a,d,h,A,C,u),t=1,r===!0&&(t|=24),r=S2(3,null,null,t),e.current=r,r.stateNode=e,t=V4(),t.refCount++,e.pooledCache=t,t.refCount++,r.memoizedState={element:i,isDehydrated:s,cache:t},$4(r),e}function Sa(e){return e?(e=he,e):he}function Ta(e,t,s,i,l,r){l=Sa(l),i.context===null?i.context=l:i.pendingContext=l,i=S1(t),i.payload={element:s},r=r===void 0?null:r,r!==null&&(i.callback=r),s=T1(e,i,t),s!==null&&(_2(s,e,t),dt(s,e,t))}function ba(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function mi(e,t){ba(e,t),(e=e.alternate)&&ba(e,t)}function za(e){if(e.tag===13||e.tag===31){var t=Q1(e,67108864);t!==null&&_2(t,e,67108864),mi(e,67108864)}}function Ea(e){if(e.tag===13||e.tag===31){var t=M2();t=u4(t);var s=Q1(e,t);s!==null&&_2(s,e,t),mi(e,t)}}var k3=!0;function g6(e,t,s,i){var l=E.T;E.T=null;var r=G.p;try{G.p=2,pi(e,t,s,i)}finally{G.p=r,E.T=l}}function S6(e,t,s,i){var l=E.T;E.T=null;var r=G.p;try{G.p=8,pi(e,t,s,i)}finally{G.p=r,E.T=l}}function pi(e,t,s,i){if(k3){var l=fi(i);if(l===null)Ps(e,t,i,F3,s),Aa(e,i);else if(b6(l,e,t,s,i))i.stopPropagation();else if(Aa(e,i),t&4&&-1<T6.indexOf(e)){for(;l!==null;){var r=re(l);if(r!==null)switch(r.tag){case 3:if(r=r.stateNode,r.current.memoizedState.isDehydrated){var a=B1(r.pendingLanes);if(a!==0){var u=r;for(u.pendingLanes|=2,u.entangledLanes|=2;a;){var d=1<<31-v2(a);u.entanglements[1]|=d,a&=~d}K2(r),(S0&6)===0&&(U3=h2()+500,Mt(0))}}break;case 31:case 13:u=Q1(r,2),u!==null&&_2(u,r,2),j3(),mi(r,2)}if(r=fi(i),r===null&&Ps(e,t,i,F3,s),r===l)break;l=r}l!==null&&i.stopPropagation()}else Ps(e,t,i,null,s)}}function fi(e){return e=h4(e),_i(e)}var F3=null;function _i(e){if(F3=null,e=le(e),e!==null){var t=O(e);if(t===null)e=null;else{var s=t.tag;if(s===13){if(e=M(t),e!==null)return e;e=null}else if(s===31){if(e=B(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return F3=e,null}function Ma(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(ru()){case Ri:return 2;case ji:return 8;case Gt:case au:return 32;case Hi:return 268435456;default:return 32}default:return 32}}var hi=!1,U1=null,R1=null,j1=null,Ut=new Map,Rt=new Map,H1=[],T6="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function Aa(e,t){switch(e){case"focusin":case"focusout":U1=null;break;case"dragenter":case"dragleave":R1=null;break;case"mouseover":case"mouseout":j1=null;break;case"pointerover":case"pointerout":Ut.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(t.pointerId)}}function jt(e,t,s,i,l,r){return e===null||e.nativeEvent!==r?(e={blockedOn:t,domEventName:s,eventSystemFlags:i,nativeEvent:r,targetContainers:[l]},t!==null&&(t=re(t),t!==null&&za(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,l!==null&&t.indexOf(l)===-1&&t.push(l),e)}function b6(e,t,s,i,l){switch(t){case"focusin":return U1=jt(U1,e,t,s,i,l),!0;case"dragenter":return R1=jt(R1,e,t,s,i,l),!0;case"mouseover":return j1=jt(j1,e,t,s,i,l),!0;case"pointerover":var r=l.pointerId;return Ut.set(r,jt(Ut.get(r)||null,e,t,s,i,l)),!0;case"gotpointercapture":return r=l.pointerId,Rt.set(r,jt(Rt.get(r)||null,e,t,s,i,l)),!0}return!1}function Oa(e){var t=le(e.target);if(t!==null){var s=O(t);if(s!==null){if(t=s.tag,t===13){if(t=M(s),t!==null){e.blockedOn=t,Xi(e.priority,function(){Ea(s)});return}}else if(t===31){if(t=B(s),t!==null){e.blockedOn=t,Xi(e.priority,function(){Ea(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function W3(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=fi(e.nativeEvent);if(s===null){s=e.nativeEvent;var i=new s.constructor(s.type,s);_4=i,s.target.dispatchEvent(i),_4=null}else return t=re(s),t!==null&&za(t),e.blockedOn=s,!1;t.shift()}return!0}function xa(e,t,s){W3(e)&&s.delete(t)}function z6(){hi=!1,U1!==null&&W3(U1)&&(U1=null),R1!==null&&W3(R1)&&(R1=null),j1!==null&&W3(j1)&&(j1=null),Ut.forEach(xa),Rt.forEach(xa)}function I3(e,t){e.blockedOn===t&&(e.blockedOn=null,hi||(hi=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,z6)))}var P3=null;function Na(e){P3!==e&&(P3=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){P3===e&&(P3=null);for(var t=0;t<e.length;t+=3){var s=e[t],i=e[t+1],l=e[t+2];if(typeof i!="function"){if(_i(i||s)===null)continue;break}var r=re(s);r!==null&&(e.splice(t,3),t-=3,fs(r,{pending:!0,data:l,method:s.method,action:i},i,l))}}))}function Le(e){function t(d){return I3(d,e)}U1!==null&&I3(U1,e),R1!==null&&I3(R1,e),j1!==null&&I3(j1,e),Ut.forEach(t),Rt.forEach(t);for(var s=0;s<H1.length;s++){var i=H1[s];i.blockedOn===e&&(i.blockedOn=null)}for(;0<H1.length&&(s=H1[0],s.blockedOn===null);)Oa(s),s.blockedOn===null&&H1.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(i=0;i<s.length;i+=3){var l=s[i],r=s[i+1],a=l[d2]||null;if(typeof r=="function")a||Na(s);else if(a){var u=null;if(r&&r.hasAttribute("formAction")){if(l=r,a=r[d2]||null)u=a.formAction;else if(_i(l)!==null)continue}else u=a.action;typeof u=="function"?s[i+1]=u:(s.splice(i,3),i-=3),Na(s)}}}function Da(){function e(r){r.canIntercept&&r.info==="react-transition"&&r.intercept({handler:function(){return new Promise(function(a){return l=a})},focusReset:"manual",scroll:"manual"})}function t(){l!==null&&(l(),l=null),i||setTimeout(s,20)}function s(){if(!i&&!navigation.transition){var r=navigation.currentEntry;r&&r.url!=null&&navigation.navigate(r.url,{state:r.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,l=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(s,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),l!==null&&(l(),l=null)}}}function yi(e){this._internalRoot=e}e4.prototype.render=yi.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(n(409));var s=t.current,i=M2();Ta(s,i,e,t,null,null)},e4.prototype.unmount=yi.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Ta(e.current,2,null,e,null,null),j3(),t[ie]=null}};function e4(e){this._internalRoot=e}e4.prototype.unstable_scheduleHydration=function(e){if(e){var t=Li();e={blockedOn:null,target:e,priority:t};for(var s=0;s<H1.length&&t!==0&&t<H1[s].priority;s++);H1.splice(s,0,e),s===0&&Oa(e)}};var Ca=p.version;if(Ca!=="19.2.7")throw Error(n(527,Ca,"19.2.7"));G.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(n(188)):(e=Object.keys(e).join(","),Error(n(268,e)));return e=S(t),e=e!==null?Y(e):null,e=e===null?null:e.stateNode,e};var E6={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:E,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var t4=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t4.isDisabled&&t4.supportsFiber)try{Ze=t4.inject(E6),y2=t4}catch{}}return qt.createRoot=function(e,t){if(!z(e))throw Error(n(299));var s=!1,i="",l=Y5,r=G5,a=L5;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(l=t.onUncaughtError),t.onCaughtError!==void 0&&(r=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=ga(e,1,!1,null,null,s,i,null,l,r,a,Da),e[ie]=t.current,Is(e),new yi(t)},qt.hydrateRoot=function(e,t,s){if(!z(e))throw Error(n(299));var i=!1,l="",r=Y5,a=G5,u=L5,d=null;return s!=null&&(s.unstable_strictMode===!0&&(i=!0),s.identifierPrefix!==void 0&&(l=s.identifierPrefix),s.onUncaughtError!==void 0&&(r=s.onUncaughtError),s.onCaughtError!==void 0&&(a=s.onCaughtError),s.onRecoverableError!==void 0&&(u=s.onRecoverableError),s.formState!==void 0&&(d=s.formState)),t=ga(e,1,!0,t,s??null,i,l,d,r,a,u,Da),t.context=Sa(null),s=t.current,i=M2(),i=u4(i),l=S1(i),l.callback=null,T1(s,l,i),s=i,t.current.lanes=s,Ke(t,s),K2(t),e[ie]=t.current,Is(e),new e4(t)},qt.version="19.2.7",qt}var Xa;function j6(){if(Xa)return Si.exports;Xa=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(p){console.error(p)}}return c(),Si.exports=R6(),Si.exports}var H6=j6();const Di={power655:{id:"power655",label:"Power 6/55",shortLabel:"6/55",maxNumber:55,pickCount:6,totalCombinations:28989675,dataFileName:"power655.jsonl",prizeByMatch:{3:5e4,4:5e5,5:5e9,6:4e10}},power645:{id:"power645",label:"Power 6/45",shortLabel:"6/45",maxNumber:45,pickCount:6,totalCombinations:8145060,dataFileName:"power645.jsonl",prizeByMatch:{3:3e4,4:3e5,5:1e7,6:12e9}}},q6="power655",B6=Object.values(Di),r4=Di.power655,Qa=new Map;function Wa(c,p){if(p<0||p>c)return 0;if(p===0||p===c)return 1;const y=Math.min(p,c-p),n=`${c}:${y}`,z=Qa.get(n);if(z!==void 0)return z;let O=1;for(let B=1;B<=y;B+=1)O=O*(c-y+B)/B;const M=Math.round(O);return Qa.set(n,M),M}function Qe(c){return[...c].sort((p,y)=>p-y)}function Ci(c,p=r4){return c.length!==p.pickCount||new Set(c).size!==p.pickCount?!1:c.every(n=>Number.isInteger(n)&&n>=1&&n<=p.maxNumber)}function te(c,p=r4){const y=Qe(c);if(!Ci(y,p))throw new Error(`Combination must contain ${p.pickCount} unique integers from 1 to ${p.maxNumber}.`);let n=0,z=0;for(let O=0;O<p.pickCount;O+=1){const M=y[O];for(let B=z+1;B<M;B+=1)n+=Wa(p.maxNumber-B,p.pickCount-O-1);z=M}return n}function l4(c,p=r4){if(!Number.isInteger(c)||c<0||c>=p.totalCombinations)throw new Error(`Index must be an integer from 0 to ${p.totalCombinations-1}.`);const y=[];let n=c,z=0;for(let O=0;O<p.pickCount;O+=1)for(let M=z+1;M<=p.maxNumber;M+=1){const B=Wa(p.maxNumber-M,p.pickCount-O-1);if(n<B){y.push(M),z=M;break}n-=B}return y}function o1(c){return c.map(p=>String(p).padStart(2,"0")).join(" ")}function Y6(c){return c.trim().split(/[\s,;-]+/).filter(Boolean).map(y=>Number(y))}function Xe(c=r4){const p=Array.from({length:c.maxNumber},(y,n)=>n+1);for(let y=p.length-1;y>0;y-=1){const n=Math.floor(Math.random()*(y+1));[p[y],p[n]]=[p[n],p[y]]}return Qe(p.slice(0,c.pickCount))}const u2=5500,s4=4,Ei=1;function Za(c,p,y,n,z){const O=c%u2,M=Math.floor(c/u2);return O>=p&&O<=y&&M>=n&&M<=z}function G6({product:c,importedIndexes:p,selectedIndexes:y,randomIndex:n,focusRequest:z,mode:O,zoom:M,onZoomChange:B,onSelect:U}){const S=P.useRef(null),Y=P.useRef(null),q=P.useRef(null),Q=P.useRef(null),f0=P.useRef(0),x0=P.useRef(null),s0=P.useRef(s4*M+Ei),b0=P.useRef(null),n0=P.useRef(null),c0=P.useRef({importedIndexes:p,selectedIndexes:y,importedList:[],selectedList:[],randomIndex:n,mode:O,cellSize:s4*M,stride:s4*M+Ei,width:0,height:0,dpr:window.devicePixelRatio||1,hoverIndex:null}),_0=s4*M,t0=_0+Ei,Y0=Math.ceil(c.totalCombinations/u2),G0=u2*t0,W=Y0*t0,H0=P.useMemo(()=>[...p],[p]),C0=P.useMemo(()=>[...y],[y]);function J0(v,x,H,j,b,L,Z,k,m0){v.fillStyle=H;const N0=Math.max(1,k.cellSize);for(const i0 of x){if(!Za(i0,j,b,L,Z))continue;const p0=i0%u2,i2=Math.floor(i0/u2);v.fillRect(p0*k.stride-m0.scrollLeft,i2*k.stride-m0.scrollTop,N0,N0)}}function o0(){const v=q.current,x=Y.current,H=v==null?void 0:v.getContext("2d");if(!v||!x||!H)return;const j=c0.current,b=j.width,L=j.height;if(b===0||L===0)return;H.setTransform(j.dpr,0,0,j.dpr,0,0),H.clearRect(0,0,b,L),H.fillStyle="#121417",H.fillRect(0,0,b,L);const Z=Math.max(0,Math.floor(x.scrollLeft/j.stride)),k=Math.min(u2-1,Math.ceil((x.scrollLeft+b)/j.stride)),m0=Math.max(0,Math.floor(x.scrollTop/j.stride)),N0=Math.min(Y0-1,Math.ceil((x.scrollTop+L)/j.stride)),i0=k-Z+1,p0=N0-m0+1,i2=j.mode==="heatmap"?"#303338":"#2b2b2b";H.fillStyle=i2;const q2=Math.max(1,j.cellSize);for(let n2=0;n2<p0;n2+=1){const J2=m0+n2,L2=J2*j.stride-x.scrollTop;for(let X2=0;X2<i0;X2+=1){const se=Z+X2;if(J2*u2+se>=c.totalCombinations)break;H.fillRect(se*j.stride-x.scrollLeft,L2,q2,q2)}}if(J0(H,j.importedList,j.mode==="heatmap"?"#ff6b5f":"#ee3f46",Z,k,m0,N0,j,x),J0(H,j.selectedList,"#27a7ff",Z,k,m0,N0,j,x),j.randomIndex!==null&&J0(H,[j.randomIndex],"#f7c948",Z,k,m0,N0,j,x),j.cellSize>=22){H.fillStyle="#d8dde6",H.font="10px Inter, system-ui, sans-serif";for(let n2=m0;n2<=N0;n2+=1){const J2=n2*j.stride-x.scrollTop;for(let L2=Z;L2<=k;L2+=1){const X2=n2*u2+L2;if(X2>=c.totalCombinations)break;H.fillText(o1(l4(X2,c)),L2*j.stride-x.scrollLeft+3,J2+14)}}}if(j.hoverIndex!==null&&Za(j.hoverIndex,Z,k,m0,N0)){const n2=j.hoverIndex%u2,J2=Math.floor(j.hoverIndex/u2);H.strokeStyle="#ffffff",H.lineWidth=1,H.strokeRect(n2*j.stride-x.scrollLeft-1,J2*j.stride-x.scrollTop-1,j.cellSize+2,j.cellSize+2)}}function T0(){cancelAnimationFrame(f0.current),f0.current=requestAnimationFrame(o0)}function K(v){return Math.min(10,Math.max(.55,Number(v.toFixed(2))))}function F0(v,x,H){const j=Y.current;if(!j){B(K(v));return}b0.current={xRatio:(j.scrollLeft+x)/t0,yRatio:(j.scrollTop+H)/t0,viewportX:x,viewportY:H},B(K(v))}P.useEffect(()=>{const v=Y.current;if(v&&s0.current!==t0){const x=b0.current??{xRatio:(v.scrollLeft+v.clientWidth/2)/s0.current,yRatio:(v.scrollTop+v.clientHeight/2)/s0.current,viewportX:v.clientWidth/2,viewportY:v.clientHeight/2};v.scrollLeft=Math.max(0,x.xRatio*t0-x.viewportX),v.scrollTop=Math.max(0,x.yRatio*t0-x.viewportY),s0.current=t0,b0.current=null}c0.current={...c0.current,importedIndexes:p,selectedIndexes:y,importedList:H0,selectedList:C0,randomIndex:n,mode:O,cellSize:_0,stride:t0},T0()},[_0,p,H0,O,c,n,Y0,y,C0,t0]),P.useEffect(()=>{const v=q.current,x=Y.current,H=S.current;if(!v||!x||!H)return;const j=v,b=H;function L(){const k=b.getBoundingClientRect(),m0=window.devicePixelRatio||1;x0.current=k,c0.current.width=k.width,c0.current.height=k.height,c0.current.dpr=m0,j.width=Math.floor(k.width*m0),j.height=Math.floor(k.height*m0),j.style.width=`${k.width}px`,j.style.height=`${k.height}px`,T0()}const Z=new ResizeObserver(L);return Z.observe(b),x.addEventListener("scroll",T0,{passive:!0}),L(),()=>{cancelAnimationFrame(f0.current),Z.disconnect(),x.removeEventListener("scroll",T0)}},[c,Y0]),P.useEffect(()=>{const v=Y.current;if(!v||z===null)return;const x=requestAnimationFrame(()=>{const H=Math.floor(z.index/u2),j=z.index%u2,b=Math.max(0,v.scrollWidth-v.clientWidth),L=Math.max(0,v.scrollHeight-v.clientHeight),Z=Math.min(b,Math.max(0,j*t0+_0/2-v.clientWidth/2)),k=Math.min(L,Math.max(0,H*t0+_0/2-v.clientHeight/2));c0.current.hoverIndex=z.index,v.scrollTo({left:Z,top:k,behavior:"smooth"}),T0()});return()=>cancelAnimationFrame(x)},[_0,z,t0]);function s2(v){var m0;const x=Y.current,H=x0.current??((m0=S.current)==null?void 0:m0.getBoundingClientRect());if(!H||!x)return null;const j=v.clientX-H.left+x.scrollLeft,b=v.clientY-H.top+x.scrollTop,L=Math.floor(j/t0),Z=Math.floor(b/t0);if(L<0||L>=u2||Z<0||Z>=Y0)return null;const k=Z*u2+L;return k>=c.totalCombinations?null:k}function E(v,x){const H=Q.current,j=c0.current.hoverIndex;if(c0.current.hoverIndex=x,!H||x===null){H&&(H.hidden=!0),j!==null&&T0();return}H.hidden=!1,H.style.transform=`translate(${v.clientX+14}px, ${v.clientY+14}px)`,j!==x&&(H.textContent=`#${x.toLocaleString("en-US")} - ${o1(l4(x,c))}`,T0())}function G(v){const x=Y.current,H=n0.current;if(H!=null&&H.active&&x){x.scrollLeft=H.left-(v.clientX-H.x),x.scrollTop=H.top-(v.clientY-H.y);return}E(v,s2(v))}function w(v){const x=Y.current;!x||v.button!==0||(n0.current={x:v.clientX,y:v.clientY,left:x.scrollLeft,top:x.scrollTop,active:!1},v.currentTarget.setPointerCapture(v.pointerId))}function h0(v){const x=n0.current,H=x?Math.abs(v.clientX-x.x)+Math.abs(v.clientY-x.y):0;if(n0.current=null,H>8)return;const j=s2(v);j!==null&&U(j)}function g0(){n0.current=null,c0.current.hoverIndex=null,Q.current&&(Q.current.hidden=!0),T0()}function m(v){var H;const x=Y.current;if(x){if(v.preventDefault(),v.ctrlKey||v.metaKey){const j=x0.current??((H=S.current)==null?void 0:H.getBoundingClientRect());if(!j)return;const b=v.deltaY<0?1.18:1/1.18;F0(M*b,v.clientX-j.left,v.clientY-j.top);return}x.scrollLeft+=v.shiftKey?v.deltaY:v.deltaX,x.scrollTop+=v.shiftKey?v.deltaX:v.deltaY}}P.useEffect(()=>{const v=q.current;if(v)return v.addEventListener("wheel",m,{passive:!1}),()=>v.removeEventListener("wheel",m)},[M,t0]);function D(v){n0.current&&Math.abs(v.clientX-n0.current.x)+Math.abs(v.clientY-n0.current.y)>8&&(n0.current.active=!0),G(v)}return R.jsxs("div",{className:"grid-wrapper",ref:S,children:[R.jsx("div",{className:"grid-scroller",ref:Y,children:R.jsx("div",{style:{width:G0,height:W}})}),R.jsx("canvas",{ref:q,className:"grid-canvas",onPointerDown:w,onPointerMove:D,onPointerUp:h0,onPointerLeave:g0}),R.jsx("div",{ref:Q,className:"tooltip",hidden:!0})]})}function L6({inputRef:c,onFileChange:p}){return R.jsx("input",{ref:c,className:"hidden-input",type:"file",accept:".csv,.json,.jsonl,application/json,text/csv,text/plain",onChange:p})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const X6=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),Ia=(...c)=>c.filter((p,y,n)=>!!p&&p.trim()!==""&&n.indexOf(p)===y).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Q6={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Z6=P.forwardRef(({color:c="currentColor",size:p=24,strokeWidth:y=2,absoluteStrokeWidth:n,className:z="",children:O,iconNode:M,...B},U)=>P.createElement("svg",{ref:U,...Q6,width:p,height:p,stroke:c,strokeWidth:n?Number(y)*24/Number(p):y,className:Ia("lucide",z),...B},[...M.map(([S,Y])=>P.createElement(S,Y)),...Array.isArray(O)?O:[O]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const r2=(c,p)=>{const y=P.forwardRef(({className:n,...z},O)=>P.createElement(Z6,{ref:O,iconNode:p,className:Ia(`lucide-${X6(c)}`,n),...z}));return y.displayName=`${c}`,y};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Va=r2("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const V6=r2("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=r2("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const J6=r2("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const w6=r2("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $6=r2("Grid2x2",[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const k6=r2("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const F6=r2("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const W6=r2("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const I6=r2("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const P6=r2("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=r2("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=r2("ThermometerSun",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=r2("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=r2("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=r2("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);function rd({onLogin:c}){const[p,y]=P.useState(""),[n,z]=P.useState(""),[O,M]=P.useState("");function B(U){U.preventDefault();const S=p.trim();if(!S||!n.trim()){M("Nhap du username va password.");return}M(""),c(S)}return R.jsx("main",{className:"login-shell",children:R.jsxs("section",{className:"login-panel",children:[R.jsxs("div",{className:"login-brand",children:[R.jsx("p",{className:"eyebrow",children:"Vietlott Power 6/55"}),R.jsx("h1",{children:"Combination Space"})]}),R.jsxs("form",{className:"login-form",onSubmit:B,children:[R.jsxs("label",{className:"field-row",children:[R.jsx(id,{size:18}),R.jsx("input",{autoComplete:"username",placeholder:"Username",value:p,onChange:U=>y(U.target.value)})]}),R.jsxs("label",{className:"field-row",children:[R.jsx(k6,{size:18}),R.jsx("input",{autoComplete:"current-password",placeholder:"Password",type:"password",value:n,onChange:U=>z(U.target.value)})]}),O&&R.jsx("p",{className:"login-error",children:O}),R.jsxs("button",{className:"primary login-submit",type:"submit",children:[R.jsx(F6,{size:17}),"Login"]})]})]})})}function ad({entries:c}){return R.jsxs("section",{className:"panel log-panel",children:[R.jsx("h2",{children:"Log"}),R.jsx("div",{className:"log-list",children:c.length===0?R.jsx("p",{className:"empty-state",children:"Chưa có hành động."}):c.map(p=>R.jsxs("div",{className:`log-entry ${p.level}`,children:[R.jsx("time",{children:p.at}),R.jsx("span",{children:p.message})]},p.id))})]})}function ud({value:c,onChange:p}){return R.jsxs("label",{className:"product-selector",children:[R.jsx("span",{children:"Product"}),R.jsx("select",{value:c,onChange:y=>p(y.target.value),children:B6.map(y=>R.jsx("option",{value:y.id,children:y.label},y.id))})]})}function nd({onSearch:c}){const[p,y]=P.useState("");function n(z){z.preventDefault(),c(p)}return R.jsxs("form",{className:"search-box",onSubmit:n,children:[R.jsx(P6,{size:17}),R.jsx("input",{"aria-label":"Search combination",placeholder:"07 13 22 31 44 52",value:p,onChange:z=>y(z.target.value)}),R.jsx("button",{type:"submit",children:"Search Combination"})]})}function dd({product:c,importedCount:p,selectedCount:y}){const n=p/c.totalCombinations*100;return R.jsxs("section",{className:"panel stats-panel",children:[R.jsx("h2",{children:"Thống kê"}),R.jsxs("div",{className:"stat-row",children:[R.jsx("span",{children:"Tổng tổ hợp"}),R.jsx("strong",{children:c.totalCombinations.toLocaleString("en-US")})]}),R.jsxs("div",{className:"stat-row",children:[R.jsx("span",{children:"Đã xuất hiện"}),R.jsx("strong",{children:p.toLocaleString("en-US")})]}),R.jsxs("div",{className:"stat-row",children:[R.jsx("span",{children:"Đã chọn"}),R.jsx("strong",{children:y.toLocaleString("en-US")})]}),R.jsxs("div",{className:"stat-row",children:[R.jsx("span",{children:"Tỷ lệ phủ"}),R.jsxs("strong",{children:[n.toFixed(6),"%"]})]}),R.jsxs("div",{className:"legend",children:[R.jsxs("span",{children:[R.jsx("i",{className:"swatch gray"})," Gray"]}),R.jsxs("span",{children:[R.jsx("i",{className:"swatch red"})," Red"]}),R.jsxs("span",{children:[R.jsx("i",{className:"swatch blue"})," Blue"]}),R.jsxs("span",{children:[R.jsx("i",{className:"swatch yellow"})," Yellow"]})]})]})}function cd({mode:c,zoom:p,onImportClick:y,onClearImported:n,onClearSelected:z,onExportSelected:O,onRandomPick:M,onCalculatedPick:B,onBacktestPick:U,onStatTest:S,onResetView:Y,onToggleMode:q,onZoomIn:Q,onZoomOut:f0}){return R.jsxs("div",{className:"toolbar",children:[R.jsxs("button",{className:"primary",onClick:y,title:"Import Data",children:[R.jsx(sd,{size:16}),"Import Data"]}),R.jsxs("button",{onClick:n,title:"Clear Imported Data",children:[R.jsx(w6,{size:16}),"Clear Imported"]}),R.jsxs("button",{onClick:z,title:"Clear Selected Cells",children:[R.jsx(W6,{size:16}),"Clear Selected"]}),R.jsxs("button",{onClick:O,title:"Export Selected Cells",children:[R.jsx(J6,{size:16}),"Export Selected"]}),R.jsxs("button",{onClick:M,title:"Random Pick",children:[R.jsx(ed,{size:16}),"Random Pick"]}),R.jsxs("button",{onClick:B,title:"Calculated Pick",children:[R.jsx(V6,{size:16}),"Calculated Pick"]}),R.jsxs("button",{onClick:U,title:"Replay Backtest",children:[R.jsx(Va,{size:16}),"Backtest"]}),R.jsxs("button",{onClick:S,title:"Random Monte Carlo Statistical Test",children:[R.jsx(Va,{size:16}),"Stat Test"]}),R.jsxs("button",{onClick:Y,title:"Reset View",children:[R.jsx(I6,{size:16}),"Reset View"]}),R.jsxs("button",{onClick:q,title:"Toggle Grid / Heatmap Mode",children:[c==="grid"?R.jsx(td,{size:16}):R.jsx($6,{size:16}),c==="grid"?"Heatmap":"Grid"]}),R.jsxs("button",{onClick:Q,title:"Zoom In",children:[R.jsx(ld,{size:16}),"Zoom In"]}),R.jsxs("button",{onClick:f0,title:"Zoom Out",children:[R.jsx(K6,{size:16}),"Zoom Out"]}),R.jsxs("span",{className:"zoom-readout",title:"Current grid zoom",children:[Math.round(p*100),"%"]})]})}const od=12345,md=.18;function Pa(c,p){return`${c}:${p}`}function pd(c,p){const y=Array.from({length:p.maxNumber+1},()=>0),n=new Map;for(const z of c){const O=l4(z,p);for(const M of O)y[M]+=1;for(let M=0;M<O.length;M+=1)for(let B=M+1;B<O.length;B+=1){const U=Pa(O[M],O[B]);n.set(U,(n.get(U)??0)+1)}}return{numberFrequency:y,pairFrequency:n,maxNumberFrequency:Math.max(1,...y),maxPairFrequency:Math.max(1,...n.values())}}function fd(c,p,y){let n=0;for(const q of c)n+=p.numberFrequency[q];let z=0,O=0;for(let q=0;q<c.length;q+=1)for(let Q=q+1;Q<c.length;Q+=1)z+=p.pairFrequency.get(Pa(c[q],c[Q]))??0,O+=1;const M=n/y.pickCount,B=z/O,U=1-M/p.maxNumberFrequency,S=1-B/p.maxPairFrequency,Y=(c[c.length-1]-c[0])/(y.maxNumber-1);return{score:U*.58+S*.34+Y*.08+Math.random()*1e-4,averageNumberFrequency:M,averagePairFrequency:B}}function _d(c,p,y,n){if(p.length===0||y<=0)return 0;const z=new Set(c);return Math.max(...p.map(M=>M.filter(B=>z.has(B)).length))/n.pickCount*y}function eu(c,p,y=od,n={}){if(c.size===0){const s0=Xe(p);return{numbers:s0,index:te(s0,p),score:0,baseScore:0,diversityPenalty:0,candidateCount:1,averageNumberFrequency:0,averagePairFrequency:0}}const z=pd(c,p),O=n.diversityMemory??[],M=n.diversityPenaltyWeight??md;let B=Xe(p),U=te(B,p),S=Number.NEGATIVE_INFINITY,Y=Number.NEGATIVE_INFINITY,q=0,Q=0,f0=0;const x0=new Set;for(let s0=0;s0<y;s0+=1){const b0=Xe(p),n0=te(b0,p);if(x0.has(n0)||c.has(n0))continue;x0.add(n0);const c0=fd(b0,z,p),_0=_d(b0,O,M,p),t0=c0.score-_0;t0>S&&(B=b0,U=n0,S=t0,Y=c0.score,q=_0,Q=c0.averageNumberFrequency,f0=c0.averagePairFrequency)}return{numbers:B,index:U,score:S,baseScore:Y,diversityPenalty:q,candidateCount:x0.size,averageNumberFrequency:Q,averagePairFrequency:f0}}function tu(c,p,y){const n=Qe(c);return Ci(n,y)?{index:te(n,y),numbers:n,source:p}:`${p}: bộ số không hợp lệ (${c.join(", ")})`}function Ka(c,p){const y=[],n=[];return c.split(/\r?\n/).map(O=>O.trim()).filter(Boolean).forEach((O,M)=>{const B=O.split(",").map(Q=>Q.trim());if(M===0&&B.some(Q=>/[a-z_]/i.test(Q)))return;const S=B.map(Q=>Number(Q)),Y=S.length>=p.pickCount+1?S.slice(1,p.pickCount+1):S.slice(0,p.pickCount);if(Y.some(Q=>!Number.isFinite(Q))){n.push(`CSV dòng ${M+1}: không đọc được số.`);return}const q=tu(Y,`CSV dòng ${M+1}`,p);if(typeof q=="string"){n.push(q);return}y.push(q)}),{combinations:y,errors:n}}function Ja(c,p){const y=[],n=[],z=c.trim();if(!z)return{combinations:y,errors:n};const O=[];try{const M=JSON.parse(z);O.push(...Array.isArray(M)?M:[M])}catch{z.split(/\r?\n/).forEach((M,B)=>{if(M.trim())try{O.push(JSON.parse(M))}catch{n.push(`JSON dòng ${B+1}: lỗi định dạng.`)}})}return O.forEach((M,B)=>{let U;if(Array.isArray(M))U=M.map(Y=>Number(Y)).slice(0,p.pickCount);else if(M&&typeof M=="object"){const Y=M.result??M.numbers;Array.isArray(Y)&&(U=Y.map(q=>Number(q)).slice(0,p.pickCount))}if(!U){n.push(`JSON bản ghi ${B+1}: không tìm thấy mảng result/numbers.`);return}const S=tu(U,`JSON bản ghi ${B+1}`,p);if(typeof S=="string"){n.push(S);return}y.push(S)}),{combinations:y,errors:n}}function wa(c,p,y){const n=p.toLowerCase();if(n.endsWith(".csv"))return Ka(c,y);if(n.endsWith(".json")||n.endsWith(".jsonl"))return Ja(c,y);const z=Ka(c,y);return z.combinations.length>0?z:Ja(c,y)}const $a=["Random","Frequency Weighted","Hot Numbers","Cold Numbers","Delay","Pair Frequency","Triple Frequency","Your Algorithm"];function xi(c,p){return c<p?`${c}:${p}`:`${p}:${c}`}function su(c,p,y){return[c,p,y].sort((n,z)=>n-z).join(":")}function hd(c,p){return{name:c,distribution:Array.from({length:p.pickCount+1},()=>0),totalMatches:0,exactHits:0,bestMatch:-1,totalRevenue:0,bestPrediction:null}}function yd(c,p){const y=Array.from({length:p.maxNumber+1},()=>0),n=Array.from({length:p.maxNumber+1},()=>-1),z=new Map,O=new Map;return c.forEach((M,B)=>{for(const U of M.numbers)y[U]+=1,n[U]=B;for(let U=0;U<M.numbers.length;U+=1)for(let S=U+1;S<M.numbers.length;S+=1){const Y=xi(M.numbers[U],M.numbers[S]);z.set(Y,(z.get(Y)??0)+1);for(let q=S+1;q<M.numbers.length;q+=1){const Q=su(M.numbers[U],M.numbers[S],M.numbers[q]);O.set(Q,(O.get(Q)??0)+1)}}}),{numberFrequency:y,lastSeen:n,pairFrequency:z,tripleFrequency:O}}function Bt(c,p){const y=[],n=Array.from({length:c.maxNumber},(z,O)=>O+1);for(;y.length<c.pickCount;){let z=n[0],O=Number.NEGATIVE_INFINITY;for(const M of n){const B=p(M,y)+Math.random()*1e-6;B>O&&(O=B,z=M)}y.push(z),n.splice(n.indexOf(z),1)}return Qe(y)}function vd(c,p){const y=[],n=Array.from({length:p.maxNumber},(z,O)=>O+1);for(;y.length<p.pickCount;){const z=n.reduce((B,U)=>B+c.numberFrequency[U]+1,0);let O=Math.random()*z,M=n[0];for(const B of n)if(O-=c.numberFrequency[B]+1,O<=0){M=B;break}y.push(M),n.splice(n.indexOf(M),1)}return Qe(y)}function iu(c,p,y,n){if(p.length===0||c==="Random")return Xe(n);const z=yd(p,n);if(c==="Frequency Weighted")return vd(z,n);if(c==="Hot Numbers")return Bt(n,O=>z.numberFrequency[O]);if(c==="Cold Numbers"){const O=Math.max(...z.numberFrequency);return Bt(n,M=>O-z.numberFrequency[M])}return c==="Delay"?Bt(n,O=>z.lastSeen[O]===-1?p.length+1:p.length-z.lastSeen[O]):c==="Pair Frequency"?Bt(n,(O,M)=>M.length===0?z.numberFrequency[O]+1:M.reduce((U,S)=>U+(z.pairFrequency.get(xi(O,S))??0),0)/M.length+.05*z.numberFrequency[O]):c==="Triple Frequency"?Bt(n,(O,M)=>{let B=0,U=0;for(let Y=0;Y<M.length;Y+=1)for(let q=Y+1;q<M.length;q+=1)B+=z.tripleFrequency.get(su(O,M[Y],M[q]))??0,U+=1;const S=M.reduce((Y,q)=>Y+(z.pairFrequency.get(xi(O,q))??0),0);return(U>0?B/U:0)+.25*S+.03*z.numberFrequency[O]}):eu(y,n,5e3).numbers}function i4(c){return c.reduce((p,y)=>p+y,0)/c.length}function Mi(c,p=i4(c)){if(c.length<2)return 0;const y=c.reduce((n,z)=>n+(z-p)**2,0)/(c.length-1);return Math.sqrt(y)}function Ai(c,p){return c.filter(y=>y<=p).length/c.length*100}function Oi(c,p){return(c.filter(y=>y>=p).length+1)/(c.length+1)}function ka(c,p,y){const n=c.filter(z=>p.includes(z)).length;return{matches:n,revenue:y.prizeByMatch[n]??0}}async function gd(c,p,y){const n=new Map($a.map(M=>[M,hd(M,p)])),z=[c[0]],O=new Set([c[0].index]);for(let M=1;M<c.length;M+=1){const B=c[M];for(const U of $a){const S=iu(U,z,O,p),Y=te(S,p),q=S.filter(f0=>B.numbers.includes(f0)).length,Q=n.get(U);Q.distribution[q]+=1,Q.totalMatches+=q,Q.totalRevenue+=p.prizeByMatch[q]??0,q===p.pickCount&&(Q.exactHits+=1),q>Q.bestMatch&&(Q.bestMatch=q,Q.bestPrediction={index:Y,numbers:S,actual:B.numbers,drawIndex:M})}z.push(B),O.add(B.index),M%25===0&&(y==null||y({drawIndex:M,totalDraws:c.length-1,results:[...n.values()]}),await new Promise(U=>setTimeout(U,0)))}return[...n.values()]}function Yt(c,p){const y=p*1e4,n=c.totalRevenue-y;return{avgMatches:c.totalMatches/p,hits3:c.distribution[3],hits4:c.distribution[4],hits5:c.distribution[5],hits6:c.distribution[6],roi:y>0?n/y*100:0}}async function Sd(c,p,y=500,n){const z=c.length-1,O=z*1e4,M=[c[0]],B=new Set([c[0].index]),U=Array.from({length:p.pickCount+1},()=>0),S=Array.from({length:y},()=>0),Y=Array.from({length:y},()=>0),q=Array.from({length:y},()=>0);let Q=0,f0=0,x0=0;for(let C0=1;C0<c.length;C0+=1){const J0=c[C0],o0=iu("Your Algorithm",M,B,p),T0=ka(o0,J0.numbers,p);U[T0.matches]+=1,Q+=T0.matches,x0+=T0.revenue,T0.matches>=3&&(f0+=1);for(let K=0;K<y;K+=1){const F0=ka(Xe(p),J0.numbers,p);S[K]+=F0.matches,q[K]+=F0.revenue,F0.matches>=3&&(Y[K]+=1)}M.push(J0),B.add(J0.index),C0%25===0&&(n==null||n(C0,z),await new Promise(K=>setTimeout(K,0)))}const s0=S.map(C0=>C0/z),b0=q.map(C0=>(C0-O)/O*100),n0=Q/z,c0=(x0-O)/O*100,_0=i4(s0),t0=Mi(s0,_0),Y0=i4(Y),G0=Mi(Y,Y0),W=i4(b0),H0=Mi(b0,W);return{randomRuns:y,testedDraws:z,your:{avgMatches:n0,hits3Plus:f0,roi:c0,distribution:U},random:{avgMatchesMean:_0,avgMatchesStd:t0,hits3PlusMean:Y0,hits3PlusStd:G0,roiMean:W,roiStd:H0},avgMatchesZScore:t0>0?(n0-_0)/t0:0,avgMatchesPercentile:Ai(s0,n0),avgMatchesPValue:Oi(s0,n0),hits3PlusPercentile:Ai(Y,f0),hits3PlusPValue:Oi(Y,f0),roiPercentile:Ai(b0,c0),roiPValue:Oi(b0,c0)}}const Td=`{"date":"2017-10-25","id":"00198","result":[12,17,23,25,34,38],"process_time":"2023-01-30 14:08:46.805928"}\r
{"date":"2017-10-27","id":"00199","result":[4,10,13,21,22,38],"process_time":"2023-01-30 14:08:46.805886"}\r
{"date":"2017-10-29","id":"00200","result":[1,5,28,31,44,45],"process_time":"2023-01-30 14:08:46.805843"}\r
{"date":"2017-11-01","id":"00201","result":[4,12,25,39,42,44],"process_time":"2023-01-30 14:08:46.805800"}\r
{"date":"2017-11-03","id":"00202","result":[7,17,20,22,29,44],"process_time":"2023-01-30 14:08:46.805758"}\r
{"date":"2017-11-05","id":"00203","result":[3,17,38,39,41,44],"process_time":"2023-01-30 14:08:46.805714"}\r
{"date":"2017-11-08","id":"00204","result":[1,18,23,24,40,41],"process_time":"2023-01-30 14:08:46.805670"}\r
{"date":"2017-11-10","id":"00205","result":[1,4,19,21,24,35],"process_time":"2023-01-30 14:08:46.805615"}\r
{"date":"2017-11-12","id":"00206","result":[22,26,37,40,42,44],"process_time":"2023-01-30 14:08:46.733279"}\r
{"date":"2017-11-15","id":"00207","result":[1,9,15,27,33,43],"process_time":"2023-01-30 14:08:46.733236"}\r
{"date":"2017-11-17","id":"00208","result":[11,13,18,19,31,45],"process_time":"2023-01-30 14:08:46.733191"}\r
{"date":"2017-11-19","id":"00209","result":[14,20,30,33,41,43],"process_time":"2023-01-30 14:08:46.733147"}\r
{"date":"2017-11-22","id":"00210","result":[5,6,9,23,27,35],"process_time":"2023-01-30 14:08:46.733102"}\r
{"date":"2017-11-24","id":"00211","result":[14,24,32,34,36,45],"process_time":"2023-01-30 14:08:46.733057"}\r
{"date":"2017-11-26","id":"00212","result":[4,12,17,19,23,34],"process_time":"2023-01-30 14:08:46.733013"}\r
{"date":"2017-11-29","id":"00213","result":[19,23,26,37,38,41],"process_time":"2023-01-30 14:08:46.732960"}\r
{"date":"2017-12-01","id":"00214","result":[10,19,30,35,39,45],"process_time":"2023-01-30 14:08:46.673243"}\r
{"date":"2017-12-03","id":"00215","result":[8,9,15,18,27,30],"process_time":"2023-01-30 14:08:46.673196"}\r
{"date":"2017-12-06","id":"00216","result":[3,7,29,31,34,43],"process_time":"2023-01-30 14:08:46.673153"}\r
{"date":"2017-12-08","id":"00217","result":[2,11,15,32,40,44],"process_time":"2023-01-30 14:08:46.673099"}\r
{"date":"2017-12-10","id":"00218","result":[27,36,39,43,44,45],"process_time":"2023-01-30 14:08:46.673052"}\r
{"date":"2017-12-13","id":"00219","result":[4,7,19,24,32,38],"process_time":"2023-01-30 14:08:46.673009"}\r
{"date":"2017-12-15","id":"00220","result":[13,14,17,24,28,43],"process_time":"2023-01-30 14:08:46.672965"}\r
{"date":"2017-12-17","id":"00221","result":[4,7,16,27,40,41],"process_time":"2023-01-30 14:08:46.672914"}\r
{"date":"2017-12-20","id":"00222","result":[3,8,25,37,40,42],"process_time":"2023-01-30 14:08:46.612836"}\r
{"date":"2017-12-22","id":"00223","result":[9,13,17,22,26,33],"process_time":"2023-01-30 14:08:46.612793"}\r
{"date":"2017-12-24","id":"00224","result":[1,5,9,14,30,31],"process_time":"2023-01-30 14:08:46.612750"}\r
{"date":"2017-12-27","id":"00225","result":[9,13,19,21,27,30],"process_time":"2023-01-30 14:08:46.612704"}\r
{"date":"2017-12-29","id":"00226","result":[2,8,17,20,29,39],"process_time":"2023-01-30 14:08:46.612657"}\r
{"date":"2017-12-31","id":"00227","result":[3,13,14,26,30,34],"process_time":"2023-01-30 14:08:46.612611"}\r
{"date":"2018-01-03","id":"00228","result":[8,14,19,30,33,35],"process_time":"2023-01-30 14:08:46.612564"}\r
{"date":"2018-01-05","id":"00229","result":[19,30,34,38,42,44],"process_time":"2023-01-30 14:08:46.612510"}\r
{"date":"2018-01-07","id":"00230","result":[4,6,11,13,24,31],"process_time":"2023-01-30 14:08:46.529289"}\r
{"date":"2018-01-10","id":"00231","result":[6,18,21,22,37,45],"process_time":"2023-01-30 14:08:46.529238"}\r
{"date":"2018-01-12","id":"00232","result":[4,8,17,23,27,34],"process_time":"2023-01-30 14:08:46.529193"}\r
{"date":"2018-01-14","id":"00233","result":[1,6,10,29,32,41],"process_time":"2023-01-30 14:08:46.529149"}\r
{"date":"2018-01-17","id":"00234","result":[9,10,12,22,27,41],"process_time":"2023-01-30 14:08:46.529104"}\r
{"date":"2018-01-19","id":"00235","result":[2,4,27,28,31,36],"process_time":"2023-01-30 14:08:46.529057"}\r
{"date":"2018-01-21","id":"00236","result":[1,10,11,24,32,37],"process_time":"2023-01-30 14:08:46.529009"}\r
{"date":"2018-01-24","id":"00237","result":[5,6,24,33,42,45],"process_time":"2023-01-30 14:08:46.528947"}\r
{"date":"2018-01-26","id":"00238","result":[1,9,18,28,36,44],"process_time":"2023-01-30 14:08:46.473460"}\r
{"date":"2018-01-28","id":"00239","result":[12,26,27,33,36,37],"process_time":"2023-01-30 14:08:46.473414"}\r
{"date":"2018-01-31","id":"00240","result":[4,7,9,10,30,40],"process_time":"2023-01-30 14:08:46.473361"}\r
{"date":"2018-02-02","id":"00241","result":[2,7,14,28,42,45],"process_time":"2023-01-30 14:08:46.473318"}\r
{"date":"2018-02-04","id":"00242","result":[1,5,13,27,40,45],"process_time":"2023-01-30 14:08:46.473271"}\r
{"date":"2018-02-07","id":"00243","result":[5,7,18,26,30,36],"process_time":"2023-01-30 14:08:46.473217"}\r
{"date":"2018-02-09","id":"00244","result":[2,10,14,19,23,37],"process_time":"2023-01-30 14:08:46.473171"}\r
{"date":"2018-02-11","id":"00245","result":[5,19,27,32,41,45],"process_time":"2023-01-30 14:08:46.473118"}\r
{"date":"2018-02-14","id":"00246","result":[12,31,32,34,35,43],"process_time":"2023-01-30 14:08:46.405600"}\r
{"date":"2018-02-18","id":"00247","result":[1,5,14,16,36,38],"process_time":"2023-01-30 14:08:46.405558"}\r
{"date":"2018-02-21","id":"00248","result":[18,23,24,26,29,33],"process_time":"2023-01-30 14:08:46.405515"}\r
{"date":"2018-02-23","id":"00249","result":[5,16,19,23,29,37],"process_time":"2023-01-30 14:08:46.405472"}\r
{"date":"2018-02-25","id":"00250","result":[8,10,12,29,30,42],"process_time":"2023-01-30 14:08:46.405425"}\r
{"date":"2018-02-28","id":"00251","result":[17,19,21,23,36,40],"process_time":"2023-01-30 14:08:46.405372"}\r
{"date":"2018-03-02","id":"00252","result":[3,7,15,27,41,45],"process_time":"2023-01-30 14:08:46.405326"}\r
{"date":"2018-03-04","id":"00253","result":[4,11,19,25,32,40],"process_time":"2023-01-30 14:08:46.405273"}\r
{"date":"2018-03-07","id":"00254","result":[8,19,25,31,37,40],"process_time":"2023-01-30 14:08:46.360130"}\r
{"date":"2018-03-09","id":"00255","result":[5,10,13,19,25,44],"process_time":"2023-01-30 14:08:46.360029"}\r
{"date":"2018-03-11","id":"00256","result":[1,14,19,26,41,42],"process_time":"2023-01-30 14:08:46.359923"}\r
{"date":"2018-03-14","id":"00257","result":[12,21,23,27,31,34],"process_time":"2023-01-30 14:08:46.359823"}\r
{"date":"2018-03-16","id":"00258","result":[6,8,13,17,20,34],"process_time":"2023-01-30 14:08:46.359728"}\r
{"date":"2018-03-18","id":"00259","result":[14,21,24,28,31,40],"process_time":"2023-01-30 14:08:46.359638"}\r
{"date":"2018-03-21","id":"00260","result":[6,19,38,40,41,44],"process_time":"2023-01-30 14:08:46.359549"}\r
{"date":"2018-03-23","id":"00261","result":[3,6,12,22,26,35],"process_time":"2023-01-30 14:08:46.359452"}\r
{"date":"2018-03-25","id":"00262","result":[4,10,13,22,38,42],"process_time":"2023-01-30 14:08:46.307351"}\r
{"date":"2018-03-28","id":"00263","result":[12,18,31,34,35,42],"process_time":"2023-01-30 14:08:46.307308"}\r
{"date":"2018-03-30","id":"00264","result":[7,11,18,28,34,43],"process_time":"2023-01-30 14:08:46.307265"}\r
{"date":"2018-04-01","id":"00265","result":[4,12,24,33,39,43],"process_time":"2023-01-30 14:08:46.307219"}\r
{"date":"2018-04-04","id":"00266","result":[2,3,6,16,41,44],"process_time":"2023-01-30 14:08:46.307175"}\r
{"date":"2018-04-06","id":"00267","result":[1,7,8,9,36,40],"process_time":"2023-01-30 14:08:46.307131"}\r
{"date":"2018-04-08","id":"00268","result":[2,5,11,16,30,34],"process_time":"2023-01-30 14:08:46.307086"}\r
{"date":"2018-04-11","id":"00269","result":[7,20,23,25,26,39],"process_time":"2023-01-30 14:08:46.307029"}\r
{"date":"2018-04-13","id":"00270","result":[11,22,24,33,38,43],"process_time":"2023-01-30 14:08:46.257664"}\r
{"date":"2018-04-15","id":"00271","result":[3,9,13,20,30,34],"process_time":"2023-01-30 14:08:46.257620"}\r
{"date":"2018-04-18","id":"00272","result":[6,16,28,29,39,44],"process_time":"2023-01-30 14:08:46.257573"}\r
{"date":"2018-04-20","id":"00273","result":[6,9,14,30,33,42],"process_time":"2023-01-30 14:08:46.257529"}\r
{"date":"2018-04-22","id":"00274","result":[6,7,22,32,36,39],"process_time":"2023-01-30 14:08:46.257484"}\r
{"date":"2018-04-25","id":"00275","result":[4,15,17,23,29,43],"process_time":"2023-01-30 14:08:46.257440"}\r
{"date":"2018-04-27","id":"00276","result":[10,20,24,27,28,29],"process_time":"2023-01-30 14:08:46.257395"}\r
{"date":"2018-04-29","id":"00277","result":[3,10,22,23,25,43],"process_time":"2023-01-30 14:08:46.257333"}\r
{"date":"2018-05-02","id":"00278","result":[10,11,22,29,37,40],"process_time":"2023-01-30 14:08:46.828589"}\r
{"date":"2018-05-04","id":"00279","result":[9,18,25,26,27,29],"process_time":"2023-01-30 14:08:46.828545"}\r
{"date":"2018-05-06","id":"00280","result":[11,26,28,34,36,37],"process_time":"2023-01-30 14:08:46.828501"}\r
{"date":"2018-05-09","id":"00281","result":[9,15,20,30,31,33],"process_time":"2023-01-30 14:08:46.828457"}\r
{"date":"2018-05-11","id":"00282","result":[10,11,26,29,33,38],"process_time":"2023-01-30 14:08:46.828414"}\r
{"date":"2018-05-13","id":"00283","result":[6,11,16,18,27,41],"process_time":"2023-01-30 14:08:46.828369"}\r
{"date":"2018-05-16","id":"00284","result":[10,21,23,25,35,38],"process_time":"2023-01-30 14:08:46.828324"}\r
{"date":"2018-05-18","id":"00285","result":[3,18,24,29,30,35],"process_time":"2023-01-30 14:08:46.828269"}\r
{"date":"2018-05-20","id":"00286","result":[18,19,25,26,29,39],"process_time":"2023-01-30 14:08:46.772913"}\r
{"date":"2018-05-23","id":"00287","result":[13,16,25,34,37,41],"process_time":"2023-01-30 14:08:46.772866"}\r
{"date":"2018-05-25","id":"00288","result":[5,14,22,26,29,39],"process_time":"2023-01-30 14:08:46.772820"}\r
{"date":"2018-05-27","id":"00289","result":[5,9,17,18,19,22],"process_time":"2023-01-30 14:08:46.772777"}\r
{"date":"2018-05-30","id":"00290","result":[2,17,19,27,31,36],"process_time":"2023-01-30 14:08:46.772733"}\r
{"date":"2018-06-01","id":"00291","result":[6,14,19,38,43,44],"process_time":"2023-01-30 14:08:46.772690"}\r
{"date":"2018-06-03","id":"00292","result":[18,20,24,40,42,45],"process_time":"2023-01-30 14:08:46.772642"}\r
{"date":"2018-06-06","id":"00293","result":[6,20,22,26,43,44],"process_time":"2023-01-30 14:08:46.772588"}\r
{"date":"2018-06-08","id":"00294","result":[4,13,32,35,40,42],"process_time":"2023-01-30 14:08:46.718037"}\r
{"date":"2018-06-10","id":"00295","result":[22,25,35,36,38,39],"process_time":"2023-01-30 14:08:46.717909"}\r
{"date":"2018-06-13","id":"00296","result":[2,4,17,24,31,40],"process_time":"2023-01-30 14:08:46.717782"}\r
{"date":"2018-06-15","id":"00297","result":[8,11,13,23,24,28],"process_time":"2023-01-30 14:08:46.717656"}\r
{"date":"2018-06-17","id":"00298","result":[3,5,6,7,34,40],"process_time":"2023-01-30 14:08:46.717530"}\r
{"date":"2018-06-20","id":"00299","result":[2,18,22,30,32,43],"process_time":"2023-01-30 14:08:46.717383"}\r
{"date":"2018-06-22","id":"00300","result":[15,19,20,26,34,39],"process_time":"2023-01-30 14:08:46.717249"}\r
{"date":"2018-06-24","id":"00301","result":[6,8,23,32,33,41],"process_time":"2023-01-30 14:08:46.717096"}\r
{"date":"2018-06-27","id":"00302","result":[25,27,29,33,37,38],"process_time":"2023-01-30 14:08:46.614159"}\r
{"date":"2018-06-29","id":"00303","result":[6,18,22,24,36,39],"process_time":"2023-01-30 14:08:46.614115"}\r
{"date":"2018-07-01","id":"00304","result":[4,7,15,28,34,37],"process_time":"2023-01-30 14:08:46.614070"}\r
{"date":"2018-07-04","id":"00305","result":[2,3,27,28,34,43],"process_time":"2023-01-30 14:08:46.614027"}\r
{"date":"2018-07-06","id":"00306","result":[22,26,33,34,38,42],"process_time":"2023-01-30 14:08:46.613983"}\r
{"date":"2018-07-08","id":"00307","result":[2,7,8,10,28,44],"process_time":"2023-01-30 14:08:46.613939"}\r
{"date":"2018-07-11","id":"00308","result":[12,26,28,29,39,43],"process_time":"2023-01-30 14:08:46.613891"}\r
{"date":"2018-07-13","id":"00309","result":[3,8,9,25,27,28],"process_time":"2023-01-30 14:08:46.613837"}\r
{"date":"2018-07-15","id":"00310","result":[7,15,20,29,31,38],"process_time":"2023-01-30 14:08:46.556758"}\r
{"date":"2018-07-18","id":"00311","result":[8,10,14,19,26,34],"process_time":"2023-01-30 14:08:46.556715"}\r
{"date":"2018-07-20","id":"00312","result":[13,14,16,19,20,23],"process_time":"2023-01-30 14:08:46.556672"}\r
{"date":"2018-07-22","id":"00313","result":[8,9,24,27,40,45],"process_time":"2023-01-30 14:08:46.556628"}\r
{"date":"2018-07-25","id":"00314","result":[9,16,18,38,41,45],"process_time":"2023-01-30 14:08:46.556586"}\r
{"date":"2018-07-27","id":"00315","result":[2,21,32,37,38,42],"process_time":"2023-01-30 14:08:46.556541"}\r
{"date":"2018-07-29","id":"00316","result":[26,31,32,37,43,45],"process_time":"2023-01-30 14:08:46.556496"}\r
{"date":"2018-08-01","id":"00317","result":[5,6,29,30,37,38],"process_time":"2023-01-30 14:08:46.556441"}\r
{"date":"2018-08-03","id":"00318","result":[3,8,10,24,27,28],"process_time":"2023-01-30 14:08:46.504232"}\r
{"date":"2018-08-05","id":"00319","result":[7,10,18,31,39,43],"process_time":"2023-01-30 14:08:46.504188"}\r
{"date":"2018-08-08","id":"00320","result":[19,34,37,39,41,44],"process_time":"2023-01-30 14:08:46.504145"}\r
{"date":"2018-08-10","id":"00321","result":[18,22,24,29,41,45],"process_time":"2023-01-30 14:08:46.504101"}\r
{"date":"2018-08-12","id":"00322","result":[5,16,17,28,31,38],"process_time":"2023-01-30 14:08:46.504058"}\r
{"date":"2018-08-15","id":"00323","result":[12,24,25,33,40,44],"process_time":"2023-01-30 14:08:46.504013"}\r
{"date":"2018-08-17","id":"00324","result":[3,8,22,28,33,42],"process_time":"2023-01-30 14:08:46.503968"}\r
{"date":"2018-08-19","id":"00325","result":[16,18,28,36,37,45],"process_time":"2023-01-30 14:08:46.503901"}\r
{"date":"2018-08-22","id":"00326","result":[15,17,18,33,34,44],"process_time":"2023-01-30 14:08:46.452843"}\r
{"date":"2018-08-24","id":"00327","result":[3,22,25,29,33,40],"process_time":"2023-01-30 14:08:46.452798"}\r
{"date":"2018-08-26","id":"00328","result":[1,3,11,12,22,36],"process_time":"2023-01-30 14:08:46.452753"}\r
{"date":"2018-08-29","id":"00329","result":[16,17,24,28,30,36],"process_time":"2023-01-30 14:08:46.452709"}\r
{"date":"2018-08-31","id":"00330","result":[11,19,30,36,38,40],"process_time":"2023-01-30 14:08:46.452665"}\r
{"date":"2018-09-02","id":"00331","result":[10,12,13,22,26,40],"process_time":"2023-01-30 14:08:46.452620"}\r
{"date":"2018-09-05","id":"00332","result":[5,6,22,27,34,37],"process_time":"2023-01-30 14:08:46.452574"}\r
{"date":"2018-09-07","id":"00333","result":[8,10,11,28,42,45],"process_time":"2023-01-30 14:08:46.452518"}\r
{"date":"2018-09-09","id":"00334","result":[8,14,18,21,44,45],"process_time":"2023-01-30 14:08:46.382771"}\r
{"date":"2018-09-12","id":"00335","result":[11,12,13,16,29,31],"process_time":"2023-01-30 14:08:46.382728"}\r
{"date":"2018-09-14","id":"00336","result":[12,16,17,18,26,34],"process_time":"2023-01-30 14:08:46.382685"}\r
{"date":"2018-09-16","id":"00337","result":[3,13,17,18,23,34],"process_time":"2023-01-30 14:08:46.382642"}\r
{"date":"2018-09-19","id":"00338","result":[10,20,22,24,27,42],"process_time":"2023-01-30 14:08:46.382597"}\r
{"date":"2018-09-21","id":"00339","result":[1,3,11,14,23,29],"process_time":"2023-01-30 14:08:46.382551"}\r
{"date":"2018-09-23","id":"00340","result":[18,27,32,35,41,44],"process_time":"2023-01-30 14:08:46.382503"}\r
{"date":"2018-09-26","id":"00341","result":[12,19,27,39,42,45],"process_time":"2023-01-30 14:08:46.382448"}\r
{"date":"2018-09-28","id":"00342","result":[2,6,11,13,15,38],"process_time":"2023-01-30 14:08:46.290115"}\r
{"date":"2018-09-30","id":"00343","result":[1,20,24,36,43,45],"process_time":"2023-01-30 14:08:46.290071"}\r
{"date":"2018-10-03","id":"00344","result":[6,12,19,21,25,45],"process_time":"2023-01-30 14:08:46.290027"}\r
{"date":"2018-10-05","id":"00345","result":[4,12,17,29,35,44],"process_time":"2023-01-30 14:08:46.289984"}\r
{"date":"2018-10-07","id":"00346","result":[14,18,31,34,39,44],"process_time":"2023-01-30 14:08:46.289940"}\r
{"date":"2018-10-10","id":"00347","result":[18,19,22,28,41,42],"process_time":"2023-01-30 14:08:46.289896"}\r
{"date":"2018-10-12","id":"00348","result":[11,12,20,26,28,42],"process_time":"2023-01-30 14:08:46.289849"}\r
{"date":"2018-10-14","id":"00349","result":[7,8,9,34,40,43],"process_time":"2023-01-30 14:08:46.289795"}\r
{"date":"2018-10-17","id":"00350","result":[1,12,14,36,39,43],"process_time":"2023-01-30 14:08:46.224008"}\r
{"date":"2018-10-19","id":"00351","result":[2,14,30,38,39,45],"process_time":"2023-01-30 14:08:46.223943"}\r
{"date":"2018-10-21","id":"00352","result":[6,22,24,28,30,37],"process_time":"2023-01-30 14:08:46.223870"}\r
{"date":"2018-10-24","id":"00353","result":[6,26,34,35,39,42],"process_time":"2023-01-30 14:08:46.223792"}\r
{"date":"2018-10-26","id":"00354","result":[2,18,31,33,36,41],"process_time":"2023-01-30 14:08:46.223722"}\r
{"date":"2018-10-28","id":"00355","result":[9,18,19,20,31,45],"process_time":"2023-01-30 14:08:46.223651"}\r
{"date":"2018-10-31","id":"00356","result":[17,22,26,30,33,35],"process_time":"2023-01-30 14:08:46.223584"}\r
{"date":"2018-11-02","id":"00357","result":[4,6,11,18,24,25],"process_time":"2023-01-30 14:08:46.223512"}\r
{"date":"2018-11-04","id":"00358","result":[7,12,13,17,25,30],"process_time":"2023-01-30 14:08:51.687799"}\r
{"date":"2018-11-07","id":"00359","result":[6,18,22,25,31,37],"process_time":"2023-01-30 14:08:51.687756"}\r
{"date":"2018-11-09","id":"00360","result":[6,18,28,32,34,35],"process_time":"2023-01-30 14:08:51.687711"}\r
{"date":"2018-11-11","id":"00361","result":[20,23,26,27,32,34],"process_time":"2023-01-30 14:08:51.687667"}\r
{"date":"2018-11-14","id":"00362","result":[12,14,24,26,30,40],"process_time":"2023-01-30 14:08:51.687623"}\r
{"date":"2018-11-16","id":"00363","result":[4,12,18,21,25,41],"process_time":"2023-01-30 14:08:51.687578"}\r
{"date":"2018-11-18","id":"00364","result":[6,27,28,30,37,44],"process_time":"2023-01-30 14:08:51.687534"}\r
{"date":"2018-11-21","id":"00365","result":[7,9,16,19,24,33],"process_time":"2023-01-30 14:08:51.687478"}\r
{"date":"2018-11-23","id":"00366","result":[8,10,12,21,25,40],"process_time":"2023-01-30 14:08:51.638572"}\r
{"date":"2018-11-25","id":"00367","result":[3,5,11,18,24,29],"process_time":"2023-01-30 14:08:51.638524"}\r
{"date":"2018-11-28","id":"00368","result":[8,13,20,21,25,28],"process_time":"2023-01-30 14:08:51.638480"}\r
{"date":"2018-11-30","id":"00369","result":[11,18,23,25,28,35],"process_time":"2023-01-30 14:08:51.638434"}\r
{"date":"2018-12-02","id":"00370","result":[2,4,12,23,37,45],"process_time":"2023-01-30 14:08:51.638389"}\r
{"date":"2018-12-05","id":"00371","result":[7,28,29,39,42,45],"process_time":"2023-01-30 14:08:51.638346"}\r
{"date":"2018-12-07","id":"00372","result":[1,6,7,22,31,39],"process_time":"2023-01-30 14:08:51.638301"}\r
{"date":"2018-12-09","id":"00373","result":[6,8,26,34,40,41],"process_time":"2023-01-30 14:08:51.638246"}\r
{"date":"2018-12-12","id":"00374","result":[1,3,11,15,27,30],"process_time":"2023-01-30 14:08:51.584507"}\r
{"date":"2018-12-14","id":"00375","result":[7,16,20,26,30,34],"process_time":"2023-01-30 14:08:51.584464"}\r
{"date":"2018-12-16","id":"00376","result":[1,14,22,26,35,42],"process_time":"2023-01-30 14:08:51.584420"}\r
{"date":"2018-12-19","id":"00377","result":[2,10,11,32,40,44],"process_time":"2023-01-30 14:08:51.584376"}\r
{"date":"2018-12-21","id":"00378","result":[1,7,16,27,29,34],"process_time":"2023-01-30 14:08:51.584332"}\r
{"date":"2018-12-23","id":"00379","result":[1,3,10,11,16,44],"process_time":"2023-01-30 14:08:51.584289"}\r
{"date":"2018-12-26","id":"00380","result":[21,28,34,35,41,44],"process_time":"2023-01-30 14:08:51.584244"}\r
{"date":"2018-12-28","id":"00381","result":[3,22,24,25,31,37],"process_time":"2023-01-30 14:08:51.584189"}\r
{"date":"2018-12-30","id":"00382","result":[10,19,31,35,42,44],"process_time":"2023-01-30 14:08:51.536701"}\r
{"date":"2019-01-02","id":"00383","result":[4,14,32,35,36,40],"process_time":"2023-01-30 14:08:51.536657"}\r
{"date":"2019-01-04","id":"00384","result":[1,8,14,16,19,22],"process_time":"2023-01-30 14:08:51.536613"}\r
{"date":"2019-01-06","id":"00385","result":[9,22,33,34,35,44],"process_time":"2023-01-30 14:08:51.536570"}\r
{"date":"2019-01-09","id":"00386","result":[17,27,28,30,33,41],"process_time":"2023-01-30 14:08:51.536527"}\r
{"date":"2019-01-11","id":"00387","result":[19,21,22,23,25,44],"process_time":"2023-01-30 14:08:51.536483"}\r
{"date":"2019-01-13","id":"00388","result":[1,20,21,23,26,33],"process_time":"2023-01-30 14:08:51.536438"}\r
{"date":"2019-01-16","id":"00389","result":[1,8,14,24,31,40],"process_time":"2023-01-30 14:08:51.536381"}\r
{"date":"2019-01-18","id":"00390","result":[12,15,19,38,40,45],"process_time":"2023-01-30 14:08:51.490424"}\r
{"date":"2019-01-20","id":"00391","result":[8,16,21,31,35,38],"process_time":"2023-01-30 14:08:51.490379"}\r
{"date":"2019-01-23","id":"00392","result":[2,9,13,29,33,40],"process_time":"2023-01-30 14:08:51.490334"}\r
{"date":"2019-01-25","id":"00393","result":[11,13,14,22,30,38],"process_time":"2023-01-30 14:08:51.490288"}\r
{"date":"2019-01-27","id":"00394","result":[9,11,12,22,27,29],"process_time":"2023-01-30 14:08:51.490242"}\r
{"date":"2019-01-30","id":"00395","result":[1,4,6,13,37,41],"process_time":"2023-01-30 14:08:51.490195"}\r
{"date":"2019-02-01","id":"00396","result":[3,4,6,38,39,43],"process_time":"2023-01-30 14:08:51.490145"}\r
{"date":"2019-02-03","id":"00397","result":[1,2,5,9,23,24],"process_time":"2023-01-30 14:08:51.490088"}\r
{"date":"2019-02-06","id":"00398","result":[22,24,25,30,33,38],"process_time":"2023-01-30 14:08:51.435331"}\r
{"date":"2019-02-08","id":"00399","result":[11,12,33,36,39,43],"process_time":"2023-01-30 14:08:51.435287"}\r
{"date":"2019-02-10","id":"00400","result":[1,11,17,25,29,35],"process_time":"2023-01-30 14:08:51.435244"}\r
{"date":"2019-02-13","id":"00401","result":[5,11,18,33,37,41],"process_time":"2023-01-30 14:08:51.435201"}\r
{"date":"2019-02-15","id":"00402","result":[3,22,26,27,30,44],"process_time":"2023-01-30 14:08:51.435157"}\r
{"date":"2019-02-17","id":"00403","result":[11,12,14,25,29,31],"process_time":"2023-01-30 14:08:51.435114"}\r
{"date":"2019-02-20","id":"00404","result":[1,10,15,24,37,45],"process_time":"2023-01-30 14:08:51.435068"}\r
{"date":"2019-02-22","id":"00405","result":[7,10,18,25,44,45],"process_time":"2023-01-30 14:08:51.435011"}\r
{"date":"2019-02-24","id":"00406","result":[1,7,13,23,32,42],"process_time":"2023-01-30 14:08:51.386378"}\r
{"date":"2019-02-27","id":"00407","result":[5,12,15,16,25,35],"process_time":"2023-01-30 14:08:51.386335"}\r
{"date":"2019-03-01","id":"00408","result":[15,23,29,31,38,43],"process_time":"2023-01-30 14:08:51.386291"}\r
{"date":"2019-03-03","id":"00409","result":[1,13,17,20,30,45],"process_time":"2023-01-30 14:08:51.386246"}\r
{"date":"2019-03-06","id":"00410","result":[2,7,14,24,40,41],"process_time":"2023-01-30 14:08:51.386200"}\r
{"date":"2019-03-08","id":"00411","result":[4,14,20,27,32,43],"process_time":"2023-01-30 14:08:51.386154"}\r
{"date":"2019-03-10","id":"00412","result":[5,24,31,32,42,45],"process_time":"2023-01-30 14:08:51.386092"}\r
{"date":"2019-03-13","id":"00413","result":[5,16,24,26,34,44],"process_time":"2023-01-30 14:08:51.386036"}\r
{"date":"2019-03-15","id":"00414","result":[5,10,15,19,38,42],"process_time":"2023-01-30 14:08:51.339199"}\r
{"date":"2019-03-17","id":"00415","result":[5,6,16,18,24,42],"process_time":"2023-01-30 14:08:51.339081"}\r
{"date":"2019-03-20","id":"00416","result":[2,7,17,24,29,37],"process_time":"2023-01-30 14:08:51.338969"}\r
{"date":"2019-03-22","id":"00417","result":[1,3,6,13,18,41],"process_time":"2023-01-30 14:08:51.338857"}\r
{"date":"2019-03-24","id":"00418","result":[5,17,21,27,34,40],"process_time":"2023-01-30 14:08:51.338766"}\r
{"date":"2019-03-27","id":"00419","result":[9,12,22,24,30,42],"process_time":"2023-01-30 14:08:51.338727"}\r
{"date":"2019-03-29","id":"00420","result":[2,19,26,27,30,37],"process_time":"2023-01-30 14:08:51.338689"}\r
{"date":"2019-03-31","id":"00421","result":[3,5,19,28,31,38],"process_time":"2023-01-30 14:08:51.338641"}\r
{"date":"2019-04-03","id":"00422","result":[4,11,18,33,34,45],"process_time":"2023-01-30 14:08:51.283019"}\r
{"date":"2019-04-05","id":"00423","result":[2,7,25,36,38,43],"process_time":"2023-01-30 14:08:51.282977"}\r
{"date":"2019-04-07","id":"00424","result":[8,10,26,28,32,34],"process_time":"2023-01-30 14:08:51.282934"}\r
{"date":"2019-04-10","id":"00425","result":[7,11,14,30,35,42],"process_time":"2023-01-30 14:08:51.282891"}\r
{"date":"2019-04-12","id":"00426","result":[3,12,15,16,17,44],"process_time":"2023-01-30 14:08:51.282847"}\r
{"date":"2019-04-14","id":"00427","result":[4,13,20,34,35,37],"process_time":"2023-01-30 14:08:51.282803"}\r
{"date":"2019-04-17","id":"00428","result":[7,11,21,25,30,44],"process_time":"2023-01-30 14:08:51.282757"}\r
{"date":"2019-04-19","id":"00429","result":[1,4,5,12,17,21],"process_time":"2023-01-30 14:08:51.282706"}\r
{"date":"2019-04-21","id":"00430","result":[8,11,13,20,41,43],"process_time":"2023-01-30 14:08:51.228815"}\r
{"date":"2019-04-24","id":"00431","result":[4,7,12,13,20,45],"process_time":"2023-01-30 14:08:51.228754"}\r
{"date":"2019-04-26","id":"00432","result":[1,2,14,15,16,30],"process_time":"2023-01-30 14:08:51.228710"}\r
{"date":"2019-04-28","id":"00433","result":[4,24,28,30,33,43],"process_time":"2023-01-30 14:08:51.228664"}\r
{"date":"2019-05-01","id":"00434","result":[18,23,24,27,33,41],"process_time":"2023-01-30 14:08:51.228618"}\r
{"date":"2019-05-03","id":"00435","result":[1,6,14,31,35,44],"process_time":"2023-01-30 14:08:51.228571"}\r
{"date":"2019-05-05","id":"00436","result":[13,27,30,38,39,41],"process_time":"2023-01-30 14:08:51.228524"}\r
{"date":"2019-05-08","id":"00437","result":[1,7,8,31,34,45],"process_time":"2023-01-30 14:08:51.228470"}\r
{"date":"2019-05-10","id":"00438","result":[5,23,25,30,35,38],"process_time":"2023-01-30 14:08:46.742212"}\r
{"date":"2019-05-12","id":"00439","result":[1,8,13,17,21,43],"process_time":"2023-01-30 14:08:46.742167"}\r
{"date":"2019-05-15","id":"00440","result":[17,28,29,33,34,35],"process_time":"2023-01-30 14:08:46.742122"}\r
{"date":"2019-05-17","id":"00441","result":[6,16,18,29,39,43],"process_time":"2023-01-30 14:08:46.742078"}\r
{"date":"2019-05-19","id":"00442","result":[2,11,19,27,30,42],"process_time":"2023-01-30 14:08:46.742033"}\r
{"date":"2019-05-22","id":"00443","result":[1,13,16,22,23,35],"process_time":"2023-01-30 14:08:46.741989"}\r
{"date":"2019-05-24","id":"00444","result":[2,3,31,33,35,40],"process_time":"2023-01-30 14:08:46.741943"}\r
{"date":"2019-05-26","id":"00445","result":[11,12,14,23,29,32],"process_time":"2023-01-30 14:08:46.741888"}\r
{"date":"2019-05-29","id":"00446","result":[12,18,19,27,35,42],"process_time":"2023-01-30 14:08:46.691067"}\r
{"date":"2019-05-31","id":"00447","result":[5,6,7,12,23,30],"process_time":"2023-01-30 14:08:46.691023"}\r
{"date":"2019-06-02","id":"00448","result":[2,5,12,35,41,43],"process_time":"2023-01-30 14:08:46.690981"}\r
{"date":"2019-06-05","id":"00449","result":[4,8,22,25,37,39],"process_time":"2023-01-30 14:08:46.690939"}\r
{"date":"2019-06-07","id":"00450","result":[11,13,15,26,27,41],"process_time":"2023-01-30 14:08:46.690896"}\r
{"date":"2019-06-09","id":"00451","result":[2,6,22,25,35,36],"process_time":"2023-01-30 14:08:46.690854"}\r
{"date":"2019-06-12","id":"00452","result":[10,11,21,23,26,37],"process_time":"2023-01-30 14:08:46.690810"}\r
{"date":"2019-06-14","id":"00453","result":[2,12,16,36,37,45],"process_time":"2023-01-30 14:08:46.690758"}\r
{"date":"2019-06-16","id":"00454","result":[6,7,19,29,31,36],"process_time":"2023-01-30 14:08:46.620334"}\r
{"date":"2019-06-19","id":"00455","result":[2,4,11,15,35,40],"process_time":"2023-01-30 14:08:46.620291"}\r
{"date":"2019-06-21","id":"00456","result":[1,4,19,21,23,39],"process_time":"2023-01-30 14:08:46.620247"}\r
{"date":"2019-06-23","id":"00457","result":[3,8,11,27,32,36],"process_time":"2023-01-30 14:08:46.620205"}\r
{"date":"2019-06-26","id":"00458","result":[1,5,9,10,33,41],"process_time":"2023-01-30 14:08:46.620162"}\r
{"date":"2019-06-28","id":"00459","result":[11,25,37,40,41,45],"process_time":"2023-01-30 14:08:46.620117"}\r
{"date":"2019-06-30","id":"00460","result":[5,20,22,25,28,32],"process_time":"2023-01-30 14:08:46.620039"}\r
{"date":"2019-07-03","id":"00461","result":[2,7,25,29,39,45],"process_time":"2023-01-30 14:08:46.619974"}\r
{"date":"2019-07-05","id":"00462","result":[19,21,30,31,37,43],"process_time":"2023-01-30 14:08:46.569476"}\r
{"date":"2019-07-07","id":"00463","result":[2,18,21,23,30,31],"process_time":"2023-01-30 14:08:46.569431"}\r
{"date":"2019-07-10","id":"00464","result":[1,2,6,7,16,27],"process_time":"2023-01-30 14:08:46.569379"}\r
{"date":"2019-07-12","id":"00465","result":[16,18,24,26,40,44],"process_time":"2023-01-30 14:08:46.569336"}\r
{"date":"2019-07-14","id":"00466","result":[2,3,7,25,33,34],"process_time":"2023-01-30 14:08:46.569291"}\r
{"date":"2019-07-17","id":"00467","result":[10,11,16,22,28,35],"process_time":"2023-01-30 14:08:46.569247"}\r
{"date":"2019-07-19","id":"00468","result":[9,12,23,26,28,43],"process_time":"2023-01-30 14:08:46.569202"}\r
{"date":"2019-07-21","id":"00469","result":[7,8,10,24,33,44],"process_time":"2023-01-30 14:08:46.569147"}\r
{"date":"2019-07-24","id":"00470","result":[20,22,25,39,44,45],"process_time":"2023-01-30 14:08:46.512435"}\r
{"date":"2019-07-26","id":"00471","result":[5,14,16,22,25,33],"process_time":"2023-01-30 14:08:46.512388"}\r
{"date":"2019-07-28","id":"00472","result":[5,14,16,24,42,43],"process_time":"2023-01-30 14:08:46.512323"}\r
{"date":"2019-07-31","id":"00473","result":[6,12,15,19,25,45],"process_time":"2023-01-30 14:08:46.512266"}\r
{"date":"2019-08-02","id":"00474","result":[11,18,20,22,25,26],"process_time":"2023-01-30 14:08:46.512221"}\r
{"date":"2019-08-04","id":"00475","result":[6,10,21,30,43,45],"process_time":"2023-01-30 14:08:46.512176"}\r
{"date":"2019-08-07","id":"00476","result":[1,5,13,31,32,43],"process_time":"2023-01-30 14:08:46.512131"}\r
{"date":"2019-08-09","id":"00477","result":[11,19,26,28,30,42],"process_time":"2023-01-30 14:08:46.512075"}\r
{"date":"2019-08-11","id":"00478","result":[1,4,7,9,25,31],"process_time":"2023-01-30 14:08:46.462663"}\r
{"date":"2019-08-14","id":"00479","result":[13,20,22,24,33,34],"process_time":"2023-01-30 14:08:46.462619"}\r
{"date":"2019-08-16","id":"00480","result":[6,14,15,19,31,39],"process_time":"2023-01-30 14:08:46.462573"}\r
{"date":"2019-08-18","id":"00481","result":[2,7,18,21,24,33],"process_time":"2023-01-30 14:08:46.462525"}\r
{"date":"2019-08-21","id":"00482","result":[6,8,17,20,21,31],"process_time":"2023-01-30 14:08:46.462463"}\r
{"date":"2019-08-23","id":"00483","result":[6,7,12,17,19,24],"process_time":"2023-01-30 14:08:46.462411"}\r
{"date":"2019-08-25","id":"00484","result":[7,8,15,20,24,31],"process_time":"2023-01-30 14:08:46.462361"}\r
{"date":"2019-08-28","id":"00485","result":[1,4,12,14,19,30],"process_time":"2023-01-30 14:08:46.462294"}\r
{"date":"2019-08-30","id":"00486","result":[5,6,22,23,25,44],"process_time":"2023-01-30 14:08:46.385710"}\r
{"date":"2019-09-01","id":"00487","result":[5,7,14,16,29,40],"process_time":"2023-01-30 14:08:46.385668"}\r
{"date":"2019-09-04","id":"00488","result":[1,9,11,23,30,37],"process_time":"2023-01-30 14:08:46.385625"}\r
{"date":"2019-09-06","id":"00489","result":[2,4,13,15,26,31],"process_time":"2023-01-30 14:08:46.385582"}\r
{"date":"2019-09-08","id":"00490","result":[6,9,11,26,28,36],"process_time":"2023-01-30 14:08:46.385539"}\r
{"date":"2019-09-11","id":"00491","result":[21,25,29,32,34,35],"process_time":"2023-01-30 14:08:46.385492"}\r
{"date":"2019-09-13","id":"00492","result":[2,15,17,25,30,38],"process_time":"2023-01-30 14:08:46.385438"}\r
{"date":"2019-09-15","id":"00493","result":[8,9,28,33,35,43],"process_time":"2023-01-30 14:08:46.385376"}\r
{"date":"2019-09-18","id":"00494","result":[3,9,13,17,19,20],"process_time":"2023-01-30 14:08:46.335877"}\r
{"date":"2019-09-20","id":"00495","result":[7,12,24,29,31,45],"process_time":"2023-01-30 14:08:46.335833"}\r
{"date":"2019-09-22","id":"00496","result":[3,6,21,36,38,39],"process_time":"2023-01-30 14:08:46.335788"}\r
{"date":"2019-09-25","id":"00497","result":[9,14,22,26,44,45],"process_time":"2023-01-30 14:08:46.335745"}\r
{"date":"2019-09-27","id":"00498","result":[6,9,11,28,37,44],"process_time":"2023-01-30 14:08:46.335703"}\r
{"date":"2019-09-29","id":"00499","result":[2,9,12,18,21,23],"process_time":"2023-01-30 14:08:46.335659"}\r
{"date":"2019-10-02","id":"00500","result":[2,6,7,25,28,41],"process_time":"2023-01-30 14:08:46.335615"}\r
{"date":"2019-10-04","id":"00501","result":[2,9,24,25,30,36],"process_time":"2023-01-30 14:08:46.335565"}\r
{"date":"2019-10-06","id":"00502","result":[1,6,17,30,44,45],"process_time":"2023-01-30 14:08:46.284117"}\r
{"date":"2019-10-09","id":"00503","result":[3,12,21,24,28,32],"process_time":"2023-01-30 14:08:46.284073"}\r
{"date":"2019-10-11","id":"00504","result":[6,12,14,27,28,36],"process_time":"2023-01-30 14:08:46.284028"}\r
{"date":"2019-10-13","id":"00505","result":[6,22,28,31,37,40],"process_time":"2023-01-30 14:08:46.283982"}\r
{"date":"2019-10-16","id":"00506","result":[1,4,23,28,41,42],"process_time":"2023-01-30 14:08:46.283937"}\r
{"date":"2019-10-18","id":"00507","result":[4,14,15,22,28,39],"process_time":"2023-01-30 14:08:46.283891"}\r
{"date":"2019-10-20","id":"00508","result":[1,3,8,15,38,40],"process_time":"2023-01-30 14:08:46.283843"}\r
{"date":"2019-10-23","id":"00509","result":[2,9,21,23,32,41],"process_time":"2023-01-30 14:08:46.283782"}\r
{"date":"2019-10-25","id":"00510","result":[4,7,9,22,32,37],"process_time":"2023-01-30 14:08:46.216223"}\r
{"date":"2019-10-27","id":"00511","result":[1,19,29,30,40,42],"process_time":"2023-01-30 14:08:46.216178"}\r
{"date":"2019-10-30","id":"00512","result":[2,5,8,12,29,38],"process_time":"2023-01-30 14:08:46.216133"}\r
{"date":"2019-11-01","id":"00513","result":[6,11,20,30,37,40],"process_time":"2023-01-30 14:08:46.216087"}\r
{"date":"2019-11-03","id":"00514","result":[28,30,32,38,44,45],"process_time":"2023-01-30 14:08:46.216043"}\r
{"date":"2019-11-06","id":"00515","result":[3,15,22,23,38,43],"process_time":"2023-01-30 14:08:46.215999"}\r
{"date":"2019-11-08","id":"00516","result":[4,16,19,30,32,44],"process_time":"2023-01-30 14:08:46.215953"}\r
{"date":"2019-11-10","id":"00517","result":[4,14,21,28,32,36],"process_time":"2023-01-30 14:08:46.215899"}\r
{"date":"2019-11-13","id":"00518","result":[17,19,24,30,31,40],"process_time":"2023-01-30 14:08:46.788012"}\r
{"date":"2019-11-15","id":"00519","result":[2,13,27,33,40,41],"process_time":"2023-01-30 14:08:46.787970"}\r
{"date":"2019-11-17","id":"00520","result":[6,7,14,31,39,44],"process_time":"2023-01-30 14:08:46.787926"}\r
{"date":"2019-11-20","id":"00521","result":[10,21,22,24,43,44],"process_time":"2023-01-30 14:08:46.787883"}\r
{"date":"2019-11-22","id":"00522","result":[1,9,10,19,30,38],"process_time":"2023-01-30 14:08:46.787840"}\r
{"date":"2019-11-24","id":"00523","result":[5,21,24,28,29,34],"process_time":"2023-01-30 14:08:46.787797"}\r
{"date":"2019-11-27","id":"00524","result":[3,5,13,19,20,33],"process_time":"2023-01-30 14:08:46.787752"}\r
{"date":"2019-11-29","id":"00525","result":[14,15,16,17,19,34],"process_time":"2023-01-30 14:08:46.787698"}\r
{"date":"2019-12-01","id":"00526","result":[3,14,16,27,31,35],"process_time":"2023-01-30 14:08:46.730284"}\r
{"date":"2019-12-04","id":"00527","result":[16,19,24,30,32,35],"process_time":"2023-01-30 14:08:46.730239"}\r
{"date":"2019-12-06","id":"00528","result":[2,20,26,35,43,45],"process_time":"2023-01-30 14:08:46.730195"}\r
{"date":"2019-12-08","id":"00529","result":[12,20,30,31,34,44],"process_time":"2023-01-30 14:08:46.730151"}\r
{"date":"2019-12-11","id":"00530","result":[1,2,8,27,29,39],"process_time":"2023-01-30 14:08:46.730107"}\r
{"date":"2019-12-13","id":"00531","result":[2,8,9,25,26,40],"process_time":"2023-01-30 14:08:46.730062"}\r
{"date":"2019-12-15","id":"00532","result":[3,13,15,16,22,36],"process_time":"2023-01-30 14:08:46.730016"}\r
{"date":"2019-12-18","id":"00533","result":[8,9,12,19,22,25],"process_time":"2023-01-30 14:08:46.729960"}\r
{"date":"2019-12-20","id":"00534","result":[1,9,16,27,38,45],"process_time":"2023-01-30 14:08:46.663184"}\r
{"date":"2019-12-22","id":"00535","result":[9,10,11,18,22,36],"process_time":"2023-01-30 14:08:46.663141"}\r
{"date":"2019-12-25","id":"00536","result":[10,18,25,26,36,43],"process_time":"2023-01-30 14:08:46.663098"}\r
{"date":"2019-12-27","id":"00537","result":[2,7,10,12,33,43],"process_time":"2023-01-30 14:08:46.663055"}\r
{"date":"2019-12-29","id":"00538","result":[7,12,21,24,35,43],"process_time":"2023-01-30 14:08:46.663011"}\r
{"date":"2020-01-01","id":"00539","result":[8,10,23,26,37,38],"process_time":"2023-01-30 14:08:46.662966"}\r
{"date":"2020-01-03","id":"00540","result":[1,15,17,26,32,44],"process_time":"2023-01-30 14:08:46.662922"}\r
{"date":"2020-01-05","id":"00541","result":[5,11,12,26,44,45],"process_time":"2023-01-30 14:08:46.662800"}\r
{"date":"2020-01-08","id":"00542","result":[2,4,10,21,25,43],"process_time":"2023-01-30 14:08:46.604294"}\r
{"date":"2020-01-10","id":"00543","result":[10,18,24,35,41,43],"process_time":"2023-01-30 14:08:46.604250"}\r
{"date":"2020-01-12","id":"00544","result":[7,12,17,21,35,45],"process_time":"2023-01-30 14:08:46.604207"}\r
{"date":"2020-01-15","id":"00545","result":[2,8,19,31,38,44],"process_time":"2023-01-30 14:08:46.604164"}\r
{"date":"2020-01-17","id":"00546","result":[8,26,28,37,40,42],"process_time":"2023-01-30 14:08:46.604119"}\r
{"date":"2020-01-19","id":"00547","result":[1,4,19,25,35,39],"process_time":"2023-01-30 14:08:46.604074"}\r
{"date":"2020-01-22","id":"00548","result":[1,15,16,34,36,42],"process_time":"2023-01-30 14:08:46.604028"}\r
{"date":"2020-01-26","id":"00549","result":[4,5,9,25,33,37],"process_time":"2023-01-30 14:08:46.603974"}\r
{"date":"2020-01-29","id":"00550","result":[3,10,16,24,39,44],"process_time":"2023-01-30 14:08:46.523791"}\r
{"date":"2020-01-31","id":"00551","result":[8,9,20,25,30,40],"process_time":"2023-01-30 14:08:46.523748"}\r
{"date":"2020-02-02","id":"00552","result":[1,4,16,32,35,38],"process_time":"2023-01-30 14:08:46.523704"}\r
{"date":"2020-02-05","id":"00553","result":[9,19,24,37,38,45],"process_time":"2023-01-30 14:08:46.523660"}\r
{"date":"2020-02-07","id":"00554","result":[6,11,15,33,40,44],"process_time":"2023-01-30 14:08:46.523615"}\r
{"date":"2020-02-09","id":"00555","result":[1,4,18,22,26,35],"process_time":"2023-01-30 14:08:46.523570"}\r
{"date":"2020-02-12","id":"00556","result":[5,13,16,20,24,35],"process_time":"2023-01-30 14:08:46.523525"}\r
{"date":"2020-02-14","id":"00557","result":[4,14,24,32,36,43],"process_time":"2023-01-30 14:08:46.523470"}\r
{"date":"2020-02-16","id":"00558","result":[1,4,14,36,37,41],"process_time":"2023-01-30 14:08:46.468120"}\r
{"date":"2020-02-19","id":"00559","result":[1,16,23,25,30,38],"process_time":"2023-01-30 14:08:46.468076"}\r
{"date":"2020-02-21","id":"00560","result":[13,15,22,28,29,41],"process_time":"2023-01-30 14:08:46.468032"}\r
{"date":"2020-02-23","id":"00561","result":[1,6,16,23,34,42],"process_time":"2023-01-30 14:08:46.467987"}\r
{"date":"2020-02-26","id":"00562","result":[2,10,12,20,24,39],"process_time":"2023-01-30 14:08:46.467942"}\r
{"date":"2020-02-28","id":"00563","result":[2,19,23,27,29,38],"process_time":"2023-01-30 14:08:46.467898"}\r
{"date":"2020-03-01","id":"00564","result":[1,6,7,13,26,39],"process_time":"2023-01-30 14:08:46.467846"}\r
{"date":"2020-03-04","id":"00565","result":[1,7,17,24,35,41],"process_time":"2023-01-30 14:08:46.467787"}\r
{"date":"2020-03-06","id":"00566","result":[6,9,10,16,26,42],"process_time":"2023-01-30 14:08:46.397223"}\r
{"date":"2020-03-08","id":"00567","result":[3,13,17,19,21,43],"process_time":"2023-01-30 14:08:46.397178"}\r
{"date":"2020-03-11","id":"00568","result":[12,16,29,35,37,44],"process_time":"2023-01-30 14:08:46.397134"}\r
{"date":"2020-03-13","id":"00569","result":[8,13,20,28,35,45],"process_time":"2023-01-30 14:08:46.397090"}\r
{"date":"2020-03-15","id":"00570","result":[4,7,11,17,19,31],"process_time":"2023-01-30 14:08:46.397046"}\r
{"date":"2020-03-18","id":"00571","result":[6,21,30,37,38,45],"process_time":"2023-01-30 14:08:46.397001"}\r
{"date":"2020-03-20","id":"00572","result":[8,23,29,37,39,44],"process_time":"2023-01-30 14:08:46.396956"}\r
{"date":"2020-03-22","id":"00573","result":[2,10,19,22,24,29],"process_time":"2023-01-30 14:08:46.396901"}\r
{"date":"2020-03-25","id":"00574","result":[26,31,33,37,38,45],"process_time":"2023-01-30 14:08:46.347930"}\r
{"date":"2020-03-27","id":"00575","result":[1,6,10,35,36,45],"process_time":"2023-01-30 14:08:46.347885"}\r
{"date":"2020-03-29","id":"00576","result":[7,10,23,36,39,44],"process_time":"2023-01-30 14:08:46.347841"}\r
{"date":"2020-04-24","id":"00577","result":[10,31,37,39,40,43],"process_time":"2023-01-30 14:08:46.347798"}\r
{"date":"2020-04-26","id":"00578","result":[5,25,30,36,37,41],"process_time":"2023-01-30 14:08:46.347753"}\r
{"date":"2020-04-29","id":"00579","result":[1,8,11,13,15,32],"process_time":"2023-01-30 14:08:46.347708"}\r
{"date":"2020-05-01","id":"00580","result":[6,7,16,37,40,44],"process_time":"2023-01-30 14:08:46.347658"}\r
{"date":"2020-05-03","id":"00581","result":[5,18,29,32,38,44],"process_time":"2023-01-30 14:08:46.347584"}\r
{"date":"2020-05-06","id":"00582","result":[3,18,25,29,30,44],"process_time":"2023-01-30 14:08:46.285953"}\r
{"date":"2020-05-08","id":"00583","result":[1,3,7,12,22,25],"process_time":"2023-01-30 14:08:46.285910"}\r
{"date":"2020-05-10","id":"00584","result":[7,9,23,32,33,37],"process_time":"2023-01-30 14:08:46.285867"}\r
{"date":"2020-05-13","id":"00585","result":[6,20,21,35,40,45],"process_time":"2023-01-30 14:08:46.285823"}\r
{"date":"2020-05-15","id":"00586","result":[3,12,13,28,33,36],"process_time":"2023-01-30 14:08:46.285780"}\r
{"date":"2020-05-17","id":"00587","result":[2,4,21,30,33,37],"process_time":"2023-01-30 14:08:46.285735"}\r
{"date":"2020-05-20","id":"00588","result":[1,8,15,23,25,39],"process_time":"2023-01-30 14:08:46.285687"}\r
{"date":"2020-05-22","id":"00589","result":[3,8,19,28,35,41],"process_time":"2023-01-30 14:08:46.285630"}\r
{"date":"2020-05-24","id":"00590","result":[1,29,30,32,34,35],"process_time":"2023-01-30 14:08:46.221135"}\r
{"date":"2020-05-27","id":"00591","result":[6,15,29,30,37,42],"process_time":"2023-01-30 14:08:46.221088"}\r
{"date":"2020-05-29","id":"00592","result":[4,10,23,26,35,37],"process_time":"2023-01-30 14:08:46.221044"}\r
{"date":"2020-05-31","id":"00593","result":[1,6,13,27,35,40],"process_time":"2023-01-30 14:08:46.221000"}\r
{"date":"2020-06-03","id":"00594","result":[1,15,17,19,40,43],"process_time":"2023-01-30 14:08:46.220954"}\r
{"date":"2020-06-05","id":"00595","result":[10,13,22,28,38,43],"process_time":"2023-01-30 14:08:46.220908"}\r
{"date":"2020-06-07","id":"00596","result":[6,7,11,16,23,44],"process_time":"2023-01-30 14:08:46.220861"}\r
{"date":"2020-06-10","id":"00597","result":[2,11,23,25,26,35],"process_time":"2023-01-30 14:08:46.220807"}\r
{"date":"2020-06-12","id":"00598","result":[5,16,22,27,30,31],"process_time":"2023-01-30 14:08:46.759762"}\r
{"date":"2020-06-14","id":"00599","result":[19,22,24,41,44,45],"process_time":"2023-01-30 14:08:46.759711"}\r
{"date":"2020-06-17","id":"00600","result":[7,16,28,33,34,45],"process_time":"2023-01-30 14:08:46.759669"}\r
{"date":"2020-06-19","id":"00601","result":[4,12,17,19,32,45],"process_time":"2023-01-30 14:08:46.759627"}\r
{"date":"2020-06-21","id":"00602","result":[7,9,13,33,40,44],"process_time":"2023-01-30 14:08:46.759583"}\r
{"date":"2020-06-24","id":"00603","result":[7,17,18,32,39,40],"process_time":"2023-01-30 14:08:46.759537"}\r
{"date":"2020-06-26","id":"00604","result":[9,23,27,30,38,41],"process_time":"2023-01-30 14:08:46.759491"}\r
{"date":"2020-06-28","id":"00605","result":[4,15,24,36,37,41],"process_time":"2023-01-30 14:08:46.759434"}\r
{"date":"2020-07-01","id":"00606","result":[10,13,14,26,32,33],"process_time":"2023-01-30 14:08:46.670393"}\r
{"date":"2020-07-03","id":"00607","result":[4,5,17,18,22,36],"process_time":"2023-01-30 14:08:46.670355"}\r
{"date":"2020-07-05","id":"00608","result":[5,8,10,17,22,31],"process_time":"2023-01-30 14:08:46.670317"}\r
{"date":"2020-07-08","id":"00609","result":[14,15,17,21,31,38],"process_time":"2023-01-30 14:08:46.670279"}\r
{"date":"2020-07-10","id":"00610","result":[18,20,22,33,35,39],"process_time":"2023-01-30 14:08:46.670241"}\r
{"date":"2020-07-12","id":"00611","result":[2,15,21,27,31,35],"process_time":"2023-01-30 14:08:46.670202"}\r
{"date":"2020-07-15","id":"00612","result":[10,11,18,19,20,45],"process_time":"2023-01-30 14:08:46.670161"}\r
{"date":"2020-07-17","id":"00613","result":[4,10,18,20,32,45],"process_time":"2023-01-30 14:08:46.670113"}\r
{"date":"2020-07-19","id":"00614","result":[1,13,14,19,42,45],"process_time":"2023-01-30 14:08:46.606108"}\r
{"date":"2020-07-22","id":"00615","result":[9,13,18,24,26,42],"process_time":"2023-01-30 14:08:46.606057"}\r
{"date":"2020-07-24","id":"00616","result":[4,25,31,35,39,41],"process_time":"2023-01-30 14:08:46.605986"}\r
{"date":"2020-07-26","id":"00617","result":[5,15,21,39,43,45],"process_time":"2023-01-30 14:08:46.605929"}\r
{"date":"2020-07-29","id":"00618","result":[6,14,26,41,42,43],"process_time":"2023-01-30 14:08:46.605886"}\r
{"date":"2020-07-31","id":"00619","result":[4,9,19,29,36,41],"process_time":"2023-01-30 14:08:46.605842"}\r
{"date":"2020-08-02","id":"00620","result":[6,9,12,17,41,42],"process_time":"2023-01-30 14:08:46.605797"}\r
{"date":"2020-08-05","id":"00621","result":[14,18,19,32,33,38],"process_time":"2023-01-30 14:08:46.605742"}\r
{"date":"2020-08-07","id":"00622","result":[17,26,35,40,43,44],"process_time":"2023-01-30 14:08:46.533533"}\r
{"date":"2020-08-09","id":"00623","result":[11,13,14,43,44,45],"process_time":"2023-01-30 14:08:46.533489"}\r
{"date":"2020-08-12","id":"00624","result":[7,21,34,38,43,44],"process_time":"2023-01-30 14:08:46.533444"}\r
{"date":"2020-08-14","id":"00625","result":[9,18,21,24,34,41],"process_time":"2023-01-30 14:08:46.533385"}\r
{"date":"2020-08-16","id":"00626","result":[2,5,6,20,33,39],"process_time":"2023-01-30 14:08:46.533326"}\r
{"date":"2020-08-19","id":"00627","result":[7,20,36,37,43,45],"process_time":"2023-01-30 14:08:46.533281"}\r
{"date":"2020-08-21","id":"00628","result":[7,8,26,30,37,43],"process_time":"2023-01-30 14:08:46.533235"}\r
{"date":"2020-08-23","id":"00629","result":[10,14,19,25,36,39],"process_time":"2023-01-30 14:08:46.533179"}\r
{"date":"2020-08-26","id":"00630","result":[2,18,24,28,35,42],"process_time":"2023-01-30 14:08:46.476010"}\r
{"date":"2020-08-28","id":"00631","result":[10,11,14,23,27,37],"process_time":"2023-01-30 14:08:46.475965"}\r
{"date":"2020-08-30","id":"00632","result":[6,8,18,19,29,33],"process_time":"2023-01-30 14:08:46.475920"}\r
{"date":"2020-09-02","id":"00633","result":[8,10,14,16,18,24],"process_time":"2023-01-30 14:08:46.475871"}\r
{"date":"2020-09-04","id":"00634","result":[7,16,20,30,40,41],"process_time":"2023-01-30 14:08:46.475826"}\r
{"date":"2020-09-06","id":"00635","result":[1,6,19,29,31,44],"process_time":"2023-01-30 14:08:46.475780"}\r
{"date":"2020-09-09","id":"00636","result":[19,21,34,35,36,39],"process_time":"2023-01-30 14:08:46.475733"}\r
{"date":"2020-09-11","id":"00637","result":[4,11,13,16,17,33],"process_time":"2023-01-30 14:08:46.475672"}\r
{"date":"2020-09-13","id":"00638","result":[20,23,28,37,40,44],"process_time":"2023-01-30 14:08:46.411183"}\r
{"date":"2020-09-16","id":"00639","result":[5,20,29,30,38,40],"process_time":"2023-01-30 14:08:46.411139"}\r
{"date":"2020-09-18","id":"00640","result":[10,19,21,23,27,33],"process_time":"2023-01-30 14:08:46.411094"}\r
{"date":"2020-09-20","id":"00641","result":[5,7,9,13,15,16],"process_time":"2023-01-30 14:08:46.411048"}\r
{"date":"2020-09-23","id":"00642","result":[2,8,17,23,30,41],"process_time":"2023-01-30 14:08:46.410997"}\r
{"date":"2020-09-25","id":"00643","result":[14,20,22,35,44,45],"process_time":"2023-01-30 14:08:46.410941"}\r
{"date":"2020-09-27","id":"00644","result":[1,12,26,31,37,38],"process_time":"2023-01-30 14:08:46.410893"}\r
{"date":"2020-09-30","id":"00645","result":[2,5,31,32,42,44],"process_time":"2023-01-30 14:08:46.410834"}\r
{"date":"2020-10-02","id":"00646","result":[9,11,21,31,32,37],"process_time":"2023-01-30 14:08:46.364954"}\r
{"date":"2020-10-04","id":"00647","result":[9,16,19,25,26,39],"process_time":"2023-01-30 14:08:46.364910"}\r
{"date":"2020-10-07","id":"00648","result":[13,15,25,26,28,34],"process_time":"2023-01-30 14:08:46.364866"}\r
{"date":"2020-10-09","id":"00649","result":[15,19,23,30,33,39],"process_time":"2023-01-30 14:08:46.364822"}\r
{"date":"2020-10-11","id":"00650","result":[12,18,28,31,40,45],"process_time":"2023-01-30 14:08:46.364778"}\r
{"date":"2020-10-14","id":"00651","result":[4,7,23,32,43,44],"process_time":"2023-01-30 14:08:46.364735"}\r
{"date":"2020-10-16","id":"00652","result":[4,14,16,23,24,27],"process_time":"2023-01-30 14:08:46.364691"}\r
{"date":"2020-10-18","id":"00653","result":[1,14,25,26,30,40],"process_time":"2023-01-30 14:08:46.364637"}\r
{"date":"2020-10-21","id":"00654","result":[4,11,26,36,38,41],"process_time":"2023-01-30 14:08:46.317026"}\r
{"date":"2020-10-23","id":"00655","result":[5,10,16,23,34,45],"process_time":"2023-01-30 14:08:46.316983"}\r
{"date":"2020-10-25","id":"00656","result":[11,19,30,38,41,45],"process_time":"2023-01-30 14:08:46.316940"}\r
{"date":"2020-10-28","id":"00657","result":[1,4,7,15,35,45],"process_time":"2023-01-30 14:08:46.316896"}\r
{"date":"2020-10-30","id":"00658","result":[4,5,14,18,23,43],"process_time":"2023-01-30 14:08:46.316852"}\r
{"date":"2020-11-01","id":"00659","result":[6,21,27,30,32,44],"process_time":"2023-01-30 14:08:46.316777"}\r
{"date":"2020-11-04","id":"00660","result":[3,8,11,13,26,38],"process_time":"2023-01-30 14:08:46.316733"}\r
{"date":"2020-11-06","id":"00661","result":[19,24,30,32,36,37],"process_time":"2023-01-30 14:08:46.316678"}\r
{"date":"2020-11-08","id":"00662","result":[3,12,14,16,23,33],"process_time":"2023-01-30 14:08:46.271442"}\r
{"date":"2020-11-11","id":"00663","result":[4,10,12,17,20,35],"process_time":"2023-01-30 14:08:46.271393"}\r
{"date":"2020-11-13","id":"00664","result":[8,22,23,33,34,36],"process_time":"2023-01-30 14:08:46.271332"}\r
{"date":"2020-11-15","id":"00665","result":[14,16,21,29,40,41],"process_time":"2023-01-30 14:08:46.271275"}\r
{"date":"2020-11-18","id":"00666","result":[18,19,21,31,39,44],"process_time":"2023-01-30 14:08:46.271231"}\r
{"date":"2020-11-20","id":"00667","result":[2,17,24,29,31,37],"process_time":"2023-01-30 14:08:46.271187"}\r
{"date":"2020-11-22","id":"00668","result":[9,16,17,24,32,40],"process_time":"2023-01-30 14:08:46.271142"}\r
{"date":"2020-11-25","id":"00669","result":[1,5,7,8,25,40],"process_time":"2023-01-30 14:08:46.271086"}\r
{"date":"2020-11-27","id":"00670","result":[1,9,12,13,37,43],"process_time":"2023-01-30 14:08:46.209199"}\r
{"date":"2020-11-29","id":"00671","result":[6,7,14,18,37,43],"process_time":"2023-01-30 14:08:46.209155"}\r
{"date":"2020-12-02","id":"00672","result":[4,5,7,10,25,39],"process_time":"2023-01-30 14:08:46.209106"}\r
{"date":"2020-12-04","id":"00673","result":[3,5,33,37,41,43],"process_time":"2023-01-30 14:08:46.209061"}\r
{"date":"2020-12-06","id":"00674","result":[11,21,24,27,29,37],"process_time":"2023-01-30 14:08:46.209015"}\r
{"date":"2020-12-09","id":"00675","result":[16,24,27,31,36,43],"process_time":"2023-01-30 14:08:46.208970"}\r
{"date":"2020-12-11","id":"00676","result":[23,24,25,35,37,39],"process_time":"2023-01-30 14:08:46.208921"}\r
{"date":"2020-12-13","id":"00677","result":[10,12,20,36,41,44],"process_time":"2023-01-30 14:08:46.208859"}\r
{"date":"2020-12-16","id":"00678","result":[10,11,22,27,36,41],"process_time":"2023-01-30 14:08:46.765525"}\r
{"date":"2020-12-18","id":"00679","result":[4,9,14,23,32,38],"process_time":"2023-01-30 14:08:46.765480"}\r
{"date":"2020-12-20","id":"00680","result":[15,18,28,30,34,44],"process_time":"2023-01-30 14:08:46.765435"}\r
{"date":"2020-12-23","id":"00681","result":[7,11,17,31,35,40],"process_time":"2023-01-30 14:08:46.765385"}\r
{"date":"2020-12-25","id":"00682","result":[6,12,15,22,33,39],"process_time":"2023-01-30 14:08:46.765339"}\r
{"date":"2020-12-27","id":"00683","result":[3,11,17,19,34,39],"process_time":"2023-01-30 14:08:46.765283"}\r
{"date":"2020-12-30","id":"00684","result":[1,13,20,26,35,37],"process_time":"2023-01-30 14:08:46.765206"}\r
{"date":"2021-01-01","id":"00685","result":[10,16,24,26,30,32],"process_time":"2023-01-30 14:08:46.765153"}\r
{"date":"2021-01-03","id":"00686","result":[4,31,34,36,40,43],"process_time":"2023-01-30 14:08:46.682784"}\r
{"date":"2021-01-06","id":"00687","result":[22,27,30,35,40,45],"process_time":"2023-01-30 14:08:46.682741"}\r
{"date":"2021-01-08","id":"00688","result":[8,19,22,25,32,35],"process_time":"2023-01-30 14:08:46.682698"}\r
{"date":"2021-01-10","id":"00689","result":[10,11,22,32,38,43],"process_time":"2023-01-30 14:08:46.682654"}\r
{"date":"2021-01-13","id":"00690","result":[19,20,21,28,33,41],"process_time":"2023-01-30 14:08:46.682611"}\r
{"date":"2021-01-15","id":"00691","result":[4,6,10,13,26,43],"process_time":"2023-01-30 14:08:46.682567"}\r
{"date":"2021-01-17","id":"00692","result":[4,5,32,39,40,42],"process_time":"2023-01-30 14:08:46.682516"}\r
{"date":"2021-01-20","id":"00693","result":[7,20,29,30,40,45],"process_time":"2023-01-30 14:08:46.682450"}\r
{"date":"2021-01-22","id":"00694","result":[1,6,7,20,28,43],"process_time":"2023-01-30 14:08:46.624790"}\r
{"date":"2021-01-24","id":"00695","result":[8,9,23,25,31,32],"process_time":"2023-01-30 14:08:46.624747"}\r
{"date":"2021-01-27","id":"00696","result":[1,7,11,28,41,44],"process_time":"2023-01-30 14:08:46.624703"}\r
{"date":"2021-01-29","id":"00697","result":[6,7,8,29,35,39],"process_time":"2023-01-30 14:08:46.624659"}\r
{"date":"2021-01-31","id":"00698","result":[4,6,7,11,34,41],"process_time":"2023-01-30 14:08:46.624615"}\r
{"date":"2021-02-03","id":"00699","result":[7,9,14,23,35,41],"process_time":"2023-01-30 14:08:46.624571"}\r
{"date":"2021-02-05","id":"00700","result":[2,8,31,32,42,44],"process_time":"2023-01-30 14:08:46.624525"}\r
{"date":"2021-02-07","id":"00701","result":[1,4,7,15,41,42],"process_time":"2023-01-30 14:08:46.624472"}\r
{"date":"2021-02-10","id":"00702","result":[8,13,18,19,21,24],"process_time":"2023-01-30 14:08:46.574234"}\r
{"date":"2021-02-14","id":"00703","result":[3,13,18,21,39,44],"process_time":"2023-01-30 14:08:46.574185"}\r
{"date":"2021-02-17","id":"00704","result":[3,18,21,22,36,44],"process_time":"2023-01-30 14:08:46.574133"}\r
{"date":"2021-02-19","id":"00705","result":[12,19,22,23,34,44],"process_time":"2023-01-30 14:08:46.574089"}\r
{"date":"2021-02-21","id":"00706","result":[6,7,22,24,27,37],"process_time":"2023-01-30 14:08:46.574045"}\r
{"date":"2021-02-24","id":"00707","result":[2,13,19,33,40,43],"process_time":"2023-01-30 14:08:46.573985"}\r
{"date":"2021-02-26","id":"00708","result":[11,13,19,27,37,41],"process_time":"2023-01-30 14:08:46.573924"}\r
{"date":"2021-02-28","id":"00709","result":[4,5,25,28,29,42],"process_time":"2023-01-30 14:08:46.573871"}\r
{"date":"2021-03-03","id":"00710","result":[1,20,28,37,40,44],"process_time":"2023-01-30 14:08:46.516549"}\r
{"date":"2021-03-05","id":"00711","result":[9,11,13,21,27,41],"process_time":"2023-01-30 14:08:46.516505"}\r
{"date":"2021-03-07","id":"00712","result":[4,12,25,28,33,45],"process_time":"2023-01-30 14:08:46.516461"}\r
{"date":"2021-03-10","id":"00713","result":[5,14,15,19,25,33],"process_time":"2023-01-30 14:08:46.516415"}\r
{"date":"2021-03-12","id":"00714","result":[5,11,17,34,38,42],"process_time":"2023-01-30 14:08:46.516366"}\r
{"date":"2021-03-14","id":"00715","result":[1,9,11,32,34,42],"process_time":"2023-01-30 14:08:46.516310"}\r
{"date":"2021-03-17","id":"00716","result":[6,11,26,28,36,41],"process_time":"2023-01-30 14:08:46.516263"}\r
{"date":"2021-03-19","id":"00717","result":[5,6,24,34,36,37],"process_time":"2023-01-30 14:08:46.516198"}\r
{"date":"2021-03-21","id":"00718","result":[8,9,11,31,36,39],"process_time":"2023-01-30 14:08:46.457615"}\r
{"date":"2021-03-24","id":"00719","result":[7,14,23,26,37,39],"process_time":"2023-01-30 14:08:46.457570"}\r
{"date":"2021-03-26","id":"00720","result":[2,11,15,18,23,42],"process_time":"2023-01-30 14:08:46.457527"}\r
{"date":"2021-03-28","id":"00721","result":[23,26,40,41,43,44],"process_time":"2023-01-30 14:08:46.457484"}\r
{"date":"2021-03-31","id":"00722","result":[2,4,6,36,41,42],"process_time":"2023-01-30 14:08:46.457437"}\r
{"date":"2021-04-02","id":"00723","result":[1,5,9,16,42,44],"process_time":"2023-01-30 14:08:46.457381"}\r
{"date":"2021-04-04","id":"00724","result":[5,20,27,30,38,43],"process_time":"2023-01-30 14:08:46.457334"}\r
{"date":"2021-04-07","id":"00725","result":[13,15,19,25,33,34],"process_time":"2023-01-30 14:08:46.457281"}\r
{"date":"2021-04-09","id":"00726","result":[3,4,8,17,19,37],"process_time":"2023-01-30 14:08:46.390418"}\r
{"date":"2021-04-11","id":"00727","result":[3,23,27,32,34,39],"process_time":"2023-01-30 14:08:46.390354"}\r
{"date":"2021-04-14","id":"00728","result":[11,12,16,18,33,35],"process_time":"2023-01-30 14:08:46.390299"}\r
{"date":"2021-04-16","id":"00729","result":[8,9,11,28,30,39],"process_time":"2023-01-30 14:08:46.390256"}\r
{"date":"2021-04-18","id":"00730","result":[7,9,15,23,26,27],"process_time":"2023-01-30 14:08:46.390213"}\r
{"date":"2021-04-21","id":"00731","result":[3,12,19,27,32,35],"process_time":"2023-01-30 14:08:46.390170"}\r
{"date":"2021-04-23","id":"00732","result":[13,16,18,22,34,39],"process_time":"2023-01-30 14:08:46.390125"}\r
{"date":"2021-04-25","id":"00733","result":[8,19,21,28,32,44],"process_time":"2023-01-30 14:08:46.390069"}\r
{"date":"2021-04-28","id":"00734","result":[21,39,40,41,43,45],"process_time":"2023-01-30 14:08:46.341151"}\r
{"date":"2021-04-30","id":"00735","result":[3,4,20,21,36,41],"process_time":"2023-01-30 14:08:46.341096"}\r
{"date":"2021-05-02","id":"00736","result":[7,8,30,35,40,44],"process_time":"2023-01-30 14:08:46.341036"}\r
{"date":"2021-05-05","id":"00737","result":[3,14,20,22,37,44],"process_time":"2023-01-30 14:08:46.340952"}\r
{"date":"2021-05-07","id":"00738","result":[10,20,21,27,33,34],"process_time":"2023-01-30 14:08:46.340877"}\r
{"date":"2021-05-09","id":"00739","result":[1,7,16,24,27,37],"process_time":"2023-01-30 14:08:46.340820"}\r
{"date":"2021-05-12","id":"00740","result":[9,15,22,27,34,42],"process_time":"2023-01-30 14:08:46.340765"}\r
{"date":"2021-05-14","id":"00741","result":[3,11,16,20,24,30],"process_time":"2023-01-30 14:08:46.340700"}\r
{"date":"2021-05-16","id":"00742","result":[13,23,33,37,40,43],"process_time":"2023-01-30 14:08:46.277935"}\r
{"date":"2021-05-19","id":"00743","result":[3,12,23,29,33,34],"process_time":"2023-01-30 14:08:46.277891"}\r
{"date":"2021-05-21","id":"00744","result":[4,28,37,38,40,42],"process_time":"2023-01-30 14:08:46.277847"}\r
{"date":"2021-05-23","id":"00745","result":[11,14,22,26,29,44],"process_time":"2023-01-30 14:08:46.277804"}\r
{"date":"2021-05-26","id":"00746","result":[1,10,22,36,38,45],"process_time":"2023-01-30 14:08:46.277760"}\r
{"date":"2021-05-28","id":"00747","result":[2,15,33,41,44,45],"process_time":"2023-01-30 14:08:46.277715"}\r
{"date":"2021-05-30","id":"00748","result":[7,10,19,30,40,45],"process_time":"2023-01-30 14:08:46.277667"}\r
{"date":"2021-06-02","id":"00749","result":[10,20,22,26,31,42],"process_time":"2023-01-30 14:08:46.277610"}\r
{"date":"2021-06-04","id":"00750","result":[19,24,31,32,35,36],"process_time":"2023-01-30 14:08:46.214808"}\r
{"date":"2021-06-06","id":"00751","result":[5,7,10,13,14,42],"process_time":"2023-01-30 14:08:46.214764"}\r
{"date":"2021-06-09","id":"00752","result":[2,7,18,20,24,36],"process_time":"2023-01-30 14:08:46.214720"}\r
{"date":"2021-06-11","id":"00753","result":[8,12,13,14,32,40],"process_time":"2023-01-30 14:08:46.214675"}\r
{"date":"2021-06-13","id":"00754","result":[3,10,12,13,36,44],"process_time":"2023-01-30 14:08:46.214631"}\r
{"date":"2021-06-16","id":"00755","result":[11,19,24,28,31,39],"process_time":"2023-01-30 14:08:46.214586"}\r
{"date":"2021-06-18","id":"00756","result":[10,11,28,29,40,42],"process_time":"2023-01-30 14:08:46.214539"}\r
{"date":"2021-06-20","id":"00757","result":[10,24,27,42,43,45],"process_time":"2023-01-30 14:08:46.214486"}\r
{"date":"2021-06-23","id":"00758","result":[4,7,20,28,33,41],"process_time":"2023-01-30 14:08:51.647872"}\r
{"date":"2021-06-25","id":"00759","result":[3,5,6,23,24,39],"process_time":"2023-01-30 14:08:51.647828"}\r
{"date":"2021-06-27","id":"00760","result":[5,10,29,37,42,44],"process_time":"2023-01-30 14:08:51.647783"}\r
{"date":"2021-06-30","id":"00761","result":[2,5,6,8,10,32],"process_time":"2023-01-30 14:08:51.647738"}\r
{"date":"2021-07-02","id":"00762","result":[1,14,15,18,32,45],"process_time":"2023-01-30 14:08:51.647692"}\r
{"date":"2021-07-04","id":"00763","result":[3,14,15,21,26,37],"process_time":"2023-01-30 14:08:51.647648"}\r
{"date":"2021-07-07","id":"00764","result":[1,6,13,30,34,43],"process_time":"2023-01-30 14:08:51.647602"}\r
{"date":"2021-07-09","id":"00765","result":[4,9,17,18,28,32],"process_time":"2023-01-30 14:08:51.647546"}\r
{"date":"2021-07-11","id":"00766","result":[2,8,15,17,19,30],"process_time":"2023-01-30 14:08:51.589294"}\r
{"date":"2021-07-14","id":"00767","result":[4,11,22,29,37,43],"process_time":"2023-01-30 14:08:51.589251"}\r
{"date":"2021-07-16","id":"00768","result":[1,9,18,26,41,45],"process_time":"2023-01-30 14:08:51.589209"}\r
{"date":"2021-07-18","id":"00769","result":[3,8,19,21,25,36],"process_time":"2023-01-30 14:08:51.589166"}\r
{"date":"2021-07-21","id":"00770","result":[8,10,12,29,34,37],"process_time":"2023-01-30 14:08:51.589123"}\r
{"date":"2021-07-23","id":"00771","result":[19,26,31,33,41,42],"process_time":"2023-01-30 14:08:51.589081"}\r
{"date":"2021-08-18","id":"00772","result":[10,16,19,27,28,36],"process_time":"2023-01-30 14:08:51.589036"}\r
{"date":"2021-08-20","id":"00773","result":[4,8,17,27,32,36],"process_time":"2023-01-30 14:08:51.588985"}\r
{"date":"2021-08-22","id":"00774","result":[6,7,18,25,40,43],"process_time":"2023-01-30 14:08:51.543164"}\r
{"date":"2021-08-25","id":"00775","result":[1,3,5,17,22,33],"process_time":"2023-01-30 14:08:51.543118"}\r
{"date":"2021-08-27","id":"00776","result":[4,10,11,15,24,37],"process_time":"2023-01-30 14:08:51.543073"}\r
{"date":"2021-08-29","id":"00777","result":[1,18,21,25,27,35],"process_time":"2023-01-30 14:08:51.543029"}\r
{"date":"2021-09-01","id":"00778","result":[6,13,33,34,40,45],"process_time":"2023-01-30 14:08:51.542985"}\r
{"date":"2021-09-03","id":"00779","result":[6,11,18,23,32,44],"process_time":"2023-01-30 14:08:51.542941"}\r
{"date":"2021-09-05","id":"00780","result":[15,18,25,27,29,34],"process_time":"2023-01-30 14:08:51.542896"}\r
{"date":"2021-09-08","id":"00781","result":[4,18,28,32,36,40],"process_time":"2023-01-30 14:08:51.542842"}\r
{"date":"2021-09-10","id":"00782","result":[10,16,22,36,43,44],"process_time":"2023-01-30 14:08:51.497496"}\r
{"date":"2021-09-12","id":"00783","result":[4,8,21,29,33,45],"process_time":"2023-01-30 14:08:51.497452"}\r
{"date":"2021-09-15","id":"00784","result":[11,14,17,24,29,35],"process_time":"2023-01-30 14:08:51.497405"}\r
{"date":"2021-09-17","id":"00785","result":[6,10,15,37,39,44],"process_time":"2023-01-30 14:08:51.497348"}\r
{"date":"2021-09-19","id":"00786","result":[6,24,28,31,36,43],"process_time":"2023-01-30 14:08:51.497303"}\r
{"date":"2021-09-22","id":"00787","result":[5,10,19,22,36,45],"process_time":"2023-01-30 14:08:51.497257"}\r
{"date":"2021-09-24","id":"00788","result":[1,4,7,14,16,41],"process_time":"2023-01-30 14:08:51.497211"}\r
{"date":"2021-09-26","id":"00789","result":[13,27,34,35,36,41],"process_time":"2023-01-30 14:08:51.497153"}\r
{"date":"2021-09-29","id":"00790","result":[6,15,16,27,36,42],"process_time":"2023-01-30 14:08:51.444382"}\r
{"date":"2021-10-01","id":"00791","result":[11,15,17,27,28,45],"process_time":"2023-01-30 14:08:51.444344"}\r
{"date":"2021-10-03","id":"00792","result":[6,12,28,30,39,42],"process_time":"2023-01-30 14:08:51.444307"}\r
{"date":"2021-10-06","id":"00793","result":[9,11,15,20,32,36],"process_time":"2023-01-30 14:08:51.444269"}\r
{"date":"2021-10-08","id":"00794","result":[4,13,18,23,33,43],"process_time":"2023-01-30 14:08:51.444230"}\r
{"date":"2021-10-10","id":"00795","result":[3,25,26,29,40,42],"process_time":"2023-01-30 14:08:51.444191"}\r
{"date":"2021-10-13","id":"00796","result":[20,34,37,39,41,42],"process_time":"2023-01-30 14:08:51.444152"}\r
{"date":"2021-10-15","id":"00797","result":[5,13,17,20,29,45],"process_time":"2023-01-30 14:08:51.444107"}\r
{"date":"2021-10-17","id":"00798","result":[4,12,21,22,27,40],"process_time":"2023-01-30 14:08:51.400949"}\r
{"date":"2021-10-20","id":"00799","result":[5,9,33,40,41,45],"process_time":"2023-01-30 14:08:51.400905"}\r
{"date":"2021-10-22","id":"00800","result":[3,5,6,9,28,43],"process_time":"2023-01-30 14:08:51.400861"}\r
{"date":"2021-10-24","id":"00801","result":[6,29,31,32,39,44],"process_time":"2023-01-30 14:08:51.400817"}\r
{"date":"2021-10-27","id":"00802","result":[13,17,26,29,33,39],"process_time":"2023-01-30 14:08:51.400774"}\r
{"date":"2021-10-29","id":"00803","result":[17,19,22,31,32,34],"process_time":"2023-01-30 14:08:51.400732"}\r
{"date":"2021-10-31","id":"00804","result":[9,14,17,18,36,41],"process_time":"2023-01-30 14:08:51.400687"}\r
{"date":"2021-11-03","id":"00805","result":[3,13,15,23,24,44],"process_time":"2023-01-30 14:08:51.400633"}\r
{"date":"2021-11-05","id":"00806","result":[10,16,36,40,41,42],"process_time":"2023-01-30 14:08:51.358592"}\r
{"date":"2021-11-07","id":"00807","result":[5,20,24,25,35,36],"process_time":"2023-01-30 14:08:51.358547"}\r
{"date":"2021-11-10","id":"00808","result":[17,18,19,20,27,44],"process_time":"2023-01-30 14:08:51.358502"}\r
{"date":"2021-11-12","id":"00809","result":[11,14,18,24,35,37],"process_time":"2023-01-30 14:08:51.358455"}\r
{"date":"2021-11-14","id":"00810","result":[3,5,18,28,42,43],"process_time":"2023-01-30 14:08:51.358408"}\r
{"date":"2021-11-17","id":"00811","result":[4,15,25,26,32,35],"process_time":"2023-01-30 14:08:51.358361"}\r
{"date":"2021-11-19","id":"00812","result":[9,10,26,28,39,43],"process_time":"2023-01-30 14:08:51.358312"}\r
{"date":"2021-11-21","id":"00813","result":[1,12,29,40,44,45],"process_time":"2023-01-30 14:08:51.358255"}\r
{"date":"2021-11-24","id":"00814","result":[2,10,18,23,34,36],"process_time":"2023-01-30 14:08:51.315514"}\r
{"date":"2021-11-26","id":"00815","result":[4,18,25,29,32,34],"process_time":"2023-01-30 14:08:51.315470"}\r
{"date":"2021-11-28","id":"00816","result":[13,17,26,27,31,37],"process_time":"2023-01-30 14:08:51.315426"}\r
{"date":"2021-12-01","id":"00817","result":[8,9,30,31,38,45],"process_time":"2023-01-30 14:08:51.315383"}\r
{"date":"2021-12-03","id":"00818","result":[10,14,29,37,38,40],"process_time":"2023-01-30 14:08:51.315338"}\r
{"date":"2021-12-05","id":"00819","result":[3,5,6,31,34,35],"process_time":"2023-01-30 14:08:51.315293"}\r
{"date":"2021-12-08","id":"00820","result":[2,3,16,19,22,34],"process_time":"2023-01-30 14:08:51.315247"}\r
{"date":"2021-12-10","id":"00821","result":[1,4,17,19,24,42],"process_time":"2023-01-30 14:08:51.315191"}\r
{"date":"2021-12-12","id":"00822","result":[16,21,29,40,41,43],"process_time":"2023-01-30 14:08:51.272264"}\r
{"date":"2021-12-15","id":"00823","result":[3,18,29,30,39,41],"process_time":"2023-01-30 14:08:51.272222"}\r
{"date":"2021-12-17","id":"00824","result":[8,15,16,21,25,33],"process_time":"2023-01-30 14:08:51.272178"}\r
{"date":"2021-12-19","id":"00825","result":[12,15,24,30,36,45],"process_time":"2023-01-30 14:08:51.272123"}\r
{"date":"2021-12-22","id":"00826","result":[8,16,17,23,28,38],"process_time":"2023-01-30 14:08:51.272080"}\r
{"date":"2021-12-24","id":"00827","result":[3,17,25,26,36,38],"process_time":"2023-01-30 14:08:51.272036"}\r
{"date":"2021-12-26","id":"00828","result":[4,11,16,24,35,44],"process_time":"2023-01-30 14:08:51.271991"}\r
{"date":"2021-12-29","id":"00829","result":[5,27,33,34,38,40],"process_time":"2023-01-30 14:08:51.271937"}\r
{"date":"2021-12-31","id":"00830","result":[2,5,12,33,41,45],"process_time":"2023-01-30 14:08:51.222541"}\r
{"date":"2022-01-02","id":"00831","result":[11,17,30,36,41,45],"process_time":"2023-01-30 14:08:51.222494"}\r
{"date":"2022-01-05","id":"00832","result":[1,3,8,9,35,40],"process_time":"2023-01-30 14:08:51.222447"}\r
{"date":"2022-01-07","id":"00833","result":[10,13,24,28,38,44],"process_time":"2023-01-30 14:08:51.222399"}\r
{"date":"2022-01-09","id":"00834","result":[6,7,11,22,35,41],"process_time":"2023-01-30 14:08:51.222352"}\r
{"date":"2022-01-12","id":"00835","result":[3,6,13,15,36,44],"process_time":"2023-01-30 14:08:51.222304"}\r
{"date":"2022-01-14","id":"00836","result":[5,14,27,30,38,45],"process_time":"2023-01-30 14:08:51.222254"}\r
{"date":"2022-01-16","id":"00837","result":[1,3,4,5,32,33],"process_time":"2023-01-30 14:08:51.222197"}\r
{"date":"2022-01-19","id":"00838","result":[14,21,25,34,37,39],"process_time":"2023-01-30 14:08:51.653797"}\r
{"date":"2022-01-21","id":"00839","result":[1,13,17,24,27,42],"process_time":"2023-01-30 14:08:51.653753"}\r
{"date":"2022-01-23","id":"00840","result":[13,20,24,32,34,40],"process_time":"2023-01-30 14:08:51.653708"}\r
{"date":"2022-01-26","id":"00841","result":[5,11,15,18,27,43],"process_time":"2023-01-30 14:08:51.653664"}\r
{"date":"2022-01-28","id":"00842","result":[4,6,12,26,27,39],"process_time":"2023-01-30 14:08:51.653619"}\r
{"date":"2022-01-30","id":"00843","result":[1,7,22,26,28,41],"process_time":"2023-01-30 14:08:51.653573"}\r
{"date":"2022-02-02","id":"00844","result":[5,6,14,20,31,38],"process_time":"2023-01-30 14:08:51.653525"}\r
{"date":"2022-02-04","id":"00845","result":[11,16,18,38,40,43],"process_time":"2023-01-30 14:08:51.653466"}\r
{"date":"2022-02-06","id":"00846","result":[5,9,21,24,34,39],"process_time":"2023-01-30 14:08:51.602690"}\r
{"date":"2022-02-09","id":"00847","result":[3,20,27,37,44,45],"process_time":"2023-01-30 14:08:51.602636"}\r
{"date":"2022-02-11","id":"00848","result":[10,11,19,38,41,44],"process_time":"2023-01-30 14:08:51.602593"}\r
{"date":"2022-02-13","id":"00849","result":[14,21,22,24,28,45],"process_time":"2023-01-30 14:08:51.602549"}\r
{"date":"2022-02-16","id":"00850","result":[2,5,8,16,22,42],"process_time":"2023-01-30 14:08:51.602505"}\r
{"date":"2022-02-18","id":"00851","result":[3,14,20,26,28,36],"process_time":"2023-01-30 14:08:51.602461"}\r
{"date":"2022-02-20","id":"00852","result":[4,6,16,30,43,44],"process_time":"2023-01-30 14:08:51.602416"}\r
{"date":"2022-02-23","id":"00853","result":[2,16,18,19,24,29],"process_time":"2023-01-30 14:08:51.602364"}\r
{"date":"2022-02-25","id":"00854","result":[10,13,30,33,39,41],"process_time":"2023-01-30 14:08:51.553568"}\r
{"date":"2022-02-27","id":"00855","result":[10,20,25,27,38,45],"process_time":"2023-01-30 14:08:51.553511"}\r
{"date":"2022-03-02","id":"00856","result":[7,10,13,20,21,34],"process_time":"2023-01-30 14:08:51.553466"}\r
{"date":"2022-03-04","id":"00857","result":[3,19,21,24,27,38],"process_time":"2023-01-30 14:08:51.553421"}\r
{"date":"2022-03-06","id":"00858","result":[11,16,21,33,34,42],"process_time":"2023-01-30 14:08:51.553366"}\r
{"date":"2022-03-09","id":"00859","result":[3,15,35,39,40,43],"process_time":"2023-01-30 14:08:51.553320"}\r
{"date":"2022-03-11","id":"00860","result":[6,20,23,29,34,45],"process_time":"2023-01-30 14:08:51.553272"}\r
{"date":"2022-03-13","id":"00861","result":[1,5,19,20,23,38],"process_time":"2023-01-30 14:08:51.553206"}\r
{"date":"2022-03-16","id":"00862","result":[10,11,14,24,31,45],"process_time":"2023-01-30 14:08:51.502339"}\r
{"date":"2022-03-18","id":"00863","result":[6,10,15,29,41,42],"process_time":"2023-01-30 14:08:51.502294"}\r
{"date":"2022-03-20","id":"00864","result":[1,9,10,12,22,44],"process_time":"2023-01-30 14:08:51.502248"}\r
{"date":"2022-03-23","id":"00865","result":[2,9,37,38,40,43],"process_time":"2023-01-30 14:08:51.502204"}\r
{"date":"2022-03-25","id":"00866","result":[1,12,13,27,29,35],"process_time":"2023-01-30 14:08:51.502160"}\r
{"date":"2022-03-27","id":"00867","result":[8,17,21,39,44,45],"process_time":"2023-01-30 14:08:51.502116"}\r
{"date":"2022-03-30","id":"00868","result":[1,12,26,28,39,45],"process_time":"2023-01-30 14:08:51.502069"}\r
{"date":"2022-04-01","id":"00869","result":[2,19,25,32,41,44],"process_time":"2023-01-30 14:08:51.502013"}\r
{"date":"2022-04-03","id":"00870","result":[5,11,20,26,40,43],"process_time":"2023-01-30 14:08:51.460203"}\r
{"date":"2022-04-06","id":"00871","result":[13,17,19,25,32,45],"process_time":"2023-01-30 14:08:51.460160"}\r
{"date":"2022-04-08","id":"00872","result":[2,13,16,19,20,36],"process_time":"2023-01-30 14:08:51.460116"}\r
{"date":"2022-04-10","id":"00873","result":[4,17,28,30,38,42],"process_time":"2023-01-30 14:08:51.460072"}\r
{"date":"2022-04-13","id":"00874","result":[1,7,20,25,40,41],"process_time":"2023-01-30 14:08:51.460028"}\r
{"date":"2022-04-15","id":"00875","result":[9,18,21,25,35,44],"process_time":"2023-01-30 14:08:51.459983"}\r
{"date":"2022-04-17","id":"00876","result":[5,13,15,28,38,40],"process_time":"2023-01-30 14:08:51.459937"}\r
{"date":"2022-04-20","id":"00877","result":[1,8,17,21,27,37],"process_time":"2023-01-30 14:08:51.459885"}\r
{"date":"2022-04-22","id":"00878","result":[11,13,15,18,24,36],"process_time":"2023-01-30 14:08:51.418610"}\r
{"date":"2022-04-24","id":"00879","result":[9,12,23,30,32,40],"process_time":"2023-01-30 14:08:51.418567"}\r
{"date":"2022-04-27","id":"00880","result":[3,9,14,17,27,32],"process_time":"2023-01-30 14:08:51.418523"}\r
{"date":"2022-04-29","id":"00881","result":[5,12,16,25,26,32],"process_time":"2023-01-30 14:08:51.418480"}\r
{"date":"2022-05-01","id":"00882","result":[8,21,26,35,37,42],"process_time":"2023-01-30 14:08:51.418435"}\r
{"date":"2022-05-04","id":"00883","result":[1,4,23,28,33,38],"process_time":"2023-01-30 14:08:51.418391"}\r
{"date":"2022-05-06","id":"00884","result":[1,3,15,16,34,43],"process_time":"2023-01-30 14:08:51.418346"}\r
{"date":"2022-05-08","id":"00885","result":[4,12,20,25,35,37],"process_time":"2023-01-30 14:08:51.418290"}\r
{"date":"2022-05-11","id":"00886","result":[2,6,7,18,34,41],"process_time":"2023-01-30 14:08:51.368141"}\r
{"date":"2022-05-13","id":"00887","result":[7,8,18,29,41,44],"process_time":"2023-01-30 14:08:51.368097"}\r
{"date":"2022-05-15","id":"00888","result":[5,20,21,31,34,37],"process_time":"2023-01-30 14:08:51.368054"}\r
{"date":"2022-05-18","id":"00889","result":[3,17,23,37,40,42],"process_time":"2023-01-30 14:08:51.368010"}\r
{"date":"2022-05-20","id":"00890","result":[12,17,34,39,44,45],"process_time":"2023-01-30 14:08:51.367967"}\r
{"date":"2022-05-22","id":"00891","result":[1,7,10,24,33,40],"process_time":"2023-01-30 14:08:51.367922"}\r
{"date":"2022-05-25","id":"00892","result":[19,26,27,39,44,45],"process_time":"2023-01-30 14:08:51.367876"}\r
{"date":"2022-05-27","id":"00893","result":[16,21,23,27,35,41],"process_time":"2023-01-30 14:08:51.367822"}\r
{"date":"2022-05-29","id":"00894","result":[2,6,19,24,30,42],"process_time":"2023-01-30 14:08:51.325863"}\r
{"date":"2022-06-01","id":"00895","result":[6,10,21,23,28,39],"process_time":"2023-01-30 14:08:51.325802"}\r
{"date":"2022-06-03","id":"00896","result":[5,8,34,38,39,41],"process_time":"2023-01-30 14:08:51.325735"}\r
{"date":"2022-06-05","id":"00897","result":[6,8,21,28,30,35],"process_time":"2023-01-30 14:08:51.325663"}\r
{"date":"2022-06-08","id":"00898","result":[2,10,13,15,22,36],"process_time":"2023-01-30 14:08:51.325580"}\r
{"date":"2022-06-10","id":"00899","result":[10,23,25,26,30,41],"process_time":"2023-01-30 14:08:51.325516"}\r
{"date":"2022-06-12","id":"00900","result":[6,14,19,22,40,42],"process_time":"2023-01-30 14:08:51.325468"}\r
{"date":"2022-06-15","id":"00901","result":[1,6,12,20,36,39],"process_time":"2023-01-30 14:08:51.325377"}\r
{"date":"2022-06-17","id":"00902","result":[5,8,26,29,35,44],"process_time":"2023-01-30 14:08:51.280223"}\r
{"date":"2022-06-19","id":"00903","result":[1,24,25,31,39,40],"process_time":"2023-01-30 14:08:51.280180"}\r
{"date":"2022-06-22","id":"00904","result":[3,20,23,30,33,35],"process_time":"2023-01-30 14:08:51.280137"}\r
{"date":"2022-06-24","id":"00905","result":[7,16,18,32,34,44],"process_time":"2023-01-30 14:08:51.280094"}\r
{"date":"2022-06-26","id":"00906","result":[3,7,8,18,27,36],"process_time":"2023-01-30 14:08:51.280051"}\r
{"date":"2022-06-29","id":"00907","result":[1,19,20,27,30,32],"process_time":"2023-01-30 14:08:51.280007"}\r
{"date":"2022-07-01","id":"00908","result":[17,26,30,31,33,39],"process_time":"2023-01-30 14:08:51.279963"}\r
{"date":"2022-07-03","id":"00909","result":[8,14,17,20,21,40],"process_time":"2023-01-30 14:08:51.279912"}\r
{"date":"2022-07-06","id":"00910","result":[4,12,14,15,41,42],"process_time":"2023-01-30 14:08:51.232140"}\r
{"date":"2022-07-08","id":"00911","result":[6,7,12,18,21,43],"process_time":"2023-01-30 14:08:51.232097"}\r
{"date":"2022-07-10","id":"00912","result":[12,23,29,36,37,41],"process_time":"2023-01-30 14:08:51.232051"}\r
{"date":"2022-07-13","id":"00913","result":[4,9,21,28,35,37],"process_time":"2023-01-30 14:08:51.232007"}\r
{"date":"2022-07-15","id":"00914","result":[4,30,35,39,42,43],"process_time":"2023-01-30 14:08:51.231961"}\r
{"date":"2022-07-17","id":"00915","result":[7,13,20,23,27,29],"process_time":"2023-01-30 14:08:51.231913"}\r
{"date":"2022-07-20","id":"00916","result":[5,6,20,22,26,39],"process_time":"2023-01-30 14:08:51.231861"}\r
{"date":"2022-07-22","id":"00917","result":[4,10,18,22,31,37],"process_time":"2023-01-30 14:08:51.231793"}\r
{"date":"2022-07-24","id":"00918","result":[4,11,17,29,30,44],"process_time":"2023-01-30 14:08:51.650766"}\r
{"date":"2022-07-27","id":"00919","result":[9,15,18,22,32,41],"process_time":"2023-01-30 14:08:51.650721"}\r
{"date":"2022-07-29","id":"00920","result":[5,7,11,20,31,37],"process_time":"2023-01-30 14:08:51.650678"}\r
{"date":"2022-07-31","id":"00921","result":[3,8,15,16,40,42],"process_time":"2023-01-30 14:08:51.650634"}\r
{"date":"2022-08-03","id":"00922","result":[5,14,30,36,38,42],"process_time":"2023-01-30 14:08:51.650591"}\r
{"date":"2022-08-05","id":"00923","result":[10,13,14,32,37,42],"process_time":"2023-01-30 14:08:51.650546"}\r
{"date":"2022-08-07","id":"00924","result":[6,9,10,13,24,27],"process_time":"2023-01-30 14:08:51.650499"}\r
{"date":"2022-08-10","id":"00925","result":[4,8,10,15,26,31],"process_time":"2023-01-30 14:08:51.650446"}\r
{"date":"2022-08-12","id":"00926","result":[5,7,16,20,36,41],"process_time":"2023-01-30 14:08:51.599971"}\r
{"date":"2022-08-14","id":"00927","result":[9,13,21,24,34,35],"process_time":"2023-01-30 14:08:51.599927"}\r
{"date":"2022-08-17","id":"00928","result":[23,29,35,37,39,45],"process_time":"2023-01-30 14:08:51.599884"}\r
{"date":"2022-08-19","id":"00929","result":[25,26,33,39,41,43],"process_time":"2023-01-30 14:08:51.599840"}\r
{"date":"2022-08-21","id":"00930","result":[5,19,21,23,28,36],"process_time":"2023-01-30 14:08:51.599796"}\r
{"date":"2022-08-24","id":"00931","result":[12,20,21,23,27,34],"process_time":"2023-01-30 14:08:51.599753"}\r
{"date":"2022-08-26","id":"00932","result":[3,30,31,32,36,45],"process_time":"2023-01-30 14:08:51.599709"}\r
{"date":"2022-08-28","id":"00933","result":[8,16,31,37,39,41],"process_time":"2023-01-30 14:08:51.599654"}\r
{"date":"2022-08-31","id":"00934","result":[4,10,28,29,31,34],"process_time":"2023-01-30 14:08:51.556550"}\r
{"date":"2022-09-02","id":"00935","result":[2,3,14,21,31,33],"process_time":"2023-01-30 14:08:51.556507"}\r
{"date":"2022-09-04","id":"00936","result":[5,17,19,27,35,39],"process_time":"2023-01-30 14:08:51.556463"}\r
{"date":"2022-09-07","id":"00937","result":[8,9,10,20,35,38],"process_time":"2023-01-30 14:08:51.556421"}\r
{"date":"2022-09-09","id":"00938","result":[4,6,13,14,28,39],"process_time":"2023-01-30 14:08:51.556376"}\r
{"date":"2022-09-11","id":"00939","result":[4,15,20,31,43,44],"process_time":"2023-01-30 14:08:51.556330"}\r
{"date":"2022-09-14","id":"00940","result":[3,12,15,20,24,45],"process_time":"2023-01-30 14:08:51.556282"}\r
{"date":"2022-09-16","id":"00941","result":[2,26,35,41,42,43],"process_time":"2023-01-30 14:08:51.556229"}\r
{"date":"2022-09-18","id":"00942","result":[3,5,10,17,25,29],"process_time":"2023-01-30 14:08:51.488900"}\r
{"date":"2022-09-21","id":"00943","result":[5,10,14,25,42,45],"process_time":"2023-01-30 14:08:51.488858"}\r
{"date":"2022-09-23","id":"00944","result":[1,12,21,28,30,44],"process_time":"2023-01-30 14:08:51.488815"}\r
{"date":"2022-09-25","id":"00945","result":[3,5,8,31,33,34],"process_time":"2023-01-30 14:08:51.488772"}\r
{"date":"2022-09-28","id":"00946","result":[4,5,7,24,27,30],"process_time":"2023-01-30 14:08:51.488727"}\r
{"date":"2022-09-30","id":"00947","result":[4,11,19,20,35,41],"process_time":"2023-01-30 14:08:51.488683"}\r
{"date":"2022-10-02","id":"00948","result":[3,17,28,30,31,32],"process_time":"2023-01-30 14:08:51.488638"}\r
{"date":"2022-10-05","id":"00949","result":[9,18,23,24,29,34],"process_time":"2023-01-30 14:08:51.488582"}\r
{"date":"2022-10-07","id":"00950","result":[18,20,29,34,36,38],"process_time":"2023-01-30 14:08:51.440805"}\r
{"date":"2022-10-09","id":"00951","result":[13,15,20,25,35,43],"process_time":"2023-01-30 14:08:51.440758"}\r
{"date":"2022-10-12","id":"00952","result":[1,7,13,16,27,35],"process_time":"2023-01-30 14:08:51.440695"}\r
{"date":"2022-10-14","id":"00953","result":[1,6,22,25,30,34],"process_time":"2023-01-30 14:08:51.440651"}\r
{"date":"2022-10-16","id":"00954","result":[2,5,19,26,38,40],"process_time":"2023-01-30 14:08:51.440608"}\r
{"date":"2022-10-19","id":"00955","result":[1,3,7,10,21,29],"process_time":"2023-01-30 14:08:51.440565"}\r
{"date":"2022-10-21","id":"00956","result":[10,16,17,18,34,42],"process_time":"2023-01-30 14:08:51.440520"}\r
{"date":"2022-10-23","id":"00957","result":[2,11,18,33,36,45],"process_time":"2023-01-30 14:08:51.440467"}\r
{"date":"2022-10-26","id":"00958","result":[2,3,10,15,31,36],"process_time":"2023-01-30 14:08:51.393251"}\r
{"date":"2022-10-28","id":"00959","result":[16,21,22,33,42,45],"process_time":"2023-01-30 14:08:51.393182"}\r
{"date":"2022-10-30","id":"00960","result":[15,27,31,36,38,41],"process_time":"2023-01-30 14:08:51.393112"}\r
{"date":"2022-11-02","id":"00961","result":[2,17,23,27,37,42],"process_time":"2023-01-30 14:08:51.393041"}\r
{"date":"2022-11-04","id":"00962","result":[9,13,16,24,33,45],"process_time":"2023-01-30 14:08:51.392970"}\r
{"date":"2022-11-06","id":"00963","result":[8,10,12,14,17,31],"process_time":"2023-01-30 14:08:51.392898"}\r
{"date":"2022-11-09","id":"00964","result":[7,9,16,20,30,32],"process_time":"2023-01-30 14:08:51.392823"}\r
{"date":"2022-11-11","id":"00965","result":[2,3,9,15,17,43],"process_time":"2023-01-30 14:08:51.392738"}\r
{"date":"2022-11-13","id":"00966","result":[3,4,27,32,40,43],"process_time":"2023-01-30 14:08:51.352416"}\r
{"date":"2022-11-16","id":"00967","result":[2,3,12,32,35,44],"process_time":"2023-01-30 14:08:51.352374"}\r
{"date":"2022-11-18","id":"00968","result":[15,16,22,25,29,33],"process_time":"2023-01-30 14:08:51.352331"}\r
{"date":"2022-11-20","id":"00969","result":[1,4,14,22,24,40],"process_time":"2023-01-30 14:08:51.352289"}\r
{"date":"2022-11-23","id":"00970","result":[4,13,15,20,37,38],"process_time":"2023-01-30 14:08:51.352246"}\r
{"date":"2022-11-25","id":"00971","result":[14,20,24,30,35,41],"process_time":"2023-01-30 14:08:51.352202"}\r
{"date":"2022-11-27","id":"00972","result":[1,26,27,35,36,43],"process_time":"2023-01-30 14:08:51.352157"}\r
{"date":"2022-11-30","id":"00973","result":[7,15,20,25,32,37],"process_time":"2023-01-30 14:08:51.352103"}\r
{"date":"2022-12-02","id":"00974","result":[2,18,21,24,38,44],"process_time":"2023-01-30 14:08:51.307849"}\r
{"date":"2022-12-04","id":"00975","result":[4,5,7,9,27,39],"process_time":"2023-01-30 14:08:51.307807"}\r
{"date":"2022-12-07","id":"00976","result":[8,11,19,24,26,42],"process_time":"2023-01-30 14:08:51.307765"}\r
{"date":"2022-12-09","id":"00977","result":[4,23,25,30,40,41],"process_time":"2023-01-30 14:08:51.307720"}\r
{"date":"2022-12-11","id":"00978","result":[9,11,16,17,22,33],"process_time":"2023-01-30 14:08:51.307677"}\r
{"date":"2022-12-14","id":"00979","result":[13,29,35,37,38,41],"process_time":"2023-01-30 14:08:51.307633"}\r
{"date":"2022-12-16","id":"00980","result":[6,19,22,26,38,39],"process_time":"2023-01-02 08:30:43.333723"}\r
{"date":"2022-12-18","id":"00981","result":[2,12,13,33,36,42],"process_time":"2023-01-02 08:30:43.333631"}\r
{"date":"2022-12-21","id":"00982","result":[8,12,20,26,35,37],"process_time":"2023-01-02 08:30:43.333539"}\r
{"date":"2022-12-23","id":"00983","result":[2,14,21,22,35,43],"process_time":"2023-01-02 08:30:43.333445"}\r
{"date":"2022-12-25","id":"00984","result":[15,17,21,28,37,43],"process_time":"2023-01-02 08:30:43.333337"}\r
{"date":"2022-12-28","id":"00985","result":[4,5,10,21,33,37],"process_time":"2023-01-02 08:30:43.333245"}\r
{"date":"2022-12-30","id":"00986","result":[3,24,31,35,39,42],"process_time":"2023-01-02 08:30:43.333148"}\r
{"date":"2023-01-01","id":"00987","result":[16,20,26,30,32,40],"process_time":"2023-01-02 08:30:43.333039"}\r
{"date":"2023-01-04","id":"00988","result":[3,5,7,37,39,42],"process_time":"2023-01-30 14:08:51.267206"}\r
{"date":"2023-01-06","id":"00989","result":[2,7,16,25,35,38],"process_time":"2023-01-28 11:18:03.699606"}\r
{"date":"2023-01-08","id":"00990","result":[11,29,32,39,40,43],"process_time":"2023-01-28 11:18:03.699510"}\r
{"date":"2023-01-11","id":"00991","result":[1,18,22,33,34,43],"process_time":"2023-01-28 11:18:03.699420"}\r
{"date":"2023-01-13","id":"00992","result":[3,11,14,20,26,42],"process_time":"2023-01-28 11:18:03.699329"}\r
{"date":"2023-01-15","id":"00993","result":[8,9,15,21,26,45],"process_time":"2023-01-28 11:18:03.699240"}\r
{"date":"2023-01-20","id":"00994","result":[3,7,13,29,32,44],"process_time":"2023-01-28 11:18:03.699149"}\r
{"date":"2023-01-25","id":"00995","result":[12,14,18,22,28,31],"process_time":"2023-01-28 11:18:03.699057"}\r
{"date":"2023-01-27","id":"00996","result":[10,13,21,29,41,43],"process_time":"2023-01-28 11:18:03.698956"}\r
{"date":"2023-01-29","id":"00997","result":[5,21,26,27,32,33],"process_time":"2023-01-30 14:08:51.219033"}\r
{"date":"2023-02-01","id":"00998","result":[16,21,27,29,34,44],"process_time":"2023-02-03 10:04:23.532985"}\r
{"date":"2023-02-03","id":"00999","result":[4,11,16,30,33,43],"process_time":"2023-02-04 02:14:00.979201"}\r
{"date":"2023-02-05","id":"01000","result":[13,15,23,29,31,34],"process_time":"2023-02-06 02:15:27.072227"}\r
{"date":"2023-02-08","id":"01001","result":[6,18,20,22,26,34],"process_time":"2023-02-09 02:23:31.756012"}\r
{"date":"2023-02-10","id":"01002","result":[1,11,23,27,33,39],"process_time":"2023-02-11 02:17:30.013592"}\r
{"date":"2023-02-12","id":"01003","result":[3,5,11,23,24,42],"process_time":"2023-02-13 02:23:27.446572"}\r
{"date":"2023-02-15","id":"01004","result":[1,2,8,20,24,31],"process_time":"2023-02-16 02:23:03.306803"}\r
{"date":"2023-02-17","id":"01005","result":[1,5,10,13,23,25],"process_time":"2023-02-18 02:19:44.508147"}\r
{"date":"2023-02-19","id":"01006","result":[2,20,22,28,29,38],"process_time":"2023-02-20 02:25:32.902419"}\r
{"date":"2023-02-22","id":"01007","result":[8,16,22,23,28,38],"process_time":"2023-02-23 02:21:23.266612"}\r
{"date":"2023-02-24","id":"01008","result":[1,10,16,22,35,44],"process_time":"2023-02-25 02:23:49.793366"}\r
{"date":"2023-02-26","id":"01009","result":[4,9,16,26,28,42],"process_time":"2023-02-27 02:24:47.801495"}\r
{"date":"2023-03-01","id":"01010","result":[13,14,29,33,38,43],"process_time":"2023-03-07 03:17:55.435688"}\r
{"date":"2023-03-03","id":"01011","result":[10,22,26,27,33,43],"process_time":"2023-03-07 03:17:55.435577"}\r
{"date":"2023-03-05","id":"01012","result":[9,11,24,31,36,44],"process_time":"2023-03-07 03:17:55.435439"}\r
{"date":"2023-03-08","id":"01013","result":[10,13,22,25,28,36],"process_time":"2023-03-09 02:27:51.949382"}\r
{"date":"2023-03-10","id":"01014","result":[3,5,13,22,36,44],"process_time":"2023-03-11 02:11:36.952389"}\r
{"date":"2023-03-12","id":"01015","result":[10,28,29,31,33,37],"process_time":"2023-03-13 02:15:07.127823"}\r
{"date":"2023-03-15","id":"01016","result":[11,19,23,28,34,35],"process_time":"2023-03-16 02:14:44.743655"}\r
{"date":"2023-03-17","id":"01017","result":[5,7,12,22,26,33],"process_time":"2023-03-18 02:12:19.337939"}\r
{"date":"2023-03-19","id":"01018","result":[2,7,10,21,28,35],"process_time":"2023-03-20 02:17:56.168199"}\r
{"date":"2023-03-22","id":"01019","result":[5,8,10,15,17,41],"process_time":"2023-03-23 02:07:06.014505"}\r
{"date":"2023-03-24","id":"01020","result":[6,14,15,18,24,41],"process_time":"2023-03-25 02:06:21.560928"}\r
{"date":"2023-03-26","id":"01021","result":[6,16,18,25,34,45],"process_time":"2023-03-27 02:07:10.563550"}\r
{"date":"2023-03-29","id":"01022","result":[3,6,12,28,29,43],"process_time":"2023-03-30 02:11:29.546082"}\r
{"date":"2023-03-31","id":"01023","result":[1,9,10,15,30,42],"process_time":"2023-04-01 02:05:53.829498"}\r
{"date":"2023-04-02","id":"01024","result":[2,24,36,38,42,43],"process_time":"2023-04-03 02:02:46.335479"}\r
{"date":"2023-04-05","id":"01025","result":[4,8,12,15,19,43],"process_time":"2023-04-06 02:04:28.270200"}\r
{"date":"2023-04-07","id":"01026","result":[9,14,22,29,39,41],"process_time":"2023-04-08 01:59:05.305141"}\r
{"date":"2023-04-09","id":"01027","result":[12,15,25,30,34,39],"process_time":"2023-04-10 02:02:14.665336"}\r
{"date":"2023-04-12","id":"01028","result":[4,7,27,28,32,43],"process_time":"2023-04-13 02:04:05.674046"}\r
{"date":"2023-04-14","id":"01029","result":[8,16,23,27,32,41],"process_time":"2023-04-15 02:05:25.116123"}\r
{"date":"2023-04-16","id":"01030","result":[8,17,20,25,33,36],"process_time":"2023-04-17 02:06:15.443154"}\r
{"date":"2023-04-19","id":"01031","result":[10,27,37,40,42,43],"process_time":"2023-04-20 02:04:21.158290"}\r
{"date":"2023-04-21","id":"01032","result":[2,4,7,10,20,44],"process_time":"2023-04-22 02:06:09.677763"}\r
{"date":"2023-04-23","id":"01033","result":[1,2,22,30,37,42],"process_time":"2023-04-24 02:08:01.455988"}\r
{"date":"2023-04-26","id":"01034","result":[1,4,7,9,34,37],"process_time":"2023-04-27 02:06:12.244169"}\r
{"date":"2023-04-28","id":"01035","result":[5,11,25,33,42,44],"process_time":"2023-04-29 02:05:54.543153"}\r
{"date":"2023-04-30","id":"01036","result":[7,9,23,24,33,36],"process_time":"2023-05-01 02:07:01.566549"}\r
{"date":"2023-05-03","id":"01037","result":[18,23,28,29,39,44],"process_time":"2023-05-04 02:03:30.816136"}\r
{"date":"2023-05-05","id":"01038","result":[22,28,31,35,36,38],"process_time":"2023-05-06 01:59:56.152531"}\r
{"date":"2023-05-07","id":"01039","result":[4,30,31,33,35,45],"process_time":"2023-05-08 02:06:58.381948"}\r
{"date":"2023-05-10","id":"01040","result":[7,8,9,13,15,27],"process_time":"2023-05-11 02:04:25.713622"}\r
{"date":"2023-05-12","id":"01041","result":[2,6,8,9,15,27],"process_time":"2023-05-13 02:02:50.930050"}\r
{"date":"2023-05-14","id":"01042","result":[7,8,13,37,42,44],"process_time":"2023-05-15 02:08:15.068120"}\r
{"date":"2023-05-17","id":"01043","result":[2,6,13,20,28,44],"process_time":"2023-05-18 02:05:48.025262"}\r
{"date":"2023-05-19","id":"01044","result":[3,9,10,27,35,38],"process_time":"2023-05-20 02:03:30.921818"}\r
{"date":"2023-05-21","id":"01045","result":[8,10,17,19,24,41],"process_time":"2023-05-22 02:12:06.958098"}\r
{"date":"2023-05-24","id":"01046","result":[9,11,15,28,33,44],"process_time":"2023-05-25 02:06:16.228230"}\r
{"date":"2023-05-26","id":"01047","result":[8,10,19,25,35,44],"process_time":"2023-05-27 02:04:29.979577"}\r
{"date":"2023-05-28","id":"01048","result":[6,13,19,20,37,44],"process_time":"2023-05-29 02:12:37.693424"}\r
{"date":"2023-05-31","id":"01049","result":[4,9,10,22,41,44],"process_time":"2023-06-07 02:27:41.907261"}\r
{"date":"2023-06-02","id":"01050","result":[3,11,14,19,21,43],"process_time":"2023-06-07 02:27:41.907160"}\r
{"date":"2023-06-04","id":"01051","result":[3,15,19,35,36,43],"process_time":"2023-06-07 02:27:41.907034"}\r
{"date":"2023-06-07","id":"01052","result":[1,7,14,16,34,44],"process_time":"2023-06-09 02:32:03.983058"}\r
{"date":"2023-06-09","id":"01053","result":[15,16,23,25,40,41],"process_time":"2023-06-15 02:14:09.426385"}\r
{"date":"2023-06-11","id":"01054","result":[5,18,22,40,41,44],"process_time":"2023-06-15 02:14:09.426254"}\r
{"date":"2023-06-14","id":"01055","result":[2,28,31,37,41,44],"process_time":"2023-06-15 02:14:09.426114"}\r
{"date":"2023-06-16","id":"01056","result":[24,26,32,37,38,41],"process_time":"2023-06-17 02:10:38.655950"}\r
{"date":"2023-06-18","id":"01057","result":[3,4,8,18,21,33],"process_time":"2023-06-19 02:16:33.485512"}\r
{"date":"2023-06-21","id":"01058","result":[7,13,19,35,37,38],"process_time":"2023-06-29 02:26:34.156108"}\r
{"date":"2023-06-23","id":"01059","result":[10,14,15,20,24,45],"process_time":"2023-06-29 02:26:34.156002"}\r
{"date":"2023-06-25","id":"01060","result":[4,6,7,25,26,30],"process_time":"2023-06-29 02:26:34.155891"}\r
{"date":"2023-06-28","id":"01061","result":[4,8,24,31,42,45],"process_time":"2023-06-29 02:26:34.155753"}\r
{"date":"2023-06-30","id":"01062","result":[2,5,20,23,31,38],"process_time":"2023-07-01 02:42:12.749881"}\r
{"date":"2023-07-02","id":"01063","result":[3,5,8,17,37,41],"process_time":"2023-07-03 02:35:03.135236"}\r
{"date":"2023-07-05","id":"01064","result":[1,12,24,27,36,44],"process_time":"2023-10-23 12:09:35.659374"}\r
{"date":"2023-07-07","id":"01065","result":[5,9,12,20,37,42],"process_time":"2023-10-23 12:09:35.659335"}\r
{"date":"2023-07-09","id":"01066","result":[14,16,27,28,33,41],"process_time":"2023-10-23 12:09:35.659297"}\r
{"date":"2023-07-12","id":"01067","result":[19,24,27,31,33,43],"process_time":"2023-07-30 02:02:01.339852"}\r
{"date":"2023-07-14","id":"01068","result":[4,5,13,19,27,37],"process_time":"2023-07-30 02:02:01.339769"}\r
{"date":"2023-07-16","id":"01069","result":[1,7,16,18,21,29],"process_time":"2023-07-30 02:02:01.339687"}\r
{"date":"2023-07-19","id":"01070","result":[6,10,19,37,43,45],"process_time":"2023-07-30 02:02:01.339604"}\r
{"date":"2023-07-21","id":"01071","result":[9,20,31,33,36,45],"process_time":"2023-07-30 02:02:01.339522"}\r
{"date":"2023-07-23","id":"01072","result":[14,17,23,32,33,43],"process_time":"2023-07-30 02:02:01.339438"}\r
{"date":"2023-07-26","id":"01073","result":[4,13,18,21,29,37],"process_time":"2023-07-30 02:02:01.339353"}\r
{"date":"2023-07-28","id":"01074","result":[7,27,28,30,31,35],"process_time":"2023-07-30 02:02:01.339243"}\r
{"date":"2023-07-30","id":"01075","result":[3,17,23,33,42,45],"process_time":"2023-07-31 02:05:26.817585"}\r
{"date":"2023-08-02","id":"01076","result":[4,21,27,38,39,44],"process_time":"2023-08-06 01:54:44.562649"}\r
{"date":"2023-08-04","id":"01077","result":[2,12,22,38,41,44],"process_time":"2023-08-06 01:54:44.562519"}\r
{"date":"2023-08-06","id":"01078","result":[4,15,19,25,30,38],"process_time":"2023-08-08 02:01:31.176455"}\r
{"date":"2023-08-09","id":"01079","result":[18,22,30,31,39,41],"process_time":"2023-08-12 01:43:56.586065"}\r
{"date":"2023-08-11","id":"01080","result":[16,21,26,29,30,45],"process_time":"2023-08-12 01:43:56.585935"}\r
{"date":"2023-08-13","id":"01081","result":[9,15,23,33,35,40],"process_time":"2023-08-14 01:49:16.411375"}\r
{"date":"2023-08-16","id":"01082","result":[5,7,25,31,39,41],"process_time":"2023-08-22 01:49:31.299106"}\r
{"date":"2023-08-18","id":"01083","result":[12,19,21,22,34,38],"process_time":"2023-08-22 01:49:31.298996"}\r
{"date":"2023-08-20","id":"01084","result":[7,8,22,23,30,42],"process_time":"2023-08-22 01:49:31.298849"}\r
{"date":"2023-08-23","id":"01085","result":[5,14,18,19,29,31],"process_time":"2023-08-24 01:47:29.952334"}\r
{"date":"2023-08-25","id":"01086","result":[8,18,30,32,38,45],"process_time":"2023-08-31 01:50:34.011054"}\r
{"date":"2023-08-27","id":"01087","result":[24,27,30,37,44,45],"process_time":"2023-08-31 01:50:34.010964"}\r
{"date":"2023-08-30","id":"01088","result":[13,17,20,28,30,33],"process_time":"2023-08-31 01:50:34.010854"}\r
{"date":"2023-09-01","id":"01089","result":[9,14,16,19,28,41],"process_time":"2023-09-01 21:12:57.774599"}\r
{"date":"2023-09-03","id":"01090","result":[1,33,38,39,44,45],"process_time":"2023-09-06 14:49:11.076300"}\r
{"date":"2023-09-06","id":"01091","result":[3,4,12,18,19,29],"process_time":"2023-09-06 14:49:11.076208"}\r
{"date":"2023-09-08","id":"01092","result":[6,8,14,29,39,42],"process_time":"2023-09-09 01:46:18.249806"}\r
{"date":"2023-09-10","id":"01093","result":[4,5,10,18,27,40],"process_time":"2023-09-11 01:51:52.460746"}\r
{"date":"2023-09-13","id":"01094","result":[2,4,7,9,12,13],"process_time":"2023-09-14 01:50:11.665974"}\r
{"date":"2023-09-15","id":"01095","result":[2,3,5,7,10,38],"process_time":"2023-09-16 01:48:15.863763"}\r
{"date":"2023-09-17","id":"01096","result":[6,10,15,36,39,43],"process_time":"2023-09-18 01:51:31.097363"}\r
{"date":"2023-09-20","id":"01097","result":[3,6,20,39,40,41],"process_time":"2023-10-23 12:09:35.678816"}\r
{"date":"2023-09-22","id":"01098","result":[2,16,17,18,20,23],"process_time":"2023-10-23 12:09:35.678784"}\r
{"date":"2023-09-24","id":"01099","result":[4,8,23,27,30,36],"process_time":"2023-10-23 12:09:35.678753"}\r
{"date":"2023-09-27","id":"01100","result":[3,12,22,30,37,39],"process_time":"2023-10-23 12:09:35.678720"}\r
{"date":"2023-09-29","id":"01101","result":[2,8,24,27,30,43],"process_time":"2023-10-23 12:09:35.678688"}\r
{"date":"2023-10-01","id":"01102","result":[2,11,13,16,41,43],"process_time":"2023-10-23 12:09:35.678654"}\r
{"date":"2023-10-04","id":"01103","result":[7,17,21,32,40,45],"process_time":"2023-10-23 12:09:35.678616"}\r
{"date":"2023-10-06","id":"01104","result":[18,19,24,28,33,40],"process_time":"2023-10-23 05:36:13.061724"}\r
{"date":"2023-10-08","id":"01105","result":[4,16,22,28,33,39],"process_time":"2023-10-23 05:36:13.061649"}\r
{"date":"2023-10-11","id":"01106","result":[5,10,30,40,44,45],"process_time":"2023-10-23 05:36:13.061572"}\r
{"date":"2023-10-13","id":"01107","result":[1,11,16,39,40,45],"process_time":"2023-10-23 05:36:13.061496"}\r
{"date":"2023-10-15","id":"01108","result":[4,5,9,27,34,39],"process_time":"2023-10-23 05:36:13.061418"}\r
{"date":"2023-10-18","id":"01109","result":[2,7,18,20,24,29],"process_time":"2023-10-23 05:36:13.061340"}\r
{"date":"2023-10-20","id":"01110","result":[4,16,21,24,26,37],"process_time":"2023-10-23 05:36:13.061249"}\r
{"date":"2023-10-22","id":"01111","result":[10,13,14,19,35,40],"process_time":"2023-10-23 05:36:13.061153"}\r
{"date":"2023-10-25","id":"01112","result":[4,6,13,25,31,41],"process_time":"2023-10-26 01:50:37.176457"}\r
{"date":"2023-10-27","id":"01113","result":[7,10,14,21,26,37],"process_time":"2023-10-28 01:49:03.386809"}\r
{"date":"2023-10-29","id":"01114","result":[5,7,15,21,32,45],"process_time":"2023-10-30 01:53:22.161504"}\r
{"date":"2023-11-01","id":"01115","result":[1,3,15,16,23,28],"process_time":"2023-11-02 01:52:06.780213"}\r
{"date":"2023-11-03","id":"01116","result":[2,7,9,13,22,38],"process_time":"2023-11-04 01:51:23.968941"}\r
{"date":"2023-11-05","id":"01117","result":[1,13,16,18,23,25],"process_time":"2023-11-06 01:56:02.026401"}\r
{"date":"2023-11-08","id":"01118","result":[7,20,23,27,31,33],"process_time":"2023-11-09 01:54:08.967954"}\r
{"date":"2023-11-10","id":"01119","result":[1,4,10,13,14,44],"process_time":"2023-11-11 02:23:46.343254"}\r
{"date":"2023-11-12","id":"01120","result":[2,4,10,15,27,31],"process_time":"2023-11-13 01:56:13.807048"}\r
{"date":"2023-11-15","id":"01121","result":[2,3,12,16,30,37],"process_time":"2023-11-16 01:57:32.971823"}\r
{"date":"2023-11-17","id":"01122","result":[16,20,25,26,36,41],"process_time":"2023-11-18 01:55:25.023452"}\r
{"date":"2023-11-19","id":"01123","result":[1,3,19,20,26,34],"process_time":"2023-11-20 01:58:09.358486"}\r
{"date":"2023-11-22","id":"01124","result":[15,18,20,23,37,39],"process_time":"2023-11-23 01:56:17.679627"}\r
{"date":"2023-11-24","id":"01125","result":[5,18,22,34,41,45],"process_time":"2023-11-25 01:52:47.806492"}\r
{"date":"2023-11-26","id":"01126","result":[4,6,15,23,25,36],"process_time":"2023-11-27 01:57:06.750926"}\r
{"date":"2023-11-29","id":"01127","result":[9,22,24,32,38,39],"process_time":"2023-11-30 01:57:05.990826"}\r
{"date":"2023-12-01","id":"01128","result":[5,10,14,21,27,32],"process_time":"2023-12-02 01:52:38.387999"}\r
{"date":"2023-12-03","id":"01129","result":[12,14,16,21,29,32],"process_time":"2023-12-04 01:58:18.954320"}\r
{"date":"2023-12-06","id":"01130","result":[18,19,20,29,41,42],"process_time":"2023-12-07 01:57:33.080362"}\r
{"date":"2023-12-08","id":"01131","result":[11,15,16,17,42,43],"process_time":"2023-12-09 01:54:42.028177"}\r
{"date":"2023-12-10","id":"01132","result":[9,10,11,17,41,44],"process_time":"2023-12-11 01:58:22.922967"}\r
{"date":"2023-12-13","id":"01133","result":[3,7,11,20,28,44],"process_time":"2023-12-14 01:56:21.790945"}\r
{"date":"2023-12-15","id":"01134","result":[1,5,10,11,20,40],"process_time":"2023-12-16 01:55:25.172276"}\r
{"date":"2023-12-17","id":"01135","result":[3,7,18,20,31,33],"process_time":"2023-12-18 01:58:05.469183"}\r
{"date":"2023-12-20","id":"01136","result":[5,15,16,21,22,32],"process_time":"2023-12-21 01:55:59.439679"}\r
{"date":"2023-12-22","id":"01137","result":[2,12,14,16,34,38],"process_time":"2023-12-23 01:51:43.901348"}\r
{"date":"2023-12-24","id":"01138","result":[1,2,5,24,40,43],"process_time":"2023-12-25 01:56:54.733780"}\r
{"date":"2023-12-27","id":"01139","result":[8,16,23,34,36,39],"process_time":"2023-12-28 01:53:40.809573"}\r
{"date":"2023-12-29","id":"01140","result":[16,20,22,35,37,39],"process_time":"2023-12-30 01:52:27.961268"}\r
{"date":"2023-12-31","id":"01141","result":[13,14,23,25,34,44],"process_time":"2024-01-01 02:02:43.536113"}\r
{"date":"2024-01-03","id":"01142","result":[9,14,19,20,29,40],"process_time":"2024-01-04 01:55:46.538313"}\r
{"date":"2024-01-05","id":"01143","result":[9,16,29,31,33,42],"process_time":"2024-01-06 01:55:10.263768"}\r
{"date":"2024-01-07","id":"01144","result":[3,4,15,18,36,45],"process_time":"2024-01-08 01:58:21.952220"}\r
{"date":"2024-01-10","id":"01145","result":[10,12,18,19,29,43],"process_time":"2024-01-11 01:58:47.062949"}\r
{"date":"2024-01-12","id":"01146","result":[10,11,20,27,39,43],"process_time":"2024-01-13 01:57:02.994862"}\r
{"date":"2024-01-14","id":"01147","result":[2,8,19,20,24,42],"process_time":"2024-01-15 02:01:24.729772"}\r
{"date":"2024-01-17","id":"01148","result":[14,19,21,36,43,44],"process_time":"2024-01-18 01:57:58.435199"}\r
{"date":"2024-01-19","id":"01149","result":[8,15,20,24,43,44],"process_time":"2024-01-20 01:56:41.650590"}\r
{"date":"2024-01-21","id":"01150","result":[11,20,22,23,26,31],"process_time":"2024-01-22 02:02:31.563972"}\r
{"date":"2024-01-24","id":"01151","result":[7,27,30,36,39,45],"process_time":"2024-01-25 02:00:44.149493"}\r
{"date":"2024-01-26","id":"01152","result":[8,19,22,27,31,35],"process_time":"2024-01-27 01:47:30.435352"}\r
{"date":"2024-01-28","id":"01153","result":[3,23,25,29,36,41],"process_time":"2024-01-29 01:50:39.292651"}\r
{"date":"2024-01-31","id":"01154","result":[9,11,15,35,38,41],"process_time":"2024-02-01 01:53:53.519104"}\r
{"date":"2024-02-02","id":"01155","result":[1,15,29,31,32,34],"process_time":"2024-02-03 01:45:25.942454"}\r
{"date":"2024-02-04","id":"01156","result":[9,15,21,29,33,39],"process_time":"2024-02-05 01:54:38.113052"}\r
{"date":"2024-02-07","id":"01157","result":[17,21,24,25,39,42],"process_time":"2024-02-08 01:48:42.203238"}\r
{"date":"2024-02-11","id":"01158","result":[7,18,31,33,35,41],"process_time":"2024-02-12 01:49:50.778912"}\r
{"date":"2024-02-14","id":"01159","result":[8,9,11,12,40,44],"process_time":"2024-02-15 01:50:30.079799"}\r
{"date":"2024-02-16","id":"01160","result":[6,10,16,20,40,42],"process_time":"2024-02-17 01:47:54.505984"}\r
{"date":"2024-02-18","id":"01161","result":[5,19,20,21,24,40],"process_time":"2024-02-19 01:51:26.498821"}\r
{"date":"2024-02-21","id":"01162","result":[2,8,14,19,24,42],"process_time":"2024-02-22 01:49:03.070436"}\r
{"date":"2024-02-23","id":"01163","result":[4,17,19,27,28,36],"process_time":"2024-02-24 01:43:09.020484"}\r
{"date":"2024-02-25","id":"01164","result":[5,7,10,12,15,26],"process_time":"2024-02-26 01:52:29.960637"}\r
{"date":"2024-02-28","id":"01165","result":[1,10,21,25,32,39],"process_time":"2024-02-29 01:48:09.171857"}\r
{"date":"2024-03-01","id":"01166","result":[20,22,24,26,28,37],"process_time":"2024-03-02 01:45:37.419893"}\r
{"date":"2024-03-03","id":"01167","result":[3,10,17,20,22,27],"process_time":"2024-03-04 02:03:44.794846"}\r
{"date":"2024-03-06","id":"01168","result":[11,15,34,39,41,43],"process_time":"2024-03-08 01:49:18.745596"}\r
{"date":"2024-03-08","id":"01169","result":[2,26,28,40,41,45],"process_time":"2024-03-09 01:42:11.487101"}\r
{"date":"2024-03-10","id":"01170","result":[4,12,19,23,36,41],"process_time":"2024-03-11 01:50:22.781431"}\r
{"date":"2024-03-13","id":"01171","result":[1,13,25,30,34,40],"process_time":"2024-03-14 01:49:45.063248"}\r
{"date":"2024-03-15","id":"01172","result":[9,11,16,29,31,33],"process_time":"2024-03-16 01:46:45.280092"}\r
{"date":"2024-03-17","id":"01173","result":[1,3,5,26,30,42],"process_time":"2024-03-18 01:50:34.586105"}\r
{"date":"2024-03-20","id":"01174","result":[8,14,26,28,43,45],"process_time":"2024-03-21 01:52:40.202338"}\r
{"date":"2024-03-22","id":"01175","result":[5,6,11,20,24,45],"process_time":"2024-03-23 01:50:12.344670"}\r
{"date":"2024-03-24","id":"01176","result":[1,14,22,28,32,42],"process_time":"2024-03-25 01:52:29.612589"}\r
{"date":"2024-03-27","id":"01177","result":[6,29,31,35,42,44],"process_time":"2024-03-28 01:51:03.438171"}\r
{"date":"2024-03-29","id":"01178","result":[4,7,25,34,35,38],"process_time":"2024-03-30 01:45:27.648858"}\r
{"date":"2024-03-31","id":"01179","result":[5,12,13,17,40,41],"process_time":"2024-04-01 01:59:37.478599"}\r
{"date":"2024-04-03","id":"01180","result":[7,11,14,22,29,34],"process_time":"2024-04-03 14:04:23.912350"}\r
{"date":"2024-04-05","id":"01181","result":[14,18,22,29,36,37],"process_time":"2024-04-05 14:08:11.872849"}\r
{"date":"2024-04-07","id":"01182","result":[3,11,15,17,24,35],"process_time":"2024-04-07 14:03:44.593835"}\r
{"date":"2024-04-10","id":"01183","result":[2,10,30,33,34,40],"process_time":"2024-04-10 14:04:22.483727"}\r
{"date":"2024-04-12","id":"01184","result":[6,17,18,26,43,45],"process_time":"2024-04-12 14:05:05.643270"}\r
{"date":"2024-04-14","id":"01185","result":[7,12,16,29,42,45],"process_time":"2024-04-14 15:08:37.042923"}\r
{"date":"2024-04-17","id":"01186","result":[9,16,26,27,32,41],"process_time":"2024-04-17 14:04:57.259413"}\r
{"date":"2024-04-19","id":"01187","result":[2,3,20,21,32,33],"process_time":"2024-04-19 14:03:01.132474"}\r
{"date":"2024-04-21","id":"01188","result":[7,21,36,38,40,45],"process_time":"2024-04-21 14:03:22.917141"}\r
{"date":"2024-04-24","id":"01189","result":[7,21,30,33,38,39],"process_time":"2024-04-24 14:07:10.393888"}\r
{"date":"2024-04-26","id":"01190","result":[2,3,25,34,35,38],"process_time":"2024-04-26 14:05:03.589716"}\r
{"date":"2024-04-28","id":"01191","result":[1,13,14,22,23,37],"process_time":"2024-04-28 14:03:49.692850"}\r
{"date":"2024-05-01","id":"01192","result":[7,9,17,20,25,29],"process_time":"2024-05-01 14:07:39.108615"}\r
{"date":"2024-05-03","id":"01193","result":[1,13,14,21,27,43],"process_time":"2024-05-03 14:04:39.986877"}\r
{"date":"2024-05-05","id":"01194","result":[10,12,14,16,21,39],"process_time":"2024-05-05 14:03:48.303299"}\r
{"date":"2024-05-08","id":"01195","result":[2,10,13,22,30,34],"process_time":"2024-05-08 14:05:48.413681"}\r
{"date":"2024-05-10","id":"01196","result":[12,13,31,38,42,43],"process_time":"2024-05-10 14:04:40.004670"}\r
{"date":"2024-05-12","id":"01197","result":[3,5,6,9,32,45],"process_time":"2024-05-12 14:03:22.425737"}\r
{"date":"2024-05-15","id":"01198","result":[3,11,13,21,24,34],"process_time":"2024-05-15 14:08:10.684165"}\r
{"date":"2024-05-17","id":"01199","result":[8,22,27,29,39,43],"process_time":"2024-05-17 14:07:50.021268"}\r
{"date":"2024-05-19","id":"01200","result":[5,19,25,35,37,39],"process_time":"2024-05-19 14:03:29.044336"}\r
{"date":"2024-05-22","id":"01201","result":[2,3,10,22,41,43],"process_time":"2024-05-22 14:05:46.980704"}\r
{"date":"2024-05-24","id":"01202","result":[2,14,15,17,23,40],"process_time":"2024-05-24 14:05:14.496588"}\r
{"date":"2024-05-26","id":"01203","result":[4,9,11,14,19,27],"process_time":"2024-05-26 14:04:23.481127"}\r
{"date":"2024-05-29","id":"01204","result":[4,21,25,27,35,39],"process_time":"2024-05-29 14:05:49.399960"}\r
{"date":"2024-05-31","id":"01205","result":[4,8,15,23,31,40],"process_time":"2024-05-31 14:05:07.660774"}\r
{"date":"2024-06-02","id":"01206","result":[2,7,13,23,25,45],"process_time":"2024-06-02 14:03:35.124298"}\r
{"date":"2024-06-05","id":"01207","result":[11,25,28,33,34,45],"process_time":"2024-06-05 14:07:50.009532"}\r
{"date":"2024-06-07","id":"01208","result":[15,19,24,25,27,39],"process_time":"2024-06-07 14:06:24.884536"}\r
{"date":"2024-06-09","id":"01209","result":[4,5,28,32,37,42],"process_time":"2024-06-09 14:07:16.183708"}\r
{"date":"2024-06-12","id":"01210","result":[1,2,8,13,26,34],"process_time":"2024-06-12 14:06:08.451409"}\r
{"date":"2024-06-14","id":"01211","result":[10,24,25,26,30,41],"process_time":"2024-06-14 14:08:21.420749"}\r
{"date":"2024-06-16","id":"01212","result":[3,16,17,18,25,37],"process_time":"2024-06-16 14:05:49.312337"}\r
{"date":"2024-06-19","id":"01213","result":[8,12,17,23,26,27],"process_time":"2024-06-19 14:05:44.842398"}\r
{"date":"2024-06-21","id":"01214","result":[3,7,11,16,19,35],"process_time":"2024-06-21 14:02:46.442519"}\r
{"date":"2024-06-23","id":"01215","result":[9,11,19,29,31,44],"process_time":"2024-06-23 14:03:19.508251"}\r
{"date":"2024-06-26","id":"01216","result":[8,10,29,30,33,40],"process_time":"2024-06-26 14:07:27.601757"}\r
{"date":"2024-06-28","id":"01217","result":[4,6,16,32,41,44],"process_time":"2024-06-28 14:07:16.007845"}\r
{"date":"2024-06-30","id":"01218","result":[5,23,25,28,30,43],"process_time":"2024-06-30 14:03:20.175707"}\r
{"date":"2024-07-03","id":"01219","result":[11,18,24,34,38,43],"process_time":"2024-07-03 14:07:45.447190"}\r
{"date":"2024-07-05","id":"01220","result":[4,23,33,38,40,44],"process_time":"2024-07-05 14:07:44.390290"}\r
{"date":"2024-07-07","id":"01221","result":[4,8,22,23,26,45],"process_time":"2024-07-07 14:03:33.914412"}\r
{"date":"2024-07-10","id":"01222","result":[23,24,36,37,40,45],"process_time":"2024-07-10 14:07:21.166540"}\r
{"date":"2024-07-12","id":"01223","result":[11,17,25,26,28,29],"process_time":"2024-07-12 14:06:54.623799"}\r
{"date":"2024-07-14","id":"01224","result":[9,18,33,37,38,43],"process_time":"2024-07-14 14:04:05.556362"}\r
{"date":"2024-07-17","id":"01225","result":[9,10,11,16,21,30],"process_time":"2024-07-17 14:07:01.358536"}\r
{"date":"2024-07-19","id":"01226","result":[1,10,20,25,34,35],"process_time":"2024-07-19 14:08:34.063417"}\r
{"date":"2024-07-21","id":"01227","result":[9,10,23,25,28,38],"process_time":"2024-07-21 14:05:11.061894"}\r
{"date":"2024-07-24","id":"01228","result":[7,8,20,27,32,34],"process_time":"2024-07-24 14:07:57.156848"}\r
{"date":"2024-07-26","id":"01229","result":[18,20,28,31,39,45],"process_time":"2024-07-26 14:06:35.449212"}\r
{"date":"2024-07-28","id":"01230","result":[1,13,21,25,31,39],"process_time":"2024-07-28 14:04:17.391195"}\r
{"date":"2024-07-31","id":"01231","result":[2,4,12,16,18,42],"process_time":"2024-07-31 14:08:19.228217"}\r
{"date":"2024-08-02","id":"01232","result":[9,14,19,34,37,41],"process_time":"2024-08-02 14:07:11.384943"}\r
{"date":"2024-08-04","id":"01233","result":[1,4,16,18,20,32],"process_time":"2024-08-04 14:03:48.968852"}\r
{"date":"2024-08-07","id":"01234","result":[11,19,22,29,40,44],"process_time":"2024-08-07 14:07:11.294201"}\r
{"date":"2024-08-09","id":"01235","result":[6,14,15,24,26,39],"process_time":"2024-08-09 14:07:40.752840"}\r
{"date":"2024-08-11","id":"01236","result":[17,18,19,33,35,37],"process_time":"2024-08-11 14:06:41.885553"}\r
{"date":"2024-08-14","id":"01237","result":[1,6,9,21,43,44],"process_time":"2024-08-14 14:07:51.085796"}\r
{"date":"2024-08-16","id":"01238","result":[16,22,23,30,34,41],"process_time":"2024-08-16 14:06:58.730245"}\r
{"date":"2024-08-18","id":"01239","result":[4,13,28,33,35,38],"process_time":"2024-08-19 02:01:51.861566"}\r
{"date":"2024-08-21","id":"01240","result":[7,8,9,15,22,30],"process_time":"2024-08-21 14:08:57.037948"}\r
{"date":"2024-08-23","id":"01241","result":[7,13,26,28,35,41],"process_time":"2024-08-23 14:07:36.630772"}\r
{"date":"2024-08-25","id":"01242","result":[6,10,15,17,40,42],"process_time":"2024-08-25 14:05:47.565912"}\r
{"date":"2024-08-28","id":"01243","result":[4,5,17,25,39,41],"process_time":"2024-08-28 14:07:45.997063"}\r
{"date":"2024-08-30","id":"01244","result":[2,15,19,26,34,36],"process_time":"2024-08-30 14:07:46.918225"}\r
{"date":"2024-09-01","id":"01245","result":[30,31,33,38,42,43],"process_time":"2024-09-01 14:05:05.196942"}\r
{"date":"2024-09-04","id":"01246","result":[2,7,15,18,24,33],"process_time":"2024-09-04 14:08:23.166866"}\r
{"date":"2024-09-06","id":"01247","result":[5,25,28,32,36,41],"process_time":"2024-09-06 14:07:39.527042"}\r
{"date":"2024-09-08","id":"01248","result":[3,8,10,26,34,37],"process_time":"2024-09-08 14:05:04.844165"}\r
{"date":"2024-09-11","id":"01249","result":[6,11,19,23,34,37],"process_time":"2024-09-11 14:07:41.655180"}\r
{"date":"2024-09-13","id":"01250","result":[6,12,27,34,41,42],"process_time":"2024-09-13 14:07:50.223093"}\r
{"date":"2024-09-15","id":"01251","result":[3,11,28,32,33,35],"process_time":"2024-09-15 14:06:17.860849"}\r
{"date":"2024-09-18","id":"01252","result":[4,8,27,28,35,36],"process_time":"2024-09-18 14:08:37.124781"}\r
{"date":"2024-09-20","id":"01253","result":[13,14,19,20,30,33],"process_time":"2024-09-20 14:08:41.177114"}\r
{"date":"2024-09-22","id":"01254","result":[20,23,28,36,40,42],"process_time":"2024-09-22 14:05:54.100427"}\r
{"date":"2024-09-25","id":"01255","result":[10,23,25,27,31,37],"process_time":"2024-09-25 14:08:10.104359"}\r
{"date":"2024-09-27","id":"01256","result":[1,6,18,25,39,44],"process_time":"2024-09-27 14:08:26.126162"}\r
{"date":"2024-09-29","id":"01257","result":[3,7,16,17,41,42],"process_time":"2024-09-29 14:07:22.030599"}\r
{"date":"2024-10-02","id":"01258","result":[5,6,11,23,31,36],"process_time":"2024-10-02 14:08:21.768655"}\r
{"date":"2024-10-04","id":"01259","result":[8,10,21,32,39,44],"process_time":"2024-10-04 14:08:31.814901"}\r
{"date":"2024-10-06","id":"01260","result":[7,14,33,36,42,43],"process_time":"2024-10-06 14:06:30.633807"}\r
{"date":"2024-10-09","id":"01261","result":[14,18,20,22,34,45],"process_time":"2024-10-09 14:08:18.303105"}\r
{"date":"2024-10-11","id":"01262","result":[11,19,26,28,29,43],"process_time":"2024-10-11 14:08:26.120901"}\r
{"date":"2024-10-13","id":"01263","result":[7,10,13,17,21,45],"process_time":"2024-10-13 14:06:28.068354"}\r
{"date":"2024-10-16","id":"01264","result":[4,14,19,23,24,37],"process_time":"2024-10-16 14:07:52.845605"}\r
{"date":"2024-10-18","id":"01265","result":[13,19,20,22,24,37],"process_time":"2024-10-18 14:08:09.090817"}\r
{"date":"2024-10-20","id":"01266","result":[6,23,24,25,26,34],"process_time":"2024-10-20 14:06:21.416190"}\r
{"date":"2024-10-23","id":"01267","result":[22,27,28,31,37,44],"process_time":"2024-10-23 14:08:32.418831"}\r
{"date":"2024-10-25","id":"01268","result":[3,10,31,32,34,40],"process_time":"2024-10-25 14:08:32.116568"}\r
{"date":"2024-10-27","id":"01269","result":[18,21,28,29,33,45],"process_time":"2024-10-27 14:08:36.673405"}\r
{"date":"2024-10-30","id":"01270","result":[4,13,20,29,32,37],"process_time":"2024-10-30 14:08:21.783273"}\r
{"date":"2024-11-01","id":"01271","result":[20,22,23,32,35,40],"process_time":"2024-11-01 14:08:28.858431"}\r
{"date":"2024-11-03","id":"01272","result":[1,4,5,16,20,22],"process_time":"2024-11-03 14:08:26.687145"}\r
{"date":"2024-11-06","id":"01273","result":[1,2,3,11,25,37],"process_time":"2024-11-06 14:08:27.221628"}\r
{"date":"2024-11-08","id":"01274","result":[11,15,18,27,34,37],"process_time":"2024-11-08 14:08:08.568124"}\r
{"date":"2024-11-10","id":"01275","result":[3,7,11,12,13,40],"process_time":"2024-11-10 14:06:02.920190"}\r
{"date":"2024-11-13","id":"01276","result":[3,23,28,35,39,42],"process_time":"2024-11-13 14:09:15.137984"}\r
{"date":"2024-11-15","id":"01277","result":[8,13,31,36,37,40],"process_time":"2024-11-15 14:08:53.662793"}\r
{"date":"2024-11-17","id":"01278","result":[11,17,29,31,38,42],"process_time":"2024-11-18 02:19:42.750184"}\r
{"date":"2024-11-20","id":"01279","result":[4,16,24,29,31,37],"process_time":"2024-12-16 12:56:31.679038"}\r
{"date":"2024-11-22","id":"01280","result":[1,14,15,19,38,40],"process_time":"2024-12-16 12:56:31.678896"}\r
{"date":"2024-11-24","id":"01281","result":[5,14,15,21,33,36],"process_time":"2024-12-16 12:56:31.678764"}\r
{"date":"2024-11-27","id":"01282","result":[6,21,24,31,42,44],"process_time":"2024-12-16 12:56:31.678608"}\r
{"date":"2024-11-29","id":"01283","result":[12,15,33,35,37,45],"process_time":"2024-12-16 12:56:31.995424"}\r
{"date":"2024-12-01","id":"01284","result":[15,17,25,29,33,35],"process_time":"2024-12-16 12:56:31.995350"}\r
{"date":"2024-12-04","id":"01285","result":[7,14,19,24,34,36],"process_time":"2024-12-16 12:56:31.995275"}\r
{"date":"2024-12-06","id":"01286","result":[8,14,18,26,34,42],"process_time":"2024-12-16 12:56:31.995200"}\r
{"date":"2024-12-08","id":"01287","result":[1,13,24,26,27,37],"process_time":"2024-12-16 12:56:31.995124"}\r
{"date":"2024-12-11","id":"01288","result":[2,10,17,23,29,33],"process_time":"2024-12-16 12:56:31.995044"}\r
{"date":"2024-12-13","id":"01289","result":[3,7,29,36,37,44],"process_time":"2024-12-16 12:56:31.994959"}\r
{"date":"2024-12-15","id":"01290","result":[1,10,20,22,23,36],"process_time":"2024-12-16 12:56:31.994831"}\r
{"date":"2024-12-18","id":"01291","result":[3,7,12,16,26,34],"process_time":"2024-12-23 16:21:58.396704"}\r
{"date":"2024-12-20","id":"01292","result":[6,9,12,21,28,33],"process_time":"2024-12-23 16:21:58.396584"}\r
{"date":"2024-12-22","id":"01293","result":[15,16,24,27,31,44],"process_time":"2024-12-23 16:21:58.396450"}\r
{"date":"2024-12-25","id":"01294","result":[8,13,20,25,28,39],"process_time":"2025-01-07 13:09:19.661031"}\r
{"date":"2024-12-27","id":"01295","result":[1,10,13,24,25,33],"process_time":"2025-01-07 13:09:19.660961"}\r
{"date":"2024-12-29","id":"01296","result":[5,8,19,31,34,43],"process_time":"2025-01-07 13:09:19.660881"}\r
{"date":"2025-01-01","id":"01297","result":[14,20,25,28,36,40],"process_time":"2025-01-07 13:09:19.660805"}\r
{"date":"2025-01-03","id":"01298","result":[6,12,21,27,34,41],"process_time":"2025-01-07 13:09:19.660725"}\r
{"date":"2025-01-05","id":"01299","result":[2,7,15,37,41,42],"process_time":"2025-01-07 13:09:19.660618"}\r
{"date":"2025-01-08","id":"01300","result":[2,3,17,33,37,38],"process_time":"2025-01-21 16:53:37.898252"}\r
{"date":"2025-01-10","id":"01301","result":[2,4,8,28,42,44],"process_time":"2025-01-21 16:53:37.898191"}\r
{"date":"2025-01-12","id":"01302","result":[2,9,12,14,41,44],"process_time":"2025-01-21 16:53:37.898124"}\r
{"date":"2025-01-15","id":"01303","result":[2,6,8,10,23,33],"process_time":"2025-01-21 16:53:37.898046"}\r
{"date":"2025-01-17","id":"01304","result":[2,12,22,31,34,35],"process_time":"2025-01-21 16:53:37.897972"}\r
{"date":"2025-01-19","id":"01305","result":[5,6,10,19,32,38],"process_time":"2025-01-21 16:53:37.897875"}\r
{"date":"2025-01-22","id":"01306","result":[3,21,26,29,32,33],"process_time":"2025-02-04 09:10:03.653342"}\r
{"date":"2025-01-24","id":"01307","result":[1,7,11,22,31,34],"process_time":"2025-02-04 09:10:03.653318"}\r
{"date":"2025-01-26","id":"01308","result":[5,8,9,11,20,29],"process_time":"2025-02-04 09:10:03.653293"}\r
{"date":"2025-01-31","id":"01309","result":[2,15,16,32,42,45],"process_time":"2025-02-04 09:10:03.653269"}\r
{"date":"2025-02-02","id":"01310","result":[15,20,22,29,32,36],"process_time":"2025-02-04 09:10:03.653240"}\r
{"date":"2025-02-05","id":"01311","result":[4,6,9,14,25,41],"process_time":"2025-02-05 19:00:19.026283"}\r
{"date":"2025-02-07","id":"01312","result":[4,5,25,27,35,39],"process_time":"2025-02-07 19:00:16.066543"}\r
{"date":"2025-02-09","id":"01313","result":[8,16,22,27,31,34],"process_time":"2025-02-09 19:00:17.264418"}\r
{"date":"2025-02-12","id":"01314","result":[7,19,31,39,42,43],"process_time":"2025-02-12 19:00:20.381060"}\r
{"date":"2025-02-14","id":"01315","result":[6,8,10,27,28,32],"process_time":"2025-02-14 19:00:23.010564"}\r
{"date":"2025-02-16","id":"01316","result":[11,19,26,28,35,40],"process_time":"2025-02-16 19:00:21.686303"}\r
{"date":"2025-02-19","id":"01317","result":[1,6,10,11,25,29],"process_time":"2025-02-19 19:00:20.470206"}\r
{"date":"2025-02-21","id":"01318","result":[4,9,19,20,30,42],"process_time":"2025-02-21 19:00:32.371526"}\r
{"date":"2025-02-23","id":"01319","result":[10,12,15,17,24,33],"process_time":"2025-02-23 19:00:18.256213"}\r
{"date":"2025-02-26","id":"01320","result":[2,13,15,16,18,20],"process_time":"2025-02-26 19:00:18.418590"}\r
{"date":"2025-02-28","id":"01321","result":[10,11,14,16,21,29],"process_time":"2025-02-28 19:00:17.856256"}\r
{"date":"2025-03-02","id":"01322","result":[8,24,30,33,42,45],"process_time":"2025-03-02 19:00:18.803065"}\r
{"date":"2025-03-05","id":"01323","result":[10,22,32,37,41,43],"process_time":"2025-03-10 11:41:44.091192"}\r
{"date":"2025-03-07","id":"01324","result":[8,11,12,20,25,32],"process_time":"2025-03-10 11:41:44.091123"}\r
{"date":"2025-03-09","id":"01325","result":[10,11,30,33,44,45],"process_time":"2025-03-10 11:41:44.091039"}\r
{"date":"2025-03-12","id":"01326","result":[19,26,30,32,36,42],"process_time":"2025-03-12 19:00:19.725324"}\r
{"date":"2025-03-14","id":"01327","result":[7,11,13,16,28,30],"process_time":"2025-03-14 19:00:21.532566"}\r
{"date":"2025-03-16","id":"01328","result":[2,12,14,16,38,45],"process_time":"2025-03-16 19:00:21.158579"}\r
{"date":"2025-03-19","id":"01329","result":[12,23,27,28,29,43],"process_time":"2025-03-19 19:00:20.544277"}\r
{"date":"2025-03-21","id":"01330","result":[31,32,34,41,42,45],"process_time":"2025-03-21 19:00:27.677719"}\r
{"date":"2025-03-23","id":"01331","result":[5,6,8,9,36,45],"process_time":"2025-03-23 19:00:20.224948"}\r
{"date":"2025-03-26","id":"01332","result":[17,24,25,30,35,39],"process_time":"2025-03-26 19:00:22.532383"}\r
{"date":"2025-03-28","id":"01333","result":[5,7,22,28,29,34],"process_time":"2025-03-28 19:00:21.104489"}\r
{"date":"2025-03-30","id":"01334","result":[14,15,33,38,42,45],"process_time":"2025-03-30 19:00:21.238789"}\r
{"date":"2025-04-02","id":"01335","result":[8,14,15,22,31,34],"process_time":"2025-04-02 19:00:19.083063"}\r
{"date":"2025-04-04","id":"01336","result":[2,13,24,25,28,38],"process_time":"2025-04-04 19:00:27.839829"}\r
{"date":"2025-04-06","id":"01337","result":[3,5,6,13,18,22],"process_time":"2025-04-06 19:00:20.089815"}\r
{"date":"2025-04-09","id":"01338","result":[5,8,11,22,41,44],"process_time":"2025-04-09 19:00:23.481357"}\r
{"date":"2025-04-11","id":"01339","result":[1,13,14,26,37,43],"process_time":"2025-04-11 19:00:22.836089"}\r
{"date":"2025-04-13","id":"01340","result":[13,14,18,25,30,32],"process_time":"2025-04-13 19:00:28.509912"}\r
{"date":"2025-04-16","id":"01341","result":[5,8,12,16,28,32],"process_time":"2025-04-16 19:00:27.023168"}\r
{"date":"2025-04-18","id":"01342","result":[5,20,21,22,29,44],"process_time":"2025-04-21 11:33:27.922711"}\r
{"date":"2025-04-20","id":"01343","result":[5,7,14,26,29,44],"process_time":"2025-04-21 11:33:27.922620"}\r
{"date":"2025-04-23","id":"01344","result":[7,12,23,34,42,43],"process_time":"2025-04-23 19:00:27.121007"}\r
{"date":"2025-04-25","id":"01345","result":[4,8,9,10,20,34],"process_time":"2025-04-25 19:00:25.736553"}\r
{"date":"2025-04-27","id":"01346","result":[8,11,31,35,36,45],"process_time":"2025-04-27 19:00:20.337988"}\r
{"date":"2025-04-30","id":"01347","result":[1,17,26,33,36,44],"process_time":"2025-04-30 19:00:31.216394"}\r
{"date":"2025-05-02","id":"01348","result":[3,7,32,37,42,45],"process_time":"2025-05-02 19:00:22.306580"}\r
{"date":"2025-05-04","id":"01349","result":[6,7,8,9,12,29],"process_time":"2025-05-04 19:00:26.795230"}\r
{"date":"2025-05-07","id":"01350","result":[8,27,28,31,34,40],"process_time":"2025-05-07 19:00:21.848731"}\r
{"date":"2025-05-09","id":"01351","result":[1,7,9,34,40,42],"process_time":"2025-05-09 19:00:28.400335"}\r
{"date":"2025-05-11","id":"01352","result":[13,15,17,22,28,43],"process_time":"2025-05-11 19:00:28.050762"}\r
{"date":"2025-05-14","id":"01353","result":[19,24,27,37,44,45],"process_time":"2025-05-19 09:08:50.180448"}\r
{"date":"2025-05-16","id":"01354","result":[5,9,14,22,32,44],"process_time":"2025-05-19 09:08:50.180351"}\r
{"date":"2025-05-18","id":"01355","result":[6,7,17,27,30,42],"process_time":"2025-05-19 09:08:50.180167"}\r
{"date":"2025-05-21","id":"01356","result":[2,13,14,21,24,30],"process_time":"2025-05-21 19:00:41.769622"}\r
{"date":"2025-05-23","id":"01357","result":[2,4,15,16,29,43],"process_time":"2025-05-26 19:00:24.291655"}\r
{"date":"2025-05-25","id":"01358","result":[5,14,23,24,28,44],"process_time":"2025-05-26 19:00:24.291469"}\r
{"date":"2025-05-28","id":"01359","result":[17,22,23,28,31,41],"process_time":"2025-05-29 08:16:11.865810"}\r
{"date":"2025-05-30","id":"01360","result":[4,7,12,35,37,41],"process_time":"2025-05-31 19:00:17.773714"}\r
{"date":"2025-06-01","id":"01361","result":[9,24,29,37,42,44],"process_time":"2025-06-02 14:03:02.879976"}\r
{"date":"2025-06-04","id":"01362","result":[11,23,26,27,29,32],"process_time":"2025-06-04 19:00:22.565395"}\r
{"date":"2025-06-06","id":"01363","result":[24,26,35,39,41,45],"process_time":"2025-06-08 19:00:26.547913"}\r
{"date":"2025-06-08","id":"01364","result":[6,17,18,19,31,37],"process_time":"2025-06-08 19:00:26.547823"}\r
{"date":"2025-06-11","id":"01365","result":[10,13,22,27,41,45],"process_time":"2025-06-11 19:00:18.406248"}\r
{"date":"2025-06-13","id":"01366","result":[1,13,19,28,30,36],"process_time":"2025-06-16 19:00:23.237214"}\r
{"date":"2025-06-15","id":"01367","result":[15,16,22,23,29,32],"process_time":"2025-06-16 19:00:23.237114"}\r
{"date":"2025-06-18","id":"01368","result":[19,23,24,26,36,41],"process_time":"2025-06-18 19:00:18.005509"}\r
{"date":"2025-06-20","id":"01369","result":[2,8,18,22,26,29],"process_time":"2025-06-20 19:00:22.666773"}\r
{"date":"2025-06-22","id":"01370","result":[1,9,14,20,34,41],"process_time":"2025-06-22 19:00:18.720604"}\r
{"date":"2025-06-25","id":"01371","result":[8,10,26,29,35,39],"process_time":"2025-06-30 15:30:05.422828"}\r
{"date":"2025-06-27","id":"01372","result":[9,14,26,30,44,45],"process_time":"2025-06-30 15:30:05.422720"}\r
{"date":"2025-06-29","id":"01373","result":[10,23,25,26,27,28],"process_time":"2025-06-30 15:30:05.422593"}\r
{"date":"2025-07-02","id":"01374","result":[12,16,21,28,34,41],"process_time":"2025-07-03 00:01:43.665159"}\r
{"date":"2025-07-04","id":"01375","result":[7,9,21,29,41,45],"process_time":"2025-07-05 00:01:39.863237"}\r
{"date":"2025-07-06","id":"01376","result":[5,8,13,23,36,45],"process_time":"2025-07-07 00:01:49.637375"}\r
{"date":"2025-07-09","id":"01377","result":[7,8,30,32,33,44],"process_time":"2025-07-10 00:01:41.753255"}\r
{"date":"2025-07-11","id":"01378","result":[11,20,22,24,43,45],"process_time":"2025-07-14 18:47:25.169143"}\r
{"date":"2025-07-13","id":"01379","result":[9,17,22,27,35,36],"process_time":"2025-07-14 18:47:25.168399"}\r
{"date":"2025-07-16","id":"01380","result":[6,11,14,19,21,42],"process_time":"2025-07-17 00:01:46.074680"}\r
{"date":"2025-07-18","id":"01381","result":[7,22,24,28,42,45],"process_time":"2025-07-19 00:01:47.641805"}\r
{"date":"2025-07-20","id":"01382","result":[11,13,14,20,37,42],"process_time":"2025-07-21 00:01:46.476037"}\r
{"date":"2025-07-23","id":"01383","result":[24,26,29,32,37,44],"process_time":"2025-07-24 00:01:57.974437"}\r
{"date":"2025-07-25","id":"01384","result":[20,30,34,35,38,39],"process_time":"2025-07-26 00:00:50.423814"}\r
{"date":"2025-07-27","id":"01385","result":[1,9,12,27,39,45],"process_time":"2025-07-28 00:00:47.866257"}\r
{"date":"2025-07-30","id":"01386","result":[2,3,6,16,26,34],"process_time":"2025-07-31 00:00:49.595399"}\r
{"date":"2025-08-01","id":"01387","result":[5,29,30,31,36,38],"process_time":"2025-08-20 16:02:29.485736"}\r
{"date":"2025-08-03","id":"01388","result":[5,14,24,26,37,43],"process_time":"2025-08-20 16:02:29.485678"}\r
{"date":"2025-08-06","id":"01389","result":[3,12,14,18,29,34],"process_time":"2025-08-20 16:02:29.485618"}\r
{"date":"2025-08-08","id":"01390","result":[11,17,20,26,27,38],"process_time":"2025-08-20 16:02:29.485549"}\r
{"date":"2025-08-10","id":"01391","result":[13,21,26,28,31,35],"process_time":"2025-08-20 16:02:29.485479"}\r
{"date":"2025-08-13","id":"01392","result":[10,15,28,30,35,45],"process_time":"2025-08-20 16:02:29.485408"}\r
{"date":"2025-08-15","id":"01393","result":[5,22,27,36,43,45],"process_time":"2025-08-20 16:02:29.485325"}\r
{"date":"2025-08-17","id":"01394","result":[15,24,26,29,31,42],"process_time":"2025-08-20 16:02:29.485182"}\r
{"date":"2025-08-20","id":"01395","result":[4,9,27,32,38,42],"process_time":"2025-08-23 18:50:41.611711"}\r
{"date":"2025-08-22","id":"01396","result":[1,9,10,13,37,39],"process_time":"2025-08-23 18:50:41.610484"}\r
{"date":"2025-08-24","id":"01397","result":[2,9,20,28,32,43],"process_time":"2025-08-26 00:00:56.846258"}\r
{"date":"2025-08-27","id":"01398","result":[3,11,18,39,40,42],"process_time":"2025-08-28 00:00:49.036768"}\r
{"date":"2025-08-29","id":"01399","result":[2,4,10,24,35,36],"process_time":"2025-08-30 00:00:48.857429"}\r
{"date":"2025-08-31","id":"01400","result":[3,4,14,30,32,38],"process_time":"2025-09-01 00:00:49.518381"}\r
{"date":"2025-09-03","id":"01401","result":[14,21,23,28,44,45],"process_time":"2025-09-04 00:00:58.866318"}\r
{"date":"2025-09-05","id":"01402","result":[1,10,20,22,41,43],"process_time":"2025-09-04 12:01:04.425456"}\r
{"date":"2025-09-07","id":"01403","result":[6,29,30,39,42,44],"process_time":"2025-09-04 12:01:04.424450"}\r
{"date":"2025-09-10","id":"01404","result":[7,10,18,20,24,36],"process_time":"2025-09-11 00:00:50.991828"}\r
{"date":"2025-09-12","id":"01405","result":[17,22,24,37,42,43],"process_time":"2025-09-13 00:00:47.839816"}\r
{"date":"2025-09-14","id":"01406","result":[3,6,9,10,30,37],"process_time":"2025-09-15 00:00:49.274578"}\r
{"date":"2025-09-17","id":"01407","result":[11,23,25,35,38,45],"process_time":"2025-10-18 08:11:55.626549"}\r
{"date":"2025-09-19","id":"01408","result":[4,6,17,18,28,41],"process_time":"2025-10-18 08:11:55.626513"}\r
{"date":"2025-09-21","id":"01409","result":[2,3,6,21,28,38],"process_time":"2025-10-18 08:11:55.626476"}\r
{"date":"2025-09-24","id":"01410","result":[3,5,17,31,32,40],"process_time":"2025-10-18 08:11:55.626440"}\r
{"date":"2025-09-26","id":"01411","result":[12,17,19,27,28,36],"process_time":"2025-10-18 08:11:55.626401"}\r
{"date":"2025-09-28","id":"01412","result":[8,13,18,26,36,39],"process_time":"2025-10-18 08:11:55.626355"}\r
{"date":"2025-10-01","id":"01413","result":[3,6,7,19,30,35],"process_time":"2025-10-18 08:11:55.612054"}\r
{"date":"2025-10-03","id":"01414","result":[29,31,32,33,34,35],"process_time":"2025-10-18 08:11:55.612013"}\r
{"date":"2025-10-05","id":"01415","result":[5,14,22,28,32,39],"process_time":"2025-10-18 08:11:55.611972"}\r
{"date":"2025-10-08","id":"01416","result":[8,10,11,18,23,32],"process_time":"2025-10-18 08:11:55.611933"}\r
{"date":"2025-10-10","id":"01417","result":[4,5,25,34,39,43],"process_time":"2025-10-18 08:11:55.611892"}\r
{"date":"2025-10-12","id":"01418","result":[4,10,16,20,28,34],"process_time":"2025-10-18 08:11:55.611847"}\r
{"date":"2025-10-15","id":"01419","result":[1,6,18,20,29,40],"process_time":"2025-10-18 08:11:55.611801"}\r
{"date":"2025-10-17","id":"01420","result":[15,17,18,26,31,42],"process_time":"2025-10-18 08:11:55.611720"}\r
{"date":"2025-10-19","id":"01421","result":[16,17,25,26,28,37],"process_time":"2025-10-21T21:48:40.108779"}\r
{"date":"2025-10-22","id":"01422","result":[5,11,12,24,28,44],"process_time":"2025-10-23T08:32:54.986020"}\r
{"date":"2025-10-24","id":"01423","result":[2,11,24,31,32,38],"process_time":"2025-10-25T00:01:08.571904"}\r
{"date":"2025-10-26","id":"01424","result":[18,30,34,42,43,45],"process_time":"2025-10-27T00:01:09.769336"}\r
{"date":"2025-10-29","id":"01425","result":[7,26,35,39,41,42],"process_time":"2025-10-30T00:01:00.213650"}\r
{"date":"2025-10-31","id":"01426","result":[3,10,31,34,36,43],"process_time":"2025-11-01T00:01:06.817966"}\r
{"date":"2025-11-02","id":"01427","result":[3,7,12,20,30,44],"process_time":"2025-11-03T00:01:15.214944"}\r
{"date":"2025-11-05","id":"01428","result":[2,9,18,25,30,31],"process_time":"2025-11-06T00:01:07.494617"}\r
{"date":"2025-11-07","id":"01429","result":[3,4,20,28,39,42],"process_time":"2025-11-08T00:01:08.814036"}\r
{"date":"2025-11-09","id":"01430","result":[13,23,27,30,37,43],"process_time":"2025-11-10T00:01:07.473287"}\r
{"date":"2025-11-12","id":"01431","result":[16,24,29,37,40,44],"process_time":"2025-11-13T00:01:09.360111"}\r
{"date":"2025-11-14","id":"01432","result":[3,10,15,27,41,42],"process_time":"2025-11-15T00:01:08.355104"}\r
{"date":"2025-11-16","id":"01433","result":[15,20,31,33,34,45],"process_time":"2025-11-17T00:01:08.215736"}\r
{"date":"2025-11-19","id":"01434","result":[9,12,19,30,40,43],"process_time":"2025-11-20T00:01:05.936274"}\r
{"date":"2025-11-21","id":"01435","result":[8,11,18,25,28,35],"process_time":"2025-11-22T00:01:07.762018"}\r
{"date":"2025-11-23","id":"01436","result":[4,12,19,42,43,44],"process_time":"2025-11-24T00:01:14.087650"}\r
{"date":"2025-11-26","id":"01437","result":[2,8,15,19,30,38],"process_time":"2025-11-27T00:01:06.878882"}\r
{"date":"2025-11-28","id":"01438","result":[2,9,17,23,39,41],"process_time":"2025-11-29T00:01:08.698808"}\r
{"date":"2025-11-30","id":"01439","result":[7,13,26,30,34,42],"process_time":"2025-12-01T00:01:07.189083"}\r
{"date":"2025-12-03","id":"01440","result":[8,15,20,23,31,34],"process_time":"2025-12-04T00:01:08.275976"}\r
{"date":"2025-12-05","id":"01441","result":[2,19,23,37,42,43],"process_time":"2025-12-06T00:01:12.620865"}\r
{"date":"2025-12-07","id":"01442","result":[1,5,23,28,29,43],"process_time":"2025-12-08T00:01:04.344956"}\r
{"date":"2025-12-10","id":"01443","result":[7,18,22,29,30,36],"process_time":"2025-12-11T00:01:39.625407"}\r
{"date":"2025-12-12","id":"01444","result":[3,7,13,17,38,44],"process_time":"2025-12-13T00:01:09.041111"}\r
{"date":"2025-12-14","id":"01445","result":[8,11,13,16,28,32],"process_time":"2025-12-15T00:01:17.813434"}\r
{"date":"2025-12-17","id":"01446","result":[5,14,24,38,41,43],"process_time":"2025-12-18T00:01:12.054335"}\r
{"date":"2025-12-19","id":"01447","result":[1,21,36,42,43,44],"process_time":"2025-12-20T00:01:12.378702"}\r
{"date":"2025-12-21","id":"01448","result":[6,9,12,18,29,43],"process_time":"2025-12-22T00:01:15.347990"}\r
{"date":"2025-12-24","id":"01449","result":[15,19,31,35,43,45],"process_time":"2025-12-25T00:01:13.628526"}\r
{"date":"2025-12-26","id":"01450","result":[4,6,16,25,27,40],"process_time":"2025-12-27T00:01:14.868071"}\r
{"date":"2025-12-28","id":"01451","result":[1,2,7,16,31,37],"process_time":"2025-12-29T00:01:11.493160"}\r
{"date":"2025-12-31","id":"01452","result":[1,25,35,36,37,45],"process_time":"2026-01-01T00:01:16.931963"}\r
{"date":"2026-01-02","id":"01453","result":[7,18,22,32,37,38],"process_time":"2026-01-03T00:01:13.453963"}\r
{"date":"2026-01-04","id":"01454","result":[2,12,21,29,35,44],"process_time":"2026-01-05T00:01:09.511517"}\r
{"date":"2026-01-07","id":"01455","result":[1,5,7,28,31,43],"process_time":"2026-01-08T00:01:11.319815"}\r
{"date":"2026-01-09","id":"01456","result":[8,9,17,21,36,45],"process_time":"2026-01-10T00:01:21.063467"}\r
{"date":"2026-01-11","id":"01457","result":[8,10,21,25,31,38],"process_time":"2026-01-12T00:01:17.911646"}\r
{"date":"2026-01-14","id":"01458","result":[1,22,23,28,39,45],"process_time":"2026-01-15T00:01:21.491209"}\r
{"date":"2026-01-16","id":"01459","result":[2,10,21,31,34,40],"process_time":"2026-01-17T00:01:15.865349"}\r
{"date":"2026-01-18","id":"01460","result":[2,5,15,26,39,42],"process_time":"2026-01-19T21:35:43.979518"}\r
{"date":"2026-01-21","id":"01461","result":[1,18,23,24,29,37],"process_time":"2026-01-22T00:01:16.210227"}\r
{"date":"2026-01-23","id":"01462","result":[9,15,16,20,22,31],"process_time":"2026-01-24T00:01:03.944201"}\r
{"date":"2026-01-25","id":"01463","result":[2,19,20,24,33,34],"process_time":"2026-01-26T00:01:15.846310"}\r
{"date":"2026-01-28","id":"01464","result":[4,10,16,19,27,40],"process_time":"2026-01-29T00:01:12.728314"}\r
{"date":"2026-01-30","id":"01465","result":[16,17,30,41,42,45],"process_time":"2026-01-31T12:01:07.980685"}\r
{"date":"2026-02-01","id":"01466","result":[1,18,21,23,30,36],"process_time":"2026-02-02T00:01:08.982755"}\r
{"date":"2026-02-04","id":"01467","result":[2,12,14,17,39,43],"process_time":"2026-02-05T00:01:12.943908"}\r
{"date":"2026-02-06","id":"01468","result":[2,7,13,17,42,45],"process_time":"2026-02-07T00:01:10.358135"}\r
{"date":"2026-02-08","id":"01469","result":[6,13,16,20,23,38],"process_time":"2026-02-09T00:01:09.317882"}\r
{"date":"2026-02-11","id":"01470","result":[15,20,35,40,44,45],"process_time":"2026-02-12T00:01:18.507362"}\r
{"date":"2026-02-13","id":"01471","result":[8,12,31,36,42,43],"process_time":"2026-02-21T00:01:17.618185"}\r
{"date":"2026-02-15","id":"01472","result":[4,6,7,20,28,43],"process_time":"2026-02-21T00:01:17.611035"}\r
{"date":"2026-02-18","id":"01473","result":[1,7,19,23,26,44],"process_time":"2026-02-21T00:01:17.609252"}\r
{"date":"2026-02-20","id":"01474","result":[4,25,28,33,34,45],"process_time":"2026-02-21T00:01:17.607462"}\r
{"date":"2026-02-22","id":"01475","result":[7,23,24,36,38,40],"process_time":"2026-02-23T00:01:41.247651"}\r
{"date":"2026-02-25","id":"01476","result":[4,13,20,22,23,29],"process_time":"2026-02-26T00:01:09.677964"}\r
{"date":"2026-02-27","id":"01477","result":[2,4,8,15,17,28],"process_time":"2026-02-28T00:01:15.376033"}\r
{"date":"2026-03-01","id":"01478","result":[16,22,23,35,44,45],"process_time":"2026-03-02T00:01:16.703024"}\r
{"date":"2026-03-04","id":"01479","result":[1,4,6,9,13,44],"process_time":"2026-03-05T00:01:24.526702"}\r
{"date":"2026-03-06","id":"01480","result":[2,10,12,21,32,37],"process_time":"2026-03-07T00:01:24.414015"}\r
{"date":"2026-03-08","id":"01481","result":[6,12,13,25,31,32],"process_time":"2026-03-09T00:01:13.676781"}\r
{"date":"2026-03-11","id":"01482","result":[16,18,19,28,31,44],"process_time":"2026-03-12T00:01:16.160072"}\r
{"date":"2026-03-13","id":"01483","result":[11,12,20,22,31,33],"process_time":"2026-03-14T00:01:16.199920"}\r
{"date":"2026-03-15","id":"01484","result":[4,7,11,26,42,44],"process_time":"2026-03-16T00:01:12.030536"}\r
{"date":"2026-03-18","id":"01485","result":[14,20,33,35,36,44],"process_time":"2026-03-19T00:01:11.718565"}\r
{"date":"2026-03-20","id":"01486","result":[8,11,22,23,38,43],"process_time":"2026-03-21T00:01:15.344981"}\r
{"date":"2026-03-22","id":"01487","result":[5,10,22,26,31,36],"process_time":"2026-03-23T00:01:21.488174"}\r
{"date":"2026-03-25","id":"01488","result":[16,22,24,29,35,36],"process_time":"2026-03-26T00:01:13.733931"}\r
{"date":"2026-03-27","id":"01489","result":[5,7,13,19,38,45],"process_time":"2026-03-28T00:01:15.226929"}\r
{"date":"2026-03-29","id":"01490","result":[5,8,18,30,37,45],"process_time":"2026-03-30T00:01:21.657365"}\r
{"date":"2026-04-01","id":"01491","result":[6,30,34,36,37,44],"process_time":"2026-04-17T21:51:01.702229"}\r
{"date":"2026-04-03","id":"01492","result":[2,4,23,24,35,41],"process_time":"2026-04-17T21:51:01.700610"}\r
{"date":"2026-04-05","id":"01493","result":[2,9,23,30,32,42],"process_time":"2026-04-17T21:51:01.693928"}\r
{"date":"2026-04-08","id":"01494","result":[5,8,23,26,38,41],"process_time":"2026-04-17T21:51:01.692435"}\r
{"date":"2026-04-10","id":"01495","result":[7,8,10,16,28,35],"process_time":"2026-04-17T21:51:01.690886"}\r
{"date":"2026-04-12","id":"01496","result":[1,10,11,32,39,42],"process_time":"2026-04-17T21:51:01.684271"}\r
{"date":"2026-04-15","id":"01497","result":[21,22,33,35,36,43],"process_time":"2026-04-17T21:51:01.682822"}\r
{"date":"2026-04-17","id":"01498","result":[1,10,19,31,36,38],"process_time":"2026-04-17T21:51:01.681207"}\r
{"date":"2026-04-19","id":"01499","result":[7,10,15,27,33,35],"process_time":"2026-05-02T18:53:53.310428"}\r
{"date":"2026-04-22","id":"01500","result":[2,6,15,16,17,37],"process_time":"2026-05-02T18:53:53.308502"}\r
{"date":"2026-04-24","id":"01501","result":[20,29,33,36,41,42],"process_time":"2026-05-02T18:53:53.306210"}\r
{"date":"2026-04-26","id":"01502","result":[12,18,22,25,31,41],"process_time":"2026-05-02T18:53:53.304334"}\r
{"date":"2026-04-29","id":"01503","result":[4,14,15,16,17,25],"process_time":"2026-05-02T18:53:53.302155"}\r
{"date":"2026-05-01","id":"01504","result":[4,21,25,31,41,43],"process_time":"2026-05-02T18:53:53.299953"}\r
{"date":"2026-05-03","id":"01505","result":[7,9,14,24,38,39],"process_time":"2026-05-08T12:05:22.851895"}\r
{"date":"2026-05-06","id":"01506","result":[9,12,28,36,37,40],"process_time":"2026-05-08T12:05:22.850221"}\r
{"date":"2026-05-08","id":"01507","result":[4,16,17,26,34,42],"process_time":"2026-05-09T00:01:34.672240"}\r
{"date":"2026-05-10","id":"01508","result":[3,4,10,11,27,42],"process_time":"2026-05-11T00:01:35.298901"}\r
{"date":"2026-05-13","id":"01509","result":[8,10,15,32,35,43],"process_time":"2026-05-14T00:05:51.273473"}\r
{"date":"2026-05-15","id":"01510","result":[6,14,20,22,23,44],"process_time":"2026-05-16T00:02:03.190391"}\r
{"date":"2026-05-17","id":"01511","result":[4,8,13,15,27,31],"process_time":"2026-05-18T00:02:23.112791"}\r
{"date":"2026-05-20","id":"01512","result":[16,28,29,37,40,45],"process_time":"2026-05-21T18:45:01.767583"}\r
{"date":"2026-05-22","id":"01513","result":[2,3,14,28,41,44],"process_time":"2026-05-23T00:01:39.523486"}\r
{"date":"2026-05-24","id":"01514","result":[4,8,9,14,25,42],"process_time":"2026-05-25T00:01:33.886182"}\r
{"date":"2026-05-27","id":"01515","result":[2,13,17,18,31,37],"process_time":"2026-05-28T00:01:31.215580"}\r
{"date":"2026-05-29","id":"01516","result":[13,14,24,28,30,42],"process_time":"2026-05-30T16:35:44.187186"}\r
{"date":"2026-05-31","id":"01517","result":[1,12,16,21,24,41],"process_time":"2026-06-01T00:01:50.689598"}\r
{"date":"2026-06-03","id":"01518","result":[3,11,26,33,36,38],"process_time":"2026-06-04T00:01:40.965328"}\r
{"date":"2026-06-05","id":"01519","result":[13,16,19,32,36,39],"process_time":"2026-06-06T00:01:43.571482"}\r
{"date":"2026-06-07","id":"01520","result":[14,21,26,30,34,35],"process_time":"2026-06-09T00:01:45.420025"}\r
{"date":"2026-06-10","id":"01521","result":[3,9,17,22,27,32],"process_time":"2026-06-11T00:01:53.877086"}\r
{"date":"2026-06-12","id":"01522","result":[5,15,30,34,37,38],"process_time":"2026-06-13T00:01:35.553730"}\r
{"date":"2026-06-14","id":"01523","result":[7,16,20,22,24,38],"process_time":"2026-06-15T00:01:57.298084"}\r
{"date":"2026-06-17","id":"01524","result":[5,6,16,28,35,39],"process_time":"2026-06-18T00:02:09.205703"}\r
{"date":"2026-06-19","id":"01525","result":[6,9,19,29,30,36],"process_time":"2026-06-20T00:01:41.512041"}\r
{"date":"2026-06-21","id":"01526","result":[3,8,19,27,41,45],"process_time":"2026-06-22T00:01:44.845585"}\r
{"date":"2026-06-24","id":"01527","result":[3,11,17,19,30,32],"process_time":"2026-06-25T00:01:40.435007"}\r
{"date":"2026-06-26","id":"01528","result":[9,14,31,36,41,45],"process_time":"2026-07-04T17:52:21.451880"}\r
{"date":"2026-06-28","id":"01529","result":[2,11,18,33,42,45],"process_time":"2026-07-04T17:52:21.450229"}\r
{"date":"2026-07-01","id":"01530","result":[20,24,25,29,40,44],"process_time":"2026-07-04T17:52:21.448610"}\r
{"date":"2026-07-03","id":"01531","result":[6,20,21,28,30,39],"process_time":"2026-07-04T17:52:21.446210"}\r
{"date":"2026-07-05","id":"01532","result":[1,5,13,29,32,35],"process_time":"2026-07-06T00:01:53.157507"}\r
`,bd=`{"date":"2017-08-01","id":"00001","result":[5,10,14,23,24,38,35],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-08-03","id":"00002","result":[4,9,24,25,27,45,40],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-08-05","id":"00003","result":[1,5,11,32,40,45,43],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-08-08","id":"00004","result":[19,36,39,41,46,51,38],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-08-10","id":"00005","result":[10,11,19,41,50,54,3],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-08-12","id":"00006","result":[6,16,20,32,38,51,34],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-08-15","id":"00007","result":[7,11,19,32,33,51,30],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-08-17","id":"00008","result":[11,12,20,30,32,34,53],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-08-19","id":"00009","result":[7,11,13,15,26,51,36],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-08-22","id":"00010","result":[10,24,31,32,38,44,14],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-08-24","id":"00011","result":[5,16,18,37,42,46,10],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-08-26","id":"00012","result":[17,25,30,31,36,41,20],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-08-29","id":"00013","result":[4,12,15,23,24,41,44],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-08-31","id":"00014","result":[8,20,27,35,36,47,18],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-09-02","id":"00015","result":[5,9,11,18,19,37,50],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-09-05","id":"00016","result":[1,2,8,13,23,39,9],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-09-07","id":"00017","result":[4,18,22,31,32,40,8],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-09-09","id":"00018","result":[1,15,23,36,43,54,12],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-09-12","id":"00019","result":[6,10,12,47,48,51,35],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-09-14","id":"00020","result":[22,23,32,43,44,51,15],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-09-16","id":"00021","result":[9,12,21,26,29,52,24],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-09-19","id":"00022","result":[3,32,36,41,44,53,45],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-09-21","id":"00023","result":[9,12,16,24,43,51,39],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-09-23","id":"00024","result":[7,8,27,36,44,53,49],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-09-26","id":"00025","result":[14,15,18,30,36,49,19],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-09-28","id":"00026","result":[20,27,28,31,39,47,10],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-09-30","id":"00027","result":[4,17,23,25,34,46,24],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-10-03","id":"00028","result":[21,31,35,41,46,50,23],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-10-05","id":"00029","result":[1,3,14,19,35,41,20],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-10-07","id":"00030","result":[31,34,40,42,43,49,16],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-10-10","id":"00031","result":[29,33,43,44,45,50,41],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-10-12","id":"00032","result":[5,8,11,31,37,42,52],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-10-14","id":"00033","result":[14,18,29,35,44,49,54],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-10-17","id":"00034","result":[1,26,36,40,50,54,31],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-10-19","id":"00035","result":[6,15,17,24,40,45,39],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-10-21","id":"00036","result":[4,9,13,16,18,49,30],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-10-24","id":"00037","result":[1,2,9,13,32,35,52],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-10-26","id":"00038","result":[2,10,15,30,34,50,3],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-10-28","id":"00039","result":[13,18,35,36,41,48,47],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-10-31","id":"00040","result":[7,13,24,45,47,52,33],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-11-02","id":"00041","result":[3,9,12,21,51,52,7],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-11-04","id":"00042","result":[2,8,12,44,46,52,9],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-11-07","id":"00043","result":[19,32,36,37,42,54,28],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-11-09","id":"00044","result":[2,3,6,23,34,36,50],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-11-11","id":"00045","result":[12,26,33,35,36,44,1],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-11-14","id":"00046","result":[20,24,29,41,47,49,22],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-11-16","id":"00047","result":[1,16,22,25,47,48,21],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-11-18","id":"00048","result":[11,12,26,42,50,54,17],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-11-21","id":"00049","result":[5,8,23,37,38,54,55],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-11-23","id":"00050","result":[1,2,3,18,25,50,14],"process_time":"2022-05-07 07:56:43.143266"}
{"date":"2017-11-25","id":"00051","result":[2,9,16,46,52,55,50],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-11-28","id":"00052","result":[2,19,39,49,51,53,20],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-11-30","id":"00053","result":[5,13,26,37,53,55,28],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-12-02","id":"00054","result":[9,37,45,50,53,54,40],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-12-05","id":"00055","result":[27,38,40,42,46,55,5],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-12-07","id":"00056","result":[3,14,26,35,44,54,25],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-12-09","id":"00057","result":[5,34,35,42,49,52,21],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-12-12","id":"00058","result":[6,7,8,21,32,39,27],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-12-14","id":"00059","result":[11,12,22,28,46,50,7],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-12-16","id":"00060","result":[5,23,37,41,43,53,25],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-12-19","id":"00061","result":[2,3,20,25,38,44,12],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-12-21","id":"00062","result":[22,23,27,35,37,46,19],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-12-23","id":"00063","result":[7,8,9,13,28,44,12],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-12-26","id":"00064","result":[7,11,13,18,26,42,49],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-12-28","id":"00065","result":[7,18,26,29,31,35,34],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2017-12-30","id":"00066","result":[8,9,36,37,39,50,7],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2018-01-02","id":"00067","result":[4,7,8,34,37,47,24],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2018-01-04","id":"00068","result":[1,7,31,35,46,55,51],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2018-01-06","id":"00069","result":[4,11,24,35,41,45,17],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2018-01-09","id":"00070","result":[18,25,28,46,50,51,15],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2018-01-11","id":"00071","result":[4,7,30,35,37,45,1],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2018-01-13","id":"00072","result":[3,21,25,26,51,55,37],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2018-01-16","id":"00073","result":[6,27,33,41,42,49,22],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2018-01-18","id":"00074","result":[12,24,28,30,36,39,15],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2018-01-20","id":"00075","result":[2,7,15,16,41,45,19],"process_time":"2022-05-07 07:56:43.147266"}
{"date":"2018-01-23","id":"00076","result":[3,10,15,23,41,53,35],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-01-25","id":"00077","result":[1,10,30,44,45,50,4],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-01-27","id":"00078","result":[21,26,36,38,40,50,11],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-01-30","id":"00079","result":[15,19,24,51,53,55,29],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-02-01","id":"00080","result":[1,7,8,9,39,43,52],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-02-03","id":"00081","result":[12,29,42,48,54,55,18],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-02-06","id":"00082","result":[1,20,29,31,43,53,16],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-02-08","id":"00083","result":[21,22,29,37,41,50,33],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-02-10","id":"00084","result":[8,10,19,25,36,46,7],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-02-13","id":"00085","result":[9,25,26,30,42,54,19],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-02-17","id":"00086","result":[16,22,28,29,35,43,45],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-02-20","id":"00087","result":[1,2,21,24,50,52,33],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-02-22","id":"00088","result":[11,14,32,36,42,48,20],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-02-24","id":"00089","result":[5,7,24,32,45,49,1],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-02-27","id":"00090","result":[8,16,23,28,44,49,45],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-03-01","id":"00091","result":[4,5,7,17,20,38,9],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-03-03","id":"00092","result":[4,10,32,37,47,52,49],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-03-06","id":"00093","result":[2,6,13,22,40,48,12],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-03-08","id":"00094","result":[14,17,18,23,41,52,40],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-03-10","id":"00095","result":[9,20,27,31,48,49,42],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-03-13","id":"00096","result":[1,2,17,46,47,49,44],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-03-15","id":"00097","result":[15,20,23,28,39,49,19],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-03-17","id":"00098","result":[3,14,28,35,50,52,29],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-03-20","id":"00099","result":[11,40,43,46,49,55,37],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-03-22","id":"00100","result":[1,8,24,33,34,41,20],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-03-24","id":"00101","result":[1,30,38,45,48,50,12],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-03-27","id":"00102","result":[9,13,14,15,54,55,22],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-03-29","id":"00103","result":[5,27,35,39,46,52,31],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-03-31","id":"00104","result":[3,7,31,43,51,53,26],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-04-03","id":"00105","result":[20,21,39,42,51,53,1],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-04-05","id":"00106","result":[7,9,17,25,31,32,6],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-04-07","id":"00107","result":[12,24,33,34,36,53,5],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-04-10","id":"00108","result":[1,22,25,31,36,48,41],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-04-12","id":"00109","result":[4,29,35,37,42,54,19],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-04-14","id":"00110","result":[2,10,14,26,45,54,20],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-04-17","id":"00111","result":[2,10,26,27,31,38,39],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-04-19","id":"00112","result":[4,17,19,35,49,55,9],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-04-21","id":"00113","result":[16,18,41,43,46,55,35],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-04-24","id":"00114","result":[17,18,24,40,41,46,6],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-04-26","id":"00115","result":[23,26,29,31,36,54,55],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-04-28","id":"00116","result":[12,19,22,29,32,46,25],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-05-01","id":"00117","result":[1,7,20,23,25,38,14],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-05-03","id":"00118","result":[23,27,33,37,39,49,44],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-05-05","id":"00119","result":[16,32,33,37,40,48,15],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-05-08","id":"00120","result":[3,16,23,24,38,42,48],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-05-10","id":"00121","result":[2,6,8,34,39,43,11],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-05-12","id":"00122","result":[1,9,26,38,54,55,51],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-05-15","id":"00123","result":[3,6,29,37,44,49,24],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-05-17","id":"00124","result":[13,31,38,45,53,55,46],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-05-19","id":"00125","result":[33,35,45,52,53,55,25],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-05-22","id":"00126","result":[4,5,8,17,35,47,39],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-05-24","id":"00127","result":[24,25,26,29,36,48,40],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-05-26","id":"00128","result":[7,12,28,31,40,44,15],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-05-29","id":"00129","result":[9,13,17,18,46,50,26],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-05-31","id":"00130","result":[3,15,18,25,26,29,19],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-06-02","id":"00131","result":[5,7,17,22,32,33,6],"process_time":"2022-05-07 07:56:43.151266"}
{"date":"2018-06-05","id":"00132","result":[11,21,26,32,51,52,5],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-06-07","id":"00133","result":[11,16,18,26,46,47,42],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-06-09","id":"00134","result":[9,23,25,39,52,53,38],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-06-12","id":"00135","result":[4,13,23,27,29,35,14],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-06-14","id":"00136","result":[3,15,32,45,48,54,55],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-06-16","id":"00137","result":[14,15,21,30,44,47,48],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-06-19","id":"00138","result":[16,17,31,37,41,52,34],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-06-21","id":"00139","result":[2,8,19,23,25,33,32],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-06-23","id":"00140","result":[6,8,13,23,46,55,1],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-06-26","id":"00141","result":[17,18,21,39,40,43,3],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-06-28","id":"00142","result":[11,31,33,43,48,51,23],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-06-30","id":"00143","result":[3,12,23,24,30,33,1],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-07-03","id":"00144","result":[30,32,34,47,48,49,50],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-07-05","id":"00145","result":[4,15,22,24,43,51,48],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-07-07","id":"00146","result":[2,30,45,48,49,53,41],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-07-10","id":"00147","result":[6,10,16,20,27,29,24],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-07-12","id":"00148","result":[8,15,18,21,24,49,22],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-07-14","id":"00149","result":[4,19,23,34,38,50,1],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-07-17","id":"00150","result":[5,14,22,27,31,40,48],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-07-19","id":"00151","result":[11,13,28,34,44,47,10],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-07-21","id":"00152","result":[7,31,33,37,46,52,28],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-07-24","id":"00153","result":[11,18,34,37,50,53,20],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-07-26","id":"00154","result":[21,24,33,37,40,46,52],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-07-28","id":"00155","result":[11,16,22,25,30,40,9],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-07-31","id":"00156","result":[1,5,27,31,47,50,41],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-08-02","id":"00157","result":[6,11,16,17,41,55,7],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-08-04","id":"00158","result":[11,12,24,32,41,48,3],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-08-07","id":"00159","result":[3,9,15,20,39,49,4],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-08-09","id":"00160","result":[24,29,32,33,49,55,9],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-08-11","id":"00161","result":[16,17,31,33,42,44,14],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-08-14","id":"00162","result":[29,30,36,38,45,52,46],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-08-16","id":"00163","result":[6,10,34,46,48,51,47],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-08-18","id":"00164","result":[7,33,36,39,51,55,11],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-08-21","id":"00165","result":[9,12,14,23,32,46,31],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-08-23","id":"00166","result":[14,18,27,38,39,53,2],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-08-25","id":"00167","result":[10,11,15,32,40,48,27],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-08-28","id":"00168","result":[2,10,15,31,39,48,23],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-08-30","id":"00169","result":[5,22,28,42,49,54,36],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-09-01","id":"00170","result":[2,8,20,21,28,36,5],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-09-04","id":"00171","result":[8,18,20,29,34,37,51],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-09-06","id":"00172","result":[4,11,15,21,24,27,7],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-09-08","id":"00173","result":[9,11,12,24,35,43,15],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-09-11","id":"00174","result":[13,17,28,42,45,49,50],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-09-13","id":"00175","result":[4,6,7,26,40,44,9],"process_time":"2022-05-07 07:56:43.155266"}
{"date":"2018-09-15","id":"00176","result":[2,5,28,30,46,50,49],"process_time":"2022-05-07 07:56:43.183267"}
{"date":"2018-09-18","id":"00177","result":[8,21,32,43,48,53,38],"process_time":"2022-05-07 07:56:43.183267"}
{"date":"2018-09-20","id":"00178","result":[3,32,35,46,47,49,51],"process_time":"2022-05-07 07:56:43.183267"}
{"date":"2018-09-22","id":"00179","result":[1,8,17,28,40,50,21],"process_time":"2022-05-07 07:56:43.183267"}
{"date":"2018-09-25","id":"00180","result":[2,3,6,13,14,17,9],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-09-27","id":"00181","result":[8,12,29,35,51,54,34],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-09-29","id":"00182","result":[3,7,12,32,34,55,38],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-10-02","id":"00183","result":[3,7,28,32,33,37,22],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-10-04","id":"00184","result":[3,9,12,17,34,42,46],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-10-06","id":"00185","result":[5,6,16,42,48,51,3],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-10-09","id":"00186","result":[10,27,46,50,51,55,1],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-10-11","id":"00187","result":[5,16,17,37,46,49,35],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-10-13","id":"00188","result":[12,21,23,44,47,48,43],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-10-16","id":"00189","result":[5,28,29,34,42,46,17],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-10-18","id":"00190","result":[1,11,22,34,42,47,30],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-10-20","id":"00191","result":[2,5,10,17,35,41,21],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-10-23","id":"00192","result":[1,3,6,13,21,30,36],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-10-25","id":"00193","result":[16,23,29,31,45,48,19],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-10-27","id":"00194","result":[8,9,15,21,44,49,16],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-10-30","id":"00195","result":[1,12,22,27,30,39,46],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-11-01","id":"00196","result":[3,11,15,42,44,54,41],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-11-03","id":"00197","result":[14,17,20,23,25,45,34],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-11-06","id":"00198","result":[19,22,23,43,47,53,3],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-11-08","id":"00199","result":[22,28,31,39,52,53,14],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-11-10","id":"00200","result":[3,5,19,22,29,39,15],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-11-13","id":"00201","result":[3,25,26,32,41,47,5],"process_time":"2022-05-07 07:56:43.203268"}
{"date":"2018-11-15","id":"00202","result":[13,16,21,40,49,52,54],"process_time":"2022-05-07 07:56:43.207268"}
{"date":"2018-11-17","id":"00203","result":[12,22,26,29,45,47,15],"process_time":"2022-05-07 07:56:43.207268"}
{"date":"2018-11-20","id":"00204","result":[9,23,33,40,44,49,17],"process_time":"2022-05-07 07:56:43.207268"}
{"date":"2018-11-22","id":"00205","result":[17,22,24,28,37,44,6],"process_time":"2022-05-07 07:56:43.207268"}
{"date":"2018-11-24","id":"00206","result":[3,10,11,25,40,54,17],"process_time":"2022-05-07 07:56:43.207268"}
{"date":"2018-11-27","id":"00207","result":[3,5,23,28,35,44,8],"process_time":"2022-05-07 07:56:43.207268"}
{"date":"2018-11-29","id":"00208","result":[10,23,27,42,51,52,20],"process_time":"2022-05-07 07:56:43.207268"}
{"date":"2018-12-01","id":"00209","result":[3,5,12,20,25,33,41],"process_time":"2022-05-07 07:56:43.207268"}
{"date":"2018-12-04","id":"00210","result":[10,13,16,23,30,49,24],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2018-12-06","id":"00211","result":[9,13,23,27,39,42,49],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2018-12-08","id":"00212","result":[3,6,9,31,48,54,53],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2018-12-11","id":"00213","result":[1,5,11,37,39,44,31],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2018-12-13","id":"00214","result":[2,11,14,36,49,55,53],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2018-12-15","id":"00215","result":[14,17,49,52,53,55,12],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2018-12-18","id":"00216","result":[1,9,15,17,25,26,8],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2018-12-20","id":"00217","result":[8,17,24,33,34,44,55],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2018-12-22","id":"00218","result":[3,8,16,35,39,52,29],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2018-12-25","id":"00219","result":[3,9,17,21,23,51,15],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2018-12-27","id":"00220","result":[5,20,33,42,43,50,40],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2018-12-29","id":"00221","result":[8,36,42,43,50,52,30],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-01-01","id":"00222","result":[2,19,21,27,37,46,12],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-01-03","id":"00223","result":[23,31,37,45,49,54,18],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-01-05","id":"00224","result":[10,11,38,47,53,55,51],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-01-08","id":"00225","result":[3,5,9,11,45,48,40],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-01-10","id":"00226","result":[12,22,31,35,40,47,8],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-01-12","id":"00227","result":[7,13,14,26,42,54,11],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-01-15","id":"00228","result":[4,6,13,22,29,30,52],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-01-17","id":"00229","result":[13,14,22,34,35,55,54],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-01-19","id":"00230","result":[13,29,42,46,51,53,36],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-01-22","id":"00231","result":[1,14,22,40,52,55,21],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-01-24","id":"00232","result":[31,35,38,44,49,55,24],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-01-26","id":"00233","result":[20,27,33,43,53,54,48],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-01-29","id":"00234","result":[15,20,26,41,45,55,10],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-01-31","id":"00235","result":[10,19,20,28,34,44,29],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-02-02","id":"00236","result":[11,23,27,35,36,46,37],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-02-07","id":"00237","result":[20,27,28,32,47,50,41],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-02-09","id":"00238","result":[2,14,15,44,46,50,18],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-02-12","id":"00239","result":[1,12,17,34,48,49,47],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-02-14","id":"00240","result":[8,15,26,41,43,53,46],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-02-16","id":"00241","result":[5,8,14,28,37,40,41],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-02-19","id":"00242","result":[12,18,22,29,32,52,51],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-02-21","id":"00243","result":[3,10,11,15,29,34,50],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-02-23","id":"00244","result":[16,19,30,39,43,52,21],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-02-26","id":"00245","result":[8,9,16,34,42,43,45],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-02-28","id":"00246","result":[4,15,19,34,40,42,49],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-03-02","id":"00247","result":[1,2,3,20,46,48,31],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-03-05","id":"00248","result":[1,15,23,51,53,55,26],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-03-07","id":"00249","result":[2,14,20,33,41,47,27],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-03-09","id":"00250","result":[18,24,31,34,35,44,52],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-03-12","id":"00251","result":[9,16,26,34,44,49,19],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-03-14","id":"00252","result":[18,21,25,35,44,53,4],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-03-16","id":"00253","result":[10,18,22,24,35,40,53],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-03-19","id":"00254","result":[8,28,32,35,40,45,34],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-03-21","id":"00255","result":[7,18,32,42,46,53,28],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-03-23","id":"00256","result":[3,9,30,41,46,52,22],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-03-26","id":"00257","result":[15,19,28,40,44,48,14],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-03-28","id":"00258","result":[3,23,37,43,44,49,27],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-03-30","id":"00259","result":[3,15,18,35,50,54,32],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-04-02","id":"00260","result":[1,4,9,20,22,26,48],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-04-04","id":"00261","result":[16,26,29,38,47,51,13],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-04-06","id":"00262","result":[1,20,30,41,46,50,48],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-04-09","id":"00263","result":[10,14,19,36,48,49,3],"process_time":"2022-05-07 07:56:43.211268"}
{"date":"2019-04-11","id":"00264","result":[1,8,31,32,37,55,53],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-04-13","id":"00265","result":[9,13,20,21,36,43,32],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-04-16","id":"00266","result":[16,29,32,33,52,53,5],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-04-18","id":"00267","result":[7,8,15,24,26,48,10],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-04-20","id":"00268","result":[8,10,12,24,40,44,51],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-04-23","id":"00269","result":[20,21,22,31,43,45,30],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-04-25","id":"00270","result":[16,22,23,33,36,38,45],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-04-27","id":"00271","result":[1,11,22,26,33,51,4],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-04-30","id":"00272","result":[3,5,13,40,41,45,52],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-05-02","id":"00273","result":[2,10,16,17,33,36,20],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-05-04","id":"00274","result":[1,2,3,17,26,53,50],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-05-07","id":"00275","result":[3,6,7,8,9,49,24],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-05-09","id":"00276","result":[19,21,48,49,54,55,27],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-05-11","id":"00277","result":[6,11,20,22,26,28,36],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-05-14","id":"00278","result":[6,11,15,21,30,40,10],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-05-16","id":"00279","result":[8,28,30,33,40,43,24],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-05-18","id":"00280","result":[6,10,13,18,29,38,53],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-05-21","id":"00281","result":[11,12,29,31,37,53,41],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-05-23","id":"00282","result":[13,21,33,42,53,55,44],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-05-25","id":"00283","result":[4,12,35,44,50,55,19],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-05-28","id":"00284","result":[15,22,31,32,33,37,51],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-05-30","id":"00285","result":[17,31,33,34,37,40,35],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-06-01","id":"00286","result":[10,24,31,41,42,47,20],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-06-04","id":"00287","result":[18,20,24,26,33,41,55],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-06-06","id":"00288","result":[10,13,30,36,51,54,16],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-06-08","id":"00289","result":[2,8,10,23,27,35,47],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-06-11","id":"00290","result":[2,5,13,20,30,49,35],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-06-13","id":"00291","result":[6,9,15,22,29,53,25],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-06-15","id":"00292","result":[13,23,40,45,52,55,9],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-06-18","id":"00293","result":[24,31,45,46,47,54,4],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-06-20","id":"00294","result":[9,15,23,41,49,51,52],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-06-22","id":"00295","result":[1,9,23,28,42,54,49],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-06-25","id":"00296","result":[3,14,34,35,40,49,23],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-06-27","id":"00297","result":[9,29,32,44,49,53,5],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-06-29","id":"00298","result":[6,10,19,31,34,43,37],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-07-02","id":"00299","result":[2,9,33,45,52,54,1],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-07-04","id":"00300","result":[4,5,14,46,52,54,3],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-07-06","id":"00301","result":[5,29,36,39,46,53,48],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-07-09","id":"00302","result":[4,17,25,40,42,51,2],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-07-11","id":"00303","result":[6,9,15,26,35,38,34],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-07-13","id":"00304","result":[5,23,29,45,50,52,1],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-07-16","id":"00305","result":[4,12,19,31,33,40,51],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-07-18","id":"00306","result":[4,24,29,31,39,41,38],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-07-20","id":"00307","result":[15,18,25,32,42,52,10],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-07-23","id":"00308","result":[5,10,21,32,39,52,41],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-07-25","id":"00309","result":[3,31,34,41,52,53,16],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-07-27","id":"00310","result":[2,3,25,33,44,50,17],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-07-30","id":"00311","result":[3,8,12,21,32,51,7],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-08-01","id":"00312","result":[1,18,39,45,48,49,26],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-08-03","id":"00313","result":[13,24,25,26,27,30,4],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-08-06","id":"00314","result":[9,11,19,20,26,42,17],"process_time":"2022-05-07 07:56:43.215268"}
{"date":"2019-08-08","id":"00315","result":[1,6,17,18,21,41,22],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-08-10","id":"00316","result":[7,17,36,42,43,50,44],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-08-13","id":"00317","result":[4,8,16,27,32,40,23],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-08-15","id":"00318","result":[19,25,31,32,39,47,8],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-08-17","id":"00319","result":[9,11,24,26,38,53,41],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-08-20","id":"00320","result":[10,30,38,48,54,55,46],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-08-22","id":"00321","result":[4,7,16,17,30,39,27],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-08-24","id":"00322","result":[19,20,34,40,49,51,1],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-08-27","id":"00323","result":[16,22,29,33,46,47,55],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-08-29","id":"00324","result":[10,11,12,23,27,48,9],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-08-31","id":"00325","result":[13,20,23,32,51,52,42],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-09-03","id":"00326","result":[13,14,29,35,41,55,25],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-09-05","id":"00327","result":[20,24,27,30,33,45,21],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-09-07","id":"00328","result":[7,17,31,35,38,46,16],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-09-10","id":"00329","result":[6,9,19,39,50,54,37],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-09-12","id":"00330","result":[18,29,32,33,45,49,40],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-09-14","id":"00331","result":[10,36,42,44,45,54,14],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-09-17","id":"00332","result":[3,14,26,38,43,47,10],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-09-19","id":"00333","result":[2,8,22,34,39,41,13],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-09-21","id":"00334","result":[2,5,23,30,42,45,34],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-09-24","id":"00335","result":[12,33,39,40,48,53,35],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-09-26","id":"00336","result":[7,12,38,43,51,55,15],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-09-28","id":"00337","result":[4,8,21,23,40,43,44],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-10-01","id":"00338","result":[5,22,38,41,47,49,29],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-10-03","id":"00339","result":[4,7,8,26,37,44,29],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-10-05","id":"00340","result":[10,29,30,31,37,51,50],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-10-08","id":"00341","result":[8,36,39,43,48,50,40],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-10-10","id":"00342","result":[4,17,42,51,53,55,29],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-10-12","id":"00343","result":[21,39,48,51,53,55,5],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-10-15","id":"00344","result":[9,12,29,46,48,53,3],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-10-17","id":"00345","result":[5,11,14,34,51,53,16],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-10-19","id":"00346","result":[1,10,21,26,42,43,25],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-10-22","id":"00347","result":[2,16,26,27,36,40,31],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-10-24","id":"00348","result":[9,14,23,41,45,50,13],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-10-26","id":"00349","result":[18,20,22,50,51,53,35],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-10-29","id":"00350","result":[12,15,16,31,43,55,11],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-10-31","id":"00351","result":[18,19,22,37,47,48,46],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-11-02","id":"00352","result":[2,15,34,35,48,50,32],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-11-05","id":"00353","result":[3,6,16,17,44,50,28],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-11-07","id":"00354","result":[1,12,19,37,44,52,18],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-11-09","id":"00355","result":[1,3,6,25,29,41,12],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-11-12","id":"00356","result":[10,17,24,27,36,39,33],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-11-14","id":"00357","result":[9,12,16,36,41,55,35],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-11-16","id":"00358","result":[6,8,18,22,49,52,10],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-11-19","id":"00359","result":[19,21,33,35,38,40,4],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-11-21","id":"00360","result":[21,24,35,38,42,47,34],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-11-23","id":"00361","result":[7,29,30,45,50,55,15],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-11-26","id":"00362","result":[7,19,38,41,42,47,4],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-11-28","id":"00363","result":[1,18,26,28,53,55,14],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-11-30","id":"00364","result":[8,9,10,32,44,50,15],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-12-03","id":"00365","result":[21,29,36,41,50,52,42],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-12-05","id":"00366","result":[9,11,16,27,35,40,51],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-12-07","id":"00367","result":[7,18,38,42,47,51,8],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-12-10","id":"00368","result":[5,20,33,42,43,49,26],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-12-12","id":"00369","result":[1,9,15,42,49,50,48],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-12-14","id":"00370","result":[3,30,33,34,40,47,26],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-12-17","id":"00371","result":[4,5,14,19,22,37,43],"process_time":"2022-05-07 07:56:43.219268"}
{"date":"2019-12-19","id":"00372","result":[18,22,25,28,29,34,50],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2019-12-21","id":"00373","result":[5,8,20,34,37,42,51],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2019-12-24","id":"00374","result":[3,16,30,34,50,55,48],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2019-12-26","id":"00375","result":[5,6,12,18,23,54,26],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2019-12-28","id":"00376","result":[10,17,26,28,29,32,21],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2019-12-31","id":"00377","result":[2,22,26,28,44,55,27],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-01-02","id":"00378","result":[12,14,26,29,33,40,50],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-01-04","id":"00379","result":[4,14,26,42,44,55,48],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-01-07","id":"00380","result":[8,11,16,22,42,54,13],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-01-09","id":"00381","result":[17,20,21,29,52,54,51],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-01-11","id":"00382","result":[8,11,17,19,25,47,53],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-01-14","id":"00383","result":[3,4,17,39,50,51,53],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-01-16","id":"00384","result":[10,11,26,33,44,46,55],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-01-18","id":"00385","result":[13,18,19,23,32,43,11],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-01-21","id":"00386","result":[14,31,45,47,52,54,13],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-01-23","id":"00387","result":[9,15,18,25,31,49,46],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-01-28","id":"00388","result":[1,20,24,33,40,55,46],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-01-30","id":"00389","result":[12,18,28,30,47,50,41],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-02-01","id":"00390","result":[2,3,11,23,35,54,6],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-02-04","id":"00391","result":[6,10,20,47,52,55,46],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-02-06","id":"00392","result":[13,18,34,36,45,49,37],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-02-08","id":"00393","result":[9,12,19,25,41,54,38],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-02-11","id":"00394","result":[4,14,18,21,32,53,2],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-02-13","id":"00395","result":[25,28,32,34,35,39,7],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-02-15","id":"00396","result":[26,36,37,38,42,49,46],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-02-18","id":"00397","result":[27,32,36,37,47,48,50],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-02-20","id":"00398","result":[1,3,20,33,36,51,49],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-02-22","id":"00399","result":[7,24,32,49,51,54,44],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-02-25","id":"00400","result":[5,13,21,36,39,48,6],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-02-27","id":"00401","result":[3,11,21,29,47,55,50],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-02-29","id":"00402","result":[9,17,23,26,51,54,32],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-03-03","id":"00403","result":[14,15,31,40,43,49,12],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-03-05","id":"00404","result":[8,9,34,40,41,54,13],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-03-07","id":"00405","result":[5,11,21,30,40,48,20],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-03-10","id":"00406","result":[23,25,30,36,45,52,53],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-03-12","id":"00407","result":[2,14,19,24,27,34,48],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-03-14","id":"00408","result":[12,20,25,38,39,40,37],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-03-17","id":"00409","result":[1,14,18,43,49,50,8],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-03-19","id":"00410","result":[3,35,41,42,43,49,31],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-03-21","id":"00411","result":[10,12,14,17,29,53,25],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-03-24","id":"00412","result":[3,9,20,21,33,52,50],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-03-26","id":"00413","result":[7,8,11,31,35,36,45],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-03-28","id":"00414","result":[1,10,11,13,27,55,19],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-03-31","id":"00415","result":[12,19,40,41,43,53,23],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-04-25","id":"00416","result":[4,18,24,30,53,55,13],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-04-28","id":"00417","result":[4,6,10,16,30,46,34],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-04-30","id":"00418","result":[12,31,32,33,39,41,14],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-05-02","id":"00419","result":[2,6,9,16,43,53,19],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-05-05","id":"00420","result":[1,4,13,15,18,20,22],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-05-07","id":"00421","result":[9,19,28,30,32,54,22],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-05-09","id":"00422","result":[18,19,30,39,45,46,11],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-05-12","id":"00423","result":[1,8,25,34,38,44,28],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-05-14","id":"00424","result":[7,23,29,47,51,55,12],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-05-16","id":"00425","result":[19,35,38,49,52,55,1],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-05-19","id":"00426","result":[5,15,16,19,49,55,3],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-05-21","id":"00427","result":[2,15,22,25,30,46,10],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-05-23","id":"00428","result":[4,13,27,47,50,55,31],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-05-26","id":"00429","result":[11,12,23,24,34,47,43],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-05-28","id":"00430","result":[1,4,8,21,44,49,52],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-05-30","id":"00431","result":[12,13,41,42,48,53,20],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-06-02","id":"00432","result":[4,19,31,42,48,55,22],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-06-04","id":"00433","result":[6,12,16,34,39,54,19],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-06-06","id":"00434","result":[8,12,24,32,35,51,21],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-06-09","id":"00435","result":[1,3,8,22,42,48,44],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-06-11","id":"00436","result":[3,21,25,32,35,52,34],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-06-13","id":"00437","result":[7,9,11,30,43,53,10],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-06-16","id":"00438","result":[2,15,16,23,33,54,45],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-06-18","id":"00439","result":[5,18,27,45,50,54,9],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-06-20","id":"00440","result":[5,9,33,43,44,50,46],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-06-23","id":"00441","result":[2,18,28,46,52,54,19],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-06-25","id":"00442","result":[9,10,12,19,27,40,55],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-06-27","id":"00443","result":[2,6,38,47,50,53,14],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-06-30","id":"00444","result":[5,11,18,19,20,21,52],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-07-02","id":"00445","result":[4,10,20,38,48,53,5],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-07-04","id":"00446","result":[3,9,10,18,29,45,36],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-07-07","id":"00447","result":[7,24,32,35,48,50,1],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-07-09","id":"00448","result":[3,10,11,17,26,54,21],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-07-11","id":"00449","result":[3,4,6,14,20,38,35],"process_time":"2022-05-07 07:56:43.223268"}
{"date":"2020-07-14","id":"00450","result":[5,22,32,34,43,51,12],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-07-16","id":"00451","result":[2,5,11,20,24,32,6],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-07-18","id":"00452","result":[3,13,22,28,30,53,16],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-07-21","id":"00453","result":[6,14,31,37,38,44,4],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-07-23","id":"00454","result":[4,12,31,47,49,52,2],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-07-25","id":"00455","result":[2,19,21,34,54,55,24],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-07-28","id":"00456","result":[3,11,20,34,44,54,16],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-07-30","id":"00457","result":[6,7,16,26,29,54,4],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-08-01","id":"00458","result":[13,18,29,30,40,47,4],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-08-04","id":"00459","result":[10,15,20,21,32,51,8],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-08-06","id":"00460","result":[2,5,21,24,26,27,11],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-08-08","id":"00461","result":[3,12,24,26,36,43,8],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-08-11","id":"00462","result":[2,12,33,39,52,53,44],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-08-13","id":"00463","result":[3,25,28,44,49,54,19],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-08-15","id":"00464","result":[1,11,29,30,41,51,4],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-08-18","id":"00465","result":[22,41,44,46,51,52,2],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-08-20","id":"00466","result":[14,18,28,32,33,36,41],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-08-22","id":"00467","result":[1,20,24,26,35,51,12],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-08-25","id":"00468","result":[21,35,36,38,44,47,14],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-08-29","id":"00469","result":[1,4,14,28,35,53,2],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-09-01","id":"00470","result":[11,22,24,47,49,53,3],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-09-03","id":"00471","result":[7,9,18,22,35,54,50],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-09-05","id":"00472","result":[9,12,19,22,31,46,20],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-09-08","id":"00473","result":[22,47,48,52,53,55,14],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-09-10","id":"00474","result":[18,25,27,37,45,50,52],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-09-12","id":"00475","result":[20,21,24,30,31,44,40],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-09-15","id":"00476","result":[13,14,15,17,26,53,21],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-09-17","id":"00477","result":[1,5,28,43,44,53,49],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-09-19","id":"00478","result":[4,7,8,29,31,41,38],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-09-22","id":"00479","result":[5,8,15,18,36,45,6],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-09-24","id":"00480","result":[12,28,41,42,52,53,50],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-09-26","id":"00481","result":[7,10,13,15,40,48,1],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-09-29","id":"00482","result":[1,6,7,13,30,55,34],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-10-01","id":"00483","result":[3,6,7,19,38,54,50],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-10-03","id":"00484","result":[12,14,22,23,39,44,28],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-10-06","id":"00485","result":[11,14,29,32,33,40,35],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-10-08","id":"00486","result":[10,18,20,21,26,51,52],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-10-10","id":"00487","result":[5,10,47,50,53,54,22],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-10-13","id":"00488","result":[12,19,28,29,52,53,20],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-10-15","id":"00489","result":[8,38,41,47,50,52,45],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-10-17","id":"00490","result":[3,14,25,37,49,54,53],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-10-20","id":"00491","result":[8,33,38,47,49,54,31],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-10-22","id":"00492","result":[2,3,12,21,24,38,14],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-10-24","id":"00493","result":[12,21,22,27,41,50,34],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-10-27","id":"00494","result":[3,31,33,36,38,39,8],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-10-29","id":"00495","result":[9,11,14,16,21,23,54],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-10-31","id":"00496","result":[8,18,19,20,43,54,50],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-11-03","id":"00497","result":[2,22,27,46,48,52,23],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-11-05","id":"00498","result":[1,2,6,18,34,51,52],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-11-07","id":"00499","result":[12,28,30,33,45,52,15],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-11-10","id":"00500","result":[2,5,19,39,48,53,6],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-11-12","id":"00501","result":[4,20,22,25,43,47,12],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-11-14","id":"00502","result":[5,11,15,34,44,48,35],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-11-17","id":"00503","result":[6,17,27,34,36,51,48],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-11-19","id":"00504","result":[12,15,23,28,45,48,43],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-11-21","id":"00505","result":[8,14,19,20,49,51,28],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-11-24","id":"00506","result":[4,7,19,20,22,53,23],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-11-26","id":"00507","result":[18,19,29,31,36,52,50],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-11-28","id":"00508","result":[1,20,36,44,45,49,52],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-12-01","id":"00509","result":[6,10,12,24,34,43,15],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-12-03","id":"00510","result":[5,19,32,41,42,45,17],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-12-05","id":"00511","result":[10,28,29,30,37,38,36],"process_time":"2022-05-07 07:56:43.227268"}
{"date":"2020-12-08","id":"00512","result":[2,17,32,33,38,45,37],"process_time":"2022-05-07 07:56:43.231268"}
{"date":"2020-12-10","id":"00513","result":[3,31,34,36,44,54,45],"process_time":"2022-05-07 07:56:43.231268"}
{"date":"2020-12-12","id":"00514","result":[3,14,32,36,41,46,54],"process_time":"2022-05-07 07:56:43.231268"}
{"date":"2020-12-15","id":"00515","result":[10,11,13,35,38,49,14],"process_time":"2022-05-07 07:56:43.231268"}
{"date":"2020-12-17","id":"00516","result":[15,25,27,35,40,48,45],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2020-12-19","id":"00517","result":[14,20,32,34,37,49,31],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2020-12-22","id":"00518","result":[10,11,16,29,35,38,3],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2020-12-24","id":"00519","result":[11,19,34,41,44,48,43],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2020-12-26","id":"00520","result":[1,24,33,41,43,51,48],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2020-12-29","id":"00521","result":[4,8,11,15,17,41,23],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2020-12-31","id":"00522","result":[2,15,25,27,37,51,53],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-01-02","id":"00523","result":[7,19,23,26,35,45,11],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-01-05","id":"00524","result":[5,7,9,22,42,54,47],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-01-07","id":"00525","result":[7,11,22,38,48,51,53],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-01-09","id":"00526","result":[10,19,24,29,46,48,5],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-01-12","id":"00527","result":[19,23,29,34,44,53,35],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-01-14","id":"00528","result":[1,4,42,44,46,50,9],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-01-16","id":"00529","result":[13,15,28,29,32,44,49],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-01-19","id":"00530","result":[5,22,25,43,48,53,18],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-01-21","id":"00531","result":[9,20,22,31,47,52,18],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-01-23","id":"00532","result":[12,31,39,41,45,55,34],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-01-26","id":"00533","result":[7,16,32,42,44,47,35],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-01-28","id":"00534","result":[3,4,16,34,40,55,2],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-01-30","id":"00535","result":[2,7,17,18,21,29,19],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-02-02","id":"00536","result":[4,13,31,36,40,54,30],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-02-04","id":"00537","result":[28,43,44,50,51,53,13],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-02-06","id":"00538","result":[6,22,32,33,35,53,12],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-02-09","id":"00539","result":[15,20,21,29,31,41,34],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-02-13","id":"00540","result":[3,11,14,31,34,42,24],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-02-16","id":"00541","result":[4,10,11,21,23,44,50],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-02-18","id":"00542","result":[2,5,10,22,26,47,53],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-02-20","id":"00543","result":[1,2,4,32,34,39,20],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-02-23","id":"00544","result":[16,19,21,23,30,48,6],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-02-25","id":"00545","result":[9,19,32,40,45,51,1],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-02-27","id":"00546","result":[6,11,24,30,50,52,22],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-03-02","id":"00547","result":[23,29,45,46,49,51,1],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-03-04","id":"00548","result":[2,9,21,23,33,41,45],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-03-06","id":"00549","result":[18,24,34,39,46,55,4],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-03-09","id":"00550","result":[15,18,29,35,47,54,20],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-03-11","id":"00551","result":[4,5,12,25,43,44,27],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-03-13","id":"00552","result":[7,19,20,23,36,55,9],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-03-16","id":"00553","result":[3,31,45,46,49,54,40],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-03-18","id":"00554","result":[17,24,38,41,46,54,51],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-03-20","id":"00555","result":[16,18,20,25,35,36,17],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-03-23","id":"00556","result":[9,13,17,33,34,53,31],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-03-25","id":"00557","result":[19,20,24,29,36,39,22],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-03-27","id":"00558","result":[5,11,17,20,26,37,12],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-03-30","id":"00559","result":[2,11,17,19,47,51,22],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-04-01","id":"00560","result":[13,18,24,34,38,54,8],"process_time":"2022-06-23 08:27:33.960332"}
{"date":"2021-04-03","id":"00561","result":[2,4,34,38,41,55,19],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-04-06","id":"00562","result":[27,33,34,38,46,48,5],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-04-08","id":"00563","result":[8,11,16,22,28,30,45],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-04-10","id":"00564","result":[12,13,16,17,27,47,49],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-04-13","id":"00565","result":[25,33,39,45,49,55,36],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-04-15","id":"00566","result":[5,8,27,42,47,51,36],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-04-17","id":"00567","result":[4,15,16,29,42,46,36],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-04-20","id":"00568","result":[18,25,38,43,47,51,11],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-04-22","id":"00569","result":[5,11,17,25,39,48,22],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-04-24","id":"00570","result":[1,4,5,21,25,44,45],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-04-27","id":"00571","result":[3,9,22,26,32,37,41],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-04-29","id":"00572","result":[3,9,23,33,42,44,50],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-05-01","id":"00573","result":[3,7,14,22,41,42,10],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-05-04","id":"00574","result":[7,24,45,48,49,53,14],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-05-06","id":"00575","result":[15,19,24,31,44,53,32],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-05-08","id":"00576","result":[14,23,26,37,42,51,40],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-05-11","id":"00577","result":[1,14,41,44,46,53,48],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-05-13","id":"00578","result":[13,24,25,35,39,41,29],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-05-15","id":"00579","result":[1,5,6,13,23,27,46],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-05-18","id":"00580","result":[6,7,22,32,38,47,27],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-05-20","id":"00581","result":[7,10,12,19,42,54,24],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-05-22","id":"00582","result":[15,27,37,45,46,52,31],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-05-25","id":"00583","result":[6,10,33,35,36,43,8],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-05-27","id":"00584","result":[3,7,18,22,40,46,14],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-05-29","id":"00585","result":[2,11,31,37,43,55,14],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-06-01","id":"00586","result":[6,12,14,27,43,45,38],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-06-03","id":"00587","result":[4,8,21,24,26,47,43],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-06-05","id":"00588","result":[14,22,25,39,41,52,17],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-06-08","id":"00589","result":[16,28,33,41,42,54,12],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-06-10","id":"00590","result":[11,22,24,27,43,54,45],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-06-12","id":"00591","result":[4,16,17,20,27,44,30],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-06-15","id":"00592","result":[11,18,21,22,30,55,35],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-06-17","id":"00593","result":[18,23,38,41,44,55,40],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-06-19","id":"00594","result":[1,3,7,13,28,45,33],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-06-22","id":"00595","result":[3,9,32,33,41,43,40],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-06-24","id":"00596","result":[3,16,17,24,41,44,37],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-06-26","id":"00597","result":[6,16,17,20,49,52,27],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-06-29","id":"00598","result":[5,14,24,36,44,55,48],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-07-01","id":"00599","result":[4,15,28,30,49,52,55],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-07-03","id":"00600","result":[4,25,30,38,50,55,53],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-07-06","id":"00601","result":[17,20,22,24,30,54,51],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-07-08","id":"00602","result":[3,32,34,42,44,54,35],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-07-10","id":"00603","result":[7,8,17,37,47,48,27],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-07-13","id":"00604","result":[5,11,18,27,34,43,42],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-07-15","id":"00605","result":[3,4,12,16,30,50,20],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-07-17","id":"00606","result":[2,7,11,21,31,42,45],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-07-20","id":"00607","result":[2,8,11,13,17,26,53],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-07-22","id":"00608","result":[2,20,24,39,46,53,55],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-08-19","id":"00609","result":[5,9,12,20,43,51,13],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-08-21","id":"00610","result":[22,24,27,37,38,48,14],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-08-24","id":"00611","result":[2,4,7,18,30,35,20],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-08-26","id":"00612","result":[11,13,20,51,53,55,4],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-08-28","id":"00613","result":[10,16,26,27,34,48,51],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-08-31","id":"00614","result":[7,20,37,47,51,53,5],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-09-02","id":"00615","result":[1,8,12,26,28,45,43],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-09-04","id":"00616","result":[11,12,32,42,43,51,31],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-09-07","id":"00617","result":[19,30,35,43,47,55,12],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-09-09","id":"00618","result":[6,8,10,23,39,44,43],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-09-11","id":"00619","result":[8,17,20,36,39,44,30],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-09-14","id":"00620","result":[17,22,30,40,43,44,41],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-09-16","id":"00621","result":[10,16,40,43,45,46,22],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-09-18","id":"00622","result":[3,14,15,21,47,52,54],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-09-21","id":"00623","result":[15,24,25,40,42,50,49],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-09-23","id":"00624","result":[6,7,21,25,27,49,26],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-09-25","id":"00625","result":[7,20,27,43,48,51,37],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-09-28","id":"00626","result":[7,22,25,40,49,50,37],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-09-30","id":"00627","result":[18,23,26,32,46,49,54],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-10-02","id":"00628","result":[5,6,22,26,49,51,32],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-10-05","id":"00629","result":[11,16,17,19,38,43,24],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-10-07","id":"00630","result":[6,15,21,24,45,55,46],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-10-09","id":"00631","result":[1,22,25,38,39,54,19],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-10-12","id":"00632","result":[14,17,31,33,42,50,40],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-10-14","id":"00633","result":[9,21,24,30,41,44,40],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-10-16","id":"00634","result":[9,17,22,28,50,55,7],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-10-19","id":"00635","result":[3,9,25,29,46,50,18],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-10-21","id":"00636","result":[3,19,32,36,41,51,35],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-10-23","id":"00637","result":[5,11,19,26,28,33,9],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-10-26","id":"00638","result":[21,24,29,34,39,53,20],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-10-28","id":"00639","result":[2,4,6,13,31,35,16],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-10-30","id":"00640","result":[31,36,40,44,50,53,11],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-11-02","id":"00641","result":[37,38,42,46,47,55,23],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-11-04","id":"00642","result":[5,10,15,31,32,50,28],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-11-06","id":"00643","result":[23,31,41,48,49,51,3],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-11-09","id":"00644","result":[12,25,26,47,51,53,16],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-11-11","id":"00645","result":[3,35,37,41,45,49,31],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-11-13","id":"00646","result":[18,22,29,33,46,48,37],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-11-16","id":"00647","result":[8,19,27,34,46,51,2],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-11-18","id":"00648","result":[18,30,32,37,39,40,10],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-11-20","id":"00649","result":[6,10,29,30,31,51,35],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-11-23","id":"00650","result":[5,7,9,28,38,55,50],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-11-25","id":"00651","result":[16,18,24,29,33,41,43],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-11-27","id":"00652","result":[2,5,7,21,31,37,44],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-11-30","id":"00653","result":[12,21,23,28,33,46,38],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-12-02","id":"00654","result":[6,23,28,31,44,48,14],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-12-04","id":"00655","result":[7,9,31,32,36,49,37],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-12-07","id":"00656","result":[4,6,22,32,34,53,41],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-12-09","id":"00657","result":[3,14,33,40,41,50,17],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-12-11","id":"00658","result":[8,13,17,22,42,51,45],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-12-14","id":"00659","result":[10,16,19,24,39,50,29],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-12-16","id":"00660","result":[19,24,30,41,43,49,55],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-12-18","id":"00661","result":[4,6,19,26,38,41,16],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-12-21","id":"00662","result":[23,25,28,49,52,54,44],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-12-23","id":"00663","result":[8,22,29,43,45,54,23],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-12-25","id":"00664","result":[6,8,23,25,33,35,27],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-12-28","id":"00665","result":[3,8,9,40,44,48,2],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2021-12-30","id":"00666","result":[9,25,27,32,37,46,23],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-01-01","id":"00667","result":[4,25,28,32,33,55,3],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-01-04","id":"00668","result":[11,17,22,28,39,49,43],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-01-06","id":"00669","result":[4,8,14,21,30,49,38],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-01-08","id":"00670","result":[6,17,37,41,48,50,13],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-01-11","id":"00671","result":[12,25,26,28,33,46,22],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-01-13","id":"00672","result":[7,12,17,26,37,46,28],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-01-15","id":"00673","result":[20,26,41,46,47,48,18],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-01-18","id":"00674","result":[6,15,16,33,41,43,51],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-01-20","id":"00675","result":[8,21,32,34,41,46,48],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-01-22","id":"00676","result":[2,6,16,29,37,42,22],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-01-25","id":"00677","result":[2,16,17,20,31,51,50],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-01-27","id":"00678","result":[1,26,31,36,40,46,28],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-01-29","id":"00679","result":[6,10,17,23,25,38,21],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-02-03","id":"00680","result":[13,18,22,35,42,43,3],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-02-05","id":"00681","result":[1,17,23,29,44,45,37],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-02-08","id":"00682","result":[12,15,21,28,32,40,43],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-02-10","id":"00683","result":[3,15,26,35,43,52,7],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-02-12","id":"00684","result":[4,8,12,42,44,51,41],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-02-15","id":"00685","result":[5,7,14,24,29,36,46],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-02-17","id":"00686","result":[5,24,40,42,46,54,3],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-02-19","id":"00687","result":[1,11,14,33,46,48,40],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-02-22","id":"00688","result":[9,16,19,23,25,39,4],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-02-24","id":"00689","result":[2,15,25,30,31,32,13],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-02-26","id":"00690","result":[5,8,30,36,49,51,18],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-03-01","id":"00691","result":[15,19,25,42,51,53,2],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-03-03","id":"00692","result":[4,10,16,25,26,43,52],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-03-05","id":"00693","result":[5,12,15,25,43,48,1],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-03-08","id":"00694","result":[3,23,25,39,47,48,55],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-03-10","id":"00695","result":[1,3,8,16,19,36,41],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-03-12","id":"00696","result":[12,16,18,26,30,45,36],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-03-15","id":"00697","result":[6,14,24,28,33,52,50],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-03-17","id":"00698","result":[1,6,12,21,37,49,53],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-03-19","id":"00699","result":[8,20,24,37,51,55,27],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-03-22","id":"00700","result":[1,14,18,28,47,49,22],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-03-24","id":"00701","result":[5,9,16,35,45,46,44],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-03-26","id":"00702","result":[1,6,16,30,34,55,29],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-03-29","id":"00703","result":[5,11,32,35,40,52,31],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-03-31","id":"00704","result":[5,24,34,39,42,49,16],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-04-02","id":"00705","result":[32,38,42,44,47,55,46],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-04-05","id":"00706","result":[5,18,26,36,43,44,45],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-04-07","id":"00707","result":[6,14,15,25,29,32,41],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-04-09","id":"00708","result":[2,3,19,28,42,45,12],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-04-12","id":"00709","result":[11,18,20,22,25,40,5],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-04-14","id":"00710","result":[1,5,9,34,37,45,52],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-04-16","id":"00711","result":[4,8,39,41,53,55,52],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-04-19","id":"00712","result":[2,7,13,28,29,34,39],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-04-21","id":"00713","result":[21,24,27,34,38,42,46],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-04-23","id":"00714","result":[3,27,36,41,49,55,18],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-04-26","id":"00715","result":[14,22,24,25,43,49,17],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-04-28","id":"00716","result":[8,24,25,32,37,44,3],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-04-30","id":"00717","result":[11,23,51,52,53,54,27],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-05-03","id":"00718","result":[1,22,38,48,49,53,42],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-05-05","id":"00719","result":[27,29,33,39,47,53,55],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-05-07","id":"00720","result":[15,32,33,36,43,46,31],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-05-10","id":"00721","result":[12,18,41,43,47,51,10],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-05-12","id":"00722","result":[9,18,24,43,44,50,15],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-05-14","id":"00723","result":[2,28,30,43,44,55,22],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-05-17","id":"00724","result":[11,17,25,29,45,48,53],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-05-19","id":"00725","result":[3,6,31,40,47,54,8],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-05-21","id":"00726","result":[19,32,38,40,45,48,2],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-05-24","id":"00727","result":[18,31,32,46,50,52,28],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-05-26","id":"00728","result":[4,30,32,39,41,53,42],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-05-28","id":"00729","result":[33,36,38,42,43,46,3],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-05-31","id":"00730","result":[4,10,15,16,47,51,23],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-06-02","id":"00731","result":[7,11,28,30,33,50,49],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-06-04","id":"00732","result":[3,17,27,30,34,49,25],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-06-07","id":"00733","result":[16,17,21,28,39,50,19],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-06-09","id":"00734","result":[30,31,35,43,48,50,22],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-06-11","id":"00735","result":[10,18,23,25,45,47,38],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-06-14","id":"00736","result":[2,15,26,32,35,36,16],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-06-16","id":"00737","result":[9,13,21,40,51,54,4],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-06-18","id":"00738","result":[6,27,43,44,45,47,33],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-06-21","id":"00739","result":[9,13,19,21,34,51,35],"process_time":"2022-06-23 08:27:33.964332"}
{"date":"2022-06-23","id":"00740","result":[10,22,23,34,46,54,27],"process_time":"2022-06-24 17:30:35.017815"}
{"date":"2022-06-25","id":"00741","result":[14,17,31,35,37,40,28],"process_time":"2022-09-27 13:03:46.835300"}
{"date":"2022-06-28","id":"00742","result":[5,22,30,32,38,55,33],"process_time":"2022-09-27 13:03:46.835248"}
{"date":"2022-06-30","id":"00743","result":[5,11,15,19,29,31,35],"process_time":"2022-09-27 13:03:46.835187"}
{"date":"2022-07-02","id":"00744","result":[6,26,39,40,46,47,2],"process_time":"2022-09-27 13:03:46.835122"}
{"date":"2022-07-05","id":"00745","result":[5,7,12,26,29,44,38],"process_time":"2022-09-27 13:03:46.835069"}
{"date":"2022-07-07","id":"00746","result":[18,24,32,43,48,55,15],"process_time":"2022-09-27 13:03:46.835017"}
{"date":"2022-07-09","id":"00747","result":[5,21,24,47,52,55,20],"process_time":"2022-09-27 13:03:46.834961"}
{"date":"2022-07-12","id":"00748","result":[12,13,24,25,39,41,9],"process_time":"2022-09-27 13:03:46.834883"}
{"date":"2022-07-14","id":"00749","result":[11,25,29,37,39,52,45],"process_time":"2022-09-27 13:03:46.827361"}
{"date":"2022-07-16","id":"00750","result":[6,13,18,27,34,46,33],"process_time":"2022-09-27 13:03:46.827308"}
{"date":"2022-07-19","id":"00751","result":[8,9,33,34,35,52,36],"process_time":"2022-09-27 13:03:46.827250"}
{"date":"2022-07-21","id":"00752","result":[2,20,33,45,51,55,1],"process_time":"2022-09-27 13:03:46.827195"}
{"date":"2022-07-23","id":"00753","result":[27,28,29,39,40,54,13],"process_time":"2022-09-27 13:03:46.827131"}
{"date":"2022-07-26","id":"00754","result":[5,8,9,13,14,47,53],"process_time":"2022-09-27 13:03:46.827062"}
{"date":"2022-07-28","id":"00755","result":[5,6,17,28,29,39,34],"process_time":"2022-09-27 13:03:46.826980"}
{"date":"2022-07-30","id":"00756","result":[1,4,24,35,44,47,17],"process_time":"2022-09-27 13:03:46.826912"}
{"date":"2022-08-02","id":"00757","result":[2,5,28,40,47,48,31],"process_time":"2022-09-27 13:03:55.117705"}
{"date":"2022-08-04","id":"00758","result":[8,9,20,41,48,54,2],"process_time":"2022-09-27 13:03:55.117656"}
{"date":"2022-08-06","id":"00759","result":[6,21,27,41,51,53,43],"process_time":"2022-09-27 13:03:55.117606"}
{"date":"2022-08-09","id":"00760","result":[9,10,36,41,51,55,52],"process_time":"2022-09-27 13:03:55.117556"}
{"date":"2022-08-11","id":"00761","result":[1,12,21,34,48,55,50],"process_time":"2022-09-27 13:03:55.117506"}
{"date":"2022-08-13","id":"00762","result":[19,28,29,30,33,36,14],"process_time":"2022-09-27 13:03:55.117457"}
{"date":"2022-08-16","id":"00763","result":[17,18,28,47,50,53,11],"process_time":"2022-09-27 13:03:55.117407"}
{"date":"2022-08-18","id":"00764","result":[23,27,31,37,38,42,26],"process_time":"2022-09-27 13:03:55.117349"}
{"date":"2022-08-20","id":"00765","result":[6,16,29,32,42,51,43],"process_time":"2022-09-27 13:03:55.121517"}
{"date":"2022-08-23","id":"00766","result":[13,21,31,41,44,45,27],"process_time":"2022-09-27 13:03:55.121467"}
{"date":"2022-08-25","id":"00767","result":[19,30,35,40,49,53,42],"process_time":"2022-09-27 13:03:55.121418"}
{"date":"2022-08-27","id":"00768","result":[1,5,7,10,25,48,36],"process_time":"2022-09-27 13:03:55.121368"}
{"date":"2022-08-30","id":"00769","result":[2,13,19,29,30,32,16],"process_time":"2022-09-27 13:03:55.121317"}
{"date":"2022-09-01","id":"00770","result":[4,14,18,39,50,53,31],"process_time":"2022-09-27 13:03:55.121266"}
{"date":"2022-09-03","id":"00771","result":[11,22,31,33,40,46,41],"process_time":"2022-09-27 13:03:55.121212"}
{"date":"2022-09-06","id":"00772","result":[1,5,27,43,52,54,15],"process_time":"2022-09-27 13:03:55.121144"}
{"date":"2022-09-08","id":"00773","result":[9,13,23,32,36,52,43],"process_time":"2022-09-27 13:03:09.980589"}
{"date":"2022-09-10","id":"00774","result":[2,8,15,19,35,38,14],"process_time":"2022-09-27 13:03:09.980496"}
{"date":"2022-09-13","id":"00775","result":[9,10,21,40,41,48,54],"process_time":"2022-09-27 13:03:09.980403"}
{"date":"2022-09-15","id":"00776","result":[3,8,19,30,41,52,9],"process_time":"2022-09-27 13:03:09.980307"}
{"date":"2022-09-17","id":"00777","result":[5,8,19,34,40,49,39],"process_time":"2022-09-27 13:03:09.980215"}
{"date":"2022-09-20","id":"00778","result":[8,27,32,43,53,54,45],"process_time":"2022-09-27 13:03:09.980119"}
{"date":"2022-09-22","id":"00779","result":[12,14,19,29,44,47,26],"process_time":"2022-09-27 13:03:09.980020"}
{"date":"2022-09-23","id":"00944","result":[1,12,21,28,30,44],"process_time":"2022-10-11 13:24:08.982356"}
{"date":"2022-09-24","id":"00780","result":[1,4,5,17,42,47,9],"process_time":"2022-09-27 13:03:09.979883"}
{"date":"2022-09-27","id":"00781","result":[11,13,23,27,37,43,34],"process_time":"2022-09-30 18:03:37.980960"}
{"date":"2022-09-29","id":"00782","result":[15,32,33,37,42,54,28],"process_time":"2022-10-11 13:29:13.075403"}
{"date":"2022-10-01","id":"00783","result":[14,15,16,22,23,29,20],"process_time":"2022-10-11 13:29:13.075352"}
{"date":"2022-10-04","id":"00784","result":[5,11,12,22,43,45,42],"process_time":"2022-10-11 13:29:13.075301"}
{"date":"2022-10-06","id":"00785","result":[6,8,19,20,47,53,7],"process_time":"2022-10-11 13:29:13.075247"}
{"date":"2022-10-08","id":"00786","result":[11,17,23,34,41,51,40],"process_time":"2022-10-11 13:29:13.075183"}
{"date":"2022-10-11","id":"00787","result":[11,26,34,40,46,52,1],"process_time":"2023-01-30 14:08:23.490919"}
{"date":"2022-10-13","id":"00788","result":[12,13,43,48,51,52,15],"process_time":"2023-01-30 14:08:23.490863"}
{"date":"2022-10-15","id":"00789","result":[8,15,16,39,45,51,23],"process_time":"2023-01-30 14:08:23.490774"}
{"date":"2022-10-18","id":"00790","result":[6,30,36,39,44,46,49],"process_time":"2023-01-30 14:08:23.490722"}
{"date":"2022-10-20","id":"00791","result":[15,21,27,34,37,53,29],"process_time":"2023-01-30 14:08:23.490672"}
{"date":"2022-10-22","id":"00792","result":[17,19,35,42,51,52,34],"process_time":"2023-01-30 14:08:23.490618"}
{"date":"2022-10-25","id":"00793","result":[8,18,20,22,42,46,1],"process_time":"2023-01-30 14:08:23.490551"}
{"date":"2022-10-27","id":"00794","result":[1,7,10,17,19,30,53],"process_time":"2023-01-30 14:08:23.413476"}
{"date":"2022-10-29","id":"00795","result":[1,3,10,13,15,20,32],"process_time":"2023-01-30 14:08:23.413425"}
{"date":"2022-11-01","id":"00796","result":[3,9,20,23,31,54,55],"process_time":"2023-01-30 14:08:23.413358"}
{"date":"2022-11-03","id":"00797","result":[8,13,24,28,29,33,49],"process_time":"2023-01-30 14:08:23.413310"}
{"date":"2022-11-05","id":"00798","result":[10,19,22,25,47,53,52],"process_time":"2023-01-30 14:08:23.413262"}
{"date":"2022-11-08","id":"00799","result":[12,27,33,44,48,50,18],"process_time":"2023-01-30 14:08:23.413212"}
{"date":"2022-11-10","id":"00800","result":[8,11,14,27,38,45,21],"process_time":"2023-01-30 14:08:23.413161"}
{"date":"2022-11-12","id":"00801","result":[8,18,23,30,35,42,43],"process_time":"2023-01-30 14:08:23.413103"}
{"date":"2022-11-15","id":"00802","result":[4,20,26,36,47,51,33],"process_time":"2023-01-30 14:08:23.339894"}
{"date":"2022-11-17","id":"00803","result":[1,19,25,27,38,42,54],"process_time":"2023-01-30 14:08:23.339847"}
{"date":"2022-11-19","id":"00804","result":[3,15,22,39,46,48,43],"process_time":"2023-01-30 14:08:23.339799"}
{"date":"2022-11-22","id":"00805","result":[3,9,21,22,26,35,15],"process_time":"2023-01-30 14:08:23.339749"}
{"date":"2022-11-24","id":"00806","result":[4,6,18,27,52,53,10],"process_time":"2023-01-30 14:08:23.339676"}
{"date":"2022-11-26","id":"00807","result":[8,23,24,48,49,52,1],"process_time":"2023-01-30 14:08:23.339628"}
{"date":"2022-11-29","id":"00808","result":[2,13,16,18,41,42,19],"process_time":"2023-01-30 14:08:23.339579"}
{"date":"2022-12-01","id":"00809","result":[11,14,29,31,52,54,7],"process_time":"2023-01-30 14:08:23.339518"}
{"date":"2022-12-03","id":"00810","result":[16,17,27,48,52,53,24],"process_time":"2023-01-30 14:08:23.279341"}
{"date":"2022-12-06","id":"00811","result":[1,11,25,44,45,46,35],"process_time":"2023-01-30 14:08:23.279265"}
{"date":"2022-12-08","id":"00812","result":[6,30,36,41,49,55,20],"process_time":"2023-01-30 14:08:23.279214"}
{"date":"2022-12-10","id":"00813","result":[2,12,13,18,33,44,31],"process_time":"2022-12-27 21:19:09.546918"}
{"date":"2022-12-13","id":"00814","result":[10,22,31,37,41,52,20],"process_time":"2022-12-27 21:19:09.546805"}
{"date":"2022-12-15","id":"00815","result":[2,25,38,50,51,55,21],"process_time":"2022-12-27 21:19:09.546700"}
{"date":"2022-12-17","id":"00816","result":[1,2,29,34,41,42,9],"process_time":"2022-12-27 21:19:09.546592"}
{"date":"2022-12-20","id":"00817","result":[2,6,9,20,31,35,42],"process_time":"2022-12-27 21:19:09.546484"}
{"date":"2022-12-22","id":"00818","result":[14,26,35,43,45,48,3],"process_time":"2022-12-27 21:19:09.546375"}
{"date":"2022-12-24","id":"00819","result":[5,19,22,23,30,44,52],"process_time":"2022-12-27 21:19:09.546251"}
{"date":"2022-12-27","id":"00820","result":[11,12,13,14,23,55,27],"process_time":"2022-12-27 21:19:09.546102"}
{"date":"2022-12-29","id":"00821","result":[6,8,33,37,38,51,48],"process_time":"2023-01-02 08:26:29.929667"}
{"date":"2022-12-31","id":"00822","result":[10,15,36,42,45,52,20],"process_time":"2023-01-02 08:26:29.929479"}
{"date":"2023-01-03","id":"00823","result":[9,13,24,43,47,48,18],"process_time":"2023-01-30 14:08:23.216990"}
{"date":"2023-01-05","id":"00824","result":[5,12,34,37,47,49,28],"process_time":"2023-01-30 14:08:23.216940"}
{"date":"2023-01-07","id":"00825","result":[3,4,9,15,33,54,16],"process_time":"2023-01-28 11:18:03.561004"}
{"date":"2023-01-10","id":"00826","result":[5,12,14,19,46,51,36],"process_time":"2023-01-28 11:18:03.560898"}
{"date":"2023-01-12","id":"00827","result":[5,14,37,45,47,55,25],"process_time":"2023-01-28 11:18:03.560797"}
{"date":"2023-01-14","id":"00828","result":[5,17,24,30,43,53,26],"process_time":"2023-01-28 11:18:03.560693"}
{"date":"2023-01-17","id":"00829","result":[1,9,20,36,44,50,40],"process_time":"2023-01-28 11:18:03.560589"}
{"date":"2023-01-19","id":"00830","result":[3,21,32,33,38,52,30],"process_time":"2023-01-28 11:18:03.560475"}
{"date":"2023-01-24","id":"00831","result":[3,5,10,12,29,30,9],"process_time":"2023-01-28 11:18:03.560317"}
{"date":"2023-01-26","id":"00832","result":[8,15,18,20,33,41,14],"process_time":"2023-01-28 11:18:03.560114"}
{"date":"2023-01-28","id":"00833","result":[9,22,23,29,38,47,33],"process_time":"2023-01-30 14:08:23.147970"}
{"date":"2023-01-31","id":"00834","result":[10,11,31,32,38,52,5],"process_time":"2023-02-03 10:04:21.631985"}
{"date":"2023-02-02","id":"00835","result":[3,10,23,29,34,53,11],"process_time":"2023-02-03 10:04:21.631840"}
{"date":"2023-02-04","id":"00836","result":[2,6,8,27,41,46,20],"process_time":"2023-02-05 02:24:18.326584"}
{"date":"2023-02-07","id":"00837","result":[6,27,29,32,39,52,9],"process_time":"2023-02-08 02:23:18.568817"}
{"date":"2023-02-09","id":"00838","result":[1,10,29,30,49,50,9],"process_time":"2023-02-10 02:26:56.889197"}
{"date":"2023-02-11","id":"00839","result":[4,13,45,48,52,54,5],"process_time":"2023-02-12 02:23:13.466584"}
{"date":"2023-02-14","id":"00840","result":[1,9,33,37,43,45,23],"process_time":"2023-02-15 02:24:29.438739"}
{"date":"2023-02-16","id":"00841","result":[1,5,7,8,20,22,33],"process_time":"2023-02-17 02:26:49.405667"}
{"date":"2023-02-18","id":"00842","result":[11,23,26,29,43,50,5],"process_time":"2023-02-19 02:24:41.591808"}
{"date":"2023-02-21","id":"00843","result":[4,12,15,21,30,44,5],"process_time":"2023-02-22 02:23:14.497044"}
{"date":"2023-02-23","id":"00844","result":[12,16,29,31,39,48,40],"process_time":"2023-02-24 02:21:18.026710"}
{"date":"2023-02-25","id":"00845","result":[1,2,14,21,38,51,50],"process_time":"2023-02-26 02:35:23.340895"}
{"date":"2023-02-28","id":"00846","result":[2,13,14,30,43,55,22],"process_time":"2023-03-07 03:17:53.145209"}
{"date":"2023-03-02","id":"00847","result":[1,3,23,24,43,48,31],"process_time":"2023-03-07 03:17:53.145081"}
{"date":"2023-03-04","id":"00848","result":[9,13,23,36,38,54,21],"process_time":"2023-03-07 03:17:53.144932"}
{"date":"2023-03-07","id":"00849","result":[8,22,25,27,39,50,28],"process_time":"2023-03-08 02:27:54.972635"}
{"date":"2023-03-09","id":"00850","result":[12,22,28,34,53,54,40],"process_time":"2023-03-10 02:35:21.669675"}
{"date":"2023-03-11","id":"00851","result":[13,23,25,30,35,44,8],"process_time":"2023-03-12 02:22:54.032223"}
{"date":"2023-03-14","id":"00852","result":[14,15,18,20,27,35,31],"process_time":"2023-03-15 02:13:54.656187"}
{"date":"2023-03-16","id":"00853","result":[6,23,34,48,50,55,2],"process_time":"2023-03-17 02:12:05.129586"}
{"date":"2023-03-18","id":"00854","result":[18,24,32,33,51,53,36],"process_time":"2023-03-19 02:22:48.802241"}
{"date":"2023-03-21","id":"00855","result":[7,17,31,43,45,49,52],"process_time":"2023-03-22 02:07:55.842695"}
{"date":"2023-03-23","id":"00856","result":[4,7,22,33,40,49,39],"process_time":"2023-03-24 02:08:59.413222"}
{"date":"2023-03-25","id":"00857","result":[17,18,28,40,49,54,16],"process_time":"2023-03-26 02:13:43.590802"}
{"date":"2023-03-28","id":"00858","result":[6,21,24,41,50,53,13],"process_time":"2023-03-29 02:18:17.329211"}
{"date":"2023-03-30","id":"00859","result":[6,11,14,21,30,32,22],"process_time":"2023-03-31 02:10:43.103143"}
{"date":"2023-04-01","id":"00860","result":[12,34,39,44,49,55,14],"process_time":"2023-04-02 02:06:23.942821"}
{"date":"2023-04-04","id":"00861","result":[13,28,41,42,47,51,9],"process_time":"2023-04-05 01:52:46.673604"}
{"date":"2023-04-06","id":"00862","result":[7,10,12,33,52,54,16],"process_time":"2023-04-07 02:01:46.338166"}
{"date":"2023-04-08","id":"00863","result":[17,33,36,46,50,52,40],"process_time":"2023-04-09 02:05:49.697922"}
{"date":"2023-04-11","id":"00864","result":[10,14,16,18,37,49,54],"process_time":"2023-04-12 02:04:48.655159"}
{"date":"2023-04-13","id":"00865","result":[22,26,28,37,39,48,15],"process_time":"2023-04-14 02:03:02.651905"}
{"date":"2023-04-15","id":"00866","result":[1,34,35,36,42,43,5],"process_time":"2023-04-16 02:11:04.904610"}
{"date":"2023-04-18","id":"00867","result":[17,18,30,40,51,55,50],"process_time":"2023-04-19 02:07:47.759199"}
{"date":"2023-04-20","id":"00868","result":[7,11,32,35,42,51,46],"process_time":"2023-04-21 02:05:19.826877"}
{"date":"2023-04-22","id":"00869","result":[9,18,23,24,48,52,10],"process_time":"2023-04-23 02:14:41.482449"}
{"date":"2023-04-25","id":"00870","result":[6,10,19,23,25,28,45],"process_time":"2023-04-26 02:06:30.917407"}
{"date":"2023-04-27","id":"00871","result":[8,28,38,39,41,45,54],"process_time":"2023-04-28 02:06:48.062717"}
{"date":"2023-04-29","id":"00872","result":[2,9,12,24,41,53,35],"process_time":"2023-04-30 02:06:44.713173"}
{"date":"2023-05-02","id":"00873","result":[4,11,18,25,33,45,21],"process_time":"2023-05-03 02:03:59.114603"}
{"date":"2023-05-04","id":"00874","result":[13,30,32,35,45,52,29],"process_time":"2023-05-05 02:01:02.372185"}
{"date":"2023-05-06","id":"00875","result":[1,11,22,28,34,42,10],"process_time":"2023-05-07 02:11:55.885988"}
{"date":"2023-05-09","id":"00876","result":[7,9,13,22,44,47,39],"process_time":"2023-05-10 02:03:30.249784"}
{"date":"2023-05-11","id":"00877","result":[1,3,19,33,34,51,17],"process_time":"2023-05-12 02:02:08.729624"}
{"date":"2023-05-13","id":"00878","result":[22,24,35,43,45,54,50],"process_time":"2023-05-14 02:08:30.652180"}
{"date":"2023-05-16","id":"00879","result":[19,24,30,34,40,44,51],"process_time":"2023-05-17 02:07:37.068407"}
{"date":"2023-05-18","id":"00880","result":[13,14,21,23,30,41,49],"process_time":"2023-05-19 02:06:02.523178"}
{"date":"2023-05-20","id":"00881","result":[1,14,21,36,48,53,44],"process_time":"2023-05-21 02:12:05.531059"}
{"date":"2023-05-23","id":"00882","result":[26,27,35,36,47,54,40],"process_time":"2023-05-24 02:10:43.745307"}
{"date":"2023-05-25","id":"00883","result":[15,16,19,31,33,46,7],"process_time":"2023-05-26 02:06:02.221748"}
{"date":"2023-05-27","id":"00884","result":[4,6,8,18,39,43,28],"process_time":"2023-05-28 02:17:52.335978"}
{"date":"2023-05-30","id":"00885","result":[1,14,24,28,40,46,34],"process_time":"2023-05-31 02:26:26.493128"}
{"date":"2023-06-01","id":"00886","result":[3,18,40,41,46,47,36],"process_time":"2023-06-05 02:25:40.717956"}
{"date":"2023-06-03","id":"00887","result":[23,28,29,36,38,41,7],"process_time":"2023-06-05 02:25:40.717820"}
{"date":"2023-06-06","id":"00888","result":[1,14,23,27,44,50,43],"process_time":"2023-06-07 02:27:38.353870"}
{"date":"2023-06-08","id":"00889","result":[3,36,38,43,51,53,2],"process_time":"2023-06-09 02:32:01.740126"}
{"date":"2023-06-10","id":"00890","result":[10,17,27,32,35,41,54],"process_time":"2023-06-15 02:14:07.037453"}
{"date":"2023-06-13","id":"00891","result":[4,14,18,27,47,50,33],"process_time":"2023-06-15 02:14:07.037308"}
{"date":"2023-06-15","id":"00892","result":[10,11,25,39,46,55,40],"process_time":"2023-06-17 02:10:36.632330"}
{"date":"2023-06-17","id":"00893","result":[7,13,23,34,38,40,55],"process_time":"2023-06-19 02:16:31.340007"}
{"date":"2023-06-20","id":"00894","result":[7,23,26,31,35,53,32],"process_time":"2023-06-29 02:26:31.545259"}
{"date":"2023-06-22","id":"00895","result":[2,11,14,35,43,51,55],"process_time":"2023-06-29 02:26:31.545138"}
{"date":"2023-06-24","id":"00896","result":[8,9,16,20,50,53,3],"process_time":"2023-06-29 02:26:31.545006"}
{"date":"2023-06-27","id":"00897","result":[2,12,15,16,27,28,47],"process_time":"2023-06-29 02:26:31.544834"}
{"date":"2023-06-29","id":"00898","result":[1,11,12,28,46,54,40],"process_time":"2023-06-30 02:23:57.917766"}
{"date":"2023-07-01","id":"00899","result":[13,33,36,38,45,50,25],"process_time":"2023-07-03 02:35:00.939956"}
{"date":"2023-07-04","id":"00900","result":[4,13,14,23,33,50,41],"process_time":"2023-07-05 02:34:25.831069"}
{"date":"2023-07-06","id":"00901","result":[7,12,29,39,46,55,1],"process_time":"2023-10-23 12:09:40.196641"}
{"date":"2023-07-08","id":"00902","result":[8,11,23,43,44,48,41],"process_time":"2023-10-23 12:09:40.196575"}
{"date":"2023-07-11","id":"00903","result":[24,40,44,46,47,49,5],"process_time":"2023-10-23 12:09:40.196509"}
{"date":"2023-07-13","id":"00904","result":[3,4,30,34,36,49,8],"process_time":"2023-07-30 02:01:59.203824"}
{"date":"2023-07-15","id":"00905","result":[2,16,31,37,38,48,36],"process_time":"2023-07-30 02:01:59.203733"}
{"date":"2023-07-18","id":"00906","result":[10,11,19,28,42,47,16],"process_time":"2023-07-30 02:01:59.203642"}
{"date":"2023-07-20","id":"00907","result":[5,34,36,38,47,50,26],"process_time":"2023-07-30 02:01:59.203551"}
{"date":"2023-07-22","id":"00908","result":[9,15,23,25,27,34,41],"process_time":"2023-07-30 02:01:59.203460"}
{"date":"2023-07-25","id":"00909","result":[12,23,42,44,51,52,3],"process_time":"2023-07-30 02:01:59.203368"}
{"date":"2023-07-27","id":"00910","result":[3,11,13,31,33,45,27],"process_time":"2023-07-30 02:01:59.203274"}
{"date":"2023-07-29","id":"00911","result":[16,23,25,26,29,40,32],"process_time":"2023-07-30 02:01:59.203159"}
{"date":"2023-08-01","id":"00912","result":[4,18,22,25,33,48,2],"process_time":"2023-08-06 01:54:41.524023"}
{"date":"2023-08-03","id":"00913","result":[3,12,22,25,37,39,7],"process_time":"2023-08-06 01:54:41.523920"}
{"date":"2023-08-05","id":"00914","result":[22,34,40,47,49,51,44],"process_time":"2023-08-06 01:54:41.523771"}
{"date":"2023-08-08","id":"00915","result":[5,6,19,20,40,45,47],"process_time":"2023-08-09 02:02:12.805199"}
{"date":"2023-08-10","id":"00916","result":[4,14,31,42,47,49,43],"process_time":"2023-08-12 01:43:54.297379"}
{"date":"2023-08-12","id":"00917","result":[13,24,39,43,45,52,8],"process_time":"2023-08-14 01:49:13.987538"}
{"date":"2023-08-15","id":"00918","result":[5,12,25,39,40,53,52],"process_time":"2023-08-16 01:47:35.569287"}
{"date":"2023-08-17","id":"00919","result":[1,5,25,32,51,52,54],"process_time":"2023-08-22 01:49:28.969539"}
{"date":"2023-08-19","id":"00920","result":[7,9,13,22,27,42,23],"process_time":"2023-08-22 01:49:28.969424"}
{"date":"2023-08-22","id":"00921","result":[2,3,6,34,35,36,31],"process_time":"2023-08-24 01:47:27.382667"}
{"date":"2023-08-24","id":"00922","result":[1,10,20,41,42,50,39],"process_time":"2023-08-31 01:50:31.538804"}
{"date":"2023-08-26","id":"00923","result":[5,8,24,38,50,51,47],"process_time":"2023-08-31 01:50:31.538705"}
{"date":"2023-08-29","id":"00924","result":[1,8,20,25,35,53,54],"process_time":"2023-08-31 01:50:31.538585"}
{"date":"2023-08-31","id":"00925","result":[23,33,37,43,45,46,29],"process_time":"2023-09-01 08:10:17.221804"}
{"date":"2023-09-02","id":"00926","result":[12,15,32,44,46,51,48],"process_time":"2023-09-02 21:41:25.186072"}
{"date":"2023-09-05","id":"00927","result":[2,6,19,29,34,48,39],"process_time":"2023-09-06 14:49:08.276152"}
{"date":"2023-09-07","id":"00928","result":[1,4,36,42,45,54,32],"process_time":"2023-09-08 01:51:03.022104"}
{"date":"2023-09-09","id":"00929","result":[13,20,32,37,43,49,40],"process_time":"2023-09-11 01:51:49.615349"}
{"date":"2023-09-12","id":"00930","result":[26,31,32,39,45,55,28],"process_time":"2023-09-13 01:51:37.560834"}
{"date":"2023-09-14","id":"00931","result":[6,10,20,22,50,52,34],"process_time":"2023-09-16 01:48:13.132590"}
{"date":"2023-09-16","id":"00932","result":[25,27,42,51,54,55,45],"process_time":"2023-09-17 01:53:12.861058"}
{"date":"2023-09-19","id":"00933","result":[17,29,35,40,51,52,23],"process_time":"2023-10-23 12:07:42.262360"}
{"date":"2023-09-21","id":"00934","result":[16,26,33,34,41,43,53],"process_time":"2023-10-23 12:07:42.262305"}
{"date":"2023-09-23","id":"00935","result":[20,27,36,43,45,47,35],"process_time":"2023-10-23 12:07:42.262249"}
{"date":"2023-09-26","id":"00936","result":[14,20,24,27,41,44,23],"process_time":"2023-10-23 12:07:42.262193"}
{"date":"2023-09-28","id":"00937","result":[4,23,36,45,47,50,22],"process_time":"2023-10-23 12:07:42.262136"}
{"date":"2023-09-30","id":"00938","result":[3,13,19,30,38,44,51],"process_time":"2023-10-23 12:07:42.262076"}
{"date":"2023-10-03","id":"00939","result":[3,15,27,29,37,48,55],"process_time":"2023-10-23 12:07:42.262009"}
{"date":"2023-10-05","id":"00940","result":[1,21,33,46,47,53,9],"process_time":"2023-10-23 12:07:42.248975"}
{"date":"2023-10-07","id":"00941","result":[4,13,36,40,43,52,34],"process_time":"2023-10-23 12:07:42.248907"}
{"date":"2023-10-10","id":"00942","result":[6,23,26,37,44,46,33],"process_time":"2023-10-23 12:07:42.248832"}
{"date":"2023-10-12","id":"00943","result":[5,8,9,20,36,50,35],"process_time":"2023-10-23 12:07:42.248764"}
{"date":"2023-10-17","id":"00945","result":[13,22,33,41,46,47,9],"process_time":"2023-10-23 12:07:42.248607"}
{"date":"2023-10-19","id":"00946","result":[1,23,29,37,51,55,54],"process_time":"2023-10-23 12:07:42.248521"}
{"date":"2023-10-21","id":"00947","result":[11,16,24,34,47,52,15],"process_time":"2023-10-23 12:07:42.248418"}
{"date":"2023-10-24","id":"00948","result":[12,20,26,33,40,44,24],"process_time":"2023-10-25 01:52:06.642402"}
{"date":"2023-10-26","id":"00949","result":[14,22,32,37,43,48,42],"process_time":"2023-10-27 01:50:39.268370"}
{"date":"2023-10-28","id":"00950","result":[11,14,25,44,46,47,10],"process_time":"2023-10-29 01:54:41.124995"}
{"date":"2023-10-31","id":"00951","result":[10,16,17,28,37,42,43],"process_time":"2023-11-01 01:56:23.947915"}
{"date":"2023-11-02","id":"00952","result":[9,15,17,21,26,36,13],"process_time":"2023-11-03 01:53:05.026724"}
{"date":"2023-11-04","id":"00953","result":[14,35,37,47,48,50,43],"process_time":"2023-11-05 01:56:35.443381"}
{"date":"2023-11-07","id":"00954","result":[12,18,20,28,35,52,25],"process_time":"2023-11-08 01:53:40.268192"}
{"date":"2023-11-09","id":"00955","result":[8,17,24,34,39,48,44],"process_time":"2023-11-10 01:53:33.989513"}
{"date":"2023-11-11","id":"00956","result":[2,3,4,19,41,42,23],"process_time":"2023-11-12 01:57:35.312041"}
{"date":"2023-11-14","id":"00957","result":[4,9,12,15,22,38,40],"process_time":"2023-11-15 01:57:01.176688"}
{"date":"2023-11-16","id":"00958","result":[3,5,10,18,44,49,28],"process_time":"2023-11-17 01:57:12.382886"}
{"date":"2023-11-18","id":"00959","result":[1,7,10,14,28,29,2],"process_time":"2023-11-19 02:00:07.001239"}
{"date":"2023-11-21","id":"00960","result":[3,7,16,37,39,51,9],"process_time":"2023-11-22 01:59:17.244656"}
{"date":"2023-11-23","id":"00961","result":[4,6,26,33,52,55,15],"process_time":"2023-11-24 01:54:46.125469"}
{"date":"2023-11-25","id":"00962","result":[7,9,10,17,25,53,49],"process_time":"2023-11-26 01:58:43.137862"}
{"date":"2023-11-28","id":"00963","result":[10,24,47,48,52,55,28],"process_time":"2023-11-29 01:57:26.845472"}
{"date":"2023-11-30","id":"00964","result":[9,13,21,28,50,54,51],"process_time":"2023-12-01 02:03:06.596884"}
{"date":"2023-12-02","id":"00965","result":[1,10,20,37,48,51,54],"process_time":"2023-12-03 01:58:53.007893"}
{"date":"2023-12-05","id":"00966","result":[2,4,19,32,35,39,49],"process_time":"2023-12-06 01:57:50.236694"}
{"date":"2023-12-07","id":"00967","result":[9,13,28,33,50,53,47],"process_time":"2023-12-08 01:57:52.841538"}
{"date":"2023-12-09","id":"00968","result":[6,9,26,27,34,47,41],"process_time":"2023-12-10 02:00:11.346353"}
{"date":"2023-12-12","id":"00969","result":[6,7,16,21,34,50,31],"process_time":"2023-12-13 01:58:19.902112"}
{"date":"2023-12-14","id":"00970","result":[1,12,23,43,48,52,30],"process_time":"2023-12-15 01:58:13.068690"}
{"date":"2023-12-16","id":"00971","result":[13,15,21,26,34,35,45],"process_time":"2023-12-17 02:00:29.658626"}
{"date":"2023-12-19","id":"00972","result":[11,14,15,24,34,53,18],"process_time":"2023-12-20 01:36:03.388604"}
{"date":"2023-12-21","id":"00973","result":[9,31,39,41,47,48,3],"process_time":"2023-12-22 01:54:39.187932"}
{"date":"2023-12-23","id":"00974","result":[22,32,39,46,48,49,43],"process_time":"2023-12-24 01:58:14.509032"}
{"date":"2023-12-26","id":"00975","result":[10,14,17,27,29,40,25],"process_time":"2023-12-27 01:53:42.213866"}
{"date":"2023-12-28","id":"00976","result":[20,28,30,40,45,52,32],"process_time":"2023-12-29 01:45:40.149352"}
{"date":"2023-12-30","id":"00977","result":[9,17,29,32,38,52,2],"process_time":"2023-12-31 01:58:57.975929"}
{"date":"2024-01-02","id":"00978","result":[2,5,18,31,37,45,20],"process_time":"2024-01-03 01:55:51.518435"}
{"date":"2024-01-04","id":"00979","result":[7,34,37,43,52,54,28],"process_time":"2024-01-05 01:56:58.670256"}
{"date":"2024-01-06","id":"00980","result":[15,17,21,24,34,46,11],"process_time":"2024-01-07 02:01:38.174068"}
{"date":"2024-01-09","id":"00981","result":[16,32,45,50,52,53,54],"process_time":"2024-01-10 01:58:56.010269"}
{"date":"2024-01-11","id":"00982","result":[2,23,32,44,51,52,28],"process_time":"2024-01-12 01:59:00.930960"}
{"date":"2024-01-13","id":"00983","result":[1,5,7,23,35,42,21],"process_time":"2024-01-14 02:02:06.708905"}
{"date":"2024-01-16","id":"00984","result":[9,14,18,20,27,43,42],"process_time":"2024-01-17 01:58:33.996680"}
{"date":"2024-01-18","id":"00985","result":[12,20,33,38,40,52,35],"process_time":"2024-01-19 01:59:05.451827"}
{"date":"2024-01-20","id":"00986","result":[6,25,29,34,49,54,38],"process_time":"2024-01-21 02:02:38.285981"}
{"date":"2024-01-23","id":"00987","result":[13,27,32,48,49,51,23],"process_time":"2024-01-24 01:59:49.666418"}
{"date":"2024-01-25","id":"00988","result":[13,17,35,38,42,48,7],"process_time":"2024-01-26 01:51:56.767774"}
{"date":"2024-01-27","id":"00989","result":[6,12,38,41,46,55,13],"process_time":"2024-01-28 01:53:31.452287"}
{"date":"2024-01-30","id":"00990","result":[3,10,13,40,49,52,9],"process_time":"2024-01-31 01:50:46.619020"}
{"date":"2024-02-01","id":"00991","result":[2,7,10,22,32,40,39],"process_time":"2024-02-02 01:49:55.764213"}
{"date":"2024-02-03","id":"00992","result":[4,6,7,13,18,26,49],"process_time":"2024-02-04 01:54:19.368362"}
{"date":"2024-02-06","id":"00993","result":[8,19,27,34,46,51,24],"process_time":"2024-02-07 01:48:41.999813"}
{"date":"2024-02-08","id":"00994","result":[22,31,35,36,38,42,11],"process_time":"2024-02-09 01:48:54.902870"}
{"date":"2024-02-13","id":"00995","result":[8,17,22,31,34,49,18],"process_time":"2024-02-14 01:50:29.987875"}
{"date":"2024-02-15","id":"00996","result":[3,7,8,18,21,26,19],"process_time":"2024-02-16 01:50:01.111919"}
{"date":"2024-02-17","id":"00997","result":[8,12,17,27,38,55,47],"process_time":"2024-02-18 01:52:59.204990"}
{"date":"2024-02-20","id":"00998","result":[34,46,50,51,52,55,5],"process_time":"2024-02-21 01:50:13.772403"}
{"date":"2024-02-22","id":"00999","result":[8,19,24,31,35,55,1],"process_time":"2024-02-23 01:48:40.788902"}
{"date":"2024-02-24","id":"01000","result":[1,3,22,27,38,40,26],"process_time":"2024-02-25 01:52:27.837095"}
{"date":"2024-02-27","id":"01001","result":[1,4,6,8,24,35,53],"process_time":"2024-02-28 01:50:35.747831"}
{"date":"2024-02-29","id":"01002","result":[4,11,20,38,52,53,33],"process_time":"2024-03-01 01:55:29.366386"}
{"date":"2024-03-02","id":"01003","result":[1,19,21,31,50,55,37],"process_time":"2024-03-03 01:52:55.495994"}
{"date":"2024-03-05","id":"01004","result":[12,19,21,23,28,54,31],"process_time":"2024-03-06 01:49:34.358204"}
{"date":"2024-03-07","id":"01005","result":[13,20,33,47,53,54,19],"process_time":"2024-03-08 01:49:17.188669"}
{"date":"2024-03-09","id":"01006","result":[11,13,22,36,46,49,37],"process_time":"2024-03-10 01:54:54.863205"}
{"date":"2024-03-12","id":"01007","result":[11,14,18,20,22,43,16],"process_time":"2024-03-13 01:55:29.283981"}
{"date":"2024-03-14","id":"01008","result":[21,25,26,29,41,51,39],"process_time":"2024-03-15 01:51:10.197869"}
{"date":"2024-03-16","id":"01009","result":[8,36,42,43,44,55,54],"process_time":"2024-03-17 01:53:13.312382"}
{"date":"2024-03-19","id":"01010","result":[6,25,39,45,46,55,26],"process_time":"2024-03-20 01:49:32.227608"}
{"date":"2024-03-21","id":"01011","result":[12,13,41,48,49,53,43],"process_time":"2024-03-22 01:49:41.601528"}
{"date":"2024-03-23","id":"01012","result":[3,10,13,30,40,52,4],"process_time":"2024-03-24 01:55:49.474576"}
{"date":"2024-03-26","id":"01013","result":[1,8,13,16,38,44,47],"process_time":"2024-03-27 01:50:40.849831"}
{"date":"2024-03-28","id":"01014","result":[1,7,18,26,38,49,21],"process_time":"2024-03-29 01:49:59.328787"}
{"date":"2024-03-30","id":"01015","result":[14,17,27,38,54,55,23],"process_time":"2024-03-31 01:55:34.015736"}
{"date":"2024-04-02","id":"01016","result":[1,12,18,20,51,52,37],"process_time":"2024-04-03 01:51:47.642083"}
{"date":"2024-04-04","id":"01017","result":[3,8,12,25,47,48,15],"process_time":"2024-04-04 14:08:08.988416"}
{"date":"2024-04-06","id":"01018","result":[9,13,20,30,39,54,23],"process_time":"2024-04-07 01:45:18.310035"}
{"date":"2024-04-09","id":"01019","result":[4,12,27,44,46,51,22],"process_time":"2024-04-09 14:04:23.673382"}
{"date":"2024-04-11","id":"01020","result":[3,6,15,25,33,43,55],"process_time":"2024-04-12 01:40:55.683386"}
{"date":"2024-04-13","id":"01021","result":[29,36,37,38,40,42,46],"process_time":"2024-04-13 14:02:18.946701"}
{"date":"2024-04-16","id":"01022","result":[3,5,32,40,46,50,37],"process_time":"2024-04-16 14:07:01.972996"}
{"date":"2024-04-18","id":"01023","result":[1,21,23,33,43,54,28],"process_time":"2024-04-18 14:05:01.385676"}
{"date":"2024-04-20","id":"01024","result":[2,6,35,43,45,47,14],"process_time":"2024-04-20 14:03:00.080358"}
{"date":"2024-04-23","id":"01025","result":[1,34,39,40,49,53,9],"process_time":"2024-04-23 14:04:34.373620"}
{"date":"2024-04-25","id":"01026","result":[13,19,27,38,41,54,46],"process_time":"2024-04-25 14:02:58.217808"}
{"date":"2024-04-27","id":"01027","result":[7,12,38,43,48,55,8],"process_time":"2024-04-27 14:03:26.327015"}
{"date":"2024-04-30","id":"01028","result":[13,16,26,46,49,54,8],"process_time":"2024-04-30 14:07:20.889707"}
{"date":"2024-05-02","id":"01029","result":[30,32,33,36,42,48,18],"process_time":"2024-05-02 14:04:59.649260"}
{"date":"2024-05-04","id":"01030","result":[5,27,35,45,49,55,18],"process_time":"2024-05-04 14:06:23.873339"}
{"date":"2024-05-07","id":"01031","result":[21,26,35,41,44,52,13],"process_time":"2024-05-07 14:06:14.856121"}
{"date":"2024-05-09","id":"01032","result":[3,16,21,36,37,40,31],"process_time":"2024-05-09 14:04:05.513993"}
{"date":"2024-05-11","id":"01033","result":[19,23,25,43,46,54,42],"process_time":"2024-05-11 14:03:24.360265"}
{"date":"2024-05-14","id":"01034","result":[5,17,36,40,46,50,1],"process_time":"2024-05-14 14:05:23.746889"}
{"date":"2024-05-16","id":"01035","result":[20,25,27,39,45,55,44],"process_time":"2024-05-16 14:06:20.047809"}
{"date":"2024-05-18","id":"01036","result":[12,18,20,25,27,52,44],"process_time":"2024-05-18 14:03:38.748282"}
{"date":"2024-05-21","id":"01037","result":[1,2,14,32,33,41,4],"process_time":"2024-05-21 14:04:03.937317"}
{"date":"2024-05-23","id":"01038","result":[8,12,42,47,51,52,36],"process_time":"2024-05-23 14:06:08.491608"}
{"date":"2024-05-25","id":"01039","result":[15,22,38,39,43,53,20],"process_time":"2024-05-25 14:03:52.082183"}
{"date":"2024-05-28","id":"01040","result":[1,25,29,37,40,54,50],"process_time":"2024-05-28 14:07:14.089901"}
{"date":"2024-05-30","id":"01041","result":[4,7,8,12,23,31,45],"process_time":"2024-05-30 14:07:41.605805"}
{"date":"2024-06-01","id":"01042","result":[6,24,30,31,47,49,1],"process_time":"2024-06-01 14:06:58.990046"}
{"date":"2024-06-04","id":"01043","result":[1,2,7,10,13,19,24],"process_time":"2024-06-04 14:07:20.343926"}
{"date":"2024-06-06","id":"01044","result":[18,26,38,39,47,51,55],"process_time":"2024-06-06 14:08:02.155867"}
{"date":"2024-06-08","id":"01045","result":[13,16,32,33,35,43,42],"process_time":"2024-06-08 14:07:33.610200"}
{"date":"2024-06-11","id":"01046","result":[13,16,21,30,32,39,53],"process_time":"2024-06-11 14:07:39.517972"}
{"date":"2024-06-13","id":"01047","result":[8,39,45,47,49,51,16],"process_time":"2024-06-13 14:05:28.933814"}
{"date":"2024-06-15","id":"01048","result":[5,10,14,20,26,51,36],"process_time":"2024-06-15 14:07:05.927580"}
{"date":"2024-06-18","id":"01049","result":[20,23,27,36,38,44,52],"process_time":"2024-06-18 14:07:05.935887"}
{"date":"2024-06-20","id":"01050","result":[1,10,29,34,43,55,49],"process_time":"2024-06-20 14:06:06.408923"}
{"date":"2024-06-22","id":"01051","result":[17,25,31,35,41,42,36],"process_time":"2024-06-22 14:06:31.757185"}
{"date":"2024-06-25","id":"01052","result":[1,5,9,13,18,27,8],"process_time":"2024-06-25 14:06:52.863752"}
{"date":"2024-06-27","id":"01053","result":[7,21,22,41,43,46,32],"process_time":"2024-06-27 14:07:14.181444"}
{"date":"2024-06-29","id":"01054","result":[11,15,32,34,46,48,47],"process_time":"2024-06-29 14:03:41.444360"}
{"date":"2024-07-02","id":"01055","result":[7,8,50,52,53,54,2],"process_time":"2024-07-02 14:07:21.248284"}
{"date":"2024-07-04","id":"01056","result":[10,19,20,29,34,41,8],"process_time":"2024-07-04 14:07:26.078492"}
{"date":"2024-07-06","id":"01057","result":[8,10,12,22,25,55,52],"process_time":"2024-07-06 14:03:08.948441"}
{"date":"2024-07-09","id":"01058","result":[6,8,9,28,33,53,10],"process_time":"2024-07-09 14:06:59.375760"}
{"date":"2024-07-11","id":"01059","result":[1,2,11,21,22,23,26],"process_time":"2024-07-11 14:06:13.954754"}
{"date":"2024-07-13","id":"01060","result":[2,12,13,33,44,52,34],"process_time":"2024-07-13 14:03:55.109892"}
{"date":"2024-07-16","id":"01061","result":[20,31,34,36,47,52,2],"process_time":"2024-07-16 14:07:23.395848"}
{"date":"2024-07-18","id":"01062","result":[10,13,28,35,40,42,2],"process_time":"2024-07-18 14:07:15.338153"}
{"date":"2024-07-20","id":"01063","result":[12,18,32,40,51,53,28],"process_time":"2024-07-20 14:05:38.403669"}
{"date":"2024-07-23","id":"01064","result":[34,39,40,42,54,55,30],"process_time":"2024-07-23 14:07:22.181589"}
{"date":"2024-07-25","id":"01065","result":[12,17,21,25,33,40,39],"process_time":"2024-07-25 14:06:54.683123"}
{"date":"2024-07-27","id":"01066","result":[18,23,25,37,39,40,35],"process_time":"2024-07-27 14:04:00.883566"}
{"date":"2024-07-30","id":"01067","result":[2,6,22,23,38,51,32],"process_time":"2024-07-30 14:07:03.114162"}
{"date":"2024-08-01","id":"01068","result":[9,17,21,48,53,55,29],"process_time":"2024-08-01 14:07:28.806932"}
{"date":"2024-08-03","id":"01069","result":[7,20,34,36,41,46,16],"process_time":"2024-08-03 14:07:01.928969"}
{"date":"2024-08-06","id":"01070","result":[22,34,44,46,54,55,14],"process_time":"2024-08-06 14:07:07.182104"}
{"date":"2024-08-08","id":"01071","result":[1,7,42,43,48,51,29],"process_time":"2024-08-08 14:07:06.572563"}
{"date":"2024-08-10","id":"01072","result":[10,23,32,37,48,55,14],"process_time":"2024-08-10 14:05:47.374728"}
{"date":"2024-08-13","id":"01073","result":[9,26,40,44,45,50,27],"process_time":"2024-08-13 14:07:24.112932"}
{"date":"2024-08-15","id":"01074","result":[8,16,20,30,34,43,46],"process_time":"2024-08-15 14:06:57.375025"}
{"date":"2024-08-17","id":"01075","result":[4,28,35,38,39,45,5],"process_time":"2024-08-17 14:07:47.603035"}
{"date":"2024-08-20","id":"01076","result":[5,24,26,27,29,54,6],"process_time":"2024-08-20 14:07:48.302451"}
{"date":"2024-08-22","id":"01077","result":[11,18,20,32,41,46,33],"process_time":"2024-08-22 14:07:31.499481"}
{"date":"2024-08-24","id":"01078","result":[2,17,20,21,22,23,38],"process_time":"2024-08-24 14:05:41.719172"}
{"date":"2024-08-27","id":"01079","result":[5,6,29,31,37,48,2],"process_time":"2024-08-27 14:08:18.889406"}
{"date":"2024-08-29","id":"01080","result":[8,11,21,29,38,55,12],"process_time":"2024-08-29 14:08:49.450809"}
{"date":"2024-08-31","id":"01081","result":[24,33,38,40,42,51,28],"process_time":"2024-08-31 14:04:40.517321"}
{"date":"2024-09-03","id":"01082","result":[8,10,11,14,38,48,41],"process_time":"2024-09-03 14:08:00.162153"}
{"date":"2024-09-05","id":"01083","result":[15,20,23,29,34,46,1],"process_time":"2024-09-05 14:08:20.175897"}
{"date":"2024-09-07","id":"01084","result":[5,11,20,39,46,53,37],"process_time":"2024-09-07 14:06:46.453107"}
{"date":"2024-09-10","id":"01085","result":[15,23,37,38,45,49,30],"process_time":"2024-09-10 14:08:07.490540"}
{"date":"2024-09-12","id":"01086","result":[3,8,31,36,39,47,38],"process_time":"2024-09-12 14:08:53.653366"}
{"date":"2024-09-14","id":"01087","result":[2,12,25,32,51,54,34],"process_time":"2024-09-14 14:05:07.664657"}
{"date":"2024-09-17","id":"01088","result":[14,32,34,41,47,54,48],"process_time":"2024-09-17 14:07:48.549461"}
{"date":"2024-09-19","id":"01089","result":[4,9,22,24,45,54,48],"process_time":"2024-09-19 14:07:44.474082"}
{"date":"2024-09-21","id":"01090","result":[3,8,9,22,26,55,11],"process_time":"2024-09-21 14:05:36.705265"}
{"date":"2024-09-24","id":"01091","result":[1,6,11,17,24,31,43],"process_time":"2024-09-24 14:07:30.604317"}
{"date":"2024-09-26","id":"01092","result":[3,18,29,39,41,49,46],"process_time":"2024-09-26 14:07:14.797039"}
{"date":"2024-09-28","id":"01093","result":[2,11,13,32,41,48,15],"process_time":"2024-09-28 14:05:31.520053"}
{"date":"2024-10-01","id":"01094","result":[3,18,22,41,43,44,12],"process_time":"2024-10-01 14:08:26.085082"}
{"date":"2024-10-03","id":"01095","result":[18,21,34,40,42,53,25],"process_time":"2024-10-03 14:08:22.354403"}
{"date":"2024-10-05","id":"01096","result":[2,10,17,27,50,52,18],"process_time":"2024-10-05 14:05:33.835578"}
{"date":"2024-10-08","id":"01097","result":[3,7,14,17,48,50,40],"process_time":"2024-10-08 14:08:48.961350"}
{"date":"2024-10-10","id":"01098","result":[4,5,6,29,32,44,53],"process_time":"2024-10-10 14:08:31.717284"}
{"date":"2024-10-12","id":"01099","result":[29,34,35,38,50,51,37],"process_time":"2024-10-12 14:06:38.873281"}
{"date":"2024-10-15","id":"01100","result":[4,25,41,42,46,52,33],"process_time":"2024-10-15 14:08:16.788716"}
{"date":"2024-10-17","id":"01101","result":[11,14,15,26,38,41,25],"process_time":"2024-10-17 14:08:38.965236"}
{"date":"2024-10-19","id":"01102","result":[9,22,31,39,43,51,19],"process_time":"2024-10-19 14:07:01.732285"}
{"date":"2024-10-22","id":"01103","result":[15,21,23,26,31,43,35],"process_time":"2024-10-22 14:08:22.006721"}
{"date":"2024-10-24","id":"01104","result":[5,17,31,39,46,53,3],"process_time":"2024-10-24 14:08:28.302617"}
{"date":"2024-10-26","id":"01105","result":[5,19,27,29,42,47,40],"process_time":"2024-10-26 14:06:46.276827"}
{"date":"2024-10-29","id":"01106","result":[14,17,19,28,47,51,55],"process_time":"2024-10-29 14:08:48.629579"}
{"date":"2024-10-31","id":"01107","result":[5,16,20,29,30,31,39],"process_time":"2024-10-31 14:08:16.746749"}
{"date":"2024-11-02","id":"01108","result":[2,9,19,20,34,54,26],"process_time":"2024-11-02 14:07:17.372355"}
{"date":"2024-11-05","id":"01109","result":[9,31,36,46,49,54,7],"process_time":"2024-11-05 14:08:24.678745"}
{"date":"2024-11-07","id":"01110","result":[6,9,33,39,50,51,43],"process_time":"2024-11-07 14:08:25.399717"}
{"date":"2024-11-09","id":"01111","result":[11,14,24,26,34,51,40],"process_time":"2024-11-10 02:14:10.380124"}
{"date":"2024-11-12","id":"01112","result":[1,21,29,35,41,45,20],"process_time":"2024-11-12 14:08:35.280505"}
{"date":"2024-11-14","id":"01113","result":[12,25,37,40,49,52,31],"process_time":"2024-11-14 14:09:18.242315"}
{"date":"2024-11-16","id":"01114","result":[16,22,33,37,39,51,54],"process_time":"2024-11-16 14:07:21.034678"}
{"date":"2024-11-19","id":"01115","result":[6,10,17,34,41,48,31],"process_time":"2024-12-16 12:55:37.849413"}
{"date":"2024-11-21","id":"01116","result":[15,22,31,40,42,51,26],"process_time":"2024-12-16 12:55:37.849352"}
{"date":"2024-11-23","id":"01117","result":[4,12,25,39,48,51,45],"process_time":"2024-12-16 12:55:37.849292"}
{"date":"2024-11-26","id":"01118","result":[8,11,16,32,40,43,12],"process_time":"2024-12-16 12:55:37.849219"}
{"date":"2024-11-28","id":"01119","result":[1,16,24,28,38,53,9],"process_time":"2024-12-16 12:55:37.832288"}
{"date":"2024-11-30","id":"01120","result":[1,20,24,26,38,41,36],"process_time":"2024-12-16 12:55:37.832210"}
{"date":"2024-12-03","id":"01121","result":[10,19,33,39,47,54,16],"process_time":"2024-12-16 12:55:37.832134"}
{"date":"2024-12-05","id":"01122","result":[16,21,29,41,42,47,9],"process_time":"2024-12-16 12:55:37.832054"}
{"date":"2024-12-07","id":"01123","result":[16,17,22,24,29,37,54],"process_time":"2024-12-16 12:55:37.831974"}
{"date":"2024-12-10","id":"01124","result":[11,15,26,45,52,55,36],"process_time":"2024-12-16 12:55:37.831894"}
{"date":"2024-12-12","id":"01125","result":[1,9,12,18,37,44,11],"process_time":"2024-12-16 12:55:37.831810"}
{"date":"2024-12-14","id":"01126","result":[3,10,19,20,21,24,7],"process_time":"2024-12-16 12:55:37.831668"}
{"date":"2024-12-17","id":"01127","result":[2,14,27,30,53,54,16],"process_time":"2024-12-23 16:21:56.452777"}
{"date":"2024-12-19","id":"01128","result":[13,16,32,39,49,51,11],"process_time":"2024-12-23 16:21:56.452645"}
{"date":"2024-12-21","id":"01129","result":[4,16,29,30,35,51,48],"process_time":"2024-12-23 16:21:56.452504"}
{"date":"2024-12-24","id":"01130","result":[17,20,27,32,44,51,33],"process_time":"2025-01-07 13:09:17.204055"}
{"date":"2024-12-26","id":"01131","result":[6,18,33,38,41,48,16],"process_time":"2025-01-07 13:09:17.203980"}
{"date":"2024-12-28","id":"01132","result":[6,19,36,42,53,55,39],"process_time":"2025-01-07 13:09:17.203893"}
{"date":"2024-12-31","id":"01133","result":[8,13,29,36,42,43,28],"process_time":"2025-01-07 13:09:17.203777"}
{"date":"2025-01-02","id":"01134","result":[4,10,18,22,41,45,50],"process_time":"2025-01-07 13:09:17.203531"}
{"date":"2025-01-04","id":"01135","result":[4,10,30,36,40,53,51],"process_time":"2025-01-07 13:09:17.203436"}
{"date":"2025-01-07","id":"01136","result":[4,5,9,16,22,39,30],"process_time":"2025-01-08 10:41:06.663806"}
{"date":"2025-01-09","id":"01137","result":[18,21,31,39,50,53,13],"process_time":"2025-01-21 16:53:35.593527"}
{"date":"2025-01-11","id":"01138","result":[10,25,26,29,37,46,14],"process_time":"2025-01-21 16:53:35.593432"}
{"date":"2025-01-14","id":"01139","result":[3,11,12,24,33,40,46],"process_time":"2025-01-21 16:53:35.593336"}
{"date":"2025-01-16","id":"01140","result":[8,16,34,37,47,50,23],"process_time":"2025-01-21 16:53:35.593229"}
{"date":"2025-01-18","id":"01141","result":[1,3,26,31,37,41,51],"process_time":"2025-01-21 16:53:35.592973"}
{"date":"2025-01-21","id":"01142","result":[11,18,22,28,51,52,53],"process_time":"2025-01-22 16:21:35.655272"}
{"date":"2025-01-23","id":"01143","result":[11,18,22,49,50,51,37],"process_time":"2025-02-04 09:10:01.052847"}
{"date":"2025-01-25","id":"01144","result":[14,21,40,42,48,51,19],"process_time":"2025-02-04 09:10:01.052775"}
{"date":"2025-01-30","id":"01145","result":[5,8,24,28,34,52,39],"process_time":"2025-02-04 09:10:01.052699"}
{"date":"2025-02-01","id":"01146","result":[1,20,34,38,45,47,49],"process_time":"2025-02-04 09:10:01.052603"}
{"date":"2025-02-04","id":"01147","result":[7,17,29,51,52,55,41],"process_time":"2025-02-05 14:08:09.861421"}
{"date":"2025-02-06","id":"01148","result":[1,11,31,43,48,54,19],"process_time":"2025-02-06 19:00:16.666665"}
{"date":"2025-02-08","id":"01149","result":[11,22,28,44,48,49,23],"process_time":"2025-02-08 19:00:21.621172"}
{"date":"2025-02-11","id":"01150","result":[1,9,18,21,35,40,44],"process_time":"2025-02-11 19:00:16.958421"}
{"date":"2025-02-13","id":"01151","result":[2,8,23,26,42,47,7],"process_time":"2025-02-13 19:00:13.398152"}
{"date":"2025-02-15","id":"01152","result":[22,37,38,47,51,55,31],"process_time":"2025-02-15 19:00:15.907100"}
{"date":"2025-02-18","id":"01153","result":[12,13,30,38,40,47,42],"process_time":"2025-02-19 19:00:18.391949"}
{"date":"2025-02-20","id":"01154","result":[13,17,20,27,36,54,47],"process_time":"2025-02-20 19:00:12.840993"}
{"date":"2025-02-22","id":"01155","result":[1,2,7,22,23,46,50],"process_time":"2025-02-22 19:00:38.011886"}
{"date":"2025-02-25","id":"01156","result":[1,7,11,24,29,30,48],"process_time":"2025-02-25 20:58:27.007819"}
{"date":"2025-02-27","id":"01157","result":[5,9,21,31,43,53,11],"process_time":"2025-02-27 22:55:20.424084"}
{"date":"2025-03-01","id":"01158","result":[15,17,34,37,39,45,41],"process_time":"2025-03-01 19:00:19.333042"}
{"date":"2025-03-04","id":"01159","result":[5,14,27,43,45,53,47],"process_time":"2025-03-04 19:00:14.873524"}
{"date":"2025-03-06","id":"01160","result":[5,10,21,26,43,51,15],"process_time":"2025-03-10 11:41:38.454275"}
{"date":"2025-03-08","id":"01161","result":[10,38,41,43,45,48,8],"process_time":"2025-03-10 11:41:38.454144"}
{"date":"2025-03-11","id":"01162","result":[1,16,18,30,31,44,34],"process_time":"2025-03-11 19:00:14.832710"}
{"date":"2025-03-13","id":"01163","result":[7,13,21,43,52,53,17],"process_time":"2025-03-13 19:00:15.799984"}
{"date":"2025-03-15","id":"01164","result":[1,34,39,40,42,50,25],"process_time":"2025-03-15 19:00:14.000659"}
{"date":"2025-03-18","id":"01165","result":[2,8,29,30,50,55,27],"process_time":"2025-03-19 16:05:09.000808"}
{"date":"2025-03-20","id":"01166","result":[11,13,24,28,36,41,37],"process_time":"2025-03-20 19:00:22.564476"}
{"date":"2025-03-22","id":"01167","result":[2,23,42,50,52,54,44],"process_time":"2025-03-22 19:00:24.768659"}
{"date":"2025-03-25","id":"01168","result":[14,23,29,30,35,40,17],"process_time":"2025-03-25 19:00:13.251916"}
{"date":"2025-03-27","id":"01169","result":[13,25,32,36,41,53,29],"process_time":"2025-03-27 19:00:16.032453"}
{"date":"2025-03-29","id":"01170","result":[14,19,21,24,26,48,39],"process_time":"2025-03-29 19:00:16.562664"}
{"date":"2025-04-01","id":"01171","result":[14,15,29,33,39,47,4],"process_time":"2025-04-01 19:00:18.060994"}
{"date":"2025-04-03","id":"01172","result":[24,26,34,42,50,51,30],"process_time":"2025-04-03 22:09:55.980908"}
{"date":"2025-04-05","id":"01173","result":[13,23,29,32,41,42,9],"process_time":"2025-04-05 19:00:22.788040"}
{"date":"2025-04-08","id":"01174","result":[3,7,34,41,43,53,31],"process_time":"2025-04-08 19:00:16.802476"}
{"date":"2025-04-10","id":"01175","result":[10,13,36,37,40,43,41],"process_time":"2025-04-10 19:00:31.198693"}
{"date":"2025-04-12","id":"01176","result":[3,14,19,37,42,55,23],"process_time":"2025-04-12 19:00:19.086188"}
{"date":"2025-04-15","id":"01177","result":[8,23,24,27,42,49,20],"process_time":"2025-04-15 19:00:22.713625"}
{"date":"2025-04-17","id":"01178","result":[1,17,20,38,41,52,14],"process_time":"2025-04-17 19:00:22.336534"}
{"date":"2025-04-19","id":"01179","result":[5,11,15,32,42,49,43],"process_time":"2025-04-21 11:33:24.124207"}
{"date":"2025-04-22","id":"01180","result":[10,25,37,40,41,48,32],"process_time":"2025-04-22 19:00:14.976080"}
{"date":"2025-04-24","id":"01181","result":[1,2,15,39,40,47,24],"process_time":"2025-04-24 19:00:16.311335"}
{"date":"2025-04-26","id":"01182","result":[3,15,16,31,48,52,21],"process_time":"2025-04-26 19:00:37.192125"}
{"date":"2025-04-29","id":"01183","result":[14,15,18,23,28,33,29],"process_time":"2025-04-29 19:00:22.162238"}
{"date":"2025-05-01","id":"01184","result":[3,17,19,41,45,50,43],"process_time":"2025-05-01 19:00:24.795215"}
{"date":"2025-05-03","id":"01185","result":[15,19,21,26,42,47,38],"process_time":"2025-05-03 19:00:20.829914"}
{"date":"2025-05-06","id":"01186","result":[12,16,25,28,30,39,5],"process_time":"2025-05-06 19:00:19.321090"}
{"date":"2025-05-08","id":"01187","result":[8,14,29,37,39,50,21],"process_time":"2025-05-08 19:00:23.631699"}
{"date":"2025-05-10","id":"01188","result":[7,16,19,28,34,51,15],"process_time":"2025-05-10 19:00:18.573880"}
{"date":"2025-05-13","id":"01189","result":[3,7,24,39,54,55,42],"process_time":"2025-05-19 09:08:44.622555"}
{"date":"2025-05-15","id":"01190","result":[6,9,13,44,49,54,47],"process_time":"2025-05-19 09:08:44.622459"}
{"date":"2025-05-17","id":"01191","result":[2,7,26,29,41,50,43],"process_time":"2025-05-19 09:08:44.622335"}
{"date":"2025-05-20","id":"01192","result":[19,27,44,45,47,52,15],"process_time":"2025-05-20 19:00:19.102116"}
{"date":"2025-05-22","id":"01193","result":[3,9,14,41,47,55,22],"process_time":"2025-05-22 19:01:11.003151"}
{"date":"2025-05-24","id":"01194","result":[19,20,27,30,45,55,15],"process_time":"2025-05-26 19:00:21.730573"}
{"date":"2025-05-27","id":"01195","result":[4,12,18,19,44,48,42],"process_time":"2025-05-27 19:00:27.363743"}
{"date":"2025-05-29","id":"01196","result":[9,37,42,45,46,50,14],"process_time":"2025-05-29 19:00:15.005246"}
{"date":"2025-05-31","id":"01197","result":[6,24,41,45,49,55,8],"process_time":"2025-05-31 19:00:15.708033"}
{"date":"2025-06-03","id":"01198","result":[2,11,14,16,27,38,51],"process_time":"2025-06-03 19:01:13.225100"}
{"date":"2025-06-05","id":"01199","result":[14,21,33,37,46,49,34],"process_time":"2025-06-05 19:00:16.186371"}
{"date":"2025-06-07","id":"01200","result":[12,17,21,46,48,52,45],"process_time":"2025-06-08 19:00:23.946470"}
{"date":"2025-06-10","id":"01201","result":[3,6,21,29,40,41,37],"process_time":"2025-06-11 19:00:17.010268"}
{"date":"2025-06-12","id":"01202","result":[6,8,16,18,34,44,17],"process_time":"2025-06-12 19:00:09.940893"}
{"date":"2025-06-14","id":"01203","result":[11,12,22,26,41,47,24],"process_time":"2025-06-15 19:00:27.381690"}
{"date":"2025-06-17","id":"01204","result":[7,13,18,22,32,44,43],"process_time":"2025-06-17 19:00:14.248629"}
{"date":"2025-06-19","id":"01205","result":[3,5,9,10,16,47,34],"process_time":"2025-06-19 19:00:12.105342"}
{"date":"2025-06-21","id":"01206","result":[6,10,15,43,44,53,32],"process_time":"2025-06-22 19:00:16.907461"}
{"date":"2025-06-24","id":"01207","result":[3,9,18,20,30,53,48],"process_time":"2025-06-30 15:30:00.151131"}
{"date":"2025-06-26","id":"01208","result":[1,14,16,27,40,51,2],"process_time":"2025-06-30 15:30:00.151037"}
{"date":"2025-06-28","id":"01209","result":[8,11,13,20,45,50,25],"process_time":"2025-06-30 15:30:00.150910"}
{"date":"2025-07-01","id":"01210","result":[3,11,12,14,27,33,15],"process_time":"2025-07-02 00:01:16.154567"}
{"date":"2025-07-03","id":"01211","result":[18,19,29,31,45,54,27],"process_time":"2025-07-04 00:01:20.834544"}
{"date":"2025-07-05","id":"01212","result":[3,15,22,45,51,55,54],"process_time":"2025-07-06 00:01:25.986584"}
{"date":"2025-07-08","id":"01213","result":[23,24,32,42,48,50,31],"process_time":"2025-07-09 00:01:24.568129"}
{"date":"2025-07-10","id":"01214","result":[12,33,34,42,44,53,3],"process_time":"2025-07-14 18:47:06.726125"}
{"date":"2025-07-12","id":"01215","result":[2,34,39,41,45,52,51],"process_time":"2025-07-14 18:47:06.725228"}
{"date":"2025-07-15","id":"01216","result":[18,26,31,32,36,48,30],"process_time":"2025-07-16 00:01:25.441672"}
{"date":"2025-07-17","id":"01217","result":[13,18,33,40,48,53,54],"process_time":"2025-07-18 00:01:24.912307"}
{"date":"2025-07-19","id":"01218","result":[8,9,20,36,39,44,28],"process_time":"2025-07-20 00:01:20.503953"}
{"date":"2025-07-22","id":"01219","result":[9,10,15,28,33,44,22],"process_time":"2025-07-23 00:01:21.445784"}
{"date":"2025-07-24","id":"01220","result":[5,10,24,29,30,34,45],"process_time":"2025-07-25 12:00:38.542614"}
{"date":"2025-07-26","id":"01221","result":[5,26,28,29,33,54,34],"process_time":"2025-07-27 00:00:32.385732"}
{"date":"2025-07-29","id":"01222","result":[4,8,23,43,45,51,48],"process_time":"2025-07-30 00:00:36.365372"}
{"date":"2025-07-31","id":"01223","result":[5,17,31,42,46,49,37],"process_time":"2025-08-01 00:00:35.635172"}
{"date":"2025-08-02","id":"01224","result":[12,24,29,33,34,35,47],"process_time":"2025-08-20 16:02:22.840946"}
{"date":"2025-08-05","id":"01225","result":[8,41,45,51,52,53,31],"process_time":"2025-08-20 16:02:22.840894"}
{"date":"2025-08-07","id":"01226","result":[6,24,31,32,39,48,52],"process_time":"2025-08-20 16:02:22.840845"}
{"date":"2025-08-09","id":"01227","result":[5,9,16,36,43,51,19],"process_time":"2025-08-20 16:02:22.840791"}
{"date":"2025-08-12","id":"01228","result":[1,6,24,37,40,55,10],"process_time":"2025-08-20 16:02:22.840737"}
{"date":"2025-08-14","id":"01229","result":[6,10,17,18,32,35,53],"process_time":"2025-08-20 16:02:22.840684"}
{"date":"2025-08-16","id":"01230","result":[14,23,32,36,47,48,5],"process_time":"2025-08-20 16:02:22.840628"}
{"date":"2025-08-19","id":"01231","result":[1,14,31,34,36,47,45],"process_time":"2025-08-20 16:02:22.840570"}
{"date":"2025-08-21","id":"01232","result":[5,9,17,35,40,41,44],"process_time":"2025-08-23 18:50:23.223490"}
{"date":"2025-08-23","id":"01233","result":[1,9,26,34,44,50,52],"process_time":"2025-08-23 18:50:23.222577"}
{"date":"2025-08-26","id":"01234","result":[22,30,38,44,48,55,5],"process_time":"2025-08-27 00:00:31.403856"}
{"date":"2025-08-28","id":"01235","result":[6,13,28,30,35,52,50],"process_time":"2025-08-29 00:00:35.379419"}
{"date":"2025-08-30","id":"01236","result":[2,17,19,24,30,44,34],"process_time":"2025-08-31 00:00:28.809014"}
{"date":"2025-09-02","id":"01237","result":[9,16,22,25,30,51,43],"process_time":"2025-09-03 00:00:31.255648"}
{"date":"2025-09-04","id":"01238","result":[9,19,23,42,49,53,40],"process_time":"2025-09-04 12:00:40.056931"}
{"date":"2025-09-06","id":"01239","result":[9,11,19,22,34,43,31],"process_time":"2025-09-04 12:00:40.056040"}
{"date":"2025-09-09","id":"01240","result":[16,20,21,31,40,52,2],"process_time":"2025-09-04 12:00:40.054941"}
{"date":"2025-09-11","id":"01241","result":[6,16,46,49,51,55,42],"process_time":"2025-09-12 00:00:34.372685"}
{"date":"2025-09-13","id":"01242","result":[2,7,15,18,24,27,45],"process_time":"2025-09-14 00:00:29.018121"}
{"date":"2025-09-16","id":"01243","result":[17,19,28,39,43,53,33],"process_time":"2025-10-17 21:15:55.028771"}
{"date":"2025-09-18","id":"01244","result":[2,3,8,27,38,55,20],"process_time":"2025-10-17 21:15:55.028746"}
{"date":"2025-09-20","id":"01245","result":[8,13,14,19,36,43,30],"process_time":"2025-10-17 21:15:55.028722"}
{"date":"2025-09-23","id":"01246","result":[8,18,19,34,41,46,38],"process_time":"2025-10-17 21:15:55.028697"}
{"date":"2025-09-25","id":"01247","result":[5,17,30,31,38,53,8],"process_time":"2025-10-17 21:15:55.028670"}
{"date":"2025-09-27","id":"01248","result":[8,13,19,24,39,46,1],"process_time":"2025-10-17 21:15:55.028639"}
{"date":"2025-09-30","id":"01249","result":[17,23,34,39,46,52,8],"process_time":"2025-10-17 21:15:55.018180"}
{"date":"2025-10-02","id":"01250","result":[1,2,20,24,27,42,43],"process_time":"2025-10-17 21:15:55.018087"}
{"date":"2025-10-04","id":"01251","result":[22,33,35,36,38,40,7],"process_time":"2025-10-17 21:15:55.017992"}
{"date":"2025-10-07","id":"01252","result":[19,22,35,37,43,45,29],"process_time":"2025-10-17 21:15:55.017899"}
{"date":"2025-10-09","id":"01253","result":[7,11,21,22,39,42,40],"process_time":"2025-10-17 21:15:55.017805"}
{"date":"2025-10-11","id":"01254","result":[3,7,26,43,44,46,25],"process_time":"2025-10-17 21:15:55.017694"}
{"date":"2025-10-14","id":"01255","result":[8,9,16,26,37,55,12],"process_time":"2025-10-17 21:15:55.017590"}
{"date":"2025-10-16","id":"01256","result":[14,15,24,26,27,45,36],"process_time":"2025-10-17 21:15:55.017468"}
{"date":"2025-10-18","id":"01257","result":[5,16,19,21,38,43,50],"process_time":"2025-10-21T21:48:33.658800"}
{"date":"2025-10-21","id":"01258","result":[3,11,12,14,22,40,41],"process_time":"2025-10-21T21:48:33.658764"}
{"date":"2025-10-23","id":"01259","result":[8,10,21,48,49,50,40],"process_time":"2025-10-24T18:00:52.094824"}
{"date":"2025-10-25","id":"01260","result":[3,5,11,13,24,27,45],"process_time":"2025-10-26T00:00:45.744914"}
{"date":"2025-10-28","id":"01261","result":[6,8,10,22,25,54,9],"process_time":"2025-10-29T00:00:48.613372"}
{"date":"2025-10-30","id":"01262","result":[20,23,35,41,47,55,37],"process_time":"2025-10-31T00:00:51.288093"}
{"date":"2025-11-01","id":"01263","result":[7,11,28,29,31,33,8],"process_time":"2025-11-02T00:00:45.953240"}
{"date":"2025-11-04","id":"01264","result":[15,27,29,31,36,43,38],"process_time":"2025-11-05T00:00:47.877234"}
{"date":"2025-11-06","id":"01265","result":[16,20,29,33,36,49,6],"process_time":"2025-11-07T00:00:46.078318"}
{"date":"2025-11-08","id":"01266","result":[14,16,19,22,27,44,18],"process_time":"2025-11-09T00:00:52.697026"}
{"date":"2025-11-11","id":"01267","result":[11,20,28,41,47,54,31],"process_time":"2025-11-12T00:00:54.138665"}
{"date":"2025-11-13","id":"01268","result":[1,15,30,38,40,43,13],"process_time":"2025-11-14T00:00:51.765554"}
{"date":"2025-11-15","id":"01269","result":[2,30,33,35,42,54,45],"process_time":"2025-11-16T00:00:51.177522"}
{"date":"2025-11-18","id":"01270","result":[7,12,18,22,30,49,5],"process_time":"2025-11-19T00:00:50.139294"}
{"date":"2025-11-20","id":"01271","result":[3,12,19,20,31,42,13],"process_time":"2025-11-21T00:00:55.461521"}
{"date":"2025-11-22","id":"01272","result":[8,10,19,29,34,46,14],"process_time":"2025-11-23T00:00:55.277843"}
{"date":"2025-11-25","id":"01273","result":[23,31,32,42,46,48,4],"process_time":"2025-11-26T00:00:52.128543"}
{"date":"2025-11-27","id":"01274","result":[4,5,10,11,28,35,38],"process_time":"2025-11-28T00:00:53.620470"}
{"date":"2025-11-29","id":"01275","result":[4,20,24,27,40,48,9],"process_time":"2025-11-30T00:00:57.885215"}
{"date":"2025-12-02","id":"01276","result":[16,20,24,36,51,54,10],"process_time":"2025-12-03T00:00:48.323884"}
{"date":"2025-12-04","id":"01277","result":[10,29,32,33,44,53,14],"process_time":"2025-12-05T00:00:49.739433"}
{"date":"2025-12-06","id":"01278","result":[12,26,34,37,50,52,15],"process_time":"2025-12-07T00:00:57.664427"}
{"date":"2025-12-09","id":"01279","result":[14,21,26,27,31,43,42],"process_time":"2025-12-10T00:00:51.279107"}
{"date":"2025-12-11","id":"01280","result":[9,13,21,45,48,55,38],"process_time":"2025-12-12T00:01:16.182376"}
{"date":"2025-12-13","id":"01281","result":[5,8,12,18,20,38,52],"process_time":"2025-12-14T00:00:57.940661"}
{"date":"2025-12-16","id":"01282","result":[7,36,37,38,52,55,46],"process_time":"2025-12-17T00:00:57.950930"}
{"date":"2025-12-18","id":"01283","result":[12,14,29,30,39,55,50],"process_time":"2025-12-19T00:00:54.542458"}
{"date":"2025-12-20","id":"01284","result":[22,32,33,35,40,41,23],"process_time":"2025-12-21T00:00:50.783917"}
{"date":"2025-12-23","id":"01285","result":[2,10,16,25,32,38,3],"process_time":"2025-12-24T00:00:51.363924"}
{"date":"2025-12-25","id":"01286","result":[4,6,32,37,40,48,38],"process_time":"2025-12-26T00:00:59.517363"}
{"date":"2025-12-27","id":"01287","result":[16,21,30,37,39,40,13],"process_time":"2025-12-28T00:00:52.930719"}
{"date":"2025-12-30","id":"01288","result":[11,30,35,41,48,55,38],"process_time":"2025-12-31T00:00:53.630435"}
{"date":"2026-01-01","id":"01289","result":[5,16,29,33,39,42,54],"process_time":"2026-01-02T00:00:56.179609"}
{"date":"2026-01-03","id":"01290","result":[10,16,17,23,33,36,42],"process_time":"2026-01-04T00:00:56.590991"}
{"date":"2026-01-06","id":"01291","result":[22,28,29,30,34,47,20],"process_time":"2026-01-07T00:00:54.634335"}
{"date":"2026-01-08","id":"01292","result":[20,22,36,43,45,50,47],"process_time":"2026-01-09T00:00:54.645813"}
{"date":"2026-01-10","id":"01293","result":[9,16,30,33,34,38,49],"process_time":"2026-01-11T00:00:48.139236"}
{"date":"2026-01-13","id":"01294","result":[3,12,25,51,52,55,43],"process_time":"2026-01-14T00:00:52.922646"}
{"date":"2026-01-15","id":"01295","result":[13,21,31,34,48,55,27],"process_time":"2026-01-16T00:00:56.117552"}
{"date":"2026-01-17","id":"01296","result":[14,21,23,25,46,48,54],"process_time":"2026-01-19T21:35:27.120844"}
{"date":"2026-01-20","id":"01297","result":[4,20,26,28,37,41,32],"process_time":"2026-01-21T00:00:50.678079"}
{"date":"2026-01-22","id":"01298","result":[2,20,21,29,36,50,5],"process_time":"2026-01-23T00:00:55.759522"}
{"date":"2026-01-24","id":"01299","result":[14,24,25,30,35,53,18],"process_time":"2026-01-25T00:01:03.898700"}
{"date":"2026-01-27","id":"01300","result":[13,22,32,42,53,54,29],"process_time":"2026-01-29T00:00:55.774585"}
{"date":"2026-01-29","id":"01301","result":[11,15,22,32,34,54,28],"process_time":"2026-01-30T00:00:53.319224"}
{"date":"2026-01-31","id":"01302","result":[10,11,14,17,49,53,4],"process_time":"2026-02-01T00:00:57.771831"}
{"date":"2026-02-03","id":"01303","result":[12,15,18,22,48,53,45],"process_time":"2026-02-04T00:00:54.536676"}
{"date":"2026-02-05","id":"01304","result":[7,13,16,25,26,55,9],"process_time":"2026-02-06T00:00:56.250864"}
{"date":"2026-02-07","id":"01305","result":[3,5,13,15,29,46,1],"process_time":"2026-02-08T00:00:56.025450"}
{"date":"2026-02-10","id":"01306","result":[13,21,22,26,32,55,20],"process_time":"2026-02-11T00:00:56.086988"}
{"date":"2026-02-12","id":"01307","result":[8,17,19,31,32,46,26],"process_time":"2026-02-21T00:00:56.982362"}
{"date":"2026-02-14","id":"01308","result":[2,13,26,32,36,42,48],"process_time":"2026-02-21T00:00:56.975209"}
{"date":"2026-02-19","id":"01309","result":[1,27,30,43,45,46,48],"process_time":"2026-02-21T00:00:56.973082"}
{"date":"2026-02-21","id":"01310","result":[5,7,26,30,41,45,12],"process_time":"2026-02-23T00:01:21.197262"}
{"date":"2026-02-24","id":"01311","result":[5,8,18,30,39,54,51],"process_time":"2026-02-25T09:14:17.252048"}
{"date":"2026-02-26","id":"01312","result":[1,7,10,21,44,51,46],"process_time":"2026-02-27T00:00:58.514222"}
{"date":"2026-02-28","id":"01313","result":[22,25,31,44,51,54,36],"process_time":"2026-03-01T00:00:58.241470"}
{"date":"2026-03-03","id":"01314","result":[7,13,27,29,43,50,25],"process_time":"2026-03-04T00:00:55.331151"}
{"date":"2026-03-05","id":"01315","result":[14,16,35,38,43,51,37],"process_time":"2026-03-06T00:01:02.441420"}
{"date":"2026-03-07","id":"01316","result":[4,32,41,45,50,52,29],"process_time":"2026-03-08T00:01:04.043596"}
{"date":"2026-03-10","id":"01317","result":[3,26,31,39,47,54,20],"process_time":"2026-03-12T00:00:58.996922"}
{"date":"2026-03-12","id":"01318","result":[12,28,36,40,53,55,54],"process_time":"2026-03-13T00:00:57.770966"}
{"date":"2026-03-14","id":"01319","result":[7,16,27,29,47,52,26],"process_time":"2026-03-15T00:00:52.883799"}
{"date":"2026-03-17","id":"01320","result":[12,26,28,43,50,54,52],"process_time":"2026-03-18T00:00:56.999640"}
{"date":"2026-03-19","id":"01321","result":[7,9,17,31,34,36,55],"process_time":"2026-03-20T00:00:58.910179"}
{"date":"2026-03-21","id":"01322","result":[1,6,40,43,47,53,3],"process_time":"2026-03-22T00:00:58.677766"}
{"date":"2026-03-24","id":"01323","result":[12,19,25,26,32,45,3],"process_time":"2026-03-25T00:00:56.311562"}
{"date":"2026-03-26","id":"01324","result":[3,9,10,34,38,44,51],"process_time":"2026-03-27T00:01:03.257686"}
{"date":"2026-03-28","id":"01325","result":[7,13,21,30,33,42,39],"process_time":"2026-03-29T00:00:55.768670"}
{"date":"2026-03-31","id":"01326","result":[15,16,22,38,43,48,11],"process_time":"2026-04-17T21:50:28.281789"}
{"date":"2026-04-02","id":"01327","result":[9,21,32,34,52,53,22],"process_time":"2026-04-17T21:50:28.280228"}
{"date":"2026-04-04","id":"01328","result":[5,7,10,23,30,54,40],"process_time":"2026-04-17T21:50:28.278567"}
{"date":"2026-04-07","id":"01329","result":[1,13,23,31,44,53,32],"process_time":"2026-04-17T21:50:28.276955"}
{"date":"2026-04-09","id":"01330","result":[16,18,22,29,41,53,38],"process_time":"2026-04-17T21:50:28.275303"}
{"date":"2026-04-11","id":"01331","result":[13,26,29,38,49,53,7],"process_time":"2026-04-17T21:50:28.273700"}
{"date":"2026-04-14","id":"01332","result":[8,16,22,35,39,47,28],"process_time":"2026-04-17T21:50:28.272159"}
{"date":"2026-04-16","id":"01333","result":[2,7,15,22,47,52,55],"process_time":"2026-04-17T21:50:28.270537"}
{"date":"2026-04-18","id":"01334","result":[9,19,20,28,37,39,24],"process_time":"2026-05-02T18:53:23.273130"}
{"date":"2026-04-21","id":"01335","result":[8,30,36,39,50,53,15],"process_time":"2026-05-02T18:53:23.270378"}
{"date":"2026-04-23","id":"01336","result":[5,16,17,22,33,53,55],"process_time":"2026-05-02T18:53:23.268125"}
{"date":"2026-04-25","id":"01337","result":[4,7,10,29,41,46,43],"process_time":"2026-05-02T18:53:23.265527"}
{"date":"2026-04-28","id":"01338","result":[24,25,34,51,52,53,35],"process_time":"2026-05-02T18:53:23.263066"}
{"date":"2026-04-30","id":"01339","result":[9,15,21,25,29,50,16],"process_time":"2026-05-02T18:53:23.260631"}
{"date":"2026-05-02","id":"01340","result":[9,21,22,26,33,51,17],"process_time":"2026-05-02T18:53:23.258397"}
{"date":"2026-05-05","id":"01341","result":[4,6,8,17,30,50,32],"process_time":"2026-05-08T12:04:58.261267"}
{"date":"2026-05-07","id":"01342","result":[13,14,33,44,46,50,47],"process_time":"2026-05-08T12:04:58.259525"}
{"date":"2026-05-09","id":"01343","result":[3,10,32,37,45,55,46],"process_time":"2026-05-10T00:01:08.118122"}
{"date":"2026-05-12","id":"01344","result":[2,11,22,26,31,38,15],"process_time":"2026-05-12T18:58:07.963930"}
{"date":"2026-05-14","id":"01345","result":[26,28,39,41,48,55,50],"process_time":"2026-05-15T00:01:10.822513"}
{"date":"2026-05-16","id":"01346","result":[8,25,32,36,39,47,50],"process_time":"2026-05-17T00:01:14.316887"}
{"date":"2026-05-19","id":"01347","result":[12,39,40,45,48,53,21],"process_time":"2026-05-21T18:37:39.362594"}
{"date":"2026-05-21","id":"01348","result":[16,18,20,28,32,34,40],"process_time":"2026-05-22T00:01:24.083070"}
{"date":"2026-05-23","id":"01349","result":[17,21,22,27,38,49,3],"process_time":"2026-05-24T00:01:17.320252"}
{"date":"2026-05-26","id":"01350","result":[1,14,15,19,23,34,29],"process_time":"2026-05-27T00:01:07.369677"}
{"date":"2026-05-28","id":"01351","result":[8,11,21,25,31,53,54],"process_time":"2026-05-29T00:01:21.691058"}
{"date":"2026-05-30","id":"01352","result":[2,8,20,24,25,42,44],"process_time":"2026-06-01T00:01:26.268124"}
{"date":"2026-06-02","id":"01353","result":[1,3,5,16,37,51,42],"process_time":"2026-06-03T00:01:21.144685"}
{"date":"2026-06-04","id":"01354","result":[23,24,28,29,39,43,45],"process_time":"2026-06-05T00:01:07.859417"}
{"date":"2026-06-06","id":"01355","result":[3,11,16,37,39,41,28],"process_time":"2026-06-09T00:01:21.410974"}
{"date":"2026-06-09","id":"01356","result":[6,8,18,27,32,34,35],"process_time":"2026-06-10T00:01:14.808665"}
{"date":"2026-06-11","id":"01357","result":[1,8,17,24,40,48,46],"process_time":"2026-06-12T00:01:08.901627"}
{"date":"2026-06-13","id":"01358","result":[2,8,19,33,36,47,42],"process_time":"2026-06-14T00:01:35.675726"}
{"date":"2026-06-16","id":"01359","result":[2,4,5,7,31,40,14],"process_time":"2026-06-17T00:01:06.923555"}
{"date":"2026-06-18","id":"01360","result":[1,4,14,20,46,49,36],"process_time":"2026-06-19T00:01:20.356025"}
{"date":"2026-06-20","id":"01361","result":[16,23,26,30,52,53,46],"process_time":"2026-06-21T00:01:15.642578"}
{"date":"2026-06-23","id":"01362","result":[1,13,28,38,40,46,5],"process_time":"2026-06-24T00:01:16.333044"}
{"date":"2026-06-25","id":"01363","result":[1,3,8,15,35,55,23],"process_time":"2026-07-04T17:51:54.288114"}
{"date":"2026-06-27","id":"01364","result":[7,16,21,23,28,52,54],"process_time":"2026-07-04T17:51:54.286368"}
{"date":"2026-06-30","id":"01365","result":[5,13,18,22,43,44,47],"process_time":"2026-07-04T17:51:54.284547"}
{"date":"2026-07-02","id":"01366","result":[5,11,28,34,41,42,49],"process_time":"2026-07-04T17:51:54.277165"}
{"date":"2026-07-04","id":"01367","result":[13,15,18,23,31,43,41],"process_time":"2026-07-05T00:01:16.742550"}
{"date":"2026-07-07","id":"01368","result":[4,6,25,32,33,44,8],"process_time":"2026-07-07T20:22:57.020507"}
{"date":"2026-07-09","id":"01369","result":[2,9,10,14,17,49,45],"process_time":"2026-07-09T19:09:10.182272"}
{"date":"2026-07-11","id":"01370","result":[9,17,20,33,41,42,40],"process_time":"2026-07-14T02:09:29.069624"}
`,zd="http://127.0.0.1:8787/logs",Fa=500,Ed=12,Md={power655:bd,power645:Td};let Ad=0;function Od(){return new Date().toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}function xd(c,p){const y=new Blob([p.join(`
`)],{type:"text/csv;charset=utf-8"}),n=URL.createObjectURL(y),z=document.createElement("a");z.href=n,z.download=c,z.click(),URL.revokeObjectURL(n)}function Nd(c){fetch(zd,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).catch(()=>{console.debug("Log server is not running; skipped file history write.")})}function Dd(){const c=P.useRef(null),[p,y]=P.useState(()=>localStorage.getItem("power655_user")),[n,z]=P.useState(q6),[O,M]=P.useState(()=>new Set),[B,U]=P.useState([]),[S,Y]=P.useState(()=>new Map),[q,Q]=P.useState([]),[f0,x0]=P.useState("grid"),[s0,b0]=P.useState(1.4),[n0,c0]=P.useState(null),[_0,t0]=P.useState(null),[Y0,G0]=P.useState(!1),[W,H0]=P.useState(!1),[C0,J0]=P.useState([]),o0=Di[n],T0=P.useMemo(()=>new Set(S.keys()),[S]);function K(b,L){const Z={id:++Ad,at:Od(),level:b,message:L};Q(k=>[Z,...k].slice(0,120)),Nd({...Z,user:p??"anonymous"})}function F0(b){localStorage.setItem("power655_user",b),y(b)}function s2(){localStorage.removeItem("power655_user"),y(null)}P.useEffect(()=>{try{const b=wa(Md[n],o0.dataFileName,o0);M(new Set(b.combinations.map(L=>L.index))),U(b.combinations),Y(new Map),c0(null),J0([]),t0({index:0,id:Date.now()+Math.random()}),K("success",`Auto-loaded data/${o0.dataFileName} for ${o0.label}: ${b.combinations.length.toLocaleString("en-US")} bộ hợp lệ.`),b.errors.length>0&&(b.errors.slice(0,8).forEach(L=>K("warn",L)),b.errors.length>8&&K("warn",`Auto-load còn ${b.errors.length-8} lỗi khác đã rút gọn.`))}catch(b){K("error",`Auto-load data/${o0.dataFileName} thất bại: ${b instanceof Error?b.message:"không đọc được dữ liệu"}.`)}},[o0,n]);function E(b,L=Math.max(s0,3.2)){b0(Math.min(10,Math.max(.55,L))),t0({index:b,id:Date.now()+Math.random()})}function G(){var b;(b=c.current)==null||b.click()}async function w(b){var Z;const L=(Z=b.target.files)==null?void 0:Z[0];if(b.target.value="",!!L)try{const k=await L.text(),m0=wa(k,L.name,o0);M(N0=>{const i0=new Set(N0);return m0.combinations.forEach(p0=>i0.add(p0.index)),i0}),U(N0=>{const i0=new Set(N0.map(i2=>i2.index)),p0=m0.combinations.filter(i2=>!i0.has(i2.index));return[...N0,...p0]}),K("success",`Import file "${L.name}" thành công: ${m0.combinations.length.toLocaleString("en-US")} bộ hợp lệ.`),m0.errors.length>0&&(m0.errors.slice(0,12).forEach(N0=>K("warn",N0)),m0.errors.length>12&&K("warn",`Còn ${m0.errors.length-12} lỗi khác đã bị rút gọn.`))}catch(k){K("error",`Lỗi định dạng file: ${k instanceof Error?k.message:"không đọc được file"}.`)}}function h0(b){const L=l4(b,o0);Y(Z=>{const k=new Map(Z);return k.has(b)?(k.delete(b),K("info",`Bỏ chọn #${b.toLocaleString("en-US")} - ${o1(L)}.`)):(k.set(b,{index:b,numbers:L,selectedAt:new Date().toISOString()}),K("info",`Click chọn #${b.toLocaleString("en-US")} - ${o1(L)}.`)),k})}function g0(b){const L=Qe(Y6(b));if(!Ci(L,o0)){K("error",`Search lỗi: "${b}" không phải bộ 6 số hợp lệ.`);return}const Z=te(L,o0);K("info",`Search ${o1(L)} tại #${Z.toLocaleString("en-US")}.`),E(Z)}function m(){const b=Xe(o0),L=te(b,o0);c0(L),K("success",`Random Pick: ${o1(b)} tại #${L.toLocaleString("en-US")}.`),E(L,Math.max(s0,3.6))}function D(){O.size===0&&K("warn","Calculated Pick cần dữ liệu import; đang dùng random fallback.");const b=eu(O,o0,void 0,{diversityMemory:C0});c0(b.index),J0(L=>[b.numbers,...L].slice(0,Ed)),K("success",`Calculated Pick: ${o1(b.numbers)} tại #${b.index.toLocaleString("en-US")} | score ${b.score.toFixed(4)} | base ${b.baseScore.toFixed(4)} | diversity penalty ${b.diversityPenalty.toFixed(4)} | avg number freq ${b.averageNumberFrequency.toFixed(2)} | avg pair freq ${b.averagePairFrequency.toFixed(2)} | ${b.candidateCount.toLocaleString("en-US")} candidates.`),E(b.index,Math.max(s0,3.6))}async function v(){if(Y0){K("warn","Replay Backtest đang chạy, hãy đợi lượt hiện tại hoàn tất.");return}if(B.length<2){K("warn","Replay Backtest cần ít nhất 2 bộ số lịch sử.");return}G0(!0),K("info",`Replay Backtest comparison started: ${B.length.toLocaleString("en-US")} historical draws.`);try{const b=await gd(B,o0,({drawIndex:i0,totalDraws:p0,results:i2})=>{if(i0%100===0){const q2=i2.find(n2=>n2.name==="Your Algorithm");K("info",`Replay progress ${i0}/${p0}: Your avg=${q2?(q2.totalMatches/i0).toFixed(3):"n/a"}, Random avg=${(i2[0].totalMatches/i0).toFixed(3)}.`)}}),L=B.length-1,Z=[...b].sort((i0,p0)=>Yt(p0,L).avgMatches-Yt(i0,L).avgMatches);K("success",`Replay Backtest done. Tested=${L.toLocaleString("en-US")} draws. Baseline included. No strategy used actual draw data before picking.`);for(const i0 of Z){const p0=Yt(i0,L);K(i0.name==="Your Algorithm"?"success":"info",`${i0.name}: avg=${p0.avgMatches.toFixed(3)} | 3=${p0.hits3} | 4=${p0.hits4} | 5=${p0.hits5} | 6=${p0.hits6} | best=${i0.bestMatch} | ROI=${p0.roi.toFixed(2)}% | dist [${i0.distribution.map((i2,q2)=>`${q2}:${i2}`).join(" ")}].`)}const k=b.find(i0=>i0.name==="Your Algorithm"),m0=b.find(i0=>i0.name==="Random");if(k&&m0){const i0=Yt(k,L),p0=Yt(m0,L);K(i0.avgMatches>p0.avgMatches?"success":"warn",`Your vs Random: avg delta=${(i0.avgMatches-p0.avgMatches).toFixed(3)}, 3+ hits delta=${i0.hits3+i0.hits4+i0.hits5+i0.hits6-(p0.hits3+p0.hits4+p0.hits5+p0.hits6)}.`)}const N0=Z[0].bestPrediction;N0&&(c0(N0.index),E(N0.index,Math.max(s0,3.6)),K("info",`Best replay sample from top strategy ${Z[0].name} at draw #${N0.drawIndex+1}: predicted ${o1(N0.numbers)} vs actual ${o1(N0.actual)}.`))}catch(b){K("error",`Replay Backtest failed: ${b instanceof Error?b.message:"unknown error"}.`)}finally{G0(!1)}}async function x(){if(W){K("warn","Stat Test đang chạy, hãy đợi lượt hiện tại hoàn tất.");return}if(B.length<2){K("warn","Stat Test cần ít nhất 2 bộ số lịch sử.");return}H0(!0),K("info",`Stat Test started: Your Algorithm vs ${Fa.toLocaleString("en-US")} random replay runs on ${B.length-1} draws.`);try{const b=await Sd(B,o0,Fa,(L,Z)=>{L%100===0&&K("info",`Stat Test progress: ${L}/${Z} draws.`)});K("success",`Stat Test avg matches: Your=${b.your.avgMatches.toFixed(4)}, Random=${b.random.avgMatchesMean.toFixed(4)} ± ${b.random.avgMatchesStd.toFixed(4)}, z=${b.avgMatchesZScore.toFixed(2)}, percentile=${b.avgMatchesPercentile.toFixed(1)}%, p≈${b.avgMatchesPValue.toFixed(4)}.`),K(b.hits3PlusPercentile>=95?"success":"info",`Stat Test 3+ hits: Your=${b.your.hits3Plus}, Random=${b.random.hits3PlusMean.toFixed(2)} ± ${b.random.hits3PlusStd.toFixed(2)}, percentile=${b.hits3PlusPercentile.toFixed(1)}%, p≈${b.hits3PlusPValue.toFixed(4)}.`),K(b.roiPercentile>=95?"success":"info",`Stat Test ROI: Your=${b.your.roi.toFixed(2)}%, Random=${b.random.roiMean.toFixed(2)}% ± ${b.random.roiStd.toFixed(2)}%, percentile=${b.roiPercentile.toFixed(1)}%, p≈${b.roiPValue.toFixed(4)}.`),K("info",`Stat Test Your distribution: [${b.your.distribution.map((L,Z)=>`${Z}:${L}`).join(" ")}].`)}catch(b){K("error",`Stat Test failed: ${b instanceof Error?b.message:"unknown error"}.`)}finally{H0(!1)}}function H(){if(S.size===0){K("warn","Export Selected Cells: chưa có ô nào được chọn.");return}const b=["index,n1,n2,n3,n4,n5,n6,selected_at"];[...S.values()].sort((L,Z)=>L.index-Z.index).forEach(L=>b.push([L.index,...L.numbers,L.selectedAt].join(","))),xd("selected-power655-combinations.csv",b),K("success",`Export Selected Cells: ${S.size.toLocaleString("en-US")} dòng CSV.`)}function j(){b0(1.4),t0({index:0,id:Date.now()+Math.random()}),K("info","Reset View về đầu không gian tổ hợp.")}return p?R.jsxs("main",{className:"app-shell",children:[R.jsxs("header",{className:"app-header",children:[R.jsxs("div",{children:[R.jsxs("p",{className:"eyebrow",children:["Vietlott ",o0.label]}),R.jsx("h1",{children:"Combination Space Dashboard"})]}),R.jsxs("div",{className:"header-actions",children:[R.jsx(ud,{value:n,onChange:z}),R.jsx(nd,{onSearch:g0}),R.jsx("button",{onClick:s2,title:"Logout",children:"Logout"})]})]}),R.jsx(cd,{mode:f0,zoom:s0,onImportClick:G,onClearImported:()=>{M(new Set),U([]),J0([]),K("info","Clear Imported Data hoàn tất.")},onClearSelected:()=>{Y(new Map),K("info","Clear Selected Cells hoàn tất.")},onExportSelected:H,onRandomPick:m,onCalculatedPick:D,onBacktestPick:v,onStatTest:x,onResetView:j,onToggleMode:()=>{x0(b=>b==="grid"?"heatmap":"grid"),K("info","Toggle Grid / Heatmap Mode.")},onZoomIn:()=>b0(b=>Math.min(10,Number((b*1.22).toFixed(2)))),onZoomOut:()=>b0(b=>Math.max(.55,Number((b/1.22).toFixed(2))))}),R.jsxs("div",{className:"workspace",children:[R.jsx("section",{className:"grid-section",children:R.jsx(G6,{product:o0,importedIndexes:O,selectedIndexes:T0,randomIndex:n0,focusRequest:_0,mode:f0,zoom:s0,onZoomChange:b0,onSelect:h0})}),R.jsxs("aside",{className:"side-panel",children:[R.jsx(dd,{product:o0,importedCount:O.size,selectedCount:S.size}),R.jsx(ad,{entries:q})]})]}),R.jsx(L6,{inputRef:c,onFileChange:w})]}):R.jsx(rd,{onLogin:F0})}H6.createRoot(document.getElementById("root")).render(R.jsx(P.StrictMode,{children:R.jsx(Dd,{})}));
