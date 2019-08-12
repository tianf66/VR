import dataCenter from '@/store/index.js';
import storage from '@/utils/storage.js';
const state = {
    index: 0,
    galleryList: [],
    data: {}
};

const mutations = {
    SETGALLERYLIST(state, {payload: {lists }}) {
      lists.forEach((item, index) => {
        state.galleryList.push(item.url);
      });
    },
    SETVIDEODATA(state, {payload: {data}}) {
      state.data = data;
    },
    CLEARDETAIL(state) {
      state.galleryList = [];
      state.data = {};
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
              params.userId = userInfo.user.id;
              // params.token = userInfo.token;
              params.phone = userInfo.user.phone;
              params.userId = userInfo.user.id;
              params.orderId = userInfo.userPricePackage.orderId;
            }
            //普通视频
            if(type == 'videoList' || type == 'vrList') params.type = 'freeVideoDetail';
            //vip视频
            if(type == 'videoList' || type == 'vrList' && !params.isFree) {
              params.type = 'noFreeVideoDetail';
              params.phone = userInfo.user.phone;
              params.userId = userInfo.user.id;
              params.orderId = userInfo.userPricePackage.orderId;
              // params.token = userInfo.token;
            }

            // store
            dataCenter.getDetail(params).then((res) => {
                let data = res;
                if((params.type == 'freeImageDetail' || params.type == 'noFreeImageDetail') && data) {
                  commit({
                    type: 'SETGALLERYLIST',
                    payload: {
                      lists: data
                    }
                  })
                } else {
                  commit({
                    type: 'SETVIDEODATA',
                    payload: {
                      data
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
