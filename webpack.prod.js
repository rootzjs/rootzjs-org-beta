const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = (env, options) => {
    return {
        entry: ['@babel/polyfill', './src/index.jsx'],
        mode: "production",
        module: {
            rules: [
                {
                    test: /\.(js|jsx)$/,
                    exclude: /node_modules/,
                    loader: 'babel-loader',
                },
                {
                    test: /\.(svg)$/,
                    exclude: /fonts/,
                    use: [
                        {
                            loader: 'svg-url-loader',
                            options: {
                                noquotes: true,
                                outputPath: 'images/',
                                name: '[name].[ext]',
                            },
                        },
                    ],
                },
                {
                    test: /.(ttf|otf|eot|woff(2)?)(\?[a-z0-9]+)?$/,
                    exclude: /images/,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                outputPath: 'fonts/',
                                name: '[name].[ext]',
                            },
                        },
                    ],
                },
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader'],
                },
                {
                    test: /\.(png|jpg|gif)$/i,
                    use: [
                        {
                            loader: 'file-loader',
                            options: {
                                limit: 2000,
                                outputPath: 'images/',
                                name: '[name].[ext]',
                            },
                        },
                    ],
                },
            ]
        },
        resolve: {
            extensions: ['*', '.js', '.jsx']
        },
        output: {
            path: path.resolve(__dirname, 'docs'),
            publicPath: 'https://rootzjs.org/',
            //filename: 'bundle.js',
            libraryTarget: 'umd',
            umdNamedDefine: true,
            globalObject: 'this'
        },
        optimization: {
            minimize: true,
            minimizer: [new TerserPlugin]
        }
    }
}