Vue.component('products', {
    data(){
        return {
            catalogUrl: '',
            products: [],
            filtered: [],
            imgCatalog: 'https://placehold.it/200x150',
        }
    },
    methods: {
        filter(value){
            let regexp = new RegExp(value, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    mounted(){
        this.$parent.getJson('/api/products')
            .then(data => {
                for(let el of data){
                    this.products.push(el);
                    this.filtered.push(el);
                }
            });
    },
    template: `
        <div class="products">
            <product v-for="item of filtered" :key="item.id_product" :src="item.src" :product="item"></product>
        </div>

    `
});
Vue.component('product', {
    props: ['product', 'img'],
    data() {
      return {
          /**
           * Создали ссылку на API нашей корзины. Т.к. все компоненты у нас регистрируются в корневом экземпляре Vue,
           * то мы легко можем получить доступ к ним используя свойство $root.
           * $parent можно использовать для доступа к родительскому экземпляру из дочернего.
           */
          cartAPI: this.$root.$refs.cart,
      };
    },

    template:`
    <div class="product-item" :key="product.id_product">
					<img :src="product.src" alt="Some img">
					<div class="desc">
						<h3>{{product.product_name}}</h3>
						<p>{{product.price}}р</p>
						<div class='backet'>
							<img class="telega" src="img/telega.png" alt="">
							 <button class="buy-btn" @click="$parent.$parent.$refs.cart.addProduct(product)">Купить</button>
						</div>
					</div>
				</div>

    `
});
