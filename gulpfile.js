var gulp = require('gulp');
var runSequence = require('run-sequence');
var react = require('gulp-react');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var clean = require('gulp-clean');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');

path = {
  static: 'src/assets/**',
  html: 'src/index.html',
  css: 'src/styles/*.less',
  main_js: 'tmp/index.js',
  js: ['src/components/**/*.js', 'src/components/*.js'],
  jsx: ['src/components/**/*.jsx', 'src/components/*.jsx'],
  tmp: 'tmp/',
  build: 'build/',
  build_static: 'build/static'
};
gulp.task('static', function () {
  return gulp.src(path.static)
    .pipe(gulp.dest(path.build_static));
});

gulp.task('html', function () {
  return gulp.src(path.html)
    .pipe(gulp.dest(path.build))
});

gulp.task('css', function () {
  return gulp.src(path.css)
    .pipe(less())
    .pipe(gulp.dest(path.build_static));
});

gulp.task('jsx', function () {
  return gulp.src(path.jsx)
    .pipe(react({harmony: true}))
    .pipe(gulp.dest(path.tmp));
});

gulp.task('browserify', function () {
  return browserify({
      insertGlobals: true,
      entries: path.main_js,
      debug: true
    })
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest(path.build_static));
});


gulp.task('build', function () {
  runSequence('clean build', ['jsx', 'html', 'css', 'static'], 'browserify');
});

gulp.task('clean build', function () {
  return gulp.src([path.build + '*.*', path.build + 'static/*.*'])
    .pipe(clean());
});
gulp.task('clean js', function () {
  return gulp.src(['tmp/**', 'tmp/*.*'])
    .pipe(clean());
});

gulp.task('watch css', ['css'], function () {
  gulp.watch(path.css, ['css']);
});

gulp.task('watch jsx', ['build'], function () {
  gulp.watch(path.jsx, ['build']);
});
