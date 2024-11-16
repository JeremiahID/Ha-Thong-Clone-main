// script for background
const Hero =  document.querySelector('.hero');
const images = ['/Images/hero-cover.jpg', '/Images/hero-cover-two.jpg','/Images/hero-cover-four.jpeg','/Images/hero-cover-six.jpeg'];
let index = 0;
function changeBackground(){
    index = (index + 1) % images.length;
    Hero.style.backgroundImage = `url(${images[index]})`;
    Hero.style.backgroundSize = 'cover';
   
}
// caling the function and setting the time frame for the background change.
changeBackground();
setInterval(changeBackground, 5000);


// GET CART UI TAG  
const Cart =  document.querySelector('#cart-menu');
const cartContainer = document.querySelector('.cart-conatianer');
const closeCart = document.querySelector('#close-cart');

//hiding the cart menu on laod
window.addEventListener('load', function(){
    cartContainer.classList.add('hide-cart');
});

Cart.addEventListener('click', ()=>{
    if(cartContainer.style.display = 'block'){
        cartContainer.classList.remove('hide-cart');
        cartContainer.classList.add('show-cart');
    
    } 
})

closeCart.addEventListener('click', ()=>{
    if(cartContainer.style.display = 'block'){
        cartContainer.classList.remove('show-cart');
        cartContainer.classList.add('hide-cart');
    } 
})


// CHANGING THE HEADER BACKGROUND COLOR WHILE SCROLLING
window.addEventListener('scroll', function() {
    var scroll = window.scrollY; // 
    var header = document.querySelector('header'); // 
    
    if (scroll >= 50) {
        header.classList.add('black'); // Add the 'black' class
    } else {
        header.classList.remove('black'); // Remove the 'black' class
    }
});


// GETTING THE HAMBURGER and NAVIGATIONS UI
const hambuger = document.querySelector('#hambuger-menu');
const Nav = document.querySelector('.navigations');
const CloseNav = document.querySelector('#close-nav');

//hiding the navigation menu on laod
window.addEventListener('load', function(){
    Nav.classList.add('hide-nav');
});

// ADDING EVENT LISTENER TO THE HAMBUGER UI
hambuger.addEventListener('click', ()=>{
    console.log('open')
    //conditional check to open the nav
    if(Nav.style.display = 'block'){
        Nav.classList.remove('hide-nav');
        Nav.classList.add('show-nav'); 
    } 

});

// ADDING EVENT LISTENER TO THE NAVIGATION UI

CloseNav.addEventListener('click', ()=>{
    //conditional check to close the nav
    if(Nav.style.display = 'block'){
        Nav.classList.remove('show-nav');
        Nav.classList.add('hide-nav'); 
    } 

});



// VALIDATING THE USER EMAIL
function validateEmail(email) {
    // Regular expression for basic email validation
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email); // Returns true if valid, false otherwise
}

// EMAIL VALIDATION
const Subscribe = document.querySelector('#subscribe');
const Email = document.querySelector('#email');


// EVENT LISTENER FOR THE SUSCRIBE BUTTON
Subscribe.addEventListener('click', ()=>{
    if(Email.value === ''){
        alert('email field cannot be empty');
    } else if(Email.value !== ''){
        if (validateEmail(Email.value)) {
            alert('email subscription successful..!')
            Email.value = '';
        } else {
            alert("Invalid email");
            
        }

    } 

});



// FAVORITE TWICKING
var solid , outline; // declaring variable
let isSolid = false; // settint the flag to false

//SEETING THE CONTENT OF THE INNER HTML
solid =  `<svg class="favorite" id="favorite-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
<path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>`;
outline = `<svg class="favorite" id="favorite-icon" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
<path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>`

//GETING ALL ELEMENTS ASSOCIATED WITH THE FAV SVG's
var svgs = document.getElementsByClassName('svg');

//LOOPING THROUGH EACH SVG TO PASS THE CONDITIONAL FUNCTION 
for(let i = 0; i < svgs.length; i++){
    svgs[i].addEventListener('click', ()=>{
        Favorite(svgs[i])
    });
}

//FUNCTION TO CONDITIONALLY CHECK THROGH EACH SVG
function Favorite(svgElement){
    
    // CONDTIONAL STATEMENT TO TOGGLE THE STATE OF THE FLAG USING TENEARY OPERATOR!
    svgElement.innerHTML = isSolid ? outline : solid;    

    // SETTING THE FLAG TO TRUE / FALSE DEPENDING ON THE CURRENT STATE.
    isSolid = !isSolid;
}


//  events listener for the various event in the cart items
const cartItems = document.querySelectorAll('.cart-items'); //selecting all cart items
const checkOutPrice = document.getElementById('check-out-price'); //selecting cart items price
const checkOutSubTotal = document.getElementById('subTotal'); //selecting cart items subtotal

//Looping throught each cart  items
function cartEvents(){
    cartItems.forEach(item => {
        // Get the quantity element, add button, and subtract button for each item
        const quantityElement = item.querySelector('.Qty');
        const addQuantity = item.querySelector('.add-qty');
        const subQuantity = item.querySelector('.sub-qty');
        const closeCartItem = item.querySelector('.close-icon-x');
        const Price = item.querySelector('.price');
        let itemQty = parseInt(quantityElement.innerHTML) || 0; // Initialize with existing quantity
        let itemPrice = parseInt(Price.innerHTML) || 0; // Initialize with existing price
    
        // Event listener for adding quantity
        addQuantity.addEventListener('click', () => {
            itemQty += 1;
            quantityElement.innerHTML = itemQty;
            itemPrice += 350;
            Price.innerHTML =` $${itemPrice}`;
            calculateTotal(); // Recalculate total after updating item quantity
            calculateSubTotal(); //Recalculate total after updating item quantity
        });
    
        // Event listener for subtracting quantity
        subQuantity.addEventListener('click', () => {
            if (itemQty > 0) {
                itemQty -= 1;
                itemPrice -= 350;
            }
            quantityElement.innerHTML = itemQty;
            Price.innerHTML =` $${itemPrice}`;
            calculateTotal(); // Recalculate total after updating item quantity
            calculateSubTotal();  //Recalculate total after updating item quantity
        });
    
        // deleting cart in cart
        closeCartItem.addEventListener('click', ()=>{
            item.remove(); //
            calculateTotal()//
            calculateSubTotal();//
        })
    });
}

cartEvents()// calling the function cart events

// Function to calculate the total price of all cart items
function calculateTotal() {
    let total = 0;
    cartItems.forEach(item => {
        const Price = item.querySelector('.price');
        let itemPrice = parseInt(Price.innerHTML.replace('$', '')) || 0;
        total += itemPrice;
    });
    checkOutPrice.innerHTML = `$${total}`;
}
// Calling the functions calculate total
calculateTotal();

// Function to calculate the total quantity of all cart items
function calculateSubTotal(){
    let subTotal = 0;
    cartItems.forEach(item => {
        const quantityElement = item.querySelector('.Qty');
        let itemQty = parseInt(quantityElement.innerHTML) || 0; ;
        subTotal += itemQty;
    });
    //  conditional check for items quantities using tenary operator
    subTotal > 1? checkOutSubTotal.innerHTML = `(${subTotal} items)`:checkOutSubTotal.innerHTML = `(${subTotal} item)`
}
// Calling the functions calculate total qunatities
calculateSubTotal();


// cart icon change from outline to solid on click
var cartSolid, cartOutline, isCartSolid;// variable declaration
function solidOutlineChange(){
    isCartSolid = false; // setting the state of the toggling to false

    var cartAddIcon = document.querySelectorAll('.cart-add-icon');// getting the container for the each cart items icon

    cartSolid = `<svg class="icon-cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="size-6">
                <path d="M2.25 2.25a.75.75 0 0 0 0 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 0 0-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 0 0 0-1.5H5.378A2.25 2.25 0 0 1 7.5 15h11.218a.75.75 0 0 0 .674-.421 60.358 60.358 0 0 0 2.96-7.228.75.75 0 0 0-.525-.965A60.864 60.864 0 0 0 5.68 4.509l-.232-.867A1.875 1.875 0 0 0 3.636 2.25H2.25ZM3.75 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0ZM16.5 20.25a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" />
                </svg>`

    cartOutline = `<svg class="icon-cart" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                    </svg>`

    // looping through each conatainer
    cartAddIcon.forEach(addicon =>{
        const me = addicon.querySelector('#icon-cart-test');
        me.addEventListener('click' , ()=>{
            cartItemIcon(me);
        })
    });
}

solidOutlineChange();

//FUNCTION TO CONDITIONALLY CHECK THROGH EACH SVG
function cartItemIcon(cartElement){
    // CONDTIONAL STATEMENT TO TOGGLE THE STATE OF THE FLAG 
    if(cartElement.innerHTML = isCartSolid){
        cartElement.innerHTML = cartOutline;
        removeItemFromCart();
    } else {
        cartElement.innerHTML = cartSolid;
        addItemToCart();
    }

    // SETTING THE FLAG TO TRUE / FALSE DEPENDING ON THE CURRENT STATE.
    isCartSolid = !isCartSolid;
}

// fucntion to add and remove an item from the cart from the main page by clicking the cart icon
var newCartItem;
var cartContent = document.querySelector('.cart-content');

// add function
function addItemToCart(newCartItem){
    newCartItem =  `
                        <!-- Item One -->
    <div class="cart-items d-flex justify-content-between align-items-center my-1 " >
        <!-- image  -->
        <div class=" cart-items-image">
            <img src="./Images/menu-best-seller-one.jpeg" alt="" srcset="" class="cart-image-size">
        </div>
        <!-- image name and price -->
        <div class="cart-items-name  d-flex justify-content-between align-items-start flex-column">
            <div class="">
                <p class="fw-light px-2 m-0 fs-6 "> Montec Blouse </p>
                <p class="fs-8 px-2 fw-light"> Meduim </p>

            </div>

            <div class=" ">
                <p class="price fs-8 px-2 m-0 price" > $0 </p>
            </div>

        </div>

        <!-- item close and add/remove -->
        <div class=" cart-items-icons border-2 flex flex-column ">

            <!-- close items icon -->
            <div class="close-icon position-relative ">
                <svg class="items-icon-size close-icon-x " xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                </svg>
            </div>

            <!-- quantity and add or remove -->
            <div class="add-remove border border-black rounded-1">
                <!-- remove -->
                <svg  class="items-icon-size  m-0 sub-qty" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M5 12h14" />
                </svg>

                <!-- Quantity -->
                    <p class="text-dark m-0 fs-8 Qty px-1" > 0 </p>
                <!-- add -->
                <svg class="items-icon-size add-qty"  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                </svg>
            </div>
        </div>

    </div>`;
    cartContent.innerHTML += newCartItem;
    
}
// remove function
function removeItemFromCart(){
    newCartItem =  ``;
    cartContent.innerHTML.re;
}
