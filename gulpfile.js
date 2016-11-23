var gulp = 			require ('gulp'),
	browserSync=	require	('browser-sync'),
	reload=			browserSync.reload,
	uglify= 		require ('gulp-uglify'),
	rename=			require ('gulp-rename'),
	sass = 			require('gulp-sass'),
	sourcemaps = 	require('gulp-sourcemaps');

/////////////////////////////////
///Scripts tasks
/////////////////////////////////
gulp.task('scripts',function(){
	gulp.src(['app/js/**/*.js'])			
	.pipe(reload({stream:true}));
});	
/////////////////////////////////
///Html tasks
/////////////////////////////////
gulp.task('html',function(){
	gulp.src('app/*.html')
	.pipe(reload({stream:true}));
});
/////////////////////////////////
///Sass tasks
/////////////////////////////////
gulp.task('sass', function() {
	gulp.src('app/scss/**/*.scss')
	// Initializes sourcemaps
	.pipe(sourcemaps.init())
	.pipe(sass({
		errLogToConsole: true
	}))
	// Writes sourcemaps into the CSS file
	.pipe(sourcemaps.write())
	.pipe(gulp.dest('app/css/'))
	.pipe(reload({stream:true}));
});
/////////////////////////////////
///Browser-Sync tasks
/////////////////////////////////
gulp.task('browser-sync',function(){
	browserSync({
		server:{
			baseDir:"app/"
		}
	}) 	
});
/////////////////////////////////
///Watch tasks
/////////////////////////////////
gulp.task('watch',function(){
	gulp.watch('app/js/**/*.js',['scripts']); 	//Every change that we made,it will run our function script
	gulp.watch('app/*.html',['html']); 	//Every change that we mad
	gulp.watch('app/scss/**/*.scss',['sass']); 	//Every change that we mad
});
/////////////////////////////////
///Default
/////////////////////////////////
gulp.task('default',['scripts','html','sass','browser-sync','watch']);






