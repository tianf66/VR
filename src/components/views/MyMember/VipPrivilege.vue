<template>
	<div class="privilege">
		<div class="privilege-title">
			<span class="title">会员特权</span>
			<span class="protocol">会员协议</span>
		</div>
		<div class="privilege-list">
			<div v-for="(item, index) in privilege" class="item">
				<p class="sprite icon" :class="item.icon">
					<span class="title">{{item.title}}</span>
				</p>
			</div>
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
			privilege: [
				{"icon": "icon-image", "title": "任意观看所有高级图集"},
				{"icon": "icon-video", "title": "任意观看所有高清视频"},
				{"icon": "icon-vr", "title": "任意观看所有VR高清视频"},
			]
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
.privilege-title {
	font-family: PingFangSC-Semibold;
	font-size: 0.2rem;
	padding: 0.1rem 0.15rem;
	display: flex;
	justify-content: space-between;
	.title {
		color: #333333;
		font-weight: bold;
	}
	.protocol {
		font-size: 0.16rem;
		font-family: PingFangSC-Regular;
		color: #4A4A4A;
		letter-spacing: 1px;
	}
}
.privilege-list {
	position: relative;
	.item {
		margin: 0.1rem;
	}
	.icon {
		width: 100%;
	    height: 0.8rem;
	    background-size: 100% 5.1rem;
	}
	.icon-image{
	    background-position: 0 -4.28rem;
	}
	.icon-video {
		background-position: 0 -3.46rem;
	}
	.icon-vr {
		background-position: 0 -2.6rem;
	}
	.title {
		line-height: 0.8rem;
		position: absolute;
		left: 0.85rem;
		font-family: DroidSansFallback;
		font-size: 0.2rem;
		color: #FFFFFF;
	}
}
</style>
