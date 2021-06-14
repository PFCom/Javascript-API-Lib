import path from "path"
import UglifyJsPlugin from "uglifyjs-webpack-plugin"
import { dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))

export default {
    entry: './src/PFComAPI.ts',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.ts?$/,
                use: 'ts-loader'
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    output: {
        filename: 'pfcomapi.js',
        path: path.resolve(__dirname, 'built'),
        library: {
            name: "PFComAPI",
            type: "umd"
        }
    },
    target: "node",
    plugins: [
        new UglifyJsPlugin({
            sourceMap: true,
            include: /\.min\.js$/
        })
    ]
}
