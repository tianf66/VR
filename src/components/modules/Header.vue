<template>
	<div class="header">
		<span v-if="back" @click="historyBack" class="regret"><em class="sprite back-icon"></em></span>
		<p class="title">{{title}}</p>
	</div>
</template>

<script>
import { mapState } from 'vuex';
export default {
	components: {
		//
	},
	props: {
		title: String,
		back: {
            type: Boolean,
            default: false
        },
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
		historyBack() {
			this.$router.go(-1);
		}
	}
}
</script>

<style lang="scss" scoped>
.header {
	position: relative;
	width: 100%;
	height: 0.35rem;
	text-align: center;
	line-height: 0.35rem;
	.title {
		//
	}
	.regret {
		position: absolute;
		top: 0;
		left: 0.2rem;
	}
	.back-icon {
        position: relative;
        top: 0.05rem;
        display: inline-block;
        width: 0.19rem;
        height: 0.16rem;
        margin-right: 0.1rem;
        vertical-align: text-top;
        background-size: 2.26rem auto;
        background-position: -0.3rem -0.7rem;
    }
}
</style>