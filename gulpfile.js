var pkg = require('./package.json');
var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var stylish = require('jshint-stylish');
var beautify = require('gulp-jsbeautifier');
var cleanCSS = require('gulp-clean-css');
var rename = require("gulp-rename");
var uglify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var autoprefixer = require('gulp-autoprefixer');
var header = require('gulp-header');

var defaultTasks = ['scss', 'format', 'jshint'];

var banner = ['/*\n',
    ' * <%= pkg.title %> v<%= pkg.version %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2016-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' */\n',
    ''
].join('');

gulp.task('default', ['serve']);

gulp.task('scss', function() {
    return gulp.src('assets/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
        }))
        .pipe(header(banner, { pkg: pkg }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('jshint', function() {
    return gulp.src([
            'assets/js/avarghese.js',
            '*.js'
        ])
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

gulp.task('format', function() {
    return gulp.src([
            'assets/css/avarghese.css',
            'client/js/avarghesejs',
            'index.html',
            '*.{js,json}'
        ], {
            base: './'
        })
        .pipe(beautify())
        .pipe(gulp.dest('./'));
});

gulp.task('minify-css', ['scss'], function() {
    return gulp.src([
        'assets/css/avarghese.css'
        ])
        .pipe(cleanCSS({ compatibility: 'ie8' }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('minify-js', function() {
    return gulp.src([
        'assets/js/avarghese.js'
        ])
        .pipe(uglify())
        .pipe(header(banner, { pkg: pkg }))
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('assets/js'));
});

gulp.task('browserSync', function() {
    return browserSync.init({
        server: {
            baseDir: ''
        },
    });
});

gulp.task('serve', ['browserSync', 'scss', 'minify-css', 'minify-js'], function() {
    gulp.watch('assets/css/**/*.scss', ['scss']);
    gulp.watch('assets/css/avarghese.css', ['minify-css']);
    gulp.watch('assets/js/avarghese.js', ['minify-js']);
    gulp.watch('index.html', browserSync.reload);
    gulp.watch([
        'assets/js/avarghese.min.js',
        'assets/css/avarghese.min.css'
        ], browserSync.reload);
});

module.exports = gulp;