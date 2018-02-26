var gulp = require('gulp');
var less = require('gulp-less');
var webpack = require('webpack-stream');

/* Task to compile less */
gulp.task('compile-less', function() {
    gulp.src('./css/*.less')
        .pipe(less())
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('compile-webpack', function() {
    return gulp.src('js/bootstrap.js')
        .pipe(webpack({
            output: {
                filename: 'app.js',
            }
        }))
        .pipe(gulp.dest('public/js/'));
});

/* Task to watch less changes */
gulp.task('watch', function() {
    gulp.watch([
        // Less files
        './css/*.less',

        // Js files
        'js/*',
        'js/src/*'

    ] , ['compile-less', 'compile-webpack']);
});

/* Task when running `gulp` */
gulp.task('default', [ 'compile-less']);