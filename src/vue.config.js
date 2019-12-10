module.exports = {
    devServer: {
      proxy: {
        '/api': {
          target: 'http://18.185.121.3:5000/',
          ws: true,
          changeOrigin: true
        }
      }
    }
  }