const axios = require('axios')
const router = require('express').Router()
// 获取uid
let _uid = ''
function getUid() {
  if (_uid) {
    return _uid
  }
  if (!_uid) {
    const t = new Date().getUTCMilliseconds()
    _uid = '' + ((Math.round(2147483647 * Math.random()) * t) % 1e10)
  }
  return _uid
}
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

// 获取歌手详情
router.get('/detail', async (req, res) => {
  // 002J4UUk29y8BY
  let id = req.query.id
  let data = await axios({
    method: 'get',
    url: 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_singer_track_cp.fcg',
    params: {
      g_tk: 5381,
      loginUin: 0,
      hostUin: 0,
      format: 'json',
      inCharset: 'utf8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'yqq.json',
      needNewCode: 0,
      ct: 24,
      singermid: id,
      order: 'listen',
      begin: 0,
      num: 100
    }
  })
  res.send(data.data)
})

// 获取歌曲地址
router.get('/url', async (req, res) => {
  let mid = req.query.mid
  let id = req.query.id
  let data = await axios({
    method: 'get',
    url: 'https://u.y.qq.com/cgi-bin/musicu.fcg',
    params: {
      '-': getUid(),
      g_tk: 5381,
      loginUin: 0,
      hostUin: 0,
      format: 'json',
      inCharset: 'utf8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'yqq.json',
      needNewCode: 0,
      data: `{"req":{"module":"CDN.SrfCdnDispatchServer","method":"GetCdnDispatch","param":{"guid":"7360886905","calltype":0,"userip":""}},"req_0":{"module":"vkey.GetVkeyServer","method":"CgiGetVkey","param":{"guid":"7360886905","songmid":["${mid}"],"songtype":[0],"uin":"0","loginflag":1,"platform":"20"}},"comm":{"uin":0,"format":"json","ct":24,"cv":0}}`
    },
    headers: {
      referer: `https://y.qq.com/n/yqq/song/${mid}.html`,
      origin: 'https://y.qq.com'
    }
  })
  res.send(data.data)
})
module.exports = router
