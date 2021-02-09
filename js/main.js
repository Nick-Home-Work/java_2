const API = 'http://localhost/project/';

const app = new Vue({
	el: '#app',
	data: {
		userSearch: '',
        showCart: false,
		catalogUrl: 'catalogData.json',
		products: [],
		cart: [],
		filtered: [],
		imgCatalog: 'https://placehold.it/200x150',
		show: false,


	},
	methods: {
		getJson(url) {
			return fetch(url)
				.then(result => result.json())
				.catch(error => {
					console.log(error);
				})
		},
		addProduct(product) {
			for (rec of this.cart) {
				if (rec.product_name == product.product_name) {
					rec.quantity++;
					return;
				}
			}
			this.cart.push({...product, quantity:1});

		},
		deletePositionCart(item) {
			for (rec of this.cart) {
				if (rec.product_name == item.product_name && rec.quantity > 1) {
					rec.quantity--;
					return;
				}
			}
			console.log(rec);
			let index = this.cart.indexOf(item);
			this.cart.splice(index, 1);
		},
		filter() {
      let regexp = new RegExp(this.userSearch, 'i');
      this.filtered = this.products.filter(el => regexp.test(el.product_name));
    },

	},
	computed: {

	},
	beforeCreate() {

	},
	created() {
		this.getJson(`${API + this.catalogUrl}`)
			.then(data => {
				for (let el of data) {
                this.products.push(el);
                this.filtered.push(el);
              }
			});
	},

	beforeMount() {

	},
	mounted() {

	},
	beforeUpdate() {

	},
	updated() {

	},
	beforeDestroy() {

	},
	destroyed() {

	},
});
