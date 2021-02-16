import { products } from './data.js';
import { footerImg } from './data.js';

window.addEventListener('DOMContentLoaded', function() {
    setProductItem(products);
    setSlideData(products);
    setFooterImg(footerImg);
})

function setCarouselItem(item) {
    $(item).owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1024: {
                items: 3
            },
            1367: {
                items: 3
            }
        }
    });
}

function setCarousel(item) {
    $(item).owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 2
            },
            1024: {
                items: 3
            },
            1367: {
                items: 5
            }
        }
    });
}

function setProductItem(productItem) {
    const cards = document.querySelectorAll('.slider');
    cards.forEach(function(card) {
        let setItem = productItem.map(function(item) {
            return `
            <div class="item">
                    <a href="shopping.html" class="text-dark">
                        <img src=${item.img} alt=${item.name} class="img-fluid">
                        <p>${item.name} <br> <span>${item.price}</span></p>
                        <div class="icons">
                            <a href=""><i class="fas fa-shopping-cart text-dark"></i></a>
                            <a href="#"><i class="far fa-heart text-dark"></i></a>
                            <a href="#"><i class="far fa-comment-dots text-dark"></i></a>
                            <a href="#"><i class="fas fa-search text-dark"></i></a>
                        </div>
                    </a>
                </div>`
        }).join('');
        card.innerHTML = setItem;
        setCarouselItem(card);
    })
}

function setSlideData(productItem) {
    const cards = document.querySelectorAll('.slide-data');
    cards.forEach(function(card) {
        let setItem = productItem.map(function(item) {
            return `
            <div class="item">
                    <a href="shopping.html" class="text-dark">
                        <img src=${item.img} alt=${item.name} class="img-fluid">
                        <p>${item.name} <br> <span>${item.price}</span></p>
                        <div class="icons">
                            <a href=""><i class="fas fa-shopping-cart text-dark"></i></a>
                            <a href="#"><i class="far fa-heart text-dark"></i></a>
                            <a href="#"><i class="far fa-comment-dots text-dark"></i></a>
                            <a href="#"><i class="fas fa-search text-dark"></i></a>
                        </div>
                    </a>
                </div>`
        }).join('');
        card.innerHTML = setItem;
        setCarousel(card);
    })
}

const footerCard = document.querySelector('.footerGallery');

function setFooterImg(footer) {
    let setItem = footer.map(function(item) {
        return `
    <img src=${item.img} alt="">
    `
    });
    footerCard.innerHTML = setItem;
    setCarousel(footerCard);
}


const categoryBtns = document.querySelectorAll('.category');
const card = document.querySelectorAll('.slider');
categoryBtns.forEach(function(btn) {
    btn.addEventListener('click', function(event) {
        const currentBtn = event.target.dataset.id;
        if (currentBtn) {
            categoryBtns.forEach(function(btn) {
                btn.classList.remove('active-category-btn');
            });
            event.target.classList.add('active-category-btn');
        }
        // const menuCategory = products.filter(function(menuItem) {
        //     // console.log(menuItem.category);
        //     if (menuItem.category === currentBtn) {
        //         return menuItem;
        //     }
        // });
        // setProductItem(menuCategory);
        // console.log(menuCategory)
    });
});

// const slides = document.querySelectorAll(".slide-item");
// const nextBtn = document.querySelector(".next");
// const prevBtn = document.querySelector(".perv");
// slides.forEach(function(slide, index) {
//     slide.style.left = `${index * 100}%`;
// });
// let counter = 0;
// nextBtn.addEventListener("click", function() {
//     counter++;
//     carousel();
// });

// prevBtn.addEventListener("click", function() {
//     counter--;
//     carousel();
// });

// function carousel() {
//     if (counter == -1) {
//         counter = slides.length - 3;
//         slides.forEach(function(slide) {
//             slide.style.transform = `translateX(-${counter * 100}%)`;
//         });
//     } else if (counter <= slides.length - 1) {
//         slides.forEach(function(slide) {
//             slide.style.transform = `translateX(-${counter * 100}%)`;
//         });
//     } else {
//         counter = 0;
//         slides.forEach(function(slide) {
//             slide.style.transform = `translateX(-${counter * 100}%)`;
//         });
//     }
// }