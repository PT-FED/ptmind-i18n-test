var languageLocales = require('./language_locale.json');
var projectName = require('../package.json').name;
module.exports = function () {
    global.langs={};
    languageLocales.forEach(function (l) {
        l.locale.forEach(function (locale) {
            var i18nFilePath='./build/'+l.language+'_'+locale+'.json';
            global.langs[l.language+'_'+locale]= require(i18nFilePath);
        });
    });
};