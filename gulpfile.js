var gulp = require('gulp');
var runSequence = require('run-sequence');
var react = require('gulp-react');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var clean = require('gulp-clean');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');
var uglifyjs = require('gulp-uglifyjs');
var minjs = require('gulp-jsmin');
var refresh = require('gulp-livereload');
var reactify = require('reactify');
var watchify = require('watchify');

path = {
  assets: 'src/assets/**',
  html: 'src/index.html',
  less: 'src/styles/*.less',
  main: 'src/components/index.js',
  js: ['src/components/**/*.js', 'src/components/*.js'],
  build: 'build/',
  build_static: 'build/static'
};

gulp.task('browserify', function() {
  var bundler = browserify({
    entries: path.main,
    transform: [reactify],
    cache: {}, packageCache: {}, fullPaths: true
  });
  return bundler
    .bundle()
    .pipe(source('index.js'))
    .pipe(gulp.dest(path.build_static));
});

gulp.task('less', function () {
  gulp.src(path.less)
    .pipe(less())
    .pipe(gulp.dest(path.build_static));
});

gulp.task('html', function () {
  gulp.src(path.html)
    .pipe(gulp.dest(path.build));
});

gulp.task('asset', function () {
  gulp.src(path.assets)
    .pipe(gulp.dest(path.build_static));
});

gulp.task('css', function () {
  gulp.watch(path.less,['less']);
});

gulp.task('uglify', function () {
  return uglifyjs('build/static/index.js')
    .pipe(minjs())
    .pipe(gulp.dest(path.build_static));
});
gulp.task('clean', function () {
  return clean('build/static/index.js')
});

gulp.task('build', function () {
  return runSequence('browserify','uglify');
});