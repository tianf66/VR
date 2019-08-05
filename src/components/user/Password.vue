<template>
<div class="register-box">
    <!-- 头部 start -->
    <header-view :back="true"></header-view>
    <!-- 头部 end -->
    <div class="box-center">
        <h3 class="title">修改密码</h3>
        <section class="marginTop">
            <input type="text" placeholder="手机号" v-model="number" @blur="checkNum('number')">
            <label class="tip error" v-show="numberErr">请输入正确的手机号</label>
        </section>
        <section class="marginTop">
            <input type="text" placeholder="验证码" v-model="code">
            <input type="button" class="code-btn" @click="getCodeHandle" :value="codeMsg" :disabled="disabledCode">
        </section>
        <section class="marginTop">
            <input type="password" placeholder="新密码" v-model="passwd" @blur="checkPasswd('password')"/>
            <label :class="['tip', passwdErr ? 'error' : '']">请输入6~20个字符</label>
        </section>
        <section class="marginTop">
            <input type="password" placeholder="重复输入密码" v-model="repasswd" @blur="diffPasswd"/>
            <label class="tip error" v-show="repasswdErr">密码不一致</label>
        </section>
        <div class="info-entry">
            <i :class="agreeCheck ? 'agree_1' : 'agree_2'" @click="agreeA"></i>
            <span>已阅读并同意
                <!-- <router-link to="/protocol">《小欧用户协议手册》</router-link> -->
            </span>
        </div>
        <section>
            <a :class="['login-btn', 'before-btn', phoneOk && passwdOk && passwd2Ok && codeOk && agreeCheck ? 'after-btn' : '']" @click="sureModify">确定</a>
        </section>
    </div>
</div>
</template>

<script>
import user from '@/utils/user.js';
import {base64Encode} from '@/utils/base64.js';
import HeaderView from '@/components/modules/Header.vue';
// import fadeOut from 'modules/FadeOut.vue';
export default {
    name: 'register',
    components: {
        HeaderView,
    },
    data() {
        return {
            passwd: '',
            passwdErr: false,
            repasswd: '',
            repasswdErr: false,
            number: '',
            numberErr: false,
            code: '',
            codeMsg: '获取验证码',
            codding: false,
            agreeCheck: true,
            disabledCode: false,
            phoneOk: false,
            passwdOk: false,
            passwd2Ok: false,
            codeOk: false
        };
    },
    beforeMount() {
        //
    },
    mounted() {
        //
    },
    computed: {
        // aid() {
        //     return this.$store.state.common.ads.lc.s;
        // }
    },
    watch: {
        number: function() {
            this.checkPhone('number');
        },
        passwd: function() {
            this.checkPasswd('password');
        },
        repasswd: function() {
        	this.checkRepasswd('password');
        },
        code: function() {
        	this.checkCode('code');
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
        checkRepasswd: function(type) {
        	if(user.checkValue(this.repasswd, type)) {
                this.passwd2Ok = true;
            } else {
                this.passwd2Ok = false;
            }
        },
        checkCode: function(type) {
        	if(user.checkValue(this.code, type)) {
                this.codeOk = true;
            } else {
                this.codeOk = false;
            }
        },
        diffPasswd: function() {
            if(this.passwd === this.repasswd || !this.repasswd) {
                this.repasswdErr = false;
            } else {
                this.repasswdErr = true;
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
            params.type = 2;
            params.phone = base64Encode(this.number);
            return params;
        },
        getCodeHandle: function() {
            if(!this.numberErr) {
            	if(!this.number) fadeOut.main('请填写手机号码');
                if(!this.codding && this.number) {
                    this.$store.dispatch('getCode', this.codeParams()).then((res) => {
                        if(res.status == 0) {
                            // fadeOut.main('验证码已发送');
                            this.countDown();
                        }
                        else if(res.status == 1) fadeOut.main('该手机号已注册');
                        else fadeOut.main('获取验证码失败');
                    });
                }
            }
        },
        countDown: function() {
            let _this = this;
            let seconds = 120;
            let timer = setInterval(function() {
                if(seconds > 0) {
                    _this.codeMsg = `${seconds--}s后重新获取`;
                    _this.codding = true;
                    _this.disabledCode = true;
                }
                else {
                    clearInterval(timer);
                    _this.codeMsg = '获取验证码';
                    _this.codding = false;
                    _this.disabledCode = false;
                }
            }, 1000);
        },
        passParams: function() {
            let params = {
                pass: base64Encode(this.passwd),
                phone: base64Encode(this.number),
                code: base64Encode(this.code)
            };
            return params;
        },
        sureModify: function() {
            // let _this = this;
            if(!this.number) fadeOut.main('请输入手机号');
            else if(!this.code) fadeOut.main('请输入验证码');
            else if(!this.passwd) fadeOut.main('请输入密码');
            else if(!this.repasswd) fadeOut.main('请重复输入密码');
            else if(!this.passwdErr && !this.repasswdErr && !this.numberErr && this.code && this.repasswd && this.agreeCheck) {
                this.$store.dispatch('modifyPass', this.passParams()).then((res) => {
                    if(res.status == 0) {
                        fadeOut.main('修改成功');
                        window.history.go(-1);
                    }
//		            else if(res.status == 1) fadeOut.main('修改密码失败');
		            else fadeOut.main(res.msg);
                });
            }
        },
        agreeA: function() {
        	this.agreeCheck = !this.agreeCheck;
        },
    },
    beforeRouteEnter (to, from, next) {
        // 在渲染该组件的对应路由被 confirm 前调用
        // 不！能！获取组件实例 `this`
        // 因为当钩子执行前，组件实例还没被创建
        next((vm) => {
            // 通过 `vm` 访问组件实例
            vm.actived = true;
            vm.time = Date.now();
        });
    },
    beforeRouteLeave(to, from, next) {
        this.actived = false;
        next();
    },
};
</script>

<style lang="scss" scoped>
// @import '../../yo/usage/core/common';
// $padding: map-get($base, global-padding);
.box-center {
    padding: 0 0.35rem;
    .marginTop {
        margin-top: 0.2rem;
        border-bottom: 1px solid #E0E0E0;
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
        }
    }
    .info-entry {
        margin-top: 0.24rem;
        a {
            color: #5DAFFF;
        }
    }
    .login-btn {
        line-height: 0.32rem;
        width: 1.56rem;
        border-radius: 1rem;
        display: block;
        text-align: center;
        margin: 0.48rem auto;
    }
    .after-btn {
        background-color: #5DAFFF;
        color: #fff;
    }
    .tip {
        color: #eeeeee;
    }
    .error {
        color: #F84141;
        font-size: 0.13rem;
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
    .before-btn {
        background-color: #EAECF2;
        color: #333;
    }
    .after-btn {
        background-color: #5DAFFF;
        color: #ffffff;
    }
}
</style>