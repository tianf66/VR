import dataCenter from '@/store/index.js';
import storage from '@/utils/storage.js';
const state = {
    index: 0,
    galleryList: []
};

const mutations = {
    SETGALLERYLIST(state, {payload: {lists }}) {
      lists.forEach((item, index) => {
        state.galleryList.push(item.url);
      });
    }
};

const actions = {
    getDetail({commit, state, dispatch}, params) {
        return new Promise((resolve, reject) => {
            let type = params.type,
                userInfo = storage.get('user');
            //普通图集
            if(type == 'galleryList') params.type = 'freeImageDetail';
            //vip图集
            if(type == 'galleryList' && !params.isFree) {
              params.type = 'noFreeImageDetail';
              params.userId = userInfo.user.userId;
              params.token = userInfo.token;
            }
            //普通视频
            if(type == 'videoList' || type == 'vrList') params.type = 'freeVideoDetail';
            //vip视频
            if(type == 'videoList' || type == 'vrList' && !params.isFree) {
              params.type = 'noFreeVideoDetail';
              params.userId = userInfo.user.userId;
              params.token = userInfo.token;
            }

            // store
            dataCenter.getDetail(params).then((res) => {
                let data = res;
                if(params.urls == 'imageDetail' && data) {
                  commit({
                    type: 'SETGALLERYLIST',
                    payload: {
                      lists: data
                    }
                  })
                }
                resolve(data);
            }, (err) => {
                reject(err);
            });
        });
    },
};

export default {
  state,
  actions,
  mutations
};
