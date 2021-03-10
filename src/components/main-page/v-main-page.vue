<template>
	<div class="v-main-page">
		<!-- facion-->
	<section class="facion">
		<div class="container">
			<div class="info">
				<h2>THE BRAND</h2>
				<h3>OF LUXERIOUS FASHION</h3>
			</div>
		</div>
	</section>
	<!-- the end facion-->
	<!--  order-->
	<section class="order">
		<div class="container">
			<div class="order_inside right">
				<div class="for_img bottom">
					<img src="../../assets/men.jpg" alt="men">
					<div class="order_item">
						<h3>HOT DEAL</h3>
						<h2>FOR MEN</h2>
					</div>
				</div>
				<div class="for_img">
					<img class="ACCESORIES"src="../../assets/ACCESORIES.jpg" alt="ACCESORIES">
					<div class="order_item">
						<h3>LUXIROUS & TRENDY</h3>
						<h2>ACCESORIES</h2>
					</div>
				</div>
			</div>
			<div class="order_inside">
				<div class="for_img bottom">
					<img src="../../assets/woomens.jpg" alt="woomens">
					<div class="order_item">
						<h3>30% OFFER</h3>
						<h2>WOMEN</h2>
					</div>
				</div>
				<div class="for_img">
					<img src="../../assets/kinds.jpg" alt="KIDS">
					<div class="order_item">
						<h3>NEW ARRIVALS</h3>
						<h2>FOR KIDS</h2>
					</div>
				</div>
			</div>
		</div>
	</section>
	<!--the end  order-->
	<section class="fetured_Items">
			<div class="container">
		<!--fetured_Items  -->
	<section class="fetured_Items">
		<h2>Fetured Items</h2>
		<small>Shop for items based on what we featured in this week</small>
		<div class="container">
		<v-galery />
		</div>	
	</section>
	<!--the end fetured_Items -->
		</div>	
	</section>
	<!--the end fetured_Items -->
	<section class="company">
		<div class="container">
			<div class="company_inside">
				<div class="brand">
					BRAN<span class='red'>D</span>
				</div>
				<p class="first">
					Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.
				</p>
				<p>
					Efficiently plagiarize 24/365 action items and focused infomediaries. Distinctively seize superior initiatives for wireless technologies. Dynamically optimize.Objectively transition extensive data rather than cross functional solutions. Monotonectally syndicate multidisciplinary materials before go forward benefits. Intrinsicly syndicate an expanded array of processes and cross-unit partnerships.
				</p>
			</div>
			</div>
		</section>	
	</div>
</template>


<script>
	import vGalery from './v-galery'
	export default {
		name: 'v-main-page',
		props:{},
		components: {
		 	vGalery
		},
		data() {
			return {}
		},
		computed: {
			},
		methods: {
             },
			mounted() {
             }
	}
</script>


<style scoped>
	.v-main-page{
		
	}
	.facion {
		height: 610px;
	    background-color: #e8e8e8;
	}
	.facion .container{
		display: flex;
		align-items: center;
		background: url(../../assets/guy.png) no-repeat 550px 0;
		background-size: 550px;
		height: inherit;
	}
	.facion .info {
		border-left: 12px solid #f16d7f;
		padding-left: 12px;
	}
		.facion h2 {
			font-weight: 900;
			font-size: 60px;
			line-height: 41px;
			
		}

		.facion h3 {
			font-weight: 400;
			font-size: 40px;
			line-height: 32px;
			margin-top: 20px;
			@media (max-width: 356px) {
				&{font-size: 20px;}
			}
		}
	.order {
	margin-top: 100px;
	}
	.order .container {
		display: flex;
	}
	.order .container .right {
		margin-right: 20px;
	}

	.order .container .order_inside {
		display: flex;
		flex-direction: column;
	}
		.order .container .bottom {
			margin-bottom: 20px;
		}

		.order .container .for_img {
			position: relative;}
		.order .container .for_img img{
				width: 100%;
				display: block;
			}
			.order .container .order_item {
				position: absolute;
				background: #fff;
				top: 25px;
				padding: 15px 20px;
				background: white;
				text-transform: uppercase;
	}
					.order .container .order_item {
						bottom:20px;
						top:auto;
						padding: 5px 10px;
					}
				

				.order .container h2 {
					font-size: 30px;
					color: #f16d7f;
					font-weight: 900;
					
				}

				.order .container h3 {
					font-size: 18px;
					color: #222222;
					font-weight: 700;
					}
	.brand{
		width: 100px;
		line-height: 60px;
		background: url(../../assets/brand.png) no-repeat;
		font-size: 27px;
		font-weight: 300;
		letter-spacing: 0.025em;
		color: #222222;
		padding-left: 72px;
	}
	.brand span {
			font-weight: 900;
		    color:#f16d7f;
		}
	
</style>