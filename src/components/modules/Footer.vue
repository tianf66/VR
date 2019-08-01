<template>
	<div class="footer">
		<ul>
			<li>首页</li>
			<li>VIP专区</li>
			<li>会员专区</li>
		</ul>
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
	}
}
</script>

<style lang="scss">
.footer {
	width: 100%;
	position: fixed;
	background: #f2f3f3;
	bottom: 0;
	left: 0;
	right: 0;
	height: 0.4rem;
	ul {
		display: flex;
		text-align: center;
		justify-content: space-between;
		li {
			width: 33.3%;
			line-height: 0.4rem;
			border: 1px solid #f2f3f3;
		}
	}
}
</style>