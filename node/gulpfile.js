var gulp = require('gulp');
var imagemin = require('gulp-imagemin');

gulp.task('images', function(){
	return gulp.src('sourceimgs')
		.pipe(imagemin())
		.pipe(gulp.dest('distimgs'));
});