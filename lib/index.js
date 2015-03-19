/**
*
*	COMPUTE: binom-ci
*
*
*	DESCRIPTION:
*		- Confidence interval for Binomial parameter
*
*
*	NOTES:
*		[1]
*
*
*	TODO:
*		[1]
*
*
*	LICENSE:
*		MIT
*
*	Copyright (c) 2015. Philipp Burckhardt.
*
*
*	AUTHOR:
*		Philipp Burckhardt. pburckhardt@outlook.com. 2015.
*
*/

'use strict';

// MODULES //

var isNumber = require( 'validate.io-number-primitive' ),
	isObject = require( 'validate.io-object' ),
	isString = require( 'validate.io-string-primitive' ),
	isNonNegativeInteger = require( 'validate.io-nonnegative-integer' );

var betaInv = require( 'jStat' ).jStat.beta.inv;

// FUNCTIONS //

/**
* FUNCTION: binomCI()
* @param {Number} x - number of successes
* @param {Number} n - total number of observations
* @param {Number} level=0.95 - confidence level, number between 0 and 1
* @param {String} type - specifies the alternative hypothesis, either "two-sided", "less" or "greater"
* @returns {Array} CI - lower and upper end of the calculated confidence interval
*/
function binomCI(x, n, options) {

	var cint, alpha, type = 'two-sided', level = 0.95, lower, upper;

	if( !isNonNegativeInteger(x) ) {
		throw new TypeError( 'binomCI()::invalid input argument. Must provide a non-negative integer. Value: `' + x + '`.' );
	}
	if( !isNonNegativeInteger(n) ) {
		throw new TypeError( 'binomCI()::invalid input argument. Must provide a non-negative integer. Value: `' + n + '`.' );
	}

	if( x > n ) {
		throw new TypeError( 'binomCI()::invalid input arguments. x cannot be larger than n. Value: `x:' + x + ',' + 'n:' + n + '`.' );
	}

	if ( arguments.length > 2 ) {
		if ( !isObject( options ) ) {
			throw new TypeError( 'binomCI()::invalid input argument. Options must be an object. Value: `' + options + '`.' );
		}
		if ( options.hasOwnProperty( 'level' ) ) {
			level = options.level;
			if ( !isNumber( level ) ) {
				throw new TypeError( 'binomCI()::invalid option. Level option must be a number. Value: `' + level + '`.' );
			} else if ( !(0 < level && level < 1) ) {
				throw new TypeError( 'binomCI()::invalid option. Level option must be a number between 0 and 1. Value: `' + level + '`.' );
			}
		}
		if ( options.hasOwnProperty( 'type' ) ) {
			type = options.type;
			if( !isString(options.type) ){
				throw new TypeError( 'binomCI()::invalid input argument. Must provide a string. Value: `' + type + '`.' );
			} else {
				if(type !== 'two-sided' && type !== 'less' && type !== 'greater' ) {
					throw new RangeError( 'binomCI()::invalid input argument. Must provide either "two-sided", "lower" or "greater". Value: `' + type + '`.' );
				}
			}
		}
	}

	lower = function(x, alpha) {
		return x === 0 ? 0 : betaInv(alpha, x, n - x + 1);
	};
 	upper = function(x, alpha) {
		return x === n ? 1 : betaInv(1 - alpha, x + 1, n - x);
	};

	switch(type) {
		case 'less':
			cint = [0, upper(x, 1 - level)];
		break;
		case 'greater':
			cint = [lower(x, 1 - level), 1];
		break;
		case 'two-sided':
			alpha = (1 - level) / 2;
			cint = [lower(x, alpha), upper(x, alpha)];
		break;
	}

	return cint;

} // end FUNCTION binomCI()

// EXPORTS //

module.exports = binomCI;
