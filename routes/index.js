var express = require('express');
var router = express.Router();
var path = require('path');
var projectName = require('../package.json').name;
/* GET home page. */
router.get('/', function (req, res, next) {
    var i18n = global.langs[global.languageLocale];
    res.render('index', i18n);
});

router.get('/updateI18n', function (req, res, next) {
    var requestI18n = require('../i18n/requestI18n');
    var language_locale = require('../i18n/language_locale.json');
    requestI18n(language_locale, function (langs) {
        langs.forEach(function (lang) {
            global.langs[lang.languageLocal] = lang.data;
        });
        res.json({status: 'success',"desc":"刷新i18n成功，请重新加载项目!!!"})
    });
});

module.exports = router;
