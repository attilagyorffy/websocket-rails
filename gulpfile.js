var gulp = require('gulp');
var concat = require('gulp-concat');
var coffee = require('gulp-coffee');
var gutil = require('gulp-util');

gulp.task('coffee', function() {
  gulp.src('./src/*.coffee')
    .pipe(coffee({bare: true}).on('error', gutil.log))
    .pipe(gulp.dest('./dist/'))
});

gulp.task('concat', function() {
  return gulp.src([
    './dist/websocket_rails.js',
    './dist/event.js',
    './dist/abstract_connection.js',
    './dist/http_connection.js',
    './dist/websocket_connection.js',
    './dist/channel.js'
    ])
    .pipe(concat('websocket-rails.js'))
    .pipe(gulp.dest('./dist/'));
});

gulp.task('default', ['coffee', 'concat']);
