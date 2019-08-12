<template>
	<div class="video-detail" :style="style">
		<video
            playsinline="true"
            webkit-playsinline="true"
            :src="item.videoUrl"
            :poster=item.coverUrl
            controls="true"
            preload
            controlslist="nodownload">
            您的浏览器不支持视频播放
        </video>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import utils from '@/utils/index';
export default {
	components: {
	},
	data() {
		return {
			//
		}
	},
	props: {
		item: Object,
	},
	computed: {
		...mapState({
            index: (state) => state.channel.index
        }),
        style() {
        	return {
        		height: window.innerHeight - 36 + 'px'
        	}
        }
	},
	mounted() {
		//
	}
}
</script>

<style lang="scss" scoped>
.video-detail {
	width: 100%;
	background: #000000;
	video {
		width: 100%;
		height: 100%;
	}
}
</style>