const axios = require('axios')
const router = require('express').Router()

// 获取歌手列表
router.get('/list', async (req, res) => {
  let data = await axios({
    method: 'get',
    url: 'https://c.y.qq.com/v8/fcg-bin/v8.fcg',
    params: {
      channel: 'singer',
      page: 'list',
      key: 'all_all_all',
      pagesize: 100,
      pagenum: 1,
      g_tk: 1664029744,
      loginUin: 280309453,
      hostUin: 0,
      format: 'json',
      inCharset: 'utf8',
      outCharset: 'utf-8',
      needNewCode: 0,
      platform: 'yqq.json'
    }
  })
  res.send(data.data)
})
module.exports = router
