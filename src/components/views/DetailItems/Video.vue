<template>
	<div>
		video
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
		//
	}
}
</script>

<style>

</style>