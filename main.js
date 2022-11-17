
let productos = [
    {
        id: 1,
        nombre: 'Pera Conferencia',
        precio: 0.34,
        imagen: 'item1.jpeg'
    },
    {
        id: 2,
        nombre: 'Manzana Golden',
        precio: 0.36,
        imagen: 'item2.jpeg'
    },
    {
        id: 3,
        nombre: 'Uvas',
        precio: 2.60,
        imagen: 'item3.jpeg'
    },
    {
        id: 4,
        nombre: 'Banana',
        precio: 0.21,
        imagen: 'item4.jpeg'
    },
    {
        id: 5,
        nombre: 'Melón Galia',
        precio: 2.71,
        imagen: 'item5.jpeg'
    },
    {
        id: 6,
        nombre: 'Mandarina',
        precio: 0.36,
        imagen: 'item6.jpeg'
    },
    {
        id: 7,
        nombre: 'Piña',
        precio: 2.30,
        imagen: 'item7.jpeg'
    },
    {
        id: 8,
        nombre: 'Mango',
        precio: 1.23,
        imagen: 'item8.jpeg'
    }
];

let cartItems = []


function renderProducts(){

    let listElement = document.getElementById('listItems');
    for (let i = 0; i < productos.length; i++){
        let divElementItem = document.createElement('div');
        divElementItem.classList.add('item');

        let divElementItemDescription = document.createElement('div');
        divElementItemDescription.classList.add('item-description');

        let imgElementItem = document.createElement('img');
        imgElementItem.classList.add('item-img');
        let url = './assets/' + productos[i].imagen;
        imgElementItem.setAttribute('src', url);

        let nameElementTitle = document.createElement('p');
        nameElementTitle.classList.add('item-name');
        nameElementTitle.textContent = productos[i].nombre;

        let divElementItemOrder = document.createElement('div');
        divElementItemOrder.classList.add('item-order');

        let priceElementItem = document.createElement('p');
        priceElementItem.classList.add('item-price');
        priceElementItem.textContent = productos[i].precio + '€';

        let buttonElementItem = document.createElement('button');
        buttonElementItem.classList.add('item-add');
        buttonElementItem.textContent = 'Añadir al carrito';
        buttonElementItem.addEventListener('click', function() { addProductsToCart(productos[i])});

        divElementItemDescription.appendChild(imgElementItem);
        divElementItemDescription.appendChild(nameElementTitle);
        divElementItem.appendChild(divElementItemDescription);

        divElementItemOrder.appendChild(priceElementItem);
        divElementItemOrder.appendChild(buttonElementItem);
        divElementItem.appendChild(divElementItemOrder);
        
        listElement.appendChild(divElementItem);
    }
}

function addProductsToCart(item){
    cartItems.push(item);
    console.log(cartItems);
    renderCart();
}

function renderCart(){
    let elementNoProduct = document.getElementById('noProducts')
    let elementCartList = document.getElementById('cartItems');
    elementCartList.textContent = '';
    let totalPrice = 0
    if (cartItems.length > 0){
      elementNoProduct.style.display = 'none';

        for( let i = 0; i < cartItems.length; i++){

            let elementCartItem = document.createElement('div');
            elementCartItem.classList.add('cart-item');

            let elementCartImage = document.createElement('img');
            elementCartImage.classList.add('cart-item-image');
            let url = './assets/'+ cartItems[i].imagen;
            elementCartImage.setAttribute('src', url);
    
            let elementCartQuantity = document.createElement('p');
            elementCartQuantity.classList.add('cart-item-quantity')
            elementCartQuantity.textContent = '1 Ud.';
    
            let elementCartDescription = document.createElement('p');
            elementCartDescription.classList.add('cart-item-description');
            elementCartDescription.textContent = cartItems[i].nombre;
    
            let elementCartTotal = document.createElement('div');
            elementCartTotal.classList.add('cart-item-total');

            let elementCartPrice = document.createElement('p');
            elementCartPrice.classList.add('cart-item-price');
            elementCartPrice.textContent = cartItems[i].precio + '€';
            
            let elementCartButton = document.createElement('button');
            elementCartButton.classList.add('cart-item-button');
            elementCartButton.textContent = '-'
            elementCartButton.addEventListener('click', function() { deleteProductsFromCart(i)});
    
        
            elementCartItem.appendChild(elementCartImage);
            elementCartItem.appendChild(elementCartDescription);
            elementCartItem.appendChild(elementCartPrice);
            elementCartItem.appendChild(elementCartTotal);
            elementCartTotal.appendChild(elementCartQuantity);
            elementCartTotal.appendChild(elementCartButton);
            
        
            elementCartList.appendChild(elementCartItem);
    
            totalPrice += cartItems[i].precio;
        }
    
        let elementTotal = document.createElement('p');
        elementTotal.classList.add('cart-total')
        elementTotal.textContent = 'Total: ' + totalPrice.toFixed(2) + '€';
    
        elementCartList.appendChild(elementTotal);
    
    } else{
        elementNoProduct.style.display = 'flex'
    }
}

function deleteProductsFromCart(elementPosition){
    let cartItemAux = [];

    for( let i = 0; i < cartItems.length; i++){
        if( i !== elementPosition){
            cartItemAux.push(cartItems[i]);            
        }
    }
    cartItems = cartItemAux;
    renderCart();
}

renderProducts();
renderCart();