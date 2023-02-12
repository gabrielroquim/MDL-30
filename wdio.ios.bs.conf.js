const join  = require('path')
const allure = require('allure-commandline')
const video = require('wdio-video-reporter');

exports.config = {

    path: '/wd/hub',
    user: "gabriel_serXLj",
    key: "y27yoiFyeLyVzN1oNTro",

    services: ['browserstack'],
    specs: [
        './test/specs/**/*.spec.js'
    ],
    suites: {
        products: [
            './test/specs/productView.spec.js',
            './test/specs/productSearch.spec.js'                   
        ]
    },
    framework: 'mocha',
    capabilities: [
        {
            project: "Meu primeiro projeto Appium iOS BS",
            build: 'EBAC Test',
            name: 'ebac_test',
            device: 'iPhone 12 Pro',
            os_version: "14",
            'browserstack.debug': true,
            app: "bs://57792f79a13743ea7fdc01b2c25ea81c57d9b3c9"
        }

    ],
    waitforTimeout: 20000,
    mochaOpts: {
        timeout: 300000
    },
   
   
    maxInstances: 1
}