'use strict';

var gulp = require('gulp'),
    watch = require('gulp-watch'),
    prefixer = require('gulp-autoprefixer'),
    sass = require('gulp-sass'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    plumber = require('gulp-plumber');

var path = {
  build: {
    css: 'css/',
    img: 'img/'
  },
  src: {
    style: 'scss/main.scss',
    img: 'src/img/**/*.*'
  },
  watch: {
    style: 'scss/**/*.scss'
  }
};

gulp.task('style:build', function(){
  gulp.src(path.src.style)
    .pipe(plumber())
    .pipe(sass().on('error', function(err){
      console.log("error: " + err.message);
      this.emit('end');
    }))
    .pipe(prefixer({
      browsers: ['last 2 versions', 'IE 10']
    }))
    .pipe(cleanCSS())
    .pipe(gulp.dest(path.build.css));
});

gulp.task('image:build', function(){
  gulp.src(path.src.img)
    .pipe(imagemin({
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.build.img))
});

gulp.task('build', [
  'style:build'
]);

gulp.task('watch', function() {
  watch([path.watch.style], function(event, cb) {
    gulp.start('style:build');
  });
});

gulp.task('default', ['build', 'watch']);