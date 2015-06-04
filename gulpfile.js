var gulp = require('gulp');
var runSequence = require('run-sequence');
var react = require('gulp-react');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var clean = require('gulp-clean');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');

path = {
  static: ['src/index.html', 'src/assets/**'],
  css: ['src/styles/*.less'],
  main_js: ['tmp/index.js'],
  js: ['src/components/**/*.js', 'src/components/*.js'],
  jsx: ['src/components/**/*.jsx', 'src/components/*.jsx'],
  build: 'build/'
};

gulp.task('jsx', function () {
  return gulp.src(path.jsx)
    .pipe(react({harmony: true}))
    .pipe(gulp.dest('tmp'));
});

gulp.task('browserify', function () {
  return browserify({
      insertGlobals: true,
      entries: path.main_js,
      debug: true
    })
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest(path.build));
});
gulp.task('less', function () {
  return gulp.src(path.css)
    .pipe(less())
    .pipe(gulp.dest(path.build));
});

gulp.task('static', function () {
  return gulp.src(path.static)
    .pipe(gulp.dest(path.build));
});
gulp.task('build', function () {
  runSequence(
    ['jsx', 'clean build'],
    ['less', 'static'],
    'browserify');
});

gulp.task('clean build', function () {
  return gulp.src(path.build + '*.*')
    .pipe(clean());
});
gulp.task('clean js', function () {
  return gulp.src(['tmp/**', 'tmp/*.*'])
    .pipe(clean());
});

gulp.task('watch less', ['less'], function () {
  gulp.watch(path.css, ['less']);
});

gulp.task('watch jsx', ['build'], function () {
  gulp.watch(path.jsx, ['build']);
});
