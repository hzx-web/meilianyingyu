var gulp = require('gulp');
// ����ļ��ϲ�Ϊһ��
var concat = require('gulp-concat');
//- ѹ��CSSΪһ��
//var minifyCss = require('gulp-minify-css');

gulp.task('default', function() {
    // �����Ĭ�ϵ�������������
    gulp.src('./css/*.css')
        .pipe(concat('style.css'))
        .pipe(gulp.dest('./build'));
});
