<template>
    <div class="v-catalog">
    <router-link :to="{ name: 'cart', params: {cart_data: CART}}">
    <div class="link_cart btn">cart: {{CART.length}} </div>    
    </router-link>
     
        <h2>Catalog</h2>
        <div class="filters">
             <v-select
         :selected="selected"
         :options="categories"
         @select='sortByCategories'

         />
         <div class="range-slider">
             <input 
             type="range"
             min="0"
             max= "10000"
             step="10"
             v-model.number="minPrice"
             @change='setRangeSlider'  
                >
             <input
              type="range" 
              min="0"
              max= "10000"
              step="100"
              v-model.number="maxPrice"
              @change='setRangeSlider'   
                >
         </div>  
         <div class="range-values">
             <p>Min:{{minPrice}}</p>
             <p>Max:{{maxPrice}}</p>
         </div> 
        </div>
		
        <div class="catalog-list">
            <v-catalog-item v-for="product in filteredProducts" :key="product.article"
             v-bind:product_data="product" 
             @addToCart="addToCart" />
        </div>


    </div>
</template>


<script>
    import vCatalogItem from "./v-catalog-item"
	import {mapActions, mapGetters} from 'vuex'
    import vSelect from '../v-select'
    
    export default {
        name: "v-catalog",
        components: {
            vCatalogItem,
            vSelect
        },
        props: {},
        data() {
            return {
              categories: [
                  {name: 'Все', value: 'All'},
                  {name: 'Мужские', value: 'm'},
                  {name: 'Женские', value: 'w'}
              ],
              selected: 'Все',
              sortedProducts: [],
              minPrice: 0,
              maxPrice: 10000
			  
            }
				
				
        },
        computed: {
			...mapGetters([
				'PRODUCTS',
                'CART',
                'SEARCH_VALUE'
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
            setRangeSlider(){
               if(this.minPrice > this.maxPrice){
                   let tmp = this.maxPrice;
                   this.maxPrice = this.minPrice;
                   this.minPrice = tmp;
               } 
                 this.sortByCategories()
            },    
            sortByCategories(category){
             let vm = this;  
              this.sortedProducts = [...this.PRODUCTS];
              this.sortedProducts = this.sortedProducts.filter(function(item){
                  return item.price >= vm.minPrice && item.price <= vm.maxPrice
              })
             if (category){
                 this.sortedProducts = this.sortedProducts.filter(e =>{
                     vm.selected === category.name;
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
                 
			watch: {
			 SEARCH_VALUE()	{
				this.sortProductsBySearchValue(this.SEARCH_VALUE); 
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

</style>
