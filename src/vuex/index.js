import Vue from 'vue';
import Vuex from 'vuex';

// 列表页
import channel from './channel/';
//公共
import common from './common/';
//列表
import album from './album/';
//用户
import user from './user/'
//详情页
import detail from './detail/'
// 告诉 vue “使用” vuex
Vue.use(Vuex);

export default new Vuex.Store({
	// 不要在发布环境下启用严格模式！
	// 严格模式会深度监测状态树来检测不合规的状态变更——请确保在发布环境下关闭严格模式，以避免性能损失。
	strict: process.env.NODE_ENV !== 'production',
	// 组合各个模块
	modules: {
		channel,
		common,
		album,
		user,
		detail
	}
});