'use strict';

import gulp from 'gulp';
import plumber from 'gulp-plumber';
import rename from 'gulp-rename';
import autoprefixer from 'gulp-autoprefixer'
import babel from 'gulp-babel';
import concat from 'gulp-concat';
import uglify from 'gulp-uglify';
import imagemin from 'gulp-imagemin';
import cache from 'gulp-cache';
import sass from 'gulp-sass';
import browserSync from'browser-sync';
import gulpLoadPlugins from "gulp-load-plugins";

const $ = gulpLoadPlugins({camelize: true});

gulp.task('browser-sync', function() {
  browserSync({
    server: {
       baseDir: "./dist"
    }
  });
});

gulp.task('bs-reload', function () {
  browserSync.reload();
});

gulp.task('pug', () => {
    return gulp.src('src/*.pug')
        .pipe(plumber({
            errorHandler: function (error) {
                console.log(error.message);
                this.emit('end');
            }}))
        .pipe($.pug({
            pretty: true
        }))
        //.pipe($.prettify({indent_char: '    ', indent_size: 1}))
        .pipe(gulp.dest('dist/'))
        .pipe(browserSync.reload({stream: true}));
});

gulp.task('images', function(){
  gulp.src('src/images/**/*')
    .pipe(cache(imagemin({ optimizationLevel: 3, progressive: true, interlaced: true })))
    .pipe(gulp.dest('dist/images/'));
});

gulp.task('styles', function(){
  gulp.src(['src/styles/**/*.scss'])
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(sass())
    .pipe(autoprefixer('last 2 versions'))
    .pipe(gulp.dest('dist/styles/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('scripts', function(){
  return gulp.src('src/scripts/**/*.js')
    .pipe(plumber({
      errorHandler: function (error) {
        console.log(error.message);
        this.emit('end');
    }}))
    .pipe(concat('main.js'))
    .pipe(babel())
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(rename({suffix: '.min'}))
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts/'))
    .pipe(browserSync.reload({stream:true}))
});

gulp.task('default', ['browser-sync'], function(){
  gulp.watch("src/styles/**/*.scss", ['styles']);
  gulp.watch("src/scripts/**/*.js", ['scripts']);
  gulp.watch("src/*.pug", ['pug']);
});