Vue.component('cart', {
    data(){
      return {
          imgCart: 'https://placehold.it/50x100',
          cartUrl: '/getBasket.json',
          cartItems: [],
          showCart: false,
      }
    },
    methods: {
        addProduct(product){
            let find = this.cartItems.find(el => el.id_product === product.id_product);
            if(find){
                this.$parent.putJson(`/api/cart/${find.id_product}`, {quantity: 1});
                find.quantity++;
            } else {
                let prod = Object.assign({quantity: 1}, product);
                this.$parent.postJson('/api/cart', prod)
                  .then(data => {
                      if (data.result === 1) {
                          this.cartItems.push(prod);
                      }
                  });
            }
        },
        remove(product) {
            let find = this.cartItems.find(el => el.id_product === product.id_product);
			 if(find.quantity > 1){
			//уменьшаем на 1
				 this.$parent.putJson(`/api/cart/${find.id_product}`);
               find.quantity--;

            } else {
			//тогда совсем удаляем
				this.cartItems.splice(this.cartItems.indexOf(find), 1)
            }
    },
	},
    mounted(){
        this.$parent.getJson('/api/cart')
            .then(data => {
                for(let el of data.contents){
                    this.cartItems.push(el);
                }
            });
    },
    template:`
        <div class="backet">
            <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
            <div class="cart-block" v-show="showCart">
                <p v-if="!cartItems.length">Корзина пуста</p>
                <cart-item class="cart-item"
                v-for="item of cartItems"
                :key="item.id_product"
                :cart-item="item"
                @remove="remove">
                </cart-item>
            </div>
            </div>`
});

Vue.component('cart-item', {
    props: ['cartItem'],
    template: `
             <div class="cart-item product-item">
                    <div class="product-desc desc_backet">
                         <div>
                            <h3>{{cartItem.product_name}}</h3>
                            <p >Количество: {{cartItem.quantity}}</p>
                            <p>{{cartItem.price}}p за единицу</p>
                        </div>

                    <div>
                        <b><p>{{cartItem.quantity*cartItem.price}}p</p></b>
                        <button class="del-btn" @click="$emit('remove', cartItem)"><i class="fas fa-trash-alt"></i></button>
                    </div>
                    </div>
                </div>
    `
});
