<template>
	<div class="">
		<header-view title="VIP专区"></header-view>
		<!-- <van-tabs v-model="active" swipeable>
		  <van-tab v-for="item in channelItem" :title="item.name">
		    内容 {{ item }}
		  </van-tab>
		</van-tabs> -->
		<van-tabs @click="tabClick" type="card" swipeable animated>
		  <van-tab  v-for="(item, index) in channelItem" :key="index" :title="item.name" :name="item.type">
		  	<p style="width: 100%;height: 900px">{{item.name}}</p>
		  </van-tab>
		  <!-- <van-tab title="标签 2"><p style="width: 100%;height: 900px">内容 2</p></van-tab>
		  <van-tab title="标签 3"><p style="width: 100%;height: 900px">内容 3</p></van-tab> -->
		</van-tabs>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import HeaderView from '@/components/modules/Header.vue';
import BannerView from '@/components/modules/Banner.vue';
export default {
	components: {
		HeaderView,
	},
	data() {
		return {
			active: '',
			channelItem: [
				{"name": "美女图片", "type": "image"},
				{"name": "高清视频", "type": "video"},
				{"name": "精彩VR", "type": "vrVideo"},
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
	},
	methods: {
		tabClick(name) {
			console.log(name);
		}
	}
}
</script>
