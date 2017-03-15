module.exports = {
    entry: {
      main: "js/app.js"
    },
    output: {
        filename: "bundle.js",
        path: __dirname + '/build'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
