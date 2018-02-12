module.exports = {
    entry: "./app/app.jsx",
    output: {
        path: path.resolve(__dirname, './public'), // Путь к каталогу входных файлов
        publicPath: '/public/',
        filename: 'bundle.js' // название содержимого
    },
    module: {
        rules: [ //закгпше фвв ю

        ]
    }
}