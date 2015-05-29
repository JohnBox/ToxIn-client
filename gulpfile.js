var gulp = require('gulp');
var react = require('gulp-react');
var browserify = require('gulp-browserify');
var clean = require('gulp-clean');

path = {
  html: ['src/index.html'],
  css: ['src/style.css'],
  js: ['src/components/index.js'],
  build: 'build/'
};

gulp.task('jsx', function () {
  gulp.src(['src/components/**/*.jsx', 'src/components/*.jsx'])
    .pipe(react({harmony: true}))
    .pipe(gulp.dest('src/components'));
});

gulp.task('build', ['jsx'], function () {
  gulp.src(path.html)
    .pipe(gulp.dest(path.build));
  gulp.src(path.js)
    .pipe(browserify())
    .pipe(gulp.dest(path.build));
});

gulp.task('clean', function () {
  gulp.src(path.build)
    .pipe(clean());
});

gulp.task('watch', function () {
  gulp.watch('')
});