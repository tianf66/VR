import axios from 'axios';
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
import config from './../config.js';

import utils from '@/utils/';

let urls = config.urls;

let navConfig = window;

let store = {
    navConfig
};

/*
    @param
*/
store.freeVrVideoList = (params) => {
    let page = params.page,
        start = (page - 1) * count,
        end = page * count - 1;
    let data = {
        ...params,
        // start,
        count
    };
    return new Promise((resolve, reject) => {
        axios({
            url: urls.freeVrVideoList,
            timeout: 5000,
            params: data
        }).then((response) => {
            let res = response.data;
            console.log(res);
            if(res.code === 1) {
                resolve(res.data);
            }
        }).catch((res) => {
            reject(res.status);
        });
    });
};

export default store;