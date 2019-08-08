import axios from 'axios';
import router from '../router';
axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
import storage from '@/utils/storage.js';

import config from '@/config.js';

import utils from '@/utils/';

let user = storage.get('user');
if(user) {
    let token = storage.get('user').token;
    if(token) {
        axios.defaults.headers['token'] = token;
    }
}

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

        console.log(params, 'store');
        axios({
            url: urls[params.config],
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
            params: params,
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
            url: urls[params.type],
            timeout: 3000,
            params
        }).then((response) => {
            let res = response.data;
            if(res.code === 1) {
                resolve(res.data);
            } else if(res.code === 100) {//token失效需重新登录;
                let query = router.history.current.query;
                    query.first = 'detail';

                router.push({name: "login", query: {...query}});
                storage.remove('user');
            } else {
                reject(res.code);
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

//token 获取token
store.getToken = (params) => {
    return new Promise((resolve, reject) => {
        axios.post(urls.token, params, {
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            let data = response.data;
            if(data.code === 1) {
                resolve(data);
            }
        }).catch((e) => {
            reject('error');
        });
    });
}
export default store;