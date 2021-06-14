/**
* @license Apache-2.0
*
* Copyright (c) 2018 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var tape = require( 'tape' );
var noop = require( '@stdlib/utils-noop' );
var Float64Array = require( '@stdlib/array-float64' );
var reduceRight = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof reduceRight, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if not provided a collection', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		undefined,
		{},
		function noop() {},
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			reduceRight( value, 0, noop );
		};
	}
});

tape( 'the function throws an error if not provided a reduction function', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		5,
		NaN,
		true,
		false,
		null,
		undefined,
		{},
		[],
		/.*/,
		new Date()
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws a type error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			reduceRight( [ 1, 2, 3 ], 0, value );
		};
	}
});

tape( 'if provided an empty collection, the function returns the initial value and never invokes a reduction function', function test( t ) {
	var arr;
	var out;

	function foo() {
		t.fail( 'should not be invoked' );
	}
	arr = [];

	out = reduceRight( arr, 0, foo );

	t.strictEqual( out, 0, 'expected result' );
	t.end();
});

tape( 'the function invokes a reduction function for each element in a collection (array)', function test( t ) {
	var arr;
	var out;

	function mult( acc, value ) {
		return acc * value;
	}

	arr = [ 1, 2, 3 ];
	out = reduceRight( arr, 1, mult );

	t.strictEqual( out, 6, 'returns expected result' );
	t.end();
});

tape( 'the function invokes a reduction function for each element in a collection (array-like object)', function test( t ) {
	var arr;
	var out;

	function mult( acc, value ) {
		return acc * value;
	}

	arr = {
		'length': 3,
		'0': 1,
		'1': 2,
		'2': 3
	};
	out = reduceRight( arr, 1, mult );

	t.strictEqual( out, 6, 'returns expected result' );
	t.end();
});

tape( 'the function invokes a reduction function for each element in a collection (typed array)', function test( t ) {
	var arr;
	var out;

	function mult( acc, value ) {
		return acc * value;
	}

	arr = new Float64Array( [ 1.0, 2.0, 3.0 ] );
	out = reduceRight( arr, 1.0, mult );

	t.strictEqual( out, 6.0, 'returns expected result' );
	t.end();
});

tape( 'the function supports providing an execution context', function test( t ) {
	var ctx;
	var arr;
	var out;

	function sum( acc, value ) {
		/* eslint-disable no-invalid-this */
		this.count += 1;
		return acc + value;
	}

	ctx = {
		'count': 0
	};
	arr = [ 1.0, 2.0, 3.0 ];

	out = reduceRight( arr, 0, sum, ctx );

	t.strictEqual( out/ctx.count, 2.0, 'expected result' );
	t.end();
});

tape( 'the function provides basic support for dynamic arrays', function test( t ) {
	var arr;
	var out;
	var i;

	function reducer( acc, value, index, collection ) {
		i += 1;
		if ( index === 0 && collection.length < 10 ) {
			collection.unshift( i+1 );
		}
		return acc + value;
	}

	i = 0;
	arr = [ 1, 2, 3 ];
	out = reduceRight( arr, 0, reducer );

	t.strictEqual( out, 55, 'returns expected result' );
	t.end();
});

tape( 'the function iterates from right to left', function test( t ) {
	var indices;
	var values;
	var arr;
	var i;

	arr = [ 1, 2, 3, 4 ];
	indices = [ 3, 2, 1, 0 ];
	values = [ 4, 3, 2, 1 ];
	i = -1;

	function verify( acc, value, index ) {
		i += 1;
		t.strictEqual( index, indices[ i ], 'provides expected index' );
		t.strictEqual( value, values[ i ], 'provides expected value' );
		return acc;
	}

	reduceRight( arr, 0, verify );
	t.end();
});

tape( 'the function does not skip empty elements', function test( t ) {
	var indices;
	var values;
	var arr;
	var i;

	arr = [ 1, , , 4 ]; // eslint-disable-line no-sparse-arrays
	indices = [ 3, 2, 1, 0 ];
	values = [ 4, void 0, void 0, 1 ];
	i = -1;

	function verify( acc, value, index ) {
		i += 1;
		t.strictEqual( index, indices[ i ], 'provides expected index' );
		t.strictEqual( value, values[ i ], 'provides expected value' );
		return acc;
	}

	reduceRight( arr, 0, verify );
	t.end();
});
