/*
	dist作为目标目录
*/

var gulp = require('gulp');
var rev = require('gulp-rev');
var revReplace = require('gulp-rev-replace');
var runSeq = require('run-sequence');
var clean = require('gulp-clean'), //删除目录
	useref = require('gulp-useref'); //html中文件合并
var imagemin = require('gulp-imagemin'); //图片压缩
	uglify = require('gulp-uglify'),
	minifyCss = require('gulp-clean-css');
var gulpif = require('gulp-if');
var less = require('gulp-less');
var replace = require('gulp-replace');
var htmlmin = require('gulp-html-minify');
var filter = require('gulp-filter');

var f = filter(['**/*.js', '**/*.css'], {restore: true});
/*
 *	  less->css
 *	  路径替换
 */
gulp.task('css', function(){
	return gulp.src('source/css/*.less')
		.pipe(less())
		
		.pipe( gulp.dest('source/css/'));
});

/*
 *	  
 */
gulp.task('images', function(){
	return gulp.src('source/imgs/*')
		.pipe(imagemin())
		.pipe(gulp.dest('dist/imgs/'));
});

gulp.task('clean', function(){
	return gulp.src('dist/*', {read: false})
		.pipe(clean());
});

/*
 *	 no use
 */
gulp.task('test', function(){
	return gulp.src('dist/**/*')
			//.pipe(useref())
			.pipe(rev())
			.pipe(revReplace())
			.pipe(gulp.dest('dist'));
});

/*
 *	  can use,但会把html也添加hash值
 */
gulp.task('dist', function () {
	runSeq('clean', ["images","css"], function(){
		return gulp.src('source/*.html')
			.pipe(useref())
			.pipe(gulpif('*.js', uglify()))
        	.pipe(gulpif('*.css', minifyCss()))
        	.pipe(f) //防止对.html添加hash
			.pipe(rev())
			.pipe(f.restore)
			.pipe(revReplace())
			.pipe( gulpif('*.html', htmlmin()) ) //不会清除引号
			//换成绝对路径
			.pipe(replace(/(src=["']js)/g,function ($0) {

		    	if ($0.indexOf('src="js') != -1 || $0.indexOf("src='js")!= -1) {    			    		
		            //
		            return $0;
		        } else{
		        	return $0;
		        }        	
    		}))
    		.pipe(replace(/(href=["']css)/g,function ($0) {    			
		    	if ($0.indexOf("href='css") != -1 || $0.indexOf('href="css') != -1){
		        	return $0;
		        }else{
		        	return $0;
		        }        	
    		}))
			.pipe(gulp.dest('dist'));

	});
});

/*
 *	  no use
 */
gulp.task('build', function () {
	runSeq('dist', [], function(){
		//清除当前目录发行版本
		//从dist复制文件到当前目录
		//
	});
});
/*
 *	  
 */
gulp.task('default', function () {
	console.warn('please use: \n [gulp dist]\n [gulp test]\n [gulp build]');
});
