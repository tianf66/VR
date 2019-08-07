<template>
	<div class="footer">
		<ul>
			<li v-for="item in footerNav" @click="hanldClick(item)">
				<p class="sprite icon" :class="currRoute == item.route ? item.checkicon: item.icon"></p>
				<span class="name">{{item.name}}</span>
			</li>
		</ul>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	components: {
		//
	},
	data() {
		return {
			//
		}
	},
	computed: {
		...mapState({
            footerNav: (state) => state.common.footerNav
        }),
		currRoute() {
			let name = this.$route.name;
			if(name == 'channel') name = 'home';
			return name;
		}
	},
	mounted() {
		//
	},
	methods: {
		hanldClick(item) {
			let query = this.$route.query;
			if(item.route == 'memberCentre') query.opt = 'year';
			else delete query.opt;
			if(item.route == 'vipList') query.type = 'vipImageList';
			else delete query.type;
			this.$router.push({name: `${item.route}`, query: {...query}});
		}
	}
}
</script>

<style lang="scss" scoped>
.footer {
	width: 100%;
	height: 0.5rem;
	position: fixed;
	bottom: 0;
	left: 0;
	right: 0;
	background: #FEFEFE;
	box-shadow: 0 -1px 0 0 #E7E7E7;
	z-index: 9999;
	ul {
		display: flex;
		text-align: center;
		justify-content: space-between;
		li {
			width: 33.3%;
			text-align: center;
		}
	}
	.home-icon {
	    background-position: -0.07rem -0.64rem;
	}
	.vip-icon {
		background-position: -0.07rem -0.06rem;
	}
	.member-centre-icon {
		background-position: -0.06rem -1.23rem;
	}
	.check-home-icon {
	    background-position: -0.07rem -0.92rem;
	}
	.check-vip-icon {
		background-position: -0.07rem -0.36rem;
	}
	.check-member-centre-icon {
		background-position: -0.06rem -1.51rem;
	}
	.icon {
		width: 0.23rem;
	    height: 0.23rem;
	    background-size: 3rem;
	    margin: 0.05rem auto 0;
	}
	.name {
		font-family: PingFangSC-Medium;
		font-size: 0.09rem;
		color: #000000;
		letter-spacing: 0;
		margin: 0 auto;
	}
}
</style>