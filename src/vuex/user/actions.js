import dataCenter from '@/store/index.js';

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
                let data = res;
                resolve(data);
            }, (err) => {
                //
            });
        });
    },
    getToken({commit, state, dispatch}, params) {
        return new Promise((resolve, reject) => {
            dataCenter.getToken(params).then((res) => {
                let data = res;
                resolve(data);
            }, (err) => {
                //
            });
        });
    },
};
