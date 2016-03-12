var gulp = require('gulp');
var coffee = require('gulp-coffee');

gulp.task('coffee', function() {
	gulp.src('coffee/script.coffee')
	.pipe(coffee({bare: true}))
	.pipe(gulp.dest('js'))
});