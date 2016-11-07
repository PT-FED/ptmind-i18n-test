var jsonfile = require('jsonfile');
var http = require('http');
var path = require('path');
var q = require('q');
var projectName = require('../package.json').name;
var sourceI18nUrl = 'http://192.168.3.123:4300/';
var distI18nDir = path.join(__dirname, '../i18n/build/');
module.exports=function(language_locale,callback) {
    var getI18nDefers = [];
    language_locale.forEach(function (l) {
        l.locale.forEach(function (locale) {
            var deferred = q.defer();
            http.get(sourceI18nUrl + projectName + '_' + l.language + '_' + locale + '.json', function (res) {
                var output = '';
                res.setEncoding('utf8');
                res.on('data', function (chunk) {
                    output += chunk;
                });
                res.on('end', function () {
                    deferred.resolve({
                        languageLocal: l.language + '_' + locale,
                        data: JSON.parse(output)
                    });
                });
            });
            getI18nDefers.push(deferred.promise);
        });
    });
    q.all(getI18nDefers).then(function (ress) {
        var writeI18nDefers = [];
        ress.forEach(function (res) {
            var deferred = q.defer();
            jsonfile.writeFile(distI18nDir + res.languageLocal+'.json', res.data, {}, function () {
                deferred.resolve();
            });
            writeI18nDefers.push(deferred.promise)
        });
        q.all(writeI18nDefers).then(function () {
            callback(ress);
        });
    });
}