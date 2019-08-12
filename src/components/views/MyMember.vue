<template>
	<div class="member-centre">
		<div class="m-header">
			<header-view title="会员中心"></header-view>
			<!-- 用户头像 & username start -->
			<avatar-name></avatar-name>
			<!-- end -->
		</div>
		<!-- 支付模块 && 特权模块  start -->
		<recharge-view></recharge-view>
		<!-- end -->
	</div>
</template>

<script>
import { mapState } from 'vuex';
import HeaderView from '@/components/modules/Header.vue';
import AvatarName from '@/components/views/MyMember/AvatarOruserName';
import RechargeView from '@/components/views/MyMember/Recharge.vue';
export default {
	components: {
		HeaderView,
		AvatarName,
		RechargeView
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
		this.$store.commit('CLEARRECHARGEOPT');
		this.getPricePackage();
	},
	methods: {
		getPricePackage() {
			this.$store.dispatch('getPricePackage');
		}
	}
}
</script>

<style lang="scss">
.member-centre {
	.m-header {
		background-image: radial-gradient(50% 97%, #2E3442 3%, #161A22 98%);
		.title {
			font-family: PingFangSC-Medium;
			font-size: 0.2rem;
			color: #D8AF5C;
			letter-spacing: 0;
		}
	}
}
</style>
