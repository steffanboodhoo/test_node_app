const path = require('path');

module.exports = {
    entry: {
        server:'./src/app.js'
    },
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'my-first-webpack.bundle.js'
    },
    module:{
        rules:[
            { test:'/\.js$', exclude:/node_modules/, loader:'babel-loader'}
        ]
    },

    mode:'development'
}