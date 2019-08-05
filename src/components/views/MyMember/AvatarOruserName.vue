<template>
	<div class="avatar-name">
		<div class="avatar">
			<img src="../../../../static/avatar.jpg" alt="">
		</div>
		<div class="user">
			<p class="user-name">初恋de晴天</p>
			<p class="title">您还不是VIP会员，赶快加入吧～</p>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
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
            index: (state) => state.channel.index
        })
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
		width: 16%;
		height: 16%;
		margin: 0 0.1rem 0 0.2rem;
		img {
			width: 100%;
			border-radius: 50px;
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
