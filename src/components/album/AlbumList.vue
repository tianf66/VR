<template>
	<div class="album-list">
		<van-pull-refresh v-model="isLoading" @refresh="onRefresh">
			<van-list
			  v-model="list_loading"
			  :finished="done"
			  finished-text="没有更多了"
			  @load="onLoad">
			  	<div
					class="yo-flex"
					v-if="lists && lists.length > 0"
					v-for="(rowItem, index) in lists"
					:key="rowItem.length ? index : rowItem.id">
			        <div class="item"
			            v-for="i in listCol"
			            :key="i"
			            v-if="rowItem.length && listCol">
			            <album-item
			                :type="type"
			                :item="rowItem[i-1]"
			                v-if="rowItem[i-1]"
			            ></album-item>
			        </div>
		       	</div>
			</van-list>
		</van-pull-refresh>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import AlbumItem from '@/components/album/albumItem.vue';
export default {
	components: {
		AlbumItem
	},
	props: {
		type: String
	},
	data() {
		return {
			loading: true,
			list_loading: false,
			isLoading: false,
			page: 1
		}
	},
	computed: {
		...mapState({
            index: (state) => state.channel.index,
        }),
        lists() {
        	let album = this.$store.state.album;
            let type = this.type;
            return type ? album[type].lists : [];
        },
        listCol() {
        	const winWidth = document.body.offsetWidth;
        	return Math.max(Math.floor(winWidth / 160), 2)
        },
        done() {
        	let album = this.$store.state.album;
            let type = this.type;
            return type ? album[type].done : false;
        },
        currentPage() {
            let album = this.$store.state.album;
            let type = this.type;
            return album[type].page;
        },
	},
	watch: {
		$route(to, from) {
			if(to.name == 'channel' && from.name == 'home') {
				this.clearList();
				this.page = 1;
		        this.loadAlbum();
			}
			console.log(to, from);
	    }
	},
	beforeMount() {
	},
	mounted() {
	},
	methods: {
		params() {
			let route = this.$route;
			return {
				name: route.name,
				type: this.type,
				page: this.page === 1 ? 1 : this.currentPage + 1,
				rows: 10
			}
		},
		loadAlbum() {
			this.list_loading = true;
			this.$store.dispatch('loadAlbum', this.params()).then((res) => {
				this.loading = false;
	        	this.list_loading = false;
			});
		},
		onRefresh() {
	      setTimeout(() => {
	        this.$toast('刷新成功');
	        this.isLoading = false;
	        this.clearList();
	        this.page = 1;
	        this.loadAlbum();
	      }, 500);
	    },
	    onLoad() {
	      // 异步更新数据
	      setTimeout(() => {
	      	this.page += 1;
	      	this.loadAlbum();
	        // 加载状态结束
	      }, 1000);
	    },
	    clearList() {
	    	this.$store.commit({
	        	type: "CLEARLIST",
	        	payload: {
	        		type: this.type
	        	}
	        });
	    }
	}
}
</script>

<style lang="scss" scoped>
.van-loading {
	text-align: center;
}
.yo-flex {
	display: flex;
	justify-content: space-between;
}
.item {
	width: 100%;
	text-align: center;
	margin: 0.05rem 0.06rem;
}
.album-list {
	margin-bottom: 0.5rem;
}
</style>
