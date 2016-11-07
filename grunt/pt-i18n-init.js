var requestI18n = require('../i18n/requestI18n');
module.exports = function (grunt) {
    var language_locale = grunt.config.get('languageLocale');
    grunt.registerTask('i18n-init', '从i18n项目更新i18n文件', function () {
        requestI18n(language_locale,this.async());
    });
};