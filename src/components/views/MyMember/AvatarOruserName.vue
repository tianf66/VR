<template>
	<div class="avatar-name">
		<div class="avatar">
			<span v-if="isVip" class="sprite icon"></span>
			<img :class="isVip ? 'vip-avatar':''" src="../../../../static/avatar.jpg" alt="用户头像">
		</div>
		<div class="user">
			<p class="user-name">用户{{userName}}</p>
			<p class="title">您还不是VIP会员，赶快加入吧～</p>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import storage from '@/utils/storage.js';
import {base64Decode} from '@/utils/base64.js';
export default {
	components: {
	},
	data() {
		return {
			//
		}
	},
	computed: {
		...mapState({
            index: (state) => state.channel.index,
            isVip: (state) => state.user.isVip
        }),
        userInfo() {
        	return storage.get('user');
        },
        userName() {
        	if(!this.userInfo) return null;
        	let phone = this.userInfo.user.phone.toString();
        	return phone.substr(phone.length - 4);
        }
	},
	mounted() {
		//
	}
}
</script>

<style lang="scss" scoped>
.avatar-name {
	display: flex;
	padding: 0.15rem 0;
	.avatar {
		width: 0.6rem;
		height: 0.6rem;
		margin: 0 0.1rem 0 0.2rem;
		position: relative;
		img {
			width: 100%;
			height: 100%;
			border-radius: 50px;
		}
		.vip-avatar {
			border: 2px solid #D8AF5C;
		}
		.icon {
			display: inline-block;
    		width: 0.2rem;
    		height: 0.2rem;
    		position: absolute;
    		top: -0.1rem;
    		right: 0;
    		background-size: 3rem;
    		background-position: -0.85rem -0.67rem;

		}
	}
	.user {
		height: 0.4rem;
	    margin-top: 0.1rem;
	}
	.user-name {
		font-family: PingFangSC-Regular;
		font-size: 0.15rem;
		color: #FFFFFF;
		letter-spacing: 0.3px;
	}
	.title {
		font-family: PingFangSC-Regular;
		font-size: 0.1rem;
		color: #999999;
		margin-top: 0.05rem;
		letter-spacing: 0.53px;
	}
}
</style>
