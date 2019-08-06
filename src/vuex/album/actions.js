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
                type = params.type;

            commit({type: 'NOALBUMDATA', payload: {type: params.type}});
            let done = !data || data.length === 0;
            let lists = done ? [] : getColumnsData(columns, data, page);

            commit({
                type: 'SETALBUM',
                payload: {
                    page,
                    lists,
                    type,
                    done
                }
            });
        }, (err) => {
            console.error('没有获取到列表数据', params);
            commit({
                type: 'NOALBUMDATA',
                payload: {
                    type: parmas.type
                }
            });
        });
    },
    loadHome({commit, state, dispatch}, params) {
        return dataCenter.getHome(params).then((data) => {

            commit({
                type: 'SETHOME',
                payload: {
                    obj: data
                }
            });
        });
    }
};

export default actions;