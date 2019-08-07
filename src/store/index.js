import axios from 'axios';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
import config from '@/config.js';

import utils from '@/utils/';

let urls = config.urls;

let navConfig = window;

let store = {
    navConfig
};

/*
    @param 列表页
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
// 首页list
store.getHome = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: urls.home,
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
    })
}

store.getDetail = (params) => {
    // imageDetail\videoDetail
    return new Promise((resolve, reject) => {
        axios({
            url: urls[params.urls],
            timeout: 3000,
            params
        }).then((response) => {
            let res = response.data;
            if(res.code === 1) {
                resolve(res.data);
            }
        }).catch((res) => {
            reject();
        })
    });
}

//用户注册
// register
store.getRegister = (params) => {
    return new Promise((resolve, reject) => {
        axios.post(urls.register, params, {
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            let data = response.data;
            if(data && data.code === 1) {
                resolve(data);
            } else {
                reject(data.code);
            }
        }).catch((e) => {
            reject();
        });
    });
}

//getCode 获取验证码
store.getCode = (params) => {
    return new Promise((resolve, reject) => {
        axios.post(urls.code, params, {
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            let data = response.data;
            if(data && data.code === 1) {
                resolve(data);
            } else {
                reject(data.data);
            }
        }).catch((e) => {
            reject('error');
        });
    });
}

//登录login
store.getLogin = (params) => {
    return new Promise((resolve, reject) => {
        axios.post(urls.login, params, {
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json'
            },
        }).then((response) => {
            let data = response.data;
            if(data && data.code === 1) {
                resolve(data);
            } else {
                reject(data.data);
            }
        }).catch((e) => {
            reject('error');
        });
    });
}
export default store;