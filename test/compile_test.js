var assert  = require('assert')
  , sass    = require('node-sass')
  , patterns = require('../')
  , fs      = require('fs');

describe('compiling patterns', function() {

  it('should compile to css when importing patterns', function() {
    var generatedCss = sass.renderSync({
      file: __dirname + '/fixtures/compile.scss',
      includePaths: patterns.includePaths,
      outputStyle: 'compressed'
    });
    var expectedCss = fs.readFileSync(
      __dirname + '/expectations/compile.css', {encoding: 'utf8'}).trim();
    assert.equal(generatedCss, expectedCss);
  });

  it('should not throw errors for features', function(done) {
    sass.render({
      file: __dirname + '/fixtures/features.scss',
      includePaths: patterns.includePaths,
      error: function(err) {
        throw new Error(err);
      },
      success: function(css) {
        done();
      }
    });
  });

});
