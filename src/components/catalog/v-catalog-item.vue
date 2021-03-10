<template>
     <div class="v-catalog-item">
        <v-popup
        v-if='isInfoPopupVisible' 
        @closePopup='closeInfoPopup'
        :popupTitle='product_data.name'
        rightBtnTitle='В корзину'
        @rightBtnAction='addToCart'
        >
        <img class='v-catalog-item__image' :src="require('../../assets/images/' + product_data.image)" alt="">
        <div>
        <p class="v_catalog_item__name">{{ product_data.name }}</p>
        <p class="v_catalog_item__price">Price:{{ product_data.price | toFix }}</p>
         <p class="v_catalog_item__price">{{ product_data.category }}</p>
         <p class="v_catalog_item__price">Сведения:{{ product_data.info }}</p>
        </div>
        
		 </v-popup>
        
       
       
        <img class='v-catalog-item__image' :src="require('../../assets/images/' + product_data.image)" alt="">
       <p class="v_catalog_item__name">{{ product_data.name }}</p>
    <p class="v_catalog_item__price">Price:{{ product_data.price | toFix}}</p>
        <button
        class="v-catalog-item__show-info btn btn_coral"
        @click='showPopupInfo'
        >Show info</button>
        <button
         class="v_catalog_item__button btn"
         @click="addToCart"
         >add to cart</button>

    </div>
</template>


<script>
    import vPopup from '../popup/v-popup'
	import toFix from '../../filters/toFix'
	
	
    export default {
        name: "v-catalog-item",
        components: {
           vPopup 
        },
        props:{
            product_data:{
            type: Object,
            default(){
                return {}
            }    
           }
        },
        data() {
            return {
                isInfoPopupVisible: false
            }
        },
		filters: {
		 toFix
		 
		},
        computed: {},
        mounted() {
            this.$set(this.product_data, 'quantity', 1)
        },
        methods: {
            showPopupInfo(){
              this.isInfoPopupVisible = true;  
            },
			closeInfoPopup(){
				this.isInfoPopupVisible = false;
			},
           addToCart(){
		   this.$emit('addToCart', this.product_data)
		  }
        }
    }
</script>
<style >
    .v-catalog-item{
        flex-basis: 25%;
        box-shadow: 0 0 8px 0 #e0e0e0;
        padding: 16px;
        margin-bottom: 16px;
       
    }
    .v-catalog-item__image{
         width: 200px;
    }
    
</style>