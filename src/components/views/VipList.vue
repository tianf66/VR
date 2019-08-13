<template>
	<div class="">
		<!-- <header-view title="VIP专区"></header-view> -->
		<!-- <van-tabs
			v-if="active"
			v-model="active"
			swipeable
			:duration="0.5"
			@change="tabClick"
			title-active-color="#F13031"
			title-inactive-color="#666666">
		  <van-tab v-for="(item, index) in channelItem" :key="index" :title="item.name" :name="item.type">
		    <album-list :type="listType" :time="time" :actived="actived"></album-list>
		  </van-tab>
		</van-tabs> -->
		<ul class="viplist-nav">
			<li @click="tabClick(item)" :class="item.type == listType ? 'active':''" v-for="(item, index) in channelItem">{{ item.name }}</li>
		</ul>
		<album-list :type="listType" :time="time" :actived="actived"></album-list>
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
				{"name": "精选美图", "type": "galleryList"},
				{"name": "精选视频", "type": "videoList"},
				{"name": "精彩VR", "type": "vrList"},
			],
			actived: false,
			time: Date.now(),
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
		tabClick(item) {
			this.time = Date.now();
			let query = this.$route.query;
			this.$router.replace({name: "vipList", query: {...query, type: item.type}});
		}
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
.van-tab--active {
	font-weight: bold !important;
}
.viplist-nav {
    display: flex;
    height: 0.4rem;
    line-height: 0.4rem;
    justify-content: space-around;
    li {
    	font-family: PingFangSC-Medium;
		font-size: 0.15rem;
		color: #666666;
		letter-spacing: 0;
    }
    .active {
    	font-size: 0.16rem;
    	font-weight: 600;
		color: #F13031;
    }
}
</style>
