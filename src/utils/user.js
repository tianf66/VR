// let phoneNum = /^1[3|4|5|8][0-9]\d{4,8}$/;
let phoneNum = /^[1][3,4,5,6,7,8,9][0-9]{9}$/;
let password = /^[0-9a-zA-Z]{6,20}$/;
let userName = /^[\u4E00-\u9FA50-9a-zA-Z]+$/;
let userCode = /^\d{4}$/;

export default {
    checkValue: function(value, type) {
        switch(type) {
            case 'name' :
                return userName.test(value);
            break;
            case 'number' :
                return phoneNum.test(value);
                // return arr ? true : false;
            break;
            case 'password' :
                return password.test(value);
            case 'code' :
            	return userCode.test(value);
            break;
        }
    }
};