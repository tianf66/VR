<template>
	<div>
		<header-view :back="true" :title="title"></header-view>
		<album-list :type="listType" :time="time" :actived="actived"></album-list>
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
			actived: false,
			time: Date.now(),
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
        	let title = type == 'galleryList' ? '精选美图' : type == 'videoList' ? '精选视频' : '精彩VR';
        	return title;
        }
	},
	mounted() {
		//
	},
	beforeRouteEnter (to, from, next) {
        next((vm) => {
            // 通过 `vm` 访问组件实例
            vm.actived = true;
            vm.time = Date.now();
        });
    },
    beforeRouteLeave(to, from, next) {
        this.actived = false;
        next();
    }
}
</script>

<style lang="scss" scoped>

</style>