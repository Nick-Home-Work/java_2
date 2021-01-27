class Hamburger {
	orderPrice;
	orderKalories;

constructor (size, stuffing) {
	this.orderPrice = [];
	this.orderKalories = [];
	this.size = size;
	this.stuffing = stuffing;
}

addTopping() {

	let topping = [
	{seasoning:'приправа', price: 15, calories: 0},
	{seasoning:'майонез',price: 20, calories:5},
	{seasoning:'вместе',price: 35, calories:5},

]
	let order = prompt('какую добавку желаете: приправа, майонез , вместе');

	topping.forEach(item => {
		if(item.seasoning === order){
		this.orderPrice.push(item.price);
		this.orderKalories.push(item.calories);

		alert('заказ принят!');
		}

	});

	return this;
}

getSize() {
let size = [
    {size:'big', price: 100, calories: 40},
	{size:'small', price: 50, calories:20},
   ];

let order = prompt('Какой Вам гамбургер big или small')

size.forEach(item => {
		if(item.size === order){
		this.orderPrice.push(item.price);
		this.orderKalories.push(item.calories);
		}

});
	return this;
			 }
getStuffing() {

	let stuffing =  [
	{stuffing:'сыр', price: 10, calories: 20},
	{stuffing:'салат',price: 20, calories:5},
	{stuffing:'каптофель',price:15, calories:10},
    ]

	let order = prompt('какую начинку сыр, салат, картофель');

	stuffing.forEach(item => {
		if(item.stuffing === order){
		this.orderPrice.push(item.price);
		this.orderKalories.push(item.calories);

		}

	});

	return this;
}

calculatePrice() {
	let money = this.orderPrice.reduce((result, curent) =>{
		    return result + curent;
	},0);
	console.log(`Ваш гамбургер стоит ${money} рублей`);
	return this;
	}

calculateCalories() {
	let Fat = this.orderKalories.reduce((result, curent) =>{
		      return result + curent;
},0);
	console.log(`И за эту мизерную цену Вы получаете ${Fat}  каллоpий`);
	return this;
}

}


const orderHamburger = new Hamburger();

orderHamburger.getSize().getStuffing().addTopping().calculatePrice().calculateCalories();

