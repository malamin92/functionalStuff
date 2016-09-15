module.exports = {
    entry: './src/app.js',
    output: {
        path: __dirname,
        output: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {presets: ['es2015', 'react']}
            }
        ]
    }
}