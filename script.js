let currentBanner = 0;
const banners = document.querySelectorAll('.banner');
let slideInterval = setInterval(nextSlide, 5000);

function showBanner(index) {
    banners.forEach((banner, i) => {
        banner.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentBanner = (currentBanner + 1) % banners.length;
    showBanner(currentBanner);
}

function prevSlide() {
    currentBanner = (currentBanner - 1 + banners.length) % banners.length;
    showBanner(currentBanner);
}

function pauseSlideshow() {
    clearInterval(slideInterval);
}

function playSlideshow() {
    slideInterval = setInterval(nextSlide, 5000);
}

banners.forEach(banner => {
    banner.addEventListener('mouseenter', pauseSlideshow);
    banner.addEventListener('mouseleave', playSlideshow);
});

showBanner(currentBanner);

const products = [
    { id: 1, title: "MacBook Air M3 8-core CPU/8GB /256GB/13.6-inch IPS(2y)", price: "Rs.139,500.00", img: "img/product/product1.png" },
    { id: 2, title: "ASUS ZENBOOK 14 OLED /8GB/512GB/14 OLED(2y)", price: "Rs.239,500.00", img: "img/product/product2.png" },
    { id: 3, title: "HP 15s-du1114TU Celeron N4020 /4GB/1TB/15.6″/W10/(2y)", price: "Rs.439,500.00", img: "img/product/product3.png" },
    { id: 4, title: "MacBook Mobile 8GB /256GB(2y)", price: "Rs.89,500.00", img: "img/product/product4.png" },
    { id: 5, title: "HP 250-G8 CORE i3 11GN/4GB/1TB/15.6″/W10(2y)", price: "Rs.250,500.00", img: "img/product/product5.png" },
];

const productContainer = document.getElementById('product-container');

products.forEach(product => {
    const productDiv = document.createElement('div');
    productDiv.className = 'product';

    const productImg = document.createElement('img');
    productImg.src = product.img;
    productImg.alt = product.title;

    const productTitle = document.createElement('p');
    productTitle.textContent = product.title;

    const productPrice = document.createElement('p');
    productPrice.textContent = product.price;

    const addToCartBtn = document.createElement('button');
    addToCartBtn.className = 'add-to-cart';
    addToCartBtn.textContent = 'Add to Cart';

    const quickViewBtn = document.createElement('button');
    quickViewBtn.className = 'quick-view';
    quickViewBtn.textContent = 'Quick View';
    quickViewBtn.setAttribute('data-id', product.id);

    productDiv.append(productImg, productTitle, productPrice, addToCartBtn, quickViewBtn);
    productContainer.appendChild(productDiv);
});

document.addEventListener('DOMContentLoaded', function () {
    const quickViewButtons = document.querySelectorAll('.quick-view');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            const popup = document.createElement('div');
            popup.className = 'popup-overlay';
            const productId = button.getAttribute('data-id'); 
            popup.innerHTML = `
                <div class="popup-content">
                    <span class="close-btn">&times;</span>
                    <h2>Quick View</h2>
                    <p>Product details for ID: ${productId} will go here...</p>
                </div>
            `;

            document.body.appendChild(popup);

            const closeBtn = popup.querySelector('.close-btn');
            closeBtn.addEventListener('click', function () {
                document.body.removeChild(popup);
            });

            popup.addEventListener('click', function (e) {
                if (e.target === popup) {
                    document.body.removeChild(popup);
                }
            });
        });
    });
});
