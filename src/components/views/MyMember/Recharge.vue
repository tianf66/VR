<template>
	<div class="recharge">
		<ul class="option" v-if="rechargeOpt">
			<li
				:class="item.type == opt ? 'check-opt' : 'opt'"
				v-for="(item, index) in rechargeOpt"
				:key="index"
				@click="optClick(item, index)">
					<p v-if="item.type == 'year'" class="sprite recommend-icon"></p>
					<p class="option-top">
						<span class="title">{{item.title}}</span>
						<span class="gift" v-if="item.gift">{{item.gift}}</span>
					</p>
					<p class="option-bottom">
						<span class="current-price"><i>￥</i>{{item.currentPrice}}</span>
						<span class="original-price"><i>￥{{item.originalPrice}}</i> | {{item.discount}}</span>
						<span class="price-day">￥{{item.priceDay}}</span>
					</p>
			</li>
		</ul>

		<div class="pay">
			<p class="sprite wx-icon"></p>
			<p class="title">微信支付</p>
			<p class="sprite play-radio"></p>
		</div>
		<!-- 会员特权 start -->
		<vip-privilege></vip-privilege>
		<!-- end -->

		<!-- 支付button start -->
		<div class="sub-buttom">
			立即支付
		</div>
	</div>
</template>

<script>
import { mapState } from 'vuex';
import VipPrivilege from '@/components/views/MyMember/VipPrivilege';
export default {
	components: {
		VipPrivilege
	},
	data() {
		return {
			//
		}
	},
	computed: {
		...mapState({
            rechargeOpt: (state) => state.common.rechargeOpt
        }),
        opt() {
        	return this.$route.query.opt;
        }
	},
	mounted() {
		//
	},
	methods: {
		optClick(item, index) {
			let query = this.$route.query;
			this.$router.replace({"name": 'memberCentre', query: {...query, opt: item.type}});
		}
	}
}
</script>

<style lang="scss" scoped>
.option {
	li {
		width: 93.6%;
		height: 1rem;
		margin: 0.1rem auto;
		position: relative;
		.option-top {
			padding: 0.15rem;
			.title {
				font-family: PingFangSC-Semibold;
				font-size: 0.2rem;
			    font-weight: bold;
				color: #333333;
				letter-spacing: 2px;
			}
			.gift {
				font-family: PingFangSC-Regular;
				font-size: 0.15rem;
				margin-left: 0.1rem;
				color: #A7A7A7;
				letter-spacing: 0.45px;
			}
		}
		.option-bottom {
			padding: 0.05rem 0.15rem;
			.current-price {
				font-family: PingFangSC-Semibold;
				font-size: 0.23rem;
				color: #F2CA5B;
				letter-spacing: 0;
				i {
					font-size: 0.2rem;
					font-style:normal;
				}
			}
			.original-price {
				font-family: PingFangSC-Regular;
				font-size: 0.15rem;
				margin-left: 0.05rem;
				color: #A7A7A7;
				letter-spacing: 0;
				position: absolute;
			    left: 0.8rem;
			    bottom: 0.12rem;
				i {
					text-decoration:line-through;
					font-style:normal
				}
			}
			.price-day {
				position: absolute;
				right: 0.15rem;
				bottom: 0.1rem;
				font-family: PingFangSC-Medium;
				font-size: 0.25rem;
				margin-left: 0.12rem;
				color: #F6A623;
				letter-spacing: 0;
			}
		}
	}
	.opt {
		background: #FFFFFF;
		border: 2px solid #EEEEEE;
		border-radius: 8px;
	}
	.check-opt {
		background: #FBF2D8;
		border: 2px solid #ECC139;
		border-radius: 8px;
	}
	.recommend-icon {
		width: 0.4rem;
	    height: 0.2rem;
	    position: absolute;
	    top: -0.1rem;
	    left: 0;
	    background-size: 3rem;
	    background-position: -0.77rem -0.36rem;
	}
}
.pay {
	height: 0.5rem;
	line-height: 0.5rem;
	display: flex;
	border-top: 5px solid #F5F5F5;
	border-bottom: 5px solid #F5F5F5;
	padding: 0.1rem 0.15rem;
	position: relative;
	.wx-icon{
		display: inline-block;
	    width: 0.4rem;
	    height: 0.4rem;
	    background-size: 4rem;
	    background-position: -1.1rem -2rem;
		border: 2px solid #EEEEEE;
		border-radius: 16px;
	}
	.title {
		font-family: PingFangSC-Regular;
		font-size: 0.18rem;
		color: #333333;
		letter-spacing: 2.5px;
		margin: 0 0 0.18rem 0.1rem;
	}
	.play-radio {
		width: 0.25rem;
		height: 0.25rem;
		position: absolute;
		right: 0.2rem;
		top: 0.2rem;
		background-size: 3rem;
	    background-position: -0.81rem -1.26rem;
	}
}
.sub-buttom {
	font-family: DroidSansFallback;
	width: 92%;
	height: 0.4rem;
	margin: 0 auto;
	line-height: 0.4rem;
	margin-top: 0.2rem;
	margin-bottom: 0.8rem;
	font-size: 0.2rem;
	color: #663D00;
	text-align: center;
	background-image: linear-gradient(-93deg, #FFDF89 0%, #F2CA5A 92%);
	box-shadow: 0 10px 4px 0 rgba(243,203,93,0.30);
	border-radius: 100px;
}
</style>
