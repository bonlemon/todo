var path = require('path');

module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: path.resolve(__dirname, './public'), // Путь к каталогу входных файлов
        publicPath: '/public/',
        filename: 'bundle.js' // название содержимого
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                loader: "babel-loader",
                options: {
                    presets:["env","react"] // plugins
                    // presets:["es2015","react"] // plugins
                }
            }
        ]
    }
}