let gulp = require('gulp');
let concat = require('gulp-concat');
let autoprefixer = require('gulp-autoprefixer');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');
let del = require('del');
let browserSync = require('browser-sync').create();
let sass = require('gulp-sass');

sass.compiler = require('node-sass');

const cssFiles = [
   './styles/main.scss',
]

const jsFiles = [
   './styles/js/main.js'
]

function styles() {
   return gulp.src(cssFiles)
   .pipe(concat('styles.css'))
   .pipe(autoprefixer({
      browsers: ['last 2 versions'],
      cascade: false
   }))
   .pipe(sass().on('error', sass.logError))
   .pipe(cleanCSS({
      level: 2
   }))
   .pipe(gulp.dest('./build/styles'))
   .pipe(browserSync.stream())
}

function scripts() {
   return gulp.src(jsFiles)
   .pipe(concat('buildScript.js'))
   .pipe(uglify({
      toplevel: true
   }))
   .pipe(gulp.dest('./build/js'))
   .pipe(browserSync.stream());
}

function clean() {
   return del(['build/*'])
}

function watch() {
   browserSync.init({
      server: {
          baseDir: "./"
      }
  });

gulp.watch('./build/styles/**/*.css', styles)
gulp.watch('./build/js/**/*.js', scripts)
gulp.watch("*.html").on('change', browserSync.reload);
}

gulp.task('styles', styles);
gulp.task('scripts', scripts);
gulp.task('del', clean);
gulp.task('watch', watch);
gulp.task('build', gulp.series(clean, gulp.parallel(styles,scripts)));
gulp.task('dev', gulp.series('build','watch'));