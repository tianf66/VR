<template>
	<div>
		<div id="panoDesk"></div>
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
		utils.loadScript('//s.opfed.com/lib/player/UtoVRPlayerGuide.js', false, () => {
			var params = {
		        container: document.getElementById("panoDesk"),
		        name: "SceneViewer",
		        isGyro: true,        //默认开启陀螺仪功能  移动端支持陀螺仪设备有效
		        scenesArr: [
		            //todo:注意修改视频路径，需要保证播放页面与视频属于同一域名下
		            {
		                sceneId: "v1",
		                sceneName: "赛车",
		                sceneFilePath: "../../../static/960p.mp4",
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
		        }
		    };
		    /*初始化开始*/
		    window.onload = function () {
		        initLoad(params);
		    };
		});
	}
}
</script>

<style>
	#panoDesk {
        position: absolute;
        width: 100%;
        height: 100%;
        left:0px;
        top:0px;
        overflow: hidden;
   	}
</style>