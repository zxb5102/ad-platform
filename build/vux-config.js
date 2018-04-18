'use strict'

// const path = require('path')
// const fs = require('fs')
// const demoPath = path.resolve(__dirname, '../src/demo_list.json')

// const argv = require('yargs').argv
// argv.simulate = argv.simulate || false

module.exports = {
    //   options: {
    //     vuxDev: !argv.simulate, // true
    //     vuxSetBabel: argv.simulate, // false
    //     vuxWriteFile: false,
    //     env: 'dev'
    //   },
    plugins: [
        // 'vux-ui', 'inline-manifest',
        // {
        //   name: 'duplicate-style'
        // },
        // {
        //   name: 'progress-bar',
        //   envs: ['development']
        // },
        {
            name: 'js-parser',
            test: /main\.js/,
            fn: function (source) {
                var replaceStr = process.env.NODE_ENV === 'production'
                    ? "" 
                    : "import './mock/mock'"
                var result = source.replace("'@mock'", replaceStr);
                return result;
            }
        },
        // {
        //   name: 'i18n',
        //   vuxStaticReplace: false,
        //   staticReplace: false,
        //   extractToFiles: 'src/locales/components.yml',
        //   localeList: ['en', 'zh-CN']
        // },
        // {
        //   name: 'less-theme',
        //   path: 'src/theme.less'
        // }
    ]
}

// function toDash(str) {
//   return str.replace(/([A-Z])/g, function (m, w) {
//     return '-' + w.toLowerCase();
//   }).replace('-', '')
// }
