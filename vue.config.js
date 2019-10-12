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
  }
}
