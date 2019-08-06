<template>
<div class="login-box">
    <!-- 头部 start -->
    <header-view :back="true"></header-view>
    <!-- 头部 end -->
    <div class="box-center">
        <h3 class="title">快速登录</h3>
        <section class="marginTop">
            <input type="text" placeholder="请输入手机号" v-model="userphone" @click="hide"/>
        </section>
        <section class="marginTop">
        	<div class="marginPass">
        		<input :type="passwdShow ? 'password' : 'text'" placeholder="请输入密码" v-model="passwd" @click="hide"/>
            	<i :class="passwdShow ? 'passwdShow_1': 'passwdShow_2'" @click="passTol"></i>
        	</div>
        </section>
        <section class="pw-entry">
            <a @click="modifyPass" v-show="!errorMsg" class="tip-color">忘记密码？</a>
            <span class='error' v-show="errorMsg">{{errorMsg}}</span>
        </section>
        <section class="login-tip">
            <input type="button" :class="['login-btn', 'before-btn', nameOk && passwdOk ? 'after-btn' : '']"  @click="toLogin" value="登录" :disabled="disabledToLogin">
            <router-link :to="{path: '/register', query}" class="tip-color">没有账号？去注册</router-link>
        </section>
    </div>
</div>
</template>

<script>
import user from '@/utils/user.js';
import HeaderView from '@/components/modules/Header.vue';
import {base64Encode} from '@/utils/base64.js';
import storage from '@/utils/storage.js';
export default {
    name: 'login',
    components: {
        HeaderView,
    },
    data() {
        return {
            errorMsg: '',
//          username: '',
			userphone: '',
            nameOk: false,
            passwd: '',
            passwdOk: false,
            passWord: true,
            passwdShow: true,
            disabledToLogin: true,
            fromRoute: ''
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
        // },
        query() {
            return this.$route.query;
        }
    },
    watch: {
        passwd: function() {
            this.checkPasswd('password');
        },
        userphone: function() {
            this.checkName('number');
        }
    },
    methods: {
        checkName: function(type) {
            if(user.checkValue(this.userphone, type)) {
                this.nameOk = true;
                this.disabledToLogin = false;
            } else {
                this.nameOk = false;
                this.disabledToLogin = true;
                /*if(this.username)
                    fadeOut.main('用户名不能含有除汉字、数字、字母外的其它字符');*/
            }
        },
        checkPasswd: function(type) {
            if(user.checkValue(this.passwd, type)) {
                this.passwdOk = true;
                this.disabledToLogin = false;
            } else {
                this.passwdOk = false;
                this.disabledToLogin = true;
            }
        },
        beforeLogin: function() {

        },
        modifyPass: function() {
            this.$router.push({path: '/updatePassword'});
        },
        loginParams: function() {
            let params = {
//              user: base64Encode(this.username),
                // pass: base64Encode(this.passwd),
                // phone:base64Encode(this.userphone)
            };
            params.password = this.passwd;
            params.phone = parseInt(this.userphone);
            return params;
        },
        toLogin: function() {
            let _this = this;
            this.$store.dispatch('getLogin', this.loginParams()).then((res) => {
                if(res.code == 1) {
                    let info = res.data;
                    if(storage.get('user')) storage.remove('user');
                    storage.set('user', info);
                    let query = _this.$route.query;
                    _this.$router.push({name: `${query.first}`, query: {...query}});
                } else {
                    this.$toast(`${res.msg}`);
                }
            });
        },
        passTol: function() {
        	this.passWord = !this.passWord;
        	this.passwdShow = !this.passwdShow;
        },
        hide: function() {
        	this.errorMsg = '';
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
            vm.fromRoute = from;
        });
    },
    beforeRouteLeave(to, from, next) {
        this.actived = false;
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
        }
    }
    .pw-entry {
        margin-top: 0.2rem;
        font-size: 0.13rem;
    }
    .before-btn {
        background-color: #EAECF2;
        color: #333;
    }
    .after-btn {
        background-color: #F13031 !important;
        color: #fff !important;
    }
    .login-tip {
        text-align: center;
        input{
        	border: 0;
        }
    }
    .tip-color {
        color: #F5A623;
    }
    .login-btn {
        line-height: 0.32rem;
        width: 1.56rem;
        border-radius: 1rem;
        display: block;
        text-align: center;
        margin: 0.48rem auto 0;
    }
    .marginPass{
    	display: flex;
    	.passwdShow_1{
    		display: inline-block;
			width: 0.24rem;
	        height: 0.24rem;
			background: url("//i.opfed.com/opgirl/v2/sprite2.png") no-repeat;
		     background-position: -0.1rem -1.5rem;
		    background-size: 2.3rem;
    	}
    	.passwdShow_2{
    		display: inline-block;
			width: 0.24rem;
	        height: 0.24rem;
			background: url("//i.opfed.com/opgirl/v2/sprite2.png") no-repeat;
		    background-position: -0.14rem -1.8rem;
		    background-size: 2.3rem;
    	}
    }
}

</style>