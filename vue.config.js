// 1、引入等比适配插件 npm install postcss-px2rem px2rem-loader --save https://ww.jianshu.com/p/97feec9d91d5
const px2rem = require("postcss-px2rem");

// 2、配置基本大小
const postcss = px2rem({
    // 基准大小 baseSize，需要和rem.js中相同
    remUnit: 100 //设计稿宽度除以10
});

module.exports = {
    //3、引入，这三步骤是为了适配ui组件的
    lintOnSave: true,
    css: {
        loaderOptions: {
            postcss: {
                plugins: [postcss]
            }
        }
    },
    publicPath: "./",
    productionSourceMap: true,
    // configureWebpack: config => {
    //     if (debug) { // 开发环境配置
    //         config.devtool = 'source-map'
    //     }
    // },
    // 配置跨域代理
    devServer: {
        // Paths
        host: "localhost",
        port: "8080",
        https: false,
        open: true,
        proxy: {
            "/api": {
                // 匹配所有以 '/api'开头的请求路径
                target: "http://rsapi.snowpa.cn", // 代理目标的基础路径
                changeOrigin: true, // 支持跨域
                pathRewrite: {
                    // 重写路径: 去掉路径中开头的'/api'
                    "^/api": ""
                }
            }
        }
    },
    chainWebpack: config => {
        config.module
            .rule("images")
            .use("url-loader")
            .loader("url-loader")
            .tap(options => Object.assign(options, { limit: 20000 }));
    }
};
