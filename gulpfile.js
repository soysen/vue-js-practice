var gulp = require("gulp");
var vueify = require("vueify");
var browserify = require("gulp-browserify");
var elixir = require("laravel-elixir");
var Task = Elixir.Task;

elixir.config.publicPath = 'dist';
elixir.config.assetsPath = 'src';

elixir.extend('vue', function() {
	new Task('vue', function() {
        return gulp.src('src/js/app.js')
        .pipe(browserify({
        	transform: 'vueify'
        }))
        .pipe(gulp.dest('dist/js'))
    }).watch('./src/**');
});

elixir(function(mix) {

	mix
    .copy('./node_modules/font-awesome/fonts','./dist/fonts')
    .copy('./node_modules/rainbow-code/dist/rainbow.min.js','./dist/js/rainbow.min.js')
    .sass([
        'style.sass'
    ])
    .vue()
    .browserSync({
        files: ['dist/**/*'],
		proxy: 'vue-js.dev'
	});

});