const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  publicPath: process.env.PUBLIC_URL || "/",
  filenameHashing: false,
  configureWebpack: {
    output: {
      filename: "js/[name].js",
      chunkFilename: "js/[id].js"
    },
    resolve: {
      extensions: ['.js', '.vue', '.json', '.sass'],
      alias: {
        '@': path.resolve('src'),
        '@components': path.resolve('src/components'),
        '@views': path.resolve('src/views'),
        '@styles': path.resolve('src/styles'),
      }
    },
    module: {
      rules: [{
        test: /\.s[ac]ss$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
            loader: 'sass-loader',
            options: {
              indentedSyntax: true,
              sassOptions: {
                indentedSyntax: true
              }
            }
          }
        ]
      }, {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: /node_modules/,
        include: /src/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      }]
    },
  }
});
