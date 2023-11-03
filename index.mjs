// Copyright (c) 2023 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@v0.1.0-esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@v0.1.0-esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@v0.1.1-esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2object@v0.1.0-esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@v0.1.0-esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@v0.1.1-esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@v0.1.1-esm/index.mjs";function o(o,a,m,l){if(!t(m))throw new TypeError(n("1XF3N,G4",m));if(s(o))return function(r,s,t,e){var i,n,o,a,m,l,j,f,c,h,p;if(a=r.length,j=r.shape,i=r.data,f=r.strides,c=r.offset,n=r.order,m=r.accessors[0],l=r.ref,0===j.length)return t.call(e,s,m(i,c),0,l);for(o=s,p=a-1;p>=0;p--)h=d(j,f,c,n,p,"throw"),o=t.call(e,o,m(i,h),p,l);return o}(e(o),a,m,l);if(r(o))return function(r,s,t,e){var i,n,d,o;for(i=r.data,n=r.accessors[0],d=s,o=i.length-1;o>=0;o--)d=t.call(e,d,n(i,o),o,i);return d}(i(o),a,m,l);throw new TypeError(n("1XFBH,O9",o))}export{o as default};
//# sourceMappingURL=index.mjs.map
