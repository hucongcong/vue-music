/* 歌曲类 */
class Song {
  constructor({
    songid,
    songmid,
    singer,
    songname,
    albumname,
    interval,
    albummid
  }) {
    this.id = songid
    this.mid = songmid
    this.singer = _formatSinger(singer)
    this.name = songname
    this.album = albumname
    this.duration = interval
    this.image = `https://y.gtimg.cn/music/photo_new/T002R300x300M000${albummid}.jpg?max_age=2592000`
    // TODO
    this.url = `http://ws.stream.qqmusic.qq.com/${songid}.m4a?fromtag=46`
  }
}

/**
 * 格式化歌手
 * @param {Array} singer 歌手数据，是一个数组
 * @return 返回歌手名拼接成的字符串
 */
function _formatSinger(singer) {
  if (!singer.length) {
    return ''
  }
  let temp = []
  singer.forEach(item => {
    temp.push(item.name)
  })
  return temp.join('/')
}

export default Song
