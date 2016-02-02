var gulp = require('gulp');
var wiredep = require('wiredep').stream;

gulp.task('default', function() {
  // place code for your default task here
});


gulp.task('bower', function () {
  gulp.src('./index.html')
    .pipe(wiredep())
    .pipe(gulp.dest('./'));
});