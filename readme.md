##ptmind i18n test
测试 ptmind－i18n项目

使用node express 搭建的简单的测试i18n的项目。

##目录,文件说明

- bin,public,routes,views:express 项目目录
- grunt:grunt任务目录(获取ptmind-i18n中生成的i18n)
- i18n
      - build:编译后的i18n文件。该项目会直接使用该目录下的i18n文件
      - initI18n.js:项目自动时，初始化i18n数据
      - language_locale.js:项目使用的语言和方言
      - requestI18n.js:从ptmind-118n项目更新i18n

## 更新i18n的2种方式

- grunt构建(grunt i18n-init)
- 外部发起http 更新请求(http://localhost:3000/updateI18n)

## 启动项目
修改package.json中的"sourceI18nUrl"［i18n项目地址］

grunt i18n-init

node bin/www