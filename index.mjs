// Copyright (c) 2024 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.2.1-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.2.1-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.2.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2object@v0.2.1-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.2.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.2.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@v0.2.1-esm/index.mjs";var o="throw";function a(a,m,l,j){if(!t(l))throw new TypeError(n("1XF3N",l));if(s(a))return function(r,s,t,e){var i,n,a,m,l,j,f,c,h,p,v;if(m=r.length,f=r.shape,i=r.data,c=r.strides,h=r.offset,n=r.order,l=r.accessors[0],j=r.ref,0===f.length)return t.call(e,s,l(i,h),0,j);for(a=s,v=m-1;v>=0;v--)p=d(f,c,h,n,v,o),a=t.call(e,a,l(i,p),v,j);return a}(e(a),m,l,j);if(r(a))return function(r,s,t,e){var i,n,d,o;for(i=r.data,n=r.accessors[0],d=s,o=i.length-1;o>=0;o--)d=t.call(e,d,n(i,o),o,i);return d}(i(a),m,l,j);throw new TypeError(n("1XFBH",a))}export{a as default};
//# sourceMappingURL=index.mjs.map
