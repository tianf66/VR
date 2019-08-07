<template>
	<div>
		<div class="panoDesk" ref="panoDesk"></div>
	</div>
</template>

<script>
import NavView from '@/components/modules/Nav.vue';
import { mapState } from 'vuex';
import utils from '@/utils/index';
export default {
	components: {
		NavView
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
		this.$nextTick(() => {
			let playerObj;
			let params = {
		        container: this.$refs.panoDesk,
		        name: "meinv",
		        isGyro: true,        //默认开启陀螺仪功能  移动端支持陀螺仪设备有效
		        scenesArr: [
		            //todo:注意修改视频路径，需要保证播放页面与视频属于同一域名下
		            {
		                sceneId: "374235dasd",
		                sceneName: "美女",
		                sceneFilePath: "../../../static/c.mp4",
		                sceneType: "Video",
		                isVideoAutoPlay: true  //todo:注意isVideoAutoPlay 是H5 模式下的播放属性，不适用于移动端
		            }
		        ],
		        //播放器不支持全景播放回调
		        errorCallBack: function (e) {
		            console.log("错误状态：" + e);
		        },
		        //浏览器不支持全屏回调
		        fsCallBack: function (status, playObj) {
		            alert("浏览器不支持全屏！");
		        },
		        videoPlayerCallBack: () => {//播放回调
		        	console.log('播放');
		        },
		        initOverCallBack: () => {
		        	// playerObj  = this;
		        	// console.log(this.api_enterFullScreen());
		        },
		        // fullScreenChangeCallBack: (e) => {
		        // 	console.log('全屏',e.api_enterFullScreen());
		        // }
		    };


		    initLoad(params);
		});
	}
}
</script>

<style>
.panoDesk {
    position: absolute;
    width: 100%;
    height: 100%;
    left:0px;
    top:0px;
    overflow: hidden;
}
</style>