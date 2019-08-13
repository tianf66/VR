<template>
<div class="register-box">
    <!-- 头部 start -->
    <header-view :back="true"></header-view>
    <!-- 头部 end -->
    <div class="box-center">
        <h3 class="title">快速注册</h3>
        <!--<section class="marginTop">
            <input type="text" placeholder="请输入用户名" v-model="username" @blur="checkName('name')"/>
        </section>-->
         <section class="marginTop">
            <input type="text" placeholder="请输入手机号" v-model="number" @blur="checkNum('number')">
            <label class="tip error" v-show="numberErr">请输入正确的手机号</label>
        </section>
        <section class="marginTop">
            <input type="text" placeholder="请输入验证码" v-model="code">
            <input type="button" class="code-btn" @click="getCodeHandle" :value="codeMsg" :disabled="disabledCode">
        </section>
        <section class="marginTop">
            <input type="password" placeholder="请输入密码" v-model="passwd" @blur="checkPassword('password')"/>
            <label :class="['tip', passwdErr ? 'error' : '']">请输入6~20个字符</label>
        </section>
        <!-- <div class="info-entry">
            <i class="agree_1" v-if="agree_1" @click="agreeA"></i>
            <i class="agree_2" v-if="agree_2" @click="agreeB"></i>
            <span>已阅读并同意
                <router-link to="/protocol">《小欧用户协议手册》</router-link>
            </span>
        </div> -->
        <section>
            <a :class="['login-btn', 'before-btn', phoneOk && passwdOk && codeOk && agree_1 ? 'after-btn' : '']" @click="toRegister">注册</a>
        </section>
    </div>
</div>
</template>

<script>
import user from '@/utils/user.js';
import {base64Encode} from '@/utils/base64.js';
import HeaderView from '@/components/modules/Header.vue';
// import fadeOut from 'modules/FadeOut.vue';
// import storage from 'utils/storage.js';
export default {
    name: 'register',
    components: {
        HeaderView,
    },
    data() {
        return {
//          username: '',
//          nameErr: false,
            passwd: '',
            passwdErr: false,
            number: '',
            numberErr: false,
            code: '',
            codeMsg: '获取验证码',
            codding: false,
            agree_1: true,
            agree_2: false,
            disabledCode: false,
            codeOk: false,
            phoneOk: false,
            passwdOk: false,
            timer: ''
        };
    },
    beforeMount() {
        //
    },
    mounted() {
    },
    computed: {
    },
    watch: {
        number: function() {
            this.checkPhone('number');
        },
        code: function() {
        	this.checkCode('code');
        },
        passwd: function() {
            this.checkPasswd('password');
        }
    },
    methods: {
    	checkPhone: function(type) {
            if(user.checkValue(this.number, type)) {
                this.phoneOk = true;
            } else {
                this.phoneOk = false;
            }
        },
    	checkPasswd: function(type) {
            if(user.checkValue(this.passwd, type)) {
                this.passwdOk = true;
            } else {
                this.passwdOk = false;
            }
        },
        checkCode: function(type) {
        	if(user.checkValue(this.code, type)) {
                this.codeOk = true;
            } else {
                this.codeOk = false;
            }
        },
        checkPassword: function(type) {
            if(user.checkValue(this.passwd, type) || !this.passwd) {
                this.passwdErr = false;
            } else {
                this.passwdErr = true;
            }
        },
        checkNum: function(type) {
            if(user.checkValue(this.number, type) || !this.number) {
                this.numberErr = false;
            } else {
                this.numberErr = true;
            }
        },
        codeParams: function() {
            let params = {};
            // params.type = 1;
            // params.phone = base64Encode(this.number);
            params.phone = parseInt(this.number);
            return params;
        },
        getCodeHandle: function() {
            if(!this.numberErr) {
            	if(!this.number) this.$toast('请填写手机号码');
                else if(!this.codding) {
                    this.$store.dispatch('getCode', this.codeParams()).then((res) => {
                        if(res.code == 1) this.countDown();
                        else this.$toast('获取验证码失败');
                    });
                }
            }
        },
        registerParams: function() {
            let params = {
                // pass: base64Encode(this.passwd),
                // phone: base64Encode(this.number),
                // code: base64Encode(this.code)
            };
            params.password = this.passwd;
            params.phone = parseInt(this.number);
            params.smsCode = this.code;

            return params;
        },
        toRegister: function() {
            let _this = this;
            if(!this.number) this.$toast('请输入手机号');
            else if(!this.code) this.$toast('请输入验证码');
            else if(!this.passwd) this.$toast('请输入密码');
            if(!this.passwdErr && !this.numberErr && this.agree_1) {
                if(this.number && this.code && this.passwd) {

                    this.$store.dispatch('getRegister', this.registerParams()).then((res) => {

                        this.$toast(`${res.msg}`);
                        let query = _this.$route.query;
                        _this.$router.push({name: query.memberCentre, query: {...query}});
                    });
                }
            }
        },
        countDown: function() {
            let _this = this;
            let seconds = 120;
            this.timer = setInterval(function() {
                if(seconds > 0) {
                    _this.codeMsg = `${seconds--}s后重新获取`;
                    _this.codding = true;
                    _this.disabledCode = true;
                }
                else {
                    clearInterval(_this.timer);
                    _this.codeMsg = '获取验证码';
                    _this.codding = false;
                    _this.disabledCode = false;
                }
            }, 1000);
        },
        // agreeA: function() {
        // 	this.agree_1 = false;
        // 	this.agree_2 = true;
        // },
        // agreeB: function(){
        // 	this.agree_1 = true;
        // 	this.agree_2 = false;
        // },
        reset: function() {
            this.passwd = '';
            this.passwdErr = false;
            this.number = '';
            this.numberErr = false;
            this.code = '';
            this.codeMsg = '获取验证码';
            this.codding = false;
            // this.agree_1 = true;
            // this.agree_2 = false;
            this.disabledCode = false;
            this.codeOk = false;
            this.phoneOk = false;
            this.passwdOk = false;
        }
    },
    beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当钩子执行前，组件实例还没被创建
        next((vm) => {
            // 通过 `vm` 访问组件实例
            vm.actived = true;
            vm.time = Date.now();
            vm.reset();
            // if(storage.get('detailComment'))
                // storage.remove('detailComment');
        });
    },
    beforeRouteLeave(to, from, next) {
        this.actived = false;
        clearInterval(this.timer);
        next();
    },
};
</script>

<style lang="scss" scoped>
.box-center {
    padding: 0 0.35rem;
    .marginTop {
        margin-top: 0.2rem;
        border-bottom: 1px solid #E0E0E0;
        input{
        	border: 0;
        	outline: none;
        }
    }
    .title {
        text-align: center;
        color: #212121;
        font-size: 0.2rem;
        font-family: 'DroidSansFallback';
        font-weight: normal;
        margin-top: 0.2rem;
    }
    section {
        line-height: 0.42rem;
        position: relative;
        padding: 0 0.1rem;
        input {
            width: 100%;
            height: 100%;
        }
        .tip, .code-btn {
            position: absolute;
            right: 0.1rem;
            top: 0;
        }
        .code-btn {
        	width: 1rem;
        	height: 0.42rem;
            color: #999;
            background: white;
            border: 0;
            font-size: 0.12rem;
            outline: none;
        }
    }
    .info-entry {
    	// height: 0.5rem;
        margin-top: 0.24rem;
        line-height: 0.24rem;
        span {
            vertical-align: top;
            a {
                color: #5DAFFF;
                vertical-align: top;
            }
        }
        .agree_1{
        	display: inline-block;
			width: 0.24rem;
	        height: 0.24rem;
			background: url("//i.opfed.com/opgirl/v2/sprite2.png") no-repeat;
		    background-position: -0.52rem -0.12rem;
		    background-size: 2.3rem;
		    border-radius: 50%;
        }
        .agree_2{
        	display: inline-block;
			width: 0.24rem;
	        height: 0.24rem;
			background: url("//i.opfed.com/opgirl/v2/sprite2.png") no-repeat;
		    background-position: -1.02rem -0.14rem;
		    background-size: 2.3rem;
		    border-radius: 50%;
        }
    }
    .login-btn {
        line-height: 0.32rem;
        width: 1.56rem;
        border-radius: 1rem;
        display: block;
        text-align: center;
        margin: 0.48rem auto 0;
    }
    .after-btn {
        background-color: #F13031 !important;
        color: #fff !important;
    }
    .before-btn {
        background-color: #EAECF2;
        color: #333;
    }
    .tip {
        color: #eeeeee;
    }
    .error {
        color: #F84141;
        font-size: 0.13rem;
    }
}
</style>