<template>
	<div>
		<van-image-preview
		  v-model="show"
		  :images="item"
		  :loop="false"
		  :asyncClose="true"
		  @change="onChange">
		  <template v-slot:index>{{ index + 1 }}/{{item.length}}</template>
		</van-image-preview>
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
	props: {
		item: Array,
	},
	data() {
		return {
			show: true,
      		index: 0,
		}
	},
	computed: {
		...mapState({
        })
	},
	mounted() {
	},
	methods: {
		onChange(index) {
	      this.index = index;
	    }
	}
}
</script>

<style>

</style>