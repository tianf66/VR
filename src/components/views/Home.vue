<template>
	<div class="">
		<div class="home-header">
			<header-view title="蜜果"></header-view>
			<banner-view></banner-view>
		</div>
		<album-list></album-list>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import ChannelView from '@/components/views/Channel.vue';
import HeaderView from '@/components/modules/Header.vue';
import BannerView from '@/components/modules/Banner.vue';
import AlbumList from '@/components/album/albumList.vue';
export default {
	components: {
		ChannelView,
		HeaderView,
		BannerView,
		AlbumList
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

<style lang="scss">
	.home-header {
		background-image: linear-gradient(-180deg, #1C2029 0%, #657F8B 100%);
		.title {
			font-family: PingFangSC-Medium;
			font-size: 0.2rem;
			color: #FFFFFF;
			letter-spacing: 0;
		}
	}
</style>
