const products =[
    {id: 1, title: 'Notebook', price: 20000, src:'img/notebook.jpg'},
    {id: 2, title: 'Mouse', price: 1500, src:'img/mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 5000, src:'img/key.jpg'},
    {id: 4, title: 'Gamepad', price: 4500, src:'img/game.jpg'},
];

const renderProduct = (title, price, src = '') => {
    return `<div class="product-item">
                <img src='${src}' alt='' title='' >
                <h3>${title}</h3>
                <p>${price}</p>
                 <div class='backet'>
                <img class="telega" src="img/telega.png" alt="">
                <button class="by-btn">Добавить в корзину</button>
                </div>
            </div>`;
};

const renderProducts = list => {
    const productList = list.map((product) =>
          renderProduct(product.title, product.price, product.src));

          document.querySelector('.products').innerHTML = productList.join("");

   };

renderProducts(products);
