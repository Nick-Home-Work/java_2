<template>
    <div class="v-cart-item">
        <img class='v-cart-item_image' :src="require('../../assets/images/' + cart_item_data.image)" alt="">
        <div class="v-cart-item_info">
            <p>{{cart_item_data.name}}</p>
            <p>{{cart_item_data.price | toFix }}</p>
            <p>{{cart_item_data.article}}</p>
        </div>
        <div class="v-cart-item_quantity">
            <p>количество</p>
            <span>
                <span class='quantity_btn'@click='decrementItem'>- </span>
                {{cart_item_data.quantity}}
                <span class='quantity_btn' @click='incrementItem'> +</span>
            </span>
        </div>
        <button @click='deleteFromCart'>
        <i 
			class='material-icons'
			@click='search(searchValue)'
			>delete_foreve</i>
        </button>
    </div>
</template>


<script>
	import toFix from '../../filters/toFix'
	
     export default {
        name: "v-cart-item",
        props: {
            cart_item_data: {
                type: Object,
                default () {
                    return {}
                }
            }
        },
        data() {
            return {}
        },
		 filters: {
			toFix
			
		 },
        methods: {
            decrementItem(){
               this.$emit('decrement')
            },
            incrementItem(){
                this.$emit('increment')
            },
            deleteFromCart() {
                this.$emit('deleteFromCart')
            }
        },
        computed: {},

    }

</script>

<style scoped>
    .v-cart-item {
        display: flex;
        justify-content: space-between;
        flex-wrap: nowrap;
        box-shadow: 0 0 8px 0 #e0e0e0;
        align-items: center;

    }

    .v-cart-item_image {
        width: 50px;
    }
    .quantity_btn{
        cursor:pointer;
    }
    .material-icons{
        
        color:indianred;
    }
    button{
        background:transparent;
        border:none;
        width: 70px;
    }
	@media (max-width: 760px) {
		.v-cart-item {
        
        justify-content:center;
        flex-wrap: wrap;
        

    }
	}

</style>
