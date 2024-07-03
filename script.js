document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {id: 1, name: "Air force", price: 470, image: "https://i.ibb.co/D9hT4tH/IMG-20240624-WA0028.jpg", description: "Air force footwear delivers exceptional support and responsiveness for all-day wear, making them a must-have for fashion-conscious consumers"},
        {id: 2, name: "Gucci", price: 200, image: "https://i.ibb.co/r7kQRZR/IMG-20240620-WA0002.jpg", description: "featuring exquisite craftsmanship and iconic designs"},
        {id: 3, name: "Air max", price: 320, image: "https://i.ibb.co/Kz8mzdw/IMG-20240624-WA0025.jpg", description: "Air Max footwear delivers exceptional support and responsiveness for all-day wear, making them a must-have for fashion-conscious consumers"},
        {id: 4, name: "Gucci", price: 220, image: "https://i.ibb.co/YQpnRnv/IMG-20240624-WA0033.jpg", description: "collection reflects the brand's rich heritage and modern sensibilities"},
        {id: 5, name: "Gucci", price: 200, image: "https://i.ibb.co/dJQ5f7h/IMG-20240620-WA0001.jpg", description: "Gucci's footwear collection embodies the brand's timeless elegance and contemporary flair"},
        {id: 6, name: "Gucci", price: 200, image: "https://i.ibb.co/c63gBwq/IMG-20240620-WA0007.jpg", description: "Renowned for its high-end, luxurious footwear"},
        {id: 7, name: "Gucci", price: 200, image: "https://i.ibb.co/r7kQRZR/IMG-20240620-WA0002.jpg", description: "Renowned for its high-end, luxurious footwear"},
        {id: 8, name: "Nike", price: 320, image: "https://i.ibb.co/Y8GmgtJ/IMG-20240624-WA0029.jpg", description: "Nike's footwear line combines cutting-edge performance technology with sleek, trend-setting designs"},
        {id: 9, name: "Gucci", price: 200, image: "https://i.ibb.co/X24vbLP/IMG-20240620-WA0006.jpg", description: "From classic leather  to trendy logo-embellished slides"},
        {id: 10, name: "Gucci", price: 200, image: "https://i.ibb.co/c63gBwq/IMG-20240620-WA0007.jpg", description: "Renowned for its high-end, luxurious footwear"},
        {id: 11, name: "Air max", price: 420, image: "https://i.ibb.co/wQ2DzDy/IMG-20240624-WA0027.jpg", description: "modern designs, Air Max shoes provide both high-performance technology and striking visual appeal."},
        {id: 12, name: "Gucci", price: 220, image: "https://i.ibb.co/YQpnRnv/IMG-20240624-WA0033.jpg", description: "collection reflects the brand's rich heritage and modern sensibilities"},
        {id: 13, name: "Birkenstock", price: 370, image: "https://i.ibb.co/vsCRMBk/IMG-20240624-WA0034.jpg", description: "Birkenstock's iconic sandals and shoes offer unparalleled comfort"},
        {id: 14, name: "Adidas", price: 370, image: "https://i.ibb.co/gZyrbXf/IMG-20240624-WA0031.jpg", description: "cutting-edge cushioning systems, responsive outsoles, and breathable materials, ensuring optimal comfort and performance"},
        {id: 15, name: "Gucci", price: 200, image: "https://i.ibb.co/gMWK9wC/IMG-20240620-WA0009.jpg", description: " Featuring exquisite craftsmanship and iconic designs"},
        {id: 16, name: "Gucci", price: 200, image: "https://i.ibb.co/h9wz8VL/IMG-20240620-WA0005.jpg", description: "Seamlessly blends timeless sophistication with modern, fashion-forward aesthetics."},
        {id: 17, name: "Gucci", price: 400, image: "https://i.ibb.co/ncDs9pk/IMG-20240624-WA0000.jpg", description: " Featuring exquisite craftsmanship and iconic designs."},
        {id: 18, name: "Hermes", price: 200, image: "https://i.ibb.co/hC7kgP6/IMG-20240624-WA0005.jpg", description: "Hermès is renowned for its exquisite and luxurious footwear, crafted with the finest materials and meticulous attention"},
        {id: 19, name: "Gucci", price: 200, image: "https://i.ibb.co/qksgksK/IMG-20240620-WA0012.jpg", description: "A luxurious collection of high-quality footwear"},
        
       {id: 1, name: "Timberland", price: 200, image: "https://i.ibb.co/F0110dR/IMG-20240620-WA0011.jpg", description: "Timberland produces high-quality, durable outdoor footwear designed for rugged environments."},
        {id: 2, name: "Gucci", price: 200, image: "https://i.ibb.co/fCVtCJB/IMG-20240620-WA0008.jpg", description: "Blend luxurious craftsmanship with cutting-edge design."},
        {id: 3, name: "Reebok", price: 500, image: "https://i.ibb.co/chCc98r/IMG-20240624-WA0032.jpg", description: "Reebok's diverse footwear collection blends athletic performance and contemporary style."},
        {id: 4, name: "Balenciaga", price: 220, image: "https://i.ibb.co/ZT4wNCJ/IMG-20240624-WA0003.jpg" , description: "The Balenciaga footwear collection embodies the brand's timeless elegance and contemporary flair."},
        {id: 5, name: "Reebok", price: 420, image: "https://i.ibb.co/wWGfVT1/IMG-20240624-WA0026.jpg", description: "Reebok's diverse footwear collection blends athletic performance and contemporary style."},
        {id: 6, name: "Reebok", price: 420, image: "https://i.ibb.co/C6FpBFb/IMG-20240624-WA0024.jpg" , description: "This Reebok blends has athletic performance and contemporary style."},
      {id: 20, name: "Gucci", price: 400, image: "https://i.ibb.co/cDmL5Dp/IMG-20240624-WA0022.jpg" , description: "blend luxurious craftsmanship with cutting-edge design."},
        {id: 21, name: "Balenciaga", price: 200, image: "https://i.ibb.co/phXXSjM/IMG-20240624-WA0010.jpg" , description: "The Versace footwear collection embodies the brand's timeless elegance and contemporary flair."},
        {id: 22, name: "Balenciaga", price: 400, image: "https://i.ibb.co/7WmYCNZ/IMG-20240624-WA0016.jpg", description: "Blend luxurious craftsmanship with cutting-edge design for men."},
        {id: 23, name: "Versace", price: 400, image: "https://i.ibb.co/9hDyD9y/IMG-20240624-WA0020.jpg", description: "From sleek leather dress shoes to bold, statement-making sneakers, Versace footwear blends luxury and modern style."},
        {id: 24, name: "Gucci", price: 400, image: "https://i.ibb.co/cDmL5Dp/IMG-20240624-WA0022.jpg"  , description: "From sleek leather dress shoes to bold, statement-making sneakers, gucci footwear blends luxury and modern style."},
        {id: 25, name: "Gucci", price: 400, image: "https://i.ibb.co/X3YbTLT/IMG-20240624-WA0017.jpg", description: "blend luxurious craftsmanship with cutting-edge design."},
        {id: 26, name: "Dior", price: 400, image: "https://i.ibb.co/0hGf5hq/IMG-20240624-WA0013.jpg", description: "footwear offerings seamlessly blend traditional savoir-faire with modern, fashion-forward sensibilities, making them a coveted choice for the discerning style enthusiast."},
        {id: 27, name: "Gucci", price: 400, image: "https://i.ibb.co/Kj751Gc/IMG-20240624-WA0014.jpg", description: "From sleek leather dress shoes to bold, statement-making sneakers, Versace footwear blends luxury and modern style."},
        {id: 28, name: "Adidas", price: 320, image: "https://i.ibb.co/KqBrWzr/IMG-20240624-WA0030.jpg", description: "cutting-edge cushioning systems, responsive outsoles, and breathable materials, ensuring optimal comfort and performance"},
        {id: 29, name: "Gucci", price: 200, image: "https://i.ibb.co/Z27Q7vN/IMG-20240620-WA0013.jpg", description: "From classic leather dress shoes to trendy logo-embellished slides"},
        {id: 30, name: "Gucci", price: 200, image: "https://i.ibb.co/X24vbLP/IMG-20240620-WA0006.jpg" , description: "collection embodies the brand's timeless elegance and contemporary flair"},
       ];
    const productGrid = document.getElementById('product-grid');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    let favorites = JSON.parse(localStorage.getItem('favorites')) || [];

    const EXPIRATION_TIME = 12 * 60 * 60 * 1000; // 12 hours in milliseconds

    function checkExpiration(items) {
        const now = Date.now();
        return items.filter(item => now - item.timestamp < EXPIRATION_TIME);
    }

    cart = checkExpiration(cart);
    favorites = checkExpiration(favorites);

    localStorage.setItem('cart', JSON.stringify(cart));
    localStorage.setItem('favorites', JSON.stringify(favorites));

    function renderProducts(products) {
        productGrid.innerHTML = '';
        products.forEach(product => {
            const productElement = document.createElement('div');
            productElement.classList.add('product-item');
            productElement.innerHTML = `
                <img src="${product.image}" alt="${product.name}" class="product-image" data-id="${product.id}">
                <h3>${product.name}</h3>
                <p>Price: GH.${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
                <button class="add-to-favorite" data-id="${product.id}">Add to Favorites</button>
                <button class="close-product" data-id="${product.id}" style="display: none;">Close</button>
            `;
            productGrid.appendChild(productElement);
        });
    }

    renderProducts(products);

    const cartModal = document.getElementById('cart-modal');
    const cartClose = document.getElementById('cart-close');
    const cartIcon = document.getElementById('cart-icon');

    const favoriteModal = document.getElementById('favorite-modal');
    const favoriteClose = document.getElementById('favorite-close');
    const favoriteIcon = document.getElementById('favorite-icon');

    const searchModal = document.getElementById('search-modal');
    const searchClose = document.getElementById('search-close');
    const searchIcon = document.getElementById('search-icon');
    const searchInput = document.getElementById('search-input');
    const searchButton = document.getElementById('search-button');

    const productModal = document.getElementById('product-modal');
    const productClose = document.getElementById('product-close');
    const productDetails = document.getElementById('product-details');

    cartIcon.addEventListener('click', function() {
        cartModal.style.display = 'block';
        updateCart();
    });

    cartClose.addEventListener('click', function() {
        cartModal.style.display = 'none';
    });

    favoriteIcon.addEventListener('click', function() {
        favoriteModal.style.display = 'block';
        updateFavorites();
    });

    favoriteClose.addEventListener('click', function() {
        favoriteModal.style.display = 'none';
    });

    searchIcon.addEventListener('click', function() {
        searchModal.style.display = 'block';
        searchInput.value = '';
        searchInput.focus();
    });

    searchClose.addEventListener('click', function() {
        searchModal.style.display = 'none';
    });

    productClose.addEventListener('click', function() {
        productModal.style.display = 'none';
    });

    searchButton.addEventListener('click', function() {
        const searchTerm = searchInput.value.trim().toLowerCase();
        const filteredProducts = products.filter(product =>
            product.name.toLowerCase().includes(searchTerm) || 
            product.description.toLowerCase().includes(searchTerm)
        );

        renderProducts(filteredProducts);
        searchModal.style.display = 'none';

        document.querySelectorAll('.close-product').forEach(button => {
            button.style.display = 'block';
        });
    });

    window.addEventListener('click', function(event) {
        if (event.target === cartModal) {
            cartModal.style.display = 'none';
        } else if (event.target === favoriteModal) {
            favoriteModal.style.display = 'none';
        } else if (event.target === searchModal) {
            searchModal.style.display = 'none';
        } else if (event.target === productModal) {
            productModal.style.display = 'none';
        }
    });

    function updateCart() {
        const cartItems = document.getElementById('cart-items');
        const cartTotal = document.getElementById('cart-total');
        cartItems.innerHTML = '';

        if (cart.length === 0) {
            cartItems.innerHTML = 'No items in cart.';
            cartTotal.innerText = 'Total: GH.0';
            return;
        }

        let total = 0;
        cart.forEach(item => {
            const product = products.find(p => p.id === item.id);
            const cartItem = document.createElement('div');
            cartItem.innerText = `${product.name} - GH.${product.price}`;
            cartItems.appendChild(cartItem);
            total += product.price;
        });

        cartTotal.innerText = `Total: GH.${total}`;
     
    }

    function updateFavorites() {
        const favoriteItems = document.getElementById('favorite-items');
        favoriteItems.innerHTML = '';

        if (favorites.length === 0) {
            favoriteItems.innerHTML = 'No favorite items.';
            return;
        }

        favorites.forEach(item => {
            const product = products.find(p => p.id === item.id);
            const favoriteItem = document.createElement('div');
            favoriteItem.innerText = `${product.name}`;
            favoriteItems.appendChild(favoriteItem);
        });
    }

    document.body.addEventListener('click', function(event) {
        if (event.target.classList.contains('add-to-cart')) {
            const productId = parseInt(event.target.dataset.id);
            if (!cart.some(item => item.id === productId)) {
                cart.push({id: productId, timestamp: Date.now()});
                localStorage.setItem('cart', JSON.stringify(cart));
                document.getElementById('cart-count').innerText = cart.length;
                updateCart();
            }
        }

        if (event.target.classList.contains('add-to-favorite')) {
            const productId = parseInt(event.target.dataset.id);
            if (!favorites.some(item => item.id === productId)) {
                favorites.push({id: productId, timestamp: Date.now()});
                localStorage.setItem('favorites', JSON.stringify(favorites));
                document.getElementById('favorite-count').innerText = favorites.length;
                updateFavorites();
            }
        }

        if (event.target.classList.contains('product-image')) {
            const productId = parseInt(event.target.dataset.id);
            const product = products.find(p => p.id === productId);
            productDetails.innerHTML = `
                <img src="${product.image}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>Price: GH.${product.price}</p>
            `;
            productModal.style.display = 'block';
        }

        if (event.target.classList.contains('close-product')) {
            const productId = parseInt(event.target.dataset.id);
            const productIndex = products.findIndex(p => p.id === productId);
            if (productIndex > -1) {
                products.splice(productIndex, 1);
                renderProducts(products);
            }
        }
    });

    // Update cart and favorite counts on page load
    document.getElementById('cart-count').innerText = cart.length;
    document.getElementById('favorite-count').innerText = favorites.length;
});
