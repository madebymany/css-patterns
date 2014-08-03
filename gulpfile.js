'use strict';

var gulp = require('gulp');
var deploy = require('gulp-gh-pages');
var sassdoc = require('gulp-sassdoc');

gulp.task('docs', function() {
  return gulp.src('./stylesheets/patterns')
    .pipe(sassdoc({
      dest: './docs',
      package: './package.json'
    }));
});

gulp.task('publish-docs', ['docs'], function() {
  return gulp.src('./docs/**/*')
    .pipe(deploy());
});
