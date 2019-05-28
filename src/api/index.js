/**
  * api接口的统一出口
  */
// 搜索模块接口
import search from "./search"
// 歌手信息模块接口
import artistslist from './artists'
//首页歌曲信息模块接口
import homelist from './homelist'
//首页Tab切换模块接口
import tablist from './tablist'
//歌词模块接口
import lrc from './lrc'
// 导出接口
export default {
    search,
    homelist,
    tablist,
    artistslist,
    lrc
    // 其他接口...
}
