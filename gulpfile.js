var gulp = require("gulp");
var ts = require("gulp-typescript");
var tsProject = ts.createProject("tsconfig.json");
const gulp_tslint = require('gulp-tslint');
var del = require("del");

gulp.task('clean', [], function () {
    del(['dist',
        'app/*.js']);
});

gulp.task('tslint', () => {
    return gulp.src(['**/*.ts', '!**/*.d.ts', '!node_modules/**'])
        .pipe(gulp_tslint())
        .pipe(gulp_tslint.report());
});

gulp.task("build", ['clean', 'tslint'], function () {
    return tsProject.src()
        .pipe(tsProject())
        .js.pipe(gulp.dest("app"));
});

gulp.task("default", ['build']);