<template>
	<div>
		<vr-view></vr-view>
	</div>
</template>

<script>
import NavView from '@/components/modules/Nav.vue';
import VrView from '@/components/views/DetailItems/Vr.vue';
import { mapState } from 'vuex';
import utils from '@/utils/index';
export default {
	components: {
		NavView,
		VrView
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