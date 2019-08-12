import {base64Decode} from '@/utils/base64.js';
export default {
    //
    SERUSERVIP(state, {payload: {isVip}}) {
        state.isVip = base64Decode(isVip) == 'oupengVip';
    },
    SETRECHARGEOPT(state, {payload: {data}}) {
    	state.rechargeOpt = data;
    },
    CLEARRECHARGEOPT(state) {
    	state.rechargeOpt = [];
    }
};