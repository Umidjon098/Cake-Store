const products = [{
        id: 1,
        img: 'img/6_1_1.jpg',
        name: 'Lorem ipsum dolor sit amet',
        price: "$20.00"
    },
    {
        id: 2,
        img: 'img/9_5.jpg',
        name: 'Lorem ipsum dolor sit amet',
        price: "$21.00"
    },
    {
        id: 3,
        img: 'img/8_1_2.jpg',
        name: 'Lorem ipsum dolor sit amet',
        price: "$23.00"
    },
    {
        id: 4,
        img: 'img/5_2_1.jpg',
        name: 'Lorem ipsum dolor sit amet',
        price: "$24.00"
    },
    {
        id: 5,
        img: 'img/3_1_1.jpg',
        name: 'Lorem ipsum dolor sit amet',
        price: "$25.00"
    },
    {
        id: 6,
        img: 'img/2_5.jpg',
        name: 'Lorem ipsum dolor sit amet',
        price: "$26.00"
    },
    {
        id: 7,
        img: 'img/1_4.jpg',
        name: 'Lorem ipsum dolor sit amet',
        price: "$27.00"
    },
    {
        id: 8,
        img: 'img/9_1_1.jpg',
        name: 'Lorem ipsum dolor sit amet',
        price: "$28.00"
    },
    {
        id: 9,
        img: 'img/1.jpg',
        name: 'Lorem ipsum dolor sit amet',
        price: "$29.00"
    },
    {
        id: 10,
        img: 'img/2_1.jpg',
        name: 'Lorem ipsum dolor sit amet',
        price: "$30.00"
    },
    {
        id: 11,
        img: 'img/8_1_2.jpg',
        name: 'Lorem ipsum dolor sit amet',
        price: "$31.00"
    }
];
const footerImg = [{
    img: 'img/1.1.jpg',
}, {
    img: 'img/2.jpg'
}, {
    img: 'img/3.jpg'
}, {
    img: 'img/4.jpg'
}, {
    img: 'img/5.jpg'
}];
window.addEventListener('DOMContentLoaded', function() {
    setNavBgColor();
    reviewItem();
})
setMainSlider(products);
setProductItem(products);
setFooterImg(footerImg);

function setNavBgColor() {
    const scrollUp = document.querySelector("#navbar-bg");
    window.addEventListener("scroll", function() {
        if (this.scrollY > 50) {
            scrollUp.classList.add("nav-bg");
        } else {
            scrollUp.classList.remove("nav-bg");
        }
    });
}

function reviewItem() {
    const btns = document.querySelectorAll('.reviewBtnItem');
    const review = document.querySelector('.details-box');
    const reviewItem = document.querySelectorAll('.reviewContentData');
    review.addEventListener('click', function(e) {
        const id = e.target.dataset.id;
        if (id) {
            btns.forEach(function(btn) {
                btn.classList.remove('active-detail');
            })
            e.target.classList.add('active-detail');

            reviewItem.forEach(function(review) {
                review.classList.remove('active');
            });
            const currentReview = document.getElementById(id);
            currentReview.classList.add('active');
        }
    });
}

function setMainSlider(slide) {
    const card = document.querySelector('.mainSlider');
    let setItem = slide.map(function(item) {
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
    setMainCarouselItem(card);
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

function setFooterImg(footer) {
    const footerCard = document.querySelector('.footerGallery');
    let setItem = footer.map(function(item) {
        return `
    <img src=${item.img} alt="">
    `
    });
    footerCard.innerHTML = setItem;
    setMainCarouselItem(footerCard);
}

function setMainCarouselItem(item) {
    $(item).owlCarousel({
        loop: true,
        autoplay: true,
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
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
                items: 4
            }
        }
    });
}