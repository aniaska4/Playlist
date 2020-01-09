module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
      ? '/loan_slider/'
      : '/',

      
    devServer: {
      proxy: {
        '/api': {
          target: 'http://omdbapi.com/?i=tt3896198&apikey=14ec1b18',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }