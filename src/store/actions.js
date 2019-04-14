import * as types from './mutation-type'
export const selectPlay = function({ commit }, { list, index }) {
  // 设置当前索引
  commit(types.SET_CURRENT_INDEX, index)
  // 设置全屏播放
  commit(types.SET_FULL_SCREEN, true)
  // 设置播放列表
  commit(types.SET_PLAY_LIST, list)
  // 设置顺序播放列表
  commit(types.SET_SEQUENCE_LIST, list)
  // 设置播放状态
  commit(types.SET_PLAYING_STATE, true)
}
