<template>
	<div>
		<div v-if="isFree">
			<header-view :back="true" style="z-index: 9999;"></header-view>
			<image-view v-if="type && (type == 'imageList' || type =='vipImageList')" :item="gallery"></image-view>
			<video-view v-if="type && (type == 'videoList' || type =='vipVideoList')"></video-view>
			<vr-view v-if="type && (type == 'vrVideoList' || type =='vipVrVideoList')"></vr-view>
		</div>
		<div v-if="!isFree && !isVip" class="prompt-buy">
			<header-view :back="true" style="background: #fff;"></header-view>
			<div class="box">
				<p class="title">{{buyTitle}}</p>
				<p @click="goBtn" class="go-btn">购买VIP</p>
			</div>
		</div>
	</div>
</template>

<script>
import HeaderView from '@/components/modules/Header.vue';
import VrView from '@/components/views/DetailItems/Vr.vue';
import VideoView from '@/components/views/DetailItems/Video.vue';
import ImageView from '@/components/views/DetailItems/Image.vue';
import { mapState } from 'vuex';
import utils from '@/utils/index';
export default {
	components: {
		HeaderView,
		VrView,
		VideoView,
		ImageView
	},
	data() {
		return {
		}
	},
	computed: {
		...mapState({
            index: (state) => state.channel.index,
            gallery: (state) => state.detail.galleryList
        }),
        type() {
        	return this.$route.query.type;
        },
        isFree() {
        	let isFree = this.$route.query.isFree;
        	return isFree ? JSON.parse(this.$route.query.isFree) : false;
        },
        isVip() {
        	return this.$store.state.user.isVip;
        },
        buyTitle() {
        	let name = (this.type == 'imageList' || this.type == 'vipImageList') ? '图集' :
        			   (this.type == 'videoList' || this.type == 'vipVideoList') ? '视频' :
        			   (this.type == 'vrVideoList' || this.type == 'vipVrVideoList') ? 'VR视频' : '';
        	return `此${name}为VIP特约${name}，请购买VIP服务后观看`;
        },
        query() {
        	return this.$route.query;
        }
	},
	mounted() {
		let params = {};
		let type = this.type;
		params.urls = (type == 'imageList' || type == 'vipImageList') ? 'imageDetail' : 'videoDetail';
		if(type == 'imageList' || type == 'vipImageList') params.galleryId = this.query.id;
		else params.videoId = this.query.id;
		this.$store.dispatch('getDetail', params).then((res) => {

		});
	},
	methods: {
		goBtn() {
			let query = this.$route.query;
			query.opt = 'year';
			this.$router.push({name: "memberCentre", query: {...query}});
		}
	}
}
</script>

<style lang="scss" scoped>
.prompt-buy {
	width: 100%;
	height: 100%;
	position: fixed;
	top: 0;
	left: 0;
	background-image: linear-gradient(-180deg, rgba(0,0,0,0.80) 0%, rgba(0,0,0,0.00) 28%, rgba(0,0,0,0.00) 75%, rgba(0,0,0,0.80) 98%);
	background: rgba(0,0,0,0.79);
	.box {
		margin: 0 auto;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
	}
	.title {
		width: 92%;
	    font-family: PingFangSC-Semibold;
	    font-size: 0.3rem;
	    color: rgb(255, 255, 255);
	    letter-spacing: 2.06px;
	    line-height: 90px;
	    margin: 0 auto;
	}
	.go-btn {
		width: 40%;
	    height: 0.4rem;
	    font-family: PingFangSC-Semibold;
		color: #663D00;
	    text-align: center;
	    line-height: 0.4rem;
	    margin: 0 auto;
	    background-image: linear-gradient(-93deg, rgb(255, 223, 137) 0%, rgb(242, 202, 90) 92%);
	    border-radius: 100px;
	}
}
</style>