<template>
	<div class="banner">
		<van-swipe @change="onChange">
		  <van-swipe-item><p style="background: green;"></p></van-swipe-item>
		  <van-swipe-item><p style="background: yellow;"></p></van-swipe-item>
		  <van-swipe-item><p style="background: black;"></p></van-swipe-item>
		  <van-swipe-item><p style="background: red;"></p></van-swipe-item>
		</van-swipe>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	components: {
		//
	},
	data() {
		return {
			//
		}
	},
	computed: {
		//
	},
	mounted() {
		//
	},
	methods: {
	    onChange(index) {
	      // Toast('当前 Swipe 索引：' + index);
	      console.log(index);
	    }
	}
}
</script>

<style lang="scss" scoped>
.banner {
	width: 93.6%;
	margin: 0 auto;
}
p {
	width: 100%;
	height: 2rem;
	border-top-left-radius: 5px;
	border-top-right-radius: 5px;
}
</style>