var webpackconfig = require("./webpack.config.js")
module.exports = function(config){
    config.set({
        browsers: ['PhantomJS'],
        hostname: process.env.IP,
        port: process.env.PORT,
        runnerPort: 0,
        singleRun: true,
        frameworks: ['mocha'],
        files: ['app/tests/**/*.test.jsx',
                'node_modules/jquery/dist/jquery.js'
                ],
        preprocessors: {
            'app/tests/**/*.test.jsx': ['webpack', 'sourcemap', 'jQuery'] //load the app and show up the source code not bundle.js
        },
        reporters: ['mocha'], 
        client: {
            timeout: '5000',
        },
        webpack: webpackconfig,
        webpackServer: {
            noInfo: true
        },
        phantomjsLauncher: {
      // Have phantomjs exit if a ResourceError is encountered (useful if karma exits without killing phantom)
        exitOnResourceError: true
    },
        
    })
}