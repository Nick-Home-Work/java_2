class ProductList {
    #goods;
    #allProducts;

    constructor(container = '.products') {
        this.container = container;
        // this._goods = [];
        this.#goods = [];
        this.#allProducts = [];

        this.#fetchGoods();
        this.#render();
    }

   #fetchGoods() {
        this.#goods = [
   {id: 1, title: 'Notebook',price:20000, src:'img/notebook.jpg'},
   {id: 2, title: 'Mouse', price: 1500, src:'img/mouse.jpg'},
   {id: 3, title: 'Keyboard', price: 5000, src:'img/key.jpg'},
   {id: 4, title: 'Gamepad', price: 4500, src:'img/game.jpg'},

        ];
    }

   #render() {
        const block = document.querySelector(this.container);

        for (let product of this.#goods) {
            const productObject = new ProductItem(product);
            //console.log(productObject);
            this.#allProducts.push(productObject);
            block.insertAdjacentHTML('beforeend', productObject.render());
        }
    }

	sumGoods(){
		const sum = this.#goods.reduce((result, good) =>{
		      return result + good.price;

	},0 );
       //пока выведу в консоль
       //после можно в корзину метод то для нее
       console.log(sum);
					}
}

class ProductItem {
    constructor(product, src='https://placehold.it/200x150') {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.src = product.src;
    }

    render() {
        return `<div class="product-item data-id="${this.id}">
               <img src='${this.src}' alt='' title='' >
               <h3>${this.title}</h3>
               <p>${this.price} p </p>
               <div class='backet'>
               <img class="telega" src="img/telega.png" alt="">
               <button class="by-btn">Добавить в корзину</button>
               </div>
               </div>`;
    }
}

const productList = new ProductList();

productList.sumGoods();

// мысли о корзине
class Backet {
	backet;
    constructor(product) {
		this.backet = [];
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
    }
	fetchGoods() {
       //будет свой метод получаем необходимый useru товар
	   // backet.push()
    }
	renderItem(){
		//вернет строку html одного товара

	}
	sumGoods(){
		//модно наследовать - подсчет суммы
	}
	render(){
		//отрисовываем товар в корзине - тоже по своему
		//+ 2 кнопки щтправить и очистить
	}
	backetClian(){
		//очистим addeventlistener
	}
	backetSend(){
		//отправим addeventlistener
	}

	//примерно так ...
	// почему то код рубля не сработал?!

}
