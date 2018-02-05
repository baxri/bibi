var gulp = require('gulp');
var less = require('gulp-less'); 
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload; 
 
/* Task to compile less */
gulp.task('compile-less', function() {  
  gulp.src('./css/main.less')
    .pipe(less())
    .pipe(gulp.dest('./css/'));
}); 
/* Task to watch less changes */
gulp.task('watch-less', function() {  
  gulp.watch('./css/*.less' , ['compile-less']);
});
 
 
/* Task when running `gulp` from terminal */
gulp.task('default', ['watch-less', 'compile-less']);