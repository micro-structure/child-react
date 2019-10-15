const isBuild = process.env.NODE_ENV === 'production'

module.exports = {
  publicPath: isBuild ? './child-react/dist' : './',

  // filenameHashing: false,

  configureWebpack: {
    externals: {
      react: 'React',
      'react-router-dom': 'ReactRouterDOM',
      'react-dom': 'ReactDOM'
    }
  },

  chainWebpack: config => {
    config
      .optimization.splitChunks({
      cacheGroups: {
        vendors: {
          name: `chunk-vendors`,
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: `chunk-common`,
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    })
  }
}
