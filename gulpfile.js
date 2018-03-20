var gulp = require('gulp');
var minify = require('gulp-minify');
var pjson = require('./package.json');
var rename = require('gulp-rename');
var clean = require('gulp-clean');

gulp.task('minify', function () {  
    return gulp.src('src/*.js')
            .pipe(minify({
                noSource: true
            }))
            .pipe(rename(({
                suffix: "-" + pjson.version
            })))
            .pipe(gulp.dest('public/deploy'))

})

gulp.task('clean', function(){
    return gulp.src('public/deploy/*.js')
            .pipe(clean({
                force: true
            }))
})

gulp.task('default', ['clean','minify']);