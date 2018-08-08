const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            // 该 rule 使得你可以在 js 代码中通过 import xx.css 的方式导入 xx.css 文件中的内容；
            {
              test: /\.css$/, // test 表示，由怎样的文件(这里是 .css 文件)将会使用 style-loader 和 css-loader 进行构建；
              use: [
                    'style-loader',
                    'css-loader'
              ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader'
                ]
            }
        ]
    }
};