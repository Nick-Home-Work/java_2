<template>
    <div class="v-galery">
    <router-link :to="{ name: 'cart', params: {cart_data: CART}}">
    <div class="link_cart btn">cart: {{CART.length}} </div>    
    </router-link>
		
        <div class="catalog-list">
            <v-catalog-item v-for="product in filteredProducts" :key="product.article"
             v-bind:product_data="product" 
             @addToCart="addToCart" />
        </div>


    </div>
</template>


<script>
    import vCatalogItem from "../catalog/v-catalog-item"
	import {mapActions, mapGetters} from 'vuex'
    
    
    export default {
        name: "v-galery",
        components: {
            vCatalogItem

        },
        props: {},
        data() {
            return {
              sortedProducts: []
	
            }
				
				
        },
        computed: {
			...mapGetters([
				'PRODUCTS',
                'CART'
            
			]),
            filteredProducts(){
            if(this.sortedProducts.length){
             return this.sortedProducts
        } else {
           return this.PRODUCTS
        }
        }
		},
        methods: {
             ...mapActions([
				'GET_PRODUCTS_FROM_API',
				'ADD_TO_CART'
			]),

            
            sortByCategories(category){
              //let vm = this;  
              this.sortedProducts = [...this.PRODUCTS];
              this.sortedProducts = this.sortedProducts.filter(item =>{
                  return item.price >= this.minPrice && item.price <= this.maxPrice
              })
             if (category){
                 this.sortedProducts = this.sortedProducts.filter(e =>{
                     this.selected === category.name;
                  return e.category === category.name 
             })
              }
            },
			addToCart(data){
			  this.ADD_TO_CART(data);
			  
		    },
			sortProductsBySearchValue(value){
				this.sortedProducts = [...this.PRODUCTS];
				if (value) {
				this.sortedProducts = this.sortedProducts.filter(function(item){
                    return item.name.toLowerCase().includes(value.toLowerCase())})	
				} else {
					this.sortedProducts = this.PRODUCTS;
				}
				
			}		
             },
                 

		mounted() {
           this.GET_PRODUCTS_FROM_API();
           this.sortByCategories();
			this.sortProductsBySearchValue(this.SEARH_VALUE);
			
        }
        
        
    }

</script>


<style>
	.v-catalog{
		margin-top:100px;
	}
    .catalog-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        align-items: center;

    }
    .link_cart{
        position: absolute;
        top: 10px;
        right: 10px;
        padding: 16px;
      
    }
    .filters{
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .range-slider{
        position: relative;
        width: 400px;
        margin: auto 16px;
        text-align: center;
        
    }
    .range-slider input[type="range"]{
        width:100%;
  height: 2em;
  display: block;
  margin: 0;
}

.range-slider input[type="range"]:last-child{
  margin-top: -2em;
}

input[type="range"]::-webkit-slider-thumb {
  pointer-events: all;
}
input[type="range"]::-moz-range-thumb {
  pointer-events: all;
}
input[type="range"]::-ms-thumb {
  pointer-events: all;
}
	.catalog-list{
		margin-top:80px;
	}
</style>
