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
const cartContainer = document.querySelector('.cart-container');
const closeCart = document.querySelector('#close-cart');


//hiding the cart menu on laod
window.addEventListener('load', function(){
    cartContainer.classList.add('hide-cart')
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
        document.body.classList.remove('no-scroll'); 
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
            
        };

    };
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

/*

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
// calling the function cart events
cartEvents();

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

*/