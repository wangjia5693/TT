const { mix } = require('laravel-mix');
/*
 |--------------------------------------------------------------------------
 | browserSync 开发时代码变更前端实时显示；注意一次只能开启一个，运行：npm run watch
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.js('resources/assets/js/app.js', 'public/js')
   .sass('resources/assets/sass/app.scss', 'public/css')
    // .browserSync({'proxy':'nala.sunshine.app'})
;

mix.js('Modules/Systerm/resources/assets/js/app.js', 'public/system/js/app.js')
    .sass('Modules/Systerm/resources/assets/sass/app.scss', 'public/system/css/app.css')
    // .browserSync({'proxy':'admin.sunshine.app'})
;