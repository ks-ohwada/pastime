const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');
const postcss = require('gulp-postcss');
const autoprefixer = require('autoprefixer');

gulp.task('sass', function() {
  return gulp
    .src('./resource/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(
      sass({
        outputStyle: 'compressed',
      })
    )
    .pipe(
      postcss([
        autoprefixer({
          // ☆IEは11以上、Androidは4.4以上
          // その他は最新2バージョンで必要なベンダープレフィックスを付与する設定
          cascade: false,
        }),
      ])
    )
    .pipe(gulp.dest('./docs/css'));
});

gulp.task('server', function() {
  browserSync.init({
    server: './docs/',
  });

  gulp.watch('./resource/sass/*.scss', ['sass']);
  gulp.watch('./resource/pug/*.pug', ['pug']);
  gulp.watch('./docs/*.html', ['serverReload']);
  gulp.watch('./docs/css/*.css', ['serverReload']);
});

gulp.task('serverReload', function() {
  browserSync.reload();
});

gulp.task('serverNoWatch', function() {
  browserSync.init({
    server: './',
  });
});
