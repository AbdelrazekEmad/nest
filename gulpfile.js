const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const pug = require("gulp-pug");
const webp = require("gulp-webp");
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const browserSync = require("browser-sync").create();

gulp.task("sass", () => {
  return gulp
    .src("./src/sass/main-*.scss")
    .pipe(sass())
    .pipe(autoprefixer("last 2 versions"))
    .pipe(cleanCSS({ compatibility: "ie8" }))
    .pipe(gulp.dest("./dist/css/"))
    .pipe(browserSync.stream());
});

gulp.task("pug", () => {
  return gulp
    .src("./src/pug/*.pug")
    .pipe(pug({ pretty: true }))
    .pipe(gulp.dest("./dist/"))
    .pipe(browserSync.stream());
});

gulp.task("fonts", () => {
  return gulp.src("./src/fonts/**/*").pipe(gulp.dest("./dist/fonts/"));
});

gulp.task("imgSquash", () => {
  return gulp
    .src("./src/images/**/*")
    .pipe(webp({ lossless: true }))
    .pipe(gulp.dest("./dist/images"));
});

gulp.task("serve", () => {
  gulp.watch("./src/sass/**/*.scss", gulp.series("sass"));
  gulp.watch("./src/pug/**/*.pug", gulp.series("pug"));
  gulp.watch("./src/images/**/*", gulp.series("imgSquash"));
  gulp.watch("./dist/*.html").on("change", browserSync.reload);
  browserSync.init({
    server: "./dist",
  });
});

gulp.task("default", gulp.series("sass", "pug", "imgSquash", "fonts", "serve"));
