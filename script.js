// JavaScript for Banner Slider
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

// JavaScript for Dynamic Products
const products = [
    { id: 1, title: "Product 1", price: "£50.00", img: "img/product/product1.png" },
    { id: 2, title: "Product 2", price: "£60.00", img: "img/product/product2.png" },
    { id: 3, title: "Product 3", price: "£70.00", img: "img/product/product3.png" },
    { id: 4, title: "Product 4", price: "£60.00", img: "img/product/product4.png" },
    { id: 5, title: "Product 5", price: "£70.00", img: "img/product/product5.png" },
    // Add more products here as needed
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

// JavaScript for Quick View Popup
document.addEventListener('DOMContentLoaded', function () {
    const quickViewButtons = document.querySelectorAll('.quick-view');
    quickViewButtons.forEach(button => {
        button.addEventListener('click', function (event) {
            event.preventDefault();

            // Create a popup container
            const popup = document.createElement('div');
            popup.className = 'popup-overlay';

            // Add content to the popup
            const productId = button.getAttribute('data-id'); // Get the product ID
            popup.innerHTML = `
                <div class="popup-content">
                    <span class="close-btn">&times;</span>
                    <h2>Quick View</h2>
                    <p>Product details for ID: ${productId} will go here...</p>
                </div>
            `;

            // Append popup to the body
            document.body.appendChild(popup);

            // Close popup when "X" is clicked
            const closeBtn = popup.querySelector('.close-btn');
            closeBtn.addEventListener('click', function () {
                document.body.removeChild(popup);
            });

            // Close popup when clicking outside the content
            popup.addEventListener('click', function (e) {
                if (e.target === popup) {
                    document.body.removeChild(popup);
                }
            });
        });
    });
});
