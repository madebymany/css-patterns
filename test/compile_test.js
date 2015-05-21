var fs = require('fs');
var assert = require('assert');
var patterns = require('../');
var sass = require('node-sass');

describe('compiling patterns', function () {

  it('should compile to css when importing patterns', function () {
    var generated = sass.renderSync({
      file: __dirname + '/fixtures/compile.scss',
      includePaths: patterns.includePaths,
      outputStyle: 'compressed'
    }).css.toString('utf-8');

    var expected = fs.readFileSync(__dirname + '/expectations/compile.css', {
      encoding: 'utf8'
    });

    assert.equal(generated, expected);
  });

  it('should not throw errors for features', function (done) {
    sass.render({
      file: __dirname + '/fixtures/features.scss',
      includePaths: patterns.includePaths
    }, function (err) {
      if (err) {
        throw new Error(err);
      }

      done();
    });
  });

});
