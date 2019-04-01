const path = require('path')
const recommend = require('./server/recommend.js')
const singer = require('./server/singer.js')
function resolve(dir) {
  return path.join(__dirname, dir)
}
module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@$', resolve('src'))
      .set('common', resolve('src/common'))
      .set('components', resolve('src/components'))
      .set('base', resolve('src/base'))
  },
  devServer: {
    before(app) {
      app.use('/recommend', recommend)
      app.use('/singer', singer)
    }
  }
}
