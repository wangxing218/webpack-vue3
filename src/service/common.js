/***
 * @file:
 * @author: wangxing
 * @Date: 2021-07-07 20:36:04
 */
/**
 * 公共服务
 */

export default {
  // 新标签打开链接
  open(url) {
    if (this._childWin) this._childWin.close()
    this._childWin = window.open(url, 'newWindow')
    return this._childWin
  },
}
