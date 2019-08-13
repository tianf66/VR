import axios from 'axios';
import router from '../router';
import { Notify } from 'vant';
import {base64Encode} from '@/utils/base64.js';

axios.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded';
axios.defaults.headers['X-Requested-With'] = 'XMLHttpRequest';
import storage from '@/utils/storage.js';

import config from '@/config.js';

import utils from '@/utils/';

let user = storage.get('user');
// if(user) {
//     let token = storage.get('user').token;
//     if(token) {
//         axios.defaults.headers['token'] = token;
//     }
// }

let urls = config.urls;

let navConfig = window;

let store = {
    navConfig
};

/*
    @param 列表页
*/
store.getAlbum = (params) => {
    if(user) params.phone = user.user.phone;
    return new Promise((resolve, reject) => {
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
            Notify('Status Code');
            reject(res.status);
        });
    });
};
// 首页list
store.getHome = (params) => {
    if(user) params.phone = user.user.phone;
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
            Notify('Status Code');
            reject(res.status);
        });
    })
}

store.getDetail = (params) => {
    // imageDetail\videoDetail
    if(user) params.phone = user.user.phone;
    return new Promise((resolve, reject) => {
        axios({
            url: urls[params.type],
            timeout: 3000,
            params,
            headers: {
                token: storage.get('user').token
            }
        }).then((response) => {
            let res = response.data;
            if(res.code === 1) {
                resolve(res.data);
            } else if(res.code === 100) {//token失效需重新登录;
                let query = router.history.current.query;
                    query.first = 'detail';

                router.replace({name: "login", query: {...query}});
                storage.remove('user');
            } else {
                reject(res.code);
            }
        }).catch((res) => {
            Notify('Status Code');
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
                Notify(`${data.msg}`);
                reject(data.code);
            }
        }).catch((e) => {
            Notify('Status Code');
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
                Notify(`${data.msg}`);
                reject(data.data);
            }
        }).catch((e) => {
            Notify('Status Code');
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
                let info = data.data;
                if(storage.get('user')) storage.remove('user');
                // info.isVip = base64Encode('oupengVip');
                if(info.isVip) info.isVip = base64Encode('oupengVip');
                storage.set('user', info);

                //发送toke请求，获取token
                axios.post(urls.token, params, {
                    timeout: 5000,
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((response) => {
                    let data = response.data;
                    if(data.code === 1) {
                        info.token = data.data;
                        storage.set('user', info);
                    }
                }).catch((e) => {
                    Notify('请求错误token');
                    reject('error');
                });
                resolve(data);
            } else {
                Notify(`${data.msg}`);
                reject(data.data);
            }
        }).catch((e) => {
            Notify('Status Code');
            reject('error');
        });
    });
};

//token 获取token
// store.getToken = (params) => {
//     return new Promise((resolve, reject) => {
//         axios.post(urls.token, params, {
//             timeout: 5000,
//             headers: {
//                 'Content-Type': 'application/json'
//             }
//         }).then((response) => {
//             let data = response.data;
//             if(data.code === 1) {
//                 resolve(data);
//             }
//         }).catch((e) => {
//             Notify('请求错误');
//             reject('error');
//         });
//     });
// }

//会员中心套餐列表pricePackage
store.getPricePackage = (params) => {
    return new Promise((resolve, reject) => {
        axios({
            url: urls.pricePackage,
            timeout: 3000,
            params
        }).then((response) => {
            let res = response.data;
            if(res.code === 1) {
                resolve(res.data);
            } else {
                Notify('套餐列表请求错误');
            }
        }).catch((res) => {
            Notify('Status Code');
            reject();
        });
    });
}
//微信支付wxOrder
store.getWxOrder = (params) => {
    if(user) params.phone = user.user.phone;
    return new Promise((resolve, reject) => {
        axios.post(urls.wxOrder, params, {
            timeout: 5000,
            headers: {
                'Content-Type': 'application/json',
                token: storage.get('user').token
            }
        }).then((response) => {
            let data = response.data;
            if(data.code === 1) {
                resolve(data);
            } else if(data.code === 100) {//token失效需重新登录;
                Notify('需要重新登录');
                let query = router.history.current.query;

                router.replace({name: "login", query: {...query}});
                storage.remove('user');
            } else {
                Notify(`${data.msg}`);
            }
        }).catch((e) => {
            Notify('Status Code');
            reject('error');
        });
    });
}
// 微信支付订单查询
store.wxOrderSuccess = (params) => {
    if(user) params.phone = user.user.phone;
    return new Promise((resolve, reject) => {
        axios({
            url: urls.wxOrderSuccess,
            timeout: 3000,
            params,
            headers: {
                token: storage.get('user').token
            }
        }).then((response) => {
            let data = response.data;
            if(data.code === 1) {
                resolve(data);
            } else if(data.code === 100) {//token失效需重新登录;
                Notify('需要重新登录');
                let query = router.history.current.query;

                router.replace({name: "login", query: {...query}});
                storage.remove('user');
            } else {
                Notify(`${data.msg}`);
            }
        }).catch((res) => {
            Notify('Status Code');
            reject();
        });
    });
}
export default store;