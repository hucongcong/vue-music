// 歌手
export const singer = state => state.singer

// 播放状态
export const playingState = state => state.playingState

// 是否全屏
export const fullScreen = state => state.fullScreen

// 播放列表
export const playList = state => state.playList

// 顺序的播放列表
export const sequenceList = state => state.sequenceList

// 播放模式
export const mode = state => state.mode

// 当前歌曲下标
export const currentIndex = state => state.currentIndex

// 当前歌曲
export const currentSong = state => {
  return state.playList[state.currentIndex] || {}
}
