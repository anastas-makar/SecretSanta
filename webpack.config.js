// webpack.config.js
var Encore = require('@symfony/webpack-encore');
var path = require('path');

Encore
    .setOutputPath('web/build/')
    .setPublicPath('/build')

    .cleanupOutputBeforeBuild()

    .enableSassLoader()
    .enableVersioning()

    // allow legacy applications to use $/jQuery as a global variable
    .autoProvidejQuery()
    .enableSingleRuntimeChunk()

    .createSharedEntry('js/vendor', './src/Intracto/SecretSantaBundle/Resources/public/js/vendors.js')
    .addEntry('js/modernizr.custom', './src/Intracto/SecretSantaBundle/Resources/public/js/modernizr.custom.min.js')
    .addEntry('js/party.create', './src/Intracto/SecretSantaBundle/Resources/public/js/party.create.js')
    .addEntry('js/party.import', './src/Intracto/SecretSantaBundle/Resources/public/js/party.import.js')

    .addEntry('js/party.manage', './src/Intracto/SecretSantaBundle/Resources/public/js/party.manage.js')

    .addEntry('js/secretsanta', './src/Intracto/SecretSantaBundle/Resources/public/js/secretsanta.js')
    .addEntry('js/wishlist', './src/Intracto/SecretSantaBundle/Resources/public/js/wishlist.js')

    .addEntry('js/recaptcha', './src/Intracto/SecretSantaBundle/Resources/public/js/recaptcha.js')

    .addStyleEntry('css/main', [
        './src/Intracto/SecretSantaBundle/Resources/public/scss/main.scss',
        'jquery-ui/themes/base/core.css',
        'jquery-ui/themes/base/sortable.css',
    ])

    .addStyleEntry('css/update', './src/Intracto/SecretSantaBundle/Resources/public/css/update.css')
    .addStyleEntry('css/report', './src/Intracto/SecretSantaBundle/Resources/public/css/report.css')
    .addStyleEntry('css/mediaqueries', './src/Intracto/SecretSantaBundle/Resources/public/css/mediaqueries.css')

    .enableSourceMaps(!Encore.isProduction())
;

var config = Encore.getWebpackConfig();

config.resolve = {
    alias: {
        '@': path.resolve(__dirname, 'src/Intracto/SecretSantaBundle/Resources/public/'),
        AppConfig: path.resolve(__dirname, 'app/config/'),
    }
};

module.exports = config;
