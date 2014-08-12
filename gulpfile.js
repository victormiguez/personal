var gulp        = require('gulp'),
    compass     = require('gulp-compass'),
    jade        = require('gulp-jade'),
    browserSync = require('browser-sync');

gulp.task('compass', function() {
  gulp.src('./assets/scss/*.scss')
    .pipe(compass({
      css: './_dist/css',
      sass: './assets/scss'
    }))
    .on('error', function(err){})
    .pipe(gulp.dest('./_dist/css'));
});

gulp.task('template', function(){
  gulp.src('./views/*.jade')
    .pipe(jade())
    .pipe(gulp.dest('./_dist'));
});

gulp.task('b-s', function() {
  browserSync.init('./_dist/**/*', {
    server: {
      baseDir: './_dist'
    }
  });
});

gulp.task('default', ['template', 'compass', 'b-s'], function(){
  gulp.watch('./views/*.jade', ['template']);
  gulp.watch('./assets/scss/**/*', ['compass']);
});