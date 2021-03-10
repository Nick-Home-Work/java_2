export default {
	SET_SEARCH_VALUE_TO_VUEX: (state, value) => {
		state.searchValue = value;
	},
    SET_PRODUCTS_TO_STATE: (state, products) => {
			state.products = products;
		},
		SET_CART: (state, product) => {
			if (state.cart.length) {
				let isProductExist = false;
				state.cart.map(function(unit){
					if (unit.article === product.article){
						isProductExist = true;
						unit.quantity++;
					}
				})
				if (!isProductExist){
				  state.cart.push(product);
				}
			} else {
			  state.cart.push(product);
			}
		},
		REMOVE_FROM_CART: (state, index) => {
		  state.cart.splice(index, 1);
		},
        INCREMENT: (state, index) => {
           state.cart[index].quantity++;
        },
        DECREMENT: (state, index) => {
            if( state.cart[index].quantity >1){
                state.cart[index].quantity--;
            }

        }

}
