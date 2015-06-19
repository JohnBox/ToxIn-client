var gulp = require('gulp');
var runSequence = require('run-sequence');
var react = require('gulp-react');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var clean = require('gulp-clean');
var less = require('gulp-less');
var concatCss = require('gulp-concat-css');
var uglifyjs = require('gulp-uglifyjs');
var refresh = require('gulp-livereload');
var reactify = require('reactify');
var watchify = require('watchify');

path = {
  assets: 'src/assets/**',
  html: 'src/index.html',
  less: 'src/styles/*.less',
  main: 'src/components/index.js',
  js: ['tmp/**/*.js', 'tmp/*.js'],
  jsx: ['src/components/**/*.jsx', 'src/components/*.jsx'],
  tmp: 'tmp/',
  build: 'build/',
  build_static: 'build/static'
};

gulp.task('browserify', function() {
  var bundler = browserify({
    entries: path.main,
    transform: [reactify],
    debug: true,
    cache: {}, packageCache: {}, fullPaths: true
  });
  var watcher  = watchify(bundler);

  return watcher
    .on('update', function () {
      var updateStart = Date.now();
      console.log('Updating!');
      watcher.bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest(path.build_static));
      console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
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