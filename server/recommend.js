const axios = require('axios')
const router = require('express').Router()

// 获取轮播图数据
router.get('/swiper', async (req, res) => {
  let data = await axios({
    method: 'get',
    url: 'https://c.y.qq.com/musichall/fcgi-bin/fcg_yqqhomepagerecommend.fcg',
    params: {
      _: new Date().getTime(),
      g_tk: 5381,
      uin: 0,
      format: 'json',
      inCharset: 'utf-8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'h5',
      needNewCode: 1
    }
  })
  // console.log(data.data)
  res.send(data.data)
})

// 获取全部歌单数据
router.get('/playlist', async (req, res) => {
  let data = await axios({
    method: 'get',
    url: 'https://c.y.qq.com/splcloud/fcgi-bin/fcg_get_diss_by_tag.fcg',
    params: {
      picmid: 1,
      rnd: Math.random(),
      g_tk: 5381,
      loginUin: 0,
      hostUin: 0,
      format: 'json',
      inCharset: 'utf8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'yqq.json',
      needNewCode: 0,
      categoryId: 10000000,
      sortId: 5,
      sin: 0,
      ein: 19
    },
    headers: {
      origin: 'https://y.qq.com',
      Referer: 'https://y.qq.com/portal/playlist.html'
    }
  })
  res.send(data.data)
})

module.exports = router
