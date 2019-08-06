<template>
	<div class="album-item" @click="hanldClick(item)">
		<span v-if="item.isFree" class="sprite vip-icon"></span>
		<van-image :src="item.coverUrl" width="100%">
			<template v-slot:loading>
		  		<van-loading type="spinner" size="20" />
			</template>
			<template v-slot:error class="img-error">加载失败</template>
		</van-image>
		<div class="title" v-if="type != 'imageList'">{{ item.title }}</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import storage from '@/utils/storage.js';
export default {
	components: {
		//
	},
	props: {
		type: String,
		item: Object
	},
	data() {
		return {
			userInfo: storage.get('user')
		}
	},
	computed: {
		...mapState({
            index: (state) => state.channel.index,
        })
	},
	mounted() {
		//
	},
	methods: {
		hanldClick(item) {
			let $router = this.$router, query = this.$route.query, route = this.$route;
			query = {
				...query,
				first: route.name,
				id: item.id,
				isFree: item.isFree
			}
			if(!this.userInfo) {
				$router.push({"name": 'login', query: query});
			} else {
				$router.push({"name": 'detail', query: query});
			}
		}
	}
}
</script>

<style lang="scss">
.album-item {
	width: 100%;
	position: relative;
	.van-image__img {
		display: inline-block;
		border-radius: 8px !important;
	}
	.title {
		word-break: break-all;
		display: -webkit-box;
		-webkit-line-clamp: 1;
		-webkit-box-orient: vertical;
		overflow: hidden;
		font-family: DroidSansFallback;
		font-size: 0.15rem;
		color: #000000;
		letter-spacing: 0;
	}
	.vip-icon {
		position: absolute;
		top: 0;
		right: 0;
		width: 0.4rem;
		height: 0.2rem;
		background-size: 3rem;
		background-position: -0.35rem -0.0605rem;
		z-index: 99;
	}
}
</style>
