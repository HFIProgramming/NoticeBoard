var paths = {
    'foundation': 'material-foundation/',
    'output': 'public/assets/'
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
    /*mix.sass('app.scss', paths.output + 'css', {
        includePaths: [
            paths.foundation + 'scss'
        ]
    });*/
    mix.copy(paths.foundation + 'css/material-foundation.css', paths.output + 'css');

    /*mix.babel([
        paths.foundation + 'bower_components/what-input/what-input.js',
        paths.foundation + 'bower_components/jquery/dist/jquery.js',
        paths.foundation + 'bower_components/foundation-sites/dist/foundation.js',
        paths.foundation + 'js/src/ripple.js',
        paths.foundation + 'js/src/switches.js',
        paths.foundation + 'js/src/material-foundation.js'
    ], paths.output + 'js/foundation.js', './');*/
    mix.copy(paths.foundation + 'js/material-foundation.js', paths.output + 'js/foundation.js');
    
    mix.version(['assets/css/app.css', 'assets/css/login.css', 'assets/js/foundation.js']);
    mix.copy(
        paths.foundation + 'bower_components/material-design-iconic-font/dist/fonts',
        'public/build/assets/bower_components/material-design-iconic-font/dist/fonts'
    );
    mix.browserSync();
});
