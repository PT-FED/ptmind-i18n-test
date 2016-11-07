module.exports=function (grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        languageLocale: grunt.file.readJSON('./i18n/language_locale.json'),
        webapp: {'path': __dirname}
    });
    var i18nInit = require('./grunt/pt-i18n-init')(grunt);
};