<template>
	<div class="home-item">
		<div v-if="lists" v-for="(item, index) in listTool" :key="index">
			<div class="h-title yo-flex" @click="handClick(item)">
				<p class="yo-flex">
					<span class="sprite" :class="item.icon"></span>
					<span class="image-title">{{ item.title }}</span>
				</p>
				<p class="image-more yo-flex">
					<span>{{ item.more_title }}</span>
					<span class="sprite icon-more"></span>
				</p>
			</div>
			<home-item :type="item.type" :item=item.list></home-item>
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import HomeItem from '@/components/album/HomeItem.vue';
export default {
	components: {
		HomeItem
	},
	props: {
		//
	},
	data() {
		return {
			listCol: 2
		}
	},
	computed: {
		...mapState({
            index: (state) => state.channel.index,
            lists: (state) => state.album.home.lists
        }),
        listTool() {
        	let arr = [
        		{"icon": "image-icon", "title": "精选美图", "more_title": "更多美图", "type": "imageList", "list": this.lists.galleryList},
				{"icon": "video-icon", "title": "限免视频", "more_title": "更多视频", "type": "videoList", "list": this.lists.commonVideoList},
				{"icon": "vr-icon", "title": "精彩VR", "more_title": "更多VR", "type": "vrVideoList", "list": this.lists.vrVideoList}
        	];
        	return arr;
        }
	},
	mounted() {
		this.loadList();
	},
	methods: {
		loadList() {
			let params = {
				page: 1,
				rows: 20
			}
			this.$store.dispatch('loadHome', params).then((res) => {
				//
			});
		},
		handClick(item) {
			let query = this.$route.query;
			this.$router.push({name: 'channel', query: {...query, type: item.type}});
		}
	}
}
</script>

<style lang="scss" scoped>
.home-item {
	width: 100%;
	margin-bottom: 0.5rem;
	.h-title {
		width: 93.6%;
		height: 0.3rem;
		margin: 0.1rem auto;
		line-height: 0.3rem;
	}
	.image-title {
		font-family: HelveticaNeueDeskInterface-Bold;
		font-size: 0.15rem;
   		font-weight: bold;
		color: #000000;
		letter-spacing: 0;
		margin-left: 0.05rem;
	}
	.image-icon {
		display: inline-block;
	    width: 0.3rem;
	    height: 0.3rem;
	    background-size: 3.5rem;
	    background-position: -0.45rem -0.75rem;
	}
	.video-icon {
		display: inline-block;
	    width: 0.3rem;
	    height: 0.3rem;
	    background-size: 3.5rem;
	    background-position: -0.45rem -1.1rem;
	}
	.vr-icon {
		display: inline-block;
	    width: 0.3rem;
	    height: 0.3rem;
	    background-size: 3.5rem;
	    background-position: -0.45rem -0.41rem;
	}
	.image-more {
		font-family: PingFangSC-Regular;
		font-size: 0.14rem;
		color: #4A4A4A;
		letter-spacing: 0;
	}
	.icon-more {
		display: inline-block;
	    width: 0.2rem;
	    height: 0.2rem;
	    background-size: 3.5rem;
	    background-position: -0.45rem -1.47rem;
	}
}
.yo-flex {
	display: flex;
	justify-content: space-between;
}
</style>
