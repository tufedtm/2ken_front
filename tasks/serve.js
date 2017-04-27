'use strict';

import {create as bsCreate} from "browser-sync";
import gulp from "gulp";
import SRC_DIR from "./CONST";


const browserSync = bsCreate('server');


gulp.task('serve', function () {
  browserSync.init({
    server: {
      baseDir: SRC_DIR.dest
    },
  });
});


export default browserSync;
