const { defineConfig } = require("@vue/cli-service");
const path = require("path");

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: "./",
  devServer: {
    // proxy: {
    //   "^/api": {
    //     target: "http://123.207.32.32:5000",
    //     pathRewrite: {
    //       "^/api": "",
    //     },
    //     changeOrigin: true,
    //   },
    // },
    historyApiFallback: true,
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "src"),
        components: "@/components",
      },
    },
  },
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, 'src'),
  //     views: '@/views'
  //   }
  // },
  // chainWebpack: (config) => {
  //   config.resolve.alias
  //     .set("@", path.resolve(__dirname, "src"))
  //     .set("components", "@/components");
  // },
});
