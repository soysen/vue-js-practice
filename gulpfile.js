var gulp = require("gulp");
var vueify = require("vueify");
var browserify = require("gulp-browserify");
var elixir = require("laravel-elixir");
var Task = Elixir.Task;

elixir.config.publicPath = 'dist';
elixir.config.assetsPath = 'src';

elixir.extend('vue', function() {
	new Task('vue', function() {
        return gulp.src('src/js/*.js')
        .pipe(browserify({
        	transform: 'vueify'
        }))
        .pipe(gulp.dest('dist/js'))
    }).watch('./src/**');
});

elixir(function(mix) {

	mix
    .scripts([
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/materialize-css/dist/js/materialize.min.js',
        './node_modules/rainbow-code/dist/rainbow.min.js','./dist/js/rainbow.min.js'
    ],'./dist/js/lib.js')
    .sass([
        'style.sass'
    ], './dist/css/app.css')
    .copy("./src/views/*.html", './dist')
    .copy('./node_modules/materialize-css/dist/fonts/*','dist/fonts')
    .vue()
    .browserSync({
        files: ['dist/**/*.js', 'src/**/*.vue', 'src/**/*.js', 'src/views/*.html'],
		proxy: 'vue-js.dev'
	});

});