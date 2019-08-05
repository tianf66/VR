import axios from 'axios';
// axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
// axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
import config from '@/config.js';

import utils from '@/utils/';

let urls = config.urls;

let navConfig = window;

let store = {
    navConfig
};

/*
    @param
*/
store.getAlbum = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: urls[params.type],
            timeout: 3000,
            params: params
        }).then((response) => {
            let res = response.data;
            if(res.code === 1) {
                resolve(res.data);
            }
        }).catch((res) => {
            reject(res.status);
        });
    });
};

export default store;