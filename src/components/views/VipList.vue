<template>
	<div class="">
		<!-- <header-view title="VIP专区"></header-view> -->
		<van-tabs
			v-if="active"
			v-model="active"
			@click="tabClick"
			title-active-color="#F13031"
			title-inactive-color="#666666">
		  <van-tab v-for="(item, index) in channelItem" :key="index" :title="item.name" :name="item.type">
		    <album-list :type="listType"></album-list>
		  </van-tab>
		</van-tabs>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import HeaderView from '@/components/modules/Header.vue';
import AlbumList from '@/components/album/albumList.vue';
export default {
	components: {
		HeaderView,
		AlbumList
	},
	data() {
		return {
			channelItem: [
				{"name": "精选美图", "type": "vipImageList"},
				{"name": "精选视频", "type": "vipVideoList"},
				{"name": "精彩VR", "type": "vipVrVideoList"},
			]
		}
	},
	computed: {
		...mapState({
            index: (state) => state.channel.index,
        }),
        listType() {
        	return this.$route.query.type;
        },
        active: {
        	get: function () {
		      return this.$route.query.type;
		    },
		    set: function () {}
        }
	},
	mounted() {
		//
	},
	methods: {
		tabClick(name) {
			let query = this.$route.query;
			this.$router.replace({name: "vipList", query: {...query, type: name}});
		}
	}
}
</script>

<style lang="scss" scoped>
.van-tab--active {
	font-weight: bold !important;
}
</style>
