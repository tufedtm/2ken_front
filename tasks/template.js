'use strict';

import gulp from "gulp";
import nunjucks from "gulp-nunjucks";
import SRC_DIR from "./CONST";
import browserSync from "./serve";


gulp.task('template', function () {
  return gulp.src([SRC_DIR.template_src, '!src/base.html'])
    .pipe(nunjucks.compile())
    .pipe(gulp.dest(SRC_DIR.dest))
    .pipe(browserSync.stream())
});
