const path = require("path");
const VueLoaderPlugin = require("vue-loader/lib/plugin");
const vue2ScriptSetupWebpackPlugin = require("unplugin-vue2-script-setup/webpack");

module.exports = (env) => {
  return {
    resolve: {
      extensions: [".ts", ".vue", ".js", ".json"],
      alias: {
        crypto: false,
        buffer: false,
        stream: false,
        vue$: "vue/dist/vue.esm.js",
      },
    },
    module: {
      unknownContextCritical: false,
      rules: [
        {
          test: /\.vue$/,
          loader: "vue-loader",
          exclude: /node_modules/,
        },
        {
          test: /\.(ts|js)x?$/,
          exclude: /node_modules/,
          use: [
            {
              loader: "babel-loader",
              options: {
                presets: [
                  "@babel/preset-env",
                ],
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new VueLoaderPlugin(),
      vue2ScriptSetupWebpackPlugin({ refTransform: true }),
    ],
    devServer: {
      https: false,
      port: 8080,
      host: "localhost",
      overlay: true,
      compress: true,
      historyApiFallback: true,
      open: true,
    },
    mode: "development",
  };
};
