var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync');

gulp.task('sass', function(){
  return gulp.src('sass/main.sass')
    // .pipe(sass())
    .pipe(sass({outputStyle: 'expanded'}).on('error', sass.logError))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream:true}))
})

gulp.task('bsync',function() {
  browserSync({
    server:{baseDir: ''}
  })
})
gulp.task('watch',['bsync','sass'],function() {
  gulp.watch('sass/**/*.sass', ['sass'])
  gulp.watch(['*.html','css/*.css','js/*.js'], browserSync.reload)
})

gulp.task('default', ['watch'])
