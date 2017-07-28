

var gulp            =   require('gulp');
var sass            =   require ('gulp-sass');
var browserSync     =   require('browser-sync').create();
var autoprefixer    =   require('gulp-autoprefixer');



gulp.task('pre_sass_css',function(){
    return gulp.src('sass/*.scss')
           .pipe(sass())
           .on('error', function (err) {
            console.log(err.toString());

            this.emit('end');
        })
           .pipe(gulp.dest('css'))
           .pipe(browserSync.reload({stream:true}))
});

gulp.task('browser-sync', function() {
    browserSync.init({
        server: {
            baseDir: "./"
             },
    notify:false
    });
});

gulp.task('autoprefixer', function() {
   gulp.src('css/*.css')
         .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('css'))
    });

gulp.task('watch',['browser-sync','pre_sass_css'], function(){
    gulp.watch('sass/*.scss' ,['pre_sass_css'], browserSync.reload)
    gulp.watch('*.html', browserSync.reload);
    gulp.watch('*.json', browserSync.reload);
    gulp.watch('js/*.js', browserSync.reload);
});



