module.exports = {
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