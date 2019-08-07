import {base64Decode} from '@/utils/base64.js';
export default {
    //
    SERUSERVIP(state, {payload: {isVip}}) {
        state.isVip = base64Decode(isVip) == 'oupengVip';
        console.log(state);
    },
};