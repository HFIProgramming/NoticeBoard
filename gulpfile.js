var paths = {
    'materialize': 'node_modules/materialize-css/bin/',
    'jquery': 'node_modules/jquery/dist/'
};
var elixir = require('laravel-elixir');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.copy(paths.materialize + 'materialize.css', 'public/css');
    mix.sass('app.scss');
    mix.styles('login.css');

    mix.copy(paths.materialize + 'materialize.js', 'public/js');
    mix.copy(paths.jquery + 'jquery.min.js', 'public/js');

    mix.version(['css/app.css', 'css/login.css', 'css/materialize.css', 'js/materialize.js', 'js/jquery.min.js']);
    mix.copy(
        paths.materialize + 'fonts', 'public/build/fonts'
    );
    mix.browserSync();
});
