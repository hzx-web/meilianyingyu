var gulp = require('gulp');
// 多个文件合并为一个
var concat = require('gulp-concat');
//- 压缩CSS为一行
//var minifyCss = require('gulp-minify-css');

gulp.task('default', function() {
    // 将你的默认的任务代码放在这
    gulp.src('./css/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./build'));
});
