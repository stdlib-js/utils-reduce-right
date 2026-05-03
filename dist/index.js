"use strict";var d=function(r,e){return function(){return e||r((e={exports:{}}).exports,e),e.exports}};var y=d(function(G,q){
var j=require('@stdlib/ndarray-base-vind2bind/dist'),F="throw";function x(r,e,a,u){var i,s,t,n,o,c,f,g,l,h,v;if(n=r.length,f=r.shape,i=r.data,g=r.strides,l=r.offset,s=r.order,o=r.accessors[0],c=r.ref,f.length===0)return a.call(u,e,o(i,l),0,c);for(t=e,v=n-1;v>=0;v--)h=j(f,g,l,s,v,F),t=a.call(u,t,o(i,h),v,c);return t}q.exports=x
});var m=d(function(H,b){
function E(r,e,a,u){var i,s,t,n;for(i=r.data,s=r.accessors[0],t=e,n=i.length-1;n>=0;n--)t=a.call(u,t,s(i,n),n,i);return t}b.exports=E
});var w=d(function(I,k){
var R=require('@stdlib/assert-is-array-like-object/dist'),T=require('@stdlib/assert-is-ndarray-like/dist'),L=require('@stdlib/assert-is-function/dist'),O=require('@stdlib/ndarray-base-ndarraylike2object/dist'),V=require('@stdlib/array-base-arraylike2object/dist'),p=require('@stdlib/error-tools-fmtprodmsg/dist'),D=y(),M=m();function z(r,e,a,u){if(!L(a))throw new TypeError(p('1XF3N',a));if(T(r))return D(O(r),e,a,u);if(R(r))return M(V(r),e,a,u);throw new TypeError(p('1XFBH',r))}k.exports=z
});var B=w();module.exports=B;
/** @license Apache-2.0 */
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
