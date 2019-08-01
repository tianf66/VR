<template>
	<!-- <div class="">

	</div> -->
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
	#panoDesk {
        position: absolute;
        width: 100%;
        height: 100%;
        left:0px;
        top:0px;
        overflow: hidden;
   	}
</style>