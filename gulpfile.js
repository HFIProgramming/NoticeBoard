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
    mix.copy(paths.foundation + 'css/material-foundation.css', paths.output + 'css');
    mix.styles('login.css');

    mix.copy(paths.foundation + 'js/material-foundation.js', paths.output + 'js/foundation.js');
    
    mix.version(['assets/css/app.css', 'assets/css/login.css', 'assets/js/foundation.js']);
    mix.copy(
        paths.foundation + 'bower_components/material-design-iconic-font/dist/fonts',
        'public/build/assets/bower_components/material-design-iconic-font/dist/fonts'
    );
    mix.browserSync();
});
