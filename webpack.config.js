const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js', // Твої основні файли JavaScript
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [
                    MiniCssExtractPlugin.loader, // Витягує CSS в окремий файл
                    'css-loader', // Завантажує CSS файли
                    'sass-loader' // Перетворює SCSS в CSS
                ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.(png|jpg|jpeg|gif|svg)$/, // Можна додати більше типів зображень
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: 'assets/photo/[name].[ext]' // Зберігати у dist/assets/photo
                        }
                    }
                ]
            }
        ]
    },
    plugins: [
      new CopyWebpackPlugin({
            patterns: [
                {
                    from: 'src/assets/images', // Звідки копіювати
                    to: 'assets/images',   // Куди копіювати
                }
            ]
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/index.html', // Шаблон HTML
            filename: 'index.html', // Згенерований HTML файл
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/photo.html', // Шаблон HTML
            filename: 'photo.html', // Згенерований HTML файл
        }),
                new HtmlWebpackPlugin({
            template: './src/pages/rozklad.html', // Шаблон HTML
            filename: 'rozklad.html', // Згенерований HTML файл
        }),
        new HtmlWebpackPlugin({
            template: './src/pages/news.html', // Шаблон HTML
            filename: 'news.html', // Згенерований HTML файл
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css', // Вивести згенерований CSS файл з ім'ям 'styles.css'
        }),
    ],
    output: {
        path: __dirname + '/dist', // Папка для згенерованих файлів
        filename: 'bundle.js', // Ім'я файлу JavaScript
    },
};
