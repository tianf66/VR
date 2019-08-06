<template>
	<div>
		<header-view :back="true" :title="title"></header-view>
		<album-list :type="listType"></album-list>
	</div>
</template>

<script>
import HeaderView from '@/components/modules/Header.vue';
import AlbumList from '@/components/album/albumList.vue';
import { mapState } from 'vuex';
// import utils from '@/utils/index';
export default {
	components: {
		HeaderView,
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
        }),
        listType() {
        	return this.$route.query.type;
        },
        title() {
        	let type = this.listType;
        	let title = type == 'imageList' ? '精选美图' : type == 'videoList' ? '精选视频' : '精彩VR';
        	return title;
        }
	},
	mounted() {
		//
	}
}
</script>

<style lang="scss" scoped>

</style>