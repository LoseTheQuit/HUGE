var gulp = require('gulp'),
  sass = require('gulp-sass')

gulp.task('sass', () => {
  return gulp.src('public/sass/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('public/css'))
  console.log("THIS IS OBVIOUSLY A TEST")
})
