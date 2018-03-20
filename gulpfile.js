var gulp = require('gulp');
var minify = require('gulp-minify');
var pjson = require('./package.json');
var rename = require('gulp-rename');
var clean = require('gulp-clean');
var cleanCss = require('gulp-clean-css');

gulp.task('pack-js', function () {  
    return gulp.src('src/*.js')
            .pipe(minify({
                noSource: true
            }))
            .pipe(rename(({
                suffix: "-" + pjson.version
            })))
            .pipe(gulp.dest('public/deploy'))

})

gulp.task('pack-css', function () {  
    return gulp.src('src/*.css')
            .pipe(cleanCss())
            .pipe(rename(({
                suffix: "-" + pjson.version
            })))
            .pipe(gulp.dest('public/deploy'))

})

gulp.task('clean', function(){
    return gulp.src('public/deploy/*.*')
            .pipe(clean({
                force: true
            }))
})

gulp.task('default', ['clean','pack-css','pack-js']);