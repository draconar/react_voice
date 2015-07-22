var browserify = require('browserify');
var gulp = require('gulp');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var gutil = require('gulp-util');
var uglify = require('gulp-uglify');
var sourcemaps = require('gulp-sourcemaps');
var reactify = require('reactify');
var connect = require('gulp-connect');
var open = require("gulp-open");
var concat = require('gulp-concat');
var port = process.env.port || 3031;

// browserify and transform JSX
gulp.task('browserify', function(){
  var b = browserify();
  b.transform(reactify); // use the reactify transform
  b.add('./app/src/main.js');
  return b.bundle()
    .pipe(source('main.js'))
    .pipe(gulp.dest('./app/dist/js'));
});


// launch browser in a port
gulp.task('open', function(){
  var options = {
    url: 'http://localhost:' + port,
  };
  gulp.src('./app/index.html')
  .pipe(open('', options));
});

// live reload server
gulp.task('connect', function() {
  connect.server({
    root: 'app',
    port: port,
    livereload: true
  });
});

// live reload js
gulp.task('js', function () {
  gulp.src('./app/js/**/*.js')
    .pipe(connect.reload());
});

// live reload html
gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(connect.reload());
});

// watch files for live reload
gulp.task('watch', function() {
    gulp.watch('app/dist/js/*.js', ['js']);
    gulp.watch('app/index.html', ['html']);
    gulp.watch('app/src/**/*.js', ['browserify']);
});

gulp.task('default', ['browserify']);

gulp.task('serve', ['browserify', 'connect', 'open', 'watch']);
