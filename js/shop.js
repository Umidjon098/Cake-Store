import { products } from './data.js';

function setShopItem(productItem) {

    const shopping = document.querySelector('.shopping-row');

    let setItem = productItem.map(function(item) {
        return `
        <div class="col-xl-3 col-lg-3 col-md-4 col-sm-6 col-xs-12 p-1">
        <div class="item">
            <a href="shopping.html" class="text-dark">
                <img src=${item.img}  alt="" class="img-fluid" width="100%">
                <p>${item.name} <br> <span class="text-dark">${item.price}</span></p>
                <div class="icons">
                    <a href="#"><i class="fas fa-shopping-cart text-dark"></i></a>
                    <a href="#"><i class="far fa-heart text-dark"></i></a>
                    <a href="#"><i class="far fa-comment-dots text-dark"></i></a>
                    <a href="#"><i class="fas fa-search text-dark"></i></a>
                </div>
            </a>
        </div>
    </div>`
    }).join('');
    shopping.innerHTML = setItem;
}
const shoppingBtn = document.querySelector('#product-category');
shoppingBtn.addEventListener('click', setShopItem(products));