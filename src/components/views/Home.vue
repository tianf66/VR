<template>
	<div class="">
		<!-- <van-button type="warning">警告按钮</van-button> -->
		<header-view></header-view>
		<footer-view></footer-view>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import ChannelView from '@/components/views/Channel.vue';
import FooterView from '@/components/modules/Footer.vue';
import HeaderView from '@/components/modules/Header.vue';
// import { Button } from 'vant';
export default {
	components: {
		ChannelView,
		FooterView,
		HeaderView
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
