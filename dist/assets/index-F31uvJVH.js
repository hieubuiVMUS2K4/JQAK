(function(){const p=document.createElement("link").relList;if(p&&p.supports&&p.supports("modulepreload"))return;for(const E of document.querySelectorAll('link[rel="modulepreload"]'))n(E);new MutationObserver(E=>{for(const A of E)if(A.type==="childList")for(const S of A.addedNodes)S.tagName==="LINK"&&S.rel==="modulepreload"&&n(S)}).observe(document,{childList:!0,subtree:!0});function g(E){const A={};return E.integrity&&(A.integrity=E.integrity),E.referrerPolicy&&(A.referrerPolicy=E.referrerPolicy),E.crossOrigin==="use-credentials"?A.credentials="include":E.crossOrigin==="anonymous"?A.credentials="omit":A.credentials="same-origin",A}function n(E){if(E.ep)return;E.ep=!0;const A=g(E);fetch(E.href,A)}})();var y5={exports:{}},Ht={};/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var R6;function xn(){if(R6)return Ht;R6=1;var c=Symbol.for("react.transitional.element"),p=Symbol.for("react.fragment");function g(n,E,A){var S=null;if(A!==void 0&&(S=""+A),E.key!==void 0&&(S=""+E.key),"key"in E){A={};for(var B in E)B!=="key"&&(A[B]=E[B])}else A=E;return E=A.ref,{$$typeof:c,type:n,key:S,ref:E!==void 0?E:null,props:A}}return Ht.Fragment=p,Ht.jsx=g,Ht.jsxs=g,Ht}var j6;function On(){return j6||(j6=1,y5.exports=xn()),y5.exports}var R=On(),v5={exports:{}},W={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var H6;function Nn(){if(H6)return W;H6=1;var c=Symbol.for("react.transitional.element"),p=Symbol.for("react.portal"),g=Symbol.for("react.fragment"),n=Symbol.for("react.strict_mode"),E=Symbol.for("react.profiler"),A=Symbol.for("react.consumer"),S=Symbol.for("react.context"),B=Symbol.for("react.forward_ref"),U=Symbol.for("react.suspense"),T=Symbol.for("react.memo"),Y=Symbol.for("react.lazy"),q=Symbol.for("react.activity"),Q=Symbol.iterator;function _0(m){return m===null||typeof m!="object"?null:(m=Q&&m[Q]||m["@@iterator"],typeof m=="function"?m:null)}var O0={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},s0=Object.assign,b0={};function n0(m,D,y){this.props=m,this.context=D,this.refs=b0,this.updater=y||O0}n0.prototype.isReactComponent={},n0.prototype.setState=function(m,D){if(typeof m!="object"&&typeof m!="function"&&m!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,m,D,"setState")},n0.prototype.forceUpdate=function(m){this.updater.enqueueForceUpdate(this,m,"forceUpdate")};function o0(){}o0.prototype=n0.prototype;function f0(m,D,y){this.props=m,this.context=D,this.refs=b0,this.updater=y||O0}var t0=f0.prototype=new o0;t0.constructor=f0,s0(t0,n0.prototype),t0.isPureReactComponent=!0;var Y0=Array.isArray;function L0(){}var I={H:null,A:null,T:null,S:null},H0=Object.prototype.hasOwnProperty;function C0(m,D,y){var O=y.ref;return{$$typeof:c,type:m,key:D,ref:O!==void 0?O:null,props:y}}function J0(m,D){return C0(m.type,D,m.props)}function d0(m){return typeof m=="object"&&m!==null&&m.$$typeof===c}function S0(m){var D={"=":"=0",":":"=2"};return"$"+m.replace(/[=:]/g,function(y){return D[y]})}var K=/\/+/g;function F0(m,D){return typeof m=="object"&&m!==null&&m.key!=null?S0(""+m.key):D.toString(36)}function i2(m){switch(m.status){case"fulfilled":return m.value;case"rejected":throw m.reason;default:switch(typeof m.status=="string"?m.then(L0,L0):(m.status="pending",m.then(function(D){m.status==="pending"&&(m.status="fulfilled",m.value=D)},function(D){m.status==="pending"&&(m.status="rejected",m.reason=D)})),m.status){case"fulfilled":return m.value;case"rejected":throw m.reason}}throw m}function M(m,D,y,O,H){var j=typeof m;(j==="undefined"||j==="boolean")&&(m=null);var z=!1;if(m===null)z=!0;else switch(j){case"bigint":case"string":case"number":z=!0;break;case"object":switch(m.$$typeof){case c:case p:z=!0;break;case Y:return z=m._init,M(z(m._payload),D,y,O,H)}}if(z)return H=H(m),z=O===""?"."+F0(m,0):O,Y0(H)?(y="",z!=null&&(y=z.replace(K,"$&/")+"/"),M(H,D,y,"",function(F){return F})):H!=null&&(d0(H)&&(H=J0(H,y+(H.key==null||m&&m.key===H.key?"":(""+H.key).replace(K,"$&/")+"/")+z)),D.push(H)),1;z=0;var G=O===""?".":O+":";if(Y0(m))for(var Z=0;Z<m.length;Z++)O=m[Z],j=G+F0(O,Z),z+=M(O,D,y,j,H);else if(Z=_0(m),typeof Z=="function")for(m=Z.call(m),Z=0;!(O=m.next()).done;)O=O.value,j=G+F0(O,Z++),z+=M(O,D,y,j,H);else if(j==="object"){if(typeof m.then=="function")return M(i2(m),D,y,O,H);throw D=String(m),Error("Objects are not valid as a React child (found: "+(D==="[object Object]"?"object with keys {"+Object.keys(m).join(", ")+"}":D)+"). If you meant to render a collection of children, use an array instead.")}return z}function L(m,D,y){if(m==null)return m;var O=[],H=0;return M(m,O,"","",function(j){return D.call(y,j,H++)}),O}function w(m){if(m._status===-1){var D=m._result;D=D(),D.then(function(y){(m._status===0||m._status===-1)&&(m._status=1,m._result=y)},function(y){(m._status===0||m._status===-1)&&(m._status=2,m._result=y)}),m._status===-1&&(m._status=0,m._result=D)}if(m._status===1)return m._result.default;throw m._result}var h0=typeof reportError=="function"?reportError:function(m){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var D=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof m=="object"&&m!==null&&typeof m.message=="string"?String(m.message):String(m),error:m});if(!window.dispatchEvent(D))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",m);return}console.error(m)},v0={map:L,forEach:function(m,D,y){L(m,function(){D.apply(this,arguments)},y)},count:function(m){var D=0;return L(m,function(){D++}),D},toArray:function(m){return L(m,function(D){return D})||[]},only:function(m){if(!d0(m))throw Error("React.Children.only expected to receive a single React element child.");return m}};return W.Activity=q,W.Children=v0,W.Component=n0,W.Fragment=g,W.Profiler=E,W.PureComponent=f0,W.StrictMode=n,W.Suspense=U,W.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=I,W.__COMPILER_RUNTIME={__proto__:null,c:function(m){return I.H.useMemoCache(m)}},W.cache=function(m){return function(){return m.apply(null,arguments)}},W.cacheSignal=function(){return null},W.cloneElement=function(m,D,y){if(m==null)throw Error("The argument must be a React element, but you passed "+m+".");var O=s0({},m.props),H=m.key;if(D!=null)for(j in D.key!==void 0&&(H=""+D.key),D)!H0.call(D,j)||j==="key"||j==="__self"||j==="__source"||j==="ref"&&D.ref===void 0||(O[j]=D[j]);var j=arguments.length-2;if(j===1)O.children=y;else if(1<j){for(var z=Array(j),G=0;G<j;G++)z[G]=arguments[G+2];O.children=z}return C0(m.type,H,O)},W.createContext=function(m){return m={$$typeof:S,_currentValue:m,_currentValue2:m,_threadCount:0,Provider:null,Consumer:null},m.Provider=m,m.Consumer={$$typeof:A,_context:m},m},W.createElement=function(m,D,y){var O,H={},j=null;if(D!=null)for(O in D.key!==void 0&&(j=""+D.key),D)H0.call(D,O)&&O!=="key"&&O!=="__self"&&O!=="__source"&&(H[O]=D[O]);var z=arguments.length-2;if(z===1)H.children=y;else if(1<z){for(var G=Array(z),Z=0;Z<z;Z++)G[Z]=arguments[Z+2];H.children=G}if(m&&m.defaultProps)for(O in z=m.defaultProps,z)H[O]===void 0&&(H[O]=z[O]);return C0(m,j,H)},W.createRef=function(){return{current:null}},W.forwardRef=function(m){return{$$typeof:B,render:m}},W.isValidElement=d0,W.lazy=function(m){return{$$typeof:Y,_payload:{_status:-1,_result:m},_init:w}},W.memo=function(m,D){return{$$typeof:T,type:m,compare:D===void 0?null:D}},W.startTransition=function(m){var D=I.T,y={};I.T=y;try{var O=m(),H=I.S;H!==null&&H(y,O),typeof O=="object"&&O!==null&&typeof O.then=="function"&&O.then(L0,h0)}catch(j){h0(j)}finally{D!==null&&y.types!==null&&(D.types=y.types),I.T=D}},W.unstable_useCacheRefresh=function(){return I.H.useCacheRefresh()},W.use=function(m){return I.H.use(m)},W.useActionState=function(m,D,y){return I.H.useActionState(m,D,y)},W.useCallback=function(m,D){return I.H.useCallback(m,D)},W.useContext=function(m){return I.H.useContext(m)},W.useDebugValue=function(){},W.useDeferredValue=function(m,D){return I.H.useDeferredValue(m,D)},W.useEffect=function(m,D){return I.H.useEffect(m,D)},W.useEffectEvent=function(m){return I.H.useEffectEvent(m)},W.useId=function(){return I.H.useId()},W.useImperativeHandle=function(m,D,y){return I.H.useImperativeHandle(m,D,y)},W.useInsertionEffect=function(m,D){return I.H.useInsertionEffect(m,D)},W.useLayoutEffect=function(m,D){return I.H.useLayoutEffect(m,D)},W.useMemo=function(m,D){return I.H.useMemo(m,D)},W.useOptimistic=function(m,D){return I.H.useOptimistic(m,D)},W.useReducer=function(m,D,y){return I.H.useReducer(m,D,y)},W.useRef=function(m){return I.H.useRef(m)},W.useState=function(m){return I.H.useState(m)},W.useSyncExternalStore=function(m,D,y){return I.H.useSyncExternalStore(m,D,y)},W.useTransition=function(){return I.H.useTransition()},W.version="19.2.7",W}var q6;function D5(){return q6||(q6=1,v5.exports=Nn()),v5.exports}var k=D5(),g5={exports:{}},qt={},S5={exports:{}},b5={};/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var B6;function Dn(){return B6||(B6=1,(function(c){function p(M,L){var w=M.length;M.push(L);e:for(;0<w;){var h0=w-1>>>1,v0=M[h0];if(0<E(v0,L))M[h0]=L,M[w]=v0,w=h0;else break e}}function g(M){return M.length===0?null:M[0]}function n(M){if(M.length===0)return null;var L=M[0],w=M.pop();if(w!==L){M[0]=w;e:for(var h0=0,v0=M.length,m=v0>>>1;h0<m;){var D=2*(h0+1)-1,y=M[D],O=D+1,H=M[O];if(0>E(y,w))O<v0&&0>E(H,y)?(M[h0]=H,M[O]=w,h0=O):(M[h0]=y,M[D]=w,h0=D);else if(O<v0&&0>E(H,w))M[h0]=H,M[O]=w,h0=O;else break e}}return L}function E(M,L){var w=M.sortIndex-L.sortIndex;return w!==0?w:M.id-L.id}if(c.unstable_now=void 0,typeof performance=="object"&&typeof performance.now=="function"){var A=performance;c.unstable_now=function(){return A.now()}}else{var S=Date,B=S.now();c.unstable_now=function(){return S.now()-B}}var U=[],T=[],Y=1,q=null,Q=3,_0=!1,O0=!1,s0=!1,b0=!1,n0=typeof setTimeout=="function"?setTimeout:null,o0=typeof clearTimeout=="function"?clearTimeout:null,f0=typeof setImmediate<"u"?setImmediate:null;function t0(M){for(var L=g(T);L!==null;){if(L.callback===null)n(T);else if(L.startTime<=M)n(T),L.sortIndex=L.expirationTime,p(U,L);else break;L=g(T)}}function Y0(M){if(s0=!1,t0(M),!O0)if(g(U)!==null)O0=!0,L0||(L0=!0,S0());else{var L=g(T);L!==null&&i2(Y0,L.startTime-M)}}var L0=!1,I=-1,H0=5,C0=-1;function J0(){return b0?!0:!(c.unstable_now()-C0<H0)}function d0(){if(b0=!1,L0){var M=c.unstable_now();C0=M;var L=!0;try{e:{O0=!1,s0&&(s0=!1,o0(I),I=-1),_0=!0;var w=Q;try{t:{for(t0(M),q=g(U);q!==null&&!(q.expirationTime>M&&J0());){var h0=q.callback;if(typeof h0=="function"){q.callback=null,Q=q.priorityLevel;var v0=h0(q.expirationTime<=M);if(M=c.unstable_now(),typeof v0=="function"){q.callback=v0,t0(M),L=!0;break t}q===g(U)&&n(U),t0(M)}else n(U);q=g(U)}if(q!==null)L=!0;else{var m=g(T);m!==null&&i2(Y0,m.startTime-M),L=!1}}break e}finally{q=null,Q=w,_0=!1}L=void 0}}finally{L?S0():L0=!1}}}var S0;if(typeof f0=="function")S0=function(){f0(d0)};else if(typeof MessageChannel<"u"){var K=new MessageChannel,F0=K.port2;K.port1.onmessage=d0,S0=function(){F0.postMessage(null)}}else S0=function(){n0(d0,0)};function i2(M,L){I=n0(function(){M(c.unstable_now())},L)}c.unstable_IdlePriority=5,c.unstable_ImmediatePriority=1,c.unstable_LowPriority=4,c.unstable_NormalPriority=3,c.unstable_Profiling=null,c.unstable_UserBlockingPriority=2,c.unstable_cancelCallback=function(M){M.callback=null},c.unstable_forceFrameRate=function(M){0>M||125<M?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):H0=0<M?Math.floor(1e3/M):5},c.unstable_getCurrentPriorityLevel=function(){return Q},c.unstable_next=function(M){switch(Q){case 1:case 2:case 3:var L=3;break;default:L=Q}var w=Q;Q=L;try{return M()}finally{Q=w}},c.unstable_requestPaint=function(){b0=!0},c.unstable_runWithPriority=function(M,L){switch(M){case 1:case 2:case 3:case 4:case 5:break;default:M=3}var w=Q;Q=M;try{return L()}finally{Q=w}},c.unstable_scheduleCallback=function(M,L,w){var h0=c.unstable_now();switch(typeof w=="object"&&w!==null?(w=w.delay,w=typeof w=="number"&&0<w?h0+w:h0):w=h0,M){case 1:var v0=-1;break;case 2:v0=250;break;case 5:v0=1073741823;break;case 4:v0=1e4;break;default:v0=5e3}return v0=w+v0,M={id:Y++,callback:L,priorityLevel:M,startTime:w,expirationTime:v0,sortIndex:-1},w>h0?(M.sortIndex=w,p(T,M),g(U)===null&&M===g(T)&&(s0?(o0(I),I=-1):s0=!0,i2(Y0,w-h0))):(M.sortIndex=v0,p(U,M),O0||_0||(O0=!0,L0||(L0=!0,S0()))),M},c.unstable_shouldYield=J0,c.unstable_wrapCallback=function(M){var L=Q;return function(){var w=Q;Q=L;try{return M.apply(this,arguments)}finally{Q=w}}}})(b5)),b5}var Y6;function Cn(){return Y6||(Y6=1,S5.exports=Dn()),S5.exports}var z5={exports:{}},l2={};/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L6;function Un(){if(L6)return l2;L6=1;var c=D5();function p(U){var T="https://react.dev/errors/"+U;if(1<arguments.length){T+="?args[]="+encodeURIComponent(arguments[1]);for(var Y=2;Y<arguments.length;Y++)T+="&args[]="+encodeURIComponent(arguments[Y])}return"Minified React error #"+U+"; visit "+T+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function g(){}var n={d:{f:g,r:function(){throw Error(p(522))},D:g,C:g,L:g,m:g,X:g,S:g,M:g},p:0,findDOMNode:null},E=Symbol.for("react.portal");function A(U,T,Y){var q=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:E,key:q==null?null:""+q,children:U,containerInfo:T,implementation:Y}}var S=c.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;function B(U,T){if(U==="font")return"";if(typeof T=="string")return T==="use-credentials"?T:""}return l2.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=n,l2.createPortal=function(U,T){var Y=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!T||T.nodeType!==1&&T.nodeType!==9&&T.nodeType!==11)throw Error(p(299));return A(U,T,null,Y)},l2.flushSync=function(U){var T=S.T,Y=n.p;try{if(S.T=null,n.p=2,U)return U()}finally{S.T=T,n.p=Y,n.d.f()}},l2.preconnect=function(U,T){typeof U=="string"&&(T?(T=T.crossOrigin,T=typeof T=="string"?T==="use-credentials"?T:"":void 0):T=null,n.d.C(U,T))},l2.prefetchDNS=function(U){typeof U=="string"&&n.d.D(U)},l2.preinit=function(U,T){if(typeof U=="string"&&T&&typeof T.as=="string"){var Y=T.as,q=B(Y,T.crossOrigin),Q=typeof T.integrity=="string"?T.integrity:void 0,_0=typeof T.fetchPriority=="string"?T.fetchPriority:void 0;Y==="style"?n.d.S(U,typeof T.precedence=="string"?T.precedence:void 0,{crossOrigin:q,integrity:Q,fetchPriority:_0}):Y==="script"&&n.d.X(U,{crossOrigin:q,integrity:Q,fetchPriority:_0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}},l2.preinitModule=function(U,T){if(typeof U=="string")if(typeof T=="object"&&T!==null){if(T.as==null||T.as==="script"){var Y=B(T.as,T.crossOrigin);n.d.M(U,{crossOrigin:Y,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0})}}else T==null&&n.d.M(U)},l2.preload=function(U,T){if(typeof U=="string"&&typeof T=="object"&&T!==null&&typeof T.as=="string"){var Y=T.as,q=B(Y,T.crossOrigin);n.d.L(U,Y,{crossOrigin:q,integrity:typeof T.integrity=="string"?T.integrity:void 0,nonce:typeof T.nonce=="string"?T.nonce:void 0,type:typeof T.type=="string"?T.type:void 0,fetchPriority:typeof T.fetchPriority=="string"?T.fetchPriority:void 0,referrerPolicy:typeof T.referrerPolicy=="string"?T.referrerPolicy:void 0,imageSrcSet:typeof T.imageSrcSet=="string"?T.imageSrcSet:void 0,imageSizes:typeof T.imageSizes=="string"?T.imageSizes:void 0,media:typeof T.media=="string"?T.media:void 0})}},l2.preloadModule=function(U,T){if(typeof U=="string")if(T){var Y=B(T.as,T.crossOrigin);n.d.m(U,{as:typeof T.as=="string"&&T.as!=="script"?T.as:void 0,crossOrigin:Y,integrity:typeof T.integrity=="string"?T.integrity:void 0})}else n.d.m(U)},l2.requestFormReset=function(U){n.d.r(U)},l2.unstable_batchedUpdates=function(U,T){return U(T)},l2.useFormState=function(U,T,Y){return S.H.useFormState(U,T,Y)},l2.useFormStatus=function(){return S.H.useHostTransitionStatus()},l2.version="19.2.7",l2}var G6;function Rn(){if(G6)return z5.exports;G6=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(p){console.error(p)}}return c(),z5.exports=Un(),z5.exports}/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var X6;function jn(){if(X6)return qt;X6=1;var c=Cn(),p=D5(),g=Rn();function n(e){var t="https://react.dev/errors/"+e;if(1<arguments.length){t+="?args[]="+encodeURIComponent(arguments[1]);for(var s=2;s<arguments.length;s++)t+="&args[]="+encodeURIComponent(arguments[s])}return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}function E(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function A(e){var t=e,s=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(s=t.return),e=t.return;while(e)}return t.tag===3?s:null}function S(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function B(e){if(e.tag===31){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function U(e){if(A(e)!==e)throw Error(n(188))}function T(e){var t=e.alternate;if(!t){if(t=A(e),t===null)throw Error(n(188));return t!==e?null:e}for(var s=e,i=t;;){var r=s.return;if(r===null)break;var l=r.alternate;if(l===null){if(i=r.return,i!==null){s=i;continue}break}if(r.child===l.child){for(l=r.child;l;){if(l===s)return U(r),e;if(l===i)return U(r),t;l=l.sibling}throw Error(n(188))}if(s.return!==i.return)s=r,i=l;else{for(var a=!1,u=r.child;u;){if(u===s){a=!0,s=r,i=l;break}if(u===i){a=!0,i=r,s=l;break}u=u.sibling}if(!a){for(u=l.child;u;){if(u===s){a=!0,s=l,i=r;break}if(u===i){a=!0,i=l,s=r;break}u=u.sibling}if(!a)throw Error(n(189))}}if(s.alternate!==i)throw Error(n(190))}if(s.tag!==3)throw Error(n(188));return s.stateNode.current===s?e:t}function Y(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e;for(e=e.child;e!==null;){if(t=Y(e),t!==null)return t;e=e.sibling}return null}var q=Object.assign,Q=Symbol.for("react.element"),_0=Symbol.for("react.transitional.element"),O0=Symbol.for("react.portal"),s0=Symbol.for("react.fragment"),b0=Symbol.for("react.strict_mode"),n0=Symbol.for("react.profiler"),o0=Symbol.for("react.consumer"),f0=Symbol.for("react.context"),t0=Symbol.for("react.forward_ref"),Y0=Symbol.for("react.suspense"),L0=Symbol.for("react.suspense_list"),I=Symbol.for("react.memo"),H0=Symbol.for("react.lazy"),C0=Symbol.for("react.activity"),J0=Symbol.for("react.memo_cache_sentinel"),d0=Symbol.iterator;function S0(e){return e===null||typeof e!="object"?null:(e=d0&&e[d0]||e["@@iterator"],typeof e=="function"?e:null)}var K=Symbol.for("react.client.reference");function F0(e){if(e==null)return null;if(typeof e=="function")return e.$$typeof===K?null:e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case s0:return"Fragment";case n0:return"Profiler";case b0:return"StrictMode";case Y0:return"Suspense";case L0:return"SuspenseList";case C0:return"Activity"}if(typeof e=="object")switch(e.$$typeof){case O0:return"Portal";case f0:return e.displayName||"Context";case o0:return(e._context.displayName||"Context")+".Consumer";case t0:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case I:return t=e.displayName||null,t!==null?t:F0(e.type)||"Memo";case H0:t=e._payload,e=e._init;try{return F0(e(t))}catch{}}return null}var i2=Array.isArray,M=p.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,L=g.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,w={pending:!1,data:null,method:null,action:null},h0=[],v0=-1;function m(e){return{current:e}}function D(e){0>v0||(e.current=h0[v0],h0[v0]=null,v0--)}function y(e,t){v0++,h0[v0]=e.current,e.current=t}var O=m(null),H=m(null),j=m(null),z=m(null);function G(e,t){switch(y(j,t),y(H,e),y(O,null),t.nodeType){case 9:case 11:e=(e=t.documentElement)&&(e=e.namespaceURI)?s6(e):0;break;default:if(e=t.tagName,t=t.namespaceURI)t=s6(t),e=i6(t,e);else switch(e){case"svg":e=1;break;case"math":e=2;break;default:e=0}}D(O),y(O,e)}function Z(){D(O),D(H),D(j)}function F(e){e.memoizedState!==null&&y(z,e);var t=O.current,s=i6(t,e.type);t!==s&&(y(H,e),y(O,s))}function m0(e){H.current===e&&(D(O),D(H)),z.current===e&&(D(z),Ct._currentValue=w)}var N0,i0;function p0(e){if(N0===void 0)try{throw Error()}catch(s){var t=s.stack.trim().match(/\n( *(at )?)/);N0=t&&t[1]||"",i0=-1<s.stack.indexOf(`
    at`)?" (<anonymous>)":-1<s.stack.indexOf("@")?"@unknown:0:0":""}return`
`+N0+e+i0}var r2=!1;function q2(e,t){if(!e||r2)return"";r2=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{var i={DetermineComponentFrameRoot:function(){try{if(t){var C=function(){throw Error()};if(Object.defineProperty(C.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(C,[])}catch(b){var v=b}Reflect.construct(e,[],C)}else{try{C.call()}catch(b){v=b}e.call(C.prototype)}}else{try{throw Error()}catch(b){v=b}(C=e())&&typeof C.catch=="function"&&C.catch(function(){})}}catch(b){if(b&&v&&typeof b.stack=="string")return[b.stack,v.stack]}return[null,null]}};i.DetermineComponentFrameRoot.displayName="DetermineComponentFrameRoot";var r=Object.getOwnPropertyDescriptor(i.DetermineComponentFrameRoot,"name");r&&r.configurable&&Object.defineProperty(i.DetermineComponentFrameRoot,"name",{value:"DetermineComponentFrameRoot"});var l=i.DetermineComponentFrameRoot(),a=l[0],u=l[1];if(a&&u){var d=a.split(`
`),h=u.split(`
`);for(r=i=0;i<d.length&&!d[i].includes("DetermineComponentFrameRoot");)i++;for(;r<h.length&&!h[r].includes("DetermineComponentFrameRoot");)r++;if(i===d.length||r===h.length)for(i=d.length-1,r=h.length-1;1<=i&&0<=r&&d[i]!==h[r];)r--;for(;1<=i&&0<=r;i--,r--)if(d[i]!==h[r]){if(i!==1||r!==1)do if(i--,r--,0>r||d[i]!==h[r]){var x=`
`+d[i].replace(" at new "," at ");return e.displayName&&x.includes("<anonymous>")&&(x=x.replace("<anonymous>",e.displayName)),x}while(1<=i&&0<=r);break}}}finally{r2=!1,Error.prepareStackTrace=s}return(s=e?e.displayName||e.name:"")?p0(s):""}function n2(e,t){switch(e.tag){case 26:case 27:case 5:return p0(e.type);case 16:return p0("Lazy");case 13:return e.child!==t&&t!==null?p0("Suspense Fallback"):p0("Suspense");case 19:return p0("SuspenseList");case 0:case 15:return q2(e.type,!1);case 11:return q2(e.type.render,!1);case 1:return q2(e.type,!0);case 31:return p0("Activity");default:return""}}function J2(e){try{var t="",s=null;do t+=n2(e,s),s=e,e=e.return;while(e);return t}catch(i){return`
Error generating stack: `+i.message+`
`+i.stack}}var G2=Object.prototype.hasOwnProperty,X2=c.unstable_scheduleCallback,se=c.unstable_cancelCallback,R5=c.unstable_shouldYield,la=c.unstable_requestPaint,h2=c.unstable_now,aa=c.unstable_getCurrentPriorityLevel,j5=c.unstable_ImmediatePriority,H5=c.unstable_UserBlockingPriority,Lt=c.unstable_NormalPriority,ua=c.unstable_LowPriority,q5=c.unstable_IdlePriority,na=c.log,da=c.unstable_setDisableYieldValue,Ze=null,T2=null;function m1(e){if(typeof na=="function"&&da(e),T2&&typeof T2.setStrictMode=="function")try{T2.setStrictMode(Ze,e)}catch{}}var y2=Math.clz32?Math.clz32:ma,ca=Math.log,oa=Math.LN2;function ma(e){return e>>>=0,e===0?32:31-(ca(e)/oa|0)|0}var Gt=256,Xt=262144,Qt=4194304;function B1(e){var t=e&42;if(t!==0)return t;switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:return 64;case 128:return 128;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:return e&261888;case 262144:case 524288:case 1048576:case 2097152:return e&3932160;case 4194304:case 8388608:case 16777216:case 33554432:return e&62914560;case 67108864:return 67108864;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 0;default:return e}}function Zt(e,t,s){var i=e.pendingLanes;if(i===0)return 0;var r=0,l=e.suspendedLanes,a=e.pingedLanes;e=e.warmLanes;var u=i&134217727;return u!==0?(i=u&~l,i!==0?r=B1(i):(a&=u,a!==0?r=B1(a):s||(s=u&~e,s!==0&&(r=B1(s))))):(u=i&~l,u!==0?r=B1(u):a!==0?r=B1(a):s||(s=i&~e,s!==0&&(r=B1(s)))),r===0?0:t!==0&&t!==r&&(t&l)===0&&(l=r&-r,s=t&-t,l>=s||l===32&&(s&4194048)!==0)?t:r}function Ve(e,t){return(e.pendingLanes&~(e.suspendedLanes&~e.pingedLanes)&t)===0}function pa(e,t){switch(e){case 1:case 2:case 4:case 8:case 64:return t+250;case 16:case 32:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:return-1;case 67108864:case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function B5(){var e=Qt;return Qt<<=1,(Qt&62914560)===0&&(Qt=4194304),e}function a4(e){for(var t=[],s=0;31>s;s++)t.push(e);return t}function Ke(e,t){e.pendingLanes|=t,t!==268435456&&(e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0)}function _a(e,t,s,i,r,l){var a=e.pendingLanes;e.pendingLanes=s,e.suspendedLanes=0,e.pingedLanes=0,e.warmLanes=0,e.expiredLanes&=s,e.entangledLanes&=s,e.errorRecoveryDisabledLanes&=s,e.shellSuspendCounter=0;var u=e.entanglements,d=e.expirationTimes,h=e.hiddenUpdates;for(s=a&~s;0<s;){var x=31-y2(s),C=1<<x;u[x]=0,d[x]=-1;var v=h[x];if(v!==null)for(h[x]=null,x=0;x<v.length;x++){var b=v[x];b!==null&&(b.lane&=-536870913)}s&=~C}i!==0&&Y5(e,i,0),l!==0&&r===0&&e.tag!==0&&(e.suspendedLanes|=l&~(a&~t))}function Y5(e,t,s){e.pendingLanes|=t,e.suspendedLanes&=~t;var i=31-y2(t);e.entangledLanes|=t,e.entanglements[i]=e.entanglements[i]|1073741824|s&261930}function L5(e,t){var s=e.entangledLanes|=t;for(e=e.entanglements;s;){var i=31-y2(s),r=1<<i;r&t|e[i]&t&&(e[i]|=t),s&=~r}}function G5(e,t){var s=t&-t;return s=(s&42)!==0?1:u4(s),(s&(e.suspendedLanes|t))!==0?0:s}function u4(e){switch(e){case 2:e=1;break;case 8:e=4;break;case 32:e=16;break;case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:e=128;break;case 268435456:e=134217728;break;default:e=0}return e}function n4(e){return e&=-e,2<e?8<e?(e&134217727)!==0?32:268435456:8:2}function X5(){var e=L.p;return e!==0?e:(e=window.event,e===void 0?32:A6(e.type))}function Q5(e,t){var s=L.p;try{return L.p=e,t()}finally{L.p=s}}var p1=Math.random().toString(36).slice(2),W0="__reactFiber$"+p1,d2="__reactProps$"+p1,ie="__reactContainer$"+p1,d4="__reactEvents$"+p1,fa="__reactListeners$"+p1,ha="__reactHandles$"+p1,Z5="__reactResources$"+p1,Je="__reactMarker$"+p1;function c4(e){delete e[W0],delete e[d2],delete e[d4],delete e[fa],delete e[ha]}function re(e){var t=e[W0];if(t)return t;for(var s=e.parentNode;s;){if(t=s[ie]||s[W0]){if(s=t.alternate,t.child!==null||s!==null&&s.child!==null)for(e=c6(e);e!==null;){if(s=e[W0])return s;e=c6(e)}return t}e=s,s=e.parentNode}return null}function le(e){if(e=e[W0]||e[ie]){var t=e.tag;if(t===5||t===6||t===13||t===31||t===26||t===27||t===3)return e}return null}function we(e){var t=e.tag;if(t===5||t===26||t===27||t===6)return e.stateNode;throw Error(n(33))}function ae(e){var t=e[Z5];return t||(t=e[Z5]={hoistableStyles:new Map,hoistableScripts:new Map}),t}function $0(e){e[Je]=!0}var V5=new Set,K5={};function Y1(e,t){ue(e,t),ue(e+"Capture",t)}function ue(e,t){for(K5[e]=t,e=0;e<t.length;e++)V5.add(t[e])}var Ta=RegExp("^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"),J5={},w5={};function ya(e){return G2.call(w5,e)?!0:G2.call(J5,e)?!1:Ta.test(e)?w5[e]=!0:(J5[e]=!0,!1)}function Vt(e,t,s){if(ya(t))if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":e.removeAttribute(t);return;case"boolean":var i=t.toLowerCase().slice(0,5);if(i!=="data-"&&i!=="aria-"){e.removeAttribute(t);return}}e.setAttribute(t,""+s)}}function Kt(e,t,s){if(s===null)e.removeAttribute(t);else{switch(typeof s){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(t);return}e.setAttribute(t,""+s)}}function w2(e,t,s,i){if(i===null)e.removeAttribute(s);else{switch(typeof i){case"undefined":case"function":case"symbol":case"boolean":e.removeAttribute(s);return}e.setAttributeNS(t,s,""+i)}}function A2(e){switch(typeof e){case"bigint":case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function $5(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function va(e,t,s){var i=Object.getOwnPropertyDescriptor(e.constructor.prototype,t);if(!e.hasOwnProperty(t)&&typeof i<"u"&&typeof i.get=="function"&&typeof i.set=="function"){var r=i.get,l=i.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return r.call(this)},set:function(a){s=""+a,l.call(this,a)}}),Object.defineProperty(e,t,{enumerable:i.enumerable}),{getValue:function(){return s},setValue:function(a){s=""+a},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function o4(e){if(!e._valueTracker){var t=$5(e)?"checked":"value";e._valueTracker=va(e,t,""+e[t])}}function k5(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var s=t.getValue(),i="";return e&&(i=$5(e)?e.checked?"true":"false":e.value),e=i,e!==s?(t.setValue(e),!0):!1}function Jt(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}var ga=/[\n"\\]/g;function x2(e){return e.replace(ga,function(t){return"\\"+t.charCodeAt(0).toString(16)+" "})}function m4(e,t,s,i,r,l,a,u){e.name="",a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"?e.type=a:e.removeAttribute("type"),t!=null?a==="number"?(t===0&&e.value===""||e.value!=t)&&(e.value=""+A2(t)):e.value!==""+A2(t)&&(e.value=""+A2(t)):a!=="submit"&&a!=="reset"||e.removeAttribute("value"),t!=null?p4(e,a,A2(t)):s!=null?p4(e,a,A2(s)):i!=null&&e.removeAttribute("value"),r==null&&l!=null&&(e.defaultChecked=!!l),r!=null&&(e.checked=r&&typeof r!="function"&&typeof r!="symbol"),u!=null&&typeof u!="function"&&typeof u!="symbol"&&typeof u!="boolean"?e.name=""+A2(u):e.removeAttribute("name")}function F5(e,t,s,i,r,l,a,u){if(l!=null&&typeof l!="function"&&typeof l!="symbol"&&typeof l!="boolean"&&(e.type=l),t!=null||s!=null){if(!(l!=="submit"&&l!=="reset"||t!=null)){o4(e);return}s=s!=null?""+A2(s):"",t=t!=null?""+A2(t):s,u||t===e.value||(e.value=t),e.defaultValue=t}i=i??r,i=typeof i!="function"&&typeof i!="symbol"&&!!i,e.checked=u?e.checked:!!i,e.defaultChecked=!!i,a!=null&&typeof a!="function"&&typeof a!="symbol"&&typeof a!="boolean"&&(e.name=a),o4(e)}function p4(e,t,s){t==="number"&&Jt(e.ownerDocument)===e||e.defaultValue===""+s||(e.defaultValue=""+s)}function ne(e,t,s,i){if(e=e.options,t){t={};for(var r=0;r<s.length;r++)t["$"+s[r]]=!0;for(s=0;s<e.length;s++)r=t.hasOwnProperty("$"+e[s].value),e[s].selected!==r&&(e[s].selected=r),r&&i&&(e[s].defaultSelected=!0)}else{for(s=""+A2(s),t=null,r=0;r<e.length;r++){if(e[r].value===s){e[r].selected=!0,i&&(e[r].defaultSelected=!0);return}t!==null||e[r].disabled||(t=e[r])}t!==null&&(t.selected=!0)}}function W5(e,t,s){if(t!=null&&(t=""+A2(t),t!==e.value&&(e.value=t),s==null)){e.defaultValue!==t&&(e.defaultValue=t);return}e.defaultValue=s!=null?""+A2(s):""}function I5(e,t,s,i){if(t==null){if(i!=null){if(s!=null)throw Error(n(92));if(i2(i)){if(1<i.length)throw Error(n(93));i=i[0]}s=i}s==null&&(s=""),t=s}s=A2(t),e.defaultValue=s,i=e.textContent,i===s&&i!==""&&i!==null&&(e.value=i),o4(e)}function de(e,t){if(t){var s=e.firstChild;if(s&&s===e.lastChild&&s.nodeType===3){s.nodeValue=t;return}}e.textContent=t}var Sa=new Set("animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(" "));function P5(e,t,s){var i=t.indexOf("--")===0;s==null||typeof s=="boolean"||s===""?i?e.setProperty(t,""):t==="float"?e.cssFloat="":e[t]="":i?e.setProperty(t,s):typeof s!="number"||s===0||Sa.has(t)?t==="float"?e.cssFloat=s:e[t]=(""+s).trim():e[t]=s+"px"}function ei(e,t,s){if(t!=null&&typeof t!="object")throw Error(n(62));if(e=e.style,s!=null){for(var i in s)!s.hasOwnProperty(i)||t!=null&&t.hasOwnProperty(i)||(i.indexOf("--")===0?e.setProperty(i,""):i==="float"?e.cssFloat="":e[i]="");for(var r in t)i=t[r],t.hasOwnProperty(r)&&s[r]!==i&&P5(e,r,i)}else for(var l in t)t.hasOwnProperty(l)&&P5(e,l,t[l])}function _4(e){if(e.indexOf("-")===-1)return!1;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ba=new Map([["acceptCharset","accept-charset"],["htmlFor","for"],["httpEquiv","http-equiv"],["crossOrigin","crossorigin"],["accentHeight","accent-height"],["alignmentBaseline","alignment-baseline"],["arabicForm","arabic-form"],["baselineShift","baseline-shift"],["capHeight","cap-height"],["clipPath","clip-path"],["clipRule","clip-rule"],["colorInterpolation","color-interpolation"],["colorInterpolationFilters","color-interpolation-filters"],["colorProfile","color-profile"],["colorRendering","color-rendering"],["dominantBaseline","dominant-baseline"],["enableBackground","enable-background"],["fillOpacity","fill-opacity"],["fillRule","fill-rule"],["floodColor","flood-color"],["floodOpacity","flood-opacity"],["fontFamily","font-family"],["fontSize","font-size"],["fontSizeAdjust","font-size-adjust"],["fontStretch","font-stretch"],["fontStyle","font-style"],["fontVariant","font-variant"],["fontWeight","font-weight"],["glyphName","glyph-name"],["glyphOrientationHorizontal","glyph-orientation-horizontal"],["glyphOrientationVertical","glyph-orientation-vertical"],["horizAdvX","horiz-adv-x"],["horizOriginX","horiz-origin-x"],["imageRendering","image-rendering"],["letterSpacing","letter-spacing"],["lightingColor","lighting-color"],["markerEnd","marker-end"],["markerMid","marker-mid"],["markerStart","marker-start"],["overlinePosition","overline-position"],["overlineThickness","overline-thickness"],["paintOrder","paint-order"],["panose-1","panose-1"],["pointerEvents","pointer-events"],["renderingIntent","rendering-intent"],["shapeRendering","shape-rendering"],["stopColor","stop-color"],["stopOpacity","stop-opacity"],["strikethroughPosition","strikethrough-position"],["strikethroughThickness","strikethrough-thickness"],["strokeDasharray","stroke-dasharray"],["strokeDashoffset","stroke-dashoffset"],["strokeLinecap","stroke-linecap"],["strokeLinejoin","stroke-linejoin"],["strokeMiterlimit","stroke-miterlimit"],["strokeOpacity","stroke-opacity"],["strokeWidth","stroke-width"],["textAnchor","text-anchor"],["textDecoration","text-decoration"],["textRendering","text-rendering"],["transformOrigin","transform-origin"],["underlinePosition","underline-position"],["underlineThickness","underline-thickness"],["unicodeBidi","unicode-bidi"],["unicodeRange","unicode-range"],["unitsPerEm","units-per-em"],["vAlphabetic","v-alphabetic"],["vHanging","v-hanging"],["vIdeographic","v-ideographic"],["vMathematical","v-mathematical"],["vectorEffect","vector-effect"],["vertAdvY","vert-adv-y"],["vertOriginX","vert-origin-x"],["vertOriginY","vert-origin-y"],["wordSpacing","word-spacing"],["writingMode","writing-mode"],["xmlnsXlink","xmlns:xlink"],["xHeight","x-height"]]),za=/^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;function wt(e){return za.test(""+e)?"javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')":e}function $2(){}var f4=null;function h4(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var ce=null,oe=null;function ti(e){var t=le(e);if(t&&(e=t.stateNode)){var s=e[d2]||null;e:switch(e=t.stateNode,t.type){case"input":if(m4(e,s.value,s.defaultValue,s.defaultValue,s.checked,s.defaultChecked,s.type,s.name),t=s.name,s.type==="radio"&&t!=null){for(s=e;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll('input[name="'+x2(""+t)+'"][type="radio"]'),t=0;t<s.length;t++){var i=s[t];if(i!==e&&i.form===e.form){var r=i[d2]||null;if(!r)throw Error(n(90));m4(i,r.value,r.defaultValue,r.defaultValue,r.checked,r.defaultChecked,r.type,r.name)}}for(t=0;t<s.length;t++)i=s[t],i.form===e.form&&k5(i)}break e;case"textarea":W5(e,s.value,s.defaultValue);break e;case"select":t=s.value,t!=null&&ne(e,!!s.multiple,t,!1)}}}var T4=!1;function si(e,t,s){if(T4)return e(t,s);T4=!0;try{var i=e(t);return i}finally{if(T4=!1,(ce!==null||oe!==null)&&(j3(),ce&&(t=ce,e=oe,oe=ce=null,ti(t),e)))for(t=0;t<e.length;t++)ti(e[t])}}function $e(e,t){var s=e.stateNode;if(s===null)return null;var i=s[d2]||null;if(i===null)return null;s=i[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(e=e.type,i=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!i;break e;default:e=!1}if(e)return null;if(s&&typeof s!="function")throw Error(n(231,t,typeof s));return s}var k2=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),y4=!1;if(k2)try{var ke={};Object.defineProperty(ke,"passive",{get:function(){y4=!0}}),window.addEventListener("test",ke,ke),window.removeEventListener("test",ke,ke)}catch{y4=!1}var _1=null,v4=null,$t=null;function ii(){if($t)return $t;var e,t=v4,s=t.length,i,r="value"in _1?_1.value:_1.textContent,l=r.length;for(e=0;e<s&&t[e]===r[e];e++);var a=s-e;for(i=1;i<=a&&t[s-i]===r[l-i];i++);return $t=r.slice(e,1<i?1-i:void 0)}function kt(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Ft(){return!0}function ri(){return!1}function c2(e){function t(s,i,r,l,a){this._reactName=s,this._targetInst=r,this.type=i,this.nativeEvent=l,this.target=a,this.currentTarget=null;for(var u in e)e.hasOwnProperty(u)&&(s=e[u],this[u]=s?s(l):l[u]);return this.isDefaultPrevented=(l.defaultPrevented!=null?l.defaultPrevented:l.returnValue===!1)?Ft:ri,this.isPropagationStopped=ri,this}return q(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=Ft)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=Ft)},persist:function(){},isPersistent:Ft}),t}var L1={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Wt=c2(L1),Fe=q({},L1,{view:0,detail:0}),Ea=c2(Fe),g4,S4,We,It=q({},Fe,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:z4,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==We&&(We&&e.type==="mousemove"?(g4=e.screenX-We.screenX,S4=e.screenY-We.screenY):S4=g4=0,We=e),g4)},movementY:function(e){return"movementY"in e?e.movementY:S4}}),li=c2(It),Ma=q({},It,{dataTransfer:0}),Aa=c2(Ma),xa=q({},Fe,{relatedTarget:0}),b4=c2(xa),Oa=q({},L1,{animationName:0,elapsedTime:0,pseudoElement:0}),Na=c2(Oa),Da=q({},L1,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),Ca=c2(Da),Ua=q({},L1,{data:0}),ai=c2(Ua),Ra={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ja={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ha={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function qa(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=Ha[e])?!!t[e]:!1}function z4(){return qa}var Ba=q({},Fe,{key:function(e){if(e.key){var t=Ra[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=kt(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?ja[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:z4,charCode:function(e){return e.type==="keypress"?kt(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?kt(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ya=c2(Ba),La=q({},It,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),ui=c2(La),Ga=q({},Fe,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:z4}),Xa=c2(Ga),Qa=q({},L1,{propertyName:0,elapsedTime:0,pseudoElement:0}),Za=c2(Qa),Va=q({},It,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ka=c2(Va),Ja=q({},L1,{newState:0,oldState:0}),wa=c2(Ja),$a=[9,13,27,32],E4=k2&&"CompositionEvent"in window,Ie=null;k2&&"documentMode"in document&&(Ie=document.documentMode);var ka=k2&&"TextEvent"in window&&!Ie,ni=k2&&(!E4||Ie&&8<Ie&&11>=Ie),di=" ",ci=!1;function oi(e,t){switch(e){case"keyup":return $a.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function mi(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var me=!1;function Fa(e,t){switch(e){case"compositionend":return mi(t);case"keypress":return t.which!==32?null:(ci=!0,di);case"textInput":return e=t.data,e===di&&ci?null:e;default:return null}}function Wa(e,t){if(me)return e==="compositionend"||!E4&&oi(e,t)?(e=ii(),$t=v4=_1=null,me=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return ni&&t.locale!=="ko"?null:t.data;default:return null}}var Ia={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function pi(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Ia[e.type]:t==="textarea"}function _i(e,t,s,i){ce?oe?oe.push(i):oe=[i]:ce=i,t=X3(t,"onChange"),0<t.length&&(s=new Wt("onChange","change",null,s,i),e.push({event:s,listeners:t}))}var Pe=null,et=null;function Pa(e){Fl(e,0)}function Pt(e){var t=we(e);if(k5(t))return e}function fi(e,t){if(e==="change")return t}var hi=!1;if(k2){var M4;if(k2){var A4="oninput"in document;if(!A4){var Ti=document.createElement("div");Ti.setAttribute("oninput","return;"),A4=typeof Ti.oninput=="function"}M4=A4}else M4=!1;hi=M4&&(!document.documentMode||9<document.documentMode)}function yi(){Pe&&(Pe.detachEvent("onpropertychange",vi),et=Pe=null)}function vi(e){if(e.propertyName==="value"&&Pt(et)){var t=[];_i(t,et,e,h4(e)),si(Pa,t)}}function eu(e,t,s){e==="focusin"?(yi(),Pe=t,et=s,Pe.attachEvent("onpropertychange",vi)):e==="focusout"&&yi()}function tu(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Pt(et)}function su(e,t){if(e==="click")return Pt(t)}function iu(e,t){if(e==="input"||e==="change")return Pt(t)}function ru(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var v2=typeof Object.is=="function"?Object.is:ru;function tt(e,t){if(v2(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var s=Object.keys(e),i=Object.keys(t);if(s.length!==i.length)return!1;for(i=0;i<s.length;i++){var r=s[i];if(!G2.call(t,r)||!v2(e[r],t[r]))return!1}return!0}function gi(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function Si(e,t){var s=gi(e);e=0;for(var i;s;){if(s.nodeType===3){if(i=e+s.textContent.length,e<=t&&i>=t)return{node:s,offset:t-e};e=i}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=gi(s)}}function bi(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?bi(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function zi(e){e=e!=null&&e.ownerDocument!=null&&e.ownerDocument.defaultView!=null?e.ownerDocument.defaultView:window;for(var t=Jt(e.document);t instanceof e.HTMLIFrameElement;){try{var s=typeof t.contentWindow.location.href=="string"}catch{s=!1}if(s)e=t.contentWindow;else break;t=Jt(e.document)}return t}function x4(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}var lu=k2&&"documentMode"in document&&11>=document.documentMode,pe=null,O4=null,st=null,N4=!1;function Ei(e,t,s){var i=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;N4||pe==null||pe!==Jt(i)||(i=pe,"selectionStart"in i&&x4(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),st&&tt(st,i)||(st=i,i=X3(O4,"onSelect"),0<i.length&&(t=new Wt("onSelect","select",null,t,s),e.push({event:t,listeners:i}),t.target=pe)))}function G1(e,t){var s={};return s[e.toLowerCase()]=t.toLowerCase(),s["Webkit"+e]="webkit"+t,s["Moz"+e]="moz"+t,s}var _e={animationend:G1("Animation","AnimationEnd"),animationiteration:G1("Animation","AnimationIteration"),animationstart:G1("Animation","AnimationStart"),transitionrun:G1("Transition","TransitionRun"),transitionstart:G1("Transition","TransitionStart"),transitioncancel:G1("Transition","TransitionCancel"),transitionend:G1("Transition","TransitionEnd")},D4={},Mi={};k2&&(Mi=document.createElement("div").style,"AnimationEvent"in window||(delete _e.animationend.animation,delete _e.animationiteration.animation,delete _e.animationstart.animation),"TransitionEvent"in window||delete _e.transitionend.transition);function X1(e){if(D4[e])return D4[e];if(!_e[e])return e;var t=_e[e],s;for(s in t)if(t.hasOwnProperty(s)&&s in Mi)return D4[e]=t[s];return e}var Ai=X1("animationend"),xi=X1("animationiteration"),Oi=X1("animationstart"),au=X1("transitionrun"),uu=X1("transitionstart"),nu=X1("transitioncancel"),Ni=X1("transitionend"),Di=new Map,C4="abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");C4.push("scrollEnd");function B2(e,t){Di.set(e,t),Y1(t,[e])}var e3=typeof reportError=="function"?reportError:function(e){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var t=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof e=="object"&&e!==null&&typeof e.message=="string"?String(e.message):String(e),error:e});if(!window.dispatchEvent(t))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",e);return}console.error(e)},O2=[],fe=0,U4=0;function t3(){for(var e=fe,t=U4=fe=0;t<e;){var s=O2[t];O2[t++]=null;var i=O2[t];O2[t++]=null;var r=O2[t];O2[t++]=null;var l=O2[t];if(O2[t++]=null,i!==null&&r!==null){var a=i.pending;a===null?r.next=r:(r.next=a.next,a.next=r),i.pending=r}l!==0&&Ci(s,r,l)}}function s3(e,t,s,i){O2[fe++]=e,O2[fe++]=t,O2[fe++]=s,O2[fe++]=i,U4|=i,e.lanes|=i,e=e.alternate,e!==null&&(e.lanes|=i)}function R4(e,t,s,i){return s3(e,t,s,i),i3(e)}function Q1(e,t){return s3(e,null,null,t),i3(e)}function Ci(e,t,s){e.lanes|=s;var i=e.alternate;i!==null&&(i.lanes|=s);for(var r=!1,l=e.return;l!==null;)l.childLanes|=s,i=l.alternate,i!==null&&(i.childLanes|=s),l.tag===22&&(e=l.stateNode,e===null||e._visibility&1||(r=!0)),e=l,l=l.return;return e.tag===3?(l=e.stateNode,r&&t!==null&&(r=31-y2(s),e=l.hiddenUpdates,i=e[r],i===null?e[r]=[t]:i.push(t),t.lane=s|536870912),l):null}function i3(e){if(50<Et)throw Et=0,Qs=null,Error(n(185));for(var t=e.return;t!==null;)e=t,t=e.return;return e.tag===3?e.stateNode:null}var he={};function du(e,t,s,i){this.tag=e,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.refCleanup=this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function g2(e,t,s,i){return new du(e,t,s,i)}function j4(e){return e=e.prototype,!(!e||!e.isReactComponent)}function F2(e,t){var s=e.alternate;return s===null?(s=g2(e.tag,t,e.key,e.mode),s.elementType=e.elementType,s.type=e.type,s.stateNode=e.stateNode,s.alternate=e,e.alternate=s):(s.pendingProps=t,s.type=e.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=e.flags&65011712,s.childLanes=e.childLanes,s.lanes=e.lanes,s.child=e.child,s.memoizedProps=e.memoizedProps,s.memoizedState=e.memoizedState,s.updateQueue=e.updateQueue,t=e.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},s.sibling=e.sibling,s.index=e.index,s.ref=e.ref,s.refCleanup=e.refCleanup,s}function Ui(e,t){e.flags&=65011714;var s=e.alternate;return s===null?(e.childLanes=0,e.lanes=t,e.child=null,e.subtreeFlags=0,e.memoizedProps=null,e.memoizedState=null,e.updateQueue=null,e.dependencies=null,e.stateNode=null):(e.childLanes=s.childLanes,e.lanes=s.lanes,e.child=s.child,e.subtreeFlags=0,e.deletions=null,e.memoizedProps=s.memoizedProps,e.memoizedState=s.memoizedState,e.updateQueue=s.updateQueue,e.type=s.type,t=s.dependencies,e.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),e}function r3(e,t,s,i,r,l){var a=0;if(i=e,typeof e=="function")j4(e)&&(a=1);else if(typeof e=="string")a=fn(e,s,O.current)?26:e==="html"||e==="head"||e==="body"?27:5;else e:switch(e){case C0:return e=g2(31,s,t,r),e.elementType=C0,e.lanes=l,e;case s0:return Z1(s.children,r,l,t);case b0:a=8,r|=24;break;case n0:return e=g2(12,s,t,r|2),e.elementType=n0,e.lanes=l,e;case Y0:return e=g2(13,s,t,r),e.elementType=Y0,e.lanes=l,e;case L0:return e=g2(19,s,t,r),e.elementType=L0,e.lanes=l,e;default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case f0:a=10;break e;case o0:a=9;break e;case t0:a=11;break e;case I:a=14;break e;case H0:a=16,i=null;break e}a=29,s=Error(n(130,e===null?"null":typeof e,"")),i=null}return t=g2(a,s,t,r),t.elementType=e,t.type=i,t.lanes=l,t}function Z1(e,t,s,i){return e=g2(7,e,i,t),e.lanes=s,e}function H4(e,t,s){return e=g2(6,e,null,t),e.lanes=s,e}function Ri(e){var t=g2(18,null,null,0);return t.stateNode=e,t}function q4(e,t,s){return t=g2(4,e.children!==null?e.children:[],e.key,t),t.lanes=s,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}var ji=new WeakMap;function N2(e,t){if(typeof e=="object"&&e!==null){var s=ji.get(e);return s!==void 0?s:(t={value:e,source:t,stack:J2(t)},ji.set(e,t),t)}return{value:e,source:t,stack:J2(t)}}var Te=[],ye=0,l3=null,it=0,D2=[],C2=0,f1=null,Q2=1,Z2="";function W2(e,t){Te[ye++]=it,Te[ye++]=l3,l3=e,it=t}function Hi(e,t,s){D2[C2++]=Q2,D2[C2++]=Z2,D2[C2++]=f1,f1=e;var i=Q2;e=Z2;var r=32-y2(i)-1;i&=~(1<<r),s+=1;var l=32-y2(t)+r;if(30<l){var a=r-r%5;l=(i&(1<<a)-1).toString(32),i>>=a,r-=a,Q2=1<<32-y2(t)+r|s<<r|i,Z2=l+e}else Q2=1<<l|s<<r|i,Z2=e}function B4(e){e.return!==null&&(W2(e,1),Hi(e,1,0))}function Y4(e){for(;e===l3;)l3=Te[--ye],Te[ye]=null,it=Te[--ye],Te[ye]=null;for(;e===f1;)f1=D2[--C2],D2[C2]=null,Z2=D2[--C2],D2[C2]=null,Q2=D2[--C2],D2[C2]=null}function qi(e,t){D2[C2++]=Q2,D2[C2++]=Z2,D2[C2++]=f1,Q2=t.id,Z2=t.overflow,f1=e}var I0=null,U0=null,c0=!1,h1=null,U2=!1,L4=Error(n(519));function T1(e){var t=Error(n(418,1<arguments.length&&arguments[1]!==void 0&&arguments[1]?"text":"HTML",""));throw rt(N2(t,e)),L4}function Bi(e){var t=e.stateNode,s=e.type,i=e.memoizedProps;switch(t[W0]=e,t[d2]=i,s){case"dialog":l0("cancel",t),l0("close",t);break;case"iframe":case"object":case"embed":l0("load",t);break;case"video":case"audio":for(s=0;s<At.length;s++)l0(At[s],t);break;case"source":l0("error",t);break;case"img":case"image":case"link":l0("error",t),l0("load",t);break;case"details":l0("toggle",t);break;case"input":l0("invalid",t),F5(t,i.value,i.defaultValue,i.checked,i.defaultChecked,i.type,i.name,!0);break;case"select":l0("invalid",t);break;case"textarea":l0("invalid",t),I5(t,i.value,i.defaultValue,i.children)}s=i.children,typeof s!="string"&&typeof s!="number"&&typeof s!="bigint"||t.textContent===""+s||i.suppressHydrationWarning===!0||e6(t.textContent,s)?(i.popover!=null&&(l0("beforetoggle",t),l0("toggle",t)),i.onScroll!=null&&l0("scroll",t),i.onScrollEnd!=null&&l0("scrollend",t),i.onClick!=null&&(t.onclick=$2),t=!0):t=!1,t||T1(e,!0)}function Yi(e){for(I0=e.return;I0;)switch(I0.tag){case 5:case 31:case 13:U2=!1;return;case 27:case 3:U2=!0;return;default:I0=I0.return}}function ve(e){if(e!==I0)return!1;if(!c0)return Yi(e),c0=!0,!1;var t=e.tag,s;if((s=t!==3&&t!==27)&&((s=t===5)&&(s=e.type,s=!(s!=="form"&&s!=="button")||i5(e.type,e.memoizedProps)),s=!s),s&&U0&&T1(e),Yi(e),t===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));U0=d6(e)}else if(t===31){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(317));U0=d6(e)}else t===27?(t=U0,C1(e.type)?(e=n5,n5=null,U0=e):U0=t):U0=I0?j2(e.stateNode.nextSibling):null;return!0}function V1(){U0=I0=null,c0=!1}function G4(){var e=h1;return e!==null&&(_2===null?_2=e:_2.push.apply(_2,e),h1=null),e}function rt(e){h1===null?h1=[e]:h1.push(e)}var X4=m(null),K1=null,I2=null;function y1(e,t,s){y(X4,t._currentValue),t._currentValue=s}function P2(e){e._currentValue=X4.current,D(X4)}function Q4(e,t,s){for(;e!==null;){var i=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,i!==null&&(i.childLanes|=t)):i!==null&&(i.childLanes&t)!==t&&(i.childLanes|=t),e===s)break;e=e.return}}function Z4(e,t,s,i){var r=e.child;for(r!==null&&(r.return=e);r!==null;){var l=r.dependencies;if(l!==null){var a=r.child;l=l.firstContext;e:for(;l!==null;){var u=l;l=r;for(var d=0;d<t.length;d++)if(u.context===t[d]){l.lanes|=s,u=l.alternate,u!==null&&(u.lanes|=s),Q4(l.return,s,e),i||(a=null);break e}l=u.next}}else if(r.tag===18){if(a=r.return,a===null)throw Error(n(341));a.lanes|=s,l=a.alternate,l!==null&&(l.lanes|=s),Q4(a,s,e),a=null}else a=r.child;if(a!==null)a.return=r;else for(a=r;a!==null;){if(a===e){a=null;break}if(r=a.sibling,r!==null){r.return=a.return,a=r;break}a=a.return}r=a}}function ge(e,t,s,i){e=null;for(var r=t,l=!1;r!==null;){if(!l){if((r.flags&524288)!==0)l=!0;else if((r.flags&262144)!==0)break}if(r.tag===10){var a=r.alternate;if(a===null)throw Error(n(387));if(a=a.memoizedProps,a!==null){var u=r.type;v2(r.pendingProps.value,a.value)||(e!==null?e.push(u):e=[u])}}else if(r===z.current){if(a=r.alternate,a===null)throw Error(n(387));a.memoizedState.memoizedState!==r.memoizedState.memoizedState&&(e!==null?e.push(Ct):e=[Ct])}r=r.return}e!==null&&Z4(t,e,s,i),t.flags|=262144}function a3(e){for(e=e.firstContext;e!==null;){if(!v2(e.context._currentValue,e.memoizedValue))return!0;e=e.next}return!1}function J1(e){K1=e,I2=null,e=e.dependencies,e!==null&&(e.firstContext=null)}function P0(e){return Li(K1,e)}function u3(e,t){return K1===null&&J1(e),Li(e,t)}function Li(e,t){var s=t._currentValue;if(t={context:t,memoizedValue:s,next:null},I2===null){if(e===null)throw Error(n(308));I2=t,e.dependencies={lanes:0,firstContext:t},e.flags|=524288}else I2=I2.next=t;return s}var cu=typeof AbortController<"u"?AbortController:function(){var e=[],t=this.signal={aborted:!1,addEventListener:function(s,i){e.push(i)}};this.abort=function(){t.aborted=!0,e.forEach(function(s){return s()})}},ou=c.unstable_scheduleCallback,mu=c.unstable_NormalPriority,Q0={$$typeof:f0,Consumer:null,Provider:null,_currentValue:null,_currentValue2:null,_threadCount:0};function V4(){return{controller:new cu,data:new Map,refCount:0}}function lt(e){e.refCount--,e.refCount===0&&ou(mu,function(){e.controller.abort()})}var at=null,K4=0,Se=0,be=null;function pu(e,t){if(at===null){var s=at=[];K4=0,Se=$s(),be={status:"pending",value:void 0,then:function(i){s.push(i)}}}return K4++,t.then(Gi,Gi),t}function Gi(){if(--K4===0&&at!==null){be!==null&&(be.status="fulfilled");var e=at;at=null,Se=0,be=null;for(var t=0;t<e.length;t++)(0,e[t])()}}function _u(e,t){var s=[],i={status:"pending",value:null,reason:null,then:function(r){s.push(r)}};return e.then(function(){i.status="fulfilled",i.value=t;for(var r=0;r<s.length;r++)(0,s[r])(t)},function(r){for(i.status="rejected",i.reason=r,r=0;r<s.length;r++)(0,s[r])(void 0)}),i}var Xi=M.S;M.S=function(e,t){El=h2(),typeof t=="object"&&t!==null&&typeof t.then=="function"&&pu(e,t),Xi!==null&&Xi(e,t)};var w1=m(null);function J4(){var e=w1.current;return e!==null?e:D0.pooledCache}function n3(e,t){t===null?y(w1,w1.current):y(w1,t.pool)}function Qi(){var e=J4();return e===null?null:{parent:Q0._currentValue,pool:e}}var ze=Error(n(460)),w4=Error(n(474)),d3=Error(n(542)),c3={then:function(){}};function Zi(e){return e=e.status,e==="fulfilled"||e==="rejected"}function Vi(e,t,s){switch(s=e[s],s===void 0?e.push(t):s!==t&&(t.then($2,$2),t=s),t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ji(e),e;default:if(typeof t.status=="string")t.then($2,$2);else{if(e=D0,e!==null&&100<e.shellSuspendCounter)throw Error(n(482));e=t,e.status="pending",e.then(function(i){if(t.status==="pending"){var r=t;r.status="fulfilled",r.value=i}},function(i){if(t.status==="pending"){var r=t;r.status="rejected",r.reason=i}})}switch(t.status){case"fulfilled":return t.value;case"rejected":throw e=t.reason,Ji(e),e}throw k1=t,ze}}function $1(e){try{var t=e._init;return t(e._payload)}catch(s){throw s!==null&&typeof s=="object"&&typeof s.then=="function"?(k1=s,ze):s}}var k1=null;function Ki(){if(k1===null)throw Error(n(459));var e=k1;return k1=null,e}function Ji(e){if(e===ze||e===d3)throw Error(n(483))}var Ee=null,ut=0;function o3(e){var t=ut;return ut+=1,Ee===null&&(Ee=[]),Vi(Ee,e,t)}function nt(e,t){t=t.props.ref,e.ref=t!==void 0?t:null}function m3(e,t){throw t.$$typeof===Q?Error(n(525)):(e=Object.prototype.toString.call(t),Error(n(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)))}function wi(e){function t(_,o){if(e){var f=_.deletions;f===null?(_.deletions=[o],_.flags|=16):f.push(o)}}function s(_,o){if(!e)return null;for(;o!==null;)t(_,o),o=o.sibling;return null}function i(_){for(var o=new Map;_!==null;)_.key!==null?o.set(_.key,_):o.set(_.index,_),_=_.sibling;return o}function r(_,o){return _=F2(_,o),_.index=0,_.sibling=null,_}function l(_,o,f){return _.index=f,e?(f=_.alternate,f!==null?(f=f.index,f<o?(_.flags|=67108866,o):f):(_.flags|=67108866,o)):(_.flags|=1048576,o)}function a(_){return e&&_.alternate===null&&(_.flags|=67108866),_}function u(_,o,f,N){return o===null||o.tag!==6?(o=H4(f,_.mode,N),o.return=_,o):(o=r(o,f),o.return=_,o)}function d(_,o,f,N){var J=f.type;return J===s0?x(_,o,f.props.children,N,f.key):o!==null&&(o.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===H0&&$1(J)===o.type)?(o=r(o,f.props),nt(o,f),o.return=_,o):(o=r3(f.type,f.key,f.props,null,_.mode,N),nt(o,f),o.return=_,o)}function h(_,o,f,N){return o===null||o.tag!==4||o.stateNode.containerInfo!==f.containerInfo||o.stateNode.implementation!==f.implementation?(o=q4(f,_.mode,N),o.return=_,o):(o=r(o,f.children||[]),o.return=_,o)}function x(_,o,f,N,J){return o===null||o.tag!==7?(o=Z1(f,_.mode,N,J),o.return=_,o):(o=r(o,f),o.return=_,o)}function C(_,o,f){if(typeof o=="string"&&o!==""||typeof o=="number"||typeof o=="bigint")return o=H4(""+o,_.mode,f),o.return=_,o;if(typeof o=="object"&&o!==null){switch(o.$$typeof){case _0:return f=r3(o.type,o.key,o.props,null,_.mode,f),nt(f,o),f.return=_,f;case O0:return o=q4(o,_.mode,f),o.return=_,o;case H0:return o=$1(o),C(_,o,f)}if(i2(o)||S0(o))return o=Z1(o,_.mode,f,null),o.return=_,o;if(typeof o.then=="function")return C(_,o3(o),f);if(o.$$typeof===f0)return C(_,u3(_,o),f);m3(_,o)}return null}function v(_,o,f,N){var J=o!==null?o.key:null;if(typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint")return J!==null?null:u(_,o,""+f,N);if(typeof f=="object"&&f!==null){switch(f.$$typeof){case _0:return f.key===J?d(_,o,f,N):null;case O0:return f.key===J?h(_,o,f,N):null;case H0:return f=$1(f),v(_,o,f,N)}if(i2(f)||S0(f))return J!==null?null:x(_,o,f,N,null);if(typeof f.then=="function")return v(_,o,o3(f),N);if(f.$$typeof===f0)return v(_,o,u3(_,f),N);m3(_,f)}return null}function b(_,o,f,N,J){if(typeof N=="string"&&N!==""||typeof N=="number"||typeof N=="bigint")return _=_.get(f)||null,u(o,_,""+N,J);if(typeof N=="object"&&N!==null){switch(N.$$typeof){case _0:return _=_.get(N.key===null?f:N.key)||null,d(o,_,N,J);case O0:return _=_.get(N.key===null?f:N.key)||null,h(o,_,N,J);case H0:return N=$1(N),b(_,o,f,N,J)}if(i2(N)||S0(N))return _=_.get(f)||null,x(o,_,N,J,null);if(typeof N.then=="function")return b(_,o,f,o3(N),J);if(N.$$typeof===f0)return b(_,o,f,u3(o,N),J);m3(o,N)}return null}function X(_,o,f,N){for(var J=null,T0=null,V=o,e0=o=0,u0=null;V!==null&&e0<f.length;e0++){V.index>e0?(u0=V,V=null):u0=V.sibling;var y0=v(_,V,f[e0],N);if(y0===null){V===null&&(V=u0);break}e&&V&&y0.alternate===null&&t(_,V),o=l(y0,o,e0),T0===null?J=y0:T0.sibling=y0,T0=y0,V=u0}if(e0===f.length)return s(_,V),c0&&W2(_,e0),J;if(V===null){for(;e0<f.length;e0++)V=C(_,f[e0],N),V!==null&&(o=l(V,o,e0),T0===null?J=V:T0.sibling=V,T0=V);return c0&&W2(_,e0),J}for(V=i(V);e0<f.length;e0++)u0=b(V,_,e0,f[e0],N),u0!==null&&(e&&u0.alternate!==null&&V.delete(u0.key===null?e0:u0.key),o=l(u0,o,e0),T0===null?J=u0:T0.sibling=u0,T0=u0);return e&&V.forEach(function(q1){return t(_,q1)}),c0&&W2(_,e0),J}function $(_,o,f,N){if(f==null)throw Error(n(151));for(var J=null,T0=null,V=o,e0=o=0,u0=null,y0=f.next();V!==null&&!y0.done;e0++,y0=f.next()){V.index>e0?(u0=V,V=null):u0=V.sibling;var q1=v(_,V,y0.value,N);if(q1===null){V===null&&(V=u0);break}e&&V&&q1.alternate===null&&t(_,V),o=l(q1,o,e0),T0===null?J=q1:T0.sibling=q1,T0=q1,V=u0}if(y0.done)return s(_,V),c0&&W2(_,e0),J;if(V===null){for(;!y0.done;e0++,y0=f.next())y0=C(_,y0.value,N),y0!==null&&(o=l(y0,o,e0),T0===null?J=y0:T0.sibling=y0,T0=y0);return c0&&W2(_,e0),J}for(V=i(V);!y0.done;e0++,y0=f.next())y0=b(V,_,e0,y0.value,N),y0!==null&&(e&&y0.alternate!==null&&V.delete(y0.key===null?e0:y0.key),o=l(y0,o,e0),T0===null?J=y0:T0.sibling=y0,T0=y0);return e&&V.forEach(function(An){return t(_,An)}),c0&&W2(_,e0),J}function x0(_,o,f,N){if(typeof f=="object"&&f!==null&&f.type===s0&&f.key===null&&(f=f.props.children),typeof f=="object"&&f!==null){switch(f.$$typeof){case _0:e:{for(var J=f.key;o!==null;){if(o.key===J){if(J=f.type,J===s0){if(o.tag===7){s(_,o.sibling),N=r(o,f.props.children),N.return=_,_=N;break e}}else if(o.elementType===J||typeof J=="object"&&J!==null&&J.$$typeof===H0&&$1(J)===o.type){s(_,o.sibling),N=r(o,f.props),nt(N,f),N.return=_,_=N;break e}s(_,o);break}else t(_,o);o=o.sibling}f.type===s0?(N=Z1(f.props.children,_.mode,N,f.key),N.return=_,_=N):(N=r3(f.type,f.key,f.props,null,_.mode,N),nt(N,f),N.return=_,_=N)}return a(_);case O0:e:{for(J=f.key;o!==null;){if(o.key===J)if(o.tag===4&&o.stateNode.containerInfo===f.containerInfo&&o.stateNode.implementation===f.implementation){s(_,o.sibling),N=r(o,f.children||[]),N.return=_,_=N;break e}else{s(_,o);break}else t(_,o);o=o.sibling}N=q4(f,_.mode,N),N.return=_,_=N}return a(_);case H0:return f=$1(f),x0(_,o,f,N)}if(i2(f))return X(_,o,f,N);if(S0(f)){if(J=S0(f),typeof J!="function")throw Error(n(150));return f=J.call(f),$(_,o,f,N)}if(typeof f.then=="function")return x0(_,o,o3(f),N);if(f.$$typeof===f0)return x0(_,o,u3(_,f),N);m3(_,f)}return typeof f=="string"&&f!==""||typeof f=="number"||typeof f=="bigint"?(f=""+f,o!==null&&o.tag===6?(s(_,o.sibling),N=r(o,f),N.return=_,_=N):(s(_,o),N=H4(f,_.mode,N),N.return=_,_=N),a(_)):s(_,o)}return function(_,o,f,N){try{ut=0;var J=x0(_,o,f,N);return Ee=null,J}catch(V){if(V===ze||V===d3)throw V;var T0=g2(29,V,null,_.mode);return T0.lanes=N,T0.return=_,T0}finally{}}}var F1=wi(!0),$i=wi(!1),v1=!1;function $4(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,lanes:0,hiddenCallbacks:null},callbacks:null}}function k4(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,callbacks:null})}function g1(e){return{lane:e,tag:0,payload:null,callback:null,next:null}}function S1(e,t,s){var i=e.updateQueue;if(i===null)return null;if(i=i.shared,(g0&2)!==0){var r=i.pending;return r===null?t.next=t:(t.next=r.next,r.next=t),i.pending=t,t=i3(e),Ci(e,null,s),t}return s3(e,i,t,s),i3(e)}function dt(e,t,s){if(t=t.updateQueue,t!==null&&(t=t.shared,(s&4194048)!==0)){var i=t.lanes;i&=e.pendingLanes,s|=i,t.lanes=s,L5(e,s)}}function F4(e,t){var s=e.updateQueue,i=e.alternate;if(i!==null&&(i=i.updateQueue,s===i)){var r=null,l=null;if(s=s.firstBaseUpdate,s!==null){do{var a={lane:s.lane,tag:s.tag,payload:s.payload,callback:null,next:null};l===null?r=l=a:l=l.next=a,s=s.next}while(s!==null);l===null?r=l=t:l=l.next=t}else r=l=t;s={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:l,shared:i.shared,callbacks:i.callbacks},e.updateQueue=s;return}e=s.lastBaseUpdate,e===null?s.firstBaseUpdate=t:e.next=t,s.lastBaseUpdate=t}var W4=!1;function ct(){if(W4){var e=be;if(e!==null)throw e}}function ot(e,t,s,i){W4=!1;var r=e.updateQueue;v1=!1;var l=r.firstBaseUpdate,a=r.lastBaseUpdate,u=r.shared.pending;if(u!==null){r.shared.pending=null;var d=u,h=d.next;d.next=null,a===null?l=h:a.next=h,a=d;var x=e.alternate;x!==null&&(x=x.updateQueue,u=x.lastBaseUpdate,u!==a&&(u===null?x.firstBaseUpdate=h:u.next=h,x.lastBaseUpdate=d))}if(l!==null){var C=r.baseState;a=0,x=h=d=null,u=l;do{var v=u.lane&-536870913,b=v!==u.lane;if(b?(a0&v)===v:(i&v)===v){v!==0&&v===Se&&(W4=!0),x!==null&&(x=x.next={lane:0,tag:u.tag,payload:u.payload,callback:null,next:null});e:{var X=e,$=u;v=t;var x0=s;switch($.tag){case 1:if(X=$.payload,typeof X=="function"){C=X.call(x0,C,v);break e}C=X;break e;case 3:X.flags=X.flags&-65537|128;case 0:if(X=$.payload,v=typeof X=="function"?X.call(x0,C,v):X,v==null)break e;C=q({},C,v);break e;case 2:v1=!0}}v=u.callback,v!==null&&(e.flags|=64,b&&(e.flags|=8192),b=r.callbacks,b===null?r.callbacks=[v]:b.push(v))}else b={lane:v,tag:u.tag,payload:u.payload,callback:u.callback,next:null},x===null?(h=x=b,d=C):x=x.next=b,a|=v;if(u=u.next,u===null){if(u=r.shared.pending,u===null)break;b=u,u=b.next,b.next=null,r.lastBaseUpdate=b,r.shared.pending=null}}while(!0);x===null&&(d=C),r.baseState=d,r.firstBaseUpdate=h,r.lastBaseUpdate=x,l===null&&(r.shared.lanes=0),A1|=a,e.lanes=a,e.memoizedState=C}}function ki(e,t){if(typeof e!="function")throw Error(n(191,e));e.call(t)}function Fi(e,t){var s=e.callbacks;if(s!==null)for(e.callbacks=null,e=0;e<s.length;e++)ki(s[e],t)}var Me=m(null),p3=m(0);function Wi(e,t){e=n1,y(p3,e),y(Me,t),n1=e|t.baseLanes}function I4(){y(p3,n1),y(Me,Me.current)}function P4(){n1=p3.current,D(Me),D(p3)}var S2=m(null),R2=null;function b1(e){var t=e.alternate;y(G0,G0.current&1),y(S2,e),R2===null&&(t===null||Me.current!==null||t.memoizedState!==null)&&(R2=e)}function es(e){y(G0,G0.current),y(S2,e),R2===null&&(R2=e)}function Ii(e){e.tag===22?(y(G0,G0.current),y(S2,e),R2===null&&(R2=e)):z1()}function z1(){y(G0,G0.current),y(S2,S2.current)}function b2(e){D(S2),R2===e&&(R2=null),D(G0)}var G0=m(0);function _3(e){for(var t=e;t!==null;){if(t.tag===13){var s=t.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||a5(s)||u5(s)))return t}else if(t.tag===19&&(t.memoizedProps.revealOrder==="forwards"||t.memoizedProps.revealOrder==="backwards"||t.memoizedProps.revealOrder==="unstable_legacy-backwards"||t.memoizedProps.revealOrder==="together")){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var e1=0,P=null,M0=null,Z0=null,f3=!1,Ae=!1,W1=!1,h3=0,mt=0,xe=null,fu=0;function q0(){throw Error(n(321))}function ts(e,t){if(t===null)return!1;for(var s=0;s<t.length&&s<e.length;s++)if(!v2(e[s],t[s]))return!1;return!0}function ss(e,t,s,i,r,l){return e1=l,P=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,M.H=e===null||e.memoizedState===null?Hr:Ts,W1=!1,l=s(i,r),W1=!1,Ae&&(l=er(t,s,i,r)),Pi(e),l}function Pi(e){M.H=ft;var t=M0!==null&&M0.next!==null;if(e1=0,Z0=M0=P=null,f3=!1,mt=0,xe=null,t)throw Error(n(300));e===null||V0||(e=e.dependencies,e!==null&&a3(e)&&(V0=!0))}function er(e,t,s,i){P=e;var r=0;do{if(Ae&&(xe=null),mt=0,Ae=!1,25<=r)throw Error(n(301));if(r+=1,Z0=M0=null,e.updateQueue!=null){var l=e.updateQueue;l.lastEffect=null,l.events=null,l.stores=null,l.memoCache!=null&&(l.memoCache.index=0)}M.H=qr,l=t(s,i)}while(Ae);return l}function hu(){var e=M.H,t=e.useState()[0];return t=typeof t.then=="function"?pt(t):t,e=e.useState()[0],(M0!==null?M0.memoizedState:null)!==e&&(P.flags|=1024),t}function is(){var e=h3!==0;return h3=0,e}function rs(e,t,s){t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~s}function ls(e){if(f3){for(e=e.memoizedState;e!==null;){var t=e.queue;t!==null&&(t.pending=null),e=e.next}f3=!1}e1=0,Z0=M0=P=null,Ae=!1,mt=h3=0,xe=null}function a2(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Z0===null?P.memoizedState=Z0=e:Z0=Z0.next=e,Z0}function X0(){if(M0===null){var e=P.alternate;e=e!==null?e.memoizedState:null}else e=M0.next;var t=Z0===null?P.memoizedState:Z0.next;if(t!==null)Z0=t,M0=e;else{if(e===null)throw P.alternate===null?Error(n(467)):Error(n(310));M0=e,e={memoizedState:M0.memoizedState,baseState:M0.baseState,baseQueue:M0.baseQueue,queue:M0.queue,next:null},Z0===null?P.memoizedState=Z0=e:Z0=Z0.next=e}return Z0}function T3(){return{lastEffect:null,events:null,stores:null,memoCache:null}}function pt(e){var t=mt;return mt+=1,xe===null&&(xe=[]),e=Vi(xe,e,t),t=P,(Z0===null?t.memoizedState:Z0.next)===null&&(t=t.alternate,M.H=t===null||t.memoizedState===null?Hr:Ts),e}function y3(e){if(e!==null&&typeof e=="object"){if(typeof e.then=="function")return pt(e);if(e.$$typeof===f0)return P0(e)}throw Error(n(438,String(e)))}function as(e){var t=null,s=P.updateQueue;if(s!==null&&(t=s.memoCache),t==null){var i=P.alternate;i!==null&&(i=i.updateQueue,i!==null&&(i=i.memoCache,i!=null&&(t={data:i.data.map(function(r){return r.slice()}),index:0})))}if(t==null&&(t={data:[],index:0}),s===null&&(s=T3(),P.updateQueue=s),s.memoCache=t,s=t.data[t.index],s===void 0)for(s=t.data[t.index]=Array(e),i=0;i<e;i++)s[i]=J0;return t.index++,s}function t1(e,t){return typeof t=="function"?t(e):t}function v3(e){var t=X0();return us(t,M0,e)}function us(e,t,s){var i=e.queue;if(i===null)throw Error(n(311));i.lastRenderedReducer=s;var r=e.baseQueue,l=i.pending;if(l!==null){if(r!==null){var a=r.next;r.next=l.next,l.next=a}t.baseQueue=r=l,i.pending=null}if(l=e.baseState,r===null)e.memoizedState=l;else{t=r.next;var u=a=null,d=null,h=t,x=!1;do{var C=h.lane&-536870913;if(C!==h.lane?(a0&C)===C:(e1&C)===C){var v=h.revertLane;if(v===0)d!==null&&(d=d.next={lane:0,revertLane:0,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null}),C===Se&&(x=!0);else if((e1&v)===v){h=h.next,v===Se&&(x=!0);continue}else C={lane:0,revertLane:h.revertLane,gesture:null,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},d===null?(u=d=C,a=l):d=d.next=C,P.lanes|=v,A1|=v;C=h.action,W1&&s(l,C),l=h.hasEagerState?h.eagerState:s(l,C)}else v={lane:C,revertLane:h.revertLane,gesture:h.gesture,action:h.action,hasEagerState:h.hasEagerState,eagerState:h.eagerState,next:null},d===null?(u=d=v,a=l):d=d.next=v,P.lanes|=C,A1|=C;h=h.next}while(h!==null&&h!==t);if(d===null?a=l:d.next=u,!v2(l,e.memoizedState)&&(V0=!0,x&&(s=be,s!==null)))throw s;e.memoizedState=l,e.baseState=a,e.baseQueue=d,i.lastRenderedState=l}return r===null&&(i.lanes=0),[e.memoizedState,i.dispatch]}function ns(e){var t=X0(),s=t.queue;if(s===null)throw Error(n(311));s.lastRenderedReducer=e;var i=s.dispatch,r=s.pending,l=t.memoizedState;if(r!==null){s.pending=null;var a=r=r.next;do l=e(l,a.action),a=a.next;while(a!==r);v2(l,t.memoizedState)||(V0=!0),t.memoizedState=l,t.baseQueue===null&&(t.baseState=l),s.lastRenderedState=l}return[l,i]}function tr(e,t,s){var i=P,r=X0(),l=c0;if(l){if(s===void 0)throw Error(n(407));s=s()}else s=t();var a=!v2((M0||r).memoizedState,s);if(a&&(r.memoizedState=s,V0=!0),r=r.queue,os(rr.bind(null,i,r,e),[e]),r.getSnapshot!==t||a||Z0!==null&&Z0.memoizedState.tag&1){if(i.flags|=2048,Oe(9,{destroy:void 0},ir.bind(null,i,r,s,t),null),D0===null)throw Error(n(349));l||(e1&127)!==0||sr(i,t,s)}return s}function sr(e,t,s){e.flags|=16384,e={getSnapshot:t,value:s},t=P.updateQueue,t===null?(t=T3(),P.updateQueue=t,t.stores=[e]):(s=t.stores,s===null?t.stores=[e]:s.push(e))}function ir(e,t,s,i){t.value=s,t.getSnapshot=i,lr(t)&&ar(e)}function rr(e,t,s){return s(function(){lr(t)&&ar(e)})}function lr(e){var t=e.getSnapshot;e=e.value;try{var s=t();return!v2(e,s)}catch{return!0}}function ar(e){var t=Q1(e,2);t!==null&&f2(t,e,2)}function ds(e){var t=a2();if(typeof e=="function"){var s=e;if(e=s(),W1){m1(!0);try{s()}finally{m1(!1)}}}return t.memoizedState=t.baseState=e,t.queue={pending:null,lanes:0,dispatch:null,lastRenderedReducer:t1,lastRenderedState:e},t}function ur(e,t,s,i){return e.baseState=s,us(e,M0,typeof i=="function"?i:t1)}function Tu(e,t,s,i,r){if(b3(e))throw Error(n(485));if(e=t.action,e!==null){var l={payload:r,action:e,next:null,isTransition:!0,status:"pending",value:null,reason:null,listeners:[],then:function(a){l.listeners.push(a)}};M.T!==null?s(!0):l.isTransition=!1,i(l),s=t.pending,s===null?(l.next=t.pending=l,nr(t,l)):(l.next=s.next,t.pending=s.next=l)}}function nr(e,t){var s=t.action,i=t.payload,r=e.state;if(t.isTransition){var l=M.T,a={};M.T=a;try{var u=s(r,i),d=M.S;d!==null&&d(a,u),dr(e,t,u)}catch(h){cs(e,t,h)}finally{l!==null&&a.types!==null&&(l.types=a.types),M.T=l}}else try{l=s(r,i),dr(e,t,l)}catch(h){cs(e,t,h)}}function dr(e,t,s){s!==null&&typeof s=="object"&&typeof s.then=="function"?s.then(function(i){cr(e,t,i)},function(i){return cs(e,t,i)}):cr(e,t,s)}function cr(e,t,s){t.status="fulfilled",t.value=s,or(t),e.state=s,t=e.pending,t!==null&&(s=t.next,s===t?e.pending=null:(s=s.next,t.next=s,nr(e,s)))}function cs(e,t,s){var i=e.pending;if(e.pending=null,i!==null){i=i.next;do t.status="rejected",t.reason=s,or(t),t=t.next;while(t!==i)}e.action=null}function or(e){e=e.listeners;for(var t=0;t<e.length;t++)(0,e[t])()}function mr(e,t){return t}function pr(e,t){if(c0){var s=D0.formState;if(s!==null){e:{var i=P;if(c0){if(U0){t:{for(var r=U0,l=U2;r.nodeType!==8;){if(!l){r=null;break t}if(r=j2(r.nextSibling),r===null){r=null;break t}}l=r.data,r=l==="F!"||l==="F"?r:null}if(r){U0=j2(r.nextSibling),i=r.data==="F!";break e}}T1(i)}i=!1}i&&(t=s[0])}}return s=a2(),s.memoizedState=s.baseState=t,i={pending:null,lanes:0,dispatch:null,lastRenderedReducer:mr,lastRenderedState:t},s.queue=i,s=Ur.bind(null,P,i),i.dispatch=s,i=ds(!1),l=hs.bind(null,P,!1,i.queue),i=a2(),r={state:t,dispatch:null,action:e,pending:null},i.queue=r,s=Tu.bind(null,P,r,l,s),r.dispatch=s,i.memoizedState=e,[t,s,!1]}function _r(e){var t=X0();return fr(t,M0,e)}function fr(e,t,s){if(t=us(e,t,mr)[0],e=v3(t1)[0],typeof t=="object"&&t!==null&&typeof t.then=="function")try{var i=pt(t)}catch(a){throw a===ze?d3:a}else i=t;t=X0();var r=t.queue,l=r.dispatch;return s!==t.memoizedState&&(P.flags|=2048,Oe(9,{destroy:void 0},yu.bind(null,r,s),null)),[i,l,e]}function yu(e,t){e.action=t}function hr(e){var t=X0(),s=M0;if(s!==null)return fr(t,s,e);X0(),t=t.memoizedState,s=X0();var i=s.queue.dispatch;return s.memoizedState=e,[t,i,!1]}function Oe(e,t,s,i){return e={tag:e,create:s,deps:i,inst:t,next:null},t=P.updateQueue,t===null&&(t=T3(),P.updateQueue=t),s=t.lastEffect,s===null?t.lastEffect=e.next=e:(i=s.next,s.next=e,e.next=i,t.lastEffect=e),e}function Tr(){return X0().memoizedState}function g3(e,t,s,i){var r=a2();P.flags|=e,r.memoizedState=Oe(1|t,{destroy:void 0},s,i===void 0?null:i)}function S3(e,t,s,i){var r=X0();i=i===void 0?null:i;var l=r.memoizedState.inst;M0!==null&&i!==null&&ts(i,M0.memoizedState.deps)?r.memoizedState=Oe(t,l,s,i):(P.flags|=e,r.memoizedState=Oe(1|t,l,s,i))}function yr(e,t){g3(8390656,8,e,t)}function os(e,t){S3(2048,8,e,t)}function vu(e){P.flags|=4;var t=P.updateQueue;if(t===null)t=T3(),P.updateQueue=t,t.events=[e];else{var s=t.events;s===null?t.events=[e]:s.push(e)}}function vr(e){var t=X0().memoizedState;return vu({ref:t,nextImpl:e}),function(){if((g0&2)!==0)throw Error(n(440));return t.impl.apply(void 0,arguments)}}function gr(e,t){return S3(4,2,e,t)}function Sr(e,t){return S3(4,4,e,t)}function br(e,t){if(typeof t=="function"){e=e();var s=t(e);return function(){typeof s=="function"?s():t(null)}}if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function zr(e,t,s){s=s!=null?s.concat([e]):null,S3(4,4,br.bind(null,t,e),s)}function ms(){}function Er(e,t){var s=X0();t=t===void 0?null:t;var i=s.memoizedState;return t!==null&&ts(t,i[1])?i[0]:(s.memoizedState=[e,t],e)}function Mr(e,t){var s=X0();t=t===void 0?null:t;var i=s.memoizedState;if(t!==null&&ts(t,i[1]))return i[0];if(i=e(),W1){m1(!0);try{e()}finally{m1(!1)}}return s.memoizedState=[i,t],i}function ps(e,t,s){return s===void 0||(e1&1073741824)!==0&&(a0&261930)===0?e.memoizedState=t:(e.memoizedState=s,e=Al(),P.lanes|=e,A1|=e,s)}function Ar(e,t,s,i){return v2(s,t)?s:Me.current!==null?(e=ps(e,s,i),v2(e,t)||(V0=!0),e):(e1&42)===0||(e1&1073741824)!==0&&(a0&261930)===0?(V0=!0,e.memoizedState=s):(e=Al(),P.lanes|=e,A1|=e,t)}function xr(e,t,s,i,r){var l=L.p;L.p=l!==0&&8>l?l:8;var a=M.T,u={};M.T=u,hs(e,!1,t,s);try{var d=r(),h=M.S;if(h!==null&&h(u,d),d!==null&&typeof d=="object"&&typeof d.then=="function"){var x=_u(d,i);_t(e,t,x,M2(e))}else _t(e,t,i,M2(e))}catch(C){_t(e,t,{then:function(){},status:"rejected",reason:C},M2())}finally{L.p=l,a!==null&&u.types!==null&&(a.types=u.types),M.T=a}}function gu(){}function _s(e,t,s,i){if(e.tag!==5)throw Error(n(476));var r=Or(e).queue;xr(e,r,t,w,s===null?gu:function(){return Nr(e),s(i)})}function Or(e){var t=e.memoizedState;if(t!==null)return t;t={memoizedState:w,baseState:w,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:t1,lastRenderedState:w},next:null};var s={};return t.next={memoizedState:s,baseState:s,baseQueue:null,queue:{pending:null,lanes:0,dispatch:null,lastRenderedReducer:t1,lastRenderedState:s},next:null},e.memoizedState=t,e=e.alternate,e!==null&&(e.memoizedState=t),t}function Nr(e){var t=Or(e);t.next===null&&(t=e.alternate.memoizedState),_t(e,t.next.queue,{},M2())}function fs(){return P0(Ct)}function Dr(){return X0().memoizedState}function Cr(){return X0().memoizedState}function Su(e){for(var t=e.return;t!==null;){switch(t.tag){case 24:case 3:var s=M2();e=g1(s);var i=S1(t,e,s);i!==null&&(f2(i,t,s),dt(i,t,s)),t={cache:V4()},e.payload=t;return}t=t.return}}function bu(e,t,s){var i=M2();s={lane:i,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null},b3(e)?Rr(t,s):(s=R4(e,t,s,i),s!==null&&(f2(s,e,i),jr(s,t,i)))}function Ur(e,t,s){var i=M2();_t(e,t,s,i)}function _t(e,t,s,i){var r={lane:i,revertLane:0,gesture:null,action:s,hasEagerState:!1,eagerState:null,next:null};if(b3(e))Rr(t,r);else{var l=e.alternate;if(e.lanes===0&&(l===null||l.lanes===0)&&(l=t.lastRenderedReducer,l!==null))try{var a=t.lastRenderedState,u=l(a,s);if(r.hasEagerState=!0,r.eagerState=u,v2(u,a))return s3(e,t,r,0),D0===null&&t3(),!1}catch{}finally{}if(s=R4(e,t,r,i),s!==null)return f2(s,e,i),jr(s,t,i),!0}return!1}function hs(e,t,s,i){if(i={lane:2,revertLane:$s(),gesture:null,action:i,hasEagerState:!1,eagerState:null,next:null},b3(e)){if(t)throw Error(n(479))}else t=R4(e,s,i,2),t!==null&&f2(t,e,2)}function b3(e){var t=e.alternate;return e===P||t!==null&&t===P}function Rr(e,t){Ae=f3=!0;var s=e.pending;s===null?t.next=t:(t.next=s.next,s.next=t),e.pending=t}function jr(e,t,s){if((s&4194048)!==0){var i=t.lanes;i&=e.pendingLanes,s|=i,t.lanes=s,L5(e,s)}}var ft={readContext:P0,use:y3,useCallback:q0,useContext:q0,useEffect:q0,useImperativeHandle:q0,useLayoutEffect:q0,useInsertionEffect:q0,useMemo:q0,useReducer:q0,useRef:q0,useState:q0,useDebugValue:q0,useDeferredValue:q0,useTransition:q0,useSyncExternalStore:q0,useId:q0,useHostTransitionStatus:q0,useFormState:q0,useActionState:q0,useOptimistic:q0,useMemoCache:q0,useCacheRefresh:q0};ft.useEffectEvent=q0;var Hr={readContext:P0,use:y3,useCallback:function(e,t){return a2().memoizedState=[e,t===void 0?null:t],e},useContext:P0,useEffect:yr,useImperativeHandle:function(e,t,s){s=s!=null?s.concat([e]):null,g3(4194308,4,br.bind(null,t,e),s)},useLayoutEffect:function(e,t){return g3(4194308,4,e,t)},useInsertionEffect:function(e,t){g3(4,2,e,t)},useMemo:function(e,t){var s=a2();t=t===void 0?null:t;var i=e();if(W1){m1(!0);try{e()}finally{m1(!1)}}return s.memoizedState=[i,t],i},useReducer:function(e,t,s){var i=a2();if(s!==void 0){var r=s(t);if(W1){m1(!0);try{s(t)}finally{m1(!1)}}}else r=t;return i.memoizedState=i.baseState=r,e={pending:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:r},i.queue=e,e=e.dispatch=bu.bind(null,P,e),[i.memoizedState,e]},useRef:function(e){var t=a2();return e={current:e},t.memoizedState=e},useState:function(e){e=ds(e);var t=e.queue,s=Ur.bind(null,P,t);return t.dispatch=s,[e.memoizedState,s]},useDebugValue:ms,useDeferredValue:function(e,t){var s=a2();return ps(s,e,t)},useTransition:function(){var e=ds(!1);return e=xr.bind(null,P,e.queue,!0,!1),a2().memoizedState=e,[!1,e]},useSyncExternalStore:function(e,t,s){var i=P,r=a2();if(c0){if(s===void 0)throw Error(n(407));s=s()}else{if(s=t(),D0===null)throw Error(n(349));(a0&127)!==0||sr(i,t,s)}r.memoizedState=s;var l={value:s,getSnapshot:t};return r.queue=l,yr(rr.bind(null,i,l,e),[e]),i.flags|=2048,Oe(9,{destroy:void 0},ir.bind(null,i,l,s,t),null),s},useId:function(){var e=a2(),t=D0.identifierPrefix;if(c0){var s=Z2,i=Q2;s=(i&~(1<<32-y2(i)-1)).toString(32)+s,t="_"+t+"R_"+s,s=h3++,0<s&&(t+="H"+s.toString(32)),t+="_"}else s=fu++,t="_"+t+"r_"+s.toString(32)+"_";return e.memoizedState=t},useHostTransitionStatus:fs,useFormState:pr,useActionState:pr,useOptimistic:function(e){var t=a2();t.memoizedState=t.baseState=e;var s={pending:null,lanes:0,dispatch:null,lastRenderedReducer:null,lastRenderedState:null};return t.queue=s,t=hs.bind(null,P,!0,s),s.dispatch=t,[e,t]},useMemoCache:as,useCacheRefresh:function(){return a2().memoizedState=Su.bind(null,P)},useEffectEvent:function(e){var t=a2(),s={impl:e};return t.memoizedState=s,function(){if((g0&2)!==0)throw Error(n(440));return s.impl.apply(void 0,arguments)}}},Ts={readContext:P0,use:y3,useCallback:Er,useContext:P0,useEffect:os,useImperativeHandle:zr,useInsertionEffect:gr,useLayoutEffect:Sr,useMemo:Mr,useReducer:v3,useRef:Tr,useState:function(){return v3(t1)},useDebugValue:ms,useDeferredValue:function(e,t){var s=X0();return Ar(s,M0.memoizedState,e,t)},useTransition:function(){var e=v3(t1)[0],t=X0().memoizedState;return[typeof e=="boolean"?e:pt(e),t]},useSyncExternalStore:tr,useId:Dr,useHostTransitionStatus:fs,useFormState:_r,useActionState:_r,useOptimistic:function(e,t){var s=X0();return ur(s,M0,e,t)},useMemoCache:as,useCacheRefresh:Cr};Ts.useEffectEvent=vr;var qr={readContext:P0,use:y3,useCallback:Er,useContext:P0,useEffect:os,useImperativeHandle:zr,useInsertionEffect:gr,useLayoutEffect:Sr,useMemo:Mr,useReducer:ns,useRef:Tr,useState:function(){return ns(t1)},useDebugValue:ms,useDeferredValue:function(e,t){var s=X0();return M0===null?ps(s,e,t):Ar(s,M0.memoizedState,e,t)},useTransition:function(){var e=ns(t1)[0],t=X0().memoizedState;return[typeof e=="boolean"?e:pt(e),t]},useSyncExternalStore:tr,useId:Dr,useHostTransitionStatus:fs,useFormState:hr,useActionState:hr,useOptimistic:function(e,t){var s=X0();return M0!==null?ur(s,M0,e,t):(s.baseState=e,[e,s.queue.dispatch])},useMemoCache:as,useCacheRefresh:Cr};qr.useEffectEvent=vr;function ys(e,t,s,i){t=e.memoizedState,s=s(i,t),s=s==null?t:q({},t,s),e.memoizedState=s,e.lanes===0&&(e.updateQueue.baseState=s)}var vs={enqueueSetState:function(e,t,s){e=e._reactInternals;var i=M2(),r=g1(i);r.payload=t,s!=null&&(r.callback=s),t=S1(e,r,i),t!==null&&(f2(t,e,i),dt(t,e,i))},enqueueReplaceState:function(e,t,s){e=e._reactInternals;var i=M2(),r=g1(i);r.tag=1,r.payload=t,s!=null&&(r.callback=s),t=S1(e,r,i),t!==null&&(f2(t,e,i),dt(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var s=M2(),i=g1(s);i.tag=2,t!=null&&(i.callback=t),t=S1(e,i,s),t!==null&&(f2(t,e,s),dt(t,e,s))}};function Br(e,t,s,i,r,l,a){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(i,l,a):t.prototype&&t.prototype.isPureReactComponent?!tt(s,i)||!tt(r,l):!0}function Yr(e,t,s,i){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(s,i),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(s,i),t.state!==e&&vs.enqueueReplaceState(t,t.state,null)}function I1(e,t){var s=t;if("ref"in t){s={};for(var i in t)i!=="ref"&&(s[i]=t[i])}if(e=e.defaultProps){s===t&&(s=q({},s));for(var r in e)s[r]===void 0&&(s[r]=e[r])}return s}function Lr(e){e3(e)}function Gr(e){console.error(e)}function Xr(e){e3(e)}function z3(e,t){try{var s=e.onUncaughtError;s(t.value,{componentStack:t.stack})}catch(i){setTimeout(function(){throw i})}}function Qr(e,t,s){try{var i=e.onCaughtError;i(s.value,{componentStack:s.stack,errorBoundary:t.tag===1?t.stateNode:null})}catch(r){setTimeout(function(){throw r})}}function gs(e,t,s){return s=g1(s),s.tag=3,s.payload={element:null},s.callback=function(){z3(e,t)},s}function Zr(e){return e=g1(e),e.tag=3,e}function Vr(e,t,s,i){var r=s.type.getDerivedStateFromError;if(typeof r=="function"){var l=i.value;e.payload=function(){return r(l)},e.callback=function(){Qr(t,s,i)}}var a=s.stateNode;a!==null&&typeof a.componentDidCatch=="function"&&(e.callback=function(){Qr(t,s,i),typeof r!="function"&&(x1===null?x1=new Set([this]):x1.add(this));var u=i.stack;this.componentDidCatch(i.value,{componentStack:u!==null?u:""})})}function zu(e,t,s,i,r){if(s.flags|=32768,i!==null&&typeof i=="object"&&typeof i.then=="function"){if(t=s.alternate,t!==null&&ge(t,s,r,!0),s=S2.current,s!==null){switch(s.tag){case 31:case 13:return R2===null?H3():s.alternate===null&&B0===0&&(B0=3),s.flags&=-257,s.flags|=65536,s.lanes=r,i===c3?s.flags|=16384:(t=s.updateQueue,t===null?s.updateQueue=new Set([i]):t.add(i),Ks(e,i,r)),!1;case 22:return s.flags|=65536,i===c3?s.flags|=16384:(t=s.updateQueue,t===null?(t={transitions:null,markerInstances:null,retryQueue:new Set([i])},s.updateQueue=t):(s=t.retryQueue,s===null?t.retryQueue=new Set([i]):s.add(i)),Ks(e,i,r)),!1}throw Error(n(435,s.tag))}return Ks(e,i,r),H3(),!1}if(c0)return t=S2.current,t!==null?((t.flags&65536)===0&&(t.flags|=256),t.flags|=65536,t.lanes=r,i!==L4&&(e=Error(n(422),{cause:i}),rt(N2(e,s)))):(i!==L4&&(t=Error(n(423),{cause:i}),rt(N2(t,s))),e=e.current.alternate,e.flags|=65536,r&=-r,e.lanes|=r,i=N2(i,s),r=gs(e.stateNode,i,r),F4(e,r),B0!==4&&(B0=2)),!1;var l=Error(n(520),{cause:i});if(l=N2(l,s),zt===null?zt=[l]:zt.push(l),B0!==4&&(B0=2),t===null)return!0;i=N2(i,s),s=t;do{switch(s.tag){case 3:return s.flags|=65536,e=r&-r,s.lanes|=e,e=gs(s.stateNode,i,e),F4(s,e),!1;case 1:if(t=s.type,l=s.stateNode,(s.flags&128)===0&&(typeof t.getDerivedStateFromError=="function"||l!==null&&typeof l.componentDidCatch=="function"&&(x1===null||!x1.has(l))))return s.flags|=65536,r&=-r,s.lanes|=r,r=Zr(r),Vr(r,e,s,i),F4(s,r),!1}s=s.return}while(s!==null);return!1}var Ss=Error(n(461)),V0=!1;function e2(e,t,s,i){t.child=e===null?$i(t,null,s,i):F1(t,e.child,s,i)}function Kr(e,t,s,i,r){s=s.render;var l=t.ref;if("ref"in i){var a={};for(var u in i)u!=="ref"&&(a[u]=i[u])}else a=i;return J1(t),i=ss(e,t,s,a,l,r),u=is(),e!==null&&!V0?(rs(e,t,r),s1(e,t,r)):(c0&&u&&B4(t),t.flags|=1,e2(e,t,i,r),t.child)}function Jr(e,t,s,i,r){if(e===null){var l=s.type;return typeof l=="function"&&!j4(l)&&l.defaultProps===void 0&&s.compare===null?(t.tag=15,t.type=l,wr(e,t,l,i,r)):(e=r3(s.type,null,i,t,t.mode,r),e.ref=t.ref,e.return=t,t.child=e)}if(l=e.child,!Ns(e,r)){var a=l.memoizedProps;if(s=s.compare,s=s!==null?s:tt,s(a,i)&&e.ref===t.ref)return s1(e,t,r)}return t.flags|=1,e=F2(l,i),e.ref=t.ref,e.return=t,t.child=e}function wr(e,t,s,i,r){if(e!==null){var l=e.memoizedProps;if(tt(l,i)&&e.ref===t.ref)if(V0=!1,t.pendingProps=i=l,Ns(e,r))(e.flags&131072)!==0&&(V0=!0);else return t.lanes=e.lanes,s1(e,t,r)}return bs(e,t,s,i,r)}function $r(e,t,s,i){var r=i.children,l=e!==null?e.memoizedState:null;if(e===null&&t.stateNode===null&&(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),i.mode==="hidden"){if((t.flags&128)!==0){if(l=l!==null?l.baseLanes|s:s,e!==null){for(i=t.child=e.child,r=0;i!==null;)r=r|i.lanes|i.childLanes,i=i.sibling;i=r&~l}else i=0,t.child=null;return kr(e,t,l,s,i)}if((s&536870912)!==0)t.memoizedState={baseLanes:0,cachePool:null},e!==null&&n3(t,l!==null?l.cachePool:null),l!==null?Wi(t,l):I4(),Ii(t);else return i=t.lanes=536870912,kr(e,t,l!==null?l.baseLanes|s:s,s,i)}else l!==null?(n3(t,l.cachePool),Wi(t,l),z1(),t.memoizedState=null):(e!==null&&n3(t,null),I4(),z1());return e2(e,t,r,s),t.child}function ht(e,t){return e!==null&&e.tag===22||t.stateNode!==null||(t.stateNode={_visibility:1,_pendingMarkers:null,_retryCache:null,_transitions:null}),t.sibling}function kr(e,t,s,i,r){var l=J4();return l=l===null?null:{parent:Q0._currentValue,pool:l},t.memoizedState={baseLanes:s,cachePool:l},e!==null&&n3(t,null),I4(),Ii(t),e!==null&&ge(e,t,i,!0),t.childLanes=r,null}function E3(e,t){return t=A3({mode:t.mode,children:t.children},e.mode),t.ref=e.ref,e.child=t,t.return=e,t}function Fr(e,t,s){return F1(t,e.child,null,s),e=E3(t,t.pendingProps),e.flags|=2,b2(t),t.memoizedState=null,e}function Eu(e,t,s){var i=t.pendingProps,r=(t.flags&128)!==0;if(t.flags&=-129,e===null){if(c0){if(i.mode==="hidden")return e=E3(t,i),t.lanes=536870912,ht(null,e);if(es(t),(e=U0)?(e=n6(e,U2),e=e!==null&&e.data==="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:f1!==null?{id:Q2,overflow:Z2}:null,retryLane:536870912,hydrationErrors:null},s=Ri(e),s.return=t,t.child=s,I0=t,U0=null)):e=null,e===null)throw T1(t);return t.lanes=536870912,null}return E3(t,i)}var l=e.memoizedState;if(l!==null){var a=l.dehydrated;if(es(t),r)if(t.flags&256)t.flags&=-257,t=Fr(e,t,s);else if(t.memoizedState!==null)t.child=e.child,t.flags|=128,t=null;else throw Error(n(558));else if(V0||ge(e,t,s,!1),r=(s&e.childLanes)!==0,V0||r){if(i=D0,i!==null&&(a=G5(i,s),a!==0&&a!==l.retryLane))throw l.retryLane=a,Q1(e,a),f2(i,e,a),Ss;H3(),t=Fr(e,t,s)}else e=l.treeContext,U0=j2(a.nextSibling),I0=t,c0=!0,h1=null,U2=!1,e!==null&&qi(t,e),t=E3(t,i),t.flags|=4096;return t}return e=F2(e.child,{mode:i.mode,children:i.children}),e.ref=t.ref,t.child=e,e.return=t,e}function M3(e,t){var s=t.ref;if(s===null)e!==null&&e.ref!==null&&(t.flags|=4194816);else{if(typeof s!="function"&&typeof s!="object")throw Error(n(284));(e===null||e.ref!==s)&&(t.flags|=4194816)}}function bs(e,t,s,i,r){return J1(t),s=ss(e,t,s,i,void 0,r),i=is(),e!==null&&!V0?(rs(e,t,r),s1(e,t,r)):(c0&&i&&B4(t),t.flags|=1,e2(e,t,s,r),t.child)}function Wr(e,t,s,i,r,l){return J1(t),t.updateQueue=null,s=er(t,i,s,r),Pi(e),i=is(),e!==null&&!V0?(rs(e,t,l),s1(e,t,l)):(c0&&i&&B4(t),t.flags|=1,e2(e,t,s,l),t.child)}function Ir(e,t,s,i,r){if(J1(t),t.stateNode===null){var l=he,a=s.contextType;typeof a=="object"&&a!==null&&(l=P0(a)),l=new s(i,l),t.memoizedState=l.state!==null&&l.state!==void 0?l.state:null,l.updater=vs,t.stateNode=l,l._reactInternals=t,l=t.stateNode,l.props=i,l.state=t.memoizedState,l.refs={},$4(t),a=s.contextType,l.context=typeof a=="object"&&a!==null?P0(a):he,l.state=t.memoizedState,a=s.getDerivedStateFromProps,typeof a=="function"&&(ys(t,s,a,i),l.state=t.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof l.getSnapshotBeforeUpdate=="function"||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(a=l.state,typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount(),a!==l.state&&vs.enqueueReplaceState(l,l.state,null),ot(t,i,l,r),ct(),l.state=t.memoizedState),typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!0}else if(e===null){l=t.stateNode;var u=t.memoizedProps,d=I1(s,u);l.props=d;var h=l.context,x=s.contextType;a=he,typeof x=="object"&&x!==null&&(a=P0(x));var C=s.getDerivedStateFromProps;x=typeof C=="function"||typeof l.getSnapshotBeforeUpdate=="function",u=t.pendingProps!==u,x||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(u||h!==a)&&Yr(t,l,i,a),v1=!1;var v=t.memoizedState;l.state=v,ot(t,i,l,r),ct(),h=t.memoizedState,u||v!==h||v1?(typeof C=="function"&&(ys(t,s,C,i),h=t.memoizedState),(d=v1||Br(t,s,d,i,v,h,a))?(x||typeof l.UNSAFE_componentWillMount!="function"&&typeof l.componentWillMount!="function"||(typeof l.componentWillMount=="function"&&l.componentWillMount(),typeof l.UNSAFE_componentWillMount=="function"&&l.UNSAFE_componentWillMount()),typeof l.componentDidMount=="function"&&(t.flags|=4194308)):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=i,t.memoizedState=h),l.props=i,l.state=h,l.context=a,i=d):(typeof l.componentDidMount=="function"&&(t.flags|=4194308),i=!1)}else{l=t.stateNode,k4(e,t),a=t.memoizedProps,x=I1(s,a),l.props=x,C=t.pendingProps,v=l.context,h=s.contextType,d=he,typeof h=="object"&&h!==null&&(d=P0(h)),u=s.getDerivedStateFromProps,(h=typeof u=="function"||typeof l.getSnapshotBeforeUpdate=="function")||typeof l.UNSAFE_componentWillReceiveProps!="function"&&typeof l.componentWillReceiveProps!="function"||(a!==C||v!==d)&&Yr(t,l,i,d),v1=!1,v=t.memoizedState,l.state=v,ot(t,i,l,r),ct();var b=t.memoizedState;a!==C||v!==b||v1||e!==null&&e.dependencies!==null&&a3(e.dependencies)?(typeof u=="function"&&(ys(t,s,u,i),b=t.memoizedState),(x=v1||Br(t,s,x,i,v,b,d)||e!==null&&e.dependencies!==null&&a3(e.dependencies))?(h||typeof l.UNSAFE_componentWillUpdate!="function"&&typeof l.componentWillUpdate!="function"||(typeof l.componentWillUpdate=="function"&&l.componentWillUpdate(i,b,d),typeof l.UNSAFE_componentWillUpdate=="function"&&l.UNSAFE_componentWillUpdate(i,b,d)),typeof l.componentDidUpdate=="function"&&(t.flags|=4),typeof l.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),t.memoizedProps=i,t.memoizedState=b),l.props=i,l.state=b,l.context=d,i=x):(typeof l.componentDidUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=4),typeof l.getSnapshotBeforeUpdate!="function"||a===e.memoizedProps&&v===e.memoizedState||(t.flags|=1024),i=!1)}return l=i,M3(e,t),i=(t.flags&128)!==0,l||i?(l=t.stateNode,s=i&&typeof s.getDerivedStateFromError!="function"?null:l.render(),t.flags|=1,e!==null&&i?(t.child=F1(t,e.child,null,r),t.child=F1(t,null,s,r)):e2(e,t,s,r),t.memoizedState=l.state,e=t.child):e=s1(e,t,r),e}function Pr(e,t,s,i){return V1(),t.flags|=256,e2(e,t,s,i),t.child}var zs={dehydrated:null,treeContext:null,retryLane:0,hydrationErrors:null};function Es(e){return{baseLanes:e,cachePool:Qi()}}function Ms(e,t,s){return e=e!==null?e.childLanes&~s:0,t&&(e|=E2),e}function el(e,t,s){var i=t.pendingProps,r=!1,l=(t.flags&128)!==0,a;if((a=l)||(a=e!==null&&e.memoizedState===null?!1:(G0.current&2)!==0),a&&(r=!0,t.flags&=-129),a=(t.flags&32)!==0,t.flags&=-33,e===null){if(c0){if(r?b1(t):z1(),(e=U0)?(e=n6(e,U2),e=e!==null&&e.data!=="&"?e:null,e!==null&&(t.memoizedState={dehydrated:e,treeContext:f1!==null?{id:Q2,overflow:Z2}:null,retryLane:536870912,hydrationErrors:null},s=Ri(e),s.return=t,t.child=s,I0=t,U0=null)):e=null,e===null)throw T1(t);return u5(e)?t.lanes=32:t.lanes=536870912,null}var u=i.children;return i=i.fallback,r?(z1(),r=t.mode,u=A3({mode:"hidden",children:u},r),i=Z1(i,r,s,null),u.return=t,i.return=t,u.sibling=i,t.child=u,i=t.child,i.memoizedState=Es(s),i.childLanes=Ms(e,a,s),t.memoizedState=zs,ht(null,i)):(b1(t),As(t,u))}var d=e.memoizedState;if(d!==null&&(u=d.dehydrated,u!==null)){if(l)t.flags&256?(b1(t),t.flags&=-257,t=xs(e,t,s)):t.memoizedState!==null?(z1(),t.child=e.child,t.flags|=128,t=null):(z1(),u=i.fallback,r=t.mode,i=A3({mode:"visible",children:i.children},r),u=Z1(u,r,s,null),u.flags|=2,i.return=t,u.return=t,i.sibling=u,t.child=i,F1(t,e.child,null,s),i=t.child,i.memoizedState=Es(s),i.childLanes=Ms(e,a,s),t.memoizedState=zs,t=ht(null,i));else if(b1(t),u5(u)){if(a=u.nextSibling&&u.nextSibling.dataset,a)var h=a.dgst;a=h,i=Error(n(419)),i.stack="",i.digest=a,rt({value:i,source:null,stack:null}),t=xs(e,t,s)}else if(V0||ge(e,t,s,!1),a=(s&e.childLanes)!==0,V0||a){if(a=D0,a!==null&&(i=G5(a,s),i!==0&&i!==d.retryLane))throw d.retryLane=i,Q1(e,i),f2(a,e,i),Ss;a5(u)||H3(),t=xs(e,t,s)}else a5(u)?(t.flags|=192,t.child=e.child,t=null):(e=d.treeContext,U0=j2(u.nextSibling),I0=t,c0=!0,h1=null,U2=!1,e!==null&&qi(t,e),t=As(t,i.children),t.flags|=4096);return t}return r?(z1(),u=i.fallback,r=t.mode,d=e.child,h=d.sibling,i=F2(d,{mode:"hidden",children:i.children}),i.subtreeFlags=d.subtreeFlags&65011712,h!==null?u=F2(h,u):(u=Z1(u,r,s,null),u.flags|=2),u.return=t,i.return=t,i.sibling=u,t.child=i,ht(null,i),i=t.child,u=e.child.memoizedState,u===null?u=Es(s):(r=u.cachePool,r!==null?(d=Q0._currentValue,r=r.parent!==d?{parent:d,pool:d}:r):r=Qi(),u={baseLanes:u.baseLanes|s,cachePool:r}),i.memoizedState=u,i.childLanes=Ms(e,a,s),t.memoizedState=zs,ht(e.child,i)):(b1(t),s=e.child,e=s.sibling,s=F2(s,{mode:"visible",children:i.children}),s.return=t,s.sibling=null,e!==null&&(a=t.deletions,a===null?(t.deletions=[e],t.flags|=16):a.push(e)),t.child=s,t.memoizedState=null,s)}function As(e,t){return t=A3({mode:"visible",children:t},e.mode),t.return=e,e.child=t}function A3(e,t){return e=g2(22,e,null,t),e.lanes=0,e}function xs(e,t,s){return F1(t,e.child,null,s),e=As(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function tl(e,t,s){e.lanes|=t;var i=e.alternate;i!==null&&(i.lanes|=t),Q4(e.return,t,s)}function Os(e,t,s,i,r,l){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:i,tail:s,tailMode:r,treeForkCount:l}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=i,a.tail=s,a.tailMode=r,a.treeForkCount=l)}function sl(e,t,s){var i=t.pendingProps,r=i.revealOrder,l=i.tail;i=i.children;var a=G0.current,u=(a&2)!==0;if(u?(a=a&1|2,t.flags|=128):a&=1,y(G0,a),e2(e,t,i,s),i=c0?it:0,!u&&e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&tl(e,s,t);else if(e.tag===19)tl(e,s,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}switch(r){case"forwards":for(s=t.child,r=null;s!==null;)e=s.alternate,e!==null&&_3(e)===null&&(r=s),s=s.sibling;s=r,s===null?(r=t.child,t.child=null):(r=s.sibling,s.sibling=null),Os(t,!1,r,s,l,i);break;case"backwards":case"unstable_legacy-backwards":for(s=null,r=t.child,t.child=null;r!==null;){if(e=r.alternate,e!==null&&_3(e)===null){t.child=r;break}e=r.sibling,r.sibling=s,s=r,r=e}Os(t,!0,s,null,l,i);break;case"together":Os(t,!1,null,null,void 0,i);break;default:t.memoizedState=null}return t.child}function s1(e,t,s){if(e!==null&&(t.dependencies=e.dependencies),A1|=t.lanes,(s&t.childLanes)===0)if(e!==null){if(ge(e,t,s,!1),(s&t.childLanes)===0)return null}else return null;if(e!==null&&t.child!==e.child)throw Error(n(153));if(t.child!==null){for(e=t.child,s=F2(e,e.pendingProps),t.child=s,s.return=t;e.sibling!==null;)e=e.sibling,s=s.sibling=F2(e,e.pendingProps),s.return=t;s.sibling=null}return t.child}function Ns(e,t){return(e.lanes&t)!==0?!0:(e=e.dependencies,!!(e!==null&&a3(e)))}function Mu(e,t,s){switch(t.tag){case 3:G(t,t.stateNode.containerInfo),y1(t,Q0,e.memoizedState.cache),V1();break;case 27:case 5:F(t);break;case 4:G(t,t.stateNode.containerInfo);break;case 10:y1(t,t.type,t.memoizedProps.value);break;case 31:if(t.memoizedState!==null)return t.flags|=128,es(t),null;break;case 13:var i=t.memoizedState;if(i!==null)return i.dehydrated!==null?(b1(t),t.flags|=128,null):(s&t.child.childLanes)!==0?el(e,t,s):(b1(t),e=s1(e,t,s),e!==null?e.sibling:null);b1(t);break;case 19:var r=(e.flags&128)!==0;if(i=(s&t.childLanes)!==0,i||(ge(e,t,s,!1),i=(s&t.childLanes)!==0),r){if(i)return sl(e,t,s);t.flags|=128}if(r=t.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),y(G0,G0.current),i)break;return null;case 22:return t.lanes=0,$r(e,t,s,t.pendingProps);case 24:y1(t,Q0,e.memoizedState.cache)}return s1(e,t,s)}function il(e,t,s){if(e!==null)if(e.memoizedProps!==t.pendingProps)V0=!0;else{if(!Ns(e,s)&&(t.flags&128)===0)return V0=!1,Mu(e,t,s);V0=(e.flags&131072)!==0}else V0=!1,c0&&(t.flags&1048576)!==0&&Hi(t,it,t.index);switch(t.lanes=0,t.tag){case 16:e:{var i=t.pendingProps;if(e=$1(t.elementType),t.type=e,typeof e=="function")j4(e)?(i=I1(e,i),t.tag=1,t=Ir(null,t,e,i,s)):(t.tag=0,t=bs(null,t,e,i,s));else{if(e!=null){var r=e.$$typeof;if(r===t0){t.tag=11,t=Kr(null,t,e,i,s);break e}else if(r===I){t.tag=14,t=Jr(null,t,e,i,s);break e}}throw t=F0(e)||e,Error(n(306,t,""))}}return t;case 0:return bs(e,t,t.type,t.pendingProps,s);case 1:return i=t.type,r=I1(i,t.pendingProps),Ir(e,t,i,r,s);case 3:e:{if(G(t,t.stateNode.containerInfo),e===null)throw Error(n(387));i=t.pendingProps;var l=t.memoizedState;r=l.element,k4(e,t),ot(t,i,null,s);var a=t.memoizedState;if(i=a.cache,y1(t,Q0,i),i!==l.cache&&Z4(t,[Q0],s,!0),ct(),i=a.element,l.isDehydrated)if(l={element:i,isDehydrated:!1,cache:a.cache},t.updateQueue.baseState=l,t.memoizedState=l,t.flags&256){t=Pr(e,t,i,s);break e}else if(i!==r){r=N2(Error(n(424)),t),rt(r),t=Pr(e,t,i,s);break e}else{switch(e=t.stateNode.containerInfo,e.nodeType){case 9:e=e.body;break;default:e=e.nodeName==="HTML"?e.ownerDocument.body:e}for(U0=j2(e.firstChild),I0=t,c0=!0,h1=null,U2=!0,s=$i(t,null,i,s),t.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling}else{if(V1(),i===r){t=s1(e,t,s);break e}e2(e,t,i,s)}t=t.child}return t;case 26:return M3(e,t),e===null?(s=_6(t.type,null,t.pendingProps,null))?t.memoizedState=s:c0||(s=t.type,e=t.pendingProps,i=Q3(j.current).createElement(s),i[W0]=t,i[d2]=e,t2(i,s,e),$0(i),t.stateNode=i):t.memoizedState=_6(t.type,e.memoizedProps,t.pendingProps,e.memoizedState),null;case 27:return F(t),e===null&&c0&&(i=t.stateNode=o6(t.type,t.pendingProps,j.current),I0=t,U2=!0,r=U0,C1(t.type)?(n5=r,U0=j2(i.firstChild)):U0=r),e2(e,t,t.pendingProps.children,s),M3(e,t),e===null&&(t.flags|=4194304),t.child;case 5:return e===null&&c0&&((r=i=U0)&&(i=tn(i,t.type,t.pendingProps,U2),i!==null?(t.stateNode=i,I0=t,U0=j2(i.firstChild),U2=!1,r=!0):r=!1),r||T1(t)),F(t),r=t.type,l=t.pendingProps,a=e!==null?e.memoizedProps:null,i=l.children,i5(r,l)?i=null:a!==null&&i5(r,a)&&(t.flags|=32),t.memoizedState!==null&&(r=ss(e,t,hu,null,null,s),Ct._currentValue=r),M3(e,t),e2(e,t,i,s),t.child;case 6:return e===null&&c0&&((e=s=U0)&&(s=sn(s,t.pendingProps,U2),s!==null?(t.stateNode=s,I0=t,U0=null,e=!0):e=!1),e||T1(t)),null;case 13:return el(e,t,s);case 4:return G(t,t.stateNode.containerInfo),i=t.pendingProps,e===null?t.child=F1(t,null,i,s):e2(e,t,i,s),t.child;case 11:return Kr(e,t,t.type,t.pendingProps,s);case 7:return e2(e,t,t.pendingProps,s),t.child;case 8:return e2(e,t,t.pendingProps.children,s),t.child;case 12:return e2(e,t,t.pendingProps.children,s),t.child;case 10:return i=t.pendingProps,y1(t,t.type,i.value),e2(e,t,i.children,s),t.child;case 9:return r=t.type._context,i=t.pendingProps.children,J1(t),r=P0(r),i=i(r),t.flags|=1,e2(e,t,i,s),t.child;case 14:return Jr(e,t,t.type,t.pendingProps,s);case 15:return wr(e,t,t.type,t.pendingProps,s);case 19:return sl(e,t,s);case 31:return Eu(e,t,s);case 22:return $r(e,t,s,t.pendingProps);case 24:return J1(t),i=P0(Q0),e===null?(r=J4(),r===null&&(r=D0,l=V4(),r.pooledCache=l,l.refCount++,l!==null&&(r.pooledCacheLanes|=s),r=l),t.memoizedState={parent:i,cache:r},$4(t),y1(t,Q0,r)):((e.lanes&s)!==0&&(k4(e,t),ot(t,null,null,s),ct()),r=e.memoizedState,l=t.memoizedState,r.parent!==i?(r={parent:i,cache:i},t.memoizedState=r,t.lanes===0&&(t.memoizedState=t.updateQueue.baseState=r),y1(t,Q0,i)):(i=l.cache,y1(t,Q0,i),i!==r.cache&&Z4(t,[Q0],s,!0))),e2(e,t,t.pendingProps.children,s),t.child;case 29:throw t.pendingProps}throw Error(n(156,t.tag))}function i1(e){e.flags|=4}function Ds(e,t,s,i,r){if((t=(e.mode&32)!==0)&&(t=!1),t){if(e.flags|=16777216,(r&335544128)===r)if(e.stateNode.complete)e.flags|=8192;else if(Dl())e.flags|=8192;else throw k1=c3,w4}else e.flags&=-16777217}function rl(e,t){if(t.type!=="stylesheet"||(t.state.loading&4)!==0)e.flags&=-16777217;else if(e.flags|=16777216,!v6(t))if(Dl())e.flags|=8192;else throw k1=c3,w4}function x3(e,t){t!==null&&(e.flags|=4),e.flags&16384&&(t=e.tag!==22?B5():536870912,e.lanes|=t,Ue|=t)}function Tt(e,t){if(!c0)switch(e.tailMode){case"hidden":t=e.tail;for(var s=null;t!==null;)t.alternate!==null&&(s=t),t=t.sibling;s===null?e.tail=null:s.sibling=null;break;case"collapsed":s=e.tail;for(var i=null;s!==null;)s.alternate!==null&&(i=s),s=s.sibling;i===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:i.sibling=null}}function R0(e){var t=e.alternate!==null&&e.alternate.child===e.child,s=0,i=0;if(t)for(var r=e.child;r!==null;)s|=r.lanes|r.childLanes,i|=r.subtreeFlags&65011712,i|=r.flags&65011712,r.return=e,r=r.sibling;else for(r=e.child;r!==null;)s|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=e,r=r.sibling;return e.subtreeFlags|=i,e.childLanes=s,t}function Au(e,t,s){var i=t.pendingProps;switch(Y4(t),t.tag){case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return R0(t),null;case 1:return R0(t),null;case 3:return s=t.stateNode,i=null,e!==null&&(i=e.memoizedState.cache),t.memoizedState.cache!==i&&(t.flags|=2048),P2(Q0),Z(),s.pendingContext&&(s.context=s.pendingContext,s.pendingContext=null),(e===null||e.child===null)&&(ve(t)?i1(t):e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,G4())),R0(t),null;case 26:var r=t.type,l=t.memoizedState;return e===null?(i1(t),l!==null?(R0(t),rl(t,l)):(R0(t),Ds(t,r,null,i,s))):l?l!==e.memoizedState?(i1(t),R0(t),rl(t,l)):(R0(t),t.flags&=-16777217):(e=e.memoizedProps,e!==i&&i1(t),R0(t),Ds(t,r,e,i,s)),null;case 27:if(m0(t),s=j.current,r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&i1(t);else{if(!i){if(t.stateNode===null)throw Error(n(166));return R0(t),null}e=O.current,ve(t)?Bi(t):(e=o6(r,i,s),t.stateNode=e,i1(t))}return R0(t),null;case 5:if(m0(t),r=t.type,e!==null&&t.stateNode!=null)e.memoizedProps!==i&&i1(t);else{if(!i){if(t.stateNode===null)throw Error(n(166));return R0(t),null}if(l=O.current,ve(t))Bi(t);else{var a=Q3(j.current);switch(l){case 1:l=a.createElementNS("http://www.w3.org/2000/svg",r);break;case 2:l=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;default:switch(r){case"svg":l=a.createElementNS("http://www.w3.org/2000/svg",r);break;case"math":l=a.createElementNS("http://www.w3.org/1998/Math/MathML",r);break;case"script":l=a.createElement("div"),l.innerHTML="<script><\/script>",l=l.removeChild(l.firstChild);break;case"select":l=typeof i.is=="string"?a.createElement("select",{is:i.is}):a.createElement("select"),i.multiple?l.multiple=!0:i.size&&(l.size=i.size);break;default:l=typeof i.is=="string"?a.createElement(r,{is:i.is}):a.createElement(r)}}l[W0]=t,l[d2]=i;e:for(a=t.child;a!==null;){if(a.tag===5||a.tag===6)l.appendChild(a.stateNode);else if(a.tag!==4&&a.tag!==27&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===t)break e;for(;a.sibling===null;){if(a.return===null||a.return===t)break e;a=a.return}a.sibling.return=a.return,a=a.sibling}t.stateNode=l;e:switch(t2(l,r,i),r){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}i&&i1(t)}}return R0(t),Ds(t,t.type,e===null?null:e.memoizedProps,t.pendingProps,s),null;case 6:if(e&&t.stateNode!=null)e.memoizedProps!==i&&i1(t);else{if(typeof i!="string"&&t.stateNode===null)throw Error(n(166));if(e=j.current,ve(t)){if(e=t.stateNode,s=t.memoizedProps,i=null,r=I0,r!==null)switch(r.tag){case 27:case 5:i=r.memoizedProps}e[W0]=t,e=!!(e.nodeValue===s||i!==null&&i.suppressHydrationWarning===!0||e6(e.nodeValue,s)),e||T1(t,!0)}else e=Q3(e).createTextNode(i),e[W0]=t,t.stateNode=e}return R0(t),null;case 31:if(s=t.memoizedState,e===null||e.memoizedState!==null){if(i=ve(t),s!==null){if(e===null){if(!i)throw Error(n(318));if(e=t.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(n(557));e[W0]=t}else V1(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;R0(t),e=!1}else s=G4(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=s),e=!0;if(!e)return t.flags&256?(b2(t),t):(b2(t),null);if((t.flags&128)!==0)throw Error(n(558))}return R0(t),null;case 13:if(i=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(r=ve(t),i!==null&&i.dehydrated!==null){if(e===null){if(!r)throw Error(n(318));if(r=t.memoizedState,r=r!==null?r.dehydrated:null,!r)throw Error(n(317));r[W0]=t}else V1(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;R0(t),r=!1}else r=G4(),e!==null&&e.memoizedState!==null&&(e.memoizedState.hydrationErrors=r),r=!0;if(!r)return t.flags&256?(b2(t),t):(b2(t),null)}return b2(t),(t.flags&128)!==0?(t.lanes=s,t):(s=i!==null,e=e!==null&&e.memoizedState!==null,s&&(i=t.child,r=null,i.alternate!==null&&i.alternate.memoizedState!==null&&i.alternate.memoizedState.cachePool!==null&&(r=i.alternate.memoizedState.cachePool.pool),l=null,i.memoizedState!==null&&i.memoizedState.cachePool!==null&&(l=i.memoizedState.cachePool.pool),l!==r&&(i.flags|=2048)),s!==e&&s&&(t.child.flags|=8192),x3(t,t.updateQueue),R0(t),null);case 4:return Z(),e===null&&Is(t.stateNode.containerInfo),R0(t),null;case 10:return P2(t.type),R0(t),null;case 19:if(D(G0),i=t.memoizedState,i===null)return R0(t),null;if(r=(t.flags&128)!==0,l=i.rendering,l===null)if(r)Tt(i,!1);else{if(B0!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(l=_3(e),l!==null){for(t.flags|=128,Tt(i,!1),e=l.updateQueue,t.updateQueue=e,x3(t,e),t.subtreeFlags=0,e=s,s=t.child;s!==null;)Ui(s,e),s=s.sibling;return y(G0,G0.current&1|2),c0&&W2(t,i.treeForkCount),t.child}e=e.sibling}i.tail!==null&&h2()>U3&&(t.flags|=128,r=!0,Tt(i,!1),t.lanes=4194304)}else{if(!r)if(e=_3(l),e!==null){if(t.flags|=128,r=!0,e=e.updateQueue,t.updateQueue=e,x3(t,e),Tt(i,!0),i.tail===null&&i.tailMode==="hidden"&&!l.alternate&&!c0)return R0(t),null}else 2*h2()-i.renderingStartTime>U3&&s!==536870912&&(t.flags|=128,r=!0,Tt(i,!1),t.lanes=4194304);i.isBackwards?(l.sibling=t.child,t.child=l):(e=i.last,e!==null?e.sibling=l:t.child=l,i.last=l)}return i.tail!==null?(e=i.tail,i.rendering=e,i.tail=e.sibling,i.renderingStartTime=h2(),e.sibling=null,s=G0.current,y(G0,r?s&1|2:s&1),c0&&W2(t,i.treeForkCount),e):(R0(t),null);case 22:case 23:return b2(t),P4(),i=t.memoizedState!==null,e!==null?e.memoizedState!==null!==i&&(t.flags|=8192):i&&(t.flags|=8192),i?(s&536870912)!==0&&(t.flags&128)===0&&(R0(t),t.subtreeFlags&6&&(t.flags|=8192)):R0(t),s=t.updateQueue,s!==null&&x3(t,s.retryQueue),s=null,e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),i=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(i=t.memoizedState.cachePool.pool),i!==s&&(t.flags|=2048),e!==null&&D(w1),null;case 24:return s=null,e!==null&&(s=e.memoizedState.cache),t.memoizedState.cache!==s&&(t.flags|=2048),P2(Q0),R0(t),null;case 25:return null;case 30:return null}throw Error(n(156,t.tag))}function xu(e,t){switch(Y4(t),t.tag){case 1:return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return P2(Q0),Z(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 26:case 27:case 5:return m0(t),null;case 31:if(t.memoizedState!==null){if(b2(t),t.alternate===null)throw Error(n(340));V1()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 13:if(b2(t),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(n(340));V1()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return D(G0),null;case 4:return Z(),null;case 10:return P2(t.type),null;case 22:case 23:return b2(t),P4(),e!==null&&D(w1),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 24:return P2(Q0),null;case 25:return null;default:return null}}function ll(e,t){switch(Y4(t),t.tag){case 3:P2(Q0),Z();break;case 26:case 27:case 5:m0(t);break;case 4:Z();break;case 31:t.memoizedState!==null&&b2(t);break;case 13:b2(t);break;case 19:D(G0);break;case 10:P2(t.type);break;case 22:case 23:b2(t),P4(),e!==null&&D(w1);break;case 24:P2(Q0)}}function yt(e,t){try{var s=t.updateQueue,i=s!==null?s.lastEffect:null;if(i!==null){var r=i.next;s=r;do{if((s.tag&e)===e){i=void 0;var l=s.create,a=s.inst;i=l(),a.destroy=i}s=s.next}while(s!==r)}}catch(u){E0(t,t.return,u)}}function E1(e,t,s){try{var i=t.updateQueue,r=i!==null?i.lastEffect:null;if(r!==null){var l=r.next;i=l;do{if((i.tag&e)===e){var a=i.inst,u=a.destroy;if(u!==void 0){a.destroy=void 0,r=t;var d=s,h=u;try{h()}catch(x){E0(r,d,x)}}}i=i.next}while(i!==l)}}catch(x){E0(t,t.return,x)}}function al(e){var t=e.updateQueue;if(t!==null){var s=e.stateNode;try{Fi(t,s)}catch(i){E0(e,e.return,i)}}}function ul(e,t,s){s.props=I1(e.type,e.memoizedProps),s.state=e.memoizedState;try{s.componentWillUnmount()}catch(i){E0(e,t,i)}}function vt(e,t){try{var s=e.ref;if(s!==null){switch(e.tag){case 26:case 27:case 5:var i=e.stateNode;break;case 30:i=e.stateNode;break;default:i=e.stateNode}typeof s=="function"?e.refCleanup=s(i):s.current=i}}catch(r){E0(e,t,r)}}function V2(e,t){var s=e.ref,i=e.refCleanup;if(s!==null)if(typeof i=="function")try{i()}catch(r){E0(e,t,r)}finally{e.refCleanup=null,e=e.alternate,e!=null&&(e.refCleanup=null)}else if(typeof s=="function")try{s(null)}catch(r){E0(e,t,r)}else s.current=null}function nl(e){var t=e.type,s=e.memoizedProps,i=e.stateNode;try{e:switch(t){case"button":case"input":case"select":case"textarea":s.autoFocus&&i.focus();break e;case"img":s.src?i.src=s.src:s.srcSet&&(i.srcset=s.srcSet)}}catch(r){E0(e,e.return,r)}}function Cs(e,t,s){try{var i=e.stateNode;ku(i,e.type,s,t),i[d2]=t}catch(r){E0(e,e.return,r)}}function dl(e){return e.tag===5||e.tag===3||e.tag===26||e.tag===27&&C1(e.type)||e.tag===4}function Us(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||dl(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.tag===27&&C1(e.type)||e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Rs(e,t,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?(s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s).insertBefore(e,t):(t=s.nodeType===9?s.body:s.nodeName==="HTML"?s.ownerDocument.body:s,t.appendChild(e),s=s._reactRootContainer,s!=null||t.onclick!==null||(t.onclick=$2));else if(i!==4&&(i===27&&C1(e.type)&&(s=e.stateNode,t=null),e=e.child,e!==null))for(Rs(e,t,s),e=e.sibling;e!==null;)Rs(e,t,s),e=e.sibling}function O3(e,t,s){var i=e.tag;if(i===5||i===6)e=e.stateNode,t?s.insertBefore(e,t):s.appendChild(e);else if(i!==4&&(i===27&&C1(e.type)&&(s=e.stateNode),e=e.child,e!==null))for(O3(e,t,s),e=e.sibling;e!==null;)O3(e,t,s),e=e.sibling}function cl(e){var t=e.stateNode,s=e.memoizedProps;try{for(var i=e.type,r=t.attributes;r.length;)t.removeAttributeNode(r[0]);t2(t,i,s),t[W0]=e,t[d2]=s}catch(l){E0(e,e.return,l)}}var r1=!1,K0=!1,js=!1,ol=typeof WeakSet=="function"?WeakSet:Set,k0=null;function Ou(e,t){if(e=e.containerInfo,t5=k3,e=zi(e),x4(e)){if("selectionStart"in e)var s={start:e.selectionStart,end:e.selectionEnd};else e:{s=(s=e.ownerDocument)&&s.defaultView||window;var i=s.getSelection&&s.getSelection();if(i&&i.rangeCount!==0){s=i.anchorNode;var r=i.anchorOffset,l=i.focusNode;i=i.focusOffset;try{s.nodeType,l.nodeType}catch{s=null;break e}var a=0,u=-1,d=-1,h=0,x=0,C=e,v=null;t:for(;;){for(var b;C!==s||r!==0&&C.nodeType!==3||(u=a+r),C!==l||i!==0&&C.nodeType!==3||(d=a+i),C.nodeType===3&&(a+=C.nodeValue.length),(b=C.firstChild)!==null;)v=C,C=b;for(;;){if(C===e)break t;if(v===s&&++h===r&&(u=a),v===l&&++x===i&&(d=a),(b=C.nextSibling)!==null)break;C=v,v=C.parentNode}C=b}s=u===-1||d===-1?null:{start:u,end:d}}else s=null}s=s||{start:0,end:0}}else s=null;for(s5={focusedElem:e,selectionRange:s},k3=!1,k0=t;k0!==null;)if(t=k0,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,k0=e;else for(;k0!==null;){switch(t=k0,l=t.alternate,e=t.flags,t.tag){case 0:if((e&4)!==0&&(e=t.updateQueue,e=e!==null?e.events:null,e!==null))for(s=0;s<e.length;s++)r=e[s],r.ref.impl=r.nextImpl;break;case 11:case 15:break;case 1:if((e&1024)!==0&&l!==null){e=void 0,s=t,r=l.memoizedProps,l=l.memoizedState,i=s.stateNode;try{var X=I1(s.type,r);e=i.getSnapshotBeforeUpdate(X,l),i.__reactInternalSnapshotBeforeUpdate=e}catch($){E0(s,s.return,$)}}break;case 3:if((e&1024)!==0){if(e=t.stateNode.containerInfo,s=e.nodeType,s===9)l5(e);else if(s===1)switch(e.nodeName){case"HEAD":case"HTML":case"BODY":l5(e);break;default:e.textContent=""}}break;case 5:case 26:case 27:case 6:case 4:case 17:break;default:if((e&1024)!==0)throw Error(n(163))}if(e=t.sibling,e!==null){e.return=t.return,k0=e;break}k0=t.return}}function ml(e,t,s){var i=s.flags;switch(s.tag){case 0:case 11:case 15:a1(e,s),i&4&&yt(5,s);break;case 1:if(a1(e,s),i&4)if(e=s.stateNode,t===null)try{e.componentDidMount()}catch(a){E0(s,s.return,a)}else{var r=I1(s.type,t.memoizedProps);t=t.memoizedState;try{e.componentDidUpdate(r,t,e.__reactInternalSnapshotBeforeUpdate)}catch(a){E0(s,s.return,a)}}i&64&&al(s),i&512&&vt(s,s.return);break;case 3:if(a1(e,s),i&64&&(e=s.updateQueue,e!==null)){if(t=null,s.child!==null)switch(s.child.tag){case 27:case 5:t=s.child.stateNode;break;case 1:t=s.child.stateNode}try{Fi(e,t)}catch(a){E0(s,s.return,a)}}break;case 27:t===null&&i&4&&cl(s);case 26:case 5:a1(e,s),t===null&&i&4&&nl(s),i&512&&vt(s,s.return);break;case 12:a1(e,s);break;case 31:a1(e,s),i&4&&fl(e,s);break;case 13:a1(e,s),i&4&&hl(e,s),i&64&&(e=s.memoizedState,e!==null&&(e=e.dehydrated,e!==null&&(s=Bu.bind(null,s),rn(e,s))));break;case 22:if(i=s.memoizedState!==null||r1,!i){t=t!==null&&t.memoizedState!==null||K0,r=r1;var l=K0;r1=i,(K0=t)&&!l?u1(e,s,(s.subtreeFlags&8772)!==0):a1(e,s),r1=r,K0=l}break;case 30:break;default:a1(e,s)}}function pl(e){var t=e.alternate;t!==null&&(e.alternate=null,pl(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&c4(t)),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}var j0=null,o2=!1;function l1(e,t,s){for(s=s.child;s!==null;)_l(e,t,s),s=s.sibling}function _l(e,t,s){if(T2&&typeof T2.onCommitFiberUnmount=="function")try{T2.onCommitFiberUnmount(Ze,s)}catch{}switch(s.tag){case 26:K0||V2(s,t),l1(e,t,s),s.memoizedState?s.memoizedState.count--:s.stateNode&&(s=s.stateNode,s.parentNode.removeChild(s));break;case 27:K0||V2(s,t);var i=j0,r=o2;C1(s.type)&&(j0=s.stateNode,o2=!1),l1(e,t,s),Ot(s.stateNode),j0=i,o2=r;break;case 5:K0||V2(s,t);case 6:if(i=j0,r=o2,j0=null,l1(e,t,s),j0=i,o2=r,j0!==null)if(o2)try{(j0.nodeType===9?j0.body:j0.nodeName==="HTML"?j0.ownerDocument.body:j0).removeChild(s.stateNode)}catch(l){E0(s,t,l)}else try{j0.removeChild(s.stateNode)}catch(l){E0(s,t,l)}break;case 18:j0!==null&&(o2?(e=j0,a6(e.nodeType===9?e.body:e.nodeName==="HTML"?e.ownerDocument.body:e,s.stateNode),Ge(e)):a6(j0,s.stateNode));break;case 4:i=j0,r=o2,j0=s.stateNode.containerInfo,o2=!0,l1(e,t,s),j0=i,o2=r;break;case 0:case 11:case 14:case 15:E1(2,s,t),K0||E1(4,s,t),l1(e,t,s);break;case 1:K0||(V2(s,t),i=s.stateNode,typeof i.componentWillUnmount=="function"&&ul(s,t,i)),l1(e,t,s);break;case 21:l1(e,t,s);break;case 22:K0=(i=K0)||s.memoizedState!==null,l1(e,t,s),K0=i;break;default:l1(e,t,s)}}function fl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null))){e=e.dehydrated;try{Ge(e)}catch(s){E0(t,t.return,s)}}}function hl(e,t){if(t.memoizedState===null&&(e=t.alternate,e!==null&&(e=e.memoizedState,e!==null&&(e=e.dehydrated,e!==null))))try{Ge(e)}catch(s){E0(t,t.return,s)}}function Nu(e){switch(e.tag){case 31:case 13:case 19:var t=e.stateNode;return t===null&&(t=e.stateNode=new ol),t;case 22:return e=e.stateNode,t=e._retryCache,t===null&&(t=e._retryCache=new ol),t;default:throw Error(n(435,e.tag))}}function N3(e,t){var s=Nu(e);t.forEach(function(i){if(!s.has(i)){s.add(i);var r=Yu.bind(null,e,i);i.then(r,r)}})}function m2(e,t){var s=t.deletions;if(s!==null)for(var i=0;i<s.length;i++){var r=s[i],l=e,a=t,u=a;e:for(;u!==null;){switch(u.tag){case 27:if(C1(u.type)){j0=u.stateNode,o2=!1;break e}break;case 5:j0=u.stateNode,o2=!1;break e;case 3:case 4:j0=u.stateNode.containerInfo,o2=!0;break e}u=u.return}if(j0===null)throw Error(n(160));_l(l,a,r),j0=null,o2=!1,l=r.alternate,l!==null&&(l.return=null),r.return=null}if(t.subtreeFlags&13886)for(t=t.child;t!==null;)Tl(t,e),t=t.sibling}var Y2=null;function Tl(e,t){var s=e.alternate,i=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:m2(t,e),p2(e),i&4&&(E1(3,e,e.return),yt(3,e),E1(5,e,e.return));break;case 1:m2(t,e),p2(e),i&512&&(K0||s===null||V2(s,s.return)),i&64&&r1&&(e=e.updateQueue,e!==null&&(i=e.callbacks,i!==null&&(s=e.shared.hiddenCallbacks,e.shared.hiddenCallbacks=s===null?i:s.concat(i))));break;case 26:var r=Y2;if(m2(t,e),p2(e),i&512&&(K0||s===null||V2(s,s.return)),i&4){var l=s!==null?s.memoizedState:null;if(i=e.memoizedState,s===null)if(i===null)if(e.stateNode===null){e:{i=e.type,s=e.memoizedProps,r=r.ownerDocument||r;t:switch(i){case"title":l=r.getElementsByTagName("title")[0],(!l||l[Je]||l[W0]||l.namespaceURI==="http://www.w3.org/2000/svg"||l.hasAttribute("itemprop"))&&(l=r.createElement(i),r.head.insertBefore(l,r.querySelector("head > title"))),t2(l,i,s),l[W0]=e,$0(l),i=l;break e;case"link":var a=T6("link","href",r).get(i+(s.href||""));if(a){for(var u=0;u<a.length;u++)if(l=a[u],l.getAttribute("href")===(s.href==null||s.href===""?null:s.href)&&l.getAttribute("rel")===(s.rel==null?null:s.rel)&&l.getAttribute("title")===(s.title==null?null:s.title)&&l.getAttribute("crossorigin")===(s.crossOrigin==null?null:s.crossOrigin)){a.splice(u,1);break t}}l=r.createElement(i),t2(l,i,s),r.head.appendChild(l);break;case"meta":if(a=T6("meta","content",r).get(i+(s.content||""))){for(u=0;u<a.length;u++)if(l=a[u],l.getAttribute("content")===(s.content==null?null:""+s.content)&&l.getAttribute("name")===(s.name==null?null:s.name)&&l.getAttribute("property")===(s.property==null?null:s.property)&&l.getAttribute("http-equiv")===(s.httpEquiv==null?null:s.httpEquiv)&&l.getAttribute("charset")===(s.charSet==null?null:s.charSet)){a.splice(u,1);break t}}l=r.createElement(i),t2(l,i,s),r.head.appendChild(l);break;default:throw Error(n(468,i))}l[W0]=e,$0(l),i=l}e.stateNode=i}else y6(r,e.type,e.stateNode);else e.stateNode=h6(r,i,e.memoizedProps);else l!==i?(l===null?s.stateNode!==null&&(s=s.stateNode,s.parentNode.removeChild(s)):l.count--,i===null?y6(r,e.type,e.stateNode):h6(r,i,e.memoizedProps)):i===null&&e.stateNode!==null&&Cs(e,e.memoizedProps,s.memoizedProps)}break;case 27:m2(t,e),p2(e),i&512&&(K0||s===null||V2(s,s.return)),s!==null&&i&4&&Cs(e,e.memoizedProps,s.memoizedProps);break;case 5:if(m2(t,e),p2(e),i&512&&(K0||s===null||V2(s,s.return)),e.flags&32){r=e.stateNode;try{de(r,"")}catch(X){E0(e,e.return,X)}}i&4&&e.stateNode!=null&&(r=e.memoizedProps,Cs(e,r,s!==null?s.memoizedProps:r)),i&1024&&(js=!0);break;case 6:if(m2(t,e),p2(e),i&4){if(e.stateNode===null)throw Error(n(162));i=e.memoizedProps,s=e.stateNode;try{s.nodeValue=i}catch(X){E0(e,e.return,X)}}break;case 3:if(K3=null,r=Y2,Y2=Z3(t.containerInfo),m2(t,e),Y2=r,p2(e),i&4&&s!==null&&s.memoizedState.isDehydrated)try{Ge(t.containerInfo)}catch(X){E0(e,e.return,X)}js&&(js=!1,yl(e));break;case 4:i=Y2,Y2=Z3(e.stateNode.containerInfo),m2(t,e),p2(e),Y2=i;break;case 12:m2(t,e),p2(e);break;case 31:m2(t,e),p2(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,N3(e,i)));break;case 13:m2(t,e),p2(e),e.child.flags&8192&&e.memoizedState!==null!=(s!==null&&s.memoizedState!==null)&&(C3=h2()),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,N3(e,i)));break;case 22:r=e.memoizedState!==null;var d=s!==null&&s.memoizedState!==null,h=r1,x=K0;if(r1=h||r,K0=x||d,m2(t,e),K0=x,r1=h,p2(e),i&8192)e:for(t=e.stateNode,t._visibility=r?t._visibility&-2:t._visibility|1,r&&(s===null||d||r1||K0||P1(e)),s=null,t=e;;){if(t.tag===5||t.tag===26){if(s===null){d=s=t;try{if(l=d.stateNode,r)a=l.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none";else{u=d.stateNode;var C=d.memoizedProps.style,v=C!=null&&C.hasOwnProperty("display")?C.display:null;u.style.display=v==null||typeof v=="boolean"?"":(""+v).trim()}}catch(X){E0(d,d.return,X)}}}else if(t.tag===6){if(s===null){d=t;try{d.stateNode.nodeValue=r?"":d.memoizedProps}catch(X){E0(d,d.return,X)}}}else if(t.tag===18){if(s===null){d=t;try{var b=d.stateNode;r?u6(b,!0):u6(d.stateNode,!1)}catch(X){E0(d,d.return,X)}}}else if((t.tag!==22&&t.tag!==23||t.memoizedState===null||t===e)&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;s===t&&(s=null),t=t.return}s===t&&(s=null),t.sibling.return=t.return,t=t.sibling}i&4&&(i=e.updateQueue,i!==null&&(s=i.retryQueue,s!==null&&(i.retryQueue=null,N3(e,s))));break;case 19:m2(t,e),p2(e),i&4&&(i=e.updateQueue,i!==null&&(e.updateQueue=null,N3(e,i)));break;case 30:break;case 21:break;default:m2(t,e),p2(e)}}function p2(e){var t=e.flags;if(t&2){try{for(var s,i=e.return;i!==null;){if(dl(i)){s=i;break}i=i.return}if(s==null)throw Error(n(160));switch(s.tag){case 27:var r=s.stateNode,l=Us(e);O3(e,l,r);break;case 5:var a=s.stateNode;s.flags&32&&(de(a,""),s.flags&=-33);var u=Us(e);O3(e,u,a);break;case 3:case 4:var d=s.stateNode.containerInfo,h=Us(e);Rs(e,h,d);break;default:throw Error(n(161))}}catch(x){E0(e,e.return,x)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function yl(e){if(e.subtreeFlags&1024)for(e=e.child;e!==null;){var t=e;yl(t),t.tag===5&&t.flags&1024&&t.stateNode.reset(),e=e.sibling}}function a1(e,t){if(t.subtreeFlags&8772)for(t=t.child;t!==null;)ml(e,t.alternate,t),t=t.sibling}function P1(e){for(e=e.child;e!==null;){var t=e;switch(t.tag){case 0:case 11:case 14:case 15:E1(4,t,t.return),P1(t);break;case 1:V2(t,t.return);var s=t.stateNode;typeof s.componentWillUnmount=="function"&&ul(t,t.return,s),P1(t);break;case 27:Ot(t.stateNode);case 26:case 5:V2(t,t.return),P1(t);break;case 22:t.memoizedState===null&&P1(t);break;case 30:P1(t);break;default:P1(t)}e=e.sibling}}function u1(e,t,s){for(s=s&&(t.subtreeFlags&8772)!==0,t=t.child;t!==null;){var i=t.alternate,r=e,l=t,a=l.flags;switch(l.tag){case 0:case 11:case 15:u1(r,l,s),yt(4,l);break;case 1:if(u1(r,l,s),i=l,r=i.stateNode,typeof r.componentDidMount=="function")try{r.componentDidMount()}catch(h){E0(i,i.return,h)}if(i=l,r=i.updateQueue,r!==null){var u=i.stateNode;try{var d=r.shared.hiddenCallbacks;if(d!==null)for(r.shared.hiddenCallbacks=null,r=0;r<d.length;r++)ki(d[r],u)}catch(h){E0(i,i.return,h)}}s&&a&64&&al(l),vt(l,l.return);break;case 27:cl(l);case 26:case 5:u1(r,l,s),s&&i===null&&a&4&&nl(l),vt(l,l.return);break;case 12:u1(r,l,s);break;case 31:u1(r,l,s),s&&a&4&&fl(r,l);break;case 13:u1(r,l,s),s&&a&4&&hl(r,l);break;case 22:l.memoizedState===null&&u1(r,l,s),vt(l,l.return);break;case 30:break;default:u1(r,l,s)}t=t.sibling}}function Hs(e,t){var s=null;e!==null&&e.memoizedState!==null&&e.memoizedState.cachePool!==null&&(s=e.memoizedState.cachePool.pool),e=null,t.memoizedState!==null&&t.memoizedState.cachePool!==null&&(e=t.memoizedState.cachePool.pool),e!==s&&(e!=null&&e.refCount++,s!=null&&lt(s))}function qs(e,t){e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&lt(e))}function L2(e,t,s,i){if(t.subtreeFlags&10256)for(t=t.child;t!==null;)vl(e,t,s,i),t=t.sibling}function vl(e,t,s,i){var r=t.flags;switch(t.tag){case 0:case 11:case 15:L2(e,t,s,i),r&2048&&yt(9,t);break;case 1:L2(e,t,s,i);break;case 3:L2(e,t,s,i),r&2048&&(e=null,t.alternate!==null&&(e=t.alternate.memoizedState.cache),t=t.memoizedState.cache,t!==e&&(t.refCount++,e!=null&&lt(e)));break;case 12:if(r&2048){L2(e,t,s,i),e=t.stateNode;try{var l=t.memoizedProps,a=l.id,u=l.onPostCommit;typeof u=="function"&&u(a,t.alternate===null?"mount":"update",e.passiveEffectDuration,-0)}catch(d){E0(t,t.return,d)}}else L2(e,t,s,i);break;case 31:L2(e,t,s,i);break;case 13:L2(e,t,s,i);break;case 23:break;case 22:l=t.stateNode,a=t.alternate,t.memoizedState!==null?l._visibility&2?L2(e,t,s,i):gt(e,t):l._visibility&2?L2(e,t,s,i):(l._visibility|=2,Ne(e,t,s,i,(t.subtreeFlags&10256)!==0||!1)),r&2048&&Hs(a,t);break;case 24:L2(e,t,s,i),r&2048&&qs(t.alternate,t);break;default:L2(e,t,s,i)}}function Ne(e,t,s,i,r){for(r=r&&((t.subtreeFlags&10256)!==0||!1),t=t.child;t!==null;){var l=e,a=t,u=s,d=i,h=a.flags;switch(a.tag){case 0:case 11:case 15:Ne(l,a,u,d,r),yt(8,a);break;case 23:break;case 22:var x=a.stateNode;a.memoizedState!==null?x._visibility&2?Ne(l,a,u,d,r):gt(l,a):(x._visibility|=2,Ne(l,a,u,d,r)),r&&h&2048&&Hs(a.alternate,a);break;case 24:Ne(l,a,u,d,r),r&&h&2048&&qs(a.alternate,a);break;default:Ne(l,a,u,d,r)}t=t.sibling}}function gt(e,t){if(t.subtreeFlags&10256)for(t=t.child;t!==null;){var s=e,i=t,r=i.flags;switch(i.tag){case 22:gt(s,i),r&2048&&Hs(i.alternate,i);break;case 24:gt(s,i),r&2048&&qs(i.alternate,i);break;default:gt(s,i)}t=t.sibling}}var St=8192;function De(e,t,s){if(e.subtreeFlags&St)for(e=e.child;e!==null;)gl(e,t,s),e=e.sibling}function gl(e,t,s){switch(e.tag){case 26:De(e,t,s),e.flags&St&&e.memoizedState!==null&&hn(s,Y2,e.memoizedState,e.memoizedProps);break;case 5:De(e,t,s);break;case 3:case 4:var i=Y2;Y2=Z3(e.stateNode.containerInfo),De(e,t,s),Y2=i;break;case 22:e.memoizedState===null&&(i=e.alternate,i!==null&&i.memoizedState!==null?(i=St,St=16777216,De(e,t,s),St=i):De(e,t,s));break;default:De(e,t,s)}}function Sl(e){var t=e.alternate;if(t!==null&&(e=t.child,e!==null)){t.child=null;do t=e.sibling,e.sibling=null,e=t;while(e!==null)}}function bt(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var i=t[s];k0=i,zl(i,e)}Sl(e)}if(e.subtreeFlags&10256)for(e=e.child;e!==null;)bl(e),e=e.sibling}function bl(e){switch(e.tag){case 0:case 11:case 15:bt(e),e.flags&2048&&E1(9,e,e.return);break;case 3:bt(e);break;case 12:bt(e);break;case 22:var t=e.stateNode;e.memoizedState!==null&&t._visibility&2&&(e.return===null||e.return.tag!==13)?(t._visibility&=-3,D3(e)):bt(e);break;default:bt(e)}}function D3(e){var t=e.deletions;if((e.flags&16)!==0){if(t!==null)for(var s=0;s<t.length;s++){var i=t[s];k0=i,zl(i,e)}Sl(e)}for(e=e.child;e!==null;){switch(t=e,t.tag){case 0:case 11:case 15:E1(8,t,t.return),D3(t);break;case 22:s=t.stateNode,s._visibility&2&&(s._visibility&=-3,D3(t));break;default:D3(t)}e=e.sibling}}function zl(e,t){for(;k0!==null;){var s=k0;switch(s.tag){case 0:case 11:case 15:E1(8,s,t);break;case 23:case 22:if(s.memoizedState!==null&&s.memoizedState.cachePool!==null){var i=s.memoizedState.cachePool.pool;i!=null&&i.refCount++}break;case 24:lt(s.memoizedState.cache)}if(i=s.child,i!==null)i.return=s,k0=i;else e:for(s=e;k0!==null;){i=k0;var r=i.sibling,l=i.return;if(pl(i),i===s){k0=null;break e}if(r!==null){r.return=l,k0=r;break e}k0=l}}}var Du={getCacheForType:function(e){var t=P0(Q0),s=t.data.get(e);return s===void 0&&(s=e(),t.data.set(e,s)),s},cacheSignal:function(){return P0(Q0).controller.signal}},Cu=typeof WeakMap=="function"?WeakMap:Map,g0=0,D0=null,r0=null,a0=0,z0=0,z2=null,M1=!1,Ce=!1,Bs=!1,n1=0,B0=0,A1=0,ee=0,Ys=0,E2=0,Ue=0,zt=null,_2=null,Ls=!1,C3=0,El=0,U3=1/0,R3=null,x1=null,w0=0,O1=null,Re=null,d1=0,Gs=0,Xs=null,Ml=null,Et=0,Qs=null;function M2(){return(g0&2)!==0&&a0!==0?a0&-a0:M.T!==null?$s():X5()}function Al(){if(E2===0)if((a0&536870912)===0||c0){var e=Xt;Xt<<=1,(Xt&3932160)===0&&(Xt=262144),E2=e}else E2=536870912;return e=S2.current,e!==null&&(e.flags|=32),E2}function f2(e,t,s){(e===D0&&(z0===2||z0===9)||e.cancelPendingCommit!==null)&&(je(e,0),N1(e,a0,E2,!1)),Ke(e,s),((g0&2)===0||e!==D0)&&(e===D0&&((g0&2)===0&&(ee|=s),B0===4&&N1(e,a0,E2,!1)),K2(e))}function xl(e,t,s){if((g0&6)!==0)throw Error(n(327));var i=!s&&(t&127)===0&&(t&e.expiredLanes)===0||Ve(e,t),r=i?ju(e,t):Vs(e,t,!0),l=i;do{if(r===0){Ce&&!i&&N1(e,t,0,!1);break}else{if(s=e.current.alternate,l&&!Uu(s)){r=Vs(e,t,!1),l=!1;continue}if(r===2){if(l=t,e.errorRecoveryDisabledLanes&l)var a=0;else a=e.pendingLanes&-536870913,a=a!==0?a:a&536870912?536870912:0;if(a!==0){t=a;e:{var u=e;r=zt;var d=u.current.memoizedState.isDehydrated;if(d&&(je(u,a).flags|=256),a=Vs(u,a,!1),a!==2){if(Bs&&!d){u.errorRecoveryDisabledLanes|=l,ee|=l,r=4;break e}l=_2,_2=r,l!==null&&(_2===null?_2=l:_2.push.apply(_2,l))}r=a}if(l=!1,r!==2)continue}}if(r===1){je(e,0),N1(e,t,0,!0);break}e:{switch(i=e,l=r,l){case 0:case 1:throw Error(n(345));case 4:if((t&4194048)!==t)break;case 6:N1(i,t,E2,!M1);break e;case 2:_2=null;break;case 3:case 5:break;default:throw Error(n(329))}if((t&62914560)===t&&(r=C3+300-h2(),10<r)){if(N1(i,t,E2,!M1),Zt(i,0,!0)!==0)break e;d1=t,i.timeoutHandle=r6(Ol.bind(null,i,s,_2,R3,Ls,t,E2,ee,Ue,M1,l,"Throttled",-0,0),r);break e}Ol(i,s,_2,R3,Ls,t,E2,ee,Ue,M1,l,null,-0,0)}}break}while(!0);K2(e)}function Ol(e,t,s,i,r,l,a,u,d,h,x,C,v,b){if(e.timeoutHandle=-1,C=t.subtreeFlags,C&8192||(C&16785408)===16785408){C={stylesheets:null,count:0,imgCount:0,imgBytes:0,suspenseyImages:[],waitingForImages:!0,waitingForViewTransition:!1,unsuspend:$2},gl(t,l,C);var X=(l&62914560)===l?C3-h2():(l&4194048)===l?El-h2():0;if(X=Tn(C,X),X!==null){d1=l,e.cancelPendingCommit=X(ql.bind(null,e,t,l,s,i,r,a,u,d,x,C,null,v,b)),N1(e,l,a,!h);return}}ql(e,t,l,s,i,r,a,u,d)}function Uu(e){for(var t=e;;){var s=t.tag;if((s===0||s===11||s===15)&&t.flags&16384&&(s=t.updateQueue,s!==null&&(s=s.stores,s!==null)))for(var i=0;i<s.length;i++){var r=s[i],l=r.getSnapshot;r=r.value;try{if(!v2(l(),r))return!1}catch{return!1}}if(s=t.child,t.subtreeFlags&16384&&s!==null)s.return=t,t=s;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function N1(e,t,s,i){t&=~Ys,t&=~ee,e.suspendedLanes|=t,e.pingedLanes&=~t,i&&(e.warmLanes|=t),i=e.expirationTimes;for(var r=t;0<r;){var l=31-y2(r),a=1<<l;i[l]=-1,r&=~a}s!==0&&Y5(e,s,t)}function j3(){return(g0&6)===0?(Mt(0),!1):!0}function Zs(){if(r0!==null){if(z0===0)var e=r0.return;else e=r0,I2=K1=null,ls(e),Ee=null,ut=0,e=r0;for(;e!==null;)ll(e.alternate,e),e=e.return;r0=null}}function je(e,t){var s=e.timeoutHandle;s!==-1&&(e.timeoutHandle=-1,Iu(s)),s=e.cancelPendingCommit,s!==null&&(e.cancelPendingCommit=null,s()),d1=0,Zs(),D0=e,r0=s=F2(e.current,null),a0=t,z0=0,z2=null,M1=!1,Ce=Ve(e,t),Bs=!1,Ue=E2=Ys=ee=A1=B0=0,_2=zt=null,Ls=!1,(t&8)!==0&&(t|=t&32);var i=e.entangledLanes;if(i!==0)for(e=e.entanglements,i&=t;0<i;){var r=31-y2(i),l=1<<r;t|=e[r],i&=~l}return n1=t,t3(),s}function Nl(e,t){P=null,M.H=ft,t===ze||t===d3?(t=Ki(),z0=3):t===w4?(t=Ki(),z0=4):z0=t===Ss?8:t!==null&&typeof t=="object"&&typeof t.then=="function"?6:1,z2=t,r0===null&&(B0=1,z3(e,N2(t,e.current)))}function Dl(){var e=S2.current;return e===null?!0:(a0&4194048)===a0?R2===null:(a0&62914560)===a0||(a0&536870912)!==0?e===R2:!1}function Cl(){var e=M.H;return M.H=ft,e===null?ft:e}function Ul(){var e=M.A;return M.A=Du,e}function H3(){B0=4,M1||(a0&4194048)!==a0&&S2.current!==null||(Ce=!0),(A1&134217727)===0&&(ee&134217727)===0||D0===null||N1(D0,a0,E2,!1)}function Vs(e,t,s){var i=g0;g0|=2;var r=Cl(),l=Ul();(D0!==e||a0!==t)&&(R3=null,je(e,t)),t=!1;var a=B0;e:do try{if(z0!==0&&r0!==null){var u=r0,d=z2;switch(z0){case 8:Zs(),a=6;break e;case 3:case 2:case 9:case 6:S2.current===null&&(t=!0);var h=z0;if(z0=0,z2=null,He(e,u,d,h),s&&Ce){a=0;break e}break;default:h=z0,z0=0,z2=null,He(e,u,d,h)}}Ru(),a=B0;break}catch(x){Nl(e,x)}while(!0);return t&&e.shellSuspendCounter++,I2=K1=null,g0=i,M.H=r,M.A=l,r0===null&&(D0=null,a0=0,t3()),a}function Ru(){for(;r0!==null;)Rl(r0)}function ju(e,t){var s=g0;g0|=2;var i=Cl(),r=Ul();D0!==e||a0!==t?(R3=null,U3=h2()+500,je(e,t)):Ce=Ve(e,t);e:do try{if(z0!==0&&r0!==null){t=r0;var l=z2;t:switch(z0){case 1:z0=0,z2=null,He(e,t,l,1);break;case 2:case 9:if(Zi(l)){z0=0,z2=null,jl(t);break}t=function(){z0!==2&&z0!==9||D0!==e||(z0=7),K2(e)},l.then(t,t);break e;case 3:z0=7;break e;case 4:z0=5;break e;case 7:Zi(l)?(z0=0,z2=null,jl(t)):(z0=0,z2=null,He(e,t,l,7));break;case 5:var a=null;switch(r0.tag){case 26:a=r0.memoizedState;case 5:case 27:var u=r0;if(a?v6(a):u.stateNode.complete){z0=0,z2=null;var d=u.sibling;if(d!==null)r0=d;else{var h=u.return;h!==null?(r0=h,q3(h)):r0=null}break t}}z0=0,z2=null,He(e,t,l,5);break;case 6:z0=0,z2=null,He(e,t,l,6);break;case 8:Zs(),B0=6;break e;default:throw Error(n(462))}}Hu();break}catch(x){Nl(e,x)}while(!0);return I2=K1=null,M.H=i,M.A=r,g0=s,r0!==null?0:(D0=null,a0=0,t3(),B0)}function Hu(){for(;r0!==null&&!R5();)Rl(r0)}function Rl(e){var t=il(e.alternate,e,n1);e.memoizedProps=e.pendingProps,t===null?q3(e):r0=t}function jl(e){var t=e,s=t.alternate;switch(t.tag){case 15:case 0:t=Wr(s,t,t.pendingProps,t.type,void 0,a0);break;case 11:t=Wr(s,t,t.pendingProps,t.type.render,t.ref,a0);break;case 5:ls(t);default:ll(s,t),t=r0=Ui(t,n1),t=il(s,t,n1)}e.memoizedProps=e.pendingProps,t===null?q3(e):r0=t}function He(e,t,s,i){I2=K1=null,ls(t),Ee=null,ut=0;var r=t.return;try{if(zu(e,r,t,s,a0)){B0=1,z3(e,N2(s,e.current)),r0=null;return}}catch(l){if(r!==null)throw r0=r,l;B0=1,z3(e,N2(s,e.current)),r0=null;return}t.flags&32768?(c0||i===1?e=!0:Ce||(a0&536870912)!==0?e=!1:(M1=e=!0,(i===2||i===9||i===3||i===6)&&(i=S2.current,i!==null&&i.tag===13&&(i.flags|=16384))),Hl(t,e)):q3(t)}function q3(e){var t=e;do{if((t.flags&32768)!==0){Hl(t,M1);return}e=t.return;var s=Au(t.alternate,t,n1);if(s!==null){r0=s;return}if(t=t.sibling,t!==null){r0=t;return}r0=t=e}while(t!==null);B0===0&&(B0=5)}function Hl(e,t){do{var s=xu(e.alternate,e);if(s!==null){s.flags&=32767,r0=s;return}if(s=e.return,s!==null&&(s.flags|=32768,s.subtreeFlags=0,s.deletions=null),!t&&(e=e.sibling,e!==null)){r0=e;return}r0=e=s}while(e!==null);B0=6,r0=null}function ql(e,t,s,i,r,l,a,u,d){e.cancelPendingCommit=null;do B3();while(w0!==0);if((g0&6)!==0)throw Error(n(327));if(t!==null){if(t===e.current)throw Error(n(177));if(l=t.lanes|t.childLanes,l|=U4,_a(e,s,l,a,u,d),e===D0&&(r0=D0=null,a0=0),Re=t,O1=e,d1=s,Gs=l,Xs=r,Ml=i,(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?(e.callbackNode=null,e.callbackPriority=0,Lu(Lt,function(){return Xl(),null})):(e.callbackNode=null,e.callbackPriority=0),i=(t.flags&13878)!==0,(t.subtreeFlags&13878)!==0||i){i=M.T,M.T=null,r=L.p,L.p=2,a=g0,g0|=4;try{Ou(e,t,s)}finally{g0=a,L.p=r,M.T=i}}w0=1,Bl(),Yl(),Ll()}}function Bl(){if(w0===1){w0=0;var e=O1,t=Re,s=(t.flags&13878)!==0;if((t.subtreeFlags&13878)!==0||s){s=M.T,M.T=null;var i=L.p;L.p=2;var r=g0;g0|=4;try{Tl(t,e);var l=s5,a=zi(e.containerInfo),u=l.focusedElem,d=l.selectionRange;if(a!==u&&u&&u.ownerDocument&&bi(u.ownerDocument.documentElement,u)){if(d!==null&&x4(u)){var h=d.start,x=d.end;if(x===void 0&&(x=h),"selectionStart"in u)u.selectionStart=h,u.selectionEnd=Math.min(x,u.value.length);else{var C=u.ownerDocument||document,v=C&&C.defaultView||window;if(v.getSelection){var b=v.getSelection(),X=u.textContent.length,$=Math.min(d.start,X),x0=d.end===void 0?$:Math.min(d.end,X);!b.extend&&$>x0&&(a=x0,x0=$,$=a);var _=Si(u,$),o=Si(u,x0);if(_&&o&&(b.rangeCount!==1||b.anchorNode!==_.node||b.anchorOffset!==_.offset||b.focusNode!==o.node||b.focusOffset!==o.offset)){var f=C.createRange();f.setStart(_.node,_.offset),b.removeAllRanges(),$>x0?(b.addRange(f),b.extend(o.node,o.offset)):(f.setEnd(o.node,o.offset),b.addRange(f))}}}}for(C=[],b=u;b=b.parentNode;)b.nodeType===1&&C.push({element:b,left:b.scrollLeft,top:b.scrollTop});for(typeof u.focus=="function"&&u.focus(),u=0;u<C.length;u++){var N=C[u];N.element.scrollLeft=N.left,N.element.scrollTop=N.top}}k3=!!t5,s5=t5=null}finally{g0=r,L.p=i,M.T=s}}e.current=t,w0=2}}function Yl(){if(w0===2){w0=0;var e=O1,t=Re,s=(t.flags&8772)!==0;if((t.subtreeFlags&8772)!==0||s){s=M.T,M.T=null;var i=L.p;L.p=2;var r=g0;g0|=4;try{ml(e,t.alternate,t)}finally{g0=r,L.p=i,M.T=s}}w0=3}}function Ll(){if(w0===4||w0===3){w0=0,la();var e=O1,t=Re,s=d1,i=Ml;(t.subtreeFlags&10256)!==0||(t.flags&10256)!==0?w0=5:(w0=0,Re=O1=null,Gl(e,e.pendingLanes));var r=e.pendingLanes;if(r===0&&(x1=null),n4(s),t=t.stateNode,T2&&typeof T2.onCommitFiberRoot=="function")try{T2.onCommitFiberRoot(Ze,t,void 0,(t.current.flags&128)===128)}catch{}if(i!==null){t=M.T,r=L.p,L.p=2,M.T=null;try{for(var l=e.onRecoverableError,a=0;a<i.length;a++){var u=i[a];l(u.value,{componentStack:u.stack})}}finally{M.T=t,L.p=r}}(d1&3)!==0&&B3(),K2(e),r=e.pendingLanes,(s&261930)!==0&&(r&42)!==0?e===Qs?Et++:(Et=0,Qs=e):Et=0,Mt(0)}}function Gl(e,t){(e.pooledCacheLanes&=t)===0&&(t=e.pooledCache,t!=null&&(e.pooledCache=null,lt(t)))}function B3(){return Bl(),Yl(),Ll(),Xl()}function Xl(){if(w0!==5)return!1;var e=O1,t=Gs;Gs=0;var s=n4(d1),i=M.T,r=L.p;try{L.p=32>s?32:s,M.T=null,s=Xs,Xs=null;var l=O1,a=d1;if(w0=0,Re=O1=null,d1=0,(g0&6)!==0)throw Error(n(331));var u=g0;if(g0|=4,bl(l.current),vl(l,l.current,a,s),g0=u,Mt(0,!1),T2&&typeof T2.onPostCommitFiberRoot=="function")try{T2.onPostCommitFiberRoot(Ze,l)}catch{}return!0}finally{L.p=r,M.T=i,Gl(e,t)}}function Ql(e,t,s){t=N2(s,t),t=gs(e.stateNode,t,2),e=S1(e,t,2),e!==null&&(Ke(e,2),K2(e))}function E0(e,t,s){if(e.tag===3)Ql(e,e,s);else for(;t!==null;){if(t.tag===3){Ql(t,e,s);break}else if(t.tag===1){var i=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(x1===null||!x1.has(i))){e=N2(s,e),s=Zr(2),i=S1(t,s,2),i!==null&&(Vr(s,i,t,e),Ke(i,2),K2(i));break}}t=t.return}}function Ks(e,t,s){var i=e.pingCache;if(i===null){i=e.pingCache=new Cu;var r=new Set;i.set(t,r)}else r=i.get(t),r===void 0&&(r=new Set,i.set(t,r));r.has(s)||(Bs=!0,r.add(s),e=qu.bind(null,e,t,s),t.then(e,e))}function qu(e,t,s){var i=e.pingCache;i!==null&&i.delete(t),e.pingedLanes|=e.suspendedLanes&s,e.warmLanes&=~s,D0===e&&(a0&s)===s&&(B0===4||B0===3&&(a0&62914560)===a0&&300>h2()-C3?(g0&2)===0&&je(e,0):Ys|=s,Ue===a0&&(Ue=0)),K2(e)}function Zl(e,t){t===0&&(t=B5()),e=Q1(e,t),e!==null&&(Ke(e,t),K2(e))}function Bu(e){var t=e.memoizedState,s=0;t!==null&&(s=t.retryLane),Zl(e,s)}function Yu(e,t){var s=0;switch(e.tag){case 31:case 13:var i=e.stateNode,r=e.memoizedState;r!==null&&(s=r.retryLane);break;case 19:i=e.stateNode;break;case 22:i=e.stateNode._retryCache;break;default:throw Error(n(314))}i!==null&&i.delete(t),Zl(e,s)}function Lu(e,t){return X2(e,t)}var Y3=null,qe=null,Js=!1,L3=!1,ws=!1,D1=0;function K2(e){e!==qe&&e.next===null&&(qe===null?Y3=qe=e:qe=qe.next=e),L3=!0,Js||(Js=!0,Xu())}function Mt(e,t){if(!ws&&L3){ws=!0;do for(var s=!1,i=Y3;i!==null;){if(e!==0){var r=i.pendingLanes;if(r===0)var l=0;else{var a=i.suspendedLanes,u=i.pingedLanes;l=(1<<31-y2(42|e)+1)-1,l&=r&~(a&~u),l=l&201326741?l&201326741|1:l?l|2:0}l!==0&&(s=!0,wl(i,l))}else l=a0,l=Zt(i,i===D0?l:0,i.cancelPendingCommit!==null||i.timeoutHandle!==-1),(l&3)===0||Ve(i,l)||(s=!0,wl(i,l));i=i.next}while(s);ws=!1}}function Gu(){Vl()}function Vl(){L3=Js=!1;var e=0;D1!==0&&Wu()&&(e=D1);for(var t=h2(),s=null,i=Y3;i!==null;){var r=i.next,l=Kl(i,t);l===0?(i.next=null,s===null?Y3=r:s.next=r,r===null&&(qe=s)):(s=i,(e!==0||(l&3)!==0)&&(L3=!0)),i=r}w0!==0&&w0!==5||Mt(e),D1!==0&&(D1=0)}function Kl(e,t){for(var s=e.suspendedLanes,i=e.pingedLanes,r=e.expirationTimes,l=e.pendingLanes&-62914561;0<l;){var a=31-y2(l),u=1<<a,d=r[a];d===-1?((u&s)===0||(u&i)!==0)&&(r[a]=pa(u,t)):d<=t&&(e.expiredLanes|=u),l&=~u}if(t=D0,s=a0,s=Zt(e,e===t?s:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i=e.callbackNode,s===0||e===t&&(z0===2||z0===9)||e.cancelPendingCommit!==null)return i!==null&&i!==null&&se(i),e.callbackNode=null,e.callbackPriority=0;if((s&3)===0||Ve(e,s)){if(t=s&-s,t===e.callbackPriority)return t;switch(i!==null&&se(i),n4(s)){case 2:case 8:s=H5;break;case 32:s=Lt;break;case 268435456:s=q5;break;default:s=Lt}return i=Jl.bind(null,e),s=X2(s,i),e.callbackPriority=t,e.callbackNode=s,t}return i!==null&&i!==null&&se(i),e.callbackPriority=2,e.callbackNode=null,2}function Jl(e,t){if(w0!==0&&w0!==5)return e.callbackNode=null,e.callbackPriority=0,null;var s=e.callbackNode;if(B3()&&e.callbackNode!==s)return null;var i=a0;return i=Zt(e,e===D0?i:0,e.cancelPendingCommit!==null||e.timeoutHandle!==-1),i===0?null:(xl(e,i,t),Kl(e,h2()),e.callbackNode!=null&&e.callbackNode===s?Jl.bind(null,e):null)}function wl(e,t){if(B3())return null;xl(e,t,!0)}function Xu(){Pu(function(){(g0&6)!==0?X2(j5,Gu):Vl()})}function $s(){if(D1===0){var e=Se;e===0&&(e=Gt,Gt<<=1,(Gt&261888)===0&&(Gt=256)),D1=e}return D1}function $l(e){return e==null||typeof e=="symbol"||typeof e=="boolean"?null:typeof e=="function"?e:wt(""+e)}function kl(e,t){var s=t.ownerDocument.createElement("input");return s.name=t.name,s.value=t.value,e.id&&s.setAttribute("form",e.id),t.parentNode.insertBefore(s,t),e=new FormData(e),s.parentNode.removeChild(s),e}function Qu(e,t,s,i,r){if(t==="submit"&&s&&s.stateNode===r){var l=$l((r[d2]||null).action),a=i.submitter;a&&(t=(t=a[d2]||null)?$l(t.formAction):a.getAttribute("formAction"),t!==null&&(l=t,a=null));var u=new Wt("action","action",null,i,r);e.push({event:u,listeners:[{instance:null,listener:function(){if(i.defaultPrevented){if(D1!==0){var d=a?kl(r,a):new FormData(r);_s(s,{pending:!0,data:d,method:r.method,action:l},null,d)}}else typeof l=="function"&&(u.preventDefault(),d=a?kl(r,a):new FormData(r),_s(s,{pending:!0,data:d,method:r.method,action:l},l,d))},currentTarget:r}]})}}for(var ks=0;ks<C4.length;ks++){var Fs=C4[ks],Zu=Fs.toLowerCase(),Vu=Fs[0].toUpperCase()+Fs.slice(1);B2(Zu,"on"+Vu)}B2(Ai,"onAnimationEnd"),B2(xi,"onAnimationIteration"),B2(Oi,"onAnimationStart"),B2("dblclick","onDoubleClick"),B2("focusin","onFocus"),B2("focusout","onBlur"),B2(au,"onTransitionRun"),B2(uu,"onTransitionStart"),B2(nu,"onTransitionCancel"),B2(Ni,"onTransitionEnd"),ue("onMouseEnter",["mouseout","mouseover"]),ue("onMouseLeave",["mouseout","mouseover"]),ue("onPointerEnter",["pointerout","pointerover"]),ue("onPointerLeave",["pointerout","pointerover"]),Y1("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),Y1("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),Y1("onBeforeInput",["compositionend","keypress","textInput","paste"]),Y1("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),Y1("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),Y1("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var At="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Ku=new Set("beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(At));function Fl(e,t){t=(t&4)!==0;for(var s=0;s<e.length;s++){var i=e[s],r=i.event;i=i.listeners;e:{var l=void 0;if(t)for(var a=i.length-1;0<=a;a--){var u=i[a],d=u.instance,h=u.currentTarget;if(u=u.listener,d!==l&&r.isPropagationStopped())break e;l=u,r.currentTarget=h;try{l(r)}catch(x){e3(x)}r.currentTarget=null,l=d}else for(a=0;a<i.length;a++){if(u=i[a],d=u.instance,h=u.currentTarget,u=u.listener,d!==l&&r.isPropagationStopped())break e;l=u,r.currentTarget=h;try{l(r)}catch(x){e3(x)}r.currentTarget=null,l=d}}}}function l0(e,t){var s=t[d4];s===void 0&&(s=t[d4]=new Set);var i=e+"__bubble";s.has(i)||(Wl(t,e,2,!1),s.add(i))}function Ws(e,t,s){var i=0;t&&(i|=4),Wl(s,e,i,t)}var G3="_reactListening"+Math.random().toString(36).slice(2);function Is(e){if(!e[G3]){e[G3]=!0,V5.forEach(function(s){s!=="selectionchange"&&(Ku.has(s)||Ws(s,!1,e),Ws(s,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[G3]||(t[G3]=!0,Ws("selectionchange",!1,t))}}function Wl(e,t,s,i){switch(A6(t)){case 2:var r=gn;break;case 8:r=Sn;break;default:r=p5}s=r.bind(null,t,s,e),r=void 0,!y4||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(r=!0),i?r!==void 0?e.addEventListener(t,s,{capture:!0,passive:r}):e.addEventListener(t,s,!0):r!==void 0?e.addEventListener(t,s,{passive:r}):e.addEventListener(t,s,!1)}function Ps(e,t,s,i,r){var l=i;if((t&1)===0&&(t&2)===0&&i!==null)e:for(;;){if(i===null)return;var a=i.tag;if(a===3||a===4){var u=i.stateNode.containerInfo;if(u===r)break;if(a===4)for(a=i.return;a!==null;){var d=a.tag;if((d===3||d===4)&&a.stateNode.containerInfo===r)return;a=a.return}for(;u!==null;){if(a=re(u),a===null)return;if(d=a.tag,d===5||d===6||d===26||d===27){i=l=a;continue e}u=u.parentNode}}i=i.return}si(function(){var h=l,x=h4(s),C=[];e:{var v=Di.get(e);if(v!==void 0){var b=Wt,X=e;switch(e){case"keypress":if(kt(s)===0)break e;case"keydown":case"keyup":b=Ya;break;case"focusin":X="focus",b=b4;break;case"focusout":X="blur",b=b4;break;case"beforeblur":case"afterblur":b=b4;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":b=li;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":b=Aa;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":b=Xa;break;case Ai:case xi:case Oi:b=Na;break;case Ni:b=Za;break;case"scroll":case"scrollend":b=Ea;break;case"wheel":b=Ka;break;case"copy":case"cut":case"paste":b=Ca;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":b=ui;break;case"toggle":case"beforetoggle":b=wa}var $=(t&4)!==0,x0=!$&&(e==="scroll"||e==="scrollend"),_=$?v!==null?v+"Capture":null:v;$=[];for(var o=h,f;o!==null;){var N=o;if(f=N.stateNode,N=N.tag,N!==5&&N!==26&&N!==27||f===null||_===null||(N=$e(o,_),N!=null&&$.push(xt(o,N,f))),x0)break;o=o.return}0<$.length&&(v=new b(v,X,null,s,x),C.push({event:v,listeners:$}))}}if((t&7)===0){e:{if(v=e==="mouseover"||e==="pointerover",b=e==="mouseout"||e==="pointerout",v&&s!==f4&&(X=s.relatedTarget||s.fromElement)&&(re(X)||X[ie]))break e;if((b||v)&&(v=x.window===x?x:(v=x.ownerDocument)?v.defaultView||v.parentWindow:window,b?(X=s.relatedTarget||s.toElement,b=h,X=X?re(X):null,X!==null&&(x0=A(X),$=X.tag,X!==x0||$!==5&&$!==27&&$!==6)&&(X=null)):(b=null,X=h),b!==X)){if($=li,N="onMouseLeave",_="onMouseEnter",o="mouse",(e==="pointerout"||e==="pointerover")&&($=ui,N="onPointerLeave",_="onPointerEnter",o="pointer"),x0=b==null?v:we(b),f=X==null?v:we(X),v=new $(N,o+"leave",b,s,x),v.target=x0,v.relatedTarget=f,N=null,re(x)===h&&($=new $(_,o+"enter",X,s,x),$.target=f,$.relatedTarget=x0,N=$),x0=N,b&&X)t:{for($=Ju,_=b,o=X,f=0,N=_;N;N=$(N))f++;N=0;for(var J=o;J;J=$(J))N++;for(;0<f-N;)_=$(_),f--;for(;0<N-f;)o=$(o),N--;for(;f--;){if(_===o||o!==null&&_===o.alternate){$=_;break t}_=$(_),o=$(o)}$=null}else $=null;b!==null&&Il(C,v,b,$,!1),X!==null&&x0!==null&&Il(C,x0,X,$,!0)}}e:{if(v=h?we(h):window,b=v.nodeName&&v.nodeName.toLowerCase(),b==="select"||b==="input"&&v.type==="file")var T0=fi;else if(pi(v))if(hi)T0=iu;else{T0=tu;var V=eu}else b=v.nodeName,!b||b.toLowerCase()!=="input"||v.type!=="checkbox"&&v.type!=="radio"?h&&_4(h.elementType)&&(T0=fi):T0=su;if(T0&&(T0=T0(e,h))){_i(C,T0,s,x);break e}V&&V(e,v,h),e==="focusout"&&h&&v.type==="number"&&h.memoizedProps.value!=null&&p4(v,"number",v.value)}switch(V=h?we(h):window,e){case"focusin":(pi(V)||V.contentEditable==="true")&&(pe=V,O4=h,st=null);break;case"focusout":st=O4=pe=null;break;case"mousedown":N4=!0;break;case"contextmenu":case"mouseup":case"dragend":N4=!1,Ei(C,s,x);break;case"selectionchange":if(lu)break;case"keydown":case"keyup":Ei(C,s,x)}var e0;if(E4)e:{switch(e){case"compositionstart":var u0="onCompositionStart";break e;case"compositionend":u0="onCompositionEnd";break e;case"compositionupdate":u0="onCompositionUpdate";break e}u0=void 0}else me?oi(e,s)&&(u0="onCompositionEnd"):e==="keydown"&&s.keyCode===229&&(u0="onCompositionStart");u0&&(ni&&s.locale!=="ko"&&(me||u0!=="onCompositionStart"?u0==="onCompositionEnd"&&me&&(e0=ii()):(_1=x,v4="value"in _1?_1.value:_1.textContent,me=!0)),V=X3(h,u0),0<V.length&&(u0=new ai(u0,e,null,s,x),C.push({event:u0,listeners:V}),e0?u0.data=e0:(e0=mi(s),e0!==null&&(u0.data=e0)))),(e0=ka?Fa(e,s):Wa(e,s))&&(u0=X3(h,"onBeforeInput"),0<u0.length&&(V=new ai("onBeforeInput","beforeinput",null,s,x),C.push({event:V,listeners:u0}),V.data=e0)),Qu(C,e,h,s,x)}Fl(C,t)})}function xt(e,t,s){return{instance:e,listener:t,currentTarget:s}}function X3(e,t){for(var s=t+"Capture",i=[];e!==null;){var r=e,l=r.stateNode;if(r=r.tag,r!==5&&r!==26&&r!==27||l===null||(r=$e(e,s),r!=null&&i.unshift(xt(e,r,l)),r=$e(e,t),r!=null&&i.push(xt(e,r,l))),e.tag===3)return i;e=e.return}return[]}function Ju(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5&&e.tag!==27);return e||null}function Il(e,t,s,i,r){for(var l=t._reactName,a=[];s!==null&&s!==i;){var u=s,d=u.alternate,h=u.stateNode;if(u=u.tag,d!==null&&d===i)break;u!==5&&u!==26&&u!==27||h===null||(d=h,r?(h=$e(s,l),h!=null&&a.unshift(xt(s,h,d))):r||(h=$e(s,l),h!=null&&a.push(xt(s,h,d)))),s=s.return}a.length!==0&&e.push({event:t,listeners:a})}var wu=/\r\n?/g,$u=/\u0000|\uFFFD/g;function Pl(e){return(typeof e=="string"?e:""+e).replace(wu,`
`).replace($u,"")}function e6(e,t){return t=Pl(t),Pl(e)===t}function A0(e,t,s,i,r,l){switch(s){case"children":typeof i=="string"?t==="body"||t==="textarea"&&i===""||de(e,i):(typeof i=="number"||typeof i=="bigint")&&t!=="body"&&de(e,""+i);break;case"className":Kt(e,"class",i);break;case"tabIndex":Kt(e,"tabindex",i);break;case"dir":case"role":case"viewBox":case"width":case"height":Kt(e,s,i);break;case"style":ei(e,i,l);break;case"data":if(t!=="object"){Kt(e,"data",i);break}case"src":case"href":if(i===""&&(t!=="a"||s!=="href")){e.removeAttribute(s);break}if(i==null||typeof i=="function"||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(s);break}i=wt(""+i),e.setAttribute(s,i);break;case"action":case"formAction":if(typeof i=="function"){e.setAttribute(s,"javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')");break}else typeof l=="function"&&(s==="formAction"?(t!=="input"&&A0(e,t,"name",r.name,r,null),A0(e,t,"formEncType",r.formEncType,r,null),A0(e,t,"formMethod",r.formMethod,r,null),A0(e,t,"formTarget",r.formTarget,r,null)):(A0(e,t,"encType",r.encType,r,null),A0(e,t,"method",r.method,r,null),A0(e,t,"target",r.target,r,null)));if(i==null||typeof i=="symbol"||typeof i=="boolean"){e.removeAttribute(s);break}i=wt(""+i),e.setAttribute(s,i);break;case"onClick":i!=null&&(e.onclick=$2);break;case"onScroll":i!=null&&l0("scroll",e);break;case"onScrollEnd":i!=null&&l0("scrollend",e);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(n(61));if(s=i.__html,s!=null){if(r.children!=null)throw Error(n(60));e.innerHTML=s}}break;case"multiple":e.multiple=i&&typeof i!="function"&&typeof i!="symbol";break;case"muted":e.muted=i&&typeof i!="function"&&typeof i!="symbol";break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"defaultValue":case"defaultChecked":case"innerHTML":case"ref":break;case"autoFocus":break;case"xlinkHref":if(i==null||typeof i=="function"||typeof i=="boolean"||typeof i=="symbol"){e.removeAttribute("xlink:href");break}s=wt(""+i),e.setAttributeNS("http://www.w3.org/1999/xlink","xlink:href",s);break;case"contentEditable":case"spellCheck":case"draggable":case"value":case"autoReverse":case"externalResourcesRequired":case"focusable":case"preserveAlpha":i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(s,""+i):e.removeAttribute(s);break;case"inert":case"allowFullScreen":case"async":case"autoPlay":case"controls":case"default":case"defer":case"disabled":case"disablePictureInPicture":case"disableRemotePlayback":case"formNoValidate":case"hidden":case"loop":case"noModule":case"noValidate":case"open":case"playsInline":case"readOnly":case"required":case"reversed":case"scoped":case"seamless":case"itemScope":i&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(s,""):e.removeAttribute(s);break;case"capture":case"download":i===!0?e.setAttribute(s,""):i!==!1&&i!=null&&typeof i!="function"&&typeof i!="symbol"?e.setAttribute(s,i):e.removeAttribute(s);break;case"cols":case"rows":case"size":case"span":i!=null&&typeof i!="function"&&typeof i!="symbol"&&!isNaN(i)&&1<=i?e.setAttribute(s,i):e.removeAttribute(s);break;case"rowSpan":case"start":i==null||typeof i=="function"||typeof i=="symbol"||isNaN(i)?e.removeAttribute(s):e.setAttribute(s,i);break;case"popover":l0("beforetoggle",e),l0("toggle",e),Vt(e,"popover",i);break;case"xlinkActuate":w2(e,"http://www.w3.org/1999/xlink","xlink:actuate",i);break;case"xlinkArcrole":w2(e,"http://www.w3.org/1999/xlink","xlink:arcrole",i);break;case"xlinkRole":w2(e,"http://www.w3.org/1999/xlink","xlink:role",i);break;case"xlinkShow":w2(e,"http://www.w3.org/1999/xlink","xlink:show",i);break;case"xlinkTitle":w2(e,"http://www.w3.org/1999/xlink","xlink:title",i);break;case"xlinkType":w2(e,"http://www.w3.org/1999/xlink","xlink:type",i);break;case"xmlBase":w2(e,"http://www.w3.org/XML/1998/namespace","xml:base",i);break;case"xmlLang":w2(e,"http://www.w3.org/XML/1998/namespace","xml:lang",i);break;case"xmlSpace":w2(e,"http://www.w3.org/XML/1998/namespace","xml:space",i);break;case"is":Vt(e,"is",i);break;case"innerText":case"textContent":break;default:(!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(s=ba.get(s)||s,Vt(e,s,i))}}function e5(e,t,s,i,r,l){switch(s){case"style":ei(e,i,l);break;case"dangerouslySetInnerHTML":if(i!=null){if(typeof i!="object"||!("__html"in i))throw Error(n(61));if(s=i.__html,s!=null){if(r.children!=null)throw Error(n(60));e.innerHTML=s}}break;case"children":typeof i=="string"?de(e,i):(typeof i=="number"||typeof i=="bigint")&&de(e,""+i);break;case"onScroll":i!=null&&l0("scroll",e);break;case"onScrollEnd":i!=null&&l0("scrollend",e);break;case"onClick":i!=null&&(e.onclick=$2);break;case"suppressContentEditableWarning":case"suppressHydrationWarning":case"innerHTML":case"ref":break;case"innerText":case"textContent":break;default:if(!K5.hasOwnProperty(s))e:{if(s[0]==="o"&&s[1]==="n"&&(r=s.endsWith("Capture"),t=s.slice(2,r?s.length-7:void 0),l=e[d2]||null,l=l!=null?l[s]:null,typeof l=="function"&&e.removeEventListener(t,l,r),typeof i=="function")){typeof l!="function"&&l!==null&&(s in e?e[s]=null:e.hasAttribute(s)&&e.removeAttribute(s)),e.addEventListener(t,i,r);break e}s in e?e[s]=i:i===!0?e.setAttribute(s,""):Vt(e,s,i)}}}function t2(e,t,s){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"img":l0("error",e),l0("load",e);var i=!1,r=!1,l;for(l in s)if(s.hasOwnProperty(l)){var a=s[l];if(a!=null)switch(l){case"src":i=!0;break;case"srcSet":r=!0;break;case"children":case"dangerouslySetInnerHTML":throw Error(n(137,t));default:A0(e,t,l,a,s,null)}}r&&A0(e,t,"srcSet",s.srcSet,s,null),i&&A0(e,t,"src",s.src,s,null);return;case"input":l0("invalid",e);var u=l=a=r=null,d=null,h=null;for(i in s)if(s.hasOwnProperty(i)){var x=s[i];if(x!=null)switch(i){case"name":r=x;break;case"type":a=x;break;case"checked":d=x;break;case"defaultChecked":h=x;break;case"value":l=x;break;case"defaultValue":u=x;break;case"children":case"dangerouslySetInnerHTML":if(x!=null)throw Error(n(137,t));break;default:A0(e,t,i,x,s,null)}}F5(e,l,u,d,h,a,r,!1);return;case"select":l0("invalid",e),i=a=l=null;for(r in s)if(s.hasOwnProperty(r)&&(u=s[r],u!=null))switch(r){case"value":l=u;break;case"defaultValue":a=u;break;case"multiple":i=u;default:A0(e,t,r,u,s,null)}t=l,s=a,e.multiple=!!i,t!=null?ne(e,!!i,t,!1):s!=null&&ne(e,!!i,s,!0);return;case"textarea":l0("invalid",e),l=r=i=null;for(a in s)if(s.hasOwnProperty(a)&&(u=s[a],u!=null))switch(a){case"value":i=u;break;case"defaultValue":r=u;break;case"children":l=u;break;case"dangerouslySetInnerHTML":if(u!=null)throw Error(n(91));break;default:A0(e,t,a,u,s,null)}I5(e,i,r,l);return;case"option":for(d in s)if(s.hasOwnProperty(d)&&(i=s[d],i!=null))switch(d){case"selected":e.selected=i&&typeof i!="function"&&typeof i!="symbol";break;default:A0(e,t,d,i,s,null)}return;case"dialog":l0("beforetoggle",e),l0("toggle",e),l0("cancel",e),l0("close",e);break;case"iframe":case"object":l0("load",e);break;case"video":case"audio":for(i=0;i<At.length;i++)l0(At[i],e);break;case"image":l0("error",e),l0("load",e);break;case"details":l0("toggle",e);break;case"embed":case"source":case"link":l0("error",e),l0("load",e);case"area":case"base":case"br":case"col":case"hr":case"keygen":case"meta":case"param":case"track":case"wbr":case"menuitem":for(h in s)if(s.hasOwnProperty(h)&&(i=s[h],i!=null))switch(h){case"children":case"dangerouslySetInnerHTML":throw Error(n(137,t));default:A0(e,t,h,i,s,null)}return;default:if(_4(t)){for(x in s)s.hasOwnProperty(x)&&(i=s[x],i!==void 0&&e5(e,t,x,i,s,void 0));return}}for(u in s)s.hasOwnProperty(u)&&(i=s[u],i!=null&&A0(e,t,u,i,s,null))}function ku(e,t,s,i){switch(t){case"div":case"span":case"svg":case"path":case"a":case"g":case"p":case"li":break;case"input":var r=null,l=null,a=null,u=null,d=null,h=null,x=null;for(b in s){var C=s[b];if(s.hasOwnProperty(b)&&C!=null)switch(b){case"checked":break;case"value":break;case"defaultValue":d=C;default:i.hasOwnProperty(b)||A0(e,t,b,null,i,C)}}for(var v in i){var b=i[v];if(C=s[v],i.hasOwnProperty(v)&&(b!=null||C!=null))switch(v){case"type":l=b;break;case"name":r=b;break;case"checked":h=b;break;case"defaultChecked":x=b;break;case"value":a=b;break;case"defaultValue":u=b;break;case"children":case"dangerouslySetInnerHTML":if(b!=null)throw Error(n(137,t));break;default:b!==C&&A0(e,t,v,b,i,C)}}m4(e,a,u,d,h,x,l,r);return;case"select":b=a=u=v=null;for(l in s)if(d=s[l],s.hasOwnProperty(l)&&d!=null)switch(l){case"value":break;case"multiple":b=d;default:i.hasOwnProperty(l)||A0(e,t,l,null,i,d)}for(r in i)if(l=i[r],d=s[r],i.hasOwnProperty(r)&&(l!=null||d!=null))switch(r){case"value":v=l;break;case"defaultValue":u=l;break;case"multiple":a=l;default:l!==d&&A0(e,t,r,l,i,d)}t=u,s=a,i=b,v!=null?ne(e,!!s,v,!1):!!i!=!!s&&(t!=null?ne(e,!!s,t,!0):ne(e,!!s,s?[]:"",!1));return;case"textarea":b=v=null;for(u in s)if(r=s[u],s.hasOwnProperty(u)&&r!=null&&!i.hasOwnProperty(u))switch(u){case"value":break;case"children":break;default:A0(e,t,u,null,i,r)}for(a in i)if(r=i[a],l=s[a],i.hasOwnProperty(a)&&(r!=null||l!=null))switch(a){case"value":v=r;break;case"defaultValue":b=r;break;case"children":break;case"dangerouslySetInnerHTML":if(r!=null)throw Error(n(91));break;default:r!==l&&A0(e,t,a,r,i,l)}W5(e,v,b);return;case"option":for(var X in s)if(v=s[X],s.hasOwnProperty(X)&&v!=null&&!i.hasOwnProperty(X))switch(X){case"selected":e.selected=!1;break;default:A0(e,t,X,null,i,v)}for(d in i)if(v=i[d],b=s[d],i.hasOwnProperty(d)&&v!==b&&(v!=null||b!=null))switch(d){case"selected":e.selected=v&&typeof v!="function"&&typeof v!="symbol";break;default:A0(e,t,d,v,i,b)}return;case"img":case"link":case"area":case"base":case"br":case"col":case"embed":case"hr":case"keygen":case"meta":case"param":case"source":case"track":case"wbr":case"menuitem":for(var $ in s)v=s[$],s.hasOwnProperty($)&&v!=null&&!i.hasOwnProperty($)&&A0(e,t,$,null,i,v);for(h in i)if(v=i[h],b=s[h],i.hasOwnProperty(h)&&v!==b&&(v!=null||b!=null))switch(h){case"children":case"dangerouslySetInnerHTML":if(v!=null)throw Error(n(137,t));break;default:A0(e,t,h,v,i,b)}return;default:if(_4(t)){for(var x0 in s)v=s[x0],s.hasOwnProperty(x0)&&v!==void 0&&!i.hasOwnProperty(x0)&&e5(e,t,x0,void 0,i,v);for(x in i)v=i[x],b=s[x],!i.hasOwnProperty(x)||v===b||v===void 0&&b===void 0||e5(e,t,x,v,i,b);return}}for(var _ in s)v=s[_],s.hasOwnProperty(_)&&v!=null&&!i.hasOwnProperty(_)&&A0(e,t,_,null,i,v);for(C in i)v=i[C],b=s[C],!i.hasOwnProperty(C)||v===b||v==null&&b==null||A0(e,t,C,v,i,b)}function t6(e){switch(e){case"css":case"script":case"font":case"img":case"image":case"input":case"link":return!0;default:return!1}}function Fu(){if(typeof performance.getEntriesByType=="function"){for(var e=0,t=0,s=performance.getEntriesByType("resource"),i=0;i<s.length;i++){var r=s[i],l=r.transferSize,a=r.initiatorType,u=r.duration;if(l&&u&&t6(a)){for(a=0,u=r.responseEnd,i+=1;i<s.length;i++){var d=s[i],h=d.startTime;if(h>u)break;var x=d.transferSize,C=d.initiatorType;x&&t6(C)&&(d=d.responseEnd,a+=x*(d<u?1:(u-h)/(d-h)))}if(--i,t+=8*(l+a)/(r.duration/1e3),e++,10<e)break}}if(0<e)return t/e/1e6}return navigator.connection&&(e=navigator.connection.downlink,typeof e=="number")?e:5}var t5=null,s5=null;function Q3(e){return e.nodeType===9?e:e.ownerDocument}function s6(e){switch(e){case"http://www.w3.org/2000/svg":return 1;case"http://www.w3.org/1998/Math/MathML":return 2;default:return 0}}function i6(e,t){if(e===0)switch(t){case"svg":return 1;case"math":return 2;default:return 0}return e===1&&t==="foreignObject"?0:e}function i5(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.children=="bigint"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var r5=null;function Wu(){var e=window.event;return e&&e.type==="popstate"?e===r5?!1:(r5=e,!0):(r5=null,!1)}var r6=typeof setTimeout=="function"?setTimeout:void 0,Iu=typeof clearTimeout=="function"?clearTimeout:void 0,l6=typeof Promise=="function"?Promise:void 0,Pu=typeof queueMicrotask=="function"?queueMicrotask:typeof l6<"u"?function(e){return l6.resolve(null).then(e).catch(en)}:r6;function en(e){setTimeout(function(){throw e})}function C1(e){return e==="head"}function a6(e,t){var s=t,i=0;do{var r=s.nextSibling;if(e.removeChild(s),r&&r.nodeType===8)if(s=r.data,s==="/$"||s==="/&"){if(i===0){e.removeChild(r),Ge(t);return}i--}else if(s==="$"||s==="$?"||s==="$~"||s==="$!"||s==="&")i++;else if(s==="html")Ot(e.ownerDocument.documentElement);else if(s==="head"){s=e.ownerDocument.head,Ot(s);for(var l=s.firstChild;l;){var a=l.nextSibling,u=l.nodeName;l[Je]||u==="SCRIPT"||u==="STYLE"||u==="LINK"&&l.rel.toLowerCase()==="stylesheet"||s.removeChild(l),l=a}}else s==="body"&&Ot(e.ownerDocument.body);s=r}while(s);Ge(t)}function u6(e,t){var s=e;e=0;do{var i=s.nextSibling;if(s.nodeType===1?t?(s._stashedDisplay=s.style.display,s.style.display="none"):(s.style.display=s._stashedDisplay||"",s.getAttribute("style")===""&&s.removeAttribute("style")):s.nodeType===3&&(t?(s._stashedText=s.nodeValue,s.nodeValue=""):s.nodeValue=s._stashedText||""),i&&i.nodeType===8)if(s=i.data,s==="/$"){if(e===0)break;e--}else s!=="$"&&s!=="$?"&&s!=="$~"&&s!=="$!"||e++;s=i}while(s)}function l5(e){var t=e.firstChild;for(t&&t.nodeType===10&&(t=t.nextSibling);t;){var s=t;switch(t=t.nextSibling,s.nodeName){case"HTML":case"HEAD":case"BODY":l5(s),c4(s);continue;case"SCRIPT":case"STYLE":continue;case"LINK":if(s.rel.toLowerCase()==="stylesheet")continue}e.removeChild(s)}}function tn(e,t,s,i){for(;e.nodeType===1;){var r=s;if(e.nodeName.toLowerCase()!==t.toLowerCase()){if(!i&&(e.nodeName!=="INPUT"||e.type!=="hidden"))break}else if(i){if(!e[Je])switch(t){case"meta":if(!e.hasAttribute("itemprop"))break;return e;case"link":if(l=e.getAttribute("rel"),l==="stylesheet"&&e.hasAttribute("data-precedence"))break;if(l!==r.rel||e.getAttribute("href")!==(r.href==null||r.href===""?null:r.href)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin)||e.getAttribute("title")!==(r.title==null?null:r.title))break;return e;case"style":if(e.hasAttribute("data-precedence"))break;return e;case"script":if(l=e.getAttribute("src"),(l!==(r.src==null?null:r.src)||e.getAttribute("type")!==(r.type==null?null:r.type)||e.getAttribute("crossorigin")!==(r.crossOrigin==null?null:r.crossOrigin))&&l&&e.hasAttribute("async")&&!e.hasAttribute("itemprop"))break;return e;default:return e}}else if(t==="input"&&e.type==="hidden"){var l=r.name==null?null:""+r.name;if(r.type==="hidden"&&e.getAttribute("name")===l)return e}else return e;if(e=j2(e.nextSibling),e===null)break}return null}function sn(e,t,s){if(t==="")return null;for(;e.nodeType!==3;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!s||(e=j2(e.nextSibling),e===null))return null;return e}function n6(e,t){for(;e.nodeType!==8;)if((e.nodeType!==1||e.nodeName!=="INPUT"||e.type!=="hidden")&&!t||(e=j2(e.nextSibling),e===null))return null;return e}function a5(e){return e.data==="$?"||e.data==="$~"}function u5(e){return e.data==="$!"||e.data==="$?"&&e.ownerDocument.readyState!=="loading"}function rn(e,t){var s=e.ownerDocument;if(e.data==="$~")e._reactRetry=t;else if(e.data!=="$?"||s.readyState!=="loading")t();else{var i=function(){t(),s.removeEventListener("DOMContentLoaded",i)};s.addEventListener("DOMContentLoaded",i),e._reactRetry=i}}function j2(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?"||t==="$~"||t==="&"||t==="F!"||t==="F")break;if(t==="/$"||t==="/&")return null}}return e}var n5=null;function d6(e){e=e.nextSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="/$"||s==="/&"){if(t===0)return j2(e.nextSibling);t--}else s!=="$"&&s!=="$!"&&s!=="$?"&&s!=="$~"&&s!=="&"||t++}e=e.nextSibling}return null}function c6(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var s=e.data;if(s==="$"||s==="$!"||s==="$?"||s==="$~"||s==="&"){if(t===0)return e;t--}else s!=="/$"&&s!=="/&"||t++}e=e.previousSibling}return null}function o6(e,t,s){switch(t=Q3(s),e){case"html":if(e=t.documentElement,!e)throw Error(n(452));return e;case"head":if(e=t.head,!e)throw Error(n(453));return e;case"body":if(e=t.body,!e)throw Error(n(454));return e;default:throw Error(n(451))}}function Ot(e){for(var t=e.attributes;t.length;)e.removeAttributeNode(t[0]);c4(e)}var H2=new Map,m6=new Set;function Z3(e){return typeof e.getRootNode=="function"?e.getRootNode():e.nodeType===9?e:e.ownerDocument}var c1=L.d;L.d={f:ln,r:an,D:un,C:nn,L:dn,m:cn,X:mn,S:on,M:pn};function ln(){var e=c1.f(),t=j3();return e||t}function an(e){var t=le(e);t!==null&&t.tag===5&&t.type==="form"?Nr(t):c1.r(e)}var Be=typeof document>"u"?null:document;function p6(e,t,s){var i=Be;if(i&&typeof t=="string"&&t){var r=x2(t);r='link[rel="'+e+'"][href="'+r+'"]',typeof s=="string"&&(r+='[crossorigin="'+s+'"]'),m6.has(r)||(m6.add(r),e={rel:e,crossOrigin:s,href:t},i.querySelector(r)===null&&(t=i.createElement("link"),t2(t,"link",e),$0(t),i.head.appendChild(t)))}}function un(e){c1.D(e),p6("dns-prefetch",e,null)}function nn(e,t){c1.C(e,t),p6("preconnect",e,t)}function dn(e,t,s){c1.L(e,t,s);var i=Be;if(i&&e&&t){var r='link[rel="preload"][as="'+x2(t)+'"]';t==="image"&&s&&s.imageSrcSet?(r+='[imagesrcset="'+x2(s.imageSrcSet)+'"]',typeof s.imageSizes=="string"&&(r+='[imagesizes="'+x2(s.imageSizes)+'"]')):r+='[href="'+x2(e)+'"]';var l=r;switch(t){case"style":l=Ye(e);break;case"script":l=Le(e)}H2.has(l)||(e=q({rel:"preload",href:t==="image"&&s&&s.imageSrcSet?void 0:e,as:t},s),H2.set(l,e),i.querySelector(r)!==null||t==="style"&&i.querySelector(Nt(l))||t==="script"&&i.querySelector(Dt(l))||(t=i.createElement("link"),t2(t,"link",e),$0(t),i.head.appendChild(t)))}}function cn(e,t){c1.m(e,t);var s=Be;if(s&&e){var i=t&&typeof t.as=="string"?t.as:"script",r='link[rel="modulepreload"][as="'+x2(i)+'"][href="'+x2(e)+'"]',l=r;switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":l=Le(e)}if(!H2.has(l)&&(e=q({rel:"modulepreload",href:e},t),H2.set(l,e),s.querySelector(r)===null)){switch(i){case"audioworklet":case"paintworklet":case"serviceworker":case"sharedworker":case"worker":case"script":if(s.querySelector(Dt(l)))return}i=s.createElement("link"),t2(i,"link",e),$0(i),s.head.appendChild(i)}}}function on(e,t,s){c1.S(e,t,s);var i=Be;if(i&&e){var r=ae(i).hoistableStyles,l=Ye(e);t=t||"default";var a=r.get(l);if(!a){var u={loading:0,preload:null};if(a=i.querySelector(Nt(l)))u.loading=5;else{e=q({rel:"stylesheet",href:e,"data-precedence":t},s),(s=H2.get(l))&&d5(e,s);var d=a=i.createElement("link");$0(d),t2(d,"link",e),d._p=new Promise(function(h,x){d.onload=h,d.onerror=x}),d.addEventListener("load",function(){u.loading|=1}),d.addEventListener("error",function(){u.loading|=2}),u.loading|=4,V3(a,t,i)}a={type:"stylesheet",instance:a,count:1,state:u},r.set(l,a)}}}function mn(e,t){c1.X(e,t);var s=Be;if(s&&e){var i=ae(s).hoistableScripts,r=Le(e),l=i.get(r);l||(l=s.querySelector(Dt(r)),l||(e=q({src:e,async:!0},t),(t=H2.get(r))&&c5(e,t),l=s.createElement("script"),$0(l),t2(l,"link",e),s.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(r,l))}}function pn(e,t){c1.M(e,t);var s=Be;if(s&&e){var i=ae(s).hoistableScripts,r=Le(e),l=i.get(r);l||(l=s.querySelector(Dt(r)),l||(e=q({src:e,async:!0,type:"module"},t),(t=H2.get(r))&&c5(e,t),l=s.createElement("script"),$0(l),t2(l,"link",e),s.head.appendChild(l)),l={type:"script",instance:l,count:1,state:null},i.set(r,l))}}function _6(e,t,s,i){var r=(r=j.current)?Z3(r):null;if(!r)throw Error(n(446));switch(e){case"meta":case"title":return null;case"style":return typeof s.precedence=="string"&&typeof s.href=="string"?(t=Ye(s.href),s=ae(r).hoistableStyles,i=s.get(t),i||(i={type:"style",instance:null,count:0,state:null},s.set(t,i)),i):{type:"void",instance:null,count:0,state:null};case"link":if(s.rel==="stylesheet"&&typeof s.href=="string"&&typeof s.precedence=="string"){e=Ye(s.href);var l=ae(r).hoistableStyles,a=l.get(e);if(a||(r=r.ownerDocument||r,a={type:"stylesheet",instance:null,count:0,state:{loading:0,preload:null}},l.set(e,a),(l=r.querySelector(Nt(e)))&&!l._p&&(a.instance=l,a.state.loading=5),H2.has(e)||(s={rel:"preload",as:"style",href:s.href,crossOrigin:s.crossOrigin,integrity:s.integrity,media:s.media,hrefLang:s.hrefLang,referrerPolicy:s.referrerPolicy},H2.set(e,s),l||_n(r,e,s,a.state))),t&&i===null)throw Error(n(528,""));return a}if(t&&i!==null)throw Error(n(529,""));return null;case"script":return t=s.async,s=s.src,typeof s=="string"&&t&&typeof t!="function"&&typeof t!="symbol"?(t=Le(s),s=ae(r).hoistableScripts,i=s.get(t),i||(i={type:"script",instance:null,count:0,state:null},s.set(t,i)),i):{type:"void",instance:null,count:0,state:null};default:throw Error(n(444,e))}}function Ye(e){return'href="'+x2(e)+'"'}function Nt(e){return'link[rel="stylesheet"]['+e+"]"}function f6(e){return q({},e,{"data-precedence":e.precedence,precedence:null})}function _n(e,t,s,i){e.querySelector('link[rel="preload"][as="style"]['+t+"]")?i.loading=1:(t=e.createElement("link"),i.preload=t,t.addEventListener("load",function(){return i.loading|=1}),t.addEventListener("error",function(){return i.loading|=2}),t2(t,"link",s),$0(t),e.head.appendChild(t))}function Le(e){return'[src="'+x2(e)+'"]'}function Dt(e){return"script[async]"+e}function h6(e,t,s){if(t.count++,t.instance===null)switch(t.type){case"style":var i=e.querySelector('style[data-href~="'+x2(s.href)+'"]');if(i)return t.instance=i,$0(i),i;var r=q({},s,{"data-href":s.href,"data-precedence":s.precedence,href:null,precedence:null});return i=(e.ownerDocument||e).createElement("style"),$0(i),t2(i,"style",r),V3(i,s.precedence,e),t.instance=i;case"stylesheet":r=Ye(s.href);var l=e.querySelector(Nt(r));if(l)return t.state.loading|=4,t.instance=l,$0(l),l;i=f6(s),(r=H2.get(r))&&d5(i,r),l=(e.ownerDocument||e).createElement("link"),$0(l);var a=l;return a._p=new Promise(function(u,d){a.onload=u,a.onerror=d}),t2(l,"link",i),t.state.loading|=4,V3(l,s.precedence,e),t.instance=l;case"script":return l=Le(s.src),(r=e.querySelector(Dt(l)))?(t.instance=r,$0(r),r):(i=s,(r=H2.get(l))&&(i=q({},s),c5(i,r)),e=e.ownerDocument||e,r=e.createElement("script"),$0(r),t2(r,"link",i),e.head.appendChild(r),t.instance=r);case"void":return null;default:throw Error(n(443,t.type))}else t.type==="stylesheet"&&(t.state.loading&4)===0&&(i=t.instance,t.state.loading|=4,V3(i,s.precedence,e));return t.instance}function V3(e,t,s){for(var i=s.querySelectorAll('link[rel="stylesheet"][data-precedence],style[data-precedence]'),r=i.length?i[i.length-1]:null,l=r,a=0;a<i.length;a++){var u=i[a];if(u.dataset.precedence===t)l=u;else if(l!==r)break}l?l.parentNode.insertBefore(e,l.nextSibling):(t=s.nodeType===9?s.head:s,t.insertBefore(e,t.firstChild))}function d5(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.title==null&&(e.title=t.title)}function c5(e,t){e.crossOrigin==null&&(e.crossOrigin=t.crossOrigin),e.referrerPolicy==null&&(e.referrerPolicy=t.referrerPolicy),e.integrity==null&&(e.integrity=t.integrity)}var K3=null;function T6(e,t,s){if(K3===null){var i=new Map,r=K3=new Map;r.set(s,i)}else r=K3,i=r.get(s),i||(i=new Map,r.set(s,i));if(i.has(e))return i;for(i.set(e,null),s=s.getElementsByTagName(e),r=0;r<s.length;r++){var l=s[r];if(!(l[Je]||l[W0]||e==="link"&&l.getAttribute("rel")==="stylesheet")&&l.namespaceURI!=="http://www.w3.org/2000/svg"){var a=l.getAttribute(t)||"";a=e+a;var u=i.get(a);u?u.push(l):i.set(a,[l])}}return i}function y6(e,t,s){e=e.ownerDocument||e,e.head.insertBefore(s,t==="title"?e.querySelector("head > title"):null)}function fn(e,t,s){if(s===1||t.itemProp!=null)return!1;switch(e){case"meta":case"title":return!0;case"style":if(typeof t.precedence!="string"||typeof t.href!="string"||t.href==="")break;return!0;case"link":if(typeof t.rel!="string"||typeof t.href!="string"||t.href===""||t.onLoad||t.onError)break;switch(t.rel){case"stylesheet":return e=t.disabled,typeof t.precedence=="string"&&e==null;default:return!0}case"script":if(t.async&&typeof t.async!="function"&&typeof t.async!="symbol"&&!t.onLoad&&!t.onError&&t.src&&typeof t.src=="string")return!0}return!1}function v6(e){return!(e.type==="stylesheet"&&(e.state.loading&3)===0)}function hn(e,t,s,i){if(s.type==="stylesheet"&&(typeof i.media!="string"||matchMedia(i.media).matches!==!1)&&(s.state.loading&4)===0){if(s.instance===null){var r=Ye(i.href),l=t.querySelector(Nt(r));if(l){t=l._p,t!==null&&typeof t=="object"&&typeof t.then=="function"&&(e.count++,e=J3.bind(e),t.then(e,e)),s.state.loading|=4,s.instance=l,$0(l);return}l=t.ownerDocument||t,i=f6(i),(r=H2.get(r))&&d5(i,r),l=l.createElement("link"),$0(l);var a=l;a._p=new Promise(function(u,d){a.onload=u,a.onerror=d}),t2(l,"link",i),s.instance=l}e.stylesheets===null&&(e.stylesheets=new Map),e.stylesheets.set(s,t),(t=s.state.preload)&&(s.state.loading&3)===0&&(e.count++,s=J3.bind(e),t.addEventListener("load",s),t.addEventListener("error",s))}}var o5=0;function Tn(e,t){return e.stylesheets&&e.count===0&&$3(e,e.stylesheets),0<e.count||0<e.imgCount?function(s){var i=setTimeout(function(){if(e.stylesheets&&$3(e,e.stylesheets),e.unsuspend){var l=e.unsuspend;e.unsuspend=null,l()}},6e4+t);0<e.imgBytes&&o5===0&&(o5=62500*Fu());var r=setTimeout(function(){if(e.waitingForImages=!1,e.count===0&&(e.stylesheets&&$3(e,e.stylesheets),e.unsuspend)){var l=e.unsuspend;e.unsuspend=null,l()}},(e.imgBytes>o5?50:800)+t);return e.unsuspend=s,function(){e.unsuspend=null,clearTimeout(i),clearTimeout(r)}}:null}function J3(){if(this.count--,this.count===0&&(this.imgCount===0||!this.waitingForImages)){if(this.stylesheets)$3(this,this.stylesheets);else if(this.unsuspend){var e=this.unsuspend;this.unsuspend=null,e()}}}var w3=null;function $3(e,t){e.stylesheets=null,e.unsuspend!==null&&(e.count++,w3=new Map,t.forEach(yn,e),w3=null,J3.call(e))}function yn(e,t){if(!(t.state.loading&4)){var s=w3.get(e);if(s)var i=s.get(null);else{s=new Map,w3.set(e,s);for(var r=e.querySelectorAll("link[data-precedence],style[data-precedence]"),l=0;l<r.length;l++){var a=r[l];(a.nodeName==="LINK"||a.getAttribute("media")!=="not all")&&(s.set(a.dataset.precedence,a),i=a)}i&&s.set(null,i)}r=t.instance,a=r.getAttribute("data-precedence"),l=s.get(a)||i,l===i&&s.set(null,r),s.set(a,r),this.count++,i=J3.bind(this),r.addEventListener("load",i),r.addEventListener("error",i),l?l.parentNode.insertBefore(r,l.nextSibling):(e=e.nodeType===9?e.head:e,e.insertBefore(r,e.firstChild)),t.state.loading|=4}}var Ct={$$typeof:f0,Provider:null,Consumer:null,_currentValue:w,_currentValue2:w,_threadCount:0};function vn(e,t,s,i,r,l,a,u,d){this.tag=1,this.containerInfo=e,this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.next=this.pendingContext=this.context=this.cancelPendingCommit=null,this.callbackPriority=0,this.expirationTimes=a4(-1),this.entangledLanes=this.shellSuspendCounter=this.errorRecoveryDisabledLanes=this.expiredLanes=this.warmLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=a4(0),this.hiddenUpdates=a4(null),this.identifierPrefix=i,this.onUncaughtError=r,this.onCaughtError=l,this.onRecoverableError=a,this.pooledCache=null,this.pooledCacheLanes=0,this.formState=d,this.incompleteTransitions=new Map}function g6(e,t,s,i,r,l,a,u,d,h,x,C){return e=new vn(e,t,s,a,d,h,x,C,u),t=1,l===!0&&(t|=24),l=g2(3,null,null,t),e.current=l,l.stateNode=e,t=V4(),t.refCount++,e.pooledCache=t,t.refCount++,l.memoizedState={element:i,isDehydrated:s,cache:t},$4(l),e}function S6(e){return e?(e=he,e):he}function b6(e,t,s,i,r,l){r=S6(r),i.context===null?i.context=r:i.pendingContext=r,i=g1(t),i.payload={element:s},l=l===void 0?null:l,l!==null&&(i.callback=l),s=S1(e,i,t),s!==null&&(f2(s,e,t),dt(s,e,t))}function z6(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var s=e.retryLane;e.retryLane=s!==0&&s<t?s:t}}function m5(e,t){z6(e,t),(e=e.alternate)&&z6(e,t)}function E6(e){if(e.tag===13||e.tag===31){var t=Q1(e,67108864);t!==null&&f2(t,e,67108864),m5(e,67108864)}}function M6(e){if(e.tag===13||e.tag===31){var t=M2();t=u4(t);var s=Q1(e,t);s!==null&&f2(s,e,t),m5(e,t)}}var k3=!0;function gn(e,t,s,i){var r=M.T;M.T=null;var l=L.p;try{L.p=2,p5(e,t,s,i)}finally{L.p=l,M.T=r}}function Sn(e,t,s,i){var r=M.T;M.T=null;var l=L.p;try{L.p=8,p5(e,t,s,i)}finally{L.p=l,M.T=r}}function p5(e,t,s,i){if(k3){var r=_5(i);if(r===null)Ps(e,t,i,F3,s),x6(e,i);else if(zn(r,e,t,s,i))i.stopPropagation();else if(x6(e,i),t&4&&-1<bn.indexOf(e)){for(;r!==null;){var l=le(r);if(l!==null)switch(l.tag){case 3:if(l=l.stateNode,l.current.memoizedState.isDehydrated){var a=B1(l.pendingLanes);if(a!==0){var u=l;for(u.pendingLanes|=2,u.entangledLanes|=2;a;){var d=1<<31-y2(a);u.entanglements[1]|=d,a&=~d}K2(l),(g0&6)===0&&(U3=h2()+500,Mt(0))}}break;case 31:case 13:u=Q1(l,2),u!==null&&f2(u,l,2),j3(),m5(l,2)}if(l=_5(i),l===null&&Ps(e,t,i,F3,s),l===r)break;r=l}r!==null&&i.stopPropagation()}else Ps(e,t,i,null,s)}}function _5(e){return e=h4(e),f5(e)}var F3=null;function f5(e){if(F3=null,e=re(e),e!==null){var t=A(e);if(t===null)e=null;else{var s=t.tag;if(s===13){if(e=S(t),e!==null)return e;e=null}else if(s===31){if(e=B(t),e!==null)return e;e=null}else if(s===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null)}}return F3=e,null}function A6(e){switch(e){case"beforetoggle":case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"toggle":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 2;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 8;case"message":switch(aa()){case j5:return 2;case H5:return 8;case Lt:case ua:return 32;case q5:return 268435456;default:return 32}default:return 32}}var h5=!1,U1=null,R1=null,j1=null,Ut=new Map,Rt=new Map,H1=[],bn="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(" ");function x6(e,t){switch(e){case"focusin":case"focusout":U1=null;break;case"dragenter":case"dragleave":R1=null;break;case"mouseover":case"mouseout":j1=null;break;case"pointerover":case"pointerout":Ut.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Rt.delete(t.pointerId)}}function jt(e,t,s,i,r,l){return e===null||e.nativeEvent!==l?(e={blockedOn:t,domEventName:s,eventSystemFlags:i,nativeEvent:l,targetContainers:[r]},t!==null&&(t=le(t),t!==null&&E6(t)),e):(e.eventSystemFlags|=i,t=e.targetContainers,r!==null&&t.indexOf(r)===-1&&t.push(r),e)}function zn(e,t,s,i,r){switch(t){case"focusin":return U1=jt(U1,e,t,s,i,r),!0;case"dragenter":return R1=jt(R1,e,t,s,i,r),!0;case"mouseover":return j1=jt(j1,e,t,s,i,r),!0;case"pointerover":var l=r.pointerId;return Ut.set(l,jt(Ut.get(l)||null,e,t,s,i,r)),!0;case"gotpointercapture":return l=r.pointerId,Rt.set(l,jt(Rt.get(l)||null,e,t,s,i,r)),!0}return!1}function O6(e){var t=re(e.target);if(t!==null){var s=A(t);if(s!==null){if(t=s.tag,t===13){if(t=S(s),t!==null){e.blockedOn=t,Q5(e.priority,function(){M6(s)});return}}else if(t===31){if(t=B(s),t!==null){e.blockedOn=t,Q5(e.priority,function(){M6(s)});return}}else if(t===3&&s.stateNode.current.memoizedState.isDehydrated){e.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}e.blockedOn=null}function W3(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var s=_5(e.nativeEvent);if(s===null){s=e.nativeEvent;var i=new s.constructor(s.type,s);f4=i,s.target.dispatchEvent(i),f4=null}else return t=le(s),t!==null&&E6(t),e.blockedOn=s,!1;t.shift()}return!0}function N6(e,t,s){W3(e)&&s.delete(t)}function En(){h5=!1,U1!==null&&W3(U1)&&(U1=null),R1!==null&&W3(R1)&&(R1=null),j1!==null&&W3(j1)&&(j1=null),Ut.forEach(N6),Rt.forEach(N6)}function I3(e,t){e.blockedOn===t&&(e.blockedOn=null,h5||(h5=!0,c.unstable_scheduleCallback(c.unstable_NormalPriority,En)))}var P3=null;function D6(e){P3!==e&&(P3=e,c.unstable_scheduleCallback(c.unstable_NormalPriority,function(){P3===e&&(P3=null);for(var t=0;t<e.length;t+=3){var s=e[t],i=e[t+1],r=e[t+2];if(typeof i!="function"){if(f5(i||s)===null)continue;break}var l=le(s);l!==null&&(e.splice(t,3),t-=3,_s(l,{pending:!0,data:r,method:s.method,action:i},i,r))}}))}function Ge(e){function t(d){return I3(d,e)}U1!==null&&I3(U1,e),R1!==null&&I3(R1,e),j1!==null&&I3(j1,e),Ut.forEach(t),Rt.forEach(t);for(var s=0;s<H1.length;s++){var i=H1[s];i.blockedOn===e&&(i.blockedOn=null)}for(;0<H1.length&&(s=H1[0],s.blockedOn===null);)O6(s),s.blockedOn===null&&H1.shift();if(s=(e.ownerDocument||e).$$reactFormReplay,s!=null)for(i=0;i<s.length;i+=3){var r=s[i],l=s[i+1],a=r[d2]||null;if(typeof l=="function")a||D6(s);else if(a){var u=null;if(l&&l.hasAttribute("formAction")){if(r=l,a=l[d2]||null)u=a.formAction;else if(f5(r)!==null)continue}else u=a.action;typeof u=="function"?s[i+1]=u:(s.splice(i,3),i-=3),D6(s)}}}function C6(){function e(l){l.canIntercept&&l.info==="react-transition"&&l.intercept({handler:function(){return new Promise(function(a){return r=a})},focusReset:"manual",scroll:"manual"})}function t(){r!==null&&(r(),r=null),i||setTimeout(s,20)}function s(){if(!i&&!navigation.transition){var l=navigation.currentEntry;l&&l.url!=null&&navigation.navigate(l.url,{state:l.getState(),info:"react-transition",history:"replace"})}}if(typeof navigation=="object"){var i=!1,r=null;return navigation.addEventListener("navigate",e),navigation.addEventListener("navigatesuccess",t),navigation.addEventListener("navigateerror",t),setTimeout(s,100),function(){i=!0,navigation.removeEventListener("navigate",e),navigation.removeEventListener("navigatesuccess",t),navigation.removeEventListener("navigateerror",t),r!==null&&(r(),r=null)}}}function T5(e){this._internalRoot=e}e4.prototype.render=T5.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(n(409));var s=t.current,i=M2();b6(s,i,e,t,null,null)},e4.prototype.unmount=T5.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;b6(e.current,2,null,e,null,null),j3(),t[ie]=null}};function e4(e){this._internalRoot=e}e4.prototype.unstable_scheduleHydration=function(e){if(e){var t=X5();e={blockedOn:null,target:e,priority:t};for(var s=0;s<H1.length&&t!==0&&t<H1[s].priority;s++);H1.splice(s,0,e),s===0&&O6(e)}};var U6=p.version;if(U6!=="19.2.7")throw Error(n(527,U6,"19.2.7"));L.findDOMNode=function(e){var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(n(188)):(e=Object.keys(e).join(","),Error(n(268,e)));return e=T(t),e=e!==null?Y(e):null,e=e===null?null:e.stateNode,e};var Mn={bundleType:0,version:"19.2.7",rendererPackageName:"react-dom",currentDispatcherRef:M,reconcilerVersion:"19.2.7"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var t4=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!t4.isDisabled&&t4.supportsFiber)try{Ze=t4.inject(Mn),T2=t4}catch{}}return qt.createRoot=function(e,t){if(!E(e))throw Error(n(299));var s=!1,i="",r=Lr,l=Gr,a=Xr;return t!=null&&(t.unstable_strictMode===!0&&(s=!0),t.identifierPrefix!==void 0&&(i=t.identifierPrefix),t.onUncaughtError!==void 0&&(r=t.onUncaughtError),t.onCaughtError!==void 0&&(l=t.onCaughtError),t.onRecoverableError!==void 0&&(a=t.onRecoverableError)),t=g6(e,1,!1,null,null,s,i,null,r,l,a,C6),e[ie]=t.current,Is(e),new T5(t)},qt.hydrateRoot=function(e,t,s){if(!E(e))throw Error(n(299));var i=!1,r="",l=Lr,a=Gr,u=Xr,d=null;return s!=null&&(s.unstable_strictMode===!0&&(i=!0),s.identifierPrefix!==void 0&&(r=s.identifierPrefix),s.onUncaughtError!==void 0&&(l=s.onUncaughtError),s.onCaughtError!==void 0&&(a=s.onCaughtError),s.onRecoverableError!==void 0&&(u=s.onRecoverableError),s.formState!==void 0&&(d=s.formState)),t=g6(e,1,!0,t,s??null,i,r,d,l,a,u,C6),t.context=S6(null),s=t.current,i=M2(),i=u4(i),r=g1(i),r.callback=null,S1(s,r,i),s=i,t.current.lanes=s,Ke(t,s),K2(t),e[ie]=t.current,Is(e),new e4(t)},qt.version="19.2.7",qt}var Q6;function Hn(){if(Q6)return g5.exports;Q6=1;function c(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(c)}catch(p){console.error(p)}}return c(),g5.exports=jn(),g5.exports}var qn=Hn();const C5={power655:{id:"power655",label:"Power 6/55",shortLabel:"6/55",maxNumber:55,pickCount:6,totalCombinations:28989675,dataFileName:"power655.jsonl",prizeByMatch:{3:5e4,4:5e5,5:5e9,6:4e10}},power645:{id:"power645",label:"Power 6/45",shortLabel:"6/45",maxNumber:45,pickCount:6,totalCombinations:8145060,dataFileName:"power645.jsonl",prizeByMatch:{3:3e4,4:3e5,5:1e7,6:12e9}},power535:{id:"power535",label:"Power 5/35",shortLabel:"5/35",maxNumber:35,pickCount:5,totalCombinations:324632,dataFileName:"power535.jsonl",prizeByMatch:{3:3e4,4:5e5,5:1e10}}},Bn="power655",E5=Object.values(C5),l4=C5.power655,Z6=new Map;function I6(c,p){if(p<0||p>c)return 0;if(p===0||p===c)return 1;const g=Math.min(p,c-p),n=`${c}:${g}`,E=Z6.get(n);if(E!==void 0)return E;let A=1;for(let B=1;B<=g;B+=1)A=A*(c-g+B)/B;const S=Math.round(A);return Z6.set(n,S),S}function Qe(c){return[...c].sort((p,g)=>p-g)}function U5(c,p=l4){return c.length!==p.pickCount||new Set(c).size!==p.pickCount?!1:c.every(n=>Number.isInteger(n)&&n>=1&&n<=p.maxNumber)}function te(c,p=l4){const g=Qe(c);if(!U5(g,p))throw new Error(`Combination must contain ${p.pickCount} unique integers from 1 to ${p.maxNumber}.`);let n=0,E=0;for(let A=0;A<p.pickCount;A+=1){const S=g[A];for(let B=E+1;B<S;B+=1)n+=I6(p.maxNumber-B,p.pickCount-A-1);E=S}return n}function r4(c,p=l4){if(!Number.isInteger(c)||c<0||c>=p.totalCombinations)throw new Error(`Index must be an integer from 0 to ${p.totalCombinations-1}.`);const g=[];let n=c,E=0;for(let A=0;A<p.pickCount;A+=1)for(let S=E+1;S<=p.maxNumber;S+=1){const B=I6(p.maxNumber-S,p.pickCount-A-1);if(n<B){g.push(S),E=S;break}n-=B}return g}function o1(c){return c.map(p=>String(p).padStart(2,"0")).join(" ")}function Yn(c){return c.trim().split(/[\s,;-]+/).filter(Boolean).map(g=>Number(g))}function Xe(c=l4){const p=Array.from({length:c.maxNumber},(g,n)=>n+1);for(let g=p.length-1;g>0;g-=1){const n=Math.floor(Math.random()*(g+1));[p[g],p[n]]=[p[n],p[g]]}return Qe(p.slice(0,c.pickCount))}const u2=5500,s4=4,M5=1;function V6(c,p,g,n,E){const A=c%u2,S=Math.floor(c/u2);return A>=p&&A<=g&&S>=n&&S<=E}function Ln({product:c,importedIndexes:p,selectedIndexes:g,randomIndex:n,focusRequest:E,mode:A,zoom:S,onZoomChange:B,onSelect:U}){const T=k.useRef(null),Y=k.useRef(null),q=k.useRef(null),Q=k.useRef(null),_0=k.useRef(0),O0=k.useRef(null),s0=k.useRef(s4*S+M5),b0=k.useRef(null),n0=k.useRef(null),o0=k.useRef({importedIndexes:p,selectedIndexes:g,importedList:[],selectedList:[],randomIndex:n,mode:A,cellSize:s4*S,stride:s4*S+M5,width:0,height:0,dpr:window.devicePixelRatio||1,hoverIndex:null}),f0=s4*S,t0=f0+M5,Y0=Math.ceil(c.totalCombinations/u2),L0=u2*t0,I=Y0*t0,H0=k.useMemo(()=>[...p],[p]),C0=k.useMemo(()=>[...g],[g]);function J0(y,O,H,j,z,G,Z,F,m0){y.fillStyle=H;const N0=Math.max(1,F.cellSize);for(const i0 of O){if(!V6(i0,j,z,G,Z))continue;const p0=i0%u2,r2=Math.floor(i0/u2);y.fillRect(p0*F.stride-m0.scrollLeft,r2*F.stride-m0.scrollTop,N0,N0)}}function d0(){const y=q.current,O=Y.current,H=y==null?void 0:y.getContext("2d");if(!y||!O||!H)return;const j=o0.current,z=j.width,G=j.height;if(z===0||G===0)return;H.setTransform(j.dpr,0,0,j.dpr,0,0),H.clearRect(0,0,z,G),H.fillStyle="#121417",H.fillRect(0,0,z,G);const Z=Math.max(0,Math.floor(O.scrollLeft/j.stride)),F=Math.min(u2-1,Math.ceil((O.scrollLeft+z)/j.stride)),m0=Math.max(0,Math.floor(O.scrollTop/j.stride)),N0=Math.min(Y0-1,Math.ceil((O.scrollTop+G)/j.stride)),i0=F-Z+1,p0=N0-m0+1,r2=j.mode==="heatmap"?"#303338":"#2b2b2b";H.fillStyle=r2;const q2=Math.max(1,j.cellSize);for(let n2=0;n2<p0;n2+=1){const J2=m0+n2,G2=J2*j.stride-O.scrollTop;for(let X2=0;X2<i0;X2+=1){const se=Z+X2;if(J2*u2+se>=c.totalCombinations)break;H.fillRect(se*j.stride-O.scrollLeft,G2,q2,q2)}}if(J0(H,j.importedList,j.mode==="heatmap"?"#ff6b5f":"#ee3f46",Z,F,m0,N0,j,O),J0(H,j.selectedList,"#27a7ff",Z,F,m0,N0,j,O),j.randomIndex!==null&&J0(H,[j.randomIndex],"#f7c948",Z,F,m0,N0,j,O),j.cellSize>=22){H.fillStyle="#d8dde6",H.font="10px Inter, system-ui, sans-serif";for(let n2=m0;n2<=N0;n2+=1){const J2=n2*j.stride-O.scrollTop;for(let G2=Z;G2<=F;G2+=1){const X2=n2*u2+G2;if(X2>=c.totalCombinations)break;H.fillText(o1(r4(X2,c)),G2*j.stride-O.scrollLeft+3,J2+14)}}}if(j.hoverIndex!==null&&V6(j.hoverIndex,Z,F,m0,N0)){const n2=j.hoverIndex%u2,J2=Math.floor(j.hoverIndex/u2);H.strokeStyle="#ffffff",H.lineWidth=1,H.strokeRect(n2*j.stride-O.scrollLeft-1,J2*j.stride-O.scrollTop-1,j.cellSize+2,j.cellSize+2)}}function S0(){cancelAnimationFrame(_0.current),_0.current=requestAnimationFrame(d0)}function K(y){return Math.min(10,Math.max(.55,Number(y.toFixed(2))))}function F0(y,O,H){const j=Y.current;if(!j){B(K(y));return}b0.current={xRatio:(j.scrollLeft+O)/t0,yRatio:(j.scrollTop+H)/t0,viewportX:O,viewportY:H},B(K(y))}k.useEffect(()=>{const y=Y.current;if(y&&s0.current!==t0){const O=b0.current??{xRatio:(y.scrollLeft+y.clientWidth/2)/s0.current,yRatio:(y.scrollTop+y.clientHeight/2)/s0.current,viewportX:y.clientWidth/2,viewportY:y.clientHeight/2};y.scrollLeft=Math.max(0,O.xRatio*t0-O.viewportX),y.scrollTop=Math.max(0,O.yRatio*t0-O.viewportY),s0.current=t0,b0.current=null}o0.current={...o0.current,importedIndexes:p,selectedIndexes:g,importedList:H0,selectedList:C0,randomIndex:n,mode:A,cellSize:f0,stride:t0},S0()},[f0,p,H0,A,c,n,Y0,g,C0,t0]),k.useEffect(()=>{const y=q.current,O=Y.current,H=T.current;if(!y||!O||!H)return;const j=y,z=H;function G(){const F=z.getBoundingClientRect(),m0=window.devicePixelRatio||1;O0.current=F,o0.current.width=F.width,o0.current.height=F.height,o0.current.dpr=m0,j.width=Math.floor(F.width*m0),j.height=Math.floor(F.height*m0),j.style.width=`${F.width}px`,j.style.height=`${F.height}px`,S0()}const Z=new ResizeObserver(G);return Z.observe(z),O.addEventListener("scroll",S0,{passive:!0}),G(),()=>{cancelAnimationFrame(_0.current),Z.disconnect(),O.removeEventListener("scroll",S0)}},[c,Y0]),k.useEffect(()=>{const y=Y.current;if(!y||E===null)return;const O=requestAnimationFrame(()=>{const H=Math.floor(E.index/u2),j=E.index%u2,z=Math.max(0,y.scrollWidth-y.clientWidth),G=Math.max(0,y.scrollHeight-y.clientHeight),Z=Math.min(z,Math.max(0,j*t0+f0/2-y.clientWidth/2)),F=Math.min(G,Math.max(0,H*t0+f0/2-y.clientHeight/2));o0.current.hoverIndex=E.index,y.scrollTo({left:Z,top:F,behavior:"smooth"}),S0()});return()=>cancelAnimationFrame(O)},[f0,E,t0]);function i2(y){var m0;const O=Y.current,H=O0.current??((m0=T.current)==null?void 0:m0.getBoundingClientRect());if(!H||!O)return null;const j=y.clientX-H.left+O.scrollLeft,z=y.clientY-H.top+O.scrollTop,G=Math.floor(j/t0),Z=Math.floor(z/t0);if(G<0||G>=u2||Z<0||Z>=Y0)return null;const F=Z*u2+G;return F>=c.totalCombinations?null:F}function M(y,O){const H=Q.current,j=o0.current.hoverIndex;if(o0.current.hoverIndex=O,!H||O===null){H&&(H.hidden=!0),j!==null&&S0();return}H.hidden=!1,H.style.transform=`translate(${y.clientX+14}px, ${y.clientY+14}px)`,j!==O&&(H.textContent=`#${O.toLocaleString("en-US")} - ${o1(r4(O,c))}`,S0())}function L(y){const O=Y.current,H=n0.current;if(H!=null&&H.active&&O){O.scrollLeft=H.left-(y.clientX-H.x),O.scrollTop=H.top-(y.clientY-H.y);return}M(y,i2(y))}function w(y){const O=Y.current;!O||y.button!==0||(n0.current={x:y.clientX,y:y.clientY,left:O.scrollLeft,top:O.scrollTop,active:!1},y.currentTarget.setPointerCapture(y.pointerId))}function h0(y){const O=n0.current,H=O?Math.abs(y.clientX-O.x)+Math.abs(y.clientY-O.y):0;if(n0.current=null,H>8)return;const j=i2(y);j!==null&&U(j)}function v0(){n0.current=null,o0.current.hoverIndex=null,Q.current&&(Q.current.hidden=!0),S0()}function m(y){var H;const O=Y.current;if(O){if(y.preventDefault(),y.ctrlKey||y.metaKey){const j=O0.current??((H=T.current)==null?void 0:H.getBoundingClientRect());if(!j)return;const z=y.deltaY<0?1.18:1/1.18;F0(S*z,y.clientX-j.left,y.clientY-j.top);return}O.scrollLeft+=y.shiftKey?y.deltaY:y.deltaX,O.scrollTop+=y.shiftKey?y.deltaX:y.deltaY}}k.useEffect(()=>{const y=q.current;if(y)return y.addEventListener("wheel",m,{passive:!1}),()=>y.removeEventListener("wheel",m)},[S,t0]);function D(y){n0.current&&Math.abs(y.clientX-n0.current.x)+Math.abs(y.clientY-n0.current.y)>8&&(n0.current.active=!0),L(y)}return R.jsxs("div",{className:"grid-wrapper",ref:T,children:[R.jsx("div",{className:"grid-scroller",ref:Y,children:R.jsx("div",{style:{width:L0,height:I}})}),R.jsx("canvas",{ref:q,className:"grid-canvas",onPointerDown:w,onPointerMove:D,onPointerUp:h0,onPointerLeave:v0}),R.jsx("div",{ref:Q,className:"tooltip",hidden:!0})]})}function Gn({inputRef:c,onFileChange:p}){return R.jsx("input",{ref:c,className:"hidden-input",type:"file",accept:".csv,.json,.jsonl,application/json,text/csv,text/plain",onChange:p})}/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xn=c=>c.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),P6=(...c)=>c.filter((p,g,n)=>!!p&&p.trim()!==""&&n.indexOf(p)===g).join(" ").trim();/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var Qn={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Zn=k.forwardRef(({color:c="currentColor",size:p=24,strokeWidth:g=2,absoluteStrokeWidth:n,className:E="",children:A,iconNode:S,...B},U)=>k.createElement("svg",{ref:U,...Qn,width:p,height:p,stroke:c,strokeWidth:n?Number(g)*24/Number(p):g,className:P6("lucide",E),...B},[...S.map(([T,Y])=>k.createElement(T,Y)),...Array.isArray(A)?A:[A]]));/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const s2=(c,p)=>{const g=k.forwardRef(({className:n,...E},A)=>k.createElement(Zn,{ref:A,iconNode:p,className:P6(`lucide-${Xn(c)}`,n),...E}));return g.displayName=`${c}`,g};/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const K6=s2("Activity",[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vn=s2("Calculator",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",key:"1nb95v"}],["line",{x1:"8",x2:"16",y1:"6",y2:"6",key:"x4nwl0"}],["line",{x1:"16",x2:"16",y1:"14",y2:"18",key:"wjye3r"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M8 14h.01",key:"6423bh"}],["path",{d:"M12 18h.01",key:"mhygvu"}],["path",{d:"M8 18h.01",key:"lrp35t"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kn=s2("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jn=s2("Crosshair",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"22",x2:"18",y1:"12",y2:"12",key:"l9bcsi"}],["line",{x1:"6",x2:"2",y1:"12",y2:"12",key:"13hhkx"}],["line",{x1:"12",x2:"12",y1:"6",y2:"2",key:"10w3f3"}],["line",{x1:"12",x2:"12",y1:"22",y2:"18",key:"15g9kq"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const wn=s2("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $n=s2("Eraser",[["path",{d:"m7 21-4.3-4.3c-1-1-1-2.5 0-3.4l9.6-9.6c1-1 2.5-1 3.4 0l5.6 5.6c1 1 1 2.5 0 3.4L13 21",key:"182aya"}],["path",{d:"M22 21H7",key:"t4ddhn"}],["path",{d:"m5 11 9 9",key:"1mo9qw"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kn=s2("Grid2x2",[["path",{d:"M12 3v18",key:"108xh3"}],["path",{d:"M3 12h18",key:"1i2n21"}],["rect",{x:"3",y:"3",width:"18",height:"18",rx:"2",key:"h1oib"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fn=s2("LockKeyhole",[["circle",{cx:"12",cy:"16",r:"1",key:"1au0dj"}],["rect",{x:"3",y:"10",width:"18",height:"12",rx:"2",key:"6s8ecr"}],["path",{d:"M7 10V7a5 5 0 0 1 10 0v3",key:"1pqi11"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wn=s2("LogIn",[["path",{d:"M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4",key:"u53s6r"}],["polyline",{points:"10 17 15 12 10 7",key:"1ail0h"}],["line",{x1:"15",x2:"3",y1:"12",y2:"12",key:"v6grx8"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const In=s2("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pn=s2("RotateCcw",[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ed=s2("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const td=s2("Shuffle",[["path",{d:"m18 14 4 4-4 4",key:"10pe0f"}],["path",{d:"m18 2 4 4-4 4",key:"pucp1d"}],["path",{d:"M2 18h1.973a4 4 0 0 0 3.3-1.7l5.454-8.6a4 4 0 0 1 3.3-1.7H22",key:"1ailkh"}],["path",{d:"M2 6h1.972a4 4 0 0 1 3.6 2.2",key:"km57vx"}],["path",{d:"M22 18h-6.041a4 4 0 0 1-3.3-1.8l-.359-.45",key:"os18l9"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const sd=s2("ThermometerSun",[["path",{d:"M12 9a4 4 0 0 0-2 7.5",key:"1jvsq6"}],["path",{d:"M12 3v2",key:"1w22ol"}],["path",{d:"m6.6 18.4-1.4 1.4",key:"w2yidj"}],["path",{d:"M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z",key:"iof6y5"}],["path",{d:"M4 13H2",key:"118le4"}],["path",{d:"M6.34 7.34 4.93 5.93",key:"1brd51"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const id=s2("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rd=s2("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);/**
 * @license lucide-react v0.468.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ld=s2("ZoomIn",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["line",{x1:"21",x2:"16.65",y1:"21",y2:"16.65",key:"13gj7c"}],["line",{x1:"11",x2:"11",y1:"8",y2:"14",key:"1vmskp"}],["line",{x1:"8",x2:"14",y1:"11",y2:"11",key:"durymu"}]]);function ad({onLogin:c}){const[p,g]=k.useState(""),[n,E]=k.useState(""),[A,S]=k.useState("");function B(U){U.preventDefault();const T=p.trim();if(!T||!n.trim()){S("Nhap du username va password.");return}S(""),c(T)}return R.jsx("main",{className:"login-shell",children:R.jsxs("section",{className:"login-panel",children:[R.jsxs("div",{className:"login-brand",children:[R.jsx("p",{className:"eyebrow",children:"Vietlott Power 6/55"}),R.jsx("h1",{children:"Combination Space"})]}),R.jsxs("form",{className:"login-form",onSubmit:B,children:[R.jsxs("label",{className:"field-row",children:[R.jsx(rd,{size:18}),R.jsx("input",{autoComplete:"username",placeholder:"Username",value:p,onChange:U=>g(U.target.value)})]}),R.jsxs("label",{className:"field-row",children:[R.jsx(Fn,{size:18}),R.jsx("input",{autoComplete:"current-password",placeholder:"Password",type:"password",value:n,onChange:U=>E(U.target.value)})]}),A&&R.jsx("p",{className:"login-error",children:A}),R.jsxs("button",{className:"primary login-submit",type:"submit",children:[R.jsx(Wn,{size:17}),"Login"]})]})]})})}function ud({entries:c}){return R.jsxs("section",{className:"panel log-panel",children:[R.jsx("h2",{children:"Log"}),R.jsx("div",{className:"log-list",children:c.length===0?R.jsx("p",{className:"empty-state",children:"Chưa có hành động."}):c.map(p=>R.jsxs("div",{className:`log-entry ${p.level}`,children:[R.jsx("time",{children:p.at}),R.jsx("span",{children:p.message})]},p.id))})]})}function nd({value:c,onChange:p}){const[g,n]=k.useState(!1),E=k.useRef(null),A=E5.find(S=>S.id===c)??E5[0];return k.useEffect(()=>{function S(U){var T;(T=E.current)!=null&&T.contains(U.target)||n(!1)}function B(U){U.key==="Escape"&&n(!1)}return document.addEventListener("pointerdown",S),document.addEventListener("keydown",B),()=>{document.removeEventListener("pointerdown",S),document.removeEventListener("keydown",B)}},[]),R.jsxs("div",{className:"product-selector",ref:E,children:[R.jsx("span",{className:"product-selector-label",children:"Product"}),R.jsxs("button",{type:"button",className:"product-select-button","aria-haspopup":"listbox","aria-expanded":g,onClick:()=>n(S=>!S),children:[R.jsx("span",{children:A.label}),R.jsx(Kn,{size:15,"aria-hidden":"true"})]}),g?R.jsx("div",{className:"product-menu",role:"listbox","aria-label":"Product",children:E5.map(S=>R.jsx("button",{type:"button",className:`product-option ${S.id===c?"active":""}`,role:"option","aria-selected":S.id===c,onClick:()=>{p(S.id),n(!1)},children:S.label},S.id))}):null]})}function dd({onSearch:c}){const[p,g]=k.useState("");function n(E){E.preventDefault(),c(p)}return R.jsxs("form",{className:"search-box",onSubmit:n,children:[R.jsx(ed,{size:17}),R.jsx("input",{"aria-label":"Search combination",placeholder:"07 13 22 31 44 52",value:p,onChange:E=>g(E.target.value)}),R.jsx("button",{type:"submit",children:"Search Combination"})]})}function cd({product:c,importedCount:p,selectedCount:g}){const n=p/c.totalCombinations*100;return R.jsxs("section",{className:"panel stats-panel",children:[R.jsx("h2",{children:"Thống kê"}),R.jsxs("div",{className:"stat-row",children:[R.jsx("span",{children:"Tổng tổ hợp"}),R.jsx("strong",{children:c.totalCombinations.toLocaleString("en-US")})]}),R.jsxs("div",{className:"stat-row",children:[R.jsx("span",{children:"Đã xuất hiện"}),R.jsx("strong",{children:p.toLocaleString("en-US")})]}),R.jsxs("div",{className:"stat-row",children:[R.jsx("span",{children:"Đã chọn"}),R.jsx("strong",{children:g.toLocaleString("en-US")})]}),R.jsxs("div",{className:"stat-row",children:[R.jsx("span",{children:"Tỷ lệ phủ"}),R.jsxs("strong",{children:[n.toFixed(6),"%"]})]}),R.jsxs("div",{className:"legend",children:[R.jsxs("span",{children:[R.jsx("i",{className:"swatch gray"})," Gray"]}),R.jsxs("span",{children:[R.jsx("i",{className:"swatch red"})," Red"]}),R.jsxs("span",{children:[R.jsx("i",{className:"swatch blue"})," Blue"]}),R.jsxs("span",{children:[R.jsx("i",{className:"swatch yellow"})," Yellow"]})]})]})}function od({mode:c,zoom:p,onImportClick:g,onClearImported:n,onClearSelected:E,onExportSelected:A,onRandomPick:S,onCalculatedPick:B,onBacktestPick:U,onStatTest:T,onResetView:Y,onToggleMode:q,onZoomIn:Q,onZoomOut:_0}){return R.jsxs("div",{className:"toolbar",children:[R.jsxs("button",{className:"primary",onClick:g,title:"Import Data",children:[R.jsx(id,{size:16}),"Import Data"]}),R.jsxs("button",{onClick:n,title:"Clear Imported Data",children:[R.jsx($n,{size:16}),"Clear Imported"]}),R.jsxs("button",{onClick:E,title:"Clear Selected Cells",children:[R.jsx(In,{size:16}),"Clear Selected"]}),R.jsxs("button",{onClick:A,title:"Export Selected Cells",children:[R.jsx(wn,{size:16}),"Export Selected"]}),R.jsxs("button",{onClick:S,title:"Random Pick",children:[R.jsx(td,{size:16}),"Random Pick"]}),R.jsxs("button",{onClick:B,title:"Calculated Pick",children:[R.jsx(Vn,{size:16}),"Calculated Pick"]}),R.jsxs("button",{onClick:U,title:"Replay Backtest",children:[R.jsx(K6,{size:16}),"Backtest"]}),R.jsxs("button",{onClick:T,title:"Random Monte Carlo Statistical Test",children:[R.jsx(K6,{size:16}),"Stat Test"]}),R.jsxs("button",{onClick:Y,title:"Reset View",children:[R.jsx(Pn,{size:16}),"Reset View"]}),R.jsxs("button",{onClick:q,title:"Toggle Grid / Heatmap Mode",children:[c==="grid"?R.jsx(sd,{size:16}):R.jsx(kn,{size:16}),c==="grid"?"Heatmap":"Grid"]}),R.jsxs("button",{onClick:Q,title:"Zoom In",children:[R.jsx(ld,{size:16}),"Zoom In"]}),R.jsxs("button",{onClick:_0,title:"Zoom Out",children:[R.jsx(Jn,{size:16}),"Zoom Out"]}),R.jsxs("span",{className:"zoom-readout",title:"Current grid zoom",children:[Math.round(p*100),"%"]})]})}const md=12345,pd=.18;function ea(c,p){return`${c}:${p}`}function _d(c,p){const g=Array.from({length:p.maxNumber+1},()=>0),n=new Map;for(const E of c){const A=r4(E,p);for(const S of A)g[S]+=1;for(let S=0;S<A.length;S+=1)for(let B=S+1;B<A.length;B+=1){const U=ea(A[S],A[B]);n.set(U,(n.get(U)??0)+1)}}return{numberFrequency:g,pairFrequency:n,maxNumberFrequency:Math.max(1,...g),maxPairFrequency:Math.max(1,...n.values())}}function fd(c,p,g){let n=0;for(const q of c)n+=p.numberFrequency[q];let E=0,A=0;for(let q=0;q<c.length;q+=1)for(let Q=q+1;Q<c.length;Q+=1)E+=p.pairFrequency.get(ea(c[q],c[Q]))??0,A+=1;const S=n/g.pickCount,B=E/A,U=1-S/p.maxNumberFrequency,T=1-B/p.maxPairFrequency,Y=(c[c.length-1]-c[0])/(g.maxNumber-1);return{score:U*.58+T*.34+Y*.08+Math.random()*1e-4,averageNumberFrequency:S,averagePairFrequency:B}}function hd(c,p,g,n){if(p.length===0||g<=0)return 0;const E=new Set(c);return Math.max(...p.map(S=>S.filter(B=>E.has(B)).length))/n.pickCount*g}function ta(c,p,g=md,n={}){if(c.size===0){const s0=Xe(p);return{numbers:s0,index:te(s0,p),score:0,baseScore:0,diversityPenalty:0,candidateCount:1,averageNumberFrequency:0,averagePairFrequency:0}}const E=_d(c,p),A=n.diversityMemory??[],S=n.diversityPenaltyWeight??pd;let B=Xe(p),U=te(B,p),T=Number.NEGATIVE_INFINITY,Y=Number.NEGATIVE_INFINITY,q=0,Q=0,_0=0;const O0=new Set;for(let s0=0;s0<g;s0+=1){const b0=Xe(p),n0=te(b0,p);if(O0.has(n0)||c.has(n0))continue;O0.add(n0);const o0=fd(b0,E,p),f0=hd(b0,A,S,p),t0=o0.score-f0;t0>T&&(B=b0,U=n0,T=t0,Y=o0.score,q=f0,Q=o0.averageNumberFrequency,_0=o0.averagePairFrequency)}return{numbers:B,index:U,score:T,baseScore:Y,diversityPenalty:q,candidateCount:O0.size,averageNumberFrequency:Q,averagePairFrequency:_0}}function sa(c,p,g){const n=Qe(c);return U5(n,g)?{index:te(n,g),numbers:n,source:p}:`${p}: bộ số không hợp lệ (${c.join(", ")})`}function J6(c,p){const g=[],n=[];return c.split(/\r?\n/).map(A=>A.trim()).filter(Boolean).forEach((A,S)=>{const B=A.split(",").map(Q=>Q.trim());if(S===0&&B.some(Q=>/[a-z_]/i.test(Q)))return;const T=B.map(Q=>Number(Q)),Y=T.length>=p.pickCount+1?T.slice(1,p.pickCount+1):T.slice(0,p.pickCount);if(Y.some(Q=>!Number.isFinite(Q))){n.push(`CSV dòng ${S+1}: không đọc được số.`);return}const q=sa(Y,`CSV dòng ${S+1}`,p);if(typeof q=="string"){n.push(q);return}g.push(q)}),{combinations:g,errors:n}}function w6(c,p){const g=[],n=[],E=c.trim();if(!E)return{combinations:g,errors:n};const A=[];try{const S=JSON.parse(E);A.push(...Array.isArray(S)?S:[S])}catch{E.split(/\r?\n/).forEach((S,B)=>{if(S.trim())try{A.push(JSON.parse(S))}catch{n.push(`JSON dòng ${B+1}: lỗi định dạng.`)}})}return A.forEach((S,B)=>{let U;if(Array.isArray(S))U=S.map(Y=>Number(Y)).slice(0,p.pickCount);else if(S&&typeof S=="object"){const Y=S.result??S.numbers;Array.isArray(Y)&&(U=Y.map(q=>Number(q)).slice(0,p.pickCount))}if(!U){n.push(`JSON bản ghi ${B+1}: không tìm thấy mảng result/numbers.`);return}const T=sa(U,`JSON bản ghi ${B+1}`,p);if(typeof T=="string"){n.push(T);return}g.push(T)}),{combinations:g,errors:n}}function $6(c,p,g){const n=p.toLowerCase();if(n.endsWith(".csv"))return J6(c,g);if(n.endsWith(".json")||n.endsWith(".jsonl"))return w6(c,g);const E=J6(c,g);return E.combinations.length>0?E:w6(c,g)}const k6=["Random","Frequency Weighted","Hot Numbers","Cold Numbers","Delay","Pair Frequency","Triple Frequency","Your Algorithm"];function N5(c,p){return c<p?`${c}:${p}`:`${p}:${c}`}function ia(c,p,g){return[c,p,g].sort((n,E)=>n-E).join(":")}function Td(c,p){return{name:c,distribution:Array.from({length:p.pickCount+1},()=>0),totalMatches:0,exactHits:0,bestMatch:-1,totalRevenue:0,bestPrediction:null}}function yd(c,p){const g=Array.from({length:p.maxNumber+1},()=>0),n=Array.from({length:p.maxNumber+1},()=>-1),E=new Map,A=new Map;return c.forEach((S,B)=>{for(const U of S.numbers)g[U]+=1,n[U]=B;for(let U=0;U<S.numbers.length;U+=1)for(let T=U+1;T<S.numbers.length;T+=1){const Y=N5(S.numbers[U],S.numbers[T]);E.set(Y,(E.get(Y)??0)+1);for(let q=T+1;q<S.numbers.length;q+=1){const Q=ia(S.numbers[U],S.numbers[T],S.numbers[q]);A.set(Q,(A.get(Q)??0)+1)}}}),{numberFrequency:g,lastSeen:n,pairFrequency:E,tripleFrequency:A}}function Bt(c,p){const g=[],n=Array.from({length:c.maxNumber},(E,A)=>A+1);for(;g.length<c.pickCount;){let E=n[0],A=Number.NEGATIVE_INFINITY;for(const S of n){const B=p(S,g)+Math.random()*1e-6;B>A&&(A=B,E=S)}g.push(E),n.splice(n.indexOf(E),1)}return Qe(g)}function vd(c,p){const g=[],n=Array.from({length:p.maxNumber},(E,A)=>A+1);for(;g.length<p.pickCount;){const E=n.reduce((B,U)=>B+c.numberFrequency[U]+1,0);let A=Math.random()*E,S=n[0];for(const B of n)if(A-=c.numberFrequency[B]+1,A<=0){S=B;break}g.push(S),n.splice(n.indexOf(S),1)}return Qe(g)}function ra(c,p,g,n){if(p.length===0||c==="Random")return Xe(n);const E=yd(p,n);if(c==="Frequency Weighted")return vd(E,n);if(c==="Hot Numbers")return Bt(n,A=>E.numberFrequency[A]);if(c==="Cold Numbers"){const A=Math.max(...E.numberFrequency);return Bt(n,S=>A-E.numberFrequency[S])}return c==="Delay"?Bt(n,A=>E.lastSeen[A]===-1?p.length+1:p.length-E.lastSeen[A]):c==="Pair Frequency"?Bt(n,(A,S)=>S.length===0?E.numberFrequency[A]+1:S.reduce((U,T)=>U+(E.pairFrequency.get(N5(A,T))??0),0)/S.length+.05*E.numberFrequency[A]):c==="Triple Frequency"?Bt(n,(A,S)=>{let B=0,U=0;for(let Y=0;Y<S.length;Y+=1)for(let q=Y+1;q<S.length;q+=1)B+=E.tripleFrequency.get(ia(A,S[Y],S[q]))??0,U+=1;const T=S.reduce((Y,q)=>Y+(E.pairFrequency.get(N5(A,q))??0),0);return(U>0?B/U:0)+.25*T+.03*E.numberFrequency[A]}):ta(g,n,5e3).numbers}function i4(c){return c.reduce((p,g)=>p+g,0)/c.length}function A5(c,p=i4(c)){if(c.length<2)return 0;const g=c.reduce((n,E)=>n+(E-p)**2,0)/(c.length-1);return Math.sqrt(g)}function x5(c,p){return c.filter(g=>g<=p).length/c.length*100}function O5(c,p){return(c.filter(g=>g>=p).length+1)/(c.length+1)}function F6(c,p,g){const n=c.filter(E=>p.includes(E)).length;return{matches:n,revenue:g.prizeByMatch[n]??0}}async function gd(c,p,g){const n=new Map(k6.map(S=>[S,Td(S,p)])),E=[c[0]],A=new Set([c[0].index]);for(let S=1;S<c.length;S+=1){const B=c[S];for(const U of k6){const T=ra(U,E,A,p),Y=te(T,p),q=T.filter(_0=>B.numbers.includes(_0)).length,Q=n.get(U);Q.distribution[q]+=1,Q.totalMatches+=q,Q.totalRevenue+=p.prizeByMatch[q]??0,q===p.pickCount&&(Q.exactHits+=1),q>Q.bestMatch&&(Q.bestMatch=q,Q.bestPrediction={index:Y,numbers:T,actual:B.numbers,drawIndex:S})}E.push(B),A.add(B.index),S%25===0&&(g==null||g({drawIndex:S,totalDraws:c.length-1,results:[...n.values()]}),await new Promise(U=>setTimeout(U,0)))}return[...n.values()]}function Yt(c,p){const g=p*1e4,n=c.totalRevenue-g;return{avgMatches:c.totalMatches/p,hits3:c.distribution[3],hits4:c.distribution[4],hits5:c.distribution[5],exactHits:c.exactHits,roi:g>0?n/g*100:0}}async function Sd(c,p,g=500,n){const E=c.length-1,A=E*1e4,S=[c[0]],B=new Set([c[0].index]),U=Array.from({length:p.pickCount+1},()=>0),T=Array.from({length:g},()=>0),Y=Array.from({length:g},()=>0),q=Array.from({length:g},()=>0);let Q=0,_0=0,O0=0;for(let C0=1;C0<c.length;C0+=1){const J0=c[C0],d0=ra("Your Algorithm",S,B,p),S0=F6(d0,J0.numbers,p);U[S0.matches]+=1,Q+=S0.matches,O0+=S0.revenue,S0.matches>=3&&(_0+=1);for(let K=0;K<g;K+=1){const F0=F6(Xe(p),J0.numbers,p);T[K]+=F0.matches,q[K]+=F0.revenue,F0.matches>=3&&(Y[K]+=1)}S.push(J0),B.add(J0.index),C0%25===0&&(n==null||n(C0,E),await new Promise(K=>setTimeout(K,0)))}const s0=T.map(C0=>C0/E),b0=q.map(C0=>(C0-A)/A*100),n0=Q/E,o0=(O0-A)/A*100,f0=i4(s0),t0=A5(s0,f0),Y0=i4(Y),L0=A5(Y,Y0),I=i4(b0),H0=A5(b0,I);return{randomRuns:g,testedDraws:E,your:{avgMatches:n0,hits3Plus:_0,roi:o0,distribution:U},random:{avgMatchesMean:f0,avgMatchesStd:t0,hits3PlusMean:Y0,hits3PlusStd:L0,roiMean:I,roiStd:H0},avgMatchesZScore:t0>0?(n0-f0)/t0:0,avgMatchesPercentile:x5(s0,n0),avgMatchesPValue:O5(s0,n0),hits3PlusPercentile:x5(Y,_0),hits3PlusPValue:O5(Y,_0),roiPercentile:x5(b0,o0),roiPValue:O5(b0,o0)}}const bd=`{"date":"2025-06-29","id":"00001","result":[7,9,10,16,19,9],"process_time":"2025-07-08 16:42:15.649180"}
{"date":"2025-06-29","id":"00002","result":[6,12,14,18,25,8],"process_time":"2025-07-08 16:42:15.649115"}
{"date":"2025-06-30","id":"00003","result":[2,8,16,23,24,9],"process_time":"2025-07-08 16:40:45.113228"}
{"date":"2025-06-30","id":"00004","result":[1,12,13,27,28,7],"process_time":"2025-07-08 16:42:15.649028"}
{"date":"2025-07-01","id":"00005","result":[1,18,25,27,33,5],"process_time":"2025-07-08 16:40:45.113164"}
{"date":"2025-07-01","id":"00006","result":[5,18,20,30,34,7],"process_time":"2025-07-08 16:40:45.113196"}
{"date":"2025-07-02","id":"00007","result":[13,20,23,27,35,1],"process_time":"2025-07-08 16:40:45.113096"}
{"date":"2025-07-02","id":"00008","result":[9,11,27,29,35,9],"process_time":"2025-07-08 16:40:45.113130"}
{"date":"2025-07-03","id":"00009","result":[28,32,33,34,35,8],"process_time":"2025-07-08 16:40:45.113059"}
{"date":"2025-07-03","id":"00010","result":[10,23,24,30,33,6],"process_time":"2025-07-08 16:40:45.113017"}
{"date":"2025-07-04","id":"00011","result":[1,3,7,10,24,8],"process_time":"2025-07-08 16:40:45.112951"}
{"date":"2025-07-04","id":"00012","result":[3,18,20,29,34,3],"process_time":"2025-07-08 16:40:45.140789"}
{"date":"2025-07-05","id":"00013","result":[5,14,15,23,34,5],"process_time":"2025-07-08 16:40:45.140764"}
{"date":"2025-07-05","id":"00014","result":[3,13,19,25,29,7],"process_time":"2025-07-08 16:40:45.140738"}
{"date":"2025-07-06","id":"00015","result":[3,11,12,27,32,10],"process_time":"2025-07-08 16:40:45.140712"}
{"date":"2025-07-06","id":"00016","result":[6,7,13,28,29,7],"process_time":"2025-07-08 16:40:45.140686"}
{"date":"2025-07-07","id":"00017","result":[1,8,14,19,23,6],"process_time":"2025-07-08 16:40:45.140629"}
{"date":"2025-07-07","id":"00018","result":[6,7,10,22,34,8],"process_time":"2025-07-08 16:40:45.140658"}
{"date":"2025-07-08","id":"00019","result":[14,15,17,28,31,8],"process_time":"2025-07-08 16:40:45.140592"}
{"date":"2025-07-08","id":"00020","result":[2,6,20,26,32,12],"process_time":"2025-08-01 15:22:19.494289"}
{"date":"2025-07-09","id":"00021","result":[1,2,12,25,31,12],"process_time":"2025-08-01 15:22:19.494200"}
{"date":"2025-07-09","id":"00022","result":[2,7,9,28,31,12],"process_time":"2025-08-01 15:22:19.494243"}
{"date":"2025-07-10","id":"00023","result":[11,17,24,28,30,5],"process_time":"2025-08-01 15:22:19.494160"}
{"date":"2025-07-10","id":"00024","result":[9,24,29,32,35,8],"process_time":"2025-08-01 15:22:19.494118"}
{"date":"2025-07-11","id":"00025","result":[8,11,17,18,20,1],"process_time":"2025-08-01 15:22:19.494029"}
{"date":"2025-07-11","id":"00026","result":[1,5,8,20,24,8],"process_time":"2025-08-01 15:22:19.494073"}
{"date":"2025-07-12","id":"00027","result":[5,14,26,31,35,7],"process_time":"2025-08-01 15:22:19.391712"}
{"date":"2025-07-12","id":"00028","result":[5,11,16,20,34,6],"process_time":"2025-08-01 15:22:19.493978"}
{"date":"2025-07-13","id":"00029","result":[13,15,19,22,27,10],"process_time":"2025-08-01 15:22:19.391583"}
{"date":"2025-07-13","id":"00030","result":[12,14,19,27,34,8],"process_time":"2025-08-01 15:22:19.391644"}
{"date":"2025-07-14","id":"00031","result":[2,3,12,14,22,3],"process_time":"2025-08-01 15:22:19.391522"}
{"date":"2025-07-14","id":"00032","result":[7,8,22,23,28,5],"process_time":"2025-08-01 15:22:19.391459"}
{"date":"2025-07-15","id":"00033","result":[3,7,12,19,26,6],"process_time":"2025-08-01 15:22:19.391319"}
{"date":"2025-07-15","id":"00034","result":[9,12,22,31,35,2],"process_time":"2025-08-01 15:22:19.391392"}
{"date":"2025-07-16","id":"00035","result":[7,11,13,17,25,9],"process_time":"2025-08-01 15:22:19.498015"}
{"date":"2025-07-16","id":"00036","result":[2,10,20,34,35,2],"process_time":"2025-08-01 15:22:19.391219"}
{"date":"2025-07-17","id":"00037","result":[1,4,8,18,29,7],"process_time":"2025-08-01 15:22:19.497980"}
{"date":"2025-07-17","id":"00038","result":[7,11,17,18,25,1],"process_time":"2025-08-01 15:22:19.497945"}
{"date":"2025-07-18","id":"00039","result":[2,10,12,16,34,2],"process_time":"2025-08-01 15:22:19.497875"}
{"date":"2025-07-18","id":"00040","result":[5,11,16,27,34,9],"process_time":"2025-08-01 15:22:19.497909"}
{"date":"2025-07-19","id":"00041","result":[5,19,20,21,30,11],"process_time":"2025-08-01 15:22:19.497839"}
{"date":"2025-07-19","id":"00042","result":[4,16,24,26,31,11],"process_time":"2025-08-01 15:22:19.497804"}
{"date":"2025-07-20","id":"00043","result":[9,14,28,33,35,10],"process_time":"2025-08-01 15:22:19.500009"}
{"date":"2025-07-20","id":"00044","result":[21,28,31,34,35,1],"process_time":"2025-08-01 15:22:19.497761"}
{"date":"2025-07-21","id":"00045","result":[8,20,24,27,28,3],"process_time":"2025-08-01 15:22:19.499940"}
{"date":"2025-07-21","id":"00046","result":[2,16,18,22,30,5],"process_time":"2025-08-01 15:22:19.499975"}
{"date":"2025-07-22","id":"00047","result":[3,14,16,21,25,5],"process_time":"2025-08-01 15:22:19.499869"}
{"date":"2025-07-22","id":"00048","result":[7,10,26,28,33,2],"process_time":"2025-08-01 15:22:19.499904"}
{"date":"2025-07-23","id":"00049","result":[3,21,28,33,34,5],"process_time":"2025-08-01 15:22:19.499798"}
{"date":"2025-07-23","id":"00050","result":[17,18,27,29,33,8],"process_time":"2025-08-01 15:22:19.499835"}
{"date":"2025-07-24","id":"00051","result":[7,8,18,22,33,7],"process_time":"2025-08-01 15:22:18.575755"}
{"date":"2025-07-24","id":"00052","result":[9,10,11,30,35,1],"process_time":"2025-08-01 15:22:19.499760"}
{"date":"2025-07-25","id":"00053","result":[9,10,19,22,24,7],"process_time":"2025-08-01 15:22:18.575579"}
{"date":"2025-07-25","id":"00054","result":[16,18,19,23,25,11],"process_time":"2025-08-01 15:22:18.575668"}
{"date":"2025-07-26","id":"00055","result":[1,7,12,16,23,8],"process_time":"2025-08-01 15:22:18.575394"}
{"date":"2025-07-26","id":"00056","result":[3,6,11,27,33,6],"process_time":"2025-08-01 15:22:18.575485"}
{"date":"2025-07-27","id":"00057","result":[1,14,19,25,27,8],"process_time":"2025-08-01 15:22:18.575302"}
{"date":"2025-07-27","id":"00058","result":[10,24,28,30,32,1],"process_time":"2025-08-01 15:22:18.575205"}
{"date":"2025-07-28","id":"00059","result":[1,3,28,32,33,11],"process_time":"2025-08-01 15:22:18.575070"}
{"date":"2025-07-28","id":"00060","result":[15,19,25,32,33,5],"process_time":"2025-08-01 15:22:18.633274"}
{"date":"2025-07-29","id":"00061","result":[1,5,16,28,29,8],"process_time":"2025-08-01 15:22:18.633182"}
{"date":"2025-07-29","id":"00062","result":[20,21,29,31,33,3],"process_time":"2025-08-01 15:22:18.633095"}
{"date":"2025-07-30","id":"00063","result":[4,9,10,18,19,2],"process_time":"2025-08-01 15:22:18.633004"}
{"date":"2025-07-30","id":"00064","result":[13,21,26,27,32,3],"process_time":"2025-08-01 15:22:18.632916"}
{"date":"2025-07-31","id":"00065","result":[3,10,24,26,34,6],"process_time":"2025-08-01 15:22:18.632726"}
{"date":"2025-07-31","id":"00066","result":[3,6,22,31,33,2],"process_time":"2025-08-01 15:22:18.632825"}
{"date":"2025-08-01","id":"00067","result":[12,14,16,22,23,9],"process_time":"2025-08-01 15:22:18.632614"}
{"date":"2025-08-01","id":"00068","result":[9,12,22,26,31,11],"process_time":"2025-08-20 16:02:31.817863"}
{"date":"2025-08-02","id":"00069","result":[1,3,7,10,25,11],"process_time":"2025-08-20 16:02:31.817604"}
{"date":"2025-08-02","id":"00070","result":[1,12,18,20,25,10],"process_time":"2025-08-20 16:02:31.817691"}
{"date":"2025-08-03","id":"00071","result":[1,6,8,23,25,12],"process_time":"2025-08-20 16:02:31.817522"}
{"date":"2025-08-03","id":"00072","result":[7,14,15,29,34,9],"process_time":"2025-08-20 16:02:31.817435"}
{"date":"2025-08-04","id":"00073","result":[5,20,25,30,32,10],"process_time":"2025-08-20 16:02:31.817337"}
{"date":"2025-08-04","id":"00074","result":[5,13,23,25,33,11],"process_time":"2025-08-20 16:02:31.697305"}
{"date":"2025-08-05","id":"00075","result":[8,20,24,30,34,1],"process_time":"2025-08-20 16:02:31.697233"}
{"date":"2025-08-05","id":"00076","result":[5,8,10,13,32,10],"process_time":"2025-08-20 16:02:31.697159"}
{"date":"2025-08-06","id":"00077","result":[12,25,31,32,35,4],"process_time":"2025-08-20 16:02:31.697003"}
{"date":"2025-08-06","id":"00078","result":[7,10,15,16,29,9],"process_time":"2025-08-20 16:02:31.697083"}
{"date":"2025-08-07","id":"00079","result":[1,18,27,29,30,7],"process_time":"2025-08-20 16:02:31.696831"}
{"date":"2025-08-07","id":"00080","result":[6,12,18,23,25,11],"process_time":"2025-08-20 16:02:31.696921"}
{"date":"2025-08-08","id":"00081","result":[2,15,22,30,33,6],"process_time":"2025-08-20 16:02:31.643597"}
{"date":"2025-08-08","id":"00082","result":[1,9,15,16,20,11],"process_time":"2025-08-20 16:02:31.696729"}
{"date":"2025-08-09","id":"00083","result":[2,15,20,24,28,10],"process_time":"2025-08-20 16:02:31.643531"}
{"date":"2025-08-09","id":"00084","result":[9,16,17,26,32,12],"process_time":"2025-08-20 16:02:31.643460"}
{"date":"2025-08-10","id":"00085","result":[8,16,18,28,34,7],"process_time":"2025-08-20 16:02:31.643325"}
{"date":"2025-08-10","id":"00086","result":[22,24,28,31,34,3],"process_time":"2025-08-20 16:02:31.643392"}
{"date":"2025-08-11","id":"00087","result":[2,9,11,17,23,3],"process_time":"2025-08-20 16:02:31.643257"}
{"date":"2025-08-11","id":"00088","result":[3,4,10,13,32,1],"process_time":"2025-08-20 16:02:31.643186"}
{"date":"2025-08-12","id":"00089","result":[8,17,24,25,33,5],"process_time":"2025-08-20 16:02:30.846974"}
{"date":"2025-08-12","id":"00090","result":[1,8,10,27,29,11],"process_time":"2025-08-20 16:02:31.643103"}
{"date":"2025-08-13","id":"00091","result":[20,22,25,28,32,1],"process_time":"2025-08-20 16:02:30.846804"}
{"date":"2025-08-13","id":"00092","result":[13,18,23,26,27,12],"process_time":"2025-08-20 16:02:30.846890"}
{"date":"2025-08-14","id":"00093","result":[11,19,22,27,35,10],"process_time":"2025-08-20 16:02:30.846625"}
{"date":"2025-08-14","id":"00094","result":[3,4,11,29,30,3],"process_time":"2025-08-20 16:02:30.846712"}
{"date":"2025-08-15","id":"00095","result":[5,6,27,33,34,8],"process_time":"2025-08-20 16:02:30.846449"}
{"date":"2025-08-15","id":"00096","result":[3,9,20,26,33,4],"process_time":"2025-08-20 16:02:30.846538"}
{"date":"2025-08-16","id":"00097","result":[8,21,24,33,34,3],"process_time":"2025-08-20 16:02:30.846345"}
{"date":"2025-08-16","id":"00098","result":[3,18,20,26,30,2],"process_time":"2025-08-20 16:02:30.715490"}
{"date":"2025-08-17","id":"00099","result":[15,20,23,27,30,4],"process_time":"2025-08-20 16:02:30.715418"}
{"date":"2025-08-17","id":"00100","result":[1,5,12,27,30,3],"process_time":"2025-08-20 16:02:30.715343"}
{"date":"2025-08-18","id":"00101","result":[1,4,17,33,34,6],"process_time":"2025-08-20 16:02:30.715255"}
{"date":"2025-08-18","id":"00102","result":[5,10,15,20,28,12],"process_time":"2025-08-20 16:02:30.715178"}
{"date":"2025-08-19","id":"00103","result":[3,10,24,30,33,4],"process_time":"2025-08-20 16:02:30.715000"}
{"date":"2025-08-19","id":"00104","result":[14,20,22,28,32,6],"process_time":"2025-08-20 16:02:30.715093"}
{"date":"2025-08-20","id":"00105","result":[5,10,15,24,25,7],"process_time":"2025-08-20 16:02:30.714872"}
{"date":"2025-08-20","id":"00106","result":[3,6,18,25,35,12],"process_time":"2025-08-23 18:50:54.858722"}
{"date":"2025-08-21","id":"00107","result":[2,4,13,15,26,1],"process_time":"2025-08-23 18:50:54.855772"}
{"date":"2025-08-21","id":"00108","result":[9,13,18,24,29,2],"process_time":"2025-08-23 18:50:54.856575"}
{"date":"2025-08-22","id":"00109","result":[8,9,32,33,34,2],"process_time":"2025-08-23 18:50:54.855040"}
{"date":"2025-08-22","id":"00110","result":[16,20,23,28,31,2],"process_time":"2025-08-23 18:50:54.854311"}
{"date":"2025-08-23","id":"00111","result":[4,13,14,26,30,8],"process_time":"2025-08-23 18:50:54.853419"}
{"date":"2025-08-23","id":"00112","result":[6,11,16,17,29,7],"process_time":"2025-08-24 00:01:14.305566"}
{"date":"2025-08-24","id":"00113","result":[8,9,21,23,30,12],"process_time":"2025-08-24 18:01:07.711081"}
{"date":"2025-08-24","id":"00114","result":[4,12,25,29,34,12],"process_time":"2025-08-26 00:01:11.870278"}
{"date":"2025-08-25","id":"00115","result":[1,7,14,25,26,1],"process_time":"2025-08-26 00:01:11.869192"}
{"date":"2025-08-25","id":"00116","result":[2,15,19,25,34,6],"process_time":"2025-08-26 00:01:11.868207"}
{"date":"2025-08-26","id":"00117","result":[13,20,25,27,30,11],"process_time":"2025-08-26 18:01:04.512098"}
{"date":"2025-08-26","id":"00118","result":[7,11,26,34,35,9],"process_time":"2025-08-27 00:01:07.707341"}
{"date":"2025-08-27","id":"00119","result":[7,11,17,22,35,8],"process_time":"2025-08-27 18:01:03.138680"}
{"date":"2025-08-27","id":"00120","result":[2,9,10,24,30,5],"process_time":"2025-08-28 00:01:02.365786"}
{"date":"2025-08-28","id":"00121","result":[3,18,19,23,30,7],"process_time":"2025-08-28 18:01:01.618912"}
{"date":"2025-08-28","id":"00122","result":[1,4,17,18,28,5],"process_time":"2025-08-29 00:01:11.171486"}
{"date":"2025-08-29","id":"00123","result":[8,10,21,27,31,5],"process_time":"2025-08-29 18:01:04.361818"}
{"date":"2025-08-29","id":"00124","result":[9,12,13,19,25,8],"process_time":"2025-08-30 00:01:01.914243"}
{"date":"2025-08-30","id":"00125","result":[7,11,18,20,27,10],"process_time":"2025-08-30 18:01:03.981120"}
{"date":"2025-08-30","id":"00126","result":[4,6,14,15,20,9],"process_time":"2025-08-31 00:01:05.334317"}
{"date":"2025-08-31","id":"00127","result":[1,8,19,21,30,11],"process_time":"2025-08-31 18:01:01.550506"}
{"date":"2025-08-31","id":"00128","result":[2,10,22,23,31,12],"process_time":"2025-09-01 00:01:03.073609"}
{"date":"2025-09-01","id":"00129","result":[9,22,24,30,35,7],"process_time":"2025-09-01 18:01:03.115925"}
{"date":"2025-09-01","id":"00130","result":[5,7,10,21,30,7],"process_time":"2025-09-02 00:01:06.744753"}
{"date":"2025-09-02","id":"00131","result":[1,10,12,22,31,2],"process_time":"2025-09-02 18:01:08.455164"}
{"date":"2025-09-02","id":"00132","result":[5,9,12,32,35,1],"process_time":"2025-09-03 00:01:04.351186"}
{"date":"2025-09-03","id":"00133","result":[1,6,9,17,26,4],"process_time":"2025-09-03 18:01:02.819651"}
{"date":"2025-09-03","id":"00134","result":[1,5,10,21,30,3],"process_time":"2025-09-04 00:01:12.603560"}
{"date":"2025-09-04","id":"00135","result":[12,17,23,26,29,12],"process_time":"2025-09-04 12:01:19.938460"}
{"date":"2025-09-04","id":"00136","result":[4,5,27,28,30,5],"process_time":"2025-09-04 12:01:19.939718"}
{"date":"2025-09-05","id":"00137","result":[1,4,20,23,35,11],"process_time":"2025-09-04 12:01:19.937260"}
{"date":"2025-09-05","id":"00138","result":[6,15,17,20,30,10],"process_time":"2025-09-04 12:01:19.778686"}
{"date":"2025-09-06","id":"00139","result":[7,11,13,27,34,4],"process_time":"2025-09-04 12:01:19.777539"}
{"date":"2025-09-06","id":"00140","result":[5,7,29,32,33,12],"process_time":"2025-09-04 12:01:19.776514"}
{"date":"2025-09-07","id":"00141","result":[1,3,10,14,15,7],"process_time":"2025-09-04 12:01:19.775146"}
{"date":"2025-09-07","id":"00142","result":[21,25,26,29,30,9],"process_time":"2025-09-04 12:01:19.773990"}
{"date":"2025-09-08","id":"00143","result":[11,14,19,21,25,2],"process_time":"2025-09-04 12:01:19.772813"}
{"date":"2025-09-08","id":"00144","result":[17,18,19,22,34,3],"process_time":"2025-09-04 12:01:19.771709"}
{"date":"2025-09-09","id":"00145","result":[3,4,21,26,33,5],"process_time":"2025-09-04 12:01:19.770401"}
{"date":"2025-09-09","id":"00146","result":[11,15,19,27,33,1],"process_time":"2025-09-10 00:01:16.409979"}
{"date":"2025-09-10","id":"00147","result":[6,13,14,23,29,6],"process_time":"2025-09-10 18:01:07.412898"}
{"date":"2025-09-10","id":"00148","result":[4,13,16,23,29,11],"process_time":"2025-09-11 00:01:04.949109"}
{"date":"2025-09-11","id":"00149","result":[1,6,25,28,30,2],"process_time":"2025-09-11 18:01:02.895136"}
{"date":"2025-09-11","id":"00150","result":[13,22,25,30,31,9],"process_time":"2025-09-12 00:01:06.517908"}
{"date":"2025-09-12","id":"00151","result":[15,17,19,20,34,3],"process_time":"2025-09-12 18:01:09.858618"}
{"date":"2025-09-12","id":"00152","result":[2,6,7,24,28,1],"process_time":"2025-09-13 00:01:01.362101"}
{"date":"2025-09-13","id":"00153","result":[3,19,26,33,34,8],"process_time":"2025-09-13 18:01:03.032266"}
{"date":"2025-09-13","id":"00154","result":[2,6,28,29,31,12],"process_time":"2025-09-14 00:01:02.497620"}
{"date":"2025-09-14","id":"00155","result":[1,6,7,11,31,3],"process_time":"2025-09-14 18:01:09.849463"}
{"date":"2025-09-14","id":"00156","result":[6,10,11,12,27,4],"process_time":"2025-09-15 00:01:03.038841"}
{"date":"2025-09-15","id":"00157","result":[1,11,16,25,29,7],"process_time":"2025-09-15 18:01:06.094438"}
{"date":"2025-09-15","id":"00158","result":[11,16,20,27,32,2],"process_time":"2025-09-16 00:01:05.325208"}
{"date":"2025-10-10","id":"00207","result":[3,10,13,24,31,10],"process_time":"2025-10-18 11:29:53.134567"}
{"date":"2025-10-10","id":"00208","result":[1,5,16,22,26,4],"process_time":"2025-10-18 11:29:53.134538"}
{"date":"2025-10-11","id":"00209","result":[2,18,19,29,32,7],"process_time":"2025-10-18 11:29:53.134509"}
{"date":"2025-10-11","id":"00210","result":[13,16,21,22,23,4],"process_time":"2025-10-18 11:29:53.134479"}
{"date":"2025-10-12","id":"00211","result":[8,15,22,26,28,11],"process_time":"2025-10-18 11:29:53.134449"}
{"date":"2025-10-12","id":"00212","result":[8,15,28,33,34,9],"process_time":"2025-10-18 11:29:53.134418"}
{"date":"2025-10-13","id":"00213","result":[2,17,32,33,34,3],"process_time":"2025-10-18 11:29:53.134386"}
{"date":"2025-10-13","id":"00214","result":[16,19,25,26,32,11],"process_time":"2025-10-18 11:29:53.134348"}
{"date":"2025-10-14","id":"00215","result":[7,12,14,20,28,4],"process_time":"2025-10-18 11:29:53.131774"}
{"date":"2025-10-14","id":"00216","result":[1,18,21,23,26,11],"process_time":"2025-10-18 11:29:53.131745"}
{"date":"2025-10-15","id":"00217","result":[1,4,14,15,32,8],"process_time":"2025-10-18 11:29:53.131715"}
{"date":"2025-10-15","id":"00218","result":[2,4,21,30,34,11],"process_time":"2025-10-18 11:29:53.131684"}
{"date":"2025-10-16","id":"00219","result":[1,9,12,20,23,1],"process_time":"2025-10-18 11:29:53.131651"}
{"date":"2025-10-16","id":"00220","result":[10,19,21,29,32,4],"process_time":"2025-10-18 11:29:53.131615"}
{"date":"2025-10-17","id":"00221","result":[18,25,26,34,35,7],"process_time":"2025-10-18 11:29:53.131575"}
{"date":"2025-10-17","id":"00222","result":[20,23,25,28,34,7],"process_time":"2025-10-18 11:29:53.131519"}
{"date":"2025-10-18","id":"00223","result":[6,8,13,24,25,3],"process_time":"2025-10-21T21:48:41.434260"}
{"date":"2025-10-18","id":"00224","result":[2,4,16,28,30,6],"process_time":"2025-10-21T21:48:41.434235"}
{"date":"2025-10-19","id":"00225","result":[7,12,23,30,35,4],"process_time":"2025-10-21T21:48:41.434209"}
{"date":"2025-10-19","id":"00226","result":[2,7,22,33,34,5],"process_time":"2025-10-21T21:48:41.434184"}
{"date":"2025-10-20","id":"00227","result":[17,19,29,31,35,11],"process_time":"2025-10-21T21:48:41.434158"}
{"date":"2025-10-20","id":"00228","result":[2,12,21,24,35,2],"process_time":"2025-10-21T21:48:41.434131"}
{"date":"2025-10-21","id":"00229","result":[1,14,20,31,32,3],"process_time":"2025-10-21T21:48:41.434103"}
{"date":"2025-10-21","id":"00230","result":[3,14,20,21,23,1],"process_time":"2025-10-21T21:48:41.434073"}
{"date":"2025-10-22","id":"00231","result":[7,12,20,32,34,7],"process_time":"2025-10-22T14:40:39.873623"}
{"date":"2025-10-22","id":"00232","result":[6,11,15,25,26,6],"process_time":"2025-10-23T08:33:09.766077"}
{"date":"2025-10-23","id":"00233","result":[6,10,11,12,30,4],"process_time":"2025-10-23T18:01:22.982699"}
{"date":"2025-10-23","id":"00234","result":[3,7,24,25,34,6],"process_time":"2025-10-24T18:01:38.057446"}
{"date":"2025-10-24","id":"00235","result":[2,4,11,15,20,6],"process_time":"2025-10-24T18:01:38.055372"}
{"date":"2025-10-24","id":"00236","result":[5,11,21,22,33,11],"process_time":"2025-10-25T00:01:29.725744"}
{"date":"2025-10-25","id":"00237","result":[1,10,14,19,25,4],"process_time":"2025-10-25T18:01:24.543240"}
{"date":"2025-10-25","id":"00238","result":[12,14,25,28,31,5],"process_time":"2025-10-26T00:01:24.718019"}
{"date":"2025-10-26","id":"00239","result":[17,22,24,31,32,1],"process_time":"2025-10-26T18:01:34.645309"}
{"date":"2025-10-26","id":"00240","result":[4,26,27,30,34,2],"process_time":"2025-10-27T00:01:30.755883"}
{"date":"2025-10-27","id":"00241","result":[8,9,25,26,32,6],"process_time":"2025-10-28T00:01:31.005155"}
{"date":"2025-10-27","id":"00242","result":[16,17,20,24,34,3],"process_time":"2025-10-28T00:01:31.003180"}
{"date":"2025-10-28","id":"00243","result":[10,14,28,33,34,7],"process_time":"2025-10-28T18:01:28.921679"}
{"date":"2025-10-28","id":"00244","result":[6,7,10,19,22,12],"process_time":"2025-10-29T00:01:28.337002"}
{"date":"2025-10-29","id":"00245","result":[1,8,17,20,24,1],"process_time":"2025-10-29T18:01:25.184909"}
{"date":"2025-10-29","id":"00246","result":[15,18,31,34,35,3],"process_time":"2025-10-30T00:01:20.555171"}
{"date":"2025-10-30","id":"00247","result":[11,20,23,27,34,5],"process_time":"2025-10-30T18:01:22.940955"}
{"date":"2025-10-30","id":"00248","result":[9,11,12,24,28,7],"process_time":"2025-10-31T00:01:30.254373"}
{"date":"2025-10-31","id":"00249","result":[5,8,15,17,18,10],"process_time":"2025-11-01T00:01:27.066624"}
{"date":"2025-10-31","id":"00250","result":[6,14,21,34,35,5],"process_time":"2025-11-01T00:01:27.064952"}
{"date":"2025-11-01","id":"00251","result":[6,11,14,20,30,9],"process_time":"2025-11-02T00:01:22.527754"}
{"date":"2025-11-01","id":"00252","result":[2,4,18,26,31,11],"process_time":"2025-11-02T00:01:22.525578"}
{"date":"2025-11-02","id":"00253","result":[4,8,14,24,32,1],"process_time":"2025-11-03T00:01:33.854439"}
{"date":"2025-11-02","id":"00254","result":[13,29,30,32,35,4],"process_time":"2025-11-03T00:01:33.852568"}
{"date":"2025-11-03","id":"00255","result":[4,6,11,20,33,1],"process_time":"2025-11-04T00:01:29.102813"}
{"date":"2025-11-03","id":"00256","result":[6,25,27,32,35,3],"process_time":"2025-11-04T00:01:29.101132"}
{"date":"2025-11-04","id":"00257","result":[6,7,8,21,34,1],"process_time":"2025-11-05T00:01:28.021368"}
{"date":"2025-11-04","id":"00258","result":[7,20,28,29,31,6],"process_time":"2025-11-05T00:01:28.019641"}
{"date":"2025-11-05","id":"00259","result":[6,11,25,33,35,10],"process_time":"2025-11-06T00:01:27.354545"}
{"date":"2025-11-05","id":"00260","result":[1,4,17,18,19,5],"process_time":"2025-11-06T00:01:27.352325"}
{"date":"2025-11-06","id":"00261","result":[3,13,14,19,28,9],"process_time":"2025-11-07T00:01:22.798775"}
{"date":"2025-11-06","id":"00262","result":[5,6,14,18,28,11],"process_time":"2025-11-07T00:01:22.796178"}
{"date":"2025-11-07","id":"00263","result":[2,14,15,20,33,9],"process_time":"2025-11-08T00:01:28.776716"}
{"date":"2025-11-07","id":"00264","result":[11,26,28,32,34,4],"process_time":"2025-11-08T00:01:28.775102"}
{"date":"2025-11-08","id":"00265","result":[5,9,13,22,34,12],"process_time":"2025-11-09T00:01:30.309329"}
{"date":"2025-11-08","id":"00266","result":[6,7,20,23,34,3],"process_time":"2025-11-09T00:01:30.307474"}
{"date":"2025-11-09","id":"00267","result":[3,5,15,21,23,10],"process_time":"2025-11-10T00:01:27.785983"}
{"date":"2025-11-09","id":"00268","result":[7,10,11,14,29,2],"process_time":"2025-11-10T00:01:27.784052"}
{"date":"2025-11-10","id":"00269","result":[4,9,13,24,27,12],"process_time":"2025-11-11T00:01:30.068517"}
{"date":"2025-11-10","id":"00270","result":[5,7,10,31,35,9],"process_time":"2025-11-11T00:01:30.066538"}
{"date":"2025-11-11","id":"00271","result":[4,6,9,23,33,12],"process_time":"2025-11-12T00:01:30.883918"}
{"date":"2025-11-11","id":"00272","result":[5,10,11,23,29,8],"process_time":"2025-11-12T00:01:30.881937"}
{"date":"2025-11-12","id":"00273","result":[3,11,12,28,31,12],"process_time":"2025-11-13T00:01:29.602163"}
{"date":"2025-11-12","id":"00274","result":[7,10,11,24,26,6],"process_time":"2025-11-13T00:01:29.600228"}
{"date":"2025-11-13","id":"00275","result":[7,9,21,27,30,4],"process_time":"2025-11-14T00:01:28.857097"}
{"date":"2025-11-13","id":"00276","result":[3,8,17,22,30,1],"process_time":"2025-11-14T00:01:28.855155"}
{"date":"2025-11-14","id":"00277","result":[14,19,22,26,28,7],"process_time":"2025-11-15T00:01:28.824281"}
{"date":"2025-11-14","id":"00278","result":[8,12,14,25,35,3],"process_time":"2025-11-15T00:01:28.822440"}
{"date":"2025-11-15","id":"00279","result":[2,15,20,22,32,10],"process_time":"2025-11-16T00:01:31.945680"}
{"date":"2025-11-15","id":"00280","result":[8,20,21,28,29,3],"process_time":"2025-11-16T00:01:31.943776"}
{"date":"2025-11-16","id":"00281","result":[2,15,21,22,28,7],"process_time":"2025-11-17T00:01:28.221981"}
{"date":"2025-11-16","id":"00282","result":[1,18,20,26,30,12],"process_time":"2025-11-17T00:01:28.220209"}
{"date":"2025-11-17","id":"00283","result":[3,13,14,18,34,2],"process_time":"2025-11-18T00:01:30.792455"}
{"date":"2025-11-17","id":"00284","result":[7,9,23,30,34,2],"process_time":"2025-11-18T00:01:30.789264"}
{"date":"2025-11-18","id":"00285","result":[3,17,30,33,34,8],"process_time":"2025-11-19T00:01:26.478603"}
{"date":"2025-11-18","id":"00286","result":[8,11,17,21,29,3],"process_time":"2025-11-19T00:01:26.476543"}
{"date":"2025-11-19","id":"00287","result":[9,20,24,26,34,12],"process_time":"2025-11-20T00:01:26.127204"}
{"date":"2025-11-19","id":"00288","result":[12,14,20,33,34,1],"process_time":"2025-11-20T00:01:26.125384"}
{"date":"2025-11-20","id":"00289","result":[6,14,21,24,30,5],"process_time":"2025-11-21T00:01:32.902089"}
{"date":"2025-11-20","id":"00290","result":[1,7,15,17,23,11],"process_time":"2025-11-21T00:01:32.900422"}
{"date":"2025-11-21","id":"00291","result":[7,8,10,24,25,8],"process_time":"2025-11-22T00:01:24.529068"}
{"date":"2025-11-21","id":"00292","result":[5,7,11,19,23,11],"process_time":"2025-11-22T00:01:24.527263"}
{"date":"2025-11-22","id":"00293","result":[17,23,28,30,31,2],"process_time":"2025-11-23T00:01:37.818723"}
{"date":"2025-11-22","id":"00294","result":[7,16,23,24,27,9],"process_time":"2025-11-23T00:01:37.816825"}
{"date":"2025-11-23","id":"00295","result":[5,19,22,34,35,12],"process_time":"2025-11-24T00:01:33.450517"}
{"date":"2025-11-23","id":"00296","result":[14,17,22,30,32,11],"process_time":"2025-11-24T00:01:33.448652"}
{"date":"2025-11-24","id":"00297","result":[11,12,15,28,33,6],"process_time":"2025-11-25T00:01:28.191217"}
{"date":"2025-11-24","id":"00298","result":[5,20,24,32,33,5],"process_time":"2025-11-25T00:01:28.189473"}
{"date":"2025-11-25","id":"00299","result":[5,12,28,31,33,7],"process_time":"2025-11-26T00:01:29.373552"}
{"date":"2025-11-25","id":"00300","result":[11,22,28,29,31,10],"process_time":"2025-11-26T00:01:29.371770"}
{"date":"2025-11-26","id":"00301","result":[11,14,19,21,27,8],"process_time":"2025-11-27T00:01:27.172972"}
{"date":"2025-11-26","id":"00302","result":[2,4,18,30,34,4],"process_time":"2025-11-27T00:01:27.170923"}
{"date":"2025-11-27","id":"00303","result":[4,8,14,20,32,1],"process_time":"2025-11-28T00:01:30.479295"}
{"date":"2025-11-27","id":"00304","result":[1,10,16,30,34,7],"process_time":"2025-11-28T00:01:30.477485"}
{"date":"2025-11-28","id":"00305","result":[2,18,20,30,34,9],"process_time":"2025-11-29T00:01:28.686023"}
{"date":"2025-11-28","id":"00306","result":[18,29,30,32,35,2],"process_time":"2025-11-29T00:01:28.684327"}
{"date":"2025-11-29","id":"00307","result":[2,12,22,30,32,9],"process_time":"2025-11-30T00:01:37.316667"}
{"date":"2025-11-29","id":"00308","result":[8,11,17,18,28,4],"process_time":"2025-11-30T00:01:37.314770"}
{"date":"2025-11-30","id":"00309","result":[11,19,24,27,32,4],"process_time":"2025-12-01T00:01:27.842633"}
{"date":"2025-11-30","id":"00310","result":[9,10,11,18,25,12],"process_time":"2025-12-01T00:01:27.840746"}
{"date":"2025-12-01","id":"00311","result":[3,16,21,29,34,12],"process_time":"2025-12-02T00:01:34.811817"}
{"date":"2025-12-01","id":"00312","result":[9,13,19,30,33,12],"process_time":"2025-12-02T00:01:34.809811"}
{"date":"2025-12-02","id":"00313","result":[1,2,4,14,23,7],"process_time":"2025-12-03T00:01:31.142342"}
{"date":"2025-12-02","id":"00314","result":[9,12,14,28,35,10],"process_time":"2025-12-03T00:01:31.140465"}
{"date":"2025-12-03","id":"00315","result":[4,8,22,24,34,5],"process_time":"2025-12-03T15:00:23.974333"}
{"date":"2025-12-03","id":"00316","result":[9,10,27,30,31,2],"process_time":"2025-12-04T00:01:28.543660"}
{"date":"2025-12-04","id":"00317","result":[2,7,11,20,26,10],"process_time":"2025-12-05T00:01:26.767936"}
{"date":"2025-12-04","id":"00318","result":[3,7,12,13,21,1],"process_time":"2025-12-05T00:01:26.765904"}
{"date":"2025-12-05","id":"00319","result":[13,18,20,28,30,3],"process_time":"2025-12-06T00:01:32.851098"}
{"date":"2025-12-05","id":"00320","result":[3,10,11,21,30,10],"process_time":"2025-12-06T00:01:32.849074"}
{"date":"2025-12-06","id":"00321","result":[5,7,13,22,34,11],"process_time":"2025-12-07T00:01:34.694203"}
{"date":"2025-12-06","id":"00322","result":[1,11,13,23,25,8],"process_time":"2025-12-07T00:01:34.692363"}
{"date":"2025-12-07","id":"00323","result":[11,17,21,23,31,2],"process_time":"2025-12-08T00:01:25.078645"}
{"date":"2025-12-07","id":"00324","result":[4,8,11,18,35,9],"process_time":"2025-12-08T00:01:25.076783"}
{"date":"2025-12-08","id":"00325","result":[2,3,16,23,31,12],"process_time":"2025-12-09T00:01:26.962241"}
{"date":"2025-12-08","id":"00326","result":[2,7,28,32,35,8],"process_time":"2025-12-09T00:01:26.960340"}
{"date":"2025-12-09","id":"00327","result":[1,8,10,13,32,3],"process_time":"2025-12-10T00:01:28.923998"}
{"date":"2025-12-09","id":"00328","result":[2,10,23,33,35,4],"process_time":"2025-12-10T00:01:28.922099"}
{"date":"2025-12-10","id":"00329","result":[1,24,30,34,35,3],"process_time":"2025-12-11T00:01:56.833143"}
{"date":"2025-12-10","id":"00330","result":[1,15,26,29,33,9],"process_time":"2025-12-11T00:01:56.826035"}
{"date":"2025-12-11","id":"00331","result":[7,8,10,12,32,2],"process_time":"2025-12-12T00:01:54.033315"}
{"date":"2025-12-11","id":"00332","result":[3,10,16,23,29,11],"process_time":"2025-12-12T00:01:54.031293"}
{"date":"2025-12-12","id":"00333","result":[8,25,30,33,34,11],"process_time":"2025-12-13T00:01:25.984912"}
{"date":"2025-12-12","id":"00334","result":[1,3,7,10,28,4],"process_time":"2025-12-13T00:01:25.982820"}
{"date":"2025-12-13","id":"00335","result":[1,11,26,29,35,10],"process_time":"2025-12-14T00:01:35.424351"}
{"date":"2025-12-13","id":"00336","result":[5,7,15,16,18,10],"process_time":"2025-12-14T00:01:35.422287"}
{"date":"2025-12-14","id":"00337","result":[8,13,14,27,35,6],"process_time":"2025-12-15T00:01:34.847779"}
{"date":"2025-12-14","id":"00338","result":[8,9,11,25,26,7],"process_time":"2025-12-15T00:01:34.846187"}
{"date":"2025-12-15","id":"00339","result":[1,2,5,12,16,9],"process_time":"2025-12-16T00:01:33.827258"}
{"date":"2025-12-15","id":"00340","result":[20,21,24,25,28,9],"process_time":"2025-12-16T00:01:33.825526"}
{"date":"2025-12-16","id":"00341","result":[2,3,7,16,17,10],"process_time":"2025-12-17T00:01:34.149107"}
{"date":"2025-12-16","id":"00342","result":[7,10,26,27,35,11],"process_time":"2025-12-17T00:01:34.141861"}
{"date":"2025-12-17","id":"00343","result":[6,23,27,28,30,6],"process_time":"2025-12-18T00:01:32.324601"}
{"date":"2025-12-17","id":"00344","result":[7,10,17,19,22,1],"process_time":"2025-12-18T00:01:32.322518"}
{"date":"2025-12-18","id":"00345","result":[14,15,17,27,34,8],"process_time":"2025-12-19T00:01:31.277757"}
{"date":"2025-12-18","id":"00346","result":[2,7,22,25,31,9],"process_time":"2025-12-19T00:01:31.275899"}
{"date":"2025-12-19","id":"00347","result":[4,5,13,29,35,5],"process_time":"2025-12-20T00:01:32.899546"}
{"date":"2025-12-19","id":"00348","result":[3,13,15,16,23,10],"process_time":"2025-12-20T00:01:32.897591"}
{"date":"2025-12-20","id":"00349","result":[1,7,9,16,30,11],"process_time":"2025-12-21T00:01:28.437416"}
{"date":"2025-12-20","id":"00350","result":[11,12,13,14,19,7],"process_time":"2025-12-21T00:01:28.435720"}
{"date":"2025-12-21","id":"00351","result":[6,16,28,33,35,8],"process_time":"2025-12-22T00:01:36.153654"}
{"date":"2025-12-21","id":"00352","result":[6,26,27,33,34,7],"process_time":"2025-12-22T00:01:36.146377"}
{"date":"2025-12-22","id":"00353","result":[8,12,14,24,27,9],"process_time":"2025-12-23T00:01:33.914679"}
{"date":"2025-12-22","id":"00354","result":[13,31,32,33,35,11],"process_time":"2025-12-23T00:01:33.912870"}
{"date":"2025-12-23","id":"00355","result":[3,23,28,32,35,9],"process_time":"2025-12-24T00:01:29.301200"}
{"date":"2025-12-23","id":"00356","result":[22,23,26,34,35,3],"process_time":"2025-12-24T00:01:29.299276"}
{"date":"2025-12-24","id":"00357","result":[1,2,4,10,33,3],"process_time":"2025-12-25T00:01:34.554374"}
{"date":"2025-12-24","id":"00358","result":[19,20,27,31,34,5],"process_time":"2025-12-25T00:01:34.551263"}
{"date":"2025-12-25","id":"00359","result":[5,12,25,28,33,8],"process_time":"2025-12-26T00:01:36.489828"}
{"date":"2025-12-25","id":"00360","result":[2,4,14,24,34,10],"process_time":"2025-12-26T00:01:36.488069"}
{"date":"2025-12-26","id":"00361","result":[1,2,19,21,31,3],"process_time":"2025-12-27T00:01:33.446916"}
{"date":"2025-12-26","id":"00362","result":[11,17,19,26,33,8],"process_time":"2025-12-27T00:01:33.445038"}
{"date":"2025-12-27","id":"00363","result":[1,2,20,24,33,10],"process_time":"2025-12-28T00:01:30.172141"}
{"date":"2025-12-27","id":"00364","result":[4,8,14,33,35,11],"process_time":"2025-12-28T00:01:30.170252"}
{"date":"2025-12-28","id":"00365","result":[11,14,27,30,35,9],"process_time":"2025-12-29T00:01:31.894224"}
{"date":"2025-12-28","id":"00366","result":[2,5,7,8,21,12],"process_time":"2025-12-29T00:01:31.892553"}
{"date":"2025-12-29","id":"00367","result":[4,6,13,16,30,10],"process_time":"2025-12-30T00:01:31.843207"}
{"date":"2025-12-29","id":"00368","result":[3,21,22,30,33,1],"process_time":"2025-12-30T00:01:31.841425"}
{"date":"2025-12-30","id":"00369","result":[2,13,19,23,24,11],"process_time":"2025-12-31T00:01:31.099741"}
{"date":"2025-12-30","id":"00370","result":[7,15,23,24,33,2],"process_time":"2025-12-31T00:01:31.097934"}
{"date":"2025-12-31","id":"00371","result":[11,21,25,28,33,3],"process_time":"2026-01-01T00:01:34.017502"}
{"date":"2025-12-31","id":"00372","result":[3,5,11,25,30,12],"process_time":"2026-01-01T00:01:34.015644"}
{"date":"2026-01-01","id":"00373","result":[11,17,23,26,34,12],"process_time":"2026-01-02T00:01:33.028197"}
{"date":"2026-01-01","id":"00374","result":[2,3,20,25,30,3],"process_time":"2026-01-02T00:01:33.026144"}
{"date":"2026-01-02","id":"00375","result":[13,17,22,23,29,8],"process_time":"2026-01-03T00:01:32.282085"}
{"date":"2026-01-02","id":"00376","result":[3,9,10,14,25,6],"process_time":"2026-01-03T00:01:32.280270"}
{"date":"2026-01-03","id":"00377","result":[7,11,12,22,30,5],"process_time":"2026-01-04T00:01:33.836517"}
{"date":"2026-01-03","id":"00378","result":[2,6,24,28,34,1],"process_time":"2026-01-04T00:01:33.834625"}
{"date":"2026-01-04","id":"00379","result":[12,14,22,25,29,1],"process_time":"2026-01-05T00:01:31.367607"}
{"date":"2026-01-04","id":"00380","result":[13,16,26,29,34,2],"process_time":"2026-01-05T00:01:31.365663"}
{"date":"2026-01-05","id":"00381","result":[5,13,14,19,26,9],"process_time":"2026-01-06T00:01:36.394380"}
{"date":"2026-01-05","id":"00382","result":[1,2,6,10,17,1],"process_time":"2026-01-06T00:01:36.392473"}
{"date":"2026-01-06","id":"00383","result":[7,25,26,27,31,5],"process_time":"2026-01-07T00:01:32.564041"}
{"date":"2026-01-06","id":"00384","result":[4,6,12,16,31,2],"process_time":"2026-01-07T00:01:32.561888"}
{"date":"2026-01-07","id":"00385","result":[22,27,29,33,34,3],"process_time":"2026-01-08T00:01:29.212430"}
{"date":"2026-01-07","id":"00386","result":[1,7,14,28,29,5],"process_time":"2026-01-08T00:01:29.210573"}
{"date":"2026-01-08","id":"00387","result":[4,9,13,25,30,6],"process_time":"2026-01-09T00:01:31.439531"}
{"date":"2026-01-08","id":"00388","result":[6,7,10,28,35,6],"process_time":"2026-01-09T00:01:31.437964"}
{"date":"2026-01-09","id":"00389","result":[1,25,28,32,35,12],"process_time":"2026-01-10T00:01:38.247299"}
{"date":"2026-01-09","id":"00390","result":[5,11,14,20,32,1],"process_time":"2026-01-10T00:01:38.245353"}
{"date":"2026-01-10","id":"00391","result":[13,14,21,26,31,10],"process_time":"2026-01-11T00:01:24.432268"}
{"date":"2026-01-10","id":"00392","result":[2,8,17,23,28,4],"process_time":"2026-01-11T00:01:24.428639"}
{"date":"2026-01-11","id":"00393","result":[4,6,24,25,26,7],"process_time":"2026-01-12T00:01:35.114815"}
{"date":"2026-01-11","id":"00394","result":[2,22,23,26,29,9],"process_time":"2026-01-12T00:01:35.112806"}
{"date":"2026-01-12","id":"00395","result":[4,14,19,22,26,7],"process_time":"2026-01-13T00:01:31.541176"}
{"date":"2026-01-12","id":"00396","result":[4,21,25,28,33,11],"process_time":"2026-01-13T00:01:31.539441"}
{"date":"2026-01-13","id":"00397","result":[10,15,16,18,26,9],"process_time":"2026-01-14T00:01:27.371900"}
{"date":"2026-01-13","id":"00398","result":[3,4,6,10,27,4],"process_time":"2026-01-14T00:01:27.369559"}
{"date":"2026-01-14","id":"00399","result":[3,4,5,19,35,8],"process_time":"2026-01-15T00:01:38.464781"}
{"date":"2026-01-14","id":"00400","result":[2,6,8,19,29,9],"process_time":"2026-01-15T00:01:38.463064"}
{"date":"2026-01-15","id":"00401","result":[6,9,23,24,25,7],"process_time":"2026-01-15T17:05:17.353282"}
{"date":"2026-01-15","id":"00402","result":[3,6,15,17,23,2],"process_time":"2026-01-16T00:01:32.862027"}
{"date":"2026-01-16","id":"00403","result":[1,3,10,26,34,3],"process_time":"2026-01-17T00:01:33.633810"}
{"date":"2026-01-16","id":"00404","result":[2,6,10,24,29,5],"process_time":"2026-01-17T00:01:33.631966"}
{"date":"2026-01-17","id":"00405","result":[13,18,24,29,32,1],"process_time":"2026-01-19T21:36:00.965787"}
{"date":"2026-01-17","id":"00406","result":[1,2,13,27,31,10],"process_time":"2026-01-19T21:36:00.958804"}
{"date":"2026-01-18","id":"00407","result":[3,13,14,20,35,12],"process_time":"2026-01-19T21:36:00.957131"}
{"date":"2026-01-18","id":"00408","result":[2,9,14,15,22,12],"process_time":"2026-01-19T21:36:00.955180"}
{"date":"2026-01-19","id":"00409","result":[5,13,14,19,21,10],"process_time":"2026-01-19T21:36:00.947918"}
{"date":"2026-01-19","id":"00410","result":[7,8,10,14,35,9],"process_time":"2026-01-19T21:36:00.945875"}
{"date":"2026-01-20","id":"00411","result":[1,15,19,21,26,2],"process_time":"2026-01-21T00:01:27.651094"}
{"date":"2026-01-20","id":"00412","result":[14,15,18,19,33,4],"process_time":"2026-01-21T00:01:27.649021"}
{"date":"2026-01-21","id":"00413","result":[8,16,24,29,30,5],"process_time":"2026-01-22T00:01:35.391424"}
{"date":"2026-01-21","id":"00414","result":[1,4,7,8,33,9],"process_time":"2026-01-22T00:01:35.387800"}
{"date":"2026-01-22","id":"00415","result":[8,17,20,27,31,12],"process_time":"2026-01-23T00:01:31.088300"}
{"date":"2026-01-22","id":"00416","result":[7,10,12,22,23,3],"process_time":"2026-01-23T00:01:31.086503"}
{"date":"2026-01-23","id":"00417","result":[10,13,25,31,32,1],"process_time":"2026-01-24T00:01:22.982133"}
{"date":"2026-01-23","id":"00418","result":[5,7,10,28,29,2],"process_time":"2026-01-24T00:01:22.980064"}
{"date":"2026-01-24","id":"00419","result":[13,15,22,27,31,10],"process_time":"2026-01-25T00:01:38.527897"}
{"date":"2026-01-24","id":"00420","result":[2,25,26,28,34,6],"process_time":"2026-01-25T00:01:38.526156"}
{"date":"2026-01-25","id":"00421","result":[15,18,27,32,35,11],"process_time":"2026-01-26T00:01:33.084534"}
{"date":"2026-01-25","id":"00422","result":[1,11,15,19,31,4],"process_time":"2026-01-26T00:01:33.082654"}
{"date":"2026-01-26","id":"00423","result":[3,18,25,29,32,8],"process_time":"2026-01-27T00:01:28.590694"}
{"date":"2026-01-26","id":"00424","result":[9,23,29,34,35,12],"process_time":"2026-01-27T00:01:28.589010"}
{"date":"2026-01-27","id":"00425","result":[5,8,9,14,28,2],"process_time":"2026-01-29T00:01:32.387826"}
{"date":"2026-01-27","id":"00426","result":[4,11,25,31,34,1],"process_time":"2026-01-29T00:01:32.386017"}
{"date":"2026-01-28","id":"00427","result":[2,20,21,24,32,1],"process_time":"2026-01-29T00:01:32.384248"}
{"date":"2026-01-28","id":"00428","result":[6,10,16,21,30,2],"process_time":"2026-01-29T00:01:32.382347"}
{"date":"2026-01-29","id":"00429","result":[4,11,17,26,31,11],"process_time":"2026-01-30T00:01:30.733872"}
{"date":"2026-01-29","id":"00430","result":[1,8,9,19,22,12],"process_time":"2026-01-30T00:01:30.732117"}
{"date":"2026-01-30","id":"00431","result":[11,19,27,29,33,5],"process_time":"2026-01-31T12:01:28.336484"}
{"date":"2026-01-30","id":"00432","result":[5,6,9,23,32,12],"process_time":"2026-01-31T12:01:28.334716"}
{"date":"2026-01-31","id":"00433","result":[7,14,15,26,27,9],"process_time":"2026-02-01T00:01:34.642021"}
{"date":"2026-01-31","id":"00434","result":[11,12,16,27,29,6],"process_time":"2026-02-01T00:01:34.639940"}
{"date":"2026-02-01","id":"00435","result":[7,15,19,22,34,9],"process_time":"2026-02-02T00:01:29.147726"}
{"date":"2026-02-01","id":"00436","result":[1,20,24,26,35,3],"process_time":"2026-02-02T00:01:29.145901"}
{"date":"2026-02-02","id":"00437","result":[13,14,15,19,22,3],"process_time":"2026-02-03T00:01:35.357776"}
{"date":"2026-02-02","id":"00438","result":[1,3,5,6,11,5],"process_time":"2026-02-03T00:01:35.355791"}
{"date":"2026-02-03","id":"00439","result":[19,23,24,32,33,10],"process_time":"2026-02-04T00:01:31.022139"}
{"date":"2026-02-03","id":"00440","result":[5,10,11,28,29,5],"process_time":"2026-02-04T00:01:31.020359"}
{"date":"2026-02-04","id":"00441","result":[7,14,15,27,35,3],"process_time":"2026-02-05T00:01:32.634866"}
{"date":"2026-02-04","id":"00442","result":[17,18,21,30,34,4],"process_time":"2026-02-05T00:01:32.633117"}
{"date":"2026-02-05","id":"00443","result":[7,10,13,16,20,9],"process_time":"2026-02-06T00:01:33.173922"}
{"date":"2026-02-05","id":"00444","result":[4,5,15,18,32,11],"process_time":"2026-02-06T00:01:33.172183"}
{"date":"2026-02-06","id":"00445","result":[3,5,15,18,28,3],"process_time":"2026-02-07T00:01:29.381244"}
{"date":"2026-02-06","id":"00446","result":[1,3,4,14,29,4],"process_time":"2026-02-07T00:01:29.379254"}
{"date":"2026-02-07","id":"00447","result":[2,3,9,10,31,12],"process_time":"2026-02-08T00:01:33.527405"}
{"date":"2026-02-07","id":"00448","result":[3,14,17,19,35,3],"process_time":"2026-02-08T00:01:33.525503"}
{"date":"2026-02-08","id":"00449","result":[8,9,11,16,23,9],"process_time":"2026-02-09T00:01:29.606792"}
{"date":"2026-02-08","id":"00450","result":[7,16,17,28,30,10],"process_time":"2026-02-09T00:01:29.604809"}
{"date":"2026-02-09","id":"00451","result":[4,9,17,18,35,7],"process_time":"2026-02-10T00:01:30.052395"}
{"date":"2026-02-09","id":"00452","result":[18,23,24,31,33,1],"process_time":"2026-02-10T00:01:30.050622"}
{"date":"2026-02-10","id":"00453","result":[3,18,29,30,31,9],"process_time":"2026-02-11T00:01:33.667488"}
{"date":"2026-02-10","id":"00454","result":[7,9,12,13,22,6],"process_time":"2026-02-11T00:01:33.665504"}
{"date":"2026-02-11","id":"00455","result":[9,20,23,26,34,10],"process_time":"2026-02-12T00:01:38.994086"}
{"date":"2026-02-11","id":"00456","result":[4,9,16,23,28,2],"process_time":"2026-02-12T00:01:38.992146"}
{"date":"2026-02-13","id":"00459","result":[5,11,12,29,32,4],"process_time":"2026-02-21T00:01:34.589465"}
{"date":"2026-02-13","id":"00460","result":[10,14,16,20,32,11],"process_time":"2026-02-21T00:01:34.587846"}
{"date":"2026-02-14","id":"00461","result":[13,20,22,32,34,12],"process_time":"2026-02-21T00:01:34.586201"}
{"date":"2026-02-14","id":"00462","result":[4,6,8,14,25,7],"process_time":"2026-02-21T00:01:34.584490"}
{"date":"2026-02-15","id":"00463","result":[1,3,5,10,26,9],"process_time":"2026-02-21T00:01:34.582873"}
{"date":"2026-02-15","id":"00464","result":[1,6,8,10,22,7],"process_time":"2026-02-21T00:01:34.581175"}
{"date":"2026-02-16","id":"00465","result":[7,18,22,27,29,4],"process_time":"2026-02-21T00:01:34.579530"}
{"date":"2026-02-16","id":"00466","result":[4,8,19,21,30,7],"process_time":"2026-02-21T00:01:34.577749"}
{"date":"2026-02-17","id":"00467","result":[19,21,22,23,31,4],"process_time":"2026-02-21T00:01:34.546136"}
{"date":"2026-02-17","id":"00468","result":[13,21,28,32,35,11],"process_time":"2026-02-21T00:01:34.544362"}
{"date":"2026-02-18","id":"00469","result":[11,17,25,30,32,6],"process_time":"2026-02-21T00:01:34.542043"}
{"date":"2026-02-18","id":"00470","result":[9,23,27,29,33,1],"process_time":"2026-02-21T00:01:34.540300"}
{"date":"2026-02-19","id":"00471","result":[1,13,14,19,30,1],"process_time":"2026-02-21T00:01:34.538576"}
{"date":"2026-02-19","id":"00472","result":[9,21,23,25,29,3],"process_time":"2026-02-21T00:01:34.536651"}
{"date":"2026-02-20","id":"00473","result":[10,12,27,30,31,12],"process_time":"2026-02-21T00:01:34.534975"}
{"date":"2026-02-20","id":"00474","result":[1,9,18,28,33,7],"process_time":"2026-02-21T00:01:34.532966"}
{"date":"2026-02-21","id":"00475","result":[5,8,11,13,18,2],"process_time":"2026-02-23T00:01:58.174796"}
{"date":"2026-02-21","id":"00476","result":[2,16,17,20,31,1],"process_time":"2026-02-23T00:01:58.173117"}
{"date":"2026-02-22","id":"00477","result":[8,9,19,29,30,4],"process_time":"2026-02-23T00:01:58.171378"}
{"date":"2026-02-22","id":"00478","result":[2,9,12,16,31,3],"process_time":"2026-02-23T00:01:58.169643"}
{"date":"2026-02-23","id":"00479","result":[7,10,11,18,27,6],"process_time":"2026-02-24T00:01:35.064211"}
{"date":"2026-02-23","id":"00480","result":[7,13,16,22,35,11],"process_time":"2026-02-24T00:01:35.062393"}
{"date":"2026-02-24","id":"00481","result":[12,14,22,23,30,9],"process_time":"2026-02-25T09:14:47.505394"}
{"date":"2026-02-24","id":"00482","result":[8,14,18,20,26,7],"process_time":"2026-02-25T09:14:47.503878"}
{"date":"2026-02-25","id":"00483","result":[11,16,19,21,32,10],"process_time":"2026-02-26T00:01:32.943331"}
{"date":"2026-02-25","id":"00484","result":[5,14,15,16,29,10],"process_time":"2026-02-26T00:01:32.941550"}
{"date":"2026-02-26","id":"00485","result":[3,14,19,27,33,10],"process_time":"2026-02-27T00:01:35.954927"}
{"date":"2026-02-26","id":"00486","result":[8,15,23,24,26,11],"process_time":"2026-02-27T00:01:35.952903"}
{"date":"2026-02-27","id":"00487","result":[2,13,19,25,27,1],"process_time":"2026-02-28T00:01:34.970637"}
{"date":"2026-02-27","id":"00488","result":[12,14,18,24,26,5],"process_time":"2026-02-28T00:01:34.968864"}
{"date":"2026-02-28","id":"00489","result":[1,3,5,8,24,12],"process_time":"2026-03-01T00:01:35.472044"}
{"date":"2026-02-28","id":"00490","result":[3,15,16,27,35,2],"process_time":"2026-03-01T00:01:35.470090"}
{"date":"2026-03-01","id":"00491","result":[10,13,19,27,35,12],"process_time":"2026-03-02T00:01:36.273753"}
{"date":"2026-03-01","id":"00492","result":[5,12,19,33,35,11],"process_time":"2026-03-02T00:01:36.271837"}
{"date":"2026-03-02","id":"00493","result":[1,7,15,34,35,12],"process_time":"2026-03-03T00:01:33.650175"}
{"date":"2026-03-02","id":"00494","result":[1,8,14,23,35,5],"process_time":"2026-03-03T00:01:33.648216"}
{"date":"2026-03-03","id":"00495","result":[15,16,28,31,32,10],"process_time":"2026-03-04T00:01:33.606799"}
{"date":"2026-03-03","id":"00496","result":[3,6,17,20,30,10],"process_time":"2026-03-04T00:01:33.604675"}
{"date":"2026-03-04","id":"00497","result":[4,10,17,22,26,9],"process_time":"2026-03-05T00:01:45.186255"}
{"date":"2026-03-04","id":"00498","result":[1,2,9,24,29,4],"process_time":"2026-03-05T00:01:45.184311"}
{"date":"2026-03-05","id":"00499","result":[14,15,16,17,30,2],"process_time":"2026-03-06T00:01:39.645854"}
{"date":"2026-03-05","id":"00500","result":[4,12,15,17,32,7],"process_time":"2026-03-06T00:01:39.643786"}
{"date":"2026-03-06","id":"00501","result":[7,9,17,21,30,3],"process_time":"2026-03-07T00:01:42.409037"}
{"date":"2026-03-06","id":"00502","result":[3,14,21,23,24,10],"process_time":"2026-03-07T00:01:42.407296"}
{"date":"2026-03-07","id":"00503","result":[8,12,22,25,33,9],"process_time":"2026-03-08T00:01:41.926885"}
{"date":"2026-03-07","id":"00504","result":[3,18,23,25,32,6],"process_time":"2026-03-08T00:01:41.922466"}
{"date":"2026-03-08","id":"00505","result":[11,23,24,26,27,2],"process_time":"2026-03-09T00:01:33.280408"}
{"date":"2026-03-08","id":"00506","result":[20,22,25,29,31,12],"process_time":"2026-03-09T00:01:33.278648"}
{"date":"2026-03-09","id":"00507","result":[1,13,17,29,35,2],"process_time":"2026-03-10T00:01:32.686240"}
{"date":"2026-03-09","id":"00508","result":[7,11,25,28,30,5],"process_time":"2026-03-10T00:01:32.684259"}
{"date":"2026-03-10","id":"00509","result":[13,19,21,24,29,10],"process_time":"2026-03-12T00:01:36.780078"}
{"date":"2026-03-10","id":"00510","result":[2,3,4,6,20,2],"process_time":"2026-03-12T00:01:36.777014"}
{"date":"2026-03-11","id":"00511","result":[11,16,22,26,33,9],"process_time":"2026-03-12T00:01:36.775330"}
{"date":"2026-03-11","id":"00512","result":[2,10,29,30,32,7],"process_time":"2026-03-12T00:01:36.773425"}
{"date":"2026-03-12","id":"00513","result":[6,8,17,20,24,10],"process_time":"2026-03-13T00:01:35.752539"}
{"date":"2026-03-12","id":"00514","result":[5,9,20,29,30,11],"process_time":"2026-03-13T00:01:35.750506"}
{"date":"2026-03-13","id":"00515","result":[5,16,18,20,25,5],"process_time":"2026-03-14T00:01:33.974369"}
{"date":"2026-03-13","id":"00516","result":[1,6,14,22,30,1],"process_time":"2026-03-14T00:01:33.972420"}
{"date":"2026-03-14","id":"00517","result":[4,5,6,24,26,8],"process_time":"2026-03-15T00:01:27.930088"}
{"date":"2026-03-14","id":"00518","result":[6,13,19,27,31,8],"process_time":"2026-03-15T00:01:27.926701"}
{"date":"2026-03-15","id":"00519","result":[2,9,31,32,35,2],"process_time":"2026-03-16T00:01:29.420829"}
{"date":"2026-03-15","id":"00520","result":[3,6,28,30,35,3],"process_time":"2026-03-16T00:01:29.418647"}
{"date":"2026-03-16","id":"00521","result":[4,13,21,28,32,11],"process_time":"2026-03-18T00:01:31.341836"}
{"date":"2026-03-16","id":"00522","result":[2,8,10,22,23,8],"process_time":"2026-03-18T00:01:31.339810"}
{"date":"2026-03-17","id":"00523","result":[3,9,21,33,35,2],"process_time":"2026-03-18T00:01:31.338144"}
{"date":"2026-03-17","id":"00524","result":[12,16,18,26,29,6],"process_time":"2026-03-18T00:01:31.336137"}
{"date":"2026-03-18","id":"00525","result":[1,5,11,29,34,6],"process_time":"2026-03-19T00:01:29.778092"}
{"date":"2026-03-18","id":"00526","result":[9,13,14,22,29,11],"process_time":"2026-03-19T00:01:29.774139"}
{"date":"2026-03-19","id":"00527","result":[3,7,14,21,22,8],"process_time":"2026-03-20T00:01:34.356677"}
{"date":"2026-03-19","id":"00528","result":[3,15,26,34,35,3],"process_time":"2026-03-20T00:01:34.354685"}
{"date":"2026-03-20","id":"00529","result":[3,14,25,28,32,2],"process_time":"2026-03-21T00:01:33.092741"}
{"date":"2026-03-20","id":"00530","result":[5,14,17,18,20,6],"process_time":"2026-03-21T00:01:33.090683"}
{"date":"2026-03-21","id":"00531","result":[3,6,11,13,17,3],"process_time":"2026-03-22T00:01:33.623168"}
{"date":"2026-03-21","id":"00532","result":[7,15,19,27,32,10],"process_time":"2026-03-22T00:01:33.621244"}
{"date":"2026-03-22","id":"00533","result":[5,8,11,12,26,6],"process_time":"2026-03-23T00:01:44.583526"}
{"date":"2026-03-22","id":"00534","result":[4,13,14,19,33,9],"process_time":"2026-03-23T00:01:44.579049"}
{"date":"2026-03-23","id":"00535","result":[3,4,6,14,27,2],"process_time":"2026-03-24T00:01:33.722489"}
{"date":"2026-03-23","id":"00536","result":[2,14,17,21,27,10],"process_time":"2026-03-24T00:01:33.720573"}
{"date":"2026-03-24","id":"00537","result":[5,18,19,26,30,9],"process_time":"2026-03-25T00:01:31.442079"}
{"date":"2026-03-24","id":"00538","result":[8,19,23,27,32,1],"process_time":"2026-03-25T00:01:31.439886"}
{"date":"2026-03-25","id":"00539","result":[13,19,26,29,32,7],"process_time":"2026-03-26T00:01:31.219510"}
{"date":"2026-03-25","id":"00540","result":[1,4,8,14,26,12],"process_time":"2026-03-26T00:01:31.217624"}
{"date":"2026-03-26","id":"00541","result":[15,23,28,30,33,8],"process_time":"2026-03-27T00:01:38.243767"}
{"date":"2026-03-26","id":"00542","result":[15,16,26,29,30,11],"process_time":"2026-03-27T00:01:38.241862"}
{"date":"2026-03-27","id":"00543","result":[13,21,25,27,34,10],"process_time":"2026-03-28T00:01:33.292300"}
{"date":"2026-03-27","id":"00544","result":[1,11,30,31,32,3],"process_time":"2026-03-28T00:01:33.287357"}
{"date":"2026-03-28","id":"00545","result":[6,7,10,12,26,3],"process_time":"2026-03-29T00:01:34.238806"}
{"date":"2026-03-28","id":"00546","result":[1,8,14,16,28,10],"process_time":"2026-03-29T00:01:34.236860"}
{"date":"2026-03-29","id":"00547","result":[3,7,13,19,21,11],"process_time":"2026-03-30T00:01:39.629467"}
{"date":"2026-03-29","id":"00548","result":[9,17,22,23,29,12],"process_time":"2026-03-30T00:01:39.627583"}
{"date":"2026-03-30","id":"00549","result":[2,3,22,24,34,8],"process_time":"2026-03-31T00:01:29.750130"}
{"date":"2026-03-30","id":"00550","result":[9,17,18,24,27,8],"process_time":"2026-03-31T00:01:29.741678"}
{"date":"2026-03-31","id":"00551","result":[9,15,18,20,32,2],"process_time":"2026-05-02T18:54:22.087520"}
{"date":"2026-03-31","id":"00552","result":[2,18,28,30,35,5],"process_time":"2026-05-02T18:54:22.216209"}
{"date":"2026-04-01","id":"00553","result":[4,14,22,31,34,7],"process_time":"2026-05-02T18:54:22.214421"}
{"date":"2026-04-01","id":"00554","result":[12,13,18,23,24,3],"process_time":"2026-05-02T18:54:22.212808"}
{"date":"2026-04-02","id":"00555","result":[4,6,21,25,30,5],"process_time":"2026-05-02T18:54:22.211162"}
{"date":"2026-04-02","id":"00556","result":[15,19,20,26,29,7],"process_time":"2026-05-02T18:54:22.209363"}
{"date":"2026-04-03","id":"00557","result":[14,18,23,25,27,1],"process_time":"2026-05-02T18:54:22.207762"}
{"date":"2026-04-03","id":"00558","result":[18,22,28,32,35,3],"process_time":"2026-05-02T18:54:22.206109"}
{"date":"2026-04-04","id":"00559","result":[3,9,15,19,31,1],"process_time":"2026-05-02T18:54:22.204468"}
{"date":"2026-04-04","id":"00560","result":[3,18,19,24,27,6],"process_time":"2026-05-03T00:01:59.572546"}
{"date":"2026-04-10","id":"00571","result":[8,17,21,31,35,5],"process_time":"2026-04-17T21:51:18.176985"}
{"date":"2026-04-10","id":"00572","result":[7,15,19,23,24,6],"process_time":"2026-04-17T21:51:18.175536"}
{"date":"2026-04-11","id":"00573","result":[7,13,15,19,32,9],"process_time":"2026-04-17T21:51:18.174028"}
{"date":"2026-04-11","id":"00574","result":[3,6,8,20,35,6],"process_time":"2026-04-17T21:51:18.172376"}
{"date":"2026-04-12","id":"00575","result":[18,23,32,33,34,2],"process_time":"2026-04-17T21:51:18.170910"}
{"date":"2026-04-12","id":"00576","result":[11,21,22,27,34,12],"process_time":"2026-04-17T21:51:18.169413"}
{"date":"2026-04-13","id":"00577","result":[12,15,23,26,32,8],"process_time":"2026-04-17T21:51:18.167959"}
{"date":"2026-04-13","id":"00578","result":[10,11,12,18,34,3],"process_time":"2026-04-17T21:51:18.166377"}
{"date":"2026-04-14","id":"00579","result":[7,11,12,14,27,11],"process_time":"2026-04-17T21:51:18.133575"}
{"date":"2026-04-14","id":"00580","result":[5,19,25,29,31,2],"process_time":"2026-04-17T21:51:18.131908"}
{"date":"2026-04-15","id":"00581","result":[1,15,20,32,35,8],"process_time":"2026-04-17T21:51:18.129627"}
{"date":"2026-04-15","id":"00582","result":[4,13,18,20,26,11],"process_time":"2026-04-17T21:51:18.128125"}
{"date":"2026-04-16","id":"00583","result":[12,14,25,30,31,6],"process_time":"2026-04-17T21:51:18.126389"}
{"date":"2026-04-16","id":"00584","result":[1,10,15,25,27,11],"process_time":"2026-04-17T21:51:18.123639"}
{"date":"2026-04-17","id":"00585","result":[6,10,15,19,22,5],"process_time":"2026-04-17T21:51:18.121745"}
{"date":"2026-04-17","id":"00586","result":[3,4,9,12,18,10],"process_time":"2026-04-17T21:51:18.119902"}
{"date":"2026-04-24","id":"00600","result":[8,15,21,31,35,10],"process_time":"2026-05-02T18:54:11.318209"}
{"date":"2026-04-25","id":"00601","result":[4,17,22,24,29,1],"process_time":"2026-05-02T18:54:11.316580"}
{"date":"2026-04-25","id":"00602","result":[4,5,6,20,33,12],"process_time":"2026-05-02T18:54:11.314811"}
{"date":"2026-04-26","id":"00603","result":[8,12,13,16,24,9],"process_time":"2026-05-02T18:54:11.313124"}
{"date":"2026-04-26","id":"00604","result":[9,17,22,34,35,10],"process_time":"2026-05-02T18:54:11.311361"}
{"date":"2026-04-27","id":"00605","result":[6,17,32,34,35,4],"process_time":"2026-05-02T18:54:11.309587"}
{"date":"2026-04-27","id":"00606","result":[9,10,23,29,35,8],"process_time":"2026-05-02T18:54:11.307841"}
{"date":"2026-04-28","id":"00607","result":[3,9,13,30,35,1],"process_time":"2026-05-02T18:54:11.306136"}
{"date":"2026-04-28","id":"00608","result":[4,6,15,24,35,11],"process_time":"2026-05-02T18:54:11.274738"}
{"date":"2026-04-29","id":"00609","result":[2,17,27,29,31,1],"process_time":"2026-05-02T18:54:11.272803"}
{"date":"2026-04-29","id":"00610","result":[16,19,21,25,26,2],"process_time":"2026-05-02T18:54:11.270692"}
{"date":"2026-04-30","id":"00611","result":[4,5,6,17,20,6],"process_time":"2026-05-02T18:54:11.265838"}
{"date":"2026-04-30","id":"00612","result":[9,13,20,23,31,1],"process_time":"2026-05-02T18:54:11.262510"}
{"date":"2026-05-01","id":"00613","result":[3,11,28,29,33,3],"process_time":"2026-05-02T18:54:11.259515"}
{"date":"2026-05-01","id":"00614","result":[6,9,19,29,34,6],"process_time":"2026-05-02T18:54:11.257423"}
{"date":"2026-05-02","id":"00615","result":[2,7,19,23,35,6],"process_time":"2026-05-02T18:54:11.255089"}
{"date":"2026-05-02","id":"00616","result":[1,5,10,12,15,9],"process_time":"2026-05-03T00:01:50.164565"}
{"date":"2026-05-03","id":"00617","result":[10,14,20,25,28,12],"process_time":"2026-05-08T12:05:38.901285"}
{"date":"2026-05-03","id":"00618","result":[6,8,14,17,20,8],"process_time":"2026-05-08T12:05:38.899467"}
{"date":"2026-05-04","id":"00619","result":[8,16,21,28,34,6],"process_time":"2026-05-08T12:05:38.922299"}
{"date":"2026-05-04","id":"00620","result":[3,13,17,31,35,2],"process_time":"2026-05-08T12:05:38.917469"}
{"date":"2026-05-05","id":"00621","result":[10,20,24,26,33,3],"process_time":"2026-05-08T12:05:38.916001"}
{"date":"2026-05-05","id":"00622","result":[8,15,30,32,34,6],"process_time":"2026-05-08T12:05:38.914468"}
{"date":"2026-05-06","id":"00623","result":[8,12,16,24,27,7],"process_time":"2026-05-08T12:05:38.907760"}
{"date":"2026-05-06","id":"00624","result":[4,10,18,20,29,12],"process_time":"2026-05-08T12:05:38.906282"}
{"date":"2026-05-07","id":"00625","result":[1,8,9,21,27,1],"process_time":"2026-05-08T12:05:38.904817"}
{"date":"2026-05-07","id":"00626","result":[3,10,21,24,26,1],"process_time":"2026-05-08T12:05:38.903227"}
{"date":"2026-05-08","id":"00627","result":[1,12,15,19,27,2],"process_time":"2026-05-09T00:01:50.678602"}
{"date":"2026-05-08","id":"00628","result":[2,18,24,26,29,11],"process_time":"2026-05-09T00:01:50.677133"}
{"date":"2026-05-09","id":"00629","result":[13,20,26,28,33,7],"process_time":"2026-05-10T00:01:48.064905"}
{"date":"2026-05-09","id":"00630","result":[10,11,15,17,22,4],"process_time":"2026-05-10T00:01:48.063284"}
{"date":"2026-05-10","id":"00631","result":[5,7,20,28,34,3],"process_time":"2026-05-11T00:01:51.134708"}
{"date":"2026-05-10","id":"00632","result":[20,21,22,32,34,4],"process_time":"2026-05-11T00:01:51.133037"}
{"date":"2026-05-11","id":"00633","result":[8,15,22,26,30,4],"process_time":"2026-05-12T00:01:53.530135"}
{"date":"2026-05-11","id":"00634","result":[4,15,20,29,32,4],"process_time":"2026-05-12T00:01:53.528646"}
{"date":"2026-05-12","id":"00635","result":[9,15,18,20,21,8],"process_time":"2026-05-12T18:58:57.481689"}
{"date":"2026-05-12","id":"00636","result":[2,5,29,31,33,9],"process_time":"2026-05-13T00:01:53.383624"}
{"date":"2026-05-13","id":"00637","result":[1,7,10,14,30,4],"process_time":"2026-05-14T00:06:07.141157"}
{"date":"2026-05-13","id":"00638","result":[1,23,24,27,28,1],"process_time":"2026-05-14T00:06:07.139507"}
{"date":"2026-05-14","id":"00639","result":[2,19,25,26,34,5],"process_time":"2026-05-15T00:01:51.378980"}
{"date":"2026-05-14","id":"00640","result":[2,22,23,27,29,6],"process_time":"2026-05-15T00:01:51.377323"}
{"date":"2026-05-15","id":"00641","result":[16,22,24,30,34,6],"process_time":"2026-05-16T00:02:18.993401"}
{"date":"2026-05-15","id":"00642","result":[2,11,14,18,34,11],"process_time":"2026-05-16T00:02:18.991918"}
{"date":"2026-05-16","id":"00643","result":[1,19,20,25,33,5],"process_time":"2026-05-17T00:02:00.061233"}
{"date":"2026-05-16","id":"00644","result":[3,8,21,23,32,2],"process_time":"2026-05-17T00:02:00.059767"}
{"date":"2026-05-17","id":"00645","result":[5,13,16,20,28,12],"process_time":"2026-05-18T00:02:38.993144"}
{"date":"2026-05-17","id":"00646","result":[14,24,29,33,35,12],"process_time":"2026-05-18T00:02:38.991681"}
{"date":"2026-05-18","id":"00647","result":[15,18,32,34,35,7],"process_time":"2026-05-21T18:46:15.646815"}
{"date":"2026-05-18","id":"00648","result":[5,11,24,31,32,7],"process_time":"2026-05-21T18:46:15.644428"}
{"date":"2026-05-19","id":"00649","result":[1,7,14,31,33,10],"process_time":"2026-05-21T18:46:15.637135"}
{"date":"2026-05-19","id":"00650","result":[1,4,10,15,27,7],"process_time":"2026-05-21T18:46:15.634884"}
{"date":"2026-05-20","id":"00651","result":[7,22,33,34,35,12],"process_time":"2026-05-21T18:46:15.627820"}
{"date":"2026-05-20","id":"00652","result":[1,17,18,22,27,12],"process_time":"2026-05-21T18:46:15.625964"}
{"date":"2026-05-21","id":"00653","result":[2,6,13,17,32,12],"process_time":"2026-05-21T18:46:15.624362"}
{"date":"2026-05-21","id":"00654","result":[18,19,21,24,33,5],"process_time":"2026-05-22T00:02:04.219491"}
{"date":"2026-05-22","id":"00655","result":[4,5,10,20,28,6],"process_time":"2026-05-23T00:01:55.379227"}
{"date":"2026-05-22","id":"00656","result":[4,7,14,19,25,10],"process_time":"2026-05-23T00:01:55.377697"}
{"date":"2026-05-23","id":"00657","result":[7,11,21,24,26,10],"process_time":"2026-05-24T00:01:59.328967"}
{"date":"2026-05-23","id":"00658","result":[18,25,33,34,35,11],"process_time":"2026-05-24T00:01:59.327417"}
{"date":"2026-05-24","id":"00659","result":[2,7,10,26,34,6],"process_time":"2026-05-25T00:01:49.809336"}
{"date":"2026-05-24","id":"00660","result":[1,8,9,26,34,2],"process_time":"2026-05-25T00:01:49.807846"}
{"date":"2026-05-25","id":"00661","result":[11,16,20,23,27,7],"process_time":"2026-05-26T00:01:49.945039"}
{"date":"2026-05-25","id":"00662","result":[1,6,9,15,23,8],"process_time":"2026-05-26T00:01:49.942498"}
{"date":"2026-05-26","id":"00663","result":[4,9,17,26,31,12],"process_time":"2026-05-27T00:01:47.459411"}
{"date":"2026-05-26","id":"00664","result":[14,15,22,24,33,3],"process_time":"2026-05-27T00:01:47.457878"}
{"date":"2026-05-27","id":"00665","result":[6,8,13,27,30,8],"process_time":"2026-05-28T00:01:47.069533"}
{"date":"2026-05-27","id":"00666","result":[2,3,16,25,33,7],"process_time":"2026-05-28T00:01:47.068050"}
{"date":"2026-05-28","id":"00667","result":[13,20,21,25,34,8],"process_time":"2026-05-29T00:02:01.784200"}
{"date":"2026-05-28","id":"00668","result":[6,10,14,18,23,10],"process_time":"2026-05-29T00:02:01.782591"}
{"date":"2026-05-29","id":"00669","result":[18,19,25,28,30,10],"process_time":"2026-05-30T16:39:08.252541"}
{"date":"2026-05-29","id":"00670","result":[7,8,13,31,34,9],"process_time":"2026-05-30T16:39:08.247620"}
{"date":"2026-05-30","id":"00671","result":[1,3,5,10,32,4],"process_time":"2026-05-30T16:39:08.243246"}
{"date":"2026-05-30","id":"00672","result":[4,6,9,17,35,4],"process_time":"2026-06-01T00:02:06.680450"}
{"date":"2026-05-31","id":"00673","result":[9,13,22,27,31,9],"process_time":"2026-06-01T00:02:06.678924"}
{"date":"2026-05-31","id":"00674","result":[2,12,22,23,34,5],"process_time":"2026-06-01T00:02:06.677228"}
{"date":"2026-06-01","id":"00675","result":[2,4,5,6,23,4],"process_time":"2026-06-02T04:47:24.351283"}
{"date":"2026-06-01","id":"00676","result":[11,15,24,27,28,9],"process_time":"2026-06-02T04:47:24.349072"}
{"date":"2026-06-02","id":"00677","result":[2,11,15,16,24,9],"process_time":"2026-06-03T00:02:01.022676"}
{"date":"2026-06-02","id":"00678","result":[6,18,21,29,35,9],"process_time":"2026-06-03T00:02:01.020108"}
{"date":"2026-06-03","id":"00679","result":[5,15,26,33,34,9],"process_time":"2026-06-04T00:01:56.771173"}
{"date":"2026-06-03","id":"00680","result":[5,12,17,28,31,8],"process_time":"2026-06-04T00:01:56.769559"}
{"date":"2026-06-04","id":"00681","result":[4,11,19,26,27,12],"process_time":"2026-06-05T00:01:50.273472"}
{"date":"2026-06-04","id":"00682","result":[10,11,22,28,35,1],"process_time":"2026-06-05T00:01:50.271756"}
{"date":"2026-06-05","id":"00683","result":[1,18,23,26,33,4],"process_time":"2026-06-06T00:01:59.546396"}
{"date":"2026-06-05","id":"00684","result":[3,5,6,17,28,6],"process_time":"2026-06-06T00:01:59.544250"}
{"date":"2026-06-06","id":"00685","result":[8,10,16,32,33,8],"process_time":"2026-06-09T00:02:01.332088"}
{"date":"2026-06-06","id":"00686","result":[9,11,14,27,28,2],"process_time":"2026-06-09T00:02:01.330558"}
{"date":"2026-06-07","id":"00687","result":[4,8,17,21,26,11],"process_time":"2026-06-09T00:02:01.328636"}
{"date":"2026-06-07","id":"00688","result":[15,18,24,29,34,8],"process_time":"2026-06-09T00:02:01.327086"}
{"date":"2026-06-08","id":"00689","result":[8,14,22,26,35,10],"process_time":"2026-06-09T00:02:01.325517"}
{"date":"2026-06-08","id":"00690","result":[13,14,22,23,28,10],"process_time":"2026-06-09T00:02:01.322921"}
{"date":"2026-06-09","id":"00691","result":[4,6,7,22,32,4],"process_time":"2026-06-10T00:01:57.201781"}
{"date":"2026-06-09","id":"00692","result":[8,29,30,33,35,4],"process_time":"2026-06-10T00:01:57.200295"}
{"date":"2026-06-10","id":"00693","result":[3,15,24,26,33,4],"process_time":"2026-06-11T00:02:09.859257"}
{"date":"2026-06-10","id":"00694","result":[1,11,12,16,19,7],"process_time":"2026-06-11T00:02:09.857779"}
{"date":"2026-06-11","id":"00695","result":[19,21,23,27,31,6],"process_time":"2026-06-12T00:01:52.957749"}
{"date":"2026-06-11","id":"00696","result":[1,15,16,25,28,12],"process_time":"2026-06-12T00:01:52.956088"}
{"date":"2026-06-12","id":"00697","result":[4,12,13,14,34,9],"process_time":"2026-06-13T00:01:51.522566"}
{"date":"2026-06-12","id":"00698","result":[14,15,20,26,30,12],"process_time":"2026-06-13T00:01:51.520975"}
{"date":"2026-06-13","id":"00699","result":[1,15,22,24,31,9],"process_time":"2026-06-14T00:02:24.497149"}
{"date":"2026-06-13","id":"00700","result":[18,20,26,29,33,2],"process_time":"2026-06-14T00:02:24.495625"}
{"date":"2026-06-14","id":"00701","result":[3,5,17,23,26,2],"process_time":"2026-06-15T00:02:13.294492"}
{"date":"2026-06-14","id":"00702","result":[1,13,23,33,34,12],"process_time":"2026-06-15T00:02:13.291853"}
{"date":"2026-06-15","id":"00703","result":[17,24,32,33,34,9],"process_time":"2026-06-16T00:02:02.522461"}
{"date":"2026-06-15","id":"00704","result":[6,13,16,33,35,1],"process_time":"2026-06-16T00:02:02.520482"}
{"date":"2026-06-16","id":"00705","result":[13,15,24,25,32,1],"process_time":"2026-06-17T00:01:51.302269"}
{"date":"2026-06-16","id":"00706","result":[8,9,10,15,27,10],"process_time":"2026-06-17T00:01:51.299262"}
{"date":"2026-06-17","id":"00707","result":[14,19,21,23,27,5],"process_time":"2026-06-18T00:02:32.114777"}
{"date":"2026-06-17","id":"00708","result":[12,14,18,19,33,6],"process_time":"2026-06-18T00:02:32.113151"}
{"date":"2026-06-18","id":"00709","result":[10,15,17,18,22,3],"process_time":"2026-06-19T00:02:04.264933"}
{"date":"2026-06-18","id":"00710","result":[11,18,19,20,29,3],"process_time":"2026-06-19T00:02:04.261201"}
{"date":"2026-06-19","id":"00711","result":[4,19,22,23,33,8],"process_time":"2026-06-20T00:02:00.820307"}
{"date":"2026-06-19","id":"00712","result":[5,10,15,18,29,8],"process_time":"2026-06-20T00:02:00.818728"}
{"date":"2026-06-20","id":"00713","result":[5,15,17,26,33,8],"process_time":"2026-06-21T00:01:56.101366"}
{"date":"2026-06-20","id":"00714","result":[9,15,29,31,33,6],"process_time":"2026-06-21T00:01:56.099829"}
{"date":"2026-06-21","id":"00715","result":[2,6,23,29,34,3],"process_time":"2026-06-22T00:02:00.784026"}
{"date":"2026-06-21","id":"00716","result":[10,15,16,18,28,6],"process_time":"2026-06-22T00:02:00.782559"}
{"date":"2026-06-22","id":"00717","result":[9,18,21,29,34,12],"process_time":"2026-06-23T00:02:43.108409"}
{"date":"2026-06-22","id":"00718","result":[5,8,10,18,22,8],"process_time":"2026-06-23T00:02:43.106813"}
{"date":"2026-06-23","id":"00719","result":[12,17,19,20,21,4],"process_time":"2026-06-24T00:01:58.003029"}
{"date":"2026-06-23","id":"00720","result":[7,23,26,28,34,6],"process_time":"2026-06-24T00:01:58.001558"}
{"date":"2026-06-24","id":"00721","result":[5,6,12,13,29,6],"process_time":"2026-06-25T00:01:56.333927"}
{"date":"2026-06-24","id":"00722","result":[4,17,24,26,29,9],"process_time":"2026-06-25T00:01:56.332388"}
{"date":"2026-06-26","id":"00726","result":[2,6,8,11,14,3],"process_time":"2026-07-04T17:52:38.965986"}
{"date":"2026-06-27","id":"00727","result":[2,5,9,21,22,7],"process_time":"2026-07-04T17:52:38.964492"}
{"date":"2026-06-27","id":"00728","result":[8,19,23,27,32,4],"process_time":"2026-07-04T17:52:38.962979"}
{"date":"2026-06-28","id":"00729","result":[3,6,8,10,35,10],"process_time":"2026-07-04T17:52:38.961534"}
{"date":"2026-06-28","id":"00730","result":[6,9,14,27,29,1],"process_time":"2026-07-04T17:52:38.960081"}
{"date":"2026-06-29","id":"00731","result":[17,19,28,30,34,8],"process_time":"2026-07-04T17:52:38.958581"}
{"date":"2026-06-29","id":"00732","result":[8,22,27,31,35,2],"process_time":"2026-07-04T17:52:38.957056"}
{"date":"2026-06-30","id":"00733","result":[5,11,29,32,33,4],"process_time":"2026-07-04T17:52:38.955518"}
{"date":"2026-06-30","id":"00734","result":[1,12,22,28,35,9],"process_time":"2026-07-04T17:52:38.911755"}
{"date":"2026-07-01","id":"00735","result":[22,26,27,29,32,10],"process_time":"2026-07-04T17:52:38.909328"}
{"date":"2026-07-01","id":"00736","result":[4,10,17,21,31,2],"process_time":"2026-07-04T17:52:38.907854"}
{"date":"2026-07-02","id":"00737","result":[6,8,9,14,31,9],"process_time":"2026-07-04T17:52:38.906296"}
{"date":"2026-07-02","id":"00738","result":[1,8,11,13,33,5],"process_time":"2026-07-04T17:52:38.904036"}
{"date":"2026-07-03","id":"00739","result":[3,6,15,20,34,10],"process_time":"2026-07-04T17:52:38.902499"}
{"date":"2026-07-03","id":"00740","result":[5,11,20,30,34,5],"process_time":"2026-07-04T17:52:38.900972"}
{"date":"2026-07-04","id":"00741","result":[4,22,25,28,35,3],"process_time":"2026-07-04T17:52:38.899065"}
{"date":"2026-07-04","id":"00742","result":[2,5,15,22,27,3],"process_time":"2026-07-05T00:01:58.593740"}
{"date":"2026-07-05","id":"00743","result":[11,20,23,27,35,5],"process_time":"2026-07-06T00:02:09.102022"}
{"date":"2026-07-05","id":"00744","result":[16,17,24,27,30,3],"process_time":"2026-07-06T00:02:09.098536"}
{"date":"2026-07-06","id":"00745","result":[4,22,24,28,31,7],"process_time":"2026-07-07T00:01:58.986660"}
{"date":"2026-07-06","id":"00746","result":[3,6,10,16,31,2],"process_time":"2026-07-07T00:01:58.984795"}
{"date":"2026-07-07","id":"00747","result":[11,12,14,29,31,7],"process_time":"2026-07-14T02:53:33.467082"}
{"date":"2026-07-07","id":"00748","result":[2,8,13,21,29,4],"process_time":"2026-07-14T02:53:33.467037"}
{"date":"2026-07-08","id":"00749","result":[4,8,11,27,34,6],"process_time":"2026-07-14T02:53:33.466987"}
{"date":"2026-07-08","id":"00750","result":[6,7,15,27,35,5],"process_time":"2026-07-14T02:53:33.466938"}
{"date":"2026-07-09","id":"00751","result":[6,10,20,25,33,1],"process_time":"2026-07-14T02:53:33.466884"}
{"date":"2026-07-09","id":"00752","result":[14,19,25,28,30,4],"process_time":"2026-07-14T02:53:33.466815"}
{"date":"2026-07-10","id":"00753","result":[1,5,10,17,34,6],"process_time":"2026-07-14T02:53:33.481364"}
{"date":"2026-07-10","id":"00754","result":[9,11,25,29,31,12],"process_time":"2026-07-14T02:53:33.481323"}
{"date":"2026-07-11","id":"00755","result":[9,11,16,20,33,9],"process_time":"2026-07-14T02:53:33.481281"}
{"date":"2026-07-11","id":"00756","result":[1,4,11,21,27,11],"process_time":"2026-07-14T02:53:33.481238"}
{"date":"2026-07-12","id":"00757","result":[14,17,20,21,22,3],"process_time":"2026-07-14T02:53:33.481196"}
{"date":"2026-07-12","id":"00758","result":[10,15,22,31,32,12],"process_time":"2026-07-14T02:53:33.481152"}
{"date":"2026-07-13","id":"00759","result":[9,11,12,30,35,9],"process_time":"2026-07-14T02:53:33.481105"}
{"date":"2026-07-13","id":"00760","result":[2,7,9,13,34,5],"process_time":"2026-07-14T02:53:33.481048"}
`,zd=`{"date":"2017-10-25","id":"00198","result":[12,17,23,25,34,38],"process_time":"2023-01-30 14:08:46.805928"}\r
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
`,Ed=`{"date":"2017-08-01","id":"00001","result":[5,10,14,23,24,38,35],"process_time":"2022-05-07 07:56:43.143266"}
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
`,Md="http://127.0.0.1:8787/logs",W6=500,Ad=12,xd={power655:Ed,power645:zd,power535:bd};let Od=0;function Nd(){return new Date().toLocaleTimeString("vi-VN",{hour:"2-digit",minute:"2-digit",second:"2-digit"})}function Dd(c,p){const g=new Blob([p.join(`
`)],{type:"text/csv;charset=utf-8"}),n=URL.createObjectURL(g),E=document.createElement("a");E.href=n,E.download=c,E.click(),URL.revokeObjectURL(n)}function Cd(c){fetch(Md,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(c)}).catch(()=>{console.debug("Log server is not running; skipped file history write.")})}function Ud(){const c=k.useRef(null),[p,g]=k.useState(()=>localStorage.getItem("power655_user")),[n,E]=k.useState(Bn),[A,S]=k.useState(()=>new Set),[B,U]=k.useState([]),[T,Y]=k.useState(()=>new Map),[q,Q]=k.useState([]),[_0,O0]=k.useState("grid"),[s0,b0]=k.useState(1.4),[n0,o0]=k.useState(null),[f0,t0]=k.useState(null),[Y0,L0]=k.useState(!1),[I,H0]=k.useState(!1),[C0,J0]=k.useState([]),d0=C5[n],S0=k.useMemo(()=>new Set(T.keys()),[T]);function K(z,G){const Z={id:++Od,at:Nd(),level:z,message:G};Q(F=>[Z,...F].slice(0,120)),Cd({...Z,user:p??"anonymous"})}function F0(z){localStorage.setItem("power655_user",z),g(z)}function i2(){localStorage.removeItem("power655_user"),g(null)}k.useEffect(()=>{try{const z=$6(xd[n],d0.dataFileName,d0);S(new Set(z.combinations.map(G=>G.index))),U(z.combinations),Y(new Map),o0(null),J0([]),t0({index:0,id:Date.now()+Math.random()}),K("success",`Auto-loaded data/${d0.dataFileName} for ${d0.label}: ${z.combinations.length.toLocaleString("en-US")} bộ hợp lệ.`),z.errors.length>0&&(z.errors.slice(0,8).forEach(G=>K("warn",G)),z.errors.length>8&&K("warn",`Auto-load còn ${z.errors.length-8} lỗi khác đã rút gọn.`))}catch(z){K("error",`Auto-load data/${d0.dataFileName} thất bại: ${z instanceof Error?z.message:"không đọc được dữ liệu"}.`)}},[d0,n]);function M(z,G=Math.max(s0,3.2)){b0(Math.min(10,Math.max(.55,G))),t0({index:z,id:Date.now()+Math.random()})}function L(){var z;(z=c.current)==null||z.click()}async function w(z){var Z;const G=(Z=z.target.files)==null?void 0:Z[0];if(z.target.value="",!!G)try{const F=await G.text(),m0=$6(F,G.name,d0);S(N0=>{const i0=new Set(N0);return m0.combinations.forEach(p0=>i0.add(p0.index)),i0}),U(N0=>{const i0=new Set(N0.map(r2=>r2.index)),p0=m0.combinations.filter(r2=>!i0.has(r2.index));return[...N0,...p0]}),K("success",`Import file "${G.name}" thành công: ${m0.combinations.length.toLocaleString("en-US")} bộ hợp lệ.`),m0.errors.length>0&&(m0.errors.slice(0,12).forEach(N0=>K("warn",N0)),m0.errors.length>12&&K("warn",`Còn ${m0.errors.length-12} lỗi khác đã bị rút gọn.`))}catch(F){K("error",`Lỗi định dạng file: ${F instanceof Error?F.message:"không đọc được file"}.`)}}function h0(z){const G=r4(z,d0);Y(Z=>{const F=new Map(Z);return F.has(z)?(F.delete(z),K("info",`Bỏ chọn #${z.toLocaleString("en-US")} - ${o1(G)}.`)):(F.set(z,{index:z,numbers:G,selectedAt:new Date().toISOString()}),K("info",`Click chọn #${z.toLocaleString("en-US")} - ${o1(G)}.`)),F})}function v0(z){const G=Qe(Yn(z));if(!U5(G,d0)){K("error",`Search lỗi: "${z}" không phải bộ ${d0.pickCount} số hợp lệ cho ${d0.label}.`);return}const Z=te(G,d0);K("info",`Search ${o1(G)} tại #${Z.toLocaleString("en-US")}.`),M(Z)}function m(){const z=Xe(d0),G=te(z,d0);o0(G),K("success",`Random Pick: ${o1(z)} tại #${G.toLocaleString("en-US")}.`),M(G,Math.max(s0,3.6))}function D(){A.size===0&&K("warn","Calculated Pick cần dữ liệu import; đang dùng random fallback.");const z=ta(A,d0,void 0,{diversityMemory:C0});o0(z.index),J0(G=>[z.numbers,...G].slice(0,Ad)),K("success",`Calculated Pick: ${o1(z.numbers)} tại #${z.index.toLocaleString("en-US")} | score ${z.score.toFixed(4)} | base ${z.baseScore.toFixed(4)} | diversity penalty ${z.diversityPenalty.toFixed(4)} | avg number freq ${z.averageNumberFrequency.toFixed(2)} | avg pair freq ${z.averagePairFrequency.toFixed(2)} | ${z.candidateCount.toLocaleString("en-US")} candidates.`),M(z.index,Math.max(s0,3.6))}async function y(){if(Y0){K("warn","Replay Backtest đang chạy, hãy đợi lượt hiện tại hoàn tất.");return}if(B.length<2){K("warn","Replay Backtest cần ít nhất 2 bộ số lịch sử.");return}L0(!0),K("info",`Replay Backtest comparison started: ${B.length.toLocaleString("en-US")} historical draws.`);try{const z=await gd(B,d0,({drawIndex:i0,totalDraws:p0,results:r2})=>{if(i0%100===0){const q2=r2.find(n2=>n2.name==="Your Algorithm");K("info",`Replay progress ${i0}/${p0}: Your avg=${q2?(q2.totalMatches/i0).toFixed(3):"n/a"}, Random avg=${(r2[0].totalMatches/i0).toFixed(3)}.`)}}),G=B.length-1,Z=[...z].sort((i0,p0)=>Yt(p0,G).avgMatches-Yt(i0,G).avgMatches);K("success",`Replay Backtest done. Tested=${G.toLocaleString("en-US")} draws. Baseline included. No strategy used actual draw data before picking.`);for(const i0 of Z){const p0=Yt(i0,G);K(i0.name==="Your Algorithm"?"success":"info",`${i0.name}: avg=${p0.avgMatches.toFixed(3)} | 3=${p0.hits3??0} | 4=${p0.hits4??0} | 5=${p0.hits5??0} | exact=${p0.exactHits} | best=${i0.bestMatch} | ROI=${p0.roi.toFixed(2)}% | dist [${i0.distribution.map((r2,q2)=>`${q2}:${r2}`).join(" ")}].`)}const F=z.find(i0=>i0.name==="Your Algorithm"),m0=z.find(i0=>i0.name==="Random");if(F&&m0){const i0=Yt(F,G),p0=Yt(m0,G);K(i0.avgMatches>p0.avgMatches?"success":"warn",`Your vs Random: avg delta=${(i0.avgMatches-p0.avgMatches).toFixed(3)}, 3+ hits delta=${(i0.hits3??0)+(i0.hits4??0)+(i0.hits5??0)+i0.exactHits-((p0.hits3??0)+(p0.hits4??0)+(p0.hits5??0)+p0.exactHits)}.`)}const N0=Z[0].bestPrediction;N0&&(o0(N0.index),M(N0.index,Math.max(s0,3.6)),K("info",`Best replay sample from top strategy ${Z[0].name} at draw #${N0.drawIndex+1}: predicted ${o1(N0.numbers)} vs actual ${o1(N0.actual)}.`))}catch(z){K("error",`Replay Backtest failed: ${z instanceof Error?z.message:"unknown error"}.`)}finally{L0(!1)}}async function O(){if(I){K("warn","Stat Test đang chạy, hãy đợi lượt hiện tại hoàn tất.");return}if(B.length<2){K("warn","Stat Test cần ít nhất 2 bộ số lịch sử.");return}H0(!0),K("info",`Stat Test started: Your Algorithm vs ${W6.toLocaleString("en-US")} random replay runs on ${B.length-1} draws.`);try{const z=await Sd(B,d0,W6,(G,Z)=>{G%100===0&&K("info",`Stat Test progress: ${G}/${Z} draws.`)});K("success",`Stat Test avg matches: Your=${z.your.avgMatches.toFixed(4)}, Random=${z.random.avgMatchesMean.toFixed(4)} ± ${z.random.avgMatchesStd.toFixed(4)}, z=${z.avgMatchesZScore.toFixed(2)}, percentile=${z.avgMatchesPercentile.toFixed(1)}%, p≈${z.avgMatchesPValue.toFixed(4)}.`),K(z.hits3PlusPercentile>=95?"success":"info",`Stat Test 3+ hits: Your=${z.your.hits3Plus}, Random=${z.random.hits3PlusMean.toFixed(2)} ± ${z.random.hits3PlusStd.toFixed(2)}, percentile=${z.hits3PlusPercentile.toFixed(1)}%, p≈${z.hits3PlusPValue.toFixed(4)}.`),K(z.roiPercentile>=95?"success":"info",`Stat Test ROI: Your=${z.your.roi.toFixed(2)}%, Random=${z.random.roiMean.toFixed(2)}% ± ${z.random.roiStd.toFixed(2)}%, percentile=${z.roiPercentile.toFixed(1)}%, p≈${z.roiPValue.toFixed(4)}.`),K("info",`Stat Test Your distribution: [${z.your.distribution.map((G,Z)=>`${Z}:${G}`).join(" ")}].`)}catch(z){K("error",`Stat Test failed: ${z instanceof Error?z.message:"unknown error"}.`)}finally{H0(!1)}}function H(){if(T.size===0){K("warn","Export Selected Cells: chưa có ô nào được chọn.");return}const z=["index,n1,n2,n3,n4,n5,n6,selected_at"];[...T.values()].sort((G,Z)=>G.index-Z.index).forEach(G=>z.push([G.index,...G.numbers,G.selectedAt].join(","))),Dd("selected-power655-combinations.csv",z),K("success",`Export Selected Cells: ${T.size.toLocaleString("en-US")} dòng CSV.`)}function j(){b0(1.4),t0({index:0,id:Date.now()+Math.random()}),K("info","Reset View về đầu không gian tổ hợp.")}return p?R.jsxs("main",{className:"app-shell",children:[R.jsxs("header",{className:"app-header",children:[R.jsxs("div",{children:[R.jsxs("p",{className:"eyebrow",children:["Vietlott ",d0.label]}),R.jsx("h1",{children:"Combination Space Dashboard"})]}),R.jsxs("div",{className:"header-actions",children:[R.jsx(nd,{value:n,onChange:E}),R.jsx(dd,{onSearch:v0}),R.jsx("button",{onClick:i2,title:"Logout",children:"Logout"})]})]}),R.jsx(od,{mode:_0,zoom:s0,onImportClick:L,onClearImported:()=>{S(new Set),U([]),J0([]),K("info","Clear Imported Data hoàn tất.")},onClearSelected:()=>{Y(new Map),K("info","Clear Selected Cells hoàn tất.")},onExportSelected:H,onRandomPick:m,onCalculatedPick:D,onBacktestPick:y,onStatTest:O,onResetView:j,onToggleMode:()=>{O0(z=>z==="grid"?"heatmap":"grid"),K("info","Toggle Grid / Heatmap Mode.")},onZoomIn:()=>b0(z=>Math.min(10,Number((z*1.22).toFixed(2)))),onZoomOut:()=>b0(z=>Math.max(.55,Number((z/1.22).toFixed(2))))}),R.jsxs("div",{className:"workspace",children:[R.jsx("section",{className:"grid-section",children:R.jsx(Ln,{product:d0,importedIndexes:A,selectedIndexes:S0,randomIndex:n0,focusRequest:f0,mode:_0,zoom:s0,onZoomChange:b0,onSelect:h0})}),R.jsxs("aside",{className:"side-panel",children:[R.jsx(cd,{product:d0,importedCount:A.size,selectedCount:T.size}),R.jsx(ud,{entries:q})]})]}),R.jsx(Gn,{inputRef:c,onFileChange:w})]}):R.jsx(ad,{onLogin:F0})}qn.createRoot(document.getElementById("root")).render(R.jsx(k.StrictMode,{children:R.jsx(Ud,{})}));
