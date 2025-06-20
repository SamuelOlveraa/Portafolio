(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))s(a);new MutationObserver(a=>{for(const l of a)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function t(a){const l={};return a.integrity&&(l.integrity=a.integrity),a.referrerPolicy&&(l.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?l.credentials="include":a.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function s(a){if(a.ep)return;a.ep=!0;const l=t(a);fetch(a.href,l)}})();var gu={exports:{}},Bo={},vu={exports:{}},ht={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Cp;function $v(){if(Cp)return ht;Cp=1;var r=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),s=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),m=Symbol.for("react.memo"),g=Symbol.for("react.lazy"),v=Symbol.iterator;function _(U){return U===null||typeof U!="object"?null:(U=v&&U[v]||U["@@iterator"],typeof U=="function"?U:null)}var S={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},M=Object.assign,T={};function A(U,ne,Be){this.props=U,this.context=ne,this.refs=T,this.updater=Be||S}A.prototype.isReactComponent={},A.prototype.setState=function(U,ne){if(typeof U!="object"&&typeof U!="function"&&U!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,U,ne,"setState")},A.prototype.forceUpdate=function(U){this.updater.enqueueForceUpdate(this,U,"forceUpdate")};function x(){}x.prototype=A.prototype;function L(U,ne,Be){this.props=U,this.context=ne,this.refs=T,this.updater=Be||S}var I=L.prototype=new x;I.constructor=L,M(I,A.prototype),I.isPureReactComponent=!0;var R=Array.isArray,j=Object.prototype.hasOwnProperty,V={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function Y(U,ne,Be){var J,de={},we=null,Ae=null;if(ne!=null)for(J in ne.ref!==void 0&&(Ae=ne.ref),ne.key!==void 0&&(we=""+ne.key),ne)j.call(ne,J)&&!F.hasOwnProperty(J)&&(de[J]=ne[J]);var Te=arguments.length-2;if(Te===1)de.children=Be;else if(1<Te){for(var qe=Array(Te),We=0;We<Te;We++)qe[We]=arguments[We+2];de.children=qe}if(U&&U.defaultProps)for(J in Te=U.defaultProps,Te)de[J]===void 0&&(de[J]=Te[J]);return{$$typeof:r,type:U,key:we,ref:Ae,props:de,_owner:V.current}}function D(U,ne){return{$$typeof:r,type:U.type,key:ne,ref:U.ref,props:U.props,_owner:U._owner}}function C(U){return typeof U=="object"&&U!==null&&U.$$typeof===r}function H(U){var ne={"=":"=0",":":"=2"};return"$"+U.replace(/[=:]/g,function(Be){return ne[Be]})}var ae=/\/+/g;function te(U,ne){return typeof U=="object"&&U!==null&&U.key!=null?H(""+U.key):ne.toString(36)}function fe(U,ne,Be,J,de){var we=typeof U;(we==="undefined"||we==="boolean")&&(U=null);var Ae=!1;if(U===null)Ae=!0;else switch(we){case"string":case"number":Ae=!0;break;case"object":switch(U.$$typeof){case r:case e:Ae=!0}}if(Ae)return Ae=U,de=de(Ae),U=J===""?"."+te(Ae,0):J,R(de)?(Be="",U!=null&&(Be=U.replace(ae,"$&/")+"/"),fe(de,ne,Be,"",function(We){return We})):de!=null&&(C(de)&&(de=D(de,Be+(!de.key||Ae&&Ae.key===de.key?"":(""+de.key).replace(ae,"$&/")+"/")+U)),ne.push(de)),1;if(Ae=0,J=J===""?".":J+":",R(U))for(var Te=0;Te<U.length;Te++){we=U[Te];var qe=J+te(we,Te);Ae+=fe(we,ne,Be,qe,de)}else if(qe=_(U),typeof qe=="function")for(U=qe.call(U),Te=0;!(we=U.next()).done;)we=we.value,qe=J+te(we,Te++),Ae+=fe(we,ne,Be,qe,de);else if(we==="object")throw ne=String(U),Error("Objects are not valid as a React child (found: "+(ne==="[object Object]"?"object with keys {"+Object.keys(U).join(", ")+"}":ne)+"). If you meant to render a collection of children, use an array instead.");return Ae}function pe(U,ne,Be){if(U==null)return U;var J=[],de=0;return fe(U,J,"","",function(we){return ne.call(Be,we,de++)}),J}function oe(U){if(U._status===-1){var ne=U._result;ne=ne(),ne.then(function(Be){(U._status===0||U._status===-1)&&(U._status=1,U._result=Be)},function(Be){(U._status===0||U._status===-1)&&(U._status=2,U._result=Be)}),U._status===-1&&(U._status=0,U._result=ne)}if(U._status===1)return U._result.default;throw U._result}var ce={current:null},z={transition:null},le={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:z,ReactCurrentOwner:V};function re(){throw Error("act(...) is not supported in production builds of React.")}return ht.Children={map:pe,forEach:function(U,ne,Be){pe(U,function(){ne.apply(this,arguments)},Be)},count:function(U){var ne=0;return pe(U,function(){ne++}),ne},toArray:function(U){return pe(U,function(ne){return ne})||[]},only:function(U){if(!C(U))throw Error("React.Children.only expected to receive a single React element child.");return U}},ht.Component=A,ht.Fragment=t,ht.Profiler=a,ht.PureComponent=L,ht.StrictMode=s,ht.Suspense=h,ht.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=le,ht.act=re,ht.cloneElement=function(U,ne,Be){if(U==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+U+".");var J=M({},U.props),de=U.key,we=U.ref,Ae=U._owner;if(ne!=null){if(ne.ref!==void 0&&(we=ne.ref,Ae=V.current),ne.key!==void 0&&(de=""+ne.key),U.type&&U.type.defaultProps)var Te=U.type.defaultProps;for(qe in ne)j.call(ne,qe)&&!F.hasOwnProperty(qe)&&(J[qe]=ne[qe]===void 0&&Te!==void 0?Te[qe]:ne[qe])}var qe=arguments.length-2;if(qe===1)J.children=Be;else if(1<qe){Te=Array(qe);for(var We=0;We<qe;We++)Te[We]=arguments[We+2];J.children=Te}return{$$typeof:r,type:U.type,key:de,ref:we,props:J,_owner:Ae}},ht.createContext=function(U){return U={$$typeof:u,_currentValue:U,_currentValue2:U,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},U.Provider={$$typeof:l,_context:U},U.Consumer=U},ht.createElement=Y,ht.createFactory=function(U){var ne=Y.bind(null,U);return ne.type=U,ne},ht.createRef=function(){return{current:null}},ht.forwardRef=function(U){return{$$typeof:f,render:U}},ht.isValidElement=C,ht.lazy=function(U){return{$$typeof:g,_payload:{_status:-1,_result:U},_init:oe}},ht.memo=function(U,ne){return{$$typeof:m,type:U,compare:ne===void 0?null:ne}},ht.startTransition=function(U){var ne=z.transition;z.transition={};try{U()}finally{z.transition=ne}},ht.unstable_act=re,ht.useCallback=function(U,ne){return ce.current.useCallback(U,ne)},ht.useContext=function(U){return ce.current.useContext(U)},ht.useDebugValue=function(){},ht.useDeferredValue=function(U){return ce.current.useDeferredValue(U)},ht.useEffect=function(U,ne){return ce.current.useEffect(U,ne)},ht.useId=function(){return ce.current.useId()},ht.useImperativeHandle=function(U,ne,Be){return ce.current.useImperativeHandle(U,ne,Be)},ht.useInsertionEffect=function(U,ne){return ce.current.useInsertionEffect(U,ne)},ht.useLayoutEffect=function(U,ne){return ce.current.useLayoutEffect(U,ne)},ht.useMemo=function(U,ne){return ce.current.useMemo(U,ne)},ht.useReducer=function(U,ne,Be){return ce.current.useReducer(U,ne,Be)},ht.useRef=function(U){return ce.current.useRef(U)},ht.useState=function(U){return ce.current.useState(U)},ht.useSyncExternalStore=function(U,ne,Be){return ce.current.useSyncExternalStore(U,ne,Be)},ht.useTransition=function(){return ce.current.useTransition()},ht.version="18.3.1",ht}var Rp;function Wf(){return Rp||(Rp=1,vu.exports=$v()),vu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dp;function e0(){if(Dp)return Bo;Dp=1;var r=Wf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,m){var g,v={},_=null,S=null;m!==void 0&&(_=""+m),h.key!==void 0&&(_=""+h.key),h.ref!==void 0&&(S=h.ref);for(g in h)s.call(h,g)&&!l.hasOwnProperty(g)&&(v[g]=h[g]);if(f&&f.defaultProps)for(g in h=f.defaultProps,h)v[g]===void 0&&(v[g]=h[g]);return{$$typeof:e,type:f,key:_,ref:S,props:v,_owner:a.current}}return Bo.Fragment=t,Bo.jsx=u,Bo.jsxs=u,Bo}var bp;function t0(){return bp||(bp=1,gu.exports=e0()),gu.exports}var O=t0(),kt=Wf(),ol={},xu={exports:{}},Hn={},_u={exports:{}},Au={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Pp;function n0(){return Pp||(Pp=1,function(r){function e(z,le){var re=z.length;z.push(le);e:for(;0<re;){var U=re-1>>>1,ne=z[U];if(0<a(ne,le))z[U]=le,z[re]=ne,re=U;else break e}}function t(z){return z.length===0?null:z[0]}function s(z){if(z.length===0)return null;var le=z[0],re=z.pop();if(re!==le){z[0]=re;e:for(var U=0,ne=z.length,Be=ne>>>1;U<Be;){var J=2*(U+1)-1,de=z[J],we=J+1,Ae=z[we];if(0>a(de,re))we<ne&&0>a(Ae,de)?(z[U]=Ae,z[we]=re,U=we):(z[U]=de,z[J]=re,U=J);else if(we<ne&&0>a(Ae,re))z[U]=Ae,z[we]=re,U=we;else break e}}return le}function a(z,le){var re=z.sortIndex-le.sortIndex;return re!==0?re:z.id-le.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;r.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();r.unstable_now=function(){return u.now()-f}}var h=[],m=[],g=1,v=null,_=3,S=!1,M=!1,T=!1,A=typeof setTimeout=="function"?setTimeout:null,x=typeof clearTimeout=="function"?clearTimeout:null,L=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function I(z){for(var le=t(m);le!==null;){if(le.callback===null)s(m);else if(le.startTime<=z)s(m),le.sortIndex=le.expirationTime,e(h,le);else break;le=t(m)}}function R(z){if(T=!1,I(z),!M)if(t(h)!==null)M=!0,oe(j);else{var le=t(m);le!==null&&ce(R,le.startTime-z)}}function j(z,le){M=!1,T&&(T=!1,x(Y),Y=-1),S=!0;var re=_;try{for(I(le),v=t(h);v!==null&&(!(v.expirationTime>le)||z&&!H());){var U=v.callback;if(typeof U=="function"){v.callback=null,_=v.priorityLevel;var ne=U(v.expirationTime<=le);le=r.unstable_now(),typeof ne=="function"?v.callback=ne:v===t(h)&&s(h),I(le)}else s(h);v=t(h)}if(v!==null)var Be=!0;else{var J=t(m);J!==null&&ce(R,J.startTime-le),Be=!1}return Be}finally{v=null,_=re,S=!1}}var V=!1,F=null,Y=-1,D=5,C=-1;function H(){return!(r.unstable_now()-C<D)}function ae(){if(F!==null){var z=r.unstable_now();C=z;var le=!0;try{le=F(!0,z)}finally{le?te():(V=!1,F=null)}}else V=!1}var te;if(typeof L=="function")te=function(){L(ae)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,pe=fe.port2;fe.port1.onmessage=ae,te=function(){pe.postMessage(null)}}else te=function(){A(ae,0)};function oe(z){F=z,V||(V=!0,te())}function ce(z,le){Y=A(function(){z(r.unstable_now())},le)}r.unstable_IdlePriority=5,r.unstable_ImmediatePriority=1,r.unstable_LowPriority=4,r.unstable_NormalPriority=3,r.unstable_Profiling=null,r.unstable_UserBlockingPriority=2,r.unstable_cancelCallback=function(z){z.callback=null},r.unstable_continueExecution=function(){M||S||(M=!0,oe(j))},r.unstable_forceFrameRate=function(z){0>z||125<z?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):D=0<z?Math.floor(1e3/z):5},r.unstable_getCurrentPriorityLevel=function(){return _},r.unstable_getFirstCallbackNode=function(){return t(h)},r.unstable_next=function(z){switch(_){case 1:case 2:case 3:var le=3;break;default:le=_}var re=_;_=le;try{return z()}finally{_=re}},r.unstable_pauseExecution=function(){},r.unstable_requestPaint=function(){},r.unstable_runWithPriority=function(z,le){switch(z){case 1:case 2:case 3:case 4:case 5:break;default:z=3}var re=_;_=z;try{return le()}finally{_=re}},r.unstable_scheduleCallback=function(z,le,re){var U=r.unstable_now();switch(typeof re=="object"&&re!==null?(re=re.delay,re=typeof re=="number"&&0<re?U+re:U):re=U,z){case 1:var ne=-1;break;case 2:ne=250;break;case 5:ne=1073741823;break;case 4:ne=1e4;break;default:ne=5e3}return ne=re+ne,z={id:g++,callback:le,priorityLevel:z,startTime:re,expirationTime:ne,sortIndex:-1},re>U?(z.sortIndex=re,e(m,z),t(h)===null&&z===t(m)&&(T?(x(Y),Y=-1):T=!0,ce(R,re-U))):(z.sortIndex=ne,e(h,z),M||S||(M=!0,oe(j))),z},r.unstable_shouldYield=H,r.unstable_wrapCallback=function(z){var le=_;return function(){var re=_;_=le;try{return z.apply(this,arguments)}finally{_=re}}}}(Au)),Au}var Ip;function i0(){return Ip||(Ip=1,_u.exports=n0()),_u.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Lp;function r0(){if(Lp)return Hn;Lp=1;var r=Wf(),e=i0();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)i+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var s=new Set,a={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(a[n]=i,n=0;n<i.length;n++)s.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,m=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,g={},v={};function _(n){return h.call(v,n)?!0:h.call(g,n)?!1:m.test(n)?v[n]=!0:(g[n]=!0,!1)}function S(n,i,o,c){if(o!==null&&o.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function M(n,i,o,c){if(i===null||typeof i>"u"||S(n,i,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function T(n,i,o,c,d,p,y){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=o,this.propertyName=n,this.type=i,this.sanitizeURL=p,this.removeEmptyString=y}var A={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){A[n]=new T(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];A[i]=new T(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){A[n]=new T(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){A[n]=new T(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){A[n]=new T(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){A[n]=new T(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){A[n]=new T(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){A[n]=new T(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){A[n]=new T(n,5,!1,n.toLowerCase(),null,!1,!1)});var x=/[\-:]([a-z])/g;function L(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(x,L);A[i]=new T(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(x,L);A[i]=new T(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(x,L);A[i]=new T(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){A[n]=new T(n,1,!1,n.toLowerCase(),null,!1,!1)}),A.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){A[n]=new T(n,1,!1,n.toLowerCase(),null,!0,!0)});function I(n,i,o,c){var d=A.hasOwnProperty(i)?A[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(M(i,o,d,c)&&(o=null),c||d===null?_(i)&&(o===null?n.removeAttribute(i):n.setAttribute(i,""+o)):d.mustUseProperty?n[d.propertyName]=o===null?d.type===3?!1:"":o:(i=d.attributeName,c=d.attributeNamespace,o===null?n.removeAttribute(i):(d=d.type,o=d===3||d===4&&o===!0?"":""+o,c?n.setAttributeNS(c,i,o):n.setAttribute(i,o))))}var R=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,j=Symbol.for("react.element"),V=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),Y=Symbol.for("react.strict_mode"),D=Symbol.for("react.profiler"),C=Symbol.for("react.provider"),H=Symbol.for("react.context"),ae=Symbol.for("react.forward_ref"),te=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),pe=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),z=Symbol.iterator;function le(n){return n===null||typeof n!="object"?null:(n=z&&n[z]||n["@@iterator"],typeof n=="function"?n:null)}var re=Object.assign,U;function ne(n){if(U===void 0)try{throw Error()}catch(o){var i=o.stack.trim().match(/\n( *(at )?)/);U=i&&i[1]||""}return`
`+U+n}var Be=!1;function J(n,i){if(!n||Be)return"";Be=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch($){var c=$}Reflect.construct(n,[],i)}else{try{i.call()}catch($){c=$}n.call(i.prototype)}else{try{throw Error()}catch($){c=$}n()}}catch($){if($&&c&&typeof $.stack=="string"){for(var d=$.stack.split(`
`),p=c.stack.split(`
`),y=d.length-1,P=p.length-1;1<=y&&0<=P&&d[y]!==p[P];)P--;for(;1<=y&&0<=P;y--,P--)if(d[y]!==p[P]){if(y!==1||P!==1)do if(y--,P--,0>P||d[y]!==p[P]){var N=`
`+d[y].replace(" at new "," at ");return n.displayName&&N.includes("<anonymous>")&&(N=N.replace("<anonymous>",n.displayName)),N}while(1<=y&&0<=P);break}}}finally{Be=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?ne(n):""}function de(n){switch(n.tag){case 5:return ne(n.type);case 16:return ne("Lazy");case 13:return ne("Suspense");case 19:return ne("SuspenseList");case 0:case 2:case 15:return n=J(n.type,!1),n;case 11:return n=J(n.type.render,!1),n;case 1:return n=J(n.type,!0),n;default:return""}}function we(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case V:return"Portal";case D:return"Profiler";case Y:return"StrictMode";case te:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case H:return(n.displayName||"Context")+".Consumer";case C:return(n._context.displayName||"Context")+".Provider";case ae:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case pe:return i=n.displayName||null,i!==null?i:we(n.type)||"Memo";case oe:i=n._payload,n=n._init;try{return we(n(i))}catch{}}return null}function Ae(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(i);case 8:return i===Y?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function Te(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function qe(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function We(n){var i=qe(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var d=o.get,p=o.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(y){c=""+y,p.call(this,y)}}),Object.defineProperty(n,i,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(y){c=""+y},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function bt(n){n._valueTracker||(n._valueTracker=We(n))}function Bt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var o=i.getValue(),c="";return n&&(c=qe(n)?n.checked?"true":"false":n.value),n=c,n!==o?(i.setValue(n),!0):!1}function gt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function B(n,i){var o=i.checked;return re({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function on(n,i){var o=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;o=Te(i.value!=null?i.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function At(n,i){i=i.checked,i!=null&&I(n,"checked",i,!1)}function Dt(n,i){At(n,i);var o=Te(i.value),c=i.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?vt(n,i.type,o):i.hasOwnProperty("defaultValue")&&vt(n,i.type,Te(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function Xe(n,i,o){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,o||i===n.value||(n.value=i),n.defaultValue=i}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function vt(n,i,o){(i!=="number"||gt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ke=Array.isArray;function st(n,i,o,c){if(n=n.options,i){i={};for(var d=0;d<o.length;d++)i["$"+o[d]]=!0;for(o=0;o<n.length;o++)d=i.hasOwnProperty("$"+n[o].value),n[o].selected!==d&&(n[o].selected=d),d&&c&&(n[o].defaultSelected=!0)}else{for(o=""+Te(o),i=null,d=0;d<n.length;d++){if(n[d].value===o){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function Vt(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return re({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function b(n,i){var o=i.value;if(o==null){if(o=i.children,i=i.defaultValue,o!=null){if(i!=null)throw Error(t(92));if(Ke(o)){if(1<o.length)throw Error(t(93));o=o[0]}i=o}i==null&&(i=""),o=i}n._wrapperState={initialValue:Te(o)}}function E(n,i){var o=Te(i.value),c=Te(i.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),i.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Z(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function ue(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function me(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?ue(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var se,Ye=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,o,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,o,c,d)})}:n}(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(se=se||document.createElement("div"),se.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=se.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function Ce(n,i){if(i){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=i;return}}n.textContent=i}var ze={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Qe=["Webkit","ms","Moz","O"];Object.keys(ze).forEach(function(n){Qe.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),ze[i]=ze[n]})});function xe(n,i,o){return i==null||typeof i=="boolean"||i===""?"":o||typeof i!="number"||i===0||ze.hasOwnProperty(n)&&ze[n]?(""+i).trim():i+"px"}function Ue(n,i){n=n.style;for(var o in i)if(i.hasOwnProperty(o)){var c=o.indexOf("--")===0,d=xe(o,i[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,d):n[o]=d}}var nt=re({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(n,i){if(i){if(nt[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Re(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var rt=null;function k(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var De=null,ve=null,Ie=null;function ye(n){if(n=Ao(n)){if(typeof De!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Sa(i),De(n.stateNode,n.type,i))}}function he(n){ve?Ie?Ie.push(n):Ie=[n]:ve=n}function He(){if(ve){var n=ve,i=Ie;if(Ie=ve=null,ye(n),i)for(n=0;n<i.length;n++)ye(i[n])}}function at(n,i){return n(i)}function Pt(){}var yt=!1;function Bn(n,i,o){if(yt)return n(i,o);yt=!0;try{return at(n,i,o)}finally{yt=!1,(ve!==null||Ie!==null)&&(Pt(),He())}}function bn(n,i){var o=n.stateNode;if(o===null)return null;var c=Sa(o);if(c===null)return null;o=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,i,typeof o));return o}var os=!1;if(f)try{var $i={};Object.defineProperty($i,"passive",{get:function(){os=!0}}),window.addEventListener("test",$i,$i),window.removeEventListener("test",$i,$i)}catch{os=!1}function Di(n,i,o,c,d,p,y,P,N){var $=Array.prototype.slice.call(arguments,3);try{i.apply(o,$)}catch(_e){this.onError(_e)}}var bi=!1,Ir=null,Lr=!1,er=null,$o={onError:function(n){bi=!0,Ir=n}};function as(n,i,o,c,d,p,y,P,N){bi=!1,Ir=null,Di.apply($o,arguments)}function ea(n,i,o,c,d,p,y,P,N){if(as.apply(this,arguments),bi){if(bi){var $=Ir;bi=!1,Ir=null}else throw Error(t(198));Lr||(Lr=!0,er=$)}}function Ai(n){var i=n,o=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(o=i.return),n=i.return;while(n)}return i.tag===3?o:null}function ta(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function na(n){if(Ai(n)!==n)throw Error(t(188))}function zl(n){var i=n.alternate;if(!i){if(i=Ai(n),i===null)throw Error(t(188));return i!==n?null:n}for(var o=n,c=i;;){var d=o.return;if(d===null)break;var p=d.alternate;if(p===null){if(c=d.return,c!==null){o=c;continue}break}if(d.child===p.child){for(p=d.child;p;){if(p===o)return na(d),n;if(p===c)return na(d),i;p=p.sibling}throw Error(t(188))}if(o.return!==c.return)o=d,c=p;else{for(var y=!1,P=d.child;P;){if(P===o){y=!0,o=d,c=p;break}if(P===c){y=!0,c=d,o=p;break}P=P.sibling}if(!y){for(P=p.child;P;){if(P===o){y=!0,o=p,c=d;break}if(P===c){y=!0,c=p,o=d;break}P=P.sibling}if(!y)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:i}function ia(n){return n=zl(n),n!==null?ra(n):null}function ra(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=ra(n);if(i!==null)return i;n=n.sibling}return null}var sa=e.unstable_scheduleCallback,w=e.unstable_cancelCallback,W=e.unstable_shouldYield,ee=e.unstable_requestPaint,K=e.unstable_now,X=e.unstable_getCurrentPriorityLevel,Ee=e.unstable_ImmediatePriority,be=e.unstable_UserBlockingPriority,Fe=e.unstable_NormalPriority,Ne=e.unstable_LowPriority,it=e.unstable_IdlePriority,tt=null,ke=null;function pt(n){if(ke&&typeof ke.onCommitFiberRoot=="function")try{ke.onCommitFiberRoot(tt,n,void 0,(n.current.flags&128)===128)}catch{}}var ct=Math.clz32?Math.clz32:St,Ft=Math.log,Ht=Math.LN2;function St(n){return n>>>=0,n===0?32:31-(Ft(n)/Ht|0)|0}var Ze=64,Yt=4194304;function xt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function _n(n,i){var o=n.pendingLanes;if(o===0)return 0;var c=0,d=n.suspendedLanes,p=n.pingedLanes,y=o&268435455;if(y!==0){var P=y&~d;P!==0?c=xt(P):(p&=y,p!==0&&(c=xt(p)))}else y=o&~d,y!==0?c=xt(y):p!==0&&(c=xt(p));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,p=i&-i,d>=p||d===16&&(p&4194240)!==0))return i;if((c&4)!==0&&(c|=o&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)o=31-ct(i),d=1<<o,c|=n[o],i&=~d;return c}function tr(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Pn(n,i){for(var o=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,p=n.pendingLanes;0<p;){var y=31-ct(p),P=1<<y,N=d[y];N===-1?((P&o)===0||(P&c)!==0)&&(d[y]=tr(P,i)):N<=i&&(n.expiredLanes|=P),p&=~P}}function Pi(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Ut(){var n=Ze;return Ze<<=1,(Ze&4194240)===0&&(Ze=64),n}function An(n){for(var i=[],o=0;31>o;o++)i.push(n);return i}function an(n,i,o){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-ct(i),n[i]=o}function pn(n,i){var o=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var d=31-ct(o),p=1<<d;i[d]=0,c[d]=-1,n[d]=-1,o&=~p}}function ln(n,i){var o=n.entangledLanes|=i;for(n=n.entanglements;o;){var c=31-ct(o),d=1<<c;d&i|n[c]&i&&(n[c]|=i),o&=~d}}var Et=0;function Si(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var od,kl,ad,ld,cd,Hl=!1,oa=[],nr=null,ir=null,rr=null,io=new Map,ro=new Map,sr=[],Sg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function ud(n,i){switch(n){case"focusin":case"focusout":nr=null;break;case"dragenter":case"dragleave":ir=null;break;case"mouseover":case"mouseout":rr=null;break;case"pointerover":case"pointerout":io.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":ro.delete(i.pointerId)}}function so(n,i,o,c,d,p){return n===null||n.nativeEvent!==p?(n={blockedOn:i,domEventName:o,eventSystemFlags:c,nativeEvent:p,targetContainers:[d]},i!==null&&(i=Ao(i),i!==null&&kl(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function yg(n,i,o,c,d){switch(i){case"focusin":return nr=so(nr,n,i,o,c,d),!0;case"dragenter":return ir=so(ir,n,i,o,c,d),!0;case"mouseover":return rr=so(rr,n,i,o,c,d),!0;case"pointerover":var p=d.pointerId;return io.set(p,so(io.get(p)||null,n,i,o,c,d)),!0;case"gotpointercapture":return p=d.pointerId,ro.set(p,so(ro.get(p)||null,n,i,o,c,d)),!0}return!1}function fd(n){var i=Ur(n.target);if(i!==null){var o=Ai(i);if(o!==null){if(i=o.tag,i===13){if(i=ta(o),i!==null){n.blockedOn=i,cd(n.priority,function(){ad(o)});return}}else if(i===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function aa(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var o=Vl(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);rt=c,o.target.dispatchEvent(c),rt=null}else return i=Ao(o),i!==null&&kl(i),n.blockedOn=o,!1;i.shift()}return!0}function dd(n,i,o){aa(n)&&o.delete(i)}function Eg(){Hl=!1,nr!==null&&aa(nr)&&(nr=null),ir!==null&&aa(ir)&&(ir=null),rr!==null&&aa(rr)&&(rr=null),io.forEach(dd),ro.forEach(dd)}function oo(n,i){n.blockedOn===i&&(n.blockedOn=null,Hl||(Hl=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Eg)))}function ao(n){function i(d){return oo(d,n)}if(0<oa.length){oo(oa[0],n);for(var o=1;o<oa.length;o++){var c=oa[o];c.blockedOn===n&&(c.blockedOn=null)}}for(nr!==null&&oo(nr,n),ir!==null&&oo(ir,n),rr!==null&&oo(rr,n),io.forEach(i),ro.forEach(i),o=0;o<sr.length;o++)c=sr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<sr.length&&(o=sr[0],o.blockedOn===null);)fd(o),o.blockedOn===null&&sr.shift()}var ls=R.ReactCurrentBatchConfig,la=!0;function Mg(n,i,o,c){var d=Et,p=ls.transition;ls.transition=null;try{Et=1,Gl(n,i,o,c)}finally{Et=d,ls.transition=p}}function wg(n,i,o,c){var d=Et,p=ls.transition;ls.transition=null;try{Et=4,Gl(n,i,o,c)}finally{Et=d,ls.transition=p}}function Gl(n,i,o,c){if(la){var d=Vl(n,i,o,c);if(d===null)oc(n,i,c,ca,o),ud(n,c);else if(yg(d,n,i,o,c))c.stopPropagation();else if(ud(n,c),i&4&&-1<Sg.indexOf(n)){for(;d!==null;){var p=Ao(d);if(p!==null&&od(p),p=Vl(n,i,o,c),p===null&&oc(n,i,c,ca,o),p===d)break;d=p}d!==null&&c.stopPropagation()}else oc(n,i,c,null,o)}}var ca=null;function Vl(n,i,o,c){if(ca=null,n=k(c),n=Ur(n),n!==null)if(i=Ai(n),i===null)n=null;else if(o=i.tag,o===13){if(n=ta(i),n!==null)return n;n=null}else if(o===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return ca=n,null}function hd(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(X()){case Ee:return 1;case be:return 4;case Fe:case Ne:return 16;case it:return 536870912;default:return 16}default:return 16}}var or=null,Wl=null,ua=null;function pd(){if(ua)return ua;var n,i=Wl,o=i.length,c,d="value"in or?or.value:or.textContent,p=d.length;for(n=0;n<o&&i[n]===d[n];n++);var y=o-n;for(c=1;c<=y&&i[o-c]===d[p-c];c++);return ua=d.slice(n,1<c?1-c:void 0)}function fa(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function da(){return!0}function md(){return!1}function Wn(n){function i(o,c,d,p,y){this._reactName=o,this._targetInst=d,this.type=c,this.nativeEvent=p,this.target=y,this.currentTarget=null;for(var P in n)n.hasOwnProperty(P)&&(o=n[P],this[P]=o?o(p):p[P]);return this.isDefaultPrevented=(p.defaultPrevented!=null?p.defaultPrevented:p.returnValue===!1)?da:md,this.isPropagationStopped=md,this}return re(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=da)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=da)},persist:function(){},isPersistent:da}),i}var cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Xl=Wn(cs),lo=re({},cs,{view:0,detail:0}),Tg=Wn(lo),jl,Yl,co,ha=re({},lo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Kl,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==co&&(co&&n.type==="mousemove"?(jl=n.screenX-co.screenX,Yl=n.screenY-co.screenY):Yl=jl=0,co=n),jl)},movementY:function(n){return"movementY"in n?n.movementY:Yl}}),gd=Wn(ha),Cg=re({},ha,{dataTransfer:0}),Rg=Wn(Cg),Dg=re({},lo,{relatedTarget:0}),Ql=Wn(Dg),bg=re({},cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Pg=Wn(bg),Ig=re({},cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Lg=Wn(Ig),Ug=re({},cs,{data:0}),vd=Wn(Ug),Bg={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Ng={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Og(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Fg[n])?!!i[n]:!1}function Kl(){return Og}var zg=re({},lo,{key:function(n){if(n.key){var i=Bg[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=fa(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Ng[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Kl,charCode:function(n){return n.type==="keypress"?fa(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?fa(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),kg=Wn(zg),Hg=re({},ha,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),xd=Wn(Hg),Gg=re({},lo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Kl}),Vg=Wn(Gg),Wg=re({},cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xg=Wn(Wg),jg=re({},ha,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Yg=Wn(jg),Qg=[9,13,27,32],ql=f&&"CompositionEvent"in window,uo=null;f&&"documentMode"in document&&(uo=document.documentMode);var Kg=f&&"TextEvent"in window&&!uo,_d=f&&(!ql||uo&&8<uo&&11>=uo),Ad=" ",Sd=!1;function yd(n,i){switch(n){case"keyup":return Qg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Ed(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var us=!1;function qg(n,i){switch(n){case"compositionend":return Ed(i);case"keypress":return i.which!==32?null:(Sd=!0,Ad);case"textInput":return n=i.data,n===Ad&&Sd?null:n;default:return null}}function Zg(n,i){if(us)return n==="compositionend"||!ql&&yd(n,i)?(n=pd(),ua=Wl=or=null,us=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return _d&&i.locale!=="ko"?null:i.data;default:return null}}var Jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Md(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Jg[n.type]:i==="textarea"}function wd(n,i,o,c){he(c),i=xa(i,"onChange"),0<i.length&&(o=new Xl("onChange","change",null,o,c),n.push({event:o,listeners:i}))}var fo=null,ho=null;function $g(n){Vd(n,0)}function pa(n){var i=ms(n);if(Bt(i))return n}function ev(n,i){if(n==="change")return i}var Td=!1;if(f){var Zl;if(f){var Jl="oninput"in document;if(!Jl){var Cd=document.createElement("div");Cd.setAttribute("oninput","return;"),Jl=typeof Cd.oninput=="function"}Zl=Jl}else Zl=!1;Td=Zl&&(!document.documentMode||9<document.documentMode)}function Rd(){fo&&(fo.detachEvent("onpropertychange",Dd),ho=fo=null)}function Dd(n){if(n.propertyName==="value"&&pa(ho)){var i=[];wd(i,ho,n,k(n)),Bn($g,i)}}function tv(n,i,o){n==="focusin"?(Rd(),fo=i,ho=o,fo.attachEvent("onpropertychange",Dd)):n==="focusout"&&Rd()}function nv(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return pa(ho)}function iv(n,i){if(n==="click")return pa(i)}function rv(n,i){if(n==="input"||n==="change")return pa(i)}function sv(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var li=typeof Object.is=="function"?Object.is:sv;function po(n,i){if(li(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var o=Object.keys(n),c=Object.keys(i);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var d=o[c];if(!h.call(i,d)||!li(n[d],i[d]))return!1}return!0}function bd(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Pd(n,i){var o=bd(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=i&&c>=i)return{node:o,offset:i-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=bd(o)}}function Id(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?Id(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function Ld(){for(var n=window,i=gt();i instanceof n.HTMLIFrameElement;){try{var o=typeof i.contentWindow.location.href=="string"}catch{o=!1}if(o)n=i.contentWindow;else break;i=gt(n.document)}return i}function $l(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function ov(n){var i=Ld(),o=n.focusedElem,c=n.selectionRange;if(i!==o&&o&&o.ownerDocument&&Id(o.ownerDocument.documentElement,o)){if(c!==null&&$l(o)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in o)o.selectionStart=i,o.selectionEnd=Math.min(n,o.value.length);else if(n=(i=o.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=o.textContent.length,p=Math.min(c.start,d);c=c.end===void 0?p:Math.min(c.end,d),!n.extend&&p>c&&(d=c,c=p,p=d),d=Pd(o,p);var y=Pd(o,c);d&&y&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==y.node||n.focusOffset!==y.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),p>c?(n.addRange(i),n.extend(y.node,y.offset)):(i.setEnd(y.node,y.offset),n.addRange(i)))}}for(i=[],n=o;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<i.length;o++)n=i[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var av=f&&"documentMode"in document&&11>=document.documentMode,fs=null,ec=null,mo=null,tc=!1;function Ud(n,i,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;tc||fs==null||fs!==gt(c)||(c=fs,"selectionStart"in c&&$l(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),mo&&po(mo,c)||(mo=c,c=xa(ec,"onSelect"),0<c.length&&(i=new Xl("onSelect","select",null,i,o),n.push({event:i,listeners:c}),i.target=fs)))}function ma(n,i){var o={};return o[n.toLowerCase()]=i.toLowerCase(),o["Webkit"+n]="webkit"+i,o["Moz"+n]="moz"+i,o}var ds={animationend:ma("Animation","AnimationEnd"),animationiteration:ma("Animation","AnimationIteration"),animationstart:ma("Animation","AnimationStart"),transitionend:ma("Transition","TransitionEnd")},nc={},Bd={};f&&(Bd=document.createElement("div").style,"AnimationEvent"in window||(delete ds.animationend.animation,delete ds.animationiteration.animation,delete ds.animationstart.animation),"TransitionEvent"in window||delete ds.transitionend.transition);function ga(n){if(nc[n])return nc[n];if(!ds[n])return n;var i=ds[n],o;for(o in i)if(i.hasOwnProperty(o)&&o in Bd)return nc[n]=i[o];return n}var Nd=ga("animationend"),Fd=ga("animationiteration"),Od=ga("animationstart"),zd=ga("transitionend"),kd=new Map,Hd="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function ar(n,i){kd.set(n,i),l(i,[n])}for(var ic=0;ic<Hd.length;ic++){var rc=Hd[ic],lv=rc.toLowerCase(),cv=rc[0].toUpperCase()+rc.slice(1);ar(lv,"on"+cv)}ar(Nd,"onAnimationEnd"),ar(Fd,"onAnimationIteration"),ar(Od,"onAnimationStart"),ar("dblclick","onDoubleClick"),ar("focusin","onFocus"),ar("focusout","onBlur"),ar(zd,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var go="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),uv=new Set("cancel close invalid load scroll toggle".split(" ").concat(go));function Gd(n,i,o){var c=n.type||"unknown-event";n.currentTarget=o,ea(c,i,void 0,n),n.currentTarget=null}function Vd(n,i){i=(i&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],d=c.event;c=c.listeners;e:{var p=void 0;if(i)for(var y=c.length-1;0<=y;y--){var P=c[y],N=P.instance,$=P.currentTarget;if(P=P.listener,N!==p&&d.isPropagationStopped())break e;Gd(d,P,$),p=N}else for(y=0;y<c.length;y++){if(P=c[y],N=P.instance,$=P.currentTarget,P=P.listener,N!==p&&d.isPropagationStopped())break e;Gd(d,P,$),p=N}}}if(Lr)throw n=er,Lr=!1,er=null,n}function Ot(n,i){var o=i[dc];o===void 0&&(o=i[dc]=new Set);var c=n+"__bubble";o.has(c)||(Wd(i,n,2,!1),o.add(c))}function sc(n,i,o){var c=0;i&&(c|=4),Wd(o,n,c,i)}var va="_reactListening"+Math.random().toString(36).slice(2);function vo(n){if(!n[va]){n[va]=!0,s.forEach(function(o){o!=="selectionchange"&&(uv.has(o)||sc(o,!1,n),sc(o,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[va]||(i[va]=!0,sc("selectionchange",!1,i))}}function Wd(n,i,o,c){switch(hd(i)){case 1:var d=Mg;break;case 4:d=wg;break;default:d=Gl}o=d.bind(null,i,o,n),d=void 0,!os||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,o,{capture:!0,passive:d}):n.addEventListener(i,o,!0):d!==void 0?n.addEventListener(i,o,{passive:d}):n.addEventListener(i,o,!1)}function oc(n,i,o,c,d){var p=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var y=c.tag;if(y===3||y===4){var P=c.stateNode.containerInfo;if(P===d||P.nodeType===8&&P.parentNode===d)break;if(y===4)for(y=c.return;y!==null;){var N=y.tag;if((N===3||N===4)&&(N=y.stateNode.containerInfo,N===d||N.nodeType===8&&N.parentNode===d))return;y=y.return}for(;P!==null;){if(y=Ur(P),y===null)return;if(N=y.tag,N===5||N===6){c=p=y;continue e}P=P.parentNode}}c=c.return}Bn(function(){var $=p,_e=k(o),Se=[];e:{var ge=kd.get(n);if(ge!==void 0){var Le=Xl,Ge=n;switch(n){case"keypress":if(fa(o)===0)break e;case"keydown":case"keyup":Le=kg;break;case"focusin":Ge="focus",Le=Ql;break;case"focusout":Ge="blur",Le=Ql;break;case"beforeblur":case"afterblur":Le=Ql;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Le=gd;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Le=Rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Le=Vg;break;case Nd:case Fd:case Od:Le=Pg;break;case zd:Le=Xg;break;case"scroll":Le=Tg;break;case"wheel":Le=Yg;break;case"copy":case"cut":case"paste":Le=Lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Le=xd}var Ve=(i&4)!==0,qt=!Ve&&n==="scroll",Q=Ve?ge!==null?ge+"Capture":null:ge;Ve=[];for(var G=$,q;G!==null;){q=G;var Me=q.stateNode;if(q.tag===5&&Me!==null&&(q=Me,Q!==null&&(Me=bn(G,Q),Me!=null&&Ve.push(xo(G,Me,q)))),qt)break;G=G.return}0<Ve.length&&(ge=new Le(ge,Ge,null,o,_e),Se.push({event:ge,listeners:Ve}))}}if((i&7)===0){e:{if(ge=n==="mouseover"||n==="pointerover",Le=n==="mouseout"||n==="pointerout",ge&&o!==rt&&(Ge=o.relatedTarget||o.fromElement)&&(Ur(Ge)||Ge[Ii]))break e;if((Le||ge)&&(ge=_e.window===_e?_e:(ge=_e.ownerDocument)?ge.defaultView||ge.parentWindow:window,Le?(Ge=o.relatedTarget||o.toElement,Le=$,Ge=Ge?Ur(Ge):null,Ge!==null&&(qt=Ai(Ge),Ge!==qt||Ge.tag!==5&&Ge.tag!==6)&&(Ge=null)):(Le=null,Ge=$),Le!==Ge)){if(Ve=gd,Me="onMouseLeave",Q="onMouseEnter",G="mouse",(n==="pointerout"||n==="pointerover")&&(Ve=xd,Me="onPointerLeave",Q="onPointerEnter",G="pointer"),qt=Le==null?ge:ms(Le),q=Ge==null?ge:ms(Ge),ge=new Ve(Me,G+"leave",Le,o,_e),ge.target=qt,ge.relatedTarget=q,Me=null,Ur(_e)===$&&(Ve=new Ve(Q,G+"enter",Ge,o,_e),Ve.target=q,Ve.relatedTarget=qt,Me=Ve),qt=Me,Le&&Ge)t:{for(Ve=Le,Q=Ge,G=0,q=Ve;q;q=hs(q))G++;for(q=0,Me=Q;Me;Me=hs(Me))q++;for(;0<G-q;)Ve=hs(Ve),G--;for(;0<q-G;)Q=hs(Q),q--;for(;G--;){if(Ve===Q||Q!==null&&Ve===Q.alternate)break t;Ve=hs(Ve),Q=hs(Q)}Ve=null}else Ve=null;Le!==null&&Xd(Se,ge,Le,Ve,!1),Ge!==null&&qt!==null&&Xd(Se,qt,Ge,Ve,!0)}}e:{if(ge=$?ms($):window,Le=ge.nodeName&&ge.nodeName.toLowerCase(),Le==="select"||Le==="input"&&ge.type==="file")var je=ev;else if(Md(ge))if(Td)je=rv;else{je=nv;var $e=tv}else(Le=ge.nodeName)&&Le.toLowerCase()==="input"&&(ge.type==="checkbox"||ge.type==="radio")&&(je=iv);if(je&&(je=je(n,$))){wd(Se,je,o,_e);break e}$e&&$e(n,ge,$),n==="focusout"&&($e=ge._wrapperState)&&$e.controlled&&ge.type==="number"&&vt(ge,"number",ge.value)}switch($e=$?ms($):window,n){case"focusin":(Md($e)||$e.contentEditable==="true")&&(fs=$e,ec=$,mo=null);break;case"focusout":mo=ec=fs=null;break;case"mousedown":tc=!0;break;case"contextmenu":case"mouseup":case"dragend":tc=!1,Ud(Se,o,_e);break;case"selectionchange":if(av)break;case"keydown":case"keyup":Ud(Se,o,_e)}var et;if(ql)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else us?yd(n,o)&&(ot="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ot="onCompositionStart");ot&&(_d&&o.locale!=="ko"&&(us||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&us&&(et=pd()):(or=_e,Wl="value"in or?or.value:or.textContent,us=!0)),$e=xa($,ot),0<$e.length&&(ot=new vd(ot,n,null,o,_e),Se.push({event:ot,listeners:$e}),et?ot.data=et:(et=Ed(o),et!==null&&(ot.data=et)))),(et=Kg?qg(n,o):Zg(n,o))&&($=xa($,"onBeforeInput"),0<$.length&&(_e=new vd("onBeforeInput","beforeinput",null,o,_e),Se.push({event:_e,listeners:$}),_e.data=et))}Vd(Se,i)})}function xo(n,i,o){return{instance:n,listener:i,currentTarget:o}}function xa(n,i){for(var o=i+"Capture",c=[];n!==null;){var d=n,p=d.stateNode;d.tag===5&&p!==null&&(d=p,p=bn(n,o),p!=null&&c.unshift(xo(n,p,d)),p=bn(n,i),p!=null&&c.push(xo(n,p,d))),n=n.return}return c}function hs(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Xd(n,i,o,c,d){for(var p=i._reactName,y=[];o!==null&&o!==c;){var P=o,N=P.alternate,$=P.stateNode;if(N!==null&&N===c)break;P.tag===5&&$!==null&&(P=$,d?(N=bn(o,p),N!=null&&y.unshift(xo(o,N,P))):d||(N=bn(o,p),N!=null&&y.push(xo(o,N,P)))),o=o.return}y.length!==0&&n.push({event:i,listeners:y})}var fv=/\r\n?/g,dv=/\u0000|\uFFFD/g;function jd(n){return(typeof n=="string"?n:""+n).replace(fv,`
`).replace(dv,"")}function _a(n,i,o){if(i=jd(i),jd(n)!==i&&o)throw Error(t(425))}function Aa(){}var ac=null,lc=null;function cc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var uc=typeof setTimeout=="function"?setTimeout:void 0,hv=typeof clearTimeout=="function"?clearTimeout:void 0,Yd=typeof Promise=="function"?Promise:void 0,pv=typeof queueMicrotask=="function"?queueMicrotask:typeof Yd<"u"?function(n){return Yd.resolve(null).then(n).catch(mv)}:uc;function mv(n){setTimeout(function(){throw n})}function fc(n,i){var o=i,c=0;do{var d=o.nextSibling;if(n.removeChild(o),d&&d.nodeType===8)if(o=d.data,o==="/$"){if(c===0){n.removeChild(d),ao(i);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=d}while(o);ao(i)}function lr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Qd(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(i===0)return n;i--}else o==="/$"&&i++}n=n.previousSibling}return null}var ps=Math.random().toString(36).slice(2),yi="__reactFiber$"+ps,_o="__reactProps$"+ps,Ii="__reactContainer$"+ps,dc="__reactEvents$"+ps,gv="__reactListeners$"+ps,vv="__reactHandles$"+ps;function Ur(n){var i=n[yi];if(i)return i;for(var o=n.parentNode;o;){if(i=o[Ii]||o[yi]){if(o=i.alternate,i.child!==null||o!==null&&o.child!==null)for(n=Qd(n);n!==null;){if(o=n[yi])return o;n=Qd(n)}return i}n=o,o=n.parentNode}return null}function Ao(n){return n=n[yi]||n[Ii],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ms(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Sa(n){return n[_o]||null}var hc=[],gs=-1;function cr(n){return{current:n}}function zt(n){0>gs||(n.current=hc[gs],hc[gs]=null,gs--)}function Nt(n,i){gs++,hc[gs]=n.current,n.current=i}var ur={},Sn=cr(ur),Nn=cr(!1),Br=ur;function vs(n,i){var o=n.type.contextTypes;if(!o)return ur;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},p;for(p in o)d[p]=i[p];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Fn(n){return n=n.childContextTypes,n!=null}function ya(){zt(Nn),zt(Sn)}function Kd(n,i,o){if(Sn.current!==ur)throw Error(t(168));Nt(Sn,i),Nt(Nn,o)}function qd(n,i,o){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,Ae(n)||"Unknown",d));return re({},o,c)}function Ea(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||ur,Br=Sn.current,Nt(Sn,n),Nt(Nn,Nn.current),!0}function Zd(n,i,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=qd(n,i,Br),c.__reactInternalMemoizedMergedChildContext=n,zt(Nn),zt(Sn),Nt(Sn,n)):zt(Nn),Nt(Nn,o)}var Li=null,Ma=!1,pc=!1;function Jd(n){Li===null?Li=[n]:Li.push(n)}function xv(n){Ma=!0,Jd(n)}function fr(){if(!pc&&Li!==null){pc=!0;var n=0,i=Et;try{var o=Li;for(Et=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Li=null,Ma=!1}catch(d){throw Li!==null&&(Li=Li.slice(n+1)),sa(Ee,fr),d}finally{Et=i,pc=!1}}return null}var xs=[],_s=0,wa=null,Ta=0,$n=[],ei=0,Nr=null,Ui=1,Bi="";function Fr(n,i){xs[_s++]=Ta,xs[_s++]=wa,wa=n,Ta=i}function $d(n,i,o){$n[ei++]=Ui,$n[ei++]=Bi,$n[ei++]=Nr,Nr=n;var c=Ui;n=Bi;var d=32-ct(c)-1;c&=~(1<<d),o+=1;var p=32-ct(i)+d;if(30<p){var y=d-d%5;p=(c&(1<<y)-1).toString(32),c>>=y,d-=y,Ui=1<<32-ct(i)+d|o<<d|c,Bi=p+n}else Ui=1<<p|o<<d|c,Bi=n}function mc(n){n.return!==null&&(Fr(n,1),$d(n,1,0))}function gc(n){for(;n===wa;)wa=xs[--_s],xs[_s]=null,Ta=xs[--_s],xs[_s]=null;for(;n===Nr;)Nr=$n[--ei],$n[ei]=null,Bi=$n[--ei],$n[ei]=null,Ui=$n[--ei],$n[ei]=null}var Xn=null,jn=null,Gt=!1,ci=null;function eh(n,i){var o=ri(5,null,null,0);o.elementType="DELETED",o.stateNode=i,o.return=n,i=n.deletions,i===null?(n.deletions=[o],n.flags|=16):i.push(o)}function th(n,i){switch(n.tag){case 5:var o=n.type;return i=i.nodeType!==1||o.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,Xn=n,jn=lr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,Xn=n,jn=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(o=Nr!==null?{id:Ui,overflow:Bi}:null,n.memoizedState={dehydrated:i,treeContext:o,retryLane:1073741824},o=ri(18,null,null,0),o.stateNode=i,o.return=n,n.child=o,Xn=n,jn=null,!0):!1;default:return!1}}function vc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function xc(n){if(Gt){var i=jn;if(i){var o=i;if(!th(n,i)){if(vc(n))throw Error(t(418));i=lr(o.nextSibling);var c=Xn;i&&th(n,i)?eh(c,o):(n.flags=n.flags&-4097|2,Gt=!1,Xn=n)}}else{if(vc(n))throw Error(t(418));n.flags=n.flags&-4097|2,Gt=!1,Xn=n}}}function nh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Xn=n}function Ca(n){if(n!==Xn)return!1;if(!Gt)return nh(n),Gt=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!cc(n.type,n.memoizedProps)),i&&(i=jn)){if(vc(n))throw ih(),Error(t(418));for(;i;)eh(n,i),i=lr(i.nextSibling)}if(nh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(i===0){jn=lr(n.nextSibling);break e}i--}else o!=="$"&&o!=="$!"&&o!=="$?"||i++}n=n.nextSibling}jn=null}}else jn=Xn?lr(n.stateNode.nextSibling):null;return!0}function ih(){for(var n=jn;n;)n=lr(n.nextSibling)}function As(){jn=Xn=null,Gt=!1}function _c(n){ci===null?ci=[n]:ci.push(n)}var _v=R.ReactCurrentBatchConfig;function So(n,i,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var d=c,p=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===p?i.ref:(i=function(y){var P=d.refs;y===null?delete P[p]:P[p]=y},i._stringRef=p,i)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function Ra(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function rh(n){var i=n._init;return i(n._payload)}function sh(n){function i(Q,G){if(n){var q=Q.deletions;q===null?(Q.deletions=[G],Q.flags|=16):q.push(G)}}function o(Q,G){if(!n)return null;for(;G!==null;)i(Q,G),G=G.sibling;return null}function c(Q,G){for(Q=new Map;G!==null;)G.key!==null?Q.set(G.key,G):Q.set(G.index,G),G=G.sibling;return Q}function d(Q,G){return Q=_r(Q,G),Q.index=0,Q.sibling=null,Q}function p(Q,G,q){return Q.index=q,n?(q=Q.alternate,q!==null?(q=q.index,q<G?(Q.flags|=2,G):q):(Q.flags|=2,G)):(Q.flags|=1048576,G)}function y(Q){return n&&Q.alternate===null&&(Q.flags|=2),Q}function P(Q,G,q,Me){return G===null||G.tag!==6?(G=uu(q,Q.mode,Me),G.return=Q,G):(G=d(G,q),G.return=Q,G)}function N(Q,G,q,Me){var je=q.type;return je===F?_e(Q,G,q.props.children,Me,q.key):G!==null&&(G.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&rh(je)===G.type)?(Me=d(G,q.props),Me.ref=So(Q,G,q),Me.return=Q,Me):(Me=Ja(q.type,q.key,q.props,null,Q.mode,Me),Me.ref=So(Q,G,q),Me.return=Q,Me)}function $(Q,G,q,Me){return G===null||G.tag!==4||G.stateNode.containerInfo!==q.containerInfo||G.stateNode.implementation!==q.implementation?(G=fu(q,Q.mode,Me),G.return=Q,G):(G=d(G,q.children||[]),G.return=Q,G)}function _e(Q,G,q,Me,je){return G===null||G.tag!==7?(G=Xr(q,Q.mode,Me,je),G.return=Q,G):(G=d(G,q),G.return=Q,G)}function Se(Q,G,q){if(typeof G=="string"&&G!==""||typeof G=="number")return G=uu(""+G,Q.mode,q),G.return=Q,G;if(typeof G=="object"&&G!==null){switch(G.$$typeof){case j:return q=Ja(G.type,G.key,G.props,null,Q.mode,q),q.ref=So(Q,null,G),q.return=Q,q;case V:return G=fu(G,Q.mode,q),G.return=Q,G;case oe:var Me=G._init;return Se(Q,Me(G._payload),q)}if(Ke(G)||le(G))return G=Xr(G,Q.mode,q,null),G.return=Q,G;Ra(Q,G)}return null}function ge(Q,G,q,Me){var je=G!==null?G.key:null;if(typeof q=="string"&&q!==""||typeof q=="number")return je!==null?null:P(Q,G,""+q,Me);if(typeof q=="object"&&q!==null){switch(q.$$typeof){case j:return q.key===je?N(Q,G,q,Me):null;case V:return q.key===je?$(Q,G,q,Me):null;case oe:return je=q._init,ge(Q,G,je(q._payload),Me)}if(Ke(q)||le(q))return je!==null?null:_e(Q,G,q,Me,null);Ra(Q,q)}return null}function Le(Q,G,q,Me,je){if(typeof Me=="string"&&Me!==""||typeof Me=="number")return Q=Q.get(q)||null,P(G,Q,""+Me,je);if(typeof Me=="object"&&Me!==null){switch(Me.$$typeof){case j:return Q=Q.get(Me.key===null?q:Me.key)||null,N(G,Q,Me,je);case V:return Q=Q.get(Me.key===null?q:Me.key)||null,$(G,Q,Me,je);case oe:var $e=Me._init;return Le(Q,G,q,$e(Me._payload),je)}if(Ke(Me)||le(Me))return Q=Q.get(q)||null,_e(G,Q,Me,je,null);Ra(G,Me)}return null}function Ge(Q,G,q,Me){for(var je=null,$e=null,et=G,ot=G=0,fn=null;et!==null&&ot<q.length;ot++){et.index>ot?(fn=et,et=null):fn=et.sibling;var wt=ge(Q,et,q[ot],Me);if(wt===null){et===null&&(et=fn);break}n&&et&&wt.alternate===null&&i(Q,et),G=p(wt,G,ot),$e===null?je=wt:$e.sibling=wt,$e=wt,et=fn}if(ot===q.length)return o(Q,et),Gt&&Fr(Q,ot),je;if(et===null){for(;ot<q.length;ot++)et=Se(Q,q[ot],Me),et!==null&&(G=p(et,G,ot),$e===null?je=et:$e.sibling=et,$e=et);return Gt&&Fr(Q,ot),je}for(et=c(Q,et);ot<q.length;ot++)fn=Le(et,Q,ot,q[ot],Me),fn!==null&&(n&&fn.alternate!==null&&et.delete(fn.key===null?ot:fn.key),G=p(fn,G,ot),$e===null?je=fn:$e.sibling=fn,$e=fn);return n&&et.forEach(function(Ar){return i(Q,Ar)}),Gt&&Fr(Q,ot),je}function Ve(Q,G,q,Me){var je=le(q);if(typeof je!="function")throw Error(t(150));if(q=je.call(q),q==null)throw Error(t(151));for(var $e=je=null,et=G,ot=G=0,fn=null,wt=q.next();et!==null&&!wt.done;ot++,wt=q.next()){et.index>ot?(fn=et,et=null):fn=et.sibling;var Ar=ge(Q,et,wt.value,Me);if(Ar===null){et===null&&(et=fn);break}n&&et&&Ar.alternate===null&&i(Q,et),G=p(Ar,G,ot),$e===null?je=Ar:$e.sibling=Ar,$e=Ar,et=fn}if(wt.done)return o(Q,et),Gt&&Fr(Q,ot),je;if(et===null){for(;!wt.done;ot++,wt=q.next())wt=Se(Q,wt.value,Me),wt!==null&&(G=p(wt,G,ot),$e===null?je=wt:$e.sibling=wt,$e=wt);return Gt&&Fr(Q,ot),je}for(et=c(Q,et);!wt.done;ot++,wt=q.next())wt=Le(et,Q,ot,wt.value,Me),wt!==null&&(n&&wt.alternate!==null&&et.delete(wt.key===null?ot:wt.key),G=p(wt,G,ot),$e===null?je=wt:$e.sibling=wt,$e=wt);return n&&et.forEach(function(Jv){return i(Q,Jv)}),Gt&&Fr(Q,ot),je}function qt(Q,G,q,Me){if(typeof q=="object"&&q!==null&&q.type===F&&q.key===null&&(q=q.props.children),typeof q=="object"&&q!==null){switch(q.$$typeof){case j:e:{for(var je=q.key,$e=G;$e!==null;){if($e.key===je){if(je=q.type,je===F){if($e.tag===7){o(Q,$e.sibling),G=d($e,q.props.children),G.return=Q,Q=G;break e}}else if($e.elementType===je||typeof je=="object"&&je!==null&&je.$$typeof===oe&&rh(je)===$e.type){o(Q,$e.sibling),G=d($e,q.props),G.ref=So(Q,$e,q),G.return=Q,Q=G;break e}o(Q,$e);break}else i(Q,$e);$e=$e.sibling}q.type===F?(G=Xr(q.props.children,Q.mode,Me,q.key),G.return=Q,Q=G):(Me=Ja(q.type,q.key,q.props,null,Q.mode,Me),Me.ref=So(Q,G,q),Me.return=Q,Q=Me)}return y(Q);case V:e:{for($e=q.key;G!==null;){if(G.key===$e)if(G.tag===4&&G.stateNode.containerInfo===q.containerInfo&&G.stateNode.implementation===q.implementation){o(Q,G.sibling),G=d(G,q.children||[]),G.return=Q,Q=G;break e}else{o(Q,G);break}else i(Q,G);G=G.sibling}G=fu(q,Q.mode,Me),G.return=Q,Q=G}return y(Q);case oe:return $e=q._init,qt(Q,G,$e(q._payload),Me)}if(Ke(q))return Ge(Q,G,q,Me);if(le(q))return Ve(Q,G,q,Me);Ra(Q,q)}return typeof q=="string"&&q!==""||typeof q=="number"?(q=""+q,G!==null&&G.tag===6?(o(Q,G.sibling),G=d(G,q),G.return=Q,Q=G):(o(Q,G),G=uu(q,Q.mode,Me),G.return=Q,Q=G),y(Q)):o(Q,G)}return qt}var Ss=sh(!0),oh=sh(!1),Da=cr(null),ba=null,ys=null,Ac=null;function Sc(){Ac=ys=ba=null}function yc(n){var i=Da.current;zt(Da),n._currentValue=i}function Ec(n,i,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===o)break;n=n.return}}function Es(n,i){ba=n,Ac=ys=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(On=!0),n.firstContext=null)}function ti(n){var i=n._currentValue;if(Ac!==n)if(n={context:n,memoizedValue:i,next:null},ys===null){if(ba===null)throw Error(t(308));ys=n,ba.dependencies={lanes:0,firstContext:n}}else ys=ys.next=n;return i}var Or=null;function Mc(n){Or===null?Or=[n]:Or.push(n)}function ah(n,i,o,c){var d=i.interleaved;return d===null?(o.next=o,Mc(i)):(o.next=d.next,d.next=o),i.interleaved=o,Ni(n,c)}function Ni(n,i){n.lanes|=i;var o=n.alternate;for(o!==null&&(o.lanes|=i),o=n,n=n.return;n!==null;)n.childLanes|=i,o=n.alternate,o!==null&&(o.childLanes|=i),o=n,n=n.return;return o.tag===3?o.stateNode:null}var dr=!1;function wc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function lh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Fi(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function hr(n,i,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Mt&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,Ni(n,o)}return d=c.interleaved,d===null?(i.next=i,Mc(c)):(i.next=d.next,d.next=i),c.interleaved=i,Ni(n,o)}function Pa(n,i,o){if(i=i.updateQueue,i!==null&&(i=i.shared,(o&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,ln(n,o)}}function ch(n,i){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var d=null,p=null;if(o=o.firstBaseUpdate,o!==null){do{var y={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};p===null?d=p=y:p=p.next=y,o=o.next}while(o!==null);p===null?d=p=i:p=p.next=i}else d=p=i;o={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:p,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=i:n.next=i,o.lastBaseUpdate=i}function Ia(n,i,o,c){var d=n.updateQueue;dr=!1;var p=d.firstBaseUpdate,y=d.lastBaseUpdate,P=d.shared.pending;if(P!==null){d.shared.pending=null;var N=P,$=N.next;N.next=null,y===null?p=$:y.next=$,y=N;var _e=n.alternate;_e!==null&&(_e=_e.updateQueue,P=_e.lastBaseUpdate,P!==y&&(P===null?_e.firstBaseUpdate=$:P.next=$,_e.lastBaseUpdate=N))}if(p!==null){var Se=d.baseState;y=0,_e=$=N=null,P=p;do{var ge=P.lane,Le=P.eventTime;if((c&ge)===ge){_e!==null&&(_e=_e.next={eventTime:Le,lane:0,tag:P.tag,payload:P.payload,callback:P.callback,next:null});e:{var Ge=n,Ve=P;switch(ge=i,Le=o,Ve.tag){case 1:if(Ge=Ve.payload,typeof Ge=="function"){Se=Ge.call(Le,Se,ge);break e}Se=Ge;break e;case 3:Ge.flags=Ge.flags&-65537|128;case 0:if(Ge=Ve.payload,ge=typeof Ge=="function"?Ge.call(Le,Se,ge):Ge,ge==null)break e;Se=re({},Se,ge);break e;case 2:dr=!0}}P.callback!==null&&P.lane!==0&&(n.flags|=64,ge=d.effects,ge===null?d.effects=[P]:ge.push(P))}else Le={eventTime:Le,lane:ge,tag:P.tag,payload:P.payload,callback:P.callback,next:null},_e===null?($=_e=Le,N=Se):_e=_e.next=Le,y|=ge;if(P=P.next,P===null){if(P=d.shared.pending,P===null)break;ge=P,P=ge.next,ge.next=null,d.lastBaseUpdate=ge,d.shared.pending=null}}while(!0);if(_e===null&&(N=Se),d.baseState=N,d.firstBaseUpdate=$,d.lastBaseUpdate=_e,i=d.shared.interleaved,i!==null){d=i;do y|=d.lane,d=d.next;while(d!==i)}else p===null&&(d.shared.lanes=0);Hr|=y,n.lanes=y,n.memoizedState=Se}}function uh(n,i,o){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=o,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var yo={},Ei=cr(yo),Eo=cr(yo),Mo=cr(yo);function zr(n){if(n===yo)throw Error(t(174));return n}function Tc(n,i){switch(Nt(Mo,i),Nt(Eo,n),Nt(Ei,yo),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:me(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=me(i,n)}zt(Ei),Nt(Ei,i)}function Ms(){zt(Ei),zt(Eo),zt(Mo)}function fh(n){zr(Mo.current);var i=zr(Ei.current),o=me(i,n.type);i!==o&&(Nt(Eo,n),Nt(Ei,o))}function Cc(n){Eo.current===n&&(zt(Ei),zt(Eo))}var Wt=cr(0);function La(n){for(var i=n;i!==null;){if(i.tag===13){var o=i.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Rc=[];function Dc(){for(var n=0;n<Rc.length;n++)Rc[n]._workInProgressVersionPrimary=null;Rc.length=0}var Ua=R.ReactCurrentDispatcher,bc=R.ReactCurrentBatchConfig,kr=0,Xt=null,en=null,cn=null,Ba=!1,wo=!1,To=0,Av=0;function yn(){throw Error(t(321))}function Pc(n,i){if(i===null)return!1;for(var o=0;o<i.length&&o<n.length;o++)if(!li(n[o],i[o]))return!1;return!0}function Ic(n,i,o,c,d,p){if(kr=p,Xt=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Ua.current=n===null||n.memoizedState===null?Mv:wv,n=o(c,d),wo){p=0;do{if(wo=!1,To=0,25<=p)throw Error(t(301));p+=1,cn=en=null,i.updateQueue=null,Ua.current=Tv,n=o(c,d)}while(wo)}if(Ua.current=Oa,i=en!==null&&en.next!==null,kr=0,cn=en=Xt=null,Ba=!1,i)throw Error(t(300));return n}function Lc(){var n=To!==0;return To=0,n}function Mi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return cn===null?Xt.memoizedState=cn=n:cn=cn.next=n,cn}function ni(){if(en===null){var n=Xt.alternate;n=n!==null?n.memoizedState:null}else n=en.next;var i=cn===null?Xt.memoizedState:cn.next;if(i!==null)cn=i,en=n;else{if(n===null)throw Error(t(310));en=n,n={memoizedState:en.memoizedState,baseState:en.baseState,baseQueue:en.baseQueue,queue:en.queue,next:null},cn===null?Xt.memoizedState=cn=n:cn=cn.next=n}return cn}function Co(n,i){return typeof i=="function"?i(n):i}function Uc(n){var i=ni(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=en,d=c.baseQueue,p=o.pending;if(p!==null){if(d!==null){var y=d.next;d.next=p.next,p.next=y}c.baseQueue=d=p,o.pending=null}if(d!==null){p=d.next,c=c.baseState;var P=y=null,N=null,$=p;do{var _e=$.lane;if((kr&_e)===_e)N!==null&&(N=N.next={lane:0,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null}),c=$.hasEagerState?$.eagerState:n(c,$.action);else{var Se={lane:_e,action:$.action,hasEagerState:$.hasEagerState,eagerState:$.eagerState,next:null};N===null?(P=N=Se,y=c):N=N.next=Se,Xt.lanes|=_e,Hr|=_e}$=$.next}while($!==null&&$!==p);N===null?y=c:N.next=P,li(c,i.memoizedState)||(On=!0),i.memoizedState=c,i.baseState=y,i.baseQueue=N,o.lastRenderedState=c}if(n=o.interleaved,n!==null){d=n;do p=d.lane,Xt.lanes|=p,Hr|=p,d=d.next;while(d!==n)}else d===null&&(o.lanes=0);return[i.memoizedState,o.dispatch]}function Bc(n){var i=ni(),o=i.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,d=o.pending,p=i.memoizedState;if(d!==null){o.pending=null;var y=d=d.next;do p=n(p,y.action),y=y.next;while(y!==d);li(p,i.memoizedState)||(On=!0),i.memoizedState=p,i.baseQueue===null&&(i.baseState=p),o.lastRenderedState=p}return[p,c]}function dh(){}function hh(n,i){var o=Xt,c=ni(),d=i(),p=!li(c.memoizedState,d);if(p&&(c.memoizedState=d,On=!0),c=c.queue,Nc(gh.bind(null,o,c,n),[n]),c.getSnapshot!==i||p||cn!==null&&cn.memoizedState.tag&1){if(o.flags|=2048,Ro(9,mh.bind(null,o,c,d,i),void 0,null),un===null)throw Error(t(349));(kr&30)!==0||ph(o,i,d)}return d}function ph(n,i,o){n.flags|=16384,n={getSnapshot:i,value:o},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.stores=[n]):(o=i.stores,o===null?i.stores=[n]:o.push(n))}function mh(n,i,o,c){i.value=o,i.getSnapshot=c,vh(i)&&xh(n)}function gh(n,i,o){return o(function(){vh(i)&&xh(n)})}function vh(n){var i=n.getSnapshot;n=n.value;try{var o=i();return!li(n,o)}catch{return!0}}function xh(n){var i=Ni(n,1);i!==null&&hi(i,n,1,-1)}function _h(n){var i=Mi();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Co,lastRenderedState:n},i.queue=n,n=n.dispatch=Ev.bind(null,Xt,n),[i.memoizedState,n]}function Ro(n,i,o,c){return n={tag:n,create:i,destroy:o,deps:c,next:null},i=Xt.updateQueue,i===null?(i={lastEffect:null,stores:null},Xt.updateQueue=i,i.lastEffect=n.next=n):(o=i.lastEffect,o===null?i.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,i.lastEffect=n)),n}function Ah(){return ni().memoizedState}function Na(n,i,o,c){var d=Mi();Xt.flags|=n,d.memoizedState=Ro(1|i,o,void 0,c===void 0?null:c)}function Fa(n,i,o,c){var d=ni();c=c===void 0?null:c;var p=void 0;if(en!==null){var y=en.memoizedState;if(p=y.destroy,c!==null&&Pc(c,y.deps)){d.memoizedState=Ro(i,o,p,c);return}}Xt.flags|=n,d.memoizedState=Ro(1|i,o,p,c)}function Sh(n,i){return Na(8390656,8,n,i)}function Nc(n,i){return Fa(2048,8,n,i)}function yh(n,i){return Fa(4,2,n,i)}function Eh(n,i){return Fa(4,4,n,i)}function Mh(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function wh(n,i,o){return o=o!=null?o.concat([n]):null,Fa(4,4,Mh.bind(null,i,n),o)}function Fc(){}function Th(n,i){var o=ni();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Pc(i,c[1])?c[0]:(o.memoizedState=[n,i],n)}function Ch(n,i){var o=ni();i=i===void 0?null:i;var c=o.memoizedState;return c!==null&&i!==null&&Pc(i,c[1])?c[0]:(n=n(),o.memoizedState=[n,i],n)}function Rh(n,i,o){return(kr&21)===0?(n.baseState&&(n.baseState=!1,On=!0),n.memoizedState=o):(li(o,i)||(o=Ut(),Xt.lanes|=o,Hr|=o,n.baseState=!0),i)}function Sv(n,i){var o=Et;Et=o!==0&&4>o?o:4,n(!0);var c=bc.transition;bc.transition={};try{n(!1),i()}finally{Et=o,bc.transition=c}}function Dh(){return ni().memoizedState}function yv(n,i,o){var c=vr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},bh(n))Ph(i,o);else if(o=ah(n,i,o,c),o!==null){var d=Ln();hi(o,n,c,d),Ih(o,i,c)}}function Ev(n,i,o){var c=vr(n),d={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(bh(n))Ph(i,d);else{var p=n.alternate;if(n.lanes===0&&(p===null||p.lanes===0)&&(p=i.lastRenderedReducer,p!==null))try{var y=i.lastRenderedState,P=p(y,o);if(d.hasEagerState=!0,d.eagerState=P,li(P,y)){var N=i.interleaved;N===null?(d.next=d,Mc(i)):(d.next=N.next,N.next=d),i.interleaved=d;return}}catch{}finally{}o=ah(n,i,d,c),o!==null&&(d=Ln(),hi(o,n,c,d),Ih(o,i,c))}}function bh(n){var i=n.alternate;return n===Xt||i!==null&&i===Xt}function Ph(n,i){wo=Ba=!0;var o=n.pending;o===null?i.next=i:(i.next=o.next,o.next=i),n.pending=i}function Ih(n,i,o){if((o&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,o|=c,i.lanes=o,ln(n,o)}}var Oa={readContext:ti,useCallback:yn,useContext:yn,useEffect:yn,useImperativeHandle:yn,useInsertionEffect:yn,useLayoutEffect:yn,useMemo:yn,useReducer:yn,useRef:yn,useState:yn,useDebugValue:yn,useDeferredValue:yn,useTransition:yn,useMutableSource:yn,useSyncExternalStore:yn,useId:yn,unstable_isNewReconciler:!1},Mv={readContext:ti,useCallback:function(n,i){return Mi().memoizedState=[n,i===void 0?null:i],n},useContext:ti,useEffect:Sh,useImperativeHandle:function(n,i,o){return o=o!=null?o.concat([n]):null,Na(4194308,4,Mh.bind(null,i,n),o)},useLayoutEffect:function(n,i){return Na(4194308,4,n,i)},useInsertionEffect:function(n,i){return Na(4,2,n,i)},useMemo:function(n,i){var o=Mi();return i=i===void 0?null:i,n=n(),o.memoizedState=[n,i],n},useReducer:function(n,i,o){var c=Mi();return i=o!==void 0?o(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=yv.bind(null,Xt,n),[c.memoizedState,n]},useRef:function(n){var i=Mi();return n={current:n},i.memoizedState=n},useState:_h,useDebugValue:Fc,useDeferredValue:function(n){return Mi().memoizedState=n},useTransition:function(){var n=_h(!1),i=n[0];return n=Sv.bind(null,n[1]),Mi().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,o){var c=Xt,d=Mi();if(Gt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=i(),un===null)throw Error(t(349));(kr&30)!==0||ph(c,i,o)}d.memoizedState=o;var p={value:o,getSnapshot:i};return d.queue=p,Sh(gh.bind(null,c,p,n),[n]),c.flags|=2048,Ro(9,mh.bind(null,c,p,o,i),void 0,null),o},useId:function(){var n=Mi(),i=un.identifierPrefix;if(Gt){var o=Bi,c=Ui;o=(c&~(1<<32-ct(c)-1)).toString(32)+o,i=":"+i+"R"+o,o=To++,0<o&&(i+="H"+o.toString(32)),i+=":"}else o=Av++,i=":"+i+"r"+o.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},wv={readContext:ti,useCallback:Th,useContext:ti,useEffect:Nc,useImperativeHandle:wh,useInsertionEffect:yh,useLayoutEffect:Eh,useMemo:Ch,useReducer:Uc,useRef:Ah,useState:function(){return Uc(Co)},useDebugValue:Fc,useDeferredValue:function(n){var i=ni();return Rh(i,en.memoizedState,n)},useTransition:function(){var n=Uc(Co)[0],i=ni().memoizedState;return[n,i]},useMutableSource:dh,useSyncExternalStore:hh,useId:Dh,unstable_isNewReconciler:!1},Tv={readContext:ti,useCallback:Th,useContext:ti,useEffect:Nc,useImperativeHandle:wh,useInsertionEffect:yh,useLayoutEffect:Eh,useMemo:Ch,useReducer:Bc,useRef:Ah,useState:function(){return Bc(Co)},useDebugValue:Fc,useDeferredValue:function(n){var i=ni();return en===null?i.memoizedState=n:Rh(i,en.memoizedState,n)},useTransition:function(){var n=Bc(Co)[0],i=ni().memoizedState;return[n,i]},useMutableSource:dh,useSyncExternalStore:hh,useId:Dh,unstable_isNewReconciler:!1};function ui(n,i){if(n&&n.defaultProps){i=re({},i),n=n.defaultProps;for(var o in n)i[o]===void 0&&(i[o]=n[o]);return i}return i}function Oc(n,i,o,c){i=n.memoizedState,o=o(c,i),o=o==null?i:re({},i,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var za={isMounted:function(n){return(n=n._reactInternals)?Ai(n)===n:!1},enqueueSetState:function(n,i,o){n=n._reactInternals;var c=Ln(),d=vr(n),p=Fi(c,d);p.payload=i,o!=null&&(p.callback=o),i=hr(n,p,d),i!==null&&(hi(i,n,d,c),Pa(i,n,d))},enqueueReplaceState:function(n,i,o){n=n._reactInternals;var c=Ln(),d=vr(n),p=Fi(c,d);p.tag=1,p.payload=i,o!=null&&(p.callback=o),i=hr(n,p,d),i!==null&&(hi(i,n,d,c),Pa(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var o=Ln(),c=vr(n),d=Fi(o,c);d.tag=2,i!=null&&(d.callback=i),i=hr(n,d,c),i!==null&&(hi(i,n,c,o),Pa(i,n,c))}};function Lh(n,i,o,c,d,p,y){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,p,y):i.prototype&&i.prototype.isPureReactComponent?!po(o,c)||!po(d,p):!0}function Uh(n,i,o){var c=!1,d=ur,p=i.contextType;return typeof p=="object"&&p!==null?p=ti(p):(d=Fn(i)?Br:Sn.current,c=i.contextTypes,p=(c=c!=null)?vs(n,d):ur),i=new i(o,p),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=za,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=p),i}function Bh(n,i,o,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(o,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(o,c),i.state!==n&&za.enqueueReplaceState(i,i.state,null)}function zc(n,i,o,c){var d=n.stateNode;d.props=o,d.state=n.memoizedState,d.refs={},wc(n);var p=i.contextType;typeof p=="object"&&p!==null?d.context=ti(p):(p=Fn(i)?Br:Sn.current,d.context=vs(n,p)),d.state=n.memoizedState,p=i.getDerivedStateFromProps,typeof p=="function"&&(Oc(n,i,p,o),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&za.enqueueReplaceState(d,d.state,null),Ia(n,o,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function ws(n,i){try{var o="",c=i;do o+=de(c),c=c.return;while(c);var d=o}catch(p){d=`
Error generating stack: `+p.message+`
`+p.stack}return{value:n,source:i,stack:d,digest:null}}function kc(n,i,o){return{value:n,source:null,stack:o??null,digest:i??null}}function Hc(n,i){try{console.error(i.value)}catch(o){setTimeout(function(){throw o})}}var Cv=typeof WeakMap=="function"?WeakMap:Map;function Nh(n,i,o){o=Fi(-1,o),o.tag=3,o.payload={element:null};var c=i.value;return o.callback=function(){ja||(ja=!0,nu=c),Hc(n,i)},o}function Fh(n,i,o){o=Fi(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;o.payload=function(){return c(d)},o.callback=function(){Hc(n,i)}}var p=n.stateNode;return p!==null&&typeof p.componentDidCatch=="function"&&(o.callback=function(){Hc(n,i),typeof c!="function"&&(mr===null?mr=new Set([this]):mr.add(this));var y=i.stack;this.componentDidCatch(i.value,{componentStack:y!==null?y:""})}),o}function Oh(n,i,o){var c=n.pingCache;if(c===null){c=n.pingCache=new Cv;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(o)||(d.add(o),n=Hv.bind(null,n,i,o),i.then(n,n))}function zh(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function kh(n,i,o,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(i=Fi(-1,1),i.tag=2,hr(o,i,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Rv=R.ReactCurrentOwner,On=!1;function In(n,i,o,c){i.child=n===null?oh(i,null,o,c):Ss(i,n.child,o,c)}function Hh(n,i,o,c,d){o=o.render;var p=i.ref;return Es(i,d),c=Ic(n,i,o,c,p,d),o=Lc(),n!==null&&!On?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Oi(n,i,d)):(Gt&&o&&mc(i),i.flags|=1,In(n,i,c,d),i.child)}function Gh(n,i,o,c,d){if(n===null){var p=o.type;return typeof p=="function"&&!cu(p)&&p.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(i.tag=15,i.type=p,Vh(n,i,p,c,d)):(n=Ja(o.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(p=n.child,(n.lanes&d)===0){var y=p.memoizedProps;if(o=o.compare,o=o!==null?o:po,o(y,c)&&n.ref===i.ref)return Oi(n,i,d)}return i.flags|=1,n=_r(p,c),n.ref=i.ref,n.return=i,i.child=n}function Vh(n,i,o,c,d){if(n!==null){var p=n.memoizedProps;if(po(p,c)&&n.ref===i.ref)if(On=!1,i.pendingProps=c=p,(n.lanes&d)!==0)(n.flags&131072)!==0&&(On=!0);else return i.lanes=n.lanes,Oi(n,i,d)}return Gc(n,i,o,c,d)}function Wh(n,i,o){var c=i.pendingProps,d=c.children,p=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Nt(Cs,Yn),Yn|=o;else{if((o&1073741824)===0)return n=p!==null?p.baseLanes|o:o,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Nt(Cs,Yn),Yn|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=p!==null?p.baseLanes:o,Nt(Cs,Yn),Yn|=c}else p!==null?(c=p.baseLanes|o,i.memoizedState=null):c=o,Nt(Cs,Yn),Yn|=c;return In(n,i,d,o),i.child}function Xh(n,i){var o=i.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(i.flags|=512,i.flags|=2097152)}function Gc(n,i,o,c,d){var p=Fn(o)?Br:Sn.current;return p=vs(i,p),Es(i,d),o=Ic(n,i,o,c,p,d),c=Lc(),n!==null&&!On?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,Oi(n,i,d)):(Gt&&c&&mc(i),i.flags|=1,In(n,i,o,d),i.child)}function jh(n,i,o,c,d){if(Fn(o)){var p=!0;Ea(i)}else p=!1;if(Es(i,d),i.stateNode===null)Ha(n,i),Uh(i,o,c),zc(i,o,c,d),c=!0;else if(n===null){var y=i.stateNode,P=i.memoizedProps;y.props=P;var N=y.context,$=o.contextType;typeof $=="object"&&$!==null?$=ti($):($=Fn(o)?Br:Sn.current,$=vs(i,$));var _e=o.getDerivedStateFromProps,Se=typeof _e=="function"||typeof y.getSnapshotBeforeUpdate=="function";Se||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(P!==c||N!==$)&&Bh(i,y,c,$),dr=!1;var ge=i.memoizedState;y.state=ge,Ia(i,c,y,d),N=i.memoizedState,P!==c||ge!==N||Nn.current||dr?(typeof _e=="function"&&(Oc(i,o,_e,c),N=i.memoizedState),(P=dr||Lh(i,o,P,c,ge,N,$))?(Se||typeof y.UNSAFE_componentWillMount!="function"&&typeof y.componentWillMount!="function"||(typeof y.componentWillMount=="function"&&y.componentWillMount(),typeof y.UNSAFE_componentWillMount=="function"&&y.UNSAFE_componentWillMount()),typeof y.componentDidMount=="function"&&(i.flags|=4194308)):(typeof y.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=N),y.props=c,y.state=N,y.context=$,c=P):(typeof y.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{y=i.stateNode,lh(n,i),P=i.memoizedProps,$=i.type===i.elementType?P:ui(i.type,P),y.props=$,Se=i.pendingProps,ge=y.context,N=o.contextType,typeof N=="object"&&N!==null?N=ti(N):(N=Fn(o)?Br:Sn.current,N=vs(i,N));var Le=o.getDerivedStateFromProps;(_e=typeof Le=="function"||typeof y.getSnapshotBeforeUpdate=="function")||typeof y.UNSAFE_componentWillReceiveProps!="function"&&typeof y.componentWillReceiveProps!="function"||(P!==Se||ge!==N)&&Bh(i,y,c,N),dr=!1,ge=i.memoizedState,y.state=ge,Ia(i,c,y,d);var Ge=i.memoizedState;P!==Se||ge!==Ge||Nn.current||dr?(typeof Le=="function"&&(Oc(i,o,Le,c),Ge=i.memoizedState),($=dr||Lh(i,o,$,c,ge,Ge,N)||!1)?(_e||typeof y.UNSAFE_componentWillUpdate!="function"&&typeof y.componentWillUpdate!="function"||(typeof y.componentWillUpdate=="function"&&y.componentWillUpdate(c,Ge,N),typeof y.UNSAFE_componentWillUpdate=="function"&&y.UNSAFE_componentWillUpdate(c,Ge,N)),typeof y.componentDidUpdate=="function"&&(i.flags|=4),typeof y.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof y.componentDidUpdate!="function"||P===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||P===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ge),y.props=c,y.state=Ge,y.context=N,c=$):(typeof y.componentDidUpdate!="function"||P===n.memoizedProps&&ge===n.memoizedState||(i.flags|=4),typeof y.getSnapshotBeforeUpdate!="function"||P===n.memoizedProps&&ge===n.memoizedState||(i.flags|=1024),c=!1)}return Vc(n,i,o,c,p,d)}function Vc(n,i,o,c,d,p){Xh(n,i);var y=(i.flags&128)!==0;if(!c&&!y)return d&&Zd(i,o,!1),Oi(n,i,p);c=i.stateNode,Rv.current=i;var P=y&&typeof o.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&y?(i.child=Ss(i,n.child,null,p),i.child=Ss(i,null,P,p)):In(n,i,P,p),i.memoizedState=c.state,d&&Zd(i,o,!0),i.child}function Yh(n){var i=n.stateNode;i.pendingContext?Kd(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Kd(n,i.context,!1),Tc(n,i.containerInfo)}function Qh(n,i,o,c,d){return As(),_c(d),i.flags|=256,In(n,i,o,c),i.child}var Wc={dehydrated:null,treeContext:null,retryLane:0};function Xc(n){return{baseLanes:n,cachePool:null,transitions:null}}function Kh(n,i,o){var c=i.pendingProps,d=Wt.current,p=!1,y=(i.flags&128)!==0,P;if((P=y)||(P=n!==null&&n.memoizedState===null?!1:(d&2)!==0),P?(p=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Nt(Wt,d&1),n===null)return xc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(y=c.children,n=c.fallback,p?(c=i.mode,p=i.child,y={mode:"hidden",children:y},(c&1)===0&&p!==null?(p.childLanes=0,p.pendingProps=y):p=$a(y,c,0,null),n=Xr(n,c,o,null),p.return=i,n.return=i,p.sibling=n,i.child=p,i.child.memoizedState=Xc(o),i.memoizedState=Wc,n):jc(i,y));if(d=n.memoizedState,d!==null&&(P=d.dehydrated,P!==null))return Dv(n,i,y,c,P,d,o);if(p){p=c.fallback,y=i.mode,d=n.child,P=d.sibling;var N={mode:"hidden",children:c.children};return(y&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=N,i.deletions=null):(c=_r(d,N),c.subtreeFlags=d.subtreeFlags&14680064),P!==null?p=_r(P,p):(p=Xr(p,y,o,null),p.flags|=2),p.return=i,c.return=i,c.sibling=p,i.child=c,c=p,p=i.child,y=n.child.memoizedState,y=y===null?Xc(o):{baseLanes:y.baseLanes|o,cachePool:null,transitions:y.transitions},p.memoizedState=y,p.childLanes=n.childLanes&~o,i.memoizedState=Wc,c}return p=n.child,n=p.sibling,c=_r(p,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=o),c.return=i,c.sibling=null,n!==null&&(o=i.deletions,o===null?(i.deletions=[n],i.flags|=16):o.push(n)),i.child=c,i.memoizedState=null,c}function jc(n,i){return i=$a({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function ka(n,i,o,c){return c!==null&&_c(c),Ss(i,n.child,null,o),n=jc(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Dv(n,i,o,c,d,p,y){if(o)return i.flags&256?(i.flags&=-257,c=kc(Error(t(422))),ka(n,i,y,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(p=c.fallback,d=i.mode,c=$a({mode:"visible",children:c.children},d,0,null),p=Xr(p,d,y,null),p.flags|=2,c.return=i,p.return=i,c.sibling=p,i.child=c,(i.mode&1)!==0&&Ss(i,n.child,null,y),i.child.memoizedState=Xc(y),i.memoizedState=Wc,p);if((i.mode&1)===0)return ka(n,i,y,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var P=c.dgst;return c=P,p=Error(t(419)),c=kc(p,c,void 0),ka(n,i,y,c)}if(P=(y&n.childLanes)!==0,On||P){if(c=un,c!==null){switch(y&-y){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|y))!==0?0:d,d!==0&&d!==p.retryLane&&(p.retryLane=d,Ni(n,d),hi(c,n,d,-1))}return lu(),c=kc(Error(t(421))),ka(n,i,y,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Gv.bind(null,n),d._reactRetry=i,null):(n=p.treeContext,jn=lr(d.nextSibling),Xn=i,Gt=!0,ci=null,n!==null&&($n[ei++]=Ui,$n[ei++]=Bi,$n[ei++]=Nr,Ui=n.id,Bi=n.overflow,Nr=i),i=jc(i,c.children),i.flags|=4096,i)}function qh(n,i,o){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Ec(n.return,i,o)}function Yc(n,i,o,c,d){var p=n.memoizedState;p===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:d}:(p.isBackwards=i,p.rendering=null,p.renderingStartTime=0,p.last=c,p.tail=o,p.tailMode=d)}function Zh(n,i,o){var c=i.pendingProps,d=c.revealOrder,p=c.tail;if(In(n,i,c.children,o),c=Wt.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&qh(n,o,i);else if(n.tag===19)qh(n,o,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Nt(Wt,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(o=i.child,d=null;o!==null;)n=o.alternate,n!==null&&La(n)===null&&(d=o),o=o.sibling;o=d,o===null?(d=i.child,i.child=null):(d=o.sibling,o.sibling=null),Yc(i,!1,d,o,p);break;case"backwards":for(o=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&La(n)===null){i.child=d;break}n=d.sibling,d.sibling=o,o=d,d=n}Yc(i,!0,o,null,p);break;case"together":Yc(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function Ha(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function Oi(n,i,o){if(n!==null&&(i.dependencies=n.dependencies),Hr|=i.lanes,(o&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,o=_r(n,n.pendingProps),i.child=o,o.return=i;n.sibling!==null;)n=n.sibling,o=o.sibling=_r(n,n.pendingProps),o.return=i;o.sibling=null}return i.child}function bv(n,i,o){switch(i.tag){case 3:Yh(i),As();break;case 5:fh(i);break;case 1:Fn(i.type)&&Ea(i);break;case 4:Tc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Nt(Da,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Nt(Wt,Wt.current&1),i.flags|=128,null):(o&i.child.childLanes)!==0?Kh(n,i,o):(Nt(Wt,Wt.current&1),n=Oi(n,i,o),n!==null?n.sibling:null);Nt(Wt,Wt.current&1);break;case 19:if(c=(o&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Zh(n,i,o);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Nt(Wt,Wt.current),c)break;return null;case 22:case 23:return i.lanes=0,Wh(n,i,o)}return Oi(n,i,o)}var Jh,Qc,$h,ep;Jh=function(n,i){for(var o=i.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===i)break;for(;o.sibling===null;){if(o.return===null||o.return===i)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Qc=function(){},$h=function(n,i,o,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,zr(Ei.current);var p=null;switch(o){case"input":d=B(n,d),c=B(n,c),p=[];break;case"select":d=re({},d,{value:void 0}),c=re({},c,{value:void 0}),p=[];break;case"textarea":d=Vt(n,d),c=Vt(n,c),p=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Aa)}Je(o,c);var y;o=null;for($ in d)if(!c.hasOwnProperty($)&&d.hasOwnProperty($)&&d[$]!=null)if($==="style"){var P=d[$];for(y in P)P.hasOwnProperty(y)&&(o||(o={}),o[y]="")}else $!=="dangerouslySetInnerHTML"&&$!=="children"&&$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&$!=="autoFocus"&&(a.hasOwnProperty($)?p||(p=[]):(p=p||[]).push($,null));for($ in c){var N=c[$];if(P=d!=null?d[$]:void 0,c.hasOwnProperty($)&&N!==P&&(N!=null||P!=null))if($==="style")if(P){for(y in P)!P.hasOwnProperty(y)||N&&N.hasOwnProperty(y)||(o||(o={}),o[y]="");for(y in N)N.hasOwnProperty(y)&&P[y]!==N[y]&&(o||(o={}),o[y]=N[y])}else o||(p||(p=[]),p.push($,o)),o=N;else $==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,P=P?P.__html:void 0,N!=null&&P!==N&&(p=p||[]).push($,N)):$==="children"?typeof N!="string"&&typeof N!="number"||(p=p||[]).push($,""+N):$!=="suppressContentEditableWarning"&&$!=="suppressHydrationWarning"&&(a.hasOwnProperty($)?(N!=null&&$==="onScroll"&&Ot("scroll",n),p||P===N||(p=[])):(p=p||[]).push($,N))}o&&(p=p||[]).push("style",o);var $=p;(i.updateQueue=$)&&(i.flags|=4)}},ep=function(n,i,o,c){o!==c&&(i.flags|=4)};function Do(n,i){if(!Gt)switch(n.tailMode){case"hidden":i=n.tail;for(var o=null;i!==null;)i.alternate!==null&&(o=i),i=i.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function En(n){var i=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(i)for(var d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)o|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=o,i}function Pv(n,i,o){var c=i.pendingProps;switch(gc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return En(i),null;case 1:return Fn(i.type)&&ya(),En(i),null;case 3:return c=i.stateNode,Ms(),zt(Nn),zt(Sn),Dc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(Ca(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,ci!==null&&(su(ci),ci=null))),Qc(n,i),En(i),null;case 5:Cc(i);var d=zr(Mo.current);if(o=i.type,n!==null&&i.stateNode!=null)$h(n,i,o,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return En(i),null}if(n=zr(Ei.current),Ca(i)){c=i.stateNode,o=i.type;var p=i.memoizedProps;switch(c[yi]=i,c[_o]=p,n=(i.mode&1)!==0,o){case"dialog":Ot("cancel",c),Ot("close",c);break;case"iframe":case"object":case"embed":Ot("load",c);break;case"video":case"audio":for(d=0;d<go.length;d++)Ot(go[d],c);break;case"source":Ot("error",c);break;case"img":case"image":case"link":Ot("error",c),Ot("load",c);break;case"details":Ot("toggle",c);break;case"input":on(c,p),Ot("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!p.multiple},Ot("invalid",c);break;case"textarea":b(c,p),Ot("invalid",c)}Je(o,p),d=null;for(var y in p)if(p.hasOwnProperty(y)){var P=p[y];y==="children"?typeof P=="string"?c.textContent!==P&&(p.suppressHydrationWarning!==!0&&_a(c.textContent,P,n),d=["children",P]):typeof P=="number"&&c.textContent!==""+P&&(p.suppressHydrationWarning!==!0&&_a(c.textContent,P,n),d=["children",""+P]):a.hasOwnProperty(y)&&P!=null&&y==="onScroll"&&Ot("scroll",c)}switch(o){case"input":bt(c),Xe(c,p,!0);break;case"textarea":bt(c),Z(c);break;case"select":case"option":break;default:typeof p.onClick=="function"&&(c.onclick=Aa)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{y=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=ue(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=y.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=y.createElement(o,{is:c.is}):(n=y.createElement(o),o==="select"&&(y=n,c.multiple?y.multiple=!0:c.size&&(y.size=c.size))):n=y.createElementNS(n,o),n[yi]=i,n[_o]=c,Jh(n,i,!1,!1),i.stateNode=n;e:{switch(y=Re(o,c),o){case"dialog":Ot("cancel",n),Ot("close",n),d=c;break;case"iframe":case"object":case"embed":Ot("load",n),d=c;break;case"video":case"audio":for(d=0;d<go.length;d++)Ot(go[d],n);d=c;break;case"source":Ot("error",n),d=c;break;case"img":case"image":case"link":Ot("error",n),Ot("load",n),d=c;break;case"details":Ot("toggle",n),d=c;break;case"input":on(n,c),d=B(n,c),Ot("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=re({},c,{value:void 0}),Ot("invalid",n);break;case"textarea":b(n,c),d=Vt(n,c),Ot("invalid",n);break;default:d=c}Je(o,d),P=d;for(p in P)if(P.hasOwnProperty(p)){var N=P[p];p==="style"?Ue(n,N):p==="dangerouslySetInnerHTML"?(N=N?N.__html:void 0,N!=null&&Ye(n,N)):p==="children"?typeof N=="string"?(o!=="textarea"||N!=="")&&Ce(n,N):typeof N=="number"&&Ce(n,""+N):p!=="suppressContentEditableWarning"&&p!=="suppressHydrationWarning"&&p!=="autoFocus"&&(a.hasOwnProperty(p)?N!=null&&p==="onScroll"&&Ot("scroll",n):N!=null&&I(n,p,N,y))}switch(o){case"input":bt(n),Xe(n,c,!1);break;case"textarea":bt(n),Z(n);break;case"option":c.value!=null&&n.setAttribute("value",""+Te(c.value));break;case"select":n.multiple=!!c.multiple,p=c.value,p!=null?st(n,!!c.multiple,p,!1):c.defaultValue!=null&&st(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Aa)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return En(i),null;case 6:if(n&&i.stateNode!=null)ep(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(o=zr(Mo.current),zr(Ei.current),Ca(i)){if(c=i.stateNode,o=i.memoizedProps,c[yi]=i,(p=c.nodeValue!==o)&&(n=Xn,n!==null))switch(n.tag){case 3:_a(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&_a(c.nodeValue,o,(n.mode&1)!==0)}p&&(i.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[yi]=i,i.stateNode=c}return En(i),null;case 13:if(zt(Wt),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Gt&&jn!==null&&(i.mode&1)!==0&&(i.flags&128)===0)ih(),As(),i.flags|=98560,p=!1;else if(p=Ca(i),c!==null&&c.dehydrated!==null){if(n===null){if(!p)throw Error(t(318));if(p=i.memoizedState,p=p!==null?p.dehydrated:null,!p)throw Error(t(317));p[yi]=i}else As(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;En(i),p=!1}else ci!==null&&(su(ci),ci=null),p=!0;if(!p)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=o,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(Wt.current&1)!==0?tn===0&&(tn=3):lu())),i.updateQueue!==null&&(i.flags|=4),En(i),null);case 4:return Ms(),Qc(n,i),n===null&&vo(i.stateNode.containerInfo),En(i),null;case 10:return yc(i.type._context),En(i),null;case 17:return Fn(i.type)&&ya(),En(i),null;case 19:if(zt(Wt),p=i.memoizedState,p===null)return En(i),null;if(c=(i.flags&128)!==0,y=p.rendering,y===null)if(c)Do(p,!1);else{if(tn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(y=La(n),y!==null){for(i.flags|=128,Do(p,!1),c=y.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=o,o=i.child;o!==null;)p=o,n=c,p.flags&=14680066,y=p.alternate,y===null?(p.childLanes=0,p.lanes=n,p.child=null,p.subtreeFlags=0,p.memoizedProps=null,p.memoizedState=null,p.updateQueue=null,p.dependencies=null,p.stateNode=null):(p.childLanes=y.childLanes,p.lanes=y.lanes,p.child=y.child,p.subtreeFlags=0,p.deletions=null,p.memoizedProps=y.memoizedProps,p.memoizedState=y.memoizedState,p.updateQueue=y.updateQueue,p.type=y.type,n=y.dependencies,p.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Nt(Wt,Wt.current&1|2),i.child}n=n.sibling}p.tail!==null&&K()>Rs&&(i.flags|=128,c=!0,Do(p,!1),i.lanes=4194304)}else{if(!c)if(n=La(y),n!==null){if(i.flags|=128,c=!0,o=n.updateQueue,o!==null&&(i.updateQueue=o,i.flags|=4),Do(p,!0),p.tail===null&&p.tailMode==="hidden"&&!y.alternate&&!Gt)return En(i),null}else 2*K()-p.renderingStartTime>Rs&&o!==1073741824&&(i.flags|=128,c=!0,Do(p,!1),i.lanes=4194304);p.isBackwards?(y.sibling=i.child,i.child=y):(o=p.last,o!==null?o.sibling=y:i.child=y,p.last=y)}return p.tail!==null?(i=p.tail,p.rendering=i,p.tail=i.sibling,p.renderingStartTime=K(),i.sibling=null,o=Wt.current,Nt(Wt,c?o&1|2:o&1),i):(En(i),null);case 22:case 23:return au(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(Yn&1073741824)!==0&&(En(i),i.subtreeFlags&6&&(i.flags|=8192)):En(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Iv(n,i){switch(gc(i),i.tag){case 1:return Fn(i.type)&&ya(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ms(),zt(Nn),zt(Sn),Dc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return Cc(i),null;case 13:if(zt(Wt),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));As()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return zt(Wt),null;case 4:return Ms(),null;case 10:return yc(i.type._context),null;case 22:case 23:return au(),null;case 24:return null;default:return null}}var Ga=!1,Mn=!1,Lv=typeof WeakSet=="function"?WeakSet:Set,Oe=null;function Ts(n,i){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){Qt(n,i,c)}else o.current=null}function Kc(n,i,o){try{o()}catch(c){Qt(n,i,c)}}var tp=!1;function Uv(n,i){if(ac=la,n=Ld(),$l(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var d=c.anchorOffset,p=c.focusNode;c=c.focusOffset;try{o.nodeType,p.nodeType}catch{o=null;break e}var y=0,P=-1,N=-1,$=0,_e=0,Se=n,ge=null;t:for(;;){for(var Le;Se!==o||d!==0&&Se.nodeType!==3||(P=y+d),Se!==p||c!==0&&Se.nodeType!==3||(N=y+c),Se.nodeType===3&&(y+=Se.nodeValue.length),(Le=Se.firstChild)!==null;)ge=Se,Se=Le;for(;;){if(Se===n)break t;if(ge===o&&++$===d&&(P=y),ge===p&&++_e===c&&(N=y),(Le=Se.nextSibling)!==null)break;Se=ge,ge=Se.parentNode}Se=Le}o=P===-1||N===-1?null:{start:P,end:N}}else o=null}o=o||{start:0,end:0}}else o=null;for(lc={focusedElem:n,selectionRange:o},la=!1,Oe=i;Oe!==null;)if(i=Oe,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Oe=n;else for(;Oe!==null;){i=Oe;try{var Ge=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ge!==null){var Ve=Ge.memoizedProps,qt=Ge.memoizedState,Q=i.stateNode,G=Q.getSnapshotBeforeUpdate(i.elementType===i.type?Ve:ui(i.type,Ve),qt);Q.__reactInternalSnapshotBeforeUpdate=G}break;case 3:var q=i.stateNode.containerInfo;q.nodeType===1?q.textContent="":q.nodeType===9&&q.documentElement&&q.removeChild(q.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Me){Qt(i,i.return,Me)}if(n=i.sibling,n!==null){n.return=i.return,Oe=n;break}Oe=i.return}return Ge=tp,tp=!1,Ge}function bo(n,i,o){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var p=d.destroy;d.destroy=void 0,p!==void 0&&Kc(i,o,p)}d=d.next}while(d!==c)}}function Va(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var o=i=i.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==i)}}function qc(n){var i=n.ref;if(i!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof i=="function"?i(n):i.current=n}}function np(n){var i=n.alternate;i!==null&&(n.alternate=null,np(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[yi],delete i[_o],delete i[dc],delete i[gv],delete i[vv])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function ip(n){return n.tag===5||n.tag===3||n.tag===4}function rp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||ip(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Zc(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.nodeType===8?o.parentNode.insertBefore(n,i):o.insertBefore(n,i):(o.nodeType===8?(i=o.parentNode,i.insertBefore(n,o)):(i=o,i.appendChild(n)),o=o._reactRootContainer,o!=null||i.onclick!==null||(i.onclick=Aa));else if(c!==4&&(n=n.child,n!==null))for(Zc(n,i,o),n=n.sibling;n!==null;)Zc(n,i,o),n=n.sibling}function Jc(n,i,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?o.insertBefore(n,i):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Jc(n,i,o),n=n.sibling;n!==null;)Jc(n,i,o),n=n.sibling}var mn=null,fi=!1;function pr(n,i,o){for(o=o.child;o!==null;)sp(n,i,o),o=o.sibling}function sp(n,i,o){if(ke&&typeof ke.onCommitFiberUnmount=="function")try{ke.onCommitFiberUnmount(tt,o)}catch{}switch(o.tag){case 5:Mn||Ts(o,i);case 6:var c=mn,d=fi;mn=null,pr(n,i,o),mn=c,fi=d,mn!==null&&(fi?(n=mn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):mn.removeChild(o.stateNode));break;case 18:mn!==null&&(fi?(n=mn,o=o.stateNode,n.nodeType===8?fc(n.parentNode,o):n.nodeType===1&&fc(n,o),ao(n)):fc(mn,o.stateNode));break;case 4:c=mn,d=fi,mn=o.stateNode.containerInfo,fi=!0,pr(n,i,o),mn=c,fi=d;break;case 0:case 11:case 14:case 15:if(!Mn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var p=d,y=p.destroy;p=p.tag,y!==void 0&&((p&2)!==0||(p&4)!==0)&&Kc(o,i,y),d=d.next}while(d!==c)}pr(n,i,o);break;case 1:if(!Mn&&(Ts(o,i),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(P){Qt(o,i,P)}pr(n,i,o);break;case 21:pr(n,i,o);break;case 22:o.mode&1?(Mn=(c=Mn)||o.memoizedState!==null,pr(n,i,o),Mn=c):pr(n,i,o);break;default:pr(n,i,o)}}function op(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new Lv),i.forEach(function(c){var d=Vv.bind(null,n,c);o.has(c)||(o.add(c),c.then(d,d))})}}function di(n,i){var o=i.deletions;if(o!==null)for(var c=0;c<o.length;c++){var d=o[c];try{var p=n,y=i,P=y;e:for(;P!==null;){switch(P.tag){case 5:mn=P.stateNode,fi=!1;break e;case 3:mn=P.stateNode.containerInfo,fi=!0;break e;case 4:mn=P.stateNode.containerInfo,fi=!0;break e}P=P.return}if(mn===null)throw Error(t(160));sp(p,y,d),mn=null,fi=!1;var N=d.alternate;N!==null&&(N.return=null),d.return=null}catch($){Qt(d,i,$)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)ap(i,n),i=i.sibling}function ap(n,i){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(di(i,n),wi(n),c&4){try{bo(3,n,n.return),Va(3,n)}catch(Ve){Qt(n,n.return,Ve)}try{bo(5,n,n.return)}catch(Ve){Qt(n,n.return,Ve)}}break;case 1:di(i,n),wi(n),c&512&&o!==null&&Ts(o,o.return);break;case 5:if(di(i,n),wi(n),c&512&&o!==null&&Ts(o,o.return),n.flags&32){var d=n.stateNode;try{Ce(d,"")}catch(Ve){Qt(n,n.return,Ve)}}if(c&4&&(d=n.stateNode,d!=null)){var p=n.memoizedProps,y=o!==null?o.memoizedProps:p,P=n.type,N=n.updateQueue;if(n.updateQueue=null,N!==null)try{P==="input"&&p.type==="radio"&&p.name!=null&&At(d,p),Re(P,y);var $=Re(P,p);for(y=0;y<N.length;y+=2){var _e=N[y],Se=N[y+1];_e==="style"?Ue(d,Se):_e==="dangerouslySetInnerHTML"?Ye(d,Se):_e==="children"?Ce(d,Se):I(d,_e,Se,$)}switch(P){case"input":Dt(d,p);break;case"textarea":E(d,p);break;case"select":var ge=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!p.multiple;var Le=p.value;Le!=null?st(d,!!p.multiple,Le,!1):ge!==!!p.multiple&&(p.defaultValue!=null?st(d,!!p.multiple,p.defaultValue,!0):st(d,!!p.multiple,p.multiple?[]:"",!1))}d[_o]=p}catch(Ve){Qt(n,n.return,Ve)}}break;case 6:if(di(i,n),wi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,p=n.memoizedProps;try{d.nodeValue=p}catch(Ve){Qt(n,n.return,Ve)}}break;case 3:if(di(i,n),wi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{ao(i.containerInfo)}catch(Ve){Qt(n,n.return,Ve)}break;case 4:di(i,n),wi(n);break;case 13:di(i,n),wi(n),d=n.child,d.flags&8192&&(p=d.memoizedState!==null,d.stateNode.isHidden=p,!p||d.alternate!==null&&d.alternate.memoizedState!==null||(tu=K())),c&4&&op(n);break;case 22:if(_e=o!==null&&o.memoizedState!==null,n.mode&1?(Mn=($=Mn)||_e,di(i,n),Mn=$):di(i,n),wi(n),c&8192){if($=n.memoizedState!==null,(n.stateNode.isHidden=$)&&!_e&&(n.mode&1)!==0)for(Oe=n,_e=n.child;_e!==null;){for(Se=Oe=_e;Oe!==null;){switch(ge=Oe,Le=ge.child,ge.tag){case 0:case 11:case 14:case 15:bo(4,ge,ge.return);break;case 1:Ts(ge,ge.return);var Ge=ge.stateNode;if(typeof Ge.componentWillUnmount=="function"){c=ge,o=ge.return;try{i=c,Ge.props=i.memoizedProps,Ge.state=i.memoizedState,Ge.componentWillUnmount()}catch(Ve){Qt(c,o,Ve)}}break;case 5:Ts(ge,ge.return);break;case 22:if(ge.memoizedState!==null){up(Se);continue}}Le!==null?(Le.return=ge,Oe=Le):up(Se)}_e=_e.sibling}e:for(_e=null,Se=n;;){if(Se.tag===5){if(_e===null){_e=Se;try{d=Se.stateNode,$?(p=d.style,typeof p.setProperty=="function"?p.setProperty("display","none","important"):p.display="none"):(P=Se.stateNode,N=Se.memoizedProps.style,y=N!=null&&N.hasOwnProperty("display")?N.display:null,P.style.display=xe("display",y))}catch(Ve){Qt(n,n.return,Ve)}}}else if(Se.tag===6){if(_e===null)try{Se.stateNode.nodeValue=$?"":Se.memoizedProps}catch(Ve){Qt(n,n.return,Ve)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;_e===Se&&(_e=null),Se=Se.return}_e===Se&&(_e=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:di(i,n),wi(n),c&4&&op(n);break;case 21:break;default:di(i,n),wi(n)}}function wi(n){var i=n.flags;if(i&2){try{e:{for(var o=n.return;o!==null;){if(ip(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(Ce(d,""),c.flags&=-33);var p=rp(n);Jc(n,p,d);break;case 3:case 4:var y=c.stateNode.containerInfo,P=rp(n);Zc(n,P,y);break;default:throw Error(t(161))}}catch(N){Qt(n,n.return,N)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Bv(n,i,o){Oe=n,lp(n)}function lp(n,i,o){for(var c=(n.mode&1)!==0;Oe!==null;){var d=Oe,p=d.child;if(d.tag===22&&c){var y=d.memoizedState!==null||Ga;if(!y){var P=d.alternate,N=P!==null&&P.memoizedState!==null||Mn;P=Ga;var $=Mn;if(Ga=y,(Mn=N)&&!$)for(Oe=d;Oe!==null;)y=Oe,N=y.child,y.tag===22&&y.memoizedState!==null?fp(d):N!==null?(N.return=y,Oe=N):fp(d);for(;p!==null;)Oe=p,lp(p),p=p.sibling;Oe=d,Ga=P,Mn=$}cp(n)}else(d.subtreeFlags&8772)!==0&&p!==null?(p.return=d,Oe=p):cp(n)}}function cp(n){for(;Oe!==null;){var i=Oe;if((i.flags&8772)!==0){var o=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Mn||Va(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Mn)if(o===null)c.componentDidMount();else{var d=i.elementType===i.type?o.memoizedProps:ui(i.type,o.memoizedProps);c.componentDidUpdate(d,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var p=i.updateQueue;p!==null&&uh(i,p,c);break;case 3:var y=i.updateQueue;if(y!==null){if(o=null,i.child!==null)switch(i.child.tag){case 5:o=i.child.stateNode;break;case 1:o=i.child.stateNode}uh(i,y,o)}break;case 5:var P=i.stateNode;if(o===null&&i.flags&4){o=P;var N=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":N.autoFocus&&o.focus();break;case"img":N.src&&(o.src=N.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var $=i.alternate;if($!==null){var _e=$.memoizedState;if(_e!==null){var Se=_e.dehydrated;Se!==null&&ao(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Mn||i.flags&512&&qc(i)}catch(ge){Qt(i,i.return,ge)}}if(i===n){Oe=null;break}if(o=i.sibling,o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function up(n){for(;Oe!==null;){var i=Oe;if(i===n){Oe=null;break}var o=i.sibling;if(o!==null){o.return=i.return,Oe=o;break}Oe=i.return}}function fp(n){for(;Oe!==null;){var i=Oe;try{switch(i.tag){case 0:case 11:case 15:var o=i.return;try{Va(4,i)}catch(N){Qt(i,o,N)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(N){Qt(i,d,N)}}var p=i.return;try{qc(i)}catch(N){Qt(i,p,N)}break;case 5:var y=i.return;try{qc(i)}catch(N){Qt(i,y,N)}}}catch(N){Qt(i,i.return,N)}if(i===n){Oe=null;break}var P=i.sibling;if(P!==null){P.return=i.return,Oe=P;break}Oe=i.return}}var Nv=Math.ceil,Wa=R.ReactCurrentDispatcher,$c=R.ReactCurrentOwner,ii=R.ReactCurrentBatchConfig,Mt=0,un=null,Zt=null,gn=0,Yn=0,Cs=cr(0),tn=0,Po=null,Hr=0,Xa=0,eu=0,Io=null,zn=null,tu=0,Rs=1/0,zi=null,ja=!1,nu=null,mr=null,Ya=!1,gr=null,Qa=0,Lo=0,iu=null,Ka=-1,qa=0;function Ln(){return(Mt&6)!==0?K():Ka!==-1?Ka:Ka=K()}function vr(n){return(n.mode&1)===0?1:(Mt&2)!==0&&gn!==0?gn&-gn:_v.transition!==null?(qa===0&&(qa=Ut()),qa):(n=Et,n!==0||(n=window.event,n=n===void 0?16:hd(n.type)),n)}function hi(n,i,o,c){if(50<Lo)throw Lo=0,iu=null,Error(t(185));an(n,o,c),((Mt&2)===0||n!==un)&&(n===un&&((Mt&2)===0&&(Xa|=o),tn===4&&xr(n,gn)),kn(n,c),o===1&&Mt===0&&(i.mode&1)===0&&(Rs=K()+500,Ma&&fr()))}function kn(n,i){var o=n.callbackNode;Pn(n,i);var c=_n(n,n===un?gn:0);if(c===0)o!==null&&w(o),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(o!=null&&w(o),i===1)n.tag===0?xv(hp.bind(null,n)):Jd(hp.bind(null,n)),pv(function(){(Mt&6)===0&&fr()}),o=null;else{switch(Si(c)){case 1:o=Ee;break;case 4:o=be;break;case 16:o=Fe;break;case 536870912:o=it;break;default:o=Fe}o=Sp(o,dp.bind(null,n))}n.callbackPriority=i,n.callbackNode=o}}function dp(n,i){if(Ka=-1,qa=0,(Mt&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ds()&&n.callbackNode!==o)return null;var c=_n(n,n===un?gn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=Za(n,c);else{i=c;var d=Mt;Mt|=2;var p=mp();(un!==n||gn!==i)&&(zi=null,Rs=K()+500,Vr(n,i));do try{zv();break}catch(P){pp(n,P)}while(!0);Sc(),Wa.current=p,Mt=d,Zt!==null?i=0:(un=null,gn=0,i=tn)}if(i!==0){if(i===2&&(d=Pi(n),d!==0&&(c=d,i=ru(n,d))),i===1)throw o=Po,Vr(n,0),xr(n,c),kn(n,K()),o;if(i===6)xr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Fv(d)&&(i=Za(n,c),i===2&&(p=Pi(n),p!==0&&(c=p,i=ru(n,p))),i===1))throw o=Po,Vr(n,0),xr(n,c),kn(n,K()),o;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:Wr(n,zn,zi);break;case 3:if(xr(n,c),(c&130023424)===c&&(i=tu+500-K(),10<i)){if(_n(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Ln(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=uc(Wr.bind(null,n,zn,zi),i);break}Wr(n,zn,zi);break;case 4:if(xr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var y=31-ct(c);p=1<<y,y=i[y],y>d&&(d=y),c&=~p}if(c=d,c=K()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Nv(c/1960))-c,10<c){n.timeoutHandle=uc(Wr.bind(null,n,zn,zi),c);break}Wr(n,zn,zi);break;case 5:Wr(n,zn,zi);break;default:throw Error(t(329))}}}return kn(n,K()),n.callbackNode===o?dp.bind(null,n):null}function ru(n,i){var o=Io;return n.current.memoizedState.isDehydrated&&(Vr(n,i).flags|=256),n=Za(n,i),n!==2&&(i=zn,zn=o,i!==null&&su(i)),n}function su(n){zn===null?zn=n:zn.push.apply(zn,n)}function Fv(n){for(var i=n;;){if(i.flags&16384){var o=i.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var d=o[c],p=d.getSnapshot;d=d.value;try{if(!li(p(),d))return!1}catch{return!1}}}if(o=i.child,i.subtreeFlags&16384&&o!==null)o.return=i,i=o;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function xr(n,i){for(i&=~eu,i&=~Xa,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var o=31-ct(i),c=1<<o;n[o]=-1,i&=~c}}function hp(n){if((Mt&6)!==0)throw Error(t(327));Ds();var i=_n(n,0);if((i&1)===0)return kn(n,K()),null;var o=Za(n,i);if(n.tag!==0&&o===2){var c=Pi(n);c!==0&&(i=c,o=ru(n,c))}if(o===1)throw o=Po,Vr(n,0),xr(n,i),kn(n,K()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,Wr(n,zn,zi),kn(n,K()),null}function ou(n,i){var o=Mt;Mt|=1;try{return n(i)}finally{Mt=o,Mt===0&&(Rs=K()+500,Ma&&fr())}}function Gr(n){gr!==null&&gr.tag===0&&(Mt&6)===0&&Ds();var i=Mt;Mt|=1;var o=ii.transition,c=Et;try{if(ii.transition=null,Et=1,n)return n()}finally{Et=c,ii.transition=o,Mt=i,(Mt&6)===0&&fr()}}function au(){Yn=Cs.current,zt(Cs)}function Vr(n,i){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,hv(o)),Zt!==null)for(o=Zt.return;o!==null;){var c=o;switch(gc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ya();break;case 3:Ms(),zt(Nn),zt(Sn),Dc();break;case 5:Cc(c);break;case 4:Ms();break;case 13:zt(Wt);break;case 19:zt(Wt);break;case 10:yc(c.type._context);break;case 22:case 23:au()}o=o.return}if(un=n,Zt=n=_r(n.current,null),gn=Yn=i,tn=0,Po=null,eu=Xa=Hr=0,zn=Io=null,Or!==null){for(i=0;i<Or.length;i++)if(o=Or[i],c=o.interleaved,c!==null){o.interleaved=null;var d=c.next,p=o.pending;if(p!==null){var y=p.next;p.next=d,c.next=y}o.pending=c}Or=null}return n}function pp(n,i){do{var o=Zt;try{if(Sc(),Ua.current=Oa,Ba){for(var c=Xt.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}Ba=!1}if(kr=0,cn=en=Xt=null,wo=!1,To=0,$c.current=null,o===null||o.return===null){tn=1,Po=i,Zt=null;break}e:{var p=n,y=o.return,P=o,N=i;if(i=gn,P.flags|=32768,N!==null&&typeof N=="object"&&typeof N.then=="function"){var $=N,_e=P,Se=_e.tag;if((_e.mode&1)===0&&(Se===0||Se===11||Se===15)){var ge=_e.alternate;ge?(_e.updateQueue=ge.updateQueue,_e.memoizedState=ge.memoizedState,_e.lanes=ge.lanes):(_e.updateQueue=null,_e.memoizedState=null)}var Le=zh(y);if(Le!==null){Le.flags&=-257,kh(Le,y,P,p,i),Le.mode&1&&Oh(p,$,i),i=Le,N=$;var Ge=i.updateQueue;if(Ge===null){var Ve=new Set;Ve.add(N),i.updateQueue=Ve}else Ge.add(N);break e}else{if((i&1)===0){Oh(p,$,i),lu();break e}N=Error(t(426))}}else if(Gt&&P.mode&1){var qt=zh(y);if(qt!==null){(qt.flags&65536)===0&&(qt.flags|=256),kh(qt,y,P,p,i),_c(ws(N,P));break e}}p=N=ws(N,P),tn!==4&&(tn=2),Io===null?Io=[p]:Io.push(p),p=y;do{switch(p.tag){case 3:p.flags|=65536,i&=-i,p.lanes|=i;var Q=Nh(p,N,i);ch(p,Q);break e;case 1:P=N;var G=p.type,q=p.stateNode;if((p.flags&128)===0&&(typeof G.getDerivedStateFromError=="function"||q!==null&&typeof q.componentDidCatch=="function"&&(mr===null||!mr.has(q)))){p.flags|=65536,i&=-i,p.lanes|=i;var Me=Fh(p,P,i);ch(p,Me);break e}}p=p.return}while(p!==null)}vp(o)}catch(je){i=je,Zt===o&&o!==null&&(Zt=o=o.return);continue}break}while(!0)}function mp(){var n=Wa.current;return Wa.current=Oa,n===null?Oa:n}function lu(){(tn===0||tn===3||tn===2)&&(tn=4),un===null||(Hr&268435455)===0&&(Xa&268435455)===0||xr(un,gn)}function Za(n,i){var o=Mt;Mt|=2;var c=mp();(un!==n||gn!==i)&&(zi=null,Vr(n,i));do try{Ov();break}catch(d){pp(n,d)}while(!0);if(Sc(),Mt=o,Wa.current=c,Zt!==null)throw Error(t(261));return un=null,gn=0,tn}function Ov(){for(;Zt!==null;)gp(Zt)}function zv(){for(;Zt!==null&&!W();)gp(Zt)}function gp(n){var i=Ap(n.alternate,n,Yn);n.memoizedProps=n.pendingProps,i===null?vp(n):Zt=i,$c.current=null}function vp(n){var i=n;do{var o=i.alternate;if(n=i.return,(i.flags&32768)===0){if(o=Pv(o,i,Yn),o!==null){Zt=o;return}}else{if(o=Iv(o,i),o!==null){o.flags&=32767,Zt=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{tn=6,Zt=null;return}}if(i=i.sibling,i!==null){Zt=i;return}Zt=i=n}while(i!==null);tn===0&&(tn=5)}function Wr(n,i,o){var c=Et,d=ii.transition;try{ii.transition=null,Et=1,kv(n,i,o,c)}finally{ii.transition=d,Et=c}return null}function kv(n,i,o,c){do Ds();while(gr!==null);if((Mt&6)!==0)throw Error(t(327));o=n.finishedWork;var d=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var p=o.lanes|o.childLanes;if(pn(n,p),n===un&&(Zt=un=null,gn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Ya||(Ya=!0,Sp(Fe,function(){return Ds(),null})),p=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||p){p=ii.transition,ii.transition=null;var y=Et;Et=1;var P=Mt;Mt|=4,$c.current=null,Uv(n,o),ap(o,n),ov(lc),la=!!ac,lc=ac=null,n.current=o,Bv(o),ee(),Mt=P,Et=y,ii.transition=p}else n.current=o;if(Ya&&(Ya=!1,gr=n,Qa=d),p=n.pendingLanes,p===0&&(mr=null),pt(o.stateNode),kn(n,K()),i!==null)for(c=n.onRecoverableError,o=0;o<i.length;o++)d=i[o],c(d.value,{componentStack:d.stack,digest:d.digest});if(ja)throw ja=!1,n=nu,nu=null,n;return(Qa&1)!==0&&n.tag!==0&&Ds(),p=n.pendingLanes,(p&1)!==0?n===iu?Lo++:(Lo=0,iu=n):Lo=0,fr(),null}function Ds(){if(gr!==null){var n=Si(Qa),i=ii.transition,o=Et;try{if(ii.transition=null,Et=16>n?16:n,gr===null)var c=!1;else{if(n=gr,gr=null,Qa=0,(Mt&6)!==0)throw Error(t(331));var d=Mt;for(Mt|=4,Oe=n.current;Oe!==null;){var p=Oe,y=p.child;if((Oe.flags&16)!==0){var P=p.deletions;if(P!==null){for(var N=0;N<P.length;N++){var $=P[N];for(Oe=$;Oe!==null;){var _e=Oe;switch(_e.tag){case 0:case 11:case 15:bo(8,_e,p)}var Se=_e.child;if(Se!==null)Se.return=_e,Oe=Se;else for(;Oe!==null;){_e=Oe;var ge=_e.sibling,Le=_e.return;if(np(_e),_e===$){Oe=null;break}if(ge!==null){ge.return=Le,Oe=ge;break}Oe=Le}}}var Ge=p.alternate;if(Ge!==null){var Ve=Ge.child;if(Ve!==null){Ge.child=null;do{var qt=Ve.sibling;Ve.sibling=null,Ve=qt}while(Ve!==null)}}Oe=p}}if((p.subtreeFlags&2064)!==0&&y!==null)y.return=p,Oe=y;else e:for(;Oe!==null;){if(p=Oe,(p.flags&2048)!==0)switch(p.tag){case 0:case 11:case 15:bo(9,p,p.return)}var Q=p.sibling;if(Q!==null){Q.return=p.return,Oe=Q;break e}Oe=p.return}}var G=n.current;for(Oe=G;Oe!==null;){y=Oe;var q=y.child;if((y.subtreeFlags&2064)!==0&&q!==null)q.return=y,Oe=q;else e:for(y=G;Oe!==null;){if(P=Oe,(P.flags&2048)!==0)try{switch(P.tag){case 0:case 11:case 15:Va(9,P)}}catch(je){Qt(P,P.return,je)}if(P===y){Oe=null;break e}var Me=P.sibling;if(Me!==null){Me.return=P.return,Oe=Me;break e}Oe=P.return}}if(Mt=d,fr(),ke&&typeof ke.onPostCommitFiberRoot=="function")try{ke.onPostCommitFiberRoot(tt,n)}catch{}c=!0}return c}finally{Et=o,ii.transition=i}}return!1}function xp(n,i,o){i=ws(o,i),i=Nh(n,i,1),n=hr(n,i,1),i=Ln(),n!==null&&(an(n,1,i),kn(n,i))}function Qt(n,i,o){if(n.tag===3)xp(n,n,o);else for(;i!==null;){if(i.tag===3){xp(i,n,o);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(mr===null||!mr.has(c))){n=ws(o,n),n=Fh(i,n,1),i=hr(i,n,1),n=Ln(),i!==null&&(an(i,1,n),kn(i,n));break}}i=i.return}}function Hv(n,i,o){var c=n.pingCache;c!==null&&c.delete(i),i=Ln(),n.pingedLanes|=n.suspendedLanes&o,un===n&&(gn&o)===o&&(tn===4||tn===3&&(gn&130023424)===gn&&500>K()-tu?Vr(n,0):eu|=o),kn(n,i)}function _p(n,i){i===0&&((n.mode&1)===0?i=1:(i=Yt,Yt<<=1,(Yt&130023424)===0&&(Yt=4194304)));var o=Ln();n=Ni(n,i),n!==null&&(an(n,i,o),kn(n,o))}function Gv(n){var i=n.memoizedState,o=0;i!==null&&(o=i.retryLane),_p(n,o)}function Vv(n,i){var o=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(o=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),_p(n,o)}var Ap;Ap=function(n,i,o){if(n!==null)if(n.memoizedProps!==i.pendingProps||Nn.current)On=!0;else{if((n.lanes&o)===0&&(i.flags&128)===0)return On=!1,bv(n,i,o);On=(n.flags&131072)!==0}else On=!1,Gt&&(i.flags&1048576)!==0&&$d(i,Ta,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;Ha(n,i),n=i.pendingProps;var d=vs(i,Sn.current);Es(i,o),d=Ic(null,i,c,n,d,o);var p=Lc();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Fn(c)?(p=!0,Ea(i)):p=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,wc(i),d.updater=za,i.stateNode=d,d._reactInternals=i,zc(i,c,n,o),i=Vc(null,i,c,!0,p,o)):(i.tag=0,Gt&&p&&mc(i),In(null,i,d,o),i=i.child),i;case 16:c=i.elementType;e:{switch(Ha(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Xv(c),n=ui(c,n),d){case 0:i=Gc(null,i,c,n,o);break e;case 1:i=jh(null,i,c,n,o);break e;case 11:i=Hh(null,i,c,n,o);break e;case 14:i=Gh(null,i,c,ui(c.type,n),o);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ui(c,d),Gc(n,i,c,d,o);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ui(c,d),jh(n,i,c,d,o);case 3:e:{if(Yh(i),n===null)throw Error(t(387));c=i.pendingProps,p=i.memoizedState,d=p.element,lh(n,i),Ia(i,c,null,o);var y=i.memoizedState;if(c=y.element,p.isDehydrated)if(p={element:c,isDehydrated:!1,cache:y.cache,pendingSuspenseBoundaries:y.pendingSuspenseBoundaries,transitions:y.transitions},i.updateQueue.baseState=p,i.memoizedState=p,i.flags&256){d=ws(Error(t(423)),i),i=Qh(n,i,c,o,d);break e}else if(c!==d){d=ws(Error(t(424)),i),i=Qh(n,i,c,o,d);break e}else for(jn=lr(i.stateNode.containerInfo.firstChild),Xn=i,Gt=!0,ci=null,o=oh(i,null,c,o),i.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(As(),c===d){i=Oi(n,i,o);break e}In(n,i,c,o)}i=i.child}return i;case 5:return fh(i),n===null&&xc(i),c=i.type,d=i.pendingProps,p=n!==null?n.memoizedProps:null,y=d.children,cc(c,d)?y=null:p!==null&&cc(c,p)&&(i.flags|=32),Xh(n,i),In(n,i,y,o),i.child;case 6:return n===null&&xc(i),null;case 13:return Kh(n,i,o);case 4:return Tc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Ss(i,null,c,o):In(n,i,c,o),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ui(c,d),Hh(n,i,c,d,o);case 7:return In(n,i,i.pendingProps,o),i.child;case 8:return In(n,i,i.pendingProps.children,o),i.child;case 12:return In(n,i,i.pendingProps.children,o),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,p=i.memoizedProps,y=d.value,Nt(Da,c._currentValue),c._currentValue=y,p!==null)if(li(p.value,y)){if(p.children===d.children&&!Nn.current){i=Oi(n,i,o);break e}}else for(p=i.child,p!==null&&(p.return=i);p!==null;){var P=p.dependencies;if(P!==null){y=p.child;for(var N=P.firstContext;N!==null;){if(N.context===c){if(p.tag===1){N=Fi(-1,o&-o),N.tag=2;var $=p.updateQueue;if($!==null){$=$.shared;var _e=$.pending;_e===null?N.next=N:(N.next=_e.next,_e.next=N),$.pending=N}}p.lanes|=o,N=p.alternate,N!==null&&(N.lanes|=o),Ec(p.return,o,i),P.lanes|=o;break}N=N.next}}else if(p.tag===10)y=p.type===i.type?null:p.child;else if(p.tag===18){if(y=p.return,y===null)throw Error(t(341));y.lanes|=o,P=y.alternate,P!==null&&(P.lanes|=o),Ec(y,o,i),y=p.sibling}else y=p.child;if(y!==null)y.return=p;else for(y=p;y!==null;){if(y===i){y=null;break}if(p=y.sibling,p!==null){p.return=y.return,y=p;break}y=y.return}p=y}In(n,i,d.children,o),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Es(i,o),d=ti(d),c=c(d),i.flags|=1,In(n,i,c,o),i.child;case 14:return c=i.type,d=ui(c,i.pendingProps),d=ui(c.type,d),Gh(n,i,c,d,o);case 15:return Vh(n,i,i.type,i.pendingProps,o);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:ui(c,d),Ha(n,i),i.tag=1,Fn(c)?(n=!0,Ea(i)):n=!1,Es(i,o),Uh(i,c,d),zc(i,c,d,o),Vc(null,i,c,!0,n,o);case 19:return Zh(n,i,o);case 22:return Wh(n,i,o)}throw Error(t(156,i.tag))};function Sp(n,i){return sa(n,i)}function Wv(n,i,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function ri(n,i,o,c){return new Wv(n,i,o,c)}function cu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Xv(n){if(typeof n=="function")return cu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===ae)return 11;if(n===pe)return 14}return 2}function _r(n,i){var o=n.alternate;return o===null?(o=ri(n.tag,i,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=i,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,i=n.dependencies,o.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ja(n,i,o,c,d,p){var y=2;if(c=n,typeof n=="function")cu(n)&&(y=1);else if(typeof n=="string")y=5;else e:switch(n){case F:return Xr(o.children,d,p,i);case Y:y=8,d|=8;break;case D:return n=ri(12,o,i,d|2),n.elementType=D,n.lanes=p,n;case te:return n=ri(13,o,i,d),n.elementType=te,n.lanes=p,n;case fe:return n=ri(19,o,i,d),n.elementType=fe,n.lanes=p,n;case ce:return $a(o,d,p,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case C:y=10;break e;case H:y=9;break e;case ae:y=11;break e;case pe:y=14;break e;case oe:y=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=ri(y,o,i,d),i.elementType=n,i.type=c,i.lanes=p,i}function Xr(n,i,o,c){return n=ri(7,n,c,i),n.lanes=o,n}function $a(n,i,o,c){return n=ri(22,n,c,i),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function uu(n,i,o){return n=ri(6,n,null,i),n.lanes=o,n}function fu(n,i,o){return i=ri(4,n.children!==null?n.children:[],n.key,i),i.lanes=o,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function jv(n,i,o,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=An(0),this.expirationTimes=An(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=An(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function du(n,i,o,c,d,p,y,P,N){return n=new jv(n,i,o,P,N),i===1?(i=1,p===!0&&(i|=8)):i=0,p=ri(3,null,null,i),n.current=p,p.stateNode=n,p.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},wc(p),n}function Yv(n,i,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:V,key:c==null?null:""+c,children:n,containerInfo:i,implementation:o}}function yp(n){if(!n)return ur;n=n._reactInternals;e:{if(Ai(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Fn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Fn(o))return qd(n,o,i)}return i}function Ep(n,i,o,c,d,p,y,P,N){return n=du(o,c,!0,n,d,p,y,P,N),n.context=yp(null),o=n.current,c=Ln(),d=vr(o),p=Fi(c,d),p.callback=i??null,hr(o,p,d),n.current.lanes=d,an(n,d,c),kn(n,c),n}function el(n,i,o,c){var d=i.current,p=Ln(),y=vr(d);return o=yp(o),i.context===null?i.context=o:i.pendingContext=o,i=Fi(p,y),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=hr(d,i,y),n!==null&&(hi(n,d,y,p),Pa(n,d,y)),y}function tl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Mp(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<i?o:i}}function hu(n,i){Mp(n,i),(n=n.alternate)&&Mp(n,i)}function Qv(){return null}var wp=typeof reportError=="function"?reportError:function(n){console.error(n)};function pu(n){this._internalRoot=n}nl.prototype.render=pu.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));el(n,i,null,null)},nl.prototype.unmount=pu.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;Gr(function(){el(null,n,null,null)}),i[Ii]=null}};function nl(n){this._internalRoot=n}nl.prototype.unstable_scheduleHydration=function(n){if(n){var i=ld();n={blockedOn:null,target:n,priority:i};for(var o=0;o<sr.length&&i!==0&&i<sr[o].priority;o++);sr.splice(o,0,n),o===0&&fd(n)}};function mu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function il(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Tp(){}function Kv(n,i,o,c,d){if(d){if(typeof c=="function"){var p=c;c=function(){var $=tl(y);p.call($)}}var y=Ep(i,c,n,0,null,!1,!1,"",Tp);return n._reactRootContainer=y,n[Ii]=y.current,vo(n.nodeType===8?n.parentNode:n),Gr(),y}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var P=c;c=function(){var $=tl(N);P.call($)}}var N=du(n,0,!1,null,null,!1,!1,"",Tp);return n._reactRootContainer=N,n[Ii]=N.current,vo(n.nodeType===8?n.parentNode:n),Gr(function(){el(i,N,o,c)}),N}function rl(n,i,o,c,d){var p=o._reactRootContainer;if(p){var y=p;if(typeof d=="function"){var P=d;d=function(){var N=tl(y);P.call(N)}}el(i,y,n,d)}else y=Kv(o,i,n,d,c);return tl(y)}od=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var o=xt(i.pendingLanes);o!==0&&(ln(i,o|1),kn(i,K()),(Mt&6)===0&&(Rs=K()+500,fr()))}break;case 13:Gr(function(){var c=Ni(n,1);if(c!==null){var d=Ln();hi(c,n,1,d)}}),hu(n,1)}},kl=function(n){if(n.tag===13){var i=Ni(n,134217728);if(i!==null){var o=Ln();hi(i,n,134217728,o)}hu(n,134217728)}},ad=function(n){if(n.tag===13){var i=vr(n),o=Ni(n,i);if(o!==null){var c=Ln();hi(o,n,i,c)}hu(n,i)}},ld=function(){return Et},cd=function(n,i){var o=Et;try{return Et=n,i()}finally{Et=o}},De=function(n,i,o){switch(i){case"input":if(Dt(n,o),i=o.name,o.type==="radio"&&i!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<o.length;i++){var c=o[i];if(c!==n&&c.form===n.form){var d=Sa(c);if(!d)throw Error(t(90));Bt(c),Dt(c,d)}}}break;case"textarea":E(n,o);break;case"select":i=o.value,i!=null&&st(n,!!o.multiple,i,!1)}},at=ou,Pt=Gr;var qv={usingClientEntryPoint:!1,Events:[Ao,ms,Sa,he,He,ou]},Uo={findFiberByHostInstance:Ur,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zv={bundleType:Uo.bundleType,version:Uo.version,rendererPackageName:Uo.rendererPackageName,rendererConfig:Uo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=ia(n),n===null?null:n.stateNode},findFiberByHostInstance:Uo.findFiberByHostInstance||Qv,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sl.isDisabled&&sl.supportsFiber)try{tt=sl.inject(Zv),ke=sl}catch{}}return Hn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=qv,Hn.createPortal=function(n,i){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!mu(i))throw Error(t(200));return Yv(n,i,null,o)},Hn.createRoot=function(n,i){if(!mu(n))throw Error(t(299));var o=!1,c="",d=wp;return i!=null&&(i.unstable_strictMode===!0&&(o=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=du(n,1,!1,null,null,o,!1,c,d),n[Ii]=i.current,vo(n.nodeType===8?n.parentNode:n),new pu(i)},Hn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=ia(i),n=n===null?null:n.stateNode,n},Hn.flushSync=function(n){return Gr(n)},Hn.hydrate=function(n,i,o){if(!il(i))throw Error(t(200));return rl(null,n,i,!0,o)},Hn.hydrateRoot=function(n,i,o){if(!mu(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,d=!1,p="",y=wp;if(o!=null&&(o.unstable_strictMode===!0&&(d=!0),o.identifierPrefix!==void 0&&(p=o.identifierPrefix),o.onRecoverableError!==void 0&&(y=o.onRecoverableError)),i=Ep(i,null,n,1,o??null,d,!1,p,y),n[Ii]=i.current,vo(n),c)for(n=0;n<c.length;n++)o=c[n],d=o._getVersion,d=d(o._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[o,d]:i.mutableSourceEagerHydrationData.push(o,d);return new nl(i)},Hn.render=function(n,i,o){if(!il(i))throw Error(t(200));return rl(null,n,i,!1,o)},Hn.unmountComponentAtNode=function(n){if(!il(n))throw Error(t(40));return n._reactRootContainer?(Gr(function(){rl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ii]=null})}),!0):!1},Hn.unstable_batchedUpdates=ou,Hn.unstable_renderSubtreeIntoContainer=function(n,i,o,c){if(!il(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return rl(n,i,o,!1,c)},Hn.version="18.3.1-next-f1338f8080-20240426",Hn}var Up;function s0(){if(Up)return xu.exports;Up=1;function r(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(r)}catch(e){console.error(e)}}return r(),xu.exports=r0(),xu.exports}var Bp;function o0(){if(Bp)return ol;Bp=1;var r=s0();return ol.createRoot=r.createRoot,ol.hydrateRoot=r.hydrateRoot,ol}var a0=o0();/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var l0={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const c0=r=>r.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().trim(),Kt=(r,e)=>{const t=kt.forwardRef(({color:s="currentColor",size:a=24,strokeWidth:l=2,absoluteStrokeWidth:u,className:f="",children:h,...m},g)=>kt.createElement("svg",{ref:g,...l0,width:a,height:a,stroke:s,strokeWidth:u?Number(l)*24/Number(a):l,className:["lucide",`lucide-${c0(r)}`,f].join(" "),...m},[...e.map(([v,_])=>kt.createElement(v,_)),...Array.isArray(h)?h:[h]]));return t.displayName=`${r}`,t};/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const u0=Kt("BarChart2",[["line",{x1:"18",x2:"18",y1:"20",y2:"10",key:"1xfpm4"}],["line",{x1:"12",x2:"12",y1:"20",y2:"4",key:"be30l9"}],["line",{x1:"6",x2:"6",y1:"20",y2:"14",key:"1r4le6"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const f0=Kt("BarChart3",[["path",{d:"M3 3v18h18",key:"1s2lah"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const d0=Kt("Car",[["path",{d:"M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9A3.7 3.7 0 0 0 2 12v4c0 .6.4 1 1 1h2",key:"5owen"}],["circle",{cx:"7",cy:"17",r:"2",key:"u2ysq9"}],["path",{d:"M9 17h6",key:"r8uit2"}],["circle",{cx:"17",cy:"17",r:"2",key:"axvx0g"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Np=Kt("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xf=Kt("Code",[["polyline",{points:"16 18 22 12 16 6",key:"z7tu5w"}],["polyline",{points:"8 6 2 12 8 18",key:"1eg1df"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const km=Kt("Database",[["ellipse",{cx:"12",cy:"5",rx:"9",ry:"3",key:"msslwz"}],["path",{d:"M3 5V19A9 3 0 0 0 21 19V5",key:"1wlel7"}],["path",{d:"M3 12A9 3 0 0 0 21 12",key:"mv7ke4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Fp=Kt("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const h0=Kt("GitBranch",[["line",{x1:"6",x2:"6",y1:"3",y2:"15",key:"17qcm7"}],["circle",{cx:"18",cy:"6",r:"3",key:"1h7g24"}],["circle",{cx:"6",cy:"18",r:"3",key:"fqmcym"}],["path",{d:"M18 9a9 9 0 0 1-9 9",key:"n2h4wq"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hm=Kt("Github",[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const p0=Kt("Globe",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const m0=Kt("GraduationCap",[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const g0=Kt("Heart",[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gm=Kt("Linkedin",[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vm=Kt("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const v0=Kt("MapPin",[["path",{d:"M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z",key:"2oe9fu"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const x0=Kt("Menu",[["line",{x1:"4",x2:"20",y1:"12",y2:"12",key:"1e0a9i"}],["line",{x1:"4",x2:"20",y1:"6",y2:"6",key:"1owob3"}],["line",{x1:"4",x2:"20",y1:"18",y2:"18",key:"yk5zj1"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _0=Kt("Send",[["path",{d:"m22 2-7 20-4-9-9-4Z",key:"1q3vgg"}],["path",{d:"M22 2 11 13",key:"nzbqef"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Wm=Kt("Smartphone",[["rect",{width:"14",height:"20",x:"5",y:"2",rx:"2",ry:"2",key:"1yt0o3"}],["path",{d:"M12 18h.01",key:"mhygvu"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const A0=Kt("Stethoscope",[["path",{d:"M4.8 2.3A.3.3 0 1 0 5 2H4a2 2 0 0 0-2 2v5a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h-1a.2.2 0 1 0 .3.3",key:"1jd90r"}],["path",{d:"M8 15v1a6 6 0 0 0 6 6v0a6 6 0 0 0 6-6v-4",key:"126ukv"}],["circle",{cx:"20",cy:"10",r:"2",key:"ts1r5v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const S0=Kt("Truck",[["path",{d:"M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2",key:"wrbu53"}],["path",{d:"M15 18H9",key:"1lyqi6"}],["path",{d:"M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14",key:"lysw3i"}],["circle",{cx:"17",cy:"18",r:"2",key:"332jqn"}],["circle",{cx:"7",cy:"18",r:"2",key:"19iecd"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const y0=Kt("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);/**
 * @license lucide-react v0.344.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const E0=Kt("Zap",[["polygon",{points:"13 2 3 14 12 14 11 22 21 10 12 10 13 2",key:"45s27k"}]]),M0=({activeSection:r})=>{const[e,t]=kt.useState(!1),[s,a]=kt.useState(!1);kt.useEffect(()=>{const h=()=>a(window.scrollY>50);return window.addEventListener("scroll",h),()=>window.removeEventListener("scroll",h)},[]);const l=[{id:"home",label:"Inicio"},{id:"about",label:"Sobre Mí"},{id:"projects",label:"Proyectos"},{id:"skills",label:"Habilidades"},{id:"contact",label:"Contacto"}],u=h=>{const m=document.getElementById(h);m&&m.scrollIntoView({behavior:"smooth"}),t(!1)},f=()=>{const h=document.createElement("a");h.href="/src/assets/docs/Samuel_Olvera.pdf",h.download="CV-Desarrollador-FullStack.pdf",h.click()};return O.jsx("header",{className:`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${s?"bg-primary backdrop-blur-md shadow-card":"bg-transparent"}`,children:O.jsxs("nav",{className:"container mx-auto px-6 py-4",children:[O.jsxs("div",{className:"flex items-center justify-between",children:[O.jsxs("div",{className:"text-2xl font-futuristic font-bold text-neonBlue hover:text-white transition-colors cursor-pointer flex items-center space-x-2",onClick:()=>u("home"),children:[O.jsx(Xf,{size:28,className:"text-neonBlue drop-shadow-[0_0_8px_#00ffff]"}),O.jsx("span",{className:"tracking-widest",children:"Samuel Olvera"})]}),O.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[l.map(h=>O.jsx("button",{onClick:()=>u(h.id),className:`text-sm font-medium font-futuristic transition-colors hover:text-neonBlue ${r===h.id?"text-neonBlue":"text-secondary"}`,children:h.label},h.id)),O.jsxs("button",{onClick:f,className:"flex items-center space-x-2 bg-neonBlue text-primary px-4 py-2 rounded-3xl shadow-neon-blue hover:bg-neonBlue hover:shadow-white transition-all font-futuristic",children:[O.jsx(Fp,{size:16}),O.jsx("span",{children:"CV"})]})]}),O.jsx("button",{onClick:()=>t(!e),className:"md:hidden text-neonBlue hover:text-neonBlue transition-colors",children:e?O.jsx(y0,{size:24}):O.jsx(x0,{size:24})})]}),e&&O.jsx("div",{className:"md:hidden absolute top-full left-0 right-0 bg-primary shadow-card border-t border-neonBlue",children:O.jsxs("div",{className:"flex flex-col py-4",children:[l.map(h=>O.jsx("button",{onClick:()=>u(h.id),className:`text-left px-6 py-3 text-sm font-futuristic font-medium transition-colors hover:bg-neonBlue/10 ${r===h.id?"text-neonBlue bg-neonBlue/10":"text-secondary"}`,children:h.label},h.id)),O.jsxs("button",{onClick:f,className:"mx-6 mt-2 flex items-center justify-center space-x-2 bg-neonBlue text-primary px-4 py-2 rounded-3xl shadow-neon-blue hover:bg-neonPink hover:shadow-neon-pink transition-all font-futuristic",children:[O.jsx(Fp,{size:16}),O.jsx("span",{children:"Descargar CV"})]})]})})]})})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const eo="177",w0=0,Op=1,T0=2,Xm=1,C0=2,Xi=3,qi=0,hn=1,Zn=2,Rn=0,Xs=1,zp=2,kp=3,Hp=4,R0=5,es=100,D0=101,b0=102,P0=103,I0=104,L0=200,U0=201,B0=202,N0=203,ef=204,tf=205,F0=206,O0=207,z0=208,k0=209,H0=210,G0=211,V0=212,W0=213,X0=214,nf=0,rf=1,sf=2,Qs=3,of=4,af=5,lf=6,cf=7,jm=0,j0=1,Y0=2,Rr=0,Q0=1,K0=2,q0=3,Z0=4,J0=5,$0=6,ex=7,Ym=300,Ks=301,qs=302,uf=303,ff=304,Fl=306,df=1e3,ns=1001,hf=1002,Jn=1003,tx=1004,al=1005,Cn=1006,Su=1007,is=1008,vn=1009,Qm=1010,Km=1011,Wo=1012,jf=1013,Dr=1014,ji=1015,jo=1016,Yf=1017,Qf=1018,Zs=1020,qm=35902,Zm=1021,Jm=1022,xi=1023,Xo=1026,Js=1027,$m=1028,Kf=1029,eg=1030,qf=1031,Zf=1033,Rl=33776,Dl=33777,bl=33778,Pl=33779,pf=35840,mf=35841,gf=35842,vf=35843,xf=36196,_f=37492,Af=37496,Sf=37808,yf=37809,Ef=37810,Mf=37811,wf=37812,Tf=37813,Cf=37814,Rf=37815,Df=37816,bf=37817,Pf=37818,If=37819,Lf=37820,Uf=37821,Il=36492,Bf=36494,Nf=36495,tg=36283,Ff=36284,Of=36285,zf=36286,ss=3200,nx=3201,ix=0,rx=1,Ci="",Lt="srgb",br="srgb-linear",Ul="linear",It="srgb",bs=7680,Gp=519,sx=512,ox=513,ax=514,ng=515,lx=516,cx=517,ux=518,fx=519,Vp=35044,Wp="300 es",Yi=2e3,Bl=2001;class Ji{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const s=this._listeners;s[e]===void 0&&(s[e]=[]),s[e].indexOf(t)===-1&&s[e].push(t)}hasEventListener(e,t){const s=this._listeners;return s===void 0?!1:s[e]!==void 0&&s[e].indexOf(t)!==-1}removeEventListener(e,t){const s=this._listeners;if(s===void 0)return;const a=s[e];if(a!==void 0){const l=a.indexOf(t);l!==-1&&a.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const s=t[e.type];if(s!==void 0){e.target=this;const a=s.slice(0);for(let l=0,u=a.length;l<u;l++)a[l].call(this,e);e.target=null}}}const wn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],yu=Math.PI/180,kf=180/Math.PI;function Yo(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,s=Math.random()*4294967295|0;return(wn[r&255]+wn[r>>8&255]+wn[r>>16&255]+wn[r>>24&255]+"-"+wn[e&255]+wn[e>>8&255]+"-"+wn[e>>16&15|64]+wn[e>>24&255]+"-"+wn[t&63|128]+wn[t>>8&255]+"-"+wn[t>>16&255]+wn[t>>24&255]+wn[s&255]+wn[s>>8&255]+wn[s>>16&255]+wn[s>>24&255]).toLowerCase()}function _t(r,e,t){return Math.max(e,Math.min(t,r))}function dx(r,e){return(r%e+e)%e}function Eu(r,e,t){return(1-t)*r+t*e}function No(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("Invalid component type.")}}function Gn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("Invalid component type.")}}class lt{constructor(e=0,t=0){lt.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,s=this.y,a=e.elements;return this.x=a[0]*t+a[3]*s+a[6],this.y=a[1]*t+a[4]*s+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y;return t*t+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const s=Math.cos(t),a=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*s-u*a+e.x,this.y=l*a+u*s+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qo{constructor(e=0,t=0,s=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=s,this._w=a}static slerpFlat(e,t,s,a,l,u,f){let h=s[a+0],m=s[a+1],g=s[a+2],v=s[a+3];const _=l[u+0],S=l[u+1],M=l[u+2],T=l[u+3];if(f===0){e[t+0]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v;return}if(f===1){e[t+0]=_,e[t+1]=S,e[t+2]=M,e[t+3]=T;return}if(v!==T||h!==_||m!==S||g!==M){let A=1-f;const x=h*_+m*S+g*M+v*T,L=x>=0?1:-1,I=1-x*x;if(I>Number.EPSILON){const j=Math.sqrt(I),V=Math.atan2(j,x*L);A=Math.sin(A*V)/j,f=Math.sin(f*V)/j}const R=f*L;if(h=h*A+_*R,m=m*A+S*R,g=g*A+M*R,v=v*A+T*R,A===1-f){const j=1/Math.sqrt(h*h+m*m+g*g+v*v);h*=j,m*=j,g*=j,v*=j}}e[t]=h,e[t+1]=m,e[t+2]=g,e[t+3]=v}static multiplyQuaternionsFlat(e,t,s,a,l,u){const f=s[a],h=s[a+1],m=s[a+2],g=s[a+3],v=l[u],_=l[u+1],S=l[u+2],M=l[u+3];return e[t]=f*M+g*v+h*S-m*_,e[t+1]=h*M+g*_+m*v-f*S,e[t+2]=m*M+g*S+f*_-h*v,e[t+3]=g*M-f*v-h*_-m*S,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,s,a){return this._x=e,this._y=t,this._z=s,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const s=e._x,a=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,m=f(s/2),g=f(a/2),v=f(l/2),_=h(s/2),S=h(a/2),M=h(l/2);switch(u){case"XYZ":this._x=_*g*v+m*S*M,this._y=m*S*v-_*g*M,this._z=m*g*M+_*S*v,this._w=m*g*v-_*S*M;break;case"YXZ":this._x=_*g*v+m*S*M,this._y=m*S*v-_*g*M,this._z=m*g*M-_*S*v,this._w=m*g*v+_*S*M;break;case"ZXY":this._x=_*g*v-m*S*M,this._y=m*S*v+_*g*M,this._z=m*g*M+_*S*v,this._w=m*g*v-_*S*M;break;case"ZYX":this._x=_*g*v-m*S*M,this._y=m*S*v+_*g*M,this._z=m*g*M-_*S*v,this._w=m*g*v+_*S*M;break;case"YZX":this._x=_*g*v+m*S*M,this._y=m*S*v+_*g*M,this._z=m*g*M-_*S*v,this._w=m*g*v-_*S*M;break;case"XZY":this._x=_*g*v-m*S*M,this._y=m*S*v-_*g*M,this._z=m*g*M+_*S*v,this._w=m*g*v+_*S*M;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const s=t/2,a=Math.sin(s);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(s),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,s=t[0],a=t[4],l=t[8],u=t[1],f=t[5],h=t[9],m=t[2],g=t[6],v=t[10],_=s+f+v;if(_>0){const S=.5/Math.sqrt(_+1);this._w=.25/S,this._x=(g-h)*S,this._y=(l-m)*S,this._z=(u-a)*S}else if(s>f&&s>v){const S=2*Math.sqrt(1+s-f-v);this._w=(g-h)/S,this._x=.25*S,this._y=(a+u)/S,this._z=(l+m)/S}else if(f>v){const S=2*Math.sqrt(1+f-s-v);this._w=(l-m)/S,this._x=(a+u)/S,this._y=.25*S,this._z=(h+g)/S}else{const S=2*Math.sqrt(1+v-s-f);this._w=(u-a)/S,this._x=(l+m)/S,this._y=(h+g)/S,this._z=.25*S}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let s=e.dot(t)+1;return s<Number.EPSILON?(s=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=s):(this._x=0,this._y=-e.z,this._z=e.y,this._w=s)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=s),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(_t(this.dot(e),-1,1)))}rotateTowards(e,t){const s=this.angleTo(e);if(s===0)return this;const a=Math.min(1,t/s);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const s=e._x,a=e._y,l=e._z,u=e._w,f=t._x,h=t._y,m=t._z,g=t._w;return this._x=s*g+u*f+a*m-l*h,this._y=a*g+u*h+l*f-s*m,this._z=l*g+u*m+s*h-a*f,this._w=u*g-s*f-a*h-l*m,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const s=this._x,a=this._y,l=this._z,u=this._w;let f=u*e._w+s*e._x+a*e._y+l*e._z;if(f<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,f=-f):this.copy(e),f>=1)return this._w=u,this._x=s,this._y=a,this._z=l,this;const h=1-f*f;if(h<=Number.EPSILON){const S=1-t;return this._w=S*u+t*this._w,this._x=S*s+t*this._x,this._y=S*a+t*this._y,this._z=S*l+t*this._z,this.normalize(),this}const m=Math.sqrt(h),g=Math.atan2(m,f),v=Math.sin((1-t)*g)/m,_=Math.sin(t*g)/m;return this._w=u*v+this._w*_,this._x=s*v+this._x*_,this._y=a*v+this._y*_,this._z=l*v+this._z*_,this._onChangeCallback(),this}slerpQuaternions(e,t,s){return this.copy(e).slerp(t,s)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),s=Math.random(),a=Math.sqrt(1-s),l=Math.sqrt(s);return this.set(a*Math.sin(e),a*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class ie{constructor(e=0,t=0,s=0){ie.prototype.isVector3=!0,this.x=e,this.y=t,this.z=s}set(e,t,s){return s===void 0&&(s=this.z),this.x=e,this.y=t,this.z=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Xp.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Xp.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[3]*s+l[6]*a,this.y=l[1]*t+l[4]*s+l[7]*a,this.z=l[2]*t+l[5]*s+l[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=e.elements,u=1/(l[3]*t+l[7]*s+l[11]*a+l[15]);return this.x=(l[0]*t+l[4]*s+l[8]*a+l[12])*u,this.y=(l[1]*t+l[5]*s+l[9]*a+l[13])*u,this.z=(l[2]*t+l[6]*s+l[10]*a+l[14])*u,this}applyQuaternion(e){const t=this.x,s=this.y,a=this.z,l=e.x,u=e.y,f=e.z,h=e.w,m=2*(u*a-f*s),g=2*(f*t-l*a),v=2*(l*s-u*t);return this.x=t+h*m+u*v-f*g,this.y=s+h*g+f*m-l*v,this.z=a+h*v+l*g-u*m,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,s=this.y,a=this.z,l=e.elements;return this.x=l[0]*t+l[4]*s+l[8]*a,this.y=l[1]*t+l[5]*s+l[9]*a,this.z=l[2]*t+l[6]*s+l[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const s=e.x,a=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=a*h-l*f,this.y=l*u-s*h,this.z=s*f-a*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const s=e.dot(this)/t;return this.copy(e).multiplyScalar(s)}projectOnPlane(e){return Mu.copy(this).projectOnVector(e),this.sub(Mu)}reflect(e){return this.sub(Mu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const s=this.dot(e)/t;return Math.acos(_t(s,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,s=this.y-e.y,a=this.z-e.z;return t*t+s*s+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,s){const a=Math.sin(t)*e;return this.x=a*Math.sin(s),this.y=Math.cos(t)*e,this.z=a*Math.cos(s),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,s){return this.x=e*Math.sin(t),this.y=s,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),s=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=s,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,s=Math.sqrt(1-t*t);return this.x=s*Math.cos(e),this.y=t,this.z=s*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Mu=new ie,Xp=new Qo;class ut{constructor(e,t,s,a,l,u,f,h,m){ut.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,f,h,m)}set(e,t,s,a,l,u,f,h,m){const g=this.elements;return g[0]=e,g[1]=a,g[2]=f,g[3]=t,g[4]=l,g[5]=h,g[6]=s,g[7]=u,g[8]=m,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],this}extractBasis(e,t,s){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),s.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],f=s[3],h=s[6],m=s[1],g=s[4],v=s[7],_=s[2],S=s[5],M=s[8],T=a[0],A=a[3],x=a[6],L=a[1],I=a[4],R=a[7],j=a[2],V=a[5],F=a[8];return l[0]=u*T+f*L+h*j,l[3]=u*A+f*I+h*V,l[6]=u*x+f*R+h*F,l[1]=m*T+g*L+v*j,l[4]=m*A+g*I+v*V,l[7]=m*x+g*R+v*F,l[2]=_*T+S*L+M*j,l[5]=_*A+S*I+M*V,l[8]=_*x+S*R+M*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8];return t*u*g-t*f*m-s*l*g+s*f*h+a*l*m-a*u*h}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8],v=g*u-f*m,_=f*h-g*l,S=m*l-u*h,M=t*v+s*_+a*S;if(M===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/M;return e[0]=v*T,e[1]=(a*m-g*s)*T,e[2]=(f*s-a*u)*T,e[3]=_*T,e[4]=(g*t-a*h)*T,e[5]=(a*l-f*t)*T,e[6]=S*T,e[7]=(s*h-m*t)*T,e[8]=(u*t-s*l)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,s,a,l,u,f){const h=Math.cos(l),m=Math.sin(l);return this.set(s*h,s*m,-s*(h*u+m*f)+u+e,-a*m,a*h,-a*(-m*u+h*f)+f+t,0,0,1),this}scale(e,t){return this.premultiply(wu.makeScale(e,t)),this}rotate(e){return this.premultiply(wu.makeRotation(-e)),this}translate(e,t){return this.premultiply(wu.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,s,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<9;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<9;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const wu=new ut;function ig(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function Nl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function hx(){const r=Nl("canvas");return r.style.display="block",r}const jp={};function js(r){r in jp||(jp[r]=!0,console.warn(r))}function px(r,e,t){return new Promise(function(s,a){function l(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:a();break;case r.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:s()}}setTimeout(l,t)})}function mx(r){const e=r.elements;e[2]=.5*e[2]+.5*e[3],e[6]=.5*e[6]+.5*e[7],e[10]=.5*e[10]+.5*e[11],e[14]=.5*e[14]+.5*e[15]}function gx(r){const e=r.elements;e[11]===-1?(e[10]=-e[10]-1,e[14]=-e[14]):(e[10]=-e[10],e[14]=-e[14]+1)}const Yp=new ut().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Qp=new ut().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function vx(){const r={enabled:!0,workingColorSpace:br,spaces:{},convert:function(a,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===It&&(a.r=Qi(a.r),a.g=Qi(a.g),a.b=Qi(a.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(a.applyMatrix3(this.spaces[l].toXYZ),a.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===It&&(a.r=Ys(a.r),a.g=Ys(a.g),a.b=Ys(a.b))),a},workingToColorSpace:function(a,l){return this.convert(a,this.workingColorSpace,l)},colorSpaceToWorking:function(a,l){return this.convert(a,l,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ci?Ul:this.spaces[a].transfer},getLuminanceCoefficients:function(a,l=this.workingColorSpace){return a.fromArray(this.spaces[l].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,l,u){return a.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,l){return js("THREE.ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(a,l)},toWorkingColorSpace:function(a,l){return js("THREE.ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(a,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],s=[.3127,.329];return r.define({[br]:{primaries:e,whitePoint:s,transfer:Ul,toXYZ:Yp,fromXYZ:Qp,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Lt},outputColorSpaceConfig:{drawingBufferColorSpace:Lt}},[Lt]:{primaries:e,whitePoint:s,transfer:It,toXYZ:Yp,fromXYZ:Qp,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Lt}}}),r}const Tt=vx();function Qi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function Ys(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let Ps;class xx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let s;if(e instanceof HTMLCanvasElement)s=e;else{Ps===void 0&&(Ps=Nl("canvas")),Ps.width=e.width,Ps.height=e.height;const a=Ps.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),s=Ps}return s.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nl("canvas");t.width=e.width,t.height=e.height;const s=t.getContext("2d");s.drawImage(e,0,0,e.width,e.height);const a=s.getImageData(0,0,e.width,e.height),l=a.data;for(let u=0;u<l.length;u++)l[u]=Qi(l[u]/255)*255;return s.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let s=0;s<t.length;s++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[s]=Math.floor(Qi(t[s]/255)*255):t[s]=Qi(t[s]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let _x=0;class Jf{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:_x++}),this.uuid=Yo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const s={uuid:this.uuid,url:""},a=this.data;if(a!==null){let l;if(Array.isArray(a)){l=[];for(let u=0,f=a.length;u<f;u++)a[u].isDataTexture?l.push(Tu(a[u].image)):l.push(Tu(a[u]))}else l=Tu(a);s.url=l}return t||(e.images[this.uuid]=s),s}}function Tu(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?xx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let Ax=0;const Cu=new ie;class nn extends Ji{constructor(e=nn.DEFAULT_IMAGE,t=nn.DEFAULT_MAPPING,s=ns,a=ns,l=Cn,u=is,f=xi,h=vn,m=nn.DEFAULT_ANISOTROPY,g=Ci){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ax++}),this.uuid=Yo(),this.name="",this.source=new Jf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=s,this.wrapT=a,this.magFilter=l,this.minFilter=u,this.anisotropy=m,this.format=f,this.internalFormat=null,this.type=h,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ut,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=g,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(Cu).x}get height(){return this.source.getSize(Cu).y}get depth(){return this.source.getSize(Cu).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Texture.setValues(): property '${t}' does not exist.`);continue}a&&s&&a.isVector2&&s.isVector2||a&&s&&a.isVector3&&s.isVector3||a&&s&&a.isMatrix3&&s.isMatrix3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const s={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(s.userData=this.userData),t||(e.textures[this.uuid]=s),s}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ym)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case df:e.x=e.x-Math.floor(e.x);break;case ns:e.x=e.x<0?0:1;break;case hf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case df:e.y=e.y-Math.floor(e.y);break;case ns:e.y=e.y<0?0:1;break;case hf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}nn.DEFAULT_IMAGE=null;nn.DEFAULT_MAPPING=Ym;nn.DEFAULT_ANISOTROPY=1;class jt{constructor(e=0,t=0,s=0,a=1){jt.prototype.isVector4=!0,this.x=e,this.y=t,this.z=s,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,s,a){return this.x=e,this.y=t,this.z=s,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,s=this.y,a=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*s+u[8]*a+u[12]*l,this.y=u[1]*t+u[5]*s+u[9]*a+u[13]*l,this.z=u[2]*t+u[6]*s+u[10]*a+u[14]*l,this.w=u[3]*t+u[7]*s+u[11]*a+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,s,a,l;const h=e.elements,m=h[0],g=h[4],v=h[8],_=h[1],S=h[5],M=h[9],T=h[2],A=h[6],x=h[10];if(Math.abs(g-_)<.01&&Math.abs(v-T)<.01&&Math.abs(M-A)<.01){if(Math.abs(g+_)<.1&&Math.abs(v+T)<.1&&Math.abs(M+A)<.1&&Math.abs(m+S+x-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const I=(m+1)/2,R=(S+1)/2,j=(x+1)/2,V=(g+_)/4,F=(v+T)/4,Y=(M+A)/4;return I>R&&I>j?I<.01?(s=0,a=.707106781,l=.707106781):(s=Math.sqrt(I),a=V/s,l=F/s):R>j?R<.01?(s=.707106781,a=0,l=.707106781):(a=Math.sqrt(R),s=V/a,l=Y/a):j<.01?(s=.707106781,a=.707106781,l=0):(l=Math.sqrt(j),s=F/l,a=Y/l),this.set(s,a,l,t),this}let L=Math.sqrt((A-M)*(A-M)+(v-T)*(v-T)+(_-g)*(_-g));return Math.abs(L)<.001&&(L=1),this.x=(A-M)/L,this.y=(v-T)/L,this.z=(_-g)/L,this.w=Math.acos((m+S+x-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=_t(this.x,e.x,t.x),this.y=_t(this.y,e.y,t.y),this.z=_t(this.z,e.z,t.z),this.w=_t(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=_t(this.x,e,t),this.y=_t(this.y,e,t),this.z=_t(this.z,e,t),this.w=_t(this.w,e,t),this}clampLength(e,t){const s=this.length();return this.divideScalar(s||1).multiplyScalar(_t(s,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,s){return this.x=e.x+(t.x-e.x)*s,this.y=e.y+(t.y-e.y)*s,this.z=e.z+(t.z-e.z)*s,this.w=e.w+(t.w-e.w)*s,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Sx extends Ji{constructor(e=1,t=1,s={}){super(),s=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Cn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},s),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=s.depth,this.scissor=new jt(0,0,e,t),this.scissorTest=!1,this.viewport=new jt(0,0,e,t);const a={width:e,height:t,depth:s.depth},l=new nn(a);this.textures=[];const u=s.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(s),this.depthBuffer=s.depthBuffer,this.stencilBuffer=s.stencilBuffer,this.resolveDepthBuffer=s.resolveDepthBuffer,this.resolveStencilBuffer=s.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=s.depthTexture,this.samples=s.samples,this.multiview=s.multiview}_setTextureOptions(e={}){const t={minFilter:Cn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let s=0;s<this.textures.length;s++)this.textures[s].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,s=1){if(this.width!==e||this.height!==t||this.depth!==s){this.width=e,this.height=t,this.depth=s;for(let a=0,l=this.textures.length;a<l;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=s,this.textures[a].isArrayTexture=this.textures[a].image.depth>1;this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,s=e.textures.length;t<s;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new Jf(a)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Dn extends Sx{constructor(e=1,t=1,s={}){super(e,t,s),this.isWebGLRenderTarget=!0}}class rg extends nn{constructor(e=null,t=1,s=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class yx extends nn{constructor(e=null,t=1,s=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:s,depth:a},this.magFilter=Jn,this.minFilter=Jn,this.wrapR=ns,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Ko{constructor(e=new ie(1/0,1/0,1/0),t=new ie(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t+=3)this.expandByPoint(pi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,s=e.count;t<s;t++)this.expandByPoint(pi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,s=e.length;t<s;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const s=pi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(s),this.max.copy(e).add(s),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const s=e.geometry;if(s!==void 0){const l=s.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,pi):pi.fromBufferAttribute(l,u),pi.applyMatrix4(e.matrixWorld),this.expandByPoint(pi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ll.copy(e.boundingBox)):(s.boundingBox===null&&s.computeBoundingBox(),ll.copy(s.boundingBox)),ll.applyMatrix4(e.matrixWorld),this.union(ll)}const a=e.children;for(let l=0,u=a.length;l<u;l++)this.expandByObject(a[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,pi),pi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,s;return e.normal.x>0?(t=e.normal.x*this.min.x,s=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,s=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,s+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,s+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,s+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,s+=e.normal.z*this.min.z),t<=-e.constant&&s>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Fo),cl.subVectors(this.max,Fo),Is.subVectors(e.a,Fo),Ls.subVectors(e.b,Fo),Us.subVectors(e.c,Fo),Sr.subVectors(Ls,Is),yr.subVectors(Us,Ls),jr.subVectors(Is,Us);let t=[0,-Sr.z,Sr.y,0,-yr.z,yr.y,0,-jr.z,jr.y,Sr.z,0,-Sr.x,yr.z,0,-yr.x,jr.z,0,-jr.x,-Sr.y,Sr.x,0,-yr.y,yr.x,0,-jr.y,jr.x,0];return!Ru(t,Is,Ls,Us,cl)||(t=[1,0,0,0,1,0,0,0,1],!Ru(t,Is,Ls,Us,cl))?!1:(ul.crossVectors(Sr,yr),t=[ul.x,ul.y,ul.z],Ru(t,Is,Ls,Us,cl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,pi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(pi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ki[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ki[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ki[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ki[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ki[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ki[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ki[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ki[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ki),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ki=[new ie,new ie,new ie,new ie,new ie,new ie,new ie,new ie],pi=new ie,ll=new Ko,Is=new ie,Ls=new ie,Us=new ie,Sr=new ie,yr=new ie,jr=new ie,Fo=new ie,cl=new ie,ul=new ie,Yr=new ie;function Ru(r,e,t,s,a){for(let l=0,u=r.length-3;l<=u;l+=3){Yr.fromArray(r,l);const f=a.x*Math.abs(Yr.x)+a.y*Math.abs(Yr.y)+a.z*Math.abs(Yr.z),h=e.dot(Yr),m=t.dot(Yr),g=s.dot(Yr);if(Math.max(-Math.max(h,m,g),Math.min(h,m,g))>f)return!1}return!0}const Ex=new Ko,Oo=new ie,Du=new ie;class $f{constructor(e=new ie,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const s=this.center;t!==void 0?s.copy(t):Ex.setFromPoints(e).getCenter(s);let a=0;for(let l=0,u=e.length;l<u;l++)a=Math.max(a,s.distanceToSquared(e[l]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const s=this.center.distanceToSquared(e);return t.copy(e),s>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Oo.subVectors(e,this.center);const t=Oo.lengthSq();if(t>this.radius*this.radius){const s=Math.sqrt(t),a=(s-this.radius)*.5;this.center.addScaledVector(Oo,a/s),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Du.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Oo.copy(e.center).add(Du)),this.expandByPoint(Oo.copy(e.center).sub(Du))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Hi=new ie,bu=new ie,fl=new ie,Er=new ie,Pu=new ie,dl=new ie,Iu=new ie;class Mx{constructor(e=new ie,t=new ie(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Hi)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const s=t.dot(this.direction);return s<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,s)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Hi.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Hi.copy(this.origin).addScaledVector(this.direction,t),Hi.distanceToSquared(e))}distanceSqToSegment(e,t,s,a){bu.copy(e).add(t).multiplyScalar(.5),fl.copy(t).sub(e).normalize(),Er.copy(this.origin).sub(bu);const l=e.distanceTo(t)*.5,u=-this.direction.dot(fl),f=Er.dot(this.direction),h=-Er.dot(fl),m=Er.lengthSq(),g=Math.abs(1-u*u);let v,_,S,M;if(g>0)if(v=u*h-f,_=u*f-h,M=l*g,v>=0)if(_>=-M)if(_<=M){const T=1/g;v*=T,_*=T,S=v*(v+u*_+2*f)+_*(u*v+_+2*h)+m}else _=l,v=Math.max(0,-(u*_+f)),S=-v*v+_*(_+2*h)+m;else _=-l,v=Math.max(0,-(u*_+f)),S=-v*v+_*(_+2*h)+m;else _<=-M?(v=Math.max(0,-(-u*l+f)),_=v>0?-l:Math.min(Math.max(-l,-h),l),S=-v*v+_*(_+2*h)+m):_<=M?(v=0,_=Math.min(Math.max(-l,-h),l),S=_*(_+2*h)+m):(v=Math.max(0,-(u*l+f)),_=v>0?l:Math.min(Math.max(-l,-h),l),S=-v*v+_*(_+2*h)+m);else _=u>0?-l:l,v=Math.max(0,-(u*_+f)),S=-v*v+_*(_+2*h)+m;return s&&s.copy(this.origin).addScaledVector(this.direction,v),a&&a.copy(bu).addScaledVector(fl,_),S}intersectSphere(e,t){Hi.subVectors(e.center,this.origin);const s=Hi.dot(this.direction),a=Hi.dot(Hi)-s*s,l=e.radius*e.radius;if(a>l)return null;const u=Math.sqrt(l-a),f=s-u,h=s+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const s=-(this.origin.dot(e.normal)+e.constant)/t;return s>=0?s:null}intersectPlane(e,t){const s=this.distanceToPlane(e);return s===null?null:this.at(s,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let s,a,l,u,f,h;const m=1/this.direction.x,g=1/this.direction.y,v=1/this.direction.z,_=this.origin;return m>=0?(s=(e.min.x-_.x)*m,a=(e.max.x-_.x)*m):(s=(e.max.x-_.x)*m,a=(e.min.x-_.x)*m),g>=0?(l=(e.min.y-_.y)*g,u=(e.max.y-_.y)*g):(l=(e.max.y-_.y)*g,u=(e.min.y-_.y)*g),s>u||l>a||((l>s||isNaN(s))&&(s=l),(u<a||isNaN(a))&&(a=u),v>=0?(f=(e.min.z-_.z)*v,h=(e.max.z-_.z)*v):(f=(e.max.z-_.z)*v,h=(e.min.z-_.z)*v),s>h||f>a)||((f>s||s!==s)&&(s=f),(h<a||a!==a)&&(a=h),a<0)?null:this.at(s>=0?s:a,t)}intersectsBox(e){return this.intersectBox(e,Hi)!==null}intersectTriangle(e,t,s,a,l){Pu.subVectors(t,e),dl.subVectors(s,e),Iu.crossVectors(Pu,dl);let u=this.direction.dot(Iu),f;if(u>0){if(a)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Er.subVectors(this.origin,e);const h=f*this.direction.dot(dl.crossVectors(Er,dl));if(h<0)return null;const m=f*this.direction.dot(Pu.cross(Er));if(m<0||h+m>u)return null;const g=-f*Er.dot(Iu);return g<0?null:this.at(g/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class $t{constructor(e,t,s,a,l,u,f,h,m,g,v,_,S,M,T,A){$t.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,s,a,l,u,f,h,m,g,v,_,S,M,T,A)}set(e,t,s,a,l,u,f,h,m,g,v,_,S,M,T,A){const x=this.elements;return x[0]=e,x[4]=t,x[8]=s,x[12]=a,x[1]=l,x[5]=u,x[9]=f,x[13]=h,x[2]=m,x[6]=g,x[10]=v,x[14]=_,x[3]=S,x[7]=M,x[11]=T,x[15]=A,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new $t().fromArray(this.elements)}copy(e){const t=this.elements,s=e.elements;return t[0]=s[0],t[1]=s[1],t[2]=s[2],t[3]=s[3],t[4]=s[4],t[5]=s[5],t[6]=s[6],t[7]=s[7],t[8]=s[8],t[9]=s[9],t[10]=s[10],t[11]=s[11],t[12]=s[12],t[13]=s[13],t[14]=s[14],t[15]=s[15],this}copyPosition(e){const t=this.elements,s=e.elements;return t[12]=s[12],t[13]=s[13],t[14]=s[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,s){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),s.setFromMatrixColumn(this,2),this}makeBasis(e,t,s){return this.set(e.x,t.x,s.x,0,e.y,t.y,s.y,0,e.z,t.z,s.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,s=e.elements,a=1/Bs.setFromMatrixColumn(e,0).length(),l=1/Bs.setFromMatrixColumn(e,1).length(),u=1/Bs.setFromMatrixColumn(e,2).length();return t[0]=s[0]*a,t[1]=s[1]*a,t[2]=s[2]*a,t[3]=0,t[4]=s[4]*l,t[5]=s[5]*l,t[6]=s[6]*l,t[7]=0,t[8]=s[8]*u,t[9]=s[9]*u,t[10]=s[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,s=e.x,a=e.y,l=e.z,u=Math.cos(s),f=Math.sin(s),h=Math.cos(a),m=Math.sin(a),g=Math.cos(l),v=Math.sin(l);if(e.order==="XYZ"){const _=u*g,S=u*v,M=f*g,T=f*v;t[0]=h*g,t[4]=-h*v,t[8]=m,t[1]=S+M*m,t[5]=_-T*m,t[9]=-f*h,t[2]=T-_*m,t[6]=M+S*m,t[10]=u*h}else if(e.order==="YXZ"){const _=h*g,S=h*v,M=m*g,T=m*v;t[0]=_+T*f,t[4]=M*f-S,t[8]=u*m,t[1]=u*v,t[5]=u*g,t[9]=-f,t[2]=S*f-M,t[6]=T+_*f,t[10]=u*h}else if(e.order==="ZXY"){const _=h*g,S=h*v,M=m*g,T=m*v;t[0]=_-T*f,t[4]=-u*v,t[8]=M+S*f,t[1]=S+M*f,t[5]=u*g,t[9]=T-_*f,t[2]=-u*m,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const _=u*g,S=u*v,M=f*g,T=f*v;t[0]=h*g,t[4]=M*m-S,t[8]=_*m+T,t[1]=h*v,t[5]=T*m+_,t[9]=S*m-M,t[2]=-m,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const _=u*h,S=u*m,M=f*h,T=f*m;t[0]=h*g,t[4]=T-_*v,t[8]=M*v+S,t[1]=v,t[5]=u*g,t[9]=-f*g,t[2]=-m*g,t[6]=S*v+M,t[10]=_-T*v}else if(e.order==="XZY"){const _=u*h,S=u*m,M=f*h,T=f*m;t[0]=h*g,t[4]=-v,t[8]=m*g,t[1]=_*v+T,t[5]=u*g,t[9]=S*v-M,t[2]=M*v-S,t[6]=f*g,t[10]=T*v+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(wx,e,Tx)}lookAt(e,t,s){const a=this.elements;return Qn.subVectors(e,t),Qn.lengthSq()===0&&(Qn.z=1),Qn.normalize(),Mr.crossVectors(s,Qn),Mr.lengthSq()===0&&(Math.abs(s.z)===1?Qn.x+=1e-4:Qn.z+=1e-4,Qn.normalize(),Mr.crossVectors(s,Qn)),Mr.normalize(),hl.crossVectors(Qn,Mr),a[0]=Mr.x,a[4]=hl.x,a[8]=Qn.x,a[1]=Mr.y,a[5]=hl.y,a[9]=Qn.y,a[2]=Mr.z,a[6]=hl.z,a[10]=Qn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const s=e.elements,a=t.elements,l=this.elements,u=s[0],f=s[4],h=s[8],m=s[12],g=s[1],v=s[5],_=s[9],S=s[13],M=s[2],T=s[6],A=s[10],x=s[14],L=s[3],I=s[7],R=s[11],j=s[15],V=a[0],F=a[4],Y=a[8],D=a[12],C=a[1],H=a[5],ae=a[9],te=a[13],fe=a[2],pe=a[6],oe=a[10],ce=a[14],z=a[3],le=a[7],re=a[11],U=a[15];return l[0]=u*V+f*C+h*fe+m*z,l[4]=u*F+f*H+h*pe+m*le,l[8]=u*Y+f*ae+h*oe+m*re,l[12]=u*D+f*te+h*ce+m*U,l[1]=g*V+v*C+_*fe+S*z,l[5]=g*F+v*H+_*pe+S*le,l[9]=g*Y+v*ae+_*oe+S*re,l[13]=g*D+v*te+_*ce+S*U,l[2]=M*V+T*C+A*fe+x*z,l[6]=M*F+T*H+A*pe+x*le,l[10]=M*Y+T*ae+A*oe+x*re,l[14]=M*D+T*te+A*ce+x*U,l[3]=L*V+I*C+R*fe+j*z,l[7]=L*F+I*H+R*pe+j*le,l[11]=L*Y+I*ae+R*oe+j*re,l[15]=L*D+I*te+R*ce+j*U,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],s=e[4],a=e[8],l=e[12],u=e[1],f=e[5],h=e[9],m=e[13],g=e[2],v=e[6],_=e[10],S=e[14],M=e[3],T=e[7],A=e[11],x=e[15];return M*(+l*h*v-a*m*v-l*f*_+s*m*_+a*f*S-s*h*S)+T*(+t*h*S-t*m*_+l*u*_-a*u*S+a*m*g-l*h*g)+A*(+t*m*v-t*f*S-l*u*v+s*u*S+l*f*g-s*m*g)+x*(-a*f*g-t*h*v+t*f*_+a*u*v-s*u*_+s*h*g)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,s){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=s),this}invert(){const e=this.elements,t=e[0],s=e[1],a=e[2],l=e[3],u=e[4],f=e[5],h=e[6],m=e[7],g=e[8],v=e[9],_=e[10],S=e[11],M=e[12],T=e[13],A=e[14],x=e[15],L=v*A*m-T*_*m+T*h*S-f*A*S-v*h*x+f*_*x,I=M*_*m-g*A*m-M*h*S+u*A*S+g*h*x-u*_*x,R=g*T*m-M*v*m+M*f*S-u*T*S-g*f*x+u*v*x,j=M*v*h-g*T*h-M*f*_+u*T*_+g*f*A-u*v*A,V=t*L+s*I+a*R+l*j;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const F=1/V;return e[0]=L*F,e[1]=(T*_*l-v*A*l-T*a*S+s*A*S+v*a*x-s*_*x)*F,e[2]=(f*A*l-T*h*l+T*a*m-s*A*m-f*a*x+s*h*x)*F,e[3]=(v*h*l-f*_*l-v*a*m+s*_*m+f*a*S-s*h*S)*F,e[4]=I*F,e[5]=(g*A*l-M*_*l+M*a*S-t*A*S-g*a*x+t*_*x)*F,e[6]=(M*h*l-u*A*l-M*a*m+t*A*m+u*a*x-t*h*x)*F,e[7]=(u*_*l-g*h*l+g*a*m-t*_*m-u*a*S+t*h*S)*F,e[8]=R*F,e[9]=(M*v*l-g*T*l-M*s*S+t*T*S+g*s*x-t*v*x)*F,e[10]=(u*T*l-M*f*l+M*s*m-t*T*m-u*s*x+t*f*x)*F,e[11]=(g*f*l-u*v*l-g*s*m+t*v*m+u*s*S-t*f*S)*F,e[12]=j*F,e[13]=(g*T*a-M*v*a+M*s*_-t*T*_-g*s*A+t*v*A)*F,e[14]=(M*f*a-u*T*a-M*s*h+t*T*h+u*s*A-t*f*A)*F,e[15]=(u*v*a-g*f*a+g*s*h-t*v*h-u*s*_+t*f*_)*F,this}scale(e){const t=this.elements,s=e.x,a=e.y,l=e.z;return t[0]*=s,t[4]*=a,t[8]*=l,t[1]*=s,t[5]*=a,t[9]*=l,t[2]*=s,t[6]*=a,t[10]*=l,t[3]*=s,t[7]*=a,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],s=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,s,a))}makeTranslation(e,t,s){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,s,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),s=Math.sin(e);return this.set(1,0,0,0,0,t,-s,0,0,s,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,0,s,0,0,1,0,0,-s,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),s=Math.sin(e);return this.set(t,-s,0,0,s,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const s=Math.cos(t),a=Math.sin(t),l=1-s,u=e.x,f=e.y,h=e.z,m=l*u,g=l*f;return this.set(m*u+s,m*f-a*h,m*h+a*f,0,m*f+a*h,g*f+s,g*h-a*u,0,m*h-a*f,g*h+a*u,l*h*h+s,0,0,0,0,1),this}makeScale(e,t,s){return this.set(e,0,0,0,0,t,0,0,0,0,s,0,0,0,0,1),this}makeShear(e,t,s,a,l,u){return this.set(1,s,l,0,e,1,u,0,t,a,1,0,0,0,0,1),this}compose(e,t,s){const a=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,m=l+l,g=u+u,v=f+f,_=l*m,S=l*g,M=l*v,T=u*g,A=u*v,x=f*v,L=h*m,I=h*g,R=h*v,j=s.x,V=s.y,F=s.z;return a[0]=(1-(T+x))*j,a[1]=(S+R)*j,a[2]=(M-I)*j,a[3]=0,a[4]=(S-R)*V,a[5]=(1-(_+x))*V,a[6]=(A+L)*V,a[7]=0,a[8]=(M+I)*F,a[9]=(A-L)*F,a[10]=(1-(_+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,s){const a=this.elements;let l=Bs.set(a[0],a[1],a[2]).length();const u=Bs.set(a[4],a[5],a[6]).length(),f=Bs.set(a[8],a[9],a[10]).length();this.determinant()<0&&(l=-l),e.x=a[12],e.y=a[13],e.z=a[14],mi.copy(this);const m=1/l,g=1/u,v=1/f;return mi.elements[0]*=m,mi.elements[1]*=m,mi.elements[2]*=m,mi.elements[4]*=g,mi.elements[5]*=g,mi.elements[6]*=g,mi.elements[8]*=v,mi.elements[9]*=v,mi.elements[10]*=v,t.setFromRotationMatrix(mi),s.x=l,s.y=u,s.z=f,this}makePerspective(e,t,s,a,l,u,f=Yi){const h=this.elements,m=2*l/(t-e),g=2*l/(s-a),v=(t+e)/(t-e),_=(s+a)/(s-a);let S,M;if(f===Yi)S=-(u+l)/(u-l),M=-2*u*l/(u-l);else if(f===Bl)S=-u/(u-l),M=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return h[0]=m,h[4]=0,h[8]=v,h[12]=0,h[1]=0,h[5]=g,h[9]=_,h[13]=0,h[2]=0,h[6]=0,h[10]=S,h[14]=M,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,s,a,l,u,f=Yi){const h=this.elements,m=1/(t-e),g=1/(s-a),v=1/(u-l),_=(t+e)*m,S=(s+a)*g;let M,T;if(f===Yi)M=(u+l)*v,T=-2*v;else if(f===Bl)M=l*v,T=-1*v;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return h[0]=2*m,h[4]=0,h[8]=0,h[12]=-_,h[1]=0,h[5]=2*g,h[9]=0,h[13]=-S,h[2]=0,h[6]=0,h[10]=T,h[14]=-M,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,s=e.elements;for(let a=0;a<16;a++)if(t[a]!==s[a])return!1;return!0}fromArray(e,t=0){for(let s=0;s<16;s++)this.elements[s]=e[s+t];return this}toArray(e=[],t=0){const s=this.elements;return e[t]=s[0],e[t+1]=s[1],e[t+2]=s[2],e[t+3]=s[3],e[t+4]=s[4],e[t+5]=s[5],e[t+6]=s[6],e[t+7]=s[7],e[t+8]=s[8],e[t+9]=s[9],e[t+10]=s[10],e[t+11]=s[11],e[t+12]=s[12],e[t+13]=s[13],e[t+14]=s[14],e[t+15]=s[15],e}}const Bs=new ie,mi=new $t,wx=new ie(0,0,0),Tx=new ie(1,1,1),Mr=new ie,hl=new ie,Qn=new ie,Kp=new $t,qp=new Qo;class Zi{constructor(e=0,t=0,s=0,a=Zi.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=s,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,s,a=this._order){return this._x=e,this._y=t,this._z=s,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,s=!0){const a=e.elements,l=a[0],u=a[4],f=a[8],h=a[1],m=a[5],g=a[9],v=a[2],_=a[6],S=a[10];switch(t){case"XYZ":this._y=Math.asin(_t(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-g,S),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,m),this._z=0);break;case"YXZ":this._x=Math.asin(-_t(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(f,S),this._z=Math.atan2(h,m)):(this._y=Math.atan2(-v,l),this._z=0);break;case"ZXY":this._x=Math.asin(_t(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-v,S),this._z=Math.atan2(-u,m)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-_t(v,-1,1)),Math.abs(v)<.9999999?(this._x=Math.atan2(_,S),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,m));break;case"YZX":this._z=Math.asin(_t(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-g,m),this._y=Math.atan2(-v,l)):(this._x=0,this._y=Math.atan2(f,S));break;case"XZY":this._z=Math.asin(-_t(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,m),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-g,S),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,s===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,s){return Kp.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Kp,t,s)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return qp.setFromEuler(this),this.setFromQuaternion(qp,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zi.DEFAULT_ORDER="XYZ";class sg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cx=0;const Zp=new ie,Ns=new Qo,Gi=new $t,pl=new ie,zo=new ie,Rx=new ie,Dx=new Qo,Jp=new ie(1,0,0),$p=new ie(0,1,0),em=new ie(0,0,1),tm={type:"added"},bx={type:"removed"},Fs={type:"childadded",child:null},Lu={type:"childremoved",child:null};class Vn extends Ji{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=Yo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Vn.DEFAULT_UP.clone();const e=new ie,t=new Zi,s=new Qo,a=new ie(1,1,1);function l(){s.setFromEuler(t,!1)}function u(){t.setFromQuaternion(s,void 0,!1)}t._onChange(l),s._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:s},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $t},normalMatrix:{value:new ut}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Vn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new sg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.multiply(Ns),this}rotateOnWorldAxis(e,t){return Ns.setFromAxisAngle(e,t),this.quaternion.premultiply(Ns),this}rotateX(e){return this.rotateOnAxis(Jp,e)}rotateY(e){return this.rotateOnAxis($p,e)}rotateZ(e){return this.rotateOnAxis(em,e)}translateOnAxis(e,t){return Zp.copy(e).applyQuaternion(this.quaternion),this.position.add(Zp.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Jp,e)}translateY(e){return this.translateOnAxis($p,e)}translateZ(e){return this.translateOnAxis(em,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gi.copy(this.matrixWorld).invert())}lookAt(e,t,s){e.isVector3?pl.copy(e):pl.set(e,t,s);const a=this.parent;this.updateWorldMatrix(!0,!1),zo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gi.lookAt(zo,pl,this.up):Gi.lookAt(pl,zo,this.up),this.quaternion.setFromRotationMatrix(Gi),a&&(Gi.extractRotation(a.matrixWorld),Ns.setFromRotationMatrix(Gi),this.quaternion.premultiply(Ns.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(tm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let s=0;s<arguments.length;s++)this.remove(arguments[s]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(bx),Lu.child=e,this.dispatchEvent(Lu),Lu.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gi.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(tm),Fs.child=e,this.dispatchEvent(Fs),Fs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let s=0,a=this.children.length;s<a;s++){const u=this.children[s].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,s=[]){this[e]===t&&s.push(this);const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].getObjectsByProperty(e,t,s);return s}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,e,Rx),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(zo,Dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let s=0,a=t.length;s<a;s++)t[s].updateMatrixWorld(e)}updateWorldMatrix(e,t){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),t===!0){const a=this.children;for(let l=0,u=a.length;l<u;l++)a[l].updateWorldMatrix(!1,!0)}}toJSON(e){const t=e===void 0||typeof e=="string",s={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},s.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,this.name!==""&&(a.name=this.name),this.castShadow===!0&&(a.castShadow=!0),this.receiveShadow===!0&&(a.receiveShadow=!0),this.visible===!1&&(a.visible=!1),this.frustumCulled===!1&&(a.frustumCulled=!1),this.renderOrder!==0&&(a.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(a.matrixAutoUpdate=!1),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(f=>({...f})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let m=0,g=h.length;m<g;m++){const v=h[m];l(e.shapes,v)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,m=this.material.length;h<m;h++)f.push(l(e.materials,this.material[h]));a.material=f}else a.material=l(e.materials,this.material);if(this.children.length>0){a.children=[];for(let f=0;f<this.children.length;f++)a.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];a.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),m=u(e.textures),g=u(e.images),v=u(e.shapes),_=u(e.skeletons),S=u(e.animations),M=u(e.nodes);f.length>0&&(s.geometries=f),h.length>0&&(s.materials=h),m.length>0&&(s.textures=m),g.length>0&&(s.images=g),v.length>0&&(s.shapes=v),_.length>0&&(s.skeletons=_),S.length>0&&(s.animations=S),M.length>0&&(s.nodes=M)}return s.object=a,s;function u(f){const h=[];for(const m in f){const g=f[m];delete g.metadata,h.push(g)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let s=0;s<e.children.length;s++){const a=e.children[s];this.add(a.clone())}return this}}Vn.DEFAULT_UP=new ie(0,1,0);Vn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Vn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const gi=new ie,Vi=new ie,Uu=new ie,Wi=new ie,Os=new ie,zs=new ie,nm=new ie,Bu=new ie,Nu=new ie,Fu=new ie,Ou=new jt,zu=new jt,ku=new jt;class vi{constructor(e=new ie,t=new ie,s=new ie){this.a=e,this.b=t,this.c=s}static getNormal(e,t,s,a){a.subVectors(s,t),gi.subVectors(e,t),a.cross(gi);const l=a.lengthSq();return l>0?a.multiplyScalar(1/Math.sqrt(l)):a.set(0,0,0)}static getBarycoord(e,t,s,a,l){gi.subVectors(a,t),Vi.subVectors(s,t),Uu.subVectors(e,t);const u=gi.dot(gi),f=gi.dot(Vi),h=gi.dot(Uu),m=Vi.dot(Vi),g=Vi.dot(Uu),v=u*m-f*f;if(v===0)return l.set(0,0,0),null;const _=1/v,S=(m*h-f*g)*_,M=(u*g-f*h)*_;return l.set(1-S-M,M,S)}static containsPoint(e,t,s,a){return this.getBarycoord(e,t,s,a,Wi)===null?!1:Wi.x>=0&&Wi.y>=0&&Wi.x+Wi.y<=1}static getInterpolation(e,t,s,a,l,u,f,h){return this.getBarycoord(e,t,s,a,Wi)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,Wi.x),h.addScaledVector(u,Wi.y),h.addScaledVector(f,Wi.z),h)}static getInterpolatedAttribute(e,t,s,a,l,u){return Ou.setScalar(0),zu.setScalar(0),ku.setScalar(0),Ou.fromBufferAttribute(e,t),zu.fromBufferAttribute(e,s),ku.fromBufferAttribute(e,a),u.setScalar(0),u.addScaledVector(Ou,l.x),u.addScaledVector(zu,l.y),u.addScaledVector(ku,l.z),u}static isFrontFacing(e,t,s,a){return gi.subVectors(s,t),Vi.subVectors(e,t),gi.cross(Vi).dot(a)<0}set(e,t,s){return this.a.copy(e),this.b.copy(t),this.c.copy(s),this}setFromPointsAndIndices(e,t,s,a){return this.a.copy(e[t]),this.b.copy(e[s]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,s,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,s),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return gi.subVectors(this.c,this.b),Vi.subVectors(this.a,this.b),gi.cross(Vi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return vi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return vi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,s,a,l){return vi.getInterpolation(e,this.a,this.b,this.c,t,s,a,l)}containsPoint(e){return vi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return vi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const s=this.a,a=this.b,l=this.c;let u,f;Os.subVectors(a,s),zs.subVectors(l,s),Bu.subVectors(e,s);const h=Os.dot(Bu),m=zs.dot(Bu);if(h<=0&&m<=0)return t.copy(s);Nu.subVectors(e,a);const g=Os.dot(Nu),v=zs.dot(Nu);if(g>=0&&v<=g)return t.copy(a);const _=h*v-g*m;if(_<=0&&h>=0&&g<=0)return u=h/(h-g),t.copy(s).addScaledVector(Os,u);Fu.subVectors(e,l);const S=Os.dot(Fu),M=zs.dot(Fu);if(M>=0&&S<=M)return t.copy(l);const T=S*m-h*M;if(T<=0&&m>=0&&M<=0)return f=m/(m-M),t.copy(s).addScaledVector(zs,f);const A=g*M-S*v;if(A<=0&&v-g>=0&&S-M>=0)return nm.subVectors(l,a),f=(v-g)/(v-g+(S-M)),t.copy(a).addScaledVector(nm,f);const x=1/(A+T+_);return u=T*x,f=_*x,t.copy(s).addScaledVector(Os,u).addScaledVector(zs,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const og={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},wr={h:0,s:0,l:0},ml={h:0,s:0,l:0};function Hu(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Rt{constructor(e,t,s){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,s)}set(e,t,s){if(t===void 0&&s===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,s);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Lt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,s,a=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=s,Tt.colorSpaceToWorking(this,a),this}setHSL(e,t,s,a=Tt.workingColorSpace){if(e=dx(e,1),t=_t(t,0,1),s=_t(s,0,1),t===0)this.r=this.g=this.b=s;else{const l=s<=.5?s*(1+t):s+t-s*t,u=2*s-l;this.r=Hu(u,l,e+1/3),this.g=Hu(u,l,e),this.b=Hu(u,l,e-1/3)}return Tt.colorSpaceToWorking(this,a),this}setStyle(e,t=Lt){function s(l){l!==void 0&&parseFloat(l)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=a[1],f=a[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return s(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=a[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Lt){const s=og[e.toLowerCase()];return s!==void 0?this.setHex(s,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Qi(e.r),this.g=Qi(e.g),this.b=Qi(e.b),this}copyLinearToSRGB(e){return this.r=Ys(e.r),this.g=Ys(e.g),this.b=Ys(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Lt){return Tt.workingToColorSpace(Tn.copy(this),e),Math.round(_t(Tn.r*255,0,255))*65536+Math.round(_t(Tn.g*255,0,255))*256+Math.round(_t(Tn.b*255,0,255))}getHexString(e=Lt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Tn.copy(this),t);const s=Tn.r,a=Tn.g,l=Tn.b,u=Math.max(s,a,l),f=Math.min(s,a,l);let h,m;const g=(f+u)/2;if(f===u)h=0,m=0;else{const v=u-f;switch(m=g<=.5?v/(u+f):v/(2-u-f),u){case s:h=(a-l)/v+(a<l?6:0);break;case a:h=(l-s)/v+2;break;case l:h=(s-a)/v+4;break}h/=6}return e.h=h,e.s=m,e.l=g,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Tn.copy(this),t),e.r=Tn.r,e.g=Tn.g,e.b=Tn.b,e}getStyle(e=Lt){Tt.workingToColorSpace(Tn.copy(this),e);const t=Tn.r,s=Tn.g,a=Tn.b;return e!==Lt?`color(${e} ${t.toFixed(3)} ${s.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(s*255)},${Math.round(a*255)})`}offsetHSL(e,t,s){return this.getHSL(wr),this.setHSL(wr.h+e,wr.s+t,wr.l+s)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,s){return this.r=e.r+(t.r-e.r)*s,this.g=e.g+(t.g-e.g)*s,this.b=e.b+(t.b-e.b)*s,this}lerpHSL(e,t){this.getHSL(wr),e.getHSL(ml);const s=Eu(wr.h,ml.h,t),a=Eu(wr.s,ml.s,t),l=Eu(wr.l,ml.l,t);return this.setHSL(s,a,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,s=this.g,a=this.b,l=e.elements;return this.r=l[0]*t+l[3]*s+l[6]*a,this.g=l[1]*t+l[4]*s+l[7]*a,this.b=l[2]*t+l[5]*s+l[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Tn=new Rt;Rt.NAMES=og;let Px=0;class to extends Ji{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Px++}),this.uuid=Yo(),this.name="",this.type="Material",this.blending=Xs,this.side=qi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ef,this.blendDst=tf,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Rt(0,0,0),this.blendAlpha=0,this.depthFunc=Qs,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Gp,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=bs,this.stencilZFail=bs,this.stencilZPass=bs,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const s=e[t];if(s===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(s):a&&a.isVector3&&s&&s.isVector3?a.copy(s):this[t]=s}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const s={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.color&&this.color.isColor&&(s.color=this.color.getHex()),this.roughness!==void 0&&(s.roughness=this.roughness),this.metalness!==void 0&&(s.metalness=this.metalness),this.sheen!==void 0&&(s.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(s.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(s.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(s.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(s.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(s.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(s.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(s.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(s.shininess=this.shininess),this.clearcoat!==void 0&&(s.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(s.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(s.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(s.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(s.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,s.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(s.dispersion=this.dispersion),this.iridescence!==void 0&&(s.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(s.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(s.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(s.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(s.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(s.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(s.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(s.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(s.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(s.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(s.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(s.lightMap=this.lightMap.toJSON(e).uuid,s.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(s.aoMap=this.aoMap.toJSON(e).uuid,s.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(s.bumpMap=this.bumpMap.toJSON(e).uuid,s.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(s.normalMap=this.normalMap.toJSON(e).uuid,s.normalMapType=this.normalMapType,s.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(s.displacementMap=this.displacementMap.toJSON(e).uuid,s.displacementScale=this.displacementScale,s.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(s.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(s.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(s.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(s.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(s.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(s.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(s.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(s.combine=this.combine)),this.envMapRotation!==void 0&&(s.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(s.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(s.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(s.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(s.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(s.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(s.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(s.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(s.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(s.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(s.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(s.size=this.size),this.shadowSide!==null&&(s.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(s.sizeAttenuation=this.sizeAttenuation),this.blending!==Xs&&(s.blending=this.blending),this.side!==qi&&(s.side=this.side),this.vertexColors===!0&&(s.vertexColors=!0),this.opacity<1&&(s.opacity=this.opacity),this.transparent===!0&&(s.transparent=!0),this.blendSrc!==ef&&(s.blendSrc=this.blendSrc),this.blendDst!==tf&&(s.blendDst=this.blendDst),this.blendEquation!==es&&(s.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(s.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(s.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(s.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(s.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(s.blendAlpha=this.blendAlpha),this.depthFunc!==Qs&&(s.depthFunc=this.depthFunc),this.depthTest===!1&&(s.depthTest=this.depthTest),this.depthWrite===!1&&(s.depthWrite=this.depthWrite),this.colorWrite===!1&&(s.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(s.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Gp&&(s.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(s.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(s.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==bs&&(s.stencilFail=this.stencilFail),this.stencilZFail!==bs&&(s.stencilZFail=this.stencilZFail),this.stencilZPass!==bs&&(s.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(s.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(s.rotation=this.rotation),this.polygonOffset===!0&&(s.polygonOffset=!0),this.polygonOffsetFactor!==0&&(s.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(s.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(s.linewidth=this.linewidth),this.dashSize!==void 0&&(s.dashSize=this.dashSize),this.gapSize!==void 0&&(s.gapSize=this.gapSize),this.scale!==void 0&&(s.scale=this.scale),this.dithering===!0&&(s.dithering=!0),this.alphaTest>0&&(s.alphaTest=this.alphaTest),this.alphaHash===!0&&(s.alphaHash=!0),this.alphaToCoverage===!0&&(s.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(s.premultipliedAlpha=!0),this.forceSinglePass===!0&&(s.forceSinglePass=!0),this.wireframe===!0&&(s.wireframe=!0),this.wireframeLinewidth>1&&(s.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(s.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(s.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(s.flatShading=!0),this.visible===!1&&(s.visible=!1),this.toneMapped===!1&&(s.toneMapped=!1),this.fog===!1&&(s.fog=!1),Object.keys(this.userData).length>0&&(s.userData=this.userData);function a(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=a(e.textures),u=a(e.images);l.length>0&&(s.textures=l),u.length>0&&(s.images=u)}return s}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let s=null;if(t!==null){const a=t.length;s=new Array(a);for(let l=0;l!==a;++l)s[l]=t[l].clone()}return this.clippingPlanes=s,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ed extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Rt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zi,this.combine=jm,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Jt=new ie,gl=new lt;let Ix=0;class oi{constructor(e,t,s=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Ix++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=s,this.usage=Vp,this.updateRanges=[],this.gpuType=ji,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,s){e*=this.itemSize,s*=t.itemSize;for(let a=0,l=this.itemSize;a<l;a++)this.array[e+a]=t.array[s+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,s=this.count;t<s;t++)gl.fromBufferAttribute(this,t),gl.applyMatrix3(e),this.setXY(t,gl.x,gl.y);else if(this.itemSize===3)for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix3(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyMatrix4(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyMatrix4(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}applyNormalMatrix(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.applyNormalMatrix(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}transformDirection(e){for(let t=0,s=this.count;t<s;t++)Jt.fromBufferAttribute(this,t),Jt.transformDirection(e),this.setXYZ(t,Jt.x,Jt.y,Jt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let s=this.array[e*this.itemSize+t];return this.normalized&&(s=No(s,this.array)),s}setComponent(e,t,s){return this.normalized&&(s=Gn(s,this.array)),this.array[e*this.itemSize+t]=s,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=No(t,this.array)),t}setX(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=No(t,this.array)),t}setY(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=No(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=No(t,this.array)),t}setW(e,t){return this.normalized&&(t=Gn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,s){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),s=Gn(s,this.array)),this.array[e+0]=t,this.array[e+1]=s,this}setXYZ(e,t,s,a){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),s=Gn(s,this.array),a=Gn(a,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this}setXYZW(e,t,s,a,l){return e*=this.itemSize,this.normalized&&(t=Gn(t,this.array),s=Gn(s,this.array),a=Gn(a,this.array),l=Gn(l,this.array)),this.array[e+0]=t,this.array[e+1]=s,this.array[e+2]=a,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vp&&(e.usage=this.usage),e}}class ag extends oi{constructor(e,t,s){super(new Uint16Array(e),t,s)}}class lg extends oi{constructor(e,t,s){super(new Uint32Array(e),t,s)}}class rs extends oi{constructor(e,t,s){super(new Float32Array(e),t,s)}}let Lx=0;const si=new $t,Gu=new Vn,ks=new ie,Kn=new Ko,ko=new Ko,dn=new ie;class Pr extends Ji{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Lx++}),this.uuid=Yo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(ig(e)?lg:ag)(e,1):this.index=e,this}setIndirect(e){return this.indirect=e,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,s=0){this.groups.push({start:e,count:t,materialIndex:s})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const s=this.attributes.normal;if(s!==void 0){const l=new ut().getNormalMatrix(e);s.applyNormalMatrix(l),s.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return si.makeRotationFromQuaternion(e),this.applyMatrix4(si),this}rotateX(e){return si.makeRotationX(e),this.applyMatrix4(si),this}rotateY(e){return si.makeRotationY(e),this.applyMatrix4(si),this}rotateZ(e){return si.makeRotationZ(e),this.applyMatrix4(si),this}translate(e,t,s){return si.makeTranslation(e,t,s),this.applyMatrix4(si),this}scale(e,t,s){return si.makeScale(e,t,s),this.applyMatrix4(si),this}lookAt(e){return Gu.lookAt(e),Gu.updateMatrix(),this.applyMatrix4(Gu.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const s=[];for(let a=0,l=e.length;a<l;a++){const u=e[a];s.push(u.x,u.y,u.z||0)}this.setAttribute("position",new rs(s,3))}else{const s=Math.min(e.length,t.count);for(let a=0;a<s;a++){const l=e[a];t.setXYZ(a,l.x,l.y,l.z||0)}e.length>t.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Ko);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ie(-1/0,-1/0,-1/0),new ie(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const l=t[s];Kn.setFromBufferAttribute(l),this.morphTargetsRelative?(dn.addVectors(this.boundingBox.min,Kn.min),this.boundingBox.expandByPoint(dn),dn.addVectors(this.boundingBox.max,Kn.max),this.boundingBox.expandByPoint(dn)):(this.boundingBox.expandByPoint(Kn.min),this.boundingBox.expandByPoint(Kn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new $f);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ie,1/0);return}if(e){const s=this.boundingSphere.center;if(Kn.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];ko.setFromBufferAttribute(f),this.morphTargetsRelative?(dn.addVectors(Kn.min,ko.min),Kn.expandByPoint(dn),dn.addVectors(Kn.max,ko.max),Kn.expandByPoint(dn)):(Kn.expandByPoint(ko.min),Kn.expandByPoint(ko.max))}Kn.getCenter(s);let a=0;for(let l=0,u=e.count;l<u;l++)dn.fromBufferAttribute(e,l),a=Math.max(a,s.distanceToSquared(dn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let m=0,g=f.count;m<g;m++)dn.fromBufferAttribute(f,m),h&&(ks.fromBufferAttribute(e,m),dn.add(ks)),a=Math.max(a,s.distanceToSquared(dn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const s=t.position,a=t.normal,l=t.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new oi(new Float32Array(4*s.count),4));const u=this.getAttribute("tangent"),f=[],h=[];for(let Y=0;Y<s.count;Y++)f[Y]=new ie,h[Y]=new ie;const m=new ie,g=new ie,v=new ie,_=new lt,S=new lt,M=new lt,T=new ie,A=new ie;function x(Y,D,C){m.fromBufferAttribute(s,Y),g.fromBufferAttribute(s,D),v.fromBufferAttribute(s,C),_.fromBufferAttribute(l,Y),S.fromBufferAttribute(l,D),M.fromBufferAttribute(l,C),g.sub(m),v.sub(m),S.sub(_),M.sub(_);const H=1/(S.x*M.y-M.x*S.y);isFinite(H)&&(T.copy(g).multiplyScalar(M.y).addScaledVector(v,-S.y).multiplyScalar(H),A.copy(v).multiplyScalar(S.x).addScaledVector(g,-M.x).multiplyScalar(H),f[Y].add(T),f[D].add(T),f[C].add(T),h[Y].add(A),h[D].add(A),h[C].add(A))}let L=this.groups;L.length===0&&(L=[{start:0,count:e.count}]);for(let Y=0,D=L.length;Y<D;++Y){const C=L[Y],H=C.start,ae=C.count;for(let te=H,fe=H+ae;te<fe;te+=3)x(e.getX(te+0),e.getX(te+1),e.getX(te+2))}const I=new ie,R=new ie,j=new ie,V=new ie;function F(Y){j.fromBufferAttribute(a,Y),V.copy(j);const D=f[Y];I.copy(D),I.sub(j.multiplyScalar(j.dot(D))).normalize(),R.crossVectors(V,D);const H=R.dot(h[Y])<0?-1:1;u.setXYZW(Y,I.x,I.y,I.z,H)}for(let Y=0,D=L.length;Y<D;++Y){const C=L[Y],H=C.start,ae=C.count;for(let te=H,fe=H+ae;te<fe;te+=3)F(e.getX(te+0)),F(e.getX(te+1)),F(e.getX(te+2))}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let s=this.getAttribute("normal");if(s===void 0)s=new oi(new Float32Array(t.count*3),3),this.setAttribute("normal",s);else for(let _=0,S=s.count;_<S;_++)s.setXYZ(_,0,0,0);const a=new ie,l=new ie,u=new ie,f=new ie,h=new ie,m=new ie,g=new ie,v=new ie;if(e)for(let _=0,S=e.count;_<S;_+=3){const M=e.getX(_+0),T=e.getX(_+1),A=e.getX(_+2);a.fromBufferAttribute(t,M),l.fromBufferAttribute(t,T),u.fromBufferAttribute(t,A),g.subVectors(u,l),v.subVectors(a,l),g.cross(v),f.fromBufferAttribute(s,M),h.fromBufferAttribute(s,T),m.fromBufferAttribute(s,A),f.add(g),h.add(g),m.add(g),s.setXYZ(M,f.x,f.y,f.z),s.setXYZ(T,h.x,h.y,h.z),s.setXYZ(A,m.x,m.y,m.z)}else for(let _=0,S=t.count;_<S;_+=3)a.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),g.subVectors(u,l),v.subVectors(a,l),g.cross(v),s.setXYZ(_+0,g.x,g.y,g.z),s.setXYZ(_+1,g.x,g.y,g.z),s.setXYZ(_+2,g.x,g.y,g.z);this.normalizeNormals(),s.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,s=e.count;t<s;t++)dn.fromBufferAttribute(e,t),dn.normalize(),e.setXYZ(t,dn.x,dn.y,dn.z)}toNonIndexed(){function e(f,h){const m=f.array,g=f.itemSize,v=f.normalized,_=new m.constructor(h.length*g);let S=0,M=0;for(let T=0,A=h.length;T<A;T++){f.isInterleavedBufferAttribute?S=h[T]*f.data.stride+f.offset:S=h[T]*g;for(let x=0;x<g;x++)_[M++]=m[S++]}return new oi(_,g,v)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Pr,s=this.index.array,a=this.attributes;for(const f in a){const h=a[f],m=e(h,s);t.setAttribute(f,m)}const l=this.morphAttributes;for(const f in l){const h=[],m=l[f];for(let g=0,v=m.length;g<v;g++){const _=m[g],S=e(_,s);h.push(S)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const m=u[f];t.addGroup(m.start,m.count,m.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const h=this.parameters;for(const m in h)h[m]!==void 0&&(e[m]=h[m]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const s=this.attributes;for(const h in s){const m=s[h];e.data.attributes[h]=m.toJSON(e.data)}const a={};let l=!1;for(const h in this.morphAttributes){const m=this.morphAttributes[h],g=[];for(let v=0,_=m.length;v<_;v++){const S=m[v];g.push(S.toJSON(e.data))}g.length>0&&(a[h]=g,l=!0)}l&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const s=e.index;s!==null&&this.setIndex(s.clone());const a=e.attributes;for(const m in a){const g=a[m];this.setAttribute(m,g.clone(t))}const l=e.morphAttributes;for(const m in l){const g=[],v=l[m];for(let _=0,S=v.length;_<S;_++)g.push(v[_].clone(t));this.morphAttributes[m]=g}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let m=0,g=u.length;m<g;m++){const v=u[m];this.addGroup(v.start,v.count,v.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const im=new $t,Qr=new Mx,vl=new $f,rm=new ie,xl=new ie,_l=new ie,Al=new ie,Vu=new ie,Sl=new ie,sm=new ie,yl=new ie;class _i extends Vn{constructor(e=new Pr,t=new ed){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,s=Object.keys(t);if(s.length>0){const a=t[s[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=a.length;l<u;l++){const f=a[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const s=this.geometry,a=s.attributes.position,l=s.morphAttributes.position,u=s.morphTargetsRelative;t.fromBufferAttribute(a,e);const f=this.morphTargetInfluences;if(l&&f){Sl.set(0,0,0);for(let h=0,m=l.length;h<m;h++){const g=f[h],v=l[h];g!==0&&(Vu.fromBufferAttribute(v,e),u?Sl.addScaledVector(Vu,g):Sl.addScaledVector(Vu.sub(t),g))}t.add(Sl)}return t}raycast(e,t){const s=this.geometry,a=this.material,l=this.matrixWorld;a!==void 0&&(s.boundingSphere===null&&s.computeBoundingSphere(),vl.copy(s.boundingSphere),vl.applyMatrix4(l),Qr.copy(e.ray).recast(e.near),!(vl.containsPoint(Qr.origin)===!1&&(Qr.intersectSphere(vl,rm)===null||Qr.origin.distanceToSquared(rm)>(e.far-e.near)**2))&&(im.copy(l).invert(),Qr.copy(e.ray).applyMatrix4(im),!(s.boundingBox!==null&&Qr.intersectsBox(s.boundingBox)===!1)&&this._computeIntersections(e,t,Qr)))}_computeIntersections(e,t,s){let a;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,m=l.attributes.uv,g=l.attributes.uv1,v=l.attributes.normal,_=l.groups,S=l.drawRange;if(f!==null)if(Array.isArray(u))for(let M=0,T=_.length;M<T;M++){const A=_[M],x=u[A.materialIndex],L=Math.max(A.start,S.start),I=Math.min(f.count,Math.min(A.start+A.count,S.start+S.count));for(let R=L,j=I;R<j;R+=3){const V=f.getX(R),F=f.getX(R+1),Y=f.getX(R+2);a=El(this,x,e,s,m,g,v,V,F,Y),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=A.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),T=Math.min(f.count,S.start+S.count);for(let A=M,x=T;A<x;A+=3){const L=f.getX(A),I=f.getX(A+1),R=f.getX(A+2);a=El(this,u,e,s,m,g,v,L,I,R),a&&(a.faceIndex=Math.floor(A/3),t.push(a))}}else if(h!==void 0)if(Array.isArray(u))for(let M=0,T=_.length;M<T;M++){const A=_[M],x=u[A.materialIndex],L=Math.max(A.start,S.start),I=Math.min(h.count,Math.min(A.start+A.count,S.start+S.count));for(let R=L,j=I;R<j;R+=3){const V=R,F=R+1,Y=R+2;a=El(this,x,e,s,m,g,v,V,F,Y),a&&(a.faceIndex=Math.floor(R/3),a.face.materialIndex=A.materialIndex,t.push(a))}}else{const M=Math.max(0,S.start),T=Math.min(h.count,S.start+S.count);for(let A=M,x=T;A<x;A+=3){const L=A,I=A+1,R=A+2;a=El(this,u,e,s,m,g,v,L,I,R),a&&(a.faceIndex=Math.floor(A/3),t.push(a))}}}}function Ux(r,e,t,s,a,l,u,f){let h;if(e.side===hn?h=s.intersectTriangle(u,l,a,!0,f):h=s.intersectTriangle(a,l,u,e.side===qi,f),h===null)return null;yl.copy(f),yl.applyMatrix4(r.matrixWorld);const m=t.ray.origin.distanceTo(yl);return m<t.near||m>t.far?null:{distance:m,point:yl.clone(),object:r}}function El(r,e,t,s,a,l,u,f,h,m){r.getVertexPosition(f,xl),r.getVertexPosition(h,_l),r.getVertexPosition(m,Al);const g=Ux(r,e,t,s,xl,_l,Al,sm);if(g){const v=new ie;vi.getBarycoord(sm,xl,_l,Al,v),a&&(g.uv=vi.getInterpolatedAttribute(a,f,h,m,v,new lt)),l&&(g.uv1=vi.getInterpolatedAttribute(l,f,h,m,v,new lt)),u&&(g.normal=vi.getInterpolatedAttribute(u,f,h,m,v,new ie),g.normal.dot(s.direction)>0&&g.normal.multiplyScalar(-1));const _={a:f,b:h,c:m,normal:new ie,materialIndex:0};vi.getNormal(xl,_l,Al,_.normal),g.face=_,g.barycoord=v}return g}class qo extends Pr{constructor(e=1,t=1,s=1,a=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:s,widthSegments:a,heightSegments:l,depthSegments:u};const f=this;a=Math.floor(a),l=Math.floor(l),u=Math.floor(u);const h=[],m=[],g=[],v=[];let _=0,S=0;M("z","y","x",-1,-1,s,t,e,u,l,0),M("z","y","x",1,-1,s,t,-e,u,l,1),M("x","z","y",1,1,e,s,t,a,u,2),M("x","z","y",1,-1,e,s,-t,a,u,3),M("x","y","z",1,-1,e,t,s,a,l,4),M("x","y","z",-1,-1,e,t,-s,a,l,5),this.setIndex(h),this.setAttribute("position",new rs(m,3)),this.setAttribute("normal",new rs(g,3)),this.setAttribute("uv",new rs(v,2));function M(T,A,x,L,I,R,j,V,F,Y,D){const C=R/F,H=j/Y,ae=R/2,te=j/2,fe=V/2,pe=F+1,oe=Y+1;let ce=0,z=0;const le=new ie;for(let re=0;re<oe;re++){const U=re*H-te;for(let ne=0;ne<pe;ne++){const Be=ne*C-ae;le[T]=Be*L,le[A]=U*I,le[x]=fe,m.push(le.x,le.y,le.z),le[T]=0,le[A]=0,le[x]=V>0?1:-1,g.push(le.x,le.y,le.z),v.push(ne/F),v.push(1-re/Y),ce+=1}}for(let re=0;re<Y;re++)for(let U=0;U<F;U++){const ne=_+U+pe*re,Be=_+U+pe*(re+1),J=_+(U+1)+pe*(re+1),de=_+(U+1)+pe*re;h.push(ne,Be,de),h.push(Be,J,de),z+=6}f.addGroup(S,z,D),S+=z,_+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function $s(r){const e={};for(const t in r){e[t]={};for(const s in r[t]){const a=r[t][s];a&&(a.isColor||a.isMatrix3||a.isMatrix4||a.isVector2||a.isVector3||a.isVector4||a.isTexture||a.isQuaternion)?a.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][s]=null):e[t][s]=a.clone():Array.isArray(a)?e[t][s]=a.slice():e[t][s]=a}}return e}function Un(r){const e={};for(let t=0;t<r.length;t++){const s=$s(r[t]);for(const a in s)e[a]=s[a]}return e}function Bx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function cg(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const Nx={clone:$s,merge:Un};var Fx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ox=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class xn extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Fx,this.fragmentShader=Ox,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=$s(e.uniforms),this.uniformsGroups=Bx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const u=this.uniforms[a].value;u&&u.isTexture?t.uniforms[a]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[a]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[a]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[a]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[a]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[a]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[a]={type:"m4",value:u.toArray()}:t.uniforms[a]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const s={};for(const a in this.extensions)this.extensions[a]===!0&&(s[a]=!0);return Object.keys(s).length>0&&(t.extensions=s),t}}class td extends Vn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Yi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const Tr=new ie,om=new lt,am=new lt;class qn extends td{constructor(e=50,t=1,s=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=s,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(yu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kf*2*Math.atan(Math.tan(yu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,s){Tr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z),Tr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),s.set(Tr.x,Tr.y).multiplyScalar(-e/Tr.z)}getViewSize(e,t){return this.getViewBounds(e,om,am),t.subVectors(am,om)}setViewOffset(e,t,s,a,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(yu*.5*this.fov)/this.zoom,s=2*t,a=this.aspect*s,l=-.5*a;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,m=u.fullHeight;l+=u.offsetX*a/h,t-=u.offsetY*s/m,a*=u.width/h,s*=u.height/m}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+a,t,t-s,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Hs=-90,Gs=1;class zx extends Vn{constructor(e,t,s){super(),this.type="CubeCamera",this.renderTarget=s,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new qn(Hs,Gs,e,t);a.layers=this.layers,this.add(a);const l=new qn(Hs,Gs,e,t);l.layers=this.layers,this.add(l);const u=new qn(Hs,Gs,e,t);u.layers=this.layers,this.add(u);const f=new qn(Hs,Gs,e,t);f.layers=this.layers,this.add(f);const h=new qn(Hs,Gs,e,t);h.layers=this.layers,this.add(h);const m=new qn(Hs,Gs,e,t);m.layers=this.layers,this.add(m)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[s,a,l,u,f,h]=t;for(const m of t)this.remove(m);if(e===Yi)s.up.set(0,1,0),s.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===Bl)s.up.set(0,-1,0),s.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const m of t)this.add(m),m.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:s,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,m,g]=this.children,v=e.getRenderTarget(),_=e.getActiveCubeFace(),S=e.getActiveMipmapLevel(),M=e.xr.enabled;e.xr.enabled=!1;const T=s.texture.generateMipmaps;s.texture.generateMipmaps=!1,e.setRenderTarget(s,0,a),e.render(t,l),e.setRenderTarget(s,1,a),e.render(t,u),e.setRenderTarget(s,2,a),e.render(t,f),e.setRenderTarget(s,3,a),e.render(t,h),e.setRenderTarget(s,4,a),e.render(t,m),s.texture.generateMipmaps=T,e.setRenderTarget(s,5,a),e.render(t,g),e.setRenderTarget(v,_,S),e.xr.enabled=M,s.texture.needsPMREMUpdate=!0}}class ug extends nn{constructor(e=[],t=Ks,s,a,l,u,f,h,m,g){super(e,t,s,a,l,u,f,h,m,g),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class kx extends Dn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const s={width:e,height:e,depth:1},a=[s,s,s,s,s,s];this.texture=new ug(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const s={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},a=new qo(5,5,5),l=new xn({name:"CubemapFromEquirect",uniforms:$s(s.uniforms),vertexShader:s.vertexShader,fragmentShader:s.fragmentShader,side:hn,blending:Rn});l.uniforms.tEquirect.value=t;const u=new _i(a,l),f=t.minFilter;return t.minFilter===is&&(t.minFilter=Cn),new zx(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,s=!0,a=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,s,a);e.setRenderTarget(l)}}class Go extends Vn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Hx={type:"move"};class Wu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Go,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Go,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ie,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ie),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Go,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ie,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ie),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const s of e.hand.values())this._getHandJoint(t,s)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,s){let a=null,l=null,u=null;const f=this._targetRay,h=this._grip,m=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(m&&e.hand){u=!0;for(const T of e.hand.values()){const A=t.getJointPose(T,s),x=this._getHandJoint(m,T);A!==null&&(x.matrix.fromArray(A.transform.matrix),x.matrix.decompose(x.position,x.rotation,x.scale),x.matrixWorldNeedsUpdate=!0,x.jointRadius=A.radius),x.visible=A!==null}const g=m.joints["index-finger-tip"],v=m.joints["thumb-tip"],_=g.position.distanceTo(v.position),S=.02,M=.005;m.inputState.pinching&&_>S+M?(m.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!m.inputState.pinching&&_<=S-M&&(m.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,s),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1));f!==null&&(a=t.getPose(e.targetRaySpace,s),a===null&&l!==null&&(a=l),a!==null&&(f.matrix.fromArray(a.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,a.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(a.linearVelocity)):f.hasLinearVelocity=!1,a.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(a.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(Hx)))}return f!==null&&(f.visible=a!==null),h!==null&&(h.visible=l!==null),m!==null&&(m.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const s=new Go;s.matrixAutoUpdate=!1,s.visible=!1,e.joints[t.jointName]=s,e.add(s)}return e.joints[t.jointName]}}class Hf extends Vn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zi,this.environmentIntensity=1,this.environmentRotation=new Zi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xu=new ie,Gx=new ie,Vx=new ut;class Jr{constructor(e=new ie(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,s,a){return this.normal.set(e,t,s),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,s){const a=Xu.subVectors(s,t).cross(Gx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const s=e.delta(Xu),a=this.normal.dot(s);if(a===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const l=-(e.start.dot(this.normal)+this.constant)/a;return l<0||l>1?null:t.copy(e.start).addScaledVector(s,l)}intersectsLine(e){const t=this.distanceToPoint(e.start),s=this.distanceToPoint(e.end);return t<0&&s>0||s<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const s=t||Vx.getNormalMatrix(e),a=this.coplanarPoint(Xu).applyMatrix4(e),l=this.normal.applyMatrix3(s).normalize();return this.constant=-a.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Kr=new $f,Ml=new ie;class fg{constructor(e=new Jr,t=new Jr,s=new Jr,a=new Jr,l=new Jr,u=new Jr){this.planes=[e,t,s,a,l,u]}set(e,t,s,a,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(s),f[3].copy(a),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let s=0;s<6;s++)t[s].copy(e.planes[s]);return this}setFromProjectionMatrix(e,t=Yi){const s=this.planes,a=e.elements,l=a[0],u=a[1],f=a[2],h=a[3],m=a[4],g=a[5],v=a[6],_=a[7],S=a[8],M=a[9],T=a[10],A=a[11],x=a[12],L=a[13],I=a[14],R=a[15];if(s[0].setComponents(h-l,_-m,A-S,R-x).normalize(),s[1].setComponents(h+l,_+m,A+S,R+x).normalize(),s[2].setComponents(h+u,_+g,A+M,R+L).normalize(),s[3].setComponents(h-u,_-g,A-M,R-L).normalize(),s[4].setComponents(h-f,_-v,A-T,R-I).normalize(),t===Yi)s[5].setComponents(h+f,_+v,A+T,R+I).normalize();else if(t===Bl)s[5].setComponents(f,v,T,I).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Kr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Kr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Kr)}intersectsSprite(e){return Kr.center.set(0,0,0),Kr.radius=.7071067811865476,Kr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Kr)}intersectsSphere(e){const t=this.planes,s=e.center,a=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(s)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let s=0;s<6;s++){const a=t[s];if(Ml.x=a.normal.x>0?e.max.x:e.min.x,Ml.y=a.normal.y>0?e.max.y:e.min.y,Ml.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(Ml)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let s=0;s<6;s++)if(t[s].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Wx extends nn{constructor(e,t,s,a,l,u,f,h,m){super(e,t,s,a,l,u,f,h,m),this.isCanvasTexture=!0,this.needsUpdate=!0}}class nd extends nn{constructor(e,t,s=Dr,a,l,u,f=Jn,h=Jn,m,g=Xo,v=1){if(g!==Xo&&g!==Js)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:v};super(_,a,l,u,f,h,g,s,m),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Jf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class Zo extends Pr{constructor(e=1,t=1,s=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:s,heightSegments:a};const l=e/2,u=t/2,f=Math.floor(s),h=Math.floor(a),m=f+1,g=h+1,v=e/f,_=t/h,S=[],M=[],T=[],A=[];for(let x=0;x<g;x++){const L=x*_-u;for(let I=0;I<m;I++){const R=I*v-l;M.push(R,-L,0),T.push(0,0,1),A.push(I/f),A.push(1-x/h)}}for(let x=0;x<h;x++)for(let L=0;L<f;L++){const I=L+m*x,R=L+m*(x+1),j=L+1+m*(x+1),V=L+1+m*x;S.push(I,R,V),S.push(R,j,V)}this.setIndex(S),this.setAttribute("position",new rs(M,3)),this.setAttribute("normal",new rs(T,3)),this.setAttribute("uv",new rs(A,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zo(e.width,e.height,e.widthSegments,e.heightSegments)}}class Xx extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ss,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class jx extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Yx{constructor(e,t,s){const a=this;let l=!1,u=0,f=0,h;const m=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=s,this.itemStart=function(g){f++,l===!1&&a.onStart!==void 0&&a.onStart(g,u,f),l=!0},this.itemEnd=function(g){u++,a.onProgress!==void 0&&a.onProgress(g,u,f),u===f&&(l=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(g){a.onError!==void 0&&a.onError(g)},this.resolveURL=function(g){return h?h(g):g},this.setURLModifier=function(g){return h=g,this},this.addHandler=function(g,v){return m.push(g,v),this},this.removeHandler=function(g){const v=m.indexOf(g);return v!==-1&&m.splice(v,2),this},this.getHandler=function(g){for(let v=0,_=m.length;v<_;v+=2){const S=m[v],M=m[v+1];if(S.global&&(S.lastIndex=0),S.test(g))return M}return null}}}class Qx extends Vn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Rt(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(t.object.target=this.target.uuid),t}}class Kx extends td{constructor(e=-1,t=1,s=1,a=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=s,this.bottom=a,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,s,a,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=s,this.view.offsetY=a,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),s=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let l=s-e,u=s+e,f=a+t,h=a-t;if(this.view!==null&&this.view.enabled){const m=(this.right-this.left)/this.view.fullWidth/this.zoom,g=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=m*this.view.offsetX,u=l+m*this.view.width,f-=g*this.view.offsetY,h=f-g*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class qx extends Qx{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}class Zx extends qn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class dt{constructor(e){this.value=e}clone(){return new dt(this.value.clone===void 0?this.value:this.value.clone())}}function lm(r,e,t,s){const a=Jx(s);switch(t){case Zm:return r*e;case $m:return r*e/a.components*a.byteLength;case Kf:return r*e/a.components*a.byteLength;case eg:return r*e*2/a.components*a.byteLength;case qf:return r*e*2/a.components*a.byteLength;case Jm:return r*e*3/a.components*a.byteLength;case xi:return r*e*4/a.components*a.byteLength;case Zf:return r*e*4/a.components*a.byteLength;case Rl:case Dl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case bl:case Pl:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case mf:case vf:return Math.max(r,16)*Math.max(e,8)/4;case pf:case gf:return Math.max(r,8)*Math.max(e,8)/2;case xf:case _f:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Af:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case yf:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Ef:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case wf:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Tf:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Df:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case bf:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case Pf:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case If:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Uf:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Il:case Bf:case Nf:return Math.ceil(r/4)*Math.ceil(e/4)*16;case tg:case Ff:return Math.ceil(r/4)*Math.ceil(e/4)*8;case Of:case zf:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Jx(r){switch(r){case vn:case Qm:return{byteLength:1,components:1};case Wo:case Km:case jo:return{byteLength:2,components:1};case Yf:case Qf:return{byteLength:2,components:4};case Dr:case jf:case ji:return{byteLength:4,components:1};case qm:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:eo}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=eo);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function dg(){let r=null,e=!1,t=null,s=null;function a(l,u){t(l,u),s=r.requestAnimationFrame(a)}return{start:function(){e!==!0&&t!==null&&(s=r.requestAnimationFrame(a),e=!0)},stop:function(){r.cancelAnimationFrame(s),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){r=l}}}function $x(r){const e=new WeakMap;function t(f,h){const m=f.array,g=f.usage,v=m.byteLength,_=r.createBuffer();r.bindBuffer(h,_),r.bufferData(h,m,g),f.onUploadCallback();let S;if(m instanceof Float32Array)S=r.FLOAT;else if(m instanceof Uint16Array)f.isFloat16BufferAttribute?S=r.HALF_FLOAT:S=r.UNSIGNED_SHORT;else if(m instanceof Int16Array)S=r.SHORT;else if(m instanceof Uint32Array)S=r.UNSIGNED_INT;else if(m instanceof Int32Array)S=r.INT;else if(m instanceof Int8Array)S=r.BYTE;else if(m instanceof Uint8Array)S=r.UNSIGNED_BYTE;else if(m instanceof Uint8ClampedArray)S=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+m);return{buffer:_,type:S,bytesPerElement:m.BYTES_PER_ELEMENT,version:f.version,size:v}}function s(f,h,m){const g=h.array,v=h.updateRanges;if(r.bindBuffer(m,f),v.length===0)r.bufferSubData(m,0,g);else{v.sort((S,M)=>S.start-M.start);let _=0;for(let S=1;S<v.length;S++){const M=v[_],T=v[S];T.start<=M.start+M.count+1?M.count=Math.max(M.count,T.start+T.count-M.start):(++_,v[_]=T)}v.length=_+1;for(let S=0,M=v.length;S<M;S++){const T=v[S];r.bufferSubData(m,T.start*g.BYTES_PER_ELEMENT,g,T.start,T.count)}h.clearUpdateRanges()}h.onUploadCallback()}function a(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(r.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const g=e.get(f);(!g||g.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const m=e.get(f);if(m===void 0)e.set(f,t(f,h));else if(m.version<f.version){if(m.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");s(m.buffer,f,h),m.version=f.version}}return{get:a,remove:l,update:u}}var e_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,t_=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,n_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,i_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,r_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,s_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,o_=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,a_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,l_=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,c_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,u_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,f_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,d_=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,h_=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,p_=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,m_=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,g_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,v_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,x_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,__=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,A_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,S_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,y_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,E_=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,M_=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,w_=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,T_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,C_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,R_=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,D_=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,b_="gl_FragColor = linearToOutputTexel( gl_FragColor );",P_=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,I_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,L_=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,U_=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,B_=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,N_=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,F_=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,O_=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,z_=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,k_=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,H_=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,G_=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,V_=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,W_=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,X_=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,j_=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Y_=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Q_=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,K_=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,q_=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Z_=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,J_=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,$_=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,eA=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,tA=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,nA=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iA=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rA=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,sA=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,oA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,aA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,cA=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,uA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,fA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mA=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,gA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,xA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_A=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,AA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,SA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,yA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,EA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,MA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,TA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,DA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,IA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,LA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,BA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,NA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,FA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,OA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,zA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,kA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,VA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,jA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,YA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,QA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,KA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,qA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,ZA=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,JA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const $A=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,eS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,tS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,sS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,oS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,aS=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,lS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,cS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,fS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,hS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,pS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gS=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,vS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,xS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_S=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,AS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,SS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,ES=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,MS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,TS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,CS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,RS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,DS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,PS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,IS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,ft={alphahash_fragment:e_,alphahash_pars_fragment:t_,alphamap_fragment:n_,alphamap_pars_fragment:i_,alphatest_fragment:r_,alphatest_pars_fragment:s_,aomap_fragment:o_,aomap_pars_fragment:a_,batching_pars_vertex:l_,batching_vertex:c_,begin_vertex:u_,beginnormal_vertex:f_,bsdfs:d_,iridescence_fragment:h_,bumpmap_pars_fragment:p_,clipping_planes_fragment:m_,clipping_planes_pars_fragment:g_,clipping_planes_pars_vertex:v_,clipping_planes_vertex:x_,color_fragment:__,color_pars_fragment:A_,color_pars_vertex:S_,color_vertex:y_,common:E_,cube_uv_reflection_fragment:M_,defaultnormal_vertex:w_,displacementmap_pars_vertex:T_,displacementmap_vertex:C_,emissivemap_fragment:R_,emissivemap_pars_fragment:D_,colorspace_fragment:b_,colorspace_pars_fragment:P_,envmap_fragment:I_,envmap_common_pars_fragment:L_,envmap_pars_fragment:U_,envmap_pars_vertex:B_,envmap_physical_pars_fragment:j_,envmap_vertex:N_,fog_vertex:F_,fog_pars_vertex:O_,fog_fragment:z_,fog_pars_fragment:k_,gradientmap_pars_fragment:H_,lightmap_pars_fragment:G_,lights_lambert_fragment:V_,lights_lambert_pars_fragment:W_,lights_pars_begin:X_,lights_toon_fragment:Y_,lights_toon_pars_fragment:Q_,lights_phong_fragment:K_,lights_phong_pars_fragment:q_,lights_physical_fragment:Z_,lights_physical_pars_fragment:J_,lights_fragment_begin:$_,lights_fragment_maps:eA,lights_fragment_end:tA,logdepthbuf_fragment:nA,logdepthbuf_pars_fragment:iA,logdepthbuf_pars_vertex:rA,logdepthbuf_vertex:sA,map_fragment:oA,map_pars_fragment:aA,map_particle_fragment:lA,map_particle_pars_fragment:cA,metalnessmap_fragment:uA,metalnessmap_pars_fragment:fA,morphinstance_vertex:dA,morphcolor_vertex:hA,morphnormal_vertex:pA,morphtarget_pars_vertex:mA,morphtarget_vertex:gA,normal_fragment_begin:vA,normal_fragment_maps:xA,normal_pars_fragment:_A,normal_pars_vertex:AA,normal_vertex:SA,normalmap_pars_fragment:yA,clearcoat_normal_fragment_begin:EA,clearcoat_normal_fragment_maps:MA,clearcoat_pars_fragment:wA,iridescence_pars_fragment:TA,opaque_fragment:CA,packing:RA,premultiplied_alpha_fragment:DA,project_vertex:bA,dithering_fragment:PA,dithering_pars_fragment:IA,roughnessmap_fragment:LA,roughnessmap_pars_fragment:UA,shadowmap_pars_fragment:BA,shadowmap_pars_vertex:NA,shadowmap_vertex:FA,shadowmask_pars_fragment:OA,skinbase_vertex:zA,skinning_pars_vertex:kA,skinning_vertex:HA,skinnormal_vertex:GA,specularmap_fragment:VA,specularmap_pars_fragment:WA,tonemapping_fragment:XA,tonemapping_pars_fragment:jA,transmission_fragment:YA,transmission_pars_fragment:QA,uv_pars_fragment:KA,uv_pars_vertex:qA,uv_vertex:ZA,worldpos_vertex:JA,background_vert:$A,background_frag:eS,backgroundCube_vert:tS,backgroundCube_frag:nS,cube_vert:iS,cube_frag:rS,depth_vert:sS,depth_frag:oS,distanceRGBA_vert:aS,distanceRGBA_frag:lS,equirect_vert:cS,equirect_frag:uS,linedashed_vert:fS,linedashed_frag:dS,meshbasic_vert:hS,meshbasic_frag:pS,meshlambert_vert:mS,meshlambert_frag:gS,meshmatcap_vert:vS,meshmatcap_frag:xS,meshnormal_vert:_S,meshnormal_frag:AS,meshphong_vert:SS,meshphong_frag:yS,meshphysical_vert:ES,meshphysical_frag:MS,meshtoon_vert:wS,meshtoon_frag:TS,points_vert:CS,points_frag:RS,shadow_vert:DS,shadow_frag:bS,sprite_vert:PS,sprite_frag:IS},Pe={common:{diffuse:{value:new Rt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ut}},envmap:{envMap:{value:null},envMapRotation:{value:new ut},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ut}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ut}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ut},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ut},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ut},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ut}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ut}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ut}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Rt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Rt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0},uvTransform:{value:new ut}},sprite:{diffuse:{value:new Rt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ut},alphaMap:{value:null},alphaMapTransform:{value:new ut},alphaTest:{value:0}}},Ti={basic:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.fog]),vertexShader:ft.meshbasic_vert,fragmentShader:ft.meshbasic_frag},lambert:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ft.meshlambert_vert,fragmentShader:ft.meshlambert_frag},phong:{uniforms:Un([Pe.common,Pe.specularmap,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},specular:{value:new Rt(1118481)},shininess:{value:30}}]),vertexShader:ft.meshphong_vert,fragmentShader:ft.meshphong_frag},standard:{uniforms:Un([Pe.common,Pe.envmap,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.roughnessmap,Pe.metalnessmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag},toon:{uniforms:Un([Pe.common,Pe.aomap,Pe.lightmap,Pe.emissivemap,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.gradientmap,Pe.fog,Pe.lights,{emissive:{value:new Rt(0)}}]),vertexShader:ft.meshtoon_vert,fragmentShader:ft.meshtoon_frag},matcap:{uniforms:Un([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,Pe.fog,{matcap:{value:null}}]),vertexShader:ft.meshmatcap_vert,fragmentShader:ft.meshmatcap_frag},points:{uniforms:Un([Pe.points,Pe.fog]),vertexShader:ft.points_vert,fragmentShader:ft.points_frag},dashed:{uniforms:Un([Pe.common,Pe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ft.linedashed_vert,fragmentShader:ft.linedashed_frag},depth:{uniforms:Un([Pe.common,Pe.displacementmap]),vertexShader:ft.depth_vert,fragmentShader:ft.depth_frag},normal:{uniforms:Un([Pe.common,Pe.bumpmap,Pe.normalmap,Pe.displacementmap,{opacity:{value:1}}]),vertexShader:ft.meshnormal_vert,fragmentShader:ft.meshnormal_frag},sprite:{uniforms:Un([Pe.sprite,Pe.fog]),vertexShader:ft.sprite_vert,fragmentShader:ft.sprite_frag},background:{uniforms:{uvTransform:{value:new ut},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ft.background_vert,fragmentShader:ft.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ut}},vertexShader:ft.backgroundCube_vert,fragmentShader:ft.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ft.cube_vert,fragmentShader:ft.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ft.equirect_vert,fragmentShader:ft.equirect_frag},distanceRGBA:{uniforms:Un([Pe.common,Pe.displacementmap,{referencePosition:{value:new ie},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ft.distanceRGBA_vert,fragmentShader:ft.distanceRGBA_frag},shadow:{uniforms:Un([Pe.lights,Pe.fog,{color:{value:new Rt(0)},opacity:{value:1}}]),vertexShader:ft.shadow_vert,fragmentShader:ft.shadow_frag}};Ti.physical={uniforms:Un([Ti.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ut},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ut},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ut},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ut},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ut},sheen:{value:0},sheenColor:{value:new Rt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ut},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ut},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ut},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ut},attenuationDistance:{value:0},attenuationColor:{value:new Rt(0)},specularColor:{value:new Rt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ut},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ut},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ut}}]),vertexShader:ft.meshphysical_vert,fragmentShader:ft.meshphysical_frag};const wl={r:0,b:0,g:0},qr=new Zi,LS=new $t;function US(r,e,t,s,a,l,u){const f=new Rt(0);let h=l===!0?0:1,m,g,v=null,_=0,S=null;function M(I){let R=I.isScene===!0?I.background:null;return R&&R.isTexture&&(R=(I.backgroundBlurriness>0?t:e).get(R)),R}function T(I){let R=!1;const j=M(I);j===null?x(f,h):j&&j.isColor&&(x(j,1),R=!0);const V=r.xr.getEnvironmentBlendMode();V==="additive"?s.buffers.color.setClear(0,0,0,1,u):V==="alpha-blend"&&s.buffers.color.setClear(0,0,0,0,u),(r.autoClear||R)&&(s.buffers.depth.setTest(!0),s.buffers.depth.setMask(!0),s.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function A(I,R){const j=M(R);j&&(j.isCubeTexture||j.mapping===Fl)?(g===void 0&&(g=new _i(new qo(1,1,1),new xn({name:"BackgroundCubeMaterial",uniforms:$s(Ti.backgroundCube.uniforms),vertexShader:Ti.backgroundCube.vertexShader,fragmentShader:Ti.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),g.geometry.deleteAttribute("normal"),g.geometry.deleteAttribute("uv"),g.onBeforeRender=function(V,F,Y){this.matrixWorld.copyPosition(Y.matrixWorld)},Object.defineProperty(g.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(g)),qr.copy(R.backgroundRotation),qr.x*=-1,qr.y*=-1,qr.z*=-1,j.isCubeTexture&&j.isRenderTargetTexture===!1&&(qr.y*=-1,qr.z*=-1),g.material.uniforms.envMap.value=j,g.material.uniforms.flipEnvMap.value=j.isCubeTexture&&j.isRenderTargetTexture===!1?-1:1,g.material.uniforms.backgroundBlurriness.value=R.backgroundBlurriness,g.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,g.material.uniforms.backgroundRotation.value.setFromMatrix4(LS.makeRotationFromEuler(qr)),g.material.toneMapped=Tt.getTransfer(j.colorSpace)!==It,(v!==j||_!==j.version||S!==r.toneMapping)&&(g.material.needsUpdate=!0,v=j,_=j.version,S=r.toneMapping),g.layers.enableAll(),I.unshift(g,g.geometry,g.material,0,0,null)):j&&j.isTexture&&(m===void 0&&(m=new _i(new Zo(2,2),new xn({name:"BackgroundMaterial",uniforms:$s(Ti.background.uniforms),vertexShader:Ti.background.vertexShader,fragmentShader:Ti.background.fragmentShader,side:qi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=j,m.material.uniforms.backgroundIntensity.value=R.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(j.colorSpace)!==It,j.matrixAutoUpdate===!0&&j.updateMatrix(),m.material.uniforms.uvTransform.value.copy(j.matrix),(v!==j||_!==j.version||S!==r.toneMapping)&&(m.material.needsUpdate=!0,v=j,_=j.version,S=r.toneMapping),m.layers.enableAll(),I.unshift(m,m.geometry,m.material,0,0,null))}function x(I,R){I.getRGB(wl,cg(r)),s.buffers.color.setClear(wl.r,wl.g,wl.b,R,u)}function L(){g!==void 0&&(g.geometry.dispose(),g.material.dispose(),g=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return f},setClearColor:function(I,R=1){f.set(I),h=R,x(f,h)},getClearAlpha:function(){return h},setClearAlpha:function(I){h=I,x(f,h)},render:T,addToRenderList:A,dispose:L}}function BS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),s={},a=_(null);let l=a,u=!1;function f(C,H,ae,te,fe){let pe=!1;const oe=v(te,ae,H);l!==oe&&(l=oe,m(l.object)),pe=S(C,te,ae,fe),pe&&M(C,te,ae,fe),fe!==null&&e.update(fe,r.ELEMENT_ARRAY_BUFFER),(pe||u)&&(u=!1,R(C,H,ae,te),fe!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(fe).buffer))}function h(){return r.createVertexArray()}function m(C){return r.bindVertexArray(C)}function g(C){return r.deleteVertexArray(C)}function v(C,H,ae){const te=ae.wireframe===!0;let fe=s[C.id];fe===void 0&&(fe={},s[C.id]=fe);let pe=fe[H.id];pe===void 0&&(pe={},fe[H.id]=pe);let oe=pe[te];return oe===void 0&&(oe=_(h()),pe[te]=oe),oe}function _(C){const H=[],ae=[],te=[];for(let fe=0;fe<t;fe++)H[fe]=0,ae[fe]=0,te[fe]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:ae,attributeDivisors:te,object:C,attributes:{},index:null}}function S(C,H,ae,te){const fe=l.attributes,pe=H.attributes;let oe=0;const ce=ae.getAttributes();for(const z in ce)if(ce[z].location>=0){const re=fe[z];let U=pe[z];if(U===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(U=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(U=C.instanceColor)),re===void 0||re.attribute!==U||U&&re.data!==U.data)return!0;oe++}return l.attributesNum!==oe||l.index!==te}function M(C,H,ae,te){const fe={},pe=H.attributes;let oe=0;const ce=ae.getAttributes();for(const z in ce)if(ce[z].location>=0){let re=pe[z];re===void 0&&(z==="instanceMatrix"&&C.instanceMatrix&&(re=C.instanceMatrix),z==="instanceColor"&&C.instanceColor&&(re=C.instanceColor));const U={};U.attribute=re,re&&re.data&&(U.data=re.data),fe[z]=U,oe++}l.attributes=fe,l.attributesNum=oe,l.index=te}function T(){const C=l.newAttributes;for(let H=0,ae=C.length;H<ae;H++)C[H]=0}function A(C){x(C,0)}function x(C,H){const ae=l.newAttributes,te=l.enabledAttributes,fe=l.attributeDivisors;ae[C]=1,te[C]===0&&(r.enableVertexAttribArray(C),te[C]=1),fe[C]!==H&&(r.vertexAttribDivisor(C,H),fe[C]=H)}function L(){const C=l.newAttributes,H=l.enabledAttributes;for(let ae=0,te=H.length;ae<te;ae++)H[ae]!==C[ae]&&(r.disableVertexAttribArray(ae),H[ae]=0)}function I(C,H,ae,te,fe,pe,oe){oe===!0?r.vertexAttribIPointer(C,H,ae,fe,pe):r.vertexAttribPointer(C,H,ae,te,fe,pe)}function R(C,H,ae,te){T();const fe=te.attributes,pe=ae.getAttributes(),oe=H.defaultAttributeValues;for(const ce in pe){const z=pe[ce];if(z.location>=0){let le=fe[ce];if(le===void 0&&(ce==="instanceMatrix"&&C.instanceMatrix&&(le=C.instanceMatrix),ce==="instanceColor"&&C.instanceColor&&(le=C.instanceColor)),le!==void 0){const re=le.normalized,U=le.itemSize,ne=e.get(le);if(ne===void 0)continue;const Be=ne.buffer,J=ne.type,de=ne.bytesPerElement,we=J===r.INT||J===r.UNSIGNED_INT||le.gpuType===jf;if(le.isInterleavedBufferAttribute){const Ae=le.data,Te=Ae.stride,qe=le.offset;if(Ae.isInstancedInterleavedBuffer){for(let We=0;We<z.locationSize;We++)x(z.location+We,Ae.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=Ae.meshPerAttribute*Ae.count)}else for(let We=0;We<z.locationSize;We++)A(z.location+We);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let We=0;We<z.locationSize;We++)I(z.location+We,U/z.locationSize,J,re,Te*de,(qe+U/z.locationSize*We)*de,we)}else{if(le.isInstancedBufferAttribute){for(let Ae=0;Ae<z.locationSize;Ae++)x(z.location+Ae,le.meshPerAttribute);C.isInstancedMesh!==!0&&te._maxInstanceCount===void 0&&(te._maxInstanceCount=le.meshPerAttribute*le.count)}else for(let Ae=0;Ae<z.locationSize;Ae++)A(z.location+Ae);r.bindBuffer(r.ARRAY_BUFFER,Be);for(let Ae=0;Ae<z.locationSize;Ae++)I(z.location+Ae,U/z.locationSize,J,re,U*de,U/z.locationSize*Ae*de,we)}}else if(oe!==void 0){const re=oe[ce];if(re!==void 0)switch(re.length){case 2:r.vertexAttrib2fv(z.location,re);break;case 3:r.vertexAttrib3fv(z.location,re);break;case 4:r.vertexAttrib4fv(z.location,re);break;default:r.vertexAttrib1fv(z.location,re)}}}}L()}function j(){Y();for(const C in s){const H=s[C];for(const ae in H){const te=H[ae];for(const fe in te)g(te[fe].object),delete te[fe];delete H[ae]}delete s[C]}}function V(C){if(s[C.id]===void 0)return;const H=s[C.id];for(const ae in H){const te=H[ae];for(const fe in te)g(te[fe].object),delete te[fe];delete H[ae]}delete s[C.id]}function F(C){for(const H in s){const ae=s[H];if(ae[C.id]===void 0)continue;const te=ae[C.id];for(const fe in te)g(te[fe].object),delete te[fe];delete ae[C.id]}}function Y(){D(),u=!0,l!==a&&(l=a,m(l.object))}function D(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:f,reset:Y,resetDefaultState:D,dispose:j,releaseStatesOfGeometry:V,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:A,disableUnusedAttributes:L}}function NS(r,e,t){let s;function a(m){s=m}function l(m,g){r.drawArrays(s,m,g),t.update(g,s,1)}function u(m,g,v){v!==0&&(r.drawArraysInstanced(s,m,g,v),t.update(g,s,v))}function f(m,g,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(s,m,0,g,0,v);let S=0;for(let M=0;M<v;M++)S+=g[M];t.update(S,s,1)}function h(m,g,v,_){if(v===0)return;const S=e.get("WEBGL_multi_draw");if(S===null)for(let M=0;M<m.length;M++)u(m[M],g[M],_[M]);else{S.multiDrawArraysInstancedWEBGL(s,m,0,g,0,_,0,v);let M=0;for(let T=0;T<v;T++)M+=g[T]*_[T];t.update(M,s,1)}}this.setMode=a,this.render=l,this.renderInstances=u,this.renderMultiDraw=f,this.renderMultiDrawInstances=h}function FS(r,e,t,s){let a;function l(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=r.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function u(F){return!(F!==xi&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const Y=F===jo&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==vn&&s.convert(F)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==ji&&!Y)}function h(F){if(F==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let m=t.precision!==void 0?t.precision:"highp";const g=h(m);g!==m&&(console.warn("THREE.WebGLRenderer:",m,"not supported, using",g,"instead."),m=g);const v=t.logarithmicDepthBuffer===!0,_=t.reverseDepthBuffer===!0&&e.has("EXT_clip_control"),S=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),M=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=r.getParameter(r.MAX_TEXTURE_SIZE),A=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),x=r.getParameter(r.MAX_VERTEX_ATTRIBS),L=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),I=r.getParameter(r.MAX_VARYING_VECTORS),R=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),j=M>0,V=r.getParameter(r.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:m,logarithmicDepthBuffer:v,reverseDepthBuffer:_,maxTextures:S,maxVertexTextures:M,maxTextureSize:T,maxCubemapSize:A,maxAttributes:x,maxVertexUniforms:L,maxVaryings:I,maxFragmentUniforms:R,vertexTextures:j,maxSamples:V}}function OS(r){const e=this;let t=null,s=0,a=!1,l=!1;const u=new Jr,f=new ut,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(v,_){const S=v.length!==0||_||s!==0||a;return a=_,s=v.length,S},this.beginShadows=function(){l=!0,g(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(v,_){t=g(v,_,0)},this.setState=function(v,_,S){const M=v.clippingPlanes,T=v.clipIntersection,A=v.clipShadows,x=r.get(v);if(!a||M===null||M.length===0||l&&!A)l?g(null):m();else{const L=l?0:s,I=L*4;let R=x.clippingState||null;h.value=R,R=g(M,_,I,S);for(let j=0;j!==I;++j)R[j]=t[j];x.clippingState=R,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=L}};function m(){h.value!==t&&(h.value=t,h.needsUpdate=s>0),e.numPlanes=s,e.numIntersection=0}function g(v,_,S,M){const T=v!==null?v.length:0;let A=null;if(T!==0){if(A=h.value,M!==!0||A===null){const x=S+T*4,L=_.matrixWorldInverse;f.getNormalMatrix(L),(A===null||A.length<x)&&(A=new Float32Array(x));for(let I=0,R=S;I!==T;++I,R+=4)u.copy(v[I]).applyMatrix4(L,f),u.normal.toArray(A,R),A[R+3]=u.constant}h.value=A,h.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,A}}function zS(r){let e=new WeakMap;function t(u,f){return f===uf?u.mapping=Ks:f===ff&&(u.mapping=qs),u}function s(u){if(u&&u.isTexture){const f=u.mapping;if(f===uf||f===ff)if(e.has(u)){const h=e.get(u).texture;return t(h,u.mapping)}else{const h=u.image;if(h&&h.height>0){const m=new kx(h.height);return m.fromEquirectangularTexture(r,u),e.set(u,m),u.addEventListener("dispose",a),t(m.texture,u.mapping)}else return null}}return u}function a(u){const f=u.target;f.removeEventListener("dispose",a);const h=e.get(f);h!==void 0&&(e.delete(f),h.dispose())}function l(){e=new WeakMap}return{get:s,dispose:l}}const Ws=4,cm=[.125,.215,.35,.446,.526,.582],ts=20,ju=new Kx,um=new Rt;let Yu=null,Qu=0,Ku=0,qu=!1;const $r=(1+Math.sqrt(5))/2,Vs=1/$r,fm=[new ie(-$r,Vs,0),new ie($r,Vs,0),new ie(-Vs,0,$r),new ie(Vs,0,$r),new ie(0,$r,-Vs),new ie(0,$r,Vs),new ie(-1,1,-1),new ie(1,1,-1),new ie(-1,1,1),new ie(1,1,1)],kS=new ie;class dm{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,s=.1,a=100,l={}){const{size:u=256,position:f=kS}=l;Yu=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,s,a,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=mm(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=pm(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Yu,Qu,Ku),this._renderer.xr.enabled=qu,e.scissorTest=!1,Tl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ks||e.mapping===qs?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Yu=this._renderer.getRenderTarget(),Qu=this._renderer.getActiveCubeFace(),Ku=this._renderer.getActiveMipmapLevel(),qu=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const s=t||this._allocateTargets();return this._textureToCubeUV(e,s),this._applyPMREM(s),this._cleanup(s),s}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,s={magFilter:Cn,minFilter:Cn,generateMipmaps:!1,type:jo,format:xi,colorSpace:br,depthBuffer:!1},a=hm(e,t,s);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=hm(e,t,s);const{_lodMax:l}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=HS(l)),this._blurMaterial=GS(l,e,t)}return a}_compileMaterial(e){const t=new _i(this._lodPlanes[0],e);this._renderer.compile(t,ju)}_sceneToCubeUV(e,t,s,a,l){const h=new qn(90,1,t,s),m=[1,-1,1,1,1,1],g=[1,1,1,-1,-1,-1],v=this._renderer,_=v.autoClear,S=v.toneMapping;v.getClearColor(um),v.toneMapping=Rr,v.autoClear=!1;const M=new ed({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),T=new _i(new qo,M);let A=!1;const x=e.background;x?x.isColor&&(M.color.copy(x),e.background=null,A=!0):(M.color.copy(um),A=!0);for(let L=0;L<6;L++){const I=L%3;I===0?(h.up.set(0,m[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+g[L],l.y,l.z)):I===1?(h.up.set(0,0,m[L]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+g[L],l.z)):(h.up.set(0,m[L],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+g[L]));const R=this._cubeSize;Tl(a,I*R,L>2?R:0,R,R),v.setRenderTarget(a),A&&v.render(T,h),v.render(e,h)}T.geometry.dispose(),T.material.dispose(),v.toneMapping=S,v.autoClear=_,e.background=x}_textureToCubeUV(e,t){const s=this._renderer,a=e.mapping===Ks||e.mapping===qs;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=mm()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=pm());const l=a?this._cubemapMaterial:this._equirectMaterial,u=new _i(this._lodPlanes[0],l),f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;Tl(t,0,0,3*h,2*h),s.setRenderTarget(t),s.render(u,ju)}_applyPMREM(e){const t=this._renderer,s=t.autoClear;t.autoClear=!1;const a=this._lodPlanes.length;for(let l=1;l<a;l++){const u=Math.sqrt(this._sigmas[l]*this._sigmas[l]-this._sigmas[l-1]*this._sigmas[l-1]),f=fm[(a-l-1)%fm.length];this._blur(e,l-1,l,u,f)}t.autoClear=s}_blur(e,t,s,a,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,s,a,"latitudinal",l),this._halfBlur(u,e,s,s,a,"longitudinal",l)}_halfBlur(e,t,s,a,l,u,f){const h=this._renderer,m=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const g=3,v=new _i(this._lodPlanes[a],m),_=m.uniforms,S=this._sizeLods[s]-1,M=isFinite(l)?Math.PI/(2*S):2*Math.PI/(2*ts-1),T=l/M,A=isFinite(l)?1+Math.floor(g*T):ts;A>ts&&console.warn(`sigmaRadians, ${l}, is too large and will clip, as it requested ${A} samples when the maximum is set to ${ts}`);const x=[];let L=0;for(let F=0;F<ts;++F){const Y=F/T,D=Math.exp(-Y*Y/2);x.push(D),F===0?L+=D:F<A&&(L+=2*D)}for(let F=0;F<x.length;F++)x[F]=x[F]/L;_.envMap.value=e.texture,_.samples.value=A,_.weights.value=x,_.latitudinal.value=u==="latitudinal",f&&(_.poleAxis.value=f);const{_lodMax:I}=this;_.dTheta.value=M,_.mipInt.value=I-s;const R=this._sizeLods[a],j=3*R*(a>I-Ws?a-I+Ws:0),V=4*(this._cubeSize-R);Tl(t,j,V,3*R,2*R),h.setRenderTarget(t),h.render(v,ju)}}function HS(r){const e=[],t=[],s=[];let a=r;const l=r-Ws+1+cm.length;for(let u=0;u<l;u++){const f=Math.pow(2,a);t.push(f);let h=1/f;u>r-Ws?h=cm[u-r+Ws-1]:u===0&&(h=0),s.push(h);const m=1/(f-2),g=-m,v=1+m,_=[g,g,v,g,v,v,g,g,v,v,g,v],S=6,M=6,T=3,A=2,x=1,L=new Float32Array(T*M*S),I=new Float32Array(A*M*S),R=new Float32Array(x*M*S);for(let V=0;V<S;V++){const F=V%3*2/3-1,Y=V>2?0:-1,D=[F,Y,0,F+2/3,Y,0,F+2/3,Y+1,0,F,Y,0,F+2/3,Y+1,0,F,Y+1,0];L.set(D,T*M*V),I.set(_,A*M*V);const C=[V,V,V,V,V,V];R.set(C,x*M*V)}const j=new Pr;j.setAttribute("position",new oi(L,T)),j.setAttribute("uv",new oi(I,A)),j.setAttribute("faceIndex",new oi(R,x)),e.push(j),a>Ws&&a--}return{lodPlanes:e,sizeLods:t,sigmas:s}}function hm(r,e,t){const s=new Dn(r,e,t);return s.texture.mapping=Fl,s.texture.name="PMREM.cubeUv",s.scissorTest=!0,s}function Tl(r,e,t,s,a){r.viewport.set(e,t,s,a),r.scissor.set(e,t,s,a)}function GS(r,e,t){const s=new Float32Array(ts),a=new ie(0,1,0);return new xn({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:s},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:a}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function pm(){return new xn({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function mm(){return new xn({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:id(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Rn,depthTest:!1,depthWrite:!1})}function id(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function VS(r){let e=new WeakMap,t=null;function s(f){if(f&&f.isTexture){const h=f.mapping,m=h===uf||h===ff,g=h===Ks||h===qs;if(m||g){let v=e.get(f);const _=v!==void 0?v.texture.pmremVersion:0;if(f.isRenderTargetTexture&&f.pmremVersion!==_)return t===null&&(t=new dm(r)),v=m?t.fromEquirectangular(f,v):t.fromCubemap(f,v),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),v.texture;if(v!==void 0)return v.texture;{const S=f.image;return m&&S&&S.height>0||g&&S&&a(S)?(t===null&&(t=new dm(r)),v=m?t.fromEquirectangular(f):t.fromCubemap(f),v.texture.pmremVersion=f.pmremVersion,e.set(f,v),f.addEventListener("dispose",l),v.texture):null}}}return f}function a(f){let h=0;const m=6;for(let g=0;g<m;g++)f[g]!==void 0&&h++;return h===m}function l(f){const h=f.target;h.removeEventListener("dispose",l);const m=e.get(h);m!==void 0&&(e.delete(h),m.dispose())}function u(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:s,dispose:u}}function WS(r){const e={};function t(s){if(e[s]!==void 0)return e[s];let a;switch(s){case"WEBGL_depth_texture":a=r.getExtension("WEBGL_depth_texture")||r.getExtension("MOZ_WEBGL_depth_texture")||r.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":a=r.getExtension("EXT_texture_filter_anisotropic")||r.getExtension("MOZ_EXT_texture_filter_anisotropic")||r.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":a=r.getExtension("WEBGL_compressed_texture_s3tc")||r.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":a=r.getExtension("WEBGL_compressed_texture_pvrtc")||r.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:a=r.getExtension(s)}return e[s]=a,a}return{has:function(s){return t(s)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(s){const a=t(s);return a===null&&js("THREE.WebGLRenderer: "+s+" extension not supported."),a}}}function XS(r,e,t,s){const a={},l=new WeakMap;function u(v){const _=v.target;_.index!==null&&e.remove(_.index);for(const M in _.attributes)e.remove(_.attributes[M]);_.removeEventListener("dispose",u),delete a[_.id];const S=l.get(_);S&&(e.remove(S),l.delete(_)),s.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function f(v,_){return a[_.id]===!0||(_.addEventListener("dispose",u),a[_.id]=!0,t.memory.geometries++),_}function h(v){const _=v.attributes;for(const S in _)e.update(_[S],r.ARRAY_BUFFER)}function m(v){const _=[],S=v.index,M=v.attributes.position;let T=0;if(S!==null){const L=S.array;T=S.version;for(let I=0,R=L.length;I<R;I+=3){const j=L[I+0],V=L[I+1],F=L[I+2];_.push(j,V,V,F,F,j)}}else if(M!==void 0){const L=M.array;T=M.version;for(let I=0,R=L.length/3-1;I<R;I+=3){const j=I+0,V=I+1,F=I+2;_.push(j,V,V,F,F,j)}}else return;const A=new(ig(_)?lg:ag)(_,1);A.version=T;const x=l.get(v);x&&e.remove(x),l.set(v,A)}function g(v){const _=l.get(v);if(_){const S=v.index;S!==null&&_.version<S.version&&m(v)}else m(v);return l.get(v)}return{get:f,update:h,getWireframeAttribute:g}}function jS(r,e,t){let s;function a(_){s=_}let l,u;function f(_){l=_.type,u=_.bytesPerElement}function h(_,S){r.drawElements(s,S,l,_*u),t.update(S,s,1)}function m(_,S,M){M!==0&&(r.drawElementsInstanced(s,S,l,_*u,M),t.update(S,s,M))}function g(_,S,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(s,S,0,l,_,0,M);let A=0;for(let x=0;x<M;x++)A+=S[x];t.update(A,s,1)}function v(_,S,M,T){if(M===0)return;const A=e.get("WEBGL_multi_draw");if(A===null)for(let x=0;x<_.length;x++)m(_[x]/u,S[x],T[x]);else{A.multiDrawElementsInstancedWEBGL(s,S,0,l,_,0,T,0,M);let x=0;for(let L=0;L<M;L++)x+=S[L]*T[L];t.update(x,s,1)}}this.setMode=a,this.setIndex=f,this.render=h,this.renderInstances=m,this.renderMultiDraw=g,this.renderMultiDrawInstances=v}function YS(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function s(l,u,f){switch(t.calls++,u){case r.TRIANGLES:t.triangles+=f*(l/3);break;case r.LINES:t.lines+=f*(l/2);break;case r.LINE_STRIP:t.lines+=f*(l-1);break;case r.LINE_LOOP:t.lines+=f*l;break;case r.POINTS:t.points+=f*l;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",u);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:s}}function QS(r,e,t){const s=new WeakMap,a=new jt;function l(u,f,h){const m=u.morphTargetInfluences,g=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,v=g!==void 0?g.length:0;let _=s.get(f);if(_===void 0||_.count!==v){let C=function(){Y.dispose(),s.delete(f),f.removeEventListener("dispose",C)};var S=C;_!==void 0&&_.texture.dispose();const M=f.morphAttributes.position!==void 0,T=f.morphAttributes.normal!==void 0,A=f.morphAttributes.color!==void 0,x=f.morphAttributes.position||[],L=f.morphAttributes.normal||[],I=f.morphAttributes.color||[];let R=0;M===!0&&(R=1),T===!0&&(R=2),A===!0&&(R=3);let j=f.attributes.position.count*R,V=1;j>e.maxTextureSize&&(V=Math.ceil(j/e.maxTextureSize),j=e.maxTextureSize);const F=new Float32Array(j*V*4*v),Y=new rg(F,j,V,v);Y.type=ji,Y.needsUpdate=!0;const D=R*4;for(let H=0;H<v;H++){const ae=x[H],te=L[H],fe=I[H],pe=j*V*4*H;for(let oe=0;oe<ae.count;oe++){const ce=oe*D;M===!0&&(a.fromBufferAttribute(ae,oe),F[pe+ce+0]=a.x,F[pe+ce+1]=a.y,F[pe+ce+2]=a.z,F[pe+ce+3]=0),T===!0&&(a.fromBufferAttribute(te,oe),F[pe+ce+4]=a.x,F[pe+ce+5]=a.y,F[pe+ce+6]=a.z,F[pe+ce+7]=0),A===!0&&(a.fromBufferAttribute(fe,oe),F[pe+ce+8]=a.x,F[pe+ce+9]=a.y,F[pe+ce+10]=a.z,F[pe+ce+11]=fe.itemSize===4?a.w:1)}}_={count:v,texture:Y,size:new lt(j,V)},s.set(f,_),f.addEventListener("dispose",C)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(r,"morphTexture",u.morphTexture,t);else{let M=0;for(let A=0;A<m.length;A++)M+=m[A];const T=f.morphTargetsRelative?1:1-M;h.getUniforms().setValue(r,"morphTargetBaseInfluence",T),h.getUniforms().setValue(r,"morphTargetInfluences",m)}h.getUniforms().setValue(r,"morphTargetsTexture",_.texture,t),h.getUniforms().setValue(r,"morphTargetsTextureSize",_.size)}return{update:l}}function KS(r,e,t,s){let a=new WeakMap;function l(h){const m=s.render.frame,g=h.geometry,v=e.get(h,g);if(a.get(v)!==m&&(e.update(v),a.set(v,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",f)===!1&&h.addEventListener("dispose",f),a.get(h)!==m&&(t.update(h.instanceMatrix,r.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,r.ARRAY_BUFFER),a.set(h,m))),h.isSkinnedMesh){const _=h.skeleton;a.get(_)!==m&&(_.update(),a.set(_,m))}return v}function u(){a=new WeakMap}function f(h){const m=h.target;m.removeEventListener("dispose",f),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:l,dispose:u}}const hg=new nn,gm=new nd(1,1),pg=new rg,mg=new yx,gg=new ug,vm=[],xm=[],_m=new Float32Array(16),Am=new Float32Array(9),Sm=new Float32Array(4);function no(r,e,t){const s=r[0];if(s<=0||s>0)return r;const a=e*t;let l=vm[a];if(l===void 0&&(l=new Float32Array(a),vm[a]=l),e!==0){s.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,r[u].toArray(l,f)}return l}function rn(r,e){if(r.length!==e.length)return!1;for(let t=0,s=r.length;t<s;t++)if(r[t]!==e[t])return!1;return!0}function sn(r,e){for(let t=0,s=e.length;t<s;t++)r[t]=e[t]}function Ol(r,e){let t=xm[e];t===void 0&&(t=new Int32Array(e),xm[e]=t);for(let s=0;s!==e;++s)t[s]=r.allocateTextureUnit();return t}function qS(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function ZS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2fv(this.addr,e),sn(t,e)}}function JS(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(rn(t,e))return;r.uniform3fv(this.addr,e),sn(t,e)}}function $S(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4fv(this.addr,e),sn(t,e)}}function ey(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(rn(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,s))return;Sm.set(s),r.uniformMatrix2fv(this.addr,!1,Sm),sn(t,s)}}function ty(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(rn(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,s))return;Am.set(s),r.uniformMatrix3fv(this.addr,!1,Am),sn(t,s)}}function ny(r,e){const t=this.cache,s=e.elements;if(s===void 0){if(rn(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),sn(t,e)}else{if(rn(t,s))return;_m.set(s),r.uniformMatrix4fv(this.addr,!1,_m),sn(t,s)}}function iy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function ry(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2iv(this.addr,e),sn(t,e)}}function sy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3iv(this.addr,e),sn(t,e)}}function oy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4iv(this.addr,e),sn(t,e)}}function ay(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function ly(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(rn(t,e))return;r.uniform2uiv(this.addr,e),sn(t,e)}}function cy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(rn(t,e))return;r.uniform3uiv(this.addr,e),sn(t,e)}}function uy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(rn(t,e))return;r.uniform4uiv(this.addr,e),sn(t,e)}}function fy(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a);let l;this.type===r.SAMPLER_2D_SHADOW?(gm.compareFunction=ng,l=gm):l=hg,t.setTexture2D(e||l,a)}function dy(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture3D(e||mg,a)}function hy(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTextureCube(e||gg,a)}function py(r,e,t){const s=this.cache,a=t.allocateTextureUnit();s[0]!==a&&(r.uniform1i(this.addr,a),s[0]=a),t.setTexture2DArray(e||pg,a)}function my(r){switch(r){case 5126:return qS;case 35664:return ZS;case 35665:return JS;case 35666:return $S;case 35674:return ey;case 35675:return ty;case 35676:return ny;case 5124:case 35670:return iy;case 35667:case 35671:return ry;case 35668:case 35672:return sy;case 35669:case 35673:return oy;case 5125:return ay;case 36294:return ly;case 36295:return cy;case 36296:return uy;case 35678:case 36198:case 36298:case 36306:case 35682:return fy;case 35679:case 36299:case 36307:return dy;case 35680:case 36300:case 36308:case 36293:return hy;case 36289:case 36303:case 36311:case 36292:return py}}function gy(r,e){r.uniform1fv(this.addr,e)}function vy(r,e){const t=no(e,this.size,2);r.uniform2fv(this.addr,t)}function xy(r,e){const t=no(e,this.size,3);r.uniform3fv(this.addr,t)}function _y(r,e){const t=no(e,this.size,4);r.uniform4fv(this.addr,t)}function Ay(r,e){const t=no(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Sy(r,e){const t=no(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function yy(r,e){const t=no(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Ey(r,e){r.uniform1iv(this.addr,e)}function My(r,e){r.uniform2iv(this.addr,e)}function wy(r,e){r.uniform3iv(this.addr,e)}function Ty(r,e){r.uniform4iv(this.addr,e)}function Cy(r,e){r.uniform1uiv(this.addr,e)}function Ry(r,e){r.uniform2uiv(this.addr,e)}function Dy(r,e){r.uniform3uiv(this.addr,e)}function by(r,e){r.uniform4uiv(this.addr,e)}function Py(r,e,t){const s=this.cache,a=e.length,l=Ol(t,a);rn(s,l)||(r.uniform1iv(this.addr,l),sn(s,l));for(let u=0;u!==a;++u)t.setTexture2D(e[u]||hg,l[u])}function Iy(r,e,t){const s=this.cache,a=e.length,l=Ol(t,a);rn(s,l)||(r.uniform1iv(this.addr,l),sn(s,l));for(let u=0;u!==a;++u)t.setTexture3D(e[u]||mg,l[u])}function Ly(r,e,t){const s=this.cache,a=e.length,l=Ol(t,a);rn(s,l)||(r.uniform1iv(this.addr,l),sn(s,l));for(let u=0;u!==a;++u)t.setTextureCube(e[u]||gg,l[u])}function Uy(r,e,t){const s=this.cache,a=e.length,l=Ol(t,a);rn(s,l)||(r.uniform1iv(this.addr,l),sn(s,l));for(let u=0;u!==a;++u)t.setTexture2DArray(e[u]||pg,l[u])}function By(r){switch(r){case 5126:return gy;case 35664:return vy;case 35665:return xy;case 35666:return _y;case 35674:return Ay;case 35675:return Sy;case 35676:return yy;case 5124:case 35670:return Ey;case 35667:case 35671:return My;case 35668:case 35672:return wy;case 35669:case 35673:return Ty;case 5125:return Cy;case 36294:return Ry;case 36295:return Dy;case 36296:return by;case 35678:case 36198:case 36298:case 36306:case 35682:return Py;case 35679:case 36299:case 36307:return Iy;case 35680:case 36300:case 36308:case 36293:return Ly;case 36289:case 36303:case 36311:case 36292:return Uy}}class Ny{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.setValue=my(t.type)}}class Fy{constructor(e,t,s){this.id=e,this.addr=s,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=By(t.type)}}class Oy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,s){const a=this.seq;for(let l=0,u=a.length;l!==u;++l){const f=a[l];f.setValue(e,t[f.id],s)}}}const Zu=/(\w+)(\])?(\[|\.)?/g;function ym(r,e){r.seq.push(e),r.map[e.id]=e}function zy(r,e,t){const s=r.name,a=s.length;for(Zu.lastIndex=0;;){const l=Zu.exec(s),u=Zu.lastIndex;let f=l[1];const h=l[2]==="]",m=l[3];if(h&&(f=f|0),m===void 0||m==="["&&u+2===a){ym(t,m===void 0?new Ny(f,r,e):new Fy(f,r,e));break}else{let v=t.map[f];v===void 0&&(v=new Oy(f),ym(t,v)),t=v}}}class Ll{constructor(e,t){this.seq=[],this.map={};const s=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<s;++a){const l=e.getActiveUniform(t,a),u=e.getUniformLocation(t,l.name);zy(l,u,this)}}setValue(e,t,s,a){const l=this.map[t];l!==void 0&&l.setValue(e,s,a)}setOptional(e,t,s){const a=t[s];a!==void 0&&this.setValue(e,s,a)}static upload(e,t,s,a){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=s[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,a)}}static seqWithValue(e,t){const s=[];for(let a=0,l=e.length;a!==l;++a){const u=e[a];u.id in t&&s.push(u)}return s}}function Em(r,e,t){const s=r.createShader(e);return r.shaderSource(s,t),r.compileShader(s),s}const ky=37297;let Hy=0;function Gy(r,e){const t=r.split(`
`),s=[],a=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=a;u<l;u++){const f=u+1;s.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return s.join(`
`)}const Mm=new ut;function Vy(r){Tt._getMatrix(Mm,Tt.workingColorSpace,r);const e=`mat3( ${Mm.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(r)){case Ul:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function wm(r,e,t){const s=r.getShaderParameter(e,r.COMPILE_STATUS),a=r.getShaderInfoLog(e).trim();if(s&&a==="")return"";const l=/ERROR: 0:(\d+)/.exec(a);if(l){const u=parseInt(l[1]);return t.toUpperCase()+`

`+a+`

`+Gy(r.getShaderSource(e),u)}else return a}function Wy(r,e){const t=Vy(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}function Xy(r,e){let t;switch(e){case Q0:t="Linear";break;case K0:t="Reinhard";break;case q0:t="Cineon";break;case Z0:t="ACESFilmic";break;case $0:t="AgX";break;case ex:t="Neutral";break;case J0:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Cl=new ie;function jy(){Tt.getLuminanceCoefficients(Cl);const r=Cl.x.toFixed(4),e=Cl.y.toFixed(4),t=Cl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function Yy(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Vo).join(`
`)}function Qy(r){const e=[];for(const t in r){const s=r[t];s!==!1&&e.push("#define "+t+" "+s)}return e.join(`
`)}function Ky(r,e){const t={},s=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let a=0;a<s;a++){const l=r.getActiveAttrib(e,a),u=l.name;let f=1;l.type===r.FLOAT_MAT2&&(f=2),l.type===r.FLOAT_MAT3&&(f=3),l.type===r.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:r.getAttribLocation(e,u),locationSize:f}}return t}function Vo(r){return r!==""}function Tm(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Cm(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qy=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(r){return r.replace(qy,Jy)}const Zy=new Map;function Jy(r,e){let t=ft[e];if(t===void 0){const s=Zy.get(e);if(s!==void 0)t=ft[s],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,s);else throw new Error("Can not resolve #include <"+e+">")}return Gf(t)}const $y=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Rm(r){return r.replace($y,eE)}function eE(r,e,t,s){let a="";for(let l=parseInt(e);l<parseInt(t);l++)a+=s.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return a}function Dm(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function tE(r){let e="SHADOWMAP_TYPE_BASIC";return r.shadowMapType===Xm?e="SHADOWMAP_TYPE_PCF":r.shadowMapType===C0?e="SHADOWMAP_TYPE_PCF_SOFT":r.shadowMapType===Xi&&(e="SHADOWMAP_TYPE_VSM"),e}function nE(r){let e="ENVMAP_TYPE_CUBE";if(r.envMap)switch(r.envMapMode){case Ks:case qs:e="ENVMAP_TYPE_CUBE";break;case Fl:e="ENVMAP_TYPE_CUBE_UV";break}return e}function iE(r){let e="ENVMAP_MODE_REFLECTION";if(r.envMap)switch(r.envMapMode){case qs:e="ENVMAP_MODE_REFRACTION";break}return e}function rE(r){let e="ENVMAP_BLENDING_NONE";if(r.envMap)switch(r.combine){case jm:e="ENVMAP_BLENDING_MULTIPLY";break;case j0:e="ENVMAP_BLENDING_MIX";break;case Y0:e="ENVMAP_BLENDING_ADD";break}return e}function sE(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,s=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:s,maxMip:t}}function oE(r,e,t,s){const a=r.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=tE(t),m=nE(t),g=iE(t),v=rE(t),_=sE(t),S=Yy(t),M=Qy(l),T=a.createProgram();let A,x,L=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(A=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Vo).join(`
`),A.length>0&&(A+=`
`),x=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M].filter(Vo).join(`
`),x.length>0&&(x+=`
`)):(A=[Dm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+g:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Vo).join(`
`),x=[Dm(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,M,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",t.envMap?"#define "+v:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor||t.batchingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Rr?"#define TONE_MAPPING":"",t.toneMapping!==Rr?ft.tonemapping_pars_fragment:"",t.toneMapping!==Rr?Xy("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ft.colorspace_pars_fragment,Wy("linearToOutputTexel",t.outputColorSpace),jy(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Vo).join(`
`)),u=Gf(u),u=Tm(u,t),u=Cm(u,t),f=Gf(f),f=Tm(f,t),f=Cm(f,t),u=Rm(u),f=Rm(f),t.isRawShaderMaterial!==!0&&(L=`#version 300 es
`,A=[S,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+A,x=["#define varying in",t.glslVersion===Wp?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Wp?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+x);const I=L+A+u,R=L+x+f,j=Em(a,a.VERTEX_SHADER,I),V=Em(a,a.FRAGMENT_SHADER,R);a.attachShader(T,j),a.attachShader(T,V),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.morphTargets===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(H){if(r.debug.checkShaderErrors){const ae=a.getProgramInfoLog(T).trim(),te=a.getShaderInfoLog(j).trim(),fe=a.getShaderInfoLog(V).trim();let pe=!0,oe=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(pe=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(a,T,j,V);else{const ce=wm(a,j,"vertex"),z=wm(a,V,"fragment");console.error("THREE.WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+H.name+`
Material Type: `+H.type+`

Program Info Log: `+ae+`
`+ce+`
`+z)}else ae!==""?console.warn("THREE.WebGLProgram: Program Info Log:",ae):(te===""||fe==="")&&(oe=!1);oe&&(H.diagnostics={runnable:pe,programLog:ae,vertexShader:{log:te,prefix:A},fragmentShader:{log:fe,prefix:x}})}a.deleteShader(j),a.deleteShader(V),Y=new Ll(a,T),D=Ky(a,T)}let Y;this.getUniforms=function(){return Y===void 0&&F(this),Y};let D;this.getAttributes=function(){return D===void 0&&F(this),D};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=a.getProgramParameter(T,ky)),C},this.destroy=function(){s.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=Hy++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=j,this.fragmentShader=V,this}let aE=0;class lE{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,s=e.fragmentShader,a=this._getShaderStage(t),l=this._getShaderStage(s),u=this._getShaderCacheForMaterial(e);return u.has(a)===!1&&(u.add(a),a.usedTimes++),u.has(l)===!1&&(u.add(l),l.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const s of t)s.usedTimes--,s.usedTimes===0&&this.shaderCache.delete(s.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let s=t.get(e);return s===void 0&&(s=new Set,t.set(e,s)),s}_getShaderStage(e){const t=this.shaderCache;let s=t.get(e);return s===void 0&&(s=new cE(e),t.set(e,s)),s}}class cE{constructor(e){this.id=aE++,this.code=e,this.usedTimes=0}}function uE(r,e,t,s,a,l,u){const f=new sg,h=new lE,m=new Set,g=[],v=a.logarithmicDepthBuffer,_=a.vertexTextures;let S=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(D){return m.add(D),D===0?"uv":`uv${D}`}function A(D,C,H,ae,te){const fe=ae.fog,pe=te.geometry,oe=D.isMeshStandardMaterial?ae.environment:null,ce=(D.isMeshStandardMaterial?t:e).get(D.envMap||oe),z=ce&&ce.mapping===Fl?ce.image.height:null,le=M[D.type];D.precision!==null&&(S=a.getMaxPrecision(D.precision),S!==D.precision&&console.warn("THREE.WebGLProgram.getParameters:",D.precision,"not supported, using",S,"instead."));const re=pe.morphAttributes.position||pe.morphAttributes.normal||pe.morphAttributes.color,U=re!==void 0?re.length:0;let ne=0;pe.morphAttributes.position!==void 0&&(ne=1),pe.morphAttributes.normal!==void 0&&(ne=2),pe.morphAttributes.color!==void 0&&(ne=3);let Be,J,de,we;if(le){const yt=Ti[le];Be=yt.vertexShader,J=yt.fragmentShader}else Be=D.vertexShader,J=D.fragmentShader,h.update(D),de=h.getVertexShaderID(D),we=h.getFragmentShaderID(D);const Ae=r.getRenderTarget(),Te=r.state.buffers.depth.getReversed(),qe=te.isInstancedMesh===!0,We=te.isBatchedMesh===!0,bt=!!D.map,Bt=!!D.matcap,gt=!!ce,B=!!D.aoMap,on=!!D.lightMap,At=!!D.bumpMap,Dt=!!D.normalMap,Xe=!!D.displacementMap,vt=!!D.emissiveMap,Ke=!!D.metalnessMap,st=!!D.roughnessMap,Vt=D.anisotropy>0,b=D.clearcoat>0,E=D.dispersion>0,Z=D.iridescence>0,ue=D.sheen>0,me=D.transmission>0,se=Vt&&!!D.anisotropyMap,Ye=b&&!!D.clearcoatMap,Ce=b&&!!D.clearcoatNormalMap,ze=b&&!!D.clearcoatRoughnessMap,Qe=Z&&!!D.iridescenceMap,xe=Z&&!!D.iridescenceThicknessMap,Ue=ue&&!!D.sheenColorMap,nt=ue&&!!D.sheenRoughnessMap,Je=!!D.specularMap,Re=!!D.specularColorMap,rt=!!D.specularIntensityMap,k=me&&!!D.transmissionMap,De=me&&!!D.thicknessMap,ve=!!D.gradientMap,Ie=!!D.alphaMap,ye=D.alphaTest>0,he=!!D.alphaHash,He=!!D.extensions;let at=Rr;D.toneMapped&&(Ae===null||Ae.isXRRenderTarget===!0)&&(at=r.toneMapping);const Pt={shaderID:le,shaderType:D.type,shaderName:D.name,vertexShader:Be,fragmentShader:J,defines:D.defines,customVertexShaderID:de,customFragmentShaderID:we,isRawShaderMaterial:D.isRawShaderMaterial===!0,glslVersion:D.glslVersion,precision:S,batching:We,batchingColor:We&&te._colorsTexture!==null,instancing:qe,instancingColor:qe&&te.instanceColor!==null,instancingMorph:qe&&te.morphTexture!==null,supportsVertexTextures:_,outputColorSpace:Ae===null?r.outputColorSpace:Ae.isXRRenderTarget===!0?Ae.texture.colorSpace:br,alphaToCoverage:!!D.alphaToCoverage,map:bt,matcap:Bt,envMap:gt,envMapMode:gt&&ce.mapping,envMapCubeUVHeight:z,aoMap:B,lightMap:on,bumpMap:At,normalMap:Dt,displacementMap:_&&Xe,emissiveMap:vt,normalMapObjectSpace:Dt&&D.normalMapType===rx,normalMapTangentSpace:Dt&&D.normalMapType===ix,metalnessMap:Ke,roughnessMap:st,anisotropy:Vt,anisotropyMap:se,clearcoat:b,clearcoatMap:Ye,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ze,dispersion:E,iridescence:Z,iridescenceMap:Qe,iridescenceThicknessMap:xe,sheen:ue,sheenColorMap:Ue,sheenRoughnessMap:nt,specularMap:Je,specularColorMap:Re,specularIntensityMap:rt,transmission:me,transmissionMap:k,thicknessMap:De,gradientMap:ve,opaque:D.transparent===!1&&D.blending===Xs&&D.alphaToCoverage===!1,alphaMap:Ie,alphaTest:ye,alphaHash:he,combine:D.combine,mapUv:bt&&T(D.map.channel),aoMapUv:B&&T(D.aoMap.channel),lightMapUv:on&&T(D.lightMap.channel),bumpMapUv:At&&T(D.bumpMap.channel),normalMapUv:Dt&&T(D.normalMap.channel),displacementMapUv:Xe&&T(D.displacementMap.channel),emissiveMapUv:vt&&T(D.emissiveMap.channel),metalnessMapUv:Ke&&T(D.metalnessMap.channel),roughnessMapUv:st&&T(D.roughnessMap.channel),anisotropyMapUv:se&&T(D.anisotropyMap.channel),clearcoatMapUv:Ye&&T(D.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&T(D.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ze&&T(D.clearcoatRoughnessMap.channel),iridescenceMapUv:Qe&&T(D.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&T(D.iridescenceThicknessMap.channel),sheenColorMapUv:Ue&&T(D.sheenColorMap.channel),sheenRoughnessMapUv:nt&&T(D.sheenRoughnessMap.channel),specularMapUv:Je&&T(D.specularMap.channel),specularColorMapUv:Re&&T(D.specularColorMap.channel),specularIntensityMapUv:rt&&T(D.specularIntensityMap.channel),transmissionMapUv:k&&T(D.transmissionMap.channel),thicknessMapUv:De&&T(D.thicknessMap.channel),alphaMapUv:Ie&&T(D.alphaMap.channel),vertexTangents:!!pe.attributes.tangent&&(Dt||Vt),vertexColors:D.vertexColors,vertexAlphas:D.vertexColors===!0&&!!pe.attributes.color&&pe.attributes.color.itemSize===4,pointsUvs:te.isPoints===!0&&!!pe.attributes.uv&&(bt||Ie),fog:!!fe,useFog:D.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:D.flatShading===!0,sizeAttenuation:D.sizeAttenuation===!0,logarithmicDepthBuffer:v,reverseDepthBuffer:Te,skinning:te.isSkinnedMesh===!0,morphTargets:pe.morphAttributes.position!==void 0,morphNormals:pe.morphAttributes.normal!==void 0,morphColors:pe.morphAttributes.color!==void 0,morphTargetsCount:U,morphTextureStride:ne,numDirLights:C.directional.length,numPointLights:C.point.length,numSpotLights:C.spot.length,numSpotLightMaps:C.spotLightMap.length,numRectAreaLights:C.rectArea.length,numHemiLights:C.hemi.length,numDirLightShadows:C.directionalShadowMap.length,numPointLightShadows:C.pointShadowMap.length,numSpotLightShadows:C.spotShadowMap.length,numSpotLightShadowsWithMaps:C.numSpotLightShadowsWithMaps,numLightProbes:C.numLightProbes,numClippingPlanes:u.numPlanes,numClipIntersection:u.numIntersection,dithering:D.dithering,shadowMapEnabled:r.shadowMap.enabled&&H.length>0,shadowMapType:r.shadowMap.type,toneMapping:at,decodeVideoTexture:bt&&D.map.isVideoTexture===!0&&Tt.getTransfer(D.map.colorSpace)===It,decodeVideoTextureEmissive:vt&&D.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(D.emissiveMap.colorSpace)===It,premultipliedAlpha:D.premultipliedAlpha,doubleSided:D.side===Zn,flipSided:D.side===hn,useDepthPacking:D.depthPacking>=0,depthPacking:D.depthPacking||0,index0AttributeName:D.index0AttributeName,extensionClipCullDistance:He&&D.extensions.clipCullDistance===!0&&s.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(He&&D.extensions.multiDraw===!0||We)&&s.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:s.has("KHR_parallel_shader_compile"),customProgramCacheKey:D.customProgramCacheKey()};return Pt.vertexUv1s=m.has(1),Pt.vertexUv2s=m.has(2),Pt.vertexUv3s=m.has(3),m.clear(),Pt}function x(D){const C=[];if(D.shaderID?C.push(D.shaderID):(C.push(D.customVertexShaderID),C.push(D.customFragmentShaderID)),D.defines!==void 0)for(const H in D.defines)C.push(H),C.push(D.defines[H]);return D.isRawShaderMaterial===!1&&(L(C,D),I(C,D),C.push(r.outputColorSpace)),C.push(D.customProgramCacheKey),C.join()}function L(D,C){D.push(C.precision),D.push(C.outputColorSpace),D.push(C.envMapMode),D.push(C.envMapCubeUVHeight),D.push(C.mapUv),D.push(C.alphaMapUv),D.push(C.lightMapUv),D.push(C.aoMapUv),D.push(C.bumpMapUv),D.push(C.normalMapUv),D.push(C.displacementMapUv),D.push(C.emissiveMapUv),D.push(C.metalnessMapUv),D.push(C.roughnessMapUv),D.push(C.anisotropyMapUv),D.push(C.clearcoatMapUv),D.push(C.clearcoatNormalMapUv),D.push(C.clearcoatRoughnessMapUv),D.push(C.iridescenceMapUv),D.push(C.iridescenceThicknessMapUv),D.push(C.sheenColorMapUv),D.push(C.sheenRoughnessMapUv),D.push(C.specularMapUv),D.push(C.specularColorMapUv),D.push(C.specularIntensityMapUv),D.push(C.transmissionMapUv),D.push(C.thicknessMapUv),D.push(C.combine),D.push(C.fogExp2),D.push(C.sizeAttenuation),D.push(C.morphTargetsCount),D.push(C.morphAttributeCount),D.push(C.numDirLights),D.push(C.numPointLights),D.push(C.numSpotLights),D.push(C.numSpotLightMaps),D.push(C.numHemiLights),D.push(C.numRectAreaLights),D.push(C.numDirLightShadows),D.push(C.numPointLightShadows),D.push(C.numSpotLightShadows),D.push(C.numSpotLightShadowsWithMaps),D.push(C.numLightProbes),D.push(C.shadowMapType),D.push(C.toneMapping),D.push(C.numClippingPlanes),D.push(C.numClipIntersection),D.push(C.depthPacking)}function I(D,C){f.disableAll(),C.supportsVertexTextures&&f.enable(0),C.instancing&&f.enable(1),C.instancingColor&&f.enable(2),C.instancingMorph&&f.enable(3),C.matcap&&f.enable(4),C.envMap&&f.enable(5),C.normalMapObjectSpace&&f.enable(6),C.normalMapTangentSpace&&f.enable(7),C.clearcoat&&f.enable(8),C.iridescence&&f.enable(9),C.alphaTest&&f.enable(10),C.vertexColors&&f.enable(11),C.vertexAlphas&&f.enable(12),C.vertexUv1s&&f.enable(13),C.vertexUv2s&&f.enable(14),C.vertexUv3s&&f.enable(15),C.vertexTangents&&f.enable(16),C.anisotropy&&f.enable(17),C.alphaHash&&f.enable(18),C.batching&&f.enable(19),C.dispersion&&f.enable(20),C.batchingColor&&f.enable(21),D.push(f.mask),f.disableAll(),C.fog&&f.enable(0),C.useFog&&f.enable(1),C.flatShading&&f.enable(2),C.logarithmicDepthBuffer&&f.enable(3),C.reverseDepthBuffer&&f.enable(4),C.skinning&&f.enable(5),C.morphTargets&&f.enable(6),C.morphNormals&&f.enable(7),C.morphColors&&f.enable(8),C.premultipliedAlpha&&f.enable(9),C.shadowMapEnabled&&f.enable(10),C.doubleSided&&f.enable(11),C.flipSided&&f.enable(12),C.useDepthPacking&&f.enable(13),C.dithering&&f.enable(14),C.transmission&&f.enable(15),C.sheen&&f.enable(16),C.opaque&&f.enable(17),C.pointsUvs&&f.enable(18),C.decodeVideoTexture&&f.enable(19),C.decodeVideoTextureEmissive&&f.enable(20),C.alphaToCoverage&&f.enable(21),D.push(f.mask)}function R(D){const C=M[D.type];let H;if(C){const ae=Ti[C];H=Nx.clone(ae.uniforms)}else H=D.uniforms;return H}function j(D,C){let H;for(let ae=0,te=g.length;ae<te;ae++){const fe=g[ae];if(fe.cacheKey===C){H=fe,++H.usedTimes;break}}return H===void 0&&(H=new oE(r,C,D,l),g.push(H)),H}function V(D){if(--D.usedTimes===0){const C=g.indexOf(D);g[C]=g[g.length-1],g.pop(),D.destroy()}}function F(D){h.remove(D)}function Y(){h.dispose()}return{getParameters:A,getProgramCacheKey:x,getUniforms:R,acquireProgram:j,releaseProgram:V,releaseShaderCache:F,programs:g,dispose:Y}}function fE(){let r=new WeakMap;function e(u){return r.has(u)}function t(u){let f=r.get(u);return f===void 0&&(f={},r.set(u,f)),f}function s(u){r.delete(u)}function a(u,f,h){r.get(u)[f]=h}function l(){r=new WeakMap}return{has:e,get:t,remove:s,update:a,dispose:l}}function dE(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.z!==e.z?r.z-e.z:r.id-e.id}function bm(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Pm(){const r=[];let e=0;const t=[],s=[],a=[];function l(){e=0,t.length=0,s.length=0,a.length=0}function u(v,_,S,M,T,A){let x=r[e];return x===void 0?(x={id:v.id,object:v,geometry:_,material:S,groupOrder:M,renderOrder:v.renderOrder,z:T,group:A},r[e]=x):(x.id=v.id,x.object=v,x.geometry=_,x.material=S,x.groupOrder=M,x.renderOrder=v.renderOrder,x.z=T,x.group=A),e++,x}function f(v,_,S,M,T,A){const x=u(v,_,S,M,T,A);S.transmission>0?s.push(x):S.transparent===!0?a.push(x):t.push(x)}function h(v,_,S,M,T,A){const x=u(v,_,S,M,T,A);S.transmission>0?s.unshift(x):S.transparent===!0?a.unshift(x):t.unshift(x)}function m(v,_){t.length>1&&t.sort(v||dE),s.length>1&&s.sort(_||bm),a.length>1&&a.sort(_||bm)}function g(){for(let v=e,_=r.length;v<_;v++){const S=r[v];if(S.id===null)break;S.id=null,S.object=null,S.geometry=null,S.material=null,S.group=null}}return{opaque:t,transmissive:s,transparent:a,init:l,push:f,unshift:h,finish:g,sort:m}}function hE(){let r=new WeakMap;function e(s,a){const l=r.get(s);let u;return l===void 0?(u=new Pm,r.set(s,[u])):a>=l.length?(u=new Pm,l.push(u)):u=l[a],u}function t(){r=new WeakMap}return{get:e,dispose:t}}function pE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new ie,color:new Rt};break;case"SpotLight":t={position:new ie,direction:new ie,color:new Rt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ie,color:new Rt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ie,skyColor:new Rt,groundColor:new Rt};break;case"RectAreaLight":t={color:new Rt,position:new ie,halfWidth:new ie,halfHeight:new ie};break}return r[e.id]=t,t}}}function mE(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let gE=0;function vE(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function xE(r){const e=new pE,t=mE(),s={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let m=0;m<9;m++)s.probe.push(new ie);const a=new ie,l=new $t,u=new $t;function f(m){let g=0,v=0,_=0;for(let D=0;D<9;D++)s.probe[D].set(0,0,0);let S=0,M=0,T=0,A=0,x=0,L=0,I=0,R=0,j=0,V=0,F=0;m.sort(vE);for(let D=0,C=m.length;D<C;D++){const H=m[D],ae=H.color,te=H.intensity,fe=H.distance,pe=H.shadow&&H.shadow.map?H.shadow.map.texture:null;if(H.isAmbientLight)g+=ae.r*te,v+=ae.g*te,_+=ae.b*te;else if(H.isLightProbe){for(let oe=0;oe<9;oe++)s.probe[oe].addScaledVector(H.sh.coefficients[oe],te);F++}else if(H.isDirectionalLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const ce=H.shadow,z=t.get(H);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,s.directionalShadow[S]=z,s.directionalShadowMap[S]=pe,s.directionalShadowMatrix[S]=H.shadow.matrix,L++}s.directional[S]=oe,S++}else if(H.isSpotLight){const oe=e.get(H);oe.position.setFromMatrixPosition(H.matrixWorld),oe.color.copy(ae).multiplyScalar(te),oe.distance=fe,oe.coneCos=Math.cos(H.angle),oe.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),oe.decay=H.decay,s.spot[T]=oe;const ce=H.shadow;if(H.map&&(s.spotLightMap[j]=H.map,j++,ce.updateMatrices(H),H.castShadow&&V++),s.spotLightMatrix[T]=ce.matrix,H.castShadow){const z=t.get(H);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,s.spotShadow[T]=z,s.spotShadowMap[T]=pe,R++}T++}else if(H.isRectAreaLight){const oe=e.get(H);oe.color.copy(ae).multiplyScalar(te),oe.halfWidth.set(H.width*.5,0,0),oe.halfHeight.set(0,H.height*.5,0),s.rectArea[A]=oe,A++}else if(H.isPointLight){const oe=e.get(H);if(oe.color.copy(H.color).multiplyScalar(H.intensity),oe.distance=H.distance,oe.decay=H.decay,H.castShadow){const ce=H.shadow,z=t.get(H);z.shadowIntensity=ce.intensity,z.shadowBias=ce.bias,z.shadowNormalBias=ce.normalBias,z.shadowRadius=ce.radius,z.shadowMapSize=ce.mapSize,z.shadowCameraNear=ce.camera.near,z.shadowCameraFar=ce.camera.far,s.pointShadow[M]=z,s.pointShadowMap[M]=pe,s.pointShadowMatrix[M]=H.shadow.matrix,I++}s.point[M]=oe,M++}else if(H.isHemisphereLight){const oe=e.get(H);oe.skyColor.copy(H.color).multiplyScalar(te),oe.groundColor.copy(H.groundColor).multiplyScalar(te),s.hemi[x]=oe,x++}}A>0&&(r.has("OES_texture_float_linear")===!0?(s.rectAreaLTC1=Pe.LTC_FLOAT_1,s.rectAreaLTC2=Pe.LTC_FLOAT_2):(s.rectAreaLTC1=Pe.LTC_HALF_1,s.rectAreaLTC2=Pe.LTC_HALF_2)),s.ambient[0]=g,s.ambient[1]=v,s.ambient[2]=_;const Y=s.hash;(Y.directionalLength!==S||Y.pointLength!==M||Y.spotLength!==T||Y.rectAreaLength!==A||Y.hemiLength!==x||Y.numDirectionalShadows!==L||Y.numPointShadows!==I||Y.numSpotShadows!==R||Y.numSpotMaps!==j||Y.numLightProbes!==F)&&(s.directional.length=S,s.spot.length=T,s.rectArea.length=A,s.point.length=M,s.hemi.length=x,s.directionalShadow.length=L,s.directionalShadowMap.length=L,s.pointShadow.length=I,s.pointShadowMap.length=I,s.spotShadow.length=R,s.spotShadowMap.length=R,s.directionalShadowMatrix.length=L,s.pointShadowMatrix.length=I,s.spotLightMatrix.length=R+j-V,s.spotLightMap.length=j,s.numSpotLightShadowsWithMaps=V,s.numLightProbes=F,Y.directionalLength=S,Y.pointLength=M,Y.spotLength=T,Y.rectAreaLength=A,Y.hemiLength=x,Y.numDirectionalShadows=L,Y.numPointShadows=I,Y.numSpotShadows=R,Y.numSpotMaps=j,Y.numLightProbes=F,s.version=gE++)}function h(m,g){let v=0,_=0,S=0,M=0,T=0;const A=g.matrixWorldInverse;for(let x=0,L=m.length;x<L;x++){const I=m[x];if(I.isDirectionalLight){const R=s.directional[v];R.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(A),v++}else if(I.isSpotLight){const R=s.spot[S];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(A),R.direction.setFromMatrixPosition(I.matrixWorld),a.setFromMatrixPosition(I.target.matrixWorld),R.direction.sub(a),R.direction.transformDirection(A),S++}else if(I.isRectAreaLight){const R=s.rectArea[M];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(A),u.identity(),l.copy(I.matrixWorld),l.premultiply(A),u.extractRotation(l),R.halfWidth.set(I.width*.5,0,0),R.halfHeight.set(0,I.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),M++}else if(I.isPointLight){const R=s.point[_];R.position.setFromMatrixPosition(I.matrixWorld),R.position.applyMatrix4(A),_++}else if(I.isHemisphereLight){const R=s.hemi[T];R.direction.setFromMatrixPosition(I.matrixWorld),R.direction.transformDirection(A),T++}}}return{setup:f,setupView:h,state:s}}function Im(r){const e=new xE(r),t=[],s=[];function a(g){m.camera=g,t.length=0,s.length=0}function l(g){t.push(g)}function u(g){s.push(g)}function f(){e.setup(t)}function h(g){e.setupView(t,g)}const m={lightsArray:t,shadowsArray:s,camera:null,lights:e,transmissionRenderTarget:{}};return{init:a,state:m,setupLights:f,setupLightsView:h,pushLight:l,pushShadow:u}}function _E(r){let e=new WeakMap;function t(a,l=0){const u=e.get(a);let f;return u===void 0?(f=new Im(r),e.set(a,[f])):l>=u.length?(f=new Im(r),u.push(f)):f=u[l],f}function s(){e=new WeakMap}return{get:t,dispose:s}}const AE=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,SE=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function yE(r,e,t){let s=new fg;const a=new lt,l=new lt,u=new jt,f=new Xx({depthPacking:nx}),h=new jx,m={},g=t.maxTextureSize,v={[qi]:hn,[hn]:qi,[Zn]:Zn},_=new xn({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:AE,fragmentShader:SE}),S=_.clone();S.defines.HORIZONTAL_PASS=1;const M=new Pr;M.setAttribute("position",new oi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new _i(M,_),A=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Xm;let x=this.type;this.render=function(V,F,Y){if(A.enabled===!1||A.autoUpdate===!1&&A.needsUpdate===!1||V.length===0)return;const D=r.getRenderTarget(),C=r.getActiveCubeFace(),H=r.getActiveMipmapLevel(),ae=r.state;ae.setBlending(Rn),ae.buffers.color.setClear(1,1,1,1),ae.buffers.depth.setTest(!0),ae.setScissorTest(!1);const te=x!==Xi&&this.type===Xi,fe=x===Xi&&this.type!==Xi;for(let pe=0,oe=V.length;pe<oe;pe++){const ce=V[pe],z=ce.shadow;if(z===void 0){console.warn("THREE.WebGLShadowMap:",ce,"has no shadow.");continue}if(z.autoUpdate===!1&&z.needsUpdate===!1)continue;a.copy(z.mapSize);const le=z.getFrameExtents();if(a.multiply(le),l.copy(z.mapSize),(a.x>g||a.y>g)&&(a.x>g&&(l.x=Math.floor(g/le.x),a.x=l.x*le.x,z.mapSize.x=l.x),a.y>g&&(l.y=Math.floor(g/le.y),a.y=l.y*le.y,z.mapSize.y=l.y)),z.map===null||te===!0||fe===!0){const U=this.type!==Xi?{minFilter:Jn,magFilter:Jn}:{};z.map!==null&&z.map.dispose(),z.map=new Dn(a.x,a.y,U),z.map.texture.name=ce.name+".shadowMap",z.camera.updateProjectionMatrix()}r.setRenderTarget(z.map),r.clear();const re=z.getViewportCount();for(let U=0;U<re;U++){const ne=z.getViewport(U);u.set(l.x*ne.x,l.y*ne.y,l.x*ne.z,l.y*ne.w),ae.viewport(u),z.updateMatrices(ce,U),s=z.getFrustum(),R(F,Y,z.camera,ce,this.type)}z.isPointLightShadow!==!0&&this.type===Xi&&L(z,Y),z.needsUpdate=!1}x=this.type,A.needsUpdate=!1,r.setRenderTarget(D,C,H)};function L(V,F){const Y=e.update(T);_.defines.VSM_SAMPLES!==V.blurSamples&&(_.defines.VSM_SAMPLES=V.blurSamples,S.defines.VSM_SAMPLES=V.blurSamples,_.needsUpdate=!0,S.needsUpdate=!0),V.mapPass===null&&(V.mapPass=new Dn(a.x,a.y)),_.uniforms.shadow_pass.value=V.map.texture,_.uniforms.resolution.value=V.mapSize,_.uniforms.radius.value=V.radius,r.setRenderTarget(V.mapPass),r.clear(),r.renderBufferDirect(F,null,Y,_,T,null),S.uniforms.shadow_pass.value=V.mapPass.texture,S.uniforms.resolution.value=V.mapSize,S.uniforms.radius.value=V.radius,r.setRenderTarget(V.map),r.clear(),r.renderBufferDirect(F,null,Y,S,T,null)}function I(V,F,Y,D){let C=null;const H=Y.isPointLight===!0?V.customDistanceMaterial:V.customDepthMaterial;if(H!==void 0)C=H;else if(C=Y.isPointLight===!0?h:f,r.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const ae=C.uuid,te=F.uuid;let fe=m[ae];fe===void 0&&(fe={},m[ae]=fe);let pe=fe[te];pe===void 0&&(pe=C.clone(),fe[te]=pe,F.addEventListener("dispose",j)),C=pe}if(C.visible=F.visible,C.wireframe=F.wireframe,D===Xi?C.side=F.shadowSide!==null?F.shadowSide:F.side:C.side=F.shadowSide!==null?F.shadowSide:v[F.side],C.alphaMap=F.alphaMap,C.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,C.map=F.map,C.clipShadows=F.clipShadows,C.clippingPlanes=F.clippingPlanes,C.clipIntersection=F.clipIntersection,C.displacementMap=F.displacementMap,C.displacementScale=F.displacementScale,C.displacementBias=F.displacementBias,C.wireframeLinewidth=F.wireframeLinewidth,C.linewidth=F.linewidth,Y.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const ae=r.properties.get(C);ae.light=Y}return C}function R(V,F,Y,D,C){if(V.visible===!1)return;if(V.layers.test(F.layers)&&(V.isMesh||V.isLine||V.isPoints)&&(V.castShadow||V.receiveShadow&&C===Xi)&&(!V.frustumCulled||s.intersectsObject(V))){V.modelViewMatrix.multiplyMatrices(Y.matrixWorldInverse,V.matrixWorld);const te=e.update(V),fe=V.material;if(Array.isArray(fe)){const pe=te.groups;for(let oe=0,ce=pe.length;oe<ce;oe++){const z=pe[oe],le=fe[z.materialIndex];if(le&&le.visible){const re=I(V,le,D,C);V.onBeforeShadow(r,V,F,Y,te,re,z),r.renderBufferDirect(Y,null,te,re,V,z),V.onAfterShadow(r,V,F,Y,te,re,z)}}}else if(fe.visible){const pe=I(V,fe,D,C);V.onBeforeShadow(r,V,F,Y,te,pe,null),r.renderBufferDirect(Y,null,te,pe,V,null),V.onAfterShadow(r,V,F,Y,te,pe,null)}}const ae=V.children;for(let te=0,fe=ae.length;te<fe;te++)R(ae[te],F,Y,D,C)}function j(V){V.target.removeEventListener("dispose",j);for(const Y in m){const D=m[Y],C=V.target.uuid;C in D&&(D[C].dispose(),delete D[C])}}}const EE={[nf]:rf,[sf]:lf,[of]:cf,[Qs]:af,[rf]:nf,[lf]:sf,[cf]:of,[af]:Qs};function ME(r,e){function t(){let k=!1;const De=new jt;let ve=null;const Ie=new jt(0,0,0,0);return{setMask:function(ye){ve!==ye&&!k&&(r.colorMask(ye,ye,ye,ye),ve=ye)},setLocked:function(ye){k=ye},setClear:function(ye,he,He,at,Pt){Pt===!0&&(ye*=at,he*=at,He*=at),De.set(ye,he,He,at),Ie.equals(De)===!1&&(r.clearColor(ye,he,He,at),Ie.copy(De))},reset:function(){k=!1,ve=null,Ie.set(-1,0,0,0)}}}function s(){let k=!1,De=!1,ve=null,Ie=null,ye=null;return{setReversed:function(he){if(De!==he){const He=e.get("EXT_clip_control");he?He.clipControlEXT(He.LOWER_LEFT_EXT,He.ZERO_TO_ONE_EXT):He.clipControlEXT(He.LOWER_LEFT_EXT,He.NEGATIVE_ONE_TO_ONE_EXT),De=he;const at=ye;ye=null,this.setClear(at)}},getReversed:function(){return De},setTest:function(he){he?Ae(r.DEPTH_TEST):Te(r.DEPTH_TEST)},setMask:function(he){ve!==he&&!k&&(r.depthMask(he),ve=he)},setFunc:function(he){if(De&&(he=EE[he]),Ie!==he){switch(he){case nf:r.depthFunc(r.NEVER);break;case rf:r.depthFunc(r.ALWAYS);break;case sf:r.depthFunc(r.LESS);break;case Qs:r.depthFunc(r.LEQUAL);break;case of:r.depthFunc(r.EQUAL);break;case af:r.depthFunc(r.GEQUAL);break;case lf:r.depthFunc(r.GREATER);break;case cf:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}Ie=he}},setLocked:function(he){k=he},setClear:function(he){ye!==he&&(De&&(he=1-he),r.clearDepth(he),ye=he)},reset:function(){k=!1,ve=null,Ie=null,ye=null,De=!1}}}function a(){let k=!1,De=null,ve=null,Ie=null,ye=null,he=null,He=null,at=null,Pt=null;return{setTest:function(yt){k||(yt?Ae(r.STENCIL_TEST):Te(r.STENCIL_TEST))},setMask:function(yt){De!==yt&&!k&&(r.stencilMask(yt),De=yt)},setFunc:function(yt,Bn,bn){(ve!==yt||Ie!==Bn||ye!==bn)&&(r.stencilFunc(yt,Bn,bn),ve=yt,Ie=Bn,ye=bn)},setOp:function(yt,Bn,bn){(he!==yt||He!==Bn||at!==bn)&&(r.stencilOp(yt,Bn,bn),he=yt,He=Bn,at=bn)},setLocked:function(yt){k=yt},setClear:function(yt){Pt!==yt&&(r.clearStencil(yt),Pt=yt)},reset:function(){k=!1,De=null,ve=null,Ie=null,ye=null,he=null,He=null,at=null,Pt=null}}}const l=new t,u=new s,f=new a,h=new WeakMap,m=new WeakMap;let g={},v={},_=new WeakMap,S=[],M=null,T=!1,A=null,x=null,L=null,I=null,R=null,j=null,V=null,F=new Rt(0,0,0),Y=0,D=!1,C=null,H=null,ae=null,te=null,fe=null;const pe=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let oe=!1,ce=0;const z=r.getParameter(r.VERSION);z.indexOf("WebGL")!==-1?(ce=parseFloat(/^WebGL (\d)/.exec(z)[1]),oe=ce>=1):z.indexOf("OpenGL ES")!==-1&&(ce=parseFloat(/^OpenGL ES (\d)/.exec(z)[1]),oe=ce>=2);let le=null,re={};const U=r.getParameter(r.SCISSOR_BOX),ne=r.getParameter(r.VIEWPORT),Be=new jt().fromArray(U),J=new jt().fromArray(ne);function de(k,De,ve,Ie){const ye=new Uint8Array(4),he=r.createTexture();r.bindTexture(k,he),r.texParameteri(k,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(k,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let He=0;He<ve;He++)k===r.TEXTURE_3D||k===r.TEXTURE_2D_ARRAY?r.texImage3D(De,0,r.RGBA,1,1,Ie,0,r.RGBA,r.UNSIGNED_BYTE,ye):r.texImage2D(De+He,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,ye);return he}const we={};we[r.TEXTURE_2D]=de(r.TEXTURE_2D,r.TEXTURE_2D,1),we[r.TEXTURE_CUBE_MAP]=de(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),we[r.TEXTURE_2D_ARRAY]=de(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),we[r.TEXTURE_3D]=de(r.TEXTURE_3D,r.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),Ae(r.DEPTH_TEST),u.setFunc(Qs),At(!1),Dt(Op),Ae(r.CULL_FACE),B(Rn);function Ae(k){g[k]!==!0&&(r.enable(k),g[k]=!0)}function Te(k){g[k]!==!1&&(r.disable(k),g[k]=!1)}function qe(k,De){return v[k]!==De?(r.bindFramebuffer(k,De),v[k]=De,k===r.DRAW_FRAMEBUFFER&&(v[r.FRAMEBUFFER]=De),k===r.FRAMEBUFFER&&(v[r.DRAW_FRAMEBUFFER]=De),!0):!1}function We(k,De){let ve=S,Ie=!1;if(k){ve=_.get(De),ve===void 0&&(ve=[],_.set(De,ve));const ye=k.textures;if(ve.length!==ye.length||ve[0]!==r.COLOR_ATTACHMENT0){for(let he=0,He=ye.length;he<He;he++)ve[he]=r.COLOR_ATTACHMENT0+he;ve.length=ye.length,Ie=!0}}else ve[0]!==r.BACK&&(ve[0]=r.BACK,Ie=!0);Ie&&r.drawBuffers(ve)}function bt(k){return M!==k?(r.useProgram(k),M=k,!0):!1}const Bt={[es]:r.FUNC_ADD,[D0]:r.FUNC_SUBTRACT,[b0]:r.FUNC_REVERSE_SUBTRACT};Bt[P0]=r.MIN,Bt[I0]=r.MAX;const gt={[L0]:r.ZERO,[U0]:r.ONE,[B0]:r.SRC_COLOR,[ef]:r.SRC_ALPHA,[H0]:r.SRC_ALPHA_SATURATE,[z0]:r.DST_COLOR,[F0]:r.DST_ALPHA,[N0]:r.ONE_MINUS_SRC_COLOR,[tf]:r.ONE_MINUS_SRC_ALPHA,[k0]:r.ONE_MINUS_DST_COLOR,[O0]:r.ONE_MINUS_DST_ALPHA,[G0]:r.CONSTANT_COLOR,[V0]:r.ONE_MINUS_CONSTANT_COLOR,[W0]:r.CONSTANT_ALPHA,[X0]:r.ONE_MINUS_CONSTANT_ALPHA};function B(k,De,ve,Ie,ye,he,He,at,Pt,yt){if(k===Rn){T===!0&&(Te(r.BLEND),T=!1);return}if(T===!1&&(Ae(r.BLEND),T=!0),k!==R0){if(k!==A||yt!==D){if((x!==es||R!==es)&&(r.blendEquation(r.FUNC_ADD),x=es,R=es),yt)switch(k){case Xs:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zp:r.blendFunc(r.ONE,r.ONE);break;case kp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hp:r.blendFuncSeparate(r.ZERO,r.SRC_COLOR,r.ZERO,r.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}else switch(k){case Xs:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case zp:r.blendFunc(r.SRC_ALPHA,r.ONE);break;case kp:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Hp:r.blendFunc(r.ZERO,r.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",k);break}L=null,I=null,j=null,V=null,F.set(0,0,0),Y=0,A=k,D=yt}return}ye=ye||De,he=he||ve,He=He||Ie,(De!==x||ye!==R)&&(r.blendEquationSeparate(Bt[De],Bt[ye]),x=De,R=ye),(ve!==L||Ie!==I||he!==j||He!==V)&&(r.blendFuncSeparate(gt[ve],gt[Ie],gt[he],gt[He]),L=ve,I=Ie,j=he,V=He),(at.equals(F)===!1||Pt!==Y)&&(r.blendColor(at.r,at.g,at.b,Pt),F.copy(at),Y=Pt),A=k,D=!1}function on(k,De){k.side===Zn?Te(r.CULL_FACE):Ae(r.CULL_FACE);let ve=k.side===hn;De&&(ve=!ve),At(ve),k.blending===Xs&&k.transparent===!1?B(Rn):B(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),u.setFunc(k.depthFunc),u.setTest(k.depthTest),u.setMask(k.depthWrite),l.setMask(k.colorWrite);const Ie=k.stencilWrite;f.setTest(Ie),Ie&&(f.setMask(k.stencilWriteMask),f.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),f.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),vt(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?Ae(r.SAMPLE_ALPHA_TO_COVERAGE):Te(r.SAMPLE_ALPHA_TO_COVERAGE)}function At(k){C!==k&&(k?r.frontFace(r.CW):r.frontFace(r.CCW),C=k)}function Dt(k){k!==w0?(Ae(r.CULL_FACE),k!==H&&(k===Op?r.cullFace(r.BACK):k===T0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):Te(r.CULL_FACE),H=k}function Xe(k){k!==ae&&(oe&&r.lineWidth(k),ae=k)}function vt(k,De,ve){k?(Ae(r.POLYGON_OFFSET_FILL),(te!==De||fe!==ve)&&(r.polygonOffset(De,ve),te=De,fe=ve)):Te(r.POLYGON_OFFSET_FILL)}function Ke(k){k?Ae(r.SCISSOR_TEST):Te(r.SCISSOR_TEST)}function st(k){k===void 0&&(k=r.TEXTURE0+pe-1),le!==k&&(r.activeTexture(k),le=k)}function Vt(k,De,ve){ve===void 0&&(le===null?ve=r.TEXTURE0+pe-1:ve=le);let Ie=re[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},re[ve]=Ie),(Ie.type!==k||Ie.texture!==De)&&(le!==ve&&(r.activeTexture(ve),le=ve),r.bindTexture(k,De||we[k]),Ie.type=k,Ie.texture=De)}function b(){const k=re[le];k!==void 0&&k.type!==void 0&&(r.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function E(){try{r.compressedTexImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Z(){try{r.compressedTexImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ue(){try{r.texSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function me(){try{r.texSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function se(){try{r.compressedTexSubImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ye(){try{r.compressedTexSubImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ce(){try{r.texStorage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function ze(){try{r.texStorage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Qe(){try{r.texImage2D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function xe(){try{r.texImage3D(...arguments)}catch(k){console.error("THREE.WebGLState:",k)}}function Ue(k){Be.equals(k)===!1&&(r.scissor(k.x,k.y,k.z,k.w),Be.copy(k))}function nt(k){J.equals(k)===!1&&(r.viewport(k.x,k.y,k.z,k.w),J.copy(k))}function Je(k,De){let ve=m.get(De);ve===void 0&&(ve=new WeakMap,m.set(De,ve));let Ie=ve.get(k);Ie===void 0&&(Ie=r.getUniformBlockIndex(De,k.name),ve.set(k,Ie))}function Re(k,De){const Ie=m.get(De).get(k);h.get(De)!==Ie&&(r.uniformBlockBinding(De,Ie,k.__bindingPointIndex),h.set(De,Ie))}function rt(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),u.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),g={},le=null,re={},v={},_=new WeakMap,S=[],M=null,T=!1,A=null,x=null,L=null,I=null,R=null,j=null,V=null,F=new Rt(0,0,0),Y=0,D=!1,C=null,H=null,ae=null,te=null,fe=null,Be.set(0,0,r.canvas.width,r.canvas.height),J.set(0,0,r.canvas.width,r.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:Ae,disable:Te,bindFramebuffer:qe,drawBuffers:We,useProgram:bt,setBlending:B,setMaterial:on,setFlipSided:At,setCullFace:Dt,setLineWidth:Xe,setPolygonOffset:vt,setScissorTest:Ke,activeTexture:st,bindTexture:Vt,unbindTexture:b,compressedTexImage2D:E,compressedTexImage3D:Z,texImage2D:Qe,texImage3D:xe,updateUBOMapping:Je,uniformBlockBinding:Re,texStorage2D:Ce,texStorage3D:ze,texSubImage2D:ue,texSubImage3D:me,compressedTexSubImage2D:se,compressedTexSubImage3D:Ye,scissor:Ue,viewport:nt,reset:rt}}function wE(r,e,t,s,a,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),m=new lt,g=new WeakMap;let v;const _=new WeakMap;let S=!1;try{S=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(b,E){return S?new OffscreenCanvas(b,E):Nl("canvas")}function T(b,E,Z){let ue=1;const me=Vt(b);if((me.width>Z||me.height>Z)&&(ue=Z/Math.max(me.width,me.height)),ue<1)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap||typeof VideoFrame<"u"&&b instanceof VideoFrame){const se=Math.floor(ue*me.width),Ye=Math.floor(ue*me.height);v===void 0&&(v=M(se,Ye));const Ce=E?M(se,Ye):v;return Ce.width=se,Ce.height=Ye,Ce.getContext("2d").drawImage(b,0,0,se,Ye),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+se+"x"+Ye+")."),Ce}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),b;return b}function A(b){return b.generateMipmaps}function x(b){r.generateMipmap(b)}function L(b){return b.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:b.isWebGL3DRenderTarget?r.TEXTURE_3D:b.isWebGLArrayRenderTarget||b.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function I(b,E,Z,ue,me=!1){if(b!==null){if(r[b]!==void 0)return r[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let se=E;if(E===r.RED&&(Z===r.FLOAT&&(se=r.R32F),Z===r.HALF_FLOAT&&(se=r.R16F),Z===r.UNSIGNED_BYTE&&(se=r.R8)),E===r.RED_INTEGER&&(Z===r.UNSIGNED_BYTE&&(se=r.R8UI),Z===r.UNSIGNED_SHORT&&(se=r.R16UI),Z===r.UNSIGNED_INT&&(se=r.R32UI),Z===r.BYTE&&(se=r.R8I),Z===r.SHORT&&(se=r.R16I),Z===r.INT&&(se=r.R32I)),E===r.RG&&(Z===r.FLOAT&&(se=r.RG32F),Z===r.HALF_FLOAT&&(se=r.RG16F),Z===r.UNSIGNED_BYTE&&(se=r.RG8)),E===r.RG_INTEGER&&(Z===r.UNSIGNED_BYTE&&(se=r.RG8UI),Z===r.UNSIGNED_SHORT&&(se=r.RG16UI),Z===r.UNSIGNED_INT&&(se=r.RG32UI),Z===r.BYTE&&(se=r.RG8I),Z===r.SHORT&&(se=r.RG16I),Z===r.INT&&(se=r.RG32I)),E===r.RGB_INTEGER&&(Z===r.UNSIGNED_BYTE&&(se=r.RGB8UI),Z===r.UNSIGNED_SHORT&&(se=r.RGB16UI),Z===r.UNSIGNED_INT&&(se=r.RGB32UI),Z===r.BYTE&&(se=r.RGB8I),Z===r.SHORT&&(se=r.RGB16I),Z===r.INT&&(se=r.RGB32I)),E===r.RGBA_INTEGER&&(Z===r.UNSIGNED_BYTE&&(se=r.RGBA8UI),Z===r.UNSIGNED_SHORT&&(se=r.RGBA16UI),Z===r.UNSIGNED_INT&&(se=r.RGBA32UI),Z===r.BYTE&&(se=r.RGBA8I),Z===r.SHORT&&(se=r.RGBA16I),Z===r.INT&&(se=r.RGBA32I)),E===r.RGB&&Z===r.UNSIGNED_INT_5_9_9_9_REV&&(se=r.RGB9_E5),E===r.RGBA){const Ye=me?Ul:Tt.getTransfer(ue);Z===r.FLOAT&&(se=r.RGBA32F),Z===r.HALF_FLOAT&&(se=r.RGBA16F),Z===r.UNSIGNED_BYTE&&(se=Ye===It?r.SRGB8_ALPHA8:r.RGBA8),Z===r.UNSIGNED_SHORT_4_4_4_4&&(se=r.RGBA4),Z===r.UNSIGNED_SHORT_5_5_5_1&&(se=r.RGB5_A1)}return(se===r.R16F||se===r.R32F||se===r.RG16F||se===r.RG32F||se===r.RGBA16F||se===r.RGBA32F)&&e.get("EXT_color_buffer_float"),se}function R(b,E){let Z;return b?E===null||E===Dr||E===Zs?Z=r.DEPTH24_STENCIL8:E===ji?Z=r.DEPTH32F_STENCIL8:E===Wo&&(Z=r.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Dr||E===Zs?Z=r.DEPTH_COMPONENT24:E===ji?Z=r.DEPTH_COMPONENT32F:E===Wo&&(Z=r.DEPTH_COMPONENT16),Z}function j(b,E){return A(b)===!0||b.isFramebufferTexture&&b.minFilter!==Jn&&b.minFilter!==Cn?Math.log2(Math.max(E.width,E.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?E.mipmaps.length:1}function V(b){const E=b.target;E.removeEventListener("dispose",V),Y(E),E.isVideoTexture&&g.delete(E)}function F(b){const E=b.target;E.removeEventListener("dispose",F),C(E)}function Y(b){const E=s.get(b);if(E.__webglInit===void 0)return;const Z=b.source,ue=_.get(Z);if(ue){const me=ue[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&D(b),Object.keys(ue).length===0&&_.delete(Z)}s.remove(b)}function D(b){const E=s.get(b);r.deleteTexture(E.__webglTexture);const Z=b.source,ue=_.get(Z);delete ue[E.__cacheKey],u.memory.textures--}function C(b){const E=s.get(b);if(b.depthTexture&&(b.depthTexture.dispose(),s.remove(b.depthTexture)),b.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let me=0;me<E.__webglFramebuffer[ue].length;me++)r.deleteFramebuffer(E.__webglFramebuffer[ue][me]);else r.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)r.deleteFramebuffer(E.__webglFramebuffer[ue]);else r.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&r.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&r.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&r.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&r.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=b.textures;for(let ue=0,me=Z.length;ue<me;ue++){const se=s.get(Z[ue]);se.__webglTexture&&(r.deleteTexture(se.__webglTexture),u.memory.textures--),s.remove(Z[ue])}s.remove(b)}let H=0;function ae(){H=0}function te(){const b=H;return b>=a.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+a.maxTextures),H+=1,b}function fe(b){const E=[];return E.push(b.wrapS),E.push(b.wrapT),E.push(b.wrapR||0),E.push(b.magFilter),E.push(b.minFilter),E.push(b.anisotropy),E.push(b.internalFormat),E.push(b.format),E.push(b.type),E.push(b.generateMipmaps),E.push(b.premultiplyAlpha),E.push(b.flipY),E.push(b.unpackAlignment),E.push(b.colorSpace),E.join()}function pe(b,E){const Z=s.get(b);if(b.isVideoTexture&&Ke(b),b.isRenderTargetTexture===!1&&b.version>0&&Z.__version!==b.version){const ue=b.image;if(ue===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{we(Z,b,E);return}}t.bindTexture(r.TEXTURE_2D,Z.__webglTexture,r.TEXTURE0+E)}function oe(b,E){const Z=s.get(b);if(b.version>0&&Z.__version!==b.version){we(Z,b,E);return}t.bindTexture(r.TEXTURE_2D_ARRAY,Z.__webglTexture,r.TEXTURE0+E)}function ce(b,E){const Z=s.get(b);if(b.version>0&&Z.__version!==b.version){we(Z,b,E);return}t.bindTexture(r.TEXTURE_3D,Z.__webglTexture,r.TEXTURE0+E)}function z(b,E){const Z=s.get(b);if(b.version>0&&Z.__version!==b.version){Ae(Z,b,E);return}t.bindTexture(r.TEXTURE_CUBE_MAP,Z.__webglTexture,r.TEXTURE0+E)}const le={[df]:r.REPEAT,[ns]:r.CLAMP_TO_EDGE,[hf]:r.MIRRORED_REPEAT},re={[Jn]:r.NEAREST,[tx]:r.NEAREST_MIPMAP_NEAREST,[al]:r.NEAREST_MIPMAP_LINEAR,[Cn]:r.LINEAR,[Su]:r.LINEAR_MIPMAP_NEAREST,[is]:r.LINEAR_MIPMAP_LINEAR},U={[sx]:r.NEVER,[fx]:r.ALWAYS,[ox]:r.LESS,[ng]:r.LEQUAL,[ax]:r.EQUAL,[ux]:r.GEQUAL,[lx]:r.GREATER,[cx]:r.NOTEQUAL};function ne(b,E){if(E.type===ji&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Cn||E.magFilter===Su||E.magFilter===al||E.magFilter===is||E.minFilter===Cn||E.minFilter===Su||E.minFilter===al||E.minFilter===is)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(b,r.TEXTURE_WRAP_S,le[E.wrapS]),r.texParameteri(b,r.TEXTURE_WRAP_T,le[E.wrapT]),(b===r.TEXTURE_3D||b===r.TEXTURE_2D_ARRAY)&&r.texParameteri(b,r.TEXTURE_WRAP_R,le[E.wrapR]),r.texParameteri(b,r.TEXTURE_MAG_FILTER,re[E.magFilter]),r.texParameteri(b,r.TEXTURE_MIN_FILTER,re[E.minFilter]),E.compareFunction&&(r.texParameteri(b,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(b,r.TEXTURE_COMPARE_FUNC,U[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Jn||E.minFilter!==al&&E.minFilter!==is||E.type===ji&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||s.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");r.texParameterf(b,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,a.getMaxAnisotropy())),s.get(E).__currentAnisotropy=E.anisotropy}}}function Be(b,E){let Z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,E.addEventListener("dispose",V));const ue=E.source;let me=_.get(ue);me===void 0&&(me={},_.set(ue,me));const se=fe(E);if(se!==b.__cacheKey){me[se]===void 0&&(me[se]={texture:r.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),me[se].usedTimes++;const Ye=me[b.__cacheKey];Ye!==void 0&&(me[b.__cacheKey].usedTimes--,Ye.usedTimes===0&&D(E)),b.__cacheKey=se,b.__webglTexture=me[se].texture}return Z}function J(b,E,Z){return Math.floor(Math.floor(b/Z)/E)}function de(b,E,Z,ue){const se=b.updateRanges;if(se.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,E.width,E.height,Z,ue,E.data);else{se.sort((xe,Ue)=>xe.start-Ue.start);let Ye=0;for(let xe=1;xe<se.length;xe++){const Ue=se[Ye],nt=se[xe],Je=Ue.start+Ue.count,Re=J(nt.start,E.width,4),rt=J(Ue.start,E.width,4);nt.start<=Je+1&&Re===rt&&J(nt.start+nt.count-1,E.width,4)===Re?Ue.count=Math.max(Ue.count,nt.start+nt.count-Ue.start):(++Ye,se[Ye]=nt)}se.length=Ye+1;const Ce=r.getParameter(r.UNPACK_ROW_LENGTH),ze=r.getParameter(r.UNPACK_SKIP_PIXELS),Qe=r.getParameter(r.UNPACK_SKIP_ROWS);r.pixelStorei(r.UNPACK_ROW_LENGTH,E.width);for(let xe=0,Ue=se.length;xe<Ue;xe++){const nt=se[xe],Je=Math.floor(nt.start/4),Re=Math.ceil(nt.count/4),rt=Je%E.width,k=Math.floor(Je/E.width),De=Re,ve=1;r.pixelStorei(r.UNPACK_SKIP_PIXELS,rt),r.pixelStorei(r.UNPACK_SKIP_ROWS,k),t.texSubImage2D(r.TEXTURE_2D,0,rt,k,De,ve,Z,ue,E.data)}b.clearUpdateRanges(),r.pixelStorei(r.UNPACK_ROW_LENGTH,Ce),r.pixelStorei(r.UNPACK_SKIP_PIXELS,ze),r.pixelStorei(r.UNPACK_SKIP_ROWS,Qe)}}function we(b,E,Z){let ue=r.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=r.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=r.TEXTURE_3D);const me=Be(b,E),se=E.source;t.bindTexture(ue,b.__webglTexture,r.TEXTURE0+Z);const Ye=s.get(se);if(se.version!==Ye.__version||me===!0){t.activeTexture(r.TEXTURE0+Z);const Ce=Tt.getPrimaries(Tt.workingColorSpace),ze=E.colorSpace===Ci?null:Tt.getPrimaries(E.colorSpace),Qe=E.colorSpace===Ci||Ce===ze?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,Qe);let xe=T(E.image,!1,a.maxTextureSize);xe=st(E,xe);const Ue=l.convert(E.format,E.colorSpace),nt=l.convert(E.type);let Je=I(E.internalFormat,Ue,nt,E.colorSpace,E.isVideoTexture);ne(ue,E);let Re;const rt=E.mipmaps,k=E.isVideoTexture!==!0,De=Ye.__version===void 0||me===!0,ve=se.dataReady,Ie=j(E,xe);if(E.isDepthTexture)Je=R(E.format===Js,E.type),De&&(k?t.texStorage2D(r.TEXTURE_2D,1,Je,xe.width,xe.height):t.texImage2D(r.TEXTURE_2D,0,Je,xe.width,xe.height,0,Ue,nt,null));else if(E.isDataTexture)if(rt.length>0){k&&De&&t.texStorage2D(r.TEXTURE_2D,Ie,Je,rt[0].width,rt[0].height);for(let ye=0,he=rt.length;ye<he;ye++)Re=rt[ye],k?ve&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Re.width,Re.height,Ue,nt,Re.data):t.texImage2D(r.TEXTURE_2D,ye,Je,Re.width,Re.height,0,Ue,nt,Re.data);E.generateMipmaps=!1}else k?(De&&t.texStorage2D(r.TEXTURE_2D,Ie,Je,xe.width,xe.height),ve&&de(E,xe,Ue,nt)):t.texImage2D(r.TEXTURE_2D,0,Je,xe.width,xe.height,0,Ue,nt,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){k&&De&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Je,rt[0].width,rt[0].height,xe.depth);for(let ye=0,he=rt.length;ye<he;ye++)if(Re=rt[ye],E.format!==xi)if(Ue!==null)if(k){if(ve)if(E.layerUpdates.size>0){const He=lm(Re.width,Re.height,E.format,E.type);for(const at of E.layerUpdates){const Pt=Re.data.subarray(at*He/Re.data.BYTES_PER_ELEMENT,(at+1)*He/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,at,Re.width,Re.height,1,Ue,Pt)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Re.width,Re.height,xe.depth,Ue,Re.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,ye,Je,Re.width,Re.height,xe.depth,0,Re.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else k?ve&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,ye,0,0,0,Re.width,Re.height,xe.depth,Ue,nt,Re.data):t.texImage3D(r.TEXTURE_2D_ARRAY,ye,Je,Re.width,Re.height,xe.depth,0,Ue,nt,Re.data)}else{k&&De&&t.texStorage2D(r.TEXTURE_2D,Ie,Je,rt[0].width,rt[0].height);for(let ye=0,he=rt.length;ye<he;ye++)Re=rt[ye],E.format!==xi?Ue!==null?k?ve&&t.compressedTexSubImage2D(r.TEXTURE_2D,ye,0,0,Re.width,Re.height,Ue,Re.data):t.compressedTexImage2D(r.TEXTURE_2D,ye,Je,Re.width,Re.height,0,Re.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):k?ve&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Re.width,Re.height,Ue,nt,Re.data):t.texImage2D(r.TEXTURE_2D,ye,Je,Re.width,Re.height,0,Ue,nt,Re.data)}else if(E.isDataArrayTexture)if(k){if(De&&t.texStorage3D(r.TEXTURE_2D_ARRAY,Ie,Je,xe.width,xe.height,xe.depth),ve)if(E.layerUpdates.size>0){const ye=lm(xe.width,xe.height,E.format,E.type);for(const he of E.layerUpdates){const He=xe.data.subarray(he*ye/xe.data.BYTES_PER_ELEMENT,(he+1)*ye/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,he,xe.width,xe.height,1,Ue,nt,He)}E.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Ue,nt,xe.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,Je,xe.width,xe.height,xe.depth,0,Ue,nt,xe.data);else if(E.isData3DTexture)k?(De&&t.texStorage3D(r.TEXTURE_3D,Ie,Je,xe.width,xe.height,xe.depth),ve&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Ue,nt,xe.data)):t.texImage3D(r.TEXTURE_3D,0,Je,xe.width,xe.height,xe.depth,0,Ue,nt,xe.data);else if(E.isFramebufferTexture){if(De)if(k)t.texStorage2D(r.TEXTURE_2D,Ie,Je,xe.width,xe.height);else{let ye=xe.width,he=xe.height;for(let He=0;He<Ie;He++)t.texImage2D(r.TEXTURE_2D,He,Je,ye,he,0,Ue,nt,null),ye>>=1,he>>=1}}else if(rt.length>0){if(k&&De){const ye=Vt(rt[0]);t.texStorage2D(r.TEXTURE_2D,Ie,Je,ye.width,ye.height)}for(let ye=0,he=rt.length;ye<he;ye++)Re=rt[ye],k?ve&&t.texSubImage2D(r.TEXTURE_2D,ye,0,0,Ue,nt,Re):t.texImage2D(r.TEXTURE_2D,ye,Je,Ue,nt,Re);E.generateMipmaps=!1}else if(k){if(De){const ye=Vt(xe);t.texStorage2D(r.TEXTURE_2D,Ie,Je,ye.width,ye.height)}ve&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,Ue,nt,xe)}else t.texImage2D(r.TEXTURE_2D,0,Je,Ue,nt,xe);A(E)&&x(ue),Ye.__version=se.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Ae(b,E,Z){if(E.image.length!==6)return;const ue=Be(b,E),me=E.source;t.bindTexture(r.TEXTURE_CUBE_MAP,b.__webglTexture,r.TEXTURE0+Z);const se=s.get(me);if(me.version!==se.__version||ue===!0){t.activeTexture(r.TEXTURE0+Z);const Ye=Tt.getPrimaries(Tt.workingColorSpace),Ce=E.colorSpace===Ci?null:Tt.getPrimaries(E.colorSpace),ze=E.colorSpace===Ci||Ye===Ce?r.NONE:r.BROWSER_DEFAULT_WEBGL;r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,E.flipY),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),r.pixelStorei(r.UNPACK_ALIGNMENT,E.unpackAlignment),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze);const Qe=E.isCompressedTexture||E.image[0].isCompressedTexture,xe=E.image[0]&&E.image[0].isDataTexture,Ue=[];for(let he=0;he<6;he++)!Qe&&!xe?Ue[he]=T(E.image[he],!0,a.maxCubemapSize):Ue[he]=xe?E.image[he].image:E.image[he],Ue[he]=st(E,Ue[he]);const nt=Ue[0],Je=l.convert(E.format,E.colorSpace),Re=l.convert(E.type),rt=I(E.internalFormat,Je,Re,E.colorSpace),k=E.isVideoTexture!==!0,De=se.__version===void 0||ue===!0,ve=me.dataReady;let Ie=j(E,nt);ne(r.TEXTURE_CUBE_MAP,E);let ye;if(Qe){k&&De&&t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,rt,nt.width,nt.height);for(let he=0;he<6;he++){ye=Ue[he].mipmaps;for(let He=0;He<ye.length;He++){const at=ye[He];E.format!==xi?Je!==null?k?ve&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,at.width,at.height,Je,at.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,rt,at.width,at.height,0,at.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,0,0,at.width,at.height,Je,Re,at.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He,rt,at.width,at.height,0,Je,Re,at.data)}}}else{if(ye=E.mipmaps,k&&De){ye.length>0&&Ie++;const he=Vt(Ue[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,Ie,rt,he.width,he.height)}for(let he=0;he<6;he++)if(xe){k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Ue[he].width,Ue[he].height,Je,Re,Ue[he].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,Ue[he].width,Ue[he].height,0,Je,Re,Ue[he].data);for(let He=0;He<ye.length;He++){const Pt=ye[He].image[he].image;k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,Pt.width,Pt.height,Je,Re,Pt.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,rt,Pt.width,Pt.height,0,Je,Re,Pt.data)}}else{k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,0,0,Je,Re,Ue[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,0,rt,Je,Re,Ue[he]);for(let He=0;He<ye.length;He++){const at=ye[He];k?ve&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,0,0,Je,Re,at.image[he]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+he,He+1,rt,Je,Re,at.image[he])}}}A(E)&&x(r.TEXTURE_CUBE_MAP),se.__version=me.version,E.onUpdate&&E.onUpdate(E)}b.__version=E.version}function Te(b,E,Z,ue,me,se){const Ye=l.convert(Z.format,Z.colorSpace),Ce=l.convert(Z.type),ze=I(Z.internalFormat,Ye,Ce,Z.colorSpace),Qe=s.get(E),xe=s.get(Z);if(xe.__renderTarget=E,!Qe.__hasExternalTextures){const Ue=Math.max(1,E.width>>se),nt=Math.max(1,E.height>>se);me===r.TEXTURE_3D||me===r.TEXTURE_2D_ARRAY?t.texImage3D(me,se,ze,Ue,nt,E.depth,0,Ye,Ce,null):t.texImage2D(me,se,ze,Ue,nt,0,Ye,Ce,null)}t.bindFramebuffer(r.FRAMEBUFFER,b),vt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ue,me,xe.__webglTexture,0,Xe(E)):(me===r.TEXTURE_2D||me>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,ue,me,xe.__webglTexture,se),t.bindFramebuffer(r.FRAMEBUFFER,null)}function qe(b,E,Z){if(r.bindRenderbuffer(r.RENDERBUFFER,b),E.depthBuffer){const ue=E.depthTexture,me=ue&&ue.isDepthTexture?ue.type:null,se=R(E.stencilBuffer,me),Ye=E.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ce=Xe(E);vt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Ce,se,E.width,E.height):Z?r.renderbufferStorageMultisample(r.RENDERBUFFER,Ce,se,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,se,E.width,E.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,Ye,r.RENDERBUFFER,b)}else{const ue=E.textures;for(let me=0;me<ue.length;me++){const se=ue[me],Ye=l.convert(se.format,se.colorSpace),Ce=l.convert(se.type),ze=I(se.internalFormat,Ye,Ce,se.colorSpace),Qe=Xe(E);Z&&vt(E)===!1?r.renderbufferStorageMultisample(r.RENDERBUFFER,Qe,ze,E.width,E.height):vt(E)?f.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,Qe,ze,E.width,E.height):r.renderbufferStorage(r.RENDERBUFFER,ze,E.width,E.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function We(b,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(r.FRAMEBUFFER,b),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ue=s.get(E.depthTexture);ue.__renderTarget=E,(!ue.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),pe(E.depthTexture,0);const me=ue.__webglTexture,se=Xe(E);if(E.depthTexture.format===Xo)vt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_ATTACHMENT,r.TEXTURE_2D,me,0);else if(E.depthTexture.format===Js)vt(E)?f.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0,se):r.framebufferTexture2D(r.FRAMEBUFFER,r.DEPTH_STENCIL_ATTACHMENT,r.TEXTURE_2D,me,0);else throw new Error("Unknown depthTexture format")}function bt(b){const E=s.get(b),Z=b.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==b.depthTexture){const ue=b.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ue){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ue.removeEventListener("dispose",me)};ue.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=ue}if(b.depthTexture&&!E.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");const ue=b.texture.mipmaps;ue&&ue.length>0?We(E.__webglFramebuffer[0],b):We(E.__webglFramebuffer,b)}else if(Z){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]===void 0)E.__webglDepthbuffer[ue]=r.createRenderbuffer(),qe(E.__webglDepthbuffer[ue],b,!1);else{const me=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer[ue];r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,se)}}else{const ue=b.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=r.createRenderbuffer(),qe(E.__webglDepthbuffer,b,!1);else{const me=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,se=E.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,se),r.framebufferRenderbuffer(r.FRAMEBUFFER,me,r.RENDERBUFFER,se)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Bt(b,E,Z){const ue=s.get(b);E!==void 0&&Te(ue.__webglFramebuffer,b,b.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),Z!==void 0&&bt(b)}function gt(b){const E=b.texture,Z=s.get(b),ue=s.get(E);b.addEventListener("dispose",F);const me=b.textures,se=b.isWebGLCubeRenderTarget===!0,Ye=me.length>1;if(Ye||(ue.__webglTexture===void 0&&(ue.__webglTexture=r.createTexture()),ue.__version=E.version,u.memory.textures++),se){Z.__webglFramebuffer=[];for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[Ce]=[];for(let ze=0;ze<E.mipmaps.length;ze++)Z.__webglFramebuffer[Ce][ze]=r.createFramebuffer()}else Z.__webglFramebuffer[Ce]=r.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let Ce=0;Ce<E.mipmaps.length;Ce++)Z.__webglFramebuffer[Ce]=r.createFramebuffer()}else Z.__webglFramebuffer=r.createFramebuffer();if(Ye)for(let Ce=0,ze=me.length;Ce<ze;Ce++){const Qe=s.get(me[Ce]);Qe.__webglTexture===void 0&&(Qe.__webglTexture=r.createTexture(),u.memory.textures++)}if(b.samples>0&&vt(b)===!1){Z.__webglMultisampledFramebuffer=r.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let Ce=0;Ce<me.length;Ce++){const ze=me[Ce];Z.__webglColorRenderbuffer[Ce]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce]);const Qe=l.convert(ze.format,ze.colorSpace),xe=l.convert(ze.type),Ue=I(ze.internalFormat,Qe,xe,ze.colorSpace,b.isXRRenderTarget===!0),nt=Xe(b);r.renderbufferStorageMultisample(r.RENDERBUFFER,nt,Ue,b.width,b.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Ce,r.RENDERBUFFER,Z.__webglColorRenderbuffer[Ce])}r.bindRenderbuffer(r.RENDERBUFFER,null),b.depthBuffer&&(Z.__webglDepthRenderbuffer=r.createRenderbuffer(),qe(Z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(se){t.bindTexture(r.TEXTURE_CUBE_MAP,ue.__webglTexture),ne(r.TEXTURE_CUBE_MAP,E);for(let Ce=0;Ce<6;Ce++)if(E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)Te(Z.__webglFramebuffer[Ce][ze],b,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,ze);else Te(Z.__webglFramebuffer[Ce],b,E,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0);A(E)&&x(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ye){for(let Ce=0,ze=me.length;Ce<ze;Ce++){const Qe=me[Ce],xe=s.get(Qe);t.bindTexture(r.TEXTURE_2D,xe.__webglTexture),ne(r.TEXTURE_2D,Qe),Te(Z.__webglFramebuffer,b,Qe,r.COLOR_ATTACHMENT0+Ce,r.TEXTURE_2D,0),A(Qe)&&x(r.TEXTURE_2D)}t.unbindTexture()}else{let Ce=r.TEXTURE_2D;if((b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(Ce=b.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(Ce,ue.__webglTexture),ne(Ce,E),E.mipmaps&&E.mipmaps.length>0)for(let ze=0;ze<E.mipmaps.length;ze++)Te(Z.__webglFramebuffer[ze],b,E,r.COLOR_ATTACHMENT0,Ce,ze);else Te(Z.__webglFramebuffer,b,E,r.COLOR_ATTACHMENT0,Ce,0);A(E)&&x(Ce),t.unbindTexture()}b.depthBuffer&&bt(b)}function B(b){const E=b.textures;for(let Z=0,ue=E.length;Z<ue;Z++){const me=E[Z];if(A(me)){const se=L(b),Ye=s.get(me).__webglTexture;t.bindTexture(se,Ye),x(se),t.unbindTexture()}}}const on=[],At=[];function Dt(b){if(b.samples>0){if(vt(b)===!1){const E=b.textures,Z=b.width,ue=b.height;let me=r.COLOR_BUFFER_BIT;const se=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,Ye=s.get(b),Ce=E.length>1;if(Ce)for(let Qe=0;Qe<E.length;Qe++)t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer);const ze=b.texture.mipmaps;ze&&ze.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglFramebuffer);for(let Qe=0;Qe<E.length;Qe++){if(b.resolveDepthBuffer&&(b.depthBuffer&&(me|=r.DEPTH_BUFFER_BIT),b.stencilBuffer&&b.resolveStencilBuffer&&(me|=r.STENCIL_BUFFER_BIT)),Ce){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[Qe]);const xe=s.get(E[Qe]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,xe,0)}r.blitFramebuffer(0,0,Z,ue,0,0,Z,ue,me,r.NEAREST),h===!0&&(on.length=0,At.length=0,on.push(r.COLOR_ATTACHMENT0+Qe),b.depthBuffer&&b.resolveDepthBuffer===!1&&(on.push(se),At.push(se),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,At)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,on))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),Ce)for(let Qe=0;Qe<E.length;Qe++){t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.RENDERBUFFER,Ye.__webglColorRenderbuffer[Qe]);const xe=s.get(E[Qe]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,Ye.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+Qe,r.TEXTURE_2D,xe,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,Ye.__webglMultisampledFramebuffer)}else if(b.depthBuffer&&b.resolveDepthBuffer===!1&&h){const E=b.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[E])}}}function Xe(b){return Math.min(a.maxSamples,b.samples)}function vt(b){const E=s.get(b);return b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Ke(b){const E=u.render.frame;g.get(b)!==E&&(g.set(b,E),b.update())}function st(b,E){const Z=b.colorSpace,ue=b.format,me=b.type;return b.isCompressedTexture===!0||b.isVideoTexture===!0||Z!==br&&Z!==Ci&&(Tt.getTransfer(Z)===It?(ue!==xi||me!==vn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),E}function Vt(b){return typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement?(m.width=b.naturalWidth||b.width,m.height=b.naturalHeight||b.height):typeof VideoFrame<"u"&&b instanceof VideoFrame?(m.width=b.displayWidth,m.height=b.displayHeight):(m.width=b.width,m.height=b.height),m}this.allocateTextureUnit=te,this.resetTextureUnits=ae,this.setTexture2D=pe,this.setTexture2DArray=oe,this.setTexture3D=ce,this.setTextureCube=z,this.rebindTextures=Bt,this.setupRenderTarget=gt,this.updateRenderTargetMipmap=B,this.updateMultisampleRenderTarget=Dt,this.setupDepthRenderbuffer=bt,this.setupFrameBufferTexture=Te,this.useMultisampledRTT=vt}function TE(r,e){function t(s,a=Ci){let l;const u=Tt.getTransfer(a);if(s===vn)return r.UNSIGNED_BYTE;if(s===Yf)return r.UNSIGNED_SHORT_4_4_4_4;if(s===Qf)return r.UNSIGNED_SHORT_5_5_5_1;if(s===qm)return r.UNSIGNED_INT_5_9_9_9_REV;if(s===Qm)return r.BYTE;if(s===Km)return r.SHORT;if(s===Wo)return r.UNSIGNED_SHORT;if(s===jf)return r.INT;if(s===Dr)return r.UNSIGNED_INT;if(s===ji)return r.FLOAT;if(s===jo)return r.HALF_FLOAT;if(s===Zm)return r.ALPHA;if(s===Jm)return r.RGB;if(s===xi)return r.RGBA;if(s===Xo)return r.DEPTH_COMPONENT;if(s===Js)return r.DEPTH_STENCIL;if(s===$m)return r.RED;if(s===Kf)return r.RED_INTEGER;if(s===eg)return r.RG;if(s===qf)return r.RG_INTEGER;if(s===Zf)return r.RGBA_INTEGER;if(s===Rl||s===Dl||s===bl||s===Pl)if(u===It)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(s===Rl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Dl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===bl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Pl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(s===Rl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Dl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===bl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Pl)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===pf||s===mf||s===gf||s===vf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(s===pf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===mf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===gf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===vf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===xf||s===_f||s===Af)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(s===xf||s===_f)return u===It?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(s===Af)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Sf||s===yf||s===Ef||s===Mf||s===wf||s===Tf||s===Cf||s===Rf||s===Df||s===bf||s===Pf||s===If||s===Lf||s===Uf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(s===Sf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===yf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ef)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Mf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===wf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Tf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Cf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Rf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Df)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===bf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Pf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===If)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Lf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Uf)return u===It?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===Il||s===Bf||s===Nf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(s===Il)return u===It?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(s===Bf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(s===Nf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(s===tg||s===Ff||s===Of||s===zf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(s===Il)return l.COMPRESSED_RED_RGTC1_EXT;if(s===Ff)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Of)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===Zs?r.UNSIGNED_INT_24_8:r[s]!==void 0?r[s]:null}return{convert:t}}const CE=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,RE=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class DE{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t,s){if(this.texture===null){const a=new nn,l=e.properties.get(a);l.__webglTexture=t.texture,(t.depthNear!==s.depthNear||t.depthFar!==s.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,s=new xn({vertexShader:CE,fragmentShader:RE,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _i(new Zo(20,20),s)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bE extends Ji{constructor(e,t){super();const s=this;let a=null,l=1,u=null,f="local-floor",h=1,m=null,g=null,v=null,_=null,S=null,M=null;const T=new DE,A=t.getContextAttributes();let x=null,L=null;const I=[],R=[],j=new lt;let V=null;const F=new qn;F.viewport=new jt;const Y=new qn;Y.viewport=new jt;const D=[F,Y],C=new Zx;let H=null,ae=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(J){let de=I[J];return de===void 0&&(de=new Wu,I[J]=de),de.getTargetRaySpace()},this.getControllerGrip=function(J){let de=I[J];return de===void 0&&(de=new Wu,I[J]=de),de.getGripSpace()},this.getHand=function(J){let de=I[J];return de===void 0&&(de=new Wu,I[J]=de),de.getHandSpace()};function te(J){const de=R.indexOf(J.inputSource);if(de===-1)return;const we=I[de];we!==void 0&&(we.update(J.inputSource,J.frame,m||u),we.dispatchEvent({type:J.type,data:J.inputSource}))}function fe(){a.removeEventListener("select",te),a.removeEventListener("selectstart",te),a.removeEventListener("selectend",te),a.removeEventListener("squeeze",te),a.removeEventListener("squeezestart",te),a.removeEventListener("squeezeend",te),a.removeEventListener("end",fe),a.removeEventListener("inputsourceschange",pe);for(let J=0;J<I.length;J++){const de=R[J];de!==null&&(R[J]=null,I[J].disconnect(de))}H=null,ae=null,T.reset(),e.setRenderTarget(x),S=null,_=null,v=null,a=null,L=null,Be.stop(),s.isPresenting=!1,e.setPixelRatio(V),e.setSize(j.width,j.height,!1),s.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(J){l=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(J){f=J,s.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return m||u},this.setReferenceSpace=function(J){m=J},this.getBaseLayer=function(){return _!==null?_:S},this.getBinding=function(){return v},this.getFrame=function(){return M},this.getSession=function(){return a},this.setSession=async function(J){if(a=J,a!==null){if(x=e.getRenderTarget(),a.addEventListener("select",te),a.addEventListener("selectstart",te),a.addEventListener("selectend",te),a.addEventListener("squeeze",te),a.addEventListener("squeezestart",te),a.addEventListener("squeezeend",te),a.addEventListener("end",fe),a.addEventListener("inputsourceschange",pe),A.xrCompatible!==!0&&await t.makeXRCompatible(),V=e.getPixelRatio(),e.getSize(j),typeof XRWebGLBinding<"u"&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Ae=null,Te=null;A.depth&&(Te=A.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=A.stencil?Js:Xo,Ae=A.stencil?Zs:Dr);const qe={colorFormat:t.RGBA8,depthFormat:Te,scaleFactor:l};v=new XRWebGLBinding(a,t),_=v.createProjectionLayer(qe),a.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),L=new Dn(_.textureWidth,_.textureHeight,{format:xi,type:vn,depthTexture:new nd(_.textureWidth,_.textureHeight,Ae,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:A.stencil,colorSpace:e.outputColorSpace,samples:A.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}else{const we={antialias:A.antialias,alpha:!0,depth:A.depth,stencil:A.stencil,framebufferScaleFactor:l};S=new XRWebGLLayer(a,t,we),a.updateRenderState({baseLayer:S}),e.setPixelRatio(1),e.setSize(S.framebufferWidth,S.framebufferHeight,!1),L=new Dn(S.framebufferWidth,S.framebufferHeight,{format:xi,type:vn,colorSpace:e.outputColorSpace,stencilBuffer:A.stencil,resolveDepthBuffer:S.ignoreDepthValues===!1,resolveStencilBuffer:S.ignoreDepthValues===!1})}L.isXRRenderTarget=!0,this.setFoveation(h),m=null,u=await a.requestReferenceSpace(f),Be.setContext(a),Be.start(),s.isPresenting=!0,s.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return T.getDepthTexture()};function pe(J){for(let de=0;de<J.removed.length;de++){const we=J.removed[de],Ae=R.indexOf(we);Ae>=0&&(R[Ae]=null,I[Ae].disconnect(we))}for(let de=0;de<J.added.length;de++){const we=J.added[de];let Ae=R.indexOf(we);if(Ae===-1){for(let qe=0;qe<I.length;qe++)if(qe>=R.length){R.push(we),Ae=qe;break}else if(R[qe]===null){R[qe]=we,Ae=qe;break}if(Ae===-1)break}const Te=I[Ae];Te&&Te.connect(we)}}const oe=new ie,ce=new ie;function z(J,de,we){oe.setFromMatrixPosition(de.matrixWorld),ce.setFromMatrixPosition(we.matrixWorld);const Ae=oe.distanceTo(ce),Te=de.projectionMatrix.elements,qe=we.projectionMatrix.elements,We=Te[14]/(Te[10]-1),bt=Te[14]/(Te[10]+1),Bt=(Te[9]+1)/Te[5],gt=(Te[9]-1)/Te[5],B=(Te[8]-1)/Te[0],on=(qe[8]+1)/qe[0],At=We*B,Dt=We*on,Xe=Ae/(-B+on),vt=Xe*-B;if(de.matrixWorld.decompose(J.position,J.quaternion,J.scale),J.translateX(vt),J.translateZ(Xe),J.matrixWorld.compose(J.position,J.quaternion,J.scale),J.matrixWorldInverse.copy(J.matrixWorld).invert(),Te[10]===-1)J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse);else{const Ke=We+Xe,st=bt+Xe,Vt=At-vt,b=Dt+(Ae-vt),E=Bt*bt/st*Ke,Z=gt*bt/st*Ke;J.projectionMatrix.makePerspective(Vt,b,E,Z,Ke,st),J.projectionMatrixInverse.copy(J.projectionMatrix).invert()}}function le(J,de){de===null?J.matrixWorld.copy(J.matrix):J.matrixWorld.multiplyMatrices(de.matrixWorld,J.matrix),J.matrixWorldInverse.copy(J.matrixWorld).invert()}this.updateCamera=function(J){if(a===null)return;let de=J.near,we=J.far;T.texture!==null&&(T.depthNear>0&&(de=T.depthNear),T.depthFar>0&&(we=T.depthFar)),C.near=Y.near=F.near=de,C.far=Y.far=F.far=we,(H!==C.near||ae!==C.far)&&(a.updateRenderState({depthNear:C.near,depthFar:C.far}),H=C.near,ae=C.far),F.layers.mask=J.layers.mask|2,Y.layers.mask=J.layers.mask|4,C.layers.mask=F.layers.mask|Y.layers.mask;const Ae=J.parent,Te=C.cameras;le(C,Ae);for(let qe=0;qe<Te.length;qe++)le(Te[qe],Ae);Te.length===2?z(C,F,Y):C.projectionMatrix.copy(F.projectionMatrix),re(J,C,Ae)};function re(J,de,we){we===null?J.matrix.copy(de.matrixWorld):(J.matrix.copy(we.matrixWorld),J.matrix.invert(),J.matrix.multiply(de.matrixWorld)),J.matrix.decompose(J.position,J.quaternion,J.scale),J.updateMatrixWorld(!0),J.projectionMatrix.copy(de.projectionMatrix),J.projectionMatrixInverse.copy(de.projectionMatrixInverse),J.isPerspectiveCamera&&(J.fov=kf*2*Math.atan(1/J.projectionMatrix.elements[5]),J.zoom=1)}this.getCamera=function(){return C},this.getFoveation=function(){if(!(_===null&&S===null))return h},this.setFoveation=function(J){h=J,_!==null&&(_.fixedFoveation=J),S!==null&&S.fixedFoveation!==void 0&&(S.fixedFoveation=J)},this.hasDepthSensing=function(){return T.texture!==null},this.getDepthSensingMesh=function(){return T.getMesh(C)};let U=null;function ne(J,de){if(g=de.getViewerPose(m||u),M=de,g!==null){const we=g.views;S!==null&&(e.setRenderTargetFramebuffer(L,S.framebuffer),e.setRenderTarget(L));let Ae=!1;we.length!==C.cameras.length&&(C.cameras.length=0,Ae=!0);for(let We=0;We<we.length;We++){const bt=we[We];let Bt=null;if(S!==null)Bt=S.getViewport(bt);else{const B=v.getViewSubImage(_,bt);Bt=B.viewport,We===0&&(e.setRenderTargetTextures(L,B.colorTexture,B.depthStencilTexture),e.setRenderTarget(L))}let gt=D[We];gt===void 0&&(gt=new qn,gt.layers.enable(We),gt.viewport=new jt,D[We]=gt),gt.matrix.fromArray(bt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(bt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Bt.x,Bt.y,Bt.width,Bt.height),We===0&&(C.matrix.copy(gt.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Ae===!0&&C.cameras.push(gt)}const Te=a.enabledFeatures;if(Te&&Te.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&v){const We=v.getDepthInformation(we[0]);We&&We.isValid&&We.texture&&T.init(e,We,a.renderState)}}for(let we=0;we<I.length;we++){const Ae=R[we],Te=I[we];Ae!==null&&Te!==void 0&&Te.update(Ae,de,m||u)}U&&U(J,de),de.detectedPlanes&&s.dispatchEvent({type:"planesdetected",data:de}),M=null}const Be=new dg;Be.setAnimationLoop(ne),this.setAnimationLoop=function(J){U=J},this.dispose=function(){}}}const Zr=new Zi,PE=new $t;function IE(r,e){function t(A,x){A.matrixAutoUpdate===!0&&A.updateMatrix(),x.value.copy(A.matrix)}function s(A,x){x.color.getRGB(A.fogColor.value,cg(r)),x.isFog?(A.fogNear.value=x.near,A.fogFar.value=x.far):x.isFogExp2&&(A.fogDensity.value=x.density)}function a(A,x,L,I,R){x.isMeshBasicMaterial||x.isMeshLambertMaterial?l(A,x):x.isMeshToonMaterial?(l(A,x),v(A,x)):x.isMeshPhongMaterial?(l(A,x),g(A,x)):x.isMeshStandardMaterial?(l(A,x),_(A,x),x.isMeshPhysicalMaterial&&S(A,x,R)):x.isMeshMatcapMaterial?(l(A,x),M(A,x)):x.isMeshDepthMaterial?l(A,x):x.isMeshDistanceMaterial?(l(A,x),T(A,x)):x.isMeshNormalMaterial?l(A,x):x.isLineBasicMaterial?(u(A,x),x.isLineDashedMaterial&&f(A,x)):x.isPointsMaterial?h(A,x,L,I):x.isSpriteMaterial?m(A,x):x.isShadowMaterial?(A.color.value.copy(x.color),A.opacity.value=x.opacity):x.isShaderMaterial&&(x.uniformsNeedUpdate=!1)}function l(A,x){A.opacity.value=x.opacity,x.color&&A.diffuse.value.copy(x.color),x.emissive&&A.emissive.value.copy(x.emissive).multiplyScalar(x.emissiveIntensity),x.map&&(A.map.value=x.map,t(x.map,A.mapTransform)),x.alphaMap&&(A.alphaMap.value=x.alphaMap,t(x.alphaMap,A.alphaMapTransform)),x.bumpMap&&(A.bumpMap.value=x.bumpMap,t(x.bumpMap,A.bumpMapTransform),A.bumpScale.value=x.bumpScale,x.side===hn&&(A.bumpScale.value*=-1)),x.normalMap&&(A.normalMap.value=x.normalMap,t(x.normalMap,A.normalMapTransform),A.normalScale.value.copy(x.normalScale),x.side===hn&&A.normalScale.value.negate()),x.displacementMap&&(A.displacementMap.value=x.displacementMap,t(x.displacementMap,A.displacementMapTransform),A.displacementScale.value=x.displacementScale,A.displacementBias.value=x.displacementBias),x.emissiveMap&&(A.emissiveMap.value=x.emissiveMap,t(x.emissiveMap,A.emissiveMapTransform)),x.specularMap&&(A.specularMap.value=x.specularMap,t(x.specularMap,A.specularMapTransform)),x.alphaTest>0&&(A.alphaTest.value=x.alphaTest);const L=e.get(x),I=L.envMap,R=L.envMapRotation;I&&(A.envMap.value=I,Zr.copy(R),Zr.x*=-1,Zr.y*=-1,Zr.z*=-1,I.isCubeTexture&&I.isRenderTargetTexture===!1&&(Zr.y*=-1,Zr.z*=-1),A.envMapRotation.value.setFromMatrix4(PE.makeRotationFromEuler(Zr)),A.flipEnvMap.value=I.isCubeTexture&&I.isRenderTargetTexture===!1?-1:1,A.reflectivity.value=x.reflectivity,A.ior.value=x.ior,A.refractionRatio.value=x.refractionRatio),x.lightMap&&(A.lightMap.value=x.lightMap,A.lightMapIntensity.value=x.lightMapIntensity,t(x.lightMap,A.lightMapTransform)),x.aoMap&&(A.aoMap.value=x.aoMap,A.aoMapIntensity.value=x.aoMapIntensity,t(x.aoMap,A.aoMapTransform))}function u(A,x){A.diffuse.value.copy(x.color),A.opacity.value=x.opacity,x.map&&(A.map.value=x.map,t(x.map,A.mapTransform))}function f(A,x){A.dashSize.value=x.dashSize,A.totalSize.value=x.dashSize+x.gapSize,A.scale.value=x.scale}function h(A,x,L,I){A.diffuse.value.copy(x.color),A.opacity.value=x.opacity,A.size.value=x.size*L,A.scale.value=I*.5,x.map&&(A.map.value=x.map,t(x.map,A.uvTransform)),x.alphaMap&&(A.alphaMap.value=x.alphaMap,t(x.alphaMap,A.alphaMapTransform)),x.alphaTest>0&&(A.alphaTest.value=x.alphaTest)}function m(A,x){A.diffuse.value.copy(x.color),A.opacity.value=x.opacity,A.rotation.value=x.rotation,x.map&&(A.map.value=x.map,t(x.map,A.mapTransform)),x.alphaMap&&(A.alphaMap.value=x.alphaMap,t(x.alphaMap,A.alphaMapTransform)),x.alphaTest>0&&(A.alphaTest.value=x.alphaTest)}function g(A,x){A.specular.value.copy(x.specular),A.shininess.value=Math.max(x.shininess,1e-4)}function v(A,x){x.gradientMap&&(A.gradientMap.value=x.gradientMap)}function _(A,x){A.metalness.value=x.metalness,x.metalnessMap&&(A.metalnessMap.value=x.metalnessMap,t(x.metalnessMap,A.metalnessMapTransform)),A.roughness.value=x.roughness,x.roughnessMap&&(A.roughnessMap.value=x.roughnessMap,t(x.roughnessMap,A.roughnessMapTransform)),x.envMap&&(A.envMapIntensity.value=x.envMapIntensity)}function S(A,x,L){A.ior.value=x.ior,x.sheen>0&&(A.sheenColor.value.copy(x.sheenColor).multiplyScalar(x.sheen),A.sheenRoughness.value=x.sheenRoughness,x.sheenColorMap&&(A.sheenColorMap.value=x.sheenColorMap,t(x.sheenColorMap,A.sheenColorMapTransform)),x.sheenRoughnessMap&&(A.sheenRoughnessMap.value=x.sheenRoughnessMap,t(x.sheenRoughnessMap,A.sheenRoughnessMapTransform))),x.clearcoat>0&&(A.clearcoat.value=x.clearcoat,A.clearcoatRoughness.value=x.clearcoatRoughness,x.clearcoatMap&&(A.clearcoatMap.value=x.clearcoatMap,t(x.clearcoatMap,A.clearcoatMapTransform)),x.clearcoatRoughnessMap&&(A.clearcoatRoughnessMap.value=x.clearcoatRoughnessMap,t(x.clearcoatRoughnessMap,A.clearcoatRoughnessMapTransform)),x.clearcoatNormalMap&&(A.clearcoatNormalMap.value=x.clearcoatNormalMap,t(x.clearcoatNormalMap,A.clearcoatNormalMapTransform),A.clearcoatNormalScale.value.copy(x.clearcoatNormalScale),x.side===hn&&A.clearcoatNormalScale.value.negate())),x.dispersion>0&&(A.dispersion.value=x.dispersion),x.iridescence>0&&(A.iridescence.value=x.iridescence,A.iridescenceIOR.value=x.iridescenceIOR,A.iridescenceThicknessMinimum.value=x.iridescenceThicknessRange[0],A.iridescenceThicknessMaximum.value=x.iridescenceThicknessRange[1],x.iridescenceMap&&(A.iridescenceMap.value=x.iridescenceMap,t(x.iridescenceMap,A.iridescenceMapTransform)),x.iridescenceThicknessMap&&(A.iridescenceThicknessMap.value=x.iridescenceThicknessMap,t(x.iridescenceThicknessMap,A.iridescenceThicknessMapTransform))),x.transmission>0&&(A.transmission.value=x.transmission,A.transmissionSamplerMap.value=L.texture,A.transmissionSamplerSize.value.set(L.width,L.height),x.transmissionMap&&(A.transmissionMap.value=x.transmissionMap,t(x.transmissionMap,A.transmissionMapTransform)),A.thickness.value=x.thickness,x.thicknessMap&&(A.thicknessMap.value=x.thicknessMap,t(x.thicknessMap,A.thicknessMapTransform)),A.attenuationDistance.value=x.attenuationDistance,A.attenuationColor.value.copy(x.attenuationColor)),x.anisotropy>0&&(A.anisotropyVector.value.set(x.anisotropy*Math.cos(x.anisotropyRotation),x.anisotropy*Math.sin(x.anisotropyRotation)),x.anisotropyMap&&(A.anisotropyMap.value=x.anisotropyMap,t(x.anisotropyMap,A.anisotropyMapTransform))),A.specularIntensity.value=x.specularIntensity,A.specularColor.value.copy(x.specularColor),x.specularColorMap&&(A.specularColorMap.value=x.specularColorMap,t(x.specularColorMap,A.specularColorMapTransform)),x.specularIntensityMap&&(A.specularIntensityMap.value=x.specularIntensityMap,t(x.specularIntensityMap,A.specularIntensityMapTransform))}function M(A,x){x.matcap&&(A.matcap.value=x.matcap)}function T(A,x){const L=e.get(x).light;A.referencePosition.value.setFromMatrixPosition(L.matrixWorld),A.nearDistance.value=L.shadow.camera.near,A.farDistance.value=L.shadow.camera.far}return{refreshFogUniforms:s,refreshMaterialUniforms:a}}function LE(r,e,t,s){let a={},l={},u=[];const f=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function h(L,I){const R=I.program;s.uniformBlockBinding(L,R)}function m(L,I){let R=a[L.id];R===void 0&&(M(L),R=g(L),a[L.id]=R,L.addEventListener("dispose",A));const j=I.program;s.updateUBOMapping(L,j);const V=e.render.frame;l[L.id]!==V&&(_(L),l[L.id]=V)}function g(L){const I=v();L.__bindingPointIndex=I;const R=r.createBuffer(),j=L.__size,V=L.usage;return r.bindBuffer(r.UNIFORM_BUFFER,R),r.bufferData(r.UNIFORM_BUFFER,j,V),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,I,R),R}function v(){for(let L=0;L<f;L++)if(u.indexOf(L)===-1)return u.push(L),L;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(L){const I=a[L.id],R=L.uniforms,j=L.__cache;r.bindBuffer(r.UNIFORM_BUFFER,I);for(let V=0,F=R.length;V<F;V++){const Y=Array.isArray(R[V])?R[V]:[R[V]];for(let D=0,C=Y.length;D<C;D++){const H=Y[D];if(S(H,V,D,j)===!0){const ae=H.__offset,te=Array.isArray(H.value)?H.value:[H.value];let fe=0;for(let pe=0;pe<te.length;pe++){const oe=te[pe],ce=T(oe);typeof oe=="number"||typeof oe=="boolean"?(H.__data[0]=oe,r.bufferSubData(r.UNIFORM_BUFFER,ae+fe,H.__data)):oe.isMatrix3?(H.__data[0]=oe.elements[0],H.__data[1]=oe.elements[1],H.__data[2]=oe.elements[2],H.__data[3]=0,H.__data[4]=oe.elements[3],H.__data[5]=oe.elements[4],H.__data[6]=oe.elements[5],H.__data[7]=0,H.__data[8]=oe.elements[6],H.__data[9]=oe.elements[7],H.__data[10]=oe.elements[8],H.__data[11]=0):(oe.toArray(H.__data,fe),fe+=ce.storage/Float32Array.BYTES_PER_ELEMENT)}r.bufferSubData(r.UNIFORM_BUFFER,ae,H.__data)}}}r.bindBuffer(r.UNIFORM_BUFFER,null)}function S(L,I,R,j){const V=L.value,F=I+"_"+R;if(j[F]===void 0)return typeof V=="number"||typeof V=="boolean"?j[F]=V:j[F]=V.clone(),!0;{const Y=j[F];if(typeof V=="number"||typeof V=="boolean"){if(Y!==V)return j[F]=V,!0}else if(Y.equals(V)===!1)return Y.copy(V),!0}return!1}function M(L){const I=L.uniforms;let R=0;const j=16;for(let F=0,Y=I.length;F<Y;F++){const D=Array.isArray(I[F])?I[F]:[I[F]];for(let C=0,H=D.length;C<H;C++){const ae=D[C],te=Array.isArray(ae.value)?ae.value:[ae.value];for(let fe=0,pe=te.length;fe<pe;fe++){const oe=te[fe],ce=T(oe),z=R%j,le=z%ce.boundary,re=z+le;R+=le,re!==0&&j-re<ce.storage&&(R+=j-re),ae.__data=new Float32Array(ce.storage/Float32Array.BYTES_PER_ELEMENT),ae.__offset=R,R+=ce.storage}}}const V=R%j;return V>0&&(R+=j-V),L.__size=R,L.__cache={},this}function T(L){const I={boundary:0,storage:0};return typeof L=="number"||typeof L=="boolean"?(I.boundary=4,I.storage=4):L.isVector2?(I.boundary=8,I.storage=8):L.isVector3||L.isColor?(I.boundary=16,I.storage=12):L.isVector4?(I.boundary=16,I.storage=16):L.isMatrix3?(I.boundary=48,I.storage=48):L.isMatrix4?(I.boundary=64,I.storage=64):L.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",L),I}function A(L){const I=L.target;I.removeEventListener("dispose",A);const R=u.indexOf(I.__bindingPointIndex);u.splice(R,1),r.deleteBuffer(a[I.id]),delete a[I.id],delete l[I.id]}function x(){for(const L in a)r.deleteBuffer(a[L]);u=[],a={},l={}}return{bind:h,update:m,dispose:x}}class UE{constructor(e={}){const{canvas:t=hx(),context:s=null,depth:a=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:m=!1,powerPreference:g="default",failIfMajorPerformanceCaveat:v=!1,reverseDepthBuffer:_=!1}=e;this.isWebGLRenderer=!0;let S;if(s!==null){if(typeof WebGLRenderingContext<"u"&&s instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");S=s.getContextAttributes().alpha}else S=u;const M=new Uint32Array(4),T=new Int32Array(4);let A=null,x=null;const L=[],I=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Rr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const R=this;let j=!1;this._outputColorSpace=Lt;let V=0,F=0,Y=null,D=-1,C=null;const H=new jt,ae=new jt;let te=null;const fe=new Rt(0);let pe=0,oe=t.width,ce=t.height,z=1,le=null,re=null;const U=new jt(0,0,oe,ce),ne=new jt(0,0,oe,ce);let Be=!1;const J=new fg;let de=!1,we=!1;const Ae=new $t,Te=new $t,qe=new ie,We=new jt,bt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function gt(){return Y===null?z:1}let B=s;function on(w,W){return t.getContext(w,W)}try{const w={alpha:!0,depth:a,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:m,powerPreference:g,failIfMajorPerformanceCaveat:v};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${eo}`),t.addEventListener("webglcontextlost",Ie,!1),t.addEventListener("webglcontextrestored",ye,!1),t.addEventListener("webglcontextcreationerror",he,!1),B===null){const W="webgl2";if(B=on(W,w),B===null)throw on(W)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw console.error("THREE.WebGLRenderer: "+w.message),w}let At,Dt,Xe,vt,Ke,st,Vt,b,E,Z,ue,me,se,Ye,Ce,ze,Qe,xe,Ue,nt,Je,Re,rt,k;function De(){At=new WS(B),At.init(),Re=new TE(B,At),Dt=new FS(B,At,e,Re),Xe=new ME(B,At),Dt.reverseDepthBuffer&&_&&Xe.buffers.depth.setReversed(!0),vt=new YS(B),Ke=new fE,st=new wE(B,At,Xe,Ke,Dt,Re,vt),Vt=new zS(R),b=new VS(R),E=new $x(B),rt=new BS(B,E),Z=new XS(B,E,vt,rt),ue=new KS(B,Z,E,vt),Ue=new QS(B,Dt,st),ze=new OS(Ke),me=new uE(R,Vt,b,At,Dt,rt,ze),se=new IE(R,Ke),Ye=new hE,Ce=new _E(At),xe=new US(R,Vt,b,Xe,ue,S,h),Qe=new yE(R,ue,Dt),k=new LE(B,vt,Dt,Xe),nt=new NS(B,At,vt),Je=new jS(B,At,vt),vt.programs=me.programs,R.capabilities=Dt,R.extensions=At,R.properties=Ke,R.renderLists=Ye,R.shadowMap=Qe,R.state=Xe,R.info=vt}De();const ve=new bE(R,B);this.xr=ve,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const w=At.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=At.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return z},this.setPixelRatio=function(w){w!==void 0&&(z=w,this.setSize(oe,ce,!1))},this.getSize=function(w){return w.set(oe,ce)},this.setSize=function(w,W,ee=!0){if(ve.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}oe=w,ce=W,t.width=Math.floor(w*z),t.height=Math.floor(W*z),ee===!0&&(t.style.width=w+"px",t.style.height=W+"px"),this.setViewport(0,0,w,W)},this.getDrawingBufferSize=function(w){return w.set(oe*z,ce*z).floor()},this.setDrawingBufferSize=function(w,W,ee){oe=w,ce=W,z=ee,t.width=Math.floor(w*ee),t.height=Math.floor(W*ee),this.setViewport(0,0,w,W)},this.getCurrentViewport=function(w){return w.copy(H)},this.getViewport=function(w){return w.copy(U)},this.setViewport=function(w,W,ee,K){w.isVector4?U.set(w.x,w.y,w.z,w.w):U.set(w,W,ee,K),Xe.viewport(H.copy(U).multiplyScalar(z).round())},this.getScissor=function(w){return w.copy(ne)},this.setScissor=function(w,W,ee,K){w.isVector4?ne.set(w.x,w.y,w.z,w.w):ne.set(w,W,ee,K),Xe.scissor(ae.copy(ne).multiplyScalar(z).round())},this.getScissorTest=function(){return Be},this.setScissorTest=function(w){Xe.setScissorTest(Be=w)},this.setOpaqueSort=function(w){le=w},this.setTransparentSort=function(w){re=w},this.getClearColor=function(w){return w.copy(xe.getClearColor())},this.setClearColor=function(){xe.setClearColor(...arguments)},this.getClearAlpha=function(){return xe.getClearAlpha()},this.setClearAlpha=function(){xe.setClearAlpha(...arguments)},this.clear=function(w=!0,W=!0,ee=!0){let K=0;if(w){let X=!1;if(Y!==null){const Ee=Y.texture.format;X=Ee===Zf||Ee===qf||Ee===Kf}if(X){const Ee=Y.texture.type,be=Ee===vn||Ee===Dr||Ee===Wo||Ee===Zs||Ee===Yf||Ee===Qf,Fe=xe.getClearColor(),Ne=xe.getClearAlpha(),it=Fe.r,tt=Fe.g,ke=Fe.b;be?(M[0]=it,M[1]=tt,M[2]=ke,M[3]=Ne,B.clearBufferuiv(B.COLOR,0,M)):(T[0]=it,T[1]=tt,T[2]=ke,T[3]=Ne,B.clearBufferiv(B.COLOR,0,T))}else K|=B.COLOR_BUFFER_BIT}W&&(K|=B.DEPTH_BUFFER_BIT),ee&&(K|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),B.clear(K)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",Ie,!1),t.removeEventListener("webglcontextrestored",ye,!1),t.removeEventListener("webglcontextcreationerror",he,!1),xe.dispose(),Ye.dispose(),Ce.dispose(),Ke.dispose(),Vt.dispose(),b.dispose(),ue.dispose(),rt.dispose(),k.dispose(),me.dispose(),ve.dispose(),ve.removeEventListener("sessionstart",os),ve.removeEventListener("sessionend",$i),Di.stop()};function Ie(w){w.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),j=!0}function ye(){console.log("THREE.WebGLRenderer: Context Restored."),j=!1;const w=vt.autoReset,W=Qe.enabled,ee=Qe.autoUpdate,K=Qe.needsUpdate,X=Qe.type;De(),vt.autoReset=w,Qe.enabled=W,Qe.autoUpdate=ee,Qe.needsUpdate=K,Qe.type=X}function he(w){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function He(w){const W=w.target;W.removeEventListener("dispose",He),at(W)}function at(w){Pt(w),Ke.remove(w)}function Pt(w){const W=Ke.get(w).programs;W!==void 0&&(W.forEach(function(ee){me.releaseProgram(ee)}),w.isShaderMaterial&&me.releaseShaderCache(w))}this.renderBufferDirect=function(w,W,ee,K,X,Ee){W===null&&(W=bt);const be=X.isMesh&&X.matrixWorld.determinant()<0,Fe=ta(w,W,ee,K,X);Xe.setMaterial(K,be);let Ne=ee.index,it=1;if(K.wireframe===!0){if(Ne=Z.getWireframeAttribute(ee),Ne===void 0)return;it=2}const tt=ee.drawRange,ke=ee.attributes.position;let pt=tt.start*it,ct=(tt.start+tt.count)*it;Ee!==null&&(pt=Math.max(pt,Ee.start*it),ct=Math.min(ct,(Ee.start+Ee.count)*it)),Ne!==null?(pt=Math.max(pt,0),ct=Math.min(ct,Ne.count)):ke!=null&&(pt=Math.max(pt,0),ct=Math.min(ct,ke.count));const Ft=ct-pt;if(Ft<0||Ft===1/0)return;rt.setup(X,K,Fe,ee,Ne);let Ht,St=nt;if(Ne!==null&&(Ht=E.get(Ne),St=Je,St.setIndex(Ht)),X.isMesh)K.wireframe===!0?(Xe.setLineWidth(K.wireframeLinewidth*gt()),St.setMode(B.LINES)):St.setMode(B.TRIANGLES);else if(X.isLine){let Ze=K.linewidth;Ze===void 0&&(Ze=1),Xe.setLineWidth(Ze*gt()),X.isLineSegments?St.setMode(B.LINES):X.isLineLoop?St.setMode(B.LINE_LOOP):St.setMode(B.LINE_STRIP)}else X.isPoints?St.setMode(B.POINTS):X.isSprite&&St.setMode(B.TRIANGLES);if(X.isBatchedMesh)if(X._multiDrawInstances!==null)js("THREE.WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),St.renderMultiDrawInstances(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount,X._multiDrawInstances);else if(At.get("WEBGL_multi_draw"))St.renderMultiDraw(X._multiDrawStarts,X._multiDrawCounts,X._multiDrawCount);else{const Ze=X._multiDrawStarts,Yt=X._multiDrawCounts,xt=X._multiDrawCount,_n=Ne?E.get(Ne).bytesPerElement:1,tr=Ke.get(K).currentProgram.getUniforms();for(let Pn=0;Pn<xt;Pn++)tr.setValue(B,"_gl_DrawID",Pn),St.render(Ze[Pn]/_n,Yt[Pn])}else if(X.isInstancedMesh)St.renderInstances(pt,Ft,X.count);else if(ee.isInstancedBufferGeometry){const Ze=ee._maxInstanceCount!==void 0?ee._maxInstanceCount:1/0,Yt=Math.min(ee.instanceCount,Ze);St.renderInstances(pt,Ft,Yt)}else St.render(pt,Ft)};function yt(w,W,ee){w.transparent===!0&&w.side===Zn&&w.forceSinglePass===!1?(w.side=hn,w.needsUpdate=!0,as(w,W,ee),w.side=qi,w.needsUpdate=!0,as(w,W,ee),w.side=Zn):as(w,W,ee)}this.compile=function(w,W,ee=null){ee===null&&(ee=w),x=Ce.get(ee),x.init(W),I.push(x),ee.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),w!==ee&&w.traverseVisible(function(X){X.isLight&&X.layers.test(W.layers)&&(x.pushLight(X),X.castShadow&&x.pushShadow(X))}),x.setupLights();const K=new Set;return w.traverse(function(X){if(!(X.isMesh||X.isPoints||X.isLine||X.isSprite))return;const Ee=X.material;if(Ee)if(Array.isArray(Ee))for(let be=0;be<Ee.length;be++){const Fe=Ee[be];yt(Fe,ee,X),K.add(Fe)}else yt(Ee,ee,X),K.add(Ee)}),x=I.pop(),K},this.compileAsync=function(w,W,ee=null){const K=this.compile(w,W,ee);return new Promise(X=>{function Ee(){if(K.forEach(function(be){Ke.get(be).currentProgram.isReady()&&K.delete(be)}),K.size===0){X(w);return}setTimeout(Ee,10)}At.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Bn=null;function bn(w){Bn&&Bn(w)}function os(){Di.stop()}function $i(){Di.start()}const Di=new dg;Di.setAnimationLoop(bn),typeof self<"u"&&Di.setContext(self),this.setAnimationLoop=function(w){Bn=w,ve.setAnimationLoop(w),w===null?Di.stop():Di.start()},ve.addEventListener("sessionstart",os),ve.addEventListener("sessionend",$i),this.render=function(w,W){if(W!==void 0&&W.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(j===!0)return;if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),ve.enabled===!0&&ve.isPresenting===!0&&(ve.cameraAutoUpdate===!0&&ve.updateCamera(W),W=ve.getCamera()),w.isScene===!0&&w.onBeforeRender(R,w,W,Y),x=Ce.get(w,I.length),x.init(W),I.push(x),Te.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),J.setFromProjectionMatrix(Te),we=this.localClippingEnabled,de=ze.init(this.clippingPlanes,we),A=Ye.get(w,L.length),A.init(),L.push(A),ve.enabled===!0&&ve.isPresenting===!0){const Ee=R.xr.getDepthSensingMesh();Ee!==null&&bi(Ee,W,-1/0,R.sortObjects)}bi(w,W,0,R.sortObjects),A.finish(),R.sortObjects===!0&&A.sort(le,re),Bt=ve.enabled===!1||ve.isPresenting===!1||ve.hasDepthSensing()===!1,Bt&&xe.addToRenderList(A,w),this.info.render.frame++,de===!0&&ze.beginShadows();const ee=x.state.shadowsArray;Qe.render(ee,w,W),de===!0&&ze.endShadows(),this.info.autoReset===!0&&this.info.reset();const K=A.opaque,X=A.transmissive;if(x.setupLights(),W.isArrayCamera){const Ee=W.cameras;if(X.length>0)for(let be=0,Fe=Ee.length;be<Fe;be++){const Ne=Ee[be];Lr(K,X,w,Ne)}Bt&&xe.render(w);for(let be=0,Fe=Ee.length;be<Fe;be++){const Ne=Ee[be];Ir(A,w,Ne,Ne.viewport)}}else X.length>0&&Lr(K,X,w,W),Bt&&xe.render(w),Ir(A,w,W);Y!==null&&F===0&&(st.updateMultisampleRenderTarget(Y),st.updateRenderTargetMipmap(Y)),w.isScene===!0&&w.onAfterRender(R,w,W),rt.resetDefaultState(),D=-1,C=null,I.pop(),I.length>0?(x=I[I.length-1],de===!0&&ze.setGlobalState(R.clippingPlanes,x.state.camera)):x=null,L.pop(),L.length>0?A=L[L.length-1]:A=null};function bi(w,W,ee,K){if(w.visible===!1)return;if(w.layers.test(W.layers)){if(w.isGroup)ee=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(W);else if(w.isLight)x.pushLight(w),w.castShadow&&x.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||J.intersectsSprite(w)){K&&We.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Te);const be=ue.update(w),Fe=w.material;Fe.visible&&A.push(w,be,Fe,ee,We.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||J.intersectsObject(w))){const be=ue.update(w),Fe=w.material;if(K&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),We.copy(w.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),We.copy(be.boundingSphere.center)),We.applyMatrix4(w.matrixWorld).applyMatrix4(Te)),Array.isArray(Fe)){const Ne=be.groups;for(let it=0,tt=Ne.length;it<tt;it++){const ke=Ne[it],pt=Fe[ke.materialIndex];pt&&pt.visible&&A.push(w,be,pt,ee,We.z,ke)}}else Fe.visible&&A.push(w,be,Fe,ee,We.z,null)}}const Ee=w.children;for(let be=0,Fe=Ee.length;be<Fe;be++)bi(Ee[be],W,ee,K)}function Ir(w,W,ee,K){const X=w.opaque,Ee=w.transmissive,be=w.transparent;x.setupLightsView(ee),de===!0&&ze.setGlobalState(R.clippingPlanes,ee),K&&Xe.viewport(H.copy(K)),X.length>0&&er(X,W,ee),Ee.length>0&&er(Ee,W,ee),be.length>0&&er(be,W,ee),Xe.buffers.depth.setTest(!0),Xe.buffers.depth.setMask(!0),Xe.buffers.color.setMask(!0),Xe.setPolygonOffset(!1)}function Lr(w,W,ee,K){if((ee.isScene===!0?ee.overrideMaterial:null)!==null)return;x.state.transmissionRenderTarget[K.id]===void 0&&(x.state.transmissionRenderTarget[K.id]=new Dn(1,1,{generateMipmaps:!0,type:At.has("EXT_color_buffer_half_float")||At.has("EXT_color_buffer_float")?jo:vn,minFilter:is,samples:4,stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Tt.workingColorSpace}));const Ee=x.state.transmissionRenderTarget[K.id],be=K.viewport||H;Ee.setSize(be.z*R.transmissionResolutionScale,be.w*R.transmissionResolutionScale);const Fe=R.getRenderTarget();R.setRenderTarget(Ee),R.getClearColor(fe),pe=R.getClearAlpha(),pe<1&&R.setClearColor(16777215,.5),R.clear(),Bt&&xe.render(ee);const Ne=R.toneMapping;R.toneMapping=Rr;const it=K.viewport;if(K.viewport!==void 0&&(K.viewport=void 0),x.setupLightsView(K),de===!0&&ze.setGlobalState(R.clippingPlanes,K),er(w,ee,K),st.updateMultisampleRenderTarget(Ee),st.updateRenderTargetMipmap(Ee),At.has("WEBGL_multisampled_render_to_texture")===!1){let tt=!1;for(let ke=0,pt=W.length;ke<pt;ke++){const ct=W[ke],Ft=ct.object,Ht=ct.geometry,St=ct.material,Ze=ct.group;if(St.side===Zn&&Ft.layers.test(K.layers)){const Yt=St.side;St.side=hn,St.needsUpdate=!0,$o(Ft,ee,K,Ht,St,Ze),St.side=Yt,St.needsUpdate=!0,tt=!0}}tt===!0&&(st.updateMultisampleRenderTarget(Ee),st.updateRenderTargetMipmap(Ee))}R.setRenderTarget(Fe),R.setClearColor(fe,pe),it!==void 0&&(K.viewport=it),R.toneMapping=Ne}function er(w,W,ee){const K=W.isScene===!0?W.overrideMaterial:null;for(let X=0,Ee=w.length;X<Ee;X++){const be=w[X],Fe=be.object,Ne=be.geometry,it=be.group;let tt=be.material;tt.allowOverride===!0&&K!==null&&(tt=K),Fe.layers.test(ee.layers)&&$o(Fe,W,ee,Ne,tt,it)}}function $o(w,W,ee,K,X,Ee){w.onBeforeRender(R,W,ee,K,X,Ee),w.modelViewMatrix.multiplyMatrices(ee.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),X.onBeforeRender(R,W,ee,K,w,Ee),X.transparent===!0&&X.side===Zn&&X.forceSinglePass===!1?(X.side=hn,X.needsUpdate=!0,R.renderBufferDirect(ee,W,K,X,w,Ee),X.side=qi,X.needsUpdate=!0,R.renderBufferDirect(ee,W,K,X,w,Ee),X.side=Zn):R.renderBufferDirect(ee,W,K,X,w,Ee),w.onAfterRender(R,W,ee,K,X,Ee)}function as(w,W,ee){W.isScene!==!0&&(W=bt);const K=Ke.get(w),X=x.state.lights,Ee=x.state.shadowsArray,be=X.state.version,Fe=me.getParameters(w,X.state,Ee,W,ee),Ne=me.getProgramCacheKey(Fe);let it=K.programs;K.environment=w.isMeshStandardMaterial?W.environment:null,K.fog=W.fog,K.envMap=(w.isMeshStandardMaterial?b:Vt).get(w.envMap||K.environment),K.envMapRotation=K.environment!==null&&w.envMap===null?W.environmentRotation:w.envMapRotation,it===void 0&&(w.addEventListener("dispose",He),it=new Map,K.programs=it);let tt=it.get(Ne);if(tt!==void 0){if(K.currentProgram===tt&&K.lightsStateVersion===be)return Ai(w,Fe),tt}else Fe.uniforms=me.getUniforms(w),w.onBeforeCompile(Fe,R),tt=me.acquireProgram(Fe,Ne),it.set(Ne,tt),K.uniforms=Fe.uniforms;const ke=K.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(ke.clippingPlanes=ze.uniform),Ai(w,Fe),K.needsLights=zl(w),K.lightsStateVersion=be,K.needsLights&&(ke.ambientLightColor.value=X.state.ambient,ke.lightProbe.value=X.state.probe,ke.directionalLights.value=X.state.directional,ke.directionalLightShadows.value=X.state.directionalShadow,ke.spotLights.value=X.state.spot,ke.spotLightShadows.value=X.state.spotShadow,ke.rectAreaLights.value=X.state.rectArea,ke.ltc_1.value=X.state.rectAreaLTC1,ke.ltc_2.value=X.state.rectAreaLTC2,ke.pointLights.value=X.state.point,ke.pointLightShadows.value=X.state.pointShadow,ke.hemisphereLights.value=X.state.hemi,ke.directionalShadowMap.value=X.state.directionalShadowMap,ke.directionalShadowMatrix.value=X.state.directionalShadowMatrix,ke.spotShadowMap.value=X.state.spotShadowMap,ke.spotLightMatrix.value=X.state.spotLightMatrix,ke.spotLightMap.value=X.state.spotLightMap,ke.pointShadowMap.value=X.state.pointShadowMap,ke.pointShadowMatrix.value=X.state.pointShadowMatrix),K.currentProgram=tt,K.uniformsList=null,tt}function ea(w){if(w.uniformsList===null){const W=w.currentProgram.getUniforms();w.uniformsList=Ll.seqWithValue(W.seq,w.uniforms)}return w.uniformsList}function Ai(w,W){const ee=Ke.get(w);ee.outputColorSpace=W.outputColorSpace,ee.batching=W.batching,ee.batchingColor=W.batchingColor,ee.instancing=W.instancing,ee.instancingColor=W.instancingColor,ee.instancingMorph=W.instancingMorph,ee.skinning=W.skinning,ee.morphTargets=W.morphTargets,ee.morphNormals=W.morphNormals,ee.morphColors=W.morphColors,ee.morphTargetsCount=W.morphTargetsCount,ee.numClippingPlanes=W.numClippingPlanes,ee.numIntersection=W.numClipIntersection,ee.vertexAlphas=W.vertexAlphas,ee.vertexTangents=W.vertexTangents,ee.toneMapping=W.toneMapping}function ta(w,W,ee,K,X){W.isScene!==!0&&(W=bt),st.resetTextureUnits();const Ee=W.fog,be=K.isMeshStandardMaterial?W.environment:null,Fe=Y===null?R.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:br,Ne=(K.isMeshStandardMaterial?b:Vt).get(K.envMap||be),it=K.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,tt=!!ee.attributes.tangent&&(!!K.normalMap||K.anisotropy>0),ke=!!ee.morphAttributes.position,pt=!!ee.morphAttributes.normal,ct=!!ee.morphAttributes.color;let Ft=Rr;K.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Ft=R.toneMapping);const Ht=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,St=Ht!==void 0?Ht.length:0,Ze=Ke.get(K),Yt=x.state.lights;if(de===!0&&(we===!0||w!==C)){const pn=w===C&&K.id===D;ze.setState(K,w,pn)}let xt=!1;K.version===Ze.__version?(Ze.needsLights&&Ze.lightsStateVersion!==Yt.state.version||Ze.outputColorSpace!==Fe||X.isBatchedMesh&&Ze.batching===!1||!X.isBatchedMesh&&Ze.batching===!0||X.isBatchedMesh&&Ze.batchingColor===!0&&X.colorTexture===null||X.isBatchedMesh&&Ze.batchingColor===!1&&X.colorTexture!==null||X.isInstancedMesh&&Ze.instancing===!1||!X.isInstancedMesh&&Ze.instancing===!0||X.isSkinnedMesh&&Ze.skinning===!1||!X.isSkinnedMesh&&Ze.skinning===!0||X.isInstancedMesh&&Ze.instancingColor===!0&&X.instanceColor===null||X.isInstancedMesh&&Ze.instancingColor===!1&&X.instanceColor!==null||X.isInstancedMesh&&Ze.instancingMorph===!0&&X.morphTexture===null||X.isInstancedMesh&&Ze.instancingMorph===!1&&X.morphTexture!==null||Ze.envMap!==Ne||K.fog===!0&&Ze.fog!==Ee||Ze.numClippingPlanes!==void 0&&(Ze.numClippingPlanes!==ze.numPlanes||Ze.numIntersection!==ze.numIntersection)||Ze.vertexAlphas!==it||Ze.vertexTangents!==tt||Ze.morphTargets!==ke||Ze.morphNormals!==pt||Ze.morphColors!==ct||Ze.toneMapping!==Ft||Ze.morphTargetsCount!==St)&&(xt=!0):(xt=!0,Ze.__version=K.version);let _n=Ze.currentProgram;xt===!0&&(_n=as(K,W,X));let tr=!1,Pn=!1,Pi=!1;const Ut=_n.getUniforms(),An=Ze.uniforms;if(Xe.useProgram(_n.program)&&(tr=!0,Pn=!0,Pi=!0),K.id!==D&&(D=K.id,Pn=!0),tr||C!==w){Xe.buffers.depth.getReversed()?(Ae.copy(w.projectionMatrix),mx(Ae),gx(Ae),Ut.setValue(B,"projectionMatrix",Ae)):Ut.setValue(B,"projectionMatrix",w.projectionMatrix),Ut.setValue(B,"viewMatrix",w.matrixWorldInverse);const ln=Ut.map.cameraPosition;ln!==void 0&&ln.setValue(B,qe.setFromMatrixPosition(w.matrixWorld)),Dt.logarithmicDepthBuffer&&Ut.setValue(B,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(K.isMeshPhongMaterial||K.isMeshToonMaterial||K.isMeshLambertMaterial||K.isMeshBasicMaterial||K.isMeshStandardMaterial||K.isShaderMaterial)&&Ut.setValue(B,"isOrthographic",w.isOrthographicCamera===!0),C!==w&&(C=w,Pn=!0,Pi=!0)}if(X.isSkinnedMesh){Ut.setOptional(B,X,"bindMatrix"),Ut.setOptional(B,X,"bindMatrixInverse");const pn=X.skeleton;pn&&(pn.boneTexture===null&&pn.computeBoneTexture(),Ut.setValue(B,"boneTexture",pn.boneTexture,st))}X.isBatchedMesh&&(Ut.setOptional(B,X,"batchingTexture"),Ut.setValue(B,"batchingTexture",X._matricesTexture,st),Ut.setOptional(B,X,"batchingIdTexture"),Ut.setValue(B,"batchingIdTexture",X._indirectTexture,st),Ut.setOptional(B,X,"batchingColorTexture"),X._colorsTexture!==null&&Ut.setValue(B,"batchingColorTexture",X._colorsTexture,st));const an=ee.morphAttributes;if((an.position!==void 0||an.normal!==void 0||an.color!==void 0)&&Ue.update(X,ee,_n),(Pn||Ze.receiveShadow!==X.receiveShadow)&&(Ze.receiveShadow=X.receiveShadow,Ut.setValue(B,"receiveShadow",X.receiveShadow)),K.isMeshGouraudMaterial&&K.envMap!==null&&(An.envMap.value=Ne,An.flipEnvMap.value=Ne.isCubeTexture&&Ne.isRenderTargetTexture===!1?-1:1),K.isMeshStandardMaterial&&K.envMap===null&&W.environment!==null&&(An.envMapIntensity.value=W.environmentIntensity),Pn&&(Ut.setValue(B,"toneMappingExposure",R.toneMappingExposure),Ze.needsLights&&na(An,Pi),Ee&&K.fog===!0&&se.refreshFogUniforms(An,Ee),se.refreshMaterialUniforms(An,K,z,ce,x.state.transmissionRenderTarget[w.id]),Ll.upload(B,ea(Ze),An,st)),K.isShaderMaterial&&K.uniformsNeedUpdate===!0&&(Ll.upload(B,ea(Ze),An,st),K.uniformsNeedUpdate=!1),K.isSpriteMaterial&&Ut.setValue(B,"center",X.center),Ut.setValue(B,"modelViewMatrix",X.modelViewMatrix),Ut.setValue(B,"normalMatrix",X.normalMatrix),Ut.setValue(B,"modelMatrix",X.matrixWorld),K.isShaderMaterial||K.isRawShaderMaterial){const pn=K.uniformsGroups;for(let ln=0,Et=pn.length;ln<Et;ln++){const Si=pn[ln];k.update(Si,_n),k.bind(Si,_n)}}return _n}function na(w,W){w.ambientLightColor.needsUpdate=W,w.lightProbe.needsUpdate=W,w.directionalLights.needsUpdate=W,w.directionalLightShadows.needsUpdate=W,w.pointLights.needsUpdate=W,w.pointLightShadows.needsUpdate=W,w.spotLights.needsUpdate=W,w.spotLightShadows.needsUpdate=W,w.rectAreaLights.needsUpdate=W,w.hemisphereLights.needsUpdate=W}function zl(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return V},this.getActiveMipmapLevel=function(){return F},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(w,W,ee){const K=Ke.get(w);K.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,K.__autoAllocateDepthBuffer===!1&&(K.__useRenderToTexture=!1),Ke.get(w.texture).__webglTexture=W,Ke.get(w.depthTexture).__webglTexture=K.__autoAllocateDepthBuffer?void 0:ee,K.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,W){const ee=Ke.get(w);ee.__webglFramebuffer=W,ee.__useDefaultFramebuffer=W===void 0};const ia=B.createFramebuffer();this.setRenderTarget=function(w,W=0,ee=0){Y=w,V=W,F=ee;let K=!0,X=null,Ee=!1,be=!1;if(w){const Ne=Ke.get(w);if(Ne.__useDefaultFramebuffer!==void 0)Xe.bindFramebuffer(B.FRAMEBUFFER,null),K=!1;else if(Ne.__webglFramebuffer===void 0)st.setupRenderTarget(w);else if(Ne.__hasExternalTextures)st.rebindTextures(w,Ke.get(w.texture).__webglTexture,Ke.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ke=w.depthTexture;if(Ne.__boundDepthTexture!==ke){if(ke!==null&&Ke.has(ke)&&(w.width!==ke.image.width||w.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");st.setupDepthRenderbuffer(w)}}const it=w.texture;(it.isData3DTexture||it.isDataArrayTexture||it.isCompressedArrayTexture)&&(be=!0);const tt=Ke.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(tt[W])?X=tt[W][ee]:X=tt[W],Ee=!0):w.samples>0&&st.useMultisampledRTT(w)===!1?X=Ke.get(w).__webglMultisampledFramebuffer:Array.isArray(tt)?X=tt[ee]:X=tt,H.copy(w.viewport),ae.copy(w.scissor),te=w.scissorTest}else H.copy(U).multiplyScalar(z).floor(),ae.copy(ne).multiplyScalar(z).floor(),te=Be;if(ee!==0&&(X=ia),Xe.bindFramebuffer(B.FRAMEBUFFER,X)&&K&&Xe.drawBuffers(w,X),Xe.viewport(H),Xe.scissor(ae),Xe.setScissorTest(te),Ee){const Ne=Ke.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+W,Ne.__webglTexture,ee)}else if(be){const Ne=Ke.get(w.texture),it=W;B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ne.__webglTexture,ee,it)}else if(w!==null&&ee!==0){const Ne=Ke.get(w.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Ne.__webglTexture,ee)}D=-1},this.readRenderTargetPixels=function(w,W,ee,K,X,Ee,be,Fe=0){if(!(w&&w.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ne=Ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Ne=Ne[be]),Ne){Xe.bindFramebuffer(B.FRAMEBUFFER,Ne);try{const it=w.textures[Fe],tt=it.format,ke=it.type;if(!Dt.textureFormatReadable(tt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!Dt.textureTypeReadable(ke)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=w.width-K&&ee>=0&&ee<=w.height-X&&(w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Fe),B.readPixels(W,ee,K,X,Re.convert(tt),Re.convert(ke),Ee))}finally{const it=Y!==null?Ke.get(Y).__webglFramebuffer:null;Xe.bindFramebuffer(B.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(w,W,ee,K,X,Ee,be,Fe=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ne=Ke.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&be!==void 0&&(Ne=Ne[be]),Ne)if(W>=0&&W<=w.width-K&&ee>=0&&ee<=w.height-X){Xe.bindFramebuffer(B.FRAMEBUFFER,Ne);const it=w.textures[Fe],tt=it.format,ke=it.type;if(!Dt.textureFormatReadable(tt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!Dt.textureTypeReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const pt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,pt),B.bufferData(B.PIXEL_PACK_BUFFER,Ee.byteLength,B.STREAM_READ),w.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Fe),B.readPixels(W,ee,K,X,Re.convert(tt),Re.convert(ke),0);const ct=Y!==null?Ke.get(Y).__webglFramebuffer:null;Xe.bindFramebuffer(B.FRAMEBUFFER,ct);const Ft=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await px(B,Ft,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,pt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ee),B.deleteBuffer(pt),B.deleteSync(Ft),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,W=null,ee=0){const K=Math.pow(2,-ee),X=Math.floor(w.image.width*K),Ee=Math.floor(w.image.height*K),be=W!==null?W.x:0,Fe=W!==null?W.y:0;st.setTexture2D(w,0),B.copyTexSubImage2D(B.TEXTURE_2D,ee,0,0,be,Fe,X,Ee),Xe.unbindTexture()};const ra=B.createFramebuffer(),sa=B.createFramebuffer();this.copyTextureToTexture=function(w,W,ee=null,K=null,X=0,Ee=null){Ee===null&&(X!==0?(js("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),Ee=X,X=0):Ee=0);let be,Fe,Ne,it,tt,ke,pt,ct,Ft;const Ht=w.isCompressedTexture?w.mipmaps[Ee]:w.image;if(ee!==null)be=ee.max.x-ee.min.x,Fe=ee.max.y-ee.min.y,Ne=ee.isBox3?ee.max.z-ee.min.z:1,it=ee.min.x,tt=ee.min.y,ke=ee.isBox3?ee.min.z:0;else{const an=Math.pow(2,-X);be=Math.floor(Ht.width*an),Fe=Math.floor(Ht.height*an),w.isDataArrayTexture?Ne=Ht.depth:w.isData3DTexture?Ne=Math.floor(Ht.depth*an):Ne=1,it=0,tt=0,ke=0}K!==null?(pt=K.x,ct=K.y,Ft=K.z):(pt=0,ct=0,Ft=0);const St=Re.convert(W.format),Ze=Re.convert(W.type);let Yt;W.isData3DTexture?(st.setTexture3D(W,0),Yt=B.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(st.setTexture2DArray(W,0),Yt=B.TEXTURE_2D_ARRAY):(st.setTexture2D(W,0),Yt=B.TEXTURE_2D),B.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,W.flipY),B.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),B.pixelStorei(B.UNPACK_ALIGNMENT,W.unpackAlignment);const xt=B.getParameter(B.UNPACK_ROW_LENGTH),_n=B.getParameter(B.UNPACK_IMAGE_HEIGHT),tr=B.getParameter(B.UNPACK_SKIP_PIXELS),Pn=B.getParameter(B.UNPACK_SKIP_ROWS),Pi=B.getParameter(B.UNPACK_SKIP_IMAGES);B.pixelStorei(B.UNPACK_ROW_LENGTH,Ht.width),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Ht.height),B.pixelStorei(B.UNPACK_SKIP_PIXELS,it),B.pixelStorei(B.UNPACK_SKIP_ROWS,tt),B.pixelStorei(B.UNPACK_SKIP_IMAGES,ke);const Ut=w.isDataArrayTexture||w.isData3DTexture,An=W.isDataArrayTexture||W.isData3DTexture;if(w.isDepthTexture){const an=Ke.get(w),pn=Ke.get(W),ln=Ke.get(an.__renderTarget),Et=Ke.get(pn.__renderTarget);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,ln.__webglFramebuffer),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,Et.__webglFramebuffer);for(let Si=0;Si<Ne;Si++)Ut&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ke.get(w).__webglTexture,X,ke+Si),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Ke.get(W).__webglTexture,Ee,Ft+Si)),B.blitFramebuffer(it,tt,be,Fe,pt,ct,be,Fe,B.DEPTH_BUFFER_BIT,B.NEAREST);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(X!==0||w.isRenderTargetTexture||Ke.has(w)){const an=Ke.get(w),pn=Ke.get(W);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,ra),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,sa);for(let ln=0;ln<Ne;ln++)Ut?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,an.__webglTexture,X,ke+ln):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,an.__webglTexture,X),An?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,pn.__webglTexture,Ee,Ft+ln):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,pn.__webglTexture,Ee),X!==0?B.blitFramebuffer(it,tt,be,Fe,pt,ct,be,Fe,B.COLOR_BUFFER_BIT,B.NEAREST):An?B.copyTexSubImage3D(Yt,Ee,pt,ct,Ft+ln,it,tt,be,Fe):B.copyTexSubImage2D(Yt,Ee,pt,ct,it,tt,be,Fe);Xe.bindFramebuffer(B.READ_FRAMEBUFFER,null),Xe.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else An?w.isDataTexture||w.isData3DTexture?B.texSubImage3D(Yt,Ee,pt,ct,Ft,be,Fe,Ne,St,Ze,Ht.data):W.isCompressedArrayTexture?B.compressedTexSubImage3D(Yt,Ee,pt,ct,Ft,be,Fe,Ne,St,Ht.data):B.texSubImage3D(Yt,Ee,pt,ct,Ft,be,Fe,Ne,St,Ze,Ht):w.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ee,pt,ct,be,Fe,St,Ze,Ht.data):w.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ee,pt,ct,Ht.width,Ht.height,St,Ht.data):B.texSubImage2D(B.TEXTURE_2D,Ee,pt,ct,be,Fe,St,Ze,Ht);B.pixelStorei(B.UNPACK_ROW_LENGTH,xt),B.pixelStorei(B.UNPACK_IMAGE_HEIGHT,_n),B.pixelStorei(B.UNPACK_SKIP_PIXELS,tr),B.pixelStorei(B.UNPACK_SKIP_ROWS,Pn),B.pixelStorei(B.UNPACK_SKIP_IMAGES,Pi),Ee===0&&W.generateMipmaps&&B.generateMipmap(Yt),Xe.unbindTexture()},this.copyTextureToTexture3D=function(w,W,ee=null,K=null,X=0){return js('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(w,W,ee,K,X)},this.initRenderTarget=function(w){Ke.get(w).__webglFramebuffer===void 0&&st.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?st.setTextureCube(w,0):w.isData3DTexture?st.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?st.setTexture2DArray(w,0):st.setTexture2D(w,0),Xe.unbindTexture()},this.resetState=function(){V=0,F=0,Y=null,Xe.reset(),rt.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Yi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}/**
 * postprocessing v6.37.4 build Sat Jun 07 2025
 * https://github.com/pmndrs/postprocessing
 * Copyright 2015-2025 Raoul van Rüschen
 * @license Zlib
 */var Ju=1/1e3,BE=1e3,NE=class{constructor(){this.startTime=performance.now(),this.previousTime=0,this.currentTime=0,this._delta=0,this._elapsed=0,this._fixedDelta=1e3/60,this.timescale=1,this.useFixedDelta=!1,this._autoReset=!1}get autoReset(){return this._autoReset}set autoReset(r){typeof document<"u"&&document.hidden!==void 0&&(r?document.addEventListener("visibilitychange",this):document.removeEventListener("visibilitychange",this),this._autoReset=r)}get delta(){return this._delta*Ju}get fixedDelta(){return this._fixedDelta*Ju}set fixedDelta(r){this._fixedDelta=r*BE}get elapsed(){return this._elapsed*Ju}update(r){this.useFixedDelta?this._delta=this.fixedDelta:(this.previousTime=this.currentTime,this.currentTime=(r!==void 0?r:performance.now())-this.startTime,this._delta=this.currentTime-this.previousTime),this._delta*=this.timescale,this._elapsed+=this._delta}reset(){this._delta=0,this._elapsed=0,this.currentTime=performance.now()-this.startTime}getDelta(){return this.delta}getElapsed(){return this.elapsed}handleEvent(r){document.hidden||(this.currentTime=performance.now()-this.startTime)}dispose(){this.autoReset=!1}},FE=(()=>{const r=new Float32Array([-1,-1,0,3,-1,0,-1,3,0]),e=new Float32Array([0,0,2,0,0,2]),t=new Pr;return t.setAttribute("position",new oi(r,3)),t.setAttribute("uv",new oi(e,2)),t})(),ai=class Vf{static get fullscreenGeometry(){return FE}constructor(e="Pass",t=new Hf,s=new td){this.name=e,this.renderer=null,this.scene=t,this.camera=s,this.screen=null,this.rtt=!0,this.needsSwap=!0,this.needsDepthTexture=!1,this.enabled=!0}get renderToScreen(){return!this.rtt}set renderToScreen(e){if(this.rtt===e){const t=this.fullscreenMaterial;t!==null&&(t.needsUpdate=!0),this.rtt=!e}}set mainScene(e){}set mainCamera(e){}setRenderer(e){this.renderer=e}isEnabled(){return this.enabled}setEnabled(e){this.enabled=e}get fullscreenMaterial(){return this.screen!==null?this.screen.material:null}set fullscreenMaterial(e){let t=this.screen;t!==null?t.material=e:(t=new _i(Vf.fullscreenGeometry,e),t.frustumCulled=!1,this.scene===null&&(this.scene=new Hf),this.scene.add(t),this.screen=t)}getFullscreenMaterial(){return this.fullscreenMaterial}setFullscreenMaterial(e){this.fullscreenMaterial=e}getDepthTexture(){return null}setDepthTexture(e,t=ss){}render(e,t,s,a,l){throw new Error("Render method not implemented!")}setSize(e,t){}initialize(e,t,s){}dispose(){for(const e of Object.keys(this)){const t=this[e];(t instanceof Dn||t instanceof to||t instanceof nn||t instanceof Vf)&&this[e].dispose()}this.fullscreenMaterial!==null&&this.fullscreenMaterial.dispose()}},OE=class extends ai{constructor(){super("ClearMaskPass",null,null),this.needsSwap=!1}render(r,e,t,s,a){const l=r.state.buffers.stencil;l.setLocked(!1),l.setTest(!1)}},zE=`#include <common>
#include <dithering_pars_fragment>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform float opacity;varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);gl_FragColor=opacity*texel;
#include <colorspace_fragment>
#include <dithering_fragment>
}`,vg="varying vec2 vUv;void main(){vUv=position.xy*0.5+0.5;gl_Position=vec4(position.xy,1.0,1.0);}",xg=class extends xn{constructor(){super({name:"CopyMaterial",uniforms:{inputBuffer:new dt(null),opacity:new dt(1)},blending:Rn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:zE,vertexShader:vg})}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}getOpacity(r){return this.uniforms.opacity.value}setOpacity(r){this.uniforms.opacity.value=r}},kE=class extends ai{constructor(r,e=!0){super("CopyPass"),this.fullscreenMaterial=new xg,this.needsSwap=!1,this.renderTarget=r,r===void 0&&(this.renderTarget=new Dn(1,1,{minFilter:Cn,magFilter:Cn,stencilBuffer:!1,depthBuffer:!1}),this.renderTarget.texture.name="CopyPass.Target"),this.autoResize=e}get resize(){return this.autoResize}set resize(r){this.autoResize=r}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}setAutoResizeEnabled(r){this.autoResize=r}render(r,e,t,s,a){this.fullscreenMaterial.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){this.autoResize&&this.renderTarget.setSize(r,e)}initialize(r,e,t){t!==void 0&&(this.renderTarget.texture.type=t,t!==vn?this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1":r!==null&&r.outputColorSpace===Lt&&(this.renderTarget.texture.colorSpace=Lt))}},Lm=new Rt,rd=class extends ai{constructor(r=!0,e=!0,t=!1){super("ClearPass",null,null),this.needsSwap=!1,this.color=r,this.depth=e,this.stencil=t,this.overrideClearColor=null,this.overrideClearAlpha=-1}setClearFlags(r,e,t){this.color=r,this.depth=e,this.stencil=t}getOverrideClearColor(){return this.overrideClearColor}setOverrideClearColor(r){this.overrideClearColor=r}getOverrideClearAlpha(){return this.overrideClearAlpha}setOverrideClearAlpha(r){this.overrideClearAlpha=r}render(r,e,t,s,a){const l=this.overrideClearColor,u=this.overrideClearAlpha,f=r.getClearAlpha(),h=l!==null,m=u>=0;h?(r.getClearColor(Lm),r.setClearColor(l,m?u:f)):m&&r.setClearAlpha(u),r.setRenderTarget(this.renderToScreen?null:e),r.clear(this.color,this.depth,this.stencil),h?r.setClearColor(Lm,f):m&&r.setClearAlpha(f)}},HE=class extends ai{constructor(r,e){super("MaskPass",r,e),this.needsSwap=!1,this.clearPass=new rd(!1,!1,!0),this.inverse=!1}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get inverted(){return this.inverse}set inverted(r){this.inverse=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getClearPass(){return this.clearPass}isInverted(){return this.inverted}setInverted(r){this.inverted=r}render(r,e,t,s,a){const l=r.getContext(),u=r.state.buffers,f=this.scene,h=this.camera,m=this.clearPass,g=this.inverted?0:1,v=1-g;u.color.setMask(!1),u.depth.setMask(!1),u.color.setLocked(!0),u.depth.setLocked(!0),u.stencil.setTest(!0),u.stencil.setOp(l.REPLACE,l.REPLACE,l.REPLACE),u.stencil.setFunc(l.ALWAYS,g,4294967295),u.stencil.setClear(v),u.stencil.setLocked(!0),this.clearPass.enabled&&(this.renderToScreen?m.render(r,null):(m.render(r,e),m.render(r,t))),this.renderToScreen?(r.setRenderTarget(null),r.render(f,h)):(r.setRenderTarget(e),r.render(f,h),r.setRenderTarget(t),r.render(f,h)),u.color.setLocked(!1),u.depth.setLocked(!1),u.stencil.setLocked(!1),u.stencil.setFunc(l.EQUAL,1,4294967295),u.stencil.setOp(l.KEEP,l.KEEP,l.KEEP),u.stencil.setLocked(!0)}},GE=class{constructor(r=null,{depthBuffer:e=!0,stencilBuffer:t=!1,multisampling:s=0,frameBufferType:a}={}){this.renderer=null,this.inputBuffer=this.createBuffer(e,t,a,s),this.outputBuffer=this.inputBuffer.clone(),this.copyPass=new kE,this.depthTexture=null,this.passes=[],this.timer=new NE,this.autoRenderToScreen=!0,this.setRenderer(r)}get multisampling(){return this.inputBuffer.samples||0}set multisampling(r){const e=this.inputBuffer,t=this.multisampling;t>0&&r>0?(this.inputBuffer.samples=r,this.outputBuffer.samples=r,this.inputBuffer.dispose(),this.outputBuffer.dispose()):t!==r&&(this.inputBuffer.dispose(),this.outputBuffer.dispose(),this.inputBuffer=this.createBuffer(e.depthBuffer,e.stencilBuffer,e.texture.type,r),this.inputBuffer.depthTexture=this.depthTexture,this.outputBuffer=this.inputBuffer.clone())}getTimer(){return this.timer}getRenderer(){return this.renderer}setRenderer(r){if(this.renderer=r,r!==null){const e=r.getSize(new lt),t=r.getContext().getContextAttributes().alpha,s=this.inputBuffer.texture.type;s===vn&&r.outputColorSpace===Lt&&(this.inputBuffer.texture.colorSpace=Lt,this.outputBuffer.texture.colorSpace=Lt,this.inputBuffer.dispose(),this.outputBuffer.dispose()),r.autoClear=!1,this.setSize(e.width,e.height);for(const a of this.passes)a.initialize(r,t,s)}}replaceRenderer(r,e=!0){const t=this.renderer,s=t.domElement.parentNode;return this.setRenderer(r),e&&s!==null&&(s.removeChild(t.domElement),s.appendChild(r.domElement)),t}createDepthTexture(){const r=this.depthTexture=new nd;return this.inputBuffer.depthTexture=r,this.inputBuffer.dispose(),this.inputBuffer.stencilBuffer?(r.format=Js,r.type=Zs):r.type=Dr,r}deleteDepthTexture(){if(this.depthTexture!==null){this.depthTexture.dispose(),this.depthTexture=null,this.inputBuffer.depthTexture=null,this.inputBuffer.dispose();for(const r of this.passes)r.setDepthTexture(null)}}createBuffer(r,e,t,s){const a=this.renderer,l=a===null?new lt:a.getDrawingBufferSize(new lt),u={minFilter:Cn,magFilter:Cn,stencilBuffer:e,depthBuffer:r,type:t},f=new Dn(l.width,l.height,u);return s>0&&(f.ignoreDepthForMultisampleCopy=!1,f.samples=s),t===vn&&a!==null&&a.outputColorSpace===Lt&&(f.texture.colorSpace=Lt),f.texture.name="EffectComposer.Buffer",f.texture.generateMipmaps=!1,f}setMainScene(r){for(const e of this.passes)e.mainScene=r}setMainCamera(r){for(const e of this.passes)e.mainCamera=r}addPass(r,e){const t=this.passes,s=this.renderer,a=s.getDrawingBufferSize(new lt),l=s.getContext().getContextAttributes().alpha,u=this.inputBuffer.texture.type;if(r.setRenderer(s),r.setSize(a.width,a.height),r.initialize(s,l,u),this.autoRenderToScreen&&(t.length>0&&(t[t.length-1].renderToScreen=!1),r.renderToScreen&&(this.autoRenderToScreen=!1)),e!==void 0?t.splice(e,0,r):t.push(r),this.autoRenderToScreen&&(t[t.length-1].renderToScreen=!0),r.needsDepthTexture||this.depthTexture!==null)if(this.depthTexture===null){const f=this.createDepthTexture();for(r of t)r.setDepthTexture(f)}else r.setDepthTexture(this.depthTexture)}removePass(r){const e=this.passes,t=e.indexOf(r);if(t!==-1&&e.splice(t,1).length>0){if(this.depthTexture!==null){const l=(f,h)=>f||h.needsDepthTexture;e.reduce(l,!1)||(r.getDepthTexture()===this.depthTexture&&r.setDepthTexture(null),this.deleteDepthTexture())}this.autoRenderToScreen&&t===e.length&&(r.renderToScreen=!1,e.length>0&&(e[e.length-1].renderToScreen=!0))}}removeAllPasses(){const r=this.passes;this.deleteDepthTexture(),r.length>0&&(this.autoRenderToScreen&&(r[r.length-1].renderToScreen=!1),this.passes=[])}render(r){const e=this.renderer,t=this.copyPass;let s=this.inputBuffer,a=this.outputBuffer,l=!1,u,f,h;r===void 0&&(this.timer.update(),r=this.timer.getDelta());for(const m of this.passes)m.enabled&&(m.render(e,s,a,r,l),m.needsSwap&&(l&&(t.renderToScreen=m.renderToScreen,u=e.getContext(),f=e.state.buffers.stencil,f.setFunc(u.NOTEQUAL,1,4294967295),t.render(e,s,a,r,l),f.setFunc(u.EQUAL,1,4294967295)),h=s,s=a,a=h),m instanceof HE?l=!0:m instanceof OE&&(l=!1))}setSize(r,e,t){const s=this.renderer,a=s.getSize(new lt);(r===void 0||e===void 0)&&(r=a.width,e=a.height),(a.width!==r||a.height!==e)&&s.setSize(r,e,t);const l=s.getDrawingBufferSize(new lt);this.inputBuffer.setSize(l.width,l.height),this.outputBuffer.setSize(l.width,l.height);for(const u of this.passes)u.setSize(l.width,l.height)}reset(){this.dispose(),this.autoRenderToScreen=!0}dispose(){for(const r of this.passes)r.dispose();this.passes=[],this.inputBuffer!==null&&this.inputBuffer.dispose(),this.outputBuffer!==null&&this.outputBuffer.dispose(),this.deleteDepthTexture(),this.copyPass.dispose(),this.timer.dispose(),ai.fullscreenGeometry.dispose()}},Ki={NONE:0,DEPTH:1,CONVOLUTION:2},Ct={FRAGMENT_HEAD:"FRAGMENT_HEAD",FRAGMENT_MAIN_UV:"FRAGMENT_MAIN_UV",FRAGMENT_MAIN_IMAGE:"FRAGMENT_MAIN_IMAGE",VERTEX_HEAD:"VERTEX_HEAD",VERTEX_MAIN_SUPPORT:"VERTEX_MAIN_SUPPORT"},VE=class{constructor(){this.shaderParts=new Map([[Ct.FRAGMENT_HEAD,null],[Ct.FRAGMENT_MAIN_UV,null],[Ct.FRAGMENT_MAIN_IMAGE,null],[Ct.VERTEX_HEAD,null],[Ct.VERTEX_MAIN_SUPPORT,null]]),this.defines=new Map,this.uniforms=new Map,this.blendModes=new Map,this.extensions=new Set,this.attributes=Ki.NONE,this.varyings=new Set,this.uvTransformation=!1,this.readDepth=!1,this.colorSpace=br}},$u=!1,Um=class{constructor(r=null){this.originalMaterials=new Map,this.material=null,this.materials=null,this.materialsBackSide=null,this.materialsDoubleSide=null,this.materialsFlatShaded=null,this.materialsFlatShadedBackSide=null,this.materialsFlatShadedDoubleSide=null,this.setMaterial(r),this.meshCount=0,this.replaceMaterial=e=>{if(e.isMesh){let t;if(e.material.flatShading)switch(e.material.side){case Zn:t=this.materialsFlatShadedDoubleSide;break;case hn:t=this.materialsFlatShadedBackSide;break;default:t=this.materialsFlatShaded;break}else switch(e.material.side){case Zn:t=this.materialsDoubleSide;break;case hn:t=this.materialsBackSide;break;default:t=this.materials;break}this.originalMaterials.set(e,e.material),e.isSkinnedMesh?e.material=t[2]:e.isInstancedMesh?e.material=t[1]:e.material=t[0],++this.meshCount}}}cloneMaterial(r){if(!(r instanceof xn))return r.clone();const e=r.uniforms,t=new Map;for(const a in e){const l=e[a].value;l.isRenderTargetTexture&&(e[a].value=null,t.set(a,l))}const s=r.clone();for(const a of t)e[a[0]].value=a[1],s.uniforms[a[0]].value=a[1];return s}setMaterial(r){if(this.disposeMaterials(),this.material=r,r!==null){const e=this.materials=[this.cloneMaterial(r),this.cloneMaterial(r),this.cloneMaterial(r)];for(const t of e)t.uniforms=Object.assign({},r.uniforms),t.side=qi;e[2].skinning=!0,this.materialsBackSide=e.map(t=>{const s=this.cloneMaterial(t);return s.uniforms=Object.assign({},r.uniforms),s.side=hn,s}),this.materialsDoubleSide=e.map(t=>{const s=this.cloneMaterial(t);return s.uniforms=Object.assign({},r.uniforms),s.side=Zn,s}),this.materialsFlatShaded=e.map(t=>{const s=this.cloneMaterial(t);return s.uniforms=Object.assign({},r.uniforms),s.flatShading=!0,s}),this.materialsFlatShadedBackSide=e.map(t=>{const s=this.cloneMaterial(t);return s.uniforms=Object.assign({},r.uniforms),s.flatShading=!0,s.side=hn,s}),this.materialsFlatShadedDoubleSide=e.map(t=>{const s=this.cloneMaterial(t);return s.uniforms=Object.assign({},r.uniforms),s.flatShading=!0,s.side=Zn,s})}}render(r,e,t){const s=r.shadowMap.enabled;if(r.shadowMap.enabled=!1,$u){const a=this.originalMaterials;this.meshCount=0,e.traverse(this.replaceMaterial),r.render(e,t);for(const l of a)l[0].material=l[1];this.meshCount!==a.size&&a.clear()}else{const a=e.overrideMaterial;e.overrideMaterial=this.material,r.render(e,t),e.overrideMaterial=a}r.shadowMap.enabled=s}disposeMaterials(){if(this.material!==null){const r=this.materials.concat(this.materialsBackSide).concat(this.materialsDoubleSide).concat(this.materialsFlatShaded).concat(this.materialsFlatShadedBackSide).concat(this.materialsFlatShadedDoubleSide);for(const e of r)e.dispose()}}dispose(){this.originalMaterials.clear(),this.disposeMaterials()}static get workaroundEnabled(){return $u}static set workaroundEnabled(r){$u=r}},Cr=-1,Ri=class extends Ji{constructor(r,e=Cr,t=Cr,s=1){super(),this.resizable=r,this.baseSize=new lt(1,1),this.preferredSize=new lt(e,t),this.target=this.preferredSize,this.s=s,this.effectiveSize=new lt,this.addEventListener("change",()=>this.updateEffectiveSize()),this.updateEffectiveSize()}updateEffectiveSize(){const r=this.baseSize,e=this.preferredSize,t=this.effectiveSize,s=this.scale;e.width!==Cr?t.width=e.width:e.height!==Cr?t.width=Math.round(e.height*(r.width/Math.max(r.height,1))):t.width=Math.round(r.width*s),e.height!==Cr?t.height=e.height:e.width!==Cr?t.height=Math.round(e.width/Math.max(r.width/Math.max(r.height,1),1)):t.height=Math.round(r.height*s)}get width(){return this.effectiveSize.width}set width(r){this.preferredWidth=r}get height(){return this.effectiveSize.height}set height(r){this.preferredHeight=r}getWidth(){return this.width}getHeight(){return this.height}get scale(){return this.s}set scale(r){this.s!==r&&(this.s=r,this.preferredSize.setScalar(Cr),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getScale(){return this.scale}setScale(r){this.scale=r}get baseWidth(){return this.baseSize.width}set baseWidth(r){this.baseSize.width!==r&&(this.baseSize.width=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseWidth(){return this.baseWidth}setBaseWidth(r){this.baseWidth=r}get baseHeight(){return this.baseSize.height}set baseHeight(r){this.baseSize.height!==r&&(this.baseSize.height=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getBaseHeight(){return this.baseHeight}setBaseHeight(r){this.baseHeight=r}setBaseSize(r,e){(this.baseSize.width!==r||this.baseSize.height!==e)&&(this.baseSize.set(r,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}get preferredWidth(){return this.preferredSize.width}set preferredWidth(r){this.preferredSize.width!==r&&(this.preferredSize.width=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredWidth(){return this.preferredWidth}setPreferredWidth(r){this.preferredWidth=r}get preferredHeight(){return this.preferredSize.height}set preferredHeight(r){this.preferredSize.height!==r&&(this.preferredSize.height=r,this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}getPreferredHeight(){return this.preferredHeight}setPreferredHeight(r){this.preferredHeight=r}setPreferredSize(r,e){(this.preferredSize.width!==r||this.preferredSize.height!==e)&&(this.preferredSize.set(r,e),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height))}copy(r){this.s=r.scale,this.baseSize.set(r.baseWidth,r.baseHeight),this.preferredSize.set(r.preferredWidth,r.preferredHeight),this.dispatchEvent({type:"change"}),this.resizable.setSize(this.baseSize.width,this.baseSize.height)}static get AUTO_SIZE(){return Cr}},mt={ADD:0,ALPHA:1,AVERAGE:2,COLOR:3,COLOR_BURN:4,COLOR_DODGE:5,DARKEN:6,DIFFERENCE:7,DIVIDE:8,DST:9,EXCLUSION:10,HARD_LIGHT:11,HARD_MIX:12,HUE:13,INVERT:14,INVERT_RGB:15,LIGHTEN:16,LINEAR_BURN:17,LINEAR_DODGE:18,LINEAR_LIGHT:19,LUMINOSITY:20,MULTIPLY:21,NEGATION:22,NORMAL:23,OVERLAY:24,PIN_LIGHT:25,REFLECT:26,SATURATION:27,SCREEN:28,SOFT_LIGHT:29,SRC:30,SUBTRACT:31,VIVID_LIGHT:32},WE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y,opacity);}",XE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,min(y.a,opacity));}",jE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y)*0.5,opacity);}",YE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.rg,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",QE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(step(0.0,y)*(1.0-min(vec4(1.0),(1.0-x)/y)),vec4(1.0),step(1.0,x));return mix(x,z,opacity);}",KE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=step(0.0,x)*mix(min(vec4(1.0),x/max(1.0-y,1e-9)),vec4(1.0),step(1.0,y));return mix(x,z,opacity);}",qE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x,y),opacity);}",ZE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,abs(x-y),opacity);}",JE="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x/max(y,1e-12),opacity);}",$E="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,(x+y-2.0*x*y),opacity);}",eM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 a=min(x,1.0),b=min(y,1.0);vec4 z=mix(2.0*a*b,1.0-2.0*(1.0-a)*(1.0-b),step(0.5,y));return mix(x,z,opacity);}",tM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,step(1.0,x+y),opacity);}",nM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(yHSL.r,xHSL.gb));return vec4(mix(x.rgb,z,opacity),y.a);}",iM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-y,opacity);}",rM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y*(1.0-x),opacity);}",sM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x,y),opacity);}",oM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(y+x-1.0,0.0,1.0),opacity);}",aM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,min(x+y,1.0),opacity);}",lM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,clamp(2.0*y+x-1.0,0.0,1.0),opacity);}",cM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.rg,yHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",uM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x*y,opacity);}",fM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,1.0-abs(1.0-x-y),opacity);}",dM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,y,opacity);}",hM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(2.0*y*x,1.0-2.0*(1.0-y)*(1.0-x),step(0.5,x));return mix(x,z,opacity);}",pM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 z=mix(mix(y2,x,step(0.5*x,y)),max(vec4(0.0),y2-1.0),step(x,(y2-1.0)));return mix(x,z,opacity);}",mM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(min(x*x/max(1.0-y,1e-12),1.0),y,step(1.0,y));return mix(x,z,opacity);}",gM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec3 xHSL=RGBToHSL(x.rgb);vec3 yHSL=RGBToHSL(y.rgb);vec3 z=HSLToRGB(vec3(xHSL.r,yHSL.g,xHSL.b));return vec4(mix(x.rgb,z,opacity),y.a);}",vM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,x+y-min(x*y,1.0),opacity);}",xM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 y2=2.0*y;vec4 w=step(0.5,y);vec4 z=mix(x-(1.0-y2)*x*(1.0-x),mix(x+(y2-1.0)*(sqrt(x)-x),x+(y2-1.0)*x*((16.0*x-12.0)*x+3.0),w*(1.0-step(0.25,x))),w);return mix(x,z,opacity);}",_M="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return y;}",AM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){return mix(x,max(x+y-1.0,0.0),opacity);}",SM="vec4 blend(const in vec4 x,const in vec4 y,const in float opacity){vec4 z=mix(max(1.0-min((1.0-x)/(2.0*y),1.0),0.0),min(x/(2.0*(1.0-y)),1.0),step(0.5,y));return mix(x,z,opacity);}",yM=new Map([[mt.ADD,WE],[mt.ALPHA,XE],[mt.AVERAGE,jE],[mt.COLOR,YE],[mt.COLOR_BURN,QE],[mt.COLOR_DODGE,KE],[mt.DARKEN,qE],[mt.DIFFERENCE,ZE],[mt.DIVIDE,JE],[mt.DST,null],[mt.EXCLUSION,$E],[mt.HARD_LIGHT,eM],[mt.HARD_MIX,tM],[mt.HUE,nM],[mt.INVERT,iM],[mt.INVERT_RGB,rM],[mt.LIGHTEN,sM],[mt.LINEAR_BURN,oM],[mt.LINEAR_DODGE,aM],[mt.LINEAR_LIGHT,lM],[mt.LUMINOSITY,cM],[mt.MULTIPLY,uM],[mt.NEGATION,fM],[mt.NORMAL,dM],[mt.OVERLAY,hM],[mt.PIN_LIGHT,pM],[mt.REFLECT,mM],[mt.SATURATION,gM],[mt.SCREEN,vM],[mt.SOFT_LIGHT,xM],[mt.SRC,_M],[mt.SUBTRACT,AM],[mt.VIVID_LIGHT,SM]]),EM=class extends Ji{constructor(r,e=1){super(),this._blendFunction=r,this.opacity=new dt(e)}getOpacity(){return this.opacity.value}setOpacity(r){this.opacity.value=r}get blendFunction(){return this._blendFunction}set blendFunction(r){this._blendFunction=r,this.dispatchEvent({type:"change"})}getBlendFunction(){return this.blendFunction}setBlendFunction(r){this.blendFunction=r}getShaderCode(){return yM.get(this.blendFunction)}},_g=class extends Ji{constructor(r,e,{attributes:t=Ki.NONE,blendFunction:s=mt.NORMAL,defines:a=new Map,uniforms:l=new Map,extensions:u=null,vertexShader:f=null}={}){super(),this.name=r,this.renderer=null,this.attributes=t,this.fragmentShader=e,this.vertexShader=f,this.defines=a,this.uniforms=l,this.extensions=u,this.blendMode=new EM(s),this.blendMode.addEventListener("change",h=>this.setChanged()),this._inputColorSpace=br,this._outputColorSpace=Ci}get inputColorSpace(){return this._inputColorSpace}set inputColorSpace(r){this._inputColorSpace=r,this.setChanged()}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(r){this._outputColorSpace=r,this.setChanged()}set mainScene(r){}set mainCamera(r){}getName(){return this.name}setRenderer(r){this.renderer=r}getDefines(){return this.defines}getUniforms(){return this.uniforms}getExtensions(){return this.extensions}getBlendMode(){return this.blendMode}getAttributes(){return this.attributes}setAttributes(r){this.attributes=r,this.setChanged()}getFragmentShader(){return this.fragmentShader}setFragmentShader(r){this.fragmentShader=r,this.setChanged()}getVertexShader(){return this.vertexShader}setVertexShader(r){this.vertexShader=r,this.setChanged()}setChanged(){this.dispatchEvent({type:"change"})}setDepthTexture(r,e=ss){}update(r,e,t){}setSize(r,e){}initialize(r,e,t){}dispose(){for(const r of Object.keys(this)){const e=this[r];(e instanceof Dn||e instanceof to||e instanceof nn||e instanceof ai)&&this[r].dispose()}}},sd={MEDIUM:2,LARGE:3},MM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec4 sum=texture2D(inputBuffer,vUv0);sum+=texture2D(inputBuffer,vUv1);sum+=texture2D(inputBuffer,vUv2);sum+=texture2D(inputBuffer,vUv3);gl_FragColor=sum*0.25;
#include <colorspace_fragment>
}`,wM="uniform vec4 texelSize;uniform float kernel;uniform float scale;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;void main(){vec2 uv=position.xy*0.5+0.5;vec2 dUv=(texelSize.xy*vec2(kernel)+texelSize.zw)*scale;vUv0=vec2(uv.x-dUv.x,uv.y+dUv.y);vUv1=vec2(uv.x+dUv.x,uv.y+dUv.y);vUv2=vec2(uv.x+dUv.x,uv.y-dUv.y);vUv3=vec2(uv.x-dUv.x,uv.y-dUv.y);gl_Position=vec4(position.xy,1.0,1.0);}",TM=[new Float32Array([0,0]),new Float32Array([0,1,1]),new Float32Array([0,1,1,2]),new Float32Array([0,1,2,2,3]),new Float32Array([0,1,2,3,4,4,5]),new Float32Array([0,1,2,3,4,5,7,8,9,10])],CM=class extends xn{constructor(r=new jt){super({name:"KawaseBlurMaterial",uniforms:{inputBuffer:new dt(null),texelSize:new dt(new jt),scale:new dt(1),kernel:new dt(0)},blending:Rn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:MM,vertexShader:wM}),this.setTexelSize(r.x,r.y),this.kernelSize=sd.MEDIUM}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.inputBuffer=r}get kernelSequence(){return TM[this.kernelSize]}get scale(){return this.uniforms.scale.value}set scale(r){this.uniforms.scale.value=r}getScale(){return this.uniforms.scale.value}setScale(r){this.uniforms.scale.value=r}getKernel(){return null}get kernel(){return this.uniforms.kernel.value}set kernel(r){this.uniforms.kernel.value=r}setKernel(r){this.kernel=r}setTexelSize(r,e){this.uniforms.texelSize.value.set(r,e,r*.5,e*.5)}setSize(r,e){const t=1/r,s=1/e;this.uniforms.texelSize.value.set(t,s,t*.5,s*.5)}},RM=class extends ai{constructor({kernelSize:r=sd.MEDIUM,resolutionScale:e=.5,width:t=Ri.AUTO_SIZE,height:s=Ri.AUTO_SIZE,resolutionX:a=t,resolutionY:l=s}={}){super("KawaseBlurPass"),this.renderTargetA=new Dn(1,1,{depthBuffer:!1}),this.renderTargetA.texture.name="Blur.Target.A",this.renderTargetB=this.renderTargetA.clone(),this.renderTargetB.texture.name="Blur.Target.B";const u=this.resolution=new Ri(this,a,l,e);u.addEventListener("change",f=>this.setSize(u.baseWidth,u.baseHeight)),this._blurMaterial=new CM,this._blurMaterial.kernelSize=r,this.copyMaterial=new xg}getResolution(){return this.resolution}get blurMaterial(){return this._blurMaterial}set blurMaterial(r){this._blurMaterial=r}get dithering(){return this.copyMaterial.dithering}set dithering(r){this.copyMaterial.dithering=r}get kernelSize(){return this.blurMaterial.kernelSize}set kernelSize(r){this.blurMaterial.kernelSize=r}get width(){return this.resolution.width}set width(r){this.resolution.preferredWidth=r}get height(){return this.resolution.height}set height(r){this.resolution.preferredHeight=r}get scale(){return this.blurMaterial.scale}set scale(r){this.blurMaterial.scale=r}getScale(){return this.blurMaterial.scale}setScale(r){this.blurMaterial.scale=r}getKernelSize(){return this.kernelSize}setKernelSize(r){this.kernelSize=r}getResolutionScale(){return this.resolution.scale}setResolutionScale(r){this.resolution.scale=r}render(r,e,t,s,a){const l=this.scene,u=this.camera,f=this.renderTargetA,h=this.renderTargetB,m=this.blurMaterial,g=m.kernelSequence;let v=e;this.fullscreenMaterial=m;for(let _=0,S=g.length;_<S;++_){const M=(_&1)===0?f:h;m.kernel=g[_],m.inputBuffer=v.texture,r.setRenderTarget(M),r.render(l,u),v=M}this.fullscreenMaterial=this.copyMaterial,this.copyMaterial.inputBuffer=v.texture,r.setRenderTarget(this.renderToScreen?null:t),r.render(l,u)}setSize(r,e){const t=this.resolution;t.setBaseSize(r,e);const s=t.width,a=t.height;this.renderTargetA.setSize(s,a),this.renderTargetB.setSize(s,a),this.blurMaterial.setSize(r,e)}initialize(r,e,t){t!==void 0&&(this.renderTargetA.texture.type=t,this.renderTargetB.texture.type=t,t!==vn?(this.blurMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.copyMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1"):r!==null&&r.outputColorSpace===Lt&&(this.renderTargetA.texture.colorSpace=Lt,this.renderTargetB.texture.colorSpace=Lt))}static get AUTO_SIZE(){return Ri.AUTO_SIZE}},DM=`#include <common>
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#ifdef RANGE
uniform vec2 range;
#elif defined(THRESHOLD)
uniform float threshold;uniform float smoothing;
#endif
varying vec2 vUv;void main(){vec4 texel=texture2D(inputBuffer,vUv);float l=luminance(texel.rgb);
#ifdef RANGE
float low=step(range.x,l);float high=step(l,range.y);l*=low*high;
#elif defined(THRESHOLD)
l=smoothstep(threshold,threshold+smoothing,l)*l;
#endif
#ifdef COLOR
gl_FragColor=vec4(texel.rgb*clamp(l,0.0,1.0),l);
#else
gl_FragColor=vec4(l);
#endif
}`,bM=class extends xn{constructor(r=!1,e=null){super({name:"LuminanceMaterial",defines:{THREE_REVISION:eo.replace(/\D+/g,"")},uniforms:{inputBuffer:new dt(null),threshold:new dt(0),smoothing:new dt(1),range:new dt(null)},blending:Rn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:DM,vertexShader:vg}),this.colorOutput=r,this.luminanceRange=e}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get threshold(){return this.uniforms.threshold.value}set threshold(r){this.smoothing>0||r>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.threshold.value=r}getThreshold(){return this.threshold}setThreshold(r){this.threshold=r}get smoothing(){return this.uniforms.smoothing.value}set smoothing(r){this.threshold>0||r>0?this.defines.THRESHOLD="1":delete this.defines.THRESHOLD,this.uniforms.smoothing.value=r}getSmoothingFactor(){return this.smoothing}setSmoothingFactor(r){this.smoothing=r}get useThreshold(){return this.threshold>0||this.smoothing>0}set useThreshold(r){}get colorOutput(){return this.defines.COLOR!==void 0}set colorOutput(r){r?this.defines.COLOR="1":delete this.defines.COLOR,this.needsUpdate=!0}isColorOutputEnabled(r){return this.colorOutput}setColorOutputEnabled(r){this.colorOutput=r}get useRange(){return this.luminanceRange!==null}set useRange(r){this.luminanceRange=null}get luminanceRange(){return this.uniforms.range.value}set luminanceRange(r){r!==null?this.defines.RANGE="1":delete this.defines.RANGE,this.uniforms.range.value=r,this.needsUpdate=!0}getLuminanceRange(){return this.luminanceRange}setLuminanceRange(r){this.luminanceRange=r}},PM=class extends ai{constructor({renderTarget:r,luminanceRange:e,colorOutput:t,resolutionScale:s=1,width:a=Ri.AUTO_SIZE,height:l=Ri.AUTO_SIZE,resolutionX:u=a,resolutionY:f=l}={}){super("LuminancePass"),this.fullscreenMaterial=new bM(t,e),this.needsSwap=!1,this.renderTarget=r,this.renderTarget===void 0&&(this.renderTarget=new Dn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="LuminancePass.Target");const h=this.resolution=new Ri(this,u,f,s);h.addEventListener("change",m=>this.setSize(h.baseWidth,h.baseHeight))}get texture(){return this.renderTarget.texture}getTexture(){return this.renderTarget.texture}getResolution(){return this.resolution}render(r,e,t,s,a){const l=this.fullscreenMaterial;l.inputBuffer=e.texture,r.setRenderTarget(this.renderToScreen?null:this.renderTarget),r.render(this.scene,this.camera)}setSize(r,e){const t=this.resolution;t.setBaseSize(r,e),this.renderTarget.setSize(t.width,t.height)}initialize(r,e,t){t!==void 0&&t!==vn&&(this.renderTarget.texture.type=t,this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},IM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#define WEIGHT_INNER 0.125
#define WEIGHT_OUTER 0.0555555
varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;float clampToBorder(const in vec2 uv){return float(uv.s>=0.0&&uv.s<=1.0&&uv.t>=0.0&&uv.t<=1.0);}void main(){vec4 c=vec4(0.0);vec4 w=WEIGHT_INNER*vec4(clampToBorder(vUv00),clampToBorder(vUv01),clampToBorder(vUv02),clampToBorder(vUv03));c+=w.x*texture2D(inputBuffer,vUv00);c+=w.y*texture2D(inputBuffer,vUv01);c+=w.z*texture2D(inputBuffer,vUv02);c+=w.w*texture2D(inputBuffer,vUv03);w=WEIGHT_OUTER*vec4(clampToBorder(vUv04),clampToBorder(vUv05),clampToBorder(vUv06),clampToBorder(vUv07));c+=w.x*texture2D(inputBuffer,vUv04);c+=w.y*texture2D(inputBuffer,vUv05);c+=w.z*texture2D(inputBuffer,vUv06);c+=w.w*texture2D(inputBuffer,vUv07);w=WEIGHT_OUTER*vec4(clampToBorder(vUv08),clampToBorder(vUv09),clampToBorder(vUv10),clampToBorder(vUv11));c+=w.x*texture2D(inputBuffer,vUv08);c+=w.y*texture2D(inputBuffer,vUv09);c+=w.z*texture2D(inputBuffer,vUv10);c+=w.w*texture2D(inputBuffer,vUv11);c+=WEIGHT_OUTER*texture2D(inputBuffer,vUv);gl_FragColor=c;
#include <colorspace_fragment>
}`,LM="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv00;varying vec2 vUv01;varying vec2 vUv02;varying vec2 vUv03;varying vec2 vUv04;varying vec2 vUv05;varying vec2 vUv06;varying vec2 vUv07;varying vec2 vUv08;varying vec2 vUv09;varying vec2 vUv10;varying vec2 vUv11;void main(){vUv=position.xy*0.5+0.5;vUv00=vUv+texelSize*vec2(-1.0,1.0);vUv01=vUv+texelSize*vec2(1.0,1.0);vUv02=vUv+texelSize*vec2(-1.0,-1.0);vUv03=vUv+texelSize*vec2(1.0,-1.0);vUv04=vUv+texelSize*vec2(-2.0,2.0);vUv05=vUv+texelSize*vec2(0.0,2.0);vUv06=vUv+texelSize*vec2(2.0,2.0);vUv07=vUv+texelSize*vec2(-2.0,0.0);vUv08=vUv+texelSize*vec2(2.0,0.0);vUv09=vUv+texelSize*vec2(-2.0,-2.0);vUv10=vUv+texelSize*vec2(0.0,-2.0);vUv11=vUv+texelSize*vec2(2.0,-2.0);gl_Position=vec4(position.xy,1.0,1.0);}",UM=class extends xn{constructor(){super({name:"DownsamplingMaterial",uniforms:{inputBuffer:new dt(null),texelSize:new dt(new lt)},blending:Rn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:IM,vertexShader:LM})}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setSize(r,e){this.uniforms.texelSize.value.set(1/r,1/e)}},BM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;uniform mediump sampler2D supportBuffer;
#else
uniform lowp sampler2D inputBuffer;uniform lowp sampler2D supportBuffer;
#endif
uniform float radius;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vec4 c=vec4(0.0);c+=texture2D(inputBuffer,vUv0)*0.0625;c+=texture2D(inputBuffer,vUv1)*0.125;c+=texture2D(inputBuffer,vUv2)*0.0625;c+=texture2D(inputBuffer,vUv3)*0.125;c+=texture2D(inputBuffer,vUv)*0.25;c+=texture2D(inputBuffer,vUv4)*0.125;c+=texture2D(inputBuffer,vUv5)*0.0625;c+=texture2D(inputBuffer,vUv6)*0.125;c+=texture2D(inputBuffer,vUv7)*0.0625;vec4 baseColor=texture2D(supportBuffer,vUv);gl_FragColor=mix(baseColor,c,radius);
#include <colorspace_fragment>
}`,NM="uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;varying vec2 vUv6;varying vec2 vUv7;void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,1.0);vUv1=vUv+texelSize*vec2(0.0,1.0);vUv2=vUv+texelSize*vec2(1.0,1.0);vUv3=vUv+texelSize*vec2(-1.0,0.0);vUv4=vUv+texelSize*vec2(1.0,0.0);vUv5=vUv+texelSize*vec2(-1.0,-1.0);vUv6=vUv+texelSize*vec2(0.0,-1.0);vUv7=vUv+texelSize*vec2(1.0,-1.0);gl_Position=vec4(position.xy,1.0,1.0);}",FM=class extends xn{constructor(){super({name:"UpsamplingMaterial",uniforms:{inputBuffer:new dt(null),supportBuffer:new dt(null),texelSize:new dt(new lt),radius:new dt(.85)},blending:Rn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:BM,vertexShader:NM})}set inputBuffer(r){this.uniforms.inputBuffer.value=r}set supportBuffer(r){this.uniforms.supportBuffer.value=r}get radius(){return this.uniforms.radius.value}set radius(r){this.uniforms.radius.value=r}setSize(r,e){this.uniforms.texelSize.value.set(1/r,1/e)}},OM=class extends ai{constructor(){super("MipmapBlurPass"),this.needsSwap=!1,this.renderTarget=new Dn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Upsampling.Mipmap0",this.downsamplingMipmaps=[],this.upsamplingMipmaps=[],this.downsamplingMaterial=new UM,this.upsamplingMaterial=new FM,this.resolution=new lt}get texture(){return this.renderTarget.texture}get levels(){return this.downsamplingMipmaps.length}set levels(r){if(this.levels!==r){const e=this.renderTarget;this.dispose(),this.downsamplingMipmaps=[],this.upsamplingMipmaps=[];for(let t=0;t<r;++t){const s=e.clone();s.texture.name="Downsampling.Mipmap"+t,this.downsamplingMipmaps.push(s)}this.upsamplingMipmaps.push(e);for(let t=1,s=r-1;t<s;++t){const a=e.clone();a.texture.name="Upsampling.Mipmap"+t,this.upsamplingMipmaps.push(a)}this.setSize(this.resolution.x,this.resolution.y)}}get radius(){return this.upsamplingMaterial.radius}set radius(r){this.upsamplingMaterial.radius=r}render(r,e,t,s,a){const{scene:l,camera:u}=this,{downsamplingMaterial:f,upsamplingMaterial:h}=this,{downsamplingMipmaps:m,upsamplingMipmaps:g}=this;let v=e;this.fullscreenMaterial=f;for(let _=0,S=m.length;_<S;++_){const M=m[_];f.setSize(v.width,v.height),f.inputBuffer=v.texture,r.setRenderTarget(M),r.render(l,u),v=M}this.fullscreenMaterial=h;for(let _=g.length-1;_>=0;--_){const S=g[_];h.setSize(v.width,v.height),h.inputBuffer=v.texture,h.supportBuffer=m[_].texture,r.setRenderTarget(S),r.render(l,u),v=S}}setSize(r,e){const t=this.resolution;t.set(r,e);let s=t.width,a=t.height;for(let l=0,u=this.downsamplingMipmaps.length;l<u;++l)s=Math.round(s*.5),a=Math.round(a*.5),this.downsamplingMipmaps[l].setSize(s,a),l<this.upsamplingMipmaps.length&&this.upsamplingMipmaps[l].setSize(s,a)}initialize(r,e,t){if(t!==void 0){const s=this.downsamplingMipmaps.concat(this.upsamplingMipmaps);for(const a of s)a.texture.type=t;if(t!==vn)this.downsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1",this.upsamplingMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1";else if(r!==null&&r.outputColorSpace===Lt)for(const a of s)a.texture.colorSpace=Lt}}dispose(){super.dispose();for(const r of this.downsamplingMipmaps.concat(this.upsamplingMipmaps))r.dispose()}},zM=`#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D map;
#else
uniform lowp sampler2D map;
#endif
uniform float intensity;void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 texel=texture2D(map,uv);outputColor=vec4(texel.rgb*intensity,texel.a);}`,kM=class extends _g{constructor({blendFunction:r=mt.SCREEN,luminanceThreshold:e=.9,luminanceSmoothing:t=.025,mipmapBlur:s=!1,intensity:a=1,radius:l=.85,levels:u=8,kernelSize:f=sd.LARGE,resolutionScale:h=.5,width:m=Ri.AUTO_SIZE,height:g=Ri.AUTO_SIZE,resolutionX:v=m,resolutionY:_=g}={}){super("BloomEffect",zM,{blendFunction:r,uniforms:new Map([["map",new dt(null)],["intensity",new dt(a)]])}),this.renderTarget=new Dn(1,1,{depthBuffer:!1}),this.renderTarget.texture.name="Bloom.Target",this.blurPass=new RM({kernelSize:f}),this.luminancePass=new PM({colorOutput:!0}),this.luminanceMaterial.threshold=e,this.luminanceMaterial.smoothing=t,this.mipmapBlurPass=new OM,this.mipmapBlurPass.enabled=s,this.mipmapBlurPass.radius=l,this.mipmapBlurPass.levels=u,this.uniforms.get("map").value=s?this.mipmapBlurPass.texture:this.renderTarget.texture;const S=this.resolution=new Ri(this,v,_,h);S.addEventListener("change",M=>this.setSize(S.baseWidth,S.baseHeight))}get texture(){return this.mipmapBlurPass.enabled?this.mipmapBlurPass.texture:this.renderTarget.texture}getTexture(){return this.texture}getResolution(){return this.resolution}getBlurPass(){return this.blurPass}getLuminancePass(){return this.luminancePass}get luminanceMaterial(){return this.luminancePass.fullscreenMaterial}getLuminanceMaterial(){return this.luminancePass.fullscreenMaterial}get width(){return this.resolution.width}set width(r){this.resolution.preferredWidth=r}get height(){return this.resolution.height}set height(r){this.resolution.preferredHeight=r}get dithering(){return this.blurPass.dithering}set dithering(r){this.blurPass.dithering=r}get kernelSize(){return this.blurPass.kernelSize}set kernelSize(r){this.blurPass.kernelSize=r}get distinction(){return console.warn(this.name,"distinction was removed"),1}set distinction(r){console.warn(this.name,"distinction was removed")}get intensity(){return this.uniforms.get("intensity").value}set intensity(r){this.uniforms.get("intensity").value=r}getIntensity(){return this.intensity}setIntensity(r){this.intensity=r}getResolutionScale(){return this.resolution.scale}setResolutionScale(r){this.resolution.scale=r}update(r,e,t){const s=this.renderTarget,a=this.luminancePass;a.enabled?(a.render(r,e),this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(r,a.renderTarget):this.blurPass.render(r,a.renderTarget,s)):this.mipmapBlurPass.enabled?this.mipmapBlurPass.render(r,e):this.blurPass.render(r,e,s)}setSize(r,e){const t=this.resolution;t.setBaseSize(r,e),this.renderTarget.setSize(t.width,t.height),this.blurPass.resolution.copy(t),this.luminancePass.setSize(r,e),this.mipmapBlurPass.setSize(r,e)}initialize(r,e,t){this.blurPass.initialize(r,e,t),this.luminancePass.initialize(r,e,t),this.mipmapBlurPass.initialize(r,e,t),t!==void 0&&(this.renderTarget.texture.type=t,r!==null&&r.outputColorSpace===Lt&&(this.renderTarget.texture.colorSpace=Lt))}},Bm=class extends ai{constructor(r,e="inputBuffer"){super("ShaderPass"),this.fullscreenMaterial=r,this.input=e}setInput(r){this.input=r}render(r,e,t,s,a){const l=this.fullscreenMaterial.uniforms;e!==null&&l!==void 0&&l[this.input]!==void 0&&(l[this.input].value=e.texture),r.setRenderTarget(this.renderToScreen?null:t),r.render(this.scene,this.camera)}initialize(r,e,t){t!==void 0&&t!==vn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}},HM=class extends ai{constructor(r,e,t=null){super("RenderPass",r,e),this.needsSwap=!1,this.clearPass=new rd,this.overrideMaterialManager=t===null?null:new Um(t),this.ignoreBackground=!1,this.skipShadowMapUpdate=!1,this.selection=null}set mainScene(r){this.scene=r}set mainCamera(r){this.camera=r}get renderToScreen(){return super.renderToScreen}set renderToScreen(r){super.renderToScreen=r,this.clearPass.renderToScreen=r}get overrideMaterial(){const r=this.overrideMaterialManager;return r!==null?r.material:null}set overrideMaterial(r){const e=this.overrideMaterialManager;r!==null?e!==null?e.setMaterial(r):this.overrideMaterialManager=new Um(r):e!==null&&(e.dispose(),this.overrideMaterialManager=null)}getOverrideMaterial(){return this.overrideMaterial}setOverrideMaterial(r){this.overrideMaterial=r}get clear(){return this.clearPass.enabled}set clear(r){this.clearPass.enabled=r}getSelection(){return this.selection}setSelection(r){this.selection=r}isBackgroundDisabled(){return this.ignoreBackground}setBackgroundDisabled(r){this.ignoreBackground=r}isShadowMapDisabled(){return this.skipShadowMapUpdate}setShadowMapDisabled(r){this.skipShadowMapUpdate=r}getClearPass(){return this.clearPass}render(r,e,t,s,a){const l=this.scene,u=this.camera,f=this.selection,h=u.layers.mask,m=l.background,g=r.shadowMap.autoUpdate,v=this.renderToScreen?null:e;f!==null&&u.layers.set(f.getLayer()),this.skipShadowMapUpdate&&(r.shadowMap.autoUpdate=!1),(this.ignoreBackground||this.clearPass.overrideClearColor!==null)&&(l.background=null),this.clearPass.enabled&&this.clearPass.render(r,e),r.setRenderTarget(v),this.overrideMaterialManager!==null?this.overrideMaterialManager.render(r,l,u):r.render(l,u),u.layers.mask=h,l.background=m,r.shadowMap.autoUpdate=g}},Ag={COLOR:2},GM={DISABLED:0},Ho={LOW:0,MEDIUM:1,HIGH:2,ULTRA:3},VM=`varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
#if EDGE_DETECTION_MODE == 1
#include <common>
#endif
#if EDGE_DETECTION_MODE == 0 || PREDICATION_MODE == 1
#ifdef GL_FRAGMENT_PRECISION_HIGH
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}vec3 gatherNeighbors(){float p=readDepth(vUv);float pLeft=readDepth(vUv0);float pTop=readDepth(vUv1);return vec3(p,pLeft,pTop);}
#elif PREDICATION_MODE == 2
uniform sampler2D predicationBuffer;vec3 gatherNeighbors(){float p=texture2D(predicationBuffer,vUv).r;float pLeft=texture2D(predicationBuffer,vUv0).r;float pTop=texture2D(predicationBuffer,vUv1).r;return vec3(p,pLeft,pTop);}
#endif
#if PREDICATION_MODE != 0
vec2 calculatePredicatedThreshold(){vec3 neighbours=gatherNeighbors();vec2 delta=abs(neighbours.xx-neighbours.yz);vec2 edges=step(PREDICATION_THRESHOLD,delta);return PREDICATION_SCALE*EDGE_THRESHOLD*(1.0-PREDICATION_STRENGTH*edges);}
#endif
#if EDGE_DETECTION_MODE != 0
uniform sampler2D inputBuffer;
#endif
void main(){
#if EDGE_DETECTION_MODE == 0
const vec2 threshold=vec2(DEPTH_THRESHOLD);
#elif PREDICATION_MODE != 0
vec2 threshold=calculatePredicatedThreshold();
#else
const vec2 threshold=vec2(EDGE_THRESHOLD);
#endif
#if EDGE_DETECTION_MODE == 0
vec3 neighbors=gatherNeighbors();vec2 delta=abs(neighbors.xx-vec2(neighbors.y,neighbors.z));vec2 edges=step(threshold,delta);if(dot(edges,vec2(1.0))==0.0){discard;}gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 1
float l=luminance(texture2D(inputBuffer,vUv).rgb);float lLeft=luminance(texture2D(inputBuffer,vUv0).rgb);float lTop=luminance(texture2D(inputBuffer,vUv1).rgb);vec4 delta;delta.xy=abs(l-vec2(lLeft,lTop));vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}float lRight=luminance(texture2D(inputBuffer,vUv2).rgb);float lBottom=luminance(texture2D(inputBuffer,vUv3).rgb);delta.zw=abs(l-vec2(lRight,lBottom));vec2 maxDelta=max(delta.xy,delta.zw);float lLeftLeft=luminance(texture2D(inputBuffer,vUv4).rgb);float lTopTop=luminance(texture2D(inputBuffer,vUv5).rgb);delta.zw=abs(vec2(lLeft,lTop)-vec2(lLeftLeft,lTopTop));maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges.xy*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#elif EDGE_DETECTION_MODE == 2
vec4 delta;vec3 c=texture2D(inputBuffer,vUv).rgb;vec3 cLeft=texture2D(inputBuffer,vUv0).rgb;vec3 t=abs(c-cLeft);delta.x=max(max(t.r,t.g),t.b);vec3 cTop=texture2D(inputBuffer,vUv1).rgb;t=abs(c-cTop);delta.y=max(max(t.r,t.g),t.b);vec2 edges=step(threshold,delta.xy);if(dot(edges,vec2(1.0))==0.0){discard;}vec3 cRight=texture2D(inputBuffer,vUv2).rgb;t=abs(c-cRight);delta.z=max(max(t.r,t.g),t.b);vec3 cBottom=texture2D(inputBuffer,vUv3).rgb;t=abs(c-cBottom);delta.w=max(max(t.r,t.g),t.b);vec2 maxDelta=max(delta.xy,delta.zw);vec3 cLeftLeft=texture2D(inputBuffer,vUv4).rgb;t=abs(c-cLeftLeft);delta.z=max(max(t.r,t.g),t.b);vec3 cTopTop=texture2D(inputBuffer,vUv5).rgb;t=abs(c-cTopTop);delta.w=max(max(t.r,t.g),t.b);maxDelta=max(maxDelta.xy,delta.zw);float finalDelta=max(maxDelta.x,maxDelta.y);edges*=step(finalDelta,LOCAL_CONTRAST_ADAPTATION_FACTOR*delta.xy);gl_FragColor=vec4(edges,0.0,1.0);
#endif
}`,WM=`uniform vec2 texelSize;varying vec2 vUv;varying vec2 vUv0;varying vec2 vUv1;
#if EDGE_DETECTION_MODE != 0
varying vec2 vUv2;varying vec2 vUv3;varying vec2 vUv4;varying vec2 vUv5;
#endif
void main(){vUv=position.xy*0.5+0.5;vUv0=vUv+texelSize*vec2(-1.0,0.0);vUv1=vUv+texelSize*vec2(0.0,-1.0);
#if EDGE_DETECTION_MODE != 0
vUv2=vUv+texelSize*vec2(1.0,0.0);vUv3=vUv+texelSize*vec2(0.0,1.0);vUv4=vUv+texelSize*vec2(-2.0,0.0);vUv5=vUv+texelSize*vec2(0.0,-2.0);
#endif
gl_Position=vec4(position.xy,1.0,1.0);}`,XM=class extends xn{constructor(r=new lt,e=Ag.COLOR){super({name:"EdgeDetectionMaterial",defines:{THREE_REVISION:eo.replace(/\D+/g,""),LOCAL_CONTRAST_ADAPTATION_FACTOR:"2.0",EDGE_THRESHOLD:"0.1",DEPTH_THRESHOLD:"0.01",PREDICATION_MODE:"0",PREDICATION_THRESHOLD:"0.01",PREDICATION_SCALE:"2.0",PREDICATION_STRENGTH:"1.0",DEPTH_PACKING:"0"},uniforms:{inputBuffer:new dt(null),depthBuffer:new dt(null),predicationBuffer:new dt(null),texelSize:new dt(r)},blending:Rn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:VM,vertexShader:WM}),this.edgeDetectionMode=e}set depthBuffer(r){this.uniforms.depthBuffer.value=r}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}setDepthBuffer(r,e=ss){this.depthBuffer=r,this.depthPacking=e}get edgeDetectionMode(){return Number(this.defines.EDGE_DETECTION_MODE)}set edgeDetectionMode(r){this.defines.EDGE_DETECTION_MODE=r.toFixed(0),this.needsUpdate=!0}getEdgeDetectionMode(){return this.edgeDetectionMode}setEdgeDetectionMode(r){this.edgeDetectionMode=r}get localContrastAdaptationFactor(){return Number(this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR)}set localContrastAdaptationFactor(r){this.defines.LOCAL_CONTRAST_ADAPTATION_FACTOR=r.toFixed("6"),this.needsUpdate=!0}getLocalContrastAdaptationFactor(){return this.localContrastAdaptationFactor}setLocalContrastAdaptationFactor(r){this.localContrastAdaptationFactor=r}get edgeDetectionThreshold(){return Number(this.defines.EDGE_THRESHOLD)}set edgeDetectionThreshold(r){this.defines.EDGE_THRESHOLD=r.toFixed("6"),this.defines.DEPTH_THRESHOLD=(r*.1).toFixed("6"),this.needsUpdate=!0}getEdgeDetectionThreshold(){return this.edgeDetectionThreshold}setEdgeDetectionThreshold(r){this.edgeDetectionThreshold=r}get predicationMode(){return Number(this.defines.PREDICATION_MODE)}set predicationMode(r){this.defines.PREDICATION_MODE=r.toFixed(0),this.needsUpdate=!0}getPredicationMode(){return this.predicationMode}setPredicationMode(r){this.predicationMode=r}set predicationBuffer(r){this.uniforms.predicationBuffer.value=r}setPredicationBuffer(r){this.uniforms.predicationBuffer.value=r}get predicationThreshold(){return Number(this.defines.PREDICATION_THRESHOLD)}set predicationThreshold(r){this.defines.PREDICATION_THRESHOLD=r.toFixed("6"),this.needsUpdate=!0}getPredicationThreshold(){return this.predicationThreshold}setPredicationThreshold(r){this.predicationThreshold=r}get predicationScale(){return Number(this.defines.PREDICATION_SCALE)}set predicationScale(r){this.defines.PREDICATION_SCALE=r.toFixed("6"),this.needsUpdate=!0}getPredicationScale(){return this.predicationScale}setPredicationScale(r){this.predicationScale=r}get predicationStrength(){return Number(this.defines.PREDICATION_STRENGTH)}set predicationStrength(r){this.defines.PREDICATION_STRENGTH=r.toFixed("6"),this.needsUpdate=!0}getPredicationStrength(){return this.predicationStrength}setPredicationStrength(r){this.predicationStrength=r}setSize(r,e){this.uniforms.texelSize.value.set(1/r,1/e)}},jM=`#define sampleLevelZeroOffset(t, coord, offset) texture2D(t, coord + offset * texelSize)
#if __VERSION__ < 300
#define round(v) floor(v + 0.5)
#endif
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
uniform lowp sampler2D areaTexture;uniform lowp sampler2D searchTexture;uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}vec2 decodeDiagBilinearAccess(in vec2 e){e.r=e.r*abs(5.0*e.r-5.0*0.75);return round(e);}vec4 decodeDiagBilinearAccess(in vec4 e){e.rb=e.rb*abs(5.0*e.rb-5.0*0.75);return round(e);}vec2 searchDiag1(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 searchDiag2(const in vec2 texCoord,const in vec2 dir,out vec2 e){vec4 coord=vec4(texCoord,-1.0,1.0);coord.x+=0.25*texelSize.x;vec3 t=vec3(texelSize,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(coord.z<float(MAX_SEARCH_STEPS_DIAG_INT-1)&&coord.w>0.9)){break;}coord.xyz=t*vec3(dir,1.0)+coord.xyz;e=texture2D(inputBuffer,coord.xy).rg;e=decodeDiagBilinearAccess(e);coord.w=dot(e,vec2(0.5));}return coord.zw;}vec2 areaDiag(const in vec2 dist,const in vec2 e,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE_DIAG,AREATEX_MAX_DISTANCE_DIAG)*e+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.x+=0.5;texCoord.y+=AREATEX_SUBTEX_SIZE*offset;return texture2D(areaTexture,texCoord).rg;}vec2 calculateDiagWeights(const in vec2 texCoord,const in vec2 e,const in vec4 subsampleIndices){vec2 weights=vec2(0.0);vec4 d;vec2 end;if(e.r>0.0){d.xz=searchDiag1(texCoord,vec2(-1.0,1.0),end);d.x+=float(end.y>0.9);}else{d.xz=vec2(0.0);}d.yw=searchDiag1(texCoord,vec2(1.0,-1.0),end);if(d.x+d.y>2.0){vec4 coords=vec4(-d.x+0.25,d.x,d.y,-d.y-0.25)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.xy=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).rg;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).rg;c.yxwz=decodeDiagBilinearAccess(c.xyzw);vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.z);}d.xz=searchDiag2(texCoord,vec2(-1.0,-1.0),end);if(sampleLevelZeroOffset(inputBuffer,texCoord,vec2(1,0)).r>0.0){d.yw=searchDiag2(texCoord,vec2(1.0),end);d.y+=float(end.y>0.9);}else{d.yw=vec2(0.0);}if(d.x+d.y>2.0){vec4 coords=vec4(-d.x,-d.x,d.y,d.y)*texelSize.xyxy+texCoord.xyxy;vec4 c;c.x=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(-1,0)).g;c.y=sampleLevelZeroOffset(inputBuffer,coords.xy,vec2(0,-1)).r;c.zw=sampleLevelZeroOffset(inputBuffer,coords.zw,vec2(1,0)).gr;vec2 cc=vec2(2.0)*c.xz+c.yw;movec(bvec2(step(0.9,d.zw)),cc,vec2(0.0));weights+=areaDiag(d.xy,cc,subsampleIndices.w).gr;}return weights;}float searchLength(const in vec2 e,const in float offset){vec2 scale=SEARCHTEX_SIZE*vec2(0.5,-1.0);vec2 bias=SEARCHTEX_SIZE*vec2(offset,1.0);scale+=vec2(-1.0,1.0);bias+=vec2(0.5,-0.5);scale*=1.0/SEARCHTEX_PACKED_SIZE;bias*=1.0/SEARCHTEX_PACKED_SIZE;return texture2D(searchTexture,scale*e+bias).r;}float searchXLeft(in vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x>end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(-2.0,0.0)*texelSize+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.0)+3.25;return texelSize.x*offset+texCoord.x;}float searchXRight(vec2 texCoord,const in float end){vec2 e=vec2(0.0,1.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.x<end&&e.g>0.8281&&e.r==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(2.0,0.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e,0.5)+3.25;return-texelSize.x*offset+texCoord.x;}float searchYUp(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;++i){if(!(texCoord.y>end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=-vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.0)+3.25;return texelSize.y*offset+texCoord.y;}float searchYDown(vec2 texCoord,const in float end){vec2 e=vec2(1.0,0.0);for(int i=0;i<MAX_SEARCH_STEPS_INT;i++){if(!(texCoord.y<end&&e.r>0.8281&&e.g==0.0)){break;}e=texture2D(inputBuffer,texCoord).rg;texCoord=vec2(0.0,2.0)*texelSize.xy+texCoord;}float offset=-(255.0/127.0)*searchLength(e.gr,0.5)+3.25;return-texelSize.y*offset+texCoord.y;}vec2 area(const in vec2 dist,const in float e1,const in float e2,const in float offset){vec2 texCoord=vec2(AREATEX_MAX_DISTANCE)*round(4.0*vec2(e1,e2))+dist;texCoord=AREATEX_PIXEL_SIZE*texCoord+0.5*AREATEX_PIXEL_SIZE;texCoord.y=AREATEX_SUBTEX_SIZE*offset+texCoord.y;return texture2D(areaTexture,texCoord).rg;}void detectHorizontalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,1)).r;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).r;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(0,-2)).r;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,-2)).r;weights*=clamp(factor,0.0,1.0);
#endif
}void detectVerticalCornerPattern(inout vec2 weights,const in vec4 texCoord,const in vec2 d){
#if !defined(DISABLE_CORNER_DETECTION)
vec2 leftRight=step(d.xy,d.yx);vec2 rounding=(1.0-CORNER_ROUNDING_NORM)*leftRight;rounding/=leftRight.x+leftRight.y;vec2 factor=vec2(1.0);factor.x-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(1,0)).g;factor.x-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(1,1)).g;factor.y-=rounding.x*sampleLevelZeroOffset(inputBuffer,texCoord.xy,vec2(-2,0)).g;factor.y-=rounding.y*sampleLevelZeroOffset(inputBuffer,texCoord.zw,vec2(-2,1)).g;weights*=clamp(factor,0.0,1.0);
#endif
}void main(){vec4 weights=vec4(0.0);vec4 subsampleIndices=vec4(0.0);vec2 e=texture2D(inputBuffer,vUv).rg;if(e.g>0.0){
#if !defined(DISABLE_DIAG_DETECTION)
weights.rg=calculateDiagWeights(vUv,e,subsampleIndices);if(weights.r==-weights.g){
#endif
vec2 d;vec3 coords;coords.x=searchXLeft(vOffset[0].xy,vOffset[2].x);coords.y=vOffset[1].y;d.x=coords.x;float e1=texture2D(inputBuffer,coords.xy).r;coords.z=searchXRight(vOffset[0].zw,vOffset[2].y);d.y=coords.z;d=round(resolution.xx*d+-vPixCoord.xx);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.zy,vec2(1,0)).r;weights.rg=area(sqrtD,e1,e2,subsampleIndices.y);coords.y=vUv.y;detectHorizontalCornerPattern(weights.rg,coords.xyzy,d);
#if !defined(DISABLE_DIAG_DETECTION)
}else{e.r=0.0;}
#endif
}if(e.r>0.0){vec2 d;vec3 coords;coords.y=searchYUp(vOffset[1].xy,vOffset[2].z);coords.x=vOffset[0].x;d.x=coords.y;float e1=texture2D(inputBuffer,coords.xy).g;coords.z=searchYDown(vOffset[1].zw,vOffset[2].w);d.y=coords.z;d=round(resolution.yy*d-vPixCoord.yy);vec2 sqrtD=sqrt(abs(d));float e2=sampleLevelZeroOffset(inputBuffer,coords.xz,vec2(0,1)).g;weights.ba=area(sqrtD,e1,e2,subsampleIndices.x);coords.x=vUv.x;detectVerticalCornerPattern(weights.ba,coords.xyxz,d);}gl_FragColor=weights;}`,YM="uniform vec2 texelSize;uniform vec2 resolution;varying vec2 vUv;varying vec4 vOffset[3];varying vec2 vPixCoord;void main(){vUv=position.xy*0.5+0.5;vPixCoord=vUv*resolution;vOffset[0]=vUv.xyxy+texelSize.xyxy*vec4(-0.25,-0.125,1.25,-0.125);vOffset[1]=vUv.xyxy+texelSize.xyxy*vec4(-0.125,-0.25,-0.125,1.25);vOffset[2]=vec4(vOffset[0].xz,vOffset[1].yw)+vec4(-2.0,2.0,-2.0,2.0)*texelSize.xxyy*MAX_SEARCH_STEPS_FLOAT;gl_Position=vec4(position.xy,1.0,1.0);}",QM=class extends xn{constructor(r=new lt,e=new lt){super({name:"SMAAWeightsMaterial",defines:{MAX_SEARCH_STEPS_INT:"16",MAX_SEARCH_STEPS_FLOAT:"16.0",MAX_SEARCH_STEPS_DIAG_INT:"8",MAX_SEARCH_STEPS_DIAG_FLOAT:"8.0",CORNER_ROUNDING:"25",CORNER_ROUNDING_NORM:"0.25",AREATEX_MAX_DISTANCE:"16.0",AREATEX_MAX_DISTANCE_DIAG:"20.0",AREATEX_PIXEL_SIZE:"(1.0 / vec2(160.0, 560.0))",AREATEX_SUBTEX_SIZE:"(1.0 / 7.0)",SEARCHTEX_SIZE:"vec2(66.0, 33.0)",SEARCHTEX_PACKED_SIZE:"vec2(64.0, 16.0)"},uniforms:{inputBuffer:new dt(null),searchTexture:new dt(null),areaTexture:new dt(null),resolution:new dt(e),texelSize:new dt(r)},blending:Rn,toneMapped:!1,depthWrite:!1,depthTest:!1,fragmentShader:jM,vertexShader:YM})}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get searchTexture(){return this.uniforms.searchTexture.value}set searchTexture(r){this.uniforms.searchTexture.value=r}get areaTexture(){return this.uniforms.areaTexture.value}set areaTexture(r){this.uniforms.areaTexture.value=r}setLookupTextures(r,e){this.searchTexture=r,this.areaTexture=e}get orthogonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_INT)}set orthogonalSearchSteps(r){const e=Math.min(Math.max(r,0),112);this.defines.MAX_SEARCH_STEPS_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setOrthogonalSearchSteps(r){this.orthogonalSearchSteps=r}get diagonalSearchSteps(){return Number(this.defines.MAX_SEARCH_STEPS_DIAG_INT)}set diagonalSearchSteps(r){const e=Math.min(Math.max(r,0),20);this.defines.MAX_SEARCH_STEPS_DIAG_INT=e.toFixed("0"),this.defines.MAX_SEARCH_STEPS_DIAG_FLOAT=e.toFixed("1"),this.needsUpdate=!0}setDiagonalSearchSteps(r){this.diagonalSearchSteps=r}get diagonalDetection(){return this.defines.DISABLE_DIAG_DETECTION===void 0}set diagonalDetection(r){r?delete this.defines.DISABLE_DIAG_DETECTION:this.defines.DISABLE_DIAG_DETECTION="1",this.needsUpdate=!0}isDiagonalDetectionEnabled(){return this.diagonalDetection}setDiagonalDetectionEnabled(r){this.diagonalDetection=r}get cornerRounding(){return Number(this.defines.CORNER_ROUNDING)}set cornerRounding(r){const e=Math.min(Math.max(r,0),100);this.defines.CORNER_ROUNDING=e.toFixed("4"),this.defines.CORNER_ROUNDING_NORM=(e/100).toFixed("4"),this.needsUpdate=!0}setCornerRounding(r){this.cornerRounding=r}get cornerDetection(){return this.defines.DISABLE_CORNER_DETECTION===void 0}set cornerDetection(r){r?delete this.defines.DISABLE_CORNER_DETECTION:this.defines.DISABLE_CORNER_DETECTION="1",this.needsUpdate=!0}isCornerRoundingEnabled(){return this.cornerDetection}setCornerRoundingEnabled(r){this.cornerDetection=r}setSize(r,e){const t=this.uniforms;t.texelSize.value.set(1/r,1/e),t.resolution.value.set(r,e)}},Nm="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAAAQCAYAAACm53kpAAAAeElEQVRYR+2XSwqAMAxEJ168ePEqwRSKhIIiuHjJqiU0gWE+1CQdApcVAMUAuARaMGCX1MIL/Ow13++9lW2s3mW9MWvsnWc/2fvGygwPAN4E8QzAA4CXAB6AHjG4JTHYI1ey3pcx6FHnEfhLDOIBKAmUBK6/ANUDTlROXAHd9EC1AAAAAElFTkSuQmCC",Fm="data:image/png;base64,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",KM="uniform sampler2D weightMap;varying vec2 vOffset0;varying vec2 vOffset1;void movec(const in bvec2 c,inout vec2 variable,const in vec2 value){if(c.x){variable.x=value.x;}if(c.y){variable.y=value.y;}}void movec(const in bvec4 c,inout vec4 variable,const in vec4 value){movec(c.xy,variable.xy,value.xy);movec(c.zw,variable.zw,value.zw);}void mainImage(const in vec4 inputColor,const in vec2 uv,out vec4 outputColor){vec4 a;a.x=texture2D(weightMap,vOffset0).a;a.y=texture2D(weightMap,vOffset1).g;a.wz=texture2D(weightMap,uv).rb;vec4 color=inputColor;if(dot(a,vec4(1.0))>=1e-5){bool h=max(a.x,a.z)>max(a.y,a.w);vec4 blendingOffset=vec4(0.0,a.y,0.0,a.w);vec2 blendingWeight=a.yw;movec(bvec4(h),blendingOffset,vec4(a.x,0.0,a.z,0.0));movec(bvec2(h),blendingWeight,a.xz);blendingWeight/=dot(blendingWeight,vec2(1.0));vec4 blendingCoord=blendingOffset*vec4(texelSize,-texelSize)+uv.xyxy;color=blendingWeight.x*texture2D(inputBuffer,blendingCoord.xy);color+=blendingWeight.y*texture2D(inputBuffer,blendingCoord.zw);}outputColor=color;}",qM="varying vec2 vOffset0;varying vec2 vOffset1;void mainSupport(const in vec2 uv){vOffset0=uv+texelSize*vec2(1.0,0.0);vOffset1=uv+texelSize*vec2(0.0,1.0);}",ZM=class extends _g{constructor({blendFunction:r=mt.SRC,preset:e=Ho.MEDIUM,edgeDetectionMode:t=Ag.COLOR,predicationMode:s=GM.DISABLED}={}){super("SMAAEffect",KM,{vertexShader:qM,blendFunction:r,attributes:Ki.CONVOLUTION|Ki.DEPTH,uniforms:new Map([["weightMap",new dt(null)]])});let a,l;arguments.length>1&&(a=arguments[0],l=arguments[1],arguments.length>2&&(e=arguments[2]),arguments.length>3&&(t=arguments[3])),this.renderTargetEdges=new Dn(1,1,{depthBuffer:!1}),this.renderTargetEdges.texture.name="SMAA.Edges",this.renderTargetWeights=this.renderTargetEdges.clone(),this.renderTargetWeights.texture.name="SMAA.Weights",this.uniforms.get("weightMap").value=this.renderTargetWeights.texture,this.clearPass=new rd(!0,!1,!1),this.clearPass.overrideClearColor=new Rt(0),this.clearPass.overrideClearAlpha=1,this.edgeDetectionPass=new Bm(new XM),this.edgeDetectionMaterial.edgeDetectionMode=t,this.edgeDetectionMaterial.predicationMode=s,this.weightsPass=new Bm(new QM);const u=new Yx;u.onLoad=()=>{const f=new nn(a);f.name="SMAA.Search",f.magFilter=Jn,f.minFilter=Jn,f.generateMipmaps=!1,f.needsUpdate=!0,f.flipY=!0,this.weightsMaterial.searchTexture=f;const h=new nn(l);h.name="SMAA.Area",h.magFilter=Cn,h.minFilter=Cn,h.generateMipmaps=!1,h.needsUpdate=!0,h.flipY=!1,this.weightsMaterial.areaTexture=h,this.dispatchEvent({type:"load"})},u.itemStart("search"),u.itemStart("area"),a!==void 0&&l!==void 0?(u.itemEnd("search"),u.itemEnd("area")):typeof Image<"u"&&(a=new Image,l=new Image,a.addEventListener("load",()=>u.itemEnd("search")),l.addEventListener("load",()=>u.itemEnd("area")),a.src=Nm,l.src=Fm),this.applyPreset(e)}get edgesTexture(){return this.renderTargetEdges.texture}getEdgesTexture(){return this.edgesTexture}get weightsTexture(){return this.renderTargetWeights.texture}getWeightsTexture(){return this.weightsTexture}get edgeDetectionMaterial(){return this.edgeDetectionPass.fullscreenMaterial}get colorEdgesMaterial(){return this.edgeDetectionMaterial}getEdgeDetectionMaterial(){return this.edgeDetectionMaterial}get weightsMaterial(){return this.weightsPass.fullscreenMaterial}getWeightsMaterial(){return this.weightsMaterial}setEdgeDetectionThreshold(r){this.edgeDetectionMaterial.edgeDetectionThreshold=r}setOrthogonalSearchSteps(r){this.weightsMaterial.orthogonalSearchSteps=r}applyPreset(r){const e=this.edgeDetectionMaterial,t=this.weightsMaterial;switch(r){case Ho.LOW:e.edgeDetectionThreshold=.15,t.orthogonalSearchSteps=4,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Ho.MEDIUM:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=8,t.diagonalDetection=!1,t.cornerDetection=!1;break;case Ho.HIGH:e.edgeDetectionThreshold=.1,t.orthogonalSearchSteps=16,t.diagonalSearchSteps=8,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break;case Ho.ULTRA:e.edgeDetectionThreshold=.05,t.orthogonalSearchSteps=32,t.diagonalSearchSteps=16,t.cornerRounding=25,t.diagonalDetection=!0,t.cornerDetection=!0;break}}setDepthTexture(r,e=ss){this.edgeDetectionMaterial.depthBuffer=r,this.edgeDetectionMaterial.depthPacking=e}update(r,e,t){this.clearPass.render(r,this.renderTargetEdges),this.edgeDetectionPass.render(r,e,this.renderTargetEdges),this.weightsPass.render(r,this.renderTargetEdges,this.renderTargetWeights)}setSize(r,e){this.edgeDetectionMaterial.setSize(r,e),this.weightsMaterial.setSize(r,e),this.renderTargetEdges.setSize(r,e),this.renderTargetWeights.setSize(r,e)}dispose(){const{searchTexture:r,areaTexture:e}=this.weightsMaterial;r!==null&&e!==null&&(r.dispose(),e.dispose()),super.dispose()}static get searchImageDataURL(){return Nm}static get areaImageDataURL(){return Fm}},JM=`#include <common>
#include <packing>
#include <dithering_pars_fragment>
#define packFloatToRGBA(v) packDepthToRGBA(v)
#define unpackRGBAToFloat(v) unpackRGBAToDepth(v)
#ifdef FRAMEBUFFER_PRECISION_HIGH
uniform mediump sampler2D inputBuffer;
#else
uniform lowp sampler2D inputBuffer;
#endif
#if DEPTH_PACKING == 3201
uniform lowp sampler2D depthBuffer;
#elif defined(GL_FRAGMENT_PRECISION_HIGH)
uniform highp sampler2D depthBuffer;
#else
uniform mediump sampler2D depthBuffer;
#endif
uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;vec4 sRGBToLinear(const in vec4 value){return vec4(mix(pow(value.rgb*0.9478672986+vec3(0.0521327014),vec3(2.4)),value.rgb*0.0773993808,vec3(lessThanEqual(value.rgb,vec3(0.04045)))),value.a);}float readDepth(const in vec2 uv){
#if DEPTH_PACKING == 3201
return unpackRGBAToDepth(texture2D(depthBuffer,uv));
#else
return texture2D(depthBuffer,uv).r;
#endif
}float getViewZ(const in float depth){
#ifdef PERSPECTIVE_CAMERA
return perspectiveDepthToViewZ(depth,cameraNear,cameraFar);
#else
return orthographicDepthToViewZ(depth,cameraNear,cameraFar);
#endif
}vec3 RGBToHCV(const in vec3 RGB){vec4 P=mix(vec4(RGB.bg,-1.0,2.0/3.0),vec4(RGB.gb,0.0,-1.0/3.0),step(RGB.b,RGB.g));vec4 Q=mix(vec4(P.xyw,RGB.r),vec4(RGB.r,P.yzx),step(P.x,RGB.r));float C=Q.x-min(Q.w,Q.y);float H=abs((Q.w-Q.y)/(6.0*C+EPSILON)+Q.z);return vec3(H,C,Q.x);}vec3 RGBToHSL(const in vec3 RGB){vec3 HCV=RGBToHCV(RGB);float L=HCV.z-HCV.y*0.5;float S=HCV.y/(1.0-abs(L*2.0-1.0)+EPSILON);return vec3(HCV.x,S,L);}vec3 HueToRGB(const in float H){float R=abs(H*6.0-3.0)-1.0;float G=2.0-abs(H*6.0-2.0);float B=2.0-abs(H*6.0-4.0);return clamp(vec3(R,G,B),0.0,1.0);}vec3 HSLToRGB(const in vec3 HSL){vec3 RGB=HueToRGB(HSL.x);float C=(1.0-abs(2.0*HSL.z-1.0))*HSL.y;return(RGB-0.5)*C+HSL.z;}FRAGMENT_HEAD void main(){FRAGMENT_MAIN_UV vec4 color0=texture2D(inputBuffer,UV);vec4 color1=vec4(0.0);FRAGMENT_MAIN_IMAGE color0.a=clamp(color0.a,0.0,1.0);gl_FragColor=color0;
#ifdef ENCODE_OUTPUT
#include <colorspace_fragment>
#endif
#include <dithering_fragment>
}`,$M="uniform vec2 resolution;uniform vec2 texelSize;uniform float cameraNear;uniform float cameraFar;uniform float aspect;uniform float time;varying vec2 vUv;VERTEX_HEAD void main(){vUv=position.xy*0.5+0.5;VERTEX_MAIN_SUPPORT gl_Position=vec4(position.xy,1.0,1.0);}",ew=class extends xn{constructor(r,e,t,s,a=!1){super({name:"EffectMaterial",defines:{THREE_REVISION:eo.replace(/\D+/g,""),DEPTH_PACKING:"0",ENCODE_OUTPUT:"1"},uniforms:{inputBuffer:new dt(null),depthBuffer:new dt(null),resolution:new dt(new lt),texelSize:new dt(new lt),cameraNear:new dt(.3),cameraFar:new dt(1e3),aspect:new dt(1),time:new dt(0)},blending:Rn,toneMapped:!1,depthWrite:!1,depthTest:!1,dithering:a}),r&&this.setShaderParts(r),e&&this.setDefines(e),t&&this.setUniforms(t),this.copyCameraSettings(s)}set inputBuffer(r){this.uniforms.inputBuffer.value=r}setInputBuffer(r){this.uniforms.inputBuffer.value=r}get depthBuffer(){return this.uniforms.depthBuffer.value}set depthBuffer(r){this.uniforms.depthBuffer.value=r}get depthPacking(){return Number(this.defines.DEPTH_PACKING)}set depthPacking(r){this.defines.DEPTH_PACKING=r.toFixed(0),this.needsUpdate=!0}setDepthBuffer(r,e=ss){this.depthBuffer=r,this.depthPacking=e}setShaderData(r){this.setShaderParts(r.shaderParts),this.setDefines(r.defines),this.setUniforms(r.uniforms),this.setExtensions(r.extensions)}setShaderParts(r){return this.fragmentShader=JM.replace(Ct.FRAGMENT_HEAD,r.get(Ct.FRAGMENT_HEAD)||"").replace(Ct.FRAGMENT_MAIN_UV,r.get(Ct.FRAGMENT_MAIN_UV)||"").replace(Ct.FRAGMENT_MAIN_IMAGE,r.get(Ct.FRAGMENT_MAIN_IMAGE)||""),this.vertexShader=$M.replace(Ct.VERTEX_HEAD,r.get(Ct.VERTEX_HEAD)||"").replace(Ct.VERTEX_MAIN_SUPPORT,r.get(Ct.VERTEX_MAIN_SUPPORT)||""),this.needsUpdate=!0,this}setDefines(r){for(const e of r.entries())this.defines[e[0]]=e[1];return this.needsUpdate=!0,this}setUniforms(r){for(const e of r.entries())this.uniforms[e[0]]=e[1];return this}setExtensions(r){this.extensions={};for(const e of r)this.extensions[e]=!0;return this}get encodeOutput(){return this.defines.ENCODE_OUTPUT!==void 0}set encodeOutput(r){this.encodeOutput!==r&&(r?this.defines.ENCODE_OUTPUT="1":delete this.defines.ENCODE_OUTPUT,this.needsUpdate=!0)}isOutputEncodingEnabled(r){return this.encodeOutput}setOutputEncodingEnabled(r){this.encodeOutput=r}get time(){return this.uniforms.time.value}set time(r){this.uniforms.time.value=r}setDeltaTime(r){this.uniforms.time.value+=r}adoptCameraSettings(r){this.copyCameraSettings(r)}copyCameraSettings(r){r&&(this.uniforms.cameraNear.value=r.near,this.uniforms.cameraFar.value=r.far,r instanceof qn?this.defines.PERSPECTIVE_CAMERA="1":delete this.defines.PERSPECTIVE_CAMERA,this.needsUpdate=!0)}setSize(r,e){const t=this.uniforms;t.resolution.value.set(r,e),t.texelSize.value.set(1/r,1/e),t.aspect.value=r/e}static get Section(){return Ct}};function Om(r,e,t){for(const s of e){const a="$1"+r+s.charAt(0).toUpperCase()+s.slice(1),l=new RegExp("([^\\.])(\\b"+s+"\\b)","g");for(const u of t.entries())u[1]!==null&&t.set(u[0],u[1].replace(l,a))}}function tw(r,e,t){let s=e.getFragmentShader(),a=e.getVertexShader();const l=s!==void 0&&/mainImage/.test(s),u=s!==void 0&&/mainUv/.test(s);if(t.attributes|=e.getAttributes(),s===void 0)throw new Error(`Missing fragment shader (${e.name})`);if(u&&(t.attributes&Ki.CONVOLUTION)!==0)throw new Error(`Effects that transform UVs are incompatible with convolution effects (${e.name})`);if(!l&&!u)throw new Error(`Could not find mainImage or mainUv function (${e.name})`);{const f=/\w+\s+(\w+)\([\w\s,]*\)\s*{/g,h=t.shaderParts;let m=h.get(Ct.FRAGMENT_HEAD)||"",g=h.get(Ct.FRAGMENT_MAIN_UV)||"",v=h.get(Ct.FRAGMENT_MAIN_IMAGE)||"",_=h.get(Ct.VERTEX_HEAD)||"",S=h.get(Ct.VERTEX_MAIN_SUPPORT)||"";const M=new Set,T=new Set;if(u&&(g+=`	${r}MainUv(UV);
`,t.uvTransformation=!0),a!==null&&/mainSupport/.test(a)){const L=/mainSupport *\([\w\s]*?uv\s*?\)/.test(a);S+=`	${r}MainSupport(`,S+=L?`vUv);
`:`);
`;for(const I of a.matchAll(/(?:varying\s+\w+\s+([\S\s]*?);)/g))for(const R of I[1].split(/\s*,\s*/))t.varyings.add(R),M.add(R),T.add(R);for(const I of a.matchAll(f))T.add(I[1])}for(const L of s.matchAll(f))T.add(L[1]);for(const L of e.defines.keys())T.add(L.replace(/\([\w\s,]*\)/g,""));for(const L of e.uniforms.keys())T.add(L);T.delete("while"),T.delete("for"),T.delete("if"),e.uniforms.forEach((L,I)=>t.uniforms.set(r+I.charAt(0).toUpperCase()+I.slice(1),L)),e.defines.forEach((L,I)=>t.defines.set(r+I.charAt(0).toUpperCase()+I.slice(1),L));const A=new Map([["fragment",s],["vertex",a]]);Om(r,T,t.defines),Om(r,T,A),s=A.get("fragment"),a=A.get("vertex");const x=e.blendMode;if(t.blendModes.set(x.blendFunction,x),l){e.inputColorSpace!==null&&e.inputColorSpace!==t.colorSpace&&(v+=e.inputColorSpace===Lt?`color0 = sRGBTransferOETF(color0);
	`:`color0 = sRGBToLinear(color0);
	`),e.outputColorSpace!==Ci?t.colorSpace=e.outputColorSpace:e.inputColorSpace!==null&&(t.colorSpace=e.inputColorSpace);const L=/MainImage *\([\w\s,]*?depth[\w\s,]*?\)/;v+=`${r}MainImage(color0, UV, `,(t.attributes&Ki.DEPTH)!==0&&L.test(s)&&(v+="depth, ",t.readDepth=!0),v+=`color1);
	`;const I=r+"BlendOpacity";t.uniforms.set(I,x.opacity),v+=`color0 = blend${x.blendFunction}(color0, color1, ${I});

	`,m+=`uniform float ${I};

`}if(m+=s+`
`,a!==null&&(_+=a+`
`),h.set(Ct.FRAGMENT_HEAD,m),h.set(Ct.FRAGMENT_MAIN_UV,g),h.set(Ct.FRAGMENT_MAIN_IMAGE,v),h.set(Ct.VERTEX_HEAD,_),h.set(Ct.VERTEX_MAIN_SUPPORT,S),e.extensions!==null)for(const L of e.extensions)t.extensions.add(L)}}var zm=class extends ai{constructor(r,...e){super("EffectPass"),this.fullscreenMaterial=new ew(null,null,null,r),this.listener=t=>this.handleEvent(t),this.effects=[],this.setEffects(e),this.skipRendering=!1,this.minTime=1,this.maxTime=Number.POSITIVE_INFINITY,this.timeScale=1}set mainScene(r){for(const e of this.effects)e.mainScene=r}set mainCamera(r){this.fullscreenMaterial.copyCameraSettings(r);for(const e of this.effects)e.mainCamera=r}get encodeOutput(){return this.fullscreenMaterial.encodeOutput}set encodeOutput(r){this.fullscreenMaterial.encodeOutput=r}get dithering(){return this.fullscreenMaterial.dithering}set dithering(r){const e=this.fullscreenMaterial;e.dithering=r,e.needsUpdate=!0}setEffects(r){for(const e of this.effects)e.removeEventListener("change",this.listener);this.effects=r.sort((e,t)=>t.attributes-e.attributes);for(const e of this.effects)e.addEventListener("change",this.listener)}updateMaterial(){const r=new VE;let e=0;for(const u of this.effects)if(u.blendMode.blendFunction===mt.DST)r.attributes|=u.getAttributes()&Ki.DEPTH;else{if((r.attributes&u.getAttributes()&Ki.CONVOLUTION)!==0)throw new Error(`Convolution effects cannot be merged (${u.name})`);tw("e"+e++,u,r)}let t=r.shaderParts.get(Ct.FRAGMENT_HEAD),s=r.shaderParts.get(Ct.FRAGMENT_MAIN_IMAGE),a=r.shaderParts.get(Ct.FRAGMENT_MAIN_UV);const l=/\bblend\b/g;for(const u of r.blendModes.values())t+=u.getShaderCode().replace(l,`blend${u.blendFunction}`)+`
`;(r.attributes&Ki.DEPTH)!==0?(r.readDepth&&(s=`float depth = readDepth(UV);

	`+s),this.needsDepthTexture=this.getDepthTexture()===null):this.needsDepthTexture=!1,r.colorSpace===Lt&&(s+=`color0 = sRGBToLinear(color0);
	`),r.uvTransformation?(a=`vec2 transformedUv = vUv;
`+a,r.defines.set("UV","transformedUv")):r.defines.set("UV","vUv"),r.shaderParts.set(Ct.FRAGMENT_HEAD,t),r.shaderParts.set(Ct.FRAGMENT_MAIN_IMAGE,s),r.shaderParts.set(Ct.FRAGMENT_MAIN_UV,a);for(const[u,f]of r.shaderParts)f!==null&&r.shaderParts.set(u,f.trim().replace(/^#/,`
#`));this.skipRendering=e===0,this.needsSwap=!this.skipRendering,this.fullscreenMaterial.setShaderData(r)}recompile(){this.updateMaterial()}getDepthTexture(){return this.fullscreenMaterial.depthBuffer}setDepthTexture(r,e=ss){this.fullscreenMaterial.depthBuffer=r,this.fullscreenMaterial.depthPacking=e;for(const t of this.effects)t.setDepthTexture(r,e)}render(r,e,t,s,a){for(const l of this.effects)l.update(r,e,s);if(!this.skipRendering||this.renderToScreen){const l=this.fullscreenMaterial;l.inputBuffer=e.texture,l.time+=s*this.timeScale,r.setRenderTarget(this.renderToScreen?null:t),r.render(this.scene,this.camera)}}setSize(r,e){this.fullscreenMaterial.setSize(r,e);for(const t of this.effects)t.setSize(r,e)}initialize(r,e,t){this.renderer=r;for(const s of this.effects)s.initialize(r,e,t);this.updateMaterial(),t!==void 0&&t!==vn&&(this.fullscreenMaterial.defines.FRAMEBUFFER_PRECISION_HIGH="1")}dispose(){super.dispose();for(const r of this.effects)r.removeEventListener("change",this.listener),r.dispose()}handleEvent(r){switch(r.type){case"change":this.recompile();break}}};const Jo=()=>{const r=kt.useRef(null),e=kt.useRef();return kt.useEffect(()=>{if(!r.current)return;const t=r.current.offsetWidth,s=r.current.offsetHeight,a=new Hf,l=new qn(75,t/s,1,1e3);l.position.z=60;const u=new UE({antialias:!0,alpha:!0});u.setSize(t,s),r.current.appendChild(u.domElement);const f=new GE(u);f.addPass(new HM(a,l)),f.addPass(new zm(l,new kM({intensity:1.6}))),f.addPass(new zm(l,new ZM)),a.add(new qx(16777215,1));const h=["[","]","{","}","(",")","=","/","<",">",";"],m=["#00ffff","#39ff14","#ff00c8","#9d00ff","#38bdf8"],g=new Go;a.add(g);const v=(T,A)=>{const x=document.createElement("canvas");x.width=256,x.height=256;const L=x.getContext("2d");return L.fillStyle="black",L.fillRect(0,0,x.width,x.height),L.fillStyle=A,L.shadowColor=A,L.shadowBlur=25,L.font="bold 140px monospace",L.textAlign="center",L.textBaseline="middle",L.fillText(T,x.width/2,x.height/2),new Wx(x)},_=200;for(let T=0;T<_;T++){const A=h[T%h.length],x=m[T%m.length],L=v(A,x),I=new ed({map:L,transparent:!0,depthWrite:!1}),R=new _i(new Zo(4.5,4.5),I);R.position.set((Math.random()-.5)*200,(Math.random()-.5)*200,(Math.random()-.5)*200),R.lookAt(l.position),g.add(R)}const S=()=>{e.current=requestAnimationFrame(S),g.rotation.y+=8e-4,g.rotation.x+=5e-4,f.render()};S();const M=()=>{if(!r.current)return;const T=r.current.offsetWidth,A=r.current.offsetHeight;l.aspect=T/A,l.updateProjectionMatrix(),u.setSize(T,A),f.setSize(T,A)};return window.addEventListener("resize",M),()=>{var T;cancelAnimationFrame(e.current),u.dispose(),window.removeEventListener("resize",M),(T=r.current)!=null&&T.contains(u.domElement)&&r.current.removeChild(u.domElement)}},[]),O.jsx("div",{ref:r,className:"absolute inset-0 w-full h-full pointer-events-none z-0"})},nw=()=>{const[r,e]=kt.useState(!1);kt.useEffect(()=>{e(!0)},[]);const t=()=>{const s=document.getElementById("about");s&&s.scrollIntoView({behavior:"smooth"})};return O.jsxs("section",{className:"relative min-h-screen bg-black overflow-hidden text-white",children:[O.jsx(Jo,{}),O.jsxs("div",{className:"relative z-10 pt-24",children:[O.jsxs("div",{className:"absolute inset-0 overflow-hidden",children:[O.jsx("div",{className:"absolute -top-1/2 -right-1/2 w-full h-full bg-blue rounded-full blur-3xl animate-pulse"}),O.jsx("div",{className:"absolute -bottom-1/2 -left-1/2 w-full h-full bg-blue rounded-full blur-3xl animate-pulse delay-1000"})]}),O.jsxs("div",{className:"container mx-auto px-4 text-center relative z-10",children:[O.jsx("div",{className:`flex justify-center mb-6 transition-all duration-1000 ${r?"opacity-100 scale-100":"opacity-0 scale-90"}`,children:O.jsxs("div",{className:"relative w-60 h-60 md:w-52 md:h-52 rounded-full overflow-hidden shadow-lg border-4 border-neonBlue/80 bg-gradient-to-tr from-neonBlue/30 via-neonPurple/20 to-neonGreen/20 animate-pulse",children:[O.jsx("img",{src:"/Samuel.jpg",alt:"Samuel Olvera",className:"w-full h-full object-cover rounded-full"}),O.jsx("span",{className:"absolute inset-0 rounded-full border-4 border-primary animate-pulse pointer-events-none"})]})}),O.jsxs("div",{className:`transition-all duration-1000 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[O.jsxs("h1",{className:"text-5xl md:text-7xl font-extrabold mb-4 bg-futuristic-gradient bg-clip-text text-neonBlue drop-shadow-neon-blue font-futuristic relative",children:[O.jsx("span",{className:"relative z-10",children:"Samuel Olvera"}),O.jsx("span",{className:"absolute inset-0 blur-md opacity-60 text-neonBlue pointer-events-none select-none","aria-hidden":"true",children:"Samuel Olvera"})]}),O.jsxs("h2",{className:`flex items-center justify-center gap-2 text-xl md:text-2xl font-light mb-6 text-neonBlue transition-all duration-1000 delay-300 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"} font-futuristic`,children:[O.jsx(m0,{size:28,className:"text-neonBlue"}),"Estudiante de Ingeniería en Ciencias de la Computación."]}),O.jsxs("div",{className:`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10 max-w-4xl mx-auto transition-all duration-1000 delay-300 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[O.jsxs("div",{className:"bg-primary/10 rounded-3xl shadow-card p-6 flex flex-col items-center hover:scale-105 transition-transform group border border-neonBlue",children:[O.jsx("span",{className:"bg-neonBlue/20 p-4 rounded-full mb-3 group-hover:bg-neonBlue/40 transition-colors",children:O.jsxs("svg",{width:"32",height:"32",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",className:"text-neonBlue",children:[O.jsx("rect",{x:"3",y:"4",width:"18",height:"14",rx:"2"}),O.jsx("path",{d:"M8 20h8"}),O.jsx("path",{d:"M12 16v4"})]})}),O.jsx("span",{className:"text-base font-semibold text-neonBlue mb-1",children:"Desarrollo Web"})]}),O.jsxs("div",{className:"bg-primary/10 rounded-3xl shadow-card p-6 flex flex-col items-center hover:scale-105 transition-transform group border border-neonPurple/30",children:[O.jsx("span",{className:"bg-neonPurple/20 p-4 rounded-full mb-3 group-hover:bg-neonPurple/40 transition-colors",children:O.jsxs("svg",{width:"32",height:"32",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",className:"text-neonPurple",children:[O.jsx("ellipse",{cx:"12",cy:"5",rx:"9",ry:"3"}),O.jsx("path",{d:"M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"}),O.jsx("path",{d:"M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"})]})}),O.jsx("span",{className:"text-base font-semibold text-neonPurple mb-1",children:"Bases de Datos"})]}),O.jsxs("div",{className:"bg-primary/10 rounded-3xl shadow-card p-6 flex flex-col items-center hover:scale-105 transition-transform group border border-neonGreen/30",children:[O.jsx("span",{className:"bg-neonGreen/20 p-4 rounded-full mb-3 group-hover:bg-neonGreen/40 transition-colors",children:O.jsxs("svg",{width:"32",height:"32",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",className:"text-neonGreen",children:[O.jsx("rect",{x:"6",y:"2",width:"12",height:"20",rx:"3"}),O.jsx("circle",{cx:"12",cy:"18",r:"1"})]})}),O.jsx("span",{className:"text-base font-semibold text-neonGreen mb-1",children:"Desarrollo Móvil"})]}),O.jsxs("div",{className:"bg-primary/10 rounded-3xl shadow-card p-6 flex flex-col items-center hover:scale-105 transition-transform group border border-neonOrange/30",children:[O.jsx("span",{className:"bg-neonOrange/20 p-4 rounded-full mb-3 group-hover:bg-neonOrange/40 transition-colors",children:O.jsxs("svg",{width:"32",height:"32",fill:"none",stroke:"currentColor",strokeWidth:"2",viewBox:"0 0 24 24",className:"text-neonOrange",children:[O.jsx("rect",{x:"3",y:"7",width:"18",height:"13",rx:"2"}),O.jsx("path",{d:"M8 7V5a4 4 0 1 1 8 0v2"})]})}),O.jsx("span",{className:"text-base font-semibold text-neonOrange mb-1",children:"UX/UI"})]})]}),O.jsx("p",{className:`text-lg md:text-xl text-secondary max-w-2xl mx-auto mb-12 leading-relaxed transition-all duration-1000 delay-500 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:"Apasionado por la creación de soluciones tecnológicas modernas y eficientes, combinando desarrollo web, móvil, bases de datos y diseño UX/UI para impactar positivamente en el mundo real."}),O.jsxs("div",{className:`flex justify-center space-x-6 mb-12 transition-all duration-1000 delay-700 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[O.jsx("a",{href:"https://github.com/SamuelOlveraa",target:"_blank",rel:"noopener noreferrer",className:"p-3 bg-neonBlue/70 backdrop-blur-sm rounded-full hover:bg-neonBlue/95 transition-all duration-300 hover:scale-110 shadow-neon-blue",children:O.jsx(Hm,{size:24})}),O.jsx("a",{href:"https://linkedin.com/in/samuel-olvera-cervantes-422338367",target:"_blank",rel:"noopener noreferrer",className:"p-3 bg-neonPurple/70 backdrop-blur-sm rounded-full hover:bg-neonPurple/95 transition-all duration-300 hover:scale-110 shadow-neon-purple",children:O.jsx(Gm,{size:24})}),O.jsx("a",{href:"mailto:samuolvera332@gmail.com",className:"p-3 bg-neonGreen/70 backdrop-blur-sm rounded-full hover:bg-neonGreen/95 transition-all duration-300 hover:scale-110 shadow-neon-green",children:O.jsx(Vm,{size:24})})]}),O.jsxs("button",{onClick:t,className:`inline-flex items-center space-x-2 bg-accent hover:bg-primary px-8 py-4 rounded-3xl font-semibold transition-all duration-300 hover:scale-105 hover:shadow-neon-blue font-futuristic ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:"900ms"},children:[O.jsx("span",{children:"Conoce mi trabajo"}),O.jsx(Np,{size:20})]}),O.jsx("div",{className:"h-8"})]})]}),O.jsx("div",{className:"absolute bottom-6 left-1/2 transform -translate-x-1/2 animate-bounce",children:O.jsx(Np,{size:24,className:"text-white"})})]})]})},iw=()=>{const[r,e]=kt.useState(!1);kt.useEffect(()=>{const s=new IntersectionObserver(l=>{l.forEach(u=>{u.isIntersecting&&e(!0)})},{threshold:.1}),a=document.getElementById("about");return a&&s.observe(a),()=>{a&&s.unobserve(a)}},[]);const t=[{icon:p0,title:"Desarrollo Web",description:"Implementación de interfaces y sistemas web modernos con HTML5, React, TypeScript y Tailwind CSS. Enfoque en rendimiento, modularidad y diseño responsivo.",bg:"from-neonBlue/30 to-neonBlue/30",shadow:"shadow-neon-blue",border:"border-neonBlue",text:"text-neonBlue"},{icon:Wm,title:"Desarrollo Móvil",description:"Creación de aplicaciones móviles nativas y cross-platform usando Dart y Flutter. Diseño enfocado en usabilidad, animaciones fluidas y optimización multiplataforma.",bg:"from-neonGreen/30 to-neonGreen/30",shadow:"shadow-neon-green",border:"border-neonGreen",text:"text-neonGreen"},{icon:km,title:"Gestión de Bases de Datos",description:"Modelado, optimización y administración de bases de datos SQL como MySQL y SQLite. Énfasis en integridad, eficiencia de consultas y escalabilidad.",bg:"from-neonPurple/30 to-neonPurple/30",shadow:"shadow-neon-purple",border:"border-neonPurple",text:"text-neonPurple"},{icon:E0,title:"Análisis de Datos",description:"Exploración, análisis y visualización de datos mediante Python, utilizando bibliotecas como Pandas, NumPy, Matplotlib y NLTK para inferencia y predicción.",bg:"from-highlight/30 to-highlight/30",shadow:"shadow-highlight",border:"border-highlight",text:"text-highlight"}];return O.jsxs("section",{className:"relative min-h-screen bg-black overflow-hidden text-white",id:"about",children:[O.jsx(Jo,{}),O.jsxs("div",{className:"relative z-10 pt-24",children:[O.jsxs("div",{className:`text-center mb-10 transition-all duration-1000 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[O.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-neonBlue mb-6 font-futuristic tracking-wide drop-shadow-neon-blue",children:"Sobre Mí"}),O.jsx("div",{className:"w-32 h-1 bg-gradient-to-r from-white to-neonPurple mx-auto mb-8 rounded-full shadow-neon-blue"}),O.jsxs("p",{className:"text-lg text-secondary max-w-3xl mx-auto leading-relaxed font-sans",children:["Soy estudiante de noveno semestre de Ingeniería en Ciencias de la Computación en la Benemérita Universidad Autónoma de Puebla, con orientación al desarrollo de soluciones tecnológicas.",O.jsx("br",{}),"Tengo experiencia en programación web, desarrollo móvil y análisis de datos, aplicada en sitios web, aplicaciones móviles y proyectos académicos. Me adapto con facilidad, aprendo rápidamente, trabajo en equipo y aporto creatividad y responsabilidad."]})]}),O.jsx("div",{className:"flex flex-wrap justify-center gap-4 p-8 bg-transparent",children:t.map(({icon:s,title:a,description:l,bg:u,shadow:f,border:h,text:m},g)=>O.jsxs("div",{className:`
                group relative w-72 h-80 transition-all duration-500
                hover:scale-105
                bg-gradient-to-br ${u} ${f} ${h}
                border text-white rounded-3xl shadow-card
                overflow-hidden
              `,style:{clipPath:"polygon(0% 20%, 20% 0%, 100% 0%, 100% 80%, 80% 100%, 0% 100%)"},children:[O.jsx("div",{className:"absolute inset-0"}),O.jsxs("div",{className:"relative z-10 flex flex-col items-start justify-end h-full p-8 text-left",children:[O.jsx(s,{className:`text-4xl mb-6 ${m}`}),O.jsx("h3",{className:`text-xl font-bold font-futuristic mb-2 ${m}`,children:a}),O.jsx("p",{className:"text-sm text-secondary font-sans",children:l})]})]},g))})]})]})},rw=()=>{const[r,e]=kt.useState(!1),[t,s]=kt.useState(null);kt.useEffect(()=>{const l=new IntersectionObserver(f=>{f.forEach(h=>{h.isIntersecting&&e(!0)})},{threshold:.1}),u=document.getElementById("projects");return u&&l.observe(u),()=>{u&&l.unobserve(u)}},[]);const a=[{id:1,title:"Página Web para Consultorio Médico (Mayo 2023)",description:"Plataforma completa para la gestión de consultorios médicos con agenda, historiales clínicos y facturación.",longDescription:"Sistema integral que digitaliza la gestión médica, incluye citas online, historiales digitales, prescripciones electrónicas y dashboard administrativo.",icon:A0,technologies:["HTML","PHP","JavaScript","MySQL","Bootstrap","CSS"],image:"https://expomedicalcr.com/especialidades.jpeg",bg:"from-accent/80 to-accent/80",shadow:"shadow-neon-blue"},{id:2,title:"Sistema de Gestión para Agencia de Autos (Noviembre 2024)",description:"Sistema de gestión completo para agencias de automóviles con inventario, ventas y CRM integrado.",longDescription:"Plataforma que optimiza la gestión de concesionarios con control de inventario, seguimiento de leads, cotizaciones automáticas y reportes de ventas.",icon:d0,technologies:["HTML","PHP","MySQL","Bootstrap","JavaScript","CSS","XML"],image:"https://chevroletcr.com/blog/wp-content/uploads/2025/02/Chevrolet-ImagenBlog-1024x670.webp",bg:"from-neonGreen/80 to-neonGreen/80",shadow:"shadow-neon-green"},{id:3,title:"Aplicación Móvil de Logística de Transporte (Marzo 2025)",description:"Aplicación móvil para optimización de rutas de transporte con tracking GPS en tiempo real.",longDescription:"App que revoluciona la logística de transporte con optimización de rutas mediante IA, seguimiento GPS, notificaciones push y análisis de eficiencia.",icon:S0,technologies:["Flutter","Dart","Google Maps API","SQLite"],image:"https://www.sotcarga.com/images/22/1/Apps-transporte.jpg",bg:"from-neonPurple/80 to-neonPurple/80",shadow:"shadow-neon-purple"},{id:4,title:"Predicción de Resultados Electorales a partir de Tweets (Marzo 2025)",description:"Plataforma de análisis predictivo para tendencias electorales usando machine learning y redes sociales.",longDescription:"Sistema avanzado de análisis electoral que procesa datos de redes sociales, encuestas y tendencias históricas para predicciones políticas precisas.",icon:f0,technologies:["Python","Pandas","NLTK"],image:"https://img.innovaciondigital360.com/wp-content/uploads/2024/10/24224351/sistema-de-gestion-de-datos-con-concepto-de-business-analytics.jpg",bg:"from-neonOrange/80 to-neonOrange/80",shadow:"shadow-accent"}];return O.jsxs("section",{className:"relative min-h-screen bg-black overflow-hidden text-white",id:"projects",children:[O.jsx(Jo,{}),O.jsxs("div",{className:"container mx-auto px-6",children:[O.jsxs("div",{className:`text-center mb-16 transition-all duration-1000 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[O.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-neonBlue mb-6 font-futuristic",children:"Proyectos Destacados"}),O.jsx("div",{className:"w-32 h-1 bg-gradient-to-r from-white to-neonPurple mx-auto mb-8 rounded-full shadow-neon-blue"}),O.jsx("p",{className:"text-lg text-secondary max-w-3xl mx-auto leading-relaxed font-sans",children:"Una selección de proyectos que demuestran mi experiencia en desarrollo full-stack, ciencia de datos y soluciones innovadoras para diferentes industrias."})]}),O.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:a.map(({id:l,title:u,description:f,longDescription:h,icon:m,technologies:g,image:v,bg:_,shadow:S},M)=>O.jsxs("div",{className:`group relative bg-primary/60 rounded-3xl shadow-card hover:shadow-accent overflow-hidden transition-all duration-500 hover:-translate-y-2 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:`${M*200}ms`},onMouseEnter:()=>s(l),onMouseLeave:()=>s(null),children:[O.jsxs("div",{className:"relative h-48 overflow-hidden",children:[O.jsx("img",{src:v,alt:u,className:"w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"}),O.jsx("div",{className:"absolute inset-0 bg-black/30 group-hover:bg-black/50 transition-colors duration-300"}),O.jsx("div",{className:`absolute top-4 right-4 w-12 h-12 rounded-xl bg-gradient-to-br ${_} ${S} flex items-center justify-center`,children:O.jsx(m,{size:24,className:"text-white"})}),O.jsx("div",{className:`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8 transition-opacity duration-300 ${t===l?"opacity-100":"opacity-0"}`,children:O.jsx("div",{className:"text-white",children:O.jsx("p",{className:"text-sm leading-relaxed mb-1",children:h})})})]}),O.jsxs("div",{className:"p-6",children:[O.jsx("h3",{className:"text-xl font-bold text-neonBlue mb-3 group-hover:text-highlight transition-colors font-futuristic",children:u}),O.jsx("p",{className:"text-secondary mb-4 leading-relaxed font-sans",children:f}),O.jsx("div",{className:"flex flex-wrap gap-2",children:g.map(T=>O.jsx("span",{className:"px-3 py-1 bg-primary/80 text-neonBlue text-sm rounded-full font-mono hover:bg-primary hover:text-white transition-colors",children:T},T))})]})]},l))})]}),O.jsx("div",{className:"h-16"})]})},sw=()=>{const[r,e]=kt.useState(!1);kt.useEffect(()=>{const s=new IntersectionObserver(l=>{l.forEach(u=>{u.isIntersecting&&e(!0)})},{threshold:.1}),a=document.getElementById("skills");return a&&s.observe(a),()=>{a&&s.unobserve(a)}},[]);const t=[{title:"Desarrollo Web",icon:Xf,skills:["HTML","CSS","JavaScript","React","TypeScript"],color:"from-neonBlue to-neonBlue",shadow:"shadow-neon-blue"},{title:"Desarrollo Móvil",icon:Wm,skills:["Flutter","Dart","React"],color:"from-neonGreen to-neonGreen",shadow:"shadow-neon-green"},{title:"Bases de Datos",icon:km,skills:["MySQL","SQLite"],color:"from-neonPurple to-neonPurple",shadow:"shadow-neon-purple"},{title:"Análisis de Datos",icon:u0,skills:["Python","Pandas","NumPy","Excel"],color:"from-neonOrange to-neonOrange",shadow:"shadow-neon-orange"},{title:"Git Básico",icon:h0,skills:["Git","GitHub"],color:"from-highlight to-highlight",shadow:"shadow-neon-highlight"}];return O.jsxs("section",{className:"relative min-h-screen bg-black overflow-hidden text-white",id:"skills",children:[O.jsx(Jo,{}),O.jsxs("div",{className:"relative z-10 pt-24",children:[O.jsxs("div",{className:`text-center mb-10 transition-all duration-1000 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[O.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-neonBlue mb-6 font-futuristic",children:"Habilidades Técnicas"}),O.jsx("div",{className:"w-32 h-1 bg-gradient-to-r from-white to-neonPurple mx-auto mb-8 rounded-full shadow-neon-blue"}),O.jsx("p",{className:"text-lg text-secondary max-w-3xl mx-auto leading-relaxed font-sans",children:"Un conjunto diverso de tecnologías y herramientas que me permiten crear soluciones completas desde el frontend hasta el backend, incluyendo análisis de datos."})]}),O.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 max-w-6xl mx-auto px-4 transition-all duration-1000",children:t.map(({title:s,icon:a,skills:l,color:u,shadow:f},h)=>O.jsx("div",{className:`group bg-primary/70 rounded-3xl ${f} border border-neonBlue hover:border-accent transition-all duration-500 hover:-translate-y-2 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,style:{transitionDelay:`${h*100}ms`,willChange:"transform, opacity"},children:O.jsxs("div",{className:"p-10 ",children:[O.jsx("div",{className:`w-16 h-26 rounded-2xl bg-accent/30 bg-gradient-to-br ${u} flex items-center justify-center mb-16 group-hover:scale-110 transition-transform duration-300`,children:O.jsx(a,{size:32,className:"text-codeBg"})}),O.jsx("h3",{className:"text-xl font-bold text-neonBlue/90 mb-1 group-hover:text-highlight transition-colors font-futuristic",children:s}),O.jsx("div",{className:"space-y-3",children:l.map((m,g)=>O.jsx("div",{className:`flex items-center justify-between p-3 bg-primary/40 rounded-lg hover:bg-neonBlue/20 transition-all duration-300 ${r?"opacity-100 translate-x-0":"opacity-0 -translate-x-4"}`,style:{transitionDelay:`${h*100+g*50}ms`},children:O.jsx("span",{className:"font-medium text-neonBlue hover:text-highlight transition-colors font-mono",children:m})},m))})]})},s))})]}),O.jsx("div",{className:"h-16"})]})},ow=()=>{const[r,e]=kt.useState(!1),[t,s]=kt.useState({name:"",email:"",subject:"",message:""}),[a,l]=kt.useState(null);kt.useEffect(()=>{const m=new IntersectionObserver(v=>{v.forEach(_=>{_.isIntersecting&&e(!0)})},{threshold:.1}),g=document.getElementById("contact");return g&&m.observe(g),()=>{g&&m.unobserve(g)}},[]);const u=[{icon:Vm,label:"Email",value:"samuolvera332@gmail.com",href:"mailto:samuolvera332@gmail.com"},{icon:v0,label:"Ubicación",value:"Puebla, México",href:"https://maps.google.com"}],f=[{icon:Hm,label:"GitHub",href:"https://github.com/SamuelOlveraa",color:"hover:text-neonPurple"},{icon:Gm,label:"LinkedIn",href:"https://linkedin.com/in/samuel-olvera-cervantes-422338367",color:"hover:text-neonPurple"}],h=async m=>{if(m.preventDefault(),!t.name||!t.email||!t.subject||!t.message){alert("Por favor completa todos los campos.");return}try{const g=await fetch("http://localhost:5050/api/contact",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(t)});if(g.ok)alert("¡Mensaje enviado con éxito! Te contactaré pronto."),s({name:"",email:"",subject:"",message:""});else{const v=await g.json();alert(`Error al enviar: ${v.error||"Intenta más tarde."}`)}}catch(g){console.error("Error al enviar el formulario:",g),alert("Hubo un problema al enviar el mensaje.")}};return O.jsxs("section",{id:"contact",className:"relative min-h-screen bg-black overflow-hidden text-white",children:[O.jsx(Jo,{}),O.jsxs("div",{className:"container mx-auto px-6",children:[O.jsxs("div",{className:`text-center mb-16 transition-all duration-1000 ${r?"opacity-100 translate-y-0":"opacity-0 translate-y-10"}`,children:[O.jsx("h2",{className:"text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-neon-green font-futuristic",children:"Contacto"}),O.jsx("div",{className:"w-32 h-1 bg-gradient-to-r from-white to-neonPurple mx-auto mb-8 rounded-full shadow-neon-blue"}),O.jsxs("p",{className:"text-lg text-secondary max-w-3xl mx-auto leading-relaxed font-sans",children:["¿Tienes un proyecto en mente? Me encantaría colaborar contigo.",O.jsx("br",{}),"Hablemos sobre cómo puedo ayudarte a crear algo increíble."]})]}),O.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[O.jsxs("div",{className:`transition-all duration-1000 delay-200 ${r?"opacity-100 translate-x-0":"opacity-0 -translate-x-10"}`,children:[O.jsx("h3",{className:"text-2xl font-bold text-neonBlue mb-8 drop-shadow-neon-blue font-futuristic",children:"Información de Contacto"}),O.jsx("div",{className:"space-y-6 mb-8",children:u.map((m,g)=>O.jsxs("a",{href:m.href,className:"flex items-center space-x-4 p-4 bg-codeBg/70 rounded-3xl shadow-card hover:shadow-neon-blue transition-all duration-300 hover:-translate-y-1 group border border-neonBlue/30",children:[O.jsx("div",{className:"w-14 h-14 bg-gradient-to-br from-accent to-accent rounded-3xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-neon-blue",children:O.jsx(m.icon,{size:28,className:"text-white"})}),O.jsxs("div",{children:[O.jsx("p",{className:"text-xs text-secondary font-medium",children:m.label}),O.jsx("p",{className:"text-neonBlue font-semibold group-hover:text-highlight transition-colors",children:m.value})]})]},g))}),O.jsxs("div",{children:[O.jsx("h4",{className:"text-lg font-semibold text-neonBlue mb-4 font-futuristic",children:"Sígueme en redes"}),O.jsx("div",{className:"flex space-x-4",children:f.map((m,g)=>O.jsx("a",{href:m.href,target:"_blank",rel:"noopener noreferrer",className:`w-12 h-12 bg-codeBg rounded-3xl shadow-card flex items-center justify-center transition-all duration-300 hover:shadow-neon-blue hover:-translate-y-1 text-neonBlue ${m.color}`,children:O.jsx(m.icon,{size:22})},g))})]})]}),O.jsx("div",{className:`transition-all duration-1000 delay-400 ${r?"opacity-100 translate-x-0":"opacity-0 translate-x-10"}`,children:O.jsxs("form",{onSubmit:h,className:"bg-codeBg/50 rounded-3xl shadow-card p-8 border border-neonBlue",children:[O.jsx("h3",{className:"text-2xl font-bold text-white mb-6 drop-shadow-neon-pink font-futuristic",children:"Envíame un mensaje"}),O.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6 mb-6",children:[O.jsx("div",{className:"relative",children:O.jsx("input",{type:"text",name:"name",value:t.name,onChange:m=>s({...t,name:m.target.value}),onFocus:()=>l("name"),onBlur:()=>l(null),className:`w-full px-4 py-3 border rounded-xl bg-transparent text-white focus:outline-none transition-all duration-300 font-futuristic ${a==="name"?"border-neonBlue shadow-neon-blue scale-105":"border-secondary"}`,placeholder:"Tu nombre",required:!0})}),O.jsx("div",{className:"relative",children:O.jsx("input",{type:"email",name:"email",value:t.email,onChange:m=>s({...t,email:m.target.value}),onFocus:()=>l("email"),onBlur:()=>l(null),className:`w-full px-4 py-3 border rounded-xl bg-transparent text-white focus:outline-none transition-all duration-300 font-futuristic ${a==="email"?"border-neonBlue shadow-neon-blue scale-105":"border-secondary"}`,placeholder:"Tu email",required:!0})})]}),O.jsx("div",{className:"mb-6",children:O.jsx("input",{type:"text",name:"subject",value:t.subject,onChange:m=>s({...t,subject:m.target.value}),onFocus:()=>l("subject"),onBlur:()=>l(null),className:`w-full px-4 py-3 border rounded-xl bg-transparent text-white focus:outline-none transition-all duration-300 font-futuristic ${a==="subject"?"border-neonBlue shadow-neon-blue scale-105":"border-secondary"}`,placeholder:"Asunto",required:!0})}),O.jsx("div",{className:"mb-6",children:O.jsx("textarea",{name:"message",rows:5,value:t.message,onChange:m=>s({...t,message:m.target.value}),onFocus:()=>l("message"),onBlur:()=>l(null),className:`w-full px-4 py-3 border rounded-xl bg-transparent text-white focus:outline-none transition-all duration-300 resize-none font-futuristic ${a==="message"?"border-neonBlue shadow-neon-blue scale-105":"border-secondary"}`,placeholder:"Tu mensaje...",required:!0})}),O.jsxs("button",{type:"submit",className:"w-full bg-accent/80 text-white font-semibold py-4 rounded-xl hover:shadow-neon-blue transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2 font-futuristic",children:[O.jsx(_0,{size:20}),O.jsx("span",{children:"Enviar Mensaje"})]})]})})]})]})]})},aw=()=>O.jsx("footer",{className:"bg-black text-white py-12 border-t border-neonBlue/30",children:O.jsxs("div",{className:"container mx-auto px-6",children:[O.jsxs("div",{className:"flex flex-col md:flex-row items-center justify-between gap-6",children:[O.jsxs("div",{className:"text-center md:text-left",children:[O.jsx("h2",{className:"text-2xl font-bold font-futuristic text-neonBlue drop-shadow-neon-blue mb-1",children:"Samuel Olvera"}),O.jsx("p",{className:"text-sm text-secondary font-sans",children:"Full-Stack Developer & Data Scientist"})]}),O.jsxs("div",{className:"flex items-center text-sm text-secondary space-x-2 font-mono text-center",children:[O.jsx("span",{children:"Hecho con"}),O.jsx(g0,{size:16,className:"text-neonPink animate-pulse drop-shadow-neon-pink"}),O.jsx("span",{children:"y"}),O.jsx(Xf,{size:16,className:"text-neonBlue drop-shadow-neon-blue"}),O.jsxs("span",{children:["por ",O.jsx("span",{className:"text-neonBlue font-bold",children:"Samuel Olvera"})," © ",new Date().getFullYear()]})]})]}),O.jsx("div",{className:"mt-8 pt-6 border-t border-secondary text-center text-xs text-secondary font-sans",children:O.jsx("p",{children:"© Todos los derechos reservados. Este sitio fue diseñado con pasión, precisión y un toque de neón ⚡"})})]})});function lw(){const[r,e]=kt.useState("home");return kt.useEffect(()=>{const t=()=>{const s=["home","about","projects","skills","contact"],a=window.scrollY;s.forEach(l=>{const u=document.getElementById(l);if(u){const f=u.offsetTop-100,h=f+u.offsetHeight;a>=f&&a<h&&e(l)}})};return window.addEventListener("scroll",t),()=>window.removeEventListener("scroll",t)},[]),O.jsxs("div",{className:"min-h-screen bg-slate-50",children:[O.jsx(M0,{activeSection:r}),O.jsxs("main",{children:[O.jsx(nw,{}),O.jsx(iw,{}),O.jsx(rw,{}),O.jsx(sw,{}),O.jsx(ow,{})]}),O.jsx(aw,{})]})}a0.createRoot(document.getElementById("root")).render(O.jsx(kt.StrictMode,{children:O.jsx(lw,{})}));
