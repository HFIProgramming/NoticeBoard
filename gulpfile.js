var paths = {
    'foundation': 'material-foundation/',
    'output': 'public'
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
    mix.copy(paths.foundation + 'css/material-foundation.css', 'public/css');
    mix.sass('app.scss');
    //mix.styles('login.css');

    mix.copy(paths.foundation + 'js/material-foundation.js', 'public/js/foundation.js');

    mix.version(['css/app.css', 'css/login.css', 'css/material-foundation.css', 'js/foundation.js']);
    mix.copy(
        paths.foundation + 'bower_components/material-design-iconic-font/dist/fonts',
        'public/build/bower_components/material-design-iconic-font/dist/fonts'
    );
    mix.browserSync();
});
