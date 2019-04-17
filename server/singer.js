const axios = require('axios');
const router = require('express').Router();

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
  });
  res.send(data.data);
});

// 获取歌手详情
router.get('/detail', async (req, res) => {
  // 002J4UUk29y8BY
  let id = req.query.id;
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
  });
  res.send(data.data);
});

// 获取歌曲地址
router.get('/url', async (req, res) => {
  let mid = req.query.mid;
  let id = req.query.id;
  let data = await axios({
    method: 'get',
    url: 'https://u.y.qq.com/cgi-bin/musicu.fcg',
    params: {
      '-': 'getUCGI7258871958319142',
      g_tk: 5381,
      loginUin: 0,
      hostUin: 0,
      format: 'json',
      inCharset: 'utf8',
      outCharset: 'utf-8',
      notice: 0,
      platform: 'yqq.json',
      needNewCode: 0,
      data: `{"comm":{"ct":24,"cv":0},"songinfo":{"method":"get_song_detail_yqq","param":{"song_type":0,"song_mid":"${mid}","song_id":${id}},"module":"music.pf_song_detail_svr"}}`
    },
    headers: {
      referer: `https://y.qq.com/n/yqq/song/${mid}.html`,
      origin: 'https://y.qq.com'
    }
  });
  res.send(data.data);
});
module.exports = router;
