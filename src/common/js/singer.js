export default class Singer {
  constructor({ Fsinger_id, Fsinger_name, Fsinger_mid }) {
    this.id = Fsinger_id
    this.name = Fsinger_name
    this.mid = `https://y.gtimg.cn/music/photo_new/T001R150x150M000${Fsinger_mid}.jpg?max_age=2592000`
  }
}
