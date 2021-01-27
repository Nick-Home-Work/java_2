class Hamburger {
	orderPrice;
	orderKalories;
constructor (size, topping, stuffing) { 
	this.orderPrice = [];
	this.orderKalories = [];
	this.size = size;
	this.topping = topping;
	this.stuffing = stuffing;
}
addTopping() {
	
	this.topping = prompt('какую добавку желаете: приправа, майонез , вместе, ничего');
	switch(this.topping){
		case 'приправа':
			this.orderPrice.push(15);
	        alert('заказ принят!');
			break;
		case 'майонез':
			this.orderPrice.push(20);
	        this.orderKalories.push(5);
			alert('заказ принят!');
			break;
		case 'вместе':
			this.orderPrice.push(35);
	        this.orderKalories.push(5); 
			alert('заказ принят!');
			break;
		case 'ничего':
			
		default: alert('заказ принят!');	
	}
	return this; 
}
	
getSize() { 
this.size = prompt('Какой Вам гамбургер big или small')	
 if(this.size === 'big'){
	this.orderPrice.push(100);
	this.orderKalories.push(40); 
	console.log(this.orderPrice);
 } else if(this.size === 'small'){
	this.orderPrice.push(50);
	this.orderKalories.push(20); 
	
 }else {alert('Такого нет');}
	return this;
}
	
getStuffing() { 
	this.stuffing = prompt('какую начинку сыр, салат, картофель');
	switch(this.stuffing){
		case 'сыр':
			this.orderPrice.push(10);
	        this.orderKalories.push(20);
			break;
		case 'салат':
			this.orderPrice.push(20);
	        this.orderKalories.push(5);
			console.log(this.orderPrice, this.orderKalories);
			break;
		case 'картофель':
			this.orderPrice.push(15);
	        this.orderKalories.push(10); 
			break;
		default: alert('такой начинки нет');	
	}
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
	console.log(`И за эту мизерную цену Вы получаете ${Fat}  каллопий`);
	return this;
}
	
}


const orderHamburger = new Hamburger();

orderHamburger.getSize().getStuffing().addTopping().calculatePrice().calculateCalories();

