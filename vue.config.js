module.exports = {
    devServer: {
        proxy: {
            '/web': {
                // target: 'http://172.31.92.205:9000/', // 本地
                target: 'http://116.63.138.138:39010',
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
