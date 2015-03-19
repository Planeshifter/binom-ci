binom-ci
===
[![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Coverage Status][coveralls-image]][coveralls-url] [![Dependencies][dependencies-image]][dependencies-url]

> Confidence interval for Binomial parameter


## Installation

``` bash
$ npm install compute-binom-ci
```

For use in the browser, use [browserify](https://github.com/substack/node-browserify).


## Usage

``` javascript
var foo = require( 'compute-binom-ci' );
```

#### foo( arr )

What does this function do?


## Examples

``` javascript
var foo = require( 'compute-binom-ci' );
```

To run the example code from the top-level application directory,

``` bash
$ node ./examples/index.js
```


## Tests

### Unit

Unit tests use the [Mocha](http://mochajs.org/) test framework with [Chai](http://chaijs.com) assertions. To run the tests, execute the following command in the top-level application directory:

``` bash
$ make test
```

All new feature development should have corresponding unit tests to validate correct functionality.


### Test Coverage

This repository uses [Istanbul](https://github.com/gotwarlost/istanbul) as its code coverage tool. To generate a test coverage report, execute the following command in the top-level application directory:

``` bash
$ make test-cov
```

Istanbul creates a `./reports/coverage` directory. To access an HTML version of the report,

``` bash
$ make view-cov
```


---
## License

[MIT license](http://opensource.org/licenses/MIT). 


## Copyright

Copyright &copy; 2015. Philipp Burckhardt.


[npm-image]: http://img.shields.io/npm/v/compute-binom-ci.svg
[npm-url]: https://npmjs.org/package/compute-binom-ci

[travis-image]: http://img.shields.io/travis/compute-io/binom-ci/master.svg
[travis-url]: https://travis-ci.org/compute-io/binom-ci

[coveralls-image]: https://img.shields.io/coveralls/compute-io/binom-ci/master.svg
[coveralls-url]: https://coveralls.io/r/compute-io/binom-ci?branch=master

[dependencies-image]: http://img.shields.io/david/compute-io/binom-ci.svg
[dependencies-url]: https://david-dm.org/compute-io/binom-ci

[dev-dependencies-image]: http://img.shields.io/david/dev/compute-io/binom-ci.svg
[dev-dependencies-url]: https://david-dm.org/dev/compute-io/binom-ci

[github-issues-image]: http://img.shields.io/github/issues/compute-io/binom-ci.svg
[github-issues-url]: https://github.com/compute-io/binom-ci/issues
