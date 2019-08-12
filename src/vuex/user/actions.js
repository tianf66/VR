import dataCenter from '@/store/index.js';
import storage from '@/utils/storage.js';

export default {
    getRegister({commit, state, dispatch}, params) {
        return new Promise((resolve, reject) => {
            dataCenter.getRegister(params).then((res) => {
                let data = res;
                resolve(data);
            }, (err) => {
                //
            });
        });
    },
    getCode({commit, state, dispatch}, params) {
        return new Promise((resolve, reject) => {
            dataCenter.getCode(params).then((res) => {
                let data = res;

                resolve(data);
            }, (err) => {
                //
            });
        });
    },
    getLogin({commit, state, dispatch}, params) {
        return new Promise((resolve, reject) => {
            dataCenter.getLogin(params).then((res) => {
                //
                let info = res.data;
                commit({
                    type: 'SERUSERVIP',
                    payload: {
                        isVip: info.isVip
                    }
                });
                resolve(res);
            }, (err) => {
                //
            });
        });
    },
    // getToken({commit, state, dispatch}, params) {
    //     return new Promise((resolve, reject) => {
    //         dataCenter.getToken(params).then((res) => {
    //             let data = res;
    //             resolve(data);
    //         }, (err) => {
    //             //
    //         });
    //     });
    // },
    getPricePackage({commit, state, dispatch}, params) {
        return new Promise((resolve, reject) => {
            let userInfo = storage.get('user')
            let params = {
                phone: userInfo.user.phone,
                userId: userInfo.user.id
            }
            dataCenter.getPricePackage(params).then((data) => {
                commit({
                    type: 'SETRECHARGEOPT',
                    payload: {
                        data
                    }
                })
            });
        });
    },
    getWxOrder({commit, state, dispatch}, params) {
        return new Promise((resolve, reject) => {
            dataCenter.getWxOrder(params).then((data) => {
                resolve(data);
            });
        });
    }
};
