
/***************************************************************/
// 创建一个对象来保存应用启动时的初始状态
const state = {
    home: {
        done: false,
        page: 0,
        lists: {}
    },
    channel: {
        lists: [],
    },
    imageList: {
        done: false,
        page: 0,
        lists: []
    },
    videoList: {
        done: false,
        page: 0,
        lists: []
    },
    vrVideoList: {
    	done: false,
        page: 0,
        lists: []
    }
};

import actions from './actions.js';
import mutations from './mutations.js';

export default {
  state,
  mutations,
  actions,
};
