// Copyright (c) 2022 The Stdlib Authors. License is Apache-2.0: http://www.apache.org/licenses/LICENSE-2.0
/// <reference types="./index.d.ts" />
import r from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-array-like-object@esm/index.mjs";import t from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-ndarray-like@esm/index.mjs";import e from"https://cdn.jsdelivr.net/gh/stdlib-js/assert-is-function@esm/index.mjs";import s from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-ndarraylike2object@esm/index.mjs";import i from"https://cdn.jsdelivr.net/gh/stdlib-js/array-base-arraylike2object@esm/index.mjs";import n from"https://cdn.jsdelivr.net/gh/stdlib-js/error-tools-fmtprodmsg@esm/index.mjs";import d from"https://cdn.jsdelivr.net/gh/stdlib-js/ndarray-base-vind2bind@esm/index.mjs";function o(o,a,l,m){if(!e(l))throw new TypeError(n("0lT3Z",l));if(t(o))return function(r,t,e,s){var i,n,o,a,l,m,j,f,h,p,c;if(a=r.length,j=r.shape,i=r.data,f=r.strides,h=r.offset,n=r.order,l=r.getter,m=r.ref,0===j.length)return e.call(s,t,l(i,h),0,m);for(o=t,c=a-1;c>=0;c--)p=d(j,f,h,n,c,"throw"),o=e.call(s,o,l(i,p),c,m);return o}(s(o),a,l,m);if(r(o))return function(r,t,e,s){var i,n,d,o;for(i=r.data,n=r.getter,d=t,o=i.length-1;o>=0;o--)d=e.call(s,d,n(i,o),o,i);return d}(i(o),a,l,m);throw new TypeError(n("0lTC4",o))}export{o as default};
//# sourceMappingURL=index.mjs.map
