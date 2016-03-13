var gulp = require('gulp');
var coffee = require('gulp-coffee');
var webserver = require('gulp-webserver');

gulp.task('coffee', function() {
	gulp.src('coffee/script.coffee')
	.pipe(coffee({bare: true}))
	.pipe(gulp.dest('js'))
});

gulp.task('webserver', function() {
	gulp.src('')
	.pipe(webserver({
		livereload: true,
		open: '/index.html'
	}))
});

gulp.task('default', ['coffee', 'webserver']);