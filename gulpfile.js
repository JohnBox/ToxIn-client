var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');
var less = require('gulp-less');

path = {
  html: ['src/index.html'],
  css: ['src/styles/*.less'],
  js: ['src/components/index.js'],
  build: 'build/'
};

gulp.task('jsx', function () {
  gulp.src(['src/components/**/*.jsx', 'src/components/*.jsx'])
    .pipe(react({harmony: true}))
    .pipe(gulp.dest('src/components'));
});

gulp.task('less', function () {
  gulp.src(path.css)
    .pipe(less())
    .pipe(gulp.dest(path.build));
});

gulp.task('html', function () {
  gulp.src(path.html)
    .pipe(gulp.dest(path.build));
});
gulp.task('build', ['jsx', 'less', 'html'], function () {
  gulp.src(path.js)
    .pipe(browserify())
    .pipe(gulp.dest(path.build));
});

gulp.task('clean', function () {
  gulp.src(path.build)
    .pipe(clean());
  gulp.src(['src/components/**/*.js', 'src/components/*.js'])
    .pipe(clean());
});

gulp.task('watch less', function () {
  gulp.watch(path.css, ['less']);
});