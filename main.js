const menuEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const menuCarritoIcon = document.querySelector('.navbar-shopping-cart');
const aside = document.querySelector('.product-detail');
const menuHamIcon = document.querySelector('.menu');
const mobileMenu = document.querySelector('.mobile-menu');
const carsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener('click', toogleDesktopMenu);

menuHamIcon.addEventListener('click', toogleMobileMenu);

menuCarritoIcon.addEventListener('click', toogleCarritoDesktop);

function toogleDesktopMenu(){
   mobileMenu.classList.add('inactive');
   aside.classList.add('inactive');
   desktopMenu.classList.toggle('inactive');
}


function toogleMobileMenu(){
    desktopMenu.classList.add('inactive');
    aside.classList.add('inactive');
    mobileMenu.classList.toggle('inactive');
}

function  toogleCarritoDesktop(){
    desktopMenu.classList.add('inactive');
    mobileMenu.classList.add('inactive');
    aside.classList.toggle('inactive');
}

const productList = [];
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});
productList.push({
    name: 'Bike',
    price: '120',
    image: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
});


for (product of productList){
    const productCard = document.createElement('div');  
    productCard.classList.add('productCard');

    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);

    const productInfo = document.createElement('div');
    productInfo.setAttribute('id', product.id);

    const productInfoDiv = document.createElement('div');
    const productName = document.createElement('p');
    productName.innerText = "$" + product.Name;
    const productPrice = document.createElement('p');
    productPrice.innerText = product.Price;

    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);

    const productIntoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute = ('src', './icons/bt_add_to_cart_svg.');

    productIntoFigure.appendChild(productImgCart);

    productInfo.appendChild(productInfoDiv);
    productCard.appendChild(productIntoFigure);

    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);

    carsContainer.appendChild(productCard);





}