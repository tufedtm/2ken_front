'use strict';

import gulp from "gulp";
import babel from "gulp-babel";
import sourcemaps from "gulp-sourcemaps";
import uglify from "gulp-uglify";
import SRC_DIR from "./CONST";
import browserSync from "./serve";


gulp.task('script', function () {
  return gulp.src(SRC_DIR.script_src)
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(SRC_DIR.dest + '/static/js/'))
    .pipe(browserSync.stream({match: "**/*.js"}))
});
