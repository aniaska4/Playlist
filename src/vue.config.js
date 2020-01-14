module.exports = {
  publicPath: process.env.VUE_APP_PUBLIC_PATH,


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