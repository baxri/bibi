var gulp = require('gulp');
// var less = require('gulp-less');
var sass = require('gulp-sass');
var webpack = require('webpack-stream');

/* Task to compile less */
// gulp.task('compile-less', function() {
//     gulp.src('./css/*.less')
//         .pipe(less())
//         .pipe(gulp.dest('./public/css/'));
// });

/* Task to compile sass */
gulp.task('compile-sass', function() {
    gulp.src('./css/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./public/css/'));
});

gulp.task('compile-webpack', function() {
    return gulp.src('js/bootstrap.js')
        .pipe(webpack({
            output: {
                filename: 'app.js'
            }
        }))
        .pipe(gulp.dest('public/js/'));
});

/* Task to watch less changes */
gulp.task('watch', function() {
    gulp.watch([
        // Less files
        // './css/*.less',

        // Less files
        './css/*.scss',

        // Js files
        'js/*',
        'js/src/*'

    ] , ['compile-sass']);
});

/* Task when running `gulp` */
gulp.task('default', [ 'compile-less']);