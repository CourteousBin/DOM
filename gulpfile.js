var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var reload      = browserSync.reload;

// 静态服务器 + 监听 scss/html 文件
gulp.task('zdsx', function() {

    browserSync.init({
        server: "./"
    });

    gulp.watch("*.html").on('change', reload);
});
