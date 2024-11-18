let cartSolid, cartOutline, isCartSolid = false; // variable declaration

// Define SVG icons
cartSolid = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="icon-cart size-6">
    <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z"/>
</svg>`;

cartOutline = `
<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="icon-cart size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"/>
</svg>`;

function solidOutlineChange() {
    const cartAddIcons = document.querySelectorAll('.cart-add-icon');

    cartAddIcons.forEach(addIcon => {
        const iconElement = addIcon.querySelector('#icon-cart-test');
        iconElement.innerHTML = cartOutline;

        iconElement.addEventListener('click', () => {
            toggleCartIcon(iconElement);
        });
    });
}

function toggleCartIcon(cartElement) {
    // Toggle the state of the cart icon
    if (isCartSolid) {
        cartElement.innerHTML = cartOutline;
        isCartSolid = false;
        removeItemFromCart(cartElement);
    } else {
        cartElement.innerHTML = cartSolid;
        isCartSolid = true;
        addItemToCart();
    }
}

// Function to add an item to the cart
function addItemToCart() {
    const cartContent = document.querySelector('.cart-content');
    const newCartItem = `
    <div class="cart-items d-flex justify-content-between align-items-center my-1">
        <div class="cart-items-image">
            <img src="./Images/menu-best-seller-one.jpeg" alt="item" class="cart-image-size">
        </div>
        <div class="cart-items-name d-flex justify-content-between align-items-start flex-column">
            <p class="fw-light px-2 m-0 fs-6">Montec Blouse</p>
            <p class="fs-8 px-2 fw-light">Medium</p>
            <p class="price fs-8 px-2 m-0">$350</p>
        </div>
        <div class="close-icon position-relative">
            <button class="remove-btn">Remove</button>
        </div>
    </div>`;
    cartContent.innerHTML += newCartItem;
}

// Function to remove items from the cart
function removeItemFromCart(cartElement) {
    cartElement.closest('.cart-items').remove();
}

// Initialize the icon change function
solidOutlineChange();
