import dataCenter from '@/store/index.js';
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
            dataCenter.getDetail(params).then((res) => {
                let data = res;
                console.log(data);
                if(params.urls == 'imageDetail') {
                  commit({
                    type: 'SETGALLERYLIST',
                    payload: {
                      lists: data
                    }
                  })
                }
                resolve(data);
            }, (err) => {
                //
            });
        });
    },
};

export default {
  state,
  actions,
  mutations
};
