<template>
	<div class="v-header">
	<div class="container">
	 <router-link :to="{name: 'mainPage'}">
	 	<img src="../../assets/logo.png" alt="">
	 </router-link>
		<h1>Только <span>vue.js</span></h1>
	<form class="form_search">	
		<input
		 type="text"
		 placeholder="Search for Item..."
		 v-model='searchValue'
		  >
		<button
		 class='search_btn'
		 >
			<i 
			class='material-icons'
			@click='search(searchValue)'
			>search</i>
		</button>
		<button
		class='search_btn'	
		>
		<i 
			class='material-icons'
			@click='clearSearhField'
			>remove_done</i>	
		</button>
	 </form>
	 </div>
	 <div class="menu">
	 	<div>
		<router-link  :to="{name: 'mainPage'}">
		    Home
		</router-link>
		</div>
		<div>
		<router-link  :to="{name: 'catalog'}">
		    Catalog
		</router-link>
		</div>
		<div>
		<router-link  :to="{name: 'cart'}">
		     Cart
		</router-link>
		</div>
	 </div>
	</div>
	
</template>


<script>
	import {mapActions, mapGetters} from 'vuex'
	
	export default {
		name: 'v-header',
		props:{},
		data() {
			return {
				searchValue: ''
			}
		},
        computed: {
			...mapGetters([
				'SEARCH_VALUE'
			])
		},
		methods: {
			...mapActions([
				'GET_SEARCH_VALUE_TO_VUEX'
			]),
			search(value) {
				this.GET_SEARCH_VALUE_TO_VUEX(value);
			    if (this.$router.path != '/catalog') {
			     this.$router.push('/catalog');
		    }
			    
			},
		   clearSearhField(){
			   this.searchValue = ''
		      this.GET_SEARCH_VALUE_TO_VUEX();
			    if (this.$route.path !== '/catalog') {
			     this.$router.push('/catalog')
		    }
		   }
		}
		
	}
</script>


<style scoped>
	.v-header{
		 padding: 10px;
         min-height: 100px;
         box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.17);
		 margin-top:0;
	}
	.v-header h1{
		font-size: 50px;
		font-weight: bold;
	}
	.v-header span{
		color:#f16d7f;
	}
	.v-header .container{
		height: inherit;
		display: flex;
        align-items: center;
		justify-content: space-between;
		flex-wrap: nowrap;
	}
	.v-header img{
		width: 50px;
	}
	.form_search{
		max-width: 400px;
		min-width: 280px;
		height: 40px;
		margin-right: 10px;
		border: 1px solid #e6e6e6;
		border-radius: 3px;
		overflow: hidden;
		display: flex;
        align-items: center;
	}

	.form_search input{
	        height: inherit;
			padding: 0 3px;
			border: none;
			outline: none;	
	}
	.search_btn{
		    display: flex;
		   justify-content: center;
		    align-items: center;
	        width: 36px;
			height: inherit;
			padding: 0 8px;
			border: 0;
			background: none;
			border-left: 1px solid #e6e6e6;
			font-size: 14px;
			line-height: 32px;
			font-weight: 400;
			letter-spacing: 0.025em;
			color: #a4a4a4;
				
	}
	.menu{
		margin: 0 auto;
		width: 300px;
		display: flex;
		justify-content: center;
	}
	.menu div{
		display: flex;
		justify-content: center;
		align-items: center;
		font-size:16px;
		margin-left: 10px;
	}
	.menu div a{
		text-decoration: none;
		color:#454545;
		
	}
	@media (max-width: 760px) {
		.v-header .container{
		
        align-items: center;
		justify-content: center;
		flex-wrap: wrap;
	}
	}
</style>