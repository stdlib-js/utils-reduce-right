<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->

# reduceRight

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a function against an accumulator and each element in an array while iterating from right to left and return the accumulated result.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-reduce-right
```

</section>

<section class="usage">

## Usage

```javascript
var reduceRight = require( '@stdlib/utils-reduce-right' );
```

#### reduceRight( arr, initial, reducer\[, thisArg ] )

Applies a function against an accumulator and each element in an array while iterating from right to left and returns the accumulated result.

```javascript
function sum( accumulator, value ) {
    return accumulator + value;
}

var arr = [ 1, 2, 3, 4 ];

var out = reduceRight( arr, 0, sum );
// returns 10
```

The function accepts both array-like objects and [`ndarray`][@stdlib/ndarray/ctor]-like objects.

```javascript
var array = require( '@stdlib/ndarray-array' );

function sum( accumulator, value ) {
    return accumulator + value;
}

var opts = {
    'dtype': 'generic'
};
var arr = array( [ [ 1, 2, 3 ], [ 4, 5, 6 ] ], opts );

var out = reduceRight( arr, 0, sum );
// returns 21
```

The applied function is provided the following arguments:

-   **accumulator**: accumulated value.
-   **value**: array element.
-   **index**: element index.
-   **arr**: input array.

To set the `this` context when invoking the input function, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function sum( accumulator, value ) {
    this.count += 1;
    return accumulator + value;
}

var arr = [ 1, 2, 3, 4 ];

var ctx = {
    'count': 0
};

var out = reduceRight( arr, 0, sum, ctx );
// returns 10

var mean = out / ctx.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   For input arrays, the function differs from [`Array.prototype.reduceRight`][mdn-array-reduceright] in the following ways:

    -   The function **requires** an `initial` value for the `accumulator`. The `initial` value is used during the first invocation of the `reducer` function.
    -   The function does **not** skip the last array element.
    -   The function does **not** skip `undefined` elements.
    -   The function does **not** support dynamic array-like objects (i.e., array-like objects whose `length` changes during execution).

-   The function supports array-like objects exposing getters and setters for array element access (e.g., [`Complex64Array`][@stdlib/array/complex64], [`Complex128Array`][@stdlib/array/complex128], etc).

    ```javascript
    var Complex64Array = require( '@stdlib/array-complex64' );
    var Complex64 = require( '@stdlib/complex-float32' );
    var realf = require( '@stdlib/complex-realf' );
    var imagf = require( '@stdlib/complex-imagf' );

    function sum( acc, z ) {
        var re1 = realf( acc );
        var im1 = imagf( acc );
        var re2 = realf( z );
        var im2 = imagf( z );
        return new Complex64( re1+re2, im1+im2 );
    }

    var x = new Complex64Array( [ 1.0, 2.0, 3.0, 4.0, 5.0, 6.0, 7.0, 8.0 ] );

    var v = reduceRight( x, new Complex64( 0.0, 0.0 ), sum );
    // returns <Complex64>

    var re = realf( v );
    // returns 16.0

    var im = imagf( v );
    // returns 20.0
    ```

-   For [`ndarray`][@stdlib/ndarray/ctor]-like objects, the function performs a reduction over the entire input [`ndarray`][@stdlib/ndarray/ctor] (i.e., higher-order [`ndarray`][@stdlib/ndarray/ctor] dimensions are flattened to a single-dimension).

-   When applying a function to [`ndarray`][@stdlib/ndarray/ctor]-like objects, performance will be best for [`ndarray`][@stdlib/ndarray/ctor]-like objects which are single-segment contiguous.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var filledarrayBy = require( '@stdlib/array-filled-by' );
var discreteUniform = require( '@stdlib/random-base-discrete-uniform' ).factory;
var naryFunction = require( '@stdlib/utils-nary-function' );
var add = require( '@stdlib/math-base-ops-add' );
var array = require( '@stdlib/ndarray-array' );
var reduceRight = require( '@stdlib/utils-reduce-right' );

function fill( i ) {
    var rand = discreteUniform( -10*(i+1), 10*(i+1) );
    return filledarrayBy( 10, 'generic', rand );
}

// Create a two-dimensional ndarray (i.e., a matrix):
var x = array( filledarrayBy( 10, 'generic', fill ), {
    'dtype': 'generic',
    'flatten': true
});

// Create an explicit binary function:
var f = naryFunction( add, 2 );

// Compute the sum:
var out = reduceRight( x, 0, f );

console.log( 'x:' );
console.log( x.data );

console.log( 'sum: %d', out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils/for-each-right`][@stdlib/utils/for-each-right]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils/reduce`][@stdlib/utils/reduce]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in a collection and return the accumulated result.</span>
-   <span class="package-name">[`@stdlib/utils/async/reduce-right`][@stdlib/utils/async/reduce-right]</span><span class="delimiter">: </span><span class="description">apply a function against an accumulator and each element in a collection and return the accumulated result, iterating from right to left.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2021. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-reduce-right.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-reduce-right

[test-image]: https://github.com/stdlib-js/utils-reduce-right/actions/workflows/test.yml/badge.svg
[test-url]: https://github.com/stdlib-js/utils-reduce-right/actions/workflows/test.yml

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-reduce-right/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-reduce-right?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-reduce-right.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-reduce-right/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://gitter.im/stdlib-js/stdlib/

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-reduce-right/main/LICENSE

[mdn-array-reduceright]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/ReduceRight

[@stdlib/ndarray/ctor]: https://github.com/stdlib-js/stdlib

[@stdlib/array/complex64]: https://github.com/stdlib-js/stdlib

[@stdlib/array/complex128]: https://github.com/stdlib-js/stdlib

<!-- <related-links> -->

[@stdlib/utils/for-each-right]: https://github.com/stdlib-js/utils-for-each-right

[@stdlib/utils/reduce]: https://github.com/stdlib-js/utils-reduce

[@stdlib/utils/async/reduce-right]: https://github.com/stdlib-js/utils-async-reduce-right

<!-- </related-links> -->

</section>

<!-- /.links -->
