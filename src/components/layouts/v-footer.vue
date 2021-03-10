<template>
	<div class="v-footer">
		<div class="container">
           <div class="footer_info">
				{{info}}
			</div>
			<div class="footer_connect">
				<a href="#"><i class='material-icons mail'></i></a>
				<a href="#"><i class='material-icons mail'></i></a>
				<a href="#"><i class='material-icons mail'></i></a>
				<a href="#"><i class='material-icons mail'></i></a>
				<a href="#"><i class='material-icons mail'></i></a>
			</div>
		</div>
	</div>
</template>


<script>
	export default {
		name: 'v-footer',
		props: {},
		data() {
			return {
				info: '&copy; 2017 Brand All Rights Reserved.'
			}
		},
		computed: {

		},
		methods: {

		}

	}

</script>


<style scoped>
	.v-footer{
		width: 100%;
		min-height: 100px;
	background: #e6e6e6;
	}
	.v-footer .container{
	display: flex;
		align-items: center;
		justify-content: space-between;
		height: 100px;	
		padding: 20px;
	}
	.footer_info {
		font-size: 16px;
		line-height: 42px;
		font-weight: 400;
		letter-spacing: 0.025em;
		color: #7a7a7a;
	}
	.footer_connect {
		display: flex;
	}
		.footer_connect a {
			display: flex;
			align-items: center;
			justify-content: center;
			width: 32px;
			height: 32px;
			background: #fff;
			margin-left: 10px;
			text-decoration: none;
			color: #7a7a7a;
	      }
			.footer_connect a:hover {
				color: #fff;
				background: #f16d7f;
			}
		
</style>
