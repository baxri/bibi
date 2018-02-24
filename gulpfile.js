var gulp = require('gulp');
var less = require('gulp-less'); 

/* Task to compile less */
gulp.task('compile-less', function() {
    gulp.src('./css/*.less')
        .pipe(less())
        .pipe(gulp.dest('./css/'));
});

/* Task to watch less changes */
gulp.task('watch', function() {
    gulp.watch('./css/*.less' , ['compile-less']);
});
 
 
/* Task when running `gulp` */
gulp.task('default', [ 'compile-less']);