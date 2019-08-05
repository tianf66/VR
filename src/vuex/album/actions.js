import dataCenter from '@/store/index.js';

function getColumnsData(lastColumns, lists) {
    let columns = [];
    for(let i = 0; i < lists.length; i++) {
        let list = lists[i];
        columns.push(list);
    }
    return columns;
}

const actions = {
    loadAlbum({commit, state, dispatch}, params) {
        return dataCenter.getAlbum(params).then((res) => {
            let data = res;
            let columns = data,
                page = params.page,
                type = params.type
            let lists = getColumnsData(columns, data, page);
            console.log(lists);
            commit({
                type: 'SETALBUM',
                payload: {
                    page,
                    lists,
                    type,
                }
            });
        }, (err) => {
           console.error('没有获取到列表数据', params);
        });
    }
};

export default actions;