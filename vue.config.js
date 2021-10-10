module.exports = {
    devServer: {
        proxy: {
            '/web': {
                target: 'http://localhost:39010/',
                // target: 'http://116.63.138.138:39010',
                changeOrigin: true,
                pathRewrite: {
                    '^/web': ''
                }
            },
            '/ks-account': {
                target: 'http://localhost:7455',
                changeOrigin: true
            }
        }
    }
}
